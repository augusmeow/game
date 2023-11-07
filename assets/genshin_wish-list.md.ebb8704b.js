import{W as b}from"./chunks/wish.2ed607ad.js";import{C as g}from"./chunks/characters.e1493503.js";import{c as E}from"./chunks/utils.6e888d78.js";import{c as p,r as d,k as C}from"./chunks/utils.454c0124.js";import{_ as v,o as l,c as i,k as e,a as y,F as o,D as _,t as m,N as f,p as L,m as N,d as S,H as x}from"./chunks/framework.21d51add.js";const D=b.characters,W={name:"WishList",data(){return{wishChar:D}},methods:{sortLast(){this.wishChar=this.wishChar.sort((a,s)=>p(a.end,s.end))},sortEarly(){this.wishChar=this.wishChar.sort((a,s)=>p(s.end,a.end))},replaceImg(a){a.target.src="/image/genshin/characters/paimon_faq.png"},getCharAvatar(a){return E(d(a))},getCharNameZh(a){var s;return(s=g[d(a)])==null?void 0:s.name},getCharEle(a){var s;return(s=g[d(a)])==null?void 0:s.ele.id},getWishDate(a,s){return C(a)+" ~ "+C(s)}},async mounted(){this.sortEarly()}},u=a=>(L("data-v-f02ea88a"),a=a(),N(),a),A=u(()=>e("br",null,null,-1)),B=u(()=>e("br",null,null,-1)),H=u(()=>e("br",null,null,-1)),P={class:"wish-container"},V=["title"],Z={class:"outer-container"},j={class:"char-container"},F={class:"char-avatar",style:{backgroundColor:"#b47b48"}},R=["src","alt"],T={class:"char-name"},q={class:"wish-name"},z={class:"char-container"},G={class:"char-avatar",style:{backgroundColor:"#77609a"}},J=["src","alt"],O={class:"char-name"},U={class:"wish-name"};function K(a,s,w,Y,k,t){return l(),i(o,null,[A,e("a",{onClick:s[0]||(s[0]=(...r)=>t.sortLast&&t.sortLast(...r))},"最近排序"),y(" | "),e("a",{onClick:s[1]||(s[1]=(...r)=>t.sortEarly&&t.sortEarly(...r))},"最远排序"),B,H,(l(!0),i(o,null,_(k.wishChar,(r,I)=>(l(),i("div",{key:I},[e("div",P,[e("span",{class:"wish-version",title:t.getWishDate(r.start,r.end)},m(r.version),9,V),e("div",Z,[(l(!0),i(o,null,_(r.wish5star,(n,c)=>(l(),i("div",{key:c},[e("div",j,[e("div",F,[e("img",{src:t.getCharAvatar(n),alt:n,onError:s[2]||(s[2]=(...h)=>t.replaceImg&&t.replaceImg(...h))},null,40,R),e("div",{class:"ele-corner",style:f({backgroundImage:`url(/image/genshin/elements/${t.getCharEle(n)}.png)`})},null,4)]),e("div",T,[e("span",q,m(t.getCharNameZh(n)),1)])])]))),128)),(l(!0),i(o,null,_(r.wish4star,(n,c)=>(l(),i("div",{key:c},[e("div",z,[e("div",G,[e("img",{src:t.getCharAvatar(n),alt:n,onError:s[3]||(s[3]=(...h)=>t.replaceImg&&t.replaceImg(...h))},null,40,J),e("div",{class:"ele-corner",style:f({backgroundImage:`url(/image/genshin/elements/${t.getCharEle(n)}.png)`})},null,4)]),e("div",O,[e("span",U,m(t.getCharNameZh(n)),1)])])]))),128))])])]))),128))],64)}const M=v(W,[["render",K],["__scopeId","data-v-f02ea88a"]]),Q=e("h1",{id:"祈愿列表",tabindex:"-1"},[y("祈愿列表 "),e("a",{class:"header-anchor",href:"#祈愿列表","aria-label":'Permalink to "祈愿列表"'},"​")],-1),re=JSON.parse('{"title":"祈愿列表","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"genshin/wish-list.md","filePath":"genshin/wish-list.md","lastUpdated":1693213187000}'),X={name:"genshin/wish-list.md"},ne=S({...X,setup(a){return(s,w)=>(l(),i("div",null,[Q,x(M)]))}});export{re as __pageData,ne as default};