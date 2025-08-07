function e(e,t){if(e)return{city:e.locality,country:e.countryCode,houseNumberOrName:"ZZ",postalCode:e.postalCode,street:e.addressLines?.join(" ").trim(),...e.administrativeArea&&{stateOrProvince:e.administrativeArea},...t&&{firstName:e.givenName,lastName:e.familyName}}}export{e as formatApplePayContactToAdyenAddressFormat};
//# sourceMappingURL=format-applepay-contact-to-adyen-format.js.map
