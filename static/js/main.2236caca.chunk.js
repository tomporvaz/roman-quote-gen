(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(3),r=a.n(i),l=(a(15),a(4)),s=a(5),u=a(7),c=a(6),h=a(8),m=a(1),d=(a(17),a(18),{quotes:[{quote:"Carpe Diem",translation:"Seize the day.",author:"Horace"},{quote:"Tempest Fugit",translation:"Time flies.",author:"Virgil"},{quote:"Semper Ubi Sub Ubi",translation:"Always where under where.",author:"Mr. Talone"},{quote:"In Vino Veritas",translation:"There is truth in wine.",author:"Pliny"},{quote:"Male Parta Male Dilabuntur",translation:"What has been wrongly gained is wrongly lost.",author:"Virgil"},{quote:"Omnium Rerum Principia Parva Sunt",translation:"The beginning of all things are small.",author:"Cicero"}]}),b=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={quoteObj:d.quotes[0],translation:"Seize the day",author:"Horace"},a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"handleClick",value:function(){var t=Math.floor(Math.random()*d.quotes.length);console.log(t),this.setState({quoteObj:d.quotes[t]})}},{key:"render",value:function(){var t="https://twitter.com/intent/tweet?button_hashtag=romanquotes&text="+encodeURIComponent('"'+this.state.quoteObj.quote+'" ('+this.state.quoteObj.translation+") ~ "+this.state.quoteObj.author);return o.a.createElement("div",null,o.a.createElement("h1",{className:"header"}," Roman Quote Generator "),o.a.createElement("div",{id:"quote-box"},o.a.createElement("h3",{id:"text"},this.state.quoteObj.quote),o.a.createElement("p",{id:"translation"},this.state.quoteObj.translation),o.a.createElement("p",{id:"author"},"~",this.state.quoteObj.author),o.a.createElement("a",{id:"tweet-quote",href:t,target:"_blank"},o.a.createElement("button",{onClick:this.handleClick},o.a.createElement("i",{class:"fab fa-twitter"}))),o.a.createElement("button",{id:"new-quote",onClick:this.handleClick},"New Quote")),o.a.createElement("img",{src:"https://images.unsplash.com/photo-1485809885770-fefe16c8f8fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80"}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.2236caca.chunk.js.map