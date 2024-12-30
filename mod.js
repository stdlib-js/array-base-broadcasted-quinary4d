// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){var r,i,a;for(i=e.length,r=[],a=0;a<i;a++)r.push(e[a]);return r}function r(e){return"number"==typeof e}function i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,a){var n=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=a?e+i(t):i(t)+e,n&&(e="-"+e)),e}var n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function s(e){var i,s,o;switch(e.specifier){case"b":i=2;break;case"o":i=8;break;case"x":case"X":i=16;break;default:i=10}if(s=e.arg,o=parseInt(s,10),!isFinite(o)){if(!r(s))throw new Error("invalid integer. Value: "+s);o=0}return o<0&&("u"===e.specifier||10!==i)&&(o=4294967295+o+1),o<0?(s=(-o).toString(i),e.precision&&(s=a(s,e.precision,e.padRight)),s="-"+s):(s=o.toString(i),o||e.precision?e.precision&&(s=a(s,e.precision,e.padRight)):s="",e.sign&&(s=e.sign+s)),16===i&&(e.alternate&&(s="0x"+s),s=e.specifier===t.call(e.specifier)?t.call(s):n.call(s)),8===i&&e.alternate&&"0"!==s.charAt(0)&&(s="0"+s),s}var o=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,d=String.prototype.replace,f=/e\+(\d)$/,l=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,u=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var i,a,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+a);n=e.arg}switch(e.specifier){case"e":case"E":a=n.toExponential(e.precision);break;case"f":case"F":a=n.toFixed(e.precision);break;case"g":case"G":o(n)<1e-4?((i=e.precision)>0&&(i-=1),a=n.toExponential(i)):a=n.toPrecision(e.precision),e.alternate||(a=d.call(a,v,"$1e"),a=d.call(a,w,"e"),a=d.call(a,u,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=d.call(a,f,"e+0$1"),a=d.call(a,l,"e-0$1"),e.alternate&&(a=d.call(a,h,"$1."),a=d.call(a,g,"$1.e")),n>=0&&e.sign&&(a=e.sign+a),a=e.specifier===p.call(e.specifier)?p.call(a):c.call(a)}function b(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var y=String.fromCharCode,E=Array.isArray;function x(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,n,t,o,c,p,d,f,l,h,g,u;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,d=0;d<e.length;d++)if(n=e[d],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+d+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),i=n.flags,f=0;f<i.length;f++)switch(t=i.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,x(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,h=n.width,g=n.padRight,u=void 0,(u=h-l.length)<0?l:l=g?l+b(u):b(u)+l)),c+=n.arg||"",p+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,a,n;for(i=[],n=0,a=S.exec(e);a;)(r=e.slice(n,S.lastIndex-a[0].length)).length&&i.push(r),i.push($(a)),n=S.lastIndex,a=S.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){var r,i;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}function F(r,i,a){var n,t,s,o,c,p,d,f;if((o=a.length)<(c=i.length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(n=r,d=c;d<o;d++)n=[n];for(s=function(e,r){var i,a;for(i=[],a=0;a<r;a++)i.push(e);return i}(0,o),d=o-1;d>=0;d--)if(!((f=c-o+d)<0)){if(p=i[f],0!==(t=a[d])&&t<p)throw new Error(A("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),d));if(p===t)s[d]=1;else{if(1!==p)throw new Error(A("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),d));s[d]=0}}return{ref:r,data:n,shape:e(a),strides:s}}function C(e,r,i){var a,n,t,s,o,c,p,d,f,l,h,g,u,w,v,m,b,y,E,x,k,I,S,$,V,A,C,R,T,Z,j,D,W,z,L,G,U,X,M,O,P,q,B,H,J,K,N,Q,Y,_,ee,re,ie,ae,ne,te,se,oe,ce,pe,de,fe,le,he,ge,ue,we,ve,me,be,ye,Ee,xe,ke,Ie;if(k=(we=r[5])[3],I=we[2],S=we[1],$=we[0],!(k<=0||I<=0||S<=0||$<=0))for(be=(me=F(e[0],r[0],we)).data,a=(ve=me.strides)[3],n=ve[2],t=ve[1],s=ve[0],ye=(me=F(e[1],r[1],we)).data,o=(ve=me.strides)[3],c=ve[2],p=ve[1],d=ve[0],Ee=(me=F(e[2],r[2],we)).data,f=(ve=me.strides)[3],l=ve[2],h=ve[1],g=ve[0],xe=(me=F(e[3],r[3],we)).data,u=(ve=me.strides)[3],w=ve[2],v=ve[1],m=ve[0],ke=(me=F(e[4],r[4],we)).data,b=(ve=me.strides)[3],y=ve[2],E=ve[1],x=ve[0],Ie=e[5],D=0,G=0,O=0,H=0,Q=0,R=0;R<$;R++){for(j=0,L=0,M=0,B=0,N=0,ee=be[D],ae=ye[G],se=Ee[O],pe=xe[H],le=ke[Q],ue=Ie[R],C=0;C<S;C++){for(Z=0,z=0,X=0,q=0,K=0,_=ee[j],ie=ae[L],te=se[M],ce=pe[B],fe=le[N],ge=ue[C],A=0;A<I;A++){for(T=0,W=0,U=0,P=0,J=0,Y=_[Z],re=ie[z],ne=te[X],oe=ce[q],de=fe[K],he=ge[A],V=0;V<k;V++)he[V]=i(Y[T],re[W],ne[U],oe[P],de[J]),T+=a,W+=o,U+=f,P+=u,J+=b;Z+=n,z+=c,X+=l,q+=w,K+=y}j+=t,L+=p,M+=h,B+=v,N+=E}D+=s,G+=d,O+=g,H+=m,Q+=x}}export{C as default};
//# sourceMappingURL=mod.js.map
