var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// ../../../../bun-vfs$$/node_modules/https/index.js
var exports_https = {};
__export(exports_https, {
  default: () => Cf
});
function oe(e) {
  throw new RangeError(Zs[e]);
}
function Js(e, t) {
  let r = [], n = e.length;
  for (;n--; )
    r[n] = t(e[n]);
  return r;
}
function vi(e, t) {
  let r = e.split("@"), n = "";
  r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(zs, ".");
  let i = e.split("."), o = Js(i, t).join(".");
  return n + o;
}
function _r(e) {
  let t = [], r = 0, n = e.length;
  for (;r < n; ) {
    let i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      let o = e.charCodeAt(r++);
      (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
var Ji, He, Qi, eo, to, ro, Cr = (e, t) => () => (e && (t = e(e = 0)), t), b = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), mt = (e, t) => {
  for (var r in t)
    He(e, r, { get: t[r], enumerable: true });
}, We = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of eo(t))
      !ro.call(e, i) && i !== r && He(e, i, { get: () => t[i], enumerable: !(n = Qi(t, i)) || n.enumerable });
  return e;
}, $e = (e, t, r) => (We(e, t, "default"), r && We(r, t, "default")), bt = (e, t, r) => (r = e != null ? Ji(to(e)) : {}, We(t || !e || !e.__esModule ? He(r, "default", { value: e, enumerable: true }) : r, e)), _t = (e) => We(He({}, "__esModule", { value: true }), e), xt, Q, Tt, At, $r, Gr, _e, qt, cn, jt, fe, Wt, _n, Kt, ue, Ln, Fn, Qt, nt, er, it, Dn, jn, Xt, hr, ri, si, dr, gr, pi, gi, mi, Ti, _i, Ys, Xs, zs, Zs, mr, K, br, Ei, Qs, bi, xi, vr, Er, Ri, Si, ef, tf, Ai, Ii, Li, ji, Ar, Vi, Ir, ke, Cf;
var init_https = __esm(() => {
  Ji = Object.create;
  He = Object.defineProperty;
  Qi = Object.getOwnPropertyDescriptor;
  eo = Object.getOwnPropertyNames;
  to = Object.getPrototypeOf;
  ro = Object.prototype.hasOwnProperty;
  xt = b((N) => {
    N.fetch = Ie(global.fetch) && Ie(global.ReadableStream);
    N.writableStream = Ie(global.WritableStream);
    N.abortController = Ie(global.AbortController);
    var J;
    function vt() {
      if (J !== undefined)
        return J;
      if (global.XMLHttpRequest) {
        J = new global.XMLHttpRequest;
        try {
          J.open("GET", global.XDomainRequest ? "/" : "https://example.com");
        } catch {
          J = null;
        }
      } else
        J = null;
      return J;
    }
    function Et(e) {
      var t = vt();
      if (!t)
        return false;
      try {
        return t.responseType = e, t.responseType === e;
      } catch {
      }
      return false;
    }
    N.arraybuffer = N.fetch || Et("arraybuffer");
    N.msstream = !N.fetch && Et("ms-stream");
    N.mozchunkedarraybuffer = !N.fetch && Et("moz-chunked-arraybuffer");
    N.overrideMimeType = N.fetch || (vt() ? Ie(vt().overrideMimeType) : false);
    function Ie(e) {
      return typeof e == "function";
    }
    J = null;
  });
  Q = b((Of, Rt) => {
    typeof Object.create == "function" ? Rt.exports = function(t, r) {
      r && (t.super_ = r, t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
    } : Rt.exports = function(t, r) {
      if (r) {
        t.super_ = r;
        var n = function() {
        };
        n.prototype = r.prototype, t.prototype = new n, t.prototype.constructor = t;
      }
    };
  });
  Tt = b((Ff, St) => {
    var ye = typeof Reflect == "object" ? Reflect : null, Lr = ye && typeof ye.apply == "function" ? ye.apply : function(t, r, n) {
      return Function.prototype.apply.call(t, r, n);
    }, Ge;
    ye && typeof ye.ownKeys == "function" ? Ge = ye.ownKeys : Object.getOwnPropertySymbols ? Ge = function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : Ge = function(t) {
      return Object.getOwnPropertyNames(t);
    };
    function no(e) {
      console && console.warn && console.warn(e);
    }
    var Or = Number.isNaN || function(t) {
      return t !== t;
    };
    function x() {
      x.init.call(this);
    }
    St.exports = x;
    St.exports.once = so;
    x.EventEmitter = x;
    x.prototype._events = undefined;
    x.prototype._eventsCount = 0;
    x.prototype._maxListeners = undefined;
    var Mr = 10;
    function Ke(e) {
      if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    Object.defineProperty(x, "defaultMaxListeners", { enumerable: true, get: function() {
      return Mr;
    }, set: function(e) {
      if (typeof e != "number" || e < 0 || Or(e))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      Mr = e;
    } });
    x.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    x.prototype.setMaxListeners = function(t) {
      if (typeof t != "number" || t < 0 || Or(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    };
    function Fr(e) {
      return e._maxListeners === undefined ? x.defaultMaxListeners : e._maxListeners;
    }
    x.prototype.getMaxListeners = function() {
      return Fr(this);
    };
    x.prototype.emit = function(t) {
      for (var r = [], n = 1;n < arguments.length; n++)
        r.push(arguments[n]);
      var i = t === "error", o = this._events;
      if (o !== undefined)
        i = i && o.error === undefined;
      else if (!i)
        return false;
      if (i) {
        var a;
        if (r.length > 0 && (a = r[0]), a instanceof Error)
          throw a;
        var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw s.context = a, s;
      }
      var u = o[t];
      if (u === undefined)
        return false;
      if (typeof u == "function")
        Lr(u, this, r);
      else
        for (var l = u.length, h = Dr(u, l), n = 0;n < l; ++n)
          Lr(h[n], this, r);
      return true;
    };
    function Nr(e, t, r, n) {
      var i, o, a;
      if (Ke(r), o = e._events, o === undefined ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== undefined && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), a === undefined)
        a = o[t] = r, ++e._eventsCount;
      else if (typeof a == "function" ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = Fr(e), i > 0 && a.length > i && !a.warned) {
        a.warned = true;
        var s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = a.length, no(s);
      }
      return e;
    }
    x.prototype.addListener = function(t, r) {
      return Nr(this, t, r, false);
    };
    x.prototype.on = x.prototype.addListener;
    x.prototype.prependListener = function(t, r) {
      return Nr(this, t, r, true);
    };
    function io() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Ur(e, t, r) {
      var n = { fired: false, wrapFn: undefined, target: e, type: t, listener: r }, i = io.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }
    x.prototype.once = function(t, r) {
      return Ke(r), this.on(t, Ur(this, t, r)), this;
    };
    x.prototype.prependOnceListener = function(t, r) {
      return Ke(r), this.prependListener(t, Ur(this, t, r)), this;
    };
    x.prototype.removeListener = function(t, r) {
      var n, i, o, a, s;
      if (Ke(r), i = this._events, i === undefined)
        return this;
      if (n = i[t], n === undefined)
        return this;
      if (n === r || n.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
      else if (typeof n != "function") {
        for (o = -1, a = n.length - 1;a >= 0; a--)
          if (n[a] === r || n[a].listener === r) {
            s = n[a].listener, o = a;
            break;
          }
        if (o < 0)
          return this;
        o === 0 ? n.shift() : oo(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== undefined && this.emit("removeListener", t, s || r);
      }
      return this;
    };
    x.prototype.off = x.prototype.removeListener;
    x.prototype.removeAllListeners = function(t) {
      var r, n, i;
      if (n = this._events, n === undefined)
        return this;
      if (n.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
      if (arguments.length === 0) {
        var o = Object.keys(n), a;
        for (i = 0;i < o.length; ++i)
          a = o[i], a !== "removeListener" && this.removeAllListeners(a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (r = n[t], typeof r == "function")
        this.removeListener(t, r);
      else if (r !== undefined)
        for (i = r.length - 1;i >= 0; i--)
          this.removeListener(t, r[i]);
      return this;
    };
    function Pr(e, t, r) {
      var n = e._events;
      if (n === undefined)
        return [];
      var i = n[t];
      return i === undefined ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? ao(i) : Dr(i, i.length);
    }
    x.prototype.listeners = function(t) {
      return Pr(this, t, true);
    };
    x.prototype.rawListeners = function(t) {
      return Pr(this, t, false);
    };
    x.listenerCount = function(e, t) {
      return typeof e.listenerCount == "function" ? e.listenerCount(t) : qr.call(e, t);
    };
    x.prototype.listenerCount = qr;
    function qr(e) {
      var t = this._events;
      if (t !== undefined) {
        var r = t[e];
        if (typeof r == "function")
          return 1;
        if (r !== undefined)
          return r.length;
      }
      return 0;
    }
    x.prototype.eventNames = function() {
      return this._eventsCount > 0 ? Ge(this._events) : [];
    };
    function Dr(e, t) {
      for (var r = new Array(t), n = 0;n < t; ++n)
        r[n] = e[n];
      return r;
    }
    function oo(e, t) {
      for (;t + 1 < e.length; t++)
        e[t] = e[t + 1];
      e.pop();
    }
    function ao(e) {
      for (var t = new Array(e.length), r = 0;r < t.length; ++r)
        t[r] = e[r].listener || e[r];
      return t;
    }
    function so(e, t) {
      return new Promise(function(r, n) {
        function i(a) {
          e.removeListener(t, o), n(a);
        }
        function o() {
          typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
        }
        kr(e, t, o, { once: true }), t !== "error" && fo(e, i, { once: true });
      });
    }
    function fo(e, t, r) {
      typeof e.on == "function" && kr(e, "error", t, r);
    }
    function kr(e, t, r, n) {
      if (typeof e.on == "function")
        n.once ? e.once(t, r) : e.on(t, r);
      else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function i(o) {
          n.once && e.removeEventListener(t, i), r(o);
        });
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    }
  });
  At = b((Nf, jr) => {
    jr.exports = Tt().EventEmitter;
  });
  $r = b((Ve) => {
    Ve.byteLength = lo;
    Ve.toByteArray = co;
    Ve.fromByteArray = go;
    var W = [], U = [], uo = typeof Uint8Array < "u" ? Uint8Array : Array, Bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ae = 0, Wr = Bt.length;ae < Wr; ++ae)
      W[ae] = Bt[ae], U[Bt.charCodeAt(ae)] = ae;
    var ae, Wr;
    U[45] = 62;
    U[95] = 63;
    function Hr(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var n = r === t ? 0 : 4 - r % 4;
      return [r, n];
    }
    function lo(e) {
      var t = Hr(e), r = t[0], n = t[1];
      return (r + n) * 3 / 4 - n;
    }
    function ho(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function co(e) {
      var t, r = Hr(e), n = r[0], i = r[1], o = new uo(ho(e, n, i)), a = 0, s = i > 0 ? n - 4 : n, u;
      for (u = 0;u < s; u += 4)
        t = U[e.charCodeAt(u)] << 18 | U[e.charCodeAt(u + 1)] << 12 | U[e.charCodeAt(u + 2)] << 6 | U[e.charCodeAt(u + 3)], o[a++] = t >> 16 & 255, o[a++] = t >> 8 & 255, o[a++] = t & 255;
      return i === 2 && (t = U[e.charCodeAt(u)] << 2 | U[e.charCodeAt(u + 1)] >> 4, o[a++] = t & 255), i === 1 && (t = U[e.charCodeAt(u)] << 10 | U[e.charCodeAt(u + 1)] << 4 | U[e.charCodeAt(u + 2)] >> 2, o[a++] = t >> 8 & 255, o[a++] = t & 255), o;
    }
    function po(e) {
      return W[e >> 18 & 63] + W[e >> 12 & 63] + W[e >> 6 & 63] + W[e & 63];
    }
    function yo(e, t, r) {
      for (var n, i = [], o = t;o < r; o += 3)
        n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(po(n));
      return i.join("");
    }
    function go(e) {
      for (var t, r = e.length, n = r % 3, i = [], o = 16383, a = 0, s = r - n;a < s; a += o)
        i.push(yo(e, a, a + o > s ? s : a + o));
      return n === 1 ? (t = e[r - 1], i.push(W[t >> 2] + W[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(W[t >> 10] + W[t >> 4 & 63] + W[t << 2 & 63] + "=")), i.join("");
    }
  });
  Gr = b((It) => {
    It.read = function(e, t, r, n, i) {
      var o, a, s = i * 8 - n - 1, u = (1 << s) - 1, l = u >> 1, h = -7, c = r ? i - 1 : 0, d = r ? -1 : 1, p = e[t + c];
      for (c += d, o = p & (1 << -h) - 1, p >>= -h, h += s;h > 0; o = o * 256 + e[t + c], c += d, h -= 8)
        ;
      for (a = o & (1 << -h) - 1, o >>= -h, h += n;h > 0; a = a * 256 + e[t + c], c += d, h -= 8)
        ;
      if (o === 0)
        o = 1 - l;
      else {
        if (o === u)
          return a ? NaN : (p ? -1 : 1) * (1 / 0);
        a = a + Math.pow(2, n), o = o - l;
      }
      return (p ? -1 : 1) * a * Math.pow(2, o - n);
    };
    It.write = function(e, t, r, n, i, o) {
      var a, s, u, l = o * 8 - i - 1, h = (1 << l) - 1, c = h >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, g = n ? 1 : -1, E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + c >= 1 ? t += d / u : t += d * Math.pow(2, 1 - c), t * u >= 2 && (a++, u /= 2), a + c >= h ? (s = 0, a = h) : a + c >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a = a + c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, i), a = 0));i >= 8; e[r + p] = s & 255, p += g, s /= 256, i -= 8)
        ;
      for (a = a << i | s, l += i;l > 0; e[r + p] = a & 255, p += g, a /= 256, l -= 8)
        ;
      e[r + p - g] |= E * 128;
    };
  });
  _e = b((be) => {
    var Ct = $r(), we = Gr(), Kr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    be.Buffer = f;
    be.SlowBuffer = Eo;
    be.INSPECT_MAX_BYTES = 50;
    var Ye = 2147483647;
    be.kMaxLength = Ye;
    f.TYPED_ARRAY_SUPPORT = wo();
    !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function wo() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(f.prototype, "parent", { enumerable: true, get: function() {
      if (!!f.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(f.prototype, "offset", { enumerable: true, get: function() {
      if (!!f.isBuffer(this))
        return this.byteOffset;
    } });
    function X(e) {
      if (e > Ye)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, f.prototype), t;
    }
    function f(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return Ft(e);
      }
      return zr(e, t, r);
    }
    f.poolSize = 8192;
    function zr(e, t, r) {
      if (typeof e == "string")
        return bo(e, t);
      if (ArrayBuffer.isView(e))
        return _o(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (H(e, ArrayBuffer) || e && H(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(e, SharedArrayBuffer) || e && H(e.buffer, SharedArrayBuffer)))
        return Mt(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return f.from(n, t, r);
      let i = vo(e);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return f.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    f.from = function(e, t, r) {
      return zr(e, t, r);
    };
    Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(f, Uint8Array);
    function Zr(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function mo(e, t, r) {
      return Zr(e), e <= 0 ? X(e) : t !== undefined ? typeof r == "string" ? X(e).fill(t, r) : X(e).fill(t) : X(e);
    }
    f.alloc = function(e, t, r) {
      return mo(e, t, r);
    };
    function Ft(e) {
      return Zr(e), X(e < 0 ? 0 : Nt(e) | 0);
    }
    f.allocUnsafe = function(e) {
      return Ft(e);
    };
    f.allocUnsafeSlow = function(e) {
      return Ft(e);
    };
    function bo(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !f.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = Jr(e, t) | 0, n = X(r), i = n.write(e, t);
      return i !== r && (n = n.slice(0, i)), n;
    }
    function Lt(e) {
      let t = e.length < 0 ? 0 : Nt(e.length) | 0, r = X(t);
      for (let n = 0;n < t; n += 1)
        r[n] = e[n] & 255;
      return r;
    }
    function _o(e) {
      if (H(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Mt(t.buffer, t.byteOffset, t.byteLength);
      }
      return Lt(e);
    }
    function Mt(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return t === undefined && r === undefined ? n = new Uint8Array(e) : r === undefined ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, f.prototype), n;
    }
    function vo(e) {
      if (f.isBuffer(e)) {
        let t = Nt(e.length) | 0, r = X(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || Pt(e.length) ? X(0) : Lt(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return Lt(e.data);
    }
    function Nt(e) {
      if (e >= Ye)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Ye.toString(16) + " bytes");
      return e | 0;
    }
    function Eo(e) {
      return +e != e && (e = 0), f.alloc(+e);
    }
    f.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== f.prototype;
    };
    f.compare = function(t, r) {
      if (H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), H(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)), !f.isBuffer(t) || !f.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let n = t.length, i = r.length;
      for (let o = 0, a = Math.min(n, i);o < a; ++o)
        if (t[o] !== r[o]) {
          n = t[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    };
    f.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    f.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return f.alloc(0);
      let n;
      if (r === undefined)
        for (r = 0, n = 0;n < t.length; ++n)
          r += t[n].length;
      let i = f.allocUnsafe(r), o = 0;
      for (n = 0;n < t.length; ++n) {
        let a = t[n];
        if (H(a, Uint8Array))
          o + a.length > i.length ? (f.isBuffer(a) || (a = f.from(a)), a.copy(i, o)) : Uint8Array.prototype.set.call(i, a, o);
        else if (f.isBuffer(a))
          a.copy(i, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += a.length;
      }
      return i;
    };
    function Jr(e, t) {
      if (f.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || H(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && r === 0)
        return 0;
      let i = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return Ot(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return fn(e).length;
          default:
            if (i)
              return n ? -1 : Ot(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
    }
    f.byteLength = Jr;
    function xo(e, t, r) {
      let n = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return Oo(this, t, r);
          case "utf8":
          case "utf-8":
            return en(this, t, r);
          case "ascii":
            return Lo(this, t, r);
          case "latin1":
          case "binary":
            return Mo(this, t, r);
          case "base64":
            return Io(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Fo(this, t, r);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    f.prototype._isBuffer = true;
    function se(e, t, r) {
      let n = e[t];
      e[t] = e[r], e[r] = n;
    }
    f.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        se(this, r, r + 1);
      return this;
    };
    f.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        se(this, r, r + 3), se(this, r + 1, r + 2);
      return this;
    };
    f.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        se(this, r, r + 7), se(this, r + 1, r + 6), se(this, r + 2, r + 5), se(this, r + 3, r + 4);
      return this;
    };
    f.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? en(this, 0, t) : xo.apply(this, arguments);
    };
    f.prototype.toLocaleString = f.prototype.toString;
    f.prototype.equals = function(t) {
      if (!f.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : f.compare(this, t) === 0;
    };
    f.prototype.inspect = function() {
      let t = "", r = be.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    Kr && (f.prototype[Kr] = f.prototype.inspect);
    f.prototype.compare = function(t, r, n, i, o) {
      if (H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), n === undefined && (n = t ? t.length : 0), i === undefined && (i = 0), o === undefined && (o = this.length), r < 0 || n > t.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t)
        return 0;
      let a = o - i, s = n - r, u = Math.min(a, s), l = this.slice(i, o), h = t.slice(r, n);
      for (let c = 0;c < u; ++c)
        if (l[c] !== h[c]) {
          a = l[c], s = h[c];
          break;
        }
      return a < s ? -1 : s < a ? 1 : 0;
    };
    function Qr(e, t, r, n, i) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Pt(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (i)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = f.from(t, n)), f.isBuffer(t))
        return t.length === 0 ? -1 : Vr(e, t, r, n, i);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : Vr(e, [t], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Vr(e, t, r, n, i) {
      let o = 1, a = e.length, s = t.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, a /= 2, s /= 2, r /= 2;
      }
      function u(h, c) {
        return o === 1 ? h[c] : h.readUInt16BE(c * o);
      }
      let l;
      if (i) {
        let h = -1;
        for (l = r;l < a; l++)
          if (u(e, l) === u(t, h === -1 ? 0 : l - h)) {
            if (h === -1 && (h = l), l - h + 1 === s)
              return h * o;
          } else
            h !== -1 && (l -= l - h), h = -1;
      } else
        for (r + s > a && (r = a - s), l = r;l >= 0; l--) {
          let h = true;
          for (let c = 0;c < s; c++)
            if (u(e, l + c) !== u(t, c)) {
              h = false;
              break;
            }
          if (h)
            return l;
        }
      return -1;
    }
    f.prototype.includes = function(t, r, n) {
      return this.indexOf(t, r, n) !== -1;
    };
    f.prototype.indexOf = function(t, r, n) {
      return Qr(this, t, r, n, true);
    };
    f.prototype.lastIndexOf = function(t, r, n) {
      return Qr(this, t, r, n, false);
    };
    function Ro(e, t, r, n) {
      r = Number(r) || 0;
      let i = e.length - r;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let o = t.length;
      n > o / 2 && (n = o / 2);
      let a;
      for (a = 0;a < n; ++a) {
        let s = parseInt(t.substr(a * 2, 2), 16);
        if (Pt(s))
          return a;
        e[r + a] = s;
      }
      return a;
    }
    function So(e, t, r, n) {
      return Xe(Ot(t, e.length - r), e, r, n);
    }
    function To(e, t, r, n) {
      return Xe(qo(t), e, r, n);
    }
    function Ao(e, t, r, n) {
      return Xe(fn(t), e, r, n);
    }
    function Bo(e, t, r, n) {
      return Xe(Do(t, e.length - r), e, r, n);
    }
    f.prototype.write = function(t, r, n, i) {
      if (r === undefined)
        i = "utf8", n = this.length, r = 0;
      else if (n === undefined && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(n) ? (n = n >>> 0, i === undefined && (i = "utf8")) : (i = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((n === undefined || n > o) && (n = o), t.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let a = false;
      for (;; )
        switch (i) {
          case "hex":
            return Ro(this, t, r, n);
          case "utf8":
          case "utf-8":
            return So(this, t, r, n);
          case "ascii":
          case "latin1":
          case "binary":
            return To(this, t, r, n);
          case "base64":
            return Ao(this, t, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Bo(this, t, r, n);
          default:
            if (a)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), a = true;
        }
    };
    f.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Io(e, t, r) {
      return t === 0 && r === e.length ? Ct.fromByteArray(e) : Ct.fromByteArray(e.slice(t, r));
    }
    function en(e, t, r) {
      r = Math.min(e.length, r);
      let n = [], i = t;
      for (;i < r; ) {
        let o = e[i], a = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + s <= r) {
          let u, l, h, c;
          switch (s) {
            case 1:
              o < 128 && (a = o);
              break;
            case 2:
              u = e[i + 1], (u & 192) === 128 && (c = (o & 31) << 6 | u & 63, c > 127 && (a = c));
              break;
            case 3:
              u = e[i + 1], l = e[i + 2], (u & 192) === 128 && (l & 192) === 128 && (c = (o & 15) << 12 | (u & 63) << 6 | l & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
              break;
            case 4:
              u = e[i + 1], l = e[i + 2], h = e[i + 3], (u & 192) === 128 && (l & 192) === 128 && (h & 192) === 128 && (c = (o & 15) << 18 | (u & 63) << 12 | (l & 63) << 6 | h & 63, c > 65535 && c < 1114112 && (a = c));
          }
        }
        a === null ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), n.push(a), i += s;
      }
      return Co(n);
    }
    var Yr = 4096;
    function Co(e) {
      let t = e.length;
      if (t <= Yr)
        return String.fromCharCode.apply(String, e);
      let r = "", n = 0;
      for (;n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, n += Yr));
      return r;
    }
    function Lo(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function Mo(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function Oo(e, t, r) {
      let n = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
      let i = "";
      for (let o = t;o < r; ++o)
        i += ko[e[o]];
      return i;
    }
    function Fo(e, t, r) {
      let n = e.slice(t, r), i = "";
      for (let o = 0;o < n.length - 1; o += 2)
        i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    f.prototype.slice = function(t, r) {
      let n = this.length;
      t = ~~t, r = r === undefined ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
      let i = this.subarray(t, r);
      return Object.setPrototypeOf(i, f.prototype), i;
    };
    function I(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    f.prototype.readUintLE = f.prototype.readUIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || I(t, r, this.length);
      let i = this[t], o = 1, a = 0;
      for (;++a < r && (o *= 256); )
        i += this[t + a] * o;
      return i;
    };
    f.prototype.readUintBE = f.prototype.readUIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || I(t, r, this.length);
      let i = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        i += this[t + --r] * o;
      return i;
    };
    f.prototype.readUint8 = f.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || I(t, 1, this.length), this[t];
    };
    f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || I(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || I(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    f.prototype.readBigUInt64LE = ee(function(t) {
      t = t >>> 0, me(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ce(t, this.length - 8);
      let i = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(o) << BigInt(32));
    });
    f.prototype.readBigUInt64BE = ee(function(t) {
      t = t >>> 0, me(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ce(t, this.length - 8);
      let i = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(o);
    });
    f.prototype.readIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || I(t, r, this.length);
      let i = this[t], o = 1, a = 0;
      for (;++a < r && (o *= 256); )
        i += this[t + a] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    };
    f.prototype.readIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || I(t, r, this.length);
      let i = r, o = 1, a = this[t + --i];
      for (;i > 0 && (o *= 256); )
        a += this[t + --i] * o;
      return o *= 128, a >= o && (a -= Math.pow(2, 8 * r)), a;
    };
    f.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || I(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    f.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || I(t, 2, this.length);
      let n = this[t] | this[t + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    f.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || I(t, 2, this.length);
      let n = this[t + 1] | this[t] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    f.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    f.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    f.prototype.readBigInt64LE = ee(function(t) {
      t = t >>> 0, me(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ce(t, this.length - 8);
      let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    f.prototype.readBigInt64BE = ee(function(t) {
      t = t >>> 0, me(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ce(t, this.length - 8);
      let i = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n);
    });
    f.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), we.read(this, t, true, 23, 4);
    };
    f.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || I(t, 4, this.length), we.read(this, t, false, 23, 4);
    };
    f.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || I(t, 8, this.length), we.read(this, t, true, 52, 8);
    };
    f.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || I(t, 8, this.length), we.read(this, t, false, 52, 8);
    };
    function O(e, t, r, n, i, o) {
      if (!f.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + n > e.length)
        throw new RangeError("Index out of range");
    }
    f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let s = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, s, 0);
      }
      let o = 1, a = 0;
      for (this[r] = t & 255;++a < n && (o *= 256); )
        this[r + a] = t / o & 255;
      return r + n;
    };
    f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let s = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, s, 0);
      }
      let o = n - 1, a = 1;
      for (this[r + o] = t & 255;--o >= 0 && (a *= 256); )
        this[r + o] = t / a & 255;
      return r + n;
    };
    f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function tn(e, t, r, n, i) {
      sn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let a = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = a, a = a >> 8, e[r++] = a, a = a >> 8, e[r++] = a, a = a >> 8, e[r++] = a, r;
    }
    function rn(e, t, r, n, i) {
      sn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let a = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = a, a = a >> 8, e[r + 2] = a, a = a >> 8, e[r + 1] = a, a = a >> 8, e[r] = a, r + 8;
    }
    f.prototype.writeBigUInt64LE = ee(function(t, r = 0) {
      return tn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    f.prototype.writeBigUInt64BE = ee(function(t, r = 0) {
      return rn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    f.prototype.writeIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let u = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, u - 1, -u);
      }
      let o = 0, a = 1, s = 0;
      for (this[r] = t & 255;++o < n && (a *= 256); )
        t < 0 && s === 0 && this[r + o - 1] !== 0 && (s = 1), this[r + o] = (t / a >> 0) - s & 255;
      return r + n;
    };
    f.prototype.writeIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let u = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, u - 1, -u);
      }
      let o = n - 1, a = 1, s = 0;
      for (this[r + o] = t & 255;--o >= 0 && (a *= 256); )
        t < 0 && s === 0 && this[r + o + 1] !== 0 && (s = 1), this[r + o] = (t / a >> 0) - s & 255;
      return r + n;
    };
    f.prototype.writeInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    f.prototype.writeInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    f.prototype.writeInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    f.prototype.writeInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    f.prototype.writeInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    f.prototype.writeBigInt64LE = ee(function(t, r = 0) {
      return tn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    f.prototype.writeBigInt64BE = ee(function(t, r = 0) {
      return rn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function nn(e, t, r, n, i, o) {
      if (r + n > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function on(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || nn(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), we.write(e, t, r, n, 23, 4), r + 4;
    }
    f.prototype.writeFloatLE = function(t, r, n) {
      return on(this, t, r, true, n);
    };
    f.prototype.writeFloatBE = function(t, r, n) {
      return on(this, t, r, false, n);
    };
    function an(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || nn(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), we.write(e, t, r, n, 52, 8), r + 8;
    }
    f.prototype.writeDoubleLE = function(t, r, n) {
      return an(this, t, r, true, n);
    };
    f.prototype.writeDoubleBE = function(t, r, n) {
      return an(this, t, r, false, n);
    };
    f.prototype.copy = function(t, r, n, i) {
      if (!f.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
      let o = i - n;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), r), o;
    };
    f.prototype.fill = function(t, r, n, i) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== undefined && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !f.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (t.length === 1) {
          let a = t.charCodeAt(0);
          (i === "utf8" && a < 128 || i === "latin1") && (t = a);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === undefined ? this.length : n >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < n; ++o)
          this[o] = t;
      else {
        let a = f.isBuffer(t) ? t : f.from(t, i), s = a.length;
        if (s === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < n - r; ++o)
          this[o + r] = a[o % s];
      }
      return this;
    };
    var ge = {};
    function Ut(e, t, r) {
      ge[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(i) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: i, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    Ut("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    Ut("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    Ut("ERR_OUT_OF_RANGE", function(e, t, r) {
      let n = `The value of "${e}" is out of range.`, i = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = Xr(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = Xr(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
    }, RangeError);
    function Xr(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function No(e, t, r) {
      me(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && Ce(t, e.length - (r + 1));
    }
    function sn(e, t, r, n, i, o) {
      if (e > r || e < t) {
        let a = typeof t == "bigint" ? "n" : "", s;
        throw o > 3 ? t === 0 || t === BigInt(0) ? s = `>= 0${a} and < 2${a} ** ${(o + 1) * 8}${a}` : s = `>= -(2${a} ** ${(o + 1) * 8 - 1}${a}) and < 2 ** ${(o + 1) * 8 - 1}${a}` : s = `>= ${t}${a} and <= ${r}${a}`, new ge.ERR_OUT_OF_RANGE("value", s, e);
      }
      No(n, i, o);
    }
    function me(e, t) {
      if (typeof e != "number")
        throw new ge.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function Ce(e, t, r) {
      throw Math.floor(e) !== e ? (me(e, r), new ge.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new ge.ERR_BUFFER_OUT_OF_BOUNDS : new ge.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var Uo = /[^+/0-9A-Za-z-_]/g;
    function Po(e) {
      if (e = e.split("=")[0], e = e.trim().replace(Uo, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function Ot(e, t) {
      t = t || 1 / 0;
      let r, n = e.length, i = null, o = [];
      for (let a = 0;a < n; ++a) {
        if (r = e.charCodeAt(a), r > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (a + 1 === n) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = (i - 55296 << 10 | r - 56320) + 65536;
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function qo(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function Do(e, t) {
      let r, n, i, o = [];
      for (let a = 0;a < e.length && !((t -= 2) < 0); ++a)
        r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
      return o;
    }
    function fn(e) {
      return Ct.toByteArray(Po(e));
    }
    function Xe(e, t, r, n) {
      let i;
      for (i = 0;i < n && !(i + r >= t.length || i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function H(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function Pt(e) {
      return e !== e;
    }
    var ko = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let n = r * 16;
        for (let i = 0;i < 16; ++i)
          t[n + i] = e[r] + e[i];
      }
      return t;
    }();
    function ee(e) {
      return typeof BigInt > "u" ? jo : e;
    }
    function jo() {
      throw new Error("BigInt not supported");
    }
  });
  qt = b(() => {
  });
  cn = b((Wf, hn) => {
    function un(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })), r.push.apply(r, n);
      }
      return r;
    }
    function Wo(e) {
      for (var t = 1;t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? un(Object(r), true).forEach(function(n) {
          Ho(e, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : un(Object(r)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
      }
      return e;
    }
    function Ho(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
    }
    function $o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ln(e, t) {
      for (var r = 0;r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
      }
    }
    function Go(e, t, r) {
      return t && ln(e.prototype, t), r && ln(e, r), e;
    }
    var Ko = _e(), ze = Ko.Buffer, Vo = qt(), Dt = Vo.inspect, Yo = Dt && Dt.custom || "inspect";
    function Xo(e, t, r) {
      ze.prototype.copy.call(e, t, r);
    }
    hn.exports = function() {
      function e() {
        $o(this, e), this.head = null, this.tail = null, this.length = 0;
      }
      return Go(e, [{ key: "push", value: function(r) {
        var n = { data: r, next: null };
        this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
      } }, { key: "unshift", value: function(r) {
        var n = { data: r, next: this.head };
        this.length === 0 && (this.tail = n), this.head = n, ++this.length;
      } }, { key: "shift", value: function() {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      } }, { key: "clear", value: function() {
        this.head = this.tail = null, this.length = 0;
      } }, { key: "join", value: function(r) {
        if (this.length === 0)
          return "";
        for (var n = this.head, i = "" + n.data;n = n.next; )
          i += r + n.data;
        return i;
      } }, { key: "concat", value: function(r) {
        if (this.length === 0)
          return ze.alloc(0);
        for (var n = ze.allocUnsafe(r >>> 0), i = this.head, o = 0;i; )
          Xo(i.data, n, o), o += i.data.length, i = i.next;
        return n;
      } }, { key: "consume", value: function(r, n) {
        var i;
        return r < this.head.data.length ? (i = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? i = this.shift() : i = n ? this._getString(r) : this._getBuffer(r), i;
      } }, { key: "first", value: function() {
        return this.head.data;
      } }, { key: "_getString", value: function(r) {
        var n = this.head, i = 1, o = n.data;
        for (r -= o.length;n = n.next; ) {
          var a = n.data, s = r > a.length ? a.length : r;
          if (s === a.length ? o += a : o += a.slice(0, r), r -= s, r === 0) {
            s === a.length ? (++i, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = a.slice(s));
            break;
          }
          ++i;
        }
        return this.length -= i, o;
      } }, { key: "_getBuffer", value: function(r) {
        var n = ze.allocUnsafe(r), i = this.head, o = 1;
        for (i.data.copy(n), r -= i.data.length;i = i.next; ) {
          var a = i.data, s = r > a.length ? a.length : r;
          if (a.copy(n, n.length - r, 0, s), r -= s, r === 0) {
            s === a.length ? (++o, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = a.slice(s));
            break;
          }
          ++o;
        }
        return this.length -= o, n;
      } }, { key: Yo, value: function(r, n) {
        return Dt(this, Wo({}, n, { depth: 0, customInspect: false }));
      } }]), e;
    }();
  });
  jt = b((Hf, pn) => {
    function zo(e, t) {
      var r = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed;
      return n || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(kt, this, e)) : process.nextTick(kt, this, e)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(e || null, function(o) {
        !t && o ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Ze, r) : (r._writableState.errorEmitted = true, process.nextTick(dn, r, o)) : process.nextTick(dn, r, o) : t ? (process.nextTick(Ze, r), t(o)) : process.nextTick(Ze, r);
      }), this);
    }
    function dn(e, t) {
      kt(e, t), Ze(e);
    }
    function Ze(e) {
      e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
    }
    function Zo() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function kt(e, t) {
      e.emit("error", t);
    }
    function Jo(e, t) {
      var { _readableState: r, _writableState: n } = e;
      r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
    }
    pn.exports = { destroy: zo, undestroy: Zo, errorOrDestroy: Jo };
  });
  fe = b(($f, wn) => {
    function Qo(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
    }
    var gn = {};
    function P(e, t, r) {
      r || (r = Error);
      function n(o, a, s) {
        return typeof t == "string" ? t : t(o, a, s);
      }
      var i = function(o) {
        Qo(a, o);
        function a(s, u, l) {
          return o.call(this, n(s, u, l)) || this;
        }
        return a;
      }(r);
      i.prototype.name = r.name, i.prototype.code = e, gn[e] = i;
    }
    function yn(e, t) {
      if (Array.isArray(e)) {
        var r = e.length;
        return e = e.map(function(n) {
          return String(n);
        }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
      } else
        return "of ".concat(t, " ").concat(String(e));
    }
    function ea(e, t, r) {
      return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
    }
    function ta(e, t, r) {
      return (r === undefined || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
    }
    function ra(e, t, r) {
      return typeof r != "number" && (r = 0), r + t.length > e.length ? false : e.indexOf(t, r) !== -1;
    }
    P("ERR_INVALID_OPT_VALUE", function(e, t) {
      return 'The value "' + t + '" is invalid for option "' + e + '"';
    }, TypeError);
    P("ERR_INVALID_ARG_TYPE", function(e, t, r) {
      var n;
      typeof t == "string" && ea(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
      var i;
      if (ta(e, " argument"))
        i = "The ".concat(e, " ").concat(n, " ").concat(yn(t, "type"));
      else {
        var o = ra(e, ".") ? "property" : "argument";
        i = 'The "'.concat(e, '" ').concat(o, " ").concat(n, " ").concat(yn(t, "type"));
      }
      return i += ". Received type ".concat(typeof r), i;
    }, TypeError);
    P("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    P("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
      return "The " + e + " method is not implemented";
    });
    P("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    P("ERR_STREAM_DESTROYED", function(e) {
      return "Cannot call " + e + " after a stream was destroyed";
    });
    P("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    P("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    P("ERR_STREAM_WRITE_AFTER_END", "write after end");
    P("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    P("ERR_UNKNOWN_ENCODING", function(e) {
      return "Unknown encoding: " + e;
    }, TypeError);
    P("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    wn.exports.codes = gn;
  });
  Wt = b((Gf, mn) => {
    var na = fe().codes.ERR_INVALID_OPT_VALUE;
    function ia(e, t, r) {
      return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
    }
    function oa(e, t, r, n) {
      var i = ia(t, n, r);
      if (i != null) {
        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
          var o = n ? r : "highWaterMark";
          throw new na(o, i);
        }
        return Math.floor(i);
      }
      return e.objectMode ? 16 : 16 * 1024;
    }
    mn.exports = { getHighWaterMark: oa };
  });
  _n = b((Kf, bn) => {
    bn.exports = aa;
    function aa(e, t) {
      if (Ht("noDeprecation"))
        return e;
      var r = false;
      function n() {
        if (!r) {
          if (Ht("throwDeprecation"))
            throw new Error(t);
          Ht("traceDeprecation") ? console.trace(t) : console.warn(t), r = true;
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function Ht(e) {
      try {
        if (!global.localStorage)
          return false;
      } catch {
        return false;
      }
      var t = global.localStorage[e];
      return t == null ? false : String(t).toLowerCase() === "true";
    }
  });
  Kt = b((Vf, Tn) => {
    Tn.exports = A;
    function En(e) {
      var t = this;
      this.next = null, this.entry = null, this.finish = function() {
        Oa(t, e);
      };
    }
    var ve;
    A.WritableState = Me;
    var sa = { deprecate: _n() }, xn = At(), Qe = _e().Buffer, fa = global.Uint8Array || function() {
    };
    function ua(e) {
      return Qe.from(e);
    }
    function la(e) {
      return Qe.isBuffer(e) || e instanceof fa;
    }
    var Gt = jt(), ha = Wt(), ca = ha.getHighWaterMark, te = fe().codes, da = te.ERR_INVALID_ARG_TYPE, pa = te.ERR_METHOD_NOT_IMPLEMENTED, ya = te.ERR_MULTIPLE_CALLBACK, ga = te.ERR_STREAM_CANNOT_PIPE, wa = te.ERR_STREAM_DESTROYED, ma = te.ERR_STREAM_NULL_VALUES, ba = te.ERR_STREAM_WRITE_AFTER_END, _a = te.ERR_UNKNOWN_ENCODING, Ee = Gt.errorOrDestroy;
    Q()(A, xn);
    function va() {
    }
    function Me(e, t, r) {
      ve = ve || ue(), e = e || {}, typeof r != "boolean" && (r = t instanceof ve), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = ca(this, e, "writableHighWaterMark", r), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var n = e.decodeStrings === false;
      this.decodeStrings = !n, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(i) {
        Ba(t, i);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = e.emitClose !== false, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new En(this);
    }
    Me.prototype.getBuffer = function() {
      for (var t = this.bufferedRequest, r = [];t; )
        r.push(t), t = t.next;
      return r;
    };
    (function() {
      try {
        Object.defineProperty(Me.prototype, "buffer", { get: sa.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
      } catch {
      }
    })();
    var Je;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Je = Function.prototype[Symbol.hasInstance], Object.defineProperty(A, Symbol.hasInstance, { value: function(t) {
      return Je.call(this, t) ? true : this !== A ? false : t && t._writableState instanceof Me;
    } })) : Je = function(t) {
      return t instanceof this;
    };
    function A(e) {
      ve = ve || ue();
      var t = this instanceof ve;
      if (!t && !Je.call(A, this))
        return new A(e);
      this._writableState = new Me(e, this, t), this.writable = true, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final)), xn.call(this);
    }
    A.prototype.pipe = function() {
      Ee(this, new ga);
    };
    function Ea(e, t) {
      var r = new ba;
      Ee(e, r), process.nextTick(t, r);
    }
    function xa(e, t, r, n) {
      var i;
      return r === null ? i = new ma : typeof r != "string" && !t.objectMode && (i = new da("chunk", ["string", "Buffer"], r)), i ? (Ee(e, i), process.nextTick(n, i), false) : true;
    }
    A.prototype.write = function(e, t, r) {
      var n = this._writableState, i = false, o = !n.objectMode && la(e);
      return o && !Qe.isBuffer(e) && (e = ua(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = n.defaultEncoding), typeof r != "function" && (r = va), n.ending ? Ea(this, r) : (o || xa(this, n, e, r)) && (n.pendingcb++, i = Sa(this, n, o, e, t, r)), i;
    };
    A.prototype.cork = function() {
      this._writableState.corked++;
    };
    A.prototype.uncork = function() {
      var e = this._writableState;
      e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && Rn(this, e));
    };
    A.prototype.setDefaultEncoding = function(t) {
      if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
        throw new _a(t);
      return this._writableState.defaultEncoding = t, this;
    };
    Object.defineProperty(A.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    function Ra(e, t, r) {
      return !e.objectMode && e.decodeStrings !== false && typeof t == "string" && (t = Qe.from(t, r)), t;
    }
    Object.defineProperty(A.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    function Sa(e, t, r, n, i, o) {
      if (!r) {
        var a = Ra(t, n, i);
        n !== a && (r = true, i = "buffer", n = a);
      }
      var s = t.objectMode ? 1 : n.length;
      t.length += s;
      var u = t.length < t.highWaterMark;
      if (u || (t.needDrain = true), t.writing || t.corked) {
        var l = t.lastBufferedRequest;
        t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
      } else
        $t(e, t, false, s, n, i, o);
      return u;
    }
    function $t(e, t, r, n, i, o, a) {
      t.writelen = n, t.writecb = a, t.writing = true, t.sync = true, t.destroyed ? t.onwrite(new wa("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = false;
    }
    function Ta(e, t, r, n, i) {
      --t.pendingcb, r ? (process.nextTick(i, n), process.nextTick(Le, e, t), e._writableState.errorEmitted = true, Ee(e, n)) : (i(n), e._writableState.errorEmitted = true, Ee(e, n), Le(e, t));
    }
    function Aa(e) {
      e.writing = false, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
    }
    function Ba(e, t) {
      var r = e._writableState, n = r.sync, i = r.writecb;
      if (typeof i != "function")
        throw new ya;
      if (Aa(r), t)
        Ta(e, r, n, t, i);
      else {
        var o = Sn(r) || e.destroyed;
        !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && Rn(e, r), n ? process.nextTick(vn, e, r, o, i) : vn(e, r, o, i);
      }
    }
    function vn(e, t, r, n) {
      r || Ia(e, t), t.pendingcb--, n(), Le(e, t);
    }
    function Ia(e, t) {
      t.length === 0 && t.needDrain && (t.needDrain = false, e.emit("drain"));
    }
    function Rn(e, t) {
      t.bufferProcessing = true;
      var r = t.bufferedRequest;
      if (e._writev && r && r.next) {
        var n = t.bufferedRequestCount, i = new Array(n), o = t.corkedRequestsFree;
        o.entry = r;
        for (var a = 0, s = true;r; )
          i[a] = r, r.isBuf || (s = false), r = r.next, a += 1;
        i.allBuffers = s, $t(e, t, true, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new En(t), t.bufferedRequestCount = 0;
      } else {
        for (;r; ) {
          var { chunk: u, encoding: l, callback: h } = r, c = t.objectMode ? 1 : u.length;
          if ($t(e, t, false, c, u, l, h), r = r.next, t.bufferedRequestCount--, t.writing)
            break;
        }
        r === null && (t.lastBufferedRequest = null);
      }
      t.bufferedRequest = r, t.bufferProcessing = false;
    }
    A.prototype._write = function(e, t, r) {
      r(new pa("_write()"));
    };
    A.prototype._writev = null;
    A.prototype.end = function(e, t, r) {
      var n = this._writableState;
      return typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || Ma(this, n, r), this;
    };
    Object.defineProperty(A.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function Sn(e) {
      return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
    }
    function Ca(e, t) {
      e._final(function(r) {
        t.pendingcb--, r && Ee(e, r), t.prefinished = true, e.emit("prefinish"), Le(e, t);
      });
    }
    function La(e, t) {
      !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.pendingcb++, t.finalCalled = true, process.nextTick(Ca, e, t)) : (t.prefinished = true, e.emit("prefinish")));
    }
    function Le(e, t) {
      var r = Sn(t);
      if (r && (La(e, t), t.pendingcb === 0 && (t.finished = true, e.emit("finish"), t.autoDestroy))) {
        var n = e._readableState;
        (!n || n.autoDestroy && n.endEmitted) && e.destroy();
      }
      return r;
    }
    function Ma(e, t, r) {
      t.ending = true, Le(e, t), r && (t.finished ? process.nextTick(r) : e.once("finish", r)), t.ended = true, e.writable = false;
    }
    function Oa(e, t, r) {
      var n = e.entry;
      for (e.entry = null;n; ) {
        var i = n.callback;
        t.pendingcb--, i(r), n = n.next;
      }
      t.corkedRequestsFree.next = e;
    }
    Object.defineProperty(A.prototype, "destroyed", { enumerable: false, get: function() {
      return this._writableState === undefined ? false : this._writableState.destroyed;
    }, set: function(t) {
      !this._writableState || (this._writableState.destroyed = t);
    } });
    A.prototype.destroy = Gt.destroy;
    A.prototype._undestroy = Gt.undestroy;
    A.prototype._destroy = function(e, t) {
      t(e);
    };
  });
  ue = b((Yf, Bn) => {
    var Fa = Object.keys || function(e) {
      var t = [];
      for (var r in e)
        t.push(r);
      return t;
    };
    Bn.exports = $;
    var An = Xt(), Yt = Kt();
    Q()($, An);
    for (Vt = Fa(Yt.prototype), et = 0;et < Vt.length; et++)
      tt = Vt[et], $.prototype[tt] || ($.prototype[tt] = Yt.prototype[tt]);
    var Vt, tt, et;
    function $(e) {
      if (!(this instanceof $))
        return new $(e);
      An.call(this, e), Yt.call(this, e), this.allowHalfOpen = true, e && (e.readable === false && (this.readable = false), e.writable === false && (this.writable = false), e.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", Na)));
    }
    Object.defineProperty($.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    Object.defineProperty($.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    Object.defineProperty($.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function Na() {
      this._writableState.ended || process.nextTick(Ua, this);
    }
    function Ua(e) {
      e.end();
    }
    Object.defineProperty($.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set: function(t) {
      this._readableState === undefined || this._writableState === undefined || (this._readableState.destroyed = t, this._writableState.destroyed = t);
    } });
  });
  Ln = b((zt, Cn) => {
    var rt = _e(), G = rt.Buffer;
    function In(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    G.from && G.alloc && G.allocUnsafe && G.allocUnsafeSlow ? Cn.exports = rt : (In(rt, zt), zt.Buffer = le);
    function le(e, t, r) {
      return G(e, t, r);
    }
    le.prototype = Object.create(G.prototype);
    In(G, le);
    le.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return G(e, t, r);
    };
    le.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var n = G(e);
      return t !== undefined ? typeof r == "string" ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    };
    le.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return G(e);
    };
    le.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return rt.SlowBuffer(e);
    };
  });
  Fn = b((On) => {
    var Jt = Ln().Buffer, Mn = Jt.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function Pa(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function qa(e) {
      var t = Pa(e);
      if (typeof t != "string" && (Jt.isEncoding === Mn || !Mn(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    On.StringDecoder = Oe;
    function Oe(e) {
      this.encoding = qa(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = $a, this.end = Ga, t = 4;
          break;
        case "utf8":
          this.fillLast = ja, t = 4;
          break;
        case "base64":
          this.text = Ka, this.end = Va, t = 3;
          break;
        default:
          this.write = Ya, this.end = Xa;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Jt.allocUnsafe(t);
    }
    Oe.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    Oe.prototype.end = Ha;
    Oe.prototype.text = Wa;
    Oe.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function Zt(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function Da(e, t, r) {
      var n = t.length - 1;
      if (n < r)
        return 0;
      var i = Zt(t[n]);
      return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = Zt(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = Zt(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
    }
    function ka(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "�";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "�";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "�";
      }
    }
    function ja(e) {
      var t = this.lastTotal - this.lastNeed, r = ka(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function Wa(e, t) {
      var r = Da(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
    }
    function Ha(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�" : t;
    }
    function $a(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Ga(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function Ka(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Va(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Ya(e) {
      return e.toString(this.encoding);
    }
    function Xa(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Qt = {};
  mt(Qt, { StringDecoder: () => nt.StringDecoder, default: () => nt.StringDecoder });
  er = Cr(() => {
    nt = bt(Fn());
  });
  it = b((zf, Pn) => {
    var Nn = fe().codes.ERR_STREAM_PREMATURE_CLOSE;
    function za(e) {
      var t = false;
      return function() {
        if (!t) {
          t = true;
          for (var r = arguments.length, n = new Array(r), i = 0;i < r; i++)
            n[i] = arguments[i];
          e.apply(this, n);
        }
      };
    }
    function Za() {
    }
    function Ja(e) {
      return e.setHeader && typeof e.abort == "function";
    }
    function Un(e, t, r) {
      if (typeof t == "function")
        return Un(e, null, t);
      t || (t = {}), r = za(r || Za);
      var n = t.readable || t.readable !== false && e.readable, i = t.writable || t.writable !== false && e.writable, o = function() {
        e.writable || s();
      }, a = e._writableState && e._writableState.finished, s = function() {
        i = false, a = true, n || r.call(e);
      }, u = e._readableState && e._readableState.endEmitted, l = function() {
        n = false, u = true, i || r.call(e);
      }, h = function(g) {
        r.call(e, g);
      }, c = function() {
        var g;
        if (n && !u)
          return (!e._readableState || !e._readableState.ended) && (g = new Nn), r.call(e, g);
        if (i && !a)
          return (!e._writableState || !e._writableState.ended) && (g = new Nn), r.call(e, g);
      }, d = function() {
        e.req.on("finish", s);
      };
      return Ja(e) ? (e.on("complete", s), e.on("abort", c), e.req ? d() : e.on("request", d)) : i && !e._writableState && (e.on("end", o), e.on("close", o)), e.on("end", l), e.on("finish", s), t.error !== false && e.on("error", h), e.on("close", c), function() {
        e.removeListener("complete", s), e.removeListener("abort", c), e.removeListener("request", d), e.req && e.req.removeListener("finish", s), e.removeListener("end", o), e.removeListener("close", o), e.removeListener("finish", s), e.removeListener("end", l), e.removeListener("error", h), e.removeListener("close", c);
      };
    }
    Pn.exports = Un;
  });
  Dn = b((Zf, qn) => {
    var ot;
    function re(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
    }
    var Qa = it(), ne = Symbol("lastResolve"), he = Symbol("lastReject"), Fe = Symbol("error"), at = Symbol("ended"), ce = Symbol("lastPromise"), tr = Symbol("handlePromise"), de = Symbol("stream");
    function ie(e, t) {
      return { value: e, done: t };
    }
    function es(e) {
      var t = e[ne];
      if (t !== null) {
        var r = e[de].read();
        r !== null && (e[ce] = null, e[ne] = null, e[he] = null, t(ie(r, false)));
      }
    }
    function ts(e) {
      process.nextTick(es, e);
    }
    function rs(e, t) {
      return function(r, n) {
        e.then(function() {
          if (t[at]) {
            r(ie(undefined, true));
            return;
          }
          t[tr](r, n);
        }, n);
      };
    }
    var ns = Object.getPrototypeOf(function() {
    }), is = Object.setPrototypeOf((ot = { get stream() {
      return this[de];
    }, next: function() {
      var t = this, r = this[Fe];
      if (r !== null)
        return Promise.reject(r);
      if (this[at])
        return Promise.resolve(ie(undefined, true));
      if (this[de].destroyed)
        return new Promise(function(a, s) {
          process.nextTick(function() {
            t[Fe] ? s(t[Fe]) : a(ie(undefined, true));
          });
        });
      var n = this[ce], i;
      if (n)
        i = new Promise(rs(n, this));
      else {
        var o = this[de].read();
        if (o !== null)
          return Promise.resolve(ie(o, false));
        i = new Promise(this[tr]);
      }
      return this[ce] = i, i;
    } }, re(ot, Symbol.asyncIterator, function() {
      return this;
    }), re(ot, "return", function() {
      var t = this;
      return new Promise(function(r, n) {
        t[de].destroy(null, function(i) {
          if (i) {
            n(i);
            return;
          }
          r(ie(undefined, true));
        });
      });
    }), ot), ns), os = function(t) {
      var r, n = Object.create(is, (r = {}, re(r, de, { value: t, writable: true }), re(r, ne, { value: null, writable: true }), re(r, he, { value: null, writable: true }), re(r, Fe, { value: null, writable: true }), re(r, at, { value: t._readableState.endEmitted, writable: true }), re(r, tr, { value: function(o, a) {
        var s = n[de].read();
        s ? (n[ce] = null, n[ne] = null, n[he] = null, o(ie(s, false))) : (n[ne] = o, n[he] = a);
      }, writable: true }), r));
      return n[ce] = null, Qa(t, function(i) {
        if (i && i.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var o = n[he];
          o !== null && (n[ce] = null, n[ne] = null, n[he] = null, o(i)), n[Fe] = i;
          return;
        }
        var a = n[ne];
        a !== null && (n[ce] = null, n[ne] = null, n[he] = null, a(ie(undefined, true))), n[at] = true;
      }), t.on("readable", ts.bind(null, n)), n;
    };
    qn.exports = os;
  });
  jn = b((Jf, kn) => {
    kn.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  });
  Xt = b((eu, Zn) => {
    Zn.exports = _;
    var xe;
    _.ReadableState = Gn;
    var Qf = Tt().EventEmitter, $n = function(t, r) {
      return t.listeners(r).length;
    }, Ue = At(), st = _e().Buffer, as = global.Uint8Array || function() {
    };
    function ss(e) {
      return st.from(e);
    }
    function fs(e) {
      return st.isBuffer(e) || e instanceof as;
    }
    var rr = qt(), w;
    rr && rr.debuglog ? w = rr.debuglog("stream") : w = function() {
    };
    var us = cn(), ur = jt(), ls = Wt(), hs = ls.getHighWaterMark, ft = fe().codes, cs = ft.ERR_INVALID_ARG_TYPE, ds = ft.ERR_STREAM_PUSH_AFTER_EOF, ps = ft.ERR_METHOD_NOT_IMPLEMENTED, ys = ft.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, Re, nr, ir;
    Q()(_, Ue);
    var Ne = ur.errorOrDestroy, or = ["error", "close", "destroy", "pause", "resume"];
    function gs(e, t, r) {
      if (typeof e.prependListener == "function")
        return e.prependListener(t, r);
      !e._events || !e._events[t] ? e.on(t, r) : Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
    }
    function Gn(e, t, r) {
      xe = xe || ue(), e = e || {}, typeof r != "boolean" && (r = t instanceof xe), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = hs(this, e, "readableHighWaterMark", r), this.buffer = new us, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = e.emitClose !== false, this.autoDestroy = !!e.autoDestroy, this.destroyed = false, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, e.encoding && (Re || (Re = (er(), _t(Qt)).StringDecoder), this.decoder = new Re(e.encoding), this.encoding = e.encoding);
    }
    function _(e) {
      if (xe = xe || ue(), !(this instanceof _))
        return new _(e);
      var t = this instanceof xe;
      this._readableState = new Gn(e, this, t), this.readable = true, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy)), Ue.call(this);
    }
    Object.defineProperty(_.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined ? false : this._readableState.destroyed;
    }, set: function(t) {
      !this._readableState || (this._readableState.destroyed = t);
    } });
    _.prototype.destroy = ur.destroy;
    _.prototype._undestroy = ur.undestroy;
    _.prototype._destroy = function(e, t) {
      t(e);
    };
    _.prototype.push = function(e, t) {
      var r = this._readableState, n;
      return r.objectMode ? n = true : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = st.from(e, t), t = ""), n = true), Kn(this, e, t, false, n);
    };
    _.prototype.unshift = function(e) {
      return Kn(this, e, null, true, false);
    };
    function Kn(e, t, r, n, i) {
      w("readableAddChunk", t);
      var o = e._readableState;
      if (t === null)
        o.reading = false, bs(e, o);
      else {
        var a;
        if (i || (a = ws(o, t)), a)
          Ne(e, a);
        else if (o.objectMode || t && t.length > 0)
          if (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(t) !== st.prototype && (t = ss(t)), n)
            o.endEmitted ? Ne(e, new ys) : ar(e, o, t, true);
          else if (o.ended)
            Ne(e, new ds);
          else {
            if (o.destroyed)
              return false;
            o.reading = false, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || t.length !== 0 ? ar(e, o, t, false) : fr(e, o)) : ar(e, o, t, false);
          }
        else
          n || (o.reading = false, fr(e, o));
      }
      return !o.ended && (o.length < o.highWaterMark || o.length === 0);
    }
    function ar(e, t, r, n) {
      t.flowing && t.length === 0 && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && ut(e)), fr(e, t);
    }
    function ws(e, t) {
      var r;
      return !fs(t) && typeof t != "string" && t !== undefined && !e.objectMode && (r = new cs("chunk", ["string", "Buffer", "Uint8Array"], t)), r;
    }
    _.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    _.prototype.setEncoding = function(e) {
      Re || (Re = (er(), _t(Qt)).StringDecoder);
      var t = new Re(e);
      this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var r = this._readableState.buffer.head, n = "";r !== null; )
        n += t.write(r.data), r = r.next;
      return this._readableState.buffer.clear(), n !== "" && this._readableState.buffer.push(n), this._readableState.length = n.length, this;
    };
    var Wn = 1073741824;
    function ms(e) {
      return e >= Wn ? e = Wn : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
    }
    function Hn(e, t) {
      return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = ms(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = true, 0));
    }
    _.prototype.read = function(e) {
      w("read", e), e = parseInt(e, 10);
      var t = this._readableState, r = e;
      if (e !== 0 && (t.emittedReadable = false), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
        return w("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? sr(this) : ut(this), null;
      if (e = Hn(e, t), e === 0 && t.ended)
        return t.length === 0 && sr(this), null;
      var n = t.needReadable;
      w("need readable", n), (t.length === 0 || t.length - e < t.highWaterMark) && (n = true, w("length less than watermark", n)), t.ended || t.reading ? (n = false, w("reading or ended", n)) : n && (w("do read"), t.reading = true, t.sync = true, t.length === 0 && (t.needReadable = true), this._read(t.highWaterMark), t.sync = false, t.reading || (e = Hn(r, t)));
      var i;
      return e > 0 ? i = Xn(e, t) : i = null, i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), t.length === 0 && (t.ended || (t.needReadable = true), r !== e && t.ended && sr(this)), i !== null && this.emit("data", i), i;
    };
    function bs(e, t) {
      if (w("onEofChunk"), !t.ended) {
        if (t.decoder) {
          var r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = true, t.sync ? ut(e) : (t.needReadable = false, t.emittedReadable || (t.emittedReadable = true, Vn(e)));
      }
    }
    function ut(e) {
      var t = e._readableState;
      w("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = false, t.emittedReadable || (w("emitReadable", t.flowing), t.emittedReadable = true, process.nextTick(Vn, e));
    }
    function Vn(e) {
      var t = e._readableState;
      w("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = false), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, lr(e);
    }
    function fr(e, t) {
      t.readingMore || (t.readingMore = true, process.nextTick(_s, e, t));
    }
    function _s(e, t) {
      for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
        var r = t.length;
        if (w("maybeReadMore read 0"), e.read(0), r === t.length)
          break;
      }
      t.readingMore = false;
    }
    _.prototype._read = function(e) {
      Ne(this, new ps("_read()"));
    };
    _.prototype.pipe = function(e, t) {
      var r = this, n = this._readableState;
      switch (n.pipesCount) {
        case 0:
          n.pipes = e;
          break;
        case 1:
          n.pipes = [n.pipes, e];
          break;
        default:
          n.pipes.push(e);
          break;
      }
      n.pipesCount += 1, w("pipe count=%d opts=%j", n.pipesCount, t);
      var i = (!t || t.end !== false) && e !== process.stdout && e !== process.stderr, o = i ? s : E;
      n.endEmitted ? process.nextTick(o) : r.once("end", o), e.on("unpipe", a);
      function a(v, m) {
        w("onunpipe"), v === r && m && m.hasUnpiped === false && (m.hasUnpiped = true, h());
      }
      function s() {
        w("onend"), e.end();
      }
      var u = vs(r);
      e.on("drain", u);
      var l = false;
      function h() {
        w("cleanup"), e.removeListener("close", p), e.removeListener("finish", g), e.removeListener("drain", u), e.removeListener("error", d), e.removeListener("unpipe", a), r.removeListener("end", s), r.removeListener("end", E), r.removeListener("data", c), l = true, n.awaitDrain && (!e._writableState || e._writableState.needDrain) && u();
      }
      r.on("data", c);
      function c(v) {
        w("ondata");
        var m = e.write(v);
        w("dest.write", m), m === false && ((n.pipesCount === 1 && n.pipes === e || n.pipesCount > 1 && zn(n.pipes, e) !== -1) && !l && (w("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause());
      }
      function d(v) {
        w("onerror", v), E(), e.removeListener("error", d), $n(e, "error") === 0 && Ne(e, v);
      }
      gs(e, "error", d);
      function p() {
        e.removeListener("finish", g), E();
      }
      e.once("close", p);
      function g() {
        w("onfinish"), e.removeListener("close", p), E();
      }
      e.once("finish", g);
      function E() {
        w("unpipe"), r.unpipe(e);
      }
      return e.emit("pipe", r), n.flowing || (w("pipe resume"), r.resume()), e;
    };
    function vs(e) {
      return function() {
        var r = e._readableState;
        w("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && $n(e, "data") && (r.flowing = true, lr(e));
      };
    }
    _.prototype.unpipe = function(e) {
      var t = this._readableState, r = { hasUnpiped: false };
      if (t.pipesCount === 0)
        return this;
      if (t.pipesCount === 1)
        return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = false, e && e.emit("unpipe", this, r), this);
      if (!e) {
        var { pipes: n, pipesCount: i } = t;
        t.pipes = null, t.pipesCount = 0, t.flowing = false;
        for (var o = 0;o < i; o++)
          n[o].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      var a = zn(t.pipes, e);
      return a === -1 ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this);
    };
    _.prototype.on = function(e, t) {
      var r = Ue.prototype.on.call(this, e, t), n = this._readableState;
      return e === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : e === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, w("on readable", n.length, n.reading), n.length ? ut(this) : n.reading || process.nextTick(Es, this)), r;
    };
    _.prototype.addListener = _.prototype.on;
    _.prototype.removeListener = function(e, t) {
      var r = Ue.prototype.removeListener.call(this, e, t);
      return e === "readable" && process.nextTick(Yn, this), r;
    };
    _.prototype.removeAllListeners = function(e) {
      var t = Ue.prototype.removeAllListeners.apply(this, arguments);
      return (e === "readable" || e === undefined) && process.nextTick(Yn, this), t;
    };
    function Yn(e) {
      var t = e._readableState;
      t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = true : e.listenerCount("data") > 0 && e.resume();
    }
    function Es(e) {
      w("readable nexttick read 0"), e.read(0);
    }
    _.prototype.resume = function() {
      var e = this._readableState;
      return e.flowing || (w("resume"), e.flowing = !e.readableListening, xs(this, e)), e.paused = false, this;
    };
    function xs(e, t) {
      t.resumeScheduled || (t.resumeScheduled = true, process.nextTick(Rs, e, t));
    }
    function Rs(e, t) {
      w("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = false, e.emit("resume"), lr(e), t.flowing && !t.reading && e.read(0);
    }
    _.prototype.pause = function() {
      return w("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (w("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function lr(e) {
      var t = e._readableState;
      for (w("flow", t.flowing);t.flowing && e.read() !== null; )
        ;
    }
    _.prototype.wrap = function(e) {
      var t = this, r = this._readableState, n = false;
      e.on("end", function() {
        if (w("wrapped end"), r.decoder && !r.ended) {
          var a = r.decoder.end();
          a && a.length && t.push(a);
        }
        t.push(null);
      }), e.on("data", function(a) {
        if (w("wrapped data"), r.decoder && (a = r.decoder.write(a)), !(r.objectMode && a == null) && !(!r.objectMode && (!a || !a.length))) {
          var s = t.push(a);
          s || (n = true, e.pause());
        }
      });
      for (var i in e)
        this[i] === undefined && typeof e[i] == "function" && (this[i] = function(s) {
          return function() {
            return e[s].apply(e, arguments);
          };
        }(i));
      for (var o = 0;o < or.length; o++)
        e.on(or[o], this.emit.bind(this, or[o]));
      return this._read = function(a) {
        w("wrapped _read", a), n && (n = false, e.resume());
      }, this;
    };
    typeof Symbol == "function" && (_.prototype[Symbol.asyncIterator] = function() {
      return nr === undefined && (nr = Dn()), nr(this);
    });
    Object.defineProperty(_.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } });
    Object.defineProperty(_.prototype, "readableBuffer", { enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } });
    Object.defineProperty(_.prototype, "readableFlowing", { enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(t) {
      this._readableState && (this._readableState.flowing = t);
    } });
    _._fromList = Xn;
    Object.defineProperty(_.prototype, "readableLength", { enumerable: false, get: function() {
      return this._readableState.length;
    } });
    function Xn(e, t) {
      if (t.length === 0)
        return null;
      var r;
      return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
    }
    function sr(e) {
      var t = e._readableState;
      w("endReadable", t.endEmitted), t.endEmitted || (t.ended = true, process.nextTick(Ss, t, e));
    }
    function Ss(e, t) {
      if (w("endReadableNT", e.endEmitted, e.length), !e.endEmitted && e.length === 0 && (e.endEmitted = true, t.readable = false, t.emit("end"), e.autoDestroy)) {
        var r = t._writableState;
        (!r || r.autoDestroy && r.finished) && t.destroy();
      }
    }
    typeof Symbol == "function" && (_.from = function(e, t) {
      return ir === undefined && (ir = jn()), ir(_, e, t);
    });
    function zn(e, t) {
      for (var r = 0, n = e.length;r < n; r++)
        if (e[r] === t)
          return r;
      return -1;
    }
  });
  hr = b((tu, Qn) => {
    Qn.exports = z;
    var lt = fe().codes, Ts = lt.ERR_METHOD_NOT_IMPLEMENTED, As = lt.ERR_MULTIPLE_CALLBACK, Bs = lt.ERR_TRANSFORM_ALREADY_TRANSFORMING, Is = lt.ERR_TRANSFORM_WITH_LENGTH_0, ht = ue();
    Q()(z, ht);
    function Cs(e, t) {
      var r = this._transformState;
      r.transforming = false;
      var n = r.writecb;
      if (n === null)
        return this.emit("error", new As);
      r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
      var i = this._readableState;
      i.reading = false, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
    function z(e) {
      if (!(this instanceof z))
        return new z(e);
      ht.call(this, e), this._transformState = { afterTransform: Cs.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Ls);
    }
    function Ls() {
      var e = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
        Jn(e, t, r);
      }) : Jn(this, null, null);
    }
    z.prototype.push = function(e, t) {
      return this._transformState.needTransform = false, ht.prototype.push.call(this, e, t);
    };
    z.prototype._transform = function(e, t, r) {
      r(new Ts("_transform()"));
    };
    z.prototype._write = function(e, t, r) {
      var n = this._transformState;
      if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    };
    z.prototype._read = function(e) {
      var t = this._transformState;
      t.writechunk !== null && !t.transforming ? (t.transforming = true, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = true;
    };
    z.prototype._destroy = function(e, t) {
      ht.prototype._destroy.call(this, e, function(r) {
        t(r);
      });
    };
    function Jn(e, t, r) {
      if (t)
        return e.emit("error", t);
      if (r != null && e.push(r), e._writableState.length)
        throw new Is;
      if (e._transformState.transforming)
        throw new Bs;
      return e.push(null);
    }
  });
  ri = b((ru, ti) => {
    ti.exports = Pe;
    var ei = hr();
    Q()(Pe, ei);
    function Pe(e) {
      if (!(this instanceof Pe))
        return new Pe(e);
      ei.call(this, e);
    }
    Pe.prototype._transform = function(e, t, r) {
      r(null, e);
    };
  });
  si = b((nu, ai) => {
    var cr;
    function Ms(e) {
      var t = false;
      return function() {
        t || (t = true, e.apply(undefined, arguments));
      };
    }
    var oi = fe().codes, Os = oi.ERR_MISSING_ARGS, Fs = oi.ERR_STREAM_DESTROYED;
    function ni(e) {
      if (e)
        throw e;
    }
    function Ns(e) {
      return e.setHeader && typeof e.abort == "function";
    }
    function Us(e, t, r, n) {
      n = Ms(n);
      var i = false;
      e.on("close", function() {
        i = true;
      }), cr === undefined && (cr = it()), cr(e, { readable: t, writable: r }, function(a) {
        if (a)
          return n(a);
        i = true, n();
      });
      var o = false;
      return function(a) {
        if (!i && !o) {
          if (o = true, Ns(e))
            return e.abort();
          if (typeof e.destroy == "function")
            return e.destroy();
          n(a || new Fs("pipe"));
        }
      };
    }
    function ii(e) {
      e();
    }
    function Ps(e, t) {
      return e.pipe(t);
    }
    function qs(e) {
      return !e.length || typeof e[e.length - 1] != "function" ? ni : e.pop();
    }
    function Ds() {
      for (var e = arguments.length, t = new Array(e), r = 0;r < e; r++)
        t[r] = arguments[r];
      var n = qs(t);
      if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
        throw new Os("streams");
      var i, o = t.map(function(a, s) {
        var u = s < t.length - 1, l = s > 0;
        return Us(a, u, l, function(h) {
          i || (i = h), h && o.forEach(ii), !u && (o.forEach(ii), n(i));
        });
      });
      return t.reduce(Ps);
    }
    ai.exports = Ds;
  });
  dr = b((q, fi) => {
    q = fi.exports = Xt();
    q.Stream = q;
    q.Readable = q;
    q.Writable = Kt();
    q.Duplex = ue();
    q.Transform = hr();
    q.PassThrough = ri();
    q.finished = it();
    q.pipeline = si();
  });
  gr = b((yr) => {
    var ui = xt(), ks = Q(), li = dr(), ct = yr.readyStates = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 }, pr = yr.IncomingMessage = function(e, t, r, n) {
      var i = this;
      if (li.Readable.call(i), i._mode = r, i.headers = {}, i.rawHeaders = [], i.trailers = {}, i.rawTrailers = [], i.on("end", function() {
        process.nextTick(function() {
          i.emit("close");
        });
      }), r === "fetch") {
        let c = function() {
          a.read().then(function(d) {
            if (!i._destroyed) {
              if (n(d.done), d.done) {
                i.push(null);
                return;
              }
              i.push(Buffer.from(d.value)), c();
            }
          }).catch(function(d) {
            n(true), i._destroyed || i.emit("error", d);
          });
        };
        var h = c;
        if (i._fetchResponse = t, i.url = t.url, i.statusCode = t.status, i.statusMessage = t.statusText, t.headers.forEach(function(d, p) {
          i.headers[p.toLowerCase()] = d, i.rawHeaders.push(p, d);
        }), ui.writableStream) {
          var o = new WritableStream({ write: function(d) {
            return n(false), new Promise(function(p, g) {
              i._destroyed ? g() : i.push(Buffer.from(d)) ? p() : i._resumeFetch = p;
            });
          }, close: function() {
            n(true), i._destroyed || i.push(null);
          }, abort: function(d) {
            n(true), i._destroyed || i.emit("error", d);
          } });
          try {
            t.body.pipeTo(o).catch(function(d) {
              n(true), i._destroyed || i.emit("error", d);
            });
            return;
          } catch {
          }
        }
        var a = t.body.getReader();
        c();
      } else {
        i._xhr = e, i._pos = 0, i.url = e.responseURL, i.statusCode = e.status, i.statusMessage = e.statusText;
        var s = e.getAllResponseHeaders().split(/\r?\n/);
        if (s.forEach(function(c) {
          var d = c.match(/^([^:]+):\s*(.*)/);
          if (d) {
            var p = d[1].toLowerCase();
            p === "set-cookie" ? (i.headers[p] === undefined && (i.headers[p] = []), i.headers[p].push(d[2])) : i.headers[p] !== undefined ? i.headers[p] += ", " + d[2] : i.headers[p] = d[2], i.rawHeaders.push(d[1], d[2]);
          }
        }), i._charset = "x-user-defined", !ui.overrideMimeType) {
          var u = i.rawHeaders["mime-type"];
          if (u) {
            var l = u.match(/;\s*charset=([^;])(;|$)/);
            l && (i._charset = l[1].toLowerCase());
          }
          i._charset || (i._charset = "utf-8");
        }
      }
    };
    ks(pr, li.Readable);
    pr.prototype._read = function() {
      var e = this, t = e._resumeFetch;
      t && (e._resumeFetch = null, t());
    };
    pr.prototype._onXHRProgress = function(e) {
      var t = this, r = t._xhr, n = null;
      switch (t._mode) {
        case "text":
          if (n = r.responseText, n.length > t._pos) {
            var i = n.substr(t._pos);
            if (t._charset === "x-user-defined") {
              for (var o = Buffer.alloc(i.length), a = 0;a < i.length; a++)
                o[a] = i.charCodeAt(a) & 255;
              t.push(o);
            } else
              t.push(i, t._charset);
            t._pos = n.length;
          }
          break;
        case "arraybuffer":
          if (r.readyState !== ct.DONE || !r.response)
            break;
          n = r.response, t.push(Buffer.from(new Uint8Array(n)));
          break;
        case "moz-chunked-arraybuffer":
          if (n = r.response, r.readyState !== ct.LOADING || !n)
            break;
          t.push(Buffer.from(new Uint8Array(n)));
          break;
        case "ms-stream":
          if (n = r.response, r.readyState !== ct.LOADING)
            break;
          var s = new global.MSStreamReader;
          s.onprogress = function() {
            s.result.byteLength > t._pos && (t.push(Buffer.from(new Uint8Array(s.result.slice(t._pos)))), t._pos = s.result.byteLength);
          }, s.onload = function() {
            e(true), t.push(null);
          }, s.readAsArrayBuffer(n);
          break;
      }
      t._xhr.readyState === ct.DONE && t._mode !== "ms-stream" && (e(true), t.push(null));
    };
  });
  pi = b((ou, di) => {
    var pe = xt(), js = Q(), ci = gr(), wr = dr(), Ws = ci.IncomingMessage, hi = ci.readyStates;
    function Hs(e, t) {
      return pe.fetch && t ? "fetch" : pe.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : pe.msstream ? "ms-stream" : pe.arraybuffer && e ? "arraybuffer" : "text";
    }
    var M = di.exports = function(e) {
      var t = this;
      wr.Writable.call(t), t._opts = e, t._body = [], t._headers = {}, e.auth && t.setHeader("Authorization", "Basic " + Buffer.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(i) {
        t.setHeader(i, e.headers[i]);
      });
      var r, n = true;
      if (e.mode === "disable-fetch" || "requestTimeout" in e && !pe.abortController)
        n = false, r = true;
      else if (e.mode === "prefer-streaming")
        r = false;
      else if (e.mode === "allow-wrong-content-type")
        r = !pe.overrideMimeType;
      else if (!e.mode || e.mode === "default" || e.mode === "prefer-fast")
        r = true;
      else
        throw new Error("Invalid value for opts.mode");
      t._mode = Hs(r, n), t._fetchTimer = null, t._socketTimeout = null, t._socketTimer = null, t.on("finish", function() {
        t._onFinish();
      });
    };
    js(M, wr.Writable);
    M.prototype.setHeader = function(e, t) {
      var r = this, n = e.toLowerCase();
      Gs.indexOf(n) === -1 && (r._headers[n] = { name: e, value: t });
    };
    M.prototype.getHeader = function(e) {
      var t = this._headers[e.toLowerCase()];
      return t ? t.value : null;
    };
    M.prototype.removeHeader = function(e) {
      var t = this;
      delete t._headers[e.toLowerCase()];
    };
    M.prototype._onFinish = function() {
      var e = this;
      if (!e._destroyed) {
        var t = e._opts;
        "timeout" in t && t.timeout !== 0 && e.setTimeout(t.timeout);
        var r = e._headers, n = null;
        t.method !== "GET" && t.method !== "HEAD" && (n = new Blob(e._body, { type: (r["content-type"] || {}).value || "" }));
        var i = [];
        if (Object.keys(r).forEach(function(u) {
          var l = r[u].name, h = r[u].value;
          Array.isArray(h) ? h.forEach(function(c) {
            i.push([l, c]);
          }) : i.push([l, h]);
        }), e._mode === "fetch") {
          var o = null;
          if (pe.abortController) {
            var a = new AbortController;
            o = a.signal, e._fetchAbortController = a, "requestTimeout" in t && t.requestTimeout !== 0 && (e._fetchTimer = global.setTimeout(function() {
              e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort();
            }, t.requestTimeout));
          }
          global.fetch(e._opts.url, { method: e._opts.method, headers: i, body: n || undefined, mode: "cors", credentials: t.withCredentials ? "include" : "same-origin", signal: o }).then(function(u) {
            e._fetchResponse = u, e._resetTimers(false), e._connect();
          }, function(u) {
            e._resetTimers(true), e._destroyed || e.emit("error", u);
          });
        } else {
          var s = e._xhr = new global.XMLHttpRequest;
          try {
            s.open(e._opts.method, e._opts.url, true);
          } catch (u) {
            process.nextTick(function() {
              e.emit("error", u);
            });
            return;
          }
          "responseType" in s && (s.responseType = e._mode), "withCredentials" in s && (s.withCredentials = !!t.withCredentials), e._mode === "text" && "overrideMimeType" in s && s.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (s.timeout = t.requestTimeout, s.ontimeout = function() {
            e.emit("requestTimeout");
          }), i.forEach(function(u) {
            s.setRequestHeader(u[0], u[1]);
          }), e._response = null, s.onreadystatechange = function() {
            switch (s.readyState) {
              case hi.LOADING:
              case hi.DONE:
                e._onXHRProgress();
                break;
            }
          }, e._mode === "moz-chunked-arraybuffer" && (s.onprogress = function() {
            e._onXHRProgress();
          }), s.onerror = function() {
            e._destroyed || (e._resetTimers(true), e.emit("error", new Error("XHR error")));
          };
          try {
            s.send(n);
          } catch (u) {
            process.nextTick(function() {
              e.emit("error", u);
            });
            return;
          }
        }
      }
    };
    function $s(e) {
      try {
        var t = e.status;
        return t !== null && t !== 0;
      } catch {
        return false;
      }
    }
    M.prototype._onXHRProgress = function() {
      var e = this;
      e._resetTimers(false), !(!$s(e._xhr) || e._destroyed) && (e._response || e._connect(), e._response._onXHRProgress(e._resetTimers.bind(e)));
    };
    M.prototype._connect = function() {
      var e = this;
      e._destroyed || (e._response = new Ws(e._xhr, e._fetchResponse, e._mode, e._resetTimers.bind(e)), e._response.on("error", function(t) {
        e.emit("error", t);
      }), e.emit("response", e._response));
    };
    M.prototype._write = function(e, t, r) {
      var n = this;
      n._body.push(e), r();
    };
    M.prototype._resetTimers = function(e) {
      var t = this;
      global.clearTimeout(t._socketTimer), t._socketTimer = null, e ? (global.clearTimeout(t._fetchTimer), t._fetchTimer = null) : t._socketTimeout && (t._socketTimer = global.setTimeout(function() {
        t.emit("timeout");
      }, t._socketTimeout));
    };
    M.prototype.abort = M.prototype.destroy = function(e) {
      var t = this;
      t._destroyed = true, t._resetTimers(true), t._response && (t._response._destroyed = true), t._xhr ? t._xhr.abort() : t._fetchAbortController && t._fetchAbortController.abort(), e && t.emit("error", e);
    };
    M.prototype.end = function(e, t, r) {
      var n = this;
      typeof e == "function" && (r = e, e = undefined), wr.Writable.prototype.end.call(n, e, t, r);
    };
    M.prototype.setTimeout = function(e, t) {
      var r = this;
      t && r.once("timeout", t), r._socketTimeout = e, r._resetTimers(false);
    };
    M.prototype.flushHeaders = function() {
    };
    M.prototype.setNoDelay = function() {
    };
    M.prototype.setSocketKeepAlive = function() {
    };
    var Gs = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
  });
  gi = b((au, yi) => {
    yi.exports = Vs;
    var Ks = Object.prototype.hasOwnProperty;
    function Vs() {
      for (var e = {}, t = 0;t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Ks.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }
  });
  mi = b((su, wi) => {
    wi.exports = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Unordered Collection", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" };
  });
  Ti = {};
  mt(Ti, { decode: () => vr, default: () => tf, encode: () => Er, toASCII: () => Si, toUnicode: () => Ri, ucs2decode: () => _r, ucs2encode: () => Ei });
  Ai = Cr(() => {
    _i = "-", Ys = /^xn--/, Xs = /[^\0-\x7F]/, zs = /[\x2E\u3002\uFF0E\uFF61]/g, Zs = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, mr = 36 - 1, K = Math.floor, br = String.fromCharCode;
    Ei = (e) => String.fromCodePoint(...e), Qs = function(e) {
      return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : 36;
    }, bi = function(e, t) {
      return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
    }, xi = function(e, t, r) {
      let n = 0;
      for (e = r ? K(e / 700) : e >> 1, e += K(e / t);e > mr * 26 >> 1; n += 36)
        e = K(e / mr);
      return K(n + (mr + 1) * e / (e + 38));
    }, vr = function(e) {
      let t = [], r = e.length, n = 0, i = 128, o = 72, a = e.lastIndexOf(_i);
      a < 0 && (a = 0);
      for (let s = 0;s < a; ++s)
        e.charCodeAt(s) >= 128 && oe("not-basic"), t.push(e.charCodeAt(s));
      for (let s = a > 0 ? a + 1 : 0;s < r; ) {
        let u = n;
        for (let h = 1, c = 36;; c += 36) {
          s >= r && oe("invalid-input");
          let d = Qs(e.charCodeAt(s++));
          d >= 36 && oe("invalid-input"), d > K((2147483647 - n) / h) && oe("overflow"), n += d * h;
          let p = c <= o ? 1 : c >= o + 26 ? 26 : c - o;
          if (d < p)
            break;
          let g = 36 - p;
          h > K(2147483647 / g) && oe("overflow"), h *= g;
        }
        let l = t.length + 1;
        o = xi(n - u, l, u == 0), K(n / l) > 2147483647 - i && oe("overflow"), i += K(n / l), n %= l, t.splice(n++, 0, i);
      }
      return String.fromCodePoint(...t);
    }, Er = function(e) {
      let t = [];
      e = _r(e);
      let r = e.length, n = 128, i = 0, o = 72;
      for (let u of e)
        u < 128 && t.push(br(u));
      let a = t.length, s = a;
      for (a && t.push(_i);s < r; ) {
        let u = 2147483647;
        for (let h of e)
          h >= n && h < u && (u = h);
        let l = s + 1;
        u - n > K((2147483647 - i) / l) && oe("overflow"), i += (u - n) * l, n = u;
        for (let h of e)
          if (h < n && ++i > 2147483647 && oe("overflow"), h === n) {
            let c = i;
            for (let d = 36;; d += 36) {
              let p = d <= o ? 1 : d >= o + 26 ? 26 : d - o;
              if (c < p)
                break;
              let g = c - p, E = 36 - p;
              t.push(br(bi(p + g % E, 0))), c = K(g / E);
            }
            t.push(br(bi(c, 0))), o = xi(i, l, s === a), i = 0, ++s;
          }
        ++i, ++n;
      }
      return t.join("");
    }, Ri = function(e) {
      return vi(e, function(t) {
        return Ys.test(t) ? vr(t.slice(4).toLowerCase()) : t;
      });
    }, Si = function(e) {
      return vi(e, function(t) {
        return Xs.test(t) ? "xn--" + Er(t) : t;
      });
    }, ef = { version: "2.1.0", ucs2: { decode: _r, encode: Ei }, decode: vr, encode: Er, toASCII: Si, toUnicode: Ri }, tf = ef;
  });
  Ii = b((fu, Bi) => {
    Bi.exports = { isString: function(e) {
      return typeof e == "string";
    }, isObject: function(e) {
      return typeof e == "object" && e !== null;
    }, isNull: function(e) {
      return e === null;
    }, isNullOrUndefined: function(e) {
      return e == null;
    } };
  });
  Li = b((uu, Ci) => {
    var rf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, nf = Object.keys || function() {
      var e = Object.prototype.hasOwnProperty, t = !{ toString: null }.propertyIsEnumerable("toString"), r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], n = r.length;
      return function(i) {
        if (typeof i != "function" && ((typeof i > "u" ? "undefined" : rf(i)) !== "object" || i === null))
          throw new TypeError("Object.keys called on non-object");
        var o = [], a, s;
        for (a in i)
          e.call(i, a) && o.push(a);
        if (t)
          for (s = 0;s < n; s++)
            e.call(i, r[s]) && o.push(r[s]);
        return o;
      };
    }();
    Ci.exports = nf;
  });
  ji = b((lu, ki) => {
    var Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, pt = ki.exports = { unescapeBuffer: ff, unescape: Di, escape: lf, stringify: Fi, encode: Fi, parse: Ui, decode: Ui }, of = _e().Buffer, af = Li(), sf = function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    }, Mi = function(t, r, n) {
      var i;
      if (t == null)
        throw new TypeError('"arr" is null or not defined');
      var o = Object(t), a = o.length >>> 0;
      if (a === 0)
        return -1;
      var s = n | 0;
      if (s >= a)
        return -1;
      for (i = Math.max(s >= 0 ? s : a - Math.abs(s), 0);i < a; ) {
        if (i in o && o[i] === r)
          return i;
        i++;
      }
      return -1;
    };
    function qi() {
    }
    qi.prototype = Object.create ? Object.create(null) : {};
    var Oi = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    function ff(e, t) {
      for (var r = of.allocUnsafe(e.length), n = 0, i, o, a, s, u = 0, l = 0;; u++) {
        if (u < e.length)
          s = e.charCodeAt(u);
        else {
          n > 0 && (r[l++] = 37, n === 2 && (r[l++] = a));
          break;
        }
        switch (n) {
          case 0:
            switch (s) {
              case 37:
                i = 0, o = 0, n = 1;
                break;
              case 43:
                t && (s = 32);
              default:
                r[l++] = s;
                break;
            }
            break;
          case 1:
            if (a = s, i = Oi[s], !(i >= 0)) {
              r[l++] = 37, r[l++] = s, n = 0;
              break;
            }
            n = 2;
            break;
          case 2:
            if (n = 0, o = Oi[s], !(o >= 0)) {
              r[l++] = 37, r[l++] = a, r[l++] = s;
              break;
            }
            r[l++] = 16 * i + o;
            break;
        }
      }
      return r.slice(0, l);
    }
    function Di(e, t) {
      try {
        return decodeURIComponent(e);
      } catch {
        return pt.unescapeBuffer(e, t).toString();
      }
    }
    var k = [];
    for (Se = 0;Se < 256; ++Se)
      k[Se] = "%" + ((Se < 16 ? "0" : "") + Se.toString(16)).toUpperCase();
    var Se, uf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
    function lf(e) {
      typeof e != "string" && ((typeof e > "u" ? "undefined" : Pi(e)) === "object" ? e = String(e) : e += "");
      for (var t = "", r = 0, n = 0;n < e.length; ++n) {
        var i = e.charCodeAt(n);
        if (i < 128) {
          if (uf[i] === 1)
            continue;
          r < n && (t += e.slice(r, n)), r = n + 1, t += k[i];
          continue;
        }
        if (r < n && (t += e.slice(r, n)), i < 2048) {
          r = n + 1, t += k[192 | i >> 6] + k[128 | i & 63];
          continue;
        }
        if (i < 55296 || i >= 57344) {
          r = n + 1, t += k[224 | i >> 12] + k[128 | i >> 6 & 63] + k[128 | i & 63];
          continue;
        }
        ++n;
        var o;
        if (n < e.length)
          o = e.charCodeAt(n) & 1023;
        else
          throw new URIError("URI malformed");
        r = n + 1, i = 65536 + ((i & 1023) << 10 | o), t += k[240 | i >> 18] + k[128 | i >> 12 & 63] + k[128 | i >> 6 & 63] + k[128 | i & 63];
      }
      return r === 0 ? e : r < e.length ? t + e.slice(r) : t;
    }
    function xr(e) {
      return typeof e == "string" ? e : typeof e == "number" && isFinite(e) ? "" + e : typeof e == "boolean" ? e ? "true" : "false" : "";
    }
    function Fi(e, t, r, n) {
      t = t || "&", r = r || "=";
      var i = pt.escape;
      if (n && typeof n.encodeURIComponent == "function" && (i = n.encodeURIComponent), e !== null && (typeof e > "u" ? "undefined" : Pi(e)) === "object") {
        for (var o = af(e), a = o.length, s = a - 1, u = "", l = 0;l < a; ++l) {
          var h = o[l], c = e[h], d = i(xr(h)) + r;
          if (sf(c)) {
            for (var p = c.length, g = p - 1, E = 0;E < p; ++E)
              u += d + i(xr(c[E])), E < g && (u += t);
            p && l < s && (u += t);
          } else
            u += d + i(xr(c)), l < s && (u += t);
        }
        return u;
      }
      return "";
    }
    function Ni(e) {
      if (e.length === 0)
        return [];
      if (e.length === 1)
        return [e.charCodeAt(0)];
      for (var t = [], r = 0;r < e.length; ++r)
        t[t.length] = e.charCodeAt(r);
      return t;
    }
    var hf = [38], cf = [61];
    function Ui(e, t, r, n) {
      var i = new qi;
      if (typeof e != "string" || e.length === 0)
        return i;
      var o = t ? Ni(t + "") : hf, a = r ? Ni(r + "") : cf, s = o.length, u = a.length, l = 1000;
      n && typeof n.maxKeys == "number" && (l = n.maxKeys > 0 ? n.maxKeys : -1);
      var h = pt.unescape;
      n && typeof n.decodeURIComponent == "function" && (h = n.decodeURIComponent);
      for (var c = h !== Di, d = [], p = 0, g = 0, E = 0, v = 0, m = "", y = "", R = c, C = c, T = 0, S = 0;S < e.length; ++S) {
        var B = e.charCodeAt(S);
        if (B === o[E]) {
          if (++E === s) {
            var F = S - E + 1;
            if (v < u ? g < F && (m += e.slice(g, F)) : g < F && (y += e.slice(g, F)), R && (m = dt(m, h)), C && (y = dt(y, h)), m || y || g - p > s || S === 0)
              if (Mi(d, m) === -1)
                i[m] = y, d[d.length] = m;
              else {
                var L = i[m] || "";
                L.pop ? L[L.length] = y : L && (i[m] = [L, y]);
              }
            else
              S === 1 && delete i[m];
            if (--l === 0)
              break;
            R = C = c, T = 0, m = y = "", p = g, g = S + 1, E = v = 0;
          }
          continue;
        } else
          E = 0, C || (B === 37 ? T = 1 : T > 0 && (B >= 48 && B <= 57 || B >= 65 && B <= 70 || B >= 97 && B <= 102) ? ++T === 3 && (C = true) : T = 0);
        if (v < u)
          if (B === a[v]) {
            if (++v === u) {
              var Y = S - v + 1;
              g < Y && (m += e.slice(g, Y)), T = 0, g = S + 1;
            }
            continue;
          } else
            v = 0, R || (B === 37 ? T = 1 : T > 0 && (B >= 48 && B <= 57 || B >= 65 && B <= 70 || B >= 97 && B <= 102) ? ++T === 3 && (R = true) : T = 0);
        B === 43 && (v < u ? (g < S && (m += e.slice(g, S)), m += "%20", R = true) : (g < S && (y += e.slice(g, S)), y += "%20", C = true), g = S + 1);
      }
      if (l !== 0 && (g < e.length || v > 0))
        if (g < e.length && (v < u ? m += e.slice(g) : E < s && (y += e.slice(g))), R && (m = dt(m, h)), C && (y = dt(y, h)), Mi(d, m) === -1)
          i[m] = y, d[d.length] = m;
        else {
          var Z = i[m];
          Z.pop ? Z[Z.length] = y : i[m] = [Z, y];
        }
      return i;
    }
    function dt(e, t) {
      try {
        return t(e);
      } catch {
        return pt.unescape(e, true);
      }
    }
  });
  Ar = b((Ae) => {
    var df = (Ai(), _t(Ti)), V = Ii();
    Ae.parse = qe;
    Ae.resolve = xf;
    Ae.resolveObject = Rf;
    Ae.format = Ef;
    Ae.Url = D;
    function D() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }
    var pf = /^([a-z0-9.+-]+:)/i, yf = /:[0-9]*$/, gf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, wf = ["<", ">", '"', "`", " ", "\r", `
`, "\t"], mf = ["{", "}", "|", "\\", "^", "`"].concat(wf), Rr = ["'"].concat(mf), Wi = ["%", "/", "?", ";", "#"].concat(Rr), Hi = ["/", "?", "#"], bf = 255, $i = /^[+a-z0-9A-Z_-]{0,63}$/, _f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, vf = { javascript: true, "javascript:": true }, Sr = { javascript: true, "javascript:": true }, Te = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, Tr = ji();
    function qe(e, t, r) {
      if (e && V.isObject(e) && e instanceof D)
        return e;
      var n = new D;
      return n.parse(e, t, r), n;
    }
    D.prototype.parse = function(e, t, r) {
      if (!V.isString(e))
        throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
      var n = e.indexOf("?"), i = n !== -1 && n < e.indexOf("#") ? "?" : "#", o = e.split(i), a = /\\/g;
      o[0] = o[0].replace(a, "/"), e = o.join(i);
      var s = e;
      if (s = s.trim(), !r && e.split("#").length === 1) {
        var u = gf.exec(s);
        if (u)
          return this.path = s, this.href = s, this.pathname = u[1], u[2] ? (this.search = u[2], t ? this.query = Tr.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
      }
      var l = pf.exec(s);
      if (l) {
        l = l[0];
        var h = l.toLowerCase();
        this.protocol = h, s = s.substr(l.length);
      }
      if (r || l || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var c = s.substr(0, 2) === "//";
        c && !(l && Sr[l]) && (s = s.substr(2), this.slashes = true);
      }
      if (!Sr[l] && (c || l && !Te[l])) {
        for (var d = -1, p = 0;p < Hi.length; p++) {
          var g = s.indexOf(Hi[p]);
          g !== -1 && (d === -1 || g < d) && (d = g);
        }
        var E, v;
        d === -1 ? v = s.lastIndexOf("@") : v = s.lastIndexOf("@", d), v !== -1 && (E = s.slice(0, v), s = s.slice(v + 1), this.auth = decodeURIComponent(E)), d = -1;
        for (var p = 0;p < Wi.length; p++) {
          var g = s.indexOf(Wi[p]);
          g !== -1 && (d === -1 || g < d) && (d = g);
        }
        d === -1 && (d = s.length), this.host = s.slice(0, d), s = s.slice(d), this.parseHost(), this.hostname = this.hostname || "";
        var m = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!m)
          for (var y = this.hostname.split(/\./), p = 0, R = y.length;p < R; p++) {
            var C = y[p];
            if (!!C && !C.match($i)) {
              for (var T = "", S = 0, B = C.length;S < B; S++)
                C.charCodeAt(S) > 127 ? T += "x" : T += C[S];
              if (!T.match($i)) {
                var F = y.slice(0, p), L = y.slice(p + 1), Y = C.match(_f);
                Y && (F.push(Y[1]), L.unshift(Y[2])), L.length && (s = "/" + L.join(".") + s), this.hostname = F.join(".");
                break;
              }
            }
          }
        this.hostname.length > bf ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), m || (this.hostname = df.toASCII(this.hostname));
        var Z = this.port ? ":" + this.port : "", zi = this.hostname || "";
        this.host = zi + Z, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), s[0] !== "/" && (s = "/" + s));
      }
      if (!vf[h])
        for (var p = 0, R = Rr.length;p < R; p++) {
          var Be = Rr[p];
          if (s.indexOf(Be) !== -1) {
            var gt = encodeURIComponent(Be);
            gt === Be && (gt = escape(Be)), s = s.split(Be).join(gt);
          }
        }
      var wt = s.indexOf("#");
      wt !== -1 && (this.hash = s.substr(wt), s = s.slice(0, wt));
      var je = s.indexOf("?");
      if (je !== -1 ? (this.search = s.substr(je), this.query = s.substr(je + 1), t && (this.query = Tr.parse(this.query)), s = s.slice(0, je)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), Te[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var Z = this.pathname || "", Zi = this.search || "";
        this.path = Z + Zi;
      }
      return this.href = this.format(), this;
    };
    function Ef(e) {
      return V.isString(e) && (e = qe(e)), e instanceof D ? e.format() : D.prototype.format.call(e);
    }
    D.prototype.format = function() {
      var e = this.auth || "";
      e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
      var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = false, o = "";
      this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && V.isObject(this.query) && Object.keys(this.query).length && (o = Tr.stringify(this.query));
      var a = this.search || o && "?" + o || "";
      return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Te[t]) && i !== false ? (i = "//" + (i || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), a && a.charAt(0) !== "?" && (a = "?" + a), r = r.replace(/[?#]/g, function(s) {
        return encodeURIComponent(s);
      }), a = a.replace("#", "%23"), t + i + r + a + n;
    };
    function xf(e, t) {
      return qe(e, false, true).resolve(t);
    }
    D.prototype.resolve = function(e) {
      return this.resolveObject(qe(e, false, true)).format();
    };
    function Rf(e, t) {
      return e ? qe(e, false, true).resolveObject(t) : t;
    }
    D.prototype.resolveObject = function(e) {
      if (V.isString(e)) {
        var t = new D;
        t.parse(e, false, true), e = t;
      }
      for (var r = new D, n = Object.keys(this), i = 0;i < n.length; i++) {
        var o = n[i];
        r[o] = this[o];
      }
      if (r.hash = e.hash, e.href === "")
        return r.href = r.format(), r;
      if (e.slashes && !e.protocol) {
        for (var a = Object.keys(e), s = 0;s < a.length; s++) {
          var u = a[s];
          u !== "protocol" && (r[u] = e[u]);
        }
        return Te[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
      }
      if (e.protocol && e.protocol !== r.protocol) {
        if (!Te[e.protocol]) {
          for (var l = Object.keys(e), h = 0;h < l.length; h++) {
            var c = l[h];
            r[c] = e[c];
          }
          return r.href = r.format(), r;
        }
        if (r.protocol = e.protocol, !e.host && !Sr[e.protocol]) {
          for (var R = (e.pathname || "").split("/");R.length && !(e.host = R.shift()); )
            ;
          e.host || (e.host = ""), e.hostname || (e.hostname = ""), R[0] !== "" && R.unshift(""), R.length < 2 && R.unshift(""), r.pathname = R.join("/");
        } else
          r.pathname = e.pathname;
        if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
          var d = r.pathname || "", p = r.search || "";
          r.path = d + p;
        }
        return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
      }
      var g = r.pathname && r.pathname.charAt(0) === "/", E = e.host || e.pathname && e.pathname.charAt(0) === "/", v = E || g || r.host && e.pathname, m = v, y = r.pathname && r.pathname.split("/") || [], R = e.pathname && e.pathname.split("/") || [], C = r.protocol && !Te[r.protocol];
      if (C && (r.hostname = "", r.port = null, r.host && (y[0] === "" ? y[0] = r.host : y.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (R[0] === "" ? R[0] = e.host : R.unshift(e.host)), e.host = null), v = v && (R[0] === "" || y[0] === "")), E)
        r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, y = R;
      else if (R.length)
        y || (y = []), y.pop(), y = y.concat(R), r.search = e.search, r.query = e.query;
      else if (!V.isNullOrUndefined(e.search)) {
        if (C) {
          r.hostname = r.host = y.shift();
          var T = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : false;
          T && (r.auth = T.shift(), r.host = r.hostname = T.shift());
        }
        return r.search = e.search, r.query = e.query, (!V.isNull(r.pathname) || !V.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
      }
      if (!y.length)
        return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
      for (var S = y.slice(-1)[0], B = (r.host || e.host || y.length > 1) && (S === "." || S === "..") || S === "", F = 0, L = y.length;L >= 0; L--)
        S = y[L], S === "." ? y.splice(L, 1) : S === ".." ? (y.splice(L, 1), F++) : F && (y.splice(L, 1), F--);
      if (!v && !m)
        for (;F--; F)
          y.unshift("..");
      v && y[0] !== "" && (!y[0] || y[0].charAt(0) !== "/") && y.unshift(""), B && y.join("/").substr(-1) !== "/" && y.push("");
      var Y = y[0] === "" || y[0] && y[0].charAt(0) === "/";
      if (C) {
        r.hostname = r.host = Y ? "" : y.length ? y.shift() : "";
        var T = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : false;
        T && (r.auth = T.shift(), r.host = r.hostname = T.shift());
      }
      return v = v || r.host && y.length, v && !Y && y.unshift(""), y.length ? r.pathname = y.join("/") : (r.pathname = null, r.path = null), (!V.isNull(r.pathname) || !V.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
    };
    D.prototype.parseHost = function() {
      var e = this.host, t = yf.exec(e);
      t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
    };
  });
  Vi = b((Ki) => {
    var Gi = pi(), Sf = gr(), Tf = gi(), Af = mi(), Bf = Ar(), j = Ki;
    j.request = function(e, t) {
      typeof e == "string" ? e = Bf.parse(e) : e = Tf(e);
      var r = global.location.protocol.search(/^https?:$/) === -1 ? "http:" : "", n = e.protocol || r, i = e.hostname || e.host, o = e.port, a = e.path || "/";
      i && i.indexOf(":") !== -1 && (i = "[" + i + "]"), e.url = (i ? n + "//" + i : "") + (o ? ":" + o : "") + a, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
      var s = new Gi(e);
      return t && s.on("response", t), s;
    };
    j.get = function(t, r) {
      var n = j.request(t, r);
      return n.end(), n;
    };
    j.ClientRequest = Gi;
    j.IncomingMessage = Sf.IncomingMessage;
    j.Agent = function() {
    };
    j.Agent.defaultMaxSockets = 4;
    j.globalAgent = new j.Agent;
    j.STATUS_CODES = Af;
    j.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
  });
  Ir = b((du, Xi) => {
    var De = Vi(), If = Ar(), Br = Xi.exports;
    for (yt in De)
      De.hasOwnProperty(yt) && (Br[yt] = De[yt]);
    var yt;
    Br.request = function(e, t) {
      return e = Yi(e), De.request.call(this, e, t);
    };
    Br.get = function(e, t) {
      return e = Yi(e), De.get.call(this, e, t);
    };
    function Yi(e) {
      if (typeof e == "string" && (e = If.parse(e)), e.protocol || (e.protocol = "https:"), e.protocol !== "https:")
        throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
      return e;
    }
  });
  ke = {};
  mt(ke, { default: () => Cf });
  $e(ke, bt(Ir()));
  Cf = bt(Ir());
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// node_modules/public-google-sheets-parser/src/fetch.js
var require_fetch = __commonJS((exports, module) => {
  var https = (init_https(), __toCommonJS(exports_https));
  var nodeFetch = async (url) => {
    return new Promise((resolve, reject) => {
      const req = https.request(url, (res) => {
        const body = [];
        let isStarted = false;
        res.on("data", (chunk) => {
          if (!isStarted && !String(chunk).startsWith("/*O_o*/"))
            return resolve(null);
          isStarted = true;
          body.push(chunk);
        });
        res.on("end", () => {
          const response = { ok: true, text: () => Buffer.concat(body).toString() };
          resolve(response);
        });
      });
      req.on("error", reject);
      req.end();
    });
  };
  module.exports = nodeFetch;
  module.exports.default = nodeFetch;
});

// node_modules/public-google-sheets-parser/src/index.js
var require_src = __commonJS((exports, module) => {
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  var fetch2 = isBrowser ? window.fetch : require_fetch();

  class PublicGoogleSheetsParser {
    constructor(spreadsheetId, option) {
      this.id = spreadsheetId;
      this.setOption(option);
    }
    setOption(option) {
      if (!option) {
        this.sheetName = this.sheetName || null;
        this.sheetId = this.sheetId || null;
        this.useFormattedDate = this.useFormattedDate || false;
        this.useFormat = this.useFormat || false;
      } else if (typeof option === "string") {
        this.sheetName = option;
        this.sheetId = this.sheetId || null;
      } else if (typeof option === "object") {
        this.sheetName = option.sheetName || this.sheetName;
        this.sheetId = option.sheetId || this.sheetId;
        this.useFormattedDate = option.hasOwnProperty("useFormattedDate") ? option.useFormattedDate : this.useFormattedDate;
        this.useFormat = option.hasOwnProperty("useFormat") ? option.useFormat : this.useFormat;
      }
    }
    isDate(date) {
      return date && typeof date === "string" && /Date\((\d+),(\d+),(\d+)\)/.test(date);
    }
    async getSpreadsheetDataUsingFetch() {
      if (!this.id)
        return null;
      let url = `https://docs.google.com/spreadsheets/d/${this.id}/gviz/tq?`;
      url += this.sheetId ? `gid=${this.sheetId}` : `sheet=${this.sheetName}`;
      try {
        const response = await fetch2(url);
        return response && response.ok ? response.text() : null;
      } catch (e) {
        console.error("Error fetching spreadsheet data:", e);
        return null;
      }
    }
    normalizeRow(rows) {
      return rows.map((row) => row && (row.v !== null && row.v !== undefined) ? row : {});
    }
    applyHeaderIntoRows(header, rows) {
      return rows.map(({ c: row }) => this.normalizeRow(row)).map((row) => row.reduce((p, c, i) => c.v !== null && c.v !== undefined ? Object.assign(p, { [header[i]]: this.useFormat ? c.f || c.v : this.useFormattedDate && this.isDate(c.v) ? c.f || c.v : c.v }) : p, {}));
    }
    getItems(spreadsheetResponse) {
      let rows = [];
      try {
        const payloadExtractRegex = /google\.visualization\.Query\.setResponse\(({.*})\);/;
        const [_, payload] = spreadsheetResponse.match(payloadExtractRegex);
        const parsedJSON = JSON.parse(payload);
        const hasSomeLabelPropertyInCols = parsedJSON.table.cols.some(({ label }) => !!label);
        if (hasSomeLabelPropertyInCols) {
          const header = parsedJSON.table.cols.map(({ label }) => label);
          rows = this.applyHeaderIntoRows(header, parsedJSON.table.rows);
        } else {
          const [headerRow, ...originalRows] = parsedJSON.table.rows;
          const header = this.normalizeRow(headerRow.c).map((row) => row.v);
          rows = this.applyHeaderIntoRows(header, originalRows);
        }
      } catch (e) {
        console.error("Error parsing spreadsheet data:", e);
      }
      return rows;
    }
    async parse(spreadsheetId, option) {
      if (spreadsheetId)
        this.id = spreadsheetId;
      if (option)
        this.setOption(option);
      if (!this.id)
        throw new Error("SpreadsheetId is required.");
      const spreadsheetResponse = await this.getSpreadsheetDataUsingFetch();
      if (spreadsheetResponse === null)
        return [];
      return this.getItems(spreadsheetResponse);
    }
  }
  if (isBrowser && typeof module === "undefined") {
    window.PublicGoogleSheetsParser = PublicGoogleSheetsParser;
  } else {
    module.exports = PublicGoogleSheetsParser;
    module.exports.default = PublicGoogleSheetsParser;
  }
});

// node_modules/brackets-model/dist/unions.js
var require_unions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/brackets-model/dist/input.js
var require_input = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/brackets-model/dist/storage.js
var require_storage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/brackets-model/dist/other.js
var require_other = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Status = undefined;
  var Status;
  (function(Status2) {
    Status2[Status2["Locked"] = 0] = "Locked";
    Status2[Status2["Waiting"] = 1] = "Waiting";
    Status2[Status2["Ready"] = 2] = "Ready";
    Status2[Status2["Running"] = 3] = "Running";
    Status2[Status2["Completed"] = 4] = "Completed";
    Status2[Status2["Archived"] = 5] = "Archived";
  })(Status = exports.Status || (exports.Status = {}));
});

// node_modules/brackets-model/dist/index.js
var require_dist = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_unions(), exports);
  __exportStar(require_input(), exports);
  __exportStar(require_storage(), exports);
  __exportStar(require_other(), exports);
});

// ../brackets-viewer.js/node_modules/rfdc/index.js
var require_rfdc = __commonJS((exports, module) => {
  module.exports = rfdc;
  function copyBuffer(cur) {
    if (cur instanceof Buffer) {
      return Buffer.from(cur);
    }
    return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
  }
  function rfdc(opts) {
    opts = opts || {};
    if (opts.circles)
      return rfdcCircles(opts);
    return opts.proto ? cloneProto : clone;
    function cloneArray(a, fn) {
      var keys = Object.keys(a);
      var a2 = new Array(keys.length);
      for (var i = 0;i < keys.length; i++) {
        var k = keys[i];
        var cur = a[k];
        if (typeof cur !== "object" || cur === null) {
          a2[k] = cur;
        } else if (cur instanceof Date) {
          a2[k] = new Date(cur);
        } else if (ArrayBuffer.isView(cur)) {
          a2[k] = copyBuffer(cur);
        } else {
          a2[k] = fn(cur);
        }
      }
      return a2;
    }
    function clone(o) {
      if (typeof o !== "object" || o === null)
        return o;
      if (o instanceof Date)
        return new Date(o);
      if (Array.isArray(o))
        return cloneArray(o, clone);
      if (o instanceof Map)
        return new Map(cloneArray(Array.from(o), clone));
      if (o instanceof Set)
        return new Set(cloneArray(Array.from(o), clone));
      var o2 = {};
      for (var k in o) {
        if (Object.hasOwnProperty.call(o, k) === false)
          continue;
        var cur = o[k];
        if (typeof cur !== "object" || cur === null) {
          o2[k] = cur;
        } else if (cur instanceof Date) {
          o2[k] = new Date(cur);
        } else if (cur instanceof Map) {
          o2[k] = new Map(cloneArray(Array.from(cur), clone));
        } else if (cur instanceof Set) {
          o2[k] = new Set(cloneArray(Array.from(cur), clone));
        } else if (ArrayBuffer.isView(cur)) {
          o2[k] = copyBuffer(cur);
        } else {
          o2[k] = clone(cur);
        }
      }
      return o2;
    }
    function cloneProto(o) {
      if (typeof o !== "object" || o === null)
        return o;
      if (o instanceof Date)
        return new Date(o);
      if (Array.isArray(o))
        return cloneArray(o, cloneProto);
      if (o instanceof Map)
        return new Map(cloneArray(Array.from(o), cloneProto));
      if (o instanceof Set)
        return new Set(cloneArray(Array.from(o), cloneProto));
      var o2 = {};
      for (var k in o) {
        var cur = o[k];
        if (typeof cur !== "object" || cur === null) {
          o2[k] = cur;
        } else if (cur instanceof Date) {
          o2[k] = new Date(cur);
        } else if (cur instanceof Map) {
          o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
        } else if (cur instanceof Set) {
          o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
        } else if (ArrayBuffer.isView(cur)) {
          o2[k] = copyBuffer(cur);
        } else {
          o2[k] = cloneProto(cur);
        }
      }
      return o2;
    }
  }
  function rfdcCircles(opts) {
    var refs = [];
    var refsNew = [];
    return opts.proto ? cloneProto : clone;
    function cloneArray(a, fn) {
      var keys = Object.keys(a);
      var a2 = new Array(keys.length);
      for (var i = 0;i < keys.length; i++) {
        var k = keys[i];
        var cur = a[k];
        if (typeof cur !== "object" || cur === null) {
          a2[k] = cur;
        } else if (cur instanceof Date) {
          a2[k] = new Date(cur);
        } else if (ArrayBuffer.isView(cur)) {
          a2[k] = copyBuffer(cur);
        } else {
          var index = refs.indexOf(cur);
          if (index !== -1) {
            a2[k] = refsNew[index];
          } else {
            a2[k] = fn(cur);
          }
        }
      }
      return a2;
    }
    function clone(o) {
      if (typeof o !== "object" || o === null)
        return o;
      if (o instanceof Date)
        return new Date(o);
      if (Array.isArray(o))
        return cloneArray(o, clone);
      if (o instanceof Map)
        return new Map(cloneArray(Array.from(o), clone));
      if (o instanceof Set)
        return new Set(cloneArray(Array.from(o), clone));
      var o2 = {};
      refs.push(o);
      refsNew.push(o2);
      for (var k in o) {
        if (Object.hasOwnProperty.call(o, k) === false)
          continue;
        var cur = o[k];
        if (typeof cur !== "object" || cur === null) {
          o2[k] = cur;
        } else if (cur instanceof Date) {
          o2[k] = new Date(cur);
        } else if (cur instanceof Map) {
          o2[k] = new Map(cloneArray(Array.from(cur), clone));
        } else if (cur instanceof Set) {
          o2[k] = new Set(cloneArray(Array.from(cur), clone));
        } else if (ArrayBuffer.isView(cur)) {
          o2[k] = copyBuffer(cur);
        } else {
          var i = refs.indexOf(cur);
          if (i !== -1) {
            o2[k] = refsNew[i];
          } else {
            o2[k] = clone(cur);
          }
        }
      }
      refs.pop();
      refsNew.pop();
      return o2;
    }
    function cloneProto(o) {
      if (typeof o !== "object" || o === null)
        return o;
      if (o instanceof Date)
        return new Date(o);
      if (Array.isArray(o))
        return cloneArray(o, cloneProto);
      if (o instanceof Map)
        return new Map(cloneArray(Array.from(o), cloneProto));
      if (o instanceof Set)
        return new Set(cloneArray(Array.from(o), cloneProto));
      var o2 = {};
      refs.push(o);
      refsNew.push(o2);
      for (var k in o) {
        var cur = o[k];
        if (typeof cur !== "object" || cur === null) {
          o2[k] = cur;
        } else if (cur instanceof Date) {
          o2[k] = new Date(cur);
        } else if (cur instanceof Map) {
          o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
        } else if (cur instanceof Set) {
          o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
        } else if (ArrayBuffer.isView(cur)) {
          o2[k] = copyBuffer(cur);
        } else {
          var i = refs.indexOf(cur);
          if (i !== -1) {
            o2[k] = refsNew[i];
          } else {
            o2[k] = cloneProto(cur);
          }
        }
      }
      refs.pop();
      refsNew.pop();
      return o2;
    }
  }
});

// ../brackets-viewer.js/node_modules/brackets-memory-db/dist/index.js
var require_dist2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InMemoryDatabase = undefined;
  var rfdc = require_rfdc();
  var clone = rfdc();

  class InMemoryDatabase {
    data = {
      participant: [],
      stage: [],
      group: [],
      round: [],
      match: [],
      match_game: []
    };
    setData(data) {
      this.data = data;
    }
    makeFilter(partial) {
      return (entry) => {
        let result = true;
        for (const key of Object.keys(partial))
          result = result && entry[key] === partial[key];
        return result;
      };
    }
    reset() {
      this.data = {
        participant: [],
        stage: [],
        group: [],
        round: [],
        match: [],
        match_game: []
      };
    }
    insert(table, values) {
      let id = this.data[table].length > 0 ? Math.max(...this.data[table].map((d) => d.id)) + 1 : 0;
      if (!Array.isArray(values)) {
        try {
          this.data[table].push({ id, ...values });
        } catch (error) {
          return new Promise((resolve) => {
            resolve(-1);
          });
        }
        return new Promise((resolve) => {
          resolve(id);
        });
      }
      try {
        values.map((object) => {
          this.data[table].push({ id: id++, ...object });
        });
      } catch (error) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      return new Promise((resolve) => {
        resolve(true);
      });
    }
    select(table, arg) {
      try {
        if (arg === undefined) {
          return new Promise((resolve) => {
            resolve(this.data[table].map(clone));
          });
        }
        if (typeof arg === "number") {
          return new Promise((resolve) => {
            resolve(clone(this.data[table].find((d) => d.id === arg)));
          });
        }
        return new Promise((resolve) => {
          resolve(this.data[table].filter(this.makeFilter(arg)).map(clone));
        });
      } catch (error) {
        return new Promise((resolve) => {
          resolve(null);
        });
      }
    }
    update(table, arg, value) {
      if (typeof arg === "number") {
        try {
          this.data[table][arg] = value;
          return new Promise((resolve) => {
            resolve(true);
          });
        } catch (error) {
          return new Promise((resolve) => {
            resolve(false);
          });
        }
      }
      const values = this.data[table].filter(this.makeFilter(arg));
      if (!values) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      values.forEach((v) => {
        const existing = this.data[table][v.id];
        for (const key in value) {
          if (existing[key] && typeof existing[key] === "object" && typeof value[key] === "object") {
            Object.assign(existing[key], value[key]);
          } else {
            existing[key] = value[key];
          }
        }
        this.data[table][v.id] = existing;
      });
      return new Promise((resolve) => {
        resolve(true);
      });
    }
    delete(table, filter) {
      const values = this.data[table];
      if (!values) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      if (!filter) {
        this.data[table] = [];
        return new Promise((resolve) => {
          resolve(true);
        });
      }
      const predicate = this.makeFilter(filter);
      const negativeFilter = (value) => !predicate(value);
      this.data[table] = values.filter(negativeFilter);
      return new Promise((resolve) => {
        resolve(true);
      });
    }
  }
  exports.InMemoryDatabase = InMemoryDatabase;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/ordering.js
var require_ordering = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultMinorOrdering = exports.ordering = undefined;
  exports.ordering = {
    natural: (array) => [...array],
    reverse: (array) => [...array].reverse(),
    half_shift: (array) => [...array.slice(array.length / 2), ...array.slice(0, array.length / 2)],
    reverse_half_shift: (array) => [...array.slice(0, array.length / 2).reverse(), ...array.slice(array.length / 2).reverse()],
    pair_flip: (array) => {
      const result = [];
      for (let i = 0;i < array.length; i += 2)
        result.push(array[i + 1], array[i]);
      return result;
    },
    inner_outer: (array) => {
      if (array.length === 2)
        return array;
      const size = array.length / 4;
      const innerPart = [array.slice(size, 2 * size), array.slice(2 * size, 3 * size)];
      const outerPart = [array.slice(0, size), array.slice(3 * size, 4 * size)];
      const methods = {
        inner(part) {
          return [part[0].pop(), part[1].shift()];
        },
        outer(part) {
          return [part[0].shift(), part[1].pop()];
        }
      };
      const result = [];
      function add(part, method) {
        if (part[0].length > 0 && part[1].length > 0)
          result.push(...methods[method](part));
      }
      for (let i = 0;i < size / 2; i++) {
        add(outerPart, "outer");
        add(innerPart, "inner");
        add(outerPart, "inner");
        add(innerPart, "outer");
      }
      return result;
    },
    "groups.effort_balanced": (array, groupCount) => {
      const result = [];
      let i = 0, j = 0;
      while (result.length < array.length) {
        result.push(array[i]);
        i += groupCount;
        if (i >= array.length)
          i = ++j;
      }
      return result;
    },
    "groups.seed_optimized": (array, groupCount) => {
      const groups = Array.from({ length: groupCount }, (_) => []);
      for (let run = 0;run < array.length / groupCount; run++) {
        if (run % 2 === 0) {
          for (let group = 0;group < groupCount; group++)
            groups[group].push(array[run * groupCount + group]);
        } else {
          for (let group = 0;group < groupCount; group++)
            groups[groupCount - group - 1].push(array[run * groupCount + group]);
        }
      }
      return groups.flat();
    },
    "groups.bracket_optimized": () => {
      throw Error("Not implemented.");
    }
  };
  exports.defaultMinorOrdering = {
    4: ["natural", "reverse"],
    8: ["natural", "reverse", "natural"],
    16: ["natural", "reverse_half_shift", "reverse", "natural"],
    32: ["natural", "reverse", "half_shift", "natural", "natural"],
    64: ["natural", "reverse", "half_shift", "reverse", "natural", "natural"],
    128: ["natural", "reverse", "half_shift", "pair_flip", "pair_flip", "pair_flip", "natural"]
  };
});

// ../brackets-viewer.js/node_modules/brackets-model/dist/unions.js
var require_unions2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../brackets-viewer.js/node_modules/brackets-model/dist/input.js
var require_input2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../brackets-viewer.js/node_modules/brackets-model/dist/storage.js
var require_storage2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../brackets-viewer.js/node_modules/brackets-model/dist/other.js
var require_other2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Status = undefined;
  var Status3;
  (function(Status4) {
    Status4[Status4["Locked"] = 0] = "Locked";
    Status4[Status4["Waiting"] = 1] = "Waiting";
    Status4[Status4["Ready"] = 2] = "Ready";
    Status4[Status4["Running"] = 3] = "Running";
    Status4[Status4["Completed"] = 4] = "Completed";
    Status4[Status4["Archived"] = 5] = "Archived";
  })(Status3 = exports.Status || (exports.Status = {}));
});

// ../brackets-viewer.js/node_modules/brackets-model/dist/index.js
var require_dist3 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_unions2(), exports);
  __exportStar(require_input2(), exports);
  __exportStar(require_storage2(), exports);
  __exportStar(require_other2(), exports);
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/helpers.js
var require_helpers = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.setExtraFields = exports.resetMatchResults = exports.setMatchResults = exports.getMatchStatus = exports.hasBye = exports.isMatchParticipantLocked = exports.isMatchUpdateLocked = exports.isMatchByeCompleted = exports.isMatchWinCompleted = exports.isMatchDrawCompleted = exports.isMatchResultCompleted = exports.isMatchForfeitCompleted = exports.isMatchStale = exports.isMatchOngoing = exports.isMatchCompleted = exports.isMatchStarted = exports.isMatchPending = exports.getOtherSide = exports.getSide = exports.isParticipantInMatch = exports.findPosition = exports.getMatchResult = exports.byeLoser = exports.byeWinnerToGrandFinal = exports.byeWinner = exports.getLoser = exports.getWinner = exports.toResultWithPosition = exports.toResult = exports.convertTBDtoBYE = exports.ensureNotTied = exports.ensureValidSize = exports.isPowerOfTwo = exports.fixSeeding = exports.ensureEquallySized = exports.ensureNoDuplicates = exports.ensureEvenSized = exports.makePairs = exports.setArraySize = exports.normalizeParticipant = exports.makeNormalizedIdMapping = exports.normalizeIds = exports.balanceByes = exports.makeGroups = exports.assertRoundRobin = exports.makeRoundRobinDistribution = exports.makeRoundRobinMatches = exports.splitByParity = exports.splitBy = exports.isDefined = undefined;
  exports.getLowerBracketRoundCount = exports.getLoserOrdering = exports.getLoserCountFromWbForLbRound = exports.getLoserRoundMatchCount = exports.findLoserMatchNumber = exports.isDoubleEliminationNecessary = exports.getRoundPairCount = exports.getUpperBracketRoundCount = exports.isOrderingSupportedLoserBracket = exports.isOrderingSupportedUpperBracket = exports.ensureOrderingSupported = exports.getSeedCount = exports.getSeeds = exports.getChildGamesResults = exports.getUpdatedMatchResults = exports.getParentMatchResults = exports.setParentMatchCompleted = exports.transitionToMinor = exports.transitionToMajor = exports.isMinorRound = exports.isMajorRound = exports.uniqueBy = exports.getNonNull = exports.sortSeeding = exports.convertSlotsToSeeding = exports.convertMatchesToSeeding = exports.mapParticipantsToDatabase = exports.mapParticipantsIdsToDatabase = exports.mapParticipantsNamesToDatabase = exports.extractParticipantsFromSeeding = exports.isSeedingWithIds = exports.setForfeits = exports.setResults = exports.setCompleted = exports.getInferredResult = exports.setScores = exports.invertOpponents = exports.handleGivenStatus = exports.handleOpponentsInversion = exports.resetNextOpponent = exports.setNextOpponent = exports.getNextSideConsolationFinalDoubleElimination = exports.getNextSideLoserBracket = exports.getNextSide = exports.findParticipant = exports.getGrandFinalDecisiveMatch = exports.makeFinalStandings = exports.getLosers = exports.getOriginPosition = exports.getOpponentId = undefined;
  exports.getFractionOfFinal = exports.getMatchLocation = exports.isFinalGroup = exports.isLoserBracket = exports.isWinnerBracket = exports.isRoundCompleted = exports.ensureNotRoundRobin = exports.isRoundRobin = exports.minScoreToWinBestOfX = exports.getNearestPowerOfTwo = exports.getDiagonalMatchNumber = undefined;
  var brackets_model_1 = require_dist3();
  var ordering_1 = require_ordering();
  function isDefined(value) {
    return value !== null && value !== undefined;
  }
  exports.isDefined = isDefined;
  function splitBy(objects, key) {
    const map = {};
    for (const obj of objects) {
      const commonValue = obj[key];
      if (!map[commonValue])
        map[commonValue] = [];
      map[commonValue].push(obj);
    }
    return Object.values(map);
  }
  exports.splitBy = splitBy;
  function splitByParity(array) {
    return {
      even: array.filter((_, i) => i % 2 === 0),
      odd: array.filter((_, i) => i % 2 === 1)
    };
  }
  exports.splitByParity = splitByParity;
  function makeRoundRobinMatches(participants, mode = "simple") {
    const distribution = makeRoundRobinDistribution(participants);
    if (mode === "simple")
      return distribution;
    const symmetry = distribution.map((round) => [...round].reverse()).reverse();
    return [...distribution, ...symmetry];
  }
  exports.makeRoundRobinMatches = makeRoundRobinMatches;
  function makeRoundRobinDistribution(participants) {
    const n = participants.length;
    const n1 = n % 2 === 0 ? n : n + 1;
    const roundCount = n1 - 1;
    const matchPerRound = n1 / 2;
    const rounds = [];
    for (let roundId = 0;roundId < roundCount; roundId++) {
      const matches = [];
      for (let matchId = 0;matchId < matchPerRound; matchId++) {
        if (matchId === 0 && n % 2 === 1)
          continue;
        const opponentsIds = [
          (roundId - matchId - 1 + n1) % (n1 - 1),
          matchId === 0 ? n1 - 1 : (roundId + matchId) % (n1 - 1)
        ];
        matches.push([
          participants[opponentsIds[0]],
          participants[opponentsIds[1]]
        ]);
      }
      rounds.push(matches);
    }
    return rounds;
  }
  exports.makeRoundRobinDistribution = makeRoundRobinDistribution;
  function assertRoundRobin(input, output) {
    const n = input.length;
    const matchPerRound = Math.floor(n / 2);
    const roundCount = n % 2 === 0 ? n - 1 : n;
    if (output.length !== roundCount)
      throw Error("Round count is wrong");
    if (!output.every((round) => round.length === matchPerRound))
      throw Error("Not every round has the good number of matches");
    const checkAllOpponents = Object.fromEntries(input.map((element) => [element, new Set]));
    for (const round of output) {
      const checkUnique = new Set;
      for (const match of round) {
        if (match.length !== 2)
          throw Error("One match is not a pair");
        if (checkUnique.has(match[0]))
          throw Error("This team is already playing");
        checkUnique.add(match[0]);
        if (checkUnique.has(match[1]))
          throw Error("This team is already playing");
        checkUnique.add(match[1]);
        if (checkAllOpponents[match[0]].has(match[1]))
          throw Error("The team has already matched this team");
        checkAllOpponents[match[0]].add(match[1]);
        if (checkAllOpponents[match[1]].has(match[0]))
          throw Error("The team has already matched this team");
        checkAllOpponents[match[1]].add(match[0]);
      }
    }
  }
  exports.assertRoundRobin = assertRoundRobin;
  function makeGroups(elements, groupCount) {
    const groupSize = Math.ceil(elements.length / groupCount);
    const result = [];
    for (let i = 0;i < elements.length; i++) {
      if (i % groupSize === 0)
        result.push([]);
      result[result.length - 1].push(elements[i]);
    }
    return result;
  }
  exports.makeGroups = makeGroups;
  function balanceByes(seeding, participantCount) {
    seeding = seeding.filter((v) => v !== null);
    participantCount = participantCount || getNearestPowerOfTwo(seeding.length);
    if (seeding.length < participantCount / 2) {
      const flat2 = seeding.flatMap((v) => [v, null]);
      return setArraySize(flat2, participantCount, null);
    }
    const nonNullCount = seeding.length;
    const nullCount = participantCount - nonNullCount;
    const againstEachOther = seeding.slice(0, nonNullCount - nullCount).filter((_, i) => i % 2 === 0).map((_, i) => [seeding[2 * i], seeding[2 * i + 1]]);
    const againstNull = seeding.slice(nonNullCount - nullCount, nonNullCount).map((v) => [v, null]);
    const flat = [...againstEachOther.flat(), ...againstNull.flat()];
    return setArraySize(flat, participantCount, null);
  }
  exports.balanceByes = balanceByes;
  function normalizeIds(data) {
    const mappings = {
      participant: makeNormalizedIdMapping(data.participant),
      stage: makeNormalizedIdMapping(data.stage),
      group: makeNormalizedIdMapping(data.group),
      round: makeNormalizedIdMapping(data.round),
      match: makeNormalizedIdMapping(data.match),
      match_game: makeNormalizedIdMapping(data.match_game)
    };
    return {
      participant: data.participant.map((value) => ({
        ...value,
        id: mappings.participant[value.id]
      })),
      stage: data.stage.map((value) => ({
        ...value,
        id: mappings.stage[value.id]
      })),
      group: data.group.map((value) => ({
        ...value,
        id: mappings.group[value.id],
        stage_id: mappings.stage[value.stage_id]
      })),
      round: data.round.map((value) => ({
        ...value,
        id: mappings.round[value.id],
        stage_id: mappings.stage[value.stage_id],
        group_id: mappings.group[value.group_id]
      })),
      match: data.match.map((value) => ({
        ...value,
        id: mappings.match[value.id],
        stage_id: mappings.stage[value.stage_id],
        group_id: mappings.group[value.group_id],
        round_id: mappings.round[value.round_id],
        opponent1: normalizeParticipant(value.opponent1, mappings.participant),
        opponent2: normalizeParticipant(value.opponent2, mappings.participant)
      })),
      match_game: data.match_game.map((value) => ({
        ...value,
        id: mappings.match_game[value.id],
        stage_id: mappings.stage[value.stage_id],
        parent_id: mappings.match[value.parent_id],
        opponent1: normalizeParticipant(value.opponent1, mappings.participant),
        opponent2: normalizeParticipant(value.opponent2, mappings.participant)
      }))
    };
  }
  exports.normalizeIds = normalizeIds;
  function makeNormalizedIdMapping(elements) {
    let currentId = 0;
    return elements.reduce((acc, current) => ({
      ...acc,
      [current.id]: currentId++
    }), {});
  }
  exports.makeNormalizedIdMapping = makeNormalizedIdMapping;
  function normalizeParticipant(participant, mapping) {
    if (participant === null)
      return null;
    return {
      ...participant,
      id: participant.id !== null ? mapping[participant.id] : null
    };
  }
  exports.normalizeParticipant = normalizeParticipant;
  function setArraySize(array, length, placeholder) {
    return Array.from({ length }, (_, i) => array[i] || placeholder);
  }
  exports.setArraySize = setArraySize;
  function makePairs(array) {
    return array.map((_, i) => i % 2 === 0 ? [array[i], array[i + 1]] : []).filter((v) => v.length === 2);
  }
  exports.makePairs = makePairs;
  function ensureEvenSized(array) {
    if (array.length % 2 === 1)
      throw Error("Array size must be even.");
  }
  exports.ensureEvenSized = ensureEvenSized;
  function ensureNoDuplicates(array) {
    const nonNull = getNonNull(array);
    const unique = nonNull.filter((item, index) => {
      const stringifiedItem = JSON.stringify(item);
      return nonNull.findIndex((obj) => JSON.stringify(obj) === stringifiedItem) === index;
    });
    if (unique.length < nonNull.length)
      throw new Error("The seeding has a duplicate participant.");
  }
  exports.ensureNoDuplicates = ensureNoDuplicates;
  function ensureEquallySized(left, right) {
    if (left.length !== right.length)
      throw Error("Arrays' size must be equal.");
  }
  exports.ensureEquallySized = ensureEquallySized;
  function fixSeeding(seeding, participantCount) {
    if (seeding.length > participantCount)
      throw Error("The seeding has more participants than the size of the stage.");
    if (seeding.length < participantCount)
      return setArraySize(seeding, participantCount, null);
    return seeding;
  }
  exports.fixSeeding = fixSeeding;
  function isPowerOfTwo(number) {
    return Number.isInteger(Math.log2(number));
  }
  exports.isPowerOfTwo = isPowerOfTwo;
  function ensureValidSize(stageType, participantCount) {
    if (participantCount === 0)
      throw Error("Impossible to create an empty stage. If you want an empty seeding, just set the size of the stage.");
    if (participantCount < 2)
      throw Error("Impossible to create a stage with less than 2 participants.");
    if (stageType === "round_robin") {
      return;
    }
    if (!isPowerOfTwo(participantCount))
      throw Error("The library only supports a participant count which is a power of two.");
  }
  exports.ensureValidSize = ensureValidSize;
  function ensureNotTied(scores) {
    if (scores[0] === scores[1])
      throw Error(`${scores[0]} and ${scores[1]} are tied. It cannot be.`);
  }
  exports.ensureNotTied = ensureNotTied;
  function convertTBDtoBYE(slot) {
    if (slot === null)
      return null;
    if ((slot === null || slot === undefined ? undefined : slot.id) === null)
      return null;
    return slot;
  }
  exports.convertTBDtoBYE = convertTBDtoBYE;
  function toResult(slot) {
    return slot && {
      id: slot.id
    };
  }
  exports.toResult = toResult;
  function toResultWithPosition(slot) {
    return slot && {
      id: slot.id,
      position: slot.position
    };
  }
  exports.toResultWithPosition = toResultWithPosition;
  function getWinner(match) {
    const winnerSide = getMatchResult(match);
    if (!winnerSide)
      return null;
    return match[winnerSide];
  }
  exports.getWinner = getWinner;
  function getLoser(match) {
    const winnerSide = getMatchResult(match);
    if (!winnerSide)
      return null;
    return match[getOtherSide(winnerSide)];
  }
  exports.getLoser = getLoser;
  function byeWinner(opponents) {
    if (opponents[0] === null && opponents[1] === null)
      return null;
    if (opponents[0] === null && opponents[1] !== null)
      return { id: opponents[1].id };
    if (opponents[0] !== null && opponents[1] === null)
      return { id: opponents[0].id };
    return { id: null };
  }
  exports.byeWinner = byeWinner;
  function byeWinnerToGrandFinal(opponents) {
    const winner = byeWinner(opponents);
    if (winner)
      winner.position = 1;
    return winner;
  }
  exports.byeWinnerToGrandFinal = byeWinnerToGrandFinal;
  function byeLoser(opponents, index) {
    if (opponents[0] === null || opponents[1] === null)
      return null;
    return { id: null, position: index + 1 };
  }
  exports.byeLoser = byeLoser;
  function getMatchResult(match) {
    var _a, _b;
    if (!isMatchCompleted(match))
      return null;
    if (isMatchDrawCompleted(match))
      return null;
    if (match.opponent1 === null && match.opponent2 === null)
      return null;
    let winner = null;
    if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === "win" || match.opponent2 === null || match.opponent2.forfeit)
      winner = "opponent1";
    if (((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === "win" || match.opponent1 === null || match.opponent1.forfeit) {
      if (winner !== null)
        throw Error("There are two winners.");
      winner = "opponent2";
    }
    return winner;
  }
  exports.getMatchResult = getMatchResult;
  function findPosition(matches, position) {
    var _a, _b;
    for (const match of matches) {
      if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.position) === position)
        return match.opponent1;
      if (((_b = match.opponent2) === null || _b === undefined ? undefined : _b.position) === position)
        return match.opponent2;
    }
    return null;
  }
  exports.findPosition = findPosition;
  function isParticipantInMatch(match, participantId) {
    return [match.opponent1, match.opponent2].some((m) => (m === null || m === undefined ? undefined : m.id) === participantId);
  }
  exports.isParticipantInMatch = isParticipantInMatch;
  function getSide(matchNumber) {
    return matchNumber % 2 === 1 ? "opponent1" : "opponent2";
  }
  exports.getSide = getSide;
  function getOtherSide(side) {
    return side === "opponent1" ? "opponent2" : "opponent1";
  }
  exports.getOtherSide = getOtherSide;
  function isMatchPending(match) {
    var _a, _b;
    return !((_a = match.opponent1) === null || _a === undefined ? undefined : _a.id) || !((_b = match.opponent2) === null || _b === undefined ? undefined : _b.id);
  }
  exports.isMatchPending = isMatchPending;
  function isMatchStarted(match) {
    var _a, _b;
    return ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.score) !== undefined || ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.score) !== undefined;
  }
  exports.isMatchStarted = isMatchStarted;
  function isMatchCompleted(match) {
    return isMatchByeCompleted(match) || isMatchForfeitCompleted(match) || isMatchResultCompleted(match);
  }
  exports.isMatchCompleted = isMatchCompleted;
  function isMatchOngoing(match) {
    return [brackets_model_1.Status.Ready, brackets_model_1.Status.Running].includes(match.status);
  }
  exports.isMatchOngoing = isMatchOngoing;
  function isMatchStale(match) {
    return match.status >= brackets_model_1.Status.Completed || isMatchByeCompleted(match);
  }
  exports.isMatchStale = isMatchStale;
  function isMatchForfeitCompleted(match) {
    var _a, _b;
    return ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.forfeit) !== undefined || ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.forfeit) !== undefined;
  }
  exports.isMatchForfeitCompleted = isMatchForfeitCompleted;
  function isMatchResultCompleted(match) {
    return isMatchDrawCompleted(match) || isMatchWinCompleted(match);
  }
  exports.isMatchResultCompleted = isMatchResultCompleted;
  function isMatchDrawCompleted(match) {
    var _a, _b;
    return ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === "draw" && ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === "draw";
  }
  exports.isMatchDrawCompleted = isMatchDrawCompleted;
  function isMatchWinCompleted(match) {
    var _a, _b, _c, _d;
    return ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === "win" || ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === "win" || ((_c = match.opponent1) === null || _c === undefined ? undefined : _c.result) === "loss" || ((_d = match.opponent2) === null || _d === undefined ? undefined : _d.result) === "loss";
  }
  exports.isMatchWinCompleted = isMatchWinCompleted;
  function isMatchByeCompleted(match) {
    var _a, _b;
    return match.opponent1 === null && ((_a = match.opponent2) === null || _a === undefined ? undefined : _a.id) !== null || match.opponent2 === null && ((_b = match.opponent1) === null || _b === undefined ? undefined : _b.id) !== null || match.opponent1 === null && match.opponent2 === null;
  }
  exports.isMatchByeCompleted = isMatchByeCompleted;
  function isMatchUpdateLocked(match) {
    return match.status === brackets_model_1.Status.Locked || match.status === brackets_model_1.Status.Waiting || match.status === brackets_model_1.Status.Archived || isMatchByeCompleted(match);
  }
  exports.isMatchUpdateLocked = isMatchUpdateLocked;
  function isMatchParticipantLocked(match) {
    return match.status >= brackets_model_1.Status.Running;
  }
  exports.isMatchParticipantLocked = isMatchParticipantLocked;
  function hasBye(match) {
    return match.opponent1 === null || match.opponent2 === null;
  }
  exports.hasBye = hasBye;
  function getMatchStatus(arg) {
    var _a, _b, _c, _d;
    const match = Array.isArray(arg) ? {
      opponent1: arg[0],
      opponent2: arg[1]
    } : arg;
    if (hasBye(match))
      return brackets_model_1.Status.Locked;
    if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.id) === null && ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.id) === null)
      return brackets_model_1.Status.Locked;
    if (((_c = match.opponent1) === null || _c === undefined ? undefined : _c.id) === null || ((_d = match.opponent2) === null || _d === undefined ? undefined : _d.id) === null)
      return brackets_model_1.Status.Waiting;
    if (isMatchCompleted(match))
      return brackets_model_1.Status.Completed;
    if (isMatchStarted(match))
      return brackets_model_1.Status.Running;
    return brackets_model_1.Status.Ready;
  }
  exports.getMatchStatus = getMatchStatus;
  function setMatchResults(stored, match, inRoundRobin) {
    var _a, _b;
    handleGivenStatus(stored, match);
    if (!inRoundRobin && (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === "draw" || ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === "draw"))
      throw Error("Having a draw is forbidden in an elimination tournament.");
    const completed = isMatchCompleted(match);
    const currentlyCompleted = isMatchCompleted(stored);
    setExtraFields(stored, match);
    handleOpponentsInversion(stored, match);
    const statusChanged = setScores(stored, match);
    if (completed && currentlyCompleted) {
      setCompleted(stored, match, inRoundRobin);
      return { statusChanged: false, resultChanged: true };
    }
    if (completed && !currentlyCompleted) {
      setCompleted(stored, match, inRoundRobin);
      return { statusChanged: true, resultChanged: true };
    }
    if (!completed && currentlyCompleted) {
      resetMatchResults(stored);
      return { statusChanged: true, resultChanged: true };
    }
    return { statusChanged, resultChanged: false };
  }
  exports.setMatchResults = setMatchResults;
  function resetMatchResults(stored) {
    if (stored.opponent1) {
      stored.opponent1.forfeit = undefined;
      stored.opponent1.result = undefined;
    }
    if (stored.opponent2) {
      stored.opponent2.forfeit = undefined;
      stored.opponent2.result = undefined;
    }
    stored.status = getMatchStatus(stored);
  }
  exports.resetMatchResults = resetMatchResults;
  function setExtraFields(stored, match) {
    const partialAssign = (target, update, ignoredKeys2) => {
      if (!target || !update)
        return;
      const retainedKeys = Object.keys(update).filter((key) => !ignoredKeys2.includes(key));
      retainedKeys.forEach((key) => {
        target[key] = update[key];
      });
    };
    const ignoredKeys = [
      "id",
      "number",
      "stage_id",
      "group_id",
      "round_id",
      "status",
      "opponent1",
      "opponent2",
      "child_count",
      "parent_id"
    ];
    const ignoredOpponentKeys = [
      "id",
      "score",
      "position",
      "forfeit",
      "result"
    ];
    partialAssign(stored, match, ignoredKeys);
    partialAssign(stored.opponent1, match.opponent1, ignoredOpponentKeys);
    partialAssign(stored.opponent2, match.opponent2, ignoredOpponentKeys);
  }
  exports.setExtraFields = setExtraFields;
  function getOpponentId(match, side) {
    const opponent = match[side];
    return opponent && opponent.id;
  }
  exports.getOpponentId = getOpponentId;
  function getOriginPosition(match, side) {
    var _a;
    const matchNumber = (_a = match[side]) === null || _a === undefined ? undefined : _a.position;
    if (matchNumber === undefined)
      throw Error("Position is undefined.");
    return matchNumber;
  }
  exports.getOriginPosition = getOriginPosition;
  function getLosers(participants, matches) {
    const losers = [];
    let currentRound = null;
    let roundIndex = -1;
    for (const match of matches) {
      if (match.round_id !== currentRound) {
        currentRound = match.round_id;
        roundIndex++;
        losers[roundIndex] = [];
      }
      const loser = getLoser(match);
      if (loser === null)
        continue;
      losers[roundIndex].push(findParticipant(participants, loser));
    }
    return losers;
  }
  exports.getLosers = getLosers;
  function makeFinalStandings(grouped) {
    const standings = [];
    let rank = 1;
    for (const group of grouped) {
      for (const participant of group) {
        standings.push({
          id: participant.id,
          name: participant.name,
          rank
        });
      }
      rank++;
    }
    return standings;
  }
  exports.makeFinalStandings = makeFinalStandings;
  function getGrandFinalDecisiveMatch(type, matches) {
    if (type === "simple")
      return matches[0];
    if (type === "double") {
      const result = getMatchResult(matches[0]);
      if (result === "opponent2")
        return matches[1];
      return matches[0];
    }
    throw Error("The Grand Final is disabled.");
  }
  exports.getGrandFinalDecisiveMatch = getGrandFinalDecisiveMatch;
  function findParticipant(participants, slot) {
    if (!slot)
      throw Error("Cannot find a BYE participant.");
    const participant = participants.find((participant2) => participant2.id === (slot === null || slot === undefined ? undefined : slot.id));
    if (!participant)
      throw Error("Participant not found.");
    return participant;
  }
  exports.findParticipant = findParticipant;
  function getNextSide(matchNumber, roundNumber, roundCount, matchLocation) {
    if (matchLocation === "loser_bracket" && roundNumber % 2 === 1)
      return "opponent2";
    if (matchLocation === "loser_bracket" && roundNumber === roundCount)
      return "opponent2";
    return getSide(matchNumber);
  }
  exports.getNextSide = getNextSide;
  function getNextSideLoserBracket(matchNumber, nextMatch, roundNumber) {
    var _a;
    if (roundNumber > 1)
      return "opponent1";
    if (((_a = nextMatch.opponent1) === null || _a === undefined ? undefined : _a.position) === matchNumber)
      return "opponent1";
    return "opponent2";
  }
  exports.getNextSideLoserBracket = getNextSideLoserBracket;
  function getNextSideConsolationFinalDoubleElimination(roundNumber) {
    return isMajorRound(roundNumber) ? "opponent1" : "opponent2";
  }
  exports.getNextSideConsolationFinalDoubleElimination = getNextSideConsolationFinalDoubleElimination;
  function setNextOpponent(nextMatch, nextSide, match, currentSide) {
    var _a;
    nextMatch[nextSide] = match[currentSide] && {
      id: getOpponentId(match, currentSide),
      position: (_a = nextMatch[nextSide]) === null || _a === undefined ? undefined : _a.position
    };
    nextMatch.status = getMatchStatus(nextMatch);
  }
  exports.setNextOpponent = setNextOpponent;
  function resetNextOpponent(nextMatch, nextSide) {
    var _a;
    nextMatch[nextSide] = nextMatch[nextSide] && {
      id: null,
      position: (_a = nextMatch[nextSide]) === null || _a === undefined ? undefined : _a.position
    };
    nextMatch.status = brackets_model_1.Status.Locked;
  }
  exports.resetNextOpponent = resetNextOpponent;
  function handleOpponentsInversion(stored, match) {
    var _a, _b, _c, _d;
    const id1 = (_a = match.opponent1) === null || _a === undefined ? undefined : _a.id;
    const id2 = (_b = match.opponent2) === null || _b === undefined ? undefined : _b.id;
    const storedId1 = (_c = stored.opponent1) === null || _c === undefined ? undefined : _c.id;
    const storedId2 = (_d = stored.opponent2) === null || _d === undefined ? undefined : _d.id;
    if (isDefined(id1) && id1 !== storedId1 && id1 !== storedId2)
      throw Error("The given opponent1 ID does not exist in this match.");
    if (isDefined(id2) && id2 !== storedId1 && id2 !== storedId2)
      throw Error("The given opponent2 ID does not exist in this match.");
    if (isDefined(id1) && id1 === storedId2 || isDefined(id2) && id2 === storedId1)
      invertOpponents(match);
  }
  exports.handleOpponentsInversion = handleOpponentsInversion;
  function handleGivenStatus(stored, match) {
    var _a, _b, _c, _d;
    if (match.status === brackets_model_1.Status.Running) {
      (_a = stored.opponent1) === null || _a === undefined || delete _a.result;
      (_b = stored.opponent2) === null || _b === undefined || delete _b.result;
      stored.status = brackets_model_1.Status.Running;
    } else if (match.status === brackets_model_1.Status.Completed) {
      if (((_c = match.opponent1) === null || _c === undefined ? undefined : _c.score) === undefined || ((_d = match.opponent2) === null || _d === undefined ? undefined : _d.score) === undefined)
        return;
      if (match.opponent1.score > match.opponent2.score)
        match.opponent1.result = "win";
      else if (match.opponent2.score > match.opponent1.score)
        match.opponent2.result = "win";
      else {
        match.opponent1.result = "draw";
        match.opponent2.result = "draw";
      }
      stored.status = brackets_model_1.Status.Completed;
    }
  }
  exports.handleGivenStatus = handleGivenStatus;
  function invertOpponents(match) {
    [match.opponent1, match.opponent2] = [match.opponent2, match.opponent1];
  }
  exports.invertOpponents = invertOpponents;
  function setScores(stored, match) {
    var _a, _b, _c, _d;
    if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.score) === ((_b = stored.opponent1) === null || _b === undefined ? undefined : _b.score) && ((_c = match.opponent2) === null || _c === undefined ? undefined : _c.score) === ((_d = stored.opponent2) === null || _d === undefined ? undefined : _d.score))
      return false;
    const oldStatus = stored.status;
    stored.status = brackets_model_1.Status.Running;
    if (match.opponent1 && stored.opponent1)
      stored.opponent1.score = match.opponent1.score;
    if (match.opponent2 && stored.opponent2)
      stored.opponent2.score = match.opponent2.score;
    return stored.status !== oldStatus;
  }
  exports.setScores = setScores;
  function getInferredResult(opponent1, opponent2) {
    if (opponent1 && !opponent2)
      return { opponent1: { ...opponent1, result: "win" }, opponent2: null };
    if (!opponent1 && opponent2)
      return { opponent1: null, opponent2: { ...opponent2, result: "win" } };
    return { opponent1, opponent2 };
  }
  exports.getInferredResult = getInferredResult;
  function setCompleted(stored, match, inRoundRobin) {
    stored.status = brackets_model_1.Status.Completed;
    setResults(stored, match, "win", "loss", inRoundRobin);
    setResults(stored, match, "loss", "win", inRoundRobin);
    setResults(stored, match, "draw", "draw", inRoundRobin);
    const { opponent1, opponent2 } = getInferredResult(stored.opponent1, stored.opponent2);
    stored.opponent1 = opponent1;
    stored.opponent2 = opponent2;
    setForfeits(stored, match);
  }
  exports.setCompleted = setCompleted;
  function setResults(stored, match, check, change, inRoundRobin) {
    var _a, _b;
    if (match.opponent1 && match.opponent2) {
      if (match.opponent1.result === "win" && match.opponent2.result === "win")
        throw Error("There are two winners.");
      if (match.opponent1.result === "loss" && match.opponent2.result === "loss")
        throw Error("There are two losers.");
      if (!inRoundRobin && match.opponent1.forfeit === true && match.opponent2.forfeit === true)
        throw Error("There are two forfeits.");
    }
    if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === check) {
      if (stored.opponent1)
        stored.opponent1.result = check;
      else
        stored.opponent1 = { id: null, result: check };
      if (stored.opponent2)
        stored.opponent2.result = change;
      else
        stored.opponent2 = { id: null, result: change };
    }
    if (((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === check) {
      if (stored.opponent2)
        stored.opponent2.result = check;
      else
        stored.opponent2 = { id: null, result: check };
      if (stored.opponent1)
        stored.opponent1.result = change;
      else
        stored.opponent1 = { id: null, result: change };
    }
  }
  exports.setResults = setResults;
  function setForfeits(stored, match) {
    var _a, _b, _c, _d;
    if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.forfeit) === true && ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.forfeit) === true) {
      if (stored.opponent1)
        stored.opponent1.forfeit = true;
      if (stored.opponent2)
        stored.opponent2.forfeit = true;
      return;
    }
    if (((_c = match.opponent1) === null || _c === undefined ? undefined : _c.forfeit) === true) {
      if (stored.opponent1)
        stored.opponent1.forfeit = true;
      if (stored.opponent2)
        stored.opponent2.result = "win";
      else
        stored.opponent2 = { id: null, result: "win" };
    }
    if (((_d = match.opponent2) === null || _d === undefined ? undefined : _d.forfeit) === true) {
      if (stored.opponent2)
        stored.opponent2.forfeit = true;
      if (stored.opponent1)
        stored.opponent1.result = "win";
      else
        stored.opponent1 = { id: null, result: "win" };
    }
  }
  exports.setForfeits = setForfeits;
  function isSeedingWithIds(seeding) {
    return seeding.some((value) => typeof value === "number");
  }
  exports.isSeedingWithIds = isSeedingWithIds;
  function extractParticipantsFromSeeding(tournamentId, seeding) {
    const withoutByes = seeding.filter((name) => name !== null);
    const participants = withoutByes.map((item) => {
      if (typeof item === "string") {
        return {
          tournament_id: tournamentId,
          name: item
        };
      }
      return {
        ...item,
        tournament_id: tournamentId,
        name: item.name
      };
    });
    return participants;
  }
  exports.extractParticipantsFromSeeding = extractParticipantsFromSeeding;
  function mapParticipantsNamesToDatabase(seeding, database, positions) {
    return mapParticipantsToDatabase("name", seeding, database, positions);
  }
  exports.mapParticipantsNamesToDatabase = mapParticipantsNamesToDatabase;
  function mapParticipantsIdsToDatabase(seeding, database, positions) {
    return mapParticipantsToDatabase("id", seeding, database, positions);
  }
  exports.mapParticipantsIdsToDatabase = mapParticipantsIdsToDatabase;
  function mapParticipantsToDatabase(prop, seeding, database, positions) {
    const slots = seeding.map((slot, i) => {
      if (slot === null)
        return null;
      const found = database.find((participant) => typeof slot === "object" ? participant[prop] === slot[prop] : participant[prop] === slot);
      if (!found)
        throw Error(`Participant ${prop} not found in database.`);
      return { id: found.id, position: i + 1 };
    });
    if (!positions)
      return slots;
    if (positions.length !== slots.length)
      throw Error("Not enough seeds in at least one group of the manual ordering.");
    return positions.map((position) => slots[position - 1]);
  }
  exports.mapParticipantsToDatabase = mapParticipantsToDatabase;
  function convertMatchesToSeeding(matches) {
    const flattened = [].concat(...matches.map((match) => [match.opponent1, match.opponent2]));
    return sortSeeding(flattened);
  }
  exports.convertMatchesToSeeding = convertMatchesToSeeding;
  function convertSlotsToSeeding(slots) {
    return slots.map((slot) => {
      if (slot === null || slot.id === null)
        return null;
      return slot.id;
    });
  }
  exports.convertSlotsToSeeding = convertSlotsToSeeding;
  function sortSeeding(slots) {
    const withoutByes = slots.filter((v) => v !== null);
    withoutByes.sort((a, b2) => a.position - b2.position);
    if (withoutByes.length === slots.length)
      return withoutByes;
    const placed = Object.fromEntries(withoutByes.map((v) => [v.position - 1, v]));
    const sortedWithByes = Array.from({ length: slots.length }, (_, i) => placed[i] || null);
    return sortedWithByes;
  }
  exports.sortSeeding = sortSeeding;
  function getNonNull(array) {
    const nonNull = array.filter((element) => element !== null);
    return nonNull;
  }
  exports.getNonNull = getNonNull;
  function uniqueBy(array, key) {
    const seen = new Set;
    return array.filter((item) => {
      const value = key(item);
      if (!value)
        return true;
      if (seen.has(value))
        return false;
      seen.add(value);
      return true;
    });
  }
  exports.uniqueBy = uniqueBy;
  function isMajorRound(roundNumber) {
    return roundNumber % 2 === 1;
  }
  exports.isMajorRound = isMajorRound;
  function isMinorRound(roundNumber) {
    return !isMajorRound(roundNumber);
  }
  exports.isMinorRound = isMinorRound;
  function transitionToMajor(previousDuels) {
    const currentDuelCount = previousDuels.length / 2;
    const currentDuels = [];
    for (let duelIndex = 0;duelIndex < currentDuelCount; duelIndex++) {
      const prevDuelId = duelIndex * 2;
      currentDuels.push([
        byeWinner(previousDuels[prevDuelId]),
        byeWinner(previousDuels[prevDuelId + 1])
      ]);
    }
    return currentDuels;
  }
  exports.transitionToMajor = transitionToMajor;
  function transitionToMinor(previousDuels, losers, method) {
    const orderedLosers = method ? ordering_1.ordering[method](losers) : losers;
    const currentDuelCount = previousDuels.length;
    const currentDuels = [];
    for (let duelIndex = 0;duelIndex < currentDuelCount; duelIndex++) {
      const prevDuelId = duelIndex;
      currentDuels.push([
        orderedLosers[prevDuelId],
        byeWinner(previousDuels[prevDuelId])
      ]);
    }
    return currentDuels;
  }
  exports.transitionToMinor = transitionToMinor;
  function setParentMatchCompleted(parent, childCount, inRoundRobin) {
    var _a, _b;
    if (((_a = parent.opponent1) === null || _a === undefined ? undefined : _a.score) === undefined || ((_b = parent.opponent2) === null || _b === undefined ? undefined : _b.score) === undefined)
      throw Error("Either opponent1, opponent2 or their scores are falsy.");
    const minToWin = minScoreToWinBestOfX(childCount);
    if (parent.opponent1.score >= minToWin) {
      parent.opponent1.result = "win";
      return;
    }
    if (parent.opponent2.score >= minToWin) {
      parent.opponent2.result = "win";
      return;
    }
    if (parent.opponent1.score === parent.opponent2.score && parent.opponent1.score + parent.opponent2.score > childCount - 1) {
      if (inRoundRobin) {
        parent.opponent1.result = "draw";
        parent.opponent2.result = "draw";
        return;
      }
      throw Error("Match games result in a tie for the parent match.");
    }
  }
  exports.setParentMatchCompleted = setParentMatchCompleted;
  function getParentMatchResults(storedParent, scores) {
    return {
      opponent1: {
        id: storedParent.opponent1 && storedParent.opponent1.id,
        score: scores.opponent1
      },
      opponent2: {
        id: storedParent.opponent2 && storedParent.opponent2.id,
        score: scores.opponent2
      }
    };
  }
  exports.getParentMatchResults = getParentMatchResults;
  function getUpdatedMatchResults(match, existing, enableByes) {
    return {
      ...existing,
      ...match,
      ...enableByes ? {
        opponent1: match.opponent1 === null ? null : { ...existing.opponent1, ...match.opponent1 },
        opponent2: match.opponent2 === null ? null : { ...existing.opponent2, ...match.opponent2 }
      } : {
        opponent1: match.opponent1 === null ? { id: null } : { ...existing.opponent1, ...match.opponent1 },
        opponent2: match.opponent2 === null ? { id: null } : { ...existing.opponent2, ...match.opponent2 }
      }
    };
  }
  exports.getUpdatedMatchResults = getUpdatedMatchResults;
  function getChildGamesResults(games) {
    const scores = {
      opponent1: 0,
      opponent2: 0
    };
    for (const game of games) {
      const result = getMatchResult(game);
      if (result === "opponent1")
        scores.opponent1++;
      else if (result === "opponent2")
        scores.opponent2++;
    }
    return scores;
  }
  exports.getChildGamesResults = getChildGamesResults;
  function getSeeds(inLoserBracket, roundNumber, roundCountLB, matchCount) {
    const seedCount = getSeedCount(inLoserBracket, roundNumber, roundCountLB, matchCount);
    return Array.from({ length: seedCount }, (_, i) => i + 1);
  }
  exports.getSeeds = getSeeds;
  function getSeedCount(inLoserBracket, roundNumber, roundCountLB, matchCount) {
    ensureOrderingSupported(inLoserBracket, roundNumber, roundCountLB);
    return roundNumber === 1 ? matchCount * 2 : matchCount;
  }
  exports.getSeedCount = getSeedCount;
  function ensureOrderingSupported(inLoserBracket, roundNumber, roundCountLB) {
    if (inLoserBracket && !isOrderingSupportedLoserBracket(roundNumber, roundCountLB))
      throw Error("This round does not support ordering.");
    if (!inLoserBracket && !isOrderingSupportedUpperBracket(roundNumber))
      throw Error("This round does not support ordering.");
  }
  exports.ensureOrderingSupported = ensureOrderingSupported;
  function isOrderingSupportedUpperBracket(roundNumber) {
    return roundNumber === 1;
  }
  exports.isOrderingSupportedUpperBracket = isOrderingSupportedUpperBracket;
  function isOrderingSupportedLoserBracket(roundNumber, roundCount) {
    return roundNumber === 1 || isMinorRound(roundNumber) && roundNumber < roundCount;
  }
  exports.isOrderingSupportedLoserBracket = isOrderingSupportedLoserBracket;
  function getUpperBracketRoundCount(participantCount) {
    return Math.log2(participantCount);
  }
  exports.getUpperBracketRoundCount = getUpperBracketRoundCount;
  function getRoundPairCount(participantCount) {
    return getUpperBracketRoundCount(participantCount) - 1;
  }
  exports.getRoundPairCount = getRoundPairCount;
  function isDoubleEliminationNecessary(participantCount) {
    return participantCount > 2;
  }
  exports.isDoubleEliminationNecessary = isDoubleEliminationNecessary;
  function findLoserMatchNumber(participantCount, roundNumber, matchNumber, method) {
    const loserCount = getLoserCountFromWbForLbRound(participantCount, roundNumber);
    const losers = Array.from({ length: loserCount }, (_, i) => i + 1);
    const ordered = method ? ordering_1.ordering[method](losers) : losers;
    const matchNumberLB = ordered.indexOf(matchNumber) + 1;
    if (roundNumber === 1)
      return Math.ceil(matchNumberLB / 2);
    return matchNumberLB;
  }
  exports.findLoserMatchNumber = findLoserMatchNumber;
  function getLoserRoundMatchCount(participantCount, roundNumber) {
    const roundPairIndex = Math.ceil(roundNumber / 2) - 1;
    const roundPairCount = getRoundPairCount(participantCount);
    const matchCount = Math.pow(2, roundPairCount - roundPairIndex - 1);
    if (roundNumber === 0)
      throw Error("Round number must start at 1.");
    if (matchCount < 1)
      throw Error(`Round number ${roundNumber} is too big for a loser bracket in a stage of ${participantCount} participants.`);
    return matchCount;
  }
  exports.getLoserRoundMatchCount = getLoserRoundMatchCount;
  function getLoserCountFromWbForLbRound(participantCount, roundNumber) {
    const matchCount = getLoserRoundMatchCount(participantCount, roundNumber);
    if (roundNumber === 1)
      return matchCount * 2;
    return matchCount;
  }
  exports.getLoserCountFromWbForLbRound = getLoserCountFromWbForLbRound;
  function getLoserOrdering(seedOrdering, roundNumber) {
    const orderingIndex = 1 + Math.floor(roundNumber / 2);
    return seedOrdering[orderingIndex];
  }
  exports.getLoserOrdering = getLoserOrdering;
  function getLowerBracketRoundCount(participantCount) {
    const roundPairCount = getRoundPairCount(participantCount);
    return roundPairCount * 2;
  }
  exports.getLowerBracketRoundCount = getLowerBracketRoundCount;
  function getDiagonalMatchNumber(matchNumber) {
    return Math.ceil(matchNumber / 2);
  }
  exports.getDiagonalMatchNumber = getDiagonalMatchNumber;
  function getNearestPowerOfTwo(input) {
    return Math.pow(2, Math.ceil(Math.log2(input)));
  }
  exports.getNearestPowerOfTwo = getNearestPowerOfTwo;
  function minScoreToWinBestOfX(x) {
    return (x + 1) / 2;
  }
  exports.minScoreToWinBestOfX = minScoreToWinBestOfX;
  function isRoundRobin(stage) {
    return stage.type === "round_robin";
  }
  exports.isRoundRobin = isRoundRobin;
  function ensureNotRoundRobin(stage) {
    const inRoundRobin = isRoundRobin(stage);
    if (inRoundRobin)
      throw Error("Impossible to update ordering in a round-robin stage.");
  }
  exports.ensureNotRoundRobin = ensureNotRoundRobin;
  function isRoundCompleted(roundMatches) {
    return roundMatches.every((match) => match.status >= brackets_model_1.Status.Completed);
  }
  exports.isRoundCompleted = isRoundCompleted;
  function isWinnerBracket(stageType, groupNumber) {
    return stageType === "double_elimination" && groupNumber === 1;
  }
  exports.isWinnerBracket = isWinnerBracket;
  function isLoserBracket(stageType, groupNumber) {
    return stageType === "double_elimination" && groupNumber === 2;
  }
  exports.isLoserBracket = isLoserBracket;
  function isFinalGroup(stageType, groupNumber) {
    return stageType === "single_elimination" && groupNumber === 2 || stageType === "double_elimination" && groupNumber === 3;
  }
  exports.isFinalGroup = isFinalGroup;
  function getMatchLocation(stageType, groupNumber) {
    if (isWinnerBracket(stageType, groupNumber))
      return "winner_bracket";
    if (isLoserBracket(stageType, groupNumber))
      return "loser_bracket";
    if (isFinalGroup(stageType, groupNumber))
      return "final_group";
    return "single_bracket";
  }
  exports.getMatchLocation = getMatchLocation;
  function getFractionOfFinal(roundNumber, roundCount) {
    if (roundNumber > roundCount)
      throw Error(`There are more rounds than possible. ${JSON.stringify({ roundNumber, roundCount })}`);
    const denominator = Math.pow(2, roundCount - roundNumber);
    return 1 / denominator;
  }
  exports.getFractionOfFinal = getFractionOfFinal;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/base/stage/creator.js
var require_creator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StageCreator = exports.create = undefined;
  var ordering_1 = require_ordering();
  var helpers = require_helpers();
  async function create(stage) {
    const creator = new StageCreator(this.storage, stage);
    return creator.run();
  }
  exports.create = create;

  class StageCreator {
    constructor(storage, stage) {
      this.storage = storage;
      this.stage = stage;
      this.stage.settings = this.stage.settings || {};
      this.seedOrdering = [...this.stage.settings.seedOrdering || []];
      this.updateMode = false;
      this.enableByesInUpdate = false;
      if (!this.stage.name)
        throw Error("You must provide a name for the stage.");
      if (this.stage.tournamentId === undefined)
        throw Error("You must provide a tournament id for the stage.");
      if (stage.type === "round_robin")
        this.stage.settings.roundRobinMode = this.stage.settings.roundRobinMode || "simple";
      if (stage.type === "single_elimination")
        this.stage.settings.consolationFinal = this.stage.settings.consolationFinal || false;
      if (stage.type === "double_elimination")
        this.stage.settings.grandFinal = this.stage.settings.grandFinal || "none";
      this.stage.settings.matchesChildCount = this.stage.settings.matchesChildCount || 0;
    }
    async run() {
      let stage;
      switch (this.stage.type) {
        case "round_robin":
          stage = await this.roundRobin();
          break;
        case "single_elimination":
          stage = await this.singleElimination();
          break;
        case "double_elimination":
          stage = await this.doubleElimination();
          break;
        default:
          throw Error("Unknown stage type.");
      }
      if (stage.id === -1)
        throw Error("Something went wrong when creating the stage.");
      await this.ensureSeedOrdering(stage.id);
      return stage;
    }
    setExisting(stageId, enableByes) {
      this.updateMode = true;
      this.currentStageId = stageId;
      this.enableByesInUpdate = enableByes;
    }
    async roundRobin() {
      const groups = await this.getRoundRobinGroups();
      const stage = await this.createStage();
      for (let i = 0;i < groups.length; i++)
        await this.createRoundRobinGroup(stage.id, i + 1, groups[i]);
      return stage;
    }
    async singleElimination() {
      var _a, _b;
      if (Array.isArray((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.seedOrdering) && ((_b = this.stage.settings) === null || _b === undefined ? undefined : _b.seedOrdering.length) !== 1)
        throw Error("You must specify one seed ordering method.");
      const slots = await this.getSlots();
      const stage = await this.createStage();
      const method = this.getStandardBracketFirstRoundOrdering();
      const ordered = ordering_1.ordering[method](slots);
      const { losers } = await this.createStandardBracket(stage.id, 1, ordered);
      await this.createConsolationFinal(stage.id, losers);
      return stage;
    }
    async doubleElimination() {
      var _a;
      if (this.stage.settings && Array.isArray(this.stage.settings.seedOrdering) && this.stage.settings.seedOrdering.length < 1)
        throw Error("You must specify at least one seed ordering method.");
      const slots = await this.getSlots();
      const stage = await this.createStage();
      const method = this.getStandardBracketFirstRoundOrdering();
      const ordered = ordering_1.ordering[method](slots);
      if ((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.skipFirstRound)
        await this.createDoubleEliminationSkipFirstRound(stage.id, ordered);
      else
        await this.createDoubleElimination(stage.id, ordered);
      return stage;
    }
    async createDoubleEliminationSkipFirstRound(stageId, slots) {
      var _a;
      const { even: directInWb, odd: directInLb } = helpers.splitByParity(slots);
      const { losers: losersWb, winner: winnerWb } = await this.createStandardBracket(stageId, 1, directInWb);
      if (helpers.isDoubleEliminationNecessary((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.size)) {
        const winnerLb = await this.createLowerBracket(stageId, 2, [directInLb, ...losersWb]);
        await this.createGrandFinal(stageId, winnerWb, winnerLb);
      }
    }
    async createDoubleElimination(stageId, slots) {
      var _a;
      const { losers: losersWb, winner: winnerWb } = await this.createStandardBracket(stageId, 1, slots);
      if (helpers.isDoubleEliminationNecessary((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.size)) {
        const winnerLb = await this.createLowerBracket(stageId, 2, losersWb);
        const finalGroupId = await this.createGrandFinal(stageId, winnerWb, winnerLb);
        await this.createConsolationFinal(stageId, losersWb, {
          existingGroupId: finalGroupId,
          matchNumberStart: 2
        });
      }
    }
    async createRoundRobinGroup(stageId, groupNumber, slots) {
      var _a;
      const groupId = await this.insertGroup({
        stage_id: stageId,
        number: groupNumber
      });
      if (groupId === -1)
        throw Error("Could not insert the group.");
      const rounds = helpers.makeRoundRobinMatches(slots, (_a = this.stage.settings) === null || _a === undefined ? undefined : _a.roundRobinMode);
      for (let i = 0;i < rounds.length; i++)
        await this.createRound(stageId, groupId, i + 1, rounds[0].length, rounds[i]);
    }
    async createStandardBracket(stageId, groupNumber, slots) {
      const roundCount = helpers.getUpperBracketRoundCount(slots.length);
      const groupId = await this.insertGroup({
        stage_id: stageId,
        number: groupNumber
      });
      if (groupId === -1)
        throw Error("Could not insert the group.");
      let duels = helpers.makePairs(slots);
      let roundNumber = 1;
      const losers = [];
      for (let i = roundCount - 1;i >= 0; i--) {
        const matchCount = Math.pow(2, i);
        duels = this.getCurrentDuels(duels, matchCount);
        losers.push(duels.map(helpers.byeLoser));
        await this.createRound(stageId, groupId, roundNumber++, matchCount, duels);
      }
      return { losers, winner: helpers.byeWinner(duels[0]) };
    }
    async createLowerBracket(stageId, groupNumber, losers) {
      var _a;
      const participantCount = (_a = this.stage.settings) === null || _a === undefined ? undefined : _a.size;
      const roundPairCount = helpers.getRoundPairCount(participantCount);
      let losersId = 0;
      const method = this.getMajorOrdering(participantCount);
      const ordered = ordering_1.ordering[method](losers[losersId++]);
      const groupId = await this.insertGroup({
        stage_id: stageId,
        number: groupNumber
      });
      if (groupId === -1)
        throw Error("Could not insert the group.");
      let duels = helpers.makePairs(ordered);
      let roundNumber = 1;
      for (let i = 0;i < roundPairCount; i++) {
        const matchCount = Math.pow(2, roundPairCount - i - 1);
        duels = this.getCurrentDuels(duels, matchCount, true);
        await this.createRound(stageId, groupId, roundNumber++, matchCount, duels);
        const minorOrdering = this.getMinorOrdering(participantCount, i, roundPairCount);
        duels = this.getCurrentDuels(duels, matchCount, false, losers[losersId++], minorOrdering);
        await this.createRound(stageId, groupId, roundNumber++, matchCount, duels);
      }
      return helpers.byeWinnerToGrandFinal(duels[0]);
    }
    async createUniqueMatchBracket(stageId, groupNumber, duels, overrides = {}) {
      let groupId = overrides.existingGroupId;
      let roundNumberStart = 1;
      if (groupId !== undefined) {
        const rounds = await this.storage.select("round", { group_id: groupId });
        if (!rounds)
          throw Error("Error getting rounds.");
        roundNumberStart = rounds.length + 1;
      } else {
        groupId = await this.insertGroup({
          stage_id: stageId,
          number: groupNumber
        });
        if (groupId === -1)
          throw Error("Could not insert the group.");
      }
      for (let i = 0;i < duels.length; i++)
        await this.createRound(stageId, groupId, roundNumberStart + i, 1, [duels[i]], overrides.matchNumberStart);
      return groupId;
    }
    async createRound(stageId, groupId, roundNumber, matchCount, duels, matchNumberStart = 1) {
      const matchesChildCount = this.getMatchesChildCount();
      const roundId = await this.insertRound({
        number: roundNumber,
        stage_id: stageId,
        group_id: groupId
      });
      if (roundId === -1)
        throw Error("Could not insert the round.");
      for (let i = 0;i < matchCount; i++)
        await this.createMatch(stageId, groupId, roundId, matchNumberStart + i, duels[i], matchesChildCount);
    }
    async createMatch(stageId, groupId, roundId, matchNumber, opponents, childCount) {
      const opponent1 = helpers.toResultWithPosition(opponents[0]);
      const opponent2 = helpers.toResultWithPosition(opponents[1]);
      if (this.stage.type === "round_robin" && opponent1 === null && opponent2 === null)
        return;
      let existing = null;
      let status = helpers.getMatchStatus(opponents);
      if (this.updateMode) {
        existing = await this.storage.selectFirst("match", {
          round_id: roundId,
          number: matchNumber
        });
        const currentChildCount = existing === null || existing === undefined ? undefined : existing.child_count;
        childCount = currentChildCount === undefined ? childCount : currentChildCount;
        if (existing) {
          const existingStatus = helpers.getMatchStatus(existing);
          if (existingStatus > status)
            status = existingStatus;
        }
      }
      const parentId = await this.insertMatch({
        number: matchNumber,
        stage_id: stageId,
        group_id: groupId,
        round_id: roundId,
        child_count: childCount,
        status,
        ...helpers.getInferredResult(opponent1, opponent2)
      }, existing);
      if (parentId === -1)
        throw Error("Could not insert the match.");
      for (let i = 0;i < childCount; i++) {
        const id = await this.insertMatchGame({
          number: i + 1,
          stage_id: stageId,
          parent_id: parentId,
          status,
          ...helpers.getInferredResult(helpers.toResult(opponents[0]), helpers.toResult(opponents[1]))
        });
        if (id === -1)
          throw Error("Could not insert the match game.");
      }
    }
    getCurrentDuels(previousDuels, currentDuelCount, major, losers, method) {
      if ((major === undefined || major) && previousDuels.length === currentDuelCount) {
        return previousDuels;
      }
      if (major === undefined || major) {
        return helpers.transitionToMajor(previousDuels);
      }
      return helpers.transitionToMinor(previousDuels, losers, method);
    }
    async getSlots(positions) {
      var _a;
      let seeding = this.stage.seedingIds || this.stage.seeding;
      const size = ((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.size) || (seeding === null || seeding === undefined ? undefined : seeding.length) || 0;
      helpers.ensureValidSize(this.stage.type, size);
      if (size && !seeding)
        return Array.from({ length: size }, (_, i) => ({ id: null, position: i + 1 }));
      if (!seeding)
        throw Error("Either size or seeding must be given.");
      this.stage.settings = {
        ...this.stage.settings,
        size
      };
      helpers.ensureNoDuplicates(seeding);
      seeding = helpers.fixSeeding(seeding, size);
      if (this.stage.type !== "round_robin" && this.stage.settings.balanceByes)
        seeding = helpers.balanceByes(seeding, this.stage.settings.size);
      this.stage.seeding = seeding;
      if (this.stage.seedingIds !== undefined || helpers.isSeedingWithIds(seeding))
        return this.getSlotsUsingIds(seeding, positions);
      return this.getSlotsUsingNames(seeding, positions);
    }
    async getSlotsUsingNames(seeding, positions) {
      const participants = helpers.extractParticipantsFromSeeding(this.stage.tournamentId, seeding);
      if (!await this.registerParticipants(participants))
        throw Error("Error registering the participants.");
      const added = await this.storage.select("participant", { tournament_id: this.stage.tournamentId });
      if (!added)
        throw Error("Error getting registered participant.");
      return helpers.mapParticipantsNamesToDatabase(seeding, added, positions);
    }
    async getSlotsUsingIds(seeding, positions) {
      const participants = await this.storage.select("participant", { tournament_id: this.stage.tournamentId });
      if (!participants)
        throw Error("No available participants.");
      return helpers.mapParticipantsIdsToDatabase(seeding, participants, positions);
    }
    async getStageNumber() {
      const stages = await this.storage.select("stage", { tournament_id: this.stage.tournamentId });
      const stageNumbers = stages === null || stages === undefined ? undefined : stages.map((stage) => {
        var _a;
        return (_a = stage.number) !== null && _a !== undefined ? _a : 0;
      });
      if (this.stage.number !== undefined) {
        if (stageNumbers === null || stageNumbers === undefined ? undefined : stageNumbers.includes(this.stage.number))
          throw Error("The given stage number already exists.");
        return this.stage.number;
      }
      if (!(stageNumbers === null || stageNumbers === undefined ? undefined : stageNumbers.length))
        return 1;
      const maxNumber = Math.max(...stageNumbers);
      return maxNumber + 1;
    }
    getMatchesChildCount() {
      var _a;
      if (!((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.matchesChildCount))
        return 0;
      return this.stage.settings.matchesChildCount;
    }
    getOrdering(orderingIndex, stageType, defaultMethod) {
      var _a;
      if (!((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.seedOrdering)) {
        this.seedOrdering.push(defaultMethod);
        return defaultMethod;
      }
      const method = this.stage.settings.seedOrdering[orderingIndex];
      if (!method) {
        this.seedOrdering.push(defaultMethod);
        return defaultMethod;
      }
      if (stageType === "elimination" && method.match(/^groups\./))
        throw Error("You must specify a seed ordering method without a 'groups' prefix");
      if (stageType === "groups" && method !== "natural" && !method.match(/^groups\./))
        throw Error("You must specify a seed ordering method with a 'groups' prefix");
      return method;
    }
    async getRoundRobinGroups() {
      var _a, _b, _c, _d, _e2;
      if (((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.groupCount) === undefined || !Number.isInteger(this.stage.settings.groupCount))
        throw Error("You must specify a group count for round-robin stages.");
      if (this.stage.settings.groupCount <= 0)
        throw Error("You must provide a strictly positive group count.");
      if ((_b = this.stage.settings) === null || _b === undefined ? undefined : _b.manualOrdering) {
        if (((_c = this.stage.settings) === null || _c === undefined ? undefined : _c.manualOrdering.length) !== ((_d = this.stage.settings) === null || _d === undefined ? undefined : _d.groupCount))
          throw Error("Group count in the manual ordering does not correspond to the given group count.");
        const positions = (_e2 = this.stage.settings) === null || _e2 === undefined ? undefined : _e2.manualOrdering.flat();
        const slots2 = await this.getSlots(positions);
        return helpers.makeGroups(slots2, this.stage.settings.groupCount);
      }
      if (Array.isArray(this.stage.settings.seedOrdering) && this.stage.settings.seedOrdering.length !== 1)
        throw Error("You must specify one seed ordering method.");
      const method = this.getRoundRobinOrdering();
      const slots = await this.getSlots();
      const ordered = ordering_1.ordering[method](slots, this.stage.settings.groupCount);
      return helpers.makeGroups(ordered, this.stage.settings.groupCount);
    }
    getRoundRobinOrdering() {
      return this.getOrdering(0, "groups", "groups.effort_balanced");
    }
    getStandardBracketFirstRoundOrdering() {
      return this.getOrdering(0, "elimination", "inner_outer");
    }
    getMajorOrdering(participantCount) {
      var _a;
      return this.getOrdering(1, "elimination", ((_a = ordering_1.defaultMinorOrdering[participantCount]) === null || _a === undefined ? undefined : _a[0]) || "natural");
    }
    getMinorOrdering(participantCount, index, minorRoundCount) {
      var _a;
      if (index === minorRoundCount - 1)
        return;
      return this.getOrdering(2 + index, "elimination", ((_a = ordering_1.defaultMinorOrdering[participantCount]) === null || _a === undefined ? undefined : _a[1 + index]) || "natural");
    }
    async insertStage(stage) {
      let existing = null;
      if (this.updateMode) {
        existing = await this.storage.select("stage", this.currentStageId);
        if (!existing)
          throw Error("Stage not found.");
        const update = {
          ...existing,
          ...stage,
          settings: {
            ...existing.settings,
            ...stage.settings
          }
        };
        if (!await this.storage.update("stage", this.currentStageId, update))
          throw Error("Could not update the stage.");
      }
      if (!existing)
        return this.storage.insert("stage", stage);
      return existing.id;
    }
    async insertGroup(group) {
      let existing = null;
      if (this.updateMode) {
        existing = await this.storage.selectFirst("group", {
          stage_id: group.stage_id,
          number: group.number
        });
      }
      if (!existing)
        return this.storage.insert("group", group);
      return existing.id;
    }
    async insertRound(round) {
      let existing = null;
      if (this.updateMode) {
        existing = await this.storage.selectFirst("round", {
          group_id: round.group_id,
          number: round.number
        });
      }
      if (!existing)
        return this.storage.insert("round", round);
      return existing.id;
    }
    async insertMatch(match, existing) {
      if (!existing)
        return this.storage.insert("match", match);
      const updated = helpers.getUpdatedMatchResults(match, existing, this.enableByesInUpdate);
      if (!await this.storage.update("match", existing.id, updated))
        throw Error("Could not update the match.");
      return existing.id;
    }
    async insertMatchGame(matchGame) {
      let existing = null;
      if (this.updateMode) {
        existing = await this.storage.selectFirst("match_game", {
          parent_id: matchGame.parent_id,
          number: matchGame.number
        });
      }
      if (!existing)
        return this.storage.insert("match_game", matchGame);
      const updated = helpers.getUpdatedMatchResults(matchGame, existing, this.enableByesInUpdate);
      if (!await this.storage.update("match_game", existing.id, updated))
        throw Error("Could not update the match game.");
      return existing.id;
    }
    async registerParticipants(participants) {
      const existing = await this.storage.select("participant", { tournament_id: this.stage.tournamentId });
      if (!existing || existing.length === 0)
        return this.storage.insert("participant", participants);
      for (const participant of participants) {
        if (existing.some((value) => value.name === participant.name))
          continue;
        const result = await this.storage.insert("participant", participant);
        if (result === -1)
          return false;
      }
      return true;
    }
    async createStage() {
      const stageNumber = await this.getStageNumber();
      const stage = {
        tournament_id: this.stage.tournamentId,
        name: this.stage.name,
        type: this.stage.type,
        number: stageNumber,
        settings: this.stage.settings || {}
      };
      const stageId = await this.insertStage(stage);
      if (stageId === -1)
        throw Error("Could not insert the stage.");
      return { ...stage, id: stageId };
    }
    async createConsolationFinal(stageId, losers, overrides = {}) {
      var _a;
      if (!((_a = this.stage.settings) === null || _a === undefined ? undefined : _a.consolationFinal))
        return;
      const semiFinalLosers = losers[losers.length - 2];
      await this.createUniqueMatchBracket(stageId, 2, [semiFinalLosers], overrides);
    }
    async createGrandFinal(stageId, winnerWb, winnerLb) {
      var _a;
      const grandFinal = (_a = this.stage.settings) === null || _a === undefined ? undefined : _a.grandFinal;
      if (grandFinal === "none")
        return;
      const finalDuels = [[winnerWb, winnerLb]];
      if (grandFinal === "double")
        finalDuels.push([{ id: null }, { id: null }]);
      const groupId = await this.createUniqueMatchBracket(stageId, 3, finalDuels);
      return groupId;
    }
    async ensureSeedOrdering(stageId) {
      var _a, _b;
      if (((_b = (_a = this.stage.settings) === null || _a === undefined ? undefined : _a.seedOrdering) === null || _b === undefined ? undefined : _b.length) === this.seedOrdering.length)
        return;
      const existing = await this.storage.select("stage", stageId);
      if (!existing)
        throw Error("Stage not found.");
      const update = {
        ...existing,
        settings: {
          ...existing.settings,
          seedOrdering: this.seedOrdering
        }
      };
      if (!await this.storage.update("stage", stageId, update))
        throw Error("Could not update the stage.");
    }
  }
  exports.StageCreator = StageCreator;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/create.js
var require_create = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Create = undefined;
  var creator_1 = require_creator();

  class Create {
    constructor(storage) {
      this.storage = storage;
    }
    async stage(data) {
      const creator = new creator_1.StageCreator(this.storage, data);
      return creator.run();
    }
  }
  exports.Create = Create;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/base/getter.js
var require_getter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseGetter = undefined;
  var helpers = require_helpers();

  class BaseGetter {
    constructor(storage) {
      this.storage = storage;
    }
    async getOrderedRounds(stage) {
      if (!(stage === null || stage === undefined ? undefined : stage.settings.size))
        throw Error("The stage has no size.");
      if (stage.type === "single_elimination")
        return this.getOrderedRoundsSingleElimination(stage.id);
      return this.getOrderedRoundsDoubleElimination(stage.id);
    }
    async getOrderedRoundsSingleElimination(stageId) {
      return [await this.getUpperBracketFirstRound(stageId)];
    }
    async getOrderedRoundsDoubleElimination(stageId) {
      const rounds = await this.storage.select("round", { stage_id: stageId });
      if (!rounds)
        throw Error("Error getting rounds.");
      const loserBracket = await this.getLoserBracket(stageId);
      if (!loserBracket)
        throw Error("Loser bracket not found.");
      const firstRoundWB = rounds[0];
      const roundsLB = rounds.filter((r) => r.group_id === loserBracket.id);
      const orderedRoundsLB = roundsLB.filter((r) => helpers.isOrderingSupportedLoserBracket(r.number, roundsLB.length));
      return [firstRoundWB, ...orderedRoundsLB];
    }
    async getRoundPositionalInfo(roundId) {
      const round = await this.storage.select("round", roundId);
      if (!round)
        throw Error("Round not found.");
      const rounds = await this.storage.select("round", { group_id: round.group_id });
      if (!rounds)
        throw Error("Error getting rounds.");
      return {
        roundNumber: round.number,
        roundCount: rounds.length
      };
    }
    async getPreviousMatches(match, matchLocation, stage, roundNumber) {
      if (matchLocation === "loser_bracket")
        return this.getPreviousMatchesLB(match, stage, roundNumber);
      if (matchLocation === "final_group")
        return this.getPreviousMatchesFinal(match, stage, roundNumber);
      if (roundNumber === 1)
        return [];
      return this.getMatchesBeforeMajorRound(match, roundNumber);
    }
    async getPreviousMatchesFinal(match, stage, roundNumber) {
      if (stage.type === "single_elimination")
        return this.getPreviousMatchesFinalSingleElimination(match, stage);
      return this.getPreviousMatchesFinalDoubleElimination(match, roundNumber);
    }
    async getPreviousMatchesFinalSingleElimination(match, stage) {
      const upperBracket = await this.getUpperBracket(match.stage_id);
      const upperBracketRoundCount = helpers.getUpperBracketRoundCount(stage.settings.size);
      const semiFinalsRound = await this.storage.selectFirst("round", {
        group_id: upperBracket.id,
        number: upperBracketRoundCount - 1
      });
      if (!semiFinalsRound)
        throw Error("Semi finals round not found.");
      const semiFinalMatches = await this.storage.select("match", {
        round_id: semiFinalsRound.id
      });
      if (!semiFinalMatches)
        throw Error("Error getting semi final matches.");
      return semiFinalMatches;
    }
    async getPreviousMatchesFinalDoubleElimination(match, roundNumber) {
      if (roundNumber > 1)
        return [await this.findMatch(match.group_id, roundNumber - 1, 1)];
      const winnerBracket = await this.getUpperBracket(match.stage_id);
      const lastRoundWB = await this.getLastRound(winnerBracket.id);
      const winnerBracketFinalMatch = await this.storage.selectFirst("match", {
        round_id: lastRoundWB.id,
        number: 1
      });
      if (!winnerBracketFinalMatch)
        throw Error("Match not found.");
      const loserBracket = await this.getLoserBracket(match.stage_id);
      if (!loserBracket)
        throw Error("Loser bracket not found.");
      const lastRoundLB = await this.getLastRound(loserBracket.id);
      const loserBracketFinalMatch = await this.storage.selectFirst("match", {
        round_id: lastRoundLB.id,
        number: 1
      });
      if (!loserBracketFinalMatch)
        throw Error("Match not found.");
      return [winnerBracketFinalMatch, loserBracketFinalMatch];
    }
    async getPreviousMatchesLB(match, stage, roundNumber) {
      if (stage.settings.skipFirstRound && roundNumber === 1)
        return [];
      if (helpers.hasBye(match))
        return [];
      const winnerBracket = await this.getUpperBracket(match.stage_id);
      const actualRoundNumberWB = Math.ceil((roundNumber + 1) / 2);
      const roundNumberWB = stage.settings.skipFirstRound ? actualRoundNumberWB - 1 : actualRoundNumberWB;
      if (roundNumber === 1)
        return this.getMatchesBeforeFirstRoundLB(match, winnerBracket.id, roundNumberWB);
      if (helpers.isMajorRound(roundNumber))
        return this.getMatchesBeforeMajorRound(match, roundNumber);
      return this.getMatchesBeforeMinorRoundLB(match, winnerBracket.id, roundNumber, roundNumberWB);
    }
    async getMatchesBeforeMajorRound(match, roundNumber) {
      return [
        await this.findMatch(match.group_id, roundNumber - 1, match.number * 2 - 1),
        await this.findMatch(match.group_id, roundNumber - 1, match.number * 2)
      ];
    }
    async getMatchesBeforeFirstRoundLB(match, winnerBracketId, roundNumberWB) {
      return [
        await this.findMatch(winnerBracketId, roundNumberWB, helpers.getOriginPosition(match, "opponent1")),
        await this.findMatch(winnerBracketId, roundNumberWB, helpers.getOriginPosition(match, "opponent2"))
      ];
    }
    async getMatchesBeforeMinorRoundLB(match, winnerBracketId, roundNumber, roundNumberWB) {
      const matchNumber = helpers.getOriginPosition(match, "opponent1");
      return [
        await this.findMatch(winnerBracketId, roundNumberWB, matchNumber),
        await this.findMatch(match.group_id, roundNumber - 1, match.number)
      ];
    }
    async getNextMatches(match, matchLocation, stage, roundNumber, roundCount) {
      switch (matchLocation) {
        case "single_bracket":
          return this.getNextMatchesUpperBracket(match, stage, roundNumber, roundCount);
        case "winner_bracket":
          return this.getNextMatchesWB(match, stage, roundNumber, roundCount);
        case "loser_bracket":
          return this.getNextMatchesLB(match, stage, roundNumber, roundCount);
        case "final_group":
          return this.getNextMatchesFinal(match, stage, roundNumber, roundCount);
        default:
          throw Error("Unknown bracket kind.");
      }
    }
    async getNextMatchesWB(match, stage, roundNumber, roundCount) {
      const loserBracket = await this.getLoserBracket(match.stage_id);
      if (loserBracket === null)
        return [];
      const actualRoundNumber = stage.settings.skipFirstRound ? roundNumber + 1 : roundNumber;
      const roundNumberLB = actualRoundNumber > 1 ? (actualRoundNumber - 1) * 2 : 1;
      const participantCount = stage.settings.size;
      const method = helpers.getLoserOrdering(stage.settings.seedOrdering, roundNumberLB);
      const actualMatchNumberLB = helpers.findLoserMatchNumber(participantCount, roundNumberLB, match.number, method);
      return [
        ...await this.getNextMatchesUpperBracket(match, stage, roundNumber, roundCount),
        await this.findMatch(loserBracket.id, roundNumberLB, actualMatchNumberLB)
      ];
    }
    async getNextMatchesUpperBracket(match, stage, roundNumber, roundCount) {
      if (stage.type === "single_elimination")
        return this.getNextMatchesUpperBracketSingleElimination(match, stage.type, roundNumber, roundCount);
      return this.getNextMatchesUpperBracketDoubleElimination(match, stage.type, roundNumber, roundCount);
    }
    async getNextMatchesUpperBracketSingleElimination(match, stageType, roundNumber, roundCount) {
      if (roundNumber === roundCount - 1) {
        const finalGroupId = await this.getFinalGroupId(match.stage_id, stageType);
        const consolationFinal = await this.getFinalGroupFirstMatch(finalGroupId);
        return [
          await this.getDiagonalMatch(match.group_id, roundNumber, match.number),
          ...consolationFinal ? [consolationFinal] : []
        ];
      }
      if (roundNumber === roundCount)
        return [];
      return [await this.getDiagonalMatch(match.group_id, roundNumber, match.number)];
    }
    async getNextMatchesUpperBracketDoubleElimination(match, stageType, roundNumber, roundCount) {
      if (roundNumber === roundCount) {
        const finalGroupId = await this.getFinalGroupId(match.stage_id, stageType);
        return [await this.getFinalGroupFirstMatch(finalGroupId)];
      }
      return [await this.getDiagonalMatch(match.group_id, roundNumber, match.number)];
    }
    async getNextMatchesLB(match, stage, roundNumber, roundCount) {
      if (roundNumber === roundCount - 1) {
        const finalGroupId = await this.getFinalGroupId(match.stage_id, stage.type);
        const consolationFinal = await this.getConsolationFinalMatchDoubleElimination(finalGroupId);
        return [
          ...await this.getMatchAfterMajorRoundLB(match, roundNumber),
          ...consolationFinal ? [consolationFinal] : []
        ];
      }
      if (roundNumber === roundCount) {
        const finalGroupId = await this.getFinalGroupId(match.stage_id, stage.type);
        const grandFinal = await this.getFinalGroupFirstMatch(finalGroupId);
        const consolationFinal = await this.getConsolationFinalMatchDoubleElimination(finalGroupId);
        return [
          grandFinal,
          ...consolationFinal ? [consolationFinal] : []
        ];
      }
      if (helpers.isMajorRound(roundNumber))
        return this.getMatchAfterMajorRoundLB(match, roundNumber);
      return this.getMatchAfterMinorRoundLB(match, roundNumber);
    }
    async getFinalGroupFirstMatch(finalGroupId) {
      if (finalGroupId === null)
        return null;
      return this.findMatch(finalGroupId, 1, 1);
    }
    async getConsolationFinalMatchDoubleElimination(finalGroupId) {
      if (finalGroupId === null)
        return null;
      return this.storage.selectFirst("match", {
        group_id: finalGroupId,
        number: 2
      });
    }
    async getNextMatchesFinal(match, stage, roundNumber, roundCount) {
      if (roundNumber === roundCount)
        return [];
      if (stage.settings.consolationFinal && match.number === 1 && roundNumber === roundCount - 1)
        return [];
      return [await this.findMatch(match.group_id, roundNumber + 1, 1)];
    }
    async getMatchAfterMajorRoundLB(match, roundNumber) {
      return [await this.getParallelMatch(match.group_id, roundNumber, match.number)];
    }
    async getMatchAfterMinorRoundLB(match, roundNumber) {
      return [await this.getDiagonalMatch(match.group_id, roundNumber, match.number)];
    }
    static getSeedingOrdering(stageType, create) {
      return stageType === "round_robin" ? create.getRoundRobinOrdering() : create.getStandardBracketFirstRoundOrdering();
    }
    async getSeedingMatches(stageId, stageType) {
      if (stageType === "round_robin")
        return this.storage.select("match", { stage_id: stageId });
      try {
        const firstRound = await this.getUpperBracketFirstRound(stageId);
        return this.storage.select("match", { round_id: firstRound.id });
      } catch {
        return [];
      }
    }
    async getUpperBracketFirstRound(stageId) {
      const firstRound = await this.storage.selectFirst("round", { stage_id: stageId, number: 1 }, false);
      if (!firstRound)
        throw Error("Round not found.");
      return firstRound;
    }
    async getLastRound(groupId) {
      const round = await this.storage.selectLast("round", { group_id: groupId }, false);
      if (!round)
        throw Error("Error getting rounds.");
      return round;
    }
    async getFinalGroupId(stageId, stageType) {
      const groupNumber = stageType === "single_elimination" ? 2 : 3;
      const finalGroup = await this.storage.selectFirst("group", { stage_id: stageId, number: groupNumber });
      if (!finalGroup)
        return null;
      return finalGroup.id;
    }
    async getUpperBracket(stageId) {
      const winnerBracket = await this.storage.selectFirst("group", { stage_id: stageId, number: 1 });
      if (!winnerBracket)
        throw Error("Winner bracket not found.");
      return winnerBracket;
    }
    async getLoserBracket(stageId) {
      return this.storage.selectFirst("group", { stage_id: stageId, number: 2 });
    }
    async getDiagonalMatch(groupId, roundNumber, matchNumber) {
      return this.findMatch(groupId, roundNumber + 1, helpers.getDiagonalMatchNumber(matchNumber));
    }
    async getParallelMatch(groupId, roundNumber, matchNumber) {
      return this.findMatch(groupId, roundNumber + 1, matchNumber);
    }
    async findMatch(groupId, roundNumber, matchNumber) {
      const round = await this.storage.selectFirst("round", {
        group_id: groupId,
        number: roundNumber
      });
      if (!round)
        throw Error("Round not found.");
      const match = await this.storage.selectFirst("match", {
        round_id: round.id,
        number: matchNumber
      });
      if (!match)
        throw Error("Match not found.");
      return match;
    }
    async findMatchGame(game) {
      if (game.id !== undefined) {
        const stored = await this.storage.select("match_game", game.id);
        if (!stored)
          throw Error("Match game not found.");
        return stored;
      }
      if (game.parent_id !== undefined && game.number) {
        const stored = await this.storage.selectFirst("match_game", {
          parent_id: game.parent_id,
          number: game.number
        });
        if (!stored)
          throw Error("Match game not found.");
        return stored;
      }
      throw Error("No match game id nor parent id and number given.");
    }
  }
  exports.BaseGetter = BaseGetter;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/get.js
var require_get = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Get = undefined;
  var brackets_model_1 = require_dist3();
  var getter_1 = require_getter();
  var helpers = require_helpers();

  class Get extends getter_1.BaseGetter {
    async stageData(stageId) {
      const stageData = await this.getStageSpecificData(stageId);
      const participants = await this.storage.select("participant", { tournament_id: stageData.stage.tournament_id });
      if (!participants)
        throw Error("Error getting participants.");
      return {
        stage: [stageData.stage],
        group: stageData.groups,
        round: stageData.rounds,
        match: stageData.matches,
        match_game: stageData.matchGames,
        participant: participants
      };
    }
    async tournamentData(tournamentId) {
      const stages = await this.storage.select("stage", { tournament_id: tournamentId });
      if (!stages)
        throw Error("Error getting stages.");
      const stagesData = await Promise.all(stages.map((stage) => this.getStageSpecificData(stage.id)));
      const participants = await this.storage.select("participant", { tournament_id: tournamentId });
      if (!participants)
        throw Error("Error getting participants.");
      return {
        stage: stages,
        group: stagesData.reduce((acc, data) => [...acc, ...data.groups], []),
        round: stagesData.reduce((acc, data) => [...acc, ...data.rounds], []),
        match: stagesData.reduce((acc, data) => [...acc, ...data.matches], []),
        match_game: stagesData.reduce((acc, data) => [...acc, ...data.matchGames], []),
        participant: participants
      };
    }
    async matchGames(matches) {
      const parentMatches = matches.filter((match) => match.child_count > 0);
      const matchGamesQueries = await Promise.all(parentMatches.map((match) => this.storage.select("match_game", { parent_id: match.id })));
      if (matchGamesQueries.some((game) => game === null))
        throw Error("Error getting match games.");
      return helpers.getNonNull(matchGamesQueries).flat();
    }
    async currentStage(tournamentId) {
      const stages = await this.storage.select("stage", { tournament_id: tournamentId });
      if (!stages)
        throw Error("Error getting stages.");
      for (const stage of stages) {
        const matches = await this.storage.select("match", { stage_id: stage.id });
        if (!matches)
          throw Error("Error getting matches.");
        if (matches.every((match) => match.status >= brackets_model_1.Status.Completed))
          continue;
        return stage;
      }
      return null;
    }
    async currentRound(stageId) {
      const matches = await this.storage.select("match", { stage_id: stageId });
      if (!matches)
        throw Error("Error getting matches.");
      const matchesByRound = helpers.splitBy(matches, "round_id");
      for (const roundMatches of matchesByRound) {
        if (roundMatches.every((match) => match.status >= brackets_model_1.Status.Completed))
          continue;
        const round = await this.storage.select("round", roundMatches[0].round_id);
        if (!round)
          throw Error("Round not found.");
        return round;
      }
      return null;
    }
    async currentMatches(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      if (stage.type !== "single_elimination")
        throw Error("Not implemented for round robin and double elimination. Ask if needed.");
      const matches = await this.storage.select("match", { stage_id: stageId });
      if (!matches)
        throw Error("Error getting matches.");
      const matchesByRound = helpers.splitBy(matches, "round_id");
      const roundCount = helpers.getUpperBracketRoundCount(stage.settings.size);
      let currentRoundIndex = -1;
      const currentMatches = [];
      for (const roundMatches of matchesByRound) {
        currentRoundIndex++;
        if (stage.settings.consolationFinal && currentRoundIndex === roundCount - 1) {
          const [final] = roundMatches;
          const [consolationFinal] = matchesByRound[currentRoundIndex + 1];
          const finals = [final, consolationFinal];
          if (finals.every((match) => !helpers.isMatchOngoing(match)))
            return [];
          return finals.filter((match) => helpers.isMatchOngoing(match));
        }
        if (roundMatches.every((match) => !helpers.isMatchOngoing(match)))
          continue;
        currentMatches.push(...roundMatches.filter((match) => helpers.isMatchOngoing(match)));
      }
      return currentMatches;
    }
    async seeding(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      const pickRelevantProps = (slot) => {
        if (slot === null)
          return null;
        const { id, position } = slot;
        return { id, position };
      };
      if (stage.type === "round_robin")
        return (await this.roundRobinSeeding(stage)).map(pickRelevantProps);
      return (await this.eliminationSeeding(stage)).map(pickRelevantProps);
    }
    async finalStandings(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      switch (stage.type) {
        case "round_robin":
          throw Error("A round-robin stage does not have standings.");
        case "single_elimination":
          return this.singleEliminationStandings(stageId);
        case "double_elimination":
          return this.doubleEliminationStandings(stageId);
        default:
          throw Error("Unknown stage type.");
      }
    }
    async roundRobinSeeding(stage) {
      if (stage.settings.size === undefined)
        throw Error("The size of the seeding is undefined.");
      const matches = await this.storage.select("match", { stage_id: stage.id });
      if (!matches)
        throw Error("Error getting matches.");
      const slots = helpers.convertMatchesToSeeding(matches);
      if (slots.length < stage.settings.size) {
        const diff = stage.settings.size - slots.length;
        for (let i = 0;i < diff; i++)
          slots.push(null);
      }
      const unique = helpers.uniqueBy(slots, (item) => item && item.position);
      const seeding = helpers.setArraySize(unique, stage.settings.size, null);
      return seeding;
    }
    async eliminationSeeding(stage) {
      const firstRound = await this.storage.selectFirst("round", { stage_id: stage.id, number: 1 }, false);
      if (!firstRound)
        throw Error("Error getting the first round.");
      const matches = await this.storage.select("match", { round_id: firstRound.id });
      if (!matches)
        throw Error("Error getting matches.");
      return helpers.convertMatchesToSeeding(matches);
    }
    async singleEliminationStandings(stageId) {
      var _a;
      const grouped = [];
      const { stage: stages, group: groups, match: matches, participant: participants } = await this.stageData(stageId);
      const [stage] = stages;
      const [singleBracket, finalGroup] = groups;
      const final = matches.filter((match) => match.group_id === singleBracket.id).pop();
      if (!final)
        throw Error("Final not found.");
      grouped[0] = [helpers.findParticipant(participants, getFinalWinnerIfDefined(final))];
      const losers = helpers.getLosers(participants, matches.filter((match) => match.group_id === singleBracket.id));
      grouped.push(...losers.reverse());
      if ((_a = stage.settings) === null || _a === undefined ? undefined : _a.consolationFinal) {
        const consolationFinal = matches.filter((match) => match.group_id === finalGroup.id).pop();
        if (!consolationFinal)
          throw Error("Consolation final not found.");
        const consolationFinalWinner = helpers.findParticipant(participants, getFinalWinnerIfDefined(consolationFinal));
        const consolationFinalLoser = helpers.findParticipant(participants, helpers.getLoser(consolationFinal));
        grouped.splice(2, 1, [consolationFinalWinner], [consolationFinalLoser]);
      }
      return helpers.makeFinalStandings(grouped);
    }
    async doubleEliminationStandings(stageId) {
      var _a, _b;
      const grouped = [];
      const { stage: stages, group: groups, match: matches, participant: participants } = await this.stageData(stageId);
      const [stage] = stages;
      const [winnerBracket, loserBracket, finalGroup] = groups;
      if (((_a = stage.settings) === null || _a === undefined ? undefined : _a.grandFinal) === "none") {
        const finalWB = matches.filter((match) => match.group_id === winnerBracket.id).pop();
        if (!finalWB)
          throw Error("WB final not found.");
        const finalLB = matches.filter((match) => match.group_id === loserBracket.id).pop();
        if (!finalLB)
          throw Error("LB final not found.");
        grouped[0] = [helpers.findParticipant(participants, getFinalWinnerIfDefined(finalWB))];
        grouped[1] = [helpers.findParticipant(participants, getFinalWinnerIfDefined(finalLB))];
      } else {
        const grandFinalMatches = matches.filter((match) => match.group_id === finalGroup.id);
        const decisiveMatch = helpers.getGrandFinalDecisiveMatch(((_b = stage.settings) === null || _b === undefined ? undefined : _b.grandFinal) || "none", grandFinalMatches);
        grouped[0] = [helpers.findParticipant(participants, getFinalWinnerIfDefined(decisiveMatch))];
        grouped[1] = [helpers.findParticipant(participants, helpers.getLoser(decisiveMatch))];
      }
      const losers = helpers.getLosers(participants, matches.filter((match) => match.group_id === loserBracket.id));
      grouped.push(...losers.reverse());
      return helpers.makeFinalStandings(grouped);
    }
    async getStageSpecificData(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      const groups = await this.storage.select("group", { stage_id: stageId });
      if (!groups)
        throw Error("Error getting groups.");
      const rounds = await this.storage.select("round", { stage_id: stageId });
      if (!rounds)
        throw Error("Error getting rounds.");
      const matches = await this.storage.select("match", { stage_id: stageId });
      if (!matches)
        throw Error("Error getting matches.");
      const matchGames = await this.matchGames(matches);
      return {
        stage,
        groups,
        rounds,
        matches,
        matchGames
      };
    }
  }
  exports.Get = Get;
  var getFinalWinnerIfDefined = (match) => {
    const winner = helpers.getWinner(match);
    if (!winner)
      throw Error("The final match does not have a winner.");
    return winner;
  };
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/base/updater.js
var require_updater = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseUpdater = undefined;
  var brackets_model_1 = require_dist3();
  var ordering_1 = require_ordering();
  var creator_1 = require_creator();
  var getter_1 = require_getter();
  var get_1 = require_get();
  var helpers = require_helpers();

  class BaseUpdater extends getter_1.BaseGetter {
    async updateSeeding(stageId, { seeding, seedingIds }, keepSameSize) {
      var _a, _b;
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      const newSize = keepSameSize ? stage.settings.size : (_b = (_a = seedingIds || seeding) === null || _a === undefined ? undefined : _a.length) !== null && _b !== undefined ? _b : 0;
      const creator = new creator_1.StageCreator(this.storage, {
        name: stage.name,
        tournamentId: stage.tournament_id,
        type: stage.type,
        settings: {
          ...stage.settings,
          ...newSize === 0 ? {} : { size: newSize }
        },
        ...seedingIds ? { seedingIds } : { seeding: seeding !== null && seeding !== undefined ? seeding : undefined }
      });
      creator.setExisting(stageId, false);
      const method = getter_1.BaseGetter.getSeedingOrdering(stage.type, creator);
      const slots = await creator.getSlots();
      const matches = await this.getSeedingMatches(stage.id, stage.type);
      if (!matches)
        throw Error("Error getting matches associated to the seeding.");
      const ordered = ordering_1.ordering[method](slots);
      BaseUpdater.assertCanUpdateSeeding(matches, ordered);
      await creator.run();
    }
    async confirmCurrentSeeding(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      const get = new get_1.Get(this.storage);
      const currentSeeding = await get.seeding(stageId);
      const newSeeding = helpers.convertSlotsToSeeding(currentSeeding.map(helpers.convertTBDtoBYE));
      const creator = new creator_1.StageCreator(this.storage, {
        name: stage.name,
        tournamentId: stage.tournament_id,
        type: stage.type,
        settings: stage.settings,
        seeding: newSeeding
      });
      creator.setExisting(stageId, true);
      await creator.run();
    }
    async updateParentMatch(parentId, inRoundRobin) {
      const storedParent = await this.storage.select("match", parentId);
      if (!storedParent)
        throw Error("Parent not found.");
      const games = await this.storage.select("match_game", { parent_id: parentId });
      if (!games)
        throw Error("No match games.");
      const parentScores = helpers.getChildGamesResults(games);
      const parent = helpers.getParentMatchResults(storedParent, parentScores);
      helpers.setParentMatchCompleted(parent, storedParent.child_count, inRoundRobin);
      await this.updateMatch(storedParent, parent, true);
    }
    static assertCanUpdateSeeding(matches, slots) {
      var _a, _b;
      let index = 0;
      for (const match of matches) {
        if (match.status === brackets_model_1.Status.Archived)
          throw Error("A match of round 1 is archived, which means round 2 was started.");
        const opponent1 = slots[index++];
        const opponent2 = slots[index++];
        const isParticipantLocked = helpers.isMatchParticipantLocked(match);
        if (isParticipantLocked && (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.id) !== (opponent1 === null || opponent1 === undefined ? undefined : opponent1.id) || ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.id) !== (opponent2 === null || opponent2 === undefined ? undefined : opponent2.id)))
          throw Error("A match is locked.");
      }
    }
    async updateRelatedMatches(match, updatePrevious, updateNext) {
      if (match.round_id === undefined)
        return;
      const { roundNumber, roundCount } = await this.getRoundPositionalInfo(match.round_id);
      const stage = await this.storage.select("stage", match.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const group = await this.storage.select("group", match.group_id);
      if (!group)
        throw Error("Group not found.");
      const matchLocation = helpers.getMatchLocation(stage.type, group.number);
      updatePrevious && await this.updatePrevious(match, matchLocation, stage, roundNumber);
      updateNext && await this.updateNext(match, matchLocation, stage, roundNumber, roundCount);
    }
    async updateMatch(stored, match, force) {
      if (!force && helpers.isMatchUpdateLocked(stored))
        throw Error("The match is locked.");
      const stage = await this.storage.select("stage", stored.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const inRoundRobin = helpers.isRoundRobin(stage);
      const { statusChanged, resultChanged } = helpers.setMatchResults(stored, match, inRoundRobin);
      await this.applyMatchUpdate(stored);
      if (!statusChanged && !resultChanged)
        return;
      if (!helpers.isRoundRobin(stage))
        await this.updateRelatedMatches(stored, statusChanged, resultChanged);
    }
    async updateMatchGame(stored, game) {
      if (helpers.isMatchUpdateLocked(stored))
        throw Error("The match game is locked.");
      const stage = await this.storage.select("stage", stored.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const inRoundRobin = helpers.isRoundRobin(stage);
      helpers.setMatchResults(stored, game, inRoundRobin);
      if (!await this.storage.update("match_game", stored.id, stored))
        throw Error("Could not update the match game.");
      await this.updateParentMatch(stored.parent_id, inRoundRobin);
    }
    async applyMatchUpdate(match) {
      if (!await this.storage.update("match", match.id, match))
        throw Error("Could not update the match.");
      if (match.child_count === 0)
        return;
      const updatedMatchGame = {
        opponent1: helpers.toResult(match.opponent1),
        opponent2: helpers.toResult(match.opponent2)
      };
      if (match.status <= brackets_model_1.Status.Ready || match.status === brackets_model_1.Status.Archived)
        updatedMatchGame.status = match.status;
      if (!await this.storage.update("match_game", { parent_id: match.id }, updatedMatchGame))
        throw Error("Could not update the match game.");
    }
    async updatePrevious(match, matchLocation, stage, roundNumber) {
      const previousMatches = await this.getPreviousMatches(match, matchLocation, stage, roundNumber);
      if (previousMatches.length === 0)
        return;
      if (match.status >= brackets_model_1.Status.Running)
        await this.archiveMatches(previousMatches);
      else
        await this.resetMatchesStatus(previousMatches);
    }
    async archiveMatches(matches) {
      for (const match of matches) {
        if (match.status === brackets_model_1.Status.Archived)
          continue;
        match.status = brackets_model_1.Status.Archived;
        await this.applyMatchUpdate(match);
      }
    }
    async resetMatchesStatus(matches) {
      for (const match of matches) {
        match.status = helpers.getMatchStatus(match);
        await this.applyMatchUpdate(match);
      }
    }
    async updateNext(match, matchLocation, stage, roundNumber, roundCount) {
      const nextMatches = await this.getNextMatches(match, matchLocation, stage, roundNumber, roundCount);
      if (nextMatches.length === 0) {
        if (match.status === brackets_model_1.Status.Completed)
          await this.archiveMatches([match]);
        return;
      }
      const winnerSide = helpers.getMatchResult(match);
      const actualRoundNumber = stage.settings.skipFirstRound && matchLocation === "winner_bracket" ? roundNumber + 1 : roundNumber;
      if (winnerSide)
        await this.applyToNextMatches(helpers.setNextOpponent, match, matchLocation, actualRoundNumber, roundCount, nextMatches, winnerSide);
      else
        await this.applyToNextMatches(helpers.resetNextOpponent, match, matchLocation, actualRoundNumber, roundCount, nextMatches);
    }
    async applyToNextMatches(setNextOpponent, match, matchLocation, roundNumber, roundCount, nextMatches, winnerSide) {
      if (matchLocation === "final_group") {
        if (!nextMatches[0])
          throw Error("First next match is null.");
        setNextOpponent(nextMatches[0], "opponent1", match, "opponent1");
        setNextOpponent(nextMatches[0], "opponent2", match, "opponent2");
        await this.applyMatchUpdate(nextMatches[0]);
        return;
      }
      const nextSide = helpers.getNextSide(match.number, roundNumber, roundCount, matchLocation);
      if (nextMatches[0]) {
        setNextOpponent(nextMatches[0], nextSide, match, winnerSide);
        await this.propagateByeWinners(nextMatches[0]);
      }
      if (nextMatches.length !== 2)
        return;
      if (!nextMatches[1])
        throw Error("Second next match is null.");
      if (matchLocation === "single_bracket") {
        setNextOpponent(nextMatches[1], nextSide, match, winnerSide && helpers.getOtherSide(winnerSide));
        await this.applyMatchUpdate(nextMatches[1]);
      } else if (matchLocation === "winner_bracket") {
        const nextSideIntoLB = helpers.getNextSideLoserBracket(match.number, nextMatches[1], roundNumber);
        setNextOpponent(nextMatches[1], nextSideIntoLB, match, winnerSide && helpers.getOtherSide(winnerSide));
        await this.propagateByeWinners(nextMatches[1]);
      } else if (matchLocation === "loser_bracket") {
        const nextSideIntoConsolationFinal = helpers.getNextSideConsolationFinalDoubleElimination(roundNumber);
        setNextOpponent(nextMatches[1], nextSideIntoConsolationFinal, match, winnerSide && helpers.getOtherSide(winnerSide));
        await this.propagateByeWinners(nextMatches[1]);
      }
    }
    async propagateByeWinners(match) {
      helpers.setMatchResults(match, match, false);
      await this.applyMatchUpdate(match);
      if (helpers.hasBye(match))
        await this.updateRelatedMatches(match, true, true);
    }
  }
  exports.BaseUpdater = BaseUpdater;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/update.js
var require_update = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Update = undefined;
  var brackets_model_1 = require_dist3();
  var ordering_1 = require_ordering();
  var updater_1 = require_updater();
  var helpers = require_helpers();

  class Update extends updater_1.BaseUpdater {
    async match(match) {
      if (match.id === undefined)
        throw Error("No match id given.");
      const stored = await this.storage.select("match", match.id);
      if (!stored)
        throw Error("Match not found.");
      await this.updateMatch(stored, match);
    }
    async matchGame(game) {
      const stored = await this.findMatchGame(game);
      await this.updateMatchGame(stored, game);
    }
    async ordering(stageId, seedOrdering) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      helpers.ensureNotRoundRobin(stage);
      const roundsToOrder = await this.getOrderedRounds(stage);
      if (seedOrdering.length !== roundsToOrder.length)
        throw Error("The count of seed orderings is incorrect.");
      for (let i = 0;i < roundsToOrder.length; i++)
        await this.updateRoundOrdering(roundsToOrder[i], seedOrdering[i]);
    }
    async roundOrdering(roundId, method) {
      const round = await this.storage.select("round", roundId);
      if (!round)
        throw Error("This round does not exist.");
      const stage = await this.storage.select("stage", round.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      helpers.ensureNotRoundRobin(stage);
      await this.updateRoundOrdering(round, method);
    }
    async matchChildCount(level, id, childCount) {
      switch (level) {
        case "stage":
          await this.updateStageMatchChildCount(id, childCount);
          break;
        case "group":
          await this.updateGroupMatchChildCount(id, childCount);
          break;
        case "round":
          await this.updateRoundMatchChildCount(id, childCount);
          break;
        case "match":
          const match = await this.storage.select("match", id);
          if (!match)
            throw Error("Match not found.");
          await this.adjustMatchChildGames(match, childCount);
          break;
        default:
          throw Error("Unknown child count level.");
      }
    }
    async seeding(stageId, seeding, keepSameSize = false) {
      await this.updateSeeding(stageId, { seeding }, keepSameSize);
    }
    async seedingIds(stageId, seedingIds, keepSameSize = false) {
      await this.updateSeeding(stageId, { seedingIds }, keepSameSize);
    }
    async confirmSeeding(stageId) {
      await this.confirmCurrentSeeding(stageId);
    }
    async updateRoundOrdering(round, method) {
      const matches = await this.storage.select("match", { round_id: round.id });
      if (!matches)
        throw Error("This round has no match.");
      if (matches.some((match) => match.status > brackets_model_1.Status.Ready))
        throw Error("At least one match has started or is completed.");
      const stage = await this.storage.select("stage", round.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      if (stage.settings.size === undefined)
        throw Error("Undefined stage size.");
      const group = await this.storage.select("group", round.group_id);
      if (!group)
        throw Error("Group not found.");
      const inLoserBracket = helpers.isLoserBracket(stage.type, group.number);
      const roundCountLB = helpers.getLowerBracketRoundCount(stage.settings.size);
      const seeds = helpers.getSeeds(inLoserBracket, round.number, roundCountLB, matches.length);
      const positions = ordering_1.ordering[method](seeds);
      await this.applyRoundOrdering(round.number, matches, positions);
    }
    async updateStageMatchChildCount(stageId, childCount) {
      if (!await this.storage.update("match", { stage_id: stageId }, { child_count: childCount }))
        throw Error("Could not update the match.");
      const matches = await this.storage.select("match", { stage_id: stageId });
      if (!matches)
        throw Error("This stage has no match.");
      for (const match of matches)
        await this.adjustMatchChildGames(match, childCount);
    }
    async updateGroupMatchChildCount(groupId, childCount) {
      if (!await this.storage.update("match", { group_id: groupId }, { child_count: childCount }))
        throw Error("Could not update the match.");
      const matches = await this.storage.select("match", { group_id: groupId });
      if (!matches)
        throw Error("This group has no match.");
      for (const match of matches)
        await this.adjustMatchChildGames(match, childCount);
    }
    async updateRoundMatchChildCount(roundId, childCount) {
      if (!await this.storage.update("match", { round_id: roundId }, { child_count: childCount }))
        throw Error("Could not update the match.");
      const matches = await this.storage.select("match", { round_id: roundId });
      if (!matches)
        throw Error("This round has no match.");
      for (const match of matches)
        await this.adjustMatchChildGames(match, childCount);
    }
    async applyRoundOrdering(roundNumber, matches, positions) {
      for (const match of matches) {
        const updated = { ...match };
        updated.opponent1 = helpers.findPosition(matches, positions.shift());
        if (roundNumber === 1)
          updated.opponent2 = helpers.findPosition(matches, positions.shift());
        if (!await this.storage.update("match", updated.id, updated))
          throw Error("Could not update the match.");
      }
    }
    async adjustMatchChildGames(match, targetChildCount) {
      const games = await this.storage.select("match_game", { parent_id: match.id });
      let childCount = games ? games.length : 0;
      while (childCount < targetChildCount) {
        const id = await this.storage.insert("match_game", {
          number: childCount + 1,
          stage_id: match.stage_id,
          parent_id: match.id,
          status: match.status,
          opponent1: { id: null },
          opponent2: { id: null }
        });
        if (id === -1)
          throw Error("Could not adjust the match games when inserting.");
        childCount++;
      }
      while (childCount > targetChildCount) {
        const deleted = await this.storage.delete("match_game", {
          parent_id: match.id,
          number: childCount
        });
        if (!deleted)
          throw Error("Could not adjust the match games when deleting.");
        childCount--;
      }
      if (!await this.storage.update("match", match.id, { ...match, child_count: targetChildCount }))
        throw Error("Could not update the match.");
    }
  }
  exports.Update = Update;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/delete.js
var require_delete = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Delete = undefined;

  class Delete {
    constructor(storage) {
      this.storage = storage;
    }
    async stage(stageId) {
      if (!await this.storage.delete("match_game", { stage_id: stageId }))
        throw Error("Could not delete match games.");
      if (!await this.storage.delete("match", { stage_id: stageId }))
        throw Error("Could not delete matches.");
      if (!await this.storage.delete("round", { stage_id: stageId }))
        throw Error("Could not delete rounds.");
      if (!await this.storage.delete("group", { stage_id: stageId }))
        throw Error("Could not delete groups.");
      if (!await this.storage.delete("stage", { id: stageId }))
        throw Error("Could not delete the stage.");
    }
    async tournament(tournamentId) {
      const stages = await this.storage.select("stage", { tournament_id: tournamentId });
      if (!stages)
        throw Error("Error getting the stages.");
      for (const stage of stages)
        await this.stage(stage.id);
    }
  }
  exports.Delete = Delete;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/find.js
var require_find = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Find = undefined;
  var getter_1 = require_getter();
  var helpers = require_helpers();

  class Find extends getter_1.BaseGetter {
    async upperBracket(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      switch (stage.type) {
        case "round_robin":
          throw Error("Round-robin stages do not have an upper bracket.");
        case "single_elimination":
        case "double_elimination":
          return this.getUpperBracket(stageId);
        default:
          throw Error("Unknown stage type.");
      }
    }
    async loserBracket(stageId) {
      const stage = await this.storage.select("stage", stageId);
      if (!stage)
        throw Error("Stage not found.");
      switch (stage.type) {
        case "round_robin":
          throw Error("Round-robin stages do not have a loser bracket.");
        case "single_elimination":
          throw Error("Single elimination stages do not have a loser bracket.");
        case "double_elimination":
          const group = await this.getLoserBracket(stageId);
          if (!group)
            throw Error("Loser bracket not found.");
          return group;
        default:
          throw Error("Unknown stage type.");
      }
    }
    async previousMatches(matchId, participantId) {
      const match = await this.storage.select("match", matchId);
      if (!match)
        throw Error("Match not found.");
      const stage = await this.storage.select("stage", match.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const group = await this.storage.select("group", match.group_id);
      if (!group)
        throw Error("Group not found.");
      const round = await this.storage.select("round", match.round_id);
      if (!round)
        throw Error("Round not found.");
      const matchLocation = helpers.getMatchLocation(stage.type, group.number);
      const previousMatches = await this.getPreviousMatches(match, matchLocation, stage, round.number);
      if (participantId !== undefined)
        return previousMatches.filter((m) => helpers.isParticipantInMatch(m, participantId));
      return previousMatches;
    }
    async nextMatches(matchId, participantId) {
      const match = await this.storage.select("match", matchId);
      if (!match)
        throw Error("Match not found.");
      const stage = await this.storage.select("stage", match.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const group = await this.storage.select("group", match.group_id);
      if (!group)
        throw Error("Group not found.");
      const { roundNumber, roundCount } = await this.getRoundPositionalInfo(match.round_id);
      const matchLocation = helpers.getMatchLocation(stage.type, group.number);
      const nextMatches = helpers.getNonNull(await this.getNextMatches(match, matchLocation, stage, roundNumber, roundCount));
      if (participantId !== undefined) {
        if (!helpers.isParticipantInMatch(match, participantId))
          throw Error("The participant does not belong to this match.");
        if (!helpers.isMatchStale(match))
          throw Error("The match is not stale yet, so it is not possible to conclude the next matches for this participant.");
        const loser = helpers.getLoser(match);
        if (stage.type === "single_elimination" && (loser === null || loser === undefined ? undefined : loser.id) === participantId)
          return [];
        if (stage.type === "double_elimination") {
          const { winnerBracketMatch, loserBracketMatch, finalGroupMatch } = await this.getMatchesByGroupDoubleElimination(nextMatches, new Map([[group.id, group]]));
          const winner = helpers.getWinner(match);
          if (matchLocation === "loser_bracket") {
            if (participantId === (loser === null || loser === undefined ? undefined : loser.id))
              return [];
            if (participantId === (winner === null || winner === undefined ? undefined : winner.id))
              return loserBracketMatch ? [loserBracketMatch] : [];
          } else if (matchLocation === "winner_bracket") {
            if (!loserBracketMatch)
              throw Error("All matches of winner bracket should lead to loser bracket.");
            if (participantId === (loser === null || loser === undefined ? undefined : loser.id))
              return [loserBracketMatch];
            if (participantId === (winner === null || winner === undefined ? undefined : winner.id))
              return winnerBracketMatch ? [winnerBracketMatch] : [];
          } else if (matchLocation === "final_group") {
            if (!finalGroupMatch)
              throw Error("All matches of a final group should also lead to the final group.");
            return [finalGroupMatch];
          }
        }
      }
      return nextMatches;
    }
    async match(groupId, roundNumber, matchNumber) {
      return this.findMatch(groupId, roundNumber, matchNumber);
    }
    async matchGame(game) {
      return this.findMatchGame(game);
    }
    async getMatchesByGroupDoubleElimination(matches, fetchedGroups) {
      var _a, _b, _c;
      const getGroup = async (groupId) => {
        const existing = fetchedGroups.get(groupId);
        if (existing)
          return existing;
        const group = await this.storage.select("group", groupId);
        if (!group)
          throw Error("Group not found.");
        fetchedGroups.set(groupId, group);
        return group;
      };
      let matchByGroupType = {};
      for (const match of matches) {
        const group = await getGroup(match.group_id);
        matchByGroupType = {
          winnerBracketMatch: (_a = matchByGroupType["winnerBracketMatch"]) !== null && _a !== undefined ? _a : helpers.isWinnerBracket("double_elimination", group.number) ? match : undefined,
          loserBracketMatch: (_b = matchByGroupType["loserBracketMatch"]) !== null && _b !== undefined ? _b : helpers.isLoserBracket("double_elimination", group.number) ? match : undefined,
          finalGroupMatch: (_c = matchByGroupType["finalGroupMatch"]) !== null && _c !== undefined ? _c : helpers.isFinalGroup("double_elimination", group.number) ? match : undefined
        };
      }
      return matchByGroupType;
    }
  }
  exports.Find = Find;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/reset.js
var require_reset = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Reset = undefined;
  var brackets_model_1 = require_dist3();
  var updater_1 = require_updater();
  var helpers = require_helpers();

  class Reset extends updater_1.BaseUpdater {
    async matchResults(matchId) {
      const stored = await this.storage.select("match", matchId);
      if (!stored)
        throw Error("Match not found.");
      if (!helpers.isMatchForfeitCompleted(stored) && stored.child_count > 0)
        throw Error("The parent match is controlled by its child games and its result cannot be reset.");
      const stage = await this.storage.select("stage", stored.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const group = await this.storage.select("group", stored.group_id);
      if (!group)
        throw Error("Group not found.");
      const { roundNumber, roundCount } = await this.getRoundPositionalInfo(stored.round_id);
      const matchLocation = helpers.getMatchLocation(stage.type, group.number);
      const nextMatches = await this.getNextMatches(stored, matchLocation, stage, roundNumber, roundCount);
      if (nextMatches.some((match) => match && match.status >= brackets_model_1.Status.Running && !helpers.isMatchByeCompleted(match)))
        throw Error("The match is locked.");
      helpers.resetMatchResults(stored);
      await this.applyMatchUpdate(stored);
      if (!helpers.isRoundRobin(stage))
        await this.updateRelatedMatches(stored, true, true);
    }
    async matchGameResults(gameId) {
      const stored = await this.storage.select("match_game", gameId);
      if (!stored)
        throw Error("Match game not found.");
      const stage = await this.storage.select("stage", stored.stage_id);
      if (!stage)
        throw Error("Stage not found.");
      const inRoundRobin = helpers.isRoundRobin(stage);
      helpers.resetMatchResults(stored);
      if (!await this.storage.update("match_game", stored.id, stored))
        throw Error("Could not update the match game.");
      await this.updateParentMatch(stored.parent_id, inRoundRobin);
    }
    async seeding(stageId) {
      await this.updateSeeding(stageId, { seeding: null }, false);
    }
  }
  exports.Reset = Reset;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/rng.js
var require_rng = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = rng;
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/regex.js
var require_regex = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/validate.js
var require_validate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _regex = _interopRequireDefault(require_regex());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function validate(uuid) {
    return typeof uuid === "string" && _regex.default.test(uuid);
  }
  var _default = validate;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/stringify.js
var require_stringify = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  exports.unsafeStringify = unsafeStringify;
  var _validate = _interopRequireDefault(require_validate());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var byteToHex = [];
  for (let i = 0;i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }
  function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var _default = stringify;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/v1.js
var require_v1 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _rng = _interopRequireDefault(require_rng());
  var _stringify = require_stringify();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var _nodeId;
  var _clockseq;
  var _lastMSecs = 0;
  var _lastNSecs = 0;
  function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b2 = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      const seedBytes = options.random || (options.rng || _rng.default)();
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      }
    }
    let msecs = options.msecs !== undefined ? options.msecs : Date.now();
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 16383;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 12219292800000;
    const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b2[i++] = tl >>> 24 & 255;
    b2[i++] = tl >>> 16 & 255;
    b2[i++] = tl >>> 8 & 255;
    b2[i++] = tl & 255;
    const tmh = msecs / 4294967296 * 1e4 & 268435455;
    b2[i++] = tmh >>> 8 & 255;
    b2[i++] = tmh & 255;
    b2[i++] = tmh >>> 24 & 15 | 16;
    b2[i++] = tmh >>> 16 & 255;
    b2[i++] = clockseq >>> 8 | 128;
    b2[i++] = clockseq & 255;
    for (let n = 0;n < 6; ++n) {
      b2[i + n] = node[n];
    }
    return buf || (0, _stringify.unsafeStringify)(b2);
  }
  var _default = v1;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/parse.js
var require_parse = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _validate = _interopRequireDefault(require_validate());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function parse(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Invalid UUID");
    }
    let v;
    const arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
  }
  var _default = parse;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/v35.js
var require_v35 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.URL = exports.DNS = undefined;
  exports.default = v35;
  var _stringify = require_stringify();
  var _parse = _interopRequireDefault(require_parse());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    const bytes = [];
    for (let i = 0;i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }
  var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  exports.DNS = DNS;
  var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  exports.URL = URL;
  function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
      var _namespace;
      if (typeof value === "string") {
        value = stringToBytes(value);
      }
      if (typeof namespace === "string") {
        namespace = (0, _parse.default)(namespace);
      }
      if (((_namespace = namespace) === null || _namespace === undefined ? undefined : _namespace.length) !== 16) {
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      }
      let bytes = new Uint8Array(16 + value.length);
      bytes.set(namespace);
      bytes.set(value, namespace.length);
      bytes = hashfunc(bytes);
      bytes[6] = bytes[6] & 15 | version;
      bytes[8] = bytes[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0;i < 16; ++i) {
          buf[offset + i] = bytes[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(bytes);
    }
    try {
      generateUUID.name = name;
    } catch (err) {
    }
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
  }
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/md5.js
var require_md5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  function md5(bytes) {
    if (typeof bytes === "string") {
      const msg = unescape(encodeURIComponent(bytes));
      bytes = new Uint8Array(msg.length);
      for (let i = 0;i < msg.length; ++i) {
        bytes[i] = msg.charCodeAt(i);
      }
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
  }
  function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = "0123456789abcdef";
    for (let i = 0;i < length32; i += 8) {
      const x = input[i >> 5] >>> i % 32 & 255;
      const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
      output.push(hex);
    }
    return output;
  }
  function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
  }
  function wordsToMd5(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b2 = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for (let i = 0;i < x.length; i += 16) {
      const olda = a;
      const oldb = b2;
      const oldc = c;
      const oldd = d;
      a = md5ff(a, b2, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b2, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b2, x[i + 2], 17, 606105819);
      b2 = md5ff(b2, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b2, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b2, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b2, x[i + 6], 17, -1473231341);
      b2 = md5ff(b2, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b2, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b2, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b2, x[i + 10], 17, -42063);
      b2 = md5ff(b2, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b2, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b2, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b2, x[i + 14], 17, -1502002290);
      b2 = md5ff(b2, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b2, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b2, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b2, x[i + 11], 14, 643717713);
      b2 = md5gg(b2, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b2, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b2, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b2, x[i + 15], 14, -660478335);
      b2 = md5gg(b2, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b2, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b2, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b2, x[i + 3], 14, -187363961);
      b2 = md5gg(b2, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b2, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b2, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b2, x[i + 7], 14, 1735328473);
      b2 = md5gg(b2, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b2, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b2, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b2, x[i + 11], 16, 1839030562);
      b2 = md5hh(b2, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b2, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b2, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b2, x[i + 7], 16, -155497632);
      b2 = md5hh(b2, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b2, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b2, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b2, x[i + 3], 16, -722521979);
      b2 = md5hh(b2, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b2, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b2, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b2, x[i + 15], 16, 530742520);
      b2 = md5hh(b2, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b2, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b2, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b2, x[i + 14], 15, -1416354905);
      b2 = md5ii(b2, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b2, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b2, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b2, x[i + 10], 15, -1051523);
      b2 = md5ii(b2, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b2, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b2, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b2, x[i + 6], 15, -1560198380);
      b2 = md5ii(b2, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b2, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b2, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b2, x[i + 2], 15, 718787259);
      b2 = md5ii(b2, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b2 = safeAdd(b2, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b2, c, d];
  }
  function bytesToWords(input) {
    if (input.length === 0) {
      return [];
    }
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for (let i = 0;i < length8; i += 8) {
      output[i >> 5] |= (input[i / 8] & 255) << i % 32;
    }
    return output;
  }
  function safeAdd(x, y) {
    const lsw = (x & 65535) + (y & 65535);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q, a, b2, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b2);
  }
  function md5ff(a, b2, c, d, x, s, t) {
    return md5cmn(b2 & c | ~b2 & d, a, b2, x, s, t);
  }
  function md5gg(a, b2, c, d, x, s, t) {
    return md5cmn(b2 & d | c & ~d, a, b2, x, s, t);
  }
  function md5hh(a, b2, c, d, x, s, t) {
    return md5cmn(b2 ^ c ^ d, a, b2, x, s, t);
  }
  function md5ii(a, b2, c, d, x, s, t) {
    return md5cmn(c ^ (b2 | ~d), a, b2, x, s, t);
  }
  var _default = md5;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/v3.js
var require_v3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _v = _interopRequireDefault(require_v35());
  var _md = _interopRequireDefault(require_md5());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var v3 = (0, _v.default)("v3", 48, _md.default);
  var _default = v3;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/native.js
var require_native = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var _default = {
    randomUUID
  };
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/v4.js
var require_v4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _native = _interopRequireDefault(require_native());
  var _rng = _interopRequireDefault(require_rng());
  var _stringify = require_stringify();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function v4(options, buf, offset) {
    if (_native.default.randomUUID && !buf && !options) {
      return _native.default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || _rng.default)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0;i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return (0, _stringify.unsafeStringify)(rnds);
  }
  var _default = v4;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/sha1.js
var require_sha1 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  function f(s, x, y, z) {
    switch (s) {
      case 0:
        return x & y ^ ~x & z;
      case 1:
        return x ^ y ^ z;
      case 2:
        return x & y ^ x & z ^ y & z;
      case 3:
        return x ^ y ^ z;
    }
  }
  function ROTL(x, n) {
    return x << n | x >>> 32 - n;
  }
  function sha1(bytes) {
    const K2 = [1518500249, 1859775393, 2400959708, 3395469782];
    const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof bytes === "string") {
      const msg = unescape(encodeURIComponent(bytes));
      bytes = [];
      for (let i = 0;i < msg.length; ++i) {
        bytes.push(msg.charCodeAt(i));
      }
    } else if (!Array.isArray(bytes)) {
      bytes = Array.prototype.slice.call(bytes);
    }
    bytes.push(128);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for (let i = 0;i < N; ++i) {
      const arr = new Uint32Array(16);
      for (let j = 0;j < 16; ++j) {
        arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
      }
      M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
    for (let i = 0;i < N; ++i) {
      const W = new Uint32Array(80);
      for (let t = 0;t < 16; ++t) {
        W[t] = M[i][t];
      }
      for (let t = 16;t < 80; ++t) {
        W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
      }
      let a = H[0];
      let b2 = H[1];
      let c = H[2];
      let d = H[3];
      let e = H[4];
      for (let t = 0;t < 80; ++t) {
        const s = Math.floor(t / 20);
        const T = ROTL(a, 5) + f(s, b2, c, d) + e + K2[s] + W[t] >>> 0;
        e = d;
        d = c;
        c = ROTL(b2, 30) >>> 0;
        b2 = a;
        a = T;
      }
      H[0] = H[0] + a >>> 0;
      H[1] = H[1] + b2 >>> 0;
      H[2] = H[2] + c >>> 0;
      H[3] = H[3] + d >>> 0;
      H[4] = H[4] + e >>> 0;
    }
    return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
  }
  var _default = sha1;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/v5.js
var require_v5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _v = _interopRequireDefault(require_v35());
  var _sha = _interopRequireDefault(require_sha1());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var v5 = (0, _v.default)("v5", 80, _sha.default);
  var _default = v5;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/nil.js
var require_nil = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _default = "00000000-0000-0000-0000-000000000000";
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/version.js
var require_version = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _validate = _interopRequireDefault(require_validate());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function version(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(uuid.slice(14, 15), 16);
  }
  var _default = version;
  exports.default = _default;
});

// ../brackets-viewer.js/node_modules/uuid/dist/commonjs-browser/index.js
var require_commonjs_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "NIL", {
    enumerable: true,
    get: function get() {
      return _nil.default;
    }
  });
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return _parse.default;
    }
  });
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function get() {
      return _stringify.default;
    }
  });
  Object.defineProperty(exports, "v1", {
    enumerable: true,
    get: function get() {
      return _v.default;
    }
  });
  Object.defineProperty(exports, "v3", {
    enumerable: true,
    get: function get() {
      return _v2.default;
    }
  });
  Object.defineProperty(exports, "v4", {
    enumerable: true,
    get: function get() {
      return _v3.default;
    }
  });
  Object.defineProperty(exports, "v5", {
    enumerable: true,
    get: function get() {
      return _v4.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function get() {
      return _validate.default;
    }
  });
  Object.defineProperty(exports, "version", {
    enumerable: true,
    get: function get() {
      return _version.default;
    }
  });
  var _v = _interopRequireDefault(require_v1());
  var _v2 = _interopRequireDefault(require_v3());
  var _v3 = _interopRequireDefault(require_v4());
  var _v4 = _interopRequireDefault(require_v5());
  var _nil = _interopRequireDefault(require_nil());
  var _version = _interopRequireDefault(require_version());
  var _validate = _interopRequireDefault(require_validate());
  var _stringify = _interopRequireDefault(require_stringify());
  var _parse = _interopRequireDefault(require_parse());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/manager.js
var require_manager = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BracketsManager = undefined;
  var create_1 = require_create();
  var get_1 = require_get();
  var update_1 = require_update();
  var delete_1 = require_delete();
  var find_1 = require_find();
  var reset_1 = require_reset();
  var uuid_1 = require_commonjs_browser();
  var helpers = require_helpers();

  class BracketsManager {
    constructor(storageInterface, verbose) {
      this.verbose = false;
      this.verbose = verbose !== null && verbose !== undefined ? verbose : false;
      this.storage = storageInterface;
      this.instrumentStorage();
      this.storage.selectFirst = async (table, filter, assertUnique = true) => {
        var _a;
        const results = await this.storage.select(table, filter);
        if (!results || results.length === 0)
          return null;
        if (assertUnique && results.length > 1)
          throw Error(`Selecting ${JSON.stringify(filter)} on table "${table}" must return a unique value.`);
        return (_a = results[0]) !== null && _a !== undefined ? _a : null;
      };
      this.storage.selectLast = async (table, filter, assertUnique = true) => {
        var _a;
        const results = await this.storage.select(table, filter);
        if (!results || results.length === 0)
          return null;
        if (assertUnique && results.length > 1)
          throw Error(`Selecting ${JSON.stringify(filter)} on table "${table}" must return a unique value.`);
        return (_a = results[results.length - 1]) !== null && _a !== undefined ? _a : null;
      };
      const create = new create_1.Create(this.storage);
      const createStageFunction = create.stage.bind(this);
      this.create = Object.assign(createStageFunction, { stage: createStageFunction });
      this.get = new get_1.Get(this.storage);
      this.update = new update_1.Update(this.storage);
      this.delete = new delete_1.Delete(this.storage);
      this.find = new find_1.Find(this.storage);
      this.reset = new reset_1.Reset(this.storage);
    }
    async import(data, normalizeIds = false) {
      if (normalizeIds)
        data = helpers.normalizeIds(data);
      if (!await this.storage.delete("participant"))
        throw Error("Could not empty the participant table.");
      if (!await this.storage.insert("participant", data.participant))
        throw Error("Could not import participants.");
      if (!await this.storage.delete("stage"))
        throw Error("Could not empty the stage table.");
      if (!await this.storage.insert("stage", data.stage))
        throw Error("Could not import stages.");
      if (!await this.storage.delete("group"))
        throw Error("Could not empty the group table.");
      if (!await this.storage.insert("group", data.group))
        throw Error("Could not import groups.");
      if (!await this.storage.delete("round"))
        throw Error("Could not empty the round table.");
      if (!await this.storage.insert("round", data.round))
        throw Error("Could not import rounds.");
      if (!await this.storage.delete("match"))
        throw Error("Could not empty the match table.");
      if (!await this.storage.insert("match", data.match))
        throw Error("Could not import matches.");
      if (!await this.storage.delete("match_game"))
        throw Error("Could not empty the match_game table.");
      if (!await this.storage.insert("match_game", data.match_game))
        throw Error("Could not import match games.");
    }
    async export() {
      const participants = await this.storage.select("participant");
      if (!participants)
        throw Error("Error getting participants.");
      const stages = await this.storage.select("stage");
      if (!stages)
        throw Error("Error getting stages.");
      const groups = await this.storage.select("group");
      if (!groups)
        throw Error("Error getting groups.");
      const rounds = await this.storage.select("round");
      if (!rounds)
        throw Error("Error getting rounds.");
      const matches = await this.storage.select("match");
      if (!matches)
        throw Error("Error getting matches.");
      const matchGames = await this.get.matchGames(matches);
      return {
        participant: participants,
        stage: stages,
        group: groups,
        round: rounds,
        match: matches,
        match_game: matchGames
      };
    }
    instrumentStorage() {
      const storage = this.storage;
      const instrumentedMethods = ["insert", "select", "update", "delete"];
      for (const method of Object.getOwnPropertyNames(Object.getPrototypeOf(storage))) {
        if (!instrumentedMethods.includes(method))
          continue;
        const originalMethod = storage[method].bind(storage);
        storage[method] = async (table, ...args) => {
          const verbose = this.verbose;
          let id;
          let start;
          if (verbose) {
            id = (0, uuid_1.v4)();
            start = Date.now();
            console.log(`${id} ${method.toUpperCase()} "${table}" args: ${JSON.stringify(args)}`);
          }
          const result = await originalMethod(table, ...args);
          if (verbose) {
            const duration = Date.now() - start;
            console.log(`${id} ${duration}ms - Returned ${JSON.stringify(result)}`);
          }
          return result;
        };
      }
    }
  }
  exports.BracketsManager = BracketsManager;
});

// ../brackets-viewer.js/node_modules/brackets-manager/dist/index.js
var require_dist4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StageCreator = exports.Delete = exports.Reset = exports.Find = exports.Update = exports.Get = exports.ordering = exports.helpers = exports.BracketsManager = undefined;
  var manager_1 = require_manager();
  Object.defineProperty(exports, "BracketsManager", { enumerable: true, get: function() {
    return manager_1.BracketsManager;
  } });
  exports.helpers = require_helpers();
  var ordering_1 = require_ordering();
  Object.defineProperty(exports, "ordering", { enumerable: true, get: function() {
    return ordering_1.ordering;
  } });
  var get_1 = require_get();
  Object.defineProperty(exports, "Get", { enumerable: true, get: function() {
    return get_1.Get;
  } });
  var update_1 = require_update();
  Object.defineProperty(exports, "Update", { enumerable: true, get: function() {
    return update_1.Update;
  } });
  var find_1 = require_find();
  Object.defineProperty(exports, "Find", { enumerable: true, get: function() {
    return find_1.Find;
  } });
  var reset_1 = require_reset();
  Object.defineProperty(exports, "Reset", { enumerable: true, get: function() {
    return reset_1.Reset;
  } });
  var delete_1 = require_delete();
  Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
    return delete_1.Delete;
  } });
  var creator_1 = require_creator();
  Object.defineProperty(exports, "StageCreator", { enumerable: true, get: function() {
    return creator_1.StageCreator;
  } });
});

// ../brackets-viewer.js/dist/style.scss
var require_style = __commonJS((exports, module) => {
  module.exports = "./style-5dk9p78n.scss";
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS((exports, module) => {
  function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS((exports, module) => {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS((exports, module) => {
  var _typeof = require_typeof()["default"];
  function toPrimitive(t, r) {
    if (_typeof(t) != "object" || !t)
      return t;
    var e = t[Symbol.toPrimitive];
    if (e !== undefined) {
      var i = e.call(t, r || "default");
      if (_typeof(i) != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(t);
  }
  module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS((exports, module) => {
  var _typeof = require_typeof()["default"];
  var toPrimitive = require_toPrimitive();
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return _typeof(i) == "symbol" ? i : String(i);
  }
  module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS((exports, module) => {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperties(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS((exports, module) => {
  function _assertThisInitialized(self) {
    if (self === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS((exports, module) => {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS((exports, module) => {
  var setPrototypeOf = require_setPrototypeOf();
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      setPrototypeOf(subClass, superClass);
  }
  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS((exports, module) => {
  var _typeof = require_typeof()["default"];
  var assertThisInitialized = require_assertThisInitialized();
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== undefined) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return assertThisInitialized(self);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS((exports, module) => {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS((exports, module) => {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/arrayWithHoles.js
var require_arrayWithHoles = __commonJS((exports, module) => {
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS((exports, module) => {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS((exports, module) => {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len);i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS((exports, module) => {
  var arrayLikeToArray = require_arrayLikeToArray();
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/nonIterableRest.js
var require_nonIterableRest = __commonJS((exports, module) => {
  function _nonIterableRest() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/@babel/runtime/helpers/toArray.js
var require_toArray = __commonJS((exports, module) => {
  var arrayWithHoles = require_arrayWithHoles();
  var iterableToArray = require_iterableToArray();
  var unsupportedIterableToArray = require_unsupportedIterableToArray();
  var nonIterableRest = require_nonIterableRest();
  function _toArray(arr) {
    return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
  }
  module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

// ../brackets-viewer.js/node_modules/i18next/dist/cjs/i18next.js
var require_i18next = __commonJS((exports, module) => {
  var _typeof = require_typeof();
  var _classCallCheck = require_classCallCheck();
  var _createClass = require_createClass();
  var _assertThisInitialized = require_assertThisInitialized();
  var _inherits = require_inherits();
  var _possibleConstructorReturn = require_possibleConstructorReturn();
  var _getPrototypeOf = require_getPrototypeOf();
  var _defineProperty = require_defineProperty();
  var _toArray = require_toArray();
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var _typeof__default = /* @__PURE__ */ _interopDefaultLegacy(_typeof);
  var _classCallCheck__default = /* @__PURE__ */ _interopDefaultLegacy(_classCallCheck);
  var _createClass__default = /* @__PURE__ */ _interopDefaultLegacy(_createClass);
  var _assertThisInitialized__default = /* @__PURE__ */ _interopDefaultLegacy(_assertThisInitialized);
  var _inherits__default = /* @__PURE__ */ _interopDefaultLegacy(_inherits);
  var _possibleConstructorReturn__default = /* @__PURE__ */ _interopDefaultLegacy(_possibleConstructorReturn);
  var _getPrototypeOf__default = /* @__PURE__ */ _interopDefaultLegacy(_getPrototypeOf);
  var _defineProperty__default = /* @__PURE__ */ _interopDefaultLegacy(_defineProperty);
  var _toArray__default = /* @__PURE__ */ _interopDefaultLegacy(_toArray);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var consoleLogger = {
    type: "logger",
    log: function log(args) {
      this.output("log", args);
    },
    warn: function warn(args) {
      this.output("warn", args);
    },
    error: function error(args) {
      this.output("error", args);
    },
    output: function output(type, args) {
      if (console && console[type])
        console[type].apply(console, args);
    }
  };
  var Logger = function() {
    function Logger2(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck__default["default"](this, Logger2);
      this.init(concreteLogger, options);
    }
    _createClass__default["default"](Logger2, [{
      key: "init",
      value: function init(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.prefix = options.prefix || "i18next:";
        this.logger = concreteLogger || consoleLogger;
        this.options = options;
        this.debug = options.debug;
      }
    }, {
      key: "setDebug",
      value: function setDebug(bool) {
        this.debug = bool;
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.forward(args, "log", "", true);
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;_key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return this.forward(args, "warn", "", true);
      }
    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;_key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        return this.forward(args, "error", "");
      }
    }, {
      key: "deprecate",
      value: function deprecate() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;_key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
      }
    }, {
      key: "forward",
      value: function forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug)
          return null;
        if (typeof args[0] === "string")
          args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
        return this.logger[lvl](args);
      }
    }, {
      key: "create",
      value: function create(moduleName) {
        return new Logger2(this.logger, _objectSpread(_objectSpread({}, {
          prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
        }), this.options));
      }
    }, {
      key: "clone",
      value: function clone(options) {
        options = options || this.options;
        options.prefix = options.prefix || this.prefix;
        return new Logger2(this.logger, options);
      }
    }]);
    return Logger2;
  }();
  var baseLogger = new Logger;
  var EventEmitter = function() {
    function EventEmitter2() {
      _classCallCheck__default["default"](this, EventEmitter2);
      this.observers = {};
    }
    _createClass__default["default"](EventEmitter2, [{
      key: "on",
      value: function on(events, listener) {
        var _this = this;
        events.split(" ").forEach(function(event) {
          _this.observers[event] = _this.observers[event] || [];
          _this.observers[event].push(listener);
        });
        return this;
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        if (!this.observers[event])
          return;
        if (!listener) {
          delete this.observers[event];
          return;
        }
        this.observers[event] = this.observers[event].filter(function(l) {
          return l !== listener;
        });
      }
    }, {
      key: "emit",
      value: function emit(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;_key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (this.observers[event]) {
          var cloned = [].concat(this.observers[event]);
          cloned.forEach(function(observer) {
            observer.apply(undefined, args);
          });
        }
        if (this.observers["*"]) {
          var _cloned = [].concat(this.observers["*"]);
          _cloned.forEach(function(observer) {
            observer.apply(observer, [event].concat(args));
          });
        }
      }
    }]);
    return EventEmitter2;
  }();
  function defer() {
    var res;
    var rej;
    var promise = new Promise(function(resolve, reject) {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  }
  function makeString(object) {
    if (object == null)
      return "";
    return "" + object;
  }
  function copy(a, s, t) {
    a.forEach(function(m) {
      if (s[m])
        t[m] = s[m];
    });
  }
  function getLastOfPath(object, path, Empty) {
    function cleanKey(key2) {
      return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
    }
    function canNotTraverseDeeper() {
      return !object || typeof object === "string";
    }
    var stack = typeof path !== "string" ? [].concat(path) : path.split(".");
    while (stack.length > 1) {
      if (canNotTraverseDeeper())
        return {};
      var key = cleanKey(stack.shift());
      if (!object[key] && Empty)
        object[key] = new Empty;
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object = object[key];
      } else {
        object = {};
      }
    }
    if (canNotTraverseDeeper())
      return {};
    return {
      obj: object,
      k: cleanKey(stack.shift())
    };
  }
  function setPath(object, path, newValue) {
    var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
    obj[k] = newValue;
  }
  function pushPath(object, path, newValue, concat) {
    var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
    obj[k] = obj[k] || [];
    if (concat)
      obj[k] = obj[k].concat(newValue);
    if (!concat)
      obj[k].push(newValue);
  }
  function getPath(object, path) {
    var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
    if (!obj)
      return;
    return obj[k];
  }
  function getPathWithDefaults(data, defaultData, key) {
    var value = getPath(data, key);
    if (value !== undefined) {
      return value;
    }
    return getPath(defaultData, key);
  }
  function deepExtend(target, source, overwrite) {
    for (var prop in source) {
      if (prop !== "__proto__" && prop !== "constructor") {
        if (prop in target) {
          if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
            if (overwrite)
              target[prop] = source[prop];
          } else {
            deepExtend(target[prop], source[prop], overwrite);
          }
        } else {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  }
  function regexEscape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var _entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  function escape2(data) {
    if (typeof data === "string") {
      return data.replace(/[&<>"'\/]/g, function(s) {
        return _entityMap[s];
      });
    }
    return data;
  }
  var isIE10 = typeof window !== "undefined" && window.navigator && typeof window.navigator.userAgentData === "undefined" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
  var chars = [" ", ",", "?", "!", ";"];
  function looksLikeObjectPath(key, nsSeparator, keySeparator) {
    nsSeparator = nsSeparator || "";
    keySeparator = keySeparator || "";
    var possibleChars = chars.filter(function(c) {
      return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
    });
    if (possibleChars.length === 0)
      return true;
    var r = new RegExp("(".concat(possibleChars.map(function(c) {
      return c === "?" ? "\\?" : c;
    }).join("|"), ")"));
    var matched = !r.test(key);
    if (!matched) {
      var ki = key.indexOf(keySeparator);
      if (ki > 0 && !r.test(key.substring(0, ki))) {
        matched = true;
      }
    }
    return matched;
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$1(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf__default["default"](Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf__default["default"](this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn__default["default"](this, result);
    };
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function deepFind(obj, path) {
    var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
    if (!obj)
      return;
    if (obj[path])
      return obj[path];
    var paths = path.split(keySeparator);
    var current = obj;
    for (var i = 0;i < paths.length; ++i) {
      if (!current)
        return;
      if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
        return;
      }
      if (current[paths[i]] === undefined) {
        var j = 2;
        var p = paths.slice(i, i + j).join(keySeparator);
        var mix = current[p];
        while (mix === undefined && paths.length > i + j) {
          j++;
          p = paths.slice(i, i + j).join(keySeparator);
          mix = current[p];
        }
        if (mix === undefined)
          return;
        if (mix === null)
          return null;
        if (path.endsWith(p)) {
          if (typeof mix === "string")
            return mix;
          if (p && typeof mix[p] === "string")
            return mix[p];
        }
        var joinedPath = paths.slice(i + j).join(keySeparator);
        if (joinedPath)
          return deepFind(mix, joinedPath, keySeparator);
        return;
      }
      current = current[paths[i]];
    }
    return current;
  }
  var ResourceStore = function(_EventEmitter) {
    _inherits__default["default"](ResourceStore2, _EventEmitter);
    var _super = _createSuper(ResourceStore2);
    function ResourceStore2(data) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        ns: ["translation"],
        defaultNS: "translation"
      };
      _classCallCheck__default["default"](this, ResourceStore2);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized__default["default"](_this));
      }
      _this.data = data || {};
      _this.options = options;
      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = ".";
      }
      if (_this.options.ignoreJSONStructure === undefined) {
        _this.options.ignoreJSONStructure = true;
      }
      return _this;
    }
    _createClass__default["default"](ResourceStore2, [{
      key: "addNamespaces",
      value: function addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
          this.options.ns.push(ns);
        }
      }
    }, {
      key: "removeNamespaces",
      value: function removeNamespaces(ns) {
        var index = this.options.ns.indexOf(ns);
        if (index > -1) {
          this.options.ns.splice(index, 1);
        }
      }
    }, {
      key: "getResource",
      value: function getResource(lng, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        var path = [lng, ns];
        if (key && typeof key !== "string")
          path = path.concat(key);
        if (key && typeof key === "string")
          path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
        }
        var result = getPath(this.data, path);
        if (result || !ignoreJSONStructure || typeof key !== "string")
          return result;
        return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
      }
    }, {
      key: "addResource",
      value: function addResource(lng, ns, key, value) {
        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          silent: false
        };
        var keySeparator = this.options.keySeparator;
        if (keySeparator === undefined)
          keySeparator = ".";
        var path = [lng, ns];
        if (key)
          path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          value = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options.silent)
          this.emit("added", lng, ns, key, value);
      }
    }, {
      key: "addResources",
      value: function addResources(lng, ns, resources) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          silent: false
        };
        for (var m in resources) {
          if (typeof resources[m] === "string" || Object.prototype.toString.apply(resources[m]) === "[object Array]")
            this.addResource(lng, ns, m, resources[m], {
              silent: true
            });
        }
        if (!options.silent)
          this.emit("added", lng, ns, resources);
      }
    }, {
      key: "addResourceBundle",
      value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
          silent: false
        };
        var path = [lng, ns];
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          deep = resources;
          resources = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        var pack = getPath(this.data, path) || {};
        if (deep) {
          deepExtend(pack, resources, overwrite);
        } else {
          pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
        }
        setPath(this.data, path, pack);
        if (!options.silent)
          this.emit("added", lng, ns, resources);
      }
    }, {
      key: "removeResourceBundle",
      value: function removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
          delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit("removed", lng, ns);
      }
    }, {
      key: "hasResourceBundle",
      value: function hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== undefined;
      }
    }, {
      key: "getResourceBundle",
      value: function getResourceBundle(lng, ns) {
        if (!ns)
          ns = this.options.defaultNS;
        if (this.options.compatibilityAPI === "v1")
          return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
        return this.getResource(lng, ns);
      }
    }, {
      key: "getDataByLanguage",
      value: function getDataByLanguage(lng) {
        return this.data[lng];
      }
    }, {
      key: "hasLanguageSomeTranslations",
      value: function hasLanguageSomeTranslations(lng) {
        var data = this.getDataByLanguage(lng);
        var n = data && Object.keys(data) || [];
        return !!n.find(function(v) {
          return data[v] && Object.keys(data[v]).length > 0;
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.data;
      }
    }]);
    return ResourceStore2;
  }(EventEmitter);
  var postProcessor = {
    processors: {},
    addPostProcessor: function addPostProcessor(module2) {
      this.processors[module2.name] = module2;
    },
    handle: function handle(processors, value, key, options, translator) {
      var _this = this;
      processors.forEach(function(processor2) {
        if (_this.processors[processor2])
          value = _this.processors[processor2].process(value, key, options, translator);
      });
      return value;
    }
  };
  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$2(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf__default["default"](Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf__default["default"](this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn__default["default"](this, result);
    };
  }
  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var checkedLoadedFor = {};
  var Translator = function(_EventEmitter) {
    _inherits__default["default"](Translator2, _EventEmitter);
    var _super = _createSuper$1(Translator2);
    function Translator2(services) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck__default["default"](this, Translator2);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized__default["default"](_this));
      }
      copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized__default["default"](_this));
      _this.options = options;
      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = ".";
      }
      _this.logger = baseLogger.create("translator");
      return _this;
    }
    _createClass__default["default"](Translator2, [{
      key: "changeLanguage",
      value: function changeLanguage(lng) {
        if (lng)
          this.language = lng;
      }
    }, {
      key: "exists",
      value: function exists(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };
        if (key === undefined || key === null) {
          return false;
        }
        var resolved = this.resolve(key, options);
        return resolved && resolved.res !== undefined;
      }
    }, {
      key: "extractFromKey",
      value: function extractFromKey(key, options) {
        var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined)
          nsSeparator = ":";
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var namespaces = options.ns || this.options.defaultNS || [];
        var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
          var m = key.match(this.interpolator.nestingRegexp);
          if (m && m.length > 0) {
            return {
              key,
              namespaces
            };
          }
          var parts = key.split(nsSeparator);
          if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
            namespaces = parts.shift();
          key = parts.join(keySeparator);
        }
        if (typeof namespaces === "string")
          namespaces = [namespaces];
        return {
          key,
          namespaces
        };
      }
    }, {
      key: "translate",
      value: function translate(keys, options, lastKey) {
        var _this2 = this;
        if (_typeof__default["default"](options) !== "object" && this.options.overloadTranslationOptionHandler) {
          options = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (!options)
          options = {};
        if (keys === undefined || keys === null)
          return "";
        if (!Array.isArray(keys))
          keys = [String(keys)];
        var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
        var namespace = namespaces[namespaces.length - 1];
        var lng = options.lng || this.language;
        var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng && lng.toLowerCase() === "cimode") {
          if (appendNamespaceToCIMode) {
            var nsSeparator = options.nsSeparator || this.options.nsSeparator;
            if (returnDetails) {
              resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
              return resolved;
            }
            return "".concat(namespace).concat(nsSeparator).concat(key);
          }
          if (returnDetails) {
            resolved.res = key;
            return resolved;
          }
          return key;
        }
        var resolved = this.resolve(keys, options);
        var res = resolved && resolved.res;
        var resUsedKey = resolved && resolved.usedKey || key;
        var resExactUsedKey = resolved && resolved.exactUsedKey || key;
        var resType = Object.prototype.toString.apply(res);
        var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
        var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
        var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
        if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
          if (!options.returnObjects && !this.options.returnObjects) {
            if (!this.options.returnedObjectHandler) {
              this.logger.warn("accessing an object - but returnObjects options is not enabled!");
            }
            var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
              ns: namespaces
            })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
            if (returnDetails) {
              resolved.res = r;
              return resolved;
            }
            return r;
          }
          if (keySeparator) {
            var resTypeIsArray = resType === "[object Array]";
            var copy2 = resTypeIsArray ? [] : {};
            var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
            for (var m in res) {
              if (Object.prototype.hasOwnProperty.call(res, m)) {
                var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                copy2[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                  joinArrays: false,
                  ns: namespaces
                }));
                if (copy2[m] === deepKey)
                  copy2[m] = res[m];
              }
            }
            res = copy2;
          }
        } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
          res = res.join(joinArrays);
          if (res)
            res = this.extendTranslation(res, keys, options, lastKey);
        } else {
          var usedDefault = false;
          var usedKey = false;
          var needsPluralHandling = options.count !== undefined && typeof options.count !== "string";
          var hasDefaultValue = Translator2.hasDefaultValue(options);
          var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
          var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
          if (!this.isValidLookup(res) && hasDefaultValue) {
            usedDefault = true;
            res = defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }
          var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
          var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
          var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
          if (usedKey || usedDefault || updateMissing) {
            this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
            if (keySeparator) {
              var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
                keySeparator: false
              }));
              if (fk && fk.res)
                this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
            }
            var lngs = [];
            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
            if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
              for (var i = 0;i < fallbackLngs.length; i++) {
                lngs.push(fallbackLngs[i]);
              }
            } else if (this.options.saveMissingTo === "all") {
              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
            } else {
              lngs.push(options.lng || this.language);
            }
            var send = function send(l, k, specificDefaultValue) {
              var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
              if (_this2.options.missingKeyHandler) {
                _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
              } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
              }
              _this2.emit("missingKey", l, namespace, k, res);
            };
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && needsPluralHandling) {
                lngs.forEach(function(language) {
                  _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                    send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                  });
                });
              } else {
                send(lngs, key, defaultValue);
              }
            }
          }
          res = this.extendTranslation(res, keys, options, resolved, lastKey);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
            res = "".concat(namespace, ":").concat(key);
          if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
            if (this.options.compatibilityAPI !== "v1") {
              res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
            } else {
              res = this.options.parseMissingKeyHandler(res);
            }
          }
        }
        if (returnDetails) {
          resolved.res = res;
          return resolved;
        }
        return res;
      }
    }, {
      key: "extendTranslation",
      value: function extendTranslation(res, key, options, resolved, lastKey) {
        var _this3 = this;
        if (this.i18nFormat && this.i18nFormat.parse) {
          res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
            resolved
          });
        } else if (!options.skipInterpolation) {
          if (options.interpolation)
            this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
              interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
            }));
          var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
          var nestBef;
          if (skipOnVariables) {
            var nb = res.match(this.interpolator.nestingRegexp);
            nestBef = nb && nb.length;
          }
          var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
          if (this.options.interpolation.defaultVariables)
            data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
          res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
          if (skipOnVariables) {
            var na = res.match(this.interpolator.nestingRegexp);
            var nestAft = na && na.length;
            if (nestBef < nestAft)
              options.nest = false;
          }
          if (options.nest !== false)
            res = this.interpolator.nest(res, function() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              if (lastKey && lastKey[0] === args[0] && !options.context) {
                _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                return null;
              }
              return _this3.translate.apply(_this3, args.concat([key]));
            }, options);
          if (options.interpolation)
            this.interpolator.reset();
        }
        var postProcess = options.postProcess || this.options.postProcess;
        var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
        if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
          res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
            i18nResolved: resolved
          }, options) : options, this);
        }
        return res;
      }
    }, {
      key: "resolve",
      value: function resolve(keys) {
        var _this4 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var found;
        var usedKey;
        var exactUsedKey;
        var usedLng;
        var usedNS;
        if (typeof keys === "string")
          keys = [keys];
        keys.forEach(function(k) {
          if (_this4.isValidLookup(found))
            return;
          var extracted = _this4.extractFromKey(k, options);
          var key = extracted.key;
          usedKey = key;
          var namespaces = extracted.namespaces;
          if (_this4.options.fallbackNS)
            namespaces = namespaces.concat(_this4.options.fallbackNS);
          var needsPluralHandling = options.count !== undefined && typeof options.count !== "string";
          var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
          var needsContextHandling = options.context !== undefined && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
          var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
          namespaces.forEach(function(ns) {
            if (_this4.isValidLookup(found))
              return;
            usedNS = ns;
            if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
              checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
              _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            }
            codes.forEach(function(code) {
              if (_this4.isValidLookup(found))
                return;
              usedLng = code;
              var finalKeys = [key];
              if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
              } else {
                var pluralSuffix;
                if (needsPluralHandling)
                  pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                if (needsPluralHandling) {
                  finalKeys.push(key + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(key + zeroSuffix);
                  }
                }
                if (needsContextHandling) {
                  var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                  finalKeys.push(contextKey);
                  if (needsPluralHandling) {
                    finalKeys.push(contextKey + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(contextKey + zeroSuffix);
                    }
                  }
                }
              }
              var possibleKey;
              while (possibleKey = finalKeys.pop()) {
                if (!_this4.isValidLookup(found)) {
                  exactUsedKey = possibleKey;
                  found = _this4.getResource(code, ns, possibleKey, options);
                }
              }
            });
          });
        });
        return {
          res: found,
          usedKey,
          exactUsedKey,
          usedLng,
          usedNS
        };
      }
    }, {
      key: "isValidLookup",
      value: function isValidLookup(res) {
        return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
      }
    }, {
      key: "getResource",
      value: function getResource(code, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (this.i18nFormat && this.i18nFormat.getResource)
          return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
      }
    }], [{
      key: "hasDefaultValue",
      value: function hasDefaultValue(options) {
        var prefix = "defaultValue";
        for (var option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && options[option] !== undefined) {
            return true;
          }
        }
        return false;
      }
    }]);
    return Translator2;
  }(EventEmitter);
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var LanguageUtil = function() {
    function LanguageUtil2(options) {
      _classCallCheck__default["default"](this, LanguageUtil2);
      this.options = options;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = baseLogger.create("languageUtils");
    }
    _createClass__default["default"](LanguageUtil2, [{
      key: "getScriptPartFromCode",
      value: function getScriptPartFromCode(code) {
        if (!code || code.indexOf("-") < 0)
          return null;
        var p = code.split("-");
        if (p.length === 2)
          return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === "x")
          return null;
        return this.formatLanguageCode(p.join("-"));
      }
    }, {
      key: "getLanguagePartFromCode",
      value: function getLanguagePartFromCode(code) {
        if (!code || code.indexOf("-") < 0)
          return code;
        var p = code.split("-");
        return this.formatLanguageCode(p[0]);
      }
    }, {
      key: "formatLanguageCode",
      value: function formatLanguageCode(code) {
        if (typeof code === "string" && code.indexOf("-") > -1) {
          var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
          var p = code.split("-");
          if (this.options.lowerCaseLng) {
            p = p.map(function(part) {
              return part.toLowerCase();
            });
          } else if (p.length === 2) {
            p[0] = p[0].toLowerCase();
            p[1] = p[1].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1)
              p[1] = capitalize(p[1].toLowerCase());
          } else if (p.length === 3) {
            p[0] = p[0].toLowerCase();
            if (p[1].length === 2)
              p[1] = p[1].toUpperCase();
            if (p[0] !== "sgn" && p[2].length === 2)
              p[2] = p[2].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1)
              p[1] = capitalize(p[1].toLowerCase());
            if (specialCases.indexOf(p[2].toLowerCase()) > -1)
              p[2] = capitalize(p[2].toLowerCase());
          }
          return p.join("-");
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
      }
    }, {
      key: "isSupportedCode",
      value: function isSupportedCode(code) {
        if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
          code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
      }
    }, {
      key: "getBestMatchFromCodes",
      value: function getBestMatchFromCodes(codes) {
        var _this = this;
        if (!codes)
          return null;
        var found;
        codes.forEach(function(code) {
          if (found)
            return;
          var cleanedLng = _this.formatLanguageCode(code);
          if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
            found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
          codes.forEach(function(code) {
            if (found)
              return;
            var lngOnly = _this.getLanguagePartFromCode(code);
            if (_this.isSupportedCode(lngOnly))
              return found = lngOnly;
            found = _this.options.supportedLngs.find(function(supportedLng) {
              if (supportedLng.indexOf(lngOnly) === 0)
                return supportedLng;
            });
          });
        }
        if (!found)
          found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
      }
    }, {
      key: "getFallbackCodes",
      value: function getFallbackCodes(fallbacks, code) {
        if (!fallbacks)
          return [];
        if (typeof fallbacks === "function")
          fallbacks = fallbacks(code);
        if (typeof fallbacks === "string")
          fallbacks = [fallbacks];
        if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
          return fallbacks;
        if (!code)
          return fallbacks["default"] || [];
        var found = fallbacks[code];
        if (!found)
          found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found)
          found = fallbacks[this.formatLanguageCode(code)];
        if (!found)
          found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found)
          found = fallbacks["default"];
        return found || [];
      }
    }, {
      key: "toResolveHierarchy",
      value: function toResolveHierarchy(code, fallbackCode) {
        var _this2 = this;
        var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
        var codes = [];
        var addCode = function addCode(c) {
          if (!c)
            return;
          if (_this2.isSupportedCode(c)) {
            codes.push(c);
          } else {
            _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
          }
        };
        if (typeof code === "string" && code.indexOf("-") > -1) {
          if (this.options.load !== "languageOnly")
            addCode(this.formatLanguageCode(code));
          if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
            addCode(this.getScriptPartFromCode(code));
          if (this.options.load !== "currentOnly")
            addCode(this.getLanguagePartFromCode(code));
        } else if (typeof code === "string") {
          addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach(function(fc) {
          if (codes.indexOf(fc) < 0)
            addCode(_this2.formatLanguageCode(fc));
        });
        return codes;
      }
    }]);
    return LanguageUtil2;
  }();
  var sets = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
  }, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
  }];
  var _rulesPluralsTypes = {
    1: function _(n) {
      return Number(n > 1);
    },
    2: function _(n) {
      return Number(n != 1);
    },
    3: function _(n) {
      return 0;
    },
    4: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    5: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
    },
    6: function _(n) {
      return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
    },
    7: function _(n) {
      return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    8: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
    },
    9: function _(n) {
      return Number(n >= 2);
    },
    10: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
    },
    11: function _(n) {
      return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
    },
    12: function _(n) {
      return Number(n % 10 != 1 || n % 100 == 11);
    },
    13: function _(n) {
      return Number(n !== 0);
    },
    14: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
    },
    15: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    16: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
    },
    17: function _(n) {
      return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
    },
    18: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
    },
    19: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
    },
    20: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
    },
    21: function _(n) {
      return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
    },
    22: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
    }
  };
  var deprecatedJsonVersions = ["v1", "v2", "v3"];
  var suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  };
  function createRules() {
    var rules = {};
    sets.forEach(function(set) {
      set.lngs.forEach(function(l) {
        rules[l] = {
          numbers: set.nr,
          plurals: _rulesPluralsTypes[set.fc]
        };
      });
    });
    return rules;
  }
  var PluralResolver = function() {
    function PluralResolver2(languageUtils) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck__default["default"](this, PluralResolver2);
      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = baseLogger.create("pluralResolver");
      if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
        this.options.compatibilityJSON = "v3";
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
      }
      this.rules = createRules();
    }
    _createClass__default["default"](PluralResolver2, [{
      key: "addRule",
      value: function addRule(lng, obj) {
        this.rules[lng] = obj;
      }
    }, {
      key: "getRule",
      value: function getRule(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.shouldUseIntlApi()) {
          try {
            return new Intl.PluralRules(code, {
              type: options.ordinal ? "ordinal" : "cardinal"
            });
          } catch (_unused) {
            return;
          }
        }
        return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
      }
    }, {
      key: "needsPlural",
      value: function needsPlural(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);
        if (this.shouldUseIntlApi()) {
          return rule && rule.resolvedOptions().pluralCategories.length > 1;
        }
        return rule && rule.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function getPluralFormsOfKey(code, key) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.getSuffixes(code, options).map(function(suffix) {
          return "".concat(key).concat(suffix);
        });
      }
    }, {
      key: "getSuffixes",
      value: function getSuffixes(code) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);
        if (!rule) {
          return [];
        }
        if (this.shouldUseIntlApi()) {
          return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
            return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
          }).map(function(pluralCategory) {
            return "".concat(_this.options.prepend).concat(pluralCategory);
          });
        }
        return rule.numbers.map(function(number) {
          return _this.getSuffix(code, number, options);
        });
      }
    }, {
      key: "getSuffix",
      value: function getSuffix(code, count) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var rule = this.getRule(code, options);
        if (rule) {
          if (this.shouldUseIntlApi()) {
            return "".concat(this.options.prepend).concat(rule.select(count));
          }
          return this.getSuffixRetroCompatible(rule, count);
        }
        this.logger.warn("no plural rule found for: ".concat(code));
        return "";
      }
    }, {
      key: "getSuffixRetroCompatible",
      value: function getSuffixRetroCompatible(rule, count) {
        var _this2 = this;
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];
        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = "plural";
          } else if (suffix === 1) {
            suffix = "";
          }
        }
        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };
        if (this.options.compatibilityJSON === "v1") {
          if (suffix === 1)
            return "";
          if (typeof suffix === "number")
            return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === "v2") {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }
        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }
    }, {
      key: "shouldUseIntlApi",
      value: function shouldUseIntlApi() {
        return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
      }
    }]);
    return PluralResolver2;
  }();
  function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$3(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$3(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Interpolator = function() {
    function Interpolator2() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck__default["default"](this, Interpolator2);
      this.logger = baseLogger.create("interpolator");
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function(value) {
        return value;
      };
      this.init(options);
    }
    _createClass__default["default"](Interpolator2, [{
      key: "init",
      value: function init() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!options.interpolation)
          options.interpolation = {
            escapeValue: true
          };
        var iOpts = options.interpolation;
        this.escape = iOpts.escape !== undefined ? iOpts.escape : escape2;
        this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
        this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
        this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
        this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
        this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
        this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
        this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
        this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
        this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
        this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
        this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.options)
          this.init(this.options);
      }
    }, {
      key: "resetRegExp",
      value: function resetRegExp() {
        var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = new RegExp(regexpStr, "g");
        var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
        var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
      }
    }, {
      key: "interpolate",
      value: function interpolate(str, data, lng, options) {
        var _this = this;
        var match;
        var value;
        var replaces;
        var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function regexSafe(val) {
          return val.replace(/\$/g, "$$$$");
        }
        var handleFormat = function handleFormat(key) {
          if (key.indexOf(_this.formatSeparator) < 0) {
            var path = getPathWithDefaults(data, defaultData, key);
            return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: key
            })) : path;
          }
          var p = key.split(_this.formatSeparator);
          var k = p.shift().trim();
          var f = p.join(_this.formatSeparator).trim();
          return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: k
          }));
        };
        this.resetRegExp();
        var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
        var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        var todos = [{
          regex: this.regexpUnescape,
          safeValue: function safeValue(val) {
            return regexSafe(val);
          }
        }, {
          regex: this.regexp,
          safeValue: function safeValue(val) {
            return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
          }
        }];
        todos.forEach(function(todo) {
          replaces = 0;
          while (match = todo.regex.exec(str)) {
            var matchedVar = match[1].trim();
            value = handleFormat(matchedVar);
            if (value === undefined) {
              if (typeof missingInterpolationHandler === "function") {
                var temp = missingInterpolationHandler(str, match, options);
                value = typeof temp === "string" ? temp : "";
              } else if (options && options.hasOwnProperty(matchedVar)) {
                value = "";
              } else if (skipOnVariables) {
                value = match[0];
                continue;
              } else {
                _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                value = "";
              }
            } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
              value = makeString(value);
            }
            var safeValue = todo.safeValue(value);
            str = str.replace(match[0], safeValue);
            if (skipOnVariables) {
              todo.regex.lastIndex += value.length;
              todo.regex.lastIndex -= match[0].length;
            } else {
              todo.regex.lastIndex = 0;
            }
            replaces++;
            if (replaces >= _this.maxReplaces) {
              break;
            }
          }
        });
        return str;
      }
    }, {
      key: "nest",
      value: function nest(str, fc) {
        var _this2 = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var match;
        var value;
        var clonedOptions = _objectSpread$3({}, options);
        clonedOptions.applyPostProcessor = false;
        delete clonedOptions.defaultValue;
        function handleHasOptions(key, inheritedOptions) {
          var sep = this.nestingOptionsSeparator;
          if (key.indexOf(sep) < 0)
            return key;
          var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
          var optionsString = "{".concat(c[1]);
          key = c[0];
          optionsString = this.interpolate(optionsString, clonedOptions);
          var matchedSingleQuotes = optionsString.match(/'/g);
          var matchedDoubleQuotes = optionsString.match(/"/g);
          if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
            optionsString = optionsString.replace(/'/g, '"');
          }
          try {
            clonedOptions = JSON.parse(optionsString);
            if (inheritedOptions)
              clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
          } catch (e) {
            this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
            return "".concat(key).concat(sep).concat(optionsString);
          }
          delete clonedOptions.defaultValue;
          return key;
        }
        while (match = this.nestingRegexp.exec(str)) {
          var formatters = [];
          var doReduce = false;
          if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
            var r = match[1].split(this.formatSeparator).map(function(elem) {
              return elem.trim();
            });
            match[1] = r.shift();
            formatters = r;
            doReduce = true;
          }
          value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
          if (value && match[0] === str && typeof value !== "string")
            return value;
          if (typeof value !== "string")
            value = makeString(value);
          if (!value) {
            this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
            value = "";
          }
          if (doReduce) {
            value = formatters.reduce(function(v, f) {
              return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                interpolationkey: match[1].trim()
              }));
            }, value.trim());
          }
          str = str.replace(match[0], value);
          this.regexp.lastIndex = 0;
        }
        return str;
      }
    }]);
    return Interpolator2;
  }();
  function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$4(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$4(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$4(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function parseFormatStr(formatStr) {
    var formatName = formatStr.toLowerCase().trim();
    var formatOptions = {};
    if (formatStr.indexOf("(") > -1) {
      var p = formatStr.split("(");
      formatName = p[0].toLowerCase().trim();
      var optStr = p[1].substring(0, p[1].length - 1);
      if (formatName === "currency" && optStr.indexOf(":") < 0) {
        if (!formatOptions.currency)
          formatOptions.currency = optStr.trim();
      } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
        if (!formatOptions.range)
          formatOptions.range = optStr.trim();
      } else {
        var opts = optStr.split(";");
        opts.forEach(function(opt) {
          if (!opt)
            return;
          var _opt$split = opt.split(":"), _opt$split2 = _toArray__default["default"](_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
          var val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          if (!formatOptions[key.trim()])
            formatOptions[key.trim()] = val;
          if (val === "false")
            formatOptions[key.trim()] = false;
          if (val === "true")
            formatOptions[key.trim()] = true;
          if (!isNaN(val))
            formatOptions[key.trim()] = parseInt(val, 10);
        });
      }
    }
    return {
      formatName,
      formatOptions
    };
  }
  function createCachedFormatter(fn) {
    var cache = {};
    return function invokeFormatter(val, lng, options) {
      var key = lng + JSON.stringify(options);
      var formatter = cache[key];
      if (!formatter) {
        formatter = fn(lng, options);
        cache[key] = formatter;
      }
      return formatter(val);
    };
  }
  var Formatter = function() {
    function Formatter2() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck__default["default"](this, Formatter2);
      this.logger = baseLogger.create("formatter");
      this.options = options;
      this.formats = {
        number: createCachedFormatter(function(lng, options2) {
          var formatter = new Intl.NumberFormat(lng, options2);
          return function(val) {
            return formatter.format(val);
          };
        }),
        currency: createCachedFormatter(function(lng, options2) {
          var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options2), {}, {
            style: "currency"
          }));
          return function(val) {
            return formatter.format(val);
          };
        }),
        datetime: createCachedFormatter(function(lng, options2) {
          var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options2));
          return function(val) {
            return formatter.format(val);
          };
        }),
        relativetime: createCachedFormatter(function(lng, options2) {
          var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options2));
          return function(val) {
            return formatter.format(val, options2.range || "day");
          };
        }),
        list: createCachedFormatter(function(lng, options2) {
          var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options2));
          return function(val) {
            return formatter.format(val);
          };
        })
      };
      this.init(options);
    }
    _createClass__default["default"](Formatter2, [{
      key: "init",
      value: function init(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };
        var iOpts = options.interpolation;
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      }
    }, {
      key: "add",
      value: function add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
      }
    }, {
      key: "addCached",
      value: function addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
      }
    }, {
      key: "format",
      value: function format(value, _format, lng, options) {
        var _this = this;
        var formats = _format.split(this.formatSeparator);
        var result = formats.reduce(function(mem, f) {
          var _parseFormatStr = parseFormatStr(f), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
          if (_this.formats[formatName]) {
            var formatted = mem;
            try {
              var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
              var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
              formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
            } catch (error) {
              _this.logger.warn(error);
            }
            return formatted;
          } else {
            _this.logger.warn("there was no format function for ".concat(formatName));
          }
          return mem;
        }, value);
        return result;
      }
    }]);
    return Formatter2;
  }();
  function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$5(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$5(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$5(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf__default["default"](Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf__default["default"](this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn__default["default"](this, result);
    };
  }
  function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function removePending(q, name) {
    if (q.pending[name] !== undefined) {
      delete q.pending[name];
      q.pendingCount--;
    }
  }
  var Connector = function(_EventEmitter) {
    _inherits__default["default"](Connector2, _EventEmitter);
    var _super = _createSuper$2(Connector2);
    function Connector2(backend, store, services) {
      var _this;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      _classCallCheck__default["default"](this, Connector2);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized__default["default"](_this));
      }
      _this.backend = backend;
      _this.store = store;
      _this.services = services;
      _this.languageUtils = services.languageUtils;
      _this.options = options;
      _this.logger = baseLogger.create("backendConnector");
      _this.waitingReads = [];
      _this.maxParallelReads = options.maxParallelReads || 10;
      _this.readingCalls = 0;
      _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
      _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
      _this.state = {};
      _this.queue = [];
      if (_this.backend && _this.backend.init) {
        _this.backend.init(services, options.backend, options);
      }
      return _this;
    }
    _createClass__default["default"](Connector2, [{
      key: "queueLoad",
      value: function queueLoad(languages, namespaces, options, callback) {
        var _this2 = this;
        var toLoad = {};
        var pending = {};
        var toLoadLanguages = {};
        var toLoadNamespaces = {};
        languages.forEach(function(lng) {
          var hasAllNamespaces = true;
          namespaces.forEach(function(ns) {
            var name = "".concat(lng, "|").concat(ns);
            if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
              _this2.state[name] = 2;
            } else if (_this2.state[name] < 0)
              ;
            else if (_this2.state[name] === 1) {
              if (pending[name] === undefined)
                pending[name] = true;
            } else {
              _this2.state[name] = 1;
              hasAllNamespaces = false;
              if (pending[name] === undefined)
                pending[name] = true;
              if (toLoad[name] === undefined)
                toLoad[name] = true;
              if (toLoadNamespaces[ns] === undefined)
                toLoadNamespaces[ns] = true;
            }
          });
          if (!hasAllNamespaces)
            toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
          this.queue.push({
            pending,
            pendingCount: Object.keys(pending).length,
            loaded: {},
            errors: [],
            callback
          });
        }
        return {
          toLoad: Object.keys(toLoad),
          pending: Object.keys(pending),
          toLoadLanguages: Object.keys(toLoadLanguages),
          toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
      }
    }, {
      key: "loaded",
      value: function loaded(name, err, data) {
        var s = name.split("|");
        var lng = s[0];
        var ns = s[1];
        if (err)
          this.emit("failedLoading", lng, ns, err);
        if (data) {
          this.store.addResourceBundle(lng, ns, data);
        }
        this.state[name] = err ? -1 : 2;
        var loaded = {};
        this.queue.forEach(function(q) {
          pushPath(q.loaded, [lng], ns);
          removePending(q, name);
          if (err)
            q.errors.push(err);
          if (q.pendingCount === 0 && !q.done) {
            Object.keys(q.loaded).forEach(function(l) {
              if (!loaded[l])
                loaded[l] = {};
              var loadedKeys = q.loaded[l];
              if (loadedKeys.length) {
                loadedKeys.forEach(function(ns2) {
                  if (loaded[l][ns2] === undefined)
                    loaded[l][ns2] = true;
                });
              }
            });
            q.done = true;
            if (q.errors.length) {
              q.callback(q.errors);
            } else {
              q.callback();
            }
          }
        });
        this.emit("loaded", loaded);
        this.queue = this.queue.filter(function(q) {
          return !q.done;
        });
      }
    }, {
      key: "read",
      value: function read(lng, ns, fcName) {
        var _this3 = this;
        var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
        var callback = arguments.length > 5 ? arguments[5] : undefined;
        if (!lng.length)
          return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
          this.waitingReads.push({
            lng,
            ns,
            fcName,
            tried,
            wait,
            callback
          });
          return;
        }
        this.readingCalls++;
        return this.backend[fcName](lng, ns, function(err, data) {
          _this3.readingCalls--;
          if (_this3.waitingReads.length > 0) {
            var next = _this3.waitingReads.shift();
            _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
          }
          if (err && data && tried < _this3.maxRetries) {
            setTimeout(function() {
              _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
            }, wait);
            return;
          }
          callback(err, data);
        });
      }
    }, {
      key: "prepareLoading",
      value: function prepareLoading(languages, namespaces) {
        var _this4 = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments.length > 3 ? arguments[3] : undefined;
        if (!this.backend) {
          this.logger.warn("No backend was added via i18next.use. Will not load resources.");
          return callback && callback();
        }
        if (typeof languages === "string")
          languages = this.languageUtils.toResolveHierarchy(languages);
        if (typeof namespaces === "string")
          namespaces = [namespaces];
        var toLoad = this.queueLoad(languages, namespaces, options, callback);
        if (!toLoad.toLoad.length) {
          if (!toLoad.pending.length)
            callback();
          return null;
        }
        toLoad.toLoad.forEach(function(name) {
          _this4.loadOne(name);
        });
      }
    }, {
      key: "load",
      value: function load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
      }
    }, {
      key: "reload",
      value: function reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
          reload: true
        }, callback);
      }
    }, {
      key: "loadOne",
      value: function loadOne(name) {
        var _this5 = this;
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var s = name.split("|");
        var lng = s[0];
        var ns = s[1];
        this.read(lng, ns, "read", undefined, undefined, function(err, data) {
          if (err)
            _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
          if (!err && data)
            _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
          _this5.loaded(name, err, data);
        });
      }
    }, {
      key: "saveMissing",
      value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
          this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          return;
        }
        if (key === undefined || key === null || key === "")
          return;
        if (this.backend && this.backend.create) {
          this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
            isUpdate
          }));
        }
        if (!languages || !languages[0])
          return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
      }
    }]);
    return Connector2;
  }(EventEmitter);
  function get() {
    return {
      debug: false,
      initImmediate: true,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: "all",
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: "fallback",
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: true,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: function handle(args) {
        var ret = {};
        if (_typeof__default["default"](args[1]) === "object")
          ret = args[1];
        if (typeof args[1] === "string")
          ret.defaultValue = args[1];
        if (typeof args[2] === "string")
          ret.tDescription = args[2];
        if (_typeof__default["default"](args[2]) === "object" || _typeof__default["default"](args[3]) === "object") {
          var options = args[3] || args[2];
          Object.keys(options).forEach(function(key) {
            ret[key] = options[key];
          });
        }
        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: function format(value, _format, lng, options) {
          return value;
        },
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1000,
        skipOnVariables: true
      }
    };
  }
  function transformOptions(options) {
    if (typeof options.ns === "string")
      options.ns = [options.ns];
    if (typeof options.fallbackLng === "string")
      options.fallbackLng = [options.fallbackLng];
    if (typeof options.fallbackNS === "string")
      options.fallbackNS = [options.fallbackNS];
    if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
      options.supportedLngs = options.supportedLngs.concat(["cimode"]);
    }
    return options;
  }
  function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$6(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$6(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$6(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper$3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf__default["default"](Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf__default["default"](this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn__default["default"](this, result);
    };
  }
  function _isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function noop() {
  }
  function bindMemberFunctions(inst) {
    var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach(function(mem) {
      if (typeof inst[mem] === "function") {
        inst[mem] = inst[mem].bind(inst);
      }
    });
  }
  var I18n = function(_EventEmitter) {
    _inherits__default["default"](I18n2, _EventEmitter);
    var _super = _createSuper$3(I18n2);
    function I18n2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      _classCallCheck__default["default"](this, I18n2);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized__default["default"](_this));
      }
      _this.options = transformOptions(options);
      _this.services = {};
      _this.logger = baseLogger;
      _this.modules = {
        external: []
      };
      bindMemberFunctions(_assertThisInitialized__default["default"](_this));
      if (callback && !_this.isInitialized && !options.isClone) {
        if (!_this.options.initImmediate) {
          _this.init(options, callback);
          return _possibleConstructorReturn__default["default"](_this, _assertThisInitialized__default["default"](_this));
        }
        setTimeout(function() {
          _this.init(options, callback);
        }, 0);
      }
      return _this;
    }
    _createClass__default["default"](I18n2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (!options.defaultNS && options.defaultNS !== false && options.ns) {
          if (typeof options.ns === "string") {
            options.defaultNS = options.ns;
          } else if (options.ns.indexOf("translation") < 0) {
            options.defaultNS = options.ns[0];
          }
        }
        var defOpts = get();
        this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
        if (this.options.compatibilityAPI !== "v1") {
          this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
        }
        if (options.keySeparator !== undefined) {
          this.options.userDefinedKeySeparator = options.keySeparator;
        }
        if (options.nsSeparator !== undefined) {
          this.options.userDefinedNsSeparator = options.nsSeparator;
        }
        function createClassOnDemand(ClassOrObject) {
          if (!ClassOrObject)
            return null;
          if (typeof ClassOrObject === "function")
            return new ClassOrObject;
          return ClassOrObject;
        }
        if (!this.options.isClone) {
          if (this.modules.logger) {
            baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
          } else {
            baseLogger.init(null, this.options);
          }
          var formatter;
          if (this.modules.formatter) {
            formatter = this.modules.formatter;
          } else if (typeof Intl !== "undefined") {
            formatter = Formatter;
          }
          var lu = new LanguageUtil(this.options);
          this.store = new ResourceStore(this.options.resources, this.options);
          var s = this.services;
          s.logger = baseLogger;
          s.resourceStore = this.store;
          s.languageUtils = lu;
          s.pluralResolver = new PluralResolver(lu, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });
          if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
            s.formatter = createClassOnDemand(formatter);
            s.formatter.init(s, this.options);
            this.options.interpolation.format = s.formatter.format.bind(s.formatter);
          }
          s.interpolator = new Interpolator(this.options);
          s.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
          s.backendConnector.on("*", function(event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;_key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            _this2.emit.apply(_this2, [event].concat(args));
          });
          if (this.modules.languageDetector) {
            s.languageDetector = createClassOnDemand(this.modules.languageDetector);
            s.languageDetector.init(s, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
            if (s.i18nFormat.init)
              s.i18nFormat.init(this);
          }
          this.translator = new Translator(this.services, this.options);
          this.translator.on("*", function(event) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;_key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            _this2.emit.apply(_this2, [event].concat(args));
          });
          this.modules.external.forEach(function(m) {
            if (m.init)
              m.init(_this2);
          });
        }
        this.format = this.options.interpolation.format;
        if (!callback)
          callback = noop;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (codes.length > 0 && codes[0] !== "dev")
            this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn("init: no languageDetector is used and no lng is defined");
        }
        var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        storeApi.forEach(function(fcName) {
          _this2[fcName] = function() {
            var _this2$store;
            return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
          };
        });
        var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
        storeApiChained.forEach(function(fcName) {
          _this2[fcName] = function() {
            var _this2$store2;
            (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
            return _this2;
          };
        });
        var deferred = defer();
        var load = function load() {
          var finish = function finish(err, t) {
            if (_this2.isInitialized && !_this2.initializedStoreOnce)
              _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
            _this2.isInitialized = true;
            if (!_this2.options.isClone)
              _this2.logger.log("initialized", _this2.options);
            _this2.emit("initialized", _this2.options);
            deferred.resolve(t);
            callback(err, t);
          };
          if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
            return finish(null, _this2.t.bind(_this2));
          _this2.changeLanguage(_this2.options.lng, finish);
        };
        if (this.options.resources || !this.options.initImmediate) {
          load();
        } else {
          setTimeout(load, 0);
        }
        return deferred;
      }
    }, {
      key: "loadResources",
      value: function loadResources(language) {
        var _this3 = this;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var usedCallback = callback;
        var usedLng = typeof language === "string" ? language : this.language;
        if (typeof language === "function")
          usedCallback = language;
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (usedLng && usedLng.toLowerCase() === "cimode")
            return usedCallback();
          var toLoad = [];
          var append = function append(lng) {
            if (!lng)
              return;
            var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
            lngs.forEach(function(l) {
              if (toLoad.indexOf(l) < 0)
                toLoad.push(l);
            });
          };
          if (!usedLng) {
            var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            fallbacks.forEach(function(l) {
              return append(l);
            });
          } else {
            append(usedLng);
          }
          if (this.options.preload) {
            this.options.preload.forEach(function(l) {
              return append(l);
            });
          }
          this.services.backendConnector.load(toLoad, this.options.ns, function(e) {
            if (!e && !_this3.resolvedLanguage && _this3.language)
              _this3.setResolvedLanguage(_this3.language);
            usedCallback(e);
          });
        } else {
          usedCallback(null);
        }
      }
    }, {
      key: "reloadResources",
      value: function reloadResources(lngs, ns, callback) {
        var deferred = defer();
        if (!lngs)
          lngs = this.languages;
        if (!ns)
          ns = this.options.ns;
        if (!callback)
          callback = noop;
        this.services.backendConnector.reload(lngs, ns, function(err) {
          deferred.resolve();
          callback(err);
        });
        return deferred;
      }
    }, {
      key: "use",
      value: function use(module2) {
        if (!module2)
          throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!module2.type)
          throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        if (module2.type === "backend") {
          this.modules.backend = module2;
        }
        if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
          this.modules.logger = module2;
        }
        if (module2.type === "languageDetector") {
          this.modules.languageDetector = module2;
        }
        if (module2.type === "i18nFormat") {
          this.modules.i18nFormat = module2;
        }
        if (module2.type === "postProcessor") {
          postProcessor.addPostProcessor(module2);
        }
        if (module2.type === "formatter") {
          this.modules.formatter = module2;
        }
        if (module2.type === "3rdParty") {
          this.modules.external.push(module2);
        }
        return this;
      }
    }, {
      key: "setResolvedLanguage",
      value: function setResolvedLanguage(l) {
        if (!l || !this.languages)
          return;
        if (["cimode", "dev"].indexOf(l) > -1)
          return;
        for (var li = 0;li < this.languages.length; li++) {
          var lngInLngs = this.languages[li];
          if (["cimode", "dev"].indexOf(lngInLngs) > -1)
            continue;
          if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
            this.resolvedLanguage = lngInLngs;
            break;
          }
        }
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(lng, callback) {
        var _this4 = this;
        this.isLanguageChangingTo = lng;
        var deferred = defer();
        this.emit("languageChanging", lng);
        var setLngProps = function setLngProps(l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          _this4.resolvedLanguage = undefined;
          _this4.setResolvedLanguage(l);
        };
        var done = function done(err, l) {
          if (l) {
            setLngProps(l);
            _this4.translator.changeLanguage(l);
            _this4.isLanguageChangingTo = undefined;
            _this4.emit("languageChanged", l);
            _this4.logger.log("languageChanged", l);
          } else {
            _this4.isLanguageChangingTo = undefined;
          }
          deferred.resolve(function() {
            return _this4.t.apply(_this4, arguments);
          });
          if (callback)
            callback(err, function() {
              return _this4.t.apply(_this4, arguments);
            });
        };
        var setLng = function setLng(lngs) {
          if (!lng && !lngs && _this4.services.languageDetector)
            lngs = [];
          var l = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
          if (l) {
            if (!_this4.language) {
              setLngProps(l);
            }
            if (!_this4.translator.language)
              _this4.translator.changeLanguage(l);
            if (_this4.services.languageDetector)
              _this4.services.languageDetector.cacheUserLanguage(l);
          }
          _this4.loadResources(l, function(err) {
            done(err, l);
          });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
          setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          this.services.languageDetector.detect(setLng);
        } else {
          setLng(lng);
        }
        return deferred;
      }
    }, {
      key: "getFixedT",
      value: function getFixedT(lng, ns, keyPrefix) {
        var _this5 = this;
        var fixedT = function fixedT(key, opts) {
          var options;
          if (_typeof__default["default"](opts) !== "object") {
            for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2;_key3 < _len3; _key3++) {
              rest[_key3 - 2] = arguments[_key3];
            }
            options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
          } else {
            options = _objectSpread$6({}, opts);
          }
          options.lng = options.lng || fixedT.lng;
          options.lngs = options.lngs || fixedT.lngs;
          options.ns = options.ns || fixedT.ns;
          options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
          var keySeparator = _this5.options.keySeparator || ".";
          var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
          return _this5.t(resultKey, options);
        };
        if (typeof lng === "string") {
          fixedT.lng = lng;
        } else {
          fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
      }
    }, {
      key: "t",
      value: function t() {
        var _this$translator;
        return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
      }
    }, {
      key: "exists",
      value: function exists() {
        var _this$translator2;
        return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
      }
    }, {
      key: "hasLoadedNamespace",
      value: function hasLoadedNamespace(ns) {
        var _this6 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.isInitialized) {
          this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
          return false;
        }
        var lng = this.resolvedLanguage || this.languages[0];
        var fallbackLng = this.options ? this.options.fallbackLng : false;
        var lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === "cimode")
          return true;
        var loadNotPending = function loadNotPending(l, n) {
          var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
          return loadState === -1 || loadState === 2;
        };
        if (options.precheck) {
          var preResult = options.precheck(this, loadNotPending);
          if (preResult !== undefined)
            return preResult;
        }
        if (this.hasResourceBundle(lng, ns))
          return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
          return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
          return true;
        return false;
      }
    }, {
      key: "loadNamespaces",
      value: function loadNamespaces(ns, callback) {
        var _this7 = this;
        var deferred = defer();
        if (!this.options.ns) {
          callback && callback();
          return Promise.resolve();
        }
        if (typeof ns === "string")
          ns = [ns];
        ns.forEach(function(n) {
          if (_this7.options.ns.indexOf(n) < 0)
            _this7.options.ns.push(n);
        });
        this.loadResources(function(err) {
          deferred.resolve();
          if (callback)
            callback(err);
        });
        return deferred;
      }
    }, {
      key: "loadLanguages",
      value: function loadLanguages(lngs, callback) {
        var deferred = defer();
        if (typeof lngs === "string")
          lngs = [lngs];
        var preloaded = this.options.preload || [];
        var newLngs = lngs.filter(function(lng) {
          return preloaded.indexOf(lng) < 0;
        });
        if (!newLngs.length) {
          if (callback)
            callback();
          return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources(function(err) {
          deferred.resolve();
          if (callback)
            callback(err);
        });
        return deferred;
      }
    }, {
      key: "dir",
      value: function dir(lng) {
        if (!lng)
          lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
        if (!lng)
          return "rtl";
        var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
        return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
      }
    }, {
      key: "cloneInstance",
      value: function cloneInstance() {
        var _this8 = this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
          isClone: true
        });
        var clone = new I18n2(mergedOptions);
        if (options.debug !== undefined || options.prefix !== undefined) {
          clone.logger = clone.logger.clone(options);
        }
        var membersToCopy = ["store", "services", "language"];
        membersToCopy.forEach(function(m) {
          clone[m] = _this8[m];
        });
        clone.services = _objectSpread$6({}, this.services);
        clone.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        clone.translator = new Translator(clone.services, clone.options);
        clone.translator.on("*", function(event) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;_key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          clone.emit.apply(clone, [event].concat(args));
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = clone.options;
        clone.translator.backendConnector.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    }]);
    return I18n2;
  }(EventEmitter);
  _defineProperty__default["default"](I18n, "createInstance", function() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  });
  var instance = I18n.createInstance();
  instance.createInstance = I18n.createInstance;
  module.exports = instance;
});

// ../brackets-viewer.js/node_modules/i18next-browser-languagedetector/dist/cjs/i18nextBrowserLanguageDetector.js
var require_i18nextBrowserLanguageDetector = __commonJS((exports, module) => {
  var _classCallCheck = require_classCallCheck();
  var _createClass = require_createClass();
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var _classCallCheck__default = /* @__PURE__ */ _interopDefaultLegacy(_classCallCheck);
  var _createClass__default = /* @__PURE__ */ _interopDefaultLegacy(_createClass);
  var arr = [];
  var each = arr.forEach;
  var slice = arr.slice;
  function defaults(obj) {
    each.call(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === undefined)
            obj[prop] = source[prop];
        }
      }
    });
    return obj;
  }
  var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  var serializeCookie = function serializeCookie(name, val, options) {
    var opt = options || {};
    opt.path = opt.path || "/";
    var value = encodeURIComponent(val);
    var str = "".concat(name, "=").concat(value);
    if (opt.maxAge > 0) {
      var maxAge = opt.maxAge - 0;
      if (Number.isNaN(maxAge))
        throw new Error("maxAge should be a Number");
      str += "; Max-Age=".concat(Math.floor(maxAge));
    }
    if (opt.domain) {
      if (!fieldContentRegExp.test(opt.domain)) {
        throw new TypeError("option domain is invalid");
      }
      str += "; Domain=".concat(opt.domain);
    }
    if (opt.path) {
      if (!fieldContentRegExp.test(opt.path)) {
        throw new TypeError("option path is invalid");
      }
      str += "; Path=".concat(opt.path);
    }
    if (opt.expires) {
      if (typeof opt.expires.toUTCString !== "function") {
        throw new TypeError("option expires is invalid");
      }
      str += "; Expires=".concat(opt.expires.toUTCString());
    }
    if (opt.httpOnly)
      str += "; HttpOnly";
    if (opt.secure)
      str += "; Secure";
    if (opt.sameSite) {
      var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
      switch (sameSite) {
        case true:
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return str;
  };
  var cookie = {
    create: function create(name, value, minutes, domain) {
      var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        path: "/",
        sameSite: "strict"
      };
      if (minutes) {
        cookieOptions.expires = new Date;
        cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
      }
      if (domain)
        cookieOptions.domain = domain;
      document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
    },
    read: function read(name) {
      var nameEQ = "".concat(name, "=");
      var ca = document.cookie.split(";");
      for (var i = 0;i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    remove: function remove(name) {
      this.create(name, "", -1);
    }
  };
  var cookie$1 = {
    name: "cookie",
    lookup: function lookup(options) {
      var found;
      if (options.lookupCookie && typeof document !== "undefined") {
        var c = cookie.read(options.lookupCookie);
        if (c)
          found = c;
      }
      return found;
    },
    cacheUserLanguage: function cacheUserLanguage(lng, options) {
      if (options.lookupCookie && typeof document !== "undefined") {
        cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
      }
    }
  };
  var querystring = {
    name: "querystring",
    lookup: function lookup(options) {
      var found;
      if (typeof window !== "undefined") {
        var search = window.location.search;
        if (!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1) {
          search = window.location.hash.substring(window.location.hash.indexOf("?"));
        }
        var query = search.substring(1);
        var params = query.split("&");
        for (var i = 0;i < params.length; i++) {
          var pos = params[i].indexOf("=");
          if (pos > 0) {
            var key = params[i].substring(0, pos);
            if (key === options.lookupQuerystring) {
              found = params[i].substring(pos + 1);
            }
          }
        }
      }
      return found;
    }
  };
  var hasLocalStorageSupport = null;
  var localStorageAvailable = function localStorageAvailable() {
    if (hasLocalStorageSupport !== null)
      return hasLocalStorageSupport;
    try {
      hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
      var testKey = "i18next.translate.boo";
      window.localStorage.setItem(testKey, "foo");
      window.localStorage.removeItem(testKey);
    } catch (e) {
      hasLocalStorageSupport = false;
    }
    return hasLocalStorageSupport;
  };
  var localStorage = {
    name: "localStorage",
    lookup: function lookup(options) {
      var found;
      if (options.lookupLocalStorage && localStorageAvailable()) {
        var lng = window.localStorage.getItem(options.lookupLocalStorage);
        if (lng)
          found = lng;
      }
      return found;
    },
    cacheUserLanguage: function cacheUserLanguage(lng, options) {
      if (options.lookupLocalStorage && localStorageAvailable()) {
        window.localStorage.setItem(options.lookupLocalStorage, lng);
      }
    }
  };
  var hasSessionStorageSupport = null;
  var sessionStorageAvailable = function sessionStorageAvailable() {
    if (hasSessionStorageSupport !== null)
      return hasSessionStorageSupport;
    try {
      hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
      var testKey = "i18next.translate.boo";
      window.sessionStorage.setItem(testKey, "foo");
      window.sessionStorage.removeItem(testKey);
    } catch (e) {
      hasSessionStorageSupport = false;
    }
    return hasSessionStorageSupport;
  };
  var sessionStorage = {
    name: "sessionStorage",
    lookup: function lookup(options) {
      var found;
      if (options.lookupSessionStorage && sessionStorageAvailable()) {
        var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
        if (lng)
          found = lng;
      }
      return found;
    },
    cacheUserLanguage: function cacheUserLanguage(lng, options) {
      if (options.lookupSessionStorage && sessionStorageAvailable()) {
        window.sessionStorage.setItem(options.lookupSessionStorage, lng);
      }
    }
  };
  var navigator$1 = {
    name: "navigator",
    lookup: function lookup(options) {
      var found = [];
      if (typeof navigator !== "undefined") {
        if (navigator.languages) {
          for (var i = 0;i < navigator.languages.length; i++) {
            found.push(navigator.languages[i]);
          }
        }
        if (navigator.userLanguage) {
          found.push(navigator.userLanguage);
        }
        if (navigator.language) {
          found.push(navigator.language);
        }
      }
      return found.length > 0 ? found : undefined;
    }
  };
  var htmlTag = {
    name: "htmlTag",
    lookup: function lookup(options) {
      var found;
      var htmlTag2 = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
      if (htmlTag2 && typeof htmlTag2.getAttribute === "function") {
        found = htmlTag2.getAttribute("lang");
      }
      return found;
    }
  };
  var path = {
    name: "path",
    lookup: function lookup(options) {
      var found;
      if (typeof window !== "undefined") {
        var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (language instanceof Array) {
          if (typeof options.lookupFromPathIndex === "number") {
            if (typeof language[options.lookupFromPathIndex] !== "string") {
              return;
            }
            found = language[options.lookupFromPathIndex].replace("/", "");
          } else {
            found = language[0].replace("/", "");
          }
        }
      }
      return found;
    }
  };
  var subdomain = {
    name: "subdomain",
    lookup: function lookup(options) {
      var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === "number" ? options.lookupFromSubdomainIndex + 1 : 1;
      var language = typeof window !== "undefined" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
      if (!language)
        return;
      return language[lookupFromSubdomainIndex];
    }
  };
  function getDefaults() {
    return {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"]
    };
  }
  var Browser = /* @__PURE__ */ function() {
    function Browser2(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck__default["default"](this, Browser2);
      this.type = "languageDetector";
      this.detectors = {};
      this.init(services, options);
    }
    _createClass__default["default"](Browser2, [{
      key: "init",
      value: function init(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());
        if (this.options.lookupFromUrlIndex)
          this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
        this.i18nOptions = i18nOptions;
        this.addDetector(cookie$1);
        this.addDetector(querystring);
        this.addDetector(localStorage);
        this.addDetector(sessionStorage);
        this.addDetector(navigator$1);
        this.addDetector(htmlTag);
        this.addDetector(path);
        this.addDetector(subdomain);
      }
    }, {
      key: "addDetector",
      value: function addDetector(detector) {
        this.detectors[detector.name] = detector;
      }
    }, {
      key: "detect",
      value: function detect(detectionOrder) {
        var _this = this;
        if (!detectionOrder)
          detectionOrder = this.options.order;
        var detected = [];
        detectionOrder.forEach(function(detectorName) {
          if (_this.detectors[detectorName]) {
            var lookup = _this.detectors[detectorName].lookup(_this.options);
            if (lookup && typeof lookup === "string")
              lookup = [lookup];
            if (lookup)
              detected = detected.concat(lookup);
          }
        });
        if (this.services.languageUtils.getBestMatchFromCodes)
          return detected;
        return detected.length > 0 ? detected[0] : null;
      }
    }, {
      key: "cacheUserLanguage",
      value: function cacheUserLanguage(lng, caches) {
        var _this2 = this;
        if (!caches)
          caches = this.options.caches;
        if (!caches)
          return;
        if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
          return;
        caches.forEach(function(cacheName) {
          if (_this2.detectors[cacheName])
            _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
        });
      }
    }]);
    return Browser2;
  }();
  Browser.type = "languageDetector";
  module.exports = Browser;
});

// ../brackets-viewer.js/dist/i18n/en/translation.json
var require_translation = __commonJS((exports, module) => {
  module.exports = {
    "origin-hint": {
      seed: "Seed {{position}}",
      "winner-bracket": "Loser of $t(abbreviations.winner-bracket) {{round}}.{{position}}",
      "winner-bracket-semi-final": "Loser of $t(abbreviations.winner-bracket) Semi {{position}}",
      "winner-bracket-final": "Loser of $t(abbreviations.winner-bracket) Final",
      "consolation-final": "Loser of Semi {{position}}",
      "grand-final": "Winner of $t(abbreviations.loser-bracket) Final",
      "double-elimination-consolation-final-opponent-1": "Loser of $t(abbreviations.loser-bracket) Semi 1",
      "double-elimination-consolation-final-opponent-2": "Loser of $t(abbreviations.loser-bracket) Final"
    },
    "match-label": {
      default: "Match {{matchNumber}}",
      "winner-bracket": "$t(abbreviations.winner-bracket)",
      "loser-bracket": "$t(abbreviations.loser-bracket)",
      "standard-bracket": "$t(abbreviations.match)",
      "standard-bracket-semi-final": "Semi {{matchNumber}}",
      "standard-bracket-final": "Final",
      "double-elimination": "{{matchPrefix}} {{roundNumber}}.{{matchNumber}}",
      "double-elimination-semi-final": "{{matchPrefix}} Semi {{matchNumber}}",
      "double-elimination-final": "{{matchPrefix}} Final",
      "consolation-final": "Consolation Final",
      "grand-final-single": "Grand Final",
      "grand-final": "$t(abbreviations.grand-final) Round {{roundNumber}}",
      "match-game": "Game {{gameNumber}}"
    },
    "match-status": {
      locked: "Locked",
      waiting: "Waiting",
      ready: "Ready",
      running: "Running",
      completed: "Completed",
      archived: "Archived"
    },
    abbreviations: {
      win: "W",
      loss: "L",
      forfeit: "F",
      position: "P",
      seed: "#",
      "winner-bracket": "WB",
      "loser-bracket": "LB",
      match: "M",
      "grand-final": "GF"
    },
    ranking: {
      rank: {
        text: "#",
        tooltip: "Rank"
      },
      id: {
        text: "Name",
        tooltip: "Name"
      },
      played: {
        text: "P",
        tooltip: "Played"
      },
      wins: {
        text: "$t(abbreviations.win)",
        tooltip: "Wins"
      },
      draws: {
        text: "D",
        tooltip: "Draws"
      },
      losses: {
        text: "$t(abbreviations.loss)",
        tooltip: "Losses"
      },
      forfeits: {
        text: "$t(abbreviations.forfeit)",
        tooltip: "Forfeits"
      },
      scoreFor: {
        text: "SF",
        tooltip: "Score For"
      },
      scoreAgainst: {
        text: "SA",
        tooltip: "Score Against"
      },
      scoreDifference: {
        text: "+/-",
        tooltip: "Score Difference"
      },
      points: {
        text: "Pts",
        tooltip: "Points"
      }
    },
    common: {
      bye: "BYE",
      "best-of-x": "Bo{{x}}",
      consolation: "Consolation",
      "group-name": "Group {{groupNumber}}",
      "group-name-winner-bracket": "Winner Bracket",
      "group-name-loser-bracket": "Loser Bracket",
      "round-name": "Round {{roundNumber}}",
      "round-name-final": "Final Round",
      "round-name-winner-bracket": "$t(abbreviations.winner-bracket) Round {{roundNumber}}",
      "round-name-winner-bracket-final": "$t(abbreviations.winner-bracket) Final Round",
      "round-name-loser-bracket": "$t(abbreviations.loser-bracket) Round {{roundNumber}}",
      "round-name-loser-bracket-final": "$t(abbreviations.loser-bracket) Final Round"
    },
    "form-creator": {
      "stage-name-label": "Name your stage",
      "stage-name-placeholder": "Give a name for your stage",
      "stage-selector-label": "Select a stage",
      "team-label": "Name your teams",
      "team-label-placeholder": "Comma separated List of Team Names (must be 2^n)",
      "team-count": "Or a team count",
      "team-count-placeholder": "How many teams do you want?",
      "group-label": "How many groups?",
      "group-placeholder": "How many groups do you want?",
      "seed-order-label": "How would you like to order your seeds?",
      "double-elimination-seed-order-placeholder": "Seed order for double elimination comma separated",
      "round-robin-mode-label": "Which round robin mode do you like?",
      "consolation-final-label": "Consolation Final",
      "skip-first-round-label": "Skip first round",
      "grand-final-type-label": "Grand final type",
      submit: "Create"
    }
  };
});

// ../brackets-viewer.js/dist/i18n/fr/translation.json
var require_translation2 = __commonJS((exports, module) => {
  module.exports = {
    "origin-hint": {
      seed: "Seed {{position}}",
      "winner-bracket": "Perdant $t(abbreviations.winner-bracket) {{round}}.{{position}}",
      "winner-bracket-semi-final": "Perdant $t(abbreviations.winner-bracket) Semi {{position}}",
      "winner-bracket-final": "Perdant Finale $t(abbreviations.winner-bracket)",
      "consolation-final": "Perdant Semi {{position}}",
      "grand-final": "Gagnant Finale $t(abbreviations.loser-bracket)",
      "double-elimination-consolation-final-opponent-1": "Perdant $t(abbreviations.loser-bracket) Semi 1",
      "double-elimination-consolation-final-opponent-2": "Perdant $t(abbreviations.loser-bracket) Final"
    },
    "match-label": {
      default: "Match {{matchNumber}}",
      "winner-bracket": "$t(abbreviations.winner-bracket)",
      "loser-bracket": "$t(abbreviations.loser-bracket)",
      "standard-bracket": "$t(abbreviations.match)",
      "standard-bracket-semi-final": "Semi {{matchNumber}}",
      "standard-bracket-final": "Finale",
      "double-elimination": "{{matchPrefix}} {{roundNumber}}.{{matchNumber}}",
      "double-elimination-semi-final": "{{matchPrefix}} Semi {{matchNumber}}",
      "double-elimination-final": "Finale {{matchPrefix}}",
      "consolation-final": "Petite finale",
      "grand-final-single": "Grande finale",
      "grand-final": "$t(abbreviations.grand-final) Round {{roundNumber}}",
      "match-game": "Game {{gameNumber}}"
    },
    "match-status": {
      locked: "Verrouillé",
      waiting: "En attente",
      ready: "Prêt",
      running: "En cours",
      completed: "Terminé",
      archived: "Archivé"
    },
    abbreviations: {
      win: "V",
      loss: "D",
      forfeit: "F",
      position: "P",
      seed: "#",
      "winner-bracket": "WB",
      "loser-bracket": "LB",
      match: "M",
      "grand-final": "GF"
    },
    ranking: {
      rank: {
        text: "#",
        tooltip: "Rang"
      },
      id: {
        text: "Name",
        tooltip: "Nom"
      },
      played: {
        text: "J",
        tooltip: "Joué"
      },
      wins: {
        text: "$t(abbreviations.win)",
        tooltip: "Victoires"
      },
      draws: {
        text: "N",
        tooltip: "Match nul"
      },
      losses: {
        text: "$t(abbreviations.loss)",
        tooltip: "Défaites"
      },
      forfeits: {
        text: "$t(abbreviations.forfeit)",
        tooltip: "Forfaits"
      },
      scoreFor: {
        text: "SF",
        tooltip: "Score pour"
      },
      scoreAgainst: {
        text: "SA",
        tooltip: "Score contre"
      },
      scoreDifference: {
        text: "+/-",
        tooltip: "Différence de score"
      },
      points: {
        text: "Pts",
        tooltip: "Points"
      }
    },
    common: {
      bye: "BYE",
      "best-of-x": "Bo{{x}}",
      consolation: "Consolation",
      "group-name": "Groupe {{groupNumber}}",
      "group-name-winner-bracket": "Winner Bracket",
      "group-name-loser-bracket": "Loser Bracket",
      "round-name": "Round {{roundNumber}}",
      "round-name-final": "Round final",
      "round-name-winner-bracket": "$t(abbreviations.winner-bracket) Round {{roundNumber}}",
      "round-name-winner-bracket-final": "$t(abbreviations.winner-bracket) Round final",
      "round-name-loser-bracket": "$t(abbreviations.loser-bracket) Round {{roundNumber}}",
      "round-name-loser-bracket-final": "$t(abbreviations.loser-bracket) Round final"
    },
    "form-creator": {
      "stage-name-label": "Name your stage",
      "stage-name-placeholder": "Give a name for your stage",
      "stage-selector-label": "Select a stage",
      "team-label": "Name your teams",
      "team-placeholder": "Comma separated List of Team Names (must be 2^n)",
      "team-count": "Or a team count",
      "team-count-placeholder": "How many teams do you want?",
      "group-label": "How many groups?",
      "group-placeholder": "How many groups do you want?",
      "seed-order-label": "How would you like to order your seeds?",
      "double-elimination-seed-order-placeholder": "Seed order for double elimination comma separated",
      "round-robin-mode-label": "Which round robin mode do you like?",
      "consolation-final-label": "Consolation Final",
      "skip-first-round-label": "Skip first round",
      "grand-final-type-label": "Grand final type",
      submit: "Create"
    }
  };
});

// ../brackets-viewer.js/dist/lang.js
var require_lang = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getLoserBracketRoundName = exports.getWinnerBracketRoundName = exports.getRoundName = exports.getBracketName = exports.getGroupName = exports.getMatchStatus = exports.getFinalMatchLabel = exports.getMatchLabel = exports.getFinalOriginHint = exports.getOriginHint = exports.toI18nKey = exports.t = exports.addLocale = exports.locales = undefined;
  var i18next_1 = __importDefault(require_i18next());
  var i18next_browser_languagedetector_1 = __importDefault(require_i18nextBrowserLanguageDetector());
  var brackets_model_1 = require_dist3();
  var helpers_1 = require_helpers2();
  var translation_json_1 = __importDefault(require_translation());
  var translation_json_2 = __importDefault(require_translation2());
  exports.locales = {
    en: translation_json_1.default,
    fr: translation_json_2.default
  };
  i18next_1.default.use(i18next_browser_languagedetector_1.default).init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: exports.locales.en
      },
      fr: {
        translation: exports.locales.fr
      }
    }
  });
  async function addLocale(name, locale) {
    i18next_1.default.addResourceBundle(name, "translation", locale, true, true);
    await i18next_1.default.changeLanguage();
  }
  exports.addLocale = addLocale;
  function t(key, options) {
    return i18next_1.default.t(key, options);
  }
  exports.t = t;
  function toI18nKey(key) {
    return key.replace("_", "-");
  }
  exports.toI18nKey = toI18nKey;
  function getOriginHint(roundNumber, roundCount, skipFirstRound, matchLocation) {
    if (roundNumber === 1) {
      if (matchLocation === "single_bracket")
        return (position) => t("origin-hint.seed", { position });
      if (matchLocation === "winner_bracket")
        return (position) => t("origin-hint.seed", { position });
      if (matchLocation === "loser_bracket" && skipFirstRound)
        return (position) => t("origin-hint.seed", { position });
    }
    if ((0, helpers_1.isMajorRound)(roundNumber) && matchLocation === "loser_bracket") {
      if (roundNumber === roundCount - 2)
        return (position) => t("origin-hint.winner-bracket-semi-final", { position });
      if (roundNumber === roundCount)
        return () => t("origin-hint.winner-bracket-final");
      const roundNumberWB = Math.ceil((roundNumber + 1) / 2);
      if (skipFirstRound)
        return (position) => t("origin-hint.winner-bracket", { round: roundNumberWB - 1, position });
      return (position) => t("origin-hint.winner-bracket", { round: roundNumberWB, position });
    }
    return;
  }
  exports.getOriginHint = getOriginHint;
  function getFinalOriginHint(stageType, finalType, roundNumber) {
    if (stageType === "single_elimination")
      return (position) => t("origin-hint.consolation-final", { position });
    if (finalType === "grand_final") {
      return roundNumber === 1 ? () => t("origin-hint.grand-final") : undefined;
    }
    return (position) => position === 1 ? t("origin-hint.double-elimination-consolation-final-opponent-1") : t("origin-hint.double-elimination-consolation-final-opponent-2");
  }
  exports.getFinalOriginHint = getFinalOriginHint;
  function getMatchLabel(matchNumber, roundNumber, roundCount, matchLocation) {
    if (roundNumber === undefined || roundCount === undefined || matchLocation === undefined)
      return t("match-label.default", { matchNumber });
    const matchPrefix = matchLocation === "winner_bracket" ? t("match-label.winner-bracket") : matchLocation === "loser_bracket" ? t("match-label.loser-bracket") : t("match-label.standard-bracket");
    const inSemiFinalRound = roundNumber === roundCount - 1;
    const inFinalRound = roundNumber === roundCount;
    if (matchLocation === "single_bracket") {
      if (inSemiFinalRound)
        return t("match-label.standard-bracket-semi-final", { matchNumber });
      if (inFinalRound)
        return t("match-label.standard-bracket-final");
    }
    if (inSemiFinalRound)
      return t("match-label.double-elimination-semi-final", { matchPrefix, matchNumber });
    if (inFinalRound)
      return t("match-label.double-elimination-final", { matchPrefix });
    return t("match-label.double-elimination", { matchPrefix, roundNumber, matchNumber });
  }
  exports.getMatchLabel = getMatchLabel;
  function getFinalMatchLabel(finalType, roundNumber, roundCount) {
    if (finalType === "consolation_final")
      return t("match-label.consolation-final");
    if (roundCount === 1)
      return t("match-label.grand-final-single");
    return t("match-label.grand-final", { roundNumber });
  }
  exports.getFinalMatchLabel = getFinalMatchLabel;
  function getMatchStatus(status) {
    switch (status) {
      case brackets_model_1.Status.Locked:
        return t("match-status.locked");
      case brackets_model_1.Status.Waiting:
        return t("match-status.waiting");
      case brackets_model_1.Status.Ready:
        return t("match-status.ready");
      case brackets_model_1.Status.Running:
        return t("match-status.running");
      case brackets_model_1.Status.Completed:
        return t("match-status.completed");
      case brackets_model_1.Status.Archived:
        return t("match-status.archived");
      default:
        return "Unknown status";
    }
  }
  exports.getMatchStatus = getMatchStatus;
  function getGroupName(groupNumber) {
    return t("common.group-name", { groupNumber });
  }
  exports.getGroupName = getGroupName;
  function getBracketName(stage, type) {
    switch (type) {
      case "winner_bracket":
      case "loser_bracket":
        return t(`common.group-name-${toI18nKey(type)}`, { stage });
      default:
        return;
    }
  }
  exports.getBracketName = getBracketName;
  function getRoundName({ roundNumber, roundCount }, t2) {
    return roundNumber === roundCount ? t2("common.round-name-final") : t2("common.round-name", { roundNumber });
  }
  exports.getRoundName = getRoundName;
  function getWinnerBracketRoundName({ roundNumber, roundCount }, t2) {
    return roundNumber === roundCount ? t2("common.round-name-winner-bracket-final") : t2("common.round-name-winner-bracket", { roundNumber });
  }
  exports.getWinnerBracketRoundName = getWinnerBracketRoundName;
  function getLoserBracketRoundName({ roundNumber, roundCount }, t2) {
    return roundNumber === roundCount ? t2("common.round-name-loser-bracket-final") : t2("common.round-name-loser-bracket", { roundNumber });
  }
  exports.getLoserBracketRoundName = getLoserBracketRoundName;
});

// ../brackets-viewer.js/dist/helpers.js
var require_helpers2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isMatchGame = exports.isMatch = exports.getRanking = exports.rankingHeader = exports.isMajorRound = exports.getOriginAbbreviation = exports.completeWithBlankMatches = exports.findRoot = exports.sortBy = exports.splitByWithLeftovers = exports.splitBy = undefined;
  var lang_1 = require_lang();
  function splitBy(objects, key) {
    const map = {};
    for (const obj of objects) {
      const commonValue = obj[key];
      if (!map[commonValue])
        map[commonValue] = [];
      map[commonValue].push(obj);
    }
    return Object.values(map);
  }
  exports.splitBy = splitBy;
  function splitByWithLeftovers(objects, key) {
    var _a;
    const map = {};
    for (const obj of objects) {
      const commonValue = (_a = obj[key]) !== null && _a !== undefined ? _a : "-1";
      if (!map[commonValue])
        map[commonValue] = [];
      map[commonValue].push(obj);
    }
    const withoutLeftovers = Object.entries(map).filter(([key2]) => key2 !== "-1").map(([_, value]) => value);
    const result = [...withoutLeftovers];
    result[-1] = map[-1];
    return result;
  }
  exports.splitByWithLeftovers = splitByWithLeftovers;
  function sortBy(array, key) {
    return [...array].sort((a, b2) => a[key] - b2[key]);
  }
  exports.sortBy = sortBy;
  function findRoot(selector) {
    const queryResult = document.querySelectorAll(selector || ".brackets-viewer");
    if (queryResult.length === 0)
      throw Error("Root not found. You must have at least one root element.");
    if (queryResult.length > 1)
      throw Error("Multiple possible roots were found. Please use `config.selector` to choose a specific root.");
    const root = queryResult[0];
    if (!root.classList.contains("brackets-viewer"))
      throw Error("The selected root must have a `.brackets-viewer` class.");
    return root;
  }
  exports.findRoot = findRoot;
  function completeWithBlankMatches(bracketType, matches, nextMatches) {
    if (!nextMatches)
      return { matches, fromToornament: false };
    let sources = [];
    if (bracketType === "single_bracket" || bracketType === "winner_bracket")
      sources = nextMatches.map((match) => {
        var _a, _b;
        return [((_a = match.opponent1) === null || _a === undefined ? undefined : _a.position) || null, ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.position) || null];
      }).flat();
    if (bracketType === "loser_bracket")
      sources = nextMatches.map((match) => {
        var _a;
        return ((_a = match.opponent2) === null || _a === undefined ? undefined : _a.position) || null;
      });
    if (sources.filter((source) => source !== null).length === 0)
      return { matches, fromToornament: false };
    return {
      matches: sources.map((source) => source && matches.find((match) => match.number === source) || null),
      fromToornament: true
    };
  }
  exports.completeWithBlankMatches = completeWithBlankMatches;
  function getOriginAbbreviation(matchLocation, skipFirstRound, roundNumber, side) {
    roundNumber = roundNumber || -1;
    if (skipFirstRound && matchLocation === "loser_bracket" && roundNumber === 1)
      return (0, lang_1.t)("abbreviations.seed");
    if (matchLocation === "single_bracket" || matchLocation === "winner_bracket" && roundNumber === 1)
      return (0, lang_1.t)("abbreviations.seed");
    if (matchLocation === "loser_bracket" && roundNumber % 2 === 0 && side === "opponent1")
      return (0, lang_1.t)("abbreviations.position");
    return null;
  }
  exports.getOriginAbbreviation = getOriginAbbreviation;
  function isMajorRound(roundNumber) {
    return roundNumber === 1 || roundNumber % 2 === 0;
  }
  exports.isMajorRound = isMajorRound;
  function rankingHeader(itemName) {
    return (0, lang_1.t)(`ranking.${itemName}`, { returnObjects: true });
  }
  exports.rankingHeader = rankingHeader;
  function getRanking(matches, formula) {
    formula = formula || ((item) => 3 * item.wins + 1 * item.draws + 0 * item.losses);
    const rankingMap = {};
    for (const match of matches) {
      processParticipant(rankingMap, formula, match.opponent1, match.opponent2);
      processParticipant(rankingMap, formula, match.opponent2, match.opponent1);
    }
    return createRanking(rankingMap);
  }
  exports.getRanking = getRanking;
  function processParticipant(rankingMap, formula, current, other) {
    if (!current || current.id === null)
      return;
    const state = rankingMap[current.id] || {
      rank: 0,
      id: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      forfeits: 0,
      scoreFor: 0,
      scoreAgainst: 0,
      scoreDifference: 0,
      points: 0
    };
    state.id = current.id;
    if (current.forfeit || current.result)
      state.played++;
    if (current.result === "win")
      state.wins++;
    if (current.result === "draw")
      state.draws++;
    if (current.result === "loss")
      state.losses++;
    if (current.forfeit)
      state.forfeits++;
    state.scoreFor += current.score || 0;
    state.scoreAgainst += other && other.score || 0;
    state.scoreDifference = state.scoreFor - state.scoreAgainst;
    state.points = formula(state);
    rankingMap[current.id] = state;
  }
  function createRanking(rankingMap) {
    const ranking = Object.values(rankingMap).sort((a, b2) => a.points !== b2.points ? b2.points - a.points : b2.played - a.played);
    const rank = {
      value: 0,
      lastPoints: -1
    };
    for (const item of ranking) {
      item.rank = rank.lastPoints !== item.points ? ++rank.value : rank.value;
      rank.lastPoints = item.points;
    }
    return ranking;
  }
  function isMatch(input) {
    return "child_count" in input;
  }
  exports.isMatch = isMatch;
  function isMatchGame(input) {
    return !isMatch(input);
  }
  exports.isMatchGame = isMatchGame;
});

// ../brackets-viewer.js/dist/dom.js
var require_dom = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.setupConnection = exports.getFinalConnection = exports.getBracketConnection = exports.addParticipantImage = exports.addParticipantOrigin = exports.setupLoss = exports.setupWin = exports.setupBye = exports.setupHint = exports.createRankingHeaders = exports.createCell = exports.createRow = exports.createTable = exports.createResultContainer = exports.createNameContainer = exports.createPlayersContainer = exports.createParticipantContainer = exports.createMainFeedContainer = exports.createParticipantContainerContainer = exports.createOpponentsContainer = exports.createChildCountLabel = exports.createMatchLabel = exports.createMatchContainer = exports.createMatchTimeContainer = exports.createRoundContainer = exports.createRoundsContainer = exports.createGroupContainer = exports.createBracketContainer = exports.createEliminationContainer = exports.createRoundRobinContainer = exports.createPopoverTitle = exports.createTitle = undefined;
  var helpers_1 = require_helpers2();
  var lang_1 = require_lang();
  function createTitle(title) {
    const h1 = document.createElement("h1");
    h1.setAttribute("id", title.replace(/ /g, "_"));
    h1.innerText = title;
    return h1;
  }
  exports.createTitle = createTitle;
  function createPopoverTitle(title) {
    const h4 = document.createElement("h4");
    h4.innerText = title;
    return h4;
  }
  exports.createPopoverTitle = createPopoverTitle;
  function createRoundRobinContainer(stageId) {
    const stage = document.createElement("div");
    stage.classList.add("round-robin");
    stage.setAttribute("data-stage-id", stageId.toString());
    return stage;
  }
  exports.createRoundRobinContainer = createRoundRobinContainer;
  function createEliminationContainer(stageId) {
    const stage = document.createElement("div");
    stage.classList.add("elimination");
    stage.setAttribute("data-stage-id", stageId.toString());
    return stage;
  }
  exports.createEliminationContainer = createEliminationContainer;
  function createBracketContainer(groupId, title) {
    const bracket = document.createElement("section");
    bracket.classList.add("bracket");
    if (groupId)
      bracket.setAttribute("data-group-id", groupId.toString());
    if (title) {
      const h2 = document.createElement("h2");
      h2.innerText = title;
      bracket.append(h2);
    }
    return bracket;
  }
  exports.createBracketContainer = createBracketContainer;
  function createGroupContainer(groupId, title) {
    const h2 = document.createElement("h2");
    h2.innerText = title;
    const group = document.createElement("section");
    group.classList.add("group");
    group.setAttribute("data-group-id", groupId.toString());
    group.append(h2);
    return group;
  }
  exports.createGroupContainer = createGroupContainer;
  function createRoundsContainer() {
    const round = document.createElement("div");
    round.classList.add("rounds");
    return round;
  }
  exports.createRoundsContainer = createRoundsContainer;
  function createRoundContainer(roundId, title) {
    const h3 = document.createElement("h3");
    h3.innerText = title;
    const round = document.createElement("article");
    round.classList.add("round");
    round.setAttribute("data-round-id", roundId.toString());
    round.append(h3);
    return round;
  }
  exports.createRoundContainer = createRoundContainer;
  function createMatchTimeContainer(match) {
    const div = document.createElement("span");
    div.classList.add("time");
    if (match) {
      if ((0, helpers_1.isMatchGame)(match))
        div.setAttribute("data-match-game-id", match.id.toString());
      else
        div.setAttribute("data-match-id", match.id.toString());
    }
    if (match === null || match === undefined ? undefined : match.time) {
      div.innerHTML = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", hour: "numeric", minute: "numeric", timeZoneName: "short" }).format(new Date(match.time));
    }
    return div;
  }
  exports.createMatchTimeContainer = createMatchTimeContainer;
  function createMatchContainer(match) {
    const div = document.createElement("div");
    div.classList.add("match");
    if (match) {
      if ((0, helpers_1.isMatchGame)(match))
        div.setAttribute("data-match-game-id", match.id.toString());
      else
        div.setAttribute("data-match-id", match.id.toString());
      div.setAttribute("data-match-status", match.status.toString());
    }
    return div;
  }
  exports.createMatchContainer = createMatchContainer;
  function createMatchLabel(label, status, onClick) {
    const span = document.createElement("span");
    span.innerText = label || "";
    span.title = status;
    onClick && span.addEventListener("click", onClick);
    return span;
  }
  exports.createMatchLabel = createMatchLabel;
  function createChildCountLabel(label, onClick) {
    const span = document.createElement("span");
    span.innerText = label;
    onClick && span.addEventListener("click", onClick);
    return span;
  }
  exports.createChildCountLabel = createChildCountLabel;
  function createOpponentsContainer(onClick) {
    const opponents = document.createElement("div");
    opponents.classList.add("opponents");
    onClick && opponents.addEventListener("click", onClick);
    return opponents;
  }
  exports.createOpponentsContainer = createOpponentsContainer;
  function createParticipantContainerContainer() {
    const participant = document.createElement("div");
    participant.classList.add("participant-container");
    return participant;
  }
  exports.createParticipantContainerContainer = createParticipantContainerContainer;
  function createMainFeedContainer(streamInfo) {
    const mainFeed = document.createElement("div");
    mainFeed.classList.add("main-feed");
    mainFeed.innerHTML = `${streamInfo.type.toUpperCase()}: <a href="${streamInfo.url}">HERE</a>`;
    return mainFeed;
  }
  exports.createMainFeedContainer = createMainFeedContainer;
  function createParticipantContainer(participantId) {
    const participant = document.createElement("div");
    participant.classList.add("participant");
    if (participantId !== null && participantId !== undefined)
      participant.setAttribute("data-participant-id", participantId.toString());
    return participant;
  }
  exports.createParticipantContainer = createParticipantContainer;
  function createPlayersContainer(participantId) {
    const participant = document.createElement("div");
    participant.classList.add("players");
    if (participantId !== null && participantId !== undefined)
      participant.setAttribute("data-participant-id", participantId.toString());
    return participant;
  }
  exports.createPlayersContainer = createPlayersContainer;
  function createNameContainer() {
    const name = document.createElement("div");
    name.classList.add("name");
    return name;
  }
  exports.createNameContainer = createNameContainer;
  function createResultContainer() {
    const result = document.createElement("div");
    result.classList.add("result");
    return result;
  }
  exports.createResultContainer = createResultContainer;
  function createTable() {
    return document.createElement("table");
  }
  exports.createTable = createTable;
  function createRow() {
    return document.createElement("tr");
  }
  exports.createRow = createRow;
  function createCell(data) {
    const td = document.createElement("td");
    td.innerText = String(data);
    return td;
  }
  exports.createCell = createCell;
  function createRankingHeaders(ranking) {
    const headers = document.createElement("tr");
    const firstItem = ranking[0];
    for (const key in firstItem) {
      const prop = key;
      const header = (0, helpers_1.rankingHeader)(prop);
      const th = document.createElement("th");
      th.innerText = header.text;
      th.setAttribute("title", header.tooltip);
      headers.append(th);
    }
    return headers;
  }
  exports.createRankingHeaders = createRankingHeaders;
  function setupHint(nameContainer, hint) {
    nameContainer.classList.add("hint");
    nameContainer.innerText = hint;
    nameContainer.title = hint;
  }
  exports.setupHint = setupHint;
  function setupBye(nameContainer) {
    nameContainer.innerText = (0, lang_1.t)("common.bye");
    nameContainer.classList.add("bye");
  }
  exports.setupBye = setupBye;
  function setupWin(participantContainer, resultContainer, participant) {
    if (participant.result && participant.result === "win") {
      participantContainer.classList.add("win");
      if (participant.score === undefined)
        resultContainer.innerText = (0, lang_1.t)("abbreviations.win");
    }
  }
  exports.setupWin = setupWin;
  function setupLoss(participantContainer, resultContainer, participant) {
    if (participant.result && participant.result === "loss" || participant.forfeit) {
      participantContainer.classList.add("loss");
      if (participant.forfeit)
        resultContainer.innerText = (0, lang_1.t)("abbreviations.forfeit");
      else if (participant.score === undefined)
        resultContainer.innerText = (0, lang_1.t)("abbreviations.loss");
    }
  }
  exports.setupLoss = setupLoss;
  function addParticipantOrigin(nameContainer, text, placement) {
    const span = document.createElement("span");
    if (placement === "before") {
      span.innerText = `${text} `;
      nameContainer.prepend(span);
    } else if (placement === "after") {
      span.innerText = ` (${text})`;
      nameContainer.append(span);
    }
  }
  exports.addParticipantOrigin = addParticipantOrigin;
  function addParticipantImage(nameContainer, src) {
    const img = document.createElement("img");
    img.src = src;
    nameContainer.prepend(img);
  }
  exports.addParticipantImage = addParticipantImage;
  function getBracketConnection(alwaysConnectFirstRound, roundNumber, roundCount, match, matchLocation, connectFinal) {
    var _a, _b, _c;
    const connection = {
      connectPrevious: false,
      connectNext: false
    };
    if (matchLocation === "qualified") {
      connection.connectPrevious = "straight";
      connection.connectNext = false;
      return connection;
    }
    if (matchLocation === "loser_bracket") {
      connection.connectPrevious = roundNumber > 1 && (roundNumber % 2 === 1 ? "square" : "straight");
      connection.connectNext = roundNumber < roundCount && (roundNumber % 2 === 0 ? "square" : "straight");
    } else {
      connection.connectPrevious = roundNumber > 1 && "square";
      connection.connectNext = roundNumber < roundCount ? "square" : connectFinal ? "straight" : false;
    }
    if (alwaysConnectFirstRound || roundNumber !== 2)
      return connection;
    const upperBracket = matchLocation === "single_bracket" || matchLocation === "winner_bracket";
    if (upperBracket && ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.position) === undefined && ((_b = match.opponent2) === null || _b === undefined ? undefined : _b.position) === undefined)
      connection.connectPrevious = false;
    if (matchLocation === "loser_bracket" && ((_c = match.opponent2) === null || _c === undefined ? undefined : _c.position) === undefined)
      connection.connectPrevious = false;
    return connection;
  }
  exports.getBracketConnection = getBracketConnection;
  function getFinalConnection(finalType, roundNumber, matchCount) {
    return {
      connectPrevious: finalType === "grand_final" && (roundNumber === 1 && "straight"),
      connectNext: matchCount === 2 && roundNumber === 1 && "straight"
    };
  }
  exports.getFinalConnection = getFinalConnection;
  function setupConnection(opponentsContainer, matchContainer, connection) {
    if (connection.connectPrevious)
      opponentsContainer.classList.add("connect-previous");
    if (connection.connectNext)
      matchContainer.classList.add("connect-next");
    if (connection.connectPrevious === "straight")
      opponentsContainer.classList.add("straight");
    if (connection.connectNext === "straight")
      matchContainer.classList.add("straight");
  }
  exports.setupConnection = setupConnection;
});

// ../brackets-viewer.js/dist/main.js
var require_main = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BracketsViewer = undefined;
  require_style();
  var brackets_model_1 = require_dist3();
  var helpers_1 = require_helpers2();
  var dom = __importStar(require_dom());
  var lang = __importStar(require_lang());
  var brackets_manager_1 = require_dist4();

  class BracketsViewer {
    constructor() {
      this.participantRefs = {};
      this.participants = [];
      this.participantImages = [];
      this.skipFirstRound = false;
      this.alwaysConnectFirstRound = false;
      this._onMatchClick = (match) => {
      };
      this._onMatchLabelClick = (match) => {
      };
    }
    getRoundName(info, fallbackGetter) {
      var _a, _b;
      return ((_b = (_a = this.config).customRoundName) === null || _b === undefined ? undefined : _b.call(_a, info, lang.t)) || fallbackGetter(info, lang.t);
    }
    set onMatchClicked(callback) {
      this._onMatchClick = callback;
    }
    async render(data, config2) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _j, _k;
      if (typeof data === "string")
        throw Error("Using a CSS selector as the first argument is deprecated. Please look here: https://github.com/Drarig29/brackets-viewer.js");
      const root = document.createDocumentFragment();
      this.config = {
        customRoundName: config2 === null || config2 === undefined ? undefined : config2.customRoundName,
        participantOriginPlacement: (_a = config2 === null || config2 === undefined ? undefined : config2.participantOriginPlacement) !== null && _a !== undefined ? _a : "before",
        separatedChildCountLabel: (_b = config2 === null || config2 === undefined ? undefined : config2.separatedChildCountLabel) !== null && _b !== undefined ? _b : false,
        showSlotsOrigin: (_c = config2 === null || config2 === undefined ? undefined : config2.showSlotsOrigin) !== null && _c !== undefined ? _c : true,
        showLowerBracketSlotsOrigin: (_d = config2 === null || config2 === undefined ? undefined : config2.showLowerBracketSlotsOrigin) !== null && _d !== undefined ? _d : true,
        showPopoverOnMatchLabelClick: (_e2 = config2 === null || config2 === undefined ? undefined : config2.showPopoverOnMatchLabelClick) !== null && _e2 !== undefined ? _e2 : true,
        highlightParticipantOnHover: (_f = config2 === null || config2 === undefined ? undefined : config2.highlightParticipantOnHover) !== null && _f !== undefined ? _f : true,
        showRankingTable: (_g = config2 === null || config2 === undefined ? undefined : config2.showRankingTable) !== null && _g !== undefined ? _g : true
      };
      if (config2 === null || config2 === undefined ? undefined : config2.onMatchClick)
        this._onMatchClick = config2.onMatchClick;
      if (config2 === null || config2 === undefined ? undefined : config2.onMatchLabelClick)
        this._onMatchLabelClick = config2.onMatchLabelClick;
      if (!((_h = data.stages) === null || _h === undefined ? undefined : _h.length))
        throw Error("The `data.stages` array is either empty or undefined");
      if (!((_j = data.participants) === null || _j === undefined ? undefined : _j.length))
        throw Error("The `data.participants` array is either empty or undefined");
      if (!((_k = data.matches) === null || _k === undefined ? undefined : _k.length))
        throw Error("The `data.matches` array is either empty or undefined");
      this.participants = data.participants;
      data.participants.forEach((participant) => this.participantRefs[participant.id] = []);
      this.popover = document.createElement("div");
      this.popover.setAttribute("popover", "auto");
      this.popover.addEventListener("toggle", (event) => {
        if (event.newState === "closed")
          this.clearPreviousPopoverSelections();
      });
      root.append(this.popover);
      data.stages.forEach((stage) => this.renderStage(root, {
        ...data,
        stages: [stage],
        matches: data.matches.filter((match) => match.stage_id === stage.id).map((match) => ({
          ...match,
          metadata: {
            stageType: stage.type,
            games: data.matchGames.filter((game) => game.parent_id === match.id)
          }
        }))
      }));
      const target = (0, helpers_1.findRoot)(config2 === null || config2 === undefined ? undefined : config2.selector);
      if (config2 === null || config2 === undefined ? undefined : config2.clear)
        target.innerHTML = "";
      target.append(root);
    }
    updateMatch(match) {
      var _a, _b, _c, _d, _e2, _f;
      const matchContainer = document.querySelector(`[data-match-id='${match.id}']`);
      if (!matchContainer)
        throw Error("Match not found.");
      matchContainer.setAttribute("data-match-status", match.status.toString());
      const result1 = matchContainer.querySelector(".participant:nth-of-type(1) .result");
      if (result1 && ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.score))
        result1.innerHTML = (_c = (_b = match.opponent1) === null || _b === undefined ? undefined : _b.score) === null || _c === undefined ? undefined : _c.toString();
      const result2 = matchContainer.querySelector(".participant:nth-of-type(2) .result");
      if (result2 && ((_d = match.opponent2) === null || _d === undefined ? undefined : _d.score))
        result2.innerHTML = (_f = (_e2 = match.opponent2) === null || _e2 === undefined ? undefined : _e2.score) === null || _f === undefined ? undefined : _f.toString();
    }
    setParticipantImages(images) {
      this.participantImages = images;
    }
    async addLocale(name, locale) {
      await lang.addLocale(name, locale);
    }
    renderStage(root, data) {
      var _a;
      const stage = data.stages[0];
      if (!((_a = data.matches) === null || _a === undefined ? undefined : _a.length))
        throw Error(`No matches found for stage ${stage.id}`);
      const matchesByGroup = (0, helpers_1.splitByWithLeftovers)(data.matches, "group_id");
      this.stage = stage;
      this.skipFirstRound = stage.settings.skipFirstRound || false;
      switch (stage.type) {
        case "round_robin":
          this.renderRoundRobin(root, stage, matchesByGroup);
          break;
        case "single_elimination":
        case "double_elimination":
          this.renderElimination(root, stage, matchesByGroup);
          break;
        default:
          throw Error(`Unknown bracket type: ${stage.type}`);
      }
      this.renderConsolationMatches(root, stage, matchesByGroup);
    }
    renderRoundRobin(root, stage, matchesByGroup) {
      const container = dom.createRoundRobinContainer(stage.id);
      container.append(dom.createTitle(stage.name));
      let groupNumber = 1;
      for (const groupMatches of matchesByGroup) {
        const groupId = groupMatches[0].group_id;
        const groupContainer = dom.createGroupContainer(groupId, lang.getGroupName(groupNumber++));
        const matchesByRound = (0, helpers_1.splitBy)(groupMatches, "round_id").map((matches) => (0, helpers_1.sortBy)(matches, "number"));
        let roundNumber = 1;
        for (const roundMatches of matchesByRound) {
          const roundId = roundMatches[0].round_id;
          const roundName = this.getRoundName({
            roundNumber,
            roundCount: 0,
            groupType: lang.toI18nKey("round_robin")
          }, lang.getRoundName);
          const roundContainer = dom.createRoundContainer(roundId, roundName);
          for (const match of roundMatches)
            roundContainer.append(this.createMatch(match, true));
          groupContainer.append(roundContainer);
          roundNumber++;
        }
        if (this.config.showRankingTable)
          groupContainer.append(this.createRanking(groupMatches));
        container.append(groupContainer);
      }
      root.append(container);
    }
    renderElimination(root, stage, matchesByGroup) {
      const container = dom.createEliminationContainer(stage.id);
      container.append(dom.createTitle(stage.name));
      if (stage.type === "single_elimination")
        this.renderSingleElimination(container, matchesByGroup, stage.ends_in_qual);
      else
        this.renderDoubleElimination(container, matchesByGroup, stage.ends_in_qual);
      root.append(container);
    }
    renderConsolationMatches(root, stage, matchesByGroup) {
      const consolationMatches = matchesByGroup[-1];
      if (!(consolationMatches === null || consolationMatches === undefined ? undefined : consolationMatches.length))
        return;
      const consolation = dom.createBracketContainer(undefined, lang.t("common.consolation"));
      const roundsContainer = dom.createRoundsContainer();
      let matchNumber = 0;
      for (const match of consolationMatches) {
        roundsContainer.append(this.createMatch({
          ...match,
          metadata: {
            label: lang.t("match-label.default", { matchNumber: ++matchNumber }),
            stageType: stage.type,
            games: []
          }
        }, true));
      }
      consolation.append(roundsContainer);
      root.append(consolation);
    }
    renderSingleElimination(container, matchesByGroup, endsInQual) {
      const bracketMatches = (0, helpers_1.splitBy)(matchesByGroup[0], "round_id").map((matches) => (0, helpers_1.sortBy)(matches, "number"));
      const { hasFinal, connectFinal, finalMatches } = this.getFinalInfoSingleElimination(matchesByGroup);
      this.renderBracket(container, bracketMatches, lang.getRoundName, "single_bracket", connectFinal, endsInQual);
      if (hasFinal)
        this.renderFinal(container, "consolation_final", finalMatches);
    }
    renderDoubleElimination(container, matchesByGroup, endsInQual) {
      const hasLoserBracket = matchesByGroup[1] !== undefined;
      const winnerBracketMatches = (0, helpers_1.splitBy)(matchesByGroup[0], "round_id").map((matches) => (0, helpers_1.sortBy)(matches, "number"));
      const { hasFinal, connectFinal, grandFinalMatches, consolationFinalMatches } = this.getFinalInfoDoubleElimination(matchesByGroup);
      this.renderBracket(container, winnerBracketMatches, lang.getWinnerBracketRoundName, "winner_bracket", connectFinal, endsInQual);
      if (hasLoserBracket) {
        const loserBracketMatches = (0, helpers_1.splitBy)(matchesByGroup[1], "round_id").map((matches) => (0, helpers_1.sortBy)(matches, "number"));
        this.renderBracket(container, loserBracketMatches, lang.getLoserBracketRoundName, "loser_bracket", undefined, endsInQual);
      }
      if (hasFinal) {
        this.renderFinal(container, "grand_final", grandFinalMatches);
        this.renderFinal(container, "consolation_final", consolationFinalMatches);
      }
    }
    getFinalInfoSingleElimination(matchesByGroup) {
      var _a;
      const hasFinal = matchesByGroup[1] !== undefined;
      const finalMatches = (0, helpers_1.sortBy)((_a = matchesByGroup[1]) !== null && _a !== undefined ? _a : [], "number");
      const connectFinal = false;
      return { hasFinal, connectFinal, finalMatches };
    }
    getFinalInfoDoubleElimination(matchesByGroup) {
      var _a;
      const hasFinal = matchesByGroup[2] !== undefined;
      const finalMatches = (0, helpers_1.sortBy)((_a = matchesByGroup[2]) !== null && _a !== undefined ? _a : [], "number");
      const grandFinalMatches = finalMatches.filter((match) => match.number === 1);
      const consolationFinalMatches = finalMatches.filter((match) => match.number === 2);
      const connectFinal = grandFinalMatches.length > 0;
      return { hasFinal, connectFinal, grandFinalMatches, consolationFinalMatches };
    }
    renderBracket(container, matchesByRound, getRoundName, bracketType, connectFinal, endsInQual) {
      var _a, _b;
      const groupId = matchesByRound[0][0].group_id;
      const roundCount = endsInQual ? matchesByRound.length + 1 : matchesByRound.length;
      const bracketContainer = dom.createBracketContainer(groupId, lang.getBracketName(this.stage, bracketType));
      const roundsContainer = dom.createRoundsContainer();
      const { matches: completedMatches, fromToornament } = (0, helpers_1.completeWithBlankMatches)(bracketType, matchesByRound[0], matchesByRound[1]);
      this.alwaysConnectFirstRound = !fromToornament;
      for (let roundIndex = 0;roundIndex < matchesByRound.length; roundIndex++) {
        const roundId = matchesByRound[roundIndex][0].round_id;
        const roundNumber = roundIndex + 1;
        const roundName = this.getRoundName({
          roundNumber,
          roundCount,
          fractionOfFinal: brackets_manager_1.helpers.getFractionOfFinal(roundNumber, roundCount),
          groupType: lang.toI18nKey(bracketType)
        }, getRoundName);
        const roundContainer = dom.createRoundContainer(roundId, roundName);
        const roundMatches = fromToornament && roundNumber === 1 ? completedMatches : matchesByRound[roundIndex];
        for (const match of roundMatches) {
          if (match === null) {
            continue;
          }
          const connection = dom.getBracketConnection(this.alwaysConnectFirstRound, roundNumber, roundCount, match, bracketType, connectFinal);
          if (endsInQual && roundIndex === matchesByRound.length - 1) {
            connection.connectNext = "straight";
          }
          roundContainer.append(match && this.createBracketMatch({
            ...match,
            metadata: {
              ...match.metadata,
              roundNumber,
              roundCount,
              matchLocation: bracketType,
              connection,
              connectFinal
            }
          }) || this.skipBracketMatch());
        }
        roundsContainer.append(roundContainer);
        if (endsInQual && roundIndex === matchesByRound.length - 1) {
          const qualContainer = dom.createRoundContainer(roundId, "Qualified");
          for (const match of roundMatches) {
            if (match === null) {
              continue;
            }
            let qualified = { id: null };
            if (((_a = match === null || match === undefined ? undefined : match.opponent1) === null || _a === undefined ? undefined : _a.result) === "win") {
              qualified = match.opponent1;
            } else if (((_b = match === null || match === undefined ? undefined : match.opponent2) === null || _b === undefined ? undefined : _b.result) === "win") {
              qualified = match.opponent2;
            }
            match.opponent1 = qualified;
            match.opponent2 = null;
            qualContainer.append(match && this.createQualified({
              ...match,
              metadata: {
                ...match.metadata,
                roundNumber,
                roundCount,
                matchLocation: "qualified",
                connectFinal: false
              }
            }) || this.skipBracketMatch());
          }
          roundsContainer.append(qualContainer);
        }
      }
      bracketContainer.append(roundsContainer);
      container.append(bracketContainer);
    }
    renderQualified(container, matches) {
      var _a, _b;
      if (matches.length === 0)
        return;
      const upperBracket = container.querySelector(".bracket .rounds");
      if (!upperBracket)
        throw Error("Upper bracket not found.");
      const roundId = "qual";
      const roundNumber = parseInt(matches[0].round_id);
      const roundName = "Qualified";
      const roundContainer = dom.createRoundContainer(roundId, roundName);
      for (const match of matches) {
        let qualified = { id: null };
        if (((_a = match.opponent1) === null || _a === undefined ? undefined : _a.result) === "win") {
          qualified = match.opponent1;
        } else if (((_b = match.opponent2) === null || _b === undefined ? undefined : _b.result) === "win") {
          qualified = match.opponent2;
        }
        match.opponent1 = qualified;
        match.opponent2 = null;
        roundContainer.append(match && this.createQualified({
          ...match,
          metadata: {
            ...match.metadata,
            roundNumber,
            roundCount: roundNumber,
            matchLocation: "qualified",
            connectFinal: true
          }
        }) || this.skipBracketMatch());
      }
      upperBracket.append(roundContainer);
    }
    createQualified(match) {
      const { roundNumber, roundCount } = match.metadata;
      if (roundNumber === undefined || roundCount === undefined)
        throw Error(`The match's internal data is missing roundNumber or roundCount: ${JSON.stringify(match)}`);
      const connection = {
        connectNext: false,
        connectPrevious: false
      };
      const matchLabel = "Qualified";
      match.metadata.connection = connection;
      match.metadata.label = matchLabel;
      match.metadata.originHint = undefined;
      match.child_count = 0;
      if (match.opponent1) {
        match.opponent1.score = undefined;
      }
      return this.createQBox(match, true);
    }
    createQBox(match, propagateHighlight) {
      const matchContainer = dom.createMatchContainer(match);
      const opponents = dom.createOpponentsContainer();
      const participant1 = this.createParticipant(match.opponent1, propagateHighlight, "opponent1", undefined, "qualified");
      this.renderMatchLabel(opponents, match);
      opponents.append(participant1);
      matchContainer.append(opponents);
      if ((0, helpers_1.isMatch)(match)) {
        if (!match.metadata.connection)
          return matchContainer;
        dom.setupConnection(opponents, matchContainer, match.metadata.connection);
      }
      return matchContainer;
    }
    renderFinal(container, finalType, matches) {
      if (matches.length === 0)
        return;
      const upperBracket = container.querySelector(".bracket .rounds");
      if (!upperBracket)
        throw Error("Upper bracket not found.");
      const winnerWb = matches[0].opponent1;
      const displayCount = (winnerWb === null || winnerWb === undefined ? undefined : winnerWb.id) === null || (winnerWb === null || winnerWb === undefined ? undefined : winnerWb.result) === "win" ? 1 : 2;
      const finalMatches = matches.slice(0, displayCount);
      const roundCount = finalMatches.length;
      const defaultFinalRoundNameGetter = ({ roundNumber, roundCount: roundCount2 }) => lang.getFinalMatchLabel(finalType, roundNumber, roundCount2);
      for (let roundIndex = 0;roundIndex < finalMatches.length; roundIndex++) {
        const roundNumber = roundIndex + 1;
        const roundName = this.getRoundName({
          roundNumber,
          roundCount,
          groupType: lang.toI18nKey("final_group"),
          finalType: lang.toI18nKey(finalType)
        }, defaultFinalRoundNameGetter);
        const finalMatch = {
          ...finalMatches[roundIndex],
          metadata: {
            ...finalMatches[roundIndex].metadata,
            roundNumber,
            roundCount,
            matchLocation: "final_group"
          }
        };
        const roundContainer = dom.createRoundContainer(finalMatch.round_id, roundName);
        roundContainer.append(this.createFinalMatch(finalType, finalMatch));
        upperBracket.append(roundContainer);
      }
    }
    createRanking(matches) {
      const table = dom.createTable();
      const ranking = (0, helpers_1.getRanking)(matches);
      table.append(dom.createRankingHeaders(ranking));
      for (const item of ranking)
        table.append(this.createRankingRow(item));
      return table;
    }
    createRankingRow(item) {
      const row = dom.createRow();
      const notRanked = item.played === 0;
      for (const key in item) {
        const prop = key;
        const data = item[prop];
        if (prop === "id") {
          const participant = this.participants.find((participant2) => participant2.id === data);
          if (participant !== undefined) {
            const cell = dom.createCell(participant.name);
            this.setupMouseHover(participant.id, cell, true);
            row.append(cell);
            continue;
          }
        }
        if (notRanked && (prop === "rank" || prop === "points")) {
          row.append(dom.createCell("-"));
          continue;
        }
        row.append(dom.createCell(data));
      }
      return row;
    }
    createBracketMatch(match) {
      const { roundNumber, roundCount, matchLocation, connectFinal } = match.metadata;
      if (roundNumber === undefined || roundCount === undefined || matchLocation === undefined)
        throw Error(`The match's internal data is missing roundNumber, roundCount or matchLocation: ${JSON.stringify(match)}`);
      const matchLabel = lang.getMatchLabel(match.number, roundNumber, roundCount, matchLocation);
      const originHint = lang.getOriginHint(roundNumber, roundCount, this.skipFirstRound, matchLocation);
      if (!match.metadata.connection) {
        match.metadata.connection = dom.getBracketConnection(this.alwaysConnectFirstRound, roundNumber, roundCount, match, matchLocation, connectFinal);
      }
      match.metadata.label = matchLabel;
      match.metadata.originHint = originHint;
      return this.createMatch(match, true);
    }
    createFinalMatch(finalType, match) {
      const { roundNumber, roundCount } = match.metadata;
      if (roundNumber === undefined || roundCount === undefined)
        throw Error(`The match's internal data is missing roundNumber or roundCount: ${JSON.stringify(match)}`);
      const connection = dom.getFinalConnection(finalType, roundNumber, roundCount);
      const matchLabel = lang.getFinalMatchLabel(finalType, roundNumber, roundCount);
      const originHint = lang.getFinalOriginHint(match.metadata.stageType, finalType, roundNumber);
      match.metadata.connection = connection;
      match.metadata.label = matchLabel;
      match.metadata.originHint = originHint;
      return this.createMatch(match, true);
    }
    skipBracketMatch() {
      const matchContainer = dom.createMatchContainer();
      const opponents = dom.createOpponentsContainer();
      const participant1 = this.createParticipant(null, true);
      const participant2 = this.createParticipant(null, true);
      opponents.append(participant1, participant2);
      matchContainer.append(opponents);
      matchContainer.style.visibility = "hidden";
      return matchContainer;
    }
    createMatch(match, propagateHighlight) {
      const matchContainer = dom.createMatchContainer(match);
      const opponents = (0, helpers_1.isMatch)(match) ? dom.createOpponentsContainer(() => this._onMatchClick(match)) : dom.createOpponentsContainer();
      if ((0, helpers_1.isMatch)(match) && match.status >= brackets_model_1.Status.Completed)
        match.metadata.originHint = undefined;
      if ((0, helpers_1.isMatch)(match)) {
        const { originHint, matchLocation, roundNumber } = match.metadata;
        const participant1 = this.createParticipant(match.opponent1, propagateHighlight, "opponent1", originHint, matchLocation, roundNumber);
        const participant2 = this.createParticipant(match.opponent2, propagateHighlight, "opponent2", originHint, matchLocation, roundNumber);
        this.renderMatchLabel(opponents, match);
        opponents.append(participant1, participant2);
      } else {
        const participant1 = this.createParticipant(match.opponent1, propagateHighlight, "opponent1");
        const participant2 = this.createParticipant(match.opponent2, propagateHighlight, "opponent2");
        this.renderMatchLabel(opponents, match);
        opponents.append(participant1, participant2);
      }
      if (match.stream) {
        const mainStream = dom.createMainFeedContainer(match.stream);
        console.log("GOT HERE");
        matchContainer.append(mainStream);
      }
      if (match.time) {
        const matchTime = dom.createMatchTimeContainer(match);
        opponents.append(matchTime);
      }
      matchContainer.append(opponents);
      if ((0, helpers_1.isMatch)(match)) {
        if (!match.metadata.connection)
          return matchContainer;
        dom.setupConnection(opponents, matchContainer, match.metadata.connection);
      }
      return matchContainer;
    }
    createParticipant(participant, propagateHighlight, side, originHint, matchLocation, roundNumber) {
      const containers = {
        container: dom.createParticipantContainerContainer(),
        participant: dom.createParticipantContainer(participant && participant.id),
        name: dom.createNameContainer(),
        result: dom.createResultContainer()
      };
      if (participant === null || participant === undefined)
        dom.setupBye(containers.name);
      else
        this.renderParticipant(containers, participant, side, originHint, matchLocation, roundNumber);
      containers.participant.append(containers.name, containers.result);
      if (participant && participant.id !== null)
        this.setupMouseHover(participant.id, containers.participant, propagateHighlight);
      return containers.participant;
    }
    renderParticipant(containers, participant, side, originHint, matchLocation, roundNumber) {
      const found = this.participants.find((item) => item.id === participant.id);
      if (found) {
        containers.name.innerText = found.name;
        containers.participant.setAttribute("title", found.name);
        this.renderParticipantImage(containers.name, found.id);
        this.renderParticipantOrigin(containers.name, participant, side, matchLocation, roundNumber);
      } else
        this.renderHint(containers.name, participant, originHint, matchLocation);
      containers.result.innerText = `${participant.score === undefined ? "-" : participant.score}`;
      dom.setupWin(containers.participant, containers.result, participant);
      dom.setupLoss(containers.participant, containers.result, participant);
      if (matchLocation === "qualified") {
        containers.participant.classList.add("qualified");
      }
    }
    renderParticipantImage(nameContainer, participantId) {
      const found = this.participantImages.find((item) => item.participantId === participantId);
      if (found)
        dom.addParticipantImage(nameContainer, found.imageUrl);
    }
    renderMatchLabel(opponents, match) {
      const { label } = match.metadata;
      if ((0, helpers_1.isMatchGame)(match)) {
        opponents.append(dom.createMatchLabel(label, lang.getMatchStatus(match.status)));
        return;
      }
      const onClick = (event) => {
        event.stopPropagation();
        this._onMatchLabelClick(match);
        if (match.child_count > 0 && this.config.showPopoverOnMatchLabelClick) {
          this.clearPreviousPopoverSelections();
          opponents.classList.add("popover-selected");
          this.showPopover(match);
        }
      };
      if (this.config.separatedChildCountLabel) {
        opponents.append(dom.createMatchLabel(label, lang.getMatchStatus(match.status), onClick));
        if (match.child_count > 0)
          opponents.append(dom.createChildCountLabel(lang.t("common.best-of-x", { x: match.child_count }), onClick));
        return;
      }
      if (match.child_count > 0) {
        const childCountLabel = lang.t("common.best-of-x", { x: match.child_count });
        const joined = label ? `${label}, ${childCountLabel}` : childCountLabel;
        opponents.append(dom.createMatchLabel(joined, lang.getMatchStatus(match.status), onClick));
      }
    }
    showPopover(match) {
      this.popover.innerText = "";
      const { roundNumber, roundCount, matchLocation } = match.metadata;
      const matchLabel = lang.getMatchLabel(match.number, roundNumber, roundCount, matchLocation);
      console.log("asdf", match.opponent1, match.opponent2);
      const opp1 = this.participants.find((p) => {
        var _a;
        return p.id === ((_a = match.opponent1) === null || _a === undefined ? undefined : _a.id);
      });
      const opp2 = this.participants.find((p) => {
        var _a;
        return p.id === ((_a = match.opponent2) === null || _a === undefined ? undefined : _a.id);
      });
      let text;
      if (opp1 && opp2) {
        text = `${opp1.name} vs ${opp2.name}`;
      } else {
        text = matchLabel;
      }
      const popoverTitle = dom.createPopoverTitle(text);
      this.popover.append(popoverTitle);
      for (const game of match.metadata.games) {
        console.log("matchGame");
        const matchLabel2 = game.metadata.label;
        const defaultMatchGameLabel = lang.t("match-label.match-game", { gameNumber: game.number });
        const match2 = this.createMatch({
          ...game,
          metadata: { label: matchLabel2 !== null && matchLabel2 !== undefined ? matchLabel2 : defaultMatchGameLabel }
        }, false);
        this.popover.append(match2);
      }
      try {
        this.popover.togglePopover();
      } catch {
      }
    }
    renderHint(nameContainer, participant, originHint, matchLocation) {
      if (originHint === undefined || participant.position === undefined)
        return;
      if (!this.config.showSlotsOrigin)
        return;
      if (!this.config.showLowerBracketSlotsOrigin && matchLocation === "loser_bracket")
        return;
      dom.setupHint(nameContainer, originHint(participant.position));
    }
    renderParticipantOrigin(nameContainer, participant, side, matchLocation, roundNumber) {
      if (participant.position === undefined || matchLocation === undefined)
        return;
      if (!this.config.participantOriginPlacement || this.config.participantOriginPlacement === "none")
        return;
      if (!this.config.showSlotsOrigin)
        return;
      if (!this.config.showLowerBracketSlotsOrigin && matchLocation === "loser_bracket")
        return;
      const abbreviation = (0, helpers_1.getOriginAbbreviation)(matchLocation, this.skipFirstRound, roundNumber, side);
      if (!abbreviation)
        return;
      const origin = `${abbreviation}${participant.position}`;
      dom.addParticipantOrigin(nameContainer, origin, this.config.participantOriginPlacement);
    }
    setupMouseHover(participantId, element, propagateHighlight) {
      if (!this.config.highlightParticipantOnHover)
        return;
      const setupListeners = (elements) => {
        element.addEventListener("mouseenter", () => {
          elements.forEach((el) => el.classList.add("hover"));
        });
        element.addEventListener("mouseleave", () => {
          elements.forEach((el) => el.classList.remove("hover"));
        });
      };
      if (!propagateHighlight) {
        setupListeners([element]);
        return;
      }
      const refs = this.participantRefs[participantId];
      if (!refs)
        throw Error(`The participant (id: ${participantId}) does not exist in the participants table.`);
      refs.push(element);
      setupListeners(refs);
    }
    clearPreviousPopoverSelections() {
      var _a;
      (_a = document.querySelector(".opponents.popover-selected")) === null || _a === undefined || _a.classList.remove("popover-selected");
    }
  }
  exports.BracketsViewer = BracketsViewer;
});

// ../brackets-viewer.js/dist/index.js
var require_dist5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BracketsViewer = undefined;
  var brackets_memory_db_1 = require_dist2();
  var brackets_manager_1 = require_dist4();
  var main_1 = require_main();
  Object.defineProperty(exports, "BracketsViewer", { enumerable: true, get: function() {
    return main_1.BracketsViewer;
  } });
  window.bracketsViewer = new main_1.BracketsViewer;
  window.inMemoryDatabase = new brackets_memory_db_1.InMemoryDatabase;
  window.bracketsManager = new brackets_manager_1.BracketsManager(window.inMemoryDatabase);
});

// src/stream.ts
var import_public_google_sheets_parser = __toESM(require_src(), 1);
async function getStreamMapper(tournament) {
  console.log("test");
  return new Promise(async (resolve, reject) => {
    console.log("getting pov twitch mapping data");
    let streamMaps = {};
    const spreadsheetId = "17-ht0a5byXu2MW7pjp0w-ERwvyZ8WKibml78eRDjokQ";
    const sheetName = tournament;
    const sheetInfo = { sheetName };
    let parser = new import_public_google_sheets_parser.default(spreadsheetId, sheetInfo);
    await parser.parse().then((items) => {
      streamMaps = {};
      for (let i = 0;i < items.length; i++) {
        const row = items[i];
        if (!streamMaps[row["riot id"]]) {
          streamMaps[row["riot id"]] = {
            stream: row["stream"],
            online: false
          };
        }
      }
      console.log("finished getting pov twitch mapping data");
      return Promise.resolve();
    });
    console.log("getting community stream data");
    let commStreams = {};
    sheetInfo.sheetName = `${tournament}_comm`;
    parser = new import_public_google_sheets_parser.default(spreadsheetId, sheetInfo);
    await parser.parse().then((items) => {
      commStreams = {};
      items.forEach((row) => {
        commStreams[row["stream"]] = false;
      });
    });
    console.log("finished getting community stream data");
    resolve({
      streamMaps,
      commStreams
    });
  });
}
function getTwitchStatus(streamMaps) {
  console.log("getting twitch live status for pov streams");
  const twitchStreams = [];
  const players = Object.keys(streamMaps);
  for (let i = 0;i < players.length; i++) {
    const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(streamMaps[players[i]].stream);
    if (match && match[2]) {
      twitchStreams.push(match[2]);
    }
  }
  if (!twitchStreams.length) {
    console.log("no streams to check");
    return Promise.resolve();
  }
  const qs = twitchStreams.map((stream) => `user_login=${stream}`).join("&");
  return new Promise((resolve, reject) => {
    fetch(`https://api.twitch.tv/helix/streams?${qs}&type=live&first=100`, {
      headers: {
        Authorization: `Bearer bi2rq6l3e2i2eiyba0zad35f3z2c16`,
        "Client-Id": "fvt86l1gr691ynogv3kz1gd2djv7qn"
      }
    }).then((res) => res.json()).then((obj) => {
      const onlineStreams = obj.data.map((broadcaster) => broadcaster.user_login);
      const playersWithStream = document.querySelectorAll(".player .stream");
      playersWithStream.forEach((el) => !el.classList.contains("live") && el.classList.remove("live"));
      players.forEach((username) => {
        const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(streamMaps[username].stream);
        if (match && match[2]) {
          const stream = match[2];
          if (!onlineStreams.includes(stream.toLowerCase())) {
            return;
          }
          streamMaps[username].online = true;
          const el = document.querySelector(`.player[data-player-twitch='${stream}']`);
          if (el) {
            if (!el.classList.contains("live")) {
              el.classList.add("live");
            }
          }
        }
      });
    }).then(() => {
      console.log("finished getting twitch live status for pov streams");
      resolve(Promise.resolve());
    });
  });
}
function getTwitchCommStatus(commStreams) {
  console.log("getting twitch live status for community streams", commStreams);
  const users = Object.keys(commStreams);
  const twitchStreams = [];
  for (let i = 0;i < users.length; i++) {
    const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(users[i]);
    if (match && match[2]) {
      twitchStreams.push(match[2]);
    }
  }
  console.log(twitchStreams);
  if (!twitchStreams.length) {
    console.log("no streams to check");
    return Promise.resolve();
  }
  const qs = twitchStreams.map((stream) => `user_login=${stream}`).join("&");
  console.log(qs);
  return new Promise((resolve, reject) => {
    return fetch(`https://api.twitch.tv/helix/streams?${qs}&type=live&first=100`, {
      headers: {
        Authorization: `Bearer bi2rq6l3e2i2eiyba0zad35f3z2c16`,
        "Client-Id": "fvt86l1gr691ynogv3kz1gd2djv7qn"
      }
    }).then((res) => res.json()).then((obj) => {
      users.forEach((user) => {
        commStreams[user] = false;
      });
      obj.data.forEach((twitchInfo) => {
        console.log(twitchInfo);
        if (twitchInfo.game_name !== "VALORANT") {
          return;
        }
        commStreams[`https://twitch.tv/${twitchInfo.user_login}`] = twitchInfo.title;
      });
    }).then(() => {
      console.log("finished getting twitch live status for community streams");
      resolve(Promise.resolve());
    });
  });
}
async function getYoutubeStatus(streamMaps) {
  console.log("getting live youtube streams");
  const players = Object.keys(streamMaps);
  for (let i = 0;i < players.length; i++) {
    const player = players[i];
    if (/youtube/i.test(streamMaps[player].stream)) {
      const match = /https:\/\/www.youtube.com\/channel\/(.*)\/?/i.exec(streamMaps[player].stream);
      if (!match) {
        continue;
      }
      const channelId = match[1];
      await fetch(`https://d1evy86xeirxm4.cloudfront.net/youtube/${channelId}`).then((res) => res.json()).then((obj) => {
        console.log(`setting for ${player} to https://youtube.com/watch?v=${obj.items[0].id.videoId}`);
        if (obj.items && obj.items[0].id && obj.items[0].id.videoId) {
          streamMaps[player].stream = `https://youtube.com/watch?v=${obj.items[0].id.videoId}`;
          streamMaps[player].online = true;
        }
      });
    }
  }
}

// src/config.ts
var config = "none";
function getConfig() {
  return config;
}
var all = () => {
  const players = document.getElementsByClassName("players");
  for (let i = 0;i < players.length; i++) {
    players[i].classList.replace("hidden", "flex");
  }
  const streams = document.querySelectorAll(".streams");
  for (let i = 0;i < streams.length; i++) {
    streams[i].classList.replace("flex", "hidden");
  }
  config = "all";
};
var onlyStreams = () => {
  const players = document.getElementsByClassName("players");
  for (let i = 0;i < players.length; i++) {
    players[i].classList.replace("flex", "hidden");
  }
  const streams = document.querySelectorAll(".streams");
  for (let i = 0;i < streams.length; i++) {
    streams[i].classList.replace("hidden", "flex");
  }
  config = "streams";
};
var none = () => {
  const els = document.getElementsByClassName("players");
  for (let i = 0;i < els.length; i++) {
    els[i].classList.replace("flex", "hidden");
  }
  const streams = document.querySelectorAll(".streams");
  for (let i = 0;i < streams.length; i++) {
    streams[i].classList.replace("flex", "hidden");
  }
  config = "none";
};
var scoresShown = true;
var toggleScores = () => {
  scoresShown = !scoresShown;
  const els = document.getElementsByClassName("result");
  for (let i = 0;i < els.length; i++) {
    if (scoresShown) {
      els[i].classList.remove("invis");
    } else {
      els[i].classList.add("invis");
    }
  }
  document.getElementById("toggle_scores").innerText = scoresShown ? "hide scores" : "show scores";
};
document.getElementById("all").addEventListener("click", all);
document.getElementById("streams").addEventListener("click", onlyStreams);
document.getElementById("none").addEventListener("click", none);
document.getElementById("toggle_scores").addEventListener("click", toggleScores);

// src/dom.ts
var import_brackets_model = __toESM(require_dist(), 1);
function createPlayers(teamId, players, streamMaps, top) {
  const config2 = getConfig();
  const playersContainer = document.createElement("div");
  playersContainer.classList.add("players");
  if (config2 === "streams" || config2 === "none") {
    playersContainer.classList.add("hidden");
  } else {
    playersContainer.classList.add("flex");
  }
  if (top) {
    playersContainer.classList.add("top");
  } else {
    playersContainer.classList.add("bottom");
  }
  if (teamId !== null && teamId !== undefined)
    playersContainer.setAttribute("data-participant-id", teamId.toString());
  for (let i = 0;i < players.length; i++) {
    const player = players[i];
    const playerContainer = document.createElement("div");
    playerContainer.classList.add("player");
    playerContainer.classList.add("flex");
    playerContainer.setAttribute("data-player-username", player.name);
    const playerName = document.createElement("div");
    playerName.classList.add("player-name");
    playerName.innerText = player.name;
    playerContainer.append(playerName);
    if (streamMaps[player.name]) {
      const streamURL = streamMaps[player.name].stream;
      console.log(streamURL);
      if (/twitch/i.test(streamURL)) {
        const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(streamMaps[player.name].stream);
        if (match && match[2]) {
          const twitchUsername = match[2];
          playerContainer.classList.add("stream");
          playerContainer.setAttribute("data-player-twitch", twitchUsername);
          const playerTwitch = document.createElement("div");
          playerTwitch.classList.add("twitch-img");
          const twitchLink = document.createElement("a");
          twitchLink.setAttribute("href", `https://twitch.tv/${twitchUsername}`);
          twitchLink.setAttribute("target", `_blank`);
          const twitchImg = document.createElement("img");
          twitchImg.setAttribute("src", "TwitchGlitchPurple.png");
          twitchImg.setAttribute("alt", "Twitch channel");
          twitchLink.appendChild(twitchImg);
          playerTwitch.append(twitchLink);
          playerContainer.prepend(playerTwitch);
        }
      } else if (/youtube/i.test(streamURL)) {
        const match = /https:\/\/www.youtube.com\/watch?v=(.*)/i.exec(streamURL);
        if (match) {
          const vid = match[1];
          playerContainer.classList.add("stream");
          playerContainer.setAttribute("data-player-youtube", vid);
          const playerYT = document.createElement("div");
          playerYT.classList.add("youtube-img");
          const youtubeLink = document.createElement("a");
          youtubeLink.setAttribute("href", `https://youtube.com/watch?v=${vid}`);
          youtubeLink.setAttribute("target", `_blank`);
          const youtubeImg = document.createElement("img");
          youtubeImg.setAttribute("src", "YouTube_Logo_2017.png");
          youtubeImg.setAttribute("alt", "Youtube video");
          youtubeLink.appendChild(youtubeImg);
          playerYT.append(youtubeLink);
          playerContainer.prepend(playerYT);
        }
      }
      if (streamMaps[player.name].online) {
        playerContainer.classList.add("live");
      }
    }
    playersContainer.append(playerContainer);
  }
  return playersContainer;
}
function addPlayers(teamsMap, streamMaps) {
  console.log("adding players");
  const els = document.querySelectorAll(".brackets-viewer .opponents");
  for (let i = 0;i < els.length; i++) {
    const [topEl, bottomEl] = els[i].querySelectorAll(".participant");
    if (!topEl || !bottomEl) {
      continue;
    }
    const topTeamId = topEl ? topEl.getAttribute("data-participant-id") : null;
    const bottomTeamId = bottomEl ? bottomEl.getAttribute("data-participant-id") : null;
    const top = topTeamId ? teamsMap[topTeamId] : { id: null, players: [] };
    const bottom = bottomTeamId ? teamsMap[bottomTeamId] : { id: null, players: [] };
    const topTeamPlayers = createPlayers(top.id, top.players, streamMaps, true);
    topEl.prepend(topTeamPlayers);
    const bottomTeamPlayers = createPlayers(bottom.id, bottom.players, streamMaps, false);
    bottomEl.append(bottomTeamPlayers);
  }
  console.log("added players");
}
function createStreams(config2, teamId, players, streamMaps) {
  const streamsContainer = document.createElement("div");
  streamsContainer.classList.add("streams");
  if (config2 === "all" || config2 === "none") {
    streamsContainer.classList.add("hidden");
  } else {
    streamsContainer.classList.add("flex");
  }
  if (teamId !== null && teamId !== undefined)
    streamsContainer.setAttribute("data-participant-id", teamId.toString());
  for (let i = 0;i < players.length; i++) {
    const player = players[i];
    if (!streamMaps[player.name]) {
      continue;
    }
    const streamContainer = document.createElement("div");
    streamContainer.classList.add("stream");
    streamContainer.setAttribute("data-player-username", player.name);
    const streamURL = streamMaps[player.name].stream;
    if (/twitch/i.test(streamURL)) {
      const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(streamMaps[player.name].stream);
      if (match && match[2]) {
        const twitchUsername = match[2];
        streamContainer.classList.add("stream");
        streamContainer.setAttribute("data-player-twitch", twitchUsername);
        const playerTwitch = document.createElement("div");
        playerTwitch.classList.add("stream-img");
        const twitchLink = document.createElement("a");
        twitchLink.setAttribute("href", `https://twitch.tv/${twitchUsername}`);
        twitchLink.setAttribute("target", `_blank`);
        const twitchImg = document.createElement("img");
        twitchImg.setAttribute("src", "TwitchGlitchPurple.png");
        twitchImg.setAttribute("alt", "Twitch channel");
        twitchLink.appendChild(twitchImg);
        playerTwitch.append(twitchLink);
        streamContainer.prepend(playerTwitch);
      }
    } else if (/youtube/i.test(streamURL)) {
      const match = /https:\/\/www.youtube.com\/watch?v=(.*)/i.exec(streamURL);
      console.log("asdf", streamURL);
      if (match) {
        console.log("asdf");
        const vid = match[1];
        streamContainer.classList.add("stream");
        streamContainer.setAttribute("data-player-youtube", vid);
        const playerYT = document.createElement("div");
        playerYT.classList.add("stream-img");
        const youtubeLink = document.createElement("a");
        youtubeLink.setAttribute("href", `https://youtube.com/watch?v=${vid}`);
        youtubeLink.setAttribute("target", `_blank`);
        const youtubeImg = document.createElement("img");
        youtubeImg.setAttribute("src", "YouTube_Logo_2017.png");
        youtubeImg.setAttribute("alt", "Youtube video");
        youtubeLink.appendChild(youtubeImg);
        playerYT.append(youtubeLink);
        streamContainer.prepend(playerYT);
      }
    }
    if (streamMaps[player.name].online) {
      streamContainer.classList.add("live");
    }
    streamsContainer.append(streamContainer);
  }
  if (!streamsContainer.firstChild) {
    const balancer = document.createElement("div");
    balancer.innerHTML = "";
    balancer.classList.add("balancer");
    streamsContainer.append(balancer);
  }
  return streamsContainer;
}
function addStreams(teamsMap, streamMaps) {
  console.log("adding streams");
  const config2 = getConfig();
  const els = document.querySelectorAll(".brackets-viewer .opponents");
  for (let i = 0;i < els.length; i++) {
    const [topEl, bottomEl] = els[i].querySelectorAll(".participant");
    if (!topEl || !bottomEl) {
      continue;
    }
    const topTeamId = topEl ? topEl.getAttribute("data-participant-id") : null;
    const bottomTeamId = bottomEl ? bottomEl.getAttribute("data-participant-id") : null;
    const top = topTeamId ? teamsMap[topTeamId] : { id: null, players: [] };
    const bottom = bottomTeamId ? teamsMap[bottomTeamId] : { id: null, players: [] };
    const topPlayersLength = top ? top.players.length : 0;
    const bottomPlayersLength = bottom ? bottom.players.length : 0;
    const topTeamStreams = createStreams(config2, top.id, top.players, streamMaps);
    topTeamStreams.classList.add("top");
    topEl.prepend(topTeamStreams);
    const bottomTeamStreams = createStreams(config2, bottom.id, bottom.players, streamMaps);
    bottomTeamStreams.classList.add("bottom");
    bottomEl.append(bottomTeamStreams);
  }
  console.log("added streams");
}
function getCurrentlyLiveMatches(teamsMap, streamMaps, commStreams, mainChannels, splitter, matches) {
  console.log("constructing currently live matches");
  const liveMains = document.querySelector("#live-main");
  const qs = mainChannels.map((stream) => `user_login=${stream}`).join("&");
  fetch(`https://api.twitch.tv/helix/streams?${qs}&type=all&first=100`, {
    headers: {
      Authorization: `Bearer bi2rq6l3e2i2eiyba0zad35f3z2c16`,
      "Client-Id": "fvt86l1gr691ynogv3kz1gd2djv7qn"
    }
  }).then((res) => res.json()).then((obj) => {
    liveMains.innerHTML = "";
    obj.data.forEach((twitchInfo) => {
      if (twitchInfo.game_name !== "VALORANT") {
        return;
      }
      const splits = twitchInfo.title.split(splitter);
      let team1;
      let team2;
      splits.forEach((chunk) => {
        if (/ vs.? /i.test(chunk)) {
          [team1, team2] = chunk.split(/ vs.? /i);
        }
      });
      if (!team1 || !team2) {
        team1 = twitchInfo.title.trim();
      }
      const entry = createLiveEntry(team1, team2 && team2.trim(), `https://twitch.tv/${twitchInfo.user_login}`);
      liveMains.append(entry);
    });
  });
  const livePOVs = [];
  matches.forEach((match) => {
    if (new Date(Date.now()) < match.time || match.status === import_brackets_model.Status.Completed || match.opponent1 && match.opponent1.id === null || match.opponent2 && match.opponent2.id === null || match.status === import_brackets_model.Status.Waiting) {
      return;
    }
    let povs = [];
    if (match.opponent1 && match.opponent1.id) {
      const team1Povs = teamsMap[match.opponent1.id].players.filter((player) => streamMaps[player.name] && streamMaps[player.name].online).map((player) => streamMaps[player.name].stream);
      povs = povs.concat(team1Povs);
    }
    if (match.opponent2 && match.opponent2.id) {
      const team2Povs = teamsMap[match.opponent2.id].players.filter((player) => streamMaps[player.name] && streamMaps[player.name].online).map((player) => streamMaps[player.name].stream);
      povs = povs.concat(team2Povs);
    }
    if (povs.length) {
      livePOVs.push({
        opponent1: match.opponent1,
        opponent2: match.opponent2,
        povs
      });
    }
  });
  const povsContainer = document.querySelector("#live-pov");
  povsContainer.innerHTML = "";
  livePOVs.forEach((match) => {
    try {
      const entry = createLiveEntry(teamsMap[match.opponent1.id].name, teamsMap[match.opponent2.id].name, match.povs);
      povsContainer.append(entry);
    } catch {
      console.log(match);
    }
  });
  const commContainer = document.querySelector("#live-community");
  commContainer.innerHTML = "";
  const comms = Object.keys(commStreams);
  const filteredMatches = matches.filter((match) => match.time < new Date && match.status < import_brackets_model.Status.Completed);
  if (filteredMatches.length > 0) {
    for (let i = 0;i < comms.length; i++) {
      let user = comms[i];
      if (commStreams[user] !== false) {
        const match = /https:\/\/(www\.)?twitch.tv\/(.*)/i.exec(user);
        if (match && match[2]) {
          const entry = createLiveEntry(match[2], undefined, user);
          commContainer.append(entry);
        }
      }
    }
  }
  console.log("finished constructing currently live matches");
}
function createLiveEntry(team1, team2, urls) {
  const m = document.createElement("div");
  m.classList.add("live-match");
  const words = document.createElement("div");
  if (team1 && team2) {
    words.innerHTML = `<span class="team">${team1}</span> vs <span class="team">${team2}</span>`;
  } else {
    words.innerHTML = team1;
  }
  m.append(words);
  if (!Array.isArray(urls)) {
    urls = [urls];
  }
  urls.forEach((url) => {
    const streamDiv = document.createElement("div");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    streamDiv.classList.add("stream-img");
    const img = document.createElement("img");
    img.alt = `stream for ${url}`;
    if (/twitch/i.test(url)) {
      img.src = "TwitchGlitchPurple.png";
    } else if (/youtube/i.test(url)) {
      img.src = "YouTube_Logo_2017.png";
    }
    link.append(img);
    streamDiv.append(link);
    m.append(streamDiv);
  });
  return m;
}
function createLinks() {
  console.log("creating links");
  const container = document.querySelector("#links");
  container.innerHTML = "";
  const h1s = document.querySelectorAll(".brackets-viewer h1, #live-matches:has(#live-main:not(:empty), #live-pov:not(:empty), #live-community:not(:empty)) h1");
  h1s.forEach((h1) => {
    const link = document.createElement("a");
    link.classList.add("stages");
    link.setAttribute("href", "#" + h1.id);
    link.innerText = h1.innerText;
    container.append(link);
  });
  console.log("created links");
}

// src/mainChannels.ts
var mainChannelMapper = {
  nagc: ["raidiantgg", "raidiant_beam"],
  knights: ["valorant_northamerica", "knightsarena", "knightsarena_a", "knightsarena_b"],
  mfh: ["mrfunhaver", "funhaverinvitational", "funhavergg"]
};

// src/processor.ts
var import_brackets_model2 = __toESM(require_dist(), 1);

// src/time.ts
var timeMappers = {
  gca: [
    "2024-11-09T21:00:00.000Z",
    "2024-11-09T21:45:00.000Z",
    "2024-11-09T22:30:00.000Z",
    "2024-11-09T23:30:00.000Z",
    "2024-11-10T01:45:00.000Z",
    "2024-11-10T21:00:00.000Z",
    "2024-11-10T23:30:00.000Z"
  ],
  "gc-quals": [
    "2024-03-22T21:00:00.000Z",
    "2024-03-22T22:30:00.000Z",
    "2024-03-23T21:00:00.000Z",
    "2024-03-23T23:00:00.000Z",
    "2024-03-25T21:00:00.000Z",
    "2024-03-25T23:00:00.000Z",
    "2024-03-26T21:00:00.000Z",
    "2024-03-26T23:30:00.000Z"
  ],
  mfh: [
    "2024-09-20T22:00:00.000Z",
    "2024-09-21T00:00:00.000Z",
    "2024-09-21T02:00:00.000Z",
    "2024-09-21T18:00:00.000Z",
    "2024-09-21T20:00:00.000Z",
    "2024-09-22T19:00:00.000Z",
    "2024-09-22T21:00:00.000Z",
    "2024-09-22T23:00:00.000Z"
  ]
};
var startTimeMapper = (tourneyStart, stage, match, timeMapper, roundOffset) => {
  const timeMapper2 = timeMappers[timeMapper];
  if (!timeMapper2) {
    return new Date(stage.startTime);
  }
  const startDate = new Date(tourneyStart);
  const a = new Date(timeMapper2[0]);
  const diff = startDate.valueOf() - a.valueOf();
  let roundNum = match.roundNumber + roundOffset;
  if (stage.bracket.style === "double" && match.matchType === "loser") {
    roundNum++;
  }
  const b2 = new Date(timeMapper2[roundNum - 1]);
  b2.setMilliseconds(b2.getMilliseconds() + diff);
  return b2;
};

// src/processor.ts
var processor = (tourney, teams, processorType, timeMapper) => {
  const stages = [];
  const matches = [];
  const rounds = [];
  const matchGames = [];
  const root = tourney[0];
  let maxRoundNumThisStage = 0;
  let roundOffset = 0;
  root.stages.sort((stageA, stageB) => {
    if (/.*playoffs.*/i.test(stageA.name)) {
      return -1;
    } else {
      return 0;
    }
  }).forEach((stage, index) => {
    stage.bracket.series.forEach((round) => {
      rounds.push({
        stage_id: stage._id
      });
    });
    let stageType;
    if (stage.bracket.type === "elimination") {
      stageType = `${stage.bracket.style}_elimination`;
    } else if (stage.bracket.type === "roundrobin") {
      stageType = "round_robin";
    } else {
      console.error(`well i dunno wtf to do`);
      throw new Error("invalid stage type");
    }
    const newStage = {
      id: stage._id,
      name: stage.name.replace(" - GSL", ""),
      type: stageType,
      number: index,
      settings: {
        groupCount: stage.bracket.groupsCount,
        size: stage.teamIDs.length,
        seedOrdering: [
          "natural",
          "natural",
          "reverse_half_shift",
          "reverse"
        ],
        matchesChildCount: 0
      },
      tournament_id: root._id
    };
    if (processorType === "gsl-single" || processorType === "gsl-double") {
      if (stage.bracket.style === "double") {
        newStage.ends_in_qual = true;
      }
    }
    if (processorType === "challengers1") {
      newStage.ends_in_qual = true;
    }
    stages.push(newStage);
    const bestOf = stage.bracket.series.map((s) => s.numGames).reduce((acc, cur) => acc === cur ? acc : undefined);
    if (stageType === "round_robin") {
      stage.groups.forEach((group) => {
        group.matches.forEach((match) => {
          maxRoundNumThisStage = Math.max(maxRoundNumThisStage, match.roundNumber);
          if (match.isBye) {
            return;
          }
          let team1 = /BYE [A-Z]/.test(match.top.team.name) ? null : { id: null };
          if (match.top.team && !/BYE [A-Z]/.test(match.top.team.name)) {
            team1 = {
              id: match.top.team._id,
              score: match.top.score,
              result: match.isComplete ? match.top.winner ? "win" : "loss" : undefined
            };
          }
          let team2 = /BYE [A-Z]/.test(match.bottom.team.name) ? null : { id: null };
          if (match.bottom.team && match.bottom.team._id !== "65c28130c18d2b70ff587452" && match.bottom.team._id !== "65c2a2f00e8e805be622c0aa" && !/BYE [A-Z]/.test(match.bottom.team.name)) {
            team2 = {
              id: match.bottom.team._id,
              score: match.bottom.score,
              result: match.isComplete ? match.bottom.winner ? "win" : "loss" : undefined
            };
          }
          let status = match.isComplete ? import_brackets_model2.Status.Completed : import_brackets_model2.Status.Ready;
          if (match.roundNumber > 1) {
            const lastMatch = matches.find((m) => m.group_id === group.name && m.round_id === match.roundNumber - 1);
            console.log(lastMatch);
            if (lastMatch && lastMatch.status === 2) {
              status = 1;
            }
          }
          const newMatch = {
            id: match._id,
            stage_id: stage._id,
            group_id: group.name,
            round_id: match.roundNumber,
            number: match.matchNumber,
            status,
            child_count: bestOf ?? 3,
            opponent1: team1,
            opponent2: team2,
            time: startTimeMapper(root.startTime, stage, match, timeMapper, roundOffset)
          };
          newMatch.time = startTimeMapper(root.startTime, stage, match, timeMapper, roundOffset);
          if (newMatch.time.toString() === "Invalid Date") {
            console.log(newMatch);
            return;
          }
          if (match.stats) {
            match.stats.map((game) => {
              const newGame = {
                id: game._id,
                metadata: {
                  label: game.stats.mapName
                },
                stage_id: stage._id,
                parent_id: match._id,
                number: game.gameNumber,
                status: game.stats.isComplete ? 4 : 0,
                opponent1: {
                  id: team1.id,
                  score: game.stats.top.score,
                  result: game.stats.top.winner ? "win" : "loss"
                },
                opponent2: {
                  id: team2.id,
                  score: game.stats.bottom.score,
                  result: game.stats.bottom.winner ? "win" : "loss"
                }
              };
              return newGame;
            }).forEach((game) => matchGames.push(game));
          }
          matches.push(newMatch);
        });
      });
      roundOffset = roundOffset + maxRoundNumThisStage;
    } else {
      stage.matches.forEach((match) => {
        maxRoundNumThisStage = Math.max(maxRoundNumThisStage, match.roundNumber);
        if (processorType === "challengers1") {
          if (stage.bracket.style === "single" && match.roundNumber > 3 || stage.bracket.style === "double" && match.matchType === "winner" && match.roundNumber > 4 || stage.bracket.style === "double" && match.matchType === "loser" && match.roundNumber > 6) {
            return;
          }
        }
        if (processorType === "challengers2") {
          if (stage.bracket.style === "single" && match.roundNumber > 3 || stage.bracket.style === "double" && match.matchType === "winner" && match.roundNumber > 5 || stage.bracket.style === "double" && match.matchType === "loser" && match.roundNumber > 8) {
            return;
          }
        }
        if ((processorType === "gsl-single" || processorType === "gsl-double") && stage.bracket.style === "double") {
          if (match.roundNumber > 2) {
            return;
          }
          if (match.matchType === "loser" && !/group/i.test(stage.name)) {
            match.roundNumber = match.roundNumber + 1;
          }
        }
        if (processorType === "gsl-single" && stage.bracket.style === "single") {
          roundOffset = 3;
        }
        if (processorType === "gsl-double" && stage.bracket.style === "double" && !/group/i.test(stage.name)) {
          roundOffset = 3;
        }
        let team1 = { id: null };
        if (match.top.team) {
          team1 = {
            id: match.top.team._id,
            score: match.top.score,
            result: match.isComplete ? match.top.winner ? "win" : "loss" : undefined
          };
        }
        let team2 = match.isBye || match.bottom.team && /BYE [A-Z]/.test(match.bottom.team.name) ? null : { id: null };
        if (match.bottom.team && !/BYE [A-Z]/.test(match.bottom.team.name) && match.bottom.team._id !== "65c28130c18d2b70ff587452" && match.bottom.team._id !== "65c2a2f00e8e805be622c0aa") {
          team2 = {
            id: match.bottom.team._id,
            score: match.bottom.score,
            result: match.isComplete ? match.bottom.winner ? "win" : "loss" : undefined
          };
        }
        const newMatch = {
          id: match._id,
          stage_id: stage._id,
          group_id: match.matchType,
          round_id: match.roundNumber,
          number: match.matchNumber,
          status: match.isComplete ? 4 : 2,
          child_count: bestOf ?? 3,
          opponent1: team1,
          opponent2: team2
        };
        newMatch.time = startTimeMapper(root.startTime, stage, match, timeMapper, roundOffset);
        if (newMatch.time.toString() === "Invalid Date") {
          console.log(newMatch);
          return;
        }
        if (match.stats) {
          match.stats.map((game) => {
            return {
              id: game._id,
              metadata: {
                label: game.stats.mapName
              },
              stage_id: stage._id,
              parent_id: match._id,
              number: game.gameNumber,
              status: game.stats.isComplete ? 4 : 0,
              opponent1: {
                id: team1.id,
                score: game.stats.top.score,
                result: game.stats.top.winner ? "win" : "loss"
              },
              opponent2: {
                id: team2.id,
                score: game.stats.bottom.score,
                result: game.stats.bottom.winner ? "win" : "loss"
              }
            };
          }).forEach((game) => matchGames.push(game));
        }
        matches.push(newMatch);
      });
    }
  });
  return {
    stages,
    matches,
    matchGames
  };
};

// src/teams.ts
function doTeams(bTeams) {
  const images = [];
  const teams = bTeams.filter((team) => !/BYE [A-Z]/.test(team.name)).map((team) => {
    if (team.persistentTeam) {
      images.push({
        participantId: team._id,
        imageUrl: team.persistentTeam.logoUrl
      });
    }
    return {
      id: team._id,
      name: team.name,
      tournament_id: 0,
      players: team.players.map((player) => {
        return {
          id: player._id,
          name: player.inGameName
        };
      })
    };
  });
  return {
    images,
    teams
  };
}

// src/render.ts
var import_brackets_viewer = __toESM(require_dist5(), 1);
var doRender = async (options) => {
  const { tournament, streamMaps, commStreams, processorType, timeMapper, mainChannels, splitter } = options;
  console.log("starting");
  const url = `https://dtmwra1jsgyb0.cloudfront.net/tournaments/${tournament}?extend%5Bstages%5D%5Bgroups%5D%5Bmatches%5D%5Btop.team%5D=true&extend%5Bstages%5D%5Bgroups%5D%5Bmatches%5D%5Bbottom.team%5D=true&extend%5Bstages%5D%5Bmatches%5D%5Btop.team%5D=true&extend%5Bstages%5D%5Bmatches%5D%5Bbottom.team%5D=true&extend%5Bstages%5D%5Bgroups%5D%5Bstandings%5D%5Bteam%5D=true&extend%5Bstages%5D%5Bstandings%5D%5Bteam%5D=true&extend%5Bstages%5D%5Bteams%5D=true`;
  const teamsUrl = `https://dtmwra1jsgyb0.cloudfront.net/tournaments/${tournament}/teams?page=1&limit=256`;
  const teamsMap = {};
  return new Promise(async (resolve, reject) => {
    const ret = await fetch(teamsUrl).then((res) => res.json()).then(doTeams);
    const teams = ret.teams;
    const images = ret.images;
    teams.forEach((team) => teamsMap[team.id] = team);
    fetch(url).then((res) => res.json()).then((data) => {
      const tourneyName = data[0].name;
      document.querySelector("#name").innerHTML = tourneyName;
      document.title = tourneyName;
      const bracketsData = processor(data, teams, processorType, timeMapper);
      const bracketsConfig = {
        clear: true,
        separatedChildCountLabel: true
      };
      const bracket = new import_brackets_viewer.BracketsViewer;
      bracket.setParticipantImages(images);
      bracket.render({ participants: teams, ...bracketsData }, bracketsConfig).then(() => {
        console.log("rendering finished");
        addStreams(teamsMap, streamMaps);
        addPlayers(teamsMap, streamMaps);
        getCurrentlyLiveMatches(teamsMap, streamMaps, commStreams, mainChannelMapper[mainChannels], splitter, bracketsData.matches);
        createLinks();
        resolve();
      });
    });
  });
};

// src/splitters.ts
var splitters = {
  nagc: "|",
  knights: "-",
  mfh: "|",
  "65c8dd5a98c0e16f5b8e45d8": "-",
  "659dd6c91f28d76ec3cc9d3d": "|",
  "6609a38e86dc730b9efd91d7": "|",
  "65f91291f9fbe42090326fa5": "|",
  "65bac6adbb579346b1d3147b": "|",
  "662436e173911d2090ddeac1": "|"
};

// src/version.ts
var version = 42;
function updater() {
  const options = {
    headers: {
      origin: window.location.origin
    }
  };
  fetch("https://squarebracket.github.io/version.json", options).then((res) => res.json()).then((obj) => {
    console.log(version, obj.version);
    if (version < obj.version) {
      document.querySelector("#updater").classList.remove("hidden");
      let countdownEl = document.querySelector("#countdown");
      let countdown = 30;
      setInterval(() => {
        countdown--;
        countdownEl.innerText = countdown;
        if (countdown <= 0) {
          try {
            window.location.reload();
          } catch {
          }
        }
      }, 1000);
    }
  });
}

// src/index.ts
var params = new URLSearchParams(window.location.search);
var tournament = params.get("tournament") || "67e844233c70d700211eacc0";
var processorType = params.get("processor") || "gsl-double";
var startTimeMapperType = params.get("timeMapper") || "gc-quals";
var mainChannels = params.get("mainStreams") || "nagc";
var splitter = params.get("mainStreams") || "nagc";
var anchor = window.location.hash;
var URL = `https://dtmwra1jsgyb0.cloudfront.net/tournaments/${tournament}?extend%5Bstages%5D%5Bgroups%5D%5Bmatches%5D%5Btop.team%5D=true&extend%5Bstages%5D%5Bgroups%5D%5Bmatches%5D%5Bbottom.team%5D=true&extend%5Bstages%5D%5Bmatches%5D%5Btop.team%5D=true&extend%5Bstages%5D%5Bmatches%5D%5Bbottom.team%5D=true&extend%5Bstages%5D%5Bgroups%5D%5Bstandings%5D%5Bteam%5D=true&extend%5Bstages%5D%5Bstandings%5D%5Bteam%5D=true&extend%5Bstages%5D%5Bteams%5D=true`;
var teamsUrl = `https://dtmwra1jsgyb0.cloudfront.net/tournaments/${tournament}/teams?page=1&limit=256`;
var loop = () => {
  console.log("loop");
  getStreamMapper(tournament).then(async (obj) => {
    const { streamMaps, commStreams } = obj;
    await getYoutubeStatus(streamMaps);
    await getTwitchStatus(streamMaps);
    await getTwitchCommStatus(commStreams);
    doRender({
      processorType,
      timeMapper: startTimeMapperType,
      tournament,
      streamMaps,
      mainChannels,
      splitter: splitters[splitter],
      commStreams
    }).then(() => {
      if (anchor) {
        console.log(`trying to scroll to ${anchor}`);
        document.querySelector(anchor).scrollIntoView();
      }
    });
  });
};
loop();
setInterval(loop, 60000);
setInterval(updater, 600000);
