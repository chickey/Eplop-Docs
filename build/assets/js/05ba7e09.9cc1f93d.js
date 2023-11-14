"use strict";(self.webpackChunkinfo_eplop_co_uk=self.webpackChunkinfo_eplop_co_uk||[]).push([[1762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Overview",l={unversionedId:"RS485-WiFi/EPEver/overview",id:"RS485-WiFi/EPEver/overview",title:"Overview",description:"First off thank you for your purchase! the RS485 Wifi is an evolution of the previous adaptor with a different take with regards to the connectivity and posting data to logging platforms.  The manufacturers and models has also been expanded.",source:"@site/docs/RS485-WiFi/EPEver/overview.md",sourceDirName:"RS485-WiFi/EPEver",slug:"/RS485-WiFi/EPEver/overview",permalink:"/docs/RS485-WiFi/EPEver/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EPEVER",permalink:"/docs/category/epever"},next:{title:"Custom Firmware",permalink:"/docs/RS485-WiFi/EPEver/custom-firmware"}},s={},c=[{value:"Connecting",id:"connecting",level:2},{value:"Choosing a firmware",id:"choosing-a-firmware",level:2},{value:"My custom firmware",id:"my-custom-firmware",level:3},{value:"ESPHome",id:"esphome",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"First off thank you for your purchase! the RS485 Wifi is an evolution of the previous adaptor with a different take with regards to the connectivity and posting data to logging platforms.  The manufacturers and models has also been expanded."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"}," Supported Manufacturers "))),(0,o.kt)("p",null,"EPEver"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Charge Controllers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upower Inverters"))),(0,o.kt)("h2",{id:"connecting"},"Connecting"),(0,o.kt)("p",null,"You shall need to use a standard RJ45 network cable, make sure it\u2019s not a crossover."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connecting",src:r(191).Z,width:"1600",height:"1200"})),(0,o.kt)("h2",{id:"choosing-a-firmware"},"Choosing a firmware"),(0,o.kt)("p",null,"There are currently two options regarding firmware which can be used."),(0,o.kt)("h3",{id:"my-custom-firmware"},"My custom firmware"),(0,o.kt)("p",null,"  This is a peace of software designed by eplop which has built in wifi configuration as well as allowing you to push the data to a MQTT server as well as an influxDB.  The software also natively integrates with Home Assistant."),(0,o.kt)("h3",{id:"esphome"},"ESPHome"),(0,o.kt)("p",null,"  This will require one slight modification to the hardware but is a great way to connect."))}f.isMDXComponent=!0},191:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/IMG_2989-2a946c3d072d1e943177b9fa8a4c2c62.jpeg"}}]);