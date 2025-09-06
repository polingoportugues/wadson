var Pt = Object.defineProperty;
var Lt = (s, i, t) => i in s ? Pt(s, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[i] = t;
var h = (s, i, t) => Lt(s, typeof i != "symbol" ? i + "" : i, t);
import {
    t as y,
    m as ht,
    l as _t,
    d as N,
    o as D,
    P as S,
    h as I,
    T as Ct,
    c as p,
    p as C,
    R as wt,
    S as z,
    a as k,
    b as Nt,
    e as b,
    f as w,
    A as dt,
    g as pt,
    i as Tt,
    s as ft,
    j as lt,
    k as Et,
    n as mt,
    q as gt,
    r as St,
    u as Rt,
    v as F,
    w as Z,
    x as K,
    y as Ht,
    _ as G,
    z as Dt
} from "./telemetry-otel-Vuk-WXgZ.js";
import {
    p as et
} from "./react-vendor-1qCqAHqt.js";

function kt(s, i, t, e) {
    for (let n = 0, r = s.length; n < r; n++) {
        const o = s[n];
        i && o.setTracerProvider(i), t && o.setMeterProvider(t), e && o.setLoggerProvider && o.setLoggerProvider(e), o.getConfig().enabled || o.enable()
    }
}

function Mt(s) {
    s.forEach(i => i.disable())
}

function ke(s) {
    var r;
    const i = s.tracerProvider || y.getTracerProvider(),
        t = s.meterProvider || ht.getMeterProvider(),
        e = s.loggerProvider || _t.getLoggerProvider(),
        n = ((r = s.instrumentations) == null ? void 0 : r.flat()) ? ? [];
    return kt(n, i, t, e), () => {
        Mt(n)
    }
}
let O = console.error.bind(console);

function M(s, i, t) {
    const e = !!s[i] && Object.prototype.propertyIsEnumerable.call(s, i);
    Object.defineProperty(s, i, {
        configurable: !0,
        enumerable: e,
        writable: !0,
        value: t
    })
}
const vt = (s, i, t) => {
        if (!s || !s[i]) {
            O("no original function " + String(i) + " to wrap");
            return
        }
        if (!t) {
            O("no wrapper function"), O(new Error().stack);
            return
        }
        const e = s[i];
        if (typeof e != "function" || typeof t != "function") {
            O("original object and wrapper must be functions");
            return
        }
        const n = t(e, i);
        return M(n, "__original", e), M(n, "__unwrap", () => {
            s[i] === n && M(s, i, e)
        }), M(n, "__wrapped", !0), M(s, i, n), n
    },
    Ut = (s, i, t) => {
        if (s) Array.isArray(s) || (s = [s]);
        else {
            O("must provide one or more modules to patch"), O(new Error().stack);
            return
        }
        if (!(i && Array.isArray(i))) {
            O("must provide one or more functions to wrap on modules");
            return
        }
        s.forEach(e => {
            i.forEach(n => {
                vt(e, n, t)
            })
        })
    },
    At = (s, i) => {
        if (!s || !s[i]) {
            O("no function to unwrap."), O(new Error().stack);
            return
        }
        const t = s[i];
        if (!t.__unwrap) O("no original to unwrap to -- has " + String(i) + " already been unwrapped?");
        else {
            t.__unwrap();
            return
        }
    },
    It = (s, i) => {
        if (s) Array.isArray(s) || (s = [s]);
        else {
            O("must provide one or more modules to patch"), O(new Error().stack);
            return
        }
        if (!(i && Array.isArray(i))) {
            O("must provide one or more functions to unwrap on modules");
            return
        }
        s.forEach(t => {
            i.forEach(e => {
                At(t, e)
            })
        })
    };
class Ft {
    constructor(i, t, e) {
        h(this, "instrumentationName");
        h(this, "instrumentationVersion");
        h(this, "_config", {});
        h(this, "_tracer");
        h(this, "_meter");
        h(this, "_logger");
        h(this, "_diag");
        h(this, "_wrap", vt);
        h(this, "_unwrap", At);
        h(this, "_massWrap", Ut);
        h(this, "_massUnwrap", It);
        this.instrumentationName = i, this.instrumentationVersion = t, this.setConfig(e), this._diag = N.createComponentLogger({
            namespace: i
        }), this._tracer = y.getTracer(i, t), this._meter = ht.getMeter(i, t), this._logger = _t.getLogger(i, t), this._updateMetricInstruments()
    }
    get meter() {
        return this._meter
    }
    setMeterProvider(i) {
        this._meter = i.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
    }
    get logger() {
        return this._logger
    }
    setLoggerProvider(i) {
        this._logger = i.getLogger(this.instrumentationName, this.instrumentationVersion)
    }
    getModuleDefinitions() {
        const i = this.init() ? ? [];
        return Array.isArray(i) ? i : [i]
    }
    _updateMetricInstruments() {}
    getConfig() {
        return this._config
    }
    setConfig(i) {
        this._config = {
            enabled: !0,
            ...i
        }
    }
    setTracerProvider(i) {
        this._tracer = i.getTracer(this.instrumentationName, this.instrumentationVersion)
    }
    get tracer() {
        return this._tracer
    }
    _runSpanCustomizationHook(i, t, e, n) {
        if (i) try {
            i(e, n)
        } catch (r) {
            this._diag.error("Error running span customization hook due to exception in handler", {
                triggerName: t
            }, r)
        }
    }
}
class V extends Ft {
    constructor(i, t, e) {
        super(i, t, e), this._config.enabled && this.enable()
    }
}

function q(s, i, t) {
    let e, n;
    try {
        n = s()
    } catch (r) {
        e = r
    } finally {
        return i(e, n), n
    }
}

function A(s) {
    return typeof s == "function" && typeof s.__original == "function" && typeof s.__unwrap == "function" && s.__wrapped === !0
}
var m;
(function(s) {
    s[s.STABLE = 1] = "STABLE", s[s.OLD = 2] = "OLD", s[s.DUPLICATE = 3] = "DUPLICATE"
})(m || (m = {}));

function yt(s, i) {
    let t = m.OLD;
    const e = i == null ? void 0 : i.split(",").map(n => n.trim()).filter(n => n !== "");
    for (const n of e ? ? [])
        if (n.toLowerCase() === s + "/dup") {
            t = m.DUPLICATE;
            break
        } else n.toLowerCase() === s && (t = m.STABLE);
    return t
}
var U;
(function(s) {
    s.DOCUMENT_LOAD = "documentLoad", s.DOCUMENT_FETCH = "documentFetch", s.RESOURCE_FETCH = "resourceFetch"
})(U || (U = {}));
const qt = "0.48.0",
    Bt = "@opentelemetry/instrumentation-document-load";
var B;
(function(s) {
    s.FIRST_PAINT = "firstPaint", s.FIRST_CONTENTFUL_PAINT = "firstContentfulPaint"
})(B || (B = {}));
const $t = () => {
        var t, e;
        const s = {},
            i = (e = (t = D).getEntriesByType) == null ? void 0 : e.call(t, "navigation")[0];
        if (i) Object.values(S).forEach(r => {
            if (I(i, r)) {
                const o = i[r];
                typeof o == "number" && (s[r] = o)
            }
        });
        else {
            const r = D.timing;
            r && Object.values(S).forEach(a => {
                if (I(r, a)) {
                    const c = r[a];
                    typeof c == "number" && (s[a] = c)
                }
            })
        }
        return s
    },
    nt = {
        "first-paint": B.FIRST_PAINT,
        "first-contentful-paint": B.FIRST_CONTENTFUL_PAINT
    },
    Vt = s => {
        var t, e;
        const i = (e = (t = D).getEntriesByType) == null ? void 0 : e.call(t, "paint");
        i && i.forEach(({
            name: n,
            startTime: r
        }) => {
            I(nt, n) && s.addEvent(nt[n], r)
        })
    };
class xt extends V {
    constructor(t = {}) {
        super(Bt, qt, t);
        h(this, "component", "document-load");
        h(this, "version", "1");
        h(this, "moduleName", this.component)
    }
    init() {}
    _onDocumentLoaded() {
        window.setTimeout(() => {
            this._collectPerformance()
        })
    }
    _addResourcesSpans(t) {
        var n, r;
        const e = (r = (n = D).getEntriesByType) == null ? void 0 : r.call(n, "resource");
        e && e.forEach(o => {
            this._initResourceSpan(o, t)
        })
    }
    _collectPerformance() {
        const t = Array.from(document.getElementsByTagName("meta")).find(r => r.getAttribute("name") === Ct),
            e = $t(),
            n = t && t.content || "";
        p.with(C.extract(wt, {
            traceparent: n
        }), () => {
            var o;
            const r = this._startSpan(U.DOCUMENT_LOAD, S.FETCH_START, e);
            r && (p.with(y.setSpan(p.active(), r), () => {
                const a = this._startSpan(U.DOCUMENT_FETCH, S.FETCH_START, e);
                a && (a.setAttribute(z, location.href), p.with(y.setSpan(p.active(), a), () => {
                    var c;
                    k(a, e, this.getConfig().ignoreNetworkEvents), this._addCustomAttributesOnSpan(a, (c = this.getConfig().applyCustomAttributesOnSpan) == null ? void 0 : c.documentFetch), this._endSpan(a, S.RESPONSE_END, e)
                }))
            }), r.setAttribute(z, location.href), r.setAttribute(Nt, navigator.userAgent), this._addResourcesSpans(r), this.getConfig().ignoreNetworkEvents || (b(r, S.FETCH_START, e), b(r, S.UNLOAD_EVENT_START, e), b(r, S.UNLOAD_EVENT_END, e), b(r, S.DOM_INTERACTIVE, e), b(r, S.DOM_CONTENT_LOADED_EVENT_START, e), b(r, S.DOM_CONTENT_LOADED_EVENT_END, e), b(r, S.DOM_COMPLETE, e), b(r, S.LOAD_EVENT_START, e), b(r, S.LOAD_EVENT_END, e)), this.getConfig().ignorePerformancePaintEvents || Vt(r), this._addCustomAttributesOnSpan(r, (o = this.getConfig().applyCustomAttributesOnSpan) == null ? void 0 : o.documentLoad), this._endSpan(r, S.LOAD_EVENT_END, e))
        })
    }
    _endSpan(t, e, n) {
        t && (I(n, e) ? t.end(n[e]) : t.end())
    }
    _initResourceSpan(t, e) {
        var r;
        const n = this._startSpan(U.RESOURCE_FETCH, S.FETCH_START, t, e);
        n && (n.setAttribute(z, t.name), k(n, t, this.getConfig().ignoreNetworkEvents), this._addCustomAttributesOnResourceSpan(n, t, (r = this.getConfig().applyCustomAttributesOnSpan) == null ? void 0 : r.resourceFetch), this._endSpan(n, S.RESPONSE_END, t))
    }
    _startSpan(t, e, n, r) {
        if (I(n, e) && typeof n[e] == "number") return this.tracer.startSpan(t, {
            startTime: n[e]
        }, r ? y.setSpan(p.active(), r) : void 0)
    }
    _waitForPageLoad() {
        window.document.readyState === "complete" ? this._onDocumentLoaded() : (this._onDocumentLoaded = this._onDocumentLoaded.bind(this), window.addEventListener("load", this._onDocumentLoaded))
    }
    _addCustomAttributesOnSpan(t, e) {
        e && q(() => e(t), n => {
            n && this._diag.error("addCustomAttributesOnSpan", n)
        })
    }
    _addCustomAttributesOnResourceSpan(t, e, n) {
        n && q(() => n(t, e), r => {
            r && this._diag.error("addCustomAttributesOnResourceSpan", r)
        })
    }
    enable() {
        window.removeEventListener("load", this._onDocumentLoaded), this._waitForPageLoad()
    }
    disable() {
        window.removeEventListener("load", this._onDocumentLoaded)
    }
}
var $;
(function(s) {
    s.COMPONENT = "component", s.HTTP_STATUS_TEXT = "http.status_text"
})($ || ($ = {}));
var g = {},
    rt;

function zt() {
    return rt || (rt = 1, Object.defineProperty(g, "__esModule", {
        value: !0
    }), g.ATTR_HTTP_USER_AGENT = g.ATTR_HTTP_URL = g.ATTR_HTTP_STATUS_CODE = g.ATTR_HTTP_SCHEME = g.ATTR_HTTP_RESPONSE_CONTENT_LENGTH = g.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = g.ATTR_HTTP_REQUEST_BODY_SIZE = g.ATTR_HTTP_METHOD = g.ATTR_HTTP_HOST = void 0, g.ATTR_HTTP_HOST = "http.host", g.ATTR_HTTP_METHOD = "http.method", g.ATTR_HTTP_REQUEST_BODY_SIZE = "http.request.body.size", g.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed", g.ATTR_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length", g.ATTR_HTTP_SCHEME = "http.scheme", g.ATTR_HTTP_STATUS_CODE = "http.status_code", g.ATTR_HTTP_URL = "http.url", g.ATTR_HTTP_USER_AGENT = "http.user_agent"), g
}
var L = zt();
const Ot = N.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-fetch/utils"
});

function Gt(...s) {
    if (s[0] instanceof URL || typeof s[0] == "string") {
        const i = s[1];
        if (!(i != null && i.body)) return Promise.resolve();
        if (i.body instanceof ReadableStream) {
            const {
                body: t,
                length: e
            } = Xt(i.body);
            return i.body = t, e
        } else return Promise.resolve(jt(i.body))
    } else {
        const i = s[0];
        return i != null && i.body ? i.clone().text().then(t => Q(t)) : Promise.resolve()
    }
}

function Xt(s) {
    if (!s.pipeThrough) return Ot.warn("Platform has ReadableStream but not pipeThrough!"), {
        body: s,
        length: Promise.resolve(void 0)
    };
    let i = 0,
        t;
    const e = new Promise(r => {
            t = r
        }),
        n = new TransformStream({
            start() {},
            async transform(r, o) {
                const a = await r;
                i += a.byteLength, o.enqueue(r)
            },
            flush() {
                t(i)
            }
        });
    return {
        body: s.pipeThrough(n),
        length: e
    }
}

function Wt(s) {
    return typeof Document < "u" && s instanceof Document
}

function jt(s) {
    if (Wt(s)) return new XMLSerializer().serializeToString(document).length;
    if (typeof s == "string") return Q(s);
    if (s instanceof Blob) return s.size;
    if (s instanceof FormData) return Kt(s);
    if (s instanceof URLSearchParams) return Q(s.toString());
    if (s.byteLength !== void 0) return s.byteLength;
    Ot.warn("unknown body type")
}
const Zt = new TextEncoder;

function Q(s) {
    return Zt.encode(s).byteLength
}

function Kt(s) {
    let i = 0;
    for (const [t, e] of s.entries()) i += t.length, e instanceof Blob ? i += e.size : i += e.length;
    return i
}

function Qt(s) {
    const i = Jt(),
        t = s.toUpperCase();
    return t in i ? t : "_OTHER"
}
const Yt = {
    CONNECT: !0,
    DELETE: !0,
    GET: !0,
    HEAD: !0,
    OPTIONS: !0,
    PATCH: !0,
    POST: !0,
    PUT: !0,
    TRACE: !0
};
let X;

function Jt() {
    return X === void 0 && (X = Yt), X
}
const te = {
    "https:": "443",
    "http:": "80"
};

function ee(s) {
    const i = Number(s.port || te[s.protocol]);
    if (i && !isNaN(i)) return i
}
const st = "0.203.0",
    ne = 300;
var ut;
const it = typeof et == "object" && ((ut = et.release) == null ? void 0 : ut.name) === "node";
class re extends V {
    constructor(t = {}) {
        super("@opentelemetry/instrumentation-fetch", st, t);
        h(this, "component", "fetch");
        h(this, "version", st);
        h(this, "moduleName", this.component);
        h(this, "_usedResources", new WeakSet);
        h(this, "_tasksCount", 0);
        h(this, "_semconvStability");
        this._semconvStability = yt("http", t == null ? void 0 : t.semconvStabilityOptIn)
    }
    init() {}
    _addChildSpan(t, e) {
        const n = this.tracer.startSpan("CORS Preflight", {
                startTime: e[S.FETCH_START]
            }, y.setSpan(p.active(), t)),
            r = !(this._semconvStability & m.OLD);
        k(n, e, this.getConfig().ignoreNetworkEvents, void 0, r), n.end(e[S.RESPONSE_END])
    }
    _addFinalSpanAttributes(t, e) {
        const n = w(e.url);
        if (this._semconvStability & m.OLD && (t.setAttribute(L.ATTR_HTTP_STATUS_CODE, e.status), e.statusText != null && t.setAttribute($.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(L.ATTR_HTTP_HOST, n.host), t.setAttribute(L.ATTR_HTTP_SCHEME, n.protocol.replace(":", "")), typeof navigator < "u" && t.setAttribute(L.ATTR_HTTP_USER_AGENT, navigator.userAgent)), this._semconvStability & m.STABLE) {
            t.setAttribute(dt, e.status), t.setAttribute(pt, n.hostname);
            const r = ee(n);
            r && t.setAttribute(Tt, r)
        }
    }
    _addHeaders(t, e) {
        if (!ft(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
            const n = {};
            C.inject(p.active(), n), Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
            return
        }
        if (t instanceof Request) C.inject(p.active(), t.headers, {
            set: (n, r, o) => n.set(r, typeof o == "string" ? o : String(o))
        });
        else if (t.headers instanceof Headers) C.inject(p.active(), t.headers, {
            set: (n, r, o) => n.set(r, typeof o == "string" ? o : String(o))
        });
        else if (t.headers instanceof Map) C.inject(p.active(), t.headers, {
            set: (n, r, o) => n.set(r, typeof o == "string" ? o : String(o))
        });
        else {
            const n = {};
            C.inject(p.active(), n), t.headers = Object.assign({}, n, t.headers || {})
        }
    }
    _clearResources() {
        this._tasksCount === 0 && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
    }
    _createSpan(t, e = {}) {
        if (lt(t, this.getConfig().ignoreUrls)) {
            this._diag.debug("ignoring span as url matches ignored url");
            return
        }
        let n = "";
        const r = {};
        if (this._semconvStability & m.OLD) {
            const o = (e.method || "GET").toUpperCase();
            n = `HTTP ${o}`, r[$.COMPONENT] = this.moduleName, r[L.ATTR_HTTP_METHOD] = o, r[L.ATTR_HTTP_URL] = t
        }
        if (this._semconvStability & m.STABLE) {
            const o = e.method,
                a = Qt(e.method || "GET");
            n || (n = a), r[Et] = a, a !== o && (r[mt] = o), r[gt] = t
        }
        return this.tracer.startSpan(n, {
            kind: St.CLIENT,
            attributes: r
        })
    }
    _findResourceAndAddNetworkEvents(t, e, n) {
        let r = e.entries;
        if (!r.length) {
            if (!performance.getEntriesByType) return;
            r = performance.getEntriesByType("resource")
        }
        const o = Rt(e.spanUrl, e.startTime, n, r, this._usedResources, "fetch");
        if (o.mainRequest) {
            const a = o.mainRequest;
            this._markResourceAsUsed(a);
            const c = o.corsPreFlightRequest;
            c && (this._addChildSpan(t, c), this._markResourceAsUsed(c));
            const l = !(this._semconvStability & m.OLD);
            k(t, a, this.getConfig().ignoreNetworkEvents, void 0, l)
        }
    }
    _markResourceAsUsed(t) {
        this._usedResources.add(t)
    }
    _endSpan(t, e, n) {
        const r = Ht(Date.now()),
            o = F();
        this._addFinalSpanAttributes(t, n), this._semconvStability & m.STABLE && n.status >= 400 && (t.setStatus({
            code: Z.ERROR
        }), t.setAttribute(K, String(n.status))), setTimeout(() => {
            var a;
            (a = e.observer) == null || a.disconnect(), this._findResourceAndAddNetworkEvents(t, e, o), this._tasksCount--, this._clearResources(), t.end(r)
        }, ne)
    }
    _patchConstructor() {
        return t => {
            const e = this;
            return function(...r) {
                const o = this,
                    a = w(r[0] instanceof Request ? r[0].url : String(r[0])).href,
                    c = r[0] instanceof Request ? r[0] : r[1] || {},
                    l = e._createSpan(a, c);
                if (!l) return t.apply(this, r);
                const u = e._prepareSpanData(a);
                e.getConfig().measureRequestSize && Gt(...r).then(_ => {
                    _ && (e._semconvStability & m.OLD && l.setAttribute(L.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, _), e._semconvStability & m.STABLE && l.setAttribute(L.ATTR_HTTP_REQUEST_BODY_SIZE, _))
                }).catch(_ => {
                    e._diag.warn("getFetchBodyLength", _)
                });

                function d(_, E) {
                    e._applyAttributesAfterFetch(_, c, E), e._endSpan(_, u, {
                        status: E.status || 0,
                        statusText: E.message,
                        url: a
                    })
                }

                function f(_, E) {
                    e._applyAttributesAfterFetch(_, c, E), E.status >= 200 && E.status < 400 ? e._endSpan(_, u, E) : e._endSpan(_, u, {
                        status: E.status,
                        statusText: E.statusText,
                        url: a
                    })
                }

                function v(_, E, R) {
                    try {
                        const J = R.clone().body;
                        if (J) {
                            const bt = J.getReader(),
                                tt = () => {
                                    bt.read().then(({
                                        done: x
                                    }) => {
                                        x ? f(_, R) : tt()
                                    }, x => {
                                        d(_, x)
                                    })
                                };
                            tt()
                        } else f(_, R)
                    } finally {
                        E(R)
                    }
                }

                function T(_, E, R) {
                    try {
                        d(_, R)
                    } finally {
                        E(R)
                    }
                }
                return new Promise((_, E) => p.with(y.setSpan(p.active(), l), () => (e._addHeaders(c, a), e._callRequestHook(l, c), e._tasksCount++, t.apply(o, c instanceof Request ? [c] : [a, c]).then(v.bind(o, l, _), T.bind(o, l, E)))))
            }
        }
    }
    _applyAttributesAfterFetch(t, e, n) {
        const r = this.getConfig().applyCustomAttributesOnSpan;
        r && q(() => r(t, e, n), o => {
            o && this._diag.error("applyCustomAttributesOnSpan", o)
        })
    }
    _callRequestHook(t, e) {
        const n = this.getConfig().requestHook;
        n && q(() => n(t, e), r => {
            r && this._diag.error("requestHook", r)
        })
    }
    _prepareSpanData(t) {
        const e = F(),
            n = [];
        if (typeof PerformanceObserver != "function") return {
            entries: n,
            startTime: e,
            spanUrl: t
        };
        const r = new PerformanceObserver(o => {
            o.getEntries().forEach(c => {
                c.initiatorType === "fetch" && c.name === t && n.push(c)
            })
        });
        return r.observe({
            entryTypes: ["resource"]
        }), {
            entries: n,
            observer: r,
            startTime: e,
            spanUrl: t
        }
    }
    enable() {
        if (it) {
            this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
            return
        }
        A(fetch) && (this._unwrap(G, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(G, "fetch", this._patchConstructor())
    }
    disable() {
        it || (this._unwrap(G, "fetch"), this._usedResources = new WeakSet)
    }
}
var H;
(function(s) {
    s.EVENT_TYPE = "event_type", s.TARGET_ELEMENT = "target_element", s.TARGET_XPATH = "target_xpath", s.HTTP_URL = "http.url"
})(H || (H = {}));
const ot = "0.48.0",
    se = "@opentelemetry/instrumentation-user-interaction",
    ie = "OT_ZONE_CONTEXT",
    oe = "Navigation:",
    ae = ["click"];

function ce() {
    return !1
}
class ue extends V {
    constructor(t = {}) {
        super(se, ot, t);
        h(this, "version", ot);
        h(this, "moduleName", "user-interaction");
        h(this, "_spansData", new WeakMap);
        h(this, "_wrappedListeners", new WeakMap);
        h(this, "_eventsSpanMap", new WeakMap);
        h(this, "_eventNames");
        h(this, "_shouldPreventSpanCreation");
        this._eventNames = new Set((t == null ? void 0 : t.eventNames) ? ? ae), this._shouldPreventSpanCreation = typeof(t == null ? void 0 : t.shouldPreventSpanCreation) == "function" ? t.shouldPreventSpanCreation : ce
    }
    init() {}
    _checkForTimeout(t, e) {
        const n = this._spansData.get(e);
        n && (t.source === "setTimeout" ? n.hrTimeLastTimeout = F() : t.source !== "Promise.then" && t.source !== "setTimeout" && (n.hrTimeLastTimeout = void 0))
    }
    _allowEventName(t) {
        return this._eventNames.has(t)
    }
    _createSpan(t, e, n) {
        if (!(t instanceof HTMLElement) || !t.getAttribute || t.hasAttribute("disabled") || !this._allowEventName(e)) return;
        const r = Dt(t, !0);
        try {
            const o = this.tracer.startSpan(e, {
                attributes: {
                    [H.EVENT_TYPE]: e,
                    [H.TARGET_ELEMENT]: t.tagName,
                    [H.TARGET_XPATH]: r,
                    [H.HTTP_URL]: window.location.href
                }
            }, n ? y.setSpan(p.active(), n) : void 0);
            return this._shouldPreventSpanCreation(e, t, o) === !0 ? void 0 : (this._spansData.set(o, {
                taskCount: 0
            }), o)
        } catch (o) {
            this._diag.error("failed to start create new user interaction span", o)
        }
    }
    _decrementTask(t) {
        const e = this._spansData.get(t);
        e && (e.taskCount--, e.taskCount === 0 && this._tryToEndSpan(t, e.hrTimeLastTimeout))
    }
    _getCurrentSpan(t) {
        const e = t.get(ie);
        return e && y.getSpan(e)
    }
    _incrementTask(t) {
        const e = this._spansData.get(t);
        e && e.taskCount++
    }
    addPatchedListener(t, e, n, r) {
        let o = this._wrappedListeners.get(n);
        o || (o = new Map, this._wrappedListeners.set(n, o));
        let a = o.get(e);
        return a || (a = new Map, o.set(e, a)), a.has(t) ? !1 : (a.set(t, r), !0)
    }
    removePatchedListener(t, e, n) {
        const r = this._wrappedListeners.get(n);
        if (!r) return;
        const o = r.get(e);
        if (!o) return;
        const a = o.get(t);
        return a && (o.delete(t), o.size === 0 && (r.delete(e), r.size === 0 && this._wrappedListeners.delete(n))), a
    }
    _invokeListener(t, e, n) {
        return typeof t == "function" ? t.apply(e, n) : t.handleEvent(n[0])
    }
    _patchAddEventListener() {
        const t = this;
        return e => function(r, o, a) {
            if (!o) return e.call(this, r, o, a);
            const c = a && typeof a == "object" && a.once,
                l = function(...u) {
                    let d;
                    const f = u[0],
                        v = f == null ? void 0 : f.target;
                    f && (d = t._eventsSpanMap.get(f)), c && t.removePatchedListener(this, r, o);
                    const T = t._createSpan(v, r, d);
                    return T ? (f && t._eventsSpanMap.set(f, T), p.with(y.setSpan(p.active(), T), () => {
                        const _ = t._invokeListener(o, this, u);
                        return T.end(), _
                    })) : t._invokeListener(o, this, u)
                };
            if (t.addPatchedListener(this, r, o, l)) return e.call(this, r, l, a)
        }
    }
    _patchRemoveEventListener() {
        const t = this;
        return e => function(r, o, a) {
            const c = t.removePatchedListener(this, r, o);
            return c ? e.call(this, r, c, a) : e.call(this, r, o, a)
        }
    }
    _getPatchableEventTargets() {
        return window.EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]
    }
    _patchHistoryApi() {
        this._unpatchHistoryApi(), this._wrap(history, "replaceState", this._patchHistoryMethod()), this._wrap(history, "pushState", this._patchHistoryMethod()), this._wrap(history, "back", this._patchHistoryMethod()), this._wrap(history, "forward", this._patchHistoryMethod()), this._wrap(history, "go", this._patchHistoryMethod())
    }
    _patchHistoryMethod() {
        const t = this;
        return e => function(...r) {
            const o = `${location.pathname}${location.hash}${location.search}`,
                a = e.apply(this, r),
                c = `${location.pathname}${location.hash}${location.search}`;
            return o !== c && t._updateInteractionName(c), a
        }
    }
    _unpatchHistoryApi() {
        A(history.replaceState) && this._unwrap(history, "replaceState"), A(history.pushState) && this._unwrap(history, "pushState"), A(history.back) && this._unwrap(history, "back"), A(history.forward) && this._unwrap(history, "forward"), A(history.go) && this._unwrap(history, "go")
    }
    _updateInteractionName(t) {
        const e = y.getSpan(p.active());
        e && typeof e.updateName == "function" && e.updateName(`${oe} ${t}`)
    }
    _patchZoneCancelTask() {
        const t = this;
        return e => function(r) {
            const o = Zone.current,
                a = t._getCurrentSpan(o);
            return a && t._shouldCountTask(r, o) && t._decrementTask(a), e.call(this, r)
        }
    }
    _patchZoneScheduleTask() {
        const t = this;
        return e => function(r) {
            const o = Zone.current,
                a = t._getCurrentSpan(o);
            return a && t._shouldCountTask(r, o) && (t._incrementTask(a), t._checkForTimeout(r, a)), e.call(this, r)
        }
    }
    _patchZoneRunTask() {
        const t = this;
        return e => function(r, o, a) {
            const c = Array.isArray(a) && a[0] instanceof Event ? a[0] : void 0,
                l = c == null ? void 0 : c.target;
            let u;
            const d = this;
            if (l) {
                if (u = t._createSpan(l, r.eventName), u) return t._incrementTask(u), d.run(() => {
                    try {
                        return p.with(y.setSpan(p.active(), u), () => {
                            const f = Zone.current;
                            return r._zone = f, e.call(f, r, o, a)
                        })
                    } finally {
                        t._decrementTask(u)
                    }
                })
            } else u = t._getCurrentSpan(d);
            try {
                return e.call(d, r, o, a)
            } finally {
                u && t._shouldCountTask(r, d) && t._decrementTask(u)
            }
        }
    }
    _shouldCountTask(t, e) {
        if (t._zone && (e = t._zone), !e || !t.data || t.data.isPeriodic) return !1;
        const n = this._getCurrentSpan(e);
        return !n || !this._spansData.get(n) ? !1 : t.type === "macroTask" || t.type === "microTask"
    }
    _tryToEndSpan(t, e) {
        t && this._spansData.get(t) && (t.end(e), this._spansData.delete(t))
    }
    enable() {
        const t = this._getZoneWithPrototype();
        this._diag.debug("applying patch to", this.moduleName, this.version, "zone:", !!t), t ? (A(t.prototype.runTask) && (this._unwrap(t.prototype, "runTask"), this._diag.debug("removing previous patch from method runTask")), A(t.prototype.scheduleTask) && (this._unwrap(t.prototype, "scheduleTask"), this._diag.debug("removing previous patch from method scheduleTask")), A(t.prototype.cancelTask) && (this._unwrap(t.prototype, "cancelTask"), this._diag.debug("removing previous patch from method cancelTask")), this._zonePatched = !0, this._wrap(t.prototype, "runTask", this._patchZoneRunTask()), this._wrap(t.prototype, "scheduleTask", this._patchZoneScheduleTask()), this._wrap(t.prototype, "cancelTask", this._patchZoneCancelTask())) : (this._zonePatched = !1, this._getPatchableEventTargets().forEach(n => {
            A(n.addEventListener) && (this._unwrap(n, "addEventListener"), this._diag.debug("removing previous patch from method addEventListener")), A(n.removeEventListener) && (this._unwrap(n, "removeEventListener"), this._diag.debug("removing previous patch from method removeEventListener")), this._wrap(n, "addEventListener", this._patchAddEventListener()), this._wrap(n, "removeEventListener", this._patchRemoveEventListener())
        })), this._patchHistoryApi()
    }
    disable() {
        const t = this._getZoneWithPrototype();
        this._diag.debug("removing patch from", this.moduleName, this.version, "zone:", !!t), t && this._zonePatched ? (A(t.prototype.runTask) && this._unwrap(t.prototype, "runTask"), A(t.prototype.scheduleTask) && this._unwrap(t.prototype, "scheduleTask"), A(t.prototype.cancelTask) && this._unwrap(t.prototype, "cancelTask")) : this._getPatchableEventTargets().forEach(n => {
            A(n.addEventListener) && this._unwrap(n, "addEventListener"), A(n.removeEventListener) && this._unwrap(n, "removeEventListener")
        }), this._unpatchHistoryApi()
    }
    _getZoneWithPrototype() {
        return window.Zone
    }
}
const he = "http.host",
    _e = "http.method",
    de = "http.request.body.size",
    pe = "http.request_content_length_uncompressed",
    Te = "http.scheme",
    fe = "http.status_code",
    le = "http.url",
    Ee = "http.user_agent";
var P;
(function(s) {
    s.METHOD_OPEN = "open", s.METHOD_SEND = "send", s.EVENT_ABORT = "abort", s.EVENT_ERROR = "error", s.EVENT_LOAD = "loaded", s.EVENT_TIMEOUT = "timeout"
})(P || (P = {}));
const me = N.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-xml-http-request/utils"
});

function ge(s) {
    return typeof Document < "u" && s instanceof Document
}

function Se(s) {
    if (ge(s)) return new XMLSerializer().serializeToString(document).length;
    if (typeof s == "string") return at(s);
    if (s instanceof Blob) return s.size;
    if (s instanceof FormData) return ve(s);
    if (s instanceof URLSearchParams) return at(s.toString());
    if (s.byteLength !== void 0) return s.byteLength;
    me.warn("unknown body type")
}
const Re = new TextEncoder;

function at(s) {
    return Re.encode(s).byteLength
}

function ve(s) {
    let i = 0;
    for (const [t, e] of s.entries()) i += t.length, e instanceof Blob ? i += e.size : i += e.length;
    return i
}

function Ae(s) {
    const i = Oe(),
        t = s.toUpperCase();
    return t in i ? t : "_OTHER"
}
const ye = {
    CONNECT: !0,
    DELETE: !0,
    GET: !0,
    HEAD: !0,
    OPTIONS: !0,
    PATCH: !0,
    POST: !0,
    PUT: !0,
    TRACE: !0
};
let W;

function Oe() {
    return W === void 0 && (W = ye), W
}
const be = {
    "https:": "443",
    "http:": "80"
};

function Pe(s) {
    const i = Number(s.port || be[s.protocol]);
    if (i && !isNaN(i)) return i
}
const ct = "0.203.0";
var Y;
(function(s) {
    s.HTTP_STATUS_TEXT = "http.status_text"
})(Y || (Y = {}));
const Le = 300;
class Ce extends V {
    constructor(t = {}) {
        super("@opentelemetry/instrumentation-xml-http-request", ct, t);
        h(this, "component", "xml-http-request");
        h(this, "version", ct);
        h(this, "moduleName", this.component);
        h(this, "_tasksCount", 0);
        h(this, "_xhrMem", new WeakMap);
        h(this, "_usedResources", new WeakSet);
        h(this, "_semconvStability");
        this._semconvStability = yt("http", t == null ? void 0 : t.semconvStabilityOptIn)
    }
    init() {}
    _addHeaders(t, e) {
        const n = w(e).href;
        if (!ft(n, this.getConfig().propagateTraceHeaderCorsUrls)) {
            const o = {};
            C.inject(p.active(), o), Object.keys(o).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
            return
        }
        const r = {};
        C.inject(p.active(), r), Object.keys(r).forEach(o => {
            t.setRequestHeader(o, String(r[o]))
        })
    }
    _addChildSpan(t, e) {
        p.with(y.setSpan(p.active(), t), () => {
            const n = this.tracer.startSpan("CORS Preflight", {
                    startTime: e[S.FETCH_START]
                }),
                r = !(this._semconvStability & m.OLD);
            k(n, e, this.getConfig().ignoreNetworkEvents, void 0, r), n.end(e[S.RESPONSE_END])
        })
    }
    _addFinalSpanAttributes(t, e, n) {
        if (this._semconvStability & m.OLD) {
            if (e.status !== void 0 && t.setAttribute(fe, e.status), e.statusText !== void 0 && t.setAttribute(Y.HTTP_STATUS_TEXT, e.statusText), typeof n == "string") {
                const r = w(n);
                t.setAttribute(he, r.host), t.setAttribute(Te, r.protocol.replace(":", ""))
            }
            t.setAttribute(Ee, navigator.userAgent)
        }
        this._semconvStability & m.STABLE && e.status && t.setAttribute(dt, e.status)
    }
    _applyAttributesAfterXHR(t, e) {
        const n = this.getConfig().applyCustomAttributesOnSpan;
        typeof n == "function" && q(() => n(t, e), r => {
            r && this._diag.error("applyCustomAttributesOnSpan", r)
        })
    }
    _addResourceObserver(t, e) {
        const n = this._xhrMem.get(t);
        !n || typeof PerformanceObserver != "function" || typeof PerformanceResourceTiming != "function" || (n.createdResources = {
            observer: new PerformanceObserver(r => {
                const o = r.getEntries(),
                    a = w(e);
                o.forEach(c => {
                    c.initiatorType === "xmlhttprequest" && c.name === a.href && n.createdResources && n.createdResources.entries.push(c)
                })
            }),
            entries: []
        }, n.createdResources.observer.observe({
            entryTypes: ["resource"]
        }))
    }
    _clearResources() {
        this._tasksCount === 0 && this.getConfig().clearTimingResources && (D.clearResourceTimings(), this._xhrMem = new WeakMap, this._usedResources = new WeakSet)
    }
    _findResourceAndAddNetworkEvents(t, e, n, r, o) {
        if (!n || !r || !o || !t.createdResources) return;
        let a = t.createdResources.entries;
        (!a || !a.length) && (a = D.getEntriesByType("resource"));
        const c = Rt(w(n).href, r, o, a, this._usedResources);
        if (c.mainRequest) {
            const l = c.mainRequest;
            this._markResourceAsUsed(l);
            const u = c.corsPreFlightRequest;
            u && (this._addChildSpan(e, u), this._markResourceAsUsed(u));
            const d = !(this._semconvStability & m.OLD);
            k(e, l, this.getConfig().ignoreNetworkEvents, void 0, d)
        }
    }
    _cleanPreviousSpanInformation(t) {
        const e = this._xhrMem.get(t);
        if (e) {
            const n = e.callbackToRemoveEvents;
            n && n(), this._xhrMem.delete(t)
        }
    }
    _createSpan(t, e, n) {
        if (lt(e, this.getConfig().ignoreUrls)) {
            this._diag.debug("ignoring span as url matches ignored url");
            return
        }
        let r = "";
        const o = w(e),
            a = {};
        if (this._semconvStability & m.OLD && (r = n.toUpperCase(), a[_e] = n, a[le] = o.toString()), this._semconvStability & m.STABLE) {
            const l = n,
                u = Ae(n);
            r || (r = u), a[Et] = u, u !== l && (a[mt] = l), a[gt] = o.toString(), a[pt] = o.hostname;
            const d = Pe(o);
            d && (a[Tt] = d)
        }
        const c = this.tracer.startSpan(r, {
            kind: St.CLIENT,
            attributes: a
        });
        return c.addEvent(P.METHOD_OPEN), this._cleanPreviousSpanInformation(t), this._xhrMem.set(t, {
            span: c,
            spanUrl: e
        }), c
    }
    _markResourceAsUsed(t) {
        this._usedResources.add(t)
    }
    _patchOpen() {
        return t => {
            const e = this;
            return function(...r) {
                const o = r[0],
                    a = r[1];
                return e._createSpan(this, a, o), t.apply(this, r)
            }
        }
    }
    _patchSend() {
        const t = this;

        function e(u, d, f, v) {
            const T = d.callbackToRemoveEvents;
            typeof T == "function" && T();
            const {
                span: _,
                spanUrl: E,
                sendStartTime: R
            } = d;
            _ && (t._findResourceAndAddNetworkEvents(d, _, E, R, f), _.addEvent(u, v), t._addFinalSpanAttributes(_, d, E), _.end(v), t._tasksCount--), t._clearResources()
        }

        function n(u, d, f, v) {
            const T = t._xhrMem.get(d);
            if (!T) return;
            if (T.status = d.status, T.statusText = d.statusText, t._xhrMem.delete(d), T.span) {
                const R = T.span;
                t._applyAttributesAfterXHR(R, d), t._semconvStability & m.STABLE && (f ? v && (R.setStatus({
                    code: Z.ERROR,
                    message: v
                }), R.setAttribute(K, v)) : T.status && T.status >= 400 && (R.setStatus({
                    code: Z.ERROR
                }), R.setAttribute(K, String(T.status))))
            }
            const _ = F(),
                E = Date.now();
            setTimeout(() => {
                e(u, T, _, E)
            }, Le)
        }

        function r() {
            n(P.EVENT_ERROR, this, !0, "error")
        }

        function o() {
            n(P.EVENT_ABORT, this, !1)
        }

        function a() {
            n(P.EVENT_TIMEOUT, this, !0, "timeout")
        }

        function c() {
            this.status < 299 ? n(P.EVENT_LOAD, this, !1) : n(P.EVENT_ERROR, this, !1)
        }

        function l(u) {
            u.removeEventListener("abort", o), u.removeEventListener("error", r), u.removeEventListener("load", c), u.removeEventListener("timeout", a);
            const d = t._xhrMem.get(u);
            d && (d.callbackToRemoveEvents = void 0)
        }
        return u => function(...f) {
            const v = t._xhrMem.get(this);
            if (!v) return u.apply(this, f);
            const T = v.span,
                _ = v.spanUrl;
            if (T && _) {
                if (t.getConfig().measureRequestSize && (f != null && f[0])) {
                    const E = f[0],
                        R = Se(E);
                    R !== void 0 && (t._semconvStability & m.OLD && T.setAttribute(pe, R), t._semconvStability & m.STABLE && T.setAttribute(de, R))
                }
                p.with(y.setSpan(p.active(), T), () => {
                    t._tasksCount++, v.sendStartTime = F(), T.addEvent(P.METHOD_SEND), this.addEventListener("abort", o), this.addEventListener("error", r), this.addEventListener("load", c), this.addEventListener("timeout", a), v.callbackToRemoveEvents = () => {
                        l(this), v.createdResources && v.createdResources.observer.disconnect()
                    }, t._addHeaders(this, _), t._addResourceObserver(this, _)
                })
            }
            return u.apply(this, f)
        }
    }
    enable() {
        this._diag.debug("applying patch to", this.moduleName, this.version), A(XMLHttpRequest.prototype.open) && (this._unwrap(XMLHttpRequest.prototype, "open"), this._diag.debug("removing previous patch from method open")), A(XMLHttpRequest.prototype.send) && (this._unwrap(XMLHttpRequest.prototype, "send"), this._diag.debug("removing previous patch from method send")), this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen()), this._wrap(XMLHttpRequest.prototype, "send", this._patchSend())
    }
    disable() {
        this._diag.debug("removing patch from", this.moduleName, this.version), this._unwrap(XMLHttpRequest.prototype, "open"), this._unwrap(XMLHttpRequest.prototype, "send"), this._tasksCount = 0, this._xhrMem = new WeakMap, this._usedResources = new WeakSet
    }
}
const j = {
    "@opentelemetry/instrumentation-document-load": xt,
    "@opentelemetry/instrumentation-fetch": re,
    "@opentelemetry/instrumentation-user-interaction": ue,
    "@opentelemetry/instrumentation-xml-http-request": Ce
};

function Me(s = {}) {
    for (const t of Object.keys(s))
        if (!Object.prototype.hasOwnProperty.call(j, t)) {
            N.error(`Provided instrumentation name "${t}" not found`);
            continue
        }
    const i = [];
    for (const t of Object.keys(j)) {
        const e = j[t],
            n = s[t] ? ? {};
        if (n.enabled === !1) {
            N.debug(`Disabling instrumentation for ${t}`);
            continue
        }
        try {
            N.debug(`Loading instrumentation for ${t}`), i.push(new e(n))
        } catch (r) {
            N.error(r)
        }
    }
    return i
}
export {
    Me as g, ke as r
};