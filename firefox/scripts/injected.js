(()=>{var __webpack_exports__={};document.addEventListener("variable_query",(function(evt){var query=evt.detail,res=eval(query),resEvent=new CustomEvent("variable_query_"+query,{detail:res});document.dispatchEvent(resEvent)})),window.addEventListener("UNSTABLE_editor:extensions",(e=>{const{CodeMirror:t,extensions:n}=e.detail,{EditorSelection:r,ViewPlugin:o}=t,s=o.define((e=>(document.addEventListener("slext:codemirror:requestLineInfo",(()=>{if(1!=e.state.selection.ranges.length)return;const t=e.state.selection.ranges[0],n=e.state.doc.lineAt(t.from),r={row:n.number,column:t.from-n.from,text:n.text};document.dispatchEvent(new CustomEvent("slext:codemirror:provideLineInfo",{detail:r}))})),{destroy:()=>{document.removeEventListener("slext:codemirror:requestLineInfo")}})));n.push(s);const i=o.define((e=>(document.addEventListener("slext:codemirror:requestSelectionLength",(()=>{if(1!=e.state.selection.ranges.length)return;const t=e.state.selection.ranges[0];document.dispatchEvent(new CustomEvent("slext:codemirror:provideSelectionLength",{detail:t.to-t.from}))})),{destroy:()=>{document.removeEventListener("slext:codemirror:requestSelectionLength")}})));n.push(i);const a=o.define((e=>(document.addEventListener("slext:codemirror:wrapInCommand",(t=>{const{prefix:n,suffix:o}=JSON.parse(t.detail);1==e.state.selection.ranges.length&&e.dispatch(e.state.changeByRange((t=>{const s=t.to-t.from,i=e.state.changes([{from:t.from,insert:n},{from:t.to,insert:o}]);return s?{range:r.range(i.mapPos(t.from),i.mapPos(t.to)+o.toString().length),changes:i}:{range:r.cursor(i.mapPos(t.from)+n.toString().length),changes:i}})))})),{destroy:()=>{document.removeEventListener("slext:codemirror:wrapInCommand")}})));n.push(a)}));var limit=50,tries=0,int=setInterval((function(){try{_debug_editors&&_debug_editors.length&&(clearInterval(int),_debug_editors[0].on("changeSession",(function(){var e=new Event("slext_editorChanged");document.dispatchEvent(e)}))),tries++}catch(e){if(!(e instanceof ReferenceError))throw e;tries++>=limit&&clearInterval(int)}}),100)})();