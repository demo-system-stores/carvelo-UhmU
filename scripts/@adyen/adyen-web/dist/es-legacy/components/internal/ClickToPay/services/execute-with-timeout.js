function e(e,t,r){let o=null;return Promise.race([e(),(c=t,new Promise(((e,t)=>{o=setTimeout((()=>t(r)),c)})))]).then((e=>(clearTimeout(o),e))).catch((e=>{throw clearTimeout(o),e}));var c}export{e as executeWithTimeout};
//# sourceMappingURL=execute-with-timeout.js.map
