import{httpPost as t}from"../http.js";import{API_VERSION as e}from"./constants.js";function o(o,n){const r=`${e}/sessions/${n.id}/orders/cancel?clientKey=${n.clientKey}`,s={sessionData:n.data,order:o};return t({loadingContext:n.loadingContext,path:r,errorLevel:"fatal"},s)}export{o as default};
//# sourceMappingURL=cancel-order.js.map
