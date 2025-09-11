// Dropin Components
import {
  Button,
  provider as UI,
} from '@dropins/tools/components.js';

// Block-level
import createModal from '../modal/modal.js';

// Utilities
import { processAllRedirectParameters } from '../../scripts/custom-url-hotfix.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Loads a fragment using standard AEM loadFragment and applies URL hotfix
 * @param {string} path The path to the fragment
 * @returns {Promise<HTMLElement|null>} The processed fragment or null
 */
async function loadSiteSwitcherFragment(path) {
  try {
    // Use standard AEM fragment loader
    const fragment = await loadFragment(path);

    if (fragment) {
      // Apply our URL hotfix after AEM processing
      processAllRedirectParameters(fragment);
    }

    return fragment;
  } catch (error) {
    console.error('Error loading site switcher fragment:', error);
    return null;
  }
}

/**
 * Toggles all site selector sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleSiteDropdown(sections, expanded = false) {
  sections
    .querySelectorAll('.siteview-modal .default-content-wrapper > ul > li')
    .forEach((section) => {
      section.setAttribute('aria-expanded', expanded);
    });
}

/**
 * Creates a site switcher modal with content from a fragment
 * @param {string} fragmentPath Path to the fragment containing site options
 * @param {string} buttonText Text to display on the button
 * @returns {Object} Object with showModal function and button element
 */
export async function createSiteSwitcher(fragmentPath = '/site-switcher', buttonText = 'Switch Site') {
  let modal;

  // Modal Actions
  const showModal = async (content) => {
    modal = await createModal([content]);
    modal.showModal();
  };

  // Load fragment content
  const fragmentSiteView = await loadSiteSwitcherFragment(fragmentPath);
  if (!fragmentSiteView) {
    console.error(`Site switcher fragment (${fragmentPath}) not found`);
    return null;
  }

  // Create modal content container
  const siteSwitcher = document.createElement('div');
  siteSwitcher.id = 'siteview-modal';

  // Move content from fragment to modal container
  while (fragmentSiteView.firstElementChild) {
    siteSwitcher.append(fragmentSiteView.firstElementChild);
  }

  // Create classes for siteview modal sections
  const classes = ['siteview-title', 'siteview-list'];
  classes.forEach((c, i) => {
    const section = siteSwitcher.children[i];
    if (section) section.classList.add(`siteview-modal-${c}`);
  });

  // Site Switcher Modal Content - Site View Title
  const siteViewTitle = siteSwitcher.querySelector('.siteview-modal-siteview-title');
  if (siteViewTitle) {
    const title = siteViewTitle.querySelector('h3');
    if (title) {
      title.className = '';
      title.classList.add('siteview-modal-siteview-title');
      title.setAttribute('tabindex', '0');
    }
  }

  // Site View List
  const siteViewList = siteSwitcher.querySelector('.siteview-modal-siteview-list');

  if (siteViewList && siteViewList.children.length) {
    // Add siteview-selection class to parent UL
    siteViewList
      .querySelectorAll(':scope .default-content-wrapper > ul')
      .forEach((siteView) => {
        if (siteView.querySelector('ul')) siteView.classList.add('siteview-selection');
      });

    // If multiple sites exist per region, add class siteviews and click events for accordion
    siteViewList.querySelectorAll('.default-content-wrapper > ul > li > ul').forEach((siteRegion) => {
      if (siteRegion.children.length > 1) {
        if (siteRegion.querySelector('ul')) siteRegion.classList.add('siteviews');

        // Accessibility: add event listeners for 'click' and keyboard events and tab indexes
        siteViewList.querySelectorAll(':scope li').forEach((siteView) => {
          const link = siteView.closest('a');
          if (link) link.setAttribute('tabindex', '0');

          siteView.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const expanded = siteView.getAttribute('aria-expanded') === 'true';
              toggleSiteDropdown(siteViewList);
              siteView.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            }
          });

          siteView.addEventListener('click', () => {
            const expanded = siteView.getAttribute('aria-expanded') === 'true';
            toggleSiteDropdown(siteViewList);
            siteView.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          });
        });
      }
    });

    // If only one site link in region, convert parent UL into the li and remove the child UL
    siteViewList.querySelectorAll('.default-content-wrapper > ul > li > ul').forEach((siteRegion) => {
      const li = siteRegion.closest('li');

      if (siteRegion.children.length <= 1) {
        li.classList.add('siteview-single-site');
        const ulParent = li.closest('ul');
        const replacedChild = siteRegion.firstElementChild;
        replacedChild.className = 'siteview-single-site';

        ulParent.replaceChild(replacedChild, li);
        ulParent.setAttribute('tabindex', '0');
      } else {
        li.classList.add('siteview-multiple-sites');
        li.setAttribute('tabindex', '0');
      }
    });
  }

  // Find current/selected site (you can customize this logic)
  const currentSite = siteSwitcher.querySelector('a[aria-current="page"]')
                     || siteSwitcher.querySelector('a.current')
                     || siteSwitcher.querySelector('a');

  const selectedText = currentSite ? currentSite.textContent.trim() : buttonText;

  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('siteswitcher-button');

  // Render the Site Switcher Button
  UI.render(Button, {
    children: selectedText,
    'data-testid': 'siteview-switcher-button',
    className: 'siteview-switcher-button',
    size: 'medium',
    variant: 'tertiary',
    onClick: () => {
      showModal(siteSwitcher);
    },
  })(buttonContainer);

  return {
    showModal: () => showModal(siteSwitcher),
    buttonElement: buttonContainer,
    modalContent: siteSwitcher,
  };
}

/**
 * Decorates the site switcher block
 * @param {Element} block The site switcher block element
 */
export default async function decorate(block) {
  // Get configuration from block content
  const config = {};

  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children && row.children.length >= 2) {
      const key = row.children[0].textContent.trim().toLowerCase();
      const value = row.children[1].textContent.trim();
      config[key] = value;
    }
  });

  // Default values
  const fragmentPath = config['fragment-path'] || config.path || '/site-switcher';
  const buttonText = config['button-text'] || config.text || 'Switch Site';

  // Clear the block content
  block.innerHTML = '';

  try {
    // Create the site switcher
    const siteSwitcher = await createSiteSwitcher(fragmentPath, buttonText);

    if (siteSwitcher) {
      // Add the button to the block
      block.appendChild(siteSwitcher.buttonElement);
    } else {
      block.innerHTML = '<p>Site switcher could not be loaded.</p>';
    }
  } catch (error) {
    console.error('Error creating site switcher:', error);
    block.innerHTML = '<p>Error loading site switcher.</p>';
  }
}

// FOOTER INTEGRATION AND AUTO-INITIALIZATION

/**
 * Creates and configures a site switcher for the footer
 * @param {Object} options Configuration options
 * @param {string} options.fragmentPath - Path to the site switcher fragment
 * @param {string} options.buttonText - Text to display on the button
 * @param {string} options.containerClass - CSS class for the container
 * @returns {Promise<HTMLElement|null>} The site switcher container or null if failed
 */
export async function createFooterSiteSwitcher(options = {}) {
  const {
    fragmentPath = '/site-switcher',
    buttonText = 'Switch Site',
    containerClass = 'footer-siteswitcher',
  } = options;

  try {
    // Create container
    const container = document.createElement('div');
    container.classList.add(containerClass);

    // Create site switcher
    const siteSwitcher = await createSiteSwitcher(fragmentPath, buttonText);

    if (siteSwitcher) {
      container.appendChild(siteSwitcher.buttonElement);
      return container;
    }

    return null;
  } catch (error) {
    console.error('Error creating footer site switcher:', error);
    return null;
  }
}

/**
 * Adds site switcher to an existing footer element
 * @param {HTMLElement} footer - The footer element to add the switcher to
 * @param {Object} options - Configuration options (same as createFooterSiteSwitcher)
 * @returns {Promise<boolean>} True if successfully added, false otherwise
 */
export async function addSiteSwitcherToFooter(footer, options = {}) {
  const siteSwitcherContainer = await createFooterSiteSwitcher(options);

  if (siteSwitcherContainer) {
    footer.appendChild(siteSwitcherContainer);
    return true;
  }

  return false;
}

// AUTO-INITIALIZATION FOR FOOTERS
(() => {
  // Simple config - no metadata needed
  const config = {
    fragmentPath: '/site-switcher',
    buttonText: 'Switch Site',
  };

  // Add to all footer elements
  const addToFooters = () => {
    document.querySelectorAll('.footer').forEach(async (footer) => {
      if (footer.hasAttribute('data-siteswitcher-added')) return;
      footer.setAttribute('data-siteswitcher-added', 'true');

      const footerDiv = footer.querySelector('.footer > div');
      if (footerDiv) {
        await addSiteSwitcherToFooter(footerDiv, config);
      }
    });
  };

  // Process existing footers
  addToFooters();

  // Watch for new footers
  new MutationObserver(addToFooters).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
