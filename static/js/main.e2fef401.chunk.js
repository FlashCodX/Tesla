(this.webpackJsonptesla=this.webpackJsonptesla||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){e.exports=n.p+"static/media/navIcon.b3f49afd.svg"},function(e,t,n){e.exports=n.p+"static/media/close.2c5552a1.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),s=n(1),i=n(2),o=n(4),u=n(3),m=n(13),d=n(14),h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(i.a)(n,[{key:"handleNav",value:function(){this.setState({open:!this.state.open})}},{key:"handleClick",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("h1",{onClick:function(){return e.handleClick()}},"TESLA"),r.a.createElement("div",null,r.a.createElement("span",null,"Model S"),r.a.createElement("span",null,"Model 3"),r.a.createElement("span",null,"Model X"),r.a.createElement("span",null,"Model Y"),r.a.createElement("span",null,"Solar Roof"),r.a.createElement("span",null,"Solar Panels")),r.a.createElement("img",{src:this.state.open?d:m,onClick:function(){return e.handleNav()},alt:"nav"}),r.a.createElement("section",{className:this.state.open?"open_nav":"close_nav"},r.a.createElement("div",null,"USED INVENTORY"),r.a.createElement("hr",null),r.a.createElement("div",null,"TRADE-IN"),r.a.createElement("hr",null),r.a.createElement("div",null,"CYBERTRUCK"),r.a.createElement("hr",null),r.a.createElement("div",null,"ROADSTER"),r.a.createElement("hr",null),r.a.createElement("div",null,"Semi"),r.a.createElement("hr",null),r.a.createElement("div",null,"PowerWall"),r.a.createElement("hr",null),r.a.createElement("div",null,"Commercial solar"),r.a.createElement("hr",null),r.a.createElement("div",null,"Test Drive"),r.a.createElement("hr",null),r.a.createElement("div",null,"Charging"),r.a.createElement("hr",null),r.a.createElement("div",null,"Find Us"),r.a.createElement("hr",null),r.a.createElement("div",null,"Support"),r.a.createElement("hr",null),r.a.createElement("div",null,"United States"),r.a.createElement("hr",null)))}}]),n}(r.a.Component),E=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{className:this.props.name})}}]),n}(r.a.Component),v=(n(15),n(7)),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).isInViewport=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},a.state={title:e.title,description:e.description,accessories:!1,btn1:"Custom Order",btn2:"Learn More",scrolling:!1},a}return Object(i.a)(n,[{key:"isVisible",value:function(){var e=document.getElementsByTagName("section");(e=Array.from(e)).shift();var t,n=Object(v.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(this.isInViewport(a))switch(a.className){case"y":this.setState({title:"Model Y",description:"Order Online for Touchless Delivery",accessories:!1,btn1:"Custom Order",btn2:"Learn More"});break;case"x":this.setState({title:"Model X",description:"Order Online for Touchless Delivery",accessories:!1,btn1:"Custom Order",btn2:"Learn More"});break;case"m3":this.setState({title:"Model 3",description:"Order Online for Touchless Delivery",accessories:!1,btn1:"Custom Order",btn2:"Learn More"});break;case"s":this.setState({title:"Model S",description:"Order Online for Touchless Delivery",accessories:!1,btn1:"Custom Order",btn2:"Learn More"});break;case"sr":this.setState({title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",accessories:!1,btn1:"Order Now",btn2:"Learn More"});break;case"sp":this.setState({title:"Only $1.49/Watt for Solar on Existing Roofs",description:"Lowest Cost in America - Money-back guarantee",accessories:!1,btn1:"Order Now",btn2:"Learn More"});break;case"a":this.setState({title:"Accessories",description:"",accessories:!0})}}}catch(r){n.e(r)}finally{n.f()}}},{key:"componentDidMount",value:function(){var e,t=this;document.getElementsByTagName("main")[0].addEventListener("scroll",(function(){t.isVisible(),t.setState({scrolling:!0}),window.clearTimeout(e),e=setTimeout((function(){t.setState({scrolling:!1})}),350)}),!1)}},{key:"returnOrder",value:function(){return this.state.accessories?r.a.createElement("div",{className:this.state.scrolling?"order out ":"order in"},r.a.createElement("div",{style:{background:"black"}},"Shop Now")):r.a.createElement("div",{className:this.state.scrolling?"order out":"order in"},r.a.createElement("div",null,this.state.btn1),r.a.createElement("div",null,this.state.btn2))}},{key:"render",value:function(){return r.a.createElement("div",{className:"overlay"},r.a.createElement("header",{className:this.state.scrolling?"out":"in"},r.a.createElement("h1",null,this.state.title),r.a.createElement("p",null,this.state.description)),this.returnOrder())}}]),n}(r.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"splash"},r.a.createElement("div",null),r.a.createElement("h1",null,"Tesla"))}}]),n}(r.a.Component),f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(p,{title:"Model Y",description:"Order Online for Touchless Delivery"}),r.a.createElement(E,{name:"y"}),r.a.createElement(E,{id:"gggg",name:"x"}),r.a.createElement(E,{name:"m3"}),r.a.createElement(E,{name:"s"}),r.a.createElement(E,{name:"sp"}),r.a.createElement(E,{name:"sr"}),r.a.createElement(E,{name:"a"}))}}]),n}(r.a.Component);n(16);c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e2fef401.chunk.js.map