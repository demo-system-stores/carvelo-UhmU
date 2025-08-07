import{createElement as e}from"../../../../external/preact/dist/preact.js";function t({paymentMethods:t,onSelect:a}){return e("ul",{className:"adyen-checkout__instant-payment-methods-list"},t.map((t=>e("li",{key:t._id,"data-testid":t.type,onClick:()=>a(t)},t.render()))))}export{t as default};
//# sourceMappingURL=InstantPaymentMethods.js.map
