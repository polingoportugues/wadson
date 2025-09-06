(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [267], {
        3098: (e, t, r) => {
            "use strict";

            function n(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function i(e, t) {
                return !!Array.isArray(t) && (0 === t.length || (e ? t.every(e => "string" == typeof e) : t.every(e => Number.isSafeInteger(e))))
            }

            function o(e) {
                if ("function" != typeof e) throw Error("function expected");
                return !0
            }

            function a(e, t) {
                if ("string" != typeof t) throw Error(`${e}: string expected`);
                return !0
            }

            function s(e) {
                if (!Number.isSafeInteger(e)) throw Error(`invalid integer: ${e}`)
            }

            function f(e) {
                if (!Array.isArray(e)) throw Error("array expected")
            }

            function l(e, t) {
                if (!i(!0, t)) throw Error(`${e}: array of strings expected`)
            }

            function u(...e) {
                let t = e => e,
                    r = (e, t) => r => e(t(r));
                return {
                    encode: e.map(e => e.encode).reduceRight(r, t),
                    decode: e.map(e => e.decode).reduce(r, t)
                }
            }

            function h(e) {
                let t = "string" == typeof e ? e.split("") : e,
                    r = t.length;
                l("alphabet", t);
                let n = new Map(t.map((e, t) => [e, t]));
                return {
                    encode: n => (f(n), n.map(n => {
                        if (!Number.isSafeInteger(n) || n < 0 || n >= r) throw Error(`alphabet.encode: digit index outside alphabet "${n}". Allowed: ${e}`);
                        return t[n]
                    })),
                    decode: t => (f(t), t.map(t => {
                        a("alphabet.decode", t);
                        let r = n.get(t);
                        if (void 0 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
                        return r
                    }))
                }
            }

            function c(e = "") {
                return a("join", e), {
                    encode: t => (l("join.decode", t), t.join(e)),
                    decode: t => (a("join.decode", t), t.split(e))
                }
            }
            r.d(t, {
                wg: () => E,
                eV: () => J,
                d: () => W,
                Cq: () => S,
                MX: () => ee,
                Iz: () => Z,
                C: () => Q,
                QK: () => X,
                dg: () => V,
                U8: () => et,
                Bb: () => ea,
                YO: () => ed,
                ee: () => er,
                Lo: () => F,
                Jt: () => es,
                fv: () => ef,
                uh: () => eo,
                GE: () => el,
                Pl: () => en,
                Yj: () => ei,
                w3: () => eh,
                PV: () => ec,
                Wp: () => T,
                tf: () => H,
                LV: () => D
            });
            let d = (e, t) => 0 === t ? e : d(t, e % t),
                p = (e, t) => e + (t - d(e, t)),
                y = (() => {
                    let e = [];
                    for (let t = 0; t < 40; t++) e.push(2 ** t);
                    return e
                })();

            function g(e, t, r, n) {
                if (f(e), t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
                if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
                if (p(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${p(t,r)}`);
                let i = 0,
                    o = 0,
                    a = y[t],
                    l = y[r] - 1,
                    u = [];
                for (let n of e) {
                    if (s(n), n >= a) throw Error(`convertRadix2: invalid data word=${n} from=${t}`);
                    if (i = i << t | n, o + t > 32) throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
                    for (o += t; o >= r; o -= r) u.push((i >> o - r & l) >>> 0);
                    let e = y[o];
                    if (void 0 === e) throw Error("invalid carry");
                    i &= e - 1
                }
                if (i = i << r - o & l, !n && o >= t) throw Error("Excess padding");
                if (!n && i > 0) throw Error(`Non-zero padding: ${i}`);
                return n && o > 0 && u.push(i >>> 0), u
            }
            let b = "function" == typeof Uint8Array.from([]).toBase64 && "function" == typeof Uint8Array.fromBase64,
                m = u(h("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), c("")),
                w = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

            function v(e) {
                let t = e >> 25,
                    r = (0x1ffffff & e) << 5;
                for (let e = 0; e < w.length; e++)(t >> e & 1) == 1 && (r ^= w[e]);
                return r
            }
            let _ = {
                    encode: e => new TextDecoder().decode(e),
                    decode: e => new TextEncoder().encode(e)
                },
                x = "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex ? {
                    encode: e => ((function(e, ...t) {
                        if (!n(e)) throw Error("Uint8Array expected");
                        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
                    })(e), e.toHex()),
                    decode: e => (a("hex", e), Uint8Array.fromHex(e))
                } : u(function(e, t = !1) {
                    if (s(4), e <= 0 || e > 32) throw Error("radix2: bits should be in (0..32]");
                    if (p(8, e) > 32 || p(e, 8) > 32) throw Error("radix2: carry overflow");
                    return {
                        encode: r => {
                            if (!n(r)) throw Error("radix2.encode input should be Uint8Array");
                            return g(Array.from(r), 8, e, !t)
                        },
                        decode: r => ((function(e, t) {
                            if (!i(!1, t)) throw Error(`${e}: array of numbers expected`)
                        })("radix2.decode", r), Uint8Array.from(g(r, e, 8, t)))
                    }
                }(4), h("0123456789abcdef"), c(""), function(e) {
                    return o(e), {
                        encode: e => e,
                        decode: t => e(t)
                    }
                }(e => {
                    if ("string" != typeof e || e.length % 2 != 0) throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
                    return e.toLowerCase()
                })),
                E = new Uint8Array,
                S = new Uint8Array([0]);

            function A(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function k(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }
            let B = e => new DataView(e.buffer, e.byteOffset, e.byteLength);

            function O(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function I(e) {
                return Number.isSafeInteger(e)
            }
            let T = {
                    equalBytes: A,
                    isBytes: k,
                    isCoder: $,
                    checkBounds: C,
                    concatBytes: function(...e) {
                        let t = 0;
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            if (!k(n)) throw Error("Uint8Array expected");
                            t += n.length
                        }
                        let r = new Uint8Array(t);
                        for (let t = 0, n = 0; t < e.length; t++) {
                            let i = e[t];
                            r.set(i, n), n += i.length
                        }
                        return r
                    },
                    createView: B,
                    isPlainObject: O
                },
                R = e => {
                    if (null !== e && "string" != typeof e && !$(e) && !k(e) && !I(e)) throw Error(`lengthCoder: expected null | number | Uint8Array | CoderType, got ${e} (${typeof e})`);
                    return {
                        encodeStream(t, r) {
                            let n;
                            if (null !== e) {
                                if ($(e)) return e.encodeStream(t, r);
                                if ("number" == typeof e ? n = e : "string" == typeof e && (n = P.resolve(t.stack, e)), "bigint" == typeof n && (n = Number(n)), void 0 === n || n !== r) throw t.err(`Wrong length: ${n} len=${e} exp=${r} (${typeof r})`)
                            }
                        },
                        decodeStream(t) {
                            let r;
                            if ($(e) ? r = Number(e.decodeStream(t)) : "number" == typeof e ? r = e : "string" == typeof e && (r = P.resolve(t.stack, e)), "bigint" == typeof r && (r = Number(r)), "number" != typeof r) throw t.err(`Wrong length: ${r}`);
                            return r
                        }
                    }
                },
                M = {
                    BITS: 32,
                    FULL_MASK: 0xffffffff,
                    len: e => Math.ceil(e / 32),
                    create: e => new Uint32Array(M.len(e)),
                    clean: e => e.fill(0),
                    debug: e => Array.from(e).map(e => (e >>> 0).toString(2).padStart(32, "0")),
                    checkLen: (e, t) => {
                        if (M.len(t) !== e.length) throw Error(`wrong length=${e.length}. Expected: ${M.len(t)}`)
                    },
                    chunkLen: (e, t, r) => {
                        if (t < 0) throw Error(`wrong pos=${t}`);
                        if (t + r > e) throw Error(`wrong range=${t}/${r} of ${e}`)
                    },
                    set: (e, t, r, n = !0) => (!!n || (e[t] & r) == 0) && (e[t] |= r, !0),
                    pos: (e, t) => ({
                        chunk: Math.floor((e + t) / 32),
                        mask: 1 << 32 - (e + t) % 32 - 1
                    }),
                    indices: (e, t, r = !1) => {
                        M.checkLen(e, t);
                        let {
                            FULL_MASK: n,
                            BITS: i
                        } = M, o = i - t % i, a = o ? n >>> o << o : n, s = [];
                        for (let t = 0; t < e.length; t++) {
                            let n = e[t];
                            if (r && (n = ~n), t === e.length - 1 && (n &= a), 0 !== n)
                                for (let e = 0; e < i; e++) n & 1 << i - e - 1 && s.push(t * i + e)
                        }
                        return s
                    },
                    range: e => {
                        let t;
                        let r = [];
                        for (let n of e) void 0 === t || n !== t.pos + t.length ? r.push(t = {
                            pos: n,
                            length: 1
                        }) : t.length += 1;
                        return r
                    },
                    rangeDebug: (e, t, r = !1) => `[${M.range(M.indices(e,t,r)).map(e=>`(${e.pos}/${e.length})`).join(", ")}]`,
                    setRange: (e, t, r, n, i = !0) => {
                        M.chunkLen(t, r, n);
                        let {
                            FULL_MASK: o,
                            BITS: a
                        } = M, s = r % a ? Math.floor(r / a) : void 0, f = r + n, l = f % a ? Math.floor(f / a) : void 0;
                        if (void 0 !== s && s === l) return M.set(e, s, o >>> a - n << a - n - r, i);
                        if (void 0 !== s && !M.set(e, s, o >>> r % a, i)) return !1;
                        let u = void 0 !== s ? s + 1 : r / a,
                            h = void 0 !== l ? l : f / a;
                        for (let t = u; t < h; t++)
                            if (!M.set(e, t, o, i)) return !1;
                        return !!(void 0 === l || s === l || M.set(e, l, o << a - f % a, i))
                    }
                },
                P = {
                    pushObj: (e, t, r) => {
                        let n = {
                            obj: t
                        };
                        e.push(n), r((e, t) => {
                            n.field = e, t(), n.field = void 0
                        }), e.pop()
                    },
                    path: e => {
                        let t = [];
                        for (let r of e) void 0 !== r.field && t.push(r.field);
                        return t.join("/")
                    },
                    err: (e, t, r) => {
                        let n = Error(`${e}(${P.path(t)}): ${"string"==typeof r?r:r.message}`);
                        return r instanceof Error && r.stack && (n.stack = r.stack), n
                    },
                    resolve: (e, t) => {
                        let r = t.split("/"),
                            n = e.map(e => e.obj),
                            i = 0;
                        for (; i < r.length && ".." === r[i]; i++) n.pop();
                        let o = n.pop();
                        for (; i < r.length; i++) {
                            if (!o || void 0 === o[r[i]]) return;
                            o = o[r[i]]
                        }
                        return o
                    }
                };
            class L {
                constructor(e, t = {}, r = [], n, i = 0) {
                    this.pos = 0, this.bitBuf = 0, this.bitPos = 0, this.data = e, this.opts = t, this.stack = r, this.parent = n, this.parentOffset = i, this.view = B(e)
                }
                _enablePointers() {
                    if (this.parent) return this.parent._enablePointers();
                    this.bs || (this.bs = M.create(this.data.length), M.setRange(this.bs, this.data.length, 0, this.pos, this.opts.allowMultipleReads))
                }
                markBytesBS(e, t) {
                    return this.parent ? this.parent.markBytesBS(this.parentOffset + e, t) : !t || !this.bs || M.setRange(this.bs, this.data.length, e, t, !1)
                }
                markBytes(e) {
                    let t = this.pos;
                    this.pos += e;
                    let r = this.markBytesBS(t, e);
                    if (!this.opts.allowMultipleReads && !r) throw this.err(`multiple read pos=${this.pos} len=${e}`);
                    return r
                }
                pushObj(e, t) {
                    return P.pushObj(this.stack, e, t)
                }
                readView(e, t) {
                    if (!Number.isFinite(e)) throw this.err(`readView: wrong length=${e}`);
                    if (this.pos + e > this.data.length) throw this.err("readView: Unexpected end of buffer");
                    let r = t(this.view, this.pos);
                    return this.markBytes(e), r
                }
                absBytes(e) {
                    if (e > this.data.length) throw Error("Unexpected end of buffer");
                    return this.data.subarray(e)
                }
                finish() {
                    if (!this.opts.allowUnreadBytes) {
                        if (this.bitPos) throw this.err(`${this.bitPos} bits left after unpack: ${x.encode(this.data.slice(this.pos))}`);
                        if (this.bs && !this.parent) {
                            let e = M.indices(this.bs, this.data.length, !0);
                            if (!e.length) return; {
                                let t = M.range(e).map(({
                                    pos: e,
                                    length: t
                                }) => `(${e}/${t})[${x.encode(this.data.subarray(e,e+t))}]`).join(", ");
                                throw this.err(`unread byte ranges: ${t} (total=${this.data.length})`)
                            }
                        }
                        if (!this.isEnd()) throw this.err(`${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${x.encode(this.data.slice(this.pos))}`)
                    }
                }
                err(e) {
                    return P.err("Reader", this.stack, e)
                }
                offsetReader(e) {
                    if (e > this.data.length) throw this.err("offsetReader: Unexpected end of buffer");
                    return new L(this.absBytes(e), this.opts, this.stack, this, e)
                }
                bytes(e, t = !1) {
                    if (this.bitPos) throw this.err("readBytes: bitPos not empty");
                    if (!Number.isFinite(e)) throw this.err(`readBytes: wrong length=${e}`);
                    if (this.pos + e > this.data.length) throw this.err("readBytes: Unexpected end of buffer");
                    let r = this.data.subarray(this.pos, this.pos + e);
                    return t || this.markBytes(e), r
                }
                byte(e = !1) {
                    if (this.bitPos) throw this.err("readByte: bitPos not empty");
                    if (this.pos + 1 > this.data.length) throw this.err("readBytes: Unexpected end of buffer");
                    let t = this.data[this.pos];
                    return e || this.markBytes(1), t
                }
                get leftBytes() {
                    return this.data.length - this.pos
                }
                get totalBytes() {
                    return this.data.length
                }
                isEnd() {
                    return this.pos >= this.data.length && !this.bitPos
                }
                bits(e) {
                    if (e > 32) throw this.err("BitReader: cannot read more than 32 bits in single call");
                    let t = 0;
                    for (; e;) {
                        this.bitPos || (this.bitBuf = this.byte(), this.bitPos = 8);
                        let r = Math.min(e, this.bitPos);
                        this.bitPos -= r, t = t << r | this.bitBuf >> this.bitPos & 2 ** r - 1, this.bitBuf &= 2 ** this.bitPos - 1, e -= r
                    }
                    return t >>> 0
                }
                find(e, t = this.pos) {
                    if (!k(e)) throw this.err(`find: needle is not bytes! ${e}`);
                    if (this.bitPos) throw this.err("findByte: bitPos not empty");
                    if (!e.length) throw this.err("find: needle is empty");
                    for (let r = t; - 1 !== (r = this.data.indexOf(e[0], r)) && -1 !== r && !(this.data.length - r < e.length); r++)
                        if (A(e, this.data.subarray(r, r + e.length))) return r
                }
            }
            class U {
                constructor(e = []) {
                    this.pos = 0, this.buffers = [], this.ptrs = [], this.bitBuf = 0, this.bitPos = 0, this.viewBuf = new Uint8Array(8), this.finished = !1, this.stack = e, this.view = B(this.viewBuf)
                }
                pushObj(e, t) {
                    return P.pushObj(this.stack, e, t)
                }
                writeView(e, t) {
                    if (this.finished) throw this.err("buffer: finished");
                    if (!I(e) || e > 8) throw Error(`wrong writeView length=${e}`);
                    t(this.view), this.bytes(this.viewBuf.slice(0, e)), this.viewBuf.fill(0)
                }
                err(e) {
                    if (this.finished) throw this.err("buffer: finished");
                    return P.err("Reader", this.stack, e)
                }
                bytes(e) {
                    if (this.finished) throw this.err("buffer: finished");
                    if (this.bitPos) throw this.err("writeBytes: ends with non-empty bit buffer");
                    this.buffers.push(e), this.pos += e.length
                }
                byte(e) {
                    if (this.finished) throw this.err("buffer: finished");
                    if (this.bitPos) throw this.err("writeByte: ends with non-empty bit buffer");
                    this.buffers.push(new Uint8Array([e])), this.pos++
                }
                finish(e = !0) {
                    if (this.finished) throw this.err("buffer: finished");
                    if (this.bitPos) throw this.err("buffer: ends with non-empty bit buffer");
                    let t = this.buffers.concat(this.ptrs.map(e => e.buffer)),
                        r = new Uint8Array(t.map(e => e.length).reduce((e, t) => e + t, 0));
                    for (let e = 0, n = 0; e < t.length; e++) {
                        let i = t[e];
                        r.set(i, n), n += i.length
                    }
                    for (let e = this.pos, t = 0; t < this.ptrs.length; t++) {
                        let n = this.ptrs[t];
                        r.set(n.ptr.encode(e), n.pos), e += n.buffer.length
                    }
                    if (e) {
                        for (let e of (this.buffers = [], this.ptrs)) e.buffer.fill(0);
                        this.ptrs = [], this.finished = !0, this.bitBuf = 0
                    }
                    return r
                }
                bits(e, t) {
                    if (t > 32) throw this.err("writeBits: cannot write more than 32 bits in single call");
                    if (e >= 2 ** t) throw this.err(`writeBits: value (${e}) >= 2**bits (${t})`);
                    for (; t;) {
                        let r = Math.min(t, 8 - this.bitPos);
                        this.bitBuf = this.bitBuf << r | e >> t - r, this.bitPos += r, t -= r, e &= 2 ** t - 1, 8 === this.bitPos && (this.bitPos = 0, this.buffers.push(new Uint8Array([this.bitBuf])), this.pos++)
                    }
                }
            }
            let N = e => Uint8Array.from(e).reverse();

            function C(e, t, r) {
                if (r) {
                    let r = 2 n ** (t - 1 n);
                    if (e < -r || e >= r) throw Error(`value out of signed bounds. Expected ${-r} <= ${e} < ${r}`)
                } else if (0 n > e || e >= 2 n ** t) throw Error(`value out of unsigned bounds. Expected 0 <= ${e} < ${2n**t}`)
            }

            function j(e) {
                return {
                    encodeStream: e.encodeStream,
                    decodeStream: e.decodeStream,
                    size: e.size,
                    encode: t => {
                        let r = new U;
                        return e.encodeStream(r, t), r.finish()
                    },
                    decode: (t, r = {}) => {
                        let n = new L(t, r),
                            i = e.decodeStream(n);
                        return n.finish(), i
                    }
                }
            }

            function H(e, t) {
                if (!$(e)) throw Error(`validate: invalid inner value ${e}`);
                if ("function" != typeof t) throw Error("validate: fn should be function");
                return j({
                    size: e.size,
                    encodeStream: (r, n) => {
                        let i;
                        try {
                            i = t(n)
                        } catch (e) {
                            throw r.err(e)
                        }
                        e.encodeStream(r, i)
                    },
                    decodeStream: r => {
                        let n = e.decodeStream(r);
                        try {
                            return t(n)
                        } catch (e) {
                            throw r.err(e)
                        }
                    }
                })
            }
            let D = e => {
                    let t = j(e);
                    return e.validate ? H(t, e.validate) : t
                },
                K = e => O(e) && "function" == typeof e.decode && "function" == typeof e.encode;

            function $(e) {
                return O(e) && K(e) && "function" == typeof e.encodeStream && "function" == typeof e.decodeStream && (void 0 === e.size || I(e.size))
            }
            let z = e => {
                    if (!K(e)) throw Error("BaseCoder expected");
                    return {
                        encode: e.decode,
                        decode: e.encode
                    }
                },
                F = {
                    dict: function() {
                        return {
                            encode: e => {
                                if (!Array.isArray(e)) throw Error("array expected");
                                let t = {};
                                for (let r of e) {
                                    if (!Array.isArray(r) || 2 !== r.length) throw Error("array of two elements expected");
                                    let e = r[0],
                                        n = r[1];
                                    if (void 0 !== t[e]) throw Error(`key(${e}) appears twice in struct`);
                                    t[e] = n
                                }
                                return t
                            },
                            decode: e => {
                                if (!O(e)) throw Error(`expected plain object, got ${e}`);
                                return Object.entries(e)
                            }
                        }
                    },
                    numberBigint: {
                        encode: e => {
                            if ("bigint" != typeof e) throw Error(`expected bigint, got ${typeof e}`);
                            if (e > BigInt(Number.MAX_SAFE_INTEGER)) throw Error(`element bigger than MAX_SAFE_INTEGER=${e}`);
                            return Number(e)
                        },
                        decode: e => {
                            if (!I(e)) throw Error("element is not a safe integer");
                            return BigInt(e)
                        }
                    },
                    tsEnum: function(e) {
                        if (!O(e)) throw Error("plain object expected");
                        return {
                            encode: t => {
                                if (!I(t) || !(t in e)) throw Error(`wrong value ${t}`);
                                return e[t]
                            },
                            decode: t => {
                                if ("string" != typeof t) throw Error(`wrong value ${typeof t}`);
                                return e[t]
                            }
                        }
                    },
                    decimal: function(e, t = !1) {
                        if (!I(e)) throw Error(`decimal/precision: wrong value ${e}`);
                        if ("boolean" != typeof t) throw Error(`decimal/round: expected boolean, got ${typeof t}`);
                        let r = 10 n ** BigInt(e);
                        return {
                            encode: t => {
                                if ("bigint" != typeof t) throw Error(`expected bigint, got ${typeof t}`);
                                let r = (t < 0 n ? -t : t).toString(10),
                                    n = r.length - e;
                                n < 0 && (r = r.padStart(r.length - n, "0"), n = 0);
                                let i = r.length - 1;
                                for (; i >= n && "0" === r[i]; i--);
                                let o = r.slice(0, n),
                                    a = r.slice(n, i + 1);
                                return (o || (o = "0"), t < 0 n && (o = "-" + o), a) ? `${o}.${a}` : o
                            },
                            decode: n => {
                                if ("string" != typeof n) throw Error(`expected string, got ${typeof n}`);
                                if ("-0" === n) throw Error("negative zero is not allowed");
                                let i = !1;
                                if (n.startsWith("-") && (i = !0, n = n.slice(1)), !/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) throw Error(`wrong string value=${n}`);
                                let o = n.indexOf(".");
                                o = -1 === o ? n.length : o;
                                let a = n.slice(0, o),
                                    s = n.slice(o + 1).replace(/0+$/, ""),
                                    f = BigInt(a) * r;
                                if (!t && s.length > e) throw Error(`fractional part cannot be represented with this precision (num=${n}, prec=${e})`);
                                let l = Math.min(s.length, e),
                                    u = f + BigInt(s.slice(0, l)) * 10 n ** BigInt(e - l);
                                return i ? -u : u
                            }
                        }
                    },
                    match: function(e) {
                        if (!Array.isArray(e)) throw Error(`expected array, got ${typeof e}`);
                        for (let t of e)
                            if (!K(t)) throw Error(`wrong base coder ${t}`);
                        return {
                            encode: t => {
                                for (let r of e) {
                                    let e = r.encode(t);
                                    if (void 0 !== e) return e
                                }
                                throw Error(`match/encode: cannot find match in ${t}`)
                            },
                            decode: t => {
                                for (let r of e) {
                                    let e = r.decode(t);
                                    if (void 0 !== e) return e
                                }
                                throw Error(`match/decode: cannot find match in ${t}`)
                            }
                        }
                    },
                    reverse: z
                },
                q = (e, t = !1, r = !1, n = !0) => {
                    if (!I(e)) throw Error(`bigint/size: wrong value ${e}`);
                    if ("boolean" != typeof t) throw Error(`bigint/le: expected boolean, got ${typeof t}`);
                    if ("boolean" != typeof r) throw Error(`bigint/signed: expected boolean, got ${typeof r}`);
                    if ("boolean" != typeof n) throw Error(`bigint/sized: expected boolean, got ${typeof n}`);
                    let i = BigInt(e),
                        o = 2 n ** (8 n * i - 1 n);
                    return D({
                        size: n ? e : void 0,
                        encodeStream: (i, a) => {
                            r && a < 0 && (a |= o);
                            let s = [];
                            for (let t = 0; t < e; t++) s.push(Number(255 n & a)), a >>= 8 n;
                            let f = new Uint8Array(s).reverse();
                            if (!n) {
                                let e = 0;
                                for (e = 0; e < f.length && 0 === f[e]; e++);
                                f = f.subarray(e)
                            }
                            i.bytes(t ? f.reverse() : f)
                        },
                        decodeStream: i => {
                            let a = i.bytes(n ? e : Math.min(e, i.leftBytes)),
                                s = t ? a : N(a),
                                f = 0 n;
                            for (let e = 0; e < s.length; e++) f |= BigInt(s[e]) << 8 n * BigInt(e);
                            return r && f & o && (f = (f ^ o) - o), f
                        },
                        validate: e => {
                            if ("bigint" != typeof e) throw Error(`bigint: invalid value: ${e}`);
                            return C(e, 8 n * i, !!r), e
                        }
                    })
                },
                Z = q(32, !1),
                V = q(8, !0),
                W = q(8, !0, !0),
                G = (e, t) => D({
                    size: e,
                    encodeStream: (r, n) => r.writeView(e, e => t.write(e, n)),
                    decodeStream: r => r.readView(e, t.read),
                    validate: e => {
                        if ("number" != typeof e) throw Error(`viewCoder: expected number, got ${typeof e}`);
                        return t.validate && t.validate(e), e
                    }
                }),
                Y = (e, t, r) => {
                    let n = 8 * e,
                        i = 2 ** (n - 1),
                        o = 2 ** n;
                    return G(e, {
                        write: r.write,
                        read: r.read,
                        validate: t ? e => {
                            if (!I(e)) throw Error(`sintView: value is not safe integer: ${e}`);
                            if (e < -i || e >= i) throw Error(`sintView: value out of bounds. Expected ${-i} <= ${e} < ${i}`)
                        } : e => {
                            if (!I(e)) throw Error(`uintView: value is not safe integer: ${e}`);
                            if (0 > e || e >= o) throw Error(`uintView: value out of bounds. Expected 0 <= ${e} < ${o}`)
                        }
                    })
                },
                X = Y(4, !1, {
                    read: (e, t) => e.getUint32(t, !0),
                    write: (e, t) => e.setUint32(0, t, !0)
                }),
                Q = Y(4, !1, {
                    read: (e, t) => e.getUint32(t, !1),
                    write: (e, t) => e.setUint32(0, t, !1)
                }),
                J = Y(4, !0, {
                    read: (e, t) => e.getInt32(t, !0),
                    write: (e, t) => e.setInt32(0, t, !0)
                }),
                ee = Y(2, !1, {
                    read: (e, t) => e.getUint16(t, !0),
                    write: (e, t) => e.setUint16(0, t, !0)
                }),
                et = Y(1, !1, {
                    read: (e, t) => e.getUint8(t),
                    write: (e, t) => e.setUint8(0, t)
                }),
                er = (e, t = !1) => {
                    if ("boolean" != typeof t) throw Error(`bytes/le: expected boolean, got ${typeof t}`);
                    let r = R(e),
                        n = k(e);
                    return D({
                        size: "number" == typeof e ? e : void 0,
                        encodeStream: (i, o) => {
                            n || r.encodeStream(i, o.length), i.bytes(t ? N(o) : o), n && i.bytes(e)
                        },
                        decodeStream: i => {
                            let o;
                            if (n) {
                                let t = i.find(e);
                                if (!t) throw i.err("bytes: cannot find terminator");
                                o = i.bytes(t - i.pos), i.bytes(e.length)
                            } else o = i.bytes(null === e ? i.leftBytes : r.decodeStream(i));
                            return t ? N(o) : o
                        },
                        validate: e => {
                            if (!k(e)) throw Error(`bytes: invalid value ${e}`);
                            return e
                        }
                    })
                };

            function en(e, t) {
                if (!$(t)) throw Error(`prefix: invalid inner value ${t}`);
                return ea(er(e), z(t))
            }
            let ei = (e, t = !1) => H(ea(er(e, t), _), e => {
                    if ("string" != typeof e) throw Error(`expected string, got ${typeof e}`);
                    return e
                }),
                eo = (e, t = {
                    isLE: !1,
                    with0x: !1
                }) => {
                    let r = ea(er(e, t.isLE), x),
                        n = t.with0x;
                    if ("boolean" != typeof n) throw Error(`hex/with0x: expected boolean, got ${typeof n}`);
                    return n && (r = ea(r, {
                        encode: e => `0x${e}`,
                        decode: e => {
                            if (!e.startsWith("0x")) throw Error("hex(with0x=true).encode input should start with 0x");
                            return e.slice(2)
                        }
                    })), r
                };

            function ea(e, t) {
                if (!$(e)) throw Error(`apply: invalid inner value ${e}`);
                if (!K(t)) throw Error(`apply: invalid base value ${e}`);
                return D({
                    size: e.size,
                    encodeStream: (r, n) => {
                        let i;
                        try {
                            i = t.decode(n)
                        } catch (e) {
                            throw r.err("" + e)
                        }
                        return e.encodeStream(r, i)
                    },
                    decodeStream: r => {
                        let n = e.decodeStream(r);
                        try {
                            return t.encode(n)
                        } catch (e) {
                            throw r.err("" + e)
                        }
                    }
                })
            }
            let es = (e, t = !1) => {
                if (!k(e)) throw Error(`flag/flagValue: expected Uint8Array, got ${typeof e}`);
                if ("boolean" != typeof t) throw Error(`flag/xor: expected boolean, got ${typeof t}`);
                return D({
                    size: e.length,
                    encodeStream: (r, n) => {
                        !!n !== t && r.bytes(e)
                    },
                    decodeStream: r => {
                        let n = r.leftBytes >= e.length;
                        return n && (n = A(r.bytes(e.length, !0), e)) && r.bytes(e.length), n !== t
                    },
                    validate: e => {
                        if (void 0 !== e && "boolean" != typeof e) throw Error(`flag: expected boolean value or undefined, got ${typeof e}`);
                        return e
                    }
                })
            };

            function ef(e, t, r) {
                if (!$(t)) throw Error(`flagged: invalid inner value ${t}`);
                if ("string" != typeof e && !$(t)) throw Error(`flagged: wrong path=${e}`);
                return D({
                    encodeStream: (n, i) => {
                        "string" == typeof e ? P.resolve(n.stack, e) ? t.encodeStream(n, i) : r && t.encodeStream(n, r) : (e.encodeStream(n, !!i), i ? t.encodeStream(n, i) : r && t.encodeStream(n, r))
                    },
                    decodeStream: n => {
                        let i = !1;
                        if ("string" == typeof e ? !!P.resolve(n.stack, e) : e.decodeStream(n)) return t.decodeStream(n);
                        r && t.decodeStream(n)
                    }
                })
            }

            function el(e, t, r = !0) {
                if (!$(e)) throw Error(`magic: invalid inner value ${e}`);
                if ("boolean" != typeof r) throw Error(`magic: expected boolean, got ${typeof r}`);
                return D({
                    size: e.size,
                    encodeStream: (r, n) => e.encodeStream(r, t),
                    decodeStream: n => {
                        let i = e.decodeStream(n);
                        if (r && "object" != typeof i && i !== t || k(t) && !A(t, i)) throw n.err(`magic: invalid value: ${i} !== ${t}`)
                    },
                    validate: e => {
                        if (void 0 !== e) throw Error(`magic: wrong value=${typeof e}`);
                        return e
                    }
                })
            }

            function eu(e) {
                let t = 0;
                for (let r of e) {
                    if (void 0 === r.size) return;
                    if (!I(r.size)) throw Error(`sizeof: wrong element size=${t}`);
                    t += r.size
                }
                return t
            }

            function eh(e) {
                if (!O(e)) throw Error(`struct: expected plain object, got ${e}`);
                for (let t in e)
                    if (!$(e[t])) throw Error(`struct: field ${t} is not CoderType`);
                return D({
                    size: eu(Object.values(e)),
                    encodeStream: (t, r) => {
                        t.pushObj(r, n => {
                            for (let i in e) n(i, () => e[i].encodeStream(t, r[i]))
                        })
                    },
                    decodeStream: t => {
                        let r = {};
                        return t.pushObj(r, n => {
                            for (let i in e) n(i, () => r[i] = e[i].decodeStream(t))
                        }), r
                    },
                    validate: e => {
                        if ("object" != typeof e || null === e) throw Error(`struct: invalid value ${e}`);
                        return e
                    }
                })
            }

            function ec(e) {
                if (!Array.isArray(e)) throw Error(`Packed.Tuple: got ${typeof e} instead of array`);
                for (let t = 0; t < e.length; t++)
                    if (!$(e[t])) throw Error(`tuple: field ${t} is not CoderType`);
                return D({
                    size: eu(e),
                    encodeStream: (t, r) => {
                        if (!Array.isArray(r)) throw t.err(`tuple: invalid value ${r}`);
                        t.pushObj(r, n => {
                            for (let i = 0; i < e.length; i++) n(`${i}`, () => e[i].encodeStream(t, r[i]))
                        })
                    },
                    decodeStream: t => {
                        let r = [];
                        return t.pushObj(r, n => {
                            for (let i = 0; i < e.length; i++) n(`${i}`, () => r.push(e[i].decodeStream(t)))
                        }), r
                    },
                    validate: t => {
                        if (!Array.isArray(t)) throw Error(`tuple: invalid value ${t}`);
                        if (t.length !== e.length) throw Error(`tuple: wrong length=${t.length}, expected ${e.length}`);
                        return t
                    }
                })
            }

            function ed(e, t) {
                if (!$(t)) throw Error(`array: invalid inner value ${t}`);
                let r = R("string" == typeof e ? `../${e}` : e);
                return D({
                    size: "number" == typeof e && t.size ? e * t.size : void 0,
                    encodeStream: (n, i) => {
                        n.pushObj(i, o => {
                            k(e) || r.encodeStream(n, i.length);
                            for (let r = 0; r < i.length; r++) o(`${r}`, () => {
                                let o = i[r],
                                    a = n.pos;
                                if (t.encodeStream(n, o), k(e)) {
                                    if (e.length > n.pos - a) return;
                                    let t = n.finish(!1).subarray(a, n.pos);
                                    if (A(t.subarray(0, e.length), e)) throw n.err(`array: inner element encoding same as separator. elm=${o} data=${t}`)
                                }
                            })
                        }), k(e) && n.bytes(e)
                    },
                    decodeStream: n => {
                        let i = [];
                        return n.pushObj(i, o => {
                            if (null === e)
                                for (let e = 0; !n.isEnd() && (o(`${e}`, () => i.push(t.decodeStream(n))), !t.size || !(n.leftBytes < t.size)); e++);
                            else if (k(e))
                                for (let r = 0;; r++) {
                                    if (A(n.bytes(e.length, !0), e)) {
                                        n.bytes(e.length);
                                        break
                                    }
                                    o(`${r}`, () => i.push(t.decodeStream(n)))
                                } else {
                                    let e;
                                    o("arrayLen", () => e = r.decodeStream(n));
                                    for (let r = 0; r < e; r++) o(`${r}`, () => i.push(t.decodeStream(n)))
                                }
                        }), i
                    },
                    validate: e => {
                        if (!Array.isArray(e)) throw Error(`array: invalid value ${e}`);
                        return e
                    }
                })
            }
        },
        4336: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = void 0, t.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0
        },
        4404: (e, t, r) => {
            "use strict";
            var n = Array.prototype.slice,
                i = r(33492),
                o = Object.keys,
                a = o ? function(e) {
                    return o(e)
                } : r(40174),
                s = Object.keys;
            a.shim = function() {
                return Object.keys ? ! function() {
                    var e = Object.keys(arguments);
                    return e && e.length === arguments.length
                }(1, 2) && (Object.keys = function(e) {
                    return i(e) ? s(n.call(e)) : s(e)
                }) : Object.keys = a, Object.keys || a
            }, e.exports = a
        },
        6226: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer,
                i = r(29143);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvalidStatusCodeError = t.InvalidCertError = void 0;
            let o = Object.freeze({
                redirect: !0,
                expectStatusCode: 200,
                headers: {},
                full: !1,
                keepAlive: !0,
                cors: !1,
                referrer: !1,
                sslAllowSelfSigned: !1,
                _redirectCount: 0
            });
            class a extends Error {
                constructor(e, t) {
                    super(e), this.fingerprint256 = t
                }
            }
            t.InvalidCertError = a;
            class s extends Error {
                constructor(e) {
                    super(`Request Failed. Status Code: ${e}`), this.statusCode = e
                }
            }

            function f(e, t) {
                if (!t || "text" === t || "json" === t) try {
                    let r = new TextDecoder("utf8", {
                        fatal: !0
                    }).decode(e);
                    if ("text" === t) return r;
                    try {
                        return JSON.parse(r)
                    } catch (e) {
                        if ("json" === t) throw e;
                        return r
                    }
                } catch (e) {
                    if ("text" === t || "json" === t) throw e
                }
                return e
            }
            t.InvalidStatusCodeError = s;
            let l = {},
                u = new Set(["Accept", "Accept-Language", "Content-Language", "Content-Type"].map(e => e.toLowerCase())),
                h = new Set(["Accept-Charset", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Connection", "Content-Length", "Cookie", "Cookie2", "Date", "DNT", "Expect", "Host", "Keep-Alive", "Origin", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "Via"].map(e => e.toLowerCase()));
            async function c(e, t) {
                let r = { ...o,
                        ...t
                    },
                    n = new Headers;
                "json" === r.type && n.set("Content-Type", "application/json");
                let i = new URL(e);
                if (i.username) {
                    let e = btoa(`${i.username}:${i.password}`);
                    n.set("Authorization", `Basic ${e}`), i.username = "", i.password = ""
                }
                for (let t in e = "" + i, r.headers) {
                    let e = t.toLowerCase();
                    (u.has(e) || r.cors && !h.has(e)) && n.set(t, r.headers[t])
                }
                let a = {
                    headers: n,
                    redirect: r.redirect ? "follow" : "manual"
                };
                r.referrer || (a.referrerPolicy = "no-referrer"), r.cors && (a.mode = "cors"), r.data && (r.method || (a.method = "POST"), a.body = "json" === r.type ? JSON.stringify(r.data) : r.data);
                let l = await fetch(e, a);
                if (r.expectStatusCode && l.status !== r.expectStatusCode) throw new s(l.status);
                let c = f(new Uint8Array(await l.arrayBuffer()), r.type);
                return r.full ? {
                    headers: Object.fromEntries(l.headers.entries()),
                    status: l.status,
                    body: c
                } : c
            }
            let d = !!("object" == typeof i && i.versions && i.versions.node && i.versions.v8);
            t.default = function(e, t) {
                return (d ? function e(t, i) {
                    let u = { ...o,
                            ...i
                        },
                        h = r(47744),
                        c = r(27321),
                        d = r(89343),
                        {
                            promisify: p
                        } = r(84864),
                        {
                            resolve: y
                        } = r(40252),
                        g = !!/^https/.test(t),
                        b = {
                            method: u.method || "GET",
                            headers: {
                                "Accept-Encoding": "gzip, deflate, br"
                            }
                        },
                        m = e => e.replace(/:| /g, "").toLowerCase();
                    if (u.keepAlive) {
                        let e = [g, g && u.sslPinnedCertificates ? .map(e => m(e)).sort()].join();
                        b.agent = l[e] || (l[e] = new(g ? c : h).Agent({
                            keepAlive: !0,
                            keepAliveMsecs: 3e4,
                            maxFreeSockets: 1024,
                            maxCachedSessions: 1024
                        }))
                    }
                    "json" === u.type && (b.headers["Content-Type"] = "application/json"), u.data && (u.method || (b.method = "POST"), b.body = "json" === u.type ? JSON.stringify(u.data) : u.data), b.headers = { ...b.headers,
                        ...u.headers
                    }, u.sslAllowSelfSigned && (b.rejectUnauthorized = !1);
                    let w = async r => {
                        let i = r.statusCode;
                        if (u.redirect && 300 <= i && i < 400 && r.headers.location) {
                            if (10 == u._redirectCount) throw Error("Request failed. Too much redirects.");
                            return u._redirectCount += 1, await e(y(t, r.headers.location), u)
                        }
                        if (u.expectStatusCode && i !== u.expectStatusCode) throw r.resume(), new s(i);
                        let o = [];
                        for await (let e of r) o.push(e);
                        let a = n.concat(o),
                            l = r.headers["content-encoding"];
                        "br" === l && (a = await p(d.brotliDecompress)(a)), ("gzip" === l || "deflate" === l) && (a = await p(d.unzip)(a));
                        let h = f(a, u.type);
                        return u.full ? {
                            headers: r.headers,
                            status: i,
                            body: h
                        } : h
                    };
                    return new Promise((r, n) => {
                        let i = async r => {
                                if (r && "DEPTH_ZERO_SELF_SIGNED_CERT" === r.code) try {
                                    await e(t, { ...u,
                                        sslAllowSelfSigned: !0,
                                        sslPinnedCertificates: []
                                    })
                                } catch (e) {
                                    e && e.fingerprint256 && (r = new a(`Self-signed SSL certificate: ${e.fingerprint256}`, e.fingerprint256))
                                }
                                n(r)
                            },
                            o = (g ? c : h).request(t, b, e => {
                                e.on("error", i), (async () => {
                                    try {
                                        r(await w(e))
                                    } catch (e) {
                                        n(e)
                                    }
                                })()
                            });
                        o.on("error", i);
                        let s = u.sslPinnedCertificates ? .map(e => m(e)),
                            f = e => {
                                let t = m(e.getPeerCertificate() ? .fingerprint256 || "");
                                if (!(!t && e.isSessionReused()) && !s.includes(t)) return o.emit("error", new a(`Invalid SSL certificate: ${t} Expected: ${s}`, t)), o.abort()
                            };
                        u.sslPinnedCertificates && o.on("socket", e => {
                            e.listeners("secureConnect").map(e => (e.name || "").replace("bound ", "")).includes("mfetchSecureConnect") || e.on("secureConnect", f.bind(null, e))
                        }), u.keepAlive && o.setNoDelay(!0), b.body && o.write(b.body), o.end()
                    })
                } : c)(e, t)
            }
        },
        10519: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wNAF = function(e, t) {
                let r = (e, t) => {
                        let r = t.negate();
                        return e ? r : t
                    },
                    n = e => ({
                        windows: Math.ceil(t / e) + 1,
                        windowSize: 2 ** (e - 1)
                    });
                return {
                    constTimeNegate: r,
                    unsafeLadder(t, r) {
                        let n = e.ZERO,
                            i = t;
                        for (; r > o;) r & a && (n = n.add(i)), i = i.double(), r >>= a;
                        return n
                    },
                    precomputeWindow(e, t) {
                        let {
                            windows: r,
                            windowSize: i
                        } = n(t), o = [], a = e, s = a;
                        for (let e = 0; e < r; e++) {
                            s = a, o.push(s);
                            for (let e = 1; e < i; e++) s = s.add(a), o.push(s);
                            a = s.double()
                        }
                        return o
                    },
                    wNAF(t, i, o) {
                        let {
                            windows: s,
                            windowSize: f
                        } = n(t), l = e.ZERO, u = e.BASE, h = BigInt(2 ** t - 1), c = 2 ** t, d = BigInt(t);
                        for (let e = 0; e < s; e++) {
                            let t = e * f,
                                n = Number(o & h);
                            o >>= d, n > f && (n -= c, o += a);
                            let s = t + Math.abs(n) - 1,
                                p = e % 2 != 0,
                                y = n < 0;
                            0 === n ? u = u.add(r(p, i[t])) : l = l.add(r(y, i[s]))
                        }
                        return {
                            p: l,
                            f: u
                        }
                    },
                    wNAFCached(e, t, r, n) {
                        let i = e._WINDOW_SIZE || 1,
                            o = t.get(e);
                        return o || (o = this.precomputeWindow(e, i), 1 !== i && t.set(e, n(o))), this.wNAF(i, o, r)
                    }
                }
            }, t.validateBasic = function(e) {
                return (0, n.validateField)(e.Fp), (0, i.validateObject)(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...(0, n.nLength)(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                })
            };
            let n = r(24738),
                i = r(57953),
                o = BigInt(0),
                a = BigInt(1)
        },
        11460: (e, t, r) => {
            "use strict";
            var n = r(93529),
                i = r(74818),
                o = r(97598),
                a = r(48203),
                s = r(84781),
                f = i(a(), Object);
            n(f, {
                getPolyfill: a,
                implementation: o,
                shim: s
            }), e.exports = f
        },
        11512: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.expand_message_xmd = f, t.expand_message_xof = l, t.hash_to_field = u, t.isogenyMap = function(e, t) {
                let r = t.map(e => Array.from(e).reverse());
                return (t, n) => {
                    let [i, o, a, s] = r.map(r => r.reduce((r, n) => e.add(e.mul(r, t), n)));
                    return t = e.div(i, o), n = e.mul(n, e.div(a, s)), {
                        x: t,
                        y: n
                    }
                }
            }, t.createHasher = function(e, t, r) {
                if ("function" != typeof t) throw Error("mapToCurve() must be defined");
                return {
                    hashToCurve(n, i) {
                        let o = u(n, 2, { ...r,
                                DST: r.DST,
                                ...i
                            }),
                            a = e.fromAffine(t(o[0])),
                            s = e.fromAffine(t(o[1])),
                            f = a.add(s).clearCofactor();
                        return f.assertValidity(), f
                    },
                    encodeToCurve(n, i) {
                        let o = u(n, 1, { ...r,
                                DST: r.encodeDST,
                                ...i
                            }),
                            a = e.fromAffine(t(o[0])).clearCofactor();
                        return a.assertValidity(), a
                    },
                    mapToCurve(r) {
                        if (!Array.isArray(r)) throw Error("mapToCurve: expected array of bigints");
                        for (let e of r)
                            if ("bigint" != typeof e) throw Error(`mapToCurve: expected array of bigints, got ${e} in array`);
                        let n = e.fromAffine(t(r)).clearCofactor();
                        return n.assertValidity(), n
                    }
                }
            };
            let n = r(24738),
                i = r(57953),
                o = i.bytesToNumberBE;

            function a(e, t) {
                if (e < 0 || e >= 1 << 8 * t) throw Error(`bad I2OSP call: value=${e} length=${t}`);
                let r = Array.from({
                    length: t
                }).fill(0);
                for (let n = t - 1; n >= 0; n--) r[n] = 255 & e, e >>>= 8;
                return new Uint8Array(r)
            }

            function s(e) {
                if (!Number.isSafeInteger(e)) throw Error("number expected")
            }

            function f(e, t, r, n) {
                (0, i.abytes)(e), (0, i.abytes)(t), s(r), t.length > 255 && (t = n((0, i.concatBytes)((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)));
                let {
                    outputLen: o,
                    blockLen: f
                } = n, l = Math.ceil(r / o);
                if (l > 255) throw Error("Invalid xmd length");
                let u = (0, i.concatBytes)(t, a(t.length, 1)),
                    h = a(0, f),
                    c = a(r, 2),
                    d = Array(l),
                    p = n((0, i.concatBytes)(h, e, c, a(0, 1), u));
                d[0] = n((0, i.concatBytes)(p, a(1, 1), u));
                for (let e = 1; e <= l; e++) {
                    let t = [function(e, t) {
                        let r = new Uint8Array(e.length);
                        for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
                        return r
                    }(p, d[e - 1]), a(e + 1, 1), u];
                    d[e] = n((0, i.concatBytes)(...t))
                }
                return (0, i.concatBytes)(...d).slice(0, r)
            }

            function l(e, t, r, n, o) {
                if ((0, i.abytes)(e), (0, i.abytes)(t), s(r), t.length > 255) {
                    let e = Math.ceil(2 * n / 8);
                    t = o.create({
                        dkLen: e
                    }).update((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest()
                }
                if (r > 65535 || t.length > 255) throw Error("expand_message_xof: invalid lenInBytes");
                return o.create({
                    dkLen: r
                }).update(e).update(a(r, 2)).update(t).update(a(t.length, 1)).digest()
            }

            function u(e, t, r) {
                let a;
                (0, i.validateObject)(r, {
                    DST: "stringOrUint8Array",
                    p: "bigint",
                    m: "isSafeInteger",
                    k: "isSafeInteger",
                    hash: "hash"
                });
                let {
                    p: u,
                    k: h,
                    m: c,
                    hash: d,
                    expand: p,
                    DST: y
                } = r;
                (0, i.abytes)(e), s(t);
                let g = "string" == typeof y ? (0, i.utf8ToBytes)(y) : y,
                    b = Math.ceil((u.toString(2).length + h) / 8),
                    m = t * c * b;
                if ("xmd" === p) a = f(e, g, m, d);
                else if ("xof" === p) a = l(e, g, m, h, d);
                else if ("_internal_pass" === p) a = e;
                else throw Error('expand must be "xmd" or "xof"');
                let w = Array(t);
                for (let e = 0; e < t; e++) {
                    let t = Array(c);
                    for (let r = 0; r < c; r++) {
                        let i = b * (r + e * c),
                            s = a.subarray(i, i + b);
                        t[r] = (0, n.mod)(o(s), u)
                    }
                    w[e] = t
                }
                return w
            }
        },
        14157: (e, t, r) => {
            "use strict";
            r.d(t, {
                sc: () => h
            });
            var n = r(52344);
            let i = BigInt(0x100000000 - 1),
                o = BigInt(32);
            var a = r(84080);
            let s = Uint32Array.from([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
                f = new Uint32Array(64);
            class l extends n.ol {
                constructor(e = 32) {
                    super(64, e, 8, !1), this.A = 0 | n.yc[0], this.B = 0 | n.yc[1], this.C = 0 | n.yc[2], this.D = 0 | n.yc[3], this.E = 0 | n.yc[4], this.F = 0 | n.yc[5], this.G = 0 | n.yc[6], this.H = 0 | n.yc[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: a,
                        H: s
                    } = this;
                    return [e, t, r, n, i, o, a, s]
                }
                set(e, t, r, n, i, o, a, s) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) f[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = f[e - 15],
                            r = f[e - 2],
                            n = (0, a.Ow)(t, 7) ^ (0, a.Ow)(t, 18) ^ t >>> 3,
                            i = (0, a.Ow)(r, 17) ^ (0, a.Ow)(r, 19) ^ r >>> 10;
                        f[e] = i + f[e - 7] + n + f[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: i,
                        C: o,
                        D: l,
                        E: u,
                        F: h,
                        G: c,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = d + ((0, a.Ow)(u, 6) ^ (0, a.Ow)(u, 11) ^ (0, a.Ow)(u, 25)) + (0, n.r9)(u, h, c) + s[e] + f[e] | 0,
                            p = ((0, a.Ow)(r, 2) ^ (0, a.Ow)(r, 13) ^ (0, a.Ow)(r, 22)) + (0, n.TQ)(r, i, o) | 0;
                        d = c, c = h, h = u, u = l + t | 0, l = o, o = i, i = r, r = t + p | 0
                    }
                    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, l = l + this.D | 0, u = u + this.E | 0, h = h + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, i, o, l, u, h, c, d)
                }
                roundClean() {
                    (0, a.uH)(f)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, a.uH)(this.buffer)
                }
            }
            let u = function(e, t = !1) {
                let r = e.length,
                    n = new Uint32Array(r),
                    a = new Uint32Array(r);
                for (let s = 0; s < r; s++) {
                    let {
                        h: r,
                        l: f
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & i),
                            l: Number(e >> o & i)
                        } : {
                            h: 0 | Number(e >> o & i),
                            l: 0 | Number(e & i)
                        }
                    }(e[s], t);
                    [n[s], a[s]] = [r, f]
                }
                return [n, a]
            }(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e)));
            u[0], u[1], n.ol;
            let h = (0, a.qj)(() => new l)
        },
        14292: (e, t, r) => {
            "use strict";
            var n = r(74818),
                i = r(93529),
                o = r(78030),
                a = r(56315),
                s = r(62397),
                f = n(a(), Number);
            i(f, {
                getPolyfill: a,
                implementation: o,
                shim: s
            }), e.exports = f
        },
        15906: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.byteSwap32 = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = t.isBytes = void 0;
            let n = r(4336),
                i = r(34116);
            t.isBytes = function(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }, t.u8 = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t.u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), t.createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength), t.rotr = (e, t) => e << 32 - t | e >>> t, t.rotl = (e, t) => e << t | e >>> 32 - t >>> 0, t.isLE = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0], t.byteSwap = e => e << 24 & 0xff000000 | e << 8 & 0xff0000 | e >>> 8 & 65280 | e >>> 24 & 255, t.byteSwapIfBE = t.isLE ? e => e : e => (0, t.byteSwap)(e), t.byteSwap32 = function(e) {
                for (let r = 0; r < e.length; r++) e[r] = (0, t.byteSwap)(e[r])
            };
            let o = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            t.bytesToHex = function(e) {
                (0, i.bytes)(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += o[e[r]];
                return t
            };
            let a = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function s(e) {
                return e >= a._0 && e <= a._9 ? e - a._0 : e >= a._A && e <= a._F ? e - (a._A - 10) : e >= a._a && e <= a._f ? e - (a._a - 10) : void 0
            }
            async function f(e, r, n) {
                let i = Date.now();
                for (let o = 0; o < e; o++) {
                    n(o);
                    let e = Date.now() - i;
                    e >= 0 && e < r || (await (0, t.nextTick)(), i += e)
                }
            }

            function l(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function u(e) {
                return "string" == typeof e && (e = l(e)), (0, i.bytes)(e), e
            }
            t.hexToBytes = function(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = s(e.charCodeAt(i)),
                        o = s(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    n[t] = 16 * r + o
                }
                return n
            }, t.nextTick = async () => {}, t.asyncLoop = f, t.utf8ToBytes = l, t.toBytes = u, t.concatBytes = function(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    (0, i.bytes)(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            };
            class h {
                clone() {
                    return this._cloneInto()
                }
            }
            t.Hash = h;
            let c = {}.toString;
            t.checkOpts = function(e, t) {
                if (void 0 !== t && "[object Object]" !== c.call(t)) throw Error("Options should be object or undefined");
                return Object.assign(e, t)
            }, t.wrapConstructor = function(e) {
                let t = t => e().update(u(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }, t.wrapConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(u(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.wrapXOFConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(u(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.randomBytes = function(e = 32) {
                if (n.crypto && "function" == typeof n.crypto.getRandomValues) return n.crypto.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        16888: function(e, t, r) {
            "use strict";
            var n = r(51642).Buffer,
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.rawEncode = t.parseNumber = t.solidityPack = void 0;
            let o = r(43118),
                a = i(r(72289)),
                s = r(67551),
                f = r(91262);

            function l(e) {
                return e.endsWith("]")
            }

            function u(e) {
                let t = e.match(/(.*)\[(.*?)\]$/u);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function h(e) {
                let t = /^\D+(\d+)$/u.exec(e);
                if (null === t) throw Error(`Invalid parseTypeN input "${e}".`);
                return parseInt(t[1], 10)
            }

            function c(e) {
                let t = typeof e;
                if ("string" === t) return (0, o.isHexPrefixed)(e) ? new a.default((0, s.stripHexPrefix)(e), 16) : new a.default(e, 10);
                if ("number" === t) return new a.default(e);
                if (e && Object.prototype.hasOwnProperty.call(e, "toArray") || a.default.isBN(e)) return e;
                throw Error("Argument is not a number")
            }

            function d(e) {
                if (e.startsWith("int[")) return `int256${e.slice(3)}`;
                if ("int" === e) return "int256";
                if (e.startsWith("uint[")) return `uint256${e.slice(4)}`;
                if ("uint" === e) return "uint256";
                if (e.startsWith("fixed[")) return `fixed128x128${e.slice(5)}`;
                else if ("fixed" === e) return "fixed128x128";
                else if (e.startsWith("ufixed[")) return `ufixed128x128${e.slice(6)}`;
                else if ("ufixed" === e) return "ufixed128x128";
                return e
            }

            function p(e, t) {
                if ("address" === e) return p("uint160", c(t));
                if ("bool" === e) return p("uint8", +!!t);
                if ("string" === e) return p("bytes", n.from(t, "utf8"));
                if (l(e)) {
                    if (void 0 === t.length) throw Error("Not an array?");
                    let r = u(e);
                    if ("dynamic" !== r && 0 !== r && null !== r && t.length > r) throw Error(`Elements exceed array size: ${r}`);
                    let i = [];
                    for (let r in e = e.slice(0, e.lastIndexOf("[")), "string" == typeof t && (t = JSON.parse(t)), t) Object.prototype.hasOwnProperty.call(t, r) && i.push(p(e, t[r]));
                    if ("dynamic" === r) {
                        let e = p("uint256", t.length);
                        i.unshift(e)
                    }
                    return n.concat(i)
                }
                if ("bytes" === e) {
                    t = n.from(t);
                    let e = n.concat([p("uint256", t.length), t]);
                    return t.length % 32 != 0 && (e = n.concat([e, (0, o.zeros)(32 - t.length % 32)])), e
                } else if (e.startsWith("bytes")) {
                    let r = h(e);
                    if (r < 1 || r > 32) throw Error(`Invalid bytes<N> width: ${r}`);
                    let n = "number" == typeof t ? (0, f.normalize)(t) : t;
                    return (0, o.setLengthRight)((0, o.toBuffer)(n), 32)
                } else if (e.startsWith("uint")) {
                    let r = h(e);
                    if (r % 8 || r < 8 || r > 256) throw Error(`Invalid uint<N> width: ${r}`);
                    let i = c(t);
                    if (i.bitLength() > r) throw Error(`Supplied uint exceeds width: ${r} vs ${i.bitLength()}`);
                    if (i.isNeg()) throw Error("Supplied uint is negative");
                    return i.toArrayLike(n, "be", 32)
                } else if (e.startsWith("int")) {
                    let r = h(e);
                    if (r % 8 || r < 8 || r > 256) throw Error(`Invalid int<N> width: ${r}`);
                    let i = c(t);
                    if (i.bitLength() > r) throw Error(`Supplied int exceeds width: ${r} vs ${i.bitLength()}`);
                    return i.toTwos(256).toArrayLike(n, "be", 32)
                } else if (e.startsWith("ufixed")) {
                    let r = y(e),
                        n = c(t);
                    if (n.isNeg()) throw Error("Supplied ufixed is negative");
                    return p("uint256", n.mul(new a.default(2).pow(new a.default(r[1]))))
                } else if (e.startsWith("fixed")) {
                    let r = y(e);
                    return p("int256", c(t).mul(new a.default(2).pow(new a.default(r[1]))))
                }
                throw Error(`Unsupported or invalid type: ${JSON.stringify(e)}`)
            }

            function y(e) {
                let t = /^\D+(\d+)x(\d+)$/u.exec(e);
                if (null === t || t.length < 1) throw Error(`Invalid parseTypeNxM input "${e}".`);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }
            t.solidityPack = function(e, t) {
                if (e.length !== t.length) throw Error("Number of types are not matching the values");
                let r = [];
                for (let i = 0; i < e.length; i++) {
                    let a = d(e[i]),
                        s = t[i];
                    r.push(function e(t, r, i) {
                        if (l(t)) {
                            let i = t.replace(/\[.*?\]/u, "");
                            if (!l(i)) {
                                let e = u(t);
                                if ("dynamic" !== e && 0 !== e && null !== e && r.length > e) throw Error(`Elements exceed array size: ${e}`)
                            }
                            let o = r.map(t => e(i, t, 256));
                            return n.concat(o)
                        }
                        if ("bytes" === t) return r;
                        if ("string" === t) return n.from(r, "utf8");
                        if ("bool" === t) {
                            let e = Array((i = i || 8) / 4).join("0");
                            return n.from(r ? `${e}1` : `${e}0`, "hex")
                        }
                        if ("address" === t) {
                            let e = 20;
                            return i && (e = i / 8), (0, o.setLengthLeft)((0, o.toBuffer)(r), e)
                        } else if (t.startsWith("bytes")) {
                            let e = h(t);
                            if (e < 1 || e > 32) throw Error(`Invalid bytes<N> width: ${e}`);
                            return "number" == typeof r && (r = (0, f.normalize)(r)), (0, o.setLengthRight)((0, o.toBuffer)(r), e)
                        } else if (t.startsWith("uint")) {
                            let e = h(t);
                            if (e % 8 || e < 8 || e > 256) throw Error(`Invalid uint<N> width: ${e}`);
                            let o = c(r);
                            if (o.bitLength() > e) throw Error(`Supplied uint exceeds width: ${e} vs ${o.bitLength()}`);
                            return i = i || e, o.toArrayLike(n, "be", i / 8)
                        } else if (t.startsWith("int")) {
                            let e = h(t);
                            if (e % 8 || e < 8 || e > 256) throw Error(`Invalid int<N> width: ${e}`);
                            let o = c(r);
                            if (o.bitLength() > e) throw Error(`Supplied int exceeds width: ${e} vs ${o.bitLength()}`);
                            return i = i || e, o.toTwos(e).toArrayLike(n, "be", i / 8)
                        }
                        throw Error(`Unsupported or invalid type: ${JSON.stringify(t)}`)
                    }(a, s, null))
                }
                return n.concat(r)
            }, t.parseNumber = c, t.rawEncode = function(e, t) {
                let r = [],
                    i = [],
                    o = 0;
                e.forEach(e => {
                    if (l(e)) {
                        let t = u(e);
                        "dynamic" !== t && null !== t ? o += 32 * t : o += 32
                    } else o += 32
                });
                for (let n = 0; n < e.length; n++) {
                    var a;
                    let s = d(e[n]),
                        f = p(s, t[n]);
                    "string" === (a = s) || "bytes" === a || "dynamic" === u(a) ? (r.push(p("uint256", o)), i.push(f), o += f.length) : r.push(f)
                }
                return n.concat(r.concat(i))
            }
        },
        16953: e => {
            e.exports = function(e) {
                if ("string" != typeof e) throw Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed.");
                return "0x" === e.slice(0, 2)
            }
        },
        17486: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.shake256 = t.shake128 = t.keccak_512 = t.keccak_384 = t.keccak_256 = t.keccak_224 = t.sha3_512 = t.sha3_384 = t.sha3_256 = t.sha3_224 = t.Keccak = t.keccakP = void 0;
            let n = r(34116),
                i = r(69855),
                o = r(15906),
                a = [],
                s = [],
                f = [],
                l = BigInt(0),
                u = BigInt(1),
                h = BigInt(2),
                c = BigInt(7),
                d = BigInt(256),
                p = BigInt(113);
            for (let e = 0, t = u, r = 1, n = 0; e < 24; e++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], a.push(2 * (5 * n + r)), s.push((e + 1) * (e + 2) / 2 % 64);
                let i = l;
                for (let e = 0; e < 7; e++)(t = (t << u ^ (t >> c) * p) % d) & h && (i ^= u << (u << BigInt(e)) - u);
                f.push(i)
            }
            let [y, g] = (0, i.split)(f, !0), b = (e, t, r) => r > 32 ? (0, i.rotlBH)(e, t, r) : (0, i.rotlSH)(e, t, r), m = (e, t, r) => r > 32 ? (0, i.rotlBL)(e, t, r) : (0, i.rotlSL)(e, t, r);

            function w(e, t = 24) {
                let r = new Uint32Array(10);
                for (let n = 24 - t; n < 24; n++) {
                    for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                    for (let t = 0; t < 10; t += 2) {
                        let n = (t + 8) % 10,
                            i = (t + 2) % 10,
                            o = r[i],
                            a = r[i + 1],
                            s = b(o, a, 1) ^ r[n],
                            f = m(o, a, 1) ^ r[n + 1];
                        for (let r = 0; r < 50; r += 10) e[t + r] ^= s, e[t + r + 1] ^= f
                    }
                    let t = e[2],
                        i = e[3];
                    for (let r = 0; r < 24; r++) {
                        let n = s[r],
                            o = b(t, i, n),
                            f = m(t, i, n),
                            l = a[r];
                        t = e[l], i = e[l + 1], e[l] = o, e[l + 1] = f
                    }
                    for (let t = 0; t < 50; t += 10) {
                        for (let n = 0; n < 10; n++) r[n] = e[t + n];
                        for (let n = 0; n < 10; n++) e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                    }
                    e[0] ^= y[n], e[1] ^= g[n]
                }
                r.fill(0)
            }
            t.keccakP = w;
            class v extends o.Hash {
                constructor(e, t, r, i = !1, a = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = i, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, n.number)(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, o.u32)(this.state)
                }
                keccak() {
                    o.isLE || (0, o.byteSwap32)(this.state32), w(this.state32, this.rounds), o.isLE || (0, o.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    (0, n.exists)(this);
                    let {
                        blockLen: t,
                        state: r
                    } = this, i = (e = (0, o.toBytes)(e)).length;
                    for (let n = 0; n < i;) {
                        let o = Math.min(t - this.pos, i - n);
                        for (let t = 0; t < o; t++) r[this.pos++] ^= e[n++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: r,
                        blockLen: n
                    } = this;
                    e[r] ^= t, (128 & t) != 0 && r === n - 1 && this.keccak(), e[n - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    (0, n.exists)(this, !1), (0, n.bytes)(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = e.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        let o = Math.min(r - this.posOut, i - n);
                        e.set(t.subarray(this.posOut, this.posOut + o), n), this.posOut += o, n += o
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return (0, n.number)(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if ((0, n.output)(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return e || (e = new v(t, r, n, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = r, e.outputLen = n, e.enableXOF = o, e.destroyed = this.destroyed, e
                }
            }
            t.Keccak = v;
            let _ = (e, t, r) => (0, o.wrapConstructor)(() => new v(t, e, r));
            t.sha3_224 = _(6, 144, 28), t.sha3_256 = _(6, 136, 32), t.sha3_384 = _(6, 104, 48), t.sha3_512 = _(6, 72, 64), t.keccak_224 = _(1, 144, 28), t.keccak_256 = _(1, 136, 32), t.keccak_384 = _(1, 104, 48), t.keccak_512 = _(1, 72, 64);
            let x = (e, t, r) => (0, o.wrapXOFConstructorWithOpts)((n = {}) => new v(t, e, void 0 === n.dkLen ? r : n.dkLen, !0));
            t.shake128 = x(31, 168, 16), t.shake256 = x(31, 136, 32)
        },
        17674: (e, t, r) => {
            "use strict";
            var n;

            function i(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function o(e, t) {
                return !!Array.isArray(t) && (0 === t.length || (e ? t.every(e => "string" == typeof e) : t.every(e => Number.isSafeInteger(e))))
            }

            function a(e) {
                if ("function" != typeof e) throw Error("function expected");
                return !0
            }

            function s(e, t) {
                if ("string" != typeof t) throw Error(`${e}: string expected`);
                return !0
            }

            function f(e) {
                if (!Number.isSafeInteger(e)) throw Error(`invalid integer: ${e}`)
            }

            function l(e) {
                if (!Array.isArray(e)) throw Error("array expected")
            }

            function u(e, t) {
                if (!o(!0, t)) throw Error(`${e}: array of strings expected`)
            }

            function h(e, t) {
                if (!o(!1, t)) throw Error(`${e}: array of numbers expected`)
            }

            function c(...e) {
                let t = e => e,
                    r = (e, t) => r => e(t(r));
                return {
                    encode: e.map(e => e.encode).reduceRight(r, t),
                    decode: e.map(e => e.decode).reduce(r, t)
                }
            }

            function d(e) {
                let t = "string" == typeof e ? e.split("") : e,
                    r = t.length;
                u("alphabet", t);
                let n = new Map(t.map((e, t) => [e, t]));
                return {
                    encode: n => (l(n), n.map(n => {
                        if (!Number.isSafeInteger(n) || n < 0 || n >= r) throw Error(`alphabet.encode: digit index outside alphabet "${n}". Allowed: ${e}`);
                        return t[n]
                    })),
                    decode: t => (l(t), t.map(t => {
                        s("alphabet.decode", t);
                        let r = n.get(t);
                        if (void 0 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
                        return r
                    }))
                }
            }

            function p(e = "") {
                return s("join", e), {
                    encode: t => (u("join.decode", t), t.join(e)),
                    decode: t => (s("join.decode", t), t.split(e))
                }
            }

            function y(e, t, r) {
                if (t < 2) throw Error(`convertRadix: invalid from=${t}, base cannot be less than 2`);
                if (r < 2) throw Error(`convertRadix: invalid to=${r}, base cannot be less than 2`);
                if (l(e), !e.length) return [];
                let n = 0,
                    i = [],
                    o = Array.from(e, e => {
                        if (f(e), e < 0 || e >= t) throw Error(`invalid integer: ${e}`);
                        return e
                    }),
                    a = o.length;
                for (;;) {
                    let e = 0,
                        s = !0;
                    for (let i = n; i < a; i++) {
                        let a = o[i],
                            f = t * e,
                            l = f + a;
                        if (!Number.isSafeInteger(l) || f / t !== e || l - a !== f) throw Error("convertRadix: carry overflow");
                        let u = l / r;
                        e = l % r;
                        let h = Math.floor(u);
                        if (o[i] = h, !Number.isSafeInteger(h) || h * r + e !== l) throw Error("convertRadix: carry overflow");
                        s && (h ? s = !1 : n = i)
                    }
                    if (i.push(e), s) break
                }
                for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
                return i.reverse()
            }
            r.d(t, {
                I: () => T,
                p2: () => R,
                rg: () => S,
                uh: () => M
            });
            let g = (e, t) => 0 === t ? e : g(t, e % t),
                b = (e, t) => e + (t - g(e, t)),
                m = (() => {
                    let e = [];
                    for (let t = 0; t < 40; t++) e.push(2 ** t);
                    return e
                })();

            function w(e, t, r, n) {
                if (l(e), t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
                if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
                if (b(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${b(t,r)}`);
                let i = 0,
                    o = 0,
                    a = m[t],
                    s = m[r] - 1,
                    u = [];
                for (let n of e) {
                    if (f(n), n >= a) throw Error(`convertRadix2: invalid data word=${n} from=${t}`);
                    if (i = i << t | n, o + t > 32) throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
                    for (o += t; o >= r; o -= r) u.push((i >> o - r & s) >>> 0);
                    let e = m[o];
                    if (void 0 === e) throw Error("invalid carry");
                    i &= e - 1
                }
                if (i = i << r - o & s, !n && o >= t) throw Error("Excess padding");
                if (!n && i > 0) throw Error(`Non-zero padding: ${i}`);
                return n && o > 0 && u.push(i >>> 0), u
            }

            function v(e, t = !1) {
                if (f(e), e <= 0 || e > 32) throw Error("radix2: bits should be in (0..32]");
                if (b(8, e) > 32 || b(e, 8) > 32) throw Error("radix2: carry overflow");
                return {
                    encode: r => {
                        if (!i(r)) throw Error("radix2.encode input should be Uint8Array");
                        return w(Array.from(r), 8, e, !t)
                    },
                    decode: r => (h("radix2.decode", r), Uint8Array.from(w(r, e, 8, t)))
                }
            }

            function _(e) {
                return a(e),
                    function(...t) {
                        try {
                            return e.apply(null, t)
                        } catch (e) {}
                    }
            }
            let x = "function" == typeof Uint8Array.from([]).toBase64 && "function" == typeof Uint8Array.fromBase64,
                E = c((n = 58, f(58), {
                    encode: e => {
                        if (!i(e)) throw Error("radix.encode input should be Uint8Array");
                        return y(Array.from(e), 256, 58)
                    },
                    decode: e => (h("radix.decode", e), Uint8Array.from(y(e, 58, 256)))
                }), d("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), p("")),
                S = e => c(function(e, t) {
                    return f(4), a(t), {
                        encode(r) {
                            if (!i(r)) throw Error("checksum.encode: input should be Uint8Array");
                            let n = t(r).slice(0, 4),
                                o = new Uint8Array(r.length + e);
                            return o.set(r), o.set(n, r.length), o
                        },
                        decode(r) {
                            if (!i(r)) throw Error("checksum.decode: input should be Uint8Array");
                            let n = r.slice(0, -e),
                                o = r.slice(-e),
                                a = t(n).slice(0, e);
                            for (let t = 0; t < e; t++)
                                if (a[t] !== o[t]) throw Error("Invalid checksum");
                            return n
                        }
                    }
                }(4, t => e(e(t))), E),
                A = c(d("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), p("")),
                k = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

            function B(e) {
                let t = e >> 25,
                    r = (0x1ffffff & e) << 5;
                for (let e = 0; e < k.length; e++)(t >> e & 1) == 1 && (r ^= k[e]);
                return r
            }

            function O(e, t, r = 1) {
                let n = e.length,
                    i = 1;
                for (let t = 0; t < n; t++) {
                    let r = e.charCodeAt(t);
                    if (r < 33 || r > 126) throw Error(`Invalid prefix (${e})`);
                    i = B(i) ^ r >> 5
                }
                i = B(i);
                for (let t = 0; t < n; t++) i = B(i) ^ 31 & e.charCodeAt(t);
                for (let e of t) i = B(i) ^ e;
                for (let e = 0; e < 6; e++) i = B(i);
                return i ^= r, A.encode(w([i % m[30]], 30, 5, !1))
            }

            function I(e) {
                let t = "bech32" === e ? 1 : 0x2bc830a3,
                    r = v(5),
                    n = r.decode,
                    o = r.encode,
                    a = _(n);

                function f(e, r, n = 90) {
                    s("bech32.encode prefix", e), i(r) && (r = Array.from(r)), h("bech32.encode", r);
                    let o = e.length;
                    if (0 === o) throw TypeError(`Invalid prefix length ${o}`);
                    let a = o + 7 + r.length;
                    if (!1 !== n && a > n) throw TypeError(`Length ${a} exceeds limit ${n}`);
                    let l = e.toLowerCase(),
                        u = O(l, r, t);
                    return `${l}1${A.encode(r)}${u}`
                }

                function l(e, r = 90) {
                    s("bech32.decode input", e);
                    let n = e.length;
                    if (n < 8 || !1 !== r && n > r) throw TypeError(`invalid string length: ${n} (${e}). Expected (8..${r})`);
                    let i = e.toLowerCase();
                    if (e !== i && e !== e.toUpperCase()) throw Error("String must be lowercase or uppercase");
                    let o = i.lastIndexOf("1");
                    if (0 === o || -1 === o) throw Error('Letter "1" must be present between prefix and data only');
                    let a = i.slice(0, o),
                        f = i.slice(o + 1);
                    if (f.length < 6) throw Error("Data must be at least 6 characters long");
                    let u = A.decode(f).slice(0, -6),
                        h = O(a, u, t);
                    if (!f.endsWith(h)) throw Error(`Invalid checksum in ${e}: expected "${h}"`);
                    return {
                        prefix: a,
                        words: u
                    }
                }
                let u = _(l);
                return {
                    encode: f,
                    decode: l,
                    encodeFromBytes: function(e, t) {
                        return f(e, o(t))
                    },
                    decodeToBytes: function(e) {
                        let {
                            prefix: t,
                            words: r
                        } = l(e, !1);
                        return {
                            prefix: t,
                            words: r,
                            bytes: n(r)
                        }
                    },
                    decodeUnsafe: u,
                    fromWords: n,
                    fromWordsUnsafe: a,
                    toWords: o
                }
            }
            let T = I("bech32"),
                R = I("bech32m"),
                M = "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex ? {
                    encode: e => ((function(e, ...t) {
                        if (!i(e)) throw Error("Uint8Array expected");
                        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
                    })(e), e.toHex()),
                    decode: e => (s("hex", e), Uint8Array.fromHex(e))
                } : c(v(4), d("0123456789abcdef"), p(""), function(e) {
                    return a(e), {
                        encode: e => e,
                        decode: t => e(t)
                    }
                }(e => {
                    if ("string" != typeof e || e.length % 2 != 0) throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
                    return e.toLowerCase()
                }))
        },
        23219: (e, t, r) => {
            "use strict";
            r.d(t, {
                Xe: () => X,
                vw: () => _,
                $7: () => d,
                Ug: () => a,
                gX: () => P,
                wg: () => S,
                Ec: () => q,
                ze: () => l,
                o0: () => W,
                yb: () => G,
                d5: () => Y,
                _W: () => x,
                NS: () => i,
                xE: () => L,
                h: () => w,
                CY: () => U,
                Hz: () => N,
                vI: () => E,
                Du: () => c,
                Kt: () => m,
                fi: () => b,
                EM: () => p,
                ZE: () => h,
                lp: () => u,
                LV: () => o,
                rf: () => I,
                wH: () => B,
                I8: () => T
            });
            class n extends Error {
                constructor(e) {
                    let t;
                    super(e instanceof Error ? e.message : "string" == typeof e ? e : ""), this.name = this.constructor.name
                }
            }
            class i extends n {}
            class o extends n {}
            class a extends n {}
            class s extends n {}
            class f extends n {}
            class l extends n {}
            class u extends n {}
            class h extends n {}
            class c extends n {}
            class d extends n {}
            class p extends n {}
            let y = function(e, t) {
                return new Proxy(e, {
                    get: (r, n, i) => n in t ? t[n] : e[n],
                    set: (r, n, i) => (n in t && delete t[n], e[n] = i, !0),
                    deleteProperty(r, n) {
                        let i = !1;
                        return n in t && (delete t[n], i = !0), n in e && (delete e[n], i = !0), i
                    },
                    ownKeys(r) {
                        let n = Reflect.ownKeys(e),
                            i = Reflect.ownKeys(t),
                            o = new Set(i);
                        return [...n.filter(e => !o.has(e)), ...i]
                    },
                    defineProperty: (r, n, i) => (n in t && delete t[n], Reflect.defineProperty(e, n, i), !0),
                    getOwnPropertyDescriptor: (r, n) => n in t ? Reflect.getOwnPropertyDescriptor(t, n) : Reflect.getOwnPropertyDescriptor(e, n),
                    has: (r, n) => n in t || n in e
                })
            }(globalThis, {});
            async function g() {
                if (void 0 !== y && void 0 !== globalThis.crypto) return globalThis.crypto.subtle;
                try {
                    let {
                        webcrypto: e
                    } = await Promise.resolve().then(r.t.bind(r, 62701, 19));
                    return e.subtle
                } catch (e) {
                    throw new p(e)
                }
            }
            class b {
                constructor() {
                    Object.defineProperty(this, "_api", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    })
                }
                async _setup() {
                    void 0 === this._api && (this._api = await g())
                }
            }
            let m = {
                    Base: 0,
                    Psk: 1,
                    Auth: 2,
                    AuthPsk: 3
                },
                w = {
                    NotAssigned: 0,
                    DhkemP256HkdfSha256: 16,
                    DhkemP384HkdfSha384: 17,
                    DhkemP521HkdfSha512: 18,
                    DhkemSecp256k1HkdfSha256: 19,
                    DhkemX25519HkdfSha256: 32,
                    DhkemX448HkdfSha512: 33,
                    HybridkemX25519Kyber768: 48,
                    MlKem512: 64,
                    MlKem768: 65,
                    MlKem1024: 66,
                    XWing: 25722
                },
                v = {
                    HkdfSha256: 1,
                    HkdfSha384: 2,
                    HkdfSha512: 3
                },
                _ = {
                    Aes128Gcm: 1,
                    Aes256Gcm: 2,
                    Chacha20Poly1305: 3,
                    ExportOnly: 65535
                },
                x = 8192,
                E = 32,
                S = new Uint8Array(0),
                A = new Uint8Array([75, 69, 77, 0, 0]),
                k = e => "object" == typeof e && null !== e && "object" == typeof e.privateKey && "object" == typeof e.publicKey;

            function B(e, t) {
                if (t <= 0) throw Error("i2Osp: too small size");
                if (e >= 256 ** t) throw Error("i2Osp: too large integer");
                let r = new Uint8Array(t);
                for (let n = 0; n < t && e; n++) r[t - (n + 1)] = e % 256, e >>= 8;
                return r
            }

            function O(e, t) {
                let r = new Uint8Array(e.length + t.length);
                return r.set(e, 0), r.set(t, e.length), r
            }

            function I(e) {
                let t = atob(e.replace(/-/g, "+").replace(/_/g, "/")),
                    r = new Uint8Array(t.length);
                for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                return r
            }

            function T(e, t) {
                if (e.byteLength !== t.byteLength) throw Error("xor: different length inputs");
                let r = new Uint8Array(e.byteLength);
                for (let n = 0; n < e.byteLength; n++) r[n] = e[n] ^ t[n];
                return r
            }
            let R = new Uint8Array([101, 97, 101, 95, 112, 114, 107]),
                M = new Uint8Array([115, 104, 97, 114, 101, 100, 95, 115, 101, 99, 114, 101, 116]);
            class P {
                constructor(e, t, r) {
                    Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "secretSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "encSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "publicKeySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "privateKeySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "_prim", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_kdf", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.id = e, this._prim = t, this._kdf = r;
                    let n = new Uint8Array(A);
                    n.set(B(this.id, 2), 3), this._kdf.init(n)
                }
                async serializePublicKey(e) {
                    return await this._prim.serializePublicKey(e)
                }
                async deserializePublicKey(e) {
                    return await this._prim.deserializePublicKey(e)
                }
                async serializePrivateKey(e) {
                    return await this._prim.serializePrivateKey(e)
                }
                async deserializePrivateKey(e) {
                    return await this._prim.deserializePrivateKey(e)
                }
                async importKey(e, t, r = !0) {
                    return await this._prim.importKey(e, t, r)
                }
                async generateKeyPair() {
                    return await this._prim.generateKeyPair()
                }
                async deriveKeyPair(e) {
                    if (e.byteLength > x) throw new i("Too long ikm");
                    return await this._prim.deriveKeyPair(e)
                }
                async encap(e) {
                    let t;
                    t = void 0 === e.ekm ? await this.generateKeyPair() : k(e.ekm) ? e.ekm : await this.deriveKeyPair(e.ekm);
                    let r = await this._prim.serializePublicKey(t.publicKey),
                        n = await this._prim.serializePublicKey(e.recipientPublicKey);
                    try {
                        let i, o;
                        if (void 0 === e.senderKey) i = new Uint8Array(await this._prim.dh(t.privateKey, e.recipientPublicKey));
                        else {
                            let r = k(e.senderKey) ? e.senderKey.privateKey : e.senderKey,
                                n = new Uint8Array(await this._prim.dh(t.privateKey, e.recipientPublicKey)),
                                o = new Uint8Array(await this._prim.dh(r, e.recipientPublicKey));
                            i = O(n, o)
                        }
                        if (void 0 === e.senderKey) o = O(new Uint8Array(r), new Uint8Array(n));
                        else {
                            let t = k(e.senderKey) ? e.senderKey.publicKey : await this._prim.derivePublicKey(e.senderKey),
                                i = await this._prim.serializePublicKey(t);
                            o = function(e, t, r) {
                                let n = new Uint8Array(e.length + t.length + r.length);
                                return n.set(e, 0), n.set(t, e.length), n.set(r, e.length + t.length), n
                            }(new Uint8Array(r), new Uint8Array(n), new Uint8Array(i))
                        }
                        let a = await this._generateSharedSecret(i, o);
                        return {
                            enc: r,
                            sharedSecret: a
                        }
                    } catch (e) {
                        throw new s(e)
                    }
                }
                async decap(e) {
                    let t = await this._prim.deserializePublicKey(e.enc),
                        r = k(e.recipientKey) ? e.recipientKey.privateKey : e.recipientKey,
                        n = k(e.recipientKey) ? e.recipientKey.publicKey : await this._prim.derivePublicKey(e.recipientKey),
                        i = await this._prim.serializePublicKey(n);
                    try {
                        let n, o;
                        if (void 0 === e.senderPublicKey) n = new Uint8Array(await this._prim.dh(r, t));
                        else {
                            let i = new Uint8Array(await this._prim.dh(r, t)),
                                o = new Uint8Array(await this._prim.dh(r, e.senderPublicKey));
                            n = O(i, o)
                        }
                        if (void 0 === e.senderPublicKey) o = O(new Uint8Array(e.enc), new Uint8Array(i));
                        else {
                            let t = await this._prim.serializePublicKey(e.senderPublicKey);
                            (o = new Uint8Array(e.enc.byteLength + i.byteLength + t.byteLength)).set(new Uint8Array(e.enc), 0), o.set(new Uint8Array(i), e.enc.byteLength), o.set(new Uint8Array(t), e.enc.byteLength + i.byteLength)
                        }
                        return await this._generateSharedSecret(n, o)
                    } catch (e) {
                        throw new f(e)
                    }
                }
                async _generateSharedSecret(e, t) {
                    let r = this._kdf.buildLabeledIkm(R, e),
                        n = this._kdf.buildLabeledInfo(M, t, this.secretSize);
                    return await this._kdf.extractAndExpand(S.buffer, r.buffer, n.buffer, this.secretSize)
                }
            }
            let L = ["deriveBits"],
                U = new Uint8Array([100, 107, 112, 95, 112, 114, 107]),
                N = new Uint8Array([115, 107]);
            class C {
                constructor(e) {
                    Object.defineProperty(this, "_num", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this._num = new Uint8Array(e)
                }
                val() {
                    return this._num
                }
                reset() {
                    this._num.fill(0)
                }
                set(e) {
                    if (e.length !== this._num.length) throw Error("Bignum.set: invalid argument");
                    this._num.set(e)
                }
                isZero() {
                    for (let e = 0; e < this._num.length; e++)
                        if (0 !== this._num[e]) return !1;
                    return !0
                }
                lessThan(e) {
                    if (e.length !== this._num.length) throw Error("Bignum.lessThan: invalid argument");
                    for (let t = 0; t < this._num.length; t++) {
                        if (this._num[t] < e[t]) return !0;
                        if (this._num[t] > e[t]) break
                    }
                    return !1
                }
            }
            let j = new Uint8Array([99, 97, 110, 100, 105, 100, 97, 116, 101]),
                H = new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 188, 230, 250, 173, 167, 23, 158, 132, 243, 185, 202, 194, 252, 99, 37, 81]),
                D = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 199, 99, 77, 129, 244, 55, 45, 223, 88, 26, 13, 178, 72, 176, 167, 122, 236, 236, 25, 106, 204, 197, 41, 115]),
                K = new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 81, 134, 135, 131, 191, 47, 150, 107, 127, 204, 1, 72, 247, 9, 165, 208, 59, 181, 201, 184, 137, 156, 71, 174, 187, 111, 183, 30, 145, 56, 100, 9]),
                $ = new Uint8Array([48, 65, 2, 1, 0, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 4, 39, 48, 37, 2, 1, 1, 4, 32]),
                z = new Uint8Array([48, 78, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 34, 4, 55, 48, 53, 2, 1, 1, 4, 48]),
                F = new Uint8Array([48, 96, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 35, 4, 73, 48, 71, 2, 1, 1, 4, 66]);
            class q extends b {
                constructor(e, t) {
                    switch (super(), Object.defineProperty(this, "_hkdf", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_alg", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_nPk", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_nSk", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_nDh", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_order", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_bitmask", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_pkcs8AlgId", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this._hkdf = t, e) {
                        case w.DhkemP256HkdfSha256:
                            this._alg = {
                                name: "ECDH",
                                namedCurve: "P-256"
                            }, this._nPk = 65, this._nSk = 32, this._nDh = 32, this._order = H, this._bitmask = 255, this._pkcs8AlgId = $;
                            break;
                        case w.DhkemP384HkdfSha384:
                            this._alg = {
                                name: "ECDH",
                                namedCurve: "P-384"
                            }, this._nPk = 97, this._nSk = 48, this._nDh = 48, this._order = D, this._bitmask = 255, this._pkcs8AlgId = z;
                            break;
                        default:
                            this._alg = {
                                name: "ECDH",
                                namedCurve: "P-521"
                            }, this._nPk = 133, this._nSk = 66, this._nDh = 66, this._order = K, this._bitmask = 1, this._pkcs8AlgId = F
                    }
                }
                async serializePublicKey(e) {
                    await this._setup();
                    try {
                        return await this._api.exportKey("raw", e)
                    } catch (e) {
                        throw new o(e)
                    }
                }
                async deserializePublicKey(e) {
                    await this._setup();
                    try {
                        return await this._importRawKey(e, !0)
                    } catch (e) {
                        throw new a(e)
                    }
                }
                async serializePrivateKey(e) {
                    await this._setup();
                    try {
                        let t = await this._api.exportKey("jwk", e);
                        if (!("d" in t)) throw Error("Not private key");
                        return I(t.d).buffer
                    } catch (e) {
                        throw new o(e)
                    }
                }
                async deserializePrivateKey(e) {
                    await this._setup();
                    try {
                        return await this._importRawKey(e, !1)
                    } catch (e) {
                        throw new a(e)
                    }
                }
                async importKey(e, t, r) {
                    await this._setup();
                    try {
                        if ("raw" === e) return await this._importRawKey(t, r);
                        if (t instanceof ArrayBuffer) throw Error("Invalid jwk key format");
                        return await this._importJWK(t, r)
                    } catch (e) {
                        throw new a(e)
                    }
                }
                async generateKeyPair() {
                    await this._setup();
                    try {
                        return await this._api.generateKey(this._alg, !0, L)
                    } catch (e) {
                        throw new p(e)
                    }
                }
                async deriveKeyPair(e) {
                    await this._setup();
                    try {
                        let t = await this._hkdf.labeledExtract(S.buffer, U, new Uint8Array(e)),
                            r = new C(this._nSk);
                        for (let e = 0; r.isZero() || !r.lessThan(this._order); e++) {
                            if (e > 255) throw Error("Faild to derive a key pair");
                            let n = new Uint8Array(await this._hkdf.labeledExpand(t, j, B(e, 1), this._nSk));
                            n[0] = n[0] & this._bitmask, r.set(n)
                        }
                        let n = await this._deserializePkcs8Key(r.val());
                        return r.reset(), {
                            privateKey: n,
                            publicKey: await this.derivePublicKey(n)
                        }
                    } catch (e) {
                        throw new d(e)
                    }
                }
                async derivePublicKey(e) {
                    await this._setup();
                    try {
                        let t = await this._api.exportKey("jwk", e);
                        return delete t.d, delete t.key_ops, await this._api.importKey("jwk", t, this._alg, !0, [])
                    } catch (e) {
                        throw new a(e)
                    }
                }
                async dh(e, t) {
                    try {
                        return await this._setup(), await this._api.deriveBits({
                            name: "ECDH",
                            public: t
                        }, e, 8 * this._nDh)
                    } catch (e) {
                        throw new o(e)
                    }
                }
                async _importRawKey(e, t) {
                    if (t && e.byteLength !== this._nPk) throw Error("Invalid public key for the ciphersuite");
                    if (!t && e.byteLength !== this._nSk) throw Error("Invalid private key for the ciphersuite");
                    return t ? await this._api.importKey("raw", e, this._alg, !0, []) : await this._deserializePkcs8Key(new Uint8Array(e))
                }
                async _importJWK(e, t) {
                    if (void 0 === e.crv || e.crv !== this._alg.namedCurve) throw Error(`Invalid crv: ${e.crv}`);
                    if (t) {
                        if (void 0 !== e.d) throw Error("Invalid key: `d` should not be set");
                        return await this._api.importKey("jwk", e, this._alg, !0, [])
                    }
                    if (void 0 === e.d) throw Error("Invalid key: `d` not found");
                    return await this._api.importKey("jwk", e, this._alg, !0, L)
                }
                async _deserializePkcs8Key(e) {
                    let t = new Uint8Array(this._pkcs8AlgId.length + e.length);
                    return t.set(this._pkcs8AlgId, 0), t.set(e, this._pkcs8AlgId.length), await this._api.importKey("pkcs8", t, this._alg, !0, L)
                }
            }
            let Z = new Uint8Array([72, 80, 75, 69, 45, 118, 49]);
            class V extends b {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: v.HkdfSha256
                    }), Object.defineProperty(this, "hashSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "_suiteId", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: S
                    }), Object.defineProperty(this, "algHash", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            name: "HMAC",
                            hash: "SHA-256",
                            length: 256
                        }
                    })
                }
                init(e) {
                    this._suiteId = e
                }
                buildLabeledIkm(e, t) {
                    this._checkInit();
                    let r = new Uint8Array(7 + this._suiteId.byteLength + e.byteLength + t.byteLength);
                    return r.set(Z, 0), r.set(this._suiteId, 7), r.set(e, 7 + this._suiteId.byteLength), r.set(t, 7 + this._suiteId.byteLength + e.byteLength), r
                }
                buildLabeledInfo(e, t, r) {
                    this._checkInit();
                    let n = new Uint8Array(9 + this._suiteId.byteLength + e.byteLength + t.byteLength);
                    return n.set(new Uint8Array([0, r]), 0), n.set(Z, 2), n.set(this._suiteId, 9), n.set(e, 9 + this._suiteId.byteLength), n.set(t, 9 + this._suiteId.byteLength + e.byteLength), n
                }
                async extract(e, t) {
                    if (await this._setup(), 0 === e.byteLength && (e = new ArrayBuffer(this.hashSize)), e.byteLength !== this.hashSize) throw new i("The salt length must be the same as the hashSize");
                    let r = await this._api.importKey("raw", e, this.algHash, !1, ["sign"]);
                    return await this._api.sign("HMAC", r, t)
                }
                async expand(e, t, r) {
                    await this._setup();
                    let n = await this._api.importKey("raw", e, this.algHash, !1, ["sign"]),
                        i = new ArrayBuffer(r),
                        o = new Uint8Array(i),
                        a = S,
                        s = new Uint8Array(t),
                        f = new Uint8Array(1);
                    if (r > 255 * this.hashSize) throw Error("Entropy limit reached");
                    let l = new Uint8Array(this.hashSize + s.length + 1);
                    for (let e = 1, t = 0; t < o.length; e++) f[0] = e, l.set(a, 0), l.set(s, a.length), l.set(f, a.length + s.length), a = new Uint8Array(await this._api.sign("HMAC", n, l.slice(0, a.length + s.length + 1))), o.length - t >= a.length ? (o.set(a, t), t += a.length) : (o.set(a.slice(0, o.length - t), t), t += o.length - t);
                    return i
                }
                async extractAndExpand(e, t, r, n) {
                    await this._setup();
                    let i = await this._api.importKey("raw", t, "HKDF", !1, ["deriveBits"]);
                    return await this._api.deriveBits({
                        name: "HKDF",
                        hash: this.algHash.hash,
                        salt: e,
                        info: r
                    }, i, 8 * n)
                }
                async labeledExtract(e, t, r) {
                    return await this.extract(e, this.buildLabeledIkm(t, r).buffer)
                }
                async labeledExpand(e, t, r, n) {
                    return await this.expand(e, this.buildLabeledInfo(t, r, n).buffer, n)
                }
                _checkInit() {
                    if (this._suiteId === S) throw Error("Not initialized. Call init()")
                }
            }
            class W extends V {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: v.HkdfSha256
                    }), Object.defineProperty(this, "hashSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 32
                    }), Object.defineProperty(this, "algHash", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            name: "HMAC",
                            hash: "SHA-256",
                            length: 256
                        }
                    })
                }
            }
            class G extends V {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: v.HkdfSha384
                    }), Object.defineProperty(this, "hashSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 48
                    }), Object.defineProperty(this, "algHash", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            name: "HMAC",
                            hash: "SHA-384",
                            length: 384
                        }
                    })
                }
            }
            class Y extends V {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: v.HkdfSha512
                    }), Object.defineProperty(this, "hashSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 64
                    }), Object.defineProperty(this, "algHash", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            name: "HMAC",
                            hash: "SHA-512",
                            length: 512
                        }
                    })
                }
            }
            let X = ["encrypt", "decrypt"]
        },
        24146: (e, t, r) => {
            "use strict";
            r.d(t, {
                ws: () => a,
                GR: () => S,
                RG: () => A,
                v7: () => k
            });
            var n = r(23219);
            class i extends n.fi {
                constructor(e) {
                    super(), Object.defineProperty(this, "_rawKey", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_key", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this._rawKey = e
                }
                async seal(e, t, r) {
                    return await this._setupKey(), await this._api.encrypt({
                        name: "AES-GCM",
                        iv: e,
                        additionalData: r
                    }, this._key, t)
                }
                async open(e, t, r) {
                    return await this._setupKey(), await this._api.decrypt({
                        name: "AES-GCM",
                        iv: e,
                        additionalData: r
                    }, this._key, t)
                }
                async _setupKey() {
                    if (void 0 !== this._key) return;
                    await this._setup();
                    let e = await this._importKey(this._rawKey);
                    new Uint8Array(this._rawKey).fill(0), this._key = e
                }
                async _importKey(e) {
                    return await this._api.importKey("raw", e, {
                        name: "AES-GCM"
                    }, !0, n.Xe)
                }
            }
            class o {
                constructor() {
                    Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n.vw.Aes128Gcm
                    }), Object.defineProperty(this, "keySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 16
                    }), Object.defineProperty(this, "nonceSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 12
                    }), Object.defineProperty(this, "tagSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 16
                    })
                }
                createEncryptionContext(e) {
                    return new i(e)
                }
            }
            class a extends o {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n.vw.Aes256Gcm
                    }), Object.defineProperty(this, "keySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 32
                    }), Object.defineProperty(this, "nonceSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 12
                    }), Object.defineProperty(this, "tagSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 16
                    })
                }
            }

            function s() {
                return new Promise((e, t) => {
                    t(new n.EM("Not supported"))
                })
            }
            let f = new Uint8Array([115, 101, 99]);
            class l {
                constructor(e, t, r) {
                    Object.defineProperty(this, "_api", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "exporterSecret", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "_kdf", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this._api = e, this._kdf = t, this.exporterSecret = r
                }
                async seal(e, t) {
                    return await s()
                }
                async open(e, t) {
                    return await s()
                }
                async
                export (e, t) {
                    if (e.byteLength > n._W) throw new n.NS("Too long exporter context");
                    try {
                        return await this._kdf.labeledExpand(this.exporterSecret, f, new Uint8Array(e), t)
                    } catch (e) {
                        throw new n.ze(e)
                    }
                }
            }
            class u extends l {}
            class h extends l {
                constructor(e, t, r, n) {
                    super(e, t, r), Object.defineProperty(this, "enc", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.enc = n;
                    return
                }
            }
            class c extends l {
                constructor(e, t, r) {
                    if (super(e, t, r.exporterSecret), Object.defineProperty(this, "_aead", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_nK", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_nN", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_nT", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_ctx", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), void 0 === r.key || void 0 === r.baseNonce || void 0 === r.seq) throw Error("Required parameters are missing");
                    this._aead = r.aead, this._nK = this._aead.keySize, this._nN = this._aead.nonceSize, this._nT = this._aead.tagSize;
                    let n = this._aead.createEncryptionContext(r.key);
                    this._ctx = {
                        key: n,
                        baseNonce: r.baseNonce,
                        seq: r.seq
                    }
                }
                computeNonce(e) {
                    let t = (0, n.wH)(e.seq, e.baseNonce.byteLength);
                    return (0, n.I8)(e.baseNonce, t).buffer
                }
                incrementSeq(e) {
                    if (e.seq > Number.MAX_SAFE_INTEGER) throw new n.Du("Message limit reached");
                    e.seq += 1
                }
            }
            class d extends c {
                async open(e, t = n.wg.buffer) {
                    let r;
                    try {
                        r = await this._ctx.key.open(this.computeNonce(this._ctx), e, t)
                    } catch (e) {
                        throw new n.ZE(e)
                    }
                    return this.incrementSeq(this._ctx), r
                }
            }
            class p extends c {
                constructor(e, t, r, n) {
                    super(e, t, r), Object.defineProperty(this, "enc", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.enc = n
                }
                async seal(e, t = n.wg.buffer) {
                    let r;
                    try {
                        r = await this._ctx.key.seal(this.computeNonce(this._ctx), e, t)
                    } catch (e) {
                        throw new n.lp(e)
                    }
                    return this.incrementSeq(this._ctx), r
                }
            }
            let y = new Uint8Array([98, 97, 115, 101, 95, 110, 111, 110, 99, 101]),
                g = new Uint8Array([101, 120, 112]),
                b = new Uint8Array([105, 110, 102, 111, 95, 104, 97, 115, 104]),
                m = new Uint8Array([107, 101, 121]),
                w = new Uint8Array([112, 115, 107, 95, 105, 100, 95, 104, 97, 115, 104]),
                v = new Uint8Array([115, 101, 99, 114, 101, 116]),
                _ = new Uint8Array([72, 80, 75, 69, 0, 0, 0, 0, 0, 0]);
            class x extends n.fi {
                constructor(e) {
                    if (super(), Object.defineProperty(this, "_kem", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_kdf", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_aead", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "_suiteId", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), "number" == typeof e.kem) throw new n.NS("KemId cannot be used");
                    if (this._kem = e.kem, "number" == typeof e.kdf) throw new n.NS("KdfId cannot be used");
                    if (this._kdf = e.kdf, "number" == typeof e.aead) throw new n.NS("AeadId cannot be used");
                    this._aead = e.aead, this._suiteId = new Uint8Array(_), this._suiteId.set((0, n.wH)(this._kem.id, 2), 4), this._suiteId.set((0, n.wH)(this._kdf.id, 2), 6), this._suiteId.set((0, n.wH)(this._aead.id, 2), 8), this._kdf.init(this._suiteId)
                }
                get kem() {
                    return this._kem
                }
                get kdf() {
                    return this._kdf
                }
                get aead() {
                    return this._aead
                }
                async createSenderContext(e) {
                    let t;
                    this._validateInputLength(e), await this._setup();
                    let r = await this._kem.encap(e);
                    return t = void 0 !== e.psk ? void 0 !== e.senderKey ? n.Kt.AuthPsk : n.Kt.Psk : void 0 !== e.senderKey ? n.Kt.Auth : n.Kt.Base, await this._keyScheduleS(t, r.sharedSecret, r.enc, e)
                }
                async createRecipientContext(e) {
                    let t;
                    this._validateInputLength(e), await this._setup();
                    let r = await this._kem.decap(e);
                    return t = void 0 !== e.psk ? void 0 !== e.senderPublicKey ? n.Kt.AuthPsk : n.Kt.Psk : void 0 !== e.senderPublicKey ? n.Kt.Auth : n.Kt.Base, await this._keyScheduleR(t, r, e)
                }
                async seal(e, t, r = n.wg.buffer) {
                    let i = await this.createSenderContext(e);
                    return {
                        ct: await i.seal(t, r),
                        enc: i.enc
                    }
                }
                async open(e, t, r = n.wg.buffer) {
                    let i = await this.createRecipientContext(e);
                    return await i.open(t, r)
                }
                async _keySchedule(e, t, r) {
                    let i = void 0 === r.psk ? n.wg : new Uint8Array(r.psk.id),
                        o = await this._kdf.labeledExtract(n.wg.buffer, w, i),
                        a = void 0 === r.info ? n.wg : new Uint8Array(r.info),
                        s = await this._kdf.labeledExtract(n.wg.buffer, b, a),
                        f = new Uint8Array(1 + o.byteLength + s.byteLength);
                    f.set(new Uint8Array([e]), 0), f.set(new Uint8Array(o), 1), f.set(new Uint8Array(s), 1 + o.byteLength);
                    let l = void 0 === r.psk ? n.wg : new Uint8Array(r.psk.key),
                        u = this._kdf.buildLabeledIkm(v, l).buffer,
                        h = this._kdf.buildLabeledInfo(g, f, this._kdf.hashSize).buffer,
                        c = await this._kdf.extractAndExpand(t, u, h, this._kdf.hashSize);
                    if (this._aead.id === n.vw.ExportOnly) return {
                        aead: this._aead,
                        exporterSecret: c
                    };
                    let d = this._kdf.buildLabeledInfo(m, f, this._aead.keySize).buffer,
                        p = await this._kdf.extractAndExpand(t, u, d, this._aead.keySize),
                        _ = this._kdf.buildLabeledInfo(y, f, this._aead.nonceSize).buffer,
                        x = await this._kdf.extractAndExpand(t, u, _, this._aead.nonceSize);
                    return {
                        aead: this._aead,
                        exporterSecret: c,
                        key: p,
                        baseNonce: new Uint8Array(x),
                        seq: 0
                    }
                }
                async _keyScheduleS(e, t, r, n) {
                    let i = await this._keySchedule(e, t, n);
                    return void 0 === i.key ? new h(this._api, this._kdf, i.exporterSecret, r) : new p(this._api, this._kdf, i, r)
                }
                async _keyScheduleR(e, t, r) {
                    let n = await this._keySchedule(e, t, r);
                    return void 0 === n.key ? new u(this._api, this._kdf, n.exporterSecret) : new d(this._api, this._kdf, n)
                }
                _validateInputLength(e) {
                    if (void 0 !== e.info && e.info.byteLength > n._W) throw new n.NS("Too long info");
                    if (void 0 !== e.psk) {
                        if (e.psk.key.byteLength < n.vI) throw new n.NS(`PSK must have at least ${n.vI} bytes`);
                        if (e.psk.key.byteLength > n._W) throw new n.NS("Too long psk.key");
                        if (e.psk.id.byteLength > n._W) throw new n.NS("Too long psk.id")
                    }
                }
            }
            class E extends n.gX {
                constructor() {
                    let e = new n.o0;
                    super(n.h.DhkemP256HkdfSha256, new n.Ec(n.h.DhkemP256HkdfSha256, e), e), Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n.h.DhkemP256HkdfSha256
                    }), Object.defineProperty(this, "secretSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 32
                    }), Object.defineProperty(this, "encSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 65
                    }), Object.defineProperty(this, "publicKeySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 65
                    }), Object.defineProperty(this, "privateKeySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 32
                    })
                }
            }
            n.gX, n.gX;
            class S extends x {}
            class A extends E {}
            class k extends n.o0 {}
            let B = "X25519",
                O = new Uint8Array([48, 46, 2, 1, 0, 48, 5, 6, 3, 43, 101, 110, 4, 34, 4, 32]);
            n.fi, n.gX;
            let I = "X448",
                T = new Uint8Array([48, 70, 2, 1, 0, 48, 5, 6, 3, 43, 101, 111, 4, 58, 4, 56]);
            n.fi, n.gX
        },
        24738: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isNegativeLE = void 0, t.mod = h, t.pow = c, t.pow2 = function(e, t, r) {
                let n = e;
                for (; t-- > i;) n *= n, n %= r;
                return n
            }, t.invert = d, t.tonelliShanks = p, t.FpSqrt = y, t.validateField = function(e) {
                let t = g.reduce((e, t) => (e[t] = "function", e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                });
                return (0, n.validateObject)(e, t)
            }, t.FpPow = b, t.FpInvertBatch = m, t.FpDiv = function(e, t, r) {
                return e.mul(t, "bigint" == typeof r ? d(r, e.ORDER) : e.inv(r))
            }, t.FpIsSquare = function(e) {
                let t = (e.ORDER - o) / a;
                return r => {
                    let n = e.pow(r, t);
                    return e.eql(n, e.ZERO) || e.eql(n, e.ONE)
                }
            }, t.nLength = w, t.Field = function(e, t, r = !1, a = {}) {
                if (e <= i) throw Error(`Expected Field ORDER > 0, got ${e}`);
                let {
                    nBitLength: s,
                    nByteLength: f
                } = w(e, t);
                if (f > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                let l = y(e),
                    u = Object.freeze({
                        ORDER: e,
                        BITS: s,
                        BYTES: f,
                        MASK: (0, n.bitMask)(s),
                        ZERO: i,
                        ONE: o,
                        create: t => h(t, e),
                        isValid: t => {
                            if ("bigint" != typeof t) throw Error(`Invalid field element: expected bigint, got ${typeof t}`);
                            return i <= t && t < e
                        },
                        is0: e => e === i,
                        isOdd: e => (e & o) === o,
                        neg: t => h(-t, e),
                        eql: (e, t) => e === t,
                        sqr: t => h(t * t, e),
                        add: (t, r) => h(t + r, e),
                        sub: (t, r) => h(t - r, e),
                        mul: (t, r) => h(t * r, e),
                        pow: (e, t) => b(u, e, t),
                        div: (t, r) => h(t * d(r, e), e),
                        sqrN: e => e * e,
                        addN: (e, t) => e + t,
                        subN: (e, t) => e - t,
                        mulN: (e, t) => e * t,
                        inv: t => d(t, e),
                        sqrt: a.sqrt || (e => l(u, e)),
                        invertBatch: e => m(u, e),
                        cmov: (e, t, r) => r ? t : e,
                        toBytes: e => r ? (0, n.numberToBytesLE)(e, f) : (0, n.numberToBytesBE)(e, f),
                        fromBytes: e => {
                            if (e.length !== f) throw Error(`Fp.fromBytes: expected ${f}, got ${e.length}`);
                            return r ? (0, n.bytesToNumberLE)(e) : (0, n.bytesToNumberBE)(e)
                        }
                    });
                return Object.freeze(u)
            }, t.FpSqrtOdd = function(e, t) {
                if (!e.isOdd) throw Error("Field doesn't have isOdd");
                let r = e.sqrt(t);
                return e.isOdd(r) ? r : e.neg(r)
            }, t.FpSqrtEven = function(e, t) {
                if (!e.isOdd) throw Error("Field doesn't have isOdd");
                let r = e.sqrt(t);
                return e.isOdd(r) ? e.neg(r) : r
            }, t.hashToPrivateScalar = function(e, t, r = !1) {
                let i = (e = (0, n.ensureBytes)("privateHash", e)).length,
                    a = w(t).nByteLength + 8;
                if (a < 24 || i < a || i > 1024) throw Error(`hashToPrivateScalar: expected ${a}-1024 bytes of input, got ${i}`);
                return h(r ? (0, n.bytesToNumberLE)(e) : (0, n.bytesToNumberBE)(e), t - o) + o
            }, t.getFieldBytesLength = v, t.getMinHashLength = _, t.mapHashToField = function(e, t, r = !1) {
                let i = e.length,
                    a = v(t),
                    s = _(t);
                if (i < 16 || i < s || i > 1024) throw Error(`expected ${s}-1024 bytes of input, got ${i}`);
                let f = h(r ? (0, n.bytesToNumberBE)(e) : (0, n.bytesToNumberLE)(e), t - o) + o;
                return r ? (0, n.numberToBytesLE)(f, a) : (0, n.numberToBytesBE)(f, a)
            };
            let n = r(57953),
                i = BigInt(0),
                o = BigInt(1),
                a = BigInt(2),
                s = BigInt(3),
                f = BigInt(4),
                l = BigInt(5),
                u = BigInt(8);

            function h(e, t) {
                let r = e % t;
                return r >= i ? r : t + r
            }

            function c(e, t, r) {
                if (r <= i || t < i) throw Error("Expected power/modulo > 0");
                if (r === o) return i;
                let n = o;
                for (; t > i;) t & o && (n = n * e % r), e = e * e % r, t >>= o;
                return n
            }

            function d(e, t) {
                if (e === i || t <= i) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
                let r = h(e, t),
                    n = t,
                    a = i,
                    s = o,
                    f = o,
                    l = i;
                for (; r !== i;) {
                    let e = n / r,
                        t = n % r,
                        i = a - f * e,
                        o = s - l * e;
                    n = r, r = t, a = f, s = l, f = i, l = o
                }
                if (n !== o) throw Error("invert: does not exist");
                return h(a, t)
            }

            function p(e) {
                let t, r, n;
                let s = (e - o) / a;
                for (t = e - o, r = 0; t % a === i; t /= a, r++);
                for (n = a; n < e && c(n, s, e) !== e - o; n++);
                if (1 === r) {
                    let t = (e + o) / f;
                    return function(e, r) {
                        let n = e.pow(r, t);
                        if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                        return n
                    }
                }
                let l = (t + o) / a;
                return function(e, i) {
                    if (e.pow(i, s) === e.neg(e.ONE)) throw Error("Cannot find square root");
                    let a = r,
                        f = e.pow(e.mul(e.ONE, n), t),
                        u = e.pow(i, l),
                        h = e.pow(i, t);
                    for (; !e.eql(h, e.ONE);) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(f, o << BigInt(a - t - 1));
                        f = e.sqr(r), u = e.mul(u, r), h = e.mul(h, f), a = t
                    }
                    return u
                }
            }

            function y(e) {
                if (e % f === s) {
                    let t = (e + o) / f;
                    return function(e, r) {
                        let n = e.pow(r, t);
                        if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                        return n
                    }
                }
                if (e % u === l) {
                    let t = (e - l) / u;
                    return function(e, r) {
                        let n = e.mul(r, a),
                            i = e.pow(n, t),
                            o = e.mul(r, i),
                            s = e.mul(e.mul(o, a), i),
                            f = e.mul(o, e.sub(s, e.ONE));
                        if (!e.eql(e.sqr(f), r)) throw Error("Cannot find square root");
                        return f
                    }
                }
                return p(e)
            }
            BigInt(9), BigInt(16), t.isNegativeLE = (e, t) => (h(e, t) & o) === o;
            let g = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function b(e, t, r) {
                if (r < i) throw Error("Expected power > 0");
                if (r === i) return e.ONE;
                if (r === o) return t;
                let n = e.ONE,
                    a = t;
                for (; r > i;) r & o && (n = e.mul(n, a)), a = e.sqr(a), r >>= o;
                return n
            }

            function m(e, t) {
                let r = Array(t.length),
                    n = t.reduce((t, n, i) => e.is0(n) ? t : (r[i] = t, e.mul(t, n)), e.ONE),
                    i = e.inv(n);
                return t.reduceRight((t, n, i) => e.is0(n) ? t : (r[i] = e.mul(t, r[i]), e.mul(t, n)), i), r
            }

            function w(e, t) {
                let r = void 0 !== t ? t : e.toString(2).length,
                    n = Math.ceil(r / 8);
                return {
                    nBitLength: r,
                    nByteLength: n
                }
            }

            function v(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                return Math.ceil(e.toString(2).length / 8)
            }

            function _(e) {
                let t = v(e);
                return t + Math.ceil(t / 2)
            }
        },
        25929: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Withdrawal = void 0;
            let i = r(46066),
                o = r(50797),
                a = r(83059);
            class s {
                constructor(e, t, r, n) {
                    this.index = e, this.validatorIndex = t, this.address = r, this.amount = n
                }
                static fromWithdrawalData(e) {
                    let {
                        index: t,
                        validatorIndex: r,
                        address: n,
                        amount: o
                    } = e, f = (0, a.toType)(t, a.TypeOutput.BigInt), l = (0, a.toType)(r, a.TypeOutput.BigInt);
                    return new s(f, l, new i.Address((0, a.toType)(n, a.TypeOutput.Buffer)), (0, a.toType)(o, a.TypeOutput.BigInt))
                }
                static fromValuesArray(e) {
                    if (4 !== e.length) throw Error(`Invalid withdrawalArray length expected=4 actual=${e.length}`);
                    let [t, r, n, i] = e;
                    return s.fromWithdrawalData({
                        index: t,
                        validatorIndex: r,
                        address: n,
                        amount: i
                    })
                }
                static toBufferArray(e) {
                    let {
                        index: t,
                        validatorIndex: r,
                        address: o,
                        amount: s
                    } = e, f = (0, a.toType)(t, a.TypeOutput.BigInt) === BigInt(0) ? n.alloc(0) : (0, a.toType)(t, a.TypeOutput.Buffer);
                    return [f, (0, a.toType)(r, a.TypeOutput.BigInt) === BigInt(0) ? n.alloc(0) : (0, a.toType)(r, a.TypeOutput.Buffer), o instanceof i.Address ? o.buf : (0, a.toType)(o, a.TypeOutput.Buffer), (0, a.toType)(s, a.TypeOutput.BigInt) === BigInt(0) ? n.alloc(0) : (0, a.toType)(s, a.TypeOutput.Buffer)]
                }
                raw() {
                    return s.toBufferArray(this)
                }
                toValue() {
                    return {
                        index: this.index,
                        validatorIndex: this.validatorIndex,
                        address: this.address.buf,
                        amount: this.amount
                    }
                }
                toJSON() {
                    return {
                        index: (0, o.bigIntToHex)(this.index),
                        validatorIndex: (0, o.bigIntToHex)(this.validatorIndex),
                        address: "0x" + this.address.buf.toString("hex"),
                        amount: (0, o.bigIntToHex)(this.amount)
                    }
                }
            }
            t.Withdrawal = s
        },
        27321: (e, t, r) => {
            ! function() {
                var t = {
                        528: function(e, t, r) {
                            var n = r(685),
                                i = r(310),
                                o = e.exports;
                            for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);

                            function s(e) {
                                if ("string" == typeof e && (e = i.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
                                return e
                            }
                            o.request = function(e, t) {
                                return e = s(e), n.request.call(this, e, t)
                            }, o.get = function(e, t) {
                                return e = s(e), n.get.call(this, e, t)
                            }
                        },
                        685: function(e) {
                            "use strict";
                            e.exports = r(47744)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = r(40252)
                        }
                    },
                    n = {};

                function i(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var o = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](o, o.exports, i), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return o.exports
                }
                i.ab = "//", e.exports = i(528)
            }()
        },
        27835: function(e, t, r) {
            var n, i = r(76928).Buffer;
            n = function() {
                "use strict";
                var e = {};

                function t(e) {
                    if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) throw TypeError("invalid encoding")
                }
                return e.decodeUTF8 = function(e) {
                    if ("string" != typeof e) throw TypeError("expected string");
                    var t, r = unescape(encodeURIComponent(e)),
                        n = new Uint8Array(r.length);
                    for (t = 0; t < r.length; t++) n[t] = r.charCodeAt(t);
                    return n
                }, e.encodeUTF8 = function(e) {
                    var t, r = [];
                    for (t = 0; t < e.length; t++) r.push(String.fromCharCode(e[t]));
                    return decodeURIComponent(escape(r.join("")))
                }, "undefined" == typeof atob ? void 0 !== i.from ? (e.encodeBase64 = function(e) {
                    return i.from(e).toString("base64")
                }, e.decodeBase64 = function(e) {
                    return t(e), new Uint8Array(Array.prototype.slice.call(i.from(e, "base64"), 0))
                }) : (e.encodeBase64 = function(e) {
                    return new i(e).toString("base64")
                }, e.decodeBase64 = function(e) {
                    return t(e), new Uint8Array(Array.prototype.slice.call(new i(e, "base64"), 0))
                }) : (e.encodeBase64 = function(e) {
                    var t, r = [],
                        n = e.length;
                    for (t = 0; t < n; t++) r.push(String.fromCharCode(e[t]));
                    return btoa(r.join(""))
                }, e.decodeBase64 = function(e) {
                    t(e);
                    var r, n = atob(e),
                        i = new Uint8Array(n.length);
                    for (r = 0; r < n.length; r++) i[r] = n.charCodeAt(r);
                    return i
                }), e
            }, e.exports ? e.exports = n() : (this.nacl || (this.nacl = {}), this.nacl.util = n())
        },
        29969: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extractPublicKey = t.recoverPersonalSignature = t.personalSign = void 0;
            let n = r(43118),
                i = r(91262);

            function o(e, t) {
                let r = (0, n.hashPersonalMessage)((0, i.legacyToBuffer)(e));
                return (0, i.recoverPublicKey)(r, t)
            }
            t.personalSign = function({
                privateKey: e,
                data: t
            }) {
                if ((0, i.isNullish)(t)) throw Error("Missing data parameter");
                if ((0, i.isNullish)(e)) throw Error("Missing privateKey parameter");
                let r = (0, i.legacyToBuffer)(t),
                    o = (0, n.hashPersonalMessage)(r),
                    a = (0, n.ecsign)(o, e);
                return (0, i.concatSig)((0, n.toBuffer)(a.v), a.r, a.s)
            }, t.recoverPersonalSignature = function({
                data: e,
                signature: t
            }) {
                if ((0, i.isNullish)(e)) throw Error("Missing data parameter");
                if ((0, i.isNullish)(t)) throw Error("Missing signature parameter");
                let r = o(e, t),
                    a = (0, n.publicToAddress)(r);
                return (0, n.bufferToHex)(a)
            }, t.extractPublicKey = function({
                data: e,
                signature: t
            }) {
                if ((0, i.isNullish)(e)) throw Error("Missing data parameter");
                if ((0, i.isNullish)(t)) throw Error("Missing signature parameter");
                let r = o(e, t);
                return `0x${r.toString("hex")}`
            }
        },
        30150: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keccak512 = t.keccak384 = t.keccak256 = t.keccak224 = void 0;
            let n = r(17486),
                i = r(39069);
            t.keccak224 = (0, i.wrapHash)(n.keccak_224), t.keccak256 = (() => {
                let e = (0, i.wrapHash)(n.keccak_256);
                return e.create = n.keccak_256.create, e
            })(), t.keccak384 = (0, i.wrapHash)(n.keccak_384), t.keccak512 = (0, i.wrapHash)(n.keccak_512)
        },
        30728: (e, t, r) => {
            "use strict";
            r.d(t, {
                AT: () => T,
                G3: () => x,
                O4: () => C,
                Ow: () => U,
                QC: () => H,
                QX: () => j,
                Ss: () => A,
                hZ: () => S,
                j1: () => E,
                ju: () => I,
                k0: () => _,
                u0: () => y,
                xG: () => v
            });
            var n = r(17674),
                i = r(3098),
                o = r(51552),
                a = r(31704);
            let s = i.tf(i.ee(null), e => (0, a.nj)(e, a.Wy.ecdsa)),
                f = i.tf(i.ee(32), e => (0, a.nj)(e, a.Wy.schnorr)),
                l = i.tf(i.ee(null), e => {
                    if (64 !== e.length && 65 !== e.length) throw Error("Schnorr signature should be 64 or 65 bytes long");
                    return e
                }),
                u = i.w3({
                    fingerprint: i.C,
                    path: i.YO(null, i.QK)
                }),
                h = i.w3({
                    hashes: i.YO(o.km, i.ee(32)),
                    der: u
                }),
                c = i.ee(78),
                d = i.w3({
                    pubKey: f,
                    leafHash: i.ee(32)
                }),
                p = i.w3({
                    version: i.U8,
                    internalKey: i.ee(32),
                    merklePath: i.YO(null, i.ee(32))
                }),
                y = i.tf(p, e => {
                    if (e.merklePath.length > 128) throw Error("TaprootControlBlock: merklePath should be of length 0..128 (inclusive)");
                    return e
                }),
                g = i.YO(null, i.w3({
                    depth: i.U8,
                    version: i.U8,
                    script: o.Rg
                })),
                b = i.ee(null),
                m = i.ee(20),
                w = i.ee(32),
                v = {
                    unsignedTx: [0, !1, o.kW, [0],
                        [0], !1
                    ],
                    xpub: [1, c, u, [],
                        [0, 2], !1
                    ],
                    txVersion: [2, !1, i.QK, [2],
                        [2], !1
                    ],
                    fallbackLocktime: [3, !1, i.QK, [],
                        [2], !1
                    ],
                    inputCount: [4, !1, o.km, [2],
                        [2], !1
                    ],
                    outputCount: [5, !1, o.km, [2],
                        [2], !1
                    ],
                    txModifiable: [6, !1, i.U8, [],
                        [2], !1
                    ],
                    version: [251, !1, i.QK, [],
                        [0, 2], !1
                    ],
                    proprietary: [252, b, b, [],
                        [0, 2], !1
                    ]
                },
                _ = {
                    nonWitnessUtxo: [0, !1, o.NC, [],
                        [0, 2], !1
                    ],
                    witnessUtxo: [1, !1, o.oV, [],
                        [0, 2], !1
                    ],
                    partialSig: [2, s, b, [],
                        [0, 2], !1
                    ],
                    sighashType: [3, !1, i.QK, [],
                        [0, 2], !1
                    ],
                    redeemScript: [4, !1, b, [],
                        [0, 2], !1
                    ],
                    witnessScript: [5, !1, b, [],
                        [0, 2], !1
                    ],
                    bip32Derivation: [6, s, u, [],
                        [0, 2], !1
                    ],
                    finalScriptSig: [7, !1, b, [],
                        [0, 2], !1
                    ],
                    finalScriptWitness: [8, !1, o.Kk, [],
                        [0, 2], !1
                    ],
                    porCommitment: [9, !1, b, [],
                        [0, 2], !1
                    ],
                    ripemd160: [10, m, b, [],
                        [0, 2], !1
                    ],
                    sha256: [11, w, b, [],
                        [0, 2], !1
                    ],
                    hash160: [12, m, b, [],
                        [0, 2], !1
                    ],
                    hash256: [13, w, b, [],
                        [0, 2], !1
                    ],
                    txid: [14, !1, w, [2],
                        [2], !0
                    ],
                    index: [15, !1, i.QK, [2],
                        [2], !0
                    ],
                    sequence: [16, !1, i.QK, [],
                        [2], !0
                    ],
                    requiredTimeLocktime: [17, !1, i.QK, [],
                        [2], !1
                    ],
                    requiredHeightLocktime: [18, !1, i.QK, [],
                        [2], !1
                    ],
                    tapKeySig: [19, !1, l, [],
                        [0, 2], !1
                    ],
                    tapScriptSig: [20, d, l, [],
                        [0, 2], !1
                    ],
                    tapLeafScript: [21, y, b, [],
                        [0, 2], !1
                    ],
                    tapBip32Derivation: [22, w, h, [],
                        [0, 2], !1
                    ],
                    tapInternalKey: [23, !1, f, [],
                        [0, 2], !1
                    ],
                    tapMerkleRoot: [24, !1, w, [],
                        [0, 2], !1
                    ],
                    proprietary: [252, b, b, [],
                        [0, 2], !1
                    ]
                },
                x = ["txid", "sequence", "index", "witnessUtxo", "nonWitnessUtxo", "finalScriptSig", "finalScriptWitness", "unknown"],
                E = ["partialSig", "finalScriptSig", "finalScriptWitness", "tapKeySig", "tapScriptSig"],
                S = {
                    redeemScript: [0, !1, b, [],
                        [0, 2], !1
                    ],
                    witnessScript: [1, !1, b, [],
                        [0, 2], !1
                    ],
                    bip32Derivation: [2, s, u, [],
                        [0, 2], !1
                    ],
                    amount: [3, !1, i.d, [2],
                        [2], !0
                    ],
                    script: [4, !1, b, [2],
                        [2], !0
                    ],
                    tapInternalKey: [5, !1, f, [],
                        [0, 2], !1
                    ],
                    tapTree: [6, !1, g, [],
                        [0, 2], !1
                    ],
                    tapBip32Derivation: [7, f, h, [],
                        [0, 2], !1
                    ],
                    proprietary: [252, b, b, [],
                        [0, 2], !1
                    ]
                },
                A = [],
                k = i.YO(i.Cq, i.w3({
                    key: i.Pl(o.km, i.w3({
                        type: o.km,
                        key: i.ee(null)
                    })),
                    value: i.ee(o.km)
                }));

            function B(e) {
                let [t, r, n, i, o, a] = e;
                return {
                    type: t,
                    kc: r,
                    vc: n,
                    reqInc: i,
                    allowInc: o,
                    silentIgnore: a
                }
            }

            function O(e) {
                let t = {};
                for (let r in e) {
                    let [n, i, o] = e[r];
                    t[n] = [r, i, o]
                }
                return i.LV({
                    encodeStream: (t, r) => {
                        let n = [];
                        for (let t in e) {
                            let o = r[t];
                            if (void 0 === o) continue;
                            let [s, f, l] = e[t];
                            if (f) {
                                let e = o.map(([e, t]) => [f.encode(e), l.encode(t)]);
                                for (let [t, r] of (e.sort((e, t) => (0, a.Xo)(e[0], t[0])), e)) n.push({
                                    key: {
                                        key: t,
                                        type: s
                                    },
                                    value: r
                                })
                            } else n.push({
                                key: {
                                    type: s,
                                    key: i.wg
                                },
                                value: l.encode(o)
                            })
                        }
                        if (r.unknown)
                            for (let [e, t] of (r.unknown.sort((e, t) => (0, a.Xo)(e[0].key, t[0].key)), r.unknown)) n.push({
                                key: e,
                                value: t
                            });
                        k.encodeStream(t, n)
                    },
                    decodeStream: e => {
                        let r = k.decodeStream(e),
                            i = {},
                            o = {};
                        for (let e of r) {
                            let r = "unknown",
                                a = e.key.key,
                                s = e.value;
                            if (t[e.key.type]) {
                                let [f, l, u] = t[e.key.type];
                                if (r = f, !l && a.length) throw Error(`PSBT: Non-empty key for ${r} (key=${n.uh.encode(a)} value=${n.uh.encode(s)}`);
                                if (a = l ? l.decode(a) : void 0, s = u.decode(s), !l) {
                                    if (i[r]) throw Error(`PSBT: Same keys: ${r} (key=${a} value=${s})`);
                                    i[r] = s, o[r] = !0;
                                    continue
                                }
                            } else a = {
                                type: e.key.type,
                                key: e.key.key
                            };
                            if (o[r]) throw Error(`PSBT: Key type with empty key and no key=${r} val=${s}`);
                            i[r] || (i[r] = []), i[r].push([a, s])
                        }
                        return i
                    }
                })
            }
            i.w3({
                type: o.km,
                key: i.ee(null)
            });
            let I = i.tf(O(_), e => {
                    if (e.finalScriptWitness && !e.finalScriptWitness.length) throw Error("validateInput: empty finalScriptWitness");
                    if (e.partialSig && !e.partialSig.length) throw Error("Empty partialSig");
                    if (e.partialSig)
                        for (let [t] of e.partialSig)(0, a.nj)(t, a.Wy.ecdsa);
                    if (e.bip32Derivation)
                        for (let [t] of e.bip32Derivation)(0, a.nj)(t, a.Wy.ecdsa);
                    if (void 0 !== e.requiredTimeLocktime && e.requiredTimeLocktime < 5e8) throw Error(`validateInput: wrong timeLocktime=${e.requiredTimeLocktime}`);
                    if (void 0 !== e.requiredHeightLocktime && (e.requiredHeightLocktime <= 0 || e.requiredHeightLocktime >= 5e8)) throw Error(`validateInput: wrong heighLocktime=${e.requiredHeightLocktime}`);
                    if (e.tapLeafScript)
                        for (let [t, r] of e.tapLeafScript) {
                            if ((254 & t.version) !== r[r.length - 1]) throw Error("validateInput: tapLeafScript version mimatch");
                            if (1 & r[r.length - 1]) throw Error("validateInput: tapLeafScript version has parity bit!")
                        }
                    return e
                }),
                T = i.tf(O(S), e => {
                    if (e.bip32Derivation)
                        for (let [t] of e.bip32Derivation)(0, a.nj)(t, a.Wy.ecdsa);
                    return e
                }),
                R = i.tf(O(v), e => {
                    if (0 === (e.version || 0)) {
                        if (!e.unsignedTx) throw Error("PSBTv0: missing unsignedTx");
                        for (let t of e.unsignedTx.inputs)
                            if (t.finalScriptSig && t.finalScriptSig.length) throw Error("PSBTv0: input scriptSig found in unsignedTx")
                    }
                    return e
                }),
                M = i.w3({
                    magic: i.GE(i.Yj(new Uint8Array([255])), "psbt"),
                    global: R,
                    inputs: i.YO("global/unsignedTx/inputs/length", I),
                    outputs: i.YO(null, T)
                }),
                P = i.w3({
                    magic: i.GE(i.Yj(new Uint8Array([255])), "psbt"),
                    global: R,
                    inputs: i.YO("global/inputCount", I),
                    outputs: i.YO("global/outputCount", T)
                });

            function L(e, t, r) {
                for (let n in r) {
                    if ("unknown" === n || !t[n]) continue;
                    let {
                        allowInc: r
                    } = B(t[n]);
                    if (!r.includes(e)) throw Error(`PSBTv${e}: field ${n} is not allowed`)
                }
                for (let n in t) {
                    let {
                        reqInc: i
                    } = B(t[n]);
                    if (i.includes(e) && void 0 === r[n]) throw Error(`PSBTv${e}: missing required field ${n}`)
                }
            }

            function U(e, t, r) {
                let n = {};
                for (let i in r) {
                    if ("unknown" !== i) {
                        if (!t[i]) continue;
                        let {
                            allowInc: r,
                            silentIgnore: n
                        } = B(t[i]);
                        if (!r.includes(e)) {
                            if (n) continue;
                            throw Error(`Failed to serialize in PSBTv${e}: ${i} but versions allows inclusion=${r}`)
                        }
                    }
                    n[i] = r[i]
                }
                return n
            }

            function N(e) {
                let t = e && e.global && e.global.version || 0;
                for (let r of (L(t, v, e.global), e.inputs)) L(t, _, r);
                for (let r of e.outputs) L(t, S, r);
                let r = t ? e.global.inputCount : e.global.unsignedTx.inputs.length;
                if (e.inputs.length < r) throw Error("Not enough inputs");
                let n = e.inputs.slice(r);
                if (n.length > 1 || n.length && Object.keys(n[0]).length) throw Error(`Unexpected inputs left in tx=${n}`);
                let i = t ? e.global.outputCount : e.global.unsignedTx.outputs.length;
                if (e.outputs.length < i) throw Error("Not outputs inputs");
                let o = e.outputs.slice(i);
                if (o.length > 1 || o.length && Object.keys(o[0]).length) throw Error(`Unexpected outputs left in tx=${o}`);
                return e
            }

            function C(e, t, r, i, o) {
                let s = { ...r,
                    ...t
                };
                for (let o in e) {
                    let f = o,
                        [l, u, h] = e[f],
                        c = i && !i.includes(o);
                    if (void 0 === t[o] && o in t) {
                        if (c) throw Error(`Cannot remove signed field=${o}`);
                        delete s[o]
                    } else if (u) {
                        let e = r && r[o] ? r[o] : [],
                            i = t[f];
                        if (i) {
                            if (!Array.isArray(i)) throw Error(`keyMap(${o}): KV pairs should be [k, v][]`);
                            i = i.map(e => {
                                if (2 !== e.length) throw Error(`keyMap(${o}): KV pairs should be [k, v][]`);
                                return ["string" == typeof e[0] ? u.decode(n.uh.decode(e[0])) : e[0], "string" == typeof e[1] ? h.decode(n.uh.decode(e[1])) : e[1]]
                            });
                            let t = {},
                                r = (e, r, i) => {
                                    if (void 0 === t[e]) {
                                        t[e] = [r, i];
                                        return
                                    }
                                    let o = n.uh.encode(h.encode(t[e][1])),
                                        a = n.uh.encode(h.encode(i));
                                    if (o !== a) throw Error(`keyMap(${f}): same key=${e} oldVal=${o} newVal=${a}`)
                                };
                            for (let [t, i] of e) r(n.uh.encode(u.encode(t)), t, i);
                            for (let [e, o] of i) {
                                let i = n.uh.encode(u.encode(e));
                                if (void 0 === o) {
                                    if (c) throw Error(`Cannot remove signed field=${f}/${e}`);
                                    delete t[i]
                                } else r(i, e, o)
                            }
                            s[f] = Object.values(t)
                        }
                    } else if ("string" == typeof s[o]) s[o] = h.decode(n.uh.decode(s[o]));
                    else if (c && o in t && r && void 0 !== r[o] && !(0, a.ex)(h.encode(t[o]), h.encode(r[o]))) throw Error(`Cannot change signed field=${o}`)
                }
                for (let t in s)
                    if (!e[t]) {
                        if (o && "unknown" === t) continue;
                        delete s[t]
                    }
                return s
            }
            i.w3({
                magic: i.GE(i.Yj(new Uint8Array([255])), "psbt"),
                items: i.YO(null, i.Bb(i.YO(i.Cq, i.PV([i.uh(o.km), i.ee(o.RF)])), i.Lo.dict()))
            });
            let j = i.tf(M, N),
                H = i.tf(P, N)
        },
        31704: (e, t, r) => {
            "use strict";
            r.d(t, {
                pG: () => tp,
                Wy: () => n,
                ie: () => td,
                Xo: () => ty,
                Id: () => e9,
                ex: () => te,
                A0: () => tt,
                aY: () => e7,
                E1: () => ti,
                vl: () => tn,
                Y7: () => tr,
                iM: () => ta,
                V0: () => ts,
                m: () => tf,
                Cn: () => th,
                gD: () => tc,
                nj: () => tl
            });
            var n, i = r(14157),
                o = r(84080);
            class a extends o.Vw {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, (0, o.sd)(e);
                    let r = (0, o.ZJ)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        i = new Uint8Array(n);
                    i.set(r.length > n ? e.create().update(r).digest() : r);
                    for (let e = 0; e < i.length; e++) i[e] ^= 54;
                    this.iHash.update(i), this.oHash = e.create();
                    for (let e = 0; e < i.length; e++) i[e] ^= 106;
                    this.oHash.update(i), (0, o.uH)(i)
                }
                update(e) {
                    return (0, o.CC)(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    (0, o.CC)(this), (0, o.DO)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: a
                    } = this;
                    return e.finished = n, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                clone() {
                    return this._cloneInto()
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let s = (e, t, r) => new a(e, t).update(r).digest();
            s.create = (e, t) => new a(e, t);
            let f = BigInt(0),
                l = BigInt(1);

            function u(e, t) {
                if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t)
            }

            function h(e) {
                let t = e.toString(16);
                return 1 & t.length ? "0" + t : t
            }

            function c(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return "" === e ? f : BigInt("0x" + e)
            }

            function d(e) {
                return c((0, o.My)(e))
            }

            function p(e) {
                return (0, o.DO)(e), c((0, o.My)(Uint8Array.from(e).reverse()))
            }

            function y(e, t) {
                return (0, o.aT)(e.toString(16).padStart(2 * t, "0"))
            }

            function g(e, t) {
                return y(e, t).reverse()
            }

            function b(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = (0, o.aT)(t)
                    } catch (t) {
                        throw Error(e + " must be hex string or Uint8Array, cause: " + t)
                    } else if ((0, o.aY)(t)) n = Uint8Array.from(t);
                    else throw Error(e + " must be hex string or Uint8Array");
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(e + " of length " + r + " expected, got " + i);
                return n
            }
            let m = e => "bigint" == typeof e && f <= e;

            function w(e, t, r) {
                return m(e) && m(t) && m(r) && t <= e && e < r
            }

            function v(e, t, r, n) {
                if (!w(t, r, n)) throw Error("expected valid " + e + ": " + r + " <= n < " + n + ", got " + t)
            }

            function _(e) {
                let t;
                for (t = 0; e > f; e >>= l, t += 1);
                return t
            }
            let x = e => (l << BigInt(e)) - l;

            function E(e, t, r = {}) {
                if (!e || "object" != typeof e) throw Error("expected valid options object");

                function n(t, r, n) {
                    let i = e[t];
                    if (n && void 0 === i) return;
                    let o = typeof i;
                    if (o !== r || null === i) throw Error(`param "${t}" is invalid: expected ${r}, got ${o}`)
                }
                Object.entries(t).forEach(([e, t]) => n(e, t, !1)), Object.entries(r).forEach(([e, t]) => n(e, t, !0))
            }

            function S(e) {
                let t = new WeakMap;
                return (r, ...n) => {
                    let i = t.get(r);
                    if (void 0 !== i) return i;
                    let o = e(r, ...n);
                    return t.set(r, o), o
                }
            }
            let A = BigInt(0),
                k = BigInt(1),
                B = BigInt(2),
                O = BigInt(3),
                I = BigInt(4),
                T = BigInt(5),
                R = BigInt(7),
                M = BigInt(8),
                P = BigInt(9),
                L = BigInt(16);

            function U(e, t) {
                let r = e % t;
                return r >= A ? r : t + r
            }

            function N(e, t, r) {
                let n = e;
                for (; t-- > A;) n *= n, n %= r;
                return n
            }

            function C(e, t) {
                if (e === A) throw Error("invert: expected non-zero number");
                if (t <= A) throw Error("invert: expected positive modulus, got " + t);
                let r = U(e, t),
                    n = t,
                    i = A,
                    o = k,
                    a = k,
                    s = A;
                for (; r !== A;) {
                    let e = n / r,
                        t = n % r,
                        f = i - a * e,
                        l = o - s * e;
                    n = r, r = t, i = a, o = s, a = f, s = l
                }
                if (n !== k) throw Error("invert: does not exist");
                return U(i, t)
            }

            function j(e, t, r) {
                if (!e.eql(e.sqr(t), r)) throw Error("Cannot find square root")
            }

            function H(e, t) {
                let r = (e.ORDER + k) / I,
                    n = e.pow(t, r);
                return j(e, n, t), n
            }

            function D(e, t) {
                let r = (e.ORDER - T) / M,
                    n = e.mul(t, B),
                    i = e.pow(n, r),
                    o = e.mul(t, i),
                    a = e.mul(e.mul(o, B), i),
                    s = e.mul(o, e.sub(a, e.ONE));
                return j(e, s, t), s
            }

            function K(e) {
                if (e < O) throw Error("sqrt is not defined for small field");
                let t = e - k,
                    r = 0;
                for (; t % B === A;) t /= B, r++;
                let n = B,
                    i = q(e);
                for (; 1 === F(i, n);)
                    if (n++ > 1e3) throw Error("Cannot find square root: probably non-prime P");
                if (1 === r) return H;
                let o = i.pow(n, t),
                    a = (t + k) / B;
                return function(e, n) {
                    if (e.is0(n)) return n;
                    if (1 !== F(e, n)) throw Error("Cannot find square root");
                    let i = r,
                        s = e.mul(e.ONE, o),
                        f = e.pow(n, t),
                        l = e.pow(n, a);
                    for (; !e.eql(f, e.ONE);) {
                        if (e.is0(f)) return e.ZERO;
                        let t = 1,
                            r = e.sqr(f);
                        for (; !e.eql(r, e.ONE);)
                            if (t++, r = e.sqr(r), t === i) throw Error("Cannot find square root");
                        let n = k << BigInt(i - t - 1),
                            o = e.pow(s, n);
                        i = t, s = e.sqr(o), f = e.mul(f, s), l = e.mul(l, o)
                    }
                    return l
                }
            }
            let $ = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function z(e, t, r = !1) {
                let n = Array(t.length).fill(r ? e.ZERO : void 0),
                    i = t.reduce((t, r, i) => e.is0(r) ? t : (n[i] = t, e.mul(t, r)), e.ONE),
                    o = e.inv(i);
                return t.reduceRight((t, r, i) => e.is0(r) ? t : (n[i] = e.mul(t, n[i]), e.mul(t, r)), o), n
            }

            function F(e, t) {
                let r = (e.ORDER - k) / B,
                    n = e.pow(t, r),
                    i = e.eql(n, e.ONE),
                    o = e.eql(n, e.ZERO),
                    a = e.eql(n, e.neg(e.ONE));
                if (!i && !o && !a) throw Error("invalid Legendre symbol result");
                return i ? 1 : o ? 0 : -1
            }

            function q(e, t, r = !1, n = {}) {
                let i, a, s, f;
                if (e <= A) throw Error("invalid field: expected ORDER > 0, got " + e);
                let l = !1;
                if ("object" == typeof t && null != t) {
                    if (n.sqrt || r) throw Error("cannot specify opts in two arguments");
                    t.BITS && (a = t.BITS), t.sqrt && (s = t.sqrt), "boolean" == typeof t.isLE && (r = t.isLE), "boolean" == typeof t.modOnDecode && (l = t.modOnDecode), f = t.allowedLengths
                } else "number" == typeof t && (a = t), n.sqrt && (s = n.sqrt);
                let {
                    nBitLength: u,
                    nByteLength: h
                } = function(e, t) {
                    void 0 !== t && (0, o.Fe)(t);
                    let r = void 0 !== t ? t : e.toString(2).length,
                        n = Math.ceil(r / 8);
                    return {
                        nBitLength: r,
                        nByteLength: n
                    }
                }(e, a);
                if (h > 2048) throw Error("invalid field: expected ORDER of <= 2048 bytes");
                let c = Object.freeze({
                    ORDER: e,
                    isLE: r,
                    BITS: u,
                    BYTES: h,
                    MASK: x(u),
                    ZERO: A,
                    ONE: k,
                    allowedLengths: f,
                    create: t => U(t, e),
                    isValid: t => {
                        if ("bigint" != typeof t) throw Error("invalid field element: expected bigint, got " + typeof t);
                        return A <= t && t < e
                    },
                    is0: e => e === A,
                    isValidNot0: e => !c.is0(e) && c.isValid(e),
                    isOdd: e => (e & k) === k,
                    neg: t => U(-t, e),
                    eql: (e, t) => e === t,
                    sqr: t => U(t * t, e),
                    add: (t, r) => U(t + r, e),
                    sub: (t, r) => U(t - r, e),
                    mul: (t, r) => U(t * r, e),
                    pow: (e, t) => (function(e, t, r) {
                        if (r < A) throw Error("invalid exponent, negatives unsupported");
                        if (r === A) return e.ONE;
                        if (r === k) return t;
                        let n = e.ONE,
                            i = t;
                        for (; r > A;) r & k && (n = e.mul(n, i)), i = e.sqr(i), r >>= k;
                        return n
                    })(c, e, t),
                    div: (t, r) => U(t * C(r, e), e),
                    sqrN: e => e * e,
                    addN: (e, t) => e + t,
                    subN: (e, t) => e - t,
                    mulN: (e, t) => e * t,
                    inv: t => C(t, e),
                    sqrt: s || (t => {
                        if (!i) i = e % I === O ? H : e % M === T ? D : e % L === P ? function(e) {
                            let t = q(e),
                                r = K(e),
                                n = r(t, t.neg(t.ONE)),
                                i = r(t, n),
                                o = r(t, t.neg(n)),
                                a = (e + R) / L;
                            return (e, t) => {
                                let r = e.pow(t, a),
                                    s = e.mul(r, n),
                                    f = e.mul(r, i),
                                    l = e.mul(r, o),
                                    u = e.eql(e.sqr(s), t),
                                    h = e.eql(e.sqr(f), t);
                                r = e.cmov(r, s, u), s = e.cmov(l, f, h);
                                let c = e.eql(e.sqr(s), t),
                                    d = e.cmov(r, s, c);
                                return j(e, d, t), d
                            }
                        }(e) : K(e);
                        return i(c, t)
                    }),
                    toBytes: e => r ? g(e, h) : y(e, h),
                    fromBytes: (t, n = !0) => {
                        if (f) {
                            if (!f.includes(t.length) || t.length > h) throw Error("Field.fromBytes: expected " + f + " bytes, got " + t.length);
                            let e = new Uint8Array(h);
                            e.set(t, r ? 0 : e.length - t.length), t = e
                        }
                        if (t.length !== h) throw Error("Field.fromBytes: expected " + h + " bytes, got " + t.length);
                        let i = r ? p(t) : d(t);
                        if (l && (i = U(i, e)), !n && !c.isValid(i)) throw Error("invalid field element: outside of range 0..ORDER");
                        return i
                    },
                    invertBatch: e => z(c, e),
                    cmov: (e, t, r) => r ? t : e
                });
                return Object.freeze(c)
            }

            function Z(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                return Math.ceil(e.toString(2).length / 8)
            }

            function V(e) {
                let t = Z(e);
                return t + Math.ceil(t / 2)
            }

            function W(e, t, r = !1) {
                let n = e.length,
                    i = Z(t),
                    o = V(t);
                if (n < 16 || n < o || n > 1024) throw Error("expected " + o + "-1024 bytes of input, got " + n);
                let a = U(r ? p(e) : d(e), t - k) + k;
                return r ? g(a, i) : y(a, i)
            }
            let G = BigInt(0),
                Y = BigInt(1);

            function X(e, t) {
                let r = t.negate();
                return e ? r : t
            }

            function Q(e, t) {
                let r = z(e.Fp, t.map(e => e.Z));
                return t.map((t, n) => e.fromAffine(t.toAffine(r[n])))
            }

            function J(e, t) {
                if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw Error("invalid window size, expected [1.." + t + "], got W=" + e)
            }

            function ee(e, t) {
                J(e, t);
                let r = Math.ceil(t / e) + 1,
                    n = 2 ** (e - 1),
                    i = 2 ** e;
                return {
                    windows: r,
                    windowSize: n,
                    mask: x(e),
                    maxNumber: i,
                    shiftBy: BigInt(e)
                }
            }

            function et(e, t, r) {
                let {
                    windowSize: n,
                    mask: i,
                    maxNumber: o,
                    shiftBy: a
                } = r, s = Number(e & i), f = e >> a;
                s > n && (s -= o, f += Y);
                let l = t * n,
                    u = l + Math.abs(s) - 1,
                    h = 0 === s;
                return {
                    nextN: f,
                    offset: u,
                    isZero: h,
                    isNeg: s < 0,
                    isNegF: t % 2 != 0,
                    offsetF: l
                }
            }
            let er = new WeakMap,
                en = new WeakMap;

            function ei(e) {
                return en.get(e) || 1
            }

            function eo(e) {
                if (e !== G) throw Error("invalid wNAF")
            }
            class ea {
                constructor(e, t) {
                    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = t
                }
                _unsafeLadder(e, t, r = this.ZERO) {
                    let n = e;
                    for (; t > G;) t & Y && (r = r.add(n)), n = n.double(), t >>= Y;
                    return r
                }
                precomputeWindow(e, t) {
                    let {
                        windows: r,
                        windowSize: n
                    } = ee(t, this.bits), i = [], o = e, a = o;
                    for (let e = 0; e < r; e++) {
                        a = o, i.push(a);
                        for (let e = 1; e < n; e++) a = a.add(o), i.push(a);
                        o = a.double()
                    }
                    return i
                }
                wNAF(e, t, r) {
                    if (!this.Fn.isValid(r)) throw Error("invalid scalar");
                    let n = this.ZERO,
                        i = this.BASE,
                        o = ee(e, this.bits);
                    for (let e = 0; e < o.windows; e++) {
                        let {
                            nextN: a,
                            offset: s,
                            isZero: f,
                            isNeg: l,
                            isNegF: u,
                            offsetF: h
                        } = et(r, e, o);
                        r = a, f ? i = i.add(X(u, t[h])) : n = n.add(X(l, t[s]))
                    }
                    return eo(r), {
                        p: n,
                        f: i
                    }
                }
                wNAFUnsafe(e, t, r, n = this.ZERO) {
                    let i = ee(e, this.bits);
                    for (let e = 0; e < i.windows && r !== G; e++) {
                        let {
                            nextN: o,
                            offset: a,
                            isZero: s,
                            isNeg: f
                        } = et(r, e, i);
                        if (r = o, !s) {
                            let e = t[a];
                            n = n.add(f ? e.negate() : e)
                        }
                    }
                    return eo(r), n
                }
                getPrecomputes(e, t, r) {
                    let n = er.get(t);
                    return n || (n = this.precomputeWindow(t, e), 1 !== e && ("function" == typeof r && (n = r(n)), er.set(t, n))), n
                }
                cached(e, t, r) {
                    let n = ei(e);
                    return this.wNAF(n, this.getPrecomputes(n, e, r), t)
                }
                unsafe(e, t, r, n) {
                    let i = ei(e);
                    return 1 === i ? this._unsafeLadder(e, t, n) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n)
                }
                createCache(e, t) {
                    J(t, this.bits), en.set(e, t), er.delete(e)
                }
                hasCache(e) {
                    return 1 !== ei(e)
                }
            }

            function es(e, t) {
                if (!t) return q(e);
                if (t.ORDER !== e) throw Error("Field.ORDER must match order: Fp == p, Fn == n");
                return E(t, $.reduce((e, t) => (e[t] = "function", e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "number",
                    BITS: "number"
                })), t
            }
            let ef = (e, t) => (e + (e >= 0 ? t : -t) / ep) / t;

            function el(e) {
                void 0 !== e.lowS && u("lowS", e.lowS), void 0 !== e.prehash && u("prehash", e.prehash)
            }
            class eu extends Error {
                constructor(e = "") {
                    super(e)
                }
            }
            let eh = {
                    Err: eu,
                    _tlv: {
                        encode: (e, t) => {
                            let {
                                Err: r
                            } = eh;
                            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                            if (1 & t.length) throw new r("tlv.encode: unpadded data");
                            let n = t.length / 2,
                                i = h(n);
                            if (i.length / 2 & 128) throw new r("tlv.encode: long form length too big");
                            let o = n > 127 ? h(i.length / 2 | 128) : "";
                            return h(e) + o + i + t
                        },
                        decode(e, t) {
                            let {
                                Err: r
                            } = eh, n = 0;
                            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                            if (t.length < 2 || t[n++] !== e) throw new r("tlv.decode: wrong tlv");
                            let i = t[n++],
                                o = 0;
                            if (128 & i) {
                                let e = 127 & i;
                                if (!e) throw new r("tlv.decode(long): indefinite length not supported");
                                if (e > 4) throw new r("tlv.decode(long): byte length is too big");
                                let a = t.subarray(n, n + e);
                                if (a.length !== e) throw new r("tlv.decode: length bytes not complete");
                                if (0 === a[0]) throw new r("tlv.decode(long): zero leftmost byte");
                                for (let e of a) o = o << 8 | e;
                                if (n += e, o < 128) throw new r("tlv.decode(long): not minimal encoding")
                            } else o = i;
                            let a = t.subarray(n, n + o);
                            if (a.length !== o) throw new r("tlv.decode: wrong value length");
                            return {
                                v: a,
                                l: t.subarray(n + o)
                            }
                        }
                    },
                    _int: {
                        encode(e) {
                            let {
                                Err: t
                            } = eh;
                            if (e < ec) throw new t("integer: negative integers are not allowed");
                            let r = h(e);
                            if (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length) throw new t("unexpected DER parsing assertion: unpadded hex");
                            return r
                        },
                        decode(e) {
                            let {
                                Err: t
                            } = eh;
                            if (128 & e[0]) throw new t("invalid signature integer: negative");
                            if (0 === e[0] && !(128 & e[1])) throw new t("invalid signature integer: unnecessary leading zero");
                            return d(e)
                        }
                    },
                    toSig(e) {
                        let {
                            Err: t,
                            _int: r,
                            _tlv: n
                        } = eh, i = b("signature", e), {
                            v: o,
                            l: a
                        } = n.decode(48, i);
                        if (a.length) throw new t("invalid signature: left bytes after parsing");
                        let {
                            v: s,
                            l: f
                        } = n.decode(2, o), {
                            v: l,
                            l: u
                        } = n.decode(2, f);
                        if (u.length) throw new t("invalid signature: left bytes after parsing");
                        return {
                            r: r.decode(s),
                            s: r.decode(l)
                        }
                    },
                    hexFromSig(e) {
                        let {
                            _tlv: t,
                            _int: r
                        } = eh, n = t.encode(2, r.encode(e.r)), i = t.encode(2, r.encode(e.s));
                        return t.encode(48, n + i)
                    }
                },
                ec = BigInt(0),
                ed = BigInt(1),
                ep = BigInt(2),
                ey = BigInt(3),
                eg = BigInt(4);

            function eb(e, t) {
                let r;
                let {
                    BYTES: n
                } = e;
                if ("bigint" == typeof t) r = t;
                else {
                    let i = b("private key", t);
                    try {
                        r = e.fromBytes(i)
                    } catch (e) {
                        throw Error(`invalid private key: expected ui8a of size ${n}, got ${typeof t}`)
                    }
                }
                if (!e.isValidNot0(r)) throw Error("invalid private key: out of range [1..N-1]");
                return r
            }

            function em(e) {
                return Uint8Array.of(e ? 2 : 3)
            }
            let ew = {
                    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                    h: BigInt(1),
                    a: BigInt(0),
                    b: BigInt(7),
                    Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
                    Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
                },
                ev = {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    basises: [
                        [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
                        [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
                    ]
                },
                e_ = BigInt(0),
                ex = BigInt(1),
                eE = BigInt(2);

            function eS(e) {
                let t = ew.p,
                    r = BigInt(3),
                    n = BigInt(6),
                    i = BigInt(11),
                    o = BigInt(22),
                    a = BigInt(23),
                    s = BigInt(44),
                    f = BigInt(88),
                    l = e * e * e % t,
                    u = l * l * e % t,
                    h = N(u, r, t) * u % t,
                    c = N(h, r, t) * u % t,
                    d = N(c, eE, t) * l % t,
                    p = N(d, i, t) * d % t,
                    y = N(p, o, t) * p % t,
                    g = N(y, s, t) * y % t,
                    b = N(g, f, t) * g % t,
                    m = N(b, s, t) * y % t,
                    w = N(m, r, t) * u % t,
                    v = N(w, a, t) * p % t,
                    _ = N(v, n, t) * l % t,
                    x = N(_, eE, t);
                if (!eA.eql(eA.sqr(x), e)) throw Error("Cannot find square root");
                return x
            }
            let eA = q(ew.p, void 0, void 0, {
                    sqrt: eS
                }),
                ek = function(e, t) {
                    let r = t => (function(e) {
                        let {
                            CURVE: t,
                            curveOpts: r,
                            hash: n,
                            ecdsaOpts: i
                        } = function(e) {
                            let {
                                CURVE: t,
                                curveOpts: r
                            } = function(e) {
                                let t = {
                                        a: e.a,
                                        b: e.b,
                                        p: e.Fp.ORDER,
                                        n: e.n,
                                        h: e.h,
                                        Gx: e.Gx,
                                        Gy: e.Gy
                                    },
                                    r = e.Fp,
                                    n = e.allowedPrivateKeyLengths ? Array.from(new Set(e.allowedPrivateKeyLengths.map(e => Math.ceil(e / 2)))) : void 0,
                                    i = {
                                        Fp: r,
                                        Fn: q(t.n, {
                                            BITS: e.nBitLength,
                                            allowedLengths: n,
                                            modOnDecode: e.wrapPrivateKey
                                        }),
                                        allowInfinityPoint: e.allowInfinityPoint,
                                        endo: e.endo,
                                        isTorsionFree: e.isTorsionFree,
                                        clearCofactor: e.clearCofactor,
                                        fromBytes: e.fromBytes,
                                        toBytes: e.toBytes
                                    };
                                return {
                                    CURVE: t,
                                    curveOpts: i
                                }
                            }(e), n = {
                                hmac: e.hmac,
                                randomBytes: e.randomBytes,
                                lowS: e.lowS,
                                bits2int: e.bits2int,
                                bits2int_modN: e.bits2int_modN
                            };
                            return {
                                CURVE: t,
                                curveOpts: r,
                                hash: e.hash,
                                ecdsaOpts: n
                            }
                        }(e), a = function(e, t, r = {}) {
                            (0, o.sd)(t), E(r, {}, {
                                hmac: "function",
                                lowS: "boolean",
                                randomBytes: "function",
                                bits2int: "function",
                                bits2int_modN: "function"
                            });
                            let n = r.randomBytes || o.po,
                                i = r.hmac || ((e, ...r) => s(t, e, (0, o.Id)(...r))),
                                {
                                    Fp: a,
                                    Fn: f
                                } = e,
                                {
                                    ORDER: l,
                                    BITS: u
                                } = f,
                                h = V(l),
                                c = {
                                    secret: f.BYTES,
                                    public: 1 + a.BYTES,
                                    publicUncompressed: 1 + 2 * a.BYTES,
                                    signature: 2 * f.BYTES,
                                    seed: h
                                };

                            function p(e, t) {
                                if (!f.isValidNot0(t)) throw Error(`invalid signature ${e}: out of range 1..CURVE.n`)
                            }
                            class y {
                                constructor(e, t, r) {
                                    p("r", e), p("s", t), this.r = e, this.s = t, null != r && (this.recovery = r), Object.freeze(this)
                                }
                                static fromBytes(e, t = "compact") {
                                    if ("compact" === t) {
                                        let t = f.BYTES;
                                        (0, o.DO)(e, 2 * t);
                                        let r = e.subarray(0, t),
                                            n = e.subarray(t, 2 * t);
                                        return new y(f.fromBytes(r), f.fromBytes(n))
                                    }
                                    if ("der" === t) {
                                        (0, o.DO)(e);
                                        let {
                                            r: t,
                                            s: r
                                        } = eh.toSig(e);
                                        return new y(t, r)
                                    }
                                    throw Error("invalid format")
                                }
                                static fromHex(e, t) {
                                    return this.fromBytes((0, o.aT)(e), t)
                                }
                                addRecoveryBit(e) {
                                    return new y(this.r, this.s, e)
                                }
                                recoverPublicKey(t) {
                                    let r = a.ORDER,
                                        {
                                            r: n,
                                            s: i,
                                            recovery: s
                                        } = this;
                                    if (null == s || ![0, 1, 2, 3].includes(s)) throw Error("recovery id invalid");
                                    if (l * ep < r && s > 1) throw Error("recovery id is ambiguous for h>1 curve");
                                    let u = 2 === s || 3 === s ? n + l : n;
                                    if (!a.isValid(u)) throw Error("recovery id 2 or 3 invalid");
                                    let h = a.toBytes(u),
                                        c = e.fromHex((0, o.Id)(em((1 & s) == 0), h)),
                                        d = f.inv(u),
                                        p = k(b("msgHash", t)),
                                        y = f.create(-p * d),
                                        g = f.create(i * d),
                                        m = e.BASE.multiplyUnsafe(y).add(c.multiplyUnsafe(g));
                                    if (m.is0()) throw Error("point at infinify");
                                    return m.assertValidity(), m
                                }
                                hasHighS() {
                                    return this.s > l >> ed
                                }
                                normalizeS() {
                                    return this.hasHighS() ? new y(this.r, f.neg(this.s), this.recovery) : this
                                }
                                toBytes(e = "compact") {
                                    if ("compact" === e) return (0, o.Id)(f.toBytes(this.r), f.toBytes(this.s));
                                    if ("der" === e) return (0, o.aT)(eh.hexFromSig(this));
                                    throw Error("invalid format")
                                }
                                toHex(e) {
                                    return (0, o.My)(this.toBytes(e))
                                }
                                assertValidity() {}
                                static fromCompact(e) {
                                    return y.fromBytes(b("sig", e), "compact")
                                }
                                static fromDER(e) {
                                    return y.fromBytes(b("sig", e), "der")
                                }
                                toDERRawBytes() {
                                    return this.toBytes("der")
                                }
                                toDERHex() {
                                    return (0, o.My)(this.toBytes("der"))
                                }
                                toCompactRawBytes() {
                                    return this.toBytes("compact")
                                }
                                toCompactHex() {
                                    return (0, o.My)(this.toBytes("compact"))
                                }
                            }

                            function g(e) {
                                try {
                                    return !!eb(f, e)
                                } catch (e) {
                                    return !1
                                }
                            }

                            function m(e = n(h)) {
                                return W(e, l)
                            }
                            let w = {
                                isValidSecretKey: g,
                                isValidPublicKey: function(t, r) {
                                    try {
                                        let n = t.length;
                                        if (!0 === r && n !== c.public || !1 === r && n !== c.publicUncompressed) return !1;
                                        return !!e.fromBytes(t)
                                    } catch (e) {
                                        return !1
                                    }
                                },
                                randomSecretKey: m,
                                isValidPrivateKey: g,
                                randomPrivateKey: m,
                                normPrivateKeyToScalar: e => eb(f, e),
                                precompute: (t = 8, r = e.BASE) => r.precompute(t, !1)
                            };

                            function _(t, r = !0) {
                                return e.BASE.multiply(eb(f, t)).toBytes(r)
                            }

                            function S(t) {
                                if ("bigint" == typeof t) return !1;
                                if (t instanceof e) return !0;
                                if (f.allowedLengths || c.secret === c.public) return;
                                let r = b("key", t).length;
                                return r === c.public || r === c.publicUncompressed
                            }
                            let A = r.bits2int || function(e) {
                                    if (e.length > 8192) throw Error("input is too large");
                                    let t = d(e),
                                        r = 8 * e.length - u;
                                    return r > 0 ? t >> BigInt(r) : t
                                },
                                k = r.bits2int_modN || function(e) {
                                    return f.create(A(e))
                                },
                                B = x(u);

                            function O(e) {
                                return v("num < 2^" + u, e, ec, B), f.toBytes(e)
                            }
                            let I = {
                                    lowS: r.lowS,
                                    prehash: !1
                                },
                                T = {
                                    lowS: r.lowS,
                                    prehash: !1
                                };
                            return e.BASE.precompute(8), Object.freeze({
                                keygen: function(e) {
                                    let t = w.randomSecretKey(e);
                                    return {
                                        secretKey: t,
                                        publicKey: _(t)
                                    }
                                },
                                getPublicKey: _,
                                sign: function(r, a, s = I) {
                                    let {
                                        seed: u,
                                        k2sig: h
                                    } = function(r, i, a = I) {
                                        if (["recovered", "canonical"].some(e => e in a)) throw Error("sign() legacy options not supported");
                                        let {
                                            lowS: s,
                                            prehash: u,
                                            extraEntropy: h
                                        } = a;
                                        null == s && (s = !0), r = b("msgHash", r), el(a), u && (r = b("prehashed msgHash", t(r)));
                                        let d = k(r),
                                            p = eb(f, i),
                                            g = [O(p), O(d)];
                                        if (null != h && !1 !== h) {
                                            let e = !0 === h ? n(c.secret) : h;
                                            g.push(b("extraEntropy", e))
                                        }
                                        return {
                                            seed: (0, o.Id)(...g),
                                            k2sig: function(t) {
                                                let r = A(t);
                                                if (!f.isValidNot0(r)) return;
                                                let n = f.inv(r),
                                                    i = e.BASE.multiply(r).toAffine(),
                                                    o = f.create(i.x);
                                                if (o === ec) return;
                                                let a = f.create(n * f.create(d + o * p));
                                                if (a === ec) return;
                                                let u = 2 * (i.x !== o) | Number(i.y & ed),
                                                    h = a;
                                                if (s && a > l >> ed) {
                                                    var c;
                                                    h = (c = a) > l >> ed ? f.neg(c) : c, u ^= 1
                                                }
                                                return new y(o, h, u)
                                            }
                                        }
                                    }(r, a, s);
                                    return (function(e, t, r) {
                                        if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                                        if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                                        if ("function" != typeof r) throw Error("hmacFn must be a function");
                                        let n = e => new Uint8Array(e),
                                            i = e => Uint8Array.of(e),
                                            a = n(e),
                                            s = n(e),
                                            f = 0,
                                            l = () => {
                                                a.fill(1), s.fill(0), f = 0
                                            },
                                            u = (...e) => r(s, a, ...e),
                                            h = (e = n(0)) => {
                                                s = u(i(0), e), a = u(), 0 !== e.length && (s = u(i(1), e), a = u())
                                            },
                                            c = () => {
                                                if (f++ >= 1e3) throw Error("drbg: tried 1000 values");
                                                let e = 0,
                                                    r = [];
                                                for (; e < t;) {
                                                    let t = (a = u()).slice();
                                                    r.push(t), e += a.length
                                                }
                                                return (0, o.Id)(...r)
                                            };
                                        return (e, t) => {
                                            let r;
                                            for (l(), h(e); !(r = t(c()));) h();
                                            return l(), r
                                        }
                                    })(t.outputLen, f.BYTES, i)(u, h)
                                },
                                verify: function(r, n, i, a = T) {
                                    let s, l;
                                    n = b("msgHash", n), i = b("publicKey", i), el(a);
                                    let {
                                        lowS: u,
                                        prehash: h,
                                        format: c
                                    } = a;
                                    if ("strict" in a) throw Error("options.strict was renamed to lowS");
                                    if (void 0 === c) {
                                        let e = "string" == typeof r || (0, o.aY)(r),
                                            t = !e && null !== r && "object" == typeof r && "bigint" == typeof r.r && "bigint" == typeof r.s;
                                        if (!e && !t) throw Error("invalid signature, expected Uint8Array, hex string or Signature instance");
                                        if (t) l = new y(r.r, r.s);
                                        else if (e) {
                                            try {
                                                l = y.fromDER(r)
                                            } catch (e) {
                                                if (!(e instanceof eh.Err)) throw e
                                            }
                                            if (!l) try {
                                                l = y.fromCompact(r)
                                            } catch (e) {
                                                return !1
                                            }
                                        }
                                    } else if ("compact" === c || "der" === c) {
                                        if ("string" != typeof r && !(0, o.aY)(r)) throw Error('"der" / "compact" format expects Uint8Array signature');
                                        l = y.fromBytes(b("sig", r), c)
                                    } else if ("js" === c) {
                                        if (!(r instanceof y)) throw Error('"js" format expects Signature instance');
                                        l = r
                                    } else throw Error('format must be "compact", "der" or "js"');
                                    if (!l) return !1;
                                    try {
                                        if (s = e.fromHex(i), u && l.hasHighS()) return !1;
                                        h && (n = t(n));
                                        let {
                                            r,
                                            s: o
                                        } = l, a = k(n), c = f.inv(o), d = f.create(a * c), p = f.create(r * c), y = e.BASE.multiplyUnsafe(d).add(s.multiplyUnsafe(p));
                                        if (y.is0()) return !1;
                                        return f.create(y.x) === r
                                    } catch (e) {
                                        return !1
                                    }
                                },
                                getSharedSecret: function(t, r, n = !0) {
                                    if (!0 === S(t)) throw Error("first arg must be private key");
                                    if (!1 === S(r)) throw Error("second arg must be public key");
                                    let i = eb(f, t);
                                    return e.fromHex(r).multiply(i).toBytes(n)
                                },
                                utils: w,
                                Point: e,
                                Signature: y,
                                info: {
                                    type: "weierstrass",
                                    lengths: c,
                                    publicKeyHasPrefix: !0
                                }
                            })
                        }(function(e, t = {}) {
                            var r, n, i;
                            let {
                                Fp: a,
                                Fn: s
                            } = function(e, t, r = {}) {
                                if (!t || "object" != typeof t) throw Error(`expected valid ${e} CURVE object`);
                                for (let e of ["p", "n", "h"]) {
                                    let r = t[e];
                                    if (!("bigint" == typeof r && r > G)) throw Error(`CURVE.${e} must be positive bigint`)
                                }
                                let n = es(t.p, r.Fp),
                                    i = es(t.n, r.Fn);
                                for (let r of ["Gx", "Gy", "a", "weierstrass" === e ? "b" : "d"])
                                    if (!n.isValid(t[r])) throw Error(`CURVE.${r} must be valid field element of CURVE.Fp`);
                                return {
                                    Fp: n,
                                    Fn: i
                                }
                            }("weierstrass", e, t), {
                                h: f,
                                n: l
                            } = e;
                            E(t, {}, {
                                allowInfinityPoint: "boolean",
                                clearCofactor: "function",
                                isTorsionFree: "function",
                                fromBytes: "function",
                                toBytes: "function",
                                endo: "object",
                                wrapPrivateKey: "boolean"
                            });
                            let {
                                endo: h
                            } = t;
                            if (h && (!a.is0(e.a) || "bigint" != typeof h.beta || !Array.isArray(h.basises))) throw Error('invalid endo: expected "beta": bigint and "basises": array');

                            function c() {
                                if (!a.isOdd) throw Error("compression is not supported: Field does not have .isOdd()")
                            }
                            let d = t.toBytes || function(e, t, r) {
                                    let {
                                        x: n,
                                        y: i
                                    } = t.toAffine(), s = a.toBytes(n);
                                    if (u("isCompressed", r), !r) return (0, o.Id)(Uint8Array.of(4), s, a.toBytes(i)); {
                                        c();
                                        let e = !a.isOdd(i);
                                        return (0, o.Id)(em(e), s)
                                    }
                                },
                                p = t.fromBytes || function(e) {
                                    (0, o.DO)(e);
                                    let t = a.BYTES,
                                        r = t + 1,
                                        n = 2 * t + 1,
                                        i = e.length,
                                        s = e[0],
                                        f = e.subarray(1);
                                    if (i === r && (2 === s || 3 === s)) {
                                        let e;
                                        let t = a.fromBytes(f);
                                        if (!a.isValid(t)) throw Error("bad point: is not on curve, wrong x");
                                        let r = y(t);
                                        try {
                                            e = a.sqrt(r)
                                        } catch (e) {
                                            throw Error("bad point: is not on curve, sqrt error" + (e instanceof Error ? ": " + e.message : ""))
                                        }
                                        return c(), (1 & s) == 1 !== a.isOdd(e) && (e = a.neg(e)), {
                                            x: t,
                                            y: e
                                        }
                                    }
                                    if (i === n && 4 === s) {
                                        let e = a.fromBytes(f.subarray(0 * t, +t)),
                                            r = a.fromBytes(f.subarray(+t, 2 * t));
                                        if (!g(e, r)) throw Error("bad point: is not on curve");
                                        return {
                                            x: e,
                                            y: r
                                        }
                                    }
                                    throw Error(`bad point: got length ${i}, expected compressed=${r} or uncompressed=${n}`)
                                },
                                y = (r = a, n = e.a, i = e.b, function(e) {
                                    let t = r.sqr(e),
                                        o = r.mul(t, e);
                                    return r.add(r.add(o, r.mul(e, n)), i)
                                });

                            function g(e, t) {
                                let r = a.sqr(t),
                                    n = y(e);
                                return a.eql(r, n)
                            }
                            if (!g(e.Gx, e.Gy)) throw Error("bad curve params: generator point");
                            let m = a.mul(a.pow(e.a, ey), eg),
                                w = a.mul(a.sqr(e.b), BigInt(27));
                            if (a.is0(a.add(m, w))) throw Error("bad curve params: a or b");

                            function v(e, t, r = !1) {
                                if (!a.isValid(t) || r && a.is0(t)) throw Error(`bad point coordinate ${e}`);
                                return t
                            }

                            function A(e) {
                                if (!(e instanceof T)) throw Error("ProjectivePoint expected")
                            }

                            function k(e) {
                                if (!h || !h.basises) throw Error("no endo");
                                return function(e, t, r) {
                                    let [
                                        [n, i],
                                        [o, a]
                                    ] = t, s = ef(a * e, r), f = ef(-i * e, r), l = e - s * n - f * o, u = -s * i - f * a, h = l < ec, c = u < ec;
                                    h && (l = -l), c && (u = -u);
                                    let d = x(Math.ceil(_(r) / 2)) + ed;
                                    if (l < ec || l >= d || u < ec || u >= d) throw Error("splitScalar (endomorphism): failed, k=" + e);
                                    return {
                                        k1neg: h,
                                        k1: l,
                                        k2neg: c,
                                        k2: u
                                    }
                                }(e, h.basises, s.ORDER)
                            }
                            let B = S((e, t) => {
                                    let {
                                        X: r,
                                        Y: n,
                                        Z: i
                                    } = e;
                                    if (a.eql(i, a.ONE)) return {
                                        x: r,
                                        y: n
                                    };
                                    let o = e.is0();
                                    null == t && (t = o ? a.ONE : a.inv(i));
                                    let s = a.mul(r, t),
                                        f = a.mul(n, t),
                                        l = a.mul(i, t);
                                    if (o) return {
                                        x: a.ZERO,
                                        y: a.ZERO
                                    };
                                    if (!a.eql(l, a.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: s,
                                        y: f
                                    }
                                }),
                                O = S(e => {
                                    if (e.is0()) {
                                        if (t.allowInfinityPoint && !a.is0(e.Y)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: r,
                                        y: n
                                    } = e.toAffine();
                                    if (!a.isValid(r) || !a.isValid(n)) throw Error("bad point: x or y not field elements");
                                    if (!g(r, n)) throw Error("bad point: equation left != right");
                                    if (!e.isTorsionFree()) throw Error("bad point: not in prime-order subgroup");
                                    return !0
                                });

                            function I(e, t, r, n, i) {
                                return r = new T(a.mul(r.X, e), r.Y, r.Z), t = X(n, t), r = X(i, r), t.add(r)
                            }
                            class T {
                                constructor(e, t, r) {
                                    this.X = v("x", e), this.Y = v("y", t, !0), this.Z = v("z", r), Object.freeze(this)
                                }
                                static fromAffine(e) {
                                    let {
                                        x: t,
                                        y: r
                                    } = e || {};
                                    if (!e || !a.isValid(t) || !a.isValid(r)) throw Error("invalid affine point");
                                    if (e instanceof T) throw Error("projective point not allowed");
                                    return a.is0(t) && a.is0(r) ? T.ZERO : new T(t, r, a.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                get px() {
                                    return this.X
                                }
                                get py() {
                                    return this.X
                                }
                                get pz() {
                                    return this.Z
                                }
                                static normalizeZ(e) {
                                    return Q(T, e)
                                }
                                static fromBytes(e) {
                                    return (0, o.DO)(e), T.fromHex(e)
                                }
                                static fromHex(e) {
                                    let t = T.fromAffine(p(b("pointHex", e)));
                                    return t.assertValidity(), t
                                }
                                static fromPrivateKey(e) {
                                    return T.BASE.multiply(eb(s, e))
                                }
                                static msm(e, t) {
                                    return function(e, t, r, n) {
                                        (function(e, t) {
                                            if (!Array.isArray(e)) throw Error("array expected");
                                            e.forEach((e, r) => {
                                                if (!(e instanceof t)) throw Error("invalid point at index " + r)
                                            })
                                        })(r, e),
                                        function(e, t) {
                                            if (!Array.isArray(e)) throw Error("array of scalars expected");
                                            e.forEach((e, r) => {
                                                if (!t.isValid(e)) throw Error("invalid scalar at index " + r)
                                            })
                                        }(n, t);
                                        let i = r.length,
                                            o = n.length;
                                        if (i !== o) throw Error("arrays of points and scalars must have equal length");
                                        let a = e.ZERO,
                                            s = _(BigInt(i)),
                                            f = 1;
                                        s > 12 ? f = s - 3 : s > 4 ? f = s - 2 : s > 0 && (f = 2);
                                        let l = x(f),
                                            u = Array(Number(l) + 1).fill(a),
                                            h = Math.floor((t.BITS - 1) / f) * f,
                                            c = a;
                                        for (let e = h; e >= 0; e -= f) {
                                            u.fill(a);
                                            for (let t = 0; t < o; t++) {
                                                let i = Number(n[t] >> BigInt(e) & l);
                                                u[i] = u[i].add(r[t])
                                            }
                                            let t = a;
                                            for (let e = u.length - 1, r = a; e > 0; e--) r = r.add(u[e]), t = t.add(r);
                                            if (c = c.add(t), 0 !== e)
                                                for (let e = 0; e < f; e++) c = c.double()
                                        }
                                        return c
                                    }(T, s, e, t)
                                }
                                _setWindowSize(e) {
                                    this.precompute(e)
                                }
                                precompute(e = 8, t = !0) {
                                    return M.createCache(this, e), t || this.multiply(ey), this
                                }
                                assertValidity() {
                                    O(this)
                                }
                                hasEvenY() {
                                    let {
                                        y: e
                                    } = this.toAffine();
                                    if (!a.isOdd) throw Error("Field doesn't support isOdd");
                                    return !a.isOdd(e)
                                }
                                equals(e) {
                                    A(e);
                                    let {
                                        X: t,
                                        Y: r,
                                        Z: n
                                    } = this, {
                                        X: i,
                                        Y: o,
                                        Z: s
                                    } = e, f = a.eql(a.mul(t, s), a.mul(i, n)), l = a.eql(a.mul(r, s), a.mul(o, n));
                                    return f && l
                                }
                                negate() {
                                    return new T(this.X, a.neg(this.Y), this.Z)
                                }
                                double() {
                                    let {
                                        a: t,
                                        b: r
                                    } = e, n = a.mul(r, ey), {
                                        X: i,
                                        Y: o,
                                        Z: s
                                    } = this, f = a.ZERO, l = a.ZERO, u = a.ZERO, h = a.mul(i, i), c = a.mul(o, o), d = a.mul(s, s), p = a.mul(i, o);
                                    return p = a.add(p, p), u = a.mul(i, s), u = a.add(u, u), f = a.mul(t, u), l = a.mul(n, d), l = a.add(f, l), f = a.sub(c, l), l = a.add(c, l), l = a.mul(f, l), f = a.mul(p, f), u = a.mul(n, u), d = a.mul(t, d), p = a.sub(h, d), p = a.mul(t, p), p = a.add(p, u), u = a.add(h, h), h = a.add(u, h), h = a.add(h, d), h = a.mul(h, p), l = a.add(l, h), d = a.mul(o, s), d = a.add(d, d), h = a.mul(d, p), f = a.sub(f, h), u = a.mul(d, c), u = a.add(u, u), new T(f, l, u = a.add(u, u))
                                }
                                add(t) {
                                    A(t);
                                    let {
                                        X: r,
                                        Y: n,
                                        Z: i
                                    } = this, {
                                        X: o,
                                        Y: s,
                                        Z: f
                                    } = t, l = a.ZERO, u = a.ZERO, h = a.ZERO, c = e.a, d = a.mul(e.b, ey), p = a.mul(r, o), y = a.mul(n, s), g = a.mul(i, f), b = a.add(r, n), m = a.add(o, s);
                                    b = a.mul(b, m), m = a.add(p, y), b = a.sub(b, m), m = a.add(r, i);
                                    let w = a.add(o, f);
                                    return m = a.mul(m, w), w = a.add(p, g), m = a.sub(m, w), w = a.add(n, i), l = a.add(s, f), w = a.mul(w, l), l = a.add(y, g), w = a.sub(w, l), h = a.mul(c, m), l = a.mul(d, g), h = a.add(l, h), l = a.sub(y, h), h = a.add(y, h), u = a.mul(l, h), y = a.add(p, p), y = a.add(y, p), g = a.mul(c, g), m = a.mul(d, m), y = a.add(y, g), g = a.sub(p, g), g = a.mul(c, g), m = a.add(m, g), p = a.mul(y, m), u = a.add(u, p), p = a.mul(w, m), l = a.mul(b, l), l = a.sub(l, p), p = a.mul(b, y), h = a.mul(w, h), new T(l, u, h = a.add(h, p))
                                }
                                subtract(e) {
                                    return this.add(e.negate())
                                }
                                is0() {
                                    return this.equals(T.ZERO)
                                }
                                multiply(e) {
                                    let r, n;
                                    let {
                                        endo: i
                                    } = t;
                                    if (!s.isValidNot0(e)) throw Error("invalid scalar: out of range");
                                    let o = e => M.cached(this, e, e => Q(T, e));
                                    if (i) {
                                        let {
                                            k1neg: t,
                                            k1: a,
                                            k2neg: s,
                                            k2: f
                                        } = k(e), {
                                            p: l,
                                            f: u
                                        } = o(a), {
                                            p: h,
                                            f: c
                                        } = o(f);
                                        n = u.add(c), r = I(i.beta, l, h, t, s)
                                    } else {
                                        let {
                                            p: t,
                                            f: i
                                        } = o(e);
                                        r = t, n = i
                                    }
                                    return Q(T, [r, n])[0]
                                }
                                multiplyUnsafe(e) {
                                    let {
                                        endo: r
                                    } = t;
                                    if (!s.isValid(e)) throw Error("invalid scalar: out of range");
                                    if (e === ec || this.is0()) return T.ZERO;
                                    if (e === ed) return this;
                                    if (M.hasCache(this)) return this.multiply(e);
                                    if (!r) return M.unsafe(this, e); {
                                        let {
                                            k1neg: t,
                                            k1: n,
                                            k2neg: i,
                                            k2: o
                                        } = k(e), {
                                            p1: a,
                                            p2: s
                                        } = function(e, t, r, n) {
                                            let i = t,
                                                o = e.ZERO,
                                                a = e.ZERO;
                                            for (; r > G || n > G;) r & Y && (o = o.add(i)), n & Y && (a = a.add(i)), i = i.double(), r >>= Y, n >>= Y;
                                            return {
                                                p1: o,
                                                p2: a
                                            }
                                        }(T, this, n, o);
                                        return I(r.beta, a, s, t, i)
                                    }
                                }
                                multiplyAndAddUnsafe(e, t, r) {
                                    let n = this.multiplyUnsafe(t).add(e.multiplyUnsafe(r));
                                    return n.is0() ? void 0 : n
                                }
                                toAffine(e) {
                                    return B(this, e)
                                }
                                isTorsionFree() {
                                    let {
                                        isTorsionFree: e
                                    } = t;
                                    return f === ed || (e ? e(T, this) : M.unsafe(this, l).is0())
                                }
                                clearCofactor() {
                                    let {
                                        clearCofactor: e
                                    } = t;
                                    return f === ed ? this : e ? e(T, this) : this.multiplyUnsafe(f)
                                }
                                isSmallOrder() {
                                    return this.multiplyUnsafe(f).is0()
                                }
                                toBytes(e = !0) {
                                    return u("isCompressed", e), this.assertValidity(), d(T, this, e)
                                }
                                toRawBytes(e = !0) {
                                    return this.toBytes(e)
                                }
                                toHex(e = !0) {
                                    return (0, o.My)(this.toBytes(e))
                                }
                                toString() {
                                    return `<Point ${this.is0()?"ZERO":this.toHex()}>`
                                }
                            }
                            T.BASE = new T(e.Gx, e.Gy, a.ONE), T.ZERO = new T(a.ZERO, a.ONE, a.ZERO), T.Fp = a, T.Fn = s;
                            let R = s.BITS,
                                M = new ea(T, t.endo ? Math.ceil(R / 2) : R);
                            return T
                        }(t, r), n, i);
                        return Object.assign({}, a, {
                            ProjectivePoint: a.Point,
                            CURVE: e
                        })
                    })({ ...e,
                        hash: t
                    });
                    return { ...r(t),
                        create: r
                    }
                }({ ...ew,
                    Fp: eA,
                    lowS: !0,
                    endo: ev
                }, i.sc),
                eB = {};

            function eO(e, ...t) {
                let r = eB[e];
                if (void 0 === r) {
                    let t = (0, i.sc)(Uint8Array.from(e, e => e.charCodeAt(0)));
                    r = (0, o.Id)(t, t), eB[e] = r
                }
                return (0, i.sc)((0, o.Id)(r, ...t))
            }
            let eI = e => e.toBytes(!0).slice(1),
                eT = e => y(e, 32),
                eR = e => U(e, ew.p),
                eM = e => U(e, ew.n),
                eP = ek.Point,
                eL = e => e % eE === e_;

            function eU(e) {
                let t = eb(eP.Fn, e),
                    r = eP.BASE.multiply(t);
                return {
                    scalar: eL(r.y) ? t : eM(-t),
                    bytes: eI(r)
                }
            }

            function eN(e) {
                v("x", e, ex, ew.p);
                let t = eR(e * e),
                    r = eS(eR(t * e + BigInt(7)));
                eL(r) || (r = eR(-r));
                let n = eP.fromAffine({
                    x: e,
                    y: r
                });
                return n.assertValidity(), n
            }

            function eC(...e) {
                return eM(d(eO("BIP0340/challenge", ...e)))
            }

            function ej(e) {
                return eU(e).bytes
            }

            function eH(e, t, r = (0, o.po)(32)) {
                let n = b("message", e),
                    {
                        bytes: i,
                        scalar: a
                    } = eU(t),
                    s = eT(a ^ d(eO("BIP0340/aux", b("auxRand", r, 32)))),
                    f = eM(d(eO("BIP0340/nonce", s, i, n)));
                if (f === e_) throw Error("sign failed: k is zero");
                let {
                    bytes: l,
                    scalar: u
                } = eU(f), h = eC(l, i, n), c = new Uint8Array(64);
                if (c.set(l, 0), c.set(eT(eM(u + h * a)), 32), !eD(c, n, i)) throw Error("sign: Invalid signature produced");
                return c
            }

            function eD(e, t, r) {
                let n = b("signature", e, 64),
                    i = b("message", t),
                    o = b("publicKey", r, 32);
                try {
                    let e = eN(d(o)),
                        t = d(n.subarray(0, 32));
                    if (!w(t, ex, ew.p)) return !1;
                    let r = d(n.subarray(32, 64));
                    if (!w(r, ex, ew.n)) return !1;
                    let a = eC(eT(t), eI(e), i),
                        s = eP.BASE.multiplyUnsafe(r).add(e.multiplyUnsafe(eM(-a))),
                        {
                            x: f,
                            y: l
                        } = s.toAffine();
                    if (s.is0() || !eL(l) || f !== t) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }
            let eK = (() => {
                let e = 48,
                    t = (t = (0, o.po)(e)) => W(t, ew.n);
                return ek.utils.randomSecretKey, {
                    keygen: function(e) {
                        let r = t(e);
                        return {
                            secretKey: r,
                            publicKey: ej(r)
                        }
                    },
                    getPublicKey: ej,
                    sign: eH,
                    verify: eD,
                    Point: eP,
                    utils: {
                        randomSecretKey: t,
                        randomPrivateKey: t,
                        taggedHash: eO,
                        lift_x: eN,
                        pointToBytes: eI,
                        numberToBytesBE: y,
                        bytesToNumberBE: d,
                        mod: U
                    },
                    info: {
                        type: "weierstrass",
                        publicKeyHasPrefix: !1,
                        lengths: {
                            secret: 32,
                            public: 32,
                            signature: 64,
                            seed: e
                        }
                    }
                }
            })();
            var e$ = r(52344);
            let ez = Uint32Array.from([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
            e$.ol, e$.ol;
            let eF = Uint8Array.from([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
                eq = Uint8Array.from(Array(16).fill(0).map((e, t) => t)),
                eZ = eq.map(e => (9 * e + 5) % 16),
                eV = (() => {
                    let e = [
                        [eq],
                        [eZ]
                    ];
                    for (let t = 0; t < 4; t++)
                        for (let r of e) r.push(r[t].map(e => eF[e]));
                    return e
                })(),
                eW = eV[0],
                eG = eV[1],
                eY = [
                    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
                    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
                    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
                    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
                    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
                ].map(e => Uint8Array.from(e)),
                eX = eW.map((e, t) => e.map(e => eY[t][e])),
                eQ = eG.map((e, t) => e.map(e => eY[t][e])),
                eJ = Uint32Array.from([0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]),
                e0 = Uint32Array.from([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0]);

            function e1(e, t, r, n) {
                return 0 === e ? t ^ r ^ n : 1 === e ? t & r | ~t & n : 2 === e ? (t | ~r) ^ n : 3 === e ? t & n | r & ~n : t ^ (r | ~n)
            }
            let e2 = new Uint32Array(16);
            class e5 extends e$.ol {
                constructor() {
                    super(64, 20, 8, !0), this.h0 = 0x67452301, this.h1 = -0x10325477, this.h2 = -0x67452302, this.h3 = 0x10325476, this.h4 = -0x3c2d1e10
                }
                get() {
                    let {
                        h0: e,
                        h1: t,
                        h2: r,
                        h3: n,
                        h4: i
                    } = this;
                    return [e, t, r, n, i]
                }
                set(e, t, r, n, i) {
                    this.h0 = 0 | e, this.h1 = 0 | t, this.h2 = 0 | r, this.h3 = 0 | n, this.h4 = 0 | i
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) e2[r] = e.getUint32(t, !0);
                    let r = 0 | this.h0,
                        n = r,
                        i = 0 | this.h1,
                        a = i,
                        s = 0 | this.h2,
                        f = s,
                        l = 0 | this.h3,
                        u = l,
                        h = 0 | this.h4,
                        c = h;
                    for (let e = 0; e < 5; e++) {
                        let t = 4 - e,
                            d = eJ[e],
                            p = e0[e],
                            y = eW[e],
                            g = eG[e],
                            b = eX[e],
                            m = eQ[e];
                        for (let t = 0; t < 16; t++) {
                            let n = (0, o.aZ)(r + e1(e, i, s, l) + e2[y[t]] + d, b[t]) + h | 0;
                            r = h, h = l, l = 0 | (0, o.aZ)(s, 10), s = i, i = n
                        }
                        for (let e = 0; e < 16; e++) {
                            let r = (0, o.aZ)(n + e1(t, a, f, u) + e2[g[e]] + p, m[e]) + c | 0;
                            n = c, c = u, u = 0 | (0, o.aZ)(f, 10), f = a, a = r
                        }
                    }
                    this.set(this.h1 + s + u | 0, this.h2 + l + c | 0, this.h3 + h + n | 0, this.h4 + r + a | 0, this.h0 + i + f | 0)
                }
                roundClean() {
                    (0, o.uH)(e2)
                }
                destroy() {
                    this.destroyed = !0, (0, o.uH)(this.buffer), this.set(0, 0, 0, 0, 0)
                }
            }
            let e3 = (0, o.qj)(() => new e5);
            var e8 = r(3098);
            let e6 = ek.ProjectivePoint,
                e4 = ek.CURVE.n,
                e7 = e8.Wp.isBytes,
                e9 = e8.Wp.concatBytes,
                te = e8.Wp.equalBytes,
                tt = e => e3((0, i.sc)(e)),
                tr = (...e) => (0, i.sc)((0, i.sc)(e9(...e)));
            eK.utils.randomPrivateKey;
            let tn = eK.getPublicKey,
                ti = ek.getPublicKey,
                to = e => e.r < e4 / 2 n;

            function ta(e, t, r = !1) {
                let n = ek.sign(e, t);
                if (r && !to(n)) {
                    let r = new Uint8Array(32),
                        i = 0;
                    for (; !to(n);)
                        if (r.set(e8.QK.encode(i++)), n = ek.sign(e, t, {
                                extraEntropy: r
                            }), i > 0xffffffff) throw Error("lowR counter overflow: report the error")
                }
                return n.toDERRawBytes()
            }
            let ts = eK.sign,
                tf = eK.utils.taggedHash;

            function tl(e, t) {
                let r = e.length;
                if (t === n.ecdsa) {
                    if (32 === r) throw Error("Expected non-Schnorr key");
                    return e6.fromHex(e), e
                }
                if (t === n.schnorr) {
                    if (32 !== r) throw Error("Expected 32-byte Schnorr key");
                    return eK.utils.lift_x(eK.utils.bytesToNumberBE(e)), e
                }
                throw Error("Unknown key type")
            }

            function tu(e, t) {
                let r = eK.utils,
                    n = r.taggedHash("TapTweak", e, t),
                    i = r.bytesToNumberBE(n);
                if (i >= e4) throw Error("tweak higher than curve order");
                return i
            }

            function th(e, t = Uint8Array.of()) {
                let r = eK.utils,
                    n = r.bytesToNumberBE(e),
                    i = e6.fromPrivateKey(n),
                    o = i.hasEvenY() ? n : r.mod(-n, e4),
                    a = tu(r.pointToBytes(i), t);
                return r.numberToBytesBE(r.mod(o + a, e4), 32)
            }

            function tc(e, t) {
                let r = eK.utils,
                    n = tu(e, t),
                    i = r.lift_x(r.bytesToNumberBE(e)).add(e6.fromPrivateKey(n)),
                    o = +!i.hasEvenY();
                return [r.pointToBytes(i), o]
            }! function(e) {
                e[e.ecdsa = 0] = "ecdsa", e[e.schnorr = 1] = "schnorr"
            }(n || (n = {}));
            let td = (0, i.sc)(e6.BASE.toRawBytes(!1)),
                tp = {
                    bech32: "bc",
                    pubKeyHash: 0,
                    scriptHash: 5,
                    wif: 128
                };

            function ty(e, t) {
                if (!e7(e) || !e7(t)) throw Error(`cmp: wrong type a=${typeof e} b=${typeof t}`);
                let r = Math.min(e.length, t.length);
                for (let n = 0; n < r; n++)
                    if (e[n] != t[n]) return Math.sign(e[n] - t[n]);
                return Math.sign(e.length - t.length)
            }
        },
        33492: e => {
            "use strict";
            var t = Object.prototype.toString;
            e.exports = function(e) {
                var r = t.call(e),
                    n = "[object Arguments]" === r;
                return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
            }
        },
        34116: (e, t) => {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`)
            }

            function n(e) {
                if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`)
            }

            function i(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function o(e, ...t) {
                if (!i(e)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function a(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function s(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function f(e, t) {
                o(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.output = t.exists = t.hash = t.bytes = t.bool = t.number = t.isBytes = void 0, t.number = r, t.bool = n, t.isBytes = i, t.bytes = o, t.hash = a, t.exists = s, t.output = f, t.default = {
                number: r,
                bool: n,
                bytes: o,
                hash: a,
                exists: s,
                output: f
            }
        },
        37950: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, a, s = [],
                            f = !0,
                            l = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                f = !1
                            } else
                                for (; !(f = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); f = !0);
                        } catch (e) {
                            l = !0, i = e
                        } finally {
                            try {
                                if (!f && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var a = void 0 !== /a/g.flags,
                s = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        return t.push(e)
                    }), t
                },
                f = function(e) {
                    var t = [];
                    return e.forEach(function(e, r) {
                        return t.push([r, e])
                    }), t
                },
                l = Object.is ? Object.is : r(11460),
                u = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                    return []
                },
                h = Number.isNaN ? Number.isNaN : r(14292);

            function c(e) {
                return e.call.bind(e)
            }
            var d = c(Object.prototype.hasOwnProperty),
                p = c(Object.prototype.propertyIsEnumerable),
                y = c(Object.prototype.toString),
                g = r(84864).types,
                b = g.isAnyArrayBuffer,
                m = g.isArrayBufferView,
                w = g.isDate,
                v = g.isMap,
                _ = g.isRegExp,
                x = g.isSet,
                E = g.isNativeError,
                S = g.isBoxedPrimitive,
                A = g.isNumberObject,
                k = g.isStringObject,
                B = g.isBooleanObject,
                O = g.isBigIntObject,
                I = g.isSymbolObject,
                T = g.isFloat32Array,
                R = g.isFloat64Array;

            function M(e) {
                if (0 === e.length || e.length > 10) return !0;
                for (var t = 0; t < e.length; t++) {
                    var r = e.charCodeAt(t);
                    if (r < 48 || r > 57) return !0
                }
                return 10 === e.length && e >= 0x100000000
            }

            function P(e) {
                return Object.keys(e).filter(M).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))
            }

            function L(e, t) {
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : +(n < r)
            }
            var U = void 0;

            function N(e, t, r, n) {
                if (e === t) return 0 !== e || !r || l(e, t);
                if (r) {
                    if ("object" !== o(e)) return "number" == typeof e && h(e) && h(t);
                    if ("object" !== o(t) || null === e || null === t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
                } else {
                    if (null === e || "object" !== o(e)) return (null === t || "object" !== o(t)) && e == t;
                    if (null === t || "object" !== o(t)) return !1
                }
                var i = y(e);
                if (i !== y(t)) return !1;
                if (Array.isArray(e)) {
                    if (e.length !== t.length) return !1;
                    var s = P(e, U),
                        f = P(t, U);
                    return s.length === f.length && j(e, t, r, n, 1, s)
                }
                if ("[object Object]" === i && (!v(e) && v(t) || !x(e) && x(t))) return !1;
                if (w(e)) {
                    if (!w(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1
                } else if (_(e)) {
                    if (!_(t) || (a ? e.source !== t.source || e.flags !== t.flags : RegExp.prototype.toString.call(e) !== RegExp.prototype.toString.call(t))) return !1
                } else if (E(e) || e instanceof Error) {
                    if (e.message !== t.message || e.name !== t.name) return !1
                } else if (m(e)) {
                    if (!r && (T(e) || R(e))) {
                        if (! function(e, t) {
                                if (e.byteLength !== t.byteLength) return !1;
                                for (var r = 0; r < e.byteLength; r++)
                                    if (e[r] !== t[r]) return !1;
                                return !0
                            }(e, t)) return !1
                    } else if (e.byteLength !== t.byteLength || 0 !== L(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))) return !1;
                    var u = P(e, U),
                        c = P(t, U);
                    return u.length === c.length && j(e, t, r, n, 0, u)
                } else if (x(e)) return !!x(t) && e.size === t.size && j(e, t, r, n, 2);
                else if (v(e)) return !!v(t) && e.size === t.size && j(e, t, r, n, 3);
                else if (b(e)) {
                    if (e.byteLength !== t.byteLength || 0 !== L(new Uint8Array(e), new Uint8Array(t))) return !1
                } else if (S(e) && (A(e) ? !(A(t) && l(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t))) : k(e) ? !k(t) || String.prototype.valueOf.call(e) !== String.prototype.valueOf.call(t) : B(e) ? !B(t) || Boolean.prototype.valueOf.call(e) !== Boolean.prototype.valueOf.call(t) : O(e) ? !O(t) || BigInt.prototype.valueOf.call(e) !== BigInt.prototype.valueOf.call(t) : !I(t) || Symbol.prototype.valueOf.call(e) !== Symbol.prototype.valueOf.call(t))) return !1;
                return j(e, t, r, n, 0)
            }

            function C(e, t) {
                return t.filter(function(t) {
                    return p(e, t)
                })
            }

            function j(e, t, r, i, a, l) {
                if (5 == arguments.length) {
                    l = Object.keys(e);
                    var h = Object.keys(t);
                    if (l.length !== h.length) return !1
                }
                for (var c = 0; c < l.length; c++)
                    if (!d(t, l[c])) return !1;
                if (r && 5 == arguments.length) {
                    var y = u(e);
                    if (0 !== y.length) {
                        var g = 0;
                        for (c = 0; c < y.length; c++) {
                            var b = y[c];
                            if (p(e, b)) {
                                if (!p(t, b)) return !1;
                                l.push(b), g++
                            } else if (p(t, b)) return !1
                        }
                        var m = u(t);
                        if (y.length !== m.length && C(t, m).length !== g) return !1
                    } else {
                        var w = u(t);
                        if (0 !== w.length && 0 !== C(t, w).length) return !1
                    }
                }
                if (0 === l.length && (0 === a || 1 === a && 0 === e.length || 0 === e.size)) return !0;
                if (void 0 === i) i = {
                    val1: new Map,
                    val2: new Map,
                    position: 0
                };
                else {
                    var v = i.val1.get(e);
                    if (void 0 !== v) {
                        var _ = i.val2.get(t);
                        if (void 0 !== _) return v === _
                    }
                    i.position++
                }
                i.val1.set(e, i.position), i.val2.set(t, i.position);
                var x = function(e, t, r, i, a, l) {
                    var u = 0;
                    if (2 === l) {
                        if (! function(e, t, r, n) {
                                for (var i = null, a = s(e), f = 0; f < a.length; f++) {
                                    var l = a[f];
                                    if ("object" === o(l) && null !== l) null === i && (i = new Set), i.add(l);
                                    else if (!t.has(l)) {
                                        if (r || ! function(e, t, r) {
                                                var n = D(r);
                                                return null != n ? n : t.has(n) && !e.has(n)
                                            }(e, t, l)) return !1;
                                        null === i && (i = new Set), i.add(l)
                                    }
                                }
                                if (null !== i) {
                                    for (var u = s(t), h = 0; h < u.length; h++) {
                                        var c = u[h];
                                        if ("object" === o(c) && null !== c) {
                                            if (!H(i, c, r, n)) return !1
                                        } else if (!r && !e.has(c) && !H(i, c, r, n)) return !1
                                    }
                                    return 0 === i.size
                                }
                                return !0
                            }(e, t, r, a)) return !1
                    } else if (3 === l) {
                        if (! function(e, t, r, i) {
                                for (var a = null, s = f(e), l = 0; l < s.length; l++) {
                                    var u = n(s[l], 2),
                                        h = u[0],
                                        c = u[1];
                                    if ("object" === o(h) && null !== h) null === a && (a = new Set), a.add(h);
                                    else {
                                        var d = t.get(h);
                                        if (void 0 === d && !t.has(h) || !N(c, d, r, i)) {
                                            if (r || ! function(e, t, r, n, i) {
                                                    var o = D(r);
                                                    if (null != o) return o;
                                                    var a = t.get(o);
                                                    return !!((void 0 !== a || t.has(o)) && N(n, a, !1, i)) && !e.has(o) && N(n, a, !1, i)
                                                }(e, t, h, c, i)) return !1;
                                            null === a && (a = new Set), a.add(h)
                                        }
                                    }
                                }
                                if (null !== a) {
                                    for (var p = f(t), y = 0; y < p.length; y++) {
                                        var g = n(p[y], 2),
                                            b = g[0],
                                            m = g[1];
                                        if ("object" === o(b) && null !== b) {
                                            if (!K(a, e, b, m, r, i)) return !1
                                        } else if (!r && (!e.has(b) || !N(e.get(b), m, !1, i)) && !K(a, e, b, m, !1, i)) return !1
                                    }
                                    return 0 === a.size
                                }
                                return !0
                            }(e, t, r, a)) return !1
                    } else if (1 === l)
                        for (; u < e.length; u++)
                            if (d(e, u)) {
                                if (!d(t, u) || !N(e[u], t[u], r, a)) return !1
                            } else {
                                if (d(t, u)) return !1;
                                for (var h = Object.keys(e); u < h.length; u++) {
                                    var c = h[u];
                                    if (!d(t, c) || !N(e[c], t[c], r, a)) return !1
                                }
                                if (h.length !== Object.keys(t).length) return !1;
                                return !0
                            }
                    for (u = 0; u < i.length; u++) {
                        var p = i[u];
                        if (!N(e[p], t[p], r, a)) return !1
                    }
                    return !0
                }(e, t, r, l, i, a);
                return i.val1.delete(e), i.val2.delete(t), x
            }

            function H(e, t, r, n) {
                for (var i = s(e), o = 0; o < i.length; o++) {
                    var a = i[o];
                    if (N(t, a, r, n)) return e.delete(a), !0
                }
                return !1
            }

            function D(e) {
                switch (o(e)) {
                    case "undefined":
                        return null;
                    case "object":
                        return;
                    case "symbol":
                        return !1;
                    case "string":
                        e *= 1;
                    case "number":
                        if (h(e)) return !1
                }
                return !0
            }

            function K(e, t, r, n, i, o) {
                for (var a = s(e), f = 0; f < a.length; f++) {
                    var l = a[f];
                    if (N(r, l, i, o) && N(n, t.get(l), i, o)) return e.delete(l), !0
                }
                return !1
            }
            e.exports = {
                isDeepEqual: function(e, t) {
                    return N(e, t, !1)
                },
                isDeepStrictEqual: function(e, t) {
                    return N(e, t, !0)
                }
            }
        },
        39069: function(e, t, r) {
            "use strict";
            e = r.nmd(e);
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = t.utf8ToBytes = t.createView = t.concatBytes = t.toHex = t.bytesToHex = t.assertBytes = t.assertBool = void 0, t.bytesToUtf8 = function(e) {
                if (!(e instanceof Uint8Array)) throw TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof e}`);
                return new TextDecoder().decode(e)
            }, t.hexToBytes = function(e) {
                let t = e.startsWith("0x") ? e.substring(2) : e;
                return (0, o.hexToBytes)(t)
            }, t.equalsBytes = function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }, t.wrapHash = function(e) {
                return t => (i.default.bytes(t), e(t))
            };
            let i = n(r(34116)),
                o = r(15906);
            t.assertBool = i.default.bool, t.assertBytes = i.default.bytes;
            var a = r(15906);
            Object.defineProperty(t, "bytesToHex", {
                enumerable: !0,
                get: function() {
                    return a.bytesToHex
                }
            }), Object.defineProperty(t, "toHex", {
                enumerable: !0,
                get: function() {
                    return a.bytesToHex
                }
            }), Object.defineProperty(t, "concatBytes", {
                enumerable: !0,
                get: function() {
                    return a.concatBytes
                }
            }), Object.defineProperty(t, "createView", {
                enumerable: !0,
                get: function() {
                    return a.createView
                }
            }), Object.defineProperty(t, "utf8ToBytes", {
                enumerable: !0,
                get: function() {
                    return a.utf8ToBytes
                }
            }), t.crypto = (() => {
                let t = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
                    r = "function" == typeof e.require && e.require.bind(e);
                return {
                    node: r && !t ? r("crypto") : void 0,
                    web: t
                }
            })()
        },
        40174: (e, t, r) => {
            "use strict";
            var n;
            if (!Object.keys) {
                var i = Object.prototype.hasOwnProperty,
                    o = Object.prototype.toString,
                    a = r(33492),
                    s = Object.prototype.propertyIsEnumerable,
                    f = !s.call({
                        toString: null
                    }, "toString"),
                    l = s.call(function() {}, "prototype"),
                    u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    h = function(e) {
                        var t = e.constructor;
                        return t && t.prototype === e
                    },
                    c = {
                        $applicationCache: !0,
                        $console: !0,
                        $external: !0,
                        $frame: !0,
                        $frameElement: !0,
                        $frames: !0,
                        $innerHeight: !0,
                        $innerWidth: !0,
                        $onmozfullscreenchange: !0,
                        $onmozfullscreenerror: !0,
                        $outerHeight: !0,
                        $outerWidth: !0,
                        $pageXOffset: !0,
                        $pageYOffset: !0,
                        $parent: !0,
                        $scrollLeft: !0,
                        $scrollTop: !0,
                        $scrollX: !0,
                        $scrollY: !0,
                        $self: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $window: !0
                    },
                    d = function() {
                        if ("undefined" == typeof window) return !1;
                        for (var e in window) try {
                            if (!c["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                h(window[e])
                            } catch (e) {
                                return !0
                            }
                        } catch (e) {
                            return !0
                        }
                        return !1
                    }(),
                    p = function(e) {
                        if ("undefined" == typeof window || !d) return h(e);
                        try {
                            return h(e)
                        } catch (e) {
                            return !1
                        }
                    };
                n = function(e) {
                    var t = null !== e && "object" == typeof e,
                        r = "[object Function]" === o.call(e),
                        n = a(e),
                        s = t && "[object String]" === o.call(e),
                        h = [];
                    if (!t && !r && !n) throw TypeError("Object.keys called on a non-object");
                    var c = l && r;
                    if (s && e.length > 0 && !i.call(e, 0))
                        for (var d = 0; d < e.length; ++d) h.push(String(d));
                    if (n && e.length > 0)
                        for (var y = 0; y < e.length; ++y) h.push(String(y));
                    else
                        for (var g in e) !(c && "prototype" === g) && i.call(e, g) && h.push(String(g));
                    if (f)
                        for (var b = p(e), m = 0; m < u.length; ++m) !(b && "constructor" === u[m]) && i.call(e, u[m]) && h.push(u[m]);
                    return h
                }
            }
            e.exports = n
        },
        40252: (e, t, r) => {
            ! function() {
                var t = {
                        452: function(e) {
                            "use strict";
                            e.exports = r(70954)
                        }
                    },
                    n = {};

                function i(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var o = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](o, o.exports, i), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return o.exports
                }
                i.ab = "//";
                var o = {};
                ! function() {
                    var e, t = (e = i(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        r = /https?|ftp|gopher|file/;

                    function n(e) {
                        "string" == typeof e && (e = b(e));
                        var n, i, o, a, s, f, l, u, h, c = (i = (n = e).auth, o = n.hostname, a = n.protocol || "", s = n.pathname || "", f = n.hash || "", l = n.query || "", u = !1, i = i ? encodeURIComponent(i).replace(/%3A/i, ":") + "@" : "", n.host ? u = i + n.host : o && (u = i + (~o.indexOf(":") ? "[" + o + "]" : o), n.port && (u += ":" + n.port)), l && "object" == typeof l && (l = t.encode(l)), h = n.search || l && "?" + l || "", a && ":" !== a.substr(-1) && (a += ":"), n.slashes || (!a || r.test(a)) && !1 !== u ? (u = "//" + (u || ""), s && "/" !== s[0] && (s = "/" + s)) : u || (u = ""), f && "#" !== f[0] && (f = "#" + f), h && "?" !== h[0] && (h = "?" + h), {
                            protocol: a,
                            host: u,
                            pathname: s = s.replace(/[?#]/g, encodeURIComponent),
                            search: h = h.replace("#", "%23"),
                            hash: f
                        });
                        return "" + c.protocol + c.host + c.pathname + c.search + c.hash
                    }
                    var a = "http://",
                        s = a + "w.w",
                        f = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        l = /https?|ftp|gopher|file/;

                    function u(e, t) {
                        var r = "string" == typeof e ? b(e) : e;
                        e = "object" == typeof e ? n(e) : e;
                        var i = b(t),
                            o = "";
                        r.protocol && !r.slashes && (o = r.protocol, e = e.replace(r.protocol, ""), o += "/" === t[0] || "/" === e[0] ? "/" : ""), o && i.protocol && (o = "", i.slashes || (o = i.protocol, t = t.replace(i.protocol, "")));
                        var u = e.match(f);
                        u && !i.protocol && (e = e.substr((o = u[1] + (u[2] || "")).length), /^\/\/[^/]/.test(t) && (o = o.slice(0, -1)));
                        var h = new URL(e, s + "/"),
                            c = new URL(t, h).toString().replace(s, ""),
                            d = i.protocol || r.protocol;
                        return d += r.slashes || i.slashes ? "//" : "", !o && d ? c = c.replace(a, d) : o && (c = c.replace(a, "")), l.test(c) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== c.slice(-1) || (c = c.slice(0, -1)), o && (c = o + ("/" === c[0] ? c.substr(1) : c)), c
                    }

                    function h() {}
                    h.prototype.parse = b, h.prototype.format = n, h.prototype.resolve = u, h.prototype.resolveObject = u;
                    var c = /^https?|ftp|gopher|file/,
                        d = /^(.*?)([#?].*)/,
                        p = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        y = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function b(e, r, i) {
                        if (void 0 === r && (r = !1), void 0 === i && (i = !1), e && "object" == typeof e && e instanceof h) return e;
                        var o = (e = e.trim()).match(d);
                        e = o ? o[1].replace(/\\/g, "/") + o[2] : e.replace(/\\/g, "/"), g.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var a = !/(^javascript)/.test(e) && e.match(p),
                            f = y.test(e),
                            l = "";
                        a && (c.test(a[1]) || (l = a[1].toLowerCase(), e = "" + a[2] + a[3]), a[2] || (f = !1, c.test(a[1]) ? (l = a[1], e = "" + a[3]) : e = "//" + a[3]), 3 !== a[2].length && 1 !== a[2].length || (l = a[1], e = "/" + a[3]));
                        var u, b = (o ? o[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            m = b && b[1],
                            w = new h,
                            v = "",
                            _ = "";
                        try {
                            u = new URL(e)
                        } catch (t) {
                            v = t, l || i || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (_ = "/", e = e.substr(1));
                            try {
                                u = new URL(e, s)
                            } catch (e) {
                                return w.protocol = l, w.href = l, w
                            }
                        }
                        w.slashes = f && !_, w.host = "w.w" === u.host ? "" : u.host, w.hostname = "w.w" === u.hostname ? "" : u.hostname.replace(/(\[|\])/g, ""), w.protocol = v ? l || null : u.protocol, w.search = u.search.replace(/\\/g, "%5C"), w.hash = u.hash.replace(/\\/g, "%5C");
                        var x = e.split("#");
                        !w.search && ~x[0].indexOf("?") && (w.search = "?"), w.hash || "" !== x[1] || (w.hash = "#"), w.query = r ? t.decode(u.search.substr(1)) : w.search.substr(1), w.pathname = _ + (a ? u.pathname.replace(/['^|`]/g, function(e) {
                            return "%" + e.charCodeAt().toString(16).toUpperCase()
                        }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                            try {
                                return decodeURIComponent(t).split("").map(function(e) {
                                    var t = e.charCodeAt();
                                    return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                }).join("")
                            } catch (e) {
                                return t
                            }
                        }) : u.pathname), "about:" === w.protocol && "blank" === w.pathname && (w.protocol = "", w.pathname = ""), v && "/" !== e[0] && (w.pathname = w.pathname.substr(1)), l && !c.test(l) && "/" !== e.slice(-1) && "/" === w.pathname && (w.pathname = ""), w.path = w.pathname + w.search, w.auth = [u.username, u.password].map(decodeURIComponent).filter(Boolean).join(":"), w.port = u.port, m && !w.host.endsWith(m) && (w.host += m, w.port = m.slice(1)), w.href = _ ? "" + w.pathname + w.search + w.hash : n(w);
                        var E = /^(file)/.test(w.href) ? ["host", "hostname"] : [];
                        return Object.keys(w).forEach(function(e) {
                            ~E.indexOf(e) || (w[e] = w[e] || null)
                        }), w
                    }
                    o.parse = b, o.format = n, o.resolve = u, o.resolveObject = function(e, t) {
                        return b(u(e, t))
                    }, o.Url = h
                }(), e.exports = o
            }()
        },
        40851: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(t, r);
                    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, i)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalize = t.concatSig = void 0, i(r(29969), t), i(r(72608), t), i(r(79376), t);
            var o = r(91262);
            Object.defineProperty(t, "concatSig", {
                enumerable: !0,
                get: function() {
                    return o.concatSig
                }
            }), Object.defineProperty(t, "normalize", {
                enumerable: !0,
                get: function() {
                    return o.normalize
                }
            })
        },
        43118: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(t, r);
                    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, i)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toAscii = t.stripHexPrefix = t.padToEven = t.isHexString = t.isHexPrefixed = t.getKeys = t.getBinarySize = t.fromUtf8 = t.fromAscii = t.arrayContainsArray = void 0, i(r(93263), t), i(r(52577), t), i(r(81713), t), i(r(46066), t), i(r(25929), t), i(r(81844), t), i(r(50797), t), i(r(83059), t), i(r(71364), t), i(r(66020), t);
            var o = r(61363);
            Object.defineProperty(t, "arrayContainsArray", {
                enumerable: !0,
                get: function() {
                    return o.arrayContainsArray
                }
            }), Object.defineProperty(t, "fromAscii", {
                enumerable: !0,
                get: function() {
                    return o.fromAscii
                }
            }), Object.defineProperty(t, "fromUtf8", {
                enumerable: !0,
                get: function() {
                    return o.fromUtf8
                }
            }), Object.defineProperty(t, "getBinarySize", {
                enumerable: !0,
                get: function() {
                    return o.getBinarySize
                }
            }), Object.defineProperty(t, "getKeys", {
                enumerable: !0,
                get: function() {
                    return o.getKeys
                }
            }), Object.defineProperty(t, "isHexPrefixed", {
                enumerable: !0,
                get: function() {
                    return o.isHexPrefixed
                }
            }), Object.defineProperty(t, "isHexString", {
                enumerable: !0,
                get: function() {
                    return o.isHexString
                }
            }), Object.defineProperty(t, "padToEven", {
                enumerable: !0,
                get: function() {
                    return o.padToEven
                }
            }), Object.defineProperty(t, "stripHexPrefix", {
                enumerable: !0,
                get: function() {
                    return o.stripHexPrefix
                }
            }), Object.defineProperty(t, "toAscii", {
                enumerable: !0,
                get: function() {
                    return o.toAscii
                }
            }), i(r(98417), t), i(r(68599), t)
        },
        44988: (e, t, r) => {
            "use strict";

            function n(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
            }

            function i(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function o(e, ...t) {
                if (!i(e)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function s(e) {
                if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`)
            }
            r.d(t, {
                _: () => D
            });
            let f = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                l = e => new DataView(e.buffer, e.byteOffset, e.byteLength);
            if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
            (e, t) => t.toString(16).padStart(2, "0");
            let u = {
                _0: 48,
                _9: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function h(e) {
                if ("string" == typeof e) e = function(e) {
                    if ("string" != typeof e) throw Error("string expected");
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e);
                else if (i(e)) e = p(e);
                else throw Error("Uint8Array expected, got " + typeof e);
                return e
            }

            function c(e, t, r = !0) {
                if (void 0 === t) return new Uint8Array(e);
                if (t.length !== e) throw Error("invalid output length, expected " + e + ", got: " + t.length);
                if (r && t.byteOffset % 4 != 0) throw Error("invalid output, must be aligned");
                return t
            }

            function d(e, t, r, n) {
                if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                let i = BigInt(32),
                    o = BigInt(0xffffffff),
                    a = Number(r >> i & o),
                    s = Number(r & o),
                    f = 4 * !!n,
                    l = 4 * !n;
                e.setUint32(t + f, a, n), e.setUint32(t + l, s, n)
            }

            function p(e) {
                return Uint8Array.from(e)
            }

            function y(...e) {
                for (let t = 0; t < e.length; t++) e[t].fill(0)
            }
            let g = e => Uint8Array.from(e.split("").map(e => e.charCodeAt(0))),
                b = g("expand 16-byte k"),
                m = g("expand 32-byte k"),
                w = f(b),
                v = f(m);

            function _(e, t) {
                return e << t | e >>> 32 - t
            }

            function x(e) {
                return e.byteOffset % 4 == 0
            }
            let E = 0x100000000 - 1,
                S = new Uint32Array;

            function A(e, t) {
                let {
                    allowShortKeys: r,
                    extendNonceFn: i,
                    counterLength: a,
                    counterRight: l,
                    rounds: u
                } = function(e, t) {
                    if (null == t || "object" != typeof t) throw Error("options must be defined");
                    return Object.assign(e, t)
                }({
                    allowShortKeys: !1,
                    counterLength: 8,
                    counterRight: !1,
                    rounds: 20
                }, t);
                if ("function" != typeof e) throw Error("core must be a function");
                return n(a), n(u), s(l), s(r), (t, s, h, c, d = 0) => {
                    let g, b;
                    o(t), o(s), o(h);
                    let m = h.length;
                    if (void 0 === c && (c = new Uint8Array(m)), o(c), n(d), d < 0 || d >= E) throw Error("arx: counter overflow");
                    if (c.length < m) throw Error(`arx: output (${c.length}) is shorter than data (${m})`);
                    let _ = [],
                        A = t.length;
                    if (32 === A) _.push(g = p(t)), b = v;
                    else if (16 === A && r)(g = new Uint8Array(32)).set(t), g.set(t, 16), b = w, _.push(g);
                    else throw Error(`arx: invalid 32-byte key, got length=${A}`);
                    x(s) || _.push(s = p(s));
                    let k = f(g);
                    if (i) {
                        if (24 !== s.length) throw Error("arx: extended nonce must be 24 bytes");
                        i(b, k, f(s.subarray(0, 16)), k), s = s.subarray(16)
                    }
                    let B = 16 - a;
                    if (B !== s.length) throw Error(`arx: nonce must be ${B} or 16 bytes`);
                    if (12 !== B) {
                        let e = new Uint8Array(12);
                        e.set(s, l ? 0 : 12 - s.length), s = e, _.push(s)
                    }
                    return function(e, t, r, n, i, o, a, s) {
                        let l = i.length,
                            u = new Uint8Array(64),
                            h = f(u),
                            c = x(i) && x(o),
                            d = c ? f(i) : S,
                            p = c ? f(o) : S;
                        for (let f = 0; f < l; a++) {
                            if (e(t, r, n, h, a, s), a >= E) throw Error("arx: counter overflow");
                            let y = Math.min(64, l - f);
                            if (c && 64 === y) {
                                let e = f / 4;
                                if (f % 4 != 0) throw Error("arx: invalid block position");
                                for (let t = 0, r; t < 16; t++) p[r = e + t] = d[r] ^ h[t];
                                f += 64;
                                continue
                            }
                            for (let e = 0, t; e < y; e++) o[t = f + e] = i[t] ^ u[e];
                            f += y
                        }
                    }(e, b, k, f(s), h, c, d, u), y(..._), c
                }
            }
            let k = (e, t) => 255 & e[t++] | (255 & e[t++]) << 8;
            class B {
                constructor(e) {
                    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, o(e = h(e), 32);
                    let t = k(e, 0),
                        r = k(e, 2),
                        n = k(e, 4),
                        i = k(e, 6),
                        a = k(e, 8),
                        s = k(e, 10),
                        f = k(e, 12),
                        l = k(e, 14);
                    this.r[0] = 8191 & t, this.r[1] = (t >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | n << 6) & 7939, this.r[3] = (n >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | a << 12) & 255, this.r[5] = a >>> 1 & 8190, this.r[6] = (a >>> 14 | s << 2) & 8191, this.r[7] = (s >>> 11 | f << 5) & 8065, this.r[8] = (f >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
                    for (let t = 0; t < 8; t++) this.pad[t] = k(e, 16 + 2 * t)
                }
                process(e, t, r = !1) {
                    let {
                        h: n,
                        r: i
                    } = this, o = i[0], a = i[1], s = i[2], f = i[3], l = i[4], u = i[5], h = i[6], c = i[7], d = i[8], p = i[9], y = k(e, t + 0), g = k(e, t + 2), b = k(e, t + 4), m = k(e, t + 6), w = k(e, t + 8), v = k(e, t + 10), _ = k(e, t + 12), x = k(e, t + 14), E = n[0] + (8191 & y), S = n[1] + ((y >>> 13 | g << 3) & 8191), A = n[2] + ((g >>> 10 | b << 6) & 8191), B = n[3] + ((b >>> 7 | m << 9) & 8191), O = n[4] + ((m >>> 4 | w << 12) & 8191), I = n[5] + (w >>> 1 & 8191), T = n[6] + ((w >>> 14 | v << 2) & 8191), R = n[7] + ((v >>> 11 | _ << 5) & 8191), M = n[8] + ((_ >>> 8 | x << 8) & 8191), P = n[9] + (x >>> 5 | 2048 * !r), L = 0, U = 0 + E * o + 5 * p * S + 5 * d * A + 5 * c * B + 5 * h * O;
                    L = U >>> 13, U &= 8191, U += 5 * u * I + 5 * l * T + 5 * f * R + 5 * s * M + 5 * a * P, L += U >>> 13, U &= 8191;
                    let N = L + E * a + S * o + 5 * p * A + 5 * d * B + 5 * c * O;
                    L = N >>> 13, N &= 8191, N += 5 * h * I + 5 * u * T + 5 * l * R + 5 * f * M + 5 * s * P, L += N >>> 13, N &= 8191;
                    let C = L + E * s + S * a + A * o + 5 * p * B + 5 * d * O;
                    L = C >>> 13, C &= 8191, C += 5 * c * I + 5 * h * T + 5 * u * R + 5 * l * M + 5 * f * P, L += C >>> 13, C &= 8191;
                    let j = L + E * f + S * s + A * a + B * o + 5 * p * O;
                    L = j >>> 13, j &= 8191, j += 5 * d * I + 5 * c * T + 5 * h * R + 5 * u * M + 5 * l * P, L += j >>> 13, j &= 8191;
                    let H = L + E * l + S * f + A * s + B * a + O * o;
                    L = H >>> 13, H &= 8191, H += 5 * p * I + 5 * d * T + 5 * c * R + 5 * h * M + 5 * u * P, L += H >>> 13, H &= 8191;
                    let D = L + E * u + S * l + A * f + B * s + O * a;
                    L = D >>> 13, D &= 8191, D += I * o + 5 * p * T + 5 * d * R + 5 * c * M + 5 * h * P, L += D >>> 13, D &= 8191;
                    let K = L + E * h + S * u + A * l + B * f + O * s;
                    L = K >>> 13, K &= 8191, K += I * a + T * o + 5 * p * R + 5 * d * M + 5 * c * P, L += K >>> 13, K &= 8191;
                    let $ = L + E * c + S * h + A * u + B * l + O * f;
                    L = $ >>> 13, $ &= 8191, $ += I * s + T * a + R * o + 5 * p * M + 5 * d * P, L += $ >>> 13, $ &= 8191;
                    let z = L + E * d + S * c + A * h + B * u + O * l;
                    L = z >>> 13, z &= 8191, z += I * f + T * s + R * a + M * o + 5 * p * P, L += z >>> 13, z &= 8191;
                    let F = L + E * p + S * d + A * c + B * h + O * u;
                    L = F >>> 13, F &= 8191, F += I * l + T * f + R * s + M * a + P * o, L += F >>> 13, F &= 8191, U = 8191 & (L = (L = (L << 2) + L | 0) + U | 0), L >>>= 13, N += L, n[0] = U, n[1] = N, n[2] = C, n[3] = j, n[4] = H, n[5] = D, n[6] = K, n[7] = $, n[8] = z, n[9] = F
                }
                finalize() {
                    let {
                        h: e,
                        pad: t
                    } = this, r = new Uint16Array(10), n = e[1] >>> 13;
                    e[1] &= 8191;
                    for (let t = 2; t < 10; t++) e[t] += n, n = e[t] >>> 13, e[t] &= 8191;
                    e[0] += 5 * n, n = e[0] >>> 13, e[0] &= 8191, e[1] += n, n = e[1] >>> 13, e[1] &= 8191, e[2] += n, r[0] = e[0] + 5, n = r[0] >>> 13, r[0] &= 8191;
                    for (let t = 1; t < 10; t++) r[t] = e[t] + n, n = r[t] >>> 13, r[t] &= 8191;
                    r[9] -= 8192;
                    let i = (1 ^ n) - 1;
                    for (let e = 0; e < 10; e++) r[e] &= i;
                    i = ~i;
                    for (let t = 0; t < 10; t++) e[t] = e[t] & i | r[t];
                    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
                    let o = e[0] + t[0];
                    e[0] = 65535 & o;
                    for (let r = 1; r < 8; r++) o = (e[r] + t[r] | 0) + (o >>> 16) | 0, e[r] = 65535 & o;
                    y(r)
                }
                update(e) {
                    a(this);
                    let {
                        buffer: t,
                        blockLen: r
                    } = this, n = (e = h(e)).length;
                    for (let i = 0; i < n;) {
                        let o = Math.min(r - this.pos, n - i);
                        if (o === r) {
                            for (; r <= n - i; i += r) this.process(e, i);
                            continue
                        }
                        t.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === r && (this.process(t, 0, !1), this.pos = 0)
                    }
                    return this
                }
                destroy() {
                    y(this.h, this.r, this.buffer, this.pad)
                }
                digestInto(e) {
                    a(this),
                        function(e, t) {
                            o(e);
                            let r = t.outputLen;
                            if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
                        }(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        h: r
                    } = this, {
                        pos: n
                    } = this;
                    if (n) {
                        for (t[n++] = 1; n < 16; n++) t[n] = 0;
                        this.process(t, 0, !0)
                    }
                    this.finalize();
                    let i = 0;
                    for (let t = 0; t < 8; t++) e[i++] = r[t] >>> 0, e[i++] = r[t] >>> 8;
                    return e
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
            }
            let O = function(e) {
                let t = (t, r) => e(r).update(h(t)).digest(),
                    r = e(new Uint8Array(32));
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }(e => new B(e));

            function I(e, t, r, n, i, o = 20) {
                let a = e[0],
                    s = e[1],
                    f = e[2],
                    l = e[3],
                    u = t[0],
                    h = t[1],
                    c = t[2],
                    d = t[3],
                    p = t[4],
                    y = t[5],
                    g = t[6],
                    b = t[7],
                    m = r[0],
                    w = r[1],
                    v = r[2],
                    x = a,
                    E = s,
                    S = f,
                    A = l,
                    k = u,
                    B = h,
                    O = c,
                    T = d,
                    R = p,
                    M = y,
                    P = g,
                    L = b,
                    U = i,
                    N = m,
                    C = w,
                    j = v;
                for (let e = 0; e < o; e += 2) R = R + (U = _(U ^ (x = x + k | 0), 16)) | 0, x = x + (k = _(k ^ R, 12)) | 0, R = R + (U = _(U ^ x, 8)) | 0, k = _(k ^ R, 7), M = M + (N = _(N ^ (E = E + B | 0), 16)) | 0, E = E + (B = _(B ^ M, 12)) | 0, M = M + (N = _(N ^ E, 8)) | 0, B = _(B ^ M, 7), P = P + (C = _(C ^ (S = S + O | 0), 16)) | 0, S = S + (O = _(O ^ P, 12)) | 0, P = P + (C = _(C ^ S, 8)) | 0, O = _(O ^ P, 7), L = L + (j = _(j ^ (A = A + T | 0), 16)) | 0, A = A + (T = _(T ^ L, 12)) | 0, L = L + (j = _(j ^ A, 8)) | 0, T = _(T ^ L, 7), P = P + (j = _(j ^ (x = x + B | 0), 16)) | 0, x = x + (B = _(B ^ P, 12)) | 0, P = P + (j = _(j ^ x, 8)) | 0, B = _(B ^ P, 7), L = L + (U = _(U ^ (E = E + O | 0), 16)) | 0, E = E + (O = _(O ^ L, 12)) | 0, L = L + (U = _(U ^ E, 8)) | 0, O = _(O ^ L, 7), R = R + (N = _(N ^ (S = S + T | 0), 16)) | 0, S = S + (T = _(T ^ R, 12)) | 0, R = R + (N = _(N ^ S, 8)) | 0, T = _(T ^ R, 7), M = M + (C = _(C ^ (A = A + k | 0), 16)) | 0, A = A + (k = _(k ^ M, 12)) | 0, M = M + (C = _(C ^ A, 8)) | 0, k = _(k ^ M, 7);
                let H = 0;
                n[H++] = a + x | 0, n[H++] = s + E | 0, n[H++] = f + S | 0, n[H++] = l + A | 0, n[H++] = u + k | 0, n[H++] = h + B | 0, n[H++] = c + O | 0, n[H++] = d + T | 0, n[H++] = p + R | 0, n[H++] = y + M | 0, n[H++] = g + P | 0, n[H++] = b + L | 0, n[H++] = i + U | 0, n[H++] = m + N | 0, n[H++] = w + C | 0, n[H++] = v + j | 0
            }
            let T = A(I, {
                    counterRight: !1,
                    counterLength: 4,
                    allowShortKeys: !1
                }),
                R = A(I, {
                    counterRight: !1,
                    counterLength: 8,
                    extendNonceFn: function(e, t, r, n) {
                        let i = e[0],
                            o = e[1],
                            a = e[2],
                            s = e[3],
                            f = t[0],
                            l = t[1],
                            u = t[2],
                            h = t[3],
                            c = t[4],
                            d = t[5],
                            p = t[6],
                            y = t[7],
                            g = r[0],
                            b = r[1],
                            m = r[2],
                            w = r[3];
                        for (let e = 0; e < 20; e += 2) c = c + (g = _(g ^ (i = i + f | 0), 16)) | 0, i = i + (f = _(f ^ c, 12)) | 0, c = c + (g = _(g ^ i, 8)) | 0, f = _(f ^ c, 7), d = d + (b = _(b ^ (o = o + l | 0), 16)) | 0, o = o + (l = _(l ^ d, 12)) | 0, d = d + (b = _(b ^ o, 8)) | 0, l = _(l ^ d, 7), p = p + (m = _(m ^ (a = a + u | 0), 16)) | 0, a = a + (u = _(u ^ p, 12)) | 0, p = p + (m = _(m ^ a, 8)) | 0, u = _(u ^ p, 7), y = y + (w = _(w ^ (s = s + h | 0), 16)) | 0, s = s + (h = _(h ^ y, 12)) | 0, y = y + (w = _(w ^ s, 8)) | 0, h = _(h ^ y, 7), p = p + (w = _(w ^ (i = i + l | 0), 16)) | 0, i = i + (l = _(l ^ p, 12)) | 0, p = p + (w = _(w ^ i, 8)) | 0, l = _(l ^ p, 7), y = y + (g = _(g ^ (o = o + u | 0), 16)) | 0, o = o + (u = _(u ^ y, 12)) | 0, y = y + (g = _(g ^ o, 8)) | 0, u = _(u ^ y, 7), c = c + (b = _(b ^ (a = a + h | 0), 16)) | 0, a = a + (h = _(h ^ c, 12)) | 0, c = c + (b = _(b ^ a, 8)) | 0, h = _(h ^ c, 7), d = d + (m = _(m ^ (s = s + f | 0), 16)) | 0, s = s + (f = _(f ^ d, 12)) | 0, d = d + (m = _(m ^ s, 8)) | 0, f = _(f ^ d, 7);
                        let v = 0;
                        n[v++] = i, n[v++] = o, n[v++] = a, n[v++] = s, n[v++] = g, n[v++] = b, n[v++] = m, n[v++] = w
                    },
                    allowShortKeys: !1
                }),
                M = new Uint8Array(16),
                P = (e, t) => {
                    e.update(t);
                    let r = t.length % 16;
                    r && e.update(M.subarray(r))
                },
                L = new Uint8Array(32);

            function U(e, t, r, n, i) {
                let o = e(t, r, L),
                    a = O.create(o);
                i && P(a, i), P(a, n);
                let s = new Uint8Array(16),
                    f = l(s);
                d(f, 0, BigInt(i ? i.length : 0), !0), d(f, 8, BigInt(n.length), !0), a.update(s);
                let u = a.digest();
                return y(o, s), u
            }
            let N = e => (t, r, n) => ({
                    encrypt(i, o) {
                        let a = i.length;
                        (o = c(a + 16, o, !1)).set(i);
                        let s = o.subarray(0, -16);
                        e(t, r, s, s, 1);
                        let f = U(e, t, r, s, n);
                        return o.set(f, a), y(f), o
                    },
                    decrypt(i, o) {
                        o = c(i.length - 16, o, !1);
                        let a = i.subarray(0, -16),
                            s = i.subarray(-16),
                            f = U(e, t, r, a, n);
                        if (! function(e, t) {
                                if (e.length !== t.length) return !1;
                                let r = 0;
                                for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                                return 0 === r
                            }(s, f)) throw Error("invalid tag");
                        return o.set(i.subarray(0, -16)), e(t, r, o, o, 1), y(f), o
                    }
                }),
                C = ((e, t) => {
                    function r(n, ...i) {
                        if (o(n), void 0 !== e.nonceLength) {
                            let t = i[0];
                            if (!t) throw Error("nonce / iv required");
                            e.varSizeNonce ? o(t) : o(t, e.nonceLength)
                        }
                        let a = e.tagLength;
                        a && void 0 !== i[1] && o(i[1]);
                        let s = t(n, ...i),
                            f = (e, t) => {
                                if (void 0 !== t) {
                                    if (2 !== e) throw Error("cipher output not supported");
                                    o(t)
                                }
                            },
                            l = !1;
                        return {
                            encrypt(e, t) {
                                if (l) throw Error("cannot encrypt() twice with same key + nonce");
                                return l = !0, o(e), f(s.encrypt.length, t), s.encrypt(e, t)
                            },
                            decrypt(e, t) {
                                if (o(e), a && e.length < a) throw Error("invalid ciphertext length: smaller than tagLength=" + a);
                                return f(s.decrypt.length, t), s.decrypt(e, t)
                            }
                        }
                    }
                    return Object.assign(r, e), r
                })({
                    blockSize: 64,
                    nonceLength: 12,
                    tagLength: 16
                }, N(T));
            N(R);
            var j = r(23219);
            class H {
                constructor(e) {
                    Object.defineProperty(this, "_key", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this._key = new Uint8Array(e)
                }
                async seal(e, t, r) {
                    return await this._seal(e, t, r)
                }
                async open(e, t, r) {
                    return await this._open(e, t, r)
                }
                _seal(e, t, r) {
                    return new Promise(n => {
                        n(C(this._key, new Uint8Array(e), new Uint8Array(r)).encrypt(new Uint8Array(t)).buffer)
                    })
                }
                _open(e, t, r) {
                    return new Promise(n => {
                        n(C(this._key, new Uint8Array(e), new Uint8Array(r)).decrypt(new Uint8Array(t)).buffer)
                    })
                }
            }
            class D {
                constructor() {
                    Object.defineProperty(this, "id", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: j.vw.Chacha20Poly1305
                    }), Object.defineProperty(this, "keySize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 32
                    }), Object.defineProperty(this, "nonceSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 12
                    }), Object.defineProperty(this, "tagSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 16
                    })
                }
                createEncryptionContext(e) {
                    return new H(e)
                }
            }
        },
        46066: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Address = void 0;
            let i = r(81713),
                o = r(50797);
            class a {
                constructor(e) {
                    if (20 !== e.length) throw Error("Invalid address length");
                    this.buf = e
                }
                static zero() {
                    return new a((0, o.zeros)(20))
                }
                static fromString(e) {
                    if (!(0, i.isValidAddress)(e)) throw Error("Invalid address");
                    return new a((0, o.toBuffer)(e))
                }
                static fromPublicKey(e) {
                    if (!n.isBuffer(e)) throw Error("Public key should be Buffer");
                    return new a((0, i.pubToAddress)(e))
                }
                static fromPrivateKey(e) {
                    if (!n.isBuffer(e)) throw Error("Private key should be Buffer");
                    return new a((0, i.privateToAddress)(e))
                }
                static generate(e, t) {
                    if ("bigint" != typeof t) throw Error("Expected nonce to be a bigint");
                    return new a((0, i.generateAddress)(e.buf, (0, o.bigIntToBuffer)(t)))
                }
                static generate2(e, t, r) {
                    if (!n.isBuffer(t)) throw Error("Expected salt to be a Buffer");
                    if (!n.isBuffer(r)) throw Error("Expected initCode to be a Buffer");
                    return new a((0, i.generateAddress2)(e.buf, t, r))
                }
                equals(e) {
                    return this.buf.equals(e.buf)
                }
                isZero() {
                    return this.equals(a.zero())
                }
                isPrecompileOrSystemAddress() {
                    let e = (0, o.bufferToBigInt)(this.buf),
                        t = BigInt(0),
                        r = BigInt("0xffff");
                    return e >= t && e <= r
                }
                toString() {
                    return "0x" + this.buf.toString("hex")
                }
                toBuffer() {
                    return n.from(this.buf)
                }
            }
            t.Address = a
        },
        47744: (e, t, r) => {
            var n = r(29143),
                i = r(51642).Buffer;
            ! function() {
                var t = {
                        523: function(e) {
                            e.exports = {
                                100: "Continue",
                                101: "Switching Protocols",
                                102: "Processing",
                                200: "OK",
                                201: "Created",
                                202: "Accepted",
                                203: "Non-Authoritative Information",
                                204: "No Content",
                                205: "Reset Content",
                                206: "Partial Content",
                                207: "Multi-Status",
                                208: "Already Reported",
                                226: "IM Used",
                                300: "Multiple Choices",
                                301: "Moved Permanently",
                                302: "Found",
                                303: "See Other",
                                304: "Not Modified",
                                305: "Use Proxy",
                                307: "Temporary Redirect",
                                308: "Permanent Redirect",
                                400: "Bad Request",
                                401: "Unauthorized",
                                402: "Payment Required",
                                403: "Forbidden",
                                404: "Not Found",
                                405: "Method Not Allowed",
                                406: "Not Acceptable",
                                407: "Proxy Authentication Required",
                                408: "Request Timeout",
                                409: "Conflict",
                                410: "Gone",
                                411: "Length Required",
                                412: "Precondition Failed",
                                413: "Payload Too Large",
                                414: "URI Too Long",
                                415: "Unsupported Media Type",
                                416: "Range Not Satisfiable",
                                417: "Expectation Failed",
                                418: "I'm a teapot",
                                421: "Misdirected Request",
                                422: "Unprocessable Entity",
                                423: "Locked",
                                424: "Failed Dependency",
                                425: "Unordered Collection",
                                426: "Upgrade Required",
                                428: "Precondition Required",
                                429: "Too Many Requests",
                                431: "Request Header Fields Too Large",
                                451: "Unavailable For Legal Reasons",
                                500: "Internal Server Error",
                                501: "Not Implemented",
                                502: "Bad Gateway",
                                503: "Service Unavailable",
                                504: "Gateway Timeout",
                                505: "HTTP Version Not Supported",
                                506: "Variant Also Negotiates",
                                507: "Insufficient Storage",
                                508: "Loop Detected",
                                509: "Bandwidth Limit Exceeded",
                                510: "Not Extended",
                                511: "Network Authentication Required"
                            }
                        },
                        782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var r = function() {};
                                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                                }
                            }
                        },
                        646: function(e) {
                            "use strict";
                            let t = {};

                            function r(e, r, n) {
                                n || (n = Error);
                                class i extends n {
                                    constructor(e, t, n) {
                                        super("string" == typeof r ? r : r(e, t, n))
                                    }
                                }
                                i.prototype.name = n.name, i.prototype.code = e, t[e] = i
                            }

                            function n(e, t) {
                                if (!Array.isArray(e)) return `of ${t} ${String(e)}`; {
                                    let r = e.length;
                                    return (e = e.map(e => String(e)), r > 2) ? `one of ${t} ${e.slice(0,r-1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                                }
                            }
                            r("ERR_INVALID_OPT_VALUE", function(e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"'
                            }, TypeError), r("ERR_INVALID_ARG_TYPE", function(e, t, r) {
                                var i, o, a, s;
                                let f, l;
                                if ("string" == typeof t && (i = "not ", t.substr(0, i.length) === i) ? (f = "must not be", t = t.replace(/^not /, "")) : f = "must be", o = " argument", (void 0 === a || a > e.length) && (a = e.length), e.substring(a - o.length, a) === o) l = `The ${e} ${f} ${n(t,"type")}`;
                                else {
                                    let r = ("number" != typeof s && (s = 0), s + 1 > e.length || -1 === e.indexOf(".", s)) ? "argument" : "property";
                                    l = `The "${e}" ${r} ${f} ${n(t,"type")}`
                                }
                                return l + `. Received type ${typeof r}`
                            }, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                                return "The " + e + " method is not implemented"
                            }), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(e) {
                                return "Cannot call " + e + " after a stream was destroyed"
                            }), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", function(e) {
                                return "Unknown encoding: " + e
                            }, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
                        },
                        403: function(e, t, r) {
                            "use strict";
                            var i = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) t.push(r);
                                return t
                            };
                            e.exports = u;
                            var o = r(709),
                                a = r(337);
                            r(782)(u, o);
                            for (var s = i(a.prototype), f = 0; f < s.length; f++) {
                                var l = s[f];
                                u.prototype[l] || (u.prototype[l] = a.prototype[l])
                            }

                            function u(e) {
                                if (!(this instanceof u)) return new u(e);
                                o.call(this, e), a.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", h)))
                            }

                            function h() {
                                this._writableState.ended || n.nextTick(c, this)
                            }

                            function c(e) {
                                e.end()
                            }
                            Object.defineProperty(u.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(u.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(u.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(u.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                },
                                set: function(e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                }
                            })
                        },
                        889: function(e, t, r) {
                            "use strict";
                            e.exports = i;
                            var n = r(170);

                            function i(e) {
                                if (!(this instanceof i)) return new i(e);
                                n.call(this, e)
                            }
                            r(782)(i, n), i.prototype._transform = function(e, t, r) {
                                r(null, e)
                            }
                        },
                        709: function(e, t, i) {
                            "use strict";
                            e.exports = k, k.ReadableState = A, i(361).EventEmitter;
                            var o, a, s, f, l, u = function(e, t) {
                                    return e.listeners(t).length
                                },
                                h = i(678),
                                c = i(300).Buffer,
                                d = r.g.Uint8Array || function() {},
                                p = i(837);
                            a = p && p.debuglog ? p.debuglog("stream") : function() {};
                            var y = i(379),
                                g = i(25),
                                b = i(776).getHighWaterMark,
                                m = i(646).q,
                                w = m.ERR_INVALID_ARG_TYPE,
                                v = m.ERR_STREAM_PUSH_AFTER_EOF,
                                _ = m.ERR_METHOD_NOT_IMPLEMENTED,
                                x = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            i(782)(k, h);
                            var E = g.errorOrDestroy,
                                S = ["error", "close", "destroy", "pause", "resume"];

                            function A(e, t, r) {
                                o = o || i(403), e = e || {}, "boolean" != typeof r && (r = t instanceof o), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = b(this, e, "readableHighWaterMark", r), this.buffer = new y, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (s || (s = i(704).s), this.decoder = new s(e.encoding), this.encoding = e.encoding)
                            }

                            function k(e) {
                                if (o = o || i(403), !(this instanceof k)) return new k(e);
                                var t = this instanceof o;
                                this._readableState = new A(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), h.call(this)
                            }

                            function B(e, t, r, n, i) {
                                a("readableAddChunk", t);
                                var o, s, f = e._readableState;
                                if (null === t) f.reading = !1,
                                    function(e, t) {
                                        if (a("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var r = t.decoder.end();
                                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                                            }
                                            t.ended = !0, t.sync ? T(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, R(e)))
                                        }
                                    }(e, f);
                                else if (i || (s = function(e, t) {
                                        var r;
                                        return !c.isBuffer(t) && !(t instanceof d) && "string" != typeof t && void 0 !== t && !e.objectMode && (r = new w("chunk", ["string", "Buffer", "Uint8Array"], t)), r
                                    }(f, t)), s) E(e, s);
                                else if (f.objectMode || t && t.length > 0) {
                                    if ("string" != typeof t && !f.objectMode && Object.getPrototypeOf(t) !== c.prototype && (o = t, t = c.from(o)), n) f.endEmitted ? E(e, new x) : O(e, f, t, !0);
                                    else if (f.ended) E(e, new v);
                                    else {
                                        if (f.destroyed) return !1;
                                        f.reading = !1, f.decoder && !r ? (t = f.decoder.write(t), f.objectMode || 0 !== t.length ? O(e, f, t, !1) : M(e, f)) : O(e, f, t, !1)
                                    }
                                } else n || (f.reading = !1, M(e, f));
                                return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
                            }

                            function O(e, t, r, n) {
                                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && T(e)), M(e, t)
                            }

                            function I(e, t) {
                                if (e <= 0 || 0 === t.length && t.ended) return 0;
                                if (t.objectMode) return 1;
                                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                                if (e > t.highWaterMark) {
                                    var r;
                                    (r = e) >= 0x40000000 ? r = 0x40000000 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), t.highWaterMark = r
                                }
                                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
                            }

                            function T(e) {
                                var t = e._readableState;
                                a("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (a("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(R, e))
                            }

                            function R(e) {
                                var t = e._readableState;
                                a("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, C(e)
                            }

                            function M(e, t) {
                                t.readingMore || (t.readingMore = !0, n.nextTick(P, e, t))
                            }

                            function P(e, t) {
                                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                    var r = t.length;
                                    if (a("maybeReadMore read 0"), e.read(0), r === t.length) break
                                }
                                t.readingMore = !1
                            }

                            function L(e) {
                                var t = e._readableState;
                                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                            }

                            function U(e) {
                                a("readable nexttick read 0"), e.read(0)
                            }

                            function N(e, t) {
                                a("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), C(e), t.flowing && !t.reading && e.read(0)
                            }

                            function C(e) {
                                var t = e._readableState;
                                for (a("flow", t.flowing); t.flowing && null !== e.read(););
                            }

                            function j(e, t) {
                                var r;
                                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r)
                            }

                            function H(e) {
                                var t = e._readableState;
                                a("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(D, t, e))
                            }

                            function D(e, t) {
                                if (a("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                    var r = t._writableState;
                                    (!r || r.autoDestroy && r.finished) && t.destroy()
                                }
                            }

                            function K(e, t) {
                                for (var r = 0, n = e.length; r < n; r++)
                                    if (e[r] === t) return r;
                                return -1
                            }
                            Object.defineProperty(k.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.destroyed = e)
                                }
                            }), k.prototype.destroy = g.destroy, k.prototype._undestroy = g.undestroy, k.prototype._destroy = function(e, t) {
                                t(e)
                            }, k.prototype.push = function(e, t) {
                                var r, n = this._readableState;
                                return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), B(this, e, t, !1, r)
                            }, k.prototype.unshift = function(e) {
                                return B(this, e, null, !0, !1)
                            }, k.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, k.prototype.setEncoding = function(e) {
                                s || (s = i(704).s);
                                var t = new s(e);
                                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += t.write(r.data), r = r.next;
                                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
                            }, k.prototype.read = function(e) {
                                a("read", e), e = parseInt(e, 10);
                                var t, r = this._readableState,
                                    n = e;
                                if (0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return a("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? H(this) : T(this), null;
                                if (0 === (e = I(e, r)) && r.ended) return 0 === r.length && H(this), null;
                                var i = r.needReadable;
                                return a("need readable", i), (0 === r.length || r.length - e < r.highWaterMark) && a("length less than watermark", i = !0), r.ended || r.reading ? a("reading or ended", i = !1) : i && (a("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, r.reading || (e = I(n, r))), null === (t = e > 0 ? j(e, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, e = 0) : (r.length -= e, r.awaitDrain = 0), 0 === r.length && (r.ended || (r.needReadable = !0), n !== e && r.ended && H(this)), null !== t && this.emit("data", t), t
                            }, k.prototype._read = function(e) {
                                E(this, new _("_read()"))
                            }, k.prototype.pipe = function(e, t) {
                                var r, i = this,
                                    o = this._readableState;
                                switch (o.pipesCount) {
                                    case 0:
                                        o.pipes = e;
                                        break;
                                    case 1:
                                        o.pipes = [o.pipes, e];
                                        break;
                                    default:
                                        o.pipes.push(e)
                                }
                                o.pipesCount += 1, a("pipe count=%d opts=%j", o.pipesCount, t);
                                var s = t && !1 === t.end || e === n.stdout || e === n.stderr ? g : f;

                                function f() {
                                    a("onend"), e.end()
                                }
                                o.endEmitted ? n.nextTick(s) : i.once("end", s), e.on("unpipe", function t(r, n) {
                                    a("onunpipe"), r === i && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, a("cleanup"), e.removeListener("close", p), e.removeListener("finish", y), e.removeListener("drain", l), e.removeListener("error", d), e.removeListener("unpipe", t), i.removeListener("end", f), i.removeListener("end", g), i.removeListener("data", c), h = !0, o.awaitDrain && (!e._writableState || e._writableState.needDrain) && l())
                                });
                                var l = (r = i, function() {
                                    var e = r._readableState;
                                    a("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && u(r, "data") && (e.flowing = !0, C(r))
                                });
                                e.on("drain", l);
                                var h = !1;

                                function c(t) {
                                    a("ondata");
                                    var r = e.write(t);
                                    a("dest.write", r), !1 === r && ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== K(o.pipes, e)) && !h && (a("false write response, pause", o.awaitDrain), o.awaitDrain++), i.pause())
                                }

                                function d(t) {
                                    a("onerror", t), g(), e.removeListener("error", d), 0 === u(e, "error") && E(e, t)
                                }

                                function p() {
                                    e.removeListener("finish", y), g()
                                }

                                function y() {
                                    a("onfinish"), e.removeListener("close", p), g()
                                }

                                function g() {
                                    a("unpipe"), i.unpipe(e)
                                }
                                return i.on("data", c),
                                    function(e, t, r) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                                    }(e, "error", d), e.once("close", p), e.once("finish", y), e.emit("pipe", i), o.flowing || (a("pipe resume"), i.resume()), e
                            }, k.prototype.unpipe = function(e) {
                                var t = this._readableState,
                                    r = {
                                        hasUnpiped: !1
                                    };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                                if (!e) {
                                    var n = t.pipes,
                                        i = t.pipesCount;
                                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                    for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var a = K(t.pipes, e);
                                return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                            }, k.prototype.on = function(e, t) {
                                var r = h.prototype.on.call(this, e, t),
                                    i = this._readableState;
                                return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" !== e || i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, a("on readable", i.length, i.reading), i.length ? T(this) : i.reading || n.nextTick(U, this)), r
                            }, k.prototype.addListener = k.prototype.on, k.prototype.removeListener = function(e, t) {
                                var r = h.prototype.removeListener.call(this, e, t);
                                return "readable" === e && n.nextTick(L, this), r
                            }, k.prototype.removeAllListeners = function(e) {
                                var t = h.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && n.nextTick(L, this), t
                            }, k.prototype.resume = function() {
                                var e, t, r = this._readableState;
                                return r.flowing || (a("resume"), r.flowing = !r.readableListening, e = this, (t = r).resumeScheduled || (t.resumeScheduled = !0, n.nextTick(N, e, t))), r.paused = !1, this
                            }, k.prototype.pause = function() {
                                return a("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (a("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, k.prototype.wrap = function(e) {
                                var t = this,
                                    r = this._readableState,
                                    n = !1;
                                for (var i in e.on("end", function() {
                                        if (a("wrapped end"), r.decoder && !r.ended) {
                                            var e = r.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    }), e.on("data", function(i) {
                                        if (a("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null != i)(r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
                                    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                                    return function() {
                                        return e[t].apply(e, arguments)
                                    }
                                }(i));
                                for (var o = 0; o < S.length; o++) e.on(S[o], this.emit.bind(this, S[o]));
                                return this._read = function(t) {
                                    a("wrapped _read", t), n && (n = !1, e.resume())
                                }, this
                            }, "function" == typeof Symbol && (k.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === f && (f = i(871)), f(this)
                            }), Object.defineProperty(k.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(k.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(k.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.flowing = e)
                                }
                            }), k._fromList = j, Object.defineProperty(k.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" == typeof Symbol && (k.from = function(e, t) {
                                return void 0 === l && (l = i(727)), l(k, e, t)
                            })
                        },
                        170: function(e, t, r) {
                            "use strict";
                            e.exports = u;
                            var n = r(646).q,
                                i = n.ERR_METHOD_NOT_IMPLEMENTED,
                                o = n.ERR_MULTIPLE_CALLBACK,
                                a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                s = n.ERR_TRANSFORM_WITH_LENGTH_0,
                                f = r(403);

                            function l(e, t) {
                                var r = this._transformState;
                                r.transforming = !1;
                                var n = r.writecb;
                                if (null === n) return this.emit("error", new o);
                                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                                var i = this._readableState;
                                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                            }

                            function u(e) {
                                if (!(this instanceof u)) return new u(e);
                                f.call(this, e), this._transformState = {
                                    afterTransform: l.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
                            }

                            function h() {
                                var e = this;
                                "function" != typeof this._flush || this._readableState.destroyed ? c(this, null, null) : this._flush(function(t, r) {
                                    c(e, t, r)
                                })
                            }

                            function c(e, t, r) {
                                if (t) return e.emit("error", t);
                                if (null != r && e.push(r), e._writableState.length) throw new s;
                                if (e._transformState.transforming) throw new a;
                                return e.push(null)
                            }
                            r(782)(u, f), u.prototype.push = function(e, t) {
                                return this._transformState.needTransform = !1, f.prototype.push.call(this, e, t)
                            }, u.prototype._transform = function(e, t, r) {
                                r(new i("_transform()"))
                            }, u.prototype._write = function(e, t, r) {
                                var n = this._transformState;
                                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                                    var i = this._readableState;
                                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                                }
                            }, u.prototype._read = function(e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                            }, u.prototype._destroy = function(e, t) {
                                f.prototype._destroy.call(this, e, function(e) {
                                    t(e)
                                })
                            }
                        },
                        337: function(e, t, i) {
                            "use strict";

                            function o(e) {
                                var t = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    (function(e, t, r) {
                                        var n = e.entry;
                                        for (e.entry = null; n;) {
                                            var i = n.callback;
                                            t.pendingcb--, i(void 0), n = n.next
                                        }
                                        t.corkedRequestsFree.next = e
                                    })(t, e)
                                }
                            }
                            e.exports = k, k.WritableState = A;
                            var a, s, f = {
                                    deprecate: i(769)
                                },
                                l = i(678),
                                u = i(300).Buffer,
                                h = r.g.Uint8Array || function() {},
                                c = i(25),
                                d = i(776).getHighWaterMark,
                                p = i(646).q,
                                y = p.ERR_INVALID_ARG_TYPE,
                                g = p.ERR_METHOD_NOT_IMPLEMENTED,
                                b = p.ERR_MULTIPLE_CALLBACK,
                                m = p.ERR_STREAM_CANNOT_PIPE,
                                w = p.ERR_STREAM_DESTROYED,
                                v = p.ERR_STREAM_NULL_VALUES,
                                _ = p.ERR_STREAM_WRITE_AFTER_END,
                                x = p.ERR_UNKNOWN_ENCODING,
                                E = c.errorOrDestroy;

                            function S() {}

                            function A(e, t, r) {
                                a = a || i(403), e = e || {}, "boolean" != typeof r && (r = t instanceof a), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = d(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var s = !1 === e.decodeStrings;
                                this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                                    (function(e, t) {
                                        var r = e._writableState,
                                            i = r.sync,
                                            o = r.writecb;
                                        if ("function" != typeof o) throw new b;
                                        if (r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t) --r.pendingcb, i ? (n.nextTick(o, t), n.nextTick(M, e, r), e._writableState.errorEmitted = !0, E(e, t)) : (o(t), e._writableState.errorEmitted = !0, E(e, t), M(e, r));
                                        else {
                                            var a = T(r) || e.destroyed;
                                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || I(e, r), i ? n.nextTick(O, e, r, a, o) : O(e, r, a, o)
                                        }
                                    })(t, e)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
                            }

                            function k(e) {
                                var t = this instanceof(a = a || i(403));
                                if (!t && !s.call(k, this)) return new k(e);
                                this._writableState = new A(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), l.call(this)
                            }

                            function B(e, t, r, n, i, o, a) {
                                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new w("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
                            }

                            function O(e, t, r, n) {
                                var i, o;
                                r || (i = e, 0 === (o = t).length && o.needDrain && (o.needDrain = !1, i.emit("drain"))), t.pendingcb--, n(), M(e, t)
                            }

                            function I(e, t) {
                                t.bufferProcessing = !0;
                                var r = t.bufferedRequest;
                                if (e._writev && r && r.next) {
                                    var n = Array(t.bufferedRequestCount),
                                        i = t.corkedRequestsFree;
                                    i.entry = r;
                                    for (var a = 0, s = !0; r;) n[a] = r, r.isBuf || (s = !1), r = r.next, a += 1;
                                    n.allBuffers = s, B(e, t, !0, t.length, n, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0
                                } else {
                                    for (; r;) {
                                        var f = r.chunk,
                                            l = r.encoding,
                                            u = r.callback,
                                            h = t.objectMode ? 1 : f.length;
                                        if (B(e, t, !1, h, f, l, u), r = r.next, t.bufferedRequestCount--, t.writing) break
                                    }
                                    null === r && (t.lastBufferedRequest = null)
                                }
                                t.bufferedRequest = r, t.bufferProcessing = !1
                            }

                            function T(e) {
                                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                            }

                            function R(e, t) {
                                e._final(function(r) {
                                    t.pendingcb--, r && E(e, r), t.prefinished = !0, e.emit("prefinish"), M(e, t)
                                })
                            }

                            function M(e, t) {
                                var r = T(t);
                                if (r && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(R, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                    var i = e._readableState;
                                    (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                                }
                                return r
                            }
                            i(782)(k, l), A.prototype.getBuffer = function() {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                },
                                function() {
                                    try {
                                        Object.defineProperty(A.prototype, "buffer", {
                                            get: f.deprecate(function() {
                                                return this.getBuffer()
                                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {}
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (s = Function.prototype[Symbol.hasInstance], Object.defineProperty(k, Symbol.hasInstance, {
                                    value: function(e) {
                                        return !!s.call(this, e) || this === k && e && e._writableState instanceof A
                                    }
                                })) : s = function(e) {
                                    return e instanceof this
                                }, k.prototype.pipe = function() {
                                    E(this, new m)
                                }, k.prototype.write = function(e, t, r) {
                                    var i, o, a, s, f, l, c, d = this._writableState,
                                        p = !1,
                                        g = !d.objectMode && (i = e, u.isBuffer(i) || i instanceof h);
                                    return g && !u.isBuffer(e) && (o = e, e = u.from(o)), ("function" == typeof t && (r = t, t = null), g ? t = "buffer" : t || (t = d.defaultEncoding), "function" != typeof r && (r = S), d.ending) ? (a = r, E(this, s = new _), n.nextTick(a, s)) : (g || (f = e, l = r, null === f ? c = new v : "string" == typeof f || d.objectMode || (c = new y("chunk", ["string", "Buffer"], f)), !c || (E(this, c), n.nextTick(l, c), 0))) && (d.pendingcb++, p = function(e, t, r, n, i, o) {
                                        if (!r) {
                                            var a, s, f = (a = n, s = i, t.objectMode || !1 === t.decodeStrings || "string" != typeof a || (a = u.from(a, s)), a);
                                            n !== f && (r = !0, i = "buffer", n = f)
                                        }
                                        var l = t.objectMode ? 1 : n.length;
                                        t.length += l;
                                        var h = t.length < t.highWaterMark;
                                        if (h || (t.needDrain = !0), t.writing || t.corked) {
                                            var c = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: n,
                                                encoding: i,
                                                isBuf: r,
                                                callback: o,
                                                next: null
                                            }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else B(e, t, !1, l, n, i, o);
                                        return h
                                    }(this, d, g, e, t, r)), p
                                }, k.prototype.cork = function() {
                                    this._writableState.corked++
                                }, k.prototype.uncork = function() {
                                    var e = this._writableState;
                                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || I(this, e))
                                }, k.prototype.setDefaultEncoding = function(e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new x(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(k.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(k.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), k.prototype._write = function(e, t, r) {
                                    r(new g("_write()"))
                                }, k.prototype._writev = null, k.prototype.end = function(e, t, r) {
                                    var i, o, a, s = this._writableState;
                                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), s.corked && (s.corked = 1, this.uncork()), s.ending || (i = this, o = s, a = r, o.ending = !0, M(i, o), a && (o.finished ? n.nextTick(a) : i.once("finish", a)), o.ended = !0, i.writable = !1), this
                                }, Object.defineProperty(k.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(k.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), k.prototype.destroy = c.destroy, k.prototype._undestroy = c.undestroy, k.prototype._destroy = function(e, t) {
                                    t(e)
                                }
                        },
                        871: function(e, t, r) {
                            "use strict";

                            function i(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }
                            var o, a = r(698),
                                s = Symbol("lastResolve"),
                                f = Symbol("lastReject"),
                                l = Symbol("error"),
                                u = Symbol("ended"),
                                h = Symbol("lastPromise"),
                                c = Symbol("handlePromise"),
                                d = Symbol("stream");

                            function p(e, t) {
                                return {
                                    value: e,
                                    done: t
                                }
                            }

                            function y(e) {
                                var t = e[s];
                                if (null !== t) {
                                    var r = e[d].read();
                                    null !== r && (e[h] = null, e[s] = null, e[f] = null, t(p(r, !1)))
                                }
                            }

                            function g(e) {
                                n.nextTick(y, e)
                            }
                            var b = Object.getPrototypeOf(function() {}),
                                m = Object.setPrototypeOf((i(o = {
                                    get stream() {
                                        return this[d]
                                    },
                                    next: function() {
                                        var e, t, r = this,
                                            i = this[l];
                                        if (null !== i) return Promise.reject(i);
                                        if (this[u]) return Promise.resolve(p(void 0, !0));
                                        if (this[d].destroyed) return new Promise(function(e, t) {
                                            n.nextTick(function() {
                                                r[l] ? t(r[l]) : e(p(void 0, !0))
                                            })
                                        });
                                        var o = this[h];
                                        if (o) t = new Promise((e = this, function(t, r) {
                                            o.then(function() {
                                                if (e[u]) {
                                                    t(p(void 0, !0));
                                                    return
                                                }
                                                e[c](t, r)
                                            }, r)
                                        }));
                                        else {
                                            var a = this[d].read();
                                            if (null !== a) return Promise.resolve(p(a, !1));
                                            t = new Promise(this[c])
                                        }
                                        return this[h] = t, t
                                    }
                                }, Symbol.asyncIterator, function() {
                                    return this
                                }), i(o, "return", function() {
                                    var e = this;
                                    return new Promise(function(t, r) {
                                        e[d].destroy(null, function(e) {
                                            if (e) {
                                                r(e);
                                                return
                                            }
                                            t(p(void 0, !0))
                                        })
                                    })
                                }), o), b);
                            e.exports = function(e) {
                                var t, r = Object.create(m, (i(t = {}, d, {
                                    value: e,
                                    writable: !0
                                }), i(t, s, {
                                    value: null,
                                    writable: !0
                                }), i(t, f, {
                                    value: null,
                                    writable: !0
                                }), i(t, l, {
                                    value: null,
                                    writable: !0
                                }), i(t, u, {
                                    value: e._readableState.endEmitted,
                                    writable: !0
                                }), i(t, c, {
                                    value: function(e, t) {
                                        var n = r[d].read();
                                        n ? (r[h] = null, r[s] = null, r[f] = null, e(p(n, !1))) : (r[s] = e, r[f] = t)
                                    },
                                    writable: !0
                                }), t));
                                return r[h] = null, a(e, function(e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = r[f];
                                        null !== t && (r[h] = null, r[s] = null, r[f] = null, t(e)), r[l] = e;
                                        return
                                    }
                                    var n = r[s];
                                    null !== n && (r[h] = null, r[s] = null, r[f] = null, n(p(void 0, !0))), r[u] = !0
                                }), e.on("readable", g.bind(null, r)), r
                            }
                        },
                        379: function(e, t, r) {
                            "use strict";

                            function n(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    t && (n = n.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }
                            var i = r(300).Buffer,
                                o = r(837).inspect,
                                a = o && o.custom || "inspect";
                            e.exports = function() {
                                var e;

                                function t() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, t), this.head = null, this.tail = null, this.length = 0
                                }
                                return e = [{
                                        key: "push",
                                        value: function(e) {
                                            var t = {
                                                data: e,
                                                next: null
                                            };
                                            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                        }
                                    }, {
                                        key: "unshift",
                                        value: function(e) {
                                            var t = {
                                                data: e,
                                                next: this.head
                                            };
                                            0 === this.length && (this.tail = t), this.head = t, ++this.length
                                        }
                                    }, {
                                        key: "shift",
                                        value: function() {
                                            if (0 !== this.length) {
                                                var e = this.head.data;
                                                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                            }
                                        }
                                    }, {
                                        key: "clear",
                                        value: function() {
                                            this.head = this.tail = null, this.length = 0
                                        }
                                    }, {
                                        key: "join",
                                        value: function(e) {
                                            if (0 === this.length) return "";
                                            for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                                            return r
                                        }
                                    }, {
                                        key: "concat",
                                        value: function(e) {
                                            if (0 === this.length) return i.alloc(0);
                                            for (var t, r, n = i.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, r = a, i.prototype.copy.call(t, n, r), a += o.data.length, o = o.next;
                                            return n
                                        }
                                    }, {
                                        key: "consume",
                                        value: function(e, t) {
                                            var r;
                                            return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                                        }
                                    }, {
                                        key: "first",
                                        value: function() {
                                            return this.head.data
                                        }
                                    }, {
                                        key: "_getString",
                                        value: function(e) {
                                            var t = this.head,
                                                r = 1,
                                                n = t.data;
                                            for (e -= n.length; t = t.next;) {
                                                var i = t.data,
                                                    o = e > i.length ? i.length : e;
                                                if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
                                                    o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                                                    break
                                                }++r
                                            }
                                            return this.length -= r, n
                                        }
                                    }, {
                                        key: "_getBuffer",
                                        value: function(e) {
                                            var t = i.allocUnsafe(e),
                                                r = this.head,
                                                n = 1;
                                            for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                                                var o = r.data,
                                                    a = e > o.length ? o.length : e;
                                                if (o.copy(t, t.length - e, 0, a), 0 == (e -= a)) {
                                                    a === o.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = o.slice(a));
                                                    break
                                                }++n
                                            }
                                            return this.length -= n, t
                                        }
                                    }, {
                                        key: a,
                                        value: function(e, t) {
                                            return o(this, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                                                        var n, i, o;
                                                        n = e, i = t, o = r[t], i in n ? Object.defineProperty(n, i, {
                                                            value: o,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        }) : n[i] = o
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                                    })
                                                }
                                                return e
                                            }({}, t, {
                                                depth: 0,
                                                customInspect: !1
                                            }))
                                        }
                                    }],
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(t.prototype, e), t
                            }()
                        },
                        25: function(e) {
                            "use strict";

                            function t(e, t) {
                                i(e, t), r(e)
                            }

                            function r(e) {
                                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
                            }

                            function i(e, t) {
                                e.emit("error", t)
                            }
                            e.exports = {
                                destroy: function(e, o) {
                                    var a = this,
                                        s = this._readableState && this._readableState.destroyed,
                                        f = this._writableState && this._writableState.destroyed;
                                    return s || f ? o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(i, this, e)) : n.nextTick(i, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                        !o && e ? a._writableState ? a._writableState.errorEmitted ? n.nextTick(r, a) : (a._writableState.errorEmitted = !0, n.nextTick(t, a, e)) : n.nextTick(t, a, e) : o ? (n.nextTick(r, a), o(e)) : n.nextTick(r, a)
                                    })), this
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(e, t) {
                                    var r = e._readableState,
                                        n = e._writableState;
                                    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                }
                            }
                        },
                        698: function(e, t, r) {
                            "use strict";
                            var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE;

                            function i() {}
                            e.exports = function e(t, r, o) {
                                if ("function" == typeof r) return e(t, null, r);
                                r || (r = {}), a = o || i, s = !1, o = function() {
                                    if (!s) {
                                        s = !0;
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        a.apply(this, t)
                                    }
                                };
                                var a, s, f = r.readable || !1 !== r.readable && t.readable,
                                    l = r.writable || !1 !== r.writable && t.writable,
                                    u = function() {
                                        t.writable || c()
                                    },
                                    h = t._writableState && t._writableState.finished,
                                    c = function() {
                                        l = !1, h = !0, f || o.call(t)
                                    },
                                    d = t._readableState && t._readableState.endEmitted,
                                    p = function() {
                                        f = !1, d = !0, l || o.call(t)
                                    },
                                    y = function(e) {
                                        o.call(t, e)
                                    },
                                    g = function() {
                                        var e;
                                        return f && !d ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : l && !h ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
                                    },
                                    b = function() {
                                        t.req.on("finish", c)
                                    };
                                return t.setHeader && "function" == typeof t.abort ? (t.on("complete", c), t.on("abort", g), t.req ? b() : t.on("request", b)) : l && !t._writableState && (t.on("end", u), t.on("close", u)), t.on("end", p), t.on("finish", c), !1 !== r.error && t.on("error", y), t.on("close", g),
                                    function() {
                                        t.removeListener("complete", c), t.removeListener("abort", g), t.removeListener("request", b), t.req && t.req.removeListener("finish", c), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", c), t.removeListener("end", p), t.removeListener("error", y), t.removeListener("close", g)
                                    }
                            }
                        },
                        727: function(e, t, r) {
                            "use strict";

                            function n(e, t, r, n, i, o, a) {
                                try {
                                    var s = e[o](a),
                                        f = s.value
                                } catch (e) {
                                    r(e);
                                    return
                                }
                                s.done ? t(f) : Promise.resolve(f).then(n, i)
                            }

                            function i(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    t && (n = n.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }
                            var o = r(646).q.ERR_INVALID_ARG_TYPE;
                            e.exports = function(e, t, r) {
                                if (t && "function" == typeof t.next) a = t;
                                else if (t && t[Symbol.asyncIterator]) a = t[Symbol.asyncIterator]();
                                else if (t && t[Symbol.iterator]) a = t[Symbol.iterator]();
                                else throw new o("iterable", ["Iterable"], t);
                                var a, s = new e(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? i(Object(r), !0).forEach(function(t) {
                                                var n, i, o;
                                                n = e, i = t, o = r[t], i in n ? Object.defineProperty(n, i, {
                                                    value: o,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : n[i] = o
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            })
                                        }
                                        return e
                                    }({
                                        objectMode: !0
                                    }, r)),
                                    f = !1;

                                function l() {
                                    return u.apply(this, arguments)
                                }

                                function u() {
                                    var e;
                                    return e = function*() {
                                        try {
                                            var e = yield a.next(), t = e.value;
                                            e.done ? s.push(null) : s.push((yield t)) ? l() : f = !1
                                        } catch (e) {
                                            s.destroy(e)
                                        }
                                    }, (u = function() {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function(i, o) {
                                            var a = e.apply(t, r);

                                            function s(e) {
                                                n(a, i, o, s, f, "next", e)
                                            }

                                            function f(e) {
                                                n(a, i, o, s, f, "throw", e)
                                            }
                                            s(void 0)
                                        })
                                    }).apply(this, arguments)
                                }
                                return s._read = function() {
                                    f || (f = !0, l())
                                }, s
                            }
                        },
                        442: function(e, t, r) {
                            "use strict";
                            var n, i = r(646).q,
                                o = i.ERR_MISSING_ARGS,
                                a = i.ERR_STREAM_DESTROYED;

                            function s(e) {
                                if (e) throw e
                            }

                            function f(e) {
                                e()
                            }

                            function l(e, t) {
                                return e.pipe(t)
                            }
                            e.exports = function() {
                                for (var e, t, i = arguments.length, u = Array(i), h = 0; h < i; h++) u[h] = arguments[h];
                                var c = (e = u).length && "function" == typeof e[e.length - 1] ? e.pop() : s;
                                if (Array.isArray(u[0]) && (u = u[0]), u.length < 2) throw new o("streams");
                                var d = u.map(function(e, i) {
                                    var o, s, l, h, p, y = i < u.length - 1;
                                    return s = o = function(e) {
                                            t || (t = e), e && d.forEach(f), y || (d.forEach(f), c(t))
                                        }, l = !1, o = function() {
                                            l || (l = !0, s.apply(void 0, arguments))
                                        }, h = !1, e.on("close", function() {
                                            h = !0
                                        }), void 0 === n && (n = r(698)), n(e, {
                                            readable: y,
                                            writable: i > 0
                                        }, function(e) {
                                            if (e) return o(e);
                                            h = !0, o()
                                        }), p = !1,
                                        function(t) {
                                            if (!h && !p) {
                                                if (p = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                                if ("function" == typeof e.destroy) return e.destroy();
                                                o(t || new a("pipe"))
                                            }
                                        }
                                });
                                return u.reduce(l)
                            }
                        },
                        776: function(e, t, r) {
                            "use strict";
                            var n = r(646).q.ERR_INVALID_OPT_VALUE;
                            e.exports = {
                                getHighWaterMark: function(e, t, r, i) {
                                    var o = null != t.highWaterMark ? t.highWaterMark : i ? t[r] : null;
                                    if (null != o) {
                                        if (!(isFinite(o) && Math.floor(o) === o) || o < 0) throw new n(i ? r : "highWaterMark", o);
                                        return Math.floor(o)
                                    }
                                    return e.objectMode ? 16 : 16384
                                }
                            }
                        },
                        678: function(e, t, r) {
                            e.exports = r(781)
                        },
                        726: function(e, t, r) {
                            var i = r(781);
                            "disable" === n.env.READABLE_STREAM && i ? (e.exports = i.Readable, Object.assign(e.exports, i), e.exports.Stream = i) : ((t = e.exports = r(709)).Stream = i || t, t.Readable = t, t.Writable = r(337), t.Duplex = r(403), t.Transform = r(170), t.PassThrough = r(889), t.finished = r(698), t.pipeline = r(442))
                        },
                        55: function(e, t, r) {
                            var n = r(300),
                                i = n.Buffer;

                            function o(e, t) {
                                for (var r in e) t[r] = e[r]
                            }

                            function a(e, t, r) {
                                return i(e, t, r)
                            }
                            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(e, t, r) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return i(e, t, r)
                            }, a.alloc = function(e, t, r) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var n = i(e);
                                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                            }, a.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i(e)
                            }, a.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return n.SlowBuffer(e)
                            }
                        },
                        813: function(e, t, n) {
                            var i = n(450),
                                o = n(254),
                                a = n(911),
                                s = n(523),
                                f = n(310);
                            t.request = function(e, t) {
                                e = "string" == typeof e ? f.parse(e) : a(e);
                                var n = -1 === r.g.location.protocol.search(/^https?:$/) ? "http:" : "",
                                    o = e.protocol || n,
                                    s = e.hostname || e.host,
                                    l = e.port,
                                    u = e.path || "/";
                                s && -1 !== s.indexOf(":") && (s = "[" + s + "]"), e.url = (s ? o + "//" + s : "") + (l ? ":" + l : "") + u, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                                var h = new i(e);
                                return t && h.on("response", t), h
                            }, t.get = function(e, r) {
                                var n = t.request(e, r);
                                return n.end(), n
                            }, t.ClientRequest = i, t.IncomingMessage = o.IncomingMessage, t.Agent = function() {}, t.Agent.defaultMaxSockets = 4, t.globalAgent = new t.Agent, t.STATUS_CODES = s, t.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
                        },
                        301: function(e, t) {
                            var n;

                            function i() {
                                if (void 0 !== n) return n;
                                if (r.g.XMLHttpRequest) {
                                    n = new r.g.XMLHttpRequest;
                                    try {
                                        n.open("GET", r.g.XDomainRequest ? "/" : "https://example.com")
                                    } catch (e) {
                                        n = null
                                    }
                                } else n = null;
                                return n
                            }

                            function o(e) {
                                var t = i();
                                if (!t) return !1;
                                try {
                                    return t.responseType = e, t.responseType === e
                                } catch (e) {}
                                return !1
                            }

                            function a(e) {
                                return "function" == typeof e
                            }
                            t.fetch = a(r.g.fetch) && a(r.g.ReadableStream), t.writableStream = a(r.g.WritableStream), t.abortController = a(r.g.AbortController), t.arraybuffer = t.fetch || o("arraybuffer"), t.msstream = !t.fetch && o("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && o("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!i() && a(i().overrideMimeType), n = null
                        },
                        450: function(e, t, o) {
                            var a = o(301),
                                s = o(782),
                                f = o(254),
                                l = o(726),
                                u = f.IncomingMessage,
                                h = f.readyStates,
                                c = e.exports = function(e) {
                                    var t, r, n, o = this;
                                    l.Writable.call(o), o._opts = e, o._body = [], o._headers = {}, e.auth && o.setHeader("Authorization", "Basic " + i.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(t) {
                                        o.setHeader(t, e.headers[t])
                                    });
                                    var s = !0;
                                    if ("disable-fetch" === e.mode || "requestTimeout" in e && !a.abortController) s = !1, n = !0;
                                    else if ("prefer-streaming" === e.mode) n = !1;
                                    else if ("allow-wrong-content-type" === e.mode) n = !a.overrideMimeType;
                                    else if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw Error("Invalid value for opts.mode");
                                    else n = !0;
                                    t = n, r = s, o._mode = a.fetch && r ? "fetch" : a.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : a.msstream ? "ms-stream" : a.arraybuffer && t ? "arraybuffer" : "text", o._fetchTimer = null, o.on("finish", function() {
                                        o._onFinish()
                                    })
                                };
                            s(c, l.Writable), c.prototype.setHeader = function(e, t) {
                                var r = e.toLowerCase(); - 1 === d.indexOf(r) && (this._headers[r] = {
                                    name: e,
                                    value: t
                                })
                            }, c.prototype.getHeader = function(e) {
                                var t = this._headers[e.toLowerCase()];
                                return t ? t.value : null
                            }, c.prototype.removeHeader = function(e) {
                                delete this._headers[e.toLowerCase()]
                            }, c.prototype._onFinish = function() {
                                var e = this;
                                if (!e._destroyed) {
                                    var t = e._opts,
                                        i = e._headers,
                                        o = null;
                                    "GET" !== t.method && "HEAD" !== t.method && (o = new Blob(e._body, {
                                        type: (i["content-type"] || {}).value || ""
                                    }));
                                    var s = [];
                                    if (Object.keys(i).forEach(function(e) {
                                            var t = i[e].name,
                                                r = i[e].value;
                                            Array.isArray(r) ? r.forEach(function(e) {
                                                s.push([t, e])
                                            }) : s.push([t, r])
                                        }), "fetch" === e._mode) {
                                        var f = null;
                                        if (a.abortController) {
                                            var l = new AbortController;
                                            f = l.signal, e._fetchAbortController = l, "requestTimeout" in t && 0 !== t.requestTimeout && (e._fetchTimer = r.g.setTimeout(function() {
                                                e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                                            }, t.requestTimeout))
                                        }
                                        r.g.fetch(e._opts.url, {
                                            method: e._opts.method,
                                            headers: s,
                                            body: o || void 0,
                                            mode: "cors",
                                            credentials: t.withCredentials ? "include" : "same-origin",
                                            signal: f
                                        }).then(function(t) {
                                            e._fetchResponse = t, e._connect()
                                        }, function(t) {
                                            r.g.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
                                        })
                                    } else {
                                        var u = e._xhr = new r.g.XMLHttpRequest;
                                        try {
                                            u.open(e._opts.method, e._opts.url, !0)
                                        } catch (t) {
                                            n.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                        "responseType" in u && (u.responseType = e._mode), "withCredentials" in u && (u.withCredentials = !!t.withCredentials), "text" === e._mode && "overrideMimeType" in u && u.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (u.timeout = t.requestTimeout, u.ontimeout = function() {
                                            e.emit("requestTimeout")
                                        }), s.forEach(function(e) {
                                            u.setRequestHeader(e[0], e[1])
                                        }), e._response = null, u.onreadystatechange = function() {
                                            switch (u.readyState) {
                                                case h.LOADING:
                                                case h.DONE:
                                                    e._onXHRProgress()
                                            }
                                        }, "moz-chunked-arraybuffer" === e._mode && (u.onprogress = function() {
                                            e._onXHRProgress()
                                        }), u.onerror = function() {
                                            e._destroyed || e.emit("error", Error("XHR error"))
                                        };
                                        try {
                                            u.send(o)
                                        } catch (t) {
                                            n.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                    }
                                }
                            }, c.prototype._onXHRProgress = function() {
                                (function(e) {
                                    try {
                                        var t = e.status;
                                        return null !== t && 0 !== t
                                    } catch (e) {
                                        return !1
                                    }
                                })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
                            }, c.prototype._connect = function() {
                                var e = this;
                                e._destroyed || (e._response = new u(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", function(t) {
                                    e.emit("error", t)
                                }), e.emit("response", e._response))
                            }, c.prototype._write = function(e, t, r) {
                                this._body.push(e), r()
                            }, c.prototype.abort = c.prototype.destroy = function() {
                                this._destroyed = !0, r.g.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
                            }, c.prototype.end = function(e, t, r) {
                                "function" == typeof e && (r = e, e = void 0), l.Writable.prototype.end.call(this, e, t, r)
                            }, c.prototype.flushHeaders = function() {}, c.prototype.setTimeout = function() {}, c.prototype.setNoDelay = function() {}, c.prototype.setSocketKeepAlive = function() {};
                            var d = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
                        },
                        254: function(e, t, o) {
                            var a = o(301),
                                s = o(782),
                                f = o(726),
                                l = t.readyStates = {
                                    UNSENT: 0,
                                    OPENED: 1,
                                    HEADERS_RECEIVED: 2,
                                    LOADING: 3,
                                    DONE: 4
                                },
                                u = t.IncomingMessage = function(e, t, o, s) {
                                    var l = this;
                                    if (f.Readable.call(l), l._mode = o, l.headers = {}, l.rawHeaders = [], l.trailers = {}, l.rawTrailers = [], l.on("end", function() {
                                            n.nextTick(function() {
                                                l.emit("close")
                                            })
                                        }), "fetch" === o) {
                                        if (l._fetchResponse = t, l.url = t.url, l.statusCode = t.status, l.statusMessage = t.statusText, t.headers.forEach(function(e, t) {
                                                l.headers[t.toLowerCase()] = e, l.rawHeaders.push(t, e)
                                            }), a.writableStream) {
                                            var u = new WritableStream({
                                                write: function(e) {
                                                    return new Promise(function(t, r) {
                                                        l._destroyed ? r() : l.push(i.from(e)) ? t() : l._resumeFetch = t
                                                    })
                                                },
                                                close: function() {
                                                    r.g.clearTimeout(s), l._destroyed || l.push(null)
                                                },
                                                abort: function(e) {
                                                    l._destroyed || l.emit("error", e)
                                                }
                                            });
                                            try {
                                                t.body.pipeTo(u).catch(function(e) {
                                                    r.g.clearTimeout(s), l._destroyed || l.emit("error", e)
                                                });
                                                return
                                            } catch (e) {}
                                        }
                                        var h = t.body.getReader();
                                        ! function e() {
                                            h.read().then(function(t) {
                                                if (!l._destroyed) {
                                                    if (t.done) {
                                                        r.g.clearTimeout(s), l.push(null);
                                                        return
                                                    }
                                                    l.push(i.from(t.value)), e()
                                                }
                                            }).catch(function(e) {
                                                r.g.clearTimeout(s), l._destroyed || l.emit("error", e)
                                            })
                                        }()
                                    } else if (l._xhr = e, l._pos = 0, l.url = e.responseURL, l.statusCode = e.status, l.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e) {
                                            var t = e.match(/^([^:]+):\s*(.*)/);
                                            if (t) {
                                                var r = t[1].toLowerCase();
                                                "set-cookie" === r ? (void 0 === l.headers[r] && (l.headers[r] = []), l.headers[r].push(t[2])) : void 0 !== l.headers[r] ? l.headers[r] += ", " + t[2] : l.headers[r] = t[2], l.rawHeaders.push(t[1], t[2])
                                            }
                                        }), l._charset = "x-user-defined", !a.overrideMimeType) {
                                        var c = l.rawHeaders["mime-type"];
                                        if (c) {
                                            var d = c.match(/;\s*charset=([^;])(;|$)/);
                                            d && (l._charset = d[1].toLowerCase())
                                        }
                                        l._charset || (l._charset = "utf-8")
                                    }
                                };
                            s(u, f.Readable), u.prototype._read = function() {
                                var e = this._resumeFetch;
                                e && (this._resumeFetch = null, e())
                            }, u.prototype._onXHRProgress = function() {
                                var e = this,
                                    t = e._xhr,
                                    n = null;
                                switch (e._mode) {
                                    case "text":
                                        if ((n = t.responseText).length > e._pos) {
                                            var o = n.substr(e._pos);
                                            if ("x-user-defined" === e._charset) {
                                                for (var a = i.alloc(o.length), s = 0; s < o.length; s++) a[s] = 255 & o.charCodeAt(s);
                                                e.push(a)
                                            } else e.push(o, e._charset);
                                            e._pos = n.length
                                        }
                                        break;
                                    case "arraybuffer":
                                        if (t.readyState !== l.DONE || !t.response) break;
                                        n = t.response, e.push(i.from(new Uint8Array(n)));
                                        break;
                                    case "moz-chunked-arraybuffer":
                                        if (n = t.response, t.readyState !== l.LOADING || !n) break;
                                        e.push(i.from(new Uint8Array(n)));
                                        break;
                                    case "ms-stream":
                                        if (n = t.response, t.readyState !== l.LOADING) break;
                                        var f = new r.g.MSStreamReader;
                                        f.onprogress = function() {
                                            f.result.byteLength > e._pos && (e.push(i.from(new Uint8Array(f.result.slice(e._pos)))), e._pos = f.result.byteLength)
                                        }, f.onload = function() {
                                            e.push(null)
                                        }, f.readAsArrayBuffer(n)
                                }
                                e._xhr.readyState === l.DONE && "ms-stream" !== e._mode && e.push(null)
                            }
                        },
                        704: function(e, t, r) {
                            "use strict";
                            var n = r(55).Buffer,
                                i = n.isEncoding || function(e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
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
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function o(e) {
                                var t;
                                switch (this.encoding = function(e) {
                                    var t = function(e) {
                                        var t;
                                        if (!e) return "utf8";
                                        for (;;) switch (e) {
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
                                                if (t) return;
                                                e = ("" + e).toLowerCase(), t = !0
                                        }
                                    }(e);
                                    if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw Error("Unknown encoding: " + e);
                                    return t || e
                                }(e), this.encoding) {
                                    case "utf16le":
                                        this.text = f, this.end = l, t = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = s, t = 4;
                                        break;
                                    case "base64":
                                        this.text = u, this.end = h, t = 3;
                                        break;
                                    default:
                                        this.write = c, this.end = d;
                                        return
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
                            }

                            function a(e) {
                                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                            }

                            function s(e) {
                                var t = this.lastTotal - this.lastNeed,
                                    r = function(e, t, r) {
                                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                                        if (e.lastNeed > 1 && t.length > 1) {
                                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                                        }
                                    }(this, e, 0);
                                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
                            }

                            function f(e, t) {
                                if ((e.length - t) % 2 == 0) {
                                    var r = e.toString("utf16le", t);
                                    if (r) {
                                        var n = r.charCodeAt(r.length - 1);
                                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                                    }
                                    return r
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                            }

                            function l(e) {
                                var t = e && e.length ? this.write(e) : "";
                                if (this.lastNeed) {
                                    var r = this.lastTotal - this.lastNeed;
                                    return t + this.lastChar.toString("utf16le", 0, r)
                                }
                                return t
                            }

                            function u(e, t) {
                                var r = (e.length - t) % 3;
                                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                            }

                            function h(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                            }

                            function c(e) {
                                return e.toString(this.encoding)
                            }

                            function d(e) {
                                return e && e.length ? this.write(e) : ""
                            }
                            t.s = o, o.prototype.write = function(e) {
                                var t, r;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    r = this.lastNeed, this.lastNeed = 0
                                } else r = 0;
                                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                            }, o.prototype.end = function(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t
                            }, o.prototype.text = function(e, t) {
                                var r = function(e, t, r) {
                                    var n = t.length - 1;
                                    if (n < r) return 0;
                                    var i = a(t[n]);
                                    return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = a(t[n])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = a(t[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                                }(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = r;
                                var n = e.length - (r - this.lastNeed);
                                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                            }, o.prototype.fillLast = function(e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                            }
                        },
                        769: function(e) {
                            e.exports = function(e, r) {
                                if (t("noDeprecation")) return e;
                                var n = !1;
                                return function() {
                                    if (!n) {
                                        if (t("throwDeprecation")) throw Error(r);
                                        t("traceDeprecation") ? console.trace(r) : console.warn(r), n = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };

                            function t(e) {
                                try {
                                    if (!r.g.localStorage) return !1
                                } catch (e) {
                                    return !1
                                }
                                var t = r.g.localStorage[e];
                                return null != t && "true" === String(t).toLowerCase()
                            }
                        },
                        911: function(e) {
                            e.exports = function() {
                                for (var e = {}, r = 0; r < arguments.length; r++) {
                                    var n = arguments[r];
                                    for (var i in n) t.call(n, i) && (e[i] = n[i])
                                }
                                return e
                            };
                            var t = Object.prototype.hasOwnProperty
                        },
                        300: function(e) {
                            "use strict";
                            e.exports = r(51642)
                        },
                        361: function(e) {
                            "use strict";
                            e.exports = r(35978)
                        },
                        781: function(e) {
                            "use strict";
                            e.exports = r(46994)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = r(40252)
                        },
                        837: function(e) {
                            "use strict";
                            e.exports = r(84864)
                        }
                    },
                    o = {};

                function a(e) {
                    var r = o[e];
                    if (void 0 !== r) return r.exports;
                    var n = o[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](n, n.exports, a), i = !1
                    } finally {
                        i && delete o[e]
                    }
                    return n.exports
                }
                a.ab = "//", e.exports = a(813)
            }()
        },
        48203: (e, t, r) => {
            "use strict";
            var n = r(97598);
            e.exports = function() {
                return "function" == typeof Object.is ? Object.is : n
            }
        },
        49130: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmac = t.HMAC = void 0;
            let n = r(34116),
                i = r(15906);
            class o extends i.Hash {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, (0, n.hash)(e);
                    let r = (0, i.toBytes)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let o = this.blockLen,
                        a = new Uint8Array(o);
                    a.set(r.length > o ? e.create().update(r).digest() : r);
                    for (let e = 0; e < a.length; e++) a[e] ^= 54;
                    this.iHash.update(a), this.oHash = e.create();
                    for (let e = 0; e < a.length; e++) a[e] ^= 106;
                    this.oHash.update(a), a.fill(0)
                }
                update(e) {
                    return (0, n.exists)(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    (0, n.exists)(this), (0, n.bytes)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: a
                    } = this;
                    return e.finished = n, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            t.HMAC = o, t.hmac = (e, t, r) => new o(e, t).update(r).digest(), t.hmac.create = (e, t) => new o(e, t)
        },
        50797: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.intToUnpaddedBuffer = t.bigIntToUnpaddedBuffer = t.bigIntToHex = t.bufArrToArr = t.arrToBufArr = t.validateNoLeadingZeroes = t.baToJSON = t.toUtf8 = t.short = t.addHexPrefix = t.toUnsigned = t.fromSigned = t.bufferToInt = t.bigIntToBuffer = t.bufferToBigInt = t.bufferToHex = t.toBuffer = t.unpadHexString = t.unpadArray = t.unpadBuffer = t.setLengthRight = t.setLengthLeft = t.zeros = t.intToBuffer = t.intToHex = void 0;
            let i = r(54403),
                o = r(61363);
            t.intToHex = function(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Received an invalid integer type: ${e}`);
                return `0x${e.toString(16)}`
            }, t.intToBuffer = function(e) {
                let r = (0, t.intToHex)(e);
                return n.from((0, o.padToEven)(r.slice(2)), "hex")
            }, t.zeros = function(e) {
                return n.allocUnsafe(e).fill(0)
            };
            let a = function(e, r, n) {
                let i = (0, t.zeros)(r);
                return n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r)
            };
            t.setLengthLeft = function(e, t) {
                return (0, i.assertIsBuffer)(e), a(e, t, !1)
            }, t.setLengthRight = function(e, t) {
                return (0, i.assertIsBuffer)(e), a(e, t, !0)
            };
            let s = function(e) {
                let t = e[0];
                for (; e.length > 0 && "0" === t.toString();) t = (e = e.slice(1))[0];
                return e
            };

            function f(e) {
                let r = (0, t.bufferToHex)(e);
                return "0x" === r ? BigInt(0) : BigInt(r)
            }

            function l(e) {
                return (0, t.toBuffer)("0x" + e.toString(16))
            }
            t.unpadBuffer = function(e) {
                return (0, i.assertIsBuffer)(e), s(e)
            }, t.unpadArray = function(e) {
                return (0, i.assertIsArray)(e), s(e)
            }, t.unpadHexString = function(e) {
                return (0, i.assertIsHexString)(e), "0x" + s(e = (0, o.stripHexPrefix)(e))
            }, t.toBuffer = function(e) {
                if (null == e) return n.allocUnsafe(0);
                if (n.isBuffer(e) || Array.isArray(e) || e instanceof Uint8Array) return n.from(e);
                if ("string" == typeof e) {
                    if (!(0, o.isHexString)(e)) throw Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${e}`);
                    return n.from((0, o.padToEven)((0, o.stripHexPrefix)(e)), "hex")
                }
                if ("number" == typeof e) return (0, t.intToBuffer)(e);
                if ("bigint" == typeof e) {
                    if (e < BigInt(0)) throw Error(`Cannot convert negative bigint to buffer. Given: ${e}`);
                    let t = e.toString(16);
                    return t.length % 2 && (t = "0" + t), n.from(t, "hex")
                }
                if (e.toArray) return n.from(e.toArray());
                if (e.toBuffer) return n.from(e.toBuffer());
                throw Error("invalid type")
            }, t.bufferToHex = function(e) {
                return "0x" + (e = (0, t.toBuffer)(e)).toString("hex")
            }, t.bufferToBigInt = f, t.bigIntToBuffer = l, t.bufferToInt = function(e) {
                let t = Number(f(e));
                if (!Number.isSafeInteger(t)) throw Error("Number exceeds 53 bits");
                return t
            }, t.fromSigned = function(e) {
                return BigInt.asIntN(256, f(e))
            }, t.toUnsigned = function(e) {
                return l(BigInt.asUintN(256, e))
            }, t.addHexPrefix = function(e) {
                return "string" != typeof e ? e : (0, o.isHexPrefixed)(e) ? e : "0x" + e
            }, t.short = function(e, t = 50) {
                let r = n.isBuffer(e) ? e.toString("hex") : e;
                return r.length <= t ? r : r.slice(0, t) + "…"
            }, t.toUtf8 = function(e) {
                if ((e = (0, o.stripHexPrefix)(e)).length % 2 != 0) throw Error("Invalid non-even hex string input for toUtf8() provided");
                return n.from(e.replace(/^(00)+|(00)+$/g, ""), "hex").toString("utf8")
            }, t.baToJSON = function(e) {
                if (n.isBuffer(e)) return `0x${e.toString("hex")}`;
                if (e instanceof Array) {
                    let r = [];
                    for (let n = 0; n < e.length; n++) r.push((0, t.baToJSON)(e[n]));
                    return r
                }
            }, t.validateNoLeadingZeroes = function(e) {
                for (let [t, r] of Object.entries(e))
                    if (void 0 !== r && r.length > 0 && 0 === r[0]) throw Error(`${t} cannot have leading zeroes, received: ${r.toString("hex")}`)
            }, t.arrToBufArr = function e(t) {
                return Array.isArray(t) ? t.map(t => e(t)) : n.from(t)
            }, t.bufArrToArr = function e(t) {
                return Array.isArray(t) ? t.map(t => e(t)) : Uint8Array.from(t ? ? [])
            }, t.bigIntToHex = e => "0x" + e.toString(16), t.bigIntToUnpaddedBuffer = function(e) {
                return (0, t.unpadBuffer)(l(e))
            }, t.intToUnpaddedBuffer = function(e) {
                return (0, t.unpadBuffer)((0, t.intToBuffer)(e))
            }
        },
        51552: (e, t, r) => {
            "use strict";
            r.d(t, {
                Kk: () => d,
                NC: () => m,
                RF: () => u,
                Rg: () => c,
                eF: () => f,
                kW: () => w,
                km: () => h,
                oV: () => g,
                zL: () => s
            });
            var n, i = r(3098),
                o = r(31704);

            function a(e = 6, t = !1) {
                return i.LV({
                    encodeStream: (e, t) => {
                        if (0 n === t) return;
                        let r = t < 0,
                            n = BigInt(t),
                            i = [];
                        for (let e = r ? -n : n; e; e >>= 8 n) i.push(Number(255 n & e));
                        i[i.length - 1] >= 128 ? i.push(128 * !!r) : r && (i[i.length - 1] |= 128), e.bytes(new Uint8Array(i))
                    },
                    decodeStream: r => {
                        let n = r.leftBytes;
                        if (n > e) throw Error(`ScriptNum: number (${n}) bigger than limit=${e}`);
                        if (0 === n) return 0 n;
                        if (t) {
                            let e = r.bytes(n, !0);
                            if ((127 & e[e.length - 1]) == 0 && (n <= 1 || (128 & e[e.length - 2]) == 0)) throw Error("Non-minimally encoded ScriptNum")
                        }
                        let i = 0,
                            o = 0 n;
                        for (let e = 0; e < n; ++e) o |= BigInt(i = r.byte()) << 8 n * BigInt(e);
                        return i >= 128 && (o &= 2 n ** BigInt(8 * n) - 1 n >> 1 n, o = -o), o
                    }
                })
            }

            function s(e, t = 4, r = !0) {
                if ("number" == typeof e) return e;
                if ((0, o.aY)(e)) try {
                    let n = a(t, r).decode(e);
                    if (n > Number.MAX_SAFE_INTEGER) return;
                    return Number(n)
                } catch (e) {}
            }! function(e) {
                e[e.OP_0 = 0] = "OP_0", e[e.PUSHDATA1 = 76] = "PUSHDATA1", e[e.PUSHDATA2 = 77] = "PUSHDATA2", e[e.PUSHDATA4 = 78] = "PUSHDATA4", e[e["1NEGATE"] = 79] = "1NEGATE", e[e.RESERVED = 80] = "RESERVED", e[e.OP_1 = 81] = "OP_1", e[e.OP_2 = 82] = "OP_2", e[e.OP_3 = 83] = "OP_3", e[e.OP_4 = 84] = "OP_4", e[e.OP_5 = 85] = "OP_5", e[e.OP_6 = 86] = "OP_6", e[e.OP_7 = 87] = "OP_7", e[e.OP_8 = 88] = "OP_8", e[e.OP_9 = 89] = "OP_9", e[e.OP_10 = 90] = "OP_10", e[e.OP_11 = 91] = "OP_11", e[e.OP_12 = 92] = "OP_12", e[e.OP_13 = 93] = "OP_13", e[e.OP_14 = 94] = "OP_14", e[e.OP_15 = 95] = "OP_15", e[e.OP_16 = 96] = "OP_16", e[e.NOP = 97] = "NOP", e[e.VER = 98] = "VER", e[e.IF = 99] = "IF", e[e.NOTIF = 100] = "NOTIF", e[e.VERIF = 101] = "VERIF", e[e.VERNOTIF = 102] = "VERNOTIF", e[e.ELSE = 103] = "ELSE", e[e.ENDIF = 104] = "ENDIF", e[e.VERIFY = 105] = "VERIFY", e[e.RETURN = 106] = "RETURN", e[e.TOALTSTACK = 107] = "TOALTSTACK", e[e.FROMALTSTACK = 108] = "FROMALTSTACK", e[e["2DROP"] = 109] = "2DROP", e[e["2DUP"] = 110] = "2DUP", e[e["3DUP"] = 111] = "3DUP", e[e["2OVER"] = 112] = "2OVER", e[e["2ROT"] = 113] = "2ROT", e[e["2SWAP"] = 114] = "2SWAP", e[e.IFDUP = 115] = "IFDUP", e[e.DEPTH = 116] = "DEPTH", e[e.DROP = 117] = "DROP", e[e.DUP = 118] = "DUP", e[e.NIP = 119] = "NIP", e[e.OVER = 120] = "OVER", e[e.PICK = 121] = "PICK", e[e.ROLL = 122] = "ROLL", e[e.ROT = 123] = "ROT", e[e.SWAP = 124] = "SWAP", e[e.TUCK = 125] = "TUCK", e[e.CAT = 126] = "CAT", e[e.SUBSTR = 127] = "SUBSTR", e[e.LEFT = 128] = "LEFT", e[e.RIGHT = 129] = "RIGHT", e[e.SIZE = 130] = "SIZE", e[e.INVERT = 131] = "INVERT", e[e.AND = 132] = "AND", e[e.OR = 133] = "OR", e[e.XOR = 134] = "XOR", e[e.EQUAL = 135] = "EQUAL", e[e.EQUALVERIFY = 136] = "EQUALVERIFY", e[e.RESERVED1 = 137] = "RESERVED1", e[e.RESERVED2 = 138] = "RESERVED2", e[e["1ADD"] = 139] = "1ADD", e[e["1SUB"] = 140] = "1SUB", e[e["2MUL"] = 141] = "2MUL", e[e["2DIV"] = 142] = "2DIV", e[e.NEGATE = 143] = "NEGATE", e[e.ABS = 144] = "ABS", e[e.NOT = 145] = "NOT", e[e["0NOTEQUAL"] = 146] = "0NOTEQUAL", e[e.ADD = 147] = "ADD", e[e.SUB = 148] = "SUB", e[e.MUL = 149] = "MUL", e[e.DIV = 150] = "DIV", e[e.MOD = 151] = "MOD", e[e.LSHIFT = 152] = "LSHIFT", e[e.RSHIFT = 153] = "RSHIFT", e[e.BOOLAND = 154] = "BOOLAND", e[e.BOOLOR = 155] = "BOOLOR", e[e.NUMEQUAL = 156] = "NUMEQUAL", e[e.NUMEQUALVERIFY = 157] = "NUMEQUALVERIFY", e[e.NUMNOTEQUAL = 158] = "NUMNOTEQUAL", e[e.LESSTHAN = 159] = "LESSTHAN", e[e.GREATERTHAN = 160] = "GREATERTHAN", e[e.LESSTHANOREQUAL = 161] = "LESSTHANOREQUAL", e[e.GREATERTHANOREQUAL = 162] = "GREATERTHANOREQUAL", e[e.MIN = 163] = "MIN", e[e.MAX = 164] = "MAX", e[e.WITHIN = 165] = "WITHIN", e[e.RIPEMD160 = 166] = "RIPEMD160", e[e.SHA1 = 167] = "SHA1", e[e.SHA256 = 168] = "SHA256", e[e.HASH160 = 169] = "HASH160", e[e.HASH256 = 170] = "HASH256", e[e.CODESEPARATOR = 171] = "CODESEPARATOR", e[e.CHECKSIG = 172] = "CHECKSIG", e[e.CHECKSIGVERIFY = 173] = "CHECKSIGVERIFY", e[e.CHECKMULTISIG = 174] = "CHECKMULTISIG", e[e.CHECKMULTISIGVERIFY = 175] = "CHECKMULTISIGVERIFY", e[e.NOP1 = 176] = "NOP1", e[e.CHECKLOCKTIMEVERIFY = 177] = "CHECKLOCKTIMEVERIFY", e[e.CHECKSEQUENCEVERIFY = 178] = "CHECKSEQUENCEVERIFY", e[e.NOP4 = 179] = "NOP4", e[e.NOP5 = 180] = "NOP5", e[e.NOP6 = 181] = "NOP6", e[e.NOP7 = 182] = "NOP7", e[e.NOP8 = 183] = "NOP8", e[e.NOP9 = 184] = "NOP9", e[e.NOP10 = 185] = "NOP10", e[e.CHECKSIGADD = 186] = "CHECKSIGADD", e[e.INVALID = 255] = "INVALID"
            }(n || (n = {}));
            let f = i.LV({
                    encodeStream: (e, t) => {
                        for (let r of t) {
                            if ("string" == typeof r) {
                                if (void 0 === n[r]) throw Error(`Unknown opcode=${r}`);
                                e.byte(n[r]);
                                continue
                            }
                            if ("number" == typeof r) {
                                if (0 === r) {
                                    e.byte(0);
                                    continue
                                }
                                if (1 <= r && r <= 16) {
                                    e.byte(n.OP_1 - 1 + r);
                                    continue
                                }
                            }
                            if ("number" == typeof r && (r = a().encode(BigInt(r))), !(0, o.aY)(r)) throw Error(`Wrong Script OP=${r} (${typeof r})`);
                            let t = r.length;
                            t < n.PUSHDATA1 ? e.byte(t) : t <= 255 ? (e.byte(n.PUSHDATA1), e.byte(t)) : t <= 65535 ? (e.byte(n.PUSHDATA2), e.bytes(i.MX.encode(t))) : (e.byte(n.PUSHDATA4), e.bytes(i.QK.encode(t))), e.bytes(r)
                        }
                    },
                    decodeStream: e => {
                        let t = [];
                        for (; !e.isEnd();) {
                            let r = e.byte();
                            if (n.OP_0 < r && r <= n.PUSHDATA4) {
                                let o;
                                if (r < n.PUSHDATA1) o = r;
                                else if (r === n.PUSHDATA1) o = i.U8.decodeStream(e);
                                else if (r === n.PUSHDATA2) o = i.MX.decodeStream(e);
                                else if (r === n.PUSHDATA4) o = i.QK.decodeStream(e);
                                else throw Error("Should be not possible");
                                t.push(e.bytes(o))
                            } else if (0 === r) t.push(0);
                            else if (n.OP_1 <= r && r <= n.OP_16) t.push(r - (n.OP_1 - 1));
                            else {
                                let e = n[r];
                                if (void 0 === e) throw Error(`Unknown opcode=${r.toString(16)}`);
                                t.push(e)
                            }
                        }
                        return t
                    }
                }),
                l = {
                    253: [253, 2, 253 n, 65535 n],
                    254: [254, 4, 65536 n, 4294967295 n],
                    255: [255, 8, 4294967296 n, 0xffffffffffffffff n]
                },
                u = i.LV({
                    encodeStream: (e, t) => {
                        if ("number" == typeof t && (t = BigInt(t)), 0 n <= t && t <= 252 n) return e.byte(Number(t));
                        for (let [r, n, i, o] of Object.values(l))
                            if (!(i > t) && !(t > o)) {
                                e.byte(r);
                                for (let r = 0; r < n; r++) e.byte(Number(t >> 8 n * BigInt(r) & 255 n));
                                return
                            }
                        throw e.err(`VarInt too big: ${t}`)
                    },
                    decodeStream: e => {
                        let t = e.byte();
                        if (t <= 252) return BigInt(t);
                        let [r, n, i] = l[t], o = 0 n;
                        for (let t = 0; t < n; t++) o |= BigInt(e.byte()) << 8 n * BigInt(t);
                        if (o < i) throw e.err(`Wrong CompactSize(${8*n})`);
                        return o
                    }
                }),
                h = i.Bb(u, i.Lo.numberBigint),
                c = i.ee(u),
                d = i.YO(h, c),
                p = e => i.YO(u, e),
                y = i.w3({
                    txid: i.ee(32, !0),
                    index: i.QK,
                    finalScriptSig: c,
                    sequence: i.QK
                }),
                g = i.w3({
                    amount: i.dg,
                    script: c
                }),
                b = i.w3({
                    version: i.eV,
                    segwitFlag: i.Jt(new Uint8Array([0, 1])),
                    inputs: p(y),
                    outputs: p(g),
                    witnesses: i.fv("segwitFlag", i.YO("inputs/length", d)),
                    lockTime: i.QK
                }),
                m = i.tf(b, function(e) {
                    if (e.segwitFlag && e.witnesses && !e.witnesses.length) throw Error("Segwit flag with empty witnesses array");
                    return e
                }),
                w = i.w3({
                    version: i.eV,
                    inputs: p(y),
                    outputs: p(g),
                    lockTime: i.QK
                })
        },
        52344: (e, t, r) => {
            "use strict";
            r.d(t, {
                Az: () => l,
                DM: () => f,
                TQ: () => o,
                ol: () => a,
                r9: () => i,
                tT: () => u,
                yc: () => s
            });
            var n = r(84080);

            function i(e, t, r) {
                return e & t ^ ~e & r
            }

            function o(e, t, r) {
                return e & t ^ e & r ^ t & r
            }
            class a extends n.Vw {
                constructor(e, t, r, i) {
                    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.buffer = new Uint8Array(e), this.view = (0, n.O8)(this.buffer)
                }
                update(e) {
                    (0, n.CC)(this), e = (0, n.ZJ)(e), (0, n.DO)(e);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: i
                    } = this, o = e.length;
                    for (let a = 0; a < o;) {
                        let s = Math.min(i - this.pos, o - a);
                        if (s === i) {
                            let t = (0, n.O8)(e);
                            for (; i <= o - a; a += i) this.process(t, a);
                            continue
                        }
                        r.set(e.subarray(a, a + s), this.pos), this.pos += s, a += s, this.pos === i && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, n.CC)(this), (0, n.Ht)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: i,
                        isLE: o
                    } = this, {
                        pos: a
                    } = this;
                    t[a++] = 128, (0, n.uH)(this.buffer.subarray(a)), this.padOffset > i - a && (this.process(r, 0), a = 0);
                    for (let e = a; e < i; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            o = BigInt(0xffffffff),
                            a = Number(r >> i & o),
                            s = Number(r & o),
                            f = 4 * !!n,
                            l = 4 * !n;
                        e.setUint32(t + f, a, n), e.setUint32(t + l, s, n)
                    }(r, i - 8, BigInt(8 * this.length), o), this.process(r, 0);
                    let s = (0, n.O8)(e),
                        f = this.outputLen;
                    if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = f / 4,
                        u = this.get();
                    if (l > u.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < l; e++) s.setUint32(4 * e, u[e], o)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: a
                    } = this;
                    return e.destroyed = o, e.finished = i, e.length = n, e.pos = a, n % t && e.buffer.set(r), e
                }
                clone() {
                    return this._cloneInto()
                }
            }
            let s = Uint32Array.from([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]),
                f = Uint32Array.from([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]),
                l = Uint32Array.from([0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4]),
                u = Uint32Array.from([0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179])
        },
        52577: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GWEI_TO_WEI = void 0, t.GWEI_TO_WEI = BigInt(1e9)
        },
        52751: (e, t, r) => {
            "use strict";
            var n = r(29143);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = a(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" !== p(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== p(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === p(t) ? t : String(t)
            }

            function s(e, t) {
                if (t && ("object" === p(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }

            function f(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (l = function(e) {
                    var r;
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return u(e, arguments, d(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), c(n, e)
                })(e)
            }

            function u(e, t, r) {
                return (u = h() ? Reflect.construct.bind() : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && c(i, r.prototype), i
                }).apply(null, arguments)
            }

            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var y = r(84864).inspect,
                g = r(57180).codes.ERR_INVALID_ARG_TYPE;

            function b(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
            }
            var m = "",
                w = "",
                v = "",
                _ = "",
                x = {
                    deepStrictEqual: "Expected values to be strictly deep-equal:",
                    strictEqual: "Expected values to be strictly equal:",
                    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                    deepEqual: "Expected values to be loosely deep-equal:",
                    equal: "Expected values to be loosely equal:",
                    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                    notEqual: 'Expected "actual" to be loosely unequal to:',
                    notIdentical: "Values identical but not reference-equal:"
                };

            function E(e) {
                var t = Object.keys(e),
                    r = Object.create(Object.getPrototypeOf(e));
                return t.forEach(function(t) {
                    r[t] = e[t]
                }), Object.defineProperty(r, "message", {
                    value: e.message
                }), r
            }

            function S(e) {
                return y(e, {
                    compact: !1,
                    customInspect: !1,
                    depth: 1e3,
                    maxArrayLength: 1 / 0,
                    showHidden: !1,
                    breakLength: 1 / 0,
                    showProxy: !1,
                    sorted: !0,
                    getters: !0
                })
            }
            e.exports = function(e, t) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && c(e, t)
                }(u, e);
                var r, i, l = (r = h(), function() {
                    var e, t = d(u);
                    return e = r ? Reflect.construct(t, arguments, d(this).constructor) : t.apply(this, arguments), s(this, e)
                });

                function u(e) {
                    if (! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, u), "object" !== p(e) || null === e) throw new g("options", "Object", e);
                    var t, r = e.message,
                        i = e.operator,
                        o = e.stackStartFn,
                        a = e.actual,
                        h = e.expected,
                        c = Error.stackTraceLimit;
                    if (Error.stackTraceLimit = 0, null != r) t = l.call(this, String(r));
                    else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (m = "\x1b[34m", w = "\x1b[32m", _ = "\x1b[39m", v = "\x1b[31m") : (m = "", w = "", _ = "", v = "")), "object" === p(a) && null !== a && "object" === p(h) && null !== h && "stack" in a && a instanceof Error && "stack" in h && h instanceof Error && (a = E(a), h = E(h)), "deepStrictEqual" === i || "strictEqual" === i) t = l.call(this, function(e, t, r) {
                        var i = "",
                            o = "",
                            a = 0,
                            s = "",
                            f = !1,
                            l = S(e),
                            u = l.split("\n"),
                            h = S(t).split("\n"),
                            c = 0,
                            d = "";
                        if ("strictEqual" === r && "object" === p(e) && "object" === p(t) && null !== e && null !== t && (r = "strictEqualObject"), 1 === u.length && 1 === h.length && u[0] !== h[0]) {
                            var y = u[0].length + h[0].length;
                            if (y <= 10) {
                                if (("object" !== p(e) || null === e) && ("object" !== p(t) || null === t) && (0 !== e || 0 !== t)) return "".concat(x[r], "\n\n") + "".concat(u[0], " !== ").concat(h[0], "\n")
                            } else if ("strictEqualObject" !== r && y < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                                for (; u[0][c] === h[0][c];) c++;
                                c > 2 && (d = "\n  ".concat(function(e, t) {
                                    if (t = Math.floor(t), 0 == e.length || 0 == t) return "";
                                    var r = e.length * t;
                                    for (t = Math.floor(Math.log(t) / Math.log(2)); t;) e += e, t--;
                                    return e + e.substring(0, r - e.length)
                                }(" ", c), "^"), c = 0)
                            }
                        }
                        for (var g = u[u.length - 1], E = h[h.length - 1]; g === E && (c++ < 2 ? s = "\n  ".concat(g).concat(s) : i = g, u.pop(), h.pop(), 0 !== u.length && 0 !== h.length);) g = u[u.length - 1], E = h[h.length - 1];
                        var A = Math.max(u.length, h.length);
                        if (0 === A) {
                            var k = l.split("\n");
                            if (k.length > 30)
                                for (k[26] = "".concat(m, "...").concat(_); k.length > 27;) k.pop();
                            return "".concat(x.notIdentical, "\n\n").concat(k.join("\n"), "\n")
                        }
                        c > 3 && (s = "\n".concat(m, "...").concat(_).concat(s), f = !0), "" !== i && (s = "\n  ".concat(i).concat(s), i = "");
                        var B = 0,
                            O = x[r] + "\n".concat(w, "+ actual").concat(_, " ").concat(v, "- expected").concat(_),
                            I = " ".concat(m, "...").concat(_, " Lines skipped");
                        for (c = 0; c < A; c++) {
                            var T = c - a;
                            if (u.length < c + 1) T > 1 && c > 2 && (T > 4 ? (o += "\n".concat(m, "...").concat(_), f = !0) : T > 3 && (o += "\n  ".concat(h[c - 2]), B++), o += "\n  ".concat(h[c - 1]), B++), a = c, i += "\n".concat(v, "-").concat(_, " ").concat(h[c]), B++;
                            else if (h.length < c + 1) T > 1 && c > 2 && (T > 4 ? (o += "\n".concat(m, "...").concat(_), f = !0) : T > 3 && (o += "\n  ".concat(u[c - 2]), B++), o += "\n  ".concat(u[c - 1]), B++), a = c, o += "\n".concat(w, "+").concat(_, " ").concat(u[c]), B++;
                            else {
                                var R = h[c],
                                    M = u[c],
                                    P = M !== R && (!b(M, ",") || M.slice(0, -1) !== R);
                                P && b(R, ",") && R.slice(0, -1) === M && (P = !1, M += ","), P ? (T > 1 && c > 2 && (T > 4 ? (o += "\n".concat(m, "...").concat(_), f = !0) : T > 3 && (o += "\n  ".concat(u[c - 2]), B++), o += "\n  ".concat(u[c - 1]), B++), a = c, o += "\n".concat(w, "+").concat(_, " ").concat(M), i += "\n".concat(v, "-").concat(_, " ").concat(R), B += 2) : (o += i, i = "", (1 === T || 0 === c) && (o += "\n  ".concat(M), B++))
                            }
                            if (B > 20 && c < A - 2) return "".concat(O).concat(I, "\n").concat(o, "\n").concat(m, "...").concat(_).concat(i, "\n") + "".concat(m, "...").concat(_)
                        }
                        return "".concat(O).concat(f ? I : "", "\n").concat(o).concat(i).concat(s).concat(d)
                    }(a, h, i));
                    else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
                        var d = x[i],
                            y = S(a).split("\n");
                        if ("notStrictEqual" === i && "object" === p(a) && null !== a && (d = x.notStrictEqualObject), y.length > 30)
                            for (y[26] = "".concat(m, "...").concat(_); y.length > 27;) y.pop();
                        t = 1 === y.length ? l.call(this, "".concat(d, " ").concat(y[0])) : l.call(this, "".concat(d, "\n\n").concat(y.join("\n"), "\n"))
                    } else {
                        var A = S(a),
                            k = "",
                            B = x[i];
                        "notDeepEqual" === i || "notEqual" === i ? (A = "".concat(x[i], "\n\n").concat(A)).length > 1024 && (A = "".concat(A.slice(0, 1021), "...")) : (k = "".concat(S(h)), A.length > 512 && (A = "".concat(A.slice(0, 509), "...")), k.length > 512 && (k = "".concat(k.slice(0, 509), "...")), "deepEqual" === i || "equal" === i ? A = "".concat(B, "\n\n").concat(A, "\n\nshould equal\n\n") : k = " ".concat(i, " ").concat(k)), t = l.call(this, "".concat(A).concat(k))
                    }
                    return Error.stackTraceLimit = c, t.generatedMessage = !r, Object.defineProperty(f(t), "name", {
                        value: "AssertionError [ERR_ASSERTION]",
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }), t.code = "ERR_ASSERTION", t.actual = a, t.expected = h, t.operator = i, Error.captureStackTrace && Error.captureStackTrace(f(t), o), t.stack, t.name = "AssertionError", s(t)
                }
                return i = [{
                        key: "toString",
                        value: function() {
                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                        }
                    }, {
                        key: t,
                        value: function(e, t) {
                            return y(this, o(o({}, t), {}, {
                                customInspect: !1,
                                depth: 0
                            }))
                        }
                    }],
                    function(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
                        }
                    }(u.prototype, i), Object.defineProperty(u, "prototype", {
                        writable: !1
                    }), u
            }(l(Error), y.custom)
        },
        54403: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertIsString = t.assertIsArray = t.assertIsBuffer = t.assertIsHexString = void 0;
            let i = r(61363);
            t.assertIsHexString = function(e) {
                if (!(0, i.isHexString)(e)) throw Error(`This method only supports 0x-prefixed hex strings but input was: ${e}`)
            }, t.assertIsBuffer = function(e) {
                if (!n.isBuffer(e)) throw Error(`This method only supports Buffer but input was: ${e}`)
            }, t.assertIsArray = function(e) {
                if (!Array.isArray(e)) throw Error(`This method only supports number arrays but input was: ${e}`)
            }, t.assertIsString = function(e) {
                if ("string" != typeof e) throw Error(`This method only supports strings but input was: ${e}`)
            }
        },
        56315: (e, t, r) => {
            "use strict";
            var n = r(78030);
            e.exports = function() {
                return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n
            }
        },
        57180: (e, t, r) => {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var a, s, f = {};

            function l(e, t, r) {
                r || (r = Error);
                var a = function(r) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && i(e, t)
                    }(f, r);
                    var a, s = (a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, t = o(f);
                        return e = a ? Reflect.construct(t, arguments, o(this).constructor) : t.apply(this, arguments),
                            function(e, t) {
                                if (t && ("object" === n(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e)
                            }(this, e)
                    });

                    function f(r, n, i) {
                        var o;
                        return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, f), (o = s.call(this, "string" == typeof t ? t : t(r, n, i))).code = e, o
                    }
                    return Object.defineProperty(f, "prototype", {
                        writable: !1
                    }), f
                }(r);
                f[e] = a
            }

            function u(e, t) {
                if (!Array.isArray(e)) return "of ".concat(t, " ").concat(String(e));
                var r = e.length;
                return (e = e.map(function(e) {
                    return String(e)
                }), r > 2) ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            l("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), l("ERR_INVALID_ARG_TYPE", function(e, t, i) {
                if ((void 0 === a && (a = r(70441)), a("string" == typeof e, "'name' must be a string"), "string" == typeof t && (o = "not ", t.substr(0, o.length) === o)) ? (h = "must not be", t = t.replace(/^not /, "")) : h = "must be", s = " argument", (void 0 === f || f > e.length) && (f = e.length), e.substring(f - s.length, f) === s) c = "The ".concat(e, " ").concat(h, " ").concat(u(t, "type"));
                else {
                    var o, s, f, l, h, c, d = ("number" != typeof l && (l = 0), l + 1 > e.length || -1 === e.indexOf(".", l)) ? "argument" : "property";
                    c = 'The "'.concat(e, '" ').concat(d, " ").concat(h, " ").concat(u(t, "type"))
                }
                return c + ". Received type ".concat(n(i))
            }, TypeError), l("ERR_INVALID_ARG_VALUE", function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                void 0 === s && (s = r(84864));
                var i = s.inspect(t);
                return i.length > 128 && (i = "".concat(i.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(n, ". Received ").concat(i)
            }, TypeError, RangeError), l("ERR_INVALID_RETURN_VALUE", function(e, t, r) {
                var i;
                return i = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)), "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(i, ".")
            }, TypeError), l("ERR_MISSING_ARGS", function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                void 0 === a && (a = r(70441)), a(t.length > 0, "At least one arg needs to be specified");
                var i = "The ",
                    o = t.length;
                switch (t = t.map(function(e) {
                    return '"'.concat(e, '"')
                }), o) {
                    case 1:
                        i += "".concat(t[0], " argument");
                        break;
                    case 2:
                        i += "".concat(t[0], " and ").concat(t[1], " arguments");
                        break;
                    default:
                        i += t.slice(0, o - 1).join(", "), i += ", and ".concat(t[o - 1], " arguments")
                }
                return "".concat(i, " must be specified")
            }, TypeError), e.exports.codes = f
        },
        57953: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bitMask = void 0, t.isBytes = o, t.abytes = a, t.bytesToHex = f, t.numberToHexUnpadded = l, t.hexToNumber = u, t.hexToBytes = d, t.bytesToNumberBE = function(e) {
                return u(f(e))
            }, t.bytesToNumberLE = function(e) {
                return a(e), u(f(Uint8Array.from(e).reverse()))
            }, t.numberToBytesBE = p, t.numberToBytesLE = function(e, t) {
                return p(e, t).reverse()
            }, t.numberToVarBytesBE = function(e) {
                return d(l(e))
            }, t.ensureBytes = function(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = d(t)
                    } catch (r) {
                        throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)
                    } else if (o(t)) n = Uint8Array.from(t);
                    else throw Error(`${e} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${e} expected ${r} bytes, got ${i}`);
                return n
            }, t.concatBytes = y, t.equalBytes = function(e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 0 === r
            }, t.utf8ToBytes = function(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }, t.bitLen = function(e) {
                let t;
                for (t = 0; e > r; e >>= n, t += 1);
                return t
            }, t.bitGet = function(e, t) {
                return e >> BigInt(t) & n
            }, t.bitSet = function(e, t, i) {
                return e | (i ? n : r) << BigInt(t)
            }, t.createHmacDrbg = function(e, t, r) {
                if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = g(e),
                    i = g(e),
                    o = 0,
                    a = () => {
                        n.fill(1), i.fill(0), o = 0
                    },
                    s = (...e) => r(i, n, ...e),
                    f = (e = g()) => {
                        i = s(b([0]), e), n = s(), 0 !== e.length && (i = s(b([1]), e), n = s())
                    },
                    l = () => {
                        if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let e = 0,
                            r = [];
                        for (; e < t;) {
                            let t = (n = s()).slice();
                            r.push(t), e += n.length
                        }
                        return y(...r)
                    };
                return (e, t) => {
                    let r;
                    for (a(), f(e); !(r = t(l()));) f();
                    return a(), r
                }
            }, t.validateObject = function(e, t, r = {}) {
                let n = (t, r, n) => {
                    let i = m[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let o = e[t];
                    if ((!n || void 0 !== o) && !i(o, e)) throw Error(`Invalid param ${String(t)}=${o} (${typeof o}), expected ${r}`)
                };
                for (let [e, r] of Object.entries(t)) n(e, r, !1);
                for (let [e, t] of Object.entries(r)) n(e, t, !0);
                return e
            };
            let r = BigInt(0),
                n = BigInt(1),
                i = BigInt(2);

            function o(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function a(e) {
                if (!o(e)) throw Error("Uint8Array expected")
            }
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function f(e) {
                a(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += s[e[r]];
                return t
            }

            function l(e) {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t
            }

            function u(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return BigInt("" === e ? "0" : `0x${e}`)
            }
            let h = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function c(e) {
                return e >= h._0 && e <= h._9 ? e - h._0 : e >= h._A && e <= h._F ? e - (h._A - 10) : e >= h._a && e <= h._f ? e - (h._a - 10) : void 0
            }

            function d(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = c(e.charCodeAt(i)),
                        o = c(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    n[t] = 16 * r + o
                }
                return n
            }

            function p(e, t) {
                return d(e.toString(16).padStart(2 * t, "0"))
            }

            function y(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    a(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }
            t.bitMask = e => (i << BigInt(e - 1)) - n;
            let g = e => new Uint8Array(e),
                b = e => Uint8Array.from(e),
                m = {
                    bigint: e => "bigint" == typeof e,
                    function: e => "function" == typeof e,
                    boolean: e => "boolean" == typeof e,
                    string: e => "string" == typeof e,
                    stringOrUint8Array: e => "string" == typeof e || o(e),
                    isSafeInteger: e => Number.isSafeInteger(e),
                    array: e => Array.isArray(e),
                    field: (e, t) => t.Fp.isValid(e),
                    hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
                }
        },
        61363: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;

            function i(e) {
                if ("string" != typeof e) throw Error(`[isHexPrefixed] input must be type 'string', received type ${typeof e}`);
                return "0" === e[0] && "x" === e[1]
            }

            function o(e) {
                let t = e;
                if ("string" != typeof t) throw Error(`[padToEven] value must be type 'string', received ${typeof t}`);
                return t.length % 2 && (t = `0${t}`), t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isHexString = t.getKeys = t.fromAscii = t.fromUtf8 = t.toAscii = t.arrayContainsArray = t.getBinarySize = t.padToEven = t.stripHexPrefix = t.isHexPrefixed = void 0, t.isHexPrefixed = i, t.stripHexPrefix = e => {
                if ("string" != typeof e) throw Error(`[stripHexPrefix] input must be type 'string', received ${typeof e}`);
                return i(e) ? e.slice(2) : e
            }, t.padToEven = o, t.getBinarySize = function(e) {
                if ("string" != typeof e) throw Error(`[getBinarySize] method requires input type 'string', received ${typeof e}`);
                return n.byteLength(e, "utf8")
            }, t.arrayContainsArray = function(e, t, r) {
                if (!0 !== Array.isArray(e)) throw Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof e}'`);
                if (!0 !== Array.isArray(t)) throw Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof t}'`);
                return t[!0 === r ? "some" : "every"](t => e.indexOf(t) >= 0)
            }, t.toAscii = function(e) {
                let t = "",
                    r = 0,
                    n = e.length;
                for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
                return t
            }, t.fromUtf8 = function(e) {
                let t = n.from(e, "utf8");
                return `0x${o(t.toString("hex")).replace(/^0+|0+$/g,"")}`
            }, t.fromAscii = function(e) {
                let t = "";
                for (let r = 0; r < e.length; r++) {
                    let n = e.charCodeAt(r).toString(16);
                    t += n.length < 2 ? `0${n}` : n
                }
                return `0x${t}`
            }, t.getKeys = function(e, t, r) {
                if (!Array.isArray(e)) throw Error(`[getKeys] method expects input 'params' to be an array, got ${typeof e}`);
                if ("string" != typeof t) throw Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof e}`);
                let n = [];
                for (let i = 0; i < e.length; i++) {
                    let o = e[i][t];
                    if (!0 !== r || o) {
                        if ("string" != typeof o) throw Error(`invalid abi - expected type 'string', received ${typeof o}`)
                    } else o = "";
                    n.push(o)
                }
                return n
            }, t.isHexString = function(e, t) {
                return "string" == typeof e && !!e.match(/^0x[0-9A-Fa-f]*$/) && (void 0 === t || !(t > 0) || e.length === 2 + 2 * t)
            }
        },
        62397: (e, t, r) => {
            "use strict";
            var n = r(93529),
                i = r(56315);
            e.exports = function() {
                var e = i();
                return n(Number, {
                    isNaN: e
                }, {
                    isNaN: function() {
                        return Number.isNaN !== e
                    }
                }), e
            }
        },
        62504: (e, t) => {
            "use strict";

            function r(e) {
                if (Array.isArray(e)) {
                    let t = [],
                        n = 0;
                    for (let i = 0; i < e.length; i++) {
                        let o = r(e[i]);
                        t.push(o), n += o.length
                    }
                    return h(o(n, 192), ...t)
                }
                let t = y(e);
                return 1 === t.length && t[0] < 128 ? t : h(o(t.length, 128), t)
            }

            function n(e, t, r) {
                if (r > e.length) throw Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                return e.slice(t, r)
            }

            function i(e) {
                if (0 === e[0]) throw Error("invalid RLP: extra zeros");
                return l(f(e))
            }

            function o(e, t) {
                if (e < 56) return Uint8Array.from([e + t]);
                let r = d(e),
                    n = d(t + 55 + r.length / 2);
                return Uint8Array.from(u(n + r))
            }

            function a(e, t = !1) {
                if (null == e || 0 === e.length) return Uint8Array.from([]);
                let r = function e(t) {
                    let r, o, a, s, f;
                    let l = [],
                        u = t[0];
                    if (u <= 127) return {
                        data: t.slice(0, 1),
                        remainder: t.slice(1)
                    };
                    if (u <= 183) {
                        if (r = u - 127, a = 128 === u ? Uint8Array.from([]) : n(t, 1, r), 2 === r && a[0] < 128) throw Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                        return {
                            data: a,
                            remainder: t.slice(r)
                        }
                    }
                    if (u <= 191) {
                        if (o = u - 182, t.length - 1 < o) throw Error("invalid RLP: not enough bytes for string length");
                        if ((r = i(n(t, 1, o))) <= 55) throw Error("invalid RLP: expected string length to be greater than 55");
                        return {
                            data: a = n(t, o, r + o),
                            remainder: t.slice(r + o)
                        }
                    }
                    if (u <= 247) {
                        for (s = n(t, 1, r = u - 191); s.length;) f = e(s), l.push(f.data), s = f.remainder;
                        return {
                            data: l,
                            remainder: t.slice(r)
                        }
                    } {
                        if ((r = i(n(t, 1, o = u - 246))) < 56) throw Error("invalid RLP: encoded list too short");
                        let a = o + r;
                        if (a > t.length) throw Error("invalid RLP: total length is larger than the data");
                        for (s = n(t, o, a); s.length;) f = e(s), l.push(f.data), s = f.remainder;
                        return {
                            data: l,
                            remainder: t.slice(a)
                        }
                    }
                }(y(e));
                if (t) return r;
                if (0 !== r.remainder.length) throw Error("invalid RLP: remainder must be zero");
                return r.data
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RLP = t.utils = t.decode = t.encode = void 0, t.encode = r, t.decode = a;
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function f(e) {
                let t = "";
                for (let r = 0; r < e.length; r++) t += s[e[r]];
                return t
            }

            function l(e) {
                let t = Number.parseInt(e, 16);
                if (Number.isNaN(t)) throw Error("Invalid byte sequence");
                return t
            }

            function u(e) {
                if ("string" != typeof e) throw TypeError("hexToBytes: expected string, got " + typeof e);
                if (e.length % 2) throw Error("hexToBytes: received invalid unpadded hex");
                let t = new Uint8Array(e.length / 2);
                for (let r = 0; r < t.length; r++) {
                    let n = 2 * r;
                    t[r] = l(e.slice(n, n + 2))
                }
                return t
            }

            function h(...e) {
                if (1 === e.length) return e[0];
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
                for (let r = 0, n = 0; r < e.length; r++) {
                    let i = e[r];
                    t.set(i, n), n += i.length
                }
                return t
            }

            function c(e) {
                return new TextEncoder().encode(e)
            }

            function d(e) {
                if (e < 0) throw Error("Invalid integer as argument, must be unsigned!");
                let t = e.toString(16);
                return t.length % 2 ? `0${t}` : t
            }

            function p(e) {
                return e.length >= 2 && "0" === e[0] && "x" === e[1]
            }

            function y(e) {
                if (e instanceof Uint8Array) return e;
                if ("string" == typeof e) {
                    if (p(e)) {
                        var t;
                        return u((t = "string" != typeof e ? e : p(e) ? e.slice(2) : e).length % 2 ? `0${t}` : t)
                    }
                    return c(e)
                }
                if ("number" == typeof e || "bigint" == typeof e) return e ? u(d(e)) : Uint8Array.from([]);
                if (null == e) return Uint8Array.from([]);
                throw Error("toBytes: received unsupported type " + typeof e)
            }
            t.utils = {
                bytesToHex: f,
                concatBytes: h,
                hexToBytes: u,
                utf8ToBytes: c
            }, t.RLP = {
                encode: r,
                decode: a
            }
        },
        64976: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DER = void 0, t.weierstrassPoints = p, t.weierstrass = function(e) {
                let r = function(e) {
                        let t = (0, n.validateBasic)(e);
                        return o.validateObject(t, {
                            hash: "hash",
                            hmac: "function",
                            randomBytes: "function"
                        }, {
                            bits2int: "function",
                            bits2int_modN: "function",
                            lowS: "boolean"
                        }), Object.freeze({
                            lowS: !0,
                            ...t
                        })
                    }(e),
                    {
                        Fp: s,
                        n: f
                    } = r,
                    h = s.BYTES + 1,
                    c = 2 * s.BYTES + 1;

                function d(e) {
                    return i.mod(e, f)
                }

                function y(e) {
                    return i.invert(e, f)
                }
                let {
                    ProjectivePoint: g,
                    normPrivateKeyToScalar: b,
                    weierstrassEquation: m,
                    isWithinCurveOrder: w
                } = p({ ...r,
                    toBytes(e, t, r) {
                        let n = t.toAffine(),
                            i = s.toBytes(n.x),
                            a = o.concatBytes;
                        return r ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i) : a(Uint8Array.from([4]), i, s.toBytes(n.y))
                    },
                    fromBytes(e) {
                        let t = e.length,
                            r = e[0],
                            n = e.subarray(1);
                        if (t === h && (2 === r || 3 === r)) {
                            let e;
                            let t = o.bytesToNumberBE(n);
                            if (!(l < t && t < s.ORDER)) throw Error("Point is not on curve");
                            let i = m(t);
                            try {
                                e = s.sqrt(i)
                            } catch (e) {
                                throw Error("Point is not on curve" + (e instanceof Error ? ": " + e.message : ""))
                            }
                            return (1 & r) == 1 != ((e & u) === u) && (e = s.neg(e)), {
                                x: t,
                                y: e
                            }
                        }
                        if (t === c && 4 === r) return {
                            x: s.fromBytes(n.subarray(0, s.BYTES)),
                            y: s.fromBytes(n.subarray(s.BYTES, 2 * s.BYTES))
                        };
                        throw Error(`Point of length ${t} was invalid. Expected ${h} compressed bytes or ${c} uncompressed bytes`)
                    }
                }), v = e => o.bytesToHex(o.numberToBytesBE(e, r.nByteLength)), _ = (e, t, r) => o.bytesToNumberBE(e.slice(t, r));
                class x {
                    constructor(e, t, r) {
                        this.r = e, this.s = t, this.recovery = r, this.assertValidity()
                    }
                    static fromCompact(e) {
                        let t = r.nByteLength;
                        return new x(_(e = (0, a.ensureBytes)("compactSignature", e, 2 * t), 0, t), _(e, t, 2 * t))
                    }
                    static fromDER(e) {
                        let {
                            r,
                            s: n
                        } = t.DER.toSig((0, a.ensureBytes)("DER", e));
                        return new x(r, n)
                    }
                    assertValidity() {
                        if (!w(this.r)) throw Error("r must be 0 < r < CURVE.n");
                        if (!w(this.s)) throw Error("s must be 0 < s < CURVE.n")
                    }
                    addRecoveryBit(e) {
                        return new x(this.r, this.s, e)
                    }
                    recoverPublicKey(e) {
                        let {
                            r: t,
                            s: n,
                            recovery: i
                        } = this, o = A((0, a.ensureBytes)("msgHash", e));
                        if (null == i || ![0, 1, 2, 3].includes(i)) throw Error("recovery id invalid");
                        let f = 2 === i || 3 === i ? t + r.n : t;
                        if (f >= s.ORDER) throw Error("recovery id 2 or 3 invalid");
                        let l = (1 & i) == 0 ? "02" : "03",
                            u = g.fromHex(l + v(f)),
                            h = y(f),
                            c = d(-o * h),
                            p = d(n * h),
                            b = g.BASE.multiplyAndAddUnsafe(u, c, p);
                        if (!b) throw Error("point at infinify");
                        return b.assertValidity(), b
                    }
                    hasHighS() {
                        return this.s > f >> u
                    }
                    normalizeS() {
                        return this.hasHighS() ? new x(this.r, d(-this.s), this.recovery) : this
                    }
                    toDERRawBytes() {
                        return o.hexToBytes(this.toDERHex())
                    }
                    toDERHex() {
                        return t.DER.hexFromSig({
                            r: this.r,
                            s: this.s
                        })
                    }
                    toCompactRawBytes() {
                        return o.hexToBytes(this.toCompactHex())
                    }
                    toCompactHex() {
                        return v(this.r) + v(this.s)
                    }
                }

                function E(e) {
                    let t = o.isBytes(e),
                        r = "string" == typeof e,
                        n = (t || r) && e.length;
                    return t ? n === h || n === c : r ? n === 2 * h || n === 2 * c : e instanceof g
                }
                let S = r.bits2int || function(e) {
                        let t = o.bytesToNumberBE(e),
                            n = 8 * e.length - r.nBitLength;
                        return n > 0 ? t >> BigInt(n) : t
                    },
                    A = r.bits2int_modN || function(e) {
                        return d(S(e))
                    },
                    k = o.bitMask(r.nBitLength);

                function B(e) {
                    if ("bigint" != typeof e) throw Error("bigint expected");
                    if (!(l <= e && e < k)) throw Error(`bigint expected < 2^${r.nBitLength}`);
                    return o.numberToBytesBE(e, r.nByteLength)
                }
                let O = {
                        lowS: r.lowS,
                        prehash: !1
                    },
                    I = {
                        lowS: r.lowS,
                        prehash: !1
                    };
                return g.BASE._setWindowSize(8), {
                    CURVE: r,
                    getPublicKey: function(e, t = !0) {
                        return g.fromPrivateKey(e).toRawBytes(t)
                    },
                    getSharedSecret: function(e, t, r = !0) {
                        if (E(e)) throw Error("first arg must be private key");
                        if (!E(t)) throw Error("second arg must be public key");
                        return g.fromHex(t).multiply(b(e)).toRawBytes(r)
                    },
                    sign: function(e, t, n = O) {
                        let {
                            seed: i,
                            k2sig: h
                        } = function(e, t, n = O) {
                            if (["recovered", "canonical"].some(e => e in n)) throw Error("sign() legacy options not supported");
                            let {
                                hash: i,
                                randomBytes: h
                            } = r, {
                                lowS: c,
                                prehash: p,
                                extraEntropy: m
                            } = n;
                            null == c && (c = !0), e = (0, a.ensureBytes)("msgHash", e), p && (e = (0, a.ensureBytes)("prehashed msgHash", i(e)));
                            let v = A(e),
                                _ = b(t),
                                E = [B(_), B(v)];
                            if (null != m && !1 !== m) {
                                let e = !0 === m ? h(s.BYTES) : m;
                                E.push((0, a.ensureBytes)("extraEntropy", e))
                            }
                            return {
                                seed: o.concatBytes(...E),
                                k2sig: function(e) {
                                    let t = S(e);
                                    if (!w(t)) return;
                                    let r = y(t),
                                        n = g.BASE.multiply(t).toAffine(),
                                        i = d(n.x);
                                    if (i === l) return;
                                    let o = d(r * d(v + i * _));
                                    if (o === l) return;
                                    let a = 2 * (n.x !== i) | Number(n.y & u),
                                        s = o;
                                    if (c && o > f >> u) {
                                        var h;
                                        s = (h = o) > f >> u ? d(-h) : h, a ^= 1
                                    }
                                    return new x(i, s, a)
                                }
                            }
                        }(e, t, n);
                        return o.createHmacDrbg(r.hash.outputLen, r.nByteLength, r.hmac)(i, h)
                    },
                    verify: function(e, n, i, s = I) {
                        let f, l;
                        if (n = (0, a.ensureBytes)("msgHash", n), i = (0, a.ensureBytes)("publicKey", i), "strict" in s) throw Error("options.strict was renamed to lowS");
                        let {
                            lowS: u,
                            prehash: h
                        } = s;
                        try {
                            if ("string" == typeof e || o.isBytes(e)) try {
                                l = x.fromDER(e)
                            } catch (r) {
                                if (!(r instanceof t.DER.Err)) throw r;
                                l = x.fromCompact(e)
                            } else if ("object" == typeof e && "bigint" == typeof e.r && "bigint" == typeof e.s) {
                                let {
                                    r: t,
                                    s: r
                                } = e;
                                l = new x(t, r)
                            } else throw Error("PARSE");
                            f = g.fromHex(i)
                        } catch (e) {
                            if ("PARSE" === e.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                            return !1
                        }
                        if (u && l.hasHighS()) return !1;
                        h && (n = r.hash(n));
                        let {
                            r: c,
                            s: p
                        } = l, b = A(n), m = y(p), w = d(b * m), v = d(c * m), _ = g.BASE.multiplyAndAddUnsafe(f, w, v) ? .toAffine();
                        return !!_ && d(_.x) === c
                    },
                    ProjectivePoint: g,
                    Signature: x,
                    utils: {
                        isValidPrivateKey(e) {
                            try {
                                return b(e), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        normPrivateKeyToScalar: b,
                        randomPrivateKey: () => {
                            let e = i.getMinHashLength(r.n);
                            return i.mapHashToField(r.randomBytes(e), r.n)
                        },
                        precompute: (e = 8, t = g.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                    }
                }
            }, t.SWUFpSqrtRatio = y, t.mapToCurveSimpleSWU = function(e, t) {
                if (i.validateField(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)) throw Error("mapToCurveSimpleSWU: invalid opts");
                let r = y(e, t.Z);
                if (!e.isOdd) throw Error("Fp.isOdd is not implemented!");
                return n => {
                    let i, o, a, s, f, l, u, h;
                    i = e.sqr(n), i = e.mul(i, t.Z), o = e.sqr(i), o = e.add(o, i), a = e.add(o, e.ONE), a = e.mul(a, t.B), s = e.cmov(t.Z, e.neg(o), !e.eql(o, e.ZERO)), s = e.mul(s, t.A), o = e.sqr(a), l = e.sqr(s), f = e.mul(l, t.A), o = e.add(o, f), o = e.mul(o, a), l = e.mul(l, s), f = e.mul(l, t.B), o = e.add(o, f), u = e.mul(i, a);
                    let {
                        isValid: c,
                        value: d
                    } = r(o, l);
                    h = e.mul(i, n), h = e.mul(h, d), u = e.cmov(u, a, c), h = e.cmov(h, d, c);
                    let p = e.isOdd(n) === e.isOdd(h);
                    return h = e.cmov(e.neg(h), h, p), {
                        x: u = e.div(u, s),
                        y: h
                    }
                }
            };
            let n = r(10519),
                i = r(24738),
                o = r(57953),
                a = r(57953),
                {
                    bytesToNumberBE: s,
                    hexToBytes: f
                } = o;
            t.DER = {
                Err: class extends Error {
                    constructor(e = "") {
                        super(e)
                    }
                },
                _parseInt(e) {
                    let {
                        Err: r
                    } = t.DER;
                    if (e.length < 2 || 2 !== e[0]) throw new r("Invalid signature integer tag");
                    let n = e[1],
                        i = e.subarray(2, n + 2);
                    if (!n || i.length !== n) throw new r("Invalid signature integer: wrong length");
                    if (128 & i[0]) throw new r("Invalid signature integer: negative");
                    if (0 === i[0] && !(128 & i[1])) throw new r("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: s(i),
                        l: e.subarray(n + 2)
                    }
                },
                toSig(e) {
                    let {
                        Err: r
                    } = t.DER, n = "string" == typeof e ? f(e) : e;
                    o.abytes(n);
                    let i = n.length;
                    if (i < 2 || 48 != n[0]) throw new r("Invalid signature tag");
                    if (n[1] !== i - 2) throw new r("Invalid signature: incorrect length");
                    let {
                        d: a,
                        l: s
                    } = t.DER._parseInt(n.subarray(2)), {
                        d: l,
                        l: u
                    } = t.DER._parseInt(s);
                    if (u.length) throw new r("Invalid signature: left bytes after parsing");
                    return {
                        r: a,
                        s: l
                    }
                },
                hexFromSig(e) {
                    let t = e => 8 & Number.parseInt(e[0], 16) ? "00" + e : e,
                        r = e => {
                            let t = e.toString(16);
                            return 1 & t.length ? `0${t}` : t
                        },
                        n = t(r(e.s)),
                        i = t(r(e.r)),
                        o = n.length / 2,
                        a = i.length / 2,
                        s = r(o),
                        f = r(a);
                    return `30${r(a+o+4)}02${f}${i}02${s}${n}`
                }
            };
            let l = BigInt(0),
                u = BigInt(1),
                h = BigInt(2),
                c = BigInt(3),
                d = BigInt(4);

            function p(e) {
                let t = function(e) {
                        let t = (0, n.validateBasic)(e);
                        o.validateObject(t, {
                            a: "field",
                            b: "field"
                        }, {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function"
                        });
                        let {
                            endo: r,
                            Fp: i,
                            a
                        } = t;
                        if (r) {
                            if (!i.eql(a, i.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                            if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                        }
                        return Object.freeze({ ...t
                        })
                    }(e),
                    {
                        Fp: r
                    } = t,
                    s = t.toBytes || ((e, t, n) => {
                        let i = t.toAffine();
                        return o.concatBytes(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                    }),
                    f = t.fromBytes || (e => {
                        let t = e.subarray(1);
                        return {
                            x: r.fromBytes(t.subarray(0, r.BYTES)),
                            y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES))
                        }
                    });

                function h(e) {
                    let {
                        a: n,
                        b: i
                    } = t, o = r.sqr(e), a = r.mul(o, e);
                    return r.add(r.add(a, r.mul(e, n)), i)
                }
                if (!r.eql(r.sqr(t.Gy), h(t.Gx))) throw Error("bad generator point: equation left != right");

                function d(e) {
                    return "bigint" == typeof e && l < e && e < t.n
                }

                function p(e) {
                    if (!d(e)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                }

                function y(e) {
                    let r;
                    let {
                        allowedPrivateKeyLengths: n,
                        nByteLength: s,
                        wrapPrivateKey: f,
                        n: l
                    } = t;
                    if (n && "bigint" != typeof e) {
                        if (o.isBytes(e) && (e = o.bytesToHex(e)), "string" != typeof e || !n.includes(e.length)) throw Error("Invalid key");
                        e = e.padStart(2 * s, "0")
                    }
                    try {
                        r = "bigint" == typeof e ? e : o.bytesToNumberBE((0, a.ensureBytes)("private key", e, s))
                    } catch (t) {
                        throw Error(`private key must be ${s} bytes, hex or bigint, not ${typeof e}`)
                    }
                    return f && (r = i.mod(r, l)), p(r), r
                }
                let g = new Map;

                function b(e) {
                    if (!(e instanceof m)) throw Error("ProjectivePoint expected")
                }
                class m {
                    constructor(e, t, n) {
                        if (this.px = e, this.py = t, this.pz = n, null == e || !r.isValid(e)) throw Error("x required");
                        if (null == t || !r.isValid(t)) throw Error("y required");
                        if (null == n || !r.isValid(n)) throw Error("z required")
                    }
                    static fromAffine(e) {
                        let {
                            x: t,
                            y: n
                        } = e || {};
                        if (!e || !r.isValid(t) || !r.isValid(n)) throw Error("invalid affine point");
                        if (e instanceof m) throw Error("projective point not allowed");
                        let i = e => r.eql(e, r.ZERO);
                        return i(t) && i(n) ? m.ZERO : new m(t, n, r.ONE)
                    }
                    get x() {
                        return this.toAffine().x
                    }
                    get y() {
                        return this.toAffine().y
                    }
                    static normalizeZ(e) {
                        let t = r.invertBatch(e.map(e => e.pz));
                        return e.map((e, r) => e.toAffine(t[r])).map(m.fromAffine)
                    }
                    static fromHex(e) {
                        let t = m.fromAffine(f((0, a.ensureBytes)("pointHex", e)));
                        return t.assertValidity(), t
                    }
                    static fromPrivateKey(e) {
                        return m.BASE.multiply(y(e))
                    }
                    _setWindowSize(e) {
                        this._WINDOW_SIZE = e, g.delete(this)
                    }
                    assertValidity() {
                        if (this.is0()) {
                            if (t.allowInfinityPoint && !r.is0(this.py)) return;
                            throw Error("bad point: ZERO")
                        }
                        let {
                            x: e,
                            y: n
                        } = this.toAffine();
                        if (!r.isValid(e) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                        let i = r.sqr(n),
                            o = h(e);
                        if (!r.eql(i, o)) throw Error("bad point: equation left != right");
                        if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                    }
                    hasEvenY() {
                        let {
                            y: e
                        } = this.toAffine();
                        if (r.isOdd) return !r.isOdd(e);
                        throw Error("Field doesn't support isOdd")
                    }
                    equals(e) {
                        b(e);
                        let {
                            px: t,
                            py: n,
                            pz: i
                        } = this, {
                            px: o,
                            py: a,
                            pz: s
                        } = e, f = r.eql(r.mul(t, s), r.mul(o, i)), l = r.eql(r.mul(n, s), r.mul(a, i));
                        return f && l
                    }
                    negate() {
                        return new m(this.px, r.neg(this.py), this.pz)
                    }
                    double() {
                        let {
                            a: e,
                            b: n
                        } = t, i = r.mul(n, c), {
                            px: o,
                            py: a,
                            pz: s
                        } = this, f = r.ZERO, l = r.ZERO, u = r.ZERO, h = r.mul(o, o), d = r.mul(a, a), p = r.mul(s, s), y = r.mul(o, a);
                        return y = r.add(y, y), u = r.mul(o, s), u = r.add(u, u), f = r.mul(e, u), l = r.mul(i, p), l = r.add(f, l), f = r.sub(d, l), l = r.add(d, l), l = r.mul(f, l), f = r.mul(y, f), u = r.mul(i, u), p = r.mul(e, p), y = r.sub(h, p), y = r.mul(e, y), y = r.add(y, u), u = r.add(h, h), h = r.add(u, h), h = r.add(h, p), h = r.mul(h, y), l = r.add(l, h), p = r.mul(a, s), p = r.add(p, p), h = r.mul(p, y), f = r.sub(f, h), u = r.mul(p, d), u = r.add(u, u), new m(f, l, u = r.add(u, u))
                    }
                    add(e) {
                        b(e);
                        let {
                            px: n,
                            py: i,
                            pz: o
                        } = this, {
                            px: a,
                            py: s,
                            pz: f
                        } = e, l = r.ZERO, u = r.ZERO, h = r.ZERO, d = t.a, p = r.mul(t.b, c), y = r.mul(n, a), g = r.mul(i, s), w = r.mul(o, f), v = r.add(n, i), _ = r.add(a, s);
                        v = r.mul(v, _), _ = r.add(y, g), v = r.sub(v, _), _ = r.add(n, o);
                        let x = r.add(a, f);
                        return _ = r.mul(_, x), x = r.add(y, w), _ = r.sub(_, x), x = r.add(i, o), l = r.add(s, f), x = r.mul(x, l), l = r.add(g, w), x = r.sub(x, l), h = r.mul(d, _), l = r.mul(p, w), h = r.add(l, h), l = r.sub(g, h), h = r.add(g, h), u = r.mul(l, h), g = r.add(y, y), g = r.add(g, y), w = r.mul(d, w), _ = r.mul(p, _), g = r.add(g, w), w = r.sub(y, w), w = r.mul(d, w), _ = r.add(_, w), y = r.mul(g, _), u = r.add(u, y), y = r.mul(x, _), l = r.mul(v, l), l = r.sub(l, y), y = r.mul(v, g), h = r.mul(x, h), new m(l, u, h = r.add(h, y))
                    }
                    subtract(e) {
                        return this.add(e.negate())
                    }
                    is0() {
                        return this.equals(m.ZERO)
                    }
                    wNAF(e) {
                        return v.wNAFCached(this, g, e, e => {
                            let t = r.invertBatch(e.map(e => e.pz));
                            return e.map((e, r) => e.toAffine(t[r])).map(m.fromAffine)
                        })
                    }
                    multiplyUnsafe(e) {
                        let n = m.ZERO;
                        if (e === l) return n;
                        if (p(e), e === u) return this;
                        let {
                            endo: i
                        } = t;
                        if (!i) return v.unsafeLadder(this, e);
                        let {
                            k1neg: o,
                            k1: a,
                            k2neg: s,
                            k2: f
                        } = i.splitScalar(e), h = n, c = n, d = this;
                        for (; a > l || f > l;) a & u && (h = h.add(d)), f & u && (c = c.add(d)), d = d.double(), a >>= u, f >>= u;
                        return o && (h = h.negate()), s && (c = c.negate()), c = new m(r.mul(c.px, i.beta), c.py, c.pz), h.add(c)
                    }
                    multiply(e) {
                        let n, i;
                        p(e);
                        let {
                            endo: o
                        } = t;
                        if (o) {
                            let {
                                k1neg: t,
                                k1: a,
                                k2neg: s,
                                k2: f
                            } = o.splitScalar(e), {
                                p: l,
                                f: u
                            } = this.wNAF(a), {
                                p: h,
                                f: c
                            } = this.wNAF(f);
                            l = v.constTimeNegate(t, l), h = v.constTimeNegate(s, h), h = new m(r.mul(h.px, o.beta), h.py, h.pz), n = l.add(h), i = u.add(c)
                        } else {
                            let {
                                p: t,
                                f: r
                            } = this.wNAF(e);
                            n = t, i = r
                        }
                        return m.normalizeZ([n, i])[0]
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                        let n = m.BASE,
                            i = (e, t) => t !== l && t !== u && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t),
                            o = i(this, t).add(i(e, r));
                        return o.is0() ? void 0 : o
                    }
                    toAffine(e) {
                        let {
                            px: t,
                            py: n,
                            pz: i
                        } = this, o = this.is0();
                        null == e && (e = o ? r.ONE : r.inv(i));
                        let a = r.mul(t, e),
                            s = r.mul(n, e),
                            f = r.mul(i, e);
                        if (o) return {
                            x: r.ZERO,
                            y: r.ZERO
                        };
                        if (!r.eql(f, r.ONE)) throw Error("invZ was invalid");
                        return {
                            x: a,
                            y: s
                        }
                    }
                    isTorsionFree() {
                        let {
                            h: e,
                            isTorsionFree: r
                        } = t;
                        if (e === u) return !0;
                        if (r) return r(m, this);
                        throw Error("isTorsionFree() has not been declared for the elliptic curve")
                    }
                    clearCofactor() {
                        let {
                            h: e,
                            clearCofactor: r
                        } = t;
                        return e === u ? this : r ? r(m, this) : this.multiplyUnsafe(t.h)
                    }
                    toRawBytes(e = !0) {
                        return this.assertValidity(), s(m, this, e)
                    }
                    toHex(e = !0) {
                        return o.bytesToHex(this.toRawBytes(e))
                    }
                }
                m.BASE = new m(t.Gx, t.Gy, r.ONE), m.ZERO = new m(r.ZERO, r.ONE, r.ZERO);
                let w = t.nBitLength,
                    v = (0, n.wNAF)(m, t.endo ? Math.ceil(w / 2) : w);
                return {
                    CURVE: t,
                    ProjectivePoint: m,
                    normPrivateKeyToScalar: y,
                    weierstrassEquation: h,
                    isWithinCurveOrder: d
                }
            }

            function y(e, t) {
                let r = e.ORDER,
                    n = l;
                for (let e = r - u; e % h === l; e /= h) n += u;
                let i = n,
                    o = h << i - u - u,
                    a = o * h,
                    s = (r - u) / a,
                    f = (s - u) / h,
                    p = a - u,
                    y = e.pow(t, s),
                    g = e.pow(t, (s + u) / h),
                    b = (t, r) => {
                        let n = y,
                            a = e.pow(r, p),
                            s = e.sqr(a);
                        s = e.mul(s, r);
                        let l = e.mul(t, s);
                        l = e.pow(l, f), l = e.mul(l, a), a = e.mul(l, r), s = e.mul(l, t);
                        let c = e.mul(s, a);
                        l = e.pow(c, o);
                        let d = e.eql(l, e.ONE);
                        a = e.mul(s, g), l = e.mul(c, n), s = e.cmov(a, s, d), c = e.cmov(l, c, d);
                        for (let t = i; t > u; t--) {
                            let r = t - h;
                            r = h << r - u;
                            let i = e.pow(c, r),
                                o = e.eql(i, e.ONE);
                            a = e.mul(s, n), n = e.mul(n, n), i = e.mul(c, n), s = e.cmov(a, s, o), c = e.cmov(i, c, o)
                        }
                        return {
                            isValid: d,
                            value: s
                        }
                    };
                if (e.ORDER % d === c) {
                    let r = (e.ORDER - c) / d,
                        n = e.sqrt(e.neg(t));
                    b = (t, i) => {
                        let o = e.sqr(i),
                            a = e.mul(t, i);
                        o = e.mul(o, a);
                        let s = e.pow(o, r);
                        s = e.mul(s, a);
                        let f = e.mul(s, n),
                            l = e.mul(e.sqr(s), i),
                            u = e.eql(l, t),
                            h = e.cmov(f, s, u);
                        return {
                            isValid: u,
                            value: h
                        }
                    }
                }
                return b
            }
        },
        66020: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AsyncEventEmitter = void 0;
            let n = r(35978);
            async function i(e, t, r) {
                let n;
                for await (let i of t) try {
                    i.length < 2 ? i.call(e, r) : await new Promise((t, n) => {
                        i.call(e, r, e => {
                            e ? n(e) : t()
                        })
                    })
                } catch (e) {
                    n = e
                }
                if (n) throw n
            }
            class o extends n.EventEmitter {
                emit(e, ...t) {
                    let [r, n] = t, o = this._events[e] ? ? [];
                    return void 0 === n && "function" == typeof r && (n = r, r = void 0), ("newListener" === e || "removeListener" === e) && (r = {
                        event: r,
                        fn: n
                    }, n = void 0), i(this, (o = Array.isArray(o) ? o : [o]).slice(), r).then(n).catch(n), this.listenerCount(e) > 0
                }
                once(e, t) {
                    let r;
                    let n = this;
                    if ("function" != typeof t) throw TypeError("listener must be a function");
                    return r = t.length >= 2 ? function(i, o) {
                        n.removeListener(e, r), t(i, o)
                    } : function(i) {
                        n.removeListener(e, r), t(i, r)
                    }, n.on(e, r), n
                }
                first(e, t) {
                    let r = this._events[e] ? ? [];
                    if ("function" != typeof t) throw TypeError("listener must be a function");
                    return Array.isArray(r) || (this._events[e] = r = [r]), r.unshift(t), this
                }
                before(e, t, r) {
                    return this.beforeOrAfter(e, t, r)
                }
                after(e, t, r) {
                    return this.beforeOrAfter(e, t, r, "after")
                }
                beforeOrAfter(e, t, r, n) {
                    let i, o, a = this._events[e] ? ? [],
                        s = +("after" === n);
                    if ("function" != typeof r) throw TypeError("listener must be a function");
                    if ("function" != typeof t) throw TypeError("target must be a function");
                    for (Array.isArray(a) || (this._events[e] = a = [a]), o = a.length, i = a.length; i--;)
                        if (a[i] === t) {
                            o = i + s;
                            break
                        }
                    return a.splice(o, 0, r), this
                }
                on(e, t) {
                    return super.on(e, t)
                }
                addListener(e, t) {
                    return super.addListener(e, t)
                }
                prependListener(e, t) {
                    return super.prependListener(e, t)
                }
                prependOnceListener(e, t) {
                    return super.prependOnceListener(e, t)
                }
                removeAllListeners(e) {
                    return super.removeAllListeners(e)
                }
                removeListener(e, t) {
                    return super.removeListener(e, t)
                }
                eventNames() {
                    return super.eventNames()
                }
                listeners(e) {
                    return super.listeners(e)
                }
                listenerCount(e) {
                    return super.listenerCount(e)
                }
                getMaxListeners() {
                    return super.getMaxListeners()
                }
                setMaxListeners(e) {
                    return super.setMaxListeners(e)
                }
            }
            t.AsyncEventEmitter = o
        },
        67551: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer,
                i = r(16953),
                o = r(91408);

            function a(e) {
                var t = e;
                if ("string" != typeof t) throw Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
                return t.length % 2 && (t = "0" + t), t
            }

            function s(e) {
                return "0x" + e.toString(16)
            }
            e.exports = {
                arrayContainsArray: function(e, t, r) {
                    if (!0 !== Array.isArray(e)) throw Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
                    if (!0 !== Array.isArray(t)) throw Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
                    return t[!!r && "some" || "every"](function(t) {
                        return e.indexOf(t) >= 0
                    })
                },
                intToBuffer: function(e) {
                    return new n(a(s(e).slice(2)), "hex")
                },
                getBinarySize: function(e) {
                    if ("string" != typeof e) throw Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return n.byteLength(e, "utf8")
                },
                isHexPrefixed: i,
                stripHexPrefix: o,
                padToEven: a,
                intToHex: s,
                fromAscii: function(e) {
                    for (var t = "", r = 0; r < e.length; r++) {
                        var n = e.charCodeAt(r).toString(16);
                        t += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + t
                },
                fromUtf8: function(e) {
                    return "0x" + a(new n(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(e) {
                    var t = "",
                        r = 0,
                        n = e.length;
                    for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
                    return t
                },
                toUtf8: function(e) {
                    return new n(a(o(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function(e, t, r) {
                    if (!Array.isArray(e)) throw Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
                    if ("string" != typeof t) throw Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i][t];
                        if (r && !o) o = "";
                        else if ("string" != typeof o) throw Error("invalid abi");
                        n.push(o)
                    }
                    return n
                },
                isHexString: function(e, t) {
                    return "string" == typeof e && !!e.match(/^0x[0-9A-Fa-f]*$/) && (!t || e.length === 2 + 2 * t)
                }
            }
        },
        67988: e => {
            "use strict";
            e.exports = function() {
                return Object.assign
            }
        },
        68599: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProvider = t.fetchFromProvider = void 0;
            let n = r(6226);
            t.fetchFromProvider = async (e, t) => (await (0, n.default)(e, {
                headers: {
                    "content-type": "application/json"
                },
                type: "json",
                data: {
                    method: t.method,
                    params: t.params,
                    jsonrpc: "2.0",
                    id: 1
                }
            })).result, t.getProvider = e => {
                if ("string" == typeof e) return e;
                if (e ? .connection ? .url !== void 0) return e.connection.url;
                throw Error("Must provide valid provider URL or Web3Provider")
            }
        },
        69855: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.add5L = t.add5H = t.add4H = t.add4L = t.add3H = t.add3L = t.add = t.rotlBL = t.rotlBH = t.rotlSL = t.rotlSH = t.rotr32L = t.rotr32H = t.rotrBL = t.rotrBH = t.rotrSL = t.rotrSH = t.shrSL = t.shrSH = t.toBig = t.split = t.fromBig = void 0;
            let r = BigInt(0x100000000 - 1),
                n = BigInt(32);

            function i(e, t = !1) {
                return t ? {
                    h: Number(e & r),
                    l: Number(e >> n & r)
                } : {
                    h: 0 | Number(e >> n & r),
                    l: 0 | Number(e & r)
                }
            }

            function o(e, t = !1) {
                let r = new Uint32Array(e.length),
                    n = new Uint32Array(e.length);
                for (let o = 0; o < e.length; o++) {
                    let {
                        h: a,
                        l: s
                    } = i(e[o], t);
                    [r[o], n[o]] = [a, s]
                }
                return [r, n]
            }
            t.fromBig = i, t.split = o;
            let a = (e, t) => BigInt(e >>> 0) << n | BigInt(t >>> 0);
            t.toBig = a;
            let s = (e, t, r) => e >>> r;
            t.shrSH = s;
            let f = (e, t, r) => e << 32 - r | t >>> r;
            t.shrSL = f;
            let l = (e, t, r) => e >>> r | t << 32 - r;
            t.rotrSH = l;
            let u = (e, t, r) => e << 32 - r | t >>> r;
            t.rotrSL = u;
            let h = (e, t, r) => e << 64 - r | t >>> r - 32;
            t.rotrBH = h;
            let c = (e, t, r) => e >>> r - 32 | t << 64 - r;
            t.rotrBL = c;
            let d = (e, t) => t;
            t.rotr32H = d;
            let p = (e, t) => e;
            t.rotr32L = p;
            let y = (e, t, r) => e << r | t >>> 32 - r;
            t.rotlSH = y;
            let g = (e, t, r) => t << r | e >>> 32 - r;
            t.rotlSL = g;
            let b = (e, t, r) => t << r - 32 | e >>> 64 - r;
            t.rotlBH = b;
            let m = (e, t, r) => e << r - 32 | t >>> 64 - r;

            function w(e, t, r, n) {
                let i = (t >>> 0) + (n >>> 0);
                return {
                    h: e + r + (i / 0x100000000 | 0) | 0,
                    l: 0 | i
                }
            }
            t.rotlBL = m, t.add = w;
            let v = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
            t.add3L = v;
            let _ = (e, t, r, n) => t + r + n + (e / 0x100000000 | 0) | 0;
            t.add3H = _;
            let x = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
            t.add4L = x;
            let E = (e, t, r, n, i) => t + r + n + i + (e / 0x100000000 | 0) | 0;
            t.add4H = E;
            let S = (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
            t.add5L = S;
            let A = (e, t, r, n, i, o) => t + r + n + i + o + (e / 0x100000000 | 0) | 0;
            t.add5H = A, t.default = {
                fromBig: i,
                split: o,
                toBig: a,
                shrSH: s,
                shrSL: f,
                rotrSH: l,
                rotrSL: u,
                rotrBH: h,
                rotrBL: c,
                rotr32H: d,
                rotr32L: p,
                rotlSH: y,
                rotlSL: g,
                rotlBH: b,
                rotlBL: m,
                add: w,
                add3L: v,
                add3H: _,
                add4L: x,
                add4H: E,
                add5H: A,
                add5L: S
            }
        },
        70441: (e, t, r) => {
            "use strict";
            var n, i, o = r(29143);

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var s = r(57180).codes,
                f = s.ERR_AMBIGUOUS_ARGUMENT,
                l = s.ERR_INVALID_ARG_TYPE,
                u = s.ERR_INVALID_ARG_VALUE,
                h = s.ERR_INVALID_RETURN_VALUE,
                c = s.ERR_MISSING_ARGS,
                d = r(52751),
                p = r(84864).inspect,
                y = r(84864).types,
                g = y.isPromise,
                b = y.isRegExp,
                m = r(67988)(),
                w = r(48203)(),
                v = r(45854)("RegExp.prototype.test");

            function _() {
                var e = r(37950);
                n = e.isDeepEqual, i = e.isDeepStrictEqual
            }
            var x = !1,
                E = e.exports = B,
                S = {};

            function A(e) {
                if (e.message instanceof Error) throw e.message;
                throw new d(e)
            }

            function k(e, t, r, n) {
                if (!r) {
                    var i = !1;
                    if (0 === t) i = !0, n = "No value argument passed to `assert.ok()`";
                    else if (n instanceof Error) throw n;
                    var o = new d({
                        actual: r,
                        expected: !0,
                        message: n,
                        operator: "==",
                        stackStartFn: e
                    });
                    throw o.generatedMessage = i, o
                }
            }

            function B() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                k.apply(void 0, [B, t.length].concat(t))
            }
            E.fail = function e(t, r, n, i, a) {
                var s, f = arguments.length;
                if (0 === f ? s = "Failed" : 1 === f ? (n = t, t = void 0) : (!1 === x && (x = !0, (o.emitWarning ? o.emitWarning : console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")), 2 === f && (i = "!=")), n instanceof Error) throw n;
                var l = {
                    actual: t,
                    expected: r,
                    operator: void 0 === i ? "fail" : i,
                    stackStartFn: a || e
                };
                void 0 !== n && (l.message = n);
                var u = new d(l);
                throw s && (u.message = s, u.generatedMessage = !0), u
            }, E.AssertionError = d, E.ok = B, E.equal = function e(t, r, n) {
                if (arguments.length < 2) throw new c("actual", "expected");
                t != r && A({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "==",
                    stackStartFn: e
                })
            }, E.notEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new c("actual", "expected");
                t == r && A({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "!=",
                    stackStartFn: e
                })
            }, E.deepEqual = function e(t, r, i) {
                if (arguments.length < 2) throw new c("actual", "expected");
                void 0 === n && _(), n(t, r) || A({
                    actual: t,
                    expected: r,
                    message: i,
                    operator: "deepEqual",
                    stackStartFn: e
                })
            }, E.notDeepEqual = function e(t, r, i) {
                if (arguments.length < 2) throw new c("actual", "expected");
                void 0 === n && _(), n(t, r) && A({
                    actual: t,
                    expected: r,
                    message: i,
                    operator: "notDeepEqual",
                    stackStartFn: e
                })
            }, E.deepStrictEqual = function e(t, r, o) {
                if (arguments.length < 2) throw new c("actual", "expected");
                void 0 === n && _(), i(t, r) || A({
                    actual: t,
                    expected: r,
                    message: o,
                    operator: "deepStrictEqual",
                    stackStartFn: e
                })
            }, E.notDeepStrictEqual = function e(t, r, o) {
                if (arguments.length < 2) throw new c("actual", "expected");
                void 0 === n && _(), i(t, r) && A({
                    actual: t,
                    expected: r,
                    message: o,
                    operator: "notDeepStrictEqual",
                    stackStartFn: e
                })
            }, E.strictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new c("actual", "expected");
                w(t, r) || A({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "strictEqual",
                    stackStartFn: e
                })
            }, E.notStrictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new c("actual", "expected");
                w(t, r) && A({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "notStrictEqual",
                    stackStartFn: e
                })
            };
            var O = function(e, t, r) {
                return Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(function e(t, r, n) {
                var i = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, e), r.forEach(function(e) {
                    e in t && (void 0 !== n && "string" == typeof n[e] && b(t[e]) && v(t[e], n[e]) ? i[e] = n[e] : i[e] = t[e])
                })
            });

            function I(e, t, r, o) {
                if ("function" != typeof t) {
                    if (b(t)) return v(t, e);
                    if (2 == arguments.length) throw new l("expected", ["Function", "RegExp"], t);
                    if ("object" !== a(e) || null === e) {
                        var s = new d({
                            actual: e,
                            expected: t,
                            message: r,
                            operator: "deepStrictEqual",
                            stackStartFn: o
                        });
                        throw s.operator = o.name, s
                    }
                    var f = Object.keys(t);
                    if (t instanceof Error) f.push("name", "message");
                    else if (0 === f.length) throw new u("error", t, "may not be an empty object");
                    return void 0 === n && _(), f.forEach(function(n) {
                        !("string" == typeof e[n] && b(t[n]) && v(t[n], e[n])) && ! function(e, t, r, n, o, a) {
                            if (!(r in e) || !i(e[r], t[r])) {
                                if (!n) {
                                    var s = new d({
                                        actual: new O(e, o),
                                        expected: new O(t, o, e),
                                        operator: "deepStrictEqual",
                                        stackStartFn: a
                                    });
                                    throw s.actual = e, s.expected = t, s.operator = a.name, s
                                }
                                A({
                                    actual: e,
                                    expected: t,
                                    message: n,
                                    operator: a.name,
                                    stackStartFn: a
                                })
                            }
                        }(e, t, n, r, f, o)
                    }), !0
                }
                return void 0 !== t.prototype && e instanceof t || !Error.isPrototypeOf(t) && !0 === t.call({}, e)
            }

            function T(e) {
                if ("function" != typeof e) throw new l("fn", "Function", e);
                try {
                    e()
                } catch (e) {
                    return e
                }
                return S
            }

            function R(e) {
                return g(e) || null !== e && "object" === a(e) && "function" == typeof e.then && "function" == typeof e.catch
            }

            function M(e) {
                return Promise.resolve().then(function() {
                    var t;
                    if ("function" == typeof e) {
                        if (!R(t = e())) throw new h("instance of Promise", "promiseFn", t)
                    } else if (R(e)) t = e;
                    else throw new l("promiseFn", ["Function", "Promise"], e);
                    return Promise.resolve().then(function() {
                        return t
                    }).then(function() {
                        return S
                    }).catch(function(e) {
                        return e
                    })
                })
            }

            function P(e, t, r, n) {
                if ("string" == typeof r) {
                    if (4 == arguments.length) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
                    if ("object" === a(t) && null !== t) {
                        if (t.message === r) throw new f("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'))
                    } else if (t === r) throw new f("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                    n = r, r = void 0
                } else if (null != r && "object" !== a(r) && "function" != typeof r) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
                if (t === S) {
                    var i = "";
                    r && r.name && (i += " (".concat(r.name, ")")), i += n ? ": ".concat(n) : ".";
                    var o = "rejects" === e.name ? "rejection" : "exception";
                    A({
                        actual: void 0,
                        expected: r,
                        operator: e.name,
                        message: "Missing expected ".concat(o).concat(i),
                        stackStartFn: e
                    })
                }
                if (r && !I(t, r, n, e)) throw t
            }

            function L(e, t, r, n) {
                if (t !== S) {
                    if ("string" == typeof r && (n = r, r = void 0), !r || I(t, r)) {
                        var i = n ? ": ".concat(n) : ".",
                            o = "doesNotReject" === e.name ? "rejection" : "exception";
                        A({
                            actual: t,
                            expected: r,
                            operator: e.name,
                            message: "Got unwanted ".concat(o).concat(i, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
                            stackStartFn: e
                        })
                    }
                    throw t
                }
            }

            function U(e, t, r, n, i) {
                if (!b(t)) throw new l("regexp", "RegExp", t);
                var o = "match" === i;
                if ("string" != typeof e || v(t, e) !== o) {
                    if (r instanceof Error) throw r;
                    var s = !r;
                    r = r || ("string" != typeof e ? 'The "string" argument must be of type string. Received type ' + "".concat(a(e), " (").concat(p(e), ")") : (o ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(p(t), ". Input:\n\n").concat(p(e), "\n"));
                    var f = new d({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: i,
                        stackStartFn: n
                    });
                    throw f.generatedMessage = s, f
                }
            }

            function N() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                k.apply(void 0, [N, t.length].concat(t))
            }
            E.throws = function e(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                P.apply(void 0, [e, T(t)].concat(n))
            }, E.rejects = function e(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                return M(t).then(function(t) {
                    return P.apply(void 0, [e, t].concat(n))
                })
            }, E.doesNotThrow = function e(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                L.apply(void 0, [e, T(t)].concat(n))
            }, E.doesNotReject = function e(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                return M(t).then(function(t) {
                    return L.apply(void 0, [e, t].concat(n))
                })
            }, E.ifError = function e(t) {
                if (null != t) {
                    var r = "ifError got unwanted exception: ";
                    "object" === a(t) && "string" == typeof t.message ? 0 === t.message.length && t.constructor ? r += t.constructor.name : r += t.message : r += p(t);
                    var n = new d({
                            actual: t,
                            expected: null,
                            operator: "ifError",
                            message: r,
                            stackStartFn: e
                        }),
                        i = t.stack;
                    if ("string" == typeof i) {
                        var o = i.split("\n");
                        o.shift();
                        for (var s = n.stack.split("\n"), f = 0; f < o.length; f++) {
                            var l = s.indexOf(o[f]);
                            if (-1 !== l) {
                                s = s.slice(0, l);
                                break
                            }
                        }
                        n.stack = "".concat(s.join("\n"), "\n").concat(o.join("\n"))
                    }
                    throw n
                }
            }, E.match = function e(t, r, n) {
                U(t, r, n, e, "match")
            }, E.doesNotMatch = function e(t, r, n) {
                U(t, r, n, e, "doesNotMatch")
            }, E.strict = m(N, E, {
                equal: E.strictEqual,
                deepEqual: E.deepStrictEqual,
                notEqual: E.notStrictEqual,
                notDeepEqual: E.notDeepStrictEqual
            }), E.strict.strict = E.strict
        },
        70954: e => {
            ! function() {
                "use strict";
                var t = {
                        815: function(e) {
                            e.exports = function(e, r, n, i) {
                                r = r || "&", n = n || "=";
                                var o = {};
                                if ("string" != typeof e || 0 === e.length) return o;
                                var a = /\+/g;
                                e = e.split(r);
                                var s = 1e3;
                                i && "number" == typeof i.maxKeys && (s = i.maxKeys);
                                var f = e.length;
                                s > 0 && f > s && (f = s);
                                for (var l = 0; l < f; ++l) {
                                    var u, h, c, d, p = e[l].replace(a, "%20"),
                                        y = p.indexOf(n);
                                    (y >= 0 ? (u = p.substr(0, y), h = p.substr(y + 1)) : (u = p, h = ""), c = decodeURIComponent(u), d = decodeURIComponent(h), Object.prototype.hasOwnProperty.call(o, c)) ? t(o[c]) ? o[c].push(d) : o[c] = [o[c], d]: o[c] = d
                                }
                                return o
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var t = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, o, a, s) {
                                return (o = o || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e) ? n(i(e), function(i) {
                                    var s = encodeURIComponent(t(i)) + a;
                                    return r(e[i]) ? n(e[i], function(e) {
                                        return s + encodeURIComponent(t(e))
                                    }).join(o) : s + encodeURIComponent(t(e[i]))
                                }).join(o) : s ? encodeURIComponent(t(s)) + a + encodeURIComponent(t(e)) : ""
                            };
                            var r = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function n(e, t) {
                                if (e.map) return e.map(t);
                                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                                return r
                            }
                            var i = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                                return t
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var o = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](o, o.exports, n), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return o.exports
                }
                n.ab = "//";
                var i = {};
                i.decode = i.parse = n(815), i.encode = i.stringify = n(577), e.exports = i
            }()
        },
        71364: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactBytesToNibbles = t.bytesToNibbles = t.nibblesToCompactBytes = t.nibblesToBytes = t.hasTerminator = void 0, t.hasTerminator = e => e.length > 0 && 16 === e[e.length - 1], t.nibblesToBytes = (e, t) => {
                for (let r = 0, n = 0; n < e.length; r += 1, n += 2) t[r] = e[n] << 4 | e[n + 1]
            }, t.nibblesToCompactBytes = e => {
                let r = 0;
                (0, t.hasTerminator)(e) && (r = 1, e = e.subarray(0, e.length - 1));
                let n = new Uint8Array(e.length / 2 + 1);
                return n[0] = r << 5, (1 & e.length) == 1 && (n[0] |= 16, n[0] |= e[0], e = e.subarray(1)), (0, t.nibblesToBytes)(e, n.subarray(1)), n
            }, t.bytesToNibbles = e => {
                let t = 2 * e.length + 1,
                    r = new Uint8Array(t);
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    r[2 * t] = n / 16, r[2 * t + 1] = n % 16
                }
                return r[t - 1] = 16, r
            }, t.compactBytesToNibbles = e => {
                if (0 === e.length) return e;
                let r = (0, t.bytesToNibbles)(e);
                r[0] < 2 && (r = r.subarray(0, r.length - 1));
                let n = 2 - (1 & r[0]);
                return r.subarray(n)
            }
        },
        72289: function(e, t, r) {
            ! function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!e) throw Error(t || "Assertion failed")
                }

                function i(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function o(e, t, r) {
                    if (o.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(8379).Buffer
                } catch (e) {}

                function a(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function s(e, t, r) {
                    var n = a(e, r);
                    return r - 1 >= t && (n |= a(e, r - 1) << 4), n
                }

                function f(e, t, r, n) {
                    for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                        var s = e.charCodeAt(a) - 48;
                        i *= n, s >= 49 ? i += s - 49 + 10 : s >= 17 ? i += s - 17 + 10 : i += s
                    }
                    return i
                }
                o.isBN = function(e) {
                    return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                }, o.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, o.min = function(e, t) {
                    return 0 > e.cmp(t) ? e : t
                }, o.prototype._init = function(e, t, r) {
                    if ("number" == typeof e) return this._initNumber(e, t, r);
                    if ("object" == typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
                }, o.prototype._initNumber = function(e, t, r) {
                    e < 0 && (this.negative = 1, e = -e), e < 0x4000000 ? (this.words = [0x3ffffff & e], this.length = 1) : e < 0x10000000000000 ? (this.words = [0x3ffffff & e, e / 0x4000000 & 0x3ffffff], this.length = 2) : (n(e < 0x20000000000000), this.words = [0x3ffffff & e, e / 0x4000000 & 0x3ffffff, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                }, o.prototype._initArray = function(e, t, r) {
                    if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
                    for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
                    var s = 0;
                    if ("be" === r)
                        for (a = e.length - 1, i = 0; a >= 0; a -= 3) o = e[a] | e[a - 1] << 8 | e[a - 2] << 16, this.words[i] |= o << s & 0x3ffffff, this.words[i + 1] = o >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, i++);
                    else if ("le" === r)
                        for (a = 0, i = 0; a < e.length; a += 3) o = e[a] | e[a + 1] << 8 | e[a + 2] << 16, this.words[i] |= o << s & 0x3ffffff, this.words[i + 1] = o >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, i++);
                    return this.strip()
                }, o.prototype._parseHex = function(e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
                    for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
                    var o = 0,
                        a = 0;
                    if ("be" === r)
                        for (i = e.length - 1; i >= t; i -= 2) n = s(e, t, i) << o, this.words[a] |= 0x3ffffff & n, o >= 18 ? (o -= 18, a += 1, this.words[a] |= n >>> 26) : o += 8;
                    else
                        for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2) n = s(e, t, i) << o, this.words[a] |= 0x3ffffff & n, o >= 18 ? (o -= 18, a += 1, this.words[a] |= n >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function(e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 0x3ffffff; i *= t) n++;
                    n--, i = i / t | 0;
                    for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, l = 0, u = r; u < s; u += n) l = f(e, u, u + n, t), this.imuln(i), this.words[0] + l < 0x4000000 ? this.words[0] += l : this._iaddn(l);
                    if (0 !== a) {
                        var h = 1;
                        for (l = f(e, u, e.length, t), u = 0; u < a; u++) h *= t;
                        this.imuln(h), this.words[0] + l < 0x4000000 ? this.words[0] += l : this._iaddn(l)
                    }
                    this.strip()
                }, o.prototype.copy = function(e) {
                    e.words = Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, o.prototype.clone = function() {
                    var e = new o(null);
                    return this.copy(e), e
                }, o.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var l, u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    c = [0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400, 0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000, 0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40, 0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f, 0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400];

                function d(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        a = i * o,
                        s = 0x3ffffff & a,
                        f = a / 0x4000000 | 0;
                    r.words[0] = s;
                    for (var l = 1; l < n; l++) {
                        for (var u = f >>> 26, h = 0x3ffffff & f, c = Math.min(l, t.length - 1), d = Math.max(0, l - e.length + 1); d <= c; d++) {
                            var p = l - d | 0;
                            u += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) / 0x4000000 | 0, h = 0x3ffffff & a
                        }
                        r.words[l] = 0 | h, f = 0 | u
                    }
                    return 0 !== f ? r.words[l] = 0 | f : r.length--, r.strip()
                }
                o.prototype.toString = function(e, t) {
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        for (var r = "", i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                f = ((s << i | o) & 0xffffff).toString(16);
                            r = 0 != (o = s >>> 24 - i & 0xffffff) || a !== this.length - 1 ? u[6 - f.length] + f + r : f + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var l = h[e],
                            d = c[e];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var y = p.modn(d).toString(e);
                            r = (p = p.idivn(d)).isZero() ? y + r : u[l - y.length] + y + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 0x4000000 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 0x10000000000000 + 0x4000000 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(e, t) {
                    return n(void 0 !== l), this.toArrayLike(l, e, t)
                }, o.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, o.prototype.toArrayLike = function(e, t, r) {
                    var i, o, a = this.byteLength(),
                        s = r || Math.max(1, a);
                    n(a <= s, "byte array longer than desired length"), n(s > 0, "Requested array length <= 0"), this.strip();
                    var f = new e(s),
                        l = this.clone();
                    if ("le" === t) {
                        for (o = 0; !l.isZero(); o++) i = l.andln(255), l.iushrn(8), f[o] = i;
                        for (; o < s; o++) f[o] = 0
                    } else {
                        for (o = 0; o < s - a; o++) f[o] = 0;
                        for (o = 0; !l.isZero(); o++) i = l.andln(255), l.iushrn(8), f[s - o - 1] = i
                    }
                    return f
                }, Math.clz32 ? o.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : o.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, o.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
                }, o.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return (this.length - 1) * 26 + t
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, o.prototype.ior = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuor(e)
                }, o.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, o.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, o.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, o.prototype.iand = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuand(e)
                }, o.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, o.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, o.prototype.iuxor = function(e) {
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var t, r, n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this.strip()
                }, o.prototype.ixor = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuxor(e)
                }, o.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, o.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, o.prototype.inotn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 0x3ffffff & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - r), this.strip()
                }, o.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, o.prototype.setn = function(e, t) {
                    n("number" == typeof e && e >= 0);
                    var r = e / 26 | 0,
                        i = e % 26;
                    return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var t, r, n, i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 0x3ffffff & t, i = t >>> 26;
                    for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 0x3ffffff & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, o.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t, r, n = this.iadd(e);
                        return e.negative = 1, n._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (t = this, r = e) : (t = e, r = this);
                    for (var o = 0, a = 0; a < r.length; a++) o = (n = (0 | t.words[a]) - (0 | r.words[a]) + o) >> 26, this.words[a] = 0x3ffffff & n;
                    for (; 0 !== o && a < t.length; a++) o = (n = (0 | t.words[a]) + o) >> 26, this.words[a] = 0x3ffffff & n;
                    if (0 === o && a < t.length && t !== this)
                        for (; a < t.length; a++) this.words[a] = t.words[a];
                    return this.length = Math.max(this.length, a), t !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var p = function(e, t, r) {
                    var n, i, o, a = e.words,
                        s = t.words,
                        f = r.words,
                        l = 0,
                        u = 0 | a[0],
                        h = 8191 & u,
                        c = u >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        y = d >>> 13,
                        g = 0 | a[2],
                        b = 8191 & g,
                        m = g >>> 13,
                        w = 0 | a[3],
                        v = 8191 & w,
                        _ = w >>> 13,
                        x = 0 | a[4],
                        E = 8191 & x,
                        S = x >>> 13,
                        A = 0 | a[5],
                        k = 8191 & A,
                        B = A >>> 13,
                        O = 0 | a[6],
                        I = 8191 & O,
                        T = O >>> 13,
                        R = 0 | a[7],
                        M = 8191 & R,
                        P = R >>> 13,
                        L = 0 | a[8],
                        U = 8191 & L,
                        N = L >>> 13,
                        C = 0 | a[9],
                        j = 8191 & C,
                        H = C >>> 13,
                        D = 0 | s[0],
                        K = 8191 & D,
                        $ = D >>> 13,
                        z = 0 | s[1],
                        F = 8191 & z,
                        q = z >>> 13,
                        Z = 0 | s[2],
                        V = 8191 & Z,
                        W = Z >>> 13,
                        G = 0 | s[3],
                        Y = 8191 & G,
                        X = G >>> 13,
                        Q = 0 | s[4],
                        J = 8191 & Q,
                        ee = Q >>> 13,
                        et = 0 | s[5],
                        er = 8191 & et,
                        en = et >>> 13,
                        ei = 0 | s[6],
                        eo = 8191 & ei,
                        ea = ei >>> 13,
                        es = 0 | s[7],
                        ef = 8191 & es,
                        el = es >>> 13,
                        eu = 0 | s[8],
                        eh = 8191 & eu,
                        ec = eu >>> 13,
                        ed = 0 | s[9],
                        ep = 8191 & ed,
                        ey = ed >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19, n = Math.imul(h, K);
                    var eg = (l + n | 0) + ((8191 & (i = (i = Math.imul(h, $)) + Math.imul(c, K) | 0)) << 13) | 0;
                    l = ((o = Math.imul(c, $)) + (i >>> 13) | 0) + (eg >>> 26) | 0, eg &= 0x3ffffff, n = Math.imul(p, K), i = (i = Math.imul(p, $)) + Math.imul(y, K) | 0, o = Math.imul(y, $), n = n + Math.imul(h, F) | 0;
                    var eb = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, q) | 0) + Math.imul(c, F) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, q) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0, eb &= 0x3ffffff, n = Math.imul(b, K), i = (i = Math.imul(b, $)) + Math.imul(m, K) | 0, o = Math.imul(m, $), n = n + Math.imul(p, F) | 0, i = (i = i + Math.imul(p, q) | 0) + Math.imul(y, F) | 0, o = o + Math.imul(y, q) | 0, n = n + Math.imul(h, V) | 0;
                    var em = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, W) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, W) | 0) + (i >>> 13) | 0) + (em >>> 26) | 0, em &= 0x3ffffff, n = Math.imul(v, K), i = (i = Math.imul(v, $)) + Math.imul(_, K) | 0, o = Math.imul(_, $), n = n + Math.imul(b, F) | 0, i = (i = i + Math.imul(b, q) | 0) + Math.imul(m, F) | 0, o = o + Math.imul(m, q) | 0, n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, W) | 0, n = n + Math.imul(h, Y) | 0;
                    var ew = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, X) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, X) | 0) + (i >>> 13) | 0) + (ew >>> 26) | 0, ew &= 0x3ffffff, n = Math.imul(E, K), i = (i = Math.imul(E, $)) + Math.imul(S, K) | 0, o = Math.imul(S, $), n = n + Math.imul(v, F) | 0, i = (i = i + Math.imul(v, q) | 0) + Math.imul(_, F) | 0, o = o + Math.imul(_, q) | 0, n = n + Math.imul(b, V) | 0, i = (i = i + Math.imul(b, W) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, W) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(h, J) | 0;
                    var ev = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, ee) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0, ev &= 0x3ffffff, n = Math.imul(k, K), i = (i = Math.imul(k, $)) + Math.imul(B, K) | 0, o = Math.imul(B, $), n = n + Math.imul(E, F) | 0, i = (i = i + Math.imul(E, q) | 0) + Math.imul(S, F) | 0, o = o + Math.imul(S, q) | 0, n = n + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, W) | 0, n = n + Math.imul(b, Y) | 0, i = (i = i + Math.imul(b, X) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, X) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(h, er) | 0;
                    var e_ = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, en) | 0) + Math.imul(c, er) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, en) | 0) + (i >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 0x3ffffff, n = Math.imul(I, K), i = (i = Math.imul(I, $)) + Math.imul(T, K) | 0, o = Math.imul(T, $), n = n + Math.imul(k, F) | 0, i = (i = i + Math.imul(k, q) | 0) + Math.imul(B, F) | 0, o = o + Math.imul(B, q) | 0, n = n + Math.imul(E, V) | 0, i = (i = i + Math.imul(E, W) | 0) + Math.imul(S, V) | 0, o = o + Math.imul(S, W) | 0, n = n + Math.imul(v, Y) | 0, i = (i = i + Math.imul(v, X) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, X) | 0, n = n + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, ee) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, ee) | 0, n = n + Math.imul(p, er) | 0, i = (i = i + Math.imul(p, en) | 0) + Math.imul(y, er) | 0, o = o + Math.imul(y, en) | 0, n = n + Math.imul(h, eo) | 0;
                    var ex = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, ea) | 0) + Math.imul(c, eo) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, ea) | 0) + (i >>> 13) | 0) + (ex >>> 26) | 0, ex &= 0x3ffffff, n = Math.imul(M, K), i = (i = Math.imul(M, $)) + Math.imul(P, K) | 0, o = Math.imul(P, $), n = n + Math.imul(I, F) | 0, i = (i = i + Math.imul(I, q) | 0) + Math.imul(T, F) | 0, o = o + Math.imul(T, q) | 0, n = n + Math.imul(k, V) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(B, V) | 0, o = o + Math.imul(B, W) | 0, n = n + Math.imul(E, Y) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, X) | 0, n = n + Math.imul(v, J) | 0, i = (i = i + Math.imul(v, ee) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(b, er) | 0, i = (i = i + Math.imul(b, en) | 0) + Math.imul(m, er) | 0, o = o + Math.imul(m, en) | 0, n = n + Math.imul(p, eo) | 0, i = (i = i + Math.imul(p, ea) | 0) + Math.imul(y, eo) | 0, o = o + Math.imul(y, ea) | 0, n = n + Math.imul(h, ef) | 0;
                    var eE = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, el) | 0) + Math.imul(c, ef) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, el) | 0) + (i >>> 13) | 0) + (eE >>> 26) | 0, eE &= 0x3ffffff, n = Math.imul(U, K), i = (i = Math.imul(U, $)) + Math.imul(N, K) | 0, o = Math.imul(N, $), n = n + Math.imul(M, F) | 0, i = (i = i + Math.imul(M, q) | 0) + Math.imul(P, F) | 0, o = o + Math.imul(P, q) | 0, n = n + Math.imul(I, V) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, W) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, X) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, X) | 0, n = n + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, ee) | 0) + Math.imul(S, J) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(v, er) | 0, i = (i = i + Math.imul(v, en) | 0) + Math.imul(_, er) | 0, o = o + Math.imul(_, en) | 0, n = n + Math.imul(b, eo) | 0, i = (i = i + Math.imul(b, ea) | 0) + Math.imul(m, eo) | 0, o = o + Math.imul(m, ea) | 0, n = n + Math.imul(p, ef) | 0, i = (i = i + Math.imul(p, el) | 0) + Math.imul(y, ef) | 0, o = o + Math.imul(y, el) | 0, n = n + Math.imul(h, eh) | 0;
                    var eS = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, ec) | 0) + Math.imul(c, eh) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, ec) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0, eS &= 0x3ffffff, n = Math.imul(j, K), i = (i = Math.imul(j, $)) + Math.imul(H, K) | 0, o = Math.imul(H, $), n = n + Math.imul(U, F) | 0, i = (i = i + Math.imul(U, q) | 0) + Math.imul(N, F) | 0, o = o + Math.imul(N, q) | 0, n = n + Math.imul(M, V) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, W) | 0, n = n + Math.imul(I, Y) | 0, i = (i = i + Math.imul(I, X) | 0) + Math.imul(T, Y) | 0, o = o + Math.imul(T, X) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, ee) | 0, n = n + Math.imul(E, er) | 0, i = (i = i + Math.imul(E, en) | 0) + Math.imul(S, er) | 0, o = o + Math.imul(S, en) | 0, n = n + Math.imul(v, eo) | 0, i = (i = i + Math.imul(v, ea) | 0) + Math.imul(_, eo) | 0, o = o + Math.imul(_, ea) | 0, n = n + Math.imul(b, ef) | 0, i = (i = i + Math.imul(b, el) | 0) + Math.imul(m, ef) | 0, o = o + Math.imul(m, el) | 0, n = n + Math.imul(p, eh) | 0, i = (i = i + Math.imul(p, ec) | 0) + Math.imul(y, eh) | 0, o = o + Math.imul(y, ec) | 0, n = n + Math.imul(h, ep) | 0;
                    var eA = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(h, ey) | 0) + Math.imul(c, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(c, ey) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0, eA &= 0x3ffffff, n = Math.imul(j, F), i = (i = Math.imul(j, q)) + Math.imul(H, F) | 0, o = Math.imul(H, q), n = n + Math.imul(U, V) | 0, i = (i = i + Math.imul(U, W) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, W) | 0, n = n + Math.imul(M, Y) | 0, i = (i = i + Math.imul(M, X) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(I, J) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(T, J) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(k, er) | 0, i = (i = i + Math.imul(k, en) | 0) + Math.imul(B, er) | 0, o = o + Math.imul(B, en) | 0, n = n + Math.imul(E, eo) | 0, i = (i = i + Math.imul(E, ea) | 0) + Math.imul(S, eo) | 0, o = o + Math.imul(S, ea) | 0, n = n + Math.imul(v, ef) | 0, i = (i = i + Math.imul(v, el) | 0) + Math.imul(_, ef) | 0, o = o + Math.imul(_, el) | 0, n = n + Math.imul(b, eh) | 0, i = (i = i + Math.imul(b, ec) | 0) + Math.imul(m, eh) | 0, o = o + Math.imul(m, ec) | 0, n = n + Math.imul(p, ep) | 0;
                    var ek = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(p, ey) | 0) + Math.imul(y, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(y, ey) | 0) + (i >>> 13) | 0) + (ek >>> 26) | 0, ek &= 0x3ffffff, n = Math.imul(j, V), i = (i = Math.imul(j, W)) + Math.imul(H, V) | 0, o = Math.imul(H, W), n = n + Math.imul(U, Y) | 0, i = (i = i + Math.imul(U, X) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, X) | 0, n = n + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, ee) | 0, n = n + Math.imul(I, er) | 0, i = (i = i + Math.imul(I, en) | 0) + Math.imul(T, er) | 0, o = o + Math.imul(T, en) | 0, n = n + Math.imul(k, eo) | 0, i = (i = i + Math.imul(k, ea) | 0) + Math.imul(B, eo) | 0, o = o + Math.imul(B, ea) | 0, n = n + Math.imul(E, ef) | 0, i = (i = i + Math.imul(E, el) | 0) + Math.imul(S, ef) | 0, o = o + Math.imul(S, el) | 0, n = n + Math.imul(v, eh) | 0, i = (i = i + Math.imul(v, ec) | 0) + Math.imul(_, eh) | 0, o = o + Math.imul(_, ec) | 0, n = n + Math.imul(b, ep) | 0;
                    var eB = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(b, ey) | 0) + Math.imul(m, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(m, ey) | 0) + (i >>> 13) | 0) + (eB >>> 26) | 0, eB &= 0x3ffffff, n = Math.imul(j, Y), i = (i = Math.imul(j, X)) + Math.imul(H, Y) | 0, o = Math.imul(H, X), n = n + Math.imul(U, J) | 0, i = (i = i + Math.imul(U, ee) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, ee) | 0, n = n + Math.imul(M, er) | 0, i = (i = i + Math.imul(M, en) | 0) + Math.imul(P, er) | 0, o = o + Math.imul(P, en) | 0, n = n + Math.imul(I, eo) | 0, i = (i = i + Math.imul(I, ea) | 0) + Math.imul(T, eo) | 0, o = o + Math.imul(T, ea) | 0, n = n + Math.imul(k, ef) | 0, i = (i = i + Math.imul(k, el) | 0) + Math.imul(B, ef) | 0, o = o + Math.imul(B, el) | 0, n = n + Math.imul(E, eh) | 0, i = (i = i + Math.imul(E, ec) | 0) + Math.imul(S, eh) | 0, o = o + Math.imul(S, ec) | 0, n = n + Math.imul(v, ep) | 0;
                    var eO = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(v, ey) | 0) + Math.imul(_, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(_, ey) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0, eO &= 0x3ffffff, n = Math.imul(j, J), i = (i = Math.imul(j, ee)) + Math.imul(H, J) | 0, o = Math.imul(H, ee), n = n + Math.imul(U, er) | 0, i = (i = i + Math.imul(U, en) | 0) + Math.imul(N, er) | 0, o = o + Math.imul(N, en) | 0, n = n + Math.imul(M, eo) | 0, i = (i = i + Math.imul(M, ea) | 0) + Math.imul(P, eo) | 0, o = o + Math.imul(P, ea) | 0, n = n + Math.imul(I, ef) | 0, i = (i = i + Math.imul(I, el) | 0) + Math.imul(T, ef) | 0, o = o + Math.imul(T, el) | 0, n = n + Math.imul(k, eh) | 0, i = (i = i + Math.imul(k, ec) | 0) + Math.imul(B, eh) | 0, o = o + Math.imul(B, ec) | 0, n = n + Math.imul(E, ep) | 0;
                    var eI = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(E, ey) | 0) + Math.imul(S, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(S, ey) | 0) + (i >>> 13) | 0) + (eI >>> 26) | 0, eI &= 0x3ffffff, n = Math.imul(j, er), i = (i = Math.imul(j, en)) + Math.imul(H, er) | 0, o = Math.imul(H, en), n = n + Math.imul(U, eo) | 0, i = (i = i + Math.imul(U, ea) | 0) + Math.imul(N, eo) | 0, o = o + Math.imul(N, ea) | 0, n = n + Math.imul(M, ef) | 0, i = (i = i + Math.imul(M, el) | 0) + Math.imul(P, ef) | 0, o = o + Math.imul(P, el) | 0, n = n + Math.imul(I, eh) | 0, i = (i = i + Math.imul(I, ec) | 0) + Math.imul(T, eh) | 0, o = o + Math.imul(T, ec) | 0, n = n + Math.imul(k, ep) | 0;
                    var eT = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(k, ey) | 0) + Math.imul(B, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(B, ey) | 0) + (i >>> 13) | 0) + (eT >>> 26) | 0, eT &= 0x3ffffff, n = Math.imul(j, eo), i = (i = Math.imul(j, ea)) + Math.imul(H, eo) | 0, o = Math.imul(H, ea), n = n + Math.imul(U, ef) | 0, i = (i = i + Math.imul(U, el) | 0) + Math.imul(N, ef) | 0, o = o + Math.imul(N, el) | 0, n = n + Math.imul(M, eh) | 0, i = (i = i + Math.imul(M, ec) | 0) + Math.imul(P, eh) | 0, o = o + Math.imul(P, ec) | 0, n = n + Math.imul(I, ep) | 0;
                    var eR = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(I, ey) | 0) + Math.imul(T, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(T, ey) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0, eR &= 0x3ffffff, n = Math.imul(j, ef), i = (i = Math.imul(j, el)) + Math.imul(H, ef) | 0, o = Math.imul(H, el), n = n + Math.imul(U, eh) | 0, i = (i = i + Math.imul(U, ec) | 0) + Math.imul(N, eh) | 0, o = o + Math.imul(N, ec) | 0, n = n + Math.imul(M, ep) | 0;
                    var eM = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(M, ey) | 0) + Math.imul(P, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(P, ey) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0, eM &= 0x3ffffff, n = Math.imul(j, eh), i = (i = Math.imul(j, ec)) + Math.imul(H, eh) | 0, o = Math.imul(H, ec), n = n + Math.imul(U, ep) | 0;
                    var eP = (l + n | 0) + ((8191 & (i = (i = i + Math.imul(U, ey) | 0) + Math.imul(N, ep) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(N, ey) | 0) + (i >>> 13) | 0) + (eP >>> 26) | 0, eP &= 0x3ffffff, n = Math.imul(j, ep);
                    var eL = (l + n | 0) + ((8191 & (i = (i = Math.imul(j, ey)) + Math.imul(H, ep) | 0)) << 13) | 0;
                    return l = ((o = Math.imul(H, ey)) + (i >>> 13) | 0) + (eL >>> 26) | 0, eL &= 0x3ffffff, f[0] = eg, f[1] = eb, f[2] = em, f[3] = ew, f[4] = ev, f[5] = e_, f[6] = ex, f[7] = eE, f[8] = eS, f[9] = eA, f[10] = ek, f[11] = eB, f[12] = eO, f[13] = eI, f[14] = eT, f[15] = eR, f[16] = eM, f[17] = eP, f[18] = eL, 0 !== l && (f[19] = l, r.length++), r
                };

                function y(e, t, r) {
                    return new g().mulp(e, t, r)
                }

                function g(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (p = d), o.prototype.mulTo = function(e, t) {
                    var r, n = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? p(this, e, t) : n < 63 ? d(this, e, t) : n < 1024 ? function(e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 0x3ffffff & n, f = Math.min(o, t.length - 1), l = Math.max(0, o - e.length + 1); l <= f; l++) {
                                var u = o - l,
                                    h = (0 | e.words[u]) * (0 | t.words[l]),
                                    c = 0x3ffffff & h;
                                a = a + (h / 0x4000000 | 0) | 0, s = 0x3ffffff & (c = c + s | 0), i += (a = a + (c >>> 26) | 0) >>> 26, a &= 0x3ffffff
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, e, t) : y(this, e, t)
                }, g.prototype.makeRBT = function(e) {
                    for (var t = Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, g.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, g.prototype.permute = function(e, t, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
                }, g.prototype.transform = function(e, t, r, n, i, o) {
                    this.permute(o, e, t, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, f = Math.cos(2 * Math.PI / s), l = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                            for (var h = f, c = l, d = 0; d < a; d++) {
                                var p = r[u + d],
                                    y = n[u + d],
                                    g = r[u + d + a],
                                    b = n[u + d + a],
                                    m = h * g - c * b;
                                b = h * b + c * g, g = m, r[u + d] = p + g, n[u + d] = y + b, r[u + d + a] = p - g, n[u + d + a] = y - b, d !== s && (m = f * h - l * c, c = f * c + l * h, h = m)
                            }
                }, g.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, g.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, g.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 0x3ffffff & i, r = i < 0x4000000 ? 0 : i / 0x4000000 | 0
                    }
                    return e
                }, g.prototype.convert13b = function(e, t, r, i) {
                    for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * t; a < i; ++a) r[a] = 0;
                    n(0 === o), n((-8192 & o) == 0)
                }, g.prototype.stub = function(e) {
                    for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, g.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = Array(n),
                        s = Array(n),
                        f = Array(n),
                        l = Array(n),
                        u = Array(n),
                        h = Array(n),
                        c = r.words;
                    c.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, l, n), this.transform(a, o, s, f, n, i), this.transform(l, o, u, h, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * u[d] - f[d] * h[d];
                        f[d] = s[d] * h[d] + f[d] * u[d], s[d] = p
                    }
                    return this.conjugate(s, f, n), this.transform(s, f, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, o.prototype.mul = function(e) {
                    var t = new o(null);
                    return t.words = Array(this.length + e.length), this.mulTo(e, t)
                }, o.prototype.mulf = function(e) {
                    var t = new o(null);
                    return t.words = Array(this.length + e.length), y(this, e, t)
                }, o.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, o.prototype.imuln = function(e) {
                    n("number" == typeof e), n(e < 0x4000000);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * e,
                            o = (0x3ffffff & i) + (0x3ffffff & t);
                        t >>= 26, t += (i / 0x4000000 | 0) + (o >>> 26), this.words[r] = 0x3ffffff & o
                    }
                    return 0 !== t && (this.words[r] = t, this.length++), this
                }, o.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new o(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t, r = e % 26,
                        i = (e - r) / 26,
                        o = 0x3ffffff >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (t = 0; t < this.length; t++) {
                            var s = this.words[t] & o,
                                f = (0 | this.words[t]) - s << r;
                            this.words[t] = f | a, a = s >>> 26 - r
                        }
                        a && (this.words[t] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(e) {
                    return n(0 === this.negative), this.iushln(e)
                }, o.prototype.iushrn = function(e, t, r) {
                    n("number" == typeof e && e >= 0);
                    var i = t ? (t - t % 26) / 26 : 0,
                        o = e % 26,
                        a = Math.min((e - o) / 26, this.length),
                        s = 0x3ffffff ^ 0x3ffffff >>> o << o;
                    if (i -= a, i = Math.max(0, i), r) {
                        for (var f = 0; f < a; f++) r.words[f] = this.words[f];
                        r.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var l = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== l || f >= i); f--) {
                        var u = 0 | this.words[f];
                        this.words[f] = l << 26 - o | u >>> o, l = u & s
                    }
                    return r && 0 !== l && (r.words[r.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r)
                }, o.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, o.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, o.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, o.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, o.prototype.testn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                }, o.prototype.imaskn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 0x3ffffff ^ 0x3ffffff >>> t << t), this.strip())
                }, o.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, o.prototype.iaddn = function(e) {
                    return (n("number" == typeof e), n(e < 0x4000000), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                }, o.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 0x4000000; t++) this.words[t] -= 0x4000000, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, o.prototype.isubn = function(e) {
                    if (n("number" == typeof e), n(e < 0x4000000), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 0x4000000, this.words[t + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, o.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(e, t, r) {
                    var i, o, a = e.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < e.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var f = (0 | e.words[i]) * t;
                        o -= 0x3ffffff & f, s = (o >> 26) - (f / 0x4000000 | 0), this.words[i + r] = 0x3ffffff & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 0x3ffffff & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 0x3ffffff & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(e, t) {
                    var r, n = this.length - e.length,
                        i = this.clone(),
                        a = e,
                        s = 0 | a.words[a.length - 1];
                    0 != (n = 26 - this._countBits(s)) && (a = a.ushln(n), i.iushln(n), s = 0 | a.words[a.length - 1]);
                    var f = i.length - a.length;
                    if ("mod" !== t) {
                        (r = new o(null)).length = f + 1, r.words = Array(r.length);
                        for (var l = 0; l < r.length; l++) r.words[l] = 0
                    }
                    var u = i.clone()._ishlnsubmul(a, 1, f);
                    0 === u.negative && (i = u, r && (r.words[f] = 1));
                    for (var h = f - 1; h >= 0; h--) {
                        var c = (0 | i.words[a.length + h]) * 0x4000000 + (0 | i.words[a.length + h - 1]);
                        for (c = Math.min(c / s | 0, 0x3ffffff), i._ishlnsubmul(a, c, h); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(a, 1, h), i.isZero() || (i.negative ^= 1);
                        r && (r.words[h] = c)
                    }
                    return r && r.strip(), i.strip(), "div" !== t && 0 !== n && i.iushrn(n), {
                        div: r || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(e, t, r) {
                    var i, a, s;
                    return (n(!e.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : (this.negative & e.negative) != 0 ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
                        div: s.div,
                        mod: a
                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new o(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0]))
                    } : this._wordDiv(e, t)
                }, o.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, o.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, o.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, o.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, o.prototype.modn = function(e) {
                    n(e <= 0x3ffffff);
                    for (var t = 0x4000000 % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                    return r
                }, o.prototype.idivn = function(e) {
                    n(e <= 0x3ffffff);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 0x4000000 * t;
                        this.words[r] = i / e | 0, t = i % e
                    }
                    return this.strip()
                }, o.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, o.prototype.egcd = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), f = new o(1), l = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++l;
                    for (var u = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var c = 0, d = 1;
                            (t.words[0] & d) == 0 && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (t.iushrn(c); c-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(h)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, y = 1;
                            (r.words[0] & y) == 0 && p < 26; ++p, y <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(h)), s.iushrn(1), f.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(f)) : (r.isub(t), s.isub(i), f.isub(a))
                    }
                    return {
                        a: s,
                        b: f,
                        gcd: r.iushln(l)
                    }
                }, o.prototype._invmp = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t, r = this,
                        i = e.clone();
                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                    for (var a = new o(1), s = new o(0), f = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var l = 0, u = 1;
                            (r.words[0] & u) == 0 && l < 26; ++l, u <<= 1);
                        if (l > 0)
                            for (r.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(f), a.iushrn(1);
                        for (var h = 0, c = 1;
                            (i.words[0] & c) == 0 && h < 26; ++h, c <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);
                        r.cmp(i) >= 0 ? (r.isub(i), a.isub(s)) : (i.isub(r), s.isub(a))
                    }
                    return 0 > (t = 0 === r.cmpn(1) ? a : s).cmpn(0) && t.iadd(e), t
                }, o.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var o = t;
                            t = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(e) {
                    return this.words[0] & e
                }, o.prototype.bincn = function(e) {
                    n("number" == typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        s += o, o = s >>> 26, s &= 0x3ffffff, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), n(e <= 0x3ffffff, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, o.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, o.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, o.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, o.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, o.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, o.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, o.prototype.lten = function(e) {
                    return 0 >= this.cmpn(e)
                }, o.prototype.lte = function(e) {
                    return 0 >= this.cmp(e)
                }, o.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, o.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, o.red = function(e) {
                    return new E(e)
                }, o.prototype.toRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, o.prototype.forceRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, o.prototype.redAdd = function(e) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, o.prototype.redIAdd = function(e) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, o.prototype.redSub = function(e) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, o.prototype.redISub = function(e) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, o.prototype.redShl = function(e) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, o.prototype.redMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, o.prototype.redIMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(e) {
                    return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function m(e, t) {
                    this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function w() {
                    m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function v() {
                    m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function _() {
                    m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function x() {
                    m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(e) {
                    if ("string" == typeof e) {
                        var t = o._prime(e);
                        this.m = t.p, this.prime = t
                    } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function S(e) {
                    E.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                m.prototype._tmp = function() {
                    var e = new o(null);
                    return e.words = Array(Math.ceil(this.n / 13)), e
                }, m.prototype.ireduce = function(e) {
                    var t, r = e;
                    do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, m.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, m.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, i(w, m), w.prototype.split = function(e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                    if (t.length = r, e.length <= 9) {
                        e.words[0] = 0, e.length = 1;
                        return
                    }
                    var i = e.words[9];
                    for (n = 10, t.words[t.length++] = 4194303 & i; n < e.length; n++) {
                        var o = 0 | e.words[n];
                        e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, w.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 0x3ffffff & t, t = 64 * n + (t / 0x4000000 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, i(v, m), i(_, m), i(x, m), x.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = (0 | e.words[r]) * 19 + t,
                            i = 0x3ffffff & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, o._prime = function(e) {
                    var t;
                    if (b[e]) return b[e];
                    if ("k256" === e) t = new w;
                    else if ("p224" === e) t = new v;
                    else if ("p192" === e) t = new _;
                    else if ("p25519" === e) t = new x;
                    else throw Error("Unknown prime " + e);
                    return b[e] = t, t
                }, E.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(e, t) {
                    n((e.negative | t.negative) == 0, "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                }, E.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, E.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, E.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, E.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, E.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, E.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, E.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, E.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, E.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 == 1), 3 === t) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        f = s.redNeg(),
                        l = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, l).cmp(f);) u.redIAdd(f);
                    for (var h = this.pow(u, i), c = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = a; 0 !== d.cmp(s);) {
                        for (var y = d, g = 0; 0 !== y.cmp(s); g++) y = y.redSqr();
                        n(g < p);
                        var b = this.pow(h, new o(1).iushln(p - g - 1));
                        c = c.redMul(b), h = b.redSqr(), d = d.redMul(h), p = g
                    }
                    return c
                }, E.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, E.prototype.pow = function(e, t) {
                    if (t.isZero()) return new o(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = Array(16);
                    r[0] = new o(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        f = t.bitLength() % 26;
                    for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                        for (var l = t.words[n], u = f - 1; u >= 0; u--) {
                            var h = l >> u & 1;
                            if (i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === a) {
                                s = 0;
                                continue
                            }
                            a <<= 1, a |= h, (4 == ++s || 0 === n && 0 === u) && (i = this.mul(i, r[a]), s = 0, a = 0)
                        }
                        f = 26
                    }
                    return i
                }, E.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, E.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, o.mont = function(e) {
                    return new S(e)
                }, i(S, E), S.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, S.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, S.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, S.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : 0 > i.cmpn(0) && (a = i.iadd(this.m)), a._forceRed(this)
                }, S.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e = r.nmd(e), this)
        },
        72608: (e, t, r) => {
            "use strict";
            var n, i = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.recoverTypedSignature = t.signTypedData = t.typedSignatureHash = t.TypedDataUtils = t.TYPED_MESSAGE_SCHEMA = t.SignTypedDataVersion = void 0;
            let o = r(43118),
                a = r(30150),
                s = r(67551),
                f = r(16888),
                l = r(91262);

            function u(e, t) {
                if (Object.keys(n).includes(e)) {
                    if (t && !t.includes(e)) throw Error(`SignTypedDataVersion not allowed: '${e}'. Allowed versions are: ${t.join(", ")}`)
                } else throw Error(`Invalid version: '${e}'`)
            }

            function h(e, t, r, c) {
                u(c, [n.V3, n.V4]);
                let d = ["bytes32"],
                    p = [y(e, r)];
                for (let y of r[e]) {
                    if (c === n.V3 && void 0 === t[y.name]) continue;
                    let [e, g] = function e(t, r, c, d, p) {
                        if (u(p, [n.V3, n.V4]), void 0 !== t[c]) return ["bytes32", p === n.V4 && null == d ? "0x0000000000000000000000000000000000000000000000000000000000000000" : (0, o.arrToBufArr)((0, a.keccak256)(h(c, d, t, p)))];
                        if (void 0 === d) throw Error(`missing value for field ${r} of type ${c}`);
                        if ("bytes" === c) {
                            if ("number" == typeof d) d = (0, l.numberToBuffer)(d);
                            else if ((0, s.isHexString)(d)) {
                                let e = d.length % 2 ? "0" : "";
                                d = i.from(e + d.slice(2), "hex")
                            } else d = i.from(d, "utf8");
                            return ["bytes32", (0, o.arrToBufArr)((0, a.keccak256)(d))]
                        }
                        if ("string" === c) return d = "number" == typeof d ? (0, l.numberToBuffer)(d) : i.from(null != d ? d : "", "utf8"), ["bytes32", (0, o.arrToBufArr)((0, a.keccak256)(d))];
                        if (c.endsWith("]")) {
                            if (p === n.V3) throw Error("Arrays are unimplemented in encodeData; use V4 extension");
                            let i = c.slice(0, c.lastIndexOf("[")),
                                s = d.map(n => e(t, r, i, n, p));
                            return ["bytes32", (0, o.arrToBufArr)((0, a.keccak256)((0, f.rawEncode)(s.map(([e]) => e), s.map(([, e]) => e))))]
                        }
                        return [c, d]
                    }(r, y.name, y.type, t[y.name], c);
                    d.push(e), p.push(g)
                }
                return (0, f.rawEncode)(d, p)
            }

            function c(e, t) {
                let r = "",
                    n = d(e, t);
                for (let i of (n.delete(e), [e, ...Array.from(n).sort()])) {
                    if (!t[i]) throw Error(`No type definition specified: ${i}`);
                    r += `${i}(${t[i].map(({name:e,type:t})=>`
                    $ {
                        t
                    }
                    $ {
                        e
                    }
                    `).join(",")})`
                }
                return r
            }

            function d(e, t, r = new Set) {
                if ("string" != typeof e) throw Error(`Invalid findTypeDependencies input ${JSON.stringify(e)}`);
                let n = e.match(/^\w*/u);
                if ([e] = n, r.has(e) || void 0 === t[e]) return r;
                for (let n of (r.add(e), t[e])) d(n.type, t, r);
                return r
            }

            function p(e, t, r, i) {
                u(i, [n.V3, n.V4]);
                let s = h(e, t, r, i),
                    f = (0, a.keccak256)(s);
                return (0, o.arrToBufArr)(f)
            }

            function y(e, t) {
                let r = i.from(c(e, t), "utf-8");
                return (0, o.arrToBufArr)((0, a.keccak256)(r))
            }

            function g(e) {
                let r = {};
                for (let n in t.TYPED_MESSAGE_SCHEMA.properties) e[n] && (r[n] = e[n]);
                return "types" in r && (r.types = Object.assign({
                    EIP712Domain: []
                }, r.types)), r
            }

            function b(e, t) {
                u(t, [n.V3, n.V4]);
                let r = g(e),
                    {
                        domain: i
                    } = r;
                return p("EIP712Domain", i, {
                    EIP712Domain: r.types.EIP712Domain
                }, t)
            }

            function m(e) {
                let t = Error("Expect argument to be non-empty array");
                if ("object" != typeof e || !("length" in e) || !e.length) throw t;
                let r = e.map(function(e) {
                        return "bytes" !== e.type ? e.value : (0, l.legacyToBuffer)(e.value)
                    }),
                    n = e.map(function(e) {
                        return e.type
                    }),
                    i = e.map(function(e) {
                        if (!e.name) throw t;
                        return `${e.type} ${e.name}`
                    });
                return (0, o.arrToBufArr)((0, a.keccak256)((0, f.solidityPack)(["bytes32", "bytes32"], [(0, a.keccak256)((0, f.solidityPack)(Array(e.length).fill("string"), i)), (0, a.keccak256)((0, f.solidityPack)(n, r))])))
            }! function(e) {
                e.V1 = "V1", e.V3 = "V3", e.V4 = "V4"
            }(n = t.SignTypedDataVersion || (t.SignTypedDataVersion = {})), t.TYPED_MESSAGE_SCHEMA = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            }, t.TypedDataUtils = {
                encodeData: h,
                encodeType: c,
                findTypeDependencies: d,
                hashStruct: p,
                hashType: y,
                sanitizeData: g,
                eip712Hash: function(e, t) {
                    u(t, [n.V3, n.V4]);
                    let r = g(e),
                        s = [i.from("1901", "hex")];
                    return s.push(b(e, t)), "EIP712Domain" !== r.primaryType && s.push(p(r.primaryType, r.message, r.types, t)), (0, o.arrToBufArr)((0, a.keccak256)(i.concat(s)))
                },
                eip712DomainHash: b
            }, t.typedSignatureHash = function(e) {
                let t = m(e);
                return (0, o.bufferToHex)(t)
            }, t.signTypedData = function({
                privateKey: e,
                data: r,
                version: i
            }) {
                if (u(i), (0, l.isNullish)(r)) throw Error("Missing data parameter");
                if ((0, l.isNullish)(e)) throw Error("Missing private key parameter");
                let a = i === n.V1 ? m(r) : t.TypedDataUtils.eip712Hash(r, i),
                    s = (0, o.ecsign)(a, e);
                return (0, l.concatSig)((0, o.toBuffer)(s.v), s.r, s.s)
            }, t.recoverTypedSignature = function({
                data: e,
                signature: r,
                version: i
            }) {
                if (u(i), (0, l.isNullish)(e)) throw Error("Missing data parameter");
                if ((0, l.isNullish)(r)) throw Error("Missing signature parameter");
                let a = i === n.V1 ? m(e) : t.TypedDataUtils.eip712Hash(e, i),
                    s = (0, l.recoverPublicKey)(a, r),
                    f = (0, o.publicToAddress)(s);
                return (0, o.bufferToHex)(f)
            }
        },
        73095: (e, t, r) => {
            "use strict";
            r.d(t, {
                Me: () => m,
                _o: () => c,
                bv: () => w,
                pV: () => S,
                wN: () => p
            });
            var n = r(17674),
                i = r(3098),
                o = r(30728),
                a = r(51552),
                s = r(31704),
                f = r(14157);

            function l(e, t) {
                try {
                    return s.nj(e, t), !0
                } catch (e) {
                    return !1
                }
            }
            let u = [{
                    encode(e) {
                        if (2 === e.length && 1 === e[0] && s.aY(e[1]) && "4e73" === n.uh.encode(e[1])) return {
                            type: "p2a",
                            script: a.eF.encode(e)
                        }
                    },
                    decode: e => {
                        if ("p2a" === e.type) return [1, n.uh.decode("4e73")]
                    }
                }, {
                    encode(e) {
                        if (2 === e.length && s.aY(e[0]) && l(e[0], s.Wy.ecdsa) && "CHECKSIG" === e[1]) return {
                            type: "pk",
                            pubkey: e[0]
                        }
                    },
                    decode: e => "pk" === e.type ? [e.pubkey, "CHECKSIG"] : void 0
                }, {
                    encode(e) {
                        if (5 === e.length && "DUP" === e[0] && "HASH160" === e[1] && s.aY(e[2]) && "EQUALVERIFY" === e[3] && "CHECKSIG" === e[4]) return {
                            type: "pkh",
                            hash: e[2]
                        }
                    },
                    decode: e => "pkh" === e.type ? ["DUP", "HASH160", e.hash, "EQUALVERIFY", "CHECKSIG"] : void 0
                }, {
                    encode(e) {
                        if (3 === e.length && "HASH160" === e[0] && s.aY(e[1]) && "EQUAL" === e[2]) return {
                            type: "sh",
                            hash: e[1]
                        }
                    },
                    decode: e => "sh" === e.type ? ["HASH160", e.hash, "EQUAL"] : void 0
                }, {
                    encode(e) {
                        if (2 === e.length && 0 === e[0] && s.aY(e[1]) && 32 === e[1].length) return {
                            type: "wsh",
                            hash: e[1]
                        }
                    },
                    decode: e => "wsh" === e.type ? [0, e.hash] : void 0
                }, {
                    encode(e) {
                        if (2 === e.length && 0 === e[0] && s.aY(e[1]) && 20 === e[1].length) return {
                            type: "wpkh",
                            hash: e[1]
                        }
                    },
                    decode: e => "wpkh" === e.type ? [0, e.hash] : void 0
                }, {
                    encode(e) {
                        let t = e.length - 1;
                        if ("CHECKMULTISIG" !== e[t]) return;
                        let r = e[0],
                            n = e[t - 1];
                        if ("number" != typeof r || "number" != typeof n) return;
                        let i = e.slice(1, -2);
                        if (n === i.length) {
                            for (let e of i)
                                if (!s.aY(e)) return;
                            return {
                                type: "ms",
                                m: r,
                                pubkeys: i
                            }
                        }
                    },
                    decode: e => "ms" === e.type ? [e.m, ...e.pubkeys, e.pubkeys.length, "CHECKMULTISIG"] : void 0
                }, {
                    encode(e) {
                        if (2 === e.length && 1 === e[0] && s.aY(e[1])) return {
                            type: "tr",
                            pubkey: e[1]
                        }
                    },
                    decode: e => "tr" === e.type ? [1, e.pubkey] : void 0
                }, {
                    encode(e) {
                        let t = e.length - 1;
                        if ("CHECKSIG" !== e[t]) return;
                        let r = [];
                        for (let n = 0; n < t; n++) {
                            let i = e[n];
                            if (1 & n) {
                                if ("CHECKSIGVERIFY" !== i || n === t - 1) return;
                                continue
                            }
                            if (!s.aY(i)) return;
                            r.push(i)
                        }
                        return {
                            type: "tr_ns",
                            pubkeys: r
                        }
                    },
                    decode: e => {
                        if ("tr_ns" !== e.type) return;
                        let t = [];
                        for (let r = 0; r < e.pubkeys.length - 1; r++) t.push(e.pubkeys[r], "CHECKSIGVERIFY");
                        return t.push(e.pubkeys[e.pubkeys.length - 1], "CHECKSIG"), t
                    }
                }, {
                    encode(e) {
                        let t = e.length - 1;
                        if ("NUMEQUAL" !== e[t] || "CHECKSIG" !== e[1]) return;
                        let r = [],
                            n = (0, a.zL)(e[t - 1]);
                        if ("number" == typeof n) {
                            for (let n = 0; n < t - 1; n++) {
                                let t = e[n];
                                if (1 & n) {
                                    if (t !== (1 === n ? "CHECKSIG" : "CHECKSIGADD")) throw Error("OutScript.encode/tr_ms: wrong element");
                                    continue
                                }
                                if (!s.aY(t)) throw Error("OutScript.encode/tr_ms: wrong key element");
                                r.push(t)
                            }
                            return {
                                type: "tr_ms",
                                pubkeys: r,
                                m: n
                            }
                        }
                    },
                    decode: e => {
                        if ("tr_ms" !== e.type) return;
                        let t = [e.pubkeys[0], "CHECKSIG"];
                        for (let r = 1; r < e.pubkeys.length; r++) t.push(e.pubkeys[r], "CHECKSIGADD");
                        return t.push(e.m, "NUMEQUAL"), t
                    }
                }, {
                    encode: e => ({
                        type: "unknown",
                        script: a.eF.encode(e)
                    }),
                    decode: e => "unknown" === e.type ? a.eF.decode(e.script) : void 0
                }],
                h = i.Bb(a.eF, i.Lo.match(u)),
                c = i.tf(h, e => {
                    if ("pk" === e.type && !l(e.pubkey, s.Wy.ecdsa)) throw Error("OutScript/pk: wrong key");
                    if (("pkh" === e.type || "sh" === e.type || "wpkh" === e.type) && (!s.aY(e.hash) || 20 !== e.hash.length)) throw Error(`OutScript/${e.type}: wrong hash`);
                    if ("wsh" === e.type && (!s.aY(e.hash) || 32 !== e.hash.length)) throw Error("OutScript/wsh: wrong hash");
                    if ("tr" === e.type && (!s.aY(e.pubkey) || !l(e.pubkey, s.Wy.schnorr))) throw Error("OutScript/tr: wrong taproot public key");
                    if (("ms" === e.type || "tr_ns" === e.type || "tr_ms" === e.type) && !Array.isArray(e.pubkeys)) throw Error("OutScript/multisig: wrong pubkeys array");
                    if ("ms" === e.type) {
                        let t = e.pubkeys.length;
                        for (let t of e.pubkeys)
                            if (!l(t, s.Wy.ecdsa)) throw Error("OutScript/multisig: wrong pubkey");
                        if (e.m <= 0 || t > 16 || e.m > t) throw Error("OutScript/multisig: invalid params")
                    }
                    if ("tr_ns" === e.type || "tr_ms" === e.type) {
                        for (let t of e.pubkeys)
                            if (!l(t, s.Wy.schnorr)) throw Error(`OutScript/${e.type}: wrong pubkey`)
                    }
                    if ("tr_ms" === e.type) {
                        let t = e.pubkeys.length;
                        if (e.m <= 0 || t > 999 || e.m > t) throw Error("OutScript/tr_ms: invalid params")
                    }
                    return e
                });

            function d(e, t) {
                if (!s.ex(e.hash, f.sc(t))) throw Error("checkScript: wsh wrong witnessScript hash");
                let r = c.decode(t);
                if ("tr" === r.type || "tr_ns" === r.type || "tr_ms" === r.type) throw Error(`checkScript: P2${r.type} cannot be wrapped in P2SH`);
                if ("wpkh" === r.type || "sh" === r.type) throw Error(`checkScript: P2${r.type} cannot be wrapped in P2WSH`)
            }

            function p(e, t, r) {
                if (e) {
                    let n = c.decode(e);
                    if ("tr_ns" === n.type || "tr_ms" === n.type || "ms" === n.type || "pk" == n.type) throw Error(`checkScript: non-wrapped ${n.type}`);
                    if ("sh" === n.type && t) {
                        if (!s.ex(n.hash, s.A0(t))) throw Error("checkScript: sh wrong redeemScript hash");
                        let e = c.decode(t);
                        if ("tr" === e.type || "tr_ns" === e.type || "tr_ms" === e.type) throw Error(`checkScript: P2${e.type} cannot be wrapped in P2SH`);
                        if ("sh" === e.type) throw Error("checkScript: P2SH cannot be wrapped in P2SH")
                    }
                    "wsh" === n.type && r && d(n, r)
                }
                if (t) {
                    let e = c.decode(t);
                    "wsh" === e.type && r && d(e, r)
                }
            }
            let y = (e, t = s.pG) => {
                    if (!l(e, s.Wy.ecdsa)) throw Error("P2PKH: invalid publicKey");
                    let r = s.A0(e);
                    return {
                        type: "pkh",
                        script: c.encode({
                            type: "pkh",
                            hash: r
                        }),
                        address: S(t).encode({
                            type: "pkh",
                            hash: r
                        }),
                        hash: r
                    }
                },
                g = (e, t = s.pG) => {
                    if (!l(e, s.Wy.ecdsa)) throw Error("P2WPKH: invalid publicKey");
                    if (65 === e.length) throw Error("P2WPKH: uncompressed public key");
                    let r = s.A0(e);
                    return {
                        type: "wpkh",
                        script: c.encode({
                            type: "wpkh",
                            hash: r
                        }),
                        address: S(t).encode({
                            type: "wpkh",
                            hash: r
                        }),
                        hash: r
                    }
                },
                b = 192,
                m = (e, t = b) => s.m("TapLeaf", new Uint8Array([t]), a.Rg.encode(e));

            function w(e, t, r = s.pG) {
                if ("tr" === e) return function(e, t, r = s.pG, f = !1, u) {
                    if (!e && !t) throw Error("p2tr: should have pubKey or scriptTree (or both)");
                    let h = "string" == typeof e ? n.uh.decode(e) : e || s.ie;
                    if (!l(h, s.Wy.schnorr)) throw Error("p2tr: non-schnorr pubkey");
                    if (t) {
                        let e = function e(t, r = []) {
                                if (!t) throw Error("taprootAddPath: empty tree");
                                if ("leaf" === t.type) return { ...t,
                                    path: r
                                };
                                if ("branch" !== t.type) throw Error(`taprootAddPath: wrong type=${t}`);
                                return { ...t,
                                    path: r,
                                    left: e(t.left, [t.right.hash, ...r]),
                                    right: e(t.right, [t.left.hash, ...r])
                                }
                            }(function e(t, r, o = !1, f) {
                                if (!t) throw Error("taprootHashTree: empty tree");
                                if (Array.isArray(t) && 1 === t.length && (t = t[0]), !Array.isArray(t)) {
                                    let {
                                        leafVersion: e,
                                        script: l
                                    } = t;
                                    if (t.tapLeafScript || t.tapMerkleRoot && !s.ex(t.tapMerkleRoot, i.wg)) throw Error("P2TR: tapRoot leafScript cannot have tree");
                                    let u = "string" == typeof l ? n.uh.decode(l) : l;
                                    if (!s.aY(u)) throw Error(`checkScript: wrong script type=${u}`);
                                    return ! function(e, t, r = !1, n) {
                                        let o = c.decode(e);
                                        if ("unknown" === o.type) {
                                            if (n) {
                                                let t = i.Bb(a.eF, i.Lo.match(n)).decode(e);
                                                if (void 0 !== t) {
                                                    if ("string" != typeof t.type || !t.type.startsWith("tr_")) throw Error(`P2TR: invalid custom type=${t.type}`);
                                                    return
                                                }
                                            }
                                            if (r) return
                                        }
                                        if (!["tr_ns", "tr_ms"].includes(o.type)) throw Error(`P2TR: invalid leaf script=${o.type}`);
                                        if (!r && o.pubkeys)
                                            for (let e of o.pubkeys) {
                                                if (s.ex(e, s.ie)) throw Error("Unspendable taproot key in leaf script");
                                                if (s.ex(e, t)) throw Error("Using P2TR with leaf script with same key as internal key is not supported")
                                            }
                                    }(u, r, o, f), {
                                        type: "leaf",
                                        version: e,
                                        script: u,
                                        hash: m(u, e)
                                    }
                                }
                                if (2 !== t.length && (t = function(e) {
                                        let t = Array.from(e);
                                        for (; t.length >= 2;) {
                                            t.sort((e, t) => (t.weight || 1) - (e.weight || 1));
                                            let e = t.pop(),
                                                r = t.pop(),
                                                n = (r ? .weight || 1) + (e ? .weight || 1);
                                            t.push({
                                                weight: n,
                                                childs: [r ? .childs || r, e ? .childs || e]
                                            })
                                        }
                                        let r = t[0];
                                        return r ? .childs || r
                                    }(t)), 2 !== t.length) throw Error("hashTree: non binary tree!");
                                let l = e(t[0], r, o, f),
                                    u = e(t[1], r, o, f),
                                    [h, d] = [l.hash, u.hash];
                                return -1 === s.Xo(d, h) && ([h, d] = [d, h]), {
                                    type: "branch",
                                    left: l,
                                    right: u,
                                    hash: s.m("TapBranch", h, d)
                                }
                            }(t, h, f, void 0)),
                            l = e.hash,
                            [u, d] = s.gD(h, l),
                            p = (function e(t) {
                                if (!t) throw Error("taprootAddPath: empty tree");
                                if ("leaf" === t.type) return [t];
                                if ("branch" !== t.type) throw Error(`taprootWalkTree: wrong type=${t}`);
                                return [...e(t.left), ...e(t.right)]
                            })(e).map(e => ({ ...e,
                                controlBlock: o.u0.encode({
                                    version: (e.version || b) + d,
                                    internalKey: h,
                                    merklePath: e.path
                                })
                            }));
                        return {
                            type: "tr",
                            script: c.encode({
                                type: "tr",
                                pubkey: u
                            }),
                            address: S(r).encode({
                                type: "tr",
                                pubkey: u
                            }),
                            tweakedPubkey: u,
                            tapInternalKey: h,
                            leaves: p,
                            tapLeafScript: p.map(e => [o.u0.decode(e.controlBlock), s.Id(e.script, new Uint8Array([e.version || b]))]),
                            tapMerkleRoot: l
                        }
                    } {
                        let e = s.gD(h, i.wg)[0];
                        return {
                            type: "tr",
                            script: c.encode({
                                type: "tr",
                                pubkey: e
                            }),
                            address: S(r).encode({
                                type: "tr",
                                pubkey: e
                            }),
                            tweakedPubkey: e,
                            tapInternalKey: h
                        }
                    }
                }(s.vl(t), void 0, r).address;
                let f = s.E1(t);
                if ("pkh" === e) return y(f, r).address;
                if ("wpkh" === e) return g(f, r).address;
                throw Error(`getAddress: unknown type=${e}`)
            }
            let v = (0, n.rg)(f.sc);

            function _(e, t) {
                if (t.length < 2 || t.length > 40) throw Error("Witness: invalid length");
                if (e > 16) throw Error("Witness: invalid version");
                if (0 === e && 20 !== t.length && 32 !== t.length) throw Error("Witness: invalid length for version")
            }

            function x(e, t, r = s.pG) {
                _(e, t);
                let i = 0 === e ? n.I : n.p2;
                return i.encode(r.bech32, [e].concat(i.toWords(t)))
            }

            function E(e, t) {
                return v.encode(s.Id(Uint8Array.from(t), e))
            }

            function S(e = s.pG) {
                return {
                    encode(t) {
                        let {
                            type: r
                        } = t;
                        if ("wpkh" === r || "wsh" === r) return x(0, t.hash, e);
                        if ("tr" === r) return x(1, t.pubkey, e);
                        if ("pkh" === r) return E(t.hash, [e.pubKeyHash]);
                        if ("sh" === r) return E(t.hash, [e.scriptHash]);
                        throw Error(`Unknown address type=${r}`)
                    },
                    decode(t) {
                        if (t.length < 14 || t.length > 74) throw Error("Invalid address length");
                        if (e.bech32 && t.toLowerCase().startsWith(`${e.bech32}1`)) {
                            let r;
                            try {
                                if (r = n.I.decode(t), 0 !== r.words[0]) throw Error(`bech32: wrong version=${r.words[0]}`)
                            } catch (e) {
                                if (0 === (r = n.p2.decode(t)).words[0]) throw Error(`bech32m: wrong version=${r.words[0]}`)
                            }
                            if (r.prefix !== e.bech32) throw Error(`wrong bech32 prefix=${r.prefix}`);
                            let [i, ...o] = r.words, a = n.I.fromWords(o);
                            if (_(i, a), 0 === i && 32 === a.length) return {
                                type: "wsh",
                                hash: a
                            };
                            if (0 === i && 20 === a.length) return {
                                type: "wpkh",
                                hash: a
                            };
                            if (1 === i && 32 === a.length) return {
                                type: "tr",
                                pubkey: a
                            };
                            else throw Error("Unknown witness program")
                        }
                        let r = v.decode(t);
                        if (21 !== r.length) throw Error("Invalid base58 address");
                        if (r[0] === e.pubKeyHash) return {
                            type: "pkh",
                            hash: r.slice(1)
                        };
                        if (r[0] === e.scriptHash) return {
                            type: "sh",
                            hash: r.slice(1)
                        };
                        throw Error(`Invalid address prefix=${r[0]}`)
                    }
                }
            }
        },
        74122: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha224 = t.sha256 = void 0;
            let n = r(83515),
                i = r(15906),
                o = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
                a = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]),
                s = new Uint32Array(64);
            class f extends n.HashMD {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | a[0], this.B = 0 | a[1], this.C = 0 | a[2], this.D = 0 | a[3], this.E = 0 | a[4], this.F = 0 | a[5], this.G = 0 | a[6], this.H = 0 | a[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: a,
                        H: s
                    } = this;
                    return [e, t, r, n, i, o, a, s]
                }
                set(e, t, r, n, i, o, a, s) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) s[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = s[e - 15],
                            r = s[e - 2],
                            n = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ t >>> 3,
                            o = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ r >>> 10;
                        s[e] = o + s[e - 7] + n + s[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: a,
                        C: f,
                        D: l,
                        E: u,
                        F: h,
                        G: c,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = d + ((0, i.rotr)(u, 6) ^ (0, i.rotr)(u, 11) ^ (0, i.rotr)(u, 25)) + (0, n.Chi)(u, h, c) + o[e] + s[e] | 0,
                            p = ((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) + (0, n.Maj)(r, a, f) | 0;
                        d = c, c = h, h = u, u = l + t | 0, l = f, f = a, a = r, r = t + p | 0
                    }
                    r = r + this.A | 0, a = a + this.B | 0, f = f + this.C | 0, l = l + this.D | 0, u = u + this.E | 0, h = h + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, a, f, l, u, h, c, d)
                }
                roundClean() {
                    s.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class l extends f {
                constructor() {
                    super(), this.A = -0x3efa6128, this.B = 0x367cd507, this.C = 0x3070dd17, this.D = -0x8f1a6c7, this.E = -4191439, this.F = 0x68581511, this.G = 0x64f98fa7, this.H = -0x4105b05c, this.outputLen = 28
                }
            }
            t.sha256 = (0, i.wrapConstructor)(() => new f), t.sha224 = (0, i.wrapConstructor)(() => new l)
        },
        75055: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeToCurve = t.hashToCurve = t.schnorr = t.secp256k1 = void 0;
            let n = r(74122),
                i = r(15906),
                o = r(89395),
                a = r(11512),
                s = r(24738),
                f = r(57953),
                l = r(64976),
                u = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                h = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                c = BigInt(1),
                d = BigInt(2),
                p = (e, t) => (e + t / d) / t;

            function y(e) {
                let t = BigInt(3),
                    r = BigInt(6),
                    n = BigInt(11),
                    i = BigInt(22),
                    o = BigInt(23),
                    a = BigInt(44),
                    f = BigInt(88),
                    l = e * e * e % u,
                    h = l * l * e % u,
                    c = (0, s.pow2)(h, t, u) * h % u,
                    p = (0, s.pow2)(c, t, u) * h % u,
                    y = (0, s.pow2)(p, d, u) * l % u,
                    b = (0, s.pow2)(y, n, u) * y % u,
                    m = (0, s.pow2)(b, i, u) * b % u,
                    w = (0, s.pow2)(m, a, u) * m % u,
                    v = (0, s.pow2)(w, f, u) * w % u,
                    _ = (0, s.pow2)(v, a, u) * m % u,
                    x = (0, s.pow2)(_, t, u) * h % u,
                    E = (0, s.pow2)(x, o, u) * b % u,
                    S = (0, s.pow2)(E, r, u) * l % u,
                    A = (0, s.pow2)(S, d, u);
                if (!g.eql(g.sqr(A), e)) throw Error("Cannot find square root");
                return A
            }
            let g = (0, s.Field)(u, void 0, void 0, {
                sqrt: y
            });
            t.secp256k1 = (0, o.createCurve)({
                a: BigInt(0),
                b: BigInt(7),
                Fp: g,
                n: h,
                Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                h: BigInt(1),
                lowS: !0,
                endo: {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar: e => {
                        let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                            r = -c * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                            n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                            i = BigInt("0x100000000000000000000000000000000"),
                            o = p(t * e, h),
                            a = p(-r * e, h),
                            f = (0, s.mod)(e - o * t - a * n, h),
                            l = (0, s.mod)(-o * r - a * t, h),
                            u = f > i,
                            d = l > i;
                        if (u && (f = h - f), d && (l = h - l), f > i || l > i) throw Error("splitScalar: Endomorphism failed, k=" + e);
                        return {
                            k1neg: u,
                            k1: f,
                            k2neg: d,
                            k2: l
                        }
                    }
                }
            }, n.sha256);
            let b = BigInt(0),
                m = e => "bigint" == typeof e && b < e && e < u,
                w = e => "bigint" == typeof e && b < e && e < h,
                v = {};

            function _(e, ...t) {
                let r = v[e];
                if (void 0 === r) {
                    let t = (0, n.sha256)(Uint8Array.from(e, e => e.charCodeAt(0)));
                    r = (0, f.concatBytes)(t, t), v[e] = r
                }
                return (0, n.sha256)((0, f.concatBytes)(r, ...t))
            }
            let x = e => e.toRawBytes(!0).slice(1),
                E = e => (0, f.numberToBytesBE)(e, 32),
                S = e => (0, s.mod)(e, u),
                A = e => (0, s.mod)(e, h),
                k = t.secp256k1.ProjectivePoint,
                B = (e, t, r) => k.BASE.multiplyAndAddUnsafe(e, t, r);

            function O(e) {
                let r = t.secp256k1.utils.normPrivateKeyToScalar(e),
                    n = k.fromPrivateKey(r);
                return {
                    scalar: n.hasEvenY() ? r : A(-r),
                    bytes: x(n)
                }
            }

            function I(e) {
                if (!m(e)) throw Error("bad x: need 0 < x < p");
                let t = S(e * e),
                    r = y(S(t * e + BigInt(7)));
                r % d !== b && (r = S(-r));
                let n = new k(e, r, c);
                return n.assertValidity(), n
            }

            function T(...e) {
                return A((0, f.bytesToNumberBE)(_("BIP0340/challenge", ...e)))
            }

            function R(e, t, r) {
                let n = (0, f.ensureBytes)("signature", e, 64),
                    i = (0, f.ensureBytes)("message", t),
                    o = (0, f.ensureBytes)("publicKey", r, 32);
                try {
                    let e = I((0, f.bytesToNumberBE)(o)),
                        t = (0, f.bytesToNumberBE)(n.subarray(0, 32));
                    if (!m(t)) return !1;
                    let r = (0, f.bytesToNumberBE)(n.subarray(32, 64));
                    if (!w(r)) return !1;
                    let a = T(E(t), x(e), i),
                        s = B(e, r, A(-a));
                    if (!s || !s.hasEvenY() || s.toAffine().x !== t) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }
            t.schnorr = {
                getPublicKey: function(e) {
                    return O(e).bytes
                },
                sign: function(e, t, r = (0, i.randomBytes)(32)) {
                    let n = (0, f.ensureBytes)("message", e),
                        {
                            bytes: o,
                            scalar: a
                        } = O(t),
                        s = (0, f.ensureBytes)("auxRand", r, 32),
                        l = E(a ^ (0, f.bytesToNumberBE)(_("BIP0340/aux", s))),
                        u = _("BIP0340/nonce", l, o, n),
                        h = A((0, f.bytesToNumberBE)(u));
                    if (h === b) throw Error("sign failed: k is zero");
                    let {
                        bytes: c,
                        scalar: d
                    } = O(h), p = T(c, o, n), y = new Uint8Array(64);
                    if (y.set(c, 0), y.set(E(A(d + p * a)), 32), !R(y, n, o)) throw Error("sign: Invalid signature produced");
                    return y
                },
                verify: R,
                utils: {
                    randomPrivateKey: t.secp256k1.utils.randomPrivateKey,
                    lift_x: I,
                    pointToBytes: x,
                    numberToBytesBE: f.numberToBytesBE,
                    bytesToNumberBE: f.bytesToNumberBE,
                    taggedHash: _,
                    mod: s.mod
                }
            };
            let M = (0, a.isogenyMap)(g, [
                    ["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],
                    ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"],
                    ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],
                    ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]
                ].map(e => e.map(e => BigInt(e)))),
                P = (0, l.mapToCurveSimpleSWU)(g, {
                    A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
                    B: BigInt("1771"),
                    Z: g.create(BigInt("-11"))
                }),
                L = (0, a.createHasher)(t.secp256k1.ProjectivePoint, e => {
                    let {
                        x: t,
                        y: r
                    } = P(g.create(e[0]));
                    return M(t, r)
                }, {
                    DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
                    encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
                    p: g.ORDER,
                    m: 1,
                    k: 128,
                    expand: "xmd",
                    hash: n.sha256
                });
            t.hashToCurve = L.hashToCurve, t.encodeToCurve = L.encodeToCurve
        },
        75901: (e, t, r) => {
            "use strict";
            r.d(t, {
                s9: () => f
            });
            var n = r(5003),
                i = r(66551);
            let o = (0, r(57551).D0)(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),
                a = o.create(BigInt("-3")),
                s = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
                f = (0, i.s)({
                    a: a,
                    b: s,
                    Fp: o,
                    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
                    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
                    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
                    h: BigInt(1),
                    lowS: !1
                }, n.sc)
        },
        78030: e => {
            "use strict";
            e.exports = function(e) {
                return e != e
            }
        },
        79376: function(e, t, r) {
            "use strict";
            var n = r(51642).Buffer,
                i = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(t, r);
                    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, i)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
                    return o(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getEncryptionPublicKey = t.decryptSafely = t.decrypt = t.encryptSafely = t.encrypt = void 0;
            let s = a(r(88934)),
                f = a(r(27835)),
                l = r(91262);

            function u({
                publicKey: e,
                data: t,
                version: r
            }) {
                if ((0, l.isNullish)(e)) throw Error("Missing publicKey parameter");
                if ((0, l.isNullish)(t)) throw Error("Missing data parameter");
                if ((0, l.isNullish)(r)) throw Error("Missing version parameter");
                if ("x25519-xsalsa20-poly1305" === r) {
                    let r;
                    if ("string" != typeof t) throw Error("Message data must be given as a string");
                    let n = s.box.keyPair();
                    try {
                        r = f.decodeBase64(e)
                    } catch (e) {
                        throw Error("Bad public key")
                    }
                    let i = f.decodeUTF8(t),
                        o = s.randomBytes(s.box.nonceLength),
                        a = s.box(i, o, r, n.secretKey);
                    return {
                        version: "x25519-xsalsa20-poly1305",
                        nonce: f.encodeBase64(o),
                        ephemPublicKey: f.encodeBase64(n.publicKey),
                        ciphertext: f.encodeBase64(a)
                    }
                }
                throw Error("Encryption type/version not supported")
            }

            function h({
                encryptedData: e,
                privateKey: t
            }) {
                if ((0, l.isNullish)(e)) throw Error("Missing encryptedData parameter");
                if ((0, l.isNullish)(t)) throw Error("Missing privateKey parameter");
                if ("x25519-xsalsa20-poly1305" === e.version) {
                    let r = c(t),
                        n = s.box.keyPair.fromSecretKey(r).secretKey,
                        i = f.decodeBase64(e.nonce),
                        o = f.decodeBase64(e.ciphertext),
                        a = f.decodeBase64(e.ephemPublicKey),
                        l = s.box.open(o, i, a, n);
                    try {
                        if (!l) throw Error();
                        let e = f.encodeUTF8(l);
                        if (!e) throw Error();
                        return e
                    } catch (e) {
                        if (e && "string" == typeof e.message && e.message.length) throw Error(`Decryption failed: ${e.message}`);
                        throw Error("Decryption failed.")
                    }
                }
                throw Error("Encryption type/version not supported.")
            }

            function c(e) {
                let t = n.from(e, "hex").toString("base64");
                return f.decodeBase64(t)
            }
            t.encrypt = u, t.encryptSafely = function({
                publicKey: e,
                data: t,
                version: r
            }) {
                if ((0, l.isNullish)(e)) throw Error("Missing publicKey parameter");
                if ((0, l.isNullish)(t)) throw Error("Missing data parameter");
                if ((0, l.isNullish)(r)) throw Error("Missing version parameter");
                if ("object" == typeof t && t && "toJSON" in t) throw Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
                let i = {
                        data: t,
                        padding: ""
                    },
                    o = n.byteLength(JSON.stringify(i), "utf-8") % 2048,
                    a = 0;
                return o > 0 && (a = 2048 - o - 16), i.padding = "0".repeat(a), u({
                    publicKey: e,
                    data: JSON.stringify(i),
                    version: r
                })
            }, t.decrypt = h, t.decryptSafely = function({
                encryptedData: e,
                privateKey: t
            }) {
                if ((0, l.isNullish)(e)) throw Error("Missing encryptedData parameter");
                if ((0, l.isNullish)(t)) throw Error("Missing privateKey parameter");
                return JSON.parse(h({
                    encryptedData: e,
                    privateKey: t
                })).data
            }, t.getEncryptionPublicKey = function(e) {
                let t = c(e),
                    r = s.box.keyPair.fromSecretKey(t).publicKey;
                return f.encodeBase64(r)
            }
        },
        81713: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.accountBodyToRLP = t.accountBodyToSlim = t.accountBodyFromSlim = t.isZeroAddress = t.zeroAddress = t.importPublic = t.privateToAddress = t.privateToPublic = t.publicToAddress = t.pubToAddress = t.isValidPublic = t.isValidPrivate = t.generateAddress2 = t.generateAddress = t.isValidChecksumAddress = t.toChecksumAddress = t.isValidAddress = t.Account = void 0;
            let i = r(62504),
                o = r(30150),
                a = r(88680),
                s = r(39069),
                f = r(50797),
                l = r(93263),
                u = r(54403),
                h = r(61363),
                c = BigInt(0);
            class d {
                constructor(e = c, t = c, r = l.KECCAK256_RLP, n = l.KECCAK256_NULL) {
                    this.nonce = e, this.balance = t, this.storageRoot = r, this.codeHash = n, this._validate()
                }
                static fromAccountData(e) {
                    let {
                        nonce: t,
                        balance: r,
                        storageRoot: n,
                        codeHash: i
                    } = e;
                    return new d(void 0 !== t ? (0, f.bufferToBigInt)((0, f.toBuffer)(t)) : void 0, void 0 !== r ? (0, f.bufferToBigInt)((0, f.toBuffer)(r)) : void 0, void 0 !== n ? (0, f.toBuffer)(n) : void 0, void 0 !== i ? (0, f.toBuffer)(i) : void 0)
                }
                static fromRlpSerializedAccount(e) {
                    let t = (0, f.arrToBufArr)(i.RLP.decode(Uint8Array.from(e)));
                    if (!Array.isArray(t)) throw Error("Invalid serialized account input. Must be array");
                    return this.fromValuesArray(t)
                }
                static fromValuesArray(e) {
                    let [t, r, n, i] = e;
                    return new d((0, f.bufferToBigInt)(t), (0, f.bufferToBigInt)(r), n, i)
                }
                _validate() {
                    if (this.nonce < c) throw Error("nonce must be greater than zero");
                    if (this.balance < c) throw Error("balance must be greater than zero");
                    if (32 !== this.storageRoot.length) throw Error("storageRoot must have a length of 32");
                    if (32 !== this.codeHash.length) throw Error("codeHash must have a length of 32")
                }
                raw() {
                    return [(0, f.bigIntToUnpaddedBuffer)(this.nonce), (0, f.bigIntToUnpaddedBuffer)(this.balance), this.storageRoot, this.codeHash]
                }
                serialize() {
                    return n.from(i.RLP.encode((0, f.bufArrToArr)(this.raw())))
                }
                isContract() {
                    return !this.codeHash.equals(l.KECCAK256_NULL)
                }
                isEmpty() {
                    return this.balance === c && this.nonce === c && this.codeHash.equals(l.KECCAK256_NULL)
                }
            }

            function p(e) {
                let [t, r, n, i] = e;
                return [t, r, 0 === (0, f.arrToBufArr)(n).length ? l.KECCAK256_RLP : n, 0 === (0, f.arrToBufArr)(i).length ? l.KECCAK256_NULL : i]
            }
            t.Account = d, t.isValidAddress = function(e) {
                try {
                    (0, u.assertIsString)(e)
                } catch (e) {
                    return !1
                }
                return /^0x[0-9a-fA-F]{40}$/.test(e)
            }, t.toChecksumAddress = function(e, t) {
                (0, u.assertIsHexString)(e);
                let r = (0, h.stripHexPrefix)(e).toLowerCase(),
                    i = "";
                void 0 !== t && (i = (0, f.bufferToBigInt)((0, f.toBuffer)(t)).toString() + "0x");
                let a = n.from(i + r, "utf8"),
                    l = (0, s.bytesToHex)((0, o.keccak256)(a)),
                    c = "0x";
                for (let e = 0; e < r.length; e++) parseInt(l[e], 16) >= 8 ? c += r[e].toUpperCase() : c += r[e];
                return c
            }, t.isValidChecksumAddress = function(e, r) {
                return (0, t.isValidAddress)(e) && (0, t.toChecksumAddress)(e, r) === e
            }, t.generateAddress = function(e, t) {
                return ((0, u.assertIsBuffer)(e), (0, u.assertIsBuffer)(t), (0, f.bufferToBigInt)(t) === BigInt(0)) ? n.from((0, o.keccak256)(i.RLP.encode((0, f.bufArrToArr)([e, null])))).slice(-20) : n.from((0, o.keccak256)(i.RLP.encode((0, f.bufArrToArr)([e, t])))).slice(-20)
            }, t.generateAddress2 = function(e, t, r) {
                if ((0, u.assertIsBuffer)(e), (0, u.assertIsBuffer)(t), (0, u.assertIsBuffer)(r), 20 !== e.length) throw Error("Expected from to be of length 20");
                if (32 !== t.length) throw Error("Expected salt to be of length 32");
                let i = (0, o.keccak256)(n.concat([n.from("ff", "hex"), e, t, (0, o.keccak256)(r)]));
                return (0, f.toBuffer)(i).slice(-20)
            }, t.isValidPrivate = function(e) {
                return a.secp256k1.utils.isValidPrivateKey(e)
            }, t.isValidPublic = function(e, t = !1) {
                if ((0, u.assertIsBuffer)(e), 64 === e.length) try {
                    return a.secp256k1.ProjectivePoint.fromHex(n.concat([n.from([4]), e])), !0
                } catch (e) {
                    return !1
                }
                if (!t) return !1;
                try {
                    return a.secp256k1.ProjectivePoint.fromHex(e), !0
                } catch (e) {
                    return !1
                }
            }, t.pubToAddress = function(e, t = !1) {
                if ((0, u.assertIsBuffer)(e), t && 64 !== e.length && (e = n.from(a.secp256k1.ProjectivePoint.fromHex(e).toRawBytes(!1).slice(1))), 64 !== e.length) throw Error("Expected pubKey to be of length 64");
                return n.from((0, o.keccak256)(e)).slice(-20)
            }, t.publicToAddress = t.pubToAddress, t.privateToPublic = function(e) {
                return (0, u.assertIsBuffer)(e), n.from(a.secp256k1.ProjectivePoint.fromPrivateKey(e).toRawBytes(!1).slice(1))
            }, t.privateToAddress = function(e) {
                return (0, t.publicToAddress)((0, t.privateToPublic)(e))
            }, t.importPublic = function(e) {
                return (0, u.assertIsBuffer)(e), 64 !== e.length && (e = n.from(a.secp256k1.ProjectivePoint.fromHex(e).toRawBytes(!1).slice(1))), e
            }, t.zeroAddress = function() {
                let e = (0, f.zeros)(20);
                return (0, f.bufferToHex)(e)
            }, t.isZeroAddress = function(e) {
                try {
                    (0, u.assertIsString)(e)
                } catch (e) {
                    return !1
                }
                return (0, t.zeroAddress)() === e
            }, t.accountBodyFromSlim = p;
            let y = new Uint8Array(0);
            t.accountBodyToSlim = function(e) {
                let [t, r, n, i] = e;
                return [t, r, (0, f.arrToBufArr)(n).equals(l.KECCAK256_RLP) ? y : n, (0, f.arrToBufArr)(i).equals(l.KECCAK256_NULL) ? y : i]
            }, t.accountBodyToRLP = function(e, t = !0) {
                let r = t ? p(e) : e;
                return (0, f.arrToBufArr)(i.RLP.encode(r))
            }
        },
        81844: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hashPersonalMessage = t.isValidSignature = t.fromRpcSig = t.toCompactSig = t.toRpcSig = t.ecrecover = t.ecsign = void 0;
            let i = r(30150),
                o = r(88680),
                a = r(50797),
                s = r(93263),
                f = r(54403);

            function l(e, t) {
                return e === BigInt(0) || e === BigInt(1) ? e : void 0 === t ? e - BigInt(27) : e - (t * BigInt(2) + BigInt(35))
            }

            function u(e) {
                return e === BigInt(0) || e === BigInt(1)
            }
            t.ecsign = function(e, t, r) {
                let i = o.secp256k1.sign(e, t),
                    a = i.toCompactRawBytes(),
                    s = n.from(a.slice(0, 32));
                return {
                    r: s,
                    s: n.from(a.slice(32, 64)),
                    v: void 0 === r ? BigInt(i.recovery + 27) : BigInt(i.recovery + 35) + BigInt(r) * BigInt(2)
                }
            }, t.ecrecover = function(e, t, r, i, s) {
                let f = n.concat([(0, a.setLengthLeft)(r, 32), (0, a.setLengthLeft)(i, 32)], 64),
                    h = l(t, s);
                if (!u(h)) throw Error("Invalid signature v value");
                let c = o.secp256k1.Signature.fromCompact(f).addRecoveryBit(Number(h)).recoverPublicKey(e);
                return n.from(c.toRawBytes(!1).slice(1))
            }, t.toRpcSig = function(e, t, r, i) {
                if (!u(l(e, i))) throw Error("Invalid signature v value");
                return (0, a.bufferToHex)(n.concat([(0, a.setLengthLeft)(t, 32), (0, a.setLengthLeft)(r, 32), (0, a.toBuffer)(e)]))
            }, t.toCompactSig = function(e, t, r, i) {
                if (!u(l(e, i))) throw Error("Invalid signature v value");
                let o = r;
                return (e > BigInt(28) && e % BigInt(2) === BigInt(1) || e === BigInt(1) || e === BigInt(28)) && (o = n.from(r), o[0] |= 128), (0, a.bufferToHex)(n.concat([(0, a.setLengthLeft)(t, 32), (0, a.setLengthLeft)(o, 32)]))
            }, t.fromRpcSig = function(e) {
                let t, r, n;
                let i = (0, a.toBuffer)(e);
                if (i.length >= 65) t = i.slice(0, 32), r = i.slice(32, 64), n = (0, a.bufferToBigInt)(i.slice(64));
                else if (64 === i.length) t = i.slice(0, 32), r = i.slice(32, 64), n = BigInt((0, a.bufferToInt)(i.slice(32, 33)) >> 7), r[0] &= 127;
                else throw Error("Invalid signature length");
                return n < 27 && (n += BigInt(27)), {
                    v: n,
                    r: t,
                    s: r
                }
            }, t.isValidSignature = function(e, t, r, n = !0, i) {
                if (32 !== t.length || 32 !== r.length || !u(l(e, i))) return !1;
                let o = (0, a.bufferToBigInt)(t),
                    f = (0, a.bufferToBigInt)(r);
                return o !== BigInt(0) && !(o >= s.SECP256K1_ORDER) && f !== BigInt(0) && !(f >= s.SECP256K1_ORDER) && (!n || !(f >= s.SECP256K1_ORDER_DIV_2))
            }, t.hashPersonalMessage = function(e) {
                (0, f.assertIsBuffer)(e);
                let t = n.from(`\u0019Ethereum Signed Message:
${e.length}`, "utf-8");
                return n.from((0, i.keccak256)(n.concat([t, e])))
            }
        },
        83059: (e, t, r) => {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toType = t.TypeOutput = void 0;
            let i = r(50797),
                o = r(61363);
            ! function(e) {
                e[e.Number = 0] = "Number", e[e.BigInt = 1] = "BigInt", e[e.Buffer = 2] = "Buffer", e[e.PrefixedHexString = 3] = "PrefixedHexString"
            }(n = t.TypeOutput || (t.TypeOutput = {})), t.toType = function(e, t) {
                if (null === e) return null;
                if (void 0 === e) return;
                if ("string" != typeof e || (0, o.isHexString)(e)) {
                    if ("number" == typeof e && !Number.isSafeInteger(e)) throw Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)")
                } else throw Error(`A string must be provided with a 0x-prefix, given: ${e}`);
                let r = (0, i.toBuffer)(e);
                switch (t) {
                    case n.Buffer:
                        return r;
                    case n.BigInt:
                        return (0, i.bufferToBigInt)(r);
                    case n.Number:
                        {
                            let e = (0, i.bufferToBigInt)(r);
                            if (e > BigInt(Number.MAX_SAFE_INTEGER)) throw Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                            return Number(e)
                        }
                    case n.PrefixedHexString:
                        return (0, i.bufferToHex)(r);
                    default:
                        throw Error("unknown outputType")
                }
            }
        },
        83515: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HashMD = t.Maj = t.Chi = void 0;
            let n = r(34116),
                i = r(15906);
            t.Chi = (e, t, r) => e & t ^ ~e & r, t.Maj = (e, t, r) => e & t ^ e & r ^ t & r;
            class o extends i.Hash {
                constructor(e, t, r, n) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.createView)(this.buffer)
                }
                update(e) {
                    (0, n.exists)(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: o
                    } = this, a = (e = (0, i.toBytes)(e)).length;
                    for (let n = 0; n < a;) {
                        let s = Math.min(o - this.pos, a - n);
                        if (s === o) {
                            let t = (0, i.createView)(e);
                            for (; o <= a - n; n += o) this.process(t, n);
                            continue
                        }
                        r.set(e.subarray(n, n + s), this.pos), this.pos += s, n += s, this.pos === o && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, n.exists)(this), (0, n.output)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: o,
                        isLE: a
                    } = this, {
                        pos: s
                    } = this;
                    t[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), s = 0);
                    for (let e = s; e < o; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            o = BigInt(0xffffffff),
                            a = Number(r >> i & o),
                            s = Number(r & o),
                            f = 4 * !!n,
                            l = 4 * !n;
                        e.setUint32(t + f, a, n), e.setUint32(t + l, s, n)
                    }(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0);
                    let f = (0, i.createView)(e),
                        l = this.outputLen;
                    if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let u = l / 4,
                        h = this.get();
                    if (u > h.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < u; e++) f.setUint32(4 * e, h[e], a)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: a
                    } = this;
                    return e.length = n, e.pos = a, e.finished = i, e.destroyed = o, n % t && e.buffer.set(r), e
                }
            }
            t.HashMD = o
        },
        84080: (e, t, r) => {
            "use strict";
            r.d(t, {
                Vw: () => x,
                DO: () => a,
                CC: () => f,
                sd: () => s,
                Fe: () => o,
                Ht: () => l,
                My: () => g,
                uH: () => u,
                Id: () => _,
                qj: () => E,
                O8: () => h,
                aT: () => w,
                aY: () => i,
                po: () => S,
                aZ: () => d,
                Ow: () => c,
                ZJ: () => v
            });
            let n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;

            function i(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function o(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
            }

            function a(e, ...t) {
                if (!i(e)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
            }

            function s(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.createHasher");
                o(e.outputLen), o(e.blockLen)
            }

            function f(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function l(e, t) {
                a(e);
                let r = t.outputLen;
                if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
            }

            function u(...e) {
                for (let t = 0; t < e.length; t++) e[t].fill(0)
            }

            function h(e) {
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }

            function c(e, t) {
                return e << 32 - t | e >>> t
            }

            function d(e, t) {
                return e << t | e >>> 32 - t >>> 0
            }
            let p = "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex,
                y = Array.from({
                    length: 256
                }, (e, t) => t.toString(16).padStart(2, "0"));

            function g(e) {
                if (a(e), p) return e.toHex();
                let t = "";
                for (let r = 0; r < e.length; r++) t += y[e[r]];
                return t
            }
            let b = {
                _0: 48,
                _9: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function m(e) {
                return e >= b._0 && e <= b._9 ? e - b._0 : e >= b.A && e <= b.F ? e - (b.A - 10) : e >= b.a && e <= b.f ? e - (b.a - 10) : void 0
            }

            function w(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                if (p) return Uint8Array.fromHex(e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = m(e.charCodeAt(i)),
                        o = m(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    n[t] = 16 * r + o
                }
                return n
            }

            function v(e) {
                return "string" == typeof e && (e = function(e) {
                    if ("string" != typeof e) throw Error("string expected");
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e)), a(e), e
            }

            function _(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    a(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }
            class x {}

            function E(e) {
                let t = t => e().update(v(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }

            function S(e = 32) {
                if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(e));
                if (n && "function" == typeof n.randomBytes) return Uint8Array.from(n.randomBytes(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        84781: (e, t, r) => {
            "use strict";
            var n = r(48203),
                i = r(93529);
            e.exports = function() {
                var e = n();
                return i(Object, {
                    is: e
                }, {
                    is: function() {
                        return Object.is !== e
                    }
                }), e
            }
        },
        88680: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1 = void 0;
            var n = r(75055);
            Object.defineProperty(t, "secp256k1", {
                enumerable: !0,
                get: function() {
                    return n.secp256k1
                }
            })
        },
        89343: (e, t, r) => {
            var n = r(51642).Buffer,
                i = r(29143);
            ! function() {
                "use strict";
                var t = {
                        742: function(e, t, r) {
                            var o = r(491),
                                a = r(562),
                                s = r(450),
                                f = r(324),
                                l = r(320);
                            for (var u in l) t[u] = l[u];

                            function h(e) {
                                if ("number" != typeof e || e < t.DEFLATE || e > t.UNZIP) throw TypeError("Bad argument");
                                this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = e, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0
                            }
                            t.NONE = 0, t.DEFLATE = 1, t.INFLATE = 2, t.GZIP = 3, t.GUNZIP = 4, t.DEFLATERAW = 5, t.INFLATERAW = 6, t.UNZIP = 7, h.prototype.close = function() {
                                if (this.write_in_progress) {
                                    this.pending_close = !0;
                                    return
                                }
                                this.pending_close = !1, o(this.init_done, "close before init"), o(this.mode <= t.UNZIP), this.mode === t.DEFLATE || this.mode === t.GZIP || this.mode === t.DEFLATERAW ? s.deflateEnd(this.strm) : (this.mode === t.INFLATE || this.mode === t.GUNZIP || this.mode === t.INFLATERAW || this.mode === t.UNZIP) && f.inflateEnd(this.strm), this.mode = t.NONE, this.dictionary = null
                            }, h.prototype.write = function(e, t, r, n, i, o, a) {
                                return this._write(!0, e, t, r, n, i, o, a)
                            }, h.prototype.writeSync = function(e, t, r, n, i, o, a) {
                                return this._write(!1, e, t, r, n, i, o, a)
                            }, h.prototype._write = function(e, r, a, s, f, l, u, h) {
                                if (o.equal(arguments.length, 8), o(this.init_done, "write before init"), o(this.mode !== t.NONE, "already finalized"), o.equal(!1, this.write_in_progress, "write already in progress"), o.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, o.equal(!1, void 0 === r, "must provide flush value"), this.write_in_progress = !0, r !== t.Z_NO_FLUSH && r !== t.Z_PARTIAL_FLUSH && r !== t.Z_SYNC_FLUSH && r !== t.Z_FULL_FLUSH && r !== t.Z_FINISH && r !== t.Z_BLOCK) throw Error("Invalid flush value");
                                if (null == a && (a = n.alloc(0), f = 0, s = 0), this.strm.avail_in = f, this.strm.input = a, this.strm.next_in = s, this.strm.avail_out = h, this.strm.output = l, this.strm.next_out = u, this.flush = r, !e) return (this._process(), this._checkError()) ? this._afterSync() : void 0;
                                var c = this;
                                return i.nextTick(function() {
                                    c._process(), c._after()
                                }), this
                            }, h.prototype._afterSync = function() {
                                var e = this.strm.avail_out,
                                    t = this.strm.avail_in;
                                return this.write_in_progress = !1, [t, e]
                            }, h.prototype._process = function() {
                                var e = null;
                                switch (this.mode) {
                                    case t.DEFLATE:
                                    case t.GZIP:
                                    case t.DEFLATERAW:
                                        this.err = s.deflate(this.strm, this.flush);
                                        break;
                                    case t.UNZIP:
                                        switch (this.strm.avail_in > 0 && (e = this.strm.next_in), this.gzip_id_bytes_read) {
                                            case 0:
                                                if (null === e) break;
                                                if (31 === this.strm.input[e]) {
                                                    if (this.gzip_id_bytes_read = 1, e++, 1 === this.strm.avail_in) break
                                                } else {
                                                    this.mode = t.INFLATE;
                                                    break
                                                }
                                            case 1:
                                                if (null === e) break;
                                                139 === this.strm.input[e] ? (this.gzip_id_bytes_read = 2, this.mode = t.GUNZIP) : this.mode = t.INFLATE;
                                                break;
                                            default:
                                                throw Error("invalid number of gzip magic number bytes read")
                                        }
                                    case t.INFLATE:
                                    case t.GUNZIP:
                                    case t.INFLATERAW:
                                        for (this.err = f.inflate(this.strm, this.flush), this.err === t.Z_NEED_DICT && this.dictionary && (this.err = f.inflateSetDictionary(this.strm, this.dictionary), this.err === t.Z_OK ? this.err = f.inflate(this.strm, this.flush) : this.err === t.Z_DATA_ERROR && (this.err = t.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === t.GUNZIP && this.err === t.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = f.inflate(this.strm, this.flush);
                                        break;
                                    default:
                                        throw Error("Unknown mode " + this.mode)
                                }
                            }, h.prototype._checkError = function() {
                                switch (this.err) {
                                    case t.Z_OK:
                                    case t.Z_BUF_ERROR:
                                        if (0 !== this.strm.avail_out && this.flush === t.Z_FINISH) return this._error("unexpected end of file"), !1;
                                        break;
                                    case t.Z_STREAM_END:
                                        break;
                                    case t.Z_NEED_DICT:
                                        return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;
                                    default:
                                        return this._error("Zlib error"), !1
                                }
                                return !0
                            }, h.prototype._after = function() {
                                if (this._checkError()) {
                                    var e = this.strm.avail_out,
                                        t = this.strm.avail_in;
                                    this.write_in_progress = !1, this.callback(t, e), this.pending_close && this.close()
                                }
                            }, h.prototype._error = function(e) {
                                this.strm.msg && (e = this.strm.msg), this.onerror(e, this.err), this.write_in_progress = !1, this.pending_close && this.close()
                            }, h.prototype.init = function(e, r, n, i, a) {
                                o(4 == arguments.length || 5 == arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), o(e >= 8 && e <= 15, "invalid windowBits"), o(r >= -1 && r <= 9, "invalid compression level"), o(n >= 1 && n <= 9, "invalid memlevel"), o(i === t.Z_FILTERED || i === t.Z_HUFFMAN_ONLY || i === t.Z_RLE || i === t.Z_FIXED || i === t.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(r, e, n, i, a), this._setDictionary()
                            }, h.prototype.params = function() {
                                throw Error("deflateParams Not supported")
                            }, h.prototype.reset = function() {
                                this._reset(), this._setDictionary()
                            }, h.prototype._init = function(e, r, n, i, o) {
                                switch (this.level = e, this.windowBits = r, this.memLevel = n, this.strategy = i, this.flush = t.Z_NO_FLUSH, this.err = t.Z_OK, (this.mode === t.GZIP || this.mode === t.GUNZIP) && (this.windowBits += 16), this.mode === t.UNZIP && (this.windowBits += 32), (this.mode === t.DEFLATERAW || this.mode === t.INFLATERAW) && (this.windowBits = -1 * this.windowBits), this.strm = new a, this.mode) {
                                    case t.DEFLATE:
                                    case t.GZIP:
                                    case t.DEFLATERAW:
                                        this.err = s.deflateInit2(this.strm, this.level, t.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                                        break;
                                    case t.INFLATE:
                                    case t.GUNZIP:
                                    case t.INFLATERAW:
                                    case t.UNZIP:
                                        this.err = f.inflateInit2(this.strm, this.windowBits);
                                        break;
                                    default:
                                        throw Error("Unknown mode " + this.mode)
                                }
                                this.err !== t.Z_OK && this._error("Init error"), this.dictionary = o, this.write_in_progress = !1, this.init_done = !0
                            }, h.prototype._setDictionary = function() {
                                if (null != this.dictionary) {
                                    switch (this.err = t.Z_OK, this.mode) {
                                        case t.DEFLATE:
                                        case t.DEFLATERAW:
                                            this.err = s.deflateSetDictionary(this.strm, this.dictionary)
                                    }
                                    this.err !== t.Z_OK && this._error("Failed to set dictionary")
                                }
                            }, h.prototype._reset = function() {
                                switch (this.err = t.Z_OK, this.mode) {
                                    case t.DEFLATE:
                                    case t.DEFLATERAW:
                                    case t.GZIP:
                                        this.err = s.deflateReset(this.strm);
                                        break;
                                    case t.INFLATE:
                                    case t.INFLATERAW:
                                    case t.GUNZIP:
                                        this.err = f.inflateReset(this.strm)
                                }
                                this.err !== t.Z_OK && this._error("Failed to reset stream")
                            }, t.Zlib = h
                        },
                        23: function(e, t, r) {
                            var n = r(300).Buffer,
                                o = r(781).Transform,
                                a = r(742),
                                s = r(837),
                                f = r(491).ok,
                                l = r(300).kMaxLength,
                                u = "Cannot create final Buffer. It would be larger than 0x" + l.toString(16) + " bytes";
                            a.Z_MIN_WINDOWBITS = 8, a.Z_MAX_WINDOWBITS = 15, a.Z_DEFAULT_WINDOWBITS = 15, a.Z_MIN_CHUNK = 64, a.Z_MAX_CHUNK = 1 / 0, a.Z_DEFAULT_CHUNK = 16384, a.Z_MIN_MEMLEVEL = 1, a.Z_MAX_MEMLEVEL = 9, a.Z_DEFAULT_MEMLEVEL = 8, a.Z_MIN_LEVEL = -1, a.Z_MAX_LEVEL = 9, a.Z_DEFAULT_LEVEL = a.Z_DEFAULT_COMPRESSION;
                            for (var h = Object.keys(a), c = 0; c < h.length; c++) {
                                var d = h[c];
                                d.match(/^Z/) && Object.defineProperty(t, d, {
                                    enumerable: !0,
                                    value: a[d],
                                    writable: !1
                                })
                            }
                            for (var p = {
                                    Z_OK: a.Z_OK,
                                    Z_STREAM_END: a.Z_STREAM_END,
                                    Z_NEED_DICT: a.Z_NEED_DICT,
                                    Z_ERRNO: a.Z_ERRNO,
                                    Z_STREAM_ERROR: a.Z_STREAM_ERROR,
                                    Z_DATA_ERROR: a.Z_DATA_ERROR,
                                    Z_MEM_ERROR: a.Z_MEM_ERROR,
                                    Z_BUF_ERROR: a.Z_BUF_ERROR,
                                    Z_VERSION_ERROR: a.Z_VERSION_ERROR
                                }, y = Object.keys(p), g = 0; g < y.length; g++) {
                                var b = y[g];
                                p[p[b]] = b
                            }

                            function m(e, t, r) {
                                var i = [],
                                    o = 0;

                                function a() {
                                    for (var t; null !== (t = e.read());) i.push(t), o += t.length;
                                    e.once("readable", a)
                                }

                                function s() {
                                    var t, a = null;
                                    o >= l ? a = RangeError(u) : t = n.concat(i, o), i = [], e.close(), r(a, t)
                                }
                                e.on("error", function(t) {
                                    e.removeListener("end", s), e.removeListener("readable", a), r(t)
                                }), e.on("end", s), e.end(t), a()
                            }

                            function w(e, t) {
                                if ("string" == typeof t && (t = n.from(t)), !n.isBuffer(t)) throw TypeError("Not a string or buffer");
                                var r = e._finishFlushFlag;
                                return e._processChunk(t, r)
                            }

                            function v(e) {
                                if (!(this instanceof v)) return new v(e);
                                O.call(this, e, a.DEFLATE)
                            }

                            function _(e) {
                                if (!(this instanceof _)) return new _(e);
                                O.call(this, e, a.INFLATE)
                            }

                            function x(e) {
                                if (!(this instanceof x)) return new x(e);
                                O.call(this, e, a.GZIP)
                            }

                            function E(e) {
                                if (!(this instanceof E)) return new E(e);
                                O.call(this, e, a.GUNZIP)
                            }

                            function S(e) {
                                if (!(this instanceof S)) return new S(e);
                                O.call(this, e, a.DEFLATERAW)
                            }

                            function A(e) {
                                if (!(this instanceof A)) return new A(e);
                                O.call(this, e, a.INFLATERAW)
                            }

                            function k(e) {
                                if (!(this instanceof k)) return new k(e);
                                O.call(this, e, a.UNZIP)
                            }

                            function B(e) {
                                return e === a.Z_NO_FLUSH || e === a.Z_PARTIAL_FLUSH || e === a.Z_SYNC_FLUSH || e === a.Z_FULL_FLUSH || e === a.Z_FINISH || e === a.Z_BLOCK
                            }

                            function O(e, r) {
                                var i = this;
                                if (this._opts = e = e || {}, this._chunkSize = e.chunkSize || t.Z_DEFAULT_CHUNK, o.call(this, e), e.flush && !B(e.flush)) throw Error("Invalid flush flag: " + e.flush);
                                if (e.finishFlush && !B(e.finishFlush)) throw Error("Invalid flush flag: " + e.finishFlush);
                                if (this._flushFlag = e.flush || a.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== e.finishFlush ? e.finishFlush : a.Z_FINISH, e.chunkSize && (e.chunkSize < t.Z_MIN_CHUNK || e.chunkSize > t.Z_MAX_CHUNK)) throw Error("Invalid chunk size: " + e.chunkSize);
                                if (e.windowBits && (e.windowBits < t.Z_MIN_WINDOWBITS || e.windowBits > t.Z_MAX_WINDOWBITS)) throw Error("Invalid windowBits: " + e.windowBits);
                                if (e.level && (e.level < t.Z_MIN_LEVEL || e.level > t.Z_MAX_LEVEL)) throw Error("Invalid compression level: " + e.level);
                                if (e.memLevel && (e.memLevel < t.Z_MIN_MEMLEVEL || e.memLevel > t.Z_MAX_MEMLEVEL)) throw Error("Invalid memLevel: " + e.memLevel);
                                if (e.strategy && e.strategy != t.Z_FILTERED && e.strategy != t.Z_HUFFMAN_ONLY && e.strategy != t.Z_RLE && e.strategy != t.Z_FIXED && e.strategy != t.Z_DEFAULT_STRATEGY) throw Error("Invalid strategy: " + e.strategy);
                                if (e.dictionary && !n.isBuffer(e.dictionary)) throw Error("Invalid dictionary: it should be a Buffer instance");
                                this._handle = new a.Zlib(r);
                                var s = this;
                                this._hadError = !1, this._handle.onerror = function(e, r) {
                                    I(s), s._hadError = !0;
                                    var n = Error(e);
                                    n.errno = r, n.code = t.codes[r], s.emit("error", n)
                                };
                                var f = t.Z_DEFAULT_COMPRESSION;
                                "number" == typeof e.level && (f = e.level);
                                var l = t.Z_DEFAULT_STRATEGY;
                                "number" == typeof e.strategy && (l = e.strategy), this._handle.init(e.windowBits || t.Z_DEFAULT_WINDOWBITS, f, e.memLevel || t.Z_DEFAULT_MEMLEVEL, l, e.dictionary), this._buffer = n.allocUnsafe(this._chunkSize), this._offset = 0, this._level = f, this._strategy = l, this.once("end", this.close), Object.defineProperty(this, "_closed", {
                                    get: function() {
                                        return !i._handle
                                    },
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }

                            function I(e, t) {
                                t && i.nextTick(t), e._handle && (e._handle.close(), e._handle = null)
                            }

                            function T(e) {
                                e.emit("close")
                            }
                            Object.defineProperty(t, "codes", {
                                enumerable: !0,
                                value: Object.freeze(p),
                                writable: !1
                            }), t.Deflate = v, t.Inflate = _, t.Gzip = x, t.Gunzip = E, t.DeflateRaw = S, t.InflateRaw = A, t.Unzip = k, t.createDeflate = function(e) {
                                return new v(e)
                            }, t.createInflate = function(e) {
                                return new _(e)
                            }, t.createDeflateRaw = function(e) {
                                return new S(e)
                            }, t.createInflateRaw = function(e) {
                                return new A(e)
                            }, t.createGzip = function(e) {
                                return new x(e)
                            }, t.createGunzip = function(e) {
                                return new E(e)
                            }, t.createUnzip = function(e) {
                                return new k(e)
                            }, t.deflate = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new v(t), e, r)
                            }, t.deflateSync = function(e, t) {
                                return w(new v(t), e)
                            }, t.gzip = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new x(t), e, r)
                            }, t.gzipSync = function(e, t) {
                                return w(new x(t), e)
                            }, t.deflateRaw = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new S(t), e, r)
                            }, t.deflateRawSync = function(e, t) {
                                return w(new S(t), e)
                            }, t.unzip = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new k(t), e, r)
                            }, t.unzipSync = function(e, t) {
                                return w(new k(t), e)
                            }, t.inflate = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new _(t), e, r)
                            }, t.inflateSync = function(e, t) {
                                return w(new _(t), e)
                            }, t.gunzip = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new E(t), e, r)
                            }, t.gunzipSync = function(e, t) {
                                return w(new E(t), e)
                            }, t.inflateRaw = function(e, t, r) {
                                return "function" == typeof t && (r = t, t = {}), m(new A(t), e, r)
                            }, t.inflateRawSync = function(e, t) {
                                return w(new A(t), e)
                            }, s.inherits(O, o), O.prototype.params = function(e, r, n) {
                                if (e < t.Z_MIN_LEVEL || e > t.Z_MAX_LEVEL) throw RangeError("Invalid compression level: " + e);
                                if (r != t.Z_FILTERED && r != t.Z_HUFFMAN_ONLY && r != t.Z_RLE && r != t.Z_FIXED && r != t.Z_DEFAULT_STRATEGY) throw TypeError("Invalid strategy: " + r);
                                if (this._level !== e || this._strategy !== r) {
                                    var o = this;
                                    this.flush(a.Z_SYNC_FLUSH, function() {
                                        f(o._handle, "zlib binding closed"), o._handle.params(e, r), !o._hadError && (o._level = e, o._strategy = r, n && n())
                                    })
                                } else i.nextTick(n)
                            }, O.prototype.reset = function() {
                                return f(this._handle, "zlib binding closed"), this._handle.reset()
                            }, O.prototype._flush = function(e) {
                                this._transform(n.alloc(0), "", e)
                            }, O.prototype.flush = function(e, t) {
                                var r = this,
                                    o = this._writableState;
                                "function" != typeof e && (void 0 !== e || t) || (t = e, e = a.Z_FULL_FLUSH), o.ended ? t && i.nextTick(t) : o.ending ? t && this.once("end", t) : o.needDrain ? t && this.once("drain", function() {
                                    return r.flush(e, t)
                                }) : (this._flushFlag = e, this.write(n.alloc(0), "", t))
                            }, O.prototype.close = function(e) {
                                I(this, e), i.nextTick(T, this)
                            }, O.prototype._transform = function(e, t, r) {
                                var i, o = this._writableState,
                                    s = (o.ending || o.ended) && (!e || o.length === e.length);
                                return null === e || n.isBuffer(e) ? this._handle ? void(s ? i = this._finishFlushFlag : (i = this._flushFlag, e.length >= o.length && (this._flushFlag = this._opts.flush || a.Z_NO_FLUSH)), this._processChunk(e, i, r)) : r(Error("zlib binding closed")) : r(Error("invalid input"))
                            }, O.prototype._processChunk = function(e, t, r) {
                                var i = e && e.length,
                                    o = this._chunkSize - this._offset,
                                    a = 0,
                                    s = this,
                                    h = "function" == typeof r;
                                if (!h) {
                                    var c, d = [],
                                        p = 0;
                                    this.on("error", function(e) {
                                        c = e
                                    }), f(this._handle, "zlib binding closed");
                                    do var y = this._handle.writeSync(t, e, a, i, this._buffer, this._offset, o); while (!this._hadError && m(y[0], y[1]));
                                    if (this._hadError) throw c;
                                    if (p >= l) throw I(this), RangeError(u);
                                    var g = n.concat(d, p);
                                    return I(this), g
                                }
                                f(this._handle, "zlib binding closed");
                                var b = this._handle.write(t, e, a, i, this._buffer, this._offset, o);

                                function m(l, u) {
                                    if (this && (this.buffer = null, this.callback = null), !s._hadError) {
                                        var c = o - u;
                                        if (f(c >= 0, "have should not go down"), c > 0) {
                                            var y = s._buffer.slice(s._offset, s._offset + c);
                                            s._offset += c, h ? s.push(y) : (d.push(y), p += y.length)
                                        }
                                        if ((0 === u || s._offset >= s._chunkSize) && (o = s._chunkSize, s._offset = 0, s._buffer = n.allocUnsafe(s._chunkSize)), 0 === u) {
                                            if (a += i - l, i = l, !h) return !0;
                                            var g = s._handle.write(t, e, a, i, s._buffer, s._offset, s._chunkSize);
                                            return g.callback = m, void(g.buffer = e)
                                        }
                                        if (!h) return !1;
                                        r()
                                    }
                                }
                                b.buffer = e, b.callback = m
                            }, s.inherits(v, O), s.inherits(_, O), s.inherits(x, O), s.inherits(E, O), s.inherits(S, O), s.inherits(A, O), s.inherits(k, O)
                        },
                        380: function(e, t) {
                            var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                            t.assign = function(e) {
                                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                                    var r = t.shift();
                                    if (r) {
                                        if ("object" != typeof r) throw TypeError(r + "must be non-object");
                                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                    }
                                }
                                return e
                            }, t.shrinkBuf = function(e, t) {
                                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
                            };
                            var n = {
                                    arraySet: function(e, t, r, n, i) {
                                        if (t.subarray && e.subarray) {
                                            e.set(t.subarray(r, r + n), i);
                                            return
                                        }
                                        for (var o = 0; o < n; o++) e[i + o] = t[r + o]
                                    },
                                    flattenChunks: function(e) {
                                        var t, r, n, i, o, a;
                                        for (t = 0, n = 0, r = e.length; t < r; t++) n += e[t].length;
                                        for (t = 0, a = new Uint8Array(n), i = 0, r = e.length; t < r; t++) o = e[t], a.set(o, i), i += o.length;
                                        return a
                                    }
                                },
                                i = {
                                    arraySet: function(e, t, r, n, i) {
                                        for (var o = 0; o < n; o++) e[i + o] = t[r + o]
                                    },
                                    flattenChunks: function(e) {
                                        return [].concat.apply([], e)
                                    }
                                };
                            t.setTyped = function(e) {
                                e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, n)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, i))
                            }, t.setTyped(r)
                        },
                        496: function(e) {
                            e.exports = function(e, t, r, n) {
                                for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
                                    a = r > 2e3 ? 2e3 : r, r -= a;
                                    do o = o + (i = i + t[n++] | 0) | 0; while (--a);
                                    i %= 65521, o %= 65521
                                }
                                return i | o << 16 | 0
                            }
                        },
                        320: function(e) {
                            e.exports = {
                                Z_NO_FLUSH: 0,
                                Z_PARTIAL_FLUSH: 1,
                                Z_SYNC_FLUSH: 2,
                                Z_FULL_FLUSH: 3,
                                Z_FINISH: 4,
                                Z_BLOCK: 5,
                                Z_TREES: 6,
                                Z_OK: 0,
                                Z_STREAM_END: 1,
                                Z_NEED_DICT: 2,
                                Z_ERRNO: -1,
                                Z_STREAM_ERROR: -2,
                                Z_DATA_ERROR: -3,
                                Z_BUF_ERROR: -5,
                                Z_NO_COMPRESSION: 0,
                                Z_BEST_SPEED: 1,
                                Z_BEST_COMPRESSION: 9,
                                Z_DEFAULT_COMPRESSION: -1,
                                Z_FILTERED: 1,
                                Z_HUFFMAN_ONLY: 2,
                                Z_RLE: 3,
                                Z_FIXED: 4,
                                Z_DEFAULT_STRATEGY: 0,
                                Z_BINARY: 0,
                                Z_TEXT: 1,
                                Z_UNKNOWN: 2,
                                Z_DEFLATED: 8
                            }
                        },
                        307: function(e) {
                            var t = function() {
                                for (var e, t = [], r = 0; r < 256; r++) {
                                    e = r;
                                    for (var n = 0; n < 8; n++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
                                    t[r] = e
                                }
                                return t
                            }();
                            e.exports = function(e, r, n, i) {
                                var o = i + n;
                                e ^= -1;
                                for (var a = i; a < o; a++) e = e >>> 8 ^ t[(e ^ r[a]) & 255];
                                return -1 ^ e
                            }
                        },
                        450: function(e, t, r) {
                            var n, i = r(380),
                                o = r(842),
                                a = r(496),
                                s = r(307),
                                f = r(31),
                                l = 573;

                            function u(e, t) {
                                return e.msg = f[t], t
                            }

                            function h(e) {
                                return (e << 1) - 9 * (e > 4)
                            }

                            function c(e) {
                                for (var t = e.length; --t >= 0;) e[t] = 0
                            }

                            function d(e) {
                                var t = e.state,
                                    r = t.pending;
                                r > e.avail_out && (r = e.avail_out), 0 !== r && (i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0))
                            }

                            function p(e, t) {
                                o._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, d(e.strm)
                            }

                            function y(e, t) {
                                e.pending_buf[e.pending++] = t
                            }

                            function g(e, t) {
                                e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
                            }

                            function b(e, t) {
                                var r, n, i = e.max_chain_length,
                                    o = e.strstart,
                                    a = e.prev_length,
                                    s = e.nice_match,
                                    f = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
                                    l = e.window,
                                    u = e.w_mask,
                                    h = e.prev,
                                    c = e.strstart + 258,
                                    d = l[o + a - 1],
                                    p = l[o + a];
                                e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
                                do {
                                    if (l[(r = t) + a] !== p || l[r + a - 1] !== d || l[r] !== l[o] || l[++r] !== l[o + 1]) continue;
                                    o += 2, r++;
                                    do; while (l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && l[++o] === l[++r] && o < c);
                                    if (n = 258 - (c - o), o = c - 258, n > a) {
                                        if (e.match_start = t, a = n, n >= s) break;
                                        d = l[o + a - 1], p = l[o + a]
                                    }
                                } while ((t = h[t & u]) > f && 0 != --i);
                                return a <= e.lookahead ? a : e.lookahead
                            }

                            function m(e) {
                                var t, r, n, o, f, l = e.w_size;
                                do {
                                    if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= l + (l - 262)) {
                                        i.arraySet(e.window, e.window, l, l, 0), e.match_start -= l, e.strstart -= l, e.block_start -= l, t = r = e.hash_size;
                                        do n = e.head[--t], e.head[t] = n >= l ? n - l : 0; while (--r);
                                        t = r = l;
                                        do n = e.prev[--t], e.prev[t] = n >= l ? n - l : 0; while (--r);
                                        o += l
                                    }
                                    if (0 === e.strm.avail_in) break;
                                    if (r = function(e, t, r, n) {
                                            var o = e.avail_in;
                                            return (o > n && (o = n), 0 === o) ? 0 : (e.avail_in -= o, i.arraySet(t, e.input, e.next_in, o, r), 1 === e.state.wrap ? e.adler = a(e.adler, t, o, r) : 2 === e.state.wrap && (e.adler = s(e.adler, t, o, r)), e.next_in += o, e.total_in += o, o)
                                        }(e.strm, e.window, e.strstart + e.lookahead, o), e.lookahead += r, e.lookahead + e.insert >= 3)
                                        for (f = e.strstart - e.insert, e.ins_h = e.window[f], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + 3 - 1]) & e.hash_mask, e.prev[f & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = f, f++, e.insert--, !(e.lookahead + e.insert < 3)););
                                } while (e.lookahead < 262 && 0 !== e.strm.avail_in)
                            }

                            function w(e, t) {
                                for (var r, n;;) {
                                    if (e.lookahead < 262) {
                                        if (m(e), e.lookahead < 262 && 0 === t) return 1;
                                        if (0 === e.lookahead) break
                                    }
                                    if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - 262 && (e.match_length = b(e, r)), e.match_length >= 3) {
                                        if (n = o._tr_tally(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                                            e.match_length--;
                                            do e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart; while (0 != --e.match_length);
                                            e.strstart++
                                        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask
                                    } else n = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                                    if (n && (p(e, !1), 0 === e.strm.avail_out)) return 1
                                }
                                return (e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t) ? (p(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                            }

                            function v(e, t) {
                                for (var r, n, i;;) {
                                    if (e.lookahead < 262) {
                                        if (m(e), e.lookahead < 262 && 0 === t) return 1;
                                        if (0 === e.lookahead) break
                                    }
                                    if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - 262 && (e.match_length = b(e, r), e.match_length <= 5 && (1 === e.strategy || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                                        i = e.strstart + e.lookahead - 3, n = o._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                                        do ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (0 != --e.prev_length);
                                        if (e.match_available = 0, e.match_length = 2, e.strstart++, n && (p(e, !1), 0 === e.strm.avail_out)) return 1
                                    } else if (e.match_available) {
                                        if ((n = o._tr_tally(e, 0, e.window[e.strstart - 1])) && p(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
                                    } else e.match_available = 1, e.strstart++, e.lookahead--
                                }
                                return (e.match_available && (n = o._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t) ? (p(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                            }

                            function _(e, t, r, n, i) {
                                this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i
                            }

                            function x() {
                                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * l), this.dyn_dtree = new i.Buf16(122), this.bl_tree = new i.Buf16(78), c(this.dyn_ltree), c(this.dyn_dtree), c(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(16), this.heap = new i.Buf16(573), c(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(573), c(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                            }

                            function E(e) {
                                var t;
                                return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = 2, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? 42 : 113, e.adler = +(2 !== t.wrap), t.last_flush = 0, o._tr_init(t), 0) : u(e, -2)
                            }

                            function S(e) {
                                var t, r = E(e);
                                return 0 === r && ((t = e.state).window_size = 2 * t.w_size, c(t.head), t.max_lazy_match = n[t.level].max_lazy, t.good_match = n[t.level].good_length, t.nice_match = n[t.level].nice_length, t.max_chain_length = n[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0), r
                            }

                            function A(e, t, r, n, o, a) {
                                if (!e) return -2;
                                var s = 1;
                                if (-1 === t && (t = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), o < 1 || o > 9 || 8 !== r || n < 8 || n > 15 || t < 0 || t > 9 || a < 0 || a > 4) return u(e, -2);
                                8 === n && (n = 9);
                                var f = new x;
                                return e.state = f, f.strm = e, f.wrap = s, f.gzhead = null, f.w_bits = n, f.w_size = 1 << f.w_bits, f.w_mask = f.w_size - 1, f.hash_bits = o + 7, f.hash_size = 1 << f.hash_bits, f.hash_mask = f.hash_size - 1, f.hash_shift = ~~((f.hash_bits + 3 - 1) / 3), f.window = new i.Buf8(2 * f.w_size), f.head = new i.Buf16(f.hash_size), f.prev = new i.Buf16(f.w_size), f.lit_bufsize = 1 << o + 6, f.pending_buf_size = 4 * f.lit_bufsize, f.pending_buf = new i.Buf8(f.pending_buf_size), f.d_buf = +f.lit_bufsize, f.l_buf = 3 * f.lit_bufsize, f.level = t, f.strategy = a, f.method = r, S(e)
                            }
                            n = [new _(0, 0, 0, 0, function(e, t) {
                                var r = 65535;
                                for (65535 > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
                                    if (e.lookahead <= 1) {
                                        if (m(e), 0 === e.lookahead && 0 === t) return 1;
                                        if (0 === e.lookahead) break
                                    }
                                    e.strstart += e.lookahead, e.lookahead = 0;
                                    var n = e.block_start + r;
                                    if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, p(e, !1), 0 === e.strm.avail_out) || e.strstart - e.block_start >= e.w_size - 262 && (p(e, !1), 0 === e.strm.avail_out)) return 1
                                }
                                return (e.insert = 0, 4 === t) ? (p(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : (e.strstart > e.block_start && (p(e, !1), e.strm.avail_out), 1)
                            }), new _(4, 4, 8, 4, w), new _(4, 5, 16, 8, w), new _(4, 6, 32, 32, w), new _(4, 4, 16, 16, v), new _(8, 16, 32, 32, v), new _(8, 16, 128, 128, v), new _(8, 32, 128, 256, v), new _(32, 128, 258, 1024, v), new _(32, 258, 258, 4096, v)], t.deflateInit = function(e, t) {
                                return A(e, t, 8, 15, 8, 0)
                            }, t.deflateInit2 = A, t.deflateReset = S, t.deflateResetKeep = E, t.deflateSetHeader = function(e, t) {
                                return e && e.state && 2 === e.state.wrap ? (e.state.gzhead = t, 0) : -2
                            }, t.deflate = function(e, t) {
                                if (!e || !e.state || t > 5 || t < 0) return e ? u(e, -2) : -2;
                                if (i = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === i.status && 4 !== t) return u(e, 0 === e.avail_out ? -5 : -2);
                                if (i.strm = e, r = i.last_flush, i.last_flush = t, 42 === i.status) {
                                    if (2 === i.wrap) e.adler = 0, y(i, 31), y(i, 139), y(i, 8), i.gzhead ? (y(i, +!!i.gzhead.text + 2 * !!i.gzhead.hcrc + 4 * !!i.gzhead.extra + 8 * !!i.gzhead.name + 16 * !!i.gzhead.comment), y(i, 255 & i.gzhead.time), y(i, i.gzhead.time >> 8 & 255), y(i, i.gzhead.time >> 16 & 255), y(i, i.gzhead.time >> 24 & 255), y(i, 9 === i.level ? 2 : 4 * (i.strategy >= 2 || i.level < 2)), y(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (y(i, 255 & i.gzhead.extra.length), y(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (y(i, 0), y(i, 0), y(i, 0), y(i, 0), y(i, 0), y(i, 9 === i.level ? 2 : 4 * (i.strategy >= 2 || i.level < 2)), y(i, 3), i.status = 113);
                                    else {
                                        var r, i, a, f, l = 8 + (i.w_bits - 8 << 4) << 8,
                                            b = -1;
                                        l |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (l |= 32), l += 31 - l % 31, i.status = 113, g(i, l), 0 !== i.strstart && (g(i, e.adler >>> 16), g(i, 65535 & e.adler)), e.adler = 1
                                    }
                                }
                                if (69 === i.status) {
                                    if (i.gzhead.extra) {
                                        for (a = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending !== i.pending_buf_size));) y(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                                        i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73)
                                    } else i.status = 73
                                }
                                if (73 === i.status) {
                                    if (i.gzhead.name) {
                                        a = i.pending;
                                        do {
                                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending === i.pending_buf_size)) {
                                                f = 1;
                                                break
                                            }
                                            f = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, y(i, f)
                                        } while (0 !== f);
                                        i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), 0 === f && (i.gzindex = 0, i.status = 91)
                                    } else i.status = 91
                                }
                                if (91 === i.status) {
                                    if (i.gzhead.comment) {
                                        a = i.pending;
                                        do {
                                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending === i.pending_buf_size)) {
                                                f = 1;
                                                break
                                            }
                                            f = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, y(i, f)
                                        } while (0 !== f);
                                        i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), 0 === f && (i.status = 103)
                                    } else i.status = 103
                                }
                                if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && d(e), i.pending + 2 <= i.pending_buf_size && (y(i, 255 & e.adler), y(i, e.adler >> 8 & 255), e.adler = 0, i.status = 113)) : i.status = 113), 0 !== i.pending) {
                                    if (d(e), 0 === e.avail_out) return i.last_flush = -1, 0
                                } else if (0 === e.avail_in && h(t) <= h(r) && 4 !== t) return u(e, -5);
                                if (666 === i.status && 0 !== e.avail_in) return u(e, -5);
                                if (0 !== e.avail_in || 0 !== i.lookahead || 0 !== t && 666 !== i.status) {
                                    var w = 2 === i.strategy ? function(e, t) {
                                        for (var r;;) {
                                            if (0 === e.lookahead && (m(e), 0 === e.lookahead)) {
                                                if (0 === t) return 1;
                                                break
                                            }
                                            if (e.match_length = 0, r = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (p(e, !1), 0 === e.strm.avail_out)) return 1
                                        }
                                        return (e.insert = 0, 4 === t) ? (p(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                    }(i, t) : 3 === i.strategy ? function(e, t) {
                                        for (var r, n, i, a, s = e.window;;) {
                                            if (e.lookahead <= 258) {
                                                if (m(e), e.lookahead <= 258 && 0 === t) return 1;
                                                if (0 === e.lookahead) break
                                            }
                                            if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (n = s[i = e.strstart - 1]) === s[++i] && n === s[++i] && n === s[++i]) {
                                                a = e.strstart + 258;
                                                do; while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < a);
                                                e.match_length = 258 - (a - i), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                            }
                                            if (e.match_length >= 3 ? (r = o._tr_tally(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (p(e, !1), 0 === e.strm.avail_out)) return 1
                                        }
                                        return (e.insert = 0, 4 === t) ? (p(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                    }(i, t) : n[i.level].func(i, t);
                                    if ((3 === w || 4 === w) && (i.status = 666), 1 === w || 3 === w) return 0 === e.avail_out && (i.last_flush = -1), 0;
                                    if (2 === w && (1 === t ? o._tr_align(i) : 5 !== t && (o._tr_stored_block(i, 0, 0, !1), 3 === t && (c(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), d(e), 0 === e.avail_out)) return i.last_flush = -1, 0
                                }
                                return 4 !== t ? 0 : i.wrap <= 0 ? 1 : (2 === i.wrap ? (y(i, 255 & e.adler), y(i, e.adler >> 8 & 255), y(i, e.adler >> 16 & 255), y(i, e.adler >> 24 & 255), y(i, 255 & e.total_in), y(i, e.total_in >> 8 & 255), y(i, e.total_in >> 16 & 255), y(i, e.total_in >> 24 & 255)) : (g(i, e.adler >>> 16), g(i, 65535 & e.adler)), d(e), i.wrap > 0 && (i.wrap = -i.wrap), +(0 === i.pending))
                            }, t.deflateEnd = function(e) {
                                var t;
                                return e && e.state ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && 103 !== t && 113 !== t && 666 !== t ? u(e, -2) : (e.state = null, 113 === t ? u(e, -3) : 0) : -2
                            }, t.deflateSetDictionary = function(e, t) {
                                var r, n, o, s, f, l, u, h, d = t.length;
                                if (!e || !e.state || 2 === (s = (r = e.state).wrap) || 1 === s && 42 !== r.status || r.lookahead) return -2;
                                for (1 === s && (e.adler = a(e.adler, t, d, 0)), r.wrap = 0, d >= r.w_size && (0 === s && (c(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), h = new i.Buf8(r.w_size), i.arraySet(h, t, d - r.w_size, r.w_size, 0), t = h, d = r.w_size), f = e.avail_in, l = e.next_in, u = e.input, e.avail_in = d, e.next_in = 0, e.input = t, m(r); r.lookahead >= 3;) {
                                    n = r.strstart, o = r.lookahead - 2;
                                    do r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + 3 - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++; while (--o);
                                    r.strstart = n, r.lookahead = 2, m(r)
                                }
                                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, e.next_in = l, e.input = u, e.avail_in = f, r.wrap = s, 0
                            }, t.deflateInfo = "pako deflate (from Nodeca project)"
                        },
                        333: function(e) {
                            e.exports = function(e, t) {
                                var r, n, i, o, a, s, f, l, u, h, c, d, p, y, g, b, m, w, v, _, x, E, S, A, k;
                                r = e.state, n = e.next_in, A = e.input, i = n + (e.avail_in - 5), o = e.next_out, k = e.output, a = o - (t - e.avail_out), s = o + (e.avail_out - 257), f = r.dmax, l = r.wsize, u = r.whave, h = r.wnext, c = r.window, d = r.hold, p = r.bits, y = r.lencode, g = r.distcode, b = (1 << r.lenbits) - 1, m = (1 << r.distbits) - 1;
                                e: do
                                        for (p < 15 && (d += A[n++] << p, p += 8, d += A[n++] << p, p += 8), w = y[d & b];;) {
                                            if (d >>>= v = w >>> 24, p -= v, 0 == (v = w >>> 16 & 255)) k[o++] = 65535 & w;
                                            else if (16 & v)
                                                for (_ = 65535 & w, (v &= 15) && (p < v && (d += A[n++] << p, p += 8), _ += d & (1 << v) - 1, d >>>= v, p -= v), p < 15 && (d += A[n++] << p, p += 8, d += A[n++] << p, p += 8), w = g[d & m];;) {
                                                    if (d >>>= v = w >>> 24, p -= v, 16 & (v = w >>> 16 & 255)) {
                                                        if (x = 65535 & w, p < (v &= 15) && (d += A[n++] << p, (p += 8) < v && (d += A[n++] << p, p += 8)), (x += d & (1 << v) - 1) > f) {
                                                            e.msg = "invalid distance too far back", r.mode = 30;
                                                            break e
                                                        }
                                                        if (d >>>= v, p -= v, x > (v = o - a)) {
                                                            if ((v = x - v) > u && r.sane) {
                                                                e.msg = "invalid distance too far back", r.mode = 30;
                                                                break e
                                                            }
                                                            if (E = 0, S = c, 0 === h) {
                                                                if (E += l - v, v < _) {
                                                                    _ -= v;
                                                                    do k[o++] = c[E++]; while (--v);
                                                                    E = o - x, S = k
                                                                }
                                                            } else if (h < v) {
                                                                if (E += l + h - v, (v -= h) < _) {
                                                                    _ -= v;
                                                                    do k[o++] = c[E++]; while (--v);
                                                                    if (E = 0, h < _) {
                                                                        _ -= v = h;
                                                                        do k[o++] = c[E++]; while (--v);
                                                                        E = o - x, S = k
                                                                    }
                                                                }
                                                            } else if (E += h - v, v < _) {
                                                                _ -= v;
                                                                do k[o++] = c[E++]; while (--v);
                                                                E = o - x, S = k
                                                            }
                                                            for (; _ > 2;) k[o++] = S[E++], k[o++] = S[E++], k[o++] = S[E++], _ -= 3;
                                                            _ && (k[o++] = S[E++], _ > 1 && (k[o++] = S[E++]))
                                                        } else {
                                                            E = o - x;
                                                            do k[o++] = k[E++], k[o++] = k[E++], k[o++] = k[E++], _ -= 3; while (_ > 2);
                                                            _ && (k[o++] = k[E++], _ > 1 && (k[o++] = k[E++]))
                                                        }
                                                    } else if ((64 & v) == 0) {
                                                        w = g[(65535 & w) + (d & (1 << v) - 1)];
                                                        continue
                                                    } else {
                                                        e.msg = "invalid distance code", r.mode = 30;
                                                        break e
                                                    }
                                                    break
                                                } else if ((64 & v) == 0) {
                                                    w = y[(65535 & w) + (d & (1 << v) - 1)];
                                                    continue
                                                } else if (32 & v) {
                                                r.mode = 12;
                                                break e
                                            } else {
                                                e.msg = "invalid literal/length code", r.mode = 30;
                                                break e
                                            }
                                            break
                                        }
                                    while (n < i && o < s);
                                    n -= _ = p >> 3, p -= _ << 3, d &= (1 << p) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), e.avail_out = o < s ? 257 + (s - o) : 257 - (o - s), r.hold = d, r.bits = p
                            }
                        },
                        324: function(e, t, r) {
                            var n, i, o = r(380),
                                a = r(496),
                                s = r(307),
                                f = r(333),
                                l = r(19);

                            function u(e) {
                                return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                            }

                            function h() {
                                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                            }

                            function c(e) {
                                var t;
                                return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new o.Buf32(852), t.distcode = t.distdyn = new o.Buf32(592), t.sane = 1, t.back = -1, 0) : -2
                            }

                            function d(e) {
                                var t;
                                return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, c(e)) : -2
                            }

                            function p(e, t) {
                                var r, n;
                                return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? -2 : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, d(e)) : -2
                            }

                            function y(e, t) {
                                var r, n;
                                return e ? (e.state = n = new h, n.window = null, 0 !== (r = p(e, t)) && (e.state = null), r) : -2
                            }
                            var g = !0;

                            function b(e, t, r, n) {
                                var i, a = e.state;
                                return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new o.Buf8(a.wsize)), n >= a.wsize ? (o.arraySet(a.window, t, r - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((i = a.wsize - a.wnext) > n && (i = n), o.arraySet(a.window, t, r - n, i, a.wnext), (n -= i) ? (o.arraySet(a.window, t, r - n, n, 0), a.wnext = n, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0
                            }
                            t.inflateReset = d, t.inflateReset2 = p, t.inflateResetKeep = c, t.inflateInit = function(e) {
                                return y(e, 15)
                            }, t.inflateInit2 = y, t.inflate = function(e, t) {
                                var r, h, c, d, p, y, m, w, v, _, x, E, S, A, k, B, O, I, T, R, M, P, L, U, N = 0,
                                    C = new o.Buf8(4),
                                    j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                                if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return -2;
                                12 === (r = e.state).mode && (r.mode = 13), p = e.next_out, c = e.output, m = e.avail_out, d = e.next_in, h = e.input, y = e.avail_in, w = r.hold, v = r.bits, _ = y, x = m, P = 0;
                                e: for (;;) switch (r.mode) {
                                    case 1:
                                        if (0 === r.wrap) {
                                            r.mode = 13;
                                            break
                                        }
                                        for (; v < 16;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if (2 & r.wrap && 35615 === w) {
                                            r.check = 0, C[0] = 255 & w, C[1] = w >>> 8 & 255, r.check = s(r.check, C, 2, 0), w = 0, v = 0, r.mode = 2;
                                            break
                                        }
                                        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & w) << 8) + (w >> 8)) % 31) {
                                            e.msg = "incorrect header check", r.mode = 30;
                                            break
                                        }
                                        if ((15 & w) != 8) {
                                            e.msg = "unknown compression method", r.mode = 30;
                                            break
                                        }
                                        if (w >>>= 4, v -= 4, M = (15 & w) + 8, 0 === r.wbits) r.wbits = M;
                                        else if (M > r.wbits) {
                                            e.msg = "invalid window size", r.mode = 30;
                                            break
                                        }
                                        r.dmax = 1 << M, e.adler = r.check = 1, r.mode = 512 & w ? 10 : 12, w = 0, v = 0;
                                        break;
                                    case 2:
                                        for (; v < 16;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if (r.flags = w, (255 & r.flags) != 8) {
                                            e.msg = "unknown compression method", r.mode = 30;
                                            break
                                        }
                                        if (57344 & r.flags) {
                                            e.msg = "unknown header flags set", r.mode = 30;
                                            break
                                        }
                                        r.head && (r.head.text = w >> 8 & 1), 512 & r.flags && (C[0] = 255 & w, C[1] = w >>> 8 & 255, r.check = s(r.check, C, 2, 0)), w = 0, v = 0, r.mode = 3;
                                    case 3:
                                        for (; v < 32;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        r.head && (r.head.time = w), 512 & r.flags && (C[0] = 255 & w, C[1] = w >>> 8 & 255, C[2] = w >>> 16 & 255, C[3] = w >>> 24 & 255, r.check = s(r.check, C, 4, 0)), w = 0, v = 0, r.mode = 4;
                                    case 4:
                                        for (; v < 16;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        r.head && (r.head.xflags = 255 & w, r.head.os = w >> 8), 512 & r.flags && (C[0] = 255 & w, C[1] = w >>> 8 & 255, r.check = s(r.check, C, 2, 0)), w = 0, v = 0, r.mode = 5;
                                    case 5:
                                        if (1024 & r.flags) {
                                            for (; v < 16;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            r.length = w, r.head && (r.head.extra_len = w), 512 & r.flags && (C[0] = 255 & w, C[1] = w >>> 8 & 255, r.check = s(r.check, C, 2, 0)), w = 0, v = 0
                                        } else r.head && (r.head.extra = null);
                                        r.mode = 6;
                                    case 6:
                                        if (1024 & r.flags && ((E = r.length) > y && (E = y), E && (r.head && (M = r.head.extra_len - r.length, r.head.extra || (r.head.extra = Array(r.head.extra_len)), o.arraySet(r.head.extra, h, d, E, M)), 512 & r.flags && (r.check = s(r.check, h, E, d)), y -= E, d += E, r.length -= E), r.length)) break e;
                                        r.length = 0, r.mode = 7;
                                    case 7:
                                        if (2048 & r.flags) {
                                            if (0 === y) break e;
                                            E = 0;
                                            do M = h[d + E++], r.head && M && r.length < 65536 && (r.head.name += String.fromCharCode(M)); while (M && E < y);
                                            if (512 & r.flags && (r.check = s(r.check, h, E, d)), y -= E, d += E, M) break e
                                        } else r.head && (r.head.name = null);
                                        r.length = 0, r.mode = 8;
                                    case 8:
                                        if (4096 & r.flags) {
                                            if (0 === y) break e;
                                            E = 0;
                                            do M = h[d + E++], r.head && M && r.length < 65536 && (r.head.comment += String.fromCharCode(M)); while (M && E < y);
                                            if (512 & r.flags && (r.check = s(r.check, h, E, d)), y -= E, d += E, M) break e
                                        } else r.head && (r.head.comment = null);
                                        r.mode = 9;
                                    case 9:
                                        if (512 & r.flags) {
                                            for (; v < 16;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            if (w !== (65535 & r.check)) {
                                                e.msg = "header crc mismatch", r.mode = 30;
                                                break
                                            }
                                            w = 0, v = 0
                                        }
                                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
                                        break;
                                    case 10:
                                        for (; v < 32;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        e.adler = r.check = u(w), w = 0, v = 0, r.mode = 11;
                                    case 11:
                                        if (0 === r.havedict) return e.next_out = p, e.avail_out = m, e.next_in = d, e.avail_in = y, r.hold = w, r.bits = v, 2;
                                        e.adler = r.check = 1, r.mode = 12;
                                    case 12:
                                        if (5 === t || 6 === t) break e;
                                    case 13:
                                        if (r.last) {
                                            w >>>= 7 & v, v -= 7 & v, r.mode = 27;
                                            break
                                        }
                                        for (; v < 3;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        switch (r.last = 1 & w, v -= 1, 3 & (w >>>= 1)) {
                                            case 0:
                                                r.mode = 14;
                                                break;
                                            case 1:
                                                if (function(e) {
                                                        if (g) {
                                                            var t;
                                                            for (n = new o.Buf32(512), i = new o.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                                                            for (; t < 256;) e.lens[t++] = 9;
                                                            for (; t < 280;) e.lens[t++] = 7;
                                                            for (; t < 288;) e.lens[t++] = 8;
                                                            for (l(1, e.lens, 0, 288, n, 0, e.work, {
                                                                    bits: 9
                                                                }), t = 0; t < 32;) e.lens[t++] = 5;
                                                            l(2, e.lens, 0, 32, i, 0, e.work, {
                                                                bits: 5
                                                            }), g = !1
                                                        }
                                                        e.lencode = n, e.lenbits = 9, e.distcode = i, e.distbits = 5
                                                    }(r), r.mode = 20, 6 === t) {
                                                    w >>>= 2, v -= 2;
                                                    break e
                                                }
                                                break;
                                            case 2:
                                                r.mode = 17;
                                                break;
                                            case 3:
                                                e.msg = "invalid block type", r.mode = 30
                                        }
                                        w >>>= 2, v -= 2;
                                        break;
                                    case 14:
                                        for (w >>>= 7 & v, v -= 7 & v; v < 32;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if ((65535 & w) != (w >>> 16 ^ 65535)) {
                                            e.msg = "invalid stored block lengths", r.mode = 30;
                                            break
                                        }
                                        if (r.length = 65535 & w, w = 0, v = 0, r.mode = 15, 6 === t) break e;
                                    case 15:
                                        r.mode = 16;
                                    case 16:
                                        if (E = r.length) {
                                            if (E > y && (E = y), E > m && (E = m), 0 === E) break e;
                                            o.arraySet(c, h, d, E, p), y -= E, d += E, m -= E, p += E, r.length -= E;
                                            break
                                        }
                                        r.mode = 12;
                                        break;
                                    case 17:
                                        for (; v < 14;) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if (r.nlen = (31 & w) + 257, v -= 5, r.ndist = (31 & (w >>>= 5)) + 1, v -= 5, r.ncode = (15 & (w >>>= 5)) + 4, w >>>= 4, v -= 4, r.nlen > 286 || r.ndist > 30) {
                                            e.msg = "too many length or distance symbols", r.mode = 30;
                                            break
                                        }
                                        r.have = 0, r.mode = 18;
                                    case 18:
                                        for (; r.have < r.ncode;) {
                                            for (; v < 3;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            r.lens[j[r.have++]] = 7 & w, w >>>= 3, v -= 3
                                        }
                                        for (; r.have < 19;) r.lens[j[r.have++]] = 0;
                                        if (r.lencode = r.lendyn, r.lenbits = 7, L = {
                                                bits: r.lenbits
                                            }, P = l(0, r.lens, 0, 19, r.lencode, 0, r.work, L), r.lenbits = L.bits, P) {
                                            e.msg = "invalid code lengths set", r.mode = 30;
                                            break
                                        }
                                        r.have = 0, r.mode = 19;
                                    case 19:
                                        for (; r.have < r.nlen + r.ndist;) {
                                            for (; k = (N = r.lencode[w & (1 << r.lenbits) - 1]) >>> 24, B = N >>> 16 & 255, O = 65535 & N, !(k <= v);) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            if (O < 16) w >>>= k, v -= k, r.lens[r.have++] = O;
                                            else {
                                                if (16 === O) {
                                                    for (U = k + 2; v < U;) {
                                                        if (0 === y) break e;
                                                        y--, w += h[d++] << v, v += 8
                                                    }
                                                    if (w >>>= k, v -= k, 0 === r.have) {
                                                        e.msg = "invalid bit length repeat", r.mode = 30;
                                                        break
                                                    }
                                                    M = r.lens[r.have - 1], E = 3 + (3 & w), w >>>= 2, v -= 2
                                                } else if (17 === O) {
                                                    for (U = k + 3; v < U;) {
                                                        if (0 === y) break e;
                                                        y--, w += h[d++] << v, v += 8
                                                    }
                                                    w >>>= k, v -= k, M = 0, E = 3 + (7 & w), w >>>= 3, v -= 3
                                                } else {
                                                    for (U = k + 7; v < U;) {
                                                        if (0 === y) break e;
                                                        y--, w += h[d++] << v, v += 8
                                                    }
                                                    w >>>= k, v -= k, M = 0, E = 11 + (127 & w), w >>>= 7, v -= 7
                                                }
                                                if (r.have + E > r.nlen + r.ndist) {
                                                    e.msg = "invalid bit length repeat", r.mode = 30;
                                                    break
                                                }
                                                for (; E--;) r.lens[r.have++] = M
                                            }
                                        }
                                        if (30 === r.mode) break;
                                        if (0 === r.lens[256]) {
                                            e.msg = "invalid code -- missing end-of-block", r.mode = 30;
                                            break
                                        }
                                        if (r.lenbits = 9, L = {
                                                bits: r.lenbits
                                            }, P = l(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, L), r.lenbits = L.bits, P) {
                                            e.msg = "invalid literal/lengths set", r.mode = 30;
                                            break
                                        }
                                        if (r.distbits = 6, r.distcode = r.distdyn, L = {
                                                bits: r.distbits
                                            }, P = l(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, L), r.distbits = L.bits, P) {
                                            e.msg = "invalid distances set", r.mode = 30;
                                            break
                                        }
                                        if (r.mode = 20, 6 === t) break e;
                                    case 20:
                                        r.mode = 21;
                                    case 21:
                                        if (y >= 6 && m >= 258) {
                                            e.next_out = p, e.avail_out = m, e.next_in = d, e.avail_in = y, r.hold = w, r.bits = v, f(e, x), p = e.next_out, c = e.output, m = e.avail_out, d = e.next_in, h = e.input, y = e.avail_in, w = r.hold, v = r.bits, 12 === r.mode && (r.back = -1);
                                            break
                                        }
                                        for (r.back = 0; k = (N = r.lencode[w & (1 << r.lenbits) - 1]) >>> 24, B = N >>> 16 & 255, O = 65535 & N, !(k <= v);) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if (B && (240 & B) == 0) {
                                            for (I = k, T = B, R = O; k = (N = r.lencode[R + ((w & (1 << I + T) - 1) >> I)]) >>> 24, B = N >>> 16 & 255, O = 65535 & N, !(I + k <= v);) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            w >>>= I, v -= I, r.back += I
                                        }
                                        if (w >>>= k, v -= k, r.back += k, r.length = O, 0 === B) {
                                            r.mode = 26;
                                            break
                                        }
                                        if (32 & B) {
                                            r.back = -1, r.mode = 12;
                                            break
                                        }
                                        if (64 & B) {
                                            e.msg = "invalid literal/length code", r.mode = 30;
                                            break
                                        }
                                        r.extra = 15 & B, r.mode = 22;
                                    case 22:
                                        if (r.extra) {
                                            for (U = r.extra; v < U;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            r.length += w & (1 << r.extra) - 1, w >>>= r.extra, v -= r.extra, r.back += r.extra
                                        }
                                        r.was = r.length, r.mode = 23;
                                    case 23:
                                        for (; k = (N = r.distcode[w & (1 << r.distbits) - 1]) >>> 24, B = N >>> 16 & 255, O = 65535 & N, !(k <= v);) {
                                            if (0 === y) break e;
                                            y--, w += h[d++] << v, v += 8
                                        }
                                        if ((240 & B) == 0) {
                                            for (I = k, T = B, R = O; k = (N = r.distcode[R + ((w & (1 << I + T) - 1) >> I)]) >>> 24, B = N >>> 16 & 255, O = 65535 & N, !(I + k <= v);) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            w >>>= I, v -= I, r.back += I
                                        }
                                        if (w >>>= k, v -= k, r.back += k, 64 & B) {
                                            e.msg = "invalid distance code", r.mode = 30;
                                            break
                                        }
                                        r.offset = O, r.extra = 15 & B, r.mode = 24;
                                    case 24:
                                        if (r.extra) {
                                            for (U = r.extra; v < U;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            r.offset += w & (1 << r.extra) - 1, w >>>= r.extra, v -= r.extra, r.back += r.extra
                                        }
                                        if (r.offset > r.dmax) {
                                            e.msg = "invalid distance too far back", r.mode = 30;
                                            break
                                        }
                                        r.mode = 25;
                                    case 25:
                                        if (0 === m) break e;
                                        if (E = x - m, r.offset > E) {
                                            if ((E = r.offset - E) > r.whave && r.sane) {
                                                e.msg = "invalid distance too far back", r.mode = 30;
                                                break
                                            }
                                            E > r.wnext ? (E -= r.wnext, S = r.wsize - E) : S = r.wnext - E, E > r.length && (E = r.length), A = r.window
                                        } else A = c, S = p - r.offset, E = r.length;
                                        E > m && (E = m), m -= E, r.length -= E;
                                        do c[p++] = A[S++]; while (--E);
                                        0 === r.length && (r.mode = 21);
                                        break;
                                    case 26:
                                        if (0 === m) break e;
                                        c[p++] = r.length, m--, r.mode = 21;
                                        break;
                                    case 27:
                                        if (r.wrap) {
                                            for (; v < 32;) {
                                                if (0 === y) break e;
                                                y--, w |= h[d++] << v, v += 8
                                            }
                                            if (x -= m, e.total_out += x, r.total += x, x && (e.adler = r.check = r.flags ? s(r.check, c, x, p - x) : a(r.check, c, x, p - x)), x = m, (r.flags ? w : u(w)) !== r.check) {
                                                e.msg = "incorrect data check", r.mode = 30;
                                                break
                                            }
                                            w = 0, v = 0
                                        }
                                        r.mode = 28;
                                    case 28:
                                        if (r.wrap && r.flags) {
                                            for (; v < 32;) {
                                                if (0 === y) break e;
                                                y--, w += h[d++] << v, v += 8
                                            }
                                            if (w !== (0xffffffff & r.total)) {
                                                e.msg = "incorrect length check", r.mode = 30;
                                                break
                                            }
                                            w = 0, v = 0
                                        }
                                        r.mode = 29;
                                    case 29:
                                        P = 1;
                                        break e;
                                    case 30:
                                        P = -3;
                                        break e;
                                    case 31:
                                        return -4;
                                    default:
                                        return -2
                                }
                                return (e.next_out = p, e.avail_out = m, e.next_in = d, e.avail_in = y, r.hold = w, r.bits = v, (r.wsize || x !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && b(e, e.output, e.next_out, x - e.avail_out)) ? (r.mode = 31, -4) : (_ -= e.avail_in, x -= e.avail_out, e.total_in += _, e.total_out += x, r.total += x, r.wrap && x && (e.adler = r.check = r.flags ? s(r.check, c, x, e.next_out - x) : a(r.check, c, x, e.next_out - x)), e.data_type = r.bits + 64 * !!r.last + 128 * (12 === r.mode) + 256 * (20 === r.mode || 15 === r.mode), (0 === _ && 0 === x || 4 === t) && 0 === P && (P = -5), P)
                            }, t.inflateEnd = function(e) {
                                if (!e || !e.state) return -2;
                                var t = e.state;
                                return t.window && (t.window = null), e.state = null, 0
                            }, t.inflateGetHeader = function(e, t) {
                                var r;
                                return e && e.state && (2 & (r = e.state).wrap) != 0 ? (r.head = t, t.done = !1, 0) : -2
                            }, t.inflateSetDictionary = function(e, t) {
                                var r, n, i = t.length;
                                return e && e.state && (0 === (r = e.state).wrap || 11 === r.mode) ? 11 === r.mode && a(1, t, i, 0) !== r.check ? -3 : b(e, t, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : -2
                            }, t.inflateInfo = "pako inflate (from Nodeca project)"
                        },
                        19: function(e, t, r) {
                            var n = r(380),
                                i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                                o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                                a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                                s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                            e.exports = function(e, t, r, f, l, u, h, c) {
                                var d, p, y, g, b, m, w, v, _, x = c.bits,
                                    E = 0,
                                    S = 0,
                                    A = 0,
                                    k = 0,
                                    B = 0,
                                    O = 0,
                                    I = 0,
                                    T = 0,
                                    R = 0,
                                    M = 0,
                                    P = null,
                                    L = 0,
                                    U = new n.Buf16(16),
                                    N = new n.Buf16(16),
                                    C = null,
                                    j = 0;
                                for (E = 0; E <= 15; E++) U[E] = 0;
                                for (S = 0; S < f; S++) U[t[r + S]]++;
                                for (k = 15, B = x; k >= 1 && 0 === U[k]; k--);
                                if (B > k && (B = k), 0 === k) return l[u++] = 0x1400000, l[u++] = 0x1400000, c.bits = 1, 0;
                                for (A = 1; A < k && 0 === U[A]; A++);
                                for (B < A && (B = A), T = 1, E = 1; E <= 15; E++)
                                    if (T <<= 1, (T -= U[E]) < 0) return -1;
                                if (T > 0 && (0 === e || 1 !== k)) return -1;
                                for (E = 1, N[1] = 0; E < 15; E++) N[E + 1] = N[E] + U[E];
                                for (S = 0; S < f; S++) 0 !== t[r + S] && (h[N[t[r + S]]++] = S);
                                if (0 === e ? (P = C = h, m = 19) : 1 === e ? (P = i, L -= 257, C = o, j -= 257, m = 256) : (P = a, C = s, m = -1), M = 0, S = 0, E = A, b = u, O = B, I = 0, y = -1, g = (R = 1 << B) - 1, 1 === e && R > 852 || 2 === e && R > 592) return 1;
                                for (;;) {
                                    w = E - I, h[S] < m ? (v = 0, _ = h[S]) : h[S] > m ? (v = C[j + h[S]], _ = P[L + h[S]]) : (v = 96, _ = 0), d = 1 << E - I, A = p = 1 << O;
                                    do l[b + (M >> I) + (p -= d)] = w << 24 | v << 16 | _ | 0; while (0 !== p);
                                    for (d = 1 << E - 1; M & d;) d >>= 1;
                                    if (0 !== d ? (M &= d - 1, M += d) : M = 0, S++, 0 == --U[E]) {
                                        if (E === k) break;
                                        E = t[r + h[S]]
                                    }
                                    if (E > B && (M & g) !== y) {
                                        for (0 === I && (I = B), b += A, T = 1 << (O = E - I); O + I < k && !((T -= U[O + I]) <= 0);) O++, T <<= 1;
                                        if (R += 1 << O, 1 === e && R > 852 || 2 === e && R > 592) return 1;
                                        l[y = M & g] = B << 24 | O << 16 | b - u | 0
                                    }
                                }
                                return 0 !== M && (l[b + M] = E - I << 24 | 4194304), c.bits = B, 0
                            }
                        },
                        31: function(e) {
                            e.exports = {
                                2: "need dictionary",
                                1: "stream end",
                                0: "",
                                "-1": "file error",
                                "-2": "stream error",
                                "-3": "data error",
                                "-4": "insufficient memory",
                                "-5": "buffer error",
                                "-6": "incompatible version"
                            }
                        },
                        842: function(e, t, r) {
                            var n, i, o, a = r(380);

                            function s(e) {
                                for (var t = e.length; --t >= 0;) e[t] = 0
                            }
                            var f = 573,
                                l = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                                u = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                                h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                c = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                d = Array(576);
                            s(d);
                            var p = Array(60);
                            s(p);
                            var y = Array(512);
                            s(y);
                            var g = Array(256);
                            s(g);
                            var b = Array(29);
                            s(b);
                            var m = Array(30);

                            function w(e, t, r, n, i) {
                                this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length
                            }

                            function v(e, t) {
                                this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
                            }

                            function _(e) {
                                return e < 256 ? y[e] : y[256 + (e >>> 7)]
                            }

                            function x(e, t) {
                                e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
                            }

                            function E(e, t, r) {
                                e.bi_valid > 16 - r ? (e.bi_buf |= t << e.bi_valid & 65535, x(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += r - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r)
                            }

                            function S(e, t, r) {
                                E(e, r[2 * t], r[2 * t + 1])
                            }

                            function A(e, t) {
                                var r = 0;
                                do r |= 1 & e, e >>>= 1, r <<= 1; while (--t > 0);
                                return r >>> 1
                            }

                            function k(e, t, r) {
                                var n, i, o = Array(16),
                                    a = 0;
                                for (n = 1; n <= 15; n++) o[n] = a = a + r[n - 1] << 1;
                                for (i = 0; i <= t; i++) {
                                    var s = e[2 * i + 1];
                                    0 !== s && (e[2 * i] = A(o[s]++, s))
                                }
                            }

                            function B(e) {
                                var t;
                                for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
                                for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
                                for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                                e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
                            }

                            function O(e) {
                                e.bi_valid > 8 ? x(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
                            }

                            function I(e, t, r, n) {
                                var i = 2 * t,
                                    o = 2 * r;
                                return e[i] < e[o] || e[i] === e[o] && n[t] <= n[r]
                            }

                            function T(e, t, r) {
                                for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && I(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !I(t, n, e.heap[i], e.depth));) e.heap[r] = e.heap[i], r = i, i <<= 1;
                                e.heap[r] = n
                            }

                            function R(e, t, r) {
                                var n, i, o, a, s = 0;
                                if (0 !== e.last_lit)
                                    do n = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === n ? S(e, i, t) : (S(e, (o = g[i]) + 256 + 1, t), 0 !== (a = l[o]) && E(e, i -= b[o], a), S(e, o = _(--n), r), 0 !== (a = u[o]) && E(e, n -= m[o], a)); while (s < e.last_lit);
                                S(e, 256, t)
                            }

                            function M(e, t) {
                                var r, n, i, o = t.dyn_tree,
                                    a = t.stat_desc.static_tree,
                                    s = t.stat_desc.has_stree,
                                    l = t.stat_desc.elems,
                                    u = -1;
                                for (r = 0, e.heap_len = 0, e.heap_max = f; r < l; r++) 0 !== o[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : o[2 * r + 1] = 0;
                                for (; e.heap_len < 2;) o[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
                                for (t.max_code = u, r = e.heap_len >> 1; r >= 1; r--) T(e, o, r);
                                i = l;
                                do r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], T(e, o, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, o[2 * i] = o[2 * r] + o[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, o[2 * r + 1] = o[2 * n + 1] = i, e.heap[1] = i++, T(e, o, 1); while (e.heap_len >= 2);
                                e.heap[--e.heap_max] = e.heap[1],
                                    function(e, t) {
                                        var r, n, i, o, a, s, l = t.dyn_tree,
                                            u = t.max_code,
                                            h = t.stat_desc.static_tree,
                                            c = t.stat_desc.has_stree,
                                            d = t.stat_desc.extra_bits,
                                            p = t.stat_desc.extra_base,
                                            y = t.stat_desc.max_length,
                                            g = 0;
                                        for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
                                        for (l[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < f; r++)(o = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > y && (o = y, g++), l[2 * n + 1] = o, !(n > u) && (e.bl_count[o]++, a = 0, n >= p && (a = d[n - p]), s = l[2 * n], e.opt_len += s * (o + a), c && (e.static_len += s * (h[2 * n + 1] + a)));
                                        if (0 !== g) {
                                            do {
                                                for (o = y - 1; 0 === e.bl_count[o];) o--;
                                                e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[y]--, g -= 2
                                            } while (g > 0);
                                            for (o = y; 0 !== o; o--)
                                                for (n = e.bl_count[o]; 0 !== n;) !((i = e.heap[--r]) > u) && (l[2 * i + 1] !== o && (e.opt_len += (o - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = o), n--)
                                        }
                                    }(e, t), k(o, u, e.bl_count)
                            }

                            function P(e, t, r) {
                                var n, i, o = -1,
                                    a = t[1],
                                    s = 0,
                                    f = 7,
                                    l = 4;
                                for (0 === a && (f = 138, l = 3), t[(r + 1) * 2 + 1] = 65535, n = 0; n <= r; n++) i = a, a = t[(n + 1) * 2 + 1], (!(++s < f) || i !== a) && (s < l ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, s = 0, o = i, 0 === a ? (f = 138, l = 3) : i === a ? (f = 6, l = 3) : (f = 7, l = 4))
                            }

                            function L(e, t, r) {
                                var n, i, o = -1,
                                    a = t[1],
                                    s = 0,
                                    f = 7,
                                    l = 4;
                                for (0 === a && (f = 138, l = 3), n = 0; n <= r; n++)
                                    if (i = a, a = t[(n + 1) * 2 + 1], !(++s < f) || i !== a) {
                                        if (s < l)
                                            do S(e, i, e.bl_tree); while (0 != --s);
                                        else 0 !== i ? (i !== o && (S(e, i, e.bl_tree), s--), S(e, 16, e.bl_tree), E(e, s - 3, 2)) : s <= 10 ? (S(e, 17, e.bl_tree), E(e, s - 3, 3)) : (S(e, 18, e.bl_tree), E(e, s - 11, 7));
                                        s = 0, o = i, 0 === a ? (f = 138, l = 3) : i === a ? (f = 6, l = 3) : (f = 7, l = 4)
                                    }
                            }
                            s(m);
                            var U = !1;

                            function N(e, t, r, n) {
                                E(e, 0 + +!!n, 3), O(e), x(e, r), x(e, ~r), a.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r
                            }
                            t._tr_init = function(e) {
                                U || (function() {
                                    var e, t, r, a, s, f = Array(16);
                                    for (a = 0, r = 0; a < 28; a++)
                                        for (e = 0, b[a] = r; e < 1 << l[a]; e++) g[r++] = a;
                                    for (g[r - 1] = a, s = 0, a = 0; a < 16; a++)
                                        for (e = 0, m[a] = s; e < 1 << u[a]; e++) y[s++] = a;
                                    for (s >>= 7; a < 30; a++)
                                        for (e = 0, m[a] = s << 7; e < 1 << u[a] - 7; e++) y[256 + s++] = a;
                                    for (t = 0; t <= 15; t++) f[t] = 0;
                                    for (e = 0; e <= 143;) d[2 * e + 1] = 8, e++, f[8]++;
                                    for (; e <= 255;) d[2 * e + 1] = 9, e++, f[9]++;
                                    for (; e <= 279;) d[2 * e + 1] = 7, e++, f[7]++;
                                    for (; e <= 287;) d[2 * e + 1] = 8, e++, f[8]++;
                                    for (k(d, 287, f), e = 0; e < 30; e++) p[2 * e + 1] = 5, p[2 * e] = A(e, 5);
                                    n = new w(d, l, 257, 286, 15), i = new w(p, u, 0, 30, 15), o = new w([], h, 0, 19, 7)
                                }(), U = !0), e.l_desc = new v(e.dyn_ltree, n), e.d_desc = new v(e.dyn_dtree, i), e.bl_desc = new v(e.bl_tree, o), e.bi_buf = 0, e.bi_valid = 0, B(e)
                            }, t._tr_stored_block = N, t._tr_flush_block = function(e, t, r, n) {
                                var i, o, a = 0;
                                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                                    var t, r = 0xf3ffc07f;
                                    for (t = 0; t <= 31; t++, r >>>= 1)
                                        if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                                    for (t = 32; t < 256; t++)
                                        if (0 !== e.dyn_ltree[2 * t]) return 1;
                                    return 0
                                }(e)), M(e, e.l_desc), M(e, e.d_desc), a = function(e) {
                                    var t;
                                    for (P(e, e.dyn_ltree, e.l_desc.max_code), P(e, e.dyn_dtree, e.d_desc.max_code), M(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * c[t] + 1]; t--);
                                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                                }(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = r + 5, r + 4 <= i && -1 !== t ? N(e, t, r, n) : 4 === e.strategy || o === i ? (E(e, 2 + +!!n, 3), R(e, d, p)) : (E(e, 4 + +!!n, 3), function(e, t, r, n) {
                                    var i;
                                    for (E(e, t - 257, 5), E(e, r - 1, 5), E(e, n - 4, 4), i = 0; i < n; i++) E(e, e.bl_tree[2 * c[i] + 1], 3);
                                    L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, r - 1)
                                }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), R(e, e.dyn_ltree, e.dyn_dtree)), B(e), n && O(e)
                            }, t._tr_tally = function(e, t, r) {
                                return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[(g[r] + 256 + 1) * 2]++, e.dyn_dtree[2 * _(t)]++), e.last_lit === e.lit_bufsize - 1
                            }, t._tr_align = function(e) {
                                E(e, 2, 3), S(e, 256, d), 16 === e.bi_valid ? (x(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                            }
                        },
                        562: function(e) {
                            e.exports = function() {
                                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                            }
                        },
                        491: function(e) {
                            e.exports = r(70441)
                        },
                        300: function(e) {
                            e.exports = r(51642)
                        },
                        781: function(e) {
                            e.exports = r(46994)
                        },
                        837: function(e) {
                            e.exports = r(84864)
                        }
                    },
                    o = {};

                function a(e) {
                    var r = o[e];
                    if (void 0 !== r) return r.exports;
                    var n = o[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](n, n.exports, a), i = !1
                    } finally {
                        i && delete o[e]
                    }
                    return n.exports
                }
                a.ab = "//", e.exports = a(23)
            }()
        },
        89395: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHash = a, t.createCurve = function(e, t) {
                let r = t => (0, o.weierstrass)({ ...e,
                    ...a(t)
                });
                return Object.freeze({ ...r(t),
                    create: r
                })
            };
            let n = r(49130),
                i = r(15906),
                o = r(64976);

            function a(e) {
                return {
                    hash: e,
                    hmac: (t, ...r) => (0, n.hmac)(e, t, (0, i.concatBytes)(...r)),
                    randomBytes: i.randomBytes
                }
            }
        },
        91262: (e, t, r) => {
            "use strict";
            var n = r(51642).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToBuffer = t.normalize = t.recoverPublicKey = t.concatSig = t.legacyToBuffer = t.isNullish = t.padWithZeroes = void 0;
            let i = r(43118),
                o = r(67551);

            function a(e, t) {
                if ("" !== e && !/^[a-f0-9]+$/iu.test(e)) throw Error(`Expected an unprefixed hex string. Received: ${e}`);
                if (t < 0) throw Error(`Expected a non-negative integer target length. Received: ${t}`);
                return String.prototype.padStart.call(e, t, "0")
            }

            function s(e) {
                return null == e
            }
            t.padWithZeroes = a, t.isNullish = s, t.legacyToBuffer = function(e) {
                return "string" != typeof e || (0, o.isHexString)(e) ? (0, i.toBuffer)(e) : n.from(e)
            }, t.concatSig = function(e, t, r) {
                let n = (0, i.fromSigned)(t),
                    s = (0, i.fromSigned)(r),
                    f = (0, i.bufferToInt)(e),
                    l = a((0, i.toUnsigned)(n).toString("hex"), 64),
                    u = a((0, i.toUnsigned)(s).toString("hex"), 64),
                    h = (0, o.stripHexPrefix)((0, o.intToHex)(f));
                return (0, i.addHexPrefix)(l.concat(u, h))
            }, t.recoverPublicKey = function(e, t) {
                let r = (0, i.fromRpcSig)(t);
                return (0, i.ecrecover)(e, r.v, r.r, r.s)
            }, t.normalize = function(e) {
                if (!s(e)) {
                    if ("number" == typeof e) {
                        if (e < 0) return "0x";
                        let t = (0, i.toBuffer)(e);
                        e = (0, i.bufferToHex)(t)
                    }
                    if ("string" != typeof e) {
                        let t = "eth-sig-util.normalize() requires hex string or integer input.";
                        throw Error(t += ` received ${typeof e}: ${e}`)
                    }
                    return (0, i.addHexPrefix)(e.toLowerCase())
                }
            }, t.numberToBuffer = function(e) {
                let t = e.toString(16),
                    r = t.length % 2 ? "0" : "";
                return n.from(r + t, "hex")
            }
        },
        91408: (e, t, r) => {
            var n = r(16953);
            e.exports = function(e) {
                return "string" != typeof e ? e : n(e) ? e.slice(2) : e
            }
        },
        93263: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MAX_WITHDRAWALS_PER_PAYLOAD = t.RLP_EMPTY_STRING = t.KECCAK256_RLP = t.KECCAK256_RLP_S = t.KECCAK256_RLP_ARRAY = t.KECCAK256_RLP_ARRAY_S = t.KECCAK256_NULL = t.KECCAK256_NULL_S = t.TWO_POW256 = t.SECP256K1_ORDER_DIV_2 = t.SECP256K1_ORDER = t.MAX_INTEGER_BIGINT = t.MAX_INTEGER = t.MAX_UINT64 = void 0;
            let n = r(51642),
                i = r(88680);
            t.MAX_UINT64 = BigInt("0xffffffffffffffff"), t.MAX_INTEGER = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), t.MAX_INTEGER_BIGINT = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"), t.SECP256K1_ORDER = i.secp256k1.CURVE.n, t.SECP256K1_ORDER_DIV_2 = i.secp256k1.CURVE.n / BigInt(2), t.TWO_POW256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = n.Buffer.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = n.Buffer.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = n.Buffer.from(t.KECCAK256_RLP_S, "hex"), t.RLP_EMPTY_STRING = n.Buffer.from([128]), t.MAX_WITHDRAWALS_PER_PAYLOAD = 16
        },
        93529: (e, t, r) => {
            "use strict";
            var n = r(4404),
                i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                o = Object.prototype.toString,
                a = Array.prototype.concat,
                s = r(28160),
                f = r(66957)(),
                l = function(e, t, r, n) {
                    if (t in e) {
                        if (!0 === n) {
                            if (e[t] === r) return
                        } else {
                            if ("function" != typeof n || "[object Function]" !== o.call(n) || !n()) return
                        }
                    }
                    f ? s(e, t, r, !0) : s(e, t, r)
                },
                u = function(e, t) {
                    var r = arguments.length > 2 ? arguments[2] : {},
                        o = n(t);
                    i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < o.length; s += 1) l(e, o[s], t[o[s]], r[o[s]])
                };
            u.supportsDescriptors = !!f, e.exports = u
        },
        96355: (e, t, r) => {
            "use strict";
            var n;

            function i(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
            }

            function o(e, ...t) {
                if (!(e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }
            r.d(t, {
                c: () => tT
            });
            let s = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;

            function f(e) {
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }

            function l(e, t) {
                return e << 32 - t | e >>> t
            }

            function u(e, t) {
                return e << t | e >>> 32 - t >>> 0
            }
            let h = "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex,
                c = Array.from({
                    length: 256
                }, (e, t) => t.toString(16).padStart(2, "0")),
                d = {
                    _0: 48,
                    _9: 57,
                    A: 65,
                    F: 70,
                    a: 97,
                    f: 102
                };

            function p(e) {
                return e >= d._0 && e <= d._9 ? e - d._0 : e >= d.A && e <= d.F ? e - (d.A - 10) : e >= d.a && e <= d.f ? e - (d.a - 10) : void 0
            }

            function y(e) {
                if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function g(e) {
                return "string" == typeof e && (e = y(e)), o(e), e
            }

            function b(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    o(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }
            class m {
                clone() {
                    return this._cloneInto()
                }
            }

            function w(e) {
                let t = t => e().update(g(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }

            function v(e = 32) {
                if (s && "function" == typeof s.getRandomValues) return s.getRandomValues(new Uint8Array(e));
                if (s && "function" == typeof s.randomBytes) return Uint8Array.from(s.randomBytes(e));
                throw Error("crypto.getRandomValues must be defined")
            }
            class _ extends m {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1,
                        function(e) {
                            if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                            i(e.outputLen), i(e.blockLen)
                        }(e);
                    let r = g(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        o = new Uint8Array(n);
                    o.set(r.length > n ? e.create().update(r).digest() : r);
                    for (let e = 0; e < o.length; e++) o[e] ^= 54;
                    this.iHash.update(o), this.oHash = e.create();
                    for (let e = 0; e < o.length; e++) o[e] ^= 106;
                    this.oHash.update(o), o.fill(0)
                }
                update(e) {
                    return a(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    a(this), o(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: a
                    } = this;
                    return e.finished = n, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let x = (e, t, r) => new _(e, t).update(r).digest();
            x.create = (e, t) => new _(e, t);
            class E extends m {
                constructor(e, t, r, n) {
                    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.buffer = new Uint8Array(e), this.view = f(this.buffer)
                }
                update(e) {
                    a(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: n
                    } = this, i = (e = g(e)).length;
                    for (let o = 0; o < i;) {
                        let a = Math.min(n - this.pos, i - o);
                        if (a === n) {
                            let t = f(e);
                            for (; n <= i - o; o += n) this.process(t, o);
                            continue
                        }
                        r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === n && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    a(this),
                        function(e, t) {
                            o(e);
                            let r = t.outputLen;
                            if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
                        }(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: n,
                        isLE: i
                    } = this, {
                        pos: s
                    } = this;
                    t[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > n - s && (this.process(r, 0), s = 0);
                    for (let e = s; e < n; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            o = BigInt(0xffffffff),
                            a = Number(r >> i & o),
                            s = Number(r & o),
                            f = 4 * !!n,
                            l = 4 * !n;
                        e.setUint32(t + f, a, n), e.setUint32(t + l, s, n)
                    }(r, n - 8, BigInt(8 * this.length), i), this.process(r, 0);
                    let l = f(e),
                        u = this.outputLen;
                    if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let h = u / 4,
                        c = this.get();
                    if (h > c.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < h; e++) l.setUint32(4 * e, c[e], i)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: a
                    } = this;
                    return e.length = n, e.pos = a, e.finished = i, e.destroyed = o, n % t && e.buffer.set(r), e
                }
            }
            let S = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
                A = new Uint8Array(Array(16).fill(0).map((e, t) => t)),
                k = A.map(e => (9 * e + 5) % 16),
                B = [A],
                O = [k];
            for (let e = 0; e < 4; e++)
                for (let t of [B, O]) t.push(t[e].map(e => S[e]));
            let I = [
                    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
                    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
                    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
                    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
                    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
                ].map(e => new Uint8Array(e)),
                T = B.map((e, t) => e.map(e => I[t][e])),
                R = O.map((e, t) => e.map(e => I[t][e])),
                M = new Uint32Array([0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]),
                P = new Uint32Array([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0]);

            function L(e, t, r, n) {
                return 0 === e ? t ^ r ^ n : 1 === e ? t & r | ~t & n : 2 === e ? (t | ~r) ^ n : 3 === e ? t & n | r & ~n : t ^ (r | ~n)
            }
            let U = new Uint32Array(16);
            class N extends E {
                constructor() {
                    super(64, 20, 8, !0), this.h0 = 0x67452301, this.h1 = -0x10325477, this.h2 = -0x67452302, this.h3 = 0x10325476, this.h4 = -0x3c2d1e10
                }
                get() {
                    let {
                        h0: e,
                        h1: t,
                        h2: r,
                        h3: n,
                        h4: i
                    } = this;
                    return [e, t, r, n, i]
                }
                set(e, t, r, n, i) {
                    this.h0 = 0 | e, this.h1 = 0 | t, this.h2 = 0 | r, this.h3 = 0 | n, this.h4 = 0 | i
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) U[r] = e.getUint32(t, !0);
                    let r = 0 | this.h0,
                        n = r,
                        i = 0 | this.h1,
                        o = i,
                        a = 0 | this.h2,
                        s = a,
                        f = 0 | this.h3,
                        l = f,
                        h = 0 | this.h4,
                        c = h;
                    for (let e = 0; e < 5; e++) {
                        let t = 4 - e,
                            d = M[e],
                            p = P[e],
                            y = B[e],
                            g = O[e],
                            b = T[e],
                            m = R[e];
                        for (let t = 0; t < 16; t++) {
                            let n = u(r + L(e, i, a, f) + U[y[t]] + d, b[t]) + h | 0;
                            r = h, h = f, f = 0 | u(a, 10), a = i, i = n
                        }
                        for (let e = 0; e < 16; e++) {
                            let r = u(n + L(t, o, s, l) + U[g[e]] + p, m[e]) + c | 0;
                            n = c, c = l, l = 0 | u(s, 10), s = o, o = r
                        }
                    }
                    this.set(this.h1 + a + l | 0, this.h2 + f + c | 0, this.h3 + h + n | 0, this.h4 + r + o | 0, this.h0 + i + s | 0)
                }
                roundClean() {
                    U.fill(0)
                }
                destroy() {
                    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0)
                }
            }
            let C = w(() => new N),
                j = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
                H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]),
                D = new Uint32Array(64);
            class K extends E {
                constructor(e = 32) {
                    super(64, e, 8, !1), this.A = 0 | H[0], this.B = 0 | H[1], this.C = 0 | H[2], this.D = 0 | H[3], this.E = 0 | H[4], this.F = 0 | H[5], this.G = 0 | H[6], this.H = 0 | H[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: a,
                        H: s
                    } = this;
                    return [e, t, r, n, i, o, a, s]
                }
                set(e, t, r, n, i, o, a, s) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) D[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = D[e - 15],
                            r = D[e - 2],
                            n = l(t, 7) ^ l(t, 18) ^ t >>> 3,
                            i = l(r, 17) ^ l(r, 19) ^ r >>> 10;
                        D[e] = i + D[e - 7] + n + D[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: i,
                        D: o,
                        E: a,
                        F: s,
                        G: f,
                        H: u
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        var h, c, d, p;
                        let t = u + (l(a, 6) ^ l(a, 11) ^ l(a, 25)) + ((h = a) & s ^ ~h & f) + j[e] + D[e] | 0,
                            y = (l(r, 2) ^ l(r, 13) ^ l(r, 22)) + ((c = r) & (d = n) ^ c & (p = i) ^ d & p) | 0;
                        u = f, f = s, s = a, a = o + t | 0, o = i, i = n, n = r, r = t + y | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, s = s + this.F | 0, f = f + this.G | 0, u = u + this.H | 0, this.set(r, n, i, o, a, s, f, u)
                }
                roundClean() {
                    D.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let $ = w(() => new K),
                z = BigInt(0x100000000 - 1),
                F = BigInt(32),
                q = {
                    split: function(e, t = !1) {
                        let r = new Uint32Array(e.length),
                            n = new Uint32Array(e.length);
                        for (let i = 0; i < e.length; i++) {
                            let {
                                h: o,
                                l: a
                            } = function(e, t = !1) {
                                return t ? {
                                    h: Number(e & z),
                                    l: Number(e >> F & z)
                                } : {
                                    h: 0 | Number(e >> F & z),
                                    l: 0 | Number(e & z)
                                }
                            }(e[i], t);
                            [r[i], n[i]] = [o, a]
                        }
                        return [r, n]
                    },
                    shrSH: (e, t, r) => e >>> r,
                    shrSL: (e, t, r) => e << 32 - r | t >>> r,
                    rotrSH: (e, t, r) => e >>> r | t << 32 - r,
                    rotrSL: (e, t, r) => e << 32 - r | t >>> r,
                    rotrBH: (e, t, r) => e << 64 - r | t >>> r - 32,
                    rotrBL: (e, t, r) => e >>> r - 32 | t << 64 - r,
                    add: function(e, t, r, n) {
                        let i = (t >>> 0) + (n >>> 0);
                        return {
                            h: e + r + (i / 0x100000000 | 0) | 0,
                            l: 0 | i
                        }
                    },
                    add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
                    add3H: (e, t, r, n) => t + r + n + (e / 0x100000000 | 0) | 0,
                    add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
                    add4H: (e, t, r, n, i) => t + r + n + i + (e / 0x100000000 | 0) | 0,
                    add5H: (e, t, r, n, i, o) => t + r + n + i + o + (e / 0x100000000 | 0) | 0,
                    add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
                },
                [Z, V] = q.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e))),
                W = new Uint32Array(80),
                G = new Uint32Array(80);
            class Y extends E {
                constructor(e = 64) {
                    super(128, e, 16, !1), this.Ah = 0x6a09e667, this.Al = -0xc4336f8, this.Bh = -0x4498517b, this.Bl = -0x7b3558c5, this.Ch = 0x3c6ef372, this.Cl = -0x16b07d5, this.Dh = -0x5ab00ac6, this.Dl = 0x5f1d36f1, this.Eh = 0x510e527f, this.El = -0x52197d2f, this.Fh = -0x64fa9774, this.Fl = 0x2b3e6c1f, this.Gh = 0x1f83d9ab, this.Gl = -0x4be4295, this.Hh = 0x5be0cd19, this.Hl = 0x137e2179
                }
                get() {
                    let {
                        Ah: e,
                        Al: t,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: o,
                        Dh: a,
                        Dl: s,
                        Eh: f,
                        El: l,
                        Fh: u,
                        Fl: h,
                        Gh: c,
                        Gl: d,
                        Hh: p,
                        Hl: y
                    } = this;
                    return [e, t, r, n, i, o, a, s, f, l, u, h, c, d, p, y]
                }
                set(e, t, r, n, i, o, a, s, f, l, u, h, c, d, p, y) {
                    this.Ah = 0 | e, this.Al = 0 | t, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | a, this.Dl = 0 | s, this.Eh = 0 | f, this.El = 0 | l, this.Fh = 0 | u, this.Fl = 0 | h, this.Gh = 0 | c, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | y
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) W[r] = e.getUint32(t), G[r] = e.getUint32(t += 4);
                    for (let e = 16; e < 80; e++) {
                        let t = 0 | W[e - 15],
                            r = 0 | G[e - 15],
                            n = q.rotrSH(t, r, 1) ^ q.rotrSH(t, r, 8) ^ q.shrSH(t, r, 7),
                            i = q.rotrSL(t, r, 1) ^ q.rotrSL(t, r, 8) ^ q.shrSL(t, r, 7),
                            o = 0 | W[e - 2],
                            a = 0 | G[e - 2],
                            s = q.rotrSH(o, a, 19) ^ q.rotrBH(o, a, 61) ^ q.shrSH(o, a, 6),
                            f = q.rotrSL(o, a, 19) ^ q.rotrBL(o, a, 61) ^ q.shrSL(o, a, 6),
                            l = q.add4L(i, f, G[e - 7], G[e - 16]),
                            u = q.add4H(l, n, s, W[e - 7], W[e - 16]);
                        W[e] = 0 | u, G[e] = 0 | l
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: i,
                        Bl: o,
                        Ch: a,
                        Cl: s,
                        Dh: f,
                        Dl: l,
                        Eh: u,
                        El: h,
                        Fh: c,
                        Fl: d,
                        Gh: p,
                        Gl: y,
                        Hh: g,
                        Hl: b
                    } = this;
                    for (let e = 0; e < 80; e++) {
                        let t = q.rotrSH(u, h, 14) ^ q.rotrSH(u, h, 18) ^ q.rotrBH(u, h, 41),
                            m = q.rotrSL(u, h, 14) ^ q.rotrSL(u, h, 18) ^ q.rotrBL(u, h, 41),
                            w = u & c ^ ~u & p,
                            v = h & d ^ ~h & y,
                            _ = q.add5L(b, m, v, V[e], G[e]),
                            x = q.add5H(_, g, t, w, Z[e], W[e]),
                            E = 0 | _,
                            S = q.rotrSH(r, n, 28) ^ q.rotrBH(r, n, 34) ^ q.rotrBH(r, n, 39),
                            A = q.rotrSL(r, n, 28) ^ q.rotrBL(r, n, 34) ^ q.rotrBL(r, n, 39),
                            k = r & i ^ r & a ^ i & a,
                            B = n & o ^ n & s ^ o & s;
                        g = 0 | p, b = 0 | y, p = 0 | c, y = 0 | d, c = 0 | u, d = 0 | h, ({
                            h: u,
                            l: h
                        } = q.add(0 | f, 0 | l, 0 | x, 0 | E)), f = 0 | a, l = 0 | s, a = 0 | i, s = 0 | o, i = 0 | r, o = 0 | n;
                        let O = q.add3L(E, A, B);
                        r = q.add3H(O, x, S, k), n = 0 | O
                    }({
                        h: r,
                        l: n
                    } = q.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: i,
                        l: o
                    } = q.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)), ({
                        h: a,
                        l: s
                    } = q.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | s)), ({
                        h: f,
                        l: l
                    } = q.add(0 | this.Dh, 0 | this.Dl, 0 | f, 0 | l)), ({
                        h: u,
                        l: h
                    } = q.add(0 | this.Eh, 0 | this.El, 0 | u, 0 | h)), ({
                        h: c,
                        l: d
                    } = q.add(0 | this.Fh, 0 | this.Fl, 0 | c, 0 | d)), ({
                        h: p,
                        l: y
                    } = q.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | y)), ({
                        h: g,
                        l: b
                    } = q.add(0 | this.Hh, 0 | this.Hl, 0 | g, 0 | b)), this.set(r, n, i, o, a, s, f, l, u, h, c, d, p, y, g, b)
                }
                roundClean() {
                    W.fill(0), G.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            let X = w(() => new Y),
                Q = BigInt(0),
                J = BigInt(1);

            function ee(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function et(e) {
                if (!ee(e)) throw Error("Uint8Array expected")
            }

            function er(e, t) {
                if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t)
            }

            function en(e) {
                let t = e.toString(16);
                return 1 & t.length ? "0" + t : t
            }

            function ei(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return "" === e ? Q : BigInt("0x" + e)
            }
            let eo = "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex,
                ea = Array.from({
                    length: 256
                }, (e, t) => t.toString(16).padStart(2, "0"));

            function es(e) {
                if (et(e), eo) return e.toHex();
                let t = "";
                for (let r = 0; r < e.length; r++) t += ea[e[r]];
                return t
            }
            let ef = {
                _0: 48,
                _9: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function el(e) {
                return e >= ef._0 && e <= ef._9 ? e - ef._0 : e >= ef.A && e <= ef.F ? e - (ef.A - 10) : e >= ef.a && e <= ef.f ? e - (ef.a - 10) : void 0
            }

            function eu(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                if (eo) return Uint8Array.fromHex(e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = el(e.charCodeAt(i)),
                        o = el(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    n[t] = 16 * r + o
                }
                return n
            }

            function eh(e) {
                return ei(es(e))
            }

            function ec(e) {
                return et(e), ei(es(Uint8Array.from(e).reverse()))
            }

            function ed(e, t) {
                return eu(e.toString(16).padStart(2 * t, "0"))
            }

            function ep(e, t) {
                return ed(e, t).reverse()
            }

            function ey(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = eu(t)
                    } catch (t) {
                        throw Error(e + " must be hex string or Uint8Array, cause: " + t)
                    } else if (ee(t)) n = Uint8Array.from(t);
                    else throw Error(e + " must be hex string or Uint8Array");
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(e + " of length " + r + " expected, got " + i);
                return n
            }

            function eg(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    et(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }
            let eb = e => "bigint" == typeof e && Q <= e;

            function em(e, t, r) {
                return eb(e) && eb(t) && eb(r) && t <= e && e < r
            }

            function ew(e, t, r, n) {
                if (!em(t, r, n)) throw Error("expected valid " + e + ": " + r + " <= n < " + n + ", got " + t)
            }
            let ev = e => (J << BigInt(e)) - J,
                e_ = e => new Uint8Array(e),
                ex = e => Uint8Array.from(e),
                eE = {
                    bigint: e => "bigint" == typeof e,
                    function: e => "function" == typeof e,
                    boolean: e => "boolean" == typeof e,
                    string: e => "string" == typeof e,
                    stringOrUint8Array: e => "string" == typeof e || ee(e),
                    isSafeInteger: e => Number.isSafeInteger(e),
                    array: e => Array.isArray(e),
                    field: (e, t) => t.Fp.isValid(e),
                    hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
                };

            function eS(e, t, r = {}) {
                let n = (t, r, n) => {
                    let i = eE[r];
                    if ("function" != typeof i) throw Error("invalid validator function");
                    let o = e[t];
                    if ((!n || void 0 !== o) && !i(o, e)) throw Error("param " + String(t) + " is invalid. Expected " + r + ", got " + o)
                };
                for (let [e, r] of Object.entries(t)) n(e, r, !1);
                for (let [e, t] of Object.entries(r)) n(e, t, !0);
                return e
            }

            function eA(e) {
                let t = new WeakMap;
                return (r, ...n) => {
                    let i = t.get(r);
                    if (void 0 !== i) return i;
                    let o = e(r, ...n);
                    return t.set(r, o), o
                }
            }
            let ek = BigInt(0),
                eB = BigInt(1),
                eO = BigInt(2),
                eI = BigInt(3),
                eT = BigInt(4),
                eR = BigInt(5),
                eM = BigInt(8);

            function eP(e, t) {
                let r = e % t;
                return r >= ek ? r : t + r
            }

            function eL(e, t, r) {
                let n = e;
                for (; t-- > ek;) n *= n, n %= r;
                return n
            }

            function eU(e, t) {
                if (e === ek) throw Error("invert: expected non-zero number");
                if (t <= ek) throw Error("invert: expected positive modulus, got " + t);
                let r = eP(e, t),
                    n = t,
                    i = ek,
                    o = eB,
                    a = eB,
                    s = ek;
                for (; r !== ek;) {
                    let e = n / r,
                        t = n % r,
                        f = i - a * e,
                        l = o - s * e;
                    n = r, r = t, i = a, o = s, a = f, s = l
                }
                if (n !== eB) throw Error("invert: does not exist");
                return eP(i, t)
            }
            let eN = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function eC(e, t) {
                let r = void 0 !== t ? t : e.toString(2).length,
                    n = Math.ceil(r / 8);
                return {
                    nBitLength: r,
                    nByteLength: n
                }
            }

            function ej(e, t, r = !1, n = {}) {
                let i;
                if (e <= ek) throw Error("invalid field: expected ORDER > 0, got " + e);
                let {
                    nBitLength: o,
                    nByteLength: a
                } = eC(e, t);
                if (a > 2048) throw Error("invalid field: expected ORDER of <= 2048 bytes");
                let s = Object.freeze({
                    ORDER: e,
                    isLE: r,
                    BITS: o,
                    BYTES: a,
                    MASK: ev(o),
                    ZERO: ek,
                    ONE: eB,
                    create: t => eP(t, e),
                    isValid: t => {
                        if ("bigint" != typeof t) throw Error("invalid field element: expected bigint, got " + typeof t);
                        return ek <= t && t < e
                    },
                    is0: e => e === ek,
                    isOdd: e => (e & eB) === eB,
                    neg: t => eP(-t, e),
                    eql: (e, t) => e === t,
                    sqr: t => eP(t * t, e),
                    add: (t, r) => eP(t + r, e),
                    sub: (t, r) => eP(t - r, e),
                    mul: (t, r) => eP(t * r, e),
                    pow: (e, t) => (function(e, t, r) {
                        if (r < ek) throw Error("invalid exponent, negatives unsupported");
                        if (r === ek) return e.ONE;
                        if (r === eB) return t;
                        let n = e.ONE,
                            i = t;
                        for (; r > ek;) r & eB && (n = e.mul(n, i)), i = e.sqr(i), r >>= eB;
                        return n
                    })(s, e, t),
                    div: (t, r) => eP(t * eU(r, e), e),
                    sqrN: e => e * e,
                    addN: (e, t) => e + t,
                    subN: (e, t) => e - t,
                    mulN: (e, t) => e * t,
                    inv: t => eU(t, e),
                    sqrt: n.sqrt || (t => (i || (i = function(e) {
                        if (e % eT === eI) {
                            let t = (e + eB) / eT;
                            return function(e, r) {
                                let n = e.pow(r, t);
                                if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                return n
                            }
                        }
                        if (e % eM === eR) {
                            let t = (e - eR) / eM;
                            return function(e, r) {
                                let n = e.mul(r, eO),
                                    i = e.pow(n, t),
                                    o = e.mul(r, i),
                                    a = e.mul(e.mul(o, eO), i),
                                    s = e.mul(o, e.sub(a, e.ONE));
                                if (!e.eql(e.sqr(s), r)) throw Error("Cannot find square root");
                                return s
                            }
                        }
                        return function(e) {
                            let t, r, n;
                            let i = (e - eB) / eO;
                            for (t = e - eB, r = 0; t % eO === ek; t /= eO, r++);
                            for (n = eO; n < e && function(e, t, r) {
                                    if (t < ek) throw Error("invalid exponent, negatives unsupported");
                                    if (r <= ek) throw Error("invalid modulus");
                                    if (r === eB) return ek;
                                    let n = eB;
                                    for (; t > ek;) t & eB && (n = n * e % r), e = e * e % r, t >>= eB;
                                    return n
                                }(n, i, e) !== e - eB; n++)
                                if (n > 1e3) throw Error("Cannot find square root: likely non-prime P");
                            if (1 === r) {
                                let t = (e + eB) / eT;
                                return function(e, r) {
                                    let n = e.pow(r, t);
                                    if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            let o = (t + eB) / eO;
                            return function(e, a) {
                                if (e.pow(a, i) === e.neg(e.ONE)) throw Error("Cannot find square root");
                                let s = r,
                                    f = e.pow(e.mul(e.ONE, n), t),
                                    l = e.pow(a, o),
                                    u = e.pow(a, t);
                                for (; !e.eql(u, e.ONE);) {
                                    if (e.eql(u, e.ZERO)) return e.ZERO;
                                    let t = 1;
                                    for (let r = e.sqr(u); t < s && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                                    let r = e.pow(f, eB << BigInt(s - t - 1));
                                    f = e.sqr(r), l = e.mul(l, r), u = e.mul(u, f), s = t
                                }
                                return l
                            }
                        }(e)
                    }(e)), i(s, t))),
                    invertBatch: e => (function(e, t) {
                        let r = Array(t.length),
                            n = t.reduce((t, n, i) => e.is0(n) ? t : (r[i] = t, e.mul(t, n)), e.ONE),
                            i = e.inv(n);
                        return t.reduceRight((t, n, i) => e.is0(n) ? t : (r[i] = e.mul(t, r[i]), e.mul(t, n)), i), r
                    })(s, e),
                    cmov: (e, t, r) => r ? t : e,
                    toBytes: e => r ? ep(e, a) : ed(e, a),
                    fromBytes: e => {
                        if (e.length !== a) throw Error("Field.fromBytes: expected " + a + " bytes, got " + e.length);
                        return r ? ec(e) : eh(e)
                    }
                });
                return Object.freeze(s)
            }

            function eH(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                return Math.ceil(e.toString(2).length / 8)
            }

            function eD(e) {
                let t = eH(e);
                return t + Math.ceil(t / 2)
            }
            let eK = BigInt(0),
                e$ = BigInt(1);

            function ez(e, t) {
                let r = t.negate();
                return e ? r : t
            }

            function eF(e, t) {
                if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw Error("invalid window size, expected [1.." + t + "], got W=" + e)
            }

            function eq(e, t) {
                eF(e, t);
                let r = Math.ceil(t / e) + 1,
                    n = 2 ** (e - 1),
                    i = 2 ** e;
                return {
                    windows: r,
                    windowSize: n,
                    mask: ev(e),
                    maxNumber: i,
                    shiftBy: BigInt(e)
                }
            }

            function eZ(e, t, r) {
                let {
                    windowSize: n,
                    mask: i,
                    maxNumber: o,
                    shiftBy: a
                } = r, s = Number(e & i), f = e >> a;
                s > n && (s -= o, f += e$);
                let l = t * n,
                    u = l + Math.abs(s) - 1,
                    h = 0 === s;
                return {
                    nextN: f,
                    offset: u,
                    isZero: h,
                    isNeg: s < 0,
                    isNegF: t % 2 != 0,
                    offsetF: l
                }
            }
            let eV = new WeakMap,
                eW = new WeakMap;

            function eG(e) {
                return eW.get(e) || 1
            }

            function eY(e) {
                return eS(e.Fp, eN.reduce((e, t) => (e[t] = "function", e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                })), eS(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...eC(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                })
            }

            function eX(e) {
                void 0 !== e.lowS && er("lowS", e.lowS), void 0 !== e.prehash && er("prehash", e.prehash)
            }
            class eQ extends Error {
                constructor(e = "") {
                    super(e)
                }
            }
            let eJ = {
                    Err: eQ,
                    _tlv: {
                        encode: (e, t) => {
                            let {
                                Err: r
                            } = eJ;
                            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                            if (1 & t.length) throw new r("tlv.encode: unpadded data");
                            let n = t.length / 2,
                                i = en(n);
                            if (i.length / 2 & 128) throw new r("tlv.encode: long form length too big");
                            let o = n > 127 ? en(i.length / 2 | 128) : "";
                            return en(e) + o + i + t
                        },
                        decode(e, t) {
                            let {
                                Err: r
                            } = eJ, n = 0;
                            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                            if (t.length < 2 || t[n++] !== e) throw new r("tlv.decode: wrong tlv");
                            let i = t[n++],
                                o = 0;
                            if (128 & i) {
                                let e = 127 & i;
                                if (!e) throw new r("tlv.decode(long): indefinite length not supported");
                                if (e > 4) throw new r("tlv.decode(long): byte length is too big");
                                let a = t.subarray(n, n + e);
                                if (a.length !== e) throw new r("tlv.decode: length bytes not complete");
                                if (0 === a[0]) throw new r("tlv.decode(long): zero leftmost byte");
                                for (let e of a) o = o << 8 | e;
                                if (n += e, o < 128) throw new r("tlv.decode(long): not minimal encoding")
                            } else o = i;
                            let a = t.subarray(n, n + o);
                            if (a.length !== o) throw new r("tlv.decode: wrong value length");
                            return {
                                v: a,
                                l: t.subarray(n + o)
                            }
                        }
                    },
                    _int: {
                        encode(e) {
                            let {
                                Err: t
                            } = eJ;
                            if (e < e0) throw new t("integer: negative integers are not allowed");
                            let r = en(e);
                            if (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length) throw new t("unexpected DER parsing assertion: unpadded hex");
                            return r
                        },
                        decode(e) {
                            let {
                                Err: t
                            } = eJ;
                            if (128 & e[0]) throw new t("invalid signature integer: negative");
                            if (0 === e[0] && !(128 & e[1])) throw new t("invalid signature integer: unnecessary leading zero");
                            return eh(e)
                        }
                    },
                    toSig(e) {
                        let {
                            Err: t,
                            _int: r,
                            _tlv: n
                        } = eJ, i = ey("signature", e), {
                            v: o,
                            l: a
                        } = n.decode(48, i);
                        if (a.length) throw new t("invalid signature: left bytes after parsing");
                        let {
                            v: s,
                            l: f
                        } = n.decode(2, o), {
                            v: l,
                            l: u
                        } = n.decode(2, f);
                        if (u.length) throw new t("invalid signature: left bytes after parsing");
                        return {
                            r: r.decode(s),
                            s: r.decode(l)
                        }
                    },
                    hexFromSig(e) {
                        let {
                            _tlv: t,
                            _int: r
                        } = eJ, n = t.encode(2, r.encode(e.r)), i = t.encode(2, r.encode(e.s));
                        return t.encode(48, n + i)
                    }
                },
                e0 = BigInt(0),
                e1 = BigInt(1),
                e2 = (BigInt(2), BigInt(3)),
                e5 = (BigInt(4), BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")),
                e3 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                e8 = BigInt(1),
                e6 = BigInt(2),
                e4 = (e, t) => (e + t / e6) / t,
                e7 = ej(e5, void 0, void 0, {
                    sqrt: function(e) {
                        let t = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            i = BigInt(22),
                            o = BigInt(23),
                            a = BigInt(44),
                            s = BigInt(88),
                            f = e * e * e % e5,
                            l = f * f * e % e5,
                            u = eL(l, t, e5) * l % e5,
                            h = eL(u, t, e5) * l % e5,
                            c = eL(h, e6, e5) * f % e5,
                            d = eL(c, n, e5) * c % e5,
                            p = eL(d, i, e5) * d % e5,
                            y = eL(p, a, e5) * p % e5,
                            g = eL(y, s, e5) * y % e5,
                            b = eL(g, a, e5) * p % e5,
                            m = eL(b, t, e5) * l % e5,
                            w = eL(m, o, e5) * d % e5,
                            v = eL(w, r, e5) * f % e5,
                            _ = eL(v, e6, e5);
                        if (!e7.eql(e7.sqr(_), e)) throw Error("Cannot find square root");
                        return _
                    }
                }),
                e9 = function(e, t) {
                    let r = t => (function(e) {
                        let t = function(e) {
                                let t = eY(e);
                                return eS(t, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...t
                                })
                            }(e),
                            {
                                Fp: r,
                                n: n
                            } = t,
                            i = r.BYTES + 1,
                            o = 2 * r.BYTES + 1;

                        function a(e) {
                            return eP(e, n)
                        }
                        let {
                            ProjectivePoint: s,
                            normPrivateKeyToScalar: f,
                            weierstrassEquation: l,
                            isWithinCurveOrder: u
                        } = function(e) {
                            var t;
                            let r = function(e) {
                                    let t = eY(e);
                                    eS(t, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a: i
                                    } = t;
                                    if (r) {
                                        if (!n.eql(i, n.ZERO)) throw Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("invalid endomorphism, expected beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...t
                                    })
                                }(e),
                                {
                                    Fp: n
                                } = r,
                                i = ej(r.n, r.nBitLength),
                                o = r.toBytes || ((e, t, r) => {
                                    let i = t.toAffine();
                                    return eg(Uint8Array.from([4]), n.toBytes(i.x), n.toBytes(i.y))
                                }),
                                a = r.fromBytes || (e => {
                                    let t = e.subarray(1);
                                    return {
                                        x: n.fromBytes(t.subarray(0, n.BYTES)),
                                        y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES))
                                    }
                                });

                            function s(e) {
                                let {
                                    a: t,
                                    b: i
                                } = r, o = n.sqr(e), a = n.mul(o, e);
                                return n.add(n.add(a, n.mul(e, t)), i)
                            }
                            if (!n.eql(n.sqr(r.Gy), s(r.Gx))) throw Error("bad generator point: equation left != right");

                            function f(e) {
                                let t;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: i,
                                    wrapPrivateKey: o,
                                    n: a
                                } = r;
                                if (n && "bigint" != typeof e) {
                                    if (ee(e) && (e = es(e)), "string" != typeof e || !n.includes(e.length)) throw Error("invalid private key");
                                    e = e.padStart(2 * i, "0")
                                }
                                try {
                                    t = "bigint" == typeof e ? e : eh(ey("private key", e, i))
                                } catch (t) {
                                    throw Error("invalid private key, expected hex or " + i + " bytes, got " + typeof e)
                                }
                                return o && (t = eP(t, a)), ew("private key", t, e1, a), t
                            }

                            function l(e) {
                                if (!(e instanceof c)) throw Error("ProjectivePoint expected")
                            }
                            let u = eA((e, t) => {
                                    let {
                                        px: r,
                                        py: i,
                                        pz: o
                                    } = e;
                                    if (n.eql(o, n.ONE)) return {
                                        x: r,
                                        y: i
                                    };
                                    let a = e.is0();
                                    null == t && (t = a ? n.ONE : n.inv(o));
                                    let s = n.mul(r, t),
                                        f = n.mul(i, t),
                                        l = n.mul(o, t);
                                    if (a) return {
                                        x: n.ZERO,
                                        y: n.ZERO
                                    };
                                    if (!n.eql(l, n.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: s,
                                        y: f
                                    }
                                }),
                                h = eA(e => {
                                    if (e.is0()) {
                                        if (r.allowInfinityPoint && !n.is0(e.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: t,
                                        y: i
                                    } = e.toAffine();
                                    if (!n.isValid(t) || !n.isValid(i)) throw Error("bad point: x or y not FE");
                                    let o = n.sqr(i),
                                        a = s(t);
                                    if (!n.eql(o, a)) throw Error("bad point: equation left != right");
                                    if (!e.isTorsionFree()) throw Error("bad point: not in prime-order subgroup");
                                    return !0
                                });
                            class c {
                                constructor(e, t, r) {
                                    if (null == e || !n.isValid(e)) throw Error("x required");
                                    if (null == t || !n.isValid(t)) throw Error("y required");
                                    if (null == r || !n.isValid(r)) throw Error("z required");
                                    this.px = e, this.py = t, this.pz = r, Object.freeze(this)
                                }
                                static fromAffine(e) {
                                    let {
                                        x: t,
                                        y: r
                                    } = e || {};
                                    if (!e || !n.isValid(t) || !n.isValid(r)) throw Error("invalid affine point");
                                    if (e instanceof c) throw Error("projective point not allowed");
                                    let i = e => n.eql(e, n.ZERO);
                                    return i(t) && i(r) ? c.ZERO : new c(t, r, n.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(e) {
                                    let t = n.invertBatch(e.map(e => e.pz));
                                    return e.map((e, r) => e.toAffine(t[r])).map(c.fromAffine)
                                }
                                static fromHex(e) {
                                    let t = c.fromAffine(a(ey("pointHex", e)));
                                    return t.assertValidity(), t
                                }
                                static fromPrivateKey(e) {
                                    return c.BASE.multiply(f(e))
                                }
                                static msm(e, t) {
                                    return function(e, t, r, n) {
                                        if (function(e, t) {
                                                if (!Array.isArray(e)) throw Error("array expected");
                                                e.forEach((e, r) => {
                                                    if (!(e instanceof t)) throw Error("invalid point at index " + r)
                                                })
                                            }(r, e), function(e, t) {
                                                if (!Array.isArray(e)) throw Error("array of scalars expected");
                                                e.forEach((e, r) => {
                                                    if (!t.isValid(e)) throw Error("invalid scalar at index " + r)
                                                })
                                            }(n, t), r.length !== n.length) throw Error("arrays of points and scalars must have equal length");
                                        let i = e.ZERO,
                                            o = function(e) {
                                                let t;
                                                for (t = 0; e > Q; e >>= J, t += 1);
                                                return t
                                            }(BigInt(r.length)),
                                            a = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
                                            s = ev(a),
                                            f = Array(Number(s) + 1).fill(i),
                                            l = Math.floor((t.BITS - 1) / a) * a,
                                            u = i;
                                        for (let e = l; e >= 0; e -= a) {
                                            f.fill(i);
                                            for (let t = 0; t < n.length; t++) {
                                                let i = Number(n[t] >> BigInt(e) & s);
                                                f[i] = f[i].add(r[t])
                                            }
                                            let t = i;
                                            for (let e = f.length - 1, r = i; e > 0; e--) r = r.add(f[e]), t = t.add(r);
                                            if (u = u.add(t), 0 !== e)
                                                for (let e = 0; e < a; e++) u = u.double()
                                        }
                                        return u
                                    }(c, i, e, t)
                                }
                                _setWindowSize(e) {
                                    p.setWindowSize(this, e)
                                }
                                assertValidity() {
                                    h(this)
                                }
                                hasEvenY() {
                                    let {
                                        y: e
                                    } = this.toAffine();
                                    if (n.isOdd) return !n.isOdd(e);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(e) {
                                    l(e);
                                    let {
                                        px: t,
                                        py: r,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: a,
                                        pz: s
                                    } = e, f = n.eql(n.mul(t, s), n.mul(o, i)), u = n.eql(n.mul(r, s), n.mul(a, i));
                                    return f && u
                                }
                                negate() {
                                    return new c(this.px, n.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: e,
                                        b: t
                                    } = r, i = n.mul(t, e2), {
                                        px: o,
                                        py: a,
                                        pz: s
                                    } = this, f = n.ZERO, l = n.ZERO, u = n.ZERO, h = n.mul(o, o), d = n.mul(a, a), p = n.mul(s, s), y = n.mul(o, a);
                                    return y = n.add(y, y), u = n.mul(o, s), u = n.add(u, u), f = n.mul(e, u), l = n.mul(i, p), l = n.add(f, l), f = n.sub(d, l), l = n.add(d, l), l = n.mul(f, l), f = n.mul(y, f), u = n.mul(i, u), p = n.mul(e, p), y = n.sub(h, p), y = n.mul(e, y), y = n.add(y, u), u = n.add(h, h), h = n.add(u, h), h = n.add(h, p), h = n.mul(h, y), l = n.add(l, h), p = n.mul(a, s), p = n.add(p, p), h = n.mul(p, y), f = n.sub(f, h), u = n.mul(p, d), u = n.add(u, u), new c(f, l, u = n.add(u, u))
                                }
                                add(e) {
                                    l(e);
                                    let {
                                        px: t,
                                        py: i,
                                        pz: o
                                    } = this, {
                                        px: a,
                                        py: s,
                                        pz: f
                                    } = e, u = n.ZERO, h = n.ZERO, d = n.ZERO, p = r.a, y = n.mul(r.b, e2), g = n.mul(t, a), b = n.mul(i, s), m = n.mul(o, f), w = n.add(t, i), v = n.add(a, s);
                                    w = n.mul(w, v), v = n.add(g, b), w = n.sub(w, v), v = n.add(t, o);
                                    let _ = n.add(a, f);
                                    return v = n.mul(v, _), _ = n.add(g, m), v = n.sub(v, _), _ = n.add(i, o), u = n.add(s, f), _ = n.mul(_, u), u = n.add(b, m), _ = n.sub(_, u), d = n.mul(p, v), u = n.mul(y, m), d = n.add(u, d), u = n.sub(b, d), d = n.add(b, d), h = n.mul(u, d), b = n.add(g, g), b = n.add(b, g), m = n.mul(p, m), v = n.mul(y, v), b = n.add(b, m), m = n.sub(g, m), m = n.mul(p, m), v = n.add(v, m), g = n.mul(b, v), h = n.add(h, g), g = n.mul(_, v), u = n.mul(w, u), u = n.sub(u, g), g = n.mul(w, b), d = n.mul(_, d), new c(u, h, d = n.add(d, g))
                                }
                                subtract(e) {
                                    return this.add(e.negate())
                                }
                                is0() {
                                    return this.equals(c.ZERO)
                                }
                                wNAF(e) {
                                    return p.wNAFCached(this, e, c.normalizeZ)
                                }
                                multiplyUnsafe(e) {
                                    let {
                                        endo: t,
                                        n: i
                                    } = r;
                                    ew("scalar", e, e0, i);
                                    let o = c.ZERO;
                                    if (e === e0) return o;
                                    if (this.is0() || e === e1) return this;
                                    if (!t || p.hasPrecomputes(this)) return p.wNAFCachedUnsafe(this, e, c.normalizeZ);
                                    let {
                                        k1neg: a,
                                        k1: s,
                                        k2neg: f,
                                        k2: l
                                    } = t.splitScalar(e), u = o, h = o, d = this;
                                    for (; s > e0 || l > e0;) s & e1 && (u = u.add(d)), l & e1 && (h = h.add(d)), d = d.double(), s >>= e1, l >>= e1;
                                    return a && (u = u.negate()), f && (h = h.negate()), h = new c(n.mul(h.px, t.beta), h.py, h.pz), u.add(h)
                                }
                                multiply(e) {
                                    let t, i;
                                    let {
                                        endo: o,
                                        n: a
                                    } = r;
                                    if (ew("scalar", e, e1, a), o) {
                                        let {
                                            k1neg: r,
                                            k1: a,
                                            k2neg: s,
                                            k2: f
                                        } = o.splitScalar(e), {
                                            p: l,
                                            f: u
                                        } = this.wNAF(a), {
                                            p: h,
                                            f: d
                                        } = this.wNAF(f);
                                        l = p.constTimeNegate(r, l), h = p.constTimeNegate(s, h), h = new c(n.mul(h.px, o.beta), h.py, h.pz), t = l.add(h), i = u.add(d)
                                    } else {
                                        let {
                                            p: r,
                                            f: n
                                        } = this.wNAF(e);
                                        t = r, i = n
                                    }
                                    return c.normalizeZ([t, i])[0]
                                }
                                multiplyAndAddUnsafe(e, t, r) {
                                    let n = c.BASE,
                                        i = (e, t) => t !== e0 && t !== e1 && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t),
                                        o = i(this, t).add(i(e, r));
                                    return o.is0() ? void 0 : o
                                }
                                toAffine(e) {
                                    return u(this, e)
                                }
                                isTorsionFree() {
                                    let {
                                        h: e,
                                        isTorsionFree: t
                                    } = r;
                                    if (e === e1) return !0;
                                    if (t) return t(c, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: e,
                                        clearCofactor: t
                                    } = r;
                                    return e === e1 ? this : t ? t(c, this) : this.multiplyUnsafe(r.h)
                                }
                                toRawBytes(e = !0) {
                                    return er("isCompressed", e), this.assertValidity(), o(c, this, e)
                                }
                                toHex(e = !0) {
                                    return er("isCompressed", e), es(this.toRawBytes(e))
                                }
                            }
                            c.BASE = new c(r.Gx, r.Gy, n.ONE), c.ZERO = new c(n.ZERO, n.ONE, n.ZERO);
                            let d = r.nBitLength,
                                p = (t = r.endo ? Math.ceil(d / 2) : d, {
                                    constTimeNegate: ez,
                                    hasPrecomputes: e => 1 !== eG(e),
                                    unsafeLadder(e, t, r = c.ZERO) {
                                        let n = e;
                                        for (; t > eK;) t & e$ && (r = r.add(n)), n = n.double(), t >>= e$;
                                        return r
                                    },
                                    precomputeWindow(e, r) {
                                        let {
                                            windows: n,
                                            windowSize: i
                                        } = eq(r, t), o = [], a = e, s = a;
                                        for (let e = 0; e < n; e++) {
                                            s = a, o.push(s);
                                            for (let e = 1; e < i; e++) s = s.add(a), o.push(s);
                                            a = s.double()
                                        }
                                        return o
                                    },
                                    wNAF(e, r, n) {
                                        let i = c.ZERO,
                                            o = c.BASE,
                                            a = eq(e, t);
                                        for (let e = 0; e < a.windows; e++) {
                                            let {
                                                nextN: t,
                                                offset: s,
                                                isZero: f,
                                                isNeg: l,
                                                isNegF: u,
                                                offsetF: h
                                            } = eZ(n, e, a);
                                            n = t, f ? o = o.add(ez(u, r[h])) : i = i.add(ez(l, r[s]))
                                        }
                                        return {
                                            p: i,
                                            f: o
                                        }
                                    },
                                    wNAFUnsafe(e, r, n, i = c.ZERO) {
                                        let o = eq(e, t);
                                        for (let e = 0; e < o.windows && n !== eK; e++) {
                                            let {
                                                nextN: t,
                                                offset: a,
                                                isZero: s,
                                                isNeg: f
                                            } = eZ(n, e, o);
                                            if (n = t, !s) {
                                                let e = r[a];
                                                i = i.add(f ? e.negate() : e)
                                            }
                                        }
                                        return i
                                    },
                                    getPrecomputes(e, t, r) {
                                        let n = eV.get(t);
                                        return n || (n = this.precomputeWindow(t, e), 1 !== e && eV.set(t, r(n))), n
                                    },
                                    wNAFCached(e, t, r) {
                                        let n = eG(e);
                                        return this.wNAF(n, this.getPrecomputes(n, e, r), t)
                                    },
                                    wNAFCachedUnsafe(e, t, r, n) {
                                        let i = eG(e);
                                        return 1 === i ? this.unsafeLadder(e, t, n) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n)
                                    },
                                    setWindowSize(e, r) {
                                        eF(r, t), eW.set(e, r), eV.delete(e)
                                    }
                                });
                            return {
                                CURVE: r,
                                ProjectivePoint: c,
                                normPrivateKeyToScalar: f,
                                weierstrassEquation: s,
                                isWithinCurveOrder: function(e) {
                                    return em(e, e1, r.n)
                                }
                            }
                        }({ ...t,
                            toBytes(e, t, n) {
                                let i = t.toAffine(),
                                    o = r.toBytes(i.x);
                                return (er("isCompressed", n), n) ? eg(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o) : eg(Uint8Array.from([4]), o, r.toBytes(i.y))
                            },
                            fromBytes(e) {
                                let t = e.length,
                                    n = e[0],
                                    a = e.subarray(1);
                                if (t === i && (2 === n || 3 === n)) {
                                    let e;
                                    let t = eh(a);
                                    if (!em(t, e1, r.ORDER)) throw Error("Point is not on curve");
                                    let i = l(t);
                                    try {
                                        e = r.sqrt(i)
                                    } catch (e) {
                                        throw Error("Point is not on curve" + (e instanceof Error ? ": " + e.message : ""))
                                    }
                                    return (1 & n) == 1 != ((e & e1) === e1) && (e = r.neg(e)), {
                                        x: t,
                                        y: e
                                    }
                                }
                                if (t === o && 4 === n) return {
                                    x: r.fromBytes(a.subarray(0, r.BYTES)),
                                    y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES))
                                };
                                throw Error("invalid Point, expected length of " + i + ", or uncompressed " + o + ", got " + t)
                            }
                        }), h = e => es(ed(e, t.nByteLength)), c = (e, t, r) => eh(e.slice(t, r));
                        class d {
                            constructor(e, t, r) {
                                ew("r", e, e1, n), ew("s", t, e1, n), this.r = e, this.s = t, null != r && (this.recovery = r), Object.freeze(this)
                            }
                            static fromCompact(e) {
                                let r = t.nByteLength;
                                return new d(c(e = ey("compactSignature", e, 2 * r), 0, r), c(e, r, 2 * r))
                            }
                            static fromDER(e) {
                                let {
                                    r: t,
                                    s: r
                                } = eJ.toSig(ey("DER", e));
                                return new d(t, r)
                            }
                            assertValidity() {}
                            addRecoveryBit(e) {
                                return new d(this.r, this.s, e)
                            }
                            recoverPublicKey(e) {
                                let {
                                    r: i,
                                    s: o,
                                    recovery: f
                                } = this, l = g(ey("msgHash", e));
                                if (null == f || ![0, 1, 2, 3].includes(f)) throw Error("recovery id invalid");
                                let u = 2 === f || 3 === f ? i + t.n : i;
                                if (u >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let c = (1 & f) == 0 ? "02" : "03",
                                    d = s.fromHex(c + h(u)),
                                    p = eU(u, n),
                                    y = a(-l * p),
                                    b = a(o * p),
                                    m = s.BASE.multiplyAndAddUnsafe(d, y, b);
                                if (!m) throw Error("point at infinify");
                                return m.assertValidity(), m
                            }
                            hasHighS() {
                                return this.s > n >> e1
                            }
                            normalizeS() {
                                return this.hasHighS() ? new d(this.r, a(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return eu(this.toDERHex())
                            }
                            toDERHex() {
                                return eJ.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return eu(this.toCompactHex())
                            }
                            toCompactHex() {
                                return h(this.r) + h(this.s)
                            }
                        }

                        function p(e) {
                            let t = ee(e),
                                r = "string" == typeof e,
                                n = (t || r) && e.length;
                            return t ? n === i || n === o : r ? n === 2 * i || n === 2 * o : e instanceof s
                        }
                        let y = t.bits2int || function(e) {
                                if (e.length > 8192) throw Error("input is too large");
                                let r = eh(e),
                                    n = 8 * e.length - t.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            g = t.bits2int_modN || function(e) {
                                return a(y(e))
                            },
                            b = ev(t.nBitLength);

                        function m(e) {
                            return ew("num < 2^" + t.nBitLength, e, e0, b), ed(e, t.nByteLength)
                        }
                        let w = {
                                lowS: t.lowS,
                                prehash: !1
                            },
                            v = {
                                lowS: t.lowS,
                                prehash: !1
                            };
                        return s.BASE._setWindowSize(8), {
                            CURVE: t,
                            getPublicKey: function(e, t = !0) {
                                return s.fromPrivateKey(e).toRawBytes(t)
                            },
                            getSharedSecret: function(e, t, r = !0) {
                                if (p(e)) throw Error("first arg must be private key");
                                if (!p(t)) throw Error("second arg must be public key");
                                return s.fromHex(t).multiply(f(e)).toRawBytes(r)
                            },
                            sign: function(e, i, o = w) {
                                let {
                                    seed: l,
                                    k2sig: h
                                } = function(e, i, o = w) {
                                    if (["recovered", "canonical"].some(e => e in o)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: l,
                                        randomBytes: h
                                    } = t, {
                                        lowS: c,
                                        prehash: p,
                                        extraEntropy: b
                                    } = o;
                                    null == c && (c = !0), e = ey("msgHash", e), eX(o), p && (e = ey("prehashed msgHash", l(e)));
                                    let v = g(e),
                                        _ = f(i),
                                        x = [m(_), m(v)];
                                    if (null != b && !1 !== b) {
                                        let e = !0 === b ? h(r.BYTES) : b;
                                        x.push(ey("extraEntropy", e))
                                    }
                                    return {
                                        seed: eg(...x),
                                        k2sig: function(e) {
                                            let t = y(e);
                                            if (!u(t)) return;
                                            let r = eU(t, n),
                                                i = s.BASE.multiply(t).toAffine(),
                                                o = a(i.x);
                                            if (o === e0) return;
                                            let f = a(r * a(v + o * _));
                                            if (f === e0) return;
                                            let l = 2 * (i.x !== o) | Number(i.y & e1),
                                                h = f;
                                            if (c && f > n >> e1) {
                                                var p;
                                                h = (p = f) > n >> e1 ? a(-p) : p, l ^= 1
                                            }
                                            return new d(o, h, l)
                                        }
                                    }
                                }(e, i, o);
                                return (function(e, t, r) {
                                    if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                                    if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                                    if ("function" != typeof r) throw Error("hmacFn must be a function");
                                    let n = e_(e),
                                        i = e_(e),
                                        o = 0,
                                        a = () => {
                                            n.fill(1), i.fill(0), o = 0
                                        },
                                        s = (...e) => r(i, n, ...e),
                                        f = (e = e_(0)) => {
                                            i = s(ex([0]), e), n = s(), 0 !== e.length && (i = s(ex([1]), e), n = s())
                                        },
                                        l = () => {
                                            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                                            let e = 0,
                                                r = [];
                                            for (; e < t;) {
                                                let t = (n = s()).slice();
                                                r.push(t), e += n.length
                                            }
                                            return eg(...r)
                                        };
                                    return (e, t) => {
                                        let r;
                                        for (a(), f(e); !(r = t(l()));) f();
                                        return a(), r
                                    }
                                })(t.hash.outputLen, t.nByteLength, t.hmac)(l, h)
                            },
                            verify: function(e, r, i, o = v) {
                                let f, l;
                                r = ey("msgHash", r), i = ey("publicKey", i);
                                let {
                                    lowS: u,
                                    prehash: h,
                                    format: c
                                } = o;
                                if (eX(o), "strict" in o) throw Error("options.strict was renamed to lowS");
                                if (void 0 !== c && "compact" !== c && "der" !== c) throw Error("format must be compact or der");
                                let p = "string" == typeof e || ee(e),
                                    y = !p && !c && "object" == typeof e && null !== e && "bigint" == typeof e.r && "bigint" == typeof e.s;
                                if (!p && !y) throw Error("invalid signature, expected Uint8Array, hex string or Signature instance");
                                try {
                                    if (y && (l = new d(e.r, e.s)), p) {
                                        try {
                                            "compact" !== c && (l = d.fromDER(e))
                                        } catch (e) {
                                            if (!(e instanceof eJ.Err)) throw e
                                        }
                                        l || "der" === c || (l = d.fromCompact(e))
                                    }
                                    f = s.fromHex(i)
                                } catch (e) {
                                    return !1
                                }
                                if (!l || u && l.hasHighS()) return !1;
                                h && (r = t.hash(r));
                                let {
                                    r: b,
                                    s: m
                                } = l, w = g(r), _ = eU(m, n), x = a(w * _), E = a(b * _), S = s.BASE.multiplyAndAddUnsafe(f, x, E) ? .toAffine();
                                return !!S && a(S.x) === b
                            },
                            ProjectivePoint: s,
                            Signature: d,
                            utils: {
                                isValidPrivateKey(e) {
                                    try {
                                        return f(e), !0
                                    } catch (e) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: f,
                                randomPrivateKey: () => {
                                    let e = eD(t.n);
                                    return function(e, t, r = !1) {
                                        let n = e.length,
                                            i = eH(t),
                                            o = eD(t);
                                        if (n < 16 || n < o || n > 1024) throw Error("expected " + o + "-1024 bytes of input, got " + n);
                                        let a = eP(r ? ec(e) : eh(e), t - eB) + eB;
                                        return r ? ep(a, i) : ed(a, i)
                                    }(t.randomBytes(e), t.n)
                                },
                                precompute: (e = 8, t = s.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                            }
                        }
                    })({ ...e,
                        hash: t,
                        hmac: (e, ...r) => x(t, e, b(...r)),
                        randomBytes: v
                    });
                    return { ...r(t),
                        create: r
                    }
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: e7,
                    n: e3,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: e => {
                            let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -e8 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                i = BigInt("0x100000000000000000000000000000000"),
                                o = e4(t * e, e3),
                                a = e4(-r * e, e3),
                                s = eP(e - o * t - a * n, e3),
                                f = eP(-o * r - a * t, e3),
                                l = s > i,
                                u = f > i;
                            if (l && (s = e3 - s), u && (f = e3 - f), s > i || f > i) throw Error("splitScalar: Endomorphism failed, k=" + e);
                            return {
                                k1neg: l,
                                k1: s,
                                k2neg: u,
                                k2: f
                            }
                        }
                    }
                }, $),
                te = (BigInt(0), {}),
                tt = e => e.toRawBytes(!0).slice(1),
                tr = e => mod(e, e3),
                tn = e9.ProjectivePoint;

            function ti(e) {
                return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
            }

            function to(e, t) {
                return !!Array.isArray(t) && (0 === t.length || (e ? t.every(e => "string" == typeof e) : t.every(e => Number.isSafeInteger(e))))
            }

            function ta(e) {
                if ("function" != typeof e) throw Error("function expected");
                return !0
            }

            function ts(e, t) {
                if ("string" != typeof t) throw Error(`${e}: string expected`);
                return !0
            }

            function tf(e) {
                if (!Number.isSafeInteger(e)) throw Error(`invalid integer: ${e}`)
            }

            function tl(e) {
                if (!Array.isArray(e)) throw Error("array expected")
            }

            function tu(e, t) {
                if (!to(!0, t)) throw Error(`${e}: array of strings expected`)
            }

            function th(...e) {
                let t = e => e,
                    r = (e, t) => r => e(t(r));
                return {
                    encode: e.map(e => e.encode).reduceRight(r, t),
                    decode: e.map(e => e.decode).reduce(r, t)
                }
            }

            function tc(e) {
                let t = "string" == typeof e ? e.split("") : e,
                    r = t.length;
                tu("alphabet", t);
                let n = new Map(t.map((e, t) => [e, t]));
                return {
                    encode: n => (tl(n), n.map(n => {
                        if (!Number.isSafeInteger(n) || n < 0 || n >= r) throw Error(`alphabet.encode: digit index outside alphabet "${n}". Allowed: ${e}`);
                        return t[n]
                    })),
                    decode: t => (tl(t), t.map(t => {
                        ts("alphabet.decode", t);
                        let r = n.get(t);
                        if (void 0 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
                        return r
                    }))
                }
            }

            function td(e = "") {
                return ts("join", e), {
                    encode: t => (tu("join.decode", t), t.join(e)),
                    decode: t => (ts("join.decode", t), t.split(e))
                }
            }

            function tp(e, t, r) {
                if (t < 2) throw Error(`convertRadix: invalid from=${t}, base cannot be less than 2`);
                if (r < 2) throw Error(`convertRadix: invalid to=${r}, base cannot be less than 2`);
                if (tl(e), !e.length) return [];
                let n = 0,
                    i = [],
                    o = Array.from(e, e => {
                        if (tf(e), e < 0 || e >= t) throw Error(`invalid integer: ${e}`);
                        return e
                    }),
                    a = o.length;
                for (;;) {
                    let e = 0,
                        s = !0;
                    for (let i = n; i < a; i++) {
                        let a = o[i],
                            f = t * e,
                            l = f + a;
                        if (!Number.isSafeInteger(l) || f / t !== e || l - a !== f) throw Error("convertRadix: carry overflow");
                        let u = l / r;
                        e = l % r;
                        let h = Math.floor(u);
                        if (o[i] = h, !Number.isSafeInteger(h) || h * r + e !== l) throw Error("convertRadix: carry overflow");
                        s && (h ? s = !1 : n = i)
                    }
                    if (i.push(e), s) break
                }
                for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
                return i.reverse()
            }
            let ty = (e, t) => 0 === t ? e : ty(t, e % t),
                tg = (e, t) => e + (t - ty(e, t)),
                tb = (() => {
                    let e = [];
                    for (let t = 0; t < 40; t++) e.push(2 ** t);
                    return e
                })(),
                tm = th((n = 58, tf(58), {
                    encode: e => {
                        if (!ti(e)) throw Error("radix.encode input should be Uint8Array");
                        return tp(Array.from(e), 256, 58)
                    },
                    decode: e => ((function(e, t) {
                        if (!to(!1, t)) throw Error(`${e}: array of numbers expected`)
                    })("radix.decode", e), Uint8Array.from(tp(e, 58, 256)))
                }), tc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), td("")),
                tw = th(tc("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), td("")),
                tv = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

            function t_(e) {
                let t = e >> 25,
                    r = (0x1ffffff & e) << 5;
                for (let e = 0; e < tv.length; e++)(t >> e & 1) == 1 && (r ^= tv[e]);
                return r
            }
            let tx = e9.ProjectivePoint,
                tE = (e => th(function(e, t) {
                    return tf(4), ta(t), {
                        encode(r) {
                            if (!ti(r)) throw Error("checksum.encode: input should be Uint8Array");
                            let n = t(r).slice(0, 4),
                                i = new Uint8Array(r.length + e);
                            return i.set(r), i.set(n, r.length), i
                        },
                        decode(r) {
                            if (!ti(r)) throw Error("checksum.decode: input should be Uint8Array");
                            let n = r.slice(0, -e),
                                i = r.slice(-e),
                                o = t(n).slice(0, e);
                            for (let t = 0; t < e; t++)
                                if (o[t] !== i[t]) throw Error("Invalid checksum");
                            return n
                        }
                    }
                }(4, t => e(e(t))), tm))($);

            function tS(e) {
                return o(e), BigInt("0x" + (0 === e.length ? "0" : function(e) {
                    if (o(e), h) return e.toHex();
                    let t = "";
                    for (let r = 0; r < e.length; r++) t += c[e[r]];
                    return t
                }(e)))
            }
            let tA = y("Bitcoin seed"),
                tk = {
                    private: 0x488ade4,
                    public: 0x488b21e
                },
                tB = e => C($(e)),
                tO = e => f(e).getUint32(0, !1),
                tI = e => {
                    if (!Number.isSafeInteger(e) || e < 0 || e > 0x100000000 - 1) throw Error("invalid number, should be from 0 to 2**32-1, got " + e);
                    let t = new Uint8Array(4);
                    return f(t).setUint32(0, e, !1), t
                };
            class tT {
                get fingerprint() {
                    if (!this.pubHash) throw Error("No publicKey set!");
                    return tO(this.pubHash)
                }
                get identifier() {
                    return this.pubHash
                }
                get pubKeyHash() {
                    return this.pubHash
                }
                get privateKey() {
                    return this.privKeyBytes || null
                }
                get publicKey() {
                    return this.pubKey || null
                }
                get privateExtendedKey() {
                    let e = this.privateKey;
                    if (!e) throw Error("No private key");
                    return tE.encode(this.serialize(this.versions.private, b(new Uint8Array([0]), e)))
                }
                get publicExtendedKey() {
                    if (!this.pubKey) throw Error("No public key");
                    return tE.encode(this.serialize(this.versions.public, this.pubKey))
                }
                static fromMasterSeed(e, t = tk) {
                    if (o(e), 8 * e.length < 128 || 8 * e.length > 512) throw Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got " + e.length);
                    let r = x(X, tA, e);
                    return new tT({
                        versions: t,
                        chainCode: r.slice(32),
                        privateKey: r.slice(0, 32)
                    })
                }
                static fromExtendedKey(e, t = tk) {
                    let r = tE.decode(e),
                        n = f(r),
                        i = n.getUint32(0, !1),
                        o = {
                            versions: t,
                            depth: r[4],
                            parentFingerprint: n.getUint32(5, !1),
                            index: n.getUint32(9, !1),
                            chainCode: r.slice(13, 45)
                        },
                        a = r.slice(45),
                        s = 0 === a[0];
                    if (i !== t[s ? "private" : "public"]) throw Error("Version mismatch");
                    return new tT(s ? { ...o,
                        privateKey: a.slice(1)
                    } : { ...o,
                        publicKey: a
                    })
                }
                static fromJSON(e) {
                    return tT.fromExtendedKey(e.xpriv)
                }
                constructor(e) {
                    if (this.depth = 0, this.index = 0, this.chainCode = null, this.parentFingerprint = 0, !e || "object" != typeof e) throw Error("HDKey.constructor must not be called directly");
                    if (this.versions = e.versions || tk, this.depth = e.depth || 0, this.chainCode = e.chainCode || null, this.index = e.index || 0, this.parentFingerprint = e.parentFingerprint || 0, !this.depth && (this.parentFingerprint || this.index)) throw Error("HDKey: zero depth with non-zero index/parent fingerprint");
                    if (e.publicKey && e.privateKey) throw Error("HDKey: publicKey and privateKey at same time.");
                    if (e.privateKey) {
                        if (!e9.utils.isValidPrivateKey(e.privateKey)) throw Error("Invalid private key");
                        this.privKey = "bigint" == typeof e.privateKey ? e.privateKey : tS(e.privateKey), this.privKeyBytes = function(e) {
                            if ("bigint" != typeof e) throw Error("bigint expected");
                            return function(e) {
                                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                                if (h) return Uint8Array.fromHex(e);
                                let t = e.length,
                                    r = t / 2;
                                if (t % 2) throw Error("hex string expected, got unpadded hex of length " + t);
                                let n = new Uint8Array(r);
                                for (let t = 0, i = 0; t < r; t++, i += 2) {
                                    let r = p(e.charCodeAt(i)),
                                        o = p(e.charCodeAt(i + 1));
                                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                                    n[t] = 16 * r + o
                                }
                                return n
                            }(e.toString(16).padStart(64, "0"))
                        }(this.privKey), this.pubKey = e9.getPublicKey(e.privateKey, !0)
                    } else if (e.publicKey) this.pubKey = tx.fromHex(e.publicKey).toRawBytes(!0);
                    else throw Error("HDKey: no public or private key provided");
                    this.pubHash = tB(this.pubKey)
                }
                derive(e) {
                    if (!/^[mM]'?/.test(e)) throw Error('Path must start with "m" or "M"');
                    if (/^[mM]'?$/.test(e)) return this;
                    let t = e.replace(/^[mM]'?\//, "").split("/"),
                        r = this;
                    for (let e of t) {
                        let t = /^(\d+)('?)$/.exec(e),
                            n = t && t[1];
                        if (!t || 3 !== t.length || "string" != typeof n) throw Error("invalid child index: " + e);
                        let i = +n;
                        if (!Number.isSafeInteger(i) || i >= 0x80000000) throw Error("Invalid index");
                        "'" === t[2] && (i += 0x80000000), r = r.deriveChild(i)
                    }
                    return r
                }
                deriveChild(e) {
                    if (!this.pubKey || !this.chainCode) throw Error("No publicKey or chainCode set");
                    let t = tI(e);
                    if (e >= 0x80000000) {
                        let e = this.privateKey;
                        if (!e) throw Error("Could not derive hardened child key");
                        t = b(new Uint8Array([0]), e, t)
                    } else t = b(this.pubKey, t);
                    let r = x(X, this.chainCode, t),
                        n = tS(r.slice(0, 32)),
                        i = r.slice(32);
                    if (!e9.utils.isValidPrivateKey(n)) throw Error("Tweak bigger than curve order");
                    let o = {
                        versions: this.versions,
                        chainCode: i,
                        depth: this.depth + 1,
                        parentFingerprint: this.fingerprint,
                        index: e
                    };
                    try {
                        if (this.privateKey) {
                            let e = eP(this.privKey + n, e9.CURVE.n);
                            if (!e9.utils.isValidPrivateKey(e)) throw Error("The tweak was out of range or the resulted private key is invalid");
                            o.privateKey = e
                        } else {
                            let e = tx.fromHex(this.pubKey).add(tx.fromPrivateKey(n));
                            if (e.equals(tx.ZERO)) throw Error("The tweak was equal to negative P, which made the result key invalid");
                            o.publicKey = e.toRawBytes(!0)
                        }
                        return new tT(o)
                    } catch (t) {
                        return this.deriveChild(e + 1)
                    }
                }
                sign(e) {
                    if (!this.privateKey) throw Error("No privateKey set!");
                    return o(e, 32), e9.sign(e, this.privKey).toCompactRawBytes()
                }
                verify(e, t) {
                    let r;
                    if (o(e, 32), o(t, 64), !this.publicKey) throw Error("No publicKey set!");
                    try {
                        r = e9.Signature.fromCompact(t)
                    } catch (e) {
                        return !1
                    }
                    return e9.verify(r, e, this.publicKey)
                }
                wipePrivateData() {
                    return this.privKey = void 0, this.privKeyBytes && (this.privKeyBytes.fill(0), this.privKeyBytes = void 0), this
                }
                toJSON() {
                    return {
                        xpriv: this.privateExtendedKey,
                        xpub: this.publicExtendedKey
                    }
                }
                serialize(e, t) {
                    if (!this.chainCode) throw Error("No chainCode set");
                    return o(t, 33), b(tI(e), new Uint8Array([this.depth]), tI(this.parentFingerprint), tI(this.index), this.chainCode, t)
                }
            }
        },
        97598: e => {
            "use strict";
            var t = function(e) {
                return e != e
            };
            e.exports = function(e, r) {
                return 0 === e && 0 === r ? 1 / e == 1 / r : !!(e === r || t(e) && t(r))
            }
        },
        98417: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Lock = void 0;
            class r {
                constructor() {
                    this.permits = 1, this.promiseResolverQueue = []
                }
                async acquire() {
                    return this.permits > 0 ? (this.permits -= 1, Promise.resolve(!0)) : new Promise(e => this.promiseResolverQueue.push(e))
                }
                release() {
                    if (this.permits += 1, this.permits > 1 && this.promiseResolverQueue.length > 0) console.warn("Lock.permits should never be > 0 when there is someone waiting.");
                    else if (1 === this.permits && this.promiseResolverQueue.length > 0) {
                        this.permits -= 1;
                        let e = this.promiseResolverQueue.shift();
                        e && e(!0)
                    }
                }
            }
            t.Lock = r
        }
    }
]);