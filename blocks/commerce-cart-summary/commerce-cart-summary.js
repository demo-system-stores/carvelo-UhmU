import { render as provider } from '@dropins/storefront-cart/render.js';
import CartSummaryList from '@dropins/storefront-cart/containers/CartSummaryList.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'hide-heading': hideHeading = 'false',
    'start-shopping-url': startShoppingURL = '',
    'max-items': maxItems,
    'hide-attributes': hideAttributes = '',
    'enable-item-quantity-update': enableUpdateItemQuantity = 'false',
    'enable-item-remove': enableRemoveItem = 'true',
  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(CartSummaryList, {
    hideHeading: hideHeading === 'true',
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
    routeEmptyCartCTA: startShoppingURL ? () => startShoppingURL : undefined,
    maxItems: parseInt(maxItems, 10) || undefined,
    attributesToHide: hideAttributes.split(',').map((attr) => attr.trim().toLowerCase()),
    enableUpdateItemQuantity: enableUpdateItemQuantity === 'true',
    enableRemoveItem: enableRemoveItem === 'true',
    slots: {
      Thumbnail: (ctx) => {
        const { item } = ctx;

        // Create a link to save the item for later
        const saveForLaterLink  = document.createElement('a');
        saveForLaterLink.href = '#';
        saveForLaterLink.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(`Saving ${item.name}(${item.sku}) for later`);
          // TODO: Implement save for later functionality
        });
        saveForLaterLink.innerText = 'Save for later';

        // Create a separator
        const separator = document.createElement('span');
        separator.innerText = ' | ';

        // Create a link to remove the item from the cart
        const removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(`Removing ${item.name}(${item.sku}) from cart`);
          // TODO: Implement remove item functionality
        });
        removeLink.innerText = 'Remove';

        // Create a container to hold the links
        const container = document.createElement('div');
        container.innerHTML = '<div class="cart-summary__thumbnail"/>';

        // Style the container
        container.style.font = 'var(--type-details-caption-2-font)'
        container.style.display = 'flex';
        container.style.justifyContent = 'space-between';

        // Append the links to the container
        container.appendChild(saveForLaterLink);
        container.appendChild(separator);
        container.appendChild(removeLink);

        // Append the container as a child to the existing thumbnail content
        ctx.appendChild(container)
      }
    }
  })(block);
}
