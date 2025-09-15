/**
 * Custom URL Hotfix
 * Hotfix for AEM URL processing issues using redirect parameters
 * Prevents AEM from modifying external URLs by encoding them with redirect=@ pattern
 */

/**
 * Processes redirect parameter in a link element
 * Extracts URLs encoded with redirect=@<actual_URL> pattern and sets up proper redirection
 * @param {HTMLElement} link The link element to process
 * @returns {boolean} True if redirect parameter was processed, false otherwise
 */
export function processRedirectParameter(link) {
  try {
    const href = link.getAttribute('href');
    if (!href) return false;

    const url = new URL(href, window.location.origin);
    const redirectParam = url.searchParams.get('redirect');

    if (redirectParam && redirectParam.startsWith('@')) {
      const realUrl = redirectParam.substring(1);

      // Update href to real URL
      link.setAttribute('href', realUrl);
      link.setAttribute('data-original-href', href);

      // Add click handler to open the link in a new tab
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(realUrl, '_blank', 'noopener,noreferrer');
      });

      return true;
    }

    return false;
  } catch (error) {
    console.warn('Error processing redirect parameter:', error);
    return false;
  }
}

/**
 * Processes all redirect parameters in a container element
 * @param {HTMLElement} container The container to search for redirect links
 * @returns {number} Number of links processed
 */
export function processAllRedirectParameters(container) {
  if (!container) return 0;

  const redirectLinks = container.querySelectorAll('a[href*="redirect=@"]');
  let processedCount = 0;

  redirectLinks.forEach((link) => {
    if (processRedirectParameter(link)) {
      processedCount += 1;
    }
  });

  return processedCount;
}

/**
 * Encodes a URL with redirect parameter format
 * @param {string} targetUrl The URL to encode
 * @param {string} baseUrl Base URL to append redirect parameter to (default: current page)
 * @returns {string} URL with redirect parameter
 */
export function createRedirectUrl(targetUrl, baseUrl = window.location.pathname) {
  try {
    const url = new URL(baseUrl, window.location.origin);
    url.searchParams.set('redirect', `@${targetUrl}`);
    return url.toString();
  } catch (error) {
    console.warn('Error creating redirect URL:', error);
    return targetUrl; // Fallback to original URL
  }
}

/**
 * Extracts the real URL from a redirect parameter
 * @param {string} href The href containing redirect parameter
 * @returns {string|null} The extracted real URL or null if not found
 */
export function extractRedirectUrl(href) {
  try {
    const url = new URL(href, window.location.origin);
    const redirectParam = url.searchParams.get('redirect');

    if (redirectParam && redirectParam.startsWith('@')) {
      return redirectParam.substring(1);
    }

    return null;
  } catch (error) {
    console.warn('Error extracting redirect URL:', error);
    return null;
  }
}

/**
 * Checks if a URL contains a redirect parameter
 * @param {string} href The href to check
 * @returns {boolean} True if contains redirect parameter
 */
export function hasRedirectParameter(href) {
  try {
    const url = new URL(href, window.location.origin);
    const redirectParam = url.searchParams.get('redirect');
    return redirectParam && redirectParam.startsWith('@');
  } catch (error) {
    return false;
  }
}
