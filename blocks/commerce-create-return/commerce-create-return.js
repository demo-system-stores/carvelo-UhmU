/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as orderRenderer } from "@dropins/storefront-order/render.js";
import { CreateReturn } from "@dropins/storefront-order/containers/CreateReturn.js";

// Initialize
import "../../scripts/initializers/order.js";

export default async function decorate(block) {
  await orderRenderer.render(CreateReturn, {
    isOrderReturns: true,
  })(block);
}
