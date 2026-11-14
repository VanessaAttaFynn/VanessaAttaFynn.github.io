(()=>{var C_=Object.defineProperty;var R_=(r,t,e)=>t in r?C_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ot=(r,t,e)=>R_(r,typeof t!="symbol"?t+"":t,e);var Ep=0,Iu=1,Ap=2;var fa=1,Cp=2,fo=3,Hr=0,Un=1,Xi=2,ms=0,po=1,mo=2,Lu=3,Du=4,Rp=5;var gs=100,Pp=101,Ip=102,Lp=103,Dp=104,Np=200,Op=201,Up=202,Fp=203,Nu=204,Ou=205,Bp=206,zp=207,kp=208,Vp=209,Gp=210,Hp=211,Wp=212,Xp=213,qp=214,Il=0,Ll=1,Dl=2,io=3,Nl=4,Ol=5,Ul=6,Fl=7,Uu=0,Yp=1,Zp=2,qi=0,Fu=1,Bu=2,zu=3,ku=4,Vu=5,Gu=6,Hu=7;var Wu=300,_s=301,go=302,pc=303,mc=304,Bl=1e3,Vi=1001,zl=1002,dn=1003,Jp=1004;var da=1005;var On=1006,gc=1007;var pr=1008;var fi=1009,Xu=1010,qu=1011,_o=1012,_c=1013,Ni=1014,Oi=1015,Ui=1016,xc=1017,vc=1018,xs=1020,Yu=35902,Zu=35899,Ju=1021,$u=1022,Fi=1023,ur=1026,mr=1027,Ku=1028,yc=1029,Wr=1030,Mc=1031;var Sc=1033,pa=33776,ma=33777,ga=33778,_a=33779,bc=35840,Tc=35841,wc=35842,Ec=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,xa=37490,Lc=37491,Dc=37808,Nc=37809,Oc=37810,Uc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,va=36285,Qc=36286;var Jo=2300,kl=2301,Rl=2302,bu=2303,Tu=2400,wu=2401,Eu=2402;var $p=3200;var Qu=0,Kp=1,gr="",ai="srgb",$o="srgb-linear",Ko="linear",_e="srgb";var Pl=7680;var Qp=519,jp=512,tm=513,em=514,ju=515,nm=516,im=517,tf=518,ef=519,rm=35044;var nf="300 es",bi=2e3,Qo=2001;function P_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function I_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sm(){let r=jo("canvas");return r.style.display="block",r}var Kd={},ro=null;function rf(...r){let t="THREE."+r.shift();ro?ro("log",t,...r):console.log(t,...r)}function om(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function zt(...r){r=om(r);let t="THREE."+r.shift();if(ro)ro("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function kt(...r){r=om(r);let t="THREE."+r.shift();if(ro)ro("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Zo(...r){let t=r.join(" ");t in Kd||(Kd[t]=!0,zt(...r))}function am(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var lm={[Il]:Il,[Dl]:Ul,[Nl]:Nl,[io]:Ol,[Ll]:Ll,[Ul]:Dl,[Fl]:Fl,[Ol]:io},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eu=Math.PI/180,Vl=180/Math.PI;function ya(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function L_(r,t){return(r%t+t)%t}function nu(r,t,e){return(1-e)*r+e*t}function cm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function D_(r,t){if(t.constructor===Float32Array)return r;let e=sf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function N_(r,t){if(t.constructor===Float32Array)return r;let e=sf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var hf=class hf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hf.prototype.isVector2=!0;var de=hf,Hi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*_;m<0&&(u=-u,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uf=class uf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return iu.copy(this).projectOnVector(t),this.sub(iu)}reflect(t){return this.sub(iu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uf.prototype.isVector3=!0;var Y=uf,iu=new Y,Qd=new Hi,ff=class ff{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],w=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return s[0]=o*_+a*v+l*T,s[3]=o*m+a*w+l*E,s[6]=o*g+a*y+l*x,s[1]=c*_+h*v+f*T,s[4]=c*m+h*w+f*E,s[7]=c*g+h*y+f*x,s[2]=u*_+d*v+p*T,s[5]=u*m+d*w+p*E,s[8]=u*g+d*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Zo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(t,e)),this}rotate(t){return Zo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-t)),this}translate(t,e){return Zo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ff.prototype.isMatrix3=!0;var Gt=ff,ru=new Gt,jd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tp=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){let r={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=no(i.r),i.g=no(i.g),i.b=no(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?Ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$o]:{primaries:t,whitePoint:n,transfer:Ko,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}var ne=O_();function hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Hs,Gl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=jo("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hr(e[n]/255)*255):e[n]=hr(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},U_=0,so=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ya(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(su(i[o].image)):s.push(su(i[o]))}else s=su(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function su(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var F_=0,ou=new Y,qn=class r extends Gi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=On,o=pr,a=Fi,l=fi,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ya(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Wu;qn.DEFAULT_ANISOTROPY=1;var df=class df{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(d+1)/2,T=(g+1)/2,E=(h+u)/4,x=(f+_)/4,b=(p+m)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=x/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=b/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=x/s,i=b/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};df.prototype.isVector4=!0;var Fe=df,Hl=class extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new qn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new so(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ta=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dc=class dc{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ws.setFromMatrixColumn(t,0).length(),s=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B_,t,z_)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Ir.crossVectors(n,si),Ir.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ir.crossVectors(n,si)),Ir.normalize(),sl.crossVectors(si,Ir),i[0]=Ir.x,i[4]=sl.x,i[8]=si.x,i[1]=Ir.y,i[5]=sl.y,i[9]=si.y,i[2]=Ir.z,i[6]=sl.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=i[0],x=i[4],b=i[8],P=i[12],C=i[1],O=i[5],U=i[9],H=i[13],I=i[2],N=i[6],B=i[10],D=i[14],X=i[3],k=i[7],R=i[11],tt=i[15];return s[0]=o*E+a*C+l*I+c*X,s[4]=o*x+a*O+l*N+c*k,s[8]=o*b+a*U+l*B+c*R,s[12]=o*P+a*H+l*D+c*tt,s[1]=h*E+f*C+u*I+d*X,s[5]=h*x+f*O+u*N+d*k,s[9]=h*b+f*U+u*B+d*R,s[13]=h*P+f*H+u*D+d*tt,s[2]=p*E+_*C+m*I+g*X,s[6]=p*x+_*O+m*N+g*k,s[10]=p*b+_*U+m*B+g*R,s[14]=p*P+_*H+m*D+g*tt,s[3]=v*E+w*C+y*I+T*X,s[7]=v*x+w*O+y*N+T*k,s[11]=v*b+w*U+y*B+T*R,s[15]=v*P+w*H+y*D+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*d-c*u,w=a*d-c*f,y=a*u-l*f,T=o*d-c*h,E=o*u-l*h,x=o*f-a*h;return e*(_*v-m*w+g*y)-n*(p*v-m*T+g*E)+i*(p*w-_*T+g*x)-s*(p*y-_*E+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-n*o,w=e*l-i*o,y=e*c-s*o,T=n*l-i*a,E=n*c-s*a,x=i*c-s*l,b=h*_-f*p,P=h*m-u*p,C=h*g-d*p,O=f*m-u*_,U=f*g-d*_,H=u*g-d*m,I=v*H-w*U+y*O+T*C-E*P+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return t[0]=(a*H-l*U+c*O)*N,t[1]=(i*U-n*H-s*O)*N,t[2]=(_*x-m*E+g*T)*N,t[3]=(u*E-f*x-d*T)*N,t[4]=(l*C-o*H-c*P)*N,t[5]=(e*H-i*C+s*P)*N,t[6]=(m*y-p*x-g*w)*N,t[7]=(h*x-u*y+d*w)*N,t[8]=(o*U-a*C+c*b)*N,t[9]=(n*C-e*U-s*b)*N,t[10]=(p*E-_*y+g*v)*N,t[11]=(f*y-h*E-d*v)*N,t[12]=(a*P-o*O-l*b)*N,t[13]=(e*O-n*P+i*b)*N,t[14]=(_*w-p*T-m*v)*N,t[15]=(h*T-f*w+u*v)*N,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,p=s*f,_=o*h,m=o*f,g=a*f,v=l*c,w=l*h,y=l*f,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(d+y)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(u+g))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+w)*x,i[9]=(m-v)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(i[0],i[1],i[2]).length(),a=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,f=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=bi,l=!1){let c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===bi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Qo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=bi,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===bi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Qo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};dc.prototype.isMatrix4=!0;var Ie=dc,Ws=new Y,Ii=new Ie,B_=new Y(0,0,0),z_=new Y(1,1,1),Ir=new Y,sl=new Y,si=new Y,ep=new Ie,np=new Hi,Fr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ep,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return np.setFromEuler(this),this.setFromQuaternion(np,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fr.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},k_=0,ip=new Y,Xs=new Hi,rr=new Ie,ol=new Y,Ho=new Y,V_=new Y,G_=new Hi,rp=new Y(1,0,0),sp=new Y(0,1,0),op=new Y(0,0,1),ap={type:"added"},H_={type:"removed"},qs={type:"childadded",child:null},au={type:"childremoved",child:null},Yn=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Y,e=new Fr,n=new Hi,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Gt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(rp,t)}rotateY(t){return this.rotateOnAxis(sp,t)}rotateZ(t){return this.rotateOnAxis(op,t)}translateOnAxis(t,e){return ip.copy(t).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rp,t)}translateY(t){return this.translateOnAxis(sp,t)}translateZ(t){return this.translateOnAxis(op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ol.copy(t):ol.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ho,ol,this.up):rr.lookAt(ol,Ho,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(rr),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ap),qs.child=t,this.dispatchEvent(qs),qs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(H_),au.child=t,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rr.multiply(t.parent.matrixWorld)),t.applyMatrix4(rr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ap),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,V_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,G_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new Y(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cr=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},al={h:0,s:0,l:0};function lu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=L_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=lu(o,s,t+1/3),this.g=lu(o,s,t),this.b=lu(o,s,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=ai){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let n=hm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return ne.workingToColorSpace(Tn.copy(this),t),Math.round(se(Tn.r*255,0,255))*65536+Math.round(se(Tn.g*255,0,255))*256+Math.round(se(Tn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,s=Tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=ai){ne.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+e,Lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Lr),t.getHSL(al);let n=nu(Lr.h,al.h,e),i=nu(Lr.s,al.s,e),s=nu(Lr.l,al.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Yt;Yt.NAMES=hm;var ea=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new Y,sr=new Y,cu=new Y,or=new Y,Ys=new Y,Zs=new Y,lp=new Y,hu=new Y,uu=new Y,fu=new Y,du=new Fe,pu=new Fe,mu=new Fe,Ur=class r{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),sr.subVectors(n,e),cu.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(sr),l=Li.dot(cu),c=sr.dot(sr),h=sr.dot(cu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(o,or.y),l.addScaledVector(a,or.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(t,e),pu.fromBufferAttribute(t,n),mu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(pu,s.y),o.addScaledVector(mu,s.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),sr.subVectors(t,e),Li.cross(sr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Li.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ys.subVectors(i,n),Zs.subVectors(s,n),hu.subVectors(t,n);let l=Ys.dot(hu),c=Zs.dot(hu);if(l<=0&&c<=0)return e.copy(n);uu.subVectors(t,i);let h=Ys.dot(uu),f=Zs.dot(uu);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Ys,o);fu.subVectors(t,s);let d=Ys.dot(fu),p=Zs.dot(fu);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zs,a);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return lp.subVectors(s,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(lp,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Br=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),cl.subVectors(this.max,Wo),Js.subVectors(t.a,Wo),$s.subVectors(t.b,Wo),Ks.subVectors(t.c,Wo),Dr.subVectors($s,Js),Nr.subVectors(Ks,$s),cs.subVectors(Js,Ks);let e=[0,-Dr.z,Dr.y,0,-Nr.z,Nr.y,0,-cs.z,cs.y,Dr.z,0,-Dr.x,Nr.z,0,-Nr.x,cs.z,0,-cs.x,-Dr.y,Dr.x,0,-Nr.y,Nr.x,0,-cs.y,cs.x,0];return!gu(e,Js,$s,Ks,cl)||(e=[1,0,0,0,1,0,0,0,1],!gu(e,Js,$s,Ks,cl))?!1:(hl.crossVectors(Dr,Nr),e=[hl.x,hl.y,hl.z],gu(e,Js,$s,Ks,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ar=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Di=new Y,ll=new Br,Js=new Y,$s=new Y,Ks=new Y,Dr=new Y,Nr=new Y,cs=new Y,Wo=new Y,cl=new Y,hl=new Y,hs=new Y;function gu(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hs.fromArray(r,s);let a=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new Y,ul=new de,X_=0,Xn=class extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rm,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?sf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ul.fromBufferAttribute(this,e),ul.applyMatrix3(t),this.setXY(e,ul.x,ul.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):D_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):N_(t,this.array)}};var na=class extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ia=class extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fn=class extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},q_=new Br,Xo=new Y,_u=new Y,zr=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):q_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);let e=Xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(_u)),this.expandByPoint(Xo.copy(t.center).sub(_u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y_=0,Si=new Ie,xu=new Yn,Qs=new Y,oi=new Br,qo=new Br,un=new Y,Zn=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?ia:na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return xu.lookAt(t),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(oi.min,qo.min),oi.expandByPoint(un),un.addVectors(oi.max,qo.max),oi.expandByPoint(un)):(oi.expandByPoint(qo.min),oi.expandByPoint(qo.max))}oi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),un.add(Qs)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new Y,l[P]=new Y;let h=new Y,f=new Y,u=new Y,d=new de,p=new de,_=new de,m=new Y,g=new Y;function v(P,C,O){c[P]=c[C]=c[O]=1,h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,O),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,O),f.sub(h),u.sub(h),p.sub(d),_.sub(d);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(U),a[P].add(m),a[C].add(m),a[O].add(m),l[P].add(g),l[C].add(g),l[O].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,C=w.length;P<C;++P){let O=w[P],U=O.start,H=O.count;for(let I=U,N=U+H;I<N;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new Y,T=new Y,E=new Y,x=new Y;function b(P){E.fromBufferAttribute(i,P),x.copy(E);let C=a[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(x,C);let U=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,C=n.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Xn(u,h,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vu=new Y,Z_=new Y,J_=new Gt,li=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vu.subVectors(n,e).cross(Z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||J_.getNormalMatrix(t),i=this.coplanarPoint(vu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$_=0,fr=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=po,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Ou,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var lr=new Y,yu=new Y,fl=new Y,dl=new Y,ds=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,lr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=lr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(lr.copy(this.origin).addScaledVector(this.direction,e),lr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yu.copy(t).add(e).multiplyScalar(.5),fl.copy(e).sub(t).normalize(),dl.copy(this.origin).sub(yu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(fl),a=dl.dot(this.direction),l=-dl.dot(fl),c=dl.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=s*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(yu).addScaledVector(fl,u),d}intersectSphere(t,e){if(t.radius<0)return null;lr.subVectors(t.center,this.origin);let n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,lr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,P,C,O,U,H,I,N,B,D,X;if(y>=T&&y>=E?(P=l,U=f,N=p,X=g,l>=0?(x=c,b=h,C=u,O=d,H=_,I=m,B=v,D=w):(x=h,b=c,C=d,O=u,H=m,I=_,B=w,D=v)):T>=E?(P=c,U=u,N=_,X=v,c>=0?(x=h,b=l,C=d,O=f,H=m,I=p,B=w,D=g):(x=l,b=h,C=f,O=d,H=p,I=m,B=g,D=w)):(P=h,U=d,N=m,X=w,h>=0?(x=l,b=c,C=f,O=u,H=p,I=_,B=g,D=v):(x=c,b=l,C=u,O=f,H=_,I=p,B=v,D=g)),P===0)return null;let k=x/P,R=b/P,tt=1/P,Mt=C-k*U,Ft=O-R*U,$=H-k*N,ht=I-R*N,yt=B-k*X,bt=D-R*X,mt=yt*ht-bt*$,Dt=Mt*bt-Ft*yt,ve=$*Ft-ht*Mt;if(i){if(mt<0||Dt<0||ve<0)return null}else if((mt<0||Dt<0||ve<0)&&(mt>0||Dt>0||ve>0))return null;let Et=mt+Dt+ve;if(Et===0)return null;let Ht=tt*(mt*U+Dt*N+ve*X);return(Et>0?Ht<0:Ht>0)?null:this.at(Ht/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xl=class extends fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cp=new Ie,us=new ds,pl=new zr,hp=new Y,ml=new Y,gl=new Y,_l=new Y,Mu=new Y,xl=new Y,up=new Y,vl=new Y,Wi=class extends Yn{constructor(t=new Zn,e=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Mu.fromBufferAttribute(f,t),o?xl.addScaledVector(Mu,h):xl.addScaledVector(Mu.sub(e),h))}e.add(xl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(pl.containsPoint(us.origin)===!1&&(us.intersectSphere(pl,hp)===null||us.origin.distanceToSquared(hp)>(t.far-t.near)**2))&&(cp.copy(s).invert(),us.copy(t.ray).applyMatrix4(cp),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=yl(this,g,t,n,c,h,f,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);i=yl(this,o,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,b=y+2;i=yl(this,g,t,n,c,h,f,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=m,w=m+1,y=m+2;i=yl(this,o,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function K_(r,t,e,n,i,s,o,a){let l;if(t.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Hr,a),l===null)return null;vl.copy(a),vl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(vl);return c<e.near||c>e.far?null:{distance:c,point:vl.clone(),object:r}}function yl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ml),r.getVertexPosition(l,gl),r.getVertexPosition(c,_l);let h=K_(r,t,e,n,ml,gl,_l,up);if(h){let f=new Y;Ur.getBarycoord(up,ml,gl,_l,f),i&&(h.uv=Ur.getInterpolatedAttribute(i,a,l,c,f,new de)),s&&(h.uv1=Ur.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(h.normal=Ur.getInterpolatedAttribute(o,a,l,c,f,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Y,materialIndex:0};Ur.getNormal(ml,gl,_l,u.normal),h.face=u,h.barycoord=f}return h}var ql=class extends qn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=new zr,Q_=new de(.5,.5),Ml=new Y,ps=class{constructor(t=new li,e=new li,n=new li,i=new li,s=new li,o=new li){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],w=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-o,d-h,g-p,T-v).normalize(),i[1].setComponents(c+o,d+h,g+p,T+v).normalize(),i[2].setComponents(c+a,d+f,g+_,T+w).normalize(),i[3].setComponents(c-a,d-f,g-_,T-w).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,d-u,g-m,T-y).normalize();else if(i[4].setComponents(c-l,d-u,g-m,T-y).normalize(),e===bi)i[5].setComponents(c+l,d+u,g+m,T+y).normalize();else if(e===Qo)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=Q_.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ml.x=i.normal.x>0?t.max.x:t.min.x,Ml.y=i.normal.y>0?t.max.y:t.min.y,Ml.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fp=new Ie,Yl=class r{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];fp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ps),n[i].setFromProjectionMatrix(fp,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ps),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Zl=class extends fr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jl=new Y,$l=new Y,dp=new Ie,Yo=new ds,Sl=new zr,Su=new Y,pp=new Y,Kl=class extends Yn{constructor(t=new Zn,e=new Zl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Jl.fromBufferAttribute(e,i-1),$l.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jl.distanceTo($l);t.setAttribute("lineDistance",new fn(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=s,t.ray.intersectsSphere(Sl)===!1)return;dp.copy(i).invert(),Yo.copy(t.ray).applyMatrix4(dp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=h.getX(_),v=h.getX(_+1),w=bl(this,t,Yo,l,g,v,_);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(d),g=bl(this,t,Yo,l,_,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=bl(this,t,Yo,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=bl(this,t,Yo,l,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function bl(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(Jl.fromBufferAttribute(a,i),$l.fromBufferAttribute(a,s),e.distanceSqToSegment(Jl,$l,Su,pp)>n)return;Su.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Su);if(!(c<t.near||c>t.far))return{distance:c,point:pp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var mp=new Y,gp=new Y,ra=class extends Kl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)mp.fromBufferAttribute(e,i),gp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mp.distanceTo(gp);t.setAttribute("lineDistance",new fn(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lo=class extends fr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_p=new Ie,Au=new ds,Tl=new zr,wl=new Y,co=class extends Yn{constructor(t=new Zn,e=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(i),Tl.radius+=s,t.ray.intersectsSphere(Tl)===!1)return;_p.copy(i).invert(),Au.copy(t.ray).applyMatrix4(_p);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,_=d;p<_;p++){let m=c.getX(p);wl.fromBufferAttribute(f,m),xp(wl,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,_=d;p<_;p++)wl.fromBufferAttribute(f,p),xp(wl,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xp(r,t,e,n,i,s,o){let a=Au.distanceSqToPoint(r);if(a<e){let l=new Y;Au.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var sa=class extends qn{constructor(t=[],e=_s,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var dr=class extends qn{constructor(t,e,n=Ni,i,s,o,a=dn,l=dn,c,h=ur,f=1){if(h!==ur&&h!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new so(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends dr{constructor(t,e=Ni,n=_s,i,s,o=dn,a=dn,l,c=ur){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},aa=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ho=class r extends Zn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(f,2));function p(_,m,g,v,w,y,T,E,x,b,P){let C=y/x,O=T/b,U=y/2,H=T/2,I=E/2,N=x+1,B=b+1,D=0,X=0,k=new Y;for(let R=0;R<B;R++){let tt=R*O-H;for(let Mt=0;Mt<N;Mt++){let Ft=Mt*C-U;k[_]=Ft*v,k[m]=tt*w,k[g]=I,c.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[g]=E>0?1:-1,h.push(k.x,k.y,k.z),f.push(Mt/x),f.push(1-R/b),D+=1}}for(let R=0;R<b;R++)for(let tt=0;tt<x;tt++){let Mt=u+tt+N*R,Ft=u+tt+N*(R+1),$=u+(tt+1)+N*(R+1),ht=u+(tt+1)+N*R;l.push(Mt,Ft,ht),l.push(Ft,$,ht),X+=6}a.addGroup(d,X,P),d+=X,u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var la=class r extends Zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*u-o;for(let w=0;w<c;w++){let y=w*f-s;p.push(y,-v,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;d.push(w,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function vs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(vp(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(vp(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(r){let t={};for(let e=0;e<r.length;e++){let n=vs(r[e]);for(let i in n)t[i]=n[i]}return t}function vp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function j_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function of(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var um={clone:vs,merge:wn},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends fr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=j_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new de().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ql=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jl=class extends fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function El(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var kr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends kr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:s=t,a=2*e-n;break;case Eu:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:o=t,l=2*n-e;break;case Eu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let T=0;T!==a;++T)s[T]=g*o[h+T]+v*o[c+T]+w*o[l+T]+y*o[f+T];return s}},nc=class extends kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},ic=class extends kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},rc=class extends kr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*u+p*2,v=f[g],w=f[g+1],y=t*u+p*2,T=h[y],E=h[y+1],x=ix(n,e,v,T,i);s[p]=fm(x,_,w,E,m)}return s}};function fm(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function nx(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function ix(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=fm(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=nx(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),El(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Jo:e=this.InterpolantFactoryMethodDiscrete;break;case kl:e=this.InterpolantFactoryMethodLinear;break;case Rl:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;El(this.settings)&&(yp(this.settings.inTangents,t),yp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;El(this.settings)&&(Mp(this.settings.inTangents,t),Mp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&I_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=e[f+p];if(_!==e[u+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,El(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function yp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function Mp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=kl;var Vr=class extends ui{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Jo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="color";var oc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};oc.prototype.ValueTypeName="number";var ac=class extends kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hi.slerpFlat(s,0,o,c-a,o,c,l);return s}},ca=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends ui{constructor(t,e,n){super(t,e,n)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Jo;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dm=new cc,hc=class{constructor(t){this.manager=t!==void 0?t:dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Al=new Y,Cl=new Hi,ki=new Y,ha=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Or=new Y,Sp=new de,bp=new de,Nn=class extends ha{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Or.x,Or.y).multiplyScalar(-t/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-t/Or.z)}getViewSize(t,e){return this.getViewBounds(t,Sp,bp),e.subVectors(bp,Sp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uc=class extends ha{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var to=-90,eo=1,uo=class extends Yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(to,eo,t,e);i.layers=this.layers,this.add(i);let s=new Nn(to,eo,t,e);s.layers=this.layers,this.add(s);let o=new Nn(to,eo,t,e);o.layers=this.layers,this.add(o);let a=new Nn(to,eo,t,e);a.layers=this.layers,this.add(a);let l=new Nn(to,eo,t,e);l.layers=this.layers,this.add(l);let c=new Nn(to,eo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fc=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var af="\\[\\]\\.:\\/",rx=new RegExp("["+af+"]","g"),lf="[^"+af+"]",sx="[^"+af.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",lf),ax=/(WCOD+)?/.source.replace("WCOD",sx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),hx=new RegExp("^"+ox+ax+lx+cx+"$"),ux=["material","materials","bones","map"],Cu=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(t){let e=hx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ux.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Cu;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var Tp=new Ie,ua=class{constructor(t,e,n=0,i=1/0){this.ray=new ds(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tp),this}intersectObject(t,e=!0,n=[]){return Ru(t,this,n,e),n.sort(wp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ru(t[i],this,n,e);return n.sort(wp),n}};function wp(r,t){return r.distance-t.distance}function Ru(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Ru(s[o],t,e,!0)}}var pf=class pf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};pf.prototype.isMatrix2=!0;var Pu=pf;function cf(r,t,e,n){let i=fx(n);switch(e){case Ju:return r*t;case Ku:return r*t/i.components*i.byteLength;case yc:return r*t/i.components*i.byteLength;case Wr:return r*t*2/i.components*i.byteLength;case Mc:return r*t*2/i.components*i.byteLength;case $u:return r*t*3/i.components*i.byteLength;case Fi:return r*t*4/i.components*i.byteLength;case Sc:return r*t*4/i.components*i.byteLength;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ga:case _a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ec:return Math.max(r,16)*Math.max(t,8)/4;case bc:case wc:return Math.max(r,8)*Math.max(t,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rc:case xa:case Lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $c:case Kc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case va:case Qc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(r){switch(r){case fi:case Xu:return{byteLength:1,components:1};case _o:case qu:case Ui:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Ni:case _c:case Oi:return{byteLength:4,components:1};case Yu:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Om(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function px(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ev=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
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
#endif`,fv=`uniform sampler2D dfgLUT;
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
}`,dv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tv=`#if defined( USE_POINTS_UV )
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
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
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
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jv=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform float backgroundBlurriness;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,by=`#define DISTANCE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Gy=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:vx,alphatest_pars_fragment:yx,aomap_fragment:Mx,aomap_pars_fragment:Sx,batching_pars_vertex:bx,batching_vertex:Tx,begin_vertex:wx,beginnormal_vertex:Ex,bsdfs:Ax,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ox,color_pars_vertex:Ux,color_vertex:Fx,common:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:kx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Hx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Zx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:ov,envmap_vertex:$x,fog_vertex:Kx,fog_pars_vertex:Qx,fog_fragment:jx,fog_pars_fragment:tv,gradientmap_pars_fragment:ev,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:rv,lights_pars_begin:sv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:hv,lights_physical_fragment:uv,lights_physical_pars_fragment:fv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,lightprobes_pars_fragment:gv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:yv,map_fragment:Mv,map_pars_fragment:Sv,map_particle_fragment:bv,map_particle_pars_fragment:Tv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:Av,morphcolor_vertex:Cv,morphnormal_vertex:Rv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Iv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:Nv,normal_pars_vertex:Ov,normal_vertex:Uv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Vv,opaque_fragment:Gv,packing:Hv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:Zv,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Kv,shadowmap_vertex:Qv,shadowmask_pars_fragment:jv,skinbase_vertex:ty,skinning_pars_vertex:ey,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:ry,specularmap_pars_fragment:sy,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:xy,cube_frag:vy,depth_vert:yy,depth_frag:My,distance_vert:Sy,distance_frag:by,equirect_vert:Ty,equirect_frag:wy,linedashed_vert:Ey,linedashed_frag:Ay,meshbasic_vert:Cy,meshbasic_frag:Ry,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:Ny,meshnormal_frag:Oy,meshphong_vert:Uy,meshphong_frag:Fy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:ky,meshtoon_frag:Vy,points_vert:Gy,points_frag:Hy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:Yy},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Zi={basic:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:wn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:wn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:wn([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:wn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:wn([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:wn([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:wn([St.common,St.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:wn([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Zi.physical={uniforms:wn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var jc={r:0,b:0,g:0},Zy=new Ie,Um=new Gt;Um.set(-1,0,0,0,1,0,0,0,1);function Jy(r,t,e,n,i,s){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1,y=d(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,w){let y=d(w);y&&y.isCubeTexture?(c===void 0&&(c=new Wi(new ho(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:vs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Um),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==_e,(h!==y||f!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wi(new la(2,2),new hi({name:"BackgroundMaterial",uniforms:vs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(jc,of(r)),e.buffers.color.setClear(jc.r,jc.g,jc.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function $y(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(O,U,H,I,N){let B=!1,D=f(O,I,H,U);s!==D&&(s=D,c(s.object)),B=d(O,I,H,N),B&&p(O,I,H,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(O,U,H,I),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(O){return r.bindVertexArray(O)}function h(O){return r.deleteVertexArray(O)}function f(O,U,H,I){let N=I.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let D=O.isInstancedMesh===!0?O.id:0,X=B[D];X===void 0&&(X={},B[D]=X);let k=X[H.id];k===void 0&&(k={},X[H.id]=k);let R=k[N];return R===void 0&&(R=u(l()),k[N]=R),R}function u(O){let U=[],H=[],I=[];for(let N=0;N<e;N++)U[N]=0,H[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:O,attributes:{},index:null}}function d(O,U,H,I){let N=s.attributes,B=U.attributes,D=0,X=H.getAttributes();for(let k in X)if(X[k].location>=0){let tt=N[k],Mt=B[k];if(Mt===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(Mt=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(Mt=O.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;D++}return s.attributesNum!==D||s.index!==I}function p(O,U,H,I){let N={},B=U.attributes,D=0,X=H.getAttributes();for(let k in X)if(X[k].location>=0){let tt=B[k];tt===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),N[k]=Mt,D++}s.attributes=N,s.attributesNum=D,s.index=I}function _(){let O=s.newAttributes;for(let U=0,H=O.length;U<H;U++)O[U]=0}function m(O){g(O,0)}function g(O,U){let H=s.newAttributes,I=s.enabledAttributes,N=s.attributeDivisors;H[O]=1,I[O]===0&&(r.enableVertexAttribArray(O),I[O]=1),N[O]!==U&&(r.vertexAttribDivisor(O,U),N[O]=U)}function v(){let O=s.newAttributes,U=s.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==O[H]&&(r.disableVertexAttribArray(H),U[H]=0)}function w(O,U,H,I,N,B,D){D===!0?r.vertexAttribIPointer(O,U,H,N,B):r.vertexAttribPointer(O,U,H,I,N,B)}function y(O,U,H,I){_();let N=I.attributes,B=H.getAttributes(),D=U.defaultAttributeValues;for(let X in B){let k=B[X];if(k.location>=0){let R=N[X];if(R===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(R=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(R=O.instanceColor)),R!==void 0){let tt=R.normalized,Mt=R.itemSize,Ft=t.get(R);if(Ft===void 0)continue;let $=Ft.buffer,ht=Ft.type,yt=Ft.bytesPerElement,bt=ht===r.INT||ht===r.UNSIGNED_INT||R.gpuType===_c;if(R.isInterleavedBufferAttribute){let mt=R.data,Dt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ve=R.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Et=0;Et<k.locationSize;Et++)g(k.location+Et,mt.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et);r.bindBuffer(r.ARRAY_BUFFER,$);for(let Et=0;Et<k.locationSize;Et++)w(k.location+Et,Mt/k.locationSize,ht,tt,Dt*yt,(ve+Mt/k.locationSize*Et)*yt,bt)}else{if(R.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)g(k.location+mt,R.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);r.bindBuffer(r.ARRAY_BUFFER,$);for(let mt=0;mt<k.locationSize;mt++)w(k.location+mt,Mt/k.locationSize,ht,tt,Mt*yt,Mt/k.locationSize*mt*yt,bt)}}else if(D!==void 0){let tt=D[X];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(k.location,tt);break;case 3:r.vertexAttrib3fv(k.location,tt);break;case 4:r.vertexAttrib4fv(k.location,tt);break;default:r.vertexAttrib1fv(k.location,tt)}}}}v()}function T(){P();for(let O in n){let U=n[O];for(let H in U){let I=U[H];for(let N in I){let B=I[N];for(let D in B)h(B[D].object),delete B[D];delete I[N]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;let U=n[O.id];for(let H in U){let I=U[H];for(let N in I){let B=I[N];for(let D in B)h(B[D].object),delete B[D];delete I[N]}}delete n[O.id]}function x(O){for(let U in n){let H=n[U];for(let I in H){let N=H[I];if(N[O.id]===void 0)continue;let B=N[O.id];for(let D in B)h(B[D].object),delete B[D];delete N[O.id]}}}function b(O){for(let U in n){let H=n[U],I=O.isInstancedMesh===!0?O.id:0,N=H[I];if(N!==void 0){for(let B in N){let D=N[B];for(let X in D)h(D[X].object),delete D[X];delete N[B]}delete H[I],Object.keys(H).length===0&&delete n[U]}}}function P(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Ky(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Qy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Fi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==fi&&x!==Oi&&!b&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function jy(r){let t=this,e=null,n=0,i=!1,s=!1,o=new li,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,w=v*4,y=g.clippingState||null;l.value=y,y=h(p,u,w,d);for(let T=0;T!==w;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=d;w!==_;++w,y+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ba=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ho(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:ms});s.uniforms.tEquirect.value=e;let o=new Wi(i,s),a=e.minFilter;return e.minFilter===pr&&(e.minFilter=On),new uo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},pm=256,tM=3,eM=20,Fm=256,Bm=16,nM=3,iM=new Y,rM=new Yt,eh=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new Wi(new ho(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=iM}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(rM));let m=new uo(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(pm,cm(t))}_fromTexture(t,e){t.mapping===_s||t.mapping===go?this._setSize(t.image.length===0?pm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=mm(t,!1,!1),n=Math.log2(t)-tM;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===_s||t.mapping===go?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=sM(),this._integrationMaterial=oM());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Bm);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-nM)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Fm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=aM());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function mm(r,t,e){return new ba(r,{minFilter:pr,generateMipmaps:t,type:Ui,colorSpace:$o,depthBuffer:e})}function Ta(r,t,e){return new hi({name:r,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Un,blending:ms,depthTest:!1,depthWrite:!1})}function sM(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fm}u

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
	`)}function oM(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bm}},`

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
	`)}function aM(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${eM}
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
	`)}function gm(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _m(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===pc||d===mc)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new ba(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===pc||d===mc,_=d===_s||d===go;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new eh(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new eh(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===pc?u.mapping=_s:d===mc&&(u.mapping=go),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function cM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Zo("WebGLRenderer: "+n+" extension not supported."),i}}}function hM(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=s.get(p);_&&(t.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],r.ARRAY_BUFFER)}function f(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?ia:na,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,P=0;b<v;b+=3){let C=x[b+0],O=x[b+1],U=x[b+2];T[P++]=C,T[P++]=O,T[P++]=O,T[P++]=U,T[P++]=U,T[P++]=C}}else{g=m.version;for(let x=0,b=0;x<v;x+=3){let P=x+0,C=x+1,O=x+2;T[b++]=P,T[b++]=C,T[b++]=C,T[b++]=O,T[b++]=O,T[b++]=P}}y.version=g;let E=s.get(p);E&&t.remove(E),s.set(p,y)}function u(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return s.get(p)}function d(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function uM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dM(r,t,e){let n=new WeakMap,i=new Fe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*f),x=new ta(E,y,T,f);x.type=Oi,x.needsUpdate=!0;let b=w*4;for(let C=0;C<f;C++){let O=m[C],U=g[C],H=v[C],I=y*T*4*C;for(let N=0;N<O.count;N++){let B=N*b;d===!0&&(i.fromBufferAttribute(O,N),E[I+B+0]=i.x,E[I+B+1]=i.y,E[I+B+2]=i.z,E[I+B+3]=0),p===!0&&(i.fromBufferAttribute(U,N),E[I+B+4]=i.x,E[I+B+5]=i.y,E[I+B+6]=i.z,E[I+B+7]=0),_===!0&&(i.fromBufferAttribute(H,N),E[I+B+8]=i.x,E[I+B+9]=i.y,E[I+B+10]=i.z,E[I+B+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new de(y,T)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function pM(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var mM={[Fu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function gM(r,t,e,n,i,s){let o=new ci(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zn;h.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fn([0,2,0,0,2,0],2));let f=new Ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Wi(h,f),d=new uc(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new ci(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ci(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&w.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new dr(E,x),s===!0&&(c.format=mr,c.type=xs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<w.length;P++){let C=w[P];C.setSize&&C.setSize(E,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===qi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,m=!0;let x=o,b=a;for(let P=0;P<w.length;P++){let C=w[P];C.enabled!==!1&&(C.render(T,b,x,E),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,f.defines={},ne.getTransfer(p)===_e&&(f.defines.SRGB_TRANSFER="");let P=mM[_];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var zm=new qn,km=new dr(1,1),Vm=new oa(1),Gm=new ta,Hm=new Wl,Wm=new sa,xm=[],vm=[],ym=new Float32Array(16),Mm=new Float32Array(9),Sm=new Float32Array(4);function vo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=xm[i];if(s===void 0&&(s=new Float32Array(i),xm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function on(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function an(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ih(r,t){let e=vm[t];e===void 0&&(e=new Int32Array(t),vm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _M(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function xM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2fv(this.addr,t),an(e,t)}}function vM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;r.uniform3fv(this.addr,t),an(e,t)}}function yM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4fv(this.addr,t),an(e,t)}}function MM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Sm.set(n),r.uniformMatrix2fv(this.addr,!1,Sm),an(e,n)}}function SM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Mm.set(n),r.uniformMatrix3fv(this.addr,!1,Mm),an(e,n)}}function bM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;ym.set(n),r.uniformMatrix4fv(this.addr,!1,ym),an(e,n)}}function TM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2iv(this.addr,t),an(e,t)}}function EM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;r.uniform3iv(this.addr,t),an(e,t)}}function AM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4iv(this.addr,t),an(e,t)}}function CM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function RM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;r.uniform2uiv(this.addr,t),an(e,t)}}function PM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;r.uniform3uiv(this.addr,t),an(e,t)}}function IM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;r.uniform4uiv(this.addr,t),an(e,t)}}function rh(r){return r.version===0&&(r.compareFunction=ef,r.needsUpdate=!0),r}function LM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=rh(km):s=zm,e.setTexture2D(t||s,i)}function DM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hm,i)}function NM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=rh(Vm):s=Wm,e.setTextureCube(t||s,i)}function OM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gm,i)}function UM(r){switch(r){case 5126:return _M;case 35664:return xM;case 35665:return vM;case 35666:return yM;case 35674:return MM;case 35675:return SM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return wM;case 35668:case 35672:return EM;case 35669:case 35673:return AM;case 5125:return CM;case 36294:return RM;case 36295:return PM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return OM}}function FM(r,t){r.uniform1fv(this.addr,t)}function BM(r,t){let e=vo(t,this.size,2);r.uniform2fv(this.addr,e)}function zM(r,t){let e=vo(t,this.size,3);r.uniform3fv(this.addr,e)}function kM(r,t){let e=vo(t,this.size,4);r.uniform4fv(this.addr,e)}function VM(r,t){let e=vo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function GM(r,t){let e=vo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function HM(r,t){let e=vo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function WM(r,t){r.uniform1iv(this.addr,t)}function XM(r,t){r.uniform2iv(this.addr,t)}function qM(r,t){r.uniform3iv(this.addr,t)}function YM(r,t){r.uniform4iv(this.addr,t)}function ZM(r,t){r.uniform1uiv(this.addr,t)}function JM(r,t){r.uniform2uiv(this.addr,t)}function $M(r,t){r.uniform3uiv(this.addr,t)}function KM(r,t){r.uniform4uiv(this.addr,t)}function QM(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=rh(km):o=zm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function jM(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hm,s[o])}function tS(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=rh(Vm):o=Wm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function eS(r,t,e){let n=this.cache,i=t.length,s=ih(e,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Gm,s[o])}function nS(r){switch(r){case 5126:return FM;case 35664:return BM;case 35665:return zM;case 35666:return kM;case 35674:return VM;case 35675:return GM;case 35676:return HM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return ZM;case 36294:return JM;case 36295:return $M;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return eS}}var _f=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=UM(e.type)}},xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nS(e.type)}},vf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},mf=/(\w+)(\])?(\[|\.)?/g;function bm(r,t){r.seq.push(t),r.map[t.id]=t}function iS(r,t,e){let n=r.name,i=n.length;for(mf.lastIndex=0;;){let s=mf.exec(n),o=mf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bm(e,c===void 0?new _f(a,r,t):new xf(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new vf(a),bm(e,f)),e=f}}}var xo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iS(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Tm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var rS=37297,sS=0;function oS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wm=new Gt;function aS(r){ne._getMatrix(wm,ne.workingColorSpace,r);let t=`mat3( ${wm.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(r)){case Ko:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Em(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+oS(r.getShaderSource(t),a)}else return s}function lS(r,t){let e=aS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var cS={[Fu]:"Linear",[Bu]:"Reinhard",[zu]:"Cineon",[ku]:"ACESFilmic",[Gu]:"AgX",[Hu]:"Neutral",[Vu]:"Custom"};function hS(r,t){let e=cS[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var th=new Y;function uS(){ne.getLuminanceCoefficients(th);let r=th.x.toFixed(4),t=th.y.toFixed(4),e=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function dS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Sa(r){return r!==""}function Am(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(r){return r.replace(mS,gS)}function gS(r,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yf(e)}var _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(r){return r.replace(_S,xS)}function xS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pm(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var vS={[fa]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function yS(r){return vS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MS={[go]:"ENVMAP_MODE_REFRACTION"};function SS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bS={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[Yp]:"ENVMAP_BLENDING_MIX",[Zp]:"ENVMAP_BLENDING_ADD"};function TS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bS[r.combine]||"ENVMAP_BLENDING_NONE"}function wS(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=SS(e),f=TS(e),u=fS(e),d=dS(s),p=i.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sa).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(_=[Pm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[Pm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==qi?hS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,lS("linearToOutputTexel",e.outputColorSpace),uS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),o=yf(o),o=Am(o,e),o=Cm(o,e),a=yf(a),a=Am(a,e),a=Cm(a,e),o=Rm(o),a=Rm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+o,w=g+m+a,y=Tm(i,i.VERTEX_SHADER,v),T=Tm(i,i.FRAGMENT_SHADER,w);i.attachShader(p,y),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(C){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(p)||"",U=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(T)||"",I=O.trim(),N=U.trim(),B=H.trim(),D=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,y,T);else{let k=Em(i,y,"vertex"),R=Em(i,T,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+k+`
`+R)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(N===""||B==="")&&(X=!1);X&&(C.diagnostics={runnable:D,programLog:I,vertexShader:{log:N,prefix:_},fragmentShader:{log:B,prefix:m}})}i.deleteShader(y),i.deleteShader(T),x=new xo(i,p),b=pS(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,rS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var ES=0,Mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sf(t),e.set(t,n)),n}},Sf=class{constructor(t){this.id=ES++,this.code=t,this.usedTimes=0}};function AS(r){return r===Wr||r===xa||r===va}function CS(r,t,e,n,i,s){let o=new oo,a=new Mf,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,P,C,O,U){let H=C.fog,I=O.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||N,B),X=u[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=R!==void 0?R.length:0,Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let Ft,$,ht,yt;if(X){let nt=Zi[X];Ft=nt.vertexShader,$=nt.fragmentShader}else{Ft=x.vertexShader,$=x.fragmentShader;let nt=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,nt,Tt),ht=nt.id,yt=Tt.id}let bt=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Et=!!x.map,Ht=!!x.matcap,It=!!D,Ut=It&&D.isPMREMTexture===!0,ue=!!x.aoMap,le=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,Qt=!!x.normalMap,Je=!!x.displacementMap,be=!!x.emissiveMap,re=!!x.metalnessMap,Ve=!!x.roughnessMap,Ye=x.anisotropy>0,z=x.clearcoat>0,pe=x.diffuseRoughness>0,ce=x.dispersion>0,Vt=x.retroreflectivity>0,ut=x.iridescence>0,fe=x.sheen>0,Lt=x.transmission>0,Bt=Ye&&!!x.anisotropyMap,A=z&&!!x.clearcoatMap,M=z&&!!x.clearcoatNormalMap,G=z&&!!x.clearcoatRoughnessMap,st=pe&&!!x.diffuseRoughnessMap,it=ut&&!!x.iridescenceMap,ct=ut&&!!x.iridescenceThicknessMap,gt=fe&&!!x.sheenColorMap,W=fe&&!!x.sheenRoughnessMap,j=!!x.specularMap,lt=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=Lt&&!!x.transmissionMap,K=Lt&&!!x.thicknessMap,ft=!!x.gradientMap,at=!!x.alphaMap,dt=x.alphaTest>0,ot=!!x.alphaHash,pt=!!x.extensions,rt=qi;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(rt=r.toneMapping);let et=Ut?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,_t={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:$,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:Ht,envMap:It,envMapMode:It&&D.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?et.length-1:null,envMapSize:Ut?et[0].width:null,aoMap:ue,lightMap:le,bumpMap:J,normalMap:Qt,displacementMap:Je,emissiveMap:be,normalMapObjectSpace:Qt&&x.normalMapType===Kp,normalMapTangentSpace:Qt&&x.normalMapType===Qu,packedNormalMap:Qt&&x.normalMapType===Qu&&AS(x.normalMap.format),metalnessMap:re,roughnessMap:Ve,anisotropy:Ye,anisotropyMap:Bt,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:pe,diffuseRoughnessMap:st,dispersion:ce,retroreflection:Vt,iridescence:ut,iridescenceMap:it,iridescenceThicknessMap:ct,sheen:fe,sheenColorMap:gt,sheenRoughnessMap:W,specularMap:j,specularColorMap:lt,specularIntensityMap:L,transmission:Lt,transmissionMap:Q,thicknessMap:K,gradientMap:ft,opaque:x.transparent===!1&&x.blending===po&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:dt,alphaHash:ot,combine:x.combine,mapUv:Et&&d(x.map.channel),aoMapUv:ue&&d(x.aoMap.channel),lightMapUv:le&&d(x.lightMap.channel),bumpMapUv:J&&d(x.bumpMap.channel),normalMapUv:Qt&&d(x.normalMap.channel),displacementMapUv:Je&&d(x.displacementMap.channel),emissiveMapUv:be&&d(x.emissiveMap.channel),metalnessMapUv:re&&d(x.metalnessMap.channel),roughnessMapUv:Ve&&d(x.roughnessMap.channel),anisotropyMapUv:Bt&&d(x.anisotropyMap.channel),clearcoatMapUv:A&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(x.sheenRoughnessMap.channel),specularMapUv:j&&d(x.specularMap.channel),specularColorMapUv:lt&&d(x.specularColorMap.channel),specularIntensityMapUv:L&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:K&&d(x.thicknessMap.channel),alphaMapUv:at&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||Ye),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Et||at),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(nt=>nt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:be&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],P;if(b){let C=Zi[b];P=um.clone(C.uniforms)}else P=x.uniforms;return P}function w(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new wS(r,b,x,i),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function RS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function PS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Im(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,m,g){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,d,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let w=a(u,d,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,d,p,_,m,g){let v=a(u,d,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||PS),n.length>1&&n.sort(d||Im),i.length>1&&i.sort(d||Im)}function f(){for(let u=t,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function IS(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Lm,r.set(n,[o])):i>=s.length?(o=new Lm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function LS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Yt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function DS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var NS=0;function OS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function US(r){let t=new LS,e=DS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new Ie,o=new Ie;function a(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,w=0,y=0,T=0,E=0,x=0,b=0,P=0,C=0;c.sort(OS);for(let U=0,H=c.length;U<H;U++){let I=c[U],N=I.color,B=I.intensity,D=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wr?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*B,f+=N.g*B,u+=N.b*B;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],B);C++}else if(I.isSunLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=X;let Mt=R.getViewportCount();for(let Ft=0;Ft<Mt;Ft++)n.sunShadowMatrix[_+Ft]=R.getMatrix(Ft),n.sunShadowCascade[_+Ft]=R._cascadeData[Ft];_+=Mt,p++}n.sun[d]=k,d++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=k,m++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(N).multiplyScalar(B),k.distance=D,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[v]=k;let R=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=X,x++}v++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(N).multiplyScalar(B),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=k,w++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,tt.shadowCameraNear=R.camera.near,tt.shadowCameraFar=R.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=k,g++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(B),k.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[y]=k,y++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==w||O.hemiLength!==y||O.numSunShadows!==p||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==b||O.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,O.sunLength=d,O.directionalLength=m,O.pointLength=g,O.spotLength=v,O.rectAreaLength=w,O.hemiLength=y,O.numSunShadows=p,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=b,O.numLightProbes=C,n.version=NS++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),u++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Dm(r){let t=new US(r),e=[],n=[],i=[];function s(f){h.camera=f,e.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function FS(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Dm(r),t.set(i,[a])):s>=o.length?(a=new Dm(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`,kS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],VS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Nm=new Ie,Ma=new Y,gf=new Y;function GS(r,t,e){let n=new ps,i=new de,s=new de,o=new Fe,a=new jl,l=new tc,c={},h=e.maxTextureSize,f={[Hr]:Un,[Un]:Hr,[Xi]:Xi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Zn;p.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let g=this.type;this.render=function(E,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Cp&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fa);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ms),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=E.length;I<N;I++){let B=E[I],D=B.shadow;if(D===void 0){zt("WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let X=D.getFrameExtents();i.multiply(X),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,D.mapSize.y=s.y));let k=r.state.buffers.depth.getReversed();if(D.camera._reversedDepth=k,D.map===null||H===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===fo){if(B.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ci(i.x,i.y,{format:Wr,type:Ui,minFilter:On,magFilter:On,generateMipmaps:!1}),D.map.texture.name=B.name+".shadowMap",D.map.depthTexture=new dr(i.x,i.y,Oi),D.map.depthTexture.name=B.name+".shadowMapDepth",D.map.depthTexture.format=ur,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=dn,D.map.depthTexture.magFilter=dn}else B.isPointLight?(D.map=new ba(i.x),D.map.depthTexture=new oa(i.x,Ni)):(D.map=new ci(i.x,i.y),D.map.depthTexture=new dr(i.x,i.y,Ni)),D.map.depthTexture.name=B.name+".shadowMap",D.map.depthTexture.format=ur,this.type===fa?(D.map.depthTexture.compareFunction=k?tf:ju,D.map.depthTexture.minFilter=On,D.map.depthTexture.magFilter=On):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=dn,D.map.depthTexture.magFilter=dn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==i.x||D.map.height!==i.y)&&D.map.setSize(i.x,i.y);let R=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();B.isPointLight!==!0&&D.updateMatrices(B,b);let tt=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:b.layers;for(let Mt=0;Mt<R;Mt++){let Ft=D.getCamera(Mt);if(B.isPointLight){let $=D.camera,ht=D.matrix,yt=B.distance||$.far;yt!==$.far&&($.far=yt,$.updateProjectionMatrix()),Ma.setFromMatrixPosition(B.matrixWorld),$.position.copy(Ma),gf.copy($.position),gf.add(kS[Mt]),$.up.copy(VS[Mt]),$.lookAt(gf),$.updateMatrixWorld(),ht.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Nm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Nm,$.coordinateSystem,$.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)r.setRenderTarget(D.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(D.map),r.clear());let $=D.getViewport(Mt);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),U.viewport(o)}n=D.getFrustum(Mt),y(x,b,Ft,B,tt,this.type)}D.isPointLightShadow!==!0&&this.type===fo&&v(D,b),D.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,C,O)};function v(E,x){let b=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ci(i.x,i.y,{format:Wr,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,b,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,b,d,_,null)}function w(E,x,b,P){let C=null,O=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)C=O;else if(C=b.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=C.uuid,H=x.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let N=I[H];N===void 0&&(N=C.clone(),I[H]=N,x.addEventListener("dispose",T)),C=N}if(C.visible=x.visible,C.wireframe=x.wireframe,P===fo?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=r.properties.get(C);U.light=b}return C}function y(E,x,b,P,C,O){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===fo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),N=E.material;if(Array.isArray(N)){let B=I.groups;for(let D=0,X=B.length;D<X;D++){let k=B[D],R=N[k.materialIndex];if(R&&R.visible){let tt=w(E,R,P,O);E.onBeforeShadow(r,E,x,b,I,tt,k),r.renderBufferDirect(b,null,I,tt,E,k),E.onAfterShadow(r,E,x,b,I,tt,k)}}}else if(N.visible){let B=w(E,N,P,O);E.onBeforeShadow(r,E,x,b,I,B,null),r.renderBufferDirect(b,null,I,B,E,null),E.onAfterShadow(r,E,x,b,I,B,null)}}let H=E.children;for(let I=0,N=H.length;I<N;I++)y(H[I],x,b,P,C,O)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function HS(r,t){function e(){let L=!1,Q=new Fe,K=null,ft=new Fe(0,0,0,0);return{setMask:function(at){K!==at&&!L&&(r.colorMask(at,at,at,at),K=at)},setLocked:function(at){L=at},setClear:function(at,dt,ot,pt,rt){rt===!0&&(at*=pt,dt*=pt,ot*=pt),Q.set(at,dt,ot,pt),ft.equals(Q)===!1&&(r.clearColor(at,dt,ot,pt),ft.copy(Q))},reset:function(){L=!1,K=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,ft=null,at=null;return{setReversed:function(dt){if(Q!==dt){let ot=t.get("EXT_clip_control");dt?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Q=dt;let pt=at;at=null,this.setClear(pt)}},getReversed:function(){return Q},setTest:function(dt){dt?mt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(dt){K!==dt&&!L&&(r.depthMask(dt),K=dt)},setFunc:function(dt){if(Q&&(dt=lm[dt]),ft!==dt){switch(dt){case Il:r.depthFunc(r.NEVER);break;case Ll:r.depthFunc(r.ALWAYS);break;case Dl:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Nl:r.depthFunc(r.EQUAL);break;case Ol:r.depthFunc(r.GEQUAL);break;case Ul:r.depthFunc(r.GREATER);break;case Fl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=dt}},setLocked:function(dt){L=dt},setClear:function(dt){at!==dt&&(at=dt,Q&&(dt=1-dt),r.clearDepth(dt))},reset:function(){L=!1,K=null,ft=null,at=null,Q=!1}}}function i(){let L=!1,Q=null,K=null,ft=null,at=null,dt=null,ot=null,pt=null,rt=null;return{setTest:function(et){L||(et?mt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(et){Q!==et&&!L&&(r.stencilMask(et),Q=et)},setFunc:function(et,_t,nt){(K!==et||ft!==_t||at!==nt)&&(r.stencilFunc(et,_t,nt),K=et,ft=_t,at=nt)},setOp:function(et,_t,nt){(dt!==et||ot!==_t||pt!==nt)&&(r.stencilOp(et,_t,nt),dt=et,ot=_t,pt=nt)},setLocked:function(et){L=et},setClear:function(et){rt!==et&&(r.clearStencil(et),rt=et)},reset:function(){L=!1,Q=null,K=null,ft=null,at=null,dt=null,ot=null,pt=null,rt=null}}}let s=new e,o=new n,a=new i,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new Yt(0,0,0),P=0,C=!1,O=null,U=null,H=null,I=null,N=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,X=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=X>=2);let R=null,tt={},Mt=r.getParameter(r.SCISSOR_BOX),Ft=r.getParameter(r.VIEWPORT),$=new Fe().fromArray(Mt),ht=new Fe().fromArray(Ft);function yt(L,Q,K,ft){let at=new Uint8Array(4),dt=r.createTexture();r.bindTexture(L,dt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<K;ot++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage2D(Q+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at);return dt}let bt={};bt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(r.DEPTH_TEST),o.setFunc(io),J(!1),Qt(Iu),mt(r.CULL_FACE),ue(ms);function mt(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Dt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function ve(L,Q){return u[L]!==Q?(r.bindFramebuffer(L,Q),u[L]=Q,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Q),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Et(L,Q){let K=p,ft=!1;if(L){K=d.get(Q),K===void 0&&(K=[],d.set(Q,K));let at=L.textures;if(K.length!==at.length||K[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,ot=at.length;dt<ot;dt++)K[dt]=r.COLOR_ATTACHMENT0+dt;K.length=at.length,ft=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ft=!0);ft&&r.drawBuffers(K)}function Ht(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let It={[gs]:r.FUNC_ADD,[Pp]:r.FUNC_SUBTRACT,[Ip]:r.FUNC_REVERSE_SUBTRACT};It[Lp]=r.MIN,It[Dp]=r.MAX;let Ut={[Np]:r.ZERO,[Op]:r.ONE,[Up]:r.SRC_COLOR,[Nu]:r.SRC_ALPHA,[Gp]:r.SRC_ALPHA_SATURATE,[kp]:r.DST_COLOR,[Bp]:r.DST_ALPHA,[Fp]:r.ONE_MINUS_SRC_COLOR,[Ou]:r.ONE_MINUS_SRC_ALPHA,[Vp]:r.ONE_MINUS_DST_COLOR,[zp]:r.ONE_MINUS_DST_ALPHA,[Hp]:r.CONSTANT_COLOR,[Wp]:r.ONE_MINUS_CONSTANT_COLOR,[Xp]:r.CONSTANT_ALPHA,[qp]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(L,Q,K,ft,at,dt,ot,pt,rt,et){if(L===ms){m===!0&&(Dt(r.BLEND),m=!1);return}if(m===!1&&(mt(r.BLEND),m=!0),L!==Rp){if(L!==g||et!==C){if((v!==gs||T!==gs)&&(r.blendEquation(r.FUNC_ADD),v=gs,T=gs),et)switch(L){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.ONE,r.ONE);break;case Lu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Du:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",L);break}else switch(L){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,b.set(0,0,0),P=0,g=L,C=et}return}at=at||Q,dt=dt||K,ot=ot||ft,(Q!==v||at!==T)&&(r.blendEquationSeparate(It[Q],It[at]),v=Q,T=at),(K!==w||ft!==y||dt!==E||ot!==x)&&(r.blendFuncSeparate(Ut[K],Ut[ft],Ut[dt],Ut[ot]),w=K,y=ft,E=dt,x=ot),(pt.equals(b)===!1||rt!==P)&&(r.blendColor(pt.r,pt.g,pt.b,rt),b.copy(pt),P=rt),g=L,C=!1}function le(L,Q){L.side===Xi?Dt(r.CULL_FACE):mt(r.CULL_FACE);let K=L.side===Un;Q&&(K=!K),J(K),L.blending===po&&L.transparent===!1?ue(ms):ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let ft=L.stencilWrite;a.setTest(ft),ft&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){O!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),O=L)}function Qt(L){L!==Ep?(mt(r.CULL_FACE),L!==U&&(L===Iu?r.cullFace(r.BACK):L===Ap?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),U=L}function Je(L){L!==H&&(D&&r.lineWidth(L),H=L)}function be(L,Q,K){L?(mt(r.POLYGON_OFFSET_FILL),(I!==Q||N!==K)&&(I=Q,N=K,o.getReversed()&&(Q=-Q,K=-K),r.polygonOffset(Q,K))):Dt(r.POLYGON_OFFSET_FILL)}function re(L){L?mt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=r.TEXTURE0+B-1),R!==L&&(r.activeTexture(L),R=L)}function Ye(L,Q,K){K===void 0&&(R===null?K=r.TEXTURE0+B-1:K=R);let ft=tt[K];ft===void 0&&(ft={type:void 0,texture:void 0},tt[K]=ft),(ft.type!==L||ft.texture!==Q)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(L,Q||bt[L]),ft.type=L,ft.texture=Q)}function z(){let L=tt[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{r.compressedTexImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function ce(){try{r.compressedTexImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function ut(){try{r.texSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Bt(){try{r.texStorage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function M(){try{r.texImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function G(){try{r.texImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function st(L){return f[L]!==void 0?f[L]:r.getParameter(L)}function it(L,Q){f[L]!==Q&&(r.pixelStorei(L,Q),f[L]=Q)}function ct(L){$.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function gt(L){ht.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function W(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let ft=K.get(L);ft===void 0&&(ft=r.getUniformBlockIndex(Q,L.name),r.uniformBlockBinding(Q,ft,ft),K.set(L,ft))}function j(L,Q,K){let at=c.get(Q).get(L);l[at]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,at,K),l[at]=K)}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},R=null,tt={},u={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new Yt(0,0,0),P=0,C=!1,O=null,U=null,H=null,I=null,N=null,$.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Dt,bindFramebuffer:ve,drawBuffers:Et,useProgram:Ht,setBlending:ue,setMaterial:le,setFlipSided:J,setCullFace:Qt,setLineWidth:Je,setPolygonOffset:be,setScissorTest:re,activeTexture:Ve,bindTexture:Ye,unbindTexture:z,compressedTexImage2D:pe,compressedTexImage3D:ce,texImage2D:M,texImage3D:G,pixelStorei:it,getParameter:st,updateUBOMapping:W,uniformBlockBinding:j,texStorage2D:Bt,texStorage3D:A,texSubImage2D:Vt,texSubImage3D:ut,compressedTexSubImage2D:fe,compressedTexSubImage3D:Lt,scissor:ct,viewport:gt,reset:lt}}function WS(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):jo("canvas")}function v(A,M,G){let st=1,it=Bt(A);if((it.width>G||it.height>G)&&(st=G/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(st*it.width),gt=Math.floor(st*it.height);u===void 0&&(u=g(ct,gt));let W=M?g(ct,gt):u;return W.width=ct,W.height=gt,W.getContext("2d").drawImage(A,0,0,ct,gt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ct+"x"+gt+")."),W}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,M,G,st,it,ct=!1){if(A!==null){if(r[A]!==void 0)return r[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=M;if(M===r.RED&&(G===r.FLOAT&&(W=r.R32F),G===r.HALF_FLOAT&&(W=r.R16F),G===r.UNSIGNED_BYTE&&(W=r.R8),G===r.UNSIGNED_SHORT&&gt&&(W=gt.R16_EXT),G===r.SHORT&&gt&&(W=gt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.R8UI),G===r.UNSIGNED_SHORT&&(W=r.R16UI),G===r.UNSIGNED_INT&&(W=r.R32UI),G===r.BYTE&&(W=r.R8I),G===r.SHORT&&(W=r.R16I),G===r.INT&&(W=r.R32I)),M===r.RG&&(G===r.FLOAT&&(W=r.RG32F),G===r.HALF_FLOAT&&(W=r.RG16F),G===r.UNSIGNED_BYTE&&(W=r.RG8),G===r.UNSIGNED_SHORT&&gt&&(W=gt.RG16_EXT),G===r.SHORT&&gt&&(W=gt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RG8UI),G===r.UNSIGNED_SHORT&&(W=r.RG16UI),G===r.UNSIGNED_INT&&(W=r.RG32UI),G===r.BYTE&&(W=r.RG8I),G===r.SHORT&&(W=r.RG16I),G===r.INT&&(W=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RGB8UI),G===r.UNSIGNED_SHORT&&(W=r.RGB16UI),G===r.UNSIGNED_INT&&(W=r.RGB32UI),G===r.BYTE&&(W=r.RGB8I),G===r.SHORT&&(W=r.RGB16I),G===r.INT&&(W=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),G===r.UNSIGNED_INT&&(W=r.RGBA32UI),G===r.BYTE&&(W=r.RGBA8I),G===r.SHORT&&(W=r.RGBA16I),G===r.INT&&(W=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&gt&&(W=gt.RGB16_EXT),G===r.SHORT&&gt&&(W=gt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),M===r.RGBA){let j=ct?Ko:ne.getTransfer(it);G===r.FLOAT&&(W=r.RGBA32F),G===r.HALF_FLOAT&&(W=r.RGBA16F),G===r.UNSIGNED_BYTE&&(W=j===_e?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&gt&&(W=gt.RGBA16_EXT),G===r.SHORT&&gt&&(W=gt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(A,M){let G;return A?M===null||M===Ni||M===xs?G=r.DEPTH24_STENCIL8:M===Oi?G=r.DEPTH32F_STENCIL8:M===_o&&(G=r.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===xs?G=r.DEPTH_COMPONENT24:M===Oi?G=r.DEPTH_COMPONENT32F:M===_o&&(G=r.DEPTH_COMPONENT16),G}function b(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=new WeakRef(A);n.get(A).__ref=M,p.add(M),_.register(A,M,M)}function C(A){let M=n.get(A).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function O(A){H(A.target)}function U(A){I(A.target)}function H(A){A.removeEventListener("dispose",O),C(A),B(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function I(A){A.removeEventListener("dispose",U),C(A),X(A)}function N(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):H(M))}p.clear(),f.clear()}function B(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,st=d.get(G);if(st){let it=st[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&D(A),Object.keys(st).length===0&&d.delete(G)}n.remove(A)}function D(A){let M=n.get(A);r.deleteTexture(M.__webglTexture);let G=A.source,st=d.get(G);delete st[M.__cacheKey],o.memory.textures--}function X(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&H(G),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ct=0;ct<M.__webglFramebuffer[it].length;ct++)r.deleteFramebuffer(M.__webglFramebuffer[it][ct]);else r.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)r.deleteFramebuffer(M.__webglFramebuffer[it]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let st=A.textures;for(let it=0,ct=st.length;it<ct;it++){let gt=n.get(st[it]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(st[it])}n.remove(A)}let k=0;function R(){k=0}function tt(){return k}function Mt(A){k=A}function Ft(){let A=k;return A>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),k+=1,A}function $(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ht(A,M){let G=n.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let st=A.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function yt(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){le(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function bt(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){le(G,A,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function mt(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let Dt={[Bl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},ve={[dn]:r.NEAREST,[Jp]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Et={[jp]:r.NEVER,[ef]:r.ALWAYS,[tm]:r.LESS,[ju]:r.LEQUAL,[em]:r.EQUAL,[tf]:r.GEQUAL,[nm]:r.GREATER,[im]:r.NOTEQUAL};function Ht(A,M){if(M.type===Oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===gc||M.magFilter===da||M.magFilter===pr||M.minFilter===On||M.minFilter===gc||M.minFilter===da||M.minFilter===pr)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Dt[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Dt[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Dt[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ve[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==da&&M.minFilter!==pr||M.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function It(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",O),P(M));let st=M.source,it=d.get(st);it===void 0&&(it={},d.set(st,it));let ct=$(M);if(ct!==A.__cacheKey){it[ct]===void 0&&(it[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[ct].usedTimes++;let gt=it[A.__cacheKey];gt!==void 0&&(it[A.__cacheKey].usedTimes--,gt.usedTimes===0&&D(M)),A.__cacheKey=ct,A.__webglTexture=it[ct].texture}return G}function Ut(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ue(A,M,G,st){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,st,M.data);else{ct.sort((L,Q)=>L.start-Q.start);let gt=0;for(let L=1;L<ct.length;L++){let Q=ct[gt],K=ct[L],ft=Q.start+Q.count,at=Ut(K.start,M.width,4),dt=Ut(Q.start,M.width,4);K.start<=ft+1&&at===dt&&Ut(K.start+K.count-1,M.width,4)===at?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++gt,ct[gt]=K)}ct.length=gt+1;let W=e.getParameter(r.UNPACK_ROW_LENGTH),j=e.getParameter(r.UNPACK_SKIP_PIXELS),lt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let L=0,Q=ct.length;L<Q;L++){let K=ct[L],ft=Math.floor(K.start/4),at=Math.ceil(K.count/4),dt=ft%M.width,ot=Math.floor(ft/M.width),pt=at,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ot),e.texSubImage2D(r.TEXTURE_2D,0,dt,ot,pt,rt,G,st,M.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,W),e.pixelStorei(r.UNPACK_SKIP_PIXELS,j),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function le(A,M,G){let st=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=r.TEXTURE_3D);let it=It(A,M),ct=M.source;e.bindTexture(st,A.__webglTexture,r.TEXTURE0+G);let gt=n.get(ct);if(ct.version!==gt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let rt=ne.getPrimaries(ne.workingColorSpace),et=M.colorSpace===gr?null:ne.getPrimaries(M.colorSpace),_t=M.colorSpace===gr||rt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,i.maxTextureSize);j=Lt(M,j);let lt=s.convert(M.format,M.colorSpace),L=s.convert(M.type),Q=E(M.internalFormat,lt,L,M.normalized,M.colorSpace,M.isVideoTexture);Ht(st,M);let K,ft=M.mipmaps,at=M.isVideoTexture!==!0,dt=gt.__version===void 0||it===!0,ot=ct.dataReady,pt=b(M,j);if(M.isDepthTexture)Q=x(M.format===mr,M.type),dt&&(at?e.texStorage2D(r.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,lt,L,null));else if(M.isDataTexture)if(ft.length>0){at&&dt&&e.texStorage2D(r.TEXTURE_2D,pt,Q,ft[0].width,ft[0].height);for(let rt=0,et=ft.length;rt<et;rt++)K=ft[rt],at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,lt,L,K.data):e.texImage2D(r.TEXTURE_2D,rt,Q,K.width,K.height,0,lt,L,K.data);M.generateMipmaps=!1}else at?(dt&&e.texStorage2D(r.TEXTURE_2D,pt,Q,j.width,j.height),ot&&ue(M,j,lt,L)):e.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,lt,L,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Q,ft[0].width,ft[0].height,j.depth);for(let rt=0,et=ft.length;rt<et;rt++)if(K=ft[rt],M.format!==Fi)if(lt!==null)if(at){if(ot)if(M.layerUpdates.size>0){let _t=cf(K.width,K.height,M.format,M.type);for(let nt of M.layerUpdates){let Tt=K.data.subarray(nt*_t/K.data.BYTES_PER_ELEMENT,(nt+1)*_t/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,nt,K.width,K.height,1,lt,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,j.depth,lt,K.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Q,K.width,K.height,j.depth,0,K.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,j.depth,lt,L,K.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,Q,K.width,K.height,j.depth,0,lt,L,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{at&&dt&&e.texStorage2D(r.TEXTURE_2D,pt,Q,ft[0].width,ft[0].height);for(let rt=0,et=ft.length;rt<et;rt++)K=ft[rt],M.format!==Fi?lt!==null?at?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,lt,K.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,Q,K.width,K.height,0,K.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,lt,L,K.data):e.texImage2D(r.TEXTURE_2D,rt,Q,K.width,K.height,0,lt,L,K.data)}else if(M.isDataArrayTexture)if(at){if(dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Q,j.width,j.height,j.depth),ot)if(M.layerUpdates.size>0){let rt=cf(j.width,j.height,M.format,M.type);for(let et of M.layerUpdates){let _t=j.data.subarray(et*rt/j.data.BYTES_PER_ELEMENT,(et+1)*rt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,lt,L,_t)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,lt,L,j.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,lt,L,j.data);else if(M.isData3DTexture)at?(dt&&e.texStorage3D(r.TEXTURE_3D,pt,Q,j.width,j.height,j.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,lt,L,j.data)):e.texImage3D(r.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,lt,L,j.data);else if(M.isFramebufferTexture){if(dt)if(at)e.texStorage2D(r.TEXTURE_2D,pt,Q,j.width,j.height);else{let rt=j.width,et=j.height;for(let _t=0;_t<pt;_t++)e.texImage2D(r.TEXTURE_2D,_t,Q,rt,et,0,lt,L,null),rt>>=1,et>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),j.parentNode!==rt){rt.appendChild(j),f.add(M),rt.onpaint=et=>{let _t=et.changedElements;for(let nt of f)_t.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let _t=r.RGBA,nt=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_t,nt,Tt,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(at&&dt){let rt=Bt(ft[0]);e.texStorage2D(r.TEXTURE_2D,pt,Q,rt.width,rt.height)}for(let rt=0,et=ft.length;rt<et;rt++)K=ft[rt],at?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,lt,L,K):e.texImage2D(r.TEXTURE_2D,rt,Q,lt,L,K);M.generateMipmaps=!1}else if(at){if(dt){let rt=Bt(j);e.texStorage2D(r.TEXTURE_2D,pt,Q,rt.width,rt.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,L,j)}else e.texImage2D(r.TEXTURE_2D,0,Q,lt,L,j);w(M)&&M.mipmapsAutoUpdate===!0&&y(st),gt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,G){if(M.image.length!==6)return;let st=It(A,M),it=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);let ct=n.get(it);if(it.version!==ct.__version||st===!0){e.activeTexture(r.TEXTURE0+G);let gt=ne.getPrimaries(ne.workingColorSpace),W=M.colorSpace===gr?null:ne.getPrimaries(M.colorSpace),j=M.colorSpace===gr||gt===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let nt=0;nt<6;nt++)!lt&&!L?Q[nt]=v(M.image[nt],!0,i.maxCubemapSize):Q[nt]=L?M.image[nt].image:M.image[nt],Q[nt]=Lt(M,Q[nt]);let K=Q[0],ft=s.convert(M.format,M.colorSpace),at=s.convert(M.type),dt=E(M.internalFormat,ft,at,M.normalized,M.colorSpace),ot=M.isVideoTexture!==!0,pt=ct.__version===void 0||st===!0,rt=it.dataReady,et=b(M,K);Ht(r.TEXTURE_CUBE_MAP,M);let _t;if(M.isDepthTexture){if(dt=x(M.format===mr,M.type),pt)if(ot)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,dt,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,K.width,K.height,0,ft,at,null)}else if(lt){ot&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,dt,K.width,K.height);for(let nt=0;nt<6;nt++){_t=Q[nt].mipmaps;for(let Tt=0;Tt<_t.length;Tt++){let jt=_t[Tt];M.format!==Fi?ft!==null?ot?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,ft,jt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,dt,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,ft,at,jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,dt,jt.width,jt.height,0,ft,at,jt.data)}}}else{if(_t=M.mipmaps,ot&&pt){_t.length>0&&et++;let nt=Bt(Q[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Q[nt].width,Q[nt].height,ft,at,Q[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Q[nt].width,Q[nt].height,0,ft,at,Q[nt].data);for(let Tt=0;Tt<_t.length;Tt++){let Wt=_t[Tt].image[nt].image;ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Wt.width,Wt.height,ft,at,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,dt,Wt.width,Wt.height,0,ft,at,Wt.data)}}else{ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft,at,Q[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,ft,at,Q[nt]);for(let Tt=0;Tt<_t.length;Tt++){let jt=_t[Tt];ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,ft,at,jt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,dt,ft,at,jt.image[nt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ct.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Qt(A,M,G,st,it,ct){let gt=s.convert(G.format,G.colorSpace),W=s.convert(G.type),j=E(G.internalFormat,gt,W,G.normalized,G.colorSpace),lt=n.get(M),L=n.get(G);if(L.__renderTarget=M,!lt.__hasExternalTextures){let Q=Math.max(1,M.width>>ct),K=Math.max(1,M.height>>ct);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,ct,j,Q,K,M.depth,0,gt,W,null):e.texImage2D(it,ct,j,Q,K,0,gt,W,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,L.__webglTexture,0,Vt(M)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,it,L.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(A,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){let st=M.depthTexture,it=st&&st.isDepthTexture?st.type:null,ct=x(M.stencilBuffer,it),gt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ut(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(M),ct,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(M),ct,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ct,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,A)}else{let st=M.textures;for(let it=0;it<st.length;it++){let ct=st[it],gt=s.convert(ct.format,ct.colorSpace),W=s.convert(ct.type),j=E(ct.internalFormat,gt,W,ct.normalized,ct.colorSpace);ut(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(M),j,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(M),j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(A,M,G){let st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(M.depthTexture);it.__renderTarget=M;let ct=st?M.depthTexture.image[0]:M.depthTexture.image;(!it.__webglTexture||ct.width!==M.width||ct.height!==M.height)&&(ct.width=M.width,ct.height=M.height,M.depthTexture.needsUpdate=!0),st?mt(M.depthTexture,0):ht(M.depthTexture,0);let gt=it.__webglTexture,W=Vt(M),j=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,lt=M.depthTexture.format===mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ur)ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,j,gt,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,lt,j,gt,0);else if(M.depthTexture.format===mr)ut(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,j,gt,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,lt,j,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=st}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let st=0;st<6;st++)be(M.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?be(M.__webglFramebuffer[0],A,0):be(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=r.createRenderbuffer(),Je(M.__webglDepthbuffer[st],A,!1);else{let it=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ct)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Je(M.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(A,M,G){let st=n.get(A);M!==void 0&&Qt(st.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&re(A)}function Ye(A){let M=A.texture,G=n.get(A),st=n.get(M);A.addEventListener("dispose",U),P(A);let it=A.textures,ct=A.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=M.version,o.memory.textures++),ct){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(M.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[W][j]=r.createFramebuffer()}else G.__webglFramebuffer[W]=r.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<M.mipmaps.length;W++)G.__webglFramebuffer[W]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(gt)for(let W=0,j=it.length;W<j;W++){let lt=n.get(it[W]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&ut(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<it.length;W++){let j=it[W];G.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[W]);let lt=s.convert(j.format,j.colorSpace),L=s.convert(j.type),Q=E(j.internalFormat,lt,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),K=Vt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,G.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,M);for(let W=0;W<6;W++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Qt(G.__webglFramebuffer[W][j],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else Qt(G.__webglFramebuffer[W],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);w(M)?y(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let W=0,j=it.length;W<j;W++){let lt=it[W],L=n.get(lt),Q=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Ht(Q,lt),Qt(G.__webglFramebuffer,A,lt,r.COLOR_ATTACHMENT0+W,Q,0),w(lt)&&y(Q)}e.unbindTexture()}else{let W=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(W,st.__webglTexture),Ht(W,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Qt(G.__webglFramebuffer[j],A,M,r.COLOR_ATTACHMENT0,W,j);else Qt(G.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,W,0);w(M)?y(W):M.mipmaps.length>0&&r.texParameteri(W,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&re(A)}function z(A){let M=A.textures;for(let G=0,st=M.length;G<st;G++){let it=M[G];if(w(it)&&it.mipmapsAutoUpdate===!0){let ct=T(A),gt=n.get(it).__webglTexture;e.bindTexture(ct,gt),y(ct),e.unbindTexture()}}}let pe=[];function ce(A){if(A.samples>0){if(ut(A)===!1){let M=A.textures,G=A.width,st=A.height,it=r.COLOR_BUFFER_BIT,ct=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(A),W=M.length>1;if(W)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[lt]);let L=n.get(M[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,G,st,0,0,G,st,it,r.NEAREST),l===!0&&(pe.length=0,pe.push(r.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&pe.push(ct),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[lt]);let L=n.get(M[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,L,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function ut(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Lt(A,M){let G=A.colorSpace,st=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==$o&&G!==gr&&(ne.getTransfer(G)===_e?(st!==Fi||it!==fi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",G)),M}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=R,this.getTextureUnits=tt,this.setTextureUnits=Mt,this.setTexture2D=ht,this.setTexture2DArray=yt,this.setTexture3D=bt,this.setTextureCube=mt,this.rebindTextures=Ve,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ut,this.dispose=N}function XS(r,t){function e(n,i=gr){let s,o=ne.getTransfer(i);if(n===fi)return r.UNSIGNED_BYTE;if(n===xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xu)return r.BYTE;if(n===qu)return r.SHORT;if(n===_o)return r.UNSIGNED_SHORT;if(n===_c)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===Ju)return r.ALPHA;if(n===$u)return r.RGB;if(n===Fi)return r.RGBA;if(n===ur)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===Ku)return r.RED;if(n===yc)return r.RED_INTEGER;if(n===Wr)return r.RG;if(n===Mc)return r.RG_INTEGER;if(n===Sc)return r.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===_a)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===wc||n===Ec)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===xa||n===Lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ac||n===Cc)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return s.COMPRESSED_R11_EAC;if(n===Ic)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return s.COMPRESSED_RG11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Oc||n===Uc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yc)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===va||n===Qc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$c)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
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

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:qS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wi(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tf=class extends Gi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new bf,g={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new de,b=null,P=null,C=new Nn;C.viewport=new Fe;let O=new Nn;O.viewport=new Fe;let U=[C,O],H=new fc,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=T[$];return ht===void 0&&(ht=new ao,T[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=T[$];return ht===void 0&&(ht=new ao,T[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=T[$];return ht===void 0&&(ht=new ao,T[$]=ht),ht.getHandSpace()};function B($){let ht=E.indexOf($.inputSource);if(ht===-1)return;let yt=T[ht];yt!==void 0&&(yt.update($.inputSource,$.frame,c||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",X);for(let $=0;$<T.length;$++){let ht=E[$];ht!==null&&(E[$]=null,T[$].disconnect(ht))}I=null,N=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(w),d=null,u=null,f=null,i=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",D),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?mr:ur,bt=v.stencil?xs:Ni);let Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ci(u.textureWidth,u.textureHeight,{format:Fi,type:fi,depthTexture:new dr(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ci(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let ht=0;ht<$.removed.length;ht++){let yt=$.removed[ht],bt=E.indexOf(yt);bt>=0&&(E[bt]=null,T[bt].disconnect(yt))}for(let ht=0;ht<$.added.length;ht++){let yt=$.added[ht],bt=E.indexOf(yt);if(bt===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=E.length){E.push(yt),bt=Dt;break}else if(E[Dt]===null){E[Dt]=yt,bt=Dt;break}if(bt===-1)break}let mt=T[bt];mt&&mt.connect(yt)}}function k($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ht=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),H.near=O.near=C.near=ht,H.far=O.far=C.far=yt,(I!==H.near||N!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,N=H.far),H.layers.mask=$.layers.mask|6,C.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;let bt=$.parent,mt=H.cameras;k(H,bt);for(let Dt=0;Dt<mt.length;Dt++)k(mt[Dt],bt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),R($,H,bt)};function R($,ht,yt){yt===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return g[$]};let tt=null;function Mt($,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let bt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,bt=!0);for(let Et=0;Et<yt.length;Et++){let Ht=yt[Et],It=null;if(d!==null)It=d.getViewport(Ht);else{let ue=f.getViewSubImage(u,Ht);It=ue.viewport,Et===0&&(t.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(y))}let Ut=U[Et];Ut===void 0&&(Ut=new Nn,Ut.layers.enable(Et),Ut.viewport=new Fe,U[Et]=Ut),Ut.matrix.fromArray(Ht.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ht.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(It.x,It.y,It.width,It.height),Et===0&&(H.matrix.copy(Ut.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),bt===!0&&H.cameras.push(Ut)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Et=f.getDepthInformation(yt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Et=0;Et<yt.length;Et++){let Ht=yt[Et].camera;if(Ht){let It=g[Ht];It||(It=new aa,g[Ht]=It);let Ut=f.getCameraImage(Ht);It.sourceTexture=Ut}}}}for(let yt=0;yt<T.length;yt++){let bt=E[yt],mt=T[yt];bt!==null&&mt!==void 0&&mt.update(bt,ht,c||o)}tt&&tt($,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let Ft=new Om;Ft.setAnimationLoop(Mt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},ZS=new Ie,Xm=new Gt;Xm.set(-1,0,0,0,1,0,0,0,1);function JS(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,of(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $S(r,t,e,n){let i={},s={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,w){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let w=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],E,P,T);else h(b,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(u(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let C=x[P],O=_(C,!0);f(C,v.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function f(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function u(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],P=!1;for(let C=0;C<E.length;C++)d(E[C],b,C)===!0&&(P=!0);return P}return d(E,T,x)}function d(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let w=v.uniforms,y=0,T=16;for(let x=0,b=w.length;x<b;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,O=P.length;C<O;C++){let U=P[C],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(w[x])||Array.isArray(U.value),N=y;for(let D=0,X=H.length;D<X;D++){let k=H[D],R=_(k,I),tt=y%T,Mt=tt%R.boundary,Ft=tt+Mt;y+=Mt,Ft!==0&&T-Ft<R.storage&&(y+=T-Ft),D===0&&(N=y),y+=R.storage}let B=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new B((y-N)/Float32Array.BYTES_PER_ELEMENT),U.__offset=N}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let w=v.target;w.removeEventListener("dispose",m),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:o,update:a,dispose:g}}var KS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function QS(){return Yi===null&&(Yi=new ql(KS,16,16,Wr,Ui),Yi.name="DFG_LUT",Yi.minFilter=On,Yi.magFilter=On,Yi.wrapS=Vi,Yi.wrapT=Vi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var nh=class{constructor(t={}){let{canvas:e=sm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Sc,Mc,yc]),g=new Set([fi,Ni,_o,xs,xc,vc]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,U=null,H=null,I=null,N=null;this._outputColorSpace=ai;let B=0,D=0,X=null,k=-1,R=null,tt=new Fe,Mt=new Fe,Ft=null,$=new Yt(0),ht=0,yt=e.width,bt=e.height,mt=1,Dt=null,ve=null,Et=new Fe(0,0,yt,bt),Ht=new Fe(0,0,yt,bt),It=!1,Ut=new ps,ue=new Yl,le=!1,J=!1,Qt=new Ie,Je=new Y,be=new Fe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Ye(){return X===null?mt:1}let z=n;function pe(S,F){return e.getContext(S,F)}let ce,Vt,ut,fe,Lt,Bt,A,M,G,st,it,ct,gt,W,j,lt,L,Q,K,ft,at,dt,ot;try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",nt,!1),z===null){let F="webgl2";if(z=pe(F,S),z===null)throw pe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(S){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+S.message),S}function pt(){ce=new cM(z),ce.init(),at=new XS(z,ce),Vt=new Qy(z,ce,t,at),ut=new HS(z,ce),Vt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),H=z.createFramebuffer(),I=z.createFramebuffer(),N=z.createFramebuffer(),fe=new fM(z),Lt=new RS,Bt=new WS(z,ce,ut,Lt,Vt,at,fe),A=new lM(C),M=new px(z),dt=new $y(z,M),G=new hM(z,M,fe,dt),st=new pM(z,G,M,dt,fe),Q=new dM(z,Vt,Bt),j=new jy(Lt),it=new CS(C,A,ce,Vt,dt,j),ct=new JS(C,Lt),gt=new IS,W=new FS(ce),L=new Jy(C,A,ut,st,p,l),lt=new GS(C,st,Vt),ot=new $S(z,fe,Vt,ut),K=new Ky(z,ce,fe),ft=new uM(z,ce,fe),fe.programs=it.programs,C.capabilities=Vt,C.extensions=ce,C.properties=Lt,C.renderLists=gt,C.shadowMap=lt,C.state=ut,C.info=fe}_!==fi&&(P=new gM(_,e.width,e.height,a,i,s));let rt=new Tf(C,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(S){S!==void 0&&(mt=S,this.setSize(yt,bt,!1))},this.getSize=function(S){return S.set(yt,bt)},this.setSize=function(S,F,Z=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=S,bt=F,e.width=Math.floor(S*mt),e.height=Math.floor(F*mt),Z===!0&&(e.style.width=S+"px",e.style.height=F+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(yt*mt,bt*mt).floor()},this.setDrawingBufferSize=function(S,F,Z){yt=S,bt=F,mt=Z,e.width=Math.floor(S*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===fi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(Et)},this.setViewport=function(S,F,Z,V){S.isVector4?Et.set(S.x,S.y,S.z,S.w):Et.set(S,F,Z,V),ut.viewport(tt.copy(Et).multiplyScalar(Ye()).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,F,Z,V){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,F,Z,V),ut.scissor(Mt.copy(Ht).multiplyScalar(Ye()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(S){ut.setScissorTest(It=S)},this.setOpaqueSort=function(S){Dt=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Z=!0){let V=0;if(S){let q=!1;if(X!==null){let vt=X.texture.format;q=m.has(vt)}if(q){let vt=X.texture.type,Ct=g.has(vt),xt=L.getClearColor(),wt=L.getClearAlpha(),Nt=xt.r,Xt=xt.g,te=xt.b;Ct?(v[0]=Nt,v[1]=Xt,v[2]=te,v[3]=wt,z.clearBufferuiv(z.COLOR,0,v)):(w[0]=Nt,w[1]=Xt,w[2]=te,w[3]=wt,z.clearBufferiv(z.COLOR,0,w))}else V|=z.COLOR_BUFFER_BIT}F&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),gt.dispose(),W.dispose(),Bt.dispose(),Lt.dispose(),A.dispose(),st.dispose(),G.dispose(),dt.dispose(),ot.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Te),rt.removeEventListener("sessionend",ge),nn.stop()};function et(S){S.preventDefault(),rf("WebGLRenderer: Context Lost."),O=!0}function _t(){rf("WebGLRenderer: Context Restored."),O=!1;let S=fe.autoReset,F=lt.enabled,Z=lt.autoUpdate,V=lt.needsUpdate,q=lt.type;pt(),fe.autoReset=S,lt.enabled=F,lt.autoUpdate=Z,lt.needsUpdate=V,lt.type=q}function nt(S){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Tt(S){let F=S.target;F.removeEventListener("dispose",Tt),jt(F)}function jt(S){Wt(S),Lt.remove(S)}function Wt(S){let F=Lt.get(S).programs;F!==void 0&&(F.forEach(function(Z){it.releaseProgram(Z)}),S.isShaderMaterial&&it.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Z,V,q,vt){F===null&&(F=re);let Ct=q.isMesh&&q.matrixWorld.determinantAffine()<0,xt=Mi(S,F,Z,V,q);ut.setMaterial(V,Ct);let wt=Z.index,Nt=1;if(V.wireframe===!0){if(wt=G.getWireframeAttribute(Z),wt===void 0)return;Nt=2}let Xt=Z.drawRange,te=Z.attributes.position,Rt=Xt.start*Nt,ee=(Xt.start+Xt.count)*Nt;vt!==null&&(Rt=Math.max(Rt,vt.start*Nt),ee=Math.min(ee,(vt.start+vt.count)*Nt)),wt!==null?(Rt=Math.max(Rt,0),ee=Math.min(ee,wt.count)):te!=null&&(Rt=Math.max(Rt,0),ee=Math.min(ee,te.count));let Qe=ee-Rt;if(Qe<0||Qe===1/0)return;dt.setup(q,V,xt,Z,wt);let Ce,Ee=K;if(wt!==null&&(Ce=M.get(wt),Ee=ft,Ee.setIndex(Ce)),q.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*Ye()),Ee.setMode(z.LINES)):Ee.setMode(z.TRIANGLES);else if(q.isLine){let Mn=V.linewidth;Mn===void 0&&(Mn=1),ut.setLineWidth(Mn*Ye()),q.isLineSegments?Ee.setMode(z.LINES):q.isLineLoop?Ee.setMode(z.LINE_LOOP):Ee.setMode(z.LINE_STRIP)}else q.isPoints?Ee.setMode(z.POINTS):q.isSprite&&Ee.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Mn=q._multiDrawStarts,Pt=q._multiDrawCounts,Dn=q._multiDrawCount,me=wt?M.get(wt).bytesPerElement:1,as=Lt.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<Dn;Sn++)as.setValue(z,"_gl_DrawID",Sn),Ee.render(Mn[Sn]/me,Pt[Sn])}else if(q.isInstancedMesh)Ee.renderInstances(Rt,Qe,q.count);else if(Z.isInstancedBufferGeometry){let Mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pt=Math.min(Z.instanceCount,Mn);Ee.renderInstances(Rt,Qe,Pt)}else Ee.render(Rt,Qe)};function Le(S,F,Z,V){U!==null&&S.isNodeMaterial&&U.setObject(V,S),le===!0&&j.setState(S,Z,!1),S.transparent===!0&&S.side===Xi&&S.forceSinglePass===!1?(S.side=Un,S.needsUpdate=!0,ri(S,F,V),S.side=Hr,S.needsUpdate=!0,ri(S,F,V),S.side=Xi):ri(S,F,V)}this.compile=function(S,F,Z=null){Z===null&&(Z=S),U!==null&&U.renderStart(S,F,Z),E=W.get(Z),E.init(F),b.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),S!==Z&&S.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),J=this.localClippingEnabled,le=j.init(this.clippingPlanes,J),le===!0&&j.setGlobalState(this.clippingPlanes,F),U!==null&&lt.render(E.state.shadowsArray,Z,F);let V=new Set;return S.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let vt=q.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let xt=vt[Ct];Le(xt,Z,F,q),V.add(xt)}else Le(vt,Z,F,q),V.add(vt)}),E=b.pop(),U!==null&&U.renderEnd(),V},this.compileAsync=function(S,F,Z=null){let V=this.compile(S,F,Z);return new Promise(q=>{function vt(){if(V.forEach(function(Ct){let wt=Lt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&V.delete(Ct)}),V.size===0){q(S);return}setTimeout(vt,10)}ce.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let $e=null;function De(S){$e&&$e(S)}function Te(){nn.stop()}function ge(){nn.start()}let nn=new Om;nn.setAnimationLoop(De),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(S){$e=S,rt.setAnimationLoop(S),S===null?nn.stop():nn.start()},rt.addEventListener("sessionstart",Te),rt.addEventListener("sessionend",ge),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(S,F);let Z=rt.enabled===!0&&rt.isPresenting===!0,V=P!==null&&(X===null||Z)&&P.begin(C,X);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(F),F=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,X),E=W.get(S,b.length),E.init(F),E.state.textureUnits=Bt.getTextureUnits(),b.push(E),Qt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ue.setFromArrayCamera(F):Ut.setFromProjectionMatrix(Qt,bi,F.reversedDepth),J=this.localClippingEnabled,le=j.init(this.clippingPlanes,J),T=gt.get(S,x.length),T.init(),x.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Ct=C.xr.getDepthSensingMesh();Ct!==null&&we(Ct,F,-1/0,C.sortObjects)}we(S,F,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Dt,ve),Ve=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ve&&L.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),le===!0&&j.beginShadows();let q=E.state.shadowsArray;if(lt.render(q,S,F),le===!0&&j.endShadows(),(V&&P.hasRenderPass())===!1){let Ct=T.opaque,xt=T.transmissive;if(E.setupLights(),F.isArrayCamera){let wt=F.cameras;if(xt.length>0)for(let Nt=0,Xt=wt.length;Nt<Xt;Nt++){let te=wt[Nt];ii(Ct,xt,S,te)}Ve&&L.render(S);for(let Nt=0,Xt=wt.length;Nt<Xt;Nt++){let te=wt[Nt];yn(T,S,te,te.viewport)}}else xt.length>0&&ii(Ct,xt,S,F),Ve&&L.render(S),yn(T,S,F)}X!==null&&D===0&&(Bt.updateMultisampleRenderTarget(X),Bt.updateRenderTargetMipmap(X)),V&&P.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),dt.resetDefaultState(),k=-1,R=null,b.pop(),b.length>0?(E=b[b.length-1],Bt.setTextureUnits(E.state.textureUnits),le===!0&&j.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,U!==null&&U.renderEnd()};function we(S,F,Z,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let Ct=F.isArrayCamera?ue:Ut;if(!S.frustumCulled||S.intersectsFrustum(Ct)){V&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Qt);let xt=st.update(S),wt=S.material;wt.visible&&T.push(S,xt,wt,Z,be.z,null,F)}}else if(S.isMesh||S.isLine||S.isPoints){let Ct=F.isArrayCamera?ue:Ut;if(!S.frustumCulled||S.intersectsFrustum(Ct)){let xt=st.update(S),wt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),be.copy(xt.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let Nt=xt.groups;for(let Xt=0,te=Nt.length;Xt<te;Xt++){let Rt=Nt[Xt],ee=wt[Rt.materialIndex];ee&&ee.visible&&T.push(S,xt,ee,Z,be.z,Rt,F)}}else wt.visible&&T.push(S,xt,wt,Z,be.z,null,F)}}}let vt=S.children;for(let Ct=0,xt=vt.length;Ct<xt;Ct++)we(vt[Ct],F,Z,V)}function yn(S,F,Z,V){let{opaque:q,transmissive:vt,transparent:Ct}=S;E.setupLightsView(Z),le===!0&&j.setGlobalState(C.clippingPlanes,Z),V&&ut.viewport(tt.copy(V)),q.length>0&&Ge(q,F,Z),vt.length>0&&Ge(vt,F,Z),Ct.length>0&&Ge(Ct,F,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ii(S,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Rt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ci(1,1,{generateMipmaps:!0,type:Rt?Ui:fi,minFilter:pr,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let vt=E.state.transmissionRenderTarget[V.id],Ct=V.viewport||tt;vt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Nt=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor($),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Ve&&L.render(Z);let Xt=C.toneMapping;C.toneMapping=qi;let te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),le===!0&&j.setGlobalState(C.clippingPlanes,V),Ge(S,Z,V),Bt.updateMultisampleRenderTarget(vt),Bt.updateRenderTargetMipmap(vt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ee=0,Qe=F.length;ee<Qe;ee++){let Ce=F[ee],{object:Ee,geometry:Mn,material:Pt,group:Dn}=Ce;if(Pt.side===Xi&&Ee.layers.test(V.layers)){let me=Pt.side;Pt.side=Un,Pt.needsUpdate=!0,Ke(Ee,Z,V,Mn,Pt,Dn),Pt.side=me,Pt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Bt.updateMultisampleRenderTarget(vt),Bt.updateRenderTargetMipmap(vt))}C.setRenderTarget(xt,wt,Nt),C.setClearColor($,ht),te!==void 0&&(V.viewport=te),C.toneMapping=Xt}function Ge(S,F,Z){let V=F.isScene===!0?F.overrideMaterial:null;for(let q=0,vt=S.length;q<vt;q++){let Ct=S[q],{object:xt,geometry:wt,group:Nt}=Ct,Xt=Ct.material;Xt.allowOverride===!0&&V!==null&&(Xt=V),xt.layers.test(Z.layers)&&Ke(xt,F,Z,wt,Xt,Nt)}}function Ke(S,F,Z,V,q,vt){U!==null&&q.isNodeMaterial&&U.setObject(S,q),S.onBeforeRender(C,F,Z,V,q,vt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(C,F,Z,V,S,vt),q.transparent===!0&&q.side===Xi&&q.forceSinglePass===!1?(q.side=Un,q.needsUpdate=!0,C.renderBufferDirect(Z,F,V,q,S,vt),q.side=Hr,q.needsUpdate=!0,C.renderBufferDirect(Z,F,V,q,S,vt),q.side=Xi):C.renderBufferDirect(Z,F,V,q,S,vt),S.onAfterRender(C,F,Z,V,q,vt)}function rn(S){let F=0;for(let Z of S)Z.texture!==null&&F++;return F}function ri(S,F,Z){F.isScene!==!0&&(F=re);let V=Lt.get(S),q=E.state.lights,vt=E.state.shadowsArray,Ct=q.state.version,xt=it.getParameters(S,q.state,vt,F,Z,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(xt),Nt=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Xt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=A.get(S.envMap||V.environment,Xt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",Tt),Nt=new Map,V.programs=Nt,V.programVariants=new Map);let te=Nt.get(wt);if(te!==void 0){if(V.currentProgram===te&&V.lightsStateVersion===Ct)return He(S,xt),te}else xt.uniforms=it.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,Z,xt),S.onBeforeCompile(xt,C),te=it.acquireProgram(xt,wt),Nt.set(wt,te),V.uniforms=xt.uniforms;let Rt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=j.uniform),He(S,xt),V.needsLights=il(S),V.lightsStateVersion=Ct,V.needsLights&&(Rt.ambientLightColor.value=q.state.ambient,Rt.lightProbe.value=q.state.probe,Rt.sunLights.value=q.state.sun,Rt.sunLightShadows.value=q.state.sunShadow,Rt.directionalLights.value=q.state.directional,Rt.directionalLightShadows.value=q.state.directionalShadow,Rt.spotLights.value=q.state.spot,Rt.spotLightShadows.value=q.state.spotShadow,Rt.rectAreaLights.value=q.state.rectArea,Rt.ltc_1.value=q.state.rectAreaLTC1,Rt.ltc_2.value=q.state.rectAreaLTC2,Rt.pointLights.value=q.state.point,Rt.pointLightShadows.value=q.state.pointShadow,Rt.hemisphereLights.value=q.state.hemi,Rt.sunShadowMatrix.value=q.state.sunShadowMatrix,Rt.sunShadowCascade.value=q.state.sunShadowCascade,Rt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Rt.spotLightMatrix.value=q.state.spotLightMatrix,Rt.spotLightMap.value=q.state.spotLightMap,Rt.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=rn(E.state.lightProbeGridArray),V.currentProgram=te,V.uniformsList=null,te}function Gs(S,F,Z,V,q){let vt=Lt.get(S),Ct=vt.currentProgram.id+","+V+","+q,xt=vt.programVariants.get(Ct);return xt===void 0?(xt=ri(S,F,Z),vt.programVariants.set(Ct,xt)):(vt.currentProgram=xt,vt.uniformsList=null,vt.outputColorSpace=V,vt.toneMapping=q),xt}function sn(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=xo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function He(S,F){let Z=Lt.get(S);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Mi(S,F,Z,V,q){F.isScene!==!0&&(F=re),Bt.resetTextureUnits();let vt=F.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,xt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ne.workingColorSpace,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=A.get(V.envMap||Ct,wt),Xt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!Z.morphAttributes.position,ee=!!Z.morphAttributes.normal,Qe=!!Z.morphAttributes.color,Ce=qi;V.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ce=C.toneMapping);let Ee=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mn=Ee!==void 0?Ee.length:0,Pt=Lt.get(V),Dn=E.state.lights;if(le===!0&&(J===!0||S!==R)){let Ue=S===R&&V.id===k;j.setState(V,S,Ue)}let me=!1,as=!1;V.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Dn.state.version||q.isBatchedMesh&&Pt.batching===!1||!q.isBatchedMesh&&Pt.batching===!0||q.isBatchedMesh&&Pt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pt.instancing===!1||!q.isInstancedMesh&&Pt.instancing===!0||q.isSkinnedMesh&&Pt.skinning===!1||!q.isSkinnedMesh&&Pt.skinning===!0||q.isInstancedMesh&&Pt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pt.instancingMorph===!1&&q.morphTexture!==null||Pt.envMap!==Nt||V.fog===!0&&Pt.fog!==vt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==j.numPlanes||Pt.numIntersection!==j.numIntersection)||Pt.vertexAlphas!==Xt||Pt.vertexTangents!==te||Pt.morphTargets!==Rt||Pt.morphNormals!==ee||Pt.morphColors!==Qe||Pt.morphTargetsCount!==Mn||Pt.numLightProbeGrids!==rn(E.state.lightProbeGridArray)?me=!0:(Pt.outputColorSpace!==xt||Pt.toneMapping!==Ce)&&(as=!0):(me=!0,Pt.__version=V.version);let Sn=Pt.currentProgram;(me===!0||as===!0)&&(Sn=as===!0?Gs(V,F,q,xt,Ce):ri(V,F,q),U&&V.isNodeMaterial&&U.onUpdateProgram(V,Sn,Pt));let rl=!1,Pr=!1,ls=!1,he=Sn.getUniforms(),gn=Pt.uniforms;if(ut.useProgram(Sn.program)&&(rl=!0,Pr=!0,ls=!0),V.id!==k&&(k=V.id,Pr=!0),rl||R!==S){ut.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),he.setValue(z,"projectionMatrix",S.projectionMatrix),he.setValue(z,"viewMatrix",S.matrixWorldInverse);let hn=he.map.cameraPosition;hn!==void 0&&hn.setValue(z,Je.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),R!==S&&(R=S,Pr=!0,ls=!0)}if(Pt.needsLights&&(Dn.state.sunShadowMap.length>0&&he.setValue(z,"sunShadowMap",Dn.state.sunShadowMap,Bt),Dn.state.directionalShadowMap.length>0&&he.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,Bt),Dn.state.spotShadowMap.length>0&&he.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,Bt),Dn.state.pointShadowMap.length>0&&he.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,Bt)),q.isSkinnedMesh){he.setOptional(z,q,"bindMatrix"),he.setOptional(z,q,"bindMatrixInverse");let Ue=q.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),he.setValue(z,"boneTexture",Ue.boneTexture,Bt))}q.isBatchedMesh&&(he.setOptional(z,q,"batchingTexture"),he.setValue(z,"batchingTexture",q._matricesTexture,Bt),he.setOptional(z,q,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",q._indirectTexture,Bt),he.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",q._colorsTexture,Bt));let Pi=Z.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Q.update(q,Z,Sn),(Pr||Pt.receiveShadow!==q.receiveShadow)&&(Pt.receiveShadow=q.receiveShadow,he.setValue(z,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=QS()),Pr){if(he.setValue(z,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&Go(gn,ls),vt&&V.fog===!0&&ct.refreshFogUniforms(gn,vt),ct.refreshMaterialUniforms(gn,V,mt,bt,E.state.transmissionRenderTarget[S.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Ue=y,hn=0;for(let ir of E.state.lightProbeGridArray)ir.texture!==null&&(Ue.textures[hn]=ir.texture,Ue.min[hn]=ir.boundingBox.min,Ue.max[hn]=ir.boundingBox.max,Ue.resolution[hn]=ir.resolution,hn++);for(let ir in Ue)Ue[ir].length=hn;gn.probesSH.value=Ue.textures,gn.probesMin.value=Ue.min,gn.probesMax.value=Ue.max,gn.probesResolution.value=Ue.resolution}xo.upload(z,sn(Pt),gn,Bt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xo.upload(z,sn(Pt),gn,Bt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(z,"center",q.center),he.setValue(z,"modelViewMatrix",q.modelViewMatrix),he.setValue(z,"normalMatrix",q.normalMatrix),he.setValue(z,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Ue=V.uniformsGroups;for(let hn=0,ir=Ue.length;hn<ir;hn++){let $d=Ue[hn];ot.update($d,Sn),ot.bind($d,Sn)}}return Sn}function Go(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function il(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(S,F,Z){let V=Lt.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Lt.get(S.texture).__webglTexture=F,Lt.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let Z=Lt.get(S);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Z=0){X=S,B=F,D=Z;let V=null,q=!1,vt=!1;if(S){let xt=Lt.get(S);if(xt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(z.FRAMEBUFFER,xt.__webglFramebuffer),tt.copy(S.viewport),Mt.copy(S.scissor),Ft=S.scissorTest,ut.viewport(tt),ut.scissor(Mt),ut.setScissorTest(Ft),k=-1;return}else if(xt.__webglFramebuffer===void 0)Bt.setupRenderTarget(S);else if(xt.__hasExternalTextures)Bt.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xt=S.depthTexture;if(xt.__boundDepthTexture!==Xt){if(Xt!==null&&Lt.has(Xt)&&(S.width!==Xt.image.width||S.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(S)}}let wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);let Nt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?V=Nt[F][Z]:V=Nt[F],q=!0):S.samples>0&&Bt.useMultisampledRTT(S)===!1?V=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[Z]:V=Nt,tt.copy(S.viewport),Mt.copy(S.scissor),Ft=S.scissorTest}else tt.copy(Et).multiplyScalar(mt).floor(),Mt.copy(Ht).multiplyScalar(mt).floor(),Ft=It;if(Z!==0&&(V=H),ut.bindFramebuffer(z.FRAMEBUFFER,V)&&ut.drawBuffers(S,V),ut.viewport(tt),ut.scissor(Mt),ut.setScissorTest(Ft),q){let xt=Lt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,Z)}else if(vt){let xt=F;for(let wt=0;wt<S.textures.length;wt++){let Nt=Lt.get(S.textures[wt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,Z,xt)}}else if(S!==null&&Z!==0){let xt=Lt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xt.__webglTexture,Z)}k=-1};function Rr(S){let F=Lt.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=Vt.textureFormatReadable(S.format),F.__typeReadable=Vt.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Z,V,q,vt,Ct,xt=0){if(!(S&&S.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){ut.bindFramebuffer(z.FRAMEBUFFER,wt);try{let Nt=S.textures[xt],Xt=Nt.format,te=Nt.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xt);let Rt=Rr(Nt);if(Rt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-q&&z.readPixels(F,Z,V,q,at.convert(Xt),at.convert(te),vt)}finally{let Nt=X!==null?Lt.get(X).__webglFramebuffer:null;ut.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,F,Z,V,q,vt,Ct,xt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-q){ut.bindFramebuffer(z.FRAMEBUFFER,wt);let Nt=S.textures[xt],Xt=Nt.format,te=Nt.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xt);let Rt=Rr(Nt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ee),z.bufferData(z.PIXEL_PACK_BUFFER,vt.byteLength,z.STREAM_READ),z.readPixels(F,Z,V,q,at.convert(Xt),at.convert(te),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Qe=X!==null?Lt.get(X).__webglFramebuffer:null;ut.bindFramebuffer(z.FRAMEBUFFER,Qe);let Ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await am(z,Ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,vt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ee),z.deleteSync(Ce),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Z=0){let V=Math.pow(2,-Z),q=Math.floor(S.image.width*V),vt=Math.floor(S.image.height*V),Ct=F!==null?F.x:0,xt=F!==null?F.y:0;Bt.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Ct,xt,q,vt),ut.unbindTexture()},this.copyTextureToTexture=function(S,F,Z=null,V=null,q=0,vt=0){let Ct,xt,wt,Nt,Xt,te,Rt,ee,Qe,Ce=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(Z!==null)Ct=Z.max.x-Z.min.x,xt=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Nt=Z.min.x,Xt=Z.min.y,te=Z.isBox3?Z.min.z:0;else{let he=Math.pow(2,-q);Ct=Math.floor(Ce.width*he),xt=Math.floor(Ce.height*he),S.isDataArrayTexture?wt=Ce.depth:S.isData3DTexture?wt=Math.floor(Ce.depth*he):wt=1,Nt=0,Xt=0,te=0}V!==null?(Rt=V.x,ee=V.y,Qe=V.z):(Rt=0,ee=0,Qe=0);let Ee=at.convert(F.format),Mn=at.convert(F.type),Pt;F.isData3DTexture?(Bt.setTexture3D(F,0),Pt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Bt.setTexture2DArray(F,0),Pt=z.TEXTURE_2D_ARRAY):(Bt.setTexture2D(F,0),Pt=z.TEXTURE_2D),ut.activeTexture(z.TEXTURE0),ut.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),ut.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ut.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Dn=ut.getParameter(z.UNPACK_ROW_LENGTH),me=ut.getParameter(z.UNPACK_IMAGE_HEIGHT),as=ut.getParameter(z.UNPACK_SKIP_PIXELS),Sn=ut.getParameter(z.UNPACK_SKIP_ROWS),rl=ut.getParameter(z.UNPACK_SKIP_IMAGES);ut.pixelStorei(z.UNPACK_ROW_LENGTH,Ce.width),ut.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ce.height),ut.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),ut.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),ut.pixelStorei(z.UNPACK_SKIP_IMAGES,te);let Pr=S.isDataArrayTexture||S.isData3DTexture,ls=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let he=Lt.get(S),gn=Lt.get(F),Pi=Lt.get(he.__renderTarget),Ue=Lt.get(gn.__renderTarget);ut.bindFramebuffer(z.READ_FRAMEBUFFER,Pi.__webglFramebuffer),ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let hn=0;hn<wt;hn++)Pr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.get(S).__webglTexture,q,te+hn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.get(F).__webglTexture,vt,Qe+hn)),z.blitFramebuffer(Nt,Xt,Nt+Ct,Xt+xt,Rt,ee,Rt+Ct,ee+xt,z.DEPTH_BUFFER_BIT,z.NEAREST);ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||S.isRenderTargetTexture||Lt.has(S)){let he=Lt.get(S),gn=Lt.get(F);ut.bindFramebuffer(z.READ_FRAMEBUFFER,I),ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let Pi=0;Pi<wt;Pi++)Pr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,he.__webglTexture,q,te+Pi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.__webglTexture,q),ls?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,vt,Qe+Pi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,vt),q!==0?z.blitFramebuffer(Nt,Xt,Nt+Ct,Xt+xt,Rt,ee,Rt+Ct,ee+xt,z.COLOR_BUFFER_BIT,z.NEAREST):ls?z.copyTexSubImage3D(Pt,vt,Rt,ee,Qe+Pi,Nt,Xt,Ct,xt):z.copyTexSubImage2D(Pt,vt,Rt,ee,Nt,Xt,Ct,xt);ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ls?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,Ee,Mn,Ce.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,Ee,Ce.data):z.texSubImage3D(Pt,vt,Rt,ee,Qe,Ct,xt,wt,Ee,Mn,Ce):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,vt,Rt,ee,Ct,xt,Ee,Mn,Ce.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,vt,Rt,ee,Ce.width,Ce.height,Ee,Ce.data):z.texSubImage2D(z.TEXTURE_2D,vt,Rt,ee,Ct,xt,Ee,Mn,Ce);ut.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),ut.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me),ut.pixelStorei(z.UNPACK_SKIP_PIXELS,as),ut.pixelStorei(z.UNPACK_SKIP_ROWS,Sn),ut.pixelStorei(z.UNPACK_SKIP_IMAGES,rl),vt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Pt),ut.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&Bt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Bt.setTextureCube(S,0):S.isData3DTexture?Bt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Bt.setTexture2DArray(S,0):Bt.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){B=0,D=0,X=null,ut.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function eg(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pa={duration:.5,overwrite:!1,delay:0},kf,_n,Ne,wi=1e8,Me=1/wi,Lf=Math.PI*2,jS=Lf/4,tb=0,ng=Math.sqrt,eb=Math.cos,nb=Math.sin,ln=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},vr=function(t){return typeof t=="number"},gh=function(t){return typeof t>"u"},Ki=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},Vf=function(){return typeof window<"u"},sh=function(t){return We(t)||ln(t)},ig=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,ib=/random\([^)]+\)/g,rb=/,\s*/g,Ym=/(?:-?\.?\d|\.)+/gi,Gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hf=/[+-]=-?[.\d]+/,sb=/[^,'"\[\]\s]+/gi,ob=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,Ji,Df,Wf,pi={},ch={},rg,sg=function(t){return(ch=Mo(t,pi))&&Cn},_h=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ia=function(t,e){return!e&&console.warn(t)},og=function(t,e){return t&&(pi[t]=e)&&ch&&(ch[t]=e)||pi},La=function(){return 0},ab={suppressEvents:!0,isStart:!0,kill:!1},oh={suppressEvents:!0,kill:!1},lb={suppressEvents:!0},Xf={},qr=[],Nf={},ag,Jn={},Ef={},Zm=30,ah=[],qf="",Yf=function(t){var e=t[0],n,i;if(Ki(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ah.length;i--&&!ah[i].targetTest(e););n=ah[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Kf(t[i],n)))||t.splice(i,1);return t},Yr=function(t){return t._gsap||Yf(Ei(t))[0]._gsap},Zf=function(t,e,n){return(n=t[e])&&We(n)?t[e]():gh(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},Ts=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hh=function(){var t=qr.length,e=qr.slice(0),n,i;for(Nf={},qr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jf=function(t){return!!(t._initted||t._startAt||t.add)},lg=function(t,e,n,i){qr.length&&!_n&&hh(),t.render(e,n,i||!!(_n&&e<0&&Jf(t))),qr.length&&!_n&&hh()},cg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sb).length<2?e:ln(t)?t.trim():t},hg=function(t){return t},mi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Mo=function(t,e){for(var n in e)t[n]=e[n];return t},Jm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ki(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},uh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Aa=function(t){var e=t.parent||ze,n=t.keyframes?hb(An(t.keyframes)):mi;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ub=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ug=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Zr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ys=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},fb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Of=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(oh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},db=function r(t){return!t||t._ts&&r(t.parent)},$m=function(t){return t._repeat?So(t._tTime,t=t.duration()+t._rDelay)*t:0},So=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},fh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vh=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},yh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vh(t),n._dirty||ys(n,t)),t},fg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fh(t.rawTime(),e),(!e._dur||Ua(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),ys(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},$i=function(t,e,n,i){return e.parent&&Zr(e),e._start=Be((vr(n)?n:!n&&dh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ze?Ti(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ug(t,e,"_first","_last",t._sort?"_start":0),dh(e)||(t._recent=e),i||fg(t,e),t._ts<0&&yh(t,t._tTime),t},dg=function(t,e){return(pi.ScrollTrigger||_h("scrollTrigger",e))&&pi.ScrollTrigger.create(e,t)},pg=function(t,e,n,i,s){if(td(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ag!==$n.frame)return qr.push(t),t._lazy=[s,i],1},pb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mb=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&pb(t)&&!(!t._initted&&dh(t))||(t._ts<0||t._dp._ts<0)&&!dh(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Ua(0,t._tDur,e),h=So(l,a),t._yoyo&&h&1&&(o=1-o),h!==So(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||_n||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&pg(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Of(t,e,n,!0),t._onUpdate&&!n&&di(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&di(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Zr(t,1),!n&&!_n&&(di(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},gb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},bo=function(t,e,n,i){var s=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Be(o*(s+1)+t._rDelay*s):o,a>0&&!i&&yh(t,t._tTime=t._tDur*a),t.parent&&vh(t),n||ys(t.parent,t),t},Km=function(t){return t instanceof En?ys(t):bo(t,t._dur)},_b={_start:0,endTime:La,totalDuration:La},Ti=function r(t,e,n){var i=t.labels,s=t._recent||_b,o=t.duration()>=wi?s.endTime(!1):t._dur,a,l,c;return ln(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ca=function(t,e,n){var i=vr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ze(e[0],o,e[s+1])},Jr=function(t,e){return t||t===0?e(t):e},Ua=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!ln(t)||!(e=ob.exec(t))?"":e[1]},xb=function(t,e,n){return Jr(n,function(i){return Ua(t,e,i)})},Uf=[].slice,mg=function(t,e){return t&&Ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ki(t[0]))&&!t.nodeType&&t!==Ji},vb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ln(i)&&!e||mg(i,1)?(s=n).push.apply(s,Ei(i)):n.push(i)})||n},Ei=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):ln(t)&&!n&&(Df||!To())?Uf.call((e||Wf).querySelectorAll(t),0):An(t)?vb(t,n):mg(t)?Uf.call(t,0):t?[t]:[]},Ff=function(t){return t=Ei(t)[0]||Ia("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ei(e,n.querySelectorAll?n:n===t?Ia("Invalid scope")||Wf.createElement("div"):t)}},gg=function(t){return t.sort(function(){return .5-Math.random()})},_g=function(t){if(We(t))return t;var e=Ki(t)?t:{each:t},n=Ms(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return ln(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,p){var _=(p||e).length,m=o[_],g,v,w,y,T,E,x,b,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,wi])[1],!P){for(x=-wi;x<(x=p[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(m=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===wi?0:l?_*f/P-.5:i/P|0,x=0,b=wi,E=0;E<_;E++)w=E%P-g,y=v-(E/P|0),m[E]=T=c?Math.abs(c==="y"?y:w):ng(w*w+y*y),T>x&&(x=T),T<b&&(b=T);i==="random"&&gg(m),m.max=x-b,m.min=b,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=xn(e.amount||e.each)||0,n=n&&_<0?Lb(n):n}return _=(m[u]-m.min)/m.max||0,Be(m.b+(n?n(_):_)*m.v)+m.u}},Bf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vr(n)?0:xn(n))}},xg=function(t,e){var n=An(t),i,s;return!n&&Ki(t)&&(i=n=t.radius||wi,t.values?(t=Ei(t.values),(s=!vr(t[0]))&&(i*=i)):t=Bf(t.increment)),Jr(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||vr(o)?h:h+xn(o)}:Bf(t))},vg=function(t,e,n,i){return Jr(An(t)?!e:n===!0?!!(n=0):!i,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},yb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Mb=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},Sb=function(t,e,n){return Mg(t,e,0,1,n)},yg=function(t,e,n){return Jr(n,function(i){return t[~~e(i)]})},bb=function r(t,e,n){var i=e-t;return An(t)?yg(t,r(0,t.length),e):Jr(n,function(s){return(i+(s-t)%i)%i+t})},Tb=function r(t,e,n){var i=e-t,s=i*2;return An(t)?yg(t,r(0,t.length-1),e):Jr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},wo=function(t){return t.replace(ib,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(rb);return vg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Mg=function(t,e,n,i,s){var o=e-t,a=i-n;return Jr(s,function(l){return n+((l-t)/o*a||0)})},wb=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=ln(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=Mo(An(t)?[]:{},t));if(!h){for(l in e)Qf.call(a,t,l,"get",e[l]);s=function(p){return id(p,a)||(o?t.p:t)}}}return Jr(n,s)},Qm=function(t,e,n){var i=t.labels,s=wi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},di=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&qr.length&&hh(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},wa=function(t){return Zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&di(t,"onInterrupt"),t},yo,Sg=[],bg=function(t){if(t)if(t=!t.name&&t.default||t,Vf()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:La,render:id,add:Qf,kill:Gb,modifier:Vb,rawVars:0},o={targetTest:0,get:0,getSetter:Mh,aliases:{},register:0};if(To(),t!==i){if(Jn[e])return;mi(i,mi(uh(t,s),o)),Mo(i.prototype,Mo(s,uh(t,o))),Jn[i.prop=e]=i,t.targetTest&&(ah.push(i),Xf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}og(e,i),t.register&&t.register(Cn,i,Bn)}else Sg.push(t)},Ae=255,Ea={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Af=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},Tg=function(t,e,n){var i=t?vr(t)?[t>>16,t>>8&Ae,t&Ae]:0:Ea.black,s,o,a,l,c,h,f,u,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ea[t])i=Ea[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ae,i&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Ym),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Af(l+1/3,s,o),i[1]=Af(l,s,o),i[2]=Af(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Gf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ym)||Ea.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Ae,o=i[1]/Ae,a=i[2]/Ae,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},wg=function(t){var e=[],n=[],i=-1;return t.split(xr).forEach(function(s){var o=s.match(bs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},jm=function(t,e,n){var i="",s=(t+i).match(xr),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Tg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=wg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(xr,"1").split(bs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(xr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ea)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Eb=/hsl[a]?\(/,$f=function(t){var e=t.join(" "),n;if(xr.lastIndex=0,xr.test(e))return n=Eb.test(e),t[1]=jm(t[1],n),t[0]=jm(t[0],n,wg(t[1])),!0},Da,$n=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,p=function _(m){var g=r()-i,v=m===!0,w,y,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,w=T-o,(w>0||v)&&(E=++f.frame,u=T-f.time*1e3,f.time=T=T/1e3,o+=w+(w>=s?0:s-w),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](T,u,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){rg&&(!Df&&Vf()&&(Ji=Df=window,Wf=Ji.document||{},pi.gsap=Cn,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(Cn.version),sg(ch||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),Sg.forEach(bg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Da=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Da=0,c=La},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,g,v){var w=g?function(y,T,E,x){m(y,T,E,x),f.remove(w)}:m;return f.remove(m),a[v?"unshift":"push"](w),To(),w},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),To=function(){return!Da&&$n.wake()},oe={},Ab=/^[\d.\-M][\d.\-,\s]/,Cb=/["']/g,Rb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Cb,"").trim():+c,i=l.substr(a+1).trim();return e},Pb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ib=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Rb(e[1])]:Pb(t).split(",").map(cg)):oe._CE&&Ab.test(t)?oe._CE("",t):n},Lb=function(t){return function(e){return 1-t(1-e)}},Ms=function(t,e){return t&&(We(t)?t:oe[t]||Ib(t))||e},ws=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){oe[a]=pi[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Eg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Cf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Lf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*nb((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Eg(a);return s=Lf/s,l.config=function(c,h){return r(t,c,h)},l},Rf=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Eg(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ws(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;ws("Elastic",Cf("in"),Cf("out"),Cf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ws("Circ",function(r){return-(ng(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-eb(r*jS)+1});ws("Back",Rf("in"),Rf("out"),Rf());oe.SteppedEase=oe.steps=pi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*Ua(0,o,a)|0)+s)*n}}};Pa.ease=oe["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return qf+=r+","+r+"Params,"});var Kf=function(t,e){this.id=tb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zf,this.set=e?e.getSetter:Mh},Na=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bo(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),Da||$n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yh(this,n),!s._dp||s.parent||fg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$m(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$m(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?So(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Ua(-Math.abs(this._delay),a,s),i!==!1),vh(this),fb(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{To(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Me,o;if(s)for(this._tTime-=Me,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Me){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lb);var i=_n;return _n=n,Jf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Km(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Km(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ti(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=We(n)?n:hg,l=function(){var h=i.then;i.then=null,s&&s(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){wa(this)},r})();mi(Na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var En=(function(r){eg(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),ze&&$i(n.parent||ze,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dg(_r(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ca(0,arguments,this),this},e.from=function(i,s,o){return Ca(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ca(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ze(i,s,Ti(this,o),1),this},e.call=function(i,s,o){return $i(this,Ze.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ze(i,o,Ti(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Aa(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Aa(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Be(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,p,_,m,g,v,w,y,T,E,x;if(this!==ze&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,w=this._ts,g=!w,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Be(h%m),h===l?(_=this._repeat,u=c):(T=Be(h/m),_=~~T,_&&_===T&&(u=c,_--),u>c&&(u=c)),T=So(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),E&&_&1&&(u=c-u,x=1),_!==T&&!this._lock){var b=E&&T&1,P=b===(E&&_&1);if(_<T&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Be(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=gb(this,Be(a),Be(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(di(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-Me);break}}d=p}else{d=this._last;for(var C=i<0?i:u;d;){if(p=d._prev,(d._act||C<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,o||_n&&Jf(d)),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=C?-Me:Me);break}}d=p}}if(v&&!s&&(this.pause(),v.render(u>=a?0:-Me)._zTime=u>=a?1:-1,this._ts))return this._start=y,vh(this),this.render(i,s,o);this._onUpdate&&!s&&di(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(di(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(vr(s)||(s=Ti(this,s,i)),!(i instanceof Na)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(We(i))i=Ze.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ze?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return ln(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&xh(this,i),i===this._recent&&(this._recent=this._last),ys(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ti(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ze.delayedCall(0,s||La,o);return a.data="isPause",this._hasPause=1,$i(this,a,Ti(this,i))},e.removePause=function(i){var s=this._first;for(i=Ti(this,i);s;)s._start===i&&s.data==="isPause"&&Zr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ei(i),l=this._first,c=vr(s),h;l;)l instanceof Ze?cb(l._targets,a)&&(c?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Ti(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,p=Ze.to(o,mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&bo(p,m,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,f||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,mi({startAt:{time:Ti(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Qm(this,Ti(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Qm(this,Ti(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Be(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ys(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=wi,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Be(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bo(o,o===ze&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ze._ts&&(lg(ze,fh(i,ze)),ag=$n.frame),$n.frame>=Zm){Zm+=Qn.autoSleep||120;var s=ze._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t})(Na);mi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var Db=function(t,e,n,i,s,o,a){var l=new Bn(this._pt,t,e,0,1,nd,null,s),c=0,h=0,f,u,d,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=wo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(wf)||[];f=wf.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Ts(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=wf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Hf.test(i)||g)&&(l.e=0),this._pt=l,l},Qf=function(t,e,n,i,s,o,a,l,c,h){We(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:We(f)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=We(f)?c?Bb:Cg:ed,p;if(ln(i)&&(~i.indexOf("random(")&&(i=wo(i)),i.charAt(1)==="="&&(p=Ts(u,i)+(xn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||zf)return!isNaN(u*i)&&i!==""?(p=new Bn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?kb:Rg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!f&&!(e in t)&&_h(e,i),Db.call(this,t,e,u,i,d,l||Qn.stringFilter,c))},Nb=function(t,e,n,i,s){if(We(t)&&(t=Ra(t,s,e,n,i)),!Ki(t)||t.style&&t.nodeType||An(t)||ig(t))return ln(t)?Ra(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ra(t[a],s,e,n,i);return o},jf=function(t,e,n,i,s,o){var a,l,c,h;if(Jn[t]&&(a=new Jn[t]).init(s,a.rawVars?e[t]:Nb(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==yo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Xr,zf,td=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,w=t._overwrite==="auto"&&!kf,y=t.timeline,T=i.easeReverse||f,E,x,b,P,C,O,U,H,I,N,B,D,X;if(y&&(!u||!s)&&(s="none"),t._ease=Ms(s,Pa.ease),t._rEase=T&&(Ms(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(H=m[0]?Yr(m[0]).harness:0,D=H&&i[H.prop],E=uh(i,Xf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?oh:ab),_._lazy=0),o){if(Zr(t._startAt=Ze.set(m,mi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return di(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!d)&&t._startAt.revert(oh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),b=mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Kn(l),immediateRender:a,stagger:0,parent:g},E),D&&(b[H.prop]=D),Zr(t._startAt=Ze.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(oh):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Kn(l)||l&&!p,x=0;x<m.length;x++){if(C=m[x],U=C._gsap||Yf(m)[x]._gsap,t._ptLookup[x]=N={},Nf[U.id]&&qr.length&&hh(),B=v===m?x:v.indexOf(C),H&&(I=new H).init(C,D||E,t,B,v)!==!1&&(t._pt=P=new Bn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(k){N[k]=P}),I.priority&&(O=1)),!H||D)for(b in E)Jn[b]&&(I=jf(b,E,t,B,C,v))?I.priority&&(O=1):N[b]=P=Qf.call(t,C,b,"get",E[b],B,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),w&&t._pt&&(Xr=t,ze.killTweensOf(C,N,t.globalTime(e)),X=!t.parent,Xr=0),t._pt&&l&&(Nf[U.id]=1)}O&&rd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,u&&e<=0&&y.render(wi,!0,!0)},Ob=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return zf=1,t.vars[e]="+=0",td(t,a),zf=0,l?Ia(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Xe(n)+xn(f.e)),f.b&&(f.b=h.s+xn(f.b))},Ub=function(t,e){var n=t[0]?Yr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Mo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ra=function(t,e,n,i,s){return We(t)?t.call(e,n,i,s):ln(t)&&~t.indexOf("random(")?wo(t):t},ph=qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ag={};Fn(ph+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ag[r]=1});ph=ph.split(",");var Ze=(function(r){eg(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Aa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||ze,v=(An(n)||ig(n)?vr(n[0]):"length"in i)?[n]:Ei(n),w,y,T,E,x,b,P,C;if(a._targets=v.length?Yf(v):Ia("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||u||sh(c)||sh(h)){i=a.vars;var O=i.easeReverse||i.yoyoEase;if(w=a.timeline=new En({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),w.kill(),w.parent=w._dp=_r(a),w._start=0,u||sh(c)||sh(h)){if(E=v.length,P=u&&_g(u),Ki(u))for(x in u)~ph.indexOf(x)&&(C||(C={}),C[x]=u[x]);for(y=0;y<E;y++)T=uh(i,Ag),T.stagger=0,O&&(T.easeReverse=O),C&&Mo(T,C),b=v[y],T.duration=+Ra(c,_r(a),y,b,v),T.delay=(+Ra(h,_r(a),y,b,v)||0)-a._delay,!u&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(b,T,P?P(y,b,v):0),w._ease=oe.none;w.duration()?c=h=0:a.timeline=0}else if(p){Aa(mi(w.vars.defaults,{ease:"none"})),w._ease=Ms(p.ease||i.ease||"none");var U=0,H,I,N;if(An(p))p.forEach(function(B){return w.to(v,B,">")}),w.duration();else{T={};for(x in p)x==="ease"||x==="easeEach"||Fb(x,p[x],T,p.easeEach);for(x in T)for(H=T[x].sort(function(B,D){return B.t-D.t}),U=0,y=0;y<H.length;y++)I=H[y],N={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},N[x]=I.v,w.to(v,N,U),U+=N.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return d===!0&&!kf&&(Xr=_r(a),ze.killTweensOf(v),Xr=0),$i(g,_r(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Be(g._time)&&Kn(f)&&db(_r(a))&&g.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),m&&dg(_r(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Me&&!h?l:i<Me?0:i,u,d,p,_,m,g,v,w;if(!c)mb(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Be(f%_),f===l?(p=this._repeat,u=c):(m=Be(f/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=So(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(pg(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(di(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Of(this,i,s,o),di(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Of(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zr(this,1),!s&&!(h&&!a)&&(f||a||g)&&(di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Da||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||td(this,c),h=this._ease(c/this._dur),Ob(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(yh(this,0),this.parent||ug(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xr&&Xr.vars.overwrite!==!0)._first||wa(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,h=this._pt,f,u,d,p,_,m,g;if((!s||s==="all")&&ub(a,l))return s==="all"&&(this._pt=0),wa(this);for(f=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},Fn(s,function(v){return _[v]=1}),s=_),s=Ub(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(f[g]=s,p=u,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xh(this,m,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&wa(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ca(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ca(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ze.killTweensOf(i,s,o)},t})(Na);mi(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Ze[r]=function(){var t=new En,e=Uf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ed=function(t,e,n){return t[e]=n},Cg=function(t,e,n){return t[e](n)},Bb=function(t,e,n,i){return t[e](i.fp,n)},zb=function(t,e,n){return t.setAttribute(e,n)},Mh=function(t,e){return We(t[e])?Cg:gh(t[e])&&t.setAttribute?zb:ed},Rg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},nd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},id=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vb=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Gb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},rd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Bn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Rg,this.d=l||this,this.set=c||ed,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Hb,this.m=n,this.mt=s,this.tween=i},r})();Fn(qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Xf[r]=1});pi.TweenMax=pi.TweenLite=Ze;pi.TimelineLite=pi.TimelineMax=En;ze=new En({sortChildren:!1,defaults:Pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=$f;var Ss=[],lh={},Wb=[],tg=0,Xb=0,Pf=function(t){return(lh[t]||Wb).map(function(e){return e()})},Oa=function(){var t=Date.now(),e=[];t-tg>2&&(Pf("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ji.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Pf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),tg=t,Pf("matchMedia"))},Pg=(function(){function r(e,n){this.selector=n&&Ff(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,a=function(){var c=Ne,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ff(s)),Ne=o,f=i.apply(o,arguments),We(f)&&o._r.push(f),Ne=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ze)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Ss.length;o--;)Ss[o].id===this.id&&Ss.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Oa):a.removeEventListener("change",Oa)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),qb=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ki(n)||(n={matches:n});var o=new Pg(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ji.matchMedia(n[c]),l&&(Ss.indexOf(o)<0&&Ss.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Oa):l.addEventListener("change",Oa),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),mh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bg(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,i){ln(t)&&(t=Ei(t)[0]);var s=Yr(t||{}).get,o=n?hg:cg;return n==="native"&&(n=""),t&&(e?o((Jn[e]&&Jn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ei(t),t.length>1){var i=t.map(function(h){return Cn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Jn[e],a=Yr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;yo._pt=0,f.init(t,n?h+n:h,yo,0,[t]),f.render(1,f),yo._pt&&id(1,yo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Cn.to(t,mi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ms(t.ease,Pa.ease)),Jm(Pa,t||{})},config:function(t){return Jm(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!pi[a]&&Ia(e+" effect requires "+a+" plugin.")}),Ef[e]=function(a,l,c){return n(Ei(a),mi(l||{},s),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(Ef[e](a,Ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Ms(e)},parseEase:function(t,e){return arguments.length?Ms(t,e):oe},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,s;for(n.smoothChildTiming=Kn(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(ze,n,0),n},context:function(t,e){return t?new Pg(t,e):Ne},matchMedia:function(t){return new qb(t)},matchMediaRefresh:function(){return Ss.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Oa()},addEventListener:function(t,e){var n=lh[t]||(lh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=lh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bb,wrapYoyo:Tb,distribute:_g,random:vg,snap:xg,normalize:Sb,getUnit:xn,clamp:xb,splitColor:Tg,toArray:Ei,selector:Ff,mapRange:Mg,pipe:yb,unitize:Mb,interpolate:wb,shuffle:gg},install:sg,effects:Ef,ticker:$n,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:ze,core:{PropTween:Bn,globals:og,Tween:Ze,Timeline:En,Animation:Na,getCache:Yr,_removeLinkedListItem:xh,reverting:function(){return _n},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return kf=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mh[r]=Ze[r]});$n.add(En.updateRoot);yo=mh.to({},{duration:0});var Yb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zb=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Yb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},If=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Zb(a,s)}}}},Cn=mh.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},If("roundProps",Bf),If("modifiers"),If("snap",xg))||mh;Ze.version=En.version=Cn.version="3.15.1";rg=1;Vf()&&To();var Jb=oe.Power0,$b=oe.Power1,Kb=oe.Power2,Qb=oe.Power3,jb=oe.Power4,t1=oe.Linear,e1=oe.Quad,n1=oe.Cubic,i1=oe.Quart,r1=oe.Quint,s1=oe.Strong,o1=oe.Elastic,a1=oe.Back,l1=oe.SteppedEase,c1=oe.Bounce,h1=oe.Sine,u1=oe.Expo,f1=oe.Circ;var Ig,$r,Ao,hd,Rs,d1,Lg,ud,p1=function(){return typeof window<"u"},Mr={},Cs=180/Math.PI,Co=Math.PI/180,Eo=Math.atan2,Dg=1e8,fd=/([A-Z])/g,m1=/(left|right|width|margin|padding|x)/i,g1=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},v1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},y1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Vg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Gg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M1=function(t,e,n){return t.style[e]=n},S1=function(t,e,n){return t.style.setProperty(e,n)},b1=function(t,e,n){return t._gsap[e]=n},T1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},w1=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},E1=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ke="transform",jn=ke+"Origin",A1=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Qi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=yr(i,a)}):this.tfm[t]=o.x?o[t]:yr(i,t),t===jn&&(this.tfm.zOrigin=o.zOrigin);else return Qi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ke)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=ke}(s||e)&&this.props.push(t,e,s[t])},Hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(fd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ud(),(!s||!s.isStart)&&!n[ke]&&(Hg(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wg=function(t,e){var n={target:t,props:[],revert:C1,save:A1};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Xg,ad=function(t,e){var n=$r.createElementNS?$r.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$r.createElement(t);return n&&n.style?n:$r.createElement(t)},gi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(fd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ro(e)||e,1)||""},Ng="O,Moz,ms,Ms,Webkit".split(","),Ro=function(t,e,n){var i=e||Rs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ng[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ng[o]:"")+t},ld=function(){p1()&&window.document&&(Ig=window,$r=Ig.document,Ao=$r.documentElement,Rs=ad("div")||{style:{}},d1=ad("div"),ke=Ro(ke),jn=ke+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xg=!!Ro("perspective"),ud=Cn.core.reverting,hd=1)},Og=function(t){var e=t.ownerSVGElement,n=ad("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ao.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ao.removeChild(n),s},Ug=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qg=function(t){var e,n;try{e=t.getBBox()}catch{e=Og(t),n=1}return e&&(e.width||e.height)||n||(e=Og(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ug(t,["x","cx","x1"])||0,y:+Ug(t,["y","cy","y1"])||0,width:0,height:0}:e},Yg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qg(t))},Qr=function(t,e){if(e){var n=t.style,i;e in Mr&&e!==jn&&(e=ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(fd,"-$1").toLowerCase())):n.removeAttribute(e)}},Kr=function(t,e,n,i,s,o){var a=new Bn(t._pt,e,n,0,1,o?Gg:Vg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Fg={deg:1,rad:1,turn:1},R1={grid:1,flex:1},jr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Rs.style,l=m1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||Fg[i]||Fg[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&Yg(t),(d||o==="%")&&(Mr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Xe(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===$r||!_.appendChild)&&(_=$r.body),m=_._gsap,m&&d&&m.width&&l&&m.time===$n.time&&!m.uncache)return Xe(s/m.width*f);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=f+i,p=t[h],v?t.style[e]=v:Qr(t,e)}else(d||o==="%")&&!R1[gi(_,"display")]&&(a.position=gi(t,"position")),_===t&&(a.position="static"),_.appendChild(Rs),p=Rs[h],_.removeChild(Rs),a.position="absolute";return l&&d&&(m=Yr(_),m.time=$n.time,m.width=_[h]),Xe(u?p*s/f:p&&s?f/p*s:0)},yr=function(t,e,n,i){var s;return hd||ld(),e in Qi&&e!=="transform"&&(e=Qi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Mr[e]&&e!=="transform"?(s=za(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:bh(gi(t,jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sh[e]&&Sh[e](t,e,n)||gi(t,e)||Zf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jr(t,e,s,n)+n:s},P1=function(t,e,n,i){if(!n||n==="none"){var s=Ro(e,t,1),o=s&&gi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,nd),l=0,c=0,h,f,u,d,p,_,m,g,v,w,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=gi(t,e)||i,_?t.style[e]=_:Qr(t,e)),h=[n,i],$f(h),n=h[0],i=h[1],u=n.match(bs)||[],T=i.match(bs)||[],T.length){for(;f=bs.exec(i);)m=f[0],v=i.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ts(d,m)+y),g=parseFloat(m),w=m.substr((g+"").length),l=bs.lastIndex-w.length,w||(w=w||Qn.units[e]||y,l===i.length&&(i+=w,a.e+=w)),y!==w&&(d=jr(t,e,_,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Gg:Vg;return Hf.test(i)&&(a.e=0),this._pt=a,a},Bg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bg[n]||n,e[1]=Bg[i]||i,e.join(" ")},L1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Mr[a]&&(l=1,a=a==="transformOrigin"?jn:ke),Qr(n,a);l&&(Qr(n,ke),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",za(n,1),o.uncache=1,Hg(i)))}},Sh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,L1);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ba=[1,0,0,1,0,0],Zg={},Jg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zg=function(t){var e=gi(t,ke);return Jg(e)?Ba:e.substr(7).match(Gf).map(Xe)},dd=function(t,e){var n=t._gsap||Yr(t),i=t.style,s=zg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ba:s):(s===Ba&&!t.offsetParent&&t!==Ao&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ao.appendChild(t)),s=zg(t),l?i.display=l:Qr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ao.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cd=function(t,e,n,i,s,o){var a=t._gsap,l=s||dd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,b,P;n?l!==Ba&&(x=d*m-p*_)&&(b=y*(m/x)+T*(-_/x)+(_*v-m*g)/x,P=y*(-p/x)+T*(d/x)-(d*v-p*g)/x,y=b,T=P):(E=qg(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=f+(g*d+v*_)-g,a.yOffset=u+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[jn]="0px 0px",o&&(Kr(o,a,"xOrigin",c,y),Kr(o,a,"yOrigin",h,T),Kr(o,a,"xOffset",f,a.xOffset),Kr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},za=function(t,e){var n=t._gsap||new Kf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=gi(t,jn)||"0",h,f,u,d,p,_,m,g,v,w,y,T,E,x,b,P,C,O,U,H,I,N,B,D,X,k,R,tt,Mt,Ft,$,ht;return h=f=u=_=m=g=v=w=y=0,d=p=1,n.svg=!!(t.getCTM&&Yg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ke]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ke]!=="none"?l[ke]:"")),i.scale=i.rotate=i.translate="none"),x=dd(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",D=""):D=!e&&t.getAttribute("data-svg-origin"),cd(t,D||c,!!D||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==Ba&&(O=x[0],U=x[1],H=x[2],I=x[3],h=N=x[4],f=B=x[5],x.length===6?(d=Math.sqrt(O*O+U*U),p=Math.sqrt(I*I+H*H),_=O||U?Eo(U,O)*Cs:0,v=H||I?Eo(H,I)*Cs+_:0,v&&(p*=Math.abs(Math.cos(v*Co))),n.svg&&(h-=T-(T*O+E*H),f-=E-(T*U+E*I))):(ht=x[6],Ft=x[7],R=x[8],tt=x[9],Mt=x[10],$=x[11],h=x[12],f=x[13],u=x[14],b=Eo(ht,Mt),m=b*Cs,b&&(P=Math.cos(-b),C=Math.sin(-b),D=N*P+R*C,X=B*P+tt*C,k=ht*P+Mt*C,R=N*-C+R*P,tt=B*-C+tt*P,Mt=ht*-C+Mt*P,$=Ft*-C+$*P,N=D,B=X,ht=k),b=Eo(-H,Mt),g=b*Cs,b&&(P=Math.cos(-b),C=Math.sin(-b),D=O*P-R*C,X=U*P-tt*C,k=H*P-Mt*C,$=I*C+$*P,O=D,U=X,H=k),b=Eo(U,O),_=b*Cs,b&&(P=Math.cos(b),C=Math.sin(b),D=O*P+U*C,X=N*P+B*C,U=U*P-O*C,B=B*P-N*C,O=D,N=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Xe(Math.sqrt(O*O+U*U+H*H)),p=Xe(Math.sqrt(B*B+ht*ht)),b=Eo(N,B),v=Math.abs(b)>2e-4?b*Cs:0,y=$?1/($<0?-$:$):0),n.svg&&(D=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Jg(gi(t,ke)),D&&t.setAttribute("transform",D))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(d),n.scaleY=Xe(p),n.rotation=Xe(_)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=bh(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?N1:Xg?$g:D1,n.uncache=0,n},bh=function(t){return(t=t.split(" "))[0]+" "+t[1]},sd=function(t,e,n){var i=xn(e);return Xe(parseFloat(e)+parseFloat(jr(t,"x",n+"px",i)))+i},D1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$g(t,e)},Es="0deg",Fa="0px",As=") ",$g=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(w&&(f!==Es||h!==Es)){var E=parseFloat(h)*Co,x=Math.sin(E),b=Math.cos(E),P;E=parseFloat(f)*Co,P=Math.cos(E),o=sd(v,o,x*P*-w),a=sd(v,a,-Math.sin(E)*-w),l=sd(v,l,b*P*-w+w)}m!==Fa&&(y+="perspective("+m+As),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==Fa||a!==Fa||l!==Fa)&&(y+=l!==Fa||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+As),c!==Es&&(y+="rotate("+c+As),h!==Es&&(y+="rotateY("+h+As),f!==Es&&(y+="rotateX("+f+As),(u!==Es||d!==Es)&&(y+="skew("+u+", "+d+As),(p!==1||_!==1)&&(y+="scale("+p+", "+_+As),v.style[ke]=y||"translate(0, 0)"},N1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),y=parseFloat(a),T,E,x,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Co,c*=Co,T=Math.cos(l)*f,E=Math.sin(l)*f,x=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=Co,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=Xe(T),E=Xe(E),x=Xe(x),b=Xe(b)):(T=f,b=u,E=x=0),(w&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=jr(d,"x",o,"px"),y=jr(d,"y",a,"px")),(p||_||m||g)&&(w=Xe(w+p-(p*T+_*x)+m),y=Xe(y+_-(p*E+_*b)+g)),(i||s)&&(P=d.getBBox(),w=Xe(w+i/100*P.width),y=Xe(y+s/100*P.height)),P="matrix("+T+","+E+","+x+","+b+","+w+","+y+")",d.setAttribute("transform",P),v&&(d.style[ke]=P)},O1=function(t,e,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cs:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Dg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Dg)%o-~~(c/o)*o)),t._pt=u=new Bn(t._pt,e,n,i,c,_1),u.e=h,u.u="deg",t._props.push(n),u},kg=function(t,e){for(var n in e)t[n]=e[n];return t},U1=function(t,e,n){var i=kg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ke]=e,a=za(n,1),Qr(n,ke),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ke],o[ke]=e,a=za(n,1),o[ke]=c);for(l in Mr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=xn(c),p=xn(h),f=d!==p?jr(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Bn(t._pt,a,l,f,u-f,od),t._pt.u=p||0,t._props.push(l));kg(a,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Sh[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(p){return yr(a,p,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var pd={name:"css",register:ld,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,p,_,m,g,v,w,y,T,E,x,b,P;hd||ld(),this.styles=this.styles||Wg(t),b=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Jn[_]&&jf(_,e,n,i,t,s)))){if(d=typeof h,p=Sh[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=wo(h)),p)p(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(m=xn(c),g=xn(h),g?m!==g&&(c=jr(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],ln(c)&&~c.indexOf("random(")&&(c=wo(c)),xn(c+"")||c==="auto"||(c+=Qn.units[_]||xn(yr(t,_))||""),(c+"").charAt(1)==="="&&(c=yr(t,_))):c=yr(t,_),u=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),_ in Qi&&(_==="autoAlpha"&&(u===1&&yr(t,"visibility")==="hidden"&&f&&(u=0),b.push("visibility",0,a.visibility),Kr(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Mr,w){if(this.styles.save(_),P=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=gi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=gi(t,"perspective"),C?t.style.perspective=C:Qr(t,"perspective")}f=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||za(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Bn(this._pt,a,ke,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(v?Ts(T.scaleY,v+f):f)-T.scaleY||0,od),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(jn,0,a[jn]),h=I1(h),T.svg?cd(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Kr(this,T,"zOrigin",T.zOrigin,g),Kr(this,a,_,bh(c),bh(h)));continue}else if(_==="svgOrigin"){cd(t,h,1,E,0,this);continue}else if(_ in Zg){O1(this,T,_,u,v?Ts(u,v+h):h);continue}else if(_==="smoothOrigin"){Kr(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){U1(this,h,t);continue}}else _ in a||(_=Ro(_)||_);if(w||(f||f===0)&&(u||u===0)&&!g1.test(h)&&_ in a)m=(c+"").substr((u+"").length),f||(f=0),g=xn(h)||(_ in Qn.units?Qn.units[_]:m),m!==g&&(u=jr(t,_,c,g)),this._pt=new Bn(this._pt,w?T:a,_,u,(v?Ts(u,v+f):f)-u,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?y1:od),this._pt.u=g||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=v1):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=x1);else if(_ in a)P1.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,s);else if(_!=="parseTransform"){_h(_,h);continue}w||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}x&&rd(this)},render:function(t,e){if(e.tween._time||!ud())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:yr,aliases:Qi,getSetter:function(t,e,n){var i=Qi[e];return i&&i.indexOf(",")<0&&(e=i),e in Mr&&e!==jn&&(t._gsap.x||yr(t,"x"))?n&&Lg===n?e==="scale"?T1:b1:(Lg=n||{})&&(e==="scale"?w1:E1):t.style&&!gh(t.style[e])?M1:~e.indexOf("-")?S1:Mh(t,e)},core:{_removeProperty:Qr,_getMatrix:dd}};Cn.utils.checkPrefix=Ro;Cn.core.getStyleSaver=Wg;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){Mr[s]=1});Fn(t,function(s){Qn.units[s]="deg",Zg[s]=1}),Qi[i[13]]=r+","+t,Fn(n,function(s){var o=s.split(":");Qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Cn.registerPlugin(pd);var Oe=Cn.registerPlugin(pd)||Cn,pC=Oe.core.Tween;function Kg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function F1(r,t,e){return t&&Kg(r.prototype,t),e&&Kg(r,e),r}var vn,Eh,B1,ti,ts,es,Io,jg,Ps,Lo,t0,Sr,Bi,e0,n0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},i0=1,Po=[],Jt=[],zi=[],Va=Date.now,md=function(t,e){return e},z1=function(){var t=Lo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,zi),Jt=n,zi=i,md=function(o,a){return e[o](a)}},Tr=function(t,e){return~zi.indexOf(t)&&zi[zi.indexOf(t)+1][e]},Ga=function(t){return!!~t0.indexOf(t)},kn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Th="scrollLeft",wh="scrollTop",gd=function(){return Sr&&Sr.isPressed||Jt.cache++},Ah=function(t,e){var n=function i(s){if(s||s===0){i0&&ti.history.scrollRestoration!=="manual"&&(ti.history.scrollRestoration="manual");var o=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),t(s),i.cacheID=Jt.cache,o&&md("ss",s)}else(e||Jt.cache!==i.cacheID||md("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Th,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ah(function(r){return arguments.length?ti.scrollTo(r,tn.sc()):ti.pageXOffset||ts[Th]||es[Th]||Io[Th]||0})},tn={s:wh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Ah(function(r){return arguments.length?ti.scrollTo(Rn.sc(),r):ti.pageYOffset||ts[wh]||es[wh]||Io[wh]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},k1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},br=function(t,e){var n=e.s,i=e.sc;Ga(t)&&(t=ts.scrollingElement||es);var s=Jt.indexOf(t),o=i===tn.sc?1:2;!~s&&(s=Jt.push(t)-1),Jt[s+o]||kn(t,"scroll",gd);var a=Jt[s+o],l=a||(Jt[s+o]=Ah(Tr(t,n),!0)||(Ga(t)?i:Ah(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Ch=function(t,e,n){var i=t,s=t,o=Va(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=Va();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,m=s,g=Va();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},ka=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Qg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},r0=function(){Lo=vn.core.globals().ScrollTrigger,Lo&&Lo.core&&z1()},s0=function(t){return vn=t||n0(),!Eh&&vn&&typeof document<"u"&&document.body&&(ti=window,ts=document,es=ts.documentElement,Io=ts.body,t0=[ti,ts,es,Io],B1=vn.utils.clamp,e0=vn.core.context||function(){},Ps="onpointerenter"in Io?"pointer":"mouse",jg=qe.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=qe.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i0=0},500),Eh=1),Lo||r0(),Eh};Rn.op=tn;Jt.cache=0;var qe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Eh||s0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Lo||r0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,b=n.onDown,P=n.onChangeX,C=n.onChangeY,O=n.onChange,U=n.onToggleX,H=n.onToggleY,I=n.onHover,N=n.onHoverEnd,B=n.onMove,D=n.ignoreCheck,X=n.isNormalizer,k=n.onGestureStart,R=n.onGestureEnd,tt=n.onWheel,Mt=n.onEnable,Ft=n.onDisable,$=n.onClick,ht=n.scrollSpeed,yt=n.capture,bt=n.allowClicks,mt=n.lockAxis,Dt=n.onLockAxis;this.target=a=Vn(a)||es,this.vars=n,d&&(d=vn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(Io).lineHeight)||22);var ve,Et,Ht,It,Ut,ue,le,J=this,Qt=0,Je=0,be=n.passive||!h&&n.passive!==!1,re=br(a,Rn),Ve=br(a,tn),Ye=re(),z=Ve(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bi[0]==="pointerdown",ce=Ga(a),Vt=a.ownerDocument||ts,ut=[0,0,0],fe=[0,0,0],Lt=0,Bt=function(){return Lt=Va()},A=function(pt,rt){return(J.event=pt)&&d&&k1(pt.target,d)||rt&&pe&&pt.pointerType!=="touch"||D&&D(pt,rt)},M=function(){J._vx.reset(),J._vy.reset(),Et.pause(),f&&f(J)},G=function(){var pt=J.deltaX=Qg(ut),rt=J.deltaY=Qg(fe),et=Math.abs(pt)>=i,_t=Math.abs(rt)>=i;O&&(et||_t)&&O(J,pt,rt,ut,fe),et&&(T&&J.deltaX>0&&T(J),E&&J.deltaX<0&&E(J),P&&P(J),U&&J.deltaX<0!=Qt<0&&U(J),Qt=J.deltaX,ut[0]=ut[1]=ut[2]=0),_t&&(b&&J.deltaY>0&&b(J),x&&J.deltaY<0&&x(J),C&&C(J),H&&J.deltaY<0!=Je<0&&H(J),Je=J.deltaY,fe[0]=fe[1]=fe[2]=0),(It||Ht)&&(B&&B(J),Ht&&(m&&Ht===1&&m(J),v&&v(J),Ht=0),It=!1),ue&&!(ue=!1)&&Dt&&Dt(J),Ut&&(tt(J),Ut=!1),ve=0},st=function(pt,rt,et){ut[et]+=pt,fe[et]+=rt,J._vx.update(pt),J._vy.update(rt),c?ve||(ve=requestAnimationFrame(G)):G()},it=function(pt,rt){mt&&!le&&(J.axis=le=Math.abs(pt)>Math.abs(rt)?"x":"y",ue=!0),le!=="y"&&(ut[2]+=pt,J._vx.update(pt,!0)),le!=="x"&&(fe[2]+=rt,J._vy.update(rt,!0)),c?ve||(ve=requestAnimationFrame(G)):G()},ct=function(pt){if(!A(pt,1)){pt=ka(pt,h);var rt=pt.clientX,et=pt.clientY,_t=rt-J.x,nt=et-J.y,Tt=J.isDragging;J.x=rt,J.y=et,(Tt||(_t||nt)&&(Math.abs(J.startX-rt)>=s||Math.abs(J.startY-et)>=s))&&(Ht||(Ht=Tt?2:1),Tt||(J.isDragging=!0),it(_t,nt))}},gt=J.onPress=function(ot){A(ot,1)||ot&&ot.button||(J.axis=le=null,Et.pause(),J.isPressed=!0,ot=ka(ot),Qt=Je=0,J.startX=J.x=ot.clientX,J.startY=J.y=ot.clientY,J._vx.reset(),J._vy.reset(),kn(X?a:Vt,Bi[1],ct,be,!0),J.deltaX=J.deltaY=0,w&&w(J))},W=J.onRelease=function(ot){if(!A(ot,1)){zn(X?a:Vt,Bi[1],ct,!0);var pt=!isNaN(J.y-J.startY),rt=J.isDragging,et=rt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),_t=ka(ot);!et&&pt&&(J._vx.reset(),J._vy.reset(),h&&bt&&vn.delayedCall(.08,function(){if(Va()-Lt>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(Vt.createEvent){var nt=Vt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,ti,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,f&&rt&&!X&&Et.restart(!0),Ht&&G(),g&&rt&&g(J),y&&y(J,et)}},j=function(pt){return pt.touches&&pt.touches.length>1&&(J.isGesturing=!0)&&k(pt,J.isDragging)},lt=function(){return(J.isGesturing=!1)||R(J)},L=function(pt){if(!A(pt)){var rt=re(),et=Ve();st((rt-Ye)*ht,(et-z)*ht,1),Ye=rt,z=et,f&&Et.restart(!0)}},Q=function(pt){if(!A(pt)){pt=ka(pt,h),tt&&(Ut=!0);var rt=(pt.deltaMode===1?l:pt.deltaMode===2?ti.innerHeight:1)*p;st(pt.deltaX*rt,pt.deltaY*rt,0),f&&!X&&Et.restart(!0)}},K=function(pt){if(!A(pt)){var rt=pt.clientX,et=pt.clientY,_t=rt-J.x,nt=et-J.y;J.x=rt,J.y=et,It=!0,f&&Et.restart(!0),(_t||nt)&&it(_t,nt)}},ft=function(pt){J.event=pt,I(J)},at=function(pt){J.event=pt,N(J)},dt=function(pt){return A(pt)||ka(pt,h)&&$(J)};Et=J._dc=vn.delayedCall(u||.25,M).pause(),J.deltaX=J.deltaY=0,J._vx=Ch(0,50,!0),J._vy=Ch(0,50,!0),J.scrollX=re,J.scrollY=Ve,J.isDragging=J.isGesturing=J.isPressed=!1,e0(this),J.enable=function(ot){return J.isEnabled||(kn(ce?Vt:a,"scroll",gd),o.indexOf("scroll")>=0&&kn(ce?Vt:a,"scroll",L,be,yt),o.indexOf("wheel")>=0&&kn(a,"wheel",Q,be,yt),(o.indexOf("touch")>=0&&jg||o.indexOf("pointer")>=0)&&(kn(a,Bi[0],gt,be,yt),kn(Vt,Bi[2],W),kn(Vt,Bi[3],W),bt&&kn(a,"click",Bt,!0,!0),$&&kn(a,"click",dt),k&&kn(Vt,"gesturestart",j),R&&kn(Vt,"gestureend",lt),I&&kn(a,Ps+"enter",ft),N&&kn(a,Ps+"leave",at),B&&kn(a,Ps+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=It=Ht=!1,J._vx.reset(),J._vy.reset(),Ye=re(),z=Ve(),ot&&ot.type&&gt(ot),Mt&&Mt(J)),J},J.disable=function(){J.isEnabled&&(Po.filter(function(ot){return ot!==J&&Ga(ot.target)}).length||zn(ce?Vt:a,"scroll",gd),J.isPressed&&(J._vx.reset(),J._vy.reset(),zn(X?a:Vt,Bi[1],ct,!0)),zn(ce?Vt:a,"scroll",L,yt),zn(a,"wheel",Q,yt),zn(a,Bi[0],gt,yt),zn(Vt,Bi[2],W),zn(Vt,Bi[3],W),zn(a,"click",Bt,!0),zn(a,"click",dt),zn(Vt,"gesturestart",j),zn(Vt,"gestureend",lt),zn(a,Ps+"enter",ft),zn(a,Ps+"leave",at),zn(a,Ps+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Ft&&Ft(J))},J.kill=J.revert=function(){J.disable();var ot=Po.indexOf(J);ot>=0&&Po.splice(ot,1),Sr===J&&(Sr=0)},Po.push(J),X&&Ga(a)&&(Sr=J),J.enable(_)},F1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qe.version="3.15.1";qe.create=function(r){return new qe(r)};qe.register=s0;qe.getAll=function(){return Po.slice()};qe.getById=function(r){return Po.filter(function(t){return t.vars.id===r})[0]};n0()&&vn.registerPlugin(qe);var At,Uo,Kt,ye,vi,xe,Pd,Wh,el,Ja,Wa,Rh,Pn,Yh,bd,Hn,o0,a0,Fo,b0,_d,T0,Gn,Td,w0,E0,ns,wd,Id,Bo,Ld,is,Ed,xd,Ph=1,In=Date.now,vd=In(),Ri=0,Xa=0,l0=function(t,e,n){var i=xi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},c0=function(t,e){return e&&(!xi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},V1=function r(){return Xa&&requestAnimationFrame(r)},h0=function(){return Yh=1},u0=function(){return Yh=0},ji=function(t){return t},qa=function(t){return Math.round(t*1e5)/1e5||0},A0=function(){return typeof window<"u"},C0=function(){return At||A0()&&(At=window.gsap)&&At.registerPlugin&&At},Us=function(t){return!!~Pd.indexOf(t)},R0=function(t){return(t==="Height"?Ld:Kt["inner"+t])||vi["client"+t]||xe["client"+t]},P0=function(t){return Tr(t,"getBoundingClientRect")||(Us(t)?function(){return Hh.width=Kt.innerWidth,Hh.height=Ld,Hh}:function(){return wr(t)})},G1=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?R0(s):t["client"+s])||0}},H1=function(t,e){return!e||~zi.indexOf(t)?P0(t):function(){return Hh}},tr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Tr(t,n))?o()-P0(t)()[s]:Us(t)?(vi[n]||xe[n])-R0(i):t[n]-t["offset"+i])},Ih=function(t,e){for(var n=0;n<Fo.length;n+=3)(!e||~e.indexOf(Fo[n+1]))&&t(Fo[n],Fo[n+1],Fo[n+2])},xi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},Ya=function(t){return typeof t=="number"},Is=function(t){return typeof t=="object"},Ha=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Do=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},No=Math.abs,I0="left",L0="top",Dd="right",Nd="bottom",Ds="width",Ns="height",$a="Right",Ka="Left",Qa="Top",ja="Bottom",en="padding",Ai="margin",ko="Width",Od="Height",cn="px",Ci=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},W1=function(t){var e=Ci(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},f0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wr=function(t,e){var n=e&&Ci(t)[bd]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},D0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},X1=function(t){return function(e){return At.utils.snap(D0(t),e)}},Ud=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},q1=function(t){return function(e,n){return Ud(D0(t))(e,n.direction)}},Lh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Dh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},d0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nh={toggleActions:"play",anticipatePin:0},qh={top:0,left:0,center:.5,bottom:1,right:1},zh=function(t,e){if(xi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in qh?qh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Oh=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,p=ye.createElement("div"),_=Us(n)||Tr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+f+";color:"+w+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===tn?Dd:Nd)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],kh(p,0,i,v),p},kh=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ko]=1,s["border"+a+ko]=0,s[n.p]=e+"px",At.set(t,s)},$t=[],Ad={},nl,p0=function(){return In()-Ri>34&&(nl||(nl=requestAnimationFrame(Er)))},Oo=function(){(!Gn||!Gn.isPressed||Gn.startX>xe.clientWidth)&&(Jt.cache++,Gn?nl||(nl=requestAnimationFrame(Er)):Er(),Ri||Bs("scrollStart"),Ri=In())},yd=function(){E0=Kt.innerWidth,w0=Kt.innerHeight},Za=function(t){Jt.cache++,(t===!0||!Pn&&!T0&&!ye.fullscreenElement&&!ye.webkitFullscreenElement&&(!Td||E0!==Kt.innerWidth||Math.abs(Kt.innerHeight-w0)>Kt.innerHeight*.25))&&Wh.restart(!0)},Fs={},Y1=[],N0=function r(){return pn(qt,"scrollEnd",r)||Ls(!0)},Bs=function(t){return Fs[t]&&Fs[t].map(function(e){return e()})||Y1},_i=[],O0=function(t){for(var e=0;e<_i.length;e+=5)(!t||_i[e+4]&&_i[e+4].query===t)&&(_i[e].style.cssText=_i[e+1],_i[e].getBBox&&_i[e].setAttribute("transform",_i[e+2]||""),_i[e+3].uncache=1)},U0=function(){Jt.cache++,Jt.forEach(function(t){return Ln(t)&&(t.rec=t())})},Fd=function(t,e){var n;for(Hn=0;Hn<$t.length;Hn++)n=$t[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));is=!0,e&&O0(e),e||Bs("revert")},F0=function(t,e){Jt.cache++,(e||!Wn)&&Jt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),xi(t)&&(Id=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Wn,Os=0,m0,Z1=function(){if(m0!==Os){var t=m0=Os;requestAnimationFrame(function(){return t===Os&&Ls(!0)})}},B0=function(){xe.appendChild(Bo),Ld=!Gn&&Bo.offsetHeight||Kt.innerHeight,xe.removeChild(Bo)},g0=function(t){return el(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ls=function(t,e){if(vi=ye.documentElement,xe=ye.body,Pd=[Kt,ye,vi,xe],Ri&&!t&&!is){mn(qt,"scrollEnd",N0);return}B0(),Wn=qt.isRefreshing=!0,is||U0();var n=Bs("refreshInit");b0&&qt.sort(),e||Fd(),Jt.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),is=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ed=1,g0(!0),$t.forEach(function(i){var s=tr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),g0(!1),Ed=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),F0(Id,1),Wh.pause(),Os++,Wn=2,Er(2),$t.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=qt.isRefreshing=!1,Bs("refresh")},Cd=0,Vh=1,tl,Er=function(t){if(t===2||!Wn&&!is){qt.isUpdating=!0,tl&&tl.update(0);var e=$t.length,n=In(),i=n-vd>=50,s=e&&$t[0].scroll();if(Vh=Cd>s?-1:1,Wn||(Cd=s),i&&(Ri&&!Yh&&n-Ri>200&&(Ri=0,Bs("scrollEnd")),Wa=vd,vd=n),Vh<0){for(Hn=e;Hn-- >0;)$t[Hn]&&$t[Hn].update(0,i);Vh=1}else for(Hn=0;Hn<e;Hn++)$t[Hn]&&$t[Hn].update(0,i);qt.isUpdating=!1}nl=0},Rd=[I0,L0,Nd,Dd,Ai+ja,Ai+$a,Ai+Qa,Ai+Ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gh=Rd.concat([Ds,Ns,"boxSizing","max"+ko,"max"+Od,"position",Ai,en,en+Qa,en+$a,en+ja,en+Ka]),J1=function(t,e,n){zo(n);var i=t._gsap;if(i.spacerIsNative)zo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Md=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Rd.length,o=e.style,a=t.style,l;s--;)l=Rd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Nd]=a[Dd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ds]=Xh(t,Rn)+cn,o[Ns]=Xh(t,tn)+cn,o[en]=a[Ai]=a[L0]=a[I0]="0",zo(i),a[Ds]=a["max"+ko]=n[Ds],a[Ns]=a["max"+Od]=n[Ns],a[en]=n[en],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},$1=/([A-Z])/g,zo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace($1,"-$1").toLowerCase())}},Uh=function(t){for(var e=Gh.length,n=t.style,i=[],s=0;s<e;s++)i.push(Gh[s],n[Gh[s]]);return i.t=t,i},K1=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Hh={left:0,top:0},_0=function(t,e,n,i,s,o,a,l,c,h,f,u,d,p){Ln(t)&&(t=t(l)),xi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?zh("0"+t.substr(3),n):0));var _=d?d.time():0,m,g,v;if(d&&d.seek(0),isNaN(t)||(t=+t),Ya(t))d&&(t=At.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&kh(a,n,i,!0);else{Ln(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=Vn(e,l)||xe,y=wr(v)||{},(!y||!y.left&&!y.top)&&Ci(v).display==="none"&&(x=v.style.display,v.style.display="block",y=wr(v),x?v.style.display=x:v.style.removeProperty("display")),T=zh(w[0],y[i.d]),E=zh(w[1]||"0",n),t=y[i.p]-c[i.p]-h+T+s-E,a&&kh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var b=t+n,P=o._isStart;m="scroll"+i.d2,kh(o,b,i,P&&b>20||!P&&(f?Math.max(xe[m],vi[m]):o.parentNode[m])<=b+1),f&&(c=wr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return d&&v&&(m=wr(v),d.seek(u),g=wr(v),d._caScrollDist=m[i.p]-g[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},Q1=/(webkit|moz|length|cssText|inset)/i,x0=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===xe){t._stOrig=s.cssText,a=Ci(t);for(o in a)!+o&&!Q1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},z0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Fh=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},v0=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,p={};c=c||n();var _=z0(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){Jt.cache++,o.tween&&Er()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=At.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(t,"wheel",n.wheelHandler),qt.isTouch&&mn(t,"touchmove",n.wheelHandler),s},qt=(function(){function r(e,n){Uo||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wd(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xa){this.update=this.refresh=this.kill=ji;return}n=f0(xi(n)||Ya(n)||n.nodeType?{trigger:n}:n,Nh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,w=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,b=s.fastScrollEnd,P=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:tn,O=!f&&f!==0,U=Vn(n.scroller||Kt),H=At.core.getCache(U),I=Us(U),N=("pinType"in n?n.pinType:Tr(U,"pinType")||I&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],D=O&&n.toggleActions.split(" "),X="markers"in n?n.markers:Nh.markers,k=I?0:parseFloat(Ci(U)["border"+C.p2+ko])||0,R=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Mt=G1(U,I,C),Ft=H1(U,I),$=0,ht=0,yt=0,bt=br(U,C),mt,Dt,ve,Et,Ht,It,Ut,ue,le,J,Qt,Je,be,re,Ve,Ye,z,pe,ce,Vt,ut,fe,Lt,Bt,A,M,G,st,it,ct,gt,W,j,lt,L,Q,K,ft,at;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=U,R.scroll=x?x.time.bind(x):bt,Et=bt(),is&&bt.rec==null&&(bt.rec=Et),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(b0=1,n.refreshPriority===-9999&&(tl=R)),H.tweenScroll=H.tweenScroll||{top:v0(U,tn),left:v0(U,Rn)},R.tweenTo=mt=H.tweenScroll[C.p],R.scrubDuration=function(et){j=Ya(et)&&et,j?W?W.duration(et):W=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),ct=0,l||(l=i.vars.id)),y&&((!Is(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&At.set(I?[xe,vi]:U,{scrollBehavior:"auto"}),Jt.forEach(function(et){return Ln(et)&&et.target===(I?ye.scrollingElement||vi:U)&&(et.smooth=!1)}),ve=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?X1(i):y.snapTo==="labelsDirectional"?q1(i):y.directional!==!1?function(et,_t){return Ud(y.snapTo)(et,In()-ht<500?0:_t.direction)}:At.utils.snap(y.snapTo),lt=y.duration||{min:.1,max:2},lt=Is(lt)?Ja(lt.min,lt.max):Ja(lt,lt),L=At.delayedCall(y.delay||j/2||.1,function(){var et=bt(),_t=In()-ht<500,nt=mt.tween;if((_t||Math.abs(R.getVelocity())<10)&&!nt&&!Yh&&$!==et){var Tt=(et-It)/re,jt=i&&!O?i.totalProgress():Tt,Wt=_t?0:(jt-gt)/(In()-Wa)*1e3||0,Le=At.utils.clamp(-Tt,1-Tt,No(Wt/2)*Wt/.185),$e=Tt+(y.inertia===!1?0:Le),De,Te,ge=y,nn=ge.onStart,we=ge.onInterrupt,yn=ge.onComplete;if(De=ve($e,R),Ya(De)||(De=$e),Te=Math.max(0,Math.round(It+De*re)),et<=Ut&&et>=It&&Te!==et){if(nt&&!nt._initted&&nt.data<=No(Te-et))return;y.inertia===!1&&(Le=De-Tt),mt(Te,{duration:lt(No(Math.max(No($e-jt),No(De-jt))*.185/Wt/.05||0)),ease:y.ease||"power3",data:No(Te-et),onInterrupt:function(){return L.restart(!0)&&we&&Do(R,we)},onComplete:function(){R.update(),$=bt(),i&&!O&&(W?W.resetTo("totalProgress",De,i._tTime/i._tDur):i.progress(De)),ct=gt=i&&!O?i.totalProgress():R.progress,v&&v(R),yn&&Do(R,yn)}},et,Le*re,Te-et-Le*re),nn&&Do(R,nn,mt.tween)}}else R.isActive&&$!==et&&L.restart(!0)}).pause()),l&&(Ad[l]=R),u=R.trigger=Vn(u||d!==!0&&d),at=u&&u._gsap&&u._gsap.stRevert,at&&(at=at(R)),d=d===!0?u:Vn(d),xi(a)&&(a={targets:u,className:a}),d&&(p===!1||p===Ai||(p=!p&&d.parentNode&&d.parentNode.style&&Ci(d.parentNode).display==="flex"?!1:en),R.pin=d,Dt=At.core.getCache(d),Dt.spacer?Ve=Dt.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Dt.spacerIsNative=!!E,E&&(Dt.spacerState=Uh(E))),Dt.spacer=pe=E||ye.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Dt.pinState=Ve=Uh(d)),n.force3D!==!1&&At.set(d,{force3D:!0}),R.spacer=pe=Dt.spacer,it=Ci(d),Bt=it[p+C.os2],Vt=At.getProperty(d),ut=At.quickSetter(d,C.a,cn),Md(d,pe,it),z=Uh(d)),X){Je=Is(X)?f0(X,d0):d0,J=Oh("scroller-start",l,U,C,Je,0),Qt=Oh("scroller-end",l,U,C,Je,0,J),ce=J["offset"+C.op.d2];var dt=Vn(Tr(U,"content")||U);ue=this.markerStart=Oh("start",l,dt,C,Je,ce,0,x),le=this.markerEnd=Oh("end",l,dt,C,Je,ce,0,x),x&&(ft=At.quickSetter([ue,le],C.a,cn)),!N&&!(zi.length&&Tr(U,"fixedMarkers")===!0)&&(W1(I?xe:U),At.set([J,Qt],{force3D:!0}),M=At.quickSetter(J,C.a,cn),st=At.quickSetter(Qt,C.a,cn))}if(x){var ot=x.vars.onUpdate,pt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ot&&ot.apply(x,pt||[])})}if(R.previous=function(){return $t[$t.indexOf(R)-1]},R.next=function(){return $t[$t.indexOf(R)+1]},R.revert=function(et,_t){if(!_t)return R.kill(!0);var nt=et!==!1||!R.enabled,Tt=Pn;nt!==R.isReverted&&(nt&&(Q=Math.max(bt(),R.scroll.rec||0),yt=R.progress,K=i&&i.progress()),ue&&[ue,le,J,Qt].forEach(function(jt){return jt.style.display=nt?"none":"block"}),nt&&(Pn=R,R.update(nt)),d&&(!T||!R.isActive)&&(nt?J1(d,pe,Ve):Md(d,pe,Ci(d),A)),nt||R.update(nt),Pn=Tt,R.isReverted=nt)},R.refresh=function(et,_t,nt,Tt){if(!((Pn||!R.enabled)&&!_t)){if(d&&et&&Ri){mn(r,"scrollEnd",N0);return}!Wn&&tt&&tt(R),Pn=R,mt.tween&&!nt&&(mt.tween.kill(),mt.tween=0),W&&W.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var jt=Mt(),Wt=Ft(),Le=x?x.duration():tr(U,C),$e=re<=.01||!re,De=0,Te=Tt||0,ge=Is(nt)?nt.end:n.end,nn=n.endTrigger||u,we=Is(nt)?nt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),yn=R.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,R),ii=u&&Math.max(0,$t.indexOf(R))||0,Ge=ii,Ke,rn,ri,Gs,sn,He,Mi,Go,il,Rr,S,F,Z;for(X&&Is(nt)&&(F=At.getProperty(J,C.p),Z=At.getProperty(Qt,C.p));Ge-- >0;)He=$t[Ge],He.end||He.refresh(0,1)||(Pn=R),Mi=He.pin,Mi&&(Mi===u||Mi===d||Mi===yn)&&!He.isReverted&&(Rr||(Rr=[]),Rr.unshift(He),He.revert(!0,!0)),He!==$t[Ge]&&(ii--,Ge--);for(Ln(we)&&(we=we(R)),we=l0(we,"start",R),It=_0(we,u,jt,C,bt(),ue,J,R,Wt,k,N,Le,x,R._startClamp&&"_startClamp")||(d?-.001:0),Ln(ge)&&(ge=ge(R)),xi(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(xi(we)?we.split(" ")[0]:"")+ge:(De=zh(ge.substr(2),jt),ge=xi(we)?we:(x?At.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,It):It)+De,nn=u)),ge=l0(ge,"end",R),Ut=Math.max(It,_0(ge||(nn?"100% 0":Le),nn,jt,C,bt()+De,le,Qt,R,Wt,k,N,Le,x,R._endClamp&&"_endClamp"))||-.001,De=0,Ge=ii;Ge--;)He=$t[Ge]||{},Mi=He.pin,Mi&&He.start-He._pinPush<=It&&!x&&He.end>0&&(Ke=He.end-(R._startClamp?Math.max(0,He.start):He.start),(Mi===u&&He.start-He._pinPush<It||Mi===yn)&&isNaN(we)&&(De+=Ke*(1-He.progress)),Mi===d&&(Te+=Ke));if(It+=De,Ut+=De,R._startClamp&&(R._startClamp+=De),R._endClamp&&!Wn&&(R._endClamp=Ut||-.001,Ut=Math.min(Ut,tr(U,C))),re=Ut-It||(It-=.01)&&.001,$e&&(yt=At.utils.clamp(0,1,At.utils.normalize(It,Ut,Q))),R._pinPush=Te,ue&&De&&(Ke={},Ke[C.a]="+="+De,yn&&(Ke[C.p]="-="+bt()),At.set([ue,le],Ke)),d&&!(Ed&&R.end>=tr(U,C)))Ke=Ci(d),Gs=C===tn,ri=bt(),fe=parseFloat(Vt(C.a))+Te,!Le&&Ut>1&&(S=(I?ye.scrollingElement||vi:U).style,S={style:S,value:S["overflow"+C.a.toUpperCase()]},I&&Ci(xe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(S.style["overflow"+C.a.toUpperCase()]="scroll")),Md(d,pe,Ke),z=Uh(d),rn=wr(d,!0),Go=N&&br(U,Gs?Rn:tn)(),p?(A=[p+C.os2,re+Te+cn],A.t=pe,Ge=p===en?Xh(d,C)+re+Te:0,Ge&&(A.push(C.d,Ge+cn),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=Ge+cn)),zo(A),yn&&$t.forEach(function(V){V.pin===yn&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),N&&bt(Q)):(Ge=Xh(d,C),Ge&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=Ge+cn)),N&&(sn={top:rn.top+(Gs?ri-It:Go)+cn,left:rn.left+(Gs?Go:ri-It)+cn,boxSizing:"border-box",position:"fixed"},sn[Ds]=sn["max"+ko]=Math.ceil(rn.width)+cn,sn[Ns]=sn["max"+Od]=Math.ceil(rn.height)+cn,sn[Ai]=sn[Ai+Qa]=sn[Ai+$a]=sn[Ai+ja]=sn[Ai+Ka]="0",sn[en]=Ke[en],sn[en+Qa]=Ke[en+Qa],sn[en+$a]=Ke[en+$a],sn[en+ja]=Ke[en+ja],sn[en+Ka]=Ke[en+Ka],Ye=K1(Ve,sn,T),Wn&&bt(0)),i?(il=i._initted,_d(1),i.render(i.duration(),!0,!0),Lt=Vt(C.a)-fe+re+Te,G=Math.abs(re-Lt)>1,N&&G&&Ye.splice(Ye.length-2,2),i.render(0,!0,!0),il||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),_d(0)):Lt=re,S&&(S.value?S.style["overflow"+C.a.toUpperCase()]=S.value:S.style.removeProperty("overflow-"+C.a));else if(u&&bt()&&!x)for(rn=u.parentNode;rn&&rn!==xe;)rn._pinOffset&&(It-=rn._pinOffset,Ut-=rn._pinOffset),rn=rn.parentNode;Rr&&Rr.forEach(function(V){return V.revert(!1,!0)}),R.start=It,R.end=Ut,Et=Ht=Wn?Q:bt(),!x&&!Wn&&!is&&(Et<Q&&bt(Q),R.scroll.rec=0),R.revert(!1,!0),ht=In(),L&&($=-1,L.restart(!0)),Pn=0,i&&O&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),($e||yt!==R.progress||x||_||i&&!i._initted)&&(i&&!O&&(i._initted||yt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&It<-.001&&!yt?At.utils.normalize(It,Ut,0):yt,!0),R.progress=$e||(Et-It)/re===yt?0:yt),d&&p&&(pe._pinOffset=Math.round(R.progress*Lt)),W&&W.invalidate(),isNaN(F)||(F-=At.getProperty(J,C.p),Z-=At.getProperty(Qt,C.p),Fh(J,C,F),Fh(ue,C,F-(Tt||0)),Fh(Qt,C,Z),Fh(le,C,Z-(Tt||0))),$e&&!Wn&&R.update(),h&&!Wn&&!be&&(be=!0,h(R),be=!1)}},R.getVelocity=function(){return(bt()-Ht)/(In()-Wa)*1e3||0},R.endAnimation=function(){Ha(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?O||Ha(i,R.direction<0,1):Ha(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(It||R.refresh()||It)+i.labels[et]/i.duration()*re||0},R.getTrailing=function(et){var _t=$t.indexOf(R),nt=R.direction>0?$t.slice(0,_t).reverse():$t.slice(_t+1);return(xi(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return R.direction>0?Tt.end<=It:Tt.start>=Ut})},R.update=function(et,_t,nt){if(!(x&&!nt&&!et)){var Tt=Wn===!0?Q:R.scroll(),jt=et?0:(Tt-It)/re,Wt=jt<0?0:jt>1?1:jt||0,Le=R.progress,$e,De,Te,ge,nn,we,yn,ii;if(_t&&(Ht=Et,Et=x?bt():Tt,y&&(gt=ct,ct=i&&!O?i.totalProgress():Wt)),m&&d&&!Pn&&!Ph&&Ri&&(!Wt&&It<Tt+(Tt-Ht)/(In()-Wa)*m?Wt=1e-4:Wt===1&&Ut>Tt+(Tt-Ht)/(In()-Wa)*m&&(Wt=.9999)),Wt!==Le&&R.enabled){if($e=R.isActive=!!Wt&&Wt<1,De=!!Le&&Le<1,we=$e!==De,nn=we||!!Wt!=!!Le,R.direction=Wt>Le?1:-1,R.progress=Wt,nn&&!Pn&&(Te=Wt&&!Le?0:Wt===1?1:Le===1?2:3,O&&(ge=!we&&D[Te+1]!=="none"&&D[Te+1]||D[Te],ii=i&&(ge==="complete"||ge==="reset"||ge in i))),P&&(we||ii)&&(ii||f||!i)&&(Ln(P)?P(R):R.getTrailing(P).forEach(function(ri){return ri.endAnimation()})),O||(W&&!Pn&&!Ph?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Wt,i._tTime/i._tDur):(W.vars.totalProgress=Wt,W.invalidate().restart())):i&&i.totalProgress(Wt,!!(Pn&&(ht||et)))),d){if(et&&p&&(pe.style[p+C.os2]=Bt),!N)ut(qa(fe+Lt*Wt));else if(nn){if(yn=!et&&Wt>Le&&Ut+1>Tt&&Tt+1>=tr(U,C),T)if(!et&&($e||yn)){var Ge=wr(d,!0),Ke=Tt-It;x0(d,xe,Ge.top+(C===tn?Ke:0)+cn,Ge.left+(C===tn?0:Ke)+cn)}else x0(d,pe);zo($e||yn?Ye:z),G&&Wt<1&&$e||ut(fe+(Wt===1&&!yn?Lt:0))}}y&&!mt.tween&&!Pn&&!Ph&&L.restart(!0),a&&(we||w&&Wt&&(Wt<1||!xd))&&el(a.targets).forEach(function(ri){return ri.classList[$e||w?"add":"remove"](a.className)}),o&&!O&&!et&&o(R),nn&&!Pn?(O&&(ii&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(R)),(we||!xd)&&(c&&we&&Do(R,c),B[Te]&&Do(R,B[Te]),w&&(Wt===1?R.kill(!1,1):B[Te]=0),we||(Te=Wt===1?1:3,B[Te]&&Do(R,B[Te]))),b&&!$e&&Math.abs(R.getVelocity())>(Ya(b)?b:2500)&&(Ha(R.callbackAnimation),W?W.progress(1):Ha(i,ge==="reverse"?1:!Wt,1))):O&&o&&!Pn&&o(R)}if(st){var rn=x?Tt/x.duration()*(x._caScrollDist||0):Tt;M(rn+(J._isFlipped?1:0)),st(rn)}ft&&ft(-Tt/x.duration()*(x._caScrollDist||0))}},R.enable=function(et,_t){R.enabled||(R.enabled=!0,mn(U,"resize",Za),I||mn(U,"scroll",Oo),tt&&mn(r,"refreshInit",tt),et!==!1&&(R.progress=yt=0,Et=Ht=$=bt()),_t!==!1&&R.refresh())},R.getTween=function(et){return et&&mt?mt.tween:W},R.setPositions=function(et,_t,nt,Tt){if(x){var jt=x.scrollTrigger,Wt=x.duration(),Le=jt.end-jt.start;et=jt.start+Le*et/Wt,_t=jt.start+Le*_t/Wt}R.refresh(!1,!1,{start:c0(et,nt&&!!R._startClamp),end:c0(_t,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(A&&et){var _t=A.indexOf(C.d)+1;A[_t]=parseFloat(A[_t])+et+cn,A[1]=parseFloat(A[1])+et+cn,zo(A)}},R.disable=function(et,_t){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_t||W&&W.pause(),Q=0,Dt&&(Dt.uncache=1),tt&&pn(r,"refreshInit",tt),L&&(L.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!I)){for(var nt=$t.length;nt--;)if($t[nt].scroller===U&&$t[nt]!==R)return;pn(U,"resize",Za),I||pn(U,"scroll",Oo)}},R.kill=function(et,_t){R.disable(et,_t),W&&!_t&&W.kill(),l&&delete Ad[l];var nt=$t.indexOf(R);nt>=0&&$t.splice(nt,1),nt===Hn&&Vh>0&&Hn--,nt=0,$t.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||Wn||is||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),_t||i.kill()),ue&&[ue,le,J,Qt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),tl===R&&(tl=0),d&&(Dt&&(Dt.uncache=1),nt=0,$t.forEach(function(Tt){return Tt.pin===d&&nt++}),nt||(Dt.spacer=0)),n.onKill&&n.onKill(R)},$t.push(R),R.enable(!1,!1),at&&at(R),i&&i.add&&!re){var rt=R.update;R.update=function(){R.update=rt,Jt.cache++,It||Ut||R.refresh()},At.delayedCall(.01,R.update),re=.01,It=Ut=0}else R.refresh();d&&Z1()},r.register=function(n){return Uo||(At=n||C0(),A0()&&window.document&&r.enable(),Uo=Xa),Uo},r.defaults=function(n){if(n)for(var i in n)Nh[i]=n[i];return Nh},r.disable=function(n,i){Xa=0,$t.forEach(function(o){return o[i?"kill":"disable"](n)}),pn(Kt,"wheel",Oo),pn(ye,"scroll",Oo),clearInterval(Rh),pn(ye,"touchcancel",ji),pn(xe,"touchstart",ji),Lh(pn,ye,"pointerdown,touchstart,mousedown",h0),Lh(pn,ye,"pointerup,touchend,mouseup",u0),Wh.kill(),Ih(pn);for(var s=0;s<Jt.length;s+=3)Dh(pn,Jt[s],Jt[s+1]),Dh(pn,Jt[s],Jt[s+2])},r.enable=function(){if(Kt=window,ye=document,vi=ye.documentElement,xe=ye.body,At){if(el=At.utils.toArray,Ja=At.utils.clamp,wd=At.core.context||ji,_d=At.core.suppressOverwrites||ji,Id=Kt.history.scrollRestoration||"auto",Cd=Kt.pageYOffset||0,At.core.globals("ScrollTrigger",r),xe){Xa=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",B0(),V1(),qe.register(At),r.isTouch=qe.isTouch,ns=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Td=qe.isTouch===1,mn(Kt,"wheel",Oo),Pd=[Kt,ye,vi,xe],At.matchMedia?(r.matchMedia=function(h){var f=At.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},At.addEventListener("matchMediaInit",function(){U0(),Fd()}),At.addEventListener("matchMediaRevert",function(){return O0()}),At.addEventListener("matchMedia",function(){Ls(0,1),Bs("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return yd(),yd})):console.warn("Requires GSAP 3.11.0 or later"),yd(),mn(ye,"scroll",Oo);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=wr(xe),tn.m=Math.round(a.top+tn.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Rh=setInterval(p0,250),At.delayedCall(.5,function(){return Ph=0}),mn(ye,"touchcancel",ji),mn(xe,"touchstart",ji),Lh(mn,ye,"pointerdown,touchstart,mousedown",h0),Lh(mn,ye,"pointerup,touchend,mouseup",u0),bd=At.utils.checkPrefix("transform"),Gh.push(bd),Uo=In(),Wh=At.delayedCall(.2,Ls).pause(),Fo=[ye,"visibilitychange",function(){var h=Kt.innerWidth,f=Kt.innerHeight;ye.hidden?(o0=h,a0=f):(o0!==h||a0!==f)&&Za()},ye,"DOMContentLoaded",Ls,Kt,"load",Ls,Kt,"resize",Za],Ih(mn),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)Dh(pn,Jt[l],Jt[l+1]),Dh(pn,Jt[l],Jt[l+2])}else if(ye){var c=function h(){r.enable(),ye.removeEventListener("DOMContentLoaded",h)};ye.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(xd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rh)||(Rh=i)&&setInterval(p0,i),"ignoreMobileResize"in n&&(Td=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ih(pn)||Ih(mn,n.autoRefreshEvents||"none"),T0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),o=Jt.indexOf(s),a=Us(s);~o&&Jt.splice(o,a?6:2),i&&(a?zi.unshift(Kt,i,xe,i,vi,i):zi.unshift(s,i))},r.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(xi(n)?Vn(n):n).getBoundingClientRect(),a=o[s?Ds:Ns]*i||0;return s?o.right-a>0&&o.left+a<Kt.innerWidth:o.bottom-a>0&&o.top+a<Kt.innerHeight},r.positionInViewport=function(n,i,s){xi(n)&&(n=Vn(n));var o=n.getBoundingClientRect(),a=o[s?Ds:Ns],l=i==null?a/2:i in qh?qh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Kt.innerWidth:(o.top+l)/Kt.innerHeight},r.killAll=function(n){if($t.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();qt.version="3.15.1";qt.saveStyles=function(r){return r?el(r).forEach(function(t){if(t&&t.style){var e=_i.indexOf(t);e>=0&&_i.splice(e,5),_i.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),wd())}}):_i};qt.revert=function(r,t){return Fd(!r,t)};qt.create=function(r,t){return new qt(r,t)};qt.refresh=function(r){return r?Za(!0):(Uo||qt.register())&&Ls(!0)};qt.update=function(r){return++Jt.cache&&Er(r===!0?2:0)};qt.clearScrollMemory=F0;qt.maxScroll=function(r,t){return tr(r,t?Rn:tn)};qt.getScrollFunc=function(r,t){return br(Vn(r),t?Rn:tn)};qt.getById=function(r){return Ad[r]};qt.getAll=function(){return $t.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qt.isScrolling=function(){return!!Ri};qt.snapDirectional=Ud;qt.addEventListener=function(r,t){var e=Fs[r]||(Fs[r]=[]);~e.indexOf(t)||e.push(t)};qt.removeEventListener=function(r,t){var e=Fs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=At.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),u.push(p),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(s)&&(s=s(),mn(qt,"refresh",function(){return s=t.batchMax()})),el(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(qt.create(c))}),e};var y0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Sd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===vi&&r(xe,e)},Bh={auto:1,scroll:1},j1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Bh[(l=Ci(s)).overflowY]||Bh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Us(s)&&(Bh[(l=Ci(s)).overflowY]||Bh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},k0=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&j1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(ye,qe.eventTypes[0],S0,!1,!0)},onDisable:function(){return pn(ye,qe.eventTypes[0],S0,!0)}})},tT=/(input|label|select|textarea)/i,M0,S0=function(t){var e=tT.test(t.target.tagName);(e||M0)&&(t._gsapAllow=!0,M0=e)},eT=function(t){Is(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Vn(t.target)||vi,h=At.core.globals().ScrollSmoother,f=h&&h.get(),u=ns&&(t.content&&Vn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=br(c,tn),p=br(c,Rn),_=1,m=(qe.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,g=0,v=Ln(i)?function(){return i(a)}:function(){return i||2.8},w,y,T=k0(c,t.type,!0,s),E=function(){return y=!1},x=ji,b=ji,P=function(){l=tr(c,tn),b=Ja(ns?1:0,l),n&&(x=Ja(0,tr(c,Rn))),w=Os},C=function(){u._gsap.y=qa(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(y){requestAnimationFrame(E);var X=qa(a.deltaY/2),k=b(d.v-X);if(u&&k!==d.v+d.offset){d.offset=k-d.v;var R=qa((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",d.cacheID=Jt.cache,Er()}return!0}d.offset&&C(),y=!0},U,H,I,N,B=function(){P(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return u&&At.set(u,{y:"+=0"}),t.ignoreCheck=function(D){return ns&&D.type==="touchmove"&&O(D)||_>1.05&&D.type!=="touchstart"||a.isGesturing||D.touches&&D.touches.length>1},t.onPress=function(){y=!1;var D=_;_=qa((Kt.visualViewport&&Kt.visualViewport.scale||1)/m),U.pause(),D!==_&&Sd(c,_>1.01?!0:n?!1:"x"),H=p(),I=d(),P(),w=Os},t.onRelease=t.onGestureStart=function(D,X){if(d.offset&&C(),!X)N.restart(!0);else{Jt.cache++;var k=v(),R,tt;n&&(R=p(),tt=R+k*.05*-D.velocityX/.227,k*=y0(p,R,tt,tr(c,Rn)),U.vars.scrollX=x(tt)),R=d(),tt=R+k*.05*-D.velocityY/.227,k*=y0(d,R,tt,tr(c,tn)),U.vars.scrollY=b(tt),U.invalidate().duration(k).play(.01),(ns&&U.vars.scrollY>=l||R>=l-1)&&At.to({},{onUpdate:B,duration:k})}o&&o(D)},t.onWheel=function(){U._ts&&U.pause(),In()-g>1e3&&(w=0,g=In())},t.onChange=function(D,X,k,R,tt){if(Os!==w&&P(),X&&n&&p(x(R[2]===X?H+(D.startX-D.x):p()+X-R[1])),k){d.offset&&C();var Mt=tt[2]===k,Ft=Mt?I+D.startY-D.y:d()+k-tt[1],$=b(Ft);Mt&&Ft!==$&&(I+=$-Ft),d($)}(k||X)&&Er()},t.onEnable=function(){Sd(c,n?!1:"x"),qt.addEventListener("refresh",B),mn(Kt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Sd(c,!0),pn(Kt,"resize",B),qt.removeEventListener("refresh",B),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=ns,ns&&!d()&&d(1),ns&&At.ticker.add(ji),N=a._dc,U=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:z0(d,d(),function(){return U.pause()})},onUpdate:Er,onComplete:N.vars.onComplete}),a};qt.sort=function(r){if(Ln(r))return $t.sort(r);var t=Kt.pageYOffset||0;return qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),$t.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qt.observe=function(r){return new qe(r)};qt.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var t=r instanceof qe?r:eT(r);return Gn&&Gn.target===t.target&&Gn.kill(),Us(t.target)&&(Gn=t),t};qt.core={_getVelocityProp:Ch,_inputObserver:k0,_scrollers:Jt,_proxies:zi,bridge:{ss:function(){Ri||Bs("scrollStart"),Ri=In()},ref:function(){return Pn}}};C0()&&At.registerPlugin(qt);var V0="1.3.27";function W0(r,t,e){return Math.max(r,Math.min(t,e))}function nT(r,t,e){return(1-e)*r+e*t}function iT(r,t,e,n){return nT(r,t,1-Math.exp(-e*n))}function rT(r,t){return(r%t+t)%t}var sT=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=W0(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iT(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function oT(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var aT=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=oT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},X0=class{constructor(){Ot(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},lT=100/6,rs={passive:!1};function G0(r,t){return r===1?lT:r===2?t:1}var cT=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new X0);Ot(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ot(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ot(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ot(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=G0(n,this.window.width),s=G0(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rs),this.element.addEventListener("touchstart",this.onTouchStart,rs),this.element.addEventListener("touchmove",this.onTouchMove,rs),this.element.addEventListener("touchend",this.onTouchEnd,rs)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rs),this.element.removeEventListener("touchstart",this.onTouchStart,rs),this.element.removeEventListener("touchmove",this.onTouchMove,rs),this.element.removeEventListener("touchend",this.onTouchEnd,rs)}},H0=r=>Math.min(1,1.001-2**(-10*r)),q0=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:w=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"_rafId",null);Ot(this,"_isDraggingSelection",!1);Ot(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ot(this,"isTouching");Ot(this,"isIos");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new sT);Ot(this,"emitter",new X0);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ot(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ot(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ot(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ot(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ot(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=V0,window.lenis||(window.lenis={}),window.lenis.version=V0,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=H0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:v,autoRaf:w,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new aT(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cT(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=W0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=H0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=f>d,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,w,y,T;if(_==="horizontal")m=Math.round(r.scrollLeft),g=f-d,v=t,w=s,y=a,T=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=u-p,v=e,w=o,y=l,T=h;else return!1;return!T&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&w&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?rT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var zs={bg:new Yt("#0d0403"),cream:new Yt("#E8D2B5"),sage:new Yt("#A5A79B"),hot:new Yt("#c23a2c")},Y0=8,hT=`
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
}`,uT=`
uniform vec3 uC1, uC2, uHot; uniform float uEnergy, uOpacity;
varying float vHot; varying float vMix; varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - .5); if (d > .5) discard;
  float a = pow(smoothstep(.5, 0., d), 1.4);
  vec3 c = mix(uC1, uC2, smoothstep(.35, .8, vMix));
  c = mix(c, uHot * 1.5, vHot * (0.55 + uEnergy * 0.45));
  gl_FragColor = vec4(c, a * vAlpha * uOpacity);
}`,fT=`
attribute float aT; attribute float aOff;
varying float vT; varying float vOff;
void main(){ vT = aT; vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,dT=`
uniform float uTime, uLines; uniform vec3 uC, uHot;
varying float vT; varying float vOff;
void main(){
  float x = fract(vT - uTime * 0.45 + vOff);
  float pulse = exp(-pow((x - .5) * 16., 2.));
  gl_FragColor = vec4(mix(uC, uHot * 1.6, pulse), (0.06 + pulse * 0.75) * uLines);
}`;function Z0(r,t,e,n=[]){let i=new nh({canvas:r,antialias:!0,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio||1,t?1.5:2);i.setPixelRatio(s),i.setSize(innerWidth,innerHeight,!1),i.setClearColor(zs.bg,1);let o=new ea,a=new Nn(40,innerWidth/innerHeight,.1,100);a.position.set(0,0,9);let l=t?3800:9e3,c=new Zn,h=e.slice(0,Y0).map(T=>T(l));for(let T=0;T<Y0;T++)c.setAttribute(T===0?"position":`p${T}`,new Xn(h[Math.min(T,h.length-1)],3));let f=new Float32Array(l*4);for(let T=0;T<l*4;T++)f[T]=Math.random();c.setAttribute("aRand",new Xn(f,4));let u={uTime:{value:0},uMorph:{value:0},uMax:{value:h.length-1},uSize:{value:t?32:40},uPR:{value:s},uIntro:{value:0},uWave:{value:0},uCalm:{value:0},uMouse:{value:new Y(99,99,99)},uC1:{value:zs.cream},uC2:{value:zs.sage},uHot:{value:zs.hot},uEnergy:{value:0},uOpacity:{value:t?.7:1}},d=new co(c,new hi({vertexShader:hT,fragmentShader:uT,uniforms:u,transparent:!0,depthWrite:!1,blending:mo}));d.frustumCulled=!1;let p=new cr;p.add(d);let _=n.map(({index:T,net:E})=>{let x=[],b=[],P=[];E.edges.forEach(([U,H])=>{let I=E.nodes[U].p,N=E.nodes[H].p,B=Math.random();x.push(...I,...N),b.push(0,1),P.push(B,B)});let C=new Zn;C.setAttribute("position",new fn(x,3)),C.setAttribute("aT",new fn(b,1)),C.setAttribute("aOff",new fn(P,1));let O={uTime:u.uTime,uLines:{value:0},uC:{value:zs.cream},uHot:{value:zs.hot}};return p.add(new ra(C,new hi({vertexShader:fT,fragmentShader:dT,uniforms:O,transparent:!0,depthWrite:!1,blending:mo}))),{index:T,u:O}});o.add(p);let m=t?500:1400,g=new Float32Array(m*3);for(let T=0;T<m;T++)g.set([Math.random()*28-14,Math.random()*18-9,Math.random()*14-12],T*3);let v=new Zn;v.setAttribute("position",new Xn(g,3));let w=new co(v,new lo({color:zs.sage,size:.025,transparent:!0,opacity:.35,depthWrite:!1}));o.add(w);function y(){a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1)}return{renderer:i,scene:o,camera:a,group:p,uniforms:u,lineSets:_,dust:w,resize:y}}var ae=(r=0,t=1)=>r+Math.random()*(t-r),ie=()=>{let r=0,t=0;for(;!r;)r=Math.random();for(;!t;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*t)},er=()=>{let r=ae(0,Math.PI*2),t=ae(-1,1),e=Math.sqrt(1-t*t);return[e*Math.cos(r),e*Math.sin(r),t]},Re=(r,t)=>{let e=new Float32Array(r*3);for(let n=0;n<r;n++)e.set(t(n),n*3);return e};function ss(r){let t=r.map(([n,i])=>Math.hypot(i[0]-n[0],i[1]-n[1],i[2]-n[2])),e=t.reduce((n,i)=>n+i,0);return(n=.02)=>{let i=Math.random()*e,s=0;for(;i>t[s];)i-=t[s],s++;let[o,a]=r[s],l=Math.random();return[o[0]+(a[0]-o[0])*l+ie()*n,o[1]+(a[1]-o[1])*l+ie()*n,o[2]+(a[2]-o[2])*l+ie()*n]}}var Ar=(r,t,e,n,i,s)=>{let o=r-n/2,a=r+n/2,l=t-i/2,c=t+i/2,h=e-s/2,f=e+s/2,u=[[o,l,h],[a,l,h],[a,c,h],[o,c,h],[o,l,f],[a,l,f],[a,c,f],[o,c,f]];return[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].map(([d,p])=>[u[d],u[p]])};function Bd(r){let t=Math.floor(r*.78),e=Math.PI*(3-Math.sqrt(5));return Re(r,n=>{if(n<t){let o=1-n/(t-1)*2,a=Math.sqrt(1-o*o),l=e*n,c=2.3+ie()*.04;return[Math.cos(l)*a*c,o*c,Math.sin(l)*a*c]}let i=er(),s=Math.pow(Math.random(),.5)*1.9;return[i[0]*s,i[1]*s,i[2]*s]})}function zd(r){let t=Math.ceil(Math.sqrt(r)),e=7.2;return Re(r,n=>{let i=(n%t/(t-1)-.5)*e,s=(Math.floor(n/t)/(t-1)-.5)*e;return[i,Math.sin(i*.9)*.35+Math.cos(s*.8)*.35,s]})}function J0(r){return Re(r,()=>{let t=ae(-1,1),e=1.15;if(Math.random()<.78){let o=t*Math.PI*3.2+(Math.random()<.5?0:Math.PI);return[Math.cos(o)*e+ie()*.05,t*3.1,Math.sin(o)*e+ie()*.05]}let n=Math.round(t*14)/14,i=n*Math.PI*3.2,s=ae(-1,1);return[Math.cos(i)*e*s,n*3.1,Math.sin(i)*e*s]})}function $0(r){return Re(r,()=>{let t=ae(0,Math.PI*2),e=Math.cos(3*t)+2.1,n=er(),i=Math.abs(ie())*.16;return[e*Math.cos(2*t)*.82+n[0]*i,e*Math.sin(2*t)*.82+n[1]*i,-Math.sin(3*t)*.82+n[2]*i]})}function Cr(r){return Re(r,t=>{let e=Math.pow(Math.random(),.7)*4.4,n=t%3*(Math.PI*2/3)+e*1.05+ie()*(.35/(e+.5));return[Math.cos(n)*e,ie()*.12*(1.2-e/4.4),Math.sin(n)*e]})}function Vo(r,t=6.8,e=.72,n=.09){let i=[],s=r.map((l,c)=>-t/2+t*c/(r.length-1));r.forEach((l,c)=>{for(let h=0;h<l;h++)i.push({l:c,p:[s[c],(h-(l-1)/2)*e,ae(-.15,.15)]})});let o=[];for(let l=0;l<i.length;l++)for(let c=0;c<i.length;c++)i[c].l===i[l].l+1&&o.push([l,c]);return{fn:l=>Re(l,c=>{if(Math.random()<.6){let p=i[c%i.length].p;return[p[0]+ie()*n,p[1]+ie()*n,p[2]+ie()*n]}let h=o[Math.floor(Math.random()*o.length)],f=i[h[0]].p,u=i[h[1]].p,d=Math.random();return[f[0]+(u[0]-f[0])*d+ie()*.015,f[1]+(u[1]-f[1])*d+ie()*.015,f[2]+(u[2]-f[2])*d]}),nodes:i,edges:o}}var kd=(r=6,t=2.2,e=.5)=>n=>Re(n,i=>{let s=i%r/r*Math.PI*2+Math.PI/2,o=er(),a=e*Math.cbrt(Math.random())*(Math.random()<.7?1:.6)+(Math.random()<.6?e*.2:0);return[Math.cos(s)*t+o[0]*a,Math.sin(s)*t+o[1]*a,o[2]*a]});function Zh(r){let t=[],e=[-.85,.85];e.forEach(i=>e.forEach(s=>e.forEach(o=>t.push(...Ar(i,s,o,1.25,1.25,1.25)))));let n=ss(t);return Re(r,()=>Math.random()<.8?n(.025):[ae(-1.5,1.5),ae(-1.5,1.5),ae(-1.5,1.5)])}function Vd(r){return Re(r,()=>{if(Math.random()<.18){let i=er(),s=.45*Math.cbrt(Math.random());return[i[0]*s,i[1]*s,i[2]*s]}let t=1+Math.floor(Math.random()*7),e=.45+t*.3+ie()*.025,n=ae(0,Math.PI*2);return[Math.cos(n)*e,Math.sin(n)*e,ie()*.04+Math.sin(n*3+t)*.05]})}function Gd(r){let o=Ar(0,-.25,0,3,1.9,2.2),a=[-3/2,-1.2+1.9,-2.2/2],l=[3/2,-1.2+1.9,-2.2/2],c=[-3/2,-1.2+1.9,2.2/2],h=[3/2,-1.2+1.9,2.2/2],f=[0,-1.2+1.9+1.3,-2.2/2],u=[0,-1.2+1.9+1.3,2.2/2];o.push([a,f],[l,f],[c,u],[h,u],[f,u]),o.push(...Ar(0,-1.2+.55,2.2/2,.6,1.1,0)),o.push(...Ar(-.95,-1.2+1.15,2.2/2,.55,.5,0),...Ar(.95,-1.2+1.15,2.2/2,.55,.5,0));let d=ss(o);return Re(r,()=>d(.03))}function K0(r){let t=[];t.push(...Ar(0,-1.6+.1,0,4.2+.6,.2,1.8),...Ar(0,-1.6+.3,0,4.2+.3,.2,1.5)),t.push(...Ar(0,-1.6+2.75,0,4.2+.3,.2,1.5));let s=[-(4.2+.3)/2,-1.6+2.85,.75],o=[(4.2+.3)/2,-1.6+2.85,.75],a=[0,-1.6+3.75,.75];t.push([s,o],[s,a],[o,a]);let l=ss(t);return Re(r,()=>{if(Math.random()<.55){let c=Math.floor(Math.random()*6),h=-4.2/2+.25+c*(4.2-.5)/5,f=ae(0,Math.PI*2),u=ae(-1.6+.4,-1.6+2.65);return[h+Math.cos(f)*.17,u,.45+Math.sin(f)*.17]}return l(.03)})}function Q0(r){let t=[];for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,o=i%2?1.05:2.5;t.push([Math.cos(s)*o,Math.sin(s)*o])}let e=[];[-.3,.3].forEach(i=>t.forEach((s,o)=>{let a=t[(o+1)%10];e.push([[s[0],s[1],i],[a[0],a[1],i]])})),t.forEach(i=>e.push([[i[0],i[1],-.3],[i[0],i[1],.3]]));let n=ss(e);return Re(r,()=>{if(Math.random()<.82)return n(.03);let i=er(),s=Math.cbrt(Math.random())*.9;return[i[0]*s,i[1]*s,i[2]*s*.4]})}function j0(r){return Re(r,()=>{let t=ae(0,Math.PI*2),e=Math.sin(t),n=1+e*e,i=3.1,s=er(),o=Math.abs(ie())*.17;return[i*Math.cos(t)/n+s[0]*o,i*e*Math.cos(t)/n+s[1]*o,Math.sin(t*2)*.35+s[2]*o]})}function Hd(r){return Re(r,()=>{let t=Math.random()<.5?-1:1,e=Math.random(),n=ae(-1.6,1.6),i=Math.floor(Math.random()*5),s=t*e*2.5,o=Math.sin(e*Math.PI)*.5+e*.4-i*.06*e;if(Math.random()<.3){let a=Math.random()<.5?1.6:-1.6;return[s,a,o]}return[s+ie()*.01,n,o+ie()*.01]})}function Wd(r){return Re(r,t=>{let e=t%2?1.7:-1.7,n=t%2?1.35:1.05,i=er(),s=Math.random()<.7?n:n*Math.cbrt(Math.random());return[e+i[0]*s,(t%2?-.25:.25)+i[1]*s,i[2]*s]})}function t_(r){let t=[];for(let n=0;n<6;n++){let i=-1+n*.4,s=.9-n*.36,o=-1+n*.4;t.push(...Ar(i,s,o,2.6,1.6,0).slice(0,4))}let e=ss(t);return Re(r,()=>{if(Math.random()<.75)return e(.02);let n=Math.floor(Math.random()*6);return[-1+n*.4+ae(-1.3,1.3),.9-n*.36+ae(-.8,.8),-1+n*.4]})}function e_(r){return Re(r,()=>{if(Math.random()<.22){let a=er(),l=.55*Math.cbrt(Math.random());return[a[0]*l,a[1]*l,a[2]*l]}let t=Math.floor(Math.random()*3),e=ae(0,Math.PI*2),n=2.3+ie()*.04,i=Math.cos(e)*n,s=Math.sin(e)*n*.38,o=t*Math.PI/3;return[i*Math.cos(o)-s*Math.sin(o),i*Math.sin(o)+s*Math.cos(o),Math.sin(e)*n*.3*(t-1)]})}function Xd(r){return Re(r,()=>{let t=Math.floor(Math.random()*6),e=2.2-t*.88,n=2.5*Math.pow(.66,t);if(Math.random()<.85){let l=ae(0,Math.PI*2);return[Math.cos(l)*n+ie()*.03,e+ie()*.03,Math.sin(l)*n+ie()*.03]}let i=Math.random(),s=ae(0,Math.PI*2),o=2.2-i*4.4,a=2.5*Math.pow(.66,i*5);return[Math.cos(s)*a,o,Math.sin(s)*a]})}function n_(r){return Re(r,()=>{let t=Math.floor(Math.random()*3),e=-1.5+t*1.15,n=ae(0,Math.PI*2),i=1.9,s=Math.random();if(s<.5){let a=e+(Math.random()<.5?0:.85);return[Math.cos(n)*i+ie()*.02,a,Math.sin(n)*i+ie()*.02]}if(s<.8)return[Math.cos(n)*i,e+Math.random()*.85,Math.sin(n)*i];let o=Math.sqrt(Math.random())*i;return[Math.cos(n)*o,e+.85,Math.sin(n)*o]})}function i_(r){return Re(r,()=>{let t=ae(0,Math.PI*2),e=Math.random()<.8,n=e?1:Math.cbrt(Math.random()),i=16*Math.pow(Math.sin(t),3),s=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t),o=.135*n,a=Math.hypot(i,s)/17,l=(Math.random()<.5?-1:1)*Math.sqrt(Math.max(0,1-a*a))*.9*Math.random()**(e?.15:1);return[i*o+ie()*.03,s*o+.35+ie()*.03,l]})}function r_(r){let t=[],e=[];function n(o,a,l,c,h){let f=[o[0]+Math.sin(l)*a,o[1]+Math.cos(l)*a,o[2]+ie()*.12];if(t.push([o,f,h]),c===0){e.push(f);return}let u=c>3?2:3;for(let d=0;d<u;d++)n(f,a*.74,l+(d-(u-1)/2)*.62+ie()*.1,c-1,h*.6)}n([0,-2.6,0],1.25,0,5,1);let i=t.map(([o,a,l])=>Math.hypot(a[0]-o[0],a[1]-o[1])*(.4+l)),s=i.reduce((o,a)=>o+a,0);return Re(r,()=>{if(Math.random()<.45){let c=Math.random()*s,h=0;for(;c>i[h];)c-=i[h],h++;let[f,u,d]=t[h],p=Math.random(),_=.05+d*.09;return[f[0]+(u[0]-f[0])*p+ie()*_,f[1]+(u[1]-f[1])*p+ie()*_,f[2]+(u[2]-f[2])*p+ie()*_]}let o=e[Math.floor(Math.random()*e.length)],a=er(),l=.38*Math.cbrt(Math.random());return[o[0]+a[0]*l,o[1]+a[1]*l*.8,o[2]+a[2]*l*.6]})}function s_(r){let t=[],n=[[-2.3,0,.42,2.4],[2.3,0,.42,2.4],[-.95,-.5,.36,3.1],[.95,-.5,.36,3.1],[0,-.9,.5,3.9]],i=1.5,s=.25;t.push([[-2.3,-1.9,s],[2.3,-1.9,s]],[[-2.3,-1.9+i,s],[2.3,-1.9+i,s]]);for(let h=0;h<14;h++){let f=-2.05+h*.315,u=-1.9+i;t.push([[f,u,s],[f,u+.18,s]],[[f,u+.18,s],[f+.16,u+.18,s]],[[f+.16,u+.18,s],[f+.16,u,s]])}let o=[];for(let h=0;h<=16;h++){let f=Math.PI*h/16;o.push([Math.cos(f)*.42,-1.9+.75+Math.sin(f)*.42,s])}t.push([[-.42,-1.9,s],o[16]],[[.42,-1.9,s],o[0]]);for(let h=0;h<16;h++)t.push([o[h],o[h+1]]);[[-.14,1.3],[.14,1.3],[0,2.1]].forEach(([h,f])=>t.push([[h-.07,-1.9+f,-.4],[h+.07,-1.9+f,-.4]],[[h-.07,-1.9+f+.22,-.4],[h+.07,-1.9+f+.22,-.4]],[[h-.07,-1.9+f,-.4],[h-.07,-1.9+f+.22,-.4]],[[h+.07,-1.9+f,-.4],[h+.07,-1.9+f+.22,-.4]])),n.forEach(([h,f,u,d])=>{let p=-1.9+d+u*2.2;t.push([[h,p,f],[h,p+.35,f]],[[h,p+.35,f],[h+.25,p+.27,f]],[[h+.25,p+.27,f],[h,p+.2,f]])});let a=ss(t),l=n.map(([,,h,f])=>h*f),c=l.reduce((h,f)=>h+f,0);return Re(r,()=>{let h=Math.random();if(h<.5){let f=Math.random()*c,u=0;for(;f>l[u];)f-=l[u],u++;let[d,p,_,m]=n[u],g=ae(0,Math.PI*2);if(Math.random()<.68){let y=ae(-1.9,-1.9+m);return[d+Math.cos(g)*_,y,p+Math.sin(g)*_]}let v=Math.random(),w=(_+.1)*(1-v);return[d+Math.cos(g)*w,-1.9+m+v*_*2.2,p+Math.sin(g)*w]}return h<.57?[ae(-2.3,2.3),ae(-1.9,-1.9+i),s+ie()*.01]:a(.022)})}function o_(r){let t=s=>[Math.sin(s*Math.PI)*.18,-1.6+s*2.3,0];function e(s){let o=t(1),a=1.9,l=.75,c=s>0?.42:Math.PI-.42;return(h,f)=>{let u=Math.sin(Math.PI*h)*l*Math.pow(1-h,.15),d=h*a,p=f*u*.5+Math.sin(h*Math.PI)*.25;return[o[0]+d*Math.cos(c)-p*Math.sin(c),o[1]+d*Math.sin(c)+p*Math.cos(c),f*.08*(1-h)]}}let n=e(1),i=e(-1);return Re(r,()=>{let s=Math.random();if(s<.14){let c=Math.random(),h=t(c),f=ae(0,Math.PI*2);return[h[0]+Math.cos(f)*.06,h[1],Math.sin(f)*.06]}if(s<.74){let c=Math.random()<.5?n:i,h=Math.random(),f=Math.random(),u=f<.45?Math.random()<.5?-1:1:f<.6?0:ae(-1,1),d=c(h,u);return[d[0]+ie()*.015,d[1]+ie()*.015,d[2]]}let o=ae(-1.6,1.6),a=.45*Math.pow(Math.max(0,1-(o/1.6)**2),1.2),l=ae(-.6,.6)*(1-Math.abs(o)/1.6);return Math.random()<.55?[o,-1.75+a+ie()*.02,l*.4]:[o,-1.75+Math.random()*a,l]})}function a_(r){let i=[],s=(a,l,c,h)=>{let f=[],d=[[a/2-c,l/2-c,0],[-a/2+c,l/2-c,Math.PI/2],[-a/2+c,-l/2+c,Math.PI],[a/2-c,-l/2+c,1.5*Math.PI]],p=[];d.forEach(([_,m,g])=>{for(let v=0;v<=6;v++){let w=g+v/6*Math.PI/2;p.push([_+Math.cos(w)*c,m+Math.sin(w)*c,h])}});for(let _=0;_<p.length;_++)f.push([p[_],p[(_+1)%p.length]]);return f};i.push(...s(2.3,4.5,.38,.12),...s(2.3,4.5,.38,-.12),...s(2.3-.22,4.5-.22,.38*.8,.13)),i.push([[-.28,4.5/2-.26,.13],[.28,4.5/2-.26,.13]]),i.push([[-.42,-4.5/2+.24,.13],[.42,-4.5/2+.24,.13]]);for(let a=0;a<4;a++)for(let l=0;l<3;l++)i.push(...s(.42,.42,.1,.13).map(([c,h])=>[[c[0]+(l-1)*.62,c[1]+1.15-a*.62,c[2]],[h[0]+(l-1)*.62,h[1]+1.15-a*.62,h[2]]]));i.push(...s(1.7,.55,.14,.13).map(([a,l])=>[[a[0],a[1]-1.45,a[2]],[l[0],l[1]-1.45,l[2]]]));let o=ss(i);return Re(r,()=>Math.random()<.9?o(.018):[ae(-2.3/2+.15,2.3/2-.15),ae(-4.5/2+.15,4.5/2-.15),.13])}function l_(r){let t=[],i=[[-2.4,.55,0],[0,.67,1.488],[2.4,.55,0],[0,.43000000000000005,-1.488]];for(let c=0;c<4;c++){let h=i[c],f=i[(c+1)%4];t.push([h,f],[[h[0],h[1]-.12,h[2]],[f[0],f[1]-.12,f[2]]],[h,[h[0],h[1]-.12,h[2]]])}let s=[0,.55+.06,0],o=[2.4*.92,.55-.02,.05],a=[2.4*.92,.55-1.5,.05];t.push([s,o],[o,a]);for(let c=0;c<7;c++)t.push([a,[a[0]+(c-3)*.05,a[1]-.45,a[2]+c%2*.05]]);let l=ss(t);return Re(r,()=>{let c=Math.random();if(c<.3){let h=Math.random(),f=Math.random(),u=[i[0][0]+(i[1][0]-i[0][0])*h+(i[3][0]-i[0][0])*f,i[0][1]+(i[1][1]-i[0][1])*h+(i[3][1]-i[0][1])*f,i[0][2]+(i[1][2]-i[0][2])*h+(i[3][2]-i[0][2])*f];return[u[0]+(Math.random()<.5?2.4:0)*0,u[1],u[2]]}if(c<.5){let h=ae(0,Math.PI*2),f=ae(0,1),u=1.2*(1-.12*f*f);return[Math.cos(h)*u,.55-.15-f*.75,Math.sin(h)*u*.8]}if(c<.53){let h=er();return[h[0]*.12,.55+.1+h[1]*.08,h[2]*.12]}return l(.025)})}var c_=r=>Re(r,()=>{let t=ae(-1,1),e=ae(-1,1)*.55,n=t*3.4,i=t*Math.PI*1.2;return[n,Math.sin(t*Math.PI*1.5)*.9+Math.cos(i)*e,Math.sin(i)*e+Math.cos(t*Math.PI)*.5]});var h_=Vo([4,7,7,3]),AC=Vo([1,5,7,5,1],6.8,.62),CC=Vo([1,4,6,4,1],6.8,.7),u_=Vo([4,7,7,3]),f_=Vo([2,1],4.6,2.6,.32),qd={education:{shapes:[Cr,Cr],place:[[0,-9,.2,1.08,.5],[0,-.3,1.1,1.08,.5]],nets:[]},unofficial:{shapes:[i_,s_,Hd,Gd,Vd,o_,r_,Cr],place:[[2.8,.1,.85,0,.35],[-3.15,-.25,.62,.08,0],[3,0,.82,-.3,0],[-3,.1,.9,.22,1],[3,0,.95,0,.35],[-3,0,.85,.05,.3],[3,.15,.9,0,0],[0,-.3,1.1,1.08,.5]],nets:[]},research:{shapes:[u_.fn,zd,Xd,f_.fn,Zh,n_,Cr],place:[[3,.1,.55,0,0],[3.1,-.3,.6,.85,.3],[-3,0,.88,.25,1],[2.85,0,.75,0,0],[-3,0,.85,.45,1],[3,0,.88,.3,.6],[0,-.3,1.1,1.08,.5]],nets:[{index:0,net:u_},{index:3,net:f_}],wave:1},home:{shapes:[Bd,Bd,zd,J0,h_.fn,$0,Cr],place:[[2.55,.15,.95,0,1],[4.3,1.7,.42,0,1],[-2.9,-.2,.9,.85,.3],[3.1,0,.95,0,1],[0,.1,1,0,0],[0,-1.15,.68,0,1],[0,-.3,1.1,1.08,.5]],nets:[{index:4,net:h_}],wave:2},projects:{shapes:[kd(6,2.1,.55),K0,a_,l_,Zh,Vd,Gd,Cr],place:[[2.7,0,.95,0,.8],[2.8,-.15,.74,.1,0],[-3.05,0,.82,.05,.25],[2.75,.25,.66,.42,0],[-3.1,0,.95,.45,1],[3.1,0,.95,0,.35],[-3,.1,.95,.22,1],[0,-.3,1.1,1.08,.5]],nets:[]},leadership:{shapes:[Q0,kd(6,2.1,.42),c_,Xd,Zh,Wd,j0,Cr],place:[[2.7,0,.9,0,0],[2.9,0,.85,0,0],[-2.75,.05,.76,.5,.6],[3,0,.88,.25,1],[-2.9,0,.8,.45,1],[2.85,0,.7,0,.5],[-2.9,0,.62,.2,.5],[0,-.3,1.1,1.08,.5]],nets:[]},teaching:{shapes:[Hd,Wd,t_,e_,Cr],place:[[2.75,0,.8,-.35,.4],[2.85,0,.7,0,.5],[-3,0,.92,.2,.25],[2.9,0,.85,.3,.35],[0,-.3,1.1,1.08,.5]],nets:[]}};var d_="vaf-sound";var mT="assets/music.mp3";var p_="vaf-music-t",m_=[[110,164.81,220,261.63],[98,146.83,196,246.94],[87.31,130.81,174.61,220],[130.81,196,261.63,329.63],[146.83,220,293.66,349.23],[123.47,185,246.94,293.66],[110,164.81,220,329.63],[98,146.83,196,293.66]];function g_(){let r=null,t,e,n,i,s=[],o,a,l=!1,c=0,h=new Audio,f=null;h.loop=!0,h.preload="auto",h.volume=0,h.addEventListener("canplay",()=>{f!==!0&&(f=!0,_(!0))}),h.addEventListener("error",()=>{f=!1,_(!1)});try{let N=parseFloat(sessionStorage.getItem(p_));N>0&&h.addEventListener("loadedmetadata",()=>{try{h.currentTime=N%(h.duration||N+1)}catch{}},{once:!0})}catch{}h.src=mT;let u=0;function d(N,B){cancelAnimationFrame(u);let D=h.volume,X=performance.now(),k=()=>{let R=Math.min((performance.now()-X)/(B*1e3),1);h.volume=Math.max(0,Math.min(1,D+(N-D)*R)),R<1?u=requestAnimationFrame(k):N===0&&h.pause()};k()}async function p(){if(f!==!1)try{await h.play(),d(.45,2.2),r&&e&&e.gain.setTargetAtTime(0,r.currentTime,.3)}catch{return}}function _(N){N&&l&&r&&r.state==="running"&&p()}function m(){try{h.paused||sessionStorage.setItem(p_,String(h.currentTime))}catch{}}addEventListener("pagehide",m);try{l=localStorage.getItem(d_)==="1"}catch{}function g(N=3.2,B=2.6){let D=r.sampleRate*N,X=r.createBuffer(2,D,r.sampleRate);for(let k=0;k<2;k++){let R=X.getChannelData(k);for(let tt=0;tt<D;tt++)R[tt]=(Math.random()*2-1)*Math.pow(1-tt/D,B)}return X}function v(N=2){let B=r.sampleRate*N,D=r.createBuffer(1,B,r.sampleRate),X=D.getChannelData(0);for(let k=0;k<B;k++)X[k]=Math.random()*2-1;return D}function w(){r=new(window.AudioContext||window.webkitAudioContext);let N=r.createDynamicsCompressor();N.threshold.value=-18,N.ratio.value=3,t=r.createGain(),t.gain.value=0,t.connect(N).connect(r.destination),a=r.createConvolver(),a.buffer=g();let B=r.createGain();B.gain.value=.55,a.connect(B).connect(t),e=r.createGain(),e.gain.value=0,e.connect(t),T(c,!0)}function y(N,B=1.2){r&&(t.gain.cancelScheduledValues(r.currentTime),t.gain.setTargetAtTime(N,r.currentTime,B/3))}function T(N,B=!1){if(c=N,!r)return;let D=m_[N%m_.length],X=B?.01:.9;s.forEach(({o:k,i:R})=>k.frequency.setTargetAtTime(D[R],r.currentTime,X)),B||x()}function E(N,B,D,X){let k=r.currentTime;N.gain.setValueAtTime(1e-4,k),N.gain.exponentialRampToValueAtTime(B,k+D),N.gain.exponentialRampToValueAtTime(1e-4,k+D+X)}function x(N=!0){if(!r||!l)return;let B=r.createBufferSource();B.buffer=v(1.6);let D=r.createBiquadFilter();D.type="bandpass",D.Q.value=1.4;let X=r.createGain(),k=r.currentTime;D.frequency.setValueAtTime(N?250:2200,k),D.frequency.exponentialRampToValueAtTime(N?2200:220,k+1.1),B.connect(D).connect(X),X.connect(t),X.connect(a),E(X,.09,.35,1),B.start(k),B.stop(k+1.6)}function b(N=!0){if(!r||!l)return;let B=r.createOscillator(),D=r.createGain(),X=r.currentTime;B.type="sine";let k=(N?1760:880)*(1+(Math.random()-.5)*.06);B.frequency.setValueAtTime(k,X),B.frequency.exponentialRampToValueAtTime(k*.6,X+.08),B.connect(D),D.connect(t),D.connect(a),E(D,N?.035:.06,.004,.09),B.start(X),B.stop(X+.15)}let P=null;function C(N){if(!(!r||!l||r.state!=="running")){if(!P){let B=r.createOscillator(),D=r.createGain(),X=r.createBiquadFilter();B.type="sawtooth",X.type="lowpass",X.frequency.value=900,D.gain.value=1e-4,B.connect(X).connect(D),D.connect(t),D.connect(a),B.start(),P={o:B,g:D},D.gain.setTargetAtTime(.03,r.currentTime,.2)}if(P.o.frequency.setTargetAtTime(110*Math.pow(2,N*2),r.currentTime,.05),N>=1){let B=P;B.g.gain.setTargetAtTime(1e-4,r.currentTime,.25),setTimeout(()=>B.o.stop(),1500),P=null,O()}}}function O(){!r||!l||[880,1318.5].forEach((N,B)=>{let D=r.createOscillator(),X=r.createGain(),k=r.currentTime+B*.07;D.type="sine",D.frequency.value=N,D.connect(X),X.connect(t),X.connect(a),X.gain.setValueAtTime(1e-4,k),X.gain.exponentialRampToValueAtTime(.05,k+.01),X.gain.exponentialRampToValueAtTime(1e-4,k+1.4),D.start(k),D.stop(k+1.5)})}function U(N){!r||!l||!i||i.frequency.setTargetAtTime(700+Math.min(Math.abs(N)*40,1600),r.currentTime,.4)}async function H(){if(r||w(),r.state!=="running")try{await r.resume()}catch{}y(1.9,1.6),p()}function I(N){l=N;try{localStorage.setItem(d_,N?"1":"0")}catch{}document.body.classList.toggle("sound-on",l),l?H():(y(0,.6),m(),d(0,.6))}if(document.body.classList.toggle("sound-on",l),l){w();let N=()=>{H(),removeEventListener("pointerdown",N,!0),removeEventListener("keydown",N,!0)};r.state==="running"?y(1.9,1.6):(addEventListener("pointerdown",N,!0),addEventListener("keydown",N,!0))}return{get on(){return l},toggle(){I(!l),l&&setTimeout(()=>b(!1),60)},setSection:T,tick:b,whoosh:x,loaderProgress:C,scrollVelocity:U,leave(){m(),l&&r&&(x(!1),y(0,.9),d(0,.7))}}}Oe.registerPlugin(qt);var os=qd[document.body.dataset.page]||qd.home,ks=g_(),w_=matchMedia("(max-width: 860px)").matches,E_=matchMedia("(hover: none)").matches,gT=matchMedia("(prefers-reduced-motion: reduce)").matches,Vs=new q0({duration:1.25,smoothWheel:!0});window.__lenis=Vs;Vs.on("scroll",qt.update);Oe.ticker.add(r=>Vs.raf(r*1e3));Oe.ticker.lagSmoothing(0);document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href");e.length<2||(t.preventDefault(),Vs.scrollTo(e,{duration:1.8}))}));var $h=document.getElementById("loader");document.querySelectorAll("a[href]").forEach(r=>{let t=r.getAttribute("href");!t||t.startsWith("#")||/^(https?:|mailto:|tel:)/.test(t)||r.target==="_blank"||r.addEventListener("click",e=>{if(e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();let n=/^index\.html/.test(t);$h.querySelector(".l-num").textContent=n?"000":"",$h.querySelector(".l-label").textContent=n?"Initialising network":"",Oe.set(".loader-bar i",{scaleX:0}),ks.leave(),Oe.fromTo($h,{yPercent:100},{yPercent:0,duration:.75,ease:"expo.inOut",onComplete:()=>{location.href=t}})})});addEventListener("pageshow",r=>{r.persisted&&Oe.set($h,{yPercent:-100})});var yi=Z0(document.getElementById("gl"),w_,os.shapes,os.nets);addEventListener("resize",()=>{yi.resize(),tu()});var nr=os.place.map((r,t)=>w_?[0,t===0?.7:0,r[2]*.66,r[3],r[4]]:r),A_=[...document.querySelectorAll("[data-s]")],Kh=[];function tu(){Kh=A_.map(r=>r.getBoundingClientRect().top+scrollY)}tu();addEventListener("load",tu);setTimeout(tu,1200);var Se={morph:0,x:nr[0][0],y:nr[0][1],s:nr[0][2],tilt:nr[0][3],spin:nr[0][4],angle:0},ni={x:0,y:0,sx:0,sy:0},__=new ua,_T=new li(new Y(0,0,1),0),x_=new Y;addEventListener("pointermove",r=>{ni.x=r.clientX/innerWidth*2-1,ni.y=-(r.clientY/innerHeight)*2+1});var xT=r=>r*r*(3-2*r),ei=(r,t,e)=>r+(t-r)*e;function vT(){let r=scrollY+innerHeight*.55,t=0;for(let n=0;n<Kh.length;n++)r>=Kh[n]&&(t=n);if(t=Math.min(t,nr.length-1),t===0)return{m:0,a:nr[0],b:nr[0],t:0};let e=xT(Math.min(Math.max((r-Kh[t])/(innerHeight*.65),0),1));return{m:t-1+e,a:nr[t-1],b:nr[t],t:e}}var v_=document.getElementById("energy"),y_=document.getElementById("secnum"),M_=document.getElementById("sectot");M_&&(M_.textContent=String(A_.length).padStart(2,"0"));var yT=[...document.querySelectorAll(".dots a")],S_=performance.now(),Yd=-1;Oe.ticker.add(()=>{let r=performance.now(),t=Math.min((r-S_)/1e3,.05);S_=r;let e=yi.uniforms;e.uTime.value+=t;let n=vT(),i=1-Math.pow(.0025,t);if(Se.morph=ei(Se.morph,n.m,i),Se.x=ei(Se.x,ei(n.a[0],n.b[0],n.t),i),Se.y=ei(Se.y,ei(n.a[1],n.b[1],n.t),i),Se.s=ei(Se.s,ei(n.a[2],n.b[2],n.t),i),Se.tilt=ei(Se.tilt,ei(n.a[3],n.b[3],n.t),i),Se.spin=ei(Se.spin,ei(n.a[4],n.b[4],n.t),i),Se.spin>.15)Se.angle+=t*.16*Se.spin;else{let c=Math.round(Se.angle/(Math.PI*2))*Math.PI*2;Se.angle=ei(Se.angle,c,1-Math.pow(.004,t))}ni.sx=ei(ni.sx,ni.x,1-Math.pow(.02,t)),ni.sy=ei(ni.sy,ni.y,1-Math.pow(.02,t));let s=yi.group;s.position.set(Se.x,Se.y,0),s.scale.setScalar(Se.s),s.rotation.set(Se.tilt+ni.sy*.12,Se.angle+ni.sx*.25,0),yi.camera.position.x=ni.sx*.35,yi.camera.position.y=ni.sy*.25,yi.camera.lookAt(0,0,0),yi.dust.rotation.y+=t*.01,e.uMorph.value=Se.morph,e.uWave.value=os.wave!=null?Math.max(0,1-Math.abs(Se.morph-os.wave)*1.4):0,e.uCalm.value=os.calm!=null?Math.max(0,1-Math.abs(Se.morph-os.calm)*1.5):0,yi.lineSets.forEach(c=>{c.u.uLines.value=Math.max(0,1-Math.abs(Se.morph-c.index)*1.6)}),E_||(s.updateMatrixWorld(),__.setFromCamera({x:ni.x,y:ni.y},yi.camera),__.ray.intersectPlane(_T,x_)&&e.uMouse.value.copy(s.worldToLocal(x_.clone())));let o=document.documentElement.scrollHeight-innerHeight,a=o>0?scrollY/o:0;e.uEnergy.value=a,v_&&(v_.textContent=(a*.742).toFixed(3));let l=Math.round(Se.morph);l!==Yd&&(Yd!==-1&&ks.setSection(l),Yd=l,y_&&(y_.textContent=String(l+1).padStart(2,"0")),yT.forEach((c,h)=>c.classList.toggle("on",h===l))),os.noGL||yi.renderer.render(yi.scene,yi.camera)});document.querySelectorAll("[data-split]").forEach(r=>{let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.append(" ");return}let o=document.createElement("span");o.className="w";let a=document.createElement("span");a.className="wi",a.textContent=s,o.append(a),i.append(o)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};t(r)});document.querySelectorAll("[data-chars]").forEach(r=>{r.innerHTML=[...r.textContent].map(t=>`<span class="ch"><span class="chi">${t}</span></span>`).join("")});var b_=document.getElementById("lnum"),Zd=document.body.dataset.page==="home",Qh=gT||!Zd,jh=Oe.timeline({paused:!0});if(Qh)b_.textContent=document.body.dataset.title||"",document.querySelector(".l-label").textContent="",Oe.set(".loader-bar i",{scaleX:1}),jh.to("#loader",{yPercent:-100,duration:Zd?.95:.8,ease:"expo.inOut",delay:Zd?.25:.05});else{let r={v:0};jh.to(r,{v:100,duration:1.6,ease:"power2.inOut",onUpdate:()=>{b_.textContent=String(Math.round(r.v)).padStart(3,"0")}}).to(".loader-bar i",{scaleX:1,duration:1.6,ease:"power2.inOut"},0).to("#loader",{yPercent:-100,duration:1.1,ease:"expo.inOut"},"+=0.15")}jh.to(yi.uniforms.uIntro,{value:1,duration:Qh?2:2.6,ease:"power3.out"},"-=0.9").from(".hero .chi",{yPercent:115,duration:1.1,ease:"expo.out",stagger:.035},Qh?"-=1.7":"-=2.3").from(".hero [data-split] .wi",{yPercent:115,duration:1.1,ease:"expo.out",stagger:.05},"<").from(".hero .rv",{y:30,opacity:0,duration:.9,ease:"power3.out",stagger:.08},"-=0.8").from("nav, .hud, .dots",{opacity:0,duration:.8},"-=1");Vs.stop();var T_=!1,Jd=()=>{T_||(T_=!0,jh.play().then(()=>Vs.start()))};document.readyState==="complete"?Jd():addEventListener("load",Jd);setTimeout(Jd,2500);Oe.utils.toArray("section:not(.hero) [data-split]").forEach(r=>{Oe.from(r.querySelectorAll(".wi"),{yPercent:110,duration:1.1,ease:"expo.out",stagger:.04,scrollTrigger:{trigger:r,start:"top 85%"}})});qt.batch("section:not(.hero) .rv",{start:"top 90%",onEnter:r=>Oe.from(r,{y:50,opacity:0,duration:1,ease:"power3.out",stagger:.09,overwrite:!0})});document.querySelector(".band")&&(Oe.to(".band-track",{xPercent:-50,ease:"none",duration:30,repeat:-1}),Oe.to(".band",{xPercent:-8,ease:"none",scrollTrigger:{trigger:".band",start:"top bottom",end:"bottom top",scrub:!0}}));document.querySelectorAll("[data-count]").forEach(r=>{let t=+r.dataset.count,e=r.dataset.suffix||"",n={v:0},i=!!r.closest(".hero");qt.create({trigger:r,start:"top 95%",once:!0,onEnter:()=>Oe.to(n,{v:t,duration:1.6,delay:i?Qh?1.2:2.4:.2,ease:"power3.out",onUpdate:()=>{r.textContent=Math.round(n.v)+e}})})});if(!E_){let r=document.querySelector(".cur-dot"),t=document.querySelector(".cur-ring"),e=Oe.quickTo(t,"x",{duration:.45,ease:"power3"}),n=Oe.quickTo(t,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",i=>{Oe.set(r,{x:i.clientX,y:i.clientY}),e(i.clientX),n(i.clientY)}),document.querySelectorAll("a, button, .tilt").forEach(i=>{i.addEventListener("pointerenter",()=>{document.body.classList.add("hovering"),ks.tick(!0)}),i.addEventListener("pointerleave",()=>document.body.classList.remove("hovering"))}),document.querySelectorAll(".mag").forEach(i=>{i.addEventListener("pointermove",s=>{let o=i.getBoundingClientRect();Oe.to(i,{x:(s.clientX-o.left-o.width/2)*.3,y:(s.clientY-o.top-o.height/2)*.4,duration:.4,ease:"power3"})}),i.addEventListener("pointerleave",()=>Oe.to(i,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)"}))}),document.querySelectorAll(".tilt").forEach(i=>{i.addEventListener("pointermove",s=>{let o=i.getBoundingClientRect(),a=(s.clientX-o.left)/o.width-.5,l=(s.clientY-o.top)/o.height-.5;Oe.to(i,{rotateY:a*6,rotateX:-l*6,duration:.5,ease:"power3",transformPerspective:1e3}),i.style.setProperty("--mx",`${(a+.5)*100}%`),i.style.setProperty("--my",`${(l+.5)*100}%`)}),i.addEventListener("pointerleave",()=>Oe.to(i,{rotateY:0,rotateX:0,duration:.8,ease:"power3"}))})}var MT=document.querySelector("nav");Vs.on("scroll",({scroll:r,velocity:t})=>{MT.classList.toggle("scrolled",r>60),ks.scrollVelocity(t||0)});var Jh=document.getElementById("sound");if(Jh){let r=()=>{Jh.querySelector(".s-label").textContent=ks.on?"Sound on":"Sound off",Jh.setAttribute("aria-pressed",ks.on)};r(),Jh.addEventListener("click",()=>{ks.toggle(),r()})}})();
