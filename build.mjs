/* eslint-disable import/no-extraneous-dependencies */
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  {
    npm: '@dropins/storefront-order',
    operations: [
      `
    fragment ADDRESS_FRAGMENT on OrderAddress {
        city
        company
        country_code
        fax
        firstname
        lastname
        middlename
    }
      `,
    ],
  },
  // {
  //   npm: '@dropins/storefront-cart',
  //   operations: [],
  // },
  // {
  //   npm: '@dropins/storefront-checkout',
  //   operations: [],
  // },
]);
