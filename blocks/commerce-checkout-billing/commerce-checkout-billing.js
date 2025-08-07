// Checkout Dropin Modules
import BillingForm from '@dropins/storefront-checkout/containers/BillingForm.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const billingForm = createElementWithClass('div', 'checkout__billing-form');

export default async function decorate(block) {
  provider.render(BillingForm)(billingForm);

  return block.appendChild(billingForm);
}
