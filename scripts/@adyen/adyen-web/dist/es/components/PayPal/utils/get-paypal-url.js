import{getPaypalSettings as o}from"./get-paypal-settings.js";import{PAYPAL_JS_URL as t}from"../config.js";const e=e=>{const n=o(e),p=decodeURIComponent(Object.keys(n).map((o=>`${o}=${n[o]}`)).join("&"));return`${t}?${p}`};export{e as getPaypalUrl};
//# sourceMappingURL=get-paypal-url.js.map
