// Cart Dropin Modules
import * as cartApi from '@dropins/storefront-cart/api.js';

// Checkout Dropin Modules
import ShippingMethods from '@dropins/storefront-checkout/containers/ShippingMethods.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const shippingMethods = createElementWithClass(
  'div',
  'checkout__shipping-methods',
);

export default async function decorate(block) {
  provider.render(ShippingMethods, {
    hideOnVirtualCart: true,
    // onShippingMethodSelect: (shippingMethod) => {},
    onCheckoutDataUpdate: () => {
      cartApi.refreshCart().catch(console.error);
    },
  })(shippingMethods);

  return block.appendChild(shippingMethods);
}
