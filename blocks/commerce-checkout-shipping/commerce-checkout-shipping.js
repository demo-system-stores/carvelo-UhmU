// Checkout Dropin Modules
import ShippingForm from '@dropins/storefront-checkout/containers/ShippingForm.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const shippingForm = createElementWithClass('div', 'checkout__shipping-form');

export default async function decorate(block) {
  provider.render(ShippingForm, { hideOnVirtualCart: true })(
    shippingForm,
  );

  return block.appendChild(shippingForm);
}
