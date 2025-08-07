const n=n=>{const t=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(n);if(!t)return null;const[,e,$,l,r]=t;return e&&$&&l?`${e}:${$}${l}${r?`:${r}`:""}`:null};export{n as default,n as getOrigin};
//# sourceMappingURL=getOrigin.js.map
