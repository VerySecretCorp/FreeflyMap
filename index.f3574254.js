let t;function e(t,e,r,s){Object.defineProperty(t,e,{get:r,set:s,enumerable:!0,configurable:!0})}function r(t){return t&&t.__esModule?t.default:t}var s,i,o=globalThis,n={},a={},l=o.parcelRequire47c1;null==l&&((l=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},o.parcelRequire47c1=l);var h=l.register;h("27Lyk",function(t,r){e(t.exports,"register",()=>s,t=>s=t),e(t.exports,"resolve",()=>i,t=>i=t);var s,i,o=new Map;s=function(t,e){for(var r=0;r<e.length-1;r+=2)o.set(e[r],{baseUrl:t,path:e[r+1]})},i=function(t){var e=o.get(t);if(null==e)throw Error("Could not resolve bundle with id "+t);return new URL(e.path,e.baseUrl).toString()}}),h("h4YW9",function(t,e){var r=l("Gr8vk");t.exports=r("cjTMd").then(()=>l("gTNzR"))}),h("Gr8vk",function(t,e){t.exports=function(t){return import(l("27Lyk").resolve(t))}}),l("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["jh4Xs","index.f3574254.js","cjTMd","neighbours.dcfae12f.js"]'));var p={};p=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;if(Array.isArray(e)){if((s=e.length)!=r.length)return!1;for(i=s;0!=i--;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((s=(o=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(i=s;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=s;0!=i--;){var s,i,o,n=o[i];if(!t(e[n],r[n]))return!1}return!0}return e!=e&&r!=r};const u=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class c{static from(t){if(!(t instanceof ArrayBuffer))throw Error("Data must be an instance of ArrayBuffer.");let[e,r]=new Uint8Array(t,0,2);if(219!==e)throw Error("Data does not appear to be in a KDBush format.");let s=r>>4;if(1!==s)throw Error(`Got v${s} data when expected v1.`);let i=u[15&r];if(!i)throw Error("Unrecognized array type.");let[o]=new Uint16Array(t,2,1),[n]=new Uint32Array(t,4,1);return new c(n,o,i,t)}constructor(t,e=64,r=Float64Array,s){if(isNaN(t)||t<0)throw Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=r,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;let i=u.indexOf(this.ArrayType),o=2*t*this.ArrayType.BYTES_PER_ELEMENT,n=t*this.IndexArrayType.BYTES_PER_ELEMENT,a=(8-n%8)%8;if(i<0)throw Error(`Unexpected typed array class: ${r}.`);s&&s instanceof ArrayBuffer?(this.data=s,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+n+a,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+o+n+a),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+n+a,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+i]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t)}add(t,e){let r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=t,this.coords[this._pos++]=e,r}finish(){let t=this._pos>>1;if(t!==this.numItems)throw Error(`Added ${t} items when expected ${this.numItems}.`);return function t(e,r,s,i,o,n){if(o-i<=s)return;let a=i+o>>1;(function t(e,r,s,i,o,n){for(;o>i;){if(o-i>600){let a=o-i+1,l=s-i+1,h=Math.log(a),p=.5*Math.exp(2*h/3),u=.5*Math.sqrt(h*p*(a-p)/a)*(l-a/2<0?-1:1),c=Math.max(i,Math.floor(s-l*p/a+u)),m=Math.min(o,Math.floor(s+(a-l)*p/a+u));t(e,r,s,c,m,n)}let a=r[2*s+n],l=i,h=o;for(m(e,r,i,s),r[2*o+n]>a&&m(e,r,i,o);l<h;){for(m(e,r,l,h),l++,h--;r[2*l+n]<a;)l++;for(;r[2*h+n]>a;)h--}r[2*i+n]===a?m(e,r,i,h):m(e,r,++h,o),h<=s&&(i=h+1),s<=h&&(o=h-1)}})(e,r,a,i,o,n),t(e,r,s,i,a-1,1-n),t(e,r,s,a+1,o,1-n)}(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,r,s){if(!this._finished)throw Error("Data not yet indexed - call index.finish().");let{ids:i,coords:o,nodeSize:n}=this,a=[0,i.length-1,0],l=[];for(;a.length;){let h=a.pop()||0,p=a.pop()||0,u=a.pop()||0;if(p-u<=n){for(let n=u;n<=p;n++){let a=o[2*n],h=o[2*n+1];a>=t&&a<=r&&h>=e&&h<=s&&l.push(i[n])}continue}let c=u+p>>1,m=o[2*c],d=o[2*c+1];m>=t&&m<=r&&d>=e&&d<=s&&l.push(i[c]),(0===h?t<=m:e<=d)&&(a.push(u),a.push(c-1),a.push(1-h)),(0===h?r>=m:s>=d)&&(a.push(c+1),a.push(p),a.push(1-h))}return l}within(t,e,r){if(!this._finished)throw Error("Data not yet indexed - call index.finish().");let{ids:s,coords:i,nodeSize:o}=this,n=[0,s.length-1,0],a=[],l=r*r;for(;n.length;){let h=n.pop()||0,p=n.pop()||0,u=n.pop()||0;if(p-u<=o){for(let r=u;r<=p;r++)g(i[2*r],i[2*r+1],t,e)<=l&&a.push(s[r]);continue}let c=u+p>>1,m=i[2*c],d=i[2*c+1];g(m,d,t,e)<=l&&a.push(s[c]),(0===h?t-r<=m:e-r<=d)&&(n.push(u),n.push(c-1),n.push(1-h)),(0===h?t+r>=m:e+r>=d)&&(n.push(c+1),n.push(p),n.push(1-h))}return a}}function m(t,e,r,s){d(t,r,s),d(e,2*r,2*s),d(e,2*r+1,2*s+1)}function d(t,e,r){let s=t[e];t[e]=t[r],t[r]=s}function g(t,e,r,s){let i=t-r,o=e-s;return i*i+o*o}const f={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},y=Math.fround||(t=new Float32Array(1),e=>(t[0]=+e,t[0]));class k{constructor(t){this.options=Object.assign(Object.create(f),t),this.trees=Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){let{log:e,minZoom:r,maxZoom:s}=this.options;e&&console.time("total time");let i=`prepare ${t.length} points`;e&&console.time(i),this.points=t;let o=[];for(let e=0;e<t.length;e++){let r=t[e];if(!r.geometry)continue;let[s,i]=r.geometry.coordinates,n=y(_(s)),a=y(x(i));o.push(n,a,1/0,e,-1,1),this.options.reduce&&o.push(0)}let n=this.trees[s+1]=this._createTree(o);e&&console.timeEnd(i);for(let t=s;t>=r;t--){let r=+Date.now();n=this.trees[t]=this._createTree(this._cluster(n,t)),e&&console.log("z%d: %d clusters in %dms",t,n.numItems,+Date.now()-r)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let r=((t[0]+180)%360+360)%360-180,s=Math.max(-90,Math.min(90,t[1])),i=180===t[2]?180:((t[2]+180)%360+360)%360-180,o=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,i=180;else if(r>i){let t=this.getClusters([r,s,180,o],e),n=this.getClusters([-180,s,i,o],e);return t.concat(n)}let n=this.trees[this._limitZoom(e)],a=n.range(_(r),x(o),_(i),x(s)),l=n.data,h=[];for(let t of a){let e=this.stride*t;h.push(l[e+5]>1?w(l,e,this.clusterProps):this.points[l[e+3]])}return h}getChildren(t){let e=this._getOriginId(t),r=this._getOriginZoom(t),s="No cluster with the specified id.",i=this.trees[r];if(!i)throw Error(s);let o=i.data;if(e*this.stride>=o.length)throw Error(s);let n=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=o[e*this.stride],l=o[e*this.stride+1],h=i.within(a,l,n),p=[];for(let e of h){let r=e*this.stride;o[r+4]===t&&p.push(o[r+5]>1?w(o,r,this.clusterProps):this.points[o[r+3]])}if(0===p.length)throw Error(s);return p}getLeaves(t,e,r){e=e||10,r=r||0;let s=[];return this._appendLeaves(s,t,e,r,0),s}getTile(t,e,r){let s=this.trees[this._limitZoom(t)],i=Math.pow(2,t),{extent:o,radius:n}=this.options,a=n/o,l=(r-a)/i,h=(r+1+a)/i,p={features:[]};return this._addTileFeatures(s.range((e-a)/i,l,(e+1+a)/i,h),s.data,e,r,i,p),0===e&&this._addTileFeatures(s.range(1-a/i,l,1,h),s.data,i,r,i,p),e===i-1&&this._addTileFeatures(s.range(0,l,a/i,h),s.data,-1,r,i,p),p.features.length?p:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){let r=this.getChildren(t);if(e++,1!==r.length)break;t=r[0].properties.cluster_id}return e}_appendLeaves(t,e,r,s,i){for(let o of this.getChildren(e)){let e=o.properties;if(e&&e.cluster?i+e.point_count<=s?i+=e.point_count:i=this._appendLeaves(t,e.cluster_id,r,s,i):i<s?i++:t.push(o),t.length===r)break}return i}_createTree(t){let e=new c(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let r=0;r<t.length;r+=this.stride)e.add(t[r],t[r+1]);return e.finish(),e.data=t,e}_addTileFeatures(t,e,r,s,i,o){for(let n of t){let t,a,l,h;let p=n*this.stride,u=e[p+5]>1;if(u)t=M(e,p,this.clusterProps),a=e[p],l=e[p+1];else{let r=this.points[e[p+3]];t=r.properties;let[s,i]=r.geometry.coordinates;a=_(s),l=x(i)}let c={type:1,geometry:[[Math.round(this.options.extent*(a*i-r)),Math.round(this.options.extent*(l*i-s))]],tags:t};void 0!==(h=u||this.options.generateId?e[p+3]:this.points[e[p+3]].id)&&(c.id=h),o.features.push(c)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){let{radius:r,extent:s,reduce:i,minPoints:o}=this.options,n=r/(s*Math.pow(2,e)),a=t.data,l=[],h=this.stride;for(let r=0;r<a.length;r+=h){if(a[r+2]<=e)continue;a[r+2]=e;let s=a[r],p=a[r+1],u=t.within(a[r],a[r+1],n),c=a[r+5],m=c;for(let t of u){let r=t*h;a[r+2]>e&&(m+=a[r+5])}if(m>c&&m>=o){let t,o=s*c,n=p*c,d=-1,g=((r/h|0)<<5)+(e+1)+this.points.length;for(let s of u){let l=s*h;if(a[l+2]<=e)continue;a[l+2]=e;let p=a[l+5];o+=a[l]*p,n+=a[l+1]*p,a[l+4]=g,i&&(t||(t=this._map(a,r,!0),d=this.clusterProps.length,this.clusterProps.push(t)),i(t,this._map(a,l)))}a[r+4]=g,l.push(o/m,n/m,1/0,g,-1,m),i&&l.push(d)}else{for(let t=0;t<h;t++)l.push(a[r+t]);if(m>1)for(let t of u){let r=t*h;if(!(a[r+2]<=e)){a[r+2]=e;for(let t=0;t<h;t++)l.push(a[r+t])}}}}return l}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,r){if(t[e+5]>1){let s=this.clusterProps[t[e+6]];return r?Object.assign({},s):s}let s=this.points[t[e+3]].properties,i=this.options.map(s);return r&&i===s?Object.assign({},i):i}}function w(t,e,r){return{type:"Feature",id:t[e+3],properties:M(t,e,r),geometry:{type:"Point",coordinates:[(t[e]-.5)*360,360*Math.atan(Math.exp((180-360*t[e+1])*Math.PI/180))/Math.PI-90]}}}function M(t,e,r){let s=t[e+5],i=s>=1e4?`${Math.round(s/1e3)}k`:s>=1e3?`${Math.round(s/100)/10}k`:s,o=t[e+6];return Object.assign(-1===o?{}:Object.assign({},r[o]),{cluster:!0,cluster_id:t[e+3],point_count:s,point_count_abbreviated:i})}function _(t){return t/360+.5}function x(t){let e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return r<0?0:r>1?1:r}class v{static isAdvancedMarkerAvailable(t){return google.maps.marker&&!0===t.getMapCapabilities().isAdvancedMarkersAvailable}static isAdvancedMarker(t){return google.maps.marker&&t instanceof google.maps.marker.AdvancedMarkerElement}static setMap(t,e){this.isAdvancedMarker(t)?t.map=e:t.setMap(e)}static getPosition(t){if(this.isAdvancedMarker(t)){if(t.position){if(t.position instanceof google.maps.LatLng)return t.position;if(t.position.lat&&t.position.lng)return new google.maps.LatLng(t.position.lat,t.position.lng)}return new google.maps.LatLng(null)}return t.getPosition()}static getVisible(t){return!!this.isAdvancedMarker(t)||t.getVisible()}}class b{constructor({markers:t,position:e}){this.markers=t,e&&(e instanceof google.maps.LatLng?this._position=e:this._position=new google.maps.LatLng(e))}get bounds(){if(0===this.markers.length&&!this._position)return;let t=new google.maps.LatLngBounds(this._position,this._position);for(let e of this.markers)t.extend(v.getPosition(e));return t}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>v.getVisible(t)).length}push(t){this.markers.push(t)}delete(){this.marker&&(v.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class E{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return A(t)}}const A=t=>t.map(t=>new b({position:v.getPosition(t),markers:[t]}));class L extends E{constructor(t){var{maxZoom:e,radius:r=60}=t,s=/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function(t,e){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&0>e.indexOf(s)&&(r[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)0>e.indexOf(s[i])&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(r[s[i]]=t[s[i]]);return r}(t,["maxZoom","radius"]);super({maxZoom:e}),this.state={zoom:-1},this.superCluster=new k(Object.assign({maxZoom:this.maxZoom,radius:r},s))}calculate(t){let e=!1,s={zoom:t.map.getZoom()};if(!r(p)(t.markers,this.markers)){e=!0,this.markers=[...t.markers];let r=this.markers.map(t=>{let e=v.getPosition(t);return{type:"Feature",geometry:{type:"Point",coordinates:[e.lng(),e.lat()]},properties:{marker:t}}});this.superCluster.load(r)}return!e&&(this.state.zoom<=this.maxZoom||s.zoom<=this.maxZoom)&&(e=!r(p)(this.state,s)),this.state=s,e&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:e}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(t=>this.transformCluster(t))}transformCluster({geometry:{coordinates:[t,e]},properties:r}){if(r.cluster)return new b({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(t=>t.properties.marker),position:{lat:e,lng:t}});let s=r.marker;return new b({markers:[s],position:v.getPosition(s)})}}class P{constructor(t,e){this.markers={sum:t.length};let r=e.map(t=>t.count),s=r.reduce((t,e)=>t+e,0);this.clusters={count:e.length,markers:{mean:s/e.length,sum:s,min:Math.min(...r),max:Math.max(...r)}}}}class C{render({count:t,position:e},r,s){let i=t>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff",o=`<svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`,n=`Cluster of ${t} markers`,a=Number(google.maps.Marker.MAX_ZINDEX)+t;if(v.isAdvancedMarkerAvailable(s)){let t=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;return t.setAttribute("transform","translate(0 25)"),new google.maps.marker.AdvancedMarkerElement({map:s,position:e,zIndex:a,title:n,content:t})}let l={position:e,zIndex:a,title:n,icon:{url:`data:image/svg+xml;base64,${btoa(o)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(l)}}class I{constructor(){!function(t,e){for(let r in e.prototype)t.prototype[r]=e.prototype[r]}(I,google.maps.OverlayView)}}(s=i||(i={})).CLUSTERING_BEGIN="clusteringbegin",s.CLUSTERING_END="clusteringend",s.CLUSTER_CLICK="click";const O=(t,e,r)=>{r.fitBounds(e.bounds)};class T extends I{constructor({map:t,markers:e=[],algorithmOptions:r={},algorithm:s=new L(r),renderer:i=new C,onClusterClick:o=O}){super(),this.markers=[...e],this.clusters=[],this.algorithm=s,this.renderer=i,this.onClusterClick=o,t&&this.setMap(t)}addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach(t=>{this.addMarker(t,!0)}),e||this.render()}removeMarker(t,e){let r=this.markers.indexOf(t);return -1!==r&&(v.setMap(t,null),this.markers.splice(r,1),e||this.render(),!0)}removeMarkers(t,e){let r=!1;return t.forEach(t=>{r=this.removeMarker(t,!0)||r}),r&&!e&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){let t=this.getMap();if(t instanceof google.maps.Map&&t.getProjection()){google.maps.event.trigger(this,i.CLUSTERING_BEGIN,this);let{clusters:e,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});if(r||void 0==r){let t=new Set;for(let r of e)1==r.markers.length&&t.add(r.markers[0]);let r=[];for(let e of this.clusters)null==e.marker||(1==e.markers.length?t.has(e.marker)||v.setMap(e.marker,null):r.push(e.marker));this.clusters=e,this.renderClusters(),requestAnimationFrame(()=>r.forEach(t=>v.setMap(t,null)))}google.maps.event.trigger(this,i.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>v.setMap(t,null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){let t=new P(this.markers,this.clusters),e=this.getMap();this.clusters.forEach(r=>{1===r.markers.length?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t,e),r.markers.forEach(t=>v.setMap(t,null)),this.onClusterClick&&r.marker.addListener("click",t=>{google.maps.event.trigger(this,i.CLUSTER_CLICK,r),this.onClusterClick(t,r,e)})),v.setMap(r.marker,e)})}}const S=(t,e)=>{let r=t.lat/57.2958,s=t.lng/57.2958,i=e.lat/57.2958;return 6378.8*Math.acos(Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(s-e.lng/57.2958))};let j={};const U=t=>Object.values(j).filter(e=>t.contains(e)).slice(0,100),Z=async t=>{let e=(await l("h4YW9")).default,r={lat:t.getCenter().lat(),lng:t.getCenter().lng()},s={lat:t.getNorthEast().lat(),lng:t.getNorthEast().lng()};return j=(await e(r,S(s,r))).reduce((t,e)=>(t[e.geohash]=e,t),j)},B=(t,e)=>r=>{let s=new t({position:r});return s.addListener("gmp-click",()=>{e.setContent(r.name),e.open(map,s)}),s},N=(t,e,r,s)=>()=>{let i=t.getPlaces();if(0===i.length)return;let o=i[0];if(!o.geometry){console.log("Returned place contains no geometry");return}e.setTitle=o.name,e.position=o.geometry.location;let n=new r;o.geometry.viewport?n.union(o.geometry.viewport):n.extend(o.geometry.location),s.fitBounds(n)},R=(t,e,r,s,i)=>async()=>{let o=t.getBounds();e.setBounds(o),await Z(o),new i({markers:U(o).map(B(s,r)),map:t})},z=async({map:t,searchBox:e,InfoWindow:r,Marker:s,MarkerClusterer:i,LatLngBounds:o})=>{var n,a;let l;t.addListener("bounds_changed",(n=R(t,e,new r,s,i),function(...t){return new Promise(e=>{clearTimeout(l),l=setTimeout(()=>{l=null,Promise.resolve(n.apply(this,[...t])).then(e)},500),a&&!l&&Promise.resolve(n.apply(this,[...t])).then(e)})})),e.addListener("places_changed",N(e,new s({map:t}),o,t))};window.GMAPS_API_KEY="AIzaSyBjDElj64Ph6yC0tTJTJUf6UeFGKXcpikY";var F=document.createElement("script");F.text=`
console.log("boostrap key", window.GMAPS_API_KEY);
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src="https://maps."+c+"apis.com/maps/api/js?"+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: window.GMAPS_API_KEY,
  v: "beta",
});`,document.getElementsByTagName("head")[0].appendChild(F),(({mapElement:t,searchBoxInputElement:e,initialPosition:r})=>async()=>{let{Map:s,InfoWindow:i}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:o}=await google.maps.importLibrary("marker"),{SearchBox:n}=await google.maps.importLibrary("places"),{LatLngBounds:a}=await google.maps.importLibrary("core"),l=new n(e),h=new s(t,{zoom:13,center:r,mapId:"myPgMapId"});h.controls[google.maps.ControlPosition.TOP_LEFT].push(e),z({map:h,searchBox:l,InfoWindow:i,Marker:o,MarkerClusterer:T,LatLngBounds:a})})({mapElement:document.getElementById("map"),searchBoxInputElement:document.getElementById("search-input"),initialPosition:{lat:55.953251,lng:-3.188267}})();
//# sourceMappingURL=index.f3574254.js.map
