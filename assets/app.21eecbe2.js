import{d as u,o as d,b as f,l as m,u as c,a6 as o,s as r,a7 as _,a8 as g,a9 as h,aa as y,ab as A,ac as v,ad as C,ae as P,af as w,ag as b,W as R,j as E,y as S,ah as j,ai as x,aj as D}from"./chunks/framework.21d51add.js";import{_ as L,t as p}from"./chunks/theme.d752df1f.js";const T=u({__name:"AsideSponsors",setup(e){const a=[{items:[{img:"/image/alipay.png"}]},{items:[{img:"/image/wechatpay.png"}]}];return(t,n)=>(d(),f(m(L),{data:a}))}});const O={...p,Layout:()=>{var t;const e={},{frontmatter:a}=c();return(t=a.value)!=null&&t.layoutClass&&(e.class=a.value.layoutClass),o(p.Layout,e,{"aside-bottom":()=>o(T)})}};function l(e){if(e.extends){const a=l(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=l(O),$=u({name:"VitePressApp",setup(){const{site:e}=c();return E(()=>{S(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),j(),x(),D(),s.setup&&s.setup(),()=>o(s.Layout)}});async function B(){const e=V(),a=F();a.provide(g,e);const t=h(e.route);return a.provide(y,t),a.component("Content",A),a.component("ClientOnly",v),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function F(){return P($)}function V(){let e=r,a;return w(t=>{let n=b(t),i=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),i=R(()=>import(n),[])),r&&(e=!1),i},s.NotFound)}r&&B().then(({app:e,router:a,data:t})=>{a.go().then(()=>{_(a.route,t.site),e.mount("#app")})});export{B as createApp};
