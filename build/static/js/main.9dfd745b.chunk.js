(this["webpackJsonpalgo-visualiser"]=this["webpackJsonpalgo-visualiser"]||[]).push([[0],{237:function(e,t,n){},363:function(e,t){},364:function(e,t){},372:function(e,t){},375:function(e,t){},376:function(e,t){},377:function(e,t){},378:function(e,t){},379:function(e,t){},384:function(e,t,n){"use strict";n.r(t);var r=n(9),i=n.n(r),o=n(131),c=n.n(o),a=(n(237),n(425)),s=n(424),l=n(426),u=n(421),d=n(310),h=n.n(d),b=n(420),f=n(52),p=n(24);function m(e){var t=Object(f.f)(),n="true"==e.isHome;return Object(p.jsx)(s.a,{children:Object(p.jsx)(a.a,{position:"sticky",style:{background:"#071a2f"},children:Object(p.jsxs)(l.a,{align:"center",children:[Object(p.jsx)(b.a,{disabled:n,id:"return",sx:{color:"white"},onClick:function(){t("/")},children:Object(p.jsx)(h.a,{})}),Object(p.jsx)(u.a,{variant:"h5",component:"div",sx:{flexGrow:1},fontWeight:"bold",children:e.title}),Object(p.jsx)(b.a,{disabled:"true",id:"return",sx:{color:"white"}})]})})})}var x=n(419),j=n(422),g=n(423);var v=function(){var e=Object(f.f)();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{children:Object(p.jsx)(m,{title:"Algorithm Visualiser",isHome:"true"})}),Object(p.jsx)(x.a,{elevation:0,sx:{mt:2,mb:2,bgcolor:"#20262d"},children:Object(p.jsxs)(j.a,{sx:{p:5,bgcolor:"#121212",color:"#FFFFFF",borderRadius:2,border:1},align:"center",children:[Object(p.jsx)(u.a,{variant:"h4",sx:{mt:2,mb:2},children:Object(p.jsx)("b",{children:"Welcome"})}),Object(p.jsx)(u.a,{variant:"h6",sx:{mt:2,mb:2},children:"Select type of visualisation"}),Object(p.jsx)(g.a,{style:{background:"white"}}),Object(p.jsx)(b.a,{sx:{p:2,color:"white"},id:"Pathfinding",onClick:function(){e("/pathfinding")},children:"Pathfinding"}),Object(p.jsx)(b.a,{sx:{p:2,color:"white"},id:"ArraySort",onClick:function(){e("/arraysorting")},children:"Array Sorting"}),Object(p.jsx)(g.a,{style:{background:"white"}}),Object(p.jsx)(b.a,{sx:{p:2,color:"white"},id:"AI",onClick:function(){e("/detection")},children:"Prediction"})]})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,427)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))},O=n(217),k=n(1),w=n(418),E=n(311),C=n.n(E),F=n(2),I=n.n(F),A=n(14),S=n(6),T=n(15),B=function(){function e(t){Object(S.a)(this,e),this.object=null,this.visited=!1,this.distance=Number.MAX_VALUE,this.heuristic=Number.MAX_VALUE,this.totalcost=Number.MAX_VALUE,this.label="blank",this.previous=null,this.id=null,this.traversable=!0,this.object=document.getElementById(t),"purple"!==this.object.style.color&&"red"!=this.object.style.color||(this.visited=!0),this.id=parseInt(this.object.id)}return Object(T.a)(e,[{key:"visit",value:function(){this.visited=!0,console.log("Changed state"),"red"!=this.object.style.color&&"green"!=this.object.style.color&&(this.object.style.color="blue")}},{key:"update_costs",value:function(e,t){this.distance=e,this.heuristic=t,this.totalcost=e+t}}]),e}();function M(){return N.apply(this,arguments)}function N(){return(N=Object(A.a)(I.a.mark((function e(){var t,n,r,i,o,c,a,s,l,u,d,h,b,f,p,m,x,j,g,v,y;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=performance.now(),n=document.querySelectorAll("button"),r=["Djikstras","Edit","A-Star","TargetNode","StartNode","Save","Reset","ResetVisitedNodes","Increase","Decrease"],i={},n.forEach((function(e){if(!r.includes(e.getAttribute("id"))){var t=new B(e.id);switch(e.style.color){case"black":t.visited=!0;break;case"green":o=t;break;case"red":t.distance=0,c=t}i[e.id]=t}})),null!=c&&null!=o){e.next=8;break}return alert("No start or destination node has been specified. Please try again."),e.abrupt("return");case 8:a=[],s=c,l=1,u=!1,d=0,h=null,b=0,f=I.a.mark((function e(){var t,n,r,c,f,m,x;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=Number.MAX_VALUE,n=0,r=Object.entries(i);n<r.length;n++)c=Object(k.a)(r[n],2),c[0],(f=c[1]).visited||a.push(f);if(a.length==d&&h==s&&(b+=1),10==b&&(alert("There is no route to the destination node."),u=!0),a.forEach((function(e){e.distance<t&&(s=e,t=e.distance)})),console.log(s.id),p=s.id,m=[i[H(p,"-",1)],i[H(p,"+",1)],i[H(p,"-",20)],i[H(p,"+",20)]],s.visit(),m.forEach((function(e){null!=e&&s.distance<=e.distance&&"black"!=e.object.style.color&&"red"!=e.object.style.color&&!e.visited&&(e.distance=s.distance+1,e.previous=s,i[e.id]=e)})),i[s.id].visit(),d=a.length,h=i[s.id],a=[],o=i[o.id],(l+=1)%4!=0){e.next=20;break}return x=new Promise((function(e,t){setTimeout((function(){return e()}),100)})),e.next=20,x;case 20:case 21:case"end":return e.stop()}}),e)}));case 16:if(o.visited||u){e.next=20;break}return e.delegateYield(f(),"t0",18);case 18:e.next=16;break;case 20:m=!1,s=o;case 22:if(m||u){e.next=34;break}if((x=s.previous).id!=c.id){e.next=27;break}return m=!0,e.abrupt("break",34);case 27:return x.object.style.color="gold",s=x,j=new Promise((function(e,t){setTimeout((function(){return e()}),50)})),e.next=32,j;case 32:e.next=22;break;case 34:g=performance.now(),v=document.getElementById("timer"),y=Math.round(g-t),v.textContent="The last computation took "+y+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(ElogV) E = Edges, V = Vertices. It doesn't use a heuristic, and is simple to implement.";case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n){var r=Math.floor(e/20),i="-"==t?e-n:e+n,o=Math.floor(i/20);return 1==n&&o!=r||20==n&&"-"==t&&o!=r-1||20==n&&"+"==t&&o!=r+1?null:i}function R(){return D.apply(this,arguments)}function D(){return(D=Object(A.a)(I.a.mark((function e(){var t,n,r,i,o,c,a,s,l,u,d,h,b,f,p,m,x,j,g,v,y,O,k,w;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=performance.now(),n=document.querySelectorAll("button"),r=["Djikstras","Edit","A-Star","TargetNode","StartNode","Save","Reset","ResetVisitedNodes","Increase","Decrease"],i={},a=[],n.forEach((function(e){if(!r.includes(e.getAttribute("id"))){var t=new B(e.id);switch(e.style.color){case"black":t.visited=!0,t.traversable=!1;break;case"green":o=t;break;case"red":t.totalcost=0,t.distance=0,c=t}i[e.id]=t,a.push(t)}})),null!=c&&null!=o){e.next=9;break}return alert("No start or destination node has been specified. Please try again."),e.abrupt("return");case 9:s=[],u=!1,d=1,(l=[]).push(c);case 14:if(o.visited||u){e.next=37;break}if(0!=l.length){e.next=19;break}return alert("There is no route to the destination node."),u=!0,e.abrupt("continue",14);case 19:for(h=l[0],console.log(l.length),b=0;b<l.length;b++)l[b].totalcost<h.totalcost&&(h=l[b]);for(l=P(l,h),h.visit(),s.push(i[h.id]),h==o&&o.visit(),f=h.id,p=[i[q(f,"-",1)],i[q(f,"+",1)],i[q(f,"-",20)],i[q(f,"+",20)]],b=0;b<p.length;b++)null!=p[b]&&(!p[b].traversable||s.includes(p[b])?console.log("not traversable or is in visited list"):((m=h.distance+1)<p[b].distance||!l.includes(p[b]))&&(console.log("A new shortest path has been found or is not in open list"),p[b].update_costs(m,V(o.id,p[b].id)),p[b].previous=h,l.includes(p[b])||(console.log("Added to open list, new length"+(l.length+1)),l.push(p[b]))));if((d+=1)%4!=0){e.next=34;break}return x=new Promise((function(e,t){setTimeout((function(){return e()}),100)})),e.next=34,x;case 34:e.next=14;break;case 37:j=!1,g=o;case 39:if(j||u){e.next=51;break}if((v=g.previous).id!=c.id){e.next=44;break}return j=!0,e.abrupt("break",51);case 44:return v.object.style.color="gold",g=v,y=new Promise((function(e,t){setTimeout((function(){return e()}),50)})),e.next=49,y;case 49:e.next=39;break;case 51:O=performance.now(),k=document.getElementById("timer"),w=Math.round(O-t),k.textContent="The last computation took "+w+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(E) E = Edges. It uses a heuristic and is harder to implement (vs Dijkstras).";case 57:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){for(var n=[],r=0;r<e.length;r++)e[r].id!=t.id&&n.push(e[r]);return n}function V(e,t){var n=Math.floor(e/20),r=Math.floor(t/20),i=e%20,o=t%20;return Math.abs(r-n)+Math.abs(o-i)}function q(e,t,n){var r=Math.floor(e/20),i="-"==t?e-n:e+n,o=Math.floor(i/20);return 1==n&&o!=r||20==n&&"-"==t&&o!=r-1||20==n&&"+"==t&&o!=r+1?null:i}function L(){var e=r.useState(300),t=Object(k.a)(e,2),n=t[0],i=t[1],o=["Djikstras","Edit","A-Star","TargetNode","StartNode","Save","Reset","ResetVisitedNodes","Increase","Decrease"];function c(e,t){var n=document.getElementById(e),r=!1;if(n.style.color===t)n.style.color="white",r=!0;else if("black"!==t){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||e.style.color===t&&(e.style.color="white")}))}r||(n.style.color=t)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)(m,{title:"Pathfinding Algorithms"})}),Object(p.jsx)(x.a,{elevation:0,sx:{mt:2,mb:2,bgcolor:"#20262d"},children:Object(p.jsxs)(j.a,{sx:{p:1,bgcolor:"#121212",color:"#FFFFFF",borderRadius:2,border:1},align:"center",children:[Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Edit",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||(e.onclick=function(){c(e.id,"black")})}))},children:"Edit Grid"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"StartNode",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||(e.onclick=function(){c(e.id,"red")})}))},children:"Start Node"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"TargetNode",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||(e.onclick=function(){c(e.id,"green")})}))},children:"Target Node"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Save",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||(e.onclick=null)}))},children:"Save"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Reset",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||(e.style.color="white")}))},children:"Reset Entire Grid"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Increase",onClick:function(){i(n+100)},children:"Increase Grid"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Decrease",onClick:function(){n>100?i(n-100):alert("Cannot decrease cells any further")},children:"Decrease Grid"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"ResetVisitedNodes",onClick:function(){document.querySelectorAll("button").forEach((function(e){o.includes(e.getAttribute("id"))||"blue"!=e.style.color&&"gold"!=e.style.color||(e.style.color="white")}))},children:"Reset Visisted Nodes"}),Object(p.jsx)(g.a,{style:{background:"white"}}),Object(p.jsx)(b.a,{sx:{p:1,color:"white",ml:5},id:"Djikstras",onClick:M,children:"Dijkstra's"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"A-Star",onClick:R,children:"A-Star"}),Object(p.jsx)(g.a,{style:{background:"white"}}),Object(p.jsx)(u.a,{id:"timer",sx:{p:1},variant:"h6",children:"The last computation took 0ms to complete"}),Object(p.jsx)(u.a,{id:"complexity",sx:{p:1},variant:"h6"})]})}),Object(p.jsx)(j.a,{sx:{p:2},children:Object(p.jsx)(w.a,{container:!0,spacing:0,columns:20,children:function(){for(var e=[],t=0;t<n;t++)e.push(t);return e.map((function(e){return Object(p.jsx)(w.a,{item:!0,xs:1,children:Object(p.jsx)(b.a,{cell:!0,id:e,sx:{color:"white"},children:Object(p.jsx)(C.a,{})})})}))}()})})]})}var U=function(){function e(t){Object(S.a)(this,e),this.object=null,this.value=0,this.object=document.getElementById(t),this.value=parseInt(this.object.getAttribute("value"))}return Object(T.a)(e,[{key:"setColour",value:function(e){this.object.style.background=e}},{key:"setHeight",value:function(e){this.object.style.minHeight=e+"px",this.value=e}}]),e}();function _(){return(_=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a,s,l,u,d,h,b,f,p;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=performance.now(),r=[],i=0;i<t;i++)o=new U(i),r.push(o);if(c=!0,t>200&&(c=window.confirm("Bubble sort will take a long time to complete for datasets of this size")),!c){e.next=36;break}a=t-1,i=0;case 8:if(!(i<a)){e.next=35;break}s=!1,l=null,u=0;case 12:if(!(u<a)){e.next=29;break}if(!(r[u].value>r[u+1].value)){e.next=26;break}return r[u].setColour("green"),r[u+1].setColour("green"),d=new Promise((function(e,t){setTimeout((function(){return e()}),1)})),e.next=19,d;case 19:h=r[u].value,r[u].setHeight(r[u+1].value),r[u+1].setHeight(h),r[u].setColour("white"),r[u+1].setColour("white"),l=r[u+1],s=!0;case 26:u++,e.next=12;break;case 29:if(null!=l&&l.setColour("blue"),0!=s){e.next=32;break}return e.abrupt("break",35);case 32:i++,e.next=8;break;case 35:r.forEach((function(e){e.setColour("blue")}));case 36:b=performance.now(),f=document.getElementById("timer"),p=Math.round(b-n),f.textContent="The last computation took "+p+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(n\xb2). It is simple to implement.";case 42:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=n(20);function G(e){return new Promise((function(t){return setTimeout(t,e)}))}function X(){return(X=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=performance.now(),r=[],i=0;i<t;i++)o=new U(i),r.push(o);return e.next=5,Y(r);case 5:c=performance.now(),a=document.getElementById("timer"),s=Math.round(c-n),a.textContent="The last computation took "+s+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(n logn). It uses recursion do divide lists and rebuild.";case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return W.apply(this,arguments)}function W(){return(W=Object(A.a)(I.a.mark((function e(t,n){var r,i,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],i=[],t.forEach((function(e){i.push(parseInt(e.object.id))})),n.forEach((function(e){i.push(parseInt(e.object.id))}));t.length&&n.length;)t[0].value<n[0].value?r.push(t.shift()):r.push(n.shift());o=[].concat(r,Object(z.a)(t),Object(z.a)(n)),i.sort((function(e,t){return e-t})),c=0;case 8:if(!(c<o.length)){e.next=16;break}return document.getElementById(i[c]).style.minHeight=o[c].value+"px",document.getElementById(i[c]).style.background="blue",e.next=13,G(1);case 13:c++,e.next=8;break;case 16:return console.log(i),e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return K.apply(this,arguments)}function K(){return(K=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t.forEach((function(e){n.push(e)})),r=n.length/2,!(n.length<2)){e.next=5;break}return e.abrupt("return",n);case 5:return i=n.splice(0,r),e.next=8,Y(i);case 8:return o=e.sent,e.next=11,Y(n);case 11:return c=e.sent,e.next=14,J(o,c);case 14:return a=e.sent,e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return new Promise((function(t){return setTimeout(t,e)}))}function Z(){return(Z=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a,s,l,u,d,h,b;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=performance.now(),r=[],i=0;i<t;i++)o=new U(i),r.push(o);if(c=!0,t>200&&(c=window.confirm("Insertion sort will take a long time to complete for datasets of this size")),!c){e.next=39;break}a=1;case 7:if(!(a<r.length)){e.next=25;break}s=r[a].value,r[a].setColour("green"),l=a-1;case 11:if(!(l>-1&&s<r[l].value)){e.next=19;break}return r[l+1].value=r[l].value,r[l+1].setHeight(r[l].value),e.next=16,Q(1);case 16:l--,e.next=11;break;case 19:r[l+1].value=s,r[l+1].setHeight(s),r[l+1].setColour("blue");case 22:a++,e.next=7;break;case 25:u=0;case 26:if(!(u<r.length)){e.next=33;break}return r[u].setColour("blue"),e.next=30,Q(1);case 30:u++,e.next=26;break;case 33:d=performance.now(),h=document.getElementById("timer"),b=Math.round(d-n),h.textContent="The last computation took "+b+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(n\xb2). It is simple to implement.";case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return new Promise((function(t){return setTimeout(t,e)}))}function ee(){return(ee=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a,s,l;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=performance.now(),r=[],i=0;i<t;i++)o=new U(i),r.push(o);i=Math.floor(t/2)-1;case 4:if(!(i>=0)){e.next=10;break}return e.next=7,te(r,t,i);case 7:i--,e.next=4;break;case 10:i=t-1;case 11:if(!(i>0)){e.next=24;break}return c=r[0].value,r[0].setHeight(r[i].value),r[0].setColour("blue"),r[i].setHeight(c),r[i].setColour("blue"),e.next=19,$(1);case 19:return e.next=21,te(r,i,0);case 21:i--,e.next=11;break;case 24:a=performance.now(),s=document.getElementById("timer"),l=Math.round(a-n),s.textContent="The last computation took "+l+"ms to complete",document.getElementById("complexity").textContent="The complexity of this algorithm is O(n logn). It uses a (max) heap and recursion in this implementation.";case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t,n){return ne.apply(this,arguments)}function ne(){return(ne=Object(A.a)(I.a.mark((function e(t,n,r){var i,o,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r,c=2*r+2,(o=2*r+1)<n&&t[o].value>=t[i].value&&(i=o),c<n&&t[c].value>=t[i].value&&(i=c),i==r){e.next=16;break}return a=t[r].value,t[r].setHeight(t[i].value),t[r].setColour("green"),t[i].setHeight(a),t[i].setColour("green"),console.log("HEY"),e.next=14,$(1);case 14:return e.next=16,te(t,n,i);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){var e=function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t.map((function(e){var t=d(1,500),n={minHeight:t,background:"white"};return Object(p.jsx)(w.a,{item:!0,xs:1,children:Object(p.jsx)("div",{id:"wrapper",children:Object(p.jsx)("div",{bar:!0,id:e,value:t,class:"verticle-line",style:n})})})}))},t=Object(r.useState)(200),n=Object(k.a)(t,2),i=n[0],o=n[1],c=Object(r.useState)(e(i)),a=Object(k.a)(c,2),s=a[0],l=a[1];function d(e,t){return Math.floor(Math.random()*(t-e))+e}function h(){return(h=Object(A.a)(I.a.mark((function t(){var n,r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<i)){t.next=10;break}return new U(n).object.style.background="white",r=new Promise((function(e,t){setTimeout((function(){return e()}),1)})),t.next=7,r;case 7:n++,t.next=1;break;case 10:c=e(i),document.getElementById("complexity").innerHTML="",o(i),l(c);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)(m,{title:"Sorting Algorithms"})}),Object(p.jsx)(x.a,{elevation:0,sx:{mt:2,mb:2,bgcolor:"#20262d"},children:Object(p.jsxs)(j.a,{sx:{p:1,bgcolor:"#121212",color:"#FFFFFF",borderRadius:2,border:1},align:"center",children:[Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Randomise",onClick:function(){for(var e=0;e<i;e++){document.getElementById(e).style.minHeight=d(1,500)+"px"}},children:"Randomise"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Increase",onClick:function(){var t=i,n=e(t=t<50?i+10:i+50);o(t),l(n)},children:"Increase Size"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Decrease",onClick:function(){var t=i;if(10==t)alert("Array size is at a minimum currently");else{var n=e(t=t<=50&&t>10?i-10:i-50);o(t),l(n)}},children:"Decrease Size"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Reset",onClick:function(){return h.apply(this,arguments)},children:"Reset"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white",ml:5},id:"Bubble",onClick:function(){return function(e){return _.apply(this,arguments)}(i)},children:"Bubble"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"MergeSort",onClick:function(){return function(e){return X.apply(this,arguments)}(i)},children:"Merge"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"Insertion",onClick:function(){return function(e){return Z.apply(this,arguments)}(i)},children:"Insertion"}),Object(p.jsx)(b.a,{sx:{p:1,color:"white"},id:"HeapSort",onClick:function(){return function(e){return ee.apply(this,arguments)}(i)},children:"Heap Sort"}),Object(p.jsx)(g.a,{style:{background:"white"}}),Object(p.jsx)(u.a,{id:"timer",sx:{p:1},variant:"h6",children:"The last computation took 0ms to complete"}),Object(p.jsx)(u.a,{id:"complexity",sx:{p:1},variant:"h6"})]})}),Object(p.jsx)(j.a,{id:"container",sx:{p:2},children:Object(p.jsx)(w.a,{id:"grid",container:!0,spacing:0,columns:i,style:{transform:"rotateX(180deg)"},children:s})})]})}var ie=n(55),oe=n(232),ce=n(312);n(144);function ae(e){return se.apply(this,arguments)}function se(){return se=Object(A.a)(I.a.mark((function e(t){var n,r,i,o,c,a,s,l,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){return(u=Object(A.a)(I.a.mark((function e(){var n,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.predict(t);case 2:for(n=e.sent,c=0;c<o;c++)a=n[c].className+" sort: "+n[c].probability.toFixed(2),i.childNodes[c].innerHTML=a,s.push(parseFloat(n[c].probability.toFixed(2)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(){return u.apply(this,arguments)},a=function(){return(a=Object(A.a)(I.a.mark((function e(){var t,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n+"model.json",c=n+"metadata.json",e.next=4,ce.load(t,c);case 4:for(r=e.sent,o=r.getTotalClasses(),i=document.getElementById("label-container"),a=0;a<o;a++)i.appendChild(document.createElement("div"));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return a.apply(this,arguments)},n="https://teachablemachine.withgoogle.com/models/df4D78q8s/",e.next=7,c();case 7:return s=[],e.next=10,l();case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}var le=n(334),ue=n.n(le);function de(){var e=document.getElementById("file-input"),t=document.getElementById("image"),n=Object(r.useState)([25,25,25,25]),i=Object(k.a)(n,2),o=i[0],c=i[1];function a(){return a=Object(A.a)(I.a.mark((function n(){var r,i;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=document.getElementById("file-input"),t=document.getElementById("image"),e.files[0]){n.next=4;break}throw new Error("Image not found");case 4:r=e.files[0],(i=new FileReader).readAsDataURL(r),i.onload=function(){var e=Object(A.a)(I.a.mark((function e(n){var r,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setAttribute("src",n.target.result),document.body.classList.add("image-loaded"),r=ue()("#image").get(0),e.next=5,ae(r);case 5:i=e.sent,console.log(i),c(i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 8:case"end":return n.stop()}}),n)}))),a.apply(this,arguments)}var s=[{argument:"Bubble",value:100*o[0]},{argument:"Insertion",value:100*o[1]},{argument:"Merge",value:100*o[2]},{argument:"Heap",value:100*o[3]}],l=Object(ie.a)("input")({display:"none"});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)(m,{title:"Machine Learning Detection Tool"})}),Object(p.jsx)(x.a,{elevation:0,sx:{mt:2,mb:2,bgcolor:"#20262d"},children:Object(p.jsxs)(j.a,{sx:{p:1,bgcolor:"#121212",color:"#FFFFFF",borderRadius:2,border:1},align:"center",children:[Object(p.jsx)(u.a,{id:"timer",sx:{p:1},variant:"h5",children:"Upload image of dataset to analyse"}),Object(p.jsxs)("label",{htmlFor:"file-input",children:[Object(p.jsx)(l,{accept:"image/*",id:"file-input",onChange:function(){return a.apply(this,arguments)},multiple:!0,type:"file"}),Object(p.jsx)(b.a,{variant:"contained",component:"span",children:"Upload"})]})]})}),Object(p.jsxs)(j.a,{id:"container",sx:{p:2,bgcolor:"#121212",color:"#FFFFFF",borderRadius:2,border:1},align:"center",children:[Object(p.jsx)("img",{src:"",id:"image"}),Object(p.jsxs)(x.a,{elevation:0,sx:{mt:2,mb:2,bgcolor:"#20262d",border:1,color:"#FFFFFF",borderRadius:2},children:[Object(p.jsxs)(oe.a,{data:s,children:[Object(p.jsx)(oe.b,{valueField:"value",argumentField:"argument"}),Object(p.jsx)(oe.c,{text:"Probability of each algorithm"})]}),Object(p.jsx)("div",{id:"label-container"}),Object(p.jsx)(u.a,{id:"Description",sx:{p:1,color:"white"},variant:"h6",children:"The following prediction is based on not only the speed at which the algorithm will complete the sort, but also the difficulty of implementing the algorithm (simplicity) and the number of swaps required. The prediction is only a guidance, but not always correct. Furthermore, Heap sort and Merge sort are much more efficient compared to insertion and bubble sort, especially with larger datasets."})]})]})]})}c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(O.a,{children:Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{index:!0,element:Object(p.jsx)(v,{})}),Object(p.jsx)(f.a,{path:"/pathfinding",element:Object(p.jsx)(L,{})}),Object(p.jsx)(f.a,{path:"/arraysorting",element:Object(p.jsx)(re,{})}),Object(p.jsx)(f.a,{path:"/detection",element:Object(p.jsx)(de,{})})]})})}),document.getElementById("root")),y()}},[[384,1,2]]]);
//# sourceMappingURL=main.9dfd745b.chunk.js.map