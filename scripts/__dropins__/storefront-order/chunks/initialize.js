/*! Copyright 2024 Adobe
All Rights Reserved. */
import{merge as P,Initializer as m}from"@dropins/tools/lib.js";import{events as L}from"@dropins/tools/event-bus.js";import{h as z}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as Y,PRICE_DETAILS_FRAGMENT as Q,GIFT_CARD_DETAILS_FRAGMENT as K,ORDER_ITEM_DETAILS_FRAGMENT as j,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as V,ORDER_SUMMARY_FRAGMENT as X,ADDRESS_FRAGMENT as H,RETURNS_FRAGMENT as J}from"../fragments.js";import{f as W,h as o}from"./fetch-graphql.js";const r=n=>n||0,I=n=>{var i,_,u,l,a,s,T,E,p;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((u=(_=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:_.regular_price)==null?void 0:u.currency)??"",value:((s=(a=(l=n==null?void 0:n.price_range)==null?void 0:l.maximum_price)==null?void 0:a.regular_price)==null?void 0:s.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((T=n==null?void 0:n.image)==null?void 0:T.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((E=n==null?void 0:n.thumbnail)==null?void 0:E.label)||"",url:((p=n==null?void 0:n.thumbnail)==null?void 0:p.url)||""}}},d=n=>{if(!n||!("selected_options"in n))return;const i={};for(const _ of n.selected_options)i[_.label]=_.value;return i},nn=n=>{const i=n==null?void 0:n.map(u=>({uid:u.uid,label:u.label,values:u.values.map(l=>l.product_name).join(", ")})),_={};return i==null||i.forEach(u=>{_[u.label]=u.values}),Object.keys(_).length>0?_:null},_n=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,un=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),ln=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),$=n=>{const{firstName:i,lastName:_,middleName:u}=ln(n);return{firstName:i,lastName:_,middleName:u,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},cn=n=>{const i={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftcard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},w=n=>{const i={value:0,currency:"USD"},_=(n==null?void 0:n.prices)??{};return{price:(_==null?void 0:_.price)??i,priceIncludingTax:(_==null?void 0:_.price_including_tax)??i,originalPrice:(_==null?void 0:_.original_price)??i,originalPriceIncludingTax:(_==null?void 0:_.original_price_including_tax)??i,discounts:(_==null?void 0:_.discounts)??[]}},tn=n=>{var i,_,u,l,a;return{senderName:((i=n.gift_card)==null?void 0:i.sender_name)||"",senderEmail:((_=n.gift_card)==null?void 0:_.sender_email)||"",recipientEmail:((u=n.gift_card)==null?void 0:u.recipient_email)||"",recipientName:((l=n.gift_card)==null?void 0:l.recipient_name)||"",message:((a=n.gift_card)==null?void 0:a.message)||""}},an=n=>{var i,_,u,l;return{label:((_=(i=n==null?void 0:n.product)==null?void 0:i.thumbnail)==null?void 0:_.label)||"",url:((l=(u=n==null?void 0:n.product)==null?void 0:u.thumbnail)==null?void 0:l.url)||""}},Z=n=>{var E,p,c,R,F,q,e,v,k,f,N,t,b,A,h,S,M,G,g,x,y;const{quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:l,quantityReturned:a,quantityShipped:s,quantityReturnRequested:T}=un(n);return{selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:l,quantityReturned:a,quantityShipped:s,quantityReturnRequested:T,id:n==null?void 0:n.id,discounted:((R=(c=(p=(E=n==null?void 0:n.product)==null?void 0:E.price_range)==null?void 0:p.maximum_price)==null?void 0:c.regular_price)==null?void 0:R.value)*(n==null?void 0:n.quantity_ordered)!==((F=n==null?void 0:n.product_sale_price)==null?void 0:F.value)*(n==null?void 0:n.quantity_ordered),total:{value:((q=n==null?void 0:n.product_sale_price)==null?void 0:q.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((e=n==null?void 0:n.product_sale_price)==null?void 0:e.currency)||""},totalInclTax:{value:((v=n==null?void 0:n.product_sale_price)==null?void 0:v.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(k=n==null?void 0:n.product_sale_price)==null?void 0:k.currency},price:{value:((f=n==null?void 0:n.product_sale_price)==null?void 0:f.value)||0,currency:(N=n==null?void 0:n.product_sale_price)==null?void 0:N.currency},prices:w(n),itemPrices:w(n),priceInclTax:{value:((t=n==null?void 0:n.product_sale_price)==null?void 0:t.value)||0,currency:(b=n==null?void 0:n.product_sale_price)==null?void 0:b.currency},totalQuantity:r(n==null?void 0:n.quantity_ordered),regularPrice:{value:(M=(S=(h=(A=n==null?void 0:n.product)==null?void 0:A.price_range)==null?void 0:h.maximum_price)==null?void 0:S.regular_price)==null?void 0:M.value,currency:(y=(x=(g=(G=n==null?void 0:n.product)==null?void 0:G.price_range)==null?void 0:g.maximum_price)==null?void 0:x.regular_price)==null?void 0:y.currency},product:I(n==null?void 0:n.product),thumbnail:an(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?tn(n):void 0,configurableOptions:d(n),bundleOptions:n.__typename==="BundleOrderItem"?nn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?_n(n==null?void 0:n.downloadable_links):null}},U=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>Z(i)),sn=n=>({token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??""}),B=(n,i)=>{var t,b,A,h,S,M,G,g,x;const _=sn(n),u=$(n==null?void 0:n.billing_address),l=$(n==null?void 0:n.shipping_address),a=(t=n.shipments)==null?void 0:t.map(y=>({...y,items:y.items.map(O=>({id:O.id,productName:O.product_name,productSku:O.product_sku,quantityShipped:O.quantity_shipped,orderItem:Z(O.order_item)}))})),s=U(n.items),T=((b=En(n==null?void 0:n.returns))==null?void 0:b.ordersReturn)??[],E=i?T.filter(y=>y.returnNumber===i):T,p=U(n.items_eligible_for_return),c=cn(n==null?void 0:n.total),R=(A=n==null?void 0:n.payment_methods)==null?void 0:A[0],F=n==null?void 0:n.shipping_method,q=s==null?void 0:s.reduce((y,O)=>y+(O==null?void 0:O.totalQuantity),0),e={amount:((h=c==null?void 0:c.totalShipping)==null?void 0:h.value)??0,currency:((S=c==null?void 0:c.totalShipping)==null?void 0:S.currency)||"",code:(_==null?void 0:_.shippingMethod)??""},v=[{code:(R==null?void 0:R.type)??"",name:(R==null?void 0:R.name)??""}],k=c==null?void 0:c.subtotalExclTax,f=c==null?void 0:c.subtotalInclTax,N={..._,...c,subtotalExclTax:k,subtotalInclTax:f,billingAddress:u,shippingAddress:l,shipments:a,items:s,returns:E,itemsEligibleForReturn:p,totalQuantity:q,shippingMethod:F,shipping:e,payments:v};return P(N,(x=(g=(G=(M=C==null?void 0:C.getConfig())==null?void 0:M.models)==null?void 0:G.OrderDataModel)==null?void 0:g.transformer)==null?void 0:x.call(g,n))},Rn=(n,i,_)=>{var u,l,a,s,T,E,p;if((s=(a=(l=(u=i==null?void 0:i.data)==null?void 0:u.customer)==null?void 0:l.orders)==null?void 0:a.items)!=null&&s.length&&n==="orderData"){const c=(p=(E=(T=i==null?void 0:i.data)==null?void 0:T.customer)==null?void 0:E.orders)==null?void 0:p.items[0];return B(c,_)}return null},En=n=>{var a,s,T,E,p;if(!((a=n==null?void 0:n.items)!=null&&a.length))return null;const i=n==null?void 0:n.items,_=n==null?void 0:n.page_info,l={ordersReturn:[...i].sort((c,R)=>+R.number-+c.number).map(c=>{var f,N;const{order:R,status:F,number:q,created_at:e}=c,v=((N=(f=c==null?void 0:c.shipping)==null?void 0:f.tracking)==null?void 0:N.map(t=>{const{status:b,carrier:A,tracking_number:h}=t;return{status:b,carrier:A,trackingNumber:h}}))??[],k=c.items.map(t=>{var g;const b=t==null?void 0:t.quantity,A=t==null?void 0:t.status,h=t==null?void 0:t.request_quantity,S=t==null?void 0:t.uid,M=t==null?void 0:t.order_item,G=((g=U([M]))==null?void 0:g.reduce((x,y)=>y,{}))??{};return{uid:S,quantity:b,status:A,requestQuantity:h,...G}});return{createdReturnAt:e,returnStatus:F,token:R==null?void 0:R.token,orderNumber:R==null?void 0:R.number,returnNumber:q,items:k,tracking:v}}),..._?{pageInfo:{pageSize:_.page_size,totalPages:_.total_pages,currentPage:_.current_page}}:{}};return P(l,(p=(E=(T=(s=C==null?void 0:C.getConfig())==null?void 0:s.models)==null?void 0:T.CustomerOrdersReturnModel)==null?void 0:E.transformer)==null?void 0:p.call(E,{...i,..._}))},Gn=(n,i)=>{var u,l;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrder))return null;const _=(l=n==null?void 0:n.data)==null?void 0:l.guestOrder;return B(_,i)},Tn=(n,i)=>{var u,l;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrderByToken))return null;const _=(l=n==null?void 0:n.data)==null?void 0:l.guestOrderByToken;return B(_,i)},pn=`
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
  ${Y}
  ${Q}
  ${K}
  ${j}
  ${V}
  ${X}
  ${H}
  ${J}
`,yn=async({orderId:n,returnRef:i,queryType:_,returnsPageSize:u=50})=>await W(pn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:u}}).then(l=>Rn(_??"orderData",l,i)).catch(z),gn=`
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
  ${Y}
  ${Q}
  ${K}
  ${j}
  ${V}
  ${X}
  ${H}
  ${J}
`,bn=async(n,i)=>await W(gn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(_=>{var u;return(u=_.errors)!=null&&u.length&&_.errors[0].message==="Please login to view the order."?o(_.errors):Tn(_,i)}).catch(z),An="orderData",hn=async n=>{var s;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",_=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",u=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((s=n==null?void 0:n.orderRef)==null?void 0:s.length)>20,l=(n==null?void 0:n.orderData)??null;if(l){L.emit("order/data",{...l,returnNumber:_});return}if(!i)return;const a=u?await bn(i,_):await yn({orderId:i,returnRef:_,queryType:An});a?L.emit("order/data",{...a,returnNumber:_}):L.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},D=new m({init:async n=>{const i={};D.config.setConfig({...i,...n}),hn(n??{}).catch(console.error)},listeners:()=>[]}),C=D.config;export{B as a,Gn as b,bn as c,C as d,yn as g,D as i,En as t};
