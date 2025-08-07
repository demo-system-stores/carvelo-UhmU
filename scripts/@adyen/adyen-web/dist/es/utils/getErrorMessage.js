import{ERROR_FIELD_REQUIRED as r,ERROR_FIELD_INVALID as e}from"../core/Errors/constants.js";const s=(s,o,t)=>{if(o?.errorMessage){const n=o.errorMessage,a=[r,e].includes(n),c={values:{label:t?.toLowerCase()??""}};return a?s.get(n,c):s.get(n)}return!!o};export{s as getErrorMessage};
//# sourceMappingURL=getErrorMessage.js.map
