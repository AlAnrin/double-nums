(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),o=(a(14),a(3)),c=a(4),l=a(6),u=a(5),h=a(7),d=(a(15),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).recurse=function(e,t,n,s){var r=a.randomInteger(n,s);null==e[r]?e[r]={num:t,isVisible:!1,isOpen:!1}:a.recurse(e,t,n,s)},a.randomInteger=function(e,t){var a=e+Math.random()*(t+1-e);return a=Math.floor(a)},a.playAgain=function(){a.setState({win:!1}),a.handleSelect(20)};var n=new Array(39).fill(null);return a.changeBoard(20,n),a.state={board:n,row:4,col:8,now:-1,select:20,canSelect:[10,15,20,25,30],win:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"changeBoard",value:function(e,t){for(var a=1;a<=e;a++)this.recurse(t,a,0,2*e-1),this.recurse(t,a,0,2*e-1);console.log(t)}},{key:"setNewBoard",value:function(e){this.setState({board:e})}},{key:"winner",value:function(){this.setState({win:!0})}},{key:"handleProps",value:function(e){var t=this;if(!this.state.board[e].isOpen){var a=this.state.board;if(a[e].isVisible=!0,this.setNewBoard(a),-1===this.state.now)this.setState({now:e});else if(this.state.board[this.state.now].num===this.state.board[e].num&&e!==this.state.now){var n=this.state.board;n[e].isOpen=!0,n[this.state.now].isOpen=!0,this.setState({now:-1}),this.setNewBoard(n)}else setTimeout(function(){var a=t.state.board;a[e].isVisible=!1,a[t.state.now].isVisible=!1,t.setState({now:-1}),t.setNewBoard(a)},200)}this.state.board.filter(function(e){return e.isOpen}).length===this.state.board.length&&this.winner()}},{key:"handleSelect",value:function(e){var t,a;30===e&&(t=5,a=10),20===e&&(t=4,a=8),10===e&&(t=4,a=5),15===e&&(t=5,a=6),25===e&&(t=5,a=10);var n=[];this.changeBoard(e,n),this.setState({board:n,select:e,row:t,col:a})}},{key:"render",value:function(){for(var e=this,t=[],a=[],n=0,r=function(r){r-n*e.state.col<e.state.col?a.push(s.a.createElement("button",{className:"num_button card box",key:r,onClick:function(){return e.handleProps(r)}},e.state.board[r].isVisible?e.state.board[r].num:" ")):(n++,t.push(s.a.createElement("div",{className:"row"},a)),a=[],r--),i=r},i=0;i<this.state.board.length;i++)r(i);return t.push(s.a.createElement("div",{className:"row"},a)),s.a.createElement("div",{className:"App"},this.state.win?s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"YOU WIN"),s.a.createElement("button",{className:"niceBtn",onClick:this.playAgain},"play again?")):s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{className:"row"},this.state.canSelect.map(function(t){return s.a.createElement("button",{className:"niceBtn",key:t,onClick:function(){return e.handleSelect(t)}},t)})),s.a.createElement("div",null,t)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.884cfbc9.chunk.js.map