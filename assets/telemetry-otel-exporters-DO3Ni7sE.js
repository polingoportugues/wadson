var k = Object.defineProperty;
var J = (e, t, r) => t in e ? k(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var i = (e, t, r) => J(e, typeof t != "symbol" ? t + "" : t, r);
import {
    d as h,
    E as l,
    B as Y,
    D as E,
    C as m,
    V as U,
    F as $,
    I as c
} from "./telemetry-otel-Vuk-WXgZ.js";
class S {
    constructor(t) {
        i(this, "_delegate");
        this._delegate = t
    }
    export (t, r) {
        this._delegate.export(t, r)
    }
    forceFlush() {
        return this._delegate.forceFlush()
    }
    shutdown() {
        return this._delegate.shutdown()
    }
}
class M extends Error {
    constructor(r, n, s) {
        super(r);
        i(this, "code");
        i(this, "name", "OTLPExporterError");
        i(this, "data");
        this.data = s, this.code = n
    }
}

function W(e) {
    if (Number.isFinite(e) && e > 0) return e;
    throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${e}')`)
}

function Q(e) {
    if (e != null) return () => e
}

function K(e, t, r) {
    return {
        timeoutMillis: W(e.timeoutMillis ? ? t.timeoutMillis ? ? r.timeoutMillis),
        concurrencyLimit: e.concurrencyLimit ? ? t.concurrencyLimit ? ? r.concurrencyLimit,
        compression: e.compression ? ? t.compression ? ? r.compression
    }
}

function Z() {
    return {
        timeoutMillis: 1e4,
        concurrencyLimit: 30,
        compression: "none"
    }
}
class ee {
    constructor(t) {
        i(this, "_concurrencyLimit");
        i(this, "_sendingPromises", []);
        this._concurrencyLimit = t
    }
    pushPromise(t) {
        if (this.hasReachedLimit()) throw new Error("Concurrency Limit reached");
        this._sendingPromises.push(t);
        const r = () => {
            const n = this._sendingPromises.indexOf(t);
            this._sendingPromises.splice(n, 1)
        };
        t.then(r, r)
    }
    hasReachedLimit() {
        return this._sendingPromises.length >= this._concurrencyLimit
    }
    async awaitAll() {
        await Promise.all(this._sendingPromises)
    }
}

function te(e) {
    return new ee(e.concurrencyLimit)
}

function re(e) {
    return Object.prototype.hasOwnProperty.call(e, "partialSuccess")
}

function ne() {
    return {
        handleResponse(e) {
            e == null || !re(e) || e.partialSuccess == null || Object.keys(e.partialSuccess).length === 0 || h.warn("Received Partial Success response:", JSON.stringify(e.partialSuccess))
        }
    }
}
class se {
    constructor(t, r, n, s, o) {
        i(this, "_transport");
        i(this, "_serializer");
        i(this, "_responseHandler");
        i(this, "_promiseQueue");
        i(this, "_timeout");
        i(this, "_diagLogger");
        this._transport = t, this._serializer = r, this._responseHandler = n, this._promiseQueue = s, this._timeout = o, this._diagLogger = h.createComponentLogger({
            namespace: "OTLPExportDelegate"
        })
    }
    export (t, r) {
        if (this._diagLogger.debug("items to be sent", t), this._promiseQueue.hasReachedLimit()) {
            r({
                code: l.FAILED,
                error: new Error("Concurrent export limit reached")
            });
            return
        }
        const n = this._serializer.serializeRequest(t);
        if (n == null) {
            r({
                code: l.FAILED,
                error: new Error("Nothing to send")
            });
            return
        }
        this._promiseQueue.pushPromise(this._transport.send(n, this._timeout).then(s => {
            if (s.status === "success") {
                if (s.data != null) try {
                    this._responseHandler.handleResponse(this._serializer.deserializeResponse(s.data))
                } catch (o) {
                    this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", o, s.data)
                }
                r({
                    code: l.SUCCESS
                });
                return
            } else if (s.status === "failure" && s.error) {
                r({
                    code: l.FAILED,
                    error: s.error
                });
                return
            } else s.status === "retryable" ? r({
                code: l.FAILED,
                error: new M("Export failed with retryable status")
            }) : r({
                code: l.FAILED,
                error: new M("Export failed with unknown error")
            })
        }, s => r({
            code: l.FAILED,
            error: s
        })))
    }
    forceFlush() {
        return this._promiseQueue.awaitAll()
    }
    async shutdown() {
        this._diagLogger.debug("shutdown started"), await this.forceFlush(), this._transport.shutdown()
    }
}

function oe(e, t) {
    return new se(e.transport, e.serializer, ne(), e.promiseHandler, t.timeout)
}

function D(e, t, r) {
    return oe({
        transport: r,
        serializer: t,
        promiseHandler: te(e)
    }, {
        timeout: e.timeoutMillis
    })
}

function N(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55
}

function _(e) {
    const t = new Uint8Array(e.length / 2);
    let r = 0;
    for (let n = 0; n < e.length; n += 2) {
        const s = N(e.charCodeAt(n)),
            o = N(e.charCodeAt(n + 1));
        t[r++] = s << 4 | o
    }
    return t
}

function H(e) {
    const t = BigInt(1e9);
    return BigInt(e[0]) * t + BigInt(e[1])
}

function ie(e) {
    const t = Number(BigInt.asUintN(32, e)),
        r = Number(BigInt.asUintN(32, e >> BigInt(32)));
    return {
        low: t,
        high: r
    }
}

function G(e) {
    const t = H(e);
    return ie(t)
}

function ae(e) {
    return H(e).toString()
}
const ue = typeof BigInt < "u" ? ae : Y;

function C(e) {
    return e
}

function v(e) {
    if (e !== void 0) return _(e)
}
const ce = {
    encodeHrTime: G,
    encodeSpanContext: _,
    encodeOptionalSpanContext: v
};

function x(e) {
    if (e === void 0) return ce;
    const t = e.useLongBits ? ? !0,
        r = e.useHex ? ? !1;
    return {
        encodeHrTime: t ? G : ue,
        encodeSpanContext: r ? C : _,
        encodeOptionalSpanContext: r ? C : v
    }
}

function y(e) {
    return {
        attributes: T(e.attributes),
        droppedAttributesCount: 0
    }
}

function R(e) {
    return {
        name: e.name,
        version: e.version
    }
}

function T(e) {
    return Object.keys(e).map(t => I(t, e[t]))
}

function I(e, t) {
    return {
        key: e,
        value: b(t)
    }
}

function b(e) {
    const t = typeof e;
    return t === "string" ? {
        stringValue: e
    } : t === "number" ? Number.isInteger(e) ? {
        intValue: e
    } : {
        doubleValue: e
    } : t === "boolean" ? {
        boolValue: e
    } : e instanceof Uint8Array ? {
        bytesValue: e
    } : Array.isArray(e) ? {
        arrayValue: {
            values: e.map(b)
        }
    } : t === "object" && e != null ? {
        kvlistValue: {
            values: Object.entries(e).map(([r, n]) => I(r, n))
        }
    } : {}
}

function de(e, t) {
    const r = x(t);
    return {
        resourceLogs: le(e, r)
    }
}

function pe(e) {
    const t = new Map;
    for (const r of e) {
        const {
            resource: n,
            instrumentationScope: {
                name: s,
                version: o = "",
                schemaUrl: a = ""
            }
        } = r;
        let u = t.get(n);
        u || (u = new Map, t.set(n, u));
        const d = `${s}@${o}:${a}`;
        let p = u.get(d);
        p || (p = [], u.set(d, p)), p.push(r)
    }
    return t
}

function le(e, t) {
    const r = pe(e);
    return Array.from(r, ([n, s]) => ({
        resource: y(n),
        scopeLogs: Array.from(s, ([, o]) => ({
            scope: R(o[0].instrumentationScope),
            logRecords: o.map(a => me(a, t)),
            schemaUrl: o[0].instrumentationScope.schemaUrl
        })),
        schemaUrl: void 0
    }))
}

function me(e, t) {
    var r, n, s;
    return {
        timeUnixNano: t.encodeHrTime(e.hrTime),
        observedTimeUnixNano: t.encodeHrTime(e.hrTimeObserved),
        severityNumber: e.severityNumber,
        severityText: e.severityText,
        body: b(e.body),
        eventName: e.eventName,
        attributes: Te(e.attributes),
        droppedAttributesCount: e.droppedAttributesCount,
        flags: (r = e.spanContext) == null ? void 0 : r.traceFlags,
        traceId: t.encodeOptionalSpanContext((n = e.spanContext) == null ? void 0 : n.traceId),
        spanId: t.encodeOptionalSpanContext((s = e.spanContext) == null ? void 0 : s.spanId)
    }
}

function Te(e) {
    return Object.keys(e).map(t => I(t, e[t]))
}
var g;
(function(e) {
    e[e.AGGREGATION_TEMPORALITY_UNSPECIFIED = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED", e[e.AGGREGATION_TEMPORALITY_DELTA = 1] = "AGGREGATION_TEMPORALITY_DELTA", e[e.AGGREGATION_TEMPORALITY_CUMULATIVE = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"
})(g || (g = {}));

function he(e, t) {
    const r = x(t);
    return {
        resource: y(e.resource),
        schemaUrl: void 0,
        scopeMetrics: fe(e.scopeMetrics, r)
    }
}

function fe(e, t) {
    return Array.from(e.map(r => ({
        scope: R(r.scope),
        metrics: r.metrics.map(n => Ee(n, t)),
        schemaUrl: r.scope.schemaUrl
    })))
}

function Ee(e, t) {
    const r = {
            name: e.descriptor.name,
            description: e.descriptor.description,
            unit: e.descriptor.unit
        },
        n = Ae(e.aggregationTemporality);
    switch (e.dataPointType) {
        case E.SUM:
            r.sum = {
                aggregationTemporality: n,
                isMonotonic: e.isMonotonic,
                dataPoints: B(e, t)
            };
            break;
        case E.GAUGE:
            r.gauge = {
                dataPoints: B(e, t)
            };
            break;
        case E.HISTOGRAM:
            r.histogram = {
                aggregationTemporality: n,
                dataPoints: Oe(e, t)
            };
            break;
        case E.EXPONENTIAL_HISTOGRAM:
            r.exponentialHistogram = {
                aggregationTemporality: n,
                dataPoints: Le(e, t)
            };
            break
    }
    return r
}

function ge(e, t, r) {
    const n = {
        attributes: T(e.attributes),
        startTimeUnixNano: r.encodeHrTime(e.startTime),
        timeUnixNano: r.encodeHrTime(e.endTime)
    };
    switch (t) {
        case U.INT:
            n.asInt = e.value;
            break;
        case U.DOUBLE:
            n.asDouble = e.value;
            break
    }
    return n
}

function B(e, t) {
    return e.dataPoints.map(r => ge(r, e.descriptor.valueType, t))
}

function Oe(e, t) {
    return e.dataPoints.map(r => {
        const n = r.value;
        return {
            attributes: T(r.attributes),
            bucketCounts: n.buckets.counts,
            explicitBounds: n.buckets.boundaries,
            count: n.count,
            sum: n.sum,
            min: n.min,
            max: n.max,
            startTimeUnixNano: t.encodeHrTime(r.startTime),
            timeUnixNano: t.encodeHrTime(r.endTime)
        }
    })
}

function Le(e, t) {
    return e.dataPoints.map(r => {
        const n = r.value;
        return {
            attributes: T(r.attributes),
            count: n.count,
            min: n.min,
            max: n.max,
            sum: n.sum,
            positive: {
                offset: n.positive.offset,
                bucketCounts: n.positive.bucketCounts
            },
            negative: {
                offset: n.negative.offset,
                bucketCounts: n.negative.bucketCounts
            },
            scale: n.scale,
            zeroCount: n.zeroCount,
            startTimeUnixNano: t.encodeHrTime(r.startTime),
            timeUnixNano: t.encodeHrTime(r.endTime)
        }
    })
}

function Ae(e) {
    switch (e) {
        case m.DELTA:
            return g.AGGREGATION_TEMPORALITY_DELTA;
        case m.CUMULATIVE:
            return g.AGGREGATION_TEMPORALITY_CUMULATIVE
    }
}

function Se(e, t) {
    return {
        resourceMetrics: e.map(r => he(r, t))
    }
}

function _e(e, t) {
    var o, a, u;
    const r = e.spanContext(),
        n = e.status,
        s = (o = e.parentSpanContext) != null && o.spanId ? t.encodeSpanContext((a = e.parentSpanContext) == null ? void 0 : a.spanId) : void 0;
    return {
        traceId: t.encodeSpanContext(r.traceId),
        spanId: t.encodeSpanContext(r.spanId),
        parentSpanId: s,
        traceState: (u = r.traceState) == null ? void 0 : u.serialize(),
        name: e.name,
        kind: e.kind == null ? 0 : e.kind + 1,
        startTimeUnixNano: t.encodeHrTime(e.startTime),
        endTimeUnixNano: t.encodeHrTime(e.endTime),
        attributes: T(e.attributes),
        droppedAttributesCount: e.droppedAttributesCount,
        events: e.events.map(d => ye(d, t)),
        droppedEventsCount: e.droppedEventsCount,
        status: {
            code: n.code,
            message: n.message
        },
        links: e.links.map(d => xe(d, t)),
        droppedLinksCount: e.droppedLinksCount
    }
}

function xe(e, t) {
    var r;
    return {
        attributes: e.attributes ? T(e.attributes) : [],
        spanId: t.encodeSpanContext(e.context.spanId),
        traceId: t.encodeSpanContext(e.context.traceId),
        traceState: (r = e.context.traceState) == null ? void 0 : r.serialize(),
        droppedAttributesCount: e.droppedAttributesCount || 0
    }
}

function ye(e, t) {
    return {
        attributes: e.attributes ? T(e.attributes) : [],
        name: e.name,
        timeUnixNano: t.encodeHrTime(e.time),
        droppedAttributesCount: e.droppedAttributesCount || 0
    }
}

function Re(e, t) {
    const r = x(t);
    return {
        resourceSpans: be(e, r)
    }
}

function Ie(e) {
    const t = new Map;
    for (const r of e) {
        let n = t.get(r.resource);
        n || (n = new Map, t.set(r.resource, n));
        const s = `${r.instrumentationScope.name}@${r.instrumentationScope.version||""}:${r.instrumentationScope.schemaUrl||""}`;
        let o = n.get(s);
        o || (o = [], n.set(s, o)), o.push(r)
    }
    return t
}

function be(e, t) {
    const r = Ie(e),
        n = [],
        s = r.entries();
    let o = s.next();
    for (; !o.done;) {
        const [a, u] = o.value, d = [], p = u.values();
        let L = p.next();
        for (; !L.done;) {
            const f = L.value;
            if (f.length > 0) {
                const j = f.map(X => _e(X, t));
                d.push({
                    scope: R(f[0].instrumentationScope),
                    spans: j,
                    schemaUrl: f[0].instrumentationScope.schemaUrl
                })
            }
            L = p.next()
        }
        const q = {
            resource: y(a),
            scopeSpans: d,
            schemaUrl: void 0
        };
        n.push(q), o = s.next()
    }
    return n
}
const we = {
        serializeRequest: e => {
            const t = de(e, {
                useHex: !0,
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(t))
        },
        deserializeResponse: e => {
            if (e.length === 0) return {};
            const t = new TextDecoder;
            return JSON.parse(t.decode(e))
        }
    },
    Ue = {
        serializeRequest: e => {
            const t = Se([e], {
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(t))
        },
        deserializeResponse: e => {
            if (e.length === 0) return {};
            const t = new TextDecoder;
            return JSON.parse(t.decode(e))
        }
    },
    Me = {
        serializeRequest: e => {
            const t = Re(e, {
                useHex: !0,
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(t))
        },
        deserializeResponse: e => {
            if (e.length === 0) return {};
            const t = new TextDecoder;
            return JSON.parse(t.decode(e))
        }
    },
    Ne = 5,
    Ce = 1e3,
    Be = 5e3,
    Pe = 1.5,
    P = .2;

function De() {
    return Math.random() * (2 * P) - P
}
class He {
    constructor(t) {
        i(this, "_transport");
        this._transport = t
    }
    retry(t, r, n) {
        return new Promise((s, o) => {
            setTimeout(() => {
                this._transport.send(t, r).then(s, o)
            }, n)
        })
    }
    async send(t, r) {
        const n = Date.now() + r;
        let s = await this._transport.send(t, r),
            o = Ne,
            a = Ce;
        for (; s.status === "retryable" && o > 0;) {
            o--;
            const u = Math.max(Math.min(a, Be) + De(), 0);
            a = a * Pe;
            const d = s.retryInMillis ? ? u,
                p = n - Date.now();
            if (d > p) return s;
            s = await this.retry(t, p, d)
        }
        return s
    }
    shutdown() {
        return this._transport.shutdown()
    }
}

function F(e) {
    return new He(e.transport)
}

function Ge(e) {
    return [429, 502, 503, 504].includes(e)
}

function ve(e) {
    if (e == null) return;
    const t = Number.parseInt(e, 10);
    if (Number.isInteger(t)) return t > 0 ? t * 1e3 : -1;
    const r = new Date(e).getTime() - Date.now();
    return r >= 0 ? r : 0
}
class Fe {
    constructor(t) {
        i(this, "_parameters");
        this._parameters = t
    }
    send(t, r) {
        return new Promise(n => {
            const s = new XMLHttpRequest;
            s.timeout = r, s.open("POST", this._parameters.url);
            const o = this._parameters.headers();
            Object.entries(o).forEach(([a, u]) => {
                s.setRequestHeader(a, u)
            }), s.ontimeout = a => {
                n({
                    status: "failure",
                    error: new Error("XHR request timed out")
                })
            }, s.onreadystatechange = () => {
                s.status >= 200 && s.status <= 299 ? (h.debug("XHR success"), n({
                    status: "success"
                })) : s.status && Ge(s.status) ? n({
                    status: "retryable",
                    retryInMillis: ve(s.getResponseHeader("Retry-After"))
                }) : s.status !== 0 && n({
                    status: "failure",
                    error: new Error("XHR request failed with non-retryable status")
                })
            }, s.onabort = () => {
                n({
                    status: "failure",
                    error: new Error("XHR request aborted")
                })
            }, s.onerror = () => {
                n({
                    status: "failure",
                    error: new Error("XHR request errored")
                })
            }, s.send(t)
        })
    }
    shutdown() {}
}

function Ve(e) {
    return new Fe(e)
}
class ze {
    constructor(t) {
        i(this, "_params");
        this._params = t
    }
    send(t) {
        return new Promise(r => {
            navigator.sendBeacon(this._params.url, new Blob([t], {
                type: this._params.blobType
            })) ? (h.debug("SendBeacon success"), r({
                status: "success"
            })) : r({
                status: "failure",
                error: new Error("SendBeacon failed")
            })
        })
    }
    shutdown() {}
}

function qe(e) {
    return new ze(e)
}

function je(e, t) {
    return D(e, t, F({
        transport: Ve(e)
    }))
}

function Xe(e, t) {
    return D(e, t, F({
        transport: qe({
            url: e.url,
            blobType: e.headers()["Content-Type"]
        })
    }))
}

function ke(e) {
    return () => {
        const t = {};
        return Object.entries((e == null ? void 0 : e()) ? ? {}).forEach(([r, n]) => {
            typeof n < "u" ? t[r] = String(n) : h.warn(`Header "${r}" has invalid value (${n}) and will be ignored`)
        }), t
    }
}

function Je(e, t, r) {
    const n = { ...r()
        },
        s = {};
    return () => (t != null && Object.assign(s, t()), e != null && Object.assign(s, e()), Object.assign(s, n))
}

function Ye(e) {
    if (e != null) try {
        return new URL(e), e
    } catch {
        throw new Error(`Configuration: Could not parse user-provided export URL: '${e}'`)
    }
}

function $e(e, t, r) {
    return { ...K(e, t, r),
        headers: Je(ke(e.headers), t.headers, r.headers),
        url: Ye(e.url) ? ? t.url ? ? r.url,
        agentOptions: e.agentOptions ? ? t.agentOptions ? ? r.agentOptions
    }
}

function We(e, t) {
    return { ...Z(),
        headers: () => e,
        url: "http://localhost:4318/" + t,
        agentOptions: {
            keepAlive: !0
        }
    }
}

function Qe(e, t, r) {
    return $e({
        url: e.url,
        timeoutMillis: e.timeoutMillis,
        headers: Q(e.headers),
        concurrencyLimit: e.concurrencyLimit
    }, {}, We(r, t))
}

function w(e, t, r, n) {
    const s = !!e.headers || typeof navigator.sendBeacon != "function",
        o = Qe(e, r, n);
    return s ? je(o, t) : Xe(o, t)
}
class ot extends S {
    constructor(t = {}) {
        super(w(t, we, "v1/logs", {
            "Content-Type": "application/json"
        }))
    }
}
var O;
(function(e) {
    e[e.DELTA = 0] = "DELTA", e[e.CUMULATIVE = 1] = "CUMULATIVE", e[e.LOWMEMORY = 2] = "LOWMEMORY"
})(O || (O = {}));
const A = () => m.CUMULATIVE,
    V = e => {
        switch (e) {
            case c.COUNTER:
            case c.OBSERVABLE_COUNTER:
            case c.GAUGE:
            case c.HISTOGRAM:
            case c.OBSERVABLE_GAUGE:
                return m.DELTA;
            case c.UP_DOWN_COUNTER:
            case c.OBSERVABLE_UP_DOWN_COUNTER:
                return m.CUMULATIVE
        }
    },
    z = e => {
        switch (e) {
            case c.COUNTER:
            case c.HISTOGRAM:
                return m.DELTA;
            case c.GAUGE:
            case c.UP_DOWN_COUNTER:
            case c.OBSERVABLE_UP_DOWN_COUNTER:
            case c.OBSERVABLE_COUNTER:
            case c.OBSERVABLE_GAUGE:
                return m.CUMULATIVE
        }
    };

function Ke() {
    const e = "cumulative".toLowerCase();
    return e === "cumulative" ? A : e === "delta" ? V : e === "lowmemory" ? z : (h.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${e}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), A)
}

function Ze(e) {
    return e != null ? e === O.DELTA ? V : e === O.LOWMEMORY ? z : A : Ke()
}
const et = Object.freeze({
    type: $.DEFAULT
});

function tt(e) {
    return (e == null ? void 0 : e.aggregationPreference) ? ? (() => et)
}
class rt extends S {
    constructor(r, n) {
        super(r);
        i(this, "_aggregationTemporalitySelector");
        i(this, "_aggregationSelector");
        this._aggregationSelector = tt(n), this._aggregationTemporalitySelector = Ze(n == null ? void 0 : n.temporalityPreference)
    }
    selectAggregation(r) {
        return this._aggregationSelector(r)
    }
    selectAggregationTemporality(r) {
        return this._aggregationTemporalitySelector(r)
    }
}
class it extends rt {
    constructor(t) {
        super(w(t ? ? {}, Ue, "v1/metrics", {
            "Content-Type": "application/json"
        }), t)
    }
}
class at extends S {
    constructor(t = {}) {
        super(w(t, Me, "v1/traces", {
            "Content-Type": "application/json"
        }))
    }
}
export {
    at as O, it as a, ot as b
};