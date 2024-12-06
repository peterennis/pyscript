/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/xterm-readline@1.1.2/lib/readline.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from"string-width";var e,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.InputType=void 0,r.parseInput=function(t){return Array.from(function*(t){let s=[];const i=t[Symbol.iterator]();for(let t=i.next();!t.done;t=i.next()){const r=t.value;if(r.length>1){s.push(r);continue}const o=r.charCodeAt(0);if(s.length>0&&(o<32||127===o)&&(yield{inputType:e.Text,data:s},s=[]),27!==o)if(o<32||127===o){let t=e.UnsupportedControlChar;switch(o){case 1:t=e.CtrlA;break;case 3:t=e.CtrlC;break;case 4:t=e.CtrlD;break;case 5:t=e.CtrlE;break;case 11:t=e.CtrlK;break;case 17:t=e.CtrlQ;break;case 19:t=e.CtrlS;break;case 21:t=e.CtrlU;break;case 13:t=e.Enter;break;case 127:t=e.Backspace;break;case 12:t=e.CtrlL}yield{inputType:t,data:[r]}}else s.push(r);else{const t=i.next();if(t.done){s.push("");continue}let r=e.UnsupportedEscape;if("["!==t.value){if("\r"===t.value)r=e.AltEnter;yield{inputType:r,data:["",t.value]};continue}const o=i.next();if(o.done)continue;if(o.value>="0"&&o.value<="9"){let t=o.value;const s=i.next();if(s.done)return;if(s.value>="0"&&s.value<="9")t+=s.value;else if("~"!==s.value)continue;if("3"===t)r=e.Delete;yield{inputType:r,data:["","[",t,"~"]};continue}switch(o.value){case"A":r=e.ArrowUp;break;case"B":r=e.ArrowDown;break;case"C":r=e.ArrowRight;break;case"D":r=e.ArrowLeft;break;case"F":r=e.End;break;case"H":r=e.Home;break;case"\r":r=e.AltEnter}yield{inputType:r,data:["","[",o.value]}}}s.length>0&&(yield{inputType:e.Text,data:s})}(t))},function(t){t[t.Text=0]="Text",t[t.AltEnter=1]="AltEnter",t[t.ArrowUp=2]="ArrowUp",t[t.ArrowDown=3]="ArrowDown",t[t.ArrowLeft=4]="ArrowLeft",t[t.ArrowRight=5]="ArrowRight",t[t.Delete=6]="Delete",t[t.Backspace=7]="Backspace",t[t.CtrlA=8]="CtrlA",t[t.CtrlC=9]="CtrlC",t[t.CtrlD=10]="CtrlD",t[t.CtrlE=11]="CtrlE",t[t.CtrlK=12]="CtrlK",t[t.CtrlL=13]="CtrlL",t[t.CtrlQ=14]="CtrlQ",t[t.CtrlS=15]="CtrlS",t[t.CtrlU=16]="CtrlU",t[t.End=17]="End",t[t.Enter=18]="Enter",t[t.Home=19]="Home",t[t.ShiftEnter=20]="ShiftEnter",t[t.UnsupportedControlChar=21]="UnsupportedControlChar",t[t.UnsupportedEscape=22]="UnsupportedEscape"}(e||(r.InputType=e={}));var o={},h={};Object.defineProperty(h,"__esModule",{value:!0}),h.LineBuffer=void 0;h.LineBuffer=class{constructor(){this.buf="",this.pos=0}buffer(){return this.buf}pos_buffer(){return this.buf.slice(0,this.pos)}length(){return this.buf.length}char_length(){return[...this.buf].length}update(t,e){this.buf=t,this.pos=e}insert(t){const e=t.length,s=this.pos===this.buf.length;return this.buf=s?this.buf+t:this.buf.slice(0,this.pos)+t+this.buf.slice(this.pos),this.pos+=e,s}moveBack(t){const e=this.prevPos(t);return void 0!==e&&(this.pos=e,!0)}moveForward(t){const e=this.nextPos(t);return void 0!==e&&(this.pos=e,!0)}moveHome(){const t=this.startOfLine();return this.pos>t&&(this.pos=t,!0)}moveEnd(){const t=this.endOfLine();return this.pos!==t&&(this.pos=t,!0)}startOfLine(){const t=this.buf.slice(0,this.pos).lastIndexOf("\n");return-1!==t?t+1:0}endOfLine(){const t=this.buf.slice(this.pos).indexOf("\n");return-1!==t?this.pos+t:this.buf.length}moveLineUp(t){const e=this.buf.slice(0,this.pos).lastIndexOf("\n");if(-1===e)return!1;const s=[...this.buf.slice(e+1,this.pos)].length;let i=this.buf.slice(0,e).lastIndexOf("\n");-1===i?i=0:i+=1;let r=e;for(let e=1;e<t&&0!==i;e++)r=i-1,i=this.buf.slice(0,r).lastIndexOf("\n"),-1===i?i=0:i+=1;const o=[...this.buf.slice(i,r)].slice(0,s);let h=e;return o.length>0&&(h=o.map((t=>t.length)).reduce(((t,e)=>t+e),0),h=i+h),this.pos=h,!0}moveLineDown(t){const e=this.buf.slice(this.pos).indexOf("\n");if(-1===e)return!1;let s=this.buf.slice(0,this.pos).lastIndexOf("\n");-1===s?s=0:s+=1;const i=[...this.buf.slice(s,this.pos)].length;let r=this.pos+e+1,o=this.buf.slice(r).indexOf("\n");o=-1===o?this.buf.length:r+o;for(let e=1;e<t&&o!==this.buf.length;e++)r=o+1,o=this.buf.slice(r).indexOf("\n"),o=-1===o?this.buf.length:r+o;const h=[...this.buf.slice(r,o)];return i<h.length?this.pos=h.slice(0,i).map((t=>t.length)).reduce(((t,e)=>t+e),0)+r:this.pos=o,!0}set_pos(t){this.pos=t}prevPos(t){if(0===this.pos)return;const e=this.buf.slice(0,this.pos);return this.pos-[...e].slice(-t).map((t=>t.length)).reduce(((t,e)=>t+e),0)}nextPos(t){if(this.pos===this.buf.length)return;const e=this.buf.slice(this.pos);return this.pos+[...e].slice(0,t).map((t=>t.length)).reduce(((t,e)=>t+e),0)}backspace(t){const e=this.prevPos(t);return void 0!==e&&(this.buf=this.buf.slice(0,e)+this.buf.slice(this.pos),this.pos=e,!0)}delete(t){const e=this.nextPos(t);return void 0!==e&&(this.buf=this.buf.slice(0,this.pos)+this.buf.slice(e),!0)}deleteEndOfLine(){if(0==this.buf.length||this.pos==this.buf.length)return!1;const t=this.pos,e=this.endOfLine();return t==e?this.delete(1):this.buf=this.buf.slice(0,t)+this.buf.slice(e),!0}};var n=s&&s.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0}),o.State=o.Layout=o.Position=void 0;const a=h,l=n(t);class u{constructor(t,e){this.row=void 0!==t?t:0,this.col=void 0!==e?e:0}}o.Position=u;class c{constructor(t){this.promptSize=t,this.cursor=new u,this.end=new u}}o.Layout=c;o.State=class{constructor(t,e,s,i){this.line=new a.LineBuffer,this.highlighting=!1,this.prompt=t,this.tty=e,this.highlighter=s,this.history=i,this.promptSize=e.calculatePosition(t,new u),this.layout=new c(this.promptSize)}buffer(){return this.line.buffer()}shouldHighlight(){return this.highlighter.highlightChar(this.line.buf,this.line.pos)?(this.highlighting=!0,!0):!!this.highlighting&&(this.highlighting=!1,!0)}clearScreen(){this.tty.clearScreen(),this.layout.cursor=new u,this.layout.end=new u,this.refresh()}editInsert(t){const e=this.line.insert(t),s=t.includes("\n");if(e&&!s){const e=(0,l.default)(t);e>0&&this.layout.cursor.col+e<this.tty.col&&!this.shouldHighlight()?(this.layout.cursor.col+=e,this.layout.end.col+=e,this.tty.write(t)):this.refresh()}else this.refresh()}update(t){this.line.update(t,t.length),this.refresh()}editBackspace(t){this.line.backspace(t)&&this.refresh()}editDelete(t){this.line.delete(t)&&this.refresh()}editDeleteEndOfLine(){this.line.deleteEndOfLine()&&this.refresh()}refresh(){const t=this.tty.computeLayout(this.promptSize,this.line);this.tty.refreshLine(this.prompt,this.line,this.layout,t,this.highlighter),this.layout=t}moveCursorBack(t){this.line.moveBack(t)&&this.moveCursor()}moveCursorForward(t){this.line.moveForward(t)&&this.moveCursor()}moveCursorUp(t){this.line.moveLineUp(t)?this.moveCursor():this.previousHistory()}moveCursorDown(t){this.line.moveLineDown(t)?this.moveCursor():this.nextHistory()}moveCursorHome(){this.line.moveHome()&&this.moveCursor()}moveCursorEnd(){this.line.moveEnd()&&this.moveCursor()}moveCursorToEnd(){this.layout.cursor!==this.layout.end&&(this.tty.moveCursor(this.layout.cursor,this.layout.end),this.layout.cursor=Object.assign({},this.layout.end))}previousHistory(){if(-1===this.history.cursor&&this.line.length()>0)return;const t=this.history.prev();void 0!==t&&this.update(t)}nextHistory(){if(-1===this.history.cursor)return;const t=this.history.next();void 0!==t?this.update(t):this.update("")}moveCursor(){const t=this.tty.calculatePosition(this.line.pos_buffer(),this.promptSize);t!==this.layout.cursor&&(this.shouldHighlight()?this.refresh():(this.tty.moveCursor(this.layout.cursor,t),this.layout.promptSize=Object.assign({},this.promptSize),this.layout.cursor=Object.assign({},t)))}};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.History=void 0;p.History=class{constructor(t){this.entries=[],this.cursor=-1,this.maxEntries=t}saveToLocalStorage(){const t=null===window||void 0===window?void 0:window.localStorage;void 0!==t&&t.setItem("history",JSON.stringify(this.entries))}restoreFromLocalStorage(){const t=null===window||void 0===window?void 0:window.localStorage;if(void 0!==t){const e=t.getItem("history");if(null==e)return;try{const s=JSON.parse(e);Array.isArray(s)&&void 0===s.find((t=>"string"!=typeof t))?this.entries=s:(this.entries=[],t.setItem("history","[]"))}catch(e){this.entries=[],t.setItem("history","[]")}}}append(t){this.resetCursor(),this.entries.includes(t)?(this.entries.splice(this.entries.indexOf(t),1),this.entries.unshift(t)):this.entries.unshift(t),this.entries.length>this.maxEntries&&this.entries.pop(),this.saveToLocalStorage()}resetCursor(){this.cursor=-1}next(){if(-1!==this.cursor)return this.cursor-=1,this.entries[this.cursor]}prev(){if(!(this.cursor+1>=this.entries.length))return this.cursor+=1,this.entries[this.cursor]}};var d={},f=s&&s.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(d,"__esModule",{value:!0}),d.Tty=void 0;const y=f(t);d.Tty=class{constructor(t,e,s,i){this.tabWidth=s,this.col=t,this.row=e,this.out=i}write(t){return this.out.write(t)}print(t){return this.out.print(t)}println(t){return this.out.println(t)}clearScreen(){this.out.write("[H[2J")}calculatePosition(t,e){const s=Object.assign({},e);let i=0;return[...t].forEach((t=>{if("\n"===t)return s.row+=1,void(s.col=0);let e=0;if("\t"===t)e=this.tabWidth-s.col%this.tabWidth;else{let s;[s,i]=function(t,e){return 1===e?"["===t?[0,2]:[0,0]:2===e?";"===t||t[0]>="0"&&t[0]<="9"?[0,e]:[0,0]:""===t?[0,1]:"\n"===t?[0,e]:[(0,y.default)(t),e]}(t,i),e=s}s.col+=e,s.col>this.col&&(s.row+=1,s.col=e)})),s.col===this.col&&(s.col=0,s.row+=1),s}computeLayout(t,e){const s=Object.assign({},t),i=e.pos,r=this.calculatePosition(e.buf.slice(0,e.pos),t);return{promptSize:s,cursor:r,end:i===e.buf.length?Object.assign({},r):this.calculatePosition(e.buf.slice(i),r)}}refreshLine(t,e,s,i,r){const o=i.cursor,h=i.end;this.clearOldRows(s),this.write(r.highlightPrompt(t)),this.write(r.highlight(e.buf,e.pos)),0===h.col&&h.row>0&&"\n"!==e.buf[e.buf.length-1]&&this.write("\n");const n=h.row-o.row;n>0&&this.write(`[${n}A`),o.col>0?this.write(`\r[${o.col}C`):this.write("\r")}clearOldRows(t){const e=t.cursor.row,s=t.end.row,i=Math.max(s-e,0);i>0&&this.write(`[${i}B`);for(let t=0;t<s;t++)this.write("\r[0K[A");this.write("\r[0K")}moveCursor(t,e){if(e.row>t.row){const s=e.row-t.row;1===s?this.write("[B"):this.write(`[${s}B`)}else if(e.row<t.row){const s=t.row-e.row;1===s?this.write("[A"):this.write(`[${s}A`)}if(e.col>t.col){const s=e.col-t.col;1===s?this.write("[C"):this.write(`[${s}C`)}else if(e.col<t.col){const s=t.col-e.col;1===s?this.write("[D"):this.write(`[${s}D`)}}};var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.IdentityHighlighter=void 0;w.IdentityHighlighter=class{highlight(t,e){return t}highlightPrompt(t){return t}highlightChar(t,e){return!1}},Object.defineProperty(i,"__esModule",{value:!0});var v=i.Readline=void 0;const b=r,g=o,m=p,C=d,T=w;v=i.Readline=class{constructor(){this.highlighter=new T.IdentityHighlighter,this.history=new m.History(50),this.disposables=[],this.watermark=0,this.highWatermark=1e4,this.lowWatermark=1e3,this.highWater=!1,this.state=new g.State(">",this.tty(),this.highlighter,this.history),this.checkHandler=()=>!0,this.ctrlCHandler=()=>{},this.pauseHandler=t=>{},this.history.restoreFromLocalStorage()}activate(t){this.term=t,this.term.onData(this.readData.bind(this)),this.term.attachCustomKeyEventHandler(this.handleKeyEvent.bind(this))}dispose(){this.disposables.forEach((t=>t.dispose()))}appendHistory(t){this.history.append(t)}setHighlighter(t){this.highlighter=t}setCheckHandler(t){this.checkHandler=t}setCtrlCHandler(t){this.ctrlCHandler=t}setPauseHandler(t){this.pauseHandler=t}writeReady(){return!this.highWater}write(t){const e=(t="\n"===t?"\r\n":(t=t.replace(/^\n/,"\r\n")).replace(/([^\r])\n/g,"$1\r\n")).length;this.watermark+=e,this.watermark>this.highWatermark&&(this.highWater=!0),this.term&&this.term.write(t,(()=>{this.watermark=Math.max(this.watermark-e,0),this.highWater&&this.watermark<this.lowWatermark&&(this.highWater=!1)}))}print(t){return this.write(t)}println(t){return this.write(t+"\r\n")}output(){return this}tty(){var t,e;return void 0!==(null===(e=null===(t=this.term)||void 0===t?void 0:t.options)||void 0===e?void 0:e.tabStopWidth)?new C.Tty(this.term.cols,this.term.rows,this.term.options.tabStopWidth,this.output()):new C.Tty(0,0,8,this.output())}read(t){return new Promise(((e,s)=>{void 0!==this.term?(this.state=new g.State(t,this.tty(),this.highlighter,this.history),this.state.refresh(),this.activeRead={prompt:t,resolve:e,reject:s}):s("addon is not active")}))}handleKeyEvent(t){return"Enter"!==t.key||!t.shiftKey||("keydown"===t.type&&this.readKey({inputType:b.InputType.ShiftEnter,data:["\r"]}),!1)}readData(t){const e=(0,b.parseInput)(t);e.length>1||e[0].inputType===b.InputType.Text&&e[0].data.length>1?this.readPaste(e):this.readKey(e[0])}readPaste(t){const e=t.map((t=>t.inputType===b.InputType.Enter?{inputType:b.InputType.Text,data:["\n"]}:t));for(const t of e)t.inputType===b.InputType.Text?this.state.editInsert(t.data.join("")):this.readKey(t)}readKey(t){var e,s,i;if(void 0!==this.activeRead)switch(t.inputType){case b.InputType.Text:this.state.editInsert(t.data.join(""));break;case b.InputType.AltEnter:case b.InputType.ShiftEnter:this.state.editInsert("\n");break;case b.InputType.Enter:this.checkHandler(this.state.buffer())?(this.state.moveCursorToEnd(),null===(e=this.term)||void 0===e||e.write("\r\n"),this.history.append(this.state.buffer()),null===(s=this.activeRead)||void 0===s||s.resolve(this.state.buffer()),this.activeRead=void 0):this.state.editInsert("\n");break;case b.InputType.CtrlC:this.state.moveCursorToEnd(),null===(i=this.term)||void 0===i||i.write("^C\r\n"),this.state=new g.State(this.activeRead.prompt,this.tty(),this.highlighter,this.history),this.state.refresh();break;case b.InputType.CtrlS:this.pauseHandler(!1);break;case b.InputType.CtrlU:this.state.update("");break;case b.InputType.CtrlK:this.state.editDeleteEndOfLine();break;case b.InputType.CtrlQ:this.pauseHandler(!0);break;case b.InputType.CtrlL:this.state.clearScreen();break;case b.InputType.Home:case b.InputType.CtrlA:this.state.moveCursorHome();break;case b.InputType.End:case b.InputType.CtrlE:this.state.moveCursorEnd();break;case b.InputType.Backspace:this.state.editBackspace(1);break;case b.InputType.Delete:case b.InputType.CtrlD:this.state.editDelete(1);break;case b.InputType.ArrowLeft:this.state.moveCursorBack(1);break;case b.InputType.ArrowRight:this.state.moveCursorForward(1);break;case b.InputType.ArrowUp:this.state.moveCursorUp(1);break;case b.InputType.ArrowDown:this.state.moveCursorDown(1);case b.InputType.UnsupportedControlChar:case b.InputType.UnsupportedEscape:}else switch(t.inputType){case b.InputType.CtrlC:this.ctrlCHandler();break;case b.InputType.CtrlL:this.write("[H[2J")}}};var k=i.__esModule;export{v as Readline,k as __esModule,i as default};