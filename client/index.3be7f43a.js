import{S as s,i as t,s as e,c as o,a as n,e as l,b as c,d as r,f as a,g as i,h as u,j as $,k as f,l as d,t as h,m as p,n as m,o as g,p as v,q as x,r as y,u as E,v as H,w as b,x as j,y as w,z,A as G,B as D}from"./client.93259d01.js";function I(s){var t,e,o="";if(s)if("object"==typeof s)if(Array.isArray(s))for(t=0;t<s.length;t++)s[t]&&(e=I(s[t]))&&(o&&(o+=" "),o+=e);else for(t in s)s[t]&&(e=I(t))&&(o&&(o+=" "),o+=e);else"boolean"==typeof s||s.call||(o&&(o+=" "),o+=s);return o}function V(){for(var s,t=0,e="";t<arguments.length;)(s=I(arguments[t++]))&&(e&&(e+=" "),e+=s);return e}function k(s,t,e){return!0===e||""===e?s?"col":`col-${t}`:"auto"===e?s?"col-auto":`col-${t}-auto`:s?`col-${e}`:`col-${t}-${e}`}function O(s){const t={};for(const e of Object.keys(s))"children"!==e&&"$$scope"!==e&&"$$slots"!==e&&(t[e]=s[e]);return t}function S(s){let t,e;const m=s[7].default,g=o(m,s,s[6],null);let v=[s[1],{id:s[0]},{class:s[2].join(" ")}],x={};for(let s=0;s<v.length;s+=1)x=n(x,v[s]);return{c(){t=l("div"),g&&g.c(),this.h()},l(s){t=c(s,"DIV",{id:!0,class:!0});var e=r(t);g&&g.l(e),e.forEach(a),this.h()},h(){i(t,x)},m(s,o){u(s,t,o),g&&g.m(t,null),e=!0},p(s,[e]){g&&g.p&&64&e&&g.p($(m,s,s[6],null),f(m,s[6],e,null)),i(t,d(v,[2&e&&s[1],1&e&&{id:s[0]},4&e&&{class:s[2].join(" ")}]))},i(s){e||(h(g,s),e=!0)},o(s){p(g,s),e=!1},d(s){s&&a(t),g&&g.d(s)}}}function A(s,t,e){let{class:o=""}=t,{id:l=""}=t;const c=O(t),r=[],a=["xs","sm","md","lg","xl"];a.forEach(s=>{const e=t[s];if(!e&&""!==e)return;const o="xs"===s;if(function(s){const t=typeof s;return null!=s&&("object"==t||"function"==t)}(e)){const t=o?"-":`-${s}-`,n=k(o,s,e.size);(e.size||""===e.size)&&r.push(n),e.push&&r.push(`push${t}${e.push}`),e.pull&&r.push(`pull${t}${e.pull}`),e.offset&&r.push(`offset${t}${e.offset}`)}else r.push(k(o,s,e))}),r.length||r.push("col"),o&&r.push(o);let{$$slots:i={},$$scope:u}=t;return s.$set=s=>{e(5,t=n(n({},t),m(s))),"class"in s&&e(3,o=s.class),"id"in s&&e(0,l=s.id),"$$scope"in s&&e(6,u=s.$$scope)},t=m(t),[l,c,r,o,a,t,u,i]}class P extends s{constructor(s){super(),t(this,s,A,S,e,{class:3,id:0})}}function B(s){let t,e;const m=s[7].default,g=o(m,s,s[6],null);let v=[s[2],{id:s[0]},{class:s[1]}],x={};for(let s=0;s<v.length;s+=1)x=n(x,v[s]);return{c(){t=l("div"),g&&g.c(),this.h()},l(s){t=c(s,"DIV",{id:!0,class:!0});var e=r(t);g&&g.l(e),e.forEach(a),this.h()},h(){i(t,x)},m(s,o){u(s,t,o),g&&g.m(t,null),e=!0},p(s,[e]){g&&g.p&&64&e&&g.p($(m,s,s[6],null),f(m,s[6],e,null)),i(t,d(v,[4&e&&s[2],1&e&&{id:s[0]},2&e&&{class:s[1]}]))},i(s){e||(h(g,s),e=!0)},o(s){p(g,s),e=!1},d(s){s&&a(t),g&&g.d(s)}}}function F(s,t,e){let{class:o=""}=t,{fluid:l=!1}=t,{id:c=""}=t;const r=O(t);let a,{$$slots:i={},$$scope:u}=t;return s.$set=s=>{e(5,t=n(n({},t),m(s))),"class"in s&&e(3,o=s.class),"fluid"in s&&e(4,l=s.fluid),"id"in s&&e(0,c=s.id),"$$scope"in s&&e(6,u=s.$$scope)},s.$$.update=()=>{24&s.$$.dirty&&e(1,a=V(o,l?"container-fluid":"container"))},t=m(t),[c,a,r,o,l,t,u,i]}class W extends s{constructor(s){super(),t(this,s,F,B,e,{class:3,fluid:4,id:0})}}function q(s){let t,e;const m=s[8].default,g=o(m,s,s[7],null);let v=[s[2],{id:s[0]},{class:s[1]}],x={};for(let s=0;s<v.length;s+=1)x=n(x,v[s]);return{c(){t=l("div"),g&&g.c(),this.h()},l(s){t=c(s,"DIV",{id:!0,class:!0});var e=r(t);g&&g.l(e),e.forEach(a),this.h()},h(){i(t,x)},m(s,o){u(s,t,o),g&&g.m(t,null),e=!0},p(s,[e]){g&&g.p&&128&e&&g.p($(m,s,s[7],null),f(m,s[7],e,null)),i(t,d(v,[4&e&&s[2],1&e&&{id:s[0]},2&e&&{class:s[1]}]))},i(s){e||(h(g,s),e=!0)},o(s){p(g,s),e=!1},d(s){s&&a(t),g&&g.d(s)}}}function N(s,t,e){let{class:o=""}=t,{noGutters:l=!1}=t,{form:c=!1}=t,{id:r=""}=t;const a=O(t);let i,{$$slots:u={},$$scope:$}=t;return s.$set=s=>{e(6,t=n(n({},t),m(s))),"class"in s&&e(3,o=s.class),"noGutters"in s&&e(4,l=s.noGutters),"form"in s&&e(5,c=s.form),"id"in s&&e(0,r=s.id),"$$scope"in s&&e(7,$=s.$$scope)},s.$$.update=()=>{56&s.$$.dirty&&e(1,i=V(o,l?"no-gutters":null,c?"form-row":"row"))},t=m(t),[r,i,a,o,l,c,t,$,u]}class R extends s{constructor(s){super(),t(this,s,N,q,e,{class:3,noGutters:4,form:5,id:0})}}function T(s){let t,e;return{c(){t=l("h1"),e=g("Hola como estas?"),this.h()},l(s){t=c(s,"H1",{class:!0});var o=r(t);e=v(o,"Hola como estas?"),o.forEach(a),this.h()},h(){x(t,"class","hola svelte-1p2vza1")},m(s,o){u(s,t,o),y(t,e)},p:E,i:E,o:E,d(s){s&&a(t)}}}function C(s){return console.log("Holas"),[]}class J extends s{constructor(s){super(),t(this,s,C,T,e,{})}}function K(s){let t,e,o,n,i,$,f,d,m,E,j;const I=new J({});return{c(){t=l("h1"),e=g("Hi, I’m Gonzalo P. Vargas"),o=H(),n=l("h3"),i=g("Full-Stack Web Developer"),$=H(),f=l("p"),d=l("strong"),m=g("Open your ... mind, soul and source."),E=H(),b(I.$$.fragment),this.h()},l(s){t=c(s,"H1",{});var l=r(t);e=v(l,"Hi, I’m Gonzalo P. Vargas"),l.forEach(a),o=w(s),n=c(s,"H3",{class:!0});var u=r(n);i=v(u,"Full-Stack Web Developer"),u.forEach(a),$=w(s),f=c(s,"P",{});var h=r(f);d=c(h,"STRONG",{});var p=r(d);m=v(p,"Open your ... mind, soul and source."),p.forEach(a),h.forEach(a),E=w(s),z(I.$$.fragment,s),this.h()},h(){x(n,"class","text-center")},m(s,l){u(s,t,l),y(t,e),u(s,o,l),u(s,n,l),y(n,i),u(s,$,l),u(s,f,l),y(f,d),y(d,m),u(s,E,l),G(I,s,l),j=!0},i(s){j||(h(I.$$.fragment,s),j=!0)},o(s){p(I.$$.fragment,s),j=!1},d(s){s&&a(t),s&&a(o),s&&a(n),s&&a($),s&&a(f),s&&a(E),D(I,s)}}}function L(s){let t;const e=new P({props:{cols:"12",$$slots:{default:[K]},$$scope:{ctx:s}}});return{c(){b(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,o){G(e,s,o),t=!0},p(s,t){const o={};1&t&&(o.$$scope={dirty:t,ctx:s}),e.$set(o)},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function M(s){let t;const e=new R({props:{$$slots:{default:[L]},$$scope:{ctx:s}}});return{c(){b(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,o){G(e,s,o),t=!0},p(s,t){const o={};1&t&&(o.$$scope={dirty:t,ctx:s}),e.$set(o)},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function Q(s){let t,e;const o=new W({props:{$$slots:{default:[M]},$$scope:{ctx:s}}});return{c(){t=H(),b(o.$$.fragment),this.h()},l(s){j('[data-svelte="svelte-8519tr"]',document.head).forEach(a),t=w(s),z(o.$$.fragment,s),this.h()},h(){document.title="Bahlum"},m(s,n){u(s,t,n),G(o,s,n),e=!0},p(s,[t]){const e={};1&t&&(e.$$scope={dirty:t,ctx:s}),o.$set(e)},i(s){e||(h(o.$$.fragment,s),e=!0)},o(s){p(o.$$.fragment,s),e=!1},d(s){s&&a(t),D(o,s)}}}export default class extends s{constructor(s){super(),t(this,s,null,Q,e,{})}}
