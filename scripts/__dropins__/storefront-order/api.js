/*! Copyright 2024 Adobe
All Rights Reserved. */
import{c as se,r as oe}from"./chunks/requestGuestOrderCancel.js";import{f as i,h as g}from"./chunks/fetch-graphql.js";import{g as ne,r as ie,s as ue,a as le,b as me}from"./chunks/fetch-graphql.js";import{g as ce}from"./chunks/getAttributesForm.js";import{g as Oe,a as De,r as he}from"./chunks/requestGuestReturn.js";import{t as I}from"./chunks/getGuestOrder.js";import{g as be,a as Ee}from"./chunks/getGuestOrder.js";import{g as ye}from"./chunks/getCustomerOrdersReturn.js";import{h as u}from"./chunks/network-error.js";import{P as l,a as m,G as p,O as c,B as _,R as y,b as G,c as A}from"./chunks/transform-customer-orders-returns.js";import{O,A as D}from"./chunks/getGuestOrder.graphql.js";import{g as fe}from"./chunks/getStoreConfig.js";import{Initializer as $}from"@dropins/tools/lib.js";import{events as n}from"@dropins/tools/event-bus.js";import{c as Ie,a as Ge,r as Ae}from"./chunks/confirmCancelOrder.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/transform-attributes-form.js";import"./chunks/convertCase.js";import"./chunks/fragments.js";const N=`
query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
 customer {
    orders(
      filter: { number: { eq: $orderNumber } }
    ) {
      items {
        email
        available_actions
        status
        number
        id
        order_date
        order_status_change_date
        carrier
        shipping_method
        is_virtual
        returns(pageSize: $pageSize) {
          ...OrderReturns
        }
        items_eligible_for_return {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
            quantity_shipped
            order_item {
              ...OrderItemDetails
              ... on GiftCardOrderItem {
                ...GiftCardDetails
                product {
                  ...ProductDetails
                }
              }
            }
          }
        }
        payment_methods {
          name
          type
        }
        shipping_address {
          ...AddressesList
        }
        billing_address {
          ...AddressesList
        }
        items {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        total {
          ...OrderSummary
        }
      }
    }
  }
}
${l}
${m}
${p}
${c}
${_}
${O}
${D}
${y}
`,v=(e,t)=>({id:e,totalQuantity:t.totalQuantity,possibleOnepageCheckout:!0,items:t.items.map(r=>{var a,s,o,d,h,R;return{canApplyMsrp:!0,formattedPrice:"",id:r.id,quantity:r.totalQuantity,product:{canonicalUrl:((a=r.product)==null?void 0:a.canonicalUrl)??"",mainImageUrl:((s=r.product)==null?void 0:s.image)??"",name:((o=r.product)==null?void 0:o.name)??"",productId:0,productType:(d=r.product)==null?void 0:d.productType,sku:((h=r.product)==null?void 0:h.sku)??""},prices:{price:{value:r.price.value,currency:r.price.currency}},configurableOptions:((R=r.selectedOptions)==null?void 0:R.map(b=>({optionLabel:b.label,valueLabel:b.value})))||[]}})}),L=e=>{var a,s,o;const t=e.coupons[0],r=(a=e.payments)==null?void 0:a[0];return{appliedCouponCode:(t==null?void 0:t.code)??"",email:e.email,grandTotal:e.grandTotal.value,orderId:e.number,orderType:"checkout",otherTax:0,salesTax:e.totalTax.value,shipping:{shippingMethod:((s=e.shipping)==null?void 0:s.code)??"",shippingAmount:((o=e.shipping)==null?void 0:o.amount)??0},subtotalExcludingTax:e.subtotal.value,subtotalIncludingTax:0,payments:r?[{paymentMethodCode:(r==null?void 0:r.code)||"",paymentMethodName:(r==null?void 0:r.name)||"",total:e.grandTotal.value}]:[]}},S=e=>{var r,a;const t=(a=(r=e==null?void 0:e.data)==null?void 0:r.placeOrder)==null?void 0:a.orderV2;return t?G(t):null},k=async({orderId:e,returnRef:t,queryType:r,returnsPageSize:a=50})=>await i(N,{method:"GET",cache:"force-cache",variables:{orderNumber:e,pageSize:a}}).then(s=>A(r??"orderData",s,t)).catch(u),w=`
query ORDER_BY_TOKEN($token: String!) {
  guestOrderByToken(input: { token: $token }) {
    email
    id
    number
    order_date
    order_status_change_date
    status
    token
    carrier
    shipping_method
    printed_card_included
    gift_receipt_included
    available_actions
    is_virtual
    items_eligible_for_return {
      ...OrderItemDetails
    }
    returns(pageSize: 50) {
      ...OrderReturns
    }
    payment_methods {
      name
      type
    }
    applied_coupons {
      code
    }
    shipments {
      id
      tracking {
        title
        number
        carrier
      }
      comments {
        message
        timestamp
      }
      items {
        id
        product_sku
        product_name
        order_item {
          ...OrderItemDetails
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
        }
      }
    }
    payment_methods {
      name
      type
    }
    shipping_address {
      ...AddressesList
    }
    billing_address {
      ...AddressesList
    }
    items {
      ...OrderItemDetails
      ... on BundleOrderItem {
        ...BundleOrderItemDetails
      }
      ... on GiftCardOrderItem {
        ...GiftCardDetails
        product {
          ...ProductDetails
        }
      }
      ... on DownloadableOrderItem {
        product_name
        downloadable_links {
          sort_order
          title
        }
      }
    }
    total {
      ...OrderSummary
    }
  }
}
${l}
${m}
${p}
${c}
${_}
${O}
${D}
${y}
`,x=async(e,t)=>await i(w,{method:"GET",cache:"no-cache",variables:{token:e}}).then(r=>I(r,t)).catch(u),B="orderData",P=async e=>{var d;const t=typeof(e==null?void 0:e.orderRef)=="string"?e==null?void 0:e.orderRef:"",r=typeof(e==null?void 0:e.returnRef)=="string"?e==null?void 0:e.returnRef:"",a=t&&typeof(e==null?void 0:e.orderRef)=="string"&&((d=e==null?void 0:e.orderRef)==null?void 0:d.length)>20,s=(e==null?void 0:e.orderData)??null;if(s){n.emit("order/data",{...s,returnNumber:r});return}if(!t)return;const o=a?await x(t,r):await k({orderId:t,returnRef:r,queryType:B});o?n.emit("order/data",{...o,returnNumber:r}):n.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},C=new $({init:async e=>{const t={};C.config.setConfig({...t,...e}),P(e).catch(console.error)},listeners:()=>[]}),ee=C.config,E={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},M={PLACE_ORDER:"place-order"};function f(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function T(e,t){const r=f();r.push({[e]:null}),r.push({[e]:t})}function F(e,t){f().push(a=>{const s=a.getState?a.getState():{};a.push({event:e,eventInfo:{...s,...t}})})}function U(e,t){const r=L(t),a=v(e,t);T(E.ORDER_CONTEXT,{...r}),T(E.SHOPPING_CART_CONTEXT,{...a}),F(M.PLACE_ORDER)}const q=`
  mutation PLACE_ORDER_MUTATION($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      errors {
        code
        message
      }
      orderV2 {
        email
        available_actions
        status
        number
        id
        order_date
        carrier
        shipping_method
        is_virtual
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
            order_item {
              ...OrderItemDetails
              ... on GiftCardOrderItem {
                ...GiftCardDetails
                product {
                  ...ProductDetails
                }
              }
            }
          }
        }
        payment_methods {
          name
          type
        }
        shipping_address {
          ...AddressesList
        }
        billing_address {
          ...AddressesList
        }
        items {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        total {
          ...OrderSummary
        }
      }
    }
  }
  ${l}
  ${m}
  ${p}
  ${c}
  ${_}
  ${O}
  ${D}
`,re=async e=>{if(!e)throw new Error("No cart ID found");return i(q,{variables:{cartId:e}}).then(t=>{var a;(a=t.errors)!=null&&a.length&&g(t.errors);const r=S(t);return r&&(n.emit("order/placed",r),n.emit("cart/reset",void 0),U(e,r)),r}).catch(u)};export{se as cancelOrder,ee as config,Ie as confirmCancelOrder,Ge as confirmGuestReturn,i as fetchGraphQl,ce as getAttributesForm,Oe as getAttributesList,ne as getConfig,be as getCustomer,ye as getCustomerOrdersReturn,Ee as getGuestOrder,k as getOrderDetailsById,fe as getStoreConfig,x as guestOrderByToken,C as initialize,re as placeOrder,ie as removeFetchGraphQlHeader,Ae as reorderItems,oe as requestGuestOrderCancel,De as requestGuestReturn,he as requestReturn,ue as setEndpoint,le as setFetchGraphQlHeader,me as setFetchGraphQlHeaders};
