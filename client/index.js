for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var ba=m[n];ba in k||(k[ba]={});k=k[ba]}
var ca=m[m.length-1],da=k[ca],ea=da?da:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};ea!=da&&null!=ea&&aa(k,ca,{configurable:!0,writable:!0,value:ea});function p(a){return"string"==typeof a}
function q(a,b){function c(){}c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oa=function(a,c,e){for(var d=Array(arguments.length-2),f=2;f<arguments.length;f++)d[f-2]=arguments[f];return b.prototype[c].apply(a,d)}};function r(a,b){null!=a&&this.a.apply(this,arguments)}r.prototype.b="";r.prototype.set=function(a){this.b=""+a};r.prototype.a=function(a,b,c){this.b+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function u(a){a.b=""}r.prototype.toString=function(){return this.b};var fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ga=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(f[e++]=l)}return f};
function ha(a,b){a.sort(b||ia)}function ia(a,b){return a>b?1:a<b?-1:0};function ja(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function ka(a,b){this.b=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function la(a){a=ja(a.a);ha(a,function(a,c){return a.a-c.a});return a};function ma(a,b){this.a=a;this.h=!!b.w;this.b=b.c;this.l=b.type;this.j=!1;switch(this.b){case na:case oa:case pa:case qa:case ra:case sa:case ta:this.j=!0}this.f=b.defaultValue}var ta=1,sa=2,na=3,oa=4,pa=6,qa=16,ra=18;function v(){this.g={};this.b=this.i().a;this.a=this.f=null}v.prototype.has=function(a){return null!=this.g[a.a]};v.prototype.get=function(a,b){return w(this,a.a,b)};v.prototype.set=function(a,b){x(this,a.a,b)};
function ua(a,b){for(var c=la(a.i()),d=0;d<c.length;d++){var f=c[d],e=f.a;if(null!=b.g[e]){a.a&&delete a.a[f.a];var g=11==f.b||10==f.b;if(f.h)for(var f=y(b,e),h=0;h<f.length;h++){var l=a,t=e,lb=g?f[h].clone():f[h];l.g[t]||(l.g[t]=[]);l.g[t].push(lb);l.a&&delete l.a[t]}else f=z(b,e),g?(g=z(a,e))?ua(g,f):x(a,e,f.clone()):x(a,e,f)}}}v.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.g={},a.a&&(a.a={}),ua(a,this));return a};
function z(a,b){var c=a.g[b];if(null==c)return null;if(a.f){if(!(b in a.a)){var d=a.f,f=a.b[b];if(null!=c)if(f.h){for(var e=[],g=0;g<c.length;g++)e[g]=d.a(f,c[g]);c=e}else c=d.a(f,c);return a.a[b]=c}return a.a[b]}return c}function w(a,b,c){var d=z(a,b);return a.b[b].h?d[c||0]:d}function A(a,b){var c;if(null!=a.g[b])c=w(a,b,void 0);else a:{c=a.b[b];if(void 0===c.f){var d=c.l;if(d===Boolean)c.f=!1;else if(d===Number)c.f=0;else if(d===String)c.f=c.j?"0":"";else{c=new d;break a}}c=c.f}return c}
function y(a,b){return z(a,b)||[]}function B(a,b){return a.b[b].h?null!=a.g[b]?a.g[b].length:0:null!=a.g[b]?1:0}function x(a,b,c){a.g[b]=c;a.a&&(a.a[b]=c)}function C(a,b){var c=[],d;for(d in b)0!=d&&c.push(new ma(d,b[d]));return new ka(a,c)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function D(){v.call(this)}q(D,v);var va=null;function E(){v.call(this)}q(E,v);var wa=null;function F(){v.call(this)}q(F,v);var xa=null;
D.prototype.i=function(){var a=va;a||(va=a=C(D,{0:{name:"NumberFormat",ga:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",w:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return a};D.i=D.prototype.i;
E.prototype.i=function(){var a=wa;a||(wa=a=C(E,{0:{name:"PhoneNumberDesc",ga:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},9:{name:"possible_length",w:!0,c:5,type:Number},10:{name:"possible_length_local_only",w:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String}}));return a};E.i=E.prototype.i;
F.prototype.i=function(){var a=xa;a||(xa=a=C(F,{0:{name:"PhoneMetadata",ga:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:E},2:{name:"fixed_line",c:11,type:E},3:{name:"mobile",c:11,type:E},4:{name:"toll_free",c:11,type:E},5:{name:"premium_rate",c:11,type:E},6:{name:"shared_cost",c:11,type:E},7:{name:"personal_number",c:11,type:E},8:{name:"voip",c:11,type:E},21:{name:"pager",c:11,type:E},25:{name:"uan",c:11,type:E},27:{name:"emergency",c:11,type:E},28:{name:"voicemail",c:11,type:E},
24:{name:"no_international_dialling",c:11,type:E},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,
type:Boolean},19:{name:"number_format",w:!0,c:11,type:D},20:{name:"intl_number_format",w:!0,c:11,type:D},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return a};F.i=F.prototype.i;function G(){}G.prototype.b=function(a){new a.b;throw Error("Unimplemented");};G.prototype.a=function(a,b){if(11==a.b||10==a.b)return b instanceof v?b:this.b(a.l.prototype.i(),b);if(14==a.b){if(p(b)&&ya.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.j)return b;c=a.l;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&p(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||ya.test(b)))return Number(b);return b};var ya=/^-?[0-9]+$/;function za(){}q(za,G);za.prototype.b=function(a,b){var c=new a.b;c.f=this;c.g=b;c.a={};return c};function Aa(){}q(Aa,za);Aa.prototype.a=function(a,b){return 8==a.b?!!b:G.prototype.a.apply(this,arguments)};function H(){v.call(this)}var Ba;q(H,v);var Ca={na:1,ma:5,la:10,ka:20};
H.prototype.i=function(){Ba||(Ba=C(H,{0:{name:"PhoneNumber",ga:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,c:5,type:Number},2:{name:"national_number",required:!0,c:4,type:Number},3:{name:"extension",c:9,type:String},4:{name:"italian_leading_zero",c:8,type:Boolean},8:{name:"number_of_leading_zeros",c:5,defaultValue:1,type:Number},5:{name:"raw_input",c:9,type:String},6:{name:"country_code_source",c:14,defaultValue:1,type:Ca},7:{name:"preferred_domestic_carrier_code",c:9,type:String}}));
return Ba};H.ctor=H;H.ctor.i=H.prototype.i;var I,J;function K(a){I=a.countryCodeToRegionCodeMap;J=a.countryToMetadata};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function L(){this.b={}}L.a=void 0;L.b=function(){return L.a?L.a:L.a=new L};
var Da={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ea={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Fa=RegExp("[+\uff0b]+"),M=RegExp("^[+\uff0b]+"),Ga=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ha=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Ia=/[\\\/] *x/,Ja=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Ka=/(?:.*?[A-Za-z]){3}.*/,La=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ma=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Na=/(\$\d)/,Oa=/^\(?\$1\)?$/;function Pa(a){var b=a.search(Ha);0<=b?(a=a.substring(b),a=a.replace(Ja,""),b=a.search(Ia),0<=b&&(a=a.substring(0,b))):a="";return a}function Qa(a){return 2>a.length?!1:N(Ma,a)}function Ra(a){return N(Ka,a)?Sa(a,Ea):Sa(a,Da)}function Ta(a){var b=Ra(a.toString());u(a);a.a(b)}L.prototype.h=function(){return ga(Object.keys(J),function(a){return isNaN(a)})};function Ua(a){return!!a&&(1!=B(a,9)||-1!=y(a,9)[0])}
function Sa(a,b){for(var c=new r,d,f=a.length,e=0;e<f;++e)d=a.charAt(e),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function Va(a){return null!=a&&isNaN(a)&&a.toUpperCase()in J}
function Wa(a,b){var c=O;if(0==w(a,2)&&null!=a.g[5]){var d=A(a,5);if(0<d.length)return d}var d=A(a,1),f=Xa(a);if(0==b)return Ya(d,0,f,"");if(!(d in I))return f;var e=P(c,d,Q(d)),c=null!=a.g[3]&&w(a,3).length?3==b?";ext="+w(a,3):null!=e.g[13]?w(e,13)+A(a,3):" ext. "+A(a,3):"";a:{for(var e=y(e,20).length&&2!=b?y(e,20):y(e,19),g,h=e.length,l=0;l<h;++l){g=e[l];var t=B(g,3);if(!t||!f.search(w(g,3,t-1)))if(t=new RegExp(w(g,1)),N(t,f)){e=g;break a}}e=null}e&&(h=e,e=A(h,2),g=new RegExp(w(h,1)),A(h,5),h=A(h,
4),f=2==b&&null!=h&&0<h.length?f.replace(g,e.replace(Na,h)):f.replace(g,e),3==b&&(f=f.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),f=f.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return Ya(d,b,f,c)}function P(a,b,c){return"001"==c?R(a,""+b):R(a,c)}
function Xa(a){var b=""+w(a,2);return null!=a.g[4]&&w(a,4)&&0<A(a,8)?Array(A(a,8)+1).join("0")+b:b}function Ya(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}L.prototype.f=function(a,b){if(!Va(a))return null;var c=S(R(this,a),b);try{if(null!=c.g[6]){var d=w(c,6);return Za(this,d,a)}}catch(f){}return null};
function S(a,b){switch(b){case 4:return w(a,5);case 3:return w(a,4);case 1:return w(a,3);case 0:case 2:return w(a,2);case 5:return w(a,6);case 6:return w(a,8);case 7:return w(a,7);case 8:return w(a,21);case 9:return w(a,25);case 10:return w(a,28);default:return w(a,1)}}function R(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.b[b];if(!c){c=J[b];if(!c)return null;c=(new Aa).b(F.i(),c);a.b[b]=c}return c}function T(a,b){var c=a.length;return 0<B(b,9)&&-1==fa(y(b,9),c)?!1:N(A(b,2),a)}
function Q(a){return(a=I[a])?a[0]:"ZZ"}L.prototype.a=function(a){return Va(a)?$a(this,a):0};function $a(a,b){var c=R(a,b);if(!c)throw Error("Invalid region code: "+b);return A(c,10)}function ab(a){a=P(O,a,Q(a));return!!a&&A(a,26)}
function U(a,b,c,d){var f=S(c,d),e=B(f,9)?y(f,9):y(w(c,1),9),f=y(f,10);if(2==d)if(Ua(S(c,0)))a=S(c,1),Ua(a)&&(e=e.concat(B(a,9)?y(a,9):y(w(c,1),9)),ha(e),f.length?(f=f.concat(y(a,10)),ha(f)):f=y(a,10));else return U(a,b,c,1);if(-1==e[0])return 5;b=b.length;if(-1<fa(f,b))return 4;c=e[0];return c==b?0:c>b?2:e[e.length-1]<b?3:-1<fa(e,b,1)?0:5}
function bb(a,b){var c=a.toString();if(!c.length||"0"==c.charAt(0))return 0;for(var d,f=c.length,e=1;3>=e&&e<=f;++e)if(d=parseInt(c.substring(0,e),10),d in I)return b.a(c.substring(e)),d;return 0}
function cb(a,b,c,d,f){if(!b.length)return 0;b=new r(b);var e;c&&(e=w(c,11));null==e&&(e="NonMatch");var g=b.toString();if(g.length)if(M.test(g))g=g.replace(M,""),u(b),b.a(Ra(g)),e=1;else{g=new RegExp(e);Ta(b);e=b.toString();if(e.search(g))e=!1;else{var g=e.match(g)[0].length,h=e.substring(g).match(Ga);h&&null!=h[1]&&0<h[1].length&&"0"==Sa(h[1],Da)?e=!1:(u(b),b.a(e.substring(g)),e=!0)}e=e?5:20}else e=20;if(20!=e){if(2>=b.b.length)throw Error("Phone number too short after IDD");if(a=bb(b,d))return x(f,
1,a),a;throw Error("Invalid country calling code");}if(c&&(e=A(c,10),g=""+e,h=b.toString(),!h.lastIndexOf(g,0)&&(g=new r(h.substring(g.length)),h=w(c,1),h=new RegExp(A(h,2)),db(g,c,null),g=g.toString(),!N(h,b.toString())&&N(h,g)||3==U(a,b.toString(),c,-1))))return d.a(g),x(f,1,e),e;x(f,1,0);return 0}
function db(a,b,c){var d=a.toString(),f=d.length,e=w(b,15);if(f&&null!=e&&e.length){var g=new RegExp("^(?:"+e+")");if(f=g.exec(d)){var e=new RegExp(A(w(b,1),2)),h=N(e,d),l=f.length-1;b=w(b,16);if(null!=b&&b.length&&null!=f[l]&&f[l].length){if(d=d.replace(g,b),!h||N(e,d))c&&0<l&&c.a(f[1]),a.set(d)}else if(!h||N(e,d.substring(f[0].length)))c&&0<l&&null!=f[l]&&c.a(f[1]),a.set(d.substring(f[0].length))}}}
function Za(a,b,c){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var d=new r,f=b.indexOf(";phone-context=");if(0<=f){var e=f+15;if("+"==b.charAt(e)){var g=b.indexOf(";",e);0<g?d.a(b.substring(e,g)):d.a(b.substring(e))}e=b.indexOf("tel:");d.a(b.substring(0<=e?e+4:0,f))}else d.a(Pa(b));b=d.toString();f=b.indexOf(";isub=");0<f&&(u(d),d.a(b.substring(0,f)));if(!Qa(d.toString()))throw Error("The string supplied did not seem to be a phone number");
b=d.toString();if(!(Va(c)||null!=b&&0<b.length&&M.test(b)))throw Error("Invalid country calling code");b=new H;a:{f=d.toString();e=f.search(La);if(0<=e&&Qa(f.substring(0,e)))for(var g=f.match(La),h=g.length,l=1;l<h;++l)if(null!=g[l]&&0<g[l].length){u(d);d.a(f.substring(0,e));f=g[l];break a}f=""}0<f.length&&x(b,3,f);f=R(a,c);e=new r;g=0;h=d.toString();try{g=cb(a,h,f,e,b)}catch(t){if("Invalid country calling code"==t.message&&M.test(h)){if(h=h.replace(M,""),g=cb(a,h,f,e,b),!g)throw t;}else throw t;
}g?(d=Q(g),d!=c&&(f=P(a,g,d))):(Ta(d),e.a(d.toString()),null!=c&&(g=A(f,10),x(b,1,g)));if(2>e.b.length)throw Error("The string supplied is too short to be a phone number");f&&(c=new r(e.toString()),db(c,f,new r),2!=U(a,c.toString(),f,-1)&&(e=c));a=e.toString();c=a.length;if(2>c)throw Error("The string supplied is too short to be a phone number");if(17<c)throw Error("The string supplied is too long to be a phone number");if(1<a.length&&"0"==a.charAt(0)){x(b,4,!0);for(c=1;c<a.length-1&&"0"==a.charAt(c);)c++;
1!=c&&x(b,8,c)}x(b,2,parseInt(a,10));return b}function N(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function eb(a){this.ha=RegExp("\u2008");this.ca="";this.o=new r;this.$="";this.j=new r;this.v=new r;this.l=!0;this.aa=this.s=this.ea=!1;this.fa=L.b();this.u=0;this.b=new r;this.ba=!1;this.m="";this.a=new r;this.f=[];this.da=a;this.ia=this.h=fb(this,this.da)}var gb=new F;x(gb,11,"NA");
var hb=/\[([^\[\]])*\]/g,ib=/\d(?=[^,}][^,}])/g,jb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),kb=/[- ]/;function fb(a,b){var c=a.fa.a(b);return(c=R(a.fa,Q(c)))?c:gb}
function mb(a){for(var b=a.f.length,c=0;c<b;++c){var d=a.f[c],f=A(d,1);if(a.$==f)return!1;var e;e=a;var g=d,h=A(g,1);if(-1!=h.indexOf("|"))e=!1;else{h=h.replace(hb,"\\d");h=h.replace(ib,"\\d");u(e.o);var l;l=e;var g=A(g,2),t="999999999999999".match(h)[0];t.length<l.a.b.length?l="":(l=t.replace(new RegExp(h,"g"),g),l=l.replace(RegExp("9","g"),"\u2008"));0<l.length?(e.o.a(l),e=!0):e=!1}if(e)return a.$=f,a.ba=kb.test(w(d,4)),a.u=0,!0}return a.l=!1}
function nb(a,b){for(var c=[],d=b.length-3,f=a.f.length,e=0;e<f;++e){var g=a.f[e];B(g,3)?(g=w(g,3,Math.min(d,B(g,3)-1)),b.search(g)||c.push(a.f[e])):c.push(a.f[e])}a.f=c}eb.prototype.ja=function(a){return this.ca=ob(this,a)};
function ob(a,b){a.j.a(b);var c=b;if(Ga.test(c)||1==a.j.b.length&&Fa.test(c)){var c=b,d;"+"==c?(d=c,a.v.a(c)):(d=Da[c],a.v.a(d),a.a.a(d));b=d}else a.l=!1,a.ea=!0;if(!a.l){if(!a.ea)if(pb(a)){if(qb(a))return rb(a)}else if(0<a.m.length&&(c=a.a.toString(),u(a.a),a.a.a(a.m),a.a.a(c),c=a.b.toString(),d=c.lastIndexOf(a.m),u(a.b),a.b.a(c.substring(0,d))),a.m!=sb(a))return a.b.a(" "),rb(a);return a.j.toString()}switch(a.v.b.length){case 0:case 1:case 2:return a.j.toString();case 3:if(pb(a))a.aa=!0;else return a.m=
sb(a),tb(a);default:if(a.aa)return qb(a)&&(a.aa=!1),a.b.toString()+a.a.toString();if(0<a.f.length){c=ub(a,b);d=vb(a);if(0<d.length)return d;nb(a,a.a.toString());return mb(a)?wb(a):a.l?V(a,c):a.j.toString()}return tb(a)}}function rb(a){a.l=!0;a.aa=!1;a.f=[];a.u=0;u(a.o);a.$="";return tb(a)}function vb(a){for(var b=a.a.toString(),c=a.f.length,d=0;d<c;++d){var f=a.f[d],e=A(f,1);if((new RegExp("^(?:"+e+")$")).test(b))return a.ba=kb.test(w(f,4)),b=b.replace(new RegExp(e,"g"),w(f,2)),V(a,b)}return""}
function V(a,b){var c=a.b.b.length;return a.ba&&0<c&&" "!=a.b.toString().charAt(c-1)?a.b+" "+b:a.b+b}function tb(a){var b=a.a.toString();if(3<=b.length){for(var c=a.s&&0<B(a.h,20)?y(a.h,20):y(a.h,19),d=c.length,f=0;f<d;++f){var e=c[f],g;(g=null==a.h.g[12]||a.s||w(e,6))||(g=A(e,4),g=!g.length||Oa.test(g));g&&jb.test(A(e,2))&&a.f.push(e)}nb(a,b);b=vb(a);return 0<b.length?b:mb(a)?wb(a):a.j.toString()}return V(a,b)}
function wb(a){var b=a.a.toString(),c=b.length;if(0<c){for(var d="",f=0;f<c;f++)d=ub(a,b.charAt(f));return a.l?V(a,d):a.j.toString()}return a.b.toString()}
function sb(a){var b=a.a.toString(),c=0,d;1!=w(a.h,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.b.a("1").a(" "),a.s=!0):null!=a.h.g[15]&&(d=new RegExp("^(?:"+w(a.h,15)+")"),(d=b.match(d))&&null!=d[0]&&0<d[0].length&&(a.s=!0,c=d[0].length,a.b.a(b.substring(0,c))));u(a.a);a.a.a(b.substring(c));return b.substring(0,c)}
function pb(a){var b=a.v.toString(),c=new RegExp("^(?:\\+|"+w(a.h,11)+")");return(c=b.match(c))&&null!=c[0]&&0<c[0].length?(a.s=!0,c=c[0].length,u(a.a),a.a.a(b.substring(c)),u(a.b),a.b.a(b.substring(0,c)),"+"!=b.charAt(0)&&a.b.a(" "),!0):!1}function qb(a){if(!a.a.b.length)return!1;var b=new r,c=bb(a.a,b);if(!c)return!1;u(a.a);a.a.a(b.toString());b=Q(c);"001"==b?a.h=R(a.fa,""+c):b!=a.da&&(a.h=fb(a,b));a.b.a(""+c).a(" ");a.m="";return!0}
function ub(a,b){var c=a.o.toString();if(0<=c.substring(a.u).search(a.ha)){var d=c.search(a.ha),c=c.replace(a.ha,b);u(a.o);a.o.a(c);a.u=d;return c.substring(0,a.u+1)}1==a.f.length&&(a.l=!1);a.$="";return a.j.toString()};var O=L.b(),xb={e164:0,international:1,national:2,rfc3966:3},yb={FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10},zb={"Invalid country calling code":"PHONE_INVALID_COUNTRY_CODE","The string supplied is too short to be a phone number":"PHONE_NUMBER_TOO_SHORT","The string supplied is too long to be a phone number":"PHONE_NUMBER_TOO_LONG","The string supplied did not seem to be a phone number":"PHONE_NOT_A_NUMBER",
"Phone number too short after IDD":"PHONE_TOO_SHORT_AFTER_IDD"};function Ab(a){if(!Bb(a))throw Error("Invalid metadata");var b=a.regionCodes;if(!b||!Array.isArray(b)||!b.length)throw Error("Invalid metadata");if(!Bb(a.countryCodeToRegionCodeMap)||!Bb(a.countryToMetadata))throw Error("Invalid metadata");}function Bb(a){return!!a&&"[object Object]"===""+a&&a.constructor===Object}function W(a,b){if(-1===b.regionCodes.indexOf(a))throw Error("Metadata not loaded for region: "+a);}
function Cb(a){if(!a)return null;var b={countryCode:a.g[1].toString(),nationalNumber:a.g[2].toString()};a.g[4]&&ab(a.g[1])&&(b.nationalNumber="0"+b.nationalNumber);void 0!==a.g[3]&&(b.extension=a.g[3]);return b}function Db(a){var b=new H,c,d;c=Number(a.countryCode);x(b,1,c);d=a.nationalNumber;"string"===typeof d&&(c="0"===d.charAt(0)&&ab(c),x(b,4,c),d=Number(d));x(b,2,d);void 0!==a.extension&&null!==a.extension&&(a=a.extension.toString(),x(b,3,a));return b}
function Eb(a){Ab(a);return{getSupportedRegions:function(){K(a);return O.h()},getCountryCodeForRegion:function(b){K(a);W(b,a);return O.a(b)},countryCodeToRegionCodeMap:function(){K(a);return I},formatPhoneNumber:function(b,c){K(a);var d;try{d=Db(b)}catch(e){throw Error("Phone object conversion failed: "+e.message);}c=c||{};var f=xb[c.style];if(void 0===f)throw Error("Invalid style property: "+c.style);return Wa(d,f).toString()},validatePhoneNumber:function(b,c){K(a);W(c,a);var d;try{d=Db(b)}catch(l){throw Error("Phone object conversion failed: "+
l.message);}var f;var e=d,g=O,h=A(e,1);f=P(g,h,c);!f||"001"!=c&&h!=$a(g,c)?f=!1:(e=Xa(e),f=-1!=(T(e,w(f,1))?T(e,w(f,5))?4:T(e,w(f,4))?3:T(e,w(f,6))?5:T(e,w(f,8))?6:T(e,w(f,7))?7:T(e,w(f,21))?8:T(e,w(f,25))?9:T(e,w(f,28))?10:T(e,w(f,2))?w(f,18)||T(e,w(f,3))?2:0:!w(f,18)&&T(e,w(f,3))?1:-1:-1));if(f)return!0;f=O;e=d;d=Xa(e);e=A(e,1);e in I?(e=P(f,e,Q(e)),d=U(f,d,e,-1)):d=1;switch(d){case 1:d="PHONE_INVALID_COUNTRY_CODE";break;case 2:d="PHONE_NUMBER_TOO_SHORT";break;case 3:d="PHONE_NUMBER_TOO_LONG";break;
case 5:d="PHONE_NUMBER_INVALID_LENGTH";break;default:d="PHONE_INVALID_FOR_REGION"}return Error(d)},parsePhoneNumber:function(b,c){K(a);W(c,a);var d;try{d=Za(O,b,c)}catch(f){return Error(zb[f.message])}return Cb(d)},getExampleNumberForType:function(b,c){K(a);W(c,a);var d=yb[b];void 0===d&&(d=-1);return Cb(O.f(c,d))},getAsYouTypeFormatter:function(b){K(a);W(b,a);var c=new eb(b);return{inputDigit:function(a){return c.ja(a)},clear:function(){c.ca="";u(c.j);u(c.v);u(c.o);c.u=0;c.$="";u(c.b);c.m="";u(c.a);
c.l=!0;c.ea=!1;c.s=!1;c.aa=!1;c.f=[];c.ba=!1;c.h!=c.ia&&(c.h=fb(c,c.da))}}}}}var X=["createPhoneHandler"],Y=this;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var Fb;if(Fb=!X.length)Fb=void 0!==Eb;Fb?Y[Z]=Eb:Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}};
