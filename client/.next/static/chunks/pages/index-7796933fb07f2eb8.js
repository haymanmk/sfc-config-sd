(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9991)}])},9991:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var i=n(5893),l=n(9008),r=n.n(l),s=n(7357),o=n(5582),c=n(6447),a=n(5861),d=n(3321),h=n(6242),u=n(8445),p=n(7720),x=n(4267),f=n(7906),j=n(295),g=n(3816),C=n(8102),Z=n(657),b=n(7645),y=n(6514),m=n(8951),v=n(8334),w=n(7294),S=n(7338),O=n(5678),k=n(1447),_=n.n(k),D=n(3370),I=n.n(D),N=n(233);let T=(0,w.memo)(e=>{let[t,n]=(0,w.useState)(),{optionKeys:l,textFieldLabel:r}=e,s={...e};delete s.optionKeys,delete s.textFieldLabel;let o=e=>(null==l?void 0:l.length)>1?l.reduce((t,n)=>(null==e?void 0:e[t])+" "+(null==e?void 0:e[n])):(null==l?void 0:l.length)===1?null==e?void 0:e[l[0]]:void 0,c=(e,t)=>{let{inputValue:n}=t;return(0,N.Lu)(e,n,{keys:l,sorter:e=>[...e].reverse(),threshold:N.Lu.rankings.CONTAINS})};return(0,i.jsx)(S.Z,{...s,inputValue:t,onInputChange:(e,t)=>{n(t)},getOptionLabel:(null==l?void 0:l.length)&&(e=>o(e)),isOptionEqualToValue:(null==l?void 0:l.length)&&((e,t)=>o(e)==o(t)),renderInput:e=>(0,i.jsx)(O.Z,{...e,label:r}),renderOption:(e,t,n)=>{let{inputValue:l}=n,r=_()(o(t),l),s=I()(o(t),r);return(0,i.jsx)("li",{...e,children:(0,i.jsx)("div",{children:s.map((e,t)=>(0,i.jsx)("span",{style:{fontWeight:e.highlight?700:400},children:e.text},t))})})},options:e.options||[],filterOptions:c})}),E=()=>{let[e,t]=(0,w.useState)([]);return(0,w.useEffect)(()=>{fetch("http://shixpa-peproxy00.garmin.com/smt-sfcadvance/T3-3F/api/Configs",{method:"GET"}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>console.error(e))},[]),e},P=()=>{let e=E(),[t,n]=(0,w.useState)({}),[l,v]=(0,w.useState)(!1),[S,O]=(0,w.useState)(""),k=window.location.hostname,_="http://".concat(k,":").concat(3001,"/config");(0,w.useEffect)(()=>{(null==e?void 0:e.length)&&(null==t?n(t):0===Object.keys(t).length&&n(e[0]))},[e]);let D=(0,w.useCallback)(e=>{v(!0),O(e.toString())},[S]),I=(0,w.useCallback)(e=>{if(null==t){console.error("cartInfo shall not be empty, before writing to SD card."),D("Select Cart ID before Write SD.");return}fetch(_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cmd:"write",msg:t})}).then(e=>e.json()).then(e=>{console.log(e),"success"===e.status&&D("Write Successfully. Power off before Pulling SD Card Out.")}).catch(e=>{console.error(e),D(e)})},[t]),N=(0,w.useCallback)(e=>{fetch(_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cmd:"poweroff",msg:""})}).then(e=>e.json).then(e=>{D("Power Off...")}).catch(e=>{console.error(e),D(e)})},[]),P=(0,w.useCallback)((e,t)=>{n(t)},[t]),L=(0,w.useCallback)(()=>{v(!1)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{children:(0,i.jsx)("title",{children:"SFC | GARMIN"})}),(0,i.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsx)(o.Z,{maxWidth:"lg",children:(0,i.jsxs)(c.Z,{spacing:3,children:[(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",spacing:4,children:[(0,i.jsx)(a.Z,{variant:"h4",children:"SD Card Config"}),(0,i.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(d.Z,{variant:"contained",onClick:I,children:"Write"}),(0,i.jsx)(d.Z,{variant:"contained",onClick:N,children:"Power off"})]})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(u.Z,{title:"Cart ID",subheader:"[ Org. ] - sfc - [ Cart ID ] [ Up/Down ]"}),(0,i.jsx)(p.Z,{}),(0,i.jsx)(x.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(c.Z,{direction:"column",justifyContent:"center",spacing:3,sx:{minWidth:600},children:(0,i.jsx)(T,{required:!0,id:"input_cart_id",value:t,onChange:P,options:e,optionKeys:["cartID","position"],textFieldLabel:"Cart ID",groupBy:e=>e.org})})})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(u.Z,{title:"Device Info."}),(0,i.jsx)(p.Z,{}),(0,i.jsx)(x.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(f.Z,{children:(0,i.jsx)(j.Z,{children:t&&Object.entries(t).map(e=>{let[t,n]=e,l=0;return(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(C.Z,{children:t}),(0,i.jsx)(C.Z,{children:n.toString()})]},l++)})})})})]})]})})}),(0,i.jsxs)(Z.Z,{open:l,onClose:L,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,i.jsx)(b.Z,{id:"alert-dialog-title",children:"Alert"}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(m.Z,{id:"alert-dialog-description",children:S})})]})]})};P.getLayout=e=>(0,i.jsx)(v.A,{children:e});var L=P}},function(e){e.O(0,[394,191,995,833,678,365,98,334,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);