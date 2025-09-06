var Pc = Object.defineProperty;
var Tc = (e, t, o) => t in e ? Pc(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : e[t] = o;
var Vo = (e, t, o) => Tc(e, typeof t != "symbol" ? t + "" : t, o);
import {
    r as Ec,
    g as Ha,
    a as Mc
} from "./react-vendor-1qCqAHqt.js";

function Ic(e, t) {
    for (var o = 0; o < t.length; o++) {
        const r = t[o];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const n in r)
                if (n !== "default" && !(n in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, n);
                    i && Object.defineProperty(e, n, i.get ? i : {
                        enumerable: !0,
                        get: () => r[n]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var On = {
        exports: {}
    },
    Go = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;

function Ac() {
    if (ls) return Go;
    ls = 1;
    var e = Symbol.for("react.transitional.element"),
        t = Symbol.for("react.fragment");

    function o(r, n, i) {
        var s = null;
        if (i !== void 0 && (s = "" + i), n.key !== void 0 && (s = "" + n.key), "key" in n) {
            i = {};
            for (var a in n) a !== "key" && (i[a] = n[a])
        } else i = n;
        return n = i.ref, {
            $$typeof: e,
            type: r,
            key: s,
            ref: n !== void 0 ? n : null,
            props: i
        }
    }
    return Go.Fragment = t, Go.jsx = o, Go.jsxs = o, Go
}
var cs;

function Oc() {
    return cs || (cs = 1, On.exports = Ac()), On.exports
}
var $ = Oc(),
    u = Ec();
const jt = Ha(u),
    Kr = Ic({
        __proto__: null,
        default: jt
    }, [u]);
var Ua = Mc();
const Tr = Ha(Ua),
    dr = {
        black: "#000",
        white: "#fff"
    },
    Co = {
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        700: "#d32f2f",
        800: "#c62828"
    },
    wo = {
        50: "#f3e5f5",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        700: "#7b1fa2"
    },
    Ro = {
        50: "#e3f2fd",
        200: "#90caf9",
        400: "#42a5f5",
        700: "#1976d2",
        800: "#1565c0"
    },
    $o = {
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        700: "#0288d1",
        900: "#01579b"
    },
    ko = {
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20"
    },
    Ko = {
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        700: "#f57c00",
        900: "#e65100"
    },
    Bc = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161"
    };

function Ut(e, ...t) {
    const o = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach(r => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`
}
const xt = "$$material";

function qr() {
    return qr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o)({}).hasOwnProperty.call(o, r) && (e[r] = o[r])
        }
        return e
    }, qr.apply(null, arguments)
}

function Lc(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function Nc(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}
var jc = function() {
        function e(o) {
            var r = this;
            this._insertTag = function(n) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(n, i), r.tags.push(n)
            }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(r) {
            r.forEach(this._insertTag)
        }, t.insert = function(r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Nc(this));
            var n = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = Lc(n);
                try {
                    i.insertRule(r, i.cssRules.length)
                } catch {}
            } else n.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach(function(r) {
                var n;
                return (n = r.parentNode) == null ? void 0 : n.removeChild(r)
            }), this.tags = [], this.ctr = 0
        }, e
    }(),
    ot = "-ms-",
    Xr = "-moz-",
    $e = "-webkit-",
    _a = "comm",
    ki = "rule",
    Pi = "decl",
    zc = "@import",
    Va = "@keyframes",
    Fc = "@layer",
    Dc = Math.abs,
    rn = String.fromCharCode,
    Wc = Object.assign;

function Hc(e, t) {
    return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0
}

function Ga(e) {
    return e.trim()
}

function Uc(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}

function ke(e, t, o) {
    return e.replace(t, o)
}

function Jn(e, t) {
    return e.indexOf(t)
}

function Ze(e, t) {
    return e.charCodeAt(t) | 0
}

function ur(e, t, o) {
    return e.slice(t, o)
}

function Ot(e) {
    return e.length
}

function Ti(e) {
    return e.length
}

function Er(e, t) {
    return t.push(e), e
}

function _c(e, t) {
    return e.map(t).join("")
}
var nn = 1,
    Ao = 1,
    Ka = 0,
    lt = 0,
    Ke = 0,
    Wo = "";

function sn(e, t, o, r, n, i, s) {
    return {
        value: e,
        root: t,
        parent: o,
        type: r,
        props: n,
        children: i,
        line: nn,
        column: Ao,
        length: s,
        return: ""
    }
}

function qo(e, t) {
    return Wc(sn("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}

function Vc() {
    return Ke
}

function Gc() {
    return Ke = lt > 0 ? Ze(Wo, --lt) : 0, Ao--, Ke === 10 && (Ao = 1, nn--), Ke
}

function ft() {
    return Ke = lt < Ka ? Ze(Wo, lt++) : 0, Ao++, Ke === 10 && (Ao = 1, nn++), Ke
}

function zt() {
    return Ze(Wo, lt)
}

function Dr() {
    return lt
}

function Sr(e, t) {
    return ur(Wo, e, t)
}

function pr(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function qa(e) {
    return nn = Ao = 1, Ka = Ot(Wo = e), lt = 0, []
}

function Xa(e) {
    return Wo = "", e
}

function Wr(e) {
    return Ga(Sr(lt - 1, Zn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function Kc(e) {
    for (;
        (Ke = zt()) && Ke < 33;) ft();
    return pr(e) > 2 || pr(Ke) > 3 ? "" : " "
}

function qc(e, t) {
    for (; --t && ft() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97););
    return Sr(e, Dr() + (t < 6 && zt() == 32 && ft() == 32))
}

function Zn(e) {
    for (; ft();) switch (Ke) {
        case e:
            return lt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Zn(Ke);
            break;
        case 40:
            e === 41 && Zn(e);
            break;
        case 92:
            ft();
            break
    }
    return lt
}

function Xc(e, t) {
    for (; ft() && e + Ke !== 57;)
        if (e + Ke === 84 && zt() === 47) break;
    return "/*" + Sr(t, lt - 1) + "*" + rn(e === 47 ? e : ft())
}

function Yc(e) {
    for (; !pr(zt());) ft();
    return Sr(e, lt)
}

function Qc(e) {
    return Xa(Hr("", null, null, null, [""], e = qa(e), 0, [0], e))
}

function Hr(e, t, o, r, n, i, s, a, l) {
    for (var c = 0, d = 0, p = s, b = 0, h = 0, g = 0, m = 1, v = 1, x = 1, w = 0, S = "", y = n, C = i, R = r, k = S; v;) switch (g = w, w = ft()) {
        case 40:
            if (g != 108 && Ze(k, p - 1) == 58) {
                Jn(k += ke(Wr(w), "&", "&\f"), "&\f") != -1 && (x = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            k += Wr(w);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            k += Kc(g);
            break;
        case 92:
            k += qc(Dr() - 1, 7);
            continue;
        case 47:
            switch (zt()) {
                case 42:
                case 47:
                    Er(Jc(Xc(ft(), Dr()), t, o), l);
                    break;
                default:
                    k += "/"
            }
            break;
        case 123 * m:
            a[c++] = Ot(k) * x;
        case 125 * m:
        case 59:
        case 0:
            switch (w) {
                case 0:
                case 125:
                    v = 0;
                case 59 + d:
                    x == -1 && (k = ke(k, /\f/g, "")), h > 0 && Ot(k) - p && Er(h > 32 ? us(k + ";", r, o, p - 1) : us(ke(k, " ", "") + ";", r, o, p - 2), l);
                    break;
                case 59:
                    k += ";";
                default:
                    if (Er(R = ds(k, t, o, c, d, n, a, S, y = [], C = [], p), i), w === 123)
                        if (d === 0) Hr(k, t, R, R, y, i, p, a, C);
                        else switch (b === 99 && Ze(k, 3) === 110 ? 100 : b) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Hr(e, R, R, r && Er(ds(e, R, R, 0, 0, n, a, S, n, y = [], p), C), n, C, p, a, r ? y : C);
                                break;
                            default:
                                Hr(k, R, R, R, [""], C, 0, a, C)
                        }
            }
            c = d = h = 0, m = x = 1, S = k = "", p = s;
            break;
        case 58:
            p = 1 + Ot(k), h = g;
        default:
            if (m < 1) {
                if (w == 123) --m;
                else if (w == 125 && m++ == 0 && Gc() == 125) continue
            }
            switch (k += rn(w), w * m) {
                case 38:
                    x = d > 0 ? 1 : (k += "\f", -1);
                    break;
                case 44:
                    a[c++] = (Ot(k) - 1) * x, x = 1;
                    break;
                case 64:
                    zt() === 45 && (k += Wr(ft())), b = zt(), d = p = Ot(S = k += Yc(Dr())), w++;
                    break;
                case 45:
                    g === 45 && Ot(k) == 2 && (m = 0)
            }
    }
    return i
}

function ds(e, t, o, r, n, i, s, a, l, c, d) {
    for (var p = n - 1, b = n === 0 ? i : [""], h = Ti(b), g = 0, m = 0, v = 0; g < r; ++g)
        for (var x = 0, w = ur(e, p + 1, p = Dc(m = s[g])), S = e; x < h; ++x)(S = Ga(m > 0 ? b[x] + " " + w : ke(w, /&\f/g, b[x]))) && (l[v++] = S);
    return sn(e, t, o, n === 0 ? ki : a, l, c, d)
}

function Jc(e, t, o) {
    return sn(e, t, o, _a, rn(Vc()), ur(e, 2, -2), 0)
}

function us(e, t, o, r) {
    return sn(e, t, o, Pi, ur(e, 0, r), ur(e, r + 1, -1), r)
}

function Mo(e, t) {
    for (var o = "", r = Ti(e), n = 0; n < r; n++) o += t(e[n], n, e, t) || "";
    return o
}

function Zc(e, t, o, r) {
    switch (e.type) {
        case Fc:
            if (e.children.length) break;
        case zc:
        case Pi:
            return e.return = e.return || e.value;
        case _a:
            return "";
        case Va:
            return e.return = e.value + "{" + Mo(e.children, r) + "}";
        case ki:
            e.value = e.props.join(",")
    }
    return Ot(o = Mo(e.children, r)) ? e.return = e.value + "{" + o + "}" : ""
}

function ed(e) {
    var t = Ti(e);
    return function(o, r, n, i) {
        for (var s = "", a = 0; a < t; a++) s += e[a](o, r, n, i) || "";
        return s
    }
}

function td(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var od = function(t, o, r) {
        for (var n = 0, i = 0; n = i, i = zt(), n === 38 && i === 12 && (o[r] = 1), !pr(i);) ft();
        return Sr(t, lt)
    },
    rd = function(t, o) {
        var r = -1,
            n = 44;
        do switch (pr(n)) {
            case 0:
                n === 38 && zt() === 12 && (o[r] = 1), t[r] += od(lt - 1, o, r);
                break;
            case 2:
                t[r] += Wr(n);
                break;
            case 4:
                if (n === 44) {
                    t[++r] = zt() === 58 ? "&\f" : "", o[r] = t[r].length;
                    break
                }
            default:
                t[r] += rn(n)
        }
        while (n = ft());
        return t
    },
    nd = function(t, o) {
        return Xa(rd(qa(t), o))
    },
    ps = new WeakMap,
    id = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var o = t.value, r = t.parent, n = t.column === r.column && t.line === r.line; r.type !== "rule";)
                if (r = r.parent, !r) return;
            if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !ps.get(r)) && !n) {
                ps.set(t, !0);
                for (var i = [], s = nd(o, i), a = r.props, l = 0, c = 0; l < s.length; l++)
                    for (var d = 0; d < a.length; d++, c++) t.props[c] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l]
            }
        }
    },
    sd = function(t) {
        if (t.type === "decl") {
            var o = t.value;
            o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    };

function Ya(e, t) {
    switch (Hc(e, t)) {
        case 5103:
            return $e + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return $e + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return $e + e + Xr + e + ot + e + e;
        case 6828:
        case 4268:
            return $e + e + ot + e + e;
        case 6165:
            return $e + e + ot + "flex-" + e + e;
        case 5187:
            return $e + e + ke(e, /(\w+).+(:[^]+)/, $e + "box-$1$2" + ot + "flex-$1$2") + e;
        case 5443:
            return $e + e + ot + "flex-item-" + ke(e, /flex-|-self/, "") + e;
        case 4675:
            return $e + e + ot + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return $e + e + ot + ke(e, "shrink", "negative") + e;
        case 5292:
            return $e + e + ot + ke(e, "basis", "preferred-size") + e;
        case 6060:
            return $e + "box-" + ke(e, "-grow", "") + $e + e + ot + ke(e, "grow", "positive") + e;
        case 4554:
            return $e + ke(e, /([^-])(transform)/g, "$1" + $e + "$2") + e;
        case 6187:
            return ke(ke(ke(e, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return ke(e, /(image-set\([^]*)/, $e + "$1$`$1");
        case 4968:
            return ke(ke(e, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return ke(e, /(.+)-inline(.+)/, $e + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Ot(e) - 1 - t > 6) switch (Ze(e, t + 1)) {
                case 109:
                    if (Ze(e, t + 4) !== 45) break;
                case 102:
                    return ke(e, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + Xr + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~Jn(e, "stretch") ? Ya(ke(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (Ze(e, t + 1) !== 115) break;
        case 6444:
            switch (Ze(e, Ot(e) - 3 - (~Jn(e, "!important") && 10))) {
                case 107:
                    return ke(e, ":", ":" + $e) + e;
                case 101:
                    return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $e + (Ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + ot + "$2box$3") + e
            }
            break;
        case 5936:
            switch (Ze(e, t + 11)) {
                case 114:
                    return $e + e + ot + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return $e + e + ot + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return $e + e + ot + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return $e + e + ot + e + e
    }
    return e
}
var ad = function(t, o, r, n) {
        if (t.length > -1 && !t.return) switch (t.type) {
            case Pi:
                t.return = Ya(t.value, t.length);
                break;
            case Va:
                return Mo([qo(t, {
                    value: ke(t.value, "@", "@" + $e)
                })], n);
            case ki:
                if (t.length) return _c(t.props, function(i) {
                    switch (Uc(i, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                            return Mo([qo(t, {
                                props: [ke(i, /:(read-\w+)/, ":" + Xr + "$1")]
                            })], n);
                        case "::placeholder":
                            return Mo([qo(t, {
                                props: [ke(i, /:(plac\w+)/, ":" + $e + "input-$1")]
                            }), qo(t, {
                                props: [ke(i, /:(plac\w+)/, ":" + Xr + "$1")]
                            }), qo(t, {
                                props: [ke(i, /:(plac\w+)/, ot + "input-$1")]
                            })], n)
                    }
                    return ""
                })
        }
    },
    ld = [ad],
    cd = function(t) {
        var o = t.key;
        if (o === "css") {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, function(m) {
                var v = m.getAttribute("data-emotion");
                v.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""))
            })
        }
        var n = t.stylisPlugins || ld,
            i = {},
            s, a = [];
        s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function(m) {
            for (var v = m.getAttribute("data-emotion").split(" "), x = 1; x < v.length; x++) i[v[x]] = !0;
            a.push(m)
        });
        var l, c = [id, sd]; {
            var d, p = [Zc, td(function(m) {
                    d.insert(m)
                })],
                b = ed(c.concat(n, p)),
                h = function(v) {
                    return Mo(Qc(v), b)
                };
            l = function(v, x, w, S) {
                d = w, h(v ? v + "{" + x.styles + "}" : x.styles), S && (g.inserted[x.name] = !0)
            }
        }
        var g = {
            key: o,
            sheet: new jc({
                key: o,
                container: s,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: l
        };
        return g.sheet.hydrate(a), g
    },
    Bn = {
        exports: {}
    },
    Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;

function dd() {
    if (fs) return Te;
    fs = 1;
    var e = typeof Symbol == "function" && Symbol.for,
        t = e ? Symbol.for("react.element") : 60103,
        o = e ? Symbol.for("react.portal") : 60106,
        r = e ? Symbol.for("react.fragment") : 60107,
        n = e ? Symbol.for("react.strict_mode") : 60108,
        i = e ? Symbol.for("react.profiler") : 60114,
        s = e ? Symbol.for("react.provider") : 60109,
        a = e ? Symbol.for("react.context") : 60110,
        l = e ? Symbol.for("react.async_mode") : 60111,
        c = e ? Symbol.for("react.concurrent_mode") : 60111,
        d = e ? Symbol.for("react.forward_ref") : 60112,
        p = e ? Symbol.for("react.suspense") : 60113,
        b = e ? Symbol.for("react.suspense_list") : 60120,
        h = e ? Symbol.for("react.memo") : 60115,
        g = e ? Symbol.for("react.lazy") : 60116,
        m = e ? Symbol.for("react.block") : 60121,
        v = e ? Symbol.for("react.fundamental") : 60117,
        x = e ? Symbol.for("react.responder") : 60118,
        w = e ? Symbol.for("react.scope") : 60119;

    function S(C) {
        if (typeof C == "object" && C !== null) {
            var R = C.$$typeof;
            switch (R) {
                case t:
                    switch (C = C.type, C) {
                        case l:
                        case c:
                        case r:
                        case i:
                        case n:
                        case p:
                            return C;
                        default:
                            switch (C = C && C.$$typeof, C) {
                                case a:
                                case d:
                                case g:
                                case h:
                                case s:
                                    return C;
                                default:
                                    return R
                            }
                    }
                case o:
                    return R
            }
        }
    }

    function y(C) {
        return S(C) === c
    }
    return Te.AsyncMode = l, Te.ConcurrentMode = c, Te.ContextConsumer = a, Te.ContextProvider = s, Te.Element = t, Te.ForwardRef = d, Te.Fragment = r, Te.Lazy = g, Te.Memo = h, Te.Portal = o, Te.Profiler = i, Te.StrictMode = n, Te.Suspense = p, Te.isAsyncMode = function(C) {
        return y(C) || S(C) === l
    }, Te.isConcurrentMode = y, Te.isContextConsumer = function(C) {
        return S(C) === a
    }, Te.isContextProvider = function(C) {
        return S(C) === s
    }, Te.isElement = function(C) {
        return typeof C == "object" && C !== null && C.$$typeof === t
    }, Te.isForwardRef = function(C) {
        return S(C) === d
    }, Te.isFragment = function(C) {
        return S(C) === r
    }, Te.isLazy = function(C) {
        return S(C) === g
    }, Te.isMemo = function(C) {
        return S(C) === h
    }, Te.isPortal = function(C) {
        return S(C) === o
    }, Te.isProfiler = function(C) {
        return S(C) === i
    }, Te.isStrictMode = function(C) {
        return S(C) === n
    }, Te.isSuspense = function(C) {
        return S(C) === p
    }, Te.isValidElementType = function(C) {
        return typeof C == "string" || typeof C == "function" || C === r || C === c || C === i || C === n || C === p || C === b || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === h || C.$$typeof === s || C.$$typeof === a || C.$$typeof === d || C.$$typeof === v || C.$$typeof === x || C.$$typeof === w || C.$$typeof === m)
    }, Te.typeOf = S, Te
}
var ms;

function ud() {
    return ms || (ms = 1, Bn.exports = dd()), Bn.exports
}
var Ln, gs;

function pd() {
    if (gs) return Ln;
    gs = 1;
    var e = ud(),
        t = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        r = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        n = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        i = {};
    i[e.ForwardRef] = r, i[e.Memo] = n;

    function s(g) {
        return e.isMemo(g) ? n : i[g.$$typeof] || t
    }
    var a = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        b = Object.prototype;

    function h(g, m, v) {
        if (typeof m != "string") {
            if (b) {
                var x = p(m);
                x && x !== b && h(g, x, v)
            }
            var w = l(m);
            c && (w = w.concat(c(m)));
            for (var S = s(g), y = s(m), C = 0; C < w.length; ++C) {
                var R = w[C];
                if (!o[R] && !(v && v[R]) && !(y && y[R]) && !(S && S[R])) {
                    var k = d(m, R);
                    try {
                        a(g, R, k)
                    } catch {}
                }
            }
        }
        return g
    }
    return Ln = h, Ln
}
pd();
var fd = !0;

function Qa(e, t, o) {
    var r = "";
    return o.split(" ").forEach(function(n) {
        e[n] !== void 0 ? t.push(e[n] + ";") : n && (r += n + " ")
    }), r
}
var Ei = function(t, o, r) {
        var n = t.key + "-" + o.name;
        (r === !1 || fd === !1) && t.registered[n] === void 0 && (t.registered[n] = o.styles)
    },
    Mi = function(t, o, r) {
        Ei(t, o, r);
        var n = t.key + "-" + o.name;
        if (t.inserted[o.name] === void 0) {
            var i = o;
            do t.insert(o === i ? "." + n : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
        }
    };

function md(e) {
    for (var t = 0, o, r = 0, n = e.length; n >= 4; ++r, n -= 4) o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= o >>> 24, t = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (n) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var gd = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};

function hd(e) {
    var t = Object.create(null);
    return function(o) {
        return t[o] === void 0 && (t[o] = e(o)), t[o]
    }
}
var bd = /[A-Z]|^ms/g,
    yd = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Ja = function(t) {
        return t.charCodeAt(1) === 45
    },
    hs = function(t) {
        return t != null && typeof t != "boolean"
    },
    Nn = hd(function(e) {
        return Ja(e) ? e : e.replace(bd, "-$&").toLowerCase()
    }),
    bs = function(t, o) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof o == "string") return o.replace(yd, function(r, n, i) {
                    return Bt = {
                        name: n,
                        styles: i,
                        next: Bt
                    }, n
                })
        }
        return gd[t] !== 1 && !Ja(t) && typeof o == "number" && o !== 0 ? o + "px" : o
    };

function fr(e, t, o) {
    if (o == null) return "";
    var r = o;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof o) {
        case "boolean":
            return "";
        case "object":
            {
                var n = o;
                if (n.anim === 1) return Bt = {
                    name: n.name,
                    styles: n.styles,
                    next: Bt
                }, n.name;
                var i = o;
                if (i.styles !== void 0) {
                    var s = i.next;
                    if (s !== void 0)
                        for (; s !== void 0;) Bt = {
                            name: s.name,
                            styles: s.styles,
                            next: Bt
                        }, s = s.next;
                    var a = i.styles + ";";
                    return a
                }
                return vd(e, t, o)
            }
        case "function":
            {
                if (e !== void 0) {
                    var l = Bt,
                        c = o(e);
                    return Bt = l, fr(e, t, c)
                }
                break
            }
    }
    var d = o;
    if (t == null) return d;
    var p = t[d];
    return p !== void 0 ? p : d
}

function vd(e, t, o) {
    var r = "";
    if (Array.isArray(o))
        for (var n = 0; n < o.length; n++) r += fr(e, t, o[n]) + ";";
    else
        for (var i in o) {
            var s = o[i];
            if (typeof s != "object") {
                var a = s;
                t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : hs(a) && (r += Nn(i) + ":" + bs(i, a) + ";")
            } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
                for (var l = 0; l < s.length; l++) hs(s[l]) && (r += Nn(i) + ":" + bs(i, s[l]) + ";");
            else {
                var c = fr(e, t, s);
                switch (i) {
                    case "animation":
                    case "animationName":
                        {
                            r += Nn(i) + ":" + c + ";";
                            break
                        }
                    default:
                        r += i + "{" + c + "}"
                }
            }
        }
    return r
}
var ys = /label:\s*([^\s;{]+)\s*(;|$)/g,
    Bt;

function Cr(e, t, o) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var r = !0,
        n = "";
    Bt = void 0;
    var i = e[0];
    if (i == null || i.raw === void 0) r = !1, n += fr(o, t, i);
    else {
        var s = i;
        n += s[0]
    }
    for (var a = 1; a < e.length; a++)
        if (n += fr(o, t, e[a]), r) {
            var l = i;
            n += l[a]
        }
    ys.lastIndex = 0;
    for (var c = "", d;
        (d = ys.exec(n)) !== null;) c += "-" + d[1];
    var p = md(n) + c;
    return {
        name: p,
        styles: n,
        next: Bt
    }
}
var xd = function(t) {
        return t()
    },
    Za = Kr.useInsertionEffect ? Kr.useInsertionEffect : !1,
    el = Za || xd,
    vs = Za || u.useLayoutEffect,
    tl = u.createContext(typeof HTMLElement < "u" ? cd({
        key: "css"
    }) : null);
tl.Provider;
var Ii = function(t) {
        return u.forwardRef(function(o, r) {
            var n = u.useContext(tl);
            return t(o, n, r)
        })
    },
    wr = u.createContext({}),
    Ai = {}.hasOwnProperty,
    ei = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    Sd = function(t, o) {
        var r = {};
        for (var n in o) Ai.call(o, n) && (r[n] = o[n]);
        return r[ei] = t, r
    },
    Cd = function(t) {
        var o = t.cache,
            r = t.serialized,
            n = t.isStringTag;
        return Ei(o, r, n), el(function() {
            return Mi(o, r, n)
        }), null
    },
    wd = Ii(function(e, t, o) {
        var r = e.css;
        typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
        var n = e[ei],
            i = [r],
            s = "";
        typeof e.className == "string" ? s = Qa(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
        var a = Cr(i, void 0, u.useContext(wr));
        s += t.key + "-" + a.name;
        var l = {};
        for (var c in e) Ai.call(e, c) && c !== "css" && c !== ei && (l[c] = e[c]);
        return l.className = s, o && (l.ref = o), u.createElement(u.Fragment, null, u.createElement(Cd, {
            cache: t,
            serialized: a,
            isStringTag: typeof n == "string"
        }), u.createElement(n, l))
    }),
    Rd = wd,
    xs = function(t, o) {
        var r = arguments;
        if (o == null || !Ai.call(o, "css")) return u.createElement.apply(void 0, r);
        var n = r.length,
            i = new Array(n);
        i[0] = Rd, i[1] = Sd(t, o);
        for (var s = 2; s < n; s++) i[s] = r[s];
        return u.createElement.apply(null, i)
    };
(function(e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}))
})(xs || (xs = {}));
var $d = Ii(function(e, t) {
    var o = e.styles,
        r = Cr([o], void 0, u.useContext(wr)),
        n = u.useRef();
    return vs(function() {
        var i = t.key + "-global",
            s = new t.sheet.constructor({
                key: i,
                nonce: t.sheet.nonce,
                container: t.sheet.container,
                speedy: t.sheet.isSpeedy
            }),
            a = !1,
            l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
        return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), n.current = [s, a],
            function() {
                s.flush()
            }
    }, [t]), vs(function() {
        var i = n.current,
            s = i[0],
            a = i[1];
        if (a) {
            i[1] = !1;
            return
        }
        if (r.next !== void 0 && Mi(t, r.next, !0), s.tags.length) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            s.before = l, s.flush()
        }
        t.insert("", r, s, !1)
    }, [t, r.name]), null
});

function Ho() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return Cr(t)
}

function eo() {
    var e = Ho.apply(void 0, arguments),
        t = "animation-" + e.name;
    return {
        name: t,
        styles: "@keyframes " + t + "{" + e.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}

function kd(e) {
    var t = Object.create(null);
    return function(o) {
        return t[o] === void 0 && (t[o] = e(o)), t[o]
    }
}
var Pd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Td = kd(function(e) {
        return Pd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    }),
    Ed = Td,
    Md = function(t) {
        return t !== "theme"
    },
    Ss = function(t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? Ed : Md
    },
    Cs = function(t, o, r) {
        var n;
        if (o) {
            var i = o.shouldForwardProp;
            n = t.__emotion_forwardProp && i ? function(s) {
                return t.__emotion_forwardProp(s) && i(s)
            } : i
        }
        return typeof n != "function" && r && (n = t.__emotion_forwardProp), n
    },
    Id = function(t) {
        var o = t.cache,
            r = t.serialized,
            n = t.isStringTag;
        return Ei(o, r, n), el(function() {
            return Mi(o, r, n)
        }), null
    },
    Ad = function e(t, o) {
        var r = t.__emotion_real === t,
            n = r && t.__emotion_base || t,
            i, s;
        o !== void 0 && (i = o.label, s = o.target);
        var a = Cs(t, o, r),
            l = a || Ss(n),
            c = !l("as");
        return function() {
            var d = arguments,
                p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0) p.push.apply(p, d);
            else {
                var b = d[0];
                p.push(b[0]);
                for (var h = d.length, g = 1; g < h; g++) p.push(d[g], b[g])
            }
            var m = Ii(function(v, x, w) {
                var S = c && v.as || n,
                    y = "",
                    C = [],
                    R = v;
                if (v.theme == null) {
                    R = {};
                    for (var k in v) R[k] = v[k];
                    R.theme = u.useContext(wr)
                }
                typeof v.className == "string" ? y = Qa(x.registered, C, v.className) : v.className != null && (y = v.className + " ");
                var E = Cr(p.concat(C), x.registered, R);
                y += x.key + "-" + E.name, s !== void 0 && (y += " " + s);
                var O = c && a === void 0 ? Ss(S) : l,
                    M = {};
                for (var B in v) c && B === "as" || O(B) && (M[B] = v[B]);
                return M.className = y, w && (M.ref = w), u.createElement(u.Fragment, null, u.createElement(Id, {
                    cache: x,
                    serialized: E,
                    isStringTag: typeof S == "string"
                }), u.createElement(S, M))
            });
            return m.displayName = i !== void 0 ? i : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = n, m.__emotion_styles = p, m.__emotion_forwardProp = a, Object.defineProperty(m, "toString", {
                value: function() {
                    return "." + s
                }
            }), m.withComponent = function(v, x) {
                var w = e(v, qr({}, o, x, {
                    shouldForwardProp: Cs(m, x, !0)
                }));
                return w.apply(void 0, p)
            }, m
        }
    },
    Od = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    ti = Ad.bind(null);
Od.forEach(function(e) {
    ti[e] = ti(e)
});

function Bd(e) {
    return e == null || Object.keys(e).length === 0
}

function ol(e) {
    const {
        styles: t,
        defaultTheme: o = {}
    } = e, r = typeof t == "function" ? n => t(Bd(n) ? o : n) : t;
    return $.jsx($d, {
        styles: r
    })
}

function rl(e, t) {
    return ti(e, t)
}

function Ld(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}
const ws = [];

function Qt(e) {
    return ws[0] = e, Cr(ws)
}
var jn = {
        exports: {}
    },
    Be = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;

function Nd() {
    if (Rs) return Be;
    Rs = 1;
    var e = Symbol.for("react.transitional.element"),
        t = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        n = Symbol.for("react.profiler"),
        i = Symbol.for("react.consumer"),
        s = Symbol.for("react.context"),
        a = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        c = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        b = Symbol.for("react.view_transition"),
        h = Symbol.for("react.client.reference");

    function g(m) {
        if (typeof m == "object" && m !== null) {
            var v = m.$$typeof;
            switch (v) {
                case e:
                    switch (m = m.type, m) {
                        case o:
                        case n:
                        case r:
                        case l:
                        case c:
                        case b:
                            return m;
                        default:
                            switch (m = m && m.$$typeof, m) {
                                case s:
                                case a:
                                case p:
                                case d:
                                    return m;
                                case i:
                                    return m;
                                default:
                                    return v
                            }
                    }
                case t:
                    return v
            }
        }
    }
    return Be.ContextConsumer = i, Be.ContextProvider = s, Be.Element = e, Be.ForwardRef = a, Be.Fragment = o, Be.Lazy = p, Be.Memo = d, Be.Portal = t, Be.Profiler = n, Be.StrictMode = r, Be.Suspense = l, Be.SuspenseList = c, Be.isContextConsumer = function(m) {
        return g(m) === i
    }, Be.isContextProvider = function(m) {
        return g(m) === s
    }, Be.isElement = function(m) {
        return typeof m == "object" && m !== null && m.$$typeof === e
    }, Be.isForwardRef = function(m) {
        return g(m) === a
    }, Be.isFragment = function(m) {
        return g(m) === o
    }, Be.isLazy = function(m) {
        return g(m) === p
    }, Be.isMemo = function(m) {
        return g(m) === d
    }, Be.isPortal = function(m) {
        return g(m) === t
    }, Be.isProfiler = function(m) {
        return g(m) === n
    }, Be.isStrictMode = function(m) {
        return g(m) === r
    }, Be.isSuspense = function(m) {
        return g(m) === l
    }, Be.isSuspenseList = function(m) {
        return g(m) === c
    }, Be.isValidElementType = function(m) {
        return typeof m == "string" || typeof m == "function" || m === o || m === n || m === r || m === l || m === c || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === d || m.$$typeof === s || m.$$typeof === i || m.$$typeof === a || m.$$typeof === h || m.getModuleId !== void 0)
    }, Be.typeOf = g, Be
}
var $s;

function jd() {
    return $s || ($s = 1, jn.exports = Nd()), jn.exports
}
var nl = jd();

function Nt(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function il(e) {
    if (u.isValidElement(e) || nl.isValidElementType(e) || !Nt(e)) return e;
    const t = {};
    return Object.keys(e).forEach(o => {
        t[o] = il(e[o])
    }), t
}

function Ye(e, t, o = {
    clone: !0
}) {
    const r = o.clone ? { ...e
    } : e;
    return Nt(e) && Nt(t) && Object.keys(t).forEach(n => {
        u.isValidElement(t[n]) || nl.isValidElementType(t[n]) ? r[n] = t[n] : Nt(t[n]) && Object.prototype.hasOwnProperty.call(e, n) && Nt(e[n]) ? r[n] = Ye(e[n], t[n], o) : o.clone ? r[n] = Nt(t[n]) ? il(t[n]) : t[n] : r[n] = t[n]
    }), r
}
const zd = e => {
    const t = Object.keys(e).map(o => ({
        key: o,
        val: e[o]
    })) || [];
    return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({ ...o,
        [r.key]: r.val
    }), {})
};

function Fd(e) {
    const {
        values: t = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
        unit: o = "px",
        step: r = 5,
        ...n
    } = e, i = zd(t), s = Object.keys(i);

    function a(b) {
        return `@media (min-width:${typeof t[b]=="number"?t[b]:b}${o})`
    }

    function l(b) {
        return `@media (max-width:${(typeof t[b]=="number"?t[b]:b)-r/100}${o})`
    }

    function c(b, h) {
        const g = s.indexOf(h);
        return `@media (min-width:${typeof t[b]=="number"?t[b]:b}${o}) and (max-width:${(g!==-1&&typeof t[s[g]]=="number"?t[s[g]]:h)-r/100}${o})`
    }

    function d(b) {
        return s.indexOf(b) + 1 < s.length ? c(b, s[s.indexOf(b) + 1]) : a(b)
    }

    function p(b) {
        const h = s.indexOf(b);
        return h === 0 ? a(s[1]) : h === s.length - 1 ? l(s[h]) : c(b, s[s.indexOf(b) + 1]).replace("@media", "@media not all and")
    }
    return {
        keys: s,
        values: i,
        up: a,
        down: l,
        between: c,
        only: d,
        not: p,
        unit: o,
        ...n
    }
}

function ks(e, t) {
    if (!e.containerQueries) return t;
    const o = Object.keys(t).filter(r => r.startsWith("@container")).sort((r, n) => {
        var s, a;
        const i = /min-width:\s*([0-9.]+)/;
        return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = n.match(i)) == null ? void 0 : a[1]) || 0)
    });
    return o.length ? o.reduce((r, n) => {
        const i = t[n];
        return delete r[n], r[n] = i, r
    }, { ...t
    }) : t
}

function Dd(e, t) {
    return t === "@" || t.startsWith("@") && (e.some(o => t.startsWith(`@${o}`)) || !!t.match(/^@\d/))
}

function Wd(e, t) {
    const o = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!o) return null;
    const [, r, n] = o, i = Number.isNaN(+r) ? r || 0 : +r;
    return e.containerQueries(n).up(i)
}

function Hd(e) {
    const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");

    function o(i, s) {
        i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
            const l = t(e.breakpoints.not(...a), s);
            return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l
        }
    }
    const r = {},
        n = i => (o(r, i), r);
    return o(n), { ...e,
        containerQueries: n
    }
}
const Ud = {
    borderRadius: 4
};

function ir(e, t) {
    return t ? Ye(e, t, {
        clone: !1
    }) : e
}
const an = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    },
    Ps = {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: e => `@media (min-width:${an[e]}px)`
    },
    _d = {
        containerQueries: e => ({
            up: t => {
                let o = typeof t == "number" ? t : an[t] || t;
                return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`
            }
        })
    };

function kt(e, t, o) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Ps;
        return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = o(t[l]), s), {})
    }
    if (typeof t == "object") {
        const i = r.breakpoints || Ps;
        return Object.keys(t).reduce((s, a) => {
            if (Dd(i.keys, a)) {
                const l = Wd(r.containerQueries ? r : _d, a);
                l && (s[l] = o(t[a], a))
            } else if (Object.keys(i.values || an).includes(a)) {
                const l = i.up(a);
                s[l] = o(t[a], a)
            } else {
                const l = a;
                s[l] = t[l]
            }
            return s
        }, {})
    }
    return o(t)
}

function sl(e = {}) {
    var o;
    return ((o = e.keys) == null ? void 0 : o.reduce((r, n) => {
        const i = e.up(n);
        return r[i] = {}, r
    }, {})) || {}
}

function oi(e, t) {
    return e.reduce((o, r) => {
        const n = o[r];
        return (!n || Object.keys(n).length === 0) && delete o[r], o
    }, t)
}

function Vd(e, ...t) {
    const o = sl(e),
        r = [o, ...t].reduce((n, i) => Ye(n, i), {});
    return oi(Object.keys(o), r)
}

function Gd(e, t) {
    if (typeof e != "object") return {};
    const o = {},
        r = Object.keys(t);
    return Array.isArray(e) ? r.forEach((n, i) => {
        i < e.length && (o[n] = !0)
    }) : r.forEach(n => {
        e[n] != null && (o[n] = !0)
    }), o
}

function zn({
    values: e,
    breakpoints: t,
    base: o
}) {
    const r = o || Gd(e, t),
        n = Object.keys(r);
    if (n.length === 0) return e;
    let i;
    return n.reduce((s, a, l) => (Array.isArray(e) ? (s[a] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (s[a] = e[a] != null ? e[a] : e[i], i = a) : s[a] = e, s), {})
}

function L(e) {
    if (typeof e != "string") throw new Error(Ut(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function Lt(e, t, o = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && o) {
        const r = `vars.${t}`.split(".").reduce((n, i) => n && n[i] ? n[i] : null, e);
        if (r != null) return r
    }
    return t.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, e)
}

function Yr(e, t, o, r = o) {
    let n;
    return typeof e == "function" ? n = e(o) : Array.isArray(e) ? n = e[o] || r : n = Lt(e, o) || r, t && (n = t(n, r, e)), n
}

function Ge(e) {
    const {
        prop: t,
        cssProperty: o = e.prop,
        themeKey: r,
        transform: n
    } = e, i = s => {
        if (s[t] == null) return null;
        const a = s[t],
            l = s.theme,
            c = Lt(l, r) || {};
        return kt(s, a, p => {
            let b = Yr(c, n, p);
            return p === b && typeof p == "string" && (b = Yr(c, n, `${t}${p==="default"?"":L(p)}`, p)), o === !1 ? b : {
                [o]: b
            }
        })
    };
    return i.propTypes = {}, i.filterProps = [t], i
}

function Kd(e) {
    const t = {};
    return o => (t[o] === void 0 && (t[o] = e(o)), t[o])
}
const qd = {
        m: "margin",
        p: "padding"
    },
    Xd = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"]
    },
    Ts = {
        marginX: "mx",
        marginY: "my",
        paddingX: "px",
        paddingY: "py"
    },
    Yd = Kd(e => {
        if (e.length > 2)
            if (Ts[e]) e = Ts[e];
            else return [e];
        const [t, o] = e.split(""), r = qd[t], n = Xd[o] || "";
        return Array.isArray(n) ? n.map(i => r + i) : [r + n]
    }),
    Oi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
    Bi = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Oi, ...Bi];

function Rr(e, t, o, r) {
    const n = Lt(e, t, !0) ? ? o;
    return typeof n == "number" || typeof n == "string" ? i => typeof i == "string" ? i : typeof n == "string" ? n.startsWith("var(") && i === 0 ? 0 : n.startsWith("var(") && i === 1 ? n : `calc(${i} * ${n})` : n * i : Array.isArray(n) ? i => {
        if (typeof i == "string") return i;
        const s = Math.abs(i),
            a = n[s];
        return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`
    } : typeof n == "function" ? n : () => {}
}

function ln(e) {
    return Rr(e, "spacing", 8)
}

function mo(e, t) {
    return typeof t == "string" || t == null ? t : e(t)
}

function Qd(e, t) {
    return o => e.reduce((r, n) => (r[n] = mo(t, o), r), {})
}

function Jd(e, t, o, r) {
    if (!t.includes(o)) return null;
    const n = Yd(o),
        i = Qd(n, r),
        s = e[o];
    return kt(e, s, i)
}

function al(e, t) {
    const o = ln(e.theme);
    return Object.keys(e).map(r => Jd(e, t, r, o)).reduce(ir, {})
}

function We(e) {
    return al(e, Oi)
}
We.propTypes = {};
We.filterProps = Oi;

function He(e) {
    return al(e, Bi)
}
He.propTypes = {};
He.filterProps = Bi;

function ll(e = 8, t = ln({
    spacing: e
})) {
    if (e.mui) return e;
    const o = (...r) => (r.length === 0 ? [1] : r).map(i => {
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s
    }).join(" ");
    return o.mui = !0, o
}

function cn(...e) {
    const t = e.reduce((r, n) => (n.filterProps.forEach(i => {
            r[i] = n
        }), r), {}),
        o = r => Object.keys(r).reduce((n, i) => t[i] ? ir(n, t[i](r)) : n, {});
    return o.propTypes = {}, o.filterProps = e.reduce((r, n) => r.concat(n.filterProps), []), o
}

function vt(e) {
    return typeof e != "number" ? e : `${e}px solid`
}

function Rt(e, t) {
    return Ge({
        prop: e,
        themeKey: "borders",
        transform: t
    })
}
const Zd = Rt("border", vt),
    eu = Rt("borderTop", vt),
    tu = Rt("borderRight", vt),
    ou = Rt("borderBottom", vt),
    ru = Rt("borderLeft", vt),
    nu = Rt("borderColor"),
    iu = Rt("borderTopColor"),
    su = Rt("borderRightColor"),
    au = Rt("borderBottomColor"),
    lu = Rt("borderLeftColor"),
    cu = Rt("outline", vt),
    du = Rt("outlineColor"),
    dn = e => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Rr(e.theme, "shape.borderRadius", 4),
                o = r => ({
                    borderRadius: mo(t, r)
                });
            return kt(e, e.borderRadius, o)
        }
        return null
    };
dn.propTypes = {};
dn.filterProps = ["borderRadius"];
cn(Zd, eu, tu, ou, ru, nu, iu, su, au, lu, dn, cu, du);
const un = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Rr(e.theme, "spacing", 8),
            o = r => ({
                gap: mo(t, r)
            });
        return kt(e, e.gap, o)
    }
    return null
};
un.propTypes = {};
un.filterProps = ["gap"];
const pn = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Rr(e.theme, "spacing", 8),
            o = r => ({
                columnGap: mo(t, r)
            });
        return kt(e, e.columnGap, o)
    }
    return null
};
pn.propTypes = {};
pn.filterProps = ["columnGap"];
const fn = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Rr(e.theme, "spacing", 8),
            o = r => ({
                rowGap: mo(t, r)
            });
        return kt(e, e.rowGap, o)
    }
    return null
};
fn.propTypes = {};
fn.filterProps = ["rowGap"];
const uu = Ge({
        prop: "gridColumn"
    }),
    pu = Ge({
        prop: "gridRow"
    }),
    fu = Ge({
        prop: "gridAutoFlow"
    }),
    mu = Ge({
        prop: "gridAutoColumns"
    }),
    gu = Ge({
        prop: "gridAutoRows"
    }),
    hu = Ge({
        prop: "gridTemplateColumns"
    }),
    bu = Ge({
        prop: "gridTemplateRows"
    }),
    yu = Ge({
        prop: "gridTemplateAreas"
    }),
    vu = Ge({
        prop: "gridArea"
    });
cn(un, pn, fn, uu, pu, fu, mu, gu, hu, bu, yu, vu);

function Io(e, t) {
    return t === "grey" ? t : e
}
const xu = Ge({
        prop: "color",
        themeKey: "palette",
        transform: Io
    }),
    Su = Ge({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: Io
    }),
    Cu = Ge({
        prop: "backgroundColor",
        themeKey: "palette",
        transform: Io
    });
cn(xu, Su, Cu);

function pt(e) {
    return e <= 1 && e !== 0 ? `${e*100}%` : e
}
const wu = Ge({
        prop: "width",
        transform: pt
    }),
    Li = e => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
            const t = o => {
                var n, i, s, a, l;
                const r = ((s = (i = (n = e.theme) == null ? void 0 : n.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[o]) || an[o];
                return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
                    maxWidth: `${r}${e.theme.breakpoints.unit}`
                } : {
                    maxWidth: r
                } : {
                    maxWidth: pt(o)
                }
            };
            return kt(e, e.maxWidth, t)
        }
        return null
    };
Li.filterProps = ["maxWidth"];
const Ru = Ge({
        prop: "minWidth",
        transform: pt
    }),
    $u = Ge({
        prop: "height",
        transform: pt
    }),
    ku = Ge({
        prop: "maxHeight",
        transform: pt
    }),
    Pu = Ge({
        prop: "minHeight",
        transform: pt
    });
Ge({
    prop: "size",
    cssProperty: "width",
    transform: pt
});
Ge({
    prop: "size",
    cssProperty: "height",
    transform: pt
});
const Tu = Ge({
    prop: "boxSizing"
});
cn(wu, Li, Ru, $u, ku, Pu, Tu);
const $r = {
    border: {
        themeKey: "borders",
        transform: vt
    },
    borderTop: {
        themeKey: "borders",
        transform: vt
    },
    borderRight: {
        themeKey: "borders",
        transform: vt
    },
    borderBottom: {
        themeKey: "borders",
        transform: vt
    },
    borderLeft: {
        themeKey: "borders",
        transform: vt
    },
    borderColor: {
        themeKey: "palette"
    },
    borderTopColor: {
        themeKey: "palette"
    },
    borderRightColor: {
        themeKey: "palette"
    },
    borderBottomColor: {
        themeKey: "palette"
    },
    borderLeftColor: {
        themeKey: "palette"
    },
    outline: {
        themeKey: "borders",
        transform: vt
    },
    outlineColor: {
        themeKey: "palette"
    },
    borderRadius: {
        themeKey: "shape.borderRadius",
        style: dn
    },
    color: {
        themeKey: "palette",
        transform: Io
    },
    bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Io
    },
    backgroundColor: {
        themeKey: "palette",
        transform: Io
    },
    p: {
        style: He
    },
    pt: {
        style: He
    },
    pr: {
        style: He
    },
    pb: {
        style: He
    },
    pl: {
        style: He
    },
    px: {
        style: He
    },
    py: {
        style: He
    },
    padding: {
        style: He
    },
    paddingTop: {
        style: He
    },
    paddingRight: {
        style: He
    },
    paddingBottom: {
        style: He
    },
    paddingLeft: {
        style: He
    },
    paddingX: {
        style: He
    },
    paddingY: {
        style: He
    },
    paddingInline: {
        style: He
    },
    paddingInlineStart: {
        style: He
    },
    paddingInlineEnd: {
        style: He
    },
    paddingBlock: {
        style: He
    },
    paddingBlockStart: {
        style: He
    },
    paddingBlockEnd: {
        style: He
    },
    m: {
        style: We
    },
    mt: {
        style: We
    },
    mr: {
        style: We
    },
    mb: {
        style: We
    },
    ml: {
        style: We
    },
    mx: {
        style: We
    },
    my: {
        style: We
    },
    margin: {
        style: We
    },
    marginTop: {
        style: We
    },
    marginRight: {
        style: We
    },
    marginBottom: {
        style: We
    },
    marginLeft: {
        style: We
    },
    marginX: {
        style: We
    },
    marginY: {
        style: We
    },
    marginInline: {
        style: We
    },
    marginInlineStart: {
        style: We
    },
    marginInlineEnd: {
        style: We
    },
    marginBlock: {
        style: We
    },
    marginBlockStart: {
        style: We
    },
    marginBlockEnd: {
        style: We
    },
    displayPrint: {
        cssProperty: !1,
        transform: e => ({
            "@media print": {
                display: e
            }
        })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
        style: un
    },
    rowGap: {
        style: fn
    },
    columnGap: {
        style: pn
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
        themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
        themeKey: "shadows"
    },
    width: {
        transform: pt
    },
    maxWidth: {
        style: Li
    },
    minWidth: {
        transform: pt
    },
    height: {
        transform: pt
    },
    maxHeight: {
        transform: pt
    },
    minHeight: {
        transform: pt
    },
    boxSizing: {},
    font: {
        themeKey: "font"
    },
    fontFamily: {
        themeKey: "typography"
    },
    fontSize: {
        themeKey: "typography"
    },
    fontStyle: {
        themeKey: "typography"
    },
    fontWeight: {
        themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: !1,
        themeKey: "typography"
    }
};

function Eu(...e) {
    const t = e.reduce((r, n) => r.concat(Object.keys(n)), []),
        o = new Set(t);
    return e.every(r => o.size === Object.keys(r).length)
}

function Mu(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Iu() {
    function e(o, r, n, i) {
        const s = {
                [o]: r,
                theme: n
            },
            a = i[o];
        if (!a) return {
            [o]: r
        };
        const {
            cssProperty: l = o,
            themeKey: c,
            transform: d,
            style: p
        } = a;
        if (r == null) return null;
        if (c === "typography" && r === "inherit") return {
            [o]: r
        };
        const b = Lt(n, c) || {};
        return p ? p(s) : kt(s, r, g => {
            let m = Yr(b, d, g);
            return g === m && typeof g == "string" && (m = Yr(b, d, `${o}${g==="default"?"":L(g)}`, g)), l === !1 ? m : {
                [l]: m
            }
        })
    }

    function t(o) {
        const {
            sx: r,
            theme: n = {},
            nested: i
        } = o || {};
        if (!r) return null;
        const s = n.unstable_sxConfig ? ? $r;

        function a(l) {
            let c = l;
            if (typeof l == "function") c = l(n);
            else if (typeof l != "object") return l;
            if (!c) return null;
            const d = sl(n.breakpoints),
                p = Object.keys(d);
            let b = d;
            return Object.keys(c).forEach(h => {
                const g = Mu(c[h], n);
                if (g != null)
                    if (typeof g == "object")
                        if (s[h]) b = ir(b, e(h, g, n, s));
                        else {
                            const m = kt({
                                theme: n
                            }, g, v => ({
                                [h]: v
                            }));
                            Eu(m, g) ? b[h] = t({
                                sx: g,
                                theme: n,
                                nested: !0
                            }) : b = ir(b, m)
                        }
                else b = ir(b, e(h, g, n, s))
            }), !i && n.modularCssLayers ? {
                "@layer sx": ks(n, oi(p, b))
            } : ks(n, oi(p, b))
        }
        return Array.isArray(r) ? r.map(a) : a(r)
    }
    return t
}
const Jt = Iu();
Jt.filterProps = ["sx"];

function Au(e, t) {
    var r;
    const o = this;
    if (o.vars) {
        if (!((r = o.colorSchemes) != null && r[e]) || typeof o.getColorSchemeSelector != "function") return {};
        let n = o.getColorSchemeSelector(e);
        return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/,"")}) &`), {
            [n]: t
        })
    }
    return o.palette.mode === e ? t : {}
}

function mn(e = {}, ...t) {
    const {
        breakpoints: o = {},
        palette: r = {},
        spacing: n,
        shape: i = {},
        ...s
    } = e, a = Fd(o), l = ll(n);
    let c = Ye({
        breakpoints: a,
        direction: "ltr",
        components: {},
        palette: {
            mode: "light",
            ...r
        },
        spacing: l,
        shape: { ...Ud,
            ...i
        }
    }, s);
    return c = Hd(c), c.applyStyles = Au, c = t.reduce((d, p) => Ye(d, p), c), c.unstable_sxConfig = { ...$r,
        ...s == null ? void 0 : s.unstable_sxConfig
    }, c.unstable_sx = function(p) {
        return Jt({
            sx: p,
            theme: this
        })
    }, c
}

function Ou(e) {
    return Object.keys(e).length === 0
}

function gn(e = null) {
    const t = u.useContext(wr);
    return !t || Ou(t) ? e : t
}
const Bu = mn();

function hn(e = Bu) {
    return gn(e)
}

function Fn(e) {
    const t = Qt(e);
    return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e
}

function cl({
    styles: e,
    themeId: t,
    defaultTheme: o = {}
}) {
    const r = hn(o),
        n = t && r[t] || r;
    let i = typeof e == "function" ? e(n) : e;
    return n.modularCssLayers && (Array.isArray(i) ? i = i.map(s => Fn(typeof s == "function" ? s(n) : s)) : i = Fn(i)), $.jsx(ol, {
        styles: i
    })
}
const Lu = e => {
    var r;
    const t = {
            systemProps: {},
            otherProps: {}
        },
        o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ? ? $r;
    return Object.keys(e).forEach(n => {
        o[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n]
    }), t
};

function Ni(e) {
    const {
        sx: t,
        ...o
    } = e, {
        systemProps: r,
        otherProps: n
    } = Lu(o);
    let i;
    return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
        const a = t(...s);
        return Nt(a) ? { ...r,
            ...a
        } : r
    } : i = { ...r,
        ...t
    }, { ...n,
        sx: i
    }
}
const Es = e => e,
    Nu = () => {
        let e = Es;
        return {
            configure(t) {
                e = t
            },
            generate(t) {
                return e(t)
            },
            reset() {
                e = Es
            }
        }
    },
    dl = Nu();

function ul(e) {
    var t, o, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (t = 0; t < n; t++) e[t] && (o = ul(e[t])) && (r && (r += " "), r += o)
        } else
            for (o in e) e[o] && (r && (r += " "), r += o);
    return r
}

function pl() {
    for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (t = ul(e)) && (r && (r += " "), r += t);
    return r
}

function ju(e = {}) {
    const {
        themeId: t,
        defaultTheme: o,
        defaultClassName: r = "MuiBox-root",
        generateClassName: n
    } = e, i = rl("div", {
        shouldForwardProp: a => a !== "theme" && a !== "sx" && a !== "as"
    })(Jt);
    return u.forwardRef(function(l, c) {
        const d = hn(o),
            {
                className: p,
                component: b = "div",
                ...h
            } = Ni(l);
        return $.jsx(i, {
            as: b,
            ref: c,
            className: pl(p, n ? n(r) : r),
            theme: t && d[t] || d,
            ...h
        })
    })
}
const zu = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
};

function Y(e, t, o = "Mui") {
    const r = zu[t];
    return r ? `${o}-${r}` : `${dl.generate(e)}-${t}`
}

function K(e, t, o = "Mui") {
    const r = {};
    return t.forEach(n => {
        r[n] = Y(e, n, o)
    }), r
}

function fl(e) {
    const {
        variants: t,
        ...o
    } = e, r = {
        variants: t,
        style: Qt(o),
        isProcessed: !0
    };
    return r.style === o || t && t.forEach(n => {
        typeof n.style != "function" && (n.style = Qt(n.style))
    }), r
}
const Fu = mn();

function Dn(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}

function co(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e
}

function Du(e) {
    return e ? (t, o) => o[e] : null
}

function Wu(e, t, o) {
    e.theme = Uu(e.theme) ? o : e.theme[t] || e.theme
}

function Ur(e, t, o) {
    const r = typeof t == "function" ? t(e) : t;
    if (Array.isArray(r)) return r.flatMap(n => Ur(e, n, o));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
        let n;
        if (r.isProcessed) n = o ? co(r.style, o) : r.style;
        else {
            const {
                variants: i,
                ...s
            } = r;
            n = o ? co(Qt(s), o) : s
        }
        return ml(e, r.variants, [n], o)
    }
    return r != null && r.isProcessed ? o ? co(Qt(r.style), o) : r.style : o ? co(Qt(r), o) : r
}

function ml(e, t, o = [], r = void 0) {
    var i;
    let n;
    e: for (let s = 0; s < t.length; s += 1) {
        const a = t[s];
        if (typeof a.props == "function") {
            if (n ? ? (n = { ...e,
                    ...e.ownerState,
                    ownerState: e.ownerState
                }), !a.props(n)) continue
        } else
            for (const l in a.props)
                if (e[l] !== a.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== a.props[l]) continue e;
        typeof a.style == "function" ? (n ? ? (n = { ...e,
            ...e.ownerState,
            ownerState: e.ownerState
        }), o.push(r ? co(Qt(a.style(n)), r) : a.style(n))) : o.push(r ? co(Qt(a.style), r) : a.style)
    }
    return o
}

function gl(e = {}) {
    const {
        themeId: t,
        defaultTheme: o = Fu,
        rootShouldForwardProp: r = Dn,
        slotShouldForwardProp: n = Dn
    } = e;

    function i(a) {
        Wu(a, t, o)
    }
    return (a, l = {}) => {
        Ld(a, R => R.filter(k => k !== Jt));
        const {
            name: c,
            slot: d,
            skipVariantsResolver: p,
            skipSx: b,
            overridesResolver: h = Du(Vu(d)),
            ...g
        } = l, m = c && c.startsWith("Mui") || d ? "components" : "custom", v = p !== void 0 ? p : d && d !== "Root" && d !== "root" || !1, x = b || !1;
        let w = Dn;
        d === "Root" || d === "root" ? w = r : d ? w = n : _u(a) && (w = void 0);
        const S = rl(a, {
                shouldForwardProp: w,
                label: Hu(),
                ...g
            }),
            y = R => {
                if (R.__emotion_real === R) return R;
                if (typeof R == "function") return function(E) {
                    return Ur(E, R, E.theme.modularCssLayers ? m : void 0)
                };
                if (Nt(R)) {
                    const k = fl(R);
                    return function(O) {
                        return k.variants ? Ur(O, k, O.theme.modularCssLayers ? m : void 0) : O.theme.modularCssLayers ? co(k.style, m) : k.style
                    }
                }
                return R
            },
            C = (...R) => {
                const k = [],
                    E = R.map(y),
                    O = [];
                if (k.push(i), c && h && O.push(function(P) {
                        var z, W;
                        const I = (W = (z = P.theme.components) == null ? void 0 : z[c]) == null ? void 0 : W.styleOverrides;
                        if (!I) return null;
                        const A = {};
                        for (const F in I) A[F] = Ur(P, I[F], P.theme.modularCssLayers ? "theme" : void 0);
                        return h(P, A)
                    }), c && !v && O.push(function(P) {
                        var A, z;
                        const T = P.theme,
                            I = (z = (A = T == null ? void 0 : T.components) == null ? void 0 : A[c]) == null ? void 0 : z.variants;
                        return I ? ml(P, I, [], P.theme.modularCssLayers ? "theme" : void 0) : null
                    }), x || O.push(Jt), Array.isArray(E[0])) {
                    const f = E.shift(),
                        P = new Array(k.length).fill(""),
                        T = new Array(O.length).fill("");
                    let I;
                    I = [...P, ...f, ...T], I.raw = [...P, ...f.raw, ...T], k.unshift(I)
                }
                const M = [...k, ...E, ...O],
                    B = S(...M);
                return a.muiName && (B.muiName = a.muiName), B
            };
        return S.withConfig && (C.withConfig = S.withConfig), C
    }
}

function Hu(e, t) {
    return void 0
}

function Uu(e) {
    for (const t in e) return !1;
    return !0
}

function _u(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}

function Vu(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1)
}
const Gu = gl();

function hl(e) {
    var t, o, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (t = 0; t < n; t++) e[t] && (o = hl(e[t])) && (r && (r += " "), r += o)
        } else
            for (o in e) e[o] && (r && (r += " "), r += o);
    return r
}

function ri() {
    for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (t = hl(e)) && (r && (r += " "), r += t);
    return r
}

function mr(e, t, o = !1) {
    const r = { ...t
    };
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            const i = n;
            if (i === "components" || i === "slots") r[i] = { ...e[i],
                ...r[i]
            };
            else if (i === "componentsProps" || i === "slotProps") {
                const s = e[i],
                    a = t[i];
                if (!a) r[i] = s || {};
                else if (!s) r[i] = a;
                else {
                    r[i] = { ...a
                    };
                    for (const l in s)
                        if (Object.prototype.hasOwnProperty.call(s, l)) {
                            const c = l;
                            r[i][c] = mr(s[c], a[c], o)
                        }
                }
            } else i === "className" && o && t.className ? r.className = ri(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && o && t.style ? r.style = { ...e == null ? void 0 : e.style,
                ...t == null ? void 0 : t.style
            } : r[i] === void 0 && (r[i] = e[i])
        }
    return r
}

function bl(e) {
    const {
        theme: t,
        name: o,
        props: r
    } = e;
    return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : mr(t.components[o].defaultProps, r)
}

function yl({
    props: e,
    name: t,
    defaultTheme: o,
    themeId: r
}) {
    let n = hn(o);
    return r && (n = n[r] || n), bl({
        theme: n,
        name: t,
        props: e
    })
}
const ct = typeof window < "u" ? u.useLayoutEffect : u.useEffect;

function Ku(e, t, o, r, n) {
    const [i, s] = u.useState(() => n && o ? o(e).matches : r ? r(e).matches : t);
    return ct(() => {
        if (!o) return;
        const a = o(e),
            l = () => {
                s(a.matches)
            };
        return l(), a.addEventListener("change", l), () => {
            a.removeEventListener("change", l)
        }
    }, [e, o]), i
}
const qu = { ...Kr
    },
    vl = qu.useSyncExternalStore;

function Xu(e, t, o, r, n) {
    const i = u.useCallback(() => t, [t]),
        s = u.useMemo(() => {
            if (n && o) return () => o(e).matches;
            if (r !== null) {
                const {
                    matches: d
                } = r(e);
                return () => d
            }
            return i
        }, [i, e, r, n, o]),
        [a, l] = u.useMemo(() => {
            if (o === null) return [i, () => () => {}];
            const d = o(e);
            return [() => d.matches, p => (d.addEventListener("change", p), () => {
                d.removeEventListener("change", p)
            })]
        }, [i, o, e]);
    return vl(l, a, s)
}

function xl(e = {}) {
    const {
        themeId: t
    } = e;
    return function(r, n = {}) {
        let i = gn();
        i && t && (i = i[t] || i);
        const s = typeof window < "u" && typeof window.matchMedia < "u",
            {
                defaultMatches: a = !1,
                matchMedia: l = s ? window.matchMedia : null,
                ssrMatchMedia: c = null,
                noSsr: d = !1
            } = bl({
                name: "MuiUseMediaQuery",
                props: n,
                theme: i
            });
        let p = typeof r == "function" ? r(i) : r;
        return p = p.replace(/^@media( ?)/m, ""), p.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (vl !== void 0 ? Xu : Ku)(p, a, l, c, d)
    }
}
xl();

function Yu(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, o))
}

function ji(e, t = 0, o = 1) {
    return Yu(e, t, o)
}

function Qu(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g");
    let o = e.match(t);
    return o && o[0].length === 1 && (o = o.map(r => r + r)), o ? `rgb${o.length===4?"a":""}(${o.map((r,n)=>n<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})` : ""
}

function Zt(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return Zt(Qu(e));
    const t = e.indexOf("("),
        o = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o)) throw new Error(Ut(9, e));
    let r = e.substring(t + 1, e.length - 1),
        n;
    if (o === "color") {
        if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(n)) throw new Error(Ut(10, n))
    } else r = r.split(",");
    return r = r.map(i => parseFloat(i)), {
        type: o,
        values: r,
        colorSpace: n
    }
}
const Ju = e => {
        const t = Zt(e);
        return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ")
    },
    tr = (e, t) => {
        try {
            return Ju(e)
        } catch {
            return e
        }
    };

function bn(e) {
    const {
        type: t,
        colorSpace: o
    } = e;
    let {
        values: r
    } = e;
    return t.includes("rgb") ? r = r.map((n, i) => i < 3 ? parseInt(n, 10) : n) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`
}

function Sl(e) {
    e = Zt(e);
    const {
        values: t
    } = e, o = t[0], r = t[1] / 100, n = t[2] / 100, i = r * Math.min(n, 1 - n), s = (c, d = (c + o / 30) % 12) => n - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
    let a = "rgb";
    const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
    return e.type === "hsla" && (a += "a", l.push(t[3])), bn({
        type: a,
        values: l
    })
}

function ni(e) {
    e = Zt(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Zt(Sl(e)).values : e.values;
    return t = t.map(o => (e.type !== "color" && (o /= 255), o <= .03928 ? o / 12.92 : ((o + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}

function Zu(e, t) {
    const o = ni(e),
        r = ni(t);
    return (Math.max(o, r) + .05) / (Math.min(o, r) + .05)
}

function gr(e, t) {
    return e = Zt(e), t = ji(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, bn(e)
}

function no(e, t, o) {
    try {
        return gr(e, t)
    } catch {
        return e
    }
}

function yn(e, t) {
    if (e = Zt(e), t = ji(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
        for (let o = 0; o < 3; o += 1) e.values[o] *= 1 - t;
    return bn(e)
}

function Ae(e, t, o) {
    try {
        return yn(e, t)
    } catch {
        return e
    }
}

function vn(e, t) {
    if (e = Zt(e), t = ji(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
        for (let o = 0; o < 3; o += 1) e.values[o] += (255 - e.values[o]) * t;
    else if (e.type.includes("color"))
        for (let o = 0; o < 3; o += 1) e.values[o] += (1 - e.values[o]) * t;
    return bn(e)
}

function Oe(e, t, o) {
    try {
        return vn(e, t)
    } catch {
        return e
    }
}

function ii(e, t = .15) {
    return ni(e) > .5 ? yn(e, t) : vn(e, t)
}

function Mr(e, t, o) {
    try {
        return ii(e, t)
    } catch {
        return e
    }
}
const Cl = u.createContext(null);

function zi() {
    return u.useContext(Cl)
}
const ep = typeof Symbol == "function" && Symbol.for,
    tp = ep ? Symbol.for("mui.nested") : "__THEME_NESTED__";

function op(e, t) {
    return typeof t == "function" ? t(e) : { ...e,
        ...t
    }
}

function rp(e) {
    const {
        children: t,
        theme: o
    } = e, r = zi(), n = u.useMemo(() => {
        const i = r === null ? { ...o
        } : op(r, o);
        return i != null && (i[tp] = r !== null), i
    }, [o, r]);
    return $.jsx(Cl.Provider, {
        value: n,
        children: t
    })
}
const wl = u.createContext();

function np({
    value: e,
    ...t
}) {
    return $.jsx(wl.Provider, {
        value: e ? ? !0,
        ...t
    })
}
const Uo = () => u.useContext(wl) ? ? !1,
    Rl = u.createContext(void 0);

function ip({
    value: e,
    children: t
}) {
    return $.jsx(Rl.Provider, {
        value: e,
        children: t
    })
}

function sp(e) {
    const {
        theme: t,
        name: o,
        props: r
    } = e;
    if (!t || !t.components || !t.components[o]) return r;
    const n = t.components[o];
    return n.defaultProps ? mr(n.defaultProps, r, t.components.mergeClassNameAndStyle) : !n.styleOverrides && !n.variants ? mr(n, r, t.components.mergeClassNameAndStyle) : r
}

function ap({
    props: e,
    name: t
}) {
    const o = u.useContext(Rl);
    return sp({
        props: e,
        name: t,
        theme: {
            components: o
        }
    })
}
let Ms = 0;

function lp(e) {
    const [t, o] = u.useState(e), r = e || t;
    return u.useEffect(() => {
        t == null && (Ms += 1, o(`mui-${Ms}`))
    }, [t]), r
}
const cp = { ...Kr
    },
    Is = cp.useId;

function ho(e) {
    if (Is !== void 0) {
        const t = Is();
        return e ? ? t
    }
    return lp(e)
}

function dp(e) {
    const t = gn(),
        o = ho() || "",
        {
            modularCssLayers: r
        } = e;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || t !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, ct(() => {
        var a, l;
        const i = document.querySelector("head");
        if (!i) return;
        const s = i.firstChild;
        if (n) {
            if (s && ((a = s.hasAttribute) != null && a.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === o) return;
            const c = document.createElement("style");
            c.setAttribute("data-mui-layer-order", o), c.textContent = n, i.prepend(c)
        } else(l = i.querySelector(`style[data-mui-layer-order="${o}"]`)) == null || l.remove()
    }, [n, o]), n ? $.jsx(cl, {
        styles: n
    }) : null
}
const As = {};

function Os(e, t, o, r = !1) {
    return u.useMemo(() => {
        const n = e && t[e] || t;
        if (typeof o == "function") {
            const i = o(n),
                s = e ? { ...t,
                    [e]: i
                } : i;
            return r ? () => s : s
        }
        return e ? { ...t,
            [e]: o
        } : { ...t,
            ...o
        }
    }, [e, t, o, r])
}

function $l(e) {
    const {
        children: t,
        theme: o,
        themeId: r
    } = e, n = gn(As), i = zi() || As, s = Os(r, n, o), a = Os(r, i, o, !0), l = (r ? s[r] : s).direction === "rtl", c = dp(s);
    return $.jsx(rp, {
        theme: a,
        children: $.jsx(wr.Provider, {
            value: s,
            children: $.jsx(np, {
                value: l,
                children: $.jsxs(ip, {
                    value: r ? s[r].components : s.components,
                    children: [c, t]
                })
            })
        })
    })
}
const Bs = {
    theme: void 0
};

function up(e) {
    let t, o;
    return function(n) {
        let i = t;
        return (i === void 0 || n.theme !== o) && (Bs.theme = n.theme, i = fl(e(Bs)), t = i, o = n.theme), i
    }
}
const Fi = "mode",
    Di = "color-scheme",
    pp = "data-color-scheme";

function fp(e) {
    const {
        defaultMode: t = "system",
        defaultLightColorScheme: o = "light",
        defaultDarkColorScheme: r = "dark",
        modeStorageKey: n = Fi,
        colorSchemeStorageKey: i = Di,
        attribute: s = pp,
        colorSchemeNode: a = "document.documentElement",
        nonce: l
    } = e || {};
    let c = "",
        d = s;
    if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
        const b = d.substring(1);
        c += `${a}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${a}.classList.add('${b}'.replace('%s', colorScheme));`
    }
    const p = d.match(/\[([^\]]+)\]/);
    if (p) {
        const [b, h] = p[1].split("=");
        h || (c += `${a}.removeAttribute('${b}'.replace('%s', light));
      ${a}.removeAttribute('${b}'.replace('%s', dark));`), c += `
      ${a}.setAttribute('${b}'.replace('%s', colorScheme), ${h?`${h}.replace('%s', colorScheme)`:'""'});`
    } else c += `${a}.setAttribute('${d}', colorScheme);`;
    return $.jsx("script", {
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? l : "",
        dangerouslySetInnerHTML: {
            __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${c}
  }
} catch(e){}})();`
        }
    }, "mui-color-scheme-init")
}

function mp() {}
const gp = ({
    key: e,
    storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
    get(o) {
        if (typeof window > "u") return;
        if (!t) return o;
        let r;
        try {
            r = t.localStorage.getItem(e)
        } catch {}
        return r || o
    },
    set: o => {
        if (t) try {
            t.localStorage.setItem(e, o)
        } catch {}
    },
    subscribe: o => {
        if (!t) return mp;
        const r = n => {
            const i = n.newValue;
            n.key === e && o(i)
        };
        return t.addEventListener("storage", r), () => {
            t.removeEventListener("storage", r)
        }
    }
});

function Wn() {}

function Ls(e) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function kl(e, t) {
    if (e.mode === "light" || e.mode === "system" && e.systemMode === "light") return t("light");
    if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark") return t("dark")
}

function hp(e) {
    return kl(e, t => {
        if (t === "light") return e.lightColorScheme;
        if (t === "dark") return e.darkColorScheme
    })
}

function bp(e) {
    const {
        defaultMode: t = "light",
        defaultLightColorScheme: o,
        defaultDarkColorScheme: r,
        supportedColorSchemes: n = [],
        modeStorageKey: i = Fi,
        colorSchemeStorageKey: s = Di,
        storageWindow: a = typeof window > "u" ? void 0 : window,
        storageManager: l = gp,
        noSsr: c = !1
    } = e, d = n.join(","), p = n.length > 1, b = u.useMemo(() => l == null ? void 0 : l({
        key: i,
        storageWindow: a
    }), [l, i, a]), h = u.useMemo(() => l == null ? void 0 : l({
        key: `${s}-light`,
        storageWindow: a
    }), [l, s, a]), g = u.useMemo(() => l == null ? void 0 : l({
        key: `${s}-dark`,
        storageWindow: a
    }), [l, s, a]), [m, v] = u.useState(() => {
        const E = (b == null ? void 0 : b.get(t)) || t,
            O = (h == null ? void 0 : h.get(o)) || o,
            M = (g == null ? void 0 : g.get(r)) || r;
        return {
            mode: E,
            systemMode: Ls(E),
            lightColorScheme: O,
            darkColorScheme: M
        }
    }), [x, w] = u.useState(c || !p);
    u.useEffect(() => {
        w(!0)
    }, []);
    const S = hp(m),
        y = u.useCallback(E => {
            v(O => {
                if (E === O.mode) return O;
                const M = E ? ? t;
                return b == null || b.set(M), { ...O,
                    mode: M,
                    systemMode: Ls(M)
                }
            })
        }, [b, t]),
        C = u.useCallback(E => {
            E ? typeof E == "string" ? E && !d.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : v(O => {
                const M = { ...O
                };
                return kl(O, B => {
                    B === "light" && (h == null || h.set(E), M.lightColorScheme = E), B === "dark" && (g == null || g.set(E), M.darkColorScheme = E)
                }), M
            }) : v(O => {
                const M = { ...O
                    },
                    B = E.light === null ? o : E.light,
                    f = E.dark === null ? r : E.dark;
                return B && (d.includes(B) ? (M.lightColorScheme = B, h == null || h.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), f && (d.includes(f) ? (M.darkColorScheme = f, g == null || g.set(f)) : console.error(`\`${f}\` does not exist in \`theme.colorSchemes\`.`)), M
            }) : v(O => (h == null || h.set(o), g == null || g.set(r), { ...O,
                lightColorScheme: o,
                darkColorScheme: r
            }))
        }, [d, h, g, o, r]),
        R = u.useCallback(E => {
            m.mode === "system" && v(O => {
                const M = E != null && E.matches ? "dark" : "light";
                return O.systemMode === M ? O : { ...O,
                    systemMode: M
                }
            })
        }, [m.mode]),
        k = u.useRef(R);
    return k.current = R, u.useEffect(() => {
        if (typeof window.matchMedia != "function" || !p) return;
        const E = (...M) => k.current(...M),
            O = window.matchMedia("(prefers-color-scheme: dark)");
        return O.addListener(E), E(O), () => {
            O.removeListener(E)
        }
    }, [p]), u.useEffect(() => {
        if (p) {
            const E = (b == null ? void 0 : b.subscribe(B => {
                    (!B || ["light", "dark", "system"].includes(B)) && y(B || t)
                })) || Wn,
                O = (h == null ? void 0 : h.subscribe(B => {
                    (!B || d.match(B)) && C({
                        light: B
                    })
                })) || Wn,
                M = (g == null ? void 0 : g.subscribe(B => {
                    (!B || d.match(B)) && C({
                        dark: B
                    })
                })) || Wn;
            return () => {
                E(), O(), M()
            }
        }
    }, [C, y, d, t, a, p, b, h, g]), { ...m,
        mode: x ? m.mode : void 0,
        systemMode: x ? m.systemMode : void 0,
        colorScheme: x ? S : void 0,
        setMode: y,
        setColorScheme: C
    }
}
const yp = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";

function vp(e) {
    const {
        themeId: t,
        theme: o = {},
        modeStorageKey: r = Fi,
        colorSchemeStorageKey: n = Di,
        disableTransitionOnChange: i = !1,
        defaultColorScheme: s,
        resolveTheme: a
    } = e, l = {
        allColorSchemes: [],
        colorScheme: void 0,
        darkColorScheme: void 0,
        lightColorScheme: void 0,
        mode: void 0,
        setColorScheme: () => {},
        setMode: () => {},
        systemMode: void 0
    }, c = u.createContext(void 0), d = () => u.useContext(c) || l, p = {}, b = {};

    function h(x) {
        var rt, Qe, Xe, Je;
        const {
            children: w,
            theme: S,
            modeStorageKey: y = r,
            colorSchemeStorageKey: C = n,
            disableTransitionOnChange: R = i,
            storageManager: k,
            storageWindow: E = typeof window > "u" ? void 0 : window,
            documentNode: O = typeof document > "u" ? void 0 : document,
            colorSchemeNode: M = typeof document > "u" ? void 0 : document.documentElement,
            disableNestedContext: B = !1,
            disableStyleSheetGeneration: f = !1,
            defaultMode: P = "system",
            forceThemeRerender: T = !1,
            noSsr: I
        } = x, A = u.useRef(!1), z = zi(), W = u.useContext(c), F = !!W && !B, U = u.useMemo(() => S || (typeof o == "function" ? o() : o), [S]), ie = U[t], ee = ie || U, {
            colorSchemes: J = p,
            components: ue = b,
            cssVarPrefix: _
        } = ee, D = Object.keys(J).filter(Pe => !!J[Pe]).join(","), V = u.useMemo(() => D.split(","), [D]), se = typeof s == "string" ? s : s.light, me = typeof s == "string" ? s : s.dark, X = J[se] && J[me] ? P : ((Qe = (rt = J[ee.defaultColorScheme]) == null ? void 0 : rt.palette) == null ? void 0 : Qe.mode) || ((Xe = ee.palette) == null ? void 0 : Xe.mode), {
            mode: pe,
            setMode: ce,
            systemMode: de,
            lightColorScheme: ne,
            darkColorScheme: fe,
            colorScheme: Ne,
            setColorScheme: xe
        } = bp({
            supportedColorSchemes: V,
            defaultLightColorScheme: se,
            defaultDarkColorScheme: me,
            modeStorageKey: y,
            colorSchemeStorageKey: C,
            defaultMode: X,
            storageManager: k,
            storageWindow: E,
            noSsr: I
        });
        let ye = pe,
            Se = Ne;
        F && (ye = W.mode, Se = W.colorScheme);
        let Ce = Se || ee.defaultColorScheme;
        ee.vars && !T && (Ce = ee.defaultColorScheme);
        const be = u.useMemo(() => {
                var Fe;
                const Pe = ((Fe = ee.generateThemeVars) == null ? void 0 : Fe.call(ee)) || ee.vars,
                    re = { ...ee,
                        components: ue,
                        colorSchemes: J,
                        cssVarPrefix: _,
                        vars: Pe
                    };
                if (typeof re.generateSpacing == "function" && (re.spacing = re.generateSpacing()), Ce) {
                    const je = J[Ce];
                    je && typeof je == "object" && Object.keys(je).forEach(Me => {
                        je[Me] && typeof je[Me] == "object" ? re[Me] = { ...re[Me],
                            ...je[Me]
                        } : re[Me] = je[Me]
                    })
                }
                return a ? a(re) : re
            }, [ee, Ce, ue, J, _]),
            q = ee.colorSchemeSelector;
        ct(() => {
            if (Se && M && q && q !== "media") {
                const Pe = q;
                let re = q;
                if (Pe === "class" && (re = ".%s"), Pe === "data" && (re = "[data-%s]"), Pe != null && Pe.startsWith("data-") && !Pe.includes("%s") && (re = `[${Pe}="%s"]`), re.startsWith(".")) M.classList.remove(...V.map(Fe => re.substring(1).replace("%s", Fe))), M.classList.add(re.substring(1).replace("%s", Se));
                else {
                    const Fe = re.replace("%s", Se).match(/\[([^\]]+)\]/);
                    if (Fe) {
                        const [je, Me] = Fe[1].split("=");
                        Me || V.forEach($t => {
                            M.removeAttribute(je.replace(Se, $t))
                        }), M.setAttribute(je, Me ? Me.replace(/"|'/g, "") : "")
                    } else M.setAttribute(re, Se)
                }
            }
        }, [Se, q, M, V]), u.useEffect(() => {
            let Pe;
            if (R && A.current && O) {
                const re = O.createElement("style");
                re.appendChild(O.createTextNode(yp)), O.head.appendChild(re), window.getComputedStyle(O.body), Pe = setTimeout(() => {
                    O.head.removeChild(re)
                }, 1)
            }
            return () => {
                clearTimeout(Pe)
            }
        }, [Se, R, O]), u.useEffect(() => (A.current = !0, () => {
            A.current = !1
        }), []);
        const qe = u.useMemo(() => ({
            allColorSchemes: V,
            colorScheme: Se,
            darkColorScheme: fe,
            lightColorScheme: ne,
            mode: ye,
            setColorScheme: xe,
            setMode: ce,
            systemMode: de
        }), [V, Se, fe, ne, ye, xe, ce, de, be.colorSchemeSelector]);
        let Ee = !0;
        (f || ee.cssVariables === !1 || F && (z == null ? void 0 : z.cssVarPrefix) === _) && (Ee = !1);
        const tt = $.jsxs(u.Fragment, {
            children: [$.jsx($l, {
                themeId: ie ? t : void 0,
                theme: be,
                children: w
            }), Ee && $.jsx(ol, {
                styles: ((Je = be.generateStyleSheets) == null ? void 0 : Je.call(be)) || []
            })]
        });
        return F ? tt : $.jsx(c.Provider, {
            value: qe,
            children: tt
        })
    }
    const g = typeof s == "string" ? s : s.light,
        m = typeof s == "string" ? s : s.dark;
    return {
        CssVarsProvider: h,
        useColorScheme: d,
        getInitColorSchemeScript: x => fp({
            colorSchemeStorageKey: n,
            defaultLightColorScheme: g,
            defaultDarkColorScheme: m,
            modeStorageKey: r,
            ...x
        })
    }
}

function xp(e = "") {
    function t(...r) {
        if (!r.length) return "";
        const n = r[0];
        return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e?`${e}-`:""}${n}${t(...r.slice(1))})` : `, ${n}`
    }
    return (r, ...n) => `var(--${e?`${e}-`:""}${r}${t(...n)})`
}
const Ns = (e, t, o, r = []) => {
        let n = e;
        t.forEach((i, s) => {
            s === t.length - 1 ? Array.isArray(n) ? n[Number(i)] = o : n && typeof n == "object" && (n[i] = o) : n && typeof n == "object" && (n[i] || (n[i] = r.includes(i) ? [] : {}), n = n[i])
        })
    },
    Sp = (e, t, o) => {
        function r(n, i = [], s = []) {
            Object.entries(n).forEach(([a, l]) => {
                (!o || o && !o([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s))
            })
        }
        r(e)
    },
    Cp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(r => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;

function Hn(e, t) {
    const {
        prefix: o,
        shouldSkipGeneratingVar: r
    } = t || {}, n = {}, i = {}, s = {};
    return Sp(e, (a, l, c) => {
        if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
            const d = `--${o?`${o}-`:""}${a.join("-")}`,
                p = Cp(a, l);
            Object.assign(n, {
                [d]: p
            }), Ns(i, a, `var(${d})`, c), Ns(s, a, `var(${d}, ${p})`, c)
        }
    }, a => a[0] === "vars"), {
        css: n,
        vars: i,
        varsWithDefaults: s
    }
}

function wp(e, t = {}) {
    const {
        getSelector: o = x,
        disableCssColorScheme: r,
        colorSchemeSelector: n,
        enableContrastVars: i
    } = t, {
        colorSchemes: s = {},
        components: a,
        defaultColorScheme: l = "light",
        ...c
    } = e, {
        vars: d,
        css: p,
        varsWithDefaults: b
    } = Hn(c, t);
    let h = b;
    const g = {},
        {
            [l]: m,
            ...v
        } = s;
    if (Object.entries(v || {}).forEach(([y, C]) => {
            const {
                vars: R,
                css: k,
                varsWithDefaults: E
            } = Hn(C, t);
            h = Ye(h, E), g[y] = {
                css: k,
                vars: R
            }
        }), m) {
        const {
            css: y,
            vars: C,
            varsWithDefaults: R
        } = Hn(m, t);
        h = Ye(h, R), g[l] = {
            css: y,
            vars: C
        }
    }

    function x(y, C) {
        var k, E;
        let R = n;
        if (n === "class" && (R = ".%s"), n === "data" && (R = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (R = `[${n}="%s"]`), y) {
            if (R === "media") return e.defaultColorScheme === y ? ":root" : {
                [`@media (prefers-color-scheme: ${((E=(k=s[y])==null?void 0:k.palette)==null?void 0:E.mode)||y})`]: {
                    ":root": C
                }
            };
            if (R) return e.defaultColorScheme === y ? `:root, ${R.replace("%s",String(y))}` : R.replace("%s", String(y))
        }
        return ":root"
    }
    return {
        vars: h,
        generateThemeVars: () => {
            let y = { ...d
            };
            return Object.entries(g).forEach(([, {
                vars: C
            }]) => {
                y = Ye(y, C)
            }), y
        },
        generateStyleSheets: () => {
            var O, M;
            const y = [],
                C = e.defaultColorScheme || "light";

            function R(B, f) {
                Object.keys(f).length && y.push(typeof B == "string" ? {
                    [B]: { ...f
                    }
                } : B)
            }
            R(o(void 0, { ...p
            }), p);
            const {
                [C]: k, ...E
            } = g;
            if (k) {
                const {
                    css: B
                } = k, f = (M = (O = s[C]) == null ? void 0 : O.palette) == null ? void 0 : M.mode, P = !r && f ? {
                    colorScheme: f,
                    ...B
                } : { ...B
                };
                R(o(C, { ...P
                }), P)
            }
            return Object.entries(E).forEach(([B, {
                css: f
            }]) => {
                var I, A;
                const P = (A = (I = s[B]) == null ? void 0 : I.palette) == null ? void 0 : A.mode,
                    T = !r && P ? {
                        colorScheme: P,
                        ...f
                    } : { ...f
                    };
                R(o(B, { ...T
                }), T)
            }), i && y.push({
                ":root": {
                    "--__l-threshold": "0.7",
                    "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
                    "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
                }
            }), y
        }
    }
}

function Rp(e) {
    return function(o) {
        return e === "media" ? `@media (prefers-color-scheme: ${o})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s",o)} &` : "&"
    }
}

function Q(e, t, o = void 0) {
    const r = {};
    for (const n in e) {
        const i = e[n];
        let s = "",
            a = !0;
        for (let l = 0; l < i.length; l += 1) {
            const c = i[l];
            c && (s += (a === !0 ? "" : " ") + t(c), a = !1, o && o[c] && (s += " " + o[c]))
        }
        r[n] = s
    }
    return r
}

function _r(e, t) {
    var o, r, n;
    return u.isValidElement(e) && t.indexOf(e.type.muiName ? ? ((n = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : n.muiName)) !== -1
}
const $p = mn(),
    kp = Gu("div", {
        name: "MuiStack",
        slot: "Root"
    });

function Pp(e) {
    return yl({
        props: e,
        name: "MuiStack",
        defaultTheme: $p
    })
}

function Tp(e, t) {
    const o = u.Children.toArray(e).filter(Boolean);
    return o.reduce((r, n, i) => (r.push(n), i < o.length - 1 && r.push(u.cloneElement(t, {
        key: `separator-${i}`
    })), r), [])
}
const Ep = e => ({
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom"
    })[e],
    Mp = ({
        ownerState: e,
        theme: t
    }) => {
        let o = {
            display: "flex",
            flexDirection: "column",
            ...kt({
                theme: t
            }, zn({
                values: e.direction,
                breakpoints: t.breakpoints.values
            }), r => ({
                flexDirection: r
            }))
        };
        if (e.spacing) {
            const r = ln(t),
                n = Object.keys(t.breakpoints.values).reduce((l, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (l[c] = !0), l), {}),
                i = zn({
                    values: e.direction,
                    base: n
                }),
                s = zn({
                    values: e.spacing,
                    base: n
                });
            typeof i == "object" && Object.keys(i).forEach((l, c, d) => {
                if (!i[l]) {
                    const b = c > 0 ? i[d[c - 1]] : "column";
                    i[l] = b
                }
            }), o = Ye(o, kt({
                theme: t
            }, s, (l, c) => e.useFlexGap ? {
                gap: mo(r, l)
            } : {
                "& > :not(style):not(style)": {
                    margin: 0
                },
                "& > :not(style) ~ :not(style)": {
                    [`margin${Ep(c?i[c]:e.direction)}`]: mo(r, l)
                }
            }))
        }
        return o = Vd(t.breakpoints, o), o
    };

function Ip(e = {}) {
    const {
        createStyledComponent: t = kp,
        useThemeProps: o = Pp,
        componentName: r = "MuiStack"
    } = e, n = () => Q({
        root: ["root"]
    }, l => Y(r, l), {}), i = t(Mp);
    return u.forwardRef(function(l, c) {
        const d = o(l),
            p = Ni(d),
            {
                component: b = "div",
                direction: h = "column",
                spacing: g = 0,
                divider: m,
                children: v,
                className: x,
                useFlexGap: w = !1,
                ...S
            } = p,
            y = {
                direction: h,
                spacing: g,
                useFlexGap: w
            },
            C = n();
        return $.jsx(i, {
            as: b,
            ownerState: y,
            ref: c,
            className: pl(C.root, x),
            ...S,
            children: m ? Tp(v, m) : v
        })
    })
}

function Pl() {
    return {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: dr.white,
            default: dr.white
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
        }
    }
}
const Tl = Pl();

function El() {
    return {
        text: {
            primary: dr.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: {
            paper: "#121212",
            default: "#121212"
        },
        action: {
            active: dr.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    }
}
const si = El();

function js(e, t, o, r) {
    const n = r.light || r,
        i = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = vn(e.main, n) : t === "dark" && (e.dark = yn(e.main, i)))
}

function zs(e, t, o, r, n) {
    const i = n.light || n,
        s = n.dark || n * 1.5;
    t[o] || (t.hasOwnProperty(r) ? t[o] = t[r] : o === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i*100).toFixed(0)}%)` : o === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s*100).toFixed(0)}%)`))
}

function Ap(e = "light") {
    return e === "dark" ? {
        main: Ro[200],
        light: Ro[50],
        dark: Ro[400]
    } : {
        main: Ro[700],
        light: Ro[400],
        dark: Ro[800]
    }
}

function Op(e = "light") {
    return e === "dark" ? {
        main: wo[200],
        light: wo[50],
        dark: wo[400]
    } : {
        main: wo[500],
        light: wo[300],
        dark: wo[700]
    }
}

function Bp(e = "light") {
    return e === "dark" ? {
        main: Co[500],
        light: Co[300],
        dark: Co[700]
    } : {
        main: Co[700],
        light: Co[400],
        dark: Co[800]
    }
}

function Lp(e = "light") {
    return e === "dark" ? {
        main: $o[400],
        light: $o[300],
        dark: $o[700]
    } : {
        main: $o[700],
        light: $o[500],
        dark: $o[900]
    }
}

function Np(e = "light") {
    return e === "dark" ? {
        main: ko[400],
        light: ko[300],
        dark: ko[700]
    } : {
        main: ko[800],
        light: ko[500],
        dark: ko[900]
    }
}

function jp(e = "light") {
    return e === "dark" ? {
        main: Ko[400],
        light: Ko[300],
        dark: Ko[700]
    } : {
        main: "#ed6c02",
        light: Ko[500],
        dark: Ko[900]
    }
}

function zp(e) {
    return `oklch(from ${e} var(--__l) 0 h / var(--__a))`
}

function Wi(e) {
    const {
        mode: t = "light",
        contrastThreshold: o = 3,
        tonalOffset: r = .2,
        colorSpace: n,
        ...i
    } = e, s = e.primary || Ap(t), a = e.secondary || Op(t), l = e.error || Bp(t), c = e.info || Lp(t), d = e.success || Np(t), p = e.warning || jp(t);

    function b(v) {
        return n ? zp(v) : Zu(v, si.text.primary) >= o ? si.text.primary : Tl.text.primary
    }
    const h = ({
        color: v,
        name: x,
        mainShade: w = 500,
        lightShade: S = 300,
        darkShade: y = 700
    }) => {
        if (v = { ...v
            }, !v.main && v[w] && (v.main = v[w]), !v.hasOwnProperty("main")) throw new Error(Ut(11, x ? ` (${x})` : "", w));
        if (typeof v.main != "string") throw new Error(Ut(12, x ? ` (${x})` : "", JSON.stringify(v.main)));
        return n ? (zs(n, v, "light", S, r), zs(n, v, "dark", y, r)) : (js(v, "light", S, r), js(v, "dark", y, r)), v.contrastText || (v.contrastText = b(v.main)), v
    };
    let g;
    return t === "light" ? g = Pl() : t === "dark" && (g = El()), Ye({
        common: { ...dr
        },
        mode: t,
        primary: h({
            color: s,
            name: "primary"
        }),
        secondary: h({
            color: a,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: h({
            color: l,
            name: "error"
        }),
        warning: h({
            color: p,
            name: "warning"
        }),
        info: h({
            color: c,
            name: "info"
        }),
        success: h({
            color: d,
            name: "success"
        }),
        grey: Bc,
        contrastThreshold: o,
        getContrastText: b,
        augmentColor: h,
        tonalOffset: r,
        ...g
    }, i)
}

function Fp(e) {
    const t = {};
    return Object.entries(e).forEach(r => {
        const [n, i] = r;
        typeof i == "object" && (t[n] = `${i.fontStyle?`${i.fontStyle} `:""}${i.fontVariant?`${i.fontVariant} `:""}${i.fontWeight?`${i.fontWeight} `:""}${i.fontStretch?`${i.fontStretch} `:""}${i.fontSize||""}${i.lineHeight?`/${i.lineHeight} `:""}${i.fontFamily||""}`)
    }), t
}

function Dp(e, t) {
    return {
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [e.up("sm")]: {
                minHeight: 64
            }
        },
        ...t
    }
}

function Wp(e) {
    return Math.round(e * 1e5) / 1e5
}
const Fs = {
        textTransform: "uppercase"
    },
    Ds = '"Roboto", "Helvetica", "Arial", sans-serif';

function Ml(e, t) {
    const {
        fontFamily: o = Ds,
        fontSize: r = 14,
        fontWeightLight: n = 300,
        fontWeightRegular: i = 400,
        fontWeightMedium: s = 500,
        fontWeightBold: a = 700,
        htmlFontSize: l = 16,
        allVariants: c,
        pxToRem: d,
        ...p
    } = typeof t == "function" ? t(e) : t, b = r / 14, h = d || (v => `${v/l*b}rem`), g = (v, x, w, S, y) => ({
        fontFamily: o,
        fontWeight: v,
        fontSize: h(x),
        lineHeight: w,
        ...o === Ds ? {
            letterSpacing: `${Wp(S/x)}em`
        } : {},
        ...y,
        ...c
    }), m = {
        h1: g(n, 96, 1.167, -1.5),
        h2: g(n, 60, 1.2, -.5),
        h3: g(i, 48, 1.167, 0),
        h4: g(i, 34, 1.235, .25),
        h5: g(i, 24, 1.334, 0),
        h6: g(s, 20, 1.6, .15),
        subtitle1: g(i, 16, 1.75, .15),
        subtitle2: g(s, 14, 1.57, .1),
        body1: g(i, 16, 1.5, .15),
        body2: g(i, 14, 1.43, .15),
        button: g(s, 14, 1.75, .4, Fs),
        caption: g(i, 12, 1.66, .4),
        overline: g(i, 12, 2.66, 1, Fs),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return Ye({
        htmlFontSize: l,
        pxToRem: h,
        fontFamily: o,
        fontSize: r,
        fontWeightLight: n,
        fontWeightRegular: i,
        fontWeightMedium: s,
        fontWeightBold: a,
        ...m
    }, p, {
        clone: !1
    })
}
const Hp = .2,
    Up = .14,
    _p = .12;

function ze(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Hp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Up})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_p})`].join(",")
}
const Vp = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
    Gp = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    Il = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
    };

function Ws(e) {
    return `${Math.round(e)}ms`
}

function Kp(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3)
}

function qp(e) {
    const t = { ...Gp,
            ...e.easing
        },
        o = { ...Il,
            ...e.duration
        };
    return {
        getAutoHeightDuration: Kp,
        create: (n = ["all"], i = {}) => {
            const {
                duration: s = o.standard,
                easing: a = t.easeInOut,
                delay: l = 0,
                ...c
            } = i;
            return (Array.isArray(n) ? n : [n]).map(d => `${d} ${typeof s=="string"?s:Ws(s)} ${a} ${typeof l=="string"?l:Ws(l)}`).join(",")
        },
        ...e,
        easing: t,
        duration: o
    }
}
const Xp = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};

function Yp(e) {
    return Nt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e)
}

function Al(e = {}) {
    const t = { ...e
    };

    function o(r) {
        const n = Object.entries(r);
        for (let i = 0; i < n.length; i++) {
            const [s, a] = n[i];
            !Yp(a) || s.startsWith("unstable_") ? delete r[s] : Nt(a) && (r[s] = { ...a
            }, o(r[s]))
        }
    }
    return o(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
}

function Hs(e) {
    return typeof e == "number" ? `${(e*100).toFixed(0)}%` : `calc((${e}) * 100%)`
}
const Qp = e => {
    if (!Number.isNaN(+e)) return +e;
    const t = e.match(/\d*\.?\d+/g);
    if (!t) return 0;
    let o = 0;
    for (let r = 0; r < t.length; r += 1) o += +t[r];
    return o
};

function Jp(e) {
    Object.assign(e, {
        alpha(t, o) {
            const r = this || e;
            return r.colorSpace ? `oklch(from ${t} l c h / ${typeof o=="string"?`calc(${o})`:o})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof o=="string"?`calc(${o})`:o})` : gr(t, Qp(o))
        },
        lighten(t, o) {
            const r = this || e;
            return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Hs(o)})` : vn(t, o)
        },
        darken(t, o) {
            const r = this || e;
            return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Hs(o)})` : yn(t, o)
        }
    })
}

function ai(e = {}, ...t) {
    const {
        breakpoints: o,
        mixins: r = {},
        spacing: n,
        palette: i = {},
        transitions: s = {},
        typography: a = {},
        shape: l,
        colorSpace: c,
        ...d
    } = e;
    if (e.vars && e.generateThemeVars === void 0) throw new Error(Ut(20));
    const p = Wi({ ...i,
            colorSpace: c
        }),
        b = mn(e);
    let h = Ye(b, {
        mixins: Dp(b.breakpoints, r),
        palette: p,
        shadows: Vp.slice(),
        typography: Ml(p, a),
        transitions: qp(s),
        zIndex: { ...Xp
        }
    });
    return h = Ye(h, d), h = t.reduce((g, m) => Ye(g, m), h), h.unstable_sxConfig = { ...$r,
        ...d == null ? void 0 : d.unstable_sxConfig
    }, h.unstable_sx = function(m) {
        return Jt({
            sx: m,
            theme: this
        })
    }, h.toRuntimeSource = Al, Jp(h), h
}

function li(e) {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3
}
const Zp = [...Array(25)].map((e, t) => {
    if (t === 0) return "none";
    const o = li(t);
    return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`
});

function Ol(e) {
    return {
        inputPlaceholder: e === "dark" ? .5 : .42,
        inputUnderline: e === "dark" ? .7 : .42,
        switchTrackDisabled: e === "dark" ? .2 : .12,
        switchTrack: e === "dark" ? .3 : .38
    }
}

function Bl(e) {
    return e === "dark" ? Zp : []
}

function ef(e) {
    const {
        palette: t = {
            mode: "light"
        },
        opacity: o,
        overlays: r,
        colorSpace: n,
        ...i
    } = e, s = Wi({ ...t,
        colorSpace: n
    });
    return {
        palette: s,
        opacity: { ...Ol(s.mode),
            ...o
        },
        overlays: r || Bl(s.mode),
        ...i
    }
}

function tf(e) {
    var t;
    return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/))
}
const of = e => [...[...Array(25)].map((t, o) => `--${e?`${e}-`:""}overlays-${o}`), `--${e?`${e}-`:""}palette-AppBar-darkBg`, `--${e?`${e}-`:""}palette-AppBar-darkColor`], rf = e => (t, o) => {
    const r = e.rootSelector || ":root",
        n = e.colorSchemeSelector;
    let i = n;
    if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), e.defaultColorScheme === t) {
        if (t === "dark") {
            const s = {};
            return of(e.cssVarPrefix).forEach(a => {
                s[a] = o[a], delete o[a]
            }), i === "media" ? {
                [r]: o,
                "@media (prefers-color-scheme: dark)": {
                    [r]: s
                }
            } : i ? {
                [i.replace("%s", t)]: s,
                [`${r}, ${i.replace("%s",t)}`]: o
            } : {
                [r]: { ...o,
                    ...s
                }
            }
        }
        if (i && i !== "media") return `${r}, ${i.replace("%s",String(t))}`
    } else if (t) {
        if (i === "media") return {
            [`@media (prefers-color-scheme: ${String(t)})`]: {
                [r]: o
            }
        };
        if (i) return i.replace("%s", String(t))
    }
    return r
};

function nf(e, t) {
    t.forEach(o => {
        e[o] || (e[o] = {})
    })
}

function N(e, t, o) {
    !e[t] && o && (e[t] = o)
}

function or(e) {
    return typeof e != "string" || !e.startsWith("hsl") ? e : Sl(e)
}

function Wt(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = tr(or(e[t])))
}

function sf(e) {
    return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px"
}
const It = e => {
        try {
            return e()
        } catch {}
    },
    af = (e = "mui") => xp(e);

function Un(e, t, o, r, n) {
    if (!o) return;
    o = o === !0 ? {} : o;
    const i = n === "dark" ? "dark" : "light";
    if (!r) {
        t[n] = ef({ ...o,
            palette: {
                mode: i,
                ...o == null ? void 0 : o.palette
            },
            colorSpace: e
        });
        return
    }
    const {
        palette: s,
        ...a
    } = ai({ ...r,
        palette: {
            mode: i,
            ...o == null ? void 0 : o.palette
        },
        colorSpace: e
    });
    return t[n] = { ...o,
        palette: s,
        opacity: { ...Ol(i),
            ...o == null ? void 0 : o.opacity
        },
        overlays: (o == null ? void 0 : o.overlays) || Bl(i)
    }, a
}

function lf(e = {}, ...t) {
    const {
        colorSchemes: o = {
            light: !0
        },
        defaultColorScheme: r,
        disableCssColorScheme: n = !1,
        cssVarPrefix: i = "mui",
        nativeColor: s = !1,
        shouldSkipGeneratingVar: a = tf,
        colorSchemeSelector: l = o.light && o.dark ? "media" : void 0,
        rootSelector: c = ":root",
        ...d
    } = e, p = Object.keys(o)[0], b = r || (o.light && p !== "light" ? "light" : p), h = af(i), {
        [b]: g,
        light: m,
        dark: v,
        ...x
    } = o, w = { ...x
    };
    let S = g;
    if ((b === "dark" && !("dark" in o) || b === "light" && !("light" in o)) && (S = !0), !S) throw new Error(Ut(21, b));
    let y;
    s && (y = "oklch");
    const C = Un(y, w, S, d, b);
    m && !w.light && Un(y, w, m, void 0, "light"), v && !w.dark && Un(y, w, v, void 0, "dark");
    let R = {
        defaultColorScheme: b,
        ...C,
        cssVarPrefix: i,
        colorSchemeSelector: l,
        rootSelector: c,
        getCssVar: h,
        colorSchemes: w,
        font: { ...Fp(C.typography),
            ...C.font
        },
        spacing: sf(d.spacing)
    };
    Object.keys(R.colorSchemes).forEach(B => {
        const f = R.colorSchemes[B].palette,
            P = I => {
                const A = I.split("-"),
                    z = A[1],
                    W = A[2];
                return h(I, f[z][W])
            };
        f.mode === "light" && (N(f.common, "background", "#fff"), N(f.common, "onBackground", "#000")), f.mode === "dark" && (N(f.common, "background", "#000"), N(f.common, "onBackground", "#fff"));

        function T(I, A, z) {
            if (y) {
                let W;
                return I === no && (W = `transparent ${((1-z)*100).toFixed(0)}%`), I === Ae && (W = `#000 ${(z*100).toFixed(0)}%`), I === Oe && (W = `#fff ${(z*100).toFixed(0)}%`), `color-mix(in ${y}, ${A}, ${W})`
            }
            return I(A, z)
        }
        if (nf(f, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), f.mode === "light") {
            N(f.Alert, "errorColor", T(Ae, f.error.light, .6)), N(f.Alert, "infoColor", T(Ae, f.info.light, .6)), N(f.Alert, "successColor", T(Ae, f.success.light, .6)), N(f.Alert, "warningColor", T(Ae, f.warning.light, .6)), N(f.Alert, "errorFilledBg", P("palette-error-main")), N(f.Alert, "infoFilledBg", P("palette-info-main")), N(f.Alert, "successFilledBg", P("palette-success-main")), N(f.Alert, "warningFilledBg", P("palette-warning-main")), N(f.Alert, "errorFilledColor", It(() => f.getContrastText(f.error.main))), N(f.Alert, "infoFilledColor", It(() => f.getContrastText(f.info.main))), N(f.Alert, "successFilledColor", It(() => f.getContrastText(f.success.main))), N(f.Alert, "warningFilledColor", It(() => f.getContrastText(f.warning.main))), N(f.Alert, "errorStandardBg", T(Oe, f.error.light, .9)), N(f.Alert, "infoStandardBg", T(Oe, f.info.light, .9)), N(f.Alert, "successStandardBg", T(Oe, f.success.light, .9)), N(f.Alert, "warningStandardBg", T(Oe, f.warning.light, .9)), N(f.Alert, "errorIconColor", P("palette-error-main")), N(f.Alert, "infoIconColor", P("palette-info-main")), N(f.Alert, "successIconColor", P("palette-success-main")), N(f.Alert, "warningIconColor", P("palette-warning-main")), N(f.AppBar, "defaultBg", P("palette-grey-100")), N(f.Avatar, "defaultBg", P("palette-grey-400")), N(f.Button, "inheritContainedBg", P("palette-grey-300")), N(f.Button, "inheritContainedHoverBg", P("palette-grey-A100")), N(f.Chip, "defaultBorder", P("palette-grey-400")), N(f.Chip, "defaultAvatarColor", P("palette-grey-700")), N(f.Chip, "defaultIconColor", P("palette-grey-700")), N(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(f.LinearProgress, "primaryBg", T(Oe, f.primary.main, .62)), N(f.LinearProgress, "secondaryBg", T(Oe, f.secondary.main, .62)), N(f.LinearProgress, "errorBg", T(Oe, f.error.main, .62)), N(f.LinearProgress, "infoBg", T(Oe, f.info.main, .62)), N(f.LinearProgress, "successBg", T(Oe, f.success.main, .62)), N(f.LinearProgress, "warningBg", T(Oe, f.warning.main, .62)), N(f.Skeleton, "bg", y ? T(no, f.text.primary, .11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), N(f.Slider, "primaryTrack", T(Oe, f.primary.main, .62)), N(f.Slider, "secondaryTrack", T(Oe, f.secondary.main, .62)), N(f.Slider, "errorTrack", T(Oe, f.error.main, .62)), N(f.Slider, "infoTrack", T(Oe, f.info.main, .62)), N(f.Slider, "successTrack", T(Oe, f.success.main, .62)), N(f.Slider, "warningTrack", T(Oe, f.warning.main, .62));
            const I = y ? T(Ae, f.background.default, .6825) : Mr(f.background.default, .8);
            N(f.SnackbarContent, "bg", I), N(f.SnackbarContent, "color", It(() => y ? si.text.primary : f.getContrastText(I))), N(f.SpeedDialAction, "fabHoverBg", Mr(f.background.paper, .15)), N(f.StepConnector, "border", P("palette-grey-400")), N(f.StepContent, "border", P("palette-grey-400")), N(f.Switch, "defaultColor", P("palette-common-white")), N(f.Switch, "defaultDisabledColor", P("palette-grey-100")), N(f.Switch, "primaryDisabledColor", T(Oe, f.primary.main, .62)), N(f.Switch, "secondaryDisabledColor", T(Oe, f.secondary.main, .62)), N(f.Switch, "errorDisabledColor", T(Oe, f.error.main, .62)), N(f.Switch, "infoDisabledColor", T(Oe, f.info.main, .62)), N(f.Switch, "successDisabledColor", T(Oe, f.success.main, .62)), N(f.Switch, "warningDisabledColor", T(Oe, f.warning.main, .62)), N(f.TableCell, "border", T(Oe, T(no, f.divider, 1), .88)), N(f.Tooltip, "bg", T(no, f.grey[700], .92))
        }
        if (f.mode === "dark") {
            N(f.Alert, "errorColor", T(Oe, f.error.light, .6)), N(f.Alert, "infoColor", T(Oe, f.info.light, .6)), N(f.Alert, "successColor", T(Oe, f.success.light, .6)), N(f.Alert, "warningColor", T(Oe, f.warning.light, .6)), N(f.Alert, "errorFilledBg", P("palette-error-dark")), N(f.Alert, "infoFilledBg", P("palette-info-dark")), N(f.Alert, "successFilledBg", P("palette-success-dark")), N(f.Alert, "warningFilledBg", P("palette-warning-dark")), N(f.Alert, "errorFilledColor", It(() => f.getContrastText(f.error.dark))), N(f.Alert, "infoFilledColor", It(() => f.getContrastText(f.info.dark))), N(f.Alert, "successFilledColor", It(() => f.getContrastText(f.success.dark))), N(f.Alert, "warningFilledColor", It(() => f.getContrastText(f.warning.dark))), N(f.Alert, "errorStandardBg", T(Ae, f.error.light, .9)), N(f.Alert, "infoStandardBg", T(Ae, f.info.light, .9)), N(f.Alert, "successStandardBg", T(Ae, f.success.light, .9)), N(f.Alert, "warningStandardBg", T(Ae, f.warning.light, .9)), N(f.Alert, "errorIconColor", P("palette-error-main")), N(f.Alert, "infoIconColor", P("palette-info-main")), N(f.Alert, "successIconColor", P("palette-success-main")), N(f.Alert, "warningIconColor", P("palette-warning-main")), N(f.AppBar, "defaultBg", P("palette-grey-900")), N(f.AppBar, "darkBg", P("palette-background-paper")), N(f.AppBar, "darkColor", P("palette-text-primary")), N(f.Avatar, "defaultBg", P("palette-grey-600")), N(f.Button, "inheritContainedBg", P("palette-grey-800")), N(f.Button, "inheritContainedHoverBg", P("palette-grey-700")), N(f.Chip, "defaultBorder", P("palette-grey-700")), N(f.Chip, "defaultAvatarColor", P("palette-grey-300")), N(f.Chip, "defaultIconColor", P("palette-grey-300")), N(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(f.LinearProgress, "primaryBg", T(Ae, f.primary.main, .5)), N(f.LinearProgress, "secondaryBg", T(Ae, f.secondary.main, .5)), N(f.LinearProgress, "errorBg", T(Ae, f.error.main, .5)), N(f.LinearProgress, "infoBg", T(Ae, f.info.main, .5)), N(f.LinearProgress, "successBg", T(Ae, f.success.main, .5)), N(f.LinearProgress, "warningBg", T(Ae, f.warning.main, .5)), N(f.Skeleton, "bg", y ? T(no, f.text.primary, .13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), N(f.Slider, "primaryTrack", T(Ae, f.primary.main, .5)), N(f.Slider, "secondaryTrack", T(Ae, f.secondary.main, .5)), N(f.Slider, "errorTrack", T(Ae, f.error.main, .5)), N(f.Slider, "infoTrack", T(Ae, f.info.main, .5)), N(f.Slider, "successTrack", T(Ae, f.success.main, .5)), N(f.Slider, "warningTrack", T(Ae, f.warning.main, .5));
            const I = y ? T(Oe, f.background.default, .985) : Mr(f.background.default, .98);
            N(f.SnackbarContent, "bg", I), N(f.SnackbarContent, "color", It(() => y ? Tl.text.primary : f.getContrastText(I))), N(f.SpeedDialAction, "fabHoverBg", Mr(f.background.paper, .15)), N(f.StepConnector, "border", P("palette-grey-600")), N(f.StepContent, "border", P("palette-grey-600")), N(f.Switch, "defaultColor", P("palette-grey-300")), N(f.Switch, "defaultDisabledColor", P("palette-grey-600")), N(f.Switch, "primaryDisabledColor", T(Ae, f.primary.main, .55)), N(f.Switch, "secondaryDisabledColor", T(Ae, f.secondary.main, .55)), N(f.Switch, "errorDisabledColor", T(Ae, f.error.main, .55)), N(f.Switch, "infoDisabledColor", T(Ae, f.info.main, .55)), N(f.Switch, "successDisabledColor", T(Ae, f.success.main, .55)), N(f.Switch, "warningDisabledColor", T(Ae, f.warning.main, .55)), N(f.TableCell, "border", T(Ae, T(no, f.divider, 1), .68)), N(f.Tooltip, "bg", T(no, f.grey[700], .92))
        }
        Wt(f.background, "default"), Wt(f.background, "paper"), Wt(f.common, "background"), Wt(f.common, "onBackground"), Wt(f, "divider"), Object.keys(f).forEach(I => {
            const A = f[I];
            I !== "tonalOffset" && A && typeof A == "object" && (A.main && N(f[I], "mainChannel", tr(or(A.main))), A.light && N(f[I], "lightChannel", tr(or(A.light))), A.dark && N(f[I], "darkChannel", tr(or(A.dark))), A.contrastText && N(f[I], "contrastTextChannel", tr(or(A.contrastText))), I === "text" && (Wt(f[I], "primary"), Wt(f[I], "secondary")), I === "action" && (A.active && Wt(f[I], "active"), A.selected && Wt(f[I], "selected")))
        })
    }), R = t.reduce((B, f) => Ye(B, f), R);
    const k = {
            prefix: i,
            disableCssColorScheme: n,
            shouldSkipGeneratingVar: a,
            getSelector: rf(R),
            enableContrastVars: s
        },
        {
            vars: E,
            generateThemeVars: O,
            generateStyleSheets: M
        } = wp(R, k);
    return R.vars = E, Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([B, f]) => {
        R[B] = f
    }), R.generateThemeVars = O, R.generateStyleSheets = M, R.generateSpacing = function() {
        return ll(d.spacing, ln(this))
    }, R.getColorSchemeSelector = Rp(l), R.spacing = R.generateSpacing(), R.shouldSkipGeneratingVar = a, R.unstable_sxConfig = { ...$r,
        ...d == null ? void 0 : d.unstable_sxConfig
    }, R.unstable_sx = function(f) {
        return Jt({
            sx: f,
            theme: this
        })
    }, R.toRuntimeSource = Al, R
}

function Us(e, t, o) {
    e.colorSchemes && o && (e.colorSchemes[t] = { ...o !== !0 && o,
        palette: Wi({ ...o === !0 ? {} : o.palette,
            mode: t
        })
    })
}

function Hi(e = {}, ...t) {
    const {
        palette: o,
        cssVariables: r = !1,
        colorSchemes: n = o ? void 0 : {
            light: !0
        },
        defaultColorScheme: i = o == null ? void 0 : o.mode,
        ...s
    } = e, a = i || "light", l = n == null ? void 0 : n[a], c = { ...n,
        ...o ? {
            [a]: { ...typeof l != "boolean" && l,
                palette: o
            }
        } : void 0
    };
    if (r === !1) {
        if (!("colorSchemes" in e)) return ai(e, ...t);
        let d = o;
        "palette" in e || c[a] && (c[a] !== !0 ? d = c[a].palette : a === "dark" && (d = {
            mode: "dark"
        }));
        const p = ai({ ...e,
            palette: d
        }, ...t);
        return p.defaultColorScheme = a, p.colorSchemes = c, p.palette.mode === "light" && (p.colorSchemes.light = { ...c.light !== !0 && c.light,
            palette: p.palette
        }, Us(p, "dark", c.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = { ...c.dark !== !0 && c.dark,
            palette: p.palette
        }, Us(p, "light", c.light)), p
    }
    return !o && !("light" in c) && a === "light" && (c.light = !0), lf({ ...s,
        colorSchemes: c,
        defaultColorScheme: a,
        ...typeof r != "boolean" && r
    }, ...t)
}
const xn = Hi();

function Gt() {
    const e = hn(xn);
    return e[xt] || e
}

function cf({
    props: e,
    name: t
}) {
    return yl({
        props: e,
        name: t,
        defaultTheme: xn,
        themeId: xt
    })
}

function Ll(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const dt = e => Ll(e) && e !== "classes",
    j = gl({
        themeId: xt,
        defaultTheme: xn,
        rootShouldForwardProp: dt
    });

function df({
    theme: e,
    ...t
}) {
    const o = xt in e ? e[xt] : void 0;
    return $.jsx($l, { ...t,
        themeId: o ? xt : void 0,
        theme: o || e
    })
}
const Ir = {
        colorSchemeStorageKey: "mui-color-scheme",
        defaultLightColorScheme: "light",
        defaultDarkColorScheme: "dark",
        modeStorageKey: "mui-mode"
    },
    {
        CssVarsProvider: uf
    } = vp({
        themeId: xt,
        theme: () => Hi({
            cssVariables: !0
        }),
        colorSchemeStorageKey: Ir.colorSchemeStorageKey,
        modeStorageKey: Ir.modeStorageKey,
        defaultColorScheme: {
            light: Ir.defaultLightColorScheme,
            dark: Ir.defaultDarkColorScheme
        },
        resolveTheme: e => {
            const t = { ...e,
                typography: Ml(e.palette, e.typography)
            };
            return t.unstable_sx = function(r) {
                return Jt({
                    sx: r,
                    theme: this
                })
            }, t
        }
    }),
    pf = uf;

function cx({
    theme: e,
    ...t
}) {
    const o = u.useMemo(() => {
        if (typeof e == "function") return e;
        const r = xt in e ? e[xt] : e;
        return "colorSchemes" in r ? null : "vars" in r ? e : { ...e,
            vars: null
        }
    }, [e]);
    return o ? $.jsx(df, {
        theme: o,
        ...t
    }) : $.jsx(pf, {
        theme: e,
        ...t
    })
}

function _s(...e) {
    return e.reduce((t, o) => o == null ? t : function(...n) {
        t.apply(this, n), o.apply(this, n)
    }, () => {})
}

function Nl(e) {
    var t, o, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (t = 0; t < n; t++) e[t] && (o = Nl(e[t])) && (r && (r += " "), r += o)
        } else
            for (o in e) e[o] && (r && (r += " "), r += o);
    return r
}

function H() {
    for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (t = Nl(e)) && (r && (r += " "), r += t);
    return r
}

function ff(e) {
    return $.jsx(cl, { ...e,
        defaultTheme: xn,
        themeId: xt
    })
}

function Ui(e) {
    return function(o) {
        return $.jsx(ff, {
            styles: typeof e == "function" ? r => e({
                theme: r,
                ...o
            }) : e
        })
    }
}

function mf() {
    return Ni
}
const Z = up;

function oe(e) {
    return ap(e)
}

function gf(e) {
    return Y("MuiSvgIcon", e)
}
K("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const hf = e => {
        const {
            color: t,
            fontSize: o,
            classes: r
        } = e, n = {
            root: ["root", t !== "inherit" && `color${L(t)}`, `fontSize${L(o)}`]
        };
        return Q(n, gf, r)
    },
    bf = j("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.color !== "inherit" && t[`color${L(o.color)}`], t[`fontSize${L(o.fontSize)}`]]
        }
    })(Z(({
        theme: e
    }) => {
        var t, o, r, n, i, s, a, l, c, d, p, b, h, g;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            flexShrink: 0,
            transition: (n = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : n.call(t, "fill", {
                duration: (r = (o = (e.vars ? ? e).transitions) == null ? void 0 : o.duration) == null ? void 0 : r.shorter
            }),
            variants: [{
                props: m => !m.hasSvgAsChild,
                style: {
                    fill: "currentColor"
                }
            }, {
                props: {
                    fontSize: "inherit"
                },
                style: {
                    fontSize: "inherit"
                }
            }, {
                props: {
                    fontSize: "small"
                },
                style: {
                    fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
                }
            }, {
                props: {
                    fontSize: "medium"
                },
                style: {
                    fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem"
                }
            }, {
                props: {
                    fontSize: "large"
                },
                style: {
                    fontSize: ((d = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : d.call(c, 35)) || "2.1875rem"
                }
            }, ...Object.entries((e.vars ? ? e).palette).filter(([, m]) => m && m.main).map(([m]) => {
                var v, x;
                return {
                    props: {
                        color: m
                    },
                    style: {
                        color: (x = (v = (e.vars ? ? e).palette) == null ? void 0 : v[m]) == null ? void 0 : x.main
                    }
                }
            }), {
                props: {
                    color: "action"
                },
                style: {
                    color: (b = (p = (e.vars ? ? e).palette) == null ? void 0 : p.action) == null ? void 0 : b.active
                }
            }, {
                props: {
                    color: "disabled"
                },
                style: {
                    color: (g = (h = (e.vars ? ? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.disabled
                }
            }, {
                props: {
                    color: "inherit"
                },
                style: {
                    color: void 0
                }
            }]
        }
    })),
    ci = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiSvgIcon"
            }),
            {
                children: n,
                className: i,
                color: s = "inherit",
                component: a = "svg",
                fontSize: l = "medium",
                htmlColor: c,
                inheritViewBox: d = !1,
                titleAccess: p,
                viewBox: b = "0 0 24 24",
                ...h
            } = r,
            g = u.isValidElement(n) && n.type === "svg",
            m = { ...r,
                color: s,
                component: a,
                fontSize: l,
                instanceFontSize: t.fontSize,
                inheritViewBox: d,
                viewBox: b,
                hasSvgAsChild: g
            },
            v = {};
        d || (v.viewBox = b);
        const x = hf(m);
        return $.jsxs(bf, {
            as: a,
            className: H(x.root, i),
            focusable: "false",
            color: c,
            "aria-hidden": p ? void 0 : !0,
            role: p ? "img" : void 0,
            ref: o,
            ...v,
            ...h,
            ...g && n.props,
            ownerState: m,
            children: [g ? n.props.children : n, p ? $.jsx("title", {
                children: p
            }) : null]
        })
    });
ci.muiName = "SvgIcon";

function gt(e, t) {
    function o(r, n) {
        return $.jsx(ci, {
            "data-testid": void 0,
            ref: n,
            ...r,
            children: e
        })
    }
    return o.muiName = ci.muiName, u.memo(u.forwardRef(o))
}

function Sn(e, t = 166) {
    let o;

    function r(...n) {
        const i = () => {
            e.apply(this, n)
        };
        clearTimeout(o), o = setTimeout(i, t)
    }
    return r.clear = () => {
        clearTimeout(o)
    }, r
}

function et(e) {
    return e && e.ownerDocument || document
}

function Pt(e) {
    return et(e).defaultView || window
}

function Vs(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}

function hr(e) {
    const {
        controlled: t,
        default: o,
        name: r,
        state: n = "value"
    } = e, {
        current: i
    } = u.useRef(t !== void 0), [s, a] = u.useState(o), l = i ? t : s, c = u.useCallback(d => {
        i || a(d)
    }, []);
    return [l, c]
}

function it(e) {
    const t = u.useRef(e);
    return ct(() => {
        t.current = e
    }), u.useRef((...o) => (0, t.current)(...o)).current
}

function _e(...e) {
    const t = u.useRef(void 0),
        o = u.useCallback(r => {
            const n = e.map(i => {
                if (i == null) return null;
                if (typeof i == "function") {
                    const s = i,
                        a = s(r);
                    return typeof a == "function" ? a : () => {
                        s(null)
                    }
                }
                return i.current = r, () => {
                    i.current = null
                }
            });
            return () => {
                n.forEach(i => i == null ? void 0 : i())
            }
        }, e);
    return u.useMemo(() => e.every(r => r == null) ? null : r => {
        t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r))
    }, e)
}

function yf(e, t) {
    const o = e.charCodeAt(2);
    return e[0] === "o" && e[1] === "n" && o >= 65 && o <= 90 && typeof t == "function"
}

function jl(e, t) {
    if (!e) return t;

    function o(s, a) {
        const l = {};
        return Object.keys(a).forEach(c => {
            yf(c, a[c]) && typeof s[c] == "function" && (l[c] = (...d) => {
                s[c](...d), a[c](...d)
            })
        }), l
    }
    if (typeof e == "function" || typeof t == "function") return s => {
        const a = typeof t == "function" ? t(s) : t,
            l = typeof e == "function" ? e({ ...s,
                ...a
            }) : e,
            c = H(s == null ? void 0 : s.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className),
            d = o(l, a);
        return { ...a,
            ...l,
            ...d,
            ...!!c && {
                className: c
            },
            ...(a == null ? void 0 : a.style) && (l == null ? void 0 : l.style) && {
                style: { ...a.style,
                    ...l.style
                }
            },
            ...(a == null ? void 0 : a.sx) && (l == null ? void 0 : l.sx) && {
                sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
            }
        }
    };
    const r = t,
        n = o(e, r),
        i = H(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
    return { ...t,
        ...e,
        ...n,
        ...!!i && {
            className: i
        },
        ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
            style: { ...r.style,
                ...e.style
            }
        },
        ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
            sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
        }
    }
}

function zl(e, t) {
    if (e == null) return {};
    var o = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            o[r] = e[r]
        }
    return o
}

function di(e, t) {
    return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
        return o.__proto__ = r, o
    }, di(e, t)
}

function Fl(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, di(e, t)
}
const Gs = {
        disabled: !1
    },
    Qr = jt.createContext(null);
var vf = function(t) {
        return t.scrollTop
    },
    rr = "unmounted",
    ao = "exited",
    lo = "entering",
    To = "entered",
    ui = "exiting",
    Tt = function(e) {
        Fl(t, e);

        function t(r, n) {
            var i;
            i = e.call(this, r, n) || this;
            var s = n,
                a = s && !s.isMounting ? r.enter : r.appear,
                l;
            return i.appearStatus = null, r.in ? a ? (l = ao, i.appearStatus = lo) : l = To : r.unmountOnExit || r.mountOnEnter ? l = rr : l = ao, i.state = {
                status: l
            }, i.nextCallback = null, i
        }
        t.getDerivedStateFromProps = function(n, i) {
            var s = n.in;
            return s && i.status === rr ? {
                status: ao
            } : null
        };
        var o = t.prototype;
        return o.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, o.componentDidUpdate = function(n) {
            var i = null;
            if (n !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== lo && s !== To && (i = lo) : (s === lo || s === To) && (i = ui)
            }
            this.updateStatus(!1, i)
        }, o.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, o.getTimeouts = function() {
            var n = this.props.timeout,
                i, s, a;
            return i = s = a = n, n != null && typeof n != "number" && (i = n.exit, s = n.enter, a = n.appear !== void 0 ? n.appear : s), {
                exit: i,
                enter: s,
                appear: a
            }
        }, o.updateStatus = function(n, i) {
            if (n === void 0 && (n = !1), i !== null)
                if (this.cancelNextCallback(), i === lo) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this);
                        s && vf(s)
                    }
                    this.performEnter(n)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === ao && this.setState({
                status: rr
            })
        }, o.performEnter = function(n) {
            var i = this,
                s = this.props.enter,
                a = this.context ? this.context.isMounting : n,
                l = this.props.nodeRef ? [a] : [Tr.findDOMNode(this), a],
                c = l[0],
                d = l[1],
                p = this.getTimeouts(),
                b = a ? p.appear : p.enter;
            if (!n && !s || Gs.disabled) {
                this.safeSetState({
                    status: To
                }, function() {
                    i.props.onEntered(c)
                });
                return
            }
            this.props.onEnter(c, d), this.safeSetState({
                status: lo
            }, function() {
                i.props.onEntering(c, d), i.onTransitionEnd(b, function() {
                    i.safeSetState({
                        status: To
                    }, function() {
                        i.props.onEntered(c, d)
                    })
                })
            })
        }, o.performExit = function() {
            var n = this,
                i = this.props.exit,
                s = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : Tr.findDOMNode(this);
            if (!i || Gs.disabled) {
                this.safeSetState({
                    status: ao
                }, function() {
                    n.props.onExited(a)
                });
                return
            }
            this.props.onExit(a), this.safeSetState({
                status: ui
            }, function() {
                n.props.onExiting(a), n.onTransitionEnd(s.exit, function() {
                    n.safeSetState({
                        status: ao
                    }, function() {
                        n.props.onExited(a)
                    })
                })
            })
        }, o.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, o.safeSetState = function(n, i) {
            i = this.setNextCallback(i), this.setState(n, i)
        }, o.setNextCallback = function(n) {
            var i = this,
                s = !0;
            return this.nextCallback = function(a) {
                s && (s = !1, i.nextCallback = null, n(a))
            }, this.nextCallback.cancel = function() {
                s = !1
            }, this.nextCallback
        }, o.onTransitionEnd = function(n, i) {
            this.setNextCallback(i);
            var s = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this),
                a = n == null && !this.props.addEndListener;
            if (!s || a) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    c = l[0],
                    d = l[1];
                this.props.addEndListener(c, d)
            }
            n != null && setTimeout(this.nextCallback, n)
        }, o.render = function() {
            var n = this.state.status;
            if (n === rr) return null;
            var i = this.props,
                s = i.children;
            i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
            var a = zl(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return jt.createElement(Qr.Provider, {
                value: null
            }, typeof s == "function" ? s(n, a) : jt.cloneElement(jt.Children.only(s), a))
        }, t
    }(jt.Component);
Tt.contextType = Qr;
Tt.propTypes = {};

function Po() {}
Tt.defaultProps = { in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Po,
    onEntering: Po,
    onEntered: Po,
    onExit: Po,
    onExiting: Po,
    onExited: Po
};
Tt.UNMOUNTED = rr;
Tt.EXITED = ao;
Tt.ENTERING = lo;
Tt.ENTERED = To;
Tt.EXITING = ui;

function xf(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _i(e, t) {
    var o = function(i) {
            return t && u.isValidElement(i) ? t(i) : i
        },
        r = Object.create(null);
    return e && u.Children.map(e, function(n) {
        return n
    }).forEach(function(n) {
        r[n.key] = o(n)
    }), r
}

function Sf(e, t) {
    e = e || {}, t = t || {};

    function o(d) {
        return d in t ? t[d] : e[d]
    }
    var r = Object.create(null),
        n = [];
    for (var i in e) i in t ? n.length && (r[i] = n, n = []) : n.push(i);
    var s, a = {};
    for (var l in t) {
        if (r[l])
            for (s = 0; s < r[l].length; s++) {
                var c = r[l][s];
                a[r[l][s]] = o(c)
            }
        a[l] = o(l)
    }
    for (s = 0; s < n.length; s++) a[n[s]] = o(n[s]);
    return a
}

function uo(e, t, o) {
    return o[t] != null ? o[t] : e.props[t]
}

function Cf(e, t) {
    return _i(e.children, function(o) {
        return u.cloneElement(o, {
            onExited: t.bind(null, o),
            in: !0,
            appear: uo(o, "appear", e),
            enter: uo(o, "enter", e),
            exit: uo(o, "exit", e)
        })
    })
}

function wf(e, t, o) {
    var r = _i(e.children),
        n = Sf(t, r);
    return Object.keys(n).forEach(function(i) {
        var s = n[i];
        if (u.isValidElement(s)) {
            var a = i in t,
                l = i in r,
                c = t[i],
                d = u.isValidElement(c) && !c.props.in;
            l && (!a || d) ? n[i] = u.cloneElement(s, {
                onExited: o.bind(null, s),
                in: !0,
                exit: uo(s, "exit", e),
                enter: uo(s, "enter", e)
            }) : !l && a && !d ? n[i] = u.cloneElement(s, { in: !1
            }) : l && a && u.isValidElement(c) && (n[i] = u.cloneElement(s, {
                onExited: o.bind(null, s),
                in: c.props.in,
                exit: uo(s, "exit", e),
                enter: uo(s, "enter", e)
            }))
        }
    }), n
}
var Rf = Object.values || function(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    },
    $f = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    },
    Vi = function(e) {
        Fl(t, e);

        function t(r, n) {
            var i;
            i = e.call(this, r, n) || this;
            var s = i.handleExited.bind(xf(i));
            return i.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: s,
                firstRender: !0
            }, i
        }
        var o = t.prototype;
        return o.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, o.componentWillUnmount = function() {
            this.mounted = !1
        }, t.getDerivedStateFromProps = function(n, i) {
            var s = i.children,
                a = i.handleExited,
                l = i.firstRender;
            return {
                children: l ? Cf(n, a) : wf(n, s, a),
                firstRender: !1
            }
        }, o.handleExited = function(n, i) {
            var s = _i(this.props.children);
            n.key in s || (n.props.onExited && n.props.onExited(i), this.mounted && this.setState(function(a) {
                var l = qr({}, a.children);
                return delete l[n.key], {
                    children: l
                }
            }))
        }, o.render = function() {
            var n = this.props,
                i = n.component,
                s = n.childFactory,
                a = zl(n, ["component", "childFactory"]),
                l = this.state.contextValue,
                c = Rf(this.state.children).map(s);
            return delete a.appear, delete a.enter, delete a.exit, i === null ? jt.createElement(Qr.Provider, {
                value: l
            }, c) : jt.createElement(Qr.Provider, {
                value: l
            }, jt.createElement(i, a, c))
        }, t
    }(jt.Component);
Vi.propTypes = {};
Vi.defaultProps = $f;
const Ks = {};

function Dl(e, t) {
    const o = u.useRef(Ks);
    return o.current === Ks && (o.current = e(t)), o
}
const kf = [];

function Pf(e) {
    u.useEffect(e, kf)
}
class Cn {
    constructor() {
        Vo(this, "currentId", null);
        Vo(this, "clear", () => {
            this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null)
        });
        Vo(this, "disposeEffect", () => this.clear)
    }
    static create() {
        return new Cn
    }
    start(t, o) {
        this.clear(), this.currentId = setTimeout(() => {
            this.currentId = null, o()
        }, t)
    }
}

function Yt() {
    const e = Dl(Cn.create).current;
    return Pf(e.disposeEffect), e
}
const Wl = e => e.scrollTop;

function Oo(e, t) {
    const {
        timeout: o,
        easing: r,
        style: n = {}
    } = e;
    return {
        duration: n.transitionDuration ? ? (typeof o == "number" ? o : o[t.mode] || 0),
        easing: n.transitionTimingFunction ? ? (typeof r == "object" ? r[t.mode] : r),
        delay: n.transitionDelay
    }
}

function Tf(e) {
    return Y("MuiCollapse", e)
}
K("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Ef = e => {
        const {
            orientation: t,
            classes: o
        } = e, r = {
            root: ["root", `${t}`],
            entered: ["entered"],
            hidden: ["hidden"],
            wrapper: ["wrapper", `${t}`],
            wrapperInner: ["wrapperInner", `${t}`]
        };
        return Q(r, Tf, o)
    },
    Mf = j("div", {
        name: "MuiCollapse",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.orientation], o.state === "entered" && t.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && t.hidden]
        }
    })(Z(({
        theme: e
    }) => ({
        height: 0,
        overflow: "hidden",
        transition: e.transitions.create("height"),
        variants: [{
            props: {
                orientation: "horizontal"
            },
            style: {
                height: "auto",
                width: 0,
                transition: e.transitions.create("width")
            }
        }, {
            props: {
                state: "entered"
            },
            style: {
                height: "auto",
                overflow: "visible"
            }
        }, {
            props: {
                state: "entered",
                orientation: "horizontal"
            },
            style: {
                width: "auto"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
            style: {
                visibility: "hidden"
            }
        }]
    }))),
    If = j("div", {
        name: "MuiCollapse",
        slot: "Wrapper"
    })({
        display: "flex",
        width: "100%",
        variants: [{
            props: {
                orientation: "horizontal"
            },
            style: {
                width: "auto",
                height: "100%"
            }
        }]
    }),
    Af = j("div", {
        name: "MuiCollapse",
        slot: "WrapperInner"
    })({
        width: "100%",
        variants: [{
            props: {
                orientation: "horizontal"
            },
            style: {
                width: "auto",
                height: "100%"
            }
        }]
    }),
    pi = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiCollapse"
            }),
            {
                addEndListener: n,
                children: i,
                className: s,
                collapsedSize: a = "0px",
                component: l,
                easing: c,
                in: d,
                onEnter: p,
                onEntered: b,
                onEntering: h,
                onExit: g,
                onExited: m,
                onExiting: v,
                orientation: x = "vertical",
                style: w,
                timeout: S = Il.standard,
                TransitionComponent: y = Tt,
                ...C
            } = r,
            R = { ...r,
                orientation: x,
                collapsedSize: a
            },
            k = Ef(R),
            E = Gt(),
            O = Yt(),
            M = u.useRef(null),
            B = u.useRef(),
            f = typeof a == "number" ? `${a}px` : a,
            P = x === "horizontal",
            T = P ? "width" : "height",
            I = u.useRef(null),
            A = _e(o, I),
            z = D => V => {
                if (D) {
                    const se = I.current;
                    V === void 0 ? D(se) : D(se, V)
                }
            },
            W = () => M.current ? M.current[P ? "clientWidth" : "clientHeight"] : 0,
            F = z((D, V) => {
                M.current && P && (M.current.style.position = "absolute"), D.style[T] = f, p && p(D, V)
            }),
            U = z((D, V) => {
                const se = W();
                M.current && P && (M.current.style.position = "");
                const {
                    duration: me,
                    easing: X
                } = Oo({
                    style: w,
                    timeout: S,
                    easing: c
                }, {
                    mode: "enter"
                });
                if (S === "auto") {
                    const pe = E.transitions.getAutoHeightDuration(se);
                    D.style.transitionDuration = `${pe}ms`, B.current = pe
                } else D.style.transitionDuration = typeof me == "string" ? me : `${me}ms`;
                D.style[T] = `${se}px`, D.style.transitionTimingFunction = X, h && h(D, V)
            }),
            ie = z((D, V) => {
                D.style[T] = "auto", b && b(D, V)
            }),
            ee = z(D => {
                D.style[T] = `${W()}px`, g && g(D)
            }),
            J = z(m),
            ue = z(D => {
                const V = W(),
                    {
                        duration: se,
                        easing: me
                    } = Oo({
                        style: w,
                        timeout: S,
                        easing: c
                    }, {
                        mode: "exit"
                    });
                if (S === "auto") {
                    const X = E.transitions.getAutoHeightDuration(V);
                    D.style.transitionDuration = `${X}ms`, B.current = X
                } else D.style.transitionDuration = typeof se == "string" ? se : `${se}ms`;
                D.style[T] = f, D.style.transitionTimingFunction = me, v && v(D)
            }),
            _ = D => {
                S === "auto" && O.start(B.current || 0, D), n && n(I.current, D)
            };
        return $.jsx(y, { in: d,
            onEnter: F,
            onEntered: ie,
            onEntering: U,
            onExit: ee,
            onExited: J,
            onExiting: ue,
            addEndListener: _,
            nodeRef: I,
            timeout: S === "auto" ? null : S,
            ...C,
            children: (D, {
                ownerState: V,
                ...se
            }) => $.jsx(Mf, {
                as: l,
                className: H(k.root, s, {
                    entered: k.entered,
                    exited: !d && f === "0px" && k.hidden
                }[D]),
                style: {
                    [P ? "minWidth" : "minHeight"]: f,
                    ...w
                },
                ref: A,
                ownerState: { ...R,
                    state: D
                },
                ...se,
                children: $.jsx(If, {
                    ownerState: { ...R,
                        state: D
                    },
                    className: k.wrapper,
                    ref: M,
                    children: $.jsx(Af, {
                        ownerState: { ...R,
                            state: D
                        },
                        className: k.wrapperInner,
                        children: i
                    })
                })
            })
        })
    });
pi && (pi.muiSupportAuto = !0);

function Of(e) {
    return Y("MuiPaper", e)
}
K("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Bf = e => {
        const {
            square: t,
            elevation: o,
            variant: r,
            classes: n
        } = e, i = {
            root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
        };
        return Q(i, Of, n)
    },
    Lf = j("div", {
        name: "MuiPaper",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
        variants: [{
            props: ({
                ownerState: t
            }) => !t.square,
            style: {
                borderRadius: e.shape.borderRadius
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                border: `1px solid ${(e.vars||e).palette.divider}`
            }
        }, {
            props: {
                variant: "elevation"
            },
            style: {
                boxShadow: "var(--Paper-shadow)",
                backgroundImage: "var(--Paper-overlay)"
            }
        }]
    }))),
    bo = u.forwardRef(function(t, o) {
        var h;
        const r = oe({
                props: t,
                name: "MuiPaper"
            }),
            n = Gt(),
            {
                className: i,
                component: s = "div",
                elevation: a = 1,
                square: l = !1,
                variant: c = "elevation",
                ...d
            } = r,
            p = { ...r,
                component: s,
                elevation: a,
                square: l,
                variant: c
            },
            b = Bf(p);
        return $.jsx(Lf, {
            as: s,
            ownerState: p,
            className: H(b.root, i),
            ref: o,
            ...d,
            style: { ...c === "elevation" && {
                    "--Paper-shadow": (n.vars || n).shadows[a],
                    ...n.vars && {
                        "--Paper-overlay": (h = n.vars.overlays) == null ? void 0 : h[a]
                    },
                    ...!n.vars && n.palette.mode === "dark" && {
                        "--Paper-overlay": `linear-gradient(${gr("#fff",li(a))}, ${gr("#fff",li(a))})`
                    }
                },
                ...d.style
            }
        })
    }),
    Hl = u.createContext({});

function Nf(e) {
    return typeof e == "string"
}

function Ul(e, t, o) {
    return e === void 0 || Nf(e) ? t : { ...t,
        ownerState: { ...t.ownerState,
            ...o
        }
    }
}

function _l(e, t, o) {
    return typeof e == "function" ? e(t, o) : e
}

function Jr(e, t = []) {
    if (e === void 0) return {};
    const o = {};
    return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => {
        o[r] = e[r]
    }), o
}

function qs(e) {
    if (e === void 0) return {};
    const t = {};
    return Object.keys(e).filter(o => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach(o => {
        t[o] = e[o]
    }), t
}

function Vl(e) {
    const {
        getSlotProps: t,
        additionalProps: o,
        externalSlotProps: r,
        externalForwardedProps: n,
        className: i
    } = e;
    if (!t) {
        const h = ri(o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className),
            g = { ...o == null ? void 0 : o.style,
                ...n == null ? void 0 : n.style,
                ...r == null ? void 0 : r.style
            },
            m = { ...o,
                ...n,
                ...r
            };
        return h.length > 0 && (m.className = h), Object.keys(g).length > 0 && (m.style = g), {
            props: m,
            internalRef: void 0
        }
    }
    const s = Jr({ ...n,
            ...r
        }),
        a = qs(r),
        l = qs(n),
        c = t(s),
        d = ri(c == null ? void 0 : c.className, o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className),
        p = { ...c == null ? void 0 : c.style,
            ...o == null ? void 0 : o.style,
            ...n == null ? void 0 : n.style,
            ...r == null ? void 0 : r.style
        },
        b = { ...c,
            ...o,
            ...l,
            ...a
        };
    return d.length > 0 && (b.className = d), Object.keys(p).length > 0 && (b.style = p), {
        props: b,
        internalRef: c.ref
    }
}

function te(e, t) {
    const {
        className: o,
        elementType: r,
        ownerState: n,
        externalForwardedProps: i,
        internalForwardedProps: s,
        shouldForwardComponentProp: a = !1,
        ...l
    } = t, {
        component: c,
        slots: d = {
            [e]: void 0
        },
        slotProps: p = {
            [e]: void 0
        },
        ...b
    } = i, h = d[e] || r, g = _l(p[e], n), {
        props: {
            component: m,
            ...v
        },
        internalRef: x
    } = Vl({
        className: o,
        ...l,
        externalForwardedProps: e === "root" ? b : void 0,
        externalSlotProps: g
    }), w = _e(x, g == null ? void 0 : g.ref, t.ref), S = e === "root" ? m || c : m, y = Ul(h, { ...e === "root" && !c && !d[e] && s,
        ...e !== "root" && !d[e] && s,
        ...v,
        ...S && !a && {
            as: S
        },
        ...S && a && {
            component: S
        },
        ref: w
    }, n);
    return [h, y]
}

function jf(e) {
    return Y("MuiAccordion", e)
}
const Ar = K("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]),
    zf = e => {
        const {
            classes: t,
            square: o,
            expanded: r,
            disabled: n,
            disableGutters: i
        } = e;
        return Q({
            root: ["root", !o && "rounded", r && "expanded", n && "disabled", !i && "gutters"],
            heading: ["heading"],
            region: ["region"]
        }, jf, t)
    },
    Ff = j(bo, {
        name: "MuiAccordion",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [{
                [`& .${Ar.region}`]: t.region
            }, t.root, !o.square && t.rounded, !o.disableGutters && t.gutters]
        }
    })(Z(({
        theme: e
    }) => {
        const t = {
            duration: e.transitions.duration.shortest
        };
        return {
            position: "relative",
            transition: e.transitions.create(["margin"], t),
            overflowAnchor: "none",
            "&::before": {
                position: "absolute",
                left: 0,
                top: -1,
                right: 0,
                height: 1,
                content: '""',
                opacity: 1,
                backgroundColor: (e.vars || e).palette.divider,
                transition: e.transitions.create(["opacity", "background-color"], t)
            },
            "&:first-of-type": {
                "&::before": {
                    display: "none"
                }
            },
            [`&.${Ar.expanded}`]: {
                "&::before": {
                    opacity: 0
                },
                "&:first-of-type": {
                    marginTop: 0
                },
                "&:last-of-type": {
                    marginBottom: 0
                },
                "& + &": {
                    "&::before": {
                        display: "none"
                    }
                }
            },
            [`&.${Ar.disabled}`]: {
                backgroundColor: (e.vars || e).palette.action.disabledBackground
            }
        }
    }), Z(({
        theme: e
    }) => ({
        variants: [{
            props: t => !t.square,
            style: {
                borderRadius: 0,
                "&:first-of-type": {
                    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                    borderTopRightRadius: (e.vars || e).shape.borderRadius
                },
                "&:last-of-type": {
                    borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
                    borderBottomRightRadius: (e.vars || e).shape.borderRadius,
                    "@supports (-ms-ime-align: auto)": {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    }
                }
            }
        }, {
            props: t => !t.disableGutters,
            style: {
                [`&.${Ar.expanded}`]: {
                    margin: "16px 0"
                }
            }
        }]
    }))),
    Df = j("h3", {
        name: "MuiAccordion",
        slot: "Heading"
    })({
        all: "unset"
    }),
    Wf = j("div", {
        name: "MuiAccordion",
        slot: "Region"
    })({}),
    dx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiAccordion"
            }),
            {
                children: n,
                className: i,
                defaultExpanded: s = !1,
                disabled: a = !1,
                disableGutters: l = !1,
                expanded: c,
                onChange: d,
                square: p = !1,
                slots: b = {},
                slotProps: h = {},
                TransitionComponent: g,
                TransitionProps: m,
                ...v
            } = r,
            [x, w] = hr({
                controlled: c,
                default: s,
                name: "Accordion",
                state: "expanded"
            }),
            S = u.useCallback(U => {
                w(!x), d && d(U, !x)
            }, [x, d, w]),
            [y, ...C] = u.Children.toArray(n),
            R = u.useMemo(() => ({
                expanded: x,
                disabled: a,
                disableGutters: l,
                toggle: S
            }), [x, a, l, S]),
            k = { ...r,
                square: p,
                disabled: a,
                disableGutters: l,
                expanded: x
            },
            E = zf(k),
            O = {
                transition: g,
                ...b
            },
            M = {
                transition: m,
                ...h
            },
            B = {
                slots: O,
                slotProps: M
            },
            [f, P] = te("root", {
                elementType: Ff,
                externalForwardedProps: { ...B,
                    ...v
                },
                className: H(E.root, i),
                shouldForwardComponentProp: !0,
                ownerState: k,
                ref: o,
                additionalProps: {
                    square: p
                }
            }),
            [T, I] = te("heading", {
                elementType: Df,
                externalForwardedProps: B,
                className: E.heading,
                ownerState: k
            }),
            [A, z] = te("transition", {
                elementType: pi,
                externalForwardedProps: B,
                ownerState: k
            }),
            [W, F] = te("region", {
                elementType: Wf,
                externalForwardedProps: B,
                ownerState: k,
                className: E.region,
                additionalProps: {
                    "aria-labelledby": y.props.id,
                    id: y.props["aria-controls"],
                    role: "region"
                }
            });
        return $.jsxs(f, { ...P,
            children: [$.jsx(T, { ...I,
                children: $.jsx(Hl.Provider, {
                    value: R,
                    children: y
                })
            }), $.jsx(A, { in: x,
                timeout: "auto",
                ...z,
                children: $.jsx(W, { ...F,
                    children: C
                })
            })]
        })
    });

function Hf(e) {
    return Y("MuiAccordionDetails", e)
}
K("MuiAccordionDetails", ["root"]);
const Uf = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, Hf, t)
    },
    _f = j("div", {
        name: "MuiAccordionDetails",
        slot: "Root"
    })(Z(({
        theme: e
    }) => ({
        padding: e.spacing(1, 2, 2)
    }))),
    ux = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiAccordionDetails"
            }),
            {
                className: n,
                ...i
            } = r,
            s = r,
            a = Uf(s);
        return $.jsx(_f, {
            className: H(a.root, n),
            ref: o,
            ownerState: s,
            ...i
        })
    });

function Bo(e) {
    try {
        return e.matches(":focus-visible")
    } catch {}
    return !1
}
class Zr {
    constructor() {
        Vo(this, "mountEffect", () => {
            this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve())
        });
        this.ref = {
            current: null
        }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null
    }
    static create() {
        return new Zr
    }
    static use() {
        const t = Dl(Zr.create).current,
            [o, r] = u.useState(!1);
        return t.shouldMount = o, t.setShouldMount = r, u.useEffect(t.mountEffect, [o]), t
    }
    mount() {
        return this.mounted || (this.mounted = Gf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted
    }
    start(...t) {
        this.mount().then(() => {
            var o;
            return (o = this.ref.current) == null ? void 0 : o.start(...t)
        })
    }
    stop(...t) {
        this.mount().then(() => {
            var o;
            return (o = this.ref.current) == null ? void 0 : o.stop(...t)
        })
    }
    pulsate(...t) {
        this.mount().then(() => {
            var o;
            return (o = this.ref.current) == null ? void 0 : o.pulsate(...t)
        })
    }
}

function Vf() {
    return Zr.use()
}

function Gf() {
    let e, t;
    const o = new Promise((r, n) => {
        e = r, t = n
    });
    return o.resolve = e, o.reject = t, o
}

function Kf(e) {
    const {
        className: t,
        classes: o,
        pulsate: r = !1,
        rippleX: n,
        rippleY: i,
        rippleSize: s,
        in: a,
        onExited: l,
        timeout: c
    } = e, [d, p] = u.useState(!1), b = H(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), h = {
        width: s,
        height: s,
        top: -(s / 2) + i,
        left: -(s / 2) + n
    }, g = H(o.child, d && o.childLeaving, r && o.childPulsate);
    return !a && !d && p(!0), u.useEffect(() => {
        if (!a && l != null) {
            const m = setTimeout(l, c);
            return () => {
                clearTimeout(m)
            }
        }
    }, [l, a, c]), $.jsx("span", {
        className: b,
        style: h,
        children: $.jsx("span", {
            className: g
        })
    })
}
const yt = K("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
    fi = 550,
    qf = 80,
    Xf = eo `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
    Yf = eo `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
    Qf = eo `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
    Jf = j("span", {
        name: "MuiTouchRipple",
        slot: "Root"
    })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
    }),
    Zf = j(Kf, {
        name: "MuiTouchRipple",
        slot: "Ripple"
    })
`
  opacity: 0;
  position: absolute;

  &.${yt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Xf};
    animation-duration: ${fi}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${yt.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${yt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${yt.childLeaving} {
    opacity: 0;
    animation-name: ${Yf};
    animation-duration: ${fi}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${yt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Qf};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, em = u.forwardRef(function(t, o) {
    const r = oe({
            props: t,
            name: "MuiTouchRipple"
        }),
        {
            center: n = !1,
            classes: i = {},
            className: s,
            ...a
        } = r,
        [l, c] = u.useState([]),
        d = u.useRef(0),
        p = u.useRef(null);
    u.useEffect(() => {
        p.current && (p.current(), p.current = null)
    }, [l]);
    const b = u.useRef(!1),
        h = Yt(),
        g = u.useRef(null),
        m = u.useRef(null),
        v = u.useCallback(y => {
            const {
                pulsate: C,
                rippleX: R,
                rippleY: k,
                rippleSize: E,
                cb: O
            } = y;
            c(M => [...M, $.jsx(Zf, {
                classes: {
                    ripple: H(i.ripple, yt.ripple),
                    rippleVisible: H(i.rippleVisible, yt.rippleVisible),
                    ripplePulsate: H(i.ripplePulsate, yt.ripplePulsate),
                    child: H(i.child, yt.child),
                    childLeaving: H(i.childLeaving, yt.childLeaving),
                    childPulsate: H(i.childPulsate, yt.childPulsate)
                },
                timeout: fi,
                pulsate: C,
                rippleX: R,
                rippleY: k,
                rippleSize: E
            }, d.current)]), d.current += 1, p.current = O
        }, [i]),
        x = u.useCallback((y = {}, C = {}, R = () => {}) => {
            const {
                pulsate: k = !1,
                center: E = n || C.pulsate,
                fakeElement: O = !1
            } = C;
            if ((y == null ? void 0 : y.type) === "mousedown" && b.current) {
                b.current = !1;
                return
            }(y == null ? void 0 : y.type) === "touchstart" && (b.current = !0);
            const M = O ? null : m.current,
                B = M ? M.getBoundingClientRect() : {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                };
            let f, P, T;
            if (E || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches) f = Math.round(B.width / 2), P = Math.round(B.height / 2);
            else {
                const {
                    clientX: I,
                    clientY: A
                } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
                f = Math.round(I - B.left), P = Math.round(A - B.top)
            }
            if (E) T = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), T % 2 === 0 && (T += 1);
            else {
                const I = Math.max(Math.abs((M ? M.clientWidth : 0) - f), f) * 2 + 2,
                    A = Math.max(Math.abs((M ? M.clientHeight : 0) - P), P) * 2 + 2;
                T = Math.sqrt(I ** 2 + A ** 2)
            }
            y != null && y.touches ? g.current === null && (g.current = () => {
                v({
                    pulsate: k,
                    rippleX: f,
                    rippleY: P,
                    rippleSize: T,
                    cb: R
                })
            }, h.start(qf, () => {
                g.current && (g.current(), g.current = null)
            })) : v({
                pulsate: k,
                rippleX: f,
                rippleY: P,
                rippleSize: T,
                cb: R
            })
        }, [n, v, h]),
        w = u.useCallback(() => {
            x({}, {
                pulsate: !0
            })
        }, [x]),
        S = u.useCallback((y, C) => {
            if (h.clear(), (y == null ? void 0 : y.type) === "touchend" && g.current) {
                g.current(), g.current = null, h.start(0, () => {
                    S(y, C)
                });
                return
            }
            g.current = null, c(R => R.length > 0 ? R.slice(1) : R), p.current = C
        }, [h]);
    return u.useImperativeHandle(o, () => ({
        pulsate: w,
        start: x,
        stop: S
    }), [w, x, S]), $.jsx(Jf, {
        className: H(yt.root, i.root, s),
        ref: m,
        ...a,
        children: $.jsx(Vi, {
            component: null,
            exit: !0,
            children: l
        })
    })
});

function tm(e) {
    return Y("MuiButtonBase", e)
}
const om = K("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    rm = e => {
        const {
            disabled: t,
            focusVisible: o,
            focusVisibleClassName: r,
            classes: n
        } = e, s = Q({
            root: ["root", t && "disabled", o && "focusVisible"]
        }, tm, n);
        return o && r && (s.root += ` ${r}`), s
    },
    nm = j("button", {
        name: "MuiButtonBase",
        slot: "Root"
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {
            borderStyle: "none"
        },
        [`&.${om.disabled}`]: {
            pointerEvents: "none",
            cursor: "default"
        },
        "@media print": {
            colorAdjust: "exact"
        }
    }),
    _t = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiButtonBase"
            }),
            {
                action: n,
                centerRipple: i = !1,
                children: s,
                className: a,
                component: l = "button",
                disabled: c = !1,
                disableRipple: d = !1,
                disableTouchRipple: p = !1,
                focusRipple: b = !1,
                focusVisibleClassName: h,
                LinkComponent: g = "a",
                onBlur: m,
                onClick: v,
                onContextMenu: x,
                onDragLeave: w,
                onFocus: S,
                onFocusVisible: y,
                onKeyDown: C,
                onKeyUp: R,
                onMouseDown: k,
                onMouseLeave: E,
                onMouseUp: O,
                onTouchEnd: M,
                onTouchMove: B,
                onTouchStart: f,
                tabIndex: P = 0,
                TouchRippleProps: T,
                touchRippleRef: I,
                type: A,
                ...z
            } = r,
            W = u.useRef(null),
            F = Vf(),
            U = _e(F.ref, I),
            [ie, ee] = u.useState(!1);
        c && ie && ee(!1), u.useImperativeHandle(n, () => ({
            focusVisible: () => {
                ee(!0), W.current.focus()
            }
        }), []);
        const J = F.shouldMount && !d && !c;
        u.useEffect(() => {
            ie && b && !d && F.pulsate()
        }, [d, b, ie, F]);
        const ue = Ht(F, "start", k, p),
            _ = Ht(F, "stop", x, p),
            D = Ht(F, "stop", w, p),
            V = Ht(F, "stop", O, p),
            se = Ht(F, "stop", q => {
                ie && q.preventDefault(), E && E(q)
            }, p),
            me = Ht(F, "start", f, p),
            X = Ht(F, "stop", M, p),
            pe = Ht(F, "stop", B, p),
            ce = Ht(F, "stop", q => {
                Bo(q.target) || ee(!1), m && m(q)
            }, !1),
            de = it(q => {
                W.current || (W.current = q.currentTarget), Bo(q.target) && (ee(!0), y && y(q)), S && S(q)
            }),
            ne = () => {
                const q = W.current;
                return l && l !== "button" && !(q.tagName === "A" && q.href)
            },
            fe = it(q => {
                b && !q.repeat && ie && q.key === " " && F.stop(q, () => {
                    F.start(q)
                }), q.target === q.currentTarget && ne() && q.key === " " && q.preventDefault(), C && C(q), q.target === q.currentTarget && ne() && q.key === "Enter" && !c && (q.preventDefault(), v && v(q))
            }),
            Ne = it(q => {
                b && q.key === " " && ie && !q.defaultPrevented && F.stop(q, () => {
                    F.pulsate(q)
                }), R && R(q), v && q.target === q.currentTarget && ne() && q.key === " " && !q.defaultPrevented && v(q)
            });
        let xe = l;
        xe === "button" && (z.href || z.to) && (xe = g);
        const ye = {};
        xe === "button" ? (ye.type = A === void 0 ? "button" : A, ye.disabled = c) : (!z.href && !z.to && (ye.role = "button"), c && (ye["aria-disabled"] = c));
        const Se = _e(o, W),
            Ce = { ...r,
                centerRipple: i,
                component: l,
                disabled: c,
                disableRipple: d,
                disableTouchRipple: p,
                focusRipple: b,
                tabIndex: P,
                focusVisible: ie
            },
            be = rm(Ce);
        return $.jsxs(nm, {
            as: xe,
            className: H(be.root, a),
            ownerState: Ce,
            onBlur: ce,
            onClick: v,
            onContextMenu: _,
            onFocus: de,
            onKeyDown: fe,
            onKeyUp: Ne,
            onMouseDown: ue,
            onMouseLeave: se,
            onMouseUp: V,
            onDragLeave: D,
            onTouchEnd: X,
            onTouchMove: pe,
            onTouchStart: me,
            ref: Se,
            tabIndex: c ? -1 : P,
            type: A,
            ...ye,
            ...z,
            children: [s, J ? $.jsx(em, {
                ref: U,
                center: i,
                ...T
            }) : null]
        })
    });

function Ht(e, t, o, r = !1) {
    return it(n => (o && o(n), r || e[t](n), !0))
}

function im(e) {
    return Y("MuiAccordionSummary", e)
}
const Eo = K("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]),
    sm = e => {
        const {
            classes: t,
            expanded: o,
            disabled: r,
            disableGutters: n
        } = e;
        return Q({
            root: ["root", o && "expanded", r && "disabled", !n && "gutters"],
            focusVisible: ["focusVisible"],
            content: ["content", o && "expanded", !n && "contentGutters"],
            expandIconWrapper: ["expandIconWrapper", o && "expanded"]
        }, im, t)
    },
    am = j(_t, {
        name: "MuiAccordionSummary",
        slot: "Root"
    })(Z(({
        theme: e
    }) => {
        const t = {
            duration: e.transitions.duration.shortest
        };
        return {
            display: "flex",
            width: "100%",
            minHeight: 48,
            padding: e.spacing(0, 2),
            transition: e.transitions.create(["min-height", "background-color"], t),
            [`&.${Eo.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette.action.focus
            },
            [`&.${Eo.disabled}`]: {
                opacity: (e.vars || e).palette.action.disabledOpacity
            },
            [`&:hover:not(.${Eo.disabled})`]: {
                cursor: "pointer"
            },
            variants: [{
                props: o => !o.disableGutters,
                style: {
                    [`&.${Eo.expanded}`]: {
                        minHeight: 64
                    }
                }
            }]
        }
    })),
    lm = j("span", {
        name: "MuiAccordionSummary",
        slot: "Content"
    })(Z(({
        theme: e
    }) => ({
        display: "flex",
        textAlign: "start",
        flexGrow: 1,
        margin: "12px 0",
        variants: [{
            props: t => !t.disableGutters,
            style: {
                transition: e.transitions.create(["margin"], {
                    duration: e.transitions.duration.shortest
                }),
                [`&.${Eo.expanded}`]: {
                    margin: "20px 0"
                }
            }
        }]
    }))),
    cm = j("span", {
        name: "MuiAccordionSummary",
        slot: "ExpandIconWrapper"
    })(Z(({
        theme: e
    }) => ({
        display: "flex",
        color: (e.vars || e).palette.action.active,
        transform: "rotate(0deg)",
        transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shortest
        }),
        [`&.${Eo.expanded}`]: {
            transform: "rotate(180deg)"
        }
    }))),
    px = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiAccordionSummary"
            }),
            {
                children: n,
                className: i,
                expandIcon: s,
                focusVisibleClassName: a,
                onClick: l,
                slots: c,
                slotProps: d,
                ...p
            } = r,
            {
                disabled: b = !1,
                disableGutters: h,
                expanded: g,
                toggle: m
            } = u.useContext(Hl),
            v = M => {
                m && m(M), l && l(M)
            },
            x = { ...r,
                expanded: g,
                disabled: b,
                disableGutters: h
            },
            w = sm(x),
            S = {
                slots: c,
                slotProps: d
            },
            [y, C] = te("root", {
                ref: o,
                shouldForwardComponentProp: !0,
                className: H(w.root, i),
                elementType: am,
                externalForwardedProps: { ...S,
                    ...p
                },
                ownerState: x,
                additionalProps: {
                    focusRipple: !1,
                    disableRipple: !0,
                    disabled: b,
                    "aria-expanded": g,
                    focusVisibleClassName: H(w.focusVisible, a)
                },
                getSlotProps: M => ({ ...M,
                    onClick: B => {
                        var f;
                        (f = M.onClick) == null || f.call(M, B), v(B)
                    }
                })
            }),
            [R, k] = te("content", {
                className: w.content,
                elementType: lm,
                externalForwardedProps: S,
                ownerState: x
            }),
            [E, O] = te("expandIconWrapper", {
                className: w.expandIconWrapper,
                elementType: cm,
                externalForwardedProps: S,
                ownerState: x
            });
        return $.jsxs(y, { ...C,
            children: [$.jsx(R, { ...k,
                children: n
            }), s && $.jsx(E, { ...O,
                children: s
            })]
        })
    });

function dm(e) {
    return typeof e.main == "string"
}

function um(e, t = []) {
    if (!dm(e)) return !1;
    for (const o of t)
        if (!e.hasOwnProperty(o) || typeof e[o] != "string") return !1;
    return !0
}

function Le(e = []) {
    return ([, t]) => t && um(t, e)
}

function pm(e) {
    return Y("MuiAlert", e)
}
const Xs = K("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);

function fm(e) {
    return Y("MuiCircularProgress", e)
}
K("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const qt = 44,
    mi = eo `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
    gi = eo `
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
    mm = typeof mi != "string" ? Ho `
        animation: ${mi} 1.4s linear infinite;
      ` : null,
    gm = typeof gi != "string" ? Ho `
        animation: ${gi} 1.4s ease-in-out infinite;
      ` : null,
    hm = e => {
        const {
            classes: t,
            variant: o,
            color: r,
            disableShrink: n
        } = e, i = {
            root: ["root", o, `color${L(r)}`],
            svg: ["svg"],
            circle: ["circle", `circle${L(o)}`, n && "circleDisableShrink"]
        };
        return Q(i, fm, t)
    },
    bm = j("span", {
        name: "MuiCircularProgress",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], t[`color${L(o.color)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "inline-block",
        variants: [{
            props: {
                variant: "determinate"
            },
            style: {
                transition: e.transitions.create("transform")
            }
        }, {
            props: {
                variant: "indeterminate"
            },
            style: mm || {
                animation: `${mi} 1.4s linear infinite`
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                color: (e.vars || e).palette[t].main
            }
        }))]
    }))),
    ym = j("svg", {
        name: "MuiCircularProgress",
        slot: "Svg"
    })({
        display: "block"
    }),
    vm = j("circle", {
        name: "MuiCircularProgress",
        slot: "Circle",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.circle, t[`circle${L(o.variant)}`], o.disableShrink && t.circleDisableShrink]
        }
    })(Z(({
        theme: e
    }) => ({
        stroke: "currentColor",
        variants: [{
            props: {
                variant: "determinate"
            },
            style: {
                transition: e.transitions.create("stroke-dashoffset")
            }
        }, {
            props: {
                variant: "indeterminate"
            },
            style: {
                strokeDasharray: "80px, 200px",
                strokeDashoffset: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.variant === "indeterminate" && !t.disableShrink,
            style: gm || {
                animation: `${gi} 1.4s ease-in-out infinite`
            }
        }]
    }))),
    Gl = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiCircularProgress"
            }),
            {
                className: n,
                color: i = "primary",
                disableShrink: s = !1,
                size: a = 40,
                style: l,
                thickness: c = 3.6,
                value: d = 0,
                variant: p = "indeterminate",
                ...b
            } = r,
            h = { ...r,
                color: i,
                disableShrink: s,
                size: a,
                thickness: c,
                value: d,
                variant: p
            },
            g = hm(h),
            m = {},
            v = {},
            x = {};
        if (p === "determinate") {
            const w = 2 * Math.PI * ((qt - c) / 2);
            m.strokeDasharray = w.toFixed(3), x["aria-valuenow"] = Math.round(d), m.strokeDashoffset = `${((100-d)/100*w).toFixed(3)}px`, v.transform = "rotate(-90deg)"
        }
        return $.jsx(bm, {
            className: H(g.root, n),
            style: {
                width: a,
                height: a,
                ...v,
                ...l
            },
            ownerState: h,
            ref: o,
            role: "progressbar",
            ...x,
            ...b,
            children: $.jsx(ym, {
                className: g.svg,
                ownerState: h,
                viewBox: `${qt/2} ${qt/2} ${qt} ${qt}`,
                children: $.jsx(vm, {
                    className: g.circle,
                    style: m,
                    ownerState: h,
                    cx: qt,
                    cy: qt,
                    r: (qt - c) / 2,
                    fill: "none",
                    strokeWidth: c
                })
            })
        })
    });

function xm(e) {
    return Y("MuiIconButton", e)
}
const Ys = K("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]),
    Sm = e => {
        const {
            classes: t,
            disabled: o,
            color: r,
            edge: n,
            size: i,
            loading: s
        } = e, a = {
            root: ["root", s && "loading", o && "disabled", r !== "default" && `color${L(r)}`, n && `edge${L(n)}`, `size${L(i)}`],
            loadingIndicator: ["loadingIndicator"],
            loadingWrapper: ["loadingWrapper"]
        };
        return Q(a, xm, t)
    },
    Cm = j(_t, {
        name: "MuiIconButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${L(o.color)}`], o.edge && t[`edge${L(o.edge)}`], t[`size${L(o.size)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        textAlign: "center",
        flex: "0 0 auto",
        fontSize: e.typography.pxToRem(24),
        padding: 8,
        borderRadius: "50%",
        color: (e.vars || e).palette.action.active,
        transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest
        }),
        variants: [{
            props: t => !t.disableRipple,
            style: {
                "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
                "&:hover": {
                    backgroundColor: "var(--IconButton-hoverBg)",
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }, {
            props: {
                edge: "start"
            },
            style: {
                marginLeft: -12
            }
        }, {
            props: {
                edge: "start",
                size: "small"
            },
            style: {
                marginLeft: -3
            }
        }, {
            props: {
                edge: "end"
            },
            style: {
                marginRight: -12
            }
        }, {
            props: {
                edge: "end",
                size: "small"
            },
            style: {
                marginRight: -3
            }
        }]
    })), Z(({
        theme: e
    }) => ({
        variants: [{
            props: {
                color: "inherit"
            },
            style: {
                color: "inherit"
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                color: (e.vars || e).palette[t].main
            }
        })), ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
            }
        })), {
            props: {
                size: "small"
            },
            style: {
                padding: 5,
                fontSize: e.typography.pxToRem(18)
            }
        }, {
            props: {
                size: "large"
            },
            style: {
                padding: 12,
                fontSize: e.typography.pxToRem(28)
            }
        }],
        [`&.${Ys.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled
        },
        [`&.${Ys.loading}`]: {
            color: "transparent"
        }
    }))),
    wm = j("span", {
        name: "MuiIconButton",
        slot: "LoadingIndicator"
    })(({
        theme: e
    }) => ({
        display: "none",
        position: "absolute",
        visibility: "visible",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: (e.vars || e).palette.action.disabled,
        variants: [{
            props: {
                loading: !0
            },
            style: {
                display: "flex"
            }
        }]
    })),
    Rm = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiIconButton"
            }),
            {
                edge: n = !1,
                children: i,
                className: s,
                color: a = "default",
                disabled: l = !1,
                disableFocusRipple: c = !1,
                size: d = "medium",
                id: p,
                loading: b = null,
                loadingIndicator: h,
                ...g
            } = r,
            m = ho(p),
            v = h ? ? $.jsx(Gl, {
                "aria-labelledby": m,
                color: "inherit",
                size: 16
            }),
            x = { ...r,
                edge: n,
                color: a,
                disabled: l,
                disableFocusRipple: c,
                loading: b,
                loadingIndicator: v,
                size: d
            },
            w = Sm(x);
        return $.jsxs(Cm, {
            id: b ? m : p,
            className: H(w.root, s),
            centerRipple: !0,
            focusRipple: !c,
            disabled: l || b,
            ref: o,
            ...g,
            ownerState: x,
            children: [typeof b == "boolean" && $.jsx("span", {
                className: w.loadingWrapper,
                style: {
                    display: "contents"
                },
                children: $.jsx(wm, {
                    className: w.loadingIndicator,
                    ownerState: x,
                    children: b && v
                })
            }), i]
        })
    }),
    $m = gt($.jsx("path", {
        d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
    })),
    km = gt($.jsx("path", {
        d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
    })),
    Pm = gt($.jsx("path", {
        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    })),
    Tm = gt($.jsx("path", {
        d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
    })),
    Em = gt($.jsx("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    })),
    Mm = e => {
        const {
            variant: t,
            color: o,
            severity: r,
            classes: n
        } = e, i = {
            root: ["root", `color${L(o||r)}`, `${t}${L(o||r)}`, `${t}`],
            icon: ["icon"],
            message: ["message"],
            action: ["action"]
        };
        return Q(i, pm, n)
    },
    Im = j(bo, {
        name: "MuiAlert",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], t[`${o.variant}${L(o.color||o.severity)}`]]
        }
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? e.darken : e.lighten,
            o = e.palette.mode === "light" ? e.lighten : e.darken;
        return { ...e.typography.body2,
            backgroundColor: "transparent",
            display: "flex",
            padding: "6px 16px",
            variants: [...Object.entries(e.palette).filter(Le(["light"])).map(([r]) => ({
                props: {
                    colorSeverity: r,
                    variant: "standard"
                },
                style: {
                    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, .6),
                    backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, .9),
                    [`& .${Xs.icon}`]: e.vars ? {
                        color: e.vars.palette.Alert[`${r}IconColor`]
                    } : {
                        color: e.palette[r].main
                    }
                }
            })), ...Object.entries(e.palette).filter(Le(["light"])).map(([r]) => ({
                props: {
                    colorSeverity: r,
                    variant: "outlined"
                },
                style: {
                    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, .6),
                    border: `1px solid ${(e.vars||e).palette[r].light}`,
                    [`& .${Xs.icon}`]: e.vars ? {
                        color: e.vars.palette.Alert[`${r}IconColor`]
                    } : {
                        color: e.palette[r].main
                    }
                }
            })), ...Object.entries(e.palette).filter(Le(["dark"])).map(([r]) => ({
                props: {
                    colorSeverity: r,
                    variant: "filled"
                },
                style: {
                    fontWeight: e.typography.fontWeightMedium,
                    ...e.vars ? {
                        color: e.vars.palette.Alert[`${r}FilledColor`],
                        backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
                    } : {
                        backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
                        color: e.palette.getContrastText(e.palette[r].main)
                    }
                }
            }))]
        }
    })),
    Am = j("div", {
        name: "MuiAlert",
        slot: "Icon"
    })({
        marginRight: 12,
        padding: "7px 0",
        display: "flex",
        fontSize: 22,
        opacity: .9
    }),
    Om = j("div", {
        name: "MuiAlert",
        slot: "Message"
    })({
        padding: "8px 0",
        minWidth: 0,
        overflow: "auto"
    }),
    Bm = j("div", {
        name: "MuiAlert",
        slot: "Action"
    })({
        display: "flex",
        alignItems: "flex-start",
        padding: "4px 0 0 16px",
        marginLeft: "auto",
        marginRight: -8
    }),
    Qs = {
        success: $.jsx($m, {
            fontSize: "inherit"
        }),
        warning: $.jsx(km, {
            fontSize: "inherit"
        }),
        error: $.jsx(Pm, {
            fontSize: "inherit"
        }),
        info: $.jsx(Tm, {
            fontSize: "inherit"
        })
    },
    fx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiAlert"
            }),
            {
                action: n,
                children: i,
                className: s,
                closeText: a = "Close",
                color: l,
                components: c = {},
                componentsProps: d = {},
                icon: p,
                iconMapping: b = Qs,
                onClose: h,
                role: g = "alert",
                severity: m = "success",
                slotProps: v = {},
                slots: x = {},
                variant: w = "standard",
                ...S
            } = r,
            y = { ...r,
                color: l,
                severity: m,
                variant: w,
                colorSeverity: l || m
            },
            C = Mm(y),
            R = {
                slots: {
                    closeButton: c.CloseButton,
                    closeIcon: c.CloseIcon,
                    ...x
                },
                slotProps: { ...d,
                    ...v
                }
            },
            [k, E] = te("root", {
                ref: o,
                shouldForwardComponentProp: !0,
                className: H(C.root, s),
                elementType: Im,
                externalForwardedProps: { ...R,
                    ...S
                },
                ownerState: y,
                additionalProps: {
                    role: g,
                    elevation: 0
                }
            }),
            [O, M] = te("icon", {
                className: C.icon,
                elementType: Am,
                externalForwardedProps: R,
                ownerState: y
            }),
            [B, f] = te("message", {
                className: C.message,
                elementType: Om,
                externalForwardedProps: R,
                ownerState: y
            }),
            [P, T] = te("action", {
                className: C.action,
                elementType: Bm,
                externalForwardedProps: R,
                ownerState: y
            }),
            [I, A] = te("closeButton", {
                elementType: Rm,
                externalForwardedProps: R,
                ownerState: y
            }),
            [z, W] = te("closeIcon", {
                elementType: Em,
                externalForwardedProps: R,
                ownerState: y
            });
        return $.jsxs(k, { ...E,
            children: [p !== !1 ? $.jsx(O, { ...M,
                children: p || b[m] || Qs[m]
            }) : null, $.jsx(B, { ...f,
                children: i
            }), n != null ? $.jsx(P, { ...T,
                children: n
            }) : null, n == null && h ? $.jsx(P, { ...T,
                children: $.jsx(I, {
                    size: "small",
                    "aria-label": a,
                    title: a,
                    color: "inherit",
                    onClick: h,
                    ...A,
                    children: $.jsx(z, {
                        fontSize: "small",
                        ...W
                    })
                })
            }) : null]
        })
    });

function Lm(e) {
    return Y("MuiTypography", e)
}
K("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Nm = {
        primary: !0,
        secondary: !0,
        error: !0,
        info: !0,
        success: !0,
        warning: !0,
        textPrimary: !0,
        textSecondary: !0,
        textDisabled: !0
    },
    jm = mf(),
    zm = e => {
        const {
            align: t,
            gutterBottom: o,
            noWrap: r,
            paragraph: n,
            variant: i,
            classes: s
        } = e, a = {
            root: ["root", i, e.align !== "inherit" && `align${L(t)}`, o && "gutterBottom", r && "noWrap", n && "paragraph"]
        };
        return Q(a, Lm, s)
    },
    Fm = j("span", {
        name: "MuiTypography",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${L(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph]
        }
    })(Z(({
        theme: e
    }) => {
        var t;
        return {
            margin: 0,
            variants: [{
                props: {
                    variant: "inherit"
                },
                style: {
                    font: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit"
                }
            }, ...Object.entries(e.typography).filter(([o, r]) => o !== "inherit" && r && typeof r == "object").map(([o, r]) => ({
                props: {
                    variant: o
                },
                style: r
            })), ...Object.entries(e.palette).filter(Le()).map(([o]) => ({
                props: {
                    color: o
                },
                style: {
                    color: (e.vars || e).palette[o].main
                }
            })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
                props: {
                    color: `text${L(o)}`
                },
                style: {
                    color: (e.vars || e).palette.text[o]
                }
            })), {
                props: ({
                    ownerState: o
                }) => o.align !== "inherit",
                style: {
                    textAlign: "var(--Typography-textAlign)"
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.noWrap,
                style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.gutterBottom,
                style: {
                    marginBottom: "0.35em"
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.paragraph,
                style: {
                    marginBottom: 16
                }
            }]
        }
    })),
    Js = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p"
    },
    en = u.forwardRef(function(t, o) {
        const {
            color: r,
            ...n
        } = oe({
            props: t,
            name: "MuiTypography"
        }), i = !Nm[r], s = jm({ ...n,
            ...i && {
                color: r
            }
        }), {
            align: a = "inherit",
            className: l,
            component: c,
            gutterBottom: d = !1,
            noWrap: p = !1,
            paragraph: b = !1,
            variant: h = "body1",
            variantMapping: g = Js,
            ...m
        } = s, v = { ...s,
            align: a,
            color: r,
            className: l,
            component: c,
            gutterBottom: d,
            noWrap: p,
            paragraph: b,
            variant: h,
            variantMapping: g
        }, x = c || (b ? "p" : g[h] || Js[h]) || "span", w = zm(v);
        return $.jsx(Fm, {
            as: x,
            ref: o,
            className: H(w.root, l),
            ...m,
            ownerState: v,
            style: { ...a !== "inherit" && {
                    "--Typography-textAlign": a
                },
                ...m.style
            }
        })
    }),
    Kl = e => {
        const t = u.useRef({});
        return u.useEffect(() => {
            t.current = e
        }), t.current
    };
var st = "top",
    Ct = "bottom",
    wt = "right",
    at = "left",
    Gi = "auto",
    kr = [st, Ct, wt, at],
    Lo = "start",
    br = "end",
    Dm = "clippingParents",
    ql = "viewport",
    Xo = "popper",
    Wm = "reference",
    Zs = kr.reduce(function(e, t) {
        return e.concat([t + "-" + Lo, t + "-" + br])
    }, []),
    Xl = [].concat(kr, [Gi]).reduce(function(e, t) {
        return e.concat([t, t + "-" + Lo, t + "-" + br])
    }, []),
    Hm = "beforeRead",
    Um = "read",
    _m = "afterRead",
    Vm = "beforeMain",
    Gm = "main",
    Km = "afterMain",
    qm = "beforeWrite",
    Xm = "write",
    Ym = "afterWrite",
    Qm = [Hm, Um, _m, Vm, Gm, Km, qm, Xm, Ym];

function Dt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function mt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function go(e) {
    var t = mt(e).Element;
    return e instanceof t || e instanceof Element
}

function St(e) {
    var t = mt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Ki(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = mt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function Jm(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(o) {
        var r = t.styles[o] || {},
            n = t.attributes[o] || {},
            i = t.elements[o];
        !St(i) || !Dt(i) || (Object.assign(i.style, r), Object.keys(n).forEach(function(s) {
            var a = n[s];
            a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a)
        }))
    })
}

function Zm(e) {
    var t = e.state,
        o = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
        function() {
            Object.keys(t.elements).forEach(function(r) {
                var n = t.elements[r],
                    i = t.attributes[r] || {},
                    s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]),
                    a = s.reduce(function(l, c) {
                        return l[c] = "", l
                    }, {});
                !St(n) || !Dt(n) || (Object.assign(n.style, a), Object.keys(i).forEach(function(l) {
                    n.removeAttribute(l)
                }))
            })
        }
}
const eg = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Jm,
    effect: Zm,
    requires: ["computeStyles"]
};

function Ft(e) {
    return e.split("-")[0]
}
var po = Math.max,
    tn = Math.min,
    No = Math.round;

function hi() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Yl() {
    return !/^((?!chrome|android).)*safari/i.test(hi())
}

function jo(e, t, o) {
    t === void 0 && (t = !1), o === void 0 && (o = !1);
    var r = e.getBoundingClientRect(),
        n = 1,
        i = 1;
    t && St(e) && (n = e.offsetWidth > 0 && No(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && No(r.height) / e.offsetHeight || 1);
    var s = go(e) ? mt(e) : window,
        a = s.visualViewport,
        l = !Yl() && o,
        c = (r.left + (l && a ? a.offsetLeft : 0)) / n,
        d = (r.top + (l && a ? a.offsetTop : 0)) / i,
        p = r.width / n,
        b = r.height / i;
    return {
        width: p,
        height: b,
        top: d,
        right: c + p,
        bottom: d + b,
        left: c,
        x: c,
        y: d
    }
}

function qi(e) {
    var t = jo(e),
        o = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: o,
        height: r
    }
}

function Ql(e, t) {
    var o = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (o && Ki(o)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function Vt(e) {
    return mt(e).getComputedStyle(e)
}

function tg(e) {
    return ["table", "td", "th"].indexOf(Dt(e)) >= 0
}

function to(e) {
    return ((go(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function wn(e) {
    return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ki(e) ? e.host : null) || to(e)
}

function ea(e) {
    return !St(e) || Vt(e).position === "fixed" ? null : e.offsetParent
}

function og(e) {
    var t = /firefox/i.test(hi()),
        o = /Trident/i.test(hi());
    if (o && St(e)) {
        var r = Vt(e);
        if (r.position === "fixed") return null
    }
    var n = wn(e);
    for (Ki(n) && (n = n.host); St(n) && ["html", "body"].indexOf(Dt(n)) < 0;) {
        var i = Vt(n);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return n;
        n = n.parentNode
    }
    return null
}

function Pr(e) {
    for (var t = mt(e), o = ea(e); o && tg(o) && Vt(o).position === "static";) o = ea(o);
    return o && (Dt(o) === "html" || Dt(o) === "body" && Vt(o).position === "static") ? t : o || og(e) || t
}

function Xi(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function sr(e, t, o) {
    return po(e, tn(t, o))
}

function rg(e, t, o) {
    var r = sr(e, t, o);
    return r > o ? o : r
}

function Jl() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Zl(e) {
    return Object.assign({}, Jl(), e)
}

function ec(e, t) {
    return t.reduce(function(o, r) {
        return o[r] = e, o
    }, {})
}
var ng = function(t, o) {
    return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
        placement: o.placement
    })) : t, Zl(typeof t != "number" ? t : ec(t, kr))
};

function ig(e) {
    var t, o = e.state,
        r = e.name,
        n = e.options,
        i = o.elements.arrow,
        s = o.modifiersData.popperOffsets,
        a = Ft(o.placement),
        l = Xi(a),
        c = [at, wt].indexOf(a) >= 0,
        d = c ? "height" : "width";
    if (!(!i || !s)) {
        var p = ng(n.padding, o),
            b = qi(i),
            h = l === "y" ? st : at,
            g = l === "y" ? Ct : wt,
            m = o.rects.reference[d] + o.rects.reference[l] - s[l] - o.rects.popper[d],
            v = s[l] - o.rects.reference[l],
            x = Pr(i),
            w = x ? l === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
            S = m / 2 - v / 2,
            y = p[h],
            C = w - b[d] - p[g],
            R = w / 2 - b[d] / 2 + S,
            k = sr(y, R, C),
            E = l;
        o.modifiersData[r] = (t = {}, t[E] = k, t.centerOffset = k - R, t)
    }
}

function sg(e) {
    var t = e.state,
        o = e.options,
        r = o.element,
        n = r === void 0 ? "[data-popper-arrow]" : r;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || Ql(t.elements.popper, n) && (t.elements.arrow = n))
}
const ag = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: ig,
    effect: sg,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function zo(e) {
    return e.split("-")[1]
}
var lg = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function cg(e, t) {
    var o = e.x,
        r = e.y,
        n = t.devicePixelRatio || 1;
    return {
        x: No(o * n) / n || 0,
        y: No(r * n) / n || 0
    }
}

function ta(e) {
    var t, o = e.popper,
        r = e.popperRect,
        n = e.placement,
        i = e.variation,
        s = e.offsets,
        a = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        d = e.roundOffsets,
        p = e.isFixed,
        b = s.x,
        h = b === void 0 ? 0 : b,
        g = s.y,
        m = g === void 0 ? 0 : g,
        v = typeof d == "function" ? d({
            x: h,
            y: m
        }) : {
            x: h,
            y: m
        };
    h = v.x, m = v.y;
    var x = s.hasOwnProperty("x"),
        w = s.hasOwnProperty("y"),
        S = at,
        y = st,
        C = window;
    if (c) {
        var R = Pr(o),
            k = "clientHeight",
            E = "clientWidth";
        if (R === mt(o) && (R = to(o), Vt(R).position !== "static" && a === "absolute" && (k = "scrollHeight", E = "scrollWidth")), R = R, n === st || (n === at || n === wt) && i === br) {
            y = Ct;
            var O = p && R === C && C.visualViewport ? C.visualViewport.height : R[k];
            m -= O - r.height, m *= l ? 1 : -1
        }
        if (n === at || (n === st || n === Ct) && i === br) {
            S = wt;
            var M = p && R === C && C.visualViewport ? C.visualViewport.width : R[E];
            h -= M - r.width, h *= l ? 1 : -1
        }
    }
    var B = Object.assign({
            position: a
        }, c && lg),
        f = d === !0 ? cg({
            x: h,
            y: m
        }, mt(o)) : {
            x: h,
            y: m
        };
    if (h = f.x, m = f.y, l) {
        var P;
        return Object.assign({}, B, (P = {}, P[y] = w ? "0" : "", P[S] = x ? "0" : "", P.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", P))
    }
    return Object.assign({}, B, (t = {}, t[y] = w ? m + "px" : "", t[S] = x ? h + "px" : "", t.transform = "", t))
}

function dg(e) {
    var t = e.state,
        o = e.options,
        r = o.gpuAcceleration,
        n = r === void 0 ? !0 : r,
        i = o.adaptive,
        s = i === void 0 ? !0 : i,
        a = o.roundOffsets,
        l = a === void 0 ? !0 : a,
        c = {
            placement: Ft(t.placement),
            variation: zo(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: n,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ta(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ta(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const ug = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: dg,
    data: {}
};
var Or = {
    passive: !0
};

function pg(e) {
    var t = e.state,
        o = e.instance,
        r = e.options,
        n = r.scroll,
        i = n === void 0 ? !0 : n,
        s = r.resize,
        a = s === void 0 ? !0 : s,
        l = mt(t.elements.popper),
        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function(d) {
            d.addEventListener("scroll", o.update, Or)
        }), a && l.addEventListener("resize", o.update, Or),
        function() {
            i && c.forEach(function(d) {
                d.removeEventListener("scroll", o.update, Or)
            }), a && l.removeEventListener("resize", o.update, Or)
        }
}
const fg = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: pg,
    data: {}
};
var mg = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Vr(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return mg[t]
    })
}
var gg = {
    start: "end",
    end: "start"
};

function oa(e) {
    return e.replace(/start|end/g, function(t) {
        return gg[t]
    })
}

function Yi(e) {
    var t = mt(e),
        o = t.pageXOffset,
        r = t.pageYOffset;
    return {
        scrollLeft: o,
        scrollTop: r
    }
}

function Qi(e) {
    return jo(to(e)).left + Yi(e).scrollLeft
}

function hg(e, t) {
    var o = mt(e),
        r = to(e),
        n = o.visualViewport,
        i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (n) {
        i = n.width, s = n.height;
        var c = Yl();
        (c || !c && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a + Qi(e),
        y: l
    }
}

function bg(e) {
    var t, o = to(e),
        r = Yi(e),
        n = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = po(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
        s = po(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
        a = -r.scrollLeft + Qi(e),
        l = -r.scrollTop;
    return Vt(n || o).direction === "rtl" && (a += po(o.clientWidth, n ? n.clientWidth : 0) - i), {
        width: i,
        height: s,
        x: a,
        y: l
    }
}

function Ji(e) {
    var t = Vt(e),
        o = t.overflow,
        r = t.overflowX,
        n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(o + n + r)
}

function tc(e) {
    return ["html", "body", "#document"].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : St(e) && Ji(e) ? e : tc(wn(e))
}

function ar(e, t) {
    var o;
    t === void 0 && (t = []);
    var r = tc(e),
        n = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
        i = mt(r),
        s = n ? [i].concat(i.visualViewport || [], Ji(r) ? r : []) : r,
        a = t.concat(s);
    return n ? a : a.concat(ar(wn(s)))
}

function bi(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function yg(e, t) {
    var o = jo(e, !1, t === "fixed");
    return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o
}

function ra(e, t, o) {
    return t === ql ? bi(hg(e, o)) : go(t) ? yg(t, o) : bi(bg(to(e)))
}

function vg(e) {
    var t = ar(wn(e)),
        o = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
        r = o && St(e) ? Pr(e) : e;
    return go(r) ? t.filter(function(n) {
        return go(n) && Ql(n, r) && Dt(n) !== "body"
    }) : []
}

function xg(e, t, o, r) {
    var n = t === "clippingParents" ? vg(e) : [].concat(t),
        i = [].concat(n, [o]),
        s = i[0],
        a = i.reduce(function(l, c) {
            var d = ra(e, c, r);
            return l.top = po(d.top, l.top), l.right = tn(d.right, l.right), l.bottom = tn(d.bottom, l.bottom), l.left = po(d.left, l.left), l
        }, ra(e, s, r));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
}

function oc(e) {
    var t = e.reference,
        o = e.element,
        r = e.placement,
        n = r ? Ft(r) : null,
        i = r ? zo(r) : null,
        s = t.x + t.width / 2 - o.width / 2,
        a = t.y + t.height / 2 - o.height / 2,
        l;
    switch (n) {
        case st:
            l = {
                x: s,
                y: t.y - o.height
            };
            break;
        case Ct:
            l = {
                x: s,
                y: t.y + t.height
            };
            break;
        case wt:
            l = {
                x: t.x + t.width,
                y: a
            };
            break;
        case at:
            l = {
                x: t.x - o.width,
                y: a
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
    }
    var c = n ? Xi(n) : null;
    if (c != null) {
        var d = c === "y" ? "height" : "width";
        switch (i) {
            case Lo:
                l[c] = l[c] - (t[d] / 2 - o[d] / 2);
                break;
            case br:
                l[c] = l[c] + (t[d] / 2 - o[d] / 2);
                break
        }
    }
    return l
}

function yr(e, t) {
    t === void 0 && (t = {});
    var o = t,
        r = o.placement,
        n = r === void 0 ? e.placement : r,
        i = o.strategy,
        s = i === void 0 ? e.strategy : i,
        a = o.boundary,
        l = a === void 0 ? Dm : a,
        c = o.rootBoundary,
        d = c === void 0 ? ql : c,
        p = o.elementContext,
        b = p === void 0 ? Xo : p,
        h = o.altBoundary,
        g = h === void 0 ? !1 : h,
        m = o.padding,
        v = m === void 0 ? 0 : m,
        x = Zl(typeof v != "number" ? v : ec(v, kr)),
        w = b === Xo ? Wm : Xo,
        S = e.rects.popper,
        y = e.elements[g ? w : b],
        C = xg(go(y) ? y : y.contextElement || to(e.elements.popper), l, d, s),
        R = jo(e.elements.reference),
        k = oc({
            reference: R,
            element: S,
            placement: n
        }),
        E = bi(Object.assign({}, S, k)),
        O = b === Xo ? E : R,
        M = {
            top: C.top - O.top + x.top,
            bottom: O.bottom - C.bottom + x.bottom,
            left: C.left - O.left + x.left,
            right: O.right - C.right + x.right
        },
        B = e.modifiersData.offset;
    if (b === Xo && B) {
        var f = B[n];
        Object.keys(M).forEach(function(P) {
            var T = [wt, Ct].indexOf(P) >= 0 ? 1 : -1,
                I = [st, Ct].indexOf(P) >= 0 ? "y" : "x";
            M[P] += f[I] * T
        })
    }
    return M
}

function Sg(e, t) {
    t === void 0 && (t = {});
    var o = t,
        r = o.placement,
        n = o.boundary,
        i = o.rootBoundary,
        s = o.padding,
        a = o.flipVariations,
        l = o.allowedAutoPlacements,
        c = l === void 0 ? Xl : l,
        d = zo(r),
        p = d ? a ? Zs : Zs.filter(function(g) {
            return zo(g) === d
        }) : kr,
        b = p.filter(function(g) {
            return c.indexOf(g) >= 0
        });
    b.length === 0 && (b = p);
    var h = b.reduce(function(g, m) {
        return g[m] = yr(e, {
            placement: m,
            boundary: n,
            rootBoundary: i,
            padding: s
        })[Ft(m)], g
    }, {});
    return Object.keys(h).sort(function(g, m) {
        return h[g] - h[m]
    })
}

function Cg(e) {
    if (Ft(e) === Gi) return [];
    var t = Vr(e);
    return [oa(e), t, oa(t)]
}

function wg(e) {
    var t = e.state,
        o = e.options,
        r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var n = o.mainAxis, i = n === void 0 ? !0 : n, s = o.altAxis, a = s === void 0 ? !0 : s, l = o.fallbackPlacements, c = o.padding, d = o.boundary, p = o.rootBoundary, b = o.altBoundary, h = o.flipVariations, g = h === void 0 ? !0 : h, m = o.allowedAutoPlacements, v = t.options.placement, x = Ft(v), w = x === v, S = l || (w || !g ? [Vr(v)] : Cg(v)), y = [v].concat(S).reduce(function(ue, _) {
                return ue.concat(Ft(_) === Gi ? Sg(t, {
                    placement: _,
                    boundary: d,
                    rootBoundary: p,
                    padding: c,
                    flipVariations: g,
                    allowedAutoPlacements: m
                }) : _)
            }, []), C = t.rects.reference, R = t.rects.popper, k = new Map, E = !0, O = y[0], M = 0; M < y.length; M++) {
            var B = y[M],
                f = Ft(B),
                P = zo(B) === Lo,
                T = [st, Ct].indexOf(f) >= 0,
                I = T ? "width" : "height",
                A = yr(t, {
                    placement: B,
                    boundary: d,
                    rootBoundary: p,
                    altBoundary: b,
                    padding: c
                }),
                z = T ? P ? wt : at : P ? Ct : st;
            C[I] > R[I] && (z = Vr(z));
            var W = Vr(z),
                F = [];
            if (i && F.push(A[f] <= 0), a && F.push(A[z] <= 0, A[W] <= 0), F.every(function(ue) {
                    return ue
                })) {
                O = B, E = !1;
                break
            }
            k.set(B, F)
        }
        if (E)
            for (var U = g ? 3 : 1, ie = function(_) {
                    var D = y.find(function(V) {
                        var se = k.get(V);
                        if (se) return se.slice(0, _).every(function(me) {
                            return me
                        })
                    });
                    if (D) return O = D, "break"
                }, ee = U; ee > 0; ee--) {
                var J = ie(ee);
                if (J === "break") break
            }
        t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0)
    }
}
const Rg = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: wg,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function na(e, t, o) {
    return o === void 0 && (o = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - o.y,
        right: e.right - t.width + o.x,
        bottom: e.bottom - t.height + o.y,
        left: e.left - t.width - o.x
    }
}

function ia(e) {
    return [st, wt, Ct, at].some(function(t) {
        return e[t] >= 0
    })
}

function $g(e) {
    var t = e.state,
        o = e.name,
        r = t.rects.reference,
        n = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        s = yr(t, {
            elementContext: "reference"
        }),
        a = yr(t, {
            altBoundary: !0
        }),
        l = na(s, r),
        c = na(a, n, i),
        d = ia(l),
        p = ia(c);
    t.modifiersData[o] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": p
    })
}
const kg = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: $g
};

function Pg(e, t, o) {
    var r = Ft(e),
        n = [at, st].indexOf(r) >= 0 ? -1 : 1,
        i = typeof o == "function" ? o(Object.assign({}, t, {
            placement: e
        })) : o,
        s = i[0],
        a = i[1];
    return s = s || 0, a = (a || 0) * n, [at, wt].indexOf(r) >= 0 ? {
        x: a,
        y: s
    } : {
        x: s,
        y: a
    }
}

function Tg(e) {
    var t = e.state,
        o = e.options,
        r = e.name,
        n = o.offset,
        i = n === void 0 ? [0, 0] : n,
        s = Xl.reduce(function(d, p) {
            return d[p] = Pg(p, t.rects, i), d
        }, {}),
        a = s[t.placement],
        l = a.x,
        c = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s
}
const Eg = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Tg
};

function Mg(e) {
    var t = e.state,
        o = e.name;
    t.modifiersData[o] = oc({
        reference: t.rects.reference,
        element: t.rects.popper,
        placement: t.placement
    })
}
const Ig = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Mg,
    data: {}
};

function Ag(e) {
    return e === "x" ? "y" : "x"
}

function Og(e) {
    var t = e.state,
        o = e.options,
        r = e.name,
        n = o.mainAxis,
        i = n === void 0 ? !0 : n,
        s = o.altAxis,
        a = s === void 0 ? !1 : s,
        l = o.boundary,
        c = o.rootBoundary,
        d = o.altBoundary,
        p = o.padding,
        b = o.tether,
        h = b === void 0 ? !0 : b,
        g = o.tetherOffset,
        m = g === void 0 ? 0 : g,
        v = yr(t, {
            boundary: l,
            rootBoundary: c,
            padding: p,
            altBoundary: d
        }),
        x = Ft(t.placement),
        w = zo(t.placement),
        S = !w,
        y = Xi(x),
        C = Ag(y),
        R = t.modifiersData.popperOffsets,
        k = t.rects.reference,
        E = t.rects.popper,
        O = typeof m == "function" ? m(Object.assign({}, t.rects, {
            placement: t.placement
        })) : m,
        M = typeof O == "number" ? {
            mainAxis: O,
            altAxis: O
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, O),
        B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        f = {
            x: 0,
            y: 0
        };
    if (R) {
        if (i) {
            var P, T = y === "y" ? st : at,
                I = y === "y" ? Ct : wt,
                A = y === "y" ? "height" : "width",
                z = R[y],
                W = z + v[T],
                F = z - v[I],
                U = h ? -E[A] / 2 : 0,
                ie = w === Lo ? k[A] : E[A],
                ee = w === Lo ? -E[A] : -k[A],
                J = t.elements.arrow,
                ue = h && J ? qi(J) : {
                    width: 0,
                    height: 0
                },
                _ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Jl(),
                D = _[T],
                V = _[I],
                se = sr(0, k[A], ue[A]),
                me = S ? k[A] / 2 - U - se - D - M.mainAxis : ie - se - D - M.mainAxis,
                X = S ? -k[A] / 2 + U + se + V + M.mainAxis : ee + se + V + M.mainAxis,
                pe = t.elements.arrow && Pr(t.elements.arrow),
                ce = pe ? y === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0,
                de = (P = B == null ? void 0 : B[y]) != null ? P : 0,
                ne = z + me - de - ce,
                fe = z + X - de,
                Ne = sr(h ? tn(W, ne) : W, z, h ? po(F, fe) : F);
            R[y] = Ne, f[y] = Ne - z
        }
        if (a) {
            var xe, ye = y === "x" ? st : at,
                Se = y === "x" ? Ct : wt,
                Ce = R[C],
                be = C === "y" ? "height" : "width",
                q = Ce + v[ye],
                qe = Ce - v[Se],
                Ee = [st, at].indexOf(x) !== -1,
                tt = (xe = B == null ? void 0 : B[C]) != null ? xe : 0,
                rt = Ee ? q : Ce - k[be] - E[be] - tt + M.altAxis,
                Qe = Ee ? Ce + k[be] + E[be] - tt - M.altAxis : qe,
                Xe = h && Ee ? rg(rt, Ce, Qe) : sr(h ? rt : q, Ce, h ? Qe : qe);
            R[C] = Xe, f[C] = Xe - Ce
        }
        t.modifiersData[r] = f
    }
}
const Bg = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Og,
    requiresIfExists: ["offset"]
};

function Lg(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Ng(e) {
    return e === mt(e) || !St(e) ? Yi(e) : Lg(e)
}

function jg(e) {
    var t = e.getBoundingClientRect(),
        o = No(t.width) / e.offsetWidth || 1,
        r = No(t.height) / e.offsetHeight || 1;
    return o !== 1 || r !== 1
}

function zg(e, t, o) {
    o === void 0 && (o = !1);
    var r = St(t),
        n = St(t) && jg(t),
        i = to(t),
        s = jo(e, n, o),
        a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (r || !r && !o) && ((Dt(t) !== "body" || Ji(i)) && (a = Ng(t)), St(t) ? (l = jo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Qi(i))), {
        x: s.left + a.scrollLeft - l.x,
        y: s.top + a.scrollTop - l.y,
        width: s.width,
        height: s.height
    }
}

function Fg(e) {
    var t = new Map,
        o = new Set,
        r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });

    function n(i) {
        o.add(i.name);
        var s = [].concat(i.requires || [], i.requiresIfExists || []);
        s.forEach(function(a) {
            if (!o.has(a)) {
                var l = t.get(a);
                l && n(l)
            }
        }), r.push(i)
    }
    return e.forEach(function(i) {
        o.has(i.name) || n(i)
    }), r
}

function Dg(e) {
    var t = Fg(e);
    return Qm.reduce(function(o, r) {
        return o.concat(t.filter(function(n) {
            return n.phase === r
        }))
    }, [])
}

function Wg(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(o) {
            Promise.resolve().then(function() {
                t = void 0, o(e())
            })
        })), t
    }
}

function Hg(e) {
    var t = e.reduce(function(o, r) {
        var n = o[r.name];
        return o[r.name] = n ? Object.assign({}, n, r, {
            options: Object.assign({}, n.options, r.options),
            data: Object.assign({}, n.data, r.data)
        }) : r, o
    }, {});
    return Object.keys(t).map(function(o) {
        return t[o]
    })
}
var sa = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function aa() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function Ug(e) {
    e === void 0 && (e = {});
    var t = e,
        o = t.defaultModifiers,
        r = o === void 0 ? [] : o,
        n = t.defaultOptions,
        i = n === void 0 ? sa : n;
    return function(a, l, c) {
        c === void 0 && (c = i);
        var d = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, sa, i),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: l
                },
                attributes: {},
                styles: {}
            },
            p = [],
            b = !1,
            h = {
                state: d,
                setOptions: function(x) {
                    var w = typeof x == "function" ? x(d.options) : x;
                    m(), d.options = Object.assign({}, i, d.options, w), d.scrollParents = {
                        reference: go(a) ? ar(a) : a.contextElement ? ar(a.contextElement) : [],
                        popper: ar(l)
                    };
                    var S = Dg(Hg([].concat(r, d.options.modifiers)));
                    return d.orderedModifiers = S.filter(function(y) {
                        return y.enabled
                    }), g(), h.update()
                },
                forceUpdate: function() {
                    if (!b) {
                        var x = d.elements,
                            w = x.reference,
                            S = x.popper;
                        if (aa(w, S)) {
                            d.rects = {
                                reference: zg(w, Pr(S), d.options.strategy === "fixed"),
                                popper: qi(S)
                            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
                                return d.modifiersData[M.name] = Object.assign({}, M.data)
                            });
                            for (var y = 0; y < d.orderedModifiers.length; y++) {
                                if (d.reset === !0) {
                                    d.reset = !1, y = -1;
                                    continue
                                }
                                var C = d.orderedModifiers[y],
                                    R = C.fn,
                                    k = C.options,
                                    E = k === void 0 ? {} : k,
                                    O = C.name;
                                typeof R == "function" && (d = R({
                                    state: d,
                                    options: E,
                                    name: O,
                                    instance: h
                                }) || d)
                            }
                        }
                    }
                },
                update: Wg(function() {
                    return new Promise(function(v) {
                        h.forceUpdate(), v(d)
                    })
                }),
                destroy: function() {
                    m(), b = !0
                }
            };
        if (!aa(a, l)) return h;
        h.setOptions(c).then(function(v) {
            !b && c.onFirstUpdate && c.onFirstUpdate(v)
        });

        function g() {
            d.orderedModifiers.forEach(function(v) {
                var x = v.name,
                    w = v.options,
                    S = w === void 0 ? {} : w,
                    y = v.effect;
                if (typeof y == "function") {
                    var C = y({
                            state: d,
                            name: x,
                            instance: h,
                            options: S
                        }),
                        R = function() {};
                    p.push(C || R)
                }
            })
        }

        function m() {
            p.forEach(function(v) {
                return v()
            }), p = []
        }
        return h
    }
}
var _g = [fg, Ig, ug, eg, Eg, Rg, Bg, ag, kg],
    Vg = Ug({
        defaultModifiers: _g
    });

function Fo(e) {
    var p;
    const {
        elementType: t,
        externalSlotProps: o,
        ownerState: r,
        skipResolvingSlotProps: n = !1,
        ...i
    } = e, s = n ? {} : _l(o, r), {
        props: a,
        internalRef: l
    } = Vl({ ...i,
        externalSlotProps: s
    }), c = _e(l, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
    return Ul(t, { ...a,
        ref: c
    }, r)
}

function yo(e) {
    var t;
    return parseInt(u.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null
}

function Gg(e) {
    return typeof e == "function" ? e() : e
}
const rc = u.forwardRef(function(t, o) {
    const {
        children: r,
        container: n,
        disablePortal: i = !1
    } = t, [s, a] = u.useState(null), l = _e(u.isValidElement(r) ? yo(r) : null, o);
    if (ct(() => {
            i || a(Gg(n) || document.body)
        }, [n, i]), ct(() => {
            if (s && !i) return Vs(o, s), () => {
                Vs(o, null)
            }
        }, [o, s, i]), i) {
        if (u.isValidElement(r)) {
            const c = {
                ref: l
            };
            return u.cloneElement(r, c)
        }
        return r
    }
    return s && Ua.createPortal(r, s)
});

function Kg(e) {
    return Y("MuiPopper", e)
}
K("MuiPopper", ["root"]);

function qg(e, t) {
    if (t === "ltr") return e;
    switch (e) {
        case "bottom-end":
            return "bottom-start";
        case "bottom-start":
            return "bottom-end";
        case "top-end":
            return "top-start";
        case "top-start":
            return "top-end";
        default:
            return e
    }
}

function yi(e) {
    return typeof e == "function" ? e() : e
}

function Xg(e) {
    return e.nodeType !== void 0
}
const Yg = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, Kg, t)
    },
    Qg = {},
    Jg = u.forwardRef(function(t, o) {
        const {
            anchorEl: r,
            children: n,
            direction: i,
            disablePortal: s,
            modifiers: a,
            open: l,
            placement: c,
            popperOptions: d,
            popperRef: p,
            slotProps: b = {},
            slots: h = {},
            TransitionProps: g,
            ownerState: m,
            ...v
        } = t, x = u.useRef(null), w = _e(x, o), S = u.useRef(null), y = _e(S, p), C = u.useRef(y);
        ct(() => {
            C.current = y
        }, [y]), u.useImperativeHandle(p, () => S.current, []);
        const R = qg(c, i),
            [k, E] = u.useState(R),
            [O, M] = u.useState(yi(r));
        u.useEffect(() => {
            S.current && S.current.forceUpdate()
        }), u.useEffect(() => {
            r && M(yi(r))
        }, [r]), ct(() => {
            if (!O || !l) return;
            const I = W => {
                E(W.placement)
            };
            let A = [{
                name: "preventOverflow",
                options: {
                    altBoundary: s
                }
            }, {
                name: "flip",
                options: {
                    altBoundary: s
                }
            }, {
                name: "onUpdate",
                enabled: !0,
                phase: "afterWrite",
                fn: ({
                    state: W
                }) => {
                    I(W)
                }
            }];
            a != null && (A = A.concat(a)), d && d.modifiers != null && (A = A.concat(d.modifiers));
            const z = Vg(O, x.current, {
                placement: R,
                ...d,
                modifiers: A
            });
            return C.current(z), () => {
                z.destroy(), C.current(null)
            }
        }, [O, s, a, l, d, R]);
        const B = {
            placement: k
        };
        g !== null && (B.TransitionProps = g);
        const f = Yg(t),
            P = h.root ? ? "div",
            T = Fo({
                elementType: P,
                externalSlotProps: b.root,
                externalForwardedProps: v,
                additionalProps: {
                    role: "tooltip",
                    ref: w
                },
                ownerState: t,
                className: f.root
            });
        return $.jsx(P, { ...T,
            children: typeof n == "function" ? n(B) : n
        })
    }),
    Zg = u.forwardRef(function(t, o) {
        const {
            anchorEl: r,
            children: n,
            container: i,
            direction: s = "ltr",
            disablePortal: a = !1,
            keepMounted: l = !1,
            modifiers: c,
            open: d,
            placement: p = "bottom",
            popperOptions: b = Qg,
            popperRef: h,
            style: g,
            transition: m = !1,
            slotProps: v = {},
            slots: x = {},
            ...w
        } = t, [S, y] = u.useState(!0), C = () => {
            y(!1)
        }, R = () => {
            y(!0)
        };
        if (!l && !d && (!m || S)) return null;
        let k;
        if (i) k = i;
        else if (r) {
            const M = yi(r);
            k = M && Xg(M) ? et(M).body : et(null).body
        }
        const E = !d && l && (!m || S) ? "none" : void 0,
            O = m ? { in: d,
                onEnter: C,
                onExited: R
            } : void 0;
        return $.jsx(rc, {
            disablePortal: a,
            container: k,
            children: $.jsx(Jg, {
                anchorEl: r,
                direction: s,
                disablePortal: a,
                modifiers: c,
                ref: o,
                open: m ? !S : d,
                placement: p,
                popperOptions: b,
                popperRef: h,
                slotProps: v,
                slots: x,
                ...w,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    display: E,
                    ...g
                },
                TransitionProps: O,
                children: n
            })
        })
    }),
    eh = j(Zg, {
        name: "MuiPopper",
        slot: "Root"
    })({}),
    nc = u.forwardRef(function(t, o) {
        const r = Uo(),
            n = oe({
                props: t,
                name: "MuiPopper"
            }),
            {
                anchorEl: i,
                component: s,
                components: a,
                componentsProps: l,
                container: c,
                disablePortal: d,
                keepMounted: p,
                modifiers: b,
                open: h,
                placement: g,
                popperOptions: m,
                popperRef: v,
                transition: x,
                slots: w,
                slotProps: S,
                ...y
            } = n,
            C = (w == null ? void 0 : w.root) ? ? (a == null ? void 0 : a.Root),
            R = {
                anchorEl: i,
                container: c,
                disablePortal: d,
                keepMounted: p,
                modifiers: b,
                open: h,
                placement: g,
                popperOptions: m,
                popperRef: v,
                transition: x,
                ...y
            };
        return $.jsx(eh, {
            as: s,
            direction: r ? "rtl" : "ltr",
            slots: {
                root: C
            },
            slotProps: S ? ? l,
            ...R,
            ref: o
        })
    }),
    th = gt($.jsx("path", {
        d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }));

function oh(e) {
    return Y("MuiChip", e)
}
const ve = K("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]),
    rh = e => {
        const {
            classes: t,
            disabled: o,
            size: r,
            color: n,
            iconColor: i,
            onDelete: s,
            clickable: a,
            variant: l
        } = e, c = {
            root: ["root", l, o && "disabled", `size${L(r)}`, `color${L(n)}`, a && "clickable", a && `clickableColor${L(n)}`, s && "deletable", s && `deletableColor${L(n)}`, `${l}${L(n)}`],
            label: ["label", `label${L(r)}`],
            avatar: ["avatar", `avatar${L(r)}`, `avatarColor${L(n)}`],
            icon: ["icon", `icon${L(r)}`, `iconColor${L(i)}`],
            deleteIcon: ["deleteIcon", `deleteIcon${L(r)}`, `deleteIconColor${L(n)}`, `deleteIcon${L(l)}Color${L(n)}`]
        };
        return Q(c, oh, t)
    },
    nh = j("div", {
        name: "MuiChip",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e, {
                color: r,
                iconColor: n,
                clickable: i,
                onDelete: s,
                size: a,
                variant: l
            } = o;
            return [{
                [`& .${ve.avatar}`]: t.avatar
            }, {
                [`& .${ve.avatar}`]: t[`avatar${L(a)}`]
            }, {
                [`& .${ve.avatar}`]: t[`avatarColor${L(r)}`]
            }, {
                [`& .${ve.icon}`]: t.icon
            }, {
                [`& .${ve.icon}`]: t[`icon${L(a)}`]
            }, {
                [`& .${ve.icon}`]: t[`iconColor${L(n)}`]
            }, {
                [`& .${ve.deleteIcon}`]: t.deleteIcon
            }, {
                [`& .${ve.deleteIcon}`]: t[`deleteIcon${L(a)}`]
            }, {
                [`& .${ve.deleteIcon}`]: t[`deleteIconColor${L(r)}`]
            }, {
                [`& .${ve.deleteIcon}`]: t[`deleteIcon${L(l)}Color${L(r)}`]
            }, t.root, t[`size${L(a)}`], t[`color${L(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${L(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${L(r)}`], t[l], t[`${l}${L(r)}`]]
        }
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
        return {
            maxWidth: "100%",
            fontFamily: e.typography.fontFamily,
            fontSize: e.typography.pxToRem(13),
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            lineHeight: 1.5,
            color: (e.vars || e).palette.text.primary,
            backgroundColor: (e.vars || e).palette.action.selected,
            borderRadius: 32 / 2,
            whiteSpace: "nowrap",
            transition: e.transitions.create(["background-color", "box-shadow"]),
            cursor: "unset",
            outline: 0,
            textDecoration: "none",
            border: 0,
            padding: 0,
            verticalAlign: "middle",
            boxSizing: "border-box",
            [`&.${ve.disabled}`]: {
                opacity: (e.vars || e).palette.action.disabledOpacity,
                pointerEvents: "none"
            },
            [`& .${ve.avatar}`]: {
                marginLeft: 5,
                marginRight: -6,
                width: 24,
                height: 24,
                color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
                fontSize: e.typography.pxToRem(12)
            },
            [`& .${ve.avatarColorPrimary}`]: {
                color: (e.vars || e).palette.primary.contrastText,
                backgroundColor: (e.vars || e).palette.primary.dark
            },
            [`& .${ve.avatarColorSecondary}`]: {
                color: (e.vars || e).palette.secondary.contrastText,
                backgroundColor: (e.vars || e).palette.secondary.dark
            },
            [`& .${ve.avatarSmall}`]: {
                marginLeft: 4,
                marginRight: -4,
                width: 18,
                height: 18,
                fontSize: e.typography.pxToRem(10)
            },
            [`& .${ve.icon}`]: {
                marginLeft: 5,
                marginRight: -6
            },
            [`& .${ve.deleteIcon}`]: {
                WebkitTapHighlightColor: "transparent",
                color: e.alpha((e.vars || e).palette.text.primary, .26),
                fontSize: 22,
                cursor: "pointer",
                margin: "0 5px 0 -6px",
                "&:hover": {
                    color: e.alpha((e.vars || e).palette.text.primary, .4)
                }
            },
            variants: [{
                props: {
                    size: "small"
                },
                style: {
                    height: 24,
                    [`& .${ve.icon}`]: {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    },
                    [`& .${ve.deleteIcon}`]: {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }
                }
            }, ...Object.entries(e.palette).filter(Le(["contrastText"])).map(([o]) => ({
                props: {
                    color: o
                },
                style: {
                    backgroundColor: (e.vars || e).palette[o].main,
                    color: (e.vars || e).palette[o].contrastText,
                    [`& .${ve.deleteIcon}`]: {
                        color: e.alpha((e.vars || e).palette[o].contrastText, .7),
                        "&:hover, &:active": {
                            color: (e.vars || e).palette[o].contrastText
                        }
                    }
                }
            })), {
                props: o => o.iconColor === o.color,
                style: {
                    [`& .${ve.icon}`]: {
                        color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
                    }
                }
            }, {
                props: o => o.iconColor === o.color && o.color !== "default",
                style: {
                    [`& .${ve.icon}`]: {
                        color: "inherit"
                    }
                }
            }, {
                props: {
                    onDelete: !0
                },
                style: {
                    [`&.${ve.focusVisible}`]: {
                        backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)
                    }
                }
            }, ...Object.entries(e.palette).filter(Le(["dark"])).map(([o]) => ({
                props: {
                    color: o,
                    onDelete: !0
                },
                style: {
                    [`&.${ve.focusVisible}`]: {
                        background: (e.vars || e).palette[o].dark
                    }
                }
            })), {
                props: {
                    clickable: !0
                },
                style: {
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)
                    },
                    [`&.${ve.focusVisible}`]: {
                        backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)
                    },
                    "&:active": {
                        boxShadow: (e.vars || e).shadows[1]
                    }
                }
            }, ...Object.entries(e.palette).filter(Le(["dark"])).map(([o]) => ({
                props: {
                    color: o,
                    clickable: !0
                },
                style: {
                    [`&:hover, &.${ve.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette[o].dark
                    }
                }
            })), {
                props: {
                    variant: "outlined"
                },
                style: {
                    backgroundColor: "transparent",
                    border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,
                    [`&.${ve.clickable}:hover`]: {
                        backgroundColor: (e.vars || e).palette.action.hover
                    },
                    [`&.${ve.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus
                    },
                    [`& .${ve.avatar}`]: {
                        marginLeft: 4
                    },
                    [`& .${ve.avatarSmall}`]: {
                        marginLeft: 2
                    },
                    [`& .${ve.icon}`]: {
                        marginLeft: 4
                    },
                    [`& .${ve.iconSmall}`]: {
                        marginLeft: 2
                    },
                    [`& .${ve.deleteIcon}`]: {
                        marginRight: 5
                    },
                    [`& .${ve.deleteIconSmall}`]: {
                        marginRight: 3
                    }
                }
            }, ...Object.entries(e.palette).filter(Le()).map(([o]) => ({
                props: {
                    variant: "outlined",
                    color: o
                },
                style: {
                    color: (e.vars || e).palette[o].main,
                    border: `1px solid ${e.alpha((e.vars||e).palette[o].main,.7)}`,
                    [`&.${ve.clickable}:hover`]: {
                        backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity)
                    },
                    [`&.${ve.focusVisible}`]: {
                        backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.focusOpacity)
                    },
                    [`& .${ve.deleteIcon}`]: {
                        color: e.alpha((e.vars || e).palette[o].main, .7),
                        "&:hover, &:active": {
                            color: (e.vars || e).palette[o].main
                        }
                    }
                }
            }))]
        }
    })),
    ih = j("span", {
        name: "MuiChip",
        slot: "Label",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e, {
                size: r
            } = o;
            return [t.label, t[`label${L(r)}`]]
        }
    })({
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
        variants: [{
            props: {
                variant: "outlined"
            },
            style: {
                paddingLeft: 11,
                paddingRight: 11
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                paddingLeft: 8,
                paddingRight: 8
            }
        }, {
            props: {
                size: "small",
                variant: "outlined"
            },
            style: {
                paddingLeft: 7,
                paddingRight: 7
            }
        }]
    });

function la(e) {
    return e.key === "Backspace" || e.key === "Delete"
}
const mx = u.forwardRef(function(t, o) {
    const r = oe({
            props: t,
            name: "MuiChip"
        }),
        {
            avatar: n,
            className: i,
            clickable: s,
            color: a = "default",
            component: l,
            deleteIcon: c,
            disabled: d = !1,
            icon: p,
            label: b,
            onClick: h,
            onDelete: g,
            onKeyDown: m,
            onKeyUp: v,
            size: x = "medium",
            variant: w = "filled",
            tabIndex: S,
            skipFocusWhenDisabled: y = !1,
            slots: C = {},
            slotProps: R = {},
            ...k
        } = r,
        E = u.useRef(null),
        O = _e(E, o),
        M = D => {
            D.stopPropagation(), g && g(D)
        },
        B = D => {
            D.currentTarget === D.target && la(D) && D.preventDefault(), m && m(D)
        },
        f = D => {
            D.currentTarget === D.target && g && la(D) && g(D), v && v(D)
        },
        P = s !== !1 && h ? !0 : s,
        T = P || g ? _t : l || "div",
        I = { ...r,
            component: T,
            disabled: d,
            size: x,
            color: a,
            iconColor: u.isValidElement(p) && p.props.color || a,
            onDelete: !!g,
            clickable: P,
            variant: w
        },
        A = rh(I),
        z = T === _t ? {
            component: l || "div",
            focusVisibleClassName: A.focusVisible,
            ...g && {
                disableRipple: !0
            }
        } : {};
    let W = null;
    g && (W = c && u.isValidElement(c) ? u.cloneElement(c, {
        className: H(c.props.className, A.deleteIcon),
        onClick: M
    }) : $.jsx(th, {
        className: A.deleteIcon,
        onClick: M
    }));
    let F = null;
    n && u.isValidElement(n) && (F = u.cloneElement(n, {
        className: H(A.avatar, n.props.className)
    }));
    let U = null;
    p && u.isValidElement(p) && (U = u.cloneElement(p, {
        className: H(A.icon, p.props.className)
    }));
    const ie = {
            slots: C,
            slotProps: R
        },
        [ee, J] = te("root", {
            elementType: nh,
            externalForwardedProps: { ...ie,
                ...k
            },
            ownerState: I,
            shouldForwardComponentProp: !0,
            ref: O,
            className: H(A.root, i),
            additionalProps: {
                disabled: P && d ? !0 : void 0,
                tabIndex: y && d ? -1 : S,
                ...z
            },
            getSlotProps: D => ({ ...D,
                onClick: V => {
                    var se;
                    (se = D.onClick) == null || se.call(D, V), h == null || h(V)
                },
                onKeyDown: V => {
                    var se;
                    (se = D.onKeyDown) == null || se.call(D, V), B == null || B(V)
                },
                onKeyUp: V => {
                    var se;
                    (se = D.onKeyUp) == null || se.call(D, V), f == null || f(V)
                }
            })
        }),
        [ue, _] = te("label", {
            elementType: ih,
            externalForwardedProps: ie,
            ownerState: I,
            className: A.label
        });
    return $.jsxs(ee, {
        as: T,
        ...J,
        children: [F || U, $.jsx(ue, { ..._,
            children: b
        }), W]
    })
});

function Br(e) {
    return parseInt(e, 10) || 0
}
const sh = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)"
    }
};

function ah(e) {
    for (const t in e) return !1;
    return !0
}

function ca(e) {
    return ah(e) || e.outerHeightStyle === 0 && !e.overflowing
}
const lh = u.forwardRef(function(t, o) {
    const {
        onChange: r,
        maxRows: n,
        minRows: i = 1,
        style: s,
        value: a,
        ...l
    } = t, {
        current: c
    } = u.useRef(a != null), d = u.useRef(null), p = _e(o, d), b = u.useRef(null), h = u.useRef(null), g = u.useCallback(() => {
        const S = d.current,
            y = h.current;
        if (!S || !y) return;
        const R = Pt(S).getComputedStyle(S);
        if (R.width === "0px") return {
            outerHeightStyle: 0,
            overflowing: !1
        };
        y.style.width = R.width, y.value = S.value || t.placeholder || "x", y.value.slice(-1) === `
` && (y.value += " ");
        const k = R.boxSizing,
            E = Br(R.paddingBottom) + Br(R.paddingTop),
            O = Br(R.borderBottomWidth) + Br(R.borderTopWidth),
            M = y.scrollHeight;
        y.value = "x";
        const B = y.scrollHeight;
        let f = M;
        i && (f = Math.max(Number(i) * B, f)), n && (f = Math.min(Number(n) * B, f)), f = Math.max(f, B);
        const P = f + (k === "border-box" ? E + O : 0),
            T = Math.abs(f - M) <= 1;
        return {
            outerHeightStyle: P,
            overflowing: T
        }
    }, [n, i, t.placeholder]), m = it(() => {
        const S = d.current,
            y = g();
        if (!S || !y || ca(y)) return !1;
        const C = y.outerHeightStyle;
        return b.current != null && b.current !== C
    }), v = u.useCallback(() => {
        const S = d.current,
            y = g();
        if (!S || !y || ca(y)) return;
        const C = y.outerHeightStyle;
        b.current !== C && (b.current = C, S.style.height = `${C}px`), S.style.overflow = y.overflowing ? "hidden" : ""
    }, [g]), x = u.useRef(-1);
    ct(() => {
        const S = Sn(v),
            y = d == null ? void 0 : d.current;
        if (!y) return;
        const C = Pt(y);
        C.addEventListener("resize", S);
        let R;
        return typeof ResizeObserver < "u" && (R = new ResizeObserver(() => {
            m() && (R.unobserve(y), cancelAnimationFrame(x.current), v(), x.current = requestAnimationFrame(() => {
                R.observe(y)
            }))
        }), R.observe(y)), () => {
            S.clear(), cancelAnimationFrame(x.current), C.removeEventListener("resize", S), R && R.disconnect()
        }
    }, [g, v, m]), ct(() => {
        v()
    });
    const w = S => {
        c || v();
        const y = S.target,
            C = y.value.length,
            R = y.value.endsWith(`
`),
            k = y.selectionStart === C;
        R && k && y.setSelectionRange(C, C), r && r(S)
    };
    return $.jsxs(u.Fragment, {
        children: [$.jsx("textarea", {
            value: a,
            onChange: w,
            ref: p,
            rows: i,
            style: s,
            ...l
        }), $.jsx("textarea", {
            "aria-hidden": !0,
            className: t.className,
            readOnly: !0,
            ref: h,
            tabIndex: -1,
            style: { ...sh.shadow,
                ...s,
                paddingTop: 0,
                paddingBottom: 0
            }
        })]
    })
});

function vr(e) {
    return typeof e == "string"
}

function vo({
    props: e,
    states: t,
    muiFormControl: o
}) {
    return t.reduce((r, n) => (r[n] = e[n], o && typeof e[n] > "u" && (r[n] = o[n]), r), {})
}
const Zi = u.createContext(void 0);

function oo() {
    return u.useContext(Zi)
}

function da(e) {
    return e != null && !(Array.isArray(e) && e.length === 0)
}

function on(e, t = !1) {
    return e && (da(e.value) && e.value !== "" || t && da(e.defaultValue) && e.defaultValue !== "")
}

function ch(e) {
    return e.startAdornment
}

function dh(e) {
    return Y("MuiInputBase", e)
}
const Do = K("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var ua;
const Rn = (e, t) => {
        const {
            ownerState: o
        } = e;
        return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${L(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel]
    },
    $n = (e, t) => {
        const {
            ownerState: o
        } = e;
        return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel]
    },
    uh = e => {
        const {
            classes: t,
            color: o,
            disabled: r,
            error: n,
            endAdornment: i,
            focused: s,
            formControl: a,
            fullWidth: l,
            hiddenLabel: c,
            multiline: d,
            readOnly: p,
            size: b,
            startAdornment: h,
            type: g
        } = e, m = {
            root: ["root", `color${L(o)}`, r && "disabled", n && "error", l && "fullWidth", s && "focused", a && "formControl", b && b !== "medium" && `size${L(b)}`, d && "multiline", h && "adornedStart", i && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
            input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", b === "small" && "inputSizeSmall", c && "inputHiddenLabel", h && "inputAdornedStart", i && "inputAdornedEnd", p && "readOnly"]
        };
        return Q(m, dh, t)
    },
    kn = j("div", {
        name: "MuiInputBase",
        slot: "Root",
        overridesResolver: Rn
    })(Z(({
        theme: e
    }) => ({ ...e.typography.body1,
        color: (e.vars || e).palette.text.primary,
        lineHeight: "1.4375em",
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        [`&.${Do.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default"
        },
        variants: [{
            props: ({
                ownerState: t
            }) => t.multiline,
            style: {
                padding: "4px 0 5px"
            }
        }, {
            props: ({
                ownerState: t,
                size: o
            }) => t.multiline && o === "small",
            style: {
                paddingTop: 1
            }
        }, {
            props: ({
                ownerState: t
            }) => t.fullWidth,
            style: {
                width: "100%"
            }
        }]
    }))),
    Pn = j("input", {
        name: "MuiInputBase",
        slot: "Input",
        overridesResolver: $n
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light",
            o = {
                color: "currentColor",
                ...e.vars ? {
                    opacity: e.vars.opacity.inputPlaceholder
                } : {
                    opacity: t ? .42 : .5
                },
                transition: e.transitions.create("opacity", {
                    duration: e.transitions.duration.shorter
                })
            },
            r = {
                opacity: "0 !important"
            },
            n = e.vars ? {
                opacity: e.vars.opacity.inputPlaceholder
            } : {
                opacity: t ? .42 : .5
            };
        return {
            font: "inherit",
            letterSpacing: "inherit",
            color: "currentColor",
            padding: "4px 0 5px",
            border: 0,
            boxSizing: "content-box",
            background: "none",
            height: "1.4375em",
            margin: 0,
            WebkitTapHighlightColor: "transparent",
            display: "block",
            minWidth: 0,
            width: "100%",
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus": {
                outline: 0
            },
            "&:invalid": {
                boxShadow: "none"
            },
            "&::-webkit-search-decoration": {
                WebkitAppearance: "none"
            },
            [`label[data-shrink=false] + .${Do.formControl} &`]: {
                "&::-webkit-input-placeholder": r,
                "&::-moz-placeholder": r,
                "&::-ms-input-placeholder": r,
                "&:focus::-webkit-input-placeholder": n,
                "&:focus::-moz-placeholder": n,
                "&:focus::-ms-input-placeholder": n
            },
            [`&.${Do.disabled}`]: {
                opacity: 1,
                WebkitTextFillColor: (e.vars || e).palette.text.disabled
            },
            variants: [{
                props: ({
                    ownerState: i
                }) => !i.disableInjectingGlobalStyles,
                style: {
                    animationName: "mui-auto-fill-cancel",
                    animationDuration: "10ms",
                    "&:-webkit-autofill": {
                        animationDuration: "5000s",
                        animationName: "mui-auto-fill"
                    }
                }
            }, {
                props: {
                    size: "small"
                },
                style: {
                    paddingTop: 1
                }
            }, {
                props: ({
                    ownerState: i
                }) => i.multiline,
                style: {
                    height: "auto",
                    resize: "none",
                    padding: 0,
                    paddingTop: 0
                }
            }, {
                props: {
                    type: "search"
                },
                style: {
                    MozAppearance: "textfield"
                }
            }]
        }
    })),
    pa = Ui({
        "@keyframes mui-auto-fill": {
            from: {
                display: "block"
            }
        },
        "@keyframes mui-auto-fill-cancel": {
            from: {
                display: "block"
            }
        }
    }),
    es = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiInputBase"
            }),
            {
                "aria-describedby": n,
                autoComplete: i,
                autoFocus: s,
                className: a,
                color: l,
                components: c = {},
                componentsProps: d = {},
                defaultValue: p,
                disabled: b,
                disableInjectingGlobalStyles: h,
                endAdornment: g,
                error: m,
                fullWidth: v = !1,
                id: x,
                inputComponent: w = "input",
                inputProps: S = {},
                inputRef: y,
                margin: C,
                maxRows: R,
                minRows: k,
                multiline: E = !1,
                name: O,
                onBlur: M,
                onChange: B,
                onClick: f,
                onFocus: P,
                onKeyDown: T,
                onKeyUp: I,
                placeholder: A,
                readOnly: z,
                renderSuffix: W,
                rows: F,
                size: U,
                slotProps: ie = {},
                slots: ee = {},
                startAdornment: J,
                type: ue = "text",
                value: _,
                ...D
            } = r,
            V = S.value != null ? S.value : _,
            {
                current: se
            } = u.useRef(V != null),
            me = u.useRef(),
            X = u.useCallback(re => {}, []),
            pe = _e(me, y, S.ref, X),
            [ce, de] = u.useState(!1),
            ne = oo(),
            fe = vo({
                props: r,
                muiFormControl: ne,
                states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
            });
        fe.focused = ne ? ne.focused : ce, u.useEffect(() => {
            !ne && b && ce && (de(!1), M && M())
        }, [ne, b, ce, M]);
        const Ne = ne && ne.onFilled,
            xe = ne && ne.onEmpty,
            ye = u.useCallback(re => {
                on(re) ? Ne && Ne() : xe && xe()
            }, [Ne, xe]);
        ct(() => {
            se && ye({
                value: V
            })
        }, [V, ye, se]);
        const Se = re => {
                P && P(re), S.onFocus && S.onFocus(re), ne && ne.onFocus ? ne.onFocus(re) : de(!0)
            },
            Ce = re => {
                M && M(re), S.onBlur && S.onBlur(re), ne && ne.onBlur ? ne.onBlur(re) : de(!1)
            },
            be = (re, ...Fe) => {
                if (!se) {
                    const je = re.target || me.current;
                    if (je == null) throw new Error(Ut(1));
                    ye({
                        value: je.value
                    })
                }
                S.onChange && S.onChange(re, ...Fe), B && B(re, ...Fe)
            };
        u.useEffect(() => {
            ye(me.current)
        }, []);
        const q = re => {
            me.current && re.currentTarget === re.target && me.current.focus(), f && f(re)
        };
        let qe = w,
            Ee = S;
        E && qe === "input" && (F ? Ee = {
            type: void 0,
            minRows: F,
            maxRows: F,
            ...Ee
        } : Ee = {
            type: void 0,
            maxRows: R,
            minRows: k,
            ...Ee
        }, qe = lh);
        const tt = re => {
            ye(re.animationName === "mui-auto-fill-cancel" ? me.current : {
                value: "x"
            })
        };
        u.useEffect(() => {
            ne && ne.setAdornedStart(!!J)
        }, [ne, J]);
        const rt = { ...r,
                color: fe.color || "primary",
                disabled: fe.disabled,
                endAdornment: g,
                error: fe.error,
                focused: fe.focused,
                formControl: ne,
                fullWidth: v,
                hiddenLabel: fe.hiddenLabel,
                multiline: E,
                size: fe.size,
                startAdornment: J,
                type: ue
            },
            Qe = uh(rt),
            Xe = ee.root || c.Root || kn,
            Je = ie.root || d.root || {},
            Pe = ee.input || c.Input || Pn;
        return Ee = { ...Ee,
            ...ie.input ? ? d.input
        }, $.jsxs(u.Fragment, {
            children: [!h && typeof pa == "function" && (ua || (ua = $.jsx(pa, {}))), $.jsxs(Xe, { ...Je,
                ref: o,
                onClick: q,
                ...D,
                ...!vr(Xe) && {
                    ownerState: { ...rt,
                        ...Je.ownerState
                    }
                },
                className: H(Qe.root, Je.className, a, z && "MuiInputBase-readOnly"),
                children: [J, $.jsx(Zi.Provider, {
                    value: null,
                    children: $.jsx(Pe, {
                        "aria-invalid": fe.error,
                        "aria-describedby": n,
                        autoComplete: i,
                        autoFocus: s,
                        defaultValue: p,
                        disabled: fe.disabled,
                        id: x,
                        onAnimationStart: tt,
                        name: O,
                        placeholder: A,
                        readOnly: z,
                        required: fe.required,
                        rows: F,
                        value: V,
                        onKeyDown: T,
                        onKeyUp: I,
                        type: ue,
                        ...Ee,
                        ...!vr(Pe) && {
                            as: qe,
                            ownerState: { ...rt,
                                ...Ee.ownerState
                            }
                        },
                        ref: pe,
                        className: H(Qe.input, Ee.className, z && "MuiInputBase-readOnly"),
                        onBlur: Ce,
                        onChange: be,
                        onFocus: Se
                    })
                }), g, W ? W({ ...fe,
                    startAdornment: J
                }) : null]
            })]
        })
    });

function ph(e) {
    return Y("MuiInput", e)
}
const Yo = { ...Do,
    ...K("MuiInput", ["root", "underline", "input"])
};

function fh(e) {
    return Y("MuiOutlinedInput", e)
}
const At = { ...Do,
    ...K("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};

function mh(e) {
    return Y("MuiFilledInput", e)
}
const io = { ...Do,
        ...K("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
    },
    gh = gt($.jsx("path", {
        d: "M7 10l5 5 5-5z"
    })),
    hh = gt($.jsx("path", {
        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }));

function bh(e) {
    return Y("MuiAvatar", e)
}
K("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const yh = e => {
        const {
            classes: t,
            variant: o,
            colorDefault: r
        } = e;
        return Q({
            root: ["root", o, r && "colorDefault"],
            img: ["img"],
            fallback: ["fallback"]
        }, bh, t)
    },
    vh = j("div", {
        name: "MuiAvatar",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], o.colorDefault && t.colorDefault]
        }
    })(Z(({
        theme: e
    }) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: "50%",
        overflow: "hidden",
        userSelect: "none",
        variants: [{
            props: {
                variant: "rounded"
            },
            style: {
                borderRadius: (e.vars || e).shape.borderRadius
            }
        }, {
            props: {
                variant: "square"
            },
            style: {
                borderRadius: 0
            }
        }, {
            props: {
                colorDefault: !0
            },
            style: {
                color: (e.vars || e).palette.background.default,
                ...e.vars ? {
                    backgroundColor: e.vars.palette.Avatar.defaultBg
                } : {
                    backgroundColor: e.palette.grey[400],
                    ...e.applyStyles("dark", {
                        backgroundColor: e.palette.grey[600]
                    })
                }
            }
        }]
    }))),
    xh = j("img", {
        name: "MuiAvatar",
        slot: "Img"
    })({
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
        color: "transparent",
        textIndent: 1e4
    }),
    Sh = j(hh, {
        name: "MuiAvatar",
        slot: "Fallback"
    })({
        width: "75%",
        height: "75%"
    });

function Ch({
    crossOrigin: e,
    referrerPolicy: t,
    src: o,
    srcSet: r
}) {
    const [n, i] = u.useState(!1);
    return u.useEffect(() => {
        if (!o && !r) return;
        i(!1);
        let s = !0;
        const a = new Image;
        return a.onload = () => {
            s && i("loaded")
        }, a.onerror = () => {
            s && i("error")
        }, a.crossOrigin = e, a.referrerPolicy = t, a.src = o, r && (a.srcset = r), () => {
            s = !1
        }
    }, [e, t, o, r]), n
}
const gx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiAvatar"
            }),
            {
                alt: n,
                children: i,
                className: s,
                component: a = "div",
                slots: l = {},
                slotProps: c = {},
                imgProps: d,
                sizes: p,
                src: b,
                srcSet: h,
                variant: g = "circular",
                ...m
            } = r;
        let v = null;
        const x = { ...r,
                component: a,
                variant: g
            },
            w = Ch({ ...d,
                ...typeof c.img == "function" ? c.img(x) : c.img,
                src: b,
                srcSet: h
            }),
            S = b || h,
            y = S && w !== "error";
        x.colorDefault = !y, delete x.ownerState;
        const C = yh(x),
            [R, k] = te("root", {
                ref: o,
                className: H(C.root, s),
                elementType: vh,
                externalForwardedProps: {
                    slots: l,
                    slotProps: c,
                    component: a,
                    ...m
                },
                ownerState: x
            }),
            [E, O] = te("img", {
                className: C.img,
                elementType: xh,
                externalForwardedProps: {
                    slots: l,
                    slotProps: {
                        img: { ...d,
                            ...c.img
                        }
                    }
                },
                additionalProps: {
                    alt: n,
                    src: b,
                    srcSet: h,
                    sizes: p
                },
                ownerState: x
            }),
            [M, B] = te("fallback", {
                className: C.fallback,
                elementType: Sh,
                externalForwardedProps: {
                    slots: l,
                    slotProps: c
                },
                shouldForwardComponentProp: !0,
                ownerState: x
            });
        return y ? v = $.jsx(E, { ...O
        }) : i || i === 0 ? v = i : S && n ? v = n[0] : v = $.jsx(M, { ...B
        }), $.jsx(R, { ...k,
            children: v
        })
    }),
    wh = {
        entering: {
            opacity: 1
        },
        entered: {
            opacity: 1
        }
    },
    vi = u.forwardRef(function(t, o) {
        const r = Gt(),
            n = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen
            },
            {
                addEndListener: i,
                appear: s = !0,
                children: a,
                easing: l,
                in: c,
                onEnter: d,
                onEntered: p,
                onEntering: b,
                onExit: h,
                onExited: g,
                onExiting: m,
                style: v,
                timeout: x = n,
                TransitionComponent: w = Tt,
                ...S
            } = t,
            y = u.useRef(null),
            C = _e(y, yo(a), o),
            R = T => I => {
                if (T) {
                    const A = y.current;
                    I === void 0 ? T(A) : T(A, I)
                }
            },
            k = R(b),
            E = R((T, I) => {
                Wl(T);
                const A = Oo({
                    style: v,
                    timeout: x,
                    easing: l
                }, {
                    mode: "enter"
                });
                T.style.webkitTransition = r.transitions.create("opacity", A), T.style.transition = r.transitions.create("opacity", A), d && d(T, I)
            }),
            O = R(p),
            M = R(m),
            B = R(T => {
                const I = Oo({
                    style: v,
                    timeout: x,
                    easing: l
                }, {
                    mode: "exit"
                });
                T.style.webkitTransition = r.transitions.create("opacity", I), T.style.transition = r.transitions.create("opacity", I), h && h(T)
            }),
            f = R(g),
            P = T => {
                i && i(y.current, T)
            };
        return $.jsx(w, {
            appear: s,
            in: c,
            nodeRef: y,
            onEnter: E,
            onEntered: O,
            onEntering: k,
            onExit: B,
            onExited: f,
            onExiting: M,
            addEndListener: P,
            timeout: x,
            ...S,
            children: (T, {
                ownerState: I,
                ...A
            }) => u.cloneElement(a, {
                style: {
                    opacity: 0,
                    visibility: T === "exited" && !c ? "hidden" : void 0,
                    ...wh[T],
                    ...v,
                    ...a.props.style
                },
                ref: C,
                ...A
            })
        })
    });

function Rh(e) {
    return Y("MuiBackdrop", e)
}
K("MuiBackdrop", ["root", "invisible"]);
const $h = e => {
        const {
            classes: t,
            invisible: o
        } = e;
        return Q({
            root: ["root", o && "invisible"]
        }, Rh, t)
    },
    kh = j("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.invisible && t.invisible]
        }
    })({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
        variants: [{
            props: {
                invisible: !0
            },
            style: {
                backgroundColor: "transparent"
            }
        }]
    }),
    ic = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiBackdrop"
            }),
            {
                children: n,
                className: i,
                component: s = "div",
                invisible: a = !1,
                open: l,
                components: c = {},
                componentsProps: d = {},
                slotProps: p = {},
                slots: b = {},
                TransitionComponent: h,
                transitionDuration: g,
                ...m
            } = r,
            v = { ...r,
                component: s,
                invisible: a
            },
            x = $h(v),
            w = {
                transition: h,
                root: c.Root,
                ...b
            },
            S = { ...d,
                ...p
            },
            y = {
                component: s,
                slots: w,
                slotProps: S
            },
            [C, R] = te("root", {
                elementType: kh,
                externalForwardedProps: y,
                className: H(x.root, i),
                ownerState: v
            }),
            [k, E] = te("transition", {
                elementType: vi,
                externalForwardedProps: y,
                ownerState: v
            });
        return $.jsx(k, { in: l,
            timeout: g,
            ...m,
            ...E,
            children: $.jsx(C, {
                "aria-hidden": !0,
                ...R,
                classes: x,
                ref: o,
                children: n
            })
        })
    });

function Ph(e) {
    const {
        badgeContent: t,
        invisible: o = !1,
        max: r = 99,
        showZero: n = !1
    } = e, i = Kl({
        badgeContent: t,
        max: r
    });
    let s = o;
    o === !1 && t === 0 && !n && (s = !0);
    const {
        badgeContent: a,
        max: l = r
    } = s ? i : e, c = a && Number(a) > l ? `${l}+` : a;
    return {
        badgeContent: a,
        invisible: s,
        max: l,
        displayValue: c
    }
}

function Th(e) {
    return Y("MuiBadge", e)
}
const Xt = K("MuiBadge", ["root", "badge", "dot", "standard", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "invisible", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "overlapRectangular", "overlapCircular", "anchorOriginTopLeftCircular", "anchorOriginTopLeftRectangular", "anchorOriginTopRightCircular", "anchorOriginTopRightRectangular", "anchorOriginBottomLeftCircular", "anchorOriginBottomLeftRectangular", "anchorOriginBottomRightCircular", "anchorOriginBottomRightRectangular"]),
    _n = 10,
    Vn = 4,
    Eh = e => {
        const {
            color: t,
            anchorOrigin: o,
            invisible: r,
            overlap: n,
            variant: i,
            classes: s = {}
        } = e, a = {
            root: ["root"],
            badge: ["badge", i, r && "invisible", `anchorOrigin${L(o.vertical)}${L(o.horizontal)}`, `anchorOrigin${L(o.vertical)}${L(o.horizontal)}${L(n)}`, `overlap${L(n)}`, t !== "default" && `color${L(t)}`]
        };
        return Q(a, Th, s)
    },
    Mh = j("span", {
        name: "MuiBadge",
        slot: "Root"
    })({
        position: "relative",
        display: "inline-flex",
        verticalAlign: "middle",
        flexShrink: 0
    }),
    Ih = j("span", {
        name: "MuiBadge",
        slot: "Badge",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.badge, t[o.variant], t[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}${L(o.overlap)}`], o.color !== "default" && t[`color${L(o.color)}`], o.invisible && t.invisible]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "absolute",
        boxSizing: "border-box",
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(12),
        minWidth: _n * 2,
        lineHeight: 1,
        padding: "0 6px",
        height: _n * 2,
        borderRadius: _n,
        zIndex: 1,
        transition: e.transitions.create("transform", {
            easing: e.transitions.easing.easeInOut,
            duration: e.transitions.duration.enteringScreen
        }),
        variants: [...Object.entries(e.palette).filter(Le(["contrastText"])).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                backgroundColor: (e.vars || e).palette[t].main,
                color: (e.vars || e).palette[t].contrastText
            }
        })), {
            props: {
                variant: "dot"
            },
            style: {
                borderRadius: Vn,
                height: Vn * 2,
                minWidth: Vn * 2,
                padding: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
            style: {
                top: 0,
                right: 0,
                transform: "scale(1) translate(50%, -50%)",
                transformOrigin: "100% 0%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(50%, -50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
            style: {
                bottom: 0,
                right: 0,
                transform: "scale(1) translate(50%, 50%)",
                transformOrigin: "100% 100%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(50%, 50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
            style: {
                top: 0,
                left: 0,
                transform: "scale(1) translate(-50%, -50%)",
                transformOrigin: "0% 0%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(-50%, -50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
            style: {
                bottom: 0,
                left: 0,
                transform: "scale(1) translate(-50%, 50%)",
                transformOrigin: "0% 100%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(-50%, 50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
            style: {
                top: "14%",
                right: "14%",
                transform: "scale(1) translate(50%, -50%)",
                transformOrigin: "100% 0%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(50%, -50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
            style: {
                bottom: "14%",
                right: "14%",
                transform: "scale(1) translate(50%, 50%)",
                transformOrigin: "100% 100%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(50%, 50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
            style: {
                top: "14%",
                left: "14%",
                transform: "scale(1) translate(-50%, -50%)",
                transformOrigin: "0% 0%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(-50%, -50%)"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
            style: {
                bottom: "14%",
                left: "14%",
                transform: "scale(1) translate(-50%, 50%)",
                transformOrigin: "0% 100%",
                [`&.${Xt.invisible}`]: {
                    transform: "scale(0) translate(-50%, 50%)"
                }
            }
        }, {
            props: {
                invisible: !0
            },
            style: {
                transition: e.transitions.create("transform", {
                    easing: e.transitions.easing.easeInOut,
                    duration: e.transitions.duration.leavingScreen
                })
            }
        }]
    })));

function fa(e) {
    return {
        vertical: (e == null ? void 0 : e.vertical) ? ? "top",
        horizontal: (e == null ? void 0 : e.horizontal) ? ? "right"
    }
}
const hx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiBadge"
            }),
            {
                anchorOrigin: n,
                className: i,
                classes: s,
                component: a,
                components: l = {},
                componentsProps: c = {},
                children: d,
                overlap: p = "rectangular",
                color: b = "default",
                invisible: h = !1,
                max: g = 99,
                badgeContent: m,
                slots: v,
                slotProps: x,
                showZero: w = !1,
                variant: S = "standard",
                ...y
            } = r,
            {
                badgeContent: C,
                invisible: R,
                max: k,
                displayValue: E
            } = Ph({
                max: g,
                invisible: h,
                badgeContent: m,
                showZero: w
            }),
            O = Kl({
                anchorOrigin: fa(n),
                color: b,
                overlap: p,
                variant: S,
                badgeContent: m
            }),
            M = R || C == null && S !== "dot",
            {
                color: B = b,
                overlap: f = p,
                anchorOrigin: P,
                variant: T = S
            } = M ? O : r,
            I = fa(P),
            A = T !== "dot" ? E : void 0,
            z = { ...r,
                badgeContent: C,
                invisible: M,
                max: k,
                displayValue: A,
                showZero: w,
                anchorOrigin: I,
                color: B,
                overlap: f,
                variant: T
            },
            W = Eh(z),
            F = {
                slots: {
                    root: (v == null ? void 0 : v.root) ? ? l.Root,
                    badge: (v == null ? void 0 : v.badge) ? ? l.Badge
                },
                slotProps: {
                    root: (x == null ? void 0 : x.root) ? ? c.root,
                    badge: (x == null ? void 0 : x.badge) ? ? c.badge
                }
            },
            [U, ie] = te("root", {
                elementType: Mh,
                externalForwardedProps: { ...F,
                    ...y
                },
                ownerState: z,
                className: H(W.root, i),
                ref: o,
                additionalProps: {
                    as: a
                }
            }),
            [ee, J] = te("badge", {
                elementType: Ih,
                externalForwardedProps: F,
                ownerState: z,
                className: W.badge
            });
        return $.jsxs(U, { ...ie,
            children: [d, $.jsx(ee, { ...J,
                children: A
            })]
        })
    }),
    Ah = K("MuiBox", ["root"]),
    Oh = Hi(),
    bx = ju({
        themeId: xt,
        defaultTheme: Oh,
        defaultClassName: Ah.root,
        generateClassName: dl.generate
    });

function Bh(e) {
    return Y("MuiButton", e)
}
const so = K("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]),
    sc = u.createContext({}),
    ac = u.createContext(void 0),
    Lh = e => {
        const {
            color: t,
            disableElevation: o,
            fullWidth: r,
            size: n,
            variant: i,
            loading: s,
            loadingPosition: a,
            classes: l
        } = e, c = {
            root: ["root", s && "loading", i, `${i}${L(t)}`, `size${L(n)}`, `${i}Size${L(n)}`, `color${L(t)}`, o && "disableElevation", r && "fullWidth", s && `loadingPosition${L(a)}`],
            startIcon: ["icon", "startIcon", `iconSize${L(n)}`],
            endIcon: ["icon", "endIcon", `iconSize${L(n)}`],
            loadingIndicator: ["loadingIndicator"],
            loadingWrapper: ["loadingWrapper"]
        }, d = Q(c, Bh, l);
        return { ...l,
            ...d
        }
    },
    lc = [{
        props: {
            size: "small"
        },
        style: {
            "& > *:nth-of-type(1)": {
                fontSize: 18
            }
        }
    }, {
        props: {
            size: "medium"
        },
        style: {
            "& > *:nth-of-type(1)": {
                fontSize: 20
            }
        }
    }, {
        props: {
            size: "large"
        },
        style: {
            "& > *:nth-of-type(1)": {
                fontSize: 22
            }
        }
    }],
    Nh = j(_t, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], t[`${o.variant}${L(o.color)}`], t[`size${L(o.size)}`], t[`${o.variant}Size${L(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading]
        }
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800],
            o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
        return { ...e.typography.button,
            minWidth: 64,
            padding: "6px 16px",
            border: 0,
            borderRadius: (e.vars || e).shape.borderRadius,
            transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
                duration: e.transitions.duration.short
            }),
            "&:hover": {
                textDecoration: "none"
            },
            [`&.${so.disabled}`]: {
                color: (e.vars || e).palette.action.disabled
            },
            variants: [{
                props: {
                    variant: "contained"
                },
                style: {
                    color: "var(--variant-containedColor)",
                    backgroundColor: "var(--variant-containedBg)",
                    boxShadow: (e.vars || e).shadows[2],
                    "&:hover": {
                        boxShadow: (e.vars || e).shadows[4],
                        "@media (hover: none)": {
                            boxShadow: (e.vars || e).shadows[2]
                        }
                    },
                    "&:active": {
                        boxShadow: (e.vars || e).shadows[8]
                    },
                    [`&.${so.focusVisible}`]: {
                        boxShadow: (e.vars || e).shadows[6]
                    },
                    [`&.${so.disabled}`]: {
                        color: (e.vars || e).palette.action.disabled,
                        boxShadow: (e.vars || e).shadows[0],
                        backgroundColor: (e.vars || e).palette.action.disabledBackground
                    }
                }
            }, {
                props: {
                    variant: "outlined"
                },
                style: {
                    padding: "5px 15px",
                    border: "1px solid currentColor",
                    borderColor: "var(--variant-outlinedBorder, currentColor)",
                    backgroundColor: "var(--variant-outlinedBg)",
                    color: "var(--variant-outlinedColor)",
                    [`&.${so.disabled}`]: {
                        border: `1px solid ${(e.vars||e).palette.action.disabledBackground}`
                    }
                }
            }, {
                props: {
                    variant: "text"
                },
                style: {
                    padding: "6px 8px",
                    color: "var(--variant-textColor)",
                    backgroundColor: "var(--variant-textBg)"
                }
            }, ...Object.entries(e.palette).filter(Le()).map(([r]) => ({
                props: {
                    color: r
                },
                style: {
                    "--variant-textColor": (e.vars || e).palette[r].main,
                    "--variant-outlinedColor": (e.vars || e).palette[r].main,
                    "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, .5),
                    "--variant-containedColor": (e.vars || e).palette[r].contrastText,
                    "--variant-containedBg": (e.vars || e).palette[r].main,
                    "@media (hover: hover)": {
                        "&:hover": {
                            "--variant-containedBg": (e.vars || e).palette[r].dark,
                            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
                            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
                            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
                        }
                    }
                }
            })), {
                props: {
                    color: "inherit"
                },
                style: {
                    color: "inherit",
                    borderColor: "currentColor",
                    "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
                    "@media (hover: hover)": {
                        "&:hover": {
                            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
                            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
                            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
                        }
                    }
                }
            }, {
                props: {
                    size: "small",
                    variant: "text"
                },
                style: {
                    padding: "4px 5px",
                    fontSize: e.typography.pxToRem(13)
                }
            }, {
                props: {
                    size: "large",
                    variant: "text"
                },
                style: {
                    padding: "8px 11px",
                    fontSize: e.typography.pxToRem(15)
                }
            }, {
                props: {
                    size: "small",
                    variant: "outlined"
                },
                style: {
                    padding: "3px 9px",
                    fontSize: e.typography.pxToRem(13)
                }
            }, {
                props: {
                    size: "large",
                    variant: "outlined"
                },
                style: {
                    padding: "7px 21px",
                    fontSize: e.typography.pxToRem(15)
                }
            }, {
                props: {
                    size: "small",
                    variant: "contained"
                },
                style: {
                    padding: "4px 10px",
                    fontSize: e.typography.pxToRem(13)
                }
            }, {
                props: {
                    size: "large",
                    variant: "contained"
                },
                style: {
                    padding: "8px 22px",
                    fontSize: e.typography.pxToRem(15)
                }
            }, {
                props: {
                    disableElevation: !0
                },
                style: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    },
                    [`&.${so.focusVisible}`]: {
                        boxShadow: "none"
                    },
                    "&:active": {
                        boxShadow: "none"
                    },
                    [`&.${so.disabled}`]: {
                        boxShadow: "none"
                    }
                }
            }, {
                props: {
                    fullWidth: !0
                },
                style: {
                    width: "100%"
                }
            }, {
                props: {
                    loadingPosition: "center"
                },
                style: {
                    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
                        duration: e.transitions.duration.short
                    }),
                    [`&.${so.loading}`]: {
                        color: "transparent"
                    }
                }
            }]
        }
    })),
    jh = j("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${L(o.size)}`]]
        }
    })(({
        theme: e
    }) => ({
        display: "inherit",
        marginRight: 8,
        marginLeft: -4,
        variants: [{
            props: {
                size: "small"
            },
            style: {
                marginLeft: -2
            }
        }, {
            props: {
                loadingPosition: "start",
                loading: !0
            },
            style: {
                transition: e.transitions.create(["opacity"], {
                    duration: e.transitions.duration.short
                }),
                opacity: 0
            }
        }, {
            props: {
                loadingPosition: "start",
                loading: !0,
                fullWidth: !0
            },
            style: {
                marginRight: -8
            }
        }, ...lc]
    })),
    zh = j("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${L(o.size)}`]]
        }
    })(({
        theme: e
    }) => ({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8,
        variants: [{
            props: {
                size: "small"
            },
            style: {
                marginRight: -2
            }
        }, {
            props: {
                loadingPosition: "end",
                loading: !0
            },
            style: {
                transition: e.transitions.create(["opacity"], {
                    duration: e.transitions.duration.short
                }),
                opacity: 0
            }
        }, {
            props: {
                loadingPosition: "end",
                loading: !0,
                fullWidth: !0
            },
            style: {
                marginLeft: -8
            }
        }, ...lc]
    })),
    Fh = j("span", {
        name: "MuiButton",
        slot: "LoadingIndicator"
    })(({
        theme: e
    }) => ({
        display: "none",
        position: "absolute",
        visibility: "visible",
        variants: [{
            props: {
                loading: !0
            },
            style: {
                display: "flex"
            }
        }, {
            props: {
                loadingPosition: "start"
            },
            style: {
                left: 14
            }
        }, {
            props: {
                loadingPosition: "start",
                size: "small"
            },
            style: {
                left: 10
            }
        }, {
            props: {
                variant: "text",
                loadingPosition: "start"
            },
            style: {
                left: 6
            }
        }, {
            props: {
                loadingPosition: "center"
            },
            style: {
                left: "50%",
                transform: "translate(-50%)",
                color: (e.vars || e).palette.action.disabled
            }
        }, {
            props: {
                loadingPosition: "end"
            },
            style: {
                right: 14
            }
        }, {
            props: {
                loadingPosition: "end",
                size: "small"
            },
            style: {
                right: 10
            }
        }, {
            props: {
                variant: "text",
                loadingPosition: "end"
            },
            style: {
                right: 6
            }
        }, {
            props: {
                loadingPosition: "start",
                fullWidth: !0
            },
            style: {
                position: "relative",
                left: -10
            }
        }, {
            props: {
                loadingPosition: "end",
                fullWidth: !0
            },
            style: {
                position: "relative",
                right: -10
            }
        }]
    })),
    ma = j("span", {
        name: "MuiButton",
        slot: "LoadingIconPlaceholder"
    })({
        display: "inline-block",
        width: "1em",
        height: "1em"
    }),
    yx = u.forwardRef(function(t, o) {
        const r = u.useContext(sc),
            n = u.useContext(ac),
            i = mr(r, t),
            s = oe({
                props: i,
                name: "MuiButton"
            }),
            {
                children: a,
                color: l = "primary",
                component: c = "button",
                className: d,
                disabled: p = !1,
                disableElevation: b = !1,
                disableFocusRipple: h = !1,
                endIcon: g,
                focusVisibleClassName: m,
                fullWidth: v = !1,
                id: x,
                loading: w = null,
                loadingIndicator: S,
                loadingPosition: y = "center",
                size: C = "medium",
                startIcon: R,
                type: k,
                variant: E = "text",
                ...O
            } = s,
            M = ho(x),
            B = S ? ? $.jsx(Gl, {
                "aria-labelledby": M,
                color: "inherit",
                size: 16
            }),
            f = { ...s,
                color: l,
                component: c,
                disabled: p,
                disableElevation: b,
                disableFocusRipple: h,
                fullWidth: v,
                loading: w,
                loadingIndicator: B,
                loadingPosition: y,
                size: C,
                type: k,
                variant: E
            },
            P = Lh(f),
            T = (R || w && y === "start") && $.jsx(jh, {
                className: P.startIcon,
                ownerState: f,
                children: R || $.jsx(ma, {
                    className: P.loadingIconPlaceholder,
                    ownerState: f
                })
            }),
            I = (g || w && y === "end") && $.jsx(zh, {
                className: P.endIcon,
                ownerState: f,
                children: g || $.jsx(ma, {
                    className: P.loadingIconPlaceholder,
                    ownerState: f
                })
            }),
            A = n || "",
            z = typeof w == "boolean" ? $.jsx("span", {
                className: P.loadingWrapper,
                style: {
                    display: "contents"
                },
                children: w && $.jsx(Fh, {
                    className: P.loadingIndicator,
                    ownerState: f,
                    children: B
                })
            }) : null;
        return $.jsxs(Nh, {
            ownerState: f,
            className: H(r.className, P.root, d, A),
            component: c,
            disabled: p || w,
            focusRipple: !h,
            focusVisibleClassName: H(P.focusVisible, m),
            ref: o,
            type: k,
            id: w ? M : x,
            ...O,
            classes: P,
            children: [T, y !== "end" && z, a, y === "end" && z, I]
        })
    });

function Dh(e) {
    return u.Children.toArray(e).filter(t => u.isValidElement(t))
}

function Wh(e) {
    return Y("MuiButtonGroup", e)
}
const he = K("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "groupedHorizontal", "groupedVertical", "groupedText", "groupedTextHorizontal", "groupedTextVertical", "groupedTextPrimary", "groupedTextSecondary", "groupedOutlined", "groupedOutlinedHorizontal", "groupedOutlinedVertical", "groupedOutlinedPrimary", "groupedOutlinedSecondary", "groupedContained", "groupedContainedHorizontal", "groupedContainedVertical", "groupedContainedPrimary", "groupedContainedSecondary", "lastButton", "middleButton"]),
    Hh = (e, t) => {
        const {
            ownerState: o
        } = e;
        return [{
            [`& .${he.grouped}`]: t.grouped
        }, {
            [`& .${he.grouped}`]: t[`grouped${L(o.orientation)}`]
        }, {
            [`& .${he.grouped}`]: t[`grouped${L(o.variant)}`]
        }, {
            [`& .${he.grouped}`]: t[`grouped${L(o.variant)}${L(o.orientation)}`]
        }, {
            [`& .${he.grouped}`]: t[`grouped${L(o.variant)}${L(o.color)}`]
        }, {
            [`& .${he.firstButton}`]: t.firstButton
        }, {
            [`& .${he.lastButton}`]: t.lastButton
        }, {
            [`& .${he.middleButton}`]: t.middleButton
        }, t.root, t[o.variant], o.disableElevation === !0 && t.disableElevation, o.fullWidth && t.fullWidth, o.orientation === "vertical" && t.vertical]
    },
    Uh = e => {
        const {
            classes: t,
            color: o,
            disabled: r,
            disableElevation: n,
            fullWidth: i,
            orientation: s,
            variant: a
        } = e, l = {
            root: ["root", a, s, i && "fullWidth", n && "disableElevation", `color${L(o)}`],
            grouped: ["grouped", `grouped${L(s)}`, `grouped${L(a)}`, `grouped${L(a)}${L(s)}`, `grouped${L(a)}${L(o)}`, r && "disabled"],
            firstButton: ["firstButton"],
            lastButton: ["lastButton"],
            middleButton: ["middleButton"]
        };
        return Q(l, Wh, t)
    },
    _h = j("div", {
        name: "MuiButtonGroup",
        slot: "Root",
        overridesResolver: Hh
    })(Z(({
        theme: e
    }) => ({
        display: "inline-flex",
        borderRadius: (e.vars || e).shape.borderRadius,
        variants: [{
            props: {
                variant: "contained"
            },
            style: {
                boxShadow: (e.vars || e).shadows[2]
            }
        }, {
            props: {
                disableElevation: !0
            },
            style: {
                boxShadow: "none"
            }
        }, {
            props: {
                fullWidth: !0
            },
            style: {
                width: "100%"
            }
        }, {
            props: {
                orientation: "vertical"
            },
            style: {
                flexDirection: "column",
                [`& .${he.lastButton},& .${he.middleButton}`]: {
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0
                },
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                }
            }
        }, {
            props: {
                orientation: "horizontal"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                },
                [`& .${he.lastButton},& .${he.middleButton}`]: {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                }
            }
        }, {
            props: {
                variant: "text",
                orientation: "horizontal"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderRight: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground,.23)}` : `1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,
                    [`&.${he.disabled}`]: {
                        borderRight: `1px solid ${(e.vars||e).palette.action.disabled}`
                    }
                }
            }
        }, {
            props: {
                variant: "text",
                orientation: "vertical"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderBottom: e.vars ? `1px solid ${e.alpha(e.vars.palette.common.onBackground,.23)}` : `1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,
                    [`&.${he.disabled}`]: {
                        borderBottom: `1px solid ${(e.vars||e).palette.action.disabled}`
                    }
                }
            }
        }, ...Object.entries(e.palette).filter(Le()).flatMap(([t]) => [{
            props: {
                variant: "text",
                color: t
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderColor: e.alpha((e.vars || e).palette[t].main, .5)
                }
            }
        }]), {
            props: {
                variant: "outlined",
                orientation: "horizontal"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderRightColor: "transparent",
                    "&:hover": {
                        borderRightColor: "currentColor"
                    }
                },
                [`& .${he.lastButton},& .${he.middleButton}`]: {
                    marginLeft: -1
                }
            }
        }, {
            props: {
                variant: "outlined",
                orientation: "vertical"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderBottomColor: "transparent",
                    "&:hover": {
                        borderBottomColor: "currentColor"
                    }
                },
                [`& .${he.lastButton},& .${he.middleButton}`]: {
                    marginTop: -1
                }
            }
        }, {
            props: {
                variant: "contained",
                orientation: "horizontal"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderRight: `1px solid ${(e.vars||e).palette.grey[400]}`,
                    [`&.${he.disabled}`]: {
                        borderRight: `1px solid ${(e.vars||e).palette.action.disabled}`
                    }
                }
            }
        }, {
            props: {
                variant: "contained",
                orientation: "vertical"
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderBottom: `1px solid ${(e.vars||e).palette.grey[400]}`,
                    [`&.${he.disabled}`]: {
                        borderBottom: `1px solid ${(e.vars||e).palette.action.disabled}`
                    }
                }
            }
        }, ...Object.entries(e.palette).filter(Le(["dark"])).map(([t]) => ({
            props: {
                variant: "contained",
                color: t
            },
            style: {
                [`& .${he.firstButton},& .${he.middleButton}`]: {
                    borderColor: (e.vars || e).palette[t].dark
                }
            }
        }))],
        [`& .${he.grouped}`]: {
            minWidth: 40,
            boxShadow: "none",
            props: {
                variant: "contained"
            },
            style: {
                "&:hover": {
                    boxShadow: "none"
                }
            }
        }
    }))),
    vx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiButtonGroup"
            }),
            {
                children: n,
                className: i,
                color: s = "primary",
                component: a = "div",
                disabled: l = !1,
                disableElevation: c = !1,
                disableFocusRipple: d = !1,
                disableRipple: p = !1,
                fullWidth: b = !1,
                orientation: h = "horizontal",
                size: g = "medium",
                variant: m = "outlined",
                ...v
            } = r,
            x = { ...r,
                color: s,
                component: a,
                disabled: l,
                disableElevation: c,
                disableFocusRipple: d,
                disableRipple: p,
                fullWidth: b,
                orientation: h,
                size: g,
                variant: m
            },
            w = Uh(x),
            S = u.useMemo(() => ({
                className: w.grouped,
                color: s,
                disabled: l,
                disableElevation: c,
                disableFocusRipple: d,
                disableRipple: p,
                fullWidth: b,
                size: g,
                variant: m
            }), [s, l, c, d, p, b, g, m, w.grouped]),
            y = Dh(n),
            C = y.length,
            R = k => {
                const E = k === 0,
                    O = k === C - 1;
                return E && O ? "" : E ? w.firstButton : O ? w.lastButton : w.middleButton
            };
        return $.jsx(_h, {
            as: a,
            role: "group",
            className: H(w.root, i),
            ref: o,
            ownerState: x,
            ...v,
            children: $.jsx(sc.Provider, {
                value: S,
                children: y.map((k, E) => $.jsx(ac.Provider, {
                    value: R(E),
                    children: k
                }, E))
            })
        })
    });

function Vh(e) {
    return Y("MuiCard", e)
}
K("MuiCard", ["root"]);
const Gh = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, Vh, t)
    },
    Kh = j(bo, {
        name: "MuiCard",
        slot: "Root"
    })({
        overflow: "hidden"
    }),
    xx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiCard"
            }),
            {
                className: n,
                raised: i = !1,
                ...s
            } = r,
            a = { ...r,
                raised: i
            },
            l = Gh(a);
        return $.jsx(Kh, {
            className: H(l.root, n),
            elevation: i ? 8 : void 0,
            ref: o,
            ownerState: a,
            ...s
        })
    });

function qh(e) {
    return Y("MuiCardContent", e)
}
K("MuiCardContent", ["root"]);
const Xh = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, qh, t)
    },
    Yh = j("div", {
        name: "MuiCardContent",
        slot: "Root"
    })({
        padding: 16,
        "&:last-child": {
            paddingBottom: 24
        }
    }),
    Sx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiCardContent"
            }),
            {
                className: n,
                component: i = "div",
                ...s
            } = r,
            a = { ...r,
                component: i
            },
            l = Xh(a);
        return $.jsx(Yh, {
            as: i,
            className: H(l.root, n),
            ownerState: a,
            ref: o,
            ...s
        })
    });

function Qh(e) {
    return Y("PrivateSwitchBase", e)
}
K("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Jh = e => {
        const {
            classes: t,
            checked: o,
            disabled: r,
            edge: n
        } = e, i = {
            root: ["root", o && "checked", r && "disabled", n && `edge${L(n)}`],
            input: ["input"]
        };
        return Q(i, Qh, t)
    },
    Zh = j(_t, {
        name: "MuiSwitchBase"
    })({
        padding: 9,
        borderRadius: "50%",
        variants: [{
            props: {
                edge: "start",
                size: "small"
            },
            style: {
                marginLeft: -3
            }
        }, {
            props: ({
                edge: e,
                ownerState: t
            }) => e === "start" && t.size !== "small",
            style: {
                marginLeft: -12
            }
        }, {
            props: {
                edge: "end",
                size: "small"
            },
            style: {
                marginRight: -3
            }
        }, {
            props: ({
                edge: e,
                ownerState: t
            }) => e === "end" && t.size !== "small",
            style: {
                marginRight: -12
            }
        }]
    }),
    eb = j("input", {
        name: "MuiSwitchBase",
        shouldForwardProp: dt
    })({
        cursor: "inherit",
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1
    }),
    cc = u.forwardRef(function(t, o) {
        const {
            autoFocus: r,
            checked: n,
            checkedIcon: i,
            defaultChecked: s,
            disabled: a,
            disableFocusRipple: l = !1,
            edge: c = !1,
            icon: d,
            id: p,
            inputProps: b,
            inputRef: h,
            name: g,
            onBlur: m,
            onChange: v,
            onFocus: x,
            readOnly: w,
            required: S = !1,
            tabIndex: y,
            type: C,
            value: R,
            slots: k = {},
            slotProps: E = {},
            ...O
        } = t, [M, B] = hr({
            controlled: n,
            default: !!s,
            name: "SwitchBase",
            state: "checked"
        }), f = oo(), P = _ => {
            x && x(_), f && f.onFocus && f.onFocus(_)
        }, T = _ => {
            m && m(_), f && f.onBlur && f.onBlur(_)
        }, I = _ => {
            if (_.nativeEvent.defaultPrevented) return;
            const D = _.target.checked;
            B(D), v && v(_, D)
        };
        let A = a;
        f && typeof A > "u" && (A = f.disabled);
        const z = C === "checkbox" || C === "radio",
            W = { ...t,
                checked: M,
                disabled: A,
                disableFocusRipple: l,
                edge: c
            },
            F = Jh(W),
            U = {
                slots: k,
                slotProps: {
                    input: b,
                    ...E
                }
            },
            [ie, ee] = te("root", {
                ref: o,
                elementType: Zh,
                className: F.root,
                shouldForwardComponentProp: !0,
                externalForwardedProps: { ...U,
                    component: "span",
                    ...O
                },
                getSlotProps: _ => ({ ..._,
                    onFocus: D => {
                        var V;
                        (V = _.onFocus) == null || V.call(_, D), P(D)
                    },
                    onBlur: D => {
                        var V;
                        (V = _.onBlur) == null || V.call(_, D), T(D)
                    }
                }),
                ownerState: W,
                additionalProps: {
                    centerRipple: !0,
                    focusRipple: !l,
                    disabled: A,
                    role: void 0,
                    tabIndex: null
                }
            }),
            [J, ue] = te("input", {
                ref: h,
                elementType: eb,
                className: F.input,
                externalForwardedProps: U,
                getSlotProps: _ => ({ ..._,
                    onChange: D => {
                        var V;
                        (V = _.onChange) == null || V.call(_, D), I(D)
                    }
                }),
                ownerState: W,
                additionalProps: {
                    autoFocus: r,
                    checked: n,
                    defaultChecked: s,
                    disabled: A,
                    id: z ? p : void 0,
                    name: g,
                    readOnly: w,
                    required: S,
                    tabIndex: y,
                    type: C,
                    ...C === "checkbox" && R === void 0 ? {} : {
                        value: R
                    }
                }
            });
        return $.jsxs(ie, { ...ee,
            children: [$.jsx(J, { ...ue
            }), M ? i : d]
        })
    }),
    tb = gt($.jsx("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    })),
    ob = gt($.jsx("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    })),
    rb = gt($.jsx("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
    }));

function nb(e) {
    return Y("MuiCheckbox", e)
}
const Gn = K("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]),
    ib = e => {
        const {
            classes: t,
            indeterminate: o,
            color: r,
            size: n
        } = e, i = {
            root: ["root", o && "indeterminate", `color${L(r)}`, `size${L(n)}`]
        }, s = Q(i, nb, t);
        return { ...t,
            ...s
        }
    },
    sb = j(cc, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiCheckbox",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.indeterminate && t.indeterminate, t[`size${L(o.size)}`], o.color !== "default" && t[`color${L(o.color)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        color: (e.vars || e).palette.text.secondary,
        variants: [{
            props: {
                color: "default",
                disableRipple: !1
            },
            style: {
                "&:hover": {
                    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
                }
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t,
                disableRipple: !1
            },
            style: {
                "&:hover": {
                    backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
                }
            }
        })), ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                [`&.${Gn.checked}, &.${Gn.indeterminate}`]: {
                    color: (e.vars || e).palette[t].main
                },
                [`&.${Gn.disabled}`]: {
                    color: (e.vars || e).palette.action.disabled
                }
            }
        })), {
            props: {
                disableRipple: !1
            },
            style: {
                "&:hover": {
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }]
    }))),
    ab = $.jsx(ob, {}),
    lb = $.jsx(tb, {}),
    cb = $.jsx(rb, {}),
    Cx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiCheckbox"
            }),
            {
                checkedIcon: n = ab,
                color: i = "primary",
                icon: s = lb,
                indeterminate: a = !1,
                indeterminateIcon: l = cb,
                inputProps: c,
                size: d = "medium",
                disableRipple: p = !1,
                className: b,
                slots: h = {},
                slotProps: g = {},
                ...m
            } = r,
            v = a ? l : s,
            x = a ? l : n,
            w = { ...r,
                disableRipple: p,
                color: i,
                indeterminate: a,
                size: d
            },
            S = ib(w),
            y = g.input ? ? c,
            [C, R] = te("root", {
                ref: o,
                elementType: sb,
                className: H(S.root, b),
                shouldForwardComponentProp: !0,
                externalForwardedProps: {
                    slots: h,
                    slotProps: g,
                    ...m
                },
                ownerState: w,
                additionalProps: {
                    type: "checkbox",
                    icon: u.cloneElement(v, {
                        fontSize: v.props.fontSize ? ? d
                    }),
                    checkedIcon: u.cloneElement(x, {
                        fontSize: x.props.fontSize ? ? d
                    }),
                    disableRipple: p,
                    slots: h,
                    slotProps: {
                        input: jl(typeof y == "function" ? y(w) : y, {
                            "data-indeterminate": a
                        })
                    }
                }
            });
        return $.jsx(C, { ...R,
            classes: S
        })
    });

function ga(e) {
    return e.substring(2).toLowerCase()
}

function db(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
}

function ub(e) {
    const {
        children: t,
        disableReactTree: o = !1,
        mouseEvent: r = "onClick",
        onClickAway: n,
        touchEvent: i = "onTouchEnd"
    } = e, s = u.useRef(!1), a = u.useRef(null), l = u.useRef(!1), c = u.useRef(!1);
    u.useEffect(() => (setTimeout(() => {
        l.current = !0
    }, 0), () => {
        l.current = !1
    }), []);
    const d = _e(yo(t), a),
        p = it(g => {
            const m = c.current;
            c.current = !1;
            const v = et(a.current);
            if (!l.current || !a.current || "clientX" in g && db(g, v)) return;
            if (s.current) {
                s.current = !1;
                return
            }
            let x;
            g.composedPath ? x = g.composedPath().includes(a.current) : x = !v.documentElement.contains(g.target) || a.current.contains(g.target), !x && (o || !m) && n(g)
        }),
        b = g => m => {
            c.current = !0;
            const v = t.props[g];
            v && v(m)
        },
        h = {
            ref: d
        };
    return i !== !1 && (h[i] = b(i)), u.useEffect(() => {
        if (i !== !1) {
            const g = ga(i),
                m = et(a.current),
                v = () => {
                    s.current = !0
                };
            return m.addEventListener(g, p), m.addEventListener("touchmove", v), () => {
                m.removeEventListener(g, p), m.removeEventListener("touchmove", v)
            }
        }
    }, [p, i]), r !== !1 && (h[r] = b(r)), u.useEffect(() => {
        if (r !== !1) {
            const g = ga(r),
                m = et(a.current);
            return m.addEventListener(g, p), () => {
                m.removeEventListener(g, p)
            }
        }
    }, [p, r]), u.cloneElement(t, h)
}
const xi = typeof Ui({}) == "function",
    pb = (e, t) => ({
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
        ...t && !e.vars && {
            colorScheme: e.palette.mode
        }
    }),
    fb = e => ({
        color: (e.vars || e).palette.text.primary,
        ...e.typography.body1,
        backgroundColor: (e.vars || e).palette.background.default,
        "@media print": {
            backgroundColor: (e.vars || e).palette.common.white
        }
    }),
    dc = (e, t = !1) => {
        var i, s;
        const o = {};
        t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([a, l]) => {
            var d, p;
            const c = e.getColorSchemeSelector(a);
            c.startsWith("@") ? o[c] = {
                ":root": {
                    colorScheme: (d = l.palette) == null ? void 0 : d.mode
                }
            } : o[c.replace(/\s*&/, "")] = {
                colorScheme: (p = l.palette) == null ? void 0 : p.mode
            }
        });
        let r = {
            html: pb(e, t),
            "*, *::before, *::after": {
                boxSizing: "inherit"
            },
            "strong, b": {
                fontWeight: e.typography.fontWeightBold
            },
            body: {
                margin: 0,
                ...fb(e),
                "&::backdrop": {
                    backgroundColor: (e.vars || e).palette.background.default
                }
            },
            ...o
        };
        const n = (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
        return n && (r = [r, n]), r
    },
    Gr = "mui-ecs",
    mb = e => {
        const t = dc(e, !1),
            o = Array.isArray(t) ? t[0] : t;
        return !e.vars && o && (o.html[`:root:has(${Gr})`] = {
            colorScheme: e.palette.mode
        }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, n]) => {
            var s, a;
            const i = e.getColorSchemeSelector(r);
            i.startsWith("@") ? o[i] = {
                [`:root:not(:has(.${Gr}))`]: {
                    colorScheme: (s = n.palette) == null ? void 0 : s.mode
                }
            } : o[i.replace(/\s*&/, "")] = {
                [`&:not(:has(.${Gr}))`]: {
                    colorScheme: (a = n.palette) == null ? void 0 : a.mode
                }
            }
        }), t
    },
    gb = Ui(xi ? ({
        theme: e,
        enableColorScheme: t
    }) => dc(e, t) : ({
        theme: e
    }) => mb(e));

function wx(e) {
    const t = oe({
            props: e,
            name: "MuiCssBaseline"
        }),
        {
            children: o,
            enableColorScheme: r = !1
        } = t;
    return $.jsxs(u.Fragment, {
        children: [xi && $.jsx(gb, {
            enableColorScheme: r
        }), !xi && !r && $.jsx("span", {
            className: Gr,
            style: {
                display: "none"
            }
        }), o]
    })
}

function uc(e = window) {
    const t = e.document.documentElement.clientWidth;
    return e.innerWidth - t
}

function hb(e) {
    const t = et(e);
    return t.body === e ? Pt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}

function lr(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}

function ha(e) {
    return parseInt(Pt(e).getComputedStyle(e).paddingRight, 10) || 0
}

function bb(e) {
    const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName),
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return o || r
}

function ba(e, t, o, r, n) {
    const i = [t, o, ...r];
    [].forEach.call(e.children, s => {
        const a = !i.includes(s),
            l = !bb(s);
        a && l && lr(s, n)
    })
}

function Kn(e, t) {
    let o = -1;
    return e.some((r, n) => t(r) ? (o = n, !0) : !1), o
}

function yb(e, t) {
    const o = [],
        r = e.container;
    if (!t.disableScrollLock) {
        if (hb(r)) {
            const s = uc(Pt(r));
            o.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r
            }), r.style.paddingRight = `${ha(r)+s}px`;
            const a = et(r).querySelectorAll(".mui-fixed");
            [].forEach.call(a, l => {
                o.push({
                    value: l.style.paddingRight,
                    property: "padding-right",
                    el: l
                }), l.style.paddingRight = `${ha(l)+s}px`
            })
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = et(r).body;
        else {
            const s = r.parentElement,
                a = Pt(r);
            i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r
        }
        o.push({
            value: i.style.overflow,
            property: "overflow",
            el: i
        }, {
            value: i.style.overflowX,
            property: "overflow-x",
            el: i
        }, {
            value: i.style.overflowY,
            property: "overflow-y",
            el: i
        }), i.style.overflow = "hidden"
    }
    return () => {
        o.forEach(({
            value: i,
            el: s,
            property: a
        }) => {
            i ? s.style.setProperty(a, i) : s.style.removeProperty(a)
        })
    }
}

function vb(e) {
    const t = [];
    return [].forEach.call(e.children, o => {
        o.getAttribute("aria-hidden") === "true" && t.push(o)
    }), t
}
class xb {
    constructor() {
        this.modals = [], this.containers = []
    }
    add(t, o) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        r = this.modals.length, this.modals.push(t), t.modalRef && lr(t.modalRef, !1);
        const n = vb(o);
        ba(o, t.mount, t.modalRef, n, !0);
        const i = Kn(this.containers, s => s.container === o);
        return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
            modals: [t],
            container: o,
            restore: null,
            hiddenSiblings: n
        }), r)
    }
    mount(t, o) {
        const r = Kn(this.containers, i => i.modals.includes(t)),
            n = this.containers[r];
        n.restore || (n.restore = yb(n, o))
    }
    remove(t, o = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const n = Kn(this.containers, s => s.modals.includes(t)),
            i = this.containers[n];
        if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && lr(t.modalRef, o), ba(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(n, 1);
        else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && lr(s.modalRef, !1)
        }
        return r
    }
    isTopModal(t) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
    }
}
const Sb = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

function Cb(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}

function wb(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = r => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let o = t(`[name="${e.name}"]:checked`);
    return o || (o = t(`[name="${e.name}"]`)), o !== e
}

function Rb(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || wb(e))
}

function $b(e) {
    const t = [],
        o = [];
    return Array.from(e.querySelectorAll(Sb)).forEach((r, n) => {
        const i = Cb(r);
        i === -1 || !Rb(r) || (i === 0 ? t.push(r) : o.push({
            documentOrder: n,
            tabIndex: i,
            node: r
        }))
    }), o.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map(r => r.node).concat(t)
}

function kb() {
    return !0
}

function Pb(e) {
    const {
        children: t,
        disableAutoFocus: o = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: n = !1,
        getTabbable: i = $b,
        isEnabled: s = kb,
        open: a
    } = e, l = u.useRef(!1), c = u.useRef(null), d = u.useRef(null), p = u.useRef(null), b = u.useRef(null), h = u.useRef(!1), g = u.useRef(null), m = _e(yo(t), g), v = u.useRef(null);
    u.useEffect(() => {
        !a || !g.current || (h.current = !o)
    }, [o, a]), u.useEffect(() => {
        if (!a || !g.current) return;
        const S = et(g.current);
        return g.current.contains(S.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), h.current && g.current.focus()), () => {
            n || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null)
        }
    }, [a]), u.useEffect(() => {
        if (!a || !g.current) return;
        const S = et(g.current),
            y = k => {
                v.current = k, !(r || !s() || k.key !== "Tab") && S.activeElement === g.current && k.shiftKey && (l.current = !0, d.current && d.current.focus())
            },
            C = () => {
                var O, M;
                const k = g.current;
                if (k === null) return;
                if (!S.hasFocus() || !s() || l.current) {
                    l.current = !1;
                    return
                }
                if (k.contains(S.activeElement) || r && S.activeElement !== c.current && S.activeElement !== d.current) return;
                if (S.activeElement !== b.current) b.current = null;
                else if (b.current !== null) return;
                if (!h.current) return;
                let E = [];
                if ((S.activeElement === c.current || S.activeElement === d.current) && (E = i(g.current)), E.length > 0) {
                    const B = !!((O = v.current) != null && O.shiftKey && ((M = v.current) == null ? void 0 : M.key) === "Tab"),
                        f = E[0],
                        P = E[E.length - 1];
                    typeof f != "string" && typeof P != "string" && (B ? P.focus() : f.focus())
                } else k.focus()
            };
        S.addEventListener("focusin", C), S.addEventListener("keydown", y, !0);
        const R = setInterval(() => {
            S.activeElement && S.activeElement.tagName === "BODY" && C()
        }, 50);
        return () => {
            clearInterval(R), S.removeEventListener("focusin", C), S.removeEventListener("keydown", y, !0)
        }
    }, [o, r, n, s, a, i]);
    const x = S => {
            p.current === null && (p.current = S.relatedTarget), h.current = !0, b.current = S.target;
            const y = t.props.onFocus;
            y && y(S)
        },
        w = S => {
            p.current === null && (p.current = S.relatedTarget), h.current = !0
        };
    return $.jsxs(u.Fragment, {
        children: [$.jsx("div", {
            tabIndex: a ? 0 : -1,
            onFocus: w,
            ref: c,
            "data-testid": "sentinelStart"
        }), u.cloneElement(t, {
            ref: m,
            onFocus: x
        }), $.jsx("div", {
            tabIndex: a ? 0 : -1,
            onFocus: w,
            ref: d,
            "data-testid": "sentinelEnd"
        })]
    })
}

function Tb(e) {
    return typeof e == "function" ? e() : e
}

function Eb(e) {
    return e ? e.props.hasOwnProperty("in") : !1
}
const ya = () => {},
    Lr = new xb;

function Mb(e) {
    const {
        container: t,
        disableEscapeKeyDown: o = !1,
        disableScrollLock: r = !1,
        closeAfterTransition: n = !1,
        onTransitionEnter: i,
        onTransitionExited: s,
        children: a,
        onClose: l,
        open: c,
        rootRef: d
    } = e, p = u.useRef({}), b = u.useRef(null), h = u.useRef(null), g = _e(h, d), [m, v] = u.useState(!c), x = Eb(a);
    let w = !0;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
    const S = () => et(b.current),
        y = () => (p.current.modalRef = h.current, p.current.mount = b.current, p.current),
        C = () => {
            Lr.mount(y(), {
                disableScrollLock: r
            }), h.current && (h.current.scrollTop = 0)
        },
        R = it(() => {
            const I = Tb(t) || S().body;
            Lr.add(y(), I), h.current && C()
        }),
        k = () => Lr.isTopModal(y()),
        E = it(I => {
            b.current = I, I && (c && k() ? C() : h.current && lr(h.current, w))
        }),
        O = u.useCallback(() => {
            Lr.remove(y(), w)
        }, [w]);
    u.useEffect(() => () => {
        O()
    }, [O]), u.useEffect(() => {
        c ? R() : (!x || !n) && O()
    }, [c, O, x, n, R]);
    const M = I => A => {
            var z;
            (z = I.onKeyDown) == null || z.call(I, A), !(A.key !== "Escape" || A.which === 229 || !k()) && (o || (A.stopPropagation(), l && l(A, "escapeKeyDown")))
        },
        B = I => A => {
            var z;
            (z = I.onClick) == null || z.call(I, A), A.target === A.currentTarget && l && l(A, "backdropClick")
        };
    return {
        getRootProps: (I = {}) => {
            const A = Jr(e);
            delete A.onTransitionEnter, delete A.onTransitionExited;
            const z = { ...A,
                ...I
            };
            return {
                role: "presentation",
                ...z,
                onKeyDown: M(z),
                ref: g
            }
        },
        getBackdropProps: (I = {}) => {
            const A = I;
            return {
                "aria-hidden": !0,
                ...A,
                onClick: B(A),
                open: c
            }
        },
        getTransitionProps: () => {
            const I = () => {
                    v(!1), i && i()
                },
                A = () => {
                    v(!0), s && s(), n && O()
                };
            return {
                onEnter: _s(I, (a == null ? void 0 : a.props.onEnter) ? ? ya),
                onExited: _s(A, (a == null ? void 0 : a.props.onExited) ? ? ya)
            }
        },
        rootRef: g,
        portalRef: E,
        isTopModal: k,
        exited: m,
        hasTransition: x
    }
}

function Ib(e) {
    return Y("MuiModal", e)
}
K("MuiModal", ["root", "hidden", "backdrop"]);
const Ab = e => {
        const {
            open: t,
            exited: o,
            classes: r
        } = e;
        return Q({
            root: ["root", !t && o && "hidden"],
            backdrop: ["backdrop"]
        }, Ib, r)
    },
    Ob = j("div", {
        name: "MuiModal",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, !o.open && o.exited && t.hidden]
        }
    })(Z(({
        theme: e
    }) => ({
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        variants: [{
            props: ({
                ownerState: t
            }) => !t.open && t.exited,
            style: {
                visibility: "hidden"
            }
        }]
    }))),
    Bb = j(ic, {
        name: "MuiModal",
        slot: "Backdrop"
    })({
        zIndex: -1
    }),
    pc = u.forwardRef(function(t, o) {
        const r = oe({
                name: "MuiModal",
                props: t
            }),
            {
                BackdropComponent: n = Bb,
                BackdropProps: i,
                classes: s,
                className: a,
                closeAfterTransition: l = !1,
                children: c,
                container: d,
                component: p,
                components: b = {},
                componentsProps: h = {},
                disableAutoFocus: g = !1,
                disableEnforceFocus: m = !1,
                disableEscapeKeyDown: v = !1,
                disablePortal: x = !1,
                disableRestoreFocus: w = !1,
                disableScrollLock: S = !1,
                hideBackdrop: y = !1,
                keepMounted: C = !1,
                onClose: R,
                onTransitionEnter: k,
                onTransitionExited: E,
                open: O,
                slotProps: M = {},
                slots: B = {},
                theme: f,
                ...P
            } = r,
            T = { ...r,
                closeAfterTransition: l,
                disableAutoFocus: g,
                disableEnforceFocus: m,
                disableEscapeKeyDown: v,
                disablePortal: x,
                disableRestoreFocus: w,
                disableScrollLock: S,
                hideBackdrop: y,
                keepMounted: C
            },
            {
                getRootProps: I,
                getBackdropProps: A,
                getTransitionProps: z,
                portalRef: W,
                isTopModal: F,
                exited: U,
                hasTransition: ie
            } = Mb({ ...T,
                rootRef: o
            }),
            ee = { ...T,
                exited: U
            },
            J = Ab(ee),
            ue = {};
        if (c.props.tabIndex === void 0 && (ue.tabIndex = "-1"), ie) {
            const {
                onEnter: X,
                onExited: pe
            } = z();
            ue.onEnter = X, ue.onExited = pe
        }
        const _ = {
                slots: {
                    root: b.Root,
                    backdrop: b.Backdrop,
                    ...B
                },
                slotProps: { ...h,
                    ...M
                }
            },
            [D, V] = te("root", {
                ref: o,
                elementType: Ob,
                externalForwardedProps: { ..._,
                    ...P,
                    component: p
                },
                getSlotProps: I,
                ownerState: ee,
                className: H(a, J == null ? void 0 : J.root, !ee.open && ee.exited && (J == null ? void 0 : J.hidden))
            }),
            [se, me] = te("backdrop", {
                ref: i == null ? void 0 : i.ref,
                elementType: n,
                externalForwardedProps: _,
                shouldForwardComponentProp: !0,
                additionalProps: i,
                getSlotProps: X => A({ ...X,
                    onClick: pe => {
                        X != null && X.onClick && X.onClick(pe)
                    }
                }),
                className: H(i == null ? void 0 : i.className, J == null ? void 0 : J.backdrop),
                ownerState: ee
            });
        return !C && !O && (!ie || U) ? null : $.jsx(rc, {
            ref: W,
            container: d,
            disablePortal: x,
            children: $.jsxs(D, { ...V,
                children: [!y && n ? $.jsx(se, { ...me
                }) : null, $.jsx(Pb, {
                    disableEnforceFocus: m,
                    disableAutoFocus: g,
                    disableRestoreFocus: w,
                    isEnabled: F,
                    open: O,
                    children: u.cloneElement(c, ue)
                })]
            })
        })
    });

function Lb(e) {
    return Y("MuiDialog", e)
}
const qn = K("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]),
    fc = u.createContext({}),
    Nb = j(ic, {
        name: "MuiDialog",
        slot: "Backdrop",
        overrides: (e, t) => t.backdrop
    })({
        zIndex: -1
    }),
    jb = e => {
        const {
            classes: t,
            scroll: o,
            maxWidth: r,
            fullWidth: n,
            fullScreen: i
        } = e, s = {
            root: ["root"],
            container: ["container", `scroll${L(o)}`],
            paper: ["paper", `paperScroll${L(o)}`, `paperWidth${L(String(r))}`, n && "paperFullWidth", i && "paperFullScreen"]
        };
        return Q(s, Lb, t)
    },
    zb = j(pc, {
        name: "MuiDialog",
        slot: "Root"
    })({
        "@media print": {
            position: "absolute !important"
        }
    }),
    Fb = j("div", {
        name: "MuiDialog",
        slot: "Container",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.container, t[`scroll${L(o.scroll)}`]]
        }
    })({
        height: "100%",
        "@media print": {
            height: "auto"
        },
        outline: 0,
        variants: [{
            props: {
                scroll: "paper"
            },
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }, {
            props: {
                scroll: "body"
            },
            style: {
                overflowY: "auto",
                overflowX: "hidden",
                textAlign: "center",
                "&::after": {
                    content: '""',
                    display: "inline-block",
                    verticalAlign: "middle",
                    height: "100%",
                    width: "0"
                }
            }
        }]
    }),
    Db = j(bo, {
        name: "MuiDialog",
        slot: "Paper",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.paper, t[`scrollPaper${L(o.scroll)}`], t[`paperWidth${L(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen]
        }
    })(Z(({
        theme: e
    }) => ({
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": {
            overflowY: "visible",
            boxShadow: "none"
        },
        variants: [{
            props: {
                scroll: "paper"
            },
            style: {
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(100% - 64px)"
            }
        }, {
            props: {
                scroll: "body"
            },
            style: {
                display: "inline-block",
                verticalAlign: "middle",
                textAlign: "initial"
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.maxWidth,
            style: {
                maxWidth: "calc(100% - 64px)"
            }
        }, {
            props: {
                maxWidth: "xs"
            },
            style: {
                maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
                [`&.${qn.paperScrollBody}`]: {
                    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
                        maxWidth: "calc(100% - 64px)"
                    }
                }
            }
        }, ...Object.keys(e.breakpoints.values).filter(t => t !== "xs").map(t => ({
            props: {
                maxWidth: t
            },
            style: {
                maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
                [`&.${qn.paperScrollBody}`]: {
                    [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
                        maxWidth: "calc(100% - 64px)"
                    }
                }
            }
        })), {
            props: ({
                ownerState: t
            }) => t.fullWidth,
            style: {
                width: "calc(100% - 64px)"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.fullScreen,
            style: {
                margin: 0,
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                maxHeight: "none",
                borderRadius: 0,
                [`&.${qn.paperScrollBody}`]: {
                    margin: 0,
                    maxWidth: "100%"
                }
            }
        }]
    }))),
    Rx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiDialog"
            }),
            n = Gt(),
            i = {
                enter: n.transitions.duration.enteringScreen,
                exit: n.transitions.duration.leavingScreen
            },
            {
                "aria-describedby": s,
                "aria-labelledby": a,
                "aria-modal": l = !0,
                BackdropComponent: c,
                BackdropProps: d,
                children: p,
                className: b,
                disableEscapeKeyDown: h = !1,
                fullScreen: g = !1,
                fullWidth: m = !1,
                maxWidth: v = "sm",
                onClick: x,
                onClose: w,
                open: S,
                PaperComponent: y = bo,
                PaperProps: C = {},
                scroll: R = "paper",
                slots: k = {},
                slotProps: E = {},
                TransitionComponent: O = vi,
                transitionDuration: M = i,
                TransitionProps: B,
                ...f
            } = r,
            P = { ...r,
                disableEscapeKeyDown: h,
                fullScreen: g,
                fullWidth: m,
                maxWidth: v,
                scroll: R
            },
            T = jb(P),
            I = u.useRef(),
            A = de => {
                I.current = de.target === de.currentTarget
            },
            z = de => {
                x && x(de), I.current && (I.current = null, w && w(de, "backdropClick"))
            },
            W = ho(a),
            F = u.useMemo(() => ({
                titleId: W
            }), [W]),
            U = {
                transition: O,
                ...k
            },
            ie = {
                transition: B,
                paper: C,
                backdrop: d,
                ...E
            },
            ee = {
                slots: U,
                slotProps: ie
            },
            [J, ue] = te("root", {
                elementType: zb,
                shouldForwardComponentProp: !0,
                externalForwardedProps: ee,
                ownerState: P,
                className: H(T.root, b),
                ref: o
            }),
            [_, D] = te("backdrop", {
                elementType: Nb,
                shouldForwardComponentProp: !0,
                externalForwardedProps: ee,
                ownerState: P
            }),
            [V, se] = te("paper", {
                elementType: Db,
                shouldForwardComponentProp: !0,
                externalForwardedProps: ee,
                ownerState: P,
                className: H(T.paper, C.className)
            }),
            [me, X] = te("container", {
                elementType: Fb,
                externalForwardedProps: ee,
                ownerState: P,
                className: T.container
            }),
            [pe, ce] = te("transition", {
                elementType: vi,
                externalForwardedProps: ee,
                ownerState: P,
                additionalProps: {
                    appear: !0,
                    in: S,
                    timeout: M,
                    role: "presentation"
                }
            });
        return $.jsx(J, {
            closeAfterTransition: !0,
            slots: {
                backdrop: _
            },
            slotProps: {
                backdrop: {
                    transitionDuration: M,
                    as: c,
                    ...D
                }
            },
            disableEscapeKeyDown: h,
            onClose: w,
            open: S,
            onClick: z,
            ...ue,
            ...f,
            children: $.jsx(pe, { ...ce,
                children: $.jsx(me, {
                    onMouseDown: A,
                    ...X,
                    children: $.jsx(V, {
                        as: y,
                        elevation: 24,
                        role: "dialog",
                        "aria-describedby": s,
                        "aria-labelledby": W,
                        "aria-modal": l,
                        ...se,
                        children: $.jsx(fc.Provider, {
                            value: F,
                            children: p
                        })
                    })
                })
            })
        })
    });

function Wb(e) {
    return Y("MuiDialogActions", e)
}
K("MuiDialogActions", ["root", "spacing"]);
const Hb = e => {
        const {
            classes: t,
            disableSpacing: o
        } = e;
        return Q({
            root: ["root", !o && "spacing"]
        }, Wb, t)
    },
    Ub = j("div", {
        name: "MuiDialogActions",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, !o.disableSpacing && t.spacing]
        }
    })({
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
        variants: [{
            props: ({
                ownerState: e
            }) => !e.disableSpacing,
            style: {
                "& > :not(style) ~ :not(style)": {
                    marginLeft: 8
                }
            }
        }]
    }),
    $x = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiDialogActions"
            }),
            {
                className: n,
                disableSpacing: i = !1,
                ...s
            } = r,
            a = { ...r,
                disableSpacing: i
            },
            l = Hb(a);
        return $.jsx(Ub, {
            className: H(l.root, n),
            ownerState: a,
            ref: o,
            ...s
        })
    });

function _b(e) {
    return Y("MuiDialogContent", e)
}
K("MuiDialogContent", ["root", "dividers"]);

function Vb(e) {
    return Y("MuiDialogTitle", e)
}
const Gb = K("MuiDialogTitle", ["root"]),
    Kb = e => {
        const {
            classes: t,
            dividers: o
        } = e;
        return Q({
            root: ["root", o && "dividers"]
        }, _b, t)
    },
    qb = j("div", {
        name: "MuiDialogContent",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.dividers && t.dividers]
        }
    })(Z(({
        theme: e
    }) => ({
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
        variants: [{
            props: ({
                ownerState: t
            }) => t.dividers,
            style: {
                padding: "16px 24px",
                borderTop: `1px solid ${(e.vars||e).palette.divider}`,
                borderBottom: `1px solid ${(e.vars||e).palette.divider}`
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.dividers,
            style: {
                [`.${Gb.root} + &`]: {
                    paddingTop: 0
                }
            }
        }]
    }))),
    kx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiDialogContent"
            }),
            {
                className: n,
                dividers: i = !1,
                ...s
            } = r,
            a = { ...r,
                dividers: i
            },
            l = Kb(a);
        return $.jsx(qb, {
            className: H(l.root, n),
            ownerState: a,
            ref: o,
            ...s
        })
    }),
    Xb = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, Vb, t)
    },
    Yb = j(en, {
        name: "MuiDialogTitle",
        slot: "Root"
    })({
        padding: "16px 24px",
        flex: "0 0 auto"
    }),
    Px = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiDialogTitle"
            }),
            {
                className: n,
                id: i,
                ...s
            } = r,
            a = r,
            l = Xb(a),
            {
                titleId: c = i
            } = u.useContext(fc);
        return $.jsx(Yb, {
            component: "h2",
            className: H(l.root, n),
            ownerState: a,
            ref: o,
            variant: "h6",
            id: i ? ? c,
            ...s
        })
    });

function Qb(e) {
    return Y("MuiDivider", e)
}
const va = K("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]),
    Jb = e => {
        const {
            absolute: t,
            children: o,
            classes: r,
            flexItem: n,
            light: i,
            orientation: s,
            textAlign: a,
            variant: l
        } = e;
        return Q({
            root: ["root", t && "absolute", l, i && "light", s === "vertical" && "vertical", n && "flexItem", o && "withChildren", o && s === "vertical" && "withChildrenVertical", a === "right" && s !== "vertical" && "textAlignRight", a === "left" && s !== "vertical" && "textAlignLeft"],
            wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
        }, Qb, r)
    },
    Zb = j("div", {
        name: "MuiDivider",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.absolute && t.absolute, t[o.variant], o.light && t.light, o.orientation === "vertical" && t.vertical, o.flexItem && t.flexItem, o.children && t.withChildren, o.children && o.orientation === "vertical" && t.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && t.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && t.textAlignLeft]
        }
    })(Z(({
        theme: e
    }) => ({
        margin: 0,
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: (e.vars || e).palette.divider,
        borderBottomWidth: "thin",
        variants: [{
            props: {
                absolute: !0
            },
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
            }
        }, {
            props: {
                light: !0
            },
            style: {
                borderColor: e.alpha((e.vars || e).palette.divider, .08)
            }
        }, {
            props: {
                variant: "inset"
            },
            style: {
                marginLeft: 72
            }
        }, {
            props: {
                variant: "middle",
                orientation: "horizontal"
            },
            style: {
                marginLeft: e.spacing(2),
                marginRight: e.spacing(2)
            }
        }, {
            props: {
                variant: "middle",
                orientation: "vertical"
            },
            style: {
                marginTop: e.spacing(1),
                marginBottom: e.spacing(1)
            }
        }, {
            props: {
                orientation: "vertical"
            },
            style: {
                height: "100%",
                borderBottomWidth: 0,
                borderRightWidth: "thin"
            }
        }, {
            props: {
                flexItem: !0
            },
            style: {
                alignSelf: "stretch",
                height: "auto"
            }
        }, {
            props: ({
                ownerState: t
            }) => !!t.children,
            style: {
                display: "flex",
                textAlign: "center",
                border: 0,
                borderTopStyle: "solid",
                borderLeftStyle: "solid",
                "&::before, &::after": {
                    content: '""',
                    alignSelf: "center"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.children && t.orientation !== "vertical",
            style: {
                "&::before, &::after": {
                    width: "100%",
                    borderTop: `thin solid ${(e.vars||e).palette.divider}`,
                    borderTopStyle: "inherit"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.orientation === "vertical" && t.children,
            style: {
                flexDirection: "column",
                "&::before, &::after": {
                    height: "100%",
                    borderLeft: `thin solid ${(e.vars||e).palette.divider}`,
                    borderLeftStyle: "inherit"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.textAlign === "right" && t.orientation !== "vertical",
            style: {
                "&::before": {
                    width: "90%"
                },
                "&::after": {
                    width: "10%"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.textAlign === "left" && t.orientation !== "vertical",
            style: {
                "&::before": {
                    width: "10%"
                },
                "&::after": {
                    width: "90%"
                }
            }
        }]
    }))),
    ey = j("span", {
        name: "MuiDivider",
        slot: "Wrapper",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.wrapper, o.orientation === "vertical" && t.wrapperVertical]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
        whiteSpace: "nowrap",
        variants: [{
            props: {
                orientation: "vertical"
            },
            style: {
                paddingTop: `calc(${e.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${e.spacing(1)} * 1.2)`
            }
        }]
    }))),
    xa = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiDivider"
            }),
            {
                absolute: n = !1,
                children: i,
                className: s,
                orientation: a = "horizontal",
                component: l = i || a === "vertical" ? "div" : "hr",
                flexItem: c = !1,
                light: d = !1,
                role: p = l !== "hr" ? "separator" : void 0,
                textAlign: b = "center",
                variant: h = "fullWidth",
                ...g
            } = r,
            m = { ...r,
                absolute: n,
                component: l,
                flexItem: c,
                light: d,
                orientation: a,
                role: p,
                textAlign: b,
                variant: h
            },
            v = Jb(m);
        return $.jsx(Zb, {
            as: l,
            className: H(v.root, s),
            role: p,
            ref: o,
            ownerState: m,
            "aria-orientation": p === "separator" && (l !== "hr" || a === "vertical") ? a : void 0,
            ...g,
            children: i ? $.jsx(ey, {
                className: v.wrapper,
                ownerState: m,
                children: i
            }) : null
        })
    });
xa && (xa.muiSkipListHighlight = !0);
const ty = e => {
        const {
            classes: t,
            disableUnderline: o,
            startAdornment: r,
            endAdornment: n,
            size: i,
            hiddenLabel: s,
            multiline: a
        } = e, l = {
            root: ["root", !o && "underline", r && "adornedStart", n && "adornedEnd", i === "small" && `size${L(i)}`, s && "hiddenLabel", a && "multiline"],
            input: ["input"]
        }, c = Q(l, mh, t);
        return { ...t,
            ...c
        }
    },
    oy = j(kn, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [...Rn(e, t), !o.disableUnderline && t.underline]
        }
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light",
            o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
            r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
            n = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
            i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return {
            position: "relative",
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
            borderTopRightRadius: (e.vars || e).shape.borderRadius,
            transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
            }),
            "&:hover": {
                backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : n,
                "@media (hover: none)": {
                    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
                }
            },
            [`&.${io.focused}`]: {
                backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
            },
            [`&.${io.disabled}`]: {
                backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
            },
            variants: [{
                props: ({
                    ownerState: s
                }) => !s.disableUnderline,
                style: {
                    "&::after": {
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut
                        }),
                        pointerEvents: "none"
                    },
                    [`&.${io.focused}:after`]: {
                        transform: "scaleX(1) translateX(0)"
                    },
                    [`&.${io.error}`]: {
                        "&::before, &::after": {
                            borderBottomColor: (e.vars || e).palette.error.main
                        }
                    },
                    "&::before": {
                        borderBottom: `1px solid ${e.vars?e.alpha(e.vars.palette.common.onBackground,e.vars.opacity.inputUnderline):o}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create("border-bottom-color", {
                            duration: e.transitions.duration.shorter
                        }),
                        pointerEvents: "none"
                    },
                    [`&:hover:not(.${io.disabled}, .${io.error}):before`]: {
                        borderBottom: `1px solid ${(e.vars||e).palette.text.primary}`
                    },
                    [`&.${io.disabled}:before`]: {
                        borderBottomStyle: "dotted"
                    }
                }
            }, ...Object.entries(e.palette).filter(Le()).map(([s]) => {
                var a;
                return {
                    props: {
                        disableUnderline: !1,
                        color: s
                    },
                    style: {
                        "&::after": {
                            borderBottom: `2px solid ${(a=(e.vars||e).palette[s])==null?void 0:a.main}`
                        }
                    }
                }
            }), {
                props: ({
                    ownerState: s
                }) => s.startAdornment,
                style: {
                    paddingLeft: 12
                }
            }, {
                props: ({
                    ownerState: s
                }) => s.endAdornment,
                style: {
                    paddingRight: 12
                }
            }, {
                props: ({
                    ownerState: s
                }) => s.multiline,
                style: {
                    padding: "25px 12px 8px"
                }
            }, {
                props: ({
                    ownerState: s,
                    size: a
                }) => s.multiline && a === "small",
                style: {
                    paddingTop: 21,
                    paddingBottom: 4
                }
            }, {
                props: ({
                    ownerState: s
                }) => s.multiline && s.hiddenLabel,
                style: {
                    paddingTop: 16,
                    paddingBottom: 17
                }
            }, {
                props: ({
                    ownerState: s
                }) => s.multiline && s.hiddenLabel && s.size === "small",
                style: {
                    paddingTop: 8,
                    paddingBottom: 9
                }
            }]
        }
    })),
    ry = j(Pn, {
        name: "MuiFilledInput",
        slot: "Input",
        overridesResolver: $n
    })(Z(({
        theme: e
    }) => ({
        paddingTop: 25,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12,
        ...!e.vars && {
            "&:-webkit-autofill": {
                WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
                WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
                caretColor: e.palette.mode === "light" ? null : "#fff",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
            }
        },
        ...e.vars && {
            "&:-webkit-autofill": {
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
            },
            [e.getColorSchemeSelector("dark")]: {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #266798 inset",
                    WebkitTextFillColor: "#fff",
                    caretColor: "#fff"
                }
            }
        },
        variants: [{
            props: {
                size: "small"
            },
            style: {
                paddingTop: 21,
                paddingBottom: 4
            }
        }, {
            props: ({
                ownerState: t
            }) => t.hiddenLabel,
            style: {
                paddingTop: 16,
                paddingBottom: 17
            }
        }, {
            props: ({
                ownerState: t
            }) => t.startAdornment,
            style: {
                paddingLeft: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.endAdornment,
            style: {
                paddingRight: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.hiddenLabel && t.size === "small",
            style: {
                paddingTop: 8,
                paddingBottom: 9
            }
        }, {
            props: ({
                ownerState: t
            }) => t.multiline,
            style: {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }]
    }))),
    ts = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiFilledInput"
            }),
            {
                disableUnderline: n = !1,
                components: i = {},
                componentsProps: s,
                fullWidth: a = !1,
                hiddenLabel: l,
                inputComponent: c = "input",
                multiline: d = !1,
                slotProps: p,
                slots: b = {},
                type: h = "text",
                ...g
            } = r,
            m = { ...r,
                disableUnderline: n,
                fullWidth: a,
                inputComponent: c,
                multiline: d,
                type: h
            },
            v = ty(r),
            x = {
                root: {
                    ownerState: m
                },
                input: {
                    ownerState: m
                }
            },
            w = p ? ? s ? Ye(x, p ? ? s) : x,
            S = b.root ? ? i.Root ? ? oy,
            y = b.input ? ? i.Input ? ? ry;
        return $.jsx(es, {
            slots: {
                root: S,
                input: y
            },
            slotProps: w,
            fullWidth: a,
            inputComponent: c,
            multiline: d,
            ref: o,
            type: h,
            ...g,
            classes: v
        })
    });
ts.muiName = "Input";

function ny(e) {
    return Y("MuiFormControl", e)
}
K("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const iy = e => {
        const {
            classes: t,
            margin: o,
            fullWidth: r
        } = e, n = {
            root: ["root", o !== "none" && `margin${L(o)}`, r && "fullWidth"]
        };
        return Q(n, ny, t)
    },
    sy = j("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[`margin${L(o.margin)}`], o.fullWidth && t.fullWidth]
        }
    })({
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
        variants: [{
            props: {
                margin: "normal"
            },
            style: {
                marginTop: 16,
                marginBottom: 8
            }
        }, {
            props: {
                margin: "dense"
            },
            style: {
                marginTop: 8,
                marginBottom: 4
            }
        }, {
            props: {
                fullWidth: !0
            },
            style: {
                width: "100%"
            }
        }]
    }),
    ay = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiFormControl"
            }),
            {
                children: n,
                className: i,
                color: s = "primary",
                component: a = "div",
                disabled: l = !1,
                error: c = !1,
                focused: d,
                fullWidth: p = !1,
                hiddenLabel: b = !1,
                margin: h = "none",
                required: g = !1,
                size: m = "medium",
                variant: v = "outlined",
                ...x
            } = r,
            w = { ...r,
                color: s,
                component: a,
                disabled: l,
                error: c,
                fullWidth: p,
                hiddenLabel: b,
                margin: h,
                required: g,
                size: m,
                variant: v
            },
            S = iy(w),
            [y, C] = u.useState(() => {
                let I = !1;
                return n && u.Children.forEach(n, A => {
                    if (!_r(A, ["Input", "Select"])) return;
                    const z = _r(A, ["Select"]) ? A.props.input : A;
                    z && ch(z.props) && (I = !0)
                }), I
            }),
            [R, k] = u.useState(() => {
                let I = !1;
                return n && u.Children.forEach(n, A => {
                    _r(A, ["Input", "Select"]) && (on(A.props, !0) || on(A.props.inputProps, !0)) && (I = !0)
                }), I
            }),
            [E, O] = u.useState(!1);
        l && E && O(!1);
        const M = d !== void 0 && !l ? d : E;
        let B;
        u.useRef(!1);
        const f = u.useCallback(() => {
                k(!0)
            }, []),
            P = u.useCallback(() => {
                k(!1)
            }, []),
            T = u.useMemo(() => ({
                adornedStart: y,
                setAdornedStart: C,
                color: s,
                disabled: l,
                error: c,
                filled: R,
                focused: M,
                fullWidth: p,
                hiddenLabel: b,
                size: m,
                onBlur: () => {
                    O(!1)
                },
                onFocus: () => {
                    O(!0)
                },
                onEmpty: P,
                onFilled: f,
                registerEffect: B,
                required: g,
                variant: v
            }), [y, s, l, c, R, M, p, b, B, P, f, g, m, v]);
        return $.jsx(Zi.Provider, {
            value: T,
            children: $.jsx(sy, {
                as: a,
                ownerState: w,
                className: H(S.root, i),
                ref: o,
                ...x,
                children: n
            })
        })
    });

function ly(e) {
    return Y("MuiFormControlLabel", e)
}
const nr = K("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]),
    cy = e => {
        const {
            classes: t,
            disabled: o,
            labelPlacement: r,
            error: n,
            required: i
        } = e, s = {
            root: ["root", o && "disabled", `labelPlacement${L(r)}`, n && "error", i && "required"],
            label: ["label", o && "disabled"],
            asterisk: ["asterisk", n && "error"]
        };
        return Q(s, ly, t)
    },
    dy = j("label", {
        name: "MuiFormControlLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [{
                [`& .${nr.label}`]: t.label
            }, t.root, t[`labelPlacement${L(o.labelPlacement)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${nr.disabled}`]: {
            cursor: "default"
        },
        [`& .${nr.label}`]: {
            [`&.${nr.disabled}`]: {
                color: (e.vars || e).palette.text.disabled
            }
        },
        variants: [{
            props: {
                labelPlacement: "start"
            },
            style: {
                flexDirection: "row-reverse",
                marginRight: -11
            }
        }, {
            props: {
                labelPlacement: "top"
            },
            style: {
                flexDirection: "column-reverse"
            }
        }, {
            props: {
                labelPlacement: "bottom"
            },
            style: {
                flexDirection: "column"
            }
        }, {
            props: ({
                labelPlacement: t
            }) => t === "start" || t === "top" || t === "bottom",
            style: {
                marginLeft: 16
            }
        }]
    }))),
    uy = j("span", {
        name: "MuiFormControlLabel",
        slot: "Asterisk"
    })(Z(({
        theme: e
    }) => ({
        [`&.${nr.error}`]: {
            color: (e.vars || e).palette.error.main
        }
    }))),
    Tx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiFormControlLabel"
            }),
            {
                checked: n,
                className: i,
                componentsProps: s = {},
                control: a,
                disabled: l,
                disableTypography: c,
                inputRef: d,
                label: p,
                labelPlacement: b = "end",
                name: h,
                onChange: g,
                required: m,
                slots: v = {},
                slotProps: x = {},
                value: w,
                ...S
            } = r,
            y = oo(),
            C = l ? ? a.props.disabled ? ? (y == null ? void 0 : y.disabled),
            R = m ? ? a.props.required,
            k = {
                disabled: C,
                required: R
            };
        ["checked", "name", "onChange", "value", "inputRef"].forEach(I => {
            typeof a.props[I] > "u" && typeof r[I] < "u" && (k[I] = r[I])
        });
        const E = vo({
                props: r,
                muiFormControl: y,
                states: ["error"]
            }),
            O = { ...r,
                disabled: C,
                labelPlacement: b,
                required: R,
                error: E.error
            },
            M = cy(O),
            B = {
                slots: v,
                slotProps: { ...s,
                    ...x
                }
            },
            [f, P] = te("typography", {
                elementType: en,
                externalForwardedProps: B,
                ownerState: O
            });
        let T = p;
        return T != null && T.type !== en && !c && (T = $.jsx(f, {
            component: "span",
            ...P,
            className: H(M.label, P == null ? void 0 : P.className),
            children: T
        })), $.jsxs(dy, {
            className: H(M.root, i),
            ownerState: O,
            ref: o,
            ...S,
            children: [u.cloneElement(a, k), R ? $.jsxs("div", {
                children: [T, $.jsxs(uy, {
                    ownerState: O,
                    "aria-hidden": !0,
                    className: M.asterisk,
                    children: [" ", "*"]
                })]
            }) : T]
        })
    });

function py(e) {
    return Y("MuiFormHelperText", e)
}
const Sa = K("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ca;
const fy = e => {
        const {
            classes: t,
            contained: o,
            size: r,
            disabled: n,
            error: i,
            filled: s,
            focused: a,
            required: l
        } = e, c = {
            root: ["root", n && "disabled", i && "error", r && `size${L(r)}`, o && "contained", a && "focused", s && "filled", l && "required"]
        };
        return Q(c, py, t)
    },
    my = j("p", {
        name: "MuiFormHelperText",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.size && t[`size${L(o.size)}`], o.contained && t.contained, o.filled && t.filled]
        }
    })(Z(({
        theme: e
    }) => ({
        color: (e.vars || e).palette.text.secondary,
        ...e.typography.caption,
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Sa.disabled}`]: {
            color: (e.vars || e).palette.text.disabled
        },
        [`&.${Sa.error}`]: {
            color: (e.vars || e).palette.error.main
        },
        variants: [{
            props: {
                size: "small"
            },
            style: {
                marginTop: 4
            }
        }, {
            props: ({
                ownerState: t
            }) => t.contained,
            style: {
                marginLeft: 14,
                marginRight: 14
            }
        }]
    }))),
    gy = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiFormHelperText"
            }),
            {
                children: n,
                className: i,
                component: s = "p",
                disabled: a,
                error: l,
                filled: c,
                focused: d,
                margin: p,
                required: b,
                variant: h,
                ...g
            } = r,
            m = oo(),
            v = vo({
                props: r,
                muiFormControl: m,
                states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
            }),
            x = { ...r,
                component: s,
                contained: v.variant === "filled" || v.variant === "outlined",
                variant: v.variant,
                size: v.size,
                disabled: v.disabled,
                error: v.error,
                filled: v.filled,
                focused: v.focused,
                required: v.required
            };
        delete x.ownerState;
        const w = fy(x);
        return $.jsx(my, {
            as: s,
            className: H(w.root, i),
            ref: o,
            ...g,
            ownerState: x,
            children: n === " " ? Ca || (Ca = $.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​"
            })) : n
        })
    });

function hy(e) {
    return Y("MuiFormLabel", e)
}
const cr = K("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]),
    by = e => {
        const {
            classes: t,
            color: o,
            focused: r,
            disabled: n,
            error: i,
            filled: s,
            required: a
        } = e, l = {
            root: ["root", `color${L(o)}`, n && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
            asterisk: ["asterisk", i && "error"]
        };
        return Q(l, hy, t)
    },
    yy = j("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled]
        }
    })(Z(({
        theme: e
    }) => ({
        color: (e.vars || e).palette.text.secondary,
        ...e.typography.body1,
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        variants: [...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                [`&.${cr.focused}`]: {
                    color: (e.vars || e).palette[t].main
                }
            }
        })), {
            props: {},
            style: {
                [`&.${cr.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled
                },
                [`&.${cr.error}`]: {
                    color: (e.vars || e).palette.error.main
                }
            }
        }]
    }))),
    vy = j("span", {
        name: "MuiFormLabel",
        slot: "Asterisk"
    })(Z(({
        theme: e
    }) => ({
        [`&.${cr.error}`]: {
            color: (e.vars || e).palette.error.main
        }
    }))),
    xy = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiFormLabel"
            }),
            {
                children: n,
                className: i,
                color: s,
                component: a = "label",
                disabled: l,
                error: c,
                filled: d,
                focused: p,
                required: b,
                ...h
            } = r,
            g = oo(),
            m = vo({
                props: r,
                muiFormControl: g,
                states: ["color", "required", "focused", "disabled", "error", "filled"]
            }),
            v = { ...r,
                color: m.color || "primary",
                component: a,
                disabled: m.disabled,
                error: m.error,
                filled: m.filled,
                focused: m.focused,
                required: m.required
            },
            x = by(v);
        return $.jsxs(yy, {
            as: a,
            ownerState: v,
            className: H(x.root, i),
            ref: o,
            ...h,
            children: [n, m.required && $.jsxs(vy, {
                ownerState: v,
                "aria-hidden": !0,
                className: x.asterisk,
                children: [" ", "*"]
            })]
        })
    });

function Si(e) {
    return `scale(${e}, ${e**2})`
}
const Sy = {
        entering: {
            opacity: 1,
            transform: Si(1)
        },
        entered: {
            opacity: 1,
            transform: "none"
        }
    },
    Xn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    xr = u.forwardRef(function(t, o) {
        const {
            addEndListener: r,
            appear: n = !0,
            children: i,
            easing: s,
            in: a,
            onEnter: l,
            onEntered: c,
            onEntering: d,
            onExit: p,
            onExited: b,
            onExiting: h,
            style: g,
            timeout: m = "auto",
            TransitionComponent: v = Tt,
            ...x
        } = t, w = Yt(), S = u.useRef(), y = Gt(), C = u.useRef(null), R = _e(C, yo(i), o), k = I => A => {
            if (I) {
                const z = C.current;
                A === void 0 ? I(z) : I(z, A)
            }
        }, E = k(d), O = k((I, A) => {
            Wl(I);
            const {
                duration: z,
                delay: W,
                easing: F
            } = Oo({
                style: g,
                timeout: m,
                easing: s
            }, {
                mode: "enter"
            });
            let U;
            m === "auto" ? (U = y.transitions.getAutoHeightDuration(I.clientHeight), S.current = U) : U = z, I.style.transition = [y.transitions.create("opacity", {
                duration: U,
                delay: W
            }), y.transitions.create("transform", {
                duration: Xn ? U : U * .666,
                delay: W,
                easing: F
            })].join(","), l && l(I, A)
        }), M = k(c), B = k(h), f = k(I => {
            const {
                duration: A,
                delay: z,
                easing: W
            } = Oo({
                style: g,
                timeout: m,
                easing: s
            }, {
                mode: "exit"
            });
            let F;
            m === "auto" ? (F = y.transitions.getAutoHeightDuration(I.clientHeight), S.current = F) : F = A, I.style.transition = [y.transitions.create("opacity", {
                duration: F,
                delay: z
            }), y.transitions.create("transform", {
                duration: Xn ? F : F * .666,
                delay: Xn ? z : z || F * .333,
                easing: W
            })].join(","), I.style.opacity = 0, I.style.transform = Si(.75), p && p(I)
        }), P = k(b), T = I => {
            m === "auto" && w.start(S.current || 0, I), r && r(C.current, I)
        };
        return $.jsx(v, {
            appear: n,
            in: a,
            nodeRef: C,
            onEnter: O,
            onEntered: M,
            onEntering: E,
            onExit: f,
            onExited: P,
            onExiting: B,
            addEndListener: T,
            timeout: m === "auto" ? null : m,
            ...x,
            children: (I, {
                ownerState: A,
                ...z
            }) => u.cloneElement(i, {
                style: {
                    opacity: 0,
                    transform: Si(.75),
                    visibility: I === "exited" && !a ? "hidden" : void 0,
                    ...Sy[I],
                    ...g,
                    ...i.props.style
                },
                ref: R,
                ...z
            })
        })
    });
xr && (xr.muiSupportAuto = !0);
const Cy = e => {
        const {
            classes: t,
            disableUnderline: o
        } = e, n = Q({
            root: ["root", !o && "underline"],
            input: ["input"]
        }, ph, t);
        return { ...t,
            ...n
        }
    },
    wy = j(kn, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [...Rn(e, t), !o.disableUnderline && t.underline]
        }
    })(Z(({
        theme: e
    }) => {
        let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
        return e.vars && (o = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
            position: "relative",
            variants: [{
                props: ({
                    ownerState: r
                }) => r.formControl,
                style: {
                    "label + &": {
                        marginTop: 16
                    }
                }
            }, {
                props: ({
                    ownerState: r
                }) => !r.disableUnderline,
                style: {
                    "&::after": {
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut
                        }),
                        pointerEvents: "none"
                    },
                    [`&.${Yo.focused}:after`]: {
                        transform: "scaleX(1) translateX(0)"
                    },
                    [`&.${Yo.error}`]: {
                        "&::before, &::after": {
                            borderBottomColor: (e.vars || e).palette.error.main
                        }
                    },
                    "&::before": {
                        borderBottom: `1px solid ${o}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create("border-bottom-color", {
                            duration: e.transitions.duration.shorter
                        }),
                        pointerEvents: "none"
                    },
                    [`&:hover:not(.${Yo.disabled}, .${Yo.error}):before`]: {
                        borderBottom: `2px solid ${(e.vars||e).palette.text.primary}`,
                        "@media (hover: none)": {
                            borderBottom: `1px solid ${o}`
                        }
                    },
                    [`&.${Yo.disabled}:before`]: {
                        borderBottomStyle: "dotted"
                    }
                }
            }, ...Object.entries(e.palette).filter(Le()).map(([r]) => ({
                props: {
                    color: r,
                    disableUnderline: !1
                },
                style: {
                    "&::after": {
                        borderBottom: `2px solid ${(e.vars||e).palette[r].main}`
                    }
                }
            }))]
        }
    })),
    Ry = j(Pn, {
        name: "MuiInput",
        slot: "Input",
        overridesResolver: $n
    })({}),
    os = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiInput"
            }),
            {
                disableUnderline: n = !1,
                components: i = {},
                componentsProps: s,
                fullWidth: a = !1,
                inputComponent: l = "input",
                multiline: c = !1,
                slotProps: d,
                slots: p = {},
                type: b = "text",
                ...h
            } = r,
            g = Cy(r),
            v = {
                root: {
                    ownerState: {
                        disableUnderline: n
                    }
                }
            },
            x = d ? ? s ? Ye(d ? ? s, v) : v,
            w = p.root ? ? i.Root ? ? wy,
            S = p.input ? ? i.Input ? ? Ry;
        return $.jsx(es, {
            slots: {
                root: w,
                input: S
            },
            slotProps: x,
            fullWidth: a,
            inputComponent: l,
            multiline: c,
            ref: o,
            type: b,
            ...h,
            classes: g
        })
    });
os.muiName = "Input";

function $y(e) {
    return Y("MuiInputLabel", e)
}
K("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const ky = e => {
        const {
            classes: t,
            formControl: o,
            size: r,
            shrink: n,
            disableAnimation: i,
            variant: s,
            required: a
        } = e, l = {
            root: ["root", o && "formControl", !i && "animated", n && "shrink", r && r !== "medium" && `size${L(r)}`, s],
            asterisk: [a && "asterisk"]
        }, c = Q(l, $y, t);
        return { ...t,
            ...c
        }
    },
    Py = j(xy, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiInputLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [{
                [`& .${cr.asterisk}`]: t.asterisk
            }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
        variants: [{
            props: ({
                ownerState: t
            }) => t.formControl,
            style: {
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(0, 20px) scale(1)"
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                transform: "translate(0, 17px) scale(1)"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.shrink,
            style: {
                transform: "translate(0, -1.5px) scale(0.75)",
                transformOrigin: "top left",
                maxWidth: "133%"
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.disableAnimation,
            style: {
                transition: e.transitions.create(["color", "transform", "max-width"], {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut
                })
            }
        }, {
            props: {
                variant: "filled"
            },
            style: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(12px, 16px) scale(1)",
                maxWidth: "calc(100% - 24px)"
            }
        }, {
            props: {
                variant: "filled",
                size: "small"
            },
            style: {
                transform: "translate(12px, 13px) scale(1)"
            }
        }, {
            props: ({
                variant: t,
                ownerState: o
            }) => t === "filled" && o.shrink,
            style: {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)"
            }
        }, {
            props: ({
                variant: t,
                ownerState: o,
                size: r
            }) => t === "filled" && o.shrink && r === "small",
            style: {
                transform: "translate(12px, 4px) scale(0.75)"
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(14px, 16px) scale(1)",
                maxWidth: "calc(100% - 24px)"
            }
        }, {
            props: {
                variant: "outlined",
                size: "small"
            },
            style: {
                transform: "translate(14px, 9px) scale(1)"
            }
        }, {
            props: ({
                variant: t,
                ownerState: o
            }) => t === "outlined" && o.shrink,
            style: {
                userSelect: "none",
                pointerEvents: "auto",
                maxWidth: "calc(133% - 32px)",
                transform: "translate(14px, -9px) scale(0.75)"
            }
        }]
    }))),
    Ty = u.forwardRef(function(t, o) {
        const r = oe({
                name: "MuiInputLabel",
                props: t
            }),
            {
                disableAnimation: n = !1,
                margin: i,
                shrink: s,
                variant: a,
                className: l,
                ...c
            } = r,
            d = oo();
        let p = s;
        typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
        const b = vo({
                props: r,
                muiFormControl: d,
                states: ["size", "variant", "required", "focused"]
            }),
            h = { ...r,
                disableAnimation: n,
                formControl: d,
                shrink: p,
                size: b.size,
                variant: b.variant,
                required: b.required,
                focused: b.focused
            },
            g = ky(h);
        return $.jsx(Py, {
            "data-shrink": p,
            ref: o,
            className: H(g.root, l),
            ...c,
            ownerState: h,
            classes: g
        })
    });

function Ey(e) {
    return Y("MuiLinearProgress", e)
}
K("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "bar1", "bar2", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Ci = 4,
    wi = eo `
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,
    My = typeof wi != "string" ? Ho `
        animation: ${wi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null,
    Ri = eo `
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,
    Iy = typeof Ri != "string" ? Ho `
        animation: ${Ri} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null,
    $i = eo `
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,
    Ay = typeof $i != "string" ? Ho `
        animation: ${$i} 3s infinite linear;
      ` : null,
    Oy = e => {
        const {
            classes: t,
            variant: o,
            color: r
        } = e, n = {
            root: ["root", `color${L(r)}`, o],
            dashed: ["dashed", `dashedColor${L(r)}`],
            bar1: ["bar", "bar1", `barColor${L(r)}`, (o === "indeterminate" || o === "query") && "bar1Indeterminate", o === "determinate" && "bar1Determinate", o === "buffer" && "bar1Buffer"],
            bar2: ["bar", "bar2", o !== "buffer" && `barColor${L(r)}`, o === "buffer" && `color${L(r)}`, (o === "indeterminate" || o === "query") && "bar2Indeterminate", o === "buffer" && "bar2Buffer"]
        };
        return Q(n, Ey, t)
    },
    rs = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, .62) : e.darken(e.palette[t].main, .5),
    By = j("span", {
        name: "MuiLinearProgress",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[`color${L(o.color)}`], t[o.variant]]
        }
    })(Z(({
        theme: e
    }) => ({
        position: "relative",
        overflow: "hidden",
        display: "block",
        height: 4,
        zIndex: 0,
        "@media print": {
            colorAdjust: "exact"
        },
        variants: [...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                backgroundColor: rs(e, t)
            }
        })), {
            props: ({
                ownerState: t
            }) => t.color === "inherit" && t.variant !== "buffer",
            style: {
                "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "currentColor",
                    opacity: .3
                }
            }
        }, {
            props: {
                variant: "buffer"
            },
            style: {
                backgroundColor: "transparent"
            }
        }, {
            props: {
                variant: "query"
            },
            style: {
                transform: "rotate(180deg)"
            }
        }]
    }))),
    Ly = j("span", {
        name: "MuiLinearProgress",
        slot: "Dashed",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.dashed, t[`dashedColor${L(o.color)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        position: "absolute",
        marginTop: 0,
        height: "100%",
        width: "100%",
        backgroundSize: "10px 10px",
        backgroundPosition: "0 -23px",
        variants: [{
            props: {
                color: "inherit"
            },
            style: {
                opacity: .3,
                backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => {
            const o = rs(e, t);
            return {
                props: {
                    color: t
                },
                style: {
                    backgroundImage: `radial-gradient(${o} 0%, ${o} 16%, transparent 42%)`
                }
            }
        })]
    })), Ay || {
        animation: `${$i} 3s infinite linear`
    }),
    Ny = j("span", {
        name: "MuiLinearProgress",
        slot: "Bar1",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.bar, t.bar1, t[`barColor${L(o.color)}`], (o.variant === "indeterminate" || o.variant === "query") && t.bar1Indeterminate, o.variant === "determinate" && t.bar1Determinate, o.variant === "buffer" && t.bar1Buffer]
        }
    })(Z(({
        theme: e
    }) => ({
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        top: 0,
        transition: "transform 0.2s linear",
        transformOrigin: "left",
        variants: [{
            props: {
                color: "inherit"
            },
            style: {
                backgroundColor: "currentColor"
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                backgroundColor: (e.vars || e).palette[t].main
            }
        })), {
            props: {
                variant: "determinate"
            },
            style: {
                transition: `transform .${Ci}s linear`
            }
        }, {
            props: {
                variant: "buffer"
            },
            style: {
                zIndex: 1,
                transition: `transform .${Ci}s linear`
            }
        }, {
            props: ({
                ownerState: t
            }) => t.variant === "indeterminate" || t.variant === "query",
            style: {
                width: "auto"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.variant === "indeterminate" || t.variant === "query",
            style: My || {
                animation: `${wi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
            }
        }]
    }))),
    jy = j("span", {
        name: "MuiLinearProgress",
        slot: "Bar2",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.bar, t.bar2, t[`barColor${L(o.color)}`], (o.variant === "indeterminate" || o.variant === "query") && t.bar2Indeterminate, o.variant === "buffer" && t.bar2Buffer]
        }
    })(Z(({
        theme: e
    }) => ({
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        top: 0,
        transition: "transform 0.2s linear",
        transformOrigin: "left",
        variants: [...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
            }
        })), {
            props: ({
                ownerState: t
            }) => t.variant !== "buffer" && t.color !== "inherit",
            style: {
                backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.variant !== "buffer" && t.color === "inherit",
            style: {
                backgroundColor: "currentColor"
            }
        }, {
            props: {
                color: "inherit"
            },
            style: {
                opacity: .3
            }
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                color: t,
                variant: "buffer"
            },
            style: {
                backgroundColor: rs(e, t),
                transition: `transform .${Ci}s linear`
            }
        })), {
            props: ({
                ownerState: t
            }) => t.variant === "indeterminate" || t.variant === "query",
            style: {
                width: "auto"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.variant === "indeterminate" || t.variant === "query",
            style: Iy || {
                animation: `${Ri} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
            }
        }]
    }))),
    Ex = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiLinearProgress"
            }),
            {
                className: n,
                color: i = "primary",
                value: s,
                valueBuffer: a,
                variant: l = "indeterminate",
                ...c
            } = r,
            d = { ...r,
                color: i,
                variant: l
            },
            p = Oy(d),
            b = Uo(),
            h = {},
            g = {
                bar1: {},
                bar2: {}
            };
        if ((l === "determinate" || l === "buffer") && s !== void 0) {
            h["aria-valuenow"] = Math.round(s), h["aria-valuemin"] = 0, h["aria-valuemax"] = 100;
            let m = s - 100;
            b && (m = -m), g.bar1.transform = `translateX(${m}%)`
        }
        if (l === "buffer" && a !== void 0) {
            let m = (a || 0) - 100;
            b && (m = -m), g.bar2.transform = `translateX(${m}%)`
        }
        return $.jsxs(By, {
            className: H(p.root, n),
            ownerState: d,
            role: "progressbar",
            ...h,
            ref: o,
            ...c,
            children: [l === "buffer" ? $.jsx(Ly, {
                className: p.dashed,
                ownerState: d
            }) : null, $.jsx(Ny, {
                className: p.bar1,
                ownerState: d,
                style: g.bar1
            }), l === "determinate" ? null : $.jsx(jy, {
                className: p.bar2,
                ownerState: d,
                style: g.bar2
            })]
        })
    });

function zy(e) {
    return Y("MuiLink", e)
}
const Fy = K("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]),
    Dy = ({
        theme: e,
        ownerState: t
    }) => {
        const o = t.color;
        if ("colorSpace" in e && e.colorSpace) {
            const i = Lt(e, `palette.${o}.main`) || Lt(e, `palette.${o}`) || t.color;
            return e.alpha(i, .4)
        }
        const r = Lt(e, `palette.${o}.main`, !1) || Lt(e, `palette.${o}`, !1) || t.color,
            n = Lt(e, `palette.${o}.mainChannel`) || Lt(e, `palette.${o}Channel`);
        return "vars" in e && n ? `rgba(${n} / 0.4)` : gr(r, .4)
    },
    wa = {
        primary: !0,
        secondary: !0,
        error: !0,
        info: !0,
        success: !0,
        warning: !0,
        textPrimary: !0,
        textSecondary: !0,
        textDisabled: !0
    },
    Wy = e => {
        const {
            classes: t,
            component: o,
            focusVisible: r,
            underline: n
        } = e, i = {
            root: ["root", `underline${L(n)}`, o === "button" && "button", r && "focusVisible"]
        };
        return Q(i, zy, t)
    },
    Hy = j(en, {
        name: "MuiLink",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[`underline${L(o.underline)}`], o.component === "button" && t.button]
        }
    })(Z(({
        theme: e
    }) => ({
        variants: [{
            props: {
                underline: "none"
            },
            style: {
                textDecoration: "none"
            }
        }, {
            props: {
                underline: "hover"
            },
            style: {
                textDecoration: "none",
                "&:hover": {
                    textDecoration: "underline"
                }
            }
        }, {
            props: {
                underline: "always"
            },
            style: {
                textDecoration: "underline",
                "&:hover": {
                    textDecorationColor: "inherit"
                }
            }
        }, {
            props: ({
                underline: t,
                ownerState: o
            }) => t === "always" && o.color !== "inherit",
            style: {
                textDecorationColor: "var(--Link-underlineColor)"
            }
        }, {
            props: ({
                underline: t,
                ownerState: o
            }) => t === "always" && o.color === "inherit",
            style: e.colorSpace ? {
                textDecorationColor: e.alpha("currentColor", .4)
            } : null
        }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({
            props: {
                underline: "always",
                color: t
            },
            style: {
                "--Link-underlineColor": e.alpha((e.vars || e).palette[t].main, .4)
            }
        })), {
            props: {
                underline: "always",
                color: "textPrimary"
            },
            style: {
                "--Link-underlineColor": e.alpha((e.vars || e).palette.text.primary, .4)
            }
        }, {
            props: {
                underline: "always",
                color: "textSecondary"
            },
            style: {
                "--Link-underlineColor": e.alpha((e.vars || e).palette.text.secondary, .4)
            }
        }, {
            props: {
                underline: "always",
                color: "textDisabled"
            },
            style: {
                "--Link-underlineColor": (e.vars || e).palette.text.disabled
            }
        }, {
            props: {
                component: "button"
            },
            style: {
                position: "relative",
                WebkitTapHighlightColor: "transparent",
                backgroundColor: "transparent",
                outline: 0,
                border: 0,
                margin: 0,
                borderRadius: 0,
                padding: 0,
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                MozAppearance: "none",
                WebkitAppearance: "none",
                "&::-moz-focus-inner": {
                    borderStyle: "none"
                },
                [`&.${Fy.focusVisible}`]: {
                    outline: "auto"
                }
            }
        }]
    }))),
    Mx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiLink"
            }),
            n = Gt(),
            {
                className: i,
                color: s = "primary",
                component: a = "a",
                onBlur: l,
                onFocus: c,
                TypographyClasses: d,
                underline: p = "always",
                variant: b = "inherit",
                sx: h,
                ...g
            } = r,
            [m, v] = u.useState(!1),
            x = C => {
                Bo(C.target) || v(!1), l && l(C)
            },
            w = C => {
                Bo(C.target) && v(!0), c && c(C)
            },
            S = { ...r,
                color: s,
                component: a,
                focusVisible: m,
                underline: p,
                variant: b
            },
            y = Wy(S);
        return $.jsx(Hy, {
            color: s,
            className: H(y.root, i),
            classes: d,
            component: a,
            onBlur: x,
            onFocus: w,
            ref: o,
            ownerState: S,
            variant: b,
            ...g,
            sx: [...wa[s] === void 0 ? [{
                color: s
            }] : [], ...Array.isArray(h) ? h : [h]],
            style: { ...g.style,
                ...p === "always" && s !== "inherit" && !wa[s] && {
                    "--Link-underlineColor": Dy({
                        theme: n,
                        ownerState: S
                    })
                }
            }
        })
    }),
    fo = u.createContext({});

function Uy(e) {
    return Y("MuiList", e)
}
K("MuiList", ["root", "padding", "dense", "subheader"]);
const _y = e => {
        const {
            classes: t,
            disablePadding: o,
            dense: r,
            subheader: n
        } = e;
        return Q({
            root: ["root", !o && "padding", r && "dense", n && "subheader"]
        }, Uy, t)
    },
    Vy = j("ul", {
        name: "MuiList",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader]
        }
    })({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative",
        variants: [{
            props: ({
                ownerState: e
            }) => !e.disablePadding,
            style: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }, {
            props: ({
                ownerState: e
            }) => e.subheader,
            style: {
                paddingTop: 0
            }
        }]
    }),
    Gy = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiList"
            }),
            {
                children: n,
                className: i,
                component: s = "ul",
                dense: a = !1,
                disablePadding: l = !1,
                subheader: c,
                ...d
            } = r,
            p = u.useMemo(() => ({
                dense: a
            }), [a]),
            b = { ...r,
                component: s,
                dense: a,
                disablePadding: l
            },
            h = _y(b);
        return $.jsx(fo.Provider, {
            value: p,
            children: $.jsxs(Vy, {
                as: s,
                className: H(h.root, i),
                ref: o,
                ownerState: b,
                ...d,
                children: [c, n]
            })
        })
    });

function Ky(e) {
    return Y("MuiListItem", e)
}
K("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
const qy = K("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);

function Xy(e) {
    return Y("MuiListItemSecondaryAction", e)
}
K("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Yy = e => {
        const {
            disableGutters: t,
            classes: o
        } = e;
        return Q({
            root: ["root", t && "disableGutters"]
        }, Xy, o)
    },
    Qy = j("div", {
        name: "MuiListItemSecondaryAction",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.disableGutters && t.disableGutters]
        }
    })({
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        variants: [{
            props: ({
                ownerState: e
            }) => e.disableGutters,
            style: {
                right: 0
            }
        }]
    }),
    mc = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiListItemSecondaryAction"
            }),
            {
                className: n,
                ...i
            } = r,
            s = u.useContext(fo),
            a = { ...r,
                disableGutters: s.disableGutters
            },
            l = Yy(a);
        return $.jsx(Qy, {
            className: H(l.root, n),
            ownerState: a,
            ref: o,
            ...i
        })
    });
mc.muiName = "ListItemSecondaryAction";
const Jy = (e, t) => {
        const {
            ownerState: o
        } = e;
        return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.hasSecondaryAction && t.secondaryAction]
    },
    Zy = e => {
        const {
            alignItems: t,
            classes: o,
            dense: r,
            disableGutters: n,
            disablePadding: i,
            divider: s,
            hasSecondaryAction: a
        } = e;
        return Q({
            root: ["root", r && "dense", !n && "gutters", !i && "padding", s && "divider", t === "flex-start" && "alignItemsFlexStart", a && "secondaryAction"],
            container: ["container"]
        }, Ky, o)
    },
    ev = j("div", {
        name: "MuiListItem",
        slot: "Root",
        overridesResolver: Jy
    })(Z(({
        theme: e
    }) => ({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "left",
        variants: [{
            props: ({
                ownerState: t
            }) => !t.disablePadding,
            style: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.disablePadding && t.dense,
            style: {
                paddingTop: 4,
                paddingBottom: 4
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.disablePadding && !t.disableGutters,
            style: {
                paddingLeft: 16,
                paddingRight: 16
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.disablePadding && !!t.secondaryAction,
            style: {
                paddingRight: 48
            }
        }, {
            props: ({
                ownerState: t
            }) => !!t.secondaryAction,
            style: {
                [`& > .${qy.root}`]: {
                    paddingRight: 48
                }
            }
        }, {
            props: {
                alignItems: "flex-start"
            },
            style: {
                alignItems: "flex-start"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.divider,
            style: {
                borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
                backgroundClip: "padding-box"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.button,
            style: {
                transition: e.transitions.create("background-color", {
                    duration: e.transitions.duration.shortest
                }),
                "&:hover": {
                    textDecoration: "none",
                    backgroundColor: (e.vars || e).palette.action.hover,
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.hasSecondaryAction,
            style: {
                paddingRight: 48
            }
        }]
    }))),
    tv = j("li", {
        name: "MuiListItem",
        slot: "Container"
    })({
        position: "relative"
    }),
    Ix = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiListItem"
            }),
            {
                alignItems: n = "center",
                children: i,
                className: s,
                component: a,
                components: l = {},
                componentsProps: c = {},
                ContainerComponent: d = "li",
                ContainerProps: {
                    className: p,
                    ...b
                } = {},
                dense: h = !1,
                disableGutters: g = !1,
                disablePadding: m = !1,
                divider: v = !1,
                secondaryAction: x,
                slotProps: w = {},
                slots: S = {},
                ...y
            } = r,
            C = u.useContext(fo),
            R = u.useMemo(() => ({
                dense: h || C.dense || !1,
                alignItems: n,
                disableGutters: g
            }), [n, C.dense, h, g]),
            k = u.useRef(null),
            E = u.Children.toArray(i),
            O = E.length && _r(E[E.length - 1], ["ListItemSecondaryAction"]),
            M = { ...r,
                alignItems: n,
                dense: R.dense,
                disableGutters: g,
                disablePadding: m,
                divider: v,
                hasSecondaryAction: O
            },
            B = Zy(M),
            f = _e(k, o),
            P = S.root || l.Root || ev,
            T = w.root || c.root || {},
            I = {
                className: H(B.root, T.className, s),
                ...y
            };
        let A = a || "li";
        return O ? (A = !I.component && !a ? "div" : A, d === "li" && (A === "li" ? A = "div" : I.component === "li" && (I.component = "div")), $.jsx(fo.Provider, {
            value: R,
            children: $.jsxs(tv, {
                as: d,
                className: H(B.container, p),
                ref: f,
                ownerState: M,
                ...b,
                children: [$.jsx(P, { ...T,
                    ...!vr(P) && {
                        as: A,
                        ownerState: { ...M,
                            ...T.ownerState
                        }
                    },
                    ...I,
                    children: E
                }), E.pop()]
            })
        })) : $.jsx(fo.Provider, {
            value: R,
            children: $.jsxs(P, { ...T,
                as: A,
                ref: f,
                ...!vr(P) && {
                    ownerState: { ...M,
                        ...T.ownerState
                    }
                },
                ...I,
                children: [E, x && $.jsx(mc, {
                    children: x
                })]
            })
        })
    }),
    Ra = K("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
    $a = K("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);

function Yn(e, t, o) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild
}

function ka(e, t, o) {
    return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild
}

function gc(e, t) {
    if (t === void 0) return !0;
    let o = e.innerText;
    return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""))
}

function Qo(e, t, o, r, n, i) {
    let s = !1,
        a = n(e, t, t ? o : !1);
    for (; a;) {
        if (a === e.firstChild) {
            if (s) return !1;
            s = !0
        }
        const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
        if (!a.hasAttribute("tabindex") || !gc(a, i) || l) a = n(e, a, o);
        else return a.focus(), !0
    }
    return !1
}
const ov = u.forwardRef(function(t, o) {
    const {
        actions: r,
        autoFocus: n = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: c = !1,
        onKeyDown: d,
        variant: p = "selectedMenu",
        ...b
    } = t, h = u.useRef(null), g = u.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null
    });
    ct(() => {
        n && h.current.focus()
    }, [n]), u.useImperativeHandle(r, () => ({
        adjustStyleForScrollbar: (S, {
            direction: y
        }) => {
            const C = !h.current.style.width;
            if (S.clientHeight < h.current.clientHeight && C) {
                const R = `${uc(Pt(S))}px`;
                h.current.style[y === "rtl" ? "paddingLeft" : "paddingRight"] = R, h.current.style.width = `calc(100% + ${R})`
            }
            return h.current
        }
    }), []);
    const m = S => {
            const y = h.current,
                C = S.key;
            if (S.ctrlKey || S.metaKey || S.altKey) {
                d && d(S);
                return
            }
            const k = et(y).activeElement;
            if (C === "ArrowDown") S.preventDefault(), Qo(y, k, c, l, Yn);
            else if (C === "ArrowUp") S.preventDefault(), Qo(y, k, c, l, ka);
            else if (C === "Home") S.preventDefault(), Qo(y, null, c, l, Yn);
            else if (C === "End") S.preventDefault(), Qo(y, null, c, l, ka);
            else if (C.length === 1) {
                const E = g.current,
                    O = C.toLowerCase(),
                    M = performance.now();
                E.keys.length > 0 && (M - E.lastTime > 500 ? (E.keys = [], E.repeating = !0, E.previousKeyMatched = !0) : E.repeating && O !== E.keys[0] && (E.repeating = !1)), E.lastTime = M, E.keys.push(O);
                const B = k && !E.repeating && gc(k, E);
                E.previousKeyMatched && (B || Qo(y, k, !1, l, Yn, E)) ? S.preventDefault() : E.previousKeyMatched = !1
            }
            d && d(S)
        },
        v = _e(h, o);
    let x = -1;
    u.Children.forEach(s, (S, y) => {
        if (!u.isValidElement(S)) {
            x === y && (x += 1, x >= s.length && (x = -1));
            return
        }
        S.props.disabled || (p === "selectedMenu" && S.props.selected || x === -1) && (x = y), x === y && (S.props.disabled || S.props.muiSkipListHighlight || S.type.muiSkipListHighlight) && (x += 1, x >= s.length && (x = -1))
    });
    const w = u.Children.map(s, (S, y) => {
        if (y === x) {
            const C = {};
            return i && (C.autoFocus = !0), S.props.tabIndex === void 0 && p === "selectedMenu" && (C.tabIndex = 0), u.cloneElement(S, C)
        }
        return S
    });
    return $.jsx(Gy, {
        role: "menu",
        ref: v,
        className: a,
        onKeyDown: m,
        tabIndex: n ? 0 : -1,
        ...b,
        children: w
    })
});

function rv(e) {
    return Y("MuiPopover", e)
}
K("MuiPopover", ["root", "paper"]);

function Pa(e, t) {
    let o = 0;
    return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o
}

function Ta(e, t) {
    let o = 0;
    return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o
}

function Ea(e) {
    return [e.horizontal, e.vertical].map(t => typeof t == "number" ? `${t}px` : t).join(" ")
}

function Nr(e) {
    return typeof e == "function" ? e() : e
}
const nv = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"],
            paper: ["paper"]
        }, rv, t)
    },
    iv = j(pc, {
        name: "MuiPopover",
        slot: "Root"
    })({}),
    hc = j(bo, {
        name: "MuiPopover",
        slot: "Paper"
    })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0
    }),
    sv = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiPopover"
            }),
            {
                action: n,
                anchorEl: i,
                anchorOrigin: s = {
                    vertical: "top",
                    horizontal: "left"
                },
                anchorPosition: a,
                anchorReference: l = "anchorEl",
                children: c,
                className: d,
                container: p,
                elevation: b = 8,
                marginThreshold: h = 16,
                open: g,
                PaperProps: m = {},
                slots: v = {},
                slotProps: x = {},
                transformOrigin: w = {
                    vertical: "top",
                    horizontal: "left"
                },
                TransitionComponent: S,
                transitionDuration: y = "auto",
                TransitionProps: C = {},
                disableScrollLock: R = !1,
                ...k
            } = r,
            E = u.useRef(),
            O = { ...r,
                anchorOrigin: s,
                anchorReference: l,
                elevation: b,
                marginThreshold: h,
                transformOrigin: w,
                TransitionComponent: S,
                transitionDuration: y,
                TransitionProps: C
            },
            M = nv(O),
            B = u.useCallback(() => {
                if (l === "anchorPosition") return a;
                const X = Nr(i),
                    ce = (X && X.nodeType === 1 ? X : et(E.current).body).getBoundingClientRect();
                return {
                    top: ce.top + Pa(ce, s.vertical),
                    left: ce.left + Ta(ce, s.horizontal)
                }
            }, [i, s.horizontal, s.vertical, a, l]),
            f = u.useCallback(X => ({
                vertical: Pa(X, w.vertical),
                horizontal: Ta(X, w.horizontal)
            }), [w.horizontal, w.vertical]),
            P = u.useCallback(X => {
                const pe = {
                        width: X.offsetWidth,
                        height: X.offsetHeight
                    },
                    ce = f(pe);
                if (l === "none") return {
                    top: null,
                    left: null,
                    transformOrigin: Ea(ce)
                };
                const de = B();
                let ne = de.top - ce.vertical,
                    fe = de.left - ce.horizontal;
                const Ne = ne + pe.height,
                    xe = fe + pe.width,
                    ye = Pt(Nr(i)),
                    Se = ye.innerHeight - h,
                    Ce = ye.innerWidth - h;
                if (h !== null && ne < h) {
                    const be = ne - h;
                    ne -= be, ce.vertical += be
                } else if (h !== null && Ne > Se) {
                    const be = Ne - Se;
                    ne -= be, ce.vertical += be
                }
                if (h !== null && fe < h) {
                    const be = fe - h;
                    fe -= be, ce.horizontal += be
                } else if (xe > Ce) {
                    const be = xe - Ce;
                    fe -= be, ce.horizontal += be
                }
                return {
                    top: `${Math.round(ne)}px`,
                    left: `${Math.round(fe)}px`,
                    transformOrigin: Ea(ce)
                }
            }, [i, l, B, f, h]),
            [T, I] = u.useState(g),
            A = u.useCallback(() => {
                const X = E.current;
                if (!X) return;
                const pe = P(X);
                pe.top !== null && X.style.setProperty("top", pe.top), pe.left !== null && (X.style.left = pe.left), X.style.transformOrigin = pe.transformOrigin, I(!0)
            }, [P]);
        u.useEffect(() => (R && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [i, R, A]);
        const z = () => {
                A()
            },
            W = () => {
                I(!1)
            };
        u.useEffect(() => {
            g && A()
        }), u.useImperativeHandle(n, () => g ? {
            updatePosition: () => {
                A()
            }
        } : null, [g, A]), u.useEffect(() => {
            if (!g) return;
            const X = Sn(() => {
                    A()
                }),
                pe = Pt(Nr(i));
            return pe.addEventListener("resize", X), () => {
                X.clear(), pe.removeEventListener("resize", X)
            }
        }, [i, g, A]);
        let F = y;
        const U = {
                slots: {
                    transition: S,
                    ...v
                },
                slotProps: {
                    transition: C,
                    paper: m,
                    ...x
                }
            },
            [ie, ee] = te("transition", {
                elementType: xr,
                externalForwardedProps: U,
                ownerState: O,
                getSlotProps: X => ({ ...X,
                    onEntering: (pe, ce) => {
                        var de;
                        (de = X.onEntering) == null || de.call(X, pe, ce), z()
                    },
                    onExited: pe => {
                        var ce;
                        (ce = X.onExited) == null || ce.call(X, pe), W()
                    }
                }),
                additionalProps: {
                    appear: !0,
                    in: g
                }
            });
        y === "auto" && !ie.muiSupportAuto && (F = void 0);
        const J = p || (i ? et(Nr(i)).body : void 0),
            [ue, {
                slots: _,
                slotProps: D,
                ...V
            }] = te("root", {
                ref: o,
                elementType: iv,
                externalForwardedProps: { ...U,
                    ...k
                },
                shouldForwardComponentProp: !0,
                additionalProps: {
                    slots: {
                        backdrop: v.backdrop
                    },
                    slotProps: {
                        backdrop: jl(typeof x.backdrop == "function" ? x.backdrop(O) : x.backdrop, {
                            invisible: !0
                        })
                    },
                    container: J,
                    open: g
                },
                ownerState: O,
                className: H(M.root, d)
            }),
            [se, me] = te("paper", {
                ref: E,
                className: M.paper,
                elementType: hc,
                externalForwardedProps: U,
                shouldForwardComponentProp: !0,
                additionalProps: {
                    elevation: b,
                    style: T ? void 0 : {
                        opacity: 0
                    }
                },
                ownerState: O
            });
        return $.jsx(ue, { ...V,
            ...!vr(ue) && {
                slots: _,
                slotProps: D,
                disableScrollLock: R
            },
            children: $.jsx(ie, { ...ee,
                timeout: F,
                children: $.jsx(se, { ...me,
                    children: c
                })
            })
        })
    });

function av(e) {
    return Y("MuiMenu", e)
}
K("MuiMenu", ["root", "paper", "list"]);
const lv = {
        vertical: "top",
        horizontal: "right"
    },
    cv = {
        vertical: "top",
        horizontal: "left"
    },
    dv = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"],
            paper: ["paper"],
            list: ["list"]
        }, av, t)
    },
    uv = j(sv, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiMenu",
        slot: "Root"
    })({}),
    pv = j(hc, {
        name: "MuiMenu",
        slot: "Paper"
    })({
        maxHeight: "calc(100% - 96px)",
        WebkitOverflowScrolling: "touch"
    }),
    fv = j(ov, {
        name: "MuiMenu",
        slot: "List"
    })({
        outline: 0
    }),
    mv = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiMenu"
            }),
            {
                autoFocus: n = !0,
                children: i,
                className: s,
                disableAutoFocusItem: a = !1,
                MenuListProps: l = {},
                onClose: c,
                open: d,
                PaperProps: p = {},
                PopoverClasses: b,
                transitionDuration: h = "auto",
                TransitionProps: {
                    onEntering: g,
                    ...m
                } = {},
                variant: v = "selectedMenu",
                slots: x = {},
                slotProps: w = {},
                ...S
            } = r,
            y = Uo(),
            C = { ...r,
                autoFocus: n,
                disableAutoFocusItem: a,
                MenuListProps: l,
                onEntering: g,
                PaperProps: p,
                transitionDuration: h,
                TransitionProps: m,
                variant: v
            },
            R = dv(C),
            k = n && !a && d,
            E = u.useRef(null),
            O = (F, U) => {
                E.current && E.current.adjustStyleForScrollbar(F, {
                    direction: y ? "rtl" : "ltr"
                }), g && g(F, U)
            },
            M = F => {
                F.key === "Tab" && (F.preventDefault(), c && c(F, "tabKeyDown"))
            };
        let B = -1;
        u.Children.map(i, (F, U) => {
            u.isValidElement(F) && (F.props.disabled || (v === "selectedMenu" && F.props.selected || B === -1) && (B = U))
        });
        const f = {
                slots: x,
                slotProps: {
                    list: l,
                    transition: m,
                    paper: p,
                    ...w
                }
            },
            P = Fo({
                elementType: x.root,
                externalSlotProps: w.root,
                ownerState: C,
                className: [R.root, s]
            }),
            [T, I] = te("paper", {
                className: R.paper,
                elementType: pv,
                externalForwardedProps: f,
                shouldForwardComponentProp: !0,
                ownerState: C
            }),
            [A, z] = te("list", {
                className: H(R.list, l.className),
                elementType: fv,
                shouldForwardComponentProp: !0,
                externalForwardedProps: f,
                getSlotProps: F => ({ ...F,
                    onKeyDown: U => {
                        var ie;
                        M(U), (ie = F.onKeyDown) == null || ie.call(F, U)
                    }
                }),
                ownerState: C
            }),
            W = typeof f.slotProps.transition == "function" ? f.slotProps.transition(C) : f.slotProps.transition;
        return $.jsx(uv, {
            onClose: c,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: y ? "right" : "left"
            },
            transformOrigin: y ? lv : cv,
            slots: {
                root: x.root,
                paper: T,
                backdrop: x.backdrop,
                ...x.transition && {
                    transition: x.transition
                }
            },
            slotProps: {
                root: P,
                paper: I,
                backdrop: typeof w.backdrop == "function" ? w.backdrop(C) : w.backdrop,
                transition: { ...W,
                    onEntering: (...F) => {
                        var U;
                        O(...F), (U = W == null ? void 0 : W.onEntering) == null || U.call(W, ...F)
                    }
                }
            },
            open: d,
            ref: o,
            transitionDuration: h,
            ownerState: C,
            ...S,
            classes: b,
            children: $.jsx(A, {
                actions: E,
                autoFocus: n && (B === -1 || a),
                autoFocusItem: k,
                variant: v,
                ...z,
                children: i
            })
        })
    });

function gv(e) {
    return Y("MuiMenuItem", e)
}
const Jo = K("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]),
    hv = (e, t) => {
        const {
            ownerState: o
        } = e;
        return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters]
    },
    bv = e => {
        const {
            disabled: t,
            dense: o,
            divider: r,
            disableGutters: n,
            selected: i,
            classes: s
        } = e, l = Q({
            root: ["root", o && "dense", t && "disabled", !n && "gutters", r && "divider", i && "selected"]
        }, gv, s);
        return { ...s,
            ...l
        }
    },
    yv = j(_t, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiMenuItem",
        slot: "Root",
        overridesResolver: hv
    })(Z(({
        theme: e
    }) => ({ ...e.typography.body1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        [`&.${Jo.selected}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
            [`&.${Jo.focusVisible}`]: {
                backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)
            }
        },
        [`&.${Jo.selected}:hover`]: {
            backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),
            "@media (hover: none)": {
                backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
            }
        },
        [`&.${Jo.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
        },
        [`&.${Jo.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity
        },
        [`& + .${va.root}`]: {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1)
        },
        [`& + .${va.inset}`]: {
            marginLeft: 52
        },
        [`& .${$a.root}`]: {
            marginTop: 0,
            marginBottom: 0
        },
        [`& .${$a.inset}`]: {
            paddingLeft: 36
        },
        [`& .${Ra.root}`]: {
            minWidth: 36
        },
        variants: [{
            props: ({
                ownerState: t
            }) => !t.disableGutters,
            style: {
                paddingLeft: 16,
                paddingRight: 16
            }
        }, {
            props: ({
                ownerState: t
            }) => t.divider,
            style: {
                borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
                backgroundClip: "padding-box"
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.dense,
            style: {
                [e.breakpoints.up("sm")]: {
                    minHeight: "auto"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.dense,
            style: {
                minHeight: 32,
                paddingTop: 4,
                paddingBottom: 4,
                ...e.typography.body2,
                [`& .${Ra.root} svg`]: {
                    fontSize: "1.25rem"
                }
            }
        }]
    }))),
    Ax = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiMenuItem"
            }),
            {
                autoFocus: n = !1,
                component: i = "li",
                dense: s = !1,
                divider: a = !1,
                disableGutters: l = !1,
                focusVisibleClassName: c,
                role: d = "menuitem",
                tabIndex: p,
                className: b,
                ...h
            } = r,
            g = u.useContext(fo),
            m = u.useMemo(() => ({
                dense: s || g.dense || !1,
                disableGutters: l
            }), [g.dense, s, l]),
            v = u.useRef(null);
        ct(() => {
            n && v.current && v.current.focus()
        }, [n]);
        const x = { ...r,
                dense: m.dense,
                divider: a,
                disableGutters: l
            },
            w = bv(r),
            S = _e(v, o);
        let y;
        return r.disabled || (y = p !== void 0 ? p : -1), $.jsx(fo.Provider, {
            value: m,
            children: $.jsx(yv, {
                ref: S,
                role: d,
                tabIndex: y,
                component: i,
                focusVisibleClassName: H(w.focusVisible, c),
                className: H(w.root, b),
                ...h,
                ownerState: x,
                classes: w
            })
        })
    });

function vv(e) {
    return Y("MuiNativeSelect", e)
}
const ns = K("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]),
    xv = e => {
        const {
            classes: t,
            variant: o,
            disabled: r,
            multiple: n,
            open: i,
            error: s
        } = e, a = {
            select: ["select", o, r && "disabled", n && "multiple", s && "error"],
            icon: ["icon", `icon${L(o)}`, i && "iconOpen", r && "disabled"]
        };
        return Q(a, vv, t)
    },
    bc = j("select", {
        name: "MuiNativeSelect"
    })(({
        theme: e
    }) => ({
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": {
            borderRadius: 0
        },
        [`&.${ns.disabled}`]: {
            cursor: "default"
        },
        "&[multiple]": {
            height: "auto"
        },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
            backgroundColor: (e.vars || e).palette.background.paper
        },
        variants: [{
            props: ({
                ownerState: t
            }) => t.variant !== "filled" && t.variant !== "outlined",
            style: {
                "&&&": {
                    paddingRight: 24,
                    minWidth: 16
                }
            }
        }, {
            props: {
                variant: "filled"
            },
            style: {
                "&&&": {
                    paddingRight: 32
                }
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                borderRadius: (e.vars || e).shape.borderRadius,
                "&:focus": {
                    borderRadius: (e.vars || e).shape.borderRadius
                },
                "&&&": {
                    paddingRight: 32
                }
            }
        }]
    })),
    Sv = j(bc, {
        name: "MuiNativeSelect",
        slot: "Select",
        shouldForwardProp: dt,
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.select, t[o.variant], o.error && t.error, {
                [`&.${ns.multiple}`]: t.multiple
            }]
        }
    })({}),
    yc = j("svg", {
        name: "MuiNativeSelect"
    })(({
        theme: e
    }) => ({
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (e.vars || e).palette.action.active,
        [`&.${ns.disabled}`]: {
            color: (e.vars || e).palette.action.disabled
        },
        variants: [{
            props: ({
                ownerState: t
            }) => t.open,
            style: {
                transform: "rotate(180deg)"
            }
        }, {
            props: {
                variant: "filled"
            },
            style: {
                right: 7
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                right: 7
            }
        }]
    })),
    Cv = j(yc, {
        name: "MuiNativeSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.icon, o.variant && t[`icon${L(o.variant)}`], o.open && t.iconOpen]
        }
    })({}),
    wv = u.forwardRef(function(t, o) {
        const {
            className: r,
            disabled: n,
            error: i,
            IconComponent: s,
            inputRef: a,
            variant: l = "standard",
            ...c
        } = t, d = { ...t,
            disabled: n,
            variant: l,
            error: i
        }, p = xv(d);
        return $.jsxs(u.Fragment, {
            children: [$.jsx(Sv, {
                ownerState: d,
                className: H(p.select, r),
                disabled: n,
                ref: a || o,
                ...c
            }), t.multiple ? null : $.jsx(Cv, {
                as: s,
                ownerState: d,
                className: p.icon
            })]
        })
    });
var Ma;
const Rv = j("fieldset", {
        name: "MuiNotchedOutlined",
        shouldForwardProp: dt
    })({
        textAlign: "left",
        position: "absolute",
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: "0 8px",
        pointerEvents: "none",
        borderRadius: "inherit",
        borderStyle: "solid",
        borderWidth: 1,
        overflow: "hidden",
        minWidth: "0%"
    }),
    $v = j("legend", {
        name: "MuiNotchedOutlined",
        shouldForwardProp: dt
    })(Z(({
        theme: e
    }) => ({
        float: "unset",
        width: "auto",
        overflow: "hidden",
        variants: [{
            props: ({
                ownerState: t
            }) => !t.withLabel,
            style: {
                padding: 0,
                lineHeight: "11px",
                transition: e.transitions.create("width", {
                    duration: 150,
                    easing: e.transitions.easing.easeOut
                })
            }
        }, {
            props: ({
                ownerState: t
            }) => t.withLabel,
            style: {
                display: "block",
                padding: 0,
                height: 11,
                fontSize: "0.75em",
                visibility: "hidden",
                maxWidth: .01,
                transition: e.transitions.create("max-width", {
                    duration: 50,
                    easing: e.transitions.easing.easeOut
                }),
                whiteSpace: "nowrap",
                "& > span": {
                    paddingLeft: 5,
                    paddingRight: 5,
                    display: "inline-block",
                    opacity: 0,
                    visibility: "visible"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.withLabel && t.notched,
            style: {
                maxWidth: "100%",
                transition: e.transitions.create("max-width", {
                    duration: 100,
                    easing: e.transitions.easing.easeOut,
                    delay: 50
                })
            }
        }]
    })));

function kv(e) {
    const {
        children: t,
        classes: o,
        className: r,
        label: n,
        notched: i,
        ...s
    } = e, a = n != null && n !== "", l = { ...e,
        notched: i,
        withLabel: a
    };
    return $.jsx(Rv, {
        "aria-hidden": !0,
        className: r,
        ownerState: l,
        ...s,
        children: $.jsx($v, {
            ownerState: l,
            children: a ? $.jsx("span", {
                children: n
            }) : Ma || (Ma = $.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​"
            }))
        })
    })
}
const Pv = e => {
        const {
            classes: t
        } = e, r = Q({
            root: ["root"],
            notchedOutline: ["notchedOutline"],
            input: ["input"]
        }, fh, t);
        return { ...t,
            ...r
        }
    },
    Tv = j(kn, {
        shouldForwardProp: e => dt(e) || e === "classes",
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: Rn
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return {
            position: "relative",
            borderRadius: (e.vars || e).shape.borderRadius,
            [`&:hover .${At.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.text.primary
            },
            "@media (hover: none)": {
                [`&:hover .${At.notchedOutline}`]: {
                    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t
                }
            },
            [`&.${At.focused} .${At.notchedOutline}`]: {
                borderWidth: 2
            },
            variants: [...Object.entries(e.palette).filter(Le()).map(([o]) => ({
                props: {
                    color: o
                },
                style: {
                    [`&.${At.focused} .${At.notchedOutline}`]: {
                        borderColor: (e.vars || e).palette[o].main
                    }
                }
            })), {
                props: {},
                style: {
                    [`&.${At.error} .${At.notchedOutline}`]: {
                        borderColor: (e.vars || e).palette.error.main
                    },
                    [`&.${At.disabled} .${At.notchedOutline}`]: {
                        borderColor: (e.vars || e).palette.action.disabled
                    }
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.startAdornment,
                style: {
                    paddingLeft: 14
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.endAdornment,
                style: {
                    paddingRight: 14
                }
            }, {
                props: ({
                    ownerState: o
                }) => o.multiline,
                style: {
                    padding: "16.5px 14px"
                }
            }, {
                props: ({
                    ownerState: o,
                    size: r
                }) => o.multiline && r === "small",
                style: {
                    padding: "8.5px 14px"
                }
            }]
        }
    })),
    Ev = j(kv, {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline"
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return {
            borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t
        }
    })),
    Mv = j(Pn, {
        name: "MuiOutlinedInput",
        slot: "Input",
        overridesResolver: $n
    })(Z(({
        theme: e
    }) => ({
        padding: "16.5px 14px",
        ...!e.vars && {
            "&:-webkit-autofill": {
                WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
                WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
                caretColor: e.palette.mode === "light" ? null : "#fff",
                borderRadius: "inherit"
            }
        },
        ...e.vars && {
            "&:-webkit-autofill": {
                borderRadius: "inherit"
            },
            [e.getColorSchemeSelector("dark")]: {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #266798 inset",
                    WebkitTextFillColor: "#fff",
                    caretColor: "#fff"
                }
            }
        },
        variants: [{
            props: {
                size: "small"
            },
            style: {
                padding: "8.5px 14px"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.multiline,
            style: {
                padding: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.startAdornment,
            style: {
                paddingLeft: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.endAdornment,
            style: {
                paddingRight: 0
            }
        }]
    }))),
    is = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiOutlinedInput"
            }),
            {
                components: n = {},
                fullWidth: i = !1,
                inputComponent: s = "input",
                label: a,
                multiline: l = !1,
                notched: c,
                slots: d = {},
                slotProps: p = {},
                type: b = "text",
                ...h
            } = r,
            g = Pv(r),
            m = oo(),
            v = vo({
                props: r,
                muiFormControl: m,
                states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
            }),
            x = { ...r,
                color: v.color || "primary",
                disabled: v.disabled,
                error: v.error,
                focused: v.focused,
                formControl: m,
                fullWidth: i,
                hiddenLabel: v.hiddenLabel,
                multiline: l,
                size: v.size,
                type: b
            },
            w = d.root ? ? n.Root ? ? Tv,
            S = d.input ? ? n.Input ? ? Mv,
            [y, C] = te("notchedOutline", {
                elementType: Ev,
                className: g.notchedOutline,
                shouldForwardComponentProp: !0,
                ownerState: x,
                externalForwardedProps: {
                    slots: d,
                    slotProps: p
                },
                additionalProps: {
                    label: a != null && a !== "" && v.required ? $.jsxs(u.Fragment, {
                        children: [a, " ", "*"]
                    }) : a
                }
            });
        return $.jsx(es, {
            slots: {
                root: w,
                input: S
            },
            slotProps: p,
            renderSuffix: R => $.jsx(y, { ...C,
                notched: typeof c < "u" ? c : !!(R.startAdornment || R.filled || R.focused)
            }),
            fullWidth: i,
            inputComponent: s,
            multiline: l,
            ref: o,
            type: b,
            ...h,
            classes: { ...g,
                notchedOutline: null
            }
        })
    });
is.muiName = "Input";

function vc(e) {
    return Y("MuiSelect", e)
}
const Zo = K("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Ia;
const Iv = j(bc, {
        name: "MuiSelect",
        slot: "Select",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [{
                [`&.${Zo.select}`]: t.select
            }, {
                [`&.${Zo.select}`]: t[o.variant]
            }, {
                [`&.${Zo.error}`]: t.error
            }, {
                [`&.${Zo.multiple}`]: t.multiple
            }]
        }
    })({
        [`&.${Zo.select}`]: {
            height: "auto",
            minHeight: "1.4375em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }),
    Av = j(yc, {
        name: "MuiSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.icon, o.variant && t[`icon${L(o.variant)}`], o.open && t.iconOpen]
        }
    })({}),
    Ov = j("input", {
        shouldForwardProp: e => Ll(e) && e !== "classes",
        name: "MuiSelect",
        slot: "NativeInput"
    })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box"
    });

function Aa(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t)
}

function Bv(e) {
    return e == null || typeof e == "string" && !e.trim()
}
const Lv = e => {
        const {
            classes: t,
            variant: o,
            disabled: r,
            multiple: n,
            open: i,
            error: s
        } = e, a = {
            select: ["select", o, r && "disabled", n && "multiple", s && "error"],
            icon: ["icon", `icon${L(o)}`, i && "iconOpen", r && "disabled"],
            nativeInput: ["nativeInput"]
        };
        return Q(a, vc, t)
    },
    Nv = u.forwardRef(function(t, o) {
        var $t, Kt, xo, Et;
        const {
            "aria-describedby": r,
            "aria-label": n,
            autoFocus: i,
            autoWidth: s,
            children: a,
            className: l,
            defaultOpen: c,
            defaultValue: d,
            disabled: p,
            displayEmpty: b,
            error: h = !1,
            IconComponent: g,
            inputRef: m,
            labelId: v,
            MenuProps: x = {},
            multiple: w,
            name: S,
            onBlur: y,
            onChange: C,
            onClose: R,
            onFocus: k,
            onOpen: E,
            open: O,
            readOnly: M,
            renderValue: B,
            required: f,
            SelectDisplayProps: P = {},
            tabIndex: T,
            type: I,
            value: A,
            variant: z = "standard",
            ...W
        } = t, [F, U] = hr({
            controlled: A,
            default: d,
            name: "Select"
        }), [ie, ee] = hr({
            controlled: O,
            default: c,
            name: "Select"
        }), J = u.useRef(null), ue = u.useRef(null), [_, D] = u.useState(null), {
            current: V
        } = u.useRef(O != null), [se, me] = u.useState(), X = _e(o, m), pe = u.useCallback(le => {
            ue.current = le, le && D(le)
        }, []), ce = _ == null ? void 0 : _.parentNode;
        u.useImperativeHandle(X, () => ({
            focus: () => {
                ue.current.focus()
            },
            node: J.current,
            value: F
        }), [F]), u.useEffect(() => {
            c && ie && _ && !V && (me(s ? null : ce.clientWidth), ue.current.focus())
        }, [_, s]), u.useEffect(() => {
            i && ue.current.focus()
        }, [i]), u.useEffect(() => {
            if (!v) return;
            const le = et(ue.current).getElementById(v);
            if (le) {
                const Ie = () => {
                    getSelection().isCollapsed && ue.current.focus()
                };
                return le.addEventListener("click", Ie), () => {
                    le.removeEventListener("click", Ie)
                }
            }
        }, [v]);
        const de = (le, Ie) => {
                le ? E && E(Ie) : R && R(Ie), V || (me(s ? null : ce.clientWidth), ee(le))
            },
            ne = le => {
                le.button === 0 && (le.preventDefault(), ue.current.focus(), de(!0, le))
            },
            fe = le => {
                de(!1, le)
            },
            Ne = u.Children.toArray(a),
            xe = le => {
                const Ie = Ne.find(Ve => Ve.props.value === le.target.value);
                Ie !== void 0 && (U(Ie.props.value), C && C(le, Ie))
            },
            ye = le => Ie => {
                let Ve;
                if (Ie.currentTarget.hasAttribute("tabindex")) {
                    if (w) {
                        Ve = Array.isArray(F) ? F.slice() : [];
                        const ht = F.indexOf(le.props.value);
                        ht === -1 ? Ve.push(le.props.value) : Ve.splice(ht, 1)
                    } else Ve = le.props.value;
                    if (le.props.onClick && le.props.onClick(Ie), F !== Ve && (U(Ve), C)) {
                        const ht = Ie.nativeEvent || Ie,
                            So = new ht.constructor(ht.type, ht);
                        Object.defineProperty(So, "target", {
                            writable: !0,
                            value: {
                                value: Ve,
                                name: S
                            }
                        }), C(So, le)
                    }
                    w || de(!1, Ie)
                }
            },
            Se = le => {
                M || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(le.key) && (le.preventDefault(), de(!0, le))
            },
            Ce = _ !== null && ie,
            be = le => {
                !Ce && y && (Object.defineProperty(le, "target", {
                    writable: !0,
                    value: {
                        value: F,
                        name: S
                    }
                }), y(le))
            };
        delete W["aria-invalid"];
        let q, qe;
        const Ee = [];
        let tt = !1;
        (on({
            value: F
        }) || b) && (B ? q = B(F) : tt = !0);
        const rt = Ne.map(le => {
            if (!u.isValidElement(le)) return null;
            let Ie;
            if (w) {
                if (!Array.isArray(F)) throw new Error(Ut(2));
                Ie = F.some(Ve => Aa(Ve, le.props.value)), Ie && tt && Ee.push(le.props.children)
            } else Ie = Aa(F, le.props.value), Ie && tt && (qe = le.props.children);
            return u.cloneElement(le, {
                "aria-selected": Ie ? "true" : "false",
                onClick: ye(le),
                onKeyUp: Ve => {
                    Ve.key === " " && Ve.preventDefault(), le.props.onKeyUp && le.props.onKeyUp(Ve)
                },
                role: "option",
                selected: Ie,
                value: void 0,
                "data-value": le.props.value
            })
        });
        tt && (w ? Ee.length === 0 ? q = null : q = Ee.reduce((le, Ie, Ve) => (le.push(Ie), Ve < Ee.length - 1 && le.push(", "), le), []) : q = qe);
        let Qe = se;
        !s && V && _ && (Qe = ce.clientWidth);
        let Xe;
        typeof T < "u" ? Xe = T : Xe = p ? null : 0;
        const Je = P.id || (S ? `mui-component-select-${S}` : void 0),
            Pe = { ...t,
                variant: z,
                value: F,
                open: Ce,
                error: h
            },
            re = Lv(Pe),
            Fe = { ...x.PaperProps,
                ...typeof(($t = x.slotProps) == null ? void 0 : $t.paper) == "function" ? x.slotProps.paper(Pe) : (Kt = x.slotProps) == null ? void 0 : Kt.paper
            },
            je = { ...x.MenuListProps,
                ...typeof((xo = x.slotProps) == null ? void 0 : xo.list) == "function" ? x.slotProps.list(Pe) : (Et = x.slotProps) == null ? void 0 : Et.list
            },
            Me = ho();
        return $.jsxs(u.Fragment, {
            children: [$.jsx(Iv, {
                as: "div",
                ref: pe,
                tabIndex: Xe,
                role: "combobox",
                "aria-controls": Ce ? Me : void 0,
                "aria-disabled": p ? "true" : void 0,
                "aria-expanded": Ce ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": n,
                "aria-labelledby": [v, Je].filter(Boolean).join(" ") || void 0,
                "aria-describedby": r,
                "aria-required": f ? "true" : void 0,
                "aria-invalid": h ? "true" : void 0,
                onKeyDown: Se,
                onMouseDown: p || M ? null : ne,
                onBlur: be,
                onFocus: k,
                ...P,
                ownerState: Pe,
                className: H(P.className, re.select, l),
                id: Je,
                children: Bv(q) ? Ia || (Ia = $.jsx("span", {
                    className: "notranslate",
                    "aria-hidden": !0,
                    children: "​"
                })) : q
            }), $.jsx(Ov, {
                "aria-invalid": h,
                value: Array.isArray(F) ? F.join(",") : F,
                name: S,
                ref: J,
                "aria-hidden": !0,
                onChange: xe,
                tabIndex: -1,
                disabled: p,
                className: re.nativeInput,
                autoFocus: i,
                required: f,
                ...W,
                ownerState: Pe
            }), $.jsx(Av, {
                as: g,
                className: re.icon,
                ownerState: Pe
            }), $.jsx(mv, {
                id: `menu-${S||""}`,
                anchorEl: ce,
                open: Ce,
                onClose: fe,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                ...x,
                slotProps: { ...x.slotProps,
                    list: {
                        "aria-labelledby": v,
                        role: "listbox",
                        "aria-multiselectable": w ? "true" : void 0,
                        disableListWrap: !0,
                        id: Me,
                        ...je
                    },
                    paper: { ...Fe,
                        style: {
                            minWidth: Qe,
                            ...Fe != null ? Fe.style : null
                        }
                    }
                },
                children: rt
            })]
        })
    }),
    jv = e => {
        const {
            classes: t
        } = e, r = Q({
            root: ["root"]
        }, vc, t);
        return { ...t,
            ...r
        }
    },
    ss = {
        name: "MuiSelect",
        slot: "Root",
        shouldForwardProp: e => dt(e) && e !== "variant"
    },
    zv = j(os, ss)(""),
    Fv = j(is, ss)(""),
    Dv = j(ts, ss)(""),
    xc = u.forwardRef(function(t, o) {
        const r = oe({
                name: "MuiSelect",
                props: t
            }),
            {
                autoWidth: n = !1,
                children: i,
                classes: s = {},
                className: a,
                defaultOpen: l = !1,
                displayEmpty: c = !1,
                IconComponent: d = gh,
                id: p,
                input: b,
                inputProps: h,
                label: g,
                labelId: m,
                MenuProps: v,
                multiple: x = !1,
                native: w = !1,
                onClose: S,
                onOpen: y,
                open: C,
                renderValue: R,
                SelectDisplayProps: k,
                variant: E = "outlined",
                ...O
            } = r,
            M = w ? wv : Nv,
            B = oo(),
            f = vo({
                props: r,
                muiFormControl: B,
                states: ["variant", "error"]
            }),
            P = f.variant || E,
            T = { ...r,
                variant: P,
                classes: s
            },
            I = jv(T),
            {
                root: A,
                ...z
            } = I,
            W = b || {
                standard: $.jsx(zv, {
                    ownerState: T
                }),
                outlined: $.jsx(Fv, {
                    label: g,
                    ownerState: T
                }),
                filled: $.jsx(Dv, {
                    ownerState: T
                })
            }[P],
            F = _e(o, yo(W));
        return $.jsx(u.Fragment, {
            children: u.cloneElement(W, {
                inputComponent: M,
                inputProps: {
                    children: i,
                    error: f.error,
                    IconComponent: d,
                    variant: P,
                    type: void 0,
                    multiple: x,
                    ...w ? {
                        id: p
                    } : {
                        autoWidth: n,
                        defaultOpen: l,
                        displayEmpty: c,
                        labelId: m,
                        MenuProps: v,
                        onClose: S,
                        onOpen: y,
                        open: C,
                        renderValue: R,
                        SelectDisplayProps: {
                            id: p,
                            ...k
                        }
                    },
                    ...h,
                    classes: h ? Ye(z, h.classes) : z,
                    ...b ? b.props.inputProps : {}
                },
                ...(x && w || c) && P === "outlined" ? {
                    notched: !0
                } : {},
                ref: F,
                className: H(W.props.className, a, I.root),
                ...!b && {
                    variant: P
                },
                ...O
            })
        })
    });
xc.muiName = "Select";

function Wv(e = {}) {
    const {
        autoHideDuration: t = null,
        disableWindowBlurListener: o = !1,
        onClose: r,
        open: n,
        resumeHideDuration: i
    } = e, s = Yt();
    u.useEffect(() => {
        if (!n) return;

        function x(w) {
            w.defaultPrevented || w.key === "Escape" && (r == null || r(w, "escapeKeyDown"))
        }
        return document.addEventListener("keydown", x), () => {
            document.removeEventListener("keydown", x)
        }
    }, [n, r]);
    const a = it((x, w) => {
            r == null || r(x, w)
        }),
        l = it(x => {
            !r || x == null || s.start(x, () => {
                a(null, "timeout")
            })
        });
    u.useEffect(() => (n && l(t), s.clear), [n, t, l, s]);
    const c = x => {
            r == null || r(x, "clickaway")
        },
        d = s.clear,
        p = u.useCallback(() => {
            t != null && l(i ? ? t * .5)
        }, [t, i, l]),
        b = x => w => {
            const S = x.onBlur;
            S == null || S(w), p()
        },
        h = x => w => {
            const S = x.onFocus;
            S == null || S(w), d()
        },
        g = x => w => {
            const S = x.onMouseEnter;
            S == null || S(w), d()
        },
        m = x => w => {
            const S = x.onMouseLeave;
            S == null || S(w), p()
        };
    return u.useEffect(() => {
        if (!o && n) return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
            window.removeEventListener("focus", p), window.removeEventListener("blur", d)
        }
    }, [o, n, p, d]), {
        getRootProps: (x = {}) => {
            const w = { ...Jr(e),
                ...Jr(x)
            };
            return {
                role: "presentation",
                ...x,
                ...w,
                onBlur: b(w),
                onFocus: h(w),
                onMouseEnter: g(w),
                onMouseLeave: m(w)
            }
        },
        onClickAway: c
    }
}

function Hv(e) {
    return Y("MuiSnackbarContent", e)
}
K("MuiSnackbarContent", ["root", "message", "action"]);
const Uv = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"],
            action: ["action"],
            message: ["message"]
        }, Hv, t)
    },
    _v = j(bo, {
        name: "MuiSnackbarContent",
        slot: "Root"
    })(Z(({
        theme: e
    }) => {
        const t = e.palette.mode === "light" ? .8 : .98;
        return { ...e.typography.body2,
            color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(ii(e.palette.background.default, t)),
            backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : ii(e.palette.background.default, t),
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "6px 16px",
            flexGrow: 1,
            [e.breakpoints.up("sm")]: {
                flexGrow: "initial",
                minWidth: 288
            }
        }
    })),
    Vv = j("div", {
        name: "MuiSnackbarContent",
        slot: "Message"
    })({
        padding: "8px 0"
    }),
    Gv = j("div", {
        name: "MuiSnackbarContent",
        slot: "Action"
    })({
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        paddingLeft: 16,
        marginRight: -8
    }),
    Kv = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiSnackbarContent"
            }),
            {
                action: n,
                className: i,
                message: s,
                role: a = "alert",
                ...l
            } = r,
            c = r,
            d = Uv(c);
        return $.jsxs(_v, {
            role: a,
            elevation: 6,
            className: H(d.root, i),
            ownerState: c,
            ref: o,
            ...l,
            children: [$.jsx(Vv, {
                className: d.message,
                ownerState: c,
                children: s
            }), n ? $.jsx(Gv, {
                className: d.action,
                ownerState: c,
                children: n
            }) : null]
        })
    });

function qv(e) {
    return Y("MuiSnackbar", e)
}
K("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const Xv = e => {
        const {
            classes: t,
            anchorOrigin: o
        } = e, r = {
            root: ["root", `anchorOrigin${L(o.vertical)}${L(o.horizontal)}`]
        };
        return Q(r, qv, t)
    },
    Yv = j("div", {
        name: "MuiSnackbar",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        zIndex: (e.vars || e).zIndex.snackbar,
        position: "fixed",
        display: "flex",
        left: 8,
        right: 8,
        justifyContent: "center",
        alignItems: "center",
        variants: [{
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical === "top",
            style: {
                top: 8,
                [e.breakpoints.up("sm")]: {
                    top: 24
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.vertical !== "top",
            style: {
                bottom: 8,
                [e.breakpoints.up("sm")]: {
                    bottom: 24
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.horizontal === "left",
            style: {
                justifyContent: "flex-start",
                [e.breakpoints.up("sm")]: {
                    left: 24,
                    right: "auto"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.horizontal === "right",
            style: {
                justifyContent: "flex-end",
                [e.breakpoints.up("sm")]: {
                    right: 24,
                    left: "auto"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.anchorOrigin.horizontal === "center",
            style: {
                [e.breakpoints.up("sm")]: {
                    left: "50%",
                    right: "auto",
                    transform: "translateX(-50%)"
                }
            }
        }]
    }))),
    Ox = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiSnackbar"
            }),
            n = Gt(),
            i = {
                enter: n.transitions.duration.enteringScreen,
                exit: n.transitions.duration.leavingScreen
            },
            {
                action: s,
                anchorOrigin: {
                    vertical: a,
                    horizontal: l
                } = {
                    vertical: "bottom",
                    horizontal: "left"
                },
                autoHideDuration: c = null,
                children: d,
                className: p,
                ClickAwayListenerProps: b,
                ContentProps: h,
                disableWindowBlurListener: g = !1,
                message: m,
                onBlur: v,
                onClose: x,
                onFocus: w,
                onMouseEnter: S,
                onMouseLeave: y,
                open: C,
                resumeHideDuration: R,
                slots: k = {},
                slotProps: E = {},
                TransitionComponent: O,
                transitionDuration: M = i,
                TransitionProps: {
                    onEnter: B,
                    onExited: f,
                    ...P
                } = {},
                ...T
            } = r,
            I = { ...r,
                anchorOrigin: {
                    vertical: a,
                    horizontal: l
                },
                autoHideDuration: c,
                disableWindowBlurListener: g,
                TransitionComponent: O,
                transitionDuration: M
            },
            A = Xv(I),
            {
                getRootProps: z,
                onClickAway: W
            } = Wv({ ...I
            }),
            [F, U] = u.useState(!0),
            ie = de => {
                U(!0), f && f(de)
            },
            ee = (de, ne) => {
                U(!1), B && B(de, ne)
            },
            J = {
                slots: {
                    transition: O,
                    ...k
                },
                slotProps: {
                    content: h,
                    clickAwayListener: b,
                    transition: P,
                    ...E
                }
            },
            [ue, _] = te("root", {
                ref: o,
                className: [A.root, p],
                elementType: Yv,
                getSlotProps: z,
                externalForwardedProps: { ...J,
                    ...T
                },
                ownerState: I
            }),
            [D, {
                ownerState: V,
                ...se
            }] = te("clickAwayListener", {
                elementType: ub,
                externalForwardedProps: J,
                getSlotProps: de => ({
                    onClickAway: (...ne) => {
                        var Ne;
                        const fe = ne[0];
                        (Ne = de.onClickAway) == null || Ne.call(de, ...ne), !(fe != null && fe.defaultMuiPrevented) && W(...ne)
                    }
                }),
                ownerState: I
            }),
            [me, X] = te("content", {
                elementType: Kv,
                shouldForwardComponentProp: !0,
                externalForwardedProps: J,
                additionalProps: {
                    message: m,
                    action: s
                },
                ownerState: I
            }),
            [pe, ce] = te("transition", {
                elementType: xr,
                externalForwardedProps: J,
                getSlotProps: de => ({
                    onEnter: (...ne) => {
                        var fe;
                        (fe = de.onEnter) == null || fe.call(de, ...ne), ee(...ne)
                    },
                    onExited: (...ne) => {
                        var fe;
                        (fe = de.onExited) == null || fe.call(de, ...ne), ie(...ne)
                    }
                }),
                additionalProps: {
                    appear: !0,
                    in: C,
                    timeout: M,
                    direction: a === "top" ? "down" : "up"
                },
                ownerState: I
            });
        return !C && F ? null : $.jsx(D, { ...se,
            ...k.clickAwayListener && {
                ownerState: V
            },
            children: $.jsx(ue, { ..._,
                children: $.jsx(pe, { ...ce,
                    children: d || $.jsx(me, { ...X
                    })
                })
            })
        })
    });

function Qv(e) {
    return Y("MuiTooltip", e)
}
const Ue = K("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);

function Jv(e) {
    return Math.round(e * 1e5) / 1e5
}
const Zv = e => {
        const {
            classes: t,
            disableInteractive: o,
            arrow: r,
            touch: n,
            placement: i
        } = e, s = {
            popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
            tooltip: ["tooltip", r && "tooltipArrow", n && "touch", `tooltipPlacement${L(i.split("-")[0])}`],
            arrow: ["arrow"]
        };
        return Q(s, Qv, t)
    },
    e0 = j(nc, {
        name: "MuiTooltip",
        slot: "Popper",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose]
        }
    })(Z(({
        theme: e
    }) => ({
        zIndex: (e.vars || e).zIndex.tooltip,
        pointerEvents: "none",
        variants: [{
            props: ({
                ownerState: t
            }) => !t.disableInteractive,
            style: {
                pointerEvents: "auto"
            }
        }, {
            props: ({
                open: t
            }) => !t,
            style: {
                pointerEvents: "none"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.arrow,
            style: {
                [`&[data-popper-placement*="bottom"] .${Ue.arrow}`]: {
                    top: 0,
                    marginTop: "-0.71em",
                    "&::before": {
                        transformOrigin: "0 100%"
                    }
                },
                [`&[data-popper-placement*="top"] .${Ue.arrow}`]: {
                    bottom: 0,
                    marginBottom: "-0.71em",
                    "&::before": {
                        transformOrigin: "100% 0"
                    }
                },
                [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
                    height: "1em",
                    width: "0.71em",
                    "&::before": {
                        transformOrigin: "100% 100%"
                    }
                },
                [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
                    height: "1em",
                    width: "0.71em",
                    "&::before": {
                        transformOrigin: "0 0"
                    }
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.arrow && !t.isRtl,
            style: {
                [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
                    left: 0,
                    marginLeft: "-0.71em"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.arrow && !!t.isRtl,
            style: {
                [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
                    right: 0,
                    marginRight: "-0.71em"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.arrow && !t.isRtl,
            style: {
                [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
                    right: 0,
                    marginRight: "-0.71em"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.arrow && !!t.isRtl,
            style: {
                [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
                    left: 0,
                    marginLeft: "-0.71em"
                }
            }
        }]
    }))),
    t0 = j("div", {
        name: "MuiTooltip",
        slot: "Tooltip",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${L(o.placement.split("-")[0])}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], .92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
        [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
            transformOrigin: "right center"
        },
        [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
            transformOrigin: "left center"
        },
        [`.${Ue.popper}[data-popper-placement*="top"] &`]: {
            transformOrigin: "center bottom",
            marginBottom: "14px"
        },
        [`.${Ue.popper}[data-popper-placement*="bottom"] &`]: {
            transformOrigin: "center top",
            marginTop: "14px"
        },
        variants: [{
            props: ({
                ownerState: t
            }) => t.arrow,
            style: {
                position: "relative",
                margin: 0
            }
        }, {
            props: ({
                ownerState: t
            }) => t.touch,
            style: {
                padding: "8px 16px",
                fontSize: e.typography.pxToRem(14),
                lineHeight: `${Jv(16/14)}em`,
                fontWeight: e.typography.fontWeightRegular
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.isRtl,
            style: {
                [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
                    marginRight: "14px"
                },
                [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
                    marginLeft: "14px"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => !t.isRtl && t.touch,
            style: {
                [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
                    marginRight: "24px"
                },
                [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
                    marginLeft: "24px"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => !!t.isRtl,
            style: {
                [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
                    marginLeft: "14px"
                },
                [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
                    marginRight: "14px"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => !!t.isRtl && t.touch,
            style: {
                [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
                    marginLeft: "24px"
                },
                [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
                    marginRight: "24px"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.touch,
            style: {
                [`.${Ue.popper}[data-popper-placement*="top"] &`]: {
                    marginBottom: "24px"
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.touch,
            style: {
                [`.${Ue.popper}[data-popper-placement*="bottom"] &`]: {
                    marginTop: "24px"
                }
            }
        }]
    }))),
    o0 = j("span", {
        name: "MuiTooltip",
        slot: "Arrow"
    })(Z(({
        theme: e
    }) => ({
        overflow: "hidden",
        position: "absolute",
        width: "1em",
        height: "0.71em",
        boxSizing: "border-box",
        color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], .9),
        "&::before": {
            content: '""',
            margin: "auto",
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "currentColor",
            transform: "rotate(45deg)"
        }
    })));
let jr = !1;
const Oa = new Cn;
let er = {
    x: 0,
    y: 0
};

function zr(e, t) {
    return (o, ...r) => {
        t && t(o, ...r), e(o, ...r)
    }
}
const Bx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTooltip"
            }),
            {
                arrow: n = !1,
                children: i,
                classes: s,
                components: a = {},
                componentsProps: l = {},
                describeChild: c = !1,
                disableFocusListener: d = !1,
                disableHoverListener: p = !1,
                disableInteractive: b = !1,
                disableTouchListener: h = !1,
                enterDelay: g = 100,
                enterNextDelay: m = 0,
                enterTouchDelay: v = 700,
                followCursor: x = !1,
                id: w,
                leaveDelay: S = 0,
                leaveTouchDelay: y = 1500,
                onClose: C,
                onOpen: R,
                open: k,
                placement: E = "bottom",
                PopperComponent: O,
                PopperProps: M = {},
                slotProps: B = {},
                slots: f = {},
                title: P,
                TransitionComponent: T,
                TransitionProps: I,
                ...A
            } = r,
            z = u.isValidElement(i) ? i : $.jsx("span", {
                children: i
            }),
            W = Gt(),
            F = Uo(),
            [U, ie] = u.useState(),
            [ee, J] = u.useState(null),
            ue = u.useRef(!1),
            _ = b || x,
            D = Yt(),
            V = Yt(),
            se = Yt(),
            me = Yt(),
            [X, pe] = hr({
                controlled: k,
                default: !1,
                name: "Tooltip",
                state: "open"
            });
        let ce = X;
        const de = ho(w),
            ne = u.useRef(),
            fe = it(() => {
                ne.current !== void 0 && (document.body.style.WebkitUserSelect = ne.current, ne.current = void 0), me.clear()
            });
        u.useEffect(() => fe, [fe]);
        const Ne = ge => {
                Oa.clear(), jr = !0, pe(!0), R && !ce && R(ge)
            },
            xe = it(ge => {
                Oa.start(800 + S, () => {
                    jr = !1
                }), pe(!1), C && ce && C(ge), D.start(W.transitions.duration.shortest, () => {
                    ue.current = !1
                })
            }),
            ye = ge => {
                ue.current && ge.type !== "touchstart" || (U && U.removeAttribute("title"), V.clear(), se.clear(), g || jr && m ? V.start(jr ? m : g, () => {
                    Ne(ge)
                }) : Ne(ge))
            },
            Se = ge => {
                V.clear(), se.start(S, () => {
                    xe(ge)
                })
            },
            [, Ce] = u.useState(!1),
            be = ge => {
                Bo(ge.target) || (Ce(!1), Se(ge))
            },
            q = ge => {
                U || ie(ge.currentTarget), Bo(ge.target) && (Ce(!0), ye(ge))
            },
            qe = ge => {
                ue.current = !0;
                const ut = z.props;
                ut.onTouchStart && ut.onTouchStart(ge)
            },
            Ee = ge => {
                qe(ge), se.clear(), D.clear(), fe(), ne.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", me.start(v, () => {
                    document.body.style.WebkitUserSelect = ne.current, ye(ge)
                })
            },
            tt = ge => {
                z.props.onTouchEnd && z.props.onTouchEnd(ge), fe(), se.start(y, () => {
                    xe(ge)
                })
            };
        u.useEffect(() => {
            if (!ce) return;

            function ge(ut) {
                ut.key === "Escape" && xe(ut)
            }
            return document.addEventListener("keydown", ge), () => {
                document.removeEventListener("keydown", ge)
            }
        }, [xe, ce]);
        const rt = _e(yo(z), ie, o);
        !P && P !== 0 && (ce = !1);
        const Qe = u.useRef(),
            Xe = ge => {
                const ut = z.props;
                ut.onMouseMove && ut.onMouseMove(ge), er = {
                    x: ge.clientX,
                    y: ge.clientY
                }, Qe.current && Qe.current.update()
            },
            Je = {},
            Pe = typeof P == "string";
        c ? (Je.title = !ce && Pe && !p ? P : null, Je["aria-describedby"] = ce ? de : null) : (Je["aria-label"] = Pe ? P : null, Je["aria-labelledby"] = ce && !Pe ? de : null);
        const re = { ...Je,
                ...A,
                ...z.props,
                className: H(A.className, z.props.className),
                onTouchStart: qe,
                ref: rt,
                ...x ? {
                    onMouseMove: Xe
                } : {}
            },
            Fe = {};
        h || (re.onTouchStart = Ee, re.onTouchEnd = tt), p || (re.onMouseOver = zr(ye, re.onMouseOver), re.onMouseLeave = zr(Se, re.onMouseLeave), _ || (Fe.onMouseOver = ye, Fe.onMouseLeave = Se)), d || (re.onFocus = zr(q, re.onFocus), re.onBlur = zr(be, re.onBlur), _ || (Fe.onFocus = q, Fe.onBlur = be));
        const je = { ...r,
                isRtl: F,
                arrow: n,
                disableInteractive: _,
                placement: E,
                PopperComponentProp: O,
                touch: ue.current
            },
            Me = typeof B.popper == "function" ? B.popper(je) : B.popper,
            $t = u.useMemo(() => {
                var ut, G;
                let ge = [{
                    name: "arrow",
                    enabled: !!ee,
                    options: {
                        element: ee,
                        padding: 4
                    }
                }];
                return (ut = M.popperOptions) != null && ut.modifiers && (ge = ge.concat(M.popperOptions.modifiers)), (G = Me == null ? void 0 : Me.popperOptions) != null && G.modifiers && (ge = ge.concat(Me.popperOptions.modifiers)), { ...M.popperOptions,
                    ...Me == null ? void 0 : Me.popperOptions,
                    modifiers: ge
                }
            }, [ee, M.popperOptions, Me == null ? void 0 : Me.popperOptions]),
            Kt = Zv(je),
            xo = typeof B.transition == "function" ? B.transition(je) : B.transition,
            Et = {
                slots: {
                    popper: a.Popper,
                    transition: a.Transition ? ? T,
                    tooltip: a.Tooltip,
                    arrow: a.Arrow,
                    ...f
                },
                slotProps: {
                    arrow: B.arrow ? ? l.arrow,
                    popper: { ...M,
                        ...Me ? ? l.popper
                    },
                    tooltip: B.tooltip ? ? l.tooltip,
                    transition: { ...I,
                        ...xo ? ? l.transition
                    }
                }
            },
            [le, Ie] = te("popper", {
                elementType: e0,
                externalForwardedProps: Et,
                ownerState: je,
                className: H(Kt.popper, M == null ? void 0 : M.className)
            }),
            [Ve, ht] = te("transition", {
                elementType: xr,
                externalForwardedProps: Et,
                ownerState: je
            }),
            [So, En] = te("tooltip", {
                elementType: t0,
                className: Kt.tooltip,
                externalForwardedProps: Et,
                ownerState: je
            }),
            [Mn, In] = te("arrow", {
                elementType: o0,
                className: Kt.arrow,
                externalForwardedProps: Et,
                ownerState: je,
                ref: J
            });
        return $.jsxs(u.Fragment, {
            children: [u.cloneElement(z, re), $.jsx(le, {
                as: O ? ? nc,
                placement: E,
                anchorEl: x ? {
                    getBoundingClientRect: () => ({
                        top: er.y,
                        left: er.x,
                        right: er.x,
                        bottom: er.y,
                        width: 0,
                        height: 0
                    })
                } : U,
                popperRef: Qe,
                open: U ? ce : !1,
                id: de,
                transition: !0,
                ...Fe,
                ...Ie,
                popperOptions: $t,
                children: ({
                    TransitionProps: ge
                }) => $.jsx(Ve, {
                    timeout: W.transitions.duration.shorter,
                    ...ge,
                    ...ht,
                    children: $.jsxs(So, { ...En,
                        children: [P, n ? $.jsx(Mn, { ...In
                        }) : null]
                    })
                })
            })]
        })
    }),
    Lx = Ip({
        createStyledComponent: j("div", {
            name: "MuiStack",
            slot: "Root"
        }),
        useThemeProps: e => oe({
            props: e,
            name: "MuiStack"
        })
    });

function r0(e) {
    return Y("MuiSwitch", e)
}
const nt = K("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]),
    n0 = e => {
        const {
            classes: t,
            edge: o,
            size: r,
            color: n,
            checked: i,
            disabled: s
        } = e, a = {
            root: ["root", o && `edge${L(o)}`, `size${L(r)}`],
            switchBase: ["switchBase", `color${L(n)}`, i && "checked", s && "disabled"],
            thumb: ["thumb"],
            track: ["track"],
            input: ["input"]
        }, l = Q(a, r0, t);
        return { ...t,
            ...l
        }
    },
    i0 = j("span", {
        name: "MuiSwitch",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.edge && t[`edge${L(o.edge)}`], t[`size${L(o.size)}`]]
        }
    })({
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": {
            colorAdjust: "exact"
        },
        variants: [{
            props: {
                edge: "start"
            },
            style: {
                marginLeft: -8
            }
        }, {
            props: {
                edge: "end"
            },
            style: {
                marginRight: -8
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                width: 40,
                height: 24,
                padding: 7,
                [`& .${nt.thumb}`]: {
                    width: 16,
                    height: 16
                },
                [`& .${nt.switchBase}`]: {
                    padding: 4,
                    [`&.${nt.checked}`]: {
                        transform: "translateX(16px)"
                    }
                }
            }
        }]
    }),
    s0 = j(cc, {
        name: "MuiSwitch",
        slot: "SwitchBase",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.switchBase, {
                [`& .${nt.input}`]: t.input
            }, o.color !== "default" && t[`color${L(o.color)}`]]
        }
    })(Z(({
        theme: e
    }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,
        transition: e.transitions.create(["left", "transform"], {
            duration: e.transitions.duration.shortest
        }),
        [`&.${nt.checked}`]: {
            transform: "translateX(20px)"
        },
        [`&.${nt.disabled}`]: {
            color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`
        },
        [`&.${nt.checked} + .${nt.track}`]: {
            opacity: .5
        },
        [`&.${nt.disabled} + .${nt.track}`]: {
            opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode==="light"?.12:.2}`
        },
        [`& .${nt.input}`]: {
            left: "-100%",
            width: "300%"
        }
    })), Z(({
        theme: e
    }) => ({
        "&:hover": {
            backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        variants: [...Object.entries(e.palette).filter(Le(["light"])).map(([t]) => ({
            props: {
                color: t
            },
            style: {
                [`&.${nt.checked}`]: {
                    color: (e.vars || e).palette[t].main,
                    "&:hover": {
                        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    [`&.${nt.disabled}`]: {
                        color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode==="light"?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.55)}`
                    }
                },
                [`&.${nt.checked} + .${nt.track}`]: {
                    backgroundColor: (e.vars || e).palette[t].main
                }
            }
        }))]
    }))),
    a0 = j("span", {
        name: "MuiSwitch",
        slot: "Track"
    })(Z(({
        theme: e
    }) => ({
        height: "100%",
        width: "100%",
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: e.transitions.create(["opacity", "background-color"], {
            duration: e.transitions.duration.shortest
        }),
        backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,
        opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode==="light"?.38:.3}`
    }))),
    l0 = j("span", {
        name: "MuiSwitch",
        slot: "Thumb"
    })(Z(({
        theme: e
    }) => ({
        boxShadow: (e.vars || e).shadows[1],
        backgroundColor: "currentColor",
        width: 20,
        height: 20,
        borderRadius: "50%"
    }))),
    Nx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiSwitch"
            }),
            {
                className: n,
                color: i = "primary",
                edge: s = !1,
                size: a = "medium",
                sx: l,
                slots: c = {},
                slotProps: d = {},
                ...p
            } = r,
            b = { ...r,
                color: i,
                edge: s,
                size: a
            },
            h = n0(b),
            g = {
                slots: c,
                slotProps: d
            },
            [m, v] = te("root", {
                className: H(h.root, n),
                elementType: i0,
                externalForwardedProps: g,
                ownerState: b,
                additionalProps: {
                    sx: l
                }
            }),
            [x, w] = te("thumb", {
                className: h.thumb,
                elementType: l0,
                externalForwardedProps: g,
                ownerState: b
            }),
            S = $.jsx(x, { ...w
            }),
            [y, C] = te("track", {
                className: h.track,
                elementType: a0,
                externalForwardedProps: g,
                ownerState: b
            });
        return $.jsxs(m, { ...v,
            children: [$.jsx(s0, {
                type: "checkbox",
                icon: S,
                checkedIcon: S,
                ref: o,
                ownerState: b,
                ...p,
                classes: { ...h,
                    root: h.switchBase
                },
                slots: { ...c.switchBase && {
                        root: c.switchBase
                    },
                    ...c.input && {
                        input: c.input
                    }
                },
                slotProps: { ...d.switchBase && {
                        root: typeof d.switchBase == "function" ? d.switchBase(b) : d.switchBase
                    },
                    input: {
                        role: "switch"
                    },
                    ...d.input && {
                        input: typeof d.input == "function" ? d.input(b) : d.input
                    }
                }
            }), $.jsx(y, { ...C
            })]
        })
    });

function c0(e) {
    return Y("MuiTab", e)
}
const bt = K("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]),
    d0 = e => {
        const {
            classes: t,
            textColor: o,
            fullWidth: r,
            wrapped: n,
            icon: i,
            label: s,
            selected: a,
            disabled: l
        } = e, c = {
            root: ["root", i && s && "labelIcon", `textColor${L(o)}`, r && "fullWidth", n && "wrapped", a && "selected", l && "disabled"],
            icon: ["iconWrapper", "icon"]
        };
        return Q(c, c0, t)
    },
    u0 = j(_t, {
        name: "MuiTab",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${L(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
                [`& .${bt.iconWrapper}`]: t.iconWrapper
            }, {
                [`& .${bt.icon}`]: t.icon
            }]
        }
    })(Z(({
        theme: e
    }) => ({ ...e.typography.button,
        maxWidth: 360,
        minWidth: 90,
        position: "relative",
        minHeight: 48,
        flexShrink: 0,
        padding: "12px 16px",
        overflow: "hidden",
        whiteSpace: "normal",
        textAlign: "center",
        lineHeight: 1.25,
        variants: [{
            props: ({
                ownerState: t
            }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
            style: {
                flexDirection: "column"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
            style: {
                flexDirection: "row"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.icon && t.label,
            style: {
                minHeight: 72,
                paddingTop: 9,
                paddingBottom: 9
            }
        }, {
            props: ({
                ownerState: t,
                iconPosition: o
            }) => t.icon && t.label && o === "top",
            style: {
                [`& > .${bt.icon}`]: {
                    marginBottom: 6
                }
            }
        }, {
            props: ({
                ownerState: t,
                iconPosition: o
            }) => t.icon && t.label && o === "bottom",
            style: {
                [`& > .${bt.icon}`]: {
                    marginTop: 6
                }
            }
        }, {
            props: ({
                ownerState: t,
                iconPosition: o
            }) => t.icon && t.label && o === "start",
            style: {
                [`& > .${bt.icon}`]: {
                    marginRight: e.spacing(1)
                }
            }
        }, {
            props: ({
                ownerState: t,
                iconPosition: o
            }) => t.icon && t.label && o === "end",
            style: {
                [`& > .${bt.icon}`]: {
                    marginLeft: e.spacing(1)
                }
            }
        }, {
            props: {
                textColor: "inherit"
            },
            style: {
                color: "inherit",
                opacity: .6,
                [`&.${bt.selected}`]: {
                    opacity: 1
                },
                [`&.${bt.disabled}`]: {
                    opacity: (e.vars || e).palette.action.disabledOpacity
                }
            }
        }, {
            props: {
                textColor: "primary"
            },
            style: {
                color: (e.vars || e).palette.text.secondary,
                [`&.${bt.selected}`]: {
                    color: (e.vars || e).palette.primary.main
                },
                [`&.${bt.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled
                }
            }
        }, {
            props: {
                textColor: "secondary"
            },
            style: {
                color: (e.vars || e).palette.text.secondary,
                [`&.${bt.selected}`]: {
                    color: (e.vars || e).palette.secondary.main
                },
                [`&.${bt.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled
                }
            }
        }, {
            props: ({
                ownerState: t
            }) => t.fullWidth,
            style: {
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0,
                maxWidth: "none"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.wrapped,
            style: {
                fontSize: e.typography.pxToRem(12)
            }
        }]
    }))),
    jx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTab"
            }),
            {
                className: n,
                disabled: i = !1,
                disableFocusRipple: s = !1,
                fullWidth: a,
                icon: l,
                iconPosition: c = "top",
                indicator: d,
                label: p,
                onChange: b,
                onClick: h,
                onFocus: g,
                selected: m,
                selectionFollowsFocus: v,
                textColor: x = "inherit",
                value: w,
                wrapped: S = !1,
                ...y
            } = r,
            C = { ...r,
                disabled: i,
                disableFocusRipple: s,
                selected: m,
                icon: !!l,
                iconPosition: c,
                label: !!p,
                fullWidth: a,
                textColor: x,
                wrapped: S
            },
            R = d0(C),
            k = l && p && u.isValidElement(l) ? u.cloneElement(l, {
                className: H(R.icon, l.props.className)
            }) : l,
            E = M => {
                !m && b && b(M, w), h && h(M)
            },
            O = M => {
                v && !m && b && b(M, w), g && g(M)
            };
        return $.jsxs(u0, {
            focusRipple: !s,
            className: H(R.root, n),
            ref: o,
            role: "tab",
            "aria-selected": m,
            disabled: i,
            onClick: E,
            onFocus: O,
            ownerState: C,
            tabIndex: m ? 0 : -1,
            ...y,
            children: [c === "top" || c === "start" ? $.jsxs(u.Fragment, {
                children: [k, p]
            }) : $.jsxs(u.Fragment, {
                children: [p, k]
            }), d]
        })
    }),
    Sc = u.createContext();

function p0(e) {
    return Y("MuiTable", e)
}
K("MuiTable", ["root", "stickyHeader"]);
const f0 = e => {
        const {
            classes: t,
            stickyHeader: o
        } = e;
        return Q({
            root: ["root", o && "stickyHeader"]
        }, p0, t)
    },
    m0 = j("table", {
        name: "MuiTable",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.stickyHeader && t.stickyHeader]
        }
    })(Z(({
        theme: e
    }) => ({
        display: "table",
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        "& caption": { ...e.typography.body2,
            padding: e.spacing(2),
            color: (e.vars || e).palette.text.secondary,
            textAlign: "left",
            captionSide: "bottom"
        },
        variants: [{
            props: ({
                ownerState: t
            }) => t.stickyHeader,
            style: {
                borderCollapse: "separate"
            }
        }]
    }))),
    Ba = "table",
    zx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTable"
            }),
            {
                className: n,
                component: i = Ba,
                padding: s = "normal",
                size: a = "medium",
                stickyHeader: l = !1,
                ...c
            } = r,
            d = { ...r,
                component: i,
                padding: s,
                size: a,
                stickyHeader: l
            },
            p = f0(d),
            b = u.useMemo(() => ({
                padding: s,
                size: a,
                stickyHeader: l
            }), [s, a, l]);
        return $.jsx(Sc.Provider, {
            value: b,
            children: $.jsx(m0, {
                as: i,
                role: i === Ba ? null : "table",
                ref: o,
                className: H(p.root, n),
                ownerState: d,
                ...c
            })
        })
    }),
    Tn = u.createContext();

function g0(e) {
    return Y("MuiTableBody", e)
}
K("MuiTableBody", ["root"]);
const h0 = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, g0, t)
    },
    b0 = j("tbody", {
        name: "MuiTableBody",
        slot: "Root"
    })({
        display: "table-row-group"
    }),
    y0 = {
        variant: "body"
    },
    La = "tbody",
    Fx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTableBody"
            }),
            {
                className: n,
                component: i = La,
                ...s
            } = r,
            a = { ...r,
                component: i
            },
            l = h0(a);
        return $.jsx(Tn.Provider, {
            value: y0,
            children: $.jsx(b0, {
                className: H(l.root, n),
                as: i,
                ref: o,
                role: i === La ? null : "rowgroup",
                ownerState: a,
                ...s
            })
        })
    });

function v0(e) {
    return Y("MuiTableCell", e)
}
const x0 = K("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]),
    S0 = e => {
        const {
            classes: t,
            variant: o,
            align: r,
            padding: n,
            size: i,
            stickyHeader: s
        } = e, a = {
            root: ["root", o, s && "stickyHeader", r !== "inherit" && `align${L(r)}`, n !== "normal" && `padding${L(n)}`, `size${L(i)}`]
        };
        return Q(a, v0, t)
    },
    C0 = j("td", {
        name: "MuiTableCell",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, t[o.variant], t[`size${L(o.size)}`], o.padding !== "normal" && t[`padding${L(o.padding)}`], o.align !== "inherit" && t[`align${L(o.align)}`], o.stickyHeader && t.stickyHeader]
        }
    })(Z(({
        theme: e
    }) => ({ ...e.typography.body2,
        display: "table-cell",
        verticalAlign: "inherit",
        borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode==="light"?e.lighten(e.alpha(e.palette.divider,1),.88):e.darken(e.alpha(e.palette.divider,1),.68)}`,
        textAlign: "left",
        padding: 16,
        variants: [{
            props: {
                variant: "head"
            },
            style: {
                color: (e.vars || e).palette.text.primary,
                lineHeight: e.typography.pxToRem(24),
                fontWeight: e.typography.fontWeightMedium
            }
        }, {
            props: {
                variant: "body"
            },
            style: {
                color: (e.vars || e).palette.text.primary
            }
        }, {
            props: {
                variant: "footer"
            },
            style: {
                color: (e.vars || e).palette.text.secondary,
                lineHeight: e.typography.pxToRem(21),
                fontSize: e.typography.pxToRem(12)
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                padding: "6px 16px",
                [`&.${x0.paddingCheckbox}`]: {
                    width: 24,
                    padding: "0 12px 0 16px",
                    "& > *": {
                        padding: 0
                    }
                }
            }
        }, {
            props: {
                padding: "checkbox"
            },
            style: {
                width: 48,
                padding: "0 0 0 4px"
            }
        }, {
            props: {
                padding: "none"
            },
            style: {
                padding: 0
            }
        }, {
            props: {
                align: "left"
            },
            style: {
                textAlign: "left"
            }
        }, {
            props: {
                align: "center"
            },
            style: {
                textAlign: "center"
            }
        }, {
            props: {
                align: "right"
            },
            style: {
                textAlign: "right",
                flexDirection: "row-reverse"
            }
        }, {
            props: {
                align: "justify"
            },
            style: {
                textAlign: "justify"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.stickyHeader,
            style: {
                position: "sticky",
                top: 0,
                zIndex: 2,
                backgroundColor: (e.vars || e).palette.background.default
            }
        }]
    }))),
    Dx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTableCell"
            }),
            {
                align: n = "inherit",
                className: i,
                component: s,
                padding: a,
                scope: l,
                size: c,
                sortDirection: d,
                variant: p,
                ...b
            } = r,
            h = u.useContext(Sc),
            g = u.useContext(Tn),
            m = g && g.variant === "head";
        let v;
        s ? v = s : v = m ? "th" : "td";
        let x = l;
        v === "td" ? x = void 0 : !x && m && (x = "col");
        const w = p || g && g.variant,
            S = { ...r,
                align: n,
                component: v,
                padding: a || (h && h.padding ? h.padding : "normal"),
                size: c || (h && h.size ? h.size : "medium"),
                sortDirection: d,
                stickyHeader: w === "head" && h && h.stickyHeader,
                variant: w
            },
            y = S0(S);
        let C = null;
        return d && (C = d === "asc" ? "ascending" : "descending"), $.jsx(C0, {
            as: v,
            ref: o,
            className: H(y.root, i),
            "aria-sort": C,
            scope: x,
            ownerState: S,
            ...b
        })
    });

function w0(e) {
    return Y("MuiTableContainer", e)
}
K("MuiTableContainer", ["root"]);
const R0 = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, w0, t)
    },
    $0 = j("div", {
        name: "MuiTableContainer",
        slot: "Root"
    })({
        width: "100%",
        overflowX: "auto"
    }),
    Wx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTableContainer"
            }),
            {
                className: n,
                component: i = "div",
                ...s
            } = r,
            a = { ...r,
                component: i
            },
            l = R0(a);
        return $.jsx($0, {
            ref: o,
            as: i,
            className: H(l.root, n),
            ownerState: a,
            ...s
        })
    });

function k0(e) {
    return Y("MuiTableHead", e)
}
K("MuiTableHead", ["root"]);
const P0 = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, k0, t)
    },
    T0 = j("thead", {
        name: "MuiTableHead",
        slot: "Root"
    })({
        display: "table-header-group"
    }),
    E0 = {
        variant: "head"
    },
    Na = "thead",
    Hx = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTableHead"
            }),
            {
                className: n,
                component: i = Na,
                ...s
            } = r,
            a = { ...r,
                component: i
            },
            l = P0(a);
        return $.jsx(Tn.Provider, {
            value: E0,
            children: $.jsx(T0, {
                as: i,
                className: H(l.root, n),
                ref: o,
                role: i === Na ? null : "rowgroup",
                ownerState: a,
                ...s
            })
        })
    }),
    M0 = gt($.jsx("path", {
        d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
    })),
    I0 = gt($.jsx("path", {
        d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }));

function A0(e) {
    return Y("MuiTableRow", e)
}
const ja = K("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
    O0 = e => {
        const {
            classes: t,
            selected: o,
            hover: r,
            head: n,
            footer: i
        } = e;
        return Q({
            root: ["root", o && "selected", r && "hover", n && "head", i && "footer"]
        }, A0, t)
    },
    B0 = j("tr", {
        name: "MuiTableRow",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.head && t.head, o.footer && t.footer]
        }
    })(Z(({
        theme: e
    }) => ({
        color: "inherit",
        display: "table-row",
        verticalAlign: "middle",
        outline: 0,
        [`&.${ja.hover}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ja.selected}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
            "&:hover": {
                backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)
            }
        }
    }))),
    za = "tr",
    Ux = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTableRow"
            }),
            {
                className: n,
                component: i = za,
                hover: s = !1,
                selected: a = !1,
                ...l
            } = r,
            c = u.useContext(Tn),
            d = { ...r,
                component: i,
                hover: s,
                selected: a,
                head: c && c.variant === "head",
                footer: c && c.variant === "footer"
            },
            p = O0(d);
        return $.jsx(B0, {
            as: i,
            ref: o,
            className: H(p.root, n),
            role: i === za ? null : "row",
            ownerState: d,
            ...l
        })
    });

function L0(e) {
    return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
}

function N0(e, t, o, r = {}, n = () => {}) {
    const {
        ease: i = L0,
        duration: s = 300
    } = r;
    let a = null;
    const l = t[e];
    let c = !1;
    const d = () => {
            c = !0
        },
        p = b => {
            if (c) {
                n(new Error("Animation cancelled"));
                return
            }
            a === null && (a = b);
            const h = Math.min(1, (b - a) / s);
            if (t[e] = i(h) * (o - l) + l, h >= 1) {
                requestAnimationFrame(() => {
                    n(null)
                });
                return
            }
            requestAnimationFrame(p)
        };
    return l === o ? (n(new Error("Element already at target position")), d) : (requestAnimationFrame(p), d)
}
const j0 = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll"
};

function z0(e) {
    const {
        onChange: t,
        ...o
    } = e, r = u.useRef(), n = u.useRef(null), i = () => {
        r.current = n.current.offsetHeight - n.current.clientHeight
    };
    return ct(() => {
        const s = Sn(() => {
                const l = r.current;
                i(), l !== r.current && t(r.current)
            }),
            a = Pt(n.current);
        return a.addEventListener("resize", s), () => {
            s.clear(), a.removeEventListener("resize", s)
        }
    }, [t]), u.useEffect(() => {
        i(), t(r.current)
    }, [t]), $.jsx("div", {
        style: j0,
        ...o,
        ref: n
    })
}

function F0(e) {
    return Y("MuiTabScrollButton", e)
}
const D0 = K("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]),
    W0 = e => {
        const {
            classes: t,
            orientation: o,
            disabled: r
        } = e;
        return Q({
            root: ["root", o, r && "disabled"]
        }, F0, t)
    },
    H0 = j(_t, {
        name: "MuiTabScrollButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.root, o.orientation && t[o.orientation]]
        }
    })({
        width: 40,
        flexShrink: 0,
        opacity: .8,
        [`&.${D0.disabled}`]: {
            opacity: 0
        },
        variants: [{
            props: {
                orientation: "vertical"
            },
            style: {
                width: "100%",
                height: 40,
                "& svg": {
                    transform: "var(--TabScrollButton-svgRotate)"
                }
            }
        }]
    }),
    U0 = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTabScrollButton"
            }),
            {
                className: n,
                slots: i = {},
                slotProps: s = {},
                direction: a,
                orientation: l,
                disabled: c,
                ...d
            } = r,
            p = Uo(),
            b = {
                isRtl: p,
                ...r
            },
            h = W0(b),
            g = i.StartScrollButtonIcon ? ? M0,
            m = i.EndScrollButtonIcon ? ? I0,
            v = Fo({
                elementType: g,
                externalSlotProps: s.startScrollButtonIcon,
                additionalProps: {
                    fontSize: "small"
                },
                ownerState: b
            }),
            x = Fo({
                elementType: m,
                externalSlotProps: s.endScrollButtonIcon,
                additionalProps: {
                    fontSize: "small"
                },
                ownerState: b
            });
        return $.jsx(H0, {
            component: "div",
            className: H(h.root, n),
            ref: o,
            role: null,
            ownerState: b,
            tabIndex: null,
            ...d,
            style: { ...d.style,
                ...l === "vertical" && {
                    "--TabScrollButton-svgRotate": `rotate(${p?-90:90}deg)`
                }
            },
            children: a === "left" ? $.jsx(g, { ...v
            }) : $.jsx(m, { ...x
            })
        })
    });

function _0(e) {
    return Y("MuiTabs", e)
}
const Qn = K("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]),
    Fa = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild,
    Da = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild,
    Fr = (e, t, o) => {
        let r = !1,
            n = o(e, t);
        for (; n;) {
            if (n === e.firstChild) {
                if (r) return;
                r = !0
            }
            const i = n.disabled || n.getAttribute("aria-disabled") === "true";
            if (!n.hasAttribute("tabindex") || i) n = o(e, n);
            else {
                n.focus();
                return
            }
        }
    },
    V0 = e => {
        const {
            vertical: t,
            fixed: o,
            hideScrollbar: r,
            scrollableX: n,
            scrollableY: i,
            centered: s,
            scrollButtonsHideMobile: a,
            classes: l
        } = e;
        return Q({
            root: ["root", t && "vertical"],
            scroller: ["scroller", o && "fixed", r && "hideScrollbar", n && "scrollableX", i && "scrollableY"],
            list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", s && "centered"],
            indicator: ["indicator"],
            scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
            scrollableX: [n && "scrollableX"],
            hideScrollbar: [r && "hideScrollbar"]
        }, _0, l)
    },
    G0 = j("div", {
        name: "MuiTabs",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [{
                [`& .${Qn.scrollButtons}`]: t.scrollButtons
            }, {
                [`& .${Qn.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
            }, t.root, o.vertical && t.vertical]
        }
    })(Z(({
        theme: e
    }) => ({
        overflow: "hidden",
        minHeight: 48,
        WebkitOverflowScrolling: "touch",
        display: "flex",
        variants: [{
            props: ({
                ownerState: t
            }) => t.vertical,
            style: {
                flexDirection: "column"
            }
        }, {
            props: ({
                ownerState: t
            }) => t.scrollButtonsHideMobile,
            style: {
                [`& .${Qn.scrollButtons}`]: {
                    [e.breakpoints.down("sm")]: {
                        display: "none"
                    }
                }
            }
        }]
    }))),
    K0 = j("div", {
        name: "MuiTabs",
        slot: "Scroller",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.scroller, o.fixed && t.fixed, o.hideScrollbar && t.hideScrollbar, o.scrollableX && t.scrollableX, o.scrollableY && t.scrollableY]
        }
    })({
        position: "relative",
        display: "inline-block",
        flex: "1 1 auto",
        whiteSpace: "nowrap",
        variants: [{
            props: ({
                ownerState: e
            }) => e.fixed,
            style: {
                overflowX: "hidden",
                width: "100%"
            }
        }, {
            props: ({
                ownerState: e
            }) => e.hideScrollbar,
            style: {
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }
        }, {
            props: ({
                ownerState: e
            }) => e.scrollableX,
            style: {
                overflowX: "auto",
                overflowY: "hidden"
            }
        }, {
            props: ({
                ownerState: e
            }) => e.scrollableY,
            style: {
                overflowY: "auto",
                overflowX: "hidden"
            }
        }]
    }),
    q0 = j("div", {
        name: "MuiTabs",
        slot: "List",
        overridesResolver: (e, t) => {
            const {
                ownerState: o
            } = e;
            return [t.list, t.flexContainer, o.vertical && t.flexContainerVertical, o.centered && t.centered]
        }
    })({
        display: "flex",
        variants: [{
            props: ({
                ownerState: e
            }) => e.vertical,
            style: {
                flexDirection: "column"
            }
        }, {
            props: ({
                ownerState: e
            }) => e.centered,
            style: {
                justifyContent: "center"
            }
        }]
    }),
    X0 = j("span", {
        name: "MuiTabs",
        slot: "Indicator"
    })(Z(({
        theme: e
    }) => ({
        position: "absolute",
        height: 2,
        bottom: 0,
        width: "100%",
        transition: e.transitions.create(),
        variants: [{
            props: {
                indicatorColor: "primary"
            },
            style: {
                backgroundColor: (e.vars || e).palette.primary.main
            }
        }, {
            props: {
                indicatorColor: "secondary"
            },
            style: {
                backgroundColor: (e.vars || e).palette.secondary.main
            }
        }, {
            props: ({
                ownerState: t
            }) => t.vertical,
            style: {
                height: "100%",
                width: 2,
                right: 0
            }
        }]
    }))),
    Y0 = j(z0)({
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }),
    Wa = {},
    Q0 = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTabs"
            }),
            n = Gt(),
            i = Uo(),
            {
                "aria-label": s,
                "aria-labelledby": a,
                action: l,
                centered: c = !1,
                children: d,
                className: p,
                component: b = "div",
                allowScrollButtonsMobile: h = !1,
                indicatorColor: g = "primary",
                onChange: m,
                orientation: v = "horizontal",
                ScrollButtonComponent: x,
                scrollButtons: w = "auto",
                selectionFollowsFocus: S,
                slots: y = {},
                slotProps: C = {},
                TabIndicatorProps: R = {},
                TabScrollButtonProps: k = {},
                textColor: E = "primary",
                value: O,
                variant: M = "standard",
                visibleScrollbar: B = !1,
                ...f
            } = r,
            P = M === "scrollable",
            T = v === "vertical",
            I = T ? "scrollTop" : "scrollLeft",
            A = T ? "top" : "left",
            z = T ? "bottom" : "right",
            W = T ? "clientHeight" : "clientWidth",
            F = T ? "height" : "width",
            U = { ...r,
                component: b,
                allowScrollButtonsMobile: h,
                indicatorColor: g,
                orientation: v,
                vertical: T,
                scrollButtons: w,
                textColor: E,
                variant: M,
                visibleScrollbar: B,
                fixed: !P,
                hideScrollbar: P && !B,
                scrollableX: P && !T,
                scrollableY: P && T,
                centered: c && !P,
                scrollButtonsHideMobile: !h
            },
            ie = V0(U),
            ee = Fo({
                elementType: y.StartScrollButtonIcon,
                externalSlotProps: C.startScrollButtonIcon,
                ownerState: U
            }),
            J = Fo({
                elementType: y.EndScrollButtonIcon,
                externalSlotProps: C.endScrollButtonIcon,
                ownerState: U
            }),
            [ue, _] = u.useState(!1),
            [D, V] = u.useState(Wa),
            [se, me] = u.useState(!1),
            [X, pe] = u.useState(!1),
            [ce, de] = u.useState(!1),
            [ne, fe] = u.useState({
                overflow: "hidden",
                scrollbarWidth: 0
            }),
            Ne = new Map,
            xe = u.useRef(null),
            ye = u.useRef(null),
            Se = {
                slots: y,
                slotProps: {
                    indicator: R,
                    scrollButton: k,
                    ...C
                }
            },
            Ce = () => {
                const G = xe.current;
                let ae;
                if (G) {
                    const Re = G.getBoundingClientRect();
                    ae = {
                        clientWidth: G.clientWidth,
                        scrollLeft: G.scrollLeft,
                        scrollTop: G.scrollTop,
                        scrollWidth: G.scrollWidth,
                        top: Re.top,
                        bottom: Re.bottom,
                        left: Re.left,
                        right: Re.right
                    }
                }
                let we;
                if (G && O !== !1) {
                    const Re = ye.current.children;
                    if (Re.length > 0) {
                        const De = Re[Ne.get(O)];
                        we = De ? De.getBoundingClientRect() : null
                    }
                }
                return {
                    tabsMeta: ae,
                    tabMeta: we
                }
            },
            be = it(() => {
                const {
                    tabsMeta: G,
                    tabMeta: ae
                } = Ce();
                let we = 0,
                    Re;
                T ? (Re = "top", ae && G && (we = ae.top - G.top + G.scrollTop)) : (Re = i ? "right" : "left", ae && G && (we = (i ? -1 : 1) * (ae[Re] - G[Re] + G.scrollLeft)));
                const De = {
                    [Re]: we,
                    [F]: ae ? ae[F] : 0
                };
                if (typeof D[Re] != "number" || typeof D[F] != "number") V(De);
                else {
                    const Mt = Math.abs(D[Re] - De[Re]),
                        ro = Math.abs(D[F] - De[F]);
                    (Mt >= 1 || ro >= 1) && V(De)
                }
            }),
            q = (G, {
                animation: ae = !0
            } = {}) => {
                ae ? N0(I, xe.current, G, {
                    duration: n.transitions.duration.standard
                }) : xe.current[I] = G
            },
            qe = G => {
                let ae = xe.current[I];
                T ? ae += G : ae += G * (i ? -1 : 1), q(ae)
            },
            Ee = () => {
                const G = xe.current[W];
                let ae = 0;
                const we = Array.from(ye.current.children);
                for (let Re = 0; Re < we.length; Re += 1) {
                    const De = we[Re];
                    if (ae + De[W] > G) {
                        Re === 0 && (ae = G);
                        break
                    }
                    ae += De[W]
                }
                return ae
            },
            tt = () => {
                qe(-1 * Ee())
            },
            rt = () => {
                qe(Ee())
            },
            [Qe, {
                onChange: Xe,
                ...Je
            }] = te("scrollbar", {
                className: H(ie.scrollableX, ie.hideScrollbar),
                elementType: Y0,
                shouldForwardComponentProp: !0,
                externalForwardedProps: Se,
                ownerState: U
            }),
            Pe = u.useCallback(G => {
                Xe == null || Xe(G), fe({
                    overflow: null,
                    scrollbarWidth: G
                })
            }, [Xe]),
            [re, Fe] = te("scrollButtons", {
                className: H(ie.scrollButtons, k.className),
                elementType: U0,
                externalForwardedProps: Se,
                ownerState: U,
                additionalProps: {
                    orientation: v,
                    slots: {
                        StartScrollButtonIcon: y.startScrollButtonIcon || y.StartScrollButtonIcon,
                        EndScrollButtonIcon: y.endScrollButtonIcon || y.EndScrollButtonIcon
                    },
                    slotProps: {
                        startScrollButtonIcon: ee,
                        endScrollButtonIcon: J
                    }
                }
            }),
            je = () => {
                const G = {};
                G.scrollbarSizeListener = P ? $.jsx(Qe, { ...Je,
                    onChange: Pe
                }) : null;
                const we = P && (w === "auto" && (se || X) || w === !0);
                return G.scrollButtonStart = we ? $.jsx(re, {
                    direction: i ? "right" : "left",
                    onClick: tt,
                    disabled: !se,
                    ...Fe
                }) : null, G.scrollButtonEnd = we ? $.jsx(re, {
                    direction: i ? "left" : "right",
                    onClick: rt,
                    disabled: !X,
                    ...Fe
                }) : null, G
            },
            Me = it(G => {
                const {
                    tabsMeta: ae,
                    tabMeta: we
                } = Ce();
                if (!(!we || !ae)) {
                    if (we[A] < ae[A]) {
                        const Re = ae[I] + (we[A] - ae[A]);
                        q(Re, {
                            animation: G
                        })
                    } else if (we[z] > ae[z]) {
                        const Re = ae[I] + (we[z] - ae[z]);
                        q(Re, {
                            animation: G
                        })
                    }
                }
            }),
            $t = it(() => {
                P && w !== !1 && de(!ce)
            });
        u.useEffect(() => {
            const G = Sn(() => {
                xe.current && be()
            });
            let ae;
            const we = Mt => {
                    Mt.forEach(ro => {
                        ro.removedNodes.forEach(_o => {
                            ae == null || ae.unobserve(_o)
                        }), ro.addedNodes.forEach(_o => {
                            ae == null || ae.observe(_o)
                        })
                    }), G(), $t()
                },
                Re = Pt(xe.current);
            Re.addEventListener("resize", G);
            let De;
            return typeof ResizeObserver < "u" && (ae = new ResizeObserver(G), Array.from(ye.current.children).forEach(Mt => {
                ae.observe(Mt)
            })), typeof MutationObserver < "u" && (De = new MutationObserver(we), De.observe(ye.current, {
                childList: !0
            })), () => {
                G.clear(), Re.removeEventListener("resize", G), De == null || De.disconnect(), ae == null || ae.disconnect()
            }
        }, [be, $t]), u.useEffect(() => {
            const G = Array.from(ye.current.children),
                ae = G.length;
            if (typeof IntersectionObserver < "u" && ae > 0 && P && w !== !1) {
                const we = G[0],
                    Re = G[ae - 1],
                    De = {
                        root: xe.current,
                        threshold: .99
                    },
                    Mt = An => {
                        me(!An[0].isIntersecting)
                    },
                    ro = new IntersectionObserver(Mt, De);
                ro.observe(we);
                const _o = An => {
                        pe(!An[0].isIntersecting)
                    },
                    as = new IntersectionObserver(_o, De);
                return as.observe(Re), () => {
                    ro.disconnect(), as.disconnect()
                }
            }
        }, [P, w, ce, d == null ? void 0 : d.length]), u.useEffect(() => {
            _(!0)
        }, []), u.useEffect(() => {
            be()
        }), u.useEffect(() => {
            Me(Wa !== D)
        }, [Me, D]), u.useImperativeHandle(l, () => ({
            updateIndicator: be,
            updateScrollButtons: $t
        }), [be, $t]);
        const [Kt, xo] = te("indicator", {
            className: H(ie.indicator, R.className),
            elementType: X0,
            externalForwardedProps: Se,
            ownerState: U,
            additionalProps: {
                style: D
            }
        }), Et = $.jsx(Kt, { ...xo
        });
        let le = 0;
        const Ie = u.Children.map(d, G => {
                if (!u.isValidElement(G)) return null;
                const ae = G.props.value === void 0 ? le : G.props.value;
                Ne.set(ae, le);
                const we = ae === O;
                return le += 1, u.cloneElement(G, {
                    fullWidth: M === "fullWidth",
                    indicator: we && !ue && Et,
                    selected: we,
                    selectionFollowsFocus: S,
                    onChange: m,
                    textColor: E,
                    value: ae,
                    ...le === 1 && O === !1 && !G.props.tabIndex ? {
                        tabIndex: 0
                    } : {}
                })
            }),
            Ve = G => {
                if (G.altKey || G.shiftKey || G.ctrlKey || G.metaKey) return;
                const ae = ye.current,
                    we = et(ae).activeElement;
                if (we.getAttribute("role") !== "tab") return;
                let De = v === "horizontal" ? "ArrowLeft" : "ArrowUp",
                    Mt = v === "horizontal" ? "ArrowRight" : "ArrowDown";
                switch (v === "horizontal" && i && (De = "ArrowRight", Mt = "ArrowLeft"), G.key) {
                    case De:
                        G.preventDefault(), Fr(ae, we, Da);
                        break;
                    case Mt:
                        G.preventDefault(), Fr(ae, we, Fa);
                        break;
                    case "Home":
                        G.preventDefault(), Fr(ae, null, Fa);
                        break;
                    case "End":
                        G.preventDefault(), Fr(ae, null, Da);
                        break
                }
            },
            ht = je(),
            [So, En] = te("root", {
                ref: o,
                className: H(ie.root, p),
                elementType: G0,
                externalForwardedProps: { ...Se,
                    ...f,
                    component: b
                },
                ownerState: U
            }),
            [Mn, In] = te("scroller", {
                ref: xe,
                className: ie.scroller,
                elementType: K0,
                externalForwardedProps: Se,
                ownerState: U,
                additionalProps: {
                    style: {
                        overflow: ne.overflow,
                        [T ? `margin${i?"Left":"Right"}` : "marginBottom"]: B ? void 0 : -ne.scrollbarWidth
                    }
                }
            }),
            [ge, ut] = te("list", {
                ref: ye,
                className: H(ie.list, ie.flexContainer),
                elementType: q0,
                externalForwardedProps: Se,
                ownerState: U,
                getSlotProps: G => ({ ...G,
                    onKeyDown: ae => {
                        var we;
                        Ve(ae), (we = G.onKeyDown) == null || we.call(G, ae)
                    }
                })
            });
        return $.jsxs(So, { ...En,
            children: [ht.scrollButtonStart, ht.scrollbarSizeListener, $.jsxs(Mn, { ...In,
                children: [$.jsx(ge, {
                    "aria-label": s,
                    "aria-labelledby": a,
                    "aria-orientation": v === "vertical" ? "vertical" : null,
                    role: "tablist",
                    ...ut,
                    children: Ie
                }), ue && Et]
            }), ht.scrollButtonEnd]
        })
    });

function J0(e) {
    return Y("MuiTextField", e)
}
K("MuiTextField", ["root"]);
const Z0 = {
        standard: os,
        filled: ts,
        outlined: is
    },
    ex = e => {
        const {
            classes: t
        } = e;
        return Q({
            root: ["root"]
        }, J0, t)
    },
    tx = j(ay, {
        name: "MuiTextField",
        slot: "Root"
    })({}),
    _x = u.forwardRef(function(t, o) {
        const r = oe({
                props: t,
                name: "MuiTextField"
            }),
            {
                autoComplete: n,
                autoFocus: i = !1,
                children: s,
                className: a,
                color: l = "primary",
                defaultValue: c,
                disabled: d = !1,
                error: p = !1,
                FormHelperTextProps: b,
                fullWidth: h = !1,
                helperText: g,
                id: m,
                InputLabelProps: v,
                inputProps: x,
                InputProps: w,
                inputRef: S,
                label: y,
                maxRows: C,
                minRows: R,
                multiline: k = !1,
                name: E,
                onBlur: O,
                onChange: M,
                onFocus: B,
                placeholder: f,
                required: P = !1,
                rows: T,
                select: I = !1,
                SelectProps: A,
                slots: z = {},
                slotProps: W = {},
                type: F,
                value: U,
                variant: ie = "outlined",
                ...ee
            } = r,
            J = { ...r,
                autoFocus: i,
                color: l,
                disabled: d,
                error: p,
                fullWidth: h,
                multiline: k,
                required: P,
                select: I,
                variant: ie
            },
            ue = ex(J),
            _ = ho(m),
            D = g && _ ? `${_}-helper-text` : void 0,
            V = y && _ ? `${_}-label` : void 0,
            se = Z0[ie],
            me = {
                slots: z,
                slotProps: {
                    input: w,
                    inputLabel: v,
                    htmlInput: x,
                    formHelperText: b,
                    select: A,
                    ...W
                }
            },
            X = {},
            pe = me.slotProps.inputLabel;
        ie === "outlined" && (pe && typeof pe.shrink < "u" && (X.notched = pe.shrink), X.label = y), I && ((!A || !A.native) && (X.id = void 0), X["aria-describedby"] = void 0);
        const [ce, de] = te("root", {
            elementType: tx,
            shouldForwardComponentProp: !0,
            externalForwardedProps: { ...me,
                ...ee
            },
            ownerState: J,
            className: H(ue.root, a),
            ref: o,
            additionalProps: {
                disabled: d,
                error: p,
                fullWidth: h,
                required: P,
                color: l,
                variant: ie
            }
        }), [ne, fe] = te("input", {
            elementType: se,
            externalForwardedProps: me,
            additionalProps: X,
            ownerState: J
        }), [Ne, xe] = te("inputLabel", {
            elementType: Ty,
            externalForwardedProps: me,
            ownerState: J
        }), [ye, Se] = te("htmlInput", {
            elementType: "input",
            externalForwardedProps: me,
            ownerState: J
        }), [Ce, be] = te("formHelperText", {
            elementType: gy,
            externalForwardedProps: me,
            ownerState: J
        }), [q, qe] = te("select", {
            elementType: xc,
            externalForwardedProps: me,
            ownerState: J
        }), Ee = $.jsx(ne, {
            "aria-describedby": D,
            autoComplete: n,
            autoFocus: i,
            defaultValue: c,
            fullWidth: h,
            multiline: k,
            name: E,
            rows: T,
            maxRows: C,
            minRows: R,
            type: F,
            value: U,
            id: _,
            inputRef: S,
            onBlur: O,
            onChange: M,
            onFocus: B,
            placeholder: f,
            inputProps: Se,
            slots: {
                input: z.htmlInput ? ye : void 0
            },
            ...fe
        });
        return $.jsxs(ce, { ...de,
            children: [y != null && y !== "" && $.jsx(Ne, {
                htmlFor: _,
                id: V,
                ...xe,
                children: y
            }), I ? $.jsx(q, {
                "aria-describedby": D,
                id: _,
                labelId: V,
                value: U,
                input: Ee,
                ...qe,
                children: s
            }) : Ee, g && $.jsx(Ce, {
                id: D,
                ...be,
                children: g
            })]
        })
    }),
    Vx = xl({
        themeId: xt
    }),
    Cc = u.createContext(null);

function ox() {
    const [e, t] = u.useState(null);
    return u.useEffect(() => {
        t(`mui-p-${Math.round(Math.random()*1e5)}`)
    }, []), e
}

function Gx(e) {
    const {
        children: t,
        value: o
    } = e, r = ox(), n = u.useMemo(() => ({
        idPrefix: r,
        value: o
    }), [r, o]);
    return $.jsx(Cc.Provider, {
        value: n,
        children: t
    })
}

function wc() {
    return u.useContext(Cc)
}

function Rc(e, t) {
    const {
        idPrefix: o
    } = e;
    return o === null ? null : `${e.idPrefix}-P-${t}`
}

function $c(e, t) {
    const {
        idPrefix: o
    } = e;
    return o === null ? null : `${e.idPrefix}-T-${t}`
}

function kc(e) {
    var t, o, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (t = 0; t < n; t++) e[t] && (o = kc(e[t])) && (r && (r += " "), r += o)
        } else
            for (o in e) e[o] && (r && (r += " "), r += o);
    return r
}

function rx() {
    for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (t = kc(e)) && (r && (r += " "), r += t);
    return r
}

function nx(e) {
    return Y("MuiTabPanel", e)
}
K("MuiTabPanel", ["root", "hidden"]);
const ix = e => {
        const {
            classes: t,
            hidden: o
        } = e;
        return Q({
            root: ["root", o && "hidden"]
        }, nx, t)
    },
    sx = j("div", {
        name: "MuiTabPanel",
        slot: "Root"
    })(({
        theme: e
    }) => ({
        padding: e.spacing(3)
    })),
    Kx = u.forwardRef(function(t, o) {
        const r = cf({
                props: t,
                name: "MuiTabPanel"
            }),
            {
                children: n,
                className: i,
                value: s,
                keepMounted: a = !1,
                ...l
            } = r,
            c = { ...r
            },
            d = ix(c),
            p = wc();
        if (p === null) throw new TypeError("No TabContext provided");
        const b = Rc(p, s),
            h = $c(p, s);
        return $.jsx(sx, {
            "aria-labelledby": h,
            className: rx(d.root, i),
            hidden: s !== p.value,
            id: b,
            ref: o,
            role: "tabpanel",
            ownerState: c,
            ...l,
            children: (a || s === p.value) && n
        })
    }),
    qx = u.forwardRef(function(t, o) {
        const {
            children: r,
            ...n
        } = t, i = wc();
        if (i === null) throw new TypeError("No TabContext provided");
        const s = u.Children.map(r, a => u.isValidElement(a) ? u.cloneElement(a, {
            "aria-controls": Rc(i, a.props.value),
            id: $c(i, a.props.value)
        }) : null);
        return $.jsx(Q0, { ...n,
            ref: o,
            value: i.value,
            children: s
        })
    });
export {
    Mx as $, fx as A, bx as B, Gl as C, Rx as D, pi as E, ay as F, xa as G, Lx as H, Rm as I, Nx as J, Gx as K, Q0 as L, Ax as M, jx as N, Kx as O, bo as P, Ex as Q, jt as R, Ox as S, en as T, j as U, vi as V, gx as W, Bx as X, dx as Y, px as Z, ux as _, Ua as a, qx as a0, hx as a1, Gy as a2, Ix as a3, Hi as a4, cx as a5, wx as a6, Kr as b, gt as c, Vx as d, yx as e, _x as f, vx as g, Ty as h, xc as i, $ as j, Wx as k, zx as l, Hx as m, Ux as n, Dx as o, Fx as p, mx as q, u as r, Px as s, kx as t, Gt as u, $x as v, Tx as w, Cx as x, xx as y, Sx as z
};