import{d as v,l as R,j as N,m as S,p as y}from"./utils.454c0124.js";import{p as E}from"./wishInfo.7267b5fd.js";import"./zh.e51bc494.js";import{_ as C,o as c,c as d,k as t,a as L,F as f,D as p,N as u,t as h,n as g,p as H,m as I,r as k}from"./framework.21d51add.js";v.locale("zh");const P={denro:"#98e628",geo:"#e2b032",electro:"#d296fc",hydro:"#03ddfe",pyro:"#fa5d3e",anemo:"#57dcb0",cryo:"#84c2e6"},D=40,O={name:"GenshinTimeline",data(){return{monthList:[],dates:[],DUR_DAY_WIDTH:D,todayOffset:null,currentTime:new Date,durationCharacter:[],durationWeapon:[],wishCharacters:[],wishWeapons:[],colorMap:P,homeActions:[],homeTagline:"",gameName:R(this.WISH_TEXT),gameNum:this.WISH_TEXT,combineWishPic:N,replaceText:S}},props:{WISH:{type:Object,required:!0},CHARACTER:{type:Object,required:!0},WISH_TEXT:{type:Number,required:!0,default:0}},components:{},computed:{},mounted(){const s=E(this.WISH),r=v(),n=s.firstDay;this.wishCharacters=s.events[0],this.wishWeapons=s.events[1];const l=this.wishCharacters.length,e=this.wishWeapons.length;this.dates=s.dates,this.monthList=s.monthList,this.todayOffset=Math.abs(n.diff(r,"day",!0)),this.todayOffset=(this.todayOffset+1)*(D+1)+"px";const a=n;for(let o=0;o<l;++o){const _=y(this.wishCharacters[o].start).subtract(0,"minute");this.durationCharacter.push(_.diff(a,"day",!0))}for(let o=0;o<e;++o){const _=y(this.wishWeapons[o].start).subtract(0,"minute");this.durationWeapon.push(_.diff(a,"day",!0))}let i=this;this.timer1=setInterval(()=>{i.currentTime=v().format("HH:mm:ss")},1e3),this.$nextTick(()=>{this.$refs.setNowPos.scrollLeft=this.$refs.findNowPos.offsetLeft-document.body.clientWidth/2})},methods:{setCurrentPos(){this.$refs.setNowPos.scrollLeft=this.$refs.findNowPos.offsetLeft-document.body.clientWidth/2},diffWishStyle(s,r){return s==r?0:y(r).subtract(0,"minute").diff(y(s).subtract(0,"minute"),"hour",!0)<1?1:-1},getBorderRadius(s,r){const n=s.length;if(!n)return"";let l="";if(r===0)l+="rounded-l-xl ";else if(r===n-1)l+="rounded-r-xl ";else{let e=this.diffWishStyle(s[r].end,s[r+1].start);e===1?l+="border-r-4 border-white ":e===-1&&(l+="rounded-r-xl ");let a=this.diffWishStyle(s[r-1].end,s[r].start);a===1?l+="border-r-4 border-white ":a===-1&&(l+="rounded-l-xl ")}return l.includes("rounded-r-xl")&&(l=l.replace("border-r-4 border-white ","")),l},replaceImg(s){s.target.src=`/image/${this.gameName}/wish/_1.jpg`}},beforeDestroy(){this.timer1&&clearInterval(this.timer1)}},B=s=>(H("data-v-5610a4bc"),s=s(),I(),s),U={class:"hide-on-small-only"},Y={style:{textAlign:"center"}},z={class:"timeline-scroll-x",ref:"setNowPos"},q={class:"timeline-month"},X={class:"timeline-month-text"},F={class:"timeline-day"},G={class:"timeline-today-line-pos-text"},M={class:"timeline-wish-event-weapon"},V={class:"event-img"},j=["src"],J={class:"left-align timeline-character-text sticky text-shadow-weapon"},K={class:"timeline-wish-event-character"},Q={class:"event-img responsive-img lazy"},Z=["src"],$={class:"timeline-day-index"},ee={class:"timeline-week-index"},te=B(()=>t("div",{class:"hide-on-large-only"},null,-1));function se(s,r,n,l,e,a){return c(),d(f,null,[t("div",U,[t("p",Y,[L(" 也许有未实装、未确定的虚假信息 "),t("a",{onClick:r[0]||(r[0]=i=>a.setCurrentPos())},"回到当前时间")]),t("div",z,[t("div",q,[(c(!0),d(f,null,p(e.monthList,(i,o)=>(c(),d("div",null,[t("div",{style:u({width:(e.DUR_DAY_WIDTH+1)*i[1].total+"px"})},[t("span",X,h(i[0]),1)],4)]))),256))]),t("div",F,[t("div",{style:u(e.todayOffset?{left:e.todayOffset}:""),class:"timeline-today-line-pos",ref:"findNowPos"},[t("div",G,h(e.currentTime),1)],4),t("div",M,[(c(!0),d(f,null,p(n.WISH.weapons,(i,o)=>{var _;return c(),d("div",{class:g(["card event-item weapon",[a.getBorderRadius(e.wishWeapons,o)]]),style:u({width:((_=e.wishWeapons[o])==null?void 0:_.duration)*(e.DUR_DAY_WIDTH+1)+"px",left:(e.durationWeapon[o]+1)*(e.DUR_DAY_WIDTH+1)+"px",height:"var(--event-height)"})},[t("div",{class:g(["card-image waves-effect waves-block waves-light",[a.getBorderRadius(e.wishWeapons,o)]]),style:{height:"100%"}},[t("div",V,[t("img",{src:`/image/${e.gameName}/wish/${e.combineWishPic(i.name,i.image)}`,onError:r[1]||(r[1]=(...m)=>a.replaceImg&&a.replaceImg(...m)),alt:""},null,40,j)]),t("span",J,h(e.replaceText("",e.gameNum,1)),1)],2)],6)}),256))]),t("div",K,[(c(!0),d(f,null,p(n.WISH.characters,(i,o)=>(c(),d("div",null,[(c(!0),d(f,null,p(i.name,(_,m)=>{var w,x,T,W,b;return c(),d("div",null,[t("div",{class:g(["card event-item",["ele-"+((x=(w=n.CHARACTER[i.wish5star[m]])==null?void 0:w.ele)==null?void 0:x.id),a.getBorderRadius(e.wishCharacters,o)]]),style:u({width:((T=e.wishCharacters[o])==null?void 0:T.duration)*(e.DUR_DAY_WIDTH+1)+"px",left:(e.durationCharacter[o]+1)*(e.DUR_DAY_WIDTH+1)+"px",marginTop:m?"68px":""})},[t("div",{class:g(["card-image waves-effect waves-block waves-light",[a.getBorderRadius(e.wishCharacters,o)]]),style:{height:"100%"}},[t("div",Q,[t("img",{src:`/image/${e.gameName}/wish/${e.combineWishPic(i.name[m],i.image[m])}`,onError:r[2]||(r[2]=(...A)=>a.replaceImg&&a.replaceImg(...A)),alt:""},null,40,Z)]),t("span",{class:g(["left-align timeline-character-text sticky","ele-text-shadow-"+((b=(W=n.CHARACTER[i.wish5star[m]])==null?void 0:W.ele)==null?void 0:b.id)])},h(i.wishName[m])+" "+h(e.replaceText("活动x",e.gameNum))+" 「"+h(n.CHARACTER[i.wish5star[m]].prefix)+"」 "+h(n.CHARACTER[i.wish5star[m]].name),3)],2)],6)])}),256))]))),256))]),(c(!0),d(f,null,p(e.dates,(i,o)=>(c(),d("div",{style:u({marginLeft:e.DUR_DAY_WIDTH}),class:"timeline-wrapper"},[t("span",$,h(i[0]),1),t("span",ee,h(i[1]),1)],4))),256))])],512)]),te],64)}const fe=C(O,[["render",se],["__scopeId","data-v-5610a4bc"]]);const ie={data(){return{}},props:{style:Object,name:"",text:"",tagline:"",textColor:""},components:{}},re=s=>(H("data-v-4499daee"),s=s(),I(),s),ne={class:"container"},oe=re(()=>t("div",{class:"background"},null,-1)),ae={class:"title"},le={class:"sub-title"},ce={class:"section-b"};function de(s,r,n,l,e,a){return c(),d("div",ne,[t("div",{class:"section-a",style:u(n.style)},[oe,t("div",ae,h(n.name),1),t("div",le,h(n.text),1),t("div",{class:"tagline",style:u({color:n.textColor})},h(n.tagline),5)],4),t("div",ce,[k(s.$slots,"default",{},void 0,!0)])])}const pe=C(ie,[["render",de],["__scopeId","data-v-4499daee"]]);export{pe as A,fe as T};
