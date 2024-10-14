import{p as B}from"./chunk-RYO7GUH3.DKc82Zy8.js";import{A as U,p as j,q,s as V,g as Z,c as H,b as J,_ as i,l as C,t as K,d as Q,B as X,G as Y,I as tt,j as et}from"../app.BvgAzyW3.js";import{p as at}from"./gitGraph-YCYPL57B.CNrn30vE.js";import{d as z,o as rt,a as it}from"./theme.iBKGg6dV.js";import"./framework.B5h9y4_0.js";import"./baseUniq.C64CfCoF.js";import"./basePickBy.COWZiCkb.js";import"./clone.BJ8IymPd.js";var G=U.pie,D={sections:new Map,showData:!1,config:G},m=D.sections,w=D.showData,st=structuredClone(G),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{m=new Map,w=D.showData,K()},"clear"),lt=i(({label:t,value:a})=>{m.has(t)||(m.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>m,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),F={getConfig:ot,clear:nt,setDiagramTitle:j,getDiagramTitle:q,setAccTitle:V,getAccTitle:Z,setAccDescription:H,getAccDescription:J,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await at("pie",t);C.debug(a),gt(a,F)},"parse")},ft=i(t=>`
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
`,"getStyles"),mt=ft,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return it().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,W,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=Q(),T=X(n.getConfig(),y.pie),$=40,o=18,d=4,l=450,h=l,S=Y(a),c=S.append("g");c.attr("transform","translate("+h/2+","+l/2+")");const{themeVariables:r}=y;let[A]=tt(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,l)/2-$,I=z().innerRadius(0).outerRadius(g),M=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),O=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=rt(O);c.selectAll("mySlices").data(v).enter().append("path").attr("d",I).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),c.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+M.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const f=o+d,R=f*p.domain().length/2,L=12*o,N=u*f-R;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:f}=e.data;return n.getShowData()?`${u} [${f}]`:u});const P=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+P;S.attr("viewBox",`0 0 ${k} ${l}`),et(S,l,k,T.useMaxWidth)},"draw"),vt={draw:St},_t={parser:ut,db:F,renderer:vt,styles:mt};export{_t as diagram};
