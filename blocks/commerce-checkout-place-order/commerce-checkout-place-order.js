// Checkout Dropin Modules
import * as checkoutApi from '@dropins/storefront-checkout/api.js';
import PlaceOrder from '@dropins/storefront-checkout/containers/PlaceOrder.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass, overlaySpinner } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const placeOrder = createElementWithClass('div', 'checkout__place-order');

export default async function decorate(block) {
  provider.render(PlaceOrder, {
    onPlaceOrder: async () => {
      overlaySpinner.classList.add('checkout__overlay-spinner--shown');

      try {
        await checkoutApi.placeOrder();
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        overlaySpinner.classList.remove('checkout__overlay-spinner--shown');
      }
    },
  })(placeOrder);

  return block.appendChild(placeOrder);
}
