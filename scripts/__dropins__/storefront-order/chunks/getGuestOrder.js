/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h}from"./network-error.js";import{f,h as l}from"./fetch-graphql.js";import{a as O}from"./getGuestOrder.graphql.js";import{b as i}from"./transform-customer-orders-returns.js";const T=t=>{var a,m,r,c,u,d;return{email:((m=(a=t==null?void 0:t.data)==null?void 0:a.customer)==null?void 0:m.email)||"",firstname:((c=(r=t==null?void 0:t.data)==null?void 0:r.customer)==null?void 0:c.firstname)||"",lastname:((d=(u=t==null?void 0:t.data)==null?void 0:u.customer)==null?void 0:d.lastname)||""}},E=(t,a)=>{var r,c;if(!((r=t==null?void 0:t.data)!=null&&r.guestOrder))return null;const m=(c=t==null?void 0:t.data)==null?void 0:c.guestOrder;return i(m,a)},k=(t,a)=>{var r,c;if(!((r=t==null?void 0:t.data)!=null&&r.guestOrderByToken))return null;const m=(c=t==null?void 0:t.data)==null?void 0:c.guestOrderByToken;return i(m,a)},g=`
  query GET_CUSTOMER {
    customer {
     firstname
     lastname
     email
    }
  }
`,B=async()=>await f(g,{method:"GET",cache:"force-cache"}).then(t=>{var a;return(a=t.errors)!=null&&a.length?l(t.errors):T(t)}).catch(h),C=async t=>await f(O,{method:"GET",cache:"no-cache",variables:{input:t}}).then(a=>E(a)).catch(h);export{C as a,B as g,k as t};
