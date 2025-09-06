import {
    p as Ft
} from "./react-vendor-1qCqAHqt.js";
import {
    R as _,
    r as be
} from "./mui-vendor-DDV5n_UM.js";
var A = function() {
    return A = Object.assign || function(e) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
        }
        return e
    }, A.apply(this, arguments)
};

function K(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = e.length, s; n < o; n++)(s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
    return t.concat(s || Array.prototype.slice.call(e))
}
var v = "-ms-",
    ot = "-moz-",
    m = "-webkit-",
    Se = "comm",
    xt = "rule",
    Ut = "decl",
    tr = "@import",
    we = "@keyframes",
    er = "@layer",
    Ce = Math.abs,
    Zt = String.fromCharCode,
    Bt = Object.assign;

function rr(t, e) {
    return E(t, 0) ^ 45 ? (((e << 2 ^ E(t, 0)) << 2 ^ E(t, 1)) << 2 ^ E(t, 2)) << 2 ^ E(t, 3) : 0
}

function Oe(t) {
    return t.trim()
}

function T(t, e) {
    return (t = e.exec(t)) ? t[0] : t
}

function f(t, e, r) {
    return t.replace(e, r)
}

function dt(t, e, r) {
    return t.indexOf(e, r)
}

function E(t, e) {
    return t.charCodeAt(e) | 0
}

function U(t, e, r) {
    return t.slice(e, r)
}

function k(t) {
    return t.length
}

function Ie(t) {
    return t.length
}

function nt(t, e) {
    return e.push(t), t
}

function nr(t, e) {
    return t.map(e).join("")
}

function oe(t, e) {
    return t.filter(function(r) {
        return !T(r, e)
    })
}
var Et = 1,
    Z = 1,
    Pe = 0,
    N = 0,
    P = 0,
    X = "";

function _t(t, e, r, n, o, s, i, c) {
    return {
        value: t,
        root: e,
        parent: r,
        type: n,
        props: o,
        children: s,
        line: Et,
        column: Z,
        length: i,
        return: "",
        siblings: c
    }
}

function F(t, e) {
    return Bt(_t("", null, null, "", null, null, 0, t.siblings), t, {
        length: -t.length
    }, e)
}

function q(t) {
    for (; t.root;) t = F(t.root, {
        children: [t]
    });
    nt(t, t.siblings)
}

function or() {
    return P
}

function sr() {
    return P = N > 0 ? E(X, --N) : 0, Z--, P === 10 && (Z = 1, Et--), P
}

function j() {
    return P = N < Pe ? E(X, N++) : 0, Z++, P === 10 && (Z = 1, Et++), P
}

function W() {
    return E(X, N)
}

function gt() {
    return N
}

function At(t, e) {
    return U(X, t, e)
}

function Lt(t) {
    switch (t) {
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

function ir(t) {
    return Et = Z = 1, Pe = k(X = t), N = 0, []
}

function ar(t) {
    return X = "", t
}

function Dt(t) {
    return Oe(At(N - 1, Mt(t === 91 ? t + 2 : t === 40 ? t + 1 : t)))
}

function cr(t) {
    for (;
        (P = W()) && P < 33;) j();
    return Lt(t) > 2 || Lt(P) > 3 ? "" : " "
}

function ur(t, e) {
    for (; --e && j() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97););
    return At(t, gt() + (e < 6 && W() == 32 && j() == 32))
}

function Mt(t) {
    for (; j();) switch (P) {
        case t:
            return N;
        case 34:
        case 39:
            t !== 34 && t !== 39 && Mt(P);
            break;
        case 40:
            t === 41 && Mt(t);
            break;
        case 92:
            j();
            break
    }
    return N
}

function fr(t, e) {
    for (; j() && t + P !== 57;)
        if (t + P === 84 && W() === 47) break;
    return "/*" + At(e, N - 1) + "*" + Zt(t === 47 ? t : j())
}

function pr(t) {
    for (; !Lt(W());) j();
    return At(t, N)
}

function lr(t) {
    return ar(mt("", null, null, null, [""], t = ir(t), 0, [0], t))
}

function mt(t, e, r, n, o, s, i, c, a) {
    for (var u = 0, p = 0, h = i, g = 0, d = 0, S = 0, O = 1, R = 1, I = 1, w = 0, b = "", C = o, x = s, y = n, l = b; R;) switch (S = w, w = j()) {
        case 40:
            if (S != 108 && E(l, h - 1) == 58) {
                dt(l += f(Dt(w), "&", "&\f"), "&\f", Ce(u ? c[u - 1] : 0)) != -1 && (I = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            l += Dt(w);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            l += cr(S);
            break;
        case 92:
            l += ur(gt() - 1, 7);
            continue;
        case 47:
            switch (W()) {
                case 42:
                case 47:
                    nt(hr(fr(j(), gt()), e, r, a), a);
                    break;
                default:
                    l += "/"
            }
            break;
        case 123 * O:
            c[u++] = k(l) * I;
        case 125 * O:
        case 59:
        case 0:
            switch (w) {
                case 0:
                case 125:
                    R = 0;
                case 59 + p:
                    I == -1 && (l = f(l, /\f/g, "")), d > 0 && k(l) - h && nt(d > 32 ? ie(l + ";", n, r, h - 1, a) : ie(f(l, " ", "") + ";", n, r, h - 2, a), a);
                    break;
                case 59:
                    l += ";";
                default:
                    if (nt(y = se(l, e, r, u, p, o, c, b, C = [], x = [], h, s), s), w === 123)
                        if (p === 0) mt(l, e, y, y, C, s, h, c, x);
                        else switch (g === 99 && E(l, 3) === 110 ? 100 : g) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                mt(t, y, y, n && nt(se(t, y, y, 0, 0, o, c, b, o, C = [], h, x), x), o, x, h, c, n ? C : x);
                                break;
                            default:
                                mt(l, y, y, y, [""], x, 0, c, x)
                        }
            }
            u = p = d = 0, O = I = 1, b = l = "", h = i;
            break;
        case 58:
            h = 1 + k(l), d = S;
        default:
            if (O < 1) {
                if (w == 123) --O;
                else if (w == 125 && O++ == 0 && sr() == 125) continue
            }
            switch (l += Zt(w), w * O) {
                case 38:
                    I = p > 0 ? 1 : (l += "\f", -1);
                    break;
                case 44:
                    c[u++] = (k(l) - 1) * I, I = 1;
                    break;
                case 64:
                    W() === 45 && (l += Dt(j())), g = W(), p = h = k(b = l += pr(gt())), w++;
                    break;
                case 45:
                    S === 45 && k(l) == 2 && (O = 0)
            }
    }
    return s
}

function se(t, e, r, n, o, s, i, c, a, u, p, h) {
    for (var g = o - 1, d = o === 0 ? s : [""], S = Ie(d), O = 0, R = 0, I = 0; O < n; ++O)
        for (var w = 0, b = U(t, g + 1, g = Ce(R = i[O])), C = t; w < S; ++w)(C = Oe(R > 0 ? d[w] + " " + b : f(b, /&\f/g, d[w]))) && (a[I++] = C);
    return _t(t, e, r, o === 0 ? xt : c, a, u, p, h)
}

function hr(t, e, r, n) {
    return _t(t, e, r, Se, Zt(or()), U(t, 2, -2), 0, n)
}

function ie(t, e, r, n, o) {
    return _t(t, e, r, Ut, U(t, 0, n), U(t, n + 1, -1), n, o)
}

function xe(t, e, r) {
    switch (rr(t, e)) {
        case 5103:
            return m + "print-" + t + t;
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
            return m + t + t;
        case 4789:
            return ot + t + t;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return m + t + ot + t + v + t + t;
        case 5936:
            switch (E(t, e + 11)) {
                case 114:
                    return m + t + v + f(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                case 108:
                    return m + t + v + f(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                case 45:
                    return m + t + v + f(t, /[svh]\w+-[tblr]{2}/, "lr") + t
            }
        case 6828:
        case 4268:
        case 2903:
            return m + t + v + t + t;
        case 6165:
            return m + t + v + "flex-" + t + t;
        case 5187:
            return m + t + f(t, /(\w+).+(:[^]+)/, m + "box-$1$2" + v + "flex-$1$2") + t;
        case 5443:
            return m + t + v + "flex-item-" + f(t, /flex-|-self/g, "") + (T(t, /flex-|baseline/) ? "" : v + "grid-row-" + f(t, /flex-|-self/g, "")) + t;
        case 4675:
            return m + t + v + "flex-line-pack" + f(t, /align-content|flex-|-self/g, "") + t;
        case 5548:
            return m + t + v + f(t, "shrink", "negative") + t;
        case 5292:
            return m + t + v + f(t, "basis", "preferred-size") + t;
        case 6060:
            return m + "box-" + f(t, "-grow", "") + m + t + v + f(t, "grow", "positive") + t;
        case 4554:
            return m + f(t, /([^-])(transform)/g, "$1" + m + "$2") + t;
        case 6187:
            return f(f(f(t, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), t, "") + t;
        case 5495:
        case 3959:
            return f(t, /(image-set\([^]*)/, m + "$1$`$1");
        case 4968:
            return f(f(t, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + v + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + t + t;
        case 4200:
            if (!T(t, /flex-|baseline/)) return v + "grid-column-align" + U(t, e) + t;
            break;
        case 2592:
        case 3360:
            return v + f(t, "template-", "") + t;
        case 4384:
        case 3616:
            return r && r.some(function(n, o) {
                return e = o, T(n.props, /grid-\w+-end/)
            }) ? ~dt(t + (r = r[e].value), "span", 0) ? t : v + f(t, "-start", "") + t + v + "grid-row-span:" + (~dt(r, "span", 0) ? T(r, /\d+/) : +T(r, /\d+/) - +T(t, /\d+/)) + ";" : v + f(t, "-start", "") + t;
        case 4896:
        case 4128:
            return r && r.some(function(n) {
                return T(n.props, /grid-\w+-start/)
            }) ? t : v + f(f(t, "-end", "-span"), "span ", "") + t;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return f(t, /(.+)-inline(.+)/, m + "$1$2") + t;
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
            if (k(t) - 1 - e > 6) switch (E(t, e + 1)) {
                case 109:
                    if (E(t, e + 4) !== 45) break;
                case 102:
                    return f(t, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + ot + (E(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
                case 115:
                    return ~dt(t, "stretch", 0) ? xe(f(t, "stretch", "fill-available"), e, r) + t : t
            }
            break;
        case 5152:
        case 5920:
            return f(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, s, i, c, a, u) {
                return v + o + ":" + s + u + (i ? v + o + "-span:" + (c ? a : +a - +s) + u : "") + t
            });
        case 4949:
            if (E(t, e + 6) === 121) return f(t, ":", ":" + m) + t;
            break;
        case 6444:
            switch (E(t, E(t, 14) === 45 ? 18 : 11)) {
                case 120:
                    return f(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + m + (E(t, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + v + "$2box$3") + t;
                case 100:
                    return f(t, ":", ":" + v) + t
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return f(t, "scroll-", "scroll-snap-") + t
    }
    return t
}

function bt(t, e) {
    for (var r = "", n = 0; n < t.length; n++) r += e(t[n], n, t, e) || "";
    return r
}

function dr(t, e, r, n) {
    switch (t.type) {
        case er:
            if (t.children.length) break;
        case tr:
        case Ut:
            return t.return = t.return || t.value;
        case Se:
            return "";
        case we:
            return t.return = t.value + "{" + bt(t.children, n) + "}";
        case xt:
            if (!k(t.value = t.props.join(","))) return ""
    }
    return k(r = bt(t.children, n)) ? t.return = t.value + "{" + r + "}" : ""
}

function gr(t) {
    var e = Ie(t);
    return function(r, n, o, s) {
        for (var i = "", c = 0; c < e; c++) i += t[c](r, n, o, s) || "";
        return i
    }
}

function mr(t) {
    return function(e) {
        e.root || (e = e.return) && t(e)
    }
}

function yr(t, e, r, n) {
    if (t.length > -1 && !t.return) switch (t.type) {
        case Ut:
            t.return = xe(t.value, t.length, r);
            return;
        case we:
            return bt([F(t, {
                value: f(t.value, "@", "@" + m)
            })], n);
        case xt:
            if (t.length) return nr(r = t.props, function(o) {
                switch (T(o, n = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        q(F(t, {
                            props: [f(o, /:(read-\w+)/, ":" + ot + "$1")]
                        })), q(F(t, {
                            props: [o]
                        })), Bt(t, {
                            props: oe(r, n)
                        });
                        break;
                    case "::placeholder":
                        q(F(t, {
                            props: [f(o, /:(plac\w+)/, ":" + m + "input-$1")]
                        })), q(F(t, {
                            props: [f(o, /:(plac\w+)/, ":" + ot + "$1")]
                        })), q(F(t, {
                            props: [f(o, /:(plac\w+)/, v + "input-$1")]
                        })), q(F(t, {
                            props: [o]
                        })), Bt(t, {
                            props: oe(r, n)
                        });
                        break
                }
                return ""
            })
    }
}
var vr = {
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
    },
    $ = {},
    J = typeof Ft < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled",
    Ee = "active",
    _e = "data-styled-version",
    Rt = "6.1.18",
    Jt = `/*!sc*/
`,
    St = typeof window < "u" && typeof document < "u",
    br = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ft < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof Ft < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" && $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY),
    Sr = {},
    $t = Object.freeze([]),
    Q = Object.freeze({});

function Ae(t, e, r) {
    return r === void 0 && (r = Q), t.theme !== r.theme && t.theme || e || r.theme
}
var Re = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
    wr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Cr = /(^-|-$)/g;

function ae(t) {
    return t.replace(wr, "-").replace(Cr, "")
}
var Or = /(a)(d)/gi,
    lt = 52,
    ce = function(t) {
        return String.fromCharCode(t + (t > 25 ? 39 : 97))
    };

function Wt(t) {
    var e, r = "";
    for (e = Math.abs(t); e > lt; e = e / lt | 0) r = ce(e % lt) + r;
    return (ce(e % lt) + r).replace(Or, "$1-$2")
}
var Tt, $e = 5381,
    H = function(t, e) {
        for (var r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
        return t
    },
    Ne = function(t) {
        return H($e, t)
    };

function Qt(t) {
    return Wt(Ne(t) >>> 0)
}

function Ir(t) {
    return t.displayName || t.name || "Component"
}

function zt(t) {
    return typeof t == "string" && !0
}
var je = typeof Symbol == "function" && Symbol.for,
    ke = je ? Symbol.for("react.memo") : 60115,
    Pr = je ? Symbol.for("react.forward_ref") : 60112,
    xr = {
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
    Er = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    De = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    _r = ((Tt = {})[Pr] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, Tt[ke] = De, Tt);

function ue(t) {
    return ("type" in (e = t) && e.type.$$typeof) === ke ? De : "$$typeof" in t ? _r[t.$$typeof] : xr;
    var e
}
var Ar = Object.defineProperty,
    Rr = Object.getOwnPropertyNames,
    fe = Object.getOwnPropertySymbols,
    $r = Object.getOwnPropertyDescriptor,
    Nr = Object.getPrototypeOf,
    pe = Object.prototype;

function Te(t, e, r) {
    if (typeof e != "string") {
        if (pe) {
            var n = Nr(e);
            n && n !== pe && Te(t, n, r)
        }
        var o = Rr(e);
        fe && (o = o.concat(fe(e)));
        for (var s = ue(t), i = ue(e), c = 0; c < o.length; ++c) {
            var a = o[c];
            if (!(a in Er || r && r[a] || i && a in i || s && a in s)) {
                var u = $r(e, a);
                try {
                    Ar(t, a, u)
                } catch {}
            }
        }
    }
    return t
}

function V(t) {
    return typeof t == "function"
}

function Vt(t) {
    return typeof t == "object" && "styledComponentId" in t
}

function M(t, e) {
    return t && e ? "".concat(t, " ").concat(e) : t || e || ""
}

function wt(t, e) {
    if (t.length === 0) return "";
    for (var r = t[0], n = 1; n < t.length; n++) r += t[n];
    return r
}

function st(t) {
    return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof)
}

function Yt(t, e, r) {
    if (r === void 0 && (r = !1), !r && !st(t) && !Array.isArray(t)) return e;
    if (Array.isArray(e))
        for (var n = 0; n < e.length; n++) t[n] = Yt(t[n], e[n]);
    else if (st(e))
        for (var n in e) t[n] = Yt(t[n], e[n]);
    return t
}

function Xt(t, e) {
    Object.defineProperty(t, "toString", {
        value: e
    })
}

function it(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""))
}
var jr = function() {
        function t(e) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
        }
        return t.prototype.indexOfGroup = function(e) {
            for (var r = 0, n = 0; n < e; n++) r += this.groupSizes[n];
            return r
        }, t.prototype.insertRules = function(e, r) {
            if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, o = n.length, s = o; e >= s;)
                    if ((s <<= 1) < 0) throw it(16, "".concat(e));
                this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
                for (var i = o; i < s; i++) this.groupSizes[i] = 0
            }
            for (var c = this.indexOfGroup(e + 1), a = (i = 0, r.length); i < a; i++) this.tag.insertRule(c, r[i]) && (this.groupSizes[e]++, c++)
        }, t.prototype.clearGroup = function(e) {
            if (e < this.length) {
                var r = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    o = n + r;
                this.groupSizes[e] = 0;
                for (var s = n; s < o; s++) this.tag.deleteRule(n)
            }
        }, t.prototype.getGroup = function(e) {
            var r = "";
            if (e >= this.length || this.groupSizes[e] === 0) return r;
            for (var n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n, i = o; i < s; i++) r += "".concat(this.tag.getRule(i)).concat(Jt);
            return r
        }, t
    }(),
    yt = new Map,
    Ct = new Map,
    vt = 1,
    ht = function(t) {
        if (yt.has(t)) return yt.get(t);
        for (; Ct.has(vt);) vt++;
        var e = vt++;
        return yt.set(t, e), Ct.set(e, t), e
    },
    kr = function(t, e) {
        vt = e + 1, yt.set(t, e), Ct.set(e, t)
    },
    Dr = "style[".concat(J, "][").concat(_e, '="').concat(Rt, '"]'),
    Tr = new RegExp("^".concat(J, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
    zr = function(t, e, r) {
        for (var n, o = r.split(","), s = 0, i = o.length; s < i; s++)(n = o[s]) && t.registerName(e, n)
    },
    Gr = function(t, e) {
        for (var r, n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(Jt), o = [], s = 0, i = n.length; s < i; s++) {
            var c = n[s].trim();
            if (c) {
                var a = c.match(Tr);
                if (a) {
                    var u = 0 | parseInt(a[1], 10),
                        p = a[2];
                    u !== 0 && (kr(p, u), zr(t, p, a[3]), t.getTag().insertRules(u, o)), o.length = 0
                } else o.push(c)
            }
        }
    },
    le = function(t) {
        for (var e = document.querySelectorAll(Dr), r = 0, n = e.length; r < n; r++) {
            var o = e[r];
            o && o.getAttribute(J) !== Ee && (Gr(t, o), o.parentNode && o.parentNode.removeChild(o))
        }
    };

function Fr() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var ze = function(t) {
        var e = document.head,
            r = t || e,
            n = document.createElement("style"),
            o = function(c) {
                var a = Array.from(c.querySelectorAll("style[".concat(J, "]")));
                return a[a.length - 1]
            }(r),
            s = o !== void 0 ? o.nextSibling : null;
        n.setAttribute(J, Ee), n.setAttribute(_e, Rt);
        var i = Fr();
        return i && n.setAttribute("nonce", i), r.insertBefore(n, s), n
    },
    Br = function() {
        function t(e) {
            this.element = ze(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
                if (r.sheet) return r.sheet;
                for (var n = document.styleSheets, o = 0, s = n.length; o < s; o++) {
                    var i = n[o];
                    if (i.ownerNode === r) return i
                }
                throw it(17)
            }(this.element), this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            try {
                return this.sheet.insertRule(r, e), this.length++, !0
            } catch {
                return !1
            }
        }, t.prototype.deleteRule = function(e) {
            this.sheet.deleteRule(e), this.length--
        }, t.prototype.getRule = function(e) {
            var r = this.sheet.cssRules[e];
            return r && r.cssText ? r.cssText : ""
        }, t
    }(),
    Lr = function() {
        function t(e) {
            this.element = ze(e), this.nodes = this.element.childNodes, this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            if (e <= this.length && e >= 0) {
                var n = document.createTextNode(r);
                return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
            }
            return !1
        }, t.prototype.deleteRule = function(e) {
            this.element.removeChild(this.nodes[e]), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.nodes[e].textContent : ""
        }, t
    }(),
    Mr = function() {
        function t(e) {
            this.rules = [], this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0)
        }, t.prototype.deleteRule = function(e) {
            this.rules.splice(e, 1), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.rules[e] : ""
        }, t
    }(),
    he = St,
    Wr = {
        isServer: !St,
        useCSSOMInjection: !br
    },
    Ot = function() {
        function t(e, r, n) {
            e === void 0 && (e = Q), r === void 0 && (r = {});
            var o = this;
            this.options = A(A({}, Wr), e), this.gs = r, this.names = new Map(n), this.server = !!e.isServer, !this.server && St && he && (he = !1, le(this)), Xt(this, function() {
                return function(s) {
                    for (var i = s.getTag(), c = i.length, a = "", u = function(h) {
                            var g = function(I) {
                                return Ct.get(I)
                            }(h);
                            if (g === void 0) return "continue";
                            var d = s.names.get(g),
                                S = i.getGroup(h);
                            if (d === void 0 || !d.size || S.length === 0) return "continue";
                            var O = "".concat(J, ".g").concat(h, '[id="').concat(g, '"]'),
                                R = "";
                            d !== void 0 && d.forEach(function(I) {
                                I.length > 0 && (R += "".concat(I, ","))
                            }), a += "".concat(S).concat(O, '{content:"').concat(R, '"}').concat(Jt)
                        }, p = 0; p < c; p++) u(p);
                    return a
                }(o)
            })
        }
        return t.registerId = function(e) {
            return ht(e)
        }, t.prototype.rehydrate = function() {
            !this.server && St && le(this)
        }, t.prototype.reconstructWithOptions = function(e, r) {
            return r === void 0 && (r = !0), new t(A(A({}, this.options), e), this.gs, r && this.names || void 0)
        }, t.prototype.allocateGSInstance = function(e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
        }, t.prototype.getTag = function() {
            return this.tag || (this.tag = (e = function(r) {
                var n = r.useCSSOMInjection,
                    o = r.target;
                return r.isServer ? new Mr(o) : n ? new Br(o) : new Lr(o)
            }(this.options), new jr(e)));
            var e
        }, t.prototype.hasNameForId = function(e, r) {
            return this.names.has(e) && this.names.get(e).has(r)
        }, t.prototype.registerName = function(e, r) {
            if (ht(e), this.names.has(e)) this.names.get(e).add(r);
            else {
                var n = new Set;
                n.add(r), this.names.set(e, n)
            }
        }, t.prototype.insertRules = function(e, r, n) {
            this.registerName(e, r), this.getTag().insertRules(ht(e), n)
        }, t.prototype.clearNames = function(e) {
            this.names.has(e) && this.names.get(e).clear()
        }, t.prototype.clearRules = function(e) {
            this.getTag().clearGroup(ht(e)), this.clearNames(e)
        }, t.prototype.clearTag = function() {
            this.tag = void 0
        }, t
    }(),
    Yr = /&/g,
    qr = /^\s*\/\/.*$/gm;

function Ge(t, e) {
    return t.map(function(r) {
        return r.type === "rule" && (r.value = "".concat(e, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(e, " ")), r.props = r.props.map(function(n) {
            return "".concat(e, " ").concat(n)
        })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Ge(r.children, e)), r
    })
}

function Hr(t) {
    var e, r, n, o = Q,
        s = o.options,
        i = s === void 0 ? Q : s,
        c = o.plugins,
        a = c === void 0 ? $t : c,
        u = function(g, d, S) {
            return S.startsWith(r) && S.endsWith(r) && S.replaceAll(r, "").length > 0 ? ".".concat(e) : g
        },
        p = a.slice();
    p.push(function(g) {
        g.type === xt && g.value.includes("&") && (g.props[0] = g.props[0].replace(Yr, r).replace(n, u))
    }), i.prefix && p.push(yr), p.push(dr);
    var h = function(g, d, S, O) {
        d === void 0 && (d = ""), S === void 0 && (S = ""), O === void 0 && (O = "&"), e = O, r = d, n = new RegExp("\\".concat(r, "\\b"), "g");
        var R = g.replace(qr, ""),
            I = lr(S || d ? "".concat(S, " ").concat(d, " { ").concat(R, " }") : R);
        i.namespace && (I = Ge(I, i.namespace));
        var w = [];
        return bt(I, gr(p.concat(mr(function(b) {
            return w.push(b)
        })))), w
    };
    return h.hash = a.length ? a.reduce(function(g, d) {
        return d.name || it(15), H(g, d.name)
    }, $e).toString() : "", h
}
var Kr = new Ot,
    qt = Hr(),
    Fe = _.createContext({
        shouldForwardProp: void 0,
        styleSheet: Kr,
        stylis: qt
    });
Fe.Consumer;
_.createContext(void 0);

function Ht() {
    return be.useContext(Fe)
}
var Be = function() {
        function t(e, r) {
            var n = this;
            this.inject = function(o, s) {
                s === void 0 && (s = qt);
                var i = n.name + s.hash;
                o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"))
            }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = r, Xt(this, function() {
                throw it(12, String(n.name))
            })
        }
        return t.prototype.getName = function(e) {
            return e === void 0 && (e = qt), this.name + e.hash
        }, t
    }(),
    Ur = function(t) {
        return t >= "A" && t <= "Z"
    };

function de(t) {
    for (var e = "", r = 0; r < t.length; r++) {
        var n = t[r];
        if (r === 1 && n === "-" && t[0] === "-") return t;
        Ur(n) ? e += "-" + n.toLowerCase() : e += n
    }
    return e.startsWith("ms-") ? "-" + e : e
}
var Le = function(t) {
        return t == null || t === !1 || t === ""
    },
    Me = function(t) {
        var e, r, n = [];
        for (var o in t) {
            var s = t[o];
            t.hasOwnProperty(o) && !Le(s) && (Array.isArray(s) && s.isCss || V(s) ? n.push("".concat(de(o), ":"), s, ";") : st(s) ? n.push.apply(n, K(K(["".concat(o, " {")], Me(s), !1), ["}"], !1)) : n.push("".concat(de(o), ": ").concat((e = o, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || e in vr || e.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")))
        }
        return n
    };

function B(t, e, r, n) {
    if (Le(t)) return [];
    if (Vt(t)) return [".".concat(t.styledComponentId)];
    if (V(t)) {
        if (!V(s = t) || s.prototype && s.prototype.isReactComponent || !e) return [t];
        var o = t(e);
        return B(o, e, r, n)
    }
    var s;
    return t instanceof Be ? r ? (t.inject(r, n), [t.getName(n)]) : [t] : st(t) ? Me(t) : Array.isArray(t) ? Array.prototype.concat.apply($t, t.map(function(i) {
        return B(i, e, r, n)
    })) : [t.toString()]
}

function We(t) {
    for (var e = 0; e < t.length; e += 1) {
        var r = t[e];
        if (V(r) && !Vt(r)) return !1
    }
    return !0
}
var Zr = Ne(Rt),
    Jr = function() {
        function t(e, r, n) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && We(e), this.componentId = r, this.baseHash = H(Zr, r), this.baseStyle = n, Ot.registerId(r)
        }
        return t.prototype.generateAndInjectStyles = function(e, r, n) {
            var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
            if (this.isStatic && !n.hash)
                if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = M(o, this.staticRulesId);
                else {
                    var s = wt(B(this.rules, e, r, n)),
                        i = Wt(H(this.baseHash, s) >>> 0);
                    if (!r.hasNameForId(this.componentId, i)) {
                        var c = n(s, ".".concat(i), void 0, this.componentId);
                        r.insertRules(this.componentId, i, c)
                    }
                    o = M(o, i), this.staticRulesId = i
                }
            else {
                for (var a = H(this.baseHash, n.hash), u = "", p = 0; p < this.rules.length; p++) {
                    var h = this.rules[p];
                    if (typeof h == "string") u += h;
                    else if (h) {
                        var g = wt(B(h, e, r, n));
                        a = H(a, g + p), u += g
                    }
                }
                if (u) {
                    var d = Wt(a >>> 0);
                    r.hasNameForId(this.componentId, d) || r.insertRules(this.componentId, d, n(u, ".".concat(d), void 0, this.componentId)), o = M(o, d)
                }
            }
            return o
        }, t
    }(),
    te = _.createContext(void 0);
te.Consumer;
var Gt = {};

function Qr(t, e, r) {
    var n = Vt(t),
        o = t,
        s = !zt(t),
        i = e.attrs,
        c = i === void 0 ? $t : i,
        a = e.componentId,
        u = a === void 0 ? function(C, x) {
            var y = typeof C != "string" ? "sc" : ae(C);
            Gt[y] = (Gt[y] || 0) + 1;
            var l = "".concat(y, "-").concat(Qt(Rt + y + Gt[y]));
            return x ? "".concat(x, "-").concat(l) : l
        }(e.displayName, e.parentComponentId) : a,
        p = e.displayName,
        h = p === void 0 ? function(C) {
            return zt(C) ? "styled.".concat(C) : "Styled(".concat(Ir(C), ")")
        }(t) : p,
        g = e.displayName && e.componentId ? "".concat(ae(e.displayName), "-").concat(e.componentId) : e.componentId || u,
        d = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c,
        S = e.shouldForwardProp;
    if (n && o.shouldForwardProp) {
        var O = o.shouldForwardProp;
        if (e.shouldForwardProp) {
            var R = e.shouldForwardProp;
            S = function(C, x) {
                return O(C, x) && R(C, x)
            }
        } else S = O
    }
    var I = new Jr(r, g, n ? o.componentStyle : void 0);

    function w(C, x) {
        return function(y, l, Y) {
            var at = y.attrs,
                Ke = y.componentStyle,
                Ue = y.defaultProps,
                Ze = y.foldedComponentIds,
                Je = y.styledComponentId,
                Qe = y.target,
                Ve = _.useContext(te),
                Xe = Ht(),
                Nt = y.shouldForwardProp || Xe.shouldForwardProp,
                re = Ae(l, Ve, Ue) || Q,
                D = function(ut, et, ft) {
                    for (var rt, L = A(A({}, et), {
                            className: void 0,
                            theme: ft
                        }), kt = 0; kt < ut.length; kt += 1) {
                        var pt = V(rt = ut[kt]) ? rt(L) : rt;
                        for (var G in pt) L[G] = G === "className" ? M(L[G], pt[G]) : G === "style" ? A(A({}, L[G]), pt[G]) : pt[G]
                    }
                    return et.className && (L.className = M(L.className, et.className)), L
                }(at, l, re),
                ct = D.as || Qe,
                tt = {};
            for (var z in D) D[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && D.theme === re || (z === "forwardedAs" ? tt.as = D.forwardedAs : Nt && !Nt(z, ct) || (tt[z] = D[z]));
            var ne = function(ut, et) {
                    var ft = Ht(),
                        rt = ut.generateAndInjectStyles(et, ft.styleSheet, ft.stylis);
                    return rt
                }(Ke, D),
                jt = M(Ze, Je);
            return ne && (jt += " " + ne), D.className && (jt += " " + D.className), tt[zt(ct) && !Re.has(ct) ? "class" : "className"] = jt, Y && (tt.ref = Y), be.createElement(ct, tt)
        }(b, C, x)
    }
    w.displayName = h;
    var b = _.forwardRef(w);
    return b.attrs = d, b.componentStyle = I, b.displayName = h, b.shouldForwardProp = S, b.foldedComponentIds = n ? M(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = g, b.target = n ? o.target : t, Object.defineProperty(b, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(C) {
            this._foldedDefaultProps = n ? function(x) {
                for (var y = [], l = 1; l < arguments.length; l++) y[l - 1] = arguments[l];
                for (var Y = 0, at = y; Y < at.length; Y++) Yt(x, at[Y], !0);
                return x
            }({}, o.defaultProps, C) : C
        }
    }), Xt(b, function() {
        return ".".concat(b.styledComponentId)
    }), s && Te(b, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), b
}

function ge(t, e) {
    for (var r = [t[0]], n = 0, o = e.length; n < o; n += 1) r.push(e[n], t[n + 1]);
    return r
}
var me = function(t) {
    return Object.assign(t, {
        isCss: !0
    })
};

function ee(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    if (V(t) || st(t)) return me(B(ge($t, K([t], e, !0))));
    var n = t;
    return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? B(n) : me(B(ge(n, e)))
}

function Kt(t, e, r) {
    if (r === void 0 && (r = Q), !e) throw it(1, e);
    var n = function(o) {
        for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
        return t(e, r, ee.apply(void 0, K([o], s, !1)))
    };
    return n.attrs = function(o) {
        return Kt(t, e, A(A({}, r), {
            attrs: Array.prototype.concat(r.attrs, o).filter(Boolean)
        }))
    }, n.withConfig = function(o) {
        return Kt(t, e, A(A({}, r), o))
    }, n
}
var Ye = function(t) {
        return Kt(Qr, t)
    },
    Vr = Ye;
Re.forEach(function(t) {
    Vr[t] = Ye(t)
});
var Xr = function() {
    function t(e, r) {
        this.rules = e, this.componentId = r, this.isStatic = We(e), Ot.registerId(this.componentId + 1)
    }
    return t.prototype.createStyles = function(e, r, n, o) {
        var s = o(wt(B(this.rules, r, n, o)), ""),
            i = this.componentId + e;
        n.insertRules(i, i, s)
    }, t.prototype.removeStyles = function(e, r) {
        r.clearRules(this.componentId + e)
    }, t.prototype.renderStyles = function(e, r, n, o) {
        e > 2 && Ot.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, r, n, o)
    }, t
}();

function fn(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    var n = ee.apply(void 0, K([t], e, !1)),
        o = "sc-global-".concat(Qt(JSON.stringify(n))),
        s = new Xr(n, o),
        i = function(a) {
            var u = Ht(),
                p = _.useContext(te),
                h = _.useRef(u.styleSheet.allocateGSInstance(o)).current;
            return u.styleSheet.server && c(h, a, u.styleSheet, p, u.stylis), _.useLayoutEffect(function() {
                if (!u.styleSheet.server) return c(h, a, u.styleSheet, p, u.stylis),
                    function() {
                        return s.removeStyles(h, u.styleSheet)
                    }
            }, [h, a, u.styleSheet, p, u.stylis]), null
        };

    function c(a, u, p, h, g) {
        if (s.isStatic) s.renderStyles(a, Sr, p, g);
        else {
            var d = A(A({}, u), {
                theme: Ae(u, h, i.defaultProps)
            });
            s.renderStyles(a, d, p, g)
        }
    }
    return _.memo(i)
}

function pn(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    var n = wt(ee.apply(void 0, K([t], e, !1))),
        o = Qt(n);
    return new Be(o, n)
}
var qe = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    ye = _.createContext && _.createContext(qe),
    tn = ["attr", "size", "title"];

function en(t, e) {
    if (t == null) return {};
    var r = rn(t, e),
        n, o;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for (o = 0; o < s.length; o++) n = s[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
    }
    return r
}

function rn(t, e) {
    if (t == null) return {};
    var r = {};
    for (var n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
            if (e.indexOf(n) >= 0) continue;
            r[n] = t[n]
        }
    return r
}

function It() {
    return It = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, It.apply(this, arguments)
}

function ve(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Pt(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ve(Object(r), !0).forEach(function(n) {
            nn(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ve(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}

function nn(t, e, r) {
    return e = on(e), e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function on(t) {
    var e = sn(t, "string");
    return typeof e == "symbol" ? e : e + ""
}

function sn(t, e) {
    if (typeof t != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(t, e);
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function He(t) {
    return t && t.map((e, r) => _.createElement(e.tag, Pt({
        key: r
    }, e.attr), He(e.child)))
}

function ln(t) {
    return e => _.createElement(an, It({
        attr: Pt({}, t.attr)
    }, e), He(t.child))
}

function an(t) {
    var e = r => {
        var {
            attr: n,
            size: o,
            title: s
        } = t, i = en(t, tn), c = o || r.size || "1em", a;
        return r.className && (a = r.className), t.className && (a = (a ? a + " " : "") + t.className), _.createElement("svg", It({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, n, i, {
            className: a,
            style: Pt(Pt({
                color: t.color || r.color
            }, r.style), t.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && _.createElement("title", null, s), t.children)
    };
    return ye !== void 0 ? _.createElement(ye.Consumer, null, r => e(r)) : e(qe)
}
export {
    ln as G, Vr as d, fn as f, ee as l, pn as m
};