/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  {
    npm: '@dropins/storefront-cart',
    operations: [
      `
        fragment CART_FRAGMENT on Cart {
          amorder_attributes {
            attribute_code
            value
          }
        }
      `
    ],
  },
]);
