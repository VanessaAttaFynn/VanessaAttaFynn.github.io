(()=>{var T_=Object.defineProperty;var w_=(r,t,e)=>t in r?T_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ot=(r,t,e)=>w_(r,typeof t!="symbol"?t+"":t,e);var Tp=0,Lu=1,wp=2;var ua=1,Ep=2,fo=3,Gr=0,Un=1,Xi=2,ds=0,po=1,mo=2,Du=3,Nu=4,Ap=5;var ps=100,Cp=101,Rp=102,Pp=103,Ip=104,Lp=200,Dp=201,Np=202,Op=203,Ou=204,Uu=205,Up=206,Fp=207,Bp=208,zp=209,kp=210,Vp=211,Gp=212,Hp=213,Wp=214,Il=0,Ll=1,Dl=2,io=3,Nl=4,Ol=5,Ul=6,Fl=7,Fu=0,Xp=1,qp=2,qi=0,Bu=1,zu=2,ku=3,Vu=4,Gu=5,Hu=6,Wu=7;var Xu=300,ms=301,go=302,pc=303,mc=304,Bl=1e3,Vi=1001,zl=1002,dn=1003,Yp=1004;var fa=1005;var On=1006,gc=1007;var dr=1008;var fi=1009,qu=1010,Yu=1011,_o=1012,_c=1013,Ni=1014,Oi=1015,Ui=1016,xc=1017,vc=1018,gs=1020,Zu=35902,Ju=35899,$u=1021,Ku=1022,Fi=1023,hr=1026,pr=1027,Qu=1028,yc=1029,Hr=1030,Sc=1031;var Mc=1033,da=33776,pa=33777,ma=33778,ga=33779,bc=35840,Tc=35841,wc=35842,Ec=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,_a=37490,Lc=37491,Dc=37808,Nc=37809,Oc=37810,Uc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,xa=36285,Qc=36286;var Zo=2300,kl=2301,Rl=2302,Tu=2303,wu=2400,Eu=2401,Au=2402;var Zp=3200;var ju=0,Jp=1,mr="",ai="srgb",Jo="srgb-linear",$o="linear",ge="srgb";var Pl=7680;var $p=519,Kp=512,Qp=513,jp=514,tf=515,tm=516,em=517,ef=518,nf=519,nm=35044;var rf="300 es",bi=2e3,Ko=2001;function E_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function A_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function im(){let r=Qo("canvas");return r.style.display="block",r}var Jd={},ro=null;function sf(...r){let t="THREE."+r.shift();ro?ro("log",t,...r):console.log(t,...r)}function rm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function zt(...r){r=rm(r);let t="THREE."+r.shift();if(ro)ro("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function kt(...r){r=rm(r);let t="THREE."+r.shift();if(ro)ro("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Yo(...r){let t=r.join(" ");t in Jd||(Jd[t]=!0,zt(...r))}function sm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var om={[Il]:Il,[Dl]:Ul,[Nl]:Nl,[io]:Ol,[Ll]:Ll,[Ul]:Dl,[Fl]:Fl,[Ol]:io},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nu=Math.PI/180,Vl=180/Math.PI;function va(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function re(r,t,e){return Math.max(t,Math.min(e,r))}function C_(r,t){return(r%t+t)%t}function iu(r,t,e){return(1-e)*r+e*t}function am(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function of(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function R_(r,t){if(t.constructor===Float32Array)return r;let e=of(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function P_(r,t){if(t.constructor===Float32Array)return r;let e=of(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var uf=class uf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uf.prototype.isVector2=!0;var ue=uf,Hi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let _=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);_=Math.sin(_*v)/w,a=Math.sin(a*v)/w,l=l*_+u*a,c=c*_+f*a,h=h*_+p*a,d=d*_+x*a}else{l=l*_+u*a,c=c*_+f*a,h=h*_+p*a,d=d*_+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($d.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ru.copy(this).projectOnVector(t),this.sub(ru)}reflect(t){return this.sub(ru.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;var q=ff,ru=new q,$d=new Hi,df=class df{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],_=i[6],v=i[1],w=i[4],S=i[7],T=i[2],E=i[5],g=i[8];return s[0]=o*x+a*v+l*T,s[3]=o*m+a*w+l*E,s[6]=o*_+a*S+l*g,s[1]=c*x+h*v+d*T,s[4]=c*m+h*w+d*E,s[7]=c*_+h*S+d*g,s[2]=u*x+f*v+p*T,s[5]=u*m+f*w+p*E,s[8]=u*_+f*S+p*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(t,e)),this}rotate(t){return Yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-t)),this}translate(t,e){return Yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;var Gt=df,su=new Gt,Kd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){let r={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=no(i.r),i.g=no(i.g),i.b=no(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?$o:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Jo]:{primaries:t,whitePoint:n,transfer:$o,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}var ne=I_();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Hs,Gl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=Qo("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},L_=0,so=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ou(i[o].image)):s.push(ou(i[o]))}else s=ou(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function ou(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var D_=0,au=new q,qn=class r extends Gi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=On,o=dr,a=Fi,l=fi,c=r.DEFAULT_ANISOTROPY,h=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=va(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Xu;qn.DEFAULT_ANISOTROPY=1;var pf=class pf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(f+1)/2,T=(_+1)/2,E=(h+u)/4,g=(d+x)/4,y=(p+m)/4;return w>S&&w>T?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=g/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=y/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=g/s,i=y/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;var Oe=pf,Hl=class extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new qn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new so(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jo=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dc=class dc{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,x,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=f,_[7]=p,_[11]=x,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ws.setFromMatrixColumn(t,0).length(),s=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N_,t,O_)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Pr.crossVectors(n,si),Pr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Pr.crossVectors(n,si)),Pr.normalize(),sl.crossVectors(si,Pr),i[0]=Pr.x,i[4]=sl.x,i[8]=si.x,i[1]=Pr.y,i[5]=sl.y,i[9]=si.y,i[2]=Pr.z,i[6]=sl.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],_=n[14],v=n[3],w=n[7],S=n[11],T=n[15],E=i[0],g=i[4],y=i[8],R=i[12],A=i[1],L=i[5],N=i[9],V=i[13],I=i[2],z=i[6],H=i[10],U=i[14],j=i[3],W=i[7],P=i[11],nt=i[15];return s[0]=o*E+a*A+l*I+c*j,s[4]=o*g+a*L+l*z+c*W,s[8]=o*y+a*N+l*H+c*P,s[12]=o*R+a*V+l*U+c*nt,s[1]=h*E+d*A+u*I+f*j,s[5]=h*g+d*L+u*z+f*W,s[9]=h*y+d*N+u*H+f*P,s[13]=h*R+d*V+u*U+f*nt,s[2]=p*E+x*A+m*I+_*j,s[6]=p*g+x*L+m*z+_*W,s[10]=p*y+x*N+m*H+_*P,s[14]=p*R+x*V+m*U+_*nt,s[3]=v*E+w*A+S*I+T*j,s[7]=v*g+w*L+S*z+T*W,s[11]=v*y+w*N+S*H+T*P,s[15]=v*R+w*V+S*U+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],_=t[15],v=l*f-c*u,w=a*f-c*d,S=a*u-l*d,T=o*f-c*h,E=o*u-l*h,g=o*d-a*h;return e*(x*v-m*w+_*S)-n*(p*v-m*T+_*E)+i*(p*w-x*T+_*g)-s*(p*S-x*E+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],_=t[15],v=e*a-n*o,w=e*l-i*o,S=e*c-s*o,T=n*l-i*a,E=n*c-s*a,g=i*c-s*l,y=h*x-d*p,R=h*m-u*p,A=h*_-f*p,L=d*m-u*x,N=d*_-f*x,V=u*_-f*m,I=v*V-w*N+S*L+T*A-E*R+g*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*V-l*N+c*L)*z,t[1]=(i*N-n*V-s*L)*z,t[2]=(x*g-m*E+_*T)*z,t[3]=(u*E-d*g-f*T)*z,t[4]=(l*A-o*V-c*R)*z,t[5]=(e*V-i*A+s*R)*z,t[6]=(m*S-p*g-_*w)*z,t[7]=(h*g-u*S+f*w)*z,t[8]=(o*N-a*A+c*y)*z,t[9]=(n*A-e*N-s*y)*z,t[10]=(p*E-x*S+_*v)*z,t[11]=(d*S-h*E-f*v)*z,t[12]=(a*R-o*L-l*y)*z,t[13]=(e*L-n*R+i*y)*z,t[14]=(x*w-p*T-m*v)*z,t[15]=(h*T-d*w+u*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,x=o*h,m=o*d,_=a*d,v=l*c,w=l*h,S=l*d,T=n.x,E=n.y,g=n.z;return i[0]=(1-(x+_))*T,i[1]=(f+S)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(f-S)*E,i[5]=(1-(u+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+w)*g,i[9]=(m-v)*g,i[10]=(1-(u+x))*g,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(i[0],i[1],i[2]).length(),a=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=bi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===bi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ko)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=bi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===bi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ko)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};dc.prototype.isMatrix4=!0;var Re=dc,Ws=new q,Ii=new Re,N_=new q(0,0,0),O_=new q(1,1,1),Pr=new q,sl=new q,si=new q,jd=new Re,tp=new Hi,Ur=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tp.setFromEuler(this),this.setFromQuaternion(tp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U_=0,ep=new q,Xs=new Hi,ir=new Re,ol=new q,Go=new q,F_=new q,B_=new Hi,np=new q(1,0,0),ip=new q(0,1,0),rp=new q(0,0,1),sp={type:"added"},z_={type:"removed"},qs={type:"childadded",child:null},lu={type:"childremoved",child:null},Yn=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,e=new Ur,n=new Hi,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Gt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(np,t)}rotateY(t){return this.rotateOnAxis(ip,t)}rotateZ(t){return this.rotateOnAxis(rp,t)}translateOnAxis(t,e){return ep.copy(t).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(np,t)}translateY(t){return this.translateOnAxis(ip,t)}translateZ(t){return this.translateOnAxis(rp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ol.copy(t):ol.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Go,ol,this.up):ir.lookAt(ol,Go,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(ir),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sp),qs.child=t,this.dispatchEvent(qs),qs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z_),lu.child=t,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ir.multiply(t.parent.matrixWorld)),t.applyMatrix4(ir),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sp),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,F_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,B_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new q(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lr=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),_=this._getHandJoint(c,x);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},al={h:0,s:0,l:0};function cu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=C_(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=cu(o,s,t+1/3),this.g=cu(o,s,t),this.b=cu(o,s,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=ai){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let n=lm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return ne.workingToColorSpace(Tn.copy(this),t),Math.round(re(Tn.r*255,0,255))*65536+Math.round(re(Tn.g*255,0,255))*256+Math.round(re(Tn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,s=Tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=ai){ne.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ir),this.setHSL(Ir.h+t,Ir.s+e,Ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ir),t.getHSL(al);let n=iu(Ir.h,al.h,e),i=iu(Ir.s,al.s,e),s=iu(Ir.l,al.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Yt;Yt.NAMES=lm;var ta=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new q,rr=new q,hu=new q,sr=new q,Ys=new q,Zs=new q,op=new q,uu=new q,fu=new q,du=new q,pu=new Oe,mu=new Oe,gu=new Oe,Or=class r{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),rr.subVectors(n,e),hu.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(rr),l=Li.dot(hu),c=rr.dot(rr),h=rr.dot(hu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(o,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(t,e),mu.fromBufferAttribute(t,n),gu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pu,s.x),o.addScaledVector(mu,s.y),o.addScaledVector(gu,s.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),rr.subVectors(t,e),Li.cross(rr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Li.cross(rr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ys.subVectors(i,n),Zs.subVectors(s,n),uu.subVectors(t,n);let l=Ys.dot(uu),c=Zs.dot(uu);if(l<=0&&c<=0)return e.copy(n);fu.subVectors(t,i);let h=Ys.dot(fu),d=Zs.dot(fu);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Ys,o);du.subVectors(t,s);let f=Ys.dot(du),p=Zs.dot(du);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zs,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return op.subVectors(s,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(op,a);let _=1/(m+x+u);return o=x*_,a=u*_,e.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fr=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),cl.subVectors(this.max,Ho),Js.subVectors(t.a,Ho),$s.subVectors(t.b,Ho),Ks.subVectors(t.c,Ho),Lr.subVectors($s,Js),Dr.subVectors(Ks,$s),as.subVectors(Js,Ks);let e=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-as.z,as.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,as.z,0,-as.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-as.y,as.x,0];return!_u(e,Js,$s,Ks,cl)||(e=[1,0,0,0,1,0,0,0,1],!_u(e,Js,$s,Ks,cl))?!1:(hl.crossVectors(Lr,Dr),e=[hl.x,hl.y,hl.z],_u(e,Js,$s,Ks,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(or),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},or=[new q,new q,new q,new q,new q,new q,new q,new q],Di=new q,ll=new Fr,Js=new q,$s=new q,Ks=new q,Lr=new q,Dr=new q,as=new q,Ho=new q,cl=new q,hl=new q,ls=new q;function _u(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ls.fromArray(r,s);let a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new q,ul=new ue,V_=0,Xn=class extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nm,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?of(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ul.fromBufferAttribute(this,e),ul.applyMatrix3(t),this.setXY(e,ul.x,ul.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):R_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):P_(t,this.array)}};var ea=class extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var na=class extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fn=class extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},G_=new Fr,Wo=new q,xu=new q,Br=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):G_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);let e=Wo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(xu)),this.expandByPoint(Wo.copy(t.center).sub(xu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},H_=0,Mi=new Re,vu=new Yn,Qs=new q,oi=new Fr,Xo=new Fr,un=new q,Zn=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(E_(t)?na:ea)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,n){return Mi.makeTranslation(t,e,n),this.applyMatrix4(Mi),this}scale(t,e,n){return Mi.makeScale(t,e,n),this.applyMatrix4(Mi),this}lookAt(t){return vu.lookAt(t),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(oi.min,Xo.min),oi.expandByPoint(un),un.addVectors(oi.max,Xo.max),oi.expandByPoint(un)):(oi.expandByPoint(Xo.min),oi.expandByPoint(Xo.max))}oi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),un.add(Qs)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new q,l[R]=new q;let h=new q,d=new q,u=new q,f=new ue,p=new ue,x=new ue,m=new q,_=new q;function v(R,A,L){c[R]=c[A]=c[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,L),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),_.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(N),a[R].add(m),a[A].add(m),a[L].add(m),l[R].add(_),l[A].add(_),l[L].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,A=w.length;R<A;++R){let L=w[R],N=L.start,V=L.count;for(let I=N,z=N+V;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new q,T=new q,E=new q,g=new q;function y(R){E.fromBufferAttribute(i,R),g.copy(E);let A=a[R];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(g,A);let N=T.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,N)}for(let R=0,A=n.count;R<A;++R)c[R]&&y(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,h=new q,d=new q;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let _=0;_<h;_++)u[p++]=c[f++]}return new Xn(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yu=new q,W_=new q,X_=new Gt,li=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=yu.subVectors(n,e).cross(W_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(yu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||X_.getNormalMatrix(t),i=this.coplanarPoint(yu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},q_=0,ur=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=va(),this.name="",this.type="Material",this.blending=po,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Uu,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ar=new q,Su=new q,fl=new q,dl=new q,us=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ar)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ar.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ar.copy(this.origin).addScaledVector(this.direction,e),ar.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Su.copy(t).add(e).multiplyScalar(.5),fl.copy(e).sub(t).normalize(),dl.copy(this.origin).sub(Su);let s=t.distanceTo(e)*.5,o=-this.direction.dot(fl),a=dl.dot(this.direction),l=-dl.dot(fl),c=dl.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Su).addScaledVector(fl,u),f}intersectSphere(t,e){if(t.radius<0)return null;ar.subVectors(t.center,this.origin);let n=ar.dot(this.direction),i=ar.dot(ar)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ar)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,_=n.x-o.x,v=n.y-o.y,w=n.z-o.z,S=Math.abs(l),T=Math.abs(c),E=Math.abs(h),g,y,R,A,L,N,V,I,z,H,U,j;if(S>=T&&S>=E?(R=l,N=d,z=p,j=_,l>=0?(g=c,y=h,A=u,L=f,V=x,I=m,H=v,U=w):(g=h,y=c,A=f,L=u,V=m,I=x,H=w,U=v)):T>=E?(R=c,N=u,z=x,j=v,c>=0?(g=h,y=l,A=f,L=d,V=m,I=p,H=w,U=_):(g=l,y=h,A=d,L=f,V=p,I=m,H=_,U=w)):(R=h,N=f,z=m,j=w,h>=0?(g=l,y=c,A=d,L=u,V=p,I=x,H=_,U=v):(g=c,y=l,A=u,L=d,V=x,I=p,H=v,U=_)),R===0)return null;let W=g/R,P=y/R,nt=1/R,St=A-W*N,Ft=L-P*N,J=V-W*z,ht=I-P*z,yt=H-W*j,bt=U-P*j,mt=yt*ht-bt*J,Dt=St*bt-Ft*yt,xe=J*Ft-ht*St;if(i){if(mt<0||Dt<0||xe<0)return null}else if((mt<0||Dt<0||xe<0)&&(mt>0||Dt>0||xe>0))return null;let Et=mt+Dt+xe;if(Et===0)return null;let Ht=nt*(mt*N+Dt*z+xe*j);return(Et>0?Ht<0:Ht>0)?null:this.at(Ht/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xl=class extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ap=new Re,cs=new us,pl=new Br,lp=new q,ml=new q,gl=new q,_l=new q,Mu=new q,xl=new q,cp=new q,vl=new q,Wi=class extends Yn{constructor(t=new Zn,e=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Mu.fromBufferAttribute(d,t),o?xl.addScaledVector(Mu,h):xl.addScaledVector(Mu.sub(e),h))}e.add(xl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),cs.copy(t.ray).recast(t.near),!(pl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(pl,lp)===null||cs.origin.distanceToSquared(lp)>(t.far-t.near)**2))&&(ap.copy(s).invert(),cs.copy(t.ray).applyMatrix4(ap),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=w;S<T;S+=3){let E=a.getX(S),g=a.getX(S+1),y=a.getX(S+2);i=yl(this,_,t,n,c,h,d,E,g,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let v=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);i=yl(this,o,t,n,c,h,d,v,w,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=w;S<T;S+=3){let E=S,g=S+1,y=S+2;i=yl(this,_,t,n,c,h,d,E,g,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let v=m,w=m+1,S=m+2;i=yl(this,o,t,n,c,h,d,v,w,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Y_(r,t,e,n,i,s,o,a){let l;if(t.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Gr,a),l===null)return null;vl.copy(a),vl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(vl);return c<e.near||c>e.far?null:{distance:c,point:vl.clone(),object:r}}function yl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ml),r.getVertexPosition(l,gl),r.getVertexPosition(c,_l);let h=Y_(r,t,e,n,ml,gl,_l,cp);if(h){let d=new q;Or.getBarycoord(cp,ml,gl,_l,d),i&&(h.uv=Or.getInterpolatedAttribute(i,a,l,c,d,new ue)),s&&(h.uv1=Or.getInterpolatedAttribute(s,a,l,c,d,new ue)),o&&(h.normal=Or.getInterpolatedAttribute(o,a,l,c,d,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new q,materialIndex:0};Or.getNormal(ml,gl,_l,u.normal),h.face=u,h.barycoord=d}return h}var ql=class extends qn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new Br,Z_=new ue(.5,.5),Sl=new q,fs=class{constructor(t=new li,e=new li,n=new li,i=new li,s=new li,o=new li){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],m=s[10],_=s[11],v=s[12],w=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-o,f-h,_-p,T-v).normalize(),i[1].setComponents(c+o,f+h,_+p,T+v).normalize(),i[2].setComponents(c+a,f+d,_+x,T+w).normalize(),i[3].setComponents(c-a,f-d,_-x,T-w).normalize(),n)i[4].setComponents(l,u,m,S).normalize(),i[5].setComponents(c-l,f-u,_-m,T-S).normalize();else if(i[4].setComponents(c-l,f-u,_-m,T-S).normalize(),e===bi)i[5].setComponents(c+l,f+u,_+m,T+S).normalize();else if(e===Ko)i[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=Z_.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Sl.x=i.normal.x>0?t.max.x:t.min.x,Sl.y=i.normal.y>0?t.max.y:t.min.y,Sl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hp=new Re,Yl=class r{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];hp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new fs),n[i].setFromProjectionMatrix(hp,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new fs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Zl=class extends ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jl=new q,$l=new q,up=new Re,qo=new us,Ml=new Br,bu=new q,fp=new q,Kl=class extends Yn{constructor(t=new Zn,e=new Zl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Jl.fromBufferAttribute(e,i-1),$l.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jl.distanceTo($l);t.setAttribute("lineDistance",new fn(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(i),Ml.radius+=s,t.ray.intersectsSphere(Ml)===!1)return;up.copy(i).invert(),qo.copy(t.ray).applyMatrix4(up);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let _=h.getX(x),v=h.getX(x+1),w=bl(this,t,qo,l,_,v,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),_=bl(this,t,qo,l,x,m,p-1);_&&e.push(_)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let _=bl(this,t,qo,l,x,x+1,x);_&&e.push(_)}if(this.isLineLoop){let x=bl(this,t,qo,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function bl(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(Jl.fromBufferAttribute(a,i),$l.fromBufferAttribute(a,s),e.distanceSqToSegment(Jl,$l,bu,fp)>n)return;bu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(bu);if(!(c<t.near||c>t.far))return{distance:c,point:fp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var dp=new q,pp=new q,ia=class extends Kl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)dp.fromBufferAttribute(e,i),pp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dp.distanceTo(pp);t.setAttribute("lineDistance",new fn(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lo=class extends ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mp=new Re,Cu=new us,Tl=new Br,wl=new q,co=class extends Yn{constructor(t=new Zn,e=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(i),Tl.radius+=s,t.ray.intersectsSphere(Tl)===!1)return;mp.copy(i).invert(),Cu.copy(t.ray).applyMatrix4(mp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);wl.fromBufferAttribute(d,m),gp(wl,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)wl.fromBufferAttribute(d,p),gp(wl,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gp(r,t,e,n,i,s,o){let a=Cu.distanceSqToPoint(r);if(a<e){let l=new q;Cu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends qn{constructor(t=[],e=ms,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var fr=class extends qn{constructor(t,e,n=Ni,i,s,o,a=dn,l=dn,c,h=hr,d=1){if(h!==hr&&h!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new so(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sa=class extends fr{constructor(t,e=Ni,n=ms,i,s,o=dn,a=dn,l,c=hr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oa=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ho=class r extends Zn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(d,2));function p(x,m,_,v,w,S,T,E,g,y,R){let A=S/g,L=T/y,N=S/2,V=T/2,I=E/2,z=g+1,H=y+1,U=0,j=0,W=new q;for(let P=0;P<H;P++){let nt=P*L-V;for(let St=0;St<z;St++){let Ft=St*A-N;W[x]=Ft*v,W[m]=nt*w,W[_]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[_]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(St/g),d.push(1-P/y),U+=1}}for(let P=0;P<y;P++)for(let nt=0;nt<g;nt++){let St=u+nt+z*P,Ft=u+nt+z*(P+1),J=u+(nt+1)+z*(P+1),ht=u+(nt+1)+z*P;l.push(St,Ft,ht),l.push(Ft,J,ht),j+=6}a.addGroup(f,j,R),f+=j,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var aa=class r extends Zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let _=0;_<h;_++){let v=_*u-o;for(let w=0;w<c;w++){let S=w*d-s;p.push(S,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){let w=v+c*_,S=v+c*(_+1),T=v+1+c*(_+1),E=v+1+c*_;f.push(w,S,E),f.push(S,T,E)}this.setIndex(f),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function _s(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(_p(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(_p(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(r){let t={};for(let e=0;e<r.length;e++){let n=_s(r[e]);for(let i in n)t[i]=n[i]}return t}function _p(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function J_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function af(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var cm={clone:_s,merge:wn},$_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=J_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ql=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jl=class extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function El(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var zr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends zr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:s=t,a=2*e-n;break;case Au:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:o=t,l=2*n-e;break;case Au:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,_=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,S=f*m-f*x;for(let T=0;T!==a;++T)s[T]=_*o[h+T]+v*o[c+T]+w*o[l+T]+S*o[d+T];return s}},nc=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},ic=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},rc=class extends zr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],_=f*u+p*2,v=d[_],w=d[_+1],S=t*u+p*2,T=h[S],E=h[S+1],g=j_(n,e,v,T,i);s[p]=hm(g,x,w,E,m)}return s}};function hm(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Q_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function j_(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=hm(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=Q_(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),El(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zo:e=this.InterpolantFactoryMethodDiscrete;break;case kl:e=this.InterpolantFactoryMethodLinear;break;case Rl:e=this.InterpolantFactoryMethodSmooth;break;case Tu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;El(this.settings)&&(xp(this.settings.inTangents,t),xp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;El(this.settings)&&(vp(this.settings.inTangents,t),vp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&A_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,El(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function vp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=kl;var kr=class extends ui{constructor(t,e,n){super(t,e,n)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Zo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="color";var oc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};oc.prototype.ValueTypeName="number";var ac=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hi.slerpFlat(s,0,o,c-a,o,c,l);return s}},la=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends ui{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Zo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},um=new cc,hc=class{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Al=new q,Cl=new Hi,ki=new q,ca=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nr=new q,yp=new ue,Sp=new ue,Nn=class extends ca{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z)}getViewSize(t,e){return this.getViewBounds(t,yp,Sp),e.subVectors(Sp,yp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uc=class extends ca{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var to=-90,eo=1,uo=class extends Yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(to,eo,t,e);i.layers=this.layers,this.add(i);let s=new Nn(to,eo,t,e);s.layers=this.layers,this.add(s);let o=new Nn(to,eo,t,e);o.layers=this.layers,this.add(o);let a=new Nn(to,eo,t,e);a.layers=this.layers,this.add(a);let l=new Nn(to,eo,t,e);l.layers=this.layers,this.add(l);let c=new Nn(to,eo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fc=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var lf="\\[\\]\\.:\\/",tx=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",ex="[^"+lf.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",cf),ix=/(WCOD+)?/.source.replace("WCOD",ex),rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),ox=new RegExp("^"+nx+ix+rx+sx+"$"),ax=["material","materials","bones","map"],Ru=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(t){let e=ox.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ax.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ru;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xT=new Float32Array(1);var Mp=new Re,ha=class{constructor(t,e,n=0,i=1/0){this.ray=new us(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mp),this}intersectObject(t,e=!0,n=[]){return Pu(t,this,n,e),n.sort(bp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Pu(t[i],this,n,e);return n.sort(bp),n}};function bp(r,t){return r.distance-t.distance}function Pu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Pu(s[o],t,e,!0)}}var mf=class mf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};mf.prototype.isMatrix2=!0;var Iu=mf;function hf(r,t,e,n){let i=lx(n);switch(e){case $u:return r*t;case Qu:return r*t/i.components*i.byteLength;case yc:return r*t/i.components*i.byteLength;case Hr:return r*t*2/i.components*i.byteLength;case Sc:return r*t*2/i.components*i.byteLength;case Ku:return r*t*3/i.components*i.byteLength;case Fi:return r*t*4/i.components*i.byteLength;case Mc:return r*t*4/i.components*i.byteLength;case da:case pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ec:return Math.max(r,16)*Math.max(t,8)/4;case bc:case wc:return Math.max(r,8)*Math.max(t,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rc:case _a:case Lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $c:case Kc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xa:case Qc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(r){switch(r){case fi:case qu:return{byteLength:1,components:1};case _o:case Yu:case Ui:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Ni:case _c:case Oi:return{byteLength:4,components:1};case Zu:case Ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dm(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hx(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yv=`#if defined( USE_POINTS_UV )
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
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wy=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ay=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ry=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Oy=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:ux,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:xx,batching_pars_vertex:vx,batching_vertex:yx,begin_vertex:Sx,beginnormal_vertex:Mx,bsdfs:bx,iridescence_fragment:Tx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:Px,color_pars_fragment:Ix,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Bx,emissivemap_pars_fragment:zx,colorspace_fragment:kx,colorspace_pars_fragment:Vx,envmap_fragment:Gx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:nv,envmap_vertex:qx,fog_vertex:Yx,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:$x,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:Qx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:tv,lights_pars_begin:ev,lights_toon_fragment:iv,lights_toon_pars_fragment:rv,lights_phong_fragment:sv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:hv,lights_fragment_end:uv,lightprobes_pars_fragment:fv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:_v,map_pars_fragment:xv,map_particle_fragment:vv,map_particle_pars_fragment:yv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:bv,morphcolor_vertex:Tv,morphnormal_vertex:wv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Av,normal_fragment_begin:Cv,normal_fragment_maps:Rv,normal_pars_fragment:Pv,normal_pars_vertex:Iv,normal_vertex:Lv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Fv,opaque_fragment:Bv,packing:zv,premultiplied_alpha_fragment:kv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Hv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:Yv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:$v,skinning_pars_vertex:Kv,skinning_vertex:Qv,skinnormal_vertex:jv,specularmap_fragment:ty,specularmap_pars_fragment:ey,tonemapping_fragment:ny,tonemapping_pars_fragment:iy,transmission_fragment:ry,transmission_pars_fragment:sy,uv_pars_fragment:oy,uv_pars_vertex:ay,uv_vertex:ly,worldpos_vertex:cy,background_vert:hy,background_frag:uy,backgroundCube_vert:fy,backgroundCube_frag:dy,cube_vert:py,cube_frag:my,depth_vert:gy,depth_frag:_y,distance_vert:xy,distance_frag:vy,equirect_vert:yy,equirect_frag:Sy,linedashed_vert:My,linedashed_frag:by,meshbasic_vert:Ty,meshbasic_frag:wy,meshlambert_vert:Ey,meshlambert_frag:Ay,meshmatcap_vert:Cy,meshmatcap_frag:Ry,meshnormal_vert:Py,meshnormal_frag:Iy,meshphong_vert:Ly,meshphong_frag:Dy,meshphysical_vert:Ny,meshphysical_frag:Oy,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:By,points_frag:zy,shadow_vert:ky,shadow_frag:Vy,sprite_vert:Gy,sprite_frag:Hy},Mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Zi={basic:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:wn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:wn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:wn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:wn([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:wn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:wn([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:wn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:wn([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:wn([Mt.common,Mt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:wn([Mt.lights,Mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Zi.physical={uniforms:wn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var jc={r:0,b:0,g:0},Wy=new Re,Nm=new Gt;Nm.set(-1,0,0,0,1,0,0,0,1);function Xy(r,t,e,n,i,s){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=t.get(w,S)}return w}function p(v){let w=!1,S=f(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,w){let S=f(w);S&&S.isCubeTexture?(c===void 0&&(c=new Wi(new ho(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:_s(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nm),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==ge,(h!==S||d!==S.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Wi(new aa(2,2),new hi({name:"BackgroundMaterial",uniforms:_s(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==ge,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(jc,af(r)),e.buffers.color.setClear(jc.r,jc.g,jc.b,w,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:_}}function qy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(L,N,V,I,z){let H=!1,U=d(L,I,V,N);s!==U&&(s=U,c(s.object)),H=f(L,I,V,z),H&&p(L,I,V,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(L,N,V,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function d(L,N,V,I){let z=I.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let U=L.isInstancedMesh===!0?L.id:0,j=H[U];j===void 0&&(j={},H[U]=j);let W=j[V.id];W===void 0&&(W={},j[V.id]=W);let P=W[z];return P===void 0&&(P=u(l()),W[z]=P),P}function u(L){let N=[],V=[],I=[];for(let z=0;z<e;z++)N[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,N,V,I){let z=s.attributes,H=N.attributes,U=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let nt=z[W],St=H[W];if(St===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),nt===void 0||nt.attribute!==St||St&&nt.data!==St.data)return!0;U++}return s.attributesNum!==U||s.index!==I}function p(L,N,V,I){let z={},H=N.attributes,U=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let nt=H[W];nt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let St={};St.attribute=nt,nt&&nt.data&&(St.data=nt.data),z[W]=St,U++}s.attributes=z,s.attributesNum=U,s.index=I}function x(){let L=s.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function m(L){_(L,0)}function _(L,N){let V=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;V[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),z[L]!==N&&(r.vertexAttribDivisor(L,N),z[L]=N)}function v(){let L=s.newAttributes,N=s.enabledAttributes;for(let V=0,I=N.length;V<I;V++)N[V]!==L[V]&&(r.disableVertexAttribArray(V),N[V]=0)}function w(L,N,V,I,z,H,U){U===!0?r.vertexAttribIPointer(L,N,V,z,H):r.vertexAttribPointer(L,N,V,I,z,H)}function S(L,N,V,I){x();let z=I.attributes,H=V.getAttributes(),U=N.defaultAttributeValues;for(let j in H){let W=H[j];if(W.location>=0){let P=z[j];if(P===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){let nt=P.normalized,St=P.itemSize,Ft=t.get(P);if(Ft===void 0)continue;let J=Ft.buffer,ht=Ft.type,yt=Ft.bytesPerElement,bt=ht===r.INT||ht===r.UNSIGNED_INT||P.gpuType===_c;if(P.isInterleavedBufferAttribute){let mt=P.data,Dt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,xe=P.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)_(W.location+Et,mt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Et=0;Et<W.locationSize;Et++)m(W.location+Et);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Et=0;Et<W.locationSize;Et++)w(W.location+Et,St/W.locationSize,ht,nt,Dt*yt,(xe+St/W.locationSize*Et)*yt,bt)}else{if(P.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)_(W.location+mt,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);r.bindBuffer(r.ARRAY_BUFFER,J);for(let mt=0;mt<W.locationSize;mt++)w(W.location+mt,St/W.locationSize,ht,nt,St*yt,St/W.locationSize*mt*yt,bt)}}else if(U!==void 0){let nt=U[j];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(W.location,nt);break;case 3:r.vertexAttrib3fv(W.location,nt);break;case 4:r.vertexAttrib4fv(W.location,nt);break;default:r.vertexAttrib1fv(W.location,nt)}}}}v()}function T(){R();for(let L in n){let N=n[L];for(let V in N){let I=N[V];for(let z in I){let H=I[z];for(let U in H)h(H[U].object),delete H[U];delete I[z]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let V in N){let I=N[V];for(let z in I){let H=I[z];for(let U in H)h(H[U].object),delete H[U];delete I[z]}}delete n[L.id]}function g(L){for(let N in n){let V=n[N];for(let I in V){let z=V[I];if(z[L.id]===void 0)continue;let H=z[L.id];for(let U in H)h(H[U].object),delete H[U];delete z[L.id]}}}function y(L){for(let N in n){let V=n[N],I=L.isInstancedMesh===!0?L.id:0,z=V[I];if(z!==void 0){for(let H in z){let U=z[H];for(let j in U)h(U[j].object),delete U[j];delete z[H]}delete V[I],Object.keys(V).length===0&&delete n[N]}}}function R(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Yy(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Zy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==Fi&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let y=g===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==fi&&g!==Oi&&!y&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:T,samples:E}}function Jy(r){let t=this,e=null,n=0,i=!1,s=!1,o=new li,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,_=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,w=v*4,S=_.clippingState||null;l.value=S,S=h(p,u,w,f);for(let T=0;T!==w;++T)S[T]=e[T];_.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let _=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let w=0,S=f;w!==x;++w,S+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ma=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ra(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ho(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:ds});s.uniforms.tEquirect.value=e;let o=new Wi(i,s),a=e.minFilter;return e.minFilter===dr&&(e.minFilter=On),new uo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},fm=256,$y=3,Ky=20,Om=256,Um=16,Qy=3,jy=new q,tS=new Yt,eh=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new Wi(new ho(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=jy}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(tS));let m=new uo(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(fm,am(t))}_fromTexture(t,e){t.mapping===ms||t.mapping===go?this._setSize(t.image.length===0?fm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=dm(t,!1,!1),n=Math.log2(t)-$y;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ms||t.mapping===go?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=eS(),this._integrationMaterial=nS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Um);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-Qy)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Om*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=iS());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function dm(r,t,e){return new Ma(r,{minFilter:dr,generateMipmaps:t,type:Ui,colorSpace:Jo,depthBuffer:e})}function ba(r,t,e){return new hi({name:r,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Un,blending:ds,depthTest:!1,depthWrite:!1})}function eS(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Om}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nS(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Um}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iS(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ky}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pm(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mm(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rS(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===pc||f===mc)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ma(p.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===pc||f===mc,x=f===ms||f===go;if(p||x){let m=e.get(u),_=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new eh(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new eh(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===pc?u.mapping=ms:f===mc&&(u.mapping=go),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function sS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Yo("WebGLRenderer: "+n+" extension not supported."),i}}}function oS(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=s.get(p);x&&(t.remove(x),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?na:ea,S=new w(Math.ceil(v/3)*6,1),T=S.array;if(x!==null){let g=x.array;_=x.version;for(let y=0,R=0;y<v;y+=3){let A=g[y+0],L=g[y+1],N=g[y+2];T[R++]=A,T[R++]=L,T[R++]=L,T[R++]=N,T[R++]=N,T[R++]=A}}else{_=m.version;for(let g=0,y=0;g<v;g+=3){let R=g+0,A=g+1,L=g+2;T[y++]=R,T[y++]=A,T[y++]=A,T[y++]=L,T[y++]=L,T[y++]=R}}S.version=_;let E=s.get(p);E&&t.remove(E),s.set(p,S)}function u(p){let x=s.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function aS(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cS(r,t,e){let n=new WeakMap,i=new Oe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let R=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*T*4*d),g=new jo(E,S,T,d);g.type=Oi,g.needsUpdate=!0;let y=w*4;for(let A=0;A<d;A++){let L=m[A],N=_[A],V=v[A],I=S*T*4*A;for(let z=0;z<L.count;z++){let H=z*y;f===!0&&(i.fromBufferAttribute(L,z),E[I+H+0]=i.x,E[I+H+1]=i.y,E[I+H+2]=i.z,E[I+H+3]=0),p===!0&&(i.fromBufferAttribute(N,z),E[I+H+4]=i.x,E[I+H+5]=i.y,E[I+H+6]=i.z,E[I+H+7]=0),x===!0&&(i.fromBufferAttribute(V,z),E[I+H+8]=i.x,E[I+H+9]=i.y,E[I+H+10]=i.z,E[I+H+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:g,size:new ue(S,T)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function hS(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var uS={[Bu]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Gu]:"CUSTOM_TONE_MAPPING"};function fS(r,t,e,n,i,s){let o=new ci(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zn;h.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fn([0,2,0,0,2,0],2));let d=new Ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Wi(h,d),f=new uc(-1,1,1,-1,0,1),p=null,x=null,m=!1,_,v=null,w=[],S=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let g=0;g<w.length;g++){let y=w[g];y.setSize&&y.setSize(T,E)}},this.setEffects=function(T){w=T,S=w.length>0&&w[0].isRenderPass===!0;let E=o.width,g=o.height;w.length>0&&a===null&&(a=new ci(E,g,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ci(E,g,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&w.some(R=>R.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new fr(E,g),s===!0&&(c.format=pr,c.type=gs)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let R=0;R<w.length;R++){let A=w[R];A.setSize&&A.setSize(E,g),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===qi&&w.length===0)return!1;if(v=E,E!==null){let g=E.width,y=E.height;(o.width!==g||o.height!==y)&&this.setSize(g,y)}return S===!1&&T.setRenderTarget(o),_=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return S},this.end=function(T,E){T.toneMapping=_,m=!0;let g=o,y=a;for(let R=0;R<w.length;R++){let A=w[R];A.enabled!==!1&&(A.render(T,y,g,E),A.needsSwap!==!1&&(g=y,y=y===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,d.defines={},ne.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");let R=uS[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(v),T.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Fm=new qn,Bm=new fr(1,1),zm=new sa(1),km=new jo,Vm=new Wl,Gm=new ra,gm=[],_m=[],xm=new Float32Array(16),vm=new Float32Array(9),ym=new Float32Array(4);function vo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=gm[i];if(s===void 0&&(s=new Float32Array(i),gm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function on(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function an(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ih(r,t){let e=_m[t];e===void 0&&(e=new Int32Array(t),_m[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function dS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function pS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2fv(this.addr,t),an(e,t)}}function mS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;r.uniform3fv(this.addr,t),an(e,t)}}function gS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4fv(this.addr,t),an(e,t)}}function _S(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;ym.set(n),r.uniformMatrix2fv(this.addr,!1,ym),an(e,n)}}function xS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;vm.set(n),r.uniformMatrix3fv(this.addr,!1,vm),an(e,n)}}function vS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;xm.set(n),r.uniformMatrix4fv(this.addr,!1,xm),an(e,n)}}function yS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function SS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2iv(this.addr,t),an(e,t)}}function MS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;r.uniform3iv(this.addr,t),an(e,t)}}function bS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4iv(this.addr,t),an(e,t)}}function TS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function wS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2uiv(this.addr,t),an(e,t)}}function ES(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;r.uniform3uiv(this.addr,t),an(e,t)}}function AS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4uiv(this.addr,t),an(e,t)}}function rh(r){return r.version===0&&(r.compareFunction=nf,r.needsUpdate=!0),r}function CS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=rh(Bm):s=Fm,e.setTexture2D(t||s,i)}function RS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vm,i)}function PS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=rh(zm):s=Gm,e.setTextureCube(t||s,i)}function IS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||km,i)}function LS(r){switch(r){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return xS;case 35676:return vS;case 5124:case 35670:return yS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return bS;case 5125:return TS;case 36294:return wS;case 36295:return ES;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return IS}}function DS(r,t){r.uniform1fv(this.addr,t)}function NS(r,t){let e=vo(t,this.size,2);r.uniform2fv(this.addr,e)}function OS(r,t){let e=vo(t,this.size,3);r.uniform3fv(this.addr,e)}function US(r,t){let e=vo(t,this.size,4);r.uniform4fv(this.addr,e)}function FS(r,t){let e=vo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function BS(r,t){let e=vo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zS(r,t){let e=vo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kS(r,t){r.uniform1iv(this.addr,t)}function VS(r,t){r.uniform2iv(this.addr,t)}function GS(r,t){r.uniform3iv(this.addr,t)}function HS(r,t){r.uniform4iv(this.addr,t)}function WS(r,t){r.uniform1uiv(this.addr,t)}function XS(r,t){r.uniform2uiv(this.addr,t)}function qS(r,t){r.uniform3uiv(this.addr,t)}function YS(r,t){r.uniform4uiv(this.addr,t)}function ZS(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=rh(Bm):o=Fm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function JS(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vm,s[o])}function $S(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=rh(zm):o=Gm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function KS(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||km,s[o])}function QS(r){switch(r){case 5126:return DS;case 35664:return NS;case 35665:return OS;case 35666:return US;case 35674:return FS;case 35675:return BS;case 35676:return zS;case 5124:case 35670:return kS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return HS;case 5125:return WS;case 36294:return XS;case 36295:return qS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return KS}}var xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=LS(e.type)}},vf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QS(e.type)}},yf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},gf=/(\w+)(\])?(\[|\.)?/g;function Sm(r,t){r.seq.push(t),r.map[t.id]=t}function jS(r,t,e){let n=r.name,i=n.length;for(gf.lastIndex=0;;){let s=gf.exec(n),o=gf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sm(e,c===void 0?new xf(a,r,t):new vf(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new yf(a),Sm(e,d)),e=d}}}var xo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jS(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Mm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var tM=37297,eM=0;function nM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bm=new Gt;function iM(r){ne._getMatrix(bm,ne.workingColorSpace,r);let t=`mat3( ${bm.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(r)){case $o:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Tm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+nM(r.getShaderSource(t),a)}else return s}function rM(r,t){let e=iM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sM={[Bu]:"Linear",[zu]:"Reinhard",[ku]:"Cineon",[Vu]:"ACESFilmic",[Hu]:"AgX",[Wu]:"Neutral",[Gu]:"Custom"};function oM(r,t){let e=sM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var th=new q;function aM(){ne.getLuminanceCoefficients(th);let r=th.x.toFixed(4),t=th.y.toFixed(4),e=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function cM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Sa(r){return r!==""}function wm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Em(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(uM,fM)}function fM(r,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Sf(e)}var dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(r){return r.replace(dM,pM)}function pM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cm(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var mM={[ua]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function gM(r){return mM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _M={[go]:"ENVMAP_MODE_REFRACTION"};function xM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vM={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[Xp]:"ENVMAP_BLENDING_MIX",[qp]:"ENVMAP_BLENDING_ADD"};function yM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vM[r.combine]||"ENVMAP_BLENDING_NONE"}function SM(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xM(e),d=yM(e),u=lM(e),f=cM(s),p=i.createProgram(),x,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(x=[Cm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[Cm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==qi?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,rM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Sf(o),o=wm(o,e),o=Em(o,e),a=Sf(a),a=wm(a,e),a=Em(a,e),o=Am(o),a=Am(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+x+o,w=_+m+a,S=Mm(i,i.VERTEX_SHADER,v),T=Mm(i,i.FRAGMENT_SHADER,w);i.attachShader(p,S),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(A){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(p)||"",N=i.getShaderInfoLog(S)||"",V=i.getShaderInfoLog(T)||"",I=L.trim(),z=N.trim(),H=V.trim(),U=!0,j=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,S,T);else{let W=Tm(i,S,"vertex"),P=Tm(i,T,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+P)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(j=!1);j&&(A.diagnostics={runnable:U,programLog:I,vertexShader:{log:z,prefix:x},fragmentShader:{log:H,prefix:m}})}i.deleteShader(S),i.deleteShader(T),g=new xo(i,p),y=hM(i,p)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,tM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var MM=0,Mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bf(t),e.set(t,n)),n}},bf=class{constructor(t){this.id=MM++,this.code=t,this.usedTimes=0}};function bM(r){return r===Hr||r===_a||r===xa}function TM(r,t,e,n,i,s){let o=new oo,a=new Mf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,y,R,A,L,N){let V=A.fog,I=L.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=t.get(g.envMap||z,H),j=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&zt("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=P!==void 0?P.length:0,St=0;I.morphAttributes.position!==void 0&&(St=1),I.morphAttributes.normal!==void 0&&(St=2),I.morphAttributes.color!==void 0&&(St=3);let Ft,J,ht,yt;if(j){let et=Zi[j];Ft=et.vertexShader,J=et.fragmentShader}else{Ft=g.vertexShader,J=g.fragmentShader;let et=a.getVertexShaderStage(g),Tt=a.getFragmentShaderStage(g);a.update(g,et,Tt),ht=et.id,yt=Tt.id}let bt=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Et=!!g.map,Ht=!!g.matcap,It=!!U,Ut=It&&U.isPMREMTexture===!0,ce=!!g.aoMap,oe=!!g.lightMap,Z=!!g.bumpMap&&g.wireframe===!1,Qt=!!g.normalMap,Je=!!g.displacementMap,Me=!!g.emissiveMap,ie=!!g.metalnessMap,ze=!!g.roughnessMap,Xe=g.anisotropy>0,F=g.clearcoat>0,de=g.diffuseRoughness>0,ae=g.dispersion>0,Vt=g.retroreflectivity>0,ut=g.iridescence>0,he=g.sheen>0,Lt=g.transmission>0,Bt=Xe&&!!g.anisotropyMap,C=F&&!!g.clearcoatMap,M=F&&!!g.clearcoatNormalMap,k=F&&!!g.clearcoatRoughnessMap,st=de&&!!g.diffuseRoughnessMap,it=ut&&!!g.iridescenceMap,ct=ut&&!!g.iridescenceThicknessMap,gt=he&&!!g.sheenColorMap,G=he&&!!g.sheenRoughnessMap,Q=!!g.specularMap,lt=!!g.specularColorMap,D=!!g.specularIntensityMap,K=Lt&&!!g.transmissionMap,$=Lt&&!!g.thicknessMap,ft=!!g.gradientMap,at=!!g.alphaMap,dt=g.alphaTest>0,ot=!!g.alphaHash,pt=!!g.extensions,rt=qi;g.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(rt=r.toneMapping);let tt=Ut?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,_t={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:Ft,fragmentShader:J,defines:g.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Et,matcap:Ht,envMap:It,envMapMode:It&&U.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?tt.length-1:null,envMapSize:Ut?tt[0].width:null,aoMap:ce,lightMap:oe,bumpMap:Z,normalMap:Qt,displacementMap:Je,emissiveMap:Me,normalMapObjectSpace:Qt&&g.normalMapType===Jp,normalMapTangentSpace:Qt&&g.normalMapType===ju,packedNormalMap:Qt&&g.normalMapType===ju&&bM(g.normalMap.format),metalnessMap:ie,roughnessMap:ze,anisotropy:Xe,anisotropyMap:Bt,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:de,diffuseRoughnessMap:st,dispersion:ae,retroreflection:Vt,iridescence:ut,iridescenceMap:it,iridescenceThicknessMap:ct,sheen:he,sheenColorMap:gt,sheenRoughnessMap:G,specularMap:Q,specularColorMap:lt,specularIntensityMap:D,transmission:Lt,transmissionMap:K,thicknessMap:$,gradientMap:ft,opaque:g.transparent===!1&&g.blending===po&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:dt,alphaHash:ot,combine:g.combine,mapUv:Et&&f(g.map.channel),aoMapUv:ce&&f(g.aoMap.channel),lightMapUv:oe&&f(g.lightMap.channel),bumpMapUv:Z&&f(g.bumpMap.channel),normalMapUv:Qt&&f(g.normalMap.channel),displacementMapUv:Je&&f(g.displacementMap.channel),emissiveMapUv:Me&&f(g.emissiveMap.channel),metalnessMapUv:ie&&f(g.metalnessMap.channel),roughnessMapUv:ze&&f(g.roughnessMap.channel),anisotropyMapUv:Bt&&f(g.anisotropyMap.channel),clearcoatMapUv:C&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(g.sheenRoughnessMap.channel),specularMapUv:Q&&f(g.specularMap.channel),specularColorMapUv:lt&&f(g.specularColorMap.channel),specularIntensityMapUv:D&&f(g.specularIntensityMap.channel),transmissionMapUv:K&&f(g.transmissionMap.channel),thicknessMapUv:$&&f(g.thicknessMap.channel),alphaMapUv:at&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||Xe),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Et||at),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(et=>et.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:Et&&g.map.isVideoTexture===!0&&ne.getTransfer(g.map.colorSpace)===ge,decodeVideoTextureEmissive:Me&&g.emissiveMap.isVideoTexture===!0&&ne.getTransfer(g.emissiveMap.colorSpace)===ge,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Xi,flipSided:g.side===Un,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&g.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function x(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)y.push(R),y.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(m(y,g),_(y,g),y.push(r.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function m(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function _(g,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function v(g){let y=u[g.type],R;if(y){let A=Zi[y];R=cm.clone(A.uniforms)}else R=g.uniforms;return R}function w(g,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new SM(r,y,g,i),c.push(R),h.set(y,R)),R}function S(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){a.remove(g)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function wM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function EM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Rm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,_){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:_},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=_),t++,v}function l(u,f,p,x,m,_,v){v.reversedDepth===!0&&(m=-m);let w=a(u,f,p,x,m,_);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,f,p,x,m,_){let v=a(u,f,p,x,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||EM),n.length>1&&n.sort(f||Rm),i.length>1&&i.sort(f||Rm)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function AM(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Pm,r.set(n,[o])):i>=s.length?(o=new Pm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function CM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Yt};break;case"SpotLight":e={position:new q,direction:new q,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function RM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var PM=0;function IM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function LM(r){let t=new CM,e=RM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new Re,o=new Re;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,_=0,v=0,w=0,S=0,T=0,E=0,g=0,y=0,R=0,A=0;c.sort(IM);for(let N=0,V=c.length;N<V;N++){let I=c[N],z=I.color,H=I.intensity,U=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hr?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,nt=e.get(I);nt.shadowIntensity=P.intensity,nt.shadowBias=P.bias,nt.shadowNormalBias=P.normalBias,nt.shadowRadius=P.radius,nt.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=j;let St=P.getViewportCount();for(let Ft=0;Ft<St;Ft++)n.sunShadowMatrix[x+Ft]=P.getMatrix(Ft),n.sunShadowCascade[x+Ft]=P._cascadeData[Ft];x+=St,p++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,nt=e.get(I);nt.shadowIntensity=P.intensity,nt.shadowBias=P.bias,nt.shadowNormalBias=P.normalBias,nt.shadowRadius=P.radius,nt.shadowMapSize=P.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=U,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let P=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,P.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=P.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=P.intensity,nt.shadowBias=P.bias,nt.shadowNormalBias=P.normalBias,nt.shadowRadius=P.radius,nt.shadowMapSize=P.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=j,g++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let P=I.shadow,nt=e.get(I);nt.shadowIntensity=P.intensity,nt.shadowBias=P.bias,nt.shadowNormalBias=P.normalBias,nt.shadowRadius=P.radius,nt.shadowMapSize=P.mapSize,nt.shadowCameraNear=P.camera.near,nt.shadowCameraFar=P.camera.far,n.pointShadow[_]=nt,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=I.shadow.matrix,E++}n.point[_]=W,_++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[S]=W,S++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==S||L.numSunShadows!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=_,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=_,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=S,L.numSunShadows=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=y,L.numLightProbes=A,n.version=PM++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,_=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let S=c[v];if(S.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(_),d++}else if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),u++}else if(S.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),p++}else if(S.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(_),o.identity(),s.copy(S.matrixWorld),s.premultiply(_),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function Im(r){let t=new LM(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Im(r),t.set(i,[a])):s>=o.length?(a=new Im(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],FM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Lm=new Re,ya=new q,_f=new q;function BM(r,t,e){let n=new fs,i=new ue,s=new ue,o=new Oe,a=new jl,l=new tc,c={},h=e.maxTextureSize,d={[Gr]:Un,[Un]:Gr,[Xi]:Xi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:NM,fragmentShader:OM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Zn;p.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let _=this.type;this.render=function(E,g,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Ep&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ua);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ds),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=_!==this.type;V&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let H=E[I],U=H.shadow;if(U===void 0){zt("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let j=U.getFrameExtents();i.multiply(j),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,U.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=W,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===fo){if(H.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ci(i.x,i.y,{format:Hr,type:Ui,minFilter:On,magFilter:On,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new fr(i.x,i.y,Oi),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=hr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=dn,U.map.depthTexture.magFilter=dn}else H.isPointLight?(U.map=new Ma(i.x),U.map.depthTexture=new sa(i.x,Ni)):(U.map=new ci(i.x,i.y),U.map.depthTexture=new fr(i.x,i.y,Ni)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=hr,this.type===ua?(U.map.depthTexture.compareFunction=W?ef:tf,U.map.depthTexture.minFilter=On,U.map.depthTexture.magFilter=On):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=dn,U.map.depthTexture.magFilter=dn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let P=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();H.isPointLight!==!0&&U.updateMatrices(H,y);let nt=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:y.layers;for(let St=0;St<P;St++){let Ft=U.getCamera(St);if(H.isPointLight){let J=U.camera,ht=U.matrix,yt=H.distance||J.far;yt!==J.far&&(J.far=yt,J.updateProjectionMatrix()),ya.setFromMatrixPosition(H.matrixWorld),J.position.copy(ya),_f.copy(J.position),_f.add(UM[St]),J.up.copy(FM[St]),J.lookAt(_f),J.updateMatrixWorld(),ht.makeTranslation(-ya.x,-ya.y,-ya.z),Lm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Lm,J.coordinateSystem,J.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,St),r.clear();else{St===0&&(r.setRenderTarget(U.map),r.clear());let J=U.getViewport(St);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),N.viewport(o)}n=U.getFrustum(St),S(g,y,Ft,H,nt,this.type)}U.isPointLightShadow!==!0&&this.type===fo&&v(U,y),U.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(R,A,L)};function v(E,g){let y=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ci(i.x,i.y,{format:Hr,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(g,null,y,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(g,null,y,f,x,null)}function w(E,g,y,R){let A=null,L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let N=A.uuid,V=g.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let z=I[V];z===void 0&&(z=A.clone(),I[V]=z,g.addEventListener("dispose",T)),A=z}if(A.visible=g.visible,A.wireframe=g.wireframe,R===fo?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:d[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=r.properties.get(A);N.light=y}return A}function S(E,g,y,R,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===fo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let H=I.groups;for(let U=0,j=H.length;U<j;U++){let W=H[U],P=z[W.materialIndex];if(P&&P.visible){let nt=w(E,P,R,L);E.onBeforeShadow(r,E,g,y,I,nt,W),r.renderBufferDirect(y,null,I,nt,E,W),E.onAfterShadow(r,E,g,y,I,nt,W)}}}else if(z.visible){let H=w(E,z,R,L);E.onBeforeShadow(r,E,g,y,I,H,null),r.renderBufferDirect(y,null,I,H,E,null),E.onAfterShadow(r,E,g,y,I,H,null)}}let V=E.children;for(let I=0,z=V.length;I<z;I++)S(V[I],g,y,R,A,L)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let R=c[y],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function zM(r,t){function e(){let D=!1,K=new Oe,$=null,ft=new Oe(0,0,0,0);return{setMask:function(at){$!==at&&!D&&(r.colorMask(at,at,at,at),$=at)},setLocked:function(at){D=at},setClear:function(at,dt,ot,pt,rt){rt===!0&&(at*=pt,dt*=pt,ot*=pt),K.set(at,dt,ot,pt),ft.equals(K)===!1&&(r.clearColor(at,dt,ot,pt),ft.copy(K))},reset:function(){D=!1,$=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,K=!1,$=null,ft=null,at=null;return{setReversed:function(dt){if(K!==dt){let ot=t.get("EXT_clip_control");dt?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),K=dt;let pt=at;at=null,this.setClear(pt)}},getReversed:function(){return K},setTest:function(dt){dt?mt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(dt){$!==dt&&!D&&(r.depthMask(dt),$=dt)},setFunc:function(dt){if(K&&(dt=om[dt]),ft!==dt){switch(dt){case Il:r.depthFunc(r.NEVER);break;case Ll:r.depthFunc(r.ALWAYS);break;case Dl:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Nl:r.depthFunc(r.EQUAL);break;case Ol:r.depthFunc(r.GEQUAL);break;case Ul:r.depthFunc(r.GREATER);break;case Fl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=dt}},setLocked:function(dt){D=dt},setClear:function(dt){at!==dt&&(at=dt,K&&(dt=1-dt),r.clearDepth(dt))},reset:function(){D=!1,$=null,ft=null,at=null,K=!1}}}function i(){let D=!1,K=null,$=null,ft=null,at=null,dt=null,ot=null,pt=null,rt=null;return{setTest:function(tt){D||(tt?mt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(tt){K!==tt&&!D&&(r.stencilMask(tt),K=tt)},setFunc:function(tt,_t,et){($!==tt||ft!==_t||at!==et)&&(r.stencilFunc(tt,_t,et),$=tt,ft=_t,at=et)},setOp:function(tt,_t,et){(dt!==tt||ot!==_t||pt!==et)&&(r.stencilOp(tt,_t,et),dt=tt,ot=_t,pt=et)},setLocked:function(tt){D=tt},setClear:function(tt){rt!==tt&&(r.clearStencil(tt),rt=tt)},reset:function(){D=!1,K=null,$=null,ft=null,at=null,dt=null,ot=null,pt=null,rt=null}}}let s=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,_=null,v=null,w=null,S=null,T=null,E=null,g=null,y=new Yt(0,0,0),R=0,A=!1,L=null,N=null,V=null,I=null,z=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,j=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=j>=2);let P=null,nt={},St=r.getParameter(r.SCISSOR_BOX),Ft=r.getParameter(r.VIEWPORT),J=new Oe().fromArray(St),ht=new Oe().fromArray(Ft);function yt(D,K,$,ft){let at=new Uint8Array(4),dt=r.createTexture();r.bindTexture(D,dt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<$;ot++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage2D(K+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at);return dt}let bt={};bt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(r.DEPTH_TEST),o.setFunc(io),Z(!1),Qt(Lu),mt(r.CULL_FACE),ce(ds);function mt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function xe(D,K){return u[D]!==K?(r.bindFramebuffer(D,K),u[D]=K,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=K),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Et(D,K){let $=p,ft=!1;if(D){$=f.get(K),$===void 0&&($=[],f.set(K,$));let at=D.textures;if($.length!==at.length||$[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,ot=at.length;dt<ot;dt++)$[dt]=r.COLOR_ATTACHMENT0+dt;$.length=at.length,ft=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,ft=!0);ft&&r.drawBuffers($)}function Ht(D){return x!==D?(r.useProgram(D),x=D,!0):!1}let It={[ps]:r.FUNC_ADD,[Cp]:r.FUNC_SUBTRACT,[Rp]:r.FUNC_REVERSE_SUBTRACT};It[Pp]=r.MIN,It[Ip]=r.MAX;let Ut={[Lp]:r.ZERO,[Dp]:r.ONE,[Np]:r.SRC_COLOR,[Ou]:r.SRC_ALPHA,[kp]:r.SRC_ALPHA_SATURATE,[Bp]:r.DST_COLOR,[Up]:r.DST_ALPHA,[Op]:r.ONE_MINUS_SRC_COLOR,[Uu]:r.ONE_MINUS_SRC_ALPHA,[zp]:r.ONE_MINUS_DST_COLOR,[Fp]:r.ONE_MINUS_DST_ALPHA,[Vp]:r.CONSTANT_COLOR,[Gp]:r.ONE_MINUS_CONSTANT_COLOR,[Hp]:r.CONSTANT_ALPHA,[Wp]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(D,K,$,ft,at,dt,ot,pt,rt,tt){if(D===ds){m===!0&&(Dt(r.BLEND),m=!1);return}if(m===!1&&(mt(r.BLEND),m=!0),D!==Ap){if(D!==_||tt!==A){if((v!==ps||T!==ps)&&(r.blendEquation(r.FUNC_ADD),v=ps,T=ps),tt)switch(D){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.ONE,r.ONE);break;case Du:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Du:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}w=null,S=null,E=null,g=null,y.set(0,0,0),R=0,_=D,A=tt}return}at=at||K,dt=dt||$,ot=ot||ft,(K!==v||at!==T)&&(r.blendEquationSeparate(It[K],It[at]),v=K,T=at),($!==w||ft!==S||dt!==E||ot!==g)&&(r.blendFuncSeparate(Ut[$],Ut[ft],Ut[dt],Ut[ot]),w=$,S=ft,E=dt,g=ot),(pt.equals(y)===!1||rt!==R)&&(r.blendColor(pt.r,pt.g,pt.b,rt),y.copy(pt),R=rt),_=D,A=!1}function oe(D,K){D.side===Xi?Dt(r.CULL_FACE):mt(r.CULL_FACE);let $=D.side===Un;K&&($=!$),Z($),D.blending===po&&D.transparent===!1?ce(ds):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let ft=D.stencilWrite;a.setTest(ft),ft&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Z(D){L!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),L=D)}function Qt(D){D!==Tp?(mt(r.CULL_FACE),D!==N&&(D===Lu?r.cullFace(r.BACK):D===wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),N=D}function Je(D){D!==V&&(U&&r.lineWidth(D),V=D)}function Me(D,K,$){D?(mt(r.POLYGON_OFFSET_FILL),(I!==K||z!==$)&&(I=K,z=$,o.getReversed()&&(K=-K,$=-$),r.polygonOffset(K,$))):Dt(r.POLYGON_OFFSET_FILL)}function ie(D){D?mt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ze(D){D===void 0&&(D=r.TEXTURE0+H-1),P!==D&&(r.activeTexture(D),P=D)}function Xe(D,K,$){$===void 0&&(P===null?$=r.TEXTURE0+H-1:$=P);let ft=nt[$];ft===void 0&&(ft={type:void 0,texture:void 0},nt[$]=ft),(ft.type!==D||ft.texture!==K)&&(P!==$&&(r.activeTexture($),P=$),r.bindTexture(D,K||bt[D]),ft.type=D,ft.texture=K)}function F(){let D=nt[P];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function de(){try{r.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ae(){try{r.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ut(){try{r.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Bt(){try{r.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function C(){try{r.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function M(){try{r.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function k(){try{r.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function st(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function it(D,K){d[D]!==K&&(r.pixelStorei(D,K),d[D]=K)}function ct(D){J.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function gt(D){ht.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function G(D,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let ft=$.get(D);ft===void 0&&(ft=r.getUniformBlockIndex(K,D.name),r.uniformBlockBinding(K,ft,ft),$.set(D,ft))}function Q(D,K,$){let at=c.get(K).get(D);l[at]!==$&&(r.bindBufferBase(r.UNIFORM_BUFFER,at,$),l[at]=$)}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,nt={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,_=null,v=null,w=null,S=null,T=null,E=null,g=null,y=new Yt(0,0,0),R=0,A=!1,L=null,N=null,V=null,I=null,z=null,J.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Dt,bindFramebuffer:xe,drawBuffers:Et,useProgram:Ht,setBlending:ce,setMaterial:oe,setFlipSided:Z,setCullFace:Qt,setLineWidth:Je,setPolygonOffset:Me,setScissorTest:ie,activeTexture:ze,bindTexture:Xe,unbindTexture:F,compressedTexImage2D:de,compressedTexImage3D:ae,texImage2D:M,texImage3D:k,pixelStorei:it,getParameter:st,updateUBOMapping:G,uniformBlockBinding:Q,texStorage2D:Bt,texStorage3D:C,texSubImage2D:Vt,texSubImage3D:ut,compressedTexSubImage2D:he,compressedTexSubImage3D:Lt,scissor:ct,viewport:gt,reset:lt}}function kM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):Qo("canvas")}function v(C,M,k){let st=1,it=Bt(C);if((it.width>k||it.height>k)&&(st=k/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(st*it.width),gt=Math.floor(st*it.height);u===void 0&&(u=_(ct,gt));let G=M?_(ct,gt):u;return G.width=ct,G.height=gt,G.getContext("2d").drawImage(C,0,0,ct,gt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ct+"x"+gt+")."),G}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function w(C){return C.generateMipmaps}function S(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,M,k,st,it,ct=!1){if(C!==null){if(r[C]!==void 0)return r[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=M;if(M===r.RED&&(k===r.FLOAT&&(G=r.R32F),k===r.HALF_FLOAT&&(G=r.R16F),k===r.UNSIGNED_BYTE&&(G=r.R8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.R16_EXT),k===r.SHORT&&gt&&(G=gt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.R8UI),k===r.UNSIGNED_SHORT&&(G=r.R16UI),k===r.UNSIGNED_INT&&(G=r.R32UI),k===r.BYTE&&(G=r.R8I),k===r.SHORT&&(G=r.R16I),k===r.INT&&(G=r.R32I)),M===r.RG&&(k===r.FLOAT&&(G=r.RG32F),k===r.HALF_FLOAT&&(G=r.RG16F),k===r.UNSIGNED_BYTE&&(G=r.RG8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.RG16_EXT),k===r.SHORT&&gt&&(G=gt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RG8UI),k===r.UNSIGNED_SHORT&&(G=r.RG16UI),k===r.UNSIGNED_INT&&(G=r.RG32UI),k===r.BYTE&&(G=r.RG8I),k===r.SHORT&&(G=r.RG16I),k===r.INT&&(G=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGB8UI),k===r.UNSIGNED_SHORT&&(G=r.RGB16UI),k===r.UNSIGNED_INT&&(G=r.RGB32UI),k===r.BYTE&&(G=r.RGB8I),k===r.SHORT&&(G=r.RGB16I),k===r.INT&&(G=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),k===r.UNSIGNED_INT&&(G=r.RGBA32UI),k===r.BYTE&&(G=r.RGBA8I),k===r.SHORT&&(G=r.RGBA16I),k===r.INT&&(G=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_SHORT&&gt&&(G=gt.RGB16_EXT),k===r.SHORT&&gt&&(G=gt.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),M===r.RGBA){let Q=ct?$o:ne.getTransfer(it);k===r.FLOAT&&(G=r.RGBA32F),k===r.HALF_FLOAT&&(G=r.RGBA16F),k===r.UNSIGNED_BYTE&&(G=Q===ge?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.RGBA16_EXT),k===r.SHORT&&gt&&(G=gt.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function g(C,M){let k;return C?M===null||M===Ni||M===gs?k=r.DEPTH24_STENCIL8:M===Oi?k=r.DEPTH32F_STENCIL8:M===_o&&(k=r.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===gs?k=r.DEPTH_COMPONENT24:M===Oi?k=r.DEPTH_COMPONENT32F:M===_o&&(k=r.DEPTH_COMPONENT16),k}function y(C,M){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){let M=new WeakRef(C);n.get(C).__ref=M,p.add(M),x.register(C,M,M)}function A(C){let M=n.get(C).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function L(C){V(C.target)}function N(C){I(C.target)}function V(C){C.removeEventListener("dispose",L),A(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",N),A(C),j(C)}function z(){for(let C of p){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):V(M))}p.clear(),d.clear()}function H(C){let M=n.get(C);if(M.__webglInit===void 0)return;let k=C.source,st=f.get(k);if(st){let it=st[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(C),Object.keys(st).length===0&&f.delete(k)}n.remove(C)}function U(C){let M=n.get(C);r.deleteTexture(M.__webglTexture);let k=C.source,st=f.get(k);delete st[M.__cacheKey],o.memory.textures--}function j(C){let M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&V(k),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ct=0;ct<M.__webglFramebuffer[it].length;ct++)r.deleteFramebuffer(M.__webglFramebuffer[it][ct]);else r.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)r.deleteFramebuffer(M.__webglFramebuffer[it]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let st=C.textures;for(let it=0,ct=st.length;it<ct;it++){let gt=n.get(st[it]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(st[it])}n.remove(C)}let W=0;function P(){W=0}function nt(){return W}function St(C){W=C}function Ft(){let C=W;return C>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,C}function J(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ht(C,M){let k=n.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let st=C.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,C,M);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function yt(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){oe(k,C,M);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function bt(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){oe(k,C,M);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function mt(C,M){let k=n.get(C);if(C.version>0&&k.__version!==C.version){Z(k,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}let Dt={[Bl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},xe={[dn]:r.NEAREST,[Yp]:r.NEAREST_MIPMAP_NEAREST,[fa]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},Et={[Kp]:r.NEVER,[nf]:r.ALWAYS,[Qp]:r.LESS,[tf]:r.LEQUAL,[jp]:r.EQUAL,[ef]:r.GEQUAL,[tm]:r.GREATER,[em]:r.NOTEQUAL};function Ht(C,M){if(M.type===Oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===gc||M.magFilter===fa||M.magFilter===dr||M.minFilter===On||M.minFilter===gc||M.minFilter===fa||M.minFilter===dr)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Dt[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Dt[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Dt[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,xe[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==fa&&M.minFilter!==dr||M.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function It(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",L),R(M));let st=M.source,it=f.get(st);it===void 0&&(it={},f.set(st,it));let ct=J(M);if(ct!==C.__cacheKey){it[ct]===void 0&&(it[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[ct].usedTimes++;let gt=it[C.__cacheKey];gt!==void 0&&(it[C.__cacheKey].usedTimes--,gt.usedTimes===0&&U(M)),C.__cacheKey=ct,C.__webglTexture=it[ct].texture}return k}function Ut(C,M,k){return Math.floor(Math.floor(C/k)/M)}function ce(C,M,k,st){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,st,M.data);else{ct.sort((D,K)=>D.start-K.start);let gt=0;for(let D=1;D<ct.length;D++){let K=ct[gt],$=ct[D],ft=K.start+K.count,at=Ut($.start,M.width,4),dt=Ut(K.start,M.width,4);$.start<=ft+1&&at===dt&&Ut($.start+$.count-1,M.width,4)===at?K.count=Math.max(K.count,$.start+$.count-K.start):(++gt,ct[gt]=$)}ct.length=gt+1;let G=e.getParameter(r.UNPACK_ROW_LENGTH),Q=e.getParameter(r.UNPACK_SKIP_PIXELS),lt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let D=0,K=ct.length;D<K;D++){let $=ct[D],ft=Math.floor($.start/4),at=Math.ceil($.count/4),dt=ft%M.width,ot=Math.floor(ft/M.width),pt=at,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ot),e.texSubImage2D(r.TEXTURE_2D,0,dt,ot,pt,rt,k,st,M.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,G),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function oe(C,M,k){let st=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=r.TEXTURE_3D);let it=It(C,M),ct=M.source;e.bindTexture(st,C.__webglTexture,r.TEXTURE0+k);let gt=n.get(ct);if(ct.version!==gt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let rt=ne.getPrimaries(ne.workingColorSpace),tt=M.colorSpace===mr?null:ne.getPrimaries(M.colorSpace),_t=M.colorSpace===mr||rt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=v(M.image,!1,i.maxTextureSize);Q=Lt(M,Q);let lt=s.convert(M.format,M.colorSpace),D=s.convert(M.type),K=E(M.internalFormat,lt,D,M.normalized,M.colorSpace,M.isVideoTexture);Ht(st,M);let $,ft=M.mipmaps,at=M.isVideoTexture!==!0,dt=gt.__version===void 0||it===!0,ot=ct.dataReady,pt=y(M,Q);if(M.isDepthTexture)K=g(M.format===pr,M.type),dt&&(at?e.texStorage2D(r.TEXTURE_2D,1,K,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,K,Q.width,Q.height,0,lt,D,null));else if(M.isDataTexture)if(ft.length>0){at&&dt&&e.texStorage2D(r.TEXTURE_2D,pt,K,ft[0].width,ft[0].height);for(let rt=0,tt=ft.length;rt<tt;rt++)$=ft[rt],at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,lt,D,$.data):e.texImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,lt,D,$.data);M.generateMipmaps=!1}else at?(dt&&e.texStorage2D(r.TEXTURE_2D,pt,K,Q.width,Q.height),ot&&ce(M,Q,lt,D)):e.texImage2D(r.TEXTURE_2D,0,K,Q.width,Q.height,0,lt,D,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,K,ft[0].width,ft[0].height,Q.depth);for(let rt=0,tt=ft.length;rt<tt;rt++)if($=ft[rt],M.format!==Fi)if(lt!==null)if(at){if(ot)if(M.layerUpdates.size>0){let _t=hf($.width,$.height,M.format,M.type);for(let et of M.layerUpdates){let Tt=$.data.subarray(et*_t/$.data.BYTES_PER_ELEMENT,(et+1)*_t/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,et,$.width,$.height,1,lt,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,Q.depth,lt,$.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,K,$.width,$.height,Q.depth,0,$.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,Q.depth,lt,D,$.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,K,$.width,$.height,Q.depth,0,lt,D,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{at&&dt&&e.texStorage2D(r.TEXTURE_2D,pt,K,ft[0].width,ft[0].height);for(let rt=0,tt=ft.length;rt<tt;rt++)$=ft[rt],M.format!==Fi?lt!==null?at?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,lt,$.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,$.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,lt,D,$.data):e.texImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,lt,D,$.data)}else if(M.isDataArrayTexture)if(at){if(dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,K,Q.width,Q.height,Q.depth),ot)if(M.layerUpdates.size>0){let rt=hf(Q.width,Q.height,M.format,M.type);for(let tt of M.layerUpdates){let _t=Q.data.subarray(tt*rt/Q.data.BYTES_PER_ELEMENT,(tt+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,Q.width,Q.height,1,lt,D,_t)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,D,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,K,Q.width,Q.height,Q.depth,0,lt,D,Q.data);else if(M.isData3DTexture)at?(dt&&e.texStorage3D(r.TEXTURE_3D,pt,K,Q.width,Q.height,Q.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,D,Q.data)):e.texImage3D(r.TEXTURE_3D,0,K,Q.width,Q.height,Q.depth,0,lt,D,Q.data);else if(M.isFramebufferTexture){if(dt)if(at)e.texStorage2D(r.TEXTURE_2D,pt,K,Q.width,Q.height);else{let rt=Q.width,tt=Q.height;for(let _t=0;_t<pt;_t++)e.texImage2D(r.TEXTURE_2D,_t,K,rt,tt,0,lt,D,null),rt>>=1,tt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(M),rt.onpaint=tt=>{let _t=tt.changedElements;for(let et of d)_t.includes(et.image)&&(et.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let _t=r.RGBA,et=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_t,et,Tt,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(at&&dt){let rt=Bt(ft[0]);e.texStorage2D(r.TEXTURE_2D,pt,K,rt.width,rt.height)}for(let rt=0,tt=ft.length;rt<tt;rt++)$=ft[rt],at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,lt,D,$):e.texImage2D(r.TEXTURE_2D,rt,K,lt,D,$);M.generateMipmaps=!1}else if(at){if(dt){let rt=Bt(Q);e.texStorage2D(r.TEXTURE_2D,pt,K,rt.width,rt.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,D,Q)}else e.texImage2D(r.TEXTURE_2D,0,K,lt,D,Q);w(M)&&M.mipmapsAutoUpdate===!0&&S(st),gt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Z(C,M,k){if(M.image.length!==6)return;let st=It(C,M),it=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);let ct=n.get(it);if(it.version!==ct.__version||st===!0){e.activeTexture(r.TEXTURE0+k);let gt=ne.getPrimaries(ne.workingColorSpace),G=M.colorSpace===mr?null:ne.getPrimaries(M.colorSpace),Q=M.colorSpace===mr||gt===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,K=[];for(let et=0;et<6;et++)!lt&&!D?K[et]=v(M.image[et],!0,i.maxCubemapSize):K[et]=D?M.image[et].image:M.image[et],K[et]=Lt(M,K[et]);let $=K[0],ft=s.convert(M.format,M.colorSpace),at=s.convert(M.type),dt=E(M.internalFormat,ft,at,M.normalized,M.colorSpace),ot=M.isVideoTexture!==!0,pt=ct.__version===void 0||st===!0,rt=it.dataReady,tt=y(M,$);Ht(r.TEXTURE_CUBE_MAP,M);let _t;if(M.isDepthTexture){if(dt=g(M.format===pr,M.type),pt)if(ot)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,dt,$.width,$.height);else for(let et=0;et<6;et++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,$.width,$.height,0,ft,at,null)}else if(lt){ot&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,dt,$.width,$.height);for(let et=0;et<6;et++){_t=K[et].mipmaps;for(let Tt=0;Tt<_t.length;Tt++){let jt=_t[Tt];M.format!==Fi?ft!==null?ot?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,jt.width,jt.height,ft,jt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,dt,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,jt.width,jt.height,ft,at,jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,dt,jt.width,jt.height,0,ft,at,jt.data)}}}else{if(_t=M.mipmaps,ot&&pt){_t.length>0&&tt++;let et=Bt(K[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,dt,et.width,et.height)}for(let et=0;et<6;et++)if(D){ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,K[et].width,K[et].height,ft,at,K[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,K[et].width,K[et].height,0,ft,at,K[et].data);for(let Tt=0;Tt<_t.length;Tt++){let Wt=_t[Tt].image[et].image;ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Wt.width,Wt.height,ft,at,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,dt,Wt.width,Wt.height,0,ft,at,Wt.data)}}else{ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ft,at,K[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,dt,ft,at,K[et]);for(let Tt=0;Tt<_t.length;Tt++){let jt=_t[Tt];ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,ft,at,jt.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,dt,ft,at,jt.image[et])}}}w(M)&&M.mipmapsAutoUpdate===!0&&S(r.TEXTURE_CUBE_MAP),ct.__version=it.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Qt(C,M,k,st,it,ct){let gt=s.convert(k.format,k.colorSpace),G=s.convert(k.type),Q=E(k.internalFormat,gt,G,k.normalized,k.colorSpace),lt=n.get(M),D=n.get(k);if(D.__renderTarget=M,!lt.__hasExternalTextures){let K=Math.max(1,M.width>>ct),$=Math.max(1,M.height>>ct);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,ct,Q,K,$,M.depth,0,gt,G,null):e.texImage2D(it,ct,Q,K,$,0,gt,G,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,D.__webglTexture,0,Vt(M)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,it,D.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(C,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){let st=M.depthTexture,it=st&&st.isDepthTexture?st.type:null,ct=g(M.stencilBuffer,it),gt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ut(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(M),ct,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(M),ct,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ct,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,C)}else{let st=M.textures;for(let it=0;it<st.length;it++){let ct=st[it],gt=s.convert(ct.format,ct.colorSpace),G=s.convert(ct.type),Q=E(ct.internalFormat,gt,G,ct.normalized,ct.colorSpace);ut(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(M),Q,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(M),Q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(C,M,k){let st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(M.depthTexture);it.__renderTarget=M;let ct=st?M.depthTexture.image[0]:M.depthTexture.image;(!it.__webglTexture||ct.width!==M.width||ct.height!==M.height)&&(ct.width=M.width,ct.height=M.height,M.depthTexture.needsUpdate=!0),st?mt(M.depthTexture,0):ht(M.depthTexture,0);let gt=it.__webglTexture,G=Vt(M),Q=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,lt=M.depthTexture.format===pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===hr)ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Q,gt,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Q,gt,0);else if(M.depthTexture.format===pr)ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Q,gt,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Q,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(C){let M=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let st=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=st}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let st=0;st<6;st++)Me(M.__webglFramebuffer[st],C,st);else C.texture.mipmaps.length>0?Me(M.__webglFramebuffer[0],C,0):Me(M.__webglFramebuffer,C,0);else if(k){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=r.createRenderbuffer(),Je(M.__webglDepthbuffer[st],C,!1);else{let it=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ct)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Je(M.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(C,M,k){let st=n.get(C);M!==void 0&&Qt(st.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ie(C)}function Xe(C){let M=C.texture,k=n.get(C),st=n.get(M);C.addEventListener("dispose",N),R(C);let it=C.textures,ct=C.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=M.version,o.memory.textures++),ct){k.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps.length>0){k.__webglFramebuffer[G]=[];for(let Q=0;Q<M.mipmaps.length;Q++)k.__webglFramebuffer[G][Q]=r.createFramebuffer()}else k.__webglFramebuffer[G]=r.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)k.__webglFramebuffer[G]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(gt)for(let G=0,Q=it.length;G<Q;G++){let lt=n.get(it[G]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<it.length;G++){let Q=it[G];k.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[G]);let lt=s.convert(Q.format,Q.colorSpace),D=s.convert(Q.type),K=E(Q.internalFormat,lt,D,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),$=Vt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,K,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,k.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Qt(k.__webglFramebuffer[G][Q],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,Q);else Qt(k.__webglFramebuffer[G],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);w(M)?S(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let G=0,Q=it.length;G<Q;G++){let lt=it[G],D=n.get(lt),K=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,D.__webglTexture),Ht(K,lt),Qt(k.__webglFramebuffer,C,lt,r.COLOR_ATTACHMENT0+G,K,0),w(lt)&&S(K)}e.unbindTexture()}else{let G=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(G=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(G,st.__webglTexture),Ht(G,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Qt(k.__webglFramebuffer[Q],C,M,r.COLOR_ATTACHMENT0,G,Q);else Qt(k.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,G,0);w(M)?S(G):M.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ie(C)}function F(C){let M=C.textures;for(let k=0,st=M.length;k<st;k++){let it=M[k];if(w(it)&&it.mipmapsAutoUpdate===!0){let ct=T(C),gt=n.get(it).__webglTexture;e.bindTexture(ct,gt),S(ct),e.unbindTexture()}}}let de=[];function ae(C){if(C.samples>0){if(ut(C)===!1){let M=C.textures,k=C.width,st=C.height,it=r.COLOR_BUFFER_BIT,ct=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(C),G=M.length>1;if(G)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[lt]);let D=n.get(M[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,k,st,0,0,k,st,it,r.NEAREST),l===!0&&(de.length=0,de.push(r.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&de.push(ct),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[lt]);let D=n.get(M[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,D,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Vt(C){return Math.min(i.maxSamples,C.samples)}function ut(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Lt(C,M){let k=C.colorSpace,st=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Jo&&k!==mr&&(ne.getTransfer(k)===ge?(st!==Fi||it!==fi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",k)),M}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=P,this.getTextureUnits=nt,this.setTextureUnits=St,this.setTexture2D=ht,this.setTexture2DArray=yt,this.setTexture3D=bt,this.setTextureCube=mt,this.rebindTextures=ze,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ut,this.dispose=z}function VM(r,t){function e(n,i=mr){let s,o=ne.getTransfer(i);if(n===fi)return r.UNSIGNED_BYTE;if(n===xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return r.BYTE;if(n===Yu)return r.SHORT;if(n===_o)return r.UNSIGNED_SHORT;if(n===_c)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===$u)return r.ALPHA;if(n===Ku)return r.RGB;if(n===Fi)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===Qu)return r.RED;if(n===yc)return r.RED_INTEGER;if(n===Hr)return r.RG;if(n===Sc)return r.RG_INTEGER;if(n===Mc)return r.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===wc||n===Ec)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===_a||n===Lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ac||n===Cc)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return s.COMPRESSED_R11_EAC;if(n===Ic)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return s.COMPRESSED_RG11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Oc||n===Uc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yc)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===xa||n===Qc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$c)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:GM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wi(new aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends Gi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Tf,_={},v=e.getContextAttributes(),w=null,S=null,T=[],E=[],g=new ue,y=null,R=null,A=new Nn;A.viewport=new Oe;let L=new Nn;L.viewport=new Oe;let N=[A,L],V=new fc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=T[J];return ht===void 0&&(ht=new ao,T[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=T[J];return ht===void 0&&(ht=new ao,T[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=T[J];return ht===void 0&&(ht=new ao,T[J]=ht),ht.getHandSpace()};function H(J){let ht=E.indexOf(J.inputSource);if(ht===-1)return;let yt=T[ht];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||o),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",j);for(let J=0;J<T.length;J++){let ht=E[J];ht!==null&&(E[J]=null,T[J].disconnect(ht))}I=null,z=null,m.reset();for(let J in _)delete _[J];if(t.setRenderTarget(w),f=null,u=null,d=null,i=null,S=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(g.width,g.height,!1),R!==null){let J=R.camera;J.fov=R.fov,J.zoom=R.zoom,J.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",U),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?pr:hr,bt=v.stencil?gs:Ni);let Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new ci(u.textureWidth,u.textureHeight,{format:Fi,type:fi,depthTexture:new fr(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ci(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let ht=0;ht<J.removed.length;ht++){let yt=J.removed[ht],bt=E.indexOf(yt);bt>=0&&(E[bt]=null,T[bt].disconnect(yt))}for(let ht=0;ht<J.added.length;ht++){let yt=J.added[ht],bt=E.indexOf(yt);if(bt===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=E.length){E.push(yt),bt=Dt;break}else if(E[Dt]===null){E[Dt]=yt,bt=Dt;break}if(bt===-1)break}let mt=T[bt];mt&&mt.connect(yt)}}function W(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ht=J.near,yt=J.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),V.near=L.near=A.near=ht,V.far=L.far=A.far=yt,(I!==V.near||z!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,z=V.far),V.layers.mask=J.layers.mask|6,A.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let bt=J.parent,mt=V.cameras;W(V,bt);for(let Dt=0;Dt<mt.length;Dt++)W(mt[Dt],bt);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&J.isPerspectiveCamera&&(R={camera:J,fov:J.fov,zoom:J.zoom}),P(J,V,bt)};function P(J,ht,yt){yt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(J){return _[J]};let nt=null;function St(J,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let bt=!1;yt.length!==V.cameras.length&&(V.cameras.length=0,bt=!0);for(let Et=0;Et<yt.length;Et++){let Ht=yt[Et],It=null;if(f!==null)It=f.getViewport(Ht);else{let ce=d.getViewSubImage(u,Ht);It=ce.viewport,Et===0&&(t.setRenderTargetTextures(S,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(S))}let Ut=N[Et];Ut===void 0&&(Ut=new Nn,Ut.layers.enable(Et),Ut.viewport=new Oe,N[Et]=Ut),Ut.matrix.fromArray(Ht.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ht.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(It.x,It.y,It.width,It.height),Et===0&&(V.matrix.copy(Ut.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),bt===!0&&V.cameras.push(Ut)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Et=d.getDepthInformation(yt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,i.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Et=0;Et<yt.length;Et++){let Ht=yt[Et].camera;if(Ht){let It=_[Ht];It||(It=new oa,_[Ht]=It);let Ut=d.getCameraImage(Ht);It.sourceTexture=Ut}}}}for(let yt=0;yt<T.length;yt++){let bt=E[yt],mt=T[yt];bt!==null&&mt!==void 0&&mt.update(bt,ht,c||o)}nt&&nt(J,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let Ft=new Dm;Ft.setAnimationLoop(St),this.setAnimationLoop=function(J){nt=J},this.dispose=function(){}}},WM=new Re,Hm=new Gt;Hm.set(-1,0,0,0,1,0,0,0,1);function XM(r,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,af(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,w,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),d(m,_)):_.isMeshPhongMaterial?(s(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),u(m,_),_.isMeshPhysicalMaterial&&f(m,_,S)):_.isMeshMatcapMaterial?(s(m,_),p(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),x(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,w):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Un&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Un&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let v=t.get(_),w=v.envMap,S=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hm),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,w){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=w*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function u(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function x(m,_){let v=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qM(r,t,e,n){let i={},s={};function o(v,w){let S=w.program;n.uniformBlockBinding(v,S,i[v.id])}function a(v,w){let S=i[v.id];S===void 0&&(p(v),S=l(v),i[v.id]=S,v.addEventListener("dispose",m));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let w=r.createBuffer(),S=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],S=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,g=S.length;E<g;E++){let y=S[E];if(Array.isArray(y))for(let R=0,A=y.length;R<A;R++)h(y[R],E,R,T);else h(y,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,w,S,T){if(u(v,w,S,T)===!0){let E=v.__offset,g=v.value;if(Array.isArray(g)){let y=0;for(let R=0;R<g.length;R++){let A=g[R],L=x(A,!0);d(A,v.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function u(v,w,S,T){let E=v.value,g=w+"_"+S;if(Array.isArray(E)){T[g]===void 0&&(T[g]=[]);let y=T[g],R=!1;for(let A=0;A<E.length;A++)f(E[A],y,A)===!0&&(R=!0);return R}return f(E,T,g)}function f(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let T=w[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let w=v.uniforms,S=0,T=16;for(let g=0,y=w.length;g<y;g++){let R=Array.isArray(w[g])?w[g]:[w[g]];for(let A=0,L=R.length;A<L;A++){let N=R[A],V=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(w[g])||Array.isArray(N.value),z=S;for(let U=0,j=V.length;U<j;U++){let W=V[U],P=x(W,I),nt=S%T,St=nt%P.boundary,Ft=nt+St;S+=St,Ft!==0&&T-Ft<P.storage&&(S+=T-Ft),U===0&&(z=S),S+=P.storage}let H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((S-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let E=S%T;return E>0&&(S+=T-E),v.__size=S,v.__cache={},this}function x(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let w=v.target;w.removeEventListener("dispose",m),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:o,update:a,dispose:_}}var YM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function ZM(){return Yi===null&&(Yi=new ql(YM,16,16,Hr,Ui),Yi.name="DFG_LUT",Yi.minFilter=On,Yi.magFilter=On,Yi.wrapS=Vi,Yi.wrapT=Vi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var nh=class{constructor(t={}){let{canvas:e=im(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Mc,Sc,yc]),_=new Set([fi,Ni,_o,gs,xc,vc]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,E=null,g=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,N=null,V=null,I=null,z=null;this._outputColorSpace=ai;let H=0,U=0,j=null,W=-1,P=null,nt=new Oe,St=new Oe,Ft=null,J=new Yt(0),ht=0,yt=e.width,bt=e.height,mt=1,Dt=null,xe=null,Et=new Oe(0,0,yt,bt),Ht=new Oe(0,0,yt,bt),It=!1,Ut=new fs,ce=new Yl,oe=!1,Z=!1,Qt=new Re,Je=new q,Me=new Oe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Xe(){return j===null?mt:1}let F=n;function de(b,O){return e.getContext(b,O)}let ae,Vt,ut,he,Lt,Bt,C,M,k,st,it,ct,gt,G,Q,lt,D,K,$,ft,at,dt,ot;try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",et,!1),F===null){let O="webgl2";if(F=de(O,b),F===null)throw de(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(b){throw e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",et,!1),kt("WebGLRenderer: "+b.message),b}function pt(){ae=new sS(F),ae.init(),at=new VM(F,ae),Vt=new Zy(F,ae,t,at),ut=new zM(F,ae),Vt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),V=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),he=new lS(F),Lt=new wM,Bt=new kM(F,ae,ut,Lt,Vt,at,he),C=new rS(A),M=new hx(F),dt=new qy(F,M),k=new oS(F,M,he,dt),st=new hS(F,k,M,dt,he),K=new cS(F,Vt,Bt),Q=new Jy(Lt),it=new TM(A,C,ae,Vt,dt,Q),ct=new XM(A,Lt),gt=new AM,G=new DM(ae),D=new Xy(A,C,ut,st,p,l),lt=new BM(A,st,Vt),ot=new qM(F,he,Vt,ut),$=new Yy(F,ae,he),ft=new aS(F,ae,he),he.programs=it.programs,A.capabilities=Vt,A.extensions=ae,A.properties=Lt,A.renderLists=gt,A.shadowMap=lt,A.state=ut,A.info=he}x!==fi&&(R=new fS(x,e.width,e.height,a,i,s));let rt=new wf(A,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(yt,bt,!1))},this.getSize=function(b){return b.set(yt,bt)},this.setSize=function(b,O,Y=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=b,bt=O,e.width=Math.floor(b*mt),e.height=Math.floor(O*mt),Y===!0&&(e.style.width=b+"px",e.style.height=O+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(yt*mt,bt*mt).floor()},this.setDrawingBufferSize=function(b,O,Y){yt=b,bt=O,mt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(x===fi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,O,Y,B){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,O,Y,B),ut.viewport(nt.copy(Et).multiplyScalar(Xe()).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,O,Y,B){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,O,Y,B),ut.scissor(St.copy(Ht).multiplyScalar(Xe()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(b){ut.setScissorTest(It=b)},this.setOpaqueSort=function(b){Dt=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let B=0;if(b){let X=!1;if(j!==null){let vt=j.texture.format;X=m.has(vt)}if(X){let vt=j.texture.type,Ct=_.has(vt),xt=D.getClearColor(),wt=D.getClearAlpha(),Nt=xt.r,Xt=xt.g,te=xt.b;Ct?(v[0]=Nt,v[1]=Xt,v[2]=te,v[3]=wt,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Nt,w[1]=Xt,w[2]=te,w[3]=wt,F.clearBufferiv(F.COLOR,0,w))}else B|=F.COLOR_BUFFER_BIT}O&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",et,!1),D.dispose(),gt.dispose(),G.dispose(),Bt.dispose(),Lt.dispose(),C.dispose(),st.dispose(),k.dispose(),dt.dispose(),ot.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",be),rt.removeEventListener("sessionend",me),nn.stop()};function tt(b){b.preventDefault(),sf("WebGLRenderer: Context Lost."),L=!0}function _t(){sf("WebGLRenderer: Context Restored."),L=!1;let b=he.autoReset,O=lt.enabled,Y=lt.autoUpdate,B=lt.needsUpdate,X=lt.type;pt(),he.autoReset=b,lt.enabled=O,lt.autoUpdate=Y,lt.needsUpdate=B,lt.type=X}function et(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let O=b.target;O.removeEventListener("dispose",Tt),jt(O)}function jt(b){Wt(b),Lt.remove(b)}function Wt(b){let O=Lt.get(b).programs;O!==void 0&&(O.forEach(function(Y){it.releaseProgram(Y)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,B,X,vt){O===null&&(O=ie);let Ct=X.isMesh&&X.matrixWorld.determinantAffine()<0,xt=Si(b,O,Y,B,X);ut.setMaterial(B,Ct);let wt=Y.index,Nt=1;if(B.wireframe===!0){if(wt=k.getWireframeAttribute(Y),wt===void 0)return;Nt=2}let Xt=Y.drawRange,te=Y.attributes.position,Rt=Xt.start*Nt,ee=(Xt.start+Xt.count)*Nt;vt!==null&&(Rt=Math.max(Rt,vt.start*Nt),ee=Math.min(ee,(vt.start+vt.count)*Nt)),wt!==null?(Rt=Math.max(Rt,0),ee=Math.min(ee,wt.count)):te!=null&&(Rt=Math.max(Rt,0),ee=Math.min(ee,te.count));let Qe=ee-Rt;if(Qe<0||Qe===1/0)return;dt.setup(X,B,xt,Y,wt);let Ae,we=$;if(wt!==null&&(Ae=M.get(wt),we=ft,we.setIndex(Ae)),X.isMesh)B.wireframe===!0?(ut.setLineWidth(B.wireframeLinewidth*Xe()),we.setMode(F.LINES)):we.setMode(F.TRIANGLES);else if(X.isLine){let Sn=B.linewidth;Sn===void 0&&(Sn=1),ut.setLineWidth(Sn*Xe()),X.isLineSegments?we.setMode(F.LINES):X.isLineLoop?we.setMode(F.LINE_LOOP):we.setMode(F.LINE_STRIP)}else X.isPoints?we.setMode(F.POINTS):X.isSprite&&we.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))we.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Sn=X._multiDrawStarts,Pt=X._multiDrawCounts,Dn=X._multiDrawCount,pe=wt?M.get(wt).bytesPerElement:1,ss=Lt.get(B).currentProgram.getUniforms();for(let Mn=0;Mn<Dn;Mn++)ss.setValue(F,"_gl_DrawID",Mn),we.render(Sn[Mn]/pe,Pt[Mn])}else if(X.isInstancedMesh)we.renderInstances(Rt,Qe,X.count);else if(Y.isInstancedBufferGeometry){let Sn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pt=Math.min(Y.instanceCount,Sn);we.renderInstances(Rt,Qe,Pt)}else we.render(Rt,Qe)};function Pe(b,O,Y,B){N!==null&&b.isNodeMaterial&&N.setObject(B,b),oe===!0&&Q.setState(b,Y,!1),b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=Un,b.needsUpdate=!0,ri(b,O,B),b.side=Gr,b.needsUpdate=!0,ri(b,O,B),b.side=Xi):ri(b,O,B)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),N!==null&&N.renderStart(b,O,Y),E=G.get(Y),E.init(O),y.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Z=this.localClippingEnabled,oe=Q.init(this.clippingPlanes,Z),oe===!0&&Q.setGlobalState(this.clippingPlanes,O),N!==null&&lt.render(E.state.shadowsArray,Y,O);let B=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let vt=X.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let xt=vt[Ct];Pe(xt,Y,O,X),B.add(xt)}else Pe(vt,Y,O,X),B.add(vt)}),E=y.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(b,O,Y=null){let B=this.compile(b,O,Y);return new Promise(X=>{function vt(){if(B.forEach(function(Ct){let wt=Lt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&B.delete(Ct)}),B.size===0){X(b);return}setTimeout(vt,10)}ae.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let $e=null;function Ie(b){$e&&$e(b)}function be(){nn.stop()}function me(){nn.start()}let nn=new Dm;nn.setAnimationLoop(Ie),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){$e=b,rt.setAnimationLoop(b),b===null?nn.stop():nn.start()},rt.addEventListener("sessionstart",be),rt.addEventListener("sessionend",me),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(b,O);let Y=rt.enabled===!0&&rt.isPresenting===!0,B=R!==null&&(j===null||Y)&&R.begin(A,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,O,j),E=G.get(b,y.length),E.init(O),E.state.textureUnits=Bt.getTextureUnits(),y.push(E),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ce.setFromArrayCamera(O):Ut.setFromProjectionMatrix(Qt,bi,O.reversedDepth),Z=this.localClippingEnabled,oe=Q.init(this.clippingPlanes,Z),T=gt.get(b,g.length),T.init(),g.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&Te(Ct,O,-1/0,A.sortObjects)}Te(b,O,0,A.sortObjects),T.finish(),N!==null&&N.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(Dt,xe),ze=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ze&&D.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),oe===!0&&Q.beginShadows();let X=E.state.shadowsArray;if(lt.render(X,b,O),oe===!0&&Q.endShadows(),(B&&R.hasRenderPass())===!1){let Ct=T.opaque,xt=T.transmissive;if(E.setupLights(),O.isArrayCamera){let wt=O.cameras;if(xt.length>0)for(let Nt=0,Xt=wt.length;Nt<Xt;Nt++){let te=wt[Nt];ii(Ct,xt,b,te)}ze&&D.render(b);for(let Nt=0,Xt=wt.length;Nt<Xt;Nt++){let te=wt[Nt];yn(T,b,te,te.viewport)}}else xt.length>0&&ii(Ct,xt,b,O),ze&&D.render(b),yn(T,b,O)}j!==null&&U===0&&(Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j)),B&&R.end(A),b.isScene===!0&&b.onAfterRender(A,b,O),dt.resetDefaultState(),W=-1,P=null,y.pop(),y.length>0?(E=y[y.length-1],Bt.setTextureUnits(E.state.textureUnits),oe===!0&&Q.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,N!==null&&N.renderEnd()};function Te(b,O,Y,B){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Ct=O.isArrayCamera?ce:Ut;if(!b.frustumCulled||b.intersectsFrustum(Ct)){B&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qt);let xt=st.update(b),wt=b.material;wt.visible&&T.push(b,xt,wt,Y,Me.z,null,O)}}else if(b.isMesh||b.isLine||b.isPoints){let Ct=O.isArrayCamera?ce:Ut;if(!b.frustumCulled||b.intersectsFrustum(Ct)){let xt=st.update(b),wt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Me.copy(xt.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let Nt=xt.groups;for(let Xt=0,te=Nt.length;Xt<te;Xt++){let Rt=Nt[Xt],ee=wt[Rt.materialIndex];ee&&ee.visible&&T.push(b,xt,ee,Y,Me.z,Rt,O)}}else wt.visible&&T.push(b,xt,wt,Y,Me.z,null,O)}}}let vt=b.children;for(let Ct=0,xt=vt.length;Ct<xt;Ct++)Te(vt[Ct],O,Y,B)}function yn(b,O,Y,B){let{opaque:X,transmissive:vt,transparent:Ct}=b;E.setupLightsView(Y),oe===!0&&Q.setGlobalState(A.clippingPlanes,Y),B&&ut.viewport(nt.copy(B)),X.length>0&&ke(X,O,Y),vt.length>0&&ke(vt,O,Y),Ct.length>0&&ke(Ct,O,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ii(b,O,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Rt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new ci(1,1,{generateMipmaps:!0,type:Rt?Ui:fi,minFilter:dr,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let vt=E.state.transmissionRenderTarget[B.id],Ct=B.viewport||nt;vt.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let xt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Nt=A.getActiveMipmapLevel();A.setRenderTarget(vt),A.getClearColor(J),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),ze&&D.render(Y);let Xt=A.toneMapping;A.toneMapping=qi;let te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),oe===!0&&Q.setGlobalState(A.clippingPlanes,B),ke(b,Y,B),Bt.updateMultisampleRenderTarget(vt),Bt.updateRenderTargetMipmap(vt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ee=0,Qe=O.length;ee<Qe;ee++){let Ae=O[ee],{object:we,geometry:Sn,material:Pt,group:Dn}=Ae;if(Pt.side===Xi&&we.layers.test(B.layers)){let pe=Pt.side;Pt.side=Un,Pt.needsUpdate=!0,Ke(we,Y,B,Sn,Pt,Dn),Pt.side=pe,Pt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Bt.updateMultisampleRenderTarget(vt),Bt.updateRenderTargetMipmap(vt))}A.setRenderTarget(xt,wt,Nt),A.setClearColor(J,ht),te!==void 0&&(B.viewport=te),A.toneMapping=Xt}function ke(b,O,Y){let B=O.isScene===!0?O.overrideMaterial:null;for(let X=0,vt=b.length;X<vt;X++){let Ct=b[X],{object:xt,geometry:wt,group:Nt}=Ct,Xt=Ct.material;Xt.allowOverride===!0&&B!==null&&(Xt=B),xt.layers.test(Y.layers)&&Ke(xt,O,Y,wt,Xt,Nt)}}function Ke(b,O,Y,B,X,vt){N!==null&&X.isNodeMaterial&&N.setObject(b,X),b.onBeforeRender(A,O,Y,B,X,vt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(A,O,Y,B,b,vt),X.transparent===!0&&X.side===Xi&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,A.renderBufferDirect(Y,O,B,X,b,vt),X.side=Gr,X.needsUpdate=!0,A.renderBufferDirect(Y,O,B,X,b,vt),X.side=Xi):A.renderBufferDirect(Y,O,B,X,b,vt),b.onAfterRender(A,O,Y,B,X,vt)}function rn(b){let O=0;for(let Y of b)Y.texture!==null&&O++;return O}function ri(b,O,Y){O.isScene!==!0&&(O=ie);let B=Lt.get(b),X=E.state.lights,vt=E.state.shadowsArray,Ct=X.state.version,xt=it.getParameters(b,X.state,vt,O,Y,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(xt),Nt=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,B.fog=O.fog;let Xt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=C.get(b.envMap||B.environment,Xt),B.envMapRotation=B.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Tt),Nt=new Map,B.programs=Nt,B.programVariants=new Map);let te=Nt.get(wt);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===Ct)return Ve(b,xt),te}else xt.uniforms=it.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Y,xt),b.onBeforeCompile(xt,A),te=it.acquireProgram(xt,wt),Nt.set(wt,te),B.uniforms=xt.uniforms;let Rt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Q.uniform),Ve(b,xt),B.needsLights=il(b),B.lightsStateVersion=Ct,B.needsLights&&(Rt.ambientLightColor.value=X.state.ambient,Rt.lightProbe.value=X.state.probe,Rt.sunLights.value=X.state.sun,Rt.sunLightShadows.value=X.state.sunShadow,Rt.directionalLights.value=X.state.directional,Rt.directionalLightShadows.value=X.state.directionalShadow,Rt.spotLights.value=X.state.spot,Rt.spotLightShadows.value=X.state.spotShadow,Rt.rectAreaLights.value=X.state.rectArea,Rt.ltc_1.value=X.state.rectAreaLTC1,Rt.ltc_2.value=X.state.rectAreaLTC2,Rt.pointLights.value=X.state.point,Rt.pointLightShadows.value=X.state.pointShadow,Rt.hemisphereLights.value=X.state.hemi,Rt.sunShadowMatrix.value=X.state.sunShadowMatrix,Rt.sunShadowCascade.value=X.state.sunShadowCascade,Rt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Rt.spotLightMatrix.value=X.state.spotLightMatrix,Rt.spotLightMap.value=X.state.spotLightMap,Rt.pointShadowMatrix.value=X.state.pointShadowMatrix),B.numLightProbeGrids=rn(E.state.lightProbeGridArray),B.currentProgram=te,B.uniformsList=null,te}function Gs(b,O,Y,B,X){let vt=Lt.get(b),Ct=vt.currentProgram.id+","+B+","+X,xt=vt.programVariants.get(Ct);return xt===void 0?(xt=ri(b,O,Y),vt.programVariants.set(Ct,xt)):(vt.currentProgram=xt,vt.uniformsList=null,vt.outputColorSpace=B,vt.toneMapping=X),xt}function sn(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=xo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ve(b,O){let Y=Lt.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Si(b,O,Y,B,X){O.isScene!==!0&&(O=ie),Bt.resetTextureUnits();let vt=O.fog,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?O.environment:null,xt=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ne.workingColorSpace,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Nt=C.get(B.envMap||Ct,wt),Xt=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,te=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,Qe=!!Y.morphAttributes.color,Ae=qi;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=A.toneMapping);let we=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Sn=we!==void 0?we.length:0,Pt=Lt.get(B),Dn=E.state.lights;if(oe===!0&&(Z===!0||b!==P)){let Ne=b===P&&B.id===W;Q.setState(B,b,Ne)}let pe=!1,ss=!1;B.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Dn.state.version||X.isBatchedMesh&&Pt.batching===!1||!X.isBatchedMesh&&Pt.batching===!0||X.isBatchedMesh&&Pt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pt.instancing===!1||!X.isInstancedMesh&&Pt.instancing===!0||X.isSkinnedMesh&&Pt.skinning===!1||!X.isSkinnedMesh&&Pt.skinning===!0||X.isInstancedMesh&&Pt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pt.instancingMorph===!1&&X.morphTexture!==null||Pt.envMap!==Nt||B.fog===!0&&Pt.fog!==vt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Q.numPlanes||Pt.numIntersection!==Q.numIntersection)||Pt.vertexAlphas!==Xt||Pt.vertexTangents!==te||Pt.morphTargets!==Rt||Pt.morphNormals!==ee||Pt.morphColors!==Qe||Pt.morphTargetsCount!==Sn||Pt.numLightProbeGrids!==rn(E.state.lightProbeGridArray)?pe=!0:(Pt.outputColorSpace!==xt||Pt.toneMapping!==Ae)&&(ss=!0):(pe=!0,Pt.__version=B.version);let Mn=Pt.currentProgram;(pe===!0||ss===!0)&&(Mn=ss===!0?Gs(B,O,X,xt,Ae):ri(B,O,X),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Mn,Pt));let rl=!1,Rr=!1,os=!1,le=Mn.getUniforms(),gn=Pt.uniforms;if(ut.useProgram(Mn.program)&&(rl=!0,Rr=!0,os=!0),B.id!==W&&(W=B.id,Rr=!0),rl||P!==b){ut.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),le.setValue(F,"projectionMatrix",b.projectionMatrix),le.setValue(F,"viewMatrix",b.matrixWorldInverse);let hn=le.map.cameraPosition;hn!==void 0&&hn.setValue(F,Je.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,Rr=!0,os=!0)}if(Pt.needsLights&&(Dn.state.sunShadowMap.length>0&&le.setValue(F,"sunShadowMap",Dn.state.sunShadowMap,Bt),Dn.state.directionalShadowMap.length>0&&le.setValue(F,"directionalShadowMap",Dn.state.directionalShadowMap,Bt),Dn.state.spotShadowMap.length>0&&le.setValue(F,"spotShadowMap",Dn.state.spotShadowMap,Bt),Dn.state.pointShadowMap.length>0&&le.setValue(F,"pointShadowMap",Dn.state.pointShadowMap,Bt)),X.isSkinnedMesh){le.setOptional(F,X,"bindMatrix"),le.setOptional(F,X,"bindMatrixInverse");let Ne=X.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),le.setValue(F,"boneTexture",Ne.boneTexture,Bt))}X.isBatchedMesh&&(le.setOptional(F,X,"batchingTexture"),le.setValue(F,"batchingTexture",X._matricesTexture,Bt),le.setOptional(F,X,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",X._indirectTexture,Bt),le.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",X._colorsTexture,Bt));let Pi=Y.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&K.update(X,Y,Mn),(Rr||Pt.receiveShadow!==X.receiveShadow)&&(Pt.receiveShadow=X.receiveShadow,le.setValue(F,"receiveShadow",X.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=ZM()),Rr){if(le.setValue(F,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&Vo(gn,os),vt&&B.fog===!0&&ct.refreshFogUniforms(gn,vt),ct.refreshMaterialUniforms(gn,B,mt,bt,E.state.transmissionRenderTarget[b.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Ne=S,hn=0;for(let nr of E.state.lightProbeGridArray)nr.texture!==null&&(Ne.textures[hn]=nr.texture,Ne.min[hn]=nr.boundingBox.min,Ne.max[hn]=nr.boundingBox.max,Ne.resolution[hn]=nr.resolution,hn++);for(let nr in Ne)Ne[nr].length=hn;gn.probesSH.value=Ne.textures,gn.probesMin.value=Ne.min,gn.probesMax.value=Ne.max,gn.probesResolution.value=Ne.resolution}xo.upload(F,sn(Pt),gn,Bt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xo.upload(F,sn(Pt),gn,Bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(F,"center",X.center),le.setValue(F,"modelViewMatrix",X.modelViewMatrix),le.setValue(F,"normalMatrix",X.normalMatrix),le.setValue(F,"modelMatrix",X.matrixWorld),B.uniformsGroups!==void 0){let Ne=B.uniformsGroups;for(let hn=0,nr=Ne.length;hn<nr;hn++){let Zd=Ne[hn];ot.update(Zd,Mn),ot.bind(Zd,Mn)}}return Mn}function Vo(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function il(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,O,Y){let B=Lt.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Lt.get(b.texture).__webglTexture=O,Lt.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let Y=Lt.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){j=b,H=O,U=Y;let B=null,X=!1,vt=!1;if(b){let xt=Lt.get(b);if(xt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(F.FRAMEBUFFER,xt.__webglFramebuffer),nt.copy(b.viewport),St.copy(b.scissor),Ft=b.scissorTest,ut.viewport(nt),ut.scissor(St),ut.setScissorTest(Ft),W=-1;return}else if(xt.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(xt.__hasExternalTextures)Bt.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Xt=b.depthTexture;if(xt.__boundDepthTexture!==Xt){if(Xt!==null&&Lt.has(Xt)&&(b.width!==Xt.image.width||b.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);let Nt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?B=Nt[O][Y]:B=Nt[O],X=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?B=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[Y]:B=Nt,nt.copy(b.viewport),St.copy(b.scissor),Ft=b.scissorTest}else nt.copy(Et).multiplyScalar(mt).floor(),St.copy(Ht).multiplyScalar(mt).floor(),Ft=It;if(Y!==0&&(B=V),ut.bindFramebuffer(F.FRAMEBUFFER,B)&&ut.drawBuffers(b,B),ut.viewport(nt),ut.scissor(St),ut.setScissorTest(Ft),X){let xt=Lt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,Y)}else if(vt){let xt=O;for(let wt=0;wt<b.textures.length;wt++){let Nt=Lt.get(b.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,Y,xt)}}else if(b!==null&&Y!==0){let xt=Lt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,Y)}W=-1};function Cr(b){let O=Lt.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=Vt.textureFormatReadable(b.format),O.__typeReadable=Vt.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Y,B,X,vt,Ct,xt=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){ut.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Nt=b.textures[xt],Xt=Nt.format,te=Nt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let Rt=Cr(Nt);if(Rt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-B&&Y>=0&&Y<=b.height-X&&F.readPixels(O,Y,B,X,at.convert(Xt),at.convert(te),vt)}finally{let Nt=j!==null?Lt.get(j).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,B,X,vt,Ct,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(O>=0&&O<=b.width-B&&Y>=0&&Y<=b.height-X){ut.bindFramebuffer(F.FRAMEBUFFER,wt);let Nt=b.textures[xt],Xt=Nt.format,te=Nt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let Rt=Cr(Nt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(O,Y,B,X,at.convert(Xt),at.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Qe=j!==null?Lt.get(j).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Qe);let Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sm(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Ae),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){let B=Math.pow(2,-Y),X=Math.floor(b.image.width*B),vt=Math.floor(b.image.height*B),Ct=O!==null?O.x:0,xt=O!==null?O.y:0;Bt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ct,xt,X,vt),ut.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,B=null,X=0,vt=0){let Ct,xt,wt,Nt,Xt,te,Rt,ee,Qe,Ae=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(Y!==null)Ct=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Xt=Y.min.y,te=Y.isBox3?Y.min.z:0;else{let le=Math.pow(2,-X);Ct=Math.floor(Ae.width*le),xt=Math.floor(Ae.height*le),b.isDataArrayTexture?wt=Ae.depth:b.isData3DTexture?wt=Math.floor(Ae.depth*le):wt=1,Nt=0,Xt=0,te=0}B!==null?(Rt=B.x,ee=B.y,Qe=B.z):(Rt=0,ee=0,Qe=0);let we=at.convert(O.format),Sn=at.convert(O.type),Pt;O.isData3DTexture?(Bt.setTexture3D(O,0),Pt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),Pt=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),Pt=F.TEXTURE_2D),ut.activeTexture(F.TEXTURE0),ut.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),ut.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ut.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Dn=ut.getParameter(F.UNPACK_ROW_LENGTH),pe=ut.getParameter(F.UNPACK_IMAGE_HEIGHT),ss=ut.getParameter(F.UNPACK_SKIP_PIXELS),Mn=ut.getParameter(F.UNPACK_SKIP_ROWS),rl=ut.getParameter(F.UNPACK_SKIP_IMAGES);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Rr=b.isDataArrayTexture||b.isData3DTexture,os=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let le=Lt.get(b),gn=Lt.get(O),Pi=Lt.get(le.__renderTarget),Ne=Lt.get(gn.__renderTarget);ut.bindFramebuffer(F.READ_FRAMEBUFFER,Pi.__webglFramebuffer),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let hn=0;hn<wt;hn++)Rr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,X,te+hn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(O).__webglTexture,vt,Qe+hn)),F.blitFramebuffer(Nt,Xt,Nt+Ct,Xt+xt,Rt,ee,Rt+Ct,ee+xt,F.DEPTH_BUFFER_BIT,F.NEAREST);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Lt.has(b)){let le=Lt.get(b),gn=Lt.get(O);ut.bindFramebuffer(F.READ_FRAMEBUFFER,I),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Pi=0;Pi<wt;Pi++)Rr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,X,te+Pi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,X),os?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,vt,Qe+Pi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,vt),X!==0?F.blitFramebuffer(Nt,Xt,Nt+Ct,Xt+xt,Rt,ee,Rt+Ct,ee+xt,F.COLOR_BUFFER_BIT,F.NEAREST):os?F.copyTexSubImage3D(Pt,vt,Rt,ee,Qe+Pi,Nt,Xt,Ct,xt):F.copyTexSubImage2D(Pt,vt,Rt,ee,Nt,Xt,Ct,xt);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else os?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,we,Sn,Ae.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,we,Ae.data):F.texSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,we,Sn,Ae):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Rt,ee,Ct,xt,we,Sn,Ae.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Rt,ee,Ae.width,Ae.height,we,Ae.data):F.texSubImage2D(F.TEXTURE_2D,vt,Rt,ee,Ct,xt,we,Sn,Ae);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Dn),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,ss),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,rl),vt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),ut.unbindTexture()},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),ut.unbindTexture()},this.resetState=function(){H=0,U=0,j=null,ut.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};function gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ra={duration:.5,overwrite:!1,delay:0},Vf,_n,Le,wi=1e8,ye=1/wi,Df=Math.PI*2,JM=Df/4,$M=0,tg=Math.sqrt,KM=Math.cos,QM=Math.sin,ln=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},xr=function(t){return typeof t=="number"},gh=function(t){return typeof t>"u"},Ki=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},Gf=function(){return typeof window<"u"},sh=function(t){return Ge(t)||ln(t)},eg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,jM=/random\([^)]+\)/g,tb=/,\s*/g,Xm=/(?:-?\.?\d|\.)+/gi,Hf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ef=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wf=/[+-]=-?[.\d]+/,eb=/[^,'"\[\]\s]+/gi,nb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Ji,Nf,Xf,pi={},ch={},ng,ig=function(t){return(ch=So(t,pi))&&Cn},_h=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Pa=function(t,e){return!e&&console.warn(t)},rg=function(t,e){return t&&(pi[t]=e)&&ch&&(ch[t]=e)||pi},Ia=function(){return 0},ib={suppressEvents:!0,isStart:!0,kill:!1},oh={suppressEvents:!0,kill:!1},rb={suppressEvents:!0},qf={},Xr=[],Of={},sg,Jn={},Af={},qm=30,ah=[],Yf="",Zf=function(t){var e=t[0],n,i;if(Ki(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ah.length;i--&&!ah[i].targetTest(e););n=ah[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Qf(t[i],n)))||t.splice(i,1);return t},qr=function(t){return t._gsap||Zf(Ei(t))[0]._gsap},Jf=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():gh(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hh=function(){var t=Xr.length,e=Xr.slice(0),n,i;for(Of={},Xr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$f=function(t){return!!(t._initted||t._startAt||t.add)},og=function(t,e,n,i){Xr.length&&!_n&&hh(),t.render(e,n,i||!!(_n&&e<0&&$f(t))),Xr.length&&!_n&&hh()},ag=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(eb).length<2?e:ln(t)?t.trim():t},lg=function(t){return t},mi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ob=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},So=function(t,e){for(var n in e)t[n]=e[n];return t},Ym=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ki(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},uh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ea=function(t){var e=t.parent||Fe,n=t.keyframes?ob(An(t.keyframes)):mi;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ab=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},cg=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Yr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},lb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uf=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(oh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},cb=function r(t){return!t||t._ts&&r(t.parent)},Zm=function(t){return t._repeat?Mo(t._tTime,t=t.duration()+t._rDelay)*t:0},Mo=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},fh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vh=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},yh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vh(t),n._dirty||xs(n,t)),t},hg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fh(t.rawTime(),e),(!e._dur||Oa(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},$i=function(t,e,n,i){return e.parent&&Yr(e),e._start=Ue((xr(n)?n:!n&&dh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Fe?Ti(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cg(t,e,"_first","_last",t._sort?"_start":0),dh(e)||(t._recent=e),i||hg(t,e),t._ts<0&&yh(t,t._tTime),t},ug=function(t,e){return(pi.ScrollTrigger||_h("scrollTrigger",e))&&pi.ScrollTrigger.create(e,t)},fg=function(t,e,n,i,s){if(ed(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&sg!==$n.frame)return Xr.push(t),t._lazy=[s,i],1},hb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ub=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&hb(t)&&!(!t._initted&&dh(t))||(t._ts<0||t._dp._ts<0)&&!dh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Oa(0,t._tDur,e),h=Mo(l,a),t._yoyo&&h&1&&(o=1-o),h!==Mo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||_n||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&fg(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uf(t,e,n,!0),t._onUpdate&&!n&&di(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&di(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Yr(t,1),!n&&!_n&&(di(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},bo=function(t,e,n,i){var s=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ue(o*(s+1)+t._rDelay*s):o,a>0&&!i&&yh(t,t._tTime=t._tDur*a),t.parent&&vh(t),n||xs(t.parent,t),t},Jm=function(t){return t instanceof En?xs(t):bo(t,t._dur)},db={_start:0,endTime:Ia,totalDuration:Ia},Ti=function r(t,e,n){var i=t.labels,s=t._recent||db,o=t.duration()>=wi?s.endTime(!1):t._dur,a,l,c;return ln(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Aa=function(t,e,n){var i=xr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Zr=function(t,e){return t||t===0?e(t):e},Oa=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!ln(t)||!(e=nb.exec(t))?"":e[1]},pb=function(t,e,n){return Zr(n,function(i){return Oa(t,e,i)})},Ff=[].slice,dg=function(t,e){return t&&Ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ki(t[0]))&&!t.nodeType&&t!==Ji},mb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ln(i)&&!e||dg(i,1)?(s=n).push.apply(s,Ei(i)):n.push(i)})||n},Ei=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):ln(t)&&!n&&(Nf||!To())?Ff.call((e||Xf).querySelectorAll(t),0):An(t)?mb(t,n):dg(t)?Ff.call(t,0):t?[t]:[]},Bf=function(t){return t=Ei(t)[0]||Pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ei(e,n.querySelectorAll?n:n===t?Pa("Invalid scope")||Xf.createElement("div"):t)}},pg=function(t){return t.sort(function(){return .5-Math.random()})},mg=function(t){if(Ge(t))return t;var e=Ki(t)?t:{each:t},n=vs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return ln(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var x=(p||e).length,m=o[x],_,v,w,S,T,E,g,y,R;if(!m){if(R=e.grid==="auto"?0:(e.grid||[1,wi])[1],!R){for(g=-wi;g<(g=p[R++].getBoundingClientRect().left)&&R<x;);R<x&&R--}for(m=o[x]=[],_=l?Math.min(R,x)*h-.5:i%R,v=R===wi?0:l?x*d/R-.5:i/R|0,g=0,y=wi,E=0;E<x;E++)w=E%R-_,S=v-(E/R|0),m[E]=T=c?Math.abs(c==="y"?S:w):tg(w*w+S*S),T>g&&(g=T),T<y&&(y=T);i==="random"&&pg(m),m.max=g-y,m.min=y,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(R>x?x-1:c?c==="y"?x/R:R:Math.max(R,x/R))||0)*(i==="edges"?-1:1),m.b=x<0?s-x:s,m.u=xn(e.amount||e.each)||0,n=n&&x<0?Cb(n):n}return x=(m[u]-m.min)/m.max||0,Ue(m.b+(n?n(x):x)*m.v)+m.u}},zf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(xr(n)?0:xn(n))}},gg=function(t,e){var n=An(t),i,s;return!n&&Ki(t)&&(i=n=t.radius||wi,t.values?(t=Ei(t.values),(s=!xr(t[0]))&&(i*=i)):t=zf(t.increment)),Zr(e,n?Ge(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||xr(o)?h:h+xn(o)}:zf(t))},_g=function(t,e,n,i){return Zr(An(t)?!e:n===!0?!!(n=0):!i,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},gb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},_b=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},xb=function(t,e,n){return vg(t,e,0,1,n)},xg=function(t,e,n){return Zr(n,function(i){return t[~~e(i)]})},vb=function r(t,e,n){var i=e-t;return An(t)?xg(t,r(0,t.length),e):Zr(n,function(s){return(i+(s-t)%i)%i+t})},yb=function r(t,e,n){var i=e-t,s=i*2;return An(t)?xg(t,r(0,t.length-1),e):Zr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},wo=function(t){return t.replace(jM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(tb);return _g(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},vg=function(t,e,n,i,s){var o=e-t,a=i-n;return Zr(s,function(l){return n+((l-t)/o*a||0)})},Sb=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=ln(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var x=Math.min(u,~~p);return h[x](p-x)},n=e}else i||(t=So(An(t)?[]:{},t));if(!h){for(l in e)jf.call(a,t,l,"get",e[l]);s=function(p){return rd(p,a)||(o?t.p:t)}}}return Zr(n,s)},$m=function(t,e,n){var i=t.labels,s=wi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},di=function(t,e,n){var i=t.vars,s=i[e],o=Le,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Xr.length&&hh(),a&&(Le=a),h=l?s.apply(c,l):s.call(c),Le=o,h},Ta=function(t){return Yr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&di(t,"onInterrupt"),t},yo,yg=[],Sg=function(t){if(t)if(t=!t.name&&t.default||t,Gf()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ia,render:rd,add:jf,kill:Bb,modifier:Fb,rawVars:0},o={targetTest:0,get:0,getSetter:Sh,aliases:{},register:0};if(To(),t!==i){if(Jn[e])return;mi(i,mi(uh(t,s),o)),So(i.prototype,So(s,uh(t,o))),Jn[i.prop=e]=i,t.targetTest&&(ah.push(i),qf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rg(e,i),t.register&&t.register(Cn,i,Bn)}else yg.push(t)},Ee=255,wa={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Cf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Mg=function(t,e,n){var i=t?xr(t)?[t>>16,t>>8&Ee,t&Ee]:0:wa.black,s,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wa[t])i=wa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Xm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Cf(l+1/3,s,o),i[1]=Cf(l,s,o),i[2]=Cf(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Hf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Xm)||wa.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(t){var e=[],n=[],i=-1;return t.split(_r).forEach(function(s){var o=s.match(Ss)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Km=function(t,e,n){var i="",s=(t+i).match(_r),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Mg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=bg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(_r,"1").split(Ss),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(_r),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},_r=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Mb=/hsl[a]?\(/,Kf=function(t){var e=t.join(" "),n;if(_r.lastIndex=0,_r.test(e))return n=Mb.test(e),t[1]=Km(t[1],n),t[0]=Km(t[0],n,bg(t[1])),!0},La,$n=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function x(m){var _=r()-i,v=m===!0,w,S,T,E;if((_>t||_<0)&&(n+=_-e),i+=_,T=i-n,w=T-o,(w>0||v)&&(E=++d.frame,u=T-d.time*1e3,d.time=T=T/1e3,o+=w+(w>=s?0:s-w),S=1),v||(l=c(x)),S)for(f=0;f<a.length;f++)a[f](T,u,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){ng&&(!Nf&&Gf()&&(Ji=Nf=window,Xf=Ji.document||{},pi.gsap=Cn,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(Cn.version),ig(ch||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),yg.forEach(Sg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},La=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),La=0,c=Ia},lagSmoothing:function(m,_){t=m||1/0,e=Math.min(_||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,_,v){var w=_?function(S,T,E,g){m(S,T,E,g),d.remove(w)}:m;return d.remove(m),a[v?"unshift":"push"](w),To(),w},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},d})(),To=function(){return!La&&$n.wake()},se={},bb=/^[\d.\-M][\d.\-,\s]/,Tb=/["']/g,wb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Tb,"").trim():+c,i=l.substr(a+1).trim();return e},Eb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ab=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wb(e[1])]:Eb(t).split(",").map(ag)):se._CE&&bb.test(t)?se._CE("",t):n},Cb=function(t){return function(e){return 1-t(1-e)}},vs=function(t,e){return t&&(Ge(t)?t:se[t]||Ab(t))||e},bs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){se[a]=pi[a]=s,se[o=a.toLowerCase()]=n;for(var l in s)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=s[l]}),s},Tg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Df*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*QM((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tg(a);return s=Df/s,l.config=function(c,h){return r(t,c,h)},l},Pf=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tg(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;bs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;bs("Elastic",Rf("in"),Rf("out"),Rf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(tg(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-KM(r*JM)+1});bs("Back",Pf("in"),Pf("out"),Pf());se.SteppedEase=se.steps=pi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ye;return function(a){return((i*Oa(0,o,a)|0)+s)*n}}};Ra.ease=se["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Yf+=r+","+r+"Params,"});var Qf=function(t,e){this.id=$M++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Jf,this.set=e?e.getSetter:Sh},Da=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bo(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),La||$n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yh(this,n),!s._dp||s.parent||hg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),og(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Oa(-Math.abs(this._delay),a,s),i!==!1),vh(this),lb(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{To(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ye,o;if(s)for(this._tTime-=ye,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+ye){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=rb);var i=_n;return _n=n,$f(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ti(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ge(n)?n:lg,l=function(){var h=i.then;i.then=null,s&&s(),Ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ta(this)},r})();mi(Da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var En=(function(r){jm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),Fe&&$i(n.parent||Fe,gr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ug(gr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Aa(0,arguments,this),this},e.from=function(i,s,o){return Aa(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Aa(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,Ti(this,o),1),this},e.call=function(i,s,o){return $i(this,qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(i,o,Ti(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ea(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Ea(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,x,m,_,v,w,S,T,E,g;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,S=this._start,w=this._ts,_=!w,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ue(h%m),h===l?(x=this._repeat,u=c):(T=Ue(h/m),x=~~T,x&&x===T&&(u=c,x--),u>c&&(u=c)),T=Mo(this._tTime,m),!a&&this._tTime&&T!==x&&this._tTime-T*m-this._dur<=0&&(T=x),E&&x&1&&(u=c-u,g=1),x!==T&&!this._lock){var y=E&&T&1,R=y===(E&&x&1);if(x<T&&(y=!y),a=y?0:h%c?c:h,this._lock=1,this.render(a||(g?0:Ue(x*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1,T=x),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=fb(this,Ue(a),Ue(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(di(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=-ye);break}}f=p}else{f=this._last;for(var A=i<0?i:u;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,o||_n&&$f(f)),u!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=A?-ye:ye);break}}f=p}}if(v&&!s&&(this.pause(),v.render(u>=a?0:-ye)._zTime=u>=a?1:-1,this._ts))return this._start=S,vh(this),this.render(i,s,o);this._onUpdate&&!s&&di(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(di(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(xr(s)||(s=Ti(this,s,i)),!(i instanceof Da)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Ge(i))i=qe.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return ln(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&xh(this,i),i===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ti(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=qe.delayedCall(0,s||Ia,o);return a.data="isPause",this._hasPause=1,$i(this,a,Ti(this,i))},e.removePause=function(i){var s=this._first;for(i=Ti(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Wr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ei(i),l=this._first,c=xr(s),h;l;)l instanceof qe?sb(l._targets,a)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Ti(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=qe.to(o,mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&bo(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,mi({startAt:{time:Ti(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),$m(this,Ti(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),$m(this,Ti(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return xs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=wi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bo(o,o===Fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(og(Fe,fh(i,Fe)),sg=$n.frame),$n.frame>=qm){qm+=Qn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t})(Da);mi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var Rb=function(t,e,n,i,s,o,a){var l=new Bn(this._pt,t,e,0,1,id,null,s),c=0,h=0,d,u,f,p,x,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=wo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(Ef)||[];d=Ef.exec(i);)p=d[0],x=i.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?Ms(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Ef.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wf.test(i)||_)&&(l.e=0),this._pt=l,l},jf=function(t,e,n,i,s,o,a,l,c,h){Ge(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:Ge(d)?c?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ge(d)?c?Nb:Eg:nd,p;if(ln(i)&&(~i.indexOf("random(")&&(i=wo(i)),i.charAt(1)==="="&&(p=Ms(u,i)+(xn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||kf)return!isNaN(u*i)&&i!==""?(p=new Bn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Ub:Ag,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&_h(e,i),Rb.call(this,t,e,u,i,f,l||Qn.stringFilter,c))},Pb=function(t,e,n,i,s){if(Ge(t)&&(t=Ca(t,s,e,n,i)),!Ki(t)||t.style&&t.nodeType||An(t)||eg(t))return ln(t)?Ca(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ca(t[a],s,e,n,i);return o},td=function(t,e,n,i,s,o){var a,l,c,h;if(Jn[t]&&(a=new Jn[t]).init(s,a.rawVars?e[t]:Pb(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==yo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Wr,kf,ed=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,x=t._startAt,m=t._targets,_=t.parent,v=_&&_.data==="nested"?_.vars.targets:m,w=t._overwrite==="auto"&&!Vf,S=t.timeline,T=i.easeReverse||d,E,g,y,R,A,L,N,V,I,z,H,U,j;if(S&&(!u||!s)&&(s="none"),t._ease=vs(s,Ra.ease),t._rEase=T&&(vs(T)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||u&&!i.stagger){if(V=m[0]?qr(m[0]).harness:0,U=V&&i[V.prop],E=uh(i,qf),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!f?x.render(-1,!0):x.revert(h&&p?oh:ib),x._lazy=0),o){if(Yr(t._startAt=qe.set(m,mi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return di(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!f)&&t._startAt.revert(oh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),y=mi({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Kn(l),immediateRender:a,stagger:0,parent:_},E),U&&(y[V.prop]=U),Yr(t._startAt=qe.set(m,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(oh):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Kn(l)||l&&!p,g=0;g<m.length;g++){if(A=m[g],N=A._gsap||Zf(m)[g]._gsap,t._ptLookup[g]=z={},Of[N.id]&&Xr.length&&hh(),H=v===m?g:v.indexOf(A),V&&(I=new V).init(A,U||E,t,H,v)!==!1&&(t._pt=R=new Bn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=R}),I.priority&&(L=1)),!V||U)for(y in E)Jn[y]&&(I=td(y,E,t,H,A,v))?I.priority&&(L=1):z[y]=R=jf.call(t,A,y,"get",E[y],H,v,0,i.stringFilter);t._op&&t._op[g]&&t.kill(A,t._op[g]),w&&t._pt&&(Wr=t,Fe.killTweensOf(A,z,t.globalTime(e)),j=!t.parent,Wr=0),t._pt&&l&&(Of[N.id]=1)}L&&sd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,u&&e<=0&&S.render(wi,!0,!0)},Ib=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return kf=1,t.vars[e]="+=0",ed(t,a),kf=0,l?Pa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+xn(d.e)),d.b&&(d.b=h.s+xn(d.b))},Lb=function(t,e){var n=t[0]?qr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=So({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Db=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ca=function(t,e,n,i,s){return Ge(t)?t.call(e,n,i,s):ln(t)&&~t.indexOf("random(")?wo(t):t},ph=Yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wg={};Fn(ph+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wg[r]=1});ph=ph.split(",");var qe=(function(r){jm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ea(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,_=i.parent||Fe,v=(An(n)||eg(n)?xr(n[0]):"length"in i)?[n]:Ei(n),w,S,T,E,g,y,R,A;if(a._targets=v.length?Zf(v):Pa("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||sh(c)||sh(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(w=a.timeline=new En({data:"nested",defaults:x||{},targets:_&&_.data==="nested"?_.vars.targets:v}),w.kill(),w.parent=w._dp=gr(a),w._start=0,u||sh(c)||sh(h)){if(E=v.length,R=u&&mg(u),Ki(u))for(g in u)~ph.indexOf(g)&&(A||(A={}),A[g]=u[g]);for(S=0;S<E;S++)T=uh(i,wg),T.stagger=0,L&&(T.easeReverse=L),A&&So(T,A),y=v[S],T.duration=+Ca(c,gr(a),S,y,v),T.delay=(+Ca(h,gr(a),S,y,v)||0)-a._delay,!u&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(y,T,R?R(S,y,v):0),w._ease=se.none;w.duration()?c=h=0:a.timeline=0}else if(p){Ea(mi(w.vars.defaults,{ease:"none"})),w._ease=vs(p.ease||i.ease||"none");var N=0,V,I,z;if(An(p))p.forEach(function(H){return w.to(v,H,">")}),w.duration();else{T={};for(g in p)g==="ease"||g==="easeEach"||Db(g,p[g],T,p.easeEach);for(g in T)for(V=T[g].sort(function(H,U){return H.t-U.t}),N=0,S=0;S<V.length;S++)I=V[S],z={ease:I.e,duration:(I.t-(S?V[S-1].t:0))/100*c},z[g]=I.v,w.to(v,z,N),N+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!Vf&&(Wr=gr(a),Fe.killTweensOf(v),Wr=0),$i(_,gr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ue(_._time)&&Kn(d)&&cb(gr(a))&&_.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),m&&ug(gr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ye&&!h?l:i<ye?0:i,u,f,p,x,m,_,v,w;if(!c)ub(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,w=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,s,o);if(u=Ue(d%x),d===l?(p=this._repeat,u=c):(m=Ue(d/x),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),_=this._yoyo&&p&1,_&&(u=c-u),m=Mo(this._tTime,x),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&u!==x&&this._initted&&(this._lock=o=1,this.render(Ue(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(fg(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=u<a;if(S!==this._inv){var T=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(di(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Uf(this,i,s,o),di(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&di(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Uf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yr(this,1),!s&&!(h&&!a)&&(d||a||_)&&(di(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){La||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ed(this,c),h=this._ease(c/this._dur),Ib(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(yh(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||Ta(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,x,m,_;if((!s||s==="all")&&ab(a,l))return s==="all"&&(this._pt=0),Ta(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(x={},Fn(s,function(v){return x[v]=1}),s=x),s=Lb(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){u=c[_],s==="all"?(d[_]=s,p=u,f={}):(f=d[_]=d[_]||{},p=s);for(x in p)m=u&&u[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&xh(this,m,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&Ta(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Aa(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Aa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Fe.killTweensOf(i,s,o)},t})(Da);mi(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new En,e=Ff.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nd=function(t,e,n){return t[e]=n},Eg=function(t,e,n){return t[e](n)},Nb=function(t,e,n,i){return t[e](i.fp,n)},Ob=function(t,e,n){return t.setAttribute(e,n)},Sh=function(t,e){return Ge(t[e])?Eg:gh(t[e])&&t.setAttribute?Ob:nd},Ag=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ub=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},id=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Fb=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Bb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},zb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},sd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Bn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ag,this.d=l||this,this.set=c||nd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=zb,this.m=n,this.mt=s,this.tween=i},r})();Fn(Yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return qf[r]=1});pi.TweenMax=pi.TweenLite=qe;pi.TimelineLite=pi.TimelineMax=En;Fe=new En({sortChildren:!1,defaults:Ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Kf;var ys=[],lh={},kb=[],Qm=0,Vb=0,If=function(t){return(lh[t]||kb).map(function(e){return e()})},Na=function(){var t=Date.now(),e=[];t-Qm>2&&(If("matchMediaInit"),ys.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ji.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),If("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qm=t,If("matchMedia"))},Cg=(function(){function r(e,n){this.selector=n&&Bf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ge(n)&&(s=i,i=n,n=Ge);var o=this,a=function(){var c=Le,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Bf(s)),Le=o,d=i.apply(o,arguments),Ge(d)&&o._r.push(d),Le=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Na):a.removeEventListener("change",Na)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),Gb=(function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ki(n)||(n={matches:n});var o=new Cg(0,s||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ji.matchMedia(n[c]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Na):l.addEventListener("change",Na),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),mh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sg(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){ln(t)&&(t=Ei(t)[0]);var s=qr(t||{}).get,o=n?lg:ag;return n==="native"&&(n=""),t&&(e?o((Jn[e]&&Jn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ei(t),t.length>1){var i=t.map(function(h){return Cn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=Jn[e],a=qr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;yo._pt=0,d.init(t,n?h+n:h,yo,0,[t]),d.render(1,d),yo._pt&&rd(1,yo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Cn.to(t,mi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,Ra.ease)),Ym(Ra,t||{})},config:function(t){return Ym(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!pi[a]&&Pa(e+" effect requires "+a+" plugin.")}),Af[e]=function(a,l,c){return n(Ei(a),mi(l||{},s),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(Af[e](a,Ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=vs(e)},parseEase:function(t,e){return arguments.length?vs(t,e):se},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,s;for(n.smoothChildTiming=Kn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(Fe,n,0),n},context:function(t,e){return t?new Cg(t,e):Le},matchMedia:function(t){return new Gb(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Na()},addEventListener:function(t,e){var n=lh[t]||(lh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=lh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:vb,wrapYoyo:yb,distribute:mg,random:_g,snap:gg,normalize:xb,getUnit:xn,clamp:pb,splitColor:Mg,toArray:Ei,selector:Bf,mapRange:vg,pipe:gb,unitize:_b,interpolate:Sb,shuffle:pg},install:ig,effects:Af,ticker:$n,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:Fe,core:{PropTween:Bn,globals:rg,Tween:qe,Timeline:En,Animation:Da,getCache:qr,_removeLinkedListItem:xh,reverting:function(){return _n},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Vf=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mh[r]=qe[r]});$n.add(En.updateRoot);yo=mh.to({},{duration:0});var Hb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Wb=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Hb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Lf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Wb(a,s)}}}},Cn=mh.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Lf("roundProps",zf),Lf("modifiers"),Lf("snap",gg))||mh;qe.version=En.version=Cn.version="3.15.1";ng=1;Gf()&&To();var Xb=se.Power0,qb=se.Power1,Yb=se.Power2,Zb=se.Power3,Jb=se.Power4,$b=se.Linear,Kb=se.Quad,Qb=se.Cubic,jb=se.Quart,t1=se.Quint,e1=se.Strong,n1=se.Elastic,i1=se.Back,r1=se.SteppedEase,s1=se.Bounce,o1=se.Sine,a1=se.Expo,l1=se.Circ;var Rg,Jr,Ao,ud,As,c1,Pg,fd,h1=function(){return typeof window<"u"},yr={},Es=180/Math.PI,Co=Math.PI/180,Eo=Math.atan2,Ig=1e8,dd=/([A-Z])/g,u1=/(left|right|width|margin|padding|x)/i,f1=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},d1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},p1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},m1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},g1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},kg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_1=function(t,e,n){return t.style[e]=n},x1=function(t,e,n){return t.style.setProperty(e,n)},v1=function(t,e,n){return t._gsap[e]=n},y1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},S1=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},M1=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Be="transform",jn=Be+"Origin",b1=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in yr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Qi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=vr(i,a)}):this.tfm[t]=o.x?o[t]:vr(i,t),t===jn&&(this.tfm.zOrigin=o.zOrigin);else return Qi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=Be}(s||e)&&this.props.push(t,e,s[t])},Vg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},T1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(dd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=fd(),(!s||!s.isStart)&&!n[Be]&&(Vg(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gg=function(t,e){var n={target:t,props:[],revert:T1,save:b1};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Hg,ld=function(t,e){var n=Jr.createElementNS?Jr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Jr.createElement(t);return n&&n.style?n:Jr.createElement(t)},gi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(dd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ro(e)||e,1)||""},Lg="O,Moz,ms,Ms,Webkit".split(","),Ro=function(t,e,n){var i=e||As,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Lg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Lg[o]:"")+t},cd=function(){h1()&&window.document&&(Rg=window,Jr=Rg.document,Ao=Jr.documentElement,As=ld("div")||{style:{}},c1=ld("div"),Be=Ro(Be),jn=Be+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hg=!!Ro("perspective"),fd=Cn.core.reverting,ud=1)},Dg=function(t){var e=t.ownerSVGElement,n=ld("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ao.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ao.removeChild(n),s},Ng=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wg=function(t){var e,n;try{e=t.getBBox()}catch{e=Dg(t),n=1}return e&&(e.width||e.height)||n||(e=Dg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ng(t,["x","cx","x1"])||0,y:+Ng(t,["y","cy","y1"])||0,width:0,height:0}:e},Xg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wg(t))},Kr=function(t,e){if(e){var n=t.style,i;e in yr&&e!==jn&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(dd,"-$1").toLowerCase())):n.removeAttribute(e)}},$r=function(t,e,n,i,s,o){var a=new Bn(t._pt,e,n,0,1,o?kg:zg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Og={deg:1,rad:1,turn:1},w1={grid:1,flex:1},Qr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=As.style,l=u1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,x,m,_;if(i===o||!s||Og[i]||Og[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),_=t.getCTM&&Xg(t),(f||o==="%")&&(yr[e]||~e.indexOf("adius")))return p=_?t.getBBox()[l?"width":"height"]:t[h],He(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Jr||!x.appendChild)&&(x=Jr.body),m=x._gsap,m&&f&&m.width&&l&&m.time===$n.time&&!m.uncache)return He(s/m.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,p=t[h],v?t.style[e]=v:Kr(t,e)}else(f||o==="%")&&!w1[gi(x,"display")]&&(a.position=gi(t,"position")),x===t&&(a.position="static"),x.appendChild(As),p=As[h],x.removeChild(As),a.position="absolute";return l&&f&&(m=qr(x),m.time=$n.time,m.width=x[h]),He(u?p*s/d:p&&s?d/p*s:0)},vr=function(t,e,n,i){var s;return ud||cd(),e in Qi&&e!=="transform"&&(e=Qi[e],~e.indexOf(",")&&(e=e.split(",")[0])),yr[e]&&e!=="transform"?(s=Ba(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:bh(gi(t,jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Mh[e]&&Mh[e](t,e,n)||gi(t,e)||Jf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(t,e,s,n)+n:s},E1=function(t,e,n,i){if(!n||n==="none"){var s=Ro(e,t,1),o=s&&gi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,id),l=0,c=0,h,d,u,f,p,x,m,_,v,w,S,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=gi(t,e)||i,x?t.style[e]=x:Kr(t,e)),h=[n,i],Kf(h),n=h[0],i=h[1],u=n.match(Ss)||[],T=i.match(Ss)||[],T.length){for(;d=Ss.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(x=u[c++]||"")&&(f=parseFloat(x)||0,S=x.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+S),_=parseFloat(m),w=m.substr((_+"").length),l=Ss.lastIndex-w.length,w||(w=w||Qn.units[e]||S,l===i.length&&(i+=w,a.e+=w)),S!==w&&(f=Qr(t,e,x,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?kg:zg;return Wf.test(i)&&(a.e=0),this._pt=a,a},Ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ug[n]||n,e[1]=Ug[i]||i,e.join(" ")},C1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yr[a]&&(l=1,a=a==="transformOrigin"?jn:Be),Kr(n,a);l&&(Kr(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),o.uncache=1,Vg(i)))}},Mh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,C1);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Fa=[1,0,0,1,0,0],qg={},Yg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Fg=function(t){var e=gi(t,Be);return Yg(e)?Fa:e.substr(7).match(Hf).map(He)},pd=function(t,e){var n=t._gsap||qr(t),i=t.style,s=Fg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fa:s):(s===Fa&&!t.offsetParent&&t!==Ao&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ao.appendChild(t)),s=Fg(t),l?i.display=l:Kr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ao.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hd=function(t,e,n,i,s,o){var a=t._gsap,l=s||pd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],x=l[2],m=l[3],_=l[4],v=l[5],w=e.split(" "),S=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,g,y,R;n?l!==Fa&&(g=f*m-p*x)&&(y=S*(m/g)+T*(-x/g)+(x*v-m*_)/g,R=S*(-p/g)+T*(f/g)-(f*v-p*_)/g,S=y,T=R):(E=Wg(t),S=E.x+(~w[0].indexOf("%")?S/100*E.width:S),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(_=S-c,v=T-h,a.xOffset=d+(_*f+v*x)-_,a.yOffset=u+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[jn]="0px 0px",o&&($r(o,a,"xOrigin",c,S),$r(o,a,"yOrigin",h,T),$r(o,a,"xOffset",d,a.xOffset),$r(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+T)},Ba=function(t,e){var n=t._gsap||new Qf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=gi(t,jn)||"0",h,d,u,f,p,x,m,_,v,w,S,T,E,g,y,R,A,L,N,V,I,z,H,U,j,W,P,nt,St,Ft,J,ht;return h=d=u=x=m=_=v=w=S=0,f=p=1,n.svg=!!(t.getCTM&&Xg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),g=pd(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),hd(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,g)),T=n.xOrigin||0,E=n.yOrigin||0,g!==Fa&&(L=g[0],N=g[1],V=g[2],I=g[3],h=z=g[4],d=H=g[5],g.length===6?(f=Math.sqrt(L*L+N*N),p=Math.sqrt(I*I+V*V),x=L||N?Eo(N,L)*Es:0,v=V||I?Eo(V,I)*Es+x:0,v&&(p*=Math.abs(Math.cos(v*Co))),n.svg&&(h-=T-(T*L+E*V),d-=E-(T*N+E*I))):(ht=g[6],Ft=g[7],P=g[8],nt=g[9],St=g[10],J=g[11],h=g[12],d=g[13],u=g[14],y=Eo(ht,St),m=y*Es,y&&(R=Math.cos(-y),A=Math.sin(-y),U=z*R+P*A,j=H*R+nt*A,W=ht*R+St*A,P=z*-A+P*R,nt=H*-A+nt*R,St=ht*-A+St*R,J=Ft*-A+J*R,z=U,H=j,ht=W),y=Eo(-V,St),_=y*Es,y&&(R=Math.cos(-y),A=Math.sin(-y),U=L*R-P*A,j=N*R-nt*A,W=V*R-St*A,J=I*A+J*R,L=U,N=j,V=W),y=Eo(N,L),x=y*Es,y&&(R=Math.cos(y),A=Math.sin(y),U=L*R+N*A,j=z*R+H*A,N=N*R-L*A,H=H*R-z*A,L=U,z=j),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,_=180-_),f=He(Math.sqrt(L*L+N*N+V*V)),p=He(Math.sqrt(H*H+ht*ht)),y=Eo(z,H),v=Math.abs(y)>2e-4?y*Es:0,S=J?1/(J<0?-J:J):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Yg(gi(t,Be)),U&&t.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=He(f),n.scaleY=He(p),n.rotation=He(x)+a,n.rotationX=He(m)+a,n.rotationY=He(_)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=bh(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?P1:Hg?Zg:R1,n.uncache=0,n},bh=function(t){return(t=t.split(" "))[0]+" "+t[1]},od=function(t,e,n){var i=xn(e);return He(parseFloat(e)+parseFloat(Qr(t,"x",n+"px",i)))+i},R1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Zg(t,e)},Ts="0deg",Ua="0px",ws=") ",Zg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,x=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,w=n.zOrigin,S="",T=_==="auto"&&t&&t!==1||_===!0;if(w&&(d!==Ts||h!==Ts)){var E=parseFloat(h)*Co,g=Math.sin(E),y=Math.cos(E),R;E=parseFloat(d)*Co,R=Math.cos(E),o=od(v,o,g*R*-w),a=od(v,a,-Math.sin(E)*-w),l=od(v,l,y*R*-w+w)}m!==Ua&&(S+="perspective("+m+ws),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||o!==Ua||a!==Ua||l!==Ua)&&(S+=l!==Ua||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ws),c!==Ts&&(S+="rotate("+c+ws),h!==Ts&&(S+="rotateY("+h+ws),d!==Ts&&(S+="rotateX("+d+ws),(u!==Ts||f!==Ts)&&(S+="skew("+u+", "+f+ws),(p!==1||x!==1)&&(S+="scale("+p+", "+x+ws),v.style[Be]=S||"translate(0, 0)"},P1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,x=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,w=parseFloat(o),S=parseFloat(a),T,E,g,y,R;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Co,c*=Co,T=Math.cos(l)*d,E=Math.sin(l)*d,g=Math.sin(l-c)*-u,y=Math.cos(l-c)*u,c&&(h*=Co,R=Math.tan(c-h),R=Math.sqrt(1+R*R),g*=R,y*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),T*=R,E*=R)),T=He(T),E=He(E),g=He(g),y=He(y)):(T=d,y=u,E=g=0),(w&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(w=Qr(f,"x",o,"px"),S=Qr(f,"y",a,"px")),(p||x||m||_)&&(w=He(w+p-(p*T+x*g)+m),S=He(S+x-(p*E+x*y)+_)),(i||s)&&(R=f.getBBox(),w=He(w+i/100*R.width),S=He(S+s/100*R.height)),R="matrix("+T+","+E+","+g+","+y+","+w+","+S+")",f.setAttribute("transform",R),v&&(f.style[Be]=R)},I1=function(t,e,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Es:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Ig)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Ig)%o-~~(c/o)*o)),t._pt=u=new Bn(t._pt,e,n,i,c,d1),u.e=h,u.u="deg",t._props.push(n),u},Bg=function(t,e){for(var n in e)t[n]=e[n];return t},L1=function(t,e,n){var i=Bg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=Ba(n,1),Kr(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=Ba(n,1),o[Be]=c);for(l in yr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=xn(c),p=xn(h),d=f!==p?Qr(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Bn(t._pt,a,l,d,u-d,ad),t._pt.u=p||0,t._props.push(l));Bg(a,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Mh[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return vr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,x){return f[p]=u[x]=u[x]||u[(x-1)/2|0]}),a.init(l,f,d)}});var md={name:"css",register:cd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,x,m,_,v,w,S,T,E,g,y,R;ud||cd(),this.styles=this.styles||Gg(t),y=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Jn[x]&&td(x,e,n,i,t,s)))){if(f=typeof h,p=Mh[x],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=wo(h)),p)p(this,t,x,h,n)&&(g=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",_r.lastIndex=0,_r.test(c)||(m=xn(c),_=xn(h),_?m!==_&&(c=Qr(t,x,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,x),o.push(x),y.push(x,0,a[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,s):l[x],ln(c)&&~c.indexOf("random(")&&(c=wo(c)),xn(c+"")||c==="auto"||(c+=Qn.units[x]||xn(vr(t,x))||""),(c+"").charAt(1)==="="&&(c=vr(t,x))):c=vr(t,x),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in Qi&&(x==="autoAlpha"&&(u===1&&vr(t,"visibility")==="hidden"&&d&&(u=0),y.push("visibility",0,a.visibility),$r(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=Qi[x],~x.indexOf(",")&&(x=x.split(",")[0]))),w=x in yr,w){if(this.styles.save(x),R=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=gi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=gi(t,"perspective"),A?t.style.perspective=A:Kr(t,"perspective")}d=parseFloat(h)}if(S||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ba(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,S=this._pt=new Bn(this._pt,a,Be,0,1,T.renderTransform,T,0,-1),S.dep=1),x==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(v?Ms(T.scaleY,v+d):d)-T.scaleY||0,ad),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){y.push(jn,0,a[jn]),h=A1(h),T.svg?hd(t,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==T.zOrigin&&$r(this,T,"zOrigin",T.zOrigin,_),$r(this,a,x,bh(c),bh(h)));continue}else if(x==="svgOrigin"){hd(t,h,1,E,0,this);continue}else if(x in qg){I1(this,T,x,u,v?Ms(u,v+h):h);continue}else if(x==="smoothOrigin"){$r(this,T,"smooth",T.smooth,h);continue}else if(x==="force3D"){T[x]=h;continue}else if(x==="transform"){L1(this,h,t);continue}}else x in a||(x=Ro(x)||x);if(w||(d||d===0)&&(u||u===0)&&!f1.test(h)&&x in a)m=(c+"").substr((u+"").length),d||(d=0),_=xn(h)||(x in Qn.units?Qn.units[x]:m),m!==_&&(u=Qr(t,x,c,_)),this._pt=new Bn(this._pt,w?T:a,x,u,(v?Ms(u,v+d):d)-u,!w&&(_==="px"||x==="zIndex")&&e.autoRound!==!1?g1:ad),this._pt.u=_||0,w&&R!==h?(this._pt.b=c,this._pt.e=R,this._pt.r=m1):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=p1);else if(x in a)E1.call(this,t,x,c,v?v+h:h);else if(x in t)this.add(t,x,c||t[x],v?v+h:h,i,s);else if(x!=="parseTransform"){_h(x,h);continue}w||(x in a?y.push(x,0,a[x]):typeof t[x]=="function"?y.push(x,2,t[x]()):y.push(x,1,c||t[x])),o.push(x)}}g&&sd(this)},render:function(t,e){if(e.tween._time||!fd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:vr,aliases:Qi,getSetter:function(t,e,n){var i=Qi[e];return i&&i.indexOf(",")<0&&(e=i),e in yr&&e!==jn&&(t._gsap.x||vr(t,"x"))?n&&Pg===n?e==="scale"?y1:v1:(Pg=n||{})&&(e==="scale"?S1:M1):t.style&&!gh(t.style[e])?_1:~e.indexOf("-")?x1:Sh(t,e)},core:{_removeProperty:Kr,_getMatrix:pd}};Cn.utils.checkPrefix=Ro;Cn.core.getStyleSaver=Gg;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){yr[s]=1});Fn(t,function(s){Qn.units[s]="deg",qg[s]=1}),Qi[i[13]]=r+","+t,Fn(n,function(s){var o=s.split(":");Qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Cn.registerPlugin(md);var De=Cn.registerPlugin(md)||Cn,cC=De.core.Tween;function Jg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function D1(r,t,e){return t&&Jg(r.prototype,t),e&&Jg(r,e),r}var vn,Eh,N1,ti,jr,ts,Io,Kg,Cs,Lo,Qg,Sr,Bi,jg,t0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},e0=1,Po=[],Jt=[],zi=[],ka=Date.now,gd=function(t,e){return e},O1=function(){var t=Lo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,zi),Jt=n,zi=i,gd=function(o,a){return e[o](a)}},br=function(t,e){return~zi.indexOf(t)&&zi[zi.indexOf(t)+1][e]},Va=function(t){return!!~Qg.indexOf(t)},kn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Th="scrollLeft",wh="scrollTop",_d=function(){return Sr&&Sr.isPressed||Jt.cache++},Ah=function(t,e){var n=function i(s){if(s||s===0){e0&&ti.history.scrollRestoration!=="manual"&&(ti.history.scrollRestoration="manual");var o=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),t(s),i.cacheID=Jt.cache,o&&gd("ss",s)}else(e||Jt.cache!==i.cacheID||gd("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Th,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ah(function(r){return arguments.length?ti.scrollTo(r,tn.sc()):ti.pageXOffset||jr[Th]||ts[Th]||Io[Th]||0})},tn={s:wh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Ah(function(r){return arguments.length?ti.scrollTo(Rn.sc(),r):ti.pageYOffset||jr[wh]||ts[wh]||Io[wh]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},U1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Mr=function(t,e){var n=e.s,i=e.sc;Va(t)&&(t=jr.scrollingElement||ts);var s=Jt.indexOf(t),o=i===tn.sc?1:2;!~s&&(s=Jt.push(t)-1),Jt[s+o]||kn(t,"scroll",_d);var a=Jt[s+o],l=a||(Jt[s+o]=Ah(br(t,n),!0)||(Va(t)?i:Ah(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Ch=function(t,e,n){var i=t,s=t,o=ka(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=ka();x||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(p){var x=a,m=s,_=ka();return(p||p===0)&&p!==i&&h(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-x)*1e3};return{update:h,reset:d,getVelocity:u}},za=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},$g=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},n0=function(){Lo=vn.core.globals().ScrollTrigger,Lo&&Lo.core&&O1()},i0=function(t){return vn=t||t0(),!Eh&&vn&&typeof document<"u"&&document.body&&(ti=window,jr=document,ts=jr.documentElement,Io=jr.body,Qg=[ti,jr,ts,Io],N1=vn.utils.clamp,jg=vn.core.context||function(){},Cs="onpointerenter"in Io?"pointer":"mouse",Kg=We.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=We.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return e0=0},500),Eh=1),Lo||n0(),Eh};Rn.op=tn;Jt.cache=0;var We=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Eh||i0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Lo||n0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,x=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,w=n.onPress,S=n.onRelease,T=n.onRight,E=n.onLeft,g=n.onUp,y=n.onDown,R=n.onChangeX,A=n.onChangeY,L=n.onChange,N=n.onToggleX,V=n.onToggleY,I=n.onHover,z=n.onHoverEnd,H=n.onMove,U=n.ignoreCheck,j=n.isNormalizer,W=n.onGestureStart,P=n.onGestureEnd,nt=n.onWheel,St=n.onEnable,Ft=n.onDisable,J=n.onClick,ht=n.scrollSpeed,yt=n.capture,bt=n.allowClicks,mt=n.lockAxis,Dt=n.onLockAxis;this.target=a=Vn(a)||ts,this.vars=n,f&&(f=vn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(Io).lineHeight)||22);var xe,Et,Ht,It,Ut,ce,oe,Z=this,Qt=0,Je=0,Me=n.passive||!h&&n.passive!==!1,ie=Mr(a,Rn),ze=Mr(a,tn),Xe=ie(),F=ze(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bi[0]==="pointerdown",ae=Va(a),Vt=a.ownerDocument||jr,ut=[0,0,0],he=[0,0,0],Lt=0,Bt=function(){return Lt=ka()},C=function(pt,rt){return(Z.event=pt)&&f&&U1(pt.target,f)||rt&&de&&pt.pointerType!=="touch"||U&&U(pt,rt)},M=function(){Z._vx.reset(),Z._vy.reset(),Et.pause(),d&&d(Z)},k=function(){var pt=Z.deltaX=$g(ut),rt=Z.deltaY=$g(he),tt=Math.abs(pt)>=i,_t=Math.abs(rt)>=i;L&&(tt||_t)&&L(Z,pt,rt,ut,he),tt&&(T&&Z.deltaX>0&&T(Z),E&&Z.deltaX<0&&E(Z),R&&R(Z),N&&Z.deltaX<0!=Qt<0&&N(Z),Qt=Z.deltaX,ut[0]=ut[1]=ut[2]=0),_t&&(y&&Z.deltaY>0&&y(Z),g&&Z.deltaY<0&&g(Z),A&&A(Z),V&&Z.deltaY<0!=Je<0&&V(Z),Je=Z.deltaY,he[0]=he[1]=he[2]=0),(It||Ht)&&(H&&H(Z),Ht&&(m&&Ht===1&&m(Z),v&&v(Z),Ht=0),It=!1),ce&&!(ce=!1)&&Dt&&Dt(Z),Ut&&(nt(Z),Ut=!1),xe=0},st=function(pt,rt,tt){ut[tt]+=pt,he[tt]+=rt,Z._vx.update(pt),Z._vy.update(rt),c?xe||(xe=requestAnimationFrame(k)):k()},it=function(pt,rt){mt&&!oe&&(Z.axis=oe=Math.abs(pt)>Math.abs(rt)?"x":"y",ce=!0),oe!=="y"&&(ut[2]+=pt,Z._vx.update(pt,!0)),oe!=="x"&&(he[2]+=rt,Z._vy.update(rt,!0)),c?xe||(xe=requestAnimationFrame(k)):k()},ct=function(pt){if(!C(pt,1)){pt=za(pt,h);var rt=pt.clientX,tt=pt.clientY,_t=rt-Z.x,et=tt-Z.y,Tt=Z.isDragging;Z.x=rt,Z.y=tt,(Tt||(_t||et)&&(Math.abs(Z.startX-rt)>=s||Math.abs(Z.startY-tt)>=s))&&(Ht||(Ht=Tt?2:1),Tt||(Z.isDragging=!0),it(_t,et))}},gt=Z.onPress=function(ot){C(ot,1)||ot&&ot.button||(Z.axis=oe=null,Et.pause(),Z.isPressed=!0,ot=za(ot),Qt=Je=0,Z.startX=Z.x=ot.clientX,Z.startY=Z.y=ot.clientY,Z._vx.reset(),Z._vy.reset(),kn(j?a:Vt,Bi[1],ct,Me,!0),Z.deltaX=Z.deltaY=0,w&&w(Z))},G=Z.onRelease=function(ot){if(!C(ot,1)){zn(j?a:Vt,Bi[1],ct,!0);var pt=!isNaN(Z.y-Z.startY),rt=Z.isDragging,tt=rt&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),_t=za(ot);!tt&&pt&&(Z._vx.reset(),Z._vy.reset(),h&&bt&&vn.delayedCall(.08,function(){if(ka()-Lt>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(Vt.createEvent){var et=Vt.createEvent("MouseEvents");et.initMouseEvent("click",!0,!0,ti,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(et)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&rt&&!j&&Et.restart(!0),Ht&&k(),_&&rt&&_(Z),S&&S(Z,tt)}},Q=function(pt){return pt.touches&&pt.touches.length>1&&(Z.isGesturing=!0)&&W(pt,Z.isDragging)},lt=function(){return(Z.isGesturing=!1)||P(Z)},D=function(pt){if(!C(pt)){var rt=ie(),tt=ze();st((rt-Xe)*ht,(tt-F)*ht,1),Xe=rt,F=tt,d&&Et.restart(!0)}},K=function(pt){if(!C(pt)){pt=za(pt,h),nt&&(Ut=!0);var rt=(pt.deltaMode===1?l:pt.deltaMode===2?ti.innerHeight:1)*p;st(pt.deltaX*rt,pt.deltaY*rt,0),d&&!j&&Et.restart(!0)}},$=function(pt){if(!C(pt)){var rt=pt.clientX,tt=pt.clientY,_t=rt-Z.x,et=tt-Z.y;Z.x=rt,Z.y=tt,It=!0,d&&Et.restart(!0),(_t||et)&&it(_t,et)}},ft=function(pt){Z.event=pt,I(Z)},at=function(pt){Z.event=pt,z(Z)},dt=function(pt){return C(pt)||za(pt,h)&&J(Z)};Et=Z._dc=vn.delayedCall(u||.25,M).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Ch(0,50,!0),Z._vy=Ch(0,50,!0),Z.scrollX=ie,Z.scrollY=ze,Z.isDragging=Z.isGesturing=Z.isPressed=!1,jg(this),Z.enable=function(ot){return Z.isEnabled||(kn(ae?Vt:a,"scroll",_d),o.indexOf("scroll")>=0&&kn(ae?Vt:a,"scroll",D,Me,yt),o.indexOf("wheel")>=0&&kn(a,"wheel",K,Me,yt),(o.indexOf("touch")>=0&&Kg||o.indexOf("pointer")>=0)&&(kn(a,Bi[0],gt,Me,yt),kn(Vt,Bi[2],G),kn(Vt,Bi[3],G),bt&&kn(a,"click",Bt,!0,!0),J&&kn(a,"click",dt),W&&kn(Vt,"gesturestart",Q),P&&kn(Vt,"gestureend",lt),I&&kn(a,Cs+"enter",ft),z&&kn(a,Cs+"leave",at),H&&kn(a,Cs+"move",$)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=It=Ht=!1,Z._vx.reset(),Z._vy.reset(),Xe=ie(),F=ze(),ot&&ot.type&&gt(ot),St&&St(Z)),Z},Z.disable=function(){Z.isEnabled&&(Po.filter(function(ot){return ot!==Z&&Va(ot.target)}).length||zn(ae?Vt:a,"scroll",_d),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),zn(j?a:Vt,Bi[1],ct,!0)),zn(ae?Vt:a,"scroll",D,yt),zn(a,"wheel",K,yt),zn(a,Bi[0],gt,yt),zn(Vt,Bi[2],G),zn(Vt,Bi[3],G),zn(a,"click",Bt,!0),zn(a,"click",dt),zn(Vt,"gesturestart",Q),zn(Vt,"gestureend",lt),zn(a,Cs+"enter",ft),zn(a,Cs+"leave",at),zn(a,Cs+"move",$),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Ft&&Ft(Z))},Z.kill=Z.revert=function(){Z.disable();var ot=Po.indexOf(Z);ot>=0&&Po.splice(ot,1),Sr===Z&&(Sr=0)},Po.push(Z),j&&Va(a)&&(Sr=Z),Z.enable(x)},D1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();We.version="3.15.1";We.create=function(r){return new We(r)};We.register=i0;We.getAll=function(){return Po.slice()};We.getById=function(r){return Po.filter(function(t){return t.vars.id===r})[0]};t0()&&vn.registerPlugin(We);var At,Uo,Kt,ve,vi,_e,Id,Wh,tl,Za,Ha,Rh,Pn,Yh,Td,Hn,r0,s0,Fo,S0,xd,M0,Gn,wd,b0,T0,es,Ed,Ld,Bo,Dd,ns,Ad,vd,Ph=1,In=Date.now,yd=In(),Ri=0,Wa=0,o0=function(t,e,n){var i=xi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},a0=function(t,e){return e&&(!xi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},F1=function r(){return Wa&&requestAnimationFrame(r)},l0=function(){return Yh=1},c0=function(){return Yh=0},ji=function(t){return t},Xa=function(t){return Math.round(t*1e5)/1e5||0},w0=function(){return typeof window<"u"},E0=function(){return At||w0()&&(At=window.gsap)&&At.registerPlugin&&At},Ns=function(t){return!!~Id.indexOf(t)},A0=function(t){return(t==="Height"?Dd:Kt["inner"+t])||vi["client"+t]||_e["client"+t]},C0=function(t){return br(t,"getBoundingClientRect")||(Ns(t)?function(){return Hh.width=Kt.innerWidth,Hh.height=Dd,Hh}:function(){return Tr(t)})},B1=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=br(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?A0(s):t["client"+s])||0}},z1=function(t,e){return!e||~zi.indexOf(t)?C0(t):function(){return Hh}},tr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=br(t,n))?o()-C0(t)()[s]:Ns(t)?(vi[n]||_e[n])-A0(i):t[n]-t["offset"+i])},Ih=function(t,e){for(var n=0;n<Fo.length;n+=3)(!e||~e.indexOf(Fo[n+1]))&&t(Fo[n],Fo[n+1],Fo[n+2])},xi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},qa=function(t){return typeof t=="number"},Rs=function(t){return typeof t=="object"},Ga=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Do=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},No=Math.abs,R0="left",P0="top",Nd="right",Od="bottom",Is="width",Ls="height",Ja="Right",$a="Left",Ka="Top",Qa="Bottom",en="padding",Ai="margin",ko="Width",Ud="Height",cn="px",Ci=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},k1=function(t){var e=Ci(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},h0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tr=function(t,e){var n=e&&Ci(t)[Td]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},I0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},V1=function(t){return function(e){return At.utils.snap(I0(t),e)}},Fd=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},G1=function(t){return function(e,n){return Fd(I0(t))(e,n.direction)}},Lh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Dh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},u0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nh={toggleActions:"play",anticipatePin:0},qh={top:0,left:0,center:.5,bottom:1,right:1},zh=function(t,e){if(xi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in qh?qh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Oh=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=ve.createElement("div"),x=Ns(n)||br(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,_=x?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,S="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(S+=(i===tn?Nd:Od)+":"+(o+parseFloat(u))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=S,p.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],kh(p,0,i,v),p},kh=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ko]=1,s["border"+a+ko]=0,s[n.p]=e+"px",At.set(t,s)},$t=[],Cd={},el,f0=function(){return In()-Ri>34&&(el||(el=requestAnimationFrame(wr)))},Oo=function(){(!Gn||!Gn.isPressed||Gn.startX>_e.clientWidth)&&(Jt.cache++,Gn?el||(el=requestAnimationFrame(wr)):wr(),Ri||Us("scrollStart"),Ri=In())},Sd=function(){T0=Kt.innerWidth,b0=Kt.innerHeight},Ya=function(t){Jt.cache++,(t===!0||!Pn&&!M0&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!wd||T0!==Kt.innerWidth||Math.abs(Kt.innerHeight-b0)>Kt.innerHeight*.25))&&Wh.restart(!0)},Os={},H1=[],L0=function r(){return pn(qt,"scrollEnd",r)||Ps(!0)},Us=function(t){return Os[t]&&Os[t].map(function(e){return e()})||H1},_i=[],D0=function(t){for(var e=0;e<_i.length;e+=5)(!t||_i[e+4]&&_i[e+4].query===t)&&(_i[e].style.cssText=_i[e+1],_i[e].getBBox&&_i[e].setAttribute("transform",_i[e+2]||""),_i[e+3].uncache=1)},N0=function(){Jt.cache++,Jt.forEach(function(t){return Ln(t)&&(t.rec=t())})},Bd=function(t,e){var n;for(Hn=0;Hn<$t.length;Hn++)n=$t[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ns=!0,e&&D0(e),e||Us("revert")},O0=function(t,e){Jt.cache++,(e||!Wn)&&Jt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),xi(t)&&(Ld=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Wn,Ds=0,d0,W1=function(){if(d0!==Ds){var t=d0=Ds;requestAnimationFrame(function(){return t===Ds&&Ps(!0)})}},U0=function(){_e.appendChild(Bo),Dd=!Gn&&Bo.offsetHeight||Kt.innerHeight,_e.removeChild(Bo)},p0=function(t){return tl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ps=function(t,e){if(vi=ve.documentElement,_e=ve.body,Id=[Kt,ve,vi,_e],Ri&&!t&&!ns){mn(qt,"scrollEnd",L0);return}U0(),Wn=qt.isRefreshing=!0,ns||N0();var n=Us("refreshInit");S0&&qt.sort(),e||Bd(),Jt.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),ns=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ad=1,p0(!0),$t.forEach(function(i){var s=tr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),p0(!1),Ad=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),O0(Ld,1),Wh.pause(),Ds++,Wn=2,wr(2),$t.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=qt.isRefreshing=!1,Us("refresh")},Rd=0,Vh=1,ja,wr=function(t){if(t===2||!Wn&&!ns){qt.isUpdating=!0,ja&&ja.update(0);var e=$t.length,n=In(),i=n-yd>=50,s=e&&$t[0].scroll();if(Vh=Rd>s?-1:1,Wn||(Rd=s),i&&(Ri&&!Yh&&n-Ri>200&&(Ri=0,Us("scrollEnd")),Ha=yd,yd=n),Vh<0){for(Hn=e;Hn-- >0;)$t[Hn]&&$t[Hn].update(0,i);Vh=1}else for(Hn=0;Hn<e;Hn++)$t[Hn]&&$t[Hn].update(0,i);qt.isUpdating=!1}el=0},Pd=[R0,P0,Od,Nd,Ai+Qa,Ai+Ja,Ai+Ka,Ai+$a,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gh=Pd.concat([Is,Ls,"boxSizing","max"+ko,"max"+Ud,"position",Ai,en,en+Ka,en+Ja,en+Qa,en+$a]),X1=function(t,e,n){zo(n);var i=t._gsap;if(i.spacerIsNative)zo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Md=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Pd.length,o=e.style,a=t.style,l;s--;)l=Pd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Od]=a[Nd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Is]=Xh(t,Rn)+cn,o[Ls]=Xh(t,tn)+cn,o[en]=a[Ai]=a[P0]=a[R0]="0",zo(i),a[Is]=a["max"+ko]=n[Is],a[Ls]=a["max"+Ud]=n[Ls],a[en]=n[en],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},q1=/([A-Z])/g,zo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(q1,"-$1").toLowerCase())}},Uh=function(t){for(var e=Gh.length,n=t.style,i=[],s=0;s<e;s++)i.push(Gh[s],n[Gh[s]]);return i.t=t,i},Y1=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Hh={left:0,top:0},m0=function(t,e,n,i,s,o,a,l,c,h,d,u,f,p){Ln(t)&&(t=t(l)),xi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?zh("0"+t.substr(3),n):0));var x=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(t)||(t=+t),qa(t))f&&(t=At.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&kh(a,n,i,!0);else{Ln(e)&&(e=e(l));var w=(t||"0").split(" "),S,T,E,g;v=Vn(e,l)||_e,S=Tr(v)||{},(!S||!S.left&&!S.top)&&Ci(v).display==="none"&&(g=v.style.display,v.style.display="block",S=Tr(v),g?v.style.display=g:v.style.removeProperty("display")),T=zh(w[0],S[i.d]),E=zh(w[1]||"0",n),t=S[i.p]-c[i.p]-h+T+s-E,a&&kh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var y=t+n,R=o._isStart;m="scroll"+i.d2,kh(o,y,i,R&&y>20||!R&&(d?Math.max(_e[m],vi[m]):o.parentNode[m])<=y+1),d&&(c=Tr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return f&&v&&(m=Tr(v),f.seek(u),_=Tr(v),f._caScrollDist=m[i.p]-_[i.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},Z1=/(webkit|moz|length|cssText|inset)/i,g0=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=Ci(t);for(o in a)!+o&&!Z1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},F0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Fh=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},_0=function(t,e){var n=Mr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var x=F0(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Jt.cache++,o.tween&&wr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=At.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(t,"wheel",n.wheelHandler),qt.isTouch&&mn(t,"touchmove",n.wheelHandler),s},qt=(function(){function r(e,n){Uo||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ed(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=ji;return}n=h0(xi(n)||qa(n)||n.nodeType?{trigger:n}:n,Nh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,x=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,w=s.once,S=s.snap,T=s.pinReparent,E=s.pinSpacer,g=s.containerAnimation,y=s.fastScrollEnd,R=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:tn,L=!d&&d!==0,N=Vn(n.scroller||Kt),V=At.core.getCache(N),I=Ns(N),z=("pinType"in n?n.pinType:br(N,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),j="markers"in n?n.markers:Nh.markers,W=I?0:parseFloat(Ci(N)["border"+A.p2+ko])||0,P=this,nt=n.onRefreshInit&&function(){return n.onRefreshInit(P)},St=B1(N,I,A),Ft=z1(N,I),J=0,ht=0,yt=0,bt=Mr(N,A),mt,Dt,xe,Et,Ht,It,Ut,ce,oe,Z,Qt,Je,Me,ie,ze,Xe,F,de,ae,Vt,ut,he,Lt,Bt,C,M,k,st,it,ct,gt,G,Q,lt,D,K,$,ft,at;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=N,P.scroll=g?g.time.bind(g):bt,Et=bt(),ns&&bt.rec==null&&(bt.rec=Et),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(S0=1,n.refreshPriority===-9999&&(ja=P)),V.tweenScroll=V.tweenScroll||{top:_0(N,tn),left:_0(N,Rn)},P.tweenTo=mt=V.tweenScroll[A.p],P.scrubDuration=function(tt){Q=qa(tt)&&tt,Q?G?G.duration(tt):G=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return _&&_(P)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),ct=0,l||(l=i.vars.id)),S&&((!Rs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _e.style&&At.set(I?[_e,vi]:N,{scrollBehavior:"auto"}),Jt.forEach(function(tt){return Ln(tt)&&tt.target===(I?ve.scrollingElement||vi:N)&&(tt.smooth=!1)}),xe=Ln(S.snapTo)?S.snapTo:S.snapTo==="labels"?V1(i):S.snapTo==="labelsDirectional"?G1(i):S.directional!==!1?function(tt,_t){return Fd(S.snapTo)(tt,In()-ht<500?0:_t.direction)}:At.utils.snap(S.snapTo),lt=S.duration||{min:.1,max:2},lt=Rs(lt)?Za(lt.min,lt.max):Za(lt,lt),D=At.delayedCall(S.delay||Q/2||.1,function(){var tt=bt(),_t=In()-ht<500,et=mt.tween;if((_t||Math.abs(P.getVelocity())<10)&&!et&&!Yh&&J!==tt){var Tt=(tt-It)/ie,jt=i&&!L?i.totalProgress():Tt,Wt=_t?0:(jt-gt)/(In()-Ha)*1e3||0,Pe=At.utils.clamp(-Tt,1-Tt,No(Wt/2)*Wt/.185),$e=Tt+(S.inertia===!1?0:Pe),Ie,be,me=S,nn=me.onStart,Te=me.onInterrupt,yn=me.onComplete;if(Ie=xe($e,P),qa(Ie)||(Ie=$e),be=Math.max(0,Math.round(It+Ie*ie)),tt<=Ut&&tt>=It&&be!==tt){if(et&&!et._initted&&et.data<=No(be-tt))return;S.inertia===!1&&(Pe=Ie-Tt),mt(be,{duration:lt(No(Math.max(No($e-jt),No(Ie-jt))*.185/Wt/.05||0)),ease:S.ease||"power3",data:No(be-tt),onInterrupt:function(){return D.restart(!0)&&Te&&Do(P,Te)},onComplete:function(){P.update(),J=bt(),i&&!L&&(G?G.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),ct=gt=i&&!L?i.totalProgress():P.progress,v&&v(P),yn&&Do(P,yn)}},tt,Pe*ie,be-tt-Pe*ie),nn&&Do(P,nn,mt.tween)}}else P.isActive&&J!==tt&&D.restart(!0)}).pause()),l&&(Cd[l]=P),u=P.trigger=Vn(u||f!==!0&&f),at=u&&u._gsap&&u._gsap.stRevert,at&&(at=at(P)),f=f===!0?u:Vn(f),xi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Ai||(p=!p&&f.parentNode&&f.parentNode.style&&Ci(f.parentNode).display==="flex"?!1:en),P.pin=f,Dt=At.core.getCache(f),Dt.spacer?ze=Dt.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Dt.spacerIsNative=!!E,E&&(Dt.spacerState=Uh(E))),Dt.spacer=de=E||ve.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),Dt.pinState=ze=Uh(f)),n.force3D!==!1&&At.set(f,{force3D:!0}),P.spacer=de=Dt.spacer,it=Ci(f),Bt=it[p+A.os2],Vt=At.getProperty(f),ut=At.quickSetter(f,A.a,cn),Md(f,de,it),F=Uh(f)),j){Je=Rs(j)?h0(j,u0):u0,Z=Oh("scroller-start",l,N,A,Je,0),Qt=Oh("scroller-end",l,N,A,Je,0,Z),ae=Z["offset"+A.op.d2];var dt=Vn(br(N,"content")||N);ce=this.markerStart=Oh("start",l,dt,A,Je,ae,0,g),oe=this.markerEnd=Oh("end",l,dt,A,Je,ae,0,g),g&&(ft=At.quickSetter([ce,oe],A.a,cn)),!z&&!(zi.length&&br(N,"fixedMarkers")===!0)&&(k1(I?_e:N),At.set([Z,Qt],{force3D:!0}),M=At.quickSetter(Z,A.a,cn),st=At.quickSetter(Qt,A.a,cn))}if(g){var ot=g.vars.onUpdate,pt=g.vars.onUpdateParams;g.eventCallback("onUpdate",function(){P.update(0,0,1),ot&&ot.apply(g,pt||[])})}if(P.previous=function(){return $t[$t.indexOf(P)-1]},P.next=function(){return $t[$t.indexOf(P)+1]},P.revert=function(tt,_t){if(!_t)return P.kill(!0);var et=tt!==!1||!P.enabled,Tt=Pn;et!==P.isReverted&&(et&&(K=Math.max(bt(),P.scroll.rec||0),yt=P.progress,$=i&&i.progress()),ce&&[ce,oe,Z,Qt].forEach(function(jt){return jt.style.display=et?"none":"block"}),et&&(Pn=P,P.update(et)),f&&(!T||!P.isActive)&&(et?X1(f,de,ze):Md(f,de,Ci(f),C)),et||P.update(et),Pn=Tt,P.isReverted=et)},P.refresh=function(tt,_t,et,Tt){if(!((Pn||!P.enabled)&&!_t)){if(f&&tt&&Ri){mn(r,"scrollEnd",L0);return}!Wn&&nt&&nt(P),Pn=P,mt.tween&&!et&&(mt.tween.kill(),mt.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(B){return B.vars.immediateRender&&B.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var jt=St(),Wt=Ft(),Pe=g?g.duration():tr(N,A),$e=ie<=.01||!ie,Ie=0,be=Tt||0,me=Rs(et)?et.end:n.end,nn=n.endTrigger||u,Te=Rs(et)?et.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=P.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,P),ii=u&&Math.max(0,$t.indexOf(P))||0,ke=ii,Ke,rn,ri,Gs,sn,Ve,Si,Vo,il,Cr,b,O,Y;for(j&&Rs(et)&&(O=At.getProperty(Z,A.p),Y=At.getProperty(Qt,A.p));ke-- >0;)Ve=$t[ke],Ve.end||Ve.refresh(0,1)||(Pn=P),Si=Ve.pin,Si&&(Si===u||Si===f||Si===yn)&&!Ve.isReverted&&(Cr||(Cr=[]),Cr.unshift(Ve),Ve.revert(!0,!0)),Ve!==$t[ke]&&(ii--,ke--);for(Ln(Te)&&(Te=Te(P)),Te=o0(Te,"start",P),It=m0(Te,u,jt,A,bt(),ce,Z,P,Wt,W,z,Pe,g,P._startClamp&&"_startClamp")||(f?-.001:0),Ln(me)&&(me=me(P)),xi(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(xi(Te)?Te.split(" ")[0]:"")+me:(Ie=zh(me.substr(2),jt),me=xi(Te)?Te:(g?At.utils.mapRange(0,g.duration(),g.scrollTrigger.start,g.scrollTrigger.end,It):It)+Ie,nn=u)),me=o0(me,"end",P),Ut=Math.max(It,m0(me||(nn?"100% 0":Pe),nn,jt,A,bt()+Ie,oe,Qt,P,Wt,W,z,Pe,g,P._endClamp&&"_endClamp"))||-.001,Ie=0,ke=ii;ke--;)Ve=$t[ke]||{},Si=Ve.pin,Si&&Ve.start-Ve._pinPush<=It&&!g&&Ve.end>0&&(Ke=Ve.end-(P._startClamp?Math.max(0,Ve.start):Ve.start),(Si===u&&Ve.start-Ve._pinPush<It||Si===yn)&&isNaN(Te)&&(Ie+=Ke*(1-Ve.progress)),Si===f&&(be+=Ke));if(It+=Ie,Ut+=Ie,P._startClamp&&(P._startClamp+=Ie),P._endClamp&&!Wn&&(P._endClamp=Ut||-.001,Ut=Math.min(Ut,tr(N,A))),ie=Ut-It||(It-=.01)&&.001,$e&&(yt=At.utils.clamp(0,1,At.utils.normalize(It,Ut,K))),P._pinPush=be,ce&&Ie&&(Ke={},Ke[A.a]="+="+Ie,yn&&(Ke[A.p]="-="+bt()),At.set([ce,oe],Ke)),f&&!(Ad&&P.end>=tr(N,A)))Ke=Ci(f),Gs=A===tn,ri=bt(),he=parseFloat(Vt(A.a))+be,!Pe&&Ut>1&&(b=(I?ve.scrollingElement||vi:N).style,b={style:b,value:b["overflow"+A.a.toUpperCase()]},I&&Ci(_e)["overflow"+A.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+A.a.toUpperCase()]="scroll")),Md(f,de,Ke),F=Uh(f),rn=Tr(f,!0),Vo=z&&Mr(N,Gs?Rn:tn)(),p?(C=[p+A.os2,ie+be+cn],C.t=de,ke=p===en?Xh(f,A)+ie+be:0,ke&&(C.push(A.d,ke+cn),de.style.flexBasis!=="auto"&&(de.style.flexBasis=ke+cn)),zo(C),yn&&$t.forEach(function(B){B.pin===yn&&B.vars.pinSpacing!==!1&&(B._subPinOffset=!0)}),z&&bt(K)):(ke=Xh(f,A),ke&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=ke+cn)),z&&(sn={top:rn.top+(Gs?ri-It:Vo)+cn,left:rn.left+(Gs?Vo:ri-It)+cn,boxSizing:"border-box",position:"fixed"},sn[Is]=sn["max"+ko]=Math.ceil(rn.width)+cn,sn[Ls]=sn["max"+Ud]=Math.ceil(rn.height)+cn,sn[Ai]=sn[Ai+Ka]=sn[Ai+Ja]=sn[Ai+Qa]=sn[Ai+$a]="0",sn[en]=Ke[en],sn[en+Ka]=Ke[en+Ka],sn[en+Ja]=Ke[en+Ja],sn[en+Qa]=Ke[en+Qa],sn[en+$a]=Ke[en+$a],Xe=Y1(ze,sn,T),Wn&&bt(0)),i?(il=i._initted,xd(1),i.render(i.duration(),!0,!0),Lt=Vt(A.a)-he+ie+be,k=Math.abs(ie-Lt)>1,z&&k&&Xe.splice(Xe.length-2,2),i.render(0,!0,!0),il||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xd(0)):Lt=ie,b&&(b.value?b.style["overflow"+A.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+A.a));else if(u&&bt()&&!g)for(rn=u.parentNode;rn&&rn!==_e;)rn._pinOffset&&(It-=rn._pinOffset,Ut-=rn._pinOffset),rn=rn.parentNode;Cr&&Cr.forEach(function(B){return B.revert(!1,!0)}),P.start=It,P.end=Ut,Et=Ht=Wn?K:bt(),!g&&!Wn&&!ns&&(Et<K&&bt(K),P.scroll.rec=0),P.revert(!1,!0),ht=In(),D&&(J=-1,D.restart(!0)),Pn=0,i&&L&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),($e||yt!==P.progress||g||x||i&&!i._initted)&&(i&&!L&&(i._initted||yt||i.vars.immediateRender!==!1)&&i.totalProgress(g&&It<-.001&&!yt?At.utils.normalize(It,Ut,0):yt,!0),P.progress=$e||(Et-It)/ie===yt?0:yt),f&&p&&(de._pinOffset=Math.round(P.progress*Lt)),G&&G.invalidate(),isNaN(O)||(O-=At.getProperty(Z,A.p),Y-=At.getProperty(Qt,A.p),Fh(Z,A,O),Fh(ce,A,O-(Tt||0)),Fh(Qt,A,Y),Fh(oe,A,Y-(Tt||0))),$e&&!Wn&&P.update(),h&&!Wn&&!Me&&(Me=!0,h(P),Me=!1)}},P.getVelocity=function(){return(bt()-Ht)/(In()-Ha)*1e3||0},P.endAnimation=function(){Ga(P.callbackAnimation),i&&(G?G.progress(1):i.paused()?L||Ga(i,P.direction<0,1):Ga(i,i.reversed()))},P.labelToScroll=function(tt){return i&&i.labels&&(It||P.refresh()||It)+i.labels[tt]/i.duration()*ie||0},P.getTrailing=function(tt){var _t=$t.indexOf(P),et=P.direction>0?$t.slice(0,_t).reverse():$t.slice(_t+1);return(xi(tt)?et.filter(function(Tt){return Tt.vars.preventOverlaps===tt}):et).filter(function(Tt){return P.direction>0?Tt.end<=It:Tt.start>=Ut})},P.update=function(tt,_t,et){if(!(g&&!et&&!tt)){var Tt=Wn===!0?K:P.scroll(),jt=tt?0:(Tt-It)/ie,Wt=jt<0?0:jt>1?1:jt||0,Pe=P.progress,$e,Ie,be,me,nn,Te,yn,ii;if(_t&&(Ht=Et,Et=g?bt():Tt,S&&(gt=ct,ct=i&&!L?i.totalProgress():Wt)),m&&f&&!Pn&&!Ph&&Ri&&(!Wt&&It<Tt+(Tt-Ht)/(In()-Ha)*m?Wt=1e-4:Wt===1&&Ut>Tt+(Tt-Ht)/(In()-Ha)*m&&(Wt=.9999)),Wt!==Pe&&P.enabled){if($e=P.isActive=!!Wt&&Wt<1,Ie=!!Pe&&Pe<1,Te=$e!==Ie,nn=Te||!!Wt!=!!Pe,P.direction=Wt>Pe?1:-1,P.progress=Wt,nn&&!Pn&&(be=Wt&&!Pe?0:Wt===1?1:Pe===1?2:3,L&&(me=!Te&&U[be+1]!=="none"&&U[be+1]||U[be],ii=i&&(me==="complete"||me==="reset"||me in i))),R&&(Te||ii)&&(ii||d||!i)&&(Ln(R)?R(P):P.getTrailing(R).forEach(function(ri){return ri.endAnimation()})),L||(G&&!Pn&&!Ph?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Wt,i._tTime/i._tDur):(G.vars.totalProgress=Wt,G.invalidate().restart())):i&&i.totalProgress(Wt,!!(Pn&&(ht||tt)))),f){if(tt&&p&&(de.style[p+A.os2]=Bt),!z)ut(Xa(he+Lt*Wt));else if(nn){if(yn=!tt&&Wt>Pe&&Ut+1>Tt&&Tt+1>=tr(N,A),T)if(!tt&&($e||yn)){var ke=Tr(f,!0),Ke=Tt-It;g0(f,_e,ke.top+(A===tn?Ke:0)+cn,ke.left+(A===tn?0:Ke)+cn)}else g0(f,de);zo($e||yn?Xe:F),k&&Wt<1&&$e||ut(he+(Wt===1&&!yn?Lt:0))}}S&&!mt.tween&&!Pn&&!Ph&&D.restart(!0),a&&(Te||w&&Wt&&(Wt<1||!vd))&&tl(a.targets).forEach(function(ri){return ri.classList[$e||w?"add":"remove"](a.className)}),o&&!L&&!tt&&o(P),nn&&!Pn?(L&&(ii&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(P)),(Te||!vd)&&(c&&Te&&Do(P,c),H[be]&&Do(P,H[be]),w&&(Wt===1?P.kill(!1,1):H[be]=0),Te||(be=Wt===1?1:3,H[be]&&Do(P,H[be]))),y&&!$e&&Math.abs(P.getVelocity())>(qa(y)?y:2500)&&(Ga(P.callbackAnimation),G?G.progress(1):Ga(i,me==="reverse"?1:!Wt,1))):L&&o&&!Pn&&o(P)}if(st){var rn=g?Tt/g.duration()*(g._caScrollDist||0):Tt;M(rn+(Z._isFlipped?1:0)),st(rn)}ft&&ft(-Tt/g.duration()*(g._caScrollDist||0))}},P.enable=function(tt,_t){P.enabled||(P.enabled=!0,mn(N,"resize",Ya),I||mn(N,"scroll",Oo),nt&&mn(r,"refreshInit",nt),tt!==!1&&(P.progress=yt=0,Et=Ht=J=bt()),_t!==!1&&P.refresh())},P.getTween=function(tt){return tt&&mt?mt.tween:G},P.setPositions=function(tt,_t,et,Tt){if(g){var jt=g.scrollTrigger,Wt=g.duration(),Pe=jt.end-jt.start;tt=jt.start+Pe*tt/Wt,_t=jt.start+Pe*_t/Wt}P.refresh(!1,!1,{start:a0(tt,et&&!!P._startClamp),end:a0(_t,et&&!!P._endClamp)},Tt),P.update()},P.adjustPinSpacing=function(tt){if(C&&tt){var _t=C.indexOf(A.d)+1;C[_t]=parseFloat(C[_t])+tt+cn,C[1]=parseFloat(C[1])+tt+cn,zo(C)}},P.disable=function(tt,_t){if(tt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,_t||G&&G.pause(),K=0,Dt&&(Dt.uncache=1),nt&&pn(r,"refreshInit",nt),D&&(D.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!I)){for(var et=$t.length;et--;)if($t[et].scroller===N&&$t[et]!==P)return;pn(N,"resize",Ya),I||pn(N,"scroll",Oo)}},P.kill=function(tt,_t){P.disable(tt,_t),G&&!_t&&G.kill(),l&&delete Cd[l];var et=$t.indexOf(P);et>=0&&$t.splice(et,1),et===Hn&&Vh>0&&Hn--,et=0,$t.forEach(function(Tt){return Tt.scroller===P.scroller&&(et=1)}),et||Wn||ns||(P.scroll.rec=0),i&&(i.scrollTrigger=null,tt&&i.revert({kill:!1}),_t||i.kill()),ce&&[ce,oe,Z,Qt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),ja===P&&(ja=0),f&&(Dt&&(Dt.uncache=1),et=0,$t.forEach(function(Tt){return Tt.pin===f&&et++}),et||(Dt.spacer=0)),n.onKill&&n.onKill(P)},$t.push(P),P.enable(!1,!1),at&&at(P),i&&i.add&&!ie){var rt=P.update;P.update=function(){P.update=rt,Jt.cache++,It||Ut||P.refresh()},At.delayedCall(.01,P.update),ie=.01,It=Ut=0}else P.refresh();f&&W1()},r.register=function(n){return Uo||(At=n||E0(),w0()&&window.document&&r.enable(),Uo=Wa),Uo},r.defaults=function(n){if(n)for(var i in n)Nh[i]=n[i];return Nh},r.disable=function(n,i){Wa=0,$t.forEach(function(o){return o[i?"kill":"disable"](n)}),pn(Kt,"wheel",Oo),pn(ve,"scroll",Oo),clearInterval(Rh),pn(ve,"touchcancel",ji),pn(_e,"touchstart",ji),Lh(pn,ve,"pointerdown,touchstart,mousedown",l0),Lh(pn,ve,"pointerup,touchend,mouseup",c0),Wh.kill(),Ih(pn);for(var s=0;s<Jt.length;s+=3)Dh(pn,Jt[s],Jt[s+1]),Dh(pn,Jt[s],Jt[s+2])},r.enable=function(){if(Kt=window,ve=document,vi=ve.documentElement,_e=ve.body,At){if(tl=At.utils.toArray,Za=At.utils.clamp,Ed=At.core.context||ji,xd=At.core.suppressOverwrites||ji,Ld=Kt.history.scrollRestoration||"auto",Rd=Kt.pageYOffset||0,At.core.globals("ScrollTrigger",r),_e){Wa=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",U0(),F1(),We.register(At),r.isTouch=We.isTouch,es=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wd=We.isTouch===1,mn(Kt,"wheel",Oo),Id=[Kt,ve,vi,_e],At.matchMedia?(r.matchMedia=function(h){var d=At.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},At.addEventListener("matchMediaInit",function(){N0(),Bd()}),At.addEventListener("matchMediaRevert",function(){return D0()}),At.addEventListener("matchMedia",function(){Ps(0,1),Us("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return Sd(),Sd})):console.warn("Requires GSAP 3.11.0 or later"),Sd(),mn(ve,"scroll",Oo);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Tr(_e),tn.m=Math.round(a.top+tn.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Rh=setInterval(f0,250),At.delayedCall(.5,function(){return Ph=0}),mn(ve,"touchcancel",ji),mn(_e,"touchstart",ji),Lh(mn,ve,"pointerdown,touchstart,mousedown",l0),Lh(mn,ve,"pointerup,touchend,mouseup",c0),Td=At.utils.checkPrefix("transform"),Gh.push(Td),Uo=In(),Wh=At.delayedCall(.2,Ps).pause(),Fo=[ve,"visibilitychange",function(){var h=Kt.innerWidth,d=Kt.innerHeight;ve.hidden?(r0=h,s0=d):(r0!==h||s0!==d)&&Ya()},ve,"DOMContentLoaded",Ps,Kt,"load",Ps,Kt,"resize",Ya],Ih(mn),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)Dh(pn,Jt[l],Jt[l+1]),Dh(pn,Jt[l],Jt[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(vd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rh)||(Rh=i)&&setInterval(f0,i),"ignoreMobileResize"in n&&(wd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ih(pn)||Ih(mn,n.autoRefreshEvents||"none"),M0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),o=Jt.indexOf(s),a=Ns(s);~o&&Jt.splice(o,a?6:2),i&&(a?zi.unshift(Kt,i,_e,i,vi,i):zi.unshift(s,i))},r.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(xi(n)?Vn(n):n).getBoundingClientRect(),a=o[s?Is:Ls]*i||0;return s?o.right-a>0&&o.left+a<Kt.innerWidth:o.bottom-a>0&&o.top+a<Kt.innerHeight},r.positionInViewport=function(n,i,s){xi(n)&&(n=Vn(n));var o=n.getBoundingClientRect(),a=o[s?Is:Ls],l=i==null?a/2:i in qh?qh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Kt.innerWidth:(o.top+l)/Kt.innerHeight},r.killAll=function(n){if($t.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Os.killAll||[];Os={},i.forEach(function(s){return s()})}},r})();qt.version="3.15.1";qt.saveStyles=function(r){return r?tl(r).forEach(function(t){if(t&&t.style){var e=_i.indexOf(t);e>=0&&_i.splice(e,5),_i.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),Ed())}}):_i};qt.revert=function(r,t){return Bd(!r,t)};qt.create=function(r,t){return new qt(r,t)};qt.refresh=function(r){return r?Ya(!0):(Uo||qt.register())&&Ps(!0)};qt.update=function(r){return++Jt.cache&&wr(r===!0?2:0)};qt.clearScrollMemory=O0;qt.maxScroll=function(r,t){return tr(r,t?Rn:tn)};qt.getScrollFunc=function(r,t){return Mr(Vn(r),t?Rn:tn)};qt.getById=function(r){return Cd[r]};qt.getAll=function(){return $t.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qt.isScrolling=function(){return!!Ri};qt.snapDirectional=Fd;qt.addEventListener=function(r,t){var e=Os[r]||(Os[r]=[]);~e.indexOf(t)||e.push(t)};qt.removeEventListener=function(r,t){var e=Os[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=At.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(s)&&(s=s(),mn(qt,"refresh",function(){return s=t.batchMax()})),tl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(qt.create(c))}),e};var x0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},bd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===vi&&r(_e,e)},Bh={auto:1,scroll:1},J1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Bh[(l=Ci(s)).overflowY]||Bh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ns(s)&&(Bh[(l=Ci(s)).overflowY]||Bh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},B0=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&J1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(ve,We.eventTypes[0],y0,!1,!0)},onDisable:function(){return pn(ve,We.eventTypes[0],y0,!0)}})},$1=/(input|label|select|textarea)/i,v0,y0=function(t){var e=$1.test(t.target.tagName);(e||v0)&&(t._gsapAllow=!0,v0=e)},K1=function(t){Rs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Vn(t.target)||vi,h=At.core.globals().ScrollSmoother,d=h&&h.get(),u=es&&(t.content&&Vn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Mr(c,tn),p=Mr(c,Rn),x=1,m=(We.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,_=0,v=Ln(i)?function(){return i(a)}:function(){return i||2.8},w,S,T=B0(c,t.type,!0,s),E=function(){return S=!1},g=ji,y=ji,R=function(){l=tr(c,tn),y=Za(es?1:0,l),n&&(g=Za(0,tr(c,Rn))),w=Ds},A=function(){u._gsap.y=Xa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(S){requestAnimationFrame(E);var j=Xa(a.deltaY/2),W=y(f.v-j);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var P=Xa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=Jt.cache,wr()}return!0}f.offset&&A(),S=!0},N,V,I,z,H=function(){R(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return u&&At.set(u,{y:"+=0"}),t.ignoreCheck=function(U){return es&&U.type==="touchmove"&&L(U)||x>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){S=!1;var U=x;x=Xa((Kt.visualViewport&&Kt.visualViewport.scale||1)/m),N.pause(),U!==x&&bd(c,x>1.01?!0:n?!1:"x"),V=p(),I=f(),R(),w=Ds},t.onRelease=t.onGestureStart=function(U,j){if(f.offset&&A(),!j)z.restart(!0);else{Jt.cache++;var W=v(),P,nt;n&&(P=p(),nt=P+W*.05*-U.velocityX/.227,W*=x0(p,P,nt,tr(c,Rn)),N.vars.scrollX=g(nt)),P=f(),nt=P+W*.05*-U.velocityY/.227,W*=x0(f,P,nt,tr(c,tn)),N.vars.scrollY=y(nt),N.invalidate().duration(W).play(.01),(es&&N.vars.scrollY>=l||P>=l-1)&&At.to({},{onUpdate:H,duration:W})}o&&o(U)},t.onWheel=function(){N._ts&&N.pause(),In()-_>1e3&&(w=0,_=In())},t.onChange=function(U,j,W,P,nt){if(Ds!==w&&R(),j&&n&&p(g(P[2]===j?V+(U.startX-U.x):p()+j-P[1])),W){f.offset&&A();var St=nt[2]===W,Ft=St?I+U.startY-U.y:f()+W-nt[1],J=y(Ft);St&&Ft!==J&&(I+=J-Ft),f(J)}(W||j)&&wr()},t.onEnable=function(){bd(c,n?!1:"x"),qt.addEventListener("refresh",H),mn(Kt,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){bd(c,!0),pn(Kt,"resize",H),qt.removeEventListener("refresh",H),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=es,es&&!f()&&f(1),es&&At.ticker.add(ji),z=a._dc,N=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:F0(f,f(),function(){return N.pause()})},onUpdate:wr,onComplete:z.vars.onComplete}),a};qt.sort=function(r){if(Ln(r))return $t.sort(r);var t=Kt.pageYOffset||0;return qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),$t.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qt.observe=function(r){return new We(r)};qt.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var t=r instanceof We?r:K1(r);return Gn&&Gn.target===t.target&&Gn.kill(),Ns(t.target)&&(Gn=t),t};qt.core={_getVelocityProp:Ch,_inputObserver:B0,_scrollers:Jt,_proxies:zi,bridge:{ss:function(){Ri||Us("scrollStart"),Ri=In()},ref:function(){return Pn}}};E0()&&At.registerPlugin(qt);var z0="1.3.27";function G0(r,t,e){return Math.max(r,Math.min(t,e))}function Q1(r,t,e){return(1-e)*r+e*t}function j1(r,t,e,n){return Q1(r,t,1-Math.exp(-e*n))}function tT(r,t){return(r%t+t)%t}var eT=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=G0(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=j1(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function nT(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var iT=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=nT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},H0=class{constructor(){Ot(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},rT=100/6,is={passive:!1};function k0(r,t){return r===1?rT:r===2?t:1}var sT=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new H0);Ot(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ot(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ot(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ot(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=k0(n,this.window.width),s=k0(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,is),this.element.addEventListener("touchstart",this.onTouchStart,is),this.element.addEventListener("touchmove",this.onTouchMove,is),this.element.addEventListener("touchend",this.onTouchEnd,is)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,is),this.element.removeEventListener("touchstart",this.onTouchStart,is),this.element.removeEventListener("touchmove",this.onTouchMove,is),this.element.removeEventListener("touchend",this.onTouchEnd,is)}},V0=r=>Math.min(1,1.001-2**(-10*r)),W0=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:_,overscroll:v=!0,autoRaf:w=!1,anchors:S=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:g=!1,naiveDimensions:y=g,stopInertiaOnNavigate:R=!1,respectReducedMotion:A=!0}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"_rafId",null);Ot(this,"_isDraggingSelection",!1);Ot(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ot(this,"isTouching");Ot(this,"isIos");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new eT);Ot(this,"emitter",new H0);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ot(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ot(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ot(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ot(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ot(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=z0,window.lenis||(window.lenis={}),window.lenis.version=z0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=V0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:_,overscroll:v,autoRaf:w,anchors:S,autoToggle:T,allowNestedScroll:E,naiveDimensions:y,stopInertiaOnNavigate:R,respectReducedMotion:A},this.dimensions=new iT(r,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new sT(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(w)?0:w)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=G0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=V0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,_,v,w,S,T;if(x==="horizontal")m=Math.round(r.scrollLeft),_=d-f,v=t,w=s,S=a,T=c;else if(x==="vertical")m=Math.round(r.scrollTop),_=u-p,v=e,w=o,S=l,T=h;else return!1;return!T&&(m>=_||m<=0)?!0:(v>0?m<_:m>0)&&w&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?tT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Fs={bg:new Yt("#0d0403"),cream:new Yt("#E8D2B5"),sage:new Yt("#A5A79B"),hot:new Yt("#c23a2c")},X0=8,oT=`
uniform float uTime, uMorph, uSize, uPR, uIntro, uWave, uMax, uCalm;
uniform vec3 uMouse;
attribute vec3 p1; attribute vec3 p2; attribute vec3 p3; attribute vec3 p4; attribute vec3 p5; attribute vec3 p6; attribute vec3 p7;
attribute vec4 aRand;
varying float vHot; varying float vMix; varying float vAlpha;
vec3 shapeAt(float i){
  if(i<0.5) return position; if(i<1.5) return p1; if(i<2.5) return p2; if(i<3.5) return p3;
  if(i<4.5) return p4; if(i<5.5) return p5; if(i<6.5) return p6; return p7;
}
void main(){
  float m = clamp(uMorph, 0., uMax);
  float fi = min(floor(m), uMax - 1.); float f = m - fi;
  float d = aRand.x * 0.42;
  float t = smoothstep(d, d + 0.58, f);
  vec3 p = mix(shapeAt(fi), shapeAt(fi + 1.), t);
  float sw = sin(t * 3.14159);
  float ph = aRand.w * 6.2831;
  p.y += uWave * 0.28 * sin(p.x * 1.25 + uTime * 1.1) * cos(p.z * 1.05 + uTime * 0.8);
  p += vec3(sin(uTime*.6+ph+p.y*1.3), cos(uTime*.5+ph+p.x*1.1), sin(uTime*.55+ph*1.3+p.z)) * (0.03 * (1. - 0.8 * uCalm) + sw * (0.35 + aRand.y * 0.9));
  vec3 dm = p - uMouse; float dist = length(dm);
  p += (dm / max(dist, 1e-3)) * smoothstep(1.5, 0., dist) * 0.6;
  vec3 dir = normalize(p + vec3(1e-3));
  p = mix(p + dir * (6. + aRand.y * 10.) + vec3(0., 0., 4.), p, smoothstep(aRand.x * .5, aRand.x * .5 + .5, uIntro));
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (0.45 + aRand.y) * (1. - 0.22 * uCalm) * uPR / -mv.z;
  vHot = step(0.9, aRand.z) * (1. - 0.85 * uCalm);
  vMix = aRand.z;
  vAlpha = 0.6 + 0.4 * sin(uTime * 1.4 + ph);
}`,aT=`
uniform vec3 uC1, uC2, uHot; uniform float uEnergy, uOpacity;
varying float vHot; varying float vMix; varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - .5); if (d > .5) discard;
  float a = pow(smoothstep(.5, 0., d), 1.4);
  vec3 c = mix(uC1, uC2, smoothstep(.35, .8, vMix));
  c = mix(c, uHot * 1.5, vHot * (0.55 + uEnergy * 0.45));
  gl_FragColor = vec4(c, a * vAlpha * uOpacity);
}`,lT=`
attribute float aT; attribute float aOff;
varying float vT; varying float vOff;
void main(){ vT = aT; vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,cT=`
uniform float uTime, uLines; uniform vec3 uC, uHot;
varying float vT; varying float vOff;
void main(){
  float x = fract(vT - uTime * 0.45 + vOff);
  float pulse = exp(-pow((x - .5) * 16., 2.));
  gl_FragColor = vec4(mix(uC, uHot * 1.6, pulse), (0.06 + pulse * 0.75) * uLines);
}`;function q0(r,t,e,n=[]){let i=new nh({canvas:r,antialias:!0,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio||1,t?1.5:2);i.setPixelRatio(s),i.setSize(innerWidth,innerHeight,!1),i.setClearColor(Fs.bg,1);let o=new ta,a=new Nn(40,innerWidth/innerHeight,.1,100);a.position.set(0,0,9);let l=t?3800:9e3,c=new Zn,h=e.slice(0,X0).map(T=>T(l));for(let T=0;T<X0;T++)c.setAttribute(T===0?"position":`p${T}`,new Xn(h[Math.min(T,h.length-1)],3));let d=new Float32Array(l*4);for(let T=0;T<l*4;T++)d[T]=Math.random();c.setAttribute("aRand",new Xn(d,4));let u={uTime:{value:0},uMorph:{value:0},uMax:{value:h.length-1},uSize:{value:t?32:40},uPR:{value:s},uIntro:{value:0},uWave:{value:0},uCalm:{value:0},uMouse:{value:new q(99,99,99)},uC1:{value:Fs.cream},uC2:{value:Fs.sage},uHot:{value:Fs.hot},uEnergy:{value:0},uOpacity:{value:t?.7:1}},f=new co(c,new hi({vertexShader:oT,fragmentShader:aT,uniforms:u,transparent:!0,depthWrite:!1,blending:mo}));f.frustumCulled=!1;let p=new lr;p.add(f);let x=n.map(({index:T,net:E})=>{let g=[],y=[],R=[];E.edges.forEach(([N,V])=>{let I=E.nodes[N].p,z=E.nodes[V].p,H=Math.random();g.push(...I,...z),y.push(0,1),R.push(H,H)});let A=new Zn;A.setAttribute("position",new fn(g,3)),A.setAttribute("aT",new fn(y,1)),A.setAttribute("aOff",new fn(R,1));let L={uTime:u.uTime,uLines:{value:0},uC:{value:Fs.cream},uHot:{value:Fs.hot}};return p.add(new ia(A,new hi({vertexShader:lT,fragmentShader:cT,uniforms:L,transparent:!0,depthWrite:!1,blending:mo}))),{index:T,u:L}});o.add(p);let m=t?500:1400,_=new Float32Array(m*3);for(let T=0;T<m;T++)_.set([Math.random()*28-14,Math.random()*18-9,Math.random()*14-12],T*3);let v=new Zn;v.setAttribute("position",new Xn(_,3));let w=new co(v,new lo({color:Fs.sage,size:.025,transparent:!0,opacity:.35,depthWrite:!1}));o.add(w);function S(){a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1)}return{renderer:i,scene:o,camera:a,group:p,uniforms:u,lineSets:x,dust:w,resize:S}}var Ye=(r=0,t=1)=>r+Math.random()*(t-r),fe=()=>{let r=0,t=0;for(;!r;)r=Math.random();for(;!t;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*t)},Ar=()=>{let r=Ye(0,Math.PI*2),t=Ye(-1,1),e=Math.sqrt(1-t*t);return[e*Math.cos(r),e*Math.sin(r),t]},Ze=(r,t)=>{let e=new Float32Array(r*3);for(let n=0;n<r;n++)e.set(t(n),n*3);return e};function nl(r){let t=r.map(([n,i])=>Math.hypot(i[0]-n[0],i[1]-n[1],i[2]-n[2])),e=t.reduce((n,i)=>n+i,0);return(n=.02)=>{let i=Math.random()*e,s=0;for(;i>t[s];)i-=t[s],s++;let[o,a]=r[s],l=Math.random();return[o[0]+(a[0]-o[0])*l+fe()*n,o[1]+(a[1]-o[1])*l+fe()*n,o[2]+(a[2]-o[2])*l+fe()*n]}}var Er=(r,t,e,n,i,s)=>{let o=r-n/2,a=r+n/2,l=t-i/2,c=t+i/2,h=e-s/2,d=e+s/2,u=[[o,l,h],[a,l,h],[a,c,h],[o,c,h],[o,l,d],[a,l,d],[a,c,d],[o,c,d]];return[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].map(([f,p])=>[u[f],u[p]])};function Zh(r){let t=Math.floor(r*.78),e=Math.PI*(3-Math.sqrt(5));return Ze(r,n=>{if(n<t){let o=1-n/(t-1)*2,a=Math.sqrt(1-o*o),l=e*n,c=2.3+fe()*.04;return[Math.cos(l)*a*c,o*c,Math.sin(l)*a*c]}let i=Ar(),s=Math.pow(Math.random(),.5)*1.9;return[i[0]*s,i[1]*s,i[2]*s]})}function zd(r){let t=Math.ceil(Math.sqrt(r)),e=7.2;return Ze(r,n=>{let i=(n%t/(t-1)-.5)*e,s=(Math.floor(n/t)/(t-1)-.5)*e;return[i,Math.sin(i*.9)*.35+Math.cos(s*.8)*.35,s]})}function Y0(r){return Ze(r,()=>{let t=Ye(-1,1),e=1.15;if(Math.random()<.78){let o=t*Math.PI*3.2+(Math.random()<.5?0:Math.PI);return[Math.cos(o)*e+fe()*.05,t*3.1,Math.sin(o)*e+fe()*.05]}let n=Math.round(t*14)/14,i=n*Math.PI*3.2,s=Ye(-1,1);return[Math.cos(i)*e*s,n*3.1,Math.sin(i)*e*s]})}function Z0(r){return Ze(r,()=>{let t=Ye(0,Math.PI*2),e=Math.cos(3*t)+2.1,n=Ar(),i=Math.abs(fe())*.16;return[e*Math.cos(2*t)*.82+n[0]*i,e*Math.sin(2*t)*.82+n[1]*i,-Math.sin(3*t)*.82+n[2]*i]})}function Bs(r){return Ze(r,t=>{let e=Math.pow(Math.random(),.7)*4.4,n=t%3*(Math.PI*2/3)+e*1.05+fe()*(.35/(e+.5));return[Math.cos(n)*e,fe()*.12*(1.2-e/4.4),Math.sin(n)*e]})}function zs(r,t=6.8,e=.72,n=.09){let i=[],s=r.map((l,c)=>-t/2+t*c/(r.length-1));r.forEach((l,c)=>{for(let h=0;h<l;h++)i.push({l:c,p:[s[c],(h-(l-1)/2)*e,Ye(-.15,.15)]})});let o=[];for(let l=0;l<i.length;l++)for(let c=0;c<i.length;c++)i[c].l===i[l].l+1&&o.push([l,c]);return{fn:l=>Ze(l,c=>{if(Math.random()<.6){let p=i[c%i.length].p;return[p[0]+fe()*n,p[1]+fe()*n,p[2]+fe()*n]}let h=o[Math.floor(Math.random()*o.length)],d=i[h[0]].p,u=i[h[1]].p,f=Math.random();return[d[0]+(u[0]-d[0])*f+fe()*.015,d[1]+(u[1]-d[1])*f+fe()*.015,d[2]+(u[2]-d[2])*f]}),nodes:i,edges:o}}var kd=(r=6,t=2.2,e=.5)=>n=>Ze(n,i=>{let s=i%r/r*Math.PI*2+Math.PI/2,o=Ar(),a=e*Math.cbrt(Math.random())*(Math.random()<.7?1:.6)+(Math.random()<.6?e*.2:0);return[Math.cos(s)*t+o[0]*a,Math.sin(s)*t+o[1]*a,o[2]*a]});function Jh(r){let t=[],e=[-.85,.85];e.forEach(i=>e.forEach(s=>e.forEach(o=>t.push(...Er(i,s,o,1.25,1.25,1.25)))));let n=nl(t);return Ze(r,()=>Math.random()<.8?n(.025):[Ye(-1.5,1.5),Ye(-1.5,1.5),Ye(-1.5,1.5)])}function Vd(r){return Ze(r,()=>{if(Math.random()<.18){let i=Ar(),s=.45*Math.cbrt(Math.random());return[i[0]*s,i[1]*s,i[2]*s]}let t=1+Math.floor(Math.random()*7),e=.45+t*.3+fe()*.025,n=Ye(0,Math.PI*2);return[Math.cos(n)*e,Math.sin(n)*e,fe()*.04+Math.sin(n*3+t)*.05]})}function Gd(r){let o=Er(0,-.25,0,3,1.9,2.2),a=[-3/2,-1.2+1.9,-2.2/2],l=[3/2,-1.2+1.9,-2.2/2],c=[-3/2,-1.2+1.9,2.2/2],h=[3/2,-1.2+1.9,2.2/2],d=[0,-1.2+1.9+1.3,-2.2/2],u=[0,-1.2+1.9+1.3,2.2/2];o.push([a,d],[l,d],[c,u],[h,u],[d,u]),o.push(...Er(0,-1.2+.55,2.2/2,.6,1.1,0)),o.push(...Er(-.95,-1.2+1.15,2.2/2,.55,.5,0),...Er(.95,-1.2+1.15,2.2/2,.55,.5,0));let f=nl(o);return Ze(r,()=>f(.03))}function J0(r){let t=[];t.push(...Er(0,-1.6+.1,0,4.2+.6,.2,1.8),...Er(0,-1.6+.3,0,4.2+.3,.2,1.5)),t.push(...Er(0,-1.6+2.75,0,4.2+.3,.2,1.5));let s=[-(4.2+.3)/2,-1.6+2.85,.75],o=[(4.2+.3)/2,-1.6+2.85,.75],a=[0,-1.6+3.75,.75];t.push([s,o],[s,a],[o,a]);let l=nl(t);return Ze(r,()=>{if(Math.random()<.55){let c=Math.floor(Math.random()*6),h=-4.2/2+.25+c*(4.2-.5)/5,d=Ye(0,Math.PI*2),u=Ye(-1.6+.4,-1.6+2.65);return[h+Math.cos(d)*.17,u,.45+Math.sin(d)*.17]}return l(.03)})}function $0(r){let t=[];for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,o=i%2?1.05:2.5;t.push([Math.cos(s)*o,Math.sin(s)*o])}let e=[];[-.3,.3].forEach(i=>t.forEach((s,o)=>{let a=t[(o+1)%10];e.push([[s[0],s[1],i],[a[0],a[1],i]])})),t.forEach(i=>e.push([[i[0],i[1],-.3],[i[0],i[1],.3]]));let n=nl(e);return Ze(r,()=>{if(Math.random()<.82)return n(.03);let i=Ar(),s=Math.cbrt(Math.random())*.9;return[i[0]*s,i[1]*s,i[2]*s*.4]})}function K0(r){return Ze(r,()=>{let t=Ye(0,Math.PI*2),e=Math.sin(t),n=1+e*e,i=3.1,s=Ar(),o=Math.abs(fe())*.17;return[i*Math.cos(t)/n+s[0]*o,i*e*Math.cos(t)/n+s[1]*o,Math.sin(t*2)*.35+s[2]*o]})}function Hd(r){return Ze(r,()=>{let t=Math.random()<.5?-1:1,e=Math.random(),n=Ye(-1.6,1.6),i=Math.floor(Math.random()*5),s=t*e*2.5,o=Math.sin(e*Math.PI)*.5+e*.4-i*.06*e;if(Math.random()<.3){let a=Math.random()<.5?1.6:-1.6;return[s,a,o]}return[s+fe()*.01,n,o+fe()*.01]})}function Q0(r){return Ze(r,t=>{let e=t%2?1.7:-1.7,n=t%2?1.35:1.05,i=Ar(),s=Math.random()<.7?n:n*Math.cbrt(Math.random());return[e+i[0]*s,(t%2?-.25:.25)+i[1]*s,i[2]*s]})}function j0(r){let t=[];for(let n=0;n<6;n++){let i=-1+n*.4,s=.9-n*.36,o=-1+n*.4;t.push(...Er(i,s,o,2.6,1.6,0).slice(0,4))}let e=nl(t);return Ze(r,()=>{if(Math.random()<.75)return e(.02);let n=Math.floor(Math.random()*6);return[-1+n*.4+Ye(-1.3,1.3),.9-n*.36+Ye(-.8,.8),-1+n*.4]})}function t_(r){return Ze(r,()=>{if(Math.random()<.22){let a=Ar(),l=.55*Math.cbrt(Math.random());return[a[0]*l,a[1]*l,a[2]*l]}let t=Math.floor(Math.random()*3),e=Ye(0,Math.PI*2),n=2.3+fe()*.04,i=Math.cos(e)*n,s=Math.sin(e)*n*.38,o=t*Math.PI/3;return[i*Math.cos(o)-s*Math.sin(o),i*Math.sin(o)+s*Math.cos(o),Math.sin(e)*n*.3*(t-1)]})}function e_(r){return Ze(r,()=>{let t=Math.floor(Math.random()*6),e=2.2-t*.88,n=2.5*Math.pow(.66,t);if(Math.random()<.85){let l=Ye(0,Math.PI*2);return[Math.cos(l)*n+fe()*.03,e+fe()*.03,Math.sin(l)*n+fe()*.03]}let i=Math.random(),s=Ye(0,Math.PI*2),o=2.2-i*4.4,a=2.5*Math.pow(.66,i*5);return[Math.cos(s)*a,o,Math.sin(s)*a]})}function n_(r){return Ze(r,()=>{let t=Math.floor(Math.random()*3),e=-1.5+t*1.15,n=Ye(0,Math.PI*2),i=1.9,s=Math.random();if(s<.5){let a=e+(Math.random()<.5?0:.85);return[Math.cos(n)*i+fe()*.02,a,Math.sin(n)*i+fe()*.02]}if(s<.8)return[Math.cos(n)*i,e+Math.random()*.85,Math.sin(n)*i];let o=Math.sqrt(Math.random())*i;return[Math.cos(n)*o,e+.85,Math.sin(n)*o]})}function i_(r){return Ze(r,()=>{let t=Ye(0,Math.PI*2),e=Math.random()<.8,n=e?1:Math.cbrt(Math.random()),i=16*Math.pow(Math.sin(t),3),s=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t),o=.135*n,a=Math.hypot(i,s)/17,l=(Math.random()<.5?-1:1)*Math.sqrt(Math.max(0,1-a*a))*.9*Math.random()**(e?.15:1);return[i*o+fe()*.03,s*o+.35+fe()*.03,l]})}function r_(r){let t=[],e=[];function n(o,a,l,c,h){let d=[o[0]+Math.sin(l)*a,o[1]+Math.cos(l)*a,o[2]+fe()*.12];if(t.push([o,d,h]),c===0){e.push(d);return}let u=c>3?2:3;for(let f=0;f<u;f++)n(d,a*.74,l+(f-(u-1)/2)*.62+fe()*.1,c-1,h*.6)}n([0,-2.6,0],1.25,0,5,1);let i=t.map(([o,a,l])=>Math.hypot(a[0]-o[0],a[1]-o[1])*(.4+l)),s=i.reduce((o,a)=>o+a,0);return Ze(r,()=>{if(Math.random()<.45){let c=Math.random()*s,h=0;for(;c>i[h];)c-=i[h],h++;let[d,u,f]=t[h],p=Math.random(),x=.05+f*.09;return[d[0]+(u[0]-d[0])*p+fe()*x,d[1]+(u[1]-d[1])*p+fe()*x,d[2]+(u[2]-d[2])*p+fe()*x]}let o=e[Math.floor(Math.random()*e.length)],a=Ar(),l=.38*Math.cbrt(Math.random());return[o[0]+a[0]*l,o[1]+a[1]*l*.8,o[2]+a[2]*l*.6]})}var s_=zs([4,7,7,3]),o_=zs([1,5,7,5,1],6.8,.62),a_=zs([1,4,6,4,1],6.8,.7),l_=zs([4,7,7,3]),c_=zs([2,1],4.6,2.6,.32),h_=zs([4,7,7,3]),Wd={unofficial:{shapes:[i_,Zh,Hd,Gd,Vd,h_.fn,r_,Bs],place:[[2.8,.1,.85,0,.35],[-3,0,.8,0,1],[3,0,.82,-.3,0],[-3,.1,.9,.22,1],[3,0,.95,0,.35],[-2.95,.1,.56,0,0],[3,.15,.9,0,0],[0,-.3,1.1,1.08,.5]],nets:[{index:5,net:h_}]},research:{shapes:[l_.fn,zd,e_,c_.fn,Jh,n_,Bs],place:[[3,.1,.55,0,0],[3.1,-.3,.6,.85,.3],[-3,0,.88,.25,1],[2.85,0,.75,0,0],[-3,0,.85,.45,1],[3,0,.88,.3,.6],[0,-.3,1.1,1.08,.5]],nets:[{index:0,net:l_},{index:3,net:c_}],wave:1},home:{shapes:[Zh,Zh,zd,Y0,s_.fn,Z0,Bs],place:[[2.55,.15,.95,0,1],[4.3,1.7,.42,0,1],[-2.9,-.2,.9,.85,.3],[3.1,0,.95,0,1],[0,.1,1,0,0],[0,-1.15,.68,0,1],[0,-.3,1.1,1.08,.5]],nets:[{index:4,net:s_}],wave:2},projects:{shapes:[kd(6,2.1,.55),o_.fn,Jh,Vd,Gd,J0,Bs],place:[[2.7,0,.95,0,.8],[2.95,.2,.56,0,0],[-3.1,0,.95,.45,1],[3.1,0,.95,0,.35],[-3,.1,.95,.22,1],[3,-.1,.9,.1,0],[0,-.3,1.1,1.08,.5]],nets:[{index:1,net:o_}]},leadership:{shapes:[$0,kd(7,2.1,.42),a_.fn,Jh,K0,Bs],place:[[2.7,0,.9,0,0],[2.9,0,.85,0,0],[-2.95,.1,.56,0,0],[2.9,0,.8,.45,1],[2.9,0,.62,.2,.5],[0,-.3,1.1,1.08,.5]],nets:[{index:2,net:a_}]},teaching:{shapes:[Hd,Q0,j0,t_,Bs],place:[[2.75,0,.8,-.35,.4],[2.85,0,.7,0,.5],[-3,0,.92,.2,.25],[2.9,0,.85,.3,.35],[0,-.3,1.1,1.08,.5]],nets:[]}};var u_="vaf-sound";var Xd=[[110,164.81,220,261.63],[98,146.83,196,246.94],[87.31,130.81,174.61,220],[130.81,196,261.63,329.63],[146.83,220,293.66,349.23],[123.47,185,246.94,293.66],[110,164.81,220,329.63],[98,146.83,196,293.66]];function f_(){let r=null,t,e,n,i=[],s,o,a=!1,l=0;try{a=localStorage.getItem(u_)==="1"}catch{}function c(g=3.2,y=2.6){let R=r.sampleRate*g,A=r.createBuffer(2,R,r.sampleRate);for(let L=0;L<2;L++){let N=A.getChannelData(L);for(let V=0;V<R;V++)N[V]=(Math.random()*2-1)*Math.pow(1-V/R,y)}return A}function h(g=2){let y=r.sampleRate*g,R=r.createBuffer(1,y,r.sampleRate),A=R.getChannelData(0);for(let L=0;L<y;L++)A[L]=Math.random()*2-1;return R}function d(){r=new(window.AudioContext||window.webkitAudioContext);let g=r.createDynamicsCompressor();g.threshold.value=-18,g.ratio.value=3,t=r.createGain(),t.gain.value=0,t.connect(g).connect(r.destination),o=r.createConvolver(),o.buffer=c();let y=r.createGain();y.gain.value=.55,o.connect(y).connect(t),n=r.createBiquadFilter(),n.type="lowpass",n.frequency.value=700,n.Q.value=.6,e=r.createGain(),e.gain.value=.11,n.connect(e),e.connect(t),e.connect(o);let R=r.createOscillator(),A=r.createGain();R.frequency.value=.07,A.gain.value=260,R.connect(A).connect(n.frequency),R.start(),Xd[0].forEach((V,I)=>{["sine","triangle"].forEach((z,H)=>{let U=r.createOscillator(),j=r.createGain(),W=r.createStereoPanner();U.type=z,U.frequency.value=V,U.detune.value=(H?7:-7)+(I-1.5)*2,j.gain.value=(z==="sine"?.22:.08)/(1+I*.35),W.pan.value=(I%2?.35:-.35)*(H?-1:1),U.connect(j).connect(W).connect(n),U.start(),i.push({o:U,i:I})})});let L=r.createBufferSource();L.buffer=h(4),L.loop=!0;let N=r.createBiquadFilter();N.type="bandpass",N.frequency.value=900,N.Q.value=.4,s=r.createGain(),s.gain.value=.012,L.connect(N).connect(s).connect(t),s.connect(o),L.start(),f(l,!0)}function u(g,y=1.2){r&&(t.gain.cancelScheduledValues(r.currentTime),t.gain.setTargetAtTime(g,r.currentTime,y/3))}function f(g,y=!1){if(l=g,!r)return;let R=Xd[g%Xd.length],A=y?.01:.9;i.forEach(({o:L,i:N})=>L.frequency.setTargetAtTime(R[N],r.currentTime,A)),y||x()}function p(g,y,R,A){let L=r.currentTime;g.gain.setValueAtTime(1e-4,L),g.gain.exponentialRampToValueAtTime(y,L+R),g.gain.exponentialRampToValueAtTime(1e-4,L+R+A)}function x(g=!0){if(!r||!a)return;let y=r.createBufferSource();y.buffer=h(1.6);let R=r.createBiquadFilter();R.type="bandpass",R.Q.value=1.4;let A=r.createGain(),L=r.currentTime;R.frequency.setValueAtTime(g?250:2200,L),R.frequency.exponentialRampToValueAtTime(g?2200:220,L+1.1),y.connect(R).connect(A),A.connect(t),A.connect(o),p(A,.09,.35,1),y.start(L),y.stop(L+1.6)}function m(g=!0){if(!r||!a)return;let y=r.createOscillator(),R=r.createGain(),A=r.currentTime;y.type="sine";let L=(g?1760:880)*(1+(Math.random()-.5)*.06);y.frequency.setValueAtTime(L,A),y.frequency.exponentialRampToValueAtTime(L*.6,A+.08),y.connect(R),R.connect(t),R.connect(o),p(R,g?.035:.06,.004,.09),y.start(A),y.stop(A+.15)}let _=null;function v(g){if(!(!r||!a||r.state!=="running")){if(!_){let y=r.createOscillator(),R=r.createGain(),A=r.createBiquadFilter();y.type="sawtooth",A.type="lowpass",A.frequency.value=900,R.gain.value=1e-4,y.connect(A).connect(R),R.connect(t),R.connect(o),y.start(),_={o:y,g:R},R.gain.setTargetAtTime(.03,r.currentTime,.2)}if(_.o.frequency.setTargetAtTime(110*Math.pow(2,g*2),r.currentTime,.05),g>=1){let y=_;y.g.gain.setTargetAtTime(1e-4,r.currentTime,.25),setTimeout(()=>y.o.stop(),1500),_=null,w()}}}function w(){!r||!a||[880,1318.5].forEach((g,y)=>{let R=r.createOscillator(),A=r.createGain(),L=r.currentTime+y*.07;R.type="sine",R.frequency.value=g,R.connect(A),A.connect(t),A.connect(o),A.gain.setValueAtTime(1e-4,L),A.gain.exponentialRampToValueAtTime(.05,L+.01),A.gain.exponentialRampToValueAtTime(1e-4,L+1.4),R.start(L),R.stop(L+1.5)})}function S(g){!r||!a||n.frequency.setTargetAtTime(700+Math.min(Math.abs(g)*40,1600),r.currentTime,.4)}async function T(){if(r||d(),r.state!=="running")try{await r.resume()}catch{}u(1.9,1.6)}function E(g){a=g;try{localStorage.setItem(u_,g?"1":"0")}catch{}document.body.classList.toggle("sound-on",a),a?T():u(0,.6)}if(document.body.classList.toggle("sound-on",a),a){d();let g=()=>{T(),removeEventListener("pointerdown",g,!0),removeEventListener("keydown",g,!0)};r.state==="running"?u(1.9,1.6):(addEventListener("pointerdown",g,!0),addEventListener("keydown",g,!0))}return{get on(){return a},toggle(){E(!a),a&&setTimeout(()=>m(!1),60)},setSection:f,tick:m,whoosh:x,loaderProgress:v,scrollVelocity:S,leave(){a&&r&&(x(!1),u(0,.9))}}}De.registerPlugin(qt);var ks=Wd[document.body.dataset.page]||Wd.home,rs=f_(),S_=matchMedia("(max-width: 860px)").matches,M_=matchMedia("(hover: none)").matches,uT=matchMedia("(prefers-reduced-motion: reduce)").matches,Vs=new W0({duration:1.25,smoothWheel:!0});window.__lenis=Vs;Vs.on("scroll",qt.update);De.ticker.add(r=>Vs.raf(r*1e3));De.ticker.lagSmoothing(0);document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href");e.length<2||(t.preventDefault(),Vs.scrollTo(e,{duration:1.8}))}));var Kh=document.getElementById("loader");document.querySelectorAll("a[href]").forEach(r=>{let t=r.getAttribute("href");!t||t.startsWith("#")||/^(https?:|mailto:|tel:)/.test(t)||r.target==="_blank"||r.addEventListener("click",e=>{e.metaKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),Kh.querySelector(".l-num").textContent="000",Kh.querySelector(".l-label").textContent="Initialising network",De.set(".loader-bar i",{scaleX:0}),rs.leave(),De.fromTo(Kh,{yPercent:100},{yPercent:0,duration:.75,ease:"expo.inOut",onComplete:()=>{location.href=t}}))})});addEventListener("pageshow",r=>{r.persisted&&De.set(Kh,{yPercent:-100})});var yi=q0(document.getElementById("gl"),S_,ks.shapes,ks.nets);addEventListener("resize",()=>{yi.resize(),eu()});var er=ks.place.map((r,t)=>S_?[0,t===0?.7:0,r[2]*.66,r[3],r[4]]:r),b_=[...document.querySelectorAll("[data-s]")],Qh=[];function eu(){Qh=b_.map(r=>r.getBoundingClientRect().top+scrollY)}eu();addEventListener("load",eu);setTimeout(eu,1200);var Se={morph:0,x:er[0][0],y:er[0][1],s:er[0][2],tilt:er[0][3],spin:er[0][4],angle:0},ni={x:0,y:0,sx:0,sy:0},d_=new ha,fT=new li(new q(0,0,1),0),p_=new q;addEventListener("pointermove",r=>{ni.x=r.clientX/innerWidth*2-1,ni.y=-(r.clientY/innerHeight)*2+1});var dT=r=>r*r*(3-2*r),ei=(r,t,e)=>r+(t-r)*e;function pT(){let r=scrollY+innerHeight*.55,t=0;for(let n=0;n<Qh.length;n++)r>=Qh[n]&&(t=n);if(t=Math.min(t,er.length-1),t===0)return{m:0,a:er[0],b:er[0],t:0};let e=dT(Math.min(Math.max((r-Qh[t])/(innerHeight*.65),0),1));return{m:t-1+e,a:er[t-1],b:er[t],t:e}}var m_=document.getElementById("energy"),g_=document.getElementById("secnum"),__=document.getElementById("sectot");__&&(__.textContent=String(b_.length).padStart(2,"0"));var mT=[...document.querySelectorAll(".dots a")],x_=performance.now(),qd=-1;De.ticker.add(()=>{let r=performance.now(),t=Math.min((r-x_)/1e3,.05);x_=r;let e=yi.uniforms;e.uTime.value+=t;let n=pT(),i=1-Math.pow(.0025,t);if(Se.morph=ei(Se.morph,n.m,i),Se.x=ei(Se.x,ei(n.a[0],n.b[0],n.t),i),Se.y=ei(Se.y,ei(n.a[1],n.b[1],n.t),i),Se.s=ei(Se.s,ei(n.a[2],n.b[2],n.t),i),Se.tilt=ei(Se.tilt,ei(n.a[3],n.b[3],n.t),i),Se.spin=ei(Se.spin,ei(n.a[4],n.b[4],n.t),i),Se.spin>.15)Se.angle+=t*.16*Se.spin;else{let c=Math.round(Se.angle/(Math.PI*2))*Math.PI*2;Se.angle=ei(Se.angle,c,1-Math.pow(.004,t))}ni.sx=ei(ni.sx,ni.x,1-Math.pow(.02,t)),ni.sy=ei(ni.sy,ni.y,1-Math.pow(.02,t));let s=yi.group;s.position.set(Se.x,Se.y,0),s.scale.setScalar(Se.s),s.rotation.set(Se.tilt+ni.sy*.12,Se.angle+ni.sx*.25,0),yi.camera.position.x=ni.sx*.35,yi.camera.position.y=ni.sy*.25,yi.camera.lookAt(0,0,0),yi.dust.rotation.y+=t*.01,e.uMorph.value=Se.morph,e.uWave.value=ks.wave!=null?Math.max(0,1-Math.abs(Se.morph-ks.wave)*1.4):0,e.uCalm.value=ks.calm!=null?Math.max(0,1-Math.abs(Se.morph-ks.calm)*1.5):0,yi.lineSets.forEach(c=>{c.u.uLines.value=Math.max(0,1-Math.abs(Se.morph-c.index)*1.6)}),M_||(s.updateMatrixWorld(),d_.setFromCamera({x:ni.x,y:ni.y},yi.camera),d_.ray.intersectPlane(fT,p_)&&e.uMouse.value.copy(s.worldToLocal(p_.clone())));let o=document.documentElement.scrollHeight-innerHeight,a=o>0?scrollY/o:0;e.uEnergy.value=a,m_&&(m_.textContent=(a*.742).toFixed(3));let l=Math.round(Se.morph);l!==qd&&(qd!==-1&&rs.setSection(l),qd=l,g_&&(g_.textContent=String(l+1).padStart(2,"0")),mT.forEach((c,h)=>c.classList.toggle("on",h===l))),yi.renderer.render(yi.scene,yi.camera)});document.querySelectorAll("[data-split]").forEach(r=>{let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.append(" ");return}let o=document.createElement("span");o.className="w";let a=document.createElement("span");a.className="wi",a.textContent=s,o.append(a),i.append(o)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};t(r)});document.querySelectorAll("[data-chars]").forEach(r=>{r.innerHTML=[...r.textContent].map(t=>`<span class="ch"><span class="chi">${t}</span></span>`).join("")});var v_=document.getElementById("lnum"),jh=uT,tu=De.timeline({paused:!0});if(jh)v_.textContent=document.body.dataset.title||"",document.querySelector(".l-label").textContent="",De.set(".loader-bar i",{scaleX:1}),tu.to("#loader",{yPercent:-100,duration:.95,ease:"expo.inOut",delay:.25});else{let r={v:0};tu.to(r,{v:100,duration:1.6,ease:"power2.inOut",onUpdate:()=>{v_.textContent=String(Math.round(r.v)).padStart(3,"0"),rs.loaderProgress(r.v/100)}}).to(".loader-bar i",{scaleX:1,duration:1.6,ease:"power2.inOut"},0).to("#loader",{yPercent:-100,duration:1.1,ease:"expo.inOut"},"+=0.15")}tu.to(yi.uniforms.uIntro,{value:1,duration:jh?2:2.6,ease:"power3.out"},"-=0.9").from(".hero .chi",{yPercent:115,duration:1.1,ease:"expo.out",stagger:.035},jh?"-=1.7":"-=2.3").from(".hero [data-split] .wi",{yPercent:115,duration:1.1,ease:"expo.out",stagger:.05},"<").from(".hero .rv",{y:30,opacity:0,duration:.9,ease:"power3.out",stagger:.08},"-=0.8").from("nav, .hud, .dots",{opacity:0,duration:.8},"-=1");Vs.stop();var y_=!1,Yd=()=>{y_||(y_=!0,tu.play().then(()=>Vs.start()))};document.readyState==="complete"?Yd():addEventListener("load",Yd);setTimeout(Yd,2500);De.utils.toArray("section:not(.hero) [data-split]").forEach(r=>{De.from(r.querySelectorAll(".wi"),{yPercent:110,duration:1.1,ease:"expo.out",stagger:.04,scrollTrigger:{trigger:r,start:"top 85%"}})});qt.batch("section:not(.hero) .rv",{start:"top 90%",onEnter:r=>De.from(r,{y:50,opacity:0,duration:1,ease:"power3.out",stagger:.09,overwrite:!0})});document.querySelector(".band")&&(De.to(".band-track",{xPercent:-50,ease:"none",duration:30,repeat:-1}),De.to(".band",{xPercent:-8,ease:"none",scrollTrigger:{trigger:".band",start:"top bottom",end:"bottom top",scrub:!0}}));document.querySelectorAll("[data-count]").forEach(r=>{let t=+r.dataset.count,e=r.dataset.suffix||"",n={v:0},i=!!r.closest(".hero");qt.create({trigger:r,start:"top 95%",once:!0,onEnter:()=>De.to(n,{v:t,duration:1.6,delay:i?jh?1.2:2.4:.2,ease:"power3.out",onUpdate:()=>{r.textContent=Math.round(n.v)+e}})})});if(!M_){let r=document.querySelector(".cur-dot"),t=document.querySelector(".cur-ring"),e=De.quickTo(t,"x",{duration:.45,ease:"power3"}),n=De.quickTo(t,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",i=>{De.set(r,{x:i.clientX,y:i.clientY}),e(i.clientX),n(i.clientY)}),document.querySelectorAll("a, button, .tilt").forEach(i=>{i.addEventListener("pointerenter",()=>{document.body.classList.add("hovering"),rs.tick(!0)}),i.addEventListener("pointerleave",()=>document.body.classList.remove("hovering"))}),document.querySelectorAll(".mag").forEach(i=>{i.addEventListener("pointermove",s=>{let o=i.getBoundingClientRect();De.to(i,{x:(s.clientX-o.left-o.width/2)*.3,y:(s.clientY-o.top-o.height/2)*.4,duration:.4,ease:"power3"})}),i.addEventListener("pointerleave",()=>De.to(i,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)"}))}),document.querySelectorAll(".tilt").forEach(i=>{i.addEventListener("pointermove",s=>{let o=i.getBoundingClientRect(),a=(s.clientX-o.left)/o.width-.5,l=(s.clientY-o.top)/o.height-.5;De.to(i,{rotateY:a*6,rotateX:-l*6,duration:.5,ease:"power3",transformPerspective:1e3}),i.style.setProperty("--mx",`${(a+.5)*100}%`),i.style.setProperty("--my",`${(l+.5)*100}%`)}),i.addEventListener("pointerleave",()=>De.to(i,{rotateY:0,rotateX:0,duration:.8,ease:"power3"}))})}var gT=document.querySelector("nav");Vs.on("scroll",({scroll:r,velocity:t})=>{gT.classList.toggle("scrolled",r>60),rs.scrollVelocity(t||0)});var $h=document.getElementById("sound");if($h){let r=()=>{$h.querySelector(".s-label").textContent=rs.on?"Sound on":"Sound off",$h.setAttribute("aria-pressed",rs.on)};r(),$h.addEventListener("click",()=>{rs.toggle(),r()})}})();
