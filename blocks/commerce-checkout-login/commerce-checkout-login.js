// Checkout Dropin Modules
import LoginForm from '@dropins/storefront-checkout/containers/LoginForm.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

// Auth Dropin Modules
import * as authApi from '@dropins/storefront-auth/api.js';
import AuthCombine from '@dropins/storefront-auth/containers/AuthCombine.js';
import { render as authProvider } from '@dropins/storefront-auth/render.js';
import { createModal } from '../modal/modal.js';

import { setCheckoutModal, overlaySpinner, createElementWithClass } from '../commerce-checkout-heading/commerce-checkout-heading.js';

/*
 * Layout DOM elements
 */
const login = createElementWithClass('div', 'checkout__login');

export default async function decorate(block) {
  provider.render(LoginForm, {
    onSignInClick: async (initialEmailValue) => {
      const signInForm = document.createElement('div');

      authProvider.render(AuthCombine, {
        signInFormConfig: {
          renderSignUpLink: true,
          initialEmailValue,
          onSuccessCallback: () => {
            overlaySpinner.classList.add('checkout__overlay-spinner--shown');
          },
        },
        signUpFormConfig: {},
        resetPasswordFormConfig: {},
      })(signInForm);

      const modal = await createModal([signInForm]);
      modal.showModal();
      setCheckoutModal(modal);
    },
    onSignOutClick: () => {
      authApi.revokeCustomerToken();
    },
  })(login);

  return block.appendChild(login);
}
