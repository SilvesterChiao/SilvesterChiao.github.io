(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{369:function(e,t,n){"use strict";var r=n(0),i=n(102),o=n(46),l=n(13),s=n(11),u=n(104),a=n(49),h=n(48),c=n(20),f=h("splice"),g=c("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!f||!g},{splice:function(e,t){var n,r,h,c,f,g,m=s(this),d=l(m.length),w=i(e,d),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=d-w):(n=y-2,r=p(v(o(t),0),d-w)),d+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=u(m,r),c=0;c<r;c++)(f=w+c)in m&&a(h,c,m[f]);if(h.length=r,n<r){for(c=w;c<d-r;c++)g=c+n,(f=c+r)in m?m[g]=m[f]:delete m[g];for(c=d;c>d-r+n;c--)delete m[c-1]}else if(n>r)for(c=d-r;c>w;c--)g=c+n-1,(f=c+r-1)in m?m[g]=m[f]:delete m[g];for(c=0;c<n;c++)m[c+w]=arguments[c+2];return m.length=d-r+n,h}})},376:function(e,t,n){"use strict";n.r(t);n(369);var r=n(27),i=n(45),o=new(function(){function e(){Object(r.a)(this,e),this.storage=[],this.count=0,this.limit=8}return Object(i.a)(e,[{key:"hashFunc",value:function(e,t){for(var n=0,r=0;r<e.length;r++)n=31*n+e.charCodeAt(r);return n%=t}},{key:"put",value:function(e,t){var n=this.hashFunc(e,this.limit),r=this.storage[n];void 0===r&&(r=[],this.storage[n]=r);for(var i=!1,o=0;o<r.length;o++){var l=r[o];l[0]===e&&(l[1]=t,i=!0)}i||(r.push([e,t]),this.count++)}},{key:"get",value:function(e){var t=this.hashFunc(e,this.limit),n=this.storage[t];if(!n)return null;for(var r=0;r<n.length;r++){var i=n[r];return i[0]===e?i[1]:null}}},{key:"remove",value:function(e){var t=this.hashFunc(e,this.limit),n=this.storage[t];if(!n)return null;for(var r=0;r<n.length;r++){var i=n[r];return i[0]===e?(n.splice(r,1),this.count--,i[1]):null}}},{key:"isEmpty",value:function(){return 0===this.count}},{key:"size",value:function(){return this.count}}]),e}());o.put("name","Melenela"),o.put("age","25"),o.put("height","172"),o.put("address","Esdf"),console.log(o),console.log(o.get("weight")),console.log(o.get("name")),console.log(o.get("age")),console.log(o.remove("name")),console.log(o.remove("age")),console.log(o);var l={},s=n(25),u=Object(s.a)(l,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("哈希表")])])}],!1,null,null,null);t.default=u.exports}}]);