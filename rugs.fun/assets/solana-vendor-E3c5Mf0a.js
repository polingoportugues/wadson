var Vs = Object.defineProperty;
var Zs = (n, t, e) => t in n ? Vs(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e;
var ae = (n, t, e) => Zs(n, typeof t != "symbol" ? t + "" : t, e);
import {
    g as fn,
    b as Po
} from "./react-vendor-1qCqAHqt.js";
var _i = {},
    dn = {};
dn.byteLength = Js;
dn.toByteArray = ta;
dn.fromByteArray = na;
var Fe = [],
    Te = [],
    Ys = typeof Uint8Array < "u" ? Uint8Array : Array,
    Gn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var lr = 0, Xs = Gn.length; lr < Xs; ++lr) Fe[lr] = Gn[lr], Te[Gn.charCodeAt(lr)] = lr;
Te[45] = 62;
Te[95] = 63;

function Fo(n) {
    var t = n.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var e = n.indexOf("=");
    e === -1 && (e = t);
    var r = e === t ? 0 : 4 - e % 4;
    return [e, r]
}

function Js(n) {
    var t = Fo(n),
        e = t[0],
        r = t[1];
    return (e + r) * 3 / 4 - r
}

function Qs(n, t, e) {
    return (t + e) * 3 / 4 - e
}

function ta(n) {
    var t, e = Fo(n),
        r = e[0],
        o = e[1],
        i = new Ys(Qs(n, r, o)),
        s = 0,
        f = o > 0 ? r - 4 : r,
        y;
    for (y = 0; y < f; y += 4) t = Te[n.charCodeAt(y)] << 18 | Te[n.charCodeAt(y + 1)] << 12 | Te[n.charCodeAt(y + 2)] << 6 | Te[n.charCodeAt(y + 3)], i[s++] = t >> 16 & 255, i[s++] = t >> 8 & 255, i[s++] = t & 255;
    return o === 2 && (t = Te[n.charCodeAt(y)] << 2 | Te[n.charCodeAt(y + 1)] >> 4, i[s++] = t & 255), o === 1 && (t = Te[n.charCodeAt(y)] << 10 | Te[n.charCodeAt(y + 1)] << 4 | Te[n.charCodeAt(y + 2)] >> 2, i[s++] = t >> 8 & 255, i[s++] = t & 255), i
}

function ea(n) {
    return Fe[n >> 18 & 63] + Fe[n >> 12 & 63] + Fe[n >> 6 & 63] + Fe[n & 63]
}

function ra(n, t, e) {
    for (var r, o = [], i = t; i < e; i += 3) r = (n[i] << 16 & 16711680) + (n[i + 1] << 8 & 65280) + (n[i + 2] & 255), o.push(ea(r));
    return o.join("")
}

function na(n) {
    for (var t, e = n.length, r = e % 3, o = [], i = 16383, s = 0, f = e - r; s < f; s += i) o.push(ra(n, s, s + i > f ? f : s + i));
    return r === 1 ? (t = n[e - 1], o.push(Fe[t >> 2] + Fe[t << 4 & 63] + "==")) : r === 2 && (t = (n[e - 2] << 8) + n[e - 1], o.push(Fe[t >> 10] + Fe[t >> 4 & 63] + Fe[t << 2 & 63] + "=")), o.join("")
}
var Ii = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ii.read = function(n, t, e, r, o) {
    var i, s, f = o * 8 - r - 1,
        y = (1 << f) - 1,
        S = y >> 1,
        m = -7,
        U = e ? o - 1 : 0,
        H = e ? -1 : 1,
        O = n[t + U];
    for (U += H, i = O & (1 << -m) - 1, O >>= -m, m += f; m > 0; i = i * 256 + n[t + U], U += H, m -= 8);
    for (s = i & (1 << -m) - 1, i >>= -m, m += r; m > 0; s = s * 256 + n[t + U], U += H, m -= 8);
    if (i === 0) i = 1 - S;
    else {
        if (i === y) return s ? NaN : (O ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, r), i = i - S
    }
    return (O ? -1 : 1) * s * Math.pow(2, i - r)
};
Ii.write = function(n, t, e, r, o, i) {
    var s, f, y, S = i * 8 - o - 1,
        m = (1 << S) - 1,
        U = m >> 1,
        H = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        O = r ? 0 : i - 1,
        j = r ? 1 : -1,
        F = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, s = m) : (s = Math.floor(Math.log(t) / Math.LN2), t * (y = Math.pow(2, -s)) < 1 && (s--, y *= 2), s + U >= 1 ? t += H / y : t += H * Math.pow(2, 1 - U), t * y >= 2 && (s++, y /= 2), s + U >= m ? (f = 0, s = m) : s + U >= 1 ? (f = (t * y - 1) * Math.pow(2, o), s = s + U) : (f = t * Math.pow(2, U - 1) * Math.pow(2, o), s = 0)); o >= 8; n[e + O] = f & 255, O += j, f /= 256, o -= 8);
    for (s = s << o | f, S += o; S > 0; n[e + O] = s & 255, O += j, s /= 256, S -= 8);
    n[e + O - j] |= F * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
    const t = dn,
        e = Ii,
        r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    n.Buffer = m, n.SlowBuffer = X, n.INSPECT_MAX_BYTES = 50;
    const o = 2147483647;
    n.kMaxLength = o;
    const {
        Uint8Array: i,
        ArrayBuffer: s,
        SharedArrayBuffer: f
    } = globalThis;
    m.TYPED_ARRAY_SUPPORT = y(), !m.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function y() {
        try {
            const v = new i(1),
                h = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(h, i.prototype), Object.setPrototypeOf(v, h), v.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(m.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (m.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(m.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (m.isBuffer(this)) return this.byteOffset
        }
    });

    function S(v) {
        if (v > o) throw new RangeError('The value "' + v + '" is invalid for option "size"');
        const h = new i(v);
        return Object.setPrototypeOf(h, m.prototype), h
    }

    function m(v, h, d) {
        if (typeof v == "number") {
            if (typeof h == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return j(v)
        }
        return U(v, h, d)
    }
    m.poolSize = 8192;

    function U(v, h, d) {
        if (typeof v == "string") return F(v, h);
        if (s.isView(v)) return Q(v);
        if (v == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v);
        if (fe(v, s) || v && fe(v.buffer, s) || typeof f < "u" && (fe(v, f) || v && fe(v.buffer, f))) return V(v, h, d);
        if (typeof v == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const A = v.valueOf && v.valueOf();
        if (A != null && A !== v) return m.from(A, h, d);
        const z = W(v);
        if (z) return z;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof v[Symbol.toPrimitive] == "function") return m.from(v[Symbol.toPrimitive]("string"), h, d);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v)
    }
    m.from = function(v, h, d) {
        return U(v, h, d)
    }, Object.setPrototypeOf(m.prototype, i.prototype), Object.setPrototypeOf(m, i);

    function H(v) {
        if (typeof v != "number") throw new TypeError('"size" argument must be of type number');
        if (v < 0) throw new RangeError('The value "' + v + '" is invalid for option "size"')
    }

    function O(v, h, d) {
        return H(v), v <= 0 ? S(v) : h !== void 0 ? typeof d == "string" ? S(v).fill(h, d) : S(v).fill(h) : S(v)
    }
    m.alloc = function(v, h, d) {
        return O(v, h, d)
    };

    function j(v) {
        return H(v), S(v < 0 ? 0 : st(v) | 0)
    }
    m.allocUnsafe = function(v) {
        return j(v)
    }, m.allocUnsafeSlow = function(v) {
        return j(v)
    };

    function F(v, h) {
        if ((typeof h != "string" || h === "") && (h = "utf8"), !m.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
        const d = nt(v, h) | 0;
        let A = S(d);
        const z = A.write(v, h);
        return z !== d && (A = A.slice(0, z)), A
    }

    function C(v) {
        const h = v.length < 0 ? 0 : st(v.length) | 0,
            d = S(h);
        for (let A = 0; A < h; A += 1) d[A] = v[A] & 255;
        return d
    }

    function Q(v) {
        if (fe(v, i)) {
            const h = new i(v);
            return V(h.buffer, h.byteOffset, h.byteLength)
        }
        return C(v)
    }

    function V(v, h, d) {
        if (h < 0 || v.byteLength < h) throw new RangeError('"offset" is outside of buffer bounds');
        if (v.byteLength < h + (d || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let A;
        return h === void 0 && d === void 0 ? A = new i(v) : d === void 0 ? A = new i(v, h) : A = new i(v, h, d), Object.setPrototypeOf(A, m.prototype), A
    }

    function W(v) {
        if (m.isBuffer(v)) {
            const h = st(v.length) | 0,
                d = S(h);
            return d.length === 0 || v.copy(d, 0, 0, h), d
        }
        if (v.length !== void 0) return typeof v.length != "number" || Ct(v.length) ? S(0) : C(v);
        if (v.type === "Buffer" && Array.isArray(v.data)) return C(v.data)
    }

    function st(v) {
        if (v >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return v | 0
    }

    function X(v) {
        return +v != v && (v = 0), m.alloc(+v)
    }
    m.isBuffer = function(h) {
        return h != null && h._isBuffer === !0 && h !== m.prototype
    }, m.compare = function(h, d) {
        if (fe(h, i) && (h = m.from(h, h.offset, h.byteLength)), fe(d, i) && (d = m.from(d, d.offset, d.byteLength)), !m.isBuffer(h) || !m.isBuffer(d)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (h === d) return 0;
        let A = h.length,
            z = d.length;
        for (let G = 0, et = Math.min(A, z); G < et; ++G)
            if (h[G] !== d[G]) {
                A = h[G], z = d[G];
                break
            }
        return A < z ? -1 : z < A ? 1 : 0
    }, m.isEncoding = function(h) {
        switch (String(h).toLowerCase()) {
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
                return !0;
            default:
                return !1
        }
    }, m.concat = function(h, d) {
        if (!Array.isArray(h)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (h.length === 0) return m.alloc(0);
        let A;
        if (d === void 0)
            for (d = 0, A = 0; A < h.length; ++A) d += h[A].length;
        const z = m.allocUnsafe(d);
        let G = 0;
        for (A = 0; A < h.length; ++A) {
            let et = h[A];
            if (fe(et, i)) G + et.length > z.length ? (m.isBuffer(et) || (et = m.from(et)), et.copy(z, G)) : i.prototype.set.call(z, et, G);
            else if (m.isBuffer(et)) et.copy(z, G);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            G += et.length
        }
        return z
    };

    function nt(v, h) {
        if (m.isBuffer(v)) return v.length;
        if (s.isView(v) || fe(v, s)) return v.byteLength;
        if (typeof v != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof v);
        const d = v.length,
            A = arguments.length > 2 && arguments[2] === !0;
        if (!A && d === 0) return 0;
        let z = !1;
        for (;;) switch (h) {
            case "ascii":
            case "latin1":
            case "binary":
                return d;
            case "utf8":
            case "utf-8":
                return Ft(v).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return d * 2;
            case "hex":
                return d >>> 1;
            case "base64":
                return kt(v).length;
            default:
                if (z) return A ? -1 : Ft(v).length;
                h = ("" + h).toLowerCase(), z = !0
        }
    }
    m.byteLength = nt;

    function it(v, h, d) {
        let A = !1;
        if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((d === void 0 || d > this.length) && (d = this.length), d <= 0) || (d >>>= 0, h >>>= 0, d <= h)) return "";
        for (v || (v = "utf8");;) switch (v) {
            case "hex":
                return c(this, h, d);
            case "utf8":
            case "utf-8":
                return _(this, h, d);
            case "ascii":
                return D(this, h, d);
            case "latin1":
            case "binary":
                return I(this, h, d);
            case "base64":
                return w(this, h, d);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return u(this, h, d);
            default:
                if (A) throw new TypeError("Unknown encoding: " + v);
                v = (v + "").toLowerCase(), A = !0
        }
    }
    m.prototype._isBuffer = !0;

    function tt(v, h, d) {
        const A = v[h];
        v[h] = v[d], v[d] = A
    }
    m.prototype.swap16 = function() {
        const h = this.length;
        if (h % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let d = 0; d < h; d += 2) tt(this, d, d + 1);
        return this
    }, m.prototype.swap32 = function() {
        const h = this.length;
        if (h % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let d = 0; d < h; d += 4) tt(this, d, d + 3), tt(this, d + 1, d + 2);
        return this
    }, m.prototype.swap64 = function() {
        const h = this.length;
        if (h % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let d = 0; d < h; d += 8) tt(this, d, d + 7), tt(this, d + 1, d + 6), tt(this, d + 2, d + 5), tt(this, d + 3, d + 4);
        return this
    }, m.prototype.toString = function() {
        const h = this.length;
        return h === 0 ? "" : arguments.length === 0 ? _(this, 0, h) : it.apply(this, arguments)
    }, m.prototype.toLocaleString = m.prototype.toString, m.prototype.equals = function(h) {
        if (!m.isBuffer(h)) throw new TypeError("Argument must be a Buffer");
        return this === h ? !0 : m.compare(this, h) === 0
    }, m.prototype.inspect = function() {
        let h = "";
        const d = n.INSPECT_MAX_BYTES;
        return h = this.toString("hex", 0, d).replace(/(.{2})/g, "$1 ").trim(), this.length > d && (h += " ... "), "<Buffer " + h + ">"
    }, r && (m.prototype[r] = m.prototype.inspect), m.prototype.compare = function(h, d, A, z, G) {
        if (fe(h, i) && (h = m.from(h, h.offset, h.byteLength)), !m.isBuffer(h)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof h);
        if (d === void 0 && (d = 0), A === void 0 && (A = h ? h.length : 0), z === void 0 && (z = 0), G === void 0 && (G = this.length), d < 0 || A > h.length || z < 0 || G > this.length) throw new RangeError("out of range index");
        if (z >= G && d >= A) return 0;
        if (z >= G) return -1;
        if (d >= A) return 1;
        if (d >>>= 0, A >>>= 0, z >>>= 0, G >>>= 0, this === h) return 0;
        let et = G - z,
            Bt = A - d;
        const bt = Math.min(et, Bt),
            vt = this.slice(z, G),
            Nt = h.slice(d, A);
        for (let yt = 0; yt < bt; ++yt)
            if (vt[yt] !== Nt[yt]) {
                et = vt[yt], Bt = Nt[yt];
                break
            }
        return et < Bt ? -1 : Bt < et ? 1 : 0
    };

    function T(v, h, d, A, z) {
        if (v.length === 0) return -1;
        if (typeof d == "string" ? (A = d, d = 0) : d > 2147483647 ? d = 2147483647 : d < -2147483648 && (d = -2147483648), d = +d, Ct(d) && (d = z ? 0 : v.length - 1), d < 0 && (d = v.length + d), d >= v.length) {
            if (z) return -1;
            d = v.length - 1
        } else if (d < 0)
            if (z) d = 0;
            else return -1;
        if (typeof h == "string" && (h = m.from(h, A)), m.isBuffer(h)) return h.length === 0 ? -1 : L(v, h, d, A, z);
        if (typeof h == "number") return h = h & 255, typeof i.prototype.indexOf == "function" ? z ? i.prototype.indexOf.call(v, h, d) : i.prototype.lastIndexOf.call(v, h, d) : L(v, [h], d, A, z);
        throw new TypeError("val must be string, number or Buffer")
    }

    function L(v, h, d, A, z) {
        let G = 1,
            et = v.length,
            Bt = h.length;
        if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
            if (v.length < 2 || h.length < 2) return -1;
            G = 2, et /= 2, Bt /= 2, d /= 2
        }

        function bt(Nt, yt) {
            return G === 1 ? Nt[yt] : Nt.readUInt16BE(yt * G)
        }
        let vt;
        if (z) {
            let Nt = -1;
            for (vt = d; vt < et; vt++)
                if (bt(v, vt) === bt(h, Nt === -1 ? 0 : vt - Nt)) {
                    if (Nt === -1 && (Nt = vt), vt - Nt + 1 === Bt) return Nt * G
                } else Nt !== -1 && (vt -= vt - Nt), Nt = -1
        } else
            for (d + Bt > et && (d = et - Bt), vt = d; vt >= 0; vt--) {
                let Nt = !0;
                for (let yt = 0; yt < Bt; yt++)
                    if (bt(v, vt + yt) !== bt(h, yt)) {
                        Nt = !1;
                        break
                    }
                if (Nt) return vt
            }
        return -1
    }
    m.prototype.includes = function(h, d, A) {
        return this.indexOf(h, d, A) !== -1
    }, m.prototype.indexOf = function(h, d, A) {
        return T(this, h, d, A, !0)
    }, m.prototype.lastIndexOf = function(h, d, A) {
        return T(this, h, d, A, !1)
    };

    function N(v, h, d, A) {
        d = Number(d) || 0;
        const z = v.length - d;
        A ? (A = Number(A), A > z && (A = z)) : A = z;
        const G = h.length;
        A > G / 2 && (A = G / 2);
        let et;
        for (et = 0; et < A; ++et) {
            const Bt = parseInt(h.substr(et * 2, 2), 16);
            if (Ct(Bt)) return et;
            v[d + et] = Bt
        }
        return et
    }

    function B(v, h, d, A) {
        return Ut(Ft(h, v.length - d), v, d, A)
    }

    function b(v, h, d, A) {
        return Ut(Wt(h), v, d, A)
    }

    function a(v, h, d, A) {
        return Ut(kt(h), v, d, A)
    }

    function g(v, h, d, A) {
        return Ut(Vt(h, v.length - d), v, d, A)
    }
    m.prototype.write = function(h, d, A, z) {
        if (d === void 0) z = "utf8", A = this.length, d = 0;
        else if (A === void 0 && typeof d == "string") z = d, A = this.length, d = 0;
        else if (isFinite(d)) d = d >>> 0, isFinite(A) ? (A = A >>> 0, z === void 0 && (z = "utf8")) : (z = A, A = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const G = this.length - d;
        if ((A === void 0 || A > G) && (A = G), h.length > 0 && (A < 0 || d < 0) || d > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        z || (z = "utf8");
        let et = !1;
        for (;;) switch (z) {
            case "hex":
                return N(this, h, d, A);
            case "utf8":
            case "utf-8":
                return B(this, h, d, A);
            case "ascii":
            case "latin1":
            case "binary":
                return b(this, h, d, A);
            case "base64":
                return a(this, h, d, A);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return g(this, h, d, A);
            default:
                if (et) throw new TypeError("Unknown encoding: " + z);
                z = ("" + z).toLowerCase(), et = !0
        }
    }, m.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function w(v, h, d) {
        return h === 0 && d === v.length ? t.fromByteArray(v) : t.fromByteArray(v.slice(h, d))
    }

    function _(v, h, d) {
        d = Math.min(v.length, d);
        const A = [];
        let z = h;
        for (; z < d;) {
            const G = v[z];
            let et = null,
                Bt = G > 239 ? 4 : G > 223 ? 3 : G > 191 ? 2 : 1;
            if (z + Bt <= d) {
                let bt, vt, Nt, yt;
                switch (Bt) {
                    case 1:
                        G < 128 && (et = G);
                        break;
                    case 2:
                        bt = v[z + 1], (bt & 192) === 128 && (yt = (G & 31) << 6 | bt & 63, yt > 127 && (et = yt));
                        break;
                    case 3:
                        bt = v[z + 1], vt = v[z + 2], (bt & 192) === 128 && (vt & 192) === 128 && (yt = (G & 15) << 12 | (bt & 63) << 6 | vt & 63, yt > 2047 && (yt < 55296 || yt > 57343) && (et = yt));
                        break;
                    case 4:
                        bt = v[z + 1], vt = v[z + 2], Nt = v[z + 3], (bt & 192) === 128 && (vt & 192) === 128 && (Nt & 192) === 128 && (yt = (G & 15) << 18 | (bt & 63) << 12 | (vt & 63) << 6 | Nt & 63, yt > 65535 && yt < 1114112 && (et = yt))
                }
            }
            et === null ? (et = 65533, Bt = 1) : et > 65535 && (et -= 65536, A.push(et >>> 10 & 1023 | 55296), et = 56320 | et & 1023), A.push(et), z += Bt
        }
        return q(A)
    }
    const R = 4096;

    function q(v) {
        const h = v.length;
        if (h <= R) return String.fromCharCode.apply(String, v);
        let d = "",
            A = 0;
        for (; A < h;) d += String.fromCharCode.apply(String, v.slice(A, A += R));
        return d
    }

    function D(v, h, d) {
        let A = "";
        d = Math.min(v.length, d);
        for (let z = h; z < d; ++z) A += String.fromCharCode(v[z] & 127);
        return A
    }

    function I(v, h, d) {
        let A = "";
        d = Math.min(v.length, d);
        for (let z = h; z < d; ++z) A += String.fromCharCode(v[z]);
        return A
    }

    function c(v, h, d) {
        const A = v.length;
        (!h || h < 0) && (h = 0), (!d || d < 0 || d > A) && (d = A);
        let z = "";
        for (let G = h; G < d; ++G) z += zt[v[G]];
        return z
    }

    function u(v, h, d) {
        const A = v.slice(h, d);
        let z = "";
        for (let G = 0; G < A.length - 1; G += 2) z += String.fromCharCode(A[G] + A[G + 1] * 256);
        return z
    }
    m.prototype.slice = function(h, d) {
        const A = this.length;
        h = ~~h, d = d === void 0 ? A : ~~d, h < 0 ? (h += A, h < 0 && (h = 0)) : h > A && (h = A), d < 0 ? (d += A, d < 0 && (d = 0)) : d > A && (d = A), d < h && (d = h);
        const z = this.subarray(h, d);
        return Object.setPrototypeOf(z, m.prototype), z
    };

    function x(v, h, d) {
        if (v % 1 !== 0 || v < 0) throw new RangeError("offset is not uint");
        if (v + h > d) throw new RangeError("Trying to access beyond buffer length")
    }
    m.prototype.readUintLE = m.prototype.readUIntLE = function(h, d, A) {
        h = h >>> 0, d = d >>> 0, A || x(h, d, this.length);
        let z = this[h],
            G = 1,
            et = 0;
        for (; ++et < d && (G *= 256);) z += this[h + et] * G;
        return z
    }, m.prototype.readUintBE = m.prototype.readUIntBE = function(h, d, A) {
        h = h >>> 0, d = d >>> 0, A || x(h, d, this.length);
        let z = this[h + --d],
            G = 1;
        for (; d > 0 && (G *= 256);) z += this[h + --d] * G;
        return z
    }, m.prototype.readUint8 = m.prototype.readUInt8 = function(h, d) {
        return h = h >>> 0, d || x(h, 1, this.length), this[h]
    }, m.prototype.readUint16LE = m.prototype.readUInt16LE = function(h, d) {
        return h = h >>> 0, d || x(h, 2, this.length), this[h] | this[h + 1] << 8
    }, m.prototype.readUint16BE = m.prototype.readUInt16BE = function(h, d) {
        return h = h >>> 0, d || x(h, 2, this.length), this[h] << 8 | this[h + 1]
    }, m.prototype.readUint32LE = m.prototype.readUInt32LE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216
    }, m.prototype.readUint32BE = m.prototype.readUInt32BE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3])
    }, m.prototype.readBigUInt64LE = xe(function(h) {
        h = h >>> 0, ke(h, "offset");
        const d = this[h],
            A = this[h + 7];
        (d === void 0 || A === void 0) && Lt(h, this.length - 8);
        const z = d + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24,
            G = this[++h] + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + A * 2 ** 24;
        return BigInt(z) + (BigInt(G) << BigInt(32))
    }), m.prototype.readBigUInt64BE = xe(function(h) {
        h = h >>> 0, ke(h, "offset");
        const d = this[h],
            A = this[h + 7];
        (d === void 0 || A === void 0) && Lt(h, this.length - 8);
        const z = d * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h],
            G = this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + A;
        return (BigInt(z) << BigInt(32)) + BigInt(G)
    }), m.prototype.readIntLE = function(h, d, A) {
        h = h >>> 0, d = d >>> 0, A || x(h, d, this.length);
        let z = this[h],
            G = 1,
            et = 0;
        for (; ++et < d && (G *= 256);) z += this[h + et] * G;
        return G *= 128, z >= G && (z -= Math.pow(2, 8 * d)), z
    }, m.prototype.readIntBE = function(h, d, A) {
        h = h >>> 0, d = d >>> 0, A || x(h, d, this.length);
        let z = d,
            G = 1,
            et = this[h + --z];
        for (; z > 0 && (G *= 256);) et += this[h + --z] * G;
        return G *= 128, et >= G && (et -= Math.pow(2, 8 * d)), et
    }, m.prototype.readInt8 = function(h, d) {
        return h = h >>> 0, d || x(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h]
    }, m.prototype.readInt16LE = function(h, d) {
        h = h >>> 0, d || x(h, 2, this.length);
        const A = this[h] | this[h + 1] << 8;
        return A & 32768 ? A | 4294901760 : A
    }, m.prototype.readInt16BE = function(h, d) {
        h = h >>> 0, d || x(h, 2, this.length);
        const A = this[h + 1] | this[h] << 8;
        return A & 32768 ? A | 4294901760 : A
    }, m.prototype.readInt32LE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24
    }, m.prototype.readInt32BE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]
    }, m.prototype.readBigInt64LE = xe(function(h) {
        h = h >>> 0, ke(h, "offset");
        const d = this[h],
            A = this[h + 7];
        (d === void 0 || A === void 0) && Lt(h, this.length - 8);
        const z = this[h + 4] + this[h + 5] * 2 ** 8 + this[h + 6] * 2 ** 16 + (A << 24);
        return (BigInt(z) << BigInt(32)) + BigInt(d + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24)
    }), m.prototype.readBigInt64BE = xe(function(h) {
        h = h >>> 0, ke(h, "offset");
        const d = this[h],
            A = this[h + 7];
        (d === void 0 || A === void 0) && Lt(h, this.length - 8);
        const z = (d << 24) + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h];
        return (BigInt(z) << BigInt(32)) + BigInt(this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + A)
    }), m.prototype.readFloatLE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), e.read(this, h, !0, 23, 4)
    }, m.prototype.readFloatBE = function(h, d) {
        return h = h >>> 0, d || x(h, 4, this.length), e.read(this, h, !1, 23, 4)
    }, m.prototype.readDoubleLE = function(h, d) {
        return h = h >>> 0, d || x(h, 8, this.length), e.read(this, h, !0, 52, 8)
    }, m.prototype.readDoubleBE = function(h, d) {
        return h = h >>> 0, d || x(h, 8, this.length), e.read(this, h, !1, 52, 8)
    };

    function M(v, h, d, A, z, G) {
        if (!m.isBuffer(v)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (h > z || h < G) throw new RangeError('"value" argument is out of bounds');
        if (d + A > v.length) throw new RangeError("Index out of range")
    }
    m.prototype.writeUintLE = m.prototype.writeUIntLE = function(h, d, A, z) {
        if (h = +h, d = d >>> 0, A = A >>> 0, !z) {
            const Bt = Math.pow(2, 8 * A) - 1;
            M(this, h, d, A, Bt, 0)
        }
        let G = 1,
            et = 0;
        for (this[d] = h & 255; ++et < A && (G *= 256);) this[d + et] = h / G & 255;
        return d + A
    }, m.prototype.writeUintBE = m.prototype.writeUIntBE = function(h, d, A, z) {
        if (h = +h, d = d >>> 0, A = A >>> 0, !z) {
            const Bt = Math.pow(2, 8 * A) - 1;
            M(this, h, d, A, Bt, 0)
        }
        let G = A - 1,
            et = 1;
        for (this[d + G] = h & 255; --G >= 0 && (et *= 256);) this[d + G] = h / et & 255;
        return d + A
    }, m.prototype.writeUint8 = m.prototype.writeUInt8 = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 1, 255, 0), this[d] = h & 255, d + 1
    }, m.prototype.writeUint16LE = m.prototype.writeUInt16LE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 2, 65535, 0), this[d] = h & 255, this[d + 1] = h >>> 8, d + 2
    }, m.prototype.writeUint16BE = m.prototype.writeUInt16BE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 2, 65535, 0), this[d] = h >>> 8, this[d + 1] = h & 255, d + 2
    }, m.prototype.writeUint32LE = m.prototype.writeUInt32LE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 4, 4294967295, 0), this[d + 3] = h >>> 24, this[d + 2] = h >>> 16, this[d + 1] = h >>> 8, this[d] = h & 255, d + 4
    }, m.prototype.writeUint32BE = m.prototype.writeUInt32BE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 4, 4294967295, 0), this[d] = h >>> 24, this[d + 1] = h >>> 16, this[d + 2] = h >>> 8, this[d + 3] = h & 255, d + 4
    };

    function K(v, h, d, A, z) {
        Pt(h, A, z, v, d, 7);
        let G = Number(h & BigInt(4294967295));
        v[d++] = G, G = G >> 8, v[d++] = G, G = G >> 8, v[d++] = G, G = G >> 8, v[d++] = G;
        let et = Number(h >> BigInt(32) & BigInt(4294967295));
        return v[d++] = et, et = et >> 8, v[d++] = et, et = et >> 8, v[d++] = et, et = et >> 8, v[d++] = et, d
    }

    function ot(v, h, d, A, z) {
        Pt(h, A, z, v, d, 7);
        let G = Number(h & BigInt(4294967295));
        v[d + 7] = G, G = G >> 8, v[d + 6] = G, G = G >> 8, v[d + 5] = G, G = G >> 8, v[d + 4] = G;
        let et = Number(h >> BigInt(32) & BigInt(4294967295));
        return v[d + 3] = et, et = et >> 8, v[d + 2] = et, et = et >> 8, v[d + 1] = et, et = et >> 8, v[d] = et, d + 8
    }
    m.prototype.writeBigUInt64LE = xe(function(h, d = 0) {
        return K(this, h, d, BigInt(0), BigInt("0xffffffffffffffff"))
    }), m.prototype.writeBigUInt64BE = xe(function(h, d = 0) {
        return ot(this, h, d, BigInt(0), BigInt("0xffffffffffffffff"))
    }), m.prototype.writeIntLE = function(h, d, A, z) {
        if (h = +h, d = d >>> 0, !z) {
            const bt = Math.pow(2, 8 * A - 1);
            M(this, h, d, A, bt - 1, -bt)
        }
        let G = 0,
            et = 1,
            Bt = 0;
        for (this[d] = h & 255; ++G < A && (et *= 256);) h < 0 && Bt === 0 && this[d + G - 1] !== 0 && (Bt = 1), this[d + G] = (h / et >> 0) - Bt & 255;
        return d + A
    }, m.prototype.writeIntBE = function(h, d, A, z) {
        if (h = +h, d = d >>> 0, !z) {
            const bt = Math.pow(2, 8 * A - 1);
            M(this, h, d, A, bt - 1, -bt)
        }
        let G = A - 1,
            et = 1,
            Bt = 0;
        for (this[d + G] = h & 255; --G >= 0 && (et *= 256);) h < 0 && Bt === 0 && this[d + G + 1] !== 0 && (Bt = 1), this[d + G] = (h / et >> 0) - Bt & 255;
        return d + A
    }, m.prototype.writeInt8 = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 1, 127, -128), h < 0 && (h = 255 + h + 1), this[d] = h & 255, d + 1
    }, m.prototype.writeInt16LE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 2, 32767, -32768), this[d] = h & 255, this[d + 1] = h >>> 8, d + 2
    }, m.prototype.writeInt16BE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 2, 32767, -32768), this[d] = h >>> 8, this[d + 1] = h & 255, d + 2
    }, m.prototype.writeInt32LE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 4, 2147483647, -2147483648), this[d] = h & 255, this[d + 1] = h >>> 8, this[d + 2] = h >>> 16, this[d + 3] = h >>> 24, d + 4
    }, m.prototype.writeInt32BE = function(h, d, A) {
        return h = +h, d = d >>> 0, A || M(this, h, d, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), this[d] = h >>> 24, this[d + 1] = h >>> 16, this[d + 2] = h >>> 8, this[d + 3] = h & 255, d + 4
    }, m.prototype.writeBigInt64LE = xe(function(h, d = 0) {
        return K(this, h, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), m.prototype.writeBigInt64BE = xe(function(h, d = 0) {
        return ot(this, h, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function ft(v, h, d, A, z, G) {
        if (d + A > v.length) throw new RangeError("Index out of range");
        if (d < 0) throw new RangeError("Index out of range")
    }

    function pt(v, h, d, A, z) {
        return h = +h, d = d >>> 0, z || ft(v, h, d, 4), e.write(v, h, d, A, 23, 4), d + 4
    }
    m.prototype.writeFloatLE = function(h, d, A) {
        return pt(this, h, d, !0, A)
    }, m.prototype.writeFloatBE = function(h, d, A) {
        return pt(this, h, d, !1, A)
    };

    function ne(v, h, d, A, z) {
        return h = +h, d = d >>> 0, z || ft(v, h, d, 8), e.write(v, h, d, A, 52, 8), d + 8
    }
    m.prototype.writeDoubleLE = function(h, d, A) {
        return ne(this, h, d, !0, A)
    }, m.prototype.writeDoubleBE = function(h, d, A) {
        return ne(this, h, d, !1, A)
    }, m.prototype.copy = function(h, d, A, z) {
        if (!m.isBuffer(h)) throw new TypeError("argument should be a Buffer");
        if (A || (A = 0), !z && z !== 0 && (z = this.length), d >= h.length && (d = h.length), d || (d = 0), z > 0 && z < A && (z = A), z === A || h.length === 0 || this.length === 0) return 0;
        if (d < 0) throw new RangeError("targetStart out of bounds");
        if (A < 0 || A >= this.length) throw new RangeError("Index out of range");
        if (z < 0) throw new RangeError("sourceEnd out of bounds");
        z > this.length && (z = this.length), h.length - d < z - A && (z = h.length - d + A);
        const G = z - A;
        return this === h && typeof i.prototype.copyWithin == "function" ? this.copyWithin(d, A, z) : i.prototype.set.call(h, this.subarray(A, z), d), G
    }, m.prototype.fill = function(h, d, A, z) {
        if (typeof h == "string") {
            if (typeof d == "string" ? (z = d, d = 0, A = this.length) : typeof A == "string" && (z = A, A = this.length), z !== void 0 && typeof z != "string") throw new TypeError("encoding must be a string");
            if (typeof z == "string" && !m.isEncoding(z)) throw new TypeError("Unknown encoding: " + z);
            if (h.length === 1) {
                const et = h.charCodeAt(0);
                (z === "utf8" && et < 128 || z === "latin1") && (h = et)
            }
        } else typeof h == "number" ? h = h & 255 : typeof h == "boolean" && (h = Number(h));
        if (d < 0 || this.length < d || this.length < A) throw new RangeError("Out of range index");
        if (A <= d) return this;
        d = d >>> 0, A = A === void 0 ? this.length : A >>> 0, h || (h = 0);
        let G;
        if (typeof h == "number")
            for (G = d; G < A; ++G) this[G] = h;
        else {
            const et = m.isBuffer(h) ? h : m.from(h, z),
                Bt = et.length;
            if (Bt === 0) throw new TypeError('The value "' + h + '" is invalid for argument "value"');
            for (G = 0; G < A - d; ++G) this[G + d] = et[G % Bt]
        }
        return this
    };
    const At = {};

    function Ot(v, h, d) {
        At[v] = class extends d {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: h.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${v}]`, this.stack, delete this.name
            }
            get code() {
                return v
            }
            set code(z) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: z,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${v}]: ${this.message}`
            }
        }
    }
    Ot("ERR_BUFFER_OUT_OF_BOUNDS", function(v) {
        return v ? `${v} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), Ot("ERR_INVALID_ARG_TYPE", function(v, h) {
        return `The "${v}" argument must be of type number. Received type ${typeof h}`
    }, TypeError), Ot("ERR_OUT_OF_RANGE", function(v, h, d) {
        let A = `The value of "${v}" is out of range.`,
            z = d;
        return Number.isInteger(d) && Math.abs(d) > 2 ** 32 ? z = nr(String(d)) : typeof d == "bigint" && (z = String(d), (d > BigInt(2) ** BigInt(32) || d < -(BigInt(2) ** BigInt(32))) && (z = nr(z)), z += "n"), A += ` It must be ${h}. Received ${z}`, A
    }, RangeError);

    function nr(v) {
        let h = "",
            d = v.length;
        const A = v[0] === "-" ? 1 : 0;
        for (; d >= A + 4; d -= 3) h = `_${v.slice(d-3,d)}${h}`;
        return `${v.slice(0,d)}${h}`
    }

    function Ht(v, h, d) {
        ke(h, "offset"), (v[h] === void 0 || v[h + d] === void 0) && Lt(h, v.length - (d + 1))
    }

    function Pt(v, h, d, A, z, G) {
        if (v > d || v < h) {
            const et = typeof h == "bigint" ? "n" : "";
            let Bt;
            throw h === 0 || h === BigInt(0) ? Bt = `>= 0${et} and < 2${et} ** ${(G+1)*8}${et}` : Bt = `>= -(2${et} ** ${(G+1)*8-1}${et}) and < 2 ** ${(G+1)*8-1}${et}`, new At.ERR_OUT_OF_RANGE("value", Bt, v)
        }
        Ht(A, z, G)
    }

    function ke(v, h) {
        if (typeof v != "number") throw new At.ERR_INVALID_ARG_TYPE(h, "number", v)
    }

    function Lt(v, h, d) {
        throw Math.floor(v) !== v ? (ke(v, d), new At.ERR_OUT_OF_RANGE("offset", "an integer", v)) : h < 0 ? new At.ERR_BUFFER_OUT_OF_BOUNDS : new At.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${h}`, v)
    }
    const Kt = /[^+/0-9A-Za-z-_]/g;

    function hr(v) {
        if (v = v.split("=")[0], v = v.trim().replace(Kt, ""), v.length < 2) return "";
        for (; v.length % 4 !== 0;) v = v + "=";
        return v
    }

    function Ft(v, h) {
        h = h || 1 / 0;
        let d;
        const A = v.length;
        let z = null;
        const G = [];
        for (let et = 0; et < A; ++et) {
            if (d = v.charCodeAt(et), d > 55295 && d < 57344) {
                if (!z) {
                    if (d > 56319) {
                        (h -= 3) > -1 && G.push(239, 191, 189);
                        continue
                    } else if (et + 1 === A) {
                        (h -= 3) > -1 && G.push(239, 191, 189);
                        continue
                    }
                    z = d;
                    continue
                }
                if (d < 56320) {
                    (h -= 3) > -1 && G.push(239, 191, 189), z = d;
                    continue
                }
                d = (z - 55296 << 10 | d - 56320) + 65536
            } else z && (h -= 3) > -1 && G.push(239, 191, 189);
            if (z = null, d < 128) {
                if ((h -= 1) < 0) break;
                G.push(d)
            } else if (d < 2048) {
                if ((h -= 2) < 0) break;
                G.push(d >> 6 | 192, d & 63 | 128)
            } else if (d < 65536) {
                if ((h -= 3) < 0) break;
                G.push(d >> 12 | 224, d >> 6 & 63 | 128, d & 63 | 128)
            } else if (d < 1114112) {
                if ((h -= 4) < 0) break;
                G.push(d >> 18 | 240, d >> 12 & 63 | 128, d >> 6 & 63 | 128, d & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return G
    }

    function Wt(v) {
        const h = [];
        for (let d = 0; d < v.length; ++d) h.push(v.charCodeAt(d) & 255);
        return h
    }

    function Vt(v, h) {
        let d, A, z;
        const G = [];
        for (let et = 0; et < v.length && !((h -= 2) < 0); ++et) d = v.charCodeAt(et), A = d >> 8, z = d % 256, G.push(z), G.push(A);
        return G
    }

    function kt(v) {
        return t.toByteArray(hr(v))
    }

    function Ut(v, h, d, A) {
        let z;
        for (z = 0; z < A && !(z + d >= h.length || z >= v.length); ++z) h[z + d] = v[z];
        return z
    }

    function fe(v, h) {
        return v instanceof h || v != null && v.constructor != null && v.constructor.name != null && v.constructor.name === h.name
    }

    function Ct(v) {
        return v !== v
    }
    const zt = function() {
        const v = "0123456789abcdef",
            h = new Array(256);
        for (let d = 0; d < 16; ++d) {
            const A = d * 16;
            for (let z = 0; z < 16; ++z) h[A + z] = v[d] + v[z]
        }
        return h
    }();

    function xe(v) {
        return typeof BigInt > "u" ? Mt : v
    }

    function Mt() {
        throw new Error("BigInt not supported")
    }
})(_i);
const be = _i.Buffer,
    St = _i.Buffer,
    fr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ai(n) {
    return n instanceof Uint8Array || ArrayBuffer.isView(n) && n.constructor.name === "Uint8Array"
}

function Nr(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n)
}

function Ue(n, ...t) {
    if (!Ai(n)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(n.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + n.length)
}

function ia(n) {
    if (typeof n != "function" || typeof n.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Nr(n.outputLen), Nr(n.blockLen)
}

function Er(n, t = !0) {
    if (n.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && n.finished) throw new Error("Hash#digest() has already been called")
}

function qo(n, t) {
    Ue(n);
    const e = t.outputLen;
    if (n.length < e) throw new Error("digestInto() expects output buffer of length at least " + e)
}

function oa(n) {
    return new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4))
}

function rr(...n) {
    for (let t = 0; t < n.length; t++) n[t].fill(0)
}

function jn(n) {
    return new DataView(n.buffer, n.byteOffset, n.byteLength)
}

function Oe(n, t) {
    return n << 32 - t | n >>> t
}
const sa = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;

function aa(n) {
    return n << 24 & 4278190080 | n << 8 & 16711680 | n >>> 8 & 65280 | n >>> 24 & 255
}

function ca(n) {
    for (let t = 0; t < n.length; t++) n[t] = aa(n[t]);
    return n
}
const Wi = sa ? n => n : ca,
    zo = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function",
    ua = Array.from({
        length: 256
    }, (n, t) => t.toString(16).padStart(2, "0"));

function xr(n) {
    if (Ue(n), zo) return n.toHex();
    let t = "";
    for (let e = 0; e < n.length; e++) t += ua[n[e]];
    return t
}
const De = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function Gi(n) {
    if (n >= De._0 && n <= De._9) return n - De._0;
    if (n >= De.A && n <= De.F) return n - (De.A - 10);
    if (n >= De.a && n <= De.f) return n - (De.a - 10)
}

function ki(n) {
    if (typeof n != "string") throw new Error("hex string expected, got " + typeof n);
    if (zo) return Uint8Array.fromHex(n);
    const t = n.length,
        e = t / 2;
    if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
    const r = new Uint8Array(e);
    for (let o = 0, i = 0; o < e; o++, i += 2) {
        const s = Gi(n.charCodeAt(i)),
            f = Gi(n.charCodeAt(i + 1));
        if (s === void 0 || f === void 0) {
            const y = n[i] + n[i + 1];
            throw new Error('hex string expected, got non-hex character "' + y + '" at index ' + i)
        }
        r[o] = s * 16 + f
    }
    return r
}

function ha(n) {
    if (typeof n != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(n))
}

function pn(n) {
    return typeof n == "string" && (n = ha(n)), Ue(n), n
}

function je(...n) {
    let t = 0;
    for (let r = 0; r < n.length; r++) {
        const o = n[r];
        Ue(o), t += o.length
    }
    const e = new Uint8Array(t);
    for (let r = 0, o = 0; r < n.length; r++) {
        const i = n[r];
        e.set(i, o), o += i.length
    }
    return e
}
class Ri {}

function gn(n) {
    const t = r => n().update(pn(r)).digest(),
        e = n();
    return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => n(), t
}

function Do(n = 32) {
    if (fr && typeof fr.getRandomValues == "function") return fr.getRandomValues(new Uint8Array(n));
    if (fr && typeof fr.randomBytes == "function") return Uint8Array.from(fr.randomBytes(n));
    throw new Error("crypto.getRandomValues must be defined")
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mi = BigInt(0),
    bi = BigInt(1);

function sr(n, t) {
    if (typeof t != "boolean") throw new Error(n + " boolean expected, got " + t)
}

function Kr(n) {
    const t = n.toString(16);
    return t.length & 1 ? "0" + t : t
}

function $o(n) {
    if (typeof n != "string") throw new Error("hex string expected, got " + typeof n);
    return n === "" ? Mi : BigInt("0x" + n)
}

function yn(n) {
    return $o(xr(n))
}

function Or(n) {
    return Ue(n), $o(xr(Uint8Array.from(n).reverse()))
}

function Ti(n, t) {
    return ki(n.toString(16).padStart(t * 2, "0"))
}

function mn(n, t) {
    return Ti(n, t).reverse()
}

function ee(n, t, e) {
    let r;
    if (typeof t == "string") try {
            r = ki(t)
        } catch (i) {
            throw new Error(n + " must be hex string or Uint8Array, cause: " + i)
        } else if (Ai(t)) r = Uint8Array.from(t);
        else throw new Error(n + " must be hex string or Uint8Array");
    const o = r.length;
    if (typeof e == "number" && o !== e) throw new Error(n + " of length " + e + " expected, got " + o);
    return r
}
const Vn = n => typeof n == "bigint" && Mi <= n;

function la(n, t, e) {
    return Vn(n) && Vn(t) && Vn(e) && t <= n && n < e
}

function mr(n, t, e, r) {
    if (!la(t, e, r)) throw new Error("expected valid " + n + ": " + e + " <= n < " + r + ", got " + t)
}

function fa(n) {
    let t;
    for (t = 0; n > Mi; n >>= bi, t += 1);
    return t
}
const wn = n => (bi << BigInt(n)) - bi;

function da(n, t, e) {
    if (typeof n != "number" || n < 2) throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
    if (typeof e != "function") throw new Error("hmacFn must be a function");
    const r = O => new Uint8Array(O),
        o = O => Uint8Array.of(O);
    let i = r(n),
        s = r(n),
        f = 0;
    const y = () => {
            i.fill(1), s.fill(0), f = 0
        },
        S = (...O) => e(s, i, ...O),
        m = (O = r(0)) => {
            s = S(o(0), O), i = S(), O.length !== 0 && (s = S(o(1), O), i = S())
        },
        U = () => {
            if (f++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let O = 0;
            const j = [];
            for (; O < t;) {
                i = S();
                const F = i.slice();
                j.push(F), O += i.length
            }
            return je(...j)
        };
    return (O, j) => {
        y(), m(O);
        let F;
        for (; !(F = j(U()));) m();
        return y(), F
    }
}

function qr(n, t, e = {}) {
    if (!n || typeof n != "object") throw new Error("expected valid options object");

    function r(o, i, s) {
        const f = n[o];
        if (s && f === void 0) return;
        const y = typeof f;
        if (y !== i || f === null) throw new Error(`param "${o}" is invalid: expected ${i}, got ${y}`)
    }
    Object.entries(t).forEach(([o, i]) => r(o, i, !1)), Object.entries(e).forEach(([o, i]) => r(o, i, !0))
}

function tn(n) {
    const t = new WeakMap;
    return (e, ...r) => {
        const o = t.get(e);
        if (o !== void 0) return o;
        const i = n(e, ...r);
        return t.set(e, i), i
    }
}
const Wr = BigInt(2 ** 32 - 1),
    ji = BigInt(32);

function pa(n, t = !1) {
    return t ? {
        h: Number(n & Wr),
        l: Number(n >> ji & Wr)
    } : {
        h: Number(n >> ji & Wr) | 0,
        l: Number(n & Wr) | 0
    }
}

function Ho(n, t = !1) {
    const e = n.length;
    let r = new Uint32Array(e),
        o = new Uint32Array(e);
    for (let i = 0; i < e; i++) {
        const {
            h: s,
            l: f
        } = pa(n[i], t);
        [r[i], o[i]] = [s, f]
    }
    return [r, o]
}
const Vi = (n, t, e) => n >>> e,
    Zi = (n, t, e) => n << 32 - e | t >>> e,
    dr = (n, t, e) => n >>> e | t << 32 - e,
    pr = (n, t, e) => n << 32 - e | t >>> e,
    Gr = (n, t, e) => n << 64 - e | t >>> e - 32,
    jr = (n, t, e) => n >>> e - 32 | t << 64 - e,
    ga = (n, t, e) => n << e | t >>> 32 - e,
    ya = (n, t, e) => t << e | n >>> 32 - e,
    ma = (n, t, e) => t << e - 32 | n >>> 64 - e,
    wa = (n, t, e) => n << e - 32 | t >>> 64 - e;

function $e(n, t, e, r) {
    const o = (t >>> 0) + (r >>> 0);
    return {
        h: n + e + (o / 2 ** 32 | 0) | 0,
        l: o | 0
    }
}
const ba = (n, t, e) => (n >>> 0) + (t >>> 0) + (e >>> 0),
    va = (n, t, e, r) => t + e + r + (n / 2 ** 32 | 0) | 0,
    Ea = (n, t, e, r) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0),
    xa = (n, t, e, r, o) => t + e + r + o + (n / 2 ** 32 | 0) | 0,
    Ba = (n, t, e, r, o) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0) + (o >>> 0),
    Sa = (n, t, e, r, o, i) => t + e + r + o + i + (n / 2 ** 32 | 0) | 0,
    _a = BigInt(0),
    Rr = BigInt(1),
    Ia = BigInt(2),
    Aa = BigInt(7),
    ka = BigInt(256),
    Ra = BigInt(113),
    Ko = [],
    Wo = [],
    Go = [];
for (let n = 0, t = Rr, e = 1, r = 0; n < 24; n++) {
    [e, r] = [r, (2 * e + 3 * r) % 5], Ko.push(2 * (5 * r + e)), Wo.push((n + 1) * (n + 2) / 2 % 64);
    let o = _a;
    for (let i = 0; i < 7; i++) t = (t << Rr ^ (t >> Aa) * Ra) % ka, t & Ia && (o ^= Rr << (Rr << BigInt(i)) - Rr);
    Go.push(o)
}
const jo = Ho(Go, !0),
    Ma = jo[0],
    Ta = jo[1],
    Yi = (n, t, e) => e > 32 ? ma(n, t, e) : ga(n, t, e),
    Xi = (n, t, e) => e > 32 ? wa(n, t, e) : ya(n, t, e);

function La(n, t = 24) {
    const e = new Uint32Array(10);
    for (let r = 24 - t; r < 24; r++) {
        for (let s = 0; s < 10; s++) e[s] = n[s] ^ n[s + 10] ^ n[s + 20] ^ n[s + 30] ^ n[s + 40];
        for (let s = 0; s < 10; s += 2) {
            const f = (s + 8) % 10,
                y = (s + 2) % 10,
                S = e[y],
                m = e[y + 1],
                U = Yi(S, m, 1) ^ e[f],
                H = Xi(S, m, 1) ^ e[f + 1];
            for (let O = 0; O < 50; O += 10) n[s + O] ^= U, n[s + O + 1] ^= H
        }
        let o = n[2],
            i = n[3];
        for (let s = 0; s < 24; s++) {
            const f = Wo[s],
                y = Yi(o, i, f),
                S = Xi(o, i, f),
                m = Ko[s];
            o = n[m], i = n[m + 1], n[m] = y, n[m + 1] = S
        }
        for (let s = 0; s < 50; s += 10) {
            for (let f = 0; f < 10; f++) e[f] = n[s + f];
            for (let f = 0; f < 10; f++) n[s + f] ^= ~e[(f + 2) % 10] & e[(f + 4) % 10]
        }
        n[0] ^= Ma[r], n[1] ^= Ta[r]
    }
    rr(e)
}
class Li extends Ri {
    constructor(t, e, r, o = !1, i = 24) {
        if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = o, this.rounds = i, Nr(r), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200), this.state32 = oa(this.state)
    }
    clone() {
        return this._cloneInto()
    }
    keccak() {
        Wi(this.state32), La(this.state32, this.rounds), Wi(this.state32), this.posOut = 0, this.pos = 0
    }
    update(t) {
        Er(this), t = pn(t), Ue(t);
        const {
            blockLen: e,
            state: r
        } = this, o = t.length;
        for (let i = 0; i < o;) {
            const s = Math.min(e - this.pos, o - i);
            for (let f = 0; f < s; f++) r[this.pos++] ^= t[i++];
            this.pos === e && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: t,
            suffix: e,
            pos: r,
            blockLen: o
        } = this;
        t[r] ^= e, (e & 128) !== 0 && r === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak()
    }
    writeInto(t) {
        Er(this, !1), Ue(t), this.finish();
        const e = this.state,
            {
                blockLen: r
            } = this;
        for (let o = 0, i = t.length; o < i;) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, i - o);
            t.set(e.subarray(this.posOut, this.posOut + s), o), this.posOut += s, o += s
        }
        return t
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t)
    }
    xof(t) {
        return Nr(t), this.xofInto(new Uint8Array(t))
    }
    digestInto(t) {
        if (qo(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, rr(this.state)
    }
    _cloneInto(t) {
        const {
            blockLen: e,
            suffix: r,
            outputLen: o,
            rounds: i,
            enableXOF: s
        } = this;
        return t || (t = new Li(e, r, o, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = o, t.enableXOF = s, t.destroyed = this.destroyed, t
    }
}
const Ua = (n, t, e) => gn(() => new Li(t, n, e)),
    Kl = Ua(1, 136, 256 / 8);

function Ca(n, t, e, r) {
    if (typeof n.setBigUint64 == "function") return n.setBigUint64(t, e, r);
    const o = BigInt(32),
        i = BigInt(4294967295),
        s = Number(e >> o & i),
        f = Number(e & i),
        y = r ? 4 : 0,
        S = r ? 0 : 4;
    n.setUint32(t + y, s, r), n.setUint32(t + S, f, r)
}

function Na(n, t, e) {
    return n & t ^ ~n & e
}

function Oa(n, t, e) {
    return n & t ^ n & e ^ t & e
}
class Vo extends Ri {
    constructor(t, e, r, o) {
        super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = o, this.buffer = new Uint8Array(t), this.view = jn(this.buffer)
    }
    update(t) {
        Er(this), t = pn(t), Ue(t);
        const {
            view: e,
            buffer: r,
            blockLen: o
        } = this, i = t.length;
        for (let s = 0; s < i;) {
            const f = Math.min(o - this.pos, i - s);
            if (f === o) {
                const y = jn(t);
                for (; o <= i - s; s += o) this.process(y, s);
                continue
            }
            r.set(t.subarray(s, s + f), this.pos), this.pos += f, s += f, this.pos === o && (this.process(e, 0), this.pos = 0)
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        Er(this), qo(t, this), this.finished = !0;
        const {
            buffer: e,
            view: r,
            blockLen: o,
            isLE: i
        } = this;
        let {
            pos: s
        } = this;
        e[s++] = 128, rr(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(r, 0), s = 0);
        for (let U = s; U < o; U++) e[U] = 0;
        Ca(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
        const f = jn(t),
            y = this.outputLen;
        if (y % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const S = y / 4,
            m = this.get();
        if (S > m.length) throw new Error("_sha2: outputLen bigger than state");
        for (let U = 0; U < S; U++) f.setUint32(4 * U, m[U], i)
    }
    digest() {
        const {
            buffer: t,
            outputLen: e
        } = this;
        this.digestInto(t);
        const r = t.slice(0, e);
        return this.destroy(), r
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: e,
            buffer: r,
            length: o,
            finished: i,
            destroyed: s,
            pos: f
        } = this;
        return t.destroyed = s, t.finished = i, t.length = o, t.pos = f, o % e && t.buffer.set(r), t
    }
    clone() {
        return this._cloneInto()
    }
}
const Ze = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    de = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]),
    pe = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]),
    Pa = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    Ye = new Uint32Array(64);
class Fa extends Vo {
    constructor(t = 32) {
        super(64, t, 8, !1), this.A = Ze[0] | 0, this.B = Ze[1] | 0, this.C = Ze[2] | 0, this.D = Ze[3] | 0, this.E = Ze[4] | 0, this.F = Ze[5] | 0, this.G = Ze[6] | 0, this.H = Ze[7] | 0
    }
    get() {
        const {
            A: t,
            B: e,
            C: r,
            D: o,
            E: i,
            F: s,
            G: f,
            H: y
        } = this;
        return [t, e, r, o, i, s, f, y]
    }
    set(t, e, r, o, i, s, f, y) {
        this.A = t | 0, this.B = e | 0, this.C = r | 0, this.D = o | 0, this.E = i | 0, this.F = s | 0, this.G = f | 0, this.H = y | 0
    }
    process(t, e) {
        for (let U = 0; U < 16; U++, e += 4) Ye[U] = t.getUint32(e, !1);
        for (let U = 16; U < 64; U++) {
            const H = Ye[U - 15],
                O = Ye[U - 2],
                j = Oe(H, 7) ^ Oe(H, 18) ^ H >>> 3,
                F = Oe(O, 17) ^ Oe(O, 19) ^ O >>> 10;
            Ye[U] = F + Ye[U - 7] + j + Ye[U - 16] | 0
        }
        let {
            A: r,
            B: o,
            C: i,
            D: s,
            E: f,
            F: y,
            G: S,
            H: m
        } = this;
        for (let U = 0; U < 64; U++) {
            const H = Oe(f, 6) ^ Oe(f, 11) ^ Oe(f, 25),
                O = m + H + Na(f, y, S) + Pa[U] + Ye[U] | 0,
                F = (Oe(r, 2) ^ Oe(r, 13) ^ Oe(r, 22)) + Oa(r, o, i) | 0;
            m = S, S = y, y = f, f = s + O | 0, s = i, i = o, o = r, r = O + F | 0
        }
        r = r + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, f = f + this.E | 0, y = y + this.F | 0, S = S + this.G | 0, m = m + this.H | 0, this.set(r, o, i, s, f, y, S, m)
    }
    roundClean() {
        rr(Ye)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), rr(this.buffer)
    }
}
const Zo = Ho(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(n => BigInt(n))),
    qa = Zo[0],
    za = Zo[1],
    Xe = new Uint32Array(80),
    Je = new Uint32Array(80);
class Yo extends Vo {
    constructor(t = 64) {
        super(128, t, 16, !1), this.Ah = pe[0] | 0, this.Al = pe[1] | 0, this.Bh = pe[2] | 0, this.Bl = pe[3] | 0, this.Ch = pe[4] | 0, this.Cl = pe[5] | 0, this.Dh = pe[6] | 0, this.Dl = pe[7] | 0, this.Eh = pe[8] | 0, this.El = pe[9] | 0, this.Fh = pe[10] | 0, this.Fl = pe[11] | 0, this.Gh = pe[12] | 0, this.Gl = pe[13] | 0, this.Hh = pe[14] | 0, this.Hl = pe[15] | 0
    }
    get() {
        const {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: o,
            Ch: i,
            Cl: s,
            Dh: f,
            Dl: y,
            Eh: S,
            El: m,
            Fh: U,
            Fl: H,
            Gh: O,
            Gl: j,
            Hh: F,
            Hl: C
        } = this;
        return [t, e, r, o, i, s, f, y, S, m, U, H, O, j, F, C]
    }
    set(t, e, r, o, i, s, f, y, S, m, U, H, O, j, F, C) {
        this.Ah = t | 0, this.Al = e | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = s | 0, this.Dh = f | 0, this.Dl = y | 0, this.Eh = S | 0, this.El = m | 0, this.Fh = U | 0, this.Fl = H | 0, this.Gh = O | 0, this.Gl = j | 0, this.Hh = F | 0, this.Hl = C | 0
    }
    process(t, e) {
        for (let W = 0; W < 16; W++, e += 4) Xe[W] = t.getUint32(e), Je[W] = t.getUint32(e += 4);
        for (let W = 16; W < 80; W++) {
            const st = Xe[W - 15] | 0,
                X = Je[W - 15] | 0,
                nt = dr(st, X, 1) ^ dr(st, X, 8) ^ Vi(st, X, 7),
                it = pr(st, X, 1) ^ pr(st, X, 8) ^ Zi(st, X, 7),
                tt = Xe[W - 2] | 0,
                T = Je[W - 2] | 0,
                L = dr(tt, T, 19) ^ Gr(tt, T, 61) ^ Vi(tt, T, 6),
                N = pr(tt, T, 19) ^ jr(tt, T, 61) ^ Zi(tt, T, 6),
                B = Ea(it, N, Je[W - 7], Je[W - 16]),
                b = xa(B, nt, L, Xe[W - 7], Xe[W - 16]);
            Xe[W] = b | 0, Je[W] = B | 0
        }
        let {
            Ah: r,
            Al: o,
            Bh: i,
            Bl: s,
            Ch: f,
            Cl: y,
            Dh: S,
            Dl: m,
            Eh: U,
            El: H,
            Fh: O,
            Fl: j,
            Gh: F,
            Gl: C,
            Hh: Q,
            Hl: V
        } = this;
        for (let W = 0; W < 80; W++) {
            const st = dr(U, H, 14) ^ dr(U, H, 18) ^ Gr(U, H, 41),
                X = pr(U, H, 14) ^ pr(U, H, 18) ^ jr(U, H, 41),
                nt = U & O ^ ~U & F,
                it = H & j ^ ~H & C,
                tt = Ba(V, X, it, za[W], Je[W]),
                T = Sa(tt, Q, st, nt, qa[W], Xe[W]),
                L = tt | 0,
                N = dr(r, o, 28) ^ Gr(r, o, 34) ^ Gr(r, o, 39),
                B = pr(r, o, 28) ^ jr(r, o, 34) ^ jr(r, o, 39),
                b = r & i ^ r & f ^ i & f,
                a = o & s ^ o & y ^ s & y;
            Q = F | 0, V = C | 0, F = O | 0, C = j | 0, O = U | 0, j = H | 0, {
                h: U,
                l: H
            } = $e(S | 0, m | 0, T | 0, L | 0), S = f | 0, m = y | 0, f = i | 0, y = s | 0, i = r | 0, s = o | 0;
            const g = ba(L, B, a);
            r = va(g, T, N, b), o = g | 0
        }({
            h: r,
            l: o
        } = $e(this.Ah | 0, this.Al | 0, r | 0, o | 0)), {
            h: i,
            l: s
        } = $e(this.Bh | 0, this.Bl | 0, i | 0, s | 0), {
            h: f,
            l: y
        } = $e(this.Ch | 0, this.Cl | 0, f | 0, y | 0), {
            h: S,
            l: m
        } = $e(this.Dh | 0, this.Dl | 0, S | 0, m | 0), {
            h: U,
            l: H
        } = $e(this.Eh | 0, this.El | 0, U | 0, H | 0), {
            h: O,
            l: j
        } = $e(this.Fh | 0, this.Fl | 0, O | 0, j | 0), {
            h: F,
            l: C
        } = $e(this.Gh | 0, this.Gl | 0, F | 0, C | 0), {
            h: Q,
            l: V
        } = $e(this.Hh | 0, this.Hl | 0, Q | 0, V | 0), this.set(r, o, i, s, f, y, S, m, U, H, O, j, F, C, Q, V)
    }
    roundClean() {
        rr(Xe, Je)
    }
    destroy() {
        rr(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class Da extends Yo {
    constructor() {
        super(48), this.Ah = de[0] | 0, this.Al = de[1] | 0, this.Bh = de[2] | 0, this.Bl = de[3] | 0, this.Ch = de[4] | 0, this.Cl = de[5] | 0, this.Dh = de[6] | 0, this.Dl = de[7] | 0, this.Eh = de[8] | 0, this.El = de[9] | 0, this.Fh = de[10] | 0, this.Fl = de[11] | 0, this.Gh = de[12] | 0, this.Gl = de[13] | 0, this.Hh = de[14] | 0, this.Hl = de[15] | 0
    }
}
const Xo = gn(() => new Fa),
    $a = gn(() => new Yo),
    Wl = gn(() => new Da),
    Ji = Xo;
class Jo extends Ri {
    constructor(t, e) {
        super(), this.finished = !1, this.destroyed = !1, ia(t);
        const r = pn(e);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const o = this.blockLen,
            i = new Uint8Array(o);
        i.set(r.length > o ? t.create().update(r).digest() : r);
        for (let s = 0; s < i.length; s++) i[s] ^= 54;
        this.iHash.update(i), this.oHash = t.create();
        for (let s = 0; s < i.length; s++) i[s] ^= 106;
        this.oHash.update(i), rr(i)
    }
    update(t) {
        return Er(this), this.iHash.update(t), this
    }
    digestInto(t) {
        Er(this), Ue(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: e,
            iHash: r,
            finished: o,
            destroyed: i,
            blockLen: s,
            outputLen: f
        } = this;
        return t = t, t.finished = o, t.destroyed = i, t.blockLen = s, t.outputLen = f, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
    }
    clone() {
        return this._cloneInto()
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const Qo = (n, t, e) => new Jo(n, t).update(e).digest();
Qo.create = (n, t) => new Jo(n, t); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Be = BigInt(0),
    le = BigInt(1),
    ir = BigInt(2),
    Ha = BigInt(3),
    ts = BigInt(4),
    es = BigInt(5),
    rs = BigInt(8);

function re(n, t) {
    const e = n % t;
    return e >= Be ? e : t + e
}

function Qt(n, t, e) {
    let r = n;
    for (; t-- > Be;) r *= r, r %= e;
    return r
}

function Qi(n, t) {
    if (n === Be) throw new Error("invert: expected non-zero number");
    if (t <= Be) throw new Error("invert: expected positive modulus, got " + t);
    let e = re(n, t),
        r = t,
        o = Be,
        i = le;
    for (; e !== Be;) {
        const f = r / e,
            y = r % e,
            S = o - i * f;
        r = e, e = y, o = i, i = S
    }
    if (r !== le) throw new Error("invert: does not exist");
    return re(o, t)
}

function ns(n, t) {
    const e = (n.ORDER + le) / ts,
        r = n.pow(t, e);
    if (!n.eql(n.sqr(r), t)) throw new Error("Cannot find square root");
    return r
}

function Ka(n, t) {
    const e = (n.ORDER - es) / rs,
        r = n.mul(t, ir),
        o = n.pow(r, e),
        i = n.mul(t, o),
        s = n.mul(n.mul(i, ir), o),
        f = n.mul(i, n.sub(s, n.ONE));
    if (!n.eql(n.sqr(f), t)) throw new Error("Cannot find square root");
    return f
}

function Wa(n) {
    if (n < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let t = n - le,
        e = 0;
    for (; t % ir === Be;) t /= ir, e++;
    let r = ir;
    const o = Ir(n);
    for (; to(o, r) === 1;)
        if (r++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (e === 1) return ns;
    let i = o.pow(r, t);
    const s = (t + le) / ir;
    return function(y, S) {
        if (y.is0(S)) return S;
        if (to(y, S) !== 1) throw new Error("Cannot find square root");
        let m = e,
            U = y.mul(y.ONE, i),
            H = y.pow(S, t),
            O = y.pow(S, s);
        for (; !y.eql(H, y.ONE);) {
            if (y.is0(H)) return y.ZERO;
            let j = 1,
                F = y.sqr(H);
            for (; !y.eql(F, y.ONE);)
                if (j++, F = y.sqr(F), j === m) throw new Error("Cannot find square root");
            const C = le << BigInt(m - j - 1),
                Q = y.pow(U, C);
            m = j, U = y.sqr(Q), H = y.mul(H, U), O = y.mul(O, Q)
        }
        return O
    }
}

function Ga(n) {
    return n % ts === Ha ? ns : n % rs === es ? Ka : Wa(n)
}
const ja = (n, t) => (re(n, t) & le) === le,
    Va = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function Za(n) {
    const t = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number"
        },
        e = Va.reduce((r, o) => (r[o] = "function", r), t);
    return qr(n, e), n
}

function Ya(n, t, e) {
    if (e < Be) throw new Error("invalid exponent, negatives unsupported");
    if (e === Be) return n.ONE;
    if (e === le) return t;
    let r = n.ONE,
        o = t;
    for (; e > Be;) e & le && (r = n.mul(r, o)), o = n.sqr(o), e >>= le;
    return r
}

function is(n, t, e = !1) {
    const r = new Array(t.length).fill(e ? n.ZERO : void 0),
        o = t.reduce((s, f, y) => n.is0(f) ? s : (r[y] = s, n.mul(s, f)), n.ONE),
        i = n.inv(o);
    return t.reduceRight((s, f, y) => n.is0(f) ? s : (r[y] = n.mul(s, r[y]), n.mul(s, f)), i), r
}

function to(n, t) {
    const e = (n.ORDER - le) / ir,
        r = n.pow(t, e),
        o = n.eql(r, n.ONE),
        i = n.eql(r, n.ZERO),
        s = n.eql(r, n.neg(n.ONE));
    if (!o && !i && !s) throw new Error("invalid Legendre symbol result");
    return o ? 1 : i ? 0 : -1
}

function Xa(n, t) {
    t !== void 0 && Nr(t);
    const e = t !== void 0 ? t : n.toString(2).length,
        r = Math.ceil(e / 8);
    return {
        nBitLength: e,
        nByteLength: r
    }
}

function Ir(n, t, e = !1, r = {}) {
    if (n <= Be) throw new Error("invalid field: expected ORDER > 0, got " + n);
    let o, i;
    if (typeof t == "object" && t != null) {
        if (r.sqrt || e) throw new Error("cannot specify opts in two arguments");
        const m = t;
        m.BITS && (o = m.BITS), m.sqrt && (i = m.sqrt), typeof m.isLE == "boolean" && (e = m.isLE)
    } else typeof t == "number" && (o = t), r.sqrt && (i = r.sqrt);
    const {
        nBitLength: s,
        nByteLength: f
    } = Xa(n, o);
    if (f > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let y;
    const S = Object.freeze({
        ORDER: n,
        isLE: e,
        BITS: s,
        BYTES: f,
        MASK: wn(s),
        ZERO: Be,
        ONE: le,
        create: m => re(m, n),
        isValid: m => {
            if (typeof m != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof m);
            return Be <= m && m < n
        },
        is0: m => m === Be,
        isValidNot0: m => !S.is0(m) && S.isValid(m),
        isOdd: m => (m & le) === le,
        neg: m => re(-m, n),
        eql: (m, U) => m === U,
        sqr: m => re(m * m, n),
        add: (m, U) => re(m + U, n),
        sub: (m, U) => re(m - U, n),
        mul: (m, U) => re(m * U, n),
        pow: (m, U) => Ya(S, m, U),
        div: (m, U) => re(m * Qi(U, n), n),
        sqrN: m => m * m,
        addN: (m, U) => m + U,
        subN: (m, U) => m - U,
        mulN: (m, U) => m * U,
        inv: m => Qi(m, n),
        sqrt: i || (m => (y || (y = Ga(n)), y(S, m))),
        toBytes: m => e ? mn(m, f) : Ti(m, f),
        fromBytes: m => {
            if (m.length !== f) throw new Error("Field.fromBytes: expected " + f + " bytes, got " + m.length);
            return e ? Or(m) : yn(m)
        },
        invertBatch: m => is(S, m),
        cmov: (m, U, H) => H ? U : m
    });
    return Object.freeze(S)
}

function os(n) {
    if (typeof n != "bigint") throw new Error("field order must be bigint");
    const t = n.toString(2).length;
    return Math.ceil(t / 8)
}

function ss(n) {
    const t = os(n);
    return t + Math.ceil(t / 2)
}

function Ja(n, t, e = !1) {
    const r = n.length,
        o = os(t),
        i = ss(t);
    if (r < 16 || r < i || r > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + r);
    const s = e ? Or(n) : yn(n),
        f = re(s, t - le) + le;
    return e ? mn(f, o) : Ti(f, o)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Br = BigInt(0),
    or = BigInt(1);

function Lr(n, t) {
    const e = t.negate();
    return n ? e : t
}

function as(n, t, e) {
    const r = t === "pz" ? s => s.pz : s => s.ez,
        o = is(n.Fp, e.map(r));
    return e.map((s, f) => s.toAffine(o[f])).map(n.fromAffine)
}

function cs(n, t) {
    if (!Number.isSafeInteger(n) || n <= 0 || n > t) throw new Error("invalid window size, expected [1.." + t + "], got W=" + n)
}

function Zn(n, t) {
    cs(n, t);
    const e = Math.ceil(t / n) + 1,
        r = 2 ** (n - 1),
        o = 2 ** n,
        i = wn(n),
        s = BigInt(n);
    return {
        windows: e,
        windowSize: r,
        mask: i,
        maxNumber: o,
        shiftBy: s
    }
}

function eo(n, t, e) {
    const {
        windowSize: r,
        mask: o,
        maxNumber: i,
        shiftBy: s
    } = e;
    let f = Number(n & o),
        y = n >> s;
    f > r && (f -= i, y += or);
    const S = t * r,
        m = S + Math.abs(f) - 1,
        U = f === 0,
        H = f < 0,
        O = t % 2 !== 0;
    return {
        nextN: y,
        offset: m,
        isZero: U,
        isNeg: H,
        isNegF: O,
        offsetF: S
    }
}

function Qa(n, t) {
    if (!Array.isArray(n)) throw new Error("array expected");
    n.forEach((e, r) => {
        if (!(e instanceof t)) throw new Error("invalid point at index " + r)
    })
}

function tc(n, t) {
    if (!Array.isArray(n)) throw new Error("array of scalars expected");
    n.forEach((e, r) => {
        if (!t.isValid(e)) throw new Error("invalid scalar at index " + r)
    })
}
const Yn = new WeakMap,
    us = new WeakMap;

function Xn(n) {
    return us.get(n) || 1
}

function ro(n) {
    if (n !== Br) throw new Error("invalid wNAF")
}

function hs(n, t) {
    return {
        constTimeNegate: Lr,
        hasPrecomputes(e) {
            return Xn(e) !== 1
        },
        unsafeLadder(e, r, o = n.ZERO) {
            let i = e;
            for (; r > Br;) r & or && (o = o.add(i)), i = i.double(), r >>= or;
            return o
        },
        precomputeWindow(e, r) {
            const {
                windows: o,
                windowSize: i
            } = Zn(r, t), s = [];
            let f = e,
                y = f;
            for (let S = 0; S < o; S++) {
                y = f, s.push(y);
                for (let m = 1; m < i; m++) y = y.add(f), s.push(y);
                f = y.double()
            }
            return s
        },
        wNAF(e, r, o) {
            let i = n.ZERO,
                s = n.BASE;
            const f = Zn(e, t);
            for (let y = 0; y < f.windows; y++) {
                const {
                    nextN: S,
                    offset: m,
                    isZero: U,
                    isNeg: H,
                    isNegF: O,
                    offsetF: j
                } = eo(o, y, f);
                o = S, U ? s = s.add(Lr(O, r[j])) : i = i.add(Lr(H, r[m]))
            }
            return ro(o), {
                p: i,
                f: s
            }
        },
        wNAFUnsafe(e, r, o, i = n.ZERO) {
            const s = Zn(e, t);
            for (let f = 0; f < s.windows && o !== Br; f++) {
                const {
                    nextN: y,
                    offset: S,
                    isZero: m,
                    isNeg: U
                } = eo(o, f, s);
                if (o = y, !m) {
                    const H = r[S];
                    i = i.add(U ? H.negate() : H)
                }
            }
            return ro(o), i
        },
        getPrecomputes(e, r, o) {
            let i = Yn.get(r);
            return i || (i = this.precomputeWindow(r, e), e !== 1 && (typeof o == "function" && (i = o(i)), Yn.set(r, i))), i
        },
        wNAFCached(e, r, o) {
            const i = Xn(e);
            return this.wNAF(i, this.getPrecomputes(i, e, o), r)
        },
        wNAFCachedUnsafe(e, r, o, i) {
            const s = Xn(e);
            return s === 1 ? this.unsafeLadder(e, r, i) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, o), r, i)
        },
        setWindowSize(e, r) {
            cs(r, t), us.set(e, r), Yn.delete(e)
        }
    }
}

function ec(n, t, e, r) {
    let o = t,
        i = n.ZERO,
        s = n.ZERO;
    for (; e > Br || r > Br;) e & or && (i = i.add(o)), r & or && (s = s.add(o)), o = o.double(), e >>= or, r >>= or;
    return {
        p1: i,
        p2: s
    }
}

function ls(n, t, e, r) {
    Qa(e, n), tc(r, t);
    const o = e.length,
        i = r.length;
    if (o !== i) throw new Error("arrays of points and scalars must have equal length");
    const s = n.ZERO,
        f = fa(BigInt(o));
    let y = 1;
    f > 12 ? y = f - 3 : f > 4 ? y = f - 2 : f > 0 && (y = 2);
    const S = wn(y),
        m = new Array(Number(S) + 1).fill(s),
        U = Math.floor((t.BITS - 1) / y) * y;
    let H = s;
    for (let O = U; O >= 0; O -= y) {
        m.fill(s);
        for (let F = 0; F < i; F++) {
            const C = r[F],
                Q = Number(C >> BigInt(O) & S);
            m[Q] = m[Q].add(e[F])
        }
        let j = s;
        for (let F = m.length - 1, C = s; F > 0; F--) C = C.add(m[F]), j = j.add(C);
        if (H = H.add(j), O !== 0)
            for (let F = 0; F < y; F++) H = H.double()
    }
    return H
}

function no(n, t) {
    if (t) {
        if (t.ORDER !== n) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
        return Za(t), t
    } else return Ir(n)
}

function fs(n, t, e = {}) {
    if (!t || typeof t != "object") throw new Error(`expected valid ${n} CURVE object`);
    for (const f of ["p", "n", "h"]) {
        const y = t[f];
        if (!(typeof y == "bigint" && y > Br)) throw new Error(`CURVE.${f} must be positive bigint`)
    }
    const r = no(t.p, e.Fp),
        o = no(t.n, e.Fn),
        s = ["Gx", "Gy", "a", n === "weierstrass" ? "b" : "d"];
    for (const f of s)
        if (!r.isValid(t[f])) throw new Error(`CURVE.${f} must be valid field element of CURVE.Fp`);
    return {
        Fp: r,
        Fn: o
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function io(n) {
    n.lowS !== void 0 && sr("lowS", n.lowS), n.prehash !== void 0 && sr("prehash", n.prehash)
}
class rc extends Error {
    constructor(t = "") {
        super(t)
    }
}
const He = {
        Err: rc,
        _tlv: {
            encode: (n, t) => {
                const {
                    Err: e
                } = He;
                if (n < 0 || n > 256) throw new e("tlv.encode: wrong tag");
                if (t.length & 1) throw new e("tlv.encode: unpadded data");
                const r = t.length / 2,
                    o = Kr(r);
                if (o.length / 2 & 128) throw new e("tlv.encode: long form length too big");
                const i = r > 127 ? Kr(o.length / 2 | 128) : "";
                return Kr(n) + i + o + t
            },
            decode(n, t) {
                const {
                    Err: e
                } = He;
                let r = 0;
                if (n < 0 || n > 256) throw new e("tlv.encode: wrong tag");
                if (t.length < 2 || t[r++] !== n) throw new e("tlv.decode: wrong tlv");
                const o = t[r++],
                    i = !!(o & 128);
                let s = 0;
                if (!i) s = o;
                else {
                    const y = o & 127;
                    if (!y) throw new e("tlv.decode(long): indefinite length not supported");
                    if (y > 4) throw new e("tlv.decode(long): byte length is too big");
                    const S = t.subarray(r, r + y);
                    if (S.length !== y) throw new e("tlv.decode: length bytes not complete");
                    if (S[0] === 0) throw new e("tlv.decode(long): zero leftmost byte");
                    for (const m of S) s = s << 8 | m;
                    if (r += y, s < 128) throw new e("tlv.decode(long): not minimal encoding")
                }
                const f = t.subarray(r, r + s);
                if (f.length !== s) throw new e("tlv.decode: wrong value length");
                return {
                    v: f,
                    l: t.subarray(r + s)
                }
            }
        },
        _int: {
            encode(n) {
                const {
                    Err: t
                } = He;
                if (n < Ur) throw new t("integer: negative integers are not allowed");
                let e = Kr(n);
                if (Number.parseInt(e[0], 16) & 8 && (e = "00" + e), e.length & 1) throw new t("unexpected DER parsing assertion: unpadded hex");
                return e
            },
            decode(n) {
                const {
                    Err: t
                } = He;
                if (n[0] & 128) throw new t("invalid signature integer: negative");
                if (n[0] === 0 && !(n[1] & 128)) throw new t("invalid signature integer: unnecessary leading zero");
                return yn(n)
            }
        },
        toSig(n) {
            const {
                Err: t,
                _int: e,
                _tlv: r
            } = He, o = ee("signature", n), {
                v: i,
                l: s
            } = r.decode(48, o);
            if (s.length) throw new t("invalid signature: left bytes after parsing");
            const {
                v: f,
                l: y
            } = r.decode(2, i), {
                v: S,
                l: m
            } = r.decode(2, y);
            if (m.length) throw new t("invalid signature: left bytes after parsing");
            return {
                r: e.decode(f),
                s: e.decode(S)
            }
        },
        hexFromSig(n) {
            const {
                _tlv: t,
                _int: e
            } = He, r = t.encode(2, e.encode(n.r)), o = t.encode(2, e.encode(n.s)), i = r + o;
            return t.encode(48, i)
        }
    },
    Ur = BigInt(0),
    Cr = BigInt(1),
    nc = BigInt(2),
    Vr = BigInt(3),
    ic = BigInt(4);

function oc(n, t, e) {
    function r(o) {
        const i = n.sqr(o),
            s = n.mul(i, o);
        return n.add(n.add(s, n.mul(o, t)), e)
    }
    return r
}

function ds(n, t, e) {
    const {
        BYTES: r
    } = n;

    function o(i) {
        let s;
        if (typeof i == "bigint") s = i;
        else {
            let f = ee("private key", i);
            if (t) {
                if (!t.includes(f.length * 2)) throw new Error("invalid private key");
                const y = new Uint8Array(r);
                y.set(f, y.length - f.length), f = y
            }
            try {
                s = n.fromBytes(f)
            } catch {
                throw new Error(`invalid private key: expected ui8a of size ${r}, got ${typeof i}`)
            }
        }
        if (e && (s = n.create(s)), !n.isValidNot0(s)) throw new Error("invalid private key: out of range [1..N-1]");
        return s
    }
    return o
}

function sc(n, t = {}) {
    const {
        Fp: e,
        Fn: r
    } = fs("weierstrass", n, t), {
        h: o,
        n: i
    } = n;
    qr(t, {}, {
        allowInfinityPoint: "boolean",
        clearCofactor: "function",
        isTorsionFree: "function",
        fromBytes: "function",
        toBytes: "function",
        endo: "object",
        wrapPrivateKey: "boolean"
    });
    const {
        endo: s
    } = t;
    if (s && (!e.is0(n.a) || typeof s.beta != "bigint" || typeof s.splitScalar != "function")) throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');

    function f() {
        if (!e.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()")
    }

    function y(tt, T, L) {
        const {
            x: N,
            y: B
        } = T.toAffine(), b = e.toBytes(N);
        if (sr("isCompressed", L), L) {
            f();
            const a = !e.isOdd(B);
            return je(ps(a), b)
        } else return je(Uint8Array.of(4), b, e.toBytes(B))
    }

    function S(tt) {
        Ue(tt);
        const T = e.BYTES,
            L = T + 1,
            N = 2 * T + 1,
            B = tt.length,
            b = tt[0],
            a = tt.subarray(1);
        if (B === L && (b === 2 || b === 3)) {
            const g = e.fromBytes(a);
            if (!e.isValid(g)) throw new Error("bad point: is not on curve, wrong x");
            const w = H(g);
            let _;
            try {
                _ = e.sqrt(w)
            } catch (D) {
                const I = D instanceof Error ? ": " + D.message : "";
                throw new Error("bad point: is not on curve, sqrt error" + I)
            }
            f();
            const R = e.isOdd(_);
            return (b & 1) === 1 !== R && (_ = e.neg(_)), {
                x: g,
                y: _
            }
        } else if (B === N && b === 4) {
            const g = e.fromBytes(a.subarray(T * 0, T * 1)),
                w = e.fromBytes(a.subarray(T * 1, T * 2));
            if (!O(g, w)) throw new Error("bad point: is not on curve");
            return {
                x: g,
                y: w
            }
        } else throw new Error(`bad point: got length ${B}, expected compressed=${L} or uncompressed=${N}`)
    }
    const m = t.toBytes || y,
        U = t.fromBytes || S,
        H = oc(e, n.a, n.b);

    function O(tt, T) {
        const L = e.sqr(T),
            N = H(tt);
        return e.eql(L, N)
    }
    if (!O(n.Gx, n.Gy)) throw new Error("bad curve params: generator point");
    const j = e.mul(e.pow(n.a, Vr), ic),
        F = e.mul(e.sqr(n.b), BigInt(27));
    if (e.is0(e.add(j, F))) throw new Error("bad curve params: a or b");

    function C(tt, T, L = !1) {
        if (!e.isValid(T) || L && e.is0(T)) throw new Error(`bad point coordinate ${tt}`);
        return T
    }

    function Q(tt) {
        if (!(tt instanceof X)) throw new Error("ProjectivePoint expected")
    }
    const V = tn((tt, T) => {
            const {
                px: L,
                py: N,
                pz: B
            } = tt;
            if (e.eql(B, e.ONE)) return {
                x: L,
                y: N
            };
            const b = tt.is0();
            T == null && (T = b ? e.ONE : e.inv(B));
            const a = e.mul(L, T),
                g = e.mul(N, T),
                w = e.mul(B, T);
            if (b) return {
                x: e.ZERO,
                y: e.ZERO
            };
            if (!e.eql(w, e.ONE)) throw new Error("invZ was invalid");
            return {
                x: a,
                y: g
            }
        }),
        W = tn(tt => {
            if (tt.is0()) {
                if (t.allowInfinityPoint && !e.is0(tt.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x: T,
                y: L
            } = tt.toAffine();
            if (!e.isValid(T) || !e.isValid(L)) throw new Error("bad point: x or y not field elements");
            if (!O(T, L)) throw new Error("bad point: equation left != right");
            if (!tt.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
            return !0
        });

    function st(tt, T, L, N, B) {
        return L = new X(e.mul(L.px, tt), L.py, L.pz), T = Lr(N, T), L = Lr(B, L), T.add(L)
    }
    class X {
        constructor(T, L, N) {
            this.px = C("x", T), this.py = C("y", L, !0), this.pz = C("z", N), Object.freeze(this)
        }
        static fromAffine(T) {
            const {
                x: L,
                y: N
            } = T || {};
            if (!T || !e.isValid(L) || !e.isValid(N)) throw new Error("invalid affine point");
            if (T instanceof X) throw new Error("projective point not allowed");
            return e.is0(L) && e.is0(N) ? X.ZERO : new X(L, N, e.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(T) {
            return as(X, "pz", T)
        }
        static fromBytes(T) {
            return Ue(T), X.fromHex(T)
        }
        static fromHex(T) {
            const L = X.fromAffine(U(ee("pointHex", T)));
            return L.assertValidity(), L
        }
        static fromPrivateKey(T) {
            const L = ds(r, t.allowedPrivateKeyLengths, t.wrapPrivateKey);
            return X.BASE.multiply(L(T))
        }
        static msm(T, L) {
            return ls(X, r, T, L)
        }
        precompute(T = 8, L = !0) {
            return it.setWindowSize(this, T), L || this.multiply(Vr), this
        }
        _setWindowSize(T) {
            this.precompute(T)
        }
        assertValidity() {
            W(this)
        }
        hasEvenY() {
            const {
                y: T
            } = this.toAffine();
            if (!e.isOdd) throw new Error("Field doesn't support isOdd");
            return !e.isOdd(T)
        }
        equals(T) {
            Q(T);
            const {
                px: L,
                py: N,
                pz: B
            } = this, {
                px: b,
                py: a,
                pz: g
            } = T, w = e.eql(e.mul(L, g), e.mul(b, B)), _ = e.eql(e.mul(N, g), e.mul(a, B));
            return w && _
        }
        negate() {
            return new X(this.px, e.neg(this.py), this.pz)
        }
        double() {
            const {
                a: T,
                b: L
            } = n, N = e.mul(L, Vr), {
                px: B,
                py: b,
                pz: a
            } = this;
            let g = e.ZERO,
                w = e.ZERO,
                _ = e.ZERO,
                R = e.mul(B, B),
                q = e.mul(b, b),
                D = e.mul(a, a),
                I = e.mul(B, b);
            return I = e.add(I, I), _ = e.mul(B, a), _ = e.add(_, _), g = e.mul(T, _), w = e.mul(N, D), w = e.add(g, w), g = e.sub(q, w), w = e.add(q, w), w = e.mul(g, w), g = e.mul(I, g), _ = e.mul(N, _), D = e.mul(T, D), I = e.sub(R, D), I = e.mul(T, I), I = e.add(I, _), _ = e.add(R, R), R = e.add(_, R), R = e.add(R, D), R = e.mul(R, I), w = e.add(w, R), D = e.mul(b, a), D = e.add(D, D), R = e.mul(D, I), g = e.sub(g, R), _ = e.mul(D, q), _ = e.add(_, _), _ = e.add(_, _), new X(g, w, _)
        }
        add(T) {
            Q(T);
            const {
                px: L,
                py: N,
                pz: B
            } = this, {
                px: b,
                py: a,
                pz: g
            } = T;
            let w = e.ZERO,
                _ = e.ZERO,
                R = e.ZERO;
            const q = n.a,
                D = e.mul(n.b, Vr);
            let I = e.mul(L, b),
                c = e.mul(N, a),
                u = e.mul(B, g),
                x = e.add(L, N),
                M = e.add(b, a);
            x = e.mul(x, M), M = e.add(I, c), x = e.sub(x, M), M = e.add(L, B);
            let K = e.add(b, g);
            return M = e.mul(M, K), K = e.add(I, u), M = e.sub(M, K), K = e.add(N, B), w = e.add(a, g), K = e.mul(K, w), w = e.add(c, u), K = e.sub(K, w), R = e.mul(q, M), w = e.mul(D, u), R = e.add(w, R), w = e.sub(c, R), R = e.add(c, R), _ = e.mul(w, R), c = e.add(I, I), c = e.add(c, I), u = e.mul(q, u), M = e.mul(D, M), c = e.add(c, u), u = e.sub(I, u), u = e.mul(q, u), M = e.add(M, u), I = e.mul(c, M), _ = e.add(_, I), I = e.mul(K, M), w = e.mul(x, w), w = e.sub(w, I), I = e.mul(x, c), R = e.mul(K, R), R = e.add(R, I), new X(w, _, R)
        }
        subtract(T) {
            return this.add(T.negate())
        }
        is0() {
            return this.equals(X.ZERO)
        }
        multiply(T) {
            const {
                endo: L
            } = t;
            if (!r.isValidNot0(T)) throw new Error("invalid scalar: out of range");
            let N, B;
            const b = a => it.wNAFCached(this, a, X.normalizeZ);
            if (L) {
                const {
                    k1neg: a,
                    k1: g,
                    k2neg: w,
                    k2: _
                } = L.splitScalar(T), {
                    p: R,
                    f: q
                } = b(g), {
                    p: D,
                    f: I
                } = b(_);
                B = q.add(I), N = st(L.beta, R, D, a, w)
            } else {
                const {
                    p: a,
                    f: g
                } = b(T);
                N = a, B = g
            }
            return X.normalizeZ([N, B])[0]
        }
        multiplyUnsafe(T) {
            const {
                endo: L
            } = t, N = this;
            if (!r.isValid(T)) throw new Error("invalid scalar: out of range");
            if (T === Ur || N.is0()) return X.ZERO;
            if (T === Cr) return N;
            if (it.hasPrecomputes(this)) return this.multiply(T);
            if (L) {
                const {
                    k1neg: B,
                    k1: b,
                    k2neg: a,
                    k2: g
                } = L.splitScalar(T), {
                    p1: w,
                    p2: _
                } = ec(X, N, b, g);
                return st(L.beta, w, _, B, a)
            } else return it.wNAFCachedUnsafe(N, T)
        }
        multiplyAndAddUnsafe(T, L, N) {
            const B = this.multiplyUnsafe(L).add(T.multiplyUnsafe(N));
            return B.is0() ? void 0 : B
        }
        toAffine(T) {
            return V(this, T)
        }
        isTorsionFree() {
            const {
                isTorsionFree: T
            } = t;
            return o === Cr ? !0 : T ? T(X, this) : it.wNAFCachedUnsafe(this, i).is0()
        }
        clearCofactor() {
            const {
                clearCofactor: T
            } = t;
            return o === Cr ? this : T ? T(X, this) : this.multiplyUnsafe(o)
        }
        toBytes(T = !0) {
            return sr("isCompressed", T), this.assertValidity(), m(X, this, T)
        }
        toRawBytes(T = !0) {
            return this.toBytes(T)
        }
        toHex(T = !0) {
            return xr(this.toBytes(T))
        }
        toString() {
            return `<Point ${this.is0()?"ZERO":this.toHex()}>`
        }
    }
    X.BASE = new X(n.Gx, n.Gy, e.ONE), X.ZERO = new X(e.ZERO, e.ONE, e.ZERO), X.Fp = e, X.Fn = r;
    const nt = r.BITS,
        it = hs(X, t.endo ? Math.ceil(nt / 2) : nt);
    return X
}

function ps(n) {
    return Uint8Array.of(n ? 2 : 3)
}

function ac(n, t, e = {}) {
    qr(t, {
        hash: "function"
    }, {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function"
    });
    const r = t.randomBytes || Do,
        o = t.hmac || ((N, ...B) => Qo(t.hash, N, je(...B))),
        {
            Fp: i,
            Fn: s
        } = n,
        {
            ORDER: f,
            BITS: y
        } = s;

    function S(N) {
        const B = f >> Cr;
        return N > B
    }

    function m(N) {
        return S(N) ? s.neg(N) : N
    }

    function U(N, B) {
        if (!s.isValidNot0(B)) throw new Error(`invalid signature ${N}: out of range 1..CURVE.n`)
    }
    class H {
        constructor(B, b, a) {
            U("r", B), U("s", b), this.r = B, this.s = b, a != null && (this.recovery = a), Object.freeze(this)
        }
        static fromCompact(B) {
            const b = s.BYTES,
                a = ee("compactSignature", B, b * 2);
            return new H(s.fromBytes(a.subarray(0, b)), s.fromBytes(a.subarray(b, b * 2)))
        }
        static fromDER(B) {
            const {
                r: b,
                s: a
            } = He.toSig(ee("DER", B));
            return new H(b, a)
        }
        assertValidity() {}
        addRecoveryBit(B) {
            return new H(this.r, this.s, B)
        }
        recoverPublicKey(B) {
            const b = i.ORDER,
                {
                    r: a,
                    s: g,
                    recovery: w
                } = this;
            if (w == null || ![0, 1, 2, 3].includes(w)) throw new Error("recovery id invalid");
            if (f * nc < b && w > 1) throw new Error("recovery id is ambiguous for h>1 curve");
            const R = w === 2 || w === 3 ? a + f : a;
            if (!i.isValid(R)) throw new Error("recovery id 2 or 3 invalid");
            const q = i.toBytes(R),
                D = n.fromHex(je(ps((w & 1) === 0), q)),
                I = s.inv(R),
                c = W(ee("msgHash", B)),
                u = s.create(-c * I),
                x = s.create(g * I),
                M = n.BASE.multiplyUnsafe(u).add(D.multiplyUnsafe(x));
            if (M.is0()) throw new Error("point at infinify");
            return M.assertValidity(), M
        }
        hasHighS() {
            return S(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new H(this.r, s.neg(this.s), this.recovery) : this
        }
        toBytes(B) {
            if (B === "compact") return je(s.toBytes(this.r), s.toBytes(this.s));
            if (B === "der") return ki(He.hexFromSig(this));
            throw new Error("invalid format")
        }
        toDERRawBytes() {
            return this.toBytes("der")
        }
        toDERHex() {
            return xr(this.toBytes("der"))
        }
        toCompactRawBytes() {
            return this.toBytes("compact")
        }
        toCompactHex() {
            return xr(this.toBytes("compact"))
        }
    }
    const O = ds(s, e.allowedPrivateKeyLengths, e.wrapPrivateKey),
        j = {
            isValidPrivateKey(N) {
                try {
                    return O(N), !0
                } catch {
                    return !1
                }
            },
            normPrivateKeyToScalar: O,
            randomPrivateKey: () => {
                const N = f;
                return Ja(r(ss(N)), N)
            },
            precompute(N = 8, B = n.BASE) {
                return B.precompute(N, !1)
            }
        };

    function F(N, B = !0) {
        return n.fromPrivateKey(N).toBytes(B)
    }

    function C(N) {
        if (typeof N == "bigint") return !1;
        if (N instanceof n) return !0;
        const b = ee("key", N).length,
            a = i.BYTES,
            g = a + 1,
            w = 2 * a + 1;
        if (!(e.allowedPrivateKeyLengths || s.BYTES === g)) return b === g || b === w
    }

    function Q(N, B, b = !0) {
        if (C(N) === !0) throw new Error("first arg must be private key");
        if (C(B) === !1) throw new Error("second arg must be public key");
        return n.fromHex(B).multiply(O(N)).toBytes(b)
    }
    const V = t.bits2int || function(N) {
            if (N.length > 8192) throw new Error("input is too large");
            const B = yn(N),
                b = N.length * 8 - y;
            return b > 0 ? B >> BigInt(b) : B
        },
        W = t.bits2int_modN || function(N) {
            return s.create(V(N))
        },
        st = wn(y);

    function X(N) {
        return mr("num < 2^" + y, N, Ur, st), s.toBytes(N)
    }

    function nt(N, B, b = it) {
        if (["recovered", "canonical"].some(x => x in b)) throw new Error("sign() legacy options not supported");
        const {
            hash: a
        } = t;
        let {
            lowS: g,
            prehash: w,
            extraEntropy: _
        } = b;
        g == null && (g = !0), N = ee("msgHash", N), io(b), w && (N = ee("prehashed msgHash", a(N)));
        const R = W(N),
            q = O(B),
            D = [X(q), X(R)];
        if (_ != null && _ !== !1) {
            const x = _ === !0 ? r(i.BYTES) : _;
            D.push(ee("extraEntropy", x))
        }
        const I = je(...D),
            c = R;

        function u(x) {
            const M = V(x);
            if (!s.isValidNot0(M)) return;
            const K = s.inv(M),
                ot = n.BASE.multiply(M).toAffine(),
                ft = s.create(ot.x);
            if (ft === Ur) return;
            const pt = s.create(K * s.create(c + ft * q));
            if (pt === Ur) return;
            let ne = (ot.x === ft ? 0 : 2) | Number(ot.y & Cr),
                At = pt;
            return g && S(pt) && (At = m(pt), ne ^= 1), new H(ft, At, ne)
        }
        return {
            seed: I,
            k2sig: u
        }
    }
    const it = {
            lowS: t.lowS,
            prehash: !1
        },
        tt = {
            lowS: t.lowS,
            prehash: !1
        };

    function T(N, B, b = it) {
        const {
            seed: a,
            k2sig: g
        } = nt(N, B, b);
        return da(t.hash.outputLen, s.BYTES, o)(a, g)
    }
    n.BASE.precompute(8);

    function L(N, B, b, a = tt) {
        const g = N;
        B = ee("msgHash", B), b = ee("publicKey", b), io(a);
        const {
            lowS: w,
            prehash: _,
            format: R
        } = a;
        if ("strict" in a) throw new Error("options.strict was renamed to lowS");
        if (R !== void 0 && !["compact", "der", "js"].includes(R)) throw new Error('format must be "compact", "der" or "js"');
        const q = typeof g == "string" || Ai(g),
            D = !q && !R && typeof g == "object" && g !== null && typeof g.r == "bigint" && typeof g.s == "bigint";
        if (!q && !D) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let I, c;
        try {
            if (D)
                if (R === void 0 || R === "js") I = new H(g.r, g.s);
                else throw new Error("invalid format");
            if (q) {
                try {
                    R !== "compact" && (I = H.fromDER(g))
                } catch (At) {
                    if (!(At instanceof He.Err)) throw At
                }!I && R !== "der" && (I = H.fromCompact(g))
            }
            c = n.fromHex(b)
        } catch {
            return !1
        }
        if (!I || w && I.hasHighS()) return !1;
        _ && (B = t.hash(B));
        const {
            r: u,
            s: x
        } = I, M = W(B), K = s.inv(x), ot = s.create(M * K), ft = s.create(u * K), pt = n.BASE.multiplyUnsafe(ot).add(c.multiplyUnsafe(ft));
        return pt.is0() ? !1 : s.create(pt.x) === u
    }
    return Object.freeze({
        getPublicKey: F,
        getSharedSecret: Q,
        sign: T,
        verify: L,
        utils: j,
        Point: n,
        Signature: H
    })
}

function cc(n) {
    const t = {
            a: n.a,
            b: n.b,
            p: n.Fp.ORDER,
            n: n.n,
            h: n.h,
            Gx: n.Gx,
            Gy: n.Gy
        },
        e = n.Fp,
        r = Ir(t.n, n.nBitLength),
        o = {
            Fp: e,
            Fn: r,
            allowedPrivateKeyLengths: n.allowedPrivateKeyLengths,
            allowInfinityPoint: n.allowInfinityPoint,
            endo: n.endo,
            wrapPrivateKey: n.wrapPrivateKey,
            isTorsionFree: n.isTorsionFree,
            clearCofactor: n.clearCofactor,
            fromBytes: n.fromBytes,
            toBytes: n.toBytes
        };
    return {
        CURVE: t,
        curveOpts: o
    }
}

function uc(n) {
    const {
        CURVE: t,
        curveOpts: e
    } = cc(n), r = {
        hash: n.hash,
        hmac: n.hmac,
        randomBytes: n.randomBytes,
        lowS: n.lowS,
        bits2int: n.bits2int,
        bits2int_modN: n.bits2int_modN
    };
    return {
        CURVE: t,
        curveOpts: e,
        ecdsaOpts: r
    }
}

function hc(n, t) {
    return Object.assign({}, t, {
        ProjectivePoint: t.Point,
        CURVE: n
    })
}

function lc(n) {
    const {
        CURVE: t,
        curveOpts: e,
        ecdsaOpts: r
    } = uc(n), o = sc(t, e), i = ac(o, r, e);
    return hc(n, i)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function fc(n, t) {
    const e = r => lc({ ...n,
        hash: r
    });
    return { ...e(t),
        create: e
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const en = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: BigInt(1),
    a: BigInt(0),
    b: BigInt(7),
    Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
    Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
BigInt(0);
const dc = BigInt(1),
    vi = BigInt(2),
    oo = (n, t) => (n + t / vi) / t;

function pc(n) {
    const t = en.p,
        e = BigInt(3),
        r = BigInt(6),
        o = BigInt(11),
        i = BigInt(22),
        s = BigInt(23),
        f = BigInt(44),
        y = BigInt(88),
        S = n * n * n % t,
        m = S * S * n % t,
        U = Qt(m, e, t) * m % t,
        H = Qt(U, e, t) * m % t,
        O = Qt(H, vi, t) * S % t,
        j = Qt(O, o, t) * O % t,
        F = Qt(j, i, t) * j % t,
        C = Qt(F, f, t) * F % t,
        Q = Qt(C, y, t) * C % t,
        V = Qt(Q, f, t) * F % t,
        W = Qt(V, e, t) * m % t,
        st = Qt(W, s, t) * j % t,
        X = Qt(st, r, t) * S % t,
        nt = Qt(X, vi, t);
    if (!Ei.eql(Ei.sqr(nt), n)) throw new Error("Cannot find square root");
    return nt
}
const Ei = Ir(en.p, void 0, void 0, {
        sqrt: pc
    }),
    Ui = fc({ ...en,
        Fp: Ei,
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: n => {
                const t = en.n,
                    e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    r = -dc * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    i = e,
                    s = BigInt("0x100000000000000000000000000000000"),
                    f = oo(i * n, t),
                    y = oo(-r * n, t);
                let S = re(n - f * e - y * o, t),
                    m = re(-f * r - y * i, t);
                const U = S > s,
                    H = m > s;
                if (U && (S = t - S), H && (m = t - m), S > s || m > s) throw new Error("splitScalar: Endomorphism failed, k=" + n);
                return {
                    k1neg: U,
                    k1: S,
                    k2neg: H,
                    k2: m
                }
            }
        }
    }, Xo),
    Gl = Object.freeze(Object.defineProperty({
        __proto__: null,
        secp256k1: Ui
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var Jr = {
        exports: {}
    },
    Jn = {},
    so;

function Ci() {
    return so || (so = 1, function(n) {
        Object.defineProperties(n, {
            __esModule: {
                value: !0
            },
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        var t = {},
            e = {};
        e.byteLength = m, e.toByteArray = H, e.fromByteArray = F;
        for (var r = [], o = [], i = typeof Uint8Array < "u" ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, y = s.length; f < y; ++f) r[f] = s[f], o[s.charCodeAt(f)] = f;
        o[45] = 62, o[95] = 63;

        function S(V) {
            var W = V.length;
            if (W % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var st = V.indexOf("=");
            st === -1 && (st = W);
            var X = st === W ? 0 : 4 - st % 4;
            return [st, X]
        }

        function m(V) {
            var W = S(V),
                st = W[0],
                X = W[1];
            return (st + X) * 3 / 4 - X
        }

        function U(V, W, st) {
            return (W + st) * 3 / 4 - st
        }

        function H(V) {
            var W, st = S(V),
                X = st[0],
                nt = st[1],
                it = new i(U(V, X, nt)),
                tt = 0,
                T = nt > 0 ? X - 4 : X,
                L;
            for (L = 0; L < T; L += 4) W = o[V.charCodeAt(L)] << 18 | o[V.charCodeAt(L + 1)] << 12 | o[V.charCodeAt(L + 2)] << 6 | o[V.charCodeAt(L + 3)], it[tt++] = W >> 16 & 255, it[tt++] = W >> 8 & 255, it[tt++] = W & 255;
            return nt === 2 && (W = o[V.charCodeAt(L)] << 2 | o[V.charCodeAt(L + 1)] >> 4, it[tt++] = W & 255), nt === 1 && (W = o[V.charCodeAt(L)] << 10 | o[V.charCodeAt(L + 1)] << 4 | o[V.charCodeAt(L + 2)] >> 2, it[tt++] = W >> 8 & 255, it[tt++] = W & 255), it
        }

        function O(V) {
            return r[V >> 18 & 63] + r[V >> 12 & 63] + r[V >> 6 & 63] + r[V & 63]
        }

        function j(V, W, st) {
            for (var X, nt = [], it = W; it < st; it += 3) X = (V[it] << 16 & 16711680) + (V[it + 1] << 8 & 65280) + (V[it + 2] & 255), nt.push(O(X));
            return nt.join("")
        }

        function F(V) {
            for (var W, st = V.length, X = st % 3, nt = [], it = 16383, tt = 0, T = st - X; tt < T; tt += it) nt.push(j(V, tt, tt + it > T ? T : tt + it));
            return X === 1 ? (W = V[st - 1], nt.push(r[W >> 2] + r[W << 4 & 63] + "==")) : X === 2 && (W = (V[st - 2] << 8) + V[st - 1], nt.push(r[W >> 10] + r[W >> 4 & 63] + r[W << 2 & 63] + "=")), nt.join("")
        }
        var C = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        C.read = function(V, W, st, X, nt) {
            var it, tt, T = nt * 8 - X - 1,
                L = (1 << T) - 1,
                N = L >> 1,
                B = -7,
                b = st ? nt - 1 : 0,
                a = st ? -1 : 1,
                g = V[W + b];
            for (b += a, it = g & (1 << -B) - 1, g >>= -B, B += T; B > 0; it = it * 256 + V[W + b], b += a, B -= 8);
            for (tt = it & (1 << -B) - 1, it >>= -B, B += X; B > 0; tt = tt * 256 + V[W + b], b += a, B -= 8);
            if (it === 0) it = 1 - N;
            else {
                if (it === L) return tt ? NaN : (g ? -1 : 1) * (1 / 0);
                tt = tt + Math.pow(2, X), it = it - N
            }
            return (g ? -1 : 1) * tt * Math.pow(2, it - X)
        }, C.write = function(V, W, st, X, nt, it) {
            var tt, T, L, N = it * 8 - nt - 1,
                B = (1 << N) - 1,
                b = B >> 1,
                a = nt === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                g = X ? 0 : it - 1,
                w = X ? 1 : -1,
                _ = W < 0 || W === 0 && 1 / W < 0 ? 1 : 0;
            for (W = Math.abs(W), isNaN(W) || W === 1 / 0 ? (T = isNaN(W) ? 1 : 0, tt = B) : (tt = Math.floor(Math.log(W) / Math.LN2), W * (L = Math.pow(2, -tt)) < 1 && (tt--, L *= 2), tt + b >= 1 ? W += a / L : W += a * Math.pow(2, 1 - b), W * L >= 2 && (tt++, L /= 2), tt + b >= B ? (T = 0, tt = B) : tt + b >= 1 ? (T = (W * L - 1) * Math.pow(2, nt), tt = tt + b) : (T = W * Math.pow(2, b - 1) * Math.pow(2, nt), tt = 0)); nt >= 8; V[st + g] = T & 255, g += w, T /= 256, nt -= 8);
            for (tt = tt << nt | T, N += nt; N > 0; V[st + g] = tt & 255, g += w, tt /= 256, N -= 8);
            V[st + g - w] |= _ * 128
        };
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        (function(V) {
            const W = e,
                st = C,
                X = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            V.Buffer = B, V.SlowBuffer = u, V.INSPECT_MAX_BYTES = 50;
            const nt = 2147483647;
            V.kMaxLength = nt;
            const {
                Uint8Array: it,
                ArrayBuffer: tt,
                SharedArrayBuffer: T
            } = globalThis;
            B.TYPED_ARRAY_SUPPORT = L(), !B.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

            function L() {
                try {
                    const E = new it(1),
                        l = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(l, it.prototype), Object.setPrototypeOf(E, l), E.foo() === 42
                } catch {
                    return !1
                }
            }
            Object.defineProperty(B.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (B.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(B.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (B.isBuffer(this)) return this.byteOffset
                }
            });

            function N(E) {
                if (E > nt) throw new RangeError('The value "' + E + '" is invalid for option "size"');
                const l = new it(E);
                return Object.setPrototypeOf(l, B.prototype), l
            }

            function B(E, l, p) {
                if (typeof E == "number") {
                    if (typeof l == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return w(E)
                }
                return b(E, l, p)
            }
            B.poolSize = 8192;

            function b(E, l, p) {
                if (typeof E == "string") return _(E, l);
                if (tt.isView(E)) return q(E);
                if (E == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof E);
                if (Se(E, tt) || E && Se(E.buffer, tt) || typeof T < "u" && (Se(E, T) || E && Se(E.buffer, T))) return D(E, l, p);
                if (typeof E == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const k = E.valueOf && E.valueOf();
                if (k != null && k !== E) return B.from(k, l, p);
                const $ = I(E);
                if ($) return $;
                if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof E[Symbol.toPrimitive] == "function") return B.from(E[Symbol.toPrimitive]("string"), l, p);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof E)
            }
            B.from = function(E, l, p) {
                return b(E, l, p)
            }, Object.setPrototypeOf(B.prototype, it.prototype), Object.setPrototypeOf(B, it);

            function a(E) {
                if (typeof E != "number") throw new TypeError('"size" argument must be of type number');
                if (E < 0) throw new RangeError('The value "' + E + '" is invalid for option "size"')
            }

            function g(E, l, p) {
                return a(E), E <= 0 ? N(E) : l !== void 0 ? typeof p == "string" ? N(E).fill(l, p) : N(E).fill(l) : N(E)
            }
            B.alloc = function(E, l, p) {
                return g(E, l, p)
            };

            function w(E) {
                return a(E), N(E < 0 ? 0 : c(E) | 0)
            }
            B.allocUnsafe = function(E) {
                return w(E)
            }, B.allocUnsafeSlow = function(E) {
                return w(E)
            };

            function _(E, l) {
                if ((typeof l != "string" || l === "") && (l = "utf8"), !B.isEncoding(l)) throw new TypeError("Unknown encoding: " + l);
                const p = x(E, l) | 0;
                let k = N(p);
                const $ = k.write(E, l);
                return $ !== p && (k = k.slice(0, $)), k
            }

            function R(E) {
                const l = E.length < 0 ? 0 : c(E.length) | 0,
                    p = N(l);
                for (let k = 0; k < l; k += 1) p[k] = E[k] & 255;
                return p
            }

            function q(E) {
                if (Se(E, it)) {
                    const l = new it(E);
                    return D(l.buffer, l.byteOffset, l.byteLength)
                }
                return R(E)
            }

            function D(E, l, p) {
                if (l < 0 || E.byteLength < l) throw new RangeError('"offset" is outside of buffer bounds');
                if (E.byteLength < l + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let k;
                return l === void 0 && p === void 0 ? k = new it(E) : p === void 0 ? k = new it(E, l) : k = new it(E, l, p), Object.setPrototypeOf(k, B.prototype), k
            }

            function I(E) {
                if (B.isBuffer(E)) {
                    const l = c(E.length) | 0,
                        p = N(l);
                    return p.length === 0 || E.copy(p, 0, 0, l), p
                }
                if (E.length !== void 0) return typeof E.length != "number" || Gt(E.length) ? N(0) : R(E);
                if (E.type === "Buffer" && Array.isArray(E.data)) return R(E.data)
            }

            function c(E) {
                if (E >= nt) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + nt.toString(16) + " bytes");
                return E | 0
            }

            function u(E) {
                return +E != E && (E = 0), B.alloc(+E)
            }
            B.isBuffer = function(l) {
                return l != null && l._isBuffer === !0 && l !== B.prototype
            }, B.compare = function(l, p) {
                if (Se(l, it) && (l = B.from(l, l.offset, l.byteLength)), Se(p, it) && (p = B.from(p, p.offset, p.byteLength)), !B.isBuffer(l) || !B.isBuffer(p)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (l === p) return 0;
                let k = l.length,
                    $ = p.length;
                for (let Z = 0, rt = Math.min(k, $); Z < rt; ++Z)
                    if (l[Z] !== p[Z]) {
                        k = l[Z], $ = p[Z];
                        break
                    }
                return k < $ ? -1 : $ < k ? 1 : 0
            }, B.isEncoding = function(l) {
                switch (String(l).toLowerCase()) {
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
                        return !0;
                    default:
                        return !1
                }
            }, B.concat = function(l, p) {
                if (!Array.isArray(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (l.length === 0) return B.alloc(0);
                let k;
                if (p === void 0)
                    for (p = 0, k = 0; k < l.length; ++k) p += l[k].length;
                const $ = B.allocUnsafe(p);
                let Z = 0;
                for (k = 0; k < l.length; ++k) {
                    let rt = l[k];
                    if (Se(rt, it)) Z + rt.length > $.length ? (B.isBuffer(rt) || (rt = B.from(rt)), rt.copy($, Z)) : it.prototype.set.call($, rt, Z);
                    else if (B.isBuffer(rt)) rt.copy($, Z);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    Z += rt.length
                }
                return $
            };

            function x(E, l) {
                if (B.isBuffer(E)) return E.length;
                if (tt.isView(E) || Se(E, tt)) return E.byteLength;
                if (typeof E != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof E);
                const p = E.length,
                    k = arguments.length > 2 && arguments[2] === !0;
                if (!k && p === 0) return 0;
                let $ = !1;
                for (;;) switch (l) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return p;
                    case "utf8":
                    case "utf-8":
                        return bt(E).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return p * 2;
                    case "hex":
                        return p >>> 1;
                    case "base64":
                        return yt(E).length;
                    default:
                        if ($) return k ? -1 : bt(E).length;
                        l = ("" + l).toLowerCase(), $ = !0
                }
            }
            B.byteLength = x;

            function M(E, l, p) {
                let k = !1;
                if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, l >>>= 0, p <= l)) return "";
                for (E || (E = "utf8");;) switch (E) {
                    case "hex":
                        return Ft(this, l, p);
                    case "utf8":
                    case "utf-8":
                        return Pt(this, l, p);
                    case "ascii":
                        return Kt(this, l, p);
                    case "latin1":
                    case "binary":
                        return hr(this, l, p);
                    case "base64":
                        return Ht(this, l, p);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return Wt(this, l, p);
                    default:
                        if (k) throw new TypeError("Unknown encoding: " + E);
                        E = (E + "").toLowerCase(), k = !0
                }
            }
            B.prototype._isBuffer = !0;

            function K(E, l, p) {
                const k = E[l];
                E[l] = E[p], E[p] = k
            }
            B.prototype.swap16 = function() {
                const l = this.length;
                if (l % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let p = 0; p < l; p += 2) K(this, p, p + 1);
                return this
            }, B.prototype.swap32 = function() {
                const l = this.length;
                if (l % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let p = 0; p < l; p += 4) K(this, p, p + 3), K(this, p + 1, p + 2);
                return this
            }, B.prototype.swap64 = function() {
                const l = this.length;
                if (l % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let p = 0; p < l; p += 8) K(this, p, p + 7), K(this, p + 1, p + 6), K(this, p + 2, p + 5), K(this, p + 3, p + 4);
                return this
            }, B.prototype.toString = function() {
                const l = this.length;
                return l === 0 ? "" : arguments.length === 0 ? Pt(this, 0, l) : M.apply(this, arguments)
            }, B.prototype.toLocaleString = B.prototype.toString, B.prototype.equals = function(l) {
                if (!B.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
                return this === l ? !0 : B.compare(this, l) === 0
            }, B.prototype.inspect = function() {
                let l = "";
                const p = V.INSPECT_MAX_BYTES;
                return l = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (l += " ... "), "<Buffer " + l + ">"
            }, X && (B.prototype[X] = B.prototype.inspect), B.prototype.compare = function(l, p, k, $, Z) {
                if (Se(l, it) && (l = B.from(l, l.offset, l.byteLength)), !B.isBuffer(l)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l);
                if (p === void 0 && (p = 0), k === void 0 && (k = l ? l.length : 0), $ === void 0 && ($ = 0), Z === void 0 && (Z = this.length), p < 0 || k > l.length || $ < 0 || Z > this.length) throw new RangeError("out of range index");
                if ($ >= Z && p >= k) return 0;
                if ($ >= Z) return -1;
                if (p >= k) return 1;
                if (p >>>= 0, k >>>= 0, $ >>>= 0, Z >>>= 0, this === l) return 0;
                let rt = Z - $,
                    _t = k - p;
                const xt = Math.min(rt, _t),
                    Et = this.slice($, Z),
                    $t = l.slice(p, k);
                for (let wt = 0; wt < xt; ++wt)
                    if (Et[wt] !== $t[wt]) {
                        rt = Et[wt], _t = $t[wt];
                        break
                    }
                return rt < _t ? -1 : _t < rt ? 1 : 0
            };

            function ot(E, l, p, k, $) {
                if (E.length === 0) return -1;
                if (typeof p == "string" ? (k = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, Gt(p) && (p = $ ? 0 : E.length - 1), p < 0 && (p = E.length + p), p >= E.length) {
                    if ($) return -1;
                    p = E.length - 1
                } else if (p < 0)
                    if ($) p = 0;
                    else return -1;
                if (typeof l == "string" && (l = B.from(l, k)), B.isBuffer(l)) return l.length === 0 ? -1 : ft(E, l, p, k, $);
                if (typeof l == "number") return l = l & 255, typeof it.prototype.indexOf == "function" ? $ ? it.prototype.indexOf.call(E, l, p) : it.prototype.lastIndexOf.call(E, l, p) : ft(E, [l], p, k, $);
                throw new TypeError("val must be string, number or Buffer")
            }

            function ft(E, l, p, k, $) {
                let Z = 1,
                    rt = E.length,
                    _t = l.length;
                if (k !== void 0 && (k = String(k).toLowerCase(), k === "ucs2" || k === "ucs-2" || k === "utf16le" || k === "utf-16le")) {
                    if (E.length < 2 || l.length < 2) return -1;
                    Z = 2, rt /= 2, _t /= 2, p /= 2
                }

                function xt($t, wt) {
                    return Z === 1 ? $t[wt] : $t.readUInt16BE(wt * Z)
                }
                let Et;
                if ($) {
                    let $t = -1;
                    for (Et = p; Et < rt; Et++)
                        if (xt(E, Et) === xt(l, $t === -1 ? 0 : Et - $t)) {
                            if ($t === -1 && ($t = Et), Et - $t + 1 === _t) return $t * Z
                        } else $t !== -1 && (Et -= Et - $t), $t = -1
                } else
                    for (p + _t > rt && (p = rt - _t), Et = p; Et >= 0; Et--) {
                        let $t = !0;
                        for (let wt = 0; wt < _t; wt++)
                            if (xt(E, Et + wt) !== xt(l, wt)) {
                                $t = !1;
                                break
                            }
                        if ($t) return Et
                    }
                return -1
            }
            B.prototype.includes = function(l, p, k) {
                return this.indexOf(l, p, k) !== -1
            }, B.prototype.indexOf = function(l, p, k) {
                return ot(this, l, p, k, !0)
            }, B.prototype.lastIndexOf = function(l, p, k) {
                return ot(this, l, p, k, !1)
            };

            function pt(E, l, p, k) {
                p = Number(p) || 0;
                const $ = E.length - p;
                k ? (k = Number(k), k > $ && (k = $)) : k = $;
                const Z = l.length;
                k > Z / 2 && (k = Z / 2);
                let rt;
                for (rt = 0; rt < k; ++rt) {
                    const _t = parseInt(l.substr(rt * 2, 2), 16);
                    if (Gt(_t)) return rt;
                    E[p + rt] = _t
                }
                return rt
            }

            function ne(E, l, p, k) {
                return Dt(bt(l, E.length - p), E, p, k)
            }

            function At(E, l, p, k) {
                return Dt(vt(l), E, p, k)
            }

            function Ot(E, l, p, k) {
                return Dt(yt(l), E, p, k)
            }

            function nr(E, l, p, k) {
                return Dt(Nt(l, E.length - p), E, p, k)
            }
            B.prototype.write = function(l, p, k, $) {
                if (p === void 0) $ = "utf8", k = this.length, p = 0;
                else if (k === void 0 && typeof p == "string") $ = p, k = this.length, p = 0;
                else if (isFinite(p)) p = p >>> 0, isFinite(k) ? (k = k >>> 0, $ === void 0 && ($ = "utf8")) : ($ = k, k = void 0);
                else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const Z = this.length - p;
                if ((k === void 0 || k > Z) && (k = Z), l.length > 0 && (k < 0 || p < 0) || p > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                $ || ($ = "utf8");
                let rt = !1;
                for (;;) switch ($) {
                    case "hex":
                        return pt(this, l, p, k);
                    case "utf8":
                    case "utf-8":
                        return ne(this, l, p, k);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return At(this, l, p, k);
                    case "base64":
                        return Ot(this, l, p, k);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return nr(this, l, p, k);
                    default:
                        if (rt) throw new TypeError("Unknown encoding: " + $);
                        $ = ("" + $).toLowerCase(), rt = !0
                }
            }, B.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function Ht(E, l, p) {
                return l === 0 && p === E.length ? W.fromByteArray(E) : W.fromByteArray(E.slice(l, p))
            }

            function Pt(E, l, p) {
                p = Math.min(E.length, p);
                const k = [];
                let $ = l;
                for (; $ < p;) {
                    const Z = E[$];
                    let rt = null,
                        _t = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
                    if ($ + _t <= p) {
                        let xt, Et, $t, wt;
                        switch (_t) {
                            case 1:
                                Z < 128 && (rt = Z);
                                break;
                            case 2:
                                xt = E[$ + 1], (xt & 192) === 128 && (wt = (Z & 31) << 6 | xt & 63, wt > 127 && (rt = wt));
                                break;
                            case 3:
                                xt = E[$ + 1], Et = E[$ + 2], (xt & 192) === 128 && (Et & 192) === 128 && (wt = (Z & 15) << 12 | (xt & 63) << 6 | Et & 63, wt > 2047 && (wt < 55296 || wt > 57343) && (rt = wt));
                                break;
                            case 4:
                                xt = E[$ + 1], Et = E[$ + 2], $t = E[$ + 3], (xt & 192) === 128 && (Et & 192) === 128 && ($t & 192) === 128 && (wt = (Z & 15) << 18 | (xt & 63) << 12 | (Et & 63) << 6 | $t & 63, wt > 65535 && wt < 1114112 && (rt = wt))
                        }
                    }
                    rt === null ? (rt = 65533, _t = 1) : rt > 65535 && (rt -= 65536, k.push(rt >>> 10 & 1023 | 55296), rt = 56320 | rt & 1023), k.push(rt), $ += _t
                }
                return Lt(k)
            }
            const ke = 4096;

            function Lt(E) {
                const l = E.length;
                if (l <= ke) return String.fromCharCode.apply(String, E);
                let p = "",
                    k = 0;
                for (; k < l;) p += String.fromCharCode.apply(String, E.slice(k, k += ke));
                return p
            }

            function Kt(E, l, p) {
                let k = "";
                p = Math.min(E.length, p);
                for (let $ = l; $ < p; ++$) k += String.fromCharCode(E[$] & 127);
                return k
            }

            function hr(E, l, p) {
                let k = "";
                p = Math.min(E.length, p);
                for (let $ = l; $ < p; ++$) k += String.fromCharCode(E[$]);
                return k
            }

            function Ft(E, l, p) {
                const k = E.length;
                (!l || l < 0) && (l = 0), (!p || p < 0 || p > k) && (p = k);
                let $ = "";
                for (let Z = l; Z < p; ++Z) $ += Xt[E[Z]];
                return $
            }

            function Wt(E, l, p) {
                const k = E.slice(l, p);
                let $ = "";
                for (let Z = 0; Z < k.length - 1; Z += 2) $ += String.fromCharCode(k[Z] + k[Z + 1] * 256);
                return $
            }
            B.prototype.slice = function(l, p) {
                const k = this.length;
                l = ~~l, p = p === void 0 ? k : ~~p, l < 0 ? (l += k, l < 0 && (l = 0)) : l > k && (l = k), p < 0 ? (p += k, p < 0 && (p = 0)) : p > k && (p = k), p < l && (p = l);
                const $ = this.subarray(l, p);
                return Object.setPrototypeOf($, B.prototype), $
            };

            function Vt(E, l, p) {
                if (E % 1 !== 0 || E < 0) throw new RangeError("offset is not uint");
                if (E + l > p) throw new RangeError("Trying to access beyond buffer length")
            }
            B.prototype.readUintLE = B.prototype.readUIntLE = function(l, p, k) {
                l = l >>> 0, p = p >>> 0, k || Vt(l, p, this.length);
                let $ = this[l],
                    Z = 1,
                    rt = 0;
                for (; ++rt < p && (Z *= 256);) $ += this[l + rt] * Z;
                return $
            }, B.prototype.readUintBE = B.prototype.readUIntBE = function(l, p, k) {
                l = l >>> 0, p = p >>> 0, k || Vt(l, p, this.length);
                let $ = this[l + --p],
                    Z = 1;
                for (; p > 0 && (Z *= 256);) $ += this[l + --p] * Z;
                return $
            }, B.prototype.readUint8 = B.prototype.readUInt8 = function(l, p) {
                return l = l >>> 0, p || Vt(l, 1, this.length), this[l]
            }, B.prototype.readUint16LE = B.prototype.readUInt16LE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 2, this.length), this[l] | this[l + 1] << 8
            }, B.prototype.readUint16BE = B.prototype.readUInt16BE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 2, this.length), this[l] << 8 | this[l + 1]
            }, B.prototype.readUint32LE = B.prototype.readUInt32LE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216
            }, B.prototype.readUint32BE = B.prototype.readUInt32BE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3])
            }, B.prototype.readBigUInt64LE = Ce(function(l) {
                l = l >>> 0, z(l, "offset");
                const p = this[l],
                    k = this[l + 7];
                (p === void 0 || k === void 0) && G(l, this.length - 8);
                const $ = p + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
                    Z = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + k * 2 ** 24;
                return BigInt($) + (BigInt(Z) << BigInt(32))
            }), B.prototype.readBigUInt64BE = Ce(function(l) {
                l = l >>> 0, z(l, "offset");
                const p = this[l],
                    k = this[l + 7];
                (p === void 0 || k === void 0) && G(l, this.length - 8);
                const $ = p * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l],
                    Z = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + k;
                return (BigInt($) << BigInt(32)) + BigInt(Z)
            }), B.prototype.readIntLE = function(l, p, k) {
                l = l >>> 0, p = p >>> 0, k || Vt(l, p, this.length);
                let $ = this[l],
                    Z = 1,
                    rt = 0;
                for (; ++rt < p && (Z *= 256);) $ += this[l + rt] * Z;
                return Z *= 128, $ >= Z && ($ -= Math.pow(2, 8 * p)), $
            }, B.prototype.readIntBE = function(l, p, k) {
                l = l >>> 0, p = p >>> 0, k || Vt(l, p, this.length);
                let $ = p,
                    Z = 1,
                    rt = this[l + --$];
                for (; $ > 0 && (Z *= 256);) rt += this[l + --$] * Z;
                return Z *= 128, rt >= Z && (rt -= Math.pow(2, 8 * p)), rt
            }, B.prototype.readInt8 = function(l, p) {
                return l = l >>> 0, p || Vt(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
            }, B.prototype.readInt16LE = function(l, p) {
                l = l >>> 0, p || Vt(l, 2, this.length);
                const k = this[l] | this[l + 1] << 8;
                return k & 32768 ? k | 4294901760 : k
            }, B.prototype.readInt16BE = function(l, p) {
                l = l >>> 0, p || Vt(l, 2, this.length);
                const k = this[l + 1] | this[l] << 8;
                return k & 32768 ? k | 4294901760 : k
            }, B.prototype.readInt32LE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24
            }, B.prototype.readInt32BE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]
            }, B.prototype.readBigInt64LE = Ce(function(l) {
                l = l >>> 0, z(l, "offset");
                const p = this[l],
                    k = this[l + 7];
                (p === void 0 || k === void 0) && G(l, this.length - 8);
                const $ = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (k << 24);
                return (BigInt($) << BigInt(32)) + BigInt(p + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24)
            }), B.prototype.readBigInt64BE = Ce(function(l) {
                l = l >>> 0, z(l, "offset");
                const p = this[l],
                    k = this[l + 7];
                (p === void 0 || k === void 0) && G(l, this.length - 8);
                const $ = (p << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
                return (BigInt($) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + k)
            }), B.prototype.readFloatLE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), st.read(this, l, !0, 23, 4)
            }, B.prototype.readFloatBE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 4, this.length), st.read(this, l, !1, 23, 4)
            }, B.prototype.readDoubleLE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 8, this.length), st.read(this, l, !0, 52, 8)
            }, B.prototype.readDoubleBE = function(l, p) {
                return l = l >>> 0, p || Vt(l, 8, this.length), st.read(this, l, !1, 52, 8)
            };

            function kt(E, l, p, k, $, Z) {
                if (!B.isBuffer(E)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (l > $ || l < Z) throw new RangeError('"value" argument is out of bounds');
                if (p + k > E.length) throw new RangeError("Index out of range")
            }
            B.prototype.writeUintLE = B.prototype.writeUIntLE = function(l, p, k, $) {
                if (l = +l, p = p >>> 0, k = k >>> 0, !$) {
                    const _t = Math.pow(2, 8 * k) - 1;
                    kt(this, l, p, k, _t, 0)
                }
                let Z = 1,
                    rt = 0;
                for (this[p] = l & 255; ++rt < k && (Z *= 256);) this[p + rt] = l / Z & 255;
                return p + k
            }, B.prototype.writeUintBE = B.prototype.writeUIntBE = function(l, p, k, $) {
                if (l = +l, p = p >>> 0, k = k >>> 0, !$) {
                    const _t = Math.pow(2, 8 * k) - 1;
                    kt(this, l, p, k, _t, 0)
                }
                let Z = k - 1,
                    rt = 1;
                for (this[p + Z] = l & 255; --Z >= 0 && (rt *= 256);) this[p + Z] = l / rt & 255;
                return p + k
            }, B.prototype.writeUint8 = B.prototype.writeUInt8 = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 1, 255, 0), this[p] = l & 255, p + 1
            }, B.prototype.writeUint16LE = B.prototype.writeUInt16LE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 2, 65535, 0), this[p] = l & 255, this[p + 1] = l >>> 8, p + 2
            }, B.prototype.writeUint16BE = B.prototype.writeUInt16BE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 2, 65535, 0), this[p] = l >>> 8, this[p + 1] = l & 255, p + 2
            }, B.prototype.writeUint32LE = B.prototype.writeUInt32LE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 4, 4294967295, 0), this[p + 3] = l >>> 24, this[p + 2] = l >>> 16, this[p + 1] = l >>> 8, this[p] = l & 255, p + 4
            }, B.prototype.writeUint32BE = B.prototype.writeUInt32BE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 4, 4294967295, 0), this[p] = l >>> 24, this[p + 1] = l >>> 16, this[p + 2] = l >>> 8, this[p + 3] = l & 255, p + 4
            };

            function Ut(E, l, p, k, $) {
                A(l, k, $, E, p, 7);
                let Z = Number(l & BigInt(4294967295));
                E[p++] = Z, Z = Z >> 8, E[p++] = Z, Z = Z >> 8, E[p++] = Z, Z = Z >> 8, E[p++] = Z;
                let rt = Number(l >> BigInt(32) & BigInt(4294967295));
                return E[p++] = rt, rt = rt >> 8, E[p++] = rt, rt = rt >> 8, E[p++] = rt, rt = rt >> 8, E[p++] = rt, p
            }

            function fe(E, l, p, k, $) {
                A(l, k, $, E, p, 7);
                let Z = Number(l & BigInt(4294967295));
                E[p + 7] = Z, Z = Z >> 8, E[p + 6] = Z, Z = Z >> 8, E[p + 5] = Z, Z = Z >> 8, E[p + 4] = Z;
                let rt = Number(l >> BigInt(32) & BigInt(4294967295));
                return E[p + 3] = rt, rt = rt >> 8, E[p + 2] = rt, rt = rt >> 8, E[p + 1] = rt, rt = rt >> 8, E[p] = rt, p + 8
            }
            B.prototype.writeBigUInt64LE = Ce(function(l, p = 0) {
                return Ut(this, l, p, BigInt(0), BigInt("0xffffffffffffffff"))
            }), B.prototype.writeBigUInt64BE = Ce(function(l, p = 0) {
                return fe(this, l, p, BigInt(0), BigInt("0xffffffffffffffff"))
            }), B.prototype.writeIntLE = function(l, p, k, $) {
                if (l = +l, p = p >>> 0, !$) {
                    const xt = Math.pow(2, 8 * k - 1);
                    kt(this, l, p, k, xt - 1, -xt)
                }
                let Z = 0,
                    rt = 1,
                    _t = 0;
                for (this[p] = l & 255; ++Z < k && (rt *= 256);) l < 0 && _t === 0 && this[p + Z - 1] !== 0 && (_t = 1), this[p + Z] = (l / rt >> 0) - _t & 255;
                return p + k
            }, B.prototype.writeIntBE = function(l, p, k, $) {
                if (l = +l, p = p >>> 0, !$) {
                    const xt = Math.pow(2, 8 * k - 1);
                    kt(this, l, p, k, xt - 1, -xt)
                }
                let Z = k - 1,
                    rt = 1,
                    _t = 0;
                for (this[p + Z] = l & 255; --Z >= 0 && (rt *= 256);) l < 0 && _t === 0 && this[p + Z + 1] !== 0 && (_t = 1), this[p + Z] = (l / rt >> 0) - _t & 255;
                return p + k
            }, B.prototype.writeInt8 = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[p] = l & 255, p + 1
            }, B.prototype.writeInt16LE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 2, 32767, -32768), this[p] = l & 255, this[p + 1] = l >>> 8, p + 2
            }, B.prototype.writeInt16BE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 2, 32767, -32768), this[p] = l >>> 8, this[p + 1] = l & 255, p + 2
            }, B.prototype.writeInt32LE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 4, 2147483647, -2147483648), this[p] = l & 255, this[p + 1] = l >>> 8, this[p + 2] = l >>> 16, this[p + 3] = l >>> 24, p + 4
            }, B.prototype.writeInt32BE = function(l, p, k) {
                return l = +l, p = p >>> 0, k || kt(this, l, p, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[p] = l >>> 24, this[p + 1] = l >>> 16, this[p + 2] = l >>> 8, this[p + 3] = l & 255, p + 4
            }, B.prototype.writeBigInt64LE = Ce(function(l, p = 0) {
                return Ut(this, l, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), B.prototype.writeBigInt64BE = Ce(function(l, p = 0) {
                return fe(this, l, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            });

            function Ct(E, l, p, k, $, Z) {
                if (p + k > E.length) throw new RangeError("Index out of range");
                if (p < 0) throw new RangeError("Index out of range")
            }

            function zt(E, l, p, k, $) {
                return l = +l, p = p >>> 0, $ || Ct(E, l, p, 4), st.write(E, l, p, k, 23, 4), p + 4
            }
            B.prototype.writeFloatLE = function(l, p, k) {
                return zt(this, l, p, !0, k)
            }, B.prototype.writeFloatBE = function(l, p, k) {
                return zt(this, l, p, !1, k)
            };

            function xe(E, l, p, k, $) {
                return l = +l, p = p >>> 0, $ || Ct(E, l, p, 8), st.write(E, l, p, k, 52, 8), p + 8
            }
            B.prototype.writeDoubleLE = function(l, p, k) {
                return xe(this, l, p, !0, k)
            }, B.prototype.writeDoubleBE = function(l, p, k) {
                return xe(this, l, p, !1, k)
            }, B.prototype.copy = function(l, p, k, $) {
                if (!B.isBuffer(l)) throw new TypeError("argument should be a Buffer");
                if (k || (k = 0), !$ && $ !== 0 && ($ = this.length), p >= l.length && (p = l.length), p || (p = 0), $ > 0 && $ < k && ($ = k), $ === k || l.length === 0 || this.length === 0) return 0;
                if (p < 0) throw new RangeError("targetStart out of bounds");
                if (k < 0 || k >= this.length) throw new RangeError("Index out of range");
                if ($ < 0) throw new RangeError("sourceEnd out of bounds");
                $ > this.length && ($ = this.length), l.length - p < $ - k && ($ = l.length - p + k);
                const Z = $ - k;
                return this === l && typeof it.prototype.copyWithin == "function" ? this.copyWithin(p, k, $) : it.prototype.set.call(l, this.subarray(k, $), p), Z
            }, B.prototype.fill = function(l, p, k, $) {
                if (typeof l == "string") {
                    if (typeof p == "string" ? ($ = p, p = 0, k = this.length) : typeof k == "string" && ($ = k, k = this.length), $ !== void 0 && typeof $ != "string") throw new TypeError("encoding must be a string");
                    if (typeof $ == "string" && !B.isEncoding($)) throw new TypeError("Unknown encoding: " + $);
                    if (l.length === 1) {
                        const rt = l.charCodeAt(0);
                        ($ === "utf8" && rt < 128 || $ === "latin1") && (l = rt)
                    }
                } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
                if (p < 0 || this.length < p || this.length < k) throw new RangeError("Out of range index");
                if (k <= p) return this;
                p = p >>> 0, k = k === void 0 ? this.length : k >>> 0, l || (l = 0);
                let Z;
                if (typeof l == "number")
                    for (Z = p; Z < k; ++Z) this[Z] = l;
                else {
                    const rt = B.isBuffer(l) ? l : B.from(l, $),
                        _t = rt.length;
                    if (_t === 0) throw new TypeError('The value "' + l + '" is invalid for argument "value"');
                    for (Z = 0; Z < k - p; ++Z) this[Z + p] = rt[Z % _t]
                }
                return this
            };
            const Mt = {};

            function v(E, l, p) {
                Mt[E] = class extends p {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: l.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${E}]`, this.stack, delete this.name
                    }
                    get code() {
                        return E
                    }
                    set code($) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: $,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${E}]: ${this.message}`
                    }
                }
            }
            v("ERR_BUFFER_OUT_OF_BOUNDS", function(E) {
                return E ? `${E} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), v("ERR_INVALID_ARG_TYPE", function(E, l) {
                return `The "${E}" argument must be of type number. Received type ${typeof l}`
            }, TypeError), v("ERR_OUT_OF_RANGE", function(E, l, p) {
                let k = `The value of "${E}" is out of range.`,
                    $ = p;
                return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? $ = h(String(p)) : typeof p == "bigint" && ($ = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && ($ = h($)), $ += "n"), k += ` It must be ${l}. Received ${$}`, k
            }, RangeError);

            function h(E) {
                let l = "",
                    p = E.length;
                const k = E[0] === "-" ? 1 : 0;
                for (; p >= k + 4; p -= 3) l = `_${E.slice(p-3,p)}${l}`;
                return `${E.slice(0,p)}${l}`
            }

            function d(E, l, p) {
                z(l, "offset"), (E[l] === void 0 || E[l + p] === void 0) && G(l, E.length - (p + 1))
            }

            function A(E, l, p, k, $, Z) {
                if (E > p || E < l) {
                    const rt = typeof l == "bigint" ? "n" : "";
                    let _t;
                    throw l === 0 || l === BigInt(0) ? _t = `>= 0${rt} and < 2${rt} ** ${(Z+1)*8}${rt}` : _t = `>= -(2${rt} ** ${(Z+1)*8-1}${rt}) and < 2 ** ${(Z+1)*8-1}${rt}`, new Mt.ERR_OUT_OF_RANGE("value", _t, E)
                }
                d(k, $, Z)
            }

            function z(E, l) {
                if (typeof E != "number") throw new Mt.ERR_INVALID_ARG_TYPE(l, "number", E)
            }

            function G(E, l, p) {
                throw Math.floor(E) !== E ? (z(E, p), new Mt.ERR_OUT_OF_RANGE("offset", "an integer", E)) : l < 0 ? new Mt.ERR_BUFFER_OUT_OF_BOUNDS : new Mt.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${l}`, E)
            }
            const et = /[^+/0-9A-Za-z-_]/g;

            function Bt(E) {
                if (E = E.split("=")[0], E = E.trim().replace(et, ""), E.length < 2) return "";
                for (; E.length % 4 !== 0;) E = E + "=";
                return E
            }

            function bt(E, l) {
                l = l || 1 / 0;
                let p;
                const k = E.length;
                let $ = null;
                const Z = [];
                for (let rt = 0; rt < k; ++rt) {
                    if (p = E.charCodeAt(rt), p > 55295 && p < 57344) {
                        if (!$) {
                            if (p > 56319) {
                                (l -= 3) > -1 && Z.push(239, 191, 189);
                                continue
                            } else if (rt + 1 === k) {
                                (l -= 3) > -1 && Z.push(239, 191, 189);
                                continue
                            }
                            $ = p;
                            continue
                        }
                        if (p < 56320) {
                            (l -= 3) > -1 && Z.push(239, 191, 189), $ = p;
                            continue
                        }
                        p = ($ - 55296 << 10 | p - 56320) + 65536
                    } else $ && (l -= 3) > -1 && Z.push(239, 191, 189);
                    if ($ = null, p < 128) {
                        if ((l -= 1) < 0) break;
                        Z.push(p)
                    } else if (p < 2048) {
                        if ((l -= 2) < 0) break;
                        Z.push(p >> 6 | 192, p & 63 | 128)
                    } else if (p < 65536) {
                        if ((l -= 3) < 0) break;
                        Z.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128)
                    } else if (p < 1114112) {
                        if ((l -= 4) < 0) break;
                        Z.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128)
                    } else throw new Error("Invalid code point")
                }
                return Z
            }

            function vt(E) {
                const l = [];
                for (let p = 0; p < E.length; ++p) l.push(E.charCodeAt(p) & 255);
                return l
            }

            function Nt(E, l) {
                let p, k, $;
                const Z = [];
                for (let rt = 0; rt < E.length && !((l -= 2) < 0); ++rt) p = E.charCodeAt(rt), k = p >> 8, $ = p % 256, Z.push($), Z.push(k);
                return Z
            }

            function yt(E) {
                return W.toByteArray(Bt(E))
            }

            function Dt(E, l, p, k) {
                let $;
                for ($ = 0; $ < k && !($ + p >= l.length || $ >= E.length); ++$) l[$ + p] = E[$];
                return $
            }

            function Se(E, l) {
                return E instanceof l || E != null && E.constructor != null && E.constructor.name != null && E.constructor.name === l.name
            }

            function Gt(E) {
                return E !== E
            }
            const Xt = function() {
                const E = "0123456789abcdef",
                    l = new Array(256);
                for (let p = 0; p < 16; ++p) {
                    const k = p * 16;
                    for (let $ = 0; $ < 16; ++$) l[k + $] = E[p] + E[$]
                }
                return l
            }();

            function Ce(E) {
                return typeof BigInt > "u" ? Jt : E
            }

            function Jt() {
                throw new Error("BigInt not supported")
            }
        })(t);
        const Q = t.Buffer;
        n.Blob = t.Blob, n.BlobOptions = t.BlobOptions, n.Buffer = t.Buffer, n.File = t.File, n.FileOptions = t.FileOptions, n.INSPECT_MAX_BYTES = t.INSPECT_MAX_BYTES, n.SlowBuffer = t.SlowBuffer, n.TranscodeEncoding = t.TranscodeEncoding, n.atob = t.atob, n.btoa = t.btoa, n.constants = t.constants, n.default = Q, n.isAscii = t.isAscii, n.isUtf8 = t.isUtf8, n.kMaxLength = t.kMaxLength, n.kStringMaxLength = t.kStringMaxLength, n.resolveObjectURL = t.resolveObjectURL, n.transcode = t.transcode
    }(Jn)), Jn
}
var gc = Jr.exports,
    ao;

function gs() {
    return ao || (ao = 1, function(n) {
        (function(t, e) {
            function r(b, a) {
                if (!b) throw new Error(a || "Assertion failed")
            }

            function o(b, a) {
                b.super_ = a;
                var g = function() {};
                g.prototype = a.prototype, b.prototype = new g, b.prototype.constructor = b
            }

            function i(b, a, g) {
                if (i.isBN(b)) return b;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, b !== null && ((a === "le" || a === "be") && (g = a, a = 10), this._init(b || 0, a || 10, g || "be"))
            }
            typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
            var s;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = Ci().Buffer
            } catch {}
            i.isBN = function(a) {
                return a instanceof i ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === i.wordSize && Array.isArray(a.words)
            }, i.max = function(a, g) {
                return a.cmp(g) > 0 ? a : g
            }, i.min = function(a, g) {
                return a.cmp(g) < 0 ? a : g
            }, i.prototype._init = function(a, g, w) {
                if (typeof a == "number") return this._initNumber(a, g, w);
                if (typeof a == "object") return this._initArray(a, g, w);
                g === "hex" && (g = 16), r(g === (g | 0) && g >= 2 && g <= 36), a = a.toString().replace(/\s+/g, "");
                var _ = 0;
                a[0] === "-" && (_++, this.negative = 1), _ < a.length && (g === 16 ? this._parseHex(a, _, w) : (this._parseBase(a, g, _), w === "le" && this._initArray(this.toArray(), g, w)))
            }, i.prototype._initNumber = function(a, g, w) {
                a < 0 && (this.negative = 1, a = -a), a < 67108864 ? (this.words = [a & 67108863], this.length = 1) : a < 4503599627370496 ? (this.words = [a & 67108863, a / 67108864 & 67108863], this.length = 2) : (r(a < 9007199254740992), this.words = [a & 67108863, a / 67108864 & 67108863, 1], this.length = 3), w === "le" && this._initArray(this.toArray(), g, w)
            }, i.prototype._initArray = function(a, g, w) {
                if (r(typeof a.length == "number"), a.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
                for (var _ = 0; _ < this.length; _++) this.words[_] = 0;
                var R, q, D = 0;
                if (w === "be")
                    for (_ = a.length - 1, R = 0; _ >= 0; _ -= 3) q = a[_] | a[_ - 1] << 8 | a[_ - 2] << 16, this.words[R] |= q << D & 67108863, this.words[R + 1] = q >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, R++);
                else if (w === "le")
                    for (_ = 0, R = 0; _ < a.length; _ += 3) q = a[_] | a[_ + 1] << 8 | a[_ + 2] << 16, this.words[R] |= q << D & 67108863, this.words[R + 1] = q >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, R++);
                return this._strip()
            };

            function f(b, a) {
                var g = b.charCodeAt(a);
                if (g >= 48 && g <= 57) return g - 48;
                if (g >= 65 && g <= 70) return g - 55;
                if (g >= 97 && g <= 102) return g - 87;
                r(!1, "Invalid character in " + b)
            }

            function y(b, a, g) {
                var w = f(b, g);
                return g - 1 >= a && (w |= f(b, g - 1) << 4), w
            }
            i.prototype._parseHex = function(a, g, w) {
                this.length = Math.ceil((a.length - g) / 6), this.words = new Array(this.length);
                for (var _ = 0; _ < this.length; _++) this.words[_] = 0;
                var R = 0,
                    q = 0,
                    D;
                if (w === "be")
                    for (_ = a.length - 1; _ >= g; _ -= 2) D = y(a, g, _) << R, this.words[q] |= D & 67108863, R >= 18 ? (R -= 18, q += 1, this.words[q] |= D >>> 26) : R += 8;
                else {
                    var I = a.length - g;
                    for (_ = I % 2 === 0 ? g + 1 : g; _ < a.length; _ += 2) D = y(a, g, _) << R, this.words[q] |= D & 67108863, R >= 18 ? (R -= 18, q += 1, this.words[q] |= D >>> 26) : R += 8
                }
                this._strip()
            };

            function S(b, a, g, w) {
                for (var _ = 0, R = 0, q = Math.min(b.length, g), D = a; D < q; D++) {
                    var I = b.charCodeAt(D) - 48;
                    _ *= w, I >= 49 ? R = I - 49 + 10 : I >= 17 ? R = I - 17 + 10 : R = I, r(I >= 0 && R < w, "Invalid character"), _ += R
                }
                return _
            }
            i.prototype._parseBase = function(a, g, w) {
                this.words = [0], this.length = 1;
                for (var _ = 0, R = 1; R <= 67108863; R *= g) _++;
                _--, R = R / g | 0;
                for (var q = a.length - w, D = q % _, I = Math.min(q, q - D) + w, c = 0, u = w; u < I; u += _) c = S(a, u, u + _, g), this.imuln(R), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                if (D !== 0) {
                    var x = 1;
                    for (c = S(a, u, a.length, g), u = 0; u < D; u++) x *= g;
                    this.imuln(x), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                }
                this._strip()
            }, i.prototype.copy = function(a) {
                a.words = new Array(this.length);
                for (var g = 0; g < this.length; g++) a.words[g] = this.words[g];
                a.length = this.length, a.negative = this.negative, a.red = this.red
            };

            function m(b, a) {
                b.words = a.words, b.length = a.length, b.negative = a.negative, b.red = a.red
            }
            if (i.prototype._move = function(a) {
                    m(a, this)
                }, i.prototype.clone = function() {
                    var a = new i(null);
                    return this.copy(a), a
                }, i.prototype._expand = function(a) {
                    for (; this.length < a;) this.words[this.length++] = 0;
                    return this
                }, i.prototype._strip = function() {
                    for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                    return this._normSign()
                }, i.prototype._normSign = function() {
                    return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
                }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
                i.prototype[Symbol.for("nodejs.util.inspect.custom")] = U
            } catch {
                i.prototype.inspect = U
            } else i.prototype.inspect = U;

            function U() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var H = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                O = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                j = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            i.prototype.toString = function(a, g) {
                a = a || 10, g = g | 0 || 1;
                var w;
                if (a === 16 || a === "hex") {
                    w = "";
                    for (var _ = 0, R = 0, q = 0; q < this.length; q++) {
                        var D = this.words[q],
                            I = ((D << _ | R) & 16777215).toString(16);
                        R = D >>> 24 - _ & 16777215, _ += 2, _ >= 26 && (_ -= 26, q--), R !== 0 || q !== this.length - 1 ? w = H[6 - I.length] + I + w : w = I + w
                    }
                    for (R !== 0 && (w = R.toString(16) + w); w.length % g !== 0;) w = "0" + w;
                    return this.negative !== 0 && (w = "-" + w), w
                }
                if (a === (a | 0) && a >= 2 && a <= 36) {
                    var c = O[a],
                        u = j[a];
                    w = "";
                    var x = this.clone();
                    for (x.negative = 0; !x.isZero();) {
                        var M = x.modrn(u).toString(a);
                        x = x.idivn(u), x.isZero() ? w = M + w : w = H[c - M.length] + M + w
                    }
                    for (this.isZero() && (w = "0" + w); w.length % g !== 0;) w = "0" + w;
                    return this.negative !== 0 && (w = "-" + w), w
                }
                r(!1, "Base should be between 2 and 36")
            }, i.prototype.toNumber = function() {
                var a = this.words[0];
                return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -a : a
            }, i.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, s && (i.prototype.toBuffer = function(a, g) {
                return this.toArrayLike(s, a, g)
            }), i.prototype.toArray = function(a, g) {
                return this.toArrayLike(Array, a, g)
            };
            var F = function(a, g) {
                return a.allocUnsafe ? a.allocUnsafe(g) : new a(g)
            };
            i.prototype.toArrayLike = function(a, g, w) {
                this._strip();
                var _ = this.byteLength(),
                    R = w || Math.max(1, _);
                r(_ <= R, "byte array longer than desired length"), r(R > 0, "Requested array length <= 0");
                var q = F(a, R),
                    D = g === "le" ? "LE" : "BE";
                return this["_toArrayLike" + D](q, _), q
            }, i.prototype._toArrayLikeLE = function(a, g) {
                for (var w = 0, _ = 0, R = 0, q = 0; R < this.length; R++) {
                    var D = this.words[R] << q | _;
                    a[w++] = D & 255, w < a.length && (a[w++] = D >> 8 & 255), w < a.length && (a[w++] = D >> 16 & 255), q === 6 ? (w < a.length && (a[w++] = D >> 24 & 255), _ = 0, q = 0) : (_ = D >>> 24, q += 2)
                }
                if (w < a.length)
                    for (a[w++] = _; w < a.length;) a[w++] = 0
            }, i.prototype._toArrayLikeBE = function(a, g) {
                for (var w = a.length - 1, _ = 0, R = 0, q = 0; R < this.length; R++) {
                    var D = this.words[R] << q | _;
                    a[w--] = D & 255, w >= 0 && (a[w--] = D >> 8 & 255), w >= 0 && (a[w--] = D >> 16 & 255), q === 6 ? (w >= 0 && (a[w--] = D >> 24 & 255), _ = 0, q = 0) : (_ = D >>> 24, q += 2)
                }
                if (w >= 0)
                    for (a[w--] = _; w >= 0;) a[w--] = 0
            }, Math.clz32 ? i.prototype._countBits = function(a) {
                return 32 - Math.clz32(a)
            } : i.prototype._countBits = function(a) {
                var g = a,
                    w = 0;
                return g >= 4096 && (w += 13, g >>>= 13), g >= 64 && (w += 7, g >>>= 7), g >= 8 && (w += 4, g >>>= 4), g >= 2 && (w += 2, g >>>= 2), w + g
            }, i.prototype._zeroBits = function(a) {
                if (a === 0) return 26;
                var g = a,
                    w = 0;
                return (g & 8191) === 0 && (w += 13, g >>>= 13), (g & 127) === 0 && (w += 7, g >>>= 7), (g & 15) === 0 && (w += 4, g >>>= 4), (g & 3) === 0 && (w += 2, g >>>= 2), (g & 1) === 0 && w++, w
            }, i.prototype.bitLength = function() {
                var a = this.words[this.length - 1],
                    g = this._countBits(a);
                return (this.length - 1) * 26 + g
            };

            function C(b) {
                for (var a = new Array(b.bitLength()), g = 0; g < a.length; g++) {
                    var w = g / 26 | 0,
                        _ = g % 26;
                    a[g] = b.words[w] >>> _ & 1
                }
                return a
            }
            i.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var a = 0, g = 0; g < this.length; g++) {
                    var w = this._zeroBits(this.words[g]);
                    if (a += w, w !== 26) break
                }
                return a
            }, i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, i.prototype.toTwos = function(a) {
                return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone()
            }, i.prototype.fromTwos = function(a) {
                return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone()
            }, i.prototype.isNeg = function() {
                return this.negative !== 0
            }, i.prototype.neg = function() {
                return this.clone().ineg()
            }, i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, i.prototype.iuor = function(a) {
                for (; this.length < a.length;) this.words[this.length++] = 0;
                for (var g = 0; g < a.length; g++) this.words[g] = this.words[g] | a.words[g];
                return this._strip()
            }, i.prototype.ior = function(a) {
                return r((this.negative | a.negative) === 0), this.iuor(a)
            }, i.prototype.or = function(a) {
                return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this)
            }, i.prototype.uor = function(a) {
                return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this)
            }, i.prototype.iuand = function(a) {
                var g;
                this.length > a.length ? g = a : g = this;
                for (var w = 0; w < g.length; w++) this.words[w] = this.words[w] & a.words[w];
                return this.length = g.length, this._strip()
            }, i.prototype.iand = function(a) {
                return r((this.negative | a.negative) === 0), this.iuand(a)
            }, i.prototype.and = function(a) {
                return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this)
            }, i.prototype.uand = function(a) {
                return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this)
            }, i.prototype.iuxor = function(a) {
                var g, w;
                this.length > a.length ? (g = this, w = a) : (g = a, w = this);
                for (var _ = 0; _ < w.length; _++) this.words[_] = g.words[_] ^ w.words[_];
                if (this !== g)
                    for (; _ < g.length; _++) this.words[_] = g.words[_];
                return this.length = g.length, this._strip()
            }, i.prototype.ixor = function(a) {
                return r((this.negative | a.negative) === 0), this.iuxor(a)
            }, i.prototype.xor = function(a) {
                return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this)
            }, i.prototype.uxor = function(a) {
                return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this)
            }, i.prototype.inotn = function(a) {
                r(typeof a == "number" && a >= 0);
                var g = Math.ceil(a / 26) | 0,
                    w = a % 26;
                this._expand(g), w > 0 && g--;
                for (var _ = 0; _ < g; _++) this.words[_] = ~this.words[_] & 67108863;
                return w > 0 && (this.words[_] = ~this.words[_] & 67108863 >> 26 - w), this._strip()
            }, i.prototype.notn = function(a) {
                return this.clone().inotn(a)
            }, i.prototype.setn = function(a, g) {
                r(typeof a == "number" && a >= 0);
                var w = a / 26 | 0,
                    _ = a % 26;
                return this._expand(w + 1), g ? this.words[w] = this.words[w] | 1 << _ : this.words[w] = this.words[w] & ~(1 << _), this._strip()
            }, i.prototype.iadd = function(a) {
                var g;
                if (this.negative !== 0 && a.negative === 0) return this.negative = 0, g = this.isub(a), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && a.negative !== 0) return a.negative = 0, g = this.isub(a), a.negative = 1, g._normSign();
                var w, _;
                this.length > a.length ? (w = this, _ = a) : (w = a, _ = this);
                for (var R = 0, q = 0; q < _.length; q++) g = (w.words[q] | 0) + (_.words[q] | 0) + R, this.words[q] = g & 67108863, R = g >>> 26;
                for (; R !== 0 && q < w.length; q++) g = (w.words[q] | 0) + R, this.words[q] = g & 67108863, R = g >>> 26;
                if (this.length = w.length, R !== 0) this.words[this.length] = R, this.length++;
                else if (w !== this)
                    for (; q < w.length; q++) this.words[q] = w.words[q];
                return this
            }, i.prototype.add = function(a) {
                var g;
                return a.negative !== 0 && this.negative === 0 ? (a.negative = 0, g = this.sub(a), a.negative ^= 1, g) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0, g = a.sub(this), this.negative = 1, g) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this)
            }, i.prototype.isub = function(a) {
                if (a.negative !== 0) {
                    a.negative = 0;
                    var g = this.iadd(a);
                    return a.negative = 1, g._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
                var w = this.cmp(a);
                if (w === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var _, R;
                w > 0 ? (_ = this, R = a) : (_ = a, R = this);
                for (var q = 0, D = 0; D < R.length; D++) g = (_.words[D] | 0) - (R.words[D] | 0) + q, q = g >> 26, this.words[D] = g & 67108863;
                for (; q !== 0 && D < _.length; D++) g = (_.words[D] | 0) + q, q = g >> 26, this.words[D] = g & 67108863;
                if (q === 0 && D < _.length && _ !== this)
                    for (; D < _.length; D++) this.words[D] = _.words[D];
                return this.length = Math.max(this.length, D), _ !== this && (this.negative = 1), this._strip()
            }, i.prototype.sub = function(a) {
                return this.clone().isub(a)
            };

            function Q(b, a, g) {
                g.negative = a.negative ^ b.negative;
                var w = b.length + a.length | 0;
                g.length = w, w = w - 1 | 0;
                var _ = b.words[0] | 0,
                    R = a.words[0] | 0,
                    q = _ * R,
                    D = q & 67108863,
                    I = q / 67108864 | 0;
                g.words[0] = D;
                for (var c = 1; c < w; c++) {
                    for (var u = I >>> 26, x = I & 67108863, M = Math.min(c, a.length - 1), K = Math.max(0, c - b.length + 1); K <= M; K++) {
                        var ot = c - K | 0;
                        _ = b.words[ot] | 0, R = a.words[K] | 0, q = _ * R + x, u += q / 67108864 | 0, x = q & 67108863
                    }
                    g.words[c] = x | 0, I = u | 0
                }
                return I !== 0 ? g.words[c] = I | 0 : g.length--, g._strip()
            }
            var V = function(a, g, w) {
                var _ = a.words,
                    R = g.words,
                    q = w.words,
                    D = 0,
                    I, c, u, x = _[0] | 0,
                    M = x & 8191,
                    K = x >>> 13,
                    ot = _[1] | 0,
                    ft = ot & 8191,
                    pt = ot >>> 13,
                    ne = _[2] | 0,
                    At = ne & 8191,
                    Ot = ne >>> 13,
                    nr = _[3] | 0,
                    Ht = nr & 8191,
                    Pt = nr >>> 13,
                    ke = _[4] | 0,
                    Lt = ke & 8191,
                    Kt = ke >>> 13,
                    hr = _[5] | 0,
                    Ft = hr & 8191,
                    Wt = hr >>> 13,
                    Vt = _[6] | 0,
                    kt = Vt & 8191,
                    Ut = Vt >>> 13,
                    fe = _[7] | 0,
                    Ct = fe & 8191,
                    zt = fe >>> 13,
                    xe = _[8] | 0,
                    Mt = xe & 8191,
                    v = xe >>> 13,
                    h = _[9] | 0,
                    d = h & 8191,
                    A = h >>> 13,
                    z = R[0] | 0,
                    G = z & 8191,
                    et = z >>> 13,
                    Bt = R[1] | 0,
                    bt = Bt & 8191,
                    vt = Bt >>> 13,
                    Nt = R[2] | 0,
                    yt = Nt & 8191,
                    Dt = Nt >>> 13,
                    Se = R[3] | 0,
                    Gt = Se & 8191,
                    Xt = Se >>> 13,
                    Ce = R[4] | 0,
                    Jt = Ce & 8191,
                    E = Ce >>> 13,
                    l = R[5] | 0,
                    p = l & 8191,
                    k = l >>> 13,
                    $ = R[6] | 0,
                    Z = $ & 8191,
                    rt = $ >>> 13,
                    _t = R[7] | 0,
                    xt = _t & 8191,
                    Et = _t >>> 13,
                    $t = R[8] | 0,
                    wt = $t & 8191,
                    ie = $t >>> 13,
                    Ki = R[9] | 0,
                    oe = Ki & 8191,
                    se = Ki >>> 13;
                w.negative = a.negative ^ g.negative, w.length = 19, I = Math.imul(M, G), c = Math.imul(M, et), c = c + Math.imul(K, G) | 0, u = Math.imul(K, et);
                var An = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (An >>> 26) | 0, An &= 67108863, I = Math.imul(ft, G), c = Math.imul(ft, et), c = c + Math.imul(pt, G) | 0, u = Math.imul(pt, et), I = I + Math.imul(M, bt) | 0, c = c + Math.imul(M, vt) | 0, c = c + Math.imul(K, bt) | 0, u = u + Math.imul(K, vt) | 0;
                var kn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (kn >>> 26) | 0, kn &= 67108863, I = Math.imul(At, G), c = Math.imul(At, et), c = c + Math.imul(Ot, G) | 0, u = Math.imul(Ot, et), I = I + Math.imul(ft, bt) | 0, c = c + Math.imul(ft, vt) | 0, c = c + Math.imul(pt, bt) | 0, u = u + Math.imul(pt, vt) | 0, I = I + Math.imul(M, yt) | 0, c = c + Math.imul(M, Dt) | 0, c = c + Math.imul(K, yt) | 0, u = u + Math.imul(K, Dt) | 0;
                var Rn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Rn >>> 26) | 0, Rn &= 67108863, I = Math.imul(Ht, G), c = Math.imul(Ht, et), c = c + Math.imul(Pt, G) | 0, u = Math.imul(Pt, et), I = I + Math.imul(At, bt) | 0, c = c + Math.imul(At, vt) | 0, c = c + Math.imul(Ot, bt) | 0, u = u + Math.imul(Ot, vt) | 0, I = I + Math.imul(ft, yt) | 0, c = c + Math.imul(ft, Dt) | 0, c = c + Math.imul(pt, yt) | 0, u = u + Math.imul(pt, Dt) | 0, I = I + Math.imul(M, Gt) | 0, c = c + Math.imul(M, Xt) | 0, c = c + Math.imul(K, Gt) | 0, u = u + Math.imul(K, Xt) | 0;
                var Mn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Mn >>> 26) | 0, Mn &= 67108863, I = Math.imul(Lt, G), c = Math.imul(Lt, et), c = c + Math.imul(Kt, G) | 0, u = Math.imul(Kt, et), I = I + Math.imul(Ht, bt) | 0, c = c + Math.imul(Ht, vt) | 0, c = c + Math.imul(Pt, bt) | 0, u = u + Math.imul(Pt, vt) | 0, I = I + Math.imul(At, yt) | 0, c = c + Math.imul(At, Dt) | 0, c = c + Math.imul(Ot, yt) | 0, u = u + Math.imul(Ot, Dt) | 0, I = I + Math.imul(ft, Gt) | 0, c = c + Math.imul(ft, Xt) | 0, c = c + Math.imul(pt, Gt) | 0, u = u + Math.imul(pt, Xt) | 0, I = I + Math.imul(M, Jt) | 0, c = c + Math.imul(M, E) | 0, c = c + Math.imul(K, Jt) | 0, u = u + Math.imul(K, E) | 0;
                var Tn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Tn >>> 26) | 0, Tn &= 67108863, I = Math.imul(Ft, G), c = Math.imul(Ft, et), c = c + Math.imul(Wt, G) | 0, u = Math.imul(Wt, et), I = I + Math.imul(Lt, bt) | 0, c = c + Math.imul(Lt, vt) | 0, c = c + Math.imul(Kt, bt) | 0, u = u + Math.imul(Kt, vt) | 0, I = I + Math.imul(Ht, yt) | 0, c = c + Math.imul(Ht, Dt) | 0, c = c + Math.imul(Pt, yt) | 0, u = u + Math.imul(Pt, Dt) | 0, I = I + Math.imul(At, Gt) | 0, c = c + Math.imul(At, Xt) | 0, c = c + Math.imul(Ot, Gt) | 0, u = u + Math.imul(Ot, Xt) | 0, I = I + Math.imul(ft, Jt) | 0, c = c + Math.imul(ft, E) | 0, c = c + Math.imul(pt, Jt) | 0, u = u + Math.imul(pt, E) | 0, I = I + Math.imul(M, p) | 0, c = c + Math.imul(M, k) | 0, c = c + Math.imul(K, p) | 0, u = u + Math.imul(K, k) | 0;
                var Ln = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Ln >>> 26) | 0, Ln &= 67108863, I = Math.imul(kt, G), c = Math.imul(kt, et), c = c + Math.imul(Ut, G) | 0, u = Math.imul(Ut, et), I = I + Math.imul(Ft, bt) | 0, c = c + Math.imul(Ft, vt) | 0, c = c + Math.imul(Wt, bt) | 0, u = u + Math.imul(Wt, vt) | 0, I = I + Math.imul(Lt, yt) | 0, c = c + Math.imul(Lt, Dt) | 0, c = c + Math.imul(Kt, yt) | 0, u = u + Math.imul(Kt, Dt) | 0, I = I + Math.imul(Ht, Gt) | 0, c = c + Math.imul(Ht, Xt) | 0, c = c + Math.imul(Pt, Gt) | 0, u = u + Math.imul(Pt, Xt) | 0, I = I + Math.imul(At, Jt) | 0, c = c + Math.imul(At, E) | 0, c = c + Math.imul(Ot, Jt) | 0, u = u + Math.imul(Ot, E) | 0, I = I + Math.imul(ft, p) | 0, c = c + Math.imul(ft, k) | 0, c = c + Math.imul(pt, p) | 0, u = u + Math.imul(pt, k) | 0, I = I + Math.imul(M, Z) | 0, c = c + Math.imul(M, rt) | 0, c = c + Math.imul(K, Z) | 0, u = u + Math.imul(K, rt) | 0;
                var Un = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Un >>> 26) | 0, Un &= 67108863, I = Math.imul(Ct, G), c = Math.imul(Ct, et), c = c + Math.imul(zt, G) | 0, u = Math.imul(zt, et), I = I + Math.imul(kt, bt) | 0, c = c + Math.imul(kt, vt) | 0, c = c + Math.imul(Ut, bt) | 0, u = u + Math.imul(Ut, vt) | 0, I = I + Math.imul(Ft, yt) | 0, c = c + Math.imul(Ft, Dt) | 0, c = c + Math.imul(Wt, yt) | 0, u = u + Math.imul(Wt, Dt) | 0, I = I + Math.imul(Lt, Gt) | 0, c = c + Math.imul(Lt, Xt) | 0, c = c + Math.imul(Kt, Gt) | 0, u = u + Math.imul(Kt, Xt) | 0, I = I + Math.imul(Ht, Jt) | 0, c = c + Math.imul(Ht, E) | 0, c = c + Math.imul(Pt, Jt) | 0, u = u + Math.imul(Pt, E) | 0, I = I + Math.imul(At, p) | 0, c = c + Math.imul(At, k) | 0, c = c + Math.imul(Ot, p) | 0, u = u + Math.imul(Ot, k) | 0, I = I + Math.imul(ft, Z) | 0, c = c + Math.imul(ft, rt) | 0, c = c + Math.imul(pt, Z) | 0, u = u + Math.imul(pt, rt) | 0, I = I + Math.imul(M, xt) | 0, c = c + Math.imul(M, Et) | 0, c = c + Math.imul(K, xt) | 0, u = u + Math.imul(K, Et) | 0;
                var Cn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, I = Math.imul(Mt, G), c = Math.imul(Mt, et), c = c + Math.imul(v, G) | 0, u = Math.imul(v, et), I = I + Math.imul(Ct, bt) | 0, c = c + Math.imul(Ct, vt) | 0, c = c + Math.imul(zt, bt) | 0, u = u + Math.imul(zt, vt) | 0, I = I + Math.imul(kt, yt) | 0, c = c + Math.imul(kt, Dt) | 0, c = c + Math.imul(Ut, yt) | 0, u = u + Math.imul(Ut, Dt) | 0, I = I + Math.imul(Ft, Gt) | 0, c = c + Math.imul(Ft, Xt) | 0, c = c + Math.imul(Wt, Gt) | 0, u = u + Math.imul(Wt, Xt) | 0, I = I + Math.imul(Lt, Jt) | 0, c = c + Math.imul(Lt, E) | 0, c = c + Math.imul(Kt, Jt) | 0, u = u + Math.imul(Kt, E) | 0, I = I + Math.imul(Ht, p) | 0, c = c + Math.imul(Ht, k) | 0, c = c + Math.imul(Pt, p) | 0, u = u + Math.imul(Pt, k) | 0, I = I + Math.imul(At, Z) | 0, c = c + Math.imul(At, rt) | 0, c = c + Math.imul(Ot, Z) | 0, u = u + Math.imul(Ot, rt) | 0, I = I + Math.imul(ft, xt) | 0, c = c + Math.imul(ft, Et) | 0, c = c + Math.imul(pt, xt) | 0, u = u + Math.imul(pt, Et) | 0, I = I + Math.imul(M, wt) | 0, c = c + Math.imul(M, ie) | 0, c = c + Math.imul(K, wt) | 0, u = u + Math.imul(K, ie) | 0;
                var Nn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Nn >>> 26) | 0, Nn &= 67108863, I = Math.imul(d, G), c = Math.imul(d, et), c = c + Math.imul(A, G) | 0, u = Math.imul(A, et), I = I + Math.imul(Mt, bt) | 0, c = c + Math.imul(Mt, vt) | 0, c = c + Math.imul(v, bt) | 0, u = u + Math.imul(v, vt) | 0, I = I + Math.imul(Ct, yt) | 0, c = c + Math.imul(Ct, Dt) | 0, c = c + Math.imul(zt, yt) | 0, u = u + Math.imul(zt, Dt) | 0, I = I + Math.imul(kt, Gt) | 0, c = c + Math.imul(kt, Xt) | 0, c = c + Math.imul(Ut, Gt) | 0, u = u + Math.imul(Ut, Xt) | 0, I = I + Math.imul(Ft, Jt) | 0, c = c + Math.imul(Ft, E) | 0, c = c + Math.imul(Wt, Jt) | 0, u = u + Math.imul(Wt, E) | 0, I = I + Math.imul(Lt, p) | 0, c = c + Math.imul(Lt, k) | 0, c = c + Math.imul(Kt, p) | 0, u = u + Math.imul(Kt, k) | 0, I = I + Math.imul(Ht, Z) | 0, c = c + Math.imul(Ht, rt) | 0, c = c + Math.imul(Pt, Z) | 0, u = u + Math.imul(Pt, rt) | 0, I = I + Math.imul(At, xt) | 0, c = c + Math.imul(At, Et) | 0, c = c + Math.imul(Ot, xt) | 0, u = u + Math.imul(Ot, Et) | 0, I = I + Math.imul(ft, wt) | 0, c = c + Math.imul(ft, ie) | 0, c = c + Math.imul(pt, wt) | 0, u = u + Math.imul(pt, ie) | 0, I = I + Math.imul(M, oe) | 0, c = c + Math.imul(M, se) | 0, c = c + Math.imul(K, oe) | 0, u = u + Math.imul(K, se) | 0;
                var On = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (On >>> 26) | 0, On &= 67108863, I = Math.imul(d, bt), c = Math.imul(d, vt), c = c + Math.imul(A, bt) | 0, u = Math.imul(A, vt), I = I + Math.imul(Mt, yt) | 0, c = c + Math.imul(Mt, Dt) | 0, c = c + Math.imul(v, yt) | 0, u = u + Math.imul(v, Dt) | 0, I = I + Math.imul(Ct, Gt) | 0, c = c + Math.imul(Ct, Xt) | 0, c = c + Math.imul(zt, Gt) | 0, u = u + Math.imul(zt, Xt) | 0, I = I + Math.imul(kt, Jt) | 0, c = c + Math.imul(kt, E) | 0, c = c + Math.imul(Ut, Jt) | 0, u = u + Math.imul(Ut, E) | 0, I = I + Math.imul(Ft, p) | 0, c = c + Math.imul(Ft, k) | 0, c = c + Math.imul(Wt, p) | 0, u = u + Math.imul(Wt, k) | 0, I = I + Math.imul(Lt, Z) | 0, c = c + Math.imul(Lt, rt) | 0, c = c + Math.imul(Kt, Z) | 0, u = u + Math.imul(Kt, rt) | 0, I = I + Math.imul(Ht, xt) | 0, c = c + Math.imul(Ht, Et) | 0, c = c + Math.imul(Pt, xt) | 0, u = u + Math.imul(Pt, Et) | 0, I = I + Math.imul(At, wt) | 0, c = c + Math.imul(At, ie) | 0, c = c + Math.imul(Ot, wt) | 0, u = u + Math.imul(Ot, ie) | 0, I = I + Math.imul(ft, oe) | 0, c = c + Math.imul(ft, se) | 0, c = c + Math.imul(pt, oe) | 0, u = u + Math.imul(pt, se) | 0;
                var Pn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Pn >>> 26) | 0, Pn &= 67108863, I = Math.imul(d, yt), c = Math.imul(d, Dt), c = c + Math.imul(A, yt) | 0, u = Math.imul(A, Dt), I = I + Math.imul(Mt, Gt) | 0, c = c + Math.imul(Mt, Xt) | 0, c = c + Math.imul(v, Gt) | 0, u = u + Math.imul(v, Xt) | 0, I = I + Math.imul(Ct, Jt) | 0, c = c + Math.imul(Ct, E) | 0, c = c + Math.imul(zt, Jt) | 0, u = u + Math.imul(zt, E) | 0, I = I + Math.imul(kt, p) | 0, c = c + Math.imul(kt, k) | 0, c = c + Math.imul(Ut, p) | 0, u = u + Math.imul(Ut, k) | 0, I = I + Math.imul(Ft, Z) | 0, c = c + Math.imul(Ft, rt) | 0, c = c + Math.imul(Wt, Z) | 0, u = u + Math.imul(Wt, rt) | 0, I = I + Math.imul(Lt, xt) | 0, c = c + Math.imul(Lt, Et) | 0, c = c + Math.imul(Kt, xt) | 0, u = u + Math.imul(Kt, Et) | 0, I = I + Math.imul(Ht, wt) | 0, c = c + Math.imul(Ht, ie) | 0, c = c + Math.imul(Pt, wt) | 0, u = u + Math.imul(Pt, ie) | 0, I = I + Math.imul(At, oe) | 0, c = c + Math.imul(At, se) | 0, c = c + Math.imul(Ot, oe) | 0, u = u + Math.imul(Ot, se) | 0;
                var Fn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, I = Math.imul(d, Gt), c = Math.imul(d, Xt), c = c + Math.imul(A, Gt) | 0, u = Math.imul(A, Xt), I = I + Math.imul(Mt, Jt) | 0, c = c + Math.imul(Mt, E) | 0, c = c + Math.imul(v, Jt) | 0, u = u + Math.imul(v, E) | 0, I = I + Math.imul(Ct, p) | 0, c = c + Math.imul(Ct, k) | 0, c = c + Math.imul(zt, p) | 0, u = u + Math.imul(zt, k) | 0, I = I + Math.imul(kt, Z) | 0, c = c + Math.imul(kt, rt) | 0, c = c + Math.imul(Ut, Z) | 0, u = u + Math.imul(Ut, rt) | 0, I = I + Math.imul(Ft, xt) | 0, c = c + Math.imul(Ft, Et) | 0, c = c + Math.imul(Wt, xt) | 0, u = u + Math.imul(Wt, Et) | 0, I = I + Math.imul(Lt, wt) | 0, c = c + Math.imul(Lt, ie) | 0, c = c + Math.imul(Kt, wt) | 0, u = u + Math.imul(Kt, ie) | 0, I = I + Math.imul(Ht, oe) | 0, c = c + Math.imul(Ht, se) | 0, c = c + Math.imul(Pt, oe) | 0, u = u + Math.imul(Pt, se) | 0;
                var qn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (qn >>> 26) | 0, qn &= 67108863, I = Math.imul(d, Jt), c = Math.imul(d, E), c = c + Math.imul(A, Jt) | 0, u = Math.imul(A, E), I = I + Math.imul(Mt, p) | 0, c = c + Math.imul(Mt, k) | 0, c = c + Math.imul(v, p) | 0, u = u + Math.imul(v, k) | 0, I = I + Math.imul(Ct, Z) | 0, c = c + Math.imul(Ct, rt) | 0, c = c + Math.imul(zt, Z) | 0, u = u + Math.imul(zt, rt) | 0, I = I + Math.imul(kt, xt) | 0, c = c + Math.imul(kt, Et) | 0, c = c + Math.imul(Ut, xt) | 0, u = u + Math.imul(Ut, Et) | 0, I = I + Math.imul(Ft, wt) | 0, c = c + Math.imul(Ft, ie) | 0, c = c + Math.imul(Wt, wt) | 0, u = u + Math.imul(Wt, ie) | 0, I = I + Math.imul(Lt, oe) | 0, c = c + Math.imul(Lt, se) | 0, c = c + Math.imul(Kt, oe) | 0, u = u + Math.imul(Kt, se) | 0;
                var zn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (zn >>> 26) | 0, zn &= 67108863, I = Math.imul(d, p), c = Math.imul(d, k), c = c + Math.imul(A, p) | 0, u = Math.imul(A, k), I = I + Math.imul(Mt, Z) | 0, c = c + Math.imul(Mt, rt) | 0, c = c + Math.imul(v, Z) | 0, u = u + Math.imul(v, rt) | 0, I = I + Math.imul(Ct, xt) | 0, c = c + Math.imul(Ct, Et) | 0, c = c + Math.imul(zt, xt) | 0, u = u + Math.imul(zt, Et) | 0, I = I + Math.imul(kt, wt) | 0, c = c + Math.imul(kt, ie) | 0, c = c + Math.imul(Ut, wt) | 0, u = u + Math.imul(Ut, ie) | 0, I = I + Math.imul(Ft, oe) | 0, c = c + Math.imul(Ft, se) | 0, c = c + Math.imul(Wt, oe) | 0, u = u + Math.imul(Wt, se) | 0;
                var Dn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Dn >>> 26) | 0, Dn &= 67108863, I = Math.imul(d, Z), c = Math.imul(d, rt), c = c + Math.imul(A, Z) | 0, u = Math.imul(A, rt), I = I + Math.imul(Mt, xt) | 0, c = c + Math.imul(Mt, Et) | 0, c = c + Math.imul(v, xt) | 0, u = u + Math.imul(v, Et) | 0, I = I + Math.imul(Ct, wt) | 0, c = c + Math.imul(Ct, ie) | 0, c = c + Math.imul(zt, wt) | 0, u = u + Math.imul(zt, ie) | 0, I = I + Math.imul(kt, oe) | 0, c = c + Math.imul(kt, se) | 0, c = c + Math.imul(Ut, oe) | 0, u = u + Math.imul(Ut, se) | 0;
                var $n = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + ($n >>> 26) | 0, $n &= 67108863, I = Math.imul(d, xt), c = Math.imul(d, Et), c = c + Math.imul(A, xt) | 0, u = Math.imul(A, Et), I = I + Math.imul(Mt, wt) | 0, c = c + Math.imul(Mt, ie) | 0, c = c + Math.imul(v, wt) | 0, u = u + Math.imul(v, ie) | 0, I = I + Math.imul(Ct, oe) | 0, c = c + Math.imul(Ct, se) | 0, c = c + Math.imul(zt, oe) | 0, u = u + Math.imul(zt, se) | 0;
                var Hn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Hn >>> 26) | 0, Hn &= 67108863, I = Math.imul(d, wt), c = Math.imul(d, ie), c = c + Math.imul(A, wt) | 0, u = Math.imul(A, ie), I = I + Math.imul(Mt, oe) | 0, c = c + Math.imul(Mt, se) | 0, c = c + Math.imul(v, oe) | 0, u = u + Math.imul(v, se) | 0;
                var Kn = (D + I | 0) + ((c & 8191) << 13) | 0;
                D = (u + (c >>> 13) | 0) + (Kn >>> 26) | 0, Kn &= 67108863, I = Math.imul(d, oe), c = Math.imul(d, se), c = c + Math.imul(A, oe) | 0, u = Math.imul(A, se);
                var Wn = (D + I | 0) + ((c & 8191) << 13) | 0;
                return D = (u + (c >>> 13) | 0) + (Wn >>> 26) | 0, Wn &= 67108863, q[0] = An, q[1] = kn, q[2] = Rn, q[3] = Mn, q[4] = Tn, q[5] = Ln, q[6] = Un, q[7] = Cn, q[8] = Nn, q[9] = On, q[10] = Pn, q[11] = Fn, q[12] = qn, q[13] = zn, q[14] = Dn, q[15] = $n, q[16] = Hn, q[17] = Kn, q[18] = Wn, D !== 0 && (q[19] = D, w.length++), w
            };
            Math.imul || (V = Q);

            function W(b, a, g) {
                g.negative = a.negative ^ b.negative, g.length = b.length + a.length;
                for (var w = 0, _ = 0, R = 0; R < g.length - 1; R++) {
                    var q = _;
                    _ = 0;
                    for (var D = w & 67108863, I = Math.min(R, a.length - 1), c = Math.max(0, R - b.length + 1); c <= I; c++) {
                        var u = R - c,
                            x = b.words[u] | 0,
                            M = a.words[c] | 0,
                            K = x * M,
                            ot = K & 67108863;
                        q = q + (K / 67108864 | 0) | 0, ot = ot + D | 0, D = ot & 67108863, q = q + (ot >>> 26) | 0, _ += q >>> 26, q &= 67108863
                    }
                    g.words[R] = D, w = q, q = _
                }
                return w !== 0 ? g.words[R] = w : g.length--, g._strip()
            }

            function st(b, a, g) {
                return W(b, a, g)
            }
            i.prototype.mulTo = function(a, g) {
                var w, _ = this.length + a.length;
                return this.length === 10 && a.length === 10 ? w = V(this, a, g) : _ < 63 ? w = Q(this, a, g) : _ < 1024 ? w = W(this, a, g) : w = st(this, a, g), w
            }, i.prototype.mul = function(a) {
                var g = new i(null);
                return g.words = new Array(this.length + a.length), this.mulTo(a, g)
            }, i.prototype.mulf = function(a) {
                var g = new i(null);
                return g.words = new Array(this.length + a.length), st(this, a, g)
            }, i.prototype.imul = function(a) {
                return this.clone().mulTo(a, this)
            }, i.prototype.imuln = function(a) {
                var g = a < 0;
                g && (a = -a), r(typeof a == "number"), r(a < 67108864);
                for (var w = 0, _ = 0; _ < this.length; _++) {
                    var R = (this.words[_] | 0) * a,
                        q = (R & 67108863) + (w & 67108863);
                    w >>= 26, w += R / 67108864 | 0, w += q >>> 26, this.words[_] = q & 67108863
                }
                return w !== 0 && (this.words[_] = w, this.length++), this.length = a === 0 ? 1 : this.length, g ? this.ineg() : this
            }, i.prototype.muln = function(a) {
                return this.clone().imuln(a)
            }, i.prototype.sqr = function() {
                return this.mul(this)
            }, i.prototype.isqr = function() {
                return this.imul(this.clone())
            }, i.prototype.pow = function(a) {
                var g = C(a);
                if (g.length === 0) return new i(1);
                for (var w = this, _ = 0; _ < g.length && g[_] === 0; _++, w = w.sqr());
                if (++_ < g.length)
                    for (var R = w.sqr(); _ < g.length; _++, R = R.sqr()) g[_] !== 0 && (w = w.mul(R));
                return w
            }, i.prototype.iushln = function(a) {
                r(typeof a == "number" && a >= 0);
                var g = a % 26,
                    w = (a - g) / 26,
                    _ = 67108863 >>> 26 - g << 26 - g,
                    R;
                if (g !== 0) {
                    var q = 0;
                    for (R = 0; R < this.length; R++) {
                        var D = this.words[R] & _,
                            I = (this.words[R] | 0) - D << g;
                        this.words[R] = I | q, q = D >>> 26 - g
                    }
                    q && (this.words[R] = q, this.length++)
                }
                if (w !== 0) {
                    for (R = this.length - 1; R >= 0; R--) this.words[R + w] = this.words[R];
                    for (R = 0; R < w; R++) this.words[R] = 0;
                    this.length += w
                }
                return this._strip()
            }, i.prototype.ishln = function(a) {
                return r(this.negative === 0), this.iushln(a)
            }, i.prototype.iushrn = function(a, g, w) {
                r(typeof a == "number" && a >= 0);
                var _;
                g ? _ = (g - g % 26) / 26 : _ = 0;
                var R = a % 26,
                    q = Math.min((a - R) / 26, this.length),
                    D = 67108863 ^ 67108863 >>> R << R,
                    I = w;
                if (_ -= q, _ = Math.max(0, _), I) {
                    for (var c = 0; c < q; c++) I.words[c] = this.words[c];
                    I.length = q
                }
                if (q !== 0)
                    if (this.length > q)
                        for (this.length -= q, c = 0; c < this.length; c++) this.words[c] = this.words[c + q];
                    else this.words[0] = 0, this.length = 1;
                var u = 0;
                for (c = this.length - 1; c >= 0 && (u !== 0 || c >= _); c--) {
                    var x = this.words[c] | 0;
                    this.words[c] = u << 26 - R | x >>> R, u = x & D
                }
                return I && u !== 0 && (I.words[I.length++] = u), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, i.prototype.ishrn = function(a, g, w) {
                return r(this.negative === 0), this.iushrn(a, g, w)
            }, i.prototype.shln = function(a) {
                return this.clone().ishln(a)
            }, i.prototype.ushln = function(a) {
                return this.clone().iushln(a)
            }, i.prototype.shrn = function(a) {
                return this.clone().ishrn(a)
            }, i.prototype.ushrn = function(a) {
                return this.clone().iushrn(a)
            }, i.prototype.testn = function(a) {
                r(typeof a == "number" && a >= 0);
                var g = a % 26,
                    w = (a - g) / 26,
                    _ = 1 << g;
                if (this.length <= w) return !1;
                var R = this.words[w];
                return !!(R & _)
            }, i.prototype.imaskn = function(a) {
                r(typeof a == "number" && a >= 0);
                var g = a % 26,
                    w = (a - g) / 26;
                if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= w) return this;
                if (g !== 0 && w++, this.length = Math.min(w, this.length), g !== 0) {
                    var _ = 67108863 ^ 67108863 >>> g << g;
                    this.words[this.length - 1] &= _
                }
                return this._strip()
            }, i.prototype.maskn = function(a) {
                return this.clone().imaskn(a)
            }, i.prototype.iaddn = function(a) {
                return r(typeof a == "number"), r(a < 67108864), a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= a ? (this.words[0] = a - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a)
            }, i.prototype._iaddn = function(a) {
                this.words[0] += a;
                for (var g = 0; g < this.length && this.words[g] >= 67108864; g++) this.words[g] -= 67108864, g === this.length - 1 ? this.words[g + 1] = 1 : this.words[g + 1]++;
                return this.length = Math.max(this.length, g + 1), this
            }, i.prototype.isubn = function(a) {
                if (r(typeof a == "number"), r(a < 67108864), a < 0) return this.iaddn(-a);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(a), this.negative = 1, this;
                if (this.words[0] -= a, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var g = 0; g < this.length && this.words[g] < 0; g++) this.words[g] += 67108864, this.words[g + 1] -= 1;
                return this._strip()
            }, i.prototype.addn = function(a) {
                return this.clone().iaddn(a)
            }, i.prototype.subn = function(a) {
                return this.clone().isubn(a)
            }, i.prototype.iabs = function() {
                return this.negative = 0, this
            }, i.prototype.abs = function() {
                return this.clone().iabs()
            }, i.prototype._ishlnsubmul = function(a, g, w) {
                var _ = a.length + w,
                    R;
                this._expand(_);
                var q, D = 0;
                for (R = 0; R < a.length; R++) {
                    q = (this.words[R + w] | 0) + D;
                    var I = (a.words[R] | 0) * g;
                    q -= I & 67108863, D = (q >> 26) - (I / 67108864 | 0), this.words[R + w] = q & 67108863
                }
                for (; R < this.length - w; R++) q = (this.words[R + w] | 0) + D, D = q >> 26, this.words[R + w] = q & 67108863;
                if (D === 0) return this._strip();
                for (r(D === -1), D = 0, R = 0; R < this.length; R++) q = -(this.words[R] | 0) + D, D = q >> 26, this.words[R] = q & 67108863;
                return this.negative = 1, this._strip()
            }, i.prototype._wordDiv = function(a, g) {
                var w = this.length - a.length,
                    _ = this.clone(),
                    R = a,
                    q = R.words[R.length - 1] | 0,
                    D = this._countBits(q);
                w = 26 - D, w !== 0 && (R = R.ushln(w), _.iushln(w), q = R.words[R.length - 1] | 0);
                var I = _.length - R.length,
                    c;
                if (g !== "mod") {
                    c = new i(null), c.length = I + 1, c.words = new Array(c.length);
                    for (var u = 0; u < c.length; u++) c.words[u] = 0
                }
                var x = _.clone()._ishlnsubmul(R, 1, I);
                x.negative === 0 && (_ = x, c && (c.words[I] = 1));
                for (var M = I - 1; M >= 0; M--) {
                    var K = (_.words[R.length + M] | 0) * 67108864 + (_.words[R.length + M - 1] | 0);
                    for (K = Math.min(K / q | 0, 67108863), _._ishlnsubmul(R, K, M); _.negative !== 0;) K--, _.negative = 0, _._ishlnsubmul(R, 1, M), _.isZero() || (_.negative ^= 1);
                    c && (c.words[M] = K)
                }
                return c && c._strip(), _._strip(), g !== "div" && w !== 0 && _.iushrn(w), {
                    div: c || null,
                    mod: _
                }
            }, i.prototype.divmod = function(a, g, w) {
                if (r(!a.isZero()), this.isZero()) return {
                    div: new i(0),
                    mod: new i(0)
                };
                var _, R, q;
                return this.negative !== 0 && a.negative === 0 ? (q = this.neg().divmod(a, g), g !== "mod" && (_ = q.div.neg()), g !== "div" && (R = q.mod.neg(), w && R.negative !== 0 && R.iadd(a)), {
                    div: _,
                    mod: R
                }) : this.negative === 0 && a.negative !== 0 ? (q = this.divmod(a.neg(), g), g !== "mod" && (_ = q.div.neg()), {
                    div: _,
                    mod: q.mod
                }) : (this.negative & a.negative) !== 0 ? (q = this.neg().divmod(a.neg(), g), g !== "div" && (R = q.mod.neg(), w && R.negative !== 0 && R.isub(a)), {
                    div: q.div,
                    mod: R
                }) : a.length > this.length || this.cmp(a) < 0 ? {
                    div: new i(0),
                    mod: this
                } : a.length === 1 ? g === "div" ? {
                    div: this.divn(a.words[0]),
                    mod: null
                } : g === "mod" ? {
                    div: null,
                    mod: new i(this.modrn(a.words[0]))
                } : {
                    div: this.divn(a.words[0]),
                    mod: new i(this.modrn(a.words[0]))
                } : this._wordDiv(a, g)
            }, i.prototype.div = function(a) {
                return this.divmod(a, "div", !1).div
            }, i.prototype.mod = function(a) {
                return this.divmod(a, "mod", !1).mod
            }, i.prototype.umod = function(a) {
                return this.divmod(a, "mod", !0).mod
            }, i.prototype.divRound = function(a) {
                var g = this.divmod(a);
                if (g.mod.isZero()) return g.div;
                var w = g.div.negative !== 0 ? g.mod.isub(a) : g.mod,
                    _ = a.ushrn(1),
                    R = a.andln(1),
                    q = w.cmp(_);
                return q < 0 || R === 1 && q === 0 ? g.div : g.div.negative !== 0 ? g.div.isubn(1) : g.div.iaddn(1)
            }, i.prototype.modrn = function(a) {
                var g = a < 0;
                g && (a = -a), r(a <= 67108863);
                for (var w = (1 << 26) % a, _ = 0, R = this.length - 1; R >= 0; R--) _ = (w * _ + (this.words[R] | 0)) % a;
                return g ? -_ : _
            }, i.prototype.modn = function(a) {
                return this.modrn(a)
            }, i.prototype.idivn = function(a) {
                var g = a < 0;
                g && (a = -a), r(a <= 67108863);
                for (var w = 0, _ = this.length - 1; _ >= 0; _--) {
                    var R = (this.words[_] | 0) + w * 67108864;
                    this.words[_] = R / a | 0, w = R % a
                }
                return this._strip(), g ? this.ineg() : this
            }, i.prototype.divn = function(a) {
                return this.clone().idivn(a)
            }, i.prototype.egcd = function(a) {
                r(a.negative === 0), r(!a.isZero());
                var g = this,
                    w = a.clone();
                g.negative !== 0 ? g = g.umod(a) : g = g.clone();
                for (var _ = new i(1), R = new i(0), q = new i(0), D = new i(1), I = 0; g.isEven() && w.isEven();) g.iushrn(1), w.iushrn(1), ++I;
                for (var c = w.clone(), u = g.clone(); !g.isZero();) {
                    for (var x = 0, M = 1;
                        (g.words[0] & M) === 0 && x < 26; ++x, M <<= 1);
                    if (x > 0)
                        for (g.iushrn(x); x-- > 0;)(_.isOdd() || R.isOdd()) && (_.iadd(c), R.isub(u)), _.iushrn(1), R.iushrn(1);
                    for (var K = 0, ot = 1;
                        (w.words[0] & ot) === 0 && K < 26; ++K, ot <<= 1);
                    if (K > 0)
                        for (w.iushrn(K); K-- > 0;)(q.isOdd() || D.isOdd()) && (q.iadd(c), D.isub(u)), q.iushrn(1), D.iushrn(1);
                    g.cmp(w) >= 0 ? (g.isub(w), _.isub(q), R.isub(D)) : (w.isub(g), q.isub(_), D.isub(R))
                }
                return {
                    a: q,
                    b: D,
                    gcd: w.iushln(I)
                }
            }, i.prototype._invmp = function(a) {
                r(a.negative === 0), r(!a.isZero());
                var g = this,
                    w = a.clone();
                g.negative !== 0 ? g = g.umod(a) : g = g.clone();
                for (var _ = new i(1), R = new i(0), q = w.clone(); g.cmpn(1) > 0 && w.cmpn(1) > 0;) {
                    for (var D = 0, I = 1;
                        (g.words[0] & I) === 0 && D < 26; ++D, I <<= 1);
                    if (D > 0)
                        for (g.iushrn(D); D-- > 0;) _.isOdd() && _.iadd(q), _.iushrn(1);
                    for (var c = 0, u = 1;
                        (w.words[0] & u) === 0 && c < 26; ++c, u <<= 1);
                    if (c > 0)
                        for (w.iushrn(c); c-- > 0;) R.isOdd() && R.iadd(q), R.iushrn(1);
                    g.cmp(w) >= 0 ? (g.isub(w), _.isub(R)) : (w.isub(g), R.isub(_))
                }
                var x;
                return g.cmpn(1) === 0 ? x = _ : x = R, x.cmpn(0) < 0 && x.iadd(a), x
            }, i.prototype.gcd = function(a) {
                if (this.isZero()) return a.abs();
                if (a.isZero()) return this.abs();
                var g = this.clone(),
                    w = a.clone();
                g.negative = 0, w.negative = 0;
                for (var _ = 0; g.isEven() && w.isEven(); _++) g.iushrn(1), w.iushrn(1);
                do {
                    for (; g.isEven();) g.iushrn(1);
                    for (; w.isEven();) w.iushrn(1);
                    var R = g.cmp(w);
                    if (R < 0) {
                        var q = g;
                        g = w, w = q
                    } else if (R === 0 || w.cmpn(1) === 0) break;
                    g.isub(w)
                } while (!0);
                return w.iushln(_)
            }, i.prototype.invm = function(a) {
                return this.egcd(a).a.umod(a)
            }, i.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, i.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, i.prototype.andln = function(a) {
                return this.words[0] & a
            }, i.prototype.bincn = function(a) {
                r(typeof a == "number");
                var g = a % 26,
                    w = (a - g) / 26,
                    _ = 1 << g;
                if (this.length <= w) return this._expand(w + 1), this.words[w] |= _, this;
                for (var R = _, q = w; R !== 0 && q < this.length; q++) {
                    var D = this.words[q] | 0;
                    D += R, R = D >>> 26, D &= 67108863, this.words[q] = D
                }
                return R !== 0 && (this.words[q] = R, this.length++), this
            }, i.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, i.prototype.cmpn = function(a) {
                var g = a < 0;
                if (this.negative !== 0 && !g) return -1;
                if (this.negative === 0 && g) return 1;
                this._strip();
                var w;
                if (this.length > 1) w = 1;
                else {
                    g && (a = -a), r(a <= 67108863, "Number is too big");
                    var _ = this.words[0] | 0;
                    w = _ === a ? 0 : _ < a ? -1 : 1
                }
                return this.negative !== 0 ? -w | 0 : w
            }, i.prototype.cmp = function(a) {
                if (this.negative !== 0 && a.negative === 0) return -1;
                if (this.negative === 0 && a.negative !== 0) return 1;
                var g = this.ucmp(a);
                return this.negative !== 0 ? -g | 0 : g
            }, i.prototype.ucmp = function(a) {
                if (this.length > a.length) return 1;
                if (this.length < a.length) return -1;
                for (var g = 0, w = this.length - 1; w >= 0; w--) {
                    var _ = this.words[w] | 0,
                        R = a.words[w] | 0;
                    if (_ !== R) {
                        _ < R ? g = -1 : _ > R && (g = 1);
                        break
                    }
                }
                return g
            }, i.prototype.gtn = function(a) {
                return this.cmpn(a) === 1
            }, i.prototype.gt = function(a) {
                return this.cmp(a) === 1
            }, i.prototype.gten = function(a) {
                return this.cmpn(a) >= 0
            }, i.prototype.gte = function(a) {
                return this.cmp(a) >= 0
            }, i.prototype.ltn = function(a) {
                return this.cmpn(a) === -1
            }, i.prototype.lt = function(a) {
                return this.cmp(a) === -1
            }, i.prototype.lten = function(a) {
                return this.cmpn(a) <= 0
            }, i.prototype.lte = function(a) {
                return this.cmp(a) <= 0
            }, i.prototype.eqn = function(a) {
                return this.cmpn(a) === 0
            }, i.prototype.eq = function(a) {
                return this.cmp(a) === 0
            }, i.red = function(a) {
                return new N(a)
            }, i.prototype.toRed = function(a) {
                return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), a.convertTo(this)._forceRed(a)
            }, i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, i.prototype._forceRed = function(a) {
                return this.red = a, this
            }, i.prototype.forceRed = function(a) {
                return r(!this.red, "Already a number in reduction context"), this._forceRed(a)
            }, i.prototype.redAdd = function(a) {
                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, a)
            }, i.prototype.redIAdd = function(a) {
                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a)
            }, i.prototype.redSub = function(a) {
                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, a)
            }, i.prototype.redISub = function(a) {
                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, a)
            }, i.prototype.redShl = function(a) {
                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, a)
            }, i.prototype.redMul = function(a) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a)
            }, i.prototype.redIMul = function(a) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a)
            }, i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, i.prototype.redPow = function(a) {
                return r(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a)
            };
            var X = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function nt(b, a) {
                this.name = b, this.p = new i(a, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            nt.prototype._tmp = function() {
                var a = new i(null);
                return a.words = new Array(Math.ceil(this.n / 13)), a
            }, nt.prototype.ireduce = function(a) {
                var g = a,
                    w;
                do this.split(g, this.tmp), g = this.imulK(g), g = g.iadd(this.tmp), w = g.bitLength(); while (w > this.n);
                var _ = w < this.n ? -1 : g.ucmp(this.p);
                return _ === 0 ? (g.words[0] = 0, g.length = 1) : _ > 0 ? g.isub(this.p) : g.strip !== void 0 ? g.strip() : g._strip(), g
            }, nt.prototype.split = function(a, g) {
                a.iushrn(this.n, 0, g)
            }, nt.prototype.imulK = function(a) {
                return a.imul(this.k)
            };

            function it() {
                nt.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            o(it, nt), it.prototype.split = function(a, g) {
                for (var w = 4194303, _ = Math.min(a.length, 9), R = 0; R < _; R++) g.words[R] = a.words[R];
                if (g.length = _, a.length <= 9) {
                    a.words[0] = 0, a.length = 1;
                    return
                }
                var q = a.words[9];
                for (g.words[g.length++] = q & w, R = 10; R < a.length; R++) {
                    var D = a.words[R] | 0;
                    a.words[R - 10] = (D & w) << 4 | q >>> 22, q = D
                }
                q >>>= 22, a.words[R - 10] = q, q === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9
            }, it.prototype.imulK = function(a) {
                a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
                for (var g = 0, w = 0; w < a.length; w++) {
                    var _ = a.words[w] | 0;
                    g += _ * 977, a.words[w] = g & 67108863, g = _ * 64 + (g / 67108864 | 0)
                }
                return a.words[a.length - 1] === 0 && (a.length--, a.words[a.length - 1] === 0 && a.length--), a
            };

            function tt() {
                nt.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            o(tt, nt);

            function T() {
                nt.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            o(T, nt);

            function L() {
                nt.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            o(L, nt), L.prototype.imulK = function(a) {
                for (var g = 0, w = 0; w < a.length; w++) {
                    var _ = (a.words[w] | 0) * 19 + g,
                        R = _ & 67108863;
                    _ >>>= 26, a.words[w] = R, g = _
                }
                return g !== 0 && (a.words[a.length++] = g), a
            }, i._prime = function(a) {
                if (X[a]) return X[a];
                var g;
                if (a === "k256") g = new it;
                else if (a === "p224") g = new tt;
                else if (a === "p192") g = new T;
                else if (a === "p25519") g = new L;
                else throw new Error("Unknown prime " + a);
                return X[a] = g, g
            };

            function N(b) {
                if (typeof b == "string") {
                    var a = i._prime(b);
                    this.m = a.p, this.prime = a
                } else r(b.gtn(1), "modulus must be greater than 1"), this.m = b, this.prime = null
            }
            N.prototype._verify1 = function(a) {
                r(a.negative === 0, "red works only with positives"), r(a.red, "red works only with red numbers")
            }, N.prototype._verify2 = function(a, g) {
                r((a.negative | g.negative) === 0, "red works only with positives"), r(a.red && a.red === g.red, "red works only with red numbers")
            }, N.prototype.imod = function(a) {
                return this.prime ? this.prime.ireduce(a)._forceRed(this) : (m(a, a.umod(this.m)._forceRed(this)), a)
            }, N.prototype.neg = function(a) {
                return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
            }, N.prototype.add = function(a, g) {
                this._verify2(a, g);
                var w = a.add(g);
                return w.cmp(this.m) >= 0 && w.isub(this.m), w._forceRed(this)
            }, N.prototype.iadd = function(a, g) {
                this._verify2(a, g);
                var w = a.iadd(g);
                return w.cmp(this.m) >= 0 && w.isub(this.m), w
            }, N.prototype.sub = function(a, g) {
                this._verify2(a, g);
                var w = a.sub(g);
                return w.cmpn(0) < 0 && w.iadd(this.m), w._forceRed(this)
            }, N.prototype.isub = function(a, g) {
                this._verify2(a, g);
                var w = a.isub(g);
                return w.cmpn(0) < 0 && w.iadd(this.m), w
            }, N.prototype.shl = function(a, g) {
                return this._verify1(a), this.imod(a.ushln(g))
            }, N.prototype.imul = function(a, g) {
                return this._verify2(a, g), this.imod(a.imul(g))
            }, N.prototype.mul = function(a, g) {
                return this._verify2(a, g), this.imod(a.mul(g))
            }, N.prototype.isqr = function(a) {
                return this.imul(a, a.clone())
            }, N.prototype.sqr = function(a) {
                return this.mul(a, a)
            }, N.prototype.sqrt = function(a) {
                if (a.isZero()) return a.clone();
                var g = this.m.andln(3);
                if (r(g % 2 === 1), g === 3) {
                    var w = this.m.add(new i(1)).iushrn(2);
                    return this.pow(a, w)
                }
                for (var _ = this.m.subn(1), R = 0; !_.isZero() && _.andln(1) === 0;) R++, _.iushrn(1);
                r(!_.isZero());
                var q = new i(1).toRed(this),
                    D = q.redNeg(),
                    I = this.m.subn(1).iushrn(1),
                    c = this.m.bitLength();
                for (c = new i(2 * c * c).toRed(this); this.pow(c, I).cmp(D) !== 0;) c.redIAdd(D);
                for (var u = this.pow(c, _), x = this.pow(a, _.addn(1).iushrn(1)), M = this.pow(a, _), K = R; M.cmp(q) !== 0;) {
                    for (var ot = M, ft = 0; ot.cmp(q) !== 0; ft++) ot = ot.redSqr();
                    r(ft < K);
                    var pt = this.pow(u, new i(1).iushln(K - ft - 1));
                    x = x.redMul(pt), u = pt.redSqr(), M = M.redMul(u), K = ft
                }
                return x
            }, N.prototype.invm = function(a) {
                var g = a._invmp(this.m);
                return g.negative !== 0 ? (g.negative = 0, this.imod(g).redNeg()) : this.imod(g)
            }, N.prototype.pow = function(a, g) {
                if (g.isZero()) return new i(1).toRed(this);
                if (g.cmpn(1) === 0) return a.clone();
                var w = 4,
                    _ = new Array(1 << w);
                _[0] = new i(1).toRed(this), _[1] = a;
                for (var R = 2; R < _.length; R++) _[R] = this.mul(_[R - 1], a);
                var q = _[0],
                    D = 0,
                    I = 0,
                    c = g.bitLength() % 26;
                for (c === 0 && (c = 26), R = g.length - 1; R >= 0; R--) {
                    for (var u = g.words[R], x = c - 1; x >= 0; x--) {
                        var M = u >> x & 1;
                        if (q !== _[0] && (q = this.sqr(q)), M === 0 && D === 0) {
                            I = 0;
                            continue
                        }
                        D <<= 1, D |= M, I++, !(I !== w && (R !== 0 || x !== 0)) && (q = this.mul(q, _[D]), I = 0, D = 0)
                    }
                    c = 26
                }
                return q
            }, N.prototype.convertTo = function(a) {
                var g = a.umod(this.m);
                return g === a ? g.clone() : g
            }, N.prototype.convertFrom = function(a) {
                var g = a.clone();
                return g.red = null, g
            }, i.mont = function(a) {
                return new B(a)
            };

            function B(b) {
                N.call(this, b), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            o(B, N), B.prototype.convertTo = function(a) {
                return this.imod(a.ushln(this.shift))
            }, B.prototype.convertFrom = function(a) {
                var g = this.imod(a.mul(this.rinv));
                return g.red = null, g
            }, B.prototype.imul = function(a, g) {
                if (a.isZero() || g.isZero()) return a.words[0] = 0, a.length = 1, a;
                var w = a.imul(g),
                    _ = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    R = w.isub(_).iushrn(this.shift),
                    q = R;
                return R.cmp(this.m) >= 0 ? q = R.isub(this.m) : R.cmpn(0) < 0 && (q = R.iadd(this.m)), q._forceRed(this)
            }, B.prototype.mul = function(a, g) {
                if (a.isZero() || g.isZero()) return new i(0)._forceRed(this);
                var w = a.mul(g),
                    _ = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    R = w.isub(_).iushrn(this.shift),
                    q = R;
                return R.cmp(this.m) >= 0 ? q = R.isub(this.m) : R.cmpn(0) < 0 && (q = R.iadd(this.m)), q._forceRed(this)
            }, B.prototype.invm = function(a) {
                var g = this.imod(a._invmp(this.m).mul(this.r2));
                return g._forceRed(this)
            }
        })(n, gc)
    }(Jr)), Jr.exports
}
var yc = gs();
const co = fn(yc);
var Qn = {
        exports: {}
    },
    uo;

function mc() {
    return uo || (uo = 1, function(n) {
        var t = Object.prototype.hasOwnProperty,
            e = "~";

        function r() {}
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (e = !1));

        function o(y, S, m) {
            this.fn = y, this.context = S, this.once = m || !1
        }

        function i(y, S, m, U, H) {
            if (typeof m != "function") throw new TypeError("The listener must be a function");
            var O = new o(m, U || y, H),
                j = e ? e + S : S;
            return y._events[j] ? y._events[j].fn ? y._events[j] = [y._events[j], O] : y._events[j].push(O) : (y._events[j] = O, y._eventsCount++), y
        }

        function s(y, S) {
            --y._eventsCount === 0 ? y._events = new r : delete y._events[S]
        }

        function f() {
            this._events = new r, this._eventsCount = 0
        }
        f.prototype.eventNames = function() {
            var S = [],
                m, U;
            if (this._eventsCount === 0) return S;
            for (U in m = this._events) t.call(m, U) && S.push(e ? U.slice(1) : U);
            return Object.getOwnPropertySymbols ? S.concat(Object.getOwnPropertySymbols(m)) : S
        }, f.prototype.listeners = function(S) {
            var m = e ? e + S : S,
                U = this._events[m];
            if (!U) return [];
            if (U.fn) return [U.fn];
            for (var H = 0, O = U.length, j = new Array(O); H < O; H++) j[H] = U[H].fn;
            return j
        }, f.prototype.listenerCount = function(S) {
            var m = e ? e + S : S,
                U = this._events[m];
            return U ? U.fn ? 1 : U.length : 0
        }, f.prototype.emit = function(S, m, U, H, O, j) {
            var F = e ? e + S : S;
            if (!this._events[F]) return !1;
            var C = this._events[F],
                Q = arguments.length,
                V, W;
            if (C.fn) {
                switch (C.once && this.removeListener(S, C.fn, void 0, !0), Q) {
                    case 1:
                        return C.fn.call(C.context), !0;
                    case 2:
                        return C.fn.call(C.context, m), !0;
                    case 3:
                        return C.fn.call(C.context, m, U), !0;
                    case 4:
                        return C.fn.call(C.context, m, U, H), !0;
                    case 5:
                        return C.fn.call(C.context, m, U, H, O), !0;
                    case 6:
                        return C.fn.call(C.context, m, U, H, O, j), !0
                }
                for (W = 1, V = new Array(Q - 1); W < Q; W++) V[W - 1] = arguments[W];
                C.fn.apply(C.context, V)
            } else {
                var st = C.length,
                    X;
                for (W = 0; W < st; W++) switch (C[W].once && this.removeListener(S, C[W].fn, void 0, !0), Q) {
                    case 1:
                        C[W].fn.call(C[W].context);
                        break;
                    case 2:
                        C[W].fn.call(C[W].context, m);
                        break;
                    case 3:
                        C[W].fn.call(C[W].context, m, U);
                        break;
                    case 4:
                        C[W].fn.call(C[W].context, m, U, H);
                        break;
                    default:
                        if (!V)
                            for (X = 1, V = new Array(Q - 1); X < Q; X++) V[X - 1] = arguments[X];
                        C[W].fn.apply(C[W].context, V)
                }
            }
            return !0
        }, f.prototype.on = function(S, m, U) {
            return i(this, S, m, U, !1)
        }, f.prototype.once = function(S, m, U) {
            return i(this, S, m, U, !0)
        }, f.prototype.removeListener = function(S, m, U, H) {
            var O = e ? e + S : S;
            if (!this._events[O]) return this;
            if (!m) return s(this, O), this;
            var j = this._events[O];
            if (j.fn) j.fn === m && (!H || j.once) && (!U || j.context === U) && s(this, O);
            else {
                for (var F = 0, C = [], Q = j.length; F < Q; F++)(j[F].fn !== m || H && !j[F].once || U && j[F].context !== U) && C.push(j[F]);
                C.length ? this._events[O] = C.length === 1 ? C[0] : C : s(this, O)
            }
            return this
        }, f.prototype.removeAllListeners = function(S) {
            var m;
            return S ? (m = e ? e + S : S, this._events[m] && s(this, m)) : (this._events = new r, this._eventsCount = 0), this
        }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = e, f.EventEmitter = f, n.exports = f
    }(Qn)), Qn.exports
}
var wc = mc();
const ys = fn(wc); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Pe = BigInt(0),
    ve = BigInt(1),
    ti = BigInt(2),
    bc = BigInt(8),
    vc = {
        zip215: !0
    };

function Ec(n, t, e, r) {
    const o = n.sqr(e),
        i = n.sqr(r),
        s = n.add(n.mul(t.a, o), i),
        f = n.add(n.ONE, n.mul(t.d, n.mul(o, i)));
    return n.eql(s, f)
}

function xc(n, t = {}) {
    const {
        Fp: e,
        Fn: r
    } = fs("edwards", n, t), {
        h: o,
        n: i
    } = n;
    qr(t, {}, {
        uvRatio: "function"
    });
    const s = ti << BigInt(r.BYTES * 8) - ve,
        f = F => e.create(F),
        y = t.uvRatio || ((F, C) => {
            try {
                return {
                    isValid: !0,
                    value: e.sqrt(e.div(F, C))
                }
            } catch {
                return {
                    isValid: !1,
                    value: Pe
                }
            }
        });
    if (!Ec(e, n, n.Gx, n.Gy)) throw new Error("bad curve params: generator point");

    function S(F, C, Q = !1) {
        const V = Q ? ve : Pe;
        return mr("coordinate " + F, C, V, s), C
    }

    function m(F) {
        if (!(F instanceof O)) throw new Error("ExtendedPoint expected")
    }
    const U = tn((F, C) => {
            const {
                ex: Q,
                ey: V,
                ez: W
            } = F, st = F.is0();
            C == null && (C = st ? bc : e.inv(W));
            const X = f(Q * C),
                nt = f(V * C),
                it = f(W * C);
            if (st) return {
                x: Pe,
                y: ve
            };
            if (it !== ve) throw new Error("invZ was invalid");
            return {
                x: X,
                y: nt
            }
        }),
        H = tn(F => {
            const {
                a: C,
                d: Q
            } = n;
            if (F.is0()) throw new Error("bad point: ZERO");
            const {
                ex: V,
                ey: W,
                ez: st,
                et: X
            } = F, nt = f(V * V), it = f(W * W), tt = f(st * st), T = f(tt * tt), L = f(nt * C), N = f(tt * f(L + it)), B = f(T + f(Q * f(nt * it)));
            if (N !== B) throw new Error("bad point: equation left != right (1)");
            const b = f(V * W),
                a = f(st * X);
            if (b !== a) throw new Error("bad point: equation left != right (2)");
            return !0
        });
    class O {
        constructor(C, Q, V, W) {
            this.ex = S("x", C), this.ey = S("y", Q), this.ez = S("z", V, !0), this.et = S("t", W), Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(C) {
            if (C instanceof O) throw new Error("extended point not allowed");
            const {
                x: Q,
                y: V
            } = C || {};
            return S("x", Q), S("y", V), new O(Q, V, ve, f(Q * V))
        }
        static normalizeZ(C) {
            return as(O, "ez", C)
        }
        static msm(C, Q) {
            return ls(O, r, C, Q)
        }
        _setWindowSize(C) {
            this.precompute(C)
        }
        precompute(C = 8, Q = !0) {
            return j.setWindowSize(this, C), Q || this.multiply(ti), this
        }
        assertValidity() {
            H(this)
        }
        equals(C) {
            m(C);
            const {
                ex: Q,
                ey: V,
                ez: W
            } = this, {
                ex: st,
                ey: X,
                ez: nt
            } = C, it = f(Q * nt), tt = f(st * W), T = f(V * nt), L = f(X * W);
            return it === tt && T === L
        }
        is0() {
            return this.equals(O.ZERO)
        }
        negate() {
            return new O(f(-this.ex), this.ey, this.ez, f(-this.et))
        }
        double() {
            const {
                a: C
            } = n, {
                ex: Q,
                ey: V,
                ez: W
            } = this, st = f(Q * Q), X = f(V * V), nt = f(ti * f(W * W)), it = f(C * st), tt = Q + V, T = f(f(tt * tt) - st - X), L = it + X, N = L - nt, B = it - X, b = f(T * N), a = f(L * B), g = f(T * B), w = f(N * L);
            return new O(b, a, w, g)
        }
        add(C) {
            m(C);
            const {
                a: Q,
                d: V
            } = n, {
                ex: W,
                ey: st,
                ez: X,
                et: nt
            } = this, {
                ex: it,
                ey: tt,
                ez: T,
                et: L
            } = C, N = f(W * it), B = f(st * tt), b = f(nt * V * L), a = f(X * T), g = f((W + st) * (it + tt) - N - B), w = a - b, _ = a + b, R = f(B - Q * N), q = f(g * w), D = f(_ * R), I = f(g * R), c = f(w * _);
            return new O(q, D, c, I)
        }
        subtract(C) {
            return this.add(C.negate())
        }
        multiply(C) {
            const Q = C;
            mr("scalar", Q, ve, i);
            const {
                p: V,
                f: W
            } = j.wNAFCached(this, Q, O.normalizeZ);
            return O.normalizeZ([V, W])[0]
        }
        multiplyUnsafe(C, Q = O.ZERO) {
            const V = C;
            return mr("scalar", V, Pe, i), V === Pe ? O.ZERO : this.is0() || V === ve ? this : j.wNAFCachedUnsafe(this, V, O.normalizeZ, Q)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(o).is0()
        }
        isTorsionFree() {
            return j.wNAFCachedUnsafe(this, i).is0()
        }
        toAffine(C) {
            return U(this, C)
        }
        clearCofactor() {
            return o === ve ? this : this.multiplyUnsafe(o)
        }
        static fromBytes(C, Q = !1) {
            return Ue(C), this.fromHex(C, Q)
        }
        static fromHex(C, Q = !1) {
            const {
                d: V,
                a: W
            } = n, st = e.BYTES;
            C = ee("pointHex", C, st), sr("zip215", Q);
            const X = C.slice(),
                nt = C[st - 1];
            X[st - 1] = nt & -129;
            const it = Or(X),
                tt = Q ? s : e.ORDER;
            mr("pointHex.y", it, Pe, tt);
            const T = f(it * it),
                L = f(T - ve),
                N = f(V * T - W);
            let {
                isValid: B,
                value: b
            } = y(L, N);
            if (!B) throw new Error("Point.fromHex: invalid y coordinate");
            const a = (b & ve) === ve,
                g = (nt & 128) !== 0;
            if (!Q && b === Pe && g) throw new Error("Point.fromHex: x=0 and x_0=1");
            return g !== a && (b = f(-b)), O.fromAffine({
                x: b,
                y: it
            })
        }
        static fromPrivateScalar(C) {
            return O.BASE.multiply(C)
        }
        toBytes() {
            const {
                x: C,
                y: Q
            } = this.toAffine(), V = mn(Q, e.BYTES);
            return V[V.length - 1] |= C & ve ? 128 : 0, V
        }
        toRawBytes() {
            return this.toBytes()
        }
        toHex() {
            return xr(this.toBytes())
        }
        toString() {
            return `<Point ${this.is0()?"ZERO":this.toHex()}>`
        }
    }
    O.BASE = new O(n.Gx, n.Gy, ve, f(n.Gx * n.Gy)), O.ZERO = new O(Pe, ve, ve, Pe), O.Fp = e, O.Fn = r;
    const j = hs(O, r.BYTES * 8);
    return O
}

function Bc(n, t) {
    qr(t, {
        hash: "function"
    }, {
        adjustScalarBytes: "function",
        randomBytes: "function",
        domain: "function",
        prehash: "function",
        mapToCurve: "function"
    });
    const {
        prehash: e,
        hash: r
    } = t, {
        BASE: o,
        Fp: i,
        Fn: s
    } = n, f = s.ORDER, y = t.randomBytes || Do, S = t.adjustScalarBytes || (X => X), m = t.domain || ((X, nt, it) => {
        if (sr("phflag", it), nt.length || it) throw new Error("Contexts/pre-hash are not supported");
        return X
    });

    function U(X) {
        return s.create(X)
    }

    function H(X) {
        return U(Or(X))
    }

    function O(X) {
        const nt = i.BYTES;
        X = ee("private key", X, nt);
        const it = ee("hashed private key", r(X), 2 * nt),
            tt = S(it.slice(0, nt)),
            T = it.slice(nt, 2 * nt),
            L = H(tt);
        return {
            head: tt,
            prefix: T,
            scalar: L
        }
    }

    function j(X) {
        const {
            head: nt,
            prefix: it,
            scalar: tt
        } = O(X), T = o.multiply(tt), L = T.toBytes();
        return {
            head: nt,
            prefix: it,
            scalar: tt,
            point: T,
            pointBytes: L
        }
    }

    function F(X) {
        return j(X).pointBytes
    }

    function C(X = Uint8Array.of(), ...nt) {
        const it = je(...nt);
        return H(r(m(it, ee("context", X), !!e)))
    }

    function Q(X, nt, it = {}) {
        X = ee("message", X), e && (X = e(X));
        const {
            prefix: tt,
            scalar: T,
            pointBytes: L
        } = j(nt), N = C(it.context, tt, X), B = o.multiply(N).toBytes(), b = C(it.context, B, L, X), a = U(N + b * T);
        mr("signature.s", a, Pe, f);
        const g = i.BYTES,
            w = je(B, mn(a, g));
        return ee("result", w, g * 2)
    }
    const V = vc;

    function W(X, nt, it, tt = V) {
        const {
            context: T,
            zip215: L
        } = tt, N = i.BYTES;
        X = ee("signature", X, 2 * N), nt = ee("message", nt), it = ee("publicKey", it, N), L !== void 0 && sr("zip215", L), e && (nt = e(nt));
        const B = Or(X.slice(N, 2 * N));
        let b, a, g;
        try {
            b = n.fromHex(it, L), a = n.fromHex(X.slice(0, N), L), g = o.multiplyUnsafe(B)
        } catch {
            return !1
        }
        if (!L && b.isSmallOrder()) return !1;
        const w = C(T, a.toBytes(), b.toBytes(), nt);
        return a.add(b.multiplyUnsafe(w)).subtract(g).clearCofactor().is0()
    }
    return o.precompute(8), {
        getPublicKey: F,
        sign: Q,
        verify: W,
        utils: {
            getExtendedPublicKey: j,
            randomPrivateKey: () => y(i.BYTES),
            precompute(X = 8, nt = n.BASE) {
                return nt.precompute(X, !1)
            }
        },
        Point: n
    }
}

function Sc(n) {
    const t = {
            a: n.a,
            d: n.d,
            p: n.Fp.ORDER,
            n: n.n,
            h: n.h,
            Gx: n.Gx,
            Gy: n.Gy
        },
        e = n.Fp,
        r = Ir(t.n, n.nBitLength, !0),
        o = {
            Fp: e,
            Fn: r,
            uvRatio: n.uvRatio
        },
        i = {
            hash: n.hash,
            randomBytes: n.randomBytes,
            adjustScalarBytes: n.adjustScalarBytes,
            domain: n.domain,
            prehash: n.prehash,
            mapToCurve: n.mapToCurve
        };
    return {
        CURVE: t,
        curveOpts: o,
        eddsaOpts: i
    }
}

function _c(n, t) {
    return Object.assign({}, t, {
        ExtendedPoint: t.Point,
        CURVE: n
    })
}

function Ic(n) {
    const {
        CURVE: t,
        curveOpts: e,
        eddsaOpts: r
    } = Sc(n), o = xc(t, e), i = Bc(o, r);
    return _c(n, i)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const Ac = BigInt(1),
    ho = BigInt(2);
BigInt(3);
const kc = BigInt(5),
    Rc = BigInt(8),
    bn = {
        p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
        n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
        h: Rc,
        a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
        d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
        Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
        Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
    };

function Mc(n) {
    const t = BigInt(10),
        e = BigInt(20),
        r = BigInt(40),
        o = BigInt(80),
        i = bn.p,
        f = n * n % i * n % i,
        y = Qt(f, ho, i) * f % i,
        S = Qt(y, Ac, i) * n % i,
        m = Qt(S, kc, i) * S % i,
        U = Qt(m, t, i) * m % i,
        H = Qt(U, e, i) * U % i,
        O = Qt(H, r, i) * H % i,
        j = Qt(O, o, i) * O % i,
        F = Qt(j, o, i) * O % i,
        C = Qt(F, t, i) * m % i;
    return {
        pow_p_5_8: Qt(C, ho, i) * n % i,
        b2: f
    }
}

function Tc(n) {
    return n[0] &= 248, n[31] &= 127, n[31] |= 64, n
}
const lo = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");

function Lc(n, t) {
    const e = bn.p,
        r = re(t * t * t, e),
        o = re(r * r * t, e),
        i = Mc(n * o).pow_p_5_8;
    let s = re(n * r * i, e);
    const f = re(t * s * s, e),
        y = s,
        S = re(s * lo, e),
        m = f === n,
        U = f === re(-n, e),
        H = f === re(-n * lo, e);
    return m && (s = y), (U || H) && (s = S), ja(s, e) && (s = re(-s, e)), {
        isValid: m || U,
        value: s
    }
}
const Uc = Ir(bn.p, void 0, !0),
    Cc = { ...bn,
        Fp: Uc,
        hash: $a,
        adjustScalarBytes: Tc,
        uvRatio: Lc
    },
    zr = Ic(Cc);
var Zr = {
    exports: {}
}; /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var fo;

function ms() {
    return fo || (fo = 1, function(n, t) {
        var e = Ci(),
            r = e.Buffer;

        function o(s, f) {
            for (var y in s) f[y] = s[y]
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? n.exports = e : (o(e, t), t.Buffer = i);

        function i(s, f, y) {
            return r(s, f, y)
        }
        i.prototype = Object.create(r.prototype), o(r, i), i.from = function(s, f, y) {
            if (typeof s == "number") throw new TypeError("Argument must not be a number");
            return r(s, f, y)
        }, i.alloc = function(s, f, y) {
            if (typeof s != "number") throw new TypeError("Argument must be a number");
            var S = r(s);
            return f !== void 0 ? typeof y == "string" ? S.fill(f, y) : S.fill(f) : S.fill(0), S
        }, i.allocUnsafe = function(s) {
            if (typeof s != "number") throw new TypeError("Argument must be a number");
            return r(s)
        }, i.allocUnsafeSlow = function(s) {
            if (typeof s != "number") throw new TypeError("Argument must be a number");
            return e.SlowBuffer(s)
        }
    }(Zr, Zr.exports)), Zr.exports
}
var ei, po;

function Nc() {
    if (po) return ei;
    po = 1;
    var n = ms().Buffer;

    function t(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), o = 0; o < r.length; o++) r[o] = 255;
        for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
                f = s.charCodeAt(0);
            if (r[f] !== 255) throw new TypeError(s + " is ambiguous");
            r[f] = i
        }
        var y = e.length,
            S = e.charAt(0),
            m = Math.log(y) / Math.log(256),
            U = Math.log(256) / Math.log(y);

        function H(F) {
            if ((Array.isArray(F) || F instanceof Uint8Array) && (F = n.from(F)), !n.isBuffer(F)) throw new TypeError("Expected Buffer");
            if (F.length === 0) return "";
            for (var C = 0, Q = 0, V = 0, W = F.length; V !== W && F[V] === 0;) V++, C++;
            for (var st = (W - V) * U + 1 >>> 0, X = new Uint8Array(st); V !== W;) {
                for (var nt = F[V], it = 0, tt = st - 1;
                    (nt !== 0 || it < Q) && tt !== -1; tt--, it++) nt += 256 * X[tt] >>> 0, X[tt] = nt % y >>> 0, nt = nt / y >>> 0;
                if (nt !== 0) throw new Error("Non-zero carry");
                Q = it, V++
            }
            for (var T = st - Q; T !== st && X[T] === 0;) T++;
            for (var L = S.repeat(C); T < st; ++T) L += e.charAt(X[T]);
            return L
        }

        function O(F) {
            if (typeof F != "string") throw new TypeError("Expected String");
            if (F.length === 0) return n.alloc(0);
            for (var C = 0, Q = 0, V = 0; F[C] === S;) Q++, C++;
            for (var W = (F.length - C) * m + 1 >>> 0, st = new Uint8Array(W); C < F.length;) {
                var X = F.charCodeAt(C);
                if (X > 255) return;
                var nt = r[X];
                if (nt === 255) return;
                for (var it = 0, tt = W - 1;
                    (nt !== 0 || it < V) && tt !== -1; tt--, it++) nt += y * st[tt] >>> 0, st[tt] = nt % 256 >>> 0, nt = nt / 256 >>> 0;
                if (nt !== 0) throw new Error("Non-zero carry");
                V = it, C++
            }
            for (var T = W - V; T !== W && st[T] === 0;) T++;
            var L = n.allocUnsafe(Q + (W - T));
            L.fill(0, 0, Q);
            for (var N = Q; T !== W;) L[N++] = st[T++];
            return L
        }

        function j(F) {
            var C = O(F);
            if (C) return C;
            throw new Error("Non-base" + y + " character")
        }
        return {
            encode: H,
            decodeUnsafe: O,
            decode: j
        }
    }
    return ei = t, ei
}
var ri, go;

function Oc() {
    if (go) return ri;
    go = 1;
    var n = Nc(),
        t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return ri = n(t), ri
}
var Pc = Oc();
const he = fn(Pc);
var Tt = {},
    ni, yo;

function Fc() {
    if (yo) return ni;
    yo = 1;
    var n = ms().Buffer;

    function t(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), o = 0; o < r.length; o++) r[o] = 255;
        for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
                f = s.charCodeAt(0);
            if (r[f] !== 255) throw new TypeError(s + " is ambiguous");
            r[f] = i
        }
        var y = e.length,
            S = e.charAt(0),
            m = Math.log(y) / Math.log(256),
            U = Math.log(256) / Math.log(y);

        function H(F) {
            if ((Array.isArray(F) || F instanceof Uint8Array) && (F = n.from(F)), !n.isBuffer(F)) throw new TypeError("Expected Buffer");
            if (F.length === 0) return "";
            for (var C = 0, Q = 0, V = 0, W = F.length; V !== W && F[V] === 0;) V++, C++;
            for (var st = (W - V) * U + 1 >>> 0, X = new Uint8Array(st); V !== W;) {
                for (var nt = F[V], it = 0, tt = st - 1;
                    (nt !== 0 || it < Q) && tt !== -1; tt--, it++) nt += 256 * X[tt] >>> 0, X[tt] = nt % y >>> 0, nt = nt / y >>> 0;
                if (nt !== 0) throw new Error("Non-zero carry");
                Q = it, V++
            }
            for (var T = st - Q; T !== st && X[T] === 0;) T++;
            for (var L = S.repeat(C); T < st; ++T) L += e.charAt(X[T]);
            return L
        }

        function O(F) {
            if (typeof F != "string") throw new TypeError("Expected String");
            if (F.length === 0) return n.alloc(0);
            for (var C = 0, Q = 0, V = 0; F[C] === S;) Q++, C++;
            for (var W = (F.length - C) * m + 1 >>> 0, st = new Uint8Array(W); C < F.length;) {
                var X = F.charCodeAt(C);
                if (X > 255) return;
                var nt = r[X];
                if (nt === 255) return;
                for (var it = 0, tt = W - 1;
                    (nt !== 0 || it < V) && tt !== -1; tt--, it++) nt += y * st[tt] >>> 0, st[tt] = nt % 256 >>> 0, nt = nt / 256 >>> 0;
                if (nt !== 0) throw new Error("Non-zero carry");
                V = it, C++
            }
            for (var T = W - V; T !== W && st[T] === 0;) T++;
            var L = n.allocUnsafe(Q + (W - T));
            L.fill(0, 0, Q);
            for (var N = Q; T !== W;) L[N++] = st[T++];
            return L
        }

        function j(F) {
            var C = O(F);
            if (C) return C;
            throw new Error("Non-base" + y + " character")
        }
        return {
            encode: H,
            decodeUnsafe: O,
            decode: j
        }
    }
    return ni = t, ni
}
var ii, mo;

function qc() {
    if (mo) return ii;
    mo = 1;
    var n = Fc(),
        t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return ii = n(t), ii
}

function Ke(n, t, e) {
    return t <= n && n <= e
}

function vn(n) {
    if (n === void 0) return {};
    if (n === Object(n)) return n;
    throw TypeError("Could not convert argument to dictionary")
}

function zc(n) {
    for (var t = String(n), e = t.length, r = 0, o = []; r < e;) {
        var i = t.charCodeAt(r);
        if (i < 55296 || i > 57343) o.push(i);
        else if (56320 <= i && i <= 57343) o.push(65533);
        else if (55296 <= i && i <= 56319)
            if (r === e - 1) o.push(65533);
            else {
                var s = n.charCodeAt(r + 1);
                if (56320 <= s && s <= 57343) {
                    var f = i & 1023,
                        y = s & 1023;
                    o.push(65536 + (f << 10) + y), r += 1
                } else o.push(65533)
            }
        r += 1
    }
    return o
}

function Dc(n) {
    for (var t = "", e = 0; e < n.length; ++e) {
        var r = n[e];
        r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320))
    }
    return t
}
var rn = -1;

function Ni(n) {
    this.tokens = [].slice.call(n)
}
Ni.prototype = {
    endOfStream: function() {
        return !this.tokens.length
    },
    read: function() {
        return this.tokens.length ? this.tokens.shift() : rn
    },
    prepend: function(n) {
        if (Array.isArray(n))
            for (var t = n; t.length;) this.tokens.unshift(t.pop());
        else this.tokens.unshift(n)
    },
    push: function(n) {
        if (Array.isArray(n))
            for (var t = n; t.length;) this.tokens.push(t.shift());
        else this.tokens.push(n)
    }
};
var Sr = -1;

function oi(n, t) {
    if (n) throw TypeError("Decoder error");
    return t || 65533
}
var nn = "utf-8";

function on(n, t) {
    if (!(this instanceof on)) return new on(n, t);
    if (n = n !== void 0 ? String(n).toLowerCase() : nn, n !== nn) throw new Error("Encoding not supported. Only utf-8 is supported");
    t = vn(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }), Object.defineProperty(this, "fatal", {
        value: this._fatal
    }), Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
on.prototype = {
    decode: function(t, e) {
        var r;
        typeof t == "object" && t instanceof ArrayBuffer ? r = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : r = new Uint8Array(0), e = vn(e), this._streaming || (this._decoder = new $c({
            fatal: this._fatal
        }), this._BOMseen = !1), this._streaming = !!e.stream;
        for (var o = new Ni(r), i = [], s; !o.endOfStream() && (s = this._decoder.handler(o, o.read()), s !== Sr);) s !== null && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        if (!this._streaming) {
            do {
                if (s = this._decoder.handler(o, o.read()), s === Sr) break;
                s !== null && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s))
            } while (!o.endOfStream());
            this._decoder = null
        }
        return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), Dc(i)
    }
};

function sn(n, t) {
    if (!(this instanceof sn)) return new sn(n, t);
    if (n = n !== void 0 ? String(n).toLowerCase() : nn, n !== nn) throw new Error("Encoding not supported. Only utf-8 is supported");
    t = vn(t), this._streaming = !1, this._encoder = null, this._options = {
        fatal: !!t.fatal
    }, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
sn.prototype = {
    encode: function(t, e) {
        t = t ? String(t) : "", e = vn(e), this._streaming || (this._encoder = new Hc(this._options)), this._streaming = !!e.stream;
        for (var r = [], o = new Ni(zc(t)), i; !o.endOfStream() && (i = this._encoder.handler(o, o.read()), i !== Sr);) Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
        if (!this._streaming) {
            for (; i = this._encoder.handler(o, o.read()), i !== Sr;) Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
            this._encoder = null
        }
        return new Uint8Array(r)
    }
};

function $c(n) {
    var t = n.fatal,
        e = 0,
        r = 0,
        o = 0,
        i = 128,
        s = 191;
    this.handler = function(f, y) {
        if (y === rn && o !== 0) return o = 0, oi(t);
        if (y === rn) return Sr;
        if (o === 0) {
            if (Ke(y, 0, 127)) return y;
            if (Ke(y, 194, 223)) o = 1, e = y - 192;
            else if (Ke(y, 224, 239)) y === 224 && (i = 160), y === 237 && (s = 159), o = 2, e = y - 224;
            else if (Ke(y, 240, 244)) y === 240 && (i = 144), y === 244 && (s = 143), o = 3, e = y - 240;
            else return oi(t);
            return e = e << 6 * o, null
        }
        if (!Ke(y, i, s)) return e = o = r = 0, i = 128, s = 191, f.prepend(y), oi(t);
        if (i = 128, s = 191, r += 1, e += y - 128 << 6 * (o - r), r !== o) return null;
        var S = e;
        return e = o = r = 0, S
    }
}

function Hc(n) {
    n.fatal, this.handler = function(t, e) {
        if (e === rn) return Sr;
        if (Ke(e, 0, 127)) return e;
        var r, o;
        Ke(e, 128, 2047) ? (r = 1, o = 192) : Ke(e, 2048, 65535) ? (r = 2, o = 224) : Ke(e, 65536, 1114111) && (r = 3, o = 240);
        for (var i = [(e >> 6 * r) + o]; r > 0;) {
            var s = e >> 6 * (r - 1);
            i.push(128 | s & 63), r -= 1
        }
        return i
    }
}
const Kc = Object.freeze(Object.defineProperty({
        __proto__: null,
        TextDecoder: on,
        TextEncoder: sn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wc = Po(Kc);
var wo;

function Gc() {
    if (wo) return Tt;
    wo = 1;
    var n = Tt && Tt.__createBinding || (Object.create ? function(T, L, N, B) {
            B === void 0 && (B = N), Object.defineProperty(T, B, {
                enumerable: !0,
                get: function() {
                    return L[N]
                }
            })
        } : function(T, L, N, B) {
            B === void 0 && (B = N), T[B] = L[N]
        }),
        t = Tt && Tt.__setModuleDefault || (Object.create ? function(T, L) {
            Object.defineProperty(T, "default", {
                enumerable: !0,
                value: L
            })
        } : function(T, L) {
            T.default = L
        }),
        e = Tt && Tt.__decorate || function(T, L, N, B) {
            var b = arguments.length,
                a = b < 3 ? L : B === null ? B = Object.getOwnPropertyDescriptor(L, N) : B,
                g;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(T, L, N, B);
            else
                for (var w = T.length - 1; w >= 0; w--)(g = T[w]) && (a = (b < 3 ? g(a) : b > 3 ? g(L, N, a) : g(L, N)) || a);
            return b > 3 && a && Object.defineProperty(L, N, a), a
        },
        r = Tt && Tt.__importStar || function(T) {
            if (T && T.__esModule) return T;
            var L = {};
            if (T != null)
                for (var N in T) N !== "default" && Object.hasOwnProperty.call(T, N) && n(L, T, N);
            return t(L, T), L
        },
        o = Tt && Tt.__importDefault || function(T) {
            return T && T.__esModule ? T : {
                default: T
            }
        };
    Object.defineProperty(Tt, "__esModule", {
        value: !0
    }), Tt.deserializeUnchecked = Tt.deserialize = Tt.serialize = Tt.BinaryReader = Tt.BinaryWriter = Tt.BorshError = Tt.baseDecode = Tt.baseEncode = void 0;
    const i = o(gs()),
        s = o(qc()),
        f = r(Wc),
        y = typeof TextDecoder != "function" ? f.TextDecoder : TextDecoder,
        S = new y("utf-8", {
            fatal: !0
        });

    function m(T) {
        return typeof T == "string" && (T = be.from(T, "utf8")), s.default.encode(be.from(T))
    }
    Tt.baseEncode = m;

    function U(T) {
        return be.from(s.default.decode(T))
    }
    Tt.baseDecode = U;
    const H = 1024;
    class O extends Error {
        constructor(L) {
            super(L), this.fieldPath = [], this.originalMessage = L
        }
        addToFieldPath(L) {
            this.fieldPath.splice(0, 0, L), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
        }
    }
    Tt.BorshError = O;
    class j {
        constructor() {
            this.buf = be.alloc(H), this.length = 0
        }
        maybeResize() {
            this.buf.length < 16 + this.length && (this.buf = be.concat([this.buf, be.alloc(H)]))
        }
        writeU8(L) {
            this.maybeResize(), this.buf.writeUInt8(L, this.length), this.length += 1
        }
        writeU16(L) {
            this.maybeResize(), this.buf.writeUInt16LE(L, this.length), this.length += 2
        }
        writeU32(L) {
            this.maybeResize(), this.buf.writeUInt32LE(L, this.length), this.length += 4
        }
        writeU64(L) {
            this.maybeResize(), this.writeBuffer(be.from(new i.default(L).toArray("le", 8)))
        }
        writeU128(L) {
            this.maybeResize(), this.writeBuffer(be.from(new i.default(L).toArray("le", 16)))
        }
        writeU256(L) {
            this.maybeResize(), this.writeBuffer(be.from(new i.default(L).toArray("le", 32)))
        }
        writeU512(L) {
            this.maybeResize(), this.writeBuffer(be.from(new i.default(L).toArray("le", 64)))
        }
        writeBuffer(L) {
            this.buf = be.concat([be.from(this.buf.subarray(0, this.length)), L, be.alloc(H)]), this.length += L.length
        }
        writeString(L) {
            this.maybeResize();
            const N = be.from(L, "utf8");
            this.writeU32(N.length), this.writeBuffer(N)
        }
        writeFixedArray(L) {
            this.writeBuffer(be.from(L))
        }
        writeArray(L, N) {
            this.maybeResize(), this.writeU32(L.length);
            for (const B of L) this.maybeResize(), N(B)
        }
        toArray() {
            return this.buf.subarray(0, this.length)
        }
    }
    Tt.BinaryWriter = j;

    function F(T, L, N) {
        const B = N.value;
        N.value = function(...b) {
            try {
                return B.apply(this, b)
            } catch (a) {
                if (a instanceof RangeError) {
                    const g = a.code;
                    if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(g) >= 0) throw new O("Reached the end of buffer when deserializing")
                }
                throw a
            }
        }
    }
    class C {
        constructor(L) {
            this.buf = L, this.offset = 0
        }
        readU8() {
            const L = this.buf.readUInt8(this.offset);
            return this.offset += 1, L
        }
        readU16() {
            const L = this.buf.readUInt16LE(this.offset);
            return this.offset += 2, L
        }
        readU32() {
            const L = this.buf.readUInt32LE(this.offset);
            return this.offset += 4, L
        }
        readU64() {
            const L = this.readBuffer(8);
            return new i.default(L, "le")
        }
        readU128() {
            const L = this.readBuffer(16);
            return new i.default(L, "le")
        }
        readU256() {
            const L = this.readBuffer(32);
            return new i.default(L, "le")
        }
        readU512() {
            const L = this.readBuffer(64);
            return new i.default(L, "le")
        }
        readBuffer(L) {
            if (this.offset + L > this.buf.length) throw new O(`Expected buffer length ${L} isn't within bounds`);
            const N = this.buf.slice(this.offset, this.offset + L);
            return this.offset += L, N
        }
        readString() {
            const L = this.readU32(),
                N = this.readBuffer(L);
            try {
                return S.decode(N)
            } catch (B) {
                throw new O(`Error decoding UTF-8 string: ${B}`)
            }
        }
        readFixedArray(L) {
            return new Uint8Array(this.readBuffer(L))
        }
        readArray(L) {
            const N = this.readU32(),
                B = Array();
            for (let b = 0; b < N; ++b) B.push(L());
            return B
        }
    }
    e([F], C.prototype, "readU8", null), e([F], C.prototype, "readU16", null), e([F], C.prototype, "readU32", null), e([F], C.prototype, "readU64", null), e([F], C.prototype, "readU128", null), e([F], C.prototype, "readU256", null), e([F], C.prototype, "readU512", null), e([F], C.prototype, "readString", null), e([F], C.prototype, "readFixedArray", null), e([F], C.prototype, "readArray", null), Tt.BinaryReader = C;

    function Q(T) {
        return T.charAt(0).toUpperCase() + T.slice(1)
    }

    function V(T, L, N, B, b) {
        try {
            if (typeof B == "string") b[`write${Q(B)}`](N);
            else if (B instanceof Array)
                if (typeof B[0] == "number") {
                    if (N.length !== B[0]) throw new O(`Expecting byte array of length ${B[0]}, but got ${N.length} bytes`);
                    b.writeFixedArray(N)
                } else if (B.length === 2 && typeof B[1] == "number") {
                if (N.length !== B[1]) throw new O(`Expecting byte array of length ${B[1]}, but got ${N.length} bytes`);
                for (let a = 0; a < B[1]; a++) V(T, null, N[a], B[0], b)
            } else b.writeArray(N, a => {
                V(T, L, a, B[0], b)
            });
            else if (B.kind !== void 0) switch (B.kind) {
                case "option":
                    {
                        N == null ? b.writeU8(0) : (b.writeU8(1), V(T, L, N, B.type, b));
                        break
                    }
                case "map":
                    {
                        b.writeU32(N.size),
                        N.forEach((a, g) => {
                            V(T, L, g, B.key, b), V(T, L, a, B.value, b)
                        });
                        break
                    }
                default:
                    throw new O(`FieldType ${B} unrecognized`)
            } else W(T, N, b)
        } catch (a) {
            throw a instanceof O && a.addToFieldPath(L), a
        }
    }

    function W(T, L, N) {
        if (typeof L.borshSerialize == "function") {
            L.borshSerialize(N);
            return
        }
        const B = T.get(L.constructor);
        if (!B) throw new O(`Class ${L.constructor.name} is missing in schema`);
        if (B.kind === "struct") B.fields.map(([b, a]) => {
            V(T, b, L[b], a, N)
        });
        else if (B.kind === "enum") {
            const b = L[B.field];
            for (let a = 0; a < B.values.length; ++a) {
                const [g, w] = B.values[a];
                if (g === b) {
                    N.writeU8(a), V(T, g, L[g], w, N);
                    break
                }
            }
        } else throw new O(`Unexpected schema kind: ${B.kind} for ${L.constructor.name}`)
    }

    function st(T, L, N = j) {
        const B = new N;
        return W(T, L, B), B.toArray()
    }
    Tt.serialize = st;

    function X(T, L, N, B) {
        try {
            if (typeof N == "string") return B[`read${Q(N)}`]();
            if (N instanceof Array) {
                if (typeof N[0] == "number") return B.readFixedArray(N[0]);
                if (typeof N[1] == "number") {
                    const b = [];
                    for (let a = 0; a < N[1]; a++) b.push(X(T, null, N[0], B));
                    return b
                } else return B.readArray(() => X(T, L, N[0], B))
            }
            if (N.kind === "option") return B.readU8() ? X(T, L, N.type, B) : void 0;
            if (N.kind === "map") {
                let b = new Map;
                const a = B.readU32();
                for (let g = 0; g < a; g++) {
                    const w = X(T, L, N.key, B),
                        _ = X(T, L, N.value, B);
                    b.set(w, _)
                }
                return b
            }
            return nt(T, N, B)
        } catch (b) {
            throw b instanceof O && b.addToFieldPath(L), b
        }
    }

    function nt(T, L, N) {
        if (typeof L.borshDeserialize == "function") return L.borshDeserialize(N);
        const B = T.get(L);
        if (!B) throw new O(`Class ${L.name} is missing in schema`);
        if (B.kind === "struct") {
            const b = {};
            for (const [a, g] of T.get(L).fields) b[a] = X(T, a, g, N);
            return new L(b)
        }
        if (B.kind === "enum") {
            const b = N.readU8();
            if (b >= B.values.length) throw new O(`Enum index: ${b} is out of range`);
            const [a, g] = B.values[b], w = X(T, a, g, N);
            return new L({
                [a]: w
            })
        }
        throw new O(`Unexpected schema kind: ${B.kind} for ${L.constructor.name}`)
    }

    function it(T, L, N, B = C) {
        const b = new B(N),
            a = nt(T, L, b);
        if (b.offset < N.length) throw new O(`Unexpected ${N.length-b.offset} bytes after deserialized data`);
        return a
    }
    Tt.deserialize = it;

    function tt(T, L, N, B = C) {
        const b = new B(N);
        return nt(T, L, b)
    }
    return Tt.deserializeUnchecked = tt, Tt
}
var si = Gc(),
    J = {},
    bo;

function jc() {
    if (bo) return J;
    bo = 1, Object.defineProperty(J, "__esModule", {
        value: !0
    }), J.s16 = J.s8 = J.nu64be = J.u48be = J.u40be = J.u32be = J.u24be = J.u16be = J.nu64 = J.u48 = J.u40 = J.u32 = J.u24 = J.u16 = J.u8 = J.offset = J.greedy = J.Constant = J.UTF8 = J.CString = J.Blob = J.Boolean = J.BitField = J.BitStructure = J.VariantLayout = J.Union = J.UnionLayoutDiscriminator = J.UnionDiscriminator = J.Structure = J.Sequence = J.DoubleBE = J.Double = J.FloatBE = J.Float = J.NearInt64BE = J.NearInt64 = J.NearUInt64BE = J.NearUInt64 = J.IntBE = J.Int = J.UIntBE = J.UInt = J.OffsetLayout = J.GreedyCount = J.ExternalLayout = J.bindConstructorLayout = J.nameWithProperty = J.Layout = J.uint8ArrayToBuffer = J.checkUint8Array = void 0, J.constant = J.utf8 = J.cstr = J.blob = J.unionLayoutDiscriminator = J.union = J.seq = J.bits = J.struct = J.f64be = J.f64 = J.f32be = J.f32 = J.ns64be = J.s48be = J.s40be = J.s32be = J.s24be = J.s16be = J.ns64 = J.s48 = J.s40 = J.s32 = J.s24 = void 0;
    const n = Ci();

    function t(c) {
        if (!(c instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
    }
    J.checkUint8Array = t;

    function e(c) {
        return t(c), n.Buffer.from(c.buffer, c.byteOffset, c.length)
    }
    J.uint8ArrayToBuffer = e;
    let r = class {
        constructor(u, x) {
            if (!Number.isInteger(u)) throw new TypeError("span must be an integer");
            this.span = u, this.property = x
        }
        makeDestinationObject() {
            return {}
        }
        getSpan(u, x) {
            if (0 > this.span) throw new RangeError("indeterminate span");
            return this.span
        }
        replicate(u) {
            const x = Object.create(this.constructor.prototype);
            return Object.assign(x, this), x.property = u, x
        }
        fromArray(u) {}
    };
    J.Layout = r;

    function o(c, u) {
        return u.property ? c + "[" + u.property + "]" : c
    }
    J.nameWithProperty = o;

    function i(c, u) {
        if (typeof c != "function") throw new TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(c, "layout_")) throw new Error("Class is already bound to a layout");
        if (!(u && u instanceof r)) throw new TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(u, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
        c.layout_ = u, u.boundConstructor_ = c, u.makeDestinationObject = () => new c, Object.defineProperty(c.prototype, "encode", {
            value(x, M) {
                return u.encode(this, x, M)
            },
            writable: !0
        }), Object.defineProperty(c, "decode", {
            value(x, M) {
                return u.decode(x, M)
            },
            writable: !0
        })
    }
    J.bindConstructorLayout = i;
    class s extends r {
        isCount() {
            throw new Error("ExternalLayout is abstract")
        }
    }
    J.ExternalLayout = s;
    class f extends s {
        constructor(u = 1, x) {
            if (!Number.isInteger(u) || 0 >= u) throw new TypeError("elementSpan must be a (positive) integer");
            super(-1, x), this.elementSpan = u
        }
        isCount() {
            return !0
        }
        decode(u, x = 0) {
            t(u);
            const M = u.length - x;
            return Math.floor(M / this.elementSpan)
        }
        encode(u, x, M) {
            return 0
        }
    }
    J.GreedyCount = f;
    class y extends s {
        constructor(u, x = 0, M) {
            if (!(u instanceof r)) throw new TypeError("layout must be a Layout");
            if (!Number.isInteger(x)) throw new TypeError("offset must be integer or undefined");
            super(u.span, M || u.property), this.layout = u, this.offset = x
        }
        isCount() {
            return this.layout instanceof S || this.layout instanceof m
        }
        decode(u, x = 0) {
            return this.layout.decode(u, x + this.offset)
        }
        encode(u, x, M = 0) {
            return this.layout.encode(u, x, M + this.offset)
        }
    }
    J.OffsetLayout = y;
    class S extends r {
        constructor(u, x) {
            if (super(u, x), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(u, x = 0) {
            return e(u).readUIntLE(x, this.span)
        }
        encode(u, x, M = 0) {
            return e(x).writeUIntLE(u, M, this.span), this.span
        }
    }
    J.UInt = S;
    class m extends r {
        constructor(u, x) {
            if (super(u, x), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(u, x = 0) {
            return e(u).readUIntBE(x, this.span)
        }
        encode(u, x, M = 0) {
            return e(x).writeUIntBE(u, M, this.span), this.span
        }
    }
    J.UIntBE = m;
    class U extends r {
        constructor(u, x) {
            if (super(u, x), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(u, x = 0) {
            return e(u).readIntLE(x, this.span)
        }
        encode(u, x, M = 0) {
            return e(x).writeIntLE(u, M, this.span), this.span
        }
    }
    J.Int = U;
    class H extends r {
        constructor(u, x) {
            if (super(u, x), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(u, x = 0) {
            return e(u).readIntBE(x, this.span)
        }
        encode(u, x, M = 0) {
            return e(x).writeIntBE(u, M, this.span), this.span
        }
    }
    J.IntBE = H;
    const O = Math.pow(2, 32);

    function j(c) {
        const u = Math.floor(c / O),
            x = c - u * O;
        return {
            hi32: u,
            lo32: x
        }
    }

    function F(c, u) {
        return c * O + u
    }
    class C extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            const M = e(u),
                K = M.readUInt32LE(x),
                ot = M.readUInt32LE(x + 4);
            return F(ot, K)
        }
        encode(u, x, M = 0) {
            const K = j(u),
                ot = e(x);
            return ot.writeUInt32LE(K.lo32, M), ot.writeUInt32LE(K.hi32, M + 4), 8
        }
    }
    J.NearUInt64 = C;
    class Q extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            const M = e(u),
                K = M.readUInt32BE(x),
                ot = M.readUInt32BE(x + 4);
            return F(K, ot)
        }
        encode(u, x, M = 0) {
            const K = j(u),
                ot = e(x);
            return ot.writeUInt32BE(K.hi32, M), ot.writeUInt32BE(K.lo32, M + 4), 8
        }
    }
    J.NearUInt64BE = Q;
    class V extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            const M = e(u),
                K = M.readUInt32LE(x),
                ot = M.readInt32LE(x + 4);
            return F(ot, K)
        }
        encode(u, x, M = 0) {
            const K = j(u),
                ot = e(x);
            return ot.writeUInt32LE(K.lo32, M), ot.writeInt32LE(K.hi32, M + 4), 8
        }
    }
    J.NearInt64 = V;
    class W extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            const M = e(u),
                K = M.readInt32BE(x),
                ot = M.readUInt32BE(x + 4);
            return F(K, ot)
        }
        encode(u, x, M = 0) {
            const K = j(u),
                ot = e(x);
            return ot.writeInt32BE(K.hi32, M), ot.writeUInt32BE(K.lo32, M + 4), 8
        }
    }
    J.NearInt64BE = W;
    class st extends r {
        constructor(u) {
            super(4, u)
        }
        decode(u, x = 0) {
            return e(u).readFloatLE(x)
        }
        encode(u, x, M = 0) {
            return e(x).writeFloatLE(u, M), 4
        }
    }
    J.Float = st;
    class X extends r {
        constructor(u) {
            super(4, u)
        }
        decode(u, x = 0) {
            return e(u).readFloatBE(x)
        }
        encode(u, x, M = 0) {
            return e(x).writeFloatBE(u, M), 4
        }
    }
    J.FloatBE = X;
    class nt extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            return e(u).readDoubleLE(x)
        }
        encode(u, x, M = 0) {
            return e(x).writeDoubleLE(u, M), 8
        }
    }
    J.Double = nt;
    class it extends r {
        constructor(u) {
            super(8, u)
        }
        decode(u, x = 0) {
            return e(u).readDoubleBE(x)
        }
        encode(u, x, M = 0) {
            return e(x).writeDoubleBE(u, M), 8
        }
    }
    J.DoubleBE = it;
    class tt extends r {
        constructor(u, x, M) {
            if (!(u instanceof r)) throw new TypeError("elementLayout must be a Layout");
            if (!(x instanceof s && x.isCount() || Number.isInteger(x) && 0 <= x)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
            let K = -1;
            !(x instanceof s) && 0 < u.span && (K = x * u.span), super(K, M), this.elementLayout = u, this.count = x
        }
        getSpan(u, x = 0) {
            if (0 <= this.span) return this.span;
            let M = 0,
                K = this.count;
            if (K instanceof s && (K = K.decode(u, x)), 0 < this.elementLayout.span) M = K * this.elementLayout.span;
            else {
                let ot = 0;
                for (; ot < K;) M += this.elementLayout.getSpan(u, x + M), ++ot
            }
            return M
        }
        decode(u, x = 0) {
            const M = [];
            let K = 0,
                ot = this.count;
            for (ot instanceof s && (ot = ot.decode(u, x)); K < ot;) M.push(this.elementLayout.decode(u, x)), x += this.elementLayout.getSpan(u, x), K += 1;
            return M
        }
        encode(u, x, M = 0) {
            const K = this.elementLayout,
                ot = u.reduce((ft, pt) => ft + K.encode(pt, x, M + ft), 0);
            return this.count instanceof s && this.count.encode(u.length, x, M), ot
        }
    }
    J.Sequence = tt;
    class T extends r {
        constructor(u, x, M) {
            if (!(Array.isArray(u) && u.reduce((ot, ft) => ot && ft instanceof r, !0))) throw new TypeError("fields must be array of Layout instances");
            typeof x == "boolean" && M === void 0 && (M = x, x = void 0);
            for (const ot of u)
                if (0 > ot.span && ot.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
            let K = -1;
            try {
                K = u.reduce((ot, ft) => ot + ft.getSpan(), 0)
            } catch {}
            super(K, x), this.fields = u, this.decodePrefixes = !!M
        }
        getSpan(u, x = 0) {
            if (0 <= this.span) return this.span;
            let M = 0;
            try {
                M = this.fields.reduce((K, ot) => {
                    const ft = ot.getSpan(u, x);
                    return x += ft, K + ft
                }, 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return M
        }
        decode(u, x = 0) {
            t(u);
            const M = this.makeDestinationObject();
            for (const K of this.fields)
                if (K.property !== void 0 && (M[K.property] = K.decode(u, x)), x += K.getSpan(u, x), this.decodePrefixes && u.length === x) break;
            return M
        }
        encode(u, x, M = 0) {
            const K = M;
            let ot = 0,
                ft = 0;
            for (const pt of this.fields) {
                let ne = pt.span;
                if (ft = 0 < ne ? ne : 0, pt.property !== void 0) {
                    const At = u[pt.property];
                    At !== void 0 && (ft = pt.encode(At, x, M), 0 > ne && (ne = pt.getSpan(x, M)))
                }
                ot = M, M += ne
            }
            return ot + ft - K
        }
        fromArray(u) {
            const x = this.makeDestinationObject();
            for (const M of this.fields) M.property !== void 0 && 0 < u.length && (x[M.property] = u.shift());
            return x
        }
        layoutFor(u) {
            if (typeof u != "string") throw new TypeError("property must be string");
            for (const x of this.fields)
                if (x.property === u) return x
        }
        offsetOf(u) {
            if (typeof u != "string") throw new TypeError("property must be string");
            let x = 0;
            for (const M of this.fields) {
                if (M.property === u) return x;
                0 > M.span ? x = -1 : 0 <= x && (x += M.span)
            }
        }
    }
    J.Structure = T;
    class L {
        constructor(u) {
            this.property = u
        }
        decode(u, x) {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode(u, x, M) {
            throw new Error("UnionDiscriminator is abstract")
        }
    }
    J.UnionDiscriminator = L;
    class N extends L {
        constructor(u, x) {
            if (!(u instanceof s && u.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(x || u.property || "variant"), this.layout = u
        }
        decode(u, x) {
            return this.layout.decode(u, x)
        }
        encode(u, x, M) {
            return this.layout.encode(u, x, M)
        }
    }
    J.UnionLayoutDiscriminator = N;
    class B extends r {
        constructor(u, x, M) {
            let K;
            if (u instanceof S || u instanceof m) K = new N(new y(u));
            else if (u instanceof s && u.isCount()) K = new N(u);
            else if (u instanceof L) K = u;
            else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (x === void 0 && (x = null), !(x === null || x instanceof r)) throw new TypeError("defaultLayout must be null or a Layout");
            if (x !== null) {
                if (0 > x.span) throw new Error("defaultLayout must have constant span");
                x.property === void 0 && (x = x.replicate("content"))
            }
            let ot = -1;
            x && (ot = x.span, 0 <= ot && (u instanceof S || u instanceof m) && (ot += K.layout.span)), super(ot, M), this.discriminator = K, this.usesPrefixDiscriminator = u instanceof S || u instanceof m, this.defaultLayout = x, this.registry = {};
            let ft = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function(pt) {
                return ft(pt)
            }, this.configGetSourceVariant = function(pt) {
                ft = pt.bind(this)
            }
        }
        getSpan(u, x = 0) {
            if (0 <= this.span) return this.span;
            const M = this.getVariant(u, x);
            if (!M) throw new Error("unable to determine span for unrecognized variant");
            return M.getSpan(u, x)
        }
        defaultGetSourceVariant(u) {
            if (Object.prototype.hasOwnProperty.call(u, this.discriminator.property)) {
                if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(u, this.defaultLayout.property)) return;
                const x = this.registry[u[this.discriminator.property]];
                if (x && (!x.layout || x.property && Object.prototype.hasOwnProperty.call(u, x.property))) return x
            } else
                for (const x in this.registry) {
                    const M = this.registry[x];
                    if (M.property && Object.prototype.hasOwnProperty.call(u, M.property)) return M
                }
            throw new Error("unable to infer src variant")
        }
        decode(u, x = 0) {
            let M;
            const K = this.discriminator,
                ot = K.decode(u, x),
                ft = this.registry[ot];
            if (ft === void 0) {
                const pt = this.defaultLayout;
                let ne = 0;
                this.usesPrefixDiscriminator && (ne = K.layout.span), M = this.makeDestinationObject(), M[K.property] = ot, M[pt.property] = pt.decode(u, x + ne)
            } else M = ft.decode(u, x);
            return M
        }
        encode(u, x, M = 0) {
            const K = this.getSourceVariant(u);
            if (K === void 0) {
                const ot = this.discriminator,
                    ft = this.defaultLayout;
                let pt = 0;
                return this.usesPrefixDiscriminator && (pt = ot.layout.span), ot.encode(u[ot.property], x, M), pt + ft.encode(u[ft.property], x, M + pt)
            }
            return K.encode(u, x, M)
        }
        addVariant(u, x, M) {
            const K = new b(this, u, x, M);
            return this.registry[u] = K, K
        }
        getVariant(u, x = 0) {
            let M;
            return u instanceof Uint8Array ? M = this.discriminator.decode(u, x) : M = u, this.registry[M]
        }
    }
    J.Union = B;
    class b extends r {
        constructor(u, x, M, K) {
            if (!(u instanceof B)) throw new TypeError("union must be a Union");
            if (!Number.isInteger(x) || 0 > x) throw new TypeError("variant must be a (non-negative) integer");
            if (typeof M == "string" && K === void 0 && (K = M, M = null), M) {
                if (!(M instanceof r)) throw new TypeError("layout must be a Layout");
                if (u.defaultLayout !== null && 0 <= M.span && M.span > u.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                if (typeof K != "string") throw new TypeError("variant must have a String property")
            }
            let ot = u.span;
            0 > u.span && (ot = M ? M.span : 0, 0 <= ot && u.usesPrefixDiscriminator && (ot += u.discriminator.layout.span)), super(ot, K), this.union = u, this.variant = x, this.layout = M || null
        }
        getSpan(u, x = 0) {
            if (0 <= this.span) return this.span;
            let M = 0;
            this.union.usesPrefixDiscriminator && (M = this.union.discriminator.layout.span);
            let K = 0;
            return this.layout && (K = this.layout.getSpan(u, x + M)), M + K
        }
        decode(u, x = 0) {
            const M = this.makeDestinationObject();
            if (this !== this.union.getVariant(u, x)) throw new Error("variant mismatch");
            let K = 0;
            return this.union.usesPrefixDiscriminator && (K = this.union.discriminator.layout.span), this.layout ? M[this.property] = this.layout.decode(u, x + K) : this.property ? M[this.property] = !0 : this.union.usesPrefixDiscriminator && (M[this.union.discriminator.property] = this.variant), M
        }
        encode(u, x, M = 0) {
            let K = 0;
            if (this.union.usesPrefixDiscriminator && (K = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(u, this.property)) throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, x, M);
            let ot = K;
            if (this.layout && (this.layout.encode(u[this.property], x, M + K), ot += this.layout.getSpan(x, M + K), 0 <= this.union.span && ot > this.union.span)) throw new Error("encoded variant overruns containing union");
            return ot
        }
        fromArray(u) {
            if (this.layout) return this.layout.fromArray(u)
        }
    }
    J.VariantLayout = b;

    function a(c) {
        return 0 > c && (c += 4294967296), c
    }
    class g extends r {
        constructor(u, x, M) {
            if (!(u instanceof S || u instanceof m)) throw new TypeError("word must be a UInt or UIntBE layout");
            if (typeof x == "string" && M === void 0 && (M = x, x = !1), 4 < u.span) throw new RangeError("word cannot exceed 32 bits");
            super(u.span, M), this.word = u, this.msb = !!x, this.fields = [];
            let K = 0;
            this._packedSetValue = function(ot) {
                return K = a(ot), this
            }, this._packedGetValue = function() {
                return K
            }
        }
        decode(u, x = 0) {
            const M = this.makeDestinationObject(),
                K = this.word.decode(u, x);
            this._packedSetValue(K);
            for (const ot of this.fields) ot.property !== void 0 && (M[ot.property] = ot.decode(u));
            return M
        }
        encode(u, x, M = 0) {
            const K = this.word.decode(x, M);
            this._packedSetValue(K);
            for (const ot of this.fields)
                if (ot.property !== void 0) {
                    const ft = u[ot.property];
                    ft !== void 0 && ot.encode(ft)
                }
            return this.word.encode(this._packedGetValue(), x, M)
        }
        addField(u, x) {
            const M = new w(this, u, x);
            return this.fields.push(M), M
        }
        addBoolean(u) {
            const x = new _(this, u);
            return this.fields.push(x), x
        }
        fieldFor(u) {
            if (typeof u != "string") throw new TypeError("property must be string");
            for (const x of this.fields)
                if (x.property === u) return x
        }
    }
    J.BitStructure = g;
    class w {
        constructor(u, x, M) {
            if (!(u instanceof g)) throw new TypeError("container must be a BitStructure");
            if (!Number.isInteger(x) || 0 >= x) throw new TypeError("bits must be positive integer");
            const K = 8 * u.span,
                ot = u.fields.reduce((ft, pt) => ft + pt.bits, 0);
            if (x + ot > K) throw new Error("bits too long for span remainder (" + (K - ot) + " of " + K + " remain)");
            this.container = u, this.bits = x, this.valueMask = (1 << x) - 1, x === 32 && (this.valueMask = 4294967295), this.start = ot, this.container.msb && (this.start = K - ot - x), this.wordMask = a(this.valueMask << this.start), this.property = M
        }
        decode(u, x) {
            const M = this.container._packedGetValue();
            return a(M & this.wordMask) >>> this.start
        }
        encode(u) {
            if (typeof u != "number" || !Number.isInteger(u) || u !== a(u & this.valueMask)) throw new TypeError(o("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
            const x = this.container._packedGetValue(),
                M = a(u << this.start);
            this.container._packedSetValue(a(x & ~this.wordMask) | M)
        }
    }
    J.BitField = w;
    class _ extends w {
        constructor(u, x) {
            super(u, 1, x)
        }
        decode(u, x) {
            return !!super.decode(u, x)
        }
        encode(u) {
            typeof u == "boolean" && (u = +u), super.encode(u)
        }
    }
    J.Boolean = _;
    class R extends r {
        constructor(u, x) {
            if (!(u instanceof s && u.isCount() || Number.isInteger(u) && 0 <= u)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let M = -1;
            u instanceof s || (M = u), super(M, x), this.length = u
        }
        getSpan(u, x) {
            let M = this.span;
            return 0 > M && (M = this.length.decode(u, x)), M
        }
        decode(u, x = 0) {
            let M = this.span;
            return 0 > M && (M = this.length.decode(u, x)), e(u).slice(x, x + M)
        }
        encode(u, x, M) {
            let K = this.length;
            if (this.length instanceof s && (K = u.length), !(u instanceof Uint8Array && K === u.length)) throw new TypeError(o("Blob.encode", this) + " requires (length " + K + ") Uint8Array as src");
            if (M + K > x.length) throw new RangeError("encoding overruns Uint8Array");
            const ot = e(u);
            return e(x).write(ot.toString("hex"), M, K, "hex"), this.length instanceof s && this.length.encode(K, x, M), K
        }
    }
    J.Blob = R;
    class q extends r {
        constructor(u) {
            super(-1, u)
        }
        getSpan(u, x = 0) {
            t(u);
            let M = x;
            for (; M < u.length && u[M] !== 0;) M += 1;
            return 1 + M - x
        }
        decode(u, x = 0) {
            const M = this.getSpan(u, x);
            return e(u).slice(x, x + M - 1).toString("utf-8")
        }
        encode(u, x, M = 0) {
            typeof u != "string" && (u = String(u));
            const K = n.Buffer.from(u, "utf8"),
                ot = K.length;
            if (M + ot > x.length) throw new RangeError("encoding overruns Buffer");
            const ft = e(x);
            return K.copy(ft, M), ft[M + ot] = 0, ot + 1
        }
    }
    J.CString = q;
    class D extends r {
        constructor(u, x) {
            if (typeof u == "string" && x === void 0 && (x = u, u = void 0), u === void 0) u = -1;
            else if (!Number.isInteger(u)) throw new TypeError("maxSpan must be an integer");
            super(-1, x), this.maxSpan = u
        }
        getSpan(u, x = 0) {
            return t(u), u.length - x
        }
        decode(u, x = 0) {
            const M = this.getSpan(u, x);
            if (0 <= this.maxSpan && this.maxSpan < M) throw new RangeError("text length exceeds maxSpan");
            return e(u).slice(x, x + M).toString("utf-8")
        }
        encode(u, x, M = 0) {
            typeof u != "string" && (u = String(u));
            const K = n.Buffer.from(u, "utf8"),
                ot = K.length;
            if (0 <= this.maxSpan && this.maxSpan < ot) throw new RangeError("text length exceeds maxSpan");
            if (M + ot > x.length) throw new RangeError("encoding overruns Buffer");
            return K.copy(e(x), M), ot
        }
    }
    J.UTF8 = D;
    class I extends r {
        constructor(u, x) {
            super(0, x), this.value = u
        }
        decode(u, x) {
            return this.value
        }
        encode(u, x, M) {
            return 0
        }
    }
    return J.Constant = I, J.greedy = (c, u) => new f(c, u), J.offset = (c, u, x) => new y(c, u, x), J.u8 = c => new S(1, c), J.u16 = c => new S(2, c), J.u24 = c => new S(3, c), J.u32 = c => new S(4, c), J.u40 = c => new S(5, c), J.u48 = c => new S(6, c), J.nu64 = c => new C(c), J.u16be = c => new m(2, c), J.u24be = c => new m(3, c), J.u32be = c => new m(4, c), J.u40be = c => new m(5, c), J.u48be = c => new m(6, c), J.nu64be = c => new Q(c), J.s8 = c => new U(1, c), J.s16 = c => new U(2, c), J.s24 = c => new U(3, c), J.s32 = c => new U(4, c), J.s40 = c => new U(5, c), J.s48 = c => new U(6, c), J.ns64 = c => new V(c), J.s16be = c => new H(2, c), J.s24be = c => new H(3, c), J.s32be = c => new H(4, c), J.s40be = c => new H(5, c), J.s48be = c => new H(6, c), J.ns64be = c => new W(c), J.f32 = c => new st(c), J.f32be = c => new X(c), J.f64 = c => new nt(c), J.f64be = c => new it(c), J.struct = (c, u, x) => new T(c, u, x), J.bits = (c, u, x) => new g(c, u, x), J.seq = (c, u, x) => new tt(c, u, x), J.union = (c, u, x) => new B(c, u, x), J.unionLayoutDiscriminator = (c, u) => new N(c, u), J.blob = (c, u) => new R(c, u), J.cstr = c => new q(c), J.utf8 = (c, u) => new D(c, u), J.constant = (c, u) => new I(c, u), J
}
var P = jc(),
    Vc = 8078e3,
    Zc = 8078001,
    Yc = 8078004,
    Xc = 8078005,
    Jc = 8078006,
    Qc = 8078011;

function ws(n) {
    return Array.isArray(n) ? "%5B" + n.map(ws).join("%2C%20") + "%5D" : typeof n == "bigint" ? `${n}n` : encodeURIComponent(String(n != null && Object.getPrototypeOf(n) === null ? { ...n
    } : n))
}

function tu([n, t]) {
    return `${n}=${ws(t)}`
}

function eu(n) {
    const t = Object.entries(n).map(tu).join("&");
    return btoa(t)
}

function ru(n, t = {}) {
    {
        let e = `Solana error #${n}; Decode this error by running \`npx @solana/errors decode -- ${n}`;
        return Object.keys(t).length && (e += ` '${eu(t)}'`), `${e}\``
    }
}
var br = class extends Error {
    constructor(...[t, e]) {
        let r, o;
        if (e) {
            const {
                cause: s,
                ...f
            } = e;
            s && (o = {
                cause: s
            }), Object.keys(f).length > 0 && (r = f)
        }
        const i = ru(t, r);
        super(i, o);
        ae(this, "cause", this.cause);
        ae(this, "context");
        this.context = {
            __code: t,
            ...r
        }, this.name = "SolanaError"
    }
};

function nu(n, t) {
    return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(n)
}

function iu(n) {
    return Object.freeze({ ...n,
        encode: t => {
            const e = new Uint8Array(nu(t, n));
            return n.write(t, e, 0), e
        }
    })
}

function ou(n) {
    return Object.freeze({ ...n,
        decode: (t, e = 0) => n.read(t, e)[0]
    })
}

function gr(n) {
    return "fixedSize" in n && typeof n.fixedSize == "number"
}

function su(n, t) {
    if (gr(n) !== gr(t)) throw new br(Yc);
    if (gr(n) && gr(t) && n.fixedSize !== t.fixedSize) throw new br(Xc, {
        decoderFixedSize: t.fixedSize,
        encoderFixedSize: n.fixedSize
    });
    if (!gr(n) && !gr(t) && n.maxSize !== t.maxSize) throw new br(Jc, {
        decoderMaxSize: t.maxSize,
        encoderMaxSize: n.maxSize
    });
    return { ...t,
        ...n,
        decode: t.decode,
        encode: n.encode,
        read: t.read,
        write: n.write
    }
}

function au(n, t, e = 0) {
    if (t.length - e <= 0) throw new br(Vc, {
        codecDescription: n
    })
}

function cu(n, t, e, r = 0) {
    const o = e.length - r;
    if (o < t) throw new br(Zc, {
        bytesLength: o,
        codecDescription: n,
        expected: t
    })
}

function uu(n, t, e, r) {
    if (r < t || r > e) throw new br(Qc, {
        codecDescription: n,
        max: e,
        min: t,
        value: r
    })
}

function bs(n) {
    return (n == null ? void 0 : n.endian) !== 1
}

function hu(n) {
    return iu({
        fixedSize: n.size,
        write(t, e, r) {
            n.range && uu(n.name, n.range[0], n.range[1], t);
            const o = new ArrayBuffer(n.size);
            return n.set(new DataView(o), t, bs(n.config)), e.set(new Uint8Array(o), r), r + n.size
        }
    })
}

function lu(n) {
    return ou({
        fixedSize: n.size,
        read(t, e = 0) {
            au(n.name, t, e), cu(n.name, n.size, t, e);
            const r = new DataView(fu(t, e, n.size));
            return [n.get(r, bs(n.config)), e + n.size]
        }
    })
}

function fu(n, t, e) {
    const r = n.byteOffset + (t ? ? 0),
        o = e ? ? n.byteLength;
    return n.buffer.slice(r, r + o)
}
var du = (n = {}) => hu({
        config: n,
        name: "u64",
        range: [0 n, BigInt("0xffffffffffffffff")],
        set: (t, e, r) => t.setBigUint64(0, BigInt(e), r),
        size: 8
    }),
    pu = (n = {}) => lu({
        config: n,
        get: (t, e) => t.getBigUint64(0, e),
        name: "u64",
        size: 8
    }),
    gu = (n = {}) => su(du(n), pu(n));
class yu extends TypeError {
    constructor(t, e) {
        let r;
        const {
            message: o,
            explanation: i,
            ...s
        } = t, {
            path: f
        } = t, y = f.length === 0 ? o : `At path: ${f.join(".")} -- ${o}`;
        super(i ? ? y), i != null && (this.cause = y), Object.assign(this, s), this.name = this.constructor.name, this.failures = () => r ? ? (r = [t, ...e()])
    }
}

function mu(n) {
    return Dr(n) && typeof n[Symbol.iterator] == "function"
}

function Dr(n) {
    return typeof n == "object" && n != null
}

function an(n) {
    return Dr(n) && !Array.isArray(n)
}

function Ne(n) {
    return typeof n == "symbol" ? n.toString() : typeof n == "string" ? JSON.stringify(n) : `${n}`
}

function wu(n) {
    const {
        done: t,
        value: e
    } = n.next();
    return t ? void 0 : e
}

function bu(n, t, e, r) {
    if (n === !0) return;
    n === !1 ? n = {} : typeof n == "string" && (n = {
        message: n
    });
    const {
        path: o,
        branch: i
    } = t, {
        type: s
    } = e, {
        refinement: f,
        message: y = `Expected a value of type \`${s}\`${f?` with refinement \`${f}\``:""}, but received: \`${Ne(r)}\``
    } = n;
    return {
        value: r,
        type: s,
        refinement: f,
        key: o[o.length - 1],
        path: o,
        branch: i,
        ...n,
        message: y
    }
}

function* vo(n, t, e, r) {
    mu(n) || (n = [n]);
    for (const o of n) {
        const i = bu(o, t, e, r);
        i && (yield i)
    }
}

function* Oi(n, t, e = {}) {
    const {
        path: r = [],
        branch: o = [n],
        coerce: i = !1,
        mask: s = !1
    } = e, f = {
        path: r,
        branch: o,
        mask: s
    };
    i && (n = t.coercer(n, f));
    let y = "valid";
    for (const S of t.validator(n, f)) S.explanation = e.message, y = "not_valid", yield [S, void 0];
    for (let [S, m, U] of t.entries(n, f)) {
        const H = Oi(m, U, {
            path: S === void 0 ? r : [...r, S],
            branch: S === void 0 ? o : [...o, m],
            coerce: i,
            mask: s,
            message: e.message
        });
        for (const O of H) O[0] ? (y = O[0].refinement != null ? "not_refined" : "not_valid", yield [O[0], void 0]) : i && (m = O[1], S === void 0 ? n = m : n instanceof Map ? n.set(S, m) : n instanceof Set ? n.add(m) : Dr(n) && (m !== void 0 || S in n) && (n[S] = m))
    }
    if (y !== "not_valid")
        for (const S of t.refiner(n, f)) S.explanation = e.message, y = "not_refined", yield [S, void 0];
    y === "valid" && (yield [void 0, n])
}
let ze = class {
    constructor(t) {
        const {
            type: e,
            schema: r,
            validator: o,
            refiner: i,
            coercer: s = y => y,
            entries: f = function*() {}
        } = t;
        this.type = e, this.schema = r, this.entries = f, this.coercer = s, o ? this.validator = (y, S) => {
            const m = o(y, S);
            return vo(m, S, this, y)
        } : this.validator = () => [], i ? this.refiner = (y, S) => {
            const m = i(y, S);
            return vo(m, S, this, y)
        } : this.refiner = () => []
    }
    assert(t, e) {
        return vu(t, this, e)
    }
    create(t, e) {
        return ut(t, this, e)
    }
    is(t) {
        return vs(t, this)
    }
    mask(t, e) {
        return Eu(t, this, e)
    }
    validate(t, e = {}) {
        return $r(t, this, e)
    }
};

function vu(n, t, e) {
    const r = $r(n, t, {
        message: e
    });
    if (r[0]) throw r[0]
}

function ut(n, t, e) {
    const r = $r(n, t, {
        coerce: !0,
        message: e
    });
    if (r[0]) throw r[0];
    return r[1]
}

function Eu(n, t, e) {
    const r = $r(n, t, {
        coerce: !0,
        mask: !0,
        message: e
    });
    if (r[0]) throw r[0];
    return r[1]
}

function vs(n, t) {
    return !$r(n, t)[0]
}

function $r(n, t, e = {}) {
    const r = Oi(n, t, e),
        o = wu(r);
    return o[0] ? [new yu(o[0], function*() {
        for (const s of r) s[0] && (yield s[0])
    }), void 0] : [void 0, o[1]]
}

function ar(n, t) {
    return new ze({
        type: n,
        schema: null,
        validator: t
    })
}

function xu() {
    return ar("any", () => !0)
}

function ht(n) {
    return new ze({
        type: "array",
        schema: n,
        * entries(t) {
            if (n && Array.isArray(t))
                for (const [e, r] of t.entries()) yield [e, r, n]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array value, but received: ${Ne(t)}`
        }
    })
}

function qe() {
    return ar("boolean", n => typeof n == "boolean")
}

function Pi(n) {
    return ar("instance", t => t instanceof n || `Expected a \`${n.name}\` instance, but received: ${Ne(t)}`)
}

function Zt(n) {
    const t = Ne(n),
        e = typeof n;
    return new ze({
        type: "literal",
        schema: e === "string" || e === "number" || e === "boolean" ? n : null,
        validator(r) {
            return r === n || `Expected the literal \`${t}\`, but received: ${Ne(r)}`
        }
    })
}

function Bu() {
    return ar("never", () => !1)
}

function lt(n) {
    return new ze({ ...n,
        validator: (t, e) => t === null || n.validator(t, e),
        refiner: (t, e) => t === null || n.refiner(t, e)
    })
}

function Y() {
    return ar("number", n => typeof n == "number" && !isNaN(n) || `Expected a number, but received: ${Ne(n)}`)
}

function gt(n) {
    return new ze({ ...n,
        validator: (t, e) => t === void 0 || n.validator(t, e),
        refiner: (t, e) => t === void 0 || n.refiner(t, e)
    })
}

function Es(n, t) {
    return new ze({
        type: "record",
        schema: null,
        * entries(e) {
            if (Dr(e))
                for (const r in e) {
                    const o = e[r];
                    yield [r, r, n], yield [r, o, t]
                }
        },
        validator(e) {
            return an(e) || `Expected an object, but received: ${Ne(e)}`
        },
        coercer(e) {
            return an(e) ? { ...e
            } : e
        }
    })
}

function ct() {
    return ar("string", n => typeof n == "string" || `Expected a string, but received: ${Ne(n)}`)
}

function Fi(n) {
    const t = Bu();
    return new ze({
        type: "tuple",
        schema: null,
        * entries(e) {
            if (Array.isArray(e)) {
                const r = Math.max(n.length, e.length);
                for (let o = 0; o < r; o++) yield [o, e[o], n[o] || t]
            }
        },
        validator(e) {
            return Array.isArray(e) || `Expected an array, but received: ${Ne(e)}`
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        }
    })
}

function at(n) {
    const t = Object.keys(n);
    return new ze({
        type: "type",
        schema: n,
        * entries(e) {
            if (Dr(e))
                for (const r of t) yield [r, e[r], n[r]]
        },
        validator(e) {
            return an(e) || `Expected an object, but received: ${Ne(e)}`
        },
        coercer(e) {
            return an(e) ? { ...e
            } : e
        }
    })
}

function Ee(n) {
    const t = n.map(e => e.type).join(" | ");
    return new ze({
        type: "union",
        schema: null,
        coercer(e, r) {
            for (const o of n) {
                const [i, s] = o.validate(e, {
                    coerce: !0,
                    mask: r.mask
                });
                if (!i) return s
            }
            return e
        },
        validator(e, r) {
            const o = [];
            for (const i of n) {
                const [...s] = Oi(e, i, r), [f] = s;
                if (f[0])
                    for (const [y] of s) y && o.push(y);
                else return []
            }
            return [`Expected the value to satisfy a union of \`${t}\`, but received: ${Ne(e)}`, ...o]
        }
    })
}

function Ar() {
    return ar("unknown", () => !0)
}

function Hr(n, t, e) {
    return new ze({ ...n,
        coercer: (r, o) => vs(r, t) ? n.coercer(e(r, o), o) : n.coercer(r, o)
    })
}
var Yr, Su = new Uint8Array(16);

function xs() {
    if (!Yr && (Yr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Yr)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Yr(Su)
}
const _u = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function En(n) {
    return typeof n == "string" && _u.test(n)
}
var ce = [];
for (var ai = 0; ai < 256; ++ai) ce.push((ai + 256).toString(16).substr(1));

function xn(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        e = (ce[n[t + 0]] + ce[n[t + 1]] + ce[n[t + 2]] + ce[n[t + 3]] + "-" + ce[n[t + 4]] + ce[n[t + 5]] + "-" + ce[n[t + 6]] + ce[n[t + 7]] + "-" + ce[n[t + 8]] + ce[n[t + 9]] + "-" + ce[n[t + 10]] + ce[n[t + 11]] + ce[n[t + 12]] + ce[n[t + 13]] + ce[n[t + 14]] + ce[n[t + 15]]).toLowerCase();
    if (!En(e)) throw TypeError("Stringified UUID is invalid");
    return e
}
var Eo, ci, ui = 0,
    hi = 0;

function Iu(n, t, e) {
    var r = t && e || 0,
        o = t || new Array(16);
    n = n || {};
    var i = n.node || Eo,
        s = n.clockseq !== void 0 ? n.clockseq : ci;
    if (i == null || s == null) {
        var f = n.random || (n.rng || xs)();
        i == null && (i = Eo = [f[0] | 1, f[1], f[2], f[3], f[4], f[5]]), s == null && (s = ci = (f[6] << 8 | f[7]) & 16383)
    }
    var y = n.msecs !== void 0 ? n.msecs : Date.now(),
        S = n.nsecs !== void 0 ? n.nsecs : hi + 1,
        m = y - ui + (S - hi) / 1e4;
    if (m < 0 && n.clockseq === void 0 && (s = s + 1 & 16383), (m < 0 || y > ui) && n.nsecs === void 0 && (S = 0), S >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ui = y, hi = S, ci = s, y += 122192928e5;
    var U = ((y & 268435455) * 1e4 + S) % 4294967296;
    o[r++] = U >>> 24 & 255, o[r++] = U >>> 16 & 255, o[r++] = U >>> 8 & 255, o[r++] = U & 255;
    var H = y / 4294967296 * 1e4 & 268435455;
    o[r++] = H >>> 8 & 255, o[r++] = H & 255, o[r++] = H >>> 24 & 15 | 16, o[r++] = H >>> 16 & 255, o[r++] = s >>> 8 | 128, o[r++] = s & 255;
    for (var O = 0; O < 6; ++O) o[r + O] = i[O];
    return t || xn(o)
}

function Bs(n) {
    if (!En(n)) throw TypeError("Invalid UUID");
    var t, e = new Uint8Array(16);
    return e[0] = (t = parseInt(n.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(n.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(n.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(n.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(n.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e
}

function Au(n) {
    n = unescape(encodeURIComponent(n));
    for (var t = [], e = 0; e < n.length; ++e) t.push(n.charCodeAt(e));
    return t
}
var ku = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    Ru = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

function Ss(n, t, e) {
    function r(o, i, s, f) {
        if (typeof o == "string" && (o = Au(o)), typeof i == "string" && (i = Bs(i)), i.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var y = new Uint8Array(16 + o.length);
        if (y.set(i), y.set(o, i.length), y = e(y), y[6] = y[6] & 15 | t, y[8] = y[8] & 63 | 128, s) {
            f = f || 0;
            for (var S = 0; S < 16; ++S) s[f + S] = y[S];
            return s
        }
        return xn(y)
    }
    try {
        r.name = n
    } catch {}
    return r.DNS = ku, r.URL = Ru, r
}

function Mu(n) {
    if (typeof n == "string") {
        var t = unescape(encodeURIComponent(n));
        n = new Uint8Array(t.length);
        for (var e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e)
    }
    return Tu(Lu(Uu(n), n.length * 8))
}

function Tu(n) {
    for (var t = [], e = n.length * 32, r = "0123456789abcdef", o = 0; o < e; o += 8) {
        var i = n[o >> 5] >>> o % 32 & 255,
            s = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(i & 15), 16);
        t.push(s)
    }
    return t
}

function _s(n) {
    return (n + 64 >>> 9 << 4) + 14 + 1
}

function Lu(n, t) {
    n[t >> 5] |= 128 << t % 32, n[_s(t) - 1] = t;
    for (var e = 1732584193, r = -271733879, o = -1732584194, i = 271733878, s = 0; s < n.length; s += 16) {
        var f = e,
            y = r,
            S = o,
            m = i;
        e = ge(e, r, o, i, n[s], 7, -680876936), i = ge(i, e, r, o, n[s + 1], 12, -389564586), o = ge(o, i, e, r, n[s + 2], 17, 606105819), r = ge(r, o, i, e, n[s + 3], 22, -1044525330), e = ge(e, r, o, i, n[s + 4], 7, -176418897), i = ge(i, e, r, o, n[s + 5], 12, 1200080426), o = ge(o, i, e, r, n[s + 6], 17, -1473231341), r = ge(r, o, i, e, n[s + 7], 22, -45705983), e = ge(e, r, o, i, n[s + 8], 7, 1770035416), i = ge(i, e, r, o, n[s + 9], 12, -1958414417), o = ge(o, i, e, r, n[s + 10], 17, -42063), r = ge(r, o, i, e, n[s + 11], 22, -1990404162), e = ge(e, r, o, i, n[s + 12], 7, 1804603682), i = ge(i, e, r, o, n[s + 13], 12, -40341101), o = ge(o, i, e, r, n[s + 14], 17, -1502002290), r = ge(r, o, i, e, n[s + 15], 22, 1236535329), e = ye(e, r, o, i, n[s + 1], 5, -165796510), i = ye(i, e, r, o, n[s + 6], 9, -1069501632), o = ye(o, i, e, r, n[s + 11], 14, 643717713), r = ye(r, o, i, e, n[s], 20, -373897302), e = ye(e, r, o, i, n[s + 5], 5, -701558691), i = ye(i, e, r, o, n[s + 10], 9, 38016083), o = ye(o, i, e, r, n[s + 15], 14, -660478335), r = ye(r, o, i, e, n[s + 4], 20, -405537848), e = ye(e, r, o, i, n[s + 9], 5, 568446438), i = ye(i, e, r, o, n[s + 14], 9, -1019803690), o = ye(o, i, e, r, n[s + 3], 14, -187363961), r = ye(r, o, i, e, n[s + 8], 20, 1163531501), e = ye(e, r, o, i, n[s + 13], 5, -1444681467), i = ye(i, e, r, o, n[s + 2], 9, -51403784), o = ye(o, i, e, r, n[s + 7], 14, 1735328473), r = ye(r, o, i, e, n[s + 12], 20, -1926607734), e = me(e, r, o, i, n[s + 5], 4, -378558), i = me(i, e, r, o, n[s + 8], 11, -2022574463), o = me(o, i, e, r, n[s + 11], 16, 1839030562), r = me(r, o, i, e, n[s + 14], 23, -35309556), e = me(e, r, o, i, n[s + 1], 4, -1530992060), i = me(i, e, r, o, n[s + 4], 11, 1272893353), o = me(o, i, e, r, n[s + 7], 16, -155497632), r = me(r, o, i, e, n[s + 10], 23, -1094730640), e = me(e, r, o, i, n[s + 13], 4, 681279174), i = me(i, e, r, o, n[s], 11, -358537222), o = me(o, i, e, r, n[s + 3], 16, -722521979), r = me(r, o, i, e, n[s + 6], 23, 76029189), e = me(e, r, o, i, n[s + 9], 4, -640364487), i = me(i, e, r, o, n[s + 12], 11, -421815835), o = me(o, i, e, r, n[s + 15], 16, 530742520), r = me(r, o, i, e, n[s + 2], 23, -995338651), e = we(e, r, o, i, n[s], 6, -198630844), i = we(i, e, r, o, n[s + 7], 10, 1126891415), o = we(o, i, e, r, n[s + 14], 15, -1416354905), r = we(r, o, i, e, n[s + 5], 21, -57434055), e = we(e, r, o, i, n[s + 12], 6, 1700485571), i = we(i, e, r, o, n[s + 3], 10, -1894986606), o = we(o, i, e, r, n[s + 10], 15, -1051523), r = we(r, o, i, e, n[s + 1], 21, -2054922799), e = we(e, r, o, i, n[s + 8], 6, 1873313359), i = we(i, e, r, o, n[s + 15], 10, -30611744), o = we(o, i, e, r, n[s + 6], 15, -1560198380), r = we(r, o, i, e, n[s + 13], 21, 1309151649), e = we(e, r, o, i, n[s + 4], 6, -145523070), i = we(i, e, r, o, n[s + 11], 10, -1120210379), o = we(o, i, e, r, n[s + 2], 15, 718787259), r = we(r, o, i, e, n[s + 9], 21, -343485551), e = tr(e, f), r = tr(r, y), o = tr(o, S), i = tr(i, m)
    }
    return [e, r, o, i]
}

function Uu(n) {
    if (n.length === 0) return [];
    for (var t = n.length * 8, e = new Uint32Array(_s(t)), r = 0; r < t; r += 8) e[r >> 5] |= (n[r / 8] & 255) << r % 32;
    return e
}

function tr(n, t) {
    var e = (n & 65535) + (t & 65535),
        r = (n >> 16) + (t >> 16) + (e >> 16);
    return r << 16 | e & 65535
}

function Cu(n, t) {
    return n << t | n >>> 32 - t
}

function Bn(n, t, e, r, o, i) {
    return tr(Cu(tr(tr(t, n), tr(r, i)), o), e)
}

function ge(n, t, e, r, o, i, s) {
    return Bn(t & e | ~t & r, n, t, o, i, s)
}

function ye(n, t, e, r, o, i, s) {
    return Bn(t & r | e & ~r, n, t, o, i, s)
}

function me(n, t, e, r, o, i, s) {
    return Bn(t ^ e ^ r, n, t, o, i, s)
}

function we(n, t, e, r, o, i, s) {
    return Bn(e ^ (t | ~r), n, t, o, i, s)
}
var Nu = Ss("v3", 48, Mu);

function Ou(n, t, e) {
    n = n || {};
    var r = n.random || (n.rng || xs)();
    if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
        e = e || 0;
        for (var o = 0; o < 16; ++o) t[e + o] = r[o];
        return t
    }
    return xn(r)
}

function Pu(n, t, e, r) {
    switch (n) {
        case 0:
            return t & e ^ ~t & r;
        case 1:
            return t ^ e ^ r;
        case 2:
            return t & e ^ t & r ^ e & r;
        case 3:
            return t ^ e ^ r
    }
}

function li(n, t) {
    return n << t | n >>> 32 - t
}

function Fu(n) {
    var t = [1518500249, 1859775393, 2400959708, 3395469782],
        e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
        var r = unescape(encodeURIComponent(n));
        n = [];
        for (var o = 0; o < r.length; ++o) n.push(r.charCodeAt(o))
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    for (var i = n.length / 4 + 2, s = Math.ceil(i / 16), f = new Array(s), y = 0; y < s; ++y) {
        for (var S = new Uint32Array(16), m = 0; m < 16; ++m) S[m] = n[y * 64 + m * 4] << 24 | n[y * 64 + m * 4 + 1] << 16 | n[y * 64 + m * 4 + 2] << 8 | n[y * 64 + m * 4 + 3];
        f[y] = S
    }
    f[s - 1][14] = (n.length - 1) * 8 / Math.pow(2, 32), f[s - 1][14] = Math.floor(f[s - 1][14]), f[s - 1][15] = (n.length - 1) * 8 & 4294967295;
    for (var U = 0; U < s; ++U) {
        for (var H = new Uint32Array(80), O = 0; O < 16; ++O) H[O] = f[U][O];
        for (var j = 16; j < 80; ++j) H[j] = li(H[j - 3] ^ H[j - 8] ^ H[j - 14] ^ H[j - 16], 1);
        for (var F = e[0], C = e[1], Q = e[2], V = e[3], W = e[4], st = 0; st < 80; ++st) {
            var X = Math.floor(st / 20),
                nt = li(F, 5) + Pu(X, C, Q, V) + W + t[X] + H[st] >>> 0;
            W = V, V = Q, Q = li(C, 30) >>> 0, C = F, F = nt
        }
        e[0] = e[0] + F >>> 0, e[1] = e[1] + C >>> 0, e[2] = e[2] + Q >>> 0, e[3] = e[3] + V >>> 0, e[4] = e[4] + W >>> 0
    }
    return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255]
}
var qu = Ss("v5", 80, Fu);
const zu = "00000000-0000-0000-0000-000000000000";

function Du(n) {
    if (!En(n)) throw TypeError("Invalid UUID");
    return parseInt(n.substr(14, 1), 16)
}
const $u = Object.freeze(Object.defineProperty({
        __proto__: null,
        NIL: zu,
        parse: Bs,
        stringify: xn,
        v1: Iu,
        v3: Nu,
        v4: Ou,
        v5: qu,
        validate: En,
        version: Du
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Is = Po($u);
var fi, xo;

function Hu() {
    if (xo) return fi;
    xo = 1;
    const n = Is.v4;
    return fi = function(e, r, o, i) {
        if (typeof e != "string") throw new TypeError(e + " must be a string");
        i = i || {};
        const s = typeof i.version == "number" ? i.version : 2;
        if (s !== 1 && s !== 2) throw new TypeError(s + " must be 1 or 2");
        const f = {
            method: e
        };
        if (s === 2 && (f.jsonrpc = "2.0"), r) {
            if (typeof r != "object" && !Array.isArray(r)) throw new TypeError(r + " must be an object, array or omitted");
            f.params = r
        }
        if (typeof o > "u") {
            const y = typeof i.generator == "function" ? i.generator : function() {
                return n()
            };
            f.id = y(f, i)
        } else s === 2 && o === null ? i.notificationIdNull && (f.id = null) : f.id = o;
        return f
    }, fi
}
var di, Bo;

function Ku() {
    if (Bo) return di;
    Bo = 1;
    const n = Is.v4,
        t = Hu(),
        e = function(r, o) {
            if (!(this instanceof e)) return new e(r, o);
            o || (o = {}), this.options = {
                reviver: typeof o.reviver < "u" ? o.reviver : null,
                replacer: typeof o.replacer < "u" ? o.replacer : null,
                generator: typeof o.generator < "u" ? o.generator : function() {
                    return n()
                },
                version: typeof o.version < "u" ? o.version : 2,
                notificationIdNull: typeof o.notificationIdNull == "boolean" ? o.notificationIdNull : !1
            }, this.callServer = r
        };
    return di = e, e.prototype.request = function(r, o, i, s) {
        const f = this;
        let y = null;
        const S = Array.isArray(r) && typeof o == "function";
        if (this.options.version === 1 && S) throw new TypeError("JSON-RPC 1.0 does not support batching");
        if (S || !S && r && typeof r == "object" && typeof o == "function") s = o, y = r;
        else {
            typeof i == "function" && (s = i, i = void 0);
            const H = typeof s == "function";
            try {
                y = t(r, o, i, {
                    generator: this.options.generator,
                    version: this.options.version,
                    notificationIdNull: this.options.notificationIdNull
                })
            } catch (O) {
                if (H) return s(O);
                throw O
            }
            if (!H) return y
        }
        let U;
        try {
            U = JSON.stringify(y, this.options.replacer)
        } catch (H) {
            return s(H)
        }
        return this.callServer(U, function(H, O) {
            f._parseResponse(H, O, s)
        }), y
    }, e.prototype._parseResponse = function(r, o, i) {
        if (r) {
            i(r);
            return
        }
        if (!o) return i();
        let s;
        try {
            s = JSON.parse(o, this.options.reviver)
        } catch (f) {
            return i(f)
        }
        if (i.length === 3)
            if (Array.isArray(s)) {
                const f = function(S) {
                        return typeof S.error < "u"
                    },
                    y = function(S) {
                        return !f(S)
                    };
                return i(null, s.filter(f), s.filter(y))
            } else return i(null, s.error, s.result);
        i(null, s)
    }, di
}
var Wu = Ku();
const Gu = fn(Wu);
var ju = class extends ys {
    constructor(t, e, r) {
        super();
        ae(this, "socket");
        this.socket = new window.WebSocket(t, r), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = o => this.emit("message", o.data), this.socket.onerror = o => this.emit("error", o), this.socket.onclose = o => {
            this.emit("close", o.code, o.reason)
        }
    }
    send(t, e, r) {
        const o = r || e;
        try {
            this.socket.send(t), o()
        } catch (i) {
            o(i)
        }
    }
    close(t, e) {
        this.socket.close(t, e)
    }
    addEventListener(t, e, r) {
        this.socket.addEventListener(t, e, r)
    }
};

function Vu(n, t) {
    return new ju(n, t)
}
var Zu = class {
        encode(n) {
            return JSON.stringify(n)
        }
        decode(n) {
            return JSON.parse(n)
        }
    },
    Yu = class extends ys {
        constructor(t, e = "ws://localhost:8080", {
            autoconnect: r = !0,
            reconnect: o = !0,
            reconnect_interval: i = 1e3,
            max_reconnects: s = 5,
            ...f
        } = {}, y, S) {
            super();
            ae(this, "address");
            ae(this, "rpc_id");
            ae(this, "queue");
            ae(this, "options");
            ae(this, "autoconnect");
            ae(this, "ready");
            ae(this, "reconnect");
            ae(this, "reconnect_timer_id");
            ae(this, "reconnect_interval");
            ae(this, "max_reconnects");
            ae(this, "rest_options");
            ae(this, "current_reconnects");
            ae(this, "generate_request_id");
            ae(this, "socket");
            ae(this, "webSocketFactory");
            ae(this, "dataPack");
            this.webSocketFactory = t, this.queue = {}, this.rpc_id = 0, this.address = e, this.autoconnect = r, this.ready = !1, this.reconnect = o, this.reconnect_timer_id = void 0, this.reconnect_interval = i, this.max_reconnects = s, this.rest_options = f, this.current_reconnects = 0, this.generate_request_id = y || (() => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1), S ? this.dataPack = S : this.dataPack = new Zu, this.autoconnect && this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options
            })
        }
        connect() {
            this.socket || this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options
            })
        }
        call(t, e, r, o) {
            return !o && typeof r == "object" && (o = r, r = null), new Promise((i, s) => {
                if (!this.ready) return s(new Error("socket not ready"));
                const f = this.generate_request_id(t, e),
                    y = {
                        jsonrpc: "2.0",
                        method: t,
                        params: e || void 0,
                        id: f
                    };
                this.socket.send(this.dataPack.encode(y), o, S => {
                    if (S) return s(S);
                    this.queue[f] = {
                        promise: [i, s]
                    }, r && (this.queue[f].timeout = setTimeout(() => {
                        delete this.queue[f], s(new Error("reply timeout"))
                    }, r))
                })
            })
        }
        async login(t) {
            const e = await this.call("rpc.login", t);
            if (!e) throw new Error("authentication failed");
            return e
        }
        async listMethods() {
            return await this.call("__listMethods")
        }
        notify(t, e) {
            return new Promise((r, o) => {
                if (!this.ready) return o(new Error("socket not ready"));
                const i = {
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                };
                this.socket.send(this.dataPack.encode(i), s => {
                    if (s) return o(s);
                    r()
                })
            })
        }
        async subscribe(t) {
            typeof t == "string" && (t = [t]);
            const e = await this.call("rpc.on", t);
            if (typeof t == "string" && e[t] !== "ok") throw new Error("Failed subscribing to an event '" + t + "' with: " + e[t]);
            return e
        }
        async unsubscribe(t) {
            typeof t == "string" && (t = [t]);
            const e = await this.call("rpc.off", t);
            if (typeof t == "string" && e[t] !== "ok") throw new Error("Failed unsubscribing from an event with: " + e);
            return e
        }
        close(t, e) {
            this.socket.close(t || 1e3, e)
        }
        setAutoReconnect(t) {
            this.reconnect = t
        }
        setReconnectInterval(t) {
            this.reconnect_interval = t
        }
        setMaxReconnects(t) {
            this.max_reconnects = t
        }
        _connect(t, e) {
            clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", () => {
                this.ready = !0, this.emit("open"), this.current_reconnects = 0
            }), this.socket.addEventListener("message", ({
                data: r
            }) => {
                r instanceof ArrayBuffer && (r = St.from(r).toString());
                try {
                    r = this.dataPack.decode(r)
                } catch {
                    return
                }
                if (r.notification && this.listeners(r.notification).length) {
                    if (!Object.keys(r.params).length) return this.emit(r.notification);
                    const o = [r.notification];
                    if (r.params.constructor === Object) o.push(r.params);
                    else
                        for (let i = 0; i < r.params.length; i++) o.push(r.params[i]);
                    return Promise.resolve().then(() => {
                        this.emit.apply(this, o)
                    })
                }
                if (!this.queue[r.id]) return r.method ? Promise.resolve().then(() => {
                    this.emit(r.method, r == null ? void 0 : r.params)
                }) : void 0;
                "error" in r == "result" in r && this.queue[r.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), this.queue[r.id].timeout && clearTimeout(this.queue[r.id].timeout), r.error ? this.queue[r.id].promise[1](r.error) : this.queue[r.id].promise[0](r.result), delete this.queue[r.id]
            }), this.socket.addEventListener("error", r => this.emit("error", r)), this.socket.addEventListener("close", ({
                code: r,
                reason: o
            }) => {
                this.ready && setTimeout(() => this.emit("close", r, o), 0), this.ready = !1, this.socket = void 0, r !== 1e3 && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout(() => this._connect(t, e), this.reconnect_interval)))
            })
        }
    };
zr.utils.randomPrivateKey;
zr.getPublicKey;

function So(n) {
    try {
        return zr.ExtendedPoint.fromHex(n), !0
    } catch {
        return !1
    }
}
const As = (n, t) => zr.sign(n, t.slice(0, 32)),
    Xu = zr.verify,
    ue = n => St.isBuffer(n) ? n : n instanceof Uint8Array ? St.from(n.buffer, n.byteOffset, n.byteLength) : St.from(n);
class Ju {
    constructor(t) {
        Object.assign(this, t)
    }
    encode() {
        return St.from(si.serialize(Qr, this))
    }
    static decode(t) {
        return si.deserialize(Qr, this, t)
    }
    static decodeUnchecked(t) {
        return si.deserializeUnchecked(Qr, this, t)
    }
}
const Qr = new Map;
var ks;
const Qu = 32,
    er = 32;

function th(n) {
    return n._bn !== void 0
}
let _o = 1;
class mt extends Ju {
    constructor(t) {
        if (super({}), this._bn = void 0, th(t)) this._bn = t._bn;
        else {
            if (typeof t == "string") {
                const e = he.decode(t);
                if (e.length != er) throw new Error("Invalid public key input");
                this._bn = new co(e)
            } else this._bn = new co(t);
            if (this._bn.byteLength() > er) throw new Error("Invalid public key input")
        }
    }
    static unique() {
        const t = new mt(_o);
        return _o += 1, new mt(t.toBuffer())
    }
    equals(t) {
        return this._bn.eq(t._bn)
    }
    toBase58() {
        return he.encode(this.toBytes())
    }
    toJSON() {
        return this.toBase58()
    }
    toBytes() {
        const t = this.toBuffer();
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
    toBuffer() {
        const t = this._bn.toArrayLike(St);
        if (t.length === er) return t;
        const e = St.alloc(32);
        return t.copy(e, 32 - t.length), e
    }
    get[Symbol.toStringTag]() {
        return `PublicKey(${this.toString()})`
    }
    toString() {
        return this.toBase58()
    }
    static async createWithSeed(t, e, r) {
        const o = St.concat([t.toBuffer(), St.from(e), r.toBuffer()]),
            i = Ji(o);
        return new mt(i)
    }
    static createProgramAddressSync(t, e) {
        let r = St.alloc(0);
        t.forEach(function(i) {
            if (i.length > Qu) throw new TypeError("Max seed length exceeded");
            r = St.concat([r, ue(i)])
        }), r = St.concat([r, e.toBuffer(), St.from("ProgramDerivedAddress")]);
        const o = Ji(r);
        if (So(o)) throw new Error("Invalid seeds, address must fall off the curve");
        return new mt(o)
    }
    static async createProgramAddress(t, e) {
        return this.createProgramAddressSync(t, e)
    }
    static findProgramAddressSync(t, e) {
        let r = 255,
            o;
        for (; r != 0;) {
            try {
                const i = t.concat(St.from([r]));
                o = this.createProgramAddressSync(i, e)
            } catch (i) {
                if (i instanceof TypeError) throw i;
                r--;
                continue
            }
            return [o, r]
        }
        throw new Error("Unable to find a viable program address nonce")
    }
    static async findProgramAddress(t, e) {
        return this.findProgramAddressSync(t, e)
    }
    static isOnCurve(t) {
        const e = new mt(t);
        return So(e.toBytes())
    }
}
ks = mt;
mt.default = new ks("11111111111111111111111111111111");
Qr.set(mt, {
    kind: "struct",
    fields: [
        ["_bn", "u256"]
    ]
});
new mt("BPFLoader1111111111111111111111111111111111");
const vr = 1232,
    qi = 127,
    cn = 64;
class Rs extends Error {
    constructor(t) {
        super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t
    }
}
Object.defineProperty(Rs.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class Ms extends Error {
    constructor(t, e) {
        super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t
    }
}
Object.defineProperty(Ms.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
class Tr extends Error {
    constructor(t) {
        super(`Signature ${t} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = t
    }
}
Object.defineProperty(Tr.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
});
class un {
    constructor(t, e) {
        this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e
    }
    keySegments() {
        const t = [this.staticAccountKeys];
        return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t
    }
    get(t) {
        for (const e of this.keySegments()) {
            if (t < e.length) return e[t];
            t -= e.length
        }
    }
    get length() {
        return this.keySegments().flat().length
    }
    compileInstructions(t) {
        if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
        const r = new Map;
        this.keySegments().flat().forEach((i, s) => {
            r.set(i.toBase58(), s)
        });
        const o = i => {
            const s = r.get(i.toBase58());
            if (s === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
            return s
        };
        return t.map(i => ({
            programIdIndex: o(i.programId),
            accountKeyIndexes: i.keys.map(s => o(s.pubkey)),
            data: i.data
        }))
    }
}
const Rt = (n = "publicKey") => P.blob(32, n),
    eh = (n = "signature") => P.blob(64, n),
    wr = (n = "string") => {
        const t = P.struct([P.u32("length"), P.u32("lengthPadding"), P.blob(P.offset(P.u32(), -8), "chars")], n),
            e = t.decode.bind(t),
            r = t.encode.bind(t),
            o = t;
        return o.decode = (i, s) => e(i, s).chars.toString(), o.encode = (i, s, f) => {
            const y = {
                chars: St.from(i, "utf8")
            };
            return r(y, s, f)
        }, o.alloc = i => P.u32().span + P.u32().span + St.from(i, "utf8").length, o
    },
    rh = (n = "authorized") => P.struct([Rt("staker"), Rt("withdrawer")], n),
    nh = (n = "lockup") => P.struct([P.ns64("unixTimestamp"), P.ns64("epoch"), Rt("custodian")], n),
    ih = (n = "voteInit") => P.struct([Rt("nodePubkey"), Rt("authorizedVoter"), Rt("authorizedWithdrawer"), P.u8("commission")], n),
    oh = (n = "voteAuthorizeWithSeedArgs") => P.struct([P.u32("voteAuthorizationType"), Rt("currentAuthorityDerivedKeyOwnerPubkey"), wr("currentAuthorityDerivedKeySeed"), Rt("newAuthorized")], n);

function Ts(n, t) {
    const e = o => {
        if (o.span >= 0) return o.span;
        if (typeof o.alloc == "function") return o.alloc(t[o.property]);
        if ("count" in o && "elementLayout" in o) {
            const i = t[o.property];
            if (Array.isArray(i)) return i.length * e(o.elementLayout)
        } else if ("fields" in o) return Ts({
            layout: o
        }, t[o.property]);
        return 0
    };
    let r = 0;
    return n.layout.fields.forEach(o => {
        r += e(o)
    }), r
}

function _e(n) {
    let t = 0,
        e = 0;
    for (;;) {
        let r = n.shift();
        if (t |= (r & 127) << e * 7, e += 1, (r & 128) === 0) break
    }
    return t
}

function Ie(n, t) {
    let e = t;
    for (;;) {
        let r = e & 127;
        if (e >>= 7, e == 0) {
            n.push(r);
            break
        } else r |= 128, n.push(r)
    }
}

function jt(n, t) {
    if (!n) throw new Error(t || "Assertion failed")
}
class Sn {
    constructor(t, e) {
        this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e
    }
    static compile(t, e) {
        const r = new Map,
            o = s => {
                const f = s.toBase58();
                let y = r.get(f);
                return y === void 0 && (y = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                }, r.set(f, y)), y
            },
            i = o(e);
        i.isSigner = !0, i.isWritable = !0;
        for (const s of t) {
            o(s.programId).isInvoked = !0;
            for (const f of s.keys) {
                const y = o(f.pubkey);
                y.isSigner || (y.isSigner = f.isSigner), y.isWritable || (y.isWritable = f.isWritable)
            }
        }
        return new Sn(e, r)
    }
    getMessageComponents() {
        const t = [...this.keyMetaMap.entries()];
        jt(t.length <= 256, "Max static account keys length exceeded");
        const e = t.filter(([, y]) => y.isSigner && y.isWritable),
            r = t.filter(([, y]) => y.isSigner && !y.isWritable),
            o = t.filter(([, y]) => !y.isSigner && y.isWritable),
            i = t.filter(([, y]) => !y.isSigner && !y.isWritable),
            s = {
                numRequiredSignatures: e.length + r.length,
                numReadonlySignedAccounts: r.length,
                numReadonlyUnsignedAccounts: i.length
            }; {
            jt(e.length > 0, "Expected at least one writable signer key");
            const [y] = e[0];
            jt(y === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
        }
        const f = [...e.map(([y]) => new mt(y)), ...r.map(([y]) => new mt(y)), ...o.map(([y]) => new mt(y)), ...i.map(([y]) => new mt(y))];
        return [s, f]
    }
    extractTableLookup(t) {
        const [e, r] = this.drainKeysFoundInLookupTable(t.state.addresses, s => !s.isSigner && !s.isInvoked && s.isWritable), [o, i] = this.drainKeysFoundInLookupTable(t.state.addresses, s => !s.isSigner && !s.isInvoked && !s.isWritable);
        if (!(e.length === 0 && o.length === 0)) return [{
            accountKey: t.key,
            writableIndexes: e,
            readonlyIndexes: o
        }, {
            writable: r,
            readonly: i
        }]
    }
    drainKeysFoundInLookupTable(t, e) {
        const r = new Array,
            o = new Array;
        for (const [i, s] of this.keyMetaMap.entries())
            if (e(s)) {
                const f = new mt(i),
                    y = t.findIndex(S => S.equals(f));
                y >= 0 && (jt(y < 256, "Max lookup table index exceeded"), r.push(y), o.push(f), this.keyMetaMap.delete(i))
            }
        return [r, o]
    }
}
const Ls = "Reached end of buffer unexpectedly";

function We(n) {
    if (n.length === 0) throw new Error(Ls);
    return n.shift()
}

function Ae(n, ...t) {
    const [e] = t;
    if (t.length === 2 ? e + (t[1] ? ? 0) > n.length : e >= n.length) throw new Error(Ls);
    return n.splice(...t)
}
class Ve {
    constructor(t) {
        this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map(e => new mt(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
    }
    get version() {
        return "legacy"
    }
    get staticAccountKeys() {
        return this.accountKeys
    }
    get compiledInstructions() {
        return this.instructions.map(t => ({
            programIdIndex: t.programIdIndex,
            accountKeyIndexes: t.accounts,
            data: he.decode(t.data)
        }))
    }
    get addressTableLookups() {
        return []
    }
    getAccountKeys() {
        return new un(this.staticAccountKeys)
    }
    static compile(t) {
        const e = Sn.compile(t.instructions, t.payerKey),
            [r, o] = e.getMessageComponents(),
            s = new un(o).compileInstructions(t.instructions).map(f => ({
                programIdIndex: f.programIdIndex,
                accounts: f.accountKeyIndexes,
                data: he.encode(f.data)
            }));
        return new Ve({
            header: r,
            accountKeys: o,
            recentBlockhash: t.recentBlockhash,
            instructions: s
        })
    }
    isAccountSigner(t) {
        return t < this.header.numRequiredSignatures
    }
    isAccountWritable(t) {
        const e = this.header.numRequiredSignatures;
        if (t >= this.header.numRequiredSignatures) {
            const r = t - e,
                i = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
            return r < i
        } else {
            const r = e - this.header.numReadonlySignedAccounts;
            return t < r
        }
    }
    isProgramId(t) {
        return this.indexToProgramIds.has(t)
    }
    programIds() {
        return [...this.indexToProgramIds.values()]
    }
    nonProgramIds() {
        return this.accountKeys.filter((t, e) => !this.isProgramId(e))
    }
    serialize() {
        const t = this.accountKeys.length;
        let e = [];
        Ie(e, t);
        const r = this.instructions.map(U => {
            const {
                accounts: H,
                programIdIndex: O
            } = U, j = Array.from(he.decode(U.data));
            let F = [];
            Ie(F, H.length);
            let C = [];
            return Ie(C, j.length), {
                programIdIndex: O,
                keyIndicesCount: St.from(F),
                keyIndices: H,
                dataLength: St.from(C),
                data: j
            }
        });
        let o = [];
        Ie(o, r.length);
        let i = St.alloc(vr);
        St.from(o).copy(i);
        let s = o.length;
        r.forEach(U => {
            const O = P.struct([P.u8("programIdIndex"), P.blob(U.keyIndicesCount.length, "keyIndicesCount"), P.seq(P.u8("keyIndex"), U.keyIndices.length, "keyIndices"), P.blob(U.dataLength.length, "dataLength"), P.seq(P.u8("userdatum"), U.data.length, "data")]).encode(U, i, s);
            s += O
        }), i = i.slice(0, s);
        const f = P.struct([P.blob(1, "numRequiredSignatures"), P.blob(1, "numReadonlySignedAccounts"), P.blob(1, "numReadonlyUnsignedAccounts"), P.blob(e.length, "keyCount"), P.seq(Rt("key"), t, "keys"), Rt("recentBlockhash")]),
            y = {
                numRequiredSignatures: St.from([this.header.numRequiredSignatures]),
                numReadonlySignedAccounts: St.from([this.header.numReadonlySignedAccounts]),
                numReadonlyUnsignedAccounts: St.from([this.header.numReadonlyUnsignedAccounts]),
                keyCount: St.from(e),
                keys: this.accountKeys.map(U => ue(U.toBytes())),
                recentBlockhash: he.decode(this.recentBlockhash)
            };
        let S = St.alloc(2048);
        const m = f.encode(y, S);
        return i.copy(S, m), S.slice(0, m + i.length)
    }
    static from(t) {
        let e = [...t];
        const r = We(e);
        if (r !== (r & qi)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
        const o = We(e),
            i = We(e),
            s = _e(e);
        let f = [];
        for (let H = 0; H < s; H++) {
            const O = Ae(e, 0, er);
            f.push(new mt(St.from(O)))
        }
        const y = Ae(e, 0, er),
            S = _e(e);
        let m = [];
        for (let H = 0; H < S; H++) {
            const O = We(e),
                j = _e(e),
                F = Ae(e, 0, j),
                C = _e(e),
                Q = Ae(e, 0, C),
                V = he.encode(St.from(Q));
            m.push({
                programIdIndex: O,
                accounts: F,
                data: V
            })
        }
        const U = {
            header: {
                numRequiredSignatures: r,
                numReadonlySignedAccounts: o,
                numReadonlyUnsignedAccounts: i
            },
            recentBlockhash: he.encode(St.from(y)),
            accountKeys: f,
            instructions: m
        };
        return new Ve(U)
    }
}
class Pr {
    constructor(t) {
        this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups
    }
    get version() {
        return 0
    }
    get numAccountKeysFromLookups() {
        let t = 0;
        for (const e of this.addressTableLookups) t += e.readonlyIndexes.length + e.writableIndexes.length;
        return t
    }
    getAccountKeys(t) {
        let e;
        if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
            if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
            e = t.accountKeysFromLookups
        } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts) e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
        return new un(this.staticAccountKeys, e)
    }
    isAccountSigner(t) {
        return t < this.header.numRequiredSignatures
    }
    isAccountWritable(t) {
        const e = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
        if (t >= r) {
            const o = t - r,
                i = this.addressTableLookups.reduce((s, f) => s + f.writableIndexes.length, 0);
            return o < i
        } else if (t >= this.header.numRequiredSignatures) {
            const o = t - e,
                s = r - e - this.header.numReadonlyUnsignedAccounts;
            return o < s
        } else {
            const o = e - this.header.numReadonlySignedAccounts;
            return t < o
        }
    }
    resolveAddressTableLookups(t) {
        const e = {
            writable: [],
            readonly: []
        };
        for (const r of this.addressTableLookups) {
            const o = t.find(i => i.key.equals(r.accountKey));
            if (!o) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
            for (const i of r.writableIndexes)
                if (i < o.state.addresses.length) e.writable.push(o.state.addresses[i]);
                else throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`);
            for (const i of r.readonlyIndexes)
                if (i < o.state.addresses.length) e.readonly.push(o.state.addresses[i]);
                else throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`)
        }
        return e
    }
    static compile(t) {
        const e = Sn.compile(t.instructions, t.payerKey),
            r = new Array,
            o = {
                writable: new Array,
                readonly: new Array
            },
            i = t.addressLookupTableAccounts || [];
        for (const m of i) {
            const U = e.extractTableLookup(m);
            if (U !== void 0) {
                const [H, {
                    writable: O,
                    readonly: j
                }] = U;
                r.push(H), o.writable.push(...O), o.readonly.push(...j)
            }
        }
        const [s, f] = e.getMessageComponents(), S = new un(f, o).compileInstructions(t.instructions);
        return new Pr({
            header: s,
            staticAccountKeys: f,
            recentBlockhash: t.recentBlockhash,
            compiledInstructions: S,
            addressTableLookups: r
        })
    }
    serialize() {
        const t = Array();
        Ie(t, this.staticAccountKeys.length);
        const e = this.serializeInstructions(),
            r = Array();
        Ie(r, this.compiledInstructions.length);
        const o = this.serializeAddressTableLookups(),
            i = Array();
        Ie(i, this.addressTableLookups.length);
        const s = P.struct([P.u8("prefix"), P.struct([P.u8("numRequiredSignatures"), P.u8("numReadonlySignedAccounts"), P.u8("numReadonlyUnsignedAccounts")], "header"), P.blob(t.length, "staticAccountKeysLength"), P.seq(Rt(), this.staticAccountKeys.length, "staticAccountKeys"), Rt("recentBlockhash"), P.blob(r.length, "instructionsLength"), P.blob(e.length, "serializedInstructions"), P.blob(i.length, "addressTableLookupsLength"), P.blob(o.length, "serializedAddressTableLookups")]),
            f = new Uint8Array(vr),
            S = s.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(t),
                staticAccountKeys: this.staticAccountKeys.map(m => m.toBytes()),
                recentBlockhash: he.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: e,
                addressTableLookupsLength: new Uint8Array(i),
                serializedAddressTableLookups: o
            }, f);
        return f.slice(0, S)
    }
    serializeInstructions() {
        let t = 0;
        const e = new Uint8Array(vr);
        for (const r of this.compiledInstructions) {
            const o = Array();
            Ie(o, r.accountKeyIndexes.length);
            const i = Array();
            Ie(i, r.data.length);
            const s = P.struct([P.u8("programIdIndex"), P.blob(o.length, "encodedAccountKeyIndexesLength"), P.seq(P.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), P.blob(i.length, "encodedDataLength"), P.blob(r.data.length, "data")]);
            t += s.encode({
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(o),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(i),
                data: r.data
            }, e, t)
        }
        return e.slice(0, t)
    }
    serializeAddressTableLookups() {
        let t = 0;
        const e = new Uint8Array(vr);
        for (const r of this.addressTableLookups) {
            const o = Array();
            Ie(o, r.writableIndexes.length);
            const i = Array();
            Ie(i, r.readonlyIndexes.length);
            const s = P.struct([Rt("accountKey"), P.blob(o.length, "encodedWritableIndexesLength"), P.seq(P.u8(), r.writableIndexes.length, "writableIndexes"), P.blob(i.length, "encodedReadonlyIndexesLength"), P.seq(P.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
            t += s.encode({
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(o),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(i),
                readonlyIndexes: r.readonlyIndexes
            }, e, t)
        }
        return e.slice(0, t)
    }
    static deserialize(t) {
        let e = [...t];
        const r = We(e),
            o = r & qi;
        jt(r !== o, "Expected versioned message but received legacy message");
        const i = o;
        jt(i === 0, `Expected versioned message with version 0 but found version ${i}`);
        const s = {
                numRequiredSignatures: We(e),
                numReadonlySignedAccounts: We(e),
                numReadonlyUnsignedAccounts: We(e)
            },
            f = [],
            y = _e(e);
        for (let j = 0; j < y; j++) f.push(new mt(Ae(e, 0, er)));
        const S = he.encode(Ae(e, 0, er)),
            m = _e(e),
            U = [];
        for (let j = 0; j < m; j++) {
            const F = We(e),
                C = _e(e),
                Q = Ae(e, 0, C),
                V = _e(e),
                W = new Uint8Array(Ae(e, 0, V));
            U.push({
                programIdIndex: F,
                accountKeyIndexes: Q,
                data: W
            })
        }
        const H = _e(e),
            O = [];
        for (let j = 0; j < H; j++) {
            const F = new mt(Ae(e, 0, er)),
                C = _e(e),
                Q = Ae(e, 0, C),
                V = _e(e),
                W = Ae(e, 0, V);
            O.push({
                accountKey: F,
                writableIndexes: Q,
                readonlyIndexes: W
            })
        }
        return new Pr({
            header: s,
            staticAccountKeys: f,
            recentBlockhash: S,
            compiledInstructions: U,
            addressTableLookups: O
        })
    }
}
const Us = {
    deserializeMessageVersion(n) {
        const t = n[0],
            e = t & qi;
        return e === t ? "legacy" : e
    },
    deserialize: n => {
        const t = Us.deserializeMessageVersion(n);
        if (t === "legacy") return Ve.from(n);
        if (t === 0) return Pr.deserialize(n);
        throw new Error(`Transaction message version ${t} deserialization is not supported`)
    }
};
let Qe = function(n) {
    return n[n.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", n[n.PROCESSED = 1] = "PROCESSED", n[n.TIMED_OUT = 2] = "TIMED_OUT", n[n.NONCE_INVALID = 3] = "NONCE_INVALID", n
}({});
const sh = St.alloc(cn).fill(0);
class Le {
    constructor(t) {
        this.keys = void 0, this.programId = void 0, this.data = St.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data)
    }
    toJSON() {
        return {
            keys: this.keys.map(({
                pubkey: t,
                isSigner: e,
                isWritable: r
            }) => ({
                pubkey: t.toJSON(),
                isSigner: e,
                isWritable: r
            })),
            programId: this.programId.toJSON(),
            data: [...this.data]
        }
    }
}
class Ge {
    get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null
    }
    constructor(t) {
        if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t)
            if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
                const {
                    minContextSlot: e,
                    nonceInfo: r
                } = t;
                this.minNonceContextSlot = e, this.nonceInfo = r
            } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
            const {
                blockhash: e,
                lastValidBlockHeight: r
            } = t;
            this.recentBlockhash = e, this.lastValidBlockHeight = r
        } else {
            const {
                recentBlockhash: e,
                nonceInfo: r
            } = t;
            r && (this.nonceInfo = r), this.recentBlockhash = e
        }
    }
    toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map(t => t.toJSON()),
            signers: this.signatures.map(({
                publicKey: t
            }) => t.toJSON())
        }
    }
    add(...t) {
        if (t.length === 0) throw new Error("No instructions");
        return t.forEach(e => {
            "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new Le(e))
        }), this
    }
    compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
        let t, e;
        if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [this.nonceInfo.nonceInstruction, ...this.instructions] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t) throw new Error("Transaction recentBlockhash required");
        e.length < 1 && console.warn("No instructions provided");
        let r;
        if (this.feePayer) r = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
        else throw new Error("Transaction fee payer required");
        for (let F = 0; F < e.length; F++)
            if (e[F].programId === void 0) throw new Error(`Transaction instruction index ${F} has undefined program id`);
        const o = [],
            i = [];
        e.forEach(F => {
            F.keys.forEach(Q => {
                i.push({ ...Q
                })
            });
            const C = F.programId.toString();
            o.includes(C) || o.push(C)
        }), o.forEach(F => {
            i.push({
                pubkey: new mt(F),
                isSigner: !1,
                isWritable: !1
            })
        });
        const s = [];
        i.forEach(F => {
            const C = F.pubkey.toString(),
                Q = s.findIndex(V => V.pubkey.toString() === C);
            Q > -1 ? (s[Q].isWritable = s[Q].isWritable || F.isWritable, s[Q].isSigner = s[Q].isSigner || F.isSigner) : s.push(F)
        }), s.sort(function(F, C) {
            if (F.isSigner !== C.isSigner) return F.isSigner ? -1 : 1;
            if (F.isWritable !== C.isWritable) return F.isWritable ? -1 : 1;
            const Q = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower"
            };
            return F.pubkey.toBase58().localeCompare(C.pubkey.toBase58(), "en", Q)
        });
        const f = s.findIndex(F => F.pubkey.equals(r));
        if (f > -1) {
            const [F] = s.splice(f, 1);
            F.isSigner = !0, F.isWritable = !0, s.unshift(F)
        } else s.unshift({
            pubkey: r,
            isSigner: !0,
            isWritable: !0
        });
        for (const F of this.signatures) {
            const C = s.findIndex(Q => Q.pubkey.equals(F.publicKey));
            if (C > -1) s[C].isSigner || (s[C].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
            else throw new Error(`unknown signer: ${F.publicKey.toString()}`)
        }
        let y = 0,
            S = 0,
            m = 0;
        const U = [],
            H = [];
        s.forEach(({
            pubkey: F,
            isSigner: C,
            isWritable: Q
        }) => {
            C ? (U.push(F.toString()), y += 1, Q || (S += 1)) : (H.push(F.toString()), Q || (m += 1))
        });
        const O = U.concat(H),
            j = e.map(F => {
                const {
                    data: C,
                    programId: Q
                } = F;
                return {
                    programIdIndex: O.indexOf(Q.toString()),
                    accounts: F.keys.map(V => O.indexOf(V.pubkey.toString())),
                    data: he.encode(C)
                }
            });
        return j.forEach(F => {
            jt(F.programIdIndex >= 0), F.accounts.forEach(C => jt(C >= 0))
        }), new Ve({
            header: {
                numRequiredSignatures: y,
                numReadonlySignedAccounts: S,
                numReadonlyUnsignedAccounts: m
            },
            accountKeys: O,
            recentBlockhash: t,
            instructions: j
        })
    }
    _compile() {
        const t = this.compileMessage(),
            e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
        return this.signatures.length === e.length && this.signatures.every((o, i) => e[i].equals(o.publicKey)) || (this.signatures = e.map(r => ({
            signature: null,
            publicKey: r
        }))), t
    }
    serializeMessage() {
        return this._compile().serialize()
    }
    async getEstimatedFee(t) {
        return (await t.getFeeForMessage(this.compileMessage())).value
    }
    setSigners(...t) {
        if (t.length === 0) throw new Error("No signers");
        const e = new Set;
        this.signatures = t.filter(r => {
            const o = r.toString();
            return e.has(o) ? !1 : (e.add(o), !0)
        }).map(r => ({
            signature: null,
            publicKey: r
        }))
    }
    sign(...t) {
        if (t.length === 0) throw new Error("No signers");
        const e = new Set,
            r = [];
        for (const i of t) {
            const s = i.publicKey.toString();
            e.has(s) || (e.add(s), r.push(i))
        }
        this.signatures = r.map(i => ({
            signature: null,
            publicKey: i.publicKey
        }));
        const o = this._compile();
        this._partialSign(o, ...r)
    }
    partialSign(...t) {
        if (t.length === 0) throw new Error("No signers");
        const e = new Set,
            r = [];
        for (const i of t) {
            const s = i.publicKey.toString();
            e.has(s) || (e.add(s), r.push(i))
        }
        const o = this._compile();
        this._partialSign(o, ...r)
    }
    _partialSign(t, ...e) {
        const r = t.serialize();
        e.forEach(o => {
            const i = As(r, o.secretKey);
            this._addSignature(o.publicKey, ue(i))
        })
    }
    addSignature(t, e) {
        this._compile(), this._addSignature(t, e)
    }
    _addSignature(t, e) {
        jt(e.length === 64);
        const r = this.signatures.findIndex(o => t.equals(o.publicKey));
        if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
        this.signatures[r].signature = St.from(e)
    }
    verifySignatures(t = !0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), t)
    }
    _getMessageSignednessErrors(t, e) {
        const r = {};
        for (const {
                signature: o,
                publicKey: i
            } of this.signatures) o === null ? e && (r.missing || (r.missing = [])).push(i) : Xu(o, t, i.toBytes()) || (r.invalid || (r.invalid = [])).push(i);
        return r.invalid || r.missing ? r : void 0
    }
    serialize(t) {
        const {
            requireAllSignatures: e,
            verifySignatures: r
        } = Object.assign({
            requireAllSignatures: !0,
            verifySignatures: !0
        }, t), o = this.serializeMessage();
        if (r) {
            const i = this._getMessageSignednessErrors(o, e);
            if (i) {
                let s = "Signature verification failed.";
                throw i.invalid && (s += `
Invalid signature for public key${i.invalid.length===1?"":"(s)"} [\`${i.invalid.map(f=>f.toBase58()).join("`, `")}\`].`), i.missing && (s += `
Missing signature for public key${i.missing.length===1?"":"(s)"} [\`${i.missing.map(f=>f.toBase58()).join("`, `")}\`].`), new Error(s)
            }
        }
        return this._serialize(o)
    }
    _serialize(t) {
        const {
            signatures: e
        } = this, r = [];
        Ie(r, e.length);
        const o = r.length + e.length * 64 + t.length,
            i = St.alloc(o);
        return jt(e.length < 256), St.from(r).copy(i, 0), e.forEach(({
            signature: s
        }, f) => {
            s !== null && (jt(s.length === 64, "signature has invalid length"), St.from(s).copy(i, r.length + f * 64))
        }), t.copy(i, r.length + e.length * 64), jt(i.length <= vr, `Transaction too large: ${i.length} > ${vr}`), i
    }
    get keys() {
        return jt(this.instructions.length === 1), this.instructions[0].keys.map(t => t.pubkey)
    }
    get programId() {
        return jt(this.instructions.length === 1), this.instructions[0].programId
    }
    get data() {
        return jt(this.instructions.length === 1), this.instructions[0].data
    }
    static from(t) {
        let e = [...t];
        const r = _e(e);
        let o = [];
        for (let i = 0; i < r; i++) {
            const s = Ae(e, 0, cn);
            o.push(he.encode(St.from(s)))
        }
        return Ge.populate(Ve.from(e), o)
    }
    static populate(t, e = []) {
        const r = new Ge;
        return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), e.forEach((o, i) => {
            const s = {
                signature: o == he.encode(sh) ? null : he.decode(o),
                publicKey: t.accountKeys[i]
            };
            r.signatures.push(s)
        }), t.instructions.forEach(o => {
            const i = o.accounts.map(s => {
                const f = t.accountKeys[s];
                return {
                    pubkey: f,
                    isSigner: r.signatures.some(y => y.publicKey.toString() === f.toString()) || t.isAccountSigner(s),
                    isWritable: t.isAccountWritable(s)
                }
            });
            r.instructions.push(new Le({
                keys: i,
                programId: t.accountKeys[o.programIdIndex],
                data: he.decode(o.data)
            }))
        }), r._message = t, r._json = r.toJSON(), r
    }
}
class Cs {
    get version() {
        return this.message.version
    }
    constructor(t, e) {
        if (this.signatures = void 0, this.message = void 0, e !== void 0) jt(e.length === t.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = e;
        else {
            const r = [];
            for (let o = 0; o < t.header.numRequiredSignatures; o++) r.push(new Uint8Array(cn));
            this.signatures = r
        }
        this.message = t
    }
    serialize() {
        const t = this.message.serialize(),
            e = Array();
        Ie(e, this.signatures.length);
        const r = P.struct([P.blob(e.length, "encodedSignaturesLength"), P.seq(eh(), this.signatures.length, "signatures"), P.blob(t.length, "serializedMessage")]),
            o = new Uint8Array(2048),
            i = r.encode({
                encodedSignaturesLength: new Uint8Array(e),
                signatures: this.signatures,
                serializedMessage: t
            }, o);
        return o.slice(0, i)
    }
    static deserialize(t) {
        let e = [...t];
        const r = [],
            o = _e(e);
        for (let s = 0; s < o; s++) r.push(new Uint8Array(Ae(e, 0, cn)));
        const i = Us.deserialize(new Uint8Array(e));
        return new Cs(i, r)
    }
    sign(t) {
        const e = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        for (const o of t) {
            const i = r.findIndex(s => s.equals(o.publicKey));
            jt(i >= 0, `Cannot sign with non signer key ${o.publicKey.toBase58()}`), this.signatures[i] = As(e, o.secretKey)
        }
    }
    addSignature(t, e) {
        jt(e.byteLength === 64, "Signature must be 64 bytes long");
        const o = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(i => i.equals(t));
        jt(o >= 0, `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`), this.signatures[o] = e
    }
}
const ah = 160,
    ch = 64,
    uh = ah / ch,
    hh = 1e3 / uh;
new mt("SysvarC1ock11111111111111111111111111111111");
new mt("SysvarEpochSchedu1e111111111111111111111111");
new mt("Sysvar1nstructions1111111111111111111111111");
const pi = new mt("SysvarRecentB1ockHashes11111111111111111111"),
    Io = new mt("SysvarRent111111111111111111111111111111111");
new mt("SysvarRewards111111111111111111111111111111");
new mt("SysvarS1otHashes111111111111111111111111111");
new mt("SysvarS1otHistory11111111111111111111111111");
new mt("SysvarStakeHistory1111111111111111111111111");
class Ao extends Error {
    constructor({
        action: t,
        signature: e,
        transactionMessage: r,
        logs: o
    }) {
        const i = o ? `Logs: 
${JSON.stringify(o.slice(-10),null,2)}. ` : "",
            s = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
        let f;
        switch (t) {
            case "send":
                f = `Transaction ${e} resulted in an error. 
${r}. ` + i + s;
                break;
            case "simulate":
                f = `Simulation failed. 
Message: ${r}. 
` + i + s;
                break;
            default:
                f = `Unknown action '${(y=>y)(t)}'`
        }
        super(f), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = e, this.transactionMessage = r, this.transactionLogs = o || void 0
    }
    get transactionError() {
        return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
        }
    }
    get logs() {
        const t = this.transactionLogs;
        if (!(t != null && typeof t == "object" && "then" in t)) return t
    }
    async getLogs(t) {
        return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((e, r) => {
            t.getTransaction(this.signature).then(o => {
                if (o && o.meta && o.meta.logMessages) {
                    const i = o.meta.logMessages;
                    this.transactionLogs = i, e(i)
                } else r(new Error("Log messages not found"))
            }).catch(r)
        })), await this.transactionLogs
    }
}
class dt extends Error {
    constructor({
        code: t,
        message: e,
        data: r
    }, o) {
        super(o != null ? `${o}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = r, this.name = "SolanaJSONRPCError"
    }
}

function yr(n) {
    return new Promise(t => setTimeout(t, n))
}

function Re(n, t) {
    const e = n.layout.span >= 0 ? n.layout.span : Ts(n, t),
        r = St.alloc(e),
        o = Object.assign({
            instruction: n.index
        }, t);
    return n.layout.encode(o, r), r
}
const lh = P.nu64("lamportsPerSignature"),
    Ns = P.struct([P.u32("version"), P.u32("state"), Rt("authorizedPubkey"), Rt("nonce"), P.struct([lh], "feeCalculator")]),
    ko = Ns.span;
class zi {
    constructor(t) {
        this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator
    }
    static fromAccountData(t) {
        const e = Ns.decode(ue(t), 0);
        return new zi({
            authorizedPubkey: new mt(e.authorizedPubkey),
            nonce: new mt(e.nonce).toString(),
            feeCalculator: e.feeCalculator
        })
    }
}

function _r(n) {
    const t = P.blob(8, n),
        e = t.decode.bind(t),
        r = t.encode.bind(t),
        o = t,
        i = gu();
    return o.decode = (s, f) => {
        const y = e(s, f);
        return i.decode(y)
    }, o.encode = (s, f, y) => {
        const S = i.encode(s);
        return r(S, f, y)
    }, o
}
const Me = Object.freeze({
    Create: {
        index: 0,
        layout: P.struct([P.u32("instruction"), P.ns64("lamports"), P.ns64("space"), Rt("programId")])
    },
    Assign: {
        index: 1,
        layout: P.struct([P.u32("instruction"), Rt("programId")])
    },
    Transfer: {
        index: 2,
        layout: P.struct([P.u32("instruction"), _r("lamports")])
    },
    CreateWithSeed: {
        index: 3,
        layout: P.struct([P.u32("instruction"), Rt("base"), wr("seed"), P.ns64("lamports"), P.ns64("space"), Rt("programId")])
    },
    AdvanceNonceAccount: {
        index: 4,
        layout: P.struct([P.u32("instruction")])
    },
    WithdrawNonceAccount: {
        index: 5,
        layout: P.struct([P.u32("instruction"), P.ns64("lamports")])
    },
    InitializeNonceAccount: {
        index: 6,
        layout: P.struct([P.u32("instruction"), Rt("authorized")])
    },
    AuthorizeNonceAccount: {
        index: 7,
        layout: P.struct([P.u32("instruction"), Rt("authorized")])
    },
    Allocate: {
        index: 8,
        layout: P.struct([P.u32("instruction"), P.ns64("space")])
    },
    AllocateWithSeed: {
        index: 9,
        layout: P.struct([P.u32("instruction"), Rt("base"), wr("seed"), P.ns64("space"), Rt("programId")])
    },
    AssignWithSeed: {
        index: 10,
        layout: P.struct([P.u32("instruction"), Rt("base"), wr("seed"), Rt("programId")])
    },
    TransferWithSeed: {
        index: 11,
        layout: P.struct([P.u32("instruction"), _r("lamports"), wr("seed"), Rt("programId")])
    },
    UpgradeNonceAccount: {
        index: 12,
        layout: P.struct([P.u32("instruction")])
    }
});
class hn {
    constructor() {}
    static createAccount(t) {
        const e = Me.Create,
            r = Re(e, {
                lamports: t.lamports,
                space: t.space,
                programId: ue(t.programId.toBuffer())
            });
        return new Le({
            keys: [{
                pubkey: t.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: t.newAccountPubkey,
                isSigner: !0,
                isWritable: !0
            }],
            programId: this.programId,
            data: r
        })
    }
    static transfer(t) {
        let e, r;
        if ("basePubkey" in t) {
            const o = Me.TransferWithSeed;
            e = Re(o, {
                lamports: BigInt(t.lamports),
                seed: t.seed,
                programId: ue(t.programId.toBuffer())
            }), r = [{
                pubkey: t.fromPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.basePubkey,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: t.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        } else {
            const o = Me.Transfer;
            e = Re(o, {
                lamports: BigInt(t.lamports)
            }), r = [{
                pubkey: t.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: t.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        }
        return new Le({
            keys: r,
            programId: this.programId,
            data: e
        })
    }
    static assign(t) {
        let e, r;
        if ("basePubkey" in t) {
            const o = Me.AssignWithSeed;
            e = Re(o, {
                base: ue(t.basePubkey.toBuffer()),
                seed: t.seed,
                programId: ue(t.programId.toBuffer())
            }), r = [{
                pubkey: t.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const o = Me.Assign;
            e = Re(o, {
                programId: ue(t.programId.toBuffer())
            }), r = [{
                pubkey: t.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new Le({
            keys: r,
            programId: this.programId,
            data: e
        })
    }
    static createAccountWithSeed(t) {
        const e = Me.CreateWithSeed,
            r = Re(e, {
                base: ue(t.basePubkey.toBuffer()),
                seed: t.seed,
                lamports: t.lamports,
                space: t.space,
                programId: ue(t.programId.toBuffer())
            });
        let o = [{
            pubkey: t.fromPubkey,
            isSigner: !0,
            isWritable: !0
        }, {
            pubkey: t.newAccountPubkey,
            isSigner: !1,
            isWritable: !0
        }];
        return t.basePubkey.equals(t.fromPubkey) || o.push({
            pubkey: t.basePubkey,
            isSigner: !0,
            isWritable: !1
        }), new Le({
            keys: o,
            programId: this.programId,
            data: r
        })
    }
    static createNonceAccount(t) {
        const e = new Ge;
        "basePubkey" in t && "seed" in t ? e.add(hn.createAccountWithSeed({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            basePubkey: t.basePubkey,
            seed: t.seed,
            lamports: t.lamports,
            space: ko,
            programId: this.programId
        })) : e.add(hn.createAccount({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            lamports: t.lamports,
            space: ko,
            programId: this.programId
        }));
        const r = {
            noncePubkey: t.noncePubkey,
            authorizedPubkey: t.authorizedPubkey
        };
        return e.add(this.nonceInitialize(r)), e
    }
    static nonceInitialize(t) {
        const e = Me.InitializeNonceAccount,
            r = Re(e, {
                authorized: ue(t.authorizedPubkey.toBuffer())
            }),
            o = {
                keys: [{
                    pubkey: t.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: pi,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Io,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: r
            };
        return new Le(o)
    }
    static nonceAdvance(t) {
        const e = Me.AdvanceNonceAccount,
            r = Re(e),
            o = {
                keys: [{
                    pubkey: t.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: pi,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: t.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: r
            };
        return new Le(o)
    }
    static nonceWithdraw(t) {
        const e = Me.WithdrawNonceAccount,
            r = Re(e, {
                lamports: t.lamports
            });
        return new Le({
            keys: [{
                pubkey: t.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.toPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: pi,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Io,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: t.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: r
        })
    }
    static nonceAuthorize(t) {
        const e = Me.AuthorizeNonceAccount,
            r = Re(e, {
                authorized: ue(t.newAuthorizedPubkey.toBuffer())
            });
        return new Le({
            keys: [{
                pubkey: t.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: r
        })
    }
    static allocate(t) {
        let e, r;
        if ("basePubkey" in t) {
            const o = Me.AllocateWithSeed;
            e = Re(o, {
                base: ue(t.basePubkey.toBuffer()),
                seed: t.seed,
                space: t.space,
                programId: ue(t.programId.toBuffer())
            }), r = [{
                pubkey: t.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const o = Me.Allocate;
            e = Re(o, {
                space: t.space
            }), r = [{
                pubkey: t.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new Le({
            keys: r,
            programId: this.programId,
            data: e
        })
    }
}
hn.programId = new mt("11111111111111111111111111111111");
new mt("BPFLoader2111111111111111111111111111111111");

function fh(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var gi, Ro;

function dh() {
    if (Ro) return gi;
    Ro = 1;
    var n = Object.prototype.toString,
        t = Object.keys || function(r) {
            var o = [];
            for (var i in r) o.push(i);
            return o
        };

    function e(r, o) {
        var i, s, f, y, S, m, U;
        if (r === !0) return "true";
        if (r === !1) return "false";
        switch (typeof r) {
            case "object":
                if (r === null) return null;
                if (r.toJSON && typeof r.toJSON == "function") return e(r.toJSON(), o);
                if (U = n.call(r), U === "[object Array]") {
                    for (f = "[", s = r.length - 1, i = 0; i < s; i++) f += e(r[i], !0) + ",";
                    return s > -1 && (f += e(r[i], !0)), f + "]"
                } else if (U === "[object Object]") {
                    for (y = t(r).sort(), s = y.length, f = "", i = 0; i < s;) S = y[i], m = e(r[S], !1), m !== void 0 && (f && (f += ","), f += JSON.stringify(S) + ":" + m), i++;
                    return "{" + f + "}"
                } else return JSON.stringify(r);
            case "function":
            case "undefined":
                return o ? null : void 0;
            case "string":
                return JSON.stringify(r);
            default:
                return isFinite(r) ? r : null
        }
    }
    return gi = function(r) {
        var o = e(r, !1);
        if (o !== void 0) return "" + o
    }, gi
}
var ph = dh(),
    Mo = fh(ph);
const Mr = 32;

function yi(n) {
    let t = 0;
    for (; n > 1;) n /= 2, t++;
    return t
}

function gh(n) {
    return n === 0 ? 1 : (n--, n |= n >> 1, n |= n >> 2, n |= n >> 4, n |= n >> 8, n |= n >> 16, n |= n >> 32, n + 1)
}
class yh {
    constructor(t, e, r, o, i) {
        this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = r, this.firstNormalEpoch = o, this.firstNormalSlot = i
    }
    getEpoch(t) {
        return this.getEpochAndSlotIndex(t)[0]
    }
    getEpochAndSlotIndex(t) {
        if (t < this.firstNormalSlot) {
            const e = yi(gh(t + Mr + 1)) - yi(Mr) - 1,
                r = this.getSlotsInEpoch(e),
                o = t - (r - Mr);
            return [e, o]
        } else {
            const e = t - this.firstNormalSlot,
                r = Math.floor(e / this.slotsPerEpoch),
                o = this.firstNormalEpoch + r,
                i = e % this.slotsPerEpoch;
            return [o, i]
        }
    }
    getFirstSlotInEpoch(t) {
        return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * Mr : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
    }
    getLastSlotInEpoch(t) {
        return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1
    }
    getSlotsInEpoch(t) {
        return t < this.firstNormalEpoch ? Math.pow(2, t + yi(Mr)) : this.slotsPerEpoch
    }
}
var mh = globalThis.fetch;
class wh extends Yu {
    constructor(t, e, r) {
        const o = i => {
            const s = Vu(i, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...e
            });
            return "socket" in s ? this.underlyingSocket = s.socket : this.underlyingSocket = s, s
        };
        super(o, t, e, r), this.underlyingSocket = void 0
    }
    call(...t) {
        var r;
        const e = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return e === 1 ? super.call(...t) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"))
    }
    notify(...t) {
        var r;
        const e = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return e === 1 ? super.notify(...t) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"))
    }
}

function bh(n, t) {
    let e;
    try {
        e = n.layout.decode(t)
    } catch (r) {
        throw new Error("invalid instruction; " + r)
    }
    if (e.typeIndex !== n.index) throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${n.index}`);
    return e
}
const To = 56;
class Lo {
    constructor(t) {
        this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state
    }
    isActive() {
        const t = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === t
    }
    static deserialize(t) {
        const e = bh(vh, t),
            r = t.length - To;
        jt(r >= 0, "lookup table is invalid"), jt(r % 32 === 0, "lookup table is invalid");
        const o = r / 32,
            {
                addresses: i
            } = P.struct([P.seq(Rt(), o, "addresses")]).decode(t.slice(To));
        return {
            deactivationSlot: e.deactivationSlot,
            lastExtendedSlot: e.lastExtendedSlot,
            lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
            authority: e.authority.length !== 0 ? new mt(e.authority[0]) : void 0,
            addresses: i.map(s => new mt(s))
        }
    }
}
const vh = {
        index: 1,
        layout: P.struct([P.u32("typeIndex"), _r("deactivationSlot"), P.nu64("lastExtendedSlot"), P.u8("lastExtendedStartIndex"), P.u8(), P.seq(Rt(), P.offset(P.u8(), -1), "authority")])
    },
    Eh = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;

function xh(n) {
    const t = n.match(Eh);
    if (t == null) throw TypeError(`Failed to validate endpoint URL \`${n}\``);
    const [e, r, o, i] = t, s = n.startsWith("https:") ? "wss:" : "ws:", f = o == null ? null : parseInt(o.slice(1), 10), y = f == null ? "" : `:${f+1}`;
    return `${s}//${r}${y}${i}`
}
const Yt = Hr(Pi(mt), ct(), n => new mt(n)),
    Os = Fi([ct(), Zt("base64")]),
    Di = Hr(Pi(St), Os, n => St.from(n[0], "base64")),
    Bh = 30 * 1e3;

function Sh(n) {
    if (/^https?:/.test(n) === !1) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return n
}

function qt(n) {
    let t, e;
    if (typeof n == "string") t = n;
    else if (n) {
        const {
            commitment: r,
            ...o
        } = n;
        t = r, e = o
    }
    return {
        commitment: t,
        config: e
    }
}

function Uo(n) {
    return n.map(t => "memcmp" in t ? { ...t,
        memcmp: { ...t.memcmp,
            encoding: t.memcmp.encoding ? ? "base58"
        }
    } : t)
}

function Ps(n) {
    return Ee([at({
        jsonrpc: Zt("2.0"),
        id: ct(),
        result: n
    }), at({
        jsonrpc: Zt("2.0"),
        id: ct(),
        error: at({
            code: Ar(),
            message: ct(),
            data: gt(xu())
        })
    })])
}
const _h = Ps(Ar());

function It(n) {
    return Hr(Ps(n), _h, t => "error" in t ? t : { ...t,
        result: ut(t.result, n)
    })
}

function te(n) {
    return It(at({
        context: at({
            slot: Y()
        }),
        value: n
    }))
}

function _n(n) {
    return at({
        context: at({
            slot: Y()
        }),
        value: n
    })
}

function mi(n, t) {
    return n === 0 ? new Pr({
        header: t.header,
        staticAccountKeys: t.accountKeys.map(e => new mt(e)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map(e => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: he.decode(e.data)
        })),
        addressTableLookups: t.addressTableLookups
    }) : new Ve(t)
}
const Ih = at({
        foundation: Y(),
        foundationTerm: Y(),
        initial: Y(),
        taper: Y(),
        terminal: Y()
    }),
    Ah = It(ht(lt(at({
        epoch: Y(),
        effectiveSlot: Y(),
        amount: Y(),
        postBalance: Y(),
        commission: gt(lt(Y()))
    })))),
    kh = ht(at({
        slot: Y(),
        prioritizationFee: Y()
    })),
    Rh = at({
        total: Y(),
        validator: Y(),
        foundation: Y(),
        epoch: Y()
    }),
    Mh = at({
        epoch: Y(),
        slotIndex: Y(),
        slotsInEpoch: Y(),
        absoluteSlot: Y(),
        blockHeight: gt(Y()),
        transactionCount: gt(Y())
    }),
    Th = at({
        slotsPerEpoch: Y(),
        leaderScheduleSlotOffset: Y(),
        warmup: qe(),
        firstNormalEpoch: Y(),
        firstNormalSlot: Y()
    }),
    Lh = Es(ct(), ht(Y())),
    cr = lt(Ee([at({}), ct()])),
    Uh = at({
        err: cr
    }),
    Ch = Zt("receivedSignature"),
    Nh = at({
        "solana-core": ct(),
        "feature-set": gt(Y())
    }),
    Oh = at({
        program: ct(),
        programId: Yt,
        parsed: Ar()
    }),
    Ph = at({
        programId: Yt,
        accounts: ht(Yt),
        data: ct()
    }),
    Co = te(at({
        err: lt(Ee([at({}), ct()])),
        logs: lt(ht(ct())),
        accounts: gt(lt(ht(lt(at({
            executable: qe(),
            owner: ct(),
            lamports: Y(),
            data: ht(ct()),
            rentEpoch: gt(Y())
        }))))),
        unitsConsumed: gt(Y()),
        returnData: gt(lt(at({
            programId: ct(),
            data: Fi([ct(), Zt("base64")])
        }))),
        innerInstructions: gt(lt(ht(at({
            index: Y(),
            instructions: ht(Ee([Oh, Ph]))
        }))))
    })),
    Fh = te(at({
        byIdentity: Es(ct(), ht(Y())),
        range: at({
            firstSlot: Y(),
            lastSlot: Y()
        })
    }));

function qh(n, t, e, r, o, i) {
    const s = e || mh;
    let f;
    i != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let y;
    return r && (y = async (m, U) => {
        const H = await new Promise((O, j) => {
            try {
                r(m, U, (F, C) => O([F, C]))
            } catch (F) {
                j(F)
            }
        });
        return await s(...H)
    }), new Gu(async (m, U) => {
        const H = {
            method: "POST",
            body: m,
            agent: f,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, t || {}, ql)
        };
        try {
            let O = 5,
                j, F = 500;
            for (; y ? j = await y(n, H) : j = await s(n, H), !(j.status !== 429 || o === !0 || (O -= 1, O === 0));) console.error(`Server responded with ${j.status} ${j.statusText}.  Retrying after ${F}ms delay...`), await yr(F), F *= 2;
            const C = await j.text();
            j.ok ? U(null, C) : U(new Error(`${j.status} ${j.statusText}: ${C}`))
        } catch (O) {
            O instanceof Error && U(O)
        }
    }, {})
}

function zh(n) {
    return (t, e) => new Promise((r, o) => {
        n.request(t, e, (i, s) => {
            if (i) {
                o(i);
                return
            }
            r(s)
        })
    })
}

function Dh(n) {
    return t => new Promise((e, r) => {
        t.length === 0 && e([]);
        const o = t.map(i => n.request(i.methodName, i.args));
        n.request(o, (i, s) => {
            if (i) {
                r(i);
                return
            }
            e(s)
        })
    })
}
const $h = It(Ih),
    Hh = It(Rh),
    Kh = It(kh),
    Wh = It(Mh),
    Gh = It(Th),
    jh = It(Lh),
    Vh = It(Y()),
    Zh = te(at({
        total: Y(),
        circulating: Y(),
        nonCirculating: Y(),
        nonCirculatingAccounts: ht(Yt)
    })),
    xi = at({
        amount: ct(),
        uiAmount: lt(Y()),
        decimals: Y(),
        uiAmountString: gt(ct())
    }),
    Yh = te(ht(at({
        address: Yt,
        amount: ct(),
        uiAmount: lt(Y()),
        decimals: Y(),
        uiAmountString: gt(ct())
    }))),
    Xh = te(ht(at({
        pubkey: Yt,
        account: at({
            executable: qe(),
            owner: Yt,
            lamports: Y(),
            data: Di,
            rentEpoch: Y()
        })
    }))),
    Bi = at({
        program: ct(),
        parsed: Ar(),
        space: Y()
    }),
    Jh = te(ht(at({
        pubkey: Yt,
        account: at({
            executable: qe(),
            owner: Yt,
            lamports: Y(),
            data: Bi,
            rentEpoch: Y()
        })
    }))),
    Qh = te(ht(at({
        lamports: Y(),
        address: Yt
    }))),
    Fr = at({
        executable: qe(),
        owner: Yt,
        lamports: Y(),
        data: Di,
        rentEpoch: Y()
    }),
    tl = at({
        pubkey: Yt,
        account: Fr
    }),
    el = Hr(Ee([Pi(St), Bi]), Ee([Os, Bi]), n => Array.isArray(n) ? ut(n, Di) : n),
    Si = at({
        executable: qe(),
        owner: Yt,
        lamports: Y(),
        data: el,
        rentEpoch: Y()
    }),
    rl = at({
        pubkey: Yt,
        account: Si
    }),
    nl = at({
        state: Ee([Zt("active"), Zt("inactive"), Zt("activating"), Zt("deactivating")]),
        active: Y(),
        inactive: Y()
    }),
    il = It(ht(at({
        signature: ct(),
        slot: Y(),
        err: cr,
        memo: lt(ct()),
        blockTime: gt(lt(Y()))
    }))),
    ol = It(ht(at({
        signature: ct(),
        slot: Y(),
        err: cr,
        memo: lt(ct()),
        blockTime: gt(lt(Y()))
    }))),
    sl = at({
        subscription: Y(),
        result: _n(Fr)
    }),
    al = at({
        pubkey: Yt,
        account: Fr
    }),
    cl = at({
        subscription: Y(),
        result: _n(al)
    }),
    ul = at({
        parent: Y(),
        slot: Y(),
        root: Y()
    }),
    hl = at({
        subscription: Y(),
        result: ul
    }),
    ll = Ee([at({
        type: Ee([Zt("firstShredReceived"), Zt("completed"), Zt("optimisticConfirmation"), Zt("root")]),
        slot: Y(),
        timestamp: Y()
    }), at({
        type: Zt("createdBank"),
        parent: Y(),
        slot: Y(),
        timestamp: Y()
    }), at({
        type: Zt("frozen"),
        slot: Y(),
        timestamp: Y(),
        stats: at({
            numTransactionEntries: Y(),
            numSuccessfulTransactions: Y(),
            numFailedTransactions: Y(),
            maxTransactionsPerEntry: Y()
        })
    }), at({
        type: Zt("dead"),
        slot: Y(),
        timestamp: Y(),
        err: ct()
    })]),
    fl = at({
        subscription: Y(),
        result: ll
    }),
    dl = at({
        subscription: Y(),
        result: _n(Ee([Uh, Ch]))
    }),
    pl = at({
        subscription: Y(),
        result: Y()
    }),
    gl = at({
        pubkey: ct(),
        gossip: lt(ct()),
        tpu: lt(ct()),
        rpc: lt(ct()),
        version: lt(ct())
    }),
    No = at({
        votePubkey: ct(),
        nodePubkey: ct(),
        activatedStake: Y(),
        epochVoteAccount: qe(),
        epochCredits: ht(Fi([Y(), Y(), Y()])),
        commission: Y(),
        lastVote: Y(),
        rootSlot: lt(Y())
    }),
    yl = It(at({
        current: ht(No),
        delinquent: ht(No)
    })),
    ml = Ee([Zt("processed"), Zt("confirmed"), Zt("finalized")]),
    wl = at({
        slot: Y(),
        confirmations: lt(Y()),
        err: cr,
        confirmationStatus: gt(ml)
    }),
    bl = te(ht(lt(wl))),
    vl = It(Y()),
    Fs = at({
        accountKey: Yt,
        writableIndexes: ht(Y()),
        readonlyIndexes: ht(Y())
    }),
    $i = at({
        signatures: ht(ct()),
        message: at({
            accountKeys: ht(ct()),
            header: at({
                numRequiredSignatures: Y(),
                numReadonlySignedAccounts: Y(),
                numReadonlyUnsignedAccounts: Y()
            }),
            instructions: ht(at({
                accounts: ht(Y()),
                data: ct(),
                programIdIndex: Y()
            })),
            recentBlockhash: ct(),
            addressTableLookups: gt(ht(Fs))
        })
    }),
    qs = at({
        pubkey: Yt,
        signer: qe(),
        writable: qe(),
        source: gt(Ee([Zt("transaction"), Zt("lookupTable")]))
    }),
    zs = at({
        accountKeys: ht(qs),
        signatures: ht(ct())
    }),
    Ds = at({
        parsed: Ar(),
        program: ct(),
        programId: Yt
    }),
    $s = at({
        accounts: ht(Yt),
        data: ct(),
        programId: Yt
    }),
    El = Ee([$s, Ds]),
    xl = Ee([at({
        parsed: Ar(),
        program: ct(),
        programId: ct()
    }), at({
        accounts: ht(ct()),
        data: ct(),
        programId: ct()
    })]),
    Hs = Hr(El, xl, n => "accounts" in n ? ut(n, $s) : ut(n, Ds)),
    Ks = at({
        signatures: ht(ct()),
        message: at({
            accountKeys: ht(qs),
            instructions: ht(Hs),
            recentBlockhash: ct(),
            addressTableLookups: gt(lt(ht(Fs)))
        })
    }),
    ln = at({
        accountIndex: Y(),
        mint: ct(),
        owner: gt(ct()),
        programId: gt(ct()),
        uiTokenAmount: xi
    }),
    Ws = at({
        writable: ht(Yt),
        readonly: ht(Yt)
    }),
    In = at({
        err: cr,
        fee: Y(),
        innerInstructions: gt(lt(ht(at({
            index: Y(),
            instructions: ht(at({
                accounts: ht(Y()),
                data: ct(),
                programIdIndex: Y()
            }))
        })))),
        preBalances: ht(Y()),
        postBalances: ht(Y()),
        logMessages: gt(lt(ht(ct()))),
        preTokenBalances: gt(lt(ht(ln))),
        postTokenBalances: gt(lt(ht(ln))),
        loadedAddresses: gt(Ws),
        computeUnitsConsumed: gt(Y()),
        costUnits: gt(Y())
    }),
    Hi = at({
        err: cr,
        fee: Y(),
        innerInstructions: gt(lt(ht(at({
            index: Y(),
            instructions: ht(Hs)
        })))),
        preBalances: ht(Y()),
        postBalances: ht(Y()),
        logMessages: gt(lt(ht(ct()))),
        preTokenBalances: gt(lt(ht(ln))),
        postTokenBalances: gt(lt(ht(ln))),
        loadedAddresses: gt(Ws),
        computeUnitsConsumed: gt(Y()),
        costUnits: gt(Y())
    }),
    kr = Ee([Zt(0), Zt("legacy")]),
    ur = at({
        pubkey: ct(),
        lamports: Y(),
        postBalance: lt(Y()),
        rewardType: lt(ct()),
        commission: gt(lt(Y()))
    }),
    Bl = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        transactions: ht(at({
            transaction: $i,
            meta: lt(In),
            version: gt(kr)
        })),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    Sl = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    _l = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        transactions: ht(at({
            transaction: zs,
            meta: lt(In),
            version: gt(kr)
        })),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    Il = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        transactions: ht(at({
            transaction: Ks,
            meta: lt(Hi),
            version: gt(kr)
        })),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    Al = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        transactions: ht(at({
            transaction: zs,
            meta: lt(Hi),
            version: gt(kr)
        })),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    kl = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        rewards: gt(ht(ur)),
        blockTime: lt(Y()),
        blockHeight: lt(Y())
    }))),
    Rl = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        transactions: ht(at({
            transaction: $i,
            meta: lt(In)
        })),
        rewards: gt(ht(ur)),
        blockTime: lt(Y())
    }))),
    Oo = It(lt(at({
        blockhash: ct(),
        previousBlockhash: ct(),
        parentSlot: Y(),
        signatures: ht(ct()),
        blockTime: lt(Y())
    }))),
    wi = It(lt(at({
        slot: Y(),
        meta: lt(In),
        blockTime: gt(lt(Y())),
        transaction: $i,
        version: gt(kr)
    }))),
    Xr = It(lt(at({
        slot: Y(),
        transaction: Ks,
        meta: lt(Hi),
        blockTime: gt(lt(Y())),
        version: gt(kr)
    }))),
    Ml = te(at({
        blockhash: ct(),
        lastValidBlockHeight: Y()
    })),
    Tl = te(qe()),
    Ll = at({
        slot: Y(),
        numTransactions: Y(),
        numSlots: Y(),
        samplePeriodSecs: Y()
    }),
    Ul = It(ht(Ll)),
    Cl = te(lt(at({
        feeCalculator: at({
            lamportsPerSignature: Y()
        })
    }))),
    Nl = It(ct()),
    Ol = It(ct()),
    Pl = at({
        err: cr,
        logs: ht(ct()),
        signature: ct()
    }),
    Fl = at({
        result: _n(Pl),
        subscription: Y()
    }),
    ql = {
        "solana-client": "js/1.0.0-maintenance"
    };
class Yl {
    constructor(t, e) {
        this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
            const S = {};
            return async m => {
                const {
                    commitment: U,
                    config: H
                } = qt(m), O = this._buildArgs([], U, void 0, H), j = Mo(O);
                return S[j] = S[j] ? ? (async () => {
                    try {
                        const F = await this._rpcRequest("getBlockHeight", O),
                            C = ut(F, It(Y()));
                        if ("error" in C) throw new dt(C.error, "failed to get block height information");
                        return C.result
                    } finally {
                        delete S[j]
                    }
                })(), await S[j]
            }
        })();
        let r, o, i, s, f, y;
        e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, r = e.wsEndpoint, o = e.httpHeaders, i = e.fetch, s = e.fetchMiddleware, f = e.disableRetryOnRateLimit, y = e.httpAgent), this._rpcEndpoint = Sh(t), this._rpcWsEndpoint = r || xh(t), this._rpcClient = qh(t, o, i, s, f, y), this._rpcRequest = zh(this._rpcClient), this._rpcBatchRequest = Dh(this._rpcClient), this._rpcWebSocket = new wh(this._rpcWsEndpoint, {
            autoconnect: !1,
            max_reconnects: 1 / 0
        }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
    }
    get commitment() {
        return this._commitment
    }
    get rpcEndpoint() {
        return this._rpcEndpoint
    }
    async getBalanceAndContext(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgs([t.toBase58()], r, void 0, o), s = await this._rpcRequest("getBalance", i), f = ut(s, te(Y()));
        if ("error" in f) throw new dt(f.error, `failed to get balance for ${t.toBase58()}`);
        return f.result
    }
    async getBalance(t, e) {
        return await this.getBalanceAndContext(t, e).then(r => r.value).catch(r => {
            throw new Error("failed to get balance of account " + t.toBase58() + ": " + r)
        })
    }
    async getBlockTime(t) {
        const e = await this._rpcRequest("getBlockTime", [t]),
            r = ut(e, It(lt(Y())));
        if ("error" in r) throw new dt(r.error, `failed to get block time for slot ${t}`);
        return r.result
    }
    async getMinimumLedgerSlot() {
        const t = await this._rpcRequest("minimumLedgerSlot", []),
            e = ut(t, It(Y()));
        if ("error" in e) throw new dt(e.error, "failed to get minimum ledger slot");
        return e.result
    }
    async getFirstAvailableBlock() {
        const t = await this._rpcRequest("getFirstAvailableBlock", []),
            e = ut(t, Vh);
        if ("error" in e) throw new dt(e.error, "failed to get first available block");
        return e.result
    }
    async getSupply(t) {
        let e = {};
        typeof t == "string" ? e = {
            commitment: t
        } : t ? e = { ...t,
            commitment: t && t.commitment || this.commitment
        } : e = {
            commitment: this.commitment
        };
        const r = await this._rpcRequest("getSupply", [e]),
            o = ut(r, Zh);
        if ("error" in o) throw new dt(o.error, "failed to get supply");
        return o.result
    }
    async getTokenSupply(t, e) {
        const r = this._buildArgs([t.toBase58()], e),
            o = await this._rpcRequest("getTokenSupply", r),
            i = ut(o, te(xi));
        if ("error" in i) throw new dt(i.error, "failed to get token supply");
        return i.result
    }
    async getTokenAccountBalance(t, e) {
        const r = this._buildArgs([t.toBase58()], e),
            o = await this._rpcRequest("getTokenAccountBalance", r),
            i = ut(o, te(xi));
        if ("error" in i) throw new dt(i.error, "failed to get token account balance");
        return i.result
    }
    async getTokenAccountsByOwner(t, e, r) {
        const {
            commitment: o,
            config: i
        } = qt(r);
        let s = [t.toBase58()];
        "mint" in e ? s.push({
            mint: e.mint.toBase58()
        }) : s.push({
            programId: e.programId.toBase58()
        });
        const f = this._buildArgs(s, o, "base64", i),
            y = await this._rpcRequest("getTokenAccountsByOwner", f),
            S = ut(y, Xh);
        if ("error" in S) throw new dt(S.error, `failed to get token accounts owned by account ${t.toBase58()}`);
        return S.result
    }
    async getParsedTokenAccountsByOwner(t, e, r) {
        let o = [t.toBase58()];
        "mint" in e ? o.push({
            mint: e.mint.toBase58()
        }) : o.push({
            programId: e.programId.toBase58()
        });
        const i = this._buildArgs(o, r, "jsonParsed"),
            s = await this._rpcRequest("getTokenAccountsByOwner", i),
            f = ut(s, Jh);
        if ("error" in f) throw new dt(f.error, `failed to get token accounts owned by account ${t.toBase58()}`);
        return f.result
    }
    async getLargestAccounts(t) {
        const e = { ...t,
                commitment: t && t.commitment || this.commitment
            },
            r = e.filter || e.commitment ? [e] : [],
            o = await this._rpcRequest("getLargestAccounts", r),
            i = ut(o, Qh);
        if ("error" in i) throw new dt(i.error, "failed to get largest accounts");
        return i.result
    }
    async getTokenLargestAccounts(t, e) {
        const r = this._buildArgs([t.toBase58()], e),
            o = await this._rpcRequest("getTokenLargestAccounts", r),
            i = ut(o, Yh);
        if ("error" in i) throw new dt(i.error, "failed to get token largest accounts");
        return i.result
    }
    async getAccountInfoAndContext(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgs([t.toBase58()], r, "base64", o), s = await this._rpcRequest("getAccountInfo", i), f = ut(s, te(lt(Fr)));
        if ("error" in f) throw new dt(f.error, `failed to get info about account ${t.toBase58()}`);
        return f.result
    }
    async getParsedAccountInfo(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgs([t.toBase58()], r, "jsonParsed", o), s = await this._rpcRequest("getAccountInfo", i), f = ut(s, te(lt(Si)));
        if ("error" in f) throw new dt(f.error, `failed to get info about account ${t.toBase58()}`);
        return f.result
    }
    async getAccountInfo(t, e) {
        try {
            return (await this.getAccountInfoAndContext(t, e)).value
        } catch (r) {
            throw new Error("failed to get info about account " + t.toBase58() + ": " + r)
        }
    }
    async getMultipleParsedAccounts(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = t.map(S => S.toBase58()), s = this._buildArgs([i], r, "jsonParsed", o), f = await this._rpcRequest("getMultipleAccounts", s), y = ut(f, te(ht(lt(Si))));
        if ("error" in y) throw new dt(y.error, `failed to get info for accounts ${i}`);
        return y.result
    }
    async getMultipleAccountsInfoAndContext(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = t.map(S => S.toBase58()), s = this._buildArgs([i], r, "base64", o), f = await this._rpcRequest("getMultipleAccounts", s), y = ut(f, te(ht(lt(Fr))));
        if ("error" in y) throw new dt(y.error, `failed to get info for accounts ${i}`);
        return y.result
    }
    async getMultipleAccountsInfo(t, e) {
        return (await this.getMultipleAccountsInfoAndContext(t, e)).value
    }
    async getStakeActivation(t, e, r) {
        const {
            commitment: o,
            config: i
        } = qt(e), s = this._buildArgs([t.toBase58()], o, void 0, { ...i,
            epoch: r ? ? (i == null ? void 0 : i.epoch)
        }), f = await this._rpcRequest("getStakeActivation", s), y = ut(f, It(nl));
        if ("error" in y) throw new dt(y.error, `failed to get Stake Activation ${t.toBase58()}`);
        return y.result
    }
    async getProgramAccounts(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), {
            encoding: i,
            ...s
        } = o || {}, f = this._buildArgs([t.toBase58()], r, i || "base64", { ...s,
            ...s.filters ? {
                filters: Uo(s.filters)
            } : null
        }), y = await this._rpcRequest("getProgramAccounts", f), S = ht(tl), m = s.withContext === !0 ? ut(y, te(S)) : ut(y, It(S));
        if ("error" in m) throw new dt(m.error, `failed to get accounts owned by program ${t.toBase58()}`);
        return m.result
    }
    async getParsedProgramAccounts(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgs([t.toBase58()], r, "jsonParsed", o), s = await this._rpcRequest("getProgramAccounts", i), f = ut(s, It(ht(rl)));
        if ("error" in f) throw new dt(f.error, `failed to get accounts owned by program ${t.toBase58()}`);
        return f.result
    }
    async confirmTransaction(t, e) {
        var i;
        let r;
        if (typeof t == "string") r = t;
        else {
            const s = t;
            if ((i = s.abortSignal) != null && i.aborted) return Promise.reject(s.abortSignal.reason);
            r = s.signature
        }
        let o;
        try {
            o = he.decode(r)
        } catch {
            throw new Error("signature must be base58 encoded: " + r)
        }
        return jt(o.length === 64, "signature has invalid length"), typeof t == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: e || this.commitment,
            signature: r
        }) : "lastValidBlockHeight" in t ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: e || this.commitment,
            strategy: t
        }) : await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: e || this.commitment,
            strategy: t
        })
    }
    getCancellationPromise(t) {
        return new Promise((e, r) => {
            t != null && (t.aborted ? r(t.reason) : t.addEventListener("abort", () => {
                r(t.reason)
            }))
        })
    }
    getTransactionConfirmationPromise({
        commitment: t,
        signature: e
    }) {
        let r, o, i = !1;
        const s = new Promise((y, S) => {
            try {
                r = this.onSignature(e, (U, H) => {
                    r = void 0;
                    const O = {
                        context: H,
                        value: U
                    };
                    y({
                        __type: Qe.PROCESSED,
                        response: O
                    })
                }, t);
                const m = new Promise(U => {
                    r == null ? U() : o = this._onSubscriptionStateChange(r, H => {
                        H === "subscribed" && U()
                    })
                });
                (async () => {
                    if (await m, i) return;
                    const U = await this.getSignatureStatus(e);
                    if (i || U == null) return;
                    const {
                        context: H,
                        value: O
                    } = U;
                    if (O != null)
                        if (O != null && O.err) S(O.err);
                        else {
                            switch (t) {
                                case "confirmed":
                                case "single":
                                case "singleGossip":
                                    {
                                        if (O.confirmationStatus === "processed") return;
                                        break
                                    }
                                case "finalized":
                                case "max":
                                case "root":
                                    {
                                        if (O.confirmationStatus === "processed" || O.confirmationStatus === "confirmed") return;
                                        break
                                    }
                                case "processed":
                                case "recent":
                            }
                            i = !0, y({
                                __type: Qe.PROCESSED,
                                response: {
                                    context: H,
                                    value: O
                                }
                            })
                        }
                })()
            } catch (m) {
                S(m)
            }
        });
        return {
            abortConfirmation: () => {
                o && (o(), o = void 0), r != null && (this.removeSignatureListener(r), r = void 0)
            },
            confirmationPromise: s
        }
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: t,
        strategy: {
            abortSignal: e,
            lastValidBlockHeight: r,
            signature: o
        }
    }) {
        let i = !1;
        const s = new Promise(U => {
                const H = async () => {
                    try {
                        return await this.getBlockHeight(t)
                    } catch {
                        return -1
                    }
                };
                (async () => {
                    let O = await H();
                    if (!i) {
                        for (; O <= r;)
                            if (await yr(1e3), i || (O = await H(), i)) return;
                        U({
                            __type: Qe.BLOCKHEIGHT_EXCEEDED
                        })
                    }
                })()
            }),
            {
                abortConfirmation: f,
                confirmationPromise: y
            } = this.getTransactionConfirmationPromise({
                commitment: t,
                signature: o
            }),
            S = this.getCancellationPromise(e);
        let m;
        try {
            const U = await Promise.race([S, y, s]);
            if (U.__type === Qe.PROCESSED) m = U.response;
            else throw new Rs(o)
        } finally {
            i = !0, f()
        }
        return m
    }
    async confirmTransactionUsingDurableNonceStrategy({
        commitment: t,
        strategy: {
            abortSignal: e,
            minContextSlot: r,
            nonceAccountPubkey: o,
            nonceValue: i,
            signature: s
        }
    }) {
        let f = !1;
        const y = new Promise(O => {
                let j = i,
                    F = null;
                const C = async () => {
                    try {
                        const {
                            context: Q,
                            value: V
                        } = await this.getNonceAndContext(o, {
                            commitment: t,
                            minContextSlot: r
                        });
                        return F = Q.slot, V == null ? void 0 : V.nonce
                    } catch {
                        return j
                    }
                };
                (async () => {
                    if (j = await C(), !f)
                        for (;;) {
                            if (i !== j) {
                                O({
                                    __type: Qe.NONCE_INVALID,
                                    slotInWhichNonceDidAdvance: F
                                });
                                return
                            }
                            if (await yr(2e3), f || (j = await C(), f)) return
                        }
                })()
            }),
            {
                abortConfirmation: S,
                confirmationPromise: m
            } = this.getTransactionConfirmationPromise({
                commitment: t,
                signature: s
            }),
            U = this.getCancellationPromise(e);
        let H;
        try {
            const O = await Promise.race([U, m, y]);
            if (O.__type === Qe.PROCESSED) H = O.response;
            else {
                let j;
                for (;;) {
                    const F = await this.getSignatureStatus(s);
                    if (F == null) break;
                    if (F.context.slot < (O.slotInWhichNonceDidAdvance ? ? r)) {
                        await yr(400);
                        continue
                    }
                    j = F;
                    break
                }
                if (j != null && j.value) {
                    const F = t || "finalized",
                        {
                            confirmationStatus: C
                        } = j.value;
                    switch (F) {
                        case "processed":
                        case "recent":
                            if (C !== "processed" && C !== "confirmed" && C !== "finalized") throw new Tr(s);
                            break;
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                            if (C !== "confirmed" && C !== "finalized") throw new Tr(s);
                            break;
                        case "finalized":
                        case "max":
                        case "root":
                            if (C !== "finalized") throw new Tr(s);
                            break;
                        default:
                    }
                    H = {
                        context: j.context,
                        value: {
                            err: j.value.err
                        }
                    }
                } else throw new Tr(s)
            }
        } finally {
            f = !0, S()
        }
        return H
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: t,
        signature: e
    }) {
        let r;
        const o = new Promise(y => {
                let S = this._confirmTransactionInitialTimeout || 6e4;
                switch (t) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip":
                        {
                            S = this._confirmTransactionInitialTimeout || 3e4;
                            break
                        }
                }
                r = setTimeout(() => y({
                    __type: Qe.TIMED_OUT,
                    timeoutMs: S
                }), S)
            }),
            {
                abortConfirmation: i,
                confirmationPromise: s
            } = this.getTransactionConfirmationPromise({
                commitment: t,
                signature: e
            });
        let f;
        try {
            const y = await Promise.race([s, o]);
            if (y.__type === Qe.PROCESSED) f = y.response;
            else throw new Ms(e, y.timeoutMs / 1e3)
        } finally {
            clearTimeout(r), i()
        }
        return f
    }
    async getClusterNodes() {
        const t = await this._rpcRequest("getClusterNodes", []),
            e = ut(t, It(ht(gl)));
        if ("error" in e) throw new dt(e.error, "failed to get cluster nodes");
        return e.result
    }
    async getVoteAccounts(t) {
        const e = this._buildArgs([], t),
            r = await this._rpcRequest("getVoteAccounts", e),
            o = ut(r, yl);
        if ("error" in o) throw new dt(o.error, "failed to get vote accounts");
        return o.result
    }
    async getSlot(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, void 0, r), i = await this._rpcRequest("getSlot", o), s = ut(i, It(Y()));
        if ("error" in s) throw new dt(s.error, "failed to get slot");
        return s.result
    }
    async getSlotLeader(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, void 0, r), i = await this._rpcRequest("getSlotLeader", o), s = ut(i, It(ct()));
        if ("error" in s) throw new dt(s.error, "failed to get slot leader");
        return s.result
    }
    async getSlotLeaders(t, e) {
        const r = [t, e],
            o = await this._rpcRequest("getSlotLeaders", r),
            i = ut(o, It(ht(Yt)));
        if ("error" in i) throw new dt(i.error, "failed to get slot leaders");
        return i.result
    }
    async getSignatureStatus(t, e) {
        const {
            context: r,
            value: o
        } = await this.getSignatureStatuses([t], e);
        jt(o.length === 1);
        const i = o[0];
        return {
            context: r,
            value: i
        }
    }
    async getSignatureStatuses(t, e) {
        const r = [t];
        e && r.push(e);
        const o = await this._rpcRequest("getSignatureStatuses", r),
            i = ut(o, bl);
        if ("error" in i) throw new dt(i.error, "failed to get signature status");
        return i.result
    }
    async getTransactionCount(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, void 0, r), i = await this._rpcRequest("getTransactionCount", o), s = ut(i, It(Y()));
        if ("error" in s) throw new dt(s.error, "failed to get transaction count");
        return s.result
    }
    async getTotalSupply(t) {
        return (await this.getSupply({
            commitment: t,
            excludeNonCirculatingAccountsList: !0
        })).value.total
    }
    async getInflationGovernor(t) {
        const e = this._buildArgs([], t),
            r = await this._rpcRequest("getInflationGovernor", e),
            o = ut(r, $h);
        if ("error" in o) throw new dt(o.error, "failed to get inflation");
        return o.result
    }
    async getInflationReward(t, e, r) {
        const {
            commitment: o,
            config: i
        } = qt(r), s = this._buildArgs([t.map(S => S.toBase58())], o, void 0, { ...i,
            epoch: e ? ? (i == null ? void 0 : i.epoch)
        }), f = await this._rpcRequest("getInflationReward", s), y = ut(f, Ah);
        if ("error" in y) throw new dt(y.error, "failed to get inflation reward");
        return y.result
    }
    async getInflationRate() {
        const t = await this._rpcRequest("getInflationRate", []),
            e = ut(t, Hh);
        if ("error" in e) throw new dt(e.error, "failed to get inflation rate");
        return e.result
    }
    async getEpochInfo(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, void 0, r), i = await this._rpcRequest("getEpochInfo", o), s = ut(i, Wh);
        if ("error" in s) throw new dt(s.error, "failed to get epoch info");
        return s.result
    }
    async getEpochSchedule() {
        const t = await this._rpcRequest("getEpochSchedule", []),
            e = ut(t, Gh);
        if ("error" in e) throw new dt(e.error, "failed to get epoch schedule");
        const r = e.result;
        return new yh(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
    }
    async getLeaderSchedule() {
        const t = await this._rpcRequest("getLeaderSchedule", []),
            e = ut(t, jh);
        if ("error" in e) throw new dt(e.error, "failed to get leader schedule");
        return e.result
    }
    async getMinimumBalanceForRentExemption(t, e) {
        const r = this._buildArgs([t], e),
            o = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
            i = ut(o, vl);
        return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result
    }
    async getRecentBlockhashAndContext(t) {
        const {
            context: e,
            value: {
                blockhash: r
            }
        } = await this.getLatestBlockhashAndContext(t);
        return {
            context: e,
            value: {
                blockhash: r,
                feeCalculator: {
                    get lamportsPerSignature() {
                        throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")
                    },
                    toJSON() {
                        return {}
                    }
                }
            }
        }
    }
    async getRecentPerformanceSamples(t) {
        const e = await this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []),
            r = ut(e, Ul);
        if ("error" in r) throw new dt(r.error, "failed to get recent performance samples");
        return r.result
    }
    async getFeeCalculatorForBlockhash(t, e) {
        const r = this._buildArgs([t], e),
            o = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
            i = ut(o, Cl);
        if ("error" in i) throw new dt(i.error, "failed to get fee calculator");
        const {
            context: s,
            value: f
        } = i.result;
        return {
            context: s,
            value: f !== null ? f.feeCalculator : null
        }
    }
    async getFeeForMessage(t, e) {
        const r = ue(t.serialize()).toString("base64"),
            o = this._buildArgs([r], e),
            i = await this._rpcRequest("getFeeForMessage", o),
            s = ut(i, te(lt(Y())));
        if ("error" in s) throw new dt(s.error, "failed to get fee for message");
        if (s.result === null) throw new Error("invalid blockhash");
        return s.result
    }
    async getRecentPrioritizationFees(t) {
        var s;
        const e = (s = t == null ? void 0 : t.lockedWritableAccounts) == null ? void 0 : s.map(f => f.toBase58()),
            r = e != null && e.length ? [e] : [],
            o = await this._rpcRequest("getRecentPrioritizationFees", r),
            i = ut(o, Kh);
        if ("error" in i) throw new dt(i.error, "failed to get recent prioritization fees");
        return i.result
    }
    async getRecentBlockhash(t) {
        try {
            return (await this.getRecentBlockhashAndContext(t)).value
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e)
        }
    }
    async getLatestBlockhash(t) {
        try {
            return (await this.getLatestBlockhashAndContext(t)).value
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e)
        }
    }
    async getLatestBlockhashAndContext(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, void 0, r), i = await this._rpcRequest("getLatestBlockhash", o), s = ut(i, Ml);
        if ("error" in s) throw new dt(s.error, "failed to get latest blockhash");
        return s.result
    }
    async isBlockhashValid(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgs([t], r, void 0, o), s = await this._rpcRequest("isBlockhashValid", i), f = ut(s, Tl);
        if ("error" in f) throw new dt(f.error, "failed to determine if the blockhash `" + t + "`is valid");
        return f.result
    }
    async getVersion() {
        const t = await this._rpcRequest("getVersion", []),
            e = ut(t, It(Nh));
        if ("error" in e) throw new dt(e.error, "failed to get version");
        return e.result
    }
    async getGenesisHash() {
        const t = await this._rpcRequest("getGenesisHash", []),
            e = ut(t, It(ct()));
        if ("error" in e) throw new dt(e.error, "failed to get genesis hash");
        return e.result
    }
    async getBlock(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgsAtLeastConfirmed([t], r, void 0, o), s = await this._rpcRequest("getBlock", i);
        try {
            switch (o == null ? void 0 : o.transactionDetails) {
                case "accounts":
                    {
                        const f = ut(s, _l);
                        if ("error" in f) throw f.error;
                        return f.result
                    }
                case "none":
                    {
                        const f = ut(s, Sl);
                        if ("error" in f) throw f.error;
                        return f.result
                    }
                default:
                    {
                        const f = ut(s, Bl);
                        if ("error" in f) throw f.error;
                        const {
                            result: y
                        } = f;
                        return y ? { ...y,
                            transactions: y.transactions.map(({
                                transaction: S,
                                meta: m,
                                version: U
                            }) => ({
                                meta: m,
                                transaction: { ...S,
                                    message: mi(U, S.message)
                                },
                                version: U
                            }))
                        } : null
                    }
            }
        } catch (f) {
            throw new dt(f, "failed to get confirmed block")
        }
    }
    async getParsedBlock(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", o), s = await this._rpcRequest("getBlock", i);
        try {
            switch (o == null ? void 0 : o.transactionDetails) {
                case "accounts":
                    {
                        const f = ut(s, Al);
                        if ("error" in f) throw f.error;
                        return f.result
                    }
                case "none":
                    {
                        const f = ut(s, kl);
                        if ("error" in f) throw f.error;
                        return f.result
                    }
                default:
                    {
                        const f = ut(s, Il);
                        if ("error" in f) throw f.error;
                        return f.result
                    }
            }
        } catch (f) {
            throw new dt(f, "failed to get block")
        }
    }
    async getBlockProduction(t) {
        let e, r;
        if (typeof t == "string") r = t;
        else if (t) {
            const {
                commitment: f,
                ...y
            } = t;
            r = f, e = y
        }
        const o = this._buildArgs([], r, "base64", e),
            i = await this._rpcRequest("getBlockProduction", o),
            s = ut(i, Fh);
        if ("error" in s) throw new dt(s.error, "failed to get block production information");
        return s.result
    }
    async getTransaction(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgsAtLeastConfirmed([t], r, void 0, o), s = await this._rpcRequest("getTransaction", i), f = ut(s, wi);
        if ("error" in f) throw new dt(f.error, "failed to get transaction");
        const y = f.result;
        return y && { ...y,
            transaction: { ...y.transaction,
                message: mi(y.version, y.transaction.message)
            }
        }
    }
    async getParsedTransaction(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", o), s = await this._rpcRequest("getTransaction", i), f = ut(s, Xr);
        if ("error" in f) throw new dt(f.error, "failed to get transaction");
        return f.result
    }
    async getParsedTransactions(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = t.map(y => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([y], r, "jsonParsed", o)
        }));
        return (await this._rpcBatchRequest(i)).map(y => {
            const S = ut(y, Xr);
            if ("error" in S) throw new dt(S.error, "failed to get transactions");
            return S.result
        })
    }
    async getTransactions(t, e) {
        const {
            commitment: r,
            config: o
        } = qt(e), i = t.map(y => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([y], r, void 0, o)
        }));
        return (await this._rpcBatchRequest(i)).map(y => {
            const S = ut(y, wi);
            if ("error" in S) throw new dt(S.error, "failed to get transactions");
            const m = S.result;
            return m && { ...m,
                transaction: { ...m.transaction,
                    message: mi(m.version, m.transaction.message)
                }
            }
        })
    }
    async getConfirmedBlock(t, e) {
        const r = this._buildArgsAtLeastConfirmed([t], e),
            o = await this._rpcRequest("getBlock", r),
            i = ut(o, Rl);
        if ("error" in i) throw new dt(i.error, "failed to get confirmed block");
        const s = i.result;
        if (!s) throw new Error("Confirmed block " + t + " not found");
        const f = { ...s,
            transactions: s.transactions.map(({
                transaction: y,
                meta: S
            }) => {
                const m = new Ve(y.message);
                return {
                    meta: S,
                    transaction: { ...y,
                        message: m
                    }
                }
            })
        };
        return { ...f,
            transactions: f.transactions.map(({
                transaction: y,
                meta: S
            }) => ({
                meta: S,
                transaction: Ge.populate(y.message, y.signatures)
            }))
        }
    }
    async getBlocks(t, e, r) {
        const o = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], r),
            i = await this._rpcRequest("getBlocks", o),
            s = ut(i, It(ht(Y())));
        if ("error" in s) throw new dt(s.error, "failed to get blocks");
        return s.result
    }
    async getBlockSignatures(t, e) {
        const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            o = await this._rpcRequest("getBlock", r),
            i = ut(o, Oo);
        if ("error" in i) throw new dt(i.error, "failed to get block");
        const s = i.result;
        if (!s) throw new Error("Block " + t + " not found");
        return s
    }
    async getConfirmedBlockSignatures(t, e) {
        const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            o = await this._rpcRequest("getBlock", r),
            i = ut(o, Oo);
        if ("error" in i) throw new dt(i.error, "failed to get confirmed block");
        const s = i.result;
        if (!s) throw new Error("Confirmed block " + t + " not found");
        return s
    }
    async getConfirmedTransaction(t, e) {
        const r = this._buildArgsAtLeastConfirmed([t], e),
            o = await this._rpcRequest("getTransaction", r),
            i = ut(o, wi);
        if ("error" in i) throw new dt(i.error, "failed to get transaction");
        const s = i.result;
        if (!s) return s;
        const f = new Ve(s.transaction.message),
            y = s.transaction.signatures;
        return { ...s,
            transaction: Ge.populate(f, y)
        }
    }
    async getParsedConfirmedTransaction(t, e) {
        const r = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
            o = await this._rpcRequest("getTransaction", r),
            i = ut(o, Xr);
        if ("error" in i) throw new dt(i.error, "failed to get confirmed transaction");
        return i.result
    }
    async getParsedConfirmedTransactions(t, e) {
        const r = t.map(s => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([s], e, "jsonParsed")
        }));
        return (await this._rpcBatchRequest(r)).map(s => {
            const f = ut(s, Xr);
            if ("error" in f) throw new dt(f.error, "failed to get confirmed transactions");
            return f.result
        })
    }
    async getConfirmedSignaturesForAddress(t, e, r) {
        let o = {},
            i = await this.getFirstAvailableBlock();
        for (; !("until" in o) && (e--, !(e <= 0 || e < i));) try {
            const y = await this.getConfirmedBlockSignatures(e, "finalized");
            y.signatures.length > 0 && (o.until = y.signatures[y.signatures.length - 1].toString())
        } catch (y) {
            if (y instanceof Error && y.message.includes("skipped")) continue;
            throw y
        }
        let s = await this.getSlot("finalized");
        for (; !("before" in o) && (r++, !(r > s));) try {
            const y = await this.getConfirmedBlockSignatures(r);
            y.signatures.length > 0 && (o.before = y.signatures[y.signatures.length - 1].toString())
        } catch (y) {
            if (y instanceof Error && y.message.includes("skipped")) continue;
            throw y
        }
        return (await this.getConfirmedSignaturesForAddress2(t, o)).map(y => y.signature)
    }
    async getConfirmedSignaturesForAddress2(t, e, r) {
        const o = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
            i = await this._rpcRequest("getConfirmedSignaturesForAddress2", o),
            s = ut(i, il);
        if ("error" in s) throw new dt(s.error, "failed to get confirmed signatures for address");
        return s.result
    }
    async getSignaturesForAddress(t, e, r) {
        const o = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
            i = await this._rpcRequest("getSignaturesForAddress", o),
            s = ut(i, ol);
        if ("error" in s) throw new dt(s.error, "failed to get signatures for address");
        return s.result
    }
    async getAddressLookupTable(t, e) {
        const {
            context: r,
            value: o
        } = await this.getAccountInfoAndContext(t, e);
        let i = null;
        return o !== null && (i = new Lo({
            key: t,
            state: Lo.deserialize(o.data)
        })), {
            context: r,
            value: i
        }
    }
    async getNonceAndContext(t, e) {
        const {
            context: r,
            value: o
        } = await this.getAccountInfoAndContext(t, e);
        let i = null;
        return o !== null && (i = zi.fromAccountData(o.data)), {
            context: r,
            value: i
        }
    }
    async getNonce(t, e) {
        return await this.getNonceAndContext(t, e).then(r => r.value).catch(r => {
            throw new Error("failed to get nonce for account " + t.toBase58() + ": " + r)
        })
    }
    async requestAirdrop(t, e) {
        const r = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]),
            o = ut(r, Nl);
        if ("error" in o) throw new dt(o.error, `airdrop to ${t.toBase58()} failed`);
        return o.result
    }
    async _blockhashWithExpiryBlockHeight(t) {
        if (!t) {
            for (; this._pollingBlockhash;) await yr(100);
            const r = Date.now() - this._blockhashInfo.lastFetch >= Bh;
            if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash
        }
        return await this._pollNewBlockhash()
    }
    async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
            const t = Date.now(),
                e = this._blockhashInfo.latestBlockhash,
                r = e ? e.blockhash : null;
            for (let o = 0; o < 50; o++) {
                const i = await this.getLatestBlockhash("finalized");
                if (r !== i.blockhash) return this._blockhashInfo = {
                    latestBlockhash: i,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: []
                }, i;
                await yr(hh / 2)
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now()-t}ms`)
        } finally {
            this._pollingBlockhash = !1
        }
    }
    async getStakeMinimumDelegation(t) {
        const {
            commitment: e,
            config: r
        } = qt(t), o = this._buildArgs([], e, "base64", r), i = await this._rpcRequest("getStakeMinimumDelegation", o), s = ut(i, te(Y()));
        if ("error" in s) throw new dt(s.error, "failed to get stake minimum delegation");
        return s.result
    }
    async simulateTransaction(t, e, r) {
        if ("message" in t) {
            const F = t.serialize(),
                C = St.from(F).toString("base64");
            if (Array.isArray(e) || r !== void 0) throw new Error("Invalid arguments");
            const Q = e || {};
            Q.encoding = "base64", "commitment" in Q || (Q.commitment = this.commitment), e && typeof e == "object" && "innerInstructions" in e && (Q.innerInstructions = e.innerInstructions);
            const V = [C, Q],
                W = await this._rpcRequest("simulateTransaction", V),
                st = ut(W, Co);
            if ("error" in st) throw new Error("failed to simulate transaction: " + st.error.message);
            return st.result
        }
        let o;
        if (t instanceof Ge) {
            let j = t;
            o = new Ge, o.feePayer = j.feePayer, o.instructions = t.instructions, o.nonceInfo = j.nonceInfo, o.signatures = j.signatures
        } else o = Ge.populate(t), o._message = o._json = void 0;
        if (e !== void 0 && !Array.isArray(e)) throw new Error("Invalid arguments");
        const i = e;
        if (o.nonceInfo && i) o.sign(...i);
        else {
            let j = this._disableBlockhashCaching;
            for (;;) {
                const F = await this._blockhashWithExpiryBlockHeight(j);
                if (o.lastValidBlockHeight = F.lastValidBlockHeight, o.recentBlockhash = F.blockhash, !i) break;
                if (o.sign(...i), !o.signature) throw new Error("!signature");
                const C = o.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(C) && !this._blockhashInfo.transactionSignatures.includes(C)) {
                    this._blockhashInfo.simulatedSignatures.push(C);
                    break
                } else j = !0
            }
        }
        const s = o._compile(),
            f = s.serialize(),
            S = o._serialize(f).toString("base64"),
            m = {
                encoding: "base64",
                commitment: this.commitment
            };
        if (r) {
            const j = (Array.isArray(r) ? r : s.nonProgramIds()).map(F => F.toBase58());
            m.accounts = {
                encoding: "base64",
                addresses: j
            }
        }
        i && (m.sigVerify = !0), e && typeof e == "object" && "innerInstructions" in e && (m.innerInstructions = e.innerInstructions);
        const U = [S, m],
            H = await this._rpcRequest("simulateTransaction", U),
            O = ut(H, Co);
        if ("error" in O) {
            let j;
            if ("data" in O.error && (j = O.error.data.logs, j && Array.isArray(j))) {
                const F = `
    `,
                    C = F + j.join(F);
                console.error(O.error.message, C)
            }
            throw new Ao({
                action: "simulate",
                signature: "",
                transactionMessage: O.error.message,
                logs: j
            })
        }
        return O.result
    }
    async sendTransaction(t, e, r) {
        if ("version" in t) {
            if (e && Array.isArray(e)) throw new Error("Invalid arguments");
            const s = t.serialize();
            return await this.sendRawTransaction(s, e)
        }
        if (e === void 0 || !Array.isArray(e)) throw new Error("Invalid arguments");
        const o = e;
        if (t.nonceInfo) t.sign(...o);
        else {
            let s = this._disableBlockhashCaching;
            for (;;) {
                const f = await this._blockhashWithExpiryBlockHeight(s);
                if (t.lastValidBlockHeight = f.lastValidBlockHeight, t.recentBlockhash = f.blockhash, t.sign(...o), !t.signature) throw new Error("!signature");
                const y = t.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(y)) s = !0;
                else {
                    this._blockhashInfo.transactionSignatures.push(y);
                    break
                }
            }
        }
        const i = t.serialize();
        return await this.sendRawTransaction(i, r)
    }
    async sendRawTransaction(t, e) {
        const r = ue(t).toString("base64");
        return await this.sendEncodedTransaction(r, e)
    }
    async sendEncodedTransaction(t, e) {
        const r = {
                encoding: "base64"
            },
            o = e && e.skipPreflight,
            i = o === !0 ? "processed" : e && e.preflightCommitment || this.commitment;
        e && e.maxRetries != null && (r.maxRetries = e.maxRetries), e && e.minContextSlot != null && (r.minContextSlot = e.minContextSlot), o && (r.skipPreflight = o), i && (r.preflightCommitment = i);
        const s = [t, r],
            f = await this._rpcRequest("sendTransaction", s),
            y = ut(f, Ol);
        if ("error" in y) {
            let S;
            throw "data" in y.error && (S = y.error.data.logs), new Ao({
                action: o ? "send" : "simulate",
                signature: "",
                transactionMessage: y.error.message,
                logs: S
            })
        }
        return y.result
    }
    _wsOnOpen() {
        this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
            (async () => {
                try {
                    await this._rpcWebSocket.notify("ping")
                } catch {}
            })()
        }, 5e3), this._updateSubscriptions()
    }
    _wsOnError(t) {
        this._rpcWebSocketConnected = !1, console.error("ws error:", t.message)
    }
    _wsOnClose(t) {
        if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
            this._updateSubscriptions();
            return
        }
        this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, r]) => {
            this._setSubscription(e, { ...r,
                state: "pending"
            })
        })
    }
    _setSubscription(t, e) {
        var o;
        const r = (o = this._subscriptionsByHash[t]) == null ? void 0 : o.state;
        if (this._subscriptionsByHash[t] = e, r !== e.state) {
            const i = this._subscriptionStateChangeCallbacksByHash[t];
            i && i.forEach(s => {
                try {
                    s(e.state)
                } catch {}
            })
        }
    }
    _onSubscriptionStateChange(t, e) {
        var i;
        const r = this._subscriptionHashByClientSubscriptionId[t];
        if (r == null) return () => {};
        const o = (i = this._subscriptionStateChangeCallbacksByHash)[r] || (i[r] = new Set);
        return o.add(e), () => {
            o.delete(e), o.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r]
        }
    }
    async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                    this._rpcWebSocket.close()
                } catch (r) {
                    r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`)
                }
            }, 500));
            return
        }
        if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return
        }
        const t = this._rpcWebSocketGeneration,
            e = () => t === this._rpcWebSocketGeneration;
        await Promise.all(Object.keys(this._subscriptionsByHash).map(async r => {
            const o = this._subscriptionsByHash[r];
            if (o !== void 0) switch (o.state) {
                case "pending":
                case "unsubscribed":
                    if (o.callbacks.size === 0) {
                        delete this._subscriptionsByHash[r], o.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[o.serverSubscriptionId], await this._updateSubscriptions();
                        return
                    }
                    await (async () => {
                        const {
                            args: i,
                            method: s
                        } = o;
                        try {
                            this._setSubscription(r, { ...o,
                                state: "subscribing"
                            });
                            const f = await this._rpcWebSocket.call(s, i);
                            this._setSubscription(r, { ...o,
                                serverSubscriptionId: f,
                                state: "subscribed"
                            }), this._subscriptionCallbacksByServerSubscriptionId[f] = o.callbacks, await this._updateSubscriptions()
                        } catch (f) {
                            if (console.error(`Received ${f instanceof Error?"":"JSON-RPC "}error calling \`${s}\``, {
                                    args: i,
                                    error: f
                                }), !e()) return;
                            this._setSubscription(r, { ...o,
                                state: "pending"
                            }), await this._updateSubscriptions()
                        }
                    })();
                    break;
                case "subscribed":
                    o.callbacks.size === 0 && await (async () => {
                        const {
                            serverSubscriptionId: i,
                            unsubscribeMethod: s
                        } = o;
                        if (this._subscriptionsAutoDisposedByRpc.has(i)) this._subscriptionsAutoDisposedByRpc.delete(i);
                        else {
                            this._setSubscription(r, { ...o,
                                state: "unsubscribing"
                            }), this._setSubscription(r, { ...o,
                                state: "unsubscribing"
                            });
                            try {
                                await this._rpcWebSocket.call(s, [i])
                            } catch (f) {
                                if (f instanceof Error && console.error(`${s} error:`, f.message), !e()) return;
                                this._setSubscription(r, { ...o,
                                    state: "subscribed"
                                }), await this._updateSubscriptions();
                                return
                            }
                        }
                        this._setSubscription(r, { ...o,
                            state: "unsubscribed"
                        }), await this._updateSubscriptions()
                    })();
                    break
            }
        }))
    }
    _handleServerNotification(t, e) {
        const r = this._subscriptionCallbacksByServerSubscriptionId[t];
        r !== void 0 && r.forEach(o => {
            try {
                o(...e)
            } catch (i) {
                console.error(i)
            }
        })
    }
    _wsOnAccountNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, sl);
        this._handleServerNotification(r, [e.value, e.context])
    }
    _makeSubscription(t, e) {
        const r = this._nextClientSubscriptionId++,
            o = Mo([t.method, e]),
            i = this._subscriptionsByHash[o];
        return i === void 0 ? this._subscriptionsByHash[o] = { ...t,
            args: e,
            callbacks: new Set([t.callback]),
            state: "pending"
        } : i.callbacks.add(t.callback), this._subscriptionHashByClientSubscriptionId[r] = o, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
            const s = this._subscriptionsByHash[o];
            jt(s !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), s.callbacks.delete(t.callback), await this._updateSubscriptions()
        }, this._updateSubscriptions(), r
    }
    onAccountChange(t, e, r) {
        const {
            commitment: o,
            config: i
        } = qt(r), s = this._buildArgs([t.toBase58()], o || this._commitment || "finalized", "base64", i);
        return this._makeSubscription({
            callback: e,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, s)
    }
    async removeAccountChangeListener(t) {
        await this._unsubscribeClientSubscription(t, "account change")
    }
    _wsOnProgramAccountNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, cl);
        this._handleServerNotification(r, [{
            accountId: e.value.pubkey,
            accountInfo: e.value.account
        }, e.context])
    }
    onProgramAccountChange(t, e, r, o) {
        const {
            commitment: i,
            config: s
        } = qt(r), f = this._buildArgs([t.toBase58()], i || this._commitment || "finalized", "base64", s || (o ? {
            filters: Uo(o)
        } : void 0));
        return this._makeSubscription({
            callback: e,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, f)
    }
    async removeProgramAccountChangeListener(t) {
        await this._unsubscribeClientSubscription(t, "program account change")
    }
    onLogs(t, e, r) {
        const o = this._buildArgs([typeof t == "object" ? {
            mentions: [t.toString()]
        } : t], r || this._commitment || "finalized");
        return this._makeSubscription({
            callback: e,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, o)
    }
    async removeOnLogsListener(t) {
        await this._unsubscribeClientSubscription(t, "logs")
    }
    _wsOnLogsNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, Fl);
        this._handleServerNotification(r, [e.value, e.context])
    }
    _wsOnSlotNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, hl);
        this._handleServerNotification(r, [e])
    }
    onSlotChange(t) {
        return this._makeSubscription({
            callback: t,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, [])
    }
    async removeSlotChangeListener(t) {
        await this._unsubscribeClientSubscription(t, "slot change")
    }
    _wsOnSlotUpdatesNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, fl);
        this._handleServerNotification(r, [e])
    }
    onSlotUpdate(t) {
        return this._makeSubscription({
            callback: t,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, [])
    }
    async removeSlotUpdateListener(t) {
        await this._unsubscribeClientSubscription(t, "slot update")
    }
    async _unsubscribeClientSubscription(t, e) {
        const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
        r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`)
    }
    _buildArgs(t, e, r, o) {
        const i = e || this._commitment;
        if (i || r || o) {
            let s = {};
            r && (s.encoding = r), i && (s.commitment = i), o && (s = Object.assign(s, o)), t.push(s)
        }
        return t
    }
    _buildArgsAtLeastConfirmed(t, e, r, o) {
        const i = e || this._commitment;
        if (i && !["confirmed", "finalized"].includes(i)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(t, e, r, o)
    }
    _wsOnSignatureNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, dl);
        e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, e.value === "receivedSignature" ? [{
            type: "received"
        }, e.context] : [{
            type: "status",
            result: e.value
        }, e.context])
    }
    onSignature(t, e, r) {
        const o = this._buildArgs([t], r || this._commitment || "finalized"),
            i = this._makeSubscription({
                callback: (s, f) => {
                    if (s.type === "status") {
                        e(s.result, f);
                        try {
                            this.removeSignatureListener(i)
                        } catch {}
                    }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, o);
        return i
    }
    onSignatureWithOptions(t, e, r) {
        const {
            commitment: o,
            ...i
        } = { ...r,
            commitment: r && r.commitment || this._commitment || "finalized"
        }, s = this._buildArgs([t], o, void 0, i), f = this._makeSubscription({
            callback: (y, S) => {
                e(y, S);
                try {
                    this.removeSignatureListener(f)
                } catch {}
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, s);
        return f
    }
    async removeSignatureListener(t) {
        await this._unsubscribeClientSubscription(t, "signature result")
    }
    _wsOnRootNotification(t) {
        const {
            result: e,
            subscription: r
        } = ut(t, pl);
        this._handleServerNotification(r, [e])
    }
    onRootChange(t) {
        return this._makeSubscription({
            callback: t,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, [])
    }
    async removeRootChangeListener(t) {
        await this._unsubscribeClientSubscription(t, "root change")
    }
}
Object.freeze({
    CreateLookupTable: {
        index: 0,
        layout: P.struct([P.u32("instruction"), _r("recentSlot"), P.u8("bumpSeed")])
    },
    FreezeLookupTable: {
        index: 1,
        layout: P.struct([P.u32("instruction")])
    },
    ExtendLookupTable: {
        index: 2,
        layout: P.struct([P.u32("instruction"), _r(), P.seq(Rt(), P.offset(P.u32(), -8), "addresses")])
    },
    DeactivateLookupTable: {
        index: 3,
        layout: P.struct([P.u32("instruction")])
    },
    CloseLookupTable: {
        index: 4,
        layout: P.struct([P.u32("instruction")])
    }
});
new mt("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
    RequestUnits: {
        index: 0,
        layout: P.struct([P.u8("instruction"), P.u32("units"), P.u32("additionalFee")])
    },
    RequestHeapFrame: {
        index: 1,
        layout: P.struct([P.u8("instruction"), P.u32("bytes")])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: P.struct([P.u8("instruction"), P.u32("units")])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: P.struct([P.u8("instruction"), _r("microLamports")])
    }
});
new mt("ComputeBudget111111111111111111111111111111");
P.struct([P.u8("numSignatures"), P.u8("padding"), P.u16("signatureOffset"), P.u16("signatureInstructionIndex"), P.u16("publicKeyOffset"), P.u16("publicKeyInstructionIndex"), P.u16("messageDataOffset"), P.u16("messageDataSize"), P.u16("messageInstructionIndex")]);
new mt("Ed25519SigVerify111111111111111111111111111");
Ui.utils.isValidPrivateKey;
Ui.getPublicKey;
P.struct([P.u8("numSignatures"), P.u16("signatureOffset"), P.u8("signatureInstructionIndex"), P.u16("ethAddressOffset"), P.u8("ethAddressInstructionIndex"), P.u16("messageDataOffset"), P.u16("messageDataSize"), P.u8("messageInstructionIndex"), P.blob(20, "ethAddress"), P.blob(64, "signature"), P.u8("recoveryId")]);
new mt("KeccakSecp256k11111111111111111111111111111");
var Gs;
new mt("StakeConfig11111111111111111111111111111111");
class js {
    constructor(t, e, r) {
        this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = r
    }
}
Gs = js;
js.default = new Gs(0, 0, mt.default);
Object.freeze({
    Initialize: {
        index: 0,
        layout: P.struct([P.u32("instruction"), rh(), nh()])
    },
    Authorize: {
        index: 1,
        layout: P.struct([P.u32("instruction"), Rt("newAuthorized"), P.u32("stakeAuthorizationType")])
    },
    Delegate: {
        index: 2,
        layout: P.struct([P.u32("instruction")])
    },
    Split: {
        index: 3,
        layout: P.struct([P.u32("instruction"), P.ns64("lamports")])
    },
    Withdraw: {
        index: 4,
        layout: P.struct([P.u32("instruction"), P.ns64("lamports")])
    },
    Deactivate: {
        index: 5,
        layout: P.struct([P.u32("instruction")])
    },
    Merge: {
        index: 7,
        layout: P.struct([P.u32("instruction")])
    },
    AuthorizeWithSeed: {
        index: 8,
        layout: P.struct([P.u32("instruction"), Rt("newAuthorized"), P.u32("stakeAuthorizationType"), wr("authoritySeed"), Rt("authorityOwner")])
    }
});
new mt("Stake11111111111111111111111111111111111111");
Object.freeze({
    InitializeAccount: {
        index: 0,
        layout: P.struct([P.u32("instruction"), ih()])
    },
    Authorize: {
        index: 1,
        layout: P.struct([P.u32("instruction"), Rt("newAuthorized"), P.u32("voteAuthorizationType")])
    },
    Withdraw: {
        index: 3,
        layout: P.struct([P.u32("instruction"), P.ns64("lamports")])
    },
    UpdateValidatorIdentity: {
        index: 4,
        layout: P.struct([P.u32("instruction")])
    },
    AuthorizeWithSeed: {
        index: 10,
        layout: P.struct([P.u32("instruction"), oh()])
    }
});
new mt("Vote111111111111111111111111111111111111111");
new mt("Va1idator1nfo111111111111111111111111111111");
at({
    name: ct(),
    website: gt(ct()),
    details: gt(ct()),
    iconUrl: gt(ct()),
    keybaseUsername: gt(ct())
});
new mt("Vote111111111111111111111111111111111111111");
P.struct([Rt("nodePubkey"), Rt("authorizedWithdrawer"), P.u8("commission"), P.nu64(), P.seq(P.struct([P.nu64("slot"), P.u32("confirmationCount")]), P.offset(P.u32(), -8), "votes"), P.u8("rootSlotValid"), P.nu64("rootSlot"), P.nu64(), P.seq(P.struct([P.nu64("epoch"), Rt("authorizedVoter")]), P.offset(P.u32(), -8), "authorizedVoters"), P.struct([P.seq(P.struct([Rt("authorizedPubkey"), P.nu64("epochOfLastAuthorizedSwitch"), P.nu64("targetEpoch")]), 32, "buf"), P.nu64("idx"), P.u8("isEmpty")], "priorVoters"), P.nu64(), P.seq(P.struct([P.nu64("epoch"), P.nu64("credits"), P.nu64("prevCredits")]), P.offset(P.u32(), -8), "epochCredits"), P.struct([P.nu64("slot"), P.nu64("timestamp")], "lastTimestamp")]);
const Xl = 1e9,
    zl = new mt("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");

function Jl(n, t) {
    const e = [];
    return new Le({
        keys: e,
        programId: zl,
        data: St.from(n, "utf8")
    })
}
export {
    co as B, Yl as C, ys as E, Ir as F, Xl as L, mt as P, hn as S, Ge as T, Cs as V, Ui as a, be as b, xr as c, Nr as d, je as e, Xo as f, fc as g, Qo as h, Wl as i, $a as j, Kl as k, Jl as l, Gl as m, Do as r, Ji as s
};