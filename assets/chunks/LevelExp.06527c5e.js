import{_ as N,o as x,c as I,k as i,a as m,F as b,D as v,a2 as h,a5 as f,t as c,p as g,m as w}from"./framework.21d51add.js";const E={data(){return{lv1:null,lv2:null,money:null,got:null,expNeed:null,prefixInfo:null,dayNeed:null,tipsInfo:[],expName:null}},props:{EXP:Array,dailyTask:null,recovery:null,pay2win:Array,expChange:null,exploreName:Object,lvMax:null},methods:{checkInput(t,e,n=0){e=parseInt(e);let o=t.target.value;o>e&&(o=e),o.length>4&&(o=o.slice(0,4)),o<n&&(o=n),t.target.value=o},showEXP(){var e,n;let t=this.getEXP(this.lv1,this.lv2,this.got,this.money);console.log(t),this.expNeed=t.show,this.prefixInfo=(e=t.objInfo)==null?void 0:e.prefixInfo,this.dayNeed=(n=t.objInfo)==null?void 0:n.dayInfo},getDaySpend(t,e){const n=1440/this.recovery,o=u=>u*this.expChange;let s=0,r=0;if(e){for(let u=0;u<=e;++u)s+=this.pay2win[u];r=60*e}let l=n+r,p=o(l)+this.dailyTask,d=Math.ceil(t/p);return console.info("money",e,"exp",t,"resin",l,"daySpend",d),{daySpend:d,cost:s}},showMore(t){let e="",n=t.daySpend,o="";return t.cost===0?e="白嫖的神":t.cost===800?e="氪佬悠着点啊":e="氪佬大气",n<7?o="仅剩"+n+"天，冲冲冲！":n<30?o="仅剩"+n+"天，很快了！冲冲冲！！":n<180?o="还有"+n+"天，加油":n<365?o="还有"+n+"天，慢慢来":o="遥遥无期，还得"+n+"天啊",{prefixInfo:e,dayInfo:o}},getEXP(t,e,n,o){n||(n=0),o||(o=0);let s="非法输入，请正确输入",r={};if(t>=e||t>59||e>60)return{show:s,objInfo:r};{let l=0;for(let p=t;p<e;++p)l+=this.EXP[p];if(console.info("exp",l),n=parseInt(n),n>l)return s;l-=n,console.info("got",n),r=this.showMore(this.getDaySpend(l,o)),s="所需经验为："+l}return{show:s,objInfo:r}}},mounted(){var s,r,l,p,d,u,y,_;let t=[],e=((r=(s=this.exploreName)==null?void 0:s.TrailblazeEXP)==null?void 0:r.name)||((p=(l=this.exploreName)==null?void 0:l.AdventureEXP)==null?void 0:p.name),n=((u=(d=this.exploreName)==null?void 0:d.TrailblazePower)==null?void 0:u.name)||((_=(y=this.exploreName)==null?void 0:y.OriginalResin)==null?void 0:_.name),o=`每日任务合计 <b>${this.dailyTask}</b> ${e}`;t.push(o),o=`${n}-${e}换算为 <b>1${n}:${this.expChange}${e}</b>`,t.push(o),o=`氪佬只能氪6次 ${this.pay2win}`,t.push(o),o="不计算除每日任务外其他任务的奖励",t.push(o),console.log(t),this.tipsInfo=t,this.expName=e}},a=t=>(g("data-v-c345074a"),t=t(),w(),t),k=["innerHTML"],T=a(()=>i("br",null,null,-1)),P=a(()=>i("br",null,null,-1)),S=a(()=>i("br",null,null,-1)),X=a(()=>i("br",null,null,-1)),M=a(()=>i("br",null,null,-1)),D=a(()=>i("br",null,null,-1)),L=["placeholder"],V=a(()=>i("a",null,"点击",-1)),j={id:"expNeed"},A={id:"prefixInfo"},C=a(()=>i("br",null,null,-1)),U={id:"dayNeed"};function B(t,e,n,o,s,r){return x(),I(b,null,[i("blockquote",null,[m(" 提示及参考： "),i("ol",null,[(x(!0),I(b,null,v(s.tipsInfo,(l,p)=>(x(),I("li",{innerHTML:l},null,8,k))),256))])]),i("div",null,[h(i("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.money=l),type:"number",placeholder:"氪吗？每天氪多少(0-6)单？默认白嫖",onInput:e[1]||(e[1]=l=>r.checkInput(l,6))},null,544),[[f,s.money]]),T,P,h(i("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>s.lv1=l),type:"number",placeholder:"输入起始等级",onInput:e[3]||(e[3]=l=>r.checkInput(l,n.lvMax-1))},null,544),[[f,s.lv1]]),S,X,h(i("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>s.lv2=l),type:"number",placeholder:"输入目标等级",onInput:e[5]||(e[5]=l=>r.checkInput(l,n.lvMax))},null,544),[[f,s.lv2]]),M,D,h(i("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>s.got=l),type:"number",placeholder:`输入已经获取的${s.expName}`,onInput:e[7]||(e[7]=l=>r.checkInput(l,1/0,0))},null,40,L),[[f,s.got]])]),i("h2",{onClick:e[8]||(e[8]=(...l)=>r.showEXP&&r.showEXP(...l))},[V,m("查询所需"+c(s.expName),1)]),i("h3",j,c(s.expNeed),1),i("u",A,c(s.prefixInfo),1),C,i("span",U,c(s.dayNeed),1)],64)}const z=N(E,[["render",B],["__scopeId","data-v-c345074a"]]);export{z as L};