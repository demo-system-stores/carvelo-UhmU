function l({csfState:l,csfProps:t,csfCallbacks:e}){const o=(l=>{const t=Object.keys(l);for(let e=0,o=t.length;e<o;e+=1)if(!l[t[e]].isValid)return!1;return!0})(l.securedFields),a=o!==l.allValid;if(l.allValid=o,!o&&!a)return;const s={allValid:o,type:l.type,rootNode:t.rootNode};e.onAllValid(s)}export{l as default};
//# sourceMappingURL=validateForm.js.map
