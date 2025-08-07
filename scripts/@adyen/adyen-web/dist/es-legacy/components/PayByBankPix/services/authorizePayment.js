import{httpPost as t}from"../../../core/Services/http.js";async function e({payment:e,clientKey:o,loadingContext:i,timeout:n=1e4}){if(!e||!o)throw new Error("Could not authorize the payment");return t({loadingContext:i,path:`utility/v1/pixpaybybank/redirect-result?clientKey=${o}`,timeout:n},e)}export{e as authorizePayment};
//# sourceMappingURL=authorizePayment.js.map
