parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a}var t=new WeakSet;class a{constructor({targetDate:e,selector:a}){t.add(this),this.targetDate=e,this.selector=a}pad(e){return String(e).padStart(2,"0")}getMarkUp(){let a=e(this,t,r).call(this);const s=document.querySelector(`${this.selector}`);s.querySelector(' [data-value="days"]').textContent=a.days,s.querySelector(' [data-value="hours"]').textContent=a.hours,s.querySelector(' [data-value="mins"]').textContent=a.mins,s.querySelector(' [data-value="secs"]').textContent=a.secs}changeTime(){setInterval(()=>{this.getMarkUp()},1e3)}}function r(){let e=new Date,t=this.targetDate-e;return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}const s=new a({selector:"#timer-1",targetDate:new Date("Jul 07, 2021")});s.getMarkUp(),s.changeTime();const n=new a({selector:"#timer-2",targetDate:new Date("Jul 07, 2022, 15:48")});n.getMarkUp(),n.changeTime();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/timer-v2/src.e0cce173.js.map