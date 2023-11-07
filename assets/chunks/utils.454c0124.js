var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G={exports:{}};(function(e,u){(function(c,h){e.exports=h()})(nt,function(){var c=1e3,h=6e4,p=36e5,O="millisecond",b="second",Y="minute",T="hour",w="day",F="week",v="month",J="quarter",S="year",H="date",Z="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var r=["th","st","nd","rd"],t=a%100;return"["+a+(r[(t-20)%10]||r[t]||r[0])+"]"}},N=function(a,r,t){var s=String(a);return!s||s.length>=r?a:""+Array(r+1-s.length).join(t)+a},et={s:N,z:function(a){var r=-a.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+N(s,2,"0")+":"+N(n,2,"0")},m:function a(r,t){if(r.date()<t.date())return-a(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(s,v),i=t-n<0,o=r.clone().add(s+(i?-1:1),v);return+(-(s+(t-n)/(i?n-o:o-n))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:v,y:S,w:F,d:w,D:H,h:T,m:Y,s:b,ms:O,Q:J}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},A="en",k={};k[A]=tt;var V="$isDayjsObject",U=function(a){return a instanceof z||!(!a||!a[V])},P=function a(r,t,s){var n;if(!r)return A;if(typeof r=="string"){var i=r.toLowerCase();k[i]&&(n=i),t&&(k[i]=t,n=i);var o=r.split("-");if(!n&&o.length>1)return a(o[0])}else{var l=r.name;k[l]=r,n=l}return!s&&n&&(A=n),n||!s&&A},$=function(a,r){if(U(a))return a.clone();var t=typeof r=="object"?r:{};return t.date=a,t.args=arguments,new z(t)},f=et;f.l=P,f.i=U,f.w=function(a,r){return $(a,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var z=function(){function a(t){this.$L=P(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[V]=!0}var r=a.prototype;return r.parse=function(t){this.$d=function(s){var n=s.date,i=s.utc;if(n===null)return new Date(NaN);if(f.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var o=n.match(K);if(o){var l=o[2]-1||0,d=(o[7]||"0").substring(0,3);return i?new Date(Date.UTC(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,d)):new Date(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,d)}}return new Date(n)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return f},r.isValid=function(){return this.$d.toString()!==Z},r.isSame=function(t,s){var n=$(t);return this.startOf(s)<=n&&n<=this.endOf(s)},r.isAfter=function(t,s){return $(t)<this.startOf(s)},r.isBefore=function(t,s){return this.endOf(s)<$(t)},r.$g=function(t,s,n){return f.u(t)?this[s]:this.set(n,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,s){var n=this,i=!!f.u(s)||s,o=f.p(t),l=function(j,y){var _=f.w(n.$u?Date.UTC(n.$y,y,j):new Date(n.$y,y,j),n);return i?_:_.endOf(w)},d=function(j,y){return f.w(n.toDate()[j].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(y)),n)},m=this.$W,g=this.$M,M=this.$D,C="set"+(this.$u?"UTC":"");switch(o){case S:return i?l(1,0):l(31,11);case v:return i?l(1,g):l(0,g+1);case F:var x=this.$locale().weekStart||0,L=(m<x?m+7:m)-x;return l(i?M-L:M+(6-L),g);case w:case H:return d(C+"Hours",0);case T:return d(C+"Minutes",1);case Y:return d(C+"Seconds",2);case b:return d(C+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,s){var n,i=f.p(t),o="set"+(this.$u?"UTC":""),l=(n={},n[w]=o+"Date",n[H]=o+"Date",n[v]=o+"Month",n[S]=o+"FullYear",n[T]=o+"Hours",n[Y]=o+"Minutes",n[b]=o+"Seconds",n[O]=o+"Milliseconds",n)[i],d=i===w?this.$D+(s-this.$W):s;if(i===v||i===S){var m=this.clone().set(H,1);m.$d[l](d),m.init(),this.$d=m.set(H,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l](d);return this.init(),this},r.set=function(t,s){return this.clone().$set(t,s)},r.get=function(t){return this[f.p(t)]()},r.add=function(t,s){var n,i=this;t=Number(t);var o=f.p(s),l=function(g){var M=$(i);return f.w(M.date(M.date()+Math.round(g*t)),i)};if(o===v)return this.set(v,this.$M+t);if(o===S)return this.set(S,this.$y+t);if(o===w)return l(1);if(o===F)return l(7);var d=(n={},n[Y]=h,n[T]=p,n[b]=c,n)[o]||1,m=this.$d.getTime()+t*d;return f.w(m,this)},r.subtract=function(t,s){return this.add(-1*t,s)},r.format=function(t){var s=this,n=this.$locale();if(!this.isValid())return n.invalidDate||Z;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=f.z(this),l=this.$H,d=this.$m,m=this.$M,g=n.weekdays,M=n.months,C=n.meridiem,x=function(y,_,I,E){return y&&(y[_]||y(s,i))||I[_].slice(0,E)},L=function(y){return f.s(l%12||12,y,"0")},j=C||function(y,_,I){var E=y<12?"AM":"PM";return I?E.toLowerCase():E};return i.replace(X,function(y,_){return _||function(I){switch(I){case"YY":return String(s.$y).slice(-2);case"YYYY":return f.s(s.$y,4,"0");case"M":return m+1;case"MM":return f.s(m+1,2,"0");case"MMM":return x(n.monthsShort,m,M,3);case"MMMM":return x(M,m);case"D":return s.$D;case"DD":return f.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return x(n.weekdaysMin,s.$W,g,2);case"ddd":return x(n.weekdaysShort,s.$W,g,3);case"dddd":return g[s.$W];case"H":return String(l);case"HH":return f.s(l,2,"0");case"h":return L(1);case"hh":return L(2);case"a":return j(l,d,!0);case"A":return j(l,d,!1);case"m":return String(d);case"mm":return f.s(d,2,"0");case"s":return String(s.$s);case"ss":return f.s(s.$s,2,"0");case"SSS":return f.s(s.$ms,3,"0");case"Z":return o}return null}(y)||o.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,s,n){var i,o=this,l=f.p(s),d=$(t),m=(d.utcOffset()-this.utcOffset())*h,g=this-d,M=function(){return f.m(o,d)};switch(l){case S:i=M()/12;break;case v:i=M();break;case J:i=M()/3;break;case F:i=(g-m)/6048e5;break;case w:i=(g-m)/864e5;break;case T:i=g/p;break;case Y:i=g/h;break;case b:i=g/c;break;default:i=g}return n?i:f.a(i)},r.daysInMonth=function(){return this.endOf(v).$D},r.$locale=function(){return k[this.$L]},r.locale=function(t,s){if(!t)return this.$L;var n=this.clone(),i=P(t,s,!0);return i&&(n.$L=i),n},r.clone=function(){return f.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},a}(),q=z.prototype;return $.prototype=q,[["$ms",O],["$s",b],["$m",Y],["$H",T],["$W",w],["$M",v],["$y",S],["$D",H]].forEach(function(a){q[a[1]]=function(r){return this.$g(r,a[0],a[1])}}),$.extend=function(a,r){return a.$i||(a(r,z,$),a.$i=!0),$},$.locale=P,$.isDayjs=U,$.unix=function(a){return $(1e3*a)},$.en=k[A],$.Ls=k,$.p={},$})})(G);var st=G.exports;const R=rt(st),at=(e,u)=>{var c;return e?(c=u[e])==null?void 0:c.name:""},it=(e,u)=>{var c;return e?(c=u[e])==null?void 0:c.prefix:""},ot=(e,u)=>{var c;return e?(c=u[e])==null?void 0:c.ele:""},lt=(e,u)=>e?`${it(e,u)} · ${at(e,u)}(${ot(e,u).name})`:"",ut=(e,u=0)=>{let c=Q(u),h;h=[];for(let O of e.obj)for(let b of O.wish5star)h.push(`/image/${c}/characters/full/${b}.png`);let p={};return h.length==1?p={backgroundImage:`url(${h[0]})`,backgroundRepeat:"no-repeat",backgroundPosition:"right",backgroundSize:"50%"}:h.length==2&&(p={backgroundImage:`url(${h[0]}),url(${h[1]})`,backgroundRepeat:"no-repeat,no-repeat",backgroundPosition:"left 3%, right 3%",backgroundSize:"50%, 50%"}),p},ht=(e,u=0)=>{let c={name:"",text:"",actions:[],tagline:"",style:{}};c.name=B("x时间轴",u),c.text=B("全部x信息",u);let h=Q(u);c.actions=[{theme:"alt",text:"返回上级",link:"/"+h+"/"},{theme:"brand",text:B("当前x",u),link:"/"+h+"/wish"}];let p="";for(let O of e.obj)p+=" + "+O.name;return c.tagline=p.slice(3),c.style=ut(e,u),c},Q=e=>{if(e===0)return"genshin";if(e===1)return"hsr"},B=(e,u=0,c=0)=>u===0?c===1?"「神铸赋形」活动祈愿":e.replace("x","祈愿"):u===1?c===1?"「流光定影」活动跃迁":e.replace("x","跃迁"):"",ct=e=>e==null?void 0:e.replace(/ /g,"_").replace(/·/g,"_").replace(/&/g,"_").replace(/,/g,"_").replace(/__/g,"_").toLowerCase(),dt=(e,u)=>ct(e)+"_"+u+".jpg",W=R(),D=e=>R(e.toString(),"YYYY-MM-DD HH:mm:ss"),$t=e=>D(e).format("YYYY-MM-DD HH:mm"),mt=(e,u)=>D(e).isBefore(D(u))?-1:D(e).isAfter(D(u))?1:0,gt=(e,u)=>D(e).isBefore(W)&&D(u).isAfter(W),yt=e=>D(e).isBefore(W),pt=e=>D(e).isAfter(W),Mt=e=>D(e).diff(W,"day",!0),ft=e=>{const u=Math.floor(e/86400),c=Math.floor((e-u*24*3600)/3600),h=Math.floor((e-u*24*3600-c*3600)/60),p=e-u*24*3600-c*3600-h*60;return u<0||c<0||h<0||p<0?-1:u+"天"+c+"时"+h+"分"+p+"秒"},vt=(e,u)=>ft(Math.floor(u.diff(e)/1e3)),Dt=(e,u)=>Object.keys(e).filter(c=>u(e[c])).reduce((c,h)=>(c[h]=e[h],c),{}),bt=(e,u)=>Object.fromEntries(Object.entries(e).filter(([c,h])=>u(h,c)));export{gt as a,yt as b,mt as c,R as d,Mt as e,bt as f,pt as g,ht as h,at as i,dt as j,$t as k,Q as l,B as m,st as n,Dt as o,D as p,nt as q,ct as r,vt as s,ot as t,lt as u,ut as v};