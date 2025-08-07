import{httpGet as t}from"../../../../core/Services/http.js";async function e({enrollmentId:e,clientKey:o,loadingContext:n,timeout:i=1e4}){if(!e||!o)throw new Error("Could not check the enrollment status");return t({loadingContext:n,path:`utility/v1/pixpaybybank/registration-options/${e}?clientKey=${o}`,timeout:i})}export{e as default};
//# sourceMappingURL=getEnrollmentStatus.js.map
