import{d as C,f as p,p as y}from"./utils-9fd45833.js";import{W as T}from"./wish-39e7899b.js";import{C as f}from"./characters-46a86da3.js";import"./zh-50a96649.js";import{_ as S,p as i,q as c,R as d,Q as s,t as v,Z as R,ac as B,O as _,P as L,v as h,w as H,aa as O,ab as z,c as Z,N as P,z as W}from"./framework-caf2ffc0.js";C.locale("zh");const g=(a,t,e)=>{a.start=a.start.replace(/-/g,"/"),a.end=a.end.replace(/-/g,"/");let l=y(a.start).subtract(0,"minute"),n=y(a.end).subtract(0,"minute");const o=C().diff(n,"day",!0),r=C().diff(l,"day",!0);return{...a,index:t,index2:e,start:l,end:n,durationEnd2Today:o,durationStart2Today:r}},q=()=>{let a=[];return a[0]=T.characters,a[1]=T.weapons,{events:a.map((e,l)=>Array.isArray(e)?e.map((n,o)=>g(n,l,o)):g(e,l,l))}},G={1:"首次出场",2:"首次复刻",3:"二次复刻",4:"三次复刻",5:"四次复刻",6:"五次复刻",7:"六次复刻"},E=q().events;let m=E[0],w=m.filter((a,t,e)=>a.durationEnd2Today>0);const k=m.filter((a,t,e)=>a.durationStart2Today<0),x=m.filter((a,t,e)=>a.durationEnd2Today<0&&a.durationStart2Today>0),I=[...new Set(w.map(a=>a.wish5star))],F=[...new Set(k.map(a=>a.wish5star))],D=[...new Set(x.map(a=>a.wish5star))];[...new Set(k.map(a=>a.index2))];[...new Set(x.map(a=>a.index2))];const K=I.map(a=>f[a].name);[...new Set([...F,...D])];const Q=w.map(a=>({name:a.wish5star,times:a.image,start:p(a.start),end:p(a.end),durationEnd2Today:a.durationEnd2Today,durationStart2Today:a.durationStart2Today})),U=()=>{let a=new Map;for(let t of I)a.set(t,Q.filter(e=>e.name===t));return a};U();const b=a=>"/image/genshin/characters/"+a+".png",A=a=>D.indexOf(a)!=-1,M=a=>F.indexOf(a)!=-1,N=a=>f[a].event_exclusive,J=(a,t)=>{let e="距今"+parseInt(a)+"天";return A(t)&&(e="当前祈愿进行时"),M(t)&&(e="很快就来了"),N(t)||(e+=" 但是是常驻"),e},X=a=>{let t="";return A(a)&&(t="fork-current"),M(a)&&(t="fork-future"),N(a)||(t="always-here"),t},Y=new Map(m.map(a=>[f[a.wish5star].name,{src:b(f[a.wish5star].id),times:a.image,start:p(a.start),end:p(a.end),durationEnd2Today:a.durationEnd2Today,durationStart2Today:a.durationStart2Today,sortTag:a.durationEnd2Today,info:J(a.durationEnd2Today,a.wish5star),color:X(a.wish5star)}])),$={name:"Fork",data(){return{EVENT:E,FORK_DESCRIBE:G,sliceCharZH:K,allLastChar:Y,selectedLastChar:"",selectedFork:""}},methods:{sortLast(){this.allLastChar=new Map(Array.from(this.allLastChar).sort((a,t)=>a[1].sortTag-t[1].sortTag))},sortEarly(){this.allLastChar=new Map(Array.from(this.allLastChar).sort((a,t)=>t[1].sortTag-a[1].sortTag))}},async mounted(){this.selectedFork="",this.selectedLastChar="",this.sortEarly()}},u=a=>(O("data-v-f118de4a"),a=a(),z(),a),j=u(()=>s("br",null,null,-1)),aa=u(()=>s("br",null,null,-1)),ta=u(()=>s("option",{disabled:"",value:""},"选择角色",-1)),sa={key:0,class:"choose"},ea={class:"underline"},ra=u(()=>s("br",null,null,-1)),na=u(()=>s("hr",null,null,-1)),oa=["src"],la={class:"underline"},da=u(()=>s("br",null,null,-1));function ia(a,t,e,l,n,o){return i(),c(_,null,[d(" <h2>最近出场角色 情报</h2> "),d(" todo 点击角色 再展示 曾经出场的 时间段 "),s("a",{onClick:t[0]||(t[0]=(...r)=>o.sortLast&&o.sortLast(...r))},"最近排序"),v(" | "),s("a",{onClick:t[1]||(t[1]=(...r)=>o.sortEarly&&o.sortEarly(...r))},"最远排序"),j,aa,R(s("select",{"onUpdate:modelValue":t[2]||(t[2]=r=>n.selectedLastChar=r)},[ta,(i(!0),c(_,null,L(n.sliceCharZH,(r,V)=>(i(),c("option",null,h(r),1))),256))],512),[[B,n.selectedLastChar]]),n.selectedLastChar?(i(),c("p",sa,[s("strong",null,h(n.selectedLastChar+" "),1),d(` <br>
    出场时间: <span class="date">{{ allLastChar.get(selectedLastChar).start }}</span>
    <br>
    结束时间: <span class="date">{{ allLastChar.get(selectedLastChar).end }}</span>
    <br>
    <span class="underline" v-if="allLastChar.get(selectedLastChar).durationStart2Today < 0">
      {{ -parseInt(allLastChar.get(selectedLastChar).durationStart2Today) }} 天后出场
    </span> `),s("span",ea,[d(' <span v-if="allLastChar.get(selectedLastChar).durationEnd2Today < 0">当期祈愿进行时</span> '),s("span",null,"距今 "+h(parseInt(n.allLastChar.get(n.selectedLastChar).sortTag))+" 天",1)]),ra])):d("v-if",!0),na,(i(!0),c(_,null,L(n.allLastChar,(r,V)=>(i(),c("p",{class:H(r[1].color)},[s("img",{class:"char-img",src:r[1].src},null,8,oa),s("strong",null,h(r[0]+" "),1),d(" <br> "),d(` 出场时间: <span class="date">{{ v[1].start }}</span>
    <br>
    结束时间: <span class="date">{{ v[1].end }}</span>
    <br> `),s("span",la,[s("span",null,h(r[1].info),1)]),da],2))),256))],64)}const ca=S($,[["render",ia],["__scopeId","data-v-f118de4a"],["__file","Fork.vue"]]),ua=s("h1",{id:"复刻祈愿",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#复刻祈愿","aria-hidden":"true"},"#"),v(" 复刻祈愿")],-1),ha=Z({__name:"fork.html",setup(a){return(t,e)=>(i(),c("div",null,[ua,P(W(ca))]))}}),ya=S(ha,[["__file","fork.html.vue"]]);export{ya as default};