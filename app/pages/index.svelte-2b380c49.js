var Os=Object.defineProperty,Ms=Object.defineProperties;var qs=Object.getOwnPropertyDescriptors;var vs=Object.getOwnPropertySymbols;var As=Object.prototype.hasOwnProperty,Us=Object.prototype.propertyIsEnumerable;var ps=(t,n,u)=>n in t?Os(t,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[n]=u,ds=(t,n)=>{for(var u in n||(n={}))As.call(n,u)&&ps(t,u,n[u]);if(vs)for(var u of vs(n))Us.call(n,u)&&ps(t,u,n[u]);return t},hs=(t,n)=>Ms(t,qs(n));import{S as ws,i as Cs,s as Hs,e as a,t as o,c as s,a as f,g as i,d as c,f as q,E as e,h as N,k as p,n as d,b as r,l as bs,J as er,K as ms,L as gs,M as U,N as Es,O as Sa,P as O,Q as Gt,R as H,I as ys,T as Lt,U as It,V as Ws,W as Oa}from"../chunks/vendor-203876ed.js";function Ts(t,n,u){let E=localStorage.getItem(t);if(E!=null){let b=JSON.parse(E);if(Date.now()/1e3-b.date<n)return Promise.resolve(b.data)}return u().then(b=>(localStorage.setItem(t,JSON.stringify({date:Date.now()/1e3,data:b})),b))}function Ls(t,n,u){const E=t.slice();return E[56]=n[u],E}function Is(t,n,u){const E=t.slice();return E[56]=n[u],E}function ks(t,n,u){const E=t.slice();return E[61]=n[u],E}function Ds(t,n,u){const E=t.slice();return E[27]=n[u],E}function zs(t){let n,u=t[27].symbol.slice(0,-4)+"",E,b,v;return{c(){n=a("option"),E=o(u),b=o(" / USDT"),this.h()},l(D){n=s(D,"OPTION",{});var g=f(n);E=i(g,u),b=i(g," / USDT"),g.forEach(c),this.h()},h(){n.__value=v=t[27].symbol,n.value=n.__value},m(D,g){q(D,n,g),e(n,E),e(n,b)},p(D,g){g[0]&1&&u!==(u=D[27].symbol.slice(0,-4)+"")&&N(E,u),g[0]&1&&v!==(v=D[27].symbol)&&(n.__value=v,n.value=n.__value)},d(D){D&&c(n)}}}function Ps(t){let n,u,E=t[8]*t[13].value/100+"",b,v,D;return{c(){n=a("div"),u=o("Value: "),b=o(E),v=p(),D=o(Ke),this.h()},l(g){n=s(g,"DIV",{class:!0});var I=f(n);u=i(I,"Value: "),b=i(I,E),v=d(I),D=i(I,Ke),I.forEach(c),this.h()},h(){r(n,"class","font-bold")},m(g,I){q(g,n,I),e(n,u),e(n,b),e(n,v),e(n,D)},p(g,I){I[0]&8448&&E!==(E=g[8]*g[13].value/100+"")&&N(b,E)},d(g){g&&c(n)}}}function Bs(t){let n,u,E=t[8]*t[12].value/100+"",b,v,D;return{c(){n=a("div"),u=o("Value: "),b=o(E),v=p(),D=o(Ke),this.h()},l(g){n=s(g,"DIV",{class:!0});var I=f(n);u=i(I,"Value: "),b=i(I,E),v=d(I),D=i(I,Ke),I.forEach(c),this.h()},h(){r(n,"class","font-bold")},m(g,I){q(g,n,I),e(n,u),e(n,b),e(n,v),e(n,D)},p(g,I){I[0]&4352&&E!==(E=g[8]*g[12].value/100+"")&&N(b,E)},d(g){g&&c(n)}}}function Rs(t){let n=t[61]+"",u,E;return{c(){u=o(n),E=a("br")},l(b){u=i(b,n),E=s(b,"BR",{})},m(b,v){q(b,u,v),q(b,E,v)},p(b,v){v[0]&98304&&n!==(n=b[61]+"")&&N(u,n)},d(b){b&&c(u),b&&c(E)}}}function Vs(t){let n,u=t[56].order+"",E,b,v,D,g,I=t[56].errors,V=[];for(let h=0;h<I.length;h+=1)V[h]=Rs(ks(t,I,h));return{c(){n=o("Order: "),E=o(u),b=p(),v=a("br"),D=p();for(let h=0;h<V.length;h+=1)V[h].c();g=bs()},l(h){n=i(h,"Order: "),E=i(h,u),b=d(h),v=s(h,"BR",{}),D=d(h);for(let k=0;k<V.length;k+=1)V[k].l(h);g=bs()},m(h,k){q(h,n,k),q(h,E,k),q(h,b,k),q(h,v,k),q(h,D,k);for(let L=0;L<V.length;L+=1)V[L].m(h,k);q(h,g,k)},p(h,k){if(k[0]&98304&&u!==(u=h[56].order+"")&&N(E,u),k[0]&98304){I=h[56].errors;let L;for(L=0;L<I.length;L+=1){const C=ks(h,I,L);V[L]?V[L].p(C,k):(V[L]=Rs(C),V[L].c(),V[L].m(g.parentNode,g))}for(;L<V.length;L+=1)V[L].d(1);V.length=I.length}},d(h){h&&c(n),h&&c(E),h&&c(b),h&&c(v),h&&c(D),er(V,h),h&&c(g)}}}function Ns(t){let n,u,E=t[56].order+"",b,v,D,g=T(t[56].price_dev)+"",I,V,h=T(t[56].price)+"",k,L,C,$,ae=-T((1-t[56].avg_price/t[1])*100)+"",W,he,Le=T(t[56].avg_price)+"",Ie,M,Qe,A,se=T(t[56].req_price)+"",Oe,ke,K=T(t[56].req_change)+"",Q,et,F=T(t[56].tp)+"",Ye,rt,G,j,Me=T(t[56].volume)+"",De,ce,X=T(t[56].margin)+"",tt,Fe,x,ee,Ge=T(t[56].pnl)+"",be,at,st,me,te=T(t[56].total_volume)+"",Ee,nt,Xe=T(t[56].total_margin)+"",ge,ne,ot,Ze,oe;function qe(){return t[53](t[56])}return{c(){n=a("tr"),u=a("td"),b=o(E),v=p(),D=a("td"),I=o(g),V=o("% ($"),k=o(h),L=o(")"),C=p(),$=a("td"),W=o(ae),he=o("% ($"),Ie=o(Le),M=o(")"),Qe=p(),A=a("td"),Oe=o(se),ke=o("$ ("),Q=o(K),et=o("%) / +"),Ye=o(F),rt=o("$"),G=p(),j=a("td"),De=o(Me),ce=o("$ ($"),tt=o(X),Fe=o(")"),x=p(),ee=a("td"),be=o(Ge),at=o("$"),st=p(),me=a("td"),Ee=o(te),nt=o("$ ("),ge=o(Xe),ne=o("$)"),ot=p(),this.h()},l(ze){n=s(ze,"TR",{class:!0});var P=f(n);u=s(P,"TD",{class:!0});var z=f(u);b=i(z,E),z.forEach(c),v=d(P),D=s(P,"TD",{class:!0});var Y=f(D);I=i(Y,g),V=i(Y,"% ($"),k=i(Y,h),L=i(Y,")"),Y.forEach(c),C=d(P),$=s(P,"TD",{class:!0});var J=f($);W=i(J,ae),he=i(J,"% ($"),Ie=i(J,Le),M=i(J,")"),J.forEach(c),Qe=d(P),A=s(P,"TD",{style:!0,class:!0});var w=f(A);Oe=i(w,se),ke=i(w,"$ ("),Q=i(w,K),et=i(w,"%) / +"),Ye=i(w,F),rt=i(w,"$"),w.forEach(c),G=d(P),j=s(P,"TD",{class:!0});var le=f(j);De=i(le,Me),ce=i(le,"$ ($"),tt=i(le,X),Fe=i(le,")"),le.forEach(c),x=d(P),ee=s(P,"TD",{class:!0});var S=f(ee);be=i(S,Ge),at=i(S,"$"),S.forEach(c),st=d(P),me=s(P,"TD",{class:!0});var Z=f(me);Ee=i(Z,te),nt=i(Z,"$ ("),ge=i(Z,Xe),ne=i(Z,"$)"),Z.forEach(c),ot=d(P),P.forEach(c),this.h()},h(){r(u,"class","svelte-zftrlb"),r(D,"class","svelte-zftrlb"),r($,"class","svelte-zftrlb"),ms(A,"background-color",t[56].errors.length>0?"":Ss((t[56].req_change-t[4])/(t[5]-t[4]),.3,t[26])),r(A,"class","svelte-zftrlb"),r(j,"class","svelte-zftrlb"),r(ee,"class","svelte-zftrlb"),r(me,"class","svelte-zftrlb"),r(n,"class","svelte-zftrlb"),gs(n,"liquidated",t[56].errors.length>0)},m(ze,P){q(ze,n,P),e(n,u),e(u,b),e(n,v),e(n,D),e(D,I),e(D,V),e(D,k),e(D,L),e(n,C),e(n,$),e($,W),e($,he),e($,Ie),e($,M),e(n,Qe),e(n,A),e(A,Oe),e(A,ke),e(A,Q),e(A,et),e(A,Ye),e(A,rt),e(n,G),e(n,j),e(j,De),e(j,ce),e(j,tt),e(j,Fe),e(n,x),e(n,ee),e(ee,be),e(ee,at),e(n,st),e(n,me),e(me,Ee),e(me,nt),e(me,ge),e(me,ne),e(n,ot),Ze||(oe=[U(n,"mouseenter",qe),U(n,"mouseleave",t[54])],Ze=!0)},p(ze,P){t=ze,P[0]&8&&E!==(E=t[56].order+"")&&N(b,E),P[0]&8&&g!==(g=T(t[56].price_dev)+"")&&N(I,g),P[0]&8&&h!==(h=T(t[56].price)+"")&&N(k,h),P[0]&10&&ae!==(ae=-T((1-t[56].avg_price/t[1])*100)+"")&&N(W,ae),P[0]&8&&Le!==(Le=T(t[56].avg_price)+"")&&N(Ie,Le),P[0]&8&&se!==(se=T(t[56].req_price)+"")&&N(Oe,se),P[0]&8&&K!==(K=T(t[56].req_change)+"")&&N(Q,K),P[0]&8&&F!==(F=T(t[56].tp)+"")&&N(Ye,F),P[0]&56&&ms(A,"background-color",t[56].errors.length>0?"":Ss((t[56].req_change-t[4])/(t[5]-t[4]),.3,t[26])),P[0]&8&&Me!==(Me=T(t[56].volume)+"")&&N(De,Me),P[0]&8&&X!==(X=T(t[56].margin)+"")&&N(tt,X),P[0]&8&&Ge!==(Ge=T(t[56].pnl)+"")&&N(be,Ge),P[0]&8&&te!==(te=T(t[56].total_volume)+"")&&N(Ee,te),P[0]&8&&Xe!==(Xe=T(t[56].total_margin)+"")&&N(ge,Xe),P[0]&8&&gs(n,"liquidated",t[56].errors.length>0)},d(ze){ze&&c(n),Ze=!1,Es(oe)}}}function js(t){let n=JSON.stringify(t[17])+"",u,E,b,v,D,g,I,V,h,k,L,C,$,ae,W,he,Le,Ie,M,Qe,A,se,Oe,ke,K,Q,et,F,Ye,rt,G,j,Me,De,ce,X,tt,Fe,x,ee,Ge,be,at,st,me,te,Ee,nt,Xe,ge,ne,ot,Ze,oe,qe,ze,P,z,Y,J,w,le,S,Z,ie,re,it,Ae,ye,Pe,Ue,ut,Nt,kt,ct,we,ft,Xt,vt,Dt,tr,lr,pt,Ce,rr,$e,ar,dt,zt,sr,nr,ht,Be,fl,or,He,_l,ir,bt,Pt,ur,cr,lt,Re,fr,We,_r,St,vr,pr,mt,Bt,dr,hr,gt,Ve,br,je,mr,Et,Rt,gr,Er,yt,Ne,yr,Je,Tr,m,Lr,Ir,kr,Zt=T(t[2].total_margin)+"",vl,Dr,$t=T(t[2].total_margin/t[8]*100)+"",pl,zr,Pr,Br,xt=T(t[2].total_volume)+"",dl,Rr,Vr,Nr,el=T(t[11])+"",hl,Sr,Or,Mr,tl=T(t[2].price_dev)+"",bl,qr,Ar,Ur,wr,Cr,Hr,Wr,jr,Jr,ll=T(t[2].total_margin)+"",ml,Kr,Qr,Yr,rl=T(-t[2].pnl)+"",gl,Fr,Gr,Xr,al=T(t[8]-t[2].total_margin+t[2].pnl)+"",El,Zr,$r,xr,sl=T(t[14])+"",yl,ea,ta,la,nl=-T(100-t[14]/t[1]*100)+"",Tl,ra,aa,sa,ol=-T(100-t[14]/t[1]*100+t[2].price_dev)+"",Ll,na,oa,ia,ua,ca,il=T(t[4])+"",Il,fa,_a,va,ul=T(t[5])+"",kl,pa,Dl,zl,Pl,_t,Bl,Rl,Vl,Nl,Sl,Ot,Ol,Ml,Tt,cl,ue,Mt,da,ha,qt,ba,ma,At,ga,Ea,Ut,ya,Ta,wt,La,Ia,Ct,ka,Da,Ht,za,Pa,Wt,Ba,Ma,jt=t[0],fe=[];for(let l=0;l<jt.length;l+=1)fe[l]=zs(Ds(t,jt,l));let _e=t[13].type=="%"&&Ps(t),ve=t[12].type=="%"&&Bs(t),Jt=t[15]?[t[16]||t[15]]:[],pe=[];for(let l=0;l<Jt.length;l+=1)pe[l]=Vs(Is(t,Jt,l));let Kt=t[3],de=[];for(let l=0;l<Kt.length;l+=1)de[l]=Ns(Ls(t,Kt,l));return{c(){u=o(n),E=p(),b=a("div"),v=a("div"),D=a("div"),g=a("label"),I=o("Wallet Balance"),V=p(),h=a("div"),k=a("input"),L=p(),C=a("span"),$=o(Ke),ae=p(),W=a("div"),he=a("label"),Le=o("Coin"),Ie=p(),M=a("select");for(let l=0;l<fe.length;l+=1)fe[l].c();Qe=p(),A=a("div"),se=a("label"),Oe=o("Entry Price"),ke=p(),K=a("div"),Q=a("input"),et=p(),F=a("span"),Ye=o(Ke),rt=p(),G=a("div"),j=a("label"),Me=o("Base Order size"),De=p(),ce=a("div"),X=a("input"),tt=p(),Fe=a("div"),x=a("select"),ee=a("option"),Ge=o("%"),be=a("option"),at=o(Ke),st=p(),_e&&_e.c(),me=p(),te=a("div"),Ee=a("label"),nt=o("Safety Order size"),Xe=p(),ge=a("div"),ne=a("input"),ot=p(),Ze=a("div"),oe=a("select"),qe=a("option"),ze=o("%"),P=a("option"),z=o(Ke),Y=p(),ve&&ve.c(),J=p(),w=a("div"),le=a("label"),S=o("Take Profit"),Z=p(),ie=a("div"),re=a("input"),it=p(),Ae=a("span"),ye=o("%"),Pe=p(),Ue=a("div"),ut=a("label"),Nt=o("Long or short"),kt=p(),ct=a("div"),we=a("input"),ft=o(`
        Long`),Xt=p(),vt=a("div"),Dt=a("label"),tr=o("Max safety trades count"),lr=p(),pt=a("div"),Ce=a("input"),rr=p(),$e=a("input"),ar=p(),dt=a("div"),zt=a("label"),sr=o("Leverage"),nr=p(),ht=a("div"),Be=a("input"),or=p(),He=a("input"),ir=p(),bt=a("div"),Pt=a("label"),ur=o("Price deviation to open safety orders"),cr=p(),lt=a("div"),Re=a("input"),fr=p(),We=a("input"),_r=p(),St=a("span"),vr=o("%"),pr=p(),mt=a("div"),Bt=a("label"),dr=o("Safety order volume scale"),hr=p(),gt=a("div"),Ve=a("input"),br=p(),je=a("input"),mr=p(),Et=a("div"),Rt=a("label"),gr=o("Safety order step scale"),Er=p(),yt=a("div"),Ne=a("input"),yr=p(),Je=a("input"),Tr=p(),m=a("div"),Lr=o(`Bot info:
    `),Ir=a("br"),kr=o(`
    Max amount for bot usage: `),vl=o(Zt),Dr=o("$ ("),pl=o($t),zr=o(`%)
    `),Pr=a("br"),Br=o(`
    Max deal volume: `),dl=o(xt),Rr=o(`$
    `),Vr=a("br"),Nr=o(`
    Leverage: `),hl=o(el),Sr=p(),Or=a("br"),Mr=o(`
    Max. safe order price deviation: `),bl=o(tl),qr=o(`%

    `),Ar=a("br"),Ur=p(),wr=a("br"),Cr=p(),Hr=a("br"),Wr=o(`

    Recommended Min. Wallet balance:
    `),jr=a("br"),Jr=o(`
    Max amount for bot usage: `),ml=o(ll),Kr=o(`$
    `),Qr=a("br"),Yr=o(`
    Wallet reserve: `),gl=o(rl),Fr=o(`$
    `),Gr=a("br"),Xr=o(`
    Additional Reserve: `),El=o(al),Zr=o(`$
    `),$r=a("br"),xr=o(`
    Liquidation at price: `),yl=o(sl),ea=p(),ta=a("br"),la=o(`
    Drop from entry: `),Tl=o(nl),ra=o(`%
    `),aa=a("br"),sa=o(`
    Drop from last SO: `),Ll=o(ol),na=o(`%
    `),oa=a("br"),ia=p(),ua=a("br"),ca=o(`
    Min Required Change:: `),Il=o(il),fa=o(`%
    `),_a=a("br"),va=o(`
    Max Required Change:: `),kl=o(ul),pa=o("%"),Dl=p(),zl=a("br"),Pl=o(`
Reverse: `),_t=a("input"),Bl=p(),Rl=a("br"),Vl=p(),Nl=a("br"),Sl=p();for(let l=0;l<pe.length;l+=1)pe[l].c();Ot=p(),Ol=a("br"),Ml=p(),Tt=a("table"),cl=a("thead"),ue=a("tr"),Mt=a("th"),da=o("Order #"),ha=p(),qt=a("th"),ba=o("Price Dev."),ma=p(),At=a("th"),ga=o("Avg. Price"),Ea=p(),Ut=a("th"),ya=o("Required price / Profit"),Ta=p(),wt=a("th"),La=o("Order Size (Margin)"),Ia=p(),Ct=a("th"),ka=o("PnL"),Da=p(),Ht=a("th"),za=o("Total Volume (Margin)"),Pa=p(),Wt=a("tbody");for(let l=0;l<de.length;l+=1)de[l].c();this.h()},l(l){u=i(l,n),E=d(l),b=s(l,"DIV",{class:!0});var _=f(b);v=s(_,"DIV",{class:!0});var R=f(v);D=s(R,"DIV",{});var Vt=f(D);g=s(Vt,"LABEL",{for:!0,class:!0});var B=f(g);I=i(B,"Wallet Balance"),B.forEach(c),V=d(Vt),h=s(Vt,"DIV",{class:!0});var Se=f(h);k=s(Se,"INPUT",{type:!0,name:!0,step:!0,class:!0}),L=d(Se),C=s(Se,"SPAN",{class:!0});var qa=f(C);$=i(qa,Ke),qa.forEach(c),Se.forEach(c),Vt.forEach(c),ae=d(R),W=s(R,"DIV",{});var ql=f(W);he=s(ql,"LABEL",{for:!0,class:!0});var Aa=f(he);Le=i(Aa,"Coin"),Aa.forEach(c),Ie=d(ql),M=s(ql,"SELECT",{name:!0,class:!0});var Ua=f(M);for(let xe=0;xe<fe.length;xe+=1)fe[xe].l(Ua);Ua.forEach(c),ql.forEach(c),Qe=d(R),A=s(R,"DIV",{});var Al=f(A);se=s(Al,"LABEL",{for:!0,class:!0});var wa=f(se);Oe=i(wa,"Entry Price"),wa.forEach(c),ke=d(Al),K=s(Al,"DIV",{class:!0});var Ul=f(K);Q=s(Ul,"INPUT",{type:!0,name:!0,class:!0}),et=d(Ul),F=s(Ul,"SPAN",{class:!0});var Ca=f(F);Ye=i(Ca,Ke),Ca.forEach(c),Ul.forEach(c),Al.forEach(c),rt=d(R),G=s(R,"DIV",{});var Qt=f(G);j=s(Qt,"LABEL",{for:!0,class:!0});var Ha=f(j);Me=i(Ha,"Base Order size"),Ha.forEach(c),De=d(Qt),ce=s(Qt,"DIV",{class:!0});var wl=f(ce);X=s(wl,"INPUT",{type:!0,name:!0,step:!0,class:!0}),tt=d(wl),Fe=s(wl,"DIV",{});var Wa=f(Fe);x=s(Wa,"SELECT",{name:!0,class:!0});var Ra=f(x);ee=s(Ra,"OPTION",{});var ja=f(ee);Ge=i(ja,"%"),ja.forEach(c),be=s(Ra,"OPTION",{});var Ja=f(be);at=i(Ja,Ke),Ja.forEach(c),Ra.forEach(c),Wa.forEach(c),wl.forEach(c),st=d(Qt),_e&&_e.l(Qt),Qt.forEach(c),me=d(R),te=s(R,"DIV",{});var Yt=f(te);Ee=s(Yt,"LABEL",{for:!0,class:!0});var Ka=f(Ee);nt=i(Ka,"Safety Order size"),Ka.forEach(c),Xe=d(Yt),ge=s(Yt,"DIV",{class:!0});var Cl=f(ge);ne=s(Cl,"INPUT",{type:!0,name:!0,step:!0,class:!0}),ot=d(Cl),Ze=s(Cl,"DIV",{});var Qa=f(Ze);oe=s(Qa,"SELECT",{name:!0,class:!0});var Va=f(oe);qe=s(Va,"OPTION",{});var Ya=f(qe);ze=i(Ya,"%"),Ya.forEach(c),P=s(Va,"OPTION",{});var Fa=f(P);z=i(Fa,Ke),Fa.forEach(c),Va.forEach(c),Qa.forEach(c),Cl.forEach(c),Y=d(Yt),ve&&ve.l(Yt),Yt.forEach(c),J=d(R),w=s(R,"DIV",{});var Hl=f(w);le=s(Hl,"LABEL",{for:!0,class:!0});var Ga=f(le);S=i(Ga,"Take Profit"),Ga.forEach(c),Z=d(Hl),ie=s(Hl,"DIV",{class:!0});var Wl=f(ie);re=s(Wl,"INPUT",{type:!0,name:!0,min:!0,max:!0,step:!0,class:!0}),it=d(Wl),Ae=s(Wl,"SPAN",{class:!0});var Xa=f(Ae);ye=i(Xa,"%"),Xa.forEach(c),Wl.forEach(c),Hl.forEach(c),Pe=d(R),Ue=s(R,"DIV",{});var jl=f(Ue);ut=s(jl,"LABEL",{for:!0,class:!0});var Za=f(ut);Nt=i(Za,"Long or short"),Za.forEach(c),kt=d(jl),ct=s(jl,"DIV",{class:!0});var Na=f(ct);we=s(Na,"INPUT",{type:!0,name:!0,class:!0}),ft=i(Na,`
        Long`),Na.forEach(c),jl.forEach(c),Xt=d(R),vt=s(R,"DIV",{class:!0});var Jl=f(vt);Dt=s(Jl,"LABEL",{for:!0,class:!0});var $a=f(Dt);tr=i($a,"Max safety trades count"),$a.forEach(c),lr=d(Jl),pt=s(Jl,"DIV",{class:!0});var Kl=f(pt);Ce=s(Kl,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0}),rr=d(Kl),$e=s(Kl,"INPUT",{type:!0,min:!0,max:!0,class:!0}),Kl.forEach(c),Jl.forEach(c),ar=d(R),dt=s(R,"DIV",{class:!0});var Ql=f(dt);zt=s(Ql,"LABEL",{for:!0,class:!0});var xa=f(zt);sr=i(xa,"Leverage"),xa.forEach(c),nr=d(Ql),ht=s(Ql,"DIV",{class:!0});var Yl=f(ht);Be=s(Yl,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0}),or=d(Yl),He=s(Yl,"INPUT",{type:!0,min:!0,max:!0,class:!0}),Yl.forEach(c),Ql.forEach(c),ir=d(R),bt=s(R,"DIV",{class:!0});var Fl=f(bt);Pt=s(Fl,"LABEL",{for:!0,class:!0});var es=f(Pt);ur=i(es,"Price deviation to open safety orders"),es.forEach(c),cr=d(Fl),lt=s(Fl,"DIV",{class:!0});var Ft=f(lt);Re=s(Ft,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),fr=d(Ft),We=s(Ft,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),_r=d(Ft),St=s(Ft,"SPAN",{class:!0});var ts=f(St);vr=i(ts,"%"),ts.forEach(c),Ft.forEach(c),Fl.forEach(c),pr=d(R),mt=s(R,"DIV",{class:!0});var Gl=f(mt);Bt=s(Gl,"LABEL",{for:!0,class:!0});var ls=f(Bt);dr=i(ls,"Safety order volume scale"),ls.forEach(c),hr=d(Gl),gt=s(Gl,"DIV",{class:!0});var Xl=f(gt);Ve=s(Xl,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),br=d(Xl),je=s(Xl,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),Xl.forEach(c),Gl.forEach(c),mr=d(R),Et=s(R,"DIV",{class:!0});var Zl=f(Et);Rt=s(Zl,"LABEL",{for:!0,class:!0});var rs=f(Rt);gr=i(rs,"Safety order step scale"),rs.forEach(c),Er=d(Zl),yt=s(Zl,"DIV",{class:!0});var $l=f(yt);Ne=s($l,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),yr=d($l),Je=s($l,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),$l.forEach(c),Zl.forEach(c),R.forEach(c),Tr=d(_),m=s(_,"DIV",{});var y=f(m);Lr=i(y,`Bot info:
    `),Ir=s(y,"BR",{}),kr=i(y,`
    Max amount for bot usage: `),vl=i(y,Zt),Dr=i(y,"$ ("),pl=i(y,$t),zr=i(y,`%)
    `),Pr=s(y,"BR",{}),Br=i(y,`
    Max deal volume: `),dl=i(y,xt),Rr=i(y,`$
    `),Vr=s(y,"BR",{}),Nr=i(y,`
    Leverage: `),hl=i(y,el),Sr=d(y),Or=s(y,"BR",{}),Mr=i(y,`
    Max. safe order price deviation: `),bl=i(y,tl),qr=i(y,`%

    `),Ar=s(y,"BR",{}),Ur=d(y),wr=s(y,"BR",{}),Cr=d(y),Hr=s(y,"BR",{}),Wr=i(y,`

    Recommended Min. Wallet balance:
    `),jr=s(y,"BR",{}),Jr=i(y,`
    Max amount for bot usage: `),ml=i(y,ll),Kr=i(y,`$
    `),Qr=s(y,"BR",{}),Yr=i(y,`
    Wallet reserve: `),gl=i(y,rl),Fr=i(y,`$
    `),Gr=s(y,"BR",{}),Xr=i(y,`
    Additional Reserve: `),El=i(y,al),Zr=i(y,`$
    `),$r=s(y,"BR",{}),xr=i(y,`
    Liquidation at price: `),yl=i(y,sl),ea=d(y),ta=s(y,"BR",{}),la=i(y,`
    Drop from entry: `),Tl=i(y,nl),ra=i(y,`%
    `),aa=s(y,"BR",{}),sa=i(y,`
    Drop from last SO: `),Ll=i(y,ol),na=i(y,`%
    `),oa=s(y,"BR",{}),ia=d(y),ua=s(y,"BR",{}),ca=i(y,`
    Min Required Change:: `),Il=i(y,il),fa=i(y,`%
    `),_a=s(y,"BR",{}),va=i(y,`
    Max Required Change:: `),kl=i(y,ul),pa=i(y,"%"),y.forEach(c),_.forEach(c),Dl=d(l),zl=s(l,"BR",{}),Pl=i(l,`
Reverse: `),_t=s(l,"INPUT",{type:!0,class:!0}),Bl=d(l),Rl=s(l,"BR",{}),Vl=d(l),Nl=s(l,"BR",{}),Sl=d(l);for(let xe=0;xe<pe.length;xe+=1)pe[xe].l(l);Ot=d(l),Ol=s(l,"BR",{}),Ml=d(l),Tt=s(l,"TABLE",{});var xl=f(Tt);cl=s(xl,"THEAD",{});var as=f(cl);ue=s(as,"TR",{});var Te=f(ue);Mt=s(Te,"TH",{class:!0});var ss=f(Mt);da=i(ss,"Order #"),ss.forEach(c),ha=d(Te),qt=s(Te,"TH",{class:!0});var ns=f(qt);ba=i(ns,"Price Dev."),ns.forEach(c),ma=d(Te),At=s(Te,"TH",{class:!0});var os=f(At);ga=i(os,"Avg. Price"),os.forEach(c),Ea=d(Te),Ut=s(Te,"TH",{class:!0});var is=f(Ut);ya=i(is,"Required price / Profit"),is.forEach(c),Ta=d(Te),wt=s(Te,"TH",{class:!0});var us=f(wt);La=i(us,"Order Size (Margin)"),us.forEach(c),Ia=d(Te),Ct=s(Te,"TH",{class:!0});var cs=f(Ct);ka=i(cs,"PnL"),cs.forEach(c),Da=d(Te),Ht=s(Te,"TH",{class:!0});var fs=f(Ht);za=i(fs,"Total Volume (Margin)"),fs.forEach(c),Te.forEach(c),as.forEach(c),Pa=d(xl),Wt=s(xl,"TBODY",{});var _s=f(Wt);for(let xe=0;xe<de.length;xe+=1)de[xe].l(_s);_s.forEach(c),xl.forEach(c),this.h()},h(){var l,_;r(g,"for","balance"),r(g,"class","block mb-1"),r(k,"type","number"),r(k,"name","balance"),r(k,"step","10"),r(k,"class","svelte-zftrlb"),r(C,"class","px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"),r(h,"class","flex"),r(he,"for","coin"),r(he,"class","block mb-1"),r(M,"name","coin"),r(M,"class","focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 block w-full"),t[7]===void 0&&Sa(()=>t[34].call(M)),r(se,"for","entry_price"),r(se,"class","block mb-1"),r(Q,"type","text"),r(Q,"name","entry_price"),r(Q,"class","svelte-zftrlb"),r(F,"class","px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"),r(K,"class","flex"),r(j,"for","bo_size"),r(j,"class","block mb-1"),r(X,"type","number"),r(X,"name","bo_size"),r(X,"step","0.01"),r(X,"class","svelte-zftrlb"),ee.__value="%",ee.value=ee.__value,be.__value="price",be.value=be.__value,r(x,"name","$base_order_type"),r(x,"class","focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700"),t[13].type===void 0&&Sa(()=>t[37].call(x)),r(ce,"class","flex"),r(Ee,"for","so_size"),r(Ee,"class","block mb-1"),r(ne,"type","number"),r(ne,"name","so_size"),r(ne,"step","0.01"),r(ne,"class","svelte-zftrlb"),qe.__value="%",qe.value=qe.__value,P.__value="price",P.value=P.__value,r(oe,"name","so_type"),r(oe,"class","focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700"),t[12].type===void 0&&Sa(()=>t[39].call(oe)),r(ge,"class","flex"),r(le,"for","take_profit"),r(le,"class","block mb-1"),r(re,"type","number"),r(re,"name","take_profit"),r(re,"min","0.05"),r(re,"max","50"),r(re,"step","0.01"),r(re,"class","svelte-zftrlb"),r(Ae,"class","px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"),r(ie,"class","flex"),r(ut,"for","long"),r(ut,"class","block mb-1"),r(we,"type","checkbox"),r(we,"name","long"),r(we,"class","focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 svelte-zftrlb"),r(ct,"class","flex"),r(Dt,"for","max_safety_trades"),r(Dt,"class","block mb-1"),r(Ce,"name","max_safety_trades"),r(Ce,"type","range"),r(Ce,"class","block w-full mr-3 svelte-zftrlb"),r(Ce,"min","0"),r(Ce,"max","100"),r($e,"type","number"),r($e,"min","0"),r($e,"max","100"),r($e,"class","svelte-zftrlb"),r(pt,"class","flex"),r(vt,"class","col-span-3"),r(zt,"for","leverage"),r(zt,"class","block mb-1"),r(Be,"name","leverage"),r(Be,"type","range"),r(Be,"class","block w-full mr-3 svelte-zftrlb"),r(Be,"min","1"),r(Be,"max",fl=((l=t[6][0])==null?void 0:l.maxLeverage)||20),r(He,"type","number"),r(He,"min","1"),r(He,"max",_l=((_=t[6][0])==null?void 0:_.maxLeverage)||20),r(He,"class","svelte-zftrlb"),r(ht,"class","flex"),r(dt,"class","col-span-3"),r(Pt,"for","price_deviation"),r(Pt,"class","block mb-1"),r(Re,"name","price_deviation"),r(Re,"type","range"),r(Re,"class","block w-full mr-3 svelte-zftrlb"),r(Re,"min","0.2"),r(Re,"max","12"),r(Re,"step","0.01"),r(We,"type","number"),r(We,"min","0.2"),r(We,"max","12"),r(We,"step","0.01"),r(We,"class","svelte-zftrlb"),r(St,"class","px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"),r(lt,"class","flex"),r(bt,"class","col-span-3"),r(Bt,"for","so_volume_scale"),r(Bt,"class","block mb-1"),r(Ve,"name","so_volume_scale"),r(Ve,"type","range"),r(Ve,"class","block w-full mr-3 svelte-zftrlb"),r(Ve,"min","0.1"),r(Ve,"max","10"),r(Ve,"step","0.01"),r(je,"type","number"),r(je,"min","0.1"),r(je,"max","10"),r(je,"step","0.01"),r(je,"class","svelte-zftrlb"),r(gt,"class","flex"),r(mt,"class","col-span-3"),r(Rt,"for","so_step_scale"),r(Rt,"class","block mb-1"),r(Ne,"name","so-step-scale"),r(Ne,"type","range"),r(Ne,"class","block w-full mr-3 svelte-zftrlb"),r(Ne,"min","0.1"),r(Ne,"max","10"),r(Ne,"step","0.01"),r(Je,"type","number"),r(Je,"min","0.1"),r(Je,"max","5"),r(Je,"step","0.01"),r(Je,"class","svelte-zftrlb"),r(yt,"class","flex"),r(Et,"class","col-span-3"),r(v,"class","col-span-2 grid grid-cols-3 gap-6"),r(b,"class","grid grid-cols-3 gap-8"),r(_t,"type","checkbox"),r(_t,"class","svelte-zftrlb"),r(Mt,"class","svelte-zftrlb"),r(qt,"class","svelte-zftrlb"),r(At,"class","svelte-zftrlb"),r(Ut,"class","svelte-zftrlb"),r(wt,"class","svelte-zftrlb"),r(Ct,"class","svelte-zftrlb"),r(Ht,"class","svelte-zftrlb")},m(l,_){q(l,u,_),q(l,E,_),q(l,b,_),e(b,v),e(v,D),e(D,g),e(g,I),e(D,V),e(D,h),e(h,k),O(k,t[8]),e(h,L),e(h,C),e(C,$),e(v,ae),e(v,W),e(W,he),e(he,Le),e(W,Ie),e(W,M);for(let R=0;R<fe.length;R+=1)fe[R].m(M,null);Gt(M,t[7]),e(v,Qe),e(v,A),e(A,se),e(se,Oe),e(A,ke),e(A,K),e(K,Q),O(Q,t[1]),e(K,et),e(K,F),e(F,Ye),e(v,rt),e(v,G),e(G,j),e(j,Me),e(G,De),e(G,ce),e(ce,X),O(X,t[13].value),e(ce,tt),e(ce,Fe),e(Fe,x),e(x,ee),e(ee,Ge),e(x,be),e(be,at),Gt(x,t[13].type),e(G,st),_e&&_e.m(G,null),e(v,me),e(v,te),e(te,Ee),e(Ee,nt),e(te,Xe),e(te,ge),e(ge,ne),O(ne,t[12].value),e(ge,ot),e(ge,Ze),e(Ze,oe),e(oe,qe),e(qe,ze),e(oe,P),e(P,z),Gt(oe,t[12].type),e(te,Y),ve&&ve.m(te,null),e(v,J),e(v,w),e(w,le),e(le,S),e(w,Z),e(w,ie),e(ie,re),O(re,t[10]),e(ie,it),e(ie,Ae),e(Ae,ye),e(v,Pe),e(v,Ue),e(Ue,ut),e(ut,Nt),e(Ue,kt),e(Ue,ct),e(ct,we),we.checked=t[18],e(ct,ft),e(v,Xt),e(v,vt),e(vt,Dt),e(Dt,tr),e(vt,lr),e(vt,pt),e(pt,Ce),O(Ce,t[12].count),e(pt,rr),e(pt,$e),O($e,t[12].count),e(v,ar),e(v,dt),e(dt,zt),e(zt,sr),e(dt,nr),e(dt,ht),e(ht,Be),O(Be,t[11]),e(ht,or),e(ht,He),O(He,t[11]),e(v,ir),e(v,bt),e(bt,Pt),e(Pt,ur),e(bt,cr),e(bt,lt),e(lt,Re),O(Re,t[12].price_dev),e(lt,fr),e(lt,We),O(We,t[12].price_dev),e(lt,_r),e(lt,St),e(St,vr),e(v,pr),e(v,mt),e(mt,Bt),e(Bt,dr),e(mt,hr),e(mt,gt),e(gt,Ve),O(Ve,t[12].volume_scale),e(gt,br),e(gt,je),O(je,t[12].volume_scale),e(v,mr),e(v,Et),e(Et,Rt),e(Rt,gr),e(Et,Er),e(Et,yt),e(yt,Ne),O(Ne,t[12].step_scale),e(yt,yr),e(yt,Je),O(Je,t[12].step_scale),e(b,Tr),e(b,m),e(m,Lr),e(m,Ir),e(m,kr),e(m,vl),e(m,Dr),e(m,pl),e(m,zr),e(m,Pr),e(m,Br),e(m,dl),e(m,Rr),e(m,Vr),e(m,Nr),e(m,hl),e(m,Sr),e(m,Or),e(m,Mr),e(m,bl),e(m,qr),e(m,Ar),e(m,Ur),e(m,wr),e(m,Cr),e(m,Hr),e(m,Wr),e(m,jr),e(m,Jr),e(m,ml),e(m,Kr),e(m,Qr),e(m,Yr),e(m,gl),e(m,Fr),e(m,Gr),e(m,Xr),e(m,El),e(m,Zr),e(m,$r),e(m,xr),e(m,yl),e(m,ea),e(m,ta),e(m,la),e(m,Tl),e(m,ra),e(m,aa),e(m,sa),e(m,Ll),e(m,na),e(m,oa),e(m,ia),e(m,ua),e(m,ca),e(m,Il),e(m,fa),e(m,_a),e(m,va),e(m,kl),e(m,pa),q(l,Dl,_),q(l,zl,_),q(l,Pl,_),q(l,_t,_),_t.checked=t[9],q(l,Bl,_),q(l,Rl,_),q(l,Vl,_),q(l,Nl,_),q(l,Sl,_);for(let R=0;R<pe.length;R+=1)pe[R].m(l,_);q(l,Ot,_),q(l,Ol,_),q(l,Ml,_),q(l,Tt,_),e(Tt,cl),e(cl,ue),e(ue,Mt),e(Mt,da),e(ue,ha),e(ue,qt),e(qt,ba),e(ue,ma),e(ue,At),e(At,ga),e(ue,Ea),e(ue,Ut),e(Ut,ya),e(ue,Ta),e(ue,wt),e(wt,La),e(ue,Ia),e(ue,Ct),e(Ct,ka),e(ue,Da),e(ue,Ht),e(Ht,za),e(Tt,Pa),e(Tt,Wt);for(let R=0;R<de.length;R+=1)de[R].m(Wt,null);Ba||(Ma=[U(k,"input",t[33]),U(M,"change",t[34]),U(Q,"input",t[35]),U(X,"input",t[36]),U(x,"change",t[37]),U(ne,"input",t[38]),U(oe,"change",t[39]),U(re,"input",t[40]),U(we,"change",t[41]),U(Ce,"change",t[42]),U(Ce,"input",t[42]),U($e,"input",t[43]),U(Be,"change",t[44]),U(Be,"input",t[44]),U(He,"input",t[45]),U(Re,"change",t[46]),U(Re,"input",t[46]),U(We,"input",t[47]),U(Ve,"change",t[48]),U(Ve,"input",t[48]),U(je,"input",t[49]),U(Ne,"change",t[50]),U(Ne,"input",t[50]),U(Je,"input",t[51]),U(_t,"change",t[52])],Ba=!0)},p(l,_){var R,Vt;if(_[0]&131072&&n!==(n=JSON.stringify(l[17])+"")&&N(u,n),_[0]&256&&H(k.value)!==l[8]&&O(k,l[8]),_[0]&1){jt=l[0];let B;for(B=0;B<jt.length;B+=1){const Se=Ds(l,jt,B);fe[B]?fe[B].p(Se,_):(fe[B]=zs(Se),fe[B].c(),fe[B].m(M,null))}for(;B<fe.length;B+=1)fe[B].d(1);fe.length=jt.length}if(_[0]&129&&Gt(M,l[7]),_[0]&2&&Q.value!==l[1]&&O(Q,l[1]),_[0]&8192&&H(X.value)!==l[13].value&&O(X,l[13].value),_[0]&8192&&Gt(x,l[13].type),l[13].type=="%"?_e?_e.p(l,_):(_e=Ps(l),_e.c(),_e.m(G,null)):_e&&(_e.d(1),_e=null),_[0]&4096&&H(ne.value)!==l[12].value&&O(ne,l[12].value),_[0]&4096&&Gt(oe,l[12].type),l[12].type=="%"?ve?ve.p(l,_):(ve=Bs(l),ve.c(),ve.m(te,null)):ve&&(ve.d(1),ve=null),_[0]&1024&&H(re.value)!==l[10]&&O(re,l[10]),_[0]&262144&&(we.checked=l[18]),_[0]&4096&&O(Ce,l[12].count),_[0]&4096&&H($e.value)!==l[12].count&&O($e,l[12].count),_[0]&64&&fl!==(fl=((R=l[6][0])==null?void 0:R.maxLeverage)||20)&&r(Be,"max",fl),_[0]&2048&&O(Be,l[11]),_[0]&64&&_l!==(_l=((Vt=l[6][0])==null?void 0:Vt.maxLeverage)||20)&&r(He,"max",_l),_[0]&2048&&H(He.value)!==l[11]&&O(He,l[11]),_[0]&4096&&O(Re,l[12].price_dev),_[0]&4096&&H(We.value)!==l[12].price_dev&&O(We,l[12].price_dev),_[0]&4096&&O(Ve,l[12].volume_scale),_[0]&4096&&H(je.value)!==l[12].volume_scale&&O(je,l[12].volume_scale),_[0]&4096&&O(Ne,l[12].step_scale),_[0]&4096&&H(Je.value)!==l[12].step_scale&&O(Je,l[12].step_scale),_[0]&4&&Zt!==(Zt=T(l[2].total_margin)+"")&&N(vl,Zt),_[0]&260&&$t!==($t=T(l[2].total_margin/l[8]*100)+"")&&N(pl,$t),_[0]&4&&xt!==(xt=T(l[2].total_volume)+"")&&N(dl,xt),_[0]&2048&&el!==(el=T(l[11])+"")&&N(hl,el),_[0]&4&&tl!==(tl=T(l[2].price_dev)+"")&&N(bl,tl),_[0]&4&&ll!==(ll=T(l[2].total_margin)+"")&&N(ml,ll),_[0]&4&&rl!==(rl=T(-l[2].pnl)+"")&&N(gl,rl),_[0]&260&&al!==(al=T(l[8]-l[2].total_margin+l[2].pnl)+"")&&N(El,al),_[0]&16384&&sl!==(sl=T(l[14])+"")&&N(yl,sl),_[0]&16386&&nl!==(nl=-T(100-l[14]/l[1]*100)+"")&&N(Tl,nl),_[0]&16390&&ol!==(ol=-T(100-l[14]/l[1]*100+l[2].price_dev)+"")&&N(Ll,ol),_[0]&16&&il!==(il=T(l[4])+"")&&N(Il,il),_[0]&32&&ul!==(ul=T(l[5])+"")&&N(kl,ul),_[0]&512&&(_t.checked=l[9]),_[0]&98304){Jt=l[15]?[l[16]||l[15]]:[];let B;for(B=0;B<Jt.length;B+=1){const Se=Is(l,Jt,B);pe[B]?pe[B].p(Se,_):(pe[B]=Vs(Se),pe[B].c(),pe[B].m(Ot.parentNode,Ot))}for(;B<pe.length;B+=1)pe[B].d(1);pe.length=Jt.length}if(_[0]&67174458){Kt=l[3];let B;for(B=0;B<Kt.length;B+=1){const Se=Ls(l,Kt,B);de[B]?de[B].p(Se,_):(de[B]=Ns(Se),de[B].c(),de[B].m(Wt,null))}for(;B<de.length;B+=1)de[B].d(1);de.length=Kt.length}},i:ys,o:ys,d(l){l&&c(u),l&&c(E),l&&c(b),er(fe,l),_e&&_e.d(),ve&&ve.d(),l&&c(Dl),l&&c(zl),l&&c(Pl),l&&c(_t),l&&c(Bl),l&&c(Rl),l&&c(Vl),l&&c(Nl),l&&c(Sl),er(pe,l),l&&c(Ot),l&&c(Ol),l&&c(Ml),l&&c(Tt),er(de,l),Ba=!1,Es(Ma)}}}async function Ys({fetch:t}){return{props:{prices:(await t("https://fapi.binance.com/fapi/v1/ticker/price").then(u=>u.json())).filter(u=>u.symbol.endsWith("USDT"))}}}let Ke="USDT";function T(t){return t.toLocaleString(void 0,{maximumSignificantDigits:5})}function Ss(t,n,u){if(t<0||t>1||t!=0&&!t)return"";const E=u.findIndex(h=>t<=h.perc)||1,b=u[E-1],v=u[E],D=(t-b.perc)/(v.perc-b.perc),g=1-D,I=D,V={r:Math.floor(b.color.r*g+v.color.r*I),g:Math.floor(b.color.g*g+v.color.g*I),b:Math.floor(b.color.b*g+v.color.b*I)};return"rgba("+[V.r,V.g,V.b,n].join(",")+")"}function Js(t,n,u){let E,b,v,D,g,I,V,h,k,L,C,$,{prices:ae}=n,W=1;const he=It("3c.balance",1e4);Lt(t,he,z=>u(8,I=z));const Le=It("3c.coin","BTCUSDT");Lt(t,Le,z=>u(7,g=z));const Ie=It("3c.base_order",{value:10,type:"%"});Lt(t,Ie,z=>u(13,C=z));const M=It("3c.safety_order",{count:15,value:5,type:"%",price_dev:.99,volume_scale:1.3,step_scale:1});Lt(t,M,z=>u(12,L=z));const Qe=It("3c.take_profit",.6);Lt(t,Qe,z=>u(10,h=z));const A=It("3c.leverage",20);Lt(t,A,z=>u(11,k=z));const se=It("3c.long",!0);Lt(t,se,z=>u(18,$=z));const Oe=It("3c.reverse",!0);Lt(t,Oe,z=>u(9,V=z));let ke;Ts("3c.rules-cache",24*60*60,()=>fetch("https://cors.bridged.cc/https://www.binance.com/en/futures/trading-rules").then(z=>z.text()).then(z=>{const Y=document.createElement("html");Y.innerHTML=z;const J=Y.querySelectorAll("tr.rc-table-row");return Array.from(J).map(w=>{const[le,S]=w.children[0].innerText.split(" "),[Z,ie]=w.children[1].innerText.split(" ");if(S=="Perpetual")return{symbol:le,type:S,min_trade:+Z,coin:ie}})})).then(z=>{u(28,ke=z)});let K;Ts("3c.brackets-cache",24*60*60,()=>fetch("https://cors.bridged.cc/https://www.binance.com/bapi/futures/v1/friendly/future/common/brackets",{headers:{"content-type":"application/json"},body:"{}",method:"POST"}).then(z=>z.json())).then(z=>{u(29,K=z.data.brackets.map(Y=>({symbol:Y.symbol,brackets:Y.riskBrackets.map(J=>({volume_cap:J.bracketNotionalCap,minLeverage:J.minOpenPosLeverage,maxLeverage:J.maxOpenPosLeverage}))})))});let Q,et,F=[];function Ye(z,Y){let J=z/Y,w=Math.ceil(J/E)*E;return z*=w/J,[w,z]}let rt=[{perc:0,color:{r:0,g:255,b:0}},{perc:.5,color:{r:0,g:255,b:255}},{perc:1,color:{r:0,g:0,b:255}}],G=h,j=h,Me,De="",ce;function X(){I=H(this.value),he.set(I)}function tt(){g=Oa(this),Le.set(g),u(0,ae)}function Fe(){W=this.value,u(1,W),u(7,g),u(30,De),u(0,ae)}function x(){C.value=H(this.value),Ie.set(C)}function ee(){C.type=Oa(this),Ie.set(C)}function Ge(){L.value=H(this.value),M.set(L)}function be(){L.type=Oa(this),M.set(L)}function at(){h=H(this.value),Qe.set(h)}function st(){$=this.checked,se.set($)}function me(){L.count=H(this.value),M.set(L)}function te(){L.count=H(this.value),M.set(L)}function Ee(){k=H(this.value),A.set(k)}function nt(){k=H(this.value),A.set(k)}function Xe(){L.price_dev=H(this.value),M.set(L)}function ge(){L.price_dev=H(this.value),M.set(L)}function ne(){L.volume_scale=H(this.value),M.set(L)}function ot(){L.volume_scale=H(this.value),M.set(L)}function Ze(){L.step_scale=H(this.value),M.set(L)}function oe(){L.step_scale=H(this.value),M.set(L)}function qe(){V=this.checked,Oe.set(V)}const ze=z=>u(16,ce=z.errors.length>0?z:void 0),P=()=>u(16,ce=void 0);return t.$$set=z=>{"prices"in z&&u(0,ae=z.prices)},t.$$.update=()=>{var z,Y,J,w,le;if(t.$$.dirty[0]&268435584&&u(17,E=((z=ke==null?void 0:ke.find(S=>S.symbol==g))==null?void 0:z.min_trade)||1),t.$$.dirty[0]&536871040&&u(6,b=((Y=K==null?void 0:K.find(S=>S.symbol==g))==null?void 0:Y.brackets)||[]),t.$$.dirty[0]&2112&&k>((J=b[0])==null?void 0:J.maxLeverage)&&Ws(A,k=(w=b[0])==null?void 0:w.maxLeverage,k),t.$$.dirty[0]&2112&&u(32,v=b==null?void 0:b.find(S=>S.minLeverage<=k&&k<=S.maxLeverage)),t.$$.dirty[0]&256|t.$$.dirty[1]&2&&u(31,D=S=>{let Z=[];return S.total_margin>I&&Z.push(`Total margin used (${T(S.total_margin)}$) is more than available balance (${T(I)}$)`),-S.pnl>I&&Z.push(`PnL (${T(S.pnl)}$) is higher than available balance (${T(I)}$). Will be liquidated`),S.total_volume>(v==null?void 0:v.volume_cap)&&Z.push(`Total volume (${T(S.total_volume)}$) is higher than future volume cap (${T(v==null?void 0:v.volume_cap)}$)`),Z}),t.$$.dirty[0]&1073741953&&g!=De&&(u(30,De=g),u(1,W=((le=ae==null?void 0:ae.find(S=>S.symbol==g))==null?void 0:le.price)||1)),t.$$.dirty[0]&16190|t.$$.dirty[1]&1){let S=C.value;C.type=="%"&&(S=I*C.value/100);let Z=L.value;L.type=="%"&&(Z=I*L.value/100);let ie=[],re=0,it=W,[Ae,ye]=Ye(S,W);ie.push({order:"BO",price_dev:0,price:W,avg_price:it,size:Ae,margin:ye/k,volume:S,req_price:W*(1+h/100),req_change:h,pnl:0,tp:ye*h/100,total_size:Ae,total_volume:ye,total_margin:ye/k}),u(4,G=h),u(5,j=h);for(let Pe=0;Pe<L.count;Pe++){re=re*L.step_scale-L.price_dev;const Ue=W*(1+re/100),ut=Z*Math.pow(L.volume_scale,Pe),[Nt,kt]=Ye(ut,Ue);ye+=kt,Ae+=Nt,it=ye/Ae;const ct=ye/k,we=it*(1+h/100),ft=(we/Ue-1)*100,Xt=-(1-Ue/it)*ye;ft<G&&u(4,G=ft),ft>j&&u(5,j=ft),ie.push({order:`#${Pe+1}`,price_dev:re,price:Ue,avg_price:it,size:Nt,margin:kt/k,volume:kt,req_price:we,req_change:ft,tp:ye*h/100,pnl:Xt,total_size:Ae,total_volume:ye,total_margin:ct})}ie=ie.map(Pe=>hs(ds({},Pe),{errors:D(Pe)})),u(15,Me=ie.find(Pe=>Pe.errors.length>0)),u(3,F=ie),u(2,Q=F[F.length-1]),V&&u(3,F=F.reverse()),u(14,et=Q.avg_price*(1-I/Q.total_volume))}},[ae,W,Q,F,G,j,b,g,I,V,h,k,L,C,et,Me,ce,E,$,he,Ie,M,Qe,A,se,Oe,rt,Le,ke,K,De,D,v,X,tt,Fe,x,ee,Ge,be,at,st,me,te,Ee,nt,Xe,ge,ne,ot,Ze,oe,qe,ze,P]}class Fs extends ws{constructor(n){super();Cs(this,n,Js,js,Hs,{prices:0},null,[-1,-1,-1])}}export{Fs as default,Ys as load};