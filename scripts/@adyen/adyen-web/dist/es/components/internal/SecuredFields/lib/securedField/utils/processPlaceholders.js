import{SF_FIELDS_MAP as t,ENCRYPTED_SECURITY_CODE as r,ENCRYPTED_SECURITY_CODE_4_DIGITS as e,ENCRYPTED_SECURITY_CODE_3_DIGITS as i,GIFT_CARD as o}from"../../constants.js";function s(s,n,u){return s===o?{[n]:u[t[n]]??""}:n===r?{[i]:u.securityCodeThreeDigits??"",[e]:u.securityCodeFourDigits??""}:{[n]:u[t[n]]??""}}export{s as processPlaceholders};
//# sourceMappingURL=processPlaceholders.js.map
