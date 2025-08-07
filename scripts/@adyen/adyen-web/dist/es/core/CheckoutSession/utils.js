import e from"../Errors/AdyenCheckoutError.js";function o(o){if(!o||!o.id)throw new e("IMPLEMENTATION_ERROR","Invalid session");const{shopperLocale:s,shopperEmail:r,telephoneNumber:i,id:n}=o;return{id:n,...o.sessionData?{sessionData:o.sessionData}:{},...s&&{shopperLocale:s},...r&&{shopperEmail:r},...i&&{telephoneNumber:i}}}export{o as sanitizeSession};
//# sourceMappingURL=utils.js.map
