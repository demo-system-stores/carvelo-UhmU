// Checkout Dropin Modules
import BillToShippingAddress from '@dropins/storefront-checkout/containers/BillToShippingAddress.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const billToShippingAddress = createElementWithClass(
  'div',
  'checkout__bill-to-shipping-address',
);

export default async function decorate(block) {
  provider.render(BillToShippingAddress, { hideOnVirtualCart: true })(
    billToShippingAddress,
  );

  return block.appendChild(billToShippingAddress);
}
