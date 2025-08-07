// Dropin Tools
import {
  Divider,
  ProgressSpinner,
  provider as uiProvider,
} from '@dropins/tools/components.js';
import { events } from '@dropins/tools/event-bus.js';

// Cart Dropin Modules
import * as cartApi from '@dropins/storefront-cart/api.js';
import EmptyCart from '@dropins/storefront-cart/containers/EmptyCart.js';
import { render as cartProvider } from '@dropins/storefront-cart/render.js';

// Checkout Dropin Modules
import ErrorBanner from '@dropins/storefront-checkout/containers/ErrorBanner.js';
import MergedCartBanner from '@dropins/storefront-checkout/containers/MergedCartBanner.js';
import OutOfStock from '@dropins/storefront-checkout/containers/OutOfStock.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';

// Order Confirmation Dropin Modules
import OrderConfirmation from '@dropins/storefront-order-confirmation/containers/OrderConfirmation.js';
import { render as orderConfirmationProvider } from '@dropins/storefront-order-confirmation/render.js';

// Auth Dropin Modules
import SignUp from '@dropins/storefront-auth/containers/SignUp.js';
import { render as authProvider } from '@dropins/storefront-auth/render.js';
import { getUserTokenCookie } from '../../scripts/dropins.js';
import { createModal } from '../modal/modal.js';

export function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

/*
 * Layout DOM elements
 */
const root = createElementWithClass('div', 'checkout__content');
const heading = createElementWithClass('div', 'checkout__heading');
const headingTitle = createElementWithClass('h1', 'checkout__heading-title');
const headingDivider = createElementWithClass(
  'div',
  'checkout__heading-divider',
);
// const main = createElementWithClass('div', 'checkout__main');
// const aside = createElementWithClass('div', 'checkout__aside');
const emptyCart = createElementWithClass('div', 'checkout__empty-cart');
const errorBanner = createElementWithClass('div', 'checkout__error-banner');
const mergedCartBanner = createElementWithClass(
  'div',
  'checkout__merged-cart-banner',
);
export const overlaySpinner = createElementWithClass(
  'div',
  'checkout__overlay-spinner',
);
const outOfStock = createElementWithClass('div', 'checkout__out-of-stock');

headingTitle.textContent = 'Checkout';
heading.replaceChildren(headingTitle, headingDivider);

// /*
//  * Layout responsive handling
//  */
// const mediaQuery = matchMedia('(max-width: 768px)');

// function renderMobileLayout(block) {
//   root.replaceChildren(
//     errorBanner,
//     mergedCartBanner,
//     heading,
//     cartSummaryList,
//     outOfStock,
//     login,
//     shippingForm,
//     billToShippingAddress,
//     billingForm,
//     shippingMethods,
//     paymentMethods,
//     orderSummary,
//     placeOrder,
//     overlaySpinner,
//   );

//   block.replaceChildren(root);
// }

// function renderDesktopLayout(block) {
//   main.replaceChildren(
//     heading,
//     outOfStock,
//     login,
//     shippingForm,
//     billToShippingAddress,
//     billingForm,
//     shippingMethods,
//     paymentMethods,
//   );

//   aside.replaceChildren(orderSummary, cartSummaryList);

//   root.replaceChildren(
//     errorBanner,
//     mergedCartBanner,
//     main,
//     aside,
//     placeOrder,
//     overlaySpinner,
//   );

//   block.replaceChildren(root);
// }

/*
 * Event handlers
 */
let checkoutModal = null;
export function setCheckoutModal(modal) {
  checkoutModal = modal;
  return checkoutModal;
}

function handleAuthenticated(isAuthenticated) {
  if (isAuthenticated && checkoutModal) {
    checkoutModal.removeModal();
    checkoutModal = null;
  }

  if (isAuthenticated) {
    overlaySpinner.classList.add('checkout__overlay-spinner--shown');
  }
}

let currentCheckoutData;
// function handleCheckoutData(nextCheckoutData, block) {
function handleCheckoutData(nextCheckoutData) {
  if (currentCheckoutData !== undefined) {
    // on sign out
    if (!nextCheckoutData) {
      root.classList.add('checkout-empty-cart');
      root.replaceChildren(heading, emptyCart);
      // mediaQuery.removeEventListener('change', handleScreenResize);
      return;
    }

    // on empty state
    if (nextCheckoutData.isEmpty) {
      root.classList.add('checkout-empty-cart');
      root.replaceChildren(heading, emptyCart);
      // mediaQuery.removeEventListener('change', handleScreenResize);
      return;
    }

    root.classList.remove('checkout-empty-cart');
    // mediaQuery.addEventListener('change', (e) => handleScreenResize(e, block));
    // handleScreenResize(mediaQuery, block);
  }

  currentCheckoutData = nextCheckoutData;
}

function handleCheckoutCustomer(nextCheckoutCustomer) {
  if (nextCheckoutCustomer) {
    overlaySpinner.classList.remove('checkout__overlay-spinner--shown');
  }
}

// function handleScreenResize(e, block) {
//   if (e.matches) {
//     renderMobileLayout(block);
//   } else {
//     renderDesktopLayout(block);
//   }
// }

function handleCheckoutOrder(orderData, block) {
  const token = getUserTokenCookie();
  const orderRef = token ? orderData.number : orderData.token;
  const encodedOrderRef = encodeURIComponent(orderRef);

  window.history.pushState({}, '', `/order-status?orderRef=${encodedOrderRef}`);

  const onSignUpClick = async ({ inputsDefaultValueSet, addressesData }) => {
    const signUpForm = document.createElement('div');

    authProvider.render(SignUp, {
      routeSignIn: () => '/customer/login',
      routeRedirectOnEmailConfirmationClose: () => '/customer/account',
      inputsDefaultValueSet,
      addressesData,
    })(signUpForm);

    checkoutModal = await createModal([signUpForm]);
    checkoutModal.showModal();
  };

  orderConfirmationProvider.render(OrderConfirmation, {
    orderRef,
    orderData,
    onSignUpClick,
    routeHome: () => '/',
    routeSupport: () => '/support',
  })(block);
}

export default async function decorate(block) {
  /*
   * Render Containers
   */
  uiProvider.render(Divider, { variant: 'primary' })(headingDivider);
  uiProvider.render(ProgressSpinner)(overlaySpinner);
  cartProvider.render(EmptyCart, { routeCTA: () => '/' })(emptyCart);
  provider.render(ErrorBanner)(errorBanner);
  provider.render(MergedCartBanner)(mergedCartBanner);

  provider.render(OutOfStock, {
    routeCart: () => '/cart',
    onCartProductsUpdate: (items) => {
      cartApi.updateProductsFromCart(items).catch(console.error);
    },
  })(outOfStock);

  root.replaceChildren(
    errorBanner,
    mergedCartBanner,
    heading,
    outOfStock,
    overlaySpinner,
  );

  /*
   * Render initial layout and setup event handlers
   */
  // mediaQuery.addEventListener('change', (e) => handleScreenResize(e, block));
  // handleScreenResize(mediaQuery, block);

  events.on('authenticated', handleAuthenticated, { eager: true });
  events.on('checkout/data', (e) => handleCheckoutData(e, block), {
    eager: true,
  });
  events.on('checkout/customer', handleCheckoutCustomer, { eager: true });
  events.on('checkout/order', (e) => handleCheckoutOrder(e, block));

  return block.appendChild(root);
}
