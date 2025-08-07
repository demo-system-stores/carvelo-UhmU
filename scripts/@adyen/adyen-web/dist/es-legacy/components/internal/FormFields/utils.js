const o=o=>{const t=o.parentNode,e=window.getComputedStyle(t,null),p=parseInt(e.getPropertyValue("border-top-width")),l=o.offsetTop-t.offsetTop<t.scrollTop,f=o.offsetTop-t.offsetTop+o.clientHeight-p>t.scrollTop+t.clientHeight;(l||f)&&(t.scrollTop=o.offsetTop-t.offsetTop-t.clientHeight/2-p+o.clientHeight/2)};export{o as simulateFocusScroll};
//# sourceMappingURL=utils.js.map
