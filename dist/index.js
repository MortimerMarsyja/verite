var p=function(){if(!(P>1)){var a,e=!1;while(T!==void 0){var n=T;T=void 0,l++;while(n!==void 0){var s=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&d(n))try{n.c()}catch(y){if(!e)a=y,e=!0}n=s}}if(l=0,P--,e)throw a}else P--};var f=function(a){if(Y!==void 0){var e=a.n;if(e===void 0||e.t!==Y){if(e={i:0,S:a,p:Y.s,n:void 0,t:Y,e:void 0,x:void 0,r:e},Y.s!==void 0)Y.s.n=e;if(Y.s=e,a.n=e,32&Y.f)a.S(e);return e}else if(e.i===-1){if(e.i=0,e.n!==void 0){if(e.n.p=e.p,e.p!==void 0)e.p.n=e.n;e.p=Y.s,e.n=void 0,Y.s.n=e,Y.s=e}return e}}},E=function(a){this.v=a,this.i=0,this.n=void 0,this.t=void 0},S=function(a){return new E(a)},d=function(a){for(var e=a.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1},q=function(a){for(var e=a.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0)e.r=n;if(e.S.n=e,e.i=-1,e.n===void 0){a.s=e;break}}},k=function(a){var e=a.s,n=void 0;while(e!==void 0){var s=e.p;if(e.i===-1){if(e.S.U(e),s!==void 0)s.n=e.n;if(e.n!==void 0)e.n.p=s}else n=e;if(e.S.n=e.r,e.r!==void 0)e.r=void 0;e=s}a.s=n},c=function(a){E.call(this,void 0),this.x=a,this.s=void 0,this.g=g-1,this.f=4};var B=function(a){var e=a.u;if(a.u=void 0,typeof e=="function"){P++;var n=Y;Y=void 0;try{e()}catch(s){throw a.f&=-2,a.f|=8,o(a),s}finally{Y=n,p()}}},o=function(a){for(var e=a.s;e!==void 0;e=e.n)e.S.U(e);a.x=void 0,a.s=void 0,B(a)},r=function(a){if(Y!==this)throw new Error("Out-of-order effect");if(k(this),Y=a,this.f&=-2,8&this.f)o(this);p()},u=function(a){this.x=a,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32},m=function(a){var e=new u(a);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)},C=Symbol.for("preact-signals"),Y=void 0,T=void 0,P=0,l=0,g=0;E.prototype.brand=C;E.prototype.h=function(){return!0};E.prototype.S=function(a){if(this.t!==a&&a.e===void 0){if(a.x=this.t,this.t!==void 0)this.t.e=a;this.t=a}};E.prototype.U=function(a){if(this.t!==void 0){var{e,x:n}=a;if(e!==void 0)e.x=n,a.e=void 0;if(n!==void 0)n.e=e,a.x=void 0;if(a===this.t)this.t=n}};E.prototype.subscribe=function(a){var e=this;return m(function(){var n=e.value,s=Y;Y=void 0;try{a(n)}finally{Y=s}})};E.prototype.valueOf=function(){return this.value};E.prototype.toString=function(){return this.value+""};E.prototype.toJSON=function(){return this.value};E.prototype.peek=function(){var a=Y;Y=void 0;try{return this.value}finally{Y=a}};Object.defineProperty(E.prototype,"value",{get:function(){var a=f(this);if(a!==void 0)a.i=this.i;return this.v},set:function(a){if(a!==this.v){if(l>100)throw new Error("Cycle detected");this.v=a,this.i++,g++,P++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{p()}}}});(c.prototype=new E).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32)return!0;if(this.f&=-5,this.g===g)return!0;if(this.g=g,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;var a=Y;try{q(this),Y=this;var e=this.x();if(16&this.f||this.v!==e||this.i===0)this.v=e,this.f&=-17,this.i++}catch(n){this.v=n,this.f|=16,this.i++}return Y=a,k(this),this.f&=-2,!0};c.prototype.S=function(a){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}E.prototype.S.call(this,a)};c.prototype.U=function(a){if(this.t!==void 0){if(E.prototype.U.call(this,a),this.t===void 0){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var a=this.t;a!==void 0;a=a.x)a.t.N()}};Object.defineProperty(c.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var a=f(this);if(this.h(),a!==void 0)a.i=this.i;if(16&this.f)throw this.v;return this.v}});u.prototype.c=function(){var a=this.S();try{if(8&this.f)return;if(this.x===void 0)return;var e=this.x();if(typeof e=="function")this.u=e}finally{a()}};u.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,B(this),q(this),P++;var a=Y;return Y=this,r.bind(this,a)};u.prototype.N=function(){if(!(2&this.f))this.f|=2,this.o=T,T=this};u.prototype.d=function(){if(this.f|=8,!(1&this.f))o(this)};class x{signalsBoutique={};createSignal(a,e){return this.signalsBoutique[a]=S(e)}updateSignal(a,e){this.signalsBoutique[a].value=e}}class K{static instance;coreManager;constructor(a){if(K.instance)throw new Error("BoutiqueCoreAccessor is a singleton class");K.instance=this,this.coreManager=new x;for(let e in a)this.coreManager.createSignal(e,a[e])}get boutique(){return this.coreManager.signalsBoutique}updateSignal(a,e){this.coreManager.updateSignal(a,e)}}function M(a){const e=new K(a);return{updateSignal:(n,s)=>e.updateSignal(n,s),boutique:e.boutique}}var I=M;export{I as default,M as createBoutique};
