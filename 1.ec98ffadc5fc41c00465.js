(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2fHn":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("fXoL"),r=n("tk/3"),s=n("tyNb"),o=n("ofXK");function a(e,t){if(1&e&&(i.Lb(0,"a",1),i.fc(1),i.Kb()),2&e){const e=i.Sb();i.xb("disabled",!e.urlToRedirect||null),i.wb("href",e.getId(),i.bc),i.vb(1),i.gc(e.details.name?e.details.name:e.details.title)}}let l=(()=>{class e{constructor(e,t){this.http=e,this.router=t,this.details=null}ngOnChanges(e){this.url&&this.http.get(this.url).subscribe(e=>{this.details=e})}ngOnInit(){}getId(){return this.url&&this.urlToRedirect?this.urlToRedirect+this.url.replace(/\D/g,""):null}}return e.\u0275fac=function(t){return new(t||e)(i.Fb(r.a),i.Fb(s.b))},e.\u0275cmp=i.zb({type:e,selectors:[["app-entity-redirect"]],inputs:{url:"url",urlToRedirect:"urlToRedirect"},features:[i.ub],decls:1,vars:1,consts:[["class","btn btn-sm",3,"disabled",4,"ngIf"],[1,"btn","btn-sm"]],template:function(e,t){1&e&&i.dc(0,a,2,4,"a",0),2&e&&i.Vb("ngIf",t.details)},directives:[o.j],styles:["a[_ngcontent-%COMP%]{margin-left:5px;margin-top:5px;background-color:#eee}a.disabled[_ngcontent-%COMP%]{opacity:1}"]}),e})()},"4D4C":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var i=n("fXoL"),r=n("h9Sk");class s{constructor(e,t,n,i,r){this.element=e,this.newWidth=t,this.newHeight=n,this.oldWidth=i,this.oldHeight=r}}let o=(()=>{class e{constructor(e){this.element=e,this.resized=new i.n}ngOnInit(){r.ResizeSensor&&(this.resizeSensor=new r.ResizeSensor(this.element.nativeElement,()=>this.onResized()))}ngOnDestroy(){this.resizeSensor&&this.resizeSensor.detach()}onResized(){const e=this.element.nativeElement.clientWidth,t=this.element.nativeElement.clientHeight;if(e===this.oldWidth&&t===this.oldHeight)return;const n=new s(this.element,e,t,this.oldWidth,this.oldHeight);this.oldWidth=this.element.nativeElement.clientWidth,this.oldHeight=this.element.nativeElement.clientHeight,this.resized.emit(n)}}return e.\u0275fac=function(t){return new(t||e)(i.Fb(i.l))},e.\u0275dir=i.Ab({type:e,selectors:[["","resized",""]],outputs:{resized:"resized"}}),e})(),a=(()=>{class e{}return e.\u0275mod=i.Db({type:e}),e.\u0275inj=i.Cb({factory:function(t){return new(t||e)},imports:[[]]}),e})()},GUAl:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("fXoL"),r=n("4D4C"),s=n("tyNb");const o=["image"],a=function(e,t){return[e,t]},l=["*"];let d=(()=>{class e{constructor(){}ngOnInit(){}getId(e){return e?e.url.replace(/\D/g,""):null}onResized(e){this.imageElement&&(this.imageElement.nativeElement.height=this.imageElement.nativeElement.width)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.zb({type:e,selectors:[["app-entity-card"]],viewQuery:function(e,t){if(1&e&&i.ic(o,1),2&e){let e;i.Zb(e=i.Rb())&&(t.imageElement=e.first)}},inputs:{title:"title",entity:"entity",entityType:"entityType",route:"route"},ngContentSelectors:l,decls:11,vars:7,consts:[[1,"card","thumbnail",3,"resized"],["href","#",1,"btn",3,"routerLink"],["alt","Card image","onError","this.src='assets/images/star-wars.svg'",1,"card-img-top","img-responsive",3,"src"],["image",""],[1,"card-body"],[1,"card-title"]],template:function(e,t){1&e&&(i.Ub(),i.Lb(0,"div",0),i.Qb("resized",function(e){return t.onResized(e)}),i.Lb(1,"a",1),i.Gb(2,"img",2,3),i.Lb(4,"div",4),i.Lb(5,"h6",5),i.fc(6),i.Kb(),i.Tb(7),i.Gb(8,"br"),i.Lb(9,"h6"),i.fc(10,"Click for more information..."),i.Kb(),i.Kb(),i.Kb(),i.Kb()),2&e&&(i.vb(1),i.Vb("routerLink",i.Yb(4,a,t.route,t.getId(t.entity))),i.vb(1),i.Wb("src","assets/images/",t.entityType,"/",t.getId(t.entity),".jpg",i.bc),i.vb(4),i.gc(t.title))},directives:[r.b,s.d],styles:["a[_ngcontent-%COMP%]{padding:0;margin:0}.card-img-top[_ngcontent-%COMP%]{width:100%}.card-title[_ngcontent-%COMP%]{line-height:1.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),e})()},KtZj:function(e,t,n){"use strict";var i,r;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(i=function(){if("undefined"==typeof window)return null;var e="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)},n=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||function(t){e.clearTimeout(t)};function i(e,t){var n=Object.prototype.toString.call(e),i="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"[object Object]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,r=0,s=e.length;if(i)for(;r<s;r++)t(e[r]);else t(e)}function r(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}function s(e,t){Object.keys(t).forEach(function(n){e.style[n]=t[n]})}var o=function(e,a){var l=0;function d(){var e,t,n=[];this.add=function(e){n.push(e)},this.call=function(i){for(e=0,t=n.length;e<t;e++)n[e].call(this,i)},this.remove=function(i){var r=[];for(e=0,t=n.length;e<t;e++)n[e]!==i&&r.push(n[e]);n=r},this.length=function(){return n.length}}i(e,function(e){!function(e,n){if(e)if(e.resizedAttached)e.resizedAttached.add(n);else{e.resizedAttached=new d,e.resizedAttached.add(n),e.resizeSensor=document.createElement("div"),e.resizeSensor.dir="ltr",e.resizeSensor.className="resize-sensor";var i={pointerEvents:"none",position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",overflow:"hidden",zIndex:"-1",visibility:"hidden",maxWidth:"100%"},o={position:"absolute",left:"0px",top:"0px",transition:"0s"};s(e.resizeSensor,i);var a=document.createElement("div");a.className="resize-sensor-expand",s(a,i);var c=document.createElement("div");s(c,o),a.appendChild(c);var u=document.createElement("div");u.className="resize-sensor-shrink",s(u,i);var h=document.createElement("div");s(h,o),s(h,{width:"200%",height:"200%"}),u.appendChild(h),e.resizeSensor.appendChild(a),e.resizeSensor.appendChild(u),e.appendChild(e.resizeSensor);var f=window.getComputedStyle(e),m=f?f.getPropertyValue("position"):null;"absolute"!==m&&"relative"!==m&&"fixed"!==m&&"sticky"!==m&&(e.style.position="relative");var p=!1,g=0,v=r(e),y=0,b=0,w=!0;l=0;var S=function(){if(w){if(0===e.offsetWidth&&0===e.offsetHeight)return void(l||(l=t(function(){l=0,S()})));w=!1}var n,i;i=e.offsetHeight,c.style.width=(n=e.offsetWidth)+10+"px",c.style.height=i+10+"px",a.scrollLeft=n+10,a.scrollTop=i+10,u.scrollLeft=n+10,u.scrollTop=i+10};e.resizeSensor.resetSensor=S;var z=function(){g=0,p&&(y=v.width,b=v.height,e.resizedAttached&&e.resizedAttached.call(v))},E=function(){v=r(e),(p=v.width!==y||v.height!==b)&&!g&&(g=t(z)),S()},x=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)};x(a,"scroll",E),x(u,"scroll",E),l=t(function(){l=0,S()})}}(e,a)}),this.detach=function(t){l||(n(l),l=0),o.detach(e,t)},this.reset=function(){e.resizeSensor.resetSensor()}};if(o.reset=function(e){i(e,function(e){e.resizeSensor.resetSensor()})},o.detach=function(e,t){i(e,function(e){e&&(e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached))})},"undefined"!=typeof MutationObserver){var a=new MutationObserver(function(e){for(var t in e)if(e.hasOwnProperty(t))for(var n=e[t].addedNodes,i=0;i<n.length;i++)n[i].resizeSensor&&o.reset(n[i])});document.addEventListener("DOMContentLoaded",function(e){a.observe(document.body,{childList:!0,subtree:!0})})}return o})?i.call(t,n,t,e):i)||(e.exports=r)},"QOR/":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("dAE2"),r=n("fXoL"),s=n("tk/3");let o=(()=>{class e{constructor(e){this.http=e,this.baseUrl="https://swapi.dev/api/"}getStarWars(e){return this.http.get(`${this.baseUrl}${e}/`)}getFilmDetails(e){return this.http.get(`${this.baseUrl}${i.a.Film}/${e}/`)}getCharacterDetails(e){return this.http.get(`${this.baseUrl}${i.a.Character}/${e}/`)}getPlanetDetails(e){return this.http.get(`${this.baseUrl}${i.a.Planet}/${e}/`)}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(s.a))},e.\u0275prov=r.Bb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dAE2:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(e){return e.Film="films",e.Character="people",e.Planet="planets",e}({})},h9Sk:function(e,t,n){e.exports={ResizeSensor:n("KtZj"),ElementQueries:n("rnKy")}},pKmL:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("ofXK"),r=n("tyNb"),s=n("4D4C"),o=n("fXoL");let a=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[r.e,i.b,s.a]]}),e})()},rnKy:function(e,t,n){"use strict";var i,r,s;"undefined"!=typeof window&&window,r=[n("KtZj")],void 0===(s="function"==typeof(i=function(e){var t=function(){var t,n={},i=[];function r(e){e||(e=document.documentElement);var t=window.getComputedStyle(e,null).fontSize;return parseFloat(t)||16}function s(e,t){var n=t.split(/\d/),i=n[n.length-1];switch(t=parseFloat(t),i){case"px":return t;case"em":return t*r(e);case"rem":return t*r();case"vw":return t*document.documentElement.clientWidth/100;case"vh":return t*document.documentElement.clientHeight/100;case"vmin":case"vmax":var s=document.documentElement.clientWidth/100,o=document.documentElement.clientHeight/100;return t*(0,Math["vmin"===i?"min":"max"])(s,o);default:return t}}function o(e,t){var i,r,o,a,l,d,c,u;this.element=e;var h=["min-width","min-height","max-width","max-height"];this.call=function(){for(i in o=function(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}(this.element),d={},n[t])n[t].hasOwnProperty(i)&&(a=s(this.element,(r=n[t][i]).value),l="width"===r.property?o.width:o.height,c="","min"===r.mode&&l>=a&&(c+=r.value),"max"===r.mode&&l<=a&&(c+=r.value),d[u=r.mode+"-"+r.property]||(d[u]=""),c&&-1===(" "+d[u]+" ").indexOf(" "+c+" ")&&(d[u]+=" "+c));for(var e in h)h.hasOwnProperty(e)&&(d[h[e]]?this.element.setAttribute(h[e],d[h[e]].substr(1)):this.element.removeAttribute(h[e]))}}function a(t,n){t.elementQueriesSetupInformation||(t.elementQueriesSetupInformation=new o(t,n)),t.elementQueriesSensor||(t.elementQueriesSensor=new e(t,function(){t.elementQueriesSetupInformation.call()}))}function l(e,r,s,o){if(void 0===n[e]){n[e]=[];var a=i.length;t.innerHTML+="\n"+e+" {animation: 0.1s element-queries;}",t.innerHTML+="\n"+e+" > .resize-sensor {min-width: "+a+"px;}",i.push(e)}n[e].push({mode:r,property:s,value:o})}function d(e){var t;if(document.querySelectorAll&&(t=e?e.querySelectorAll.bind(e):document.querySelectorAll.bind(document)),t||"undefined"==typeof $$||(t=$$),t||"undefined"==typeof jQuery||(t=jQuery),!t)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";return t}function c(t){var n=[],i=[],r=[],s=0,o=-1,a=[];for(var l in t.children)if(t.children.hasOwnProperty(l)&&t.children[l].tagName&&"img"===t.children[l].tagName.toLowerCase()){n.push(t.children[l]);var d=t.children[l].getAttribute("min-width")||t.children[l].getAttribute("data-min-width"),c=t.children[l].getAttribute("data-src")||t.children[l].getAttribute("url");r.push(c),i.push({minWidth:d}),d?t.children[l].style.display="none":(s=n.length-1,t.children[l].style.display="block")}function u(){var e,l=!1;for(e in n)n.hasOwnProperty(e)&&i[e].minWidth&&t.offsetWidth>i[e].minWidth&&(l=e);if(l||(l=s),o!==l)if(a[l])n[o].style.display="none",n[l].style.display="block",o=l;else{var d=new Image;d.onload=function(){n[l].src=r[l],n[o].style.display="none",n[l].style.display="block",a[l]=!0,o=l},d.src=r[l]}else n[l].src=r[l]}o=s,t.resizeSensorInstance=new e(t,u),u()}var u=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/gim,h=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/gim;function f(e){var t,n,i,r;for(e=e.replace(/'/g,'"');null!==(t=u.exec(e));)for(n=t[1]+t[3],i=t[2];null!==(r=h.exec(i));)l(n,r[1],r[2],r[3])}function m(e){var t="";if(e)if("string"==typeof e)-1===(e=e.toLowerCase()).indexOf("min-width")&&-1===e.indexOf("max-width")||f(e);else for(var n=0,i=e.length;n<i;n++)1===e[n].type?-1!==(t=e[n].selectorText||e[n].cssText).indexOf("min-height")||-1!==t.indexOf("max-height")?f(t):-1===t.indexOf("min-width")&&-1===t.indexOf("max-width")||f(t):4===e[n].type?m(e[n].cssRules||e[n].rules):3===e[n].type&&e[n].styleSheet.hasOwnProperty("cssRules")&&m(e[n].styleSheet.cssRules)}var p=!1;this.init=function(){var n="animationstart";void 0!==document.documentElement.style.webkitAnimationName?n="webkitAnimationStart":void 0!==document.documentElement.style.MozAnimationName?n="mozanimationstart":void 0!==document.documentElement.style.OAnimationName&&(n="oanimationstart"),document.body.addEventListener(n,function(t){var n=t.target,r=n&&window.getComputedStyle(n,null),s=r&&r.getPropertyValue("animation-name");if(s&&-1!==s.indexOf("element-queries")){n.elementQueriesSensor=new e(n,function(){n.elementQueriesSetupInformation&&n.elementQueriesSetupInformation.call()});var o=window.getComputedStyle(n.resizeSensor,null).getPropertyValue("min-width");o=parseInt(o.replace("px","")),a(t.target,i[o])}}),p||((t=document.createElement("style")).type="text/css",t.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}",t.innerHTML+="\n@keyframes element-queries { 0% { visibility: inherit; } }",document.getElementsByTagName("head")[0].appendChild(t),p=!0);for(var r=0,s=document.styleSheets.length;r<s;r++)try{document.styleSheets[r].href&&0===document.styleSheets[r].href.indexOf("file://")&&console.warn("CssElementQueries: unable to parse local css files, "+document.styleSheets[r].href),m(document.styleSheets[r].cssRules||document.styleSheets[r].rules||document.styleSheets[r].cssText)}catch(o){}!function(){for(var e=d()("[data-responsive-image],[responsive-image]"),t=0,n=e.length;t<n;t++)c(e[t])}()},this.findElementQueriesElements=function(e){!function(e){var t=d(e);for(var i in n)if(n.hasOwnProperty(i))for(var r=t(i,e),s=0,o=r.length;s<o;s++)a(r[s],i)}(e)},this.update=function(){this.init()}};return t.update=function(){t.instance.update()},t.detach=function(e){e.elementQueriesSetupInformation?(e.elementQueriesSensor.detach(),delete e.elementQueriesSetupInformation,delete e.elementQueriesSensor):e.resizeSensorInstance&&(e.resizeSensorInstance.detach(),delete e.resizeSensorInstance)},t.init=function(){t.instance||(t.instance=new t),t.instance.init()},t.findElementQueriesElements=function(e){t.instance.findElementQueriesElements(e)},t.listen=function(){!function(e){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var t=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(e(),clearInterval(t))},10);else window.onload=e}(t.init)},t})?i.apply(t,r):i)||(e.exports=s)}}]);