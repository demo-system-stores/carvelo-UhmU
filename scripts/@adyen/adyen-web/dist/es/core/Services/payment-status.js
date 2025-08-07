import{httpPost as t}from"./http.js";function e(e,n,a,o){if(!e||!n)throw new Error("Could not check the payment status");return t({loadingContext:a,path:`services/PaymentInitiation/v1/status?clientKey=${n}`,timeout:o},{paymentData:e})}export{e as default};
//# sourceMappingURL=payment-status.js.map
