(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{106:function(e,t,a){e.exports=a(225)},225:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(17),u=a.n(l),o=a(6),i=a.n(o),m=a(12),s=a(82),p=a(83),d=a(99),E=a(98),h=a(256),f=a(257),g=a(45),v=a(258),b=a(260),y=a(44),x=a(84),_=a(23),k=a.n(_),w="https://cors-anywhere.herokuapp.com/https://apps.qmet.de/v1/home_api",j="https://cors-anywhere.herokuapp.com/https://apps.qmet.de/v1/token",O=(n=new Date).getFullYear()+"-"+(n.getMonth()+1<10?"0":"")+(n.getMonth()+1)+"-"+(n.getDate()<10?"0":"")+n.getDate(),T=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(j);case 3:return t=e.sent,a=t.data.data.token,n=k.a.create({baseURL:w,headers:{Authorization:"Bearer ".concat(a)}}),e.next=8,n.get("?city=Wiesbaden&date=".concat(O,"&lat=&lon="));case 8:return r=e.sent,c=r.data,l=c.data.data.hourlyTemp.map((function(e){return{hour:e.hour,Temp:e.Temp}})),e.abrupt("return",l);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(j);case 3:return t=e.sent,a=t.data.data.token,n=k.a.create({baseURL:w,headers:{Authorization:"Bearer ".concat(a)}}),e.next=8,n.get("?city=Wiesbaden&date=".concat(O,"&lat=&lon="));case 8:return r=e.sent,c=r.data,l=c.data.data.today.map((function(e){return{hour:e.hour,Temp:e.Temp,Precipitation:e.Precipitation}})),e.abrupt("return",l);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(j);case 3:return t=e.sent,a=t.data.data.token,n=k.a.create({baseURL:w,headers:{Authorization:"Bearer ".concat(a)}}),e.next=8,n.get("?city=Wiesbaden&date=".concat(O,"&lat=&lon="));case 8:return r=e.sent,c=r.data,l={current_temp:c.data.data.current_temp,t2m_max_day:c.data.data.t2m_max_day,t2m_min_night:c.data.data.t2m_min_night,AirPressure:c.data.data.AirPressure,Windspeed:c.data.data.Windspeed,uv_index:c.data.data.uv_index,Feeling:c.data.data.Feeling},e.abrupt("return",l);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){e.data;var t=Object(r.useState)({}),a=Object(y.a)(t,2),n=a[0],l=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=n.length?c.a.createElement(x.a,{data:{labels:n.map((function(e){return e.hour})),datasets:[{data:n.map((function(e){return e.Temp})),Label:"Infected",borderColor:"#3333ff",fill:!0}]}}):null;return c.a.createElement("div",null,u)},P=a(5),D=a(247),B=a(248),C=a(249),F=a(250),H=a(251),L=a(252),S=Object(P.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14,fontWeight:"bold",backgroundColor:"white"}}}))(D.a),U=Object(P.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(B.a),z=function(e){e.data;var t=Object(r.useState)({}),a=Object(y.a)(t,2),n=a[0],l=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=n.length?c.a.createElement(C.a,null,c.a.createElement(F.a,{"aria-label":"simple table"},c.a.createElement(H.a,null,c.a.createElement(B.a,null,c.a.createElement(S,{align:"center"},"Hour"),c.a.createElement(S,{align:"center"},"Temperature"),c.a.createElement(S,{align:"center"},"Precipitation"))),c.a.createElement(L.a,null,n.map((function(e){return c.a.createElement(U,{key:e.hour},c.a.createElement(S,{align:"center"},e.hour),c.a.createElement(S,{align:"center"},e.Temp),c.a.createElement(S,{align:"center"},e.Precipitation))}))))):null;return c.a.createElement("div",null,u)},q=a(253),N=a(261),R=a(255),I=a(254),J=a(263),Y=a(89),K=a.n(Y),Q=a(91),V=a.n(Q),G=a(90),X=a.n(G),Z=a(92),$=a.n(Z),ee=a(94),te=a.n(ee),ae=a(93),ne=a.n(ae),re=a(95),ce=a.n(re),le=a(96),ue=a.n(le),oe=function(e){var t=e.data,a=t.current_temp,n=t.t2m_max_day,r=t.t2m_min_night,l=t.AirPressure,u=t.Windspeed,o=t.uv_index,i=t.Feeling;return a?c.a.createElement("div",{className:K.a.container},c.a.createElement(q.a,null,c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(X.a,null))),c.a.createElement(R.a,{primary:a,secondary:"Current Temperature"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(V.a,null))),c.a.createElement(R.a,{primary:n,secondary:"Maximum Temperature"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement($.a,null))),c.a.createElement(R.a,{primary:r,secondary:"Minimum Temperature"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(ne.a,null))),c.a.createElement(R.a,{primary:l,secondary:"Air Pressure"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(te.a,null))),c.a.createElement(R.a,{primary:u,secondary:"Wind Speed"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(ce.a,null))),c.a.createElement(R.a,{primary:o,secondary:"UV"})),c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(J.a,null,c.a.createElement(ue.a,null))),c.a.createElement(R.a,{primary:i,secondary:"Feeling"})))):"Data is Loading!..."},ie=a(97),me=a.n(ie),se=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.data,a=(e=new Date).getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate()+" at "+(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes();return c.a.createElement("div",{className:me.a.container},c.a.createElement(h.a,null),c.a.createElement(f.a,{maxWidth:"md",style:{backgroundColor:"#cfe8fc"}},c.a.createElement(v.a,{container:!0,spacing:3},c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(b.a,{m:2,pt:3},c.a.createElement(g.a,{variant:"h5",gutterBottom:!0,align:"center",mt:15},"Wiesbaden Weather on  ",a))),c.a.createElement(v.a,{item:!0,xs:12,sm:6},c.a.createElement(oe,{data:t})),c.a.createElement(v.a,{item:!0,xs:12,sm:6},c.a.createElement(g.a,{variant:"h5",gutterBottom:!0},"Precipitation"),c.a.createElement(z,null)),c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(g.a,{variant:"h5",gutterBottom:!0},"Hourly Temperature"),c.a.createElement(M,null)))))}}]),a}(c.a.Component);u.a.render(c.a.createElement(se,null),document.getElementById("root"))},89:function(e,t,a){},97:function(e,t,a){e.exports={container:"App_container__1MQN3",mainHead:"App_mainHead__2qbUK"}}},[[106,1,2]]]);
//# sourceMappingURL=main.5986a71e.chunk.js.map