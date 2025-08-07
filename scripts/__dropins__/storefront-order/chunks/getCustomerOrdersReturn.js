/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as R}from"./network-error.js";import{R as E,P as _,a as T,G as s,O as c,t as n}from"./transform-customer-orders-returns.js";import{f as o}from"./fetch-graphql.js";const u=`
query GET_CUSTOMER_ORDERS_RETURN($currentPage: Int, $pageSize: Int) {
 customer {
  returns(currentPage: $currentPage, pageSize: $pageSize) {
    page_info {
      page_size
      total_pages
      current_page
    }
    ...OrderReturns
  }
 }
}
${E}
${_}
${T}
${s}
${c}
`,G=async(t=10,a=1)=>await o(u,{method:"GET",cache:"force-cache",variables:{pageSize:t,currentPage:a}}).then(r=>{var e;return n((e=r==null?void 0:r.data)==null?void 0:e.customer.returns)}).catch(R);export{G as g};
