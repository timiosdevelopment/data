(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/CYB":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("e1JD"),r=e("khYc"),u=e("reND");class o{constructor(n){this.accessor=n}static forRoot(){return{ngModule:o,providers:[u.a,{provide:l.c,useClass:r.a,multi:!0}]}}}},0:function(n,t,e){n.exports=e("Ea2l")},"7jfm":function(n,t,e){"use strict";function l(n){return JSON.parse(JSON.stringify(n))}function r(n){return"undefined"!==n&&null!=n}e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return r}))},BfEW:function(n,t,e){"use strict";e.d(t,"c",(function(){return l})),e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return u}));const l="NGXS_DATA_META";var r=function(n){return n.NGXS_PERSISTENCE_STATE="@Persistence should be add before decorator @State and @StateRepository",n.NGXS_DATA_STATE="@StateRepository should be add before decorator @State",n.NGXS_DATA_MODULE_EXCEPTION="Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!",n.NGXS_DATA_STATE_DECORATOR="You forgot add decorator @StateRepository or initialize state!\n Example: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])",n.NGXS_DATA_STATIC_ACTION="Cannot support static methods with @action",n.NGXS_DATA_ACTION="@action can only decorate a method implementation",n.NGXS_DATA_ACTION_RETURN_TYPE="RECOMMENDATION: If you use asynchronous actions `@action({ async: true })`, the return result type should only be Observable or void instead",n.NGXS_PERSISTENCE_ENGINE="Not declare storage engine in `existingEngine` or not found after injecting by `useClass`",n.NGXS_PERSISTENCE_SERIALIZE="Error occurred while serializing the store value, value not updated.",n.NGXS_PERSISTENCE_DESERIALIZE="Error occurred while deserializing the store value, falling back to empty object.",n}({});const u="NEED_SYNC_WITH_STORAGE"},Ea2l:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");const r=()=>Promise.all([e.e(1),e.e(7)]).then(e.bind(null,"pwzt")).then(n=>n.FirstModuleNgFactory),u=()=>Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"UYAy")).then(n=>n.SecondModuleNgFactory);class o{}var a=e("e1JD");class s{constructor(n){this.store=n,this.snapshot=this.store.select(n=>n)}}var i=e("pMnS"),c=e("iInd"),b=e("SVse"),d=l.pb({encapsulation:0,styles:[[".panel[_ngcontent-%COMP%]{background:#fff;overflow:auto;padding:20px;border-left:1px solid rgba(0,0,0,.2);font-size:12px}.link[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function A(n){return l.Ib(0,[(n()(),l.Gb(-1,null,["Examples:\n"])),(n()(),l.rb(1,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f680} "])),(n()(),l.rb(3,0,null,null,1,"a",[["class","link"],["href","https://stackblitz.io/github/ngxs-labs/data"],["target","_blank"]],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Stackblitz"])),(n()(),l.rb(5,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f3c0} "])),(n()(),l.rb(7,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(8,671744,null,0,c.l,[c.k,c.a,b.i],{routerLink:[0,"routerLink"]},null),l.Cb(9,1),(n()(),l.Gb(-1,null,["CountState"])),(n()(),l.rb(11,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f9ed} "])),(n()(),l.rb(13,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(14,671744,null,0,c.l,[c.k,c.a,b.i],{routerLink:[0,"routerLink"]},null),l.Cb(15,1),(n()(),l.Gb(-1,null,["TodoState"])),(n()(),l.rb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.rb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.rb(19,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.rb(20,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(21,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.qb(22,212992,null,0,c.n,[c.b,l.N,l.k,[8,null],l.i],null,null),(n()(),l.rb(23,0,null,null,6,"div",[["class","panel"]],null,null,null,null,null)),(n()(),l.rb(24,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Store:"])),(n()(),l.rb(26,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),l.Gb(27,null,["",""])),l.Db(131072,b.b,[l.i]),l.Db(0,b.f,[])],(function(n,t){var e=n(t,9,0,"first");n(t,8,0,e);var l=n(t,15,0,"second");n(t,14,0,l),n(t,22,0)}),(function(n,t){var e=t.component;n(t,7,0,l.Bb(t,8).target,l.Bb(t,8).href),n(t,13,0,l.Bb(t,14).target,l.Bb(t,14).href),n(t,27,0,l.Hb(t,27,0,l.Bb(t,29).transform(l.Hb(t,27,0,l.Bb(t,28).transform(e.snapshot)))))}))}function f(n){return l.Ib(0,[(n()(),l.rb(0,0,null,null,1,"app-root",[],null,null,null,A,d)),l.qb(1,49152,null,0,s,[a.i],null,null)],null,null)}var h=l.nb("app-root",s,f,{},{},[]),p=e("cUpR"),g=e("s7LF"),E=e("Mrqg"),y=e("ZArt"),S=e("khYc"),N=e("reND"),_=e("/CYB"),k=l.ob(o,[s],(function(n){return l.zb([l.Ab(512,l.k,l.Z,[[8,[i.a,h]],[3,l.k],l.w]),l.Ab(5120,l.t,l.lb,[[3,l.t]]),l.Ab(4608,b.l,b.k,[l.t,[2,b.r]]),l.Ab(5120,l.hb,l.mb,[l.y]),l.Ab(5120,l.c,l.ib,[]),l.Ab(5120,l.r,l.jb,[]),l.Ab(5120,l.s,l.kb,[]),l.Ab(4608,p.b,p.k,[b.d]),l.Ab(6144,l.F,null,[p.b]),l.Ab(4608,p.e,p.g,[]),l.Ab(5120,p.c,(function(n,t,e,l,r,u,o,a){return[new p.i(n,t,e),new p.n(l),new p.m(r,u,o,a)]}),[b.d,l.y,l.A,b.d,b.d,p.e,l.ab,[2,p.f]]),l.Ab(4608,p.d,p.d,[p.c,l.y]),l.Ab(135680,p.l,p.l,[b.d]),l.Ab(4608,p.j,p.j,[p.d,p.l,l.c]),l.Ab(6144,l.D,null,[p.j]),l.Ab(6144,p.o,null,[p.l]),l.Ab(4608,l.L,l.L,[l.y]),l.Ab(4608,g.i,g.i,[]),l.Ab(5120,c.a,c.x,[c.k]),l.Ab(4608,c.d,c.d,[]),l.Ab(6144,c.f,null,[c.d]),l.Ab(135680,c.o,c.o,[c.k,l.v,l.j,l.q,c.f]),l.Ab(4608,c.e,c.e,[]),l.Ab(5120,c.C,c.t,[c.k,b.o,c.g]),l.Ab(5120,c.h,c.A,[c.y]),l.Ab(5120,l.b,(function(n,t){return[n,a.d.appBootstrapListenerFactory(t)]}),[c.h,E.e]),l.Ab(4608,a.a,a.a,[a.p,a.D]),l.Ab(1073742336,b.c,b.c,[]),l.Ab(1024,l.m,p.p,[]),l.Ab(1024,l.x,(function(){return[c.s()]}),[]),l.Ab(512,c.y,c.y,[l.q]),l.Ab(1024,l.d,(function(n,t){return[p.q(n),c.z(t)]}),[[2,l.x],c.y]),l.Ab(512,l.e,l.e,[[2,l.d]]),l.Ab(131584,l.g,l.g,[l.y,l.ab,l.q,l.m,l.k,l.e]),l.Ab(1073742336,l.f,l.f,[l.g]),l.Ab(1073742336,p.a,p.a,[[3,p.a]]),l.Ab(1073742336,g.h,g.h,[]),l.Ab(1073742336,g.c,g.c,[]),l.Ab(1024,c.r,c.v,[[3,c.k]]),l.Ab(512,c.q,c.c,[]),l.Ab(512,c.b,c.b,[]),l.Ab(256,c.g,{useHash:!0},[]),l.Ab(1024,b.i,c.u,[b.n,[2,b.a],c.g]),l.Ab(512,b.h,b.h,[b.i,b.n]),l.Ab(512,l.j,l.j,[]),l.Ab(512,l.v,l.I,[l.j,[2,l.J]]),l.Ab(1024,c.i,(function(){return[[{path:"",redirectTo:"first",pathMatch:"full"},{path:"first",loadChildren:r},{path:"second",loadChildren:u}]]}),[]),l.Ab(1024,c.k,c.w,[l.g,c.q,c.b,b.h,l.q,l.v,l.j,c.i,c.g,[2,c.p],[2,c.j]]),l.Ab(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),l.Ab(256,a.d.ROOT_OPTIONS,{developmentMode:!1},[]),l.Ab(1024,a.u,a.d.ngxsConfigFactory,[a.d.ROOT_OPTIONS]),l.Ab(512,a.p,a.p,[]),l.Ab(512,a.y,a.y,[]),l.Ab(512,a.g,a.g,[]),l.Ab(256,y.d,void 0,[]),l.Ab(1024,y.a,y.e,[y.d]),l.Ab(1024,a.c,(function(n,t,e,l){return[new y.b(n,t),new S.a(e,l)]}),[y.a,l.q,l.A,l.q]),l.Ab(512,a.C,a.C,[[3,a.C],[2,a.c]]),l.Ab(512,a.v,a.J,[l.y,l.A]),l.Ab(512,a.D,a.D,[a.v]),l.Ab(512,a.z,a.z,[l.m,a.p,a.y,a.C,a.g,a.D]),l.Ab(256,a.t,l.V,[]),l.Ab(256,a.s,E.f,[]),l.Ab(512,a.F,a.F,[a.t,a.s]),l.Ab(512,a.E,a.E,[a.F,a.u]),l.Ab(512,a.B,a.B,[a.g,a.z,a.u,a.E]),l.Ab(512,a.A,a.A,[a.B]),l.Ab(1024,E.a,a.d.getInitialState,[]),l.Ab(512,a.x,a.x,[l.q,a.u,[3,a.x],a.p,a.y,a.A,[2,E.a]]),l.Ab(512,a.i,a.i,[a.g,a.B,a.u,a.D,[2,E.a]]),l.Ab(512,a.G,a.G,[a.i,a.u]),l.Ab(256,a.q,[],[]),l.Ab(512,E.e,E.e,[]),l.Ab(512,a.H,a.H,[a.B,a.A,E.e]),l.Ab(1073742336,a.w,a.w,[a.x,a.B,a.i,a.G,[2,a.q],a.u,a.H]),l.Ab(1073742336,y.c,y.c,[]),l.Ab(2048,E.d,null,[a.x]),l.Ab(2048,E.c,null,[a.A]),l.Ab(512,N.a,N.a,[l.q,E.d,E.c]),l.Ab(1073742336,_.a,_.a,[[4,N.a]]),l.Ab(1073742336,o,o,[]),l.Ab(256,l.Y,!0,[])])}));Object(l.R)(),p.h().bootstrapModuleFactory(k).catch(n=>console.log(n))},"U+rF":function(n,t){function e(n){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}))}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="U+rF"},hfRL:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return u}));var l=e("BfEW");function r(n){return n[l.c]||Object.defineProperty(n,l.c,{value:{stateMeta:null,operations:{}}}),u(n)}function u(n){return n[l.c]}},khYc:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("e1JD"),r=e("SVse"),u=e("vkgz"),o=e("xgIS"),a=e("BfEW"),s=e("7jfm");let i=(()=>{class n{constructor(t,e){this._platformId=t,this.injector=e,Object(r.p)(this._platformId)||Object(o.a)(window,"storage").subscribe(t=>{n.keys.has(t.key)&&this.store.dispatch({type:a.a})})}get store(){return this.injector.get(l.i,null)}get size(){return this.providers.size}get providers(){return n.providers}get entries(){return this.providers.entries()}static getProvidedKeys(){return Array.from(n.keys.keys())}static clear(){n.keys.clear(),n.providers.clear()}handle(t,e,o){if(0===this.size||Object(r.p)(this._platformId))return o(t,e);const i=Object(l.k)(e),c=i(l.b)||i(l.j);if(this.size>0&&(c||e.type===a.a))for(const[r]of this.entries){const e=this.exposeEngine(r),u=this.ensureKey(r),o=e.getItem(u);if(Object(s.b)(o))try{const a=this.deserialize(o);Object(s.b)(a)||r.nullable?(n.keys.set(u),t=Object(l.o)(t,r.path,a)):(e.removeItem(u),n.keys.delete(u))}catch(b){console.error(`${a.b.NGXS_PERSISTENCE_DESERIALIZE}:::${r.path}`)}}return o(t,e).pipe(Object(u.a)(e=>{for(const[u]of this.entries){const o=Object(l.n)(t,u.path),s=Object(l.n)(e,u.path);if(o!==s||c){const t=this.exposeEngine(u);try{const e=this.serialize(s,u),l=this.ensureKey(u);t.setItem(l,e),n.keys.set(l)}catch(r){console.error(`${a.b.NGXS_PERSISTENCE_SERIALIZE}:::${u.path}`)}}}}))}serialize(n,t){return JSON.stringify({lastChanged:(new Date).toISOString(),version:t.version,data:Object(s.b)(n)?n:null})}deserialize(n){const t=JSON.parse(n);if(t.lastChanged)return t.data;throw new Error("Not found lastChanged in meta")}ensureKey(n){return`${n.prefixKey}${n.path}`}exposeEngine(n){const t=n.existingEngine||this.injector.get(n.useClass,null);if(!t)throw new Error(`${a.b.NGXS_PERSISTENCE_ENGINE}:::${n.path}`);return t}}return n.providers=new Set,n.keys=new Map,n})()},reND:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e("Mrqg");var l=e("8Y7J"),r=e("e1JD"),u=e("BfEW"),o=e("hfRL");let a=(()=>{class n{constructor(t,e,u){n.statesCachedMeta.clear(),n.store=t.get(r.i),n.ngZone=t.get(l.y),n.factory=e,n.context=u}static createStateContext(t){return n.context.createStateContext(t)}static ensureMappedState(t){if(!n.factory||!t)throw new Error(u.b.NGXS_DATA_MODULE_EXCEPTION);const e=(t.name?n.statesCachedMeta.get(t.name):null)||null;if(!e){const e=t.name?n.factory.states.find(n=>n.name===t.name):null;return e&&t.name&&n.statesCachedMeta.set(t.name,e),e}return e}static getRepositoryByInstance(n){const t=Object(o.b)((n||{}).constructor)||null;if(!t)throw new Error(u.b.NGXS_DATA_STATE_DECORATOR);return t}static createPayload(n,t){const e={},l=Array.from(n);return t.argumentsNames.forEach((n,t)=>{e[n]=l[t]}),e}}return n.store=null,n.context=null,n.factory=null,n.ngZone=null,n.statesCachedMeta=new Map,n})()}},[[0,0,6]]]);