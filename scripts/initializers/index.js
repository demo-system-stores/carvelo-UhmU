/* eslint-disable import/no-cycle */
// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import {
  removeFetchGraphQlHeader,
  setEndpoint,
  setFetchGraphQlHeader,
} from '@dropins/tools/fetch-graphql.js';
import * as authApi from '@dropins/storefront-auth/api.js';

import { initializers } from '@dropins/tools/initializer.js';

// Libs
import { getConfigValue, getCookie } from '../configs.js';

export const getUserTokenCookie = () => getCookie('auth_dropin_user_token');

// Update auth headers
const setAuthHeaders = (state) => {
  if (state) {
    const token = getUserTokenCookie();
    setFetchGraphQlHeader('Authorization', `Bearer ${token}`);
  } else {
    removeFetchGraphQlHeader('Authorization');
    authApi.removeFetchGraphQlHeader('Authorization');
  }
};

const persistCartDataInSession = (data) => {
  if (data?.id) {
    sessionStorage.setItem('DROPINS_CART_ID', data.id);
  } else {
    sessionStorage.removeItem('DROPINS_CART_ID');
  }
};

export default async function initializeDropins() {
  // Set auth headers on authenticated event
  events.on('authenticated', setAuthHeaders);
  // Cache cart data in session storage
  events.on('cart/data', persistCartDataInSession, { eager: true });

  // on page load, check if user is authenticated
  const token = getUserTokenCookie();
  // set auth headers
  setAuthHeaders(!!token);
  // emit authenticated event if token has changed
  events.emit('authenticated', !!token);

  // Event Bus Logger
  events.enableLogger(true);
  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  events.on('eds/lcp', async () => {
    // Recaptcha
    await import('@dropins/tools/recaptcha.js').then(({ setConfig }) => {
      setConfig();
    });
  });

  // Mapping of image to product
  const imageToProduct = new Map();

  // Load any existing cart data from session storage
  const cachedCartData = sessionStorage.getItem('DROPIN__CART__CART__DATA');
  if (cachedCartData) {
    const data = JSON.parse(cachedCartData);
    if (data.items) {
      data.items.forEach((item) => {
        const [base, ] = item.image.src.split('?');
        imageToProduct.set(base, { urlKey: item.url.urlKey });
      });
    }
  }

  // Listen for data events and hydrate image to product mapping
  events.on(
    'pdp/data',
    (data) => {
      const { images } = data;
      images.forEach((image) => {
        imageToProduct.set(image.url, { urlKey: data.urlKey });
      });
    },
    { eager: true },
  );
  events.on(
    'cart/data',
    (data) => {
      if (data?.items) {
        data.items.forEach((item) => {
          imageToProduct.set(item.image.src, { urlKey: item.url.urlKey });
        });
      }
    },
    { eager: true },
  );
  events.on(
    'cart/updated',
    (data) => {
      if (data?.items) {
        data.items.forEach((item) => {
          imageToProduct.set(item.image.src, { urlKey: item.url.urlKey });
        });
      }
    },
    { eager: true },
  );
  events.on(
    'cart/initialized',
    (data) => {
      if (data?.items) {
        data.items.forEach((item) => {
          imageToProduct.set(item.image.src, { urlKey: item.url.urlKey });
        });
      }
    },
    { eager: true },
  );

  // Set Image Param Keys with string and function examples
  initializers.setImageParamKeys({
    width: 'w',
    height: (data) => ['h', String(data + 1)],
  });

  // Set Image Src Transformer
  initializers.setImageSrcTransformer((context) => {
    const { src, params } = context;

    const product = imageToProduct.get(src);

    if (!product) {
      return src;
    }

    return `https://picsum.photos/seed/${product.urlKey}/${params.w}`;
  });

  // Initialize Global Drop-ins
  await import('./auth.js');
  import('./cart.js');
}

export function initializeDropin(cb) {
  let initialized = false;

  const init = async (force = false) => {
    // prevent re-initialization
    if (initialized && !force) return;
    // initialize drop-in
    await cb();
    initialized = true;
  };

  // re-initialize on prerendering changes
  document.addEventListener('prerenderingchange', () => init(true));

  return init;
}
