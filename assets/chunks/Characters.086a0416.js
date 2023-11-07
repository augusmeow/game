import{_ as v,o as i,b,w,c as r,k as e,r as y,a as u,e as _,T as F,C as N,n as M,t as c,H as P,a4 as E,F as h,D as f,p as I,m as S}from"./framework.21d51add.js";import{r as j,l as x,o as g}from"./utils.454c0124.js";const L={props:{show:Boolean}},$={key:0,class:"modal-mask"},G={class:"modal-wrapper"},T={class:"modal-container"},A={class:"modal-header"},B={class:"modal-body"},V={class:"modal-footer"};function W(o,n,a,k,s,l){return i(),b(F,{name:"modal"},{default:w(()=>[a.show?(i(),r("div",$,[e("div",G,[e("div",T,[e("div",A,[y(o.$slots,"header",{},()=>[u("default header")])]),e("div",B,[y(o.$slots,"body",{},()=>[u("default body")])]),e("div",V,[y(o.$slots,"footer",{},()=>[u(" default footer ")]),e("button",{class:"modal-default-button",onClick:n[0]||(n[0]=p=>o.$emit("close"))},"OK ")])])])])):_("",!0)]),_:3})}const D=v(L,[["render",W]]);const q={props:{info:{type:Object,default:()=>{}},game:null},components:{Modal:D},data(){return{showModal:!1,replaceAndLow:j,gameName:x(this.game)}},methods:{replaceImg(o){o.target.src="/image/genshin/characters/paimon_faq.png"}}},z=["src"],H={class:"character-ele"},K=["src"],J={key:0,class:"character-weapon"},Q=["src"],R={class:"character-name"},U={class:"slot-char-name"},X={class:"img-half"},Y=["src"],Z=e("span",null,"todo",-1);function ee(o,n,a,k,s,l){const p=N("modal");return i(),r(h,null,[e("div",{class:"character",id:"show-modal",onClick:n[1]||(n[1]=t=>s.showModal=!0)},[e("div",{class:M(["character-img",a.info.star==5?"bg-5-star":"bg-4-star",a.game?"char-img2":"char-img1"])},[e("img",{src:`/image/${s.gameName}/characters/${s.replaceAndLow(a.info.id)}.png`,"object-fit:":"",contain:"",onError:n[0]||(n[0]=(...t)=>l.replaceImg&&l.replaceImg(...t))},null,40,z)],2),e("div",H,[e("img",{src:`/image/${s.gameName}/elements/${s.replaceAndLow(a.info.ele.id)}.png`,alt:"{{1}}"},null,8,K)]),a.game?(i(),r("div",J,[e("img",{src:`/image/${s.gameName}/elements/${a.info.weapon.id.replace("The ","").toLowerCase()}.png`,alt:"{{1}}"},null,8,Q)])):_("",!0),e("div",R,c(a.info.name),1)]),(i(),b(E,{to:"body"},[P(p,{show:s.showModal,onClose:n[3]||(n[3]=t=>s.showModal=!1)},{header:w(()=>[e("span",U,c(`${a.info.prefix} · ${a.info.name}（${a.info.ele.name}）`),1)]),body:w(()=>[e("div",X,[e("img",{src:`/image/${s.gameName}/characters/half/${s.replaceAndLow(a.info.id)}.png`,onError:n[2]||(n[2]=(...t)=>l.replaceImg&&l.replaceImg(...t))},null,40,Y)]),e("span",null,c(a.info.intro),1)]),footer:w(()=>[Z]),_:1},8,["show"])]))],64)}const te=v(q,[["render",ee]]);const se={name:"Characters",components:{CharModal:te},data(){return{info:this.Character,elementStr:this.Element,city:this.City,weapon:this.Weapon,showModal:!1,star:[4,5],lenChar:this.Character?Object.getOwnPropertyNames(this.Character).length:0,lenFilterChar:this.Character?Object.getOwnPropertyNames(this.Character).length:0,replaceAndLow:j,gameName:x(this.Game),protagonist:this.Game?"开拓者":"旅行者"}},props:{Character:Object,City:Object,Element:Object,Weapon:Object,Game:0},async mounted(){},methods:{filterEle(o){this.info=g(this.Character,n=>n.ele.id==o),this.lenFilterChar=Object.getOwnPropertyNames(this.info).length},filterWeapon(o){this.info=g(this.Character,n=>n.weapon.id==o),this.lenFilterChar=Object.getOwnPropertyNames(this.info).length},filterCity(o){this.info=g(this.Character,n=>n.city.id==o),this.lenFilterChar=Object.getOwnPropertyNames(this.info).length},filterStar(o){this.info=g(this.Character,n=>n.star==o),this.lenFilterChar=Object.getOwnPropertyNames(this.info).length},filterExclusive(o){this.info=g(this.Character,n=>n.event_exclusive==o),this.lenFilterChar=Object.getOwnPropertyNames(this.info).length},all(){this.info=this.Character,this.lenFilterChar=Object.getOwnPropertyNames(this.info).length}}},m=o=>(I("data-v-ba2482ff"),o=o(),S(),o),ne=m(()=>e("br",null,null,-1)),oe={class:"filter-container"},ie=m(()=>e("div",{class:"filter-title"}," 稀有度 ",-1)),ae={class:"filter-info"},re=["onClick"],le={class:"filter-container"},ce=m(()=>e("div",{class:"filter-title"}," 世界",-1)),he={class:"filter-info"},de=["onClick"],_e={key:0},me={class:"filter-container"},fe=m(()=>e("div",{class:"filter-title"}," 元素",-1)),ge={class:"filter-info"},ue={class:"genshin-element"},pe=["onClick"],Ce=["src","alt"],we={class:"filter-container"},ye=m(()=>e("div",{class:"filter-title"}," 战斗",-1)),ve={class:"filter-info"},be=["onClick"],ke={key:0},Oe=["src"],Ne={key:0},je=m(()=>e("br",null,null,-1)),xe={key:0},Fe={class:"character-info"};function Me(o,n,a,k,s,l){const p=N("CharModal");return i(),r(h,null,[ne,e("div",oe,[ie,e("div",ae,[(i(!0),r(h,null,f(s.star,(t,C)=>(i(),r("span",null,[e("a",{onClick:d=>l.filterStar(t)},c(t+"🌟"),9,re)]))),256)),e("a",{onClick:n[0]||(n[0]=t=>l.filterExclusive(1))},c("限定"))])]),e("div",le,[ce,e("div",he,[(i(!0),r(h,null,f(s.city,(t,C,d)=>(i(),r("span",null,[e("a",{onClick:O=>l.filterCity(t.id)},c(t.name),9,de),d!==Object.getOwnPropertyNames(s.city).length-1?(i(),r("span",_e,c(" · "))):_("",!0)]))),256))])]),e("div",me,[fe,e("div",ge,[e("div",ue,[(i(!0),r(h,null,f(s.elementStr,(t,C,d)=>(i(),r("div",null,[e("a",{onClick:O=>l.filterEle(t.id)},[e("img",{src:`/image/${s.gameName}/elements/${s.replaceAndLow(t.id)}.png`,alt:t.id,width:25},null,8,Ce)],8,pe)]))),256))])])]),e("div",we,[ye,e("div",ve,[(i(!0),r(h,null,f(s.weapon,(t,C,d)=>(i(),r("span",null,[e("a",{onClick:O=>l.filterWeapon(t.id)},[a.Game?(i(),r("span",ke,[e("img",{src:`/image/${s.gameName}/elements/${t.id.replace("The ","").toLowerCase()}.png`,width:30,alt:"{{1}}"},null,8,Oe)])):_("",!0),u(" "+c(t.name),1)],8,be),d!==Object.getOwnPropertyNames(s.weapon).length-1?(i(),r("span",Ne,c(" · "))):_("",!0)]))),256))])]),e("h3",null,[e("a",{onClick:n[1]||(n[1]=(...t)=>l.all&&l.all(...t))}," 全部角色 ")]),e("span",null," 当前共计收录 "+c(s.lenChar)+" 名角色(不包含"+c(s.protagonist)+")",1),u(),je,s.lenChar!==s.lenFilterChar?(i(),r("span",xe," 筛选了 "+c(s.lenFilterChar)+" 名角色",1)):_("",!0),e("div",Fe,[(i(!0),r(h,null,f(s.info,(t,C,d)=>(i(),b(p,{info:{name:t.name,prefix:t.prefix,id:t.id,intro:t.intro,star:t.star,ele:t.ele,weapon:t.weapon},game:a.Game},null,8,["info","game"]))),256))])],64)}const Ie=v(se,[["render",Me],["__scopeId","data-v-ba2482ff"]]);export{Ie as C};