const e=(e,t,c)=>{let o;return{promise:new Promise(((r,a)=>{o=setTimeout((()=>{a(c)}),e),t.then((e=>{clearTimeout(o),r(e)})).catch((e=>{clearTimeout(o),a(e)}))})),cancel:()=>{clearTimeout(o)}}};export{e as default};
//# sourceMappingURL=promiseTimeout.js.map
