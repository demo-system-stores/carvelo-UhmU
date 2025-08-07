/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as O}from"./network-error.js";import{f as a,h as d}from"./fetch-graphql.js";import{G as E}from"./getGuestOrder.graphql.js";import{R as I}from"./fragments.js";import{b as _}from"./transform-customer-orders-returns.js";import{events as l}from"@dropins/tools/event-bus.js";const s=`
mutation REORDER_ITEMS_MUTATION($orderNumber: String!) {
  reorderItems(orderNumber: $orderNumber) {
    cart {
      itemsV2 {
        items {
          uid
        }
      }
    }
    userInputErrors{
      code
      message
      path
    }
  }
}
`,$=async R=>await a(s,{method:"POST",variables:{orderNumber:R}}).then(t=>{var n,o,i,m,c,u;if((n=t.errors)!=null&&n.length)return d(t.errors);const e=!!((m=(i=(o=t==null?void 0:t.data)==null?void 0:o.reorderItems)==null?void 0:i.cart)!=null&&m.itemsV2.items.length),r=((u=(c=t==null?void 0:t.data)==null?void 0:c.reorderItems)==null?void 0:u.userInputErrors)??[];return{success:e,userInputErrors:r}}).catch(O),N=`
mutation CONFIRM_RETURN_GUEST_ORDER(
  $orderId: ID!,
  $confirmationKey: String!
  ) {
  confirmReturn(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
    return {
      ...OrderReturn
      order {
        ...guestOrderData
      }
    }
  }
}
${I}
${E}`,M=async(R,t)=>(sessionStorage.setItem("212121212121",JSON.stringify({orderId:R,confirmationKey:t})),await a(N,{method:"POST",variables:{orderId:R,confirmationKey:t}}).then(e=>{var n,o,i,m,c,u,f;if((n=e.errors)!=null&&n.length)return sessionStorage.setItem("111111111",JSON.stringify(e.errors)),d(e.errors);let r=null;return(m=(i=(o=e==null?void 0:e.data)==null?void 0:o.confirmReturn)==null?void 0:i.return)!=null&&m.order&&(r=_((f=(u=(c=e==null?void 0:e.data)==null?void 0:c.confirmReturn)==null?void 0:u.return)==null?void 0:f.order),l.emit("order/data",r)),r}).catch(O)),T=`
  mutation CONFIRM_CANCEL_ORDER_MUTATION(
      $orderId: ID!,
      $confirmationKey: String!
    ) {
    confirmCancelOrder(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
      order {
        ...guestOrderData
      }
      errorV2 {
        message
        code
      }
    }
  }
${E}
`,U=async(R,t)=>a(T,{variables:{orderId:R,confirmationKey:t}}).then(async({errors:e,data:r})=>{var i,m,c,u;const n=[...(i=r==null?void 0:r.confirmCancelOrder)!=null&&i.errorV2?[(m=r==null?void 0:r.confirmCancelOrder)==null?void 0:m.errorV2]:[],...e??[]];let o=null;return(c=r==null?void 0:r.confirmCancelOrder)!=null&&c.order&&(o=_((u=r==null?void 0:r.confirmCancelOrder)==null?void 0:u.order),l.emit("order/data",o)),n.length>0?d(n):o});export{M as a,U as c,$ as r};
