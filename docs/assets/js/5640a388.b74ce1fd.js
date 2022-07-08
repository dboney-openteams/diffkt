"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6989],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(d,o(o({ref:t},f),{},{components:n})):r.createElement(d,o({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"shapekt",title:"ShapeKt",slug:"/framework/shapekt"},p=void 0,c={unversionedId:"framework/shapekt/shapekt",id:"framework/shapekt/shapekt",title:"ShapeKt",description:"ShapeKt is an extensible Kotlin compiler plugin for ahead-of-time tensor (multi-dimensional) arrays shape verification and inspection. Commonly used in machine learning, tensors are often fed through many different operations; each operation often has different shape requirements and produces a new tensor with a possibly different shape. ShapeKt provides a system to describe and enforce shape requirements and output shapes.",source:"@site/docs/framework/shapekt/shapekt.md",sourceDirName:"framework/shapekt",slug:"/framework/shapekt",permalink:"/docs/framework/shapekt",draft:!1,tags:[],version:"current",frontMatter:{id:"shapekt",title:"ShapeKt",slug:"/framework/shapekt"},sidebar:"diffktSidebar",previous:{title:"Just In Time Optimization",permalink:"/docs/framework/jit"},next:{title:"Introduction to Basic API Operations for DiffKt",permalink:"/docs/tutorials/api/intro_to_diff_prog"}},f={},l=[],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ShapeKt is an extensible Kotlin compiler plugin for ahead-of-time tensor (multi-dimensional) arrays shape verification and inspection. Commonly used in machine learning, tensors are often fed through many different operations; each operation often has different shape requirements and produces a new tensor with a possibly different shape. ShapeKt provides a system to describe and enforce shape requirements and output shapes."),(0,i.kt)("p",null,"With the ShapeKt IntelliJ IDE plugin, users can inspect tensor shapes and see tensor shape errors while in active development."),(0,i.kt)("p",null,"ShapeKt is currently experimental. There is an early integration with DiffKt, a differentiable programming framework in Kotlin."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Open ShapeKt in Github")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/shapekt"},"ShapeKt")))))}m.isMDXComponent=!0}}]);