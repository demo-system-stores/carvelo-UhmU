const u=(u,c)=>u-c%u,c=(u,{value:c,currency:n})=>u.amount(c,n),n=(n,{maxRoundupAmount:r,commercialTxAmount:e,currency:o})=>c(n,{value:u(r,e),currency:o});export{c as getAmountLabel,u as getRoundupAmount,n as getRoundupAmountLabel};
//# sourceMappingURL=utils.js.map
