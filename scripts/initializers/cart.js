/* eslint-disable import/no-cycle */
import { initializers } from '@dropins/tools/initializer.js';
import { initialize } from '@dropins/storefront-cart/api.js';
import { initializeDropin } from './index.js';

initializeDropin(async () => {
  await initializers.mountImmediately(initialize, {
    models: {
      CartModel: {
        transformer: (data) => {
          const { gift_message: giftMessage, amorder_attributes: orderAttributes } = data;
          return {
            giftMessage,
            orderAttributes,
          }
        }
      }
    }
  });
})();
