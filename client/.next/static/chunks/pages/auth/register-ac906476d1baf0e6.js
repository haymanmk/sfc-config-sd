(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3829:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return n(9369)}])},2540:function(e,r,n){"use strict";n.d(r,{T:function(){return i}});var s=n(5893),t=n(2734);let i=()=>{let e=(0,t.Z)();return e.palette.primary.main,(0,s.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"48.000000pt",height:"48.000000pt",viewBox:"0 0 48.000000 48.000000",preserveAspectRatio:"xMidYMid meet",children:(0,s.jsx)("g",{transform:"translate(0.000000,48.000000) scale(0.100000,-0.100000)",fill:"rgba(255,255,255,0.9)",stroke:"none",children:(0,s.jsx)("path",{d:"M218 448 c-8 -7 -61 -93 -117 -190 -87 -151 -101 -180 -91 -198 10 -19 20 -20 230 -20 210 0 220 1 230 20 10 18 -4 47 -91 198 -93 161 -121 202 -139 202 -3 0 -13 -6 -22 -12z"})})})}},2662:function(e,r,n){"use strict";n.d(r,{a:function(){return i}});var s=n(7294),t=n(249);let i=()=>(0,s.useContext)(t.Vo)},8354:function(e,r,n){"use strict";n.d(r,{A:function(){return h}});var s=n(5893),t=n(5697),i=n.n(t),a=n(1664),l=n.n(a),o=n(7357),d=n(1426),u=n(5861),c=n(2540);let h=e=>{let{children:r}=e;return(0,s.jsx)(o.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,s.jsxs)(d.Z,{container:!0,sx:{flex:"1 1 auto"},children:[(0,s.jsxs)(d.Z,{xs:12,lg:6,sx:{backgroundColor:"background.paper",display:"flex",flexDirection:"column",position:"relative"},children:[(0,s.jsx)(o.Z,{component:"header",sx:{left:0,p:3,position:"fixed",top:0,width:"100%"},children:(0,s.jsx)(o.Z,{component:l(),href:"/",sx:{display:"inline-flex",height:32,width:32},children:(0,s.jsx)(c.T,{})})}),r]}),(0,s.jsx)(d.Z,{xs:12,lg:6,sx:{alignItems:"center",background:"radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",color:"white",display:"flex",justifyContent:"center","& img":{maxWidth:"100%"}},children:(0,s.jsxs)(o.Z,{sx:{p:3},children:[(0,s.jsxs)(u.Z,{align:"center",color:"inherit",sx:{fontSize:"24px",lineHeight:"32px",mb:1},variant:"h1",children:["Welcome to"," ",(0,s.jsx)(o.Z,{component:"a",sx:{color:"#15B79E"},target:"_blank",children:"Devias Kit"})]}),(0,s.jsx)(u.Z,{align:"center",sx:{mb:3},variant:"subtitle1",children:"A professional kit that comes with ready-to-use MUI components."}),(0,s.jsx)("img",{alt:"",src:"/assets/auth-illustration.svg"})]})})]})})};h.prototypes={children:i().node}},9369:function(e,r,n){"use strict";n.r(r);var s=n(5893),t=n(9008),i=n.n(t),a=n(1664),l=n.n(a),o=n(7379),d=n(8482),u=n(6310),c=n(7357),h=n(6447),x=n(5861),m=n(3795),p=n(5678),g=n(3321),f=n(2662),j=n(8354);let v=()=>{let e=(0,o.useRouter)(),r=(0,f.a)(),n=(0,d.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),name:u.Z_().max(255).required("Name is required"),password:u.Z_().max(255).required("Password is required")}),onSubmit:async(n,s)=>{try{await r.signUp(n.email,n.name,n.password),e.push("/")}catch(e){s.setStatus({success:!1}),s.setErrors({submit:e.message}),s.setSubmitting(!1)}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"Register | Devias Kit"})}),(0,s.jsx)(c.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,s.jsx)(c.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(h.Z,{spacing:1,sx:{mb:3},children:[(0,s.jsx)(x.Z,{variant:"h4",children:"Register"}),(0,s.jsxs)(x.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,s.jsx)(m.Z,{component:l(),href:"/auth/login",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,s.jsxs)("form",{noValidate:!0,onSubmit:n.handleSubmit,children:[(0,s.jsxs)(h.Z,{spacing:3,children:[(0,s.jsx)(p.Z,{error:!!(n.touched.name&&n.errors.name),fullWidth:!0,helperText:n.touched.name&&n.errors.name,label:"Name",name:"name",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.name}),(0,s.jsx)(p.Z,{error:!!(n.touched.email&&n.errors.email),fullWidth:!0,helperText:n.touched.email&&n.errors.email,label:"Email Address",name:"email",onBlur:n.handleBlur,onChange:n.handleChange,type:"email",value:n.values.email}),(0,s.jsx)(p.Z,{error:!!(n.touched.password&&n.errors.password),fullWidth:!0,helperText:n.touched.password&&n.errors.password,label:"Password",name:"password",onBlur:n.handleBlur,onChange:n.handleChange,type:"password",value:n.values.password})]}),n.errors.submit&&(0,s.jsx)(x.Z,{color:"error",sx:{mt:3},variant:"body2",children:n.errors.submit}),(0,s.jsx)(g.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Continue"})]})]})})})]})};v.getLayout=e=>(0,s.jsx)(j.A,{children:e}),r.default=v}},function(e){e.O(0,[394,191,995,678,231,774,888,179],function(){return e(e.s=3829)}),_N_E=e.O()}]);