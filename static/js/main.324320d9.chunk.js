(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{134:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=(r(75),r(59)),o=r.n(a),s=r(5),i=r(24),l=r.n(i),j=r(37),u="true"===localStorage.getItem("dark")||!1,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"darken":return!0;case"lighten":return!1;default:return e}},d=r(1),h=Object(n.createContext)(),p=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(b,u),r=Object(s.a)(t,2),c=r[0],a=r[1];return Object(d.jsx)(p.Provider,{value:a,children:Object(d.jsx)(h.Provider,{value:c,children:e.children})})},x={primary:"#1e262c",secondary:"#182025"},m={primary:"#ffffff",secondary:"#f7f7f7"},f=function(e){var t=e.mobile,r=Object(n.useContext)(h);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsx)(j.SocialIcon,{bgColor:r?m.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.github.com/SinaBYR",target:"_blank",rel:"noopener noreferrer",to:"/"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.SocialIcon,{bgColor:r?m.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.linkedin.com/in/sina-beyraghdar-7bb920162/",target:"_blank",rel:"noopener noreferrer",to:"/"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.SocialIcon,{bgColor:r?m.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.twitter.com/sinabyr",target:"_blank",rel:"noopener noreferrer",to:"/"})})]})},v=r(23),_=r(3),g=r(60),y=r.n(g),k=function(e){return Object(d.jsx)("button",Object(_.a)(Object(_.a)({className:y.a.PrimaryButton},e),{},{children:e.children}))},w=(r(61),r(62)),C=r.n(w),N=function(e){return Object(d.jsx)("button",Object(_.a)(Object(_.a)({className:C.a.WarningButton},e),{},{children:e.children}))},S=r(63),P=r.n(S),D=function(e){return Object(d.jsx)("button",Object(_.a)(Object(_.a)({className:P.a.ConfirmButton},e),{},{children:e.children}))},F=(r(64),r(19)),B=r(66),M=r.n(B),W=function(e){return Object(d.jsx)(F.b,Object(_.a)(Object(_.a)({className:M.a.SecondaryLink},e),{},{children:e.children}))},L=r(67),T=r.n(L),E=function(e){return Object(d.jsx)("a",Object(_.a)(Object(_.a)({className:T.a.SecondaryAnchor},e),{},{children:e.children}))},I=r(68),A=r.n(I),R=function(e){return Object(d.jsx)("a",Object(_.a)(Object(_.a)({className:A.a.PrimaryAnchor},e),{},{children:e.children}))},J=(r(69),r(43)),q=r.n(J),U=function(e){e.styles;var t=e.open,r=e.click,c=Object(n.useContext)(h),a=[q.a.Burger,t?q.a.Open:null].join(" ");return Object(d.jsxs)("div",{className:a,onClick:r,children:[Object(d.jsx)("div",{style:{backgroundColor:c?m.primary:x.secondary}}),Object(d.jsx)("div",{style:{backgroundColor:c?m.primary:x.secondary}}),Object(d.jsx)("div",{style:{backgroundColor:c?m.primary:x.secondary}})]})},Y=r(70),H=r.n(Y),Z=function(e){return Object(d.jsx)("p",Object(_.a)(Object(_.a)({className:H.a.ErrorMessage},e),{},{children:e.children}))},G=r(30),z=r.n(G),K=r(25),X=r.n(K),V=function(){var e=Object(n.useContext)(h),t=Object(n.useContext)(p);return Object(d.jsxs)("label",{className:X.a.Switch,children:[Object(d.jsx)("input",{type:"checkbox",checked:e,onChange:function(r){if(!e)return t({type:"darken"}),void localStorage.setItem("dark",!0);t({type:"lighten"}),localStorage.setItem("dark",!1)}}),Object(d.jsx)("span",{className:[X.a.Slider,X.a.Round].join(" "),children:e?Object(d.jsx)("span",{className:X.a.Moon,children:Object(d.jsx)(v.b,{})}):Object(d.jsx)("span",{className:X.a.Sun,children:Object(d.jsx)(v.c,{})})})]})},Q=function(e){var t=e.open,r=Object(n.useContext)(h),c=[z.a.Menu,t?z.a.Open:null].join(" ");return Object(d.jsxs)("div",{className:c,style:{backgroundColor:r?x.secondary:m.secondary},children:[Object(d.jsx)("ul",{className:z.a.Links,children:Object(d.jsx)(f,{mobile:!0})}),Object(d.jsxs)("div",{className:z.a.DarkMode,children:[Object(d.jsx)("span",{children:"Theme Mode"}),Object(d.jsx)(V,{})]})]})},$=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useContext)(h);return Object(d.jsx)("header",{className:l.a.Navbar,style:{backgroundColor:a?x.secondary:m.primary},children:Object(d.jsxs)("nav",{className:l.a.NavbarWrapper,children:[Object(d.jsx)(U,{open:r,click:function(){return c(!r)}}),Object(d.jsx)(Q,{open:r}),Object(d.jsx)("h1",{className:l.a.Logo,children:"Sina Beyraghdar"}),Object(d.jsx)("div",{className:l.a.DarkMode,children:Object(d.jsx)(V,{})}),Object(d.jsx)("ul",{className:l.a.Links,children:Object(d.jsx)(f,{})}),a?Object(d.jsxs)(E,{href:"https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:["Resume ",Object(d.jsx)(v.a,{})]}):Object(d.jsxs)(R,{href:"https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:["Resume ",Object(d.jsx)(v.a,{})]})]})})},ee=r(9),te=r.n(ee),re=r(15),ne=r(38),ce=r.n(ne),ae=r(21),oe=r.n(ae),se=r(31),ie=function(e){var t=e.title,r=e.code,c=e.demo,a=e.description,o=e.tech,s=e.preview,i=Object(n.useContext)(h),l=[oe.a.Project,i?oe.a.Dark:null].join(" ");return Object(d.jsxs)("section",{className:l,style:{backgroundColor:i?x.primary:m.secondary},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("div",{className:oe.a.MobilePreview,children:Object(d.jsx)("img",{src:s,alt:"project-preview-screenshot"})}),Object(d.jsx)("div",{className:oe.a.Links,children:i?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(E,{href:c,target:"_blank",rel:"noopener noreferrer",children:["Demo ",Object(d.jsx)(se.a,{})]}),Object(d.jsxs)(E,{href:r,target:"_blank",rel:"noopener noreferrer",children:["Code ",Object(d.jsx)(se.a,{})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(R,{href:c,target:"_blank",rel:"noopener noreferrer",children:["Demo ",Object(d.jsx)(se.a,{})]}),Object(d.jsxs)(R,{href:r,target:"_blank",rel:"noopener noreferrer",children:["Code ",Object(d.jsx)(se.a,{})]})]})}),Object(d.jsx)("p",{className:oe.a.Description,children:a}),Object(d.jsxs)("div",{className:oe.a.Technologies,children:[Object(d.jsx)("h3",{children:"Technologies"}),Object(d.jsx)("ul",{children:o.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})]})]}),Object(d.jsx)("div",{className:oe.a.DesktopPreview,children:Object(d.jsx)("img",{src:s,alt:"project-preview-screenshot"})})]})},le=r(44),je=r.n(le),ue=je.a.CancelToken.source(),be=je.a.create({baseURL:"https://sinabyr-portfolio-api.onrender.com",cancelToken:ue.token}),de=r(20),he=function(){var e=Object(n.useContext)(h),t=Object(n.useState)([]),r=Object(s.a)(t,2),c=r[0],a=r[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),l=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),p=b[0],O=b[1],f=function(){var e=Object(re.a)(te.a.mark((function e(){var t,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(null),O(!0),e.prev=2,e.next=5,be.get("/projects");case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,a(r),O(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),j(e.t0),O(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){f()}),[]);var v=c.map((function(e){var t=e._id,r=e.title,n=e.code,c=e.demo,a=e.description,o=e.tech,s=e.preview;return Object(d.jsx)(ie,{title:r,code:n,demo:c,description:a,tech:o,preview:s},t)})).reverse();return Object(d.jsx)("main",{className:ce.a.Work,style:{backgroundColor:e?x.secondary:m.primary},children:Object(d.jsxs)("div",{className:ce.a.WorkWrapper,children:[Object(d.jsx)("h2",{children:"My Work"}),Object(d.jsx)("div",{className:ce.a.Projects,children:l?Object(d.jsx)(Z,{children:l.message}):p?Object(d.jsx)("div",{style:{textAlign:"center"},children:Object(d.jsx)(de.ScaleLoader,{color:e?m.primary:x.secondary})}):v})]})})},pe=r(45),Oe=r.n(pe),xe=function(){var e=Object(n.useContext)(h);return Object(d.jsx)("section",{className:Oe.a.Showcase,style:{backgroundColor:e?x.primary:m.secondary},children:Object(d.jsxs)("div",{className:Oe.a.ShowcaseWrapper,children:[Object(d.jsx)("h2",{children:"Hello, and welcome to my portfolio."}),Object(d.jsx)("p",{children:"My name is Sina. I'm a front-end web developer and I make web applications."}),Object(d.jsx)("p",{children:"Check out my work in the next section."}),Object(d.jsx)("p",{children:"Send me an email using the form in the last section or message me in LinkedIn."})]})})},me=r(26),fe=r.n(me),ve=r(14),_e=function(e,t){var r=t.target.name,n=function(e){var t=e.email,r=e.message,n={};return t.touched&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.value)&&(n.email="Email address is invalid."),t.touched&&!t.value.length&&(n.email="This field is required."),r.touched&&!r.value.length&&(n.message="This field is required.",console.log(n)),n}(e);return Object(_.a)(Object(_.a)({},e),{},Object(ve.a)({},r,Object(_.a)(Object(_.a)({},e[r]),{},{error:n[r]})))},ge=r(41),ye=r.n(ge),ke=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({email:{value:"",error:null,touched:!1},message:{value:"",error:null,touched:!1}}),o=Object(s.a)(a,2),i=o[0],l=o[1],j=function(e){l(function(e,t){var r=t.target.name;return Object(_.a)(Object(_.a)({},e),{},Object(ve.a)({},r,Object(_.a)(Object(_.a)({},e[r]),{},{value:t.target.value})))}(i,e))},u=function(e){l(function(e,t){var r=t.target.name;return Object(_.a)(Object(_.a)({},e),{},Object(ve.a)({},r,Object(_.a)(Object(_.a)({},e[r]),{},{touched:!0})))}(i,e))},b=function(e){l(_e(i,e))};return Object(d.jsx)("section",{className:fe.a.Contact,children:Object(d.jsxs)("div",{className:fe.a.ContactWrapper,children:[Object(d.jsx)("h2",{children:"Contact Me"}),Object(d.jsxs)("form",{className:fe.a.Form,onSubmit:function(e){if(e.preventDefault(),t=i,!Object.keys(t).every((function(e){return t[e].touched&&!t[e].error})))return!1;var t;c(!0),setTimeout((function(){console.log(i),c(!1)}),2e3)},children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("p",{className:fe.a.ErrorMessage,children:i.email.error}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",style:{borderColor:i.email.error&&"red"},autoComplete:"off",onChange:j,onFocus:u,onBlur:b}),Object(d.jsx)("label",{children:"Message"}),Object(d.jsx)("p",{className:fe.a.ErrorMessage,children:i.message.error}),Object(d.jsx)("textarea",{name:"message",id:"message",style:{borderColor:i.message.error&&"red"},onChange:j,onFocus:u,onBlur:b}),Object(d.jsx)(k,{type:"submit",disabled:r,children:r?Object(d.jsx)(ye.a,{color:"#eeeeee",height:"10px",radius:"2px"}):"Send"})]})]})})},we=r(46),Ce=r.n(we),Ne=function(){var e=Object(n.useContext)(h);return Object(d.jsxs)("footer",{className:Ce.a.Footer,style:{backgroundColor:e?x.primary:m.primary},children:[Object(d.jsxs)("p",{children:["Developed by Sina Beyraghdar \xa9 ",(new Date).getFullYear()]}),Object(d.jsxs)("p",{className:Ce.a.Photographer,children:["Pian delle Betulle, Italy. Photo by ",Object(d.jsx)("a",{href:"https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",style:{color:e?m.primary:x.secondary},children:"Alessio Soggetti"})," on ",Object(d.jsx)("a",{href:"https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",style:{color:e?m.primary:x.secondary},children:"Unsplash."})]})]})},Se=r(4),Pe=r(47),De=r.n(Pe),Fe=r(71),Be=r.n(Fe),Me=function(){return Object(d.jsxs)("header",{className:Be.a.Header,children:[Object(d.jsx)(F.b,{to:"/",children:"Dashboard"}),Object(d.jsx)(W,{to:"/create",children:"Create a new project"})]})},We=r(72),Le=r.n(We),Te=r(48),Ee=r.n(Te),Ie=function(e){var t=e.title,r=e.projectID;return Object(d.jsxs)("div",{className:Ee.a.Project,children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("div",{className:Ee.a.Controllers,children:Object(d.jsx)(W,{to:"/"+r,children:"Edit"})})]})},Ae=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(n.useState)(!1),u=Object(s.a)(j,2),b=u[0],h=u[1],p=function(){var e=Object(re.a)(te.a.mark((function e(){var t,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),h(!0),e.prev=2,e.next=5,be.get("/projects?titleOnly=true");case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,c(r),h(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),l(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var O=r.map((function(e){return Object(d.jsx)(Ie,{title:e.title,projectID:e._id},e+Math.random())}));return Object(d.jsxs)("div",{className:Le.a.Projects,children:[i&&Object(d.jsx)(Z,{children:i.message}),b?Object(d.jsx)(de.ScaleLoader,{color:"#f7f7f7"}):O]})},Re=r(16),Je=r(27),qe=r.n(Je),Ue=r(73),Ye=r.n(Ue),He=function(e){var t,r=e.type,n=e.label,c=e.name,a=e.id,o=e.value,s=e.accept,i=e.onChange,l=e.onFocus,j=e.onBlur;switch(r){case"text":t=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("input",{name:c,id:a,type:"text",value:o,onChange:i,onFocus:l,onBlur:j})]});break;case"file":t=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("input",{name:c,id:a,type:"file",accept:s,onChange:i,onFocus:l,onBlur:j})]});break;case"textarea":t=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("textarea",{name:c,id:a,type:"file",accept:s,value:o,onChange:i,onFocus:l,onBlur:j})]});break;default:return null}return Object(d.jsx)("div",{className:Ye.a.Input,children:t})},Ze=function(e){var t=Object.keys(e).every((function(t){return"preview"===t?e[t]:"tech"===t?e.tech.every((function(e){return e.length})):e[t].length}));return t},Ge=function(e){var t=e.submit,r=e.loading,c=e.error,a=Object(n.useState)({title:"",preview:null,demo:"",code:"",description:"",tech:[""]}),o=Object(s.a)(a,2),i=o[0],l=o[1],j=function(e){l(function(e,t){var r=t.target.name;if("tech"===r){var n=Object(Re.a)(e.tech);return n[t.target.id]=t.target.value,Object(_.a)(Object(_.a)({},e),{},{tech:n})}if("preview"===r){var c=Object(s.a)(t.target.files,1)[0];return c?Object(_.a)(Object(_.a)({},e),{},{preview:c}):Object(_.a)(Object(_.a)({},e),{},{preview:null})}return Object(_.a)(Object(_.a)({},e),{},Object(ve.a)({},r,t.target.value))}(i,e))},u=function(e){e.preventDefault();var r=new FormData;Object.keys(i).forEach((function(e){if("tech"===e)return i[e].forEach((function(e){r.append("tech[]",e)}));r.append(e,i[e])})),Ze(i)&&t(r)},b=i.tech.map((function(e,t){return Object(d.jsx)(He,{type:"text",label:"Tech "+(t+1),name:"tech",id:t,value:i.tech[t],onChange:j},t)}));return Object(d.jsx)("div",{className:qe.a.CreateForm,children:Object(d.jsxs)("form",{className:qe.a.Form,onSubmit:u,children:[c&&Object(d.jsx)(Z,{children:c.message}),Object(d.jsx)(He,{type:"text",label:"Title",name:"title",id:"title",value:i.title,onChange:j},"title"),Object(d.jsx)(He,{type:"text",label:"Demo Link",id:"demo",name:"demo",value:i.demo,onChange:j},"demo"),Object(d.jsx)(He,{type:"text",label:"Code Link",id:"code",name:"code",value:i.code,onChange:j},"code"),Object(d.jsx)(He,{type:"textarea",label:"Description",name:"description",id:"description",value:i.description,onChange:j},"description"),Object(d.jsx)(He,{type:"file",label:"Preview",name:"preview",id:"preview",accept:"image/png, image/jpeg",onChange:j},"preview"),i.preview?Object(d.jsx)("img",{className:qe.a.Preview,src:URL.createObjectURL(i.preview),alt:"upload-preview"}):null,Object(d.jsx)("div",{className:qe.a.Technologies,children:b}),Object(d.jsxs)("div",{className:qe.a.ButtonsWrapper,children:[Object(d.jsx)(k,{type:"button",onClick:function(){var e=Object(Re.a)(i.tech);e.push(""),l(Object(_.a)(Object(_.a)({},i),{},{tech:e}))},children:"Add Tech"}),Object(d.jsx)(k,{type:"button",onClick:function(){if(!(i.tech.length<2)){var e=Object(Re.a)(i.tech);e.pop(),l(Object(_.a)(Object(_.a)({},i),{},{tech:e}))}},children:"Delete Tech"}),Object(d.jsx)(D,{type:"submit",onClick:u,disabled:r||!Ze(i),children:r?Object(d.jsx)(de.ScaleLoader,{color:"#eeeeee",height:"10px",radius:"2px"}):"Create"})]})]})})},ze=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(null),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(Se.g)(),u=function(){var e=Object(re.a)(te.a.mark((function e(t){var r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),l(null),e.prev=2,e.next=5,be.post("/projects",t);case 5:r=e.sent,c(!1),201===r.status&&j.replace("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),l(e.t0),c(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsx)(Ge,{submit:u,loading:r,error:i})})},Ke=r(17),Xe=r.n(Ke),Ve=function(e){var t=Object.keys(e).every((function(t){return"preview"===t||("tech"===t?e.tech.every((function(e){return e.length})):e[t].length)}));return t},Qe=function(e){var t=e.submit,r=e.deleteProject,c=e.preData,a=e.loading,o=e.error,i=Object(n.useState)({title:"",preview:null,demo:"",code:"",description:"",tech:[""]}),l=Object(s.a)(i,2),j=l[0],u=l[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),p=h[0],O=h[1],x=function(e){u(function(e,t){var r=t.target.name;if("tech"===r){var n=Object(Re.a)(e.tech);return n[t.target.id]=t.target.value,Object(_.a)(Object(_.a)({},e),{},{tech:n})}if("preview"===r){var c=Object(s.a)(t.target.files,1)[0];return c?Object(_.a)(Object(_.a)({},e),{},{preview:c}):Object(_.a)(Object(_.a)({},e),{},{preview:null})}return Object(_.a)(Object(_.a)({},e),{},Object(ve.a)({},r,t.target.value))}(j,e))},m=function(e){e.preventDefault();var r=new FormData;Object.keys(j).forEach((function(e){if("preview"!==e||j.preview)return"tech"===e?j[e].forEach((function(e){r.append("tech[]",e)})):void r.append(e,j[e])})),Ve(j)&&t(r)};Object(n.useEffect)((function(){if(Object.keys(c).length){var e=Object(_.a)({},j);Object.keys(c).forEach((function(t){"_id"!==t&&"preview"!==t&&(e[t]=c[t])})),u(e)}}),[c]);var f=j.tech.map((function(e,t){return Object(d.jsx)(He,{type:"text",label:"Tech "+(t+1),name:"tech",id:t,value:j.tech[t],onChange:x},t)}));return Object(d.jsx)("div",{className:Xe.a.EditForm,children:Object(d.jsxs)("form",{className:Xe.a.Form,onSubmit:m,children:[o&&Object(d.jsx)(Z,{children:o.message}),Object(d.jsx)(He,{type:"text",label:"Title",name:"title",id:"title",value:j.title,onChange:x},"title"),Object(d.jsx)(He,{type:"text",label:"Demo Link",id:"demo",name:"demo",value:j.demo,onChange:x},"demo"),Object(d.jsx)(He,{type:"text",label:"Code Link",id:"code",name:"code",value:j.code,onChange:x},"code"),Object(d.jsx)(He,{type:"textarea",label:"Description",name:"description",id:"description",value:j.description,onChange:x},"description"),Object(d.jsx)(He,{type:"file",label:"Preview",name:"preview",id:"preview",accept:"image/png, image/jpeg",onChange:x},"preview"),Object(d.jsx)("div",{className:Xe.a.Previews,children:j.preview?Object(d.jsx)("img",{className:Xe.a.Preview,src:URL.createObjectURL(j.preview),alt:"upload-preview"}):Object(d.jsx)("img",{className:Xe.a.Preview,src:c.preview,alt:"upload-preview"})}),Object(d.jsx)("div",{className:Xe.a.Technologies,children:f}),Object(d.jsxs)("div",{className:Xe.a.ButtonsWrapper,children:[Object(d.jsx)(k,{type:"button",onClick:function(){var e=Object(Re.a)(j.tech);e.push(""),u(Object(_.a)(Object(_.a)({},j),{},{tech:e}))},children:"Add Tech"}),Object(d.jsx)(k,{type:"button",onClick:function(){if(!(j.tech.length<2)){var e=Object(Re.a)(j.tech);e.pop(),u(Object(_.a)(Object(_.a)({},j),{},{tech:e}))}},children:"Delete Tech"}),Object(d.jsx)(D,{type:"submit",onClick:m,disabled:a||!Ve(j),children:a?Object(d.jsx)(de.ScaleLoader,{color:"#eeeeee",height:"10px",radius:"2px"}):"Update"}),p?Object(d.jsxs)("div",{className:Xe.a.ConfirmDeleteButtons,children:[Object(d.jsx)(k,{type:"button",onClick:function(){r()},children:"Yes"}),Object(d.jsx)(k,{type:"button",onClick:function(){O(!1)},children:"No"})]}):Object(d.jsx)(N,{type:"button",onClick:function(){O(!0)},children:"Delete"})]})]})})},$e=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(n.useState)(null),u=Object(s.a)(j,2),b=u[0],h=u[1],p=Object(n.useState)(null),O=Object(s.a)(p,2),x=O[0],m=O[1],f=Object(Se.h)().projectID,v=Object(Se.g)(),_=function(){var e=Object(re.a)(te.a.mark((function e(t){var r,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),h(null),e.prev=2,e.next=5,be.patch("/projects/"+f,t);case 5:return r=e.sent,e.next=8,r.data;case 8:n=e.sent,c(n),l(!1),200===r.status&&v.replace("/"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),h(e.t0),l(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(re.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),h(null),e.prev=2,e.next=5,be.delete("/projects/"+f);case 5:t=e.sent,l(!1),200===t.status&&v.replace("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),h(e.t0),l(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=function(){var e=Object(re.a)(te.a.mark((function e(){var t,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(null),e.prev=1,e.next=4,be.get("/projects/"+f);case 4:return t=e.sent,e.next=7,t.data;case 7:r=e.sent,c(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),m(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),Object(d.jsx)("div",{children:x?Object(d.jsx)(Z,{children:x.message}):Object(d.jsx)(Qe,{submit:_,deleteProject:g,preData:r,loading:i,error:b})})},et=function(){return Object(d.jsx)("div",{className:De.a.Dashboard,children:Object(d.jsxs)("div",{className:De.a.DashboardWrapper,children:[Object(d.jsx)(Me,{}),Object(d.jsxs)(Se.d,{children:[Object(d.jsx)(Se.b,{path:"/create",component:ze}),Object(d.jsx)(Se.b,{path:"/:projectID",component:$e}),Object(d.jsx)(Se.b,{path:"/",component:Ae})]})]})})},tt=function(){var e=Object(n.useContext)(h),t=window.location.host.split(".");return Object(d.jsx)("div",{style:{color:e?"#f7f7f7":"#1e262c"},children:Object(d.jsxs)(Se.d,{children:["dashboard"===t[0].toLowerCase()&&Object(d.jsx)(Se.b,{component:et}),Object(d.jsxs)(Se.b,{exact:!0,path:"/",children:[Object(d.jsx)($,{}),Object(d.jsx)(xe,{}),Object(d.jsx)(he,{}),Object(d.jsx)(ke,{}),Object(d.jsx)(Ne,{})]}),Object(d.jsx)(Se.a,{to:"/"})]})})},rt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,135)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F.a,{children:Object(d.jsx)(O,{children:Object(d.jsx)(tt,{})})})}),document.getElementById("root")),rt()},17:function(e,t,r){e.exports={Form:"EditForm_Form__1jAkA",Preview:"EditForm_Preview__cp6W6",Technologies:"EditForm_Technologies__1JSnO",Remove:"EditForm_Remove__1WfsL",ButtonsWrapper:"EditForm_ButtonsWrapper__kGW6R",ConfirmDeleteButtons:"EditForm_ConfirmDeleteButtons__3_jgk"}},21:function(e,t,r){e.exports={Project:"Project_Project__3X4Za",Dark:"Project_Dark__2U7_O",DesktopPreview:"Project_DesktopPreview__Y4lMS",MobilePreview:"Project_MobilePreview__3LnP7",Links:"Project_Links__c7p-c",Description:"Project_Description__2j1V_",Technologies:"Project_Technologies__1ZeZQ"}},24:function(e,t,r){e.exports={Navbar:"Navbar_Navbar__1IxrI",NavbarWrapper:"Navbar_NavbarWrapper__3gKt1",Logo:"Navbar_Logo__fva-O",DarkMode:"Navbar_DarkMode__1_4AU",Links:"Navbar_Links__lWYs_"}},25:function(e,t,r){e.exports={Switch:"DarkModeCheckbox_Switch__3bMit",Slider:"DarkModeCheckbox_Slider__2To-i",Round:"DarkModeCheckbox_Round__2bz5v",Sun:"DarkModeCheckbox_Sun__1unWy",Moon:"DarkModeCheckbox_Moon__2IzNd"}},26:function(e,t,r){e.exports={Contact:"Contact_Contact__2CqGJ",ContactWrapper:"Contact_ContactWrapper__qszKo",Form:"Contact_Form__Doakq"}},27:function(e,t,r){e.exports={Form:"CreateForm_Form__dgNhy",Preview:"CreateForm_Preview__1u4fO",Technologies:"CreateForm_Technologies__33TOT",Remove:"CreateForm_Remove__1hII_",ButtonsWrapper:"CreateForm_ButtonsWrapper__2r3gl"}},30:function(e,t,r){e.exports={Menu:"Menu_Menu__2ZuO5",Open:"Menu_Open__1ijrF",Links:"Menu_Links__2qKIN",DarkMode:"Menu_DarkMode__21uee"}},38:function(e,t,r){e.exports={Work:"Work_Work__2dMVG",WorkWrapper:"Work_WorkWrapper__1pfAr",Projects:"Work_Projects__1J-48"}},43:function(e,t,r){e.exports={Burger:"Burger_Burger__1SW35",Open:"Burger_Open__kmZw0"}},45:function(e,t,r){e.exports={Showcase:"Showcase_Showcase__-yROG",ShowcaseWrapper:"Showcase_ShowcaseWrapper__3qnN2"}},46:function(e,t,r){e.exports={Footer:"Footer_Footer__238hM",Photographer:"Footer_Photographer__5YdhO"}},47:function(e,t,r){e.exports={Dashboard:"Dashboard_Dashboard__jFBog",DashboardWrapper:"Dashboard_DashboardWrapper__2VOJ5"}},48:function(e,t,r){e.exports={Project:"Project_Project__3-ZAA",Controllers:"Project_Controllers__2JWKw"}},60:function(e,t,r){e.exports={PrimaryButton:"PrimaryButton_PrimaryButton__2EhWT"}},61:function(e,t,r){e.exports={SecondaryButton:"SecondaryButton_SecondaryButton__1y7dH"}},62:function(e,t,r){e.exports={WarningButton:"WarningButton_WarningButton__IfnJK"}},63:function(e,t,r){e.exports={ConfirmButton:"ConfirmButton_ConfirmButton__T2fGD"}},64:function(e,t,r){e.exports={PrimaryLink:"PrimaryLink_PrimaryLink__2Q6Mf"}},66:function(e,t,r){e.exports={SecondaryLink:"SecondaryLink_SecondaryLink__zqs7f"}},67:function(e,t,r){e.exports={SecondaryAnchor:"SecondaryAnchor_SecondaryAnchor__3qBJk"}},68:function(e,t,r){e.exports={PrimaryAnchor:"PrimaryAnchor_PrimaryAnchor__1rTN_"}},69:function(e,t,r){},70:function(e,t,r){e.exports={ErrorMessage:"ErrorMessage_ErrorMessage__3XarM"}},71:function(e,t,r){e.exports={Header:"Header_Header__2jRAN"}},72:function(e,t,r){e.exports={Projects:"Projects_Projects__3t1AY"}},73:function(e,t,r){e.exports={Input:"Input_Input__3Knvh"}},75:function(e,t,r){}},[[134,1,2]]]);
//# sourceMappingURL=main.324320d9.chunk.js.map