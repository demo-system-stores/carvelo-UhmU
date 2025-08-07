import{hasOwnProperty as r}from"../../../../../../utils/hasOwnProperty.js";const e=(e,o,l,t,n)=>{if(!r(e,"error"))return null;const p=o,s={rootNode:t,fieldType:e.fieldType,error:null,type:null},u=""!==e.error;return u||p.hasError?(s.error=u?e.error:"",s.type=l,p.hasError=u,p.errorType=s.error,n(s),s):null};export{e as processErrors};
//# sourceMappingURL=processErrors.js.map
