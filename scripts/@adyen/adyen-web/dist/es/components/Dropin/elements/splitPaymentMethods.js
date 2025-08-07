function t(t,e){const n=({type:t})=>"fastlane"===t,a=({type:t})=>e.includes(t);return{fastlanePaymentMethod:t.paymentMethods.find(n),instantPaymentMethods:t.paymentMethods.filter(a),paymentMethods:t.paymentMethods.filter((t=>!a(t)&&!n(t))),storedPaymentMethods:t.storedPaymentMethods}}export{t as default};
//# sourceMappingURL=splitPaymentMethods.js.map
