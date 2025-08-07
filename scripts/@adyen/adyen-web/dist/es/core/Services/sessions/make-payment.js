import{httpPost as t}from"../http.js";import{API_VERSION as e,API_ERROR_CODE as o}from"./constants.js";function n(n,a){const s=`${e}/sessions/${a.id}/payments?clientKey=${a.clientKey}`,r={sessionData:a.data,...n};return t({loadingContext:a.loadingContext,path:s,errorLevel:"fatal",errorCode:o.makePayments},r)}export{n as default};
//# sourceMappingURL=make-payment.js.map
