import{httpPost as t}from"../../../core/Services/http.js";async function e({enrollment:e,clientKey:o,loadingContext:n,timeout:r=1e4}){if(!e||!o)throw new Error("Could not authorize the enrollment");return t({loadingContext:n,path:`utility/v1/pixpaybybank/redirect-result?clientKey=${o}`,timeout:r},e)}export{e as authorizeEnrollment};
//# sourceMappingURL=authorizeEnrollment.js.map
