var zr = Object.defineProperty;
var jr = (r, t, e) => t in r ? zr(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : r[t] = e;
var a = (r, t, e) => jr(r, typeof t != "symbol" ? t + "" : t, e);
var Hr = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof globalThis == "object" ? globalThis : {},
    N = "1.9.0",
    Re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

function Xr(r) {
    var t = new Set([r]),
        e = new Set,
        n = r.match(Re);
    if (!n) return function() {
        return !1
    };
    var i = {
        major: +n[1],
        minor: +n[2],
        patch: +n[3],
        prerelease: n[4]
    };
    if (i.prerelease != null) return function(u) {
        return u === r
    };

    function s(c) {
        return e.add(c), !1
    }

    function o(c) {
        return t.add(c), !0
    }
    return function(u) {
        if (t.has(u)) return !0;
        if (e.has(u)) return !1;
        var l = u.match(Re);
        if (!l) return s(u);
        var d = {
            major: +l[1],
            minor: +l[2],
            patch: +l[3],
            prerelease: l[4]
        };
        return d.prerelease != null || i.major !== d.major ? s(u) : i.major === 0 ? i.minor === d.minor && i.patch <= d.patch ? o(u) : s(u) : i.minor <= d.minor ? o(u) : s(u)
    }
}
var Wr = Xr(N),
    Yr = N.split(".")[0],
    Z = Symbol.for("opentelemetry.js.api." + Yr),
    tt = Hr;

function it(r, t, e, n) {
    var i;
    n === void 0 && (n = !1);
    var s = tt[Z] = (i = tt[Z]) !== null && i !== void 0 ? i : {
        version: N
    };
    if (!n && s[r]) {
        var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + r);
        return e.error(o.stack || o.message), !1
    }
    if (s.version !== N) {
        var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + r + " does not match previously registered API v" + N);
        return e.error(o.stack || o.message), !1
    }
    return s[r] = t, e.debug("@opentelemetry/api: Registered a global for " + r + " v" + N + "."), !0
}

function L(r) {
    var t, e, n = (t = tt[Z]) === null || t === void 0 ? void 0 : t.version;
    if (!(!n || !Wr(n))) return (e = tt[Z]) === null || e === void 0 ? void 0 : e[r]
}

function st(r, t) {
    t.debug("@opentelemetry/api: Unregistering a global for " + r + " v" + N + ".");
    var e = tt[Z];
    e && delete e[r]
}
var Qr = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r),
            i, s = [],
            o;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = n.next()).done;) s.push(i.value)
        } catch (c) {
            o = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (e = n.return) && e.call(n)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    Kr = function(r, t, e) {
        if (arguments.length === 2)
            for (var n = 0, i = t.length, s; n < i; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return r.concat(s || Array.prototype.slice.call(t))
    },
    qr = function() {
        function r(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return r.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return X("debug", this._namespace, t)
        }, r.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return X("error", this._namespace, t)
        }, r.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return X("info", this._namespace, t)
        }, r.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return X("warn", this._namespace, t)
        }, r.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return X("verbose", this._namespace, t)
        }, r
    }();

function X(r, t, e) {
    var n = L("diag");
    if (n) return e.unshift(t), n[r].apply(n, Kr([], Qr(e), !1))
}
var p;
(function(r) {
    r[r.NONE = 0] = "NONE", r[r.ERROR = 30] = "ERROR", r[r.WARN = 50] = "WARN", r[r.INFO = 60] = "INFO", r[r.DEBUG = 70] = "DEBUG", r[r.VERBOSE = 80] = "VERBOSE", r[r.ALL = 9999] = "ALL"
})(p || (p = {}));

function Jr(r, t) {
    r < p.NONE ? r = p.NONE : r > p.ALL && (r = p.ALL), t = t || {};

    function e(n, i) {
        var s = t[n];
        return typeof s == "function" && r >= i ? s.bind(t) : function() {}
    }
    return {
        error: e("error", p.ERROR),
        warn: e("warn", p.WARN),
        info: e("info", p.INFO),
        debug: e("debug", p.DEBUG),
        verbose: e("verbose", p.VERBOSE)
    }
}
var Zr = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r),
            i, s = [],
            o;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = n.next()).done;) s.push(i.value)
        } catch (c) {
            o = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (e = n.return) && e.call(n)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    tn = function(r, t, e) {
        if (arguments.length === 2)
            for (var n = 0, i = t.length, s; n < i; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return r.concat(s || Array.prototype.slice.call(t))
    },
    en = "diag",
    w = function() {
        function r() {
            function t(i) {
                return function() {
                    for (var s = [], o = 0; o < arguments.length; o++) s[o] = arguments[o];
                    var c = L("diag");
                    if (c) return c[i].apply(c, tn([], Zr(s), !1))
                }
            }
            var e = this,
                n = function(i, s) {
                    var o, c, u;
                    if (s === void 0 && (s = {
                            logLevel: p.INFO
                        }), i === e) {
                        var l = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error((o = l.stack) !== null && o !== void 0 ? o : l.message), !1
                    }
                    typeof s == "number" && (s = {
                        logLevel: s
                    });
                    var d = L("diag"),
                        f = Jr((c = s.logLevel) !== null && c !== void 0 ? c : p.INFO, i);
                    if (d && !s.suppressOverrideMessage) {
                        var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
                        d.warn("Current logger will be overwritten from " + g), f.warn("Current logger will overwrite one already registered from " + g)
                    }
                    return it("diag", f, e, !0)
                };
            e.setLogger = n, e.disable = function() {
                st(en, e)
            }, e.createComponentLogger = function(i) {
                return new qr(i)
            }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
        }
        return r.instance = function() {
            return this._instance || (this._instance = new r), this._instance
        }, r
    }(),
    rn = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r),
            i, s = [],
            o;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = n.next()).done;) s.push(i.value)
        } catch (c) {
            o = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (e = n.return) && e.call(n)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    nn = function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator,
            e = t && r[t],
            n = 0;
        if (e) return e.call(r);
        if (r && typeof r.length == "number") return {
            next: function() {
                return r && n >= r.length && (r = void 0), {
                    value: r && r[n++],
                    done: !r
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    sn = function() {
        function r(t) {
            this._entries = t ? new Map(t) : new Map
        }
        return r.prototype.getEntry = function(t) {
            var e = this._entries.get(t);
            if (e) return Object.assign({}, e)
        }, r.prototype.getAllEntries = function() {
            return Array.from(this._entries.entries()).map(function(t) {
                var e = rn(t, 2),
                    n = e[0],
                    i = e[1];
                return [n, i]
            })
        }, r.prototype.setEntry = function(t, e) {
            var n = new r(this._entries);
            return n._entries.set(t, e), n
        }, r.prototype.removeEntry = function(t) {
            var e = new r(this._entries);
            return e._entries.delete(t), e
        }, r.prototype.removeEntries = function() {
            for (var t, e, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            var s = new r(this._entries);
            try {
                for (var o = nn(n), c = o.next(); !c.done; c = o.next()) {
                    var u = c.value;
                    s._entries.delete(u)
                }
            } catch (l) {
                t = {
                    error: l
                }
            } finally {
                try {
                    c && !c.done && (e = o.return) && e.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            return s
        }, r.prototype.clear = function() {
            return new r
        }, r
    }(),
    an = Symbol("BaggageEntryMetadata"),
    on = w.instance();

function cn(r) {
    return r === void 0 && (r = {}), new sn(new Map(Object.entries(r)))
}

function un(r) {
    return typeof r != "string" && (on.error("Cannot create baggage metadata from unknown type: " + typeof r), r = ""), {
        __TYPE__: an,
        toString: function() {
            return r
        }
    }
}

function ue(r) {
    return Symbol.for(r)
}
var ln = function() {
        function r(t) {
            var e = this;
            e._currentContext = t ? new Map(t) : new Map, e.getValue = function(n) {
                return e._currentContext.get(n)
            }, e.setValue = function(n, i) {
                var s = new r(e._currentContext);
                return s._currentContext.set(n, i), s
            }, e.deleteValue = function(n) {
                var i = new r(e._currentContext);
                return i._currentContext.delete(n), i
            }
        }
        return r
    }(),
    U = new ln,
    D = function() {
        var r = function(t, e) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, i) {
                n.__proto__ = i
            } || function(n, i) {
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s])
            }, r(t, e)
        };
        return function(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            r(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n)
        }
    }(),
    hn = function() {
        function r() {}
        return r.prototype.createGauge = function(t, e) {
            return yn
        }, r.prototype.createHistogram = function(t, e) {
            return Tn
        }, r.prototype.createCounter = function(t, e) {
            return En
        }, r.prototype.createUpDownCounter = function(t, e) {
            return bn
        }, r.prototype.createObservableGauge = function(t, e) {
            return wn
        }, r.prototype.createObservableCounter = function(t, e) {
            return An
        }, r.prototype.createObservableUpDownCounter = function(t, e) {
            return vn
        }, r.prototype.addBatchObservableCallback = function(t, e) {}, r.prototype.removeBatchObservableCallback = function(t) {}, r
    }(),
    Mt = function() {
        function r() {}
        return r
    }(),
    dn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.add = function(e, n) {}, t
    }(Mt),
    _n = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.add = function(e, n) {}, t
    }(Mt),
    fn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.record = function(e, n) {}, t
    }(Mt),
    mn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.record = function(e, n) {}, t
    }(Mt),
    le = function() {
        function r() {}
        return r.prototype.addCallback = function(t) {}, r.prototype.removeCallback = function(t) {}, r
    }(),
    gn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t
    }(le),
    pn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t
    }(le),
    Sn = function(r) {
        D(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t
    }(le),
    Qe = new hn,
    En = new dn,
    yn = new fn,
    Tn = new mn,
    bn = new _n,
    An = new gn,
    wn = new pn,
    vn = new Sn;

function Mn() {
    return Qe
}
var z;
(function(r) {
    r[r.INT = 0] = "INT", r[r.DOUBLE = 1] = "DOUBLE"
})(z || (z = {}));
var Rn = {
        get: function(r, t) {
            if (r != null) return r[t]
        },
        keys: function(r) {
            return r == null ? [] : Object.keys(r)
        }
    },
    Cn = {
        set: function(r, t, e) {
            r != null && (r[t] = e)
        }
    },
    xn = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r),
            i, s = [],
            o;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = n.next()).done;) s.push(i.value)
        } catch (c) {
            o = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (e = n.return) && e.call(n)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    On = function(r, t, e) {
        if (e || arguments.length === 2)
            for (var n = 0, i = t.length, s; n < i; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return r.concat(s || Array.prototype.slice.call(t))
    },
    Nn = function() {
        function r() {}
        return r.prototype.active = function() {
            return U
        }, r.prototype.with = function(t, e, n) {
            for (var i = [], s = 3; s < arguments.length; s++) i[s - 3] = arguments[s];
            return e.call.apply(e, On([n], xn(i), !1))
        }, r.prototype.bind = function(t, e) {
            return e
        }, r.prototype.enable = function() {
            return this
        }, r.prototype.disable = function() {
            return this
        }, r
    }(),
    Pn = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r),
            i, s = [],
            o;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = n.next()).done;) s.push(i.value)
        } catch (c) {
            o = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (e = n.return) && e.call(n)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    In = function(r, t, e) {
        if (arguments.length === 2)
            for (var n = 0, i = t.length, s; n < i; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return r.concat(s || Array.prototype.slice.call(t))
    },
    Pt = "context",
    Ln = new Nn,
    Rt = function() {
        function r() {}
        return r.getInstance = function() {
            return this._instance || (this._instance = new r), this._instance
        }, r.prototype.setGlobalContextManager = function(t) {
            return it(Pt, t, w.instance())
        }, r.prototype.active = function() {
            return this._getContextManager().active()
        }, r.prototype.with = function(t, e, n) {
            for (var i, s = [], o = 3; o < arguments.length; o++) s[o - 3] = arguments[o];
            return (i = this._getContextManager()).with.apply(i, In([t, e, n], Pn(s), !1))
        }, r.prototype.bind = function(t, e) {
            return this._getContextManager().bind(t, e)
        }, r.prototype._getContextManager = function() {
            return L(Pt) || Ln
        }, r.prototype.disable = function() {
            this._getContextManager().disable(), st(Pt, w.instance())
        }, r
    }(),
    M;
(function(r) {
    r[r.NONE = 0] = "NONE", r[r.SAMPLED = 1] = "SAMPLED"
})(M || (M = {}));
var Ke = "0000000000000000",
    qe = "00000000000000000000000000000000",
    Je = {
        traceId: qe,
        spanId: Ke,
        traceFlags: M.NONE
    },
    q = function() {
        function r(t) {
            t === void 0 && (t = Je), this._spanContext = t
        }
        return r.prototype.spanContext = function() {
            return this._spanContext
        }, r.prototype.setAttribute = function(t, e) {
            return this
        }, r.prototype.setAttributes = function(t) {
            return this
        }, r.prototype.addEvent = function(t, e) {
            return this
        }, r.prototype.addLink = function(t) {
            return this
        }, r.prototype.addLinks = function(t) {
            return this
        }, r.prototype.setStatus = function(t) {
            return this
        }, r.prototype.updateName = function(t) {
            return this
        }, r.prototype.end = function(t) {}, r.prototype.isRecording = function() {
            return !1
        }, r.prototype.recordException = function(t, e) {}, r
    }(),
    he = ue("OpenTelemetry Context Key SPAN");

function de(r) {
    return r.getValue(he) || void 0
}

function Bn() {
    return de(Rt.getInstance().active())
}

function _e(r, t) {
    return r.setValue(he, t)
}

function Dn(r) {
    return r.deleteValue(he)
}

function Un(r, t) {
    return _e(r, new q(t))
}

function Ze(r) {
    var t;
    return (t = de(r)) === null || t === void 0 ? void 0 : t.spanContext()
}
var Gn = /^([0-9a-f]{32})$/i,
    kn = /^[0-9a-f]{16}$/i;

function tr(r) {
    return Gn.test(r) && r !== qe
}

function Vn(r) {
    return kn.test(r) && r !== Ke
}

function at(r) {
    return tr(r.traceId) && Vn(r.spanId)
}

function Fn(r) {
    return new q(r)
}
var It = Rt.getInstance(),
    er = function() {
        function r() {}
        return r.prototype.startSpan = function(t, e, n) {
            n === void 0 && (n = It.active());
            var i = !!(e != null && e.root);
            if (i) return new q;
            var s = n && Ze(n);
            return $n(s) && at(s) ? new q(s) : new q
        }, r.prototype.startActiveSpan = function(t, e, n, i) {
            var s, o, c;
            if (!(arguments.length < 2)) {
                arguments.length === 2 ? c = e : arguments.length === 3 ? (s = e, c = n) : (s = e, o = n, c = i);
                var u = o ? ? It.active(),
                    l = this.startSpan(t, s, u),
                    d = _e(u, l);
                return It.with(d, c, void 0, l)
            }
        }, r
    }();

function $n(r) {
    return typeof r == "object" && typeof r.spanId == "string" && typeof r.traceId == "string" && typeof r.traceFlags == "number"
}
var zn = new er,
    jn = function() {
        function r(t, e, n, i) {
            this._provider = t, this.name = e, this.version = n, this.options = i
        }
        return r.prototype.startSpan = function(t, e, n) {
            return this._getTracer().startSpan(t, e, n)
        }, r.prototype.startActiveSpan = function(t, e, n, i) {
            var s = this._getTracer();
            return Reflect.apply(s.startActiveSpan, s, arguments)
        }, r.prototype._getTracer = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : zn
        }, r
    }(),
    Hn = function() {
        function r() {}
        return r.prototype.getTracer = function(t, e, n) {
            return new er
        }, r
    }(),
    Xn = new Hn,
    Ce = function() {
        function r() {}
        return r.prototype.getTracer = function(t, e, n) {
            var i;
            return (i = this.getDelegateTracer(t, e, n)) !== null && i !== void 0 ? i : new jn(this, t, e, n)
        }, r.prototype.getDelegate = function() {
            var t;
            return (t = this._delegate) !== null && t !== void 0 ? t : Xn
        }, r.prototype.setDelegate = function(t) {
            this._delegate = t
        }, r.prototype.getDelegateTracer = function(t, e, n) {
            var i;
            return (i = this._delegate) === null || i === void 0 ? void 0 : i.getTracer(t, e, n)
        }, r
    }(),
    mt;
(function(r) {
    r[r.NOT_RECORD = 0] = "NOT_RECORD", r[r.RECORD = 1] = "RECORD", r[r.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
})(mt || (mt = {}));
var Yt;
(function(r) {
    r[r.INTERNAL = 0] = "INTERNAL", r[r.SERVER = 1] = "SERVER", r[r.CLIENT = 2] = "CLIENT", r[r.PRODUCER = 3] = "PRODUCER", r[r.CONSUMER = 4] = "CONSUMER"
})(Yt || (Yt = {}));
var Qt;
(function(r) {
    r[r.UNSET = 0] = "UNSET", r[r.OK = 1] = "OK", r[r.ERROR = 2] = "ERROR"
})(Qt || (Qt = {}));
var b = Rt.getInstance(),
    h = w.instance(),
    Wn = function() {
        function r() {}
        return r.prototype.getMeter = function(t, e, n) {
            return Qe
        }, r
    }(),
    Yn = new Wn,
    Lt = "metrics",
    Qn = function() {
        function r() {}
        return r.getInstance = function() {
            return this._instance || (this._instance = new r), this._instance
        }, r.prototype.setGlobalMeterProvider = function(t) {
            return it(Lt, t, w.instance())
        }, r.prototype.getMeterProvider = function() {
            return L(Lt) || Yn
        }, r.prototype.getMeter = function(t, e, n) {
            return this.getMeterProvider().getMeter(t, e, n)
        }, r.prototype.disable = function() {
            st(Lt, w.instance())
        }, r
    }(),
    so = Qn.getInstance(),
    Kn = function() {
        function r() {}
        return r.prototype.inject = function(t, e) {}, r.prototype.extract = function(t, e) {
            return t
        }, r.prototype.fields = function() {
            return []
        }, r
    }(),
    fe = ue("OpenTelemetry Baggage Key");

function rr(r) {
    return r.getValue(fe) || void 0
}

function qn() {
    return rr(Rt.getInstance().active())
}

function Jn(r, t) {
    return r.setValue(fe, t)
}

function Zn(r) {
    return r.deleteValue(fe)
}
var Bt = "propagation",
    ti = new Kn,
    ei = function() {
        function r() {
            this.createBaggage = cn, this.getBaggage = rr, this.getActiveBaggage = qn, this.setBaggage = Jn, this.deleteBaggage = Zn
        }
        return r.getInstance = function() {
            return this._instance || (this._instance = new r), this._instance
        }, r.prototype.setGlobalPropagator = function(t) {
            return it(Bt, t, w.instance())
        }, r.prototype.inject = function(t, e, n) {
            return n === void 0 && (n = Cn), this._getGlobalPropagator().inject(t, e, n)
        }, r.prototype.extract = function(t, e, n) {
            return n === void 0 && (n = Rn), this._getGlobalPropagator().extract(t, e, n)
        }, r.prototype.fields = function() {
            return this._getGlobalPropagator().fields()
        }, r.prototype.disable = function() {
            st(Bt, w.instance())
        }, r.prototype._getGlobalPropagator = function() {
            return L(Bt) || ti
        }, r
    }(),
    J = ei.getInstance(),
    Dt = "trace",
    ri = function() {
        function r() {
            this._proxyTracerProvider = new Ce, this.wrapSpanContext = Fn, this.isSpanContextValid = at, this.deleteSpan = Dn, this.getSpan = de, this.getActiveSpan = Bn, this.getSpanContext = Ze, this.setSpan = _e, this.setSpanContext = Un
        }
        return r.getInstance = function() {
            return this._instance || (this._instance = new r), this._instance
        }, r.prototype.setGlobalTracerProvider = function(t) {
            var e = it(Dt, this._proxyTracerProvider, w.instance());
            return e && this._proxyTracerProvider.setDelegate(t), e
        }, r.prototype.getTracerProvider = function() {
            return L(Dt) || this._proxyTracerProvider
        }, r.prototype.getTracer = function(t, e) {
            return this.getTracerProvider().getTracer(t, e)
        }, r.prototype.disable = function() {
            st(Dt, w.instance()), this._proxyTracerProvider = new Ce
        }, r
    }(),
    y = ri.getInstance();
class nr {
    emit(t) {}
}
const ir = new nr;
class ni {
    getLogger(t, e, n) {
        return new nr
    }
}
const sr = new ni;
class ii {
    constructor(t, e, n, i) {
        this._provider = t, this.name = e, this.version = n, this.options = i
    }
    emit(t) {
        this._getLogger().emit(t)
    }
    _getLogger() {
        if (this._delegate) return this._delegate;
        const t = this._provider.getDelegateLogger(this.name, this.version, this.options);
        return t ? (this._delegate = t, this._delegate) : ir
    }
}
class xe {
    getLogger(t, e, n) {
        var i;
        return (i = this.getDelegateLogger(t, e, n)) !== null && i !== void 0 ? i : new ii(this, t, e, n)
    }
    getDelegate() {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : sr
    }
    setDelegate(t) {
        this._delegate = t
    }
    getDelegateLogger(t, e, n) {
        var i;
        return (i = this._delegate) === null || i === void 0 ? void 0 : i.getLogger(t, e, n)
    }
}
const si = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof globalThis == "object" ? globalThis : {},
    ct = Symbol.for("io.opentelemetry.js.api.logs"),
    W = si;

function ai(r, t, e) {
    return n => n === r ? t : e
}
const Oe = 1;
class me {
    constructor() {
        this._proxyLoggerProvider = new xe
    }
    static getInstance() {
        return this._instance || (this._instance = new me), this._instance
    }
    setGlobalLoggerProvider(t) {
        return W[ct] ? this.getLoggerProvider() : (W[ct] = ai(Oe, t, sr), this._proxyLoggerProvider.setDelegate(t), t)
    }
    getLoggerProvider() {
        var t, e;
        return (e = (t = W[ct]) === null || t === void 0 ? void 0 : t.call(W, Oe)) !== null && e !== void 0 ? e : this._proxyLoggerProvider
    }
    getLogger(t, e, n) {
        return this.getLoggerProvider().getLogger(t, e, n)
    }
    disable() {
        delete W[ct], this._proxyLoggerProvider = new xe
    }
}
const ao = me.getInstance(),
    ar = ue("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

function or(r) {
    return r.setValue(ar, !0)
}

function ge(r) {
    return r.getValue(ar) === !0
}
const oi = "=",
    Kt = ";",
    qt = ",",
    Ut = "baggage",
    ci = 180,
    ui = 4096,
    li = 8192;

function hi(r) {
    return r.reduce((t, e) => {
        const n = `${t}${t!==""?qt:""}${e}`;
        return n.length > li ? t : n
    }, "")
}

function di(r) {
    return r.getAllEntries().map(([t, e]) => {
        let n = `${encodeURIComponent(t)}=${encodeURIComponent(e.value)}`;
        return e.metadata !== void 0 && (n += Kt + e.metadata.toString()), n
    })
}

function _i(r) {
    const t = r.split(Kt);
    if (t.length <= 0) return;
    const e = t.shift();
    if (!e) return;
    const n = e.indexOf(oi);
    if (n <= 0) return;
    const i = decodeURIComponent(e.substring(0, n).trim()),
        s = decodeURIComponent(e.substring(n + 1).trim());
    let o;
    return t.length > 0 && (o = un(t.join(Kt))), {
        key: i,
        value: s,
        metadata: o
    }
}
class fi {
    inject(t, e, n) {
        const i = J.getBaggage(t);
        if (!i || ge(t)) return;
        const s = di(i).filter(c => c.length <= ui).slice(0, ci),
            o = hi(s);
        o.length > 0 && n.set(e, Ut, o)
    }
    extract(t, e, n) {
        const i = n.get(e, Ut),
            s = Array.isArray(i) ? i.join(qt) : i;
        if (!s) return t;
        const o = {};
        return s.length === 0 || (s.split(qt).forEach(u => {
            const l = _i(u);
            if (l) {
                const d = {
                    value: l.value
                };
                l.metadata && (d.metadata = l.metadata), o[l.key] = d
            }
        }), Object.entries(o).length === 0) ? t : J.setBaggage(t, J.createBaggage(o))
    }
    fields() {
        return [Ut]
    }
}

function dt(r) {
    const t = {};
    if (typeof r != "object" || r == null) return t;
    for (const [e, n] of Object.entries(r)) {
        if (!mi(e)) {
            h.warn(`Invalid attribute key: ${e}`);
            continue
        }
        if (!gt(n)) {
            h.warn(`Invalid attribute value set for key: ${e}`);
            continue
        }
        Array.isArray(n) ? t[e] = n.slice() : t[e] = n
    }
    return t
}

function mi(r) {
    return typeof r == "string" && r.length > 0
}

function gt(r) {
    return r == null ? !0 : Array.isArray(r) ? gi(r) : cr(r)
}

function gi(r) {
    let t;
    for (const e of r)
        if (e != null) {
            if (!t) {
                if (cr(e)) {
                    t = typeof e;
                    continue
                }
                return !1
            }
            if (typeof e !== t) return !1
        }
    return !0
}

function cr(r) {
    switch (typeof r) {
        case "number":
        case "boolean":
        case "string":
            return !0
    }
    return !1
}

function pi() {
    return r => {
        h.error(Si(r))
    }
}

function Si(r) {
    return typeof r == "string" ? r : JSON.stringify(Ei(r))
}

function Ei(r) {
    const t = {};
    let e = r;
    for (; e !== null;) Object.getOwnPropertyNames(e).forEach(n => {
        if (t[n]) return;
        const i = e[n];
        i && (t[n] = String(i))
    }), e = Object.getPrototypeOf(e);
    return t
}
let yi = pi();

function S(r) {
    try {
        yi(r)
    } catch {}
}
const oo = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof globalThis == "object" ? globalThis : {},
    V = performance,
    Ti = "2.0.1",
    bi = "http.url",
    Ai = "http.user_agent",
    co = bi,
    uo = Ai,
    lo = "error.type",
    Gt = "exception.message",
    wi = "exception.stacktrace",
    kt = "exception.type",
    ho = "http.request.method",
    _o = "http.request.method_original",
    fo = "http.response.status_code",
    mo = "server.address",
    go = "server.port",
    vi = "service.name",
    Jt = "telemetry.sdk.language",
    Mi = "webjs",
    Zt = "telemetry.sdk.name",
    te = "telemetry.sdk.version",
    po = "url.full",
    Ri = "process.runtime.name",
    Vt = {
        [Zt]: "opentelemetry",
        [Ri]: "browser",
        [Jt]: Mi,
        [te]: Ti
    };
const Ci = 9,
    xi = 6,
    Oi = Math.pow(10, xi),
    pt = Math.pow(10, Ci);

function T(r) {
    const t = r / 1e3,
        e = Math.trunc(t),
        n = Math.round(r % 1e3 * Oi);
    return [e, n]
}

function pe() {
    let r = V.timeOrigin;
    if (typeof r != "number") {
        const t = V;
        r = t.timing && t.timing.fetchStart
    }
    return r
}

function ur(r) {
    const t = T(pe()),
        e = T(typeof r == "number" ? r : V.now());
    return lr(t, e)
}

function P(r) {
    if (Se(r)) return r;
    if (typeof r == "number") return r < pe() ? ur(r) : T(r);
    if (r instanceof Date) return T(r.getTime());
    throw TypeError("Invalid input type")
}

function Ni(r, t) {
    let e = t[0] - r[0],
        n = t[1] - r[1];
    return n < 0 && (e -= 1, n += pt), [e, n]
}

function C(r) {
    return r[0] * pt + r[1]
}

function ut(r) {
    return r[0] * 1e6 + r[1] / 1e3
}

function Se(r) {
    return Array.isArray(r) && r.length === 2 && typeof r[0] == "number" && typeof r[1] == "number"
}

function Ne(r) {
    return Se(r) || typeof r == "number" || r instanceof Date
}

function lr(r, t) {
    const e = [r[0] + t[0], r[1] + t[1]];
    return e[1] >= pt && (e[1] -= pt, e[0] += 1), e
}
var et;
(function(r) {
    r[r.SUCCESS = 0] = "SUCCESS", r[r.FAILED = 1] = "FAILED"
})(et || (et = {}));
class Pi {
    constructor(t = {}) {
        a(this, "_propagators");
        a(this, "_fields");
        this._propagators = t.propagators ? ? [], this._fields = Array.from(new Set(this._propagators.map(e => typeof e.fields == "function" ? e.fields() : []).reduce((e, n) => e.concat(n), [])))
    }
    inject(t, e, n) {
        for (const i of this._propagators) try {
            i.inject(t, e, n)
        } catch (s) {
            h.warn(`Failed to inject with ${i.constructor.name}. Err: ${s.message}`)
        }
    }
    extract(t, e, n) {
        return this._propagators.reduce((i, s) => {
            try {
                return s.extract(i, e, n)
            } catch (o) {
                h.warn(`Failed to extract with ${s.constructor.name}. Err: ${o.message}`)
            }
            return i
        }, t)
    }
    fields() {
        return this._fields.slice()
    }
}
const ee = "[_0-9a-z-*/]",
    Ii = `[a-z]${ee}{0,255}`,
    Li = `[a-z0-9]${ee}{0,240}@[a-z]${ee}{0,13}`,
    Bi = new RegExp(`^(?:${Ii}|${Li})$`),
    Di = /^[ -~]{0,255}[!-~]$/,
    Ui = /,|=/;

function Gi(r) {
    return Bi.test(r)
}

function ki(r) {
    return Di.test(r) && !Ui.test(r)
}
const Pe = 32,
    Vi = 512,
    Ie = ",",
    Le = "=";
class Ee {
    constructor(t) {
        a(this, "_internalState", new Map);
        t && this._parse(t)
    }
    set(t, e) {
        const n = this._clone();
        return n._internalState.has(t) && n._internalState.delete(t), n._internalState.set(t, e), n
    }
    unset(t) {
        const e = this._clone();
        return e._internalState.delete(t), e
    }
    get(t) {
        return this._internalState.get(t)
    }
    serialize() {
        return this._keys().reduce((t, e) => (t.push(e + Le + this.get(e)), t), []).join(Ie)
    }
    _parse(t) {
        t.length > Vi || (this._internalState = t.split(Ie).reverse().reduce((e, n) => {
            const i = n.trim(),
                s = i.indexOf(Le);
            if (s !== -1) {
                const o = i.slice(0, s),
                    c = i.slice(s + 1, n.length);
                Gi(o) && ki(c) && e.set(o, c)
            }
            return e
        }, new Map), this._internalState.size > Pe && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Pe))))
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse()
    }
    _clone() {
        const t = new Ee;
        return t._internalState = new Map(this._internalState), t
    }
}
const Ft = "traceparent",
    $t = "tracestate",
    Fi = "00",
    $i = "(?!ff)[\\da-f]{2}",
    zi = "(?![0]{32})[\\da-f]{32}",
    ji = "(?![0]{16})[\\da-f]{16}",
    Hi = "[\\da-f]{2}",
    Xi = new RegExp(`^\\s?(${$i})-(${zi})-(${ji})-(${Hi})(-.*)?\\s?$`);

function Wi(r) {
    const t = Xi.exec(r);
    return !t || t[1] === "00" && t[5] ? null : {
        traceId: t[2],
        spanId: t[3],
        traceFlags: parseInt(t[4], 16)
    }
}
class Yi {
    inject(t, e, n) {
        const i = y.getSpanContext(t);
        if (!i || ge(t) || !at(i)) return;
        const s = `${Fi}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||M.NONE).toString(16)}`;
        n.set(e, Ft, s), i.traceState && n.set(e, $t, i.traceState.serialize())
    }
    extract(t, e, n) {
        const i = n.get(e, Ft);
        if (!i) return t;
        const s = Array.isArray(i) ? i[0] : i;
        if (typeof s != "string") return t;
        const o = Wi(s);
        if (!o) return t;
        o.isRemote = !0;
        const c = n.get(e, $t);
        if (c) {
            const u = Array.isArray(c) ? c.join(",") : c;
            o.traceState = new Ee(typeof u == "string" ? u : void 0)
        }
        return y.setSpanContext(t, o)
    }
    fields() {
        return [Ft, $t]
    }
}
const Qi = "[object Object]",
    Ki = "[object Null]",
    qi = "[object Undefined]",
    Ji = Function.prototype,
    hr = Ji.toString,
    Zi = hr.call(Object),
    ts = Object.getPrototypeOf,
    dr = Object.prototype,
    _r = dr.hasOwnProperty,
    x = Symbol ? Symbol.toStringTag : void 0,
    fr = dr.toString;

function Be(r) {
    if (!es(r) || rs(r) !== Qi) return !1;
    const t = ts(r);
    if (t === null) return !0;
    const e = _r.call(t, "constructor") && t.constructor;
    return typeof e == "function" && e instanceof e && hr.call(e) === Zi
}

function es(r) {
    return r != null && typeof r == "object"
}

function rs(r) {
    return r == null ? r === void 0 ? qi : Ki : x && x in Object(r) ? ns(r) : is(r)
}

function ns(r) {
    const t = _r.call(r, x),
        e = r[x];
    let n = !1;
    try {
        r[x] = void 0, n = !0
    } catch {}
    const i = fr.call(r);
    return n && (t ? r[x] = e : delete r[x]), i
}

function is(r) {
    return fr.call(r)
}
const ss = 20;

function mr(...r) {
    let t = r.shift();
    const e = new WeakMap;
    for (; r.length > 0;) t = gr(t, r.shift(), 0, e);
    return t
}

function zt(r) {
    return St(r) ? r.slice() : r
}

function gr(r, t, e = 0, n) {
    let i;
    if (!(e > ss)) {
        if (e++, _t(r) || _t(t) || pr(t)) i = zt(t);
        else if (St(r)) {
            if (i = r.slice(), St(t))
                for (let s = 0, o = t.length; s < o; s++) i.push(zt(t[s]));
            else if (Y(t)) {
                const s = Object.keys(t);
                for (let o = 0, c = s.length; o < c; o++) {
                    const u = s[o];
                    i[u] = zt(t[u])
                }
            }
        } else if (Y(r))
            if (Y(t)) {
                if (!as(r, t)) return t;
                i = Object.assign({}, r);
                const s = Object.keys(t);
                for (let o = 0, c = s.length; o < c; o++) {
                    const u = s[o],
                        l = t[u];
                    if (_t(l)) typeof l > "u" ? delete i[u] : i[u] = l;
                    else {
                        const d = i[u],
                            f = l;
                        if (De(r, u, n) || De(t, u, n)) delete i[u];
                        else {
                            if (Y(d) && Y(f)) {
                                const g = n.get(d) || [],
                                    E = n.get(f) || [];
                                g.push({
                                    obj: r,
                                    key: u
                                }), E.push({
                                    obj: t,
                                    key: u
                                }), n.set(d, g), n.set(f, E)
                            }
                            i[u] = gr(i[u], l, e, n)
                        }
                    }
                }
            } else i = t;
        return i
    }
}

function De(r, t, e) {
    const n = e.get(r[t]) || [];
    for (let i = 0, s = n.length; i < s; i++) {
        const o = n[i];
        if (o.key === t && o.obj === r) return !0
    }
    return !1
}

function St(r) {
    return Array.isArray(r)
}

function pr(r) {
    return typeof r == "function"
}

function Y(r) {
    return !_t(r) && !St(r) && !pr(r) && typeof r == "object"
}

function _t(r) {
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean" || typeof r > "u" || r instanceof Date || r instanceof RegExp || r === null
}

function as(r, t) {
    return !(!Be(r) || !Be(t))
}
let os = class Sr extends Error {
    constructor(t) {
        super(t), Object.setPrototypeOf(this, Sr.prototype)
    }
};

function Er(r, t) {
    let e;
    const n = new Promise(function(s, o) {
        e = setTimeout(function() {
            o(new os("Operation timed out."))
        }, t)
    });
    return Promise.race([r, n]).then(i => (clearTimeout(e), i), i => {
        throw clearTimeout(e), i
    })
}

function yr(r, t) {
    return typeof t == "string" ? r === t : !!r.match(t)
}

function So(r, t) {
    if (!t) return !1;
    for (const e of t)
        if (yr(r, e)) return !0;
    return !1
}
class cs {
    constructor() {
        a(this, "_promise");
        a(this, "_resolve");
        a(this, "_reject");
        this._promise = new Promise((t, e) => {
            this._resolve = t, this._reject = e
        })
    }
    get promise() {
        return this._promise
    }
    resolve(t) {
        this._resolve(t)
    }
    reject(t) {
        this._reject(t)
    }
}
class ye {
    constructor(t, e) {
        a(this, "_callback");
        a(this, "_that");
        a(this, "_isCalled", !1);
        a(this, "_deferred", new cs);
        this._callback = t, this._that = e
    }
    get isCalled() {
        return this._isCalled
    }
    get promise() {
        return this._deferred.promise
    }
    call(...t) {
        if (!this._isCalled) {
            this._isCalled = !0;
            try {
                Promise.resolve(this._callback.call(this._that, ...t)).then(e => this._deferred.resolve(e), e => this._deferred.reject(e))
            } catch (e) {
                this._deferred.reject(e)
            }
        }
        return this._deferred.promise
    }
}

function us(r, t) {
    return new Promise(e => {
        b.with(or(b.active()), () => {
            r.export(t, n => {
                e(n)
            })
        })
    })
}
const Tr = {
    _export: us
};

function ls() {
    return "unknown_service"
}
const K = r => r !== null && typeof r == "object" && typeof r.then == "function";
class Et {
    constructor(t) {
        a(this, "_rawAttributes");
        a(this, "_asyncAttributesPending", !1);
        a(this, "_memoizedAttributes");
        const e = t.attributes ? ? {};
        this._rawAttributes = Object.entries(e).map(([n, i]) => (K(i) && (this._asyncAttributesPending = !0), [n, i])), this._rawAttributes = Ue(this._rawAttributes)
    }
    static FromAttributeList(t) {
        const e = new Et({});
        return e._rawAttributes = Ue(t), e._asyncAttributesPending = t.filter(([n, i]) => K(i)).length > 0, e
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending
    }
    async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
            for (let t = 0; t < this._rawAttributes.length; t++) {
                const [e, n] = this._rawAttributes[t];
                this._rawAttributes[t] = [e, K(n) ? await n : n]
            }
            this._asyncAttributesPending = !1
        }
    }
    get attributes() {
        if (this.asyncAttributesPending && h.error("Accessing resource attributes before async attributes settled"), this._memoizedAttributes) return this._memoizedAttributes;
        const t = {};
        for (const [e, n] of this._rawAttributes) {
            if (K(n)) {
                h.debug(`Unsettled resource attribute ${e} skipped`);
                continue
            }
            n != null && (t[e] ? ? (t[e] = n))
        }
        return this._asyncAttributesPending || (this._memoizedAttributes = t), t
    }
    getRawAttributes() {
        return this._rawAttributes
    }
    merge(t) {
        return t == null ? this : Et.FromAttributeList([...t.getRawAttributes(), ...this.getRawAttributes()])
    }
}

function hs(r) {
    return Et.FromAttributeList(Object.entries(r))
}

function Te() {
    return hs({
        [vi]: ls(),
        [Jt]: Vt[Jt],
        [Zt]: Vt[Zt],
        [te]: Vt[te]
    })
}

function Ue(r) {
    return r.map(([t, e]) => K(e) ? [t, e.catch(n => {
        h.debug("promise rejection for resource attribute: %s - %s", t, n)
    })] : [t, e])
}
const ds = "exception";
class _s {
    constructor(t) {
        a(this, "_spanContext");
        a(this, "kind");
        a(this, "parentSpanContext");
        a(this, "attributes", {});
        a(this, "links", []);
        a(this, "events", []);
        a(this, "startTime");
        a(this, "resource");
        a(this, "instrumentationScope");
        a(this, "_droppedAttributesCount", 0);
        a(this, "_droppedEventsCount", 0);
        a(this, "_droppedLinksCount", 0);
        a(this, "name");
        a(this, "status", {
            code: Qt.UNSET
        });
        a(this, "endTime", [0, 0]);
        a(this, "_ended", !1);
        a(this, "_duration", [-1, -1]);
        a(this, "_spanProcessor");
        a(this, "_spanLimits");
        a(this, "_attributeValueLengthLimit");
        a(this, "_performanceStartTime");
        a(this, "_performanceOffset");
        a(this, "_startTimeProvided");
        const e = Date.now();
        this._spanContext = t.spanContext, this._performanceStartTime = V.now(), this._performanceOffset = e - (this._performanceStartTime + pe()), this._startTimeProvided = t.startTime != null, this._spanLimits = t.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, this._spanProcessor = t.spanProcessor, this.name = t.name, this.parentSpanContext = t.parentSpanContext, this.kind = t.kind, this.links = t.links || [], this.startTime = this._getTime(t.startTime ? ? e), this.resource = t.resource, this.instrumentationScope = t.scope, t.attributes != null && this.setAttributes(t.attributes), this._spanProcessor.onStart(this, t.context)
    }
    spanContext() {
        return this._spanContext
    }
    setAttribute(t, e) {
        if (e == null || this._isSpanEnded()) return this;
        if (t.length === 0) return h.warn(`Invalid attribute key: ${t}`), this;
        if (!gt(e)) return h.warn(`Invalid attribute value set for key: ${t}`), this;
        const {
            attributeCountLimit: n
        } = this._spanLimits;
        return n !== void 0 && Object.keys(this.attributes).length >= n && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this)
    }
    setAttributes(t) {
        for (const [e, n] of Object.entries(t)) this.setAttribute(e, n);
        return this
    }
    addEvent(t, e, n) {
        if (this._isSpanEnded()) return this;
        const {
            eventCountLimit: i
        } = this._spanLimits;
        if (i === 0) return h.warn("No events allowed."), this._droppedEventsCount++, this;
        i !== void 0 && this.events.length >= i && (this._droppedEventsCount === 0 && h.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), Ne(e) && (Ne(n) || (n = e), e = void 0);
        const s = dt(e);
        return this.events.push({
            name: t,
            attributes: s,
            time: this._getTime(n),
            droppedAttributesCount: 0
        }), this
    }
    addLink(t) {
        return this.links.push(t), this
    }
    addLinks(t) {
        return this.links.push(...t), this
    }
    setStatus(t) {
        return this._isSpanEnded() ? this : (this.status = { ...t
        }, this.status.message != null && typeof t.message != "string" && (h.warn(`Dropping invalid status.message of type '${typeof t.message}', expected 'string'`), delete this.status.message), this)
    }
    updateName(t) {
        return this._isSpanEnded() ? this : (this.name = t, this)
    }
    end(t) {
        if (this._isSpanEnded()) {
            h.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
            return
        }
        this._ended = !0, this.endTime = this._getTime(t), this._duration = Ni(this.startTime, this.endTime), this._duration[0] < 0 && (h.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && h.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`), this._spanProcessor.onEnd(this)
    }
    _getTime(t) {
        if (typeof t == "number" && t <= V.now()) return ur(t + this._performanceOffset);
        if (typeof t == "number") return T(t);
        if (t instanceof Date) return T(t.getTime());
        if (Se(t)) return t;
        if (this._startTimeProvided) return T(Date.now());
        const e = V.now() - this._performanceStartTime;
        return lr(this.startTime, T(e))
    }
    isRecording() {
        return this._ended === !1
    }
    recordException(t, e) {
        const n = {};
        typeof t == "string" ? n[Gt] = t : t && (t.code ? n[kt] = t.code.toString() : t.name && (n[kt] = t.name), t.message && (n[Gt] = t.message), t.stack && (n[wi] = t.stack)), n[kt] || n[Gt] ? this.addEvent(ds, n, e) : h.warn(`Failed to record an exception ${t}`)
    }
    get duration() {
        return this._duration
    }
    get ended() {
        return this._ended
    }
    get droppedAttributesCount() {
        return this._droppedAttributesCount
    }
    get droppedEventsCount() {
        return this._droppedEventsCount
    }
    get droppedLinksCount() {
        return this._droppedLinksCount
    }
    _isSpanEnded() {
        if (this._ended) {
            const t = new Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
            h.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, t)
        }
        return this._ended
    }
    _truncateToLimitUtil(t, e) {
        return t.length <= e ? t : t.substring(0, e)
    }
    _truncateToSize(t) {
        const e = this._attributeValueLengthLimit;
        return e <= 0 ? (h.warn(`Attribute value limit must be positive, got ${e}`), t) : typeof t == "string" ? this._truncateToLimitUtil(t, e) : Array.isArray(t) ? t.map(n => typeof n == "string" ? this._truncateToLimitUtil(n, e) : n) : t
    }
}
var j;
(function(r) {
    r[r.NOT_RECORD = 0] = "NOT_RECORD", r[r.RECORD = 1] = "RECORD", r[r.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
})(j || (j = {}));
class yt {
    shouldSample() {
        return {
            decision: j.NOT_RECORD
        }
    }
    toString() {
        return "AlwaysOffSampler"
    }
}
class F {
    shouldSample() {
        return {
            decision: j.RECORD_AND_SAMPLED
        }
    }
    toString() {
        return "AlwaysOnSampler"
    }
}
class lt {
    constructor(t) {
        a(this, "_root");
        a(this, "_remoteParentSampled");
        a(this, "_remoteParentNotSampled");
        a(this, "_localParentSampled");
        a(this, "_localParentNotSampled");
        this._root = t.root, this._root || (S(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new F), this._remoteParentSampled = t.remoteParentSampled ? ? new F, this._remoteParentNotSampled = t.remoteParentNotSampled ? ? new yt, this._localParentSampled = t.localParentSampled ? ? new F, this._localParentNotSampled = t.localParentNotSampled ? ? new yt
    }
    shouldSample(t, e, n, i, s, o) {
        const c = y.getSpanContext(t);
        return !c || !at(c) ? this._root.shouldSample(t, e, n, i, s, o) : c.isRemote ? c.traceFlags & M.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, n, i, s, o) : this._remoteParentNotSampled.shouldSample(t, e, n, i, s, o) : c.traceFlags & M.SAMPLED ? this._localParentSampled.shouldSample(t, e, n, i, s, o) : this._localParentNotSampled.shouldSample(t, e, n, i, s, o)
    }
    toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`
    }
}
class Ge {
    constructor(t = 0) {
        a(this, "_ratio");
        a(this, "_upperBound");
        this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(this._ratio * 4294967295)
    }
    shouldSample(t, e) {
        return {
            decision: tr(e) && this._accumulate(e) < this._upperBound ? j.RECORD_AND_SAMPLED : j.NOT_RECORD
        }
    }
    toString() {
        return `TraceIdRatioBased{${this._ratio}}`
    }
    _normalize(t) {
        return typeof t != "number" || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
    }
    _accumulate(t) {
        let e = 0;
        for (let n = 0; n < t.length / 8; n++) {
            const i = n * 8,
                s = parseInt(t.slice(i, i + 8), 16);
            e = (e ^ s) >>> 0
        }
        return e
    }
}
const ke = 1;

function br() {
    return {
        sampler: Ar(),
        forceFlushTimeoutMillis: 3e4,
        generalLimits: {
            attributeValueLengthLimit: 1 / 0,
            attributeCountLimit: 128
        },
        spanLimits: {
            attributeValueLengthLimit: 1 / 0,
            attributeCountLimit: 128,
            linkCountLimit: 128,
            eventCountLimit: 128,
            attributePerEventCountLimit: 128,
            attributePerLinkCountLimit: 128
        }
    }
}

function Ar() {
    const r = "parentbased_always_on";
    switch (r) {
        case "always_on":
            return new F;
        case "always_off":
            return new yt;
        case "parentbased_always_on":
            return new lt({
                root: new F
            });
        case "parentbased_always_off":
            return new lt({
                root: new yt
            });
        case "traceidratio":
            return new Ge(Ve());
        case "parentbased_traceidratio":
            return new lt({
                root: new Ge(Ve())
            });
        default:
            return h.error(`OTEL_TRACES_SAMPLER value "${r}" invalid, defaulting to "parentbased_always_on".`), new lt({
                root: new F
            })
    }
}

function Ve() {
    return h.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${ke}.`), ke
}
const fs = 128,
    ms = 1 / 0;

function gs(r) {
    const t = {
            sampler: Ar()
        },
        e = br(),
        n = Object.assign({}, e, t, r);
    return n.generalLimits = Object.assign({}, e.generalLimits, r.generalLimits || {}), n.spanLimits = Object.assign({}, e.spanLimits, r.spanLimits || {}), n
}

function ps(r) {
    var e, n, i, s;
    const t = Object.assign({}, r.spanLimits);
    return t.attributeCountLimit = ((e = r.spanLimits) == null ? void 0 : e.attributeCountLimit) ? ? ((n = r.generalLimits) == null ? void 0 : n.attributeCountLimit) ? ? void 0 ? ? void 0 ? ? fs, t.attributeValueLengthLimit = ((i = r.spanLimits) == null ? void 0 : i.attributeValueLengthLimit) ? ? ((s = r.generalLimits) == null ? void 0 : s.attributeValueLengthLimit) ? ? void 0 ? ? void 0 ? ? ms, Object.assign({}, r, {
        spanLimits: t
    })
}
class Ss {
    constructor(t, e) {
        a(this, "_exporter");
        a(this, "_maxExportBatchSize");
        a(this, "_maxQueueSize");
        a(this, "_scheduledDelayMillis");
        a(this, "_exportTimeoutMillis");
        a(this, "_isExporting", !1);
        a(this, "_finishedSpans", []);
        a(this, "_timer");
        a(this, "_shutdownOnce");
        a(this, "_droppedSpansCount", 0);
        this._exporter = t, this._maxExportBatchSize = typeof(e == null ? void 0 : e.maxExportBatchSize) == "number" ? e.maxExportBatchSize : 512, this._maxQueueSize = typeof(e == null ? void 0 : e.maxQueueSize) == "number" ? e.maxQueueSize : 2048, this._scheduledDelayMillis = typeof(e == null ? void 0 : e.scheduledDelayMillis) == "number" ? e.scheduledDelayMillis : 5e3, this._exportTimeoutMillis = typeof(e == null ? void 0 : e.exportTimeoutMillis) == "number" ? e.exportTimeoutMillis : 3e4, this._shutdownOnce = new ye(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (h.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
    }
    forceFlush() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
    }
    onStart(t, e) {}
    onEnd(t) {
        this._shutdownOnce.isCalled || (t.spanContext().traceFlags & M.SAMPLED) !== 0 && this._addToBuffer(t)
    }
    shutdown() {
        return this._shutdownOnce.call()
    }
    _shutdown() {
        return Promise.resolve().then(() => this.onShutdown()).then(() => this._flushAll()).then(() => this._exporter.shutdown())
    }
    _addToBuffer(t) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            this._droppedSpansCount === 0 && h.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++;
            return
        }
        this._droppedSpansCount > 0 && (h.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
    }
    _flushAll() {
        return new Promise((t, e) => {
            const n = [],
                i = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
            for (let s = 0, o = i; s < o; s++) n.push(this._flushOneBatch());
            Promise.all(n).then(() => {
                t()
            }).catch(e)
        })
    }
    _flushOneBatch() {
        return this._clearTimer(), this._finishedSpans.length === 0 ? Promise.resolve() : new Promise((t, e) => {
            const n = setTimeout(() => {
                e(new Error("Timeout"))
            }, this._exportTimeoutMillis);
            b.with(or(b.active()), () => {
                let i;
                this._finishedSpans.length <= this._maxExportBatchSize ? (i = this._finishedSpans, this._finishedSpans = []) : i = this._finishedSpans.splice(0, this._maxExportBatchSize);
                const s = () => this._exporter.export(i, c => {
                    clearTimeout(n), c.code === et.SUCCESS ? t() : e(c.error ? ? new Error("BatchSpanProcessor: span export failed"))
                });
                let o = null;
                for (let c = 0, u = i.length; c < u; c++) {
                    const l = i[c];
                    l.resource.asyncAttributesPending && l.resource.waitForAsyncAttributes && (o ? ? (o = []), o.push(l.resource.waitForAsyncAttributes()))
                }
                o === null ? s() : Promise.all(o).then(s, c => {
                    S(c), e(c)
                })
            })
        })
    }
    _maybeStartTimer() {
        if (this._isExporting) return;
        const t = () => {
            this._isExporting = !0, this._flushOneBatch().finally(() => {
                this._isExporting = !1, this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer())
            }).catch(e => {
                this._isExporting = !1, S(e)
            })
        };
        if (this._finishedSpans.length >= this._maxExportBatchSize) return t();
        this._timer === void 0 && (this._timer = setTimeout(() => t(), this._scheduledDelayMillis), this._timer, void 0)
    }
    _clearTimer() {
        this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0)
    }
}
class Eo extends Ss {
    constructor(e, n) {
        super(e, n);
        a(this, "_visibilityChangeListener");
        a(this, "_pageHideListener");
        this.onInit(n)
    }
    onInit(e) {
        (e == null ? void 0 : e.disableAutoFlushOnDocumentHide) !== !0 && typeof document < "u" && (this._visibilityChangeListener = () => {
            document.visibilityState === "hidden" && this.forceFlush().catch(n => {
                S(n)
            })
        }, this._pageHideListener = () => {
            this.forceFlush().catch(n => {
                S(n)
            })
        }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
    }
    onShutdown() {
        typeof document < "u" && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
    }
}
const Es = 8,
    ys = 16;
class Ts {
    constructor() {
        a(this, "generateTraceId", Fe(ys));
        a(this, "generateSpanId", Fe(Es))
    }
}
const ht = Array(32);

function Fe(r) {
    return function() {
        for (let e = 0; e < r * 2; e++) ht[e] = Math.floor(Math.random() * 16) + 48, ht[e] >= 58 && (ht[e] += 39);
        return String.fromCharCode.apply(null, ht.slice(0, r * 2))
    }
}
class bs {
    constructor(t, e, n, i) {
        a(this, "_sampler");
        a(this, "_generalLimits");
        a(this, "_spanLimits");
        a(this, "_idGenerator");
        a(this, "instrumentationScope");
        a(this, "_resource");
        a(this, "_spanProcessor");
        const s = gs(e);
        this._sampler = s.sampler, this._generalLimits = s.generalLimits, this._spanLimits = s.spanLimits, this._idGenerator = e.idGenerator || new Ts, this._resource = n, this._spanProcessor = i, this.instrumentationScope = t
    }
    startSpan(t, e = {}, n = b.active()) {
        e.root && (n = y.deleteSpan(n));
        const i = y.getSpan(n);
        if (ge(n)) return h.debug("Instrumentation suppressed, returning Noop Span"), y.wrapSpanContext(Je);
        const s = i == null ? void 0 : i.spanContext(),
            o = this._idGenerator.generateSpanId();
        let c, u, l;
        !s || !y.isSpanContextValid(s) ? u = this._idGenerator.generateTraceId() : (u = s.traceId, l = s.traceState, c = s);
        const d = e.kind ? ? Yt.INTERNAL,
            f = (e.links ? ? []).map(ot => ({
                context: ot.context,
                attributes: dt(ot.attributes)
            })),
            g = dt(e.attributes),
            E = this._sampler.shouldSample(n, u, t, d, g, f);
        l = E.traceState ? ? l;
        const Fr = E.decision === mt.RECORD_AND_SAMPLED ? M.SAMPLED : M.NONE,
            Me = {
                traceId: u,
                spanId: o,
                traceFlags: Fr,
                traceState: l
            };
        if (E.decision === mt.NOT_RECORD) return h.debug("Recording is off, propagating context in a non-recording span"), y.wrapSpanContext(Me);
        const $r = dt(Object.assign(g, E.attributes));
        return new _s({
            resource: this._resource,
            scope: this.instrumentationScope,
            context: n,
            spanContext: Me,
            name: t,
            kind: d,
            links: f,
            parentSpanContext: c,
            attributes: $r,
            startTime: e.startTime,
            spanProcessor: this._spanProcessor,
            spanLimits: this._spanLimits
        })
    }
    startActiveSpan(t, e, n, i) {
        let s, o, c;
        if (arguments.length < 2) return;
        arguments.length === 2 ? c = e : arguments.length === 3 ? (s = e, c = n) : (s = e, o = n, c = i);
        const u = o ? ? b.active(),
            l = this.startSpan(t, s, u),
            d = y.setSpan(u, l);
        return b.with(d, c, void 0, l)
    }
    getGeneralLimits() {
        return this._generalLimits
    }
    getSpanLimits() {
        return this._spanLimits
    }
}
class As {
    constructor(t) {
        a(this, "_spanProcessors");
        this._spanProcessors = t
    }
    forceFlush() {
        const t = [];
        for (const e of this._spanProcessors) t.push(e.forceFlush());
        return new Promise(e => {
            Promise.all(t).then(() => {
                e()
            }).catch(n => {
                S(n || new Error("MultiSpanProcessor: forceFlush failed")), e()
            })
        })
    }
    onStart(t, e) {
        for (const n of this._spanProcessors) n.onStart(t, e)
    }
    onEnd(t) {
        for (const e of this._spanProcessors) e.onEnd(t)
    }
    shutdown() {
        const t = [];
        for (const e of this._spanProcessors) t.push(e.shutdown());
        return new Promise((e, n) => {
            Promise.all(t).then(() => {
                e()
            }, n)
        })
    }
}
var O;
(function(r) {
    r[r.resolved = 0] = "resolved", r[r.timeout = 1] = "timeout", r[r.error = 2] = "error", r[r.unresolved = 3] = "unresolved"
})(O || (O = {}));
class ws {
    constructor(t = {}) {
        a(this, "_config");
        a(this, "_tracers", new Map);
        a(this, "_resource");
        a(this, "_activeSpanProcessor");
        var i;
        const e = mr({}, br(), ps(t));
        this._resource = e.resource ? ? Te(), this._config = Object.assign({}, e, {
            resource: this._resource
        });
        const n = [];
        (i = t.spanProcessors) != null && i.length && n.push(...t.spanProcessors), this._activeSpanProcessor = new As(n)
    }
    getTracer(t, e, n) {
        const i = `${t}@${e||""}:${(n==null?void 0:n.schemaUrl)||""}`;
        return this._tracers.has(i) || this._tracers.set(i, new bs({
            name: t,
            version: e,
            schemaUrl: n == null ? void 0 : n.schemaUrl
        }, this._config, this._resource, this._activeSpanProcessor)), this._tracers.get(i)
    }
    forceFlush() {
        const t = this._config.forceFlushTimeoutMillis,
            e = this._activeSpanProcessor._spanProcessors.map(n => new Promise(i => {
                let s;
                const o = setTimeout(() => {
                    i(new Error(`Span processor did not completed within timeout period of ${t} ms`)), s = O.timeout
                }, t);
                n.forceFlush().then(() => {
                    clearTimeout(o), s !== O.timeout && (s = O.resolved, i(s))
                }).catch(c => {
                    clearTimeout(o), s = O.error, i(c)
                })
            }));
        return new Promise((n, i) => {
            Promise.all(e).then(s => {
                const o = s.filter(c => c !== O.resolved);
                o.length > 0 ? i(o) : n()
            }).catch(s => i([s]))
        })
    }
    shutdown() {
        return this._activeSpanProcessor.shutdown()
    }
}
class vs {
    constructor() {
        a(this, "_enabled", !1);
        a(this, "_currentContext", U)
    }
    _bindFunction(t = U, e) {
        const n = this,
            i = function(...s) {
                return n.with(t, () => e.apply(this, s))
            };
        return Object.defineProperty(i, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: e.length
        }), i
    }
    active() {
        return this._currentContext
    }
    bind(t, e) {
        return t === void 0 && (t = this.active()), typeof e == "function" ? this._bindFunction(t, e) : e
    }
    disable() {
        return this._currentContext = U, this._enabled = !1, this
    }
    enable() {
        return this._enabled ? this : (this._enabled = !0, this._currentContext = U, this)
    }
    with(t, e, n, ...i) {
        const s = this._currentContext;
        this._currentContext = t || U;
        try {
            return e.call(n, ...i)
        } finally {
            this._currentContext = s
        }
    }
}

function Ms(r) {
    if (r !== null) {
        if (r === void 0) {
            const t = new vs;
            t.enable(), b.setGlobalContextManager(t);
            return
        }
        r.enable(), b.setGlobalContextManager(r)
    }
}

function Rs(r) {
    if (r !== null) {
        if (r === void 0) {
            J.setGlobalPropagator(new Pi({
                propagators: [new Yi, new fi]
            }));
            return
        }
        J.setGlobalPropagator(r)
    }
}
class yo extends ws {
    constructor(t = {}) {
        super(t)
    }
    register(t = {}) {
        y.setGlobalTracerProvider(this), Rs(t.propagator), Ms(t.contextManager)
    }
}
var m;
(function(r) {
    r.CONNECT_END = "connectEnd", r.CONNECT_START = "connectStart", r.DECODED_BODY_SIZE = "decodedBodySize", r.DOM_COMPLETE = "domComplete", r.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", r.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", r.DOM_INTERACTIVE = "domInteractive", r.DOMAIN_LOOKUP_END = "domainLookupEnd", r.DOMAIN_LOOKUP_START = "domainLookupStart", r.ENCODED_BODY_SIZE = "encodedBodySize", r.FETCH_START = "fetchStart", r.LOAD_EVENT_END = "loadEventEnd", r.LOAD_EVENT_START = "loadEventStart", r.NAVIGATION_START = "navigationStart", r.REDIRECT_END = "redirectEnd", r.REDIRECT_START = "redirectStart", r.REQUEST_START = "requestStart", r.RESPONSE_END = "responseEnd", r.RESPONSE_START = "responseStart", r.SECURE_CONNECTION_START = "secureConnectionStart", r.START_TIME = "startTime", r.UNLOAD_EVENT_END = "unloadEventEnd", r.UNLOAD_EVENT_START = "unloadEventStart"
})(m || (m = {}));
const Cs = "http.response_content_length",
    xs = "http.response_content_length_uncompressed";
let jt;

function Os() {
    return jt || (jt = document.createElement("a")), jt
}

function Ns(r, t) {
    return t in r
}

function v(r, t, e, n = !0) {
    if (Ns(e, t) && typeof e[t] == "number" && !(n && e[t] === 0)) return r.addEvent(t, e[t])
}

function To(r, t, e = !1, n, i) {
    if (n === void 0 && (n = t[m.START_TIME] !== 0), e || (v(r, m.FETCH_START, t, n), v(r, m.DOMAIN_LOOKUP_START, t, n), v(r, m.DOMAIN_LOOKUP_END, t, n), v(r, m.CONNECT_START, t, n), v(r, m.SECURE_CONNECTION_START, t, n), v(r, m.CONNECT_END, t, n), v(r, m.REQUEST_START, t, n), v(r, m.RESPONSE_START, t, n), v(r, m.RESPONSE_END, t, n)), !i) {
        const s = t[m.ENCODED_BODY_SIZE];
        s !== void 0 && r.setAttribute(Cs, s);
        const o = t[m.DECODED_BODY_SIZE];
        o !== void 0 && s !== o && r.setAttribute(xs, o)
    }
}

function Ps(r) {
    return r.slice().sort((t, e) => {
        const n = t[m.FETCH_START],
            i = e[m.FETCH_START];
        return n > i ? 1 : n < i ? -1 : 0
    })
}

function wr() {
    return typeof location < "u" ? location.origin : void 0
}

function bo(r, t, e, n, i = new WeakSet, s) {
    const o = vr(r);
    r = o.toString();
    const c = Ls(r, t, e, n, i, s);
    if (c.length === 0) return {
        mainRequest: void 0
    };
    if (c.length === 1) return {
        mainRequest: c[0]
    };
    const u = Ps(c);
    if (o.origin !== wr() && u.length > 1) {
        let l = u[0],
            d = Is(u, l[m.RESPONSE_END], e);
        const f = l[m.RESPONSE_END];
        return d[m.FETCH_START] < f && (d = l, l = void 0), {
            corsPreFlightRequest: l,
            mainRequest: d
        }
    } else return {
        mainRequest: c[0]
    }
}

function Is(r, t, e) {
    const n = C(e),
        i = C(P(t));
    let s = r[1],
        o;
    const c = r.length;
    for (let u = 1; u < c; u++) {
        const l = r[u],
            d = C(P(l[m.FETCH_START])),
            f = C(P(l[m.RESPONSE_END])),
            g = n - f;
        d >= i && (!o || g < o) && (o = g, s = l)
    }
    return s
}

function Ls(r, t, e, n, i, s) {
    const o = C(t),
        c = C(e);
    let u = n.filter(l => {
        const d = C(P(l[m.FETCH_START])),
            f = C(P(l[m.RESPONSE_END]));
        return l.initiatorType.toLowerCase() === (s || "xmlhttprequest") && l.name === r && d >= o && f <= c
    });
    return u.length > 0 && (u = u.filter(l => !i.has(l))), u
}

function vr(r) {
    if (typeof URL == "function") return new URL(r, typeof document < "u" ? document.baseURI : typeof location < "u" ? location.href : void 0);
    const t = Os();
    return t.href = r, t
}

function Bs(r, t) {
    if (r.nodeType === Node.DOCUMENT_NODE) return "/";
    const e = Us(r, t);
    if (t && e.indexOf("@id") > 0) return e;
    let n = "";
    return r.parentNode && (n += Bs(r.parentNode, !1)), n += e, n
}

function Ds(r) {
    if (!r.parentNode) return 0;
    const t = [r.nodeType];
    r.nodeType === Node.CDATA_SECTION_NODE && t.push(Node.TEXT_NODE);
    let e = Array.from(r.parentNode.childNodes);
    return e = e.filter(n => {
        const i = n.localName;
        return t.indexOf(n.nodeType) >= 0 && i === r.localName
    }), e.length >= 1 ? e.indexOf(r) + 1 : 0
}

function Us(r, t) {
    const e = r.nodeType,
        n = Ds(r);
    let i = "";
    if (e === Node.ELEMENT_NODE) {
        const s = r.getAttribute("id");
        if (t && s) return `//*[@id="${s}"]`;
        i = r.localName
    } else if (e === Node.TEXT_NODE || e === Node.CDATA_SECTION_NODE) i = "text()";
    else if (e === Node.COMMENT_NODE) i = "comment()";
    else return "";
    return i && n > 1 ? `/${i}[${n}]` : `/${i}`
}

function Ao(r, t) {
    let e = t || [];
    return (typeof e == "string" || e instanceof RegExp) && (e = [e]), vr(r).origin === wr() ? !0 : e.some(i => yr(r, i))
}
var Tt;
(function(r) {
    r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE"
})(Tt || (Tt = {}));
var _;
(function(r) {
    r.COUNTER = "COUNTER", r.GAUGE = "GAUGE", r.HISTOGRAM = "HISTOGRAM", r.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", r.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", r.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", r.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
})(_ || (_ = {}));
var H;
(function(r) {
    r[r.HISTOGRAM = 0] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", r[r.GAUGE = 2] = "GAUGE", r[r.SUM = 3] = "SUM"
})(H || (H = {}));

function Gs(r) {
    return r != null
}

function Mr(r) {
    let t = Object.keys(r);
    return t.length === 0 ? "" : (t = t.sort(), JSON.stringify(t.map(e => [e, r[e]])))
}

function ks(r) {
    return `${r.name}:${r.version??""}:${r.schemaUrl??""}`
}
class Ct extends Error {
    constructor(t) {
        super(t), Object.setPrototypeOf(this, Ct.prototype)
    }
}

function rt(r, t) {
    let e;
    const n = new Promise(function(s, o) {
        e = setTimeout(function() {
            o(new Ct("Operation timed out."))
        }, t)
    });
    return Promise.race([r, n]).then(i => (clearTimeout(e), i), i => {
        throw clearTimeout(e), i
    })
}
async function Vs(r) {
    return Promise.all(r.map(async t => {
        try {
            return {
                status: "fulfilled",
                value: await t
            }
        } catch (e) {
            return {
                status: "rejected",
                reason: e
            }
        }
    }))
}

function Fs(r) {
    return r.status === "rejected"
}

function $e(r, t) {
    const e = [];
    return r.forEach(n => {
        e.push(...t(n))
    }), e
}

function $s(r, t) {
    if (r.size !== t.size) return !1;
    for (const e of r)
        if (!t.has(e)) return !1;
    return !0
}

function zs(r, t) {
    let e = 0,
        n = r.length - 1,
        i = r.length;
    for (; n >= e;) {
        const s = e + Math.trunc((n - e) / 2);
        r[s] < t ? e = s + 1 : (i = s, n = s - 1)
    }
    return i
}

function js(r, t) {
    return r.toLowerCase() === t.toLowerCase()
}
var B;
(function(r) {
    r[r.DROP = 0] = "DROP", r[r.SUM = 1] = "SUM", r[r.LAST_VALUE = 2] = "LAST_VALUE", r[r.HISTOGRAM = 3] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM"
})(B || (B = {}));
class Hs {
    constructor() {
        a(this, "kind", B.DROP)
    }
    createAccumulation() {}
    merge(t, e) {}
    diff(t, e) {}
    toMetricData(t, e, n, i) {}
}

function Xs(r) {
    const t = r.map(() => 0);
    return t.push(0), {
        buckets: {
            boundaries: r,
            counts: t
        },
        sum: 0,
        count: 0,
        hasMinMax: !1,
        min: 1 / 0,
        max: -1 / 0
    }
}
class Ht {
    constructor(t, e, n = !0, i = Xs(e)) {
        a(this, "startTime");
        a(this, "_boundaries");
        a(this, "_recordMinMax");
        a(this, "_current");
        this.startTime = t, this._boundaries = e, this._recordMinMax = n, this._current = i
    }
    record(t) {
        if (Number.isNaN(t)) return;
        this._current.count += 1, this._current.sum += t, this._recordMinMax && (this._current.min = Math.min(t, this._current.min), this._current.max = Math.max(t, this._current.max), this._current.hasMinMax = !0);
        const e = zs(this._boundaries, t);
        this._current.buckets.counts[e] += 1
    }
    setStartTime(t) {
        this.startTime = t
    }
    toPointValue() {
        return this._current
    }
}
class Rr {
    constructor(t, e) {
        a(this, "_boundaries");
        a(this, "_recordMinMax");
        a(this, "kind", B.HISTOGRAM);
        this._boundaries = t, this._recordMinMax = e
    }
    createAccumulation(t) {
        return new Ht(t, this._boundaries, this._recordMinMax)
    }
    merge(t, e) {
        const n = t.toPointValue(),
            i = e.toPointValue(),
            s = n.buckets.counts,
            o = i.buckets.counts,
            c = new Array(s.length);
        for (let d = 0; d < s.length; d++) c[d] = s[d] + o[d];
        let u = 1 / 0,
            l = -1 / 0;
        return this._recordMinMax && (n.hasMinMax && i.hasMinMax ? (u = Math.min(n.min, i.min), l = Math.max(n.max, i.max)) : n.hasMinMax ? (u = n.min, l = n.max) : i.hasMinMax && (u = i.min, l = i.max)), new Ht(t.startTime, n.buckets.boundaries, this._recordMinMax, {
            buckets: {
                boundaries: n.buckets.boundaries,
                counts: c
            },
            count: n.count + i.count,
            sum: n.sum + i.sum,
            hasMinMax: this._recordMinMax && (n.hasMinMax || i.hasMinMax),
            min: u,
            max: l
        })
    }
    diff(t, e) {
        const n = t.toPointValue(),
            i = e.toPointValue(),
            s = n.buckets.counts,
            o = i.buckets.counts,
            c = new Array(s.length);
        for (let u = 0; u < s.length; u++) c[u] = o[u] - s[u];
        return new Ht(e.startTime, n.buckets.boundaries, this._recordMinMax, {
            buckets: {
                boundaries: n.buckets.boundaries,
                counts: c
            },
            count: i.count - n.count,
            sum: i.sum - n.sum,
            hasMinMax: !1,
            min: 1 / 0,
            max: -1 / 0
        })
    }
    toMetricData(t, e, n, i) {
        return {
            descriptor: t,
            aggregationTemporality: e,
            dataPointType: H.HISTOGRAM,
            dataPoints: n.map(([s, o]) => {
                const c = o.toPointValue(),
                    u = t.type === _.GAUGE || t.type === _.UP_DOWN_COUNTER || t.type === _.OBSERVABLE_GAUGE || t.type === _.OBSERVABLE_UP_DOWN_COUNTER;
                return {
                    attributes: s,
                    startTime: o.startTime,
                    endTime: i,
                    value: {
                        min: c.hasMinMax ? c.min : void 0,
                        max: c.hasMinMax ? c.max : void 0,
                        sum: u ? void 0 : c.sum,
                        buckets: c.buckets,
                        count: c.count
                    }
                }
            })
        }
    }
}
class bt {
    constructor(t = new be, e = 0, n = 0, i = 0) {
        a(this, "backing");
        a(this, "indexBase");
        a(this, "indexStart");
        a(this, "indexEnd");
        this.backing = t, this.indexBase = e, this.indexStart = n, this.indexEnd = i
    }
    get offset() {
        return this.indexStart
    }
    get length() {
        return this.backing.length === 0 || this.indexEnd === this.indexStart && this.at(0) === 0 ? 0 : this.indexEnd - this.indexStart + 1
    }
    counts() {
        return Array.from({
            length: this.length
        }, (t, e) => this.at(e))
    }
    at(t) {
        const e = this.indexBase - this.indexStart;
        return t < e && (t += this.backing.length), t -= e, this.backing.countAt(t)
    }
    incrementBucket(t, e) {
        this.backing.increment(t, e)
    }
    decrementBucket(t, e) {
        this.backing.decrement(t, e)
    }
    trim() {
        for (let t = 0; t < this.length; t++)
            if (this.at(t) !== 0) {
                this.indexStart += t;
                break
            } else if (t === this.length - 1) {
            this.indexStart = this.indexEnd = this.indexBase = 0;
            return
        }
        for (let t = this.length - 1; t >= 0; t--)
            if (this.at(t) !== 0) {
                this.indexEnd -= this.length - t - 1;
                break
            }
        this._rotate()
    }
    downscale(t) {
        this._rotate();
        const e = 1 + this.indexEnd - this.indexStart,
            n = 1 << t;
        let i = 0,
            s = 0;
        for (let o = this.indexStart; o <= this.indexEnd;) {
            let c = o % n;
            c < 0 && (c += n);
            for (let u = c; u < n && i < e; u++) this._relocateBucket(s, i), i++, o++;
            s++
        }
        this.indexStart >>= t, this.indexEnd >>= t, this.indexBase = this.indexStart
    }
    clone() {
        return new bt(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd)
    }
    _rotate() {
        const t = this.indexBase - this.indexStart;
        t !== 0 && (t > 0 ? (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, t), this.backing.reverse(t, this.backing.length)) : (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + t)), this.indexBase = this.indexStart)
    }
    _relocateBucket(t, e) {
        t !== e && this.incrementBucket(t, this.backing.emptyBucket(e))
    }
}
class be {
    constructor(t = [0]) {
        a(this, "_counts");
        this._counts = t
    }
    get length() {
        return this._counts.length
    }
    countAt(t) {
        return this._counts[t]
    }
    growTo(t, e, n) {
        const i = new Array(t).fill(0);
        i.splice(n, this._counts.length - e, ...this._counts.slice(e)), i.splice(0, e, ...this._counts.slice(0, e)), this._counts = i
    }
    reverse(t, e) {
        const n = Math.floor((t + e) / 2) - t;
        for (let i = 0; i < n; i++) {
            const s = this._counts[t + i];
            this._counts[t + i] = this._counts[e - i - 1], this._counts[e - i - 1] = s
        }
    }
    emptyBucket(t) {
        const e = this._counts[t];
        return this._counts[t] = 0, e
    }
    increment(t, e) {
        this._counts[t] += e
    }
    decrement(t, e) {
        this._counts[t] >= e ? this._counts[t] -= e : this._counts[t] = 0
    }
    clone() {
        return new be([...this._counts])
    }
}
const Ws = 52,
    Ys = 2146435072,
    Qs = 1048575,
    Ae = 1023,
    Cr = -Ae + 1,
    xr = Ae,
    re = Math.pow(2, -1022);

function Or(r) {
    const t = new DataView(new ArrayBuffer(8));
    return t.setFloat64(0, r), ((t.getUint32(0) & Ys) >> 20) - Ae
}

function Nr(r) {
    const t = new DataView(new ArrayBuffer(8));
    t.setFloat64(0, r);
    const e = t.getUint32(0),
        n = t.getUint32(4);
    return (e & Qs) * Math.pow(2, 32) + n
}

function ne(r, t) {
    return r === 0 || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY || Number.isNaN(r) ? r : r * Math.pow(2, t)
}

function Ks(r) {
    return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r
}
class nt extends Error {}
class qs {
    constructor(t) {
        a(this, "_shift");
        this._shift = -t
    }
    mapToIndex(t) {
        if (t < re) return this._minNormalLowerBoundaryIndex();
        const e = Or(t),
            n = this._rightShift(Nr(t) - 1, Ws);
        return e + n >> this._shift
    }
    lowerBoundary(t) {
        const e = this._minNormalLowerBoundaryIndex();
        if (t < e) throw new nt(`underflow: ${t} is < minimum lower boundary: ${e}`);
        const n = this._maxNormalLowerBoundaryIndex();
        if (t > n) throw new nt(`overflow: ${t} is > maximum lower boundary: ${n}`);
        return ne(1, t << this._shift)
    }
    get scale() {
        return this._shift === 0 ? 0 : -this._shift
    }
    _minNormalLowerBoundaryIndex() {
        let t = Cr >> this._shift;
        return this._shift < 2 && t--, t
    }
    _maxNormalLowerBoundaryIndex() {
        return xr >> this._shift
    }
    _rightShift(t, e) {
        return Math.floor(t * Math.pow(2, -e))
    }
}
class Js {
    constructor(t) {
        a(this, "_scale");
        a(this, "_scaleFactor");
        a(this, "_inverseFactor");
        this._scale = t, this._scaleFactor = ne(Math.LOG2E, t), this._inverseFactor = ne(Math.LN2, -t)
    }
    mapToIndex(t) {
        if (t <= re) return this._minNormalLowerBoundaryIndex() - 1;
        if (Nr(t) === 0) return (Or(t) << this._scale) - 1;
        const e = Math.floor(Math.log(t) * this._scaleFactor),
            n = this._maxNormalLowerBoundaryIndex();
        return e >= n ? n : e
    }
    lowerBoundary(t) {
        const e = this._maxNormalLowerBoundaryIndex();
        if (t >= e) {
            if (t === e) return 2 * Math.exp((t - (1 << this._scale)) / this._scaleFactor);
            throw new nt(`overflow: ${t} is > maximum lower boundary: ${e}`)
        }
        const n = this._minNormalLowerBoundaryIndex();
        if (t <= n) {
            if (t === n) return re;
            if (t === n - 1) return Math.exp((t + (1 << this._scale)) / this._scaleFactor) / 2;
            throw new nt(`overflow: ${t} is < minimum lower boundary: ${n}`)
        }
        return Math.exp(t * this._inverseFactor)
    }
    get scale() {
        return this._scale
    }
    _minNormalLowerBoundaryIndex() {
        return Cr << this._scale
    }
    _maxNormalLowerBoundaryIndex() {
        return (xr + 1 << this._scale) - 1
    }
}
const ze = -10,
    je = 20,
    Zs = Array.from({
        length: 31
    }, (r, t) => t > 10 ? new Js(t - 10) : new qs(t - 10));

function He(r) {
    if (r > je || r < ze) throw new nt(`expected scale >= ${ze} && <= ${je}, got: ${r}`);
    return Zs[r + 10]
}
class G {
    constructor(t, e) {
        a(this, "low");
        a(this, "high");
        this.low = t, this.high = e
    }
    static combine(t, e) {
        return new G(Math.min(t.low, e.low), Math.max(t.high, e.high))
    }
}
const ta = 20,
    ea = 160,
    Xt = 2;
class we {
    constructor(t = t, e = ea, n = !0, i = 0, s = 0, o = 0, c = Number.POSITIVE_INFINITY, u = Number.NEGATIVE_INFINITY, l = new bt, d = new bt, f = He(ta)) {
        a(this, "startTime");
        a(this, "_maxSize");
        a(this, "_recordMinMax");
        a(this, "_sum");
        a(this, "_count");
        a(this, "_zeroCount");
        a(this, "_min");
        a(this, "_max");
        a(this, "_positive");
        a(this, "_negative");
        a(this, "_mapping");
        this.startTime = t, this._maxSize = e, this._recordMinMax = n, this._sum = i, this._count = s, this._zeroCount = o, this._min = c, this._max = u, this._positive = l, this._negative = d, this._mapping = f, this._maxSize < Xt && (h.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Xt}`), this._maxSize = Xt)
    }
    record(t) {
        this.updateByIncrement(t, 1)
    }
    setStartTime(t) {
        this.startTime = t
    }
    toPointValue() {
        return {
            hasMinMax: this._recordMinMax,
            min: this.min,
            max: this.max,
            sum: this.sum,
            positive: {
                offset: this.positive.offset,
                bucketCounts: this.positive.counts()
            },
            negative: {
                offset: this.negative.offset,
                bucketCounts: this.negative.counts()
            },
            count: this.count,
            scale: this.scale,
            zeroCount: this.zeroCount
        }
    }
    get sum() {
        return this._sum
    }
    get min() {
        return this._min
    }
    get max() {
        return this._max
    }
    get count() {
        return this._count
    }
    get zeroCount() {
        return this._zeroCount
    }
    get scale() {
        return this._count === this._zeroCount ? 0 : this._mapping.scale
    }
    get positive() {
        return this._positive
    }
    get negative() {
        return this._negative
    }
    updateByIncrement(t, e) {
        if (!Number.isNaN(t)) {
            if (t > this._max && (this._max = t), t < this._min && (this._min = t), this._count += e, t === 0) {
                this._zeroCount += e;
                return
            }
            this._sum += t * e, t > 0 ? this._updateBuckets(this._positive, t, e) : this._updateBuckets(this._negative, -t, e)
        }
    }
    merge(t) {
        this._count === 0 ? (this._min = t.min, this._max = t.max) : t.count !== 0 && (t.min < this.min && (this._min = t.min), t.max > this.max && (this._max = t.max)), this.startTime = t.startTime, this._sum += t.sum, this._count += t.count, this._zeroCount += t.zeroCount;
        const e = this._minScale(t);
        this._downscale(this.scale - e), this._mergeBuckets(this.positive, t, t.positive, e), this._mergeBuckets(this.negative, t, t.negative, e)
    }
    diff(t) {
        this._min = 1 / 0, this._max = -1 / 0, this._sum -= t.sum, this._count -= t.count, this._zeroCount -= t.zeroCount;
        const e = this._minScale(t);
        this._downscale(this.scale - e), this._diffBuckets(this.positive, t, t.positive, e), this._diffBuckets(this.negative, t, t.negative, e)
    }
    clone() {
        return new we(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping)
    }
    _updateBuckets(t, e, n) {
        let i = this._mapping.mapToIndex(e),
            s = !1,
            o = 0,
            c = 0;
        if (t.length === 0 ? (t.indexStart = i, t.indexEnd = t.indexStart, t.indexBase = t.indexStart) : i < t.indexStart && t.indexEnd - i >= this._maxSize ? (s = !0, c = i, o = t.indexEnd) : i > t.indexEnd && i - t.indexStart >= this._maxSize && (s = !0, c = t.indexStart, o = i), s) {
            const u = this._changeScale(o, c);
            this._downscale(u), i = this._mapping.mapToIndex(e)
        }
        this._incrementIndexBy(t, i, n)
    }
    _incrementIndexBy(t, e, n) {
        if (n === 0) return;
        if (t.length === 0 && (t.indexStart = t.indexEnd = t.indexBase = e), e < t.indexStart) {
            const s = t.indexEnd - e;
            s >= t.backing.length && this._grow(t, s + 1), t.indexStart = e
        } else if (e > t.indexEnd) {
            const s = e - t.indexStart;
            s >= t.backing.length && this._grow(t, s + 1), t.indexEnd = e
        }
        let i = e - t.indexBase;
        i < 0 && (i += t.backing.length), t.incrementBucket(i, n)
    }
    _grow(t, e) {
        const n = t.backing.length,
            i = t.indexBase - t.indexStart,
            s = n - i;
        let o = Ks(e);
        o > this._maxSize && (o = this._maxSize);
        const c = o - i;
        t.backing.growTo(o, s, c)
    }
    _changeScale(t, e) {
        let n = 0;
        for (; t - e >= this._maxSize;) t >>= 1, e >>= 1, n++;
        return n
    }
    _downscale(t) {
        if (t === 0) return;
        if (t < 0) throw new Error(`impossible change of scale: ${this.scale}`);
        const e = this._mapping.scale - t;
        this._positive.downscale(t), this._negative.downscale(t), this._mapping = He(e)
    }
    _minScale(t) {
        const e = Math.min(this.scale, t.scale),
            n = G.combine(this._highLowAtScale(this.positive, this.scale, e), this._highLowAtScale(t.positive, t.scale, e)),
            i = G.combine(this._highLowAtScale(this.negative, this.scale, e), this._highLowAtScale(t.negative, t.scale, e));
        return Math.min(e - this._changeScale(n.high, n.low), e - this._changeScale(i.high, i.low))
    }
    _highLowAtScale(t, e, n) {
        if (t.length === 0) return new G(0, -1);
        const i = e - n;
        return new G(t.indexStart >> i, t.indexEnd >> i)
    }
    _mergeBuckets(t, e, n, i) {
        const s = n.offset,
            o = e.scale - i;
        for (let c = 0; c < n.length; c++) this._incrementIndexBy(t, s + c >> o, n.at(c))
    }
    _diffBuckets(t, e, n, i) {
        const s = n.offset,
            o = e.scale - i;
        for (let c = 0; c < n.length; c++) {
            let l = (s + c >> o) - t.indexBase;
            l < 0 && (l += t.backing.length), t.decrementBucket(l, n.at(c))
        }
        t.trim()
    }
}
class ra {
    constructor(t, e) {
        a(this, "_maxSize");
        a(this, "_recordMinMax");
        a(this, "kind", B.EXPONENTIAL_HISTOGRAM);
        this._maxSize = t, this._recordMinMax = e
    }
    createAccumulation(t) {
        return new we(t, this._maxSize, this._recordMinMax)
    }
    merge(t, e) {
        const n = e.clone();
        return n.merge(t), n
    }
    diff(t, e) {
        const n = e.clone();
        return n.diff(t), n
    }
    toMetricData(t, e, n, i) {
        return {
            descriptor: t,
            aggregationTemporality: e,
            dataPointType: H.EXPONENTIAL_HISTOGRAM,
            dataPoints: n.map(([s, o]) => {
                const c = o.toPointValue(),
                    u = t.type === _.GAUGE || t.type === _.UP_DOWN_COUNTER || t.type === _.OBSERVABLE_GAUGE || t.type === _.OBSERVABLE_UP_DOWN_COUNTER;
                return {
                    attributes: s,
                    startTime: o.startTime,
                    endTime: i,
                    value: {
                        min: c.hasMinMax ? c.min : void 0,
                        max: c.hasMinMax ? c.max : void 0,
                        sum: u ? void 0 : c.sum,
                        positive: {
                            offset: c.positive.offset,
                            bucketCounts: c.positive.bucketCounts
                        },
                        negative: {
                            offset: c.negative.offset,
                            bucketCounts: c.negative.bucketCounts
                        },
                        count: c.count,
                        scale: c.scale,
                        zeroCount: c.zeroCount
                    }
                }
            })
        }
    }
}
class Wt {
    constructor(t, e = 0, n = [0, 0]) {
        a(this, "startTime");
        a(this, "_current");
        a(this, "sampleTime");
        this.startTime = t, this._current = e, this.sampleTime = n
    }
    record(t) {
        this._current = t, this.sampleTime = T(Date.now())
    }
    setStartTime(t) {
        this.startTime = t
    }
    toPointValue() {
        return this._current
    }
}
class na {
    constructor() {
        a(this, "kind", B.LAST_VALUE)
    }
    createAccumulation(t) {
        return new Wt(t)
    }
    merge(t, e) {
        const n = ut(e.sampleTime) >= ut(t.sampleTime) ? e : t;
        return new Wt(t.startTime, n.toPointValue(), n.sampleTime)
    }
    diff(t, e) {
        const n = ut(e.sampleTime) >= ut(t.sampleTime) ? e : t;
        return new Wt(e.startTime, n.toPointValue(), n.sampleTime)
    }
    toMetricData(t, e, n, i) {
        return {
            descriptor: t,
            aggregationTemporality: e,
            dataPointType: H.GAUGE,
            dataPoints: n.map(([s, o]) => ({
                attributes: s,
                startTime: o.startTime,
                endTime: i,
                value: o.toPointValue()
            }))
        }
    }
}
class Q {
    constructor(t, e, n = 0, i = !1) {
        a(this, "startTime");
        a(this, "monotonic");
        a(this, "_current");
        a(this, "reset");
        this.startTime = t, this.monotonic = e, this._current = n, this.reset = i
    }
    record(t) {
        this.monotonic && t < 0 || (this._current += t)
    }
    setStartTime(t) {
        this.startTime = t
    }
    toPointValue() {
        return this._current
    }
}
class Xe {
    constructor(t) {
        a(this, "monotonic");
        a(this, "kind", B.SUM);
        this.monotonic = t
    }
    createAccumulation(t) {
        return new Q(t, this.monotonic)
    }
    merge(t, e) {
        const n = t.toPointValue(),
            i = e.toPointValue();
        return e.reset ? new Q(e.startTime, this.monotonic, i, e.reset) : new Q(t.startTime, this.monotonic, n + i)
    }
    diff(t, e) {
        const n = t.toPointValue(),
            i = e.toPointValue();
        return this.monotonic && n > i ? new Q(e.startTime, this.monotonic, i, !0) : new Q(e.startTime, this.monotonic, i - n)
    }
    toMetricData(t, e, n, i) {
        return {
            descriptor: t,
            aggregationTemporality: e,
            dataPointType: H.SUM,
            dataPoints: n.map(([s, o]) => ({
                attributes: s,
                startTime: o.startTime,
                endTime: i,
                value: o.toPointValue()
            })),
            isMonotonic: this.monotonic
        }
    }
}
const At = class At {
    createAggregator(t) {
        return At.DEFAULT_INSTANCE
    }
};
a(At, "DEFAULT_INSTANCE", new Hs);
let ie = At;
const k = class k {
    createAggregator(t) {
        switch (t.type) {
            case _.COUNTER:
            case _.OBSERVABLE_COUNTER:
            case _.HISTOGRAM:
                return k.MONOTONIC_INSTANCE;
            default:
                return k.NON_MONOTONIC_INSTANCE
        }
    }
};
a(k, "MONOTONIC_INSTANCE", new Xe(!0)), a(k, "NON_MONOTONIC_INSTANCE", new Xe(!1));
let se = k;
const wt = class wt {
    createAggregator(t) {
        return wt.DEFAULT_INSTANCE
    }
};
a(wt, "DEFAULT_INSTANCE", new na);
let ae = wt;
const vt = class vt {
    createAggregator(t) {
        return vt.DEFAULT_INSTANCE
    }
};
a(vt, "DEFAULT_INSTANCE", new Rr([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4], !0));
let oe = vt;
class Pr {
    constructor(t, e = !0) {
        a(this, "_recordMinMax");
        a(this, "_boundaries");
        if (this._recordMinMax = e, t == null) throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
        t = t.concat(), t = t.sort((s, o) => s - o);
        const n = t.lastIndexOf(-1 / 0);
        let i = t.indexOf(1 / 0);
        i === -1 && (i = void 0), this._boundaries = t.slice(n + 1, i)
    }
    createAggregator(t) {
        return new Rr(this._boundaries, this._recordMinMax)
    }
}
class ia {
    constructor(t = 160, e = !0) {
        a(this, "_maxSize");
        a(this, "_recordMinMax");
        this._maxSize = t, this._recordMinMax = e
    }
    createAggregator(t) {
        return new ra(this._maxSize, this._recordMinMax)
    }
}
class sa {
    _resolve(t) {
        switch (t.type) {
            case _.COUNTER:
            case _.UP_DOWN_COUNTER:
            case _.OBSERVABLE_COUNTER:
            case _.OBSERVABLE_UP_DOWN_COUNTER:
                return Lr;
            case _.GAUGE:
            case _.OBSERVABLE_GAUGE:
                return Br;
            case _.HISTOGRAM:
                return t.advice.explicitBucketBoundaries ? new Pr(t.advice.explicitBucketBoundaries) : Dr
        }
        return h.warn(`Unable to recognize instrument type: ${t.type}`), Ir
    }
    createAggregator(t) {
        return this._resolve(t).createAggregator(t)
    }
}
const Ir = new ie,
    Lr = new se,
    Br = new ae,
    Dr = new oe,
    aa = new sa;
var A;
(function(r) {
    r[r.DEFAULT = 0] = "DEFAULT", r[r.DROP = 1] = "DROP", r[r.SUM = 2] = "SUM", r[r.LAST_VALUE = 3] = "LAST_VALUE", r[r.EXPLICIT_BUCKET_HISTOGRAM = 4] = "EXPLICIT_BUCKET_HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 5] = "EXPONENTIAL_HISTOGRAM"
})(A || (A = {}));

function Ur(r) {
    var t, e, n, i;
    switch (r.type) {
        case A.DEFAULT:
            return aa;
        case A.DROP:
            return Ir;
        case A.SUM:
            return Lr;
        case A.LAST_VALUE:
            return Br;
        case A.EXPONENTIAL_HISTOGRAM:
            {
                const s = r;
                return new ia((t = s.options) == null ? void 0 : t.maxSize, (e = s.options) == null ? void 0 : e.recordMinMax)
            }
        case A.EXPLICIT_BUCKET_HISTOGRAM:
            {
                const s = r;
                return s.options == null ? Dr : new Pr((n = s.options) == null ? void 0 : n.boundaries, (i = s.options) == null ? void 0 : i.recordMinMax)
            }
        default:
            throw new Error("Unsupported Aggregation")
    }
}
const oa = r => ({
        type: A.DEFAULT
    }),
    ca = r => Tt.CUMULATIVE;
class ua {
    constructor(t) {
        a(this, "_shutdown", !1);
        a(this, "_metricProducers");
        a(this, "_sdkMetricProducer");
        a(this, "_aggregationTemporalitySelector");
        a(this, "_aggregationSelector");
        a(this, "_cardinalitySelector");
        this._aggregationSelector = (t == null ? void 0 : t.aggregationSelector) ? ? oa, this._aggregationTemporalitySelector = (t == null ? void 0 : t.aggregationTemporalitySelector) ? ? ca, this._metricProducers = (t == null ? void 0 : t.metricProducers) ? ? [], this._cardinalitySelector = t == null ? void 0 : t.cardinalitySelector
    }
    setMetricProducer(t) {
        if (this._sdkMetricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
        this._sdkMetricProducer = t, this.onInitialized()
    }
    selectAggregation(t) {
        return this._aggregationSelector(t)
    }
    selectAggregationTemporality(t) {
        return this._aggregationTemporalitySelector(t)
    }
    selectCardinalityLimit(t) {
        return this._cardinalitySelector ? this._cardinalitySelector(t) : 2e3
    }
    onInitialized() {}
    async collect(t) {
        if (this._sdkMetricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
        if (this._shutdown) throw new Error("MetricReader is shutdown");
        const [e, ...n] = await Promise.all([this._sdkMetricProducer.collect({
            timeoutMillis: t == null ? void 0 : t.timeoutMillis
        }), ...this._metricProducers.map(c => c.collect({
            timeoutMillis: t == null ? void 0 : t.timeoutMillis
        }))]), i = e.errors.concat($e(n, c => c.errors)), s = e.resourceMetrics.resource, o = e.resourceMetrics.scopeMetrics.concat($e(n, c => c.resourceMetrics.scopeMetrics));
        return {
            resourceMetrics: {
                resource: s,
                scopeMetrics: o
            },
            errors: i
        }
    }
    async shutdown(t) {
        if (this._shutdown) {
            h.error("Cannot call shutdown twice.");
            return
        }(t == null ? void 0 : t.timeoutMillis) == null ? await this.onShutdown() : await rt(this.onShutdown(), t.timeoutMillis), this._shutdown = !0
    }
    async forceFlush(t) {
        if (this._shutdown) {
            h.warn("Cannot forceFlush on already shutdown MetricReader.");
            return
        }
        if ((t == null ? void 0 : t.timeoutMillis) == null) {
            await this.onForceFlush();
            return
        }
        await rt(this.onForceFlush(), t.timeoutMillis)
    }
}
class wo extends ua {
    constructor(e) {
        var n, i;
        super({
            aggregationSelector: (n = e.exporter.selectAggregation) == null ? void 0 : n.bind(e.exporter),
            aggregationTemporalitySelector: (i = e.exporter.selectAggregationTemporality) == null ? void 0 : i.bind(e.exporter),
            metricProducers: e.metricProducers
        });
        a(this, "_interval");
        a(this, "_exporter");
        a(this, "_exportInterval");
        a(this, "_exportTimeout");
        if (e.exportIntervalMillis !== void 0 && e.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
        if (e.exportTimeoutMillis !== void 0 && e.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
        if (e.exportTimeoutMillis !== void 0 && e.exportIntervalMillis !== void 0 && e.exportIntervalMillis < e.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
        this._exportInterval = e.exportIntervalMillis ? ? 6e4, this._exportTimeout = e.exportTimeoutMillis ? ? 3e4, this._exporter = e.exporter
    }
    async _runOnce() {
        try {
            await rt(this._doRun(), this._exportTimeout)
        } catch (e) {
            if (e instanceof Ct) {
                h.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
                return
            }
            S(e)
        }
    }
    async _doRun() {
        var s, o;
        const {
            resourceMetrics: e,
            errors: n
        } = await this.collect({
            timeoutMillis: this._exportTimeout
        });
        if (n.length > 0 && h.error("PeriodicExportingMetricReader: metrics collection errors", ...n), e.resource.asyncAttributesPending) try {
            await ((o = (s = e.resource).waitForAsyncAttributes) == null ? void 0 : o.call(s))
        } catch (c) {
            h.debug("Error while resolving async portion of resource: ", c), S(c)
        }
        if (e.scopeMetrics.length === 0) return;
        const i = await Tr._export(this._exporter, e);
        if (i.code !== et.SUCCESS) throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${i.error})`)
    }
    onInitialized() {
        this._interval = setInterval(() => {
            this._runOnce()
        }, this._exportInterval), this._interval
    }
    async onForceFlush() {
        await this._runOnce(), await this._exporter.forceFlush()
    }
    async onShutdown() {
        this._interval && clearInterval(this._interval), await this.onForceFlush(), await this._exporter.shutdown()
    }
}
class la {
    constructor() {
        a(this, "_registeredViews", [])
    }
    addView(t) {
        this._registeredViews.push(t)
    }
    findViews(t, e) {
        return this._registeredViews.filter(i => this._matchInstrument(i.instrumentSelector, t) && this._matchMeter(i.meterSelector, e))
    }
    _matchInstrument(t, e) {
        return (t.getType() === void 0 || e.type === t.getType()) && t.getNameFilter().match(e.name) && t.getUnitFilter().match(e.unit)
    }
    _matchMeter(t, e) {
        return t.getNameFilter().match(e.name) && (e.version === void 0 || t.getVersionFilter().match(e.version)) && (e.schemaUrl === void 0 || t.getSchemaUrlFilter().match(e.schemaUrl))
    }
}

function R(r, t, e) {
    return fa(r) || h.warn(`Invalid metric name: "${r}". The metric name should be a ASCII string with a length no greater than 255 characters.`), {
        name: r,
        type: t,
        description: (e == null ? void 0 : e.description) ? ? "",
        unit: (e == null ? void 0 : e.unit) ? ? "",
        valueType: (e == null ? void 0 : e.valueType) ? ? z.DOUBLE,
        advice: (e == null ? void 0 : e.advice) ? ? {}
    }
}

function ha(r, t) {
    return {
        name: r.name ? ? t.name,
        description: r.description ? ? t.description,
        type: t.type,
        unit: t.unit,
        valueType: t.valueType,
        advice: t.advice
    }
}

function da(r, t) {
    return js(r.name, t.name) && r.unit === t.unit && r.type === t.type && r.valueType === t.valueType
}
const _a = /^[a-z][a-z0-9_.\-/]{0,254}$/i;

function fa(r) {
    return r.match(_a) != null
}
class xt {
    constructor(t, e) {
        a(this, "_writableMetricStorage");
        a(this, "_descriptor");
        this._writableMetricStorage = t, this._descriptor = e
    }
    _record(t, e = {}, n = b.active()) {
        if (typeof t != "number") {
            h.warn(`non-number value provided to metric ${this._descriptor.name}: ${t}`);
            return
        }
        this._descriptor.valueType === z.INT && !Number.isInteger(t) && (h.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), t = Math.trunc(t), !Number.isInteger(t)) || this._writableMetricStorage.record(t, e, n, T(Date.now()))
    }
}
class ma extends xt {
    add(t, e, n) {
        this._record(t, e, n)
    }
}
class ga extends xt {
    add(t, e, n) {
        if (t < 0) {
            h.warn(`negative value provided to counter ${this._descriptor.name}: ${t}`);
            return
        }
        this._record(t, e, n)
    }
}
class pa extends xt {
    record(t, e, n) {
        this._record(t, e, n)
    }
}
class Sa extends xt {
    record(t, e, n) {
        if (t < 0) {
            h.warn(`negative value provided to histogram ${this._descriptor.name}: ${t}`);
            return
        }
        this._record(t, e, n)
    }
}
class Ot {
    constructor(t, e, n) {
        a(this, "_observableRegistry");
        a(this, "_metricStorages");
        a(this, "_descriptor");
        this._observableRegistry = n, this._descriptor = t, this._metricStorages = e
    }
    addCallback(t) {
        this._observableRegistry.addCallback(t, this)
    }
    removeCallback(t) {
        this._observableRegistry.removeCallback(t, this)
    }
}
class Ea extends Ot {}
class ya extends Ot {}
class Ta extends Ot {}

function ce(r) {
    return r instanceof Ot
}
class ba {
    constructor(t) {
        a(this, "_meterSharedState");
        this._meterSharedState = t
    }
    createGauge(t, e) {
        const n = R(t, _.GAUGE, e),
            i = this._meterSharedState.registerMetricStorage(n);
        return new pa(i, n)
    }
    createHistogram(t, e) {
        const n = R(t, _.HISTOGRAM, e),
            i = this._meterSharedState.registerMetricStorage(n);
        return new Sa(i, n)
    }
    createCounter(t, e) {
        const n = R(t, _.COUNTER, e),
            i = this._meterSharedState.registerMetricStorage(n);
        return new ga(i, n)
    }
    createUpDownCounter(t, e) {
        const n = R(t, _.UP_DOWN_COUNTER, e),
            i = this._meterSharedState.registerMetricStorage(n);
        return new ma(i, n)
    }
    createObservableGauge(t, e) {
        const n = R(t, _.OBSERVABLE_GAUGE, e),
            i = this._meterSharedState.registerAsyncMetricStorage(n);
        return new ya(n, i, this._meterSharedState.observableRegistry)
    }
    createObservableCounter(t, e) {
        const n = R(t, _.OBSERVABLE_COUNTER, e),
            i = this._meterSharedState.registerAsyncMetricStorage(n);
        return new Ea(n, i, this._meterSharedState.observableRegistry)
    }
    createObservableUpDownCounter(t, e) {
        const n = R(t, _.OBSERVABLE_UP_DOWN_COUNTER, e),
            i = this._meterSharedState.registerAsyncMetricStorage(n);
        return new Ta(n, i, this._meterSharedState.observableRegistry)
    }
    addBatchObservableCallback(t, e) {
        this._meterSharedState.observableRegistry.addBatchCallback(t, e)
    }
    removeBatchObservableCallback(t, e) {
        this._meterSharedState.observableRegistry.removeBatchCallback(t, e)
    }
}
class Gr {
    constructor(t) {
        a(this, "_instrumentDescriptor");
        this._instrumentDescriptor = t
    }
    getInstrumentDescriptor() {
        return this._instrumentDescriptor
    }
    updateDescription(t) {
        this._instrumentDescriptor = R(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
            description: t,
            valueType: this._instrumentDescriptor.valueType,
            unit: this._instrumentDescriptor.unit,
            advice: this._instrumentDescriptor.advice
        })
    }
}
class Aa {
    constructor(t) {
        a(this, "_hash");
        a(this, "_valueMap", new Map);
        a(this, "_keyMap", new Map);
        this._hash = t
    }
    get(t, e) {
        return e ? ? (e = this._hash(t)), this._valueMap.get(e)
    }
    getOrDefault(t, e) {
        const n = this._hash(t);
        if (this._valueMap.has(n)) return this._valueMap.get(n);
        const i = e();
        return this._keyMap.has(n) || this._keyMap.set(n, t), this._valueMap.set(n, i), i
    }
    set(t, e, n) {
        n ? ? (n = this._hash(t)), this._keyMap.has(n) || this._keyMap.set(n, t), this._valueMap.set(n, e)
    }
    has(t, e) {
        return e ? ? (e = this._hash(t)), this._valueMap.has(e)
    }* keys() {
        const t = this._keyMap.entries();
        let e = t.next();
        for (; e.done !== !0;) yield [e.value[1], e.value[0]], e = t.next()
    }* entries() {
        const t = this._valueMap.entries();
        let e = t.next();
        for (; e.done !== !0;) yield [this._keyMap.get(e.value[0]), e.value[1], e.value[0]], e = t.next()
    }
    get size() {
        return this._valueMap.size
    }
}
class I extends Aa {
    constructor() {
        super(Mr)
    }
}
class kr {
    constructor(t, e) {
        a(this, "_aggregator");
        a(this, "_activeCollectionStorage", new I);
        a(this, "_cumulativeMemoStorage", new I);
        a(this, "_cardinalityLimit");
        a(this, "_overflowAttributes", {
            "otel.metric.overflow": !0
        });
        a(this, "_overflowHashCode");
        this._aggregator = t, this._cardinalityLimit = (e ? ? 2e3) - 1, this._overflowHashCode = Mr(this._overflowAttributes)
    }
    record(t, e, n, i) {
        let s = this._activeCollectionStorage.get(e);
        if (!s) {
            if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
                const o = this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(i));
                o == null || o.record(t);
                return
            }
            s = this._aggregator.createAccumulation(i), this._activeCollectionStorage.set(e, s)
        }
        s == null || s.record(t)
    }
    batchCumulate(t, e) {
        Array.from(t.entries()).forEach(([n, i, s]) => {
            const o = this._aggregator.createAccumulation(e);
            o == null || o.record(i);
            let c = o;
            if (this._cumulativeMemoStorage.has(n, s)) {
                const u = this._cumulativeMemoStorage.get(n, s);
                c = this._aggregator.diff(u, o)
            } else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit && (n = this._overflowAttributes, s = this._overflowHashCode, this._cumulativeMemoStorage.has(n, s))) {
                const u = this._cumulativeMemoStorage.get(n, s);
                c = this._aggregator.diff(u, o)
            }
            if (this._activeCollectionStorage.has(n, s)) {
                const u = this._activeCollectionStorage.get(n, s);
                c = this._aggregator.merge(u, c)
            }
            this._cumulativeMemoStorage.set(n, o, s), this._activeCollectionStorage.set(n, c, s)
        })
    }
    collect() {
        const t = this._activeCollectionStorage;
        return this._activeCollectionStorage = new I, t
    }
}
class $ {
    constructor(t, e) {
        a(this, "_aggregator");
        a(this, "_unreportedAccumulations", new Map);
        a(this, "_reportHistory", new Map);
        this._aggregator = t, e.forEach(n => {
            this._unreportedAccumulations.set(n, [])
        })
    }
    buildMetrics(t, e, n, i) {
        this._stashAccumulations(n);
        const s = this._getMergedUnreportedAccumulations(t);
        let o = s,
            c;
        if (this._reportHistory.has(t)) {
            const l = this._reportHistory.get(t),
                d = l.collectionTime;
            c = l.aggregationTemporality, c === Tt.CUMULATIVE ? o = $.merge(l.accumulations, s, this._aggregator) : o = $.calibrateStartTime(l.accumulations, s, d)
        } else c = t.selectAggregationTemporality(e.type);
        this._reportHistory.set(t, {
            accumulations: o,
            collectionTime: i,
            aggregationTemporality: c
        });
        const u = wa(o);
        if (u.length !== 0) return this._aggregator.toMetricData(e, c, u, i)
    }
    _stashAccumulations(t) {
        const e = this._unreportedAccumulations.keys();
        for (const n of e) {
            let i = this._unreportedAccumulations.get(n);
            i === void 0 && (i = [], this._unreportedAccumulations.set(n, i)), i.push(t)
        }
    }
    _getMergedUnreportedAccumulations(t) {
        let e = new I;
        const n = this._unreportedAccumulations.get(t);
        if (this._unreportedAccumulations.set(t, []), n === void 0) return e;
        for (const i of n) e = $.merge(e, i, this._aggregator);
        return e
    }
    static merge(t, e, n) {
        const i = t,
            s = e.entries();
        let o = s.next();
        for (; o.done !== !0;) {
            const [c, u, l] = o.value;
            if (t.has(c, l)) {
                const d = t.get(c, l),
                    f = n.merge(d, u);
                i.set(c, f, l)
            } else i.set(c, u, l);
            o = s.next()
        }
        return i
    }
    static calibrateStartTime(t, e, n) {
        for (const [i, s] of t.keys()) {
            const o = e.get(i, s);
            o == null || o.setStartTime(n)
        }
        return e
    }
}

function wa(r) {
    return Array.from(r.entries())
}
class va extends Gr {
    constructor(e, n, i, s, o) {
        super(e);
        a(this, "_attributesProcessor");
        a(this, "_aggregationCardinalityLimit");
        a(this, "_deltaMetricStorage");
        a(this, "_temporalMetricStorage");
        this._attributesProcessor = i, this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new kr(n, this._aggregationCardinalityLimit), this._temporalMetricStorage = new $(n, s)
    }
    record(e, n) {
        const i = new I;
        Array.from(e.entries()).forEach(([s, o]) => {
            i.set(this._attributesProcessor.process(s), o)
        }), this._deltaMetricStorage.batchCumulate(i, n)
    }
    collect(e, n) {
        const i = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, i, n)
    }
}

function We(r, t) {
    let e = "";
    return r.unit !== t.unit && (e += `	- Unit '${r.unit}' does not match '${t.unit}'
`), r.type !== t.type && (e += `	- Type '${r.type}' does not match '${t.type}'
`), r.valueType !== t.valueType && (e += `	- Value Type '${r.valueType}' does not match '${t.valueType}'
`), r.description !== t.description && (e += `	- Description '${r.description}' does not match '${t.description}'
`), e
}

function Ma(r, t) {
    return `	- use valueType '${r.valueType}' on instrument creation or use an instrument name other than '${t.name}'`
}

function Ra(r, t) {
    return `	- use unit '${r.unit}' on instrument creation or use an instrument name other than '${t.name}'`
}

function Ca(r, t) {
    const e = {
            name: t.name,
            type: t.type,
            unit: t.unit
        },
        n = JSON.stringify(e);
    return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'`
}

function xa(r, t) {
    const e = {
            name: t.name,
            type: t.type,
            unit: t.unit
        },
        n = JSON.stringify(e);
    return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'
    	- OR - create a new view with the name ${r.name} and description '${r.description}' and InstrumentSelector ${n}
    	- OR - create a new view with the name ${t.name} and description '${r.description}' and InstrumentSelector ${n}`
}

function Ye(r, t) {
    return r.valueType !== t.valueType ? Ma(r, t) : r.unit !== t.unit ? Ra(r, t) : r.type !== t.type ? Ca(r, t) : r.description !== t.description ? xa(r, t) : ""
}
class ve {
    constructor() {
        a(this, "_sharedRegistry", new Map);
        a(this, "_perCollectorRegistry", new Map)
    }
    static create() {
        return new ve
    }
    getStorages(t) {
        let e = [];
        for (const i of this._sharedRegistry.values()) e = e.concat(i);
        const n = this._perCollectorRegistry.get(t);
        if (n != null)
            for (const i of n.values()) e = e.concat(i);
        return e
    }
    register(t) {
        this._registerStorage(t, this._sharedRegistry)
    }
    registerForCollector(t, e) {
        let n = this._perCollectorRegistry.get(t);
        n == null && (n = new Map, this._perCollectorRegistry.set(t, n)), this._registerStorage(e, n)
    }
    findOrUpdateCompatibleStorage(t) {
        const e = this._sharedRegistry.get(t.name);
        return e === void 0 ? null : this._findOrUpdateCompatibleStorage(t, e)
    }
    findOrUpdateCompatibleCollectorStorage(t, e) {
        const n = this._perCollectorRegistry.get(t);
        if (n === void 0) return null;
        const i = n.get(e.name);
        return i === void 0 ? null : this._findOrUpdateCompatibleStorage(e, i)
    }
    _registerStorage(t, e) {
        const n = t.getInstrumentDescriptor(),
            i = e.get(n.name);
        if (i === void 0) {
            e.set(n.name, [t]);
            return
        }
        i.push(t)
    }
    _findOrUpdateCompatibleStorage(t, e) {
        let n = null;
        for (const i of e) {
            const s = i.getInstrumentDescriptor();
            da(s, t) ? (s.description !== t.description && (t.description.length > s.description.length && i.updateDescription(t.description), h.warn("A view or instrument with the name ", t.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, We(s, t), `The longer description will be used.
To resolve the conflict:`, Ye(s, t))), n = i) : h.warn("A view or instrument with the name ", t.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, We(s, t), `To resolve the conflict:
`, Ye(s, t))
        }
        return n
    }
}
class Oa {
    constructor(t) {
        a(this, "_backingStorages");
        this._backingStorages = t
    }
    record(t, e, n, i) {
        this._backingStorages.forEach(s => {
            s.record(t, e, n, i)
        })
    }
}
class Na {
    constructor(t, e) {
        a(this, "_instrumentName");
        a(this, "_valueType");
        a(this, "_buffer", new I);
        this._instrumentName = t, this._valueType = e
    }
    observe(t, e = {}) {
        if (typeof t != "number") {
            h.warn(`non-number value provided to metric ${this._instrumentName}: ${t}`);
            return
        }
        this._valueType === z.INT && !Number.isInteger(t) && (h.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), t = Math.trunc(t), !Number.isInteger(t)) || this._buffer.set(e, t)
    }
}
class Pa {
    constructor() {
        a(this, "_buffer", new Map)
    }
    observe(t, e, n = {}) {
        if (!ce(t)) return;
        let i = this._buffer.get(t);
        if (i == null && (i = new I, this._buffer.set(t, i)), typeof e != "number") {
            h.warn(`non-number value provided to metric ${t._descriptor.name}: ${e}`);
            return
        }
        t._descriptor.valueType === z.INT && !Number.isInteger(e) && (h.warn(`INT value type cannot accept a floating-point value for ${t._descriptor.name}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) || i.set(n, e)
    }
}
class Ia {
    constructor() {
        a(this, "_callbacks", []);
        a(this, "_batchCallbacks", [])
    }
    addCallback(t, e) {
        this._findCallback(t, e) >= 0 || this._callbacks.push({
            callback: t,
            instrument: e
        })
    }
    removeCallback(t, e) {
        const n = this._findCallback(t, e);
        n < 0 || this._callbacks.splice(n, 1)
    }
    addBatchCallback(t, e) {
        const n = new Set(e.filter(ce));
        if (n.size === 0) {
            h.error("BatchObservableCallback is not associated with valid instruments", e);
            return
        }
        this._findBatchCallback(t, n) >= 0 || this._batchCallbacks.push({
            callback: t,
            instruments: n
        })
    }
    removeBatchCallback(t, e) {
        const n = new Set(e.filter(ce)),
            i = this._findBatchCallback(t, n);
        i < 0 || this._batchCallbacks.splice(i, 1)
    }
    async observe(t, e) {
        const n = this._observeCallbacks(t, e),
            i = this._observeBatchCallbacks(t, e);
        return (await Vs([...n, ...i])).filter(Fs).map(c => c.reason)
    }
    _observeCallbacks(t, e) {
        return this._callbacks.map(async ({
            callback: n,
            instrument: i
        }) => {
            const s = new Na(i._descriptor.name, i._descriptor.valueType);
            let o = Promise.resolve(n(s));
            e != null && (o = rt(o, e)), await o, i._metricStorages.forEach(c => {
                c.record(s._buffer, t)
            })
        })
    }
    _observeBatchCallbacks(t, e) {
        return this._batchCallbacks.map(async ({
            callback: n,
            instruments: i
        }) => {
            const s = new Pa;
            let o = Promise.resolve(n(s));
            e != null && (o = rt(o, e)), await o, i.forEach(c => {
                const u = s._buffer.get(c);
                u != null && c._metricStorages.forEach(l => {
                    l.record(u, t)
                })
            })
        })
    }
    _findCallback(t, e) {
        return this._callbacks.findIndex(n => n.callback === t && n.instrument === e)
    }
    _findBatchCallback(t, e) {
        return this._batchCallbacks.findIndex(n => n.callback === t && $s(n.instruments, e))
    }
}
class La extends Gr {
    constructor(e, n, i, s, o) {
        super(e);
        a(this, "_attributesProcessor");
        a(this, "_aggregationCardinalityLimit");
        a(this, "_deltaMetricStorage");
        a(this, "_temporalMetricStorage");
        this._attributesProcessor = i, this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new kr(n, this._aggregationCardinalityLimit), this._temporalMetricStorage = new $(n, s)
    }
    record(e, n, i, s) {
        n = this._attributesProcessor.process(n, i), this._deltaMetricStorage.record(e, n, i, s)
    }
    collect(e, n) {
        const i = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, i, n)
    }
}
class Ba {
    process(t, e) {
        return t
    }
}
class Da {
    constructor(t) {
        a(this, "_processors");
        this._processors = t
    }
    process(t, e) {
        let n = t;
        for (const i of this._processors) n = i.process(n, e);
        return n
    }
}

function Vr() {
    return Ga
}

function Ua(r) {
    return new Da(r)
}
const Ga = new Ba;
class ka {
    constructor(t, e) {
        a(this, "_meterProviderSharedState");
        a(this, "_instrumentationScope");
        a(this, "metricStorageRegistry", new ve);
        a(this, "observableRegistry", new Ia);
        a(this, "meter");
        this._meterProviderSharedState = t, this._instrumentationScope = e, this.meter = new ba(this)
    }
    registerMetricStorage(t) {
        const e = this._registerMetricStorage(t, La);
        return e.length === 1 ? e[0] : new Oa(e)
    }
    registerAsyncMetricStorage(t) {
        return this._registerMetricStorage(t, va)
    }
    async collect(t, e, n) {
        const i = await this.observableRegistry.observe(e, n == null ? void 0 : n.timeoutMillis),
            s = this.metricStorageRegistry.getStorages(t);
        if (s.length === 0) return null;
        const o = s.map(c => c.collect(t, e)).filter(Gs);
        return o.length === 0 ? {
            errors: i
        } : {
            scopeMetrics: {
                scope: this._instrumentationScope,
                metrics: o
            },
            errors: i
        }
    }
    _registerMetricStorage(t, e) {
        let i = this._meterProviderSharedState.viewRegistry.findViews(t, this._instrumentationScope).map(s => {
            const o = ha(s, t),
                c = this.metricStorageRegistry.findOrUpdateCompatibleStorage(o);
            if (c != null) return c;
            const u = s.aggregation.createAggregator(o),
                l = new e(o, u, s.attributesProcessor, this._meterProviderSharedState.metricCollectors, s.aggregationCardinalityLimit);
            return this.metricStorageRegistry.register(l), l
        });
        if (i.length === 0) {
            const o = this._meterProviderSharedState.selectAggregations(t.type).map(([c, u]) => {
                const l = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(c, t);
                if (l != null) return l;
                const d = u.createAggregator(t),
                    f = c.selectCardinalityLimit(t.type),
                    g = new e(t, d, Vr(), [c], f);
                return this.metricStorageRegistry.registerForCollector(c, g), g
            });
            i = i.concat(o)
        }
        return i
    }
}
class Va {
    constructor(t) {
        a(this, "resource");
        a(this, "viewRegistry", new la);
        a(this, "metricCollectors", []);
        a(this, "meterSharedStates", new Map);
        this.resource = t
    }
    getMeterSharedState(t) {
        const e = ks(t);
        let n = this.meterSharedStates.get(e);
        return n == null && (n = new ka(this, t), this.meterSharedStates.set(e, n)), n
    }
    selectAggregations(t) {
        const e = [];
        for (const n of this.metricCollectors) e.push([n, Ur(n.selectAggregation(t))]);
        return e
    }
}
class Fa {
    constructor(t, e) {
        a(this, "_sharedState");
        a(this, "_metricReader");
        this._sharedState = t, this._metricReader = e
    }
    async collect(t) {
        const e = T(Date.now()),
            n = [],
            i = [],
            s = Array.from(this._sharedState.meterSharedStates.values()).map(async o => {
                const c = await o.collect(this, e, t);
                (c == null ? void 0 : c.scopeMetrics) != null && n.push(c.scopeMetrics), (c == null ? void 0 : c.errors) != null && i.push(...c.errors)
            });
        return await Promise.all(s), {
            resourceMetrics: {
                resource: this._sharedState.resource,
                scopeMetrics: n
            },
            errors: i
        }
    }
    async forceFlush(t) {
        await this._metricReader.forceFlush(t)
    }
    async shutdown(t) {
        await this._metricReader.shutdown(t)
    }
    selectAggregationTemporality(t) {
        return this._metricReader.selectAggregationTemporality(t)
    }
    selectAggregation(t) {
        return this._metricReader.selectAggregation(t)
    }
    selectCardinalityLimit(t) {
        var e, n;
        return ((n = (e = this._metricReader).selectCardinalityLimit) == null ? void 0 : n.call(e, t)) ? ? 2e3
    }
}
const $a = /[\^$\\.+?()[\]{}|]/g;
class Nt {
    constructor(t) {
        a(this, "_matchAll");
        a(this, "_regexp");
        t === "*" ? (this._matchAll = !0, this._regexp = /.*/) : (this._matchAll = !1, this._regexp = new RegExp(Nt.escapePattern(t)))
    }
    match(t) {
        return this._matchAll ? !0 : this._regexp.test(t)
    }
    static escapePattern(t) {
        return `^${t.replace($a,"\\$&").replace("*",".*")}$`
    }
    static hasWildcard(t) {
        return t.includes("*")
    }
}
class ft {
    constructor(t) {
        a(this, "_matchAll");
        a(this, "_pattern");
        this._matchAll = t === void 0, this._pattern = t
    }
    match(t) {
        return !!(this._matchAll || t === this._pattern)
    }
}
class za {
    constructor(t) {
        a(this, "_nameFilter");
        a(this, "_type");
        a(this, "_unitFilter");
        this._nameFilter = new Nt((t == null ? void 0 : t.name) ? ? "*"), this._type = t == null ? void 0 : t.type, this._unitFilter = new ft(t == null ? void 0 : t.unit)
    }
    getType() {
        return this._type
    }
    getNameFilter() {
        return this._nameFilter
    }
    getUnitFilter() {
        return this._unitFilter
    }
}
class ja {
    constructor(t) {
        a(this, "_nameFilter");
        a(this, "_versionFilter");
        a(this, "_schemaUrlFilter");
        this._nameFilter = new ft(t == null ? void 0 : t.name), this._versionFilter = new ft(t == null ? void 0 : t.version), this._schemaUrlFilter = new ft(t == null ? void 0 : t.schemaUrl)
    }
    getNameFilter() {
        return this._nameFilter
    }
    getVersionFilter() {
        return this._versionFilter
    }
    getSchemaUrlFilter() {
        return this._schemaUrlFilter
    }
}

function Ha(r) {
    return r.instrumentName == null && r.instrumentType == null && r.instrumentUnit == null && r.meterName == null && r.meterVersion == null && r.meterSchemaUrl == null
}

function Xa(r) {
    if (Ha(r)) throw new Error("Cannot create view with no selector arguments supplied");
    if (r.name != null && ((r == null ? void 0 : r.instrumentName) == null || Nt.hasWildcard(r.instrumentName))) throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.")
}
class Wa {
    constructor(t) {
        a(this, "name");
        a(this, "description");
        a(this, "aggregation");
        a(this, "attributesProcessor");
        a(this, "instrumentSelector");
        a(this, "meterSelector");
        a(this, "aggregationCardinalityLimit");
        Xa(t), t.attributesProcessors != null ? this.attributesProcessor = Ua(t.attributesProcessors) : this.attributesProcessor = Vr(), this.name = t.name, this.description = t.description, this.aggregation = Ur(t.aggregation ? ? {
            type: A.DEFAULT
        }), this.instrumentSelector = new za({
            name: t.instrumentName,
            type: t.instrumentType,
            unit: t.instrumentUnit
        }), this.meterSelector = new ja({
            name: t.meterName,
            version: t.meterVersion,
            schemaUrl: t.meterSchemaUrl
        }), this.aggregationCardinalityLimit = t.aggregationCardinalityLimit
    }
}
class vo {
    constructor(t) {
        a(this, "_sharedState");
        a(this, "_shutdown", !1);
        if (this._sharedState = new Va((t == null ? void 0 : t.resource) ? ? Te()), (t == null ? void 0 : t.views) != null && t.views.length > 0)
            for (const e of t.views) this._sharedState.viewRegistry.addView(new Wa(e));
        if ((t == null ? void 0 : t.readers) != null && t.readers.length > 0)
            for (const e of t.readers) {
                const n = new Fa(this._sharedState, e);
                e.setMetricProducer(n), this._sharedState.metricCollectors.push(n)
            }
    }
    getMeter(t, e = "", n = {}) {
        return this._shutdown ? (h.warn("A shutdown MeterProvider cannot provide a Meter"), Mn()) : this._sharedState.getMeterSharedState({
            name: t,
            version: e,
            schemaUrl: n.schemaUrl
        }).meter
    }
    async shutdown(t) {
        if (this._shutdown) {
            h.warn("shutdown may only be called once per MeterProvider");
            return
        }
        this._shutdown = !0, await Promise.all(this._sharedState.metricCollectors.map(e => e.shutdown(t)))
    }
    async forceFlush(t) {
        if (this._shutdown) {
            h.warn("invalid attempt to force flush after MeterProvider shutdown");
            return
        }
        await Promise.all(this._sharedState.metricCollectors.map(e => e.forceFlush(t)))
    }
}
class Ya {
    constructor(t, e, n) {
        a(this, "hrTime");
        a(this, "hrTimeObserved");
        a(this, "spanContext");
        a(this, "resource");
        a(this, "instrumentationScope");
        a(this, "attributes", {});
        a(this, "_severityText");
        a(this, "_severityNumber");
        a(this, "_body");
        a(this, "_eventName");
        a(this, "totalAttributesCount", 0);
        a(this, "_isReadonly", !1);
        a(this, "_logRecordLimits");
        const {
            timestamp: i,
            observedTimestamp: s,
            eventName: o,
            severityNumber: c,
            severityText: u,
            body: l,
            attributes: d = {},
            context: f
        } = n, g = Date.now();
        if (this.hrTime = P(i ? ? g), this.hrTimeObserved = P(s ? ? g), f) {
            const E = y.getSpanContext(f);
            E && at(E) && (this.spanContext = E)
        }
        this.severityNumber = c, this.severityText = u, this.body = l, this.resource = t.resource, this.instrumentationScope = e, this._logRecordLimits = t.logRecordLimits, this._eventName = o, this.setAttributes(d)
    }
    set severityText(t) {
        this._isLogRecordReadonly() || (this._severityText = t)
    }
    get severityText() {
        return this._severityText
    }
    set severityNumber(t) {
        this._isLogRecordReadonly() || (this._severityNumber = t)
    }
    get severityNumber() {
        return this._severityNumber
    }
    set body(t) {
        this._isLogRecordReadonly() || (this._body = t)
    }
    get body() {
        return this._body
    }
    get eventName() {
        return this._eventName
    }
    set eventName(t) {
        this._isLogRecordReadonly() || (this._eventName = t)
    }
    get droppedAttributesCount() {
        return this.totalAttributesCount - Object.keys(this.attributes).length
    }
    setAttribute(t, e) {
        return this._isLogRecordReadonly() ? this : e === null ? this : t.length === 0 ? (h.warn(`Invalid attribute key: ${t}`), this) : !gt(e) && !(typeof e == "object" && !Array.isArray(e) && Object.keys(e).length > 0) ? (h.warn(`Invalid attribute value set for key: ${t}`), this) : (this.totalAttributesCount += 1, Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this.droppedAttributesCount === 1 && h.warn("Dropping extra attributes."), this) : (gt(e) ? this.attributes[t] = this._truncateToSize(e) : this.attributes[t] = e, this))
    }
    setAttributes(t) {
        for (const [e, n] of Object.entries(t)) this.setAttribute(e, n);
        return this
    }
    setBody(t) {
        return this.body = t, this
    }
    setEventName(t) {
        return this.eventName = t, this
    }
    setSeverityNumber(t) {
        return this.severityNumber = t, this
    }
    setSeverityText(t) {
        return this.severityText = t, this
    }
    _makeReadonly() {
        this._isReadonly = !0
    }
    _truncateToSize(t) {
        const e = this._logRecordLimits.attributeValueLengthLimit;
        return e <= 0 ? (h.warn(`Attribute value limit must be positive, got ${e}`), t) : typeof t == "string" ? this._truncateToLimitUtil(t, e) : Array.isArray(t) ? t.map(n => typeof n == "string" ? this._truncateToLimitUtil(n, e) : n) : t
    }
    _truncateToLimitUtil(t, e) {
        return t.length <= e ? t : t.substring(0, e)
    }
    _isLogRecordReadonly() {
        return this._isReadonly && h.warn("Can not execute the operation on emitted log record"), this._isReadonly
    }
}
class Qa {
    constructor(t, e) {
        a(this, "instrumentationScope");
        a(this, "_sharedState");
        this.instrumentationScope = t, this._sharedState = e
    }
    emit(t) {
        const e = t.context || b.active(),
            n = new Ya(this._sharedState, this.instrumentationScope, {
                context: e,
                ...t
            });
        this._sharedState.activeProcessor.onEmit(n, e), n._makeReadonly()
    }
}

function Ka() {
    return {
        forceFlushTimeoutMillis: 3e4,
        logRecordLimits: {
            attributeValueLengthLimit: 1 / 0,
            attributeCountLimit: 128
        },
        includeTraceContext: !0
    }
}

function qa(r) {
    return {
        attributeCountLimit: r.attributeCountLimit ? ? void 0 ? ? void 0 ? ? 128,
        attributeValueLengthLimit: r.attributeValueLengthLimit ? ? void 0 ? ? void 0 ? ? 1 / 0
    }
}
class Ja {
    forceFlush() {
        return Promise.resolve()
    }
    onEmit(t, e) {}
    shutdown() {
        return Promise.resolve()
    }
}
class Za {
    constructor(t, e) {
        a(this, "processors");
        a(this, "forceFlushTimeoutMillis");
        this.processors = t, this.forceFlushTimeoutMillis = e
    }
    async forceFlush() {
        const t = this.forceFlushTimeoutMillis;
        await Promise.all(this.processors.map(e => Er(e.forceFlush(), t)))
    }
    onEmit(t, e) {
        this.processors.forEach(n => n.onEmit(t, e))
    }
    async shutdown() {
        await Promise.all(this.processors.map(t => t.shutdown()))
    }
}
class to {
    constructor(t, e, n, i) {
        a(this, "resource");
        a(this, "forceFlushTimeoutMillis");
        a(this, "logRecordLimits");
        a(this, "processors");
        a(this, "loggers", new Map);
        a(this, "activeProcessor");
        a(this, "registeredLogRecordProcessors", []);
        this.resource = t, this.forceFlushTimeoutMillis = e, this.logRecordLimits = n, this.processors = i, i.length > 0 ? (this.registeredLogRecordProcessors = i, this.activeProcessor = new Za(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis)) : this.activeProcessor = new Ja
    }
}
const eo = "unknown";
class Mo {
    constructor(t = {}) {
        a(this, "_shutdownOnce");
        a(this, "_sharedState");
        const e = mr({}, Ka(), t),
            n = t.resource ? ? Te();
        this._sharedState = new to(n, e.forceFlushTimeoutMillis, qa(e.logRecordLimits), (t == null ? void 0 : t.processors) ? ? []), this._shutdownOnce = new ye(this._shutdown, this)
    }
    getLogger(t, e, n) {
        if (this._shutdownOnce.isCalled) return h.warn("A shutdown LoggerProvider cannot provide a Logger"), ir;
        t || h.warn("Logger requested without instrumentation scope name.");
        const i = t || eo,
            s = `${i}@${e||""}:${(n==null?void 0:n.schemaUrl)||""}`;
        return this._sharedState.loggers.has(s) || this._sharedState.loggers.set(s, new Qa({
            name: i,
            version: e,
            schemaUrl: n == null ? void 0 : n.schemaUrl
        }, this._sharedState)), this._sharedState.loggers.get(s)
    }
    forceFlush() {
        return this._shutdownOnce.isCalled ? (h.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise) : this._sharedState.activeProcessor.forceFlush()
    }
    shutdown() {
        return this._shutdownOnce.isCalled ? (h.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise) : this._shutdownOnce.call()
    }
    _shutdown() {
        return this._sharedState.activeProcessor.shutdown()
    }
}
class ro {
    constructor(t, e) {
        a(this, "_exporter");
        a(this, "_maxExportBatchSize");
        a(this, "_maxQueueSize");
        a(this, "_scheduledDelayMillis");
        a(this, "_exportTimeoutMillis");
        a(this, "_finishedLogRecords", []);
        a(this, "_timer");
        a(this, "_shutdownOnce");
        this._exporter = t, this._maxExportBatchSize = (e == null ? void 0 : e.maxExportBatchSize) ? ? void 0 ? ? 512, this._maxQueueSize = (e == null ? void 0 : e.maxQueueSize) ? ? void 0 ? ? 2048, this._scheduledDelayMillis = (e == null ? void 0 : e.scheduledDelayMillis) ? ? void 0 ? ? 5e3, this._exportTimeoutMillis = (e == null ? void 0 : e.exportTimeoutMillis) ? ? void 0 ? ? 3e4, this._shutdownOnce = new ye(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (h.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
    }
    onEmit(t) {
        this._shutdownOnce.isCalled || this._addToBuffer(t)
    }
    forceFlush() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
    }
    shutdown() {
        return this._shutdownOnce.call()
    }
    async _shutdown() {
        this.onShutdown(), await this._flushAll(), await this._exporter.shutdown()
    }
    _addToBuffer(t) {
        this._finishedLogRecords.length >= this._maxQueueSize || (this._finishedLogRecords.push(t), this._maybeStartTimer())
    }
    _flushAll() {
        return new Promise((t, e) => {
            const n = [],
                i = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
            for (let s = 0; s < i; s++) n.push(this._flushOneBatch());
            Promise.all(n).then(() => {
                t()
            }).catch(e)
        })
    }
    _flushOneBatch() {
        return this._clearTimer(), this._finishedLogRecords.length === 0 ? Promise.resolve() : new Promise((t, e) => {
            Er(this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)), this._exportTimeoutMillis).then(() => t()).catch(e)
        })
    }
    _maybeStartTimer() {
        this._timer === void 0 && (this._timer = setTimeout(() => {
            this._flushOneBatch().then(() => {
                this._finishedLogRecords.length > 0 && (this._clearTimer(), this._maybeStartTimer())
            }).catch(t => {
                S(t)
            })
        }, this._scheduledDelayMillis), this._timer, void 0)
    }
    _clearTimer() {
        this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0)
    }
    _export(t) {
        const e = () => Tr._export(this._exporter, t).then(i => {
                i.code !== et.SUCCESS && S(i.error ? ? new Error(`BatchLogRecordProcessor: log record export failed (status ${i})`))
            }).catch(S),
            n = t.map(i => i.resource).filter(i => i.asyncAttributesPending);
        return n.length === 0 ? e() : Promise.all(n.map(i => {
            var s;
            return (s = i.waitForAsyncAttributes) == null ? void 0 : s.call(i)
        })).then(e, S)
    }
}
class Ro extends ro {
    constructor(e, n) {
        super(e, n);
        a(this, "_visibilityChangeListener");
        a(this, "_pageHideListener");
        this._onInit(n)
    }
    onShutdown() {
        typeof document > "u" || (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
    }
    _onInit(e) {
        (e == null ? void 0 : e.disableAutoFlushOnDocumentHide) === !0 || typeof document > "u" || (this._visibilityChangeListener = () => {
            document.visibilityState === "hidden" && this.forceFlush()
        }, this._pageHideListener = () => {
            this.forceFlush()
        }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
    }
}
export {
    fo as A, C as B, Tt as C, H as D, et as E, A as F, hs as G, Eo as H, _ as I, wo as J, Ro as K, Mo as L, vo as M, m as P, U as R, co as S, Ft as T, z as V, yo as W, oo as _, To as a, uo as b, b as c, h as d, v as e, vr as f, mo as g, Ns as h, go as i, So as j, ho as k, ao as l, so as m, _o as n, V as o, J as p, po as q, Yt as r, Ao as s, y as t, bo as u, ur as v, Qt as w, lo as x, T as y, Bs as z
};