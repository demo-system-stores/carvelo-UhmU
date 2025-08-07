import{API_ENVIRONMENTS as a,ANALYTICS_ENVIRONMENTS as n,CDN_ENVIRONMENTS as s}from"./constants.js";const t=(a,n,s)=>s||(n[a?.toLowerCase()]||n.fallback),l=(l,r)=>({apiUrl:t(l,a,r?.api),analyticsUrl:t(l,n,r?.analytics),cdnImagesUrl:t(l,s,r?.cdn?.images),cdnTranslationsUrl:t(l,s,r?.cdn?.translations)});export{t as getUrlFromMap,l as resolveEnvironments};
//# sourceMappingURL=Environment.js.map
