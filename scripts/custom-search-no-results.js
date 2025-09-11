/**
 * Custom Search No-Results Handler
 * Handles customization of search no-results message and dealer links
 * This file doesn't modify any core files
 *
 * Configuration:
 * - Fragment path: Update fragmentPath in constructor to point to your dealer fragment
 * - Custom message: Add Search.Custom.noResultsMessage to your default placeholders
 */

import { getRootPath } from '@dropins/tools/lib/aem/configs.js';
import { processAllRedirectParameters } from './custom-url-hotfix.js';
import { decorateMain } from './scripts.js';
import { loadSections } from './aem.js';
import { fetchPlaceholders } from './commerce.js';

class CustomSearchNoResults {
  constructor() {
    // Configuration - update this path to point to your dealer fragment
    this.fragmentPath = '/fragments/demo/sites-container';
    this.customMessage = null; // Will be loaded dynamically
    this.isLoading = false; // Prevent infinite loops
    this.hasProcessed = false; // Track if we've already processed this container
    this.init();
  }

  async init() {
    // Only run on search pages
    if (!CustomSearchNoResults.isSearchPage()) return;

    // Load dynamic placeholders
    await this.loadPlaceholders();

    // Wait for search components to load
    this.waitForSearchComponents();
  }

  async loadPlaceholders() {
    try {
      // Load default placeholders
      const placeholders = await fetchPlaceholders();

      // Look for custom search message in default placeholders
      this.customMessage = placeholders?.Search?.Custom?.noResultsMessage
                          || 'No results found in current dealer, you can check the other dealers for it';
    } catch (error) {
      console.warn('Error loading placeholders, using fallback message:', error);
      this.customMessage = 'No results found in current dealer, you can check the other dealers for it';
    }
  }

  static isSearchPage() {
    return window.location.pathname.includes('/search')
           || document.querySelector('.product-list-page')
           || document.querySelector('.search__product-list');
  }

  waitForSearchComponents() {
    const checkForComponents = () => {
      const productListContainer = document.querySelector('.search__product-list')
                                   || document.querySelector('[class*="product-list"]');

      if (productListContainer) {
        this.setupNoResultsMonitor(productListContainer);
      } else {
        // Try again after 500ms
        setTimeout(checkForComponents, 500);
      }
    };

    checkForComponents();
  }

  setupNoResultsMonitor(container) {
    // Add debouncing to prevent infinite loops
    let timeoutId;

    const observer = new MutationObserver(() => {
      // Clear previous timeout
      clearTimeout(timeoutId);

      // Debounce the detection to prevent rapid firing
      timeoutId = setTimeout(async () => {
        await this.handleNoResultsDetection(container);
      }, 300); // 300ms debounce
    });

    // Start observing
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initial check with delay to let the page settle
    setTimeout(() => {
      this.handleNoResultsDetection(container);
    }, 500);
  }

  async handleNoResultsDetection(container) {
    // Prevent infinite loops
    if (this.isLoading) {
      console.info('Already loading fragment, skipping detection');
      return;
    }

    // Check if we already have our custom content
    const existingCustom = container.querySelector('.custom-no-results-dealer');

    // Look for signs of no results
    const noResultsIndicators = [
      '[class*="alert"]',
      '[class*="warning"]',
      '[class*="no-results"]',
      '[class*="empty"]',
      'div:contains("no results")',
      'div:contains("No results")',
    ];

    const hasProducts = container.querySelector('[class*="product-item"], [class*="product-card"], .dropin-product-item-card');
    const hasNoResultsMessage = noResultsIndicators.some((selector) => {
      if (selector.includes(':contains')) {
        // Handle text-based selectors
        const elements = container.querySelectorAll('div');
        return Array.from(elements).some((el) => el.textContent.toLowerCase().includes('no results')
          || el.textContent.toLowerCase().includes('returned no results'));
      }
      return container.querySelector(selector);
    });

    // Only proceed if we don't already have custom content showing
    const shouldShowCustom = !hasProducts
      && (hasNoResultsMessage || CustomSearchNoResults.hasEmptyState(container))
      && !existingCustom;

    if (shouldShowCustom) {
      await this.showCustomNoResults(container);
    } else if (hasProducts && existingCustom) {
      CustomSearchNoResults.hideCustomNoResults(container);
    }
  }

  static hasEmptyState(container) {
    // Check if container is essentially empty (no products)
    const isEmpty = !container.querySelector('[class*="product"]')
                    && container.children.length < 2
                    && container.textContent.trim().length < 100;
    return isEmpty;
  }

  async showCustomNoResults(container) {
    // Prevent infinite loops
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    try {
      // Hide any existing default messages
      CustomSearchNoResults.hideDefaultMessages(container);

      // Create or show custom message
      let customContainer = container.querySelector('.custom-no-results-dealer');
      if (!customContainer) {
        // Show loading state
        const loadingContainer = document.createElement('div');
        loadingContainer.className = 'custom-no-results-dealer-loading section';
        loadingContainer.textContent = 'Loading alternative dealers...';
        container.appendChild(loadingContainer);

        try {
          // Create the custom element with fragment content
          customContainer = await this.createCustomNoResultsElement();

          // Replace loading container with actual content
          if (container.contains(loadingContainer)) {
            container.removeChild(loadingContainer);
          }

          // Only show the container if fragment loaded successfully (customContainer is not null)
          if (customContainer) {
            container.appendChild(customContainer);
          } else {
            // Fragment failed to load, don't show anything
            console.info('Fragment failed to load, no custom content will be displayed');
          }
        } catch (error) {
          console.error('Error creating custom no results element:', error);

          // Remove loading container and don't show anything
          if (container.contains(loadingContainer)) {
            container.removeChild(loadingContainer);
          }
          return;
        }
      }

      // Only set display if we have a valid container
      if (customContainer) {
        customContainer.style.display = 'block';
      }
    } finally {
      // Always reset loading flag
      this.isLoading = false;
    }
  }

  static hideCustomNoResults(container) {
    const customContainer = container.querySelector('.custom-no-results-dealer');
    if (customContainer) {
      customContainer.style.display = 'none';
    }
  }

  static hideDefaultMessages(container) {
    const defaultMessages = container.querySelectorAll('[class*="alert"], [class*="warning"], [class*="no-results"]');
    defaultMessages.forEach((msg) => {
      if (!msg.classList.contains('custom-no-results-dealer')) {
        msg.style.display = 'none';
      }
    });
  }

  /**
   * Load fragment content (simplified version using AEM path resolution)
   */
  static async loadFragment(path) {
    try {
      if (path && path.startsWith('/')) {
        const root = getRootPath().replace(/\/$/, '');
        const url = `${root}${path}.plain.html`;

        console.info('Loading fragment from URL:', url);

        const response = await fetch(url);

        if (response.ok) {
          const html = await response.text();

          // Create a main element like the standard AEM fragment loader
          const main = document.createElement('main');
          main.innerHTML = html;

          // Reset media paths (similar to standard loadFragment)
          const resetAttributeBase = (tag, attr) => {
            main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
              elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
            });
          };
          resetAttributeBase('img', 'src');
          resetAttributeBase('source', 'srcset');

          // Decorate the main element (this will identify blocks and set up decoration)
          decorateMain(main);

          // Load sections (this will load CSS and JS for blocks)
          await loadSections(main);

          console.info('Fragment loaded and decorated successfully, content length:', html.length);

          // Return the first section content or main content
          const firstSection = main.querySelector('.section');
          return firstSection || main.firstElementChild;
        }
        console.warn('Fragment request failed:', response.status, response.statusText);
      }
      return null;
    } catch (error) {
      console.warn('Failed to load fragment:', path, error);
      return null;
    }
  }

  async createCustomNoResultsElement() {
    try {
      // Try to load the fragment first using our simplified loadFragment method
      const fragmentContent = await CustomSearchNoResults.loadFragment(this.fragmentPath);

      if (!fragmentContent) {
        // Fragment failed to load, don't show anything
        console.warn('Fragment failed to load, no content will be shown:', this.fragmentPath);
        return null;
      }

      // Fragment loaded successfully, create the container
      const container = document.createElement('div');
      container.className = 'custom-no-results-dealer section';
      container.style.display = 'none';

      // Add custom message (only shown when fragment loads successfully)
      const messageDiv = document.createElement('p');
      messageDiv.className = 'section-title';
      messageDiv.textContent = this.customMessage;
      container.appendChild(messageDiv);

      // Add fragment content
      const contentContainer = document.createElement('div');
      contentContainer.className = 'fragment-content-container';
      contentContainer.appendChild(fragmentContent);

      // Process custom URLs in the fragment content
      const processedLinksCount = processAllRedirectParameters(contentContainer);
      if (processedLinksCount > 0) {
        console.info(`Processed ${processedLinksCount} custom redirect URLs in fragment`);
      }

      container.appendChild(contentContainer);

      console.info('Fragment loaded successfully:', this.fragmentPath);
      return container;
    } catch (error) {
      // Error loading fragment, don't show anything
      console.error('Error loading fragment, no content will be shown:', error);
      return null;
    }
  }

  // Method to update fragment path if needed
  updateFragmentPath(newPath) {
    this.fragmentPath = newPath;
  }
}

// Initialize when DOM is ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const _customSearchNoResults = new CustomSearchNoResults();
  });
} else {
  const _customSearchNoResults = new CustomSearchNoResults();
}

// Export for potential customization
window.CustomSearchNoResults = CustomSearchNoResults;
