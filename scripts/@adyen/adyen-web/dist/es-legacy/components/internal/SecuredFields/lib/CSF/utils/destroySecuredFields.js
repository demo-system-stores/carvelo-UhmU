function s(){this.postMessageToAllIframes({destroy:!0});Object.keys(this.state.securedFields).forEach((s=>{const e=this.state.securedFields[s];e&&e.destroy(),this.state.securedFields[s]=null})),this.destroyTouchendListener(),this.destroyTouchstartListener(),this.state.securedFields={}}export{s as destroySecuredFields};
//# sourceMappingURL=destroySecuredFields.js.map
