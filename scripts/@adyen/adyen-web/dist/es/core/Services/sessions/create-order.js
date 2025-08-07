import{httpPost as t}from"../http.js";import{API_VERSION as e,API_ERROR_CODE as o}from"./constants.js";function r(r){const n=`${e}/sessions/${r.id}/orders?clientKey=${r.clientKey}`,s={sessionData:r.data};return t({loadingContext:r.loadingContext,path:n,errorLevel:"fatal",errorCode:o.createOrder},s)}export{r as default};
//# sourceMappingURL=create-order.js.map
