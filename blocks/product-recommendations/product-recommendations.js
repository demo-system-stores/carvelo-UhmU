// Dropin Tools
import { events } from '@dropins/tools/event-bus.js';
import { getConfigValue } from '@dropins/tools/lib/aem/configs.js';

// Dropin Components
import { Button, Icon, provider as UI } from '@dropins/tools/components.js';
import { tryRenderAemAssetsImage } from '@dropins/tools/lib/aem/assets.js';

// Cart Dropin
import * as cartApi from '@dropins/storefront-cart/api.js';

// Recommendations Dropin
import ProductList from '@dropins/storefront-recommendations/containers/ProductList.js';
import { render as provider } from '@dropins/storefront-recommendations/render.js';
import { publishRecsItemAddToCartClick } from '@dropins/storefront-recommendations/api.js';

// Wishlist Dropin
import { WishlistToggle } from '@dropins/storefront-wishlist/containers/WishlistToggle.js';
import { render as wishlistRender } from '@dropins/storefront-wishlist/render.js';

// Block-level
import { readBlockConfig } from '../../scripts/aem.js';
import { fetchPlaceholders, rootLink } from '../../scripts/commerce.js';

// Initializers
import '../../scripts/initializers/recommendations.js';
import '../../scripts/initializers/wishlist.js';

const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;

/**
 * Gets product view history from localStorage
 * @param {string} storeViewCode - The store view code
 * @returns {Array} - Array of view history items
 */
function getProductViewHistory(storeViewCode) {
  try {
    const viewHistory = window.localStorage.getItem(`${storeViewCode}:productViewHistory`) || '[]';
    return JSON.parse(viewHistory);
  } catch (e) {
    window.localStorage.removeItem(`${storeViewCode}:productViewHistory`);
    console.error('Error parsing product view history', e);
    return [];
  }
}

/**
 * Gets purchase history from localStorage
 * @param {string} storeViewCode - The store view code
 * @returns {Array} - Array of purchase history items
 */
function getPurchaseHistory(storeViewCode) {
  try {
    const purchaseHistory = window.localStorage.getItem(`${storeViewCode}:purchaseHistory`) || '[]';
    return JSON.parse(purchaseHistory);
  } catch (e) {
    window.localStorage.removeItem(`${storeViewCode}:purchaseHistory`);
    console.error('Error parsing purchase history', e);
    return [];
  }
}

export default async function decorate(block) {
  const labels = await fetchPlaceholders();

  block.children[0].style.display = 'none';
  block.children[1].style.display = 'none';

  // Configuration
  let { currentsku, recid } = readBlockConfig(block);

  // Layout
  const fragment = document.createRange().createContextualFragment(`
    <div class="recommendations__wrapper">
      <div class="recommendations__list"></div>
    </div>
  `);

  const $list = fragment.querySelector('.recommendations__list');
  const $wrapper = fragment.querySelector('.recommendations__wrapper');

  block.appendChild(fragment);

  let visibility = !isMobile;
  let isLoading = false;
  let loadTimeout = null;

  async function loadRecommendation(
    context,
    isVisible,
    container,
    forceReload = false,
  ) {
    // Only load once the recommendation becomes visible
    if (!isVisible) {
      return;
    }

    // Prevent multiple simultaneous loads
    if (isLoading) {
      return;
    }

    // Only proceed if container is empty or force reload is requested
    if (container.children.length > 0 && !forceReload) {
      return;
    }

    isLoading = true;

    // Clear container if reloading
    if (forceReload) {
      container.innerHTML = '';
    }

    const storeViewCode = getConfigValue('headers.cs.Magento-Store-View-Code');
    const getProductLink = (item) => rootLink(`/products/${item.urlKey}/${item.sku}`);

    // Get product view history
    context.userViewHistory = getProductViewHistory(storeViewCode);

    // Get purchase history
    context.userPurchaseHistory = getPurchaseHistory(storeViewCode);

    let recommendationsData = null;

    // Get data from the event bus to set publish events
    events.on(
      'recommendations/data',
      (data) => {
        recommendationsData = data;
        if (data?.items?.length) {
          recommendationsData = data;
        }
      },
      { eager: true },
    );

    try {
      await Promise.all([
        provider.render(ProductList, {
          routeProduct: getProductLink,
          recId: recid,
          currentSku: currentsku || context.currentSku,
          userViewHistory: context.userViewHistory,
          userPurchaseHistory: context.userPurchaseHistory,
          slots: {
            Footer: (ctx) => {
              const wrapper = document.createElement('div');
              wrapper.className = 'footer__wrapper';

              const addToCart = document.createElement('div');
              addToCart.className = 'footer__button--add-to-cart';
              wrapper.appendChild(addToCart);

              if (ctx.item.itemType === 'SimpleProductView') {
                // Add to Cart Button
                UI.render(Button, {
                  children: labels.Global?.AddProductToCart,
                  icon: Icon({ source: 'Cart' }),
                  onClick: (event) => {
                    cartApi.addProductsToCart([
                      { sku: ctx.item.sku, quantity: 1 },
                    ]);
                    // Prevent the click event from bubbling up to the parent span
                    // to avoid triggering the recs-item-click event
                    event.stopPropagation();
                    // Publish ACDL event for add to cart click
                    const recommendationUnit = recommendationsData?.find(
                      (unit) => unit.items?.some(
                        (unitItem) => unitItem.sku === ctx.item.sku,
                      ),
                    );
                    publishRecsItemAddToCartClick({
                      recommendationUnit,
                      pagePlacement: 'product-list',
                      yOffsetTop: addToCart.getBoundingClientRect().top ?? 0,
                      yOffsetBottom:
                        addToCart.getBoundingClientRect().bottom ?? 0,
                      productId: ctx.index,
                    });
                  },
                  variant: 'primary',
                })(addToCart);
              } else {
                // Select Options Button
                UI.render(Button, {
                  children:
                    labels.Global?.SelectProductOptions,
                  href: rootLink(`/products/${ctx.item.urlKey}/${ctx.item.sku}`),
                  variant: 'tertiary',
                })(addToCart);
              }

              // Wishlist Button
              const $wishlistToggle = document.createElement('div');
              $wishlistToggle.classList.add('footer__button--wishlist-toggle');

              // Render Icon
              wishlistRender.render(WishlistToggle, {
                product: ctx.item,
              })($wishlistToggle);

              // Append to Cart Item
              wrapper.appendChild($wishlistToggle);

              ctx.replaceWith(wrapper);
            },

            Thumbnail: (ctx) => {
              const { item, defaultImageProps } = ctx;
              const wrapper = document.createElement('a');
              wrapper.href = getProductLink(item);

              tryRenderAemAssetsImage(ctx, {
                alias: item.sku,
                imageProps: defaultImageProps,
                wrapper,

                params: {
                  width: defaultImageProps.width,
                  height: defaultImageProps.height,
                },
              });
            },
          },
        })($wrapper),
      ]);
    } finally {
      isLoading = false;
    }
  }

  const context = {};

  // Function to re-read block configuration and trigger refresh
  function refreshBlockConfiguration() {
    const newConfig = readBlockConfig(block);
    const oldRecid = recid;
    const oldCurrentsku = currentsku;

    // Update configuration variables
    currentsku = newConfig.currentsku;
    recid = newConfig.recid;

    // Check if significant configuration changes occurred
    if (oldRecid !== recid || oldCurrentsku !== currentsku) {
      // Update context with new configuration values
      updateContext({
        recId: recid,
        currentSku: currentsku,
      });
    }
  }

  // Watch for DOM changes to configuration elements (for Universal Editor)
  let configObserver;
  if (window.location.hostname.includes('ue.da.live')) {
    configObserver = new MutationObserver((mutations) => {
      let configChanged = false;
      mutations.forEach((mutation) => {
        // Check if the mutation affects the configuration rows
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const { target } = mutation;
          // Check if the target is within a configuration row
          if (target.closest && target.closest('.product-recommendations > div')) {
            configChanged = true;
          }
        }
      });

      if (configChanged) {
        // Debounce configuration refresh to avoid excessive calls
        clearTimeout(loadTimeout);
        loadTimeout = setTimeout(() => {
          refreshBlockConfiguration();
        }, 500); // 500ms debounce for config changes
      }
    });

    // Start observing the block for configuration changes
    configObserver.observe(block, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  // Debounced loader to prevent excessive API calls
  function debouncedLoadRecommendation(forceReload = false) {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
    }

    loadTimeout = setTimeout(() => {
      loadRecommendation(context, visibility, $list, forceReload);
    }, 300); // 300ms debounce
  }

  // Track previous context values to detect significant changes
  let previousContext = {};

  function shouldReloadRecommendations(newContext) {
    // Check if significant context changes occurred that warrant reloading recommendations
    const significantChanges = ['currentSku', 'pageType', 'category', 'recId'];

    return significantChanges.some(
      (key) => newContext[key] !== previousContext[key] && newContext[key] !== undefined,
    );
  }

  function updateContext(updates) {
    const hasSignificantChanges = shouldReloadRecommendations({
      ...context,
      ...updates,
    });

    // Update context
    Object.assign(context, updates);

    // Update previous context for next comparison
    previousContext = { ...context };

    // Load or reload recommendations based on whether significant changes occurred
    if (hasSignificantChanges && $list.children.length > 0) {
      // Force reload if recommendations already exist and context changed significantly
      debouncedLoadRecommendation(true);
    } else {
      // Initial load or minor context changes
      debouncedLoadRecommendation(false);
    }
  }

  function handleProductChanges({ productContext }) {
    updateContext({ currentSku: productContext?.sku });
  }

  function handleCategoryChanges({ categoryContext }) {
    updateContext({ category: categoryContext?.name });
  }

  function handlePageTypeChanges({ pageContext }) {
    updateContext({ pageType: pageContext?.pageType });
  }

  function handleCartChanges({ shoppingCartContext }) {
    const cartSkus = shoppingCartContext?.totalQuantity === 0
      ? []
      : shoppingCartContext?.items?.map(({ product }) => product.sku);
    updateContext({ cartSkus });
  }

  // Initialize context with current configuration
  updateContext({
    recId: recid,
    currentSku: currentsku,
  });

  window.adobeDataLayer.push((dl) => {
    dl.addEventListener('adobeDataLayer:change', handlePageTypeChanges, { path: 'pageContext' });
    dl.addEventListener('adobeDataLayer:change', handleProductChanges, { path: 'productContext' });
    dl.addEventListener('adobeDataLayer:change', handleCategoryChanges, { path: 'categoryContext' });
    dl.addEventListener('adobeDataLayer:change', handleCartChanges, { path: 'shoppingCartContext' });
  });

  // Cleanup function to disconnect observer when block is removed
  const cleanupObserver = () => {
    if (configObserver) {
      configObserver.disconnect();
    }
  };

  // Listen for when the block might be removed or page unloaded
  window.addEventListener('beforeunload', cleanupObserver);

  // Store cleanup function on the block element for potential external cleanup
  block._cleanup = cleanupObserver;

  if (isMobile) {
    const section = block.closest('.section');
    const inViewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibility = true;
          debouncedLoadRecommendation(false);
          inViewObserver.disconnect();
        }
      });
    });
    inViewObserver.observe(section);
  }
}
