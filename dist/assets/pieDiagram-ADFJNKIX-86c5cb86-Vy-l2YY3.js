import{e as u,A as G,C as H,I as U,h as Z,u as q,t as J,f as z,L as K,H as Q,a4 as X,a6 as tt,_ as et,B as at,R as it,a7 as y,a8 as nt,a9 as O}from"./index-Czor8CTe.js";import{m as rt}from"./chunk-4BX2VUAB-da5e863b-DI9OR_Jh.js";import{Y as lt}from"./treemap-KMMF4GRG-0670511a-tPI2Iy3A.js";import{h as E}from"./arc-18b7764b-iyrL5u35.js";import{h as st}from"./ordinal-5695958c-Dn4QBzhM.js";import"./_baseUniq-d0546d8d-DdmjHXy7.js";import"./_basePickBy-de94bb78-B5gXlpXJ.js";import"./clone-5f1fdf2f-CBd5deMo.js";import"./init-f9637058-DHuO7-vr.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function pt(t){return t}function ct(){var t=pt,a=ot,g=null,s=y(0),o=y(O),w=y(0);function l(e){var n,p=(e=nt(e)).length,d,v,x=0,c=new Array(p),r=new Array(p),h=+s.apply(this,arguments),$=Math.min(O,Math.max(-O,o.apply(this,arguments)-h)),m,b=Math.min(Math.abs($)/p,w.apply(this,arguments)),C=b*($<0?-1:1),f;for(n=0;n<p;++n)(f=r[c[n]=n]=+t(e[n],n,e))>0&&(x+=f);for(a!=null?c.sort(function(S,A){return a(r[S],r[A])}):g!=null&&c.sort(function(S,A){return g(e[S],e[A])}),n=0,v=x?($-p*C)/x:0;n<p;++n,h=m)d=c[n],f=r[d],m=h+(f>0?f*v:0)+C,r[d]={data:e[d],index:n,value:f,startAngle:h,endAngle:m,padAngle:b};return r}return l.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),l):t},l.sortValues=function(e){return arguments.length?(a=e,g=null,l):a},l.sort=function(e){return arguments.length?(g=e,a=null,l):g},l.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),l):s},l.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:y(+e),l):o},l.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:y(+e),l):w},l}var ut=it.pie,F={sections:new Map,showData:!1},D=F.sections,L=F.showData,dt=structuredClone(ut),ft=u(()=>structuredClone(dt),"getConfig"),gt=u(()=>{D=new Map,L=F.showData,at()},"clear"),ht=u(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(t)||(D.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),mt=u(()=>D,"getSections"),xt=u(t=>{L=t},"setShowData"),yt=u(()=>L,"getShowData"),P={getConfig:ft,clear:gt,setDiagramTitle:J,getDiagramTitle:q,setAccTitle:Z,getAccTitle:U,setAccDescription:H,getAccDescription:G,addSection:ht,getSections:mt,setShowData:xt,getShowData:yt},wt=u((t,a)=>{rt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),vt={parse:u(async t=>{const a=await lt("pie",t);z.debug(a),wt(a,P)},"parse")},$t=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),St=$t,At=u(t=>{const a=[...t.values()].reduce((s,o)=>s+o,0),g=[...t.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return ct().value(s=>s.value)(g)},"createPieArcs"),bt=u((t,a,g,s)=>{z.debug(`rendering pie chart
`+t);const o=s.db,w=K(),l=Q(o.getConfig(),w.pie),e=40,n=18,p=4,d=450,v=d,x=X(a),c=x.append("g");c.attr("transform","translate("+v/2+","+d/2+")");const{themeVariables:r}=w;let[h]=tt(r.pieOuterStrokeWidth);h??(h=2);const $=l.textPosition,m=Math.min(v,d)/2-e,b=E().innerRadius(0).outerRadius(m),C=E().innerRadius(m*$).outerRadius(m*$);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+h/2).attr("class","pieOuterCircle");const f=o.getSections(),S=At(f),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12];let T=0;f.forEach(i=>{T+=i});const W=S.filter(i=>(i.data.value/T*100).toFixed(0)!=="0"),k=st(A);c.selectAll("mySlices").data(W).enter().append("path").attr("d",b).attr("fill",i=>k(i.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(W).enter().append("text").text(i=>(i.data.value/T*100).toFixed(0)+"%").attr("transform",i=>"translate("+C.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const B=[...f.entries()].map(([i,R])=>({label:i,value:R})),M=c.selectAll(".legend").data(B).enter().append("g").attr("class","legend").attr("transform",(i,R)=>{const Y=n+p,_=Y*B.length/2,I=12*n,j=R*Y-_;return"translate("+I+","+j+")"});M.append("rect").attr("width",n).attr("height",n).style("fill",i=>k(i.label)).style("stroke",i=>k(i.label)),M.append("text").attr("x",n+p).attr("y",n-p).text(i=>o.getShowData()?`${i.label} [${i.value}]`:i.label);const V=Math.max(...M.selectAll("text").nodes().map(i=>(i==null?void 0:i.getBoundingClientRect().width)??0)),N=v+e+n+p+V;x.attr("viewBox",`0 0 ${N} ${d}`),et(x,d,N,l.useMaxWidth)},"draw"),Ct={draw:bt},Wt={parser:vt,db:P,renderer:Ct,styles:St};export{Wt as diagram};
