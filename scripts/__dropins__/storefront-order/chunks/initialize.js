/*! Copyright 2024 Adobe
All Rights Reserved. */
import{merge as K,Initializer as na}from"@dropins/tools/lib.js";import{events as v}from"@dropins/tools/event-bus.js";import{a as ta,h as Q}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as x,PRICE_DETAILS_FRAGMENT as j,GIFT_CARD_DETAILS_FRAGMENT as H,ORDER_ITEM_DETAILS_FRAGMENT as J,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as V,ORDER_SUMMARY_FRAGMENT as W,ADDRESS_FRAGMENT as X,RETURNS_FRAGMENT as Z}from"../fragments.js";import{f as m}from"./fetch-graphql.js";const _a=a=>a||0,ua=a=>{var n,t,_;return{...a,canonicalUrl:(a==null?void 0:a.canonical_url)||"",urlKey:(a==null?void 0:a.url_key)||"",id:(a==null?void 0:a.uid)||"",name:(a==null?void 0:a.name)||"",sku:(a==null?void 0:a.sku)||"",image:((n=a==null?void 0:a.image)==null?void 0:n.url)||"",productType:(a==null?void 0:a.__typename)||"",thumbnail:{label:((t=a==null?void 0:a.thumbnail)==null?void 0:t.label)||"",url:((_=a==null?void 0:a.thumbnail)==null?void 0:_.url)||""}}},ia=a=>{if(!a||!("selected_options"in a))return;const n={};for(const t of a.selected_options)n[t.label]=t.value;return n},sa=a=>{const n=a==null?void 0:a.map(_=>({uid:_.uid,label:_.label,values:_.values.map(i=>i.product_name).join(", ")})),t={};return n==null||n.forEach(_=>{t[_.label]=_.values}),Object.keys(t).length>0?t:null},la=a=>(a==null?void 0:a.length)>0?{count:a.length,result:a.map(n=>n.title).join(", ")}:null,ea=a=>({quantityCanceled:(a==null?void 0:a.quantity_canceled)??0,quantityInvoiced:(a==null?void 0:a.quantity_invoiced)??0,quantityOrdered:(a==null?void 0:a.quantity_ordered)??0,quantityRefunded:(a==null?void 0:a.quantity_refunded)??0,quantityReturned:(a==null?void 0:a.quantity_returned)??0,quantityShipped:(a==null?void 0:a.quantity_shipped)??0,quantityReturnRequested:(a==null?void 0:a.quantity_return_requested)??0}),I=a=>a==null?void 0:a.filter(n=>n.__typename).map(n=>{var E,s,e,S,r,b,g,M,D,O,u,T,A,y,N,f,F,G,C,q,k,d,B,$,U,o,w,P,z,Y;const{quantityCanceled:t,quantityInvoiced:_,quantityOrdered:i,quantityRefunded:l,quantityReturned:c,quantityShipped:p,quantityReturnRequested:R}=ea(n);return{type:n==null?void 0:n.__typename,eligibleForReturn:n==null?void 0:n.eligible_for_return,productSku:n==null?void 0:n.product_sku,productName:n.product_name,productUrlKey:n.product_url_key,quantityCanceled:t,quantityInvoiced:_,quantityOrdered:i,quantityRefunded:l,quantityReturned:c,quantityShipped:p,quantityReturnRequested:R,id:n==null?void 0:n.id,discounted:((S=(e=(s=(E=n==null?void 0:n.product)==null?void 0:E.price_range)==null?void 0:s.maximum_price)==null?void 0:e.regular_price)==null?void 0:S.value)*(n==null?void 0:n.quantity_ordered)!==((r=n==null?void 0:n.product_sale_price)==null?void 0:r.value)*(n==null?void 0:n.quantity_ordered),total:{value:((b=n==null?void 0:n.product_sale_price)==null?void 0:b.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((g=n==null?void 0:n.product_sale_price)==null?void 0:g.currency)||""},totalInclTax:{value:((M=n==null?void 0:n.product_sale_price)==null?void 0:M.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(D=n==null?void 0:n.product_sale_price)==null?void 0:D.currency},price:{value:((O=n==null?void 0:n.product_sale_price)==null?void 0:O.value)||0,currency:(u=n==null?void 0:n.product_sale_price)==null?void 0:u.currency},priceInclTax:{value:((T=n==null?void 0:n.product_sale_price)==null?void 0:T.value)||0,currency:(A=n==null?void 0:n.product_sale_price)==null?void 0:A.currency},totalQuantity:_a(n==null?void 0:n.quantity_ordered),regularPrice:{value:(F=(f=(N=(y=n==null?void 0:n.product)==null?void 0:y.price_range)==null?void 0:N.maximum_price)==null?void 0:f.regular_price)==null?void 0:F.value,currency:(k=(q=(C=(G=n==null?void 0:n.product)==null?void 0:G.price_range)==null?void 0:C.maximum_price)==null?void 0:q.regular_price)==null?void 0:k.currency},product:ua(n==null?void 0:n.product),thumbnail:{label:((B=(d=n==null?void 0:n.product)==null?void 0:d.thumbnail)==null?void 0:B.label)||"",url:((U=($=n==null?void 0:n.product)==null?void 0:$.thumbnail)==null?void 0:U.url)||""},giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?{senderName:((o=n.gift_card)==null?void 0:o.sender_name)||"",senderEmail:((w=n.gift_card)==null?void 0:w.sender_email)||"",recipientEmail:((P=n.gift_card)==null?void 0:P.recipient_email)||"",recipientName:((z=n.gift_card)==null?void 0:z.recipient_name)||"",message:((Y=n.gift_card)==null?void 0:Y.message)||""}:void 0,configurableOptions:ia(n),bundleOptions:n.__typename==="BundleOrderItem"?sa(n.bundle_options):null,itemPrices:n.prices,downloadableLinks:n.__typename==="DownloadableOrderItem"?la(n==null?void 0:n.downloadable_links):null}}),L=(a,n)=>{var r,b,g,M,D,O,u,T,A;const t=I(a.items),_=((r=Ra(a==null?void 0:a.returns))==null?void 0:r.ordersReturn)??[],i=n?_.filter(y=>y.returnNumber===n):_,l=(b=a==null?void 0:a.payment_methods)==null?void 0:b[0],c=(l==null?void 0:l.type)||"",p=(l==null?void 0:l.name)||"",R=(g=e==null?void 0:e.items)==null?void 0:g.reduce((y,N)=>y+(N==null?void 0:N.totalQuantity),0),E={...a,items:t,returns:i};console.log("convertKeysCaseConfig",E);const{total:s,...e}=ta(E,"camelCase",{applied_coupons:"coupons",__typename:"__typename",firstname:"firstName",middlename:"middleName",lastname:"lastName",postcode:"postCode",payment_methods:"payments"}),S={...s,...e,totalQuantity:R,shipping:{amount:((M=s==null?void 0:s.totalShipping)==null?void 0:M.value)??0,currency:((D=s==null?void 0:s.totalShipping)==null?void 0:D.currency)||"",code:e.shippingMethod??""},payments:[{code:c,name:p}]};return K(S,(A=(T=(u=(O=h==null?void 0:h.getConfig())==null?void 0:O.models)==null?void 0:u.OrderDataModel)==null?void 0:T.transformer)==null?void 0:A.call(T,a))},ca=(a,n,t)=>{var _,i,l,c,p,R,E;if((c=(l=(i=(_=n==null?void 0:n.data)==null?void 0:_.customer)==null?void 0:i.orders)==null?void 0:l.items)!=null&&c.length&&a==="orderData"){const s=(E=(R=(p=n==null?void 0:n.data)==null?void 0:p.customer)==null?void 0:R.orders)==null?void 0:E.items[0];return L(s,t)}return null},Ra=a=>{var l,c,p,R,E;if(!((l=a==null?void 0:a.items)!=null&&l.length))return null;const n=a==null?void 0:a.items,t=a==null?void 0:a.page_info,i={ordersReturn:[...n].sort((s,e)=>+e.number-+s.number).map(s=>{var D,O;const{order:e,status:S,number:r,created_at:b}=s,g=((O=(D=s==null?void 0:s.shipping)==null?void 0:D.tracking)==null?void 0:O.map(u=>{const{status:T,carrier:A,tracking_number:y}=u;return{status:T,carrier:A,trackingNumber:y}}))??[],M=s.items.map(u=>{var G;const T=u==null?void 0:u.quantity,A=u==null?void 0:u.status,y=u==null?void 0:u.request_quantity,N=u==null?void 0:u.uid,f=u==null?void 0:u.order_item,F=((G=I([f]))==null?void 0:G.reduce((C,q)=>q,{}))??{};return{uid:N,quantity:T,status:A,requestQuantity:y,...F}});return{createdReturnAt:b,returnStatus:S,token:e==null?void 0:e.token,orderNumber:e==null?void 0:e.number,returnNumber:r,items:M,tracking:g}}),...t?{pageInfo:{pageSize:t.page_size,totalPages:t.total_pages,currentPage:t.current_page}}:{}};return K(i,(E=(R=(p=(c=h==null?void 0:h.getConfig())==null?void 0:c.models)==null?void 0:p.CustomerOrdersReturnModel)==null?void 0:R.transformer)==null?void 0:E.call(R,{...n,...t}))},Sa=(a,n)=>{var _,i;if(!((_=a==null?void 0:a.data)!=null&&_.guestOrder))return null;const t=(i=a==null?void 0:a.data)==null?void 0:i.guestOrder;return L(t,n)},Ea=(a,n)=>{var _,i;if(!((_=a==null?void 0:a.data)!=null&&_.guestOrderByToken))return null;const t=(i=a==null?void 0:a.data)==null?void 0:i.guestOrderByToken;return L(t,n)},Ta=`
  query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }) {
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
            ...RETURNS_FRAGMENT
          }
          items_eligible_for_return {
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on BundleOrderItem {
              ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
            }
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
                ...ORDER_ITEM_DETAILS_FRAGMENT
                ... on GiftCardOrderItem {
                  ...GIFT_CARD_DETAILS_FRAGMENT
                  product {
                    ...PRODUCT_DETAILS_FRAGMENT
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
            ...ADDRESS_FRAGMENT
          }
          billing_address {
            ...ADDRESS_FRAGMENT
          }
          items {
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on BundleOrderItem {
              ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
            }
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
            ...ORDER_SUMMARY_FRAGMENT
          }
        }
      }
    }
  }
  ${x}
  ${j}
  ${H}
  ${J}
  ${V}
  ${W}
  ${X}
  ${Z}
`,ya=async({orderId:a,returnRef:n,queryType:t,returnsPageSize:_=50})=>await m(Ta,{method:"GET",cache:"force-cache",variables:{orderNumber:a,pageSize:_}}).then(i=>ca(t??"orderData",i,n)).catch(Q),pa=`
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
        ...ORDER_ITEM_DETAILS_FRAGMENT
      }
      returns(pageSize: 50) {
        ...RETURNS_FRAGMENT
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
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
        ...ADDRESS_FRAGMENT
      }
      billing_address {
        ...ADDRESS_FRAGMENT
      }
      items {
        ...ORDER_ITEM_DETAILS_FRAGMENT
        ... on BundleOrderItem {
          ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
        }
        ... on GiftCardOrderItem {
          ...GIFT_CARD_DETAILS_FRAGMENT
          product {
            ...PRODUCT_DETAILS_FRAGMENT
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
        ...ORDER_SUMMARY_FRAGMENT
      }
    }
  }
  ${x}
  ${j}
  ${H}
  ${J}
  ${V}
  ${W}
  ${X}
  ${Z}
`,Aa=async(a,n)=>await m(pa,{method:"GET",cache:"no-cache",variables:{token:a}}).then(t=>Ea(t,n)).catch(Q),Da="orderData",Oa=async a=>{var c;const n=typeof(a==null?void 0:a.orderRef)=="string"?a==null?void 0:a.orderRef:"",t=typeof(a==null?void 0:a.returnRef)=="string"?a==null?void 0:a.returnRef:"",_=n&&typeof(a==null?void 0:a.orderRef)=="string"&&((c=a==null?void 0:a.orderRef)==null?void 0:c.length)>20,i=(a==null?void 0:a.orderData)??null;if(i){v.emit("order/data",{...i,returnNumber:t});return}if(!n)return;const l=_?await Aa(n,t):await ya({orderId:n,returnRef:t,queryType:Da});l?v.emit("order/data",{...l,returnNumber:t}):v.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},aa=new na({init:async a=>{const n={};aa.config.setConfig({...n,...a}),Oa(a).catch(console.error)},listeners:()=>[]}),h=aa.config;export{L as a,Aa as b,h as c,Sa as d,ya as g,aa as i,Ra as t};
