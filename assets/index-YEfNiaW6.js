import {
    b as j,
    i as ae,
    a as ce,
    x as G
} from "./lit-element-bcC7X8ka.js";
import {
    n as $
} from "./class-map-DBQZYyHE.js";
import {
    c as le
} from "./index-7vjA79iQ.js";
import "./index-DYyxKws7.js";
import {
    g as fe
} from "./react-vendor-1qCqAHqt.js";
import {
    r as de
} from "./index-D_sE5vDe.js";
import {
    r as he
} from "./auth-vendor-XDJ1EvAC.js";
import {
    r as ge
} from "./index-t-8BKzI0.js";
var K = {},
    tt, bt;

function me() {
    return bt || (bt = 1, tt = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    }), tt
}
var et = {},
    z = {},
    Mt;

function V() {
    if (Mt) return z;
    Mt = 1;
    let r;
    const o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    return z.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17
    }, z.getSymbolTotalCodewords = function(e) {
        return o[e]
    }, z.getBCHDigit = function(u) {
        let e = 0;
        for (; u !== 0;) e++, u >>>= 1;
        return e
    }, z.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        r = e
    }, z.isKanjiModeEnabled = function() {
        return typeof r < "u"
    }, z.toSJIS = function(e) {
        return r(e)
    }, z
}
var nt = {},
    Tt;

function At() {
    return Tt || (Tt = 1, function(r) {
        r.L = {
            bit: 1
        }, r.M = {
            bit: 0
        }, r.Q = {
            bit: 3
        }, r.H = {
            bit: 2
        };

        function o(u) {
            if (typeof u != "string") throw new Error("Param is not a string");
            switch (u.toLowerCase()) {
                case "l":
                case "low":
                    return r.L;
                case "m":
                case "medium":
                    return r.M;
                case "q":
                case "quartile":
                    return r.Q;
                case "h":
                case "high":
                    return r.H;
                default:
                    throw new Error("Unknown EC Level: " + u)
            }
        }
        r.isValid = function(e) {
            return e && typeof e.bit < "u" && e.bit >= 0 && e.bit < 4
        }, r.from = function(e, t) {
            if (r.isValid(e)) return e;
            try {
                return o(e)
            } catch {
                return t
            }
        }
    }(nt)), nt
}
var rt, Pt;

function we() {
    if (Pt) return rt;
    Pt = 1;

    function r() {
        this.buffer = [], this.length = 0
    }
    return r.prototype = {
        get: function(o) {
            const u = Math.floor(o / 8);
            return (this.buffer[u] >>> 7 - o % 8 & 1) === 1
        },
        put: function(o, u) {
            for (let e = 0; e < u; e++) this.putBit((o >>> u - e - 1 & 1) === 1)
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(o) {
            const u = Math.floor(this.length / 8);
            this.buffer.length <= u && this.buffer.push(0), o && (this.buffer[u] |= 128 >>> this.length % 8), this.length++
        }
    }, rt = r, rt
}
var ot, Lt;

function Ce() {
    if (Lt) return ot;
    Lt = 1;

    function r(o) {
        if (!o || o < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = o, this.data = new Uint8Array(o * o), this.reservedBit = new Uint8Array(o * o)
    }
    return r.prototype.set = function(o, u, e, t) {
        const n = o * this.size + u;
        this.data[n] = e, t && (this.reservedBit[n] = !0)
    }, r.prototype.get = function(o, u) {
        return this.data[o * this.size + u]
    }, r.prototype.xor = function(o, u, e) {
        this.data[o * this.size + u] ^= e
    }, r.prototype.isReserved = function(o, u) {
        return this.reservedBit[o * this.size + u]
    }, ot = r, ot
}
var it = {},
    vt;

function Ee() {
    return vt || (vt = 1, function(r) {
        const o = V().getSymbolSize;
        r.getRowColCoords = function(e) {
            if (e === 1) return [];
            const t = Math.floor(e / 7) + 2,
                n = o(e),
                i = n === 145 ? 26 : Math.ceil((n - 13) / (2 * t - 2)) * 2,
                a = [n - 7];
            for (let s = 1; s < t - 1; s++) a[s] = a[s - 1] - i;
            return a.push(6), a.reverse()
        }, r.getPositions = function(e) {
            const t = [],
                n = r.getRowColCoords(e),
                i = n.length;
            for (let a = 0; a < i; a++)
                for (let s = 0; s < i; s++) a === 0 && s === 0 || a === 0 && s === i - 1 || a === i - 1 && s === 0 || t.push([n[a], n[s]]);
            return t
        }
    }(it)), it
}
var st = {},
    Dt;

function pe() {
    if (Dt) return st;
    Dt = 1;
    const r = V().getSymbolSize,
        o = 7;
    return st.getPositions = function(e) {
        const t = r(e);
        return [
            [0, 0],
            [t - o, 0],
            [0, t - o]
        ]
    }, st
}
var ut = {},
    qt;

function ye() {
    return qt || (qt = 1, function(r) {
        r.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        const o = {
            N1: 3,
            N2: 3,
            N3: 40,
            N4: 10
        };
        r.isValid = function(t) {
            return t != null && t !== "" && !isNaN(t) && t >= 0 && t <= 7
        }, r.from = function(t) {
            return r.isValid(t) ? parseInt(t, 10) : void 0
        }, r.getPenaltyN1 = function(t) {
            const n = t.size;
            let i = 0,
                a = 0,
                s = 0,
                f = null,
                y = null;
            for (let N = 0; N < n; N++) {
                a = s = 0, f = y = null;
                for (let R = 0; R < n; R++) {
                    let g = t.get(N, R);
                    g === f ? a++ : (a >= 5 && (i += o.N1 + (a - 5)), f = g, a = 1), g = t.get(R, N), g === y ? s++ : (s >= 5 && (i += o.N1 + (s - 5)), y = g, s = 1)
                }
                a >= 5 && (i += o.N1 + (a - 5)), s >= 5 && (i += o.N1 + (s - 5))
            }
            return i
        }, r.getPenaltyN2 = function(t) {
            const n = t.size;
            let i = 0;
            for (let a = 0; a < n - 1; a++)
                for (let s = 0; s < n - 1; s++) {
                    const f = t.get(a, s) + t.get(a, s + 1) + t.get(a + 1, s) + t.get(a + 1, s + 1);
                    (f === 4 || f === 0) && i++
                }
            return i * o.N2
        }, r.getPenaltyN3 = function(t) {
            const n = t.size;
            let i = 0,
                a = 0,
                s = 0;
            for (let f = 0; f < n; f++) {
                a = s = 0;
                for (let y = 0; y < n; y++) a = a << 1 & 2047 | t.get(f, y), y >= 10 && (a === 1488 || a === 93) && i++, s = s << 1 & 2047 | t.get(y, f), y >= 10 && (s === 1488 || s === 93) && i++
            }
            return i * o.N3
        }, r.getPenaltyN4 = function(t) {
            let n = 0;
            const i = t.data.length;
            for (let s = 0; s < i; s++) n += t.data[s];
            return Math.abs(Math.ceil(n * 100 / i / 5) - 10) * o.N4
        };

        function u(e, t, n) {
            switch (e) {
                case r.Patterns.PATTERN000:
                    return (t + n) % 2 === 0;
                case r.Patterns.PATTERN001:
                    return t % 2 === 0;
                case r.Patterns.PATTERN010:
                    return n % 3 === 0;
                case r.Patterns.PATTERN011:
                    return (t + n) % 3 === 0;
                case r.Patterns.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 === 0;
                case r.Patterns.PATTERN101:
                    return t * n % 2 + t * n % 3 === 0;
                case r.Patterns.PATTERN110:
                    return (t * n % 2 + t * n % 3) % 2 === 0;
                case r.Patterns.PATTERN111:
                    return (t * n % 3 + (t + n) % 2) % 2 === 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        }
        r.applyMask = function(t, n) {
            const i = n.size;
            for (let a = 0; a < i; a++)
                for (let s = 0; s < i; s++) n.isReserved(s, a) || n.xor(s, a, u(t, s, a))
        }, r.getBestMask = function(t, n) {
            const i = Object.keys(r.Patterns).length;
            let a = 0,
                s = 1 / 0;
            for (let f = 0; f < i; f++) {
                n(f), r.applyMask(f, t);
                const y = r.getPenaltyN1(t) + r.getPenaltyN2(t) + r.getPenaltyN3(t) + r.getPenaltyN4(t);
                r.applyMask(f, t), y < s && (s = y, a = f)
            }
            return a
        }
    }(ut)), ut
}
var Q = {},
    Ut;

function ee() {
    if (Ut) return Q;
    Ut = 1;
    const r = At(),
        o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        u = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    return Q.getBlocksCount = function(t, n) {
        switch (n) {
            case r.L:
                return o[(t - 1) * 4 + 0];
            case r.M:
                return o[(t - 1) * 4 + 1];
            case r.Q:
                return o[(t - 1) * 4 + 2];
            case r.H:
                return o[(t - 1) * 4 + 3];
            default:
                return
        }
    }, Q.getTotalCodewordsCount = function(t, n) {
        switch (n) {
            case r.L:
                return u[(t - 1) * 4 + 0];
            case r.M:
                return u[(t - 1) * 4 + 1];
            case r.Q:
                return u[(t - 1) * 4 + 2];
            case r.H:
                return u[(t - 1) * 4 + 3];
            default:
                return
        }
    }, Q
}
var at = {},
    J = {},
    kt;

function Be() {
    if (kt) return J;
    kt = 1;
    const r = new Uint8Array(512),
        o = new Uint8Array(256);
    return function() {
        let e = 1;
        for (let t = 0; t < 255; t++) r[t] = e, o[e] = t, e <<= 1, e & 256 && (e ^= 285);
        for (let t = 255; t < 512; t++) r[t] = r[t - 255]
    }(), J.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return o[e]
    }, J.exp = function(e) {
        return r[e]
    }, J.mul = function(e, t) {
        return e === 0 || t === 0 ? 0 : r[o[e] + o[t]]
    }, J
}
var Ft;

function Re() {
    return Ft || (Ft = 1, function(r) {
        const o = Be();
        r.mul = function(e, t) {
            const n = new Uint8Array(e.length + t.length - 1);
            for (let i = 0; i < e.length; i++)
                for (let a = 0; a < t.length; a++) n[i + a] ^= o.mul(e[i], t[a]);
            return n
        }, r.mod = function(e, t) {
            let n = new Uint8Array(e);
            for (; n.length - t.length >= 0;) {
                const i = n[0];
                for (let s = 0; s < t.length; s++) n[s] ^= o.mul(t[s], i);
                let a = 0;
                for (; a < n.length && n[a] === 0;) a++;
                n = n.slice(a)
            }
            return n
        }, r.generateECPolynomial = function(e) {
            let t = new Uint8Array([1]);
            for (let n = 0; n < e; n++) t = r.mul(t, new Uint8Array([1, o.exp(n)]));
            return t
        }
    }(at)), at
}
var ct, zt;

function Ae() {
    if (zt) return ct;
    zt = 1;
    const r = Re();

    function o(u) {
        this.genPoly = void 0, this.degree = u, this.degree && this.initialize(this.degree)
    }
    return o.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
    }, o.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const t = new Uint8Array(e.length + this.degree);
        t.set(e);
        const n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
        if (i > 0) {
            const a = new Uint8Array(this.degree);
            return a.set(n, i), a
        }
        return n
    }, ct = o, ct
}
var lt = {},
    ft = {},
    dt = {},
    $t;

function ne() {
    return $t || ($t = 1, dt.isValid = function(o) {
        return !isNaN(o) && o >= 1 && o <= 40
    }), dt
}
var v = {},
    Vt;

function re() {
    if (Vt) return v;
    Vt = 1;
    const r = "[0-9]+",
        o = "[A-Z $%*+\\-./:]+";
    let u = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    u = u.replace(/u/g, "\\u");
    const e = "(?:(?![A-Z0-9 $%*+\\-./:]|" + u + `)(?:.|[\r
]))+`;
    v.KANJI = new RegExp(u, "g"), v.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), v.BYTE = new RegExp(e, "g"), v.NUMERIC = new RegExp(r, "g"), v.ALPHANUMERIC = new RegExp(o, "g");
    const t = new RegExp("^" + u + "$"),
        n = new RegExp("^" + r + "$"),
        i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    return v.testKanji = function(s) {
        return t.test(s)
    }, v.testNumeric = function(s) {
        return n.test(s)
    }, v.testAlphanumeric = function(s) {
        return i.test(s)
    }, v
}
var _t;

function _() {
    return _t || (_t = 1, function(r) {
        const o = ne(),
            u = re();
        r.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, r.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, r.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, r.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, r.MIXED = {
            bit: -1
        }, r.getCharCountIndicator = function(n, i) {
            if (!n.ccBits) throw new Error("Invalid mode: " + n);
            if (!o.isValid(i)) throw new Error("Invalid version: " + i);
            return i >= 1 && i < 10 ? n.ccBits[0] : i < 27 ? n.ccBits[1] : n.ccBits[2]
        }, r.getBestModeForData = function(n) {
            return u.testNumeric(n) ? r.NUMERIC : u.testAlphanumeric(n) ? r.ALPHANUMERIC : u.testKanji(n) ? r.KANJI : r.BYTE
        }, r.toString = function(n) {
            if (n && n.id) return n.id;
            throw new Error("Invalid mode")
        }, r.isValid = function(n) {
            return n && n.bit && n.ccBits
        };

        function e(t) {
            if (typeof t != "string") throw new Error("Param is not a string");
            switch (t.toLowerCase()) {
                case "numeric":
                    return r.NUMERIC;
                case "alphanumeric":
                    return r.ALPHANUMERIC;
                case "kanji":
                    return r.KANJI;
                case "byte":
                    return r.BYTE;
                default:
                    throw new Error("Unknown mode: " + t)
            }
        }
        r.from = function(n, i) {
            if (r.isValid(n)) return n;
            try {
                return e(n)
            } catch {
                return i
            }
        }
    }(ft)), ft
}
var Ot;

function Ie() {
    return Ot || (Ot = 1, function(r) {
        const o = V(),
            u = ee(),
            e = At(),
            t = _(),
            n = ne(),
            i = 7973,
            a = o.getBCHDigit(i);

        function s(R, g, M) {
            for (let w = 1; w <= 40; w++)
                if (g <= r.getCapacity(w, M, R)) return w
        }

        function f(R, g) {
            return t.getCharCountIndicator(R, g) + 4
        }

        function y(R, g) {
            let M = 0;
            return R.forEach(function(w) {
                const S = f(w.mode, g);
                M += S + w.getBitsLength()
            }), M
        }

        function N(R, g) {
            for (let M = 1; M <= 40; M++)
                if (y(R, M) <= r.getCapacity(M, g, t.MIXED)) return M
        }
        r.from = function(g, M) {
            return n.isValid(g) ? parseInt(g, 10) : M
        }, r.getCapacity = function(g, M, w) {
            if (!n.isValid(g)) throw new Error("Invalid QR Code version");
            typeof w > "u" && (w = t.BYTE);
            const S = o.getSymbolTotalCodewords(g),
                d = u.getTotalCodewordsCount(g, M),
                l = (S - d) * 8;
            if (w === t.MIXED) return l;
            const h = l - f(w, g);
            switch (w) {
                case t.NUMERIC:
                    return Math.floor(h / 10 * 3);
                case t.ALPHANUMERIC:
                    return Math.floor(h / 11 * 2);
                case t.KANJI:
                    return Math.floor(h / 13);
                case t.BYTE:
                default:
                    return Math.floor(h / 8)
            }
        }, r.getBestVersionForData = function(g, M) {
            let w;
            const S = e.from(M, e.M);
            if (Array.isArray(g)) {
                if (g.length > 1) return N(g, S);
                if (g.length === 0) return 1;
                w = g[0]
            } else w = g;
            return s(w.mode, w.getLength(), S)
        }, r.getEncodedBits = function(g) {
            if (!n.isValid(g) || g < 7) throw new Error("Invalid QR Code version");
            let M = g << 12;
            for (; o.getBCHDigit(M) - a >= 0;) M ^= i << o.getBCHDigit(M) - a;
            return g << 12 | M
        }
    }(lt)), lt
}
var ht = {},
    Kt;

function Ne() {
    if (Kt) return ht;
    Kt = 1;
    const r = V(),
        o = 1335,
        u = 21522,
        e = r.getBCHDigit(o);
    return ht.getEncodedBits = function(n, i) {
        const a = n.bit << 3 | i;
        let s = a << 10;
        for (; r.getBCHDigit(s) - e >= 0;) s ^= o << r.getBCHDigit(s) - e;
        return (a << 10 | s) ^ u
    }, ht
}
var gt = {},
    mt, Ht;

function Se() {
    if (Ht) return mt;
    Ht = 1;
    const r = _();

    function o(u) {
        this.mode = r.NUMERIC, this.data = u.toString()
    }
    return o.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
    }, o.prototype.getLength = function() {
        return this.data.length
    }, o.prototype.getBitsLength = function() {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function(e) {
        let t, n, i;
        for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), i = parseInt(n, 10), e.put(i, 10);
        const a = this.data.length - t;
        a > 0 && (n = this.data.substr(t), i = parseInt(n, 10), e.put(i, a * 3 + 1))
    }, mt = o, mt
}
var wt, Jt;

function be() {
    if (Jt) return wt;
    Jt = 1;
    const r = _(),
        o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function u(e) {
        this.mode = r.ALPHANUMERIC, this.data = e
    }
    return u.getBitsLength = function(t) {
        return 11 * Math.floor(t / 2) + 6 * (t % 2)
    }, u.prototype.getLength = function() {
        return this.data.length
    }, u.prototype.getBitsLength = function() {
        return u.getBitsLength(this.data.length)
    }, u.prototype.write = function(t) {
        let n;
        for (n = 0; n + 2 <= this.data.length; n += 2) {
            let i = o.indexOf(this.data[n]) * 45;
            i += o.indexOf(this.data[n + 1]), t.put(i, 11)
        }
        this.data.length % 2 && t.put(o.indexOf(this.data[n]), 6)
    }, wt = u, wt
}
var Ct, Yt;

function Me() {
    if (Yt) return Ct;
    Yt = 1;
    const r = de(),
        o = _();

    function u(e) {
        this.mode = o.BYTE, typeof e == "string" && (e = r(e)), this.data = new Uint8Array(e)
    }
    return u.getBitsLength = function(t) {
        return t * 8
    }, u.prototype.getLength = function() {
        return this.data.length
    }, u.prototype.getBitsLength = function() {
        return u.getBitsLength(this.data.length)
    }, u.prototype.write = function(e) {
        for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
    }, Ct = u, Ct
}
var Et, Gt;

function Te() {
    if (Gt) return Et;
    Gt = 1;
    const r = _(),
        o = V();

    function u(e) {
        this.mode = r.KANJI, this.data = e
    }
    return u.getBitsLength = function(t) {
        return t * 13
    }, u.prototype.getLength = function() {
        return this.data.length
    }, u.prototype.getBitsLength = function() {
        return u.getBitsLength(this.data.length)
    }, u.prototype.write = function(e) {
        let t;
        for (t = 0; t < this.data.length; t++) {
            let n = o.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
            n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
        }
    }, Et = u, Et
}
var Qt;

function Pe() {
    return Qt || (Qt = 1, function(r) {
        const o = _(),
            u = Se(),
            e = be(),
            t = Me(),
            n = Te(),
            i = re(),
            a = V(),
            s = he();

        function f(d) {
            return unescape(encodeURIComponent(d)).length
        }

        function y(d, l, h) {
            const c = [];
            let P;
            for (;
                (P = d.exec(h)) !== null;) c.push({
                data: P[0],
                index: P.index,
                mode: l,
                length: P[0].length
            });
            return c
        }

        function N(d) {
            const l = y(i.NUMERIC, o.NUMERIC, d),
                h = y(i.ALPHANUMERIC, o.ALPHANUMERIC, d);
            let c, P;
            return a.isKanjiModeEnabled() ? (c = y(i.BYTE, o.BYTE, d), P = y(i.KANJI, o.KANJI, d)) : (c = y(i.BYTE_KANJI, o.BYTE, d), P = []), l.concat(h, c, P).sort(function(A, B) {
                return A.index - B.index
            }).map(function(A) {
                return {
                    data: A.data,
                    mode: A.mode,
                    length: A.length
                }
            })
        }

        function R(d, l) {
            switch (l) {
                case o.NUMERIC:
                    return u.getBitsLength(d);
                case o.ALPHANUMERIC:
                    return e.getBitsLength(d);
                case o.KANJI:
                    return n.getBitsLength(d);
                case o.BYTE:
                    return t.getBitsLength(d)
            }
        }

        function g(d) {
            return d.reduce(function(l, h) {
                const c = l.length - 1 >= 0 ? l[l.length - 1] : null;
                return c && c.mode === h.mode ? (l[l.length - 1].data += h.data, l) : (l.push(h), l)
            }, [])
        }

        function M(d) {
            const l = [];
            for (let h = 0; h < d.length; h++) {
                const c = d[h];
                switch (c.mode) {
                    case o.NUMERIC:
                        l.push([c, {
                            data: c.data,
                            mode: o.ALPHANUMERIC,
                            length: c.length
                        }, {
                            data: c.data,
                            mode: o.BYTE,
                            length: c.length
                        }]);
                        break;
                    case o.ALPHANUMERIC:
                        l.push([c, {
                            data: c.data,
                            mode: o.BYTE,
                            length: c.length
                        }]);
                        break;
                    case o.KANJI:
                        l.push([c, {
                            data: c.data,
                            mode: o.BYTE,
                            length: f(c.data)
                        }]);
                        break;
                    case o.BYTE:
                        l.push([{
                            data: c.data,
                            mode: o.BYTE,
                            length: f(c.data)
                        }])
                }
            }
            return l
        }

        function w(d, l) {
            const h = {},
                c = {
                    start: {}
                };
            let P = ["start"];
            for (let C = 0; C < d.length; C++) {
                const A = d[C],
                    B = [];
                for (let m = 0; m < A.length; m++) {
                    const b = A[m],
                        E = "" + C + m;
                    B.push(E), h[E] = {
                        node: b,
                        lastCount: 0
                    }, c[E] = {};
                    for (let I = 0; I < P.length; I++) {
                        const p = P[I];
                        h[p] && h[p].node.mode === b.mode ? (c[p][E] = R(h[p].lastCount + b.length, b.mode) - R(h[p].lastCount, b.mode), h[p].lastCount += b.length) : (h[p] && (h[p].lastCount = b.length), c[p][E] = R(b.length, b.mode) + 4 + o.getCharCountIndicator(b.mode, l))
                    }
                }
                P = B
            }
            for (let C = 0; C < P.length; C++) c[P[C]].end = 0;
            return {
                map: c,
                table: h
            }
        }

        function S(d, l) {
            let h;
            const c = o.getBestModeForData(d);
            if (h = o.from(l, c), h !== o.BYTE && h.bit < c.bit) throw new Error('"' + d + '" cannot be encoded with mode ' + o.toString(h) + `.
 Suggested mode is: ` + o.toString(c));
            switch (h === o.KANJI && !a.isKanjiModeEnabled() && (h = o.BYTE), h) {
                case o.NUMERIC:
                    return new u(d);
                case o.ALPHANUMERIC:
                    return new e(d);
                case o.KANJI:
                    return new n(d);
                case o.BYTE:
                    return new t(d)
            }
        }
        r.fromArray = function(l) {
            return l.reduce(function(h, c) {
                return typeof c == "string" ? h.push(S(c, null)) : c.data && h.push(S(c.data, c.mode)), h
            }, [])
        }, r.fromString = function(l, h) {
            const c = N(l, a.isKanjiModeEnabled()),
                P = M(c),
                C = w(P, h),
                A = s.find_path(C.map, "start", "end"),
                B = [];
            for (let m = 1; m < A.length - 1; m++) B.push(C.table[A[m]].node);
            return r.fromArray(g(B))
        }, r.rawSplit = function(l) {
            return r.fromArray(N(l, a.isKanjiModeEnabled()))
        }
    }(gt)), gt
}
var jt;

function Le() {
    if (jt) return et;
    jt = 1;
    const r = V(),
        o = At(),
        u = we(),
        e = Ce(),
        t = Ee(),
        n = pe(),
        i = ye(),
        a = ee(),
        s = Ae(),
        f = Ie(),
        y = Ne(),
        N = _(),
        R = Pe();

    function g(C, A) {
        const B = C.size,
            m = n.getPositions(A);
        for (let b = 0; b < m.length; b++) {
            const E = m[b][0],
                I = m[b][1];
            for (let p = -1; p <= 7; p++)
                if (!(E + p <= -1 || B <= E + p))
                    for (let T = -1; T <= 7; T++) I + T <= -1 || B <= I + T || (p >= 0 && p <= 6 && (T === 0 || T === 6) || T >= 0 && T <= 6 && (p === 0 || p === 6) || p >= 2 && p <= 4 && T >= 2 && T <= 4 ? C.set(E + p, I + T, !0, !0) : C.set(E + p, I + T, !1, !0))
        }
    }

    function M(C) {
        const A = C.size;
        for (let B = 8; B < A - 8; B++) {
            const m = B % 2 === 0;
            C.set(B, 6, m, !0), C.set(6, B, m, !0)
        }
    }

    function w(C, A) {
        const B = t.getPositions(A);
        for (let m = 0; m < B.length; m++) {
            const b = B[m][0],
                E = B[m][1];
            for (let I = -2; I <= 2; I++)
                for (let p = -2; p <= 2; p++) I === -2 || I === 2 || p === -2 || p === 2 || I === 0 && p === 0 ? C.set(b + I, E + p, !0, !0) : C.set(b + I, E + p, !1, !0)
        }
    }

    function S(C, A) {
        const B = C.size,
            m = f.getEncodedBits(A);
        let b, E, I;
        for (let p = 0; p < 18; p++) b = Math.floor(p / 3), E = p % 3 + B - 8 - 3, I = (m >> p & 1) === 1, C.set(b, E, I, !0), C.set(E, b, I, !0)
    }

    function d(C, A, B) {
        const m = C.size,
            b = y.getEncodedBits(A, B);
        let E, I;
        for (E = 0; E < 15; E++) I = (b >> E & 1) === 1, E < 6 ? C.set(E, 8, I, !0) : E < 8 ? C.set(E + 1, 8, I, !0) : C.set(m - 15 + E, 8, I, !0), E < 8 ? C.set(8, m - E - 1, I, !0) : E < 9 ? C.set(8, 15 - E - 1 + 1, I, !0) : C.set(8, 15 - E - 1, I, !0);
        C.set(m - 8, 8, 1, !0)
    }

    function l(C, A) {
        const B = C.size;
        let m = -1,
            b = B - 1,
            E = 7,
            I = 0;
        for (let p = B - 1; p > 0; p -= 2)
            for (p === 6 && p--;;) {
                for (let T = 0; T < 2; T++)
                    if (!C.isReserved(b, p - T)) {
                        let F = !1;
                        I < A.length && (F = (A[I] >>> E & 1) === 1), C.set(b, p - T, F), E--, E === -1 && (I++, E = 7)
                    }
                if (b += m, b < 0 || B <= b) {
                    b -= m, m = -m;
                    break
                }
            }
    }

    function h(C, A, B) {
        const m = new u;
        B.forEach(function(T) {
            m.put(T.mode.bit, 4), m.put(T.getLength(), N.getCharCountIndicator(T.mode, C)), T.write(m)
        });
        const b = r.getSymbolTotalCodewords(C),
            E = a.getTotalCodewordsCount(C, A),
            I = (b - E) * 8;
        for (m.getLengthInBits() + 4 <= I && m.put(0, 4); m.getLengthInBits() % 8 !== 0;) m.putBit(0);
        const p = (I - m.getLengthInBits()) / 8;
        for (let T = 0; T < p; T++) m.put(T % 2 ? 17 : 236, 8);
        return c(m, C, A)
    }

    function c(C, A, B) {
        const m = r.getSymbolTotalCodewords(A),
            b = a.getTotalCodewordsCount(A, B),
            E = m - b,
            I = a.getBlocksCount(A, B),
            p = m % I,
            T = I - p,
            F = Math.floor(m / I),
            H = Math.floor(E / I),
            ie = H + 1,
            It = F - H,
            se = new s(It);
        let W = 0;
        const Y = new Array(I),
            Nt = new Array(I);
        let X = 0;
        const ue = new Uint8Array(C.buffer);
        for (let O = 0; O < I; O++) {
            const x = O < T ? H : ie;
            Y[O] = ue.slice(W, W + x), Nt[O] = se.encode(Y[O]), W += x, X = Math.max(X, x)
        }
        const Z = new Uint8Array(m);
        let St = 0,
            D, q;
        for (D = 0; D < X; D++)
            for (q = 0; q < I; q++) D < Y[q].length && (Z[St++] = Y[q][D]);
        for (D = 0; D < It; D++)
            for (q = 0; q < I; q++) Z[St++] = Nt[q][D];
        return Z
    }

    function P(C, A, B, m) {
        let b;
        if (Array.isArray(C)) b = R.fromArray(C);
        else if (typeof C == "string") {
            let F = A;
            if (!F) {
                const H = R.rawSplit(C);
                F = f.getBestVersionForData(H, B)
            }
            b = R.fromString(C, F || 40)
        } else throw new Error("Invalid data");
        const E = f.getBestVersionForData(b, B);
        if (!E) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!A) A = E;
        else if (A < E) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + E + `.
`);
        const I = h(A, B, b),
            p = r.getSymbolSize(A),
            T = new e(p);
        return g(T, A), M(T), w(T, A), d(T, B, 0), A >= 7 && S(T, A), l(T, I), isNaN(m) && (m = i.getBestMask(T, d.bind(null, T, B))), i.applyMask(m, T), d(T, B, m), {
            modules: T,
            version: A,
            errorCorrectionLevel: B,
            maskPattern: m,
            segments: b
        }
    }
    return et.create = function(A, B) {
        if (typeof A > "u" || A === "") throw new Error("No input text");
        let m = o.M,
            b, E;
        return typeof B < "u" && (m = o.from(B.errorCorrectionLevel, o.M), b = f.from(B.version), E = i.from(B.maskPattern), B.toSJISFunc && r.setToSJISFunction(B.toSJISFunc)), P(A, b, m, E)
    }, et
}
var pt = {},
    yt = {},
    Wt;

function oe() {
    return Wt || (Wt = 1, function(r) {
        function o(u) {
            if (typeof u == "number" && (u = u.toString()), typeof u != "string") throw new Error("Color should be defined as hex string");
            let e = u.slice().replace("#", "").split("");
            if (e.length < 3 || e.length === 5 || e.length > 8) throw new Error("Invalid hex color: " + u);
            (e.length === 3 || e.length === 4) && (e = Array.prototype.concat.apply([], e.map(function(n) {
                return [n, n]
            }))), e.length === 6 && e.push("F", "F");
            const t = parseInt(e.join(""), 16);
            return {
                r: t >> 24 & 255,
                g: t >> 16 & 255,
                b: t >> 8 & 255,
                a: t & 255,
                hex: "#" + e.slice(0, 6).join("")
            }
        }
        r.getOptions = function(e) {
            e || (e = {}), e.color || (e.color = {});
            const t = typeof e.margin > "u" || e.margin === null || e.margin < 0 ? 4 : e.margin,
                n = e.width && e.width >= 21 ? e.width : void 0,
                i = e.scale || 4;
            return {
                width: n,
                scale: n ? 4 : i,
                margin: t,
                color: {
                    dark: o(e.color.dark || "#000000ff"),
                    light: o(e.color.light || "#ffffffff")
                },
                type: e.type,
                rendererOpts: e.rendererOpts || {}
            }
        }, r.getScale = function(e, t) {
            return t.width && t.width >= e + t.margin * 2 ? t.width / (e + t.margin * 2) : t.scale
        }, r.getImageWidth = function(e, t) {
            const n = r.getScale(e, t);
            return Math.floor((e + t.margin * 2) * n)
        }, r.qrToImageData = function(e, t, n) {
            const i = t.modules.size,
                a = t.modules.data,
                s = r.getScale(i, n),
                f = Math.floor((i + n.margin * 2) * s),
                y = n.margin * s,
                N = [n.color.light, n.color.dark];
            for (let R = 0; R < f; R++)
                for (let g = 0; g < f; g++) {
                    let M = (R * f + g) * 4,
                        w = n.color.light;
                    if (R >= y && g >= y && R < f - y && g < f - y) {
                        const S = Math.floor((R - y) / s),
                            d = Math.floor((g - y) / s);
                        w = N[a[S * i + d] ? 1 : 0]
                    }
                    e[M++] = w.r, e[M++] = w.g, e[M++] = w.b, e[M] = w.a
                }
        }
    }(yt)), yt
}
var Xt;

function ve() {
    return Xt || (Xt = 1, function(r) {
        const o = oe();

        function u(t, n, i) {
            t.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = i, n.width = i, n.style.height = i + "px", n.style.width = i + "px"
        }

        function e() {
            try {
                return document.createElement("canvas")
            } catch {
                throw new Error("You need to specify a canvas element")
            }
        }
        r.render = function(n, i, a) {
            let s = a,
                f = i;
            typeof s > "u" && (!i || !i.getContext) && (s = i, i = void 0), i || (f = e()), s = o.getOptions(s);
            const y = o.getImageWidth(n.modules.size, s),
                N = f.getContext("2d"),
                R = N.createImageData(y, y);
            return o.qrToImageData(R.data, n, s), u(N, f, y), N.putImageData(R, 0, 0), f
        }, r.renderToDataURL = function(n, i, a) {
            let s = a;
            typeof s > "u" && (!i || !i.getContext) && (s = i, i = void 0), s || (s = {});
            const f = r.render(n, i, s),
                y = s.type || "image/png",
                N = s.rendererOpts || {};
            return f.toDataURL(y, N.quality)
        }
    }(pt)), pt
}
var Bt = {},
    Zt;

function De() {
    if (Zt) return Bt;
    Zt = 1;
    const r = oe();

    function o(t, n) {
        const i = t.a / 255,
            a = n + '="' + t.hex + '"';
        return i < 1 ? a + " " + n + '-opacity="' + i.toFixed(2).slice(1) + '"' : a
    }

    function u(t, n, i) {
        let a = t + n;
        return typeof i < "u" && (a += " " + i), a
    }

    function e(t, n, i) {
        let a = "",
            s = 0,
            f = !1,
            y = 0;
        for (let N = 0; N < t.length; N++) {
            const R = Math.floor(N % n),
                g = Math.floor(N / n);
            !R && !f && (f = !0), t[N] ? (y++, N > 0 && R > 0 && t[N - 1] || (a += f ? u("M", R + i, .5 + g + i) : u("m", s, 0), s = 0, f = !1), R + 1 < n && t[N + 1] || (a += u("h", y), y = 0)) : s++
        }
        return a
    }
    return Bt.render = function(n, i, a) {
        const s = r.getOptions(i),
            f = n.modules.size,
            y = n.modules.data,
            N = f + s.margin * 2,
            R = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + N + "v" + N + 'H0z"/>' : "",
            g = "<path " + o(s.color.dark, "stroke") + ' d="' + e(y, f, s.margin) + '"/>',
            M = 'viewBox="0 0 ' + N + " " + N + '"',
            S = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + M + ' shape-rendering="crispEdges">' + R + g + `</svg>
`;
        return typeof a == "function" && a(null, S), S
    }, Bt
}
var xt;

function qe() {
    if (xt) return K;
    xt = 1;
    const r = me(),
        o = Le(),
        u = ve(),
        e = De();

    function t(n, i, a, s, f) {
        const y = [].slice.call(arguments, 1),
            N = y.length,
            R = typeof y[N - 1] == "function";
        if (!R && !r()) throw new Error("Callback required as last argument");
        if (R) {
            if (N < 2) throw new Error("Too few arguments provided");
            N === 2 ? (f = a, a = i, i = s = void 0) : N === 3 && (i.getContext && typeof f > "u" ? (f = s, s = void 0) : (f = s, s = a, a = i, i = void 0))
        } else {
            if (N < 1) throw new Error("Too few arguments provided");
            return N === 1 ? (a = i, i = s = void 0) : N === 2 && !i.getContext && (s = a, a = i, i = void 0), new Promise(function(g, M) {
                try {
                    const w = o.create(a, s);
                    g(n(w, i, s))
                } catch (w) {
                    M(w)
                }
            })
        }
        try {
            const g = o.create(a, s);
            f(null, n(g, i, s))
        } catch (g) {
            f(g)
        }
    }
    return K.create = o.create, K.toCanvas = t.bind(null, u.render), K.toDataURL = t.bind(null, u.renderToDataURL), K.toString = t.bind(null, function(n, i, a) {
        return e.render(n, a)
    }), K
}
var Ue = qe();
const ke = fe(Ue),
    Fe = .1,
    te = 2.5,
    U = 7;

function Rt(r, o, u) {
    return r === o ? !1 : (r - o < 0 ? o - r : r - o) <= u + Fe
}

function ze(r, o) {
    const u = Array.prototype.slice.call(ke.create(r, {
            errorCorrectionLevel: o
        }).modules.data, 0),
        e = Math.sqrt(u.length);
    return u.reduce((t, n, i) => (i % e === 0 ? t.push([n]) : t[t.length - 1].push(n)) && t, [])
}
const $e = {
        generate({
            uri: r,
            size: o,
            logoSize: u,
            dotColor: e = "#141414"
        }) {
            const t = "transparent",
                i = [],
                a = ze(r, "Q"),
                s = o / a.length,
                f = [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 0,
                    y: 1
                }];
            f.forEach(({
                x: w,
                y: S
            }) => {
                const d = (a.length - U) * s * w,
                    l = (a.length - U) * s * S,
                    h = .45;
                for (let c = 0; c < f.length; c += 1) {
                    const P = s * (U - c * 2);
                    i.push(j `
            <rect
              fill=${c===2?e:t}
              width=${c===0?P-5:P}
              rx= ${c===0?(P-5)*h:P*h}
              ry= ${c===0?(P-5)*h:P*h}
              stroke=${e}
              stroke-width=${c===0?5:0}
              height=${c===0?P-5:P}
              x= ${c===0?l+s*c+5/2:l+s*c}
              y= ${c===0?d+s*c+5/2:d+s*c}
            />
          `)
                }
            });
            const y = Math.floor((u + 25) / s),
                N = a.length / 2 - y / 2,
                R = a.length / 2 + y / 2 - 1,
                g = [];
            a.forEach((w, S) => {
                w.forEach((d, l) => {
                    if (a[S][l] && !(S < U && l < U || S > a.length - (U + 1) && l < U || S < U && l > a.length - (U + 1)) && !(S > N && S < R && l > N && l < R)) {
                        const h = S * s + s / 2,
                            c = l * s + s / 2;
                        g.push([h, c])
                    }
                })
            });
            const M = {};
            return g.forEach(([w, S]) => {
                var d;
                M[w] ? (d = M[w]) == null || d.push(S) : M[w] = [S]
            }), Object.entries(M).map(([w, S]) => {
                const d = S.filter(l => S.every(h => !Rt(l, h, s)));
                return [Number(w), d]
            }).forEach(([w, S]) => {
                S.forEach(d => {
                    i.push(j `<circle cx=${w} cy=${d} fill=${e} r=${s/te} />`)
                })
            }), Object.entries(M).filter(([w, S]) => S.length > 1).map(([w, S]) => {
                const d = S.filter(l => S.some(h => Rt(l, h, s)));
                return [Number(w), d]
            }).map(([w, S]) => {
                S.sort((l, h) => l < h ? -1 : 1);
                const d = [];
                for (const l of S) {
                    const h = d.find(c => c.some(P => Rt(l, P, s)));
                    h ? h.push(l) : d.push([l])
                }
                return [w, d.map(l => [l[0], l[l.length - 1]])]
            }).forEach(([w, S]) => {
                S.forEach(([d, l]) => {
                    i.push(j `
              <line
                x1=${w}
                x2=${w}
                y1=${d}
                y2=${l}
                stroke=${e}
                stroke-width=${s/(te/2)}
                stroke-linecap="round"
              />
            `)
                })
            }), i
        }
    },
    Ve = ae `
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
var k = function(r, o, u, e) {
    var t = arguments.length,
        n = t < 3 ? o : e === null ? e = Object.getOwnPropertyDescriptor(o, u) : e,
        i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(r, o, u, e);
    else
        for (var a = r.length - 1; a >= 0; a--)(i = r[a]) && (n = (t < 3 ? i(n) : t > 3 ? i(o, u, n) : i(o, u)) || n);
    return t > 3 && n && Object.defineProperty(o, u, n), n
};
const _e = "#3396ff";
let L = class extends ce {
    constructor() {
        super(...arguments), this.uri = "", this.size = 0, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0, this.arenaClear = void 0, this.farcaster = void 0
    }
    render() {
        return this.dataset.theme = this.theme, this.dataset.clear = String(this.arenaClear), this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??_e}
    `, G `${this.templateVisual()} ${this.templateSvg()}`
    }
    templateSvg() {
        const o = this.theme === "light" ? this.size : this.size - 32;
        return j `
      <svg height=${o} width=${o}>
        ${$e.generate({uri:this.uri,size:o,logoSize:this.arenaClear?0:o/4,dotColor:this.color})}
      </svg>
    `
    }
    templateVisual() {
        return this.imageSrc ? G `<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>` : this.farcaster ? G `<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>` : G `<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`
    }
};
L.styles = [ge, Ve];
k([$()], L.prototype, "uri", void 0);
k([$({
    type: Number
})], L.prototype, "size", void 0);
k([$()], L.prototype, "theme", void 0);
k([$()], L.prototype, "imageSrc", void 0);
k([$()], L.prototype, "alt", void 0);
k([$()], L.prototype, "color", void 0);
k([$({
    type: Boolean
})], L.prototype, "arenaClear", void 0);
k([$({
    type: Boolean
})], L.prototype, "farcaster", void 0);
L = k([le("wui-qr-code")], L);