(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/hangman0.6158681b.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman1.7053b647.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman2.ab2a09a0.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman3.d6d0631b.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman4.7681c176.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman5.e16ca258.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman6.436da02a.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman7.36a92f20.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman8.eb5eb69b.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman9.037dc3e1.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman10.74b3bd6d.svg"},function(e,a,t){e.exports=t.p+"static/media/hangman11.33513f5a.svg"},function(e,a,t){e.exports=t(33)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(9),i=t.n(c),r=(t(27),t(28),t(7)),o=t(1),l=t(2),m=t(5),u=t(3),d=t(6),h=t(4),g=(t(29),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={trouble:!0},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Hangmanword"},s.a.createElement("ul",{className:"word-on-show"},this.props.word))}}]),a}(n.Component)),p=(t(30),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={keyboard:!0},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onClick,a="abcdefghijklmnopqrstuvwxyz".split("").map((function(a,t,n){return s.a.createElement("li",{onClick:e,key:a},a)}));return s.a.createElement("div",{className:"keyboard mt-4"},s.a.createElement("ul",null,a))}}]),a}(n.Component)),f=(t(31),function(e){return s.a.createElement("div",{className:"Playagain",onClick:e.onClick},s.a.createElement("span",null,"Play Again"))}),v=(t(32),t(10)),b=t.n(v),k=t(11),w=t.n(k),y=t(12),C=t.n(y),E=t(13),j=t.n(E),x=t(14),O=t.n(x),T=t(15),L=t.n(T),N=t(16),P=t.n(N),B=t(17),I=t.n(B),M=t(18),S=t.n(M),G=t(19),A=t.n(G),F=t(20),H=t.n(F),z=t(21),W=t.n(z),q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={answer:"The Secret Life of Pets",incorrectlyGuessed:[],guessed:[]},t.handleCharacterClick=t.handleCharacterClick.bind(Object(d.a)(t)),t.handlePlayagainClick=t.handlePlayagainClick.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"handleCharacterClick",value:function(e){if(!e.target.classList.contains("clicked")){e.target.classList.add("clicked");var a=e.target.innerText;this.state.answer.toLowerCase().split("").includes(a)?(console.log("matching"),this.setState({guessed:[].concat(Object(r.a)(this.state.guessed),[a])})):this.setState({incorrectlyGuessed:[].concat(Object(r.a)(this.state.incorrectlyGuessed),[a])})}}},{key:"handlePlayagainClick",value:function(){var e=this,a=document.querySelector(".Playagain");if(!a.classList.contains("active")){a.classList.add("active"),a.innerHTML="Generating new word...";var t=Math.floor(Math.random()*this.props.words.length),n=this.props.words[t];setTimeout((function(){a.classList.remove("active"),e.setState({answer:n,guessed:[],incorrectlyGuessed:[]})}),1500)}}},{key:"render",value:function(){var e,a,t=this.state.incorrectlyGuessed.length,n=this.state.guessed,c=this.state.answer.split("").map((function(e){return n.includes(e.toLowerCase())?e:" "==e?"":"_"}));t>10&&(e=!0),c.includes("_")||(a=!0);var i=c.map((function(e,a){return s.a.createElement("li",{class:e?"":"space",key:a},e)}));return s.a.createElement("div",{className:"container game Hangman mt-3"},s.a.createElement("h1",{className:"text-center"},"Hangman"),s.a.createElement("div",{className:"Hangman-image"},s.a.createElement("img",{src:this.props.images[t]})),s.a.createElement(g,{word:i}),e||a?s.a.createElement("h1",{className:"text-center mt-3"},a?"You Win!":"You lose"):s.a.createElement(p,{onClick:this.handleCharacterClick}),(e||a)&&s.a.createElement(f,{onClick:this.handlePlayagainClick}))}}]),a}(n.Component);q.defaultProps={images:[b.a,w.a,C.a,j.a,O.a,L.a,P.a,I.a,S.a,A.a,H.a,W.a],words:["Toy Story","Shrek","Ice Age","The Incredibles","Wreck It Ralph","Frozen","Inside Out","Brave","Monsters Inc","Antz","Coco","Puss In Boots","Kung Fu Panda","Tangled","Moana","Bolt","The Lego Movie","Finding Dory","Zootopia","The Adams Family","The Secret Life of Pets","Trolls","Despicable Me","The Lion King","The Little Mermaid","The Nightmare Before Christmas","The BFG"]};var D=q;var J=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"small-screen-text d-flex-col text-center p-5"},s.a.createElement("p",null,"Browser window is too small"),s.a.createElement("p",{className:"pt-4"},"Please open on a desktop browser"),s.a.createElement("p",{className:"pt-4"}," If you are using a desktop browser, please resize your browser window")),s.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.b5910b10.chunk.js.map