/*! Copyright 2024 Adobe
All Rights Reserved. */
import{n as L,f as l,m as C,l as h,k as H}from"./removeCustomerAddress.js";import{BASIC_CUSTOMER_INFO_FRAGMENT as W}from"../fragments.js";import{c as q}from"./getStoreConfig.js";import"@dropins/tools/event-bus.js";import{merge as K}from"@dropins/tools/lib.js";const Q=t=>{var u,r,d,i,_,E,f,o,S,T,w,g,O,P,A,M,U,b,R,N,$,G,v,D,I,y,x,F,c,V;const m=(d=(r=(u=t==null?void 0:t.data)==null?void 0:u.customer)==null?void 0:r.custom_attributes)==null?void 0:d.reduce((k,B)=>(k[L(B.code)]=B.value??"",k),{}),a={email:((_=(i=t==null?void 0:t.data)==null?void 0:i.customer)==null?void 0:_.email)||"",firstName:((f=(E=t==null?void 0:t.data)==null?void 0:E.customer)==null?void 0:f.firstname)||"",lastName:((S=(o=t==null?void 0:t.data)==null?void 0:o.customer)==null?void 0:S.lastname)||"",middleName:((w=(T=t==null?void 0:t.data)==null?void 0:T.customer)==null?void 0:w.middlename)||"",gender:((O=(g=t==null?void 0:t.data)==null?void 0:g.customer)==null?void 0:O.gender)||"1",dateOfBirth:((A=(P=t==null?void 0:t.data)==null?void 0:P.customer)==null?void 0:A.date_of_birth)||"",dob:((U=(M=t==null?void 0:t.data)==null?void 0:M.customer)==null?void 0:U.dob)||((R=(b=t==null?void 0:t.data)==null?void 0:b.customer)==null?void 0:R.date_of_birth)||"",prefix:(($=(N=t==null?void 0:t.data)==null?void 0:N.customer)==null?void 0:$.prefix)||"",suffix:((v=(G=t==null?void 0:t.data)==null?void 0:G.customer)==null?void 0:v.suffix)||"",createdAt:((I=(D=t==null?void 0:t.data)==null?void 0:D.customer)==null?void 0:I.created_at)||"",...m};return K(a,(V=(c=(F=(x=(y=q)==null?void 0:y.getConfig())==null?void 0:x.models)==null?void 0:F.CustomerDataModelShort)==null?void 0:c.transformer)==null?void 0:V.call(c,t.data))},e=`
  query GET_CUSTOMER {
    customer {
      ...BASIC_CUSTOMER_INFO_FRAGMENT
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
        code
      }
    }
  }
  ${W}
`,p=async()=>await l(e,{method:"GET",cache:"no-cache"}).then(t=>{var m;return(m=t.errors)!=null&&m.length?C(t.errors):Q(t)}).catch(h),j=`
  mutation CHANGE_CUSTOMER_PASSWORD(
    $currentPassword: String!
    $newPassword: String!
  ) {
    changeCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      email
    }
  }
`,tt=async({currentPassword:t,newPassword:m})=>await l(j,{method:"POST",variables:{currentPassword:t,newPassword:m}}).then(a=>{var u,r,d;return(u=a.errors)!=null&&u.length?C(a.errors):((d=(r=a==null?void 0:a.data)==null?void 0:r.changeCustomerPassword)==null?void 0:d.email)||""}).catch(h),z=`
  mutation UPDATE_CUSTOMER_EMAIL($email: String!, $password: String!) {
    updateCustomerEmail(email: $email, password: $password) {
      customer {
        email
      }
    }
  }
`,at=async({email:t,password:m})=>await l(z,{method:"POST",variables:{email:t,password:m}}).then(a=>{var u,r,d,i;return(u=a.errors)!=null&&u.length?C(a.errors):((i=(d=(r=a==null?void 0:a.data)==null?void 0:r.updateCustomerEmail)==null?void 0:d.customer)==null?void 0:i.email)||""}).catch(h),J=`
  mutation UPDATE_CUSTOMER_V2($input: CustomerUpdateInput!) {
    updateCustomerV2(input: $input) {
      customer {
        email
      }
    }
  }
`,mt=async t=>await l(J,{method:"POST",variables:{input:H(t,"snakeCase",{firstName:"firstname",lastName:"lastname",middleName:"middlename",custom_attributesV2:"custom_attributes"})}}).then(m=>{var a,u,r,d;return(a=m.errors)!=null&&a.length?C(m.errors):((d=(r=(u=m==null?void 0:m.data)==null?void 0:u.updateCustomerV2)==null?void 0:r.customer)==null?void 0:d.email)||""}).catch(h);export{at as a,mt as b,p as g,tt as u};
