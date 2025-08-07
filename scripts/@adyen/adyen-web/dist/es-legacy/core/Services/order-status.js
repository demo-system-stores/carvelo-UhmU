import{httpPost as t}from"./http.js";function e(e,o){const r={path:`v1/order/status?clientKey=${e.clientKey}`,loadingContext:e.loadingContext};return t(r,{orderData:o.orderData})}export{e as default};
//# sourceMappingURL=order-status.js.map
