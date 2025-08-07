// Checkout Dropin Modules
import PaymentMethods from '@dropins/storefront-checkout/containers/PaymentMethods.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

import { createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const paymentMethods = createElementWithClass(
  'div',
  'checkout__payment-methods',
);

export default async function decorate(block) {
  provider.render(PaymentMethods, {
    // slots: {
    //   Handlers: {
    //     checkmo: (_ctx) => {
    //       const $content = document.createElement('div');
    //       $content.innerText = 'checkmo';
    //       _ctx.replaceHTML($content);
    //     },
    //   },
    // },
  })(paymentMethods);

  return block.appendChild(paymentMethods);
}
