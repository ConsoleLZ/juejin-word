let c;const u=new Array(128).fill(void 0);u.push(void 0,null,!0,!1);function _(e){return u[e]}let l=u.length;function x(e){e<132||(u[e]=l,l=e)}function y(e){const n=_(e);return x(e),n}const O=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&O.decode();let g=null;function m(){return(g===null||g.byteLength===0)&&(g=new Uint8Array(c.memory.buffer)),g}function A(e,n){return e=e>>>0,O.decode(m().subarray(e,e+n))}function d(e){l===u.length&&u.push(u.length+1);const n=l;return l=u[n],u[n]=e,n}function j(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const i=e.description;return i==null?"Symbol":`Symbol(${i})`}if(n=="function"){const i=e.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(e)){const i=e.length;let s="[";i>0&&(s+=j(e[0]));for(let o=1;o<i;o++)s+=", "+j(e[o]);return s+="]",s}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(t.length>1)r=t[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}let h=0;const p=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},E=typeof p.encodeInto=="function"?function(e,n){return p.encodeInto(e,n)}:function(e,n){const t=p.encode(e);return n.set(t),{read:e.length,written:t.length}};function S(e,n,t){if(t===void 0){const f=p.encode(e),b=n(f.length,1)>>>0;return m().subarray(b,b+f.length).set(f),h=f.length,b}let r=e.length,i=n(r,1)>>>0;const s=m();let o=0;for(;o<r;o++){const f=e.charCodeAt(o);if(f>127)break;s[i+o]=f}if(o!==r){o!==0&&(e=e.slice(o)),i=t(i,r,r=o+e.length*3,1)>>>0;const f=m().subarray(i+o,i+r),b=E(e,f);o+=b.written,i=t(i,r,o,1)>>>0}return h=o,i}let a=null;function w(){return(a===null||a.buffer.detached===!0||a.buffer.detached===void 0&&a.buffer!==c.memory.buffer)&&(a=new DataView(c.memory.buffer)),a}function F(e){return e==null}function T(e,n){e=e>>>0;const t=w(),r=[];for(let i=e;i<e+4*n;i+=4)r.push(y(t.getUint32(i,!0)));return r}function R(e,n){try{const s=c.__wbindgen_add_to_stack_pointer(-16),o=S(e,c.__wbindgen_malloc,c.__wbindgen_realloc),f=h;c.cut(s,o,f,F(n)?16777215:n?1:0);var t=w().getInt32(s+4*0,!0),r=w().getInt32(s+4*1,!0),i=T(t,r).slice();return c.__wbindgen_free(t,r*4,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}async function W(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function D(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){y(n)},e.wbg.__wbindgen_string_new=function(n,t){const r=A(n,t);return d(r)},e.wbg.__wbindgen_object_clone_ref=function(n){const t=_(n);return d(t)},e.wbg.__wbg_new_1e7c00339420672b=function(){const n=new Object;return d(n)},e.wbg.__wbindgen_number_new=function(n){return d(n)},e.wbg.__wbg_set_1754fb90457a8cce=function(n,t,r){_(n)[y(t)]=y(r)},e.wbg.__wbg_new_b44ab9ef6060dd36=function(n,t){const r=new Error(A(n,t));return d(r)},e.wbg.__wbindgen_debug_string=function(n,t){const r=j(_(t)),i=S(r,c.__wbindgen_malloc,c.__wbindgen_realloc),s=h;w().setInt32(n+4*1,s,!0),w().setInt32(n+4*0,i,!0)},e.wbg.__wbindgen_throw=function(n,t){throw new Error(A(n,t))},e}function I(e,n){return c=e.exports,M.__wbindgen_wasm_module=n,a=null,g=null,c}async function M(e){if(c!==void 0)return c;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/assets/jieba_rs_wasm_bg-D71S8YX3.wasm",import.meta.url));const n=D();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await W(await e,n);return I(t,r)}export{M as _,R as c};
