(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(13),s=n.n(i),c=(n(38),n(28)),o=n(29),r=n(33),l=n(32),h=(n(39),n(0)),d=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out "})}):Object(h.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In "}),Object(h.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register "})]})},b=(n(41),function(e){var t=e.imageUrl,n=e.box;return Object(h.jsx)("div",{className:"center ma",children:Object(h.jsxs)("div",{className:"absolute mt2",children:[Object(h.jsx)("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),u=n(30),m=n.n(u),j=(n(42),function(){return Object(h.jsx)("div",{className:"ma4 mt0",children:Object(h.jsx)(m.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:100,width:100},children:Object(h.jsxs)("div",{className:"Tilt-inner pa3",children:[" ",Object(h.jsx)("img",{style:{paddingTop:"5px"},src:"data:image/png;base64,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",alt:"logo"})," "]})})})}),g=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"white f3",children:"Lora, your current rank is ..."}),Object(h.jsx)("div",{className:"white f1",children:"#5"})]})},p=function(e){var t=e.onRouteChange;return Object(h.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(h.jsx)("div",{className:"lh-copy mt3",children:Object(h.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},A=function(e){var t=e.onRouteChange;return Object(h.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},O=(n(43),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"f3",children:"This magic brain will detect faces in your pictures. Give it a try."}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(h.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(h.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),f=n(31),x=n.n(f),w=n(14),v=n.n(w),C={particles:{number:{value:80,density:{enable:!0,value_area:400}}}},N=new v.a.App({apiKey:"6e7b3358503b4e2d9f6216d763035cf7"}),k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),i=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*i,rightCol:a-t.right_col*a,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(v.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.box,a=e.imageUrl,i=e.route;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x.a,{className:"particles",params:C}),Object(h.jsx)(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===i?Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{}),Object(h.jsx)(g,{}),Object(h.jsx)(O,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(b,{box:n,imageUrl:a})]}):"signin"===i?Object(h.jsx)(p,{onRouteChange:this.onRouteChange}):Object(h.jsx)(A,{onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(82);s.a.render(Object(h.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/face-recognition",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/face-recognition","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):E(e)}))}}()}},[[83,1,2]]]);
//# sourceMappingURL=main.58de1a92.chunk.js.map