(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(62),o=n.n(s),c=(n(192),n(23)),i=n(27),u=n(24),l=n(25),h=(n(193),n(194),n(6)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsxs)("div",{className:"event-overview",children:[Object(h.jsx)("h2",{className:"summary",children:t.summary}),Object(h.jsx)("p",{className:"location",children:t.location}),Object(h.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(h.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Show Event Details"}),e&&Object(h.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Hide Event Details"})]}),e&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("p",{className:"description",children:t.description}),Object(h.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(h.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(h.jsx)("p",{className:"organizer-email",children:t.organizer.email})]})]})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(f),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(f),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Cannot be found"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(p,{text:this.state.infoText}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),j=n(64),g=n(162),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please enter a number between 1 and 32."}):(e.setState({infoText:""}),e.throttleHandleInputChanged(n))},e.throttleHandleInputChanged=Object(g.debounce)(e.throttleHandleInputChanged.bind(Object(j.a)(e)),500),e.handleInputChanged=e.handleInputChanged.bind(Object(j.a)(e)),e}return Object(i.a)(n,[{key:"throttleHandleInputChanged",value:function(e){this.props.updateEvents(null,e)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"number-of-events",children:[Object(h.jsx)("label",{className:"number-of-events-label",children:"Number of Events: "}),Object(h.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(h.jsx)(v,{text:this.state.infoText})]})}}]),n}(a.Component);O.defaultProps={updateEvents:function(){}};var w=O,x=n(29),y=n.n(x),k=n(72),S=n(182),C={events:[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],locations:["London, UK"]},T=n(114),E=n.n(T),N=n(92),Z=n.n(N),I=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},D=function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",C);case 4:return e.next=6,q();case 6:if(!(t=e.sent)){e.next=16;break}return A(),n="https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,E.a.get(n);case 12:return(a=e.sent).data&&(r=I(a.data.events.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),Z.a.done(),e.abrupt("return",{events:a.data.events.events,locations:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,s,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ga9ok112sc.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(352),B=n(353),J=n(357),H=n(178),R=n(179),U=n(75),z=n(71),F=n(183),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?M().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,s);return e.setState({events:a,currentLocation:t})})):M().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);if(e.mounted)return e.setState({events:a,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"getData",value:function(){var e=this.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Meet App"}),Object(h.jsx)(b,{locations:t,updateEvents:this.updateEvents}),Object(h.jsx)(w,{numberOfEvents:n,updateEvents:this.updateEvents}),Object(h.jsx)("h4",{children:"Events in each city"}),Object(h.jsx)(W.a,{height:400,children:Object(h.jsxs)(B.a,{margin:{top:20,right:20,bottom:10,left:10},children:[Object(h.jsx)(J.a,{strokeDasharray:"3 3"}),Object(h.jsx)(H.a,{type:"category",dataKey:"city",name:"city"}),Object(h.jsx)(R.a,{type:"number",dataKey:"number",name:"number of events"}),Object(h.jsx)(U.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(z.a,{}),Object(h.jsx)(F.a,{n:!0,data:this.getData(),fill:"#8884d8"})]})}),Object(h.jsx)(m,{events:a})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,359)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},P=n(180);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),P.config("e4588a58f31b45369a112a8cbd907167").install(),Y()}},[[350,1,2]]]);
//# sourceMappingURL=main.778241ff.chunk.js.map