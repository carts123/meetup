(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(65),s=n.n(c),o=(n(202),n(23)),i=n(30),u=n(24),l=n(25),h=(n(203),n(204),n(6)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsxs)("div",{className:"event-overview",children:[Object(h.jsx)("h2",{className:"summary",children:t.summary}),Object(h.jsx)("p",{className:"location",children:t.location}),Object(h.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(h.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Show Event Details"}),e&&Object(h.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Hide Event Details"})]}),e&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("p",{className:"description",children:t.description}),Object(h.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(h.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(h.jsx)("p",{className:"organizer-email",children:t.organizer.email})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="purple",a}return n}(v),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Cannot be found"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(j,{text:this.state.infoText}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Search for a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),O=n(67),g=n(169),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please enter a number between 1 and 32."}):(e.setState({infoText:""}),e.throttleHandleInputChanged(n))},e.throttleHandleInputChanged=Object(g.debounce)(e.throttleHandleInputChanged.bind(Object(O.a)(e)),500),e.handleInputChanged=e.handleInputChanged.bind(Object(O.a)(e)),e}return Object(i.a)(n,[{key:"throttleHandleInputChanged",value:function(e){this.props.updateEvents(null,e)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"number-of-events",children:[Object(h.jsx)("label",{className:"number-of-events-label",children:"Number of Events: "}),Object(h.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(h.jsx)(b,{text:this.state.infoText})]})}}]),n}(a.Component);x.defaultProps={updateEvents:function(){}};var w=x,y=n(18),k=n(359),S=n(366),C=n(182),N=n(93),E=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(y.a)(n,2),c=r[0],s=r[1];Object(a.useEffect)((function(){s((function(){return o()}))}),[t]);var o=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},i=["#4CC9F0","#F72585","#3A0CA3","#4361EE","#7209B7"];return Object(h.jsx)(k.a,{height:400,children:Object(h.jsx)(S.a,{width:400,height:400,children:Object(h.jsx)(C.a,{data:c,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:c.map((function(e,t){return Object(h.jsx)(N.a,{fill:i[t%i.length],name:e.name},"cell-".concat(t))}))})})})},I=n(33),D=n.n(I),T=n(77),A=n(191),L=n(120),U=n.n(L),W=n(121),F=n.n(W),P=function(e){var t=e.map((function(e){return e.location}));return Object(A.a)(new Set(t))},z=function(){var e=Object(T.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(T.a)(D.a.mark((function e(){var t,n,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F.a.start(),e.next=3,q();case 3:if(!(t=e.sent)){e.next=13;break}return H(),n="https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=9,U.a.get(n);case 9:return(a=e.sent).data&&(r=P(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),F.a.done(),e.abrupt("return",{events:a.data.events,locations:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(T.a)(D.a.mark((function e(){var t,n,a,r,c,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,U.a.get("https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,s=c.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&R(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},R=function(){var e=Object(T.a)(D.a.mark((function e(t){var n,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(363),B=n(364),K=n(187),M=n(188),Q=n(78),Y=n(74),Z=n(192),$=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",alertText:""},e.updateEvents=function(t,n){navigator.onLine?e.setState({alertText:""}):e.setState({alertText:"You are currently offline and viewing cached data from your last visit."});var a=e.state,r=a.currentLocation,c=a.numberOfEvents;t?J().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,c);return e.setState({events:a,currentLocation:t})})):J().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);if(e.mounted)return e.setState({events:a,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,J().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"getData",value:function(){var e=this.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Meet App"}),Object(h.jsx)(m,{locations:t,updateEvents:this.updateEvents}),Object(h.jsx)(w,{numberOfEvents:n,updateEvents:this.updateEvents}),Object(h.jsx)(p,{text:this.state.alertText}),Object(h.jsx)("h4",{children:"Events in each city"}),Object(h.jsxs)("div",{className:"data-vis-wrapper",children:[Object(h.jsx)(E,{events:a}),Object(h.jsx)(k.a,{height:400,children:Object(h.jsxs)(_.a,{margin:{top:20,right:20,bottom:10,left:10},children:[Object(h.jsx)(B.a,{strokeDasharray:"3 3"}),Object(h.jsx)(K.a,{type:"category",dataKey:"city",name:"City"}),Object(h.jsx)(M.a,{type:"number",dataKey:"number",name:"Number of events",allowDecimals:!1}),Object(h.jsx)(Q.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(Y.a,{}),Object(h.jsx)(Z.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(h.jsx)(f,{events:a})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},ee=n(189);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),ee.config("e4588a58f31b45369a112a8cbd907167").install(),X()}},[[358,1,2]]]);
//# sourceMappingURL=main.0ae461ca.chunk.js.map