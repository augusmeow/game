var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U={},R={get exports(){return U},set exports(e){U=e}};(function(e,rt){(function(z,b){e.exports=b()})(K,function(){var z=1e3,b=6e4,J=36e5,N="millisecond",S="second",w="minute",O="hour",M="day",L="week",m="month",V="quarter",g="year",_="date",W="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},k=function(s,r,t){var i=String(s);return!i||i.length>=r?s:""+Array(r+1-i.length).join(t)+s},Q={s:k,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),i=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+k(i,2,"0")+":"+k(n,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var i=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(i,m),o=t-n<0,a=r.clone().add(i+(o?-1:1),m);return+(-(i+(t-n)/(o?n-a:a-n))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y:g,w:L,d:M,D:_,h:O,m:w,s:S,ms:N,Q:V}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},H="en",p={};p[H]=P;var F=function(s){return s instanceof A},j=function s(r,t,i){var n;if(!r)return H;if(typeof r=="string"){var o=r.toLowerCase();p[o]&&(n=o),t&&(p[o]=t,n=o);var a=r.split("-");if(!n&&a.length>1)return s(a[0])}else{var u=r.name;p[u]=r,n=u}return!i&&n&&(H=n),n||!i&&H},d=function(s,r){if(F(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new A(t)},c=Q;c.l=j,c.i=F,c.w=function(s,r){return d(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var A=function(){function s(t){this.$L=j(t.locale,null,!0),this.parse(t)}var r=s.prototype;return r.parse=function(t){this.$d=function(i){var n=i.date,o=i.utc;if(n===null)return new Date(NaN);if(c.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var a=n.match(B);if(a){var u=a[2]-1||0,f=(a[7]||"0").substring(0,3);return o?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return c},r.isValid=function(){return this.$d.toString()!==W},r.isSame=function(t,i){var n=d(t);return this.startOf(i)<=n&&n<=this.endOf(i)},r.isAfter=function(t,i){return d(t)<this.startOf(i)},r.isBefore=function(t,i){return this.endOf(i)<d(t)},r.$g=function(t,i,n){return c.u(t)?this[i]:this.set(n,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,i){var n=this,o=!!c.u(i)||i,a=c.p(t),u=function(Y,$){var D=c.w(n.$u?Date.UTC(n.$y,$,Y):new Date(n.$y,$,Y),n);return o?D:D.endOf(M)},f=function(Y,$){return c.w(n.toDate()[Y].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice($)),n)},h=this.$W,l=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(a){case g:return o?u(1,0):u(31,11);case m:return o?u(1,l):u(0,l+1);case L:var T=this.$locale().weekStart||0,x=(h<T?h+7:h)-T;return u(o?v-x:v+(6-x),l);case M:case _:return f(y+"Hours",0);case O:return f(y+"Minutes",1);case w:return f(y+"Seconds",2);case S:return f(y+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,i){var n,o=c.p(t),a="set"+(this.$u?"UTC":""),u=(n={},n[M]=a+"Date",n[_]=a+"Date",n[m]=a+"Month",n[g]=a+"FullYear",n[O]=a+"Hours",n[w]=a+"Minutes",n[S]=a+"Seconds",n[N]=a+"Milliseconds",n)[o],f=o===M?this.$D+(i-this.$W):i;if(o===m||o===g){var h=this.clone().set(_,1);h.$d[u](f),h.init(),this.$d=h.set(_,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](f);return this.init(),this},r.set=function(t,i){return this.clone().$set(t,i)},r.get=function(t){return this[c.p(t)]()},r.add=function(t,i){var n,o=this;t=Number(t);var a=c.p(i),u=function(l){var v=d(o);return c.w(v.date(v.date()+Math.round(l*t)),o)};if(a===m)return this.set(m,this.$M+t);if(a===g)return this.set(g,this.$y+t);if(a===M)return u(1);if(a===L)return u(7);var f=(n={},n[w]=b,n[O]=J,n[S]=z,n)[a]||1,h=this.$d.getTime()+t*f;return c.w(h,this)},r.subtract=function(t,i){return this.add(-1*t,i)},r.format=function(t){var i=this,n=this.$locale();if(!this.isValid())return n.invalidDate||W;var o=t||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),u=this.$H,f=this.$m,h=this.$M,l=n.weekdays,v=n.months,y=function($,D,Z,I){return $&&($[D]||$(i,o))||Z[D].slice(0,I)},T=function($){return c.s(u%12||12,$,"0")},x=n.meridiem||function($,D,Z){var I=$<12?"AM":"PM";return Z?I.toLowerCase():I},Y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:c.s(h+1,2,"0"),MMM:y(n.monthsShort,h,v,3),MMMM:y(v,h),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:y(n.weekdaysMin,this.$W,l,2),ddd:y(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(u),HH:c.s(u,2,"0"),h:T(1),hh:T(2),a:x(u,f,!0),A:x(u,f,!1),m:String(f),mm:c.s(f,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:a};return o.replace(G,function($,D){return D||Y[$]||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,i,n){var o,a=c.p(i),u=d(t),f=(u.utcOffset()-this.utcOffset())*b,h=this-u,l=c.m(this,u);return l=(o={},o[g]=l/12,o[m]=l,o[V]=l/3,o[L]=(h-f)/6048e5,o[M]=(h-f)/864e5,o[O]=h/J,o[w]=h/b,o[S]=h/z,o)[a]||h,n?l:c.a(l)},r.daysInMonth=function(){return this.endOf(m).$D},r.$locale=function(){return p[this.$L]},r.locale=function(t,i){if(!t)return this.$L;var n=this.clone(),o=j(t,i,!0);return o&&(n.$L=o),n},r.clone=function(){return c.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),q=A.prototype;return d.prototype=q,[["$ms",N],["$s",S],["$m",w],["$H",O],["$W",M],["$M",m],["$y",g],["$D",_]].forEach(function(s){q[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),d.extend=function(s,r){return s.$i||(s(r,A,d),s.$i=!0),d},d.locale=j,d.isDayjs=F,d.unix=function(s){return d(1e3*s)},d.en=p[H],d.Ls=p,d.p={},d})})(R);const X=U;var C=(e=>(e[e.anemo=0]="anemo",e[e.pyro=1]="pyro",e[e.cryo=2]="cryo",e[e.electro=3]="electro",e[e.hydro=4]="hydro",e[e.geo=5]="geo",e[e.dendro=6]="dendro",e))(C||{});const et={0:"anemo",1:"pyro",2:"cryo",3:"electro",4:"hydro",5:"geo",6:"dendro"};var E=(e=>(e[e.Mondstadt=0]="Mondstadt",e[e.Liyue=1]="Liyue",e[e.Inazuma=2]="Inazuma",e[e.Sumeru=3]="Sumeru",e[e.Fontaine=4]="Fontaine",e[e.Natlan=5]="Natlan",e[e.Snezhnaya=6]="Snezhnaya",e))(E||{});const st=["蒙德","璃月","稻妻","须弥","枫丹","纳塔","至冬"];var tt=(e=>(e[e.sword=0]="sword",e[e.claymore=1]="claymore",e[e.catalyst=2]="catalyst",e[e.bow=3]="bow",e[e.polearm=4]="polearm",e))(tt||{});const it=["单手剑","双手剑","法器","弓","长柄武器"],at=e=>e.replace(/ /g,"_").toLowerCase(),nt=e=>X(e.toString(),"YYYY-MM-DD HH:mm:ss"),ot=e=>nt(e).format("YYYY-MM-DD HH:mm:ss");export{E as C,C as E,tt as W,U as a,et as b,K as c,X as d,st as e,ot as f,it as g,nt as p,at as r};