!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("autosize")):"function"==typeof define&&define.amd?define(["exports","react","autosize"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["intoy-components"]={},t.React,t.autosize)}(this,(function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(e),i=r(n);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l=function(t){function e(e){var n;return(n=t.call(this,e)||this).textarea=null,n.onChange=function(t){var e=n.props.onChange;"function"==typeof e&&e(t)},n}a(e,t);var n=e.prototype;return n.componentDidMount=function(){this.textarea&&i.default(this.textarea)},n.componentWillUnmount=function(){this.textarea&&i.default.destroy(this.textarea)},n.componentDidUpdate=function(t){var e=this.props.id===t.id,n=this.props.name===t.name,r=this.props.placeholder===t.placeholder,o=this.props.value===t.value,a=this.props.disabled===t.disabled;e||n||r||o||a?this.textarea&&i.default.update(this.textarea):this.forceUpdate()},n.render=function(){var t=this,e=this.props,n={spellCheck:"false",id:this.props.id||this.props.name||"textarea",name:this.props.name||"textarea",placeholder:this.props.placeholder,rows:void 0!==this.props.rows&&null!==this.props.rows?this.props.rows:1,value:null===e.value||void 0===e.value?"":e.value};return e.maxLength&&(n.maxLength=e.maxLength),(!0===e.disabled||"disabled"===e.disabled)&&(n.disabled="disabled"),o.default.createElement("textarea",Object.assign({style:{minHeight:this.props.minHeight?this.props.minHeight:"36px"},className:""+(e.className?e.className:""),ref:function(e){return t.textarea=e},onChange:this.onChange},n))},e}(o.default.Component);function p(t,e){var n=Object.prototype.toString.call(t);if(n!==Object.prototype.toString.call(e))return!1;if(null===t&&null===e)return!0;if(void 0===t&&void 0===e)return!0;if(!0===t&&!0===e)return!0;if(!1===t&&!1===e)return!0;if("number"==typeof t&&"number"==typeof e&&t===e)return!0;if("string"==typeof t&&"string"==typeof e&&t===e)return!0;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var r="[object Array]"===n?t.length:Object.keys(t).length;if(r!==("[object Array]"===n?e.length:Object.keys(e).length))return!1;var o=function(t,e){var n=Object.prototype.toString.call(t);return["[object Array]","[object Object]"].indexOf(n)>=0?!!p(t,e)&&void 0:n===Object.prototype.toString.call(e)&&("[object Function]"===n?t.toString===e.toString():t===e)};if("[object Array]"===n){for(var i=0;i<r;i++)if(!1===o(t[i],e[i]))return!1}else for(var a in t)if(t.hasOwnProperty(a)&&!1===o(t[a],e[a]))return!1;return!0}function f(t){if(null==t)return 0;if("number"==typeof t)return t;if("string"==typeof t){var e=parseFloat(t);return e=isNaN(e)?0:e}return 0}function c(t){return("string"!=typeof t?t.toString():t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function h(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=""),null==t)return"-";var r=function(t){var e="string"==typeof t?parseFloat(t):"number"==typeof t?t:0;return isNaN(e)&&(e=0),e}(t);if(0===r)return"-";var o=f(r);if(0!==o&&e>0){var i=(o=o.toFixed(e)).split("."),a=i[1]&&function(t,e){if(void 0===e&&(e=0),e=null==e||isNaN(t)?0:e,"number"==typeof t)return t;if("string"==typeof t){var n=parseInt(t);return isNaN(n)?e:n}return e}(i[1])>0;o=c(i[0]),a&&(o+=","+i[1])}else o=c(o);return o+(n?" "+n:"")}var d={position:"absolute",backgroundColor:"#DC3545",color:"#FFEAC8",padding:"3px 5px",borderRadius:"4px",left:"auto",right:"0",bottom:"100%",fontSize:"18px",lineHeight:"18px"},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).enableEvent=!0,n.value="",n.athParProps=function(t){t=t||n.props,n.value=((null==t?void 0:t.value)||"").toString()},n.hFocus=n.hFocus.bind(u(n)),n.hBlur=n.hBlur.bind(u(n)),n.onChange=n.onChange.bind(u(n)),n.onKeyP=n.onKeyP.bind(u(n)),n.state={focus:!1},n.athParProps(e),n}a(e,t);var n=e.prototype;return n.hFocus=function(t){this.setState({focus:!0})},n.hBlur=function(t){this.setState({focus:!1})},n.onChange=function(t){this.value=t.target.value,"function"==typeof this.props.onChange&&this.props.onChange(t)},n.onKeyP=function(t){var e=t.key;if(!(t.getModifierState("Meta")||t.getModifierState("Control")||t.getModifierState("Alt"))&&1===e.length&&"\0"!==e){var n=parseInt(e);!isNaN(n)||"."===e||"-"===e||t.preventDefault()}},n.renderNotify=function(){return this.state.focus?o.default.createElement("span",{style:d,className:"input-angka-notify"},h(this.value,this.props.digit)):null},n.shouldComponentUpdate=function(t,e){var n,r,o=null===(n=this.props.value)||void 0===n?void 0:n.toString();f(this.props.value);for(var i=null===(r=t.value)||void 0===r?void 0:r.toString(),a=!0,s=["name","id","maxLength","onChange","placeholder","digit","className","style"],u=0;u<s.length;u++)if(t[s[u]]!==this.props[s[u]]){a=!1;break}return o!==i||!p(this.state,e)||!a},n.componentDidUpdate=function(t){var e,n;if(!((null===(e=this.props.value)||void 0===e?void 0:e.toString())===(null===(n=t.value)||void 0===n?void 0:n.toString())))return this.athParProps(),void this.forceUpdate()},n.render=function(){var t=this,e=this.state.focus,n=this.props,r=(this.value||"").toString(),i=e&&(r.length<1||[" "].indexOf(r)>=0);return o.default.createElement("span",{className:"InputAngka",style:{position:"relative"}},this.renderNotify(),o.default.createElement("input",{ref:function(e){return t.ndInput=e},name:n.name,id:n.id,maxLength:n.maxLength,onChange:this.onChange,onFocus:this.hFocus,onBlur:this.hBlur,onKeyDown:this.onKeyP,value:i?"":this.value,className:n.className,style:n.style,autoComplete:"off"}))},e}(o.default.Component);t.InputAngka=v,t.Textarea=l,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
