(self.webpackChunkdocu_tutorial=self.webpackChunkdocu_tutorial||[]).push([[61],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=i(r),m=n,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?o.createElement(b,l(l({ref:t},p),{},{components:r})):o.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9842:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),l={slug:"welcome",title:"Welcome",author:"Yangshun Tay",author_title:"Front End Engineer @ Facebook",author_url:"https://github.com/yangshun",author_image_url:"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4",tags:["facebook","hello","docusaurus"]},u={permalink:"/docu-tutorial/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-30-welcome.md",source:"@site/blog/2019-05-30-welcome.md",title:"Welcome",description:"Blog features are powered by the blog plugin. Simply add files to the blog directory. It supports tags as well!",date:"2019-05-30T00:00:00.000Z",formattedDate:"May 30, 2019",tags:[{label:"facebook",permalink:"/docu-tutorial/blog/tags/facebook"},{label:"hello",permalink:"/docu-tutorial/blog/tags/hello"},{label:"docusaurus",permalink:"/docu-tutorial/blog/tags/docusaurus"}],readingTime:.175,truncated:!1,nextItem:{title:"Hello",permalink:"/docu-tutorial/blog/hello-world"}},c=[],i={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Blog features are powered by the blog plugin. Simply add files to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory. It supports tags as well!"),(0,a.kt)("p",null,"Delete the whole directory if you don't want the blog features. As simple as that!"))}p.isMDXComponent=!0}}]);