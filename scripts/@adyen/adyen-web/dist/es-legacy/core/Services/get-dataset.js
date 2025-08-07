import{httpGet as t}from"./http.js";function a(a,e,r){return t({loadingContext:e,errorLevel:"warn",errorMessage:`Dataset ${a} is not available`,path:r?`datasets/${a}/${r}.json`:`datasets/${a}.json`})}export{a as default};
//# sourceMappingURL=get-dataset.js.map
