/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as orderRenderer } from "@dropins/storefront-order/render.js";
import { OrderStatus } from "@dropins/storefront-order/containers/OrderStatus.js";
import { checkIsAuthenticated } from "../../scripts/configs.js";

// Initialize
import "../../scripts/initializers/order.js";

// TODO - CreateReturn
export default async function decorate(block) {
  await orderRenderer.render(OrderStatus, {
    routeCreateReturn: (orderData) =>
      checkIsAuthenticated()
        ? `/customer/create-return?orderRef=${orderData.number}`
        : `/create-return?orderRef=${orderData.number}`,
  })(block);
}
