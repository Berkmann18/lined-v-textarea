(function(e){function t(t){for(var a,r,o=t[0],s=t[1],c=t[2],u=0,p=[];u<o.length;u++)r=o[u],l[r]&&p.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"404f":function(e,t,n){},"528c":function(e,t,n){"use strict";var a=n("6f0f"),l=n.n(a);l.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),l=n("bb71");n("da64");a["a"].use(l["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("v-layout",{attrs:{"align-center":""}},[n("v-checkbox",{attrs:{id:"disable",label:"Disable textarea"},model:{value:e.disable,callback:function(t){e.disable=t},expression:"disable"}}),n("br"),e._v("\n      Width "),n("v-text-field",{model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),e._v("px"),n("br"),e._v("\n      Height "),n("v-text-field",{model:{value:e.height,callback:function(t){e.height=t},expression:"height"}}),e._v("px"),n("br"),e._v("\n      Resize:\n      "),n("v-radio-group",{model:{value:e.resize,callback:function(t){e.resize=t},expression:"resize"}},[n("v-radio",{attrs:{id:"fixed",value:"none",label:"Fixed"}}),n("v-radio",{attrs:{id:"vertical",value:"vertical",label:"Vertical"}}),n("v-radio",{attrs:{id:"both",value:"both",label:"Both"}})],1),n("br"),e._v("Validate:\n      "),n("v-radio-group",{model:{value:e.validateName,callback:function(t){e.validateName=t},expression:"validateName"}},[n("v-radio",{attrs:{id:"none",value:"none",label:"None"}}),n("v-radio",{attrs:{id:"email",value:"email",label:"Email"}}),n("v-radio",{attrs:{id:"telephone",value:"telephone",label:"Telephone Number"}})],1),n("br"),e._v("Word wrap:\n      "),n("v-radio-group",{model:{value:e.nowrap,callback:function(t){e.nowrap=t},expression:"nowrap"}},[n("v-radio",{attrs:{id:"wrap",value:"false",label:"Wrap"}}),n("v-radio",{attrs:{id:"nowrap",value:"true",label:"No Wrap"}})],1),n("br"),n("br")],1),n("lined-v-textarea",{attrs:{disabled:e.disable,nowrap:"true"===e.nowrap,validate:e.validate,styles:{height:e.height+"px",width:e.width+"px",resize:e.resize}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lined-textarea"},[e.disabled?e._e():n("div",{staticClass:"lined-textarea__lines",style:{"padding-right":e.longestWidth+"px"}},[n("div",{ref:"lines",staticClass:"lined-textarea__lines__inner"},e._l(e.lines,function(t,a){return n("p",{key:a,staticClass:"lined-textarea__lines__line",class:{"lined-textarea__lines__line--invalid":e.invalidLines.includes(t)},domProps:{innerHTML:e._s(t)}})}))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],ref:"textarea",staticClass:"lined-textarea__content",class:{"lined-textarea__content--disabled":e.disabled,"lined-textarea__content--wrap":!e.nowrap,"lined-textarea__content--nowrap":e.nowrap},style:e.styles,attrs:{disabled:e.disabled,placeholder:e.placeholder},domProps:{value:e.content},on:{scroll:e.scrollLines,input:[function(t){t.target.composing||(e.content=t.target.value)},e.onInput],mousedown:e.detectResize}}),n("div",{ref:"helper",staticClass:"count-helper"})])},s=[],c={name:"LinedVTextarea",mounted(){this.content=this.value,this.syncScroll(),this.calculateCharactersPerLine()},data(){return{content:"",widthPerChar:8,numPerLine:1,previousWidth:0,scrolledLength:0}},props:{disabled:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!0},placeholder:{type:String,default:""},styles:{type:Object,default(){return{height:"300px"}}},value:{type:String,default:""},validate:{type:Function,default:()=>!0}},computed:{invalidLines(){const e=[];return this.content.split("\n").forEach((t,n)=>{this.validate(t)||e.push(n+1)}),e},lines(){if(""===this.content)return[1];const e=[];let t=1;function n(e,t){if(t<=0)return console.warn("Please set the min-width of textarea to allow at least one character per line."),e.length+1;const n=e.split(" ");let a=1,l=t;return n.forEach(e=>{let n=l===t;while(n&&e.length>=l)++a,e=e.slice(t);l!==t?(e.length+1>l&&(++a,l=t),l-=n?e.length:e.length+1):l-=e.length}),l===t?a-1:a}return this.content.split("\n").forEach(a=>{const l=n(a,this.numPerLine)-1;e.push(t);for(let t=0;t<l;++t)e.push("&nbsp;");++t}),e},longestWidth(){for(let e=this.lines.length-1;e>=0;--e)if("&nbsp;"!==this.lines[e])return(this.lines[e]+"").length*this.widthPerChar+10}},watch:{longestWidth(e,t){e!==t&&this.$nextTick(()=>this.calculateCharactersPerLine())},nowrap(){this.calculateCharactersPerLine()},value(e){e!==this.content&&(this.content=e)}},methods:{calculateCharactersPerLine(){if(this.nowrap)return void(this.numPerLine=Number.MAX_SAFE_INTEGER);const e=this.$refs.textarea,t=getComputedStyle(e),n=parseFloat(t.getPropertyValue("padding-left")),a=parseFloat(t.getPropertyValue("padding-right")),l=t.getPropertyValue("font-size"),i=t.getPropertyValue("font-family"),r=e.clientWidth-n-a,o=this.$refs.helper;o.style.fontSize=l,o.style.fontFamily=i,o.innerHTML="";for(let s=1;s<999;++s)if(o.innerHTML+="a",o.getBoundingClientRect().width>r){this.numPerLine=s-1;break}},detectResize(){const e=this.$refs.textarea,{clientWidth:t,clientHeight:n}=e,a=()=>{const{clientWidth:a,clientHeight:l}=e;t===a&&n===l||this.calculateCharactersPerLine()},l=()=>{this.calculateCharactersPerLine(),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)},onInput(){this.$emit("input",this.content),this.recalculate()},recalculate(){const e=this.$refs.textarea,t=e.clientWidth;t!==this.previousWidth&&this.calculateCharactersPerLine(),this.previousWidth=t},scrollLines(e){this.scrolledLength=e.target.scrollTop,this.syncScroll()},syncScroll(){this.$refs.lines.style.transform=`translateY(${-this.scrolledLength}px)`}}},d=c,u=(n("528c"),n("2877")),p=Object(u["a"])(d,o,s,!1,null,"44b22a74",null);p.options.__file="LinedVTextarea.vue";var h=p.exports;n("404f");const v="email@exampleexampleexampleexampleexampleexampleexampleexample.com\nfirstname.lastname@example.com\nemail@subdomain.exampexampleexampleexampleexampleexamplele.com\nfirstname+lastname@example.com\nnot valid\nemail@example.co.jp\nA long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long input\n(123) 456-7890\n(123)456-7890\n(123)456-xxxx\n123-456-7890\n123.456.7890";var f={name:"App",components:{LinedVTextarea:h},data(){return{email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e),telephone:e=>/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im.test(e),content:v,disable:!1,height:300,nowrap:"false",resize:"both",validateName:"none",width:450}},computed:{validate(){switch(this.validateName){case"email":return this.email;case"telephone":return this.telephone;default:return()=>!0}}}},g=f,m=(n("5c0b"),n("6544")),b=n.n(m),x=n("7496"),_=n("ac7c"),w=n("549c"),y=n("a722"),L=n("67b6"),P=n("43a6"),C=n("2677"),V=Object(u["a"])(g,i,r,!1,null,null,null);V.options.__file="App.vue";var k=V.exports;b()(V,{VApp:x["a"],VCheckbox:_["a"],VContent:w["a"],VLayout:y["a"],VRadio:L["a"],VRadioGroup:P["a"],VTextField:C["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:e=>e(k)}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("6879"),l=n.n(a);l.a},6879:function(e,t,n){},"6f0f":function(e,t,n){}});
//# sourceMappingURL=app.08882823.js.map