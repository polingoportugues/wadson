import {
    r as nr
} from "./react-vendor-1qCqAHqt.js";
import {
    r as y
} from "./mui-vendor-DDV5n_UM.js";
var Pe = {
        exports: {}
    },
    ke = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;

function or() {
    if (nt) return ke;
    nt = 1;
    var e = nr();

    function t(u, l) {
        return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l
    }
    var r = typeof Object.is == "function" ? Object.is : t,
        n = e.useSyncExternalStore,
        o = e.useRef,
        i = e.useEffect,
        a = e.useMemo,
        s = e.useDebugValue;
    return ke.useSyncExternalStoreWithSelector = function(u, l, f, g, p) {
        var w = o(null);
        if (w.current === null) {
            var c = {
                hasValue: !1,
                value: null
            };
            w.current = c
        } else c = w.current;
        w = a(function() {
            function h(x) {
                if (!d) {
                    if (d = !0, v = x, x = g(x), p !== void 0 && c.hasValue) {
                        var E = c.value;
                        if (p(E, x)) return S = E
                    }
                    return S = x
                }
                if (E = S, r(v, x)) return E;
                var R = g(x);
                return p !== void 0 && p(E, R) ? (v = x, E) : (v = x, S = R)
            }
            var d = !1,
                v, S, b = f === void 0 ? null : f;
            return [function() {
                return h(l())
            }, b === null ? void 0 : function() {
                return h(b())
            }]
        }, [l, f, g, p]);
        var m = n(u, w[0], w[1]);
        return i(function() {
            c.hasValue = !0, c.value = m
        }, [m]), s(m), m
    }, ke
}
var ot;

function ir() {
    return ot || (ot = 1, Pe.exports = or()), Pe.exports
}
var ar = ir(),
    Q = {},
    it;

function ur() {
    if (it) return Q;
    it = 1, Object.defineProperty(Q, "__esModule", {
        value: !0
    }), Q.parse = a, Q.serialize = l;
    const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        t = /^[\u0021-\u003A\u003C-\u007E]*$/,
        r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        n = /^[\u0020-\u003A\u003D-\u007E]*$/,
        o = Object.prototype.toString,
        i = (() => {
            const p = function() {};
            return p.prototype = Object.create(null), p
        })();

    function a(p, w) {
        const c = new i,
            m = p.length;
        if (m < 2) return c;
        const h = (w == null ? void 0 : w.decode) || f;
        let d = 0;
        do {
            const v = p.indexOf("=", d);
            if (v === -1) break;
            const S = p.indexOf(";", d),
                b = S === -1 ? m : S;
            if (v > b) {
                d = p.lastIndexOf(";", v - 1) + 1;
                continue
            }
            const x = s(p, d, v),
                E = u(p, v, x),
                R = p.slice(x, E);
            if (c[R] === void 0) {
                let _ = s(p, v + 1, b),
                    C = u(p, b, _);
                const O = h(p.slice(_, C));
                c[R] = O
            }
            d = b + 1
        } while (d < m);
        return c
    }

    function s(p, w, c) {
        do {
            const m = p.charCodeAt(w);
            if (m !== 32 && m !== 9) return w
        } while (++w < c);
        return c
    }

    function u(p, w, c) {
        for (; w > c;) {
            const m = p.charCodeAt(--w);
            if (m !== 32 && m !== 9) return w + 1
        }
        return c
    }

    function l(p, w, c) {
        const m = (c == null ? void 0 : c.encode) || encodeURIComponent;
        if (!e.test(p)) throw new TypeError(`argument name is invalid: ${p}`);
        const h = m(w);
        if (!t.test(h)) throw new TypeError(`argument val is invalid: ${w}`);
        let d = p + "=" + h;
        if (!c) return d;
        if (c.maxAge !== void 0) {
            if (!Number.isInteger(c.maxAge)) throw new TypeError(`option maxAge is invalid: ${c.maxAge}`);
            d += "; Max-Age=" + c.maxAge
        }
        if (c.domain) {
            if (!r.test(c.domain)) throw new TypeError(`option domain is invalid: ${c.domain}`);
            d += "; Domain=" + c.domain
        }
        if (c.path) {
            if (!n.test(c.path)) throw new TypeError(`option path is invalid: ${c.path}`);
            d += "; Path=" + c.path
        }
        if (c.expires) {
            if (!g(c.expires) || !Number.isFinite(c.expires.valueOf())) throw new TypeError(`option expires is invalid: ${c.expires}`);
            d += "; Expires=" + c.expires.toUTCString()
        }
        if (c.httpOnly && (d += "; HttpOnly"), c.secure && (d += "; Secure"), c.partitioned && (d += "; Partitioned"), c.priority) switch (typeof c.priority == "string" ? c.priority.toLowerCase() : void 0) {
            case "low":
                d += "; Priority=Low";
                break;
            case "medium":
                d += "; Priority=Medium";
                break;
            case "high":
                d += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${c.priority}`)
        }
        if (c.sameSite) switch (typeof c.sameSite == "string" ? c.sameSite.toLowerCase() : c.sameSite) {
            case !0:
            case "strict":
                d += "; SameSite=Strict";
                break;
            case "lax":
                d += "; SameSite=Lax";
                break;
            case "none":
                d += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${c.sameSite}`)
        }
        return d
    }

    function f(p) {
        if (p.indexOf("%") === -1) return p;
        try {
            return decodeURIComponent(p)
        } catch {
            return p
        }
    }

    function g(p) {
        return o.call(p) === "[object Date]"
    }
    return Q
}
ur();
var at = "popstate";

function sr(e = {}) {
    function t(n, o) {
        let {
            pathname: i,
            search: a,
            hash: s
        } = n.location;
        return $e("", {
            pathname: i,
            search: a,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function r(n, o) {
        return typeof o == "string" ? o : te(o)
    }
    return cr(t, r, null, e)
}

function P(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function D(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function lr() {
    return Math.random().toString(36).substring(2, 10)
}

function ut(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function $e(e, t, r = null, n) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? G(t) : t,
        state: r,
        key: t && t.key || n || lr()
    }
}

function te({
    pathname: e = "/",
    search: t = "",
    hash: r = ""
}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e
}

function G(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e)
    }
    return t
}

function cr(e, t, r, n = {}) {
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = n, a = o.history, s = "POP", u = null, l = f();
    l == null && (l = 0, a.replaceState({ ...a.state,
        idx: l
    }, ""));

    function f() {
        return (a.state || {
            idx: null
        }).idx
    }

    function g() {
        s = "POP";
        let h = f(),
            d = h == null ? null : h - l;
        l = h, u && u({
            action: s,
            location: m.location,
            delta: d
        })
    }

    function p(h, d) {
        s = "PUSH";
        let v = $e(m.location, h, d);
        l = f() + 1;
        let S = ut(v, l),
            b = m.createHref(v);
        try {
            a.pushState(S, "", b)
        } catch (x) {
            if (x instanceof DOMException && x.name === "DataCloneError") throw x;
            o.location.assign(b)
        }
        i && u && u({
            action: s,
            location: m.location,
            delta: 1
        })
    }

    function w(h, d) {
        s = "REPLACE";
        let v = $e(m.location, h, d);
        l = f();
        let S = ut(v, l),
            b = m.createHref(v);
        a.replaceState(S, "", b), i && u && u({
            action: s,
            location: m.location,
            delta: 0
        })
    }

    function c(h) {
        return fr(h)
    }
    let m = {
        get action() {
            return s
        },
        get location() {
            return e(o, a)
        },
        listen(h) {
            if (u) throw new Error("A history only accepts one active listener");
            return o.addEventListener(at, g), u = h, () => {
                o.removeEventListener(at, g), u = null
            }
        },
        createHref(h) {
            return t(o, h)
        },
        createURL: c,
        encodeLocation(h) {
            let d = c(h);
            return {
                pathname: d.pathname,
                search: d.search,
                hash: d.hash
            }
        },
        push: p,
        replace: w,
        go(h) {
            return a.go(h)
        }
    };
    return m
}

function fr(e, t = !1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), P(r, "No window.location.(origin|href) available to create URL");
    let n = typeof e == "string" ? e : te(e);
    return n = n.replace(/ $/, "%20"), !t && n.startsWith("//") && (n = r + n), new URL(n, r)
}

function Et(e, t, r = "/") {
    return dr(e, t, r, !1)
}

function dr(e, t, r, n) {
    let o = typeof t == "string" ? G(t) : t,
        i = B(o.pathname || "/", r);
    if (i == null) return null;
    let a = Ct(e);
    hr(a);
    let s = null;
    for (let u = 0; s == null && u < a.length; ++u) {
        let l = Cr(i);
        s = xr(a[u], l, n)
    }
    return s
}

function Ct(e, t = [], r = [], n = "") {
    let o = (i, a, s) => {
        let u = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        u.relativePath.startsWith("/") && (P(u.relativePath.startsWith(n), `Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), u.relativePath = u.relativePath.slice(n.length));
        let l = j([n, u.relativePath]),
            f = r.concat(u);
        i.children && i.children.length > 0 && (P(i.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), Ct(i.children, t, f, l)), !(i.path == null && !i.index) && t.push({
            path: l,
            score: br(l, i.index),
            routesMeta: f
        })
    };
    return e.forEach((i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
        else
            for (let u of Rt(i.path)) o(i, a, u)
    }), t
}

function Rt(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, o = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return o ? [i, ""] : [i];
    let a = Rt(n.join("/")),
        s = [];
    return s.push(...a.map(u => u === "" ? i : [i, u].join("/"))), o && s.push(...a), s.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function hr(e) {
    e.sort((t, r) => t.score !== r.score ? r.score - t.score : Sr(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
var pr = /^:[\w-]+$/,
    mr = 3,
    yr = 2,
    gr = 1,
    vr = 10,
    wr = -2,
    st = e => e === "*";

function br(e, t) {
    let r = e.split("/"),
        n = r.length;
    return r.some(st) && (n += wr), t && (n += yr), r.filter(o => !st(o)).reduce((o, i) => o + (pr.test(i) ? mr : i === "" ? gr : vr), n)
}

function Sr(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function xr(e, t, r = !1) {
    let {
        routesMeta: n
    } = e, o = {}, i = "/", a = [];
    for (let s = 0; s < n.length; ++s) {
        let u = n[s],
            l = s === n.length - 1,
            f = i === "/" ? t : t.slice(i.length) || "/",
            g = me({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: l
            }, f),
            p = u.route;
        if (!g && l && r && !n[n.length - 1].route.index && (g = me({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: !1
            }, f)), !g) return null;
        Object.assign(o, g.params), a.push({
            params: o,
            pathname: j([i, g.pathname]),
            pathnameBase: kr(j([i, g.pathnameBase])),
            route: p
        }), g.pathnameBase !== "/" && (i = j([i, g.pathnameBase]))
    }
    return a
}

function me(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [r, n] = Er(e.path, e.caseSensitive, e.end), o = t.match(r);
    if (!o) return null;
    let i = o[0],
        a = i.replace(/(.)\/+$/, "$1"),
        s = o.slice(1);
    return {
        params: n.reduce((l, {
            paramName: f,
            isOptional: g
        }, p) => {
            if (f === "*") {
                let c = s[p] || "";
                a = i.slice(0, i.length - c.length).replace(/(.)\/+$/, "$1")
            }
            const w = s[p];
            return g && !w ? l[f] = void 0 : l[f] = (w || "").replace(/%2F/g, "/"), l
        }, {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}

function Er(e, t = !1, r = !0) {
    D(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);
    let n = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, u) => (n.push({
            paramName: s,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n]
}

function Cr(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return D(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e
    }
}

function B(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}

function Rr(e, t = "/") {
    let {
        pathname: r,
        search: n = "",
        hash: o = ""
    } = typeof e == "string" ? G(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : _r(r, t) : t,
        search: Mr(n),
        hash: Or(o)
    }
}

function _r(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }), r.length > 1 ? r.join("/") : "/"
}

function Me(e, t, r, n) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function Pr(e) {
    return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}

function _t(e) {
    let t = Pr(e);
    return t.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase)
}

function Pt(e, t, r, n = !1) {
    let o;
    typeof e == "string" ? o = G(e) : (o = { ...e
    }, P(!o.pathname || !o.pathname.includes("?"), Me("?", "pathname", "search", o)), P(!o.pathname || !o.pathname.includes("#"), Me("#", "pathname", "hash", o)), P(!o.search || !o.search.includes("#"), Me("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        a = i ? "/" : o.pathname,
        s;
    if (a == null) s = r;
    else {
        let g = t.length - 1;
        if (!n && a.startsWith("..")) {
            let p = a.split("/");
            for (; p[0] === "..";) p.shift(), g -= 1;
            o.pathname = p.join("/")
        }
        s = g >= 0 ? t[g] : "/"
    }
    let u = Rr(o, s),
        l = a && a !== "/" && a.endsWith("/"),
        f = (i || a === ".") && r.endsWith("/");
    return !u.pathname.endsWith("/") && (l || f) && (u.pathname += "/"), u
}
var j = e => e.join("/").replace(/\/\/+/g, "/"),
    kr = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Mr = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Or = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Ar(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
var kt = ["POST", "PUT", "PATCH", "DELETE"];
new Set(kt);
var Tr = ["GET", ...kt];
new Set(Tr);
var X = y.createContext(null);
X.displayName = "DataRouter";
var Se = y.createContext(null);
Se.displayName = "DataRouterState";
var Mt = y.createContext({
    isTransitioning: !1
});
Mt.displayName = "ViewTransition";
var Ir = y.createContext(new Map);
Ir.displayName = "Fetchers";
var Dr = y.createContext(null);
Dr.displayName = "Await";
var N = y.createContext(null);
N.displayName = "Navigation";
var oe = y.createContext(null);
oe.displayName = "Location";
var F = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
F.displayName = "Route";
var Ke = y.createContext(null);
Ke.displayName = "RouteError";

function Lr(e, {
    relative: t
} = {}) {
    P(ie(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: r,
        navigator: n
    } = y.useContext(N), {
        hash: o,
        pathname: i,
        search: a
    } = ae(e, {
        relative: t
    }), s = i;
    return r !== "/" && (s = i === "/" ? r : j([r, i])), n.createHref({
        pathname: s,
        search: a,
        hash: o
    })
}

function ie() {
    return y.useContext(oe) != null
}

function H() {
    return P(ie(), "useLocation() may be used only in the context of a <Router> component."), y.useContext(oe).location
}
var Ot = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function At(e) {
    y.useContext(N).static || y.useLayoutEffect(e)
}

function Tt() {
    let {
        isDataRoute: e
    } = y.useContext(F);
    return e ? Yr() : $r()
}

function $r() {
    P(ie(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = y.useContext(X),
        {
            basename: t,
            navigator: r
        } = y.useContext(N),
        {
            matches: n
        } = y.useContext(F),
        {
            pathname: o
        } = H(),
        i = JSON.stringify(_t(n)),
        a = y.useRef(!1);
    return At(() => {
        a.current = !0
    }), y.useCallback((u, l = {}) => {
        if (D(a.current, Ot), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = Pt(u, JSON.parse(i), o, l.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : j([t, f.pathname])), (l.replace ? r.replace : r.push)(f, l.state, l)
    }, [t, r, i, o, e])
}
y.createContext(null);

function Xo() {
    let {
        matches: e
    } = y.useContext(F), t = e[e.length - 1];
    return t ? t.params : {}
}

function ae(e, {
    relative: t
} = {}) {
    let {
        matches: r
    } = y.useContext(F), {
        pathname: n
    } = H(), o = JSON.stringify(_t(r));
    return y.useMemo(() => Pt(e, JSON.parse(o), n, t === "path"), [e, o, n, t])
}

function Nr(e, t) {
    return It(e, t)
}

function It(e, t, r, n) {
    var d;
    P(ie(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: o
    } = y.useContext(N), {
        matches: i
    } = y.useContext(F), a = i[i.length - 1], s = a ? a.params : {}, u = a ? a.pathname : "/", l = a ? a.pathnameBase : "/", f = a && a.route; {
        let v = f && f.path || "";
        Dt(u, !f || v.endsWith("*") || v.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)
    }
    let g = H(),
        p;
    if (t) {
        let v = typeof t == "string" ? G(t) : t;
        P(l === "/" || ((d = v.pathname) == null ? void 0 : d.startsWith(l)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${v.pathname}" was given in the \`location\` prop.`), p = v
    } else p = g;
    let w = p.pathname || "/",
        c = w;
    if (l !== "/") {
        let v = l.replace(/^\//, "").split("/");
        c = "/" + w.replace(/^\//, "").split("/").slice(v.length).join("/")
    }
    let m = Et(e, {
        pathname: c
    });
    D(f || m != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `), D(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let h = Ur(m && m.map(v => Object.assign({}, v, {
        params: Object.assign({}, s, v.params),
        pathname: j([l, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]),
        pathnameBase: v.pathnameBase === "/" ? l : j([l, o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
    })), i, r, n);
    return t && h ? y.createElement(oe.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...p
            },
            navigationType: "POP"
        }
    }, h) : h
}

function Fr() {
    let e = qr(),
        t = Ar(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
        r = e instanceof Error ? e.stack : null,
        n = "rgba(200,200,200, 0.5)",
        o = {
            padding: "0.5rem",
            backgroundColor: n
        },
        i = {
            padding: "2px 4px",
            backgroundColor: n
        },
        a = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), a = y.createElement(y.Fragment, null, y.createElement("p", null, "💿 Hey developer 👋"), y.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", y.createElement("code", {
        style: i
    }, "ErrorBoundary"), " or", " ", y.createElement("code", {
        style: i
    }, "errorElement"), " prop on your route.")), y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? y.createElement("pre", {
        style: o
    }, r) : null, a)
}
var jr = y.createElement(Fr, null),
    zr = class extends y.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error !== void 0 ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            console.error("React Router caught the following error during render", e, t)
        }
        render() {
            return this.state.error !== void 0 ? y.createElement(F.Provider, {
                value: this.props.routeContext
            }, y.createElement(Ke.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function Br({
    routeContext: e,
    match: t,
    children: r
}) {
    let n = y.useContext(X);
    return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), y.createElement(F.Provider, {
        value: e
    }, r)
}

function Ur(e, t = [], r = null, n = null) {
    if (e == null) {
        if (!r) return null;
        if (r.errors) e = r.matches;
        else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
        else return null
    }
    let o = e,
        i = r == null ? void 0 : r.errors;
    if (i != null) {
        let u = o.findIndex(l => l.route.id && (i == null ? void 0 : i[l.route.id]) !== void 0);
        P(u >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), o = o.slice(0, Math.min(o.length, u + 1))
    }
    let a = !1,
        s = -1;
    if (r)
        for (let u = 0; u < o.length; u++) {
            let l = o[u];
            if ((l.route.HydrateFallback || l.route.hydrateFallbackElement) && (s = u), l.route.id) {
                let {
                    loaderData: f,
                    errors: g
                } = r, p = l.route.loader && !f.hasOwnProperty(l.route.id) && (!g || g[l.route.id] === void 0);
                if (l.route.lazy || p) {
                    a = !0, s >= 0 ? o = o.slice(0, s + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((u, l, f) => {
        let g, p = !1,
            w = null,
            c = null;
        r && (g = i && l.route.id ? i[l.route.id] : void 0, w = l.route.errorElement || jr, a && (s < 0 && f === 0 ? (Dt("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), p = !0, c = null) : s === f && (p = !0, c = l.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1)),
            h = () => {
                let d;
                return g ? d = w : p ? d = c : l.route.Component ? d = y.createElement(l.route.Component, null) : l.route.element ? d = l.route.element : d = u, y.createElement(Br, {
                    match: l,
                    routeContext: {
                        outlet: u,
                        matches: m,
                        isDataRoute: r != null
                    },
                    children: d
                })
            };
        return r && (l.route.ErrorBoundary || l.route.errorElement || f === 0) ? y.createElement(zr, {
            location: r.location,
            revalidation: r.revalidation,
            component: w,
            error: g,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}

function Ve(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Wr(e) {
    let t = y.useContext(X);
    return P(t, Ve(e)), t
}

function Hr(e) {
    let t = y.useContext(Se);
    return P(t, Ve(e)), t
}

function Kr(e) {
    let t = y.useContext(F);
    return P(t, Ve(e)), t
}

function qe(e) {
    let t = Kr(e),
        r = t.matches[t.matches.length - 1];
    return P(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id
}

function Vr() {
    return qe("useRouteId")
}

function qr() {
    var n;
    let e = y.useContext(Ke),
        t = Hr("useRouteError"),
        r = qe("useRouteError");
    return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r]
}

function Yr() {
    let {
        router: e
    } = Wr("useNavigate"), t = qe("useNavigate"), r = y.useRef(!1);
    return At(() => {
        r.current = !0
    }), y.useCallback(async (o, i = {}) => {
        D(r.current, Ot), r.current && (typeof o == "number" ? e.navigate(o) : await e.navigate(o, {
            fromRouteId: t,
            ...i
        }))
    }, [e, t])
}
var lt = {};

function Dt(e, t, r) {
    !t && !lt[e] && (lt[e] = !0, D(!1, r))
}
y.memo(Jr);

function Jr({
    routes: e,
    future: t,
    state: r
}) {
    return It(e, void 0, r, t)
}

function Gr(e) {
    P(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function Xr({
    basename: e = "/",
    children: t = null,
    location: r,
    navigationType: n = "POP",
    navigator: o,
    static: i = !1
}) {
    P(!ie(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let a = e.replace(/^\/*/, "/"),
        s = y.useMemo(() => ({
            basename: a,
            navigator: o,
            static: i,
            future: {}
        }), [a, o, i]);
    typeof r == "string" && (r = G(r));
    let {
        pathname: u = "/",
        search: l = "",
        hash: f = "",
        state: g = null,
        key: p = "default"
    } = r, w = y.useMemo(() => {
        let c = B(u, a);
        return c == null ? null : {
            location: {
                pathname: c,
                search: l,
                hash: f,
                state: g,
                key: p
            },
            navigationType: n
        }
    }, [a, u, l, f, g, p, n]);
    return D(w != null, `<Router basename="${a}"> is not able to match the URL "${u}${l}${f}" because it does not start with the basename, so the <Router> won't render anything.`), w == null ? null : y.createElement(N.Provider, {
        value: s
    }, y.createElement(oe.Provider, {
        children: t,
        value: w
    }))
}

function Qo({
    children: e,
    location: t
}) {
    return Nr(Ne(e), t)
}

function Ne(e, t = []) {
    let r = [];
    return y.Children.forEach(e, (n, o) => {
        if (!y.isValidElement(n)) return;
        let i = [...t, o];
        if (n.type === y.Fragment) {
            r.push.apply(r, Ne(n.props.children, i));
            return
        }
        P(n.type === Gr, `[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), P(!n.props.index || !n.props.children, "An index route cannot have child routes.");
        let a = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            hydrateFallbackElement: n.props.hydrateFallbackElement,
            HydrateFallback: n.props.HydrateFallback,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.hasErrorBoundary === !0 || n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (a.children = Ne(n.props.children, i)), r.push(a)
    }), r
}
var de = "get",
    he = "application/x-www-form-urlencoded";

function xe(e) {
    return e != null && typeof e.tagName == "string"
}

function Qr(e) {
    return xe(e) && e.tagName.toLowerCase() === "button"
}

function Zr(e) {
    return xe(e) && e.tagName.toLowerCase() === "form"
}

function en(e) {
    return xe(e) && e.tagName.toLowerCase() === "input"
}

function tn(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function rn(e, t) {
    return e.button === 0 && (!t || t === "_self") && !tn(e)
}

function Fe(e = "") {
    return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, r) => {
        let n = e[r];
        return t.concat(Array.isArray(n) ? n.map(o => [r, o]) : [
            [r, n]
        ])
    }, []))
}

function nn(e, t) {
    let r = Fe(e);
    return t && t.forEach((n, o) => {
        r.has(o) || t.getAll(o).forEach(i => {
            r.append(o, i)
        })
    }), r
}
var se = null;

function on() {
    if (se === null) try {
        new FormData(document.createElement("form"), 0), se = !1
    } catch {
        se = !0
    }
    return se
}
var an = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Oe(e) {
    return e != null && !an.has(e) ? (D(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${he}"`), null) : e
}

function un(e, t) {
    let r, n, o, i, a;
    if (Zr(e)) {
        let s = e.getAttribute("action");
        n = s ? B(s, t) : null, r = e.getAttribute("method") || de, o = Oe(e.getAttribute("enctype")) || he, i = new FormData(e)
    } else if (Qr(e) || en(e) && (e.type === "submit" || e.type === "image")) {
        let s = e.form;
        if (s == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || s.getAttribute("action");
        if (n = u ? B(u, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || de, o = Oe(e.getAttribute("formenctype")) || Oe(s.getAttribute("enctype")) || he, i = new FormData(s, e), !on()) {
            let {
                name: l,
                type: f,
                value: g
            } = e;
            if (f === "image") {
                let p = l ? `${l}.` : "";
                i.append(`${p}x`, "0"), i.append(`${p}y`, "0")
            } else l && i.append(l, g)
        }
    } else {
        if (xe(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = de, n = null, o = he, a = e
    }
    return i && o === "text/plain" && (a = i, i = void 0), {
        action: n,
        method: r.toLowerCase(),
        encType: o,
        formData: i,
        body: a
    }
}

function Ye(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
async function sn(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let r = await
        import (e.module);
        return t[e.id] = r, r
    } catch (r) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function ln(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function cn(e, t, r) {
    let n = await Promise.all(e.map(async o => {
        let i = t.routes[o.route.id];
        if (i) {
            let a = await sn(i, r);
            return a.links ? a.links() : []
        }
        return []
    }));
    return pn(n.flat(1).filter(ln).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? { ...o,
        rel: "prefetch",
        as: "style"
    } : { ...o,
        rel: "prefetch"
    }))
}

function ct(e, t, r, n, o, i) {
    let a = (u, l) => r[l] ? u.route.id !== r[l].route.id : !0,
        s = (u, l) => {
            var f;
            return r[l].pathname !== u.pathname || ((f = r[l].route.path) == null ? void 0 : f.endsWith("*")) && r[l].params["*"] !== u.params["*"]
        };
    return i === "assets" ? t.filter((u, l) => a(u, l) || s(u, l)) : i === "data" ? t.filter((u, l) => {
        var g;
        let f = n.routes[u.route.id];
        if (!f || !f.hasLoader) return !1;
        if (a(u, l) || s(u, l)) return !0;
        if (u.route.shouldRevalidate) {
            let p = u.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: ((g = r[0]) == null ? void 0 : g.params) || {},
                nextUrl: new URL(e, window.origin),
                nextParams: u.params,
                defaultShouldRevalidate: !0
            });
            if (typeof p == "boolean") return p
        }
        return !0
    }) : []
}

function fn(e, t, {
    includeHydrateFallback: r
} = {}) {
    return dn(e.map(n => {
        let o = t.routes[n.route.id];
        if (!o) return [];
        let i = [o.module];
        return o.clientActionModule && (i = i.concat(o.clientActionModule)), o.clientLoaderModule && (i = i.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (i = i.concat(o.hydrateFallbackModule)), o.imports && (i = i.concat(o.imports)), i
    }).flat(1))
}

function dn(e) {
    return [...new Set(e)]
}

function hn(e) {
    let t = {},
        r = Object.keys(e).sort();
    for (let n of r) t[n] = e[n];
    return t
}

function pn(e, t) {
    let r = new Set;
    return new Set(t), e.reduce((n, o) => {
        let i = JSON.stringify(hn(o));
        return r.has(i) || (r.add(i), n.push({
            key: i,
            link: o
        })), n
    }, [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var mn = new Set([100, 101, 204, 205]);

function yn(e, t) {
    let r = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = "_root.data" : t && B(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/,"")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/,"")}.data`, r
}

function Lt() {
    let e = y.useContext(X);
    return Ye(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
}

function gn() {
    let e = y.useContext(Se);
    return Ye(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
}
var Je = y.createContext(void 0);
Je.displayName = "FrameworkContext";

function $t() {
    let e = y.useContext(Je);
    return Ye(e, "You must render this element inside a <HydratedRouter> element"), e
}

function vn(e, t) {
    let r = y.useContext(Je),
        [n, o] = y.useState(!1),
        [i, a] = y.useState(!1),
        {
            onFocus: s,
            onBlur: u,
            onMouseEnter: l,
            onMouseLeave: f,
            onTouchStart: g
        } = t,
        p = y.useRef(null);
    y.useEffect(() => {
        if (e === "render" && a(!0), e === "viewport") {
            let m = d => {
                    d.forEach(v => {
                        a(v.isIntersecting)
                    })
                },
                h = new IntersectionObserver(m, {
                    threshold: .5
                });
            return p.current && h.observe(p.current), () => {
                h.disconnect()
            }
        }
    }, [e]), y.useEffect(() => {
        if (n) {
            let m = setTimeout(() => {
                a(!0)
            }, 100);
            return () => {
                clearTimeout(m)
            }
        }
    }, [n]);
    let w = () => {
            o(!0)
        },
        c = () => {
            o(!1), a(!1)
        };
    return r ? e !== "intent" ? [i, p, {}] : [i, p, {
        onFocus: Z(s, w),
        onBlur: Z(u, c),
        onMouseEnter: Z(l, w),
        onMouseLeave: Z(f, c),
        onTouchStart: Z(g, w)
    }] : [!1, p, {}]
}

function Z(e, t) {
    return r => {
        e && e(r), r.defaultPrevented || t(r)
    }
}

function wn({
    page: e,
    ...t
}) {
    let {
        router: r
    } = Lt(), n = y.useMemo(() => Et(r.routes, e, r.basename), [r.routes, e, r.basename]);
    return n ? y.createElement(Sn, {
        page: e,
        matches: n,
        ...t
    }) : null
}

function bn(e) {
    let {
        manifest: t,
        routeModules: r
    } = $t(), [n, o] = y.useState([]);
    return y.useEffect(() => {
        let i = !1;
        return cn(e, t, r).then(a => {
            i || o(a)
        }), () => {
            i = !0
        }
    }, [e, t, r]), n
}

function Sn({
    page: e,
    matches: t,
    ...r
}) {
    let n = H(),
        {
            manifest: o,
            routeModules: i
        } = $t(),
        {
            basename: a
        } = Lt(),
        {
            loaderData: s,
            matches: u
        } = gn(),
        l = y.useMemo(() => ct(e, t, u, o, n, "data"), [e, t, u, o, n]),
        f = y.useMemo(() => ct(e, t, u, o, n, "assets"), [e, t, u, o, n]),
        g = y.useMemo(() => {
            if (e === n.pathname + n.search + n.hash) return [];
            let c = new Set,
                m = !1;
            if (t.forEach(d => {
                    var S;
                    let v = o.routes[d.route.id];
                    !v || !v.hasLoader || (!l.some(b => b.route.id === d.route.id) && d.route.id in s && ((S = i[d.route.id]) != null && S.shouldRevalidate) || v.hasClientLoader ? m = !0 : c.add(d.route.id))
                }), c.size === 0) return [];
            let h = yn(e, a);
            return m && c.size > 0 && h.searchParams.set("_routes", t.filter(d => c.has(d.route.id)).map(d => d.route.id).join(",")), [h.pathname + h.search]
        }, [a, s, n, o, l, t, e, i]),
        p = y.useMemo(() => fn(f, o), [f, o]),
        w = bn(f);
    return y.createElement(y.Fragment, null, g.map(c => y.createElement("link", {
        key: c,
        rel: "prefetch",
        as: "fetch",
        href: c,
        ...r
    })), p.map(c => y.createElement("link", {
        key: c,
        rel: "modulepreload",
        href: c,
        ...r
    })), w.map(({
        key: c,
        link: m
    }) => y.createElement("link", {
        key: c,
        ...m
    })))
}

function xn(...e) {
    return t => {
        e.forEach(r => {
            typeof r == "function" ? r(t) : r != null && (r.current = t)
        })
    }
}
var Nt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Nt && (window.__reactRouterVersion = "7.6.2")
} catch {}

function Zo({
    basename: e,
    children: t,
    window: r
}) {
    let n = y.useRef();
    n.current == null && (n.current = sr({
        window: r,
        v5Compat: !0
    }));
    let o = n.current,
        [i, a] = y.useState({
            action: o.action,
            location: o.location
        }),
        s = y.useCallback(u => {
            y.startTransition(() => a(u))
        }, [a]);
    return y.useLayoutEffect(() => o.listen(s), [o, s]), y.createElement(Xr, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: o
    })
}
var Ft = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    jt = y.forwardRef(function({
        onClick: t,
        discover: r = "render",
        prefetch: n = "none",
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: u,
        to: l,
        preventScrollReset: f,
        viewTransition: g,
        ...p
    }, w) {
        let {
            basename: c
        } = y.useContext(N), m = typeof l == "string" && Ft.test(l), h, d = !1;
        if (typeof l == "string" && m && (h = l, Nt)) try {
            let C = new URL(window.location.href),
                O = l.startsWith("//") ? new URL(C.protocol + l) : new URL(l),
                L = B(O.pathname, c);
            O.origin === C.origin && L != null ? l = L + O.search + O.hash : d = !0
        } catch {
            D(!1, `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let v = Lr(l, {
                relative: o
            }),
            [S, b, x] = vn(n, p),
            E = _n(l, {
                replace: a,
                state: s,
                target: u,
                preventScrollReset: f,
                relative: o,
                viewTransition: g
            });

        function R(C) {
            t && t(C), C.defaultPrevented || E(C)
        }
        let _ = y.createElement("a", { ...p,
            ...x,
            href: h || v,
            onClick: d || i ? t : R,
            ref: xn(w, b),
            target: u,
            "data-discover": !m && r === "render" ? "true" : void 0
        });
        return S && !m ? y.createElement(y.Fragment, null, _, y.createElement(wn, {
            page: v
        })) : _
    });
jt.displayName = "Link";
var En = y.forwardRef(function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: o = !1,
    style: i,
    to: a,
    viewTransition: s,
    children: u,
    ...l
}, f) {
    let g = ae(a, {
            relative: l.relative
        }),
        p = H(),
        w = y.useContext(Se),
        {
            navigator: c,
            basename: m
        } = y.useContext(N),
        h = w != null && An(g) && s === !0,
        d = c.encodeLocation ? c.encodeLocation(g).pathname : g.pathname,
        v = p.pathname,
        S = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    r || (v = v.toLowerCase(), S = S ? S.toLowerCase() : null, d = d.toLowerCase()), S && m && (S = B(S, m) || S);
    const b = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let x = v === d || !o && v.startsWith(d) && v.charAt(b) === "/",
        E = S != null && (S === d || !o && S.startsWith(d) && S.charAt(d.length) === "/"),
        R = {
            isActive: x,
            isPending: E,
            isTransitioning: h
        },
        _ = x ? t : void 0,
        C;
    typeof n == "function" ? C = n(R) : C = [n, x ? "active" : null, E ? "pending" : null, h ? "transitioning" : null].filter(Boolean).join(" ");
    let O = typeof i == "function" ? i(R) : i;
    return y.createElement(jt, { ...l,
        "aria-current": _,
        className: C,
        ref: f,
        style: O,
        to: a,
        viewTransition: s
    }, typeof u == "function" ? u(R) : u)
});
En.displayName = "NavLink";
var Cn = y.forwardRef(({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: o,
    state: i,
    method: a = de,
    action: s,
    onSubmit: u,
    relative: l,
    preventScrollReset: f,
    viewTransition: g,
    ...p
}, w) => {
    let c = Mn(),
        m = On(s, {
            relative: l
        }),
        h = a.toLowerCase() === "get" ? "get" : "post",
        d = typeof s == "string" && Ft.test(s),
        v = S => {
            if (u && u(S), S.defaultPrevented) return;
            S.preventDefault();
            let b = S.nativeEvent.submitter,
                x = (b == null ? void 0 : b.getAttribute("formmethod")) || a;
            c(b || S.currentTarget, {
                fetcherKey: t,
                method: x,
                navigate: r,
                replace: o,
                state: i,
                relative: l,
                preventScrollReset: f,
                viewTransition: g
            })
        };
    return y.createElement("form", {
        ref: w,
        method: h,
        action: m,
        onSubmit: n ? u : v,
        ...p,
        "data-discover": !d && e === "render" ? "true" : void 0
    })
});
Cn.displayName = "Form";

function Rn(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function zt(e) {
    let t = y.useContext(X);
    return P(t, Rn(e)), t
}

function _n(e, {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: o,
    relative: i,
    viewTransition: a
} = {}) {
    let s = Tt(),
        u = H(),
        l = ae(e, {
            relative: i
        });
    return y.useCallback(f => {
        if (rn(f, t)) {
            f.preventDefault();
            let g = r !== void 0 ? r : te(u) === te(l);
            s(e, {
                replace: g,
                state: n,
                preventScrollReset: o,
                relative: i,
                viewTransition: a
            })
        }
    }, [u, s, l, r, n, t, e, o, i, a])
}

function ei(e) {
    D(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = y.useRef(Fe(e)),
        r = y.useRef(!1),
        n = H(),
        o = y.useMemo(() => nn(n.search, r.current ? null : t.current), [n.search]),
        i = Tt(),
        a = y.useCallback((s, u) => {
            const l = Fe(typeof s == "function" ? s(o) : s);
            r.current = !0, i("?" + l, u)
        }, [i, o]);
    return [o, a]
}
var Pn = 0,
    kn = () => `__${String(++Pn)}__`;

function Mn() {
    let {
        router: e
    } = zt("useSubmit"), {
        basename: t
    } = y.useContext(N), r = Vr();
    return y.useCallback(async (n, o = {}) => {
        let {
            action: i,
            method: a,
            encType: s,
            formData: u,
            body: l
        } = un(n, t);
        if (o.navigate === !1) {
            let f = o.fetcherKey || kn();
            await e.fetch(f, r, o.action || i, {
                preventScrollReset: o.preventScrollReset,
                formData: u,
                body: l,
                formMethod: o.method || a,
                formEncType: o.encType || s,
                flushSync: o.flushSync
            })
        } else await e.navigate(o.action || i, {
            preventScrollReset: o.preventScrollReset,
            formData: u,
            body: l,
            formMethod: o.method || a,
            formEncType: o.encType || s,
            replace: o.replace,
            state: o.state,
            fromRouteId: r,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition
        })
    }, [e, t, r])
}

function On(e, {
    relative: t
} = {}) {
    let {
        basename: r
    } = y.useContext(N), n = y.useContext(F);
    P(n, "useFormAction must be used inside a RouteContext");
    let [o] = n.matches.slice(-1), i = { ...ae(e || ".", {
            relative: t
        })
    }, a = H();
    if (e == null) {
        i.search = a.search;
        let s = new URLSearchParams(i.search),
            u = s.getAll("index");
        if (u.some(f => f === "")) {
            s.delete("index"), u.filter(g => g).forEach(g => s.append("index", g));
            let f = s.toString();
            i.search = f ? `?${f}` : ""
        }
    }
    return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : j([r, i.pathname])), te(i)
}

function An(e, t = {}) {
    let r = y.useContext(Mt);
    P(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: n
    } = zt("useViewTransitionState"), o = ae(e, {
        relative: t.relative
    });
    if (!r.isTransitioning) return !1;
    let i = B(r.currentLocation.pathname, n) || r.currentLocation.pathname,
        a = B(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return me(o.pathname, a) != null || me(o.pathname, i) != null
}[...mn];

function M(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Tn = typeof Symbol == "function" && Symbol.observable || "@@observable",
    ft = Tn,
    Ae = () => Math.random().toString(36).substring(7).split("").join("."),
    In = {
        INIT: `@@redux/INIT${Ae()}`,
        REPLACE: `@@redux/REPLACE${Ae()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ae()}`
    },
    ye = In;

function Ge(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}

function Bt(e, t, r) {
    if (typeof e != "function") throw new Error(M(2));
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(M(0));
    if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error(M(1));
        return r(Bt)(e, t)
    }
    let n = e,
        o = t,
        i = new Map,
        a = i,
        s = 0,
        u = !1;

    function l() {
        a === i && (a = new Map, i.forEach((h, d) => {
            a.set(d, h)
        }))
    }

    function f() {
        if (u) throw new Error(M(3));
        return o
    }

    function g(h) {
        if (typeof h != "function") throw new Error(M(4));
        if (u) throw new Error(M(5));
        let d = !0;
        l();
        const v = s++;
        return a.set(v, h),
            function() {
                if (d) {
                    if (u) throw new Error(M(6));
                    d = !1, l(), a.delete(v), i = null
                }
            }
    }

    function p(h) {
        if (!Ge(h)) throw new Error(M(7));
        if (typeof h.type > "u") throw new Error(M(8));
        if (typeof h.type != "string") throw new Error(M(17));
        if (u) throw new Error(M(9));
        try {
            u = !0, o = n(o, h)
        } finally {
            u = !1
        }
        return (i = a).forEach(v => {
            v()
        }), h
    }

    function w(h) {
        if (typeof h != "function") throw new Error(M(10));
        n = h, p({
            type: ye.REPLACE
        })
    }

    function c() {
        const h = g;
        return {
            subscribe(d) {
                if (typeof d != "object" || d === null) throw new Error(M(11));

                function v() {
                    const b = d;
                    b.next && b.next(f())
                }
                return v(), {
                    unsubscribe: h(v)
                }
            },
            [ft]() {
                return this
            }
        }
    }
    return p({
        type: ye.INIT
    }), {
        dispatch: p,
        subscribe: g,
        getState: f,
        replaceReducer: w,
        [ft]: c
    }
}

function Dn(e) {
    Object.keys(e).forEach(t => {
        const r = e[t];
        if (typeof r(void 0, {
                type: ye.INIT
            }) > "u") throw new Error(M(12));
        if (typeof r(void 0, {
                type: ye.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(M(13))
    })
}

function Ln(e) {
    const t = Object.keys(e),
        r = {};
    for (let i = 0; i < t.length; i++) {
        const a = t[i];
        typeof e[a] == "function" && (r[a] = e[a])
    }
    const n = Object.keys(r);
    let o;
    try {
        Dn(r)
    } catch (i) {
        o = i
    }
    return function(a = {}, s) {
        if (o) throw o;
        let u = !1;
        const l = {};
        for (let f = 0; f < n.length; f++) {
            const g = n[f],
                p = r[g],
                w = a[g],
                c = p(w, s);
            if (typeof c > "u") throw s && s.type, new Error(M(14));
            l[g] = c, u = u || c !== w
        }
        return u = u || n.length !== Object.keys(a).length, u ? l : a
    }
}

function ge(...e) {
    return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)))
}

function $n(...e) {
    return t => (r, n) => {
        const o = t(r, n);
        let i = () => {
            throw new Error(M(15))
        };
        const a = {
                getState: o.getState,
                dispatch: (u, ...l) => i(u, ...l)
            },
            s = e.map(u => u(a));
        return i = ge(...s)(o.dispatch), { ...o,
            dispatch: i
        }
    }
}

function Ut(e) {
    return Ge(e) && "type" in e && typeof e.type == "string"
}
var Wt = Symbol.for("immer-nothing"),
    dt = Symbol.for("immer-draftable"),
    A = Symbol.for("immer-state");

function I(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var J = Object.getPrototypeOf;

function $(e) {
    return !!e && !!e[A]
}

function U(e) {
    var t;
    return e ? Ht(e) || Array.isArray(e) || !!e[dt] || !!((t = e.constructor) != null && t[dt]) || Ce(e) || Re(e) : !1
}
var Nn = Object.prototype.constructor.toString();

function Ht(e) {
    if (!e || typeof e != "object") return !1;
    const t = J(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Nn
}

function ve(e, t) {
    Ee(e) === 0 ? Reflect.ownKeys(e).forEach(r => {
        t(r, e[r], e)
    }) : e.forEach((r, n) => t(n, r, e))
}

function Ee(e) {
    const t = e[A];
    return t ? t.type_ : Array.isArray(e) ? 1 : Ce(e) ? 2 : Re(e) ? 3 : 0
}

function je(e, t) {
    return Ee(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Kt(e, t, r) {
    const n = Ee(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}

function Fn(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function Ce(e) {
    return e instanceof Map
}

function Re(e) {
    return e instanceof Set
}

function K(e) {
    return e.copy_ || e.base_
}

function ze(e, t) {
    if (Ce(e)) return new Map(e);
    if (Re(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const r = Ht(e);
    if (t === !0 || t === "class_only" && !r) {
        const n = Object.getOwnPropertyDescriptors(e);
        delete n[A];
        let o = Reflect.ownKeys(n);
        for (let i = 0; i < o.length; i++) {
            const a = o[i],
                s = n[a];
            s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[a] = {
                configurable: !0,
                writable: !0,
                enumerable: s.enumerable,
                value: e[a]
            })
        }
        return Object.create(J(e), n)
    } else {
        const n = J(e);
        if (n !== null && r) return { ...e
        };
        const o = Object.create(n);
        return Object.assign(o, e)
    }
}

function Xe(e, t = !1) {
    return _e(e) || $(e) || !U(e) || (Ee(e) > 1 && (e.set = e.add = e.clear = e.delete = jn), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Xe(n, !0))), e
}

function jn() {
    I(2)
}

function _e(e) {
    return Object.isFrozen(e)
}
var zn = {};

function q(e) {
    const t = zn[e];
    return t || I(0, e), t
}
var re;

function Vt() {
    return re
}

function Bn(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function ht(e, t) {
    t && (q("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Be(e) {
    Ue(e), e.drafts_.forEach(Un), e.drafts_ = null
}

function Ue(e) {
    e === re && (re = e.parent_)
}

function pt(e) {
    return re = Bn(re, e)
}

function Un(e) {
    const t = e[A];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function mt(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return e !== void 0 && e !== r ? (r[A].modified_ && (Be(t), I(4)), U(e) && (e = we(t, e), t.parent_ || be(t, e)), t.patches_ && q("Patches").generateReplacementPatches_(r[A].base_, e, t.patches_, t.inversePatches_)) : e = we(t, r, []), Be(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Wt ? e : void 0
}

function we(e, t, r) {
    if (_e(t)) return t;
    const n = t[A];
    if (!n) return ve(t, (o, i) => yt(e, n, t, o, i, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return be(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
        n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
        const o = n.copy_;
        let i = o,
            a = !1;
        n.type_ === 3 && (i = new Set(o), o.clear(), a = !0), ve(i, (s, u) => yt(e, n, o, s, u, r, a)), be(e, o, !1), r && e.patches_ && q("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
    }
    return n.copy_
}

function yt(e, t, r, n, o, i, a) {
    if ($(o)) {
        const s = i && t && t.type_ !== 3 && !je(t.assigned_, n) ? i.concat(n) : void 0,
            u = we(e, o, s);
        if (Kt(r, n, u), $(u)) e.canAutoFreeze_ = !1;
        else return
    } else a && r.add(o);
    if (U(o) && !_e(o)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        we(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && be(e, o)
    }
}

function be(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Xe(t, r)
}

function Wn(e, t) {
    const r = Array.isArray(e),
        n = {
            type_: r ? 1 : 0,
            scope_: t ? t.scope_ : Vt(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let o = n,
        i = Qe;
    r && (o = [n], i = ne);
    const {
        revoke: a,
        proxy: s
    } = Proxy.revocable(o, i);
    return n.draft_ = s, n.revoke_ = a, s
}
var Qe = {
        get(e, t) {
            if (t === A) return e;
            const r = K(e);
            if (!je(r, t)) return Hn(e, r, t);
            const n = r[t];
            return e.finalized_ || !U(n) ? n : n === Te(e.base_, t) ? (Ie(e), e.copy_[t] = He(n, e)) : n
        },
        has(e, t) {
            return t in K(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(K(e))
        },
        set(e, t, r) {
            const n = qt(K(e), t);
            if (n != null && n.set) return n.set.call(e.draft_, r), !0;
            if (!e.modified_) {
                const o = Te(K(e), t),
                    i = o == null ? void 0 : o[A];
                if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                if (Fn(r, o) && (r !== void 0 || je(e.base_, t))) return !0;
                Ie(e), We(e)
            }
            return e.copy_[t] === r && (r !== void 0 || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return Te(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ie(e), We(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const r = K(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: n.enumerable,
                value: r[t]
            }
        },
        defineProperty() {
            I(11)
        },
        getPrototypeOf(e) {
            return J(e.base_)
        },
        setPrototypeOf() {
            I(12)
        }
    },
    ne = {};
ve(Qe, (e, t) => {
    ne[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
ne.deleteProperty = function(e, t) {
    return ne.set.call(this, e, t, void 0)
};
ne.set = function(e, t, r) {
    return Qe.set.call(this, e[0], t, r, e[0])
};

function Te(e, t) {
    const r = e[A];
    return (r ? K(r) : e)[t]
}

function Hn(e, t, r) {
    var o;
    const n = qt(t, r);
    return n ? "value" in n ? n.value : (o = n.get) == null ? void 0 : o.call(e.draft_) : void 0
}

function qt(e, t) {
    if (!(t in e)) return;
    let r = J(e);
    for (; r;) {
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = J(r)
    }
}

function We(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && We(e.parent_))
}

function Ie(e) {
    e.copy_ || (e.copy_ = ze(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Kn = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                const i = r;
                r = t;
                const a = this;
                return function(u = i, ...l) {
                    return a.produce(u, f => r.call(this, f, ...l))
                }
            }
            typeof r != "function" && I(6), n !== void 0 && typeof n != "function" && I(7);
            let o;
            if (U(t)) {
                const i = pt(this),
                    a = He(t, void 0);
                let s = !0;
                try {
                    o = r(a), s = !1
                } finally {
                    s ? Be(i) : Ue(i)
                }
                return ht(i, n), mt(o, i)
            } else if (!t || typeof t != "object") {
                if (o = r(t), o === void 0 && (o = t), o === Wt && (o = void 0), this.autoFreeze_ && Xe(o, !0), n) {
                    const i = [],
                        a = [];
                    q("Patches").generateReplacementPatches_(t, o, i, a), n(i, a)
                }
                return o
            } else I(1, t)
        }, this.produceWithPatches = (t, r) => {
            if (typeof t == "function") return (a, ...s) => this.produceWithPatches(a, u => t(u, ...s));
            let n, o;
            return [this.produce(t, r, (a, s) => {
                n = a, o = s
            }), n, o]
        }, typeof(e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof(e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        U(e) || I(8), $(e) && (e = Ze(e));
        const t = pt(this),
            r = He(e, void 0);
        return r[A].isManual_ = !0, Ue(t), r
    }
    finishDraft(e, t) {
        const r = e && e[A];
        (!r || !r.isManual_) && I(9);
        const {
            scope_: n
        } = r;
        return ht(n, t), mt(void 0, n)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
            const o = t[r];
            if (o.path.length === 0 && o.op === "replace") {
                e = o.value;
                break
            }
        }
        r > -1 && (t = t.slice(r + 1));
        const n = q("Patches").applyPatches_;
        return $(e) ? n(e, t) : this.produce(e, o => n(o, t))
    }
};

function He(e, t) {
    const r = Ce(e) ? q("MapSet").proxyMap_(e, t) : Re(e) ? q("MapSet").proxySet_(e, t) : Wn(e, t);
    return (t ? t.scope_ : Vt()).drafts_.push(r), r
}

function Ze(e) {
    return $(e) || I(10, e), Yt(e)
}

function Yt(e) {
    if (!U(e) || _e(e)) return e;
    const t = e[A];
    let r;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, r = ze(e, t.scope_.immer_.useStrictShallowCopy_)
    } else r = ze(e, !0);
    return ve(r, (n, o) => {
        Kt(r, n, Yt(o))
    }), t && (t.finalized_ = !1), r
}
var T = new Kn,
    et = T.produce;
T.produceWithPatches.bind(T);
T.setAutoFreeze.bind(T);
T.setUseStrictShallowCopy.bind(T);
T.applyPatches.bind(T);
T.createDraft.bind(T);
T.finishDraft.bind(T);

function Vn(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t)
}

function qn(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t)
}

function Yn(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every(r => typeof r == "function")) {
        const r = e.map(n => typeof n == "function" ? `function ${n.name||"unnamed"}()` : typeof n).join(", ");
        throw new TypeError(`${t}[${r}]`)
    }
}
var gt = e => Array.isArray(e) ? e : [e];

function Jn(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Yn(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
}

function Gn(e, t) {
    const r = [],
        {
            length: n
        } = e;
    for (let o = 0; o < n; o++) r.push(e[o].apply(null, t));
    return r
}
var Xn = class {
        constructor(e) {
            this.value = e
        }
        deref() {
            return this.value
        }
    },
    Qn = typeof WeakRef < "u" ? WeakRef : Xn,
    Zn = 0,
    vt = 1;

function le() {
    return {
        s: Zn,
        v: void 0,
        o: null,
        p: null
    }
}

function tt(e, t = {}) {
    let r = le();
    const {
        resultEqualityCheck: n
    } = t;
    let o, i = 0;

    function a() {
        var g;
        let s = r;
        const {
            length: u
        } = arguments;
        for (let p = 0, w = u; p < w; p++) {
            const c = arguments[p];
            if (typeof c == "function" || typeof c == "object" && c !== null) {
                let m = s.o;
                m === null && (s.o = m = new WeakMap);
                const h = m.get(c);
                h === void 0 ? (s = le(), m.set(c, s)) : s = h
            } else {
                let m = s.p;
                m === null && (s.p = m = new Map);
                const h = m.get(c);
                h === void 0 ? (s = le(), m.set(c, s)) : s = h
            }
        }
        const l = s;
        let f;
        if (s.s === vt) f = s.v;
        else if (f = e.apply(null, arguments), i++, n) {
            const p = ((g = o == null ? void 0 : o.deref) == null ? void 0 : g.call(o)) ? ? o;
            p != null && n(p, f) && (f = p, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new Qn(f) : f
        }
        return l.s = vt, l.v = f, f
    }
    return a.clearCache = () => {
        r = le(), a.resetResultsCount()
    }, a.resultsCount = () => i, a.resetResultsCount = () => {
        i = 0
    }, a
}

function Jt(e, ...t) {
    const r = typeof e == "function" ? {
            memoize: e,
            memoizeOptions: t
        } : e,
        n = (...o) => {
            let i = 0,
                a = 0,
                s, u = {},
                l = o.pop();
            typeof l == "object" && (u = l, l = o.pop()), Vn(l, `createSelector expects an output function after the inputs, but received: [${typeof l}]`);
            const f = { ...r,
                    ...u
                },
                {
                    memoize: g,
                    memoizeOptions: p = [],
                    argsMemoize: w = tt,
                    argsMemoizeOptions: c = []
                } = f,
                m = gt(p),
                h = gt(c),
                d = Jn(o),
                v = g(function() {
                    return i++, l.apply(null, arguments)
                }, ...m),
                S = w(function() {
                    a++;
                    const x = Gn(d, arguments);
                    return s = v.apply(null, x), s
                }, ...h);
            return Object.assign(S, {
                resultFunc: l,
                memoizedResultFunc: v,
                dependencies: d,
                dependencyRecomputations: () => a,
                resetDependencyRecomputations: () => {
                    a = 0
                },
                lastResult: () => s,
                recomputations: () => i,
                resetRecomputations: () => {
                    i = 0
                },
                memoize: g,
                argsMemoize: w
            })
        };
    return Object.assign(n, {
        withTypes: () => n
    }), n
}
var eo = Jt(tt),
    to = Object.assign((e, t = eo) => {
        qn(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
        const r = Object.keys(e),
            n = r.map(i => e[i]);
        return t(n, (...i) => i.reduce((a, s, u) => (a[r[u]] = s, a), {}))
    }, {
        withTypes: () => to
    });

function Gt(e) {
    return ({
        dispatch: r,
        getState: n
    }) => o => i => typeof i == "function" ? i(r, n, e) : o(i)
}
var ro = Gt(),
    no = Gt,
    oo = (...e) => {
        const t = Jt(...e),
            r = Object.assign((...n) => {
                const o = t(...n),
                    i = (a, ...s) => o($(a) ? Ze(a) : a, ...s);
                return Object.assign(i, o), i
            }, {
                withTypes: () => r
            });
        return r
    },
    io = oo(tt),
    ao = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? ge : ge.apply(null, arguments)
    };

function wt(e, t) {
    function r(...n) {
        if (t) {
            let o = t(...n);
            if (!o) throw new Error(z(0));
            return {
                type: e,
                payload: o.payload,
                ..."meta" in o && {
                    meta: o.meta
                },
                ..."error" in o && {
                    error: o.error
                }
            }
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return r.toString = () => `${e}`, r.type = e, r.match = n => Ut(n) && n.type === e, r
}

function uo(e) {
    return Ut(e) && Object.keys(e).every(so)
}

function so(e) {
    return ["type", "payload", "error", "meta"].indexOf(e) > -1
}
var Xt = class ee extends Array {
    constructor(...t) {
        super(...t), Object.setPrototypeOf(this, ee.prototype)
    }
    static get[Symbol.species]() {
        return ee
    }
    concat(...t) {
        return super.concat.apply(this, t)
    }
    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0]) ? new ee(...t[0].concat(this)) : new ee(...t.concat(this))
    }
};

function bt(e) {
    return U(e) ? et(e, () => {}) : e
}

function ce(e, t, r) {
    return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t)
}

function lo(e) {
    return typeof e == "boolean"
}
var co = () => function(t) {
        const {
            thunk: r = !0,
            immutableCheck: n = !0,
            serializableCheck: o = !0,
            actionCreatorCheck: i = !0
        } = t ? ? {};
        let a = new Xt;
        return r && (lo(r) ? a.push(ro) : a.push(no(r.extraArgument))), a
    },
    fo = "RTK_autoBatch",
    St = e => t => {
        setTimeout(t, e)
    },
    ho = (e = {
        type: "raf"
    }) => t => (...r) => {
        const n = t(...r);
        let o = !0,
            i = !1,
            a = !1;
        const s = new Set,
            u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : St(10) : e.type === "callback" ? e.queueNotification : St(e.timeout),
            l = () => {
                a = !1, i && (i = !1, s.forEach(f => f()))
            };
        return Object.assign({}, n, {
            subscribe(f) {
                const g = () => o && f(),
                    p = n.subscribe(g);
                return s.add(f), () => {
                    p(), s.delete(f)
                }
            },
            dispatch(f) {
                var g;
                try {
                    return o = !((g = f == null ? void 0 : f.meta) != null && g[fo]), i = !o, i && (a || (a = !0, u(l))), n.dispatch(f)
                } finally {
                    o = !0
                }
            }
        })
    },
    po = e => function(r) {
        const {
            autoBatch: n = !0
        } = r ? ? {};
        let o = new Xt(e);
        return n && o.push(ho(typeof n == "object" ? n : void 0)), o
    };

function ti(e) {
    const t = co(),
        {
            reducer: r = void 0,
            middleware: n,
            devTools: o = !0,
            preloadedState: i = void 0,
            enhancers: a = void 0
        } = e || {};
    let s;
    if (typeof r == "function") s = r;
    else if (Ge(r)) s = Ln(r);
    else throw new Error(z(1));
    let u;
    typeof n == "function" ? u = n(t) : u = t();
    let l = ge;
    o && (l = ao({
        trace: !1,
        ...typeof o == "object" && o
    }));
    const f = $n(...u),
        g = po(f);
    let p = typeof a == "function" ? a(g) : g();
    const w = l(...p);
    return Bt(s, i, w)
}

function Qt(e) {
    const t = {},
        r = [];
    let n;
    const o = {
        addCase(i, a) {
            const s = typeof i == "string" ? i : i.type;
            if (!s) throw new Error(z(28));
            if (s in t) throw new Error(z(29));
            return t[s] = a, o
        },
        addMatcher(i, a) {
            return r.push({
                matcher: i,
                reducer: a
            }), o
        },
        addDefaultCase(i) {
            return n = i, o
        }
    };
    return e(o), [t, r, n]
}

function mo(e) {
    return typeof e == "function"
}

function yo(e, t) {
    let [r, n, o] = Qt(t), i;
    if (mo(e)) i = () => bt(e());
    else {
        const s = bt(e);
        i = () => s
    }

    function a(s = i(), u) {
        let l = [r[u.type], ...n.filter(({
            matcher: f
        }) => f(u)).map(({
            reducer: f
        }) => f)];
        return l.filter(f => !!f).length === 0 && (l = [o]), l.reduce((f, g) => {
            if (g)
                if ($(f)) {
                    const w = g(f, u);
                    return w === void 0 ? f : w
                } else {
                    if (U(f)) return et(f, p => g(p, u)); {
                        const p = g(f, u);
                        if (p === void 0) {
                            if (f === null) return f;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return p
                    }
                }
            return f
        }, s)
    }
    return a.getInitialState = i, a
}
var go = Symbol.for("rtk-slice-createasyncthunk");

function vo(e, t) {
    return `${e}/${t}`
}

function wo({
    creators: e
} = {}) {
    var r;
    const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[go];
    return function(o) {
        const {
            name: i,
            reducerPath: a = i
        } = o;
        if (!i) throw new Error(z(11));
        const s = (typeof o.reducers == "function" ? o.reducers(So()) : o.reducers) || {},
            u = Object.keys(s),
            l = {
                sliceCaseReducersByName: {},
                sliceCaseReducersByType: {},
                actionCreators: {},
                sliceMatchers: []
            },
            f = {
                addCase(b, x) {
                    const E = typeof b == "string" ? b : b.type;
                    if (!E) throw new Error(z(12));
                    if (E in l.sliceCaseReducersByType) throw new Error(z(13));
                    return l.sliceCaseReducersByType[E] = x, f
                },
                addMatcher(b, x) {
                    return l.sliceMatchers.push({
                        matcher: b,
                        reducer: x
                    }), f
                },
                exposeAction(b, x) {
                    return l.actionCreators[b] = x, f
                },
                exposeCaseReducer(b, x) {
                    return l.sliceCaseReducersByName[b] = x, f
                }
            };
        u.forEach(b => {
            const x = s[b],
                E = {
                    reducerName: b,
                    type: vo(i, b),
                    createNotation: typeof o.reducers == "function"
                };
            Eo(x) ? Ro(E, x, f, t) : xo(E, x, f)
        });

        function g() {
            const [b = {}, x = [], E = void 0] = typeof o.extraReducers == "function" ? Qt(o.extraReducers) : [o.extraReducers], R = { ...b,
                ...l.sliceCaseReducersByType
            };
            return yo(o.initialState, _ => {
                for (let C in R) _.addCase(C, R[C]);
                for (let C of l.sliceMatchers) _.addMatcher(C.matcher, C.reducer);
                for (let C of x) _.addMatcher(C.matcher, C.reducer);
                E && _.addDefaultCase(E)
            })
        }
        const p = b => b,
            w = new Map,
            c = new WeakMap;
        let m;

        function h(b, x) {
            return m || (m = g()), m(b, x)
        }

        function d() {
            return m || (m = g()), m.getInitialState()
        }

        function v(b, x = !1) {
            function E(_) {
                let C = _[b];
                return typeof C > "u" && x && (C = ce(c, E, d)), C
            }

            function R(_ = p) {
                const C = ce(w, x, () => new WeakMap);
                return ce(C, _, () => {
                    const O = {};
                    for (const [L, ue] of Object.entries(o.selectors ? ? {})) O[L] = bo(ue, _, () => ce(c, _, d), x);
                    return O
                })
            }
            return {
                reducerPath: b,
                getSelectors: R,
                get selectors() {
                    return R(E)
                },
                selectSlice: E
            }
        }
        const S = {
            name: i,
            reducer: h,
            actions: l.actionCreators,
            caseReducers: l.sliceCaseReducersByName,
            getInitialState: d,
            ...v(a),
            injectInto(b, {
                reducerPath: x,
                ...E
            } = {}) {
                const R = x ? ? a;
                return b.inject({
                    reducerPath: R,
                    reducer: h
                }, E), { ...S,
                    ...v(R, !0)
                }
            }
        };
        return S
    }
}

function bo(e, t, r, n) {
    function o(i, ...a) {
        let s = t(i);
        return typeof s > "u" && n && (s = r()), e(s, ...a)
    }
    return o.unwrapped = e, o
}
var ri = wo();

function So() {
    function e(t, r) {
        return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: t,
            ...r
        }
    }
    return e.withTypes = () => e, {
        reducer(t) {
            return Object.assign({
                [t.name](...r) {
                    return t(...r)
                }
            }[t.name], {
                _reducerDefinitionType: "reducer"
            })
        },
        preparedReducer(t, r) {
            return {
                _reducerDefinitionType: "reducerWithPrepare",
                prepare: t,
                reducer: r
            }
        },
        asyncThunk: e
    }
}

function xo({
    type: e,
    reducerName: t,
    createNotation: r
}, n, o) {
    let i, a;
    if ("reducer" in n) {
        if (r && !Co(n)) throw new Error(z(17));
        i = n.reducer, a = n.prepare
    } else i = n;
    o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? wt(e, a) : wt(e))
}

function Eo(e) {
    return e._reducerDefinitionType === "asyncThunk"
}

function Co(e) {
    return e._reducerDefinitionType === "reducerWithPrepare"
}

function Ro({
    type: e,
    reducerName: t
}, r, n, o) {
    if (!o) throw new Error(z(18));
    const {
        payloadCreator: i,
        fulfilled: a,
        pending: s,
        rejected: u,
        settled: l,
        options: f
    } = r, g = o(e, i, f);
    n.exposeAction(t, g), a && n.addCase(g.fulfilled, a), s && n.addCase(g.pending, s), u && n.addCase(g.rejected, u), l && n.addMatcher(g.settled, l), n.exposeCaseReducer(t, {
        fulfilled: a || fe,
        pending: s || fe,
        rejected: u || fe,
        settled: l || fe
    })
}

function fe() {}

function _o() {
    return {
        ids: [],
        entities: {}
    }
}

function Po(e) {
    function t(r = {}, n) {
        const o = Object.assign(_o(), r);
        return n ? e.setAll(o, n) : o
    }
    return {
        getInitialState: t
    }
}

function ko() {
    function e(t, r = {}) {
        const {
            createSelector: n = io
        } = r, o = g => g.ids, i = g => g.entities, a = n(o, i, (g, p) => g.map(w => p[w])), s = (g, p) => p, u = (g, p) => g[p], l = n(o, g => g.length);
        if (!t) return {
            selectIds: o,
            selectEntities: i,
            selectAll: a,
            selectTotal: l,
            selectById: n(i, s, u)
        };
        const f = n(t, i);
        return {
            selectIds: n(t, o),
            selectEntities: f,
            selectAll: n(t, a),
            selectTotal: n(t, l),
            selectById: n(f, s, u)
        }
    }
    return {
        getSelectors: e
    }
}
var Mo = $;

function Oo(e) {
    const t = k((r, n) => e(n));
    return function(n) {
        return t(n, void 0)
    }
}

function k(e) {
    return function(r, n) {
        function o(a) {
            return uo(a)
        }
        const i = a => {
            o(n) ? e(n.payload, a) : e(n, a)
        };
        return Mo(r) ? (i(r), r) : et(r, i)
    }
}

function Y(e, t) {
    return t(e)
}

function V(e) {
    return Array.isArray(e) || (e = Object.values(e)), e
}

function pe(e) {
    return $(e) ? Ze(e) : e
}

function Zt(e, t, r) {
    e = V(e);
    const n = pe(r.ids),
        o = new Set(n),
        i = [],
        a = new Set([]),
        s = [];
    for (const u of e) {
        const l = Y(u, t);
        o.has(l) || a.has(l) ? s.push({
            id: l,
            changes: u
        }) : (a.add(l), i.push(u))
    }
    return [i, s, n]
}

function er(e) {
    function t(c, m) {
        const h = Y(c, e);
        h in m.entities || (m.ids.push(h), m.entities[h] = c)
    }

    function r(c, m) {
        c = V(c);
        for (const h of c) t(h, m)
    }

    function n(c, m) {
        const h = Y(c, e);
        h in m.entities || m.ids.push(h), m.entities[h] = c
    }

    function o(c, m) {
        c = V(c);
        for (const h of c) n(h, m)
    }

    function i(c, m) {
        c = V(c), m.ids = [], m.entities = {}, r(c, m)
    }

    function a(c, m) {
        return s([c], m)
    }

    function s(c, m) {
        let h = !1;
        c.forEach(d => {
            d in m.entities && (delete m.entities[d], h = !0)
        }), h && (m.ids = m.ids.filter(d => d in m.entities))
    }

    function u(c) {
        Object.assign(c, {
            ids: [],
            entities: {}
        })
    }

    function l(c, m, h) {
        const d = h.entities[m.id];
        if (d === void 0) return !1;
        const v = Object.assign({}, d, m.changes),
            S = Y(v, e),
            b = S !== m.id;
        return b && (c[m.id] = S, delete h.entities[m.id]), h.entities[S] = v, b
    }

    function f(c, m) {
        return g([c], m)
    }

    function g(c, m) {
        const h = {},
            d = {};
        c.forEach(S => {
            var b;
            S.id in m.entities && (d[S.id] = {
                id: S.id,
                changes: { ...(b = d[S.id]) == null ? void 0 : b.changes,
                    ...S.changes
                }
            })
        }), c = Object.values(d), c.length > 0 && c.filter(b => l(h, b, m)).length > 0 && (m.ids = Object.values(m.entities).map(b => Y(b, e)))
    }

    function p(c, m) {
        return w([c], m)
    }

    function w(c, m) {
        const [h, d] = Zt(c, e, m);
        r(h, m), g(d, m)
    }
    return {
        removeAll: Oo(u),
        addOne: k(t),
        addMany: k(r),
        setOne: k(n),
        setMany: k(o),
        setAll: k(i),
        updateOne: k(f),
        updateMany: k(g),
        upsertOne: k(p),
        upsertMany: k(w),
        removeOne: k(a),
        removeMany: k(s)
    }
}

function Ao(e, t, r) {
    let n = 0,
        o = e.length;
    for (; n < o;) {
        let i = n + o >>> 1;
        const a = e[i];
        r(t, a) >= 0 ? n = i + 1 : o = i
    }
    return n
}

function To(e, t, r) {
    const n = Ao(e, t, r);
    return e.splice(n, 0, t), e
}

function Io(e, t) {
    const {
        removeOne: r,
        removeMany: n,
        removeAll: o
    } = er(e);

    function i(h, d) {
        return a([h], d)
    }

    function a(h, d, v) {
        h = V(h);
        const S = new Set(v ? ? pe(d.ids)),
            b = h.filter(x => !S.has(Y(x, e)));
        b.length !== 0 && m(d, b)
    }

    function s(h, d) {
        return u([h], d)
    }

    function u(h, d) {
        if (h = V(h), h.length !== 0) {
            for (const v of h) delete d.entities[e(v)];
            m(d, h)
        }
    }

    function l(h, d) {
        h = V(h), d.entities = {}, d.ids = [], a(h, d, [])
    }

    function f(h, d) {
        return g([h], d)
    }

    function g(h, d) {
        let v = !1,
            S = !1;
        for (let b of h) {
            const x = d.entities[b.id];
            if (!x) continue;
            v = !0, Object.assign(x, b.changes);
            const E = e(x);
            if (b.id !== E) {
                S = !0, delete d.entities[b.id];
                const R = d.ids.indexOf(b.id);
                d.ids[R] = E, d.entities[E] = x
            }
        }
        v && m(d, [], v, S)
    }

    function p(h, d) {
        return w([h], d)
    }

    function w(h, d) {
        const [v, S, b] = Zt(h, e, d);
        v.length && a(v, d, b), S.length && g(S, d)
    }

    function c(h, d) {
        if (h.length !== d.length) return !1;
        for (let v = 0; v < h.length; v++)
            if (h[v] !== d[v]) return !1;
        return !0
    }
    const m = (h, d, v, S) => {
        const b = pe(h.entities),
            x = pe(h.ids),
            E = h.entities;
        let R = x;
        S && (R = new Set(x));
        let _ = [];
        for (const L of R) {
            const ue = b[L];
            ue && _.push(ue)
        }
        const C = _.length === 0;
        for (const L of d) E[e(L)] = L, C || To(_, L, t);
        C ? _ = d.slice().sort(t) : v && _.sort(t);
        const O = _.map(e);
        c(x, O) || (h.ids = O)
    };
    return {
        removeOne: r,
        removeMany: n,
        removeAll: o,
        addOne: k(i),
        updateOne: k(f),
        upsertOne: k(p),
        setOne: k(s),
        setMany: k(u),
        setAll: k(l),
        addMany: k(a),
        updateMany: k(g),
        upsertMany: k(w)
    }
}

function ni(e = {}) {
    const {
        selectId: t,
        sortComparer: r
    } = {
        sortComparer: !1,
        selectId: a => a.id,
        ...e
    }, n = r ? Io(t, r) : er(t), o = Po(n), i = ko();
    return {
        selectId: t,
        sortComparer: r,
        ...o,
        ...i,
        ...n
    }
}

function z(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}

function Do(e) {
    e()
}

function Lo() {
    let e = null,
        t = null;
    return {
        clear() {
            e = null, t = null
        },
        notify() {
            Do(() => {
                let r = e;
                for (; r;) r.callback(), r = r.next
            })
        },
        get() {
            const r = [];
            let n = e;
            for (; n;) r.push(n), n = n.next;
            return r
        },
        subscribe(r) {
            let n = !0;
            const o = t = {
                callback: r,
                next: null,
                prev: t
            };
            return o.prev ? o.prev.next = o : e = o,
                function() {
                    !n || e === null || (n = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next)
                }
        }
    }
}
var xt = {
    notify() {},
    get: () => []
};

function $o(e, t) {
    let r, n = xt,
        o = 0,
        i = !1;

    function a(m) {
        f();
        const h = n.subscribe(m);
        let d = !1;
        return () => {
            d || (d = !0, h(), g())
        }
    }

    function s() {
        n.notify()
    }

    function u() {
        c.onStateChange && c.onStateChange()
    }

    function l() {
        return i
    }

    function f() {
        o++, r || (r = e.subscribe(u), n = Lo())
    }

    function g() {
        o--, r && o === 0 && (r(), r = void 0, n.clear(), n = xt)
    }

    function p() {
        i || (i = !0, f())
    }

    function w() {
        i && (i = !1, g())
    }
    const c = {
        addNestedSub: a,
        notifyNestedSubs: s,
        handleChangeWrapper: u,
        isSubscribed: l,
        trySubscribe: p,
        tryUnsubscribe: w,
        getListeners: () => n
    };
    return c
}
var No = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Fo = No(),
    jo = () => typeof navigator < "u" && navigator.product === "ReactNative",
    zo = jo(),
    Bo = () => Fo || zo ? y.useLayoutEffect : y.useEffect,
    Uo = Bo(),
    De = Symbol.for("react-redux-context"),
    Le = typeof globalThis < "u" ? globalThis : {};

function Wo() {
    if (!y.createContext) return {};
    const e = Le[De] ? ? (Le[De] = new Map);
    let t = e.get(y.createContext);
    return t || (t = y.createContext(null), e.set(y.createContext, t)), t
}
var W = Wo();

function Ho(e) {
    const {
        children: t,
        context: r,
        serverState: n,
        store: o
    } = e, i = y.useMemo(() => {
        const u = $o(o);
        return {
            store: o,
            subscription: u,
            getServerState: n ? () => n : void 0
        }
    }, [o, n]), a = y.useMemo(() => o.getState(), [o]);
    Uo(() => {
        const {
            subscription: u
        } = i;
        return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== o.getState() && u.notifyNestedSubs(), () => {
            u.tryUnsubscribe(), u.onStateChange = void 0
        }
    }, [i, a]);
    const s = r || W;
    return y.createElement(s.Provider, {
        value: i
    }, t)
}
var oi = Ho;

function rt(e = W) {
    return function() {
        return y.useContext(e)
    }
}
var tr = rt();

function rr(e = W) {
    const t = e === W ? tr : rt(e),
        r = () => {
            const {
                store: n
            } = t();
            return n
        };
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var Ko = rr();

function Vo(e = W) {
    const t = e === W ? Ko : rr(e),
        r = () => t().dispatch;
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var ii = Vo(),
    qo = (e, t) => e === t;

function Yo(e = W) {
    const t = e === W ? tr : rt(e),
        r = (n, o = {}) => {
            const {
                equalityFn: i = qo
            } = typeof o == "function" ? {
                equalityFn: o
            } : o, a = t(), {
                store: s,
                subscription: u,
                getServerState: l
            } = a;
            y.useRef(!0);
            const f = y.useCallback({
                    [n.name](p) {
                        return n(p)
                    }
                }[n.name], [n]),
                g = ar.useSyncExternalStoreWithSelector(u.addNestedSub, s.getState, l || s.getState, f, i);
            return y.useDebugValue(g), g
        };
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var ai = Yo();
export {
    Zo as B, oi as P, Qo as R, ni as a, Ln as b, ri as c, ti as d, ii as e, Ko as f, H as g, Tt as h, ei as i, eo as j, Xo as k, Gr as l, ai as u, ar as w
};