const e=({props:e,i18n:n,introKey:t,getImage:o})=>{const{paymentMethodType:r,onActionHandled:a,totalAmount:c,reference:d}=e;return{paymentMethodType:r,introduction:n.get(t),imageUrl:o(r),onActionHandled:a,...c?{amount:n.amount(c.value,c.currency)}:{},...d?{reference:d}:{}}};export{e as extractCommonPropsForVoucher};
//# sourceMappingURL=utils.js.map
