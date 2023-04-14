(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ou(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function au(r){if(ze(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Rt(n)?Ug(n):au(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Rt(r))return r;if(vt(r))return r}}const Ig=/;(?![^(]*\))/g,Ng=/:([^]+)/,Og=/\/\*.*?\*\//gs;function Ug(r){const e={};return r.replace(Og,"").split(Ig).forEach(t=>{if(t){const n=t.split(Ng);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function lu(r){let e="";if(Rt(r))e=r;else if(ze(r))for(let t=0;t<r.length;t++){const n=lu(r[t]);n&&(e+=n+" ")}else if(vt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kg=ou(Fg);function Zd(r){return!!r||r===""}const ot={},ds=[],Fn=()=>{},Bg=()=>!1,zg=/^on[^a-z]/,ja=r=>zg.test(r),cu=r=>r.startsWith("onUpdate:"),Ht=Object.assign,uu=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},Hg=Object.prototype.hasOwnProperty,Ke=(r,e)=>Hg.call(r,e),ze=Array.isArray,fo=r=>Ya(r)==="[object Map]",Vg=r=>Ya(r)==="[object Set]",Ge=r=>typeof r=="function",Rt=r=>typeof r=="string",hu=r=>typeof r=="symbol",vt=r=>r!==null&&typeof r=="object",Jd=r=>vt(r)&&Ge(r.then)&&Ge(r.catch),Gg=Object.prototype.toString,Ya=r=>Gg.call(r),Wg=r=>Ya(r).slice(8,-1),Xg=r=>Ya(r)==="[object Object]",fu=r=>Rt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,wa=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},qg=/-(\w)/g,bs=Ka(r=>r.replace(qg,(e,t)=>t?t.toUpperCase():"")),jg=/\B([A-Z])/g,Vs=Ka(r=>r.replace(jg,"-$1").toLowerCase()),Qd=Ka(r=>r.charAt(0).toUpperCase()+r.slice(1)),gl=Ka(r=>r?`on${Qd(r)}`:""),bo=(r,e)=>!Object.is(r,e),_l=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ia=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},Yg=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let dh;const Kg=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dn;class $g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Dn;try{return Dn=this,e()}finally{Dn=t}}}on(){Dn=this}off(){Dn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Zg(r,e=Dn){e&&e.active&&e.effects.push(r)}function Jg(){return Dn}const du=r=>{const e=new Set(r);return e.w=0,e.n=0,e},ep=r=>(r.w&ji)>0,tp=r=>(r.n&ji)>0,Qg=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=ji},e_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];ep(i)&&!tp(i)?i.delete(r):e[t++]=i,i.w&=~ji,i.n&=~ji}e.length=t}},xc=new WeakMap;let oo=0,ji=1;const vc=30;let Nn;const Sr=Symbol(""),yc=Symbol("");class pu{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Zg(this,n)}run(){if(!this.active)return this.fn();let e=Nn,t=Vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nn,Nn=this,Vi=!0,ji=1<<++oo,oo<=vc?Qg(this):ph(this),this.fn()}finally{oo<=vc&&e_(this),ji=1<<--oo,Nn=this.parent,Vi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nn===this?this.deferStop=!0:this.active&&(ph(this),this.onStop&&this.onStop(),this.active=!1)}}function ph(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Vi=!0;const np=[];function Gs(){np.push(Vi),Vi=!1}function Ws(){const r=np.pop();Vi=r===void 0?!0:r}function tn(r,e,t){if(Vi&&Nn){let n=xc.get(r);n||xc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=du()),ip(i)}}function ip(r,e){let t=!1;oo<=vc?tp(r)||(r.n|=ji,t=!ep(r)):t=!r.has(Nn),t&&(r.add(Nn),Nn.deps.push(r))}function yi(r,e,t,n,i,s){const o=xc.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(r)?fu(t)&&a.push(o.get("length")):(a.push(o.get(Sr)),fo(r)&&a.push(o.get(yc)));break;case"delete":ze(r)||(a.push(o.get(Sr)),fo(r)&&a.push(o.get(yc)));break;case"set":fo(r)&&a.push(o.get(Sr));break}if(a.length===1)a[0]&&Mc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Mc(du(l))}}function Mc(r,e){const t=ze(r)?r:[...r];for(const n of t)n.computed&&mh(n);for(const n of t)n.computed||mh(n)}function mh(r,e){(r!==Nn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const t_=ou("__proto__,__v_isRef,__isVue"),rp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(hu)),n_=mu(),i_=mu(!1,!0),r_=mu(!0),gh=s_();function s_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)tn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map($e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Gs();const n=$e(this)[e].apply(this,t);return Ws(),n}}),r}function o_(r){const e=$e(this);return tn(e,"has",r),e.hasOwnProperty(r)}function mu(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?S_:cp:e?lp:ap).get(n))return n;const o=ze(n);if(!r){if(o&&Ke(gh,i))return Reflect.get(gh,i,s);if(i==="hasOwnProperty")return o_}const a=Reflect.get(n,i,s);return(hu(i)?rp.has(i):t_(i))||(r||tn(n,"get",i),e)?a:kt(a)?o&&fu(i)?a:a.value:vt(a)?r?up(a):xu(a):a}}const a_=sp(),l_=sp(!0);function sp(r=!1){return function(t,n,i,s){let o=t[n];if(ws(o)&&kt(o)&&!kt(i))return!1;if(!r&&(!Na(i)&&!ws(i)&&(o=$e(o),i=$e(i)),!ze(t)&&kt(o)&&!kt(i)))return o.value=i,!0;const a=ze(t)&&fu(n)?Number(n)<t.length:Ke(t,n),l=Reflect.set(t,n,i,s);return t===$e(s)&&(a?bo(i,o)&&yi(t,"set",n,i):yi(t,"add",n,i)),l}}function c_(r,e){const t=Ke(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&yi(r,"delete",e,void 0),n}function u_(r,e){const t=Reflect.has(r,e);return(!hu(e)||!rp.has(e))&&tn(r,"has",e),t}function h_(r){return tn(r,"iterate",ze(r)?"length":Sr),Reflect.ownKeys(r)}const op={get:n_,set:a_,deleteProperty:c_,has:u_,ownKeys:h_},f_={get:r_,set(r,e){return!0},deleteProperty(r,e){return!0}},d_=Ht({},op,{get:i_,set:l_}),gu=r=>r,$a=r=>Reflect.getPrototypeOf(r);function Xo(r,e,t=!1,n=!1){r=r.__v_raw;const i=$e(r),s=$e(e);t||(e!==s&&tn(i,"get",e),tn(i,"get",s));const{has:o}=$a(i),a=n?gu:t?yu:wo;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function qo(r,e=!1){const t=this.__v_raw,n=$e(t),i=$e(r);return e||(r!==i&&tn(n,"has",r),tn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function jo(r,e=!1){return r=r.__v_raw,!e&&tn($e(r),"iterate",Sr),Reflect.get(r,"size",r)}function _h(r){r=$e(r);const e=$e(this);return $a(e).has.call(e,r)||(e.add(r),yi(e,"add",r,r)),this}function xh(r,e){e=$e(e);const t=$e(this),{has:n,get:i}=$a(t);let s=n.call(t,r);s||(r=$e(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?bo(e,o)&&yi(t,"set",r,e):yi(t,"add",r,e),this}function vh(r){const e=$e(this),{has:t,get:n}=$a(e);let i=t.call(e,r);i||(r=$e(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&yi(e,"delete",r,void 0),s}function yh(){const r=$e(this),e=r.size!==0,t=r.clear();return e&&yi(r,"clear",void 0,void 0),t}function Yo(r,e){return function(n,i){const s=this,o=s.__v_raw,a=$e(o),l=e?gu:r?yu:wo;return!r&&tn(a,"iterate",Sr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Ko(r,e,t){return function(...n){const i=this.__v_raw,s=$e(i),o=fo(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?gu:e?yu:wo;return!e&&tn(s,"iterate",l?yc:Sr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ci(r){return function(...e){return r==="delete"?!1:this}}function p_(){const r={get(s){return Xo(this,s)},get size(){return jo(this)},has:qo,add:_h,set:xh,delete:vh,clear:yh,forEach:Yo(!1,!1)},e={get(s){return Xo(this,s,!1,!0)},get size(){return jo(this)},has:qo,add:_h,set:xh,delete:vh,clear:yh,forEach:Yo(!1,!0)},t={get(s){return Xo(this,s,!0)},get size(){return jo(this,!0)},has(s){return qo.call(this,s,!0)},add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear"),forEach:Yo(!0,!1)},n={get(s){return Xo(this,s,!0,!0)},get size(){return jo(this,!0)},has(s){return qo.call(this,s,!0)},add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear"),forEach:Yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ko(s,!1,!1),t[s]=Ko(s,!0,!1),e[s]=Ko(s,!1,!0),n[s]=Ko(s,!0,!0)}),[r,t,e,n]}const[m_,g_,__,x_]=p_();function _u(r,e){const t=e?r?x_:__:r?g_:m_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(Ke(t,i)&&i in n?t:n,i,s)}const v_={get:_u(!1,!1)},y_={get:_u(!1,!0)},M_={get:_u(!0,!1)},ap=new WeakMap,lp=new WeakMap,cp=new WeakMap,S_=new WeakMap;function b_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(r){return r.__v_skip||!Object.isExtensible(r)?0:b_(Wg(r))}function xu(r){return ws(r)?r:vu(r,!1,op,v_,ap)}function T_(r){return vu(r,!1,d_,y_,lp)}function up(r){return vu(r,!0,f_,M_,cp)}function vu(r,e,t,n,i){if(!vt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=w_(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function ps(r){return ws(r)?ps(r.__v_raw):!!(r&&r.__v_isReactive)}function ws(r){return!!(r&&r.__v_isReadonly)}function Na(r){return!!(r&&r.__v_isShallow)}function hp(r){return ps(r)||ws(r)}function $e(r){const e=r&&r.__v_raw;return e?$e(e):r}function fp(r){return Ia(r,"__v_skip",!0),r}const wo=r=>vt(r)?xu(r):r,yu=r=>vt(r)?up(r):r;function dp(r){Vi&&Nn&&(r=$e(r),ip(r.dep||(r.dep=du())))}function pp(r,e){r=$e(r);const t=r.dep;t&&Mc(t)}function kt(r){return!!(r&&r.__v_isRef===!0)}function E_(r){return A_(r,!1)}function A_(r,e){return kt(r)?r:new C_(r,e)}class C_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:wo(e)}get value(){return dp(this),this._value}set value(e){const t=this.__v_isShallow||Na(e)||ws(e);e=t?e:$e(e),bo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:wo(e),pp(this))}}function P_(r){return kt(r)?r.value:r}const L_={get:(r,e,t)=>P_(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return kt(i)&&!kt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function mp(r){return ps(r)?r:new Proxy(r,L_)}var gp;class R_{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[gp]=!1,this._dirty=!0,this.effect=new pu(e,()=>{this._dirty||(this._dirty=!0,pp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=$e(this);return dp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}gp="__v_isReadonly";function D_(r,e,t=!1){let n,i;const s=Ge(r);return s?(n=r,i=Fn):(n=r.get,i=r.set),new R_(n,i,s||!i,t)}function Gi(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){Za(s,e,t)}return i}function Tn(r,e,t,n){if(Ge(r)){const s=Gi(r,e,t,n);return s&&Jd(s)&&s.catch(o=>{Za(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(Tn(r[s],e,t,n));return i}function Za(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Gi(l,null,10,[r,o,a]);return}}I_(r,t,i,n)}function I_(r,e,t,n=!0){console.error(r)}let To=!1,Sc=!1;const Ut=[];let Zn=0;const ms=[];let di=null,dr=0;const _p=Promise.resolve();let Mu=null;function N_(r){const e=Mu||_p;return r?e.then(this?r.bind(this):r):e}function O_(r){let e=Zn+1,t=Ut.length;for(;e<t;){const n=e+t>>>1;Eo(Ut[n])<r?e=n+1:t=n}return e}function Su(r){(!Ut.length||!Ut.includes(r,To&&r.allowRecurse?Zn+1:Zn))&&(r.id==null?Ut.push(r):Ut.splice(O_(r.id),0,r),xp())}function xp(){!To&&!Sc&&(Sc=!0,Mu=_p.then(yp))}function U_(r){const e=Ut.indexOf(r);e>Zn&&Ut.splice(e,1)}function F_(r){ze(r)?ms.push(...r):(!di||!di.includes(r,r.allowRecurse?dr+1:dr))&&ms.push(r),xp()}function Mh(r,e=To?Zn+1:0){for(;e<Ut.length;e++){const t=Ut[e];t&&t.pre&&(Ut.splice(e,1),e--,t())}}function vp(r){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,di){di.push(...e);return}for(di=e,di.sort((t,n)=>Eo(t)-Eo(n)),dr=0;dr<di.length;dr++)di[dr]();di=null,dr=0}}const Eo=r=>r.id==null?1/0:r.id,k_=(r,e)=>{const t=Eo(r)-Eo(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function yp(r){Sc=!1,To=!0,Ut.sort(k_);const e=Fn;try{for(Zn=0;Zn<Ut.length;Zn++){const t=Ut[Zn];t&&t.active!==!1&&Gi(t,null,14)}}finally{Zn=0,Ut.length=0,vp(),To=!1,Mu=null,(Ut.length||ms.length)&&yp()}}function B_(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||ot;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ot;f&&(i=t.map(d=>Rt(d)?d.trim():d)),h&&(i=t.map(Yg))}let a,l=n[a=gl(e)]||n[a=gl(bs(e))];!l&&s&&(l=n[a=gl(Vs(e))]),l&&Tn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,Tn(c,r,6,i)}}function Mp(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Ge(r)){const l=c=>{const u=Mp(c,e,!0);u&&(a=!0,Ht(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(vt(r)&&n.set(r,null),null):(ze(s)?s.forEach(l=>o[l]=null):Ht(o,s),vt(r)&&n.set(r,o),o)}function Ja(r,e){return!r||!ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(r,e[0].toLowerCase()+e.slice(1))||Ke(r,Vs(e))||Ke(r,e))}let On=null,Qa=null;function Oa(r){const e=On;return On=r,Qa=r&&r.type.__scopeId||null,e}function z_(r){Qa=r}function H_(){Qa=null}function V_(r,e=On,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Lh(-1);const s=Oa(e);let o;try{o=r(...i)}finally{Oa(s),n._d&&Lh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function xl(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=r;let p,m;const b=Oa(r);try{if(t.shapeFlag&4){const x=i||n;p=Kn(u.call(x,x,h,s,d,f,_)),m=l}else{const x=e;p=Kn(x.length>1?x(s,{attrs:l,slots:a,emit:c}):x(s,null)),m=e.props?l:G_(l)}}catch(x){mo.length=0,Za(x,r,1),p=xi(_i)}let v=p;if(m&&g!==!1){const x=Object.keys(m),{shapeFlag:M}=v;x.length&&M&7&&(o&&x.some(cu)&&(m=W_(m,o)),v=Yi(v,m))}return t.dirs&&(v=Yi(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,Oa(b),p}const G_=r=>{let e;for(const t in r)(t==="class"||t==="style"||ja(t))&&((e||(e={}))[t]=r[t]);return e},W_=(r,e)=>{const t={};for(const n in r)(!cu(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function X_(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Sh(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Ja(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Sh(n,o,c):!0:!!o;return!1}function Sh(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Ja(t,s))return!0}return!1}function q_({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const j_=r=>r.__isSuspense;function Y_(r,e){e&&e.pendingBranch?ze(r)?e.effects.push(...r):e.effects.push(r):F_(r)}function K_(r,e){if(xt){let t=xt.provides;const n=xt.parent&&xt.parent.provides;n===t&&(t=xt.provides=Object.create(n)),t[r]=e}}function Ta(r,e,t=!1){const n=xt||On;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ge(e)?e.call(n.proxy):e}}const $o={};function vl(r,e,t){return Sp(r,e,t)}function Sp(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=ot){const a=Jg()===(xt==null?void 0:xt.scope)?xt:null;let l,c=!1,u=!1;if(kt(r)?(l=()=>r.value,c=Na(r)):ps(r)?(l=()=>r,n=!0):ze(r)?(u=!0,c=r.some(v=>ps(v)||Na(v)),l=()=>r.map(v=>{if(kt(v))return v.value;if(ps(v))return cs(v);if(Ge(v))return Gi(v,a,2)})):Ge(r)?e?l=()=>Gi(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Tn(r,a,3,[f])}:l=Fn,e&&n){const v=l;l=()=>cs(v())}let h,f=v=>{h=m.onStop=()=>{Gi(v,a,4)}},d;if(Co)if(f=Fn,e?t&&Tn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const v=q0();d=v.__watcherHandles||(v.__watcherHandles=[])}else return Fn;let _=u?new Array(r.length).fill($o):$o;const g=()=>{if(m.active)if(e){const v=m.run();(n||c||(u?v.some((x,M)=>bo(x,_[M])):bo(v,_)))&&(h&&h(),Tn(e,a,3,[v,_===$o?void 0:u&&_[0]===$o?[]:_,f]),_=v)}else m.run()};g.allowRecurse=!!e;let p;i==="sync"?p=g:i==="post"?p=()=>Yt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),p=()=>Su(g));const m=new pu(l,p);e?t?g():_=m.run():i==="post"?Yt(m.run.bind(m),a&&a.suspense):m.run();const b=()=>{m.stop(),a&&a.scope&&uu(a.scope.effects,m)};return d&&d.push(b),b}function $_(r,e,t){const n=this.proxy,i=Rt(r)?r.includes(".")?bp(n,r):()=>n[r]:r.bind(n,n);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=xt;Ts(this);const a=Sp(i,s.bind(n),t);return o?Ts(o):br(),a}function bp(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function cs(r,e){if(!vt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),kt(r))cs(r.value,e);else if(ze(r))for(let t=0;t<r.length;t++)cs(r[t],e);else if(Vg(r)||fo(r))r.forEach(t=>{cs(t,e)});else if(Xg(r))for(const t in r)cs(r[t],e);return r}function Z_(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bu(()=>{r.isMounted=!0}),Ap(()=>{r.isUnmounting=!0}),r}const dn=[Function,Array],J_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},setup(r,{slots:e}){const t=k0(),n=Z_();let i;return()=>{const s=e.default&&Tp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const g of s)if(g.type!==_i){o=g;break}}const a=$e(r),{mode:l}=a;if(n.isLeaving)return yl(o);const c=bh(o);if(!c)return yl(o);const u=bc(c,a,n,t);wc(c,u);const h=t.subTree,f=h&&bh(h);let d=!1;const{getTransitionKey:_}=c.type;if(_){const g=_();i===void 0?i=g:g!==i&&(i=g,d=!0)}if(f&&f.type!==_i&&(!pr(c,f)||d)){const g=bc(f,a,n,t);if(wc(f,g),l==="out-in")return n.isLeaving=!0,g.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},yl(o);l==="in-out"&&c.type!==_i&&(g.delayLeave=(p,m,b)=>{const v=wp(n,f);v[String(f.key)]=f,p._leaveCb=()=>{m(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Q_=J_;function wp(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function bc(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:g,onAppear:p,onAfterAppear:m,onAppearCancelled:b}=e,v=String(r.key),x=wp(t,r),M=(A,y)=>{A&&Tn(A,n,9,y)},C=(A,y)=>{const T=y[1];M(A,y),ze(A)?A.every(V=>V.length<=1)&&T():A.length<=1&&T()},L={mode:s,persisted:o,beforeEnter(A){let y=a;if(!t.isMounted)if(i)y=g||a;else return;A._leaveCb&&A._leaveCb(!0);const T=x[v];T&&pr(r,T)&&T.el._leaveCb&&T.el._leaveCb(),M(y,[A])},enter(A){let y=l,T=c,V=u;if(!t.isMounted)if(i)y=p||l,T=m||c,V=b||u;else return;let W=!1;const N=A._enterCb=F=>{W||(W=!0,F?M(V,[A]):M(T,[A]),L.delayedLeave&&L.delayedLeave(),A._enterCb=void 0)};y?C(y,[A,N]):N()},leave(A,y){const T=String(r.key);if(A._enterCb&&A._enterCb(!0),t.isUnmounting)return y();M(h,[A]);let V=!1;const W=A._leaveCb=N=>{V||(V=!0,y(),N?M(_,[A]):M(d,[A]),A._leaveCb=void 0,x[T]===r&&delete x[T])};x[T]=r,f?C(f,[A,W]):W()},clone(A){return bc(A,e,t,n)}};return L}function yl(r){if(el(r))return r=Yi(r),r.children=null,r}function bh(r){return el(r)?r.children?r.children[0]:void 0:r}function wc(r,e){r.shapeFlag&6&&r.component?wc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function Tp(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Yn?(o.patchFlag&128&&i++,n=n.concat(Tp(o.children,e,a))):(e||o.type!==_i)&&n.push(a!=null?Yi(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const Ea=r=>!!r.type.__asyncLoader,el=r=>r.type.__isKeepAlive;function e0(r,e){Ep(r,"a",e)}function t0(r,e){Ep(r,"da",e)}function Ep(r,e,t=xt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(tl(e,n,t),t){let i=t.parent;for(;i&&i.parent;)el(i.parent.vnode)&&n0(n,e,t,i),i=i.parent}}function n0(r,e,t,n){const i=tl(e,r,n,!0);Cp(()=>{uu(n[e],i)},t)}function tl(r,e,t=xt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Gs(),Ts(t);const a=Tn(e,t,r,o);return br(),Ws(),a});return n?i.unshift(s):i.push(s),s}}const wi=r=>(e,t=xt)=>(!Co||r==="sp")&&tl(r,(...n)=>e(...n),t),i0=wi("bm"),bu=wi("m"),r0=wi("bu"),s0=wi("u"),Ap=wi("bum"),Cp=wi("um"),o0=wi("sp"),a0=wi("rtg"),l0=wi("rtc");function c0(r,e=xt){tl("ec",r,e)}function nr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Gs(),Tn(l,t,8,[r.el,a,r,e]),Ws())}}const u0=Symbol(),Tc=r=>r?kp(r)?Pu(r)||r.proxy:Tc(r.parent):null,po=Ht(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Tc(r.parent),$root:r=>Tc(r.root),$emit:r=>r.emit,$options:r=>wu(r),$forceUpdate:r=>r.f||(r.f=()=>Su(r.update)),$nextTick:r=>r.n||(r.n=N_.bind(r.proxy)),$watch:r=>$_.bind(r)}),Ml=(r,e)=>r!==ot&&!r.__isScriptSetup&&Ke(r,e),h0={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Ml(n,e))return o[e]=1,n[e];if(i!==ot&&Ke(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==ot&&Ke(t,e))return o[e]=4,t[e];Ec&&(o[e]=0)}}const u=po[e];let h,f;if(u)return e==="$attrs"&&tn(r,"get",e),u(r);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ot&&Ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Ml(i,e)?(i[e]=t,!0):n!==ot&&Ke(n,e)?(n[e]=t,!0):Ke(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==ot&&Ke(r,o)||Ml(e,o)||(a=s[0])&&Ke(a,o)||Ke(n,o)||Ke(po,o)||Ke(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:Ke(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Ec=!0;function f0(r){const e=wu(r),t=r.proxy,n=r.ctx;Ec=!1,e.beforeCreate&&wh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:v,unmounted:x,render:M,renderTracked:C,renderTriggered:L,errorCaptured:A,serverPrefetch:y,expose:T,inheritAttrs:V,components:W,directives:N,filters:F}=e;if(c&&d0(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const j in o){const H=o[j];Ge(H)&&(n[j]=H.bind(t))}if(i){const j=i.call(t,t);vt(j)&&(r.data=xu(j))}if(Ec=!0,s)for(const j in s){const H=s[j],he=Ge(H)?H.bind(t,t):Ge(H.get)?H.get.bind(t,t):Fn,ae=!Ge(H)&&Ge(H.set)?H.set.bind(t):Fn,Te=W0({get:he,set:ae});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>Te.value,set:fe=>Te.value=fe})}if(a)for(const j in a)Pp(a[j],n,t,j);if(l){const j=Ge(l)?l.call(t):l;Reflect.ownKeys(j).forEach(H=>{K_(H,j[H])})}u&&wh(u,r,"c");function $(j,H){ze(H)?H.forEach(he=>j(he.bind(t))):H&&j(H.bind(t))}if($(i0,h),$(bu,f),$(r0,d),$(s0,_),$(e0,g),$(t0,p),$(c0,A),$(l0,C),$(a0,L),$(Ap,b),$(Cp,x),$(o0,y),ze(T))if(T.length){const j=r.exposed||(r.exposed={});T.forEach(H=>{Object.defineProperty(j,H,{get:()=>t[H],set:he=>t[H]=he})})}else r.exposed||(r.exposed={});M&&r.render===Fn&&(r.render=M),V!=null&&(r.inheritAttrs=V),W&&(r.components=W),N&&(r.directives=N)}function d0(r,e,t=Fn,n=!1){ze(r)&&(r=Ac(r));for(const i in r){const s=r[i];let o;vt(s)?"default"in s?o=Ta(s.from||i,s.default,!0):o=Ta(s.from||i):o=Ta(s),kt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wh(r,e,t){Tn(ze(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Pp(r,e,t,n){const i=n.includes(".")?bp(t,n):()=>t[n];if(Rt(r)){const s=e[r];Ge(s)&&vl(i,s)}else if(Ge(r))vl(i,r.bind(t));else if(vt(r))if(ze(r))r.forEach(s=>Pp(s,e,t,n));else{const s=Ge(r.handler)?r.handler.bind(t):e[r.handler];Ge(s)&&vl(i,s,r)}}function wu(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Ua(l,c,o,!0)),Ua(l,e,o)),vt(e)&&s.set(e,l),l}function Ua(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Ua(r,s,t,!0),i&&i.forEach(o=>Ua(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=p0[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const p0={data:Th,props:cr,emits:cr,methods:cr,computed:cr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:cr,directives:cr,watch:g0,provide:Th,inject:m0};function Th(r,e){return e?r?function(){return Ht(Ge(r)?r.call(this,this):r,Ge(e)?e.call(this,this):e)}:e:r}function m0(r,e){return cr(Ac(r),Ac(e))}function Ac(r){if(ze(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Xt(r,e){return r?[...new Set([].concat(r,e))]:e}function cr(r,e){return r?Ht(Ht(Object.create(null),r),e):e}function g0(r,e){if(!r)return e;if(!e)return r;const t=Ht(Object.create(null),r);for(const n in e)t[n]=Xt(r[n],e[n]);return t}function _0(r,e,t,n=!1){const i={},s={};Ia(s,il,1),r.propsDefaults=Object.create(null),Lp(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:T_(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function x0(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=$e(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ja(r.emitsOptions,f))continue;const d=e[f];if(l)if(Ke(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=bs(f);i[_]=Cc(l,a,_,d,r,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Lp(r,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!Ke(e,h)&&((u=Vs(h))===h||!Ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Cc(l,a,h,void 0,r,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ke(e,h))&&(delete s[h],c=!0)}c&&yi(r,"set","$attrs")}function Lp(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(wa(l))continue;const c=e[l];let u;i&&Ke(i,u=bs(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ja(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||ot;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Cc(i,l,h,c[h],r,!Ke(c,h))}}return o}function Cc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=Ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ge(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Ts(i),n=c[t]=l.call(null,e),br())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Vs(t))&&(n=!0))}return n}function Rp(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Ge(r)){const u=h=>{l=!0;const[f,d]=Rp(h,e,!0);Ht(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return vt(r)&&n.set(r,ds),ds;if(ze(s))for(let u=0;u<s.length;u++){const h=bs(s[u]);Eh(h)&&(o[h]=ot)}else if(s)for(const u in s){const h=bs(u);if(Eh(h)){const f=s[u],d=o[h]=ze(f)||Ge(f)?{type:f}:Object.assign({},f);if(d){const _=Ph(Boolean,d.type),g=Ph(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||Ke(d,"default"))&&a.push(h)}}}const c=[o,a];return vt(r)&&n.set(r,c),c}function Eh(r){return r[0]!=="$"}function Ah(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Ch(r,e){return Ah(r)===Ah(e)}function Ph(r,e){return ze(e)?e.findIndex(t=>Ch(t,r)):Ge(e)&&Ch(e,r)?0:-1}const Dp=r=>r[0]==="_"||r==="$stable",Tu=r=>ze(r)?r.map(Kn):[Kn(r)],v0=(r,e,t)=>{if(e._n)return e;const n=V_((...i)=>Tu(e(...i)),t);return n._c=!1,n},Ip=(r,e,t)=>{const n=r._ctx;for(const i in r){if(Dp(i))continue;const s=r[i];if(Ge(s))e[i]=v0(i,s,n);else if(s!=null){const o=Tu(s);e[i]=()=>o}}},Np=(r,e)=>{const t=Tu(e);r.slots.default=()=>t},y0=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=$e(e),Ia(e,"_",t)):Ip(e,r.slots={})}else r.slots={},e&&Np(r,e);Ia(r.slots,il,1)},M0=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ht(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Ip(e,i)),o=e}else e&&(Np(r,e),o={default:1});if(s)for(const a in i)!Dp(a)&&!(a in o)&&delete i[a]};function Op(){return{app:null,config:{isNativeTag:Bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let S0=0;function b0(r,e){return function(n,i=null){Ge(n)||(n=Object.assign({},n)),i!=null&&!vt(i)&&(i=null);const s=Op(),o=new Set;let a=!1;const l=s.app={_uid:S0++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:j0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=xi(n,i);return f.appContext=s,u&&e?e(f,c):r(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Pu(f.component)||f.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Pc(r,e,t,n,i=!1){if(ze(r)){r.forEach((f,d)=>Pc(f,e&&(ze(e)?e[d]:e),t,n,i));return}if(Ea(n)&&!i)return;const s=n.shapeFlag&4?Pu(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,Ke(h,c)&&(h[c]=null)):kt(c)&&(c.value=null)),Ge(l))Gi(l,a,12,[o,u]);else{const f=Rt(l),d=kt(l);if(f||d){const _=()=>{if(r.f){const g=f?Ke(h,l)?h[l]:u[l]:l.value;i?ze(g)&&uu(g,s):ze(g)?g.includes(s)||g.push(s):f?(u[l]=[s],Ke(h,l)&&(h[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else f?(u[l]=o,Ke(h,l)&&(h[l]=o)):d&&(l.value=o,r.k&&(u[r.k]=o))};o?(_.id=-1,Yt(_,t)):_()}}}const Yt=Y_;function w0(r){return T0(r)}function T0(r,e){const t=Kg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Fn,insertStaticContent:_}=r,g=(P,R,k,ee=null,Q=null,ce=null,pe=!1,re=null,le=!!R.dynamicChildren)=>{if(P===R)return;P&&!pr(P,R)&&(ee=Y(P),fe(P,Q,ce,!0),P=null),R.patchFlag===-2&&(le=!1,R.dynamicChildren=null);const{type:oe,ref:w,shapeFlag:S}=R;switch(oe){case nl:p(P,R,k,ee);break;case _i:m(P,R,k,ee);break;case Sl:P==null&&b(R,k,ee,pe);break;case Yn:W(P,R,k,ee,Q,ce,pe,re,le);break;default:S&1?M(P,R,k,ee,Q,ce,pe,re,le):S&6?N(P,R,k,ee,Q,ce,pe,re,le):(S&64||S&128)&&oe.process(P,R,k,ee,Q,ce,pe,re,le,Ee)}w!=null&&Q&&Pc(w,P&&P.ref,ce,R||P,!R)},p=(P,R,k,ee)=>{if(P==null)n(R.el=a(R.children),k,ee);else{const Q=R.el=P.el;R.children!==P.children&&c(Q,R.children)}},m=(P,R,k,ee)=>{P==null?n(R.el=l(R.children||""),k,ee):R.el=P.el},b=(P,R,k,ee)=>{[P.el,P.anchor]=_(P.children,R,k,ee,P.el,P.anchor)},v=({el:P,anchor:R},k,ee)=>{let Q;for(;P&&P!==R;)Q=f(P),n(P,k,ee),P=Q;n(R,k,ee)},x=({el:P,anchor:R})=>{let k;for(;P&&P!==R;)k=f(P),i(P),P=k;i(R)},M=(P,R,k,ee,Q,ce,pe,re,le)=>{pe=pe||R.type==="svg",P==null?C(R,k,ee,Q,ce,pe,re,le):y(P,R,Q,ce,pe,re,le)},C=(P,R,k,ee,Q,ce,pe,re)=>{let le,oe;const{type:w,props:S,shapeFlag:U,transition:q,dirs:J}=P;if(le=P.el=o(P.type,ce,S&&S.is,S),U&8?u(le,P.children):U&16&&A(P.children,le,null,ee,Q,ce&&w!=="foreignObject",pe,re),J&&nr(P,null,ee,"created"),L(le,P,P.scopeId,pe,ee),S){for(const D in S)D!=="value"&&!wa(D)&&s(le,D,null,S[D],ce,P.children,ee,Q,xe);"value"in S&&s(le,"value",null,S.value),(oe=S.onVnodeBeforeMount)&&Wn(oe,ee,P)}J&&nr(P,null,ee,"beforeMount");const ue=(!Q||Q&&!Q.pendingBranch)&&q&&!q.persisted;ue&&q.beforeEnter(le),n(le,R,k),((oe=S&&S.onVnodeMounted)||ue||J)&&Yt(()=>{oe&&Wn(oe,ee,P),ue&&q.enter(le),J&&nr(P,null,ee,"mounted")},Q)},L=(P,R,k,ee,Q)=>{if(k&&d(P,k),ee)for(let ce=0;ce<ee.length;ce++)d(P,ee[ce]);if(Q){let ce=Q.subTree;if(R===ce){const pe=Q.vnode;L(P,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},A=(P,R,k,ee,Q,ce,pe,re,le=0)=>{for(let oe=le;oe<P.length;oe++){const w=P[oe]=re?Oi(P[oe]):Kn(P[oe]);g(null,w,R,k,ee,Q,ce,pe,re)}},y=(P,R,k,ee,Q,ce,pe)=>{const re=R.el=P.el;let{patchFlag:le,dynamicChildren:oe,dirs:w}=R;le|=P.patchFlag&16;const S=P.props||ot,U=R.props||ot;let q;k&&ir(k,!1),(q=U.onVnodeBeforeUpdate)&&Wn(q,k,R,P),w&&nr(R,P,k,"beforeUpdate"),k&&ir(k,!0);const J=Q&&R.type!=="foreignObject";if(oe?T(P.dynamicChildren,oe,re,k,ee,J,ce):pe||H(P,R,re,null,k,ee,J,ce,!1),le>0){if(le&16)V(re,R,S,U,k,ee,Q);else if(le&2&&S.class!==U.class&&s(re,"class",null,U.class,Q),le&4&&s(re,"style",S.style,U.style,Q),le&8){const ue=R.dynamicProps;for(let D=0;D<ue.length;D++){const K=ue[D],X=S[K],_e=U[K];(_e!==X||K==="value")&&s(re,K,X,_e,Q,P.children,k,ee,xe)}}le&1&&P.children!==R.children&&u(re,R.children)}else!pe&&oe==null&&V(re,R,S,U,k,ee,Q);((q=U.onVnodeUpdated)||w)&&Yt(()=>{q&&Wn(q,k,R,P),w&&nr(R,P,k,"updated")},ee)},T=(P,R,k,ee,Q,ce,pe)=>{for(let re=0;re<R.length;re++){const le=P[re],oe=R[re],w=le.el&&(le.type===Yn||!pr(le,oe)||le.shapeFlag&70)?h(le.el):k;g(le,oe,w,null,ee,Q,ce,pe,!0)}},V=(P,R,k,ee,Q,ce,pe)=>{if(k!==ee){if(k!==ot)for(const re in k)!wa(re)&&!(re in ee)&&s(P,re,k[re],null,pe,R.children,Q,ce,xe);for(const re in ee){if(wa(re))continue;const le=ee[re],oe=k[re];le!==oe&&re!=="value"&&s(P,re,oe,le,pe,R.children,Q,ce,xe)}"value"in ee&&s(P,"value",k.value,ee.value)}},W=(P,R,k,ee,Q,ce,pe,re,le)=>{const oe=R.el=P?P.el:a(""),w=R.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:U,slotScopeIds:q}=R;q&&(re=re?re.concat(q):q),P==null?(n(oe,k,ee),n(w,k,ee),A(R.children,k,w,Q,ce,pe,re,le)):S>0&&S&64&&U&&P.dynamicChildren?(T(P.dynamicChildren,U,k,Q,ce,pe,re),(R.key!=null||Q&&R===Q.subTree)&&Up(P,R,!0)):H(P,R,k,w,Q,ce,pe,re,le)},N=(P,R,k,ee,Q,ce,pe,re,le)=>{R.slotScopeIds=re,P==null?R.shapeFlag&512?Q.ctx.activate(R,k,ee,pe,le):F(R,k,ee,Q,ce,pe,le):z(P,R,le)},F=(P,R,k,ee,Q,ce,pe)=>{const re=P.component=F0(P,ee,Q);if(el(P)&&(re.ctx.renderer=Ee),B0(re),re.asyncDep){if(Q&&Q.registerDep(re,$),!P.el){const le=re.subTree=xi(_i);m(null,le,R,k)}return}$(re,P,R,k,Q,ce,pe)},z=(P,R,k)=>{const ee=R.component=P.component;if(X_(P,R,k))if(ee.asyncDep&&!ee.asyncResolved){j(ee,R,k);return}else ee.next=R,U_(ee.update),ee.update();else R.el=P.el,ee.vnode=R},$=(P,R,k,ee,Q,ce,pe)=>{const re=()=>{if(P.isMounted){let{next:w,bu:S,u:U,parent:q,vnode:J}=P,ue=w,D;ir(P,!1),w?(w.el=J.el,j(P,w,pe)):w=J,S&&_l(S),(D=w.props&&w.props.onVnodeBeforeUpdate)&&Wn(D,q,w,J),ir(P,!0);const K=xl(P),X=P.subTree;P.subTree=K,g(X,K,h(X.el),Y(X),P,Q,ce),w.el=K.el,ue===null&&q_(P,K.el),U&&Yt(U,Q),(D=w.props&&w.props.onVnodeUpdated)&&Yt(()=>Wn(D,q,w,J),Q)}else{let w;const{el:S,props:U}=R,{bm:q,m:J,parent:ue}=P,D=Ea(R);if(ir(P,!1),q&&_l(q),!D&&(w=U&&U.onVnodeBeforeMount)&&Wn(w,ue,R),ir(P,!0),S&&Pe){const K=()=>{P.subTree=xl(P),Pe(S,P.subTree,P,Q,null)};D?R.type.__asyncLoader().then(()=>!P.isUnmounted&&K()):K()}else{const K=P.subTree=xl(P);g(null,K,k,ee,P,Q,ce),R.el=K.el}if(J&&Yt(J,Q),!D&&(w=U&&U.onVnodeMounted)){const K=R;Yt(()=>Wn(w,ue,K),Q)}(R.shapeFlag&256||ue&&Ea(ue.vnode)&&ue.vnode.shapeFlag&256)&&P.a&&Yt(P.a,Q),P.isMounted=!0,R=k=ee=null}},le=P.effect=new pu(re,()=>Su(oe),P.scope),oe=P.update=()=>le.run();oe.id=P.uid,ir(P,!0),oe()},j=(P,R,k)=>{R.component=P;const ee=P.vnode.props;P.vnode=R,P.next=null,x0(P,R.props,ee,k),M0(P,R.children,k),Gs(),Mh(),Ws()},H=(P,R,k,ee,Q,ce,pe,re,le=!1)=>{const oe=P&&P.children,w=P?P.shapeFlag:0,S=R.children,{patchFlag:U,shapeFlag:q}=R;if(U>0){if(U&128){ae(oe,S,k,ee,Q,ce,pe,re,le);return}else if(U&256){he(oe,S,k,ee,Q,ce,pe,re,le);return}}q&8?(w&16&&xe(oe,Q,ce),S!==oe&&u(k,S)):w&16?q&16?ae(oe,S,k,ee,Q,ce,pe,re,le):xe(oe,Q,ce,!0):(w&8&&u(k,""),q&16&&A(S,k,ee,Q,ce,pe,re,le))},he=(P,R,k,ee,Q,ce,pe,re,le)=>{P=P||ds,R=R||ds;const oe=P.length,w=R.length,S=Math.min(oe,w);let U;for(U=0;U<S;U++){const q=R[U]=le?Oi(R[U]):Kn(R[U]);g(P[U],q,k,null,Q,ce,pe,re,le)}oe>w?xe(P,Q,ce,!0,!1,S):A(R,k,ee,Q,ce,pe,re,le,S)},ae=(P,R,k,ee,Q,ce,pe,re,le)=>{let oe=0;const w=R.length;let S=P.length-1,U=w-1;for(;oe<=S&&oe<=U;){const q=P[oe],J=R[oe]=le?Oi(R[oe]):Kn(R[oe]);if(pr(q,J))g(q,J,k,null,Q,ce,pe,re,le);else break;oe++}for(;oe<=S&&oe<=U;){const q=P[S],J=R[U]=le?Oi(R[U]):Kn(R[U]);if(pr(q,J))g(q,J,k,null,Q,ce,pe,re,le);else break;S--,U--}if(oe>S){if(oe<=U){const q=U+1,J=q<w?R[q].el:ee;for(;oe<=U;)g(null,R[oe]=le?Oi(R[oe]):Kn(R[oe]),k,J,Q,ce,pe,re,le),oe++}}else if(oe>U)for(;oe<=S;)fe(P[oe],Q,ce,!0),oe++;else{const q=oe,J=oe,ue=new Map;for(oe=J;oe<=U;oe++){const ye=R[oe]=le?Oi(R[oe]):Kn(R[oe]);ye.key!=null&&ue.set(ye.key,oe)}let D,K=0;const X=U-J+1;let _e=!1,be=0;const we=new Array(X);for(oe=0;oe<X;oe++)we[oe]=0;for(oe=q;oe<=S;oe++){const ye=P[oe];if(K>=X){fe(ye,Q,ce,!0);continue}let Ae;if(ye.key!=null)Ae=ue.get(ye.key);else for(D=J;D<=U;D++)if(we[D-J]===0&&pr(ye,R[D])){Ae=D;break}Ae===void 0?fe(ye,Q,ce,!0):(we[Ae-J]=oe+1,Ae>=be?be=Ae:_e=!0,g(ye,R[Ae],k,null,Q,ce,pe,re,le),K++)}const Me=_e?E0(we):ds;for(D=Me.length-1,oe=X-1;oe>=0;oe--){const ye=J+oe,Ae=R[ye],Oe=ye+1<w?R[ye+1].el:ee;we[oe]===0?g(null,Ae,k,Oe,Q,ce,pe,re,le):_e&&(D<0||oe!==Me[D]?Te(Ae,k,Oe,2):D--)}}},Te=(P,R,k,ee,Q=null)=>{const{el:ce,type:pe,transition:re,children:le,shapeFlag:oe}=P;if(oe&6){Te(P.component.subTree,R,k,ee);return}if(oe&128){P.suspense.move(R,k,ee);return}if(oe&64){pe.move(P,R,k,Ee);return}if(pe===Yn){n(ce,R,k);for(let S=0;S<le.length;S++)Te(le[S],R,k,ee);n(P.anchor,R,k);return}if(pe===Sl){v(P,R,k);return}if(ee!==2&&oe&1&&re)if(ee===0)re.beforeEnter(ce),n(ce,R,k),Yt(()=>re.enter(ce),Q);else{const{leave:S,delayLeave:U,afterLeave:q}=re,J=()=>n(ce,R,k),ue=()=>{S(ce,()=>{J(),q&&q()})};U?U(ce,J,ue):ue()}else n(ce,R,k)},fe=(P,R,k,ee=!1,Q=!1)=>{const{type:ce,props:pe,ref:re,children:le,dynamicChildren:oe,shapeFlag:w,patchFlag:S,dirs:U}=P;if(re!=null&&Pc(re,null,k,P,!0),w&256){R.ctx.deactivate(P);return}const q=w&1&&U,J=!Ea(P);let ue;if(J&&(ue=pe&&pe.onVnodeBeforeUnmount)&&Wn(ue,R,P),w&6)me(P.component,k,ee);else{if(w&128){P.suspense.unmount(k,ee);return}q&&nr(P,null,R,"beforeUnmount"),w&64?P.type.remove(P,R,k,Q,Ee,ee):oe&&(ce!==Yn||S>0&&S&64)?xe(oe,R,k,!1,!0):(ce===Yn&&S&384||!Q&&w&16)&&xe(le,R,k),ee&&Z(P)}(J&&(ue=pe&&pe.onVnodeUnmounted)||q)&&Yt(()=>{ue&&Wn(ue,R,P),q&&nr(P,null,R,"unmounted")},k)},Z=P=>{const{type:R,el:k,anchor:ee,transition:Q}=P;if(R===Yn){ie(k,ee);return}if(R===Sl){x(P);return}const ce=()=>{i(k),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:re}=Q,le=()=>pe(k,ce);re?re(P.el,ce,le):le()}else ce()},ie=(P,R)=>{let k;for(;P!==R;)k=f(P),i(P),P=k;i(R)},me=(P,R,k)=>{const{bum:ee,scope:Q,update:ce,subTree:pe,um:re}=P;ee&&_l(ee),Q.stop(),ce&&(ce.active=!1,fe(pe,P,R,k)),re&&Yt(re,R),Yt(()=>{P.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},xe=(P,R,k,ee=!1,Q=!1,ce=0)=>{for(let pe=ce;pe<P.length;pe++)fe(P[pe],R,k,ee,Q)},Y=P=>P.shapeFlag&6?Y(P.component.subTree):P.shapeFlag&128?P.suspense.next():f(P.anchor||P.el),Re=(P,R,k)=>{P==null?R._vnode&&fe(R._vnode,null,null,!0):g(R._vnode||null,P,R,null,null,null,k),Mh(),vp(),R._vnode=P},Ee={p:g,um:fe,m:Te,r:Z,mt:F,mc:A,pc:H,pbc:T,n:Y,o:r};let ge,Pe;return e&&([ge,Pe]=e(Ee)),{render:Re,hydrate:ge,createApp:b0(Re,ge)}}function ir({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Up(r,e,t=!1){const n=r.children,i=e.children;if(ze(n)&&ze(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Oi(i[s]),a.el=o.el),t||Up(o,a)),a.type===nl&&(a.el=o.el)}}function E0(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const A0=r=>r.__isTeleport,Yn=Symbol(void 0),nl=Symbol(void 0),_i=Symbol(void 0),Sl=Symbol(void 0),mo=[];let Un=null;function Eu(r=!1){mo.push(Un=r?null:[])}function C0(){mo.pop(),Un=mo[mo.length-1]||null}let Ao=1;function Lh(r){Ao+=r}function P0(r){return r.dynamicChildren=Ao>0?Un||ds:null,C0(),Ao>0&&Un&&Un.push(r),r}function Au(r,e,t,n,i,s){return P0(nt(r,e,t,n,i,s,!0))}function L0(r){return r?r.__v_isVNode===!0:!1}function pr(r,e){return r.type===e.type&&r.key===e.key}const il="__vInternal",Fp=({key:r})=>r??null,Aa=({ref:r,ref_key:e,ref_for:t})=>r!=null?Rt(r)||kt(r)||Ge(r)?{i:On,r,k:e,f:!!t}:r:null;function nt(r,e=null,t=null,n=0,i=null,s=r===Yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Fp(e),ref:e&&Aa(e),scopeId:Qa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:On};return a?(Cu(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Ao>0&&!o&&Un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Un.push(l),l}const xi=R0;function R0(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===u0)&&(r=_i),L0(r)){const a=Yi(r,e,!0);return t&&Cu(a,t),Ao>0&&!s&&Un&&(a.shapeFlag&6?Un[Un.indexOf(r)]=a:Un.push(a)),a.patchFlag|=-2,a}if(G0(r)&&(r=r.__vccOpts),e){e=D0(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=lu(a)),vt(l)&&(hp(l)&&!ze(l)&&(l=Ht({},l)),e.style=au(l))}const o=Rt(r)?1:j_(r)?128:A0(r)?64:vt(r)?4:Ge(r)?2:0;return nt(r,e,t,n,i,o,s,!0)}function D0(r){return r?hp(r)||il in r?Ht({},r):r:null}function Yi(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?N0(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&Fp(a),ref:e&&e.ref?t&&i?ze(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Yn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Yi(r.ssContent),ssFallback:r.ssFallback&&Yi(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function I0(r=" ",e=0){return xi(nl,null,r,e)}function Kn(r){return r==null||typeof r=="boolean"?xi(_i):ze(r)?xi(Yn,null,r.slice()):typeof r=="object"?Oi(r):xi(nl,null,String(r))}function Oi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Yi(r)}function Cu(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Cu(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(il in e)?e._ctx=On:i===3&&On&&(On.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:On},t=32):(e=String(e),n&64?(t=16,e=[I0(e)]):t=8);r.children=e,r.shapeFlag|=t}function N0(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=lu([e.class,n.class]));else if(i==="style")e.style=au([e.style,n.style]);else if(ja(i)){const s=e[i],o=n[i];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Wn(r,e,t,n=null){Tn(r,e,7,[t,n])}const O0=Op();let U0=0;function F0(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||O0,s={uid:U0++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(n,i),emitsOptions:Mp(n,i),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=B_.bind(null,s),r.ce&&r.ce(s),s}let xt=null;const k0=()=>xt||On,Ts=r=>{xt=r,r.scope.on()},br=()=>{xt&&xt.scope.off(),xt=null};function kp(r){return r.vnode.shapeFlag&4}let Co=!1;function B0(r,e=!1){Co=e;const{props:t,children:n}=r.vnode,i=kp(r);_0(r,t,i,e),y0(r,n);const s=i?z0(r,e):void 0;return Co=!1,s}function z0(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=fp(new Proxy(r.ctx,h0));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?V0(r):null;Ts(r),Gs();const s=Gi(n,r,0,[r.props,i]);if(Ws(),br(),Jd(s)){if(s.then(br,br),e)return s.then(o=>{Rh(r,o,e)}).catch(o=>{Za(o,r,0)});r.asyncDep=s}else Rh(r,s,e)}else Bp(r,e)}function Rh(r,e,t){Ge(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:vt(e)&&(r.setupState=mp(e)),Bp(r,t)}let Dh;function Bp(r,e,t){const n=r.type;if(!r.render){if(!e&&Dh&&!n.render){const i=n.template||wu(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ht(Ht({isCustomElement:s,delimiters:a},o),l);n.render=Dh(i,c)}}r.render=n.render||Fn}Ts(r),Gs(),f0(r),Ws(),br()}function H0(r){return new Proxy(r.attrs,{get(e,t){return tn(r,"get","$attrs"),e[t]}})}function V0(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=H0(r))},slots:r.slots,emit:r.emit,expose:e}}function Pu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(mp(fp(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in po)return po[t](r)},has(e,t){return t in e||t in po}}))}function G0(r){return Ge(r)&&"__vccOpts"in r}const W0=(r,e)=>D_(r,e,Co),X0=Symbol(""),q0=()=>Ta(X0),j0="3.2.47",Y0="http://www.w3.org/2000/svg",mr=typeof document<"u"?document:null,Ih=mr&&mr.createElement("template"),K0={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?mr.createElementNS(Y0,r):mr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>mr.createTextNode(r),createComment:r=>mr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>mr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Ih.innerHTML=n?`<svg>${r}</svg>`:r;const a=Ih.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function $0(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Z0(r,e,t){const n=r.style,i=Rt(t);if(t&&!i){if(e&&!Rt(e))for(const s in e)t[s]==null&&Lc(n,s,"");for(const s in t)Lc(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Nh=/\s*!important$/;function Lc(r,e,t){if(ze(t))t.forEach(n=>Lc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=J0(r,e);Nh.test(t)?r.setProperty(Vs(n),t.replace(Nh,""),"important"):r[n]=t}}const Oh=["Webkit","Moz","ms"],bl={};function J0(r,e){const t=bl[e];if(t)return t;let n=bs(e);if(n!=="filter"&&n in r)return bl[e]=n;n=Qd(n);for(let i=0;i<Oh.length;i++){const s=Oh[i]+n;if(s in r)return bl[e]=s}return e}const Uh="http://www.w3.org/1999/xlink";function Q0(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Uh,e.slice(6,e.length)):r.setAttributeNS(Uh,e,t);else{const s=kg(e);t==null||s&&!Zd(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function ex(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Zd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function tx(r,e,t,n){r.addEventListener(e,t,n)}function nx(r,e,t,n){r.removeEventListener(e,t,n)}function ix(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=rx(e);if(n){const c=s[e]=ax(n,i);tx(r,a,c,l)}else o&&(nx(r,a,o,l),s[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function rx(r){let e;if(Fh.test(r)){e={};let n;for(;n=r.match(Fh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Vs(r.slice(2)),e]}let wl=0;const sx=Promise.resolve(),ox=()=>wl||(sx.then(()=>wl=0),wl=Date.now());function ax(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Tn(lx(n,t.value),e,5,[n])};return t.value=r,t.attached=ox(),t}function lx(r,e){if(ze(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const kh=/^on[a-z]/,cx=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?$0(r,n,i):e==="style"?Z0(r,t,n):ja(e)?cu(e)||ix(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ux(r,e,n,i))?ex(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),Q0(r,e,n,i))};function ux(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&kh.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||kh.test(e)&&Rt(t)?!1:e in r}const hx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Q_.props;const fx=Ht({patchProp:cx},K0);let Bh;function dx(){return Bh||(Bh=w0(fx))}const px=(...r)=>{const e=dx().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=mx(n);if(!i)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function mx(r){return Rt(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="151",Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gx=0,zh=1,_x=2,zp=1,xx=2,ao=3,Mi=0,Zt=1,Jn=2,Wi=0,gs=1,Hh=2,Vh=3,Gh=4,vx=5,ls=100,yx=101,Mx=102,Wh=103,Xh=104,Sx=200,bx=201,wx=202,Tx=203,Hp=204,Vp=205,Ex=206,Ax=207,Cx=208,Px=209,Lx=210,Rx=0,Dx=1,Ix=2,Rc=3,Nx=4,Ox=5,Ux=6,Fx=7,Gp=0,kx=1,Bx=2,vi=0,zx=1,Hx=2,Vx=3,Wp=4,Gx=5,Xp=300,Es=301,As=302,Dc=303,Ic=304,rl=306,Cs=1e3,vn=1001,Fa=1002,Et=1003,Nc=1004,Ca=1005,Kt=1006,qp=1007,Pr=1008,Lr=1009,Wx=1010,Xx=1011,jp=1012,qx=1013,xr=1014,Fi=1015,Po=1016,jx=1017,Yx=1018,_s=1020,Kx=1021,yn=1023,$x=1024,Zx=1025,wr=1026,Ps=1027,Jx=1028,Qx=1029,ev=1030,tv=1031,nv=1033,Tl=33776,El=33777,Al=33778,Cl=33779,qh=35840,jh=35841,Yh=35842,Kh=35843,iv=36196,$h=37492,Zh=37496,Jh=37808,Qh=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,of=37815,af=37816,lf=37817,cf=37818,uf=37819,hf=37820,ff=37821,Pl=36492,rv=36283,df=36284,pf=36285,mf=36286,Lo=2300,Ls=2301,Ll=2302,gf=2400,_f=2401,xf=2402,sv=2500,ov=0,Yp=1,Oc=2,Rr=3e3,Ze=3001,av=3200,lv=3201,Kp=0,cv=1,xn="srgb",Rs="srgb-linear",$p="display-p3",Rl=7680,uv=519,Uc=35044,vf="300 es",Fc=1035;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yf=1234567;const go=Math.PI/180,Ds=180/Math.PI;function kn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Ru(r,e){return(r%e+e)%e}function hv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function fv(r,e,t){return r!==e?(t-r)/(e-r):0}function _o(r,e,t){return(1-t)*r+t*e}function dv(r,e,t,n){return _o(r,e,1-Math.exp(-t*n))}function pv(r,e=1){return e-Math.abs(Ru(r,e*2)-e)}function mv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _v(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xv(r,e){return r+Math.random()*(e-r)}function vv(r){return r*(.5-Math.random())}function yv(r){r!==void 0&&(yf=r);let e=yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mv(r){return r*go}function Sv(r){return r*Ds}function kc(r){return(r&r-1)===0&&r!==0}function Zp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wv={DEG2RAD:go,RAD2DEG:Ds,generateUUID:kn,clamp:Mt,euclideanModulo:Ru,mapLinear:hv,inverseLerp:fv,lerp:_o,damp:dv,pingpong:pv,smoothstep:mv,smootherstep:gv,randInt:_v,randFloat:xv,randFloatSpread:vv,seededRandom:yv,degToRad:Mv,radToDeg:Sv,isPowerOfTwo:kc,ceilPowerOfTwo:Zp,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:bv,normalize:tt,denormalize:gi};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],b=i[1],v=i[4],x=i[7],M=i[2],C=i[5],L=i[8];return s[0]=o*g+a*b+l*M,s[3]=o*p+a*v+l*C,s[6]=o*m+a*x+l*L,s[1]=c*g+u*b+h*M,s[4]=c*p+u*v+h*C,s[7]=c*m+u*x+h*L,s[2]=f*g+d*b+_*M,s[5]=f*p+d*v+_*C,s[8]=f*m+d*x+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new Xe;function Qp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ro(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Il(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Tv=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ev=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Av(r){return r.convertSRGBToLinear().applyMatrix3(Ev)}function Cv(r){return r.applyMatrix3(Tv).convertLinearToSRGB()}const Pv={[Rs]:r=>r,[xn]:r=>r.convertSRGBToLinear(),[$p]:Av},Lv={[Rs]:r=>r,[xn]:r=>r.convertLinearToSRGB(),[$p]:Cv},sn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Rs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Pv[e],i=Lv[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Hr;class em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=Ro("canvas")),Hr.width=e.width,Hr.height=e.height;const n=Hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tm{constructor(e=null){this.isSource=!0,this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nl(i[o].image)):s.push(Nl(i[o]))}else s=Nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?em.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rv=0;class Pt extends Ur{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=vn,i=vn,s=Kt,o=Pr,a=yn,l=Lr,c=Pt.DEFAULT_ANISOTROPY,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=kn(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Xp;Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,M=(m+1)/2,C=(u+f)/4,L=(h+g)/4,A=(_+p)/4;return v>x&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=L/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=A/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=L/s,i=A/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dr extends Ur{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nm extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dv extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,m*b);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const x=a*b;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new I,Mf=new Hn;class Ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ai.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ai)}else i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Zo.subVectors(this.max,$s),Gr.subVectors(e.a,$s),Wr.subVectors(e.b,$s),Xr.subVectors(e.c,$s),Pi.subVectors(Wr,Gr),Li.subVectors(Xr,Wr),rr.subVectors(Gr,Xr);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-rr.z,rr.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,rr.z,0,-rr.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-rr.y,rr.x,0];return!Ul(t,Gr,Wr,Xr,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,Gr,Wr,Xr,Zo))?!1:(Jo.crossVectors(Pi,Li),t=[Jo.x,Jo.y,Jo.z],Ul(t,Gr,Wr,Xr,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new I,new I,new I,new I,new I,new I,new I,new I],ai=new I,Vr=new Ti,Gr=new I,Wr=new I,Xr=new I,Pi=new I,Li=new I,rr=new I,$s=new I,Zo=new I,Jo=new I,sr=new I;function Ul(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){sr.fromArray(r,s);const a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Iv=new Ti,Zs=new I,Fl=new I;class Ei{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Iv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Fl)),this.expandByPoint(Zs.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new I,kl=new I,Qo=new I,Ri=new I,Bl=new I,ea=new I,zl=new I;class sl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){kl.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(kl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qo),a=Ri.dot(this.direction),l=-Ri.dot(Qo),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kl).addScaledVector(Qo,f),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,s){Bl.subVectors(t,e),ea.subVectors(n,e),zl.crossVectors(Bl,ea);let o=this.direction.dot(zl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(Ri,ea));if(l<0)return null;const c=a*this.direction.dot(Bl.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(zl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Ov)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Di.crossVectors(n,on),Di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Di.crossVectors(n,on)),Di.normalize(),ta.crossVectors(on,Di),i[0]=Di.x,i[4]=ta.x,i[8]=on.x,i[1]=Di.y,i[5]=ta.y,i[9]=on.y,i[2]=Di.z,i[6]=ta.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],b=n[3],v=n[7],x=n[11],M=n[15],C=i[0],L=i[4],A=i[8],y=i[12],T=i[1],V=i[5],W=i[9],N=i[13],F=i[2],z=i[6],$=i[10],j=i[14],H=i[3],he=i[7],ae=i[11],Te=i[15];return s[0]=o*C+a*T+l*F+c*H,s[4]=o*L+a*V+l*z+c*he,s[8]=o*A+a*W+l*$+c*ae,s[12]=o*y+a*N+l*j+c*Te,s[1]=u*C+h*T+f*F+d*H,s[5]=u*L+h*V+f*z+d*he,s[9]=u*A+h*W+f*$+d*ae,s[13]=u*y+h*N+f*j+d*Te,s[2]=_*C+g*T+p*F+m*H,s[6]=_*L+g*V+p*z+m*he,s[10]=_*A+g*W+p*$+m*ae,s[14]=_*y+g*N+p*j+m*Te,s[3]=b*C+v*T+x*F+M*H,s[7]=b*L+v*V+x*z+M*he,s[11]=b*A+v*W+x*$+M*ae,s[15]=b*y+v*N+x*j+M*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],b=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,M=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,C=t*b+n*v+i*x+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=b*L,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*L,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*L,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*L,e[4]=v*L,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*L,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*L,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*L,e[8]=x*L,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*L,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*L,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*L,e[12]=M*L,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*L,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*L,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,b=l*c,v=l*u,x=l*h,M=n.x,C=n.y,L=n.z;return i[0]=(1-(g+m))*M,i[1]=(d+x)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(d-x)*C,i[5]=(1-(f+m))*C,i[6]=(p+b)*C,i[7]=0,i[8]=(_+v)*L,i[9]=(p-b)*L,i[10]=(1-(f+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qr.set(i[0],i[1],i[2]).length();const o=qr.set(i[4],i[5],i[6]).length(),a=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/s,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new I,Pn=new Fe,Nv=new I(0,0,0),Ov=new I(1,1,1),Di=new I,ta=new I,on=new I,Sf=new Fe,bf=new Hn;class ol{constructor(e=0,t=0,n=0,i=ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ol.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uv=0;const wf=new I,jr=new Hn,ci=new Fe,na=new I,Js=new I,Fv=new I,kv=new Hn,Tf=new I(1,0,0),Ef=new I(0,1,0),Af=new I(0,0,1),Bv={type:"added"},Cf={type:"removed"};class at extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new I,t=new ol,n=new Hn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Xe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return wf.copy(e).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Js,na,this.up):ci.lookAt(na,Js,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(ci),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new I(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new I,ui=new I,Hl=new I,hi=new I,Yr=new I,Kr=new I,Pf=new I,Vl=new I,Gl=new I,Wl=new I;let ia=!1;class In{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),ui.subVectors(n,t),Hl.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot(Hl),c=ui.dot(ui),u=ui.dot(Hl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,n,i,s,o,a,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hi),l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),ui.subVectors(e,t),Ln.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),In.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yr.subVectors(i,n),Kr.subVectors(s,n),Vl.subVectors(e,n);const l=Yr.dot(Vl),c=Kr.dot(Vl);if(l<=0&&c<=0)return t.copy(n);Gl.subVectors(e,i);const u=Yr.dot(Gl),h=Kr.dot(Gl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Yr,o);Wl.subVectors(e,s);const d=Yr.dot(Wl),_=Kr.dot(Wl);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Kr,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Pf.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Pf,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(Yr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zv=0;class ni extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=gs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hp,this.blendDst=Vp,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Xl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,sn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=sn.workingColorSpace){if(e=Ru(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xl(o,s,e+1/3),this.g=Xl(o,s,e),this.b=Xl(o,s,e-1/3)}return sn.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,sn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,sn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Il(e.r),this.g=Il(e.g),this.b=Il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return sn.fromWorkingColorSpace(Nt.copy(this),e),Mt(Nt.r*255,0,255)<<16^Mt(Nt.g*255,0,255)<<8^Mt(Nt.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=sn.workingColorSpace){return sn.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=xn){sn.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ra);const n=_o(Rn.h,ra.h,t),i=_o(Rn.s,ra.s,t),s=_o(Rn.l,ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ue;Ue.NAMES=im;class vr extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,sa=new Ne;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rm extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sm extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hv=0;const pn=new Fe,ql=new at,$r=new I,an=new Ti,Qs=new Ti,Tt=new I;class An extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(an.min,Qs.min),an.expandByPoint(Tt),Tt.addVectors(an.max,Qs.max),an.expandByPoint(Tt)):(an.expandByPoint(Qs.min),an.expandByPoint(Qs.max))}an.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),Tt.add($r)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new I,u[T]=new I;const h=new I,f=new I,d=new I,_=new Ne,g=new Ne,p=new Ne,m=new I,b=new I;function v(T,V,W){h.fromArray(i,T*3),f.fromArray(i,V*3),d.fromArray(i,W*3),_.fromArray(o,T*2),g.fromArray(o,V*2),p.fromArray(o,W*2),f.sub(h),d.sub(h),g.sub(_),p.sub(_);const N=1/(g.x*p.y-p.x*g.y);isFinite(N)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(N),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(N),c[T].add(m),c[V].add(m),c[W].add(m),u[T].add(b),u[V].add(b),u[W].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let T=0,V=x.length;T<V;++T){const W=x[T],N=W.start,F=W.count;for(let z=N,$=N+F;z<$;z+=3)v(n[z+0],n[z+1],n[z+2])}const M=new I,C=new I,L=new I,A=new I;function y(T){L.fromArray(s,T*3),A.copy(L);const V=c[T];M.copy(V),M.sub(L.multiplyScalar(L.dot(V))).normalize(),C.crossVectors(A,V);const N=C.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=N}for(let T=0,V=x.length;T<V;++T){const W=x[T],N=W.start,F=W.count;for(let z=N,$=N+F;z<$;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Lt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new Fe,Xn=new sl,oa=new Ei,Rf=new I,Zr=new I,Jr=new I,Qr=new I,jl=new I,aa=new I,la=new Ne,ca=new Ne,ua=new Ne,Df=new I,If=new I,Nf=new I,ha=new I,fa=new I;class Mn extends at{constructor(e=new An,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(jl.fromBufferAttribute(h,e),o?aa.addScaledVector(jl,u):aa.addScaledVector(jl.sub(t),u))}t.add(aa)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),oa.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(oa,Rf)===null||Xn.origin.distanceToSquared(Rf)>(e.far-e.near)**2))||(Lf.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Lf),n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=i[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,M=v;x<M;x+=3){const C=a.getX(x),L=a.getX(x+1),A=a.getX(x+2);o=da(this,m,e,Xn,c,u,h,C,L,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const b=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);o=da(this,i,e,Xn,c,u,h,b,v,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=i[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,M=v;x<M;x+=3){const C=x,L=x+1,A=x+2;o=da(this,m,e,Xn,c,u,h,C,L,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const b=p,v=p+1,x=p+2;o=da(this,i,e,Xn,c,u,h,b,v,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Vv(r,e,t,n,i,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:r}}function da(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Zr),r.getVertexPosition(l,Jr),r.getVertexPosition(c,Qr);const u=Vv(r,e,t,n,Zr,Jr,Qr,ha);if(u){i&&(la.fromBufferAttribute(i,a),ca.fromBufferAttribute(i,l),ua.fromBufferAttribute(i,c),u.uv=In.getInterpolation(ha,Zr,Jr,Qr,la,ca,ua,new Ne)),s&&(la.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),u.uv2=In.getInterpolation(ha,Zr,Jr,Qr,la,ca,ua,new Ne)),o&&(Df.fromBufferAttribute(o,a),If.fromBufferAttribute(o,l),Nf.fromBufferAttribute(o,c),u.normal=In.getInterpolation(ha,Zr,Jr,Qr,Df,If,Nf,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};In.getNormal(Zr,Jr,Qr,h.normal),u.face=h}return u}class zo extends An{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(h,2));function _(g,p,m,b,v,x,M,C,L,A,y){const T=x/L,V=M/A,W=x/2,N=M/2,F=C/2,z=L+1,$=A+1;let j=0,H=0;const he=new I;for(let ae=0;ae<$;ae++){const Te=ae*V-N;for(let fe=0;fe<z;fe++){const Z=fe*T-W;he[g]=Z*b,he[p]=Te*v,he[m]=F,c.push(he.x,he.y,he.z),he[g]=0,he[p]=0,he[m]=C>0?1:-1,u.push(he.x,he.y,he.z),h.push(fe/L),h.push(1-ae/A),j+=1}}for(let ae=0;ae<A;ae++)for(let Te=0;Te<L;Te++){const fe=f+Te+z*ae,Z=f+Te+z*(ae+1),ie=f+(Te+1)+z*(ae+1),me=f+(Te+1)+z*ae;l.push(fe,Z,me),l.push(Z,ie,me),H+=6}a.addGroup(d,H,y),d+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const n=Is(r[t]);for(const i in n)e[i]=n[i]}return e}function Gv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function om(r){return r.getRenderTarget()===null&&r.outputEncoding===Ze?xn:Rs}const Wv={clone:Is,merge:qt};var Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class am extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends am{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class jv extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new jt(es,ts,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new jt(es,ts,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new jt(es,ts,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new jt(es,ts,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new jt(es,ts,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new jt(es,ts,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=vi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class lm extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yv extends Dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zo(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Mn(i,s),a=t.minFilter;return t.minFilter===Pr&&(t.minFilter=Kt),new jv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Yl=new I,Kv=new I,$v=new Xe;class ur{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yl.subVectors(n,t).cross(Kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$v.getNormalMatrix(e),i=this.coplanarPoint(Yl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ei,pa=new I;class Iu{constructor(e=new ur,t=new ur,n=new ur,i=new ur,s=new ur,o=new ur){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],_=n[10],g=n[11],p=n[12],m=n[13],b=n[14],v=n[15];return t[0].setComponents(a-i,h-l,g-f,v-p).normalize(),t[1].setComponents(a+i,h+l,g+f,v+p).normalize(),t[2].setComponents(a+s,h+c,g+d,v+m).normalize(),t[3].setComponents(a-s,h-c,g-d,v-m).normalize(),t[4].setComponents(a-o,h-u,g-_,v-b).normalize(),t[5].setComponents(a+o,h+u,g+_,v+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pa.x=i.normal.x>0?e.max.x:e.min.x,pa.y=i.normal.y>0?e.max.y:e.min.y,pa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Nu extends An{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const b=m*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-b,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const v=b+c*m,x=b+c*(m+1),M=b+1+c*(m+1),C=b+1+c*m;d.push(v,x,C),d.push(x,M,C)}this.setIndex(d),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry="vec3 transformed = vec3( position );",sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,VM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,GM=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,TS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:Jv,alphamap_pars_fragment:Qv,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:fy,color_fragment:dy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:_y,cube_uv_reflection_fragment:xy,defaultnormal_vertex:vy,displacementmap_pars_vertex:yy,displacementmap_vertex:My,emissivemap_fragment:Sy,emissivemap_pars_fragment:by,encodings_fragment:wy,encodings_pars_fragment:Ty,envmap_fragment:Ey,envmap_common_pars_fragment:Ay,envmap_pars_fragment:Cy,envmap_pars_vertex:Py,envmap_physical_pars_fragment:Hy,envmap_vertex:Ly,fog_vertex:Ry,fog_pars_vertex:Dy,fog_fragment:Iy,fog_pars_fragment:Ny,gradientmap_pars_fragment:Oy,lightmap_fragment:Uy,lightmap_pars_fragment:Fy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:By,lights_pars_begin:zy,lights_toon_fragment:Vy,lights_toon_pars_fragment:Gy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:qy,lights_physical_pars_fragment:jy,lights_fragment_begin:Yy,lights_fragment_maps:Ky,lights_fragment_end:$y,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:rM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:oM,morphcolor_vertex:aM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:hM,normal_fragment_maps:fM,normal_pars_fragment:dM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:xM,clearcoat_pars_fragment:vM,iridescence_pars_fragment:yM,output_fragment:MM,packing:SM,premultiplied_alpha_fragment:bM,project_vertex:wM,dithering_fragment:TM,dithering_pars_fragment:EM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:PM,shadowmap_pars_vertex:LM,shadowmap_vertex:RM,shadowmask_pars_fragment:DM,skinbase_vertex:IM,skinning_pars_vertex:NM,skinning_vertex:OM,skinnormal_vertex:UM,specularmap_fragment:FM,specularmap_pars_fragment:kM,tonemapping_fragment:BM,tonemapping_pars_fragment:zM,transmission_fragment:HM,transmission_pars_fragment:VM,uv_pars_fragment:GM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:qM,background_vert:jM,background_frag:YM,backgroundCube_vert:KM,backgroundCube_frag:$M,cube_vert:ZM,cube_frag:JM,depth_vert:QM,depth_frag:eS,distanceRGBA_vert:tS,distanceRGBA_frag:nS,equirect_vert:iS,equirect_frag:rS,linedashed_vert:sS,linedashed_frag:oS,meshbasic_vert:aS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:hS,meshmatcap_frag:fS,meshnormal_vert:dS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:_S,meshphysical_frag:xS,meshtoon_vert:vS,meshtoon_frag:yS,points_vert:MS,points_frag:SS,shadow_vert:bS,shadow_frag:wS,sprite_vert:TS,sprite_frag:ES},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}}},$n={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$n.physical={uniforms:qt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ma={r:0,b:0,g:0};function AS(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let b=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v));const x=r.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?g(a,l):v&&v.isColor&&(g(v,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rl)?(u===void 0&&(u=new Mn(new zo(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Is($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.encoding!==Ze,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new Nu(2,2),new Ir({name:"BackgroundMaterial",uniforms:Is($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.encoding!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(ma,om(r)),n.buffers.color.setClear(ma.r,ma.g,ma.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function CS(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(F,z,$,j,H){let he=!1;if(o){const ae=g(j,$,z);c!==ae&&(c=ae,d(c.object)),he=m(F,j,$,H),he&&b(F,j,$,H)}else{const ae=z.wireframe===!0;(c.geometry!==j.id||c.program!==$.id||c.wireframe!==ae)&&(c.geometry=j.id,c.program=$.id,c.wireframe=ae,he=!0)}H!==null&&t.update(H,34963),(he||u)&&(u=!1,A(F,z,$,j),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function g(F,z,$){const j=$.wireframe===!0;let H=a[F.id];H===void 0&&(H={},a[F.id]=H);let he=H[z.id];he===void 0&&(he={},H[z.id]=he);let ae=he[j];return ae===void 0&&(ae=p(f()),he[j]=ae),ae}function p(F){const z=[],$=[],j=[];for(let H=0;H<i;H++)z[H]=0,$[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:j,object:F,attributes:{},index:null}}function m(F,z,$,j){const H=c.attributes,he=z.attributes;let ae=0;const Te=$.getAttributes();for(const fe in Te)if(Te[fe].location>=0){const ie=H[fe];let me=he[fe];if(me===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;ae++}return c.attributesNum!==ae||c.index!==j}function b(F,z,$,j){const H={},he=z.attributes;let ae=0;const Te=$.getAttributes();for(const fe in Te)if(Te[fe].location>=0){let ie=he[fe];ie===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),H[fe]=me,ae++}c.attributes=H,c.attributesNum=ae,c.index=j}function v(){const F=c.newAttributes;for(let z=0,$=F.length;z<$;z++)F[z]=0}function x(F){M(F,0)}function M(F,z){const $=c.newAttributes,j=c.enabledAttributes,H=c.attributeDivisors;$[F]=1,j[F]===0&&(r.enableVertexAttribArray(F),j[F]=1),H[F]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),H[F]=z)}function C(){const F=c.newAttributes,z=c.enabledAttributes;for(let $=0,j=z.length;$<j;$++)z[$]!==F[$]&&(r.disableVertexAttribArray($),z[$]=0)}function L(F,z,$,j,H,he){n.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(F,z,$,H,he):r.vertexAttribPointer(F,z,$,j,H,he)}function A(F,z,$,j){if(n.isWebGL2===!1&&(F.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=j.attributes,he=$.getAttributes(),ae=z.defaultAttributeValues;for(const Te in he){const fe=he[Te];if(fe.location>=0){let Z=H[Te];if(Z===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const ie=Z.normalized,me=Z.itemSize,xe=t.get(Z);if(xe===void 0)continue;const Y=xe.buffer,Re=xe.type,Ee=xe.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ge=Z.data,Pe=ge.stride,P=Z.offset;if(ge.isInstancedInterleavedBuffer){for(let R=0;R<fe.locationSize;R++)M(fe.location+R,ge.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let R=0;R<fe.locationSize;R++)x(fe.location+R);r.bindBuffer(34962,Y);for(let R=0;R<fe.locationSize;R++)L(fe.location+R,me/fe.locationSize,Re,ie,Pe*Ee,(P+me/fe.locationSize*R)*Ee)}else{if(Z.isInstancedBufferAttribute){for(let ge=0;ge<fe.locationSize;ge++)M(fe.location+ge,Z.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<fe.locationSize;ge++)x(fe.location+ge);r.bindBuffer(34962,Y);for(let ge=0;ge<fe.locationSize;ge++)L(fe.location+ge,me/fe.locationSize,Re,ie,me*Ee,me/fe.locationSize*ge*Ee)}}else if(ae!==void 0){const ie=ae[Te];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(fe.location,ie);break;case 3:r.vertexAttrib3fv(fe.location,ie);break;case 4:r.vertexAttrib4fv(fe.location,ie);break;default:r.vertexAttrib1fv(fe.location,ie)}}}}C()}function y(){W();for(const F in a){const z=a[F];for(const $ in z){const j=z[$];for(const H in j)_(j[H].object),delete j[H];delete z[$]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const z=a[F.id];for(const $ in z){const j=z[$];for(const H in j)_(j[H].object),delete j[H];delete z[$]}delete a[F.id]}function V(F){for(const z in a){const $=a[z];if($[F.id]===void 0)continue;const j=$[F.id];for(const H in j)_(j[H].object),delete j[H];delete $[F.id]}}function W(){N(),u=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:x,disableUnusedAttributes:C}}function PS(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function LS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),_=r.getParameter(34076),g=r.getParameter(34921),p=r.getParameter(36347),m=r.getParameter(36348),b=r.getParameter(36349),v=f>0,x=o||e.has("OES_texture_float"),M=v&&x,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:C}}function RS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ur,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const b=s?0:n,v=b*4;let x=m.clippingState||null;l.value=x,x=u(_,f,v,d);for(let M=0;M!==v;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function DS(r){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=Es:a===Ic&&(o.mapping=As),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yv(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ou extends am{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,Of=[.125,.215,.35,.446,.526,.582],gr=20,Kl=new Ou,Uf=new Ue;let $l=null;const hr=(1+Math.sqrt(5))/2,ns=1/hr,Ff=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,hr,ns),new I(0,hr,-ns),new I(ns,0,hr),new I(-ns,0,hr),new I(hr,ns,0),new I(-hr,ns,0)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$l=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Po,format:yn,encoding:Rr,depthBuffer:!1},i=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(s)),this._blurMaterial=NS(s,e,t)}return i}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,n,i){const a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uf),u.toneMapping=vi,u.autoClear=!1;const d=new vr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new Mn(new zo,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Uf),g=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ga(i,b*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Kl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ff[(i-1)%Ff.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const m=[];let b=0;for(let L=0;L<gr;++L){const A=L/g,y=Math.exp(-A*A/2);m.push(y),L===0?b+=y:L<p&&(b+=2*y)}for(let L=0;L<m.length;L++)m[L]=m[L]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[i],M=3*x*(i>v-us?i-v+us:0),C=4*(this._cubeSize-x);ga(t,M,C,3*x,2*x),l.setRenderTarget(t),l.render(h,Kl)}}function IS(r){const e=[],t=[],n=[];let i=r;const s=r-us+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-us?l=Of[o-r+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,b=new Float32Array(g*_*d),v=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let C=0;C<d;C++){const L=C%3*2/3-1,A=C>2?0:-1,y=[L,A,0,L+2/3,A,0,L+2/3,A+1,0,L,A,0,L+2/3,A+1,0,L,A+1,0];b.set(y,g*_*C),v.set(f,p*_*C);const T=[C,C,C,C,C,C];x.set(T,m*_*C)}const M=new An;M.setAttribute("position",new Lt(b,g)),M.setAttribute("uv",new Lt(v,p)),M.setAttribute("faceIndex",new Lt(x,m)),e.push(M),i>us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bf(r,e,t){const n=new Dr(r,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function NS(r,e,t){const n=new Float32Array(gr),i=new I(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function zf(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Hf(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Ic,u=l===Es||l===As;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new kf(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function US(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function FS(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],34962)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let v=0,x=b.length;v<x;v+=3){const M=b[v+0],C=b[v+1],L=b[v+2];f.push(M,C,C,L,L,M)}}else{const b=_.array;g=_.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const M=v+0,C=v+1,L=v+2;f.push(M,C,C,L,L,M)}}const p=new(Qp(f)?sm:rm)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function kS(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,d,a,f*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function BS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zS(r,e){return r[0]-e[0]}function HS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function VS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let z=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var d=z;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let T=u.attributes.position.count*y,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*V*4*g),N=new nm(W,T,V,g);N.type=Fi,N.needsUpdate=!0;const F=y*4;for(let $=0;$<g;$++){const j=C[$],H=L[$],he=A[$],ae=T*V*4*$;for(let Te=0;Te<j.count;Te++){const fe=Te*F;v===!0&&(o.fromBufferAttribute(j,Te),W[ae+fe+0]=o.x,W[ae+fe+1]=o.y,W[ae+fe+2]=o.z,W[ae+fe+3]=0),x===!0&&(o.fromBufferAttribute(H,Te),W[ae+fe+4]=o.x,W[ae+fe+5]=o.y,W[ae+fe+6]=o.z,W[ae+fe+7]=0),M===!0&&(o.fromBufferAttribute(he,Te),W[ae+fe+8]=o.x,W[ae+fe+9]=o.y,W[ae+fe+10]=o.z,W[ae+fe+11]=he.itemSize===4?o.w:1)}}p={count:g,texture:N,size:new Ne(T,V)},s.set(u,p),u.addEventListener("dispose",z)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const b=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=f[x]}g.sort(HS);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(zS);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const M=a[x],C=M[0],L=M[1];C!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+x)!==p[C]&&u.setAttribute("morphTarget"+x,p[C]),m&&u.getAttribute("morphNormal"+x)!==m[C]&&u.setAttribute("morphNormal"+x,m[C]),i[x]=L,b+=L):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function GS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const um=new Pt,hm=new nm,fm=new Dv,dm=new lm,Vf=[],Gf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vf[i];if(s===void 0&&(s=new Float32Array(i),Vf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function al(r,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function jS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function YS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;qf.set(n),r.uniformMatrix2fv(this.addr,!1,qf),bt(t,n)}}function KS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Xf.set(n),r.uniformMatrix3fv(this.addr,!1,Xf),bt(t,n)}}function $S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Wf.set(n),r.uniformMatrix4fv(this.addr,!1,Wf),bt(t,n)}}function ZS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function QS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||um,i)}function ob(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fm,i)}function ab(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dm,i)}function lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hm,i)}function cb(r){switch(r){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return jS;case 35674:return YS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(r,e){r.uniform1fv(this.addr,e)}function hb(r,e){const t=Xs(e,this.size,2);r.uniform2fv(this.addr,t)}function fb(r,e){const t=Xs(e,this.size,3);r.uniform3fv(this.addr,t)}function db(r,e){const t=Xs(e,this.size,4);r.uniform4fv(this.addr,t)}function pb(r,e){const t=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mb(r,e){const t=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gb(r,e){const t=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _b(r,e){r.uniform1iv(this.addr,e)}function xb(r,e){r.uniform2iv(this.addr,e)}function vb(r,e){r.uniform3iv(this.addr,e)}function yb(r,e){r.uniform4iv(this.addr,e)}function Mb(r,e){r.uniform1uiv(this.addr,e)}function Sb(r,e){r.uniform2uiv(this.addr,e)}function bb(r,e){r.uniform3uiv(this.addr,e)}function wb(r,e){r.uniform4uiv(this.addr,e)}function Tb(r,e,t){const n=this.cache,i=e.length,s=al(t,i);St(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||um,s[o])}function Eb(r,e,t){const n=this.cache,i=e.length,s=al(t,i);St(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fm,s[o])}function Ab(r,e,t){const n=this.cache,i=e.length,s=al(t,i);St(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||dm,s[o])}function Cb(r,e,t){const n=this.cache,i=e.length,s=al(t,i);St(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||hm,s[o])}function Pb(r){switch(r){case 5126:return ub;case 35664:return hb;case 35665:return fb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return Mb;case 36294:return Sb;case 36295:return bb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Cb}}class Lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cb(t.type)}}class Rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pb(t.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function jf(r,e){r.seq.push(e),r.map[e.id]=e}function Ib(r,e,t){const n=r.name,i=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),o=Zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jf(t,c===void 0?new Lb(a,r,e):new Rb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Db(a),jf(t,h)),t=h}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ib(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Nb=0;function Ob(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ub(r){switch(r){case Rr:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Kf(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ob(r.getShaderSource(e),o)}else return i}function Fb(r,e){const t=Ub(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kb(r,e){let t;switch(e){case zx:t="Linear";break;case Hx:t="Reinhard";break;case Vx:t="OptimizedCineon";break;case Wp:t="ACESFilmic";break;case Gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function zb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hb(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lo(r){return r!==""}function $f(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(r){return r.replace(Vb,Gb)}function Gb(r,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bc(t)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(r){return r.replace(Wb,Xb)}function Xb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ao&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case As:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Kb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function $b(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qb(t),c=jb(t),u=Yb(t),h=Kb(t),f=$b(t),d=t.isWebGL2?"":Bb(t),_=zb(s),g=i.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(lo).join(`
`),p.length>0&&(p+=`
`),m=[d,_].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(p=[Qf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[d,Qf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==vi?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Fb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=Bc(o),o=$f(o,t),o=Zf(o,t),a=Bc(a),a=$f(a,t),a=Zf(a,t),o=Jf(o),a=Jf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=b+p+o,x=b+m+a,M=Yf(i,35633,v),C=Yf(i,35632,x);if(i.attachShader(g,M),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const y=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(C).trim();let W=!0,N=!0;if(i.getProgramParameter(g,35714)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,C);else{const F=Kf(i,M,"vertex"),z=Kf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+y+`
`+F+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||V==="")&&(N=!1);N&&(this.diagnostics={runnable:W,programLog:y,vertexShader:{log:T,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(M),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Pa(i,g)),L};let A;return this.getAttributes=function(){return A===void 0&&(A=Hb(i,g)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let Jb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ew(e),t.set(e,n)),n}}class ew{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function tw(r,e,t,n,i,s,o){const a=new Du,l=new Qb,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===1?"uv2":"uv"}function p(y,T,V,W,N){const F=W.fog,z=N.geometry,$=y.isMeshStandardMaterial?W.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),H=j&&j.mapping===rl?j.image.height:null,he=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Te=ae!==void 0?ae.length:0;let fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let Z,ie,me,xe;if(he){const Se=$n[he];Z=Se.vertexShader,ie=Se.fragmentShader}else Z=y.vertexShader,ie=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),xe=l.getFragmentShaderID(y);const Y=r.getRenderTarget(),Re=N.isInstancedMesh===!0,Ee=!!y.map,ge=!!y.matcap,Pe=!!j,P=!!y.aoMap,R=!!y.lightMap,k=!!y.bumpMap,ee=!!y.normalMap,Q=!!y.displacementMap,ce=!!y.emissiveMap,pe=!!y.metalnessMap,re=!!y.roughnessMap,le=y.clearcoat>0,oe=y.iridescence>0,w=y.sheen>0,S=y.transmission>0,U=le&&!!y.clearcoatMap,q=le&&!!y.clearcoatNormalMap,J=le&&!!y.clearcoatRoughnessMap,ue=oe&&!!y.iridescenceMap,D=oe&&!!y.iridescenceThicknessMap,K=w&&!!y.sheenColorMap,X=w&&!!y.sheenRoughnessMap,_e=!!y.specularMap,be=!!y.specularColorMap,we=!!y.specularIntensityMap,Me=S&&!!y.transmissionMap,ye=S&&!!y.thicknessMap,Ae=!!y.gradientMap,Oe=!!y.alphaMap,ft=y.alphaTest>0,O=!!y.extensions,ne=!!z.attributes.uv2;return{isWebGL2:u,shaderID:he,shaderName:y.type,vertexShader:Z,fragmentShader:ie,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:Re,instancingColor:Re&&N.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?r.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Rr,map:Ee,matcap:ge,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:R,bumpMap:k,normalMap:ee,displacementMap:f&&Q,emissiveMap:ce,normalMapObjectSpace:ee&&y.normalMapType===cv,normalMapTangentSpace:ee&&y.normalMapType===Kp,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,metalnessMap:pe,roughnessMap:re,clearcoat:le,clearcoatMap:U,clearcoatNormalMap:q,clearcoatRoughnessMap:J,iridescence:oe,iridescenceMap:ue,iridescenceThicknessMap:D,sheen:w,sheenColorMap:K,sheenRoughnessMap:X,specularMap:_e,specularColorMap:be,specularIntensityMap:we,transmission:S,transmissionMap:Me,thicknessMap:ye,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===gs,alphaMap:Oe,alphaTest:ft,combine:y.combine,mapUv:Ee&&g(y.map.channel),aoMapUv:P&&g(y.aoMap.channel),lightMapUv:R&&g(y.lightMap.channel),bumpMapUv:k&&g(y.bumpMap.channel),normalMapUv:ee&&g(y.normalMap.channel),displacementMapUv:Q&&g(y.displacementMap.channel),emissiveMapUv:ce&&g(y.emissiveMap.channel),metalnessMapUv:pe&&g(y.metalnessMap.channel),roughnessMapUv:re&&g(y.roughnessMap.channel),clearcoatMapUv:U&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:X&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:be&&g(y.specularColorMap.channel),specularIntensityMapUv:we&&g(y.specularIntensityMap.channel),transmissionMapUv:Me&&g(y.transmissionMap.channel),thicknessMapUv:ye&&g(y.thicknessMap.channel),alphaMapUv:Oe&&g(y.alphaMap.channel),vertexTangents:ee&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:ne,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ee||Oe),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:vi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:O&&y.extensions.derivatives===!0,extensionFragDepth:O&&y.extensions.fragDepth===!0,extensionDrawBuffers:O&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(b(T,y),v(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function b(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),y.push(a.mask)}function x(y){const T=_[y.type];let V;if(T){const W=$n[T];V=Wv.clone(W.uniforms)}else V=y.uniforms;return V}function M(y,T){let V;for(let W=0,N=c.length;W<N;W++){const F=c[W];if(F.cacheKey===T){V=F,++V.usedTimes;break}}return V===void 0&&(V=new Zb(r,T,y,s),c.push(V)),V}function C(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:L,programs:c,dispose:A}}function nw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function iw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ed(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function td(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||iw),n.length>1&&n.sort(f||ed),i.length>1&&i.sort(f||ed)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function rw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new td,r.set(n,[o])):i>=s.length?(o=new td,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function sw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function ow(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let aw=0;function lw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cw(r,e){const t=new sw,n=ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Fe,a=new Fe;function l(u,h){let f=0,d=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,p=0,m=0,b=0,v=0,x=0,M=0,C=0,L=0,A=0;u.sort(lw);const y=h===!0?Math.PI:1;for(let V=0,W=u.length;V<W;V++){const N=u[V],F=N.color,z=N.intensity,$=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=F.r*z*y,d+=F.g*z*y,_+=F.b*z*y;else if(N.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],z);else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const he=N.shadow,ae=n.get(N);ae.shadowBias=he.bias,ae.shadowNormalBias=he.normalBias,ae.shadowRadius=he.radius,ae.shadowMapSize=he.mapSize,i.directionalShadow[g]=ae,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=N.shadow.matrix,x++}i.directional[g]=H,g++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(F).multiplyScalar(z*y),H.distance=$,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[m]=H;const he=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,he.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[m]=he.matrix,N.castShadow){const ae=n.get(N);ae.shadowBias=he.bias,ae.shadowNormalBias=he.normalBias,ae.shadowRadius=he.radius,ae.shadowMapSize=he.mapSize,i.spotShadow[m]=ae,i.spotShadowMap[m]=j,C++}m++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=H,b++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*y),H.distance=N.distance,H.decay=N.decay,N.castShadow){const he=N.shadow,ae=n.get(N);ae.shadowBias=he.bias,ae.shadowNormalBias=he.normalBias,ae.shadowRadius=he.radius,ae.shadowMapSize=he.mapSize,ae.shadowCameraNear=he.camera.near,ae.shadowCameraFar=he.camera.far,i.pointShadow[p]=ae,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=N.shadow.matrix,M++}i.point[p]=H,p++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(z*y),H.groundColor.copy(N.groundColor).multiplyScalar(z*y),i.hemi[v]=H,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==p||T.spotLength!==m||T.rectAreaLength!==b||T.hemiLength!==v||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==C||T.numSpotMaps!==L)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,T.directionalLength=g,T.pointLength=p,T.spotLength=m,T.rectAreaLength=b,T.hemiLength=v,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=C,T.numSpotMaps=L,i.version=aw++)}function c(u,h){let f=0,d=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const x=u[b];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function nd(r,e){const t=new cw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uw(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new nd(r,e),t.set(s,[l])):o>=a.length?(l=new nd(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class hw extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fw extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mw(r,e,t){let n=new Iu;const i=new Ne,s=new Ne,o=new rt,a=new hw({depthPacking:lv}),l=new fw,c={},u=t.maxTextureSize,h={[Mi]:Zt,[Zt]:Mi,[Jn]:Jn},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:dw,fragmentShader:pw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zp,this.render=function(x,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const L=r.getRenderTarget(),A=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),T=r.state;T.setBlending(Wi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let V=0,W=x.length;V<W;V++){const N=x[V],F=N.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const z=F.getFrameExtents();if(i.multiply(z),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,F.mapSize.y=s.y)),F.map===null){const j=this.type!==ao?{minFilter:Et,magFilter:Et}:{};F.map=new Dr(i.x,i.y,j),F.map.texture.name=N.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const $=F.getViewportCount();for(let j=0;j<$;j++){const H=F.getViewport(j);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),T.viewport(o),F.updateMatrices(N,j),n=F.getFrustum(),v(M,C,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===ao&&m(F,C),F.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(L,A,y)};function m(x,M){const C=e.update(g);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Dr(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(M,null,C,f,g,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(M,null,C,d,g,null)}function b(x,M,C,L){let A=null;const y=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(y!==void 0)A=y;else if(A=C.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const T=A.uuid,V=M.uuid;let W=c[T];W===void 0&&(W={},c[T]=W);let N=W[V];N===void 0&&(N=A.clone(),W[V]=N),A=N}if(A.visible=M.visible,A.wireframe=M.wireframe,L===ao?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:h[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const T=r.properties.get(A);T.light=C}return A}function v(x,M,C,L,A){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===ao)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const V=e.update(x),W=x.material;if(Array.isArray(W)){const N=V.groups;for(let F=0,z=N.length;F<z;F++){const $=N[F],j=W[$.materialIndex];if(j&&j.visible){const H=b(x,j,L,A);r.renderBufferDirect(C,null,V,H,x,$)}}}else if(W.visible){const N=b(x,W,L,A);r.renderBufferDirect(C,null,V,N,x,null)}}const T=x.children;for(let V=0,W=T.length;V<W;V++)v(T[V],M,C,L,A)}}function gw(r,e,t){const n=t.isWebGL2;function i(){let O=!1;const ne=new rt;let de=null;const Se=new rt(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!O&&(r.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,st,lt,Dt,Ai){Ai===!0&&(Ce*=Dt,st*=Dt,lt*=Dt),ne.set(Ce,st,lt,Dt),Se.equals(ne)===!1&&(r.clearColor(Ce,st,lt,Dt),Se.copy(ne))},reset:function(){O=!1,de=null,Se.set(-1,0,0,0)}}}function s(){let O=!1,ne=null,de=null,Se=null;return{setTest:function(Ce){Ce?Y(2929):Re(2929)},setMask:function(Ce){ne!==Ce&&!O&&(r.depthMask(Ce),ne=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case Rx:r.depthFunc(512);break;case Dx:r.depthFunc(519);break;case Ix:r.depthFunc(513);break;case Rc:r.depthFunc(515);break;case Nx:r.depthFunc(514);break;case Ox:r.depthFunc(518);break;case Ux:r.depthFunc(516);break;case Fx:r.depthFunc(517);break;default:r.depthFunc(515)}de=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Se!==Ce&&(r.clearDepth(Ce),Se=Ce)},reset:function(){O=!1,ne=null,de=null,Se=null}}}function o(){let O=!1,ne=null,de=null,Se=null,Ce=null,st=null,lt=null,Dt=null,Ai=null;return{setTest:function(dt){O||(dt?Y(2960):Re(2960))},setMask:function(dt){ne!==dt&&!O&&(r.stencilMask(dt),ne=dt)},setFunc:function(dt,fn,Gn){(de!==dt||Se!==fn||Ce!==Gn)&&(r.stencilFunc(dt,fn,Gn),de=dt,Se=fn,Ce=Gn)},setOp:function(dt,fn,Gn){(st!==dt||lt!==fn||Dt!==Gn)&&(r.stencilOp(dt,fn,Gn),st=dt,lt=fn,Dt=Gn)},setLocked:function(dt){O=dt},setClear:function(dt){Ai!==dt&&(r.clearStencil(dt),Ai=dt)},reset:function(){O=!1,ne=null,de=null,Se=null,Ce=null,st=null,lt=null,Dt=null,Ai=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,b=null,v=null,x=null,M=null,C=null,L=null,A=null,y=!1,T=null,V=null,W=null,N=null,F=null;const z=r.getParameter(35661);let $=!1,j=0;const H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=j>=2);let he=null,ae={};const Te=r.getParameter(3088),fe=r.getParameter(2978),Z=new rt().fromArray(Te),ie=new rt().fromArray(fe);function me(O,ne,de){const Se=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(O,Ce),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let st=0;st<de;st++)r.texImage2D(ne+st,0,6408,1,1,0,6408,5121,Se);return Ce}const xe={};xe[3553]=me(3553,3553,1),xe[34067]=me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(2929),l.setFunc(Rc),Q(!1),ce(zh),Y(2884),k(Wi);function Y(O){f[O]!==!0&&(r.enable(O),f[O]=!0)}function Re(O){f[O]!==!1&&(r.disable(O),f[O]=!1)}function Ee(O,ne){return d[O]!==ne?(r.bindFramebuffer(O,ne),d[O]=ne,n&&(O===36009&&(d[36160]=ne),O===36160&&(d[36009]=ne)),!0):!1}function ge(O,ne){let de=g,Se=!1;if(O)if(de=_.get(ne),de===void 0&&(de=[],_.set(ne,de)),O.isWebGLMultipleRenderTargets){const Ce=O.texture;if(de.length!==Ce.length||de[0]!==36064){for(let st=0,lt=Ce.length;st<lt;st++)de[st]=36064+st;de.length=Ce.length,Se=!0}}else de[0]!==36064&&(de[0]=36064,Se=!0);else de[0]!==1029&&(de[0]=1029,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Pe(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const P={[ls]:32774,[yx]:32778,[Mx]:32779};if(n)P[Wh]=32775,P[Xh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[Wh]=O.MIN_EXT,P[Xh]=O.MAX_EXT)}const R={[Sx]:0,[bx]:1,[wx]:768,[Hp]:770,[Lx]:776,[Cx]:774,[Ex]:772,[Tx]:769,[Vp]:771,[Px]:775,[Ax]:773};function k(O,ne,de,Se,Ce,st,lt,Dt){if(O===Wi){m===!0&&(Re(3042),m=!1);return}if(m===!1&&(Y(3042),m=!0),O!==vx){if(O!==b||Dt!==y){if((v!==ls||C!==ls)&&(r.blendEquation(32774),v=ls,C=ls),Dt)switch(O){case gs:r.blendFuncSeparate(1,771,1,771);break;case Hh:r.blendFunc(1,1);break;case Vh:r.blendFuncSeparate(0,769,0,1);break;case Gh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gs:r.blendFuncSeparate(770,771,1,771);break;case Hh:r.blendFunc(770,1);break;case Vh:r.blendFuncSeparate(0,769,0,1);break;case Gh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,L=null,A=null,b=O,y=Dt}return}Ce=Ce||ne,st=st||de,lt=lt||Se,(ne!==v||Ce!==C)&&(r.blendEquationSeparate(P[ne],P[Ce]),v=ne,C=Ce),(de!==x||Se!==M||st!==L||lt!==A)&&(r.blendFuncSeparate(R[de],R[Se],R[st],R[lt]),x=de,M=Se,L=st,A=lt),b=O,y=!1}function ee(O,ne){O.side===Jn?Re(2884):Y(2884);let de=O.side===Zt;ne&&(de=!de),Q(de),O.blending===gs&&O.transparent===!1?k(Wi):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(32926):Re(32926)}function Q(O){T!==O&&(O?r.frontFace(2304):r.frontFace(2305),T=O)}function ce(O){O!==gx?(Y(2884),O!==V&&(O===zh?r.cullFace(1029):O===_x?r.cullFace(1028):r.cullFace(1032))):Re(2884),V=O}function pe(O){O!==W&&($&&r.lineWidth(O),W=O)}function re(O,ne,de){O?(Y(32823),(N!==ne||F!==de)&&(r.polygonOffset(ne,de),N=ne,F=de)):Re(32823)}function le(O){O?Y(3089):Re(3089)}function oe(O){O===void 0&&(O=33984+z-1),he!==O&&(r.activeTexture(O),he=O)}function w(O,ne,de){de===void 0&&(he===null?de=33984+z-1:de=he);let Se=ae[de];Se===void 0&&(Se={type:void 0,texture:void 0},ae[de]=Se),(Se.type!==O||Se.texture!==ne)&&(he!==de&&(r.activeTexture(de),he=de),r.bindTexture(O,ne||xe[O]),Se.type=O,Se.texture=ne)}function S(){const O=ae[he];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function U(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(O){Z.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function ye(O){ie.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ae(O,ne){let de=h.get(ne);de===void 0&&(de=new WeakMap,h.set(ne,de));let Se=de.get(O);Se===void 0&&(Se=r.getUniformBlockIndex(ne,O.name),de.set(O,Se))}function Oe(O,ne){const Se=h.get(ne).get(O);u.get(ne)!==Se&&(r.uniformBlockBinding(ne,Se,O.__bindingPointIndex),u.set(ne,Se))}function ft(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},he=null,ae={},d={},_=new WeakMap,g=[],p=null,m=!1,b=null,v=null,x=null,M=null,C=null,L=null,A=null,y=!1,T=null,V=null,W=null,N=null,F=null,Z.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:Re,bindFramebuffer:Ee,drawBuffers:ge,useProgram:Pe,setBlending:k,setMaterial:ee,setFlipSided:Q,setCullFace:ce,setLineWidth:pe,setPolygonOffset:re,setScissorTest:le,activeTexture:oe,bindTexture:w,unbindTexture:S,compressedTexImage2D:U,compressedTexImage3D:q,texImage2D:be,texImage3D:we,updateUBOMapping:Ae,uniformBlockBinding:Oe,texStorage2D:X,texStorage3D:_e,texSubImage2D:J,texSubImage3D:ue,compressedTexSubImage2D:D,compressedTexSubImage3D:K,scissor:Me,viewport:ye,reset:ft}}function _w(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,S){return m?new OffscreenCanvas(w,S):Ro("canvas")}function v(w,S,U,q){let J=1;if((w.width>q||w.height>q)&&(J=q/Math.max(w.width,w.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ue=S?Jp:Math.floor,D=ue(J*w.width),K=ue(J*w.height);g===void 0&&(g=b(D,K));const X=U?b(D,K):g;return X.width=D,X.height=K,X.getContext("2d").drawImage(w,0,0,D,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+D+"x"+K+")."),X}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function x(w){return kc(w.width)&&kc(w.height)}function M(w){return a?!1:w.wrapS!==vn||w.wrapT!==vn||w.minFilter!==Et&&w.minFilter!==Kt}function C(w,S){return w.generateMipmaps&&S&&w.minFilter!==Et&&w.minFilter!==Kt}function L(w){r.generateMipmap(w)}function A(w,S,U,q,J=!1){if(a===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue=S;return S===6403&&(U===5126&&(ue=33326),U===5131&&(ue=33325),U===5121&&(ue=33321)),S===33319&&(U===5126&&(ue=33328),U===5131&&(ue=33327),U===5121&&(ue=33323)),S===6408&&(U===5126&&(ue=34836),U===5131&&(ue=34842),U===5121&&(ue=q===Ze&&J===!1?35907:32856),U===32819&&(ue=32854),U===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function y(w,S,U){return C(w,U)===!0||w.isFramebufferTexture&&w.minFilter!==Et&&w.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){return w===Et||w===Nc||w===Ca?9728:9729}function V(w){const S=w.target;S.removeEventListener("dispose",V),N(S),S.isVideoTexture&&_.delete(S)}function W(w){const S=w.target;S.removeEventListener("dispose",W),z(S)}function N(w){const S=n.get(w);if(S.__webglInit===void 0)return;const U=w.source,q=p.get(U);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(w),Object.keys(q).length===0&&p.delete(U)}n.remove(w)}function F(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const U=w.source,q=p.get(U);delete q[S.__cacheKey],o.memory.textures--}function z(w){const S=w.texture,U=n.get(w),q=n.get(S);if(q.__webglTexture!==void 0&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)r.deleteFramebuffer(U.__webglFramebuffer[J]),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[J]);else{if(r.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,ue=S.length;J<ue;J++){const D=n.get(S[J]);D.__webglTexture&&(r.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(w)}let $=0;function j(){$=0}function H(){const w=$;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),$+=1,w}function he(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function ae(w,S){const U=n.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(U,w,S);return}}t.bindTexture(3553,U.__webglTexture,33984+S)}function Te(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Re(U,w,S);return}t.bindTexture(35866,U.__webglTexture,33984+S)}function fe(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Re(U,w,S);return}t.bindTexture(32879,U.__webglTexture,33984+S)}function Z(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Ee(U,w,S);return}t.bindTexture(34067,U.__webglTexture,33984+S)}const ie={[Cs]:10497,[vn]:33071,[Fa]:33648},me={[Et]:9728,[Nc]:9984,[Ca]:9986,[Kt]:9729,[qp]:9985,[Pr]:9987};function xe(w,S,U){if(U?(r.texParameteri(w,10242,ie[S.wrapS]),r.texParameteri(w,10243,ie[S.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,ie[S.wrapR]),r.texParameteri(w,10240,me[S.magFilter]),r.texParameteri(w,10241,me[S.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(S.wrapS!==vn||S.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,T(S.magFilter)),r.texParameteri(w,10241,T(S.minFilter)),S.minFilter!==Et&&S.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Et||S.minFilter!==Ca&&S.minFilter!==Pr||S.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Y(w,S){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",V));const q=S.source;let J=p.get(q);J===void 0&&(J={},p.set(q,J));const ue=he(S);if(ue!==w.__cacheKey){J[ue]===void 0&&(J[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ue].usedTimes++;const D=J[w.__cacheKey];D!==void 0&&(J[w.__cacheKey].usedTimes--,D.usedTimes===0&&F(S)),w.__cacheKey=ue,w.__webglTexture=J[ue].texture}return U}function Re(w,S,U){let q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=35866),S.isData3DTexture&&(q=32879);const J=Y(w,S),ue=S.source;t.bindTexture(q,w.__webglTexture,33984+U);const D=n.get(ue);if(ue.version!==D.__version||J===!0){t.activeTexture(33984+U),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const K=M(S)&&x(S.image)===!1;let X=v(S.image,K,!1,u);X=oe(S,X);const _e=x(X)||a,be=s.convert(S.format,S.encoding);let we=s.convert(S.type),Me=A(S.internalFormat,be,we,S.encoding,S.isVideoTexture);xe(q,S,_e);let ye;const Ae=S.mipmaps,Oe=a&&S.isVideoTexture!==!0,ft=D.__version===void 0||J===!0,O=y(S,X,_e);if(S.isDepthTexture)Me=6402,a?S.type===Fi?Me=36012:S.type===xr?Me=33190:S.type===_s?Me=35056:Me=33189:S.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===wr&&Me===6402&&S.type!==jp&&S.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=xr,we=s.convert(S.type)),S.format===Ps&&Me===6402&&(Me=34041,S.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_s,we=s.convert(S.type))),ft&&(Oe?t.texStorage2D(3553,1,Me,X.width,X.height):t.texImage2D(3553,0,Me,X.width,X.height,0,be,we,null));else if(S.isDataTexture)if(Ae.length>0&&_e){Oe&&ft&&t.texStorage2D(3553,O,Me,Ae[0].width,Ae[0].height);for(let ne=0,de=Ae.length;ne<de;ne++)ye=Ae[ne],Oe?t.texSubImage2D(3553,ne,0,0,ye.width,ye.height,be,we,ye.data):t.texImage2D(3553,ne,Me,ye.width,ye.height,0,be,we,ye.data);S.generateMipmaps=!1}else Oe?(ft&&t.texStorage2D(3553,O,Me,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,be,we,X.data)):t.texImage2D(3553,0,Me,X.width,X.height,0,be,we,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ft&&t.texStorage3D(35866,O,Me,Ae[0].width,Ae[0].height,X.depth);for(let ne=0,de=Ae.length;ne<de;ne++)ye=Ae[ne],S.format!==yn?be!==null?Oe?t.compressedTexSubImage3D(35866,ne,0,0,0,ye.width,ye.height,X.depth,be,ye.data,0,0):t.compressedTexImage3D(35866,ne,Me,ye.width,ye.height,X.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,ne,0,0,0,ye.width,ye.height,X.depth,be,we,ye.data):t.texImage3D(35866,ne,Me,ye.width,ye.height,X.depth,0,be,we,ye.data)}else{Oe&&ft&&t.texStorage2D(3553,O,Me,Ae[0].width,Ae[0].height);for(let ne=0,de=Ae.length;ne<de;ne++)ye=Ae[ne],S.format!==yn?be!==null?Oe?t.compressedTexSubImage2D(3553,ne,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(3553,ne,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,ne,0,0,ye.width,ye.height,be,we,ye.data):t.texImage2D(3553,ne,Me,ye.width,ye.height,0,be,we,ye.data)}else if(S.isDataArrayTexture)Oe?(ft&&t.texStorage3D(35866,O,Me,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,be,we,X.data)):t.texImage3D(35866,0,Me,X.width,X.height,X.depth,0,be,we,X.data);else if(S.isData3DTexture)Oe?(ft&&t.texStorage3D(32879,O,Me,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,be,we,X.data)):t.texImage3D(32879,0,Me,X.width,X.height,X.depth,0,be,we,X.data);else if(S.isFramebufferTexture){if(ft)if(Oe)t.texStorage2D(3553,O,Me,X.width,X.height);else{let ne=X.width,de=X.height;for(let Se=0;Se<O;Se++)t.texImage2D(3553,Se,Me,ne,de,0,be,we,null),ne>>=1,de>>=1}}else if(Ae.length>0&&_e){Oe&&ft&&t.texStorage2D(3553,O,Me,Ae[0].width,Ae[0].height);for(let ne=0,de=Ae.length;ne<de;ne++)ye=Ae[ne],Oe?t.texSubImage2D(3553,ne,0,0,be,we,ye):t.texImage2D(3553,ne,Me,be,we,ye);S.generateMipmaps=!1}else Oe?(ft&&t.texStorage2D(3553,O,Me,X.width,X.height),t.texSubImage2D(3553,0,0,0,be,we,X)):t.texImage2D(3553,0,Me,be,we,X);C(S,_e)&&L(q),D.__version=ue.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ee(w,S,U){if(S.image.length!==6)return;const q=Y(w,S),J=S.source;t.bindTexture(34067,w.__webglTexture,33984+U);const ue=n.get(J);if(J.version!==ue.__version||q===!0){t.activeTexture(33984+U),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const D=S.isCompressedTexture||S.image[0].isCompressedTexture,K=S.image[0]&&S.image[0].isDataTexture,X=[];for(let ne=0;ne<6;ne++)!D&&!K?X[ne]=v(S.image[ne],!1,!0,c):X[ne]=K?S.image[ne].image:S.image[ne],X[ne]=oe(S,X[ne]);const _e=X[0],be=x(_e)||a,we=s.convert(S.format,S.encoding),Me=s.convert(S.type),ye=A(S.internalFormat,we,Me,S.encoding),Ae=a&&S.isVideoTexture!==!0,Oe=ue.__version===void 0||q===!0;let ft=y(S,_e,be);xe(34067,S,be);let O;if(D){Ae&&Oe&&t.texStorage2D(34067,ft,ye,_e.width,_e.height);for(let ne=0;ne<6;ne++){O=X[ne].mipmaps;for(let de=0;de<O.length;de++){const Se=O[de];S.format!==yn?we!==null?Ae?t.compressedTexSubImage2D(34069+ne,de,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(34069+ne,de,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+ne,de,0,0,Se.width,Se.height,we,Me,Se.data):t.texImage2D(34069+ne,de,ye,Se.width,Se.height,0,we,Me,Se.data)}}}else{O=S.mipmaps,Ae&&Oe&&(O.length>0&&ft++,t.texStorage2D(34067,ft,ye,X[0].width,X[0].height));for(let ne=0;ne<6;ne++)if(K){Ae?t.texSubImage2D(34069+ne,0,0,0,X[ne].width,X[ne].height,we,Me,X[ne].data):t.texImage2D(34069+ne,0,ye,X[ne].width,X[ne].height,0,we,Me,X[ne].data);for(let de=0;de<O.length;de++){const Ce=O[de].image[ne].image;Ae?t.texSubImage2D(34069+ne,de+1,0,0,Ce.width,Ce.height,we,Me,Ce.data):t.texImage2D(34069+ne,de+1,ye,Ce.width,Ce.height,0,we,Me,Ce.data)}}else{Ae?t.texSubImage2D(34069+ne,0,0,0,we,Me,X[ne]):t.texImage2D(34069+ne,0,ye,we,Me,X[ne]);for(let de=0;de<O.length;de++){const Se=O[de];Ae?t.texSubImage2D(34069+ne,de+1,0,0,we,Me,Se.image[ne]):t.texImage2D(34069+ne,de+1,ye,we,Me,Se.image[ne])}}}C(S,be)&&L(34067),ue.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ge(w,S,U,q,J){const ue=s.convert(U.format,U.encoding),D=s.convert(U.type),K=A(U.internalFormat,ue,D,U.encoding);n.get(S).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,K,S.width,S.height,S.depth,0,ue,D,null):t.texImage2D(J,0,K,S.width,S.height,0,ue,D,null)),t.bindFramebuffer(36160,w),re(S)?f.framebufferTexture2DMultisampleEXT(36160,q,J,n.get(U).__webglTexture,0,pe(S)):(J===3553||J>=34069&&J<=34074)&&r.framebufferTexture2D(36160,q,J,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(w,S,U){if(r.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let q=33189;if(U||re(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Fi?q=36012:J.type===xr&&(q=33190));const ue=pe(S);re(S)?f.renderbufferStorageMultisampleEXT(36161,ue,q,S.width,S.height):r.renderbufferStorageMultisample(36161,ue,q,S.width,S.height)}else r.renderbufferStorage(36161,q,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const q=pe(S);U&&re(S)===!1?r.renderbufferStorageMultisample(36161,q,35056,S.width,S.height):re(S)?f.renderbufferStorageMultisampleEXT(36161,q,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<q.length;J++){const ue=q[J],D=s.convert(ue.format,ue.encoding),K=s.convert(ue.type),X=A(ue.internalFormat,D,K,ue.encoding),_e=pe(S);U&&re(S)===!1?r.renderbufferStorageMultisample(36161,_e,X,S.width,S.height):re(S)?f.renderbufferStorageMultisampleEXT(36161,_e,X,S.width,S.height):r.renderbufferStorage(36161,X,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function P(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ae(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,J=pe(S);if(S.depthTexture.format===wr)re(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,J):r.framebufferTexture2D(36160,36096,3553,q,0);else if(S.depthTexture.format===Ps)re(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,J):r.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function R(w){const S=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,w)}else if(U){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=r.createRenderbuffer(),Pe(S.__webglDepthbuffer[q],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Pe(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function k(w,S,U){const q=n.get(w);S!==void 0&&ge(q.__webglFramebuffer,w,w.texture,36064,3553),U!==void 0&&R(w)}function ee(w){const S=w.texture,U=n.get(w),q=n.get(S);w.addEventListener("dispose",W),w.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=S.version,o.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,ue=w.isWebGLMultipleRenderTargets===!0,D=x(w)||a;if(J){U.__webglFramebuffer=[];for(let K=0;K<6;K++)U.__webglFramebuffer[K]=r.createFramebuffer()}else{if(U.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){const K=w.texture;for(let X=0,_e=K.length;X<_e;X++){const be=n.get(K[X]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&re(w)===!1){const K=ue?S:[S];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let X=0;X<K.length;X++){const _e=K[X];U.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(36161,U.__webglColorRenderbuffer[X]);const be=s.convert(_e.format,_e.encoding),we=s.convert(_e.type),Me=A(_e.internalFormat,be,we,_e.encoding,w.isXRRenderTarget===!0),ye=pe(w);r.renderbufferStorageMultisample(36161,ye,Me,w.width,w.height),r.framebufferRenderbuffer(36160,36064+X,36161,U.__webglColorRenderbuffer[X])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,q.__webglTexture),xe(34067,S,D);for(let K=0;K<6;K++)ge(U.__webglFramebuffer[K],w,S,36064,34069+K);C(S,D)&&L(34067),t.unbindTexture()}else if(ue){const K=w.texture;for(let X=0,_e=K.length;X<_e;X++){const be=K[X],we=n.get(be);t.bindTexture(3553,we.__webglTexture),xe(3553,be,D),ge(U.__webglFramebuffer,w,be,36064+X,3553),C(be,D)&&L(3553)}t.unbindTexture()}else{let K=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?K=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(K,q.__webglTexture),xe(K,S,D),ge(U.__webglFramebuffer,w,S,36064,K),C(S,D)&&L(K),t.unbindTexture()}w.depthBuffer&&R(w)}function Q(w){const S=x(w)||a,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let q=0,J=U.length;q<J;q++){const ue=U[q];if(C(ue,S)){const D=w.isWebGLCubeRenderTarget?34067:3553,K=n.get(ue).__webglTexture;t.bindTexture(D,K),L(D),t.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&re(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],U=w.width,q=w.height;let J=16384;const ue=[],D=w.stencilBuffer?33306:36096,K=n.get(w),X=w.isWebGLMultipleRenderTargets===!0;if(X)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,K.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,K.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,K.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){ue.push(36064+_e),w.depthBuffer&&ue.push(D);const be=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(be===!1&&(w.depthBuffer&&(J|=256),w.stencilBuffer&&(J|=1024)),X&&r.framebufferRenderbuffer(36008,36064,36161,K.__webglColorRenderbuffer[_e]),be===!0&&(r.invalidateFramebuffer(36008,[D]),r.invalidateFramebuffer(36009,[D])),X){const we=n.get(S[_e]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,we,0)}r.blitFramebuffer(0,0,U,q,0,0,U,q,J,9728),d&&r.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,K.__webglColorRenderbuffer[_e]);const be=n.get(S[_e]).__webglTexture;t.bindFramebuffer(36160,K.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,be,0)}t.bindFramebuffer(36009,K.__webglMultisampledFramebuffer)}}function pe(w){return Math.min(h,w.samples)}function re(w){const S=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(w){const S=o.render.frame;_.get(w)!==S&&(_.set(w,S),w.update())}function oe(w,S){const U=w.encoding,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Fc||U!==Rr&&(U===Ze?a===!1?e.has("EXT_sRGB")===!0&&q===yn?(w.format=Fc,w.minFilter=Kt,w.generateMipmaps=!1):S=em.sRGBToLinear(S):(q!==yn||J!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),S}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=Te,this.setTexture3D=fe,this.setTextureCube=Z,this.rebindTextures=k,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=re}function xw(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Lr)return 5121;if(s===jx)return 32819;if(s===Yx)return 32820;if(s===Wx)return 5120;if(s===Xx)return 5122;if(s===jp)return 5123;if(s===qx)return 5124;if(s===xr)return 5125;if(s===Fi)return 5126;if(s===Po)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kx)return 6406;if(s===yn)return 6408;if(s===$x)return 6409;if(s===Zx)return 6410;if(s===wr)return 6402;if(s===Ps)return 34041;if(s===Fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jx)return 6403;if(s===Qx)return 36244;if(s===ev)return 33319;if(s===tv)return 33320;if(s===nv)return 36249;if(s===Tl||s===El||s===Al||s===Cl)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qh||s===jh||s===Yh||s===Kh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$h||s===Zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$h)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jh||s===Qh||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===cf||s===uf||s===hf||s===ff)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ef)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===of)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===af)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ff)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pl)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rv||s===df||s===pf||s===mf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===df)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_s?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vw extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yw={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mw extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:wr,u!==wr&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wr&&(n=xr),n===void 0&&u===Ps&&(n=_s),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class Sw extends Ur{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let p=null,m=null;const b=[],v=[],x=new Set,M=new Map,C=new jt;C.layers.enable(1),C.viewport=new rt;const L=new jt;L.layers.enable(2),L.viewport=new rt;const A=[C,L],y=new vw;y.layers.enable(1),y.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Jl,b[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Jl,b[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Jl,b[Z]=ie),ie.getHandSpace()};function W(Z){const ie=v.indexOf(Z.inputSource);if(ie===-1)return;const me=b[ie];me!==void 0&&me.dispatchEvent({type:Z.type,data:Z.inputSource})}function N(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let Z=0;Z<b.length;Z++){const ie=v[Z];ie!==null&&(v[Z]=null,b[Z].disconnect(ie))}T=null,V=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),m=new Dr(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Lr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let ie=null,me=null,xe=null;g.depth&&(xe=g.stencil?35056:33190,ie=g.stencil?Ps:wr,me=g.stencil?_s:xr);const Y={colorFormat:32856,depthFormat:xe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Y),i.updateRenderState({layers:[f]}),m=new Dr(f.textureWidth,f.textureHeight,{format:yn,type:Lr,depthTexture:new Mw(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Re=e.properties.get(m);Re.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(Z){for(let ie=0;ie<Z.removed.length;ie++){const me=Z.removed[ie],xe=v.indexOf(me);xe>=0&&(v[xe]=null,b[xe].disconnect(me))}for(let ie=0;ie<Z.added.length;ie++){const me=Z.added[ie];let xe=v.indexOf(me);if(xe===-1){for(let Re=0;Re<b.length;Re++)if(Re>=v.length){v.push(me),xe=Re;break}else if(v[Re]===null){v[Re]=me,xe=Re;break}if(xe===-1)break}const Y=b[xe];Y&&Y.connect(me)}}const z=new I,$=new I;function j(Z,ie,me){z.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);const xe=z.distanceTo($),Y=ie.projectionMatrix.elements,Re=me.projectionMatrix.elements,Ee=Y[14]/(Y[10]-1),ge=Y[14]/(Y[10]+1),Pe=(Y[9]+1)/Y[5],P=(Y[9]-1)/Y[5],R=(Y[8]-1)/Y[0],k=(Re[8]+1)/Re[0],ee=Ee*R,Q=Ee*k,ce=xe/(-R+k),pe=ce*-R;ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pe),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const re=Ee+ce,le=ge+ce,oe=ee-pe,w=Q+(xe-pe),S=Pe*ge/le*re,U=P*ge/le*re;Z.projectionMatrix.makePerspective(oe,w,S,U,re,le),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function H(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;y.near=L.near=C.near=Z.near,y.far=L.far=C.far=Z.far,(T!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,V=y.far);const ie=Z.parent,me=y.cameras;H(y,ie);for(let xe=0;xe<me.length;xe++)H(me[xe],ie);me.length===2?j(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),he(Z,y,ie)};function he(Z,ie,me){me===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const xe=Z.children;for(let Y=0,Re=xe.length;Y<Re;Y++)xe[Y].updateMatrixWorld(!0);Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.getPlanes=function(){return x};let ae=null;function Te(Z,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let xe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let Y=0;Y<me.length;Y++){const Re=me[Y];let Ee=null;if(d!==null)Ee=d.getViewport(Re);else{const Pe=h.getViewSubImage(f,Re);Ee=Pe.viewport,Y===0&&(e.setRenderTargetTextures(m,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(m))}let ge=A[Y];ge===void 0&&(ge=new jt,ge.layers.enable(Y),ge.viewport=new rt,A[Y]=ge),ge.matrix.fromArray(Re.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Re.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Y===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(ge)}}for(let me=0;me<b.length;me++){const xe=v[me],Y=b[me];xe!==null&&Y!==void 0&&Y.update(xe,ie,c||o)}if(ae&&ae(Z,ie),ie.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let me=null;for(const xe of x)ie.detectedPlanes.has(xe)||(me===null&&(me=[]),me.push(xe));if(me!==null)for(const xe of me)x.delete(xe),M.delete(xe),n.dispatchEvent({type:"planeremoved",data:xe});for(const xe of ie.detectedPlanes)if(!x.has(xe))x.add(xe),M.set(xe,ie.lastChangedTime),n.dispatchEvent({type:"planeadded",data:xe});else{const Y=M.get(xe);xe.lastChangedTime>Y&&(M.set(xe,xe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:xe}))}}_=null}const fe=new cm;fe.setAnimationLoop(Te),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}function bw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,om(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ww(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=i[b.id];x===void 0&&(_(b),x=u(b),i[b.id]=x,b.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(b,M);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const v=h();b.__bindingPointIndex=v;const x=r.createBuffer(),M=b.__size,C=b.usage;return r.bindBuffer(35345,x),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,x),x}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],x=b.uniforms,M=b.__cache;r.bindBuffer(35345,v);for(let C=0,L=x.length;C<L;C++){const A=x[C];if(d(A,C,M)===!0){const y=A.__offset,T=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let W=0;W<T.length;W++){const N=T[W],F=g(N);typeof N=="number"?(A.__data[0]=N,r.bufferSubData(35345,y+V,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=N.elements[0],A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=N.elements[0],A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=N.elements[0]):(N.toArray(A.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,y,A.__data)}}r.bindBuffer(35345,null)}function d(b,v,x){const M=b.value;if(x[v]===void 0){if(typeof M=="number")x[v]=M;else{const C=Array.isArray(M)?M:[M],L=[];for(let A=0;A<C.length;A++)L.push(C[A].clone());x[v]=L}return!0}else if(typeof M=="number"){if(x[v]!==M)return x[v]=M,!0}else{const C=Array.isArray(x[v])?x[v]:[x[v]],L=Array.isArray(M)?M:[M];for(let A=0;A<C.length;A++){const y=C[A];if(y.equals(L[A])===!1)return y.copy(L[A]),!0}}return!1}function _(b){const v=b.uniforms;let x=0;const M=16;let C=0;for(let L=0,A=v.length;L<A;L++){const y=v[L],T={boundary:0,storage:0},V=Array.isArray(y.value)?y.value:[y.value];for(let W=0,N=V.length;W<N;W++){const F=V[W],z=g(F);T.boundary+=z.boundary,T.storage+=z.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=x,L>0){C=x%M;const W=M-C;C!==0&&W-T.boundary<0&&(x+=M-C,y.__offset=x)}x+=T.storage}return C=x%M,C>0&&(x+=M-C),b.__size=x,b.__cache={},this}function g(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}function Tw(){const r=Ro("canvas");return r.style.display="block",r}class pm{constructor(e={}){const{canvas:t=Tw(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=null,_=null;const g=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rr,this.useLegacyLights=!0,this.toneMapping=vi,this.toneMappingExposure=1;const m=this;let b=!1,v=0,x=0,M=null,C=-1,L=null;const A=new rt,y=new rt;let T=null,V=t.width,W=t.height,N=1,F=null,z=null;const $=new rt(0,0,V,W),j=new rt(0,0,V,W);let H=!1;const he=new Iu;let ae=!1,Te=!1,fe=null;const Z=new Fe,ie=new I,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return M===null?N:1}let Y=n;function Re(E,G){for(let te=0;te<E.length;te++){const B=E[te],se=t.getContext(B,G);if(se!==null)return se}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lu}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),Y===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),Y=Re(G,E),Y===null)throw Re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,ge,Pe,P,R,k,ee,Q,ce,pe,re,le,oe,w,S,U,q,J,ue,D,K,X,_e,be;function we(){Ee=new US(Y),ge=new LS(Y,Ee,e),Ee.init(ge),X=new xw(Y,Ee,ge),Pe=new gw(Y,Ee,ge),P=new BS,R=new nw,k=new _w(Y,Ee,Pe,R,ge,X,P),ee=new DS(m),Q=new OS(m),ce=new Zv(Y,ge),_e=new CS(Y,Ee,ce,ge),pe=new FS(Y,ce,P,_e),re=new GS(Y,pe,ce,P),ue=new VS(Y,ge,k),U=new RS(R),le=new tw(m,ee,Q,Ee,ge,_e,U),oe=new bw(m,R),w=new rw,S=new uw(Ee,ge),J=new AS(m,ee,Q,Pe,re,f,l),q=new mw(m,re,ge),be=new ww(Y,P,ge,Pe),D=new PS(Y,Ee,P,ge),K=new kS(Y,Ee,P,ge),P.programs=le.programs,m.capabilities=ge,m.extensions=Ee,m.properties=R,m.renderLists=w,m.shadowMap=q,m.state=Pe,m.info=P}we();const Me=new Sw(m,Y);this.xr=Me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(V,W,!1))},this.getSize=function(E){return E.set(V,W)},this.setSize=function(E,G,te=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,W=G,t.width=Math.floor(E*N),t.height=Math.floor(G*N),te===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(V*N,W*N).floor()},this.setDrawingBufferSize=function(E,G,te){V=E,W=G,N=te,t.width=Math.floor(E*te),t.height=Math.floor(G*te),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,G,te,B){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,G,te,B),Pe.viewport(A.copy($).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,G,te,B){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,G,te,B),Pe.scissor(y.copy(j).multiplyScalar(N).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){Pe.setScissorTest(H=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(E=!0,G=!0,te=!0){let B=0;E&&(B|=16384),G&&(B|=256),te&&(B|=1024),Y.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),w.dispose(),S.dispose(),R.dispose(),ee.dispose(),Q.dispose(),re.dispose(),_e.dispose(),be.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ce),Me.removeEventListener("sessionend",st),fe&&(fe.dispose(),fe=null),lt.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=P.autoReset,G=q.enabled,te=q.autoUpdate,B=q.needsUpdate,se=q.type;we(),P.autoReset=E,q.enabled=G,q.autoUpdate=te,q.needsUpdate=B,q.type=se}function Oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ft(E){const G=E.target;G.removeEventListener("dispose",ft),O(G)}function O(E){ne(E),R.remove(E)}function ne(E){const G=R.get(E).programs;G!==void 0&&(G.forEach(function(te){le.releaseProgram(te)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,te,B,se,Le){G===null&&(G=me);const De=se.isMesh&&se.matrixWorld.determinant()<0,Ie=Pg(E,G,te,B,se);Pe.setMaterial(B,De);let ke=te.index,He=1;B.wireframe===!0&&(ke=pe.getWireframeAttribute(te),He=2);const Ve=te.drawRange,We=te.attributes.position;let Qe=Ve.start*He,Vt=(Ve.start+Ve.count)*He;Le!==null&&(Qe=Math.max(Qe,Le.start*He),Vt=Math.min(Vt,(Le.start+Le.count)*He)),ke!==null?(Qe=Math.max(Qe,0),Vt=Math.min(Vt,ke.count)):We!=null&&(Qe=Math.max(Qe,0),Vt=Math.min(Vt,We.count));const Cn=Vt-Qe;if(Cn<0||Cn===1/0)return;_e.setup(se,B,Ie,te,ke);let Qi,mt=D;if(ke!==null&&(Qi=ce.get(ke),mt=K,mt.setIndex(Qi)),se.isMesh)B.wireframe===!0?(Pe.setLineWidth(B.wireframeLinewidth*xe()),mt.setMode(1)):mt.setMode(4);else if(se.isLine){let je=B.linewidth;je===void 0&&(je=1),Pe.setLineWidth(je*xe()),se.isLineSegments?mt.setMode(1):se.isLineLoop?mt.setMode(2):mt.setMode(3)}else se.isPoints?mt.setMode(0):se.isSprite&&mt.setMode(4);if(se.isInstancedMesh)mt.renderInstances(Qe,Cn,se.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,fl=Math.min(te.instanceCount,je);mt.renderInstances(Qe,Cn,fl)}else mt.render(Qe,Cn)},this.compile=function(E,G){function te(B,se,Le){B.transparent===!0&&B.side===Jn&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,Wo(B,se,Le),B.side=Mi,B.needsUpdate=!0,Wo(B,se,Le),B.side=Jn):Wo(B,se,Le)}_=S.get(E),_.init(),p.push(_),E.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(m.useLegacyLights),E.traverse(function(B){const se=B.material;if(se)if(Array.isArray(se))for(let Le=0;Le<se.length;Le++){const De=se[Le];te(De,E,B)}else te(se,E,B)}),p.pop(),_=null};let de=null;function Se(E){de&&de(E)}function Ce(){lt.stop()}function st(){lt.start()}const lt=new cm;lt.setAnimationLoop(Se),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(E){de=E,Me.setAnimationLoop(E),E===null?lt.stop():lt.start()},Me.addEventListener("sessionstart",Ce),Me.addEventListener("sessionend",st),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(G),G=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,G,M),_=S.get(E,p.length),_.init(),p.push(_),Z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),he.setFromProjectionMatrix(Z),Te=this.localClippingEnabled,ae=U.init(this.clippingPlanes,Te),d=w.get(E,g.length),d.init(),g.push(d),Dt(E,G,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(F,z),ae===!0&&U.beginShadows();const te=_.state.shadowsArray;if(q.render(te,E,G),ae===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(d,E),_.setupLights(m.useLegacyLights),G.isArrayCamera){const B=G.cameras;for(let se=0,Le=B.length;se<Le;se++){const De=B[se];Ai(d,E,De,De.viewport)}}else Ai(d,E,G);M!==null&&(k.updateMultisampleRenderTarget(M),k.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(m,E,G),_e.resetDefaultState(),C=-1,L=null,p.pop(),p.length>0?_=p[p.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Dt(E,G,te,B){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||he.intersectsSprite(E)){B&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const De=re.update(E),Ie=E.material;Ie.visible&&d.push(E,De,Ie,te,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==P.render.frame&&(E.skeleton.update(),E.skeleton.frame=P.render.frame),!E.frustumCulled||he.intersectsObject(E))){B&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const De=re.update(E),Ie=E.material;if(Array.isArray(Ie)){const ke=De.groups;for(let He=0,Ve=ke.length;He<Ve;He++){const We=ke[He],Qe=Ie[We.materialIndex];Qe&&Qe.visible&&d.push(E,De,Qe,te,ie.z,We)}}else Ie.visible&&d.push(E,De,Ie,te,ie.z,null)}}const Le=E.children;for(let De=0,Ie=Le.length;De<Ie;De++)Dt(Le[De],G,te,B)}function Ai(E,G,te,B){const se=E.opaque,Le=E.transmissive,De=E.transparent;_.setupLightsView(te),ae===!0&&U.setGlobalState(m.clippingPlanes,te),Le.length>0&&dt(se,Le,G,te),B&&Pe.viewport(A.copy(B)),se.length>0&&fn(se,G,te),Le.length>0&&fn(Le,G,te),De.length>0&&fn(De,G,te),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function dt(E,G,te,B){if(fe===null){const Ie=ge.isWebGL2;fe=new Dr(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Po:Lr,minFilter:Pr,samples:Ie&&a===!0?4:0})}const se=m.getRenderTarget();m.setRenderTarget(fe),m.clear();const Le=m.toneMapping;m.toneMapping=vi,fn(E,te,B),k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe);let De=!1;for(let Ie=0,ke=G.length;Ie<ke;Ie++){const He=G[Ie],Ve=He.object,We=He.geometry,Qe=He.material,Vt=He.group;if(Qe.side===Jn&&Ve.layers.test(B.layers)){const Cn=Qe.side;Qe.side=Zt,Qe.needsUpdate=!0,Gn(Ve,te,B,We,Qe,Vt),Qe.side=Cn,Qe.needsUpdate=!0,De=!0}}De===!0&&(k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe)),m.setRenderTarget(se),m.toneMapping=Le}function fn(E,G,te){const B=G.isScene===!0?G.overrideMaterial:null;for(let se=0,Le=E.length;se<Le;se++){const De=E[se],Ie=De.object,ke=De.geometry,He=B===null?De.material:B,Ve=De.group;Ie.layers.test(te.layers)&&Gn(Ie,G,te,ke,He,Ve)}}function Gn(E,G,te,B,se,Le){E.onBeforeRender(m,G,te,B,se,Le),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),se.onBeforeRender(m,G,te,B,E,Le),se.transparent===!0&&se.side===Jn&&se.forceSinglePass===!1?(se.side=Zt,se.needsUpdate=!0,m.renderBufferDirect(te,G,B,se,E,Le),se.side=Mi,se.needsUpdate=!0,m.renderBufferDirect(te,G,B,se,E,Le),se.side=Jn):m.renderBufferDirect(te,G,B,se,E,Le),E.onAfterRender(m,G,te,B,se,Le)}function Wo(E,G,te){G.isScene!==!0&&(G=me);const B=R.get(E),se=_.state.lights,Le=_.state.shadowsArray,De=se.state.version,Ie=le.getParameters(E,se.state,Le,G,te),ke=le.getProgramCacheKey(Ie);let He=B.programs;B.environment=E.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(E.isMeshStandardMaterial?Q:ee).get(E.envMap||B.environment),He===void 0&&(E.addEventListener("dispose",ft),He=new Map,B.programs=He);let Ve=He.get(ke);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===De)return uh(E,Ie),Ve}else Ie.uniforms=le.getUniforms(E),E.onBuild(te,Ie,m),E.onBeforeCompile(Ie,m),Ve=le.acquireProgram(Ie,ke),He.set(ke,Ve),B.uniforms=Ie.uniforms;const We=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=U.uniform),uh(E,Ie),B.needsLights=Rg(E),B.lightsStateVersion=De,B.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix);const Qe=Ve.getUniforms(),Vt=Pa.seqWithValue(Qe.seq,We);return B.currentProgram=Ve,B.uniformsList=Vt,Ve}function uh(E,G){const te=R.get(E);te.outputEncoding=G.outputEncoding,te.instancing=G.instancing,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Pg(E,G,te,B,se){G.isScene!==!0&&(G=me),k.resetTextureUnits();const Le=G.fog,De=B.isMeshStandardMaterial?G.environment:null,Ie=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Rr,ke=(B.isMeshStandardMaterial?Q:ee).get(B.envMap||De),He=B.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!te.attributes.tangent,We=!!te.morphAttributes.position,Qe=!!te.morphAttributes.normal,Vt=!!te.morphAttributes.color,Cn=B.toneMapped?m.toneMapping:vi,Qi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=Qi!==void 0?Qi.length:0,je=R.get(B),fl=_.state.lights;if(ae===!0&&(Te===!0||E!==L)){const rn=E===L&&B.id===C;U.setState(B,E,rn)}let wt=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==fl.state.version||je.outputEncoding!==Ie||se.isInstancedMesh&&je.instancing===!1||!se.isInstancedMesh&&je.instancing===!0||se.isSkinnedMesh&&je.skinning===!1||!se.isSkinnedMesh&&je.skinning===!0||je.envMap!==ke||B.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==U.numPlanes||je.numIntersection!==U.numIntersection)||je.vertexAlphas!==He||je.vertexTangents!==Ve||je.morphTargets!==We||je.morphNormals!==Qe||je.morphColors!==Vt||je.toneMapping!==Cn||ge.isWebGL2===!0&&je.morphTargetsCount!==mt)&&(wt=!0):(wt=!0,je.__version=B.version);let er=je.currentProgram;wt===!0&&(er=Wo(B,G,se));let hh=!1,Ks=!1,dl=!1;const Gt=er.getUniforms(),tr=je.uniforms;if(Pe.useProgram(er.program)&&(hh=!0,Ks=!0,dl=!0),B.id!==C&&(C=B.id,Ks=!0),hh||L!==E){if(Gt.setValue(Y,"projectionMatrix",E.projectionMatrix),ge.logarithmicDepthBuffer&&Gt.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),L!==E&&(L=E,Ks=!0,dl=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const rn=Gt.map.cameraPosition;rn!==void 0&&rn.setValue(Y,ie.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Gt.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||se.isSkinnedMesh)&&Gt.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if(se.isSkinnedMesh){Gt.setOptional(Y,se,"bindMatrix"),Gt.setOptional(Y,se,"bindMatrixInverse");const rn=se.skeleton;rn&&(ge.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Gt.setValue(Y,"boneTexture",rn.boneTexture,k),Gt.setValue(Y,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pl=te.morphAttributes;if((pl.position!==void 0||pl.normal!==void 0||pl.color!==void 0&&ge.isWebGL2===!0)&&ue.update(se,te,er),(Ks||je.receiveShadow!==se.receiveShadow)&&(je.receiveShadow=se.receiveShadow,Gt.setValue(Y,"receiveShadow",se.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tr.envMap.value=ke,tr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Ks&&(Gt.setValue(Y,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&Lg(tr,dl),Le&&B.fog===!0&&oe.refreshFogUniforms(tr,Le),oe.refreshMaterialUniforms(tr,B,N,W,fe),Pa.upload(Y,je.uniformsList,tr,k)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Pa.upload(Y,je.uniformsList,tr,k),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Gt.setValue(Y,"center",se.center),Gt.setValue(Y,"modelViewMatrix",se.modelViewMatrix),Gt.setValue(Y,"normalMatrix",se.normalMatrix),Gt.setValue(Y,"modelMatrix",se.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const rn=B.uniformsGroups;for(let ml=0,Dg=rn.length;ml<Dg;ml++)if(ge.isWebGL2){const fh=rn[ml];be.update(fh,er),be.bind(fh,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function Lg(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Rg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,G,te){R.get(E.texture).__webglTexture=G,R.get(E.depthTexture).__webglTexture=te;const B=R.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=te===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const te=R.get(E);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,te=0){M=E,v=G,x=te;let B=!0,se=null,Le=!1,De=!1;if(E){const ke=R.get(E);ke.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(36160,null),B=!1):ke.__webglFramebuffer===void 0?k.setupRenderTarget(E):ke.__hasExternalTextures&&k.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const Ve=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(se=Ve[G],Le=!0):ge.isWebGL2&&E.samples>0&&k.useMultisampledRTT(E)===!1?se=R.get(E).__webglMultisampledFramebuffer:se=Ve,A.copy(E.viewport),y.copy(E.scissor),T=E.scissorTest}else A.copy($).multiplyScalar(N).floor(),y.copy(j).multiplyScalar(N).floor(),T=H;if(Pe.bindFramebuffer(36160,se)&&ge.drawBuffers&&B&&Pe.drawBuffers(E,se),Pe.viewport(A),Pe.scissor(y),Pe.setScissorTest(T),Le){const ke=R.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+G,ke.__webglTexture,te)}else if(De){const ke=R.get(E.texture),He=G||0;Y.framebufferTextureLayer(36160,36064,ke.__webglTexture,te||0,He)}C=-1},this.readRenderTargetPixels=function(E,G,te,B,se,Le,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){Pe.bindFramebuffer(36160,Ie);try{const ke=E.texture,He=ke.format,Ve=ke.type;if(He!==yn&&X.convert(He)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===Po&&(Ee.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ve!==Lr&&X.convert(Ve)!==Y.getParameter(35738)&&!(Ve===Fi&&(ge.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-B&&te>=0&&te<=E.height-se&&Y.readPixels(G,te,B,se,X.convert(He),X.convert(Ve),Le)}finally{const ke=M!==null?R.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(E,G,te=0){const B=Math.pow(2,-te),se=Math.floor(G.image.width*B),Le=Math.floor(G.image.height*B);k.setTexture2D(G,0),Y.copyTexSubImage2D(3553,te,0,0,E.x,E.y,se,Le),Pe.unbindTexture()},this.copyTextureToTexture=function(E,G,te,B=0){const se=G.image.width,Le=G.image.height,De=X.convert(te.format),Ie=X.convert(te.type);k.setTexture2D(te,0),Y.pixelStorei(37440,te.flipY),Y.pixelStorei(37441,te.premultiplyAlpha),Y.pixelStorei(3317,te.unpackAlignment),G.isDataTexture?Y.texSubImage2D(3553,B,E.x,E.y,se,Le,De,Ie,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(3553,B,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):Y.texSubImage2D(3553,B,E.x,E.y,De,Ie,G.image),B===0&&te.generateMipmaps&&Y.generateMipmap(3553),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,G,te,B,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,ke=X.convert(B.format),He=X.convert(B.type);let Ve;if(B.isData3DTexture)k.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)k.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,B.flipY),Y.pixelStorei(37441,B.premultiplyAlpha),Y.pixelStorei(3317,B.unpackAlignment);const We=Y.getParameter(3314),Qe=Y.getParameter(32878),Vt=Y.getParameter(3316),Cn=Y.getParameter(3315),Qi=Y.getParameter(32877),mt=te.isCompressedTexture?te.mipmaps[0]:te.image;Y.pixelStorei(3314,mt.width),Y.pixelStorei(32878,mt.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),te.isDataTexture||te.isData3DTexture?Y.texSubImage3D(Ve,se,G.x,G.y,G.z,Le,De,Ie,ke,He,mt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ve,se,G.x,G.y,G.z,Le,De,Ie,ke,mt.data)):Y.texSubImage3D(Ve,se,G.x,G.y,G.z,Le,De,Ie,ke,He,mt),Y.pixelStorei(3314,We),Y.pixelStorei(32878,Qe),Y.pixelStorei(3316,Vt),Y.pixelStorei(3315,Cn),Y.pixelStorei(32877,Qi),se===0&&B.generateMipmaps&&Y.generateMipmap(Ve),Pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,Pe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Ew extends pm{}Ew.prototype.isWebGL1Renderer=!0;class Aw extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Cw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new I;class Fu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const id=new I,rd=new rt,sd=new rt,Pw=new I,od=new Fe,is=new I;class Lw extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)is.fromBufferAttribute(t,n),this.applyBoneTransform(n,is),this.boundingBox.expandByPoint(is)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)is.fromBufferAttribute(t,n),this.applyBoneTransform(n,is),this.boundingSphere.expandByPoint(is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rd.fromBufferAttribute(i.attributes.skinIndex,e),sd.fromBufferAttribute(i.attributes.skinWeight,e),id.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sd.getComponent(s);if(o!==0){const a=rd.getComponent(s);od.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pw.copy(id).applyMatrix4(od),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class mm extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rw extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Et,u=Et,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new Fe,Dw=new Fe;class ku{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Dw;ad.multiplyMatrices(a,t[s]),ad.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Zp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rw(t,e,e,yn,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new mm),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ld extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new Fe,cd=new Fe,_a=[],ud=new Ti,Iw=new Fe,eo=new Mn,to=new Ei;class Nw extends Mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ld(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Iw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),ud.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(ud)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),to.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rs),cd.multiplyMatrices(n,rs),eo.matrixWorld=cd,eo.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){const l=_a[o];l.instanceId=s,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ld(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Bu extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hd=new I,fd=new I,dd=new Fe,Ql=new sl,xa=new Ei;class zu extends at{constructor(e=new An,t=new Bu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hd.fromBufferAttribute(t,i-1),fd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hd.distanceTo(fd);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;dd.copy(i).invert(),Ql.copy(e.ray).applyMatrix4(dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let v=m,x=b-1;v<x;v+=d){const M=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,C),Ql.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let v=m,x=b-1;v<x;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Ql.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pd=new I,md=new I;class gm extends zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pd.fromBufferAttribute(t,i),md.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pd.distanceTo(md);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ow extends zu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _m extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gd=new Fe,zc=new sl,va=new Ei,ya=new I;class Uw extends at{constructor(e=new An,t=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;gd.copy(i).invert(),zc.copy(e.ray).applyMatrix4(gd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);ya.fromBufferAttribute(h,p),_d(ya,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)ya.fromBufferAttribute(h,_),_d(ya,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _d(r,e,t,n,i,s,o){const a=zc.distanceSqToPoint(r);if(a<t){const l=new I;zc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ne:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],o=[],a=new I,l=new Fe;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Mt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Mt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Hu(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ma=new I,ec=new Hu,tc=new Hu,nc=new Hu;class xm extends Fw{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ma.subVectors(i[0],i[1]).add(i[0]),c=Ma);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ma.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),ec.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),tc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),nc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),tc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),nc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ec.calc(l),tc.calc(l),nc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Vu extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kp,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends Vu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ii(r,e,t){return vm(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Sa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function kw(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ym(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ho{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bw extends Ho{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:s=e,a=2*t-n;break;case xf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,l=2*n-t;break;case xf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,b=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,x=d*p-d*g;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+b*o[c+M]+v*o[l+M]+x*o[h+M];return s}}class zw extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Hw extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Ii(n,s,o),this.values=Ii(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&vm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ii(this.times),t=Ii(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ll,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Ii(e,0,o),this.values=Ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Ii(this.times,0),t=Ii(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ls;class qs extends si{}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Lo;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mm extends si{}Mm.prototype.ValueTypeName="color";class Do extends si{}Do.prototype.ValueTypeName="number";class Vw extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Hn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Nr extends si{InterpolantFactoryMethodLinear(e){return new Vw(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Ls;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends si{}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Lo;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends si{}Io.prototype.ValueTypeName="vector";class Gw{constructor(e,t=-1,n,i=sv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xw(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=kw(l);l=xd(l,1,u),c=xd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Do(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];ym(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let b=0;b!==f[_].morphTargets.length;++b){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new Do(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Io,d+".position",f,"pos",i),n(Nr,d+".quaternion",f,"rot",i),n(Io,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ww(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Do;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return Mm;case"quaternion":return Nr;case"bool":case"boolean":return qs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Xw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ww(r.type);if(r.times===void 0){const t=[],n=[];ym(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ns={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qw{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const jw=new qw;class Ys{constructor(e){this.manager=e!==void 0?e:jw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const fi={};class Yw extends Error{constructor(e,t){super(e),this.response=t}}class ka extends Ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ns.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){b();function b(){h.read().then(({done:v,value:x})=>{if(v)m.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let C=0,L=u.length;C<L;C++){const A=u[C];A.onProgress&&A.onProgress(M)}m.enqueue(x),b()}})}}});return new Response(p)}else throw new Yw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Ns.add(e,c);const u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kw extends Ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ns.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ro("img");function l(){u(),Ns.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $w extends Ys{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new Kw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ll extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ic=new Fe,vd=new I,yd=new I;class Gu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Iu,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zw extends Gu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jw extends ll{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Zw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Md=new Fe,no=new I,rc=new I;class Qw extends Gu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),rc.copy(n.position),rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rc),n.updateMatrixWorld(),i.makeTranslation(-no.x,-no.y,-no.z),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}}class eT extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tT extends Gu{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new tT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nT extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class iT extends Ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ns.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ns.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Wu="\\[\\]\\.:\\/",rT=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",sT="[^"+Wu.replace("\\.","")+"]",oT=/((?:WC+[\/:])*)/.source.replace("WC",Xu),aT=/(WCOD+)?/.source.replace("WCOD",sT),lT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),cT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),uT=new RegExp("^"+oT+aT+lT+cT+"$"),hT=["material","materials","bones","map"];class fT{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rT,"")}static parseTrackName(e){const t=uT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);hT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=fT;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dT{constructor(e,t,n=0,i=1/0){this.ray=new sl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vc(e,this,n,t),n.sort(Sd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vc(e[i],this,n,t);return n.sort(Sd),n}}function Sd(r,e){return r.distance-e.distance}function Vc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Vc(i[s],e,t,!0)}}class bd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pT extends gm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new An;i.setAttribute("position",new Bn(t,3)),i.setAttribute("color",new Bn(n,3));const s=new Bu({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ue,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);const ei=new Aw,mT=new nT(4210752);ei.add(mT);const bm=new Sm(16777215,.5);ei.add(bm);bm.position.set(0,60,0);const Vn=new jt(75,window.innerWidth/window.innerHeight,1,1e4);Vn.position.set(300,500,300);const wd={type:"change"},sc={type:"start"},Td={type:"end"};class gT extends Ur{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",le),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wd),n.update(),s=i.NONE},this.update=function(){const D=new I,K=new Hn().setFromUnitVectors(e.up,new I(0,1,0)),X=K.clone().invert(),_e=new I,be=new Hn,we=2*Math.PI;return function(){const ye=n.object.position;D.copy(ye).sub(n.target),D.applyQuaternion(K),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&y(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ae=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ae)&&isFinite(Oe)&&(Ae<-Math.PI?Ae+=we:Ae>Math.PI&&(Ae-=we),Oe<-Math.PI?Oe+=we:Oe>Math.PI&&(Oe-=we),Ae<=Oe?a.theta=Math.max(Ae,Math.min(Oe,a.theta)):a.theta=a.theta>(Ae+Oe)/2?Math.max(Ae,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(X),ye.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||_e.distanceToSquared(n.object.position)>o||8*(1-be.dot(n.object.quaternion))>o?(n.dispatchEvent(wd),_e.copy(n.object.position),be.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",S),n.domElement.removeEventListener("pointerdown",k),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",Q),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new bd,l=new bd;let c=1;const u=new I;let h=!1;const f=new Ne,d=new Ne,_=new Ne,g=new Ne,p=new Ne,m=new Ne,b=new Ne,v=new Ne,x=new Ne,M=[],C={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function y(D){l.theta-=D}function T(D){l.phi-=D}const V=function(){const D=new I;return function(X,_e){D.setFromMatrixColumn(_e,0),D.multiplyScalar(-X),u.add(D)}}(),W=function(){const D=new I;return function(X,_e){n.screenSpacePanning===!0?D.setFromMatrixColumn(_e,1):(D.setFromMatrixColumn(_e,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(X),u.add(D)}}(),N=function(){const D=new I;return function(X,_e){const be=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;D.copy(we).sub(n.target);let Me=D.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),V(2*X*Me/be.clientHeight,n.object.matrix),W(2*_e*Me/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(X*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),W(_e*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(D){f.set(D.clientX,D.clientY)}function j(D){b.set(D.clientX,D.clientY)}function H(D){g.set(D.clientX,D.clientY)}function he(D){d.set(D.clientX,D.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;y(2*Math.PI*_.x/K.clientHeight),T(2*Math.PI*_.y/K.clientHeight),f.copy(d),n.update()}function ae(D){v.set(D.clientX,D.clientY),x.subVectors(v,b),x.y>0?F(A()):x.y<0&&z(A()),b.copy(v),n.update()}function Te(D){p.set(D.clientX,D.clientY),m.subVectors(p,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(p),n.update()}function fe(D){D.deltaY<0?z(A()):D.deltaY>0&&F(A()),n.update()}function Z(D){let K=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),K=!0;break}K&&(D.preventDefault(),n.update())}function ie(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);f.set(D,K)}}function me(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);g.set(D,K)}}function xe(){const D=M[0].pageX-M[1].pageX,K=M[0].pageY-M[1].pageY,X=Math.sqrt(D*D+K*K);b.set(0,X)}function Y(){n.enableZoom&&xe(),n.enablePan&&me()}function Re(){n.enableZoom&&xe(),n.enableRotate&&ie()}function Ee(D){if(M.length==1)d.set(D.pageX,D.pageY);else{const X=ue(D),_e=.5*(D.pageX+X.x),be=.5*(D.pageY+X.y);d.set(_e,be)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;y(2*Math.PI*_.x/K.clientHeight),T(2*Math.PI*_.y/K.clientHeight),f.copy(d)}function ge(D){if(M.length===1)p.set(D.pageX,D.pageY);else{const K=ue(D),X=.5*(D.pageX+K.x),_e=.5*(D.pageY+K.y);p.set(X,_e)}m.subVectors(p,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(p)}function Pe(D){const K=ue(D),X=D.pageX-K.x,_e=D.pageY-K.y,be=Math.sqrt(X*X+_e*_e);v.set(0,be),x.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),F(x.y),b.copy(v)}function P(D){n.enableZoom&&Pe(D),n.enablePan&&ge(D)}function R(D){n.enableZoom&&Pe(D),n.enableRotate&&Ee(D)}function k(D){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",Q)),U(D),D.pointerType==="touch"?oe(D):ce(D))}function ee(D){n.enabled!==!1&&(D.pointerType==="touch"?w(D):pe(D))}function Q(D){q(D),M.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",Q)),n.dispatchEvent(Td),s=i.NONE}function ce(D){let K;switch(D.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Br.DOLLY:if(n.enableZoom===!1)return;j(D),s=i.DOLLY;break;case Br.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;H(D),s=i.PAN}else{if(n.enableRotate===!1)return;$(D),s=i.ROTATE}break;case Br.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;$(D),s=i.ROTATE}else{if(n.enablePan===!1)return;H(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(sc)}function pe(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;he(D);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(D);break;case i.PAN:if(n.enablePan===!1)return;Te(D);break}}function re(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(sc),fe(D),n.dispatchEvent(Td))}function le(D){n.enabled===!1||n.enablePan===!1||Z(D)}function oe(D){switch(J(D),M.length){case 1:switch(n.touches.ONE){case zr.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case zr.PAN:if(n.enablePan===!1)return;me(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case zr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(),s=i.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(sc)}function w(D){switch(J(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(D),n.update();break;default:s=i.NONE}}function S(D){n.enabled!==!1&&D.preventDefault()}function U(D){M.push(D)}function q(D){delete C[D.pointerId];for(let K=0;K<M.length;K++)if(M[K].pointerId==D.pointerId){M.splice(K,1);return}}function J(D){let K=C[D.pointerId];K===void 0&&(K=new Ne,C[D.pointerId]=K),K.set(D.pageX,D.pageY)}function ue(D){const K=D.pointerId===M[0].pointerId?M[1]:M[0];return C[K.pointerId]}n.domElement.addEventListener("contextmenu",S),n.domElement.addEventListener("pointerdown",k),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}const Ed=new I,_T=new Hn,Ad=new I;class xT extends at{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const qn=new Fe,vT=new Fe;class yT{constructor(e={}){const t=this;let n,i,s,o;const a={camera:{fov:0,style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:i}},this.render=function(g,p){const m=p.projectionMatrix.elements[5]*o;a.camera.fov!==m&&(c.style.perspective=p.isPerspectiveCamera?m+"px":"",a.camera.fov=m),p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let b,v;p.isOrthographicCamera&&(b=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);const x=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,C=(p.isOrthographicCamera?`scale( ${x} )scale(`+m+")translate("+h(b)+"px,"+h(v)+"px)"+f(p.matrixWorldInverse):`scale( ${x} )translateZ(`+m+"px)"+f(p.matrixWorldInverse))+"translate("+s+"px,"+o+"px)";a.camera.style!==C&&(u.style.transform=C,a.camera.style=C),_(g,g,p)},this.setSize=function(g,p){n=g,i=p,s=n/2,o=i/2,l.style.width=g+"px",l.style.height=p+"px",c.style.width=g+"px",c.style.height=p+"px",u.style.width=g+"px",u.style.height=p+"px"};function h(g){return Math.abs(g)<1e-10?0:g}function f(g){const p=g.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function d(g){const p=g.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function _(g,p,m,b){if(g.isCSS3DObject){const v=g.visible===!0&&g.layers.test(m.layers)===!0;if(g.element.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(t,p,m);let x;g.isCSS3DSprite?(qn.copy(m.matrixWorldInverse),qn.transpose(),g.rotation2D!==0&&qn.multiply(vT.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(Ed,_T,Ad),qn.setPosition(Ed),qn.scale(Ad),qn.elements[3]=0,qn.elements[7]=0,qn.elements[11]=0,qn.elements[15]=1,x=d(qn)):x=d(g.matrixWorld);const M=g.element,C=a.objects.get(g);if(C===void 0||C.style!==x){M.style.transform=x;const L={style:x};a.objects.set(g,L)}M.parentNode!==u&&u.appendChild(M),g.onAfterRender(t,p,m)}}for(let v=0,x=g.children.length;v<x;v++)_(g.children[v],p,m)}}}const Vo=new pm({antialias:!0,physicallyCorrectLights:!0,logarithmicDepthBuffer:!0});Vo.setSize(window.innerWidth,window.innerHeight);Vo.shadowMap.enabled=!0;Vo.toneMapping=Wp;Vo.toneMappingExposure=.8;const qu=new yT;qu.setSize(window.innerWidth,window.innerHeight);document.querySelector(".cssrender").appendChild(qu.domElement);const Tr={renderer:Vo,css3drender:qu},wm=new gT(Vn,Tr.css3drender.domElement);wm.enableDamping=!0;var xo=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++r%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";r=u}var i=(performance||Date).now(),s=i,o=0,a=t(new xo.Panel("FPS","#0ff","#002")),l=t(new xo.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new xo.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-i,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};xo.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,h=3*o,f=15*o,d=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=l,g.style.cssText="width:80px;height:48px";var p=g.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,a,l),p.fillStyle=e,p.fillText(r,c,u),p.fillRect(h,f,d,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h,f,d,_),{dom:g,update:function(m,b){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,a,f),p.fillStyle=e,p.fillText(s(m)+" "+r+" ("+s(n)+"-"+s(i)+")",c,u),p.drawImage(g,h+o,f,d-o,_,h,f,d-o,_),p.fillRect(h+d-o,f,o,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h+d-o,f,o,s((1-m/b)*_))}}};const MT=xo,Tm=new MT;document.body.appendChild(Tm.domElement);const ST=new pT(5);Vn.aspect=window.innerWidth/window.innerHeight;Vn.updateProjectionMatrix();window.addEventListener("resize",()=>{Vn.aspect=window.innerWidth/window.innerHeight,Vn.updateProjectionMatrix(),Tr.renderer.setSize(window.innerWidth,window.innerHeight),Tr.css3drender.setSize(window.innerWidth,window.innerHeight),Tr.renderer.setPixelRatio(window.devicePixelRatio)});function Cd(r,e){if(e===ov)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Oc||e===Yp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Oc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class bT extends Ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new BT(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Hc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ka(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Em){try{o[Ye.KHR_BINARY_GLTF]=new zT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new ET;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new HT(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new VT;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new GT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function wT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TT{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ue(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new eT(u),c.distance=h;break;case"spot":c=new Jw(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ET{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return vr}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ze))}return Promise.all(i)}}class AT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class CT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(s)}}class PT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class LT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class RT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class DT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue(a[0],a[1],a[2]),Promise.all(s)}}class IT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class NT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(s)}}class OT{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class UT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kT{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class BT{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Fe,p=new I,m=new Hn,b=new I(1,1,1),v=new Nw(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,g.compose(p,m,b));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);at.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Em="glTF",io=12,Pd={JSON:1313821514,BIN:5130562};class zT{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Em)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-io,s=new DataView(e,io);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Pd.JSON){const c=new Uint8Array(e,io+o,a);this.content=n.decode(c)}else if(l===Pd.BIN){const c=io+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Gc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Gc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=vs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},a,c)})})}}class VT{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GT{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Am extends Ho{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,b=1-p,v=m-f+h;for(let x=0;x!==a;x++){const M=o[g+x+a],C=o[g+x+l]*u,L=o[_+x+a],A=o[_+x]*u;s[x]=b*M+v*C+p*L+m*A}return s}}const WT=new Hn;class XT extends Am{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return WT.fromArray(s).normalize().toArray(s),s}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ld={9728:Et,9729:Kt,9984:Nc,9985:qp,9986:Ca,9987:Pr},Rd={33071:vn,33648:Fa,10497:Cs},oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qT={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Lo},ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Vu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),r.DefaultMaterial}function ro(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YT(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function KT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $T(r){const e=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Dd(e.attributes):t=r.indices+":"+Dd(r.attributes)+":"+r.mode,t}function Dd(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Wc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JT=new Fe;class QT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new $w(this.options.manager):this.textureLoader=new iT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ro(s,a,i),Ui(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Hc.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=oc[i.type],a=vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Lt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=oc[i.type],c=vs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(b);v||(g=new c(a,m*d,i.count*d/u),v=new Cw(g,d/u),t.cache.add(b,v)),p=new Fu(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Lt(g,l,_);if(i.sparse!==void 0){const m=oc.SCALAR,b=vs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new b(o[1],v,i.sparse.count*m),C=new c(o[2],x,i.sparse.count*l);a!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized));for(let L=0,A=M.length;L<A;L++){const y=M[L];if(p.setX(y,C[L*l]),l>=2&&p.setY(y,C[L*l+1]),l>=3&&p.setZ(y,C[L*l+2]),l>=4&&p.setW(y,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ld[f.magFilter]||Kt,u.minFilter=Ld[f.minFilter]||Pr,u.wrapS=Rd[f.wrapS]||Cs,u.wrapT=Rd[f.wrapT]||Cs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Pt(g);p.needsUpdate=!0,f(p)}),t.load(Hc.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||ZT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _m,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bu,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Vu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=i[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ze)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Jn);const u=s.alphaMode||ac.OPAQUE;if(u===ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ac.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==vr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==vr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==vr&&(a.emissive=new Ue().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==vr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ze)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ui(h,s),t.associations.set(h,{materials:e}),s.extensions&&ro(i,h,s),h})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Id(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=$T(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Id(new An,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?jT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const b=c[d];if(p.mode===gn.TRIANGLES||p.mode===gn.TRIANGLE_STRIP||p.mode===gn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Lw(g,b):new Mn(g,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===gn.TRIANGLE_STRIP?m.geometry=Cd(m.geometry,Yp):p.mode===gn.TRIANGLE_FAN&&(m.geometry=Cd(m.geometry,Oc));else if(p.mode===gn.LINES)m=new gm(g,b);else if(p.mode===gn.LINE_STRIP)m=new zu(g,b);else if(p.mode===gn.LINE_LOOP)m=new Ow(g,b);else if(p.mode===gn.POINTS)m=new Uw(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&KT(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ui(m,s),p.extensions&&ro(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new yr;t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(wv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ou(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Fe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ku(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],_=f.target,g=_.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;_.node!==void 0&&(s.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",m)),l.push(d),c.push(_))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],_=u[3],g=u[4],p=[];for(let m=0,b=h.length;m<b;m++){const v=h[m],x=f[m],M=d[m],C=_[m],L=g[m];if(v===void 0)continue;v.updateMatrix();let A;switch(Ni[L.path]){case Ni.weights:A=Do;break;case Ni.rotation:A=Nr;break;case Ni.position:case Ni.scale:default:A=Io;break}const y=v.name?v.name:v.uuid,T=C.interpolation!==void 0?qT[C.interpolation]:Ls,V=[];Ni[L.path]===Ni.weights?v.traverse(function(N){N.morphTargetInfluences&&V.push(N.name?N.name:N.uuid)}):V.push(y);let W=M.array;if(M.normalized){const N=Wc(W.constructor),F=new Float32Array(W.length);for(let z=0,$=W.length;z<$;z++)F[z]=W[z]*N;W=F}for(let N=0,F=V.length;N<F;N++){const z=new A(V[N]+"."+Ni[L.path],x.array,W,T);C.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(j){const H=this instanceof Nr?XT:Am;return new H(this.times,this.values,this.getValueSize()/3,j)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(z)}}return new Gw(i,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,JT)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new mm:c.length>1?u=new yr:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ui(u,s),s.extensions&&ro(n,u,s),s.matrix!==void 0){const h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new yr;n.name&&(s.name=i.createUniqueName(n.name)),Ui(s,n),n.extensions&&ro(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ni||f instanceof Pt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}}function e1(r,e,t){const n=e.attributes,i=new Ti;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Wc(vs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Wc(vs[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Id(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Gc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ui(r,e),e1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?YT(r,e.targets,t):r})}const lc=new WeakMap;class t1 extends Ys{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ka(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,xn).catch(n)}decodeDracoFile(e,t,n,i,s=Rs){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(lc.has(e)){const l=lc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),lc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new An;e.index&&t.setIndex(new Lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new Lt(o,a);s==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==xn)return;const n=new Ue;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ka(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=n1.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function n1(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let b,v;if(c.useUniqueIDs)v=u[p],b=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[p]]),v===-1)continue;b=a.GetAttribute(f,v)}const x=i(o,a,f,p,m,b);p==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,g=_*u.BYTES_PER_ELEMENT,p=s(o,u),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,p,g,m);const b=new u(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:c,array:b,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Cm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Os={duration:.5,overwrite:!1,delay:0},ju,Bt,_t,Sn=1e8,it=1/Sn,Xc=Math.PI*2,i1=Xc/4,r1=0,Pm=Math.sqrt,s1=Math.cos,o1=Math.sin,At=function(e){return typeof e=="string"},ht=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},Yu=function(e){return typeof e>"u"},ri=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},Ku=function(){return typeof window<"u"},ba=function(e){return ht(e)||At(e)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,qc=/(?:-?\.?\d|\.)+/gi,Rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dm=/[+-]=-?[.\d]+/,Im=/[^,'"\[\]\s]+/gi,a1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,_n,jc,$u,hn={},Ba={},Nm,Om=function(e){return(Ba=Or(e,hn))&&nn},Zu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},za=function(e,t){return!t&&console.warn(e)},Um=function(e,t){return e&&(hn[e]=t)&&Ba&&(Ba[e]=t)||hn},No=function(){return 0},l1={suppressEvents:!0,isStart:!0,kill:!1},La={suppressEvents:!0,kill:!1},c1={suppressEvents:!0},Ju={},Xi=[],Yc={},Fm,ln={},uc={},Nd=30,Ra=[],Qu="",eh=function(e){var t=e[0],n,i;if(ri(t)||ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ra.length;i--&&!Ra[i].targetTest(t););n=Ra[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ag(e[i],n)))||e.splice(i,1);return e},Er=function(e){return e._gsap||eh(bn(e))[0]._gsap},km=function(e,t,n){return(n=e[t])&&ht(n)?e[t]():Yu(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},pt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},ys=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},u1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ha=function(){var e=Xi.length,t=Xi.slice(0),n,i;for(Yc={},Xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bm=function(e,t,n,i){Xi.length&&!Bt&&Ha(),e.render(t,n,i||Bt&&t<0&&(e._initted||e._startAt)),Xi.length&&!Bt&&Ha()},zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Im).length<2?t:At(e)?e.trim():e},Hm=function(e){return e},En=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},h1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Or=function(e,t){for(var n in t)e[n]=t[n];return e},Od=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ri(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Va=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vo=function(e){var t=e.parent||ct,n=e.keyframes?h1(zt(e.keyframes)):En;if(Jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},f1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Vm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ki=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},d1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kc=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(La):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},p1=function r(e){return!e||e._ts&&r(e.parent)},Ud=function(e){return e._repeat?Us(e._tTime,e=e.duration()+e._rDelay)*e:0},Us=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ga=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ul=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ul(e),n._dirty||Ar(n,e)),e},Gm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ga(e.rawTime(),t),(!t._dur||Go(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),Ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},Qn=function(e,t,n,i){return t.parent&&Ki(t),t._start=Ct((Si(n)?n:n||e!==ct?mn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vm(e,t,"_first","_last",e._sort?"_start":0),$c(t)||(e._recent=t),i||Gm(e,t),e._ts<0&&hl(e,e._tTime),e},Wm=function(e,t){return(hn.ScrollTrigger||Zu("scrollTrigger",t))&&hn.ScrollTrigger.create(t,e)},Xm=function(e,t,n,i,s){if(nh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fm!==cn.frame)return Xi.push(e),e._lazy=[s,i],1},m1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},$c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},g1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&m1(e)&&!(!e._initted&&$c(e))||(e._ts<0||e._dp._ts<0)&&!$c(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Go(0,e._tDur,t),u=Us(l,a),e._yoyo&&u&1&&(o=1-o),u!==Us(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&Xm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Kc(e,t,n,!0),e._onUpdate&&!n&&wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ki(e,1),!n&&!Bt&&(wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fs=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&hl(e,e._tTime=e._tDur*a),e.parent&&ul(e),n||Ar(e.parent,e),e},Fd=function(e){return e instanceof $t?Ar(e):Fs(e,e._dur)},x1={_start:0,endTime:No,totalDuration:No},mn=function r(e,t,n){var i=e.labels,s=e._recent||x1,o=e.duration()>=Sn?s.endTime(!1):e._dur,a,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(zt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},yo=function(e,t,n){var i=Si(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Jt(l.vars.inherit)&&l.parent;o.immediateRender=Jt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new yt(t[0],o,t[s+1])},Zi=function(e,t){return e||e===0?t(e):t},Go=function(e,t,n){return n<e?e:n>t?t:n},Ft=function(e,t){return!At(e)||!(t=a1.exec(e))?"":t[1]},v1=function(e,t,n){return Zi(n,function(i){return Go(e,t,i)})},Zc=[].slice,qm=function(e,t){return e&&ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ri(e[0]))&&!e.nodeType&&e!==_n},y1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||qm(i,1)?(s=n).push.apply(s,bn(i)):n.push(i)})||n},bn=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):At(e)&&!n&&(jc||!ks())?Zc.call((t||$u).querySelectorAll(e),0):zt(e)?y1(e,n):qm(e)?Zc.call(e,0):e?[e]:[]},Jc=function(e){return e=bn(e)[0]||za("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bn(t,n.querySelectorAll?n:n===e?za("Invalid scope")||$u.createElement("div"):e)}},jm=function(e){return e.sort(function(){return .5-Math.random()})},Ym=function(e){if(ht(e))return e;var t=ri(e)?e:{each:e},n=Cr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return At(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,b,v,x,M,C,L,A,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!y){for(L=-Sn;L<(L=_[y++].getBoundingClientRect().left)&&y<g;);y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,b=y===Sn?0:l?g*h/y-.5:i/y|0,L=0,A=Sn,C=0;C<g;C++)v=C%y-m,x=b-(C/y|0),p[C]=M=c?Math.abs(c==="y"?x:v):Pm(v*v+x*x),M>L&&(L=M),M<A&&(A=M);i==="random"&&jm(p),p.max=L-A,p.min=A,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Ft(t.amount||t.each)||0,n=n&&g<0?rg(n):n}return g=(p[f]-p.min)/p.max||0,Ct(p.b+(n?n(g):g)*p.v)+p.u}},Qc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Si(n)?0:Ft(n))}},Km=function(e,t){var n=zt(e),i,s;return!n&&ri(e)&&(i=n=e.radius||Sn,e.values?(e=bn(e.values),(s=!Si(e[0]))&&(i*=i)):e=Qc(e.increment)),Zi(t,n?ht(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Sn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Si(o)?u:u+Ft(o)}:Qc(e))},$m=function(e,t,n,i){return Zi(zt(e)?!t:n===!0?!!(n=0):!i,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},M1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},S1=function(e,t){return function(n){return e(parseFloat(n))+(t||Ft(n))}},b1=function(e,t,n){return Jm(e,t,0,1,n)},Zm=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},w1=function r(e,t,n){var i=t-e;return zt(e)?Zm(e,r(0,e.length),t):Zi(n,function(s){return(i+(s-e)%i)%i+e})},T1=function r(e,t,n){var i=t-e,s=i*2;return zt(e)?Zm(e,r(0,e.length-1),t):Zi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Oo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Im:qc),n+=e.substr(t,i-t)+$m(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Jm=function(e,t,n,i,s){var o=t-e,a=i-n;return Zi(s,function(l){return n+((l-e)/o*a||0)})},E1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=At(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Or(zt(e)?[]:{},e));if(!u){for(l in t)th.call(a,e,l,"get",t[l]);s=function(_){return sh(_,a)||(o?e.p:e)}}}return Zi(n,s)},kd=function(e,t,n){var i=e.labels,s=Sn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},wn=function(e,t,n){var i=e.vars,s=i[t],o=_t,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xi.length&&Ha(),a&&(_t=a),u=l?s.apply(c,l):s.call(c),_t=o,u},co=function(e){return Ki(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&wn(e,"onInterrupt"),e},fs,Qm=[],eg=function(e){if(!Ku()){Qm.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:No,render:sh,add:th,kill:V1,modifier:H1,rawVars:0},o={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(ks(),e!==i){if(ln[t])return;En(i,En(Va(e,s),o)),Or(i.prototype,Or(s,Va(e,o))),ln[i.prop=t]=i,e.targetTest&&(Ra.push(i),Ju[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Um(t,i),e.register&&e.register(nn,i,en)},et=255,uo={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},hc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*et+.5|0},tg=function(e,t,n){var i=e?Si(e)?[e>>16,e>>8&et,e&et]:0:uo.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uo[e])i=uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&et,i&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=hc(l+1/3,s,o),i[1]=hc(l,s,o),i[2]=hc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Rm),n&&i.length<4&&(i[3]=1),i}else i=e.match(qc)||uo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/et,o=i[1]/et,a=i[2]/et,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ng=function(e){var t=[],n=[],i=-1;return e.split(qi).forEach(function(s){var o=s.match(hs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Bd=function(e,t,n){var i="",s=(e+i).match(qi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=tg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ng(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qi,"1").split(hs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(qi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},qi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),A1=/hsl[a]?\(/,ig=function(e){var t=e.join(" "),n;if(qi.lastIndex=0,qi.test(t))return n=A1.test(t),e[1]=Bd(e[1],n),e[0]=Bd(e[0],n,ng(e[1])),!0},Uo,cn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,b=p===!0,v,x,M,C;if(m>e&&(n+=m-t),i+=m,M=i-n,v=M-o,(v>0||b)&&(C=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=s?4:s-v),x=1),b||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](M,f,C,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Nm&&(!jc&&Ku()&&(_n=jc=window,$u=_n.document||{},hn.gsap=nn,(_n.gsapVersions||(_n.gsapVersions=[])).push(nn.version),Om(Ba||_n.GreenSockGlobals||!_n.gsap&&_n||{}),u=_n.requestAnimationFrame,Qm.forEach(eg)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Uo=1,_(2))},sleep:function(){(u?_n.cancelAnimationFrame:clearTimeout)(l),Uo=0,c=No},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,b){var v=m?function(x,M,C,L){p(x,M,C,L),h.remove(v)}:p;return h.remove(p),a[b?"unshift":"push"](v),ks(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),ks=function(){return!Uo&&cn.wake()},qe={},C1=/^[\d.\-M][\d.\-,\s]/,P1=/["']/g,L1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(P1,"").trim():+c,i=l.substr(a+1).trim();return t},R1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},D1=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[L1(t[1])]:R1(e).split(",").map(zm)):qe._CE&&C1.test(e)?qe._CE("",e):n},rg=function(e){return function(t){return 1-e(1-t)}},sg=function r(e,t){for(var n=e._first,i;n;)n instanceof $t?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Cr=function(e,t){return e&&(ht(e)?e:qe[e]||D1(e))||t},kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Qt(e,function(a){qe[a]=hn[a]=s,qe[o=a.toLowerCase()]=n;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},og=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Xc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*o1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:og(a);return s=Xc/s,l.config=function(c,u){return r(e,c,u)},l},dc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:og(n);return i.config=function(s){return r(e,s)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;kr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;kr("Elastic",fc("in"),fc("out"),fc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);kr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});kr("Circ",function(r){return-(Pm(1-r*r)-1)});kr("Sine",function(r){return r===1?1:-s1(r*i1)+1});kr("Back",dc("in"),dc("out"),dc());qe.SteppedEase=qe.steps=hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((i*Go(0,o,a)|0)+s)*n}}};Os.ease=qe["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qu+=r+","+r+"Params,"});var ag=function(e,t){this.id=r1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:km,this.set=t?t.getSetter:rh},Bs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fs(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Uo||cn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hl(this,n),!s._dp||s.parent||Gm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Us(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this._tDur,i),!0),ul(this),d1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=c1);var i=Bt;return Bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mn(this,n),Jt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-it)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=ht(n)?n:Hm,a=function(){var c=i.then;i.then=null,ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){co(this)},r}();En(Bs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var $t=function(r){Cm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jt(n.sortChildren),ct&&Qn(n.parent||ct,pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wm(pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return yo(0,arguments,this),this},t.from=function(i,s,o){return yo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return yo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yt(i,s,mn(this,o),1),this},t.call=function(i,s,o){return Qn(this,yt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new yt(i,o,mn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,vo(o).immediateRender=Jt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,vo(a).immediateRender=Jt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,b,v,x,M,C,L;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ct(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),M=Us(this._tTime,p),!a&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),C&&g&1&&(f=c-f,L=1),g!==M&&!this._lock){var A=C&&M&1,y=A===(C&&g&1);if(g<M&&(A=!A),a=A?0:c,this._lock=1,this.render(a||(L?0:Ct(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;sg(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=_1(this,Ct(a),Ct(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){b=0,_&&(u+=this._zTime=-it);break}}d=_}else{d=this._last;for(var T=i<0?i:f;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Bt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){b=0,_&&(u+=this._zTime=T?-it:it);break}}d=_}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-it)._zTime=f>=a?1:-1,this._ts))return this._start=x,ul(this),this.render(i,s,o);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ki(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Si(s)||(s=mn(this,s,i)),!(i instanceof Bs)){if(zt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(At(i))return this.addLabel(i,s);if(ht(i))i=yt.delayedCall(0,i);else return this}return this!==i?Qn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Sn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof yt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return At(i)?this.removeLabel(i):ht(i)?this.killTweensOf(i):(cl(this,i),i===this._recent&&(this._recent=this._last),Ar(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=mn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=yt.delayedCall(0,s||No,o);return a.data="isPause",this._hasPause=1,Qn(this,a,mn(this,i))},t.removePause=function(i){var s=this._first;for(i=mn(this,i);s;)s._start===i&&s.data==="isPause"&&Ki(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ki!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=bn(i),l=this._first,c=Si(s),u;l;)l instanceof yt?u1(l._targets,a)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=mn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=yt.to(o,En({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Fs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,En({startAt:{time:mn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kd(this,mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kd(this,mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ar(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ar(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Sn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Qn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===ct&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ct._ts&&(Bm(ct,Ga(i,ct)),Fm=cn.frame),cn.frame>=Nd){Nd+=un.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&un.autoSleep&&cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||cn.sleep()}}},e}(Bs);En($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var I1=function(e,t,n,i,s,o,a){var l=new en(this._pt,e,t,0,1,dg,null,s),c=0,u=0,h,f,d,_,g,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Oo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(cc)||[];h=cc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ys(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=cc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Dm.test(i)||m)&&(l.e=0),this._pt=l,l},th=function(e,t,n,i,s,o,a,l,c,u){ht(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:ht(h)?c?e[t.indexOf("set")||!ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=ht(h)?c?k1:hg:ih,_;if(At(i)&&(~i.indexOf("random(")&&(i=Oo(i)),i.charAt(1)==="="&&(_=ys(f,i)+(Ft(f)||0),(_||_===0)&&(i=_))),!u||f!==i||eu)return!isNaN(f*i)&&i!==""?(_=new en(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?z1:fg,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Zu(t,i),I1.call(this,e,t,f,i,d,l||un.stringFilter,c))},N1=function(e,t,n,i,s){if(ht(e)&&(e=Mo(e,s,t,n,i)),!ri(e)||e.style&&e.nodeType||zt(e)||Lm(e))return At(e)?Mo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Mo(e[a],s,t,n,i);return o},lg=function(e,t,n,i,s,o){var a,l,c,u;if(ln[e]&&(a=new ln[e]).init(s,a.rawVars?t[e]:N1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new en(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ki,eu,nh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,p=e._dur,m=e._startAt,b=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:b,M=e._overwrite==="auto"&&!ju,C=e.timeline,L,A,y,T,V,W,N,F,z,$,j,H,he;if(C&&(!_||!s)&&(s="none"),e._ease=Cr(s,Os.ease),e._yEase=d?rg(Cr(d===!0?s:d,Os.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!C&&!!i.runBackwards,!C||_&&!i.stagger){if(F=b[0]?Er(b[0]).harness:0,H=F&&i[F.prop],L=Va(i,Ju),m&&(m._zTime<0&&m.progress(1),t<0&&f&&a&&!g?m.render(-1,!0):m.revert(f&&p?La:l1),m._lazy=0),o){if(Ki(e._startAt=yt.set(b,En({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!m&&Jt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!a&&!g)&&e._startAt.revert(La),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!m){if(t&&(a=!1),y=En({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Jt(l),immediateRender:a,stagger:0,parent:v},L),H&&(y[F.prop]=H),Ki(e._startAt=yt.set(b,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(La):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Jt(l)||l&&!p,A=0;A<b.length;A++){if(V=b[A],N=V._gsap||eh(b)[A]._gsap,e._ptLookup[A]=$={},Yc[N.id]&&Xi.length&&Ha(),j=x===b?A:x.indexOf(V),F&&(z=new F).init(V,H||L,e,j,x)!==!1&&(e._pt=T=new en(e._pt,V,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ae){$[ae]=T}),z.priority&&(W=1)),!F||H)for(y in L)ln[y]&&(z=lg(y,L,e,j,V,x))?z.priority&&(W=1):$[y]=T=th.call(e,V,y,"get",L[y],j,x,0,i.stringFilter);e._op&&e._op[A]&&e.kill(V,e._op[A]),M&&e._pt&&(ki=e,ct.killTweensOf(V,$,e.globalTime(t)),he=!e.parent,ki=0),e._pt&&l&&(Yc[N.id]=1)}W&&pg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!he,_&&t<=0&&C.render(Sn,!0,!0)},O1=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return eu=1,e.vars[t]="+=0",nh(e,a),eu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=pt(n)+Ft(u.e)),u.b&&(u.b=c.s+Ft(u.b))},U1=function(e,t){var n=e[0]?Er(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Or({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},F1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(zt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Mo=function(e,t,n,i,s){return ht(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Oo(e):e},cg=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ug={};Qt(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ug[r]=1});var yt=function(r){Cm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:vo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,b=i.parent||ct,v=(zt(n)||Lm(n)?Si(n[0]):"length"in i)?[n]:bn(n),x,M,C,L,A,y,T,V;if(a._targets=v.length?eh(v):za("GSAP target "+n+" not found. https://greensock.com",!un.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ba(c)||ba(u)){if(i=a.vars,x=a.timeline=new $t({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:v}),x.kill(),x.parent=x._dp=pi(a),x._start=0,f||ba(c)||ba(u)){if(L=v.length,T=f&&Ym(f),ri(f))for(A in f)~cg.indexOf(A)&&(V||(V={}),V[A]=f[A]);for(M=0;M<L;M++)C=Va(i,ug),C.stagger=0,m&&(C.yoyoEase=m),V&&Or(C,V),y=v[M],C.duration=+Mo(c,pi(a),M,y,v),C.delay=(+Mo(u,pi(a),M,y,v)||0)-a._delay,!f&&L===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(y,C,T?T(M,y,v):0),x._ease=qe.none;x.duration()?c=u=0:a.timeline=0}else if(_){vo(En(x.vars.defaults,{ease:"none"})),x._ease=Cr(_.ease||i.ease||"none");var W=0,N,F,z;if(zt(_))_.forEach(function($){return x.to(v,$,">")}),x.duration();else{C={};for(A in _)A==="ease"||A==="easeEach"||F1(A,_[A],C,_.easeEach);for(A in C)for(N=C[A].sort(function($,j){return $.t-j.t}),W=0,M=0;M<N.length;M++)F=N[M],z={ease:F.e,duration:(F.t-(M?N[M-1].t:0))/100*c},z[A]=F.v,x.to(v,z,W),W+=z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!ju&&(ki=pi(a),ct.killTweensOf(v),ki=0),Qn(b,pi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ct(b._time)&&Jt(h)&&p1(pi(a))&&b.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-u)||0)),p&&Wm(pi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-it&&!u?l:i<it?0:i,f,d,_,g,p,m,b,v,x;if(!c)g1(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ct(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,f=c-f),p=Us(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=h,this;_!==p&&(v&&this._yEase&&sg(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Xm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!_&&(wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;v&&v.render(i<0?i:!f&&m?-it:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Kc(this,i,s,o),wn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Kc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ki(this,1),!s&&!(u&&!a)&&(h||a||m)&&(wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){Uo||cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||nh(this,l),c=this._ease(l/this._dur),O1(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(hl(this,0),this.parent||Vm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?co(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ki&&ki.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?bn(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&f1(a,l))return s==="all"&&(this._pt=0),co(this);for(h=this._op=this._op||[],s!=="all"&&(At(s)&&(g={},Qt(s,function(b){return g[b]=1}),s=g),s=U1(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&cl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&co(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return yo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return yo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ct.killTweensOf(i,s,o)},e}(Bs);En(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(r){yt[r]=function(){var e=new $t,t=Zc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ih=function(e,t,n){return e[t]=n},hg=function(e,t,n){return e[t](n)},k1=function(e,t,n,i){return e[t](i.fp,n)},B1=function(e,t,n){return e.setAttribute(t,n)},rh=function(e,t){return ht(e[t])?hg:Yu(e[t])&&e.setAttribute?B1:ih},fg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},z1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},H1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},V1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},G1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},en=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fg,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=G1,this.m=n,this.mt=s,this.tween=i},r}();Qt(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ju[r]=1});hn.TweenMax=hn.TweenLite=yt;hn.TimelineLite=hn.TimelineMax=$t;ct=new $t({sortChildren:!1,defaults:Os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=ig;var zs=[],Da={},W1=[],zd=0,pc=function(e){return(Da[e]||W1).map(function(t){return t()})},tu=function(){var e=Date.now(),t=[];e-zd>2&&(pc("matchMediaInit"),zs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_n.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),pc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),zd=e,pc("matchMedia"))},mg=function(){function r(t,n){this.selector=n&&Jc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ht(n)&&(s=i,i=n,n=ht);var o=this,a=function(){var c=_t,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jc(s)),_t=o,h=i.apply(o,arguments),ht(h)&&o._r.push(h),_t=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ht?a(o):n?o[n]=a:a},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Bs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=zs.indexOf(this);~a&&zs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),X1=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){ri(n)||(n={matches:n});var o=new mg(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_n.matchMedia(n[c]),l&&(zs.indexOf(o)<0&&zs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(tu):l.addEventListener("change",tu)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Wa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return eg(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=bn(e)[0]);var s=Er(e||{}).get,o=n?Hm:zm;return n==="native"&&(n=""),e&&(t?o((ln[t]&&ln[t].get||s)(e,t,n,i)):function(a,l,c){return o((ln[a]&&ln[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=bn(e),e.length>1){var i=e.map(function(u){return nn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ln[t],a=Er(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;fs._pt=0,h.init(e,n?u+n:u,fs,0,[e]),h.render(1,h),fs._pt&&sh(1,fs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=nn.to(e,Or((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cr(e.ease,Os.ease)),Od(Os,e||{})},config:function(e){return Od(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ln[a]&&!hn[a]&&za(t+" effect requires "+a+" plugin.")}),uc[t]=function(a,l,c){return n(bn(a),En(l||{},s),c)},o&&($t.prototype[t]=function(a,l,c){return this.add(uc[t](a,ri(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=Cr(t)},parseEase:function(e,t){return arguments.length?Cr(e,t):qe},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,s;for(n.smoothChildTiming=Jt(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Qn(n,i,i._start-i._delay),i=s;return Qn(ct,n,0),n},context:function(e,t){return e?new mg(e,t):_t},matchMedia:function(e){return new X1(e)},matchMediaRefresh:function(){return zs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tu()},addEventListener:function(e,t){var n=Da[e]||(Da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Da[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:w1,wrapYoyo:T1,distribute:Ym,random:$m,snap:Km,normalize:b1,getUnit:Ft,clamp:v1,splitColor:tg,toArray:bn,selector:Jc,mapRange:Jm,pipe:M1,unitize:S1,interpolate:E1,shuffle:jm},install:Om,effects:uc,ticker:cn,updateRoot:$t.updateRoot,plugins:ln,globalTimeline:ct,core:{PropTween:en,globals:Um,Tween:yt,Timeline:$t,Animation:Bs,getCache:Er,_removeLinkedListItem:cl,reverting:function(){return Bt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return ju=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wa[r]=yt[r]});cn.add($t.updateRoot);fs=Wa.to({},{duration:0});var q1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},j1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=q1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},mc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(At(s)&&(l={},Qt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}j1(a,s)}}}},nn=Wa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mc("roundProps",Qc),mc("modifiers"),mc("snap",Km))||Wa;yt.version=$t.version=nn.version="3.11.5";Nm=1;Ku()&&ks();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hd,Bi,Ms,oh,Mr,Vd,ah,Y1=function(){return typeof window<"u"},bi={},fr=180/Math.PI,Ss=Math.PI/180,ss=Math.atan2,Gd=1e8,lh=/([A-Z])/g,K1=/(left|right|width|margin|padding|x)/i,$1=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Q1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_g=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eE=function(e,t,n){return e.style[t]=n},tE=function(e,t,n){return e.style.setProperty(t,n)},nE=function(e,t,n){return e._gsap[t]=n},iE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ut="transform",zn=ut+"Origin",oE=function r(e,t){var n=this,i=this.target,s=i.style;if(e in bi){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=mi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:mi(i,e);else return ti.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ut)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},xg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ah(),(!s||!s.isStart)&&!n[ut]&&(xg(n),i.uncache=1)}},vg=function(e,t){var n={target:e,props:[],revert:aE,save:oE};return e._gsap||nn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},yg,iu=function(e,t){var n=Bi.createElementNS?Bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bi.createElement(e);return n.style?n:Bi.createElement(e)},ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hs(t)||t,1)||""},Wd="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,n){var i=t||Mr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Wd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Wd[o]:"")+e},ru=function(){Y1()&&window.document&&(Hd=window,Bi=Hd.document,Ms=Bi.documentElement,Mr=iu("div")||{style:{}},iu("div"),ut=Hs(ut),zn=ut+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yg=!!Hs("perspective"),ah=nn.core.reverting,oh=1)},gc=function r(e){var t=iu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Ms.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ms.removeChild(t),this.style.cssText=s,o},Xd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Mg=function(e){var t;try{t=e.getBBox()}catch{t=gc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===gc||(t=gc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Xd(e,["x","cx","x1"])||0,y:+Xd(e,["y","cy","y1"])||0,width:0,height:0}:t},Sg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mg(e))},Fo=function(e,t){if(t){var n=e.style;t in bi&&t!==zn&&(t=ut),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(lh,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,i,s,o){var a=new en(e._pt,t,n,0,1,o?_g:gg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},qd={deg:1,rad:1,turn:1},lE={grid:1,flex:1},$i=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Mr.style,l=K1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;return i===o||!s||qd[i]||qd[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Sg(e),(d||o==="%")&&(bi[t]||~t.indexOf("adius"))?(_=m?e.getBBox()[l?"width":"height"]:e[u],pt(d?s/_*h:s/100*_)):(a[l?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Bi||!g.appendChild)&&(g=Bi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===cn.time&&!p.uncache?pt(s/p.width*h):((d||o==="%")&&!lE[ii(g,"display")]&&(a.position=ii(e,"position")),g===e&&(a.position="static"),g.appendChild(Mr),_=Mr[u],g.removeChild(Mr),a.position="absolute",l&&d&&(p=Er(g),p.time=cn.time,p.width=g[u]),pt(f?_*s/h:_&&s?h/_*s:0))))},mi=function(e,t,n,i){var s;return oh||ru(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(s=Bo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qa(ii(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xa[t]&&Xa[t](e,t,n)||ii(e,t)||km(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$i(e,t,s,n)+n:s},cE=function(e,t,n,i){if(!n||n==="none"){var s=Hs(t,e,1),o=s&&ii(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var a=new en(this._pt,e.style,t,0,1,dg),l=0,c=0,u,h,f,d,_,g,p,m,b,v,x,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ii(e,t)||i,e.style[t]=n),u=[n,i],ig(u),n=u[0],i=u[1],f=n.match(hs)||[],M=i.match(hs)||[],M.length){for(;h=hs.exec(i);)p=h[0],b=i.substring(l,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=ys(d,p)+x),m=parseFloat(p),v=p.substr((m+"").length),l=hs.lastIndex-v.length,v||(v=v||un.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=$i(e,t,g,v)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?_g:gg;return Dm.test(i)&&(a.e=0),this._pt=a,a},jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jd[n]||n,t[1]=jd[i]||i,t.join(" ")},hE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],bi[a]&&(l=1,a=a==="transformOrigin"?zn:ut),Fo(n,a);l&&(Fo(n,ut),o&&(o.svg&&n.removeAttribute("transform"),Bo(n,1),o.uncache=1,xg(i)))}},Xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new en(e._pt,t,n,0,0,hE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ko=[1,0,0,1,0,0],bg={},wg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Yd=function(e){var t=ii(e,ut);return wg(t)?ko:t.substr(7).match(Rm).map(pt)},ch=function(e,t){var n=e._gsap||Er(e),i=e.style,s=Yd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ko:s):(s===ko&&!e.offsetParent&&e!==Ms&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ms.appendChild(e)),s=Yd(e),l?i.display=l:Fo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},su=function(e,t,n,i,s,o){var a=e._gsap,l=s||ch(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],b=l[5],v=t.split(" "),x=parseFloat(v[0])||0,M=parseFloat(v[1])||0,C,L,A,y;n?l!==ko&&(L=d*p-_*g)&&(A=x*(p/L)+M*(-g/L)+(g*b-p*m)/L,y=x*(-_/L)+M*(d/L)-(d*b-_*m)/L,x=A,M=y):(C=Mg(e),x=C.x+(~v[0].indexOf("%")?x/100*C.width:x),M=C.y+(~(v[1]||v[0]).indexOf("%")?M/100*C.height:M)),i||i!==!1&&a.smooth?(m=x-c,b=M-u,a.xOffset=h+(m*d+b*g)-m,a.yOffset=f+(m*_+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(zi(o,a,"xOrigin",c,x),zi(o,a,"yOrigin",u,M),zi(o,a,"xOffset",h,a.xOffset),zi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},Bo=function(e,t){var n=e._gsap||new ag(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ii(e,zn)||"0",u,h,f,d,_,g,p,m,b,v,x,M,C,L,A,y,T,V,W,N,F,z,$,j,H,he,ae,Te,fe,Z,ie,me;return u=h=f=g=p=m=b=v=x=0,d=_=1,n.svg=!!(e.getCTM&&Sg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),L=ch(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),su(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,L)),M=n.xOrigin||0,C=n.yOrigin||0,L!==ko&&(V=L[0],W=L[1],N=L[2],F=L[3],u=z=L[4],h=$=L[5],L.length===6?(d=Math.sqrt(V*V+W*W),_=Math.sqrt(F*F+N*N),g=V||W?ss(W,V)*fr:0,b=N||F?ss(N,F)*fr+g:0,b&&(_*=Math.abs(Math.cos(b*Ss))),n.svg&&(u-=M-(M*V+C*N),h-=C-(M*W+C*F))):(me=L[6],Z=L[7],ae=L[8],Te=L[9],fe=L[10],ie=L[11],u=L[12],h=L[13],f=L[14],A=ss(me,fe),p=A*fr,A&&(y=Math.cos(-A),T=Math.sin(-A),j=z*y+ae*T,H=$*y+Te*T,he=me*y+fe*T,ae=z*-T+ae*y,Te=$*-T+Te*y,fe=me*-T+fe*y,ie=Z*-T+ie*y,z=j,$=H,me=he),A=ss(-N,fe),m=A*fr,A&&(y=Math.cos(-A),T=Math.sin(-A),j=V*y-ae*T,H=W*y-Te*T,he=N*y-fe*T,ie=F*T+ie*y,V=j,W=H,N=he),A=ss(W,V),g=A*fr,A&&(y=Math.cos(A),T=Math.sin(A),j=V*y+W*T,H=z*y+$*T,W=W*y-V*T,$=$*y-z*T,V=j,z=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=pt(Math.sqrt(V*V+W*W+N*N)),_=pt(Math.sqrt($*$+me*me)),A=ss(z,$),b=Math.abs(A)>2e-4?A*fr:0,x=ie?1/(ie<0?-ie:ie):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!wg(ii(e,ut)),j&&e.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=pt(d),n.scaleY=pt(_),n.rotation=pt(g)+a,n.rotationX=pt(p)+a,n.rotationY=pt(m)+a,n.skewX=b+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[zn]=qa(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?dE:yg?Tg:fE,n.uncache=0,n},qa=function(e){return(e=e.split(" "))[0]+" "+e[1]},_c=function(e,t,n){var i=Ft(t);return pt(parseFloat(t)+parseFloat($i(e,"x",n+"px",i)))+i},fE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tg(e,t)},ar="0deg",so="0px",lr=") ",Tg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,v=n.zOrigin,x="",M=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==ar||u!==ar)){var C=parseFloat(u)*Ss,L=Math.sin(C),A=Math.cos(C),y;C=parseFloat(h)*Ss,y=Math.cos(C),o=_c(b,o,L*y*-v),a=_c(b,a,-Math.sin(C)*-v),l=_c(b,l,A*y*-v+v)}p!==so&&(x+="perspective("+p+lr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||o!==so||a!==so||l!==so)&&(x+=l!==so||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+lr),c!==ar&&(x+="rotate("+c+lr),u!==ar&&(x+="rotateY("+u+lr),h!==ar&&(x+="rotateX("+h+lr),(f!==ar||d!==ar)&&(x+="skew("+f+", "+d+lr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+lr),b.style[ut]=x||"translate(0, 0)"},dE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,v=parseFloat(o),x=parseFloat(a),M,C,L,A,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ss,c*=Ss,M=Math.cos(l)*h,C=Math.sin(l)*h,L=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Ss,y=Math.tan(c-u),y=Math.sqrt(1+y*y),L*=y,A*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),M*=y,C*=y)),M=pt(M),C=pt(C),L=pt(L),A=pt(A)):(M=h,A=f,C=L=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=$i(d,"x",o,"px"),x=$i(d,"y",a,"px")),(_||g||p||m)&&(v=pt(v+_-(_*M+g*L)+p),x=pt(x+g-(_*C+g*A)+m)),(i||s)&&(y=d.getBBox(),v=pt(v+i/100*y.width),x=pt(x+s/100*y.height)),y="matrix("+M+","+C+","+L+","+A+","+v+","+x+")",d.setAttribute("transform",y),b&&(d.style[ut]=y)},pE=function(e,t,n,i,s){var o=360,a=At(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Gd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Gd)%o-~~(c/o)*o)),e._pt=f=new en(e._pt,t,n,i,c,Z1),f.e=u,f.u="deg",e._props.push(n),f},Kd=function(e,t){for(var n in t)e[n]=t[n];return e},mE=function(e,t,n){var i=Kd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ut]=t,a=Bo(n,1),Fo(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],o[ut]=t,a=Bo(n,1),o[ut]=c);for(l in bi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ft(c),_=Ft(u),h=d!==_?$i(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new en(e._pt,a,l,h,f-h,nu),e._pt.u=_||0,e._props.push(l));Kd(a,i)};Qt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Xa[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return mi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Eg={name:"css",register:ru,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,b,v,x,M,C,L,A;oh||ru(),this.styles=this.styles||vg(e),A=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ln[g]&&lg(g,t,n,i,e,s)))){if(d=typeof u,_=Xa[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Oo(u)),_)_(this,e,g,u,n)&&(L=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",qi.lastIndex=0,qi.test(c)||(p=Ft(c),m=Ft(u)),m?p!==m&&(c=$i(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),A.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],At(c)&&~c.indexOf("random(")&&(c=Oo(c)),Ft(c+"")||(c+=un.units[g]||Ft(mi(e,g))||""),(c+"").charAt(1)==="="&&(c=mi(e,g))):c=mi(e,g),f=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in ti&&(g==="autoAlpha"&&(f===1&&mi(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,a.visibility),zi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ti[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in bi,v){if(this.styles.save(g),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||Bo(e,t.parseTransform),C=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new en(this._pt,a,ut,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new en(this._pt,M,"scaleY",M.scaleY,(b?ys(M.scaleY,b+h):h)-M.scaleY||0,nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(zn,0,a[zn]),u=uE(u),M.svg?su(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&zi(this,M,"zOrigin",M.zOrigin,m),zi(this,a,g,qa(c),qa(u)));continue}else if(g==="svgOrigin"){su(e,u,1,C,0,this);continue}else if(g in bg){pE(this,M,g,f,b?ys(f,b+u):u);continue}else if(g==="smoothOrigin"){zi(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){mE(this,u,e);continue}}else g in a||(g=Hs(g)||g);if(v||(h||h===0)&&(f||f===0)&&!$1.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Ft(u)||(g in un.units?un.units[g]:p),p!==m&&(f=$i(e,g,c,m)),this._pt=new en(this._pt,v?M:a,g,f,(b?ys(f,b+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Q1:nu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=J1);else if(g in a)cE.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Zu(g,u);continue}v||(g in a?A.push(g,0,a[g]):A.push(g,1,c||e[g])),o.push(g)}}L&&pg(this)},render:function(e,t){if(t.tween._time||!ah())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mi,aliases:ti,getSetter:function(e,t,n){var i=ti[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==zn&&(e._gsap.x||mi(e,"x"))?n&&Vd===n?t==="scale"?iE:nE:(Vd=n||{})&&(t==="scale"?rE:sE):e.style&&!Yu(e.style[t])?eE:~t.indexOf("-")?tE:rh(e,t)},core:{_removeProperty:Fo,_getMatrix:ch}};nn.utils.checkPrefix=Hs;nn.core.getStyleSaver=vg;(function(r,e,t,n){var i=Qt(r+","+e+","+t,function(s){bi[s]=1});Qt(e,function(s){un.units[s]="deg",bg[s]=1}),ti[i[13]]=r+","+e,Qt(n,function(s){var o=s.split(":");ti[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){un.units[r]="px"});nn.registerPlugin(Eg);var Hi=nn.registerPlugin(Eg)||nn;Hi.core.Tween;function gE(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}const Ot=new gE;let jn,So=[],os,_r,as;const ho=new bT,Ag=new t1;Ag.setDecoderPath("./draco/");ho.setDRACOLoader(Ag);const _E=new xm([new I(-16.65001678466797,.14946502447128296,206.70933532714844),new I(34,.14946502447128296,206.70933532714844),new I(84.65001678466797,.14946502447128296,206.70933532714844),new I(134.65001678466797,.14946502447128296,206.70933532714844),new I(134.65001678466797,.14946502447128296,156.70933532714844),new I(134.65001678466797,.14946502447128296,106.70933532714844),new I(84.65001678466797,.14946502447128296,106.70933532714844),new I(34,.14946502447128296,.14946502447128296,106.70933532714844),new I(-16.65001678466797,.14946502447128296,106.70933532714844),new I(-66.65001678466797,.14946502447128296,106.70933532714844),new I(-116.65001678466797,.14946502447128296,106.70933532714844),new I(-116.65001678466797,.14946502447128296,156.70933532714844),new I(-116.65001678466797,.14946502447128296,206.70933532714844),new I(-66.65001678466797,.14946502447128296,206.70933532714844),new I(-16.65001678466797,.14946502447128296,206.70933532714844)],!0),xE=new xm([new I(-116.65001678466797,50.14946502447128,206.70933532714844),new I(-116.65001678466797,50.14946502447128,156.70933532714844),new I(-116.65001678466797,50.14946502447128,106.70933532714844),new I(-116.65001678466797,50.14946502447128,56.70933532714844),new I(-116.65001678466797,50.14946502447128,6.70933532714844),new I(-116.65001678466797,50.14946502447128,-6.70933532714844),new I(-116.65001678466797,50.14946502447128,-56.70933532714844),new I(-116.65001678466797,50.14946502447128,-106.70933532714844),new I(-116.65001678466797,50.14946502447128,-156.70933532714844),new I(-116.65001678466797,150.14946502447128,-156.70933532714844),new I(-116.65001678466797,150.14946502447128,-106.70933532714844),new I(-116.65001678466797,150.14946502447128,-56.70933532714844),new I(-116.65001678466797,150.14946502447128,-6.70933532714844),new I(-116.65001678466797,150.14946502447128,6.70933532714844),new I(-116.65001678466797,150.14946502447128,56.70933532714844),new I(-116.65001678466797,150.14946502447128,106.70933532714844),new I(-116.65001678466797,150.14946502447128,156.70933532714844),new I(-116.65001678466797,150.14946502447128,206.70933532714844)],!0);function vE(){let r=["小型会议室","核心科技室","科技展台","设计总监办公室"];ho.load("./model/floor2.glb",l=>{jn=l.scene,console.log("floor2Group",jn),l.scene.traverse(c=>{if(c.isMesh&&(c.material.emissiveIntensity=15),c.isObject3D&&r.indexOf(c.name)!=-1){const u=yE(c);u.visible=!1,So.push(u),jn.add(u)}}),jn.visible=!1,ei.add(l.scene)}),ho.load("./model/floor1.glb",l=>{os=l.scene,console.log("floor1Group",os),l.scene.traverse(function(c){c.isMesh&&(c.material.emissiveIntensity=5),c.name=="静止工人001"&&(console.log("已找到曲线运动对象"),$d(c,_E))}),os.visible=!1,ei.add(os)}),ho.load("./model/wall.glb",l=>{as=l.scene,as.visible=!1,ei.add(l.scene)}),ho.load("./model/Fighter.glb",l=>{_r=l.scene,console.log("fighterGroup",_r),_r.position.set(3,42,68),_r.traverse(c=>{c.isMesh&&(c.material.emissiveIntensity=15,c.position2=c.position.clone())}),ei.add(l.scene),ME(_r)});function e(){os.visible=!0}function t(){os.visible=!1}function n(){jn.visible=!0,So.forEach(l=>{l.visible=!0})}function i(){jn.visible=!1,So.forEach(l=>{l.visible=!1})}function s(){as.visible=!1}function o(){as.visible=!0}function a(){Ot.on("showFloor1",()=>{e(),s(),i()}),Ot.on("showFloor2",()=>{n(),s(),t()}),Ot.on("showWall",()=>{o(),t(),i()}),Ot.on("showAll",()=>{e(),n(),o(),Hi.to(as.position,{y:200,duration:1}),Hi.to(jn.position,{y:50,duration:1,delay:1})}),Ot.on("hideAll",()=>{console.log("hideall"),Hi.to(as.position,{y:0,duration:1,delay:1,onComplete:()=>{t(),i()}}),Hi.to(jn.position,{y:0,duration:1})}),Ot.on("flatFighter",SE),Ot.on("recoverFighter",bE),Ot.on("wander",()=>{$d(Vn,xE)})}a()}function yE(r){const e=document.createElement("div");e.className="elementTag",e.innerHTML=`
      <div class="elementContent">
        <h3>${r.name}</h3>
        <p>温度：26℃</p>
        <p>湿度：50%</p>
      </div>
    `;const t=new xT(e);return t.position.copy(r.position),t.scale.set(.2,.2,.2),t}function ME(r){const e=new Ne,t=new dT;window.addEventListener("click",n=>{e.x=n.clientX/window.innerWidth*2-1,e.y=-(n.clientY/window.innerHeight*2-1),t.setFromCamera(e,Vn),t.intersectObject(r).length>0&&(console.log("点击了战斗机"),r.visible?(jn.visible=!1,So.forEach(s=>{s.visible=!1})):(jn.visible=!0,So.forEach(s=>{s.visible=!0})))})}function SE(){const r=[];for(var e=0;e<5;e++)for(var t=0;t<5;t++)r.push(new I(e*2-2,t*2-2,0));let n=0;_r.traverse(i=>{i.isMesh&&(r[n].multiplyScalar(10),Hi.to(i.position,{x:"+="+r[n].x,y:"+="+r[n].y,z:"+="+r[n].z,duration:1}),n++)})}function bE(){_r.traverse(r=>{r.isMesh&&Hi.to(r.position,{x:r.position2.x,y:r.position2.y,z:r.position2.z,duration:1})})}function $d(r,e){Hi.to(r,{curveProgress:.999,duration:10,repeat:-1,onUpdate:()=>{const t=e.getPoint(r.curveProgress);if(r.position.set(t.x,t.y,t.z),r.curveProgress+.001<1){const n=e.getPoint(r.curveProgress+.001);r.lookAt(n)}}})}function wE(){vE()}function Cg(){wm.update(),Tm.update(),requestAnimationFrame(Cg),Tr.renderer.render(ei,Vn),Tr.css3drender.render(ei,Vn)}const TE={__name:"Scene",setup(r){let e=E_(null);return ei.add(Vn),ei.add(ST),wE(),bu(()=>{e.value.appendChild(Tr.renderer.domElement),Cg()}),(t,n)=>(Eu(),Au("div",{class:"scene",ref_key:"sceneDiv",ref:e},null,512))}};const EE=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Ji=r=>(z_("data-v-a4b0676e"),r=r(),H_(),r),AE={id:"bigScreen"},CE=Ji(()=>nt("div",{class:"header"},"智慧办公系统平台",-1)),PE={class:"main"},LE={class:"left"},RE=Ji(()=>nt("h3",null,[nt("span",null," 厂房外形展示 ")],-1)),DE=[RE],IE=Ji(()=>nt("h3",null,[nt("span",null," 厂房分层展开 ")],-1)),NE=[IE],OE=Ji(()=>nt("h3",null,[nt("span",null," 展示第一层楼 ")],-1)),UE=[OE],FE=Ji(()=>nt("h3",null,[nt("span",null," 展示第二层楼 ")],-1)),kE=[FE],BE={class:"right"},zE=Ji(()=>nt("h3",null,[nt("span",null," 展开飞机 ")],-1)),HE=[zE],VE=Ji(()=>nt("h3",null,[nt("span",null," 恢复飞机 ")],-1)),GE=[VE],WE=Ji(()=>nt("h3",null,[nt("span",null," 场景漫游 ")],-1)),XE=[WE],qE={__name:"DigitalScreen",setup(r){const e=()=>{console.log("showWall"),Ot.emit("showWall")},t=()=>{console.log("showWall"),Ot.emit("showFloor1")},n=()=>{console.log("showFloor2"),Ot.emit("showFloor2")};let i=!1;const s=()=>{i?(console.log("hideAll"),Ot.emit("hideAll"),i=!1):(console.log("showAll"),Ot.emit("showAll"),i=!0)},o=()=>{console.log("flatFighter"),Ot.emit("flatFighter")},a=()=>{console.log("recoverFighter"),Ot.emit("recoverFighter")},l=()=>{console.log("wander"),Ot.emit("wander")};return(c,u)=>(Eu(),Au("div",AE,[CE,nt("div",PE,[nt("div",LE,[nt("div",{class:"cityEvent",onClick:u[0]||(u[0]=h=>e())},DE),nt("div",{class:"cityEvent",onClick:u[1]||(u[1]=h=>s())},NE),nt("div",{class:"cityEvent",onClick:u[2]||(u[2]=h=>t())},UE),nt("div",{class:"cityEvent",onClick:u[3]||(u[3]=h=>n())},kE)]),nt("div",BE,[nt("div",{class:"cityEvent",onClick:u[4]||(u[4]=h=>o())},HE),nt("div",{class:"cityEvent",onClick:u[5]||(u[5]=h=>a())},GE),nt("div",{class:"cityEvent",onClick:u[6]||(u[6]=h=>l())},XE)])])]))}},jE=EE(qE,[["__scopeId","data-v-a4b0676e"]]);const YE={__name:"App",setup(r){return(e,t)=>(Eu(),Au("div",null,[xi(TE),xi(jE)]))}};px(YE).mount("#app");
