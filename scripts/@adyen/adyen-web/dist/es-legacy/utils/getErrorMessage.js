import{ERROR_FIELD_REQUIRED as r,ERROR_FIELD_INVALID as e}from"../core/Errors/constants.js";const o=(o,s,t)=>{if(null==s?void 0:s.errorMessage){const l=s.errorMessage,a=[r,e].includes(l);var n;const u={values:{label:null!==(n=null==t?void 0:t.toLowerCase())&&void 0!==n?n:""}};return a?o.get(l,u):o.get(l)}return!!s};export{o as getErrorMessage};
//# sourceMappingURL=getErrorMessage.js.map
