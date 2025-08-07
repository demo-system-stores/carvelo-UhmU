import{unformatDate as e}from"../FormFields/InputDate/utils.js";const t=t=>{const{firstName:r,lastName:a,gender:m,dateOfBirth:s,shopperEmail:o,telephoneNumber:p}=t;return{...(r||a)&&{shopperName:{...r&&{firstName:r},...a&&{lastName:a},...m&&{gender:m}}},...s&&{dateOfBirth:e(s)},...o&&{shopperEmail:o},...p&&{telephoneNumber:p}}};export{t as getFormattedData};
//# sourceMappingURL=utils.js.map
