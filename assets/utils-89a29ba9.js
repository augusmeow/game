const c=o=>{const t=Math.floor(o/86400),e=Math.floor((o-t*24*3600)/3600),n=Math.floor((o-t*24*3600-e*3600)/60),r=o-t*24*3600-e*3600-n*60;return t<0||e<0||n<0||r<0?-1:t+"天"+e+"时"+n+"分"+r+"秒"},a=(o,t)=>c(Math.floor(t.diff(o)/1e3)),s=(o,t)=>Object.keys(o).filter(e=>t(o[e])).reduce((e,n)=>(e[n]=o[n],e),{});export{a as D,s as o};
