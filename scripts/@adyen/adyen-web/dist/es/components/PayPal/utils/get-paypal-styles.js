import{SUPPORTED_COLORS_FOR_CREDIT as o}from"../config.js";const c=(c,e={})=>"paypal"===c?{...e}:Object.keys(e).reduce(((c,r)=>{const t=e[r];return("color"!==r||o.includes(t))&&(c[r]=t),c}),{});export{c as getStyle};
//# sourceMappingURL=get-paypal-styles.js.map
