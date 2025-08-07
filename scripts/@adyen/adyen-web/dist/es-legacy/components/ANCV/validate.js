import{isEmpty as e}from"../../utils/validator-utils.js";import{email as t}from"../../utils/regex.js";const i=i=>e(i)?null:i.length>=6&&i.length<=320&&t.test(i),r=e=>/^\d{11}$/.test(e),l={beneficiaryId:{validate:e=>i(e)||r(e),errorMessage:"ancv.beneficiaryId.invalid",modes:["blur"]}};export{l as ancvValidationRules,r as isANCVNumber,i as isEmailValid};
//# sourceMappingURL=validate.js.map
