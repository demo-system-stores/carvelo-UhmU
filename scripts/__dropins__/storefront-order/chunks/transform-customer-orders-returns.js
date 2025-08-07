/*! Copyright 2024 Adobe
All Rights Reserved. */
import{a as z}from"./convertCase.js";const d=`
  fragment ProductDetails on ProductInterface {
    __typename
    canonical_url
    url_key
    uid
    name
    sku
    only_x_left_in_stock
    stock_status
    thumbnail {
      label
      url
    }
    price_range {
      maximum_price {
        regular_price {
          currency
          value
        }
      }
    }
  }
`,r=`
  fragment PriceDetails on OrderItemInterface {
    prices {
      price_including_tax {
        value
        currency
      }
      original_price {
        value
        currency
      }
      original_price_including_tax {
        value
        currency
      }
      price {
        value
        currency
      }
    }
  }
`,m=`
  fragment GiftCardDetails on GiftCardOrderItem {
    ...PriceDetails
    gift_message {
      message
    }
    gift_card {
      recipient_name
      recipient_email
      sender_name
      sender_email
      message
    }
  }
`,I=`
  fragment OrderItemDetails on OrderItemInterface {
    __typename
    status
    product_sku
    eligible_for_return
    product_name
    product_url_key
    id
    quantity_ordered
    quantity_shipped
    quantity_canceled
    quantity_invoiced
    quantity_refunded
    quantity_return_requested
    product_sale_price {
      value
      currency
    }
    selected_options {
      label
      value
    }
    product {
      ...ProductDetails
    }
    ...PriceDetails
  }
`,nn=`
  fragment BundleOrderItemDetails on BundleOrderItem {
    ...PriceDetails
    bundle_options {
      uid
      label
      values {
        uid
        product_name
      }
    }
  }
`,an=`
  fragment OrderReturns on Returns {
  __typename
   items {
    number
    status
    created_at
    shipping {
      tracking {
        status {
          text
          type
        }
        carrier {
          uid
          label
        }
        tracking_number
      }
    }
    order {
      number
      token
    }
    items {
     uid
     quantity
     status
     request_quantity
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
  }
`,H=a=>a||0,J=a=>{var n,i,l;return{...a,canonicalUrl:(a==null?void 0:a.canonical_url)||"",urlKey:(a==null?void 0:a.url_key)||"",id:(a==null?void 0:a.uid)||"",name:(a==null?void 0:a.name)||"",sku:(a==null?void 0:a.sku)||"",image:((n=a==null?void 0:a.image)==null?void 0:n.url)||"",productType:(a==null?void 0:a.__typename)||"",thumbnail:{label:((i=a==null?void 0:a.thumbnail)==null?void 0:i.label)||"",url:((l=a==null?void 0:a.thumbnail)==null?void 0:l.url)||""}}},V=a=>{if(!a||!("selected_options"in a))return;const n={};for(const i of a.selected_options)n[i.label]=i.value;return n},W=a=>{const n=a==null?void 0:a.map(l=>({uid:l.uid,label:l.label,values:l.values.map(t=>t.product_name).join(", ")})),i={};return n==null||n.forEach(l=>{i[l.label]=l.values}),Object.keys(i).length>0?i:null},X=a=>(a==null?void 0:a.length)>0?{count:a.length,result:a.map(n=>n.title).join(", ")}:null,Y=a=>({quantityCanceled:(a==null?void 0:a.quantity_canceled)??0,quantityInvoiced:(a==null?void 0:a.quantity_invoiced)??0,quantityOrdered:(a==null?void 0:a.quantity_ordered)??0,quantityRefunded:(a==null?void 0:a.quantity_refunded)??0,quantityReturned:(a==null?void 0:a.quantity_returned)??0,quantityShipped:(a==null?void 0:a.quantity_shipped)??0,quantityReturnRequested:(a==null?void 0:a.quantity_return_requested)??0}),K=a=>a==null?void 0:a.filter(n=>n.__typename).map(n=>{var p,b,O,q,R,u,g,f,y,v,E,N,h,T,k,C,D,P,A,G,S,x,L,F,M,B,Q,U,j,w;const{quantityCanceled:i,quantityInvoiced:l,quantityOrdered:t,quantityRefunded:s,quantityReturned:c,quantityShipped:_,quantityReturnRequested:e}=Y(n);return{type:n==null?void 0:n.__typename,eligibleForReturn:n==null?void 0:n.eligible_for_return,productSku:n==null?void 0:n.product_sku,productName:n.product_name,productUrlKey:n.product_url_key,quantityCanceled:i,quantityInvoiced:l,quantityOrdered:t,quantityRefunded:s,quantityReturned:c,quantityShipped:_,quantityReturnRequested:e,id:n==null?void 0:n.id,discounted:((q=(O=(b=(p=n==null?void 0:n.product)==null?void 0:p.price_range)==null?void 0:b.maximum_price)==null?void 0:O.regular_price)==null?void 0:q.value)*(n==null?void 0:n.quantity_ordered)!==((R=n==null?void 0:n.product_sale_price)==null?void 0:R.value)*(n==null?void 0:n.quantity_ordered),total:{value:((u=n==null?void 0:n.product_sale_price)==null?void 0:u.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((g=n==null?void 0:n.product_sale_price)==null?void 0:g.currency)||""},totalInclTax:{value:((f=n==null?void 0:n.product_sale_price)==null?void 0:f.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(y=n==null?void 0:n.product_sale_price)==null?void 0:y.currency},price:{value:((v=n==null?void 0:n.product_sale_price)==null?void 0:v.value)||0,currency:(E=n==null?void 0:n.product_sale_price)==null?void 0:E.currency},priceInclTax:{value:((N=n==null?void 0:n.product_sale_price)==null?void 0:N.value)||0,currency:(h=n==null?void 0:n.product_sale_price)==null?void 0:h.currency},totalQuantity:H(n==null?void 0:n.quantity_ordered),regularPrice:{value:(D=(C=(k=(T=n==null?void 0:n.product)==null?void 0:T.price_range)==null?void 0:k.maximum_price)==null?void 0:C.regular_price)==null?void 0:D.value,currency:(S=(G=(A=(P=n==null?void 0:n.product)==null?void 0:P.price_range)==null?void 0:A.maximum_price)==null?void 0:G.regular_price)==null?void 0:S.currency},product:J(n==null?void 0:n.product),thumbnail:{label:((L=(x=n==null?void 0:n.product)==null?void 0:x.thumbnail)==null?void 0:L.label)||"",url:((M=(F=n==null?void 0:n.product)==null?void 0:F.thumbnail)==null?void 0:M.url)||""},giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?{senderName:((B=n.gift_card)==null?void 0:B.sender_name)||"",senderEmail:((Q=n.gift_card)==null?void 0:Q.sender_email)||"",recipientEmail:((U=n.gift_card)==null?void 0:U.recipient_email)||"",recipientName:((j=n.gift_card)==null?void 0:j.recipient_name)||"",message:((w=n.gift_card)==null?void 0:w.message)||""}:void 0,configurableOptions:V(n),bundleOptions:n.__typename==="BundleOrderItem"?W(n.bundle_options):null,itemPrices:n.prices,downloadableLinks:n.__typename==="DownloadableOrderItem"?X(n==null?void 0:n.downloadable_links):null}}),Z=(a,n)=>{var q,R,u,g,f;const i=K(a.items),l=((q=$(a==null?void 0:a.returns))==null?void 0:q.ordersReturn)??[],t=n?l.filter(y=>y.returnNumber===n):l,{total:s,...c}=z({...a,items:i,returns:t},"camelCase",{applied_coupons:"coupons",__typename:"__typename",firstname:"firstName",middlename:"middleName",lastname:"lastName",postcode:"postCode",payment_methods:"payments"}),_=(R=a==null?void 0:a.payment_methods)==null?void 0:R[0],e=(_==null?void 0:_.type)||"",p=(_==null?void 0:_.name)||"",b=(u=c==null?void 0:c.items)==null?void 0:u.reduce((y,v)=>y+(v==null?void 0:v.totalQuantity),0);return{...s,...c,totalQuantity:b,shipping:{amount:((g=s==null?void 0:s.totalShipping)==null?void 0:g.value)??0,currency:((f=s==null?void 0:s.totalShipping)==null?void 0:f.currency)||"",code:c.shippingMethod??""},payments:[{code:e,name:p}]}},un=(a,n,i)=>{var l,t,s,c,_,e,p;if((c=(s=(t=(l=n==null?void 0:n.data)==null?void 0:l.customer)==null?void 0:t.orders)==null?void 0:s.items)!=null&&c.length&&a==="orderData"){const b=(p=(e=(_=n==null?void 0:n.data)==null?void 0:_.customer)==null?void 0:e.orders)==null?void 0:p.items[0];return Z(b,i)}return null},$=a=>{var t;if(!((t=a==null?void 0:a.items)!=null&&t.length))return null;const n=a==null?void 0:a.items,i=a==null?void 0:a.page_info;return{ordersReturn:[...n].sort((s,c)=>+c.number-+s.number).map(s=>{var q,R;const{order:c,status:_,number:e,created_at:p}=s,b=((R=(q=s==null?void 0:s.shipping)==null?void 0:q.tracking)==null?void 0:R.map(u=>{const{status:g,carrier:f,tracking_number:y}=u;return{status:g,carrier:f,trackingNumber:y}}))??[],O=s.items.map(u=>{var h;const g=u==null?void 0:u.quantity,f=u==null?void 0:u.status,y=u==null?void 0:u.request_quantity,v=u==null?void 0:u.uid,E=u==null?void 0:u.order_item,N=((h=K([E]))==null?void 0:h.reduce((T,k)=>k,{}))??{};return{uid:v,quantity:g,status:f,requestQuantity:y,...N}});return{createdReturnAt:p,returnStatus:_,token:c==null?void 0:c.token,orderNumber:c==null?void 0:c.number,returnNumber:e,items:O,tracking:b}}),...i?{pageInfo:{pageSize:i.page_size,totalPages:i.total_pages,currentPage:i.current_page}}:{}}};export{nn as B,m as G,I as O,d as P,an as R,r as a,Z as b,un as c,$ as t};
