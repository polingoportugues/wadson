(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8420], {
        260: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0;
            let i = r(29067);
            t.ZodIssueCode = i.util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]), t.quotelessJson = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
            class n extends Error {
                get errors() {
                    return this.issues
                }
                constructor(e) {
                    super(), this.issues = [], this.addIssue = e => {
                        this.issues = [...this.issues, e]
                    }, this.addIssues = (e = []) => {
                        this.issues = [...this.issues, ...e]
                    };
                    let t = new.target.prototype;
                    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
                }
                format(e) {
                    let t = e || function(e) {
                            return e.message
                        },
                        r = {
                            _errors: []
                        },
                        i = e => {
                            for (let n of e.issues)
                                if ("invalid_union" === n.code) n.unionErrors.map(i);
                                else if ("invalid_return_type" === n.code) i(n.returnTypeError);
                            else if ("invalid_arguments" === n.code) i(n.argumentsError);
                            else if (0 === n.path.length) r._errors.push(t(n));
                            else {
                                let e = r,
                                    i = 0;
                                for (; i < n.path.length;) {
                                    let r = n.path[i];
                                    i === n.path.length - 1 ? (e[r] = e[r] || {
                                        _errors: []
                                    }, e[r]._errors.push(t(n))) : e[r] = e[r] || {
                                        _errors: []
                                    }, e = e[r], i++
                                }
                            }
                        };
                    return i(this), r
                }
                static assert(e) {
                    if (!(e instanceof n)) throw Error(`Not a ZodError: ${e}`)
                }
                toString() {
                    return this.message
                }
                get message() {
                    return JSON.stringify(this.issues, i.util.jsonStringifyReplacer, 2)
                }
                get isEmpty() {
                    return 0 === this.issues.length
                }
                flatten(e = e => e.message) {
                    let t = {},
                        r = [];
                    for (let i of this.issues) i.path.length > 0 ? (t[i.path[0]] = t[i.path[0]] || [], t[i.path[0]].push(e(i))) : r.push(e(i));
                    return {
                        formErrors: r,
                        fieldErrors: t
                    }
                }
                get formErrors() {
                    return this.flatten()
                }
            }
            t.ZodError = n, n.create = e => new n(e)
        },
        13829: (e, t, r) => {
            "use strict";
            r.d(t, {
                Cg: () => s,
                Cl: () => i,
                Tt: () => n,
                fX: () => o
            });
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function n(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function s(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }
            Object.create;

            function o(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
            Object.create, "function" == typeof SuppressedError && SuppressedError
        },
        14505: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZX: () => B
            });
            var i, n, s = r(17674),
                o = r(3098),
                a = r(73095),
                l = r(30728),
                u = r(51552),
                c = r(31704),
                d = r(14157);
            let h = new Uint8Array(32),
                p = {
                    amount: 0xffffffffffffffff n,
                    script: o.wg
                },
                f = e => Math.ceil(e / 4);
            o.Lo.decimal(8);
            let g = (e, t) => void 0 === e ? t : e;

            function y(e) {
                if (Array.isArray(e)) return e.map(e => y(e));
                if ((0, c.aY)(e)) return Uint8Array.from(e);
                if (["number", "bigint", "boolean", "string", "undefined"].includes(typeof e)) return e;
                if (null === e) return e;
                if ("object" == typeof e) return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, y(t)]));
                throw Error(`cloneDeep: unknown type=${e} (${typeof e})`)
            }

            function m(e) {
                if (void 0 === e.script || void 0 === e.amount) throw Error("Transaction/output: script and amount required");
                return {
                    script: e.script,
                    amount: e.amount
                }
            }

            function v(e) {
                if (void 0 === e.txid || void 0 === e.index) throw Error("Transaction/input: txid and index required");
                return {
                    txid: e.txid,
                    index: e.index,
                    sequence: g(e.sequence, 0xffffffff),
                    finalScriptSig: g(e.finalScriptSig, o.wg)
                }
            }

            function b(e) {
                for (let t in e) l.G3.includes(t) || delete e[t]
            }! function(e) {
                e[e.DEFAULT = 0] = "DEFAULT", e[e.ALL = 1] = "ALL", e[e.NONE = 2] = "NONE", e[e.SINGLE = 3] = "SINGLE", e[e.ANYONECANPAY = 128] = "ANYONECANPAY"
            }(i || (i = {})),
            function(e) {
                e[e.DEFAULT = 0] = "DEFAULT", e[e.ALL = 1] = "ALL", e[e.NONE = 2] = "NONE", e[e.SINGLE = 3] = "SINGLE", e[e.DEFAULT_ANYONECANPAY = 128] = "DEFAULT_ANYONECANPAY", e[e.ALL_ANYONECANPAY = 129] = "ALL_ANYONECANPAY", e[e.NONE_ANYONECANPAY = 130] = "NONE_ANYONECANPAY", e[e.SINGLE_ANYONECANPAY = 131] = "SINGLE_ANYONECANPAY"
            }(n || (n = {}));
            let w = o.w3({
                txid: o.ee(32, !0),
                index: o.QK
            });

            function x(e) {
                if ("number" != typeof e || "string" != typeof n[e]) throw Error(`Invalid SigHash=${e}`);
                return e
            }

            function k(e) {
                let t = 31 & e;
                return {
                    isAny: !!(e & i.ANYONECANPAY),
                    isNone: t === i.NONE,
                    isSingle: t === i.SINGLE
                }
            }

            function A(e) {
                if (e.nonWitnessUtxo && void 0 !== e.index) {
                    let t = e.nonWitnessUtxo.outputs.length - 1;
                    if (e.index > t) throw Error(`validateInput: index(${e.index}) not in nonWitnessUtxo`);
                    let r = e.nonWitnessUtxo.outputs[e.index];
                    if (e.witnessUtxo && (!(0, c.ex)(e.witnessUtxo.script, r.script) || e.witnessUtxo.amount !== r.amount)) throw Error("validateInput: witnessUtxo different from nonWitnessUtxo");
                    if (e.txid) {
                        if (e.nonWitnessUtxo.outputs.length - 1 < e.index) throw Error("nonWitnessUtxo: incorect output index");
                        let t = B.fromRaw(u.NC.encode(e.nonWitnessUtxo), {
                                allowUnknownOutputs: !0,
                                disableScriptCheck: !0,
                                allowUnknownInputs: !0
                            }),
                            r = s.uh.encode(e.txid);
                        if (t.isFinal && t.id !== r) throw Error(`nonWitnessUtxo: wrong txid, exp=${r} got=${t.id}`)
                    }
                }
                return e
            }

            function S(e) {
                if (e.nonWitnessUtxo) {
                    if (void 0 === e.index) throw Error("Unknown input index");
                    return e.nonWitnessUtxo.outputs[e.index]
                }
                if (e.witnessUtxo) return e.witnessUtxo;
                throw Error("Cannot find previous output info")
            }

            function C(e, t, r, i = !1, n = !1) {
                let o, {
                    nonWitnessUtxo: d,
                    txid: h
                } = e;
                "string" == typeof d && (d = s.uh.decode(d)), (0, c.aY)(d) && (d = u.NC.decode(d)), "nonWitnessUtxo" in e || void 0 !== d || (d = t ? .nonWitnessUtxo), "string" == typeof h && (h = s.uh.decode(h)), void 0 === h && (h = t ? .txid);
                let p = { ...t,
                    ...e,
                    nonWitnessUtxo: d,
                    txid: h
                };
                return "nonWitnessUtxo" in e || void 0 !== p.nonWitnessUtxo || delete p.nonWitnessUtxo, void 0 === p.sequence && (p.sequence = 0xffffffff), null === p.tapMerkleRoot && delete p.tapMerkleRoot, p = l.O4(l.k0, p, t, r, n), l.ju.encode(p), p.nonWitnessUtxo && void 0 !== p.index ? o = p.nonWitnessUtxo.outputs[p.index] : p.witnessUtxo && (o = p.witnessUtxo), o && !i && (0, a.wN)(o && o.script, p.redeemScript, p.witnessScript), p
            }

            function I(e, t = !1) {
                let r = "legacy",
                    n = i.ALL,
                    s = S(e),
                    o = a._o.decode(s.script),
                    l = o.type,
                    u = o,
                    c = [o];
                if ("tr" === o.type) return n = i.DEFAULT, {
                    txType: "taproot",
                    type: "tr",
                    last: o,
                    lastScript: s.script,
                    defaultSighash: n,
                    sighash: e.sighashType || n
                }; {
                    if (("wpkh" === o.type || "wsh" === o.type) && (r = "segwit"), "sh" === o.type) {
                        if (!e.redeemScript) throw Error("inputType: sh without redeemScript");
                        let t = a._o.decode(e.redeemScript);
                        ("wpkh" === t.type || "wsh" === t.type) && (r = "segwit"), c.push(t), u = t, l += `-${t.type}`
                    }
                    if ("wsh" === u.type) {
                        if (!e.witnessScript) throw Error("inputType: wsh without witnessScript");
                        let t = a._o.decode(e.witnessScript);
                        "wsh" === t.type && (r = "segwit"), c.push(t), u = t, l += `-${t.type}`
                    }
                    let i = c[c.length - 1];
                    if ("sh" === i.type || "wsh" === i.type) throw Error("inputType: sh/wsh cannot be terminal type");
                    let s = a._o.encode(i),
                        d = {
                            type: l,
                            txType: r,
                            last: i,
                            lastScript: s,
                            defaultSighash: n,
                            sighash: e.sighashType || n
                        };
                    if ("legacy" === r && !t && !e.nonWitnessUtxo) throw Error("Transaction/sign: legacy input without nonWitnessUtxo, can result in attack that forces paying higher fees. Pass allowLegacyWitnessUtxo=true, if you sure");
                    return d
                }
            }
            class B {
                constructor(e = {}) {
                    this.global = {}, this.inputs = [], this.outputs = [];
                    let t = this.opts = function(e) {
                        if (void 0 !== e && "[object Object]" !== ({}).toString.call(e)) throw Error(`Wrong object type for transaction options: ${e}`);
                        let t = { ...e,
                            version: g(e.version, 2),
                            lockTime: g(e.lockTime, 0),
                            PSBTVersion: g(e.PSBTVersion, 0)
                        };
                        if (void 0 !== t.allowUnknowInput && (e.allowUnknownInputs = t.allowUnknowInput), void 0 !== t.allowUnknowOutput && (e.allowUnknownOutputs = t.allowUnknowOutput), "number" != typeof t.lockTime) throw Error("Transaction lock time should be number");
                        if (o.QK.encode(t.lockTime), 0 !== t.PSBTVersion && 2 !== t.PSBTVersion) throw Error(`Unknown PSBT version ${t.PSBTVersion}`);
                        for (let e of ["allowUnknownVersion", "allowUnknownOutputs", "allowUnknownInputs", "disableScriptCheck", "bip174jsCompat", "allowLegacyWitnessUtxo", "lowR"]) {
                            let r = t[e];
                            if (void 0 !== r && "boolean" != typeof r) throw Error(`Transation options wrong type: ${e}=${r} (${typeof r})`)
                        }
                        if (t.allowUnknownVersion ? "number" == typeof t.version : ![-1, 0, 1, 2, 3].includes(t.version)) throw Error(`Unknown version: ${t.version}`);
                        if (void 0 !== t.customScripts) {
                            let e = t.customScripts;
                            if (!Array.isArray(e)) throw Error(`wrong custom scripts type (expected array): customScripts=${e} (${typeof e})`);
                            for (let t of e)
                                if ("function" != typeof t.encode || "function" != typeof t.decode || void 0 !== t.finalizeTaproot && "function" != typeof t.finalizeTaproot) throw Error(`wrong script=${t} (${typeof t})`)
                        }
                        return Object.freeze(t)
                    }(e);
                    0 !== t.lockTime && (this.global.fallbackLocktime = t.lockTime), this.global.txVersion = t.version
                }
                static fromRaw(e, t = {}) {
                    let r = u.NC.decode(e),
                        i = new B({ ...t,
                            version: r.version,
                            lockTime: r.lockTime
                        });
                    for (let e of r.outputs) i.addOutput(e);
                    if (i.outputs = r.outputs, i.inputs = r.inputs, r.witnesses)
                        for (let e = 0; e < r.witnesses.length; e++) i.inputs[e].finalScriptWitness = r.witnesses[e];
                    return i
                }
                static fromPSBT(e, t = {}) {
                    let r;
                    try {
                        r = l.QX.decode(e)
                    } catch (t) {
                        try {
                            r = l.QC.decode(e)
                        } catch (e) {
                            throw t
                        }
                    }
                    let i = r.global.version || 0;
                    if (0 !== i && 2 !== i) throw Error(`Wrong PSBT version=${i}`);
                    let n = r.global.unsignedTx,
                        s = 0 === i ? n ? .version : r.global.txVersion,
                        a = 0 === i ? n ? .lockTime : r.global.fallbackLocktime,
                        u = new B({ ...t,
                            version: s,
                            lockTime: a,
                            PSBTVersion: i
                        }),
                        c = 0 === i ? n ? .inputs.length : r.global.inputCount;
                    u.inputs = r.inputs.slice(0, c).map((e, t) => A({
                        finalScriptSig: o.wg,
                        ...r.global.unsignedTx ? .inputs[t],
                        ...e
                    }));
                    let d = 0 === i ? n ? .outputs.length : r.global.outputCount;
                    return u.outputs = r.outputs.slice(0, d).map((e, t) => ({ ...e,
                        ...r.global.unsignedTx ? .outputs[t]
                    })), u.global = { ...r.global,
                        txVersion: s
                    }, 0 !== a && (u.global.fallbackLocktime = a), u
                }
                toPSBT(e = this.opts.PSBTVersion) {
                    if (0 !== e && 2 !== e) throw Error(`Wrong PSBT version=${e}`);
                    let t = this.inputs.map(t => A(l.Ow(e, l.k0, t)));
                    for (let e of t) e.partialSig && !e.partialSig.length && delete e.partialSig, e.finalScriptSig && !e.finalScriptSig.length && delete e.finalScriptSig, e.finalScriptWitness && !e.finalScriptWitness.length && delete e.finalScriptWitness;
                    let r = this.outputs.map(t => l.Ow(e, l.hZ, t)),
                        i = { ...this.global
                        };
                    return 0 === e ? (i.unsignedTx = u.kW.decode(u.kW.encode({
                        version: this.version,
                        lockTime: this.lockTime,
                        inputs: this.inputs.map(v).map(e => ({ ...e,
                            finalScriptSig: o.wg
                        })),
                        outputs: this.outputs.map(m)
                    })), delete i.fallbackLocktime, delete i.txVersion) : (i.version = e, i.txVersion = this.version, i.inputCount = this.inputs.length, i.outputCount = this.outputs.length, i.fallbackLocktime && 0 === i.fallbackLocktime && delete i.fallbackLocktime), this.opts.bip174jsCompat && (t.length || t.push({}), r.length || r.push({})), (0 === e ? l.QX : l.QC).encode({
                        global: i,
                        inputs: t,
                        outputs: r
                    })
                }
                get lockTime() {
                    let e = 0,
                        t = 0,
                        r = 0,
                        i = 0;
                    for (let n of this.inputs) n.requiredHeightLocktime && (e = Math.max(e, n.requiredHeightLocktime), t++), n.requiredTimeLocktime && (r = Math.max(r, n.requiredTimeLocktime), i++);
                    return t && t >= i ? e : 0 !== r ? r : this.global.fallbackLocktime || 0
                }
                get version() {
                    if (void 0 === this.global.txVersion) throw Error("No global.txVersion");
                    return this.global.txVersion
                }
                inputStatus(e) {
                    this.checkInputIdx(e);
                    let t = this.inputs[e];
                    return t.finalScriptSig && t.finalScriptSig.length || t.finalScriptWitness && t.finalScriptWitness.length ? "finalized" : t.tapKeySig || t.tapScriptSig && t.tapScriptSig.length || t.partialSig && t.partialSig.length ? "signed" : "unsigned"
                }
                inputSighash(e) {
                    this.checkInputIdx(e);
                    let t = this.inputs[e].sighashType,
                        r = void 0 === t ? i.DEFAULT : t,
                        n = r === i.DEFAULT ? i.ALL : 3 & r;
                    return {
                        sigInputs: r & i.ANYONECANPAY,
                        sigOutputs: n
                    }
                }
                signStatus() {
                    let e = !0,
                        t = !0,
                        r = [],
                        n = [];
                    for (let s = 0; s < this.inputs.length; s++) {
                        if ("unsigned" === this.inputStatus(s)) continue;
                        let {
                            sigInputs: o,
                            sigOutputs: a
                        } = this.inputSighash(s);
                        if (o === i.ANYONECANPAY ? r.push(s) : e = !1, a === i.ALL) t = !1;
                        else if (a === i.SINGLE) n.push(s);
                        else if (a === i.NONE);
                        else throw Error(`Wrong signature hash output type: ${a}`)
                    }
                    return {
                        addInput: e,
                        addOutput: t,
                        inputs: r,
                        outputs: n
                    }
                }
                get isFinal() {
                    for (let e = 0; e < this.inputs.length; e++)
                        if ("finalized" !== this.inputStatus(e)) return !1;
                    return !0
                }
                get hasWitnesses() {
                    let e = !1;
                    for (let t of this.inputs) t.finalScriptWitness && t.finalScriptWitness.length && (e = !0);
                    return e
                }
                get weight() {
                    if (!this.isFinal) throw Error("Transaction is not finalized");
                    let e = 32,
                        t = this.outputs.map(m);
                    for (let r of (e += 4 * u.km.encode(this.outputs.length).length, t)) e += 32 + 4 * u.Rg.encode(r.script).length;
                    for (let t of (this.hasWitnesses && (e += 2), e += 4 * u.km.encode(this.inputs.length).length, this.inputs)) e += 160 + 4 * u.Rg.encode(t.finalScriptSig || o.wg).length, this.hasWitnesses && t.finalScriptWitness && (e += u.Kk.encode(t.finalScriptWitness).length);
                    return e
                }
                get vsize() {
                    return f(this.weight)
                }
                toBytes(e = !1, t = !1) {
                    return u.NC.encode({
                        version: this.version,
                        lockTime: this.lockTime,
                        inputs: this.inputs.map(v).map(t => ({ ...t,
                            finalScriptSig: e && t.finalScriptSig || o.wg
                        })),
                        outputs: this.outputs.map(m),
                        witnesses: this.inputs.map(e => e.finalScriptWitness || []),
                        segwitFlag: t && this.hasWitnesses
                    })
                }
                get unsignedTx() {
                    return this.toBytes(!1, !1)
                }
                get hex() {
                    return s.uh.encode(this.toBytes(!0, this.hasWitnesses))
                }
                get hash() {
                    if (!this.isFinal) throw Error("Transaction is not finalized");
                    return s.uh.encode(c.Y7(this.toBytes(!0)))
                }
                get id() {
                    if (!this.isFinal) throw Error("Transaction is not finalized");
                    return s.uh.encode(c.Y7(this.toBytes(!0)).reverse())
                }
                checkInputIdx(e) {
                    if (!Number.isSafeInteger(e) || 0 > e || e >= this.inputs.length) throw Error(`Wrong input index=${e}`)
                }
                getInput(e) {
                    return this.checkInputIdx(e), y(this.inputs[e])
                }
                get inputsLength() {
                    return this.inputs.length
                }
                addInput(e, t = !1) {
                    if (!t && !this.signStatus().addInput) throw Error("Tx has signed inputs, cannot add new one");
                    return this.inputs.push(C(e, void 0, void 0, this.opts.disableScriptCheck)), this.inputs.length - 1
                }
                updateInput(e, t, r = !1) {
                    let i;
                    if (this.checkInputIdx(e), !r) {
                        let t = this.signStatus();
                        (!t.addInput || t.inputs.includes(e)) && (i = l.j1)
                    }
                    this.inputs[e] = C(t, this.inputs[e], i, this.opts.disableScriptCheck, this.opts.allowUnknown)
                }
                checkOutputIdx(e) {
                    if (!Number.isSafeInteger(e) || 0 > e || e >= this.outputs.length) throw Error(`Wrong output index=${e}`)
                }
                getOutput(e) {
                    return this.checkOutputIdx(e), y(this.outputs[e])
                }
                getOutputAddress(e, t = c.pG) {
                    let r = this.getOutput(e);
                    if (r.script) return (0, a.pV)(t).encode(a._o.decode(r.script))
                }
                get outputsLength() {
                    return this.outputs.length
                }
                normalizeOutput(e, t, r) {
                    let {
                        amount: i,
                        script: n
                    } = e;
                    if (void 0 === i && (i = t ? .amount), "bigint" != typeof i) throw Error(`Wrong amount type, should be of type bigint in sats, but got ${i} of type ${typeof i}`);
                    "string" == typeof n && (n = s.uh.decode(n)), void 0 === n && (n = t ? .script);
                    let o = { ...t,
                        ...e,
                        amount: i,
                        script: n
                    };
                    if (void 0 === o.amount && delete o.amount, o = l.O4(l.hZ, o, t, r, this.opts.allowUnknown), l.AT.encode(o), o.script && !this.opts.allowUnknownOutputs && "unknown" === a._o.decode(o.script).type) throw Error("Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnknownOutputs=true, if you sure");
                    return this.opts.disableScriptCheck || (0, a.wN)(o.script, o.redeemScript, o.witnessScript), o
                }
                addOutput(e, t = !1) {
                    if (!t && !this.signStatus().addOutput) throw Error("Tx has signed outputs, cannot add new one");
                    return this.outputs.push(this.normalizeOutput(e)), this.outputs.length - 1
                }
                updateOutput(e, t, r = !1) {
                    let i;
                    if (this.checkOutputIdx(e), !r) {
                        let t = this.signStatus();
                        (!t.addOutput || t.outputs.includes(e)) && (i = l.Ss)
                    }
                    this.outputs[e] = this.normalizeOutput(t, this.outputs[e], i)
                }
                addOutputAddress(e, t, r = c.pG) {
                    return this.addOutput({
                        script: a._o.encode((0, a.pV)(r).decode(e)),
                        amount: t
                    })
                }
                get fee() {
                    let e = 0 n;
                    for (let t of this.inputs) {
                        let r = S(t);
                        if (!r) throw Error("Empty input amount");
                        e += r.amount
                    }
                    for (let t of this.outputs.map(m)) e -= t.amount;
                    return e
                }
                preimageLegacy(e, t, r) {
                    let {
                        isAny: i,
                        isNone: n,
                        isSingle: s
                    } = k(r);
                    if (e < 0 || !Number.isSafeInteger(e)) throw Error(`Invalid input idx=${e}`);
                    if (s && e >= this.outputs.length || e >= this.inputs.length) return o.Iz.encode(1 n);
                    t = u.eF.encode(u.eF.decode(t).filter(e => "CODESEPARATOR" !== e));
                    let a = this.inputs.map(v).map((r, i) => ({ ...r,
                        finalScriptSig: i === e ? t : o.wg
                    }));
                    i ? a = [a[e]] : (n || s) && (a = a.map((t, r) => ({ ...t,
                        sequence: r === e ? t.sequence : 0
                    })));
                    let l = this.outputs.map(m);
                    n ? l = [] : s && (l = l.slice(0, e).fill(p).concat([l[e]]));
                    let d = u.NC.encode({
                        lockTime: this.lockTime,
                        version: this.version,
                        segwitFlag: !1,
                        inputs: a,
                        outputs: l
                    });
                    return c.Y7(d, o.eV.encode(r))
                }
                preimageWitnessV0(e, t, r, i) {
                    let {
                        isAny: n,
                        isNone: s,
                        isSingle: a
                    } = k(r), l = h, d = h, p = h, f = this.inputs.map(v), g = this.outputs.map(m);
                    n || (l = c.Y7(...f.map(w.encode))), n || a || s || (d = c.Y7(...f.map(e => o.QK.encode(e.sequence)))), a || s ? a && e < g.length && (p = c.Y7(u.oV.encode(g[e]))) : p = c.Y7(...g.map(u.oV.encode));
                    let y = f[e];
                    return c.Y7(o.eV.encode(this.version), l, d, o.ee(32, !0).encode(y.txid), o.QK.encode(y.index), u.Rg.encode(t), o.dg.encode(i), o.QK.encode(y.sequence), p, o.QK.encode(this.lockTime), o.QK.encode(r))
                }
                preimageWitnessV1(e, t, r, n, s = -1, l, p = 192, f) {
                    if (!Array.isArray(n) || this.inputs.length !== n.length) throw Error(`Invalid amounts array=${n}`);
                    if (!Array.isArray(t) || this.inputs.length !== t.length) throw Error(`Invalid prevOutScript array=${t}`);
                    let g = [o.U8.encode(0), o.U8.encode(r), o.eV.encode(this.version), o.QK.encode(this.lockTime)],
                        y = r === i.DEFAULT ? i.ALL : 3 & r,
                        b = r & i.ANYONECANPAY,
                        x = this.inputs.map(v),
                        k = this.outputs.map(m);
                    b !== i.ANYONECANPAY && g.push(...[x.map(w.encode), n.map(o.dg.encode), t.map(u.Rg.encode), x.map(e => o.QK.encode(e.sequence))].map(e => d.sc((0, c.Id)(...e)))), y === i.ALL && g.push(d.sc((0, c.Id)(...k.map(u.oV.encode))));
                    let A = +!!f | 2 * !!l;
                    if (g.push(new Uint8Array([A])), b === i.ANYONECANPAY) {
                        let r = x[e];
                        g.push(w.encode(r), o.dg.encode(n[e]), u.Rg.encode(t[e]), o.QK.encode(r.sequence))
                    } else g.push(o.QK.encode(e));
                    return 1 & A && g.push(d.sc(u.Rg.encode(f || o.wg))), y === i.SINGLE && g.push(e < k.length ? d.sc(u.oV.encode(k[e])) : h), l && g.push((0, a.Me)(l, p), o.U8.encode(0), o.eV.encode(s)), c.m("TapSighash", ...g)
                }
                signIdx(e, t, r, n) {
                    this.checkInputIdx(t);
                    let s = this.inputs[t],
                        l = I(s, this.opts.allowLegacyWitnessUtxo);
                    if (!(0, c.aY)(e)) {
                        if (!s.bip32Derivation || !s.bip32Derivation.length) throw Error("bip32Derivation: empty");
                        let r = s.bip32Derivation.filter(t => t[1].fingerprint == e.fingerprint).map(([t, {
                            path: r
                        }]) => {
                            let i = e;
                            for (let e of r) i = i.deriveChild(e);
                            if (!(0, c.ex)(i.publicKey, t)) throw Error("bip32Derivation: wrong pubKey");
                            if (!i.privateKey) throw Error("bip32Derivation: no privateKey");
                            return i
                        });
                        if (!r.length) throw Error(`bip32Derivation: no items with fingerprint=${e.fingerprint}`);
                        let i = !1;
                        for (let e of r) this.signIdx(e.privateKey, t) && (i = !0);
                        return i
                    }
                    r ? r.forEach(x) : r = [l.defaultSighash];
                    let d = l.sighash;
                    if (!r.includes(d)) throw Error(`Input with not allowed sigHash=${d}. Allowed: ${r.join(", ")}`);
                    let {
                        sigOutputs: h
                    } = this.inputSighash(t);
                    if (h === i.SINGLE && t >= this.outputs.length) throw Error(`Input with sighash SINGLE, but there is no output with corresponding index=${t}`);
                    let p = S(s);
                    if ("taproot" === l.txType) {
                        let r = this.inputs.map(S),
                            l = r.map(e => e.script),
                            h = r.map(e => e.amount),
                            p = !1,
                            f = c.vl(e),
                            g = s.tapMerkleRoot || o.wg;
                        if (s.tapInternalKey) {
                            let {
                                pubKey: r,
                                privKey: a
                            } = function(e, t, r, i = o.wg) {
                                return (0, c.ex)(r, t) && (e = c.Cn(e, i), t = c.vl(e)), {
                                    privKey: e,
                                    pubKey: t
                                }
                            }(e, f, s.tapInternalKey, g), [u, y] = c.gD(s.tapInternalKey, g);
                            if ((0, c.ex)(u, r)) {
                                let e = this.preimageWitnessV1(t, l, d, h),
                                    r = (0, c.Id)(c.V0(e, a, n), d !== i.DEFAULT ? new Uint8Array([d]) : o.wg);
                                this.updateInput(t, {
                                    tapKeySig: r
                                }, !0), p = !0
                            }
                        }
                        if (s.tapLeafScript)
                            for (let [r, g] of (s.tapScriptSig = s.tapScriptSig || [], s.tapLeafScript)) {
                                let r = g.subarray(0, -1),
                                    s = u.eF.decode(r),
                                    y = g[g.length - 1],
                                    m = (0, a.Me)(r, y);
                                if (-1 === s.findIndex(e => (0, c.aY)(e) && (0, c.ex)(e, f))) continue;
                                let v = this.preimageWitnessV1(t, l, d, h, void 0, r, y),
                                    b = (0, c.Id)(c.V0(v, e, n), d !== i.DEFAULT ? new Uint8Array([d]) : o.wg);
                                this.updateInput(t, {
                                    tapScriptSig: [
                                        [{
                                            pubKey: f,
                                            leafHash: m
                                        }, b]
                                    ]
                                }, !0), p = !0
                            }
                        if (!p) throw Error("No taproot scripts signed")
                    } else {
                        let r;
                        let i = c.E1(e),
                            n = !1,
                            s = c.A0(i);
                        for (let e of u.eF.decode(l.lastScript))(0, c.aY)(e) && ((0, c.ex)(e, i) || (0, c.ex)(e, s)) && (n = !0);
                        if (!n) throw Error(`Input script doesn't have pubKey: ${l.lastScript}`);
                        if ("legacy" === l.txType) r = this.preimageLegacy(t, l.lastScript, d);
                        else if ("segwit" === l.txType) {
                            let e = l.lastScript;
                            "wpkh" === l.last.type && (e = a._o.encode({
                                type: "pkh",
                                hash: l.last.hash
                            })), r = this.preimageWitnessV0(t, e, d, p.amount)
                        } else throw Error(`Transaction/sign: unknown tx type: ${l.txType}`);
                        let o = c.iM(r, e, this.opts.lowR);
                        this.updateInput(t, {
                            partialSig: [
                                [i, (0, c.Id)(o, new Uint8Array([d]))]
                            ]
                        }, !0)
                    }
                    return !0
                }
                sign(e, t, r) {
                    let i = 0;
                    for (let n = 0; n < this.inputs.length; n++) try {
                        this.signIdx(e, n, t, r) && i++
                    } catch (e) {}
                    if (!i) throw Error("No inputs signed");
                    return i
                }
                finalizeIdx(e) {
                    let t, r;
                    if (this.checkInputIdx(e), this.fee < 0 n) throw Error("Outputs spends more than inputs amount");
                    let i = this.inputs[e],
                        n = I(i, this.opts.allowLegacyWitnessUtxo);
                    if ("taproot" === n.txType) {
                        if (i.tapKeySig) i.finalScriptWitness = [i.tapKeySig];
                        else if (i.tapLeafScript && i.tapScriptSig) {
                            for (let [e, t] of i.tapLeafScript.sort((e, t) => l.u0.encode(e[0]).length - l.u0.encode(t[0]).length)) {
                                let r = t.slice(0, -1),
                                    n = t[t.length - 1],
                                    s = a._o.decode(r),
                                    d = (0, a.Me)(r, n),
                                    h = i.tapScriptSig.filter(e => (0, c.ex)(e[0].leafHash, d)),
                                    p = [];
                                if ("tr_ms" === s.type) {
                                    let e = s.m,
                                        t = s.pubkeys,
                                        r = 0;
                                    for (let i of t) {
                                        let t = h.findIndex(e => (0, c.ex)(e[0].pubKey, i));
                                        if (r === e || -1 === t) {
                                            p.push(o.wg);
                                            continue
                                        }
                                        p.push(h[t][1]), r++
                                    }
                                    if (r !== e) continue
                                } else if ("tr_ns" === s.type) {
                                    for (let e of s.pubkeys) {
                                        let t = h.findIndex(t => (0, c.ex)(t[0].pubKey, e)); - 1 !== t && p.push(h[t][1])
                                    }
                                    if (p.length !== s.pubkeys.length) continue
                                } else if ("unknown" === s.type && this.opts.allowUnknownInputs) {
                                    let e = u.eF.decode(r);
                                    if (!(p = h.map(([{
                                            pubKey: t
                                        }, r]) => {
                                            let i = e.findIndex(e => (0, c.aY)(e) && (0, c.ex)(e, t));
                                            if (-1 === i) throw Error("finalize/taproot: cannot find position of pubkey in script");
                                            return {
                                                signature: r,
                                                pos: i
                                            }
                                        }).sort((e, t) => e.pos - t.pos).map(e => e.signature)).length) continue
                                } else {
                                    let t = this.opts.customScripts;
                                    if (t)
                                        for (let n of t) {
                                            if (!n.finalizeTaproot) continue;
                                            let t = u.eF.decode(r),
                                                s = n.encode(t);
                                            if (void 0 === s) continue;
                                            let a = n.finalizeTaproot(r, s, h);
                                            if (a) {
                                                i.finalScriptWitness = a.concat(l.u0.encode(e)), i.finalScriptSig = o.wg, b(i);
                                                return
                                            }
                                        }
                                    throw Error("Finalize: Unknown tapLeafScript")
                                }
                                i.finalScriptWitness = p.reverse().concat([r, l.u0.encode(e)]);
                                break
                            }
                            if (!i.finalScriptWitness) throw Error("finalize/taproot: empty witness")
                        } else throw Error("finalize/taproot: unknown input");
                        i.finalScriptSig = o.wg, b(i);
                        return
                    }
                    if (!i.partialSig || !i.partialSig.length) throw Error("Not enough partial sign");
                    let s = o.wg,
                        h = [];
                    if ("ms" === n.last.type) {
                        let e = n.last.m,
                            t = n.last.pubkeys,
                            r = [];
                        for (let e of t) {
                            let t = i.partialSig.find(t => (0, c.ex)(e, t[0]));
                            t && r.push(t[1])
                        }
                        if ((r = r.slice(0, e)).length !== e) throw Error(`Multisig: wrong signatures count, m=${e} n=${t.length} signatures=${r.length}`);
                        s = u.eF.encode([0, ...r])
                    } else if ("pk" === n.last.type) s = u.eF.encode([i.partialSig[0][1]]);
                    else if ("pkh" === n.last.type) s = u.eF.encode([i.partialSig[0][1], i.partialSig[0][0]]);
                    else if ("wpkh" === n.last.type) s = o.wg, h = [i.partialSig[0][1], i.partialSig[0][0]];
                    else if ("unknown" === n.last.type && !this.opts.allowUnknownInputs) throw Error("Unknown inputs not allowed");
                    if (n.type.includes("wsh-") && (s.length && n.lastScript.length && (h = u.eF.decode(s).map(e => {
                            if (0 === e) return o.wg;
                            if ((0, c.aY)(e)) return e;
                            throw Error(`Wrong witness op=${e}`)
                        })), h = h.concat(n.lastScript)), "segwit" === n.txType && (r = h), n.type.startsWith("sh-wsh-") ? t = u.eF.encode([u.eF.encode([0, d.sc(n.lastScript)])]) : n.type.startsWith("sh-") ? t = u.eF.encode([...u.eF.decode(s), n.lastScript]) : n.type.startsWith("wsh-") || "segwit" !== n.txType && (t = s), !t && !r) throw Error("Unknown error finalizing input");
                    t && (i.finalScriptSig = t), r && (i.finalScriptWitness = r), b(i)
                }
                finalize() {
                    for (let e = 0; e < this.inputs.length; e++) this.finalizeIdx(e)
                }
                extract() {
                    if (!this.isFinal) throw Error("Transaction has unfinalized inputs");
                    if (!this.outputs.length) throw Error("Transaction has no outputs");
                    if (this.fee < 0 n) throw Error("Outputs spends more than inputs amount");
                    return this.toBytes(!0, !0)
                }
                combine(e) {
                    for (let t of ["PSBTVersion", "version", "lockTime"])
                        if (this.opts[t] !== e.opts[t]) throw Error(`Transaction/combine: different ${t} this=${this.opts[t]} other=${e.opts[t]}`);
                    for (let t of ["inputs", "outputs"])
                        if (this[t].length !== e[t].length) throw Error(`Transaction/combine: different ${t} length this=${this[t].length} other=${e[t].length}`);
                    let t = this.global.unsignedTx ? u.kW.encode(this.global.unsignedTx) : o.wg,
                        r = e.global.unsignedTx ? u.kW.encode(e.global.unsignedTx) : o.wg;
                    if (!(0, c.ex)(t, r)) throw Error("Transaction/combine: different unsigned tx");
                    this.global = l.O4(l.xG, this.global, e.global, void 0, this.opts.allowUnknown);
                    for (let t = 0; t < this.inputs.length; t++) this.updateInput(t, e.inputs[t], !0);
                    for (let t = 0; t < this.outputs.length; t++) this.updateOutput(t, e.outputs[t], !0);
                    return this
                }
                clone() {
                    return B.fromPSBT(this.toPSBT(this.opts.PSBTVersion), this.opts)
                }
            }
        },
        19408: (e, t, r) => {
            "use strict";
            let i, n;
            r.d(t, {
                Rn: () => O,
                jn: () => P
            });
            let s = 2 n ** 255 n - 19 n,
                o = 2 n ** 252 n + 0x14def9dea2f79cd65812631a5cf5d3ed n,
                a = {
                    a: -1 n,
                    d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3 n,
                    p: s,
                    n: o,
                    h: 8,
                    Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a n,
                    Gy: 0x6666666666666666666666666666666666666666666666666666666666666658 n
                },
                l = (e = "") => {
                    throw Error(e)
                },
                u = e => "string" == typeof e,
                c = (e, t) => e instanceof Uint8Array && ("number" != typeof t || !(t > 0) || e.length === t) ? e : l("Uint8Array expected"),
                d = e => new Uint8Array(e),
                h = (e, t) => c(u(e) ? w(e) : d(e), t),
                p = (e, t = s) => {
                    let r = e % t;
                    return r >= 0 n ? r : t + r
                },
                f = e => e instanceof g ? e : l("Point expected");
            class g {
                constructor(e, t, r, i) {
                    this.ex = e, this.ey = t, this.ez = r, this.et = i
                }
                static fromAffine(e) {
                    return new g(e.x, e.y, 1 n, p(e.x * e.y))
                }
                static fromHex(e, t = !0) {
                    let {
                        d: r
                    } = a, i = (e = h(e, 32)).slice();
                    i[31] = -129 & e[31];
                    let n = k(i);
                    0 n !== n && (t && !(0 n < n && n < s) && l("bad y coord 1"), t || 0 n < n && n < 2 n ** 256 n || l("bad y coord 2"));
                    let o = p(n * n),
                        {
                            isValid: u,
                            value: c
                        } = B(p(o - 1 n), p(r * o + 1 n));
                    u || l("bad y coordinate 3");
                    let d = (1 n & c) === 1 n;
                    return (128 & e[31]) != 0 !== d && (c = p(-c)), new g(c, n, 1 n, p(c * n))
                }
                get x() {
                    return this.toAffine().x
                }
                get y() {
                    return this.toAffine().y
                }
                equals(e) {
                    let {
                        ex: t,
                        ey: r,
                        ez: i
                    } = this, {
                        ex: n,
                        ey: s,
                        ez: o
                    } = f(e), a = p(t * o), l = p(n * i), u = p(r * o), c = p(s * i);
                    return a === l && u === c
                }
                is0() {
                    return this.equals(m)
                }
                negate() {
                    return new g(p(-this.ex), this.ey, this.ez, p(-this.et))
                }
                double() {
                    let {
                        ex: e,
                        ey: t,
                        ez: r
                    } = this, {
                        a: i
                    } = a, n = p(e * e), s = p(t * t), o = p(2 n * p(r * r)), l = p(i * n), u = e + t, c = p(p(u * u) - n - s), d = l + s, h = d - o, f = l - s, y = p(c * h), m = p(d * f), v = p(c * f);
                    return new g(y, m, p(h * d), v)
                }
                add(e) {
                    let {
                        ex: t,
                        ey: r,
                        ez: i,
                        et: n
                    } = this, {
                        ex: s,
                        ey: o,
                        ez: l,
                        et: u
                    } = f(e), {
                        a: c,
                        d
                    } = a, h = p(t * s), y = p(r * o), m = p(n * d * u), v = p(i * l), b = p((t + r) * (s + o) - h - y), w = p(v - m), x = p(v + m), k = p(y - c * h), A = p(b * w), S = p(x * k), C = p(b * k);
                    return new g(A, S, p(w * x), C)
                }
                mul(e, t = !0) {
                    if (0 n === e) return !0 === t ? l("cannot multiply by 0") : m;
                    if ("bigint" == typeof e && 0 n < e && e < o || l("invalid scalar, must be < L"), !t && this.is0() || 1 n === e) return this;
                    if (this.equals(y)) return L(e).p;
                    let r = m,
                        i = y;
                    for (let n = this; e > 0 n; n = n.double(), e >>= 1 n) 1 n & e ? r = r.add(n) : t && (i = i.add(n));
                    return r
                }
                multiply(e) {
                    return this.mul(e)
                }
                clearCofactor() {
                    return this.mul(BigInt(a.h), !1)
                }
                isSmallOrder() {
                    return this.clearCofactor().is0()
                }
                isTorsionFree() {
                    let e = this.mul(o / 2 n, !1).double();
                    return o % 2 n && (e = e.add(this)), e.is0()
                }
                toAffine() {
                    let {
                        ex: e,
                        ey: t,
                        ez: r
                    } = this;
                    if (this.is0()) return {
                        x: 0 n,
                        y: 0 n
                    };
                    let i = S(r);
                    return 1 n !== p(r * i) && l("invalid inverse"), {
                        x: p(e * i),
                        y: p(t * i)
                    }
                }
                toRawBytes() {
                    let {
                        x: e,
                        y: t
                    } = this.toAffine(), r = x(t);
                    return r[31] |= 1 n & e ? 128 : 0, r
                }
                toHex() {
                    return b(this.toRawBytes())
                }
            }
            g.BASE = new g(0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a n, 0x6666666666666666666666666666666666666666666666666666666666666658 n, 1 n, p(0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a n * 0x6666666666666666666666666666666666666666666666666666666666666658 n)), g.ZERO = new g(0 n, 1 n, 1 n, 0 n);
            let {
                BASE: y,
                ZERO: m
            } = g, v = (e, t) => e.toString(16).padStart(t, "0"), b = e => Array.from(e).map(e => v(e, 2)).join(""), w = e => {
                let t = e.length;
                (!u(e) || t % 2) && l("hex invalid 1");
                let r = d(t / 2);
                for (let t = 0; t < r.length; t++) {
                    let i = 2 * t,
                        n = Number.parseInt(e.slice(i, i + 2), 16);
                    (Number.isNaN(n) || n < 0) && l("hex invalid 2"), r[t] = n
                }
                return r
            }, x = e => w(v(e, 64)).reverse(), k = e => BigInt("0x" + b(d(c(e)).reverse())), A = (...e) => {
                let t = d(e.reduce((e, t) => e + c(t).length, 0)),
                    r = 0;
                return e.forEach(e => {
                    t.set(e, r), r += e.length
                }), t
            }, S = (e, t = s) => {
                (0 n === e || t <= 0 n) && l("no inverse n=" + e + " mod=" + t);
                let r = p(e, t),
                    i = t,
                    n = 0 n,
                    o = 1 n,
                    a = 1 n,
                    u = 0 n;
                for (; 0 n !== r;) {
                    let e = i / r,
                        t = i % r,
                        s = n - a * e,
                        l = o - u * e;
                    i = r, r = t, n = a, o = u, a = s, u = l
                }
                return 1 n === i ? p(n, t) : l("no inverse")
            }, C = (e, t) => {
                let r = e;
                for (; t-- > 0 n;) r *= r, r %= s;
                return r
            }, I = e => {
                let t = e * e % s * e % s,
                    r = C(t, 2 n) * t % s,
                    i = C(r, 1 n) * e % s,
                    n = C(i, 5 n) * i % s,
                    o = C(n, 10 n) * n % s,
                    a = C(o, 20 n) * o % s,
                    l = C(a, 40 n) * a % s,
                    u = C(l, 80 n) * l % s,
                    c = C(u, 80 n) * l % s,
                    d = C(c, 10 n) * n % s;
                return {
                    pow_p_5_8: C(d, 2 n) * e % s,
                    b2: t
                }
            }, B = (e, t) => {
                let r = p(t * t * t),
                    i = I(e * p(r * r * t)).pow_p_5_8,
                    n = p(e * r * i),
                    s = p(t * n * n),
                    o = n,
                    a = p(0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0 n * n),
                    l = s === e,
                    u = s === p(-e),
                    c = s === p(-(0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0 n * e));
                return l && (n = o), (u || c) && (n = a), (1 n & p(n)) === 1 n && (n = p(-n)), {
                    isValid: l || u,
                    value: n
                }
            }, E = e => p(k(e), o), _ = (...e) => P.sha512Async(...e), T = e => {
                let t = e.slice(0, 32);
                t[0] &= 248, t[31] &= 127, t[31] |= 64;
                let r = e.slice(32, 64),
                    i = E(t),
                    n = y.mul(i),
                    s = n.toRawBytes();
                return {
                    head: t,
                    prefix: r,
                    scalar: i,
                    point: n,
                    pointBytes: s
                }
            }, N = e => _(h(e, 32)).then(T), O = e => N(e).then(e => e.pointBytes), U = () => "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, P = {
                bytesToHex: b,
                hexToBytes: w,
                concatBytes: A,
                mod: p,
                invert: S,
                randomBytes: e => {
                    let t = U();
                    return t || l("crypto.getRandomValues must be defined"), t.getRandomValues(d(e))
                },
                sha512Async: async (...e) => {
                    let t = U();
                    t || l("crypto.subtle or etc.sha512Async must be defined");
                    let r = A(...e);
                    return d(await t.subtle.digest("SHA-512", r.buffer))
                },
                sha512Sync: void 0
            };
            Object.defineProperties(P, {
                sha512Sync: {
                    configurable: !1,
                    get: () => i,
                    set(e) {
                        i || (i = e)
                    }
                }
            });
            let Z = () => {
                    let e = [],
                        t = y,
                        r = t;
                    for (let i = 0; i < 33; i++) {
                        r = t, e.push(r);
                        for (let i = 1; i < 128; i++) r = r.add(t), e.push(r);
                        t = r.double()
                    }
                    return e
                },
                L = e => {
                    let t = n || (n = Z()),
                        r = (e, t) => {
                            let r = t.negate();
                            return e ? r : t
                        },
                        i = m,
                        s = y,
                        o = BigInt(255),
                        a = BigInt(8);
                    for (let n = 0; n < 33; n++) {
                        let l = 128 * n,
                            u = Number(e & o);
                        e >>= a, u > 128 && (u -= 256, e += 1 n);
                        let c = l + Math.abs(u) - 1,
                            d = n % 2 != 0,
                            h = u < 0;
                        0 === u ? s = s.add(r(d, t[l])) : i = i.add(r(h, t[c]))
                    }
                    return {
                        p: i,
                        f: s
                    }
                }
        },
        23734: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(29067),
                n = r(260);
            t.default = (e, t) => {
                let r;
                switch (e.code) {
                    case n.ZodIssueCode.invalid_type:
                        r = e.received === i.ZodParsedType.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
                        break;
                    case n.ZodIssueCode.invalid_literal:
                        r = `Invalid literal value, expected ${JSON.stringify(e.expected,i.util.jsonStringifyReplacer)}`;
                        break;
                    case n.ZodIssueCode.unrecognized_keys:
                        r = `Unrecognized key(s) in object: ${i.util.joinValues(e.keys,", ")}`;
                        break;
                    case n.ZodIssueCode.invalid_union:
                        r = "Invalid input";
                        break;
                    case n.ZodIssueCode.invalid_union_discriminator:
                        r = `Invalid discriminator value. Expected ${i.util.joinValues(e.options)}`;
                        break;
                    case n.ZodIssueCode.invalid_enum_value:
                        r = `Invalid enum value. Expected ${i.util.joinValues(e.options)}, received '${e.received}'`;
                        break;
                    case n.ZodIssueCode.invalid_arguments:
                        r = "Invalid function arguments";
                        break;
                    case n.ZodIssueCode.invalid_return_type:
                        r = "Invalid function return type";
                        break;
                    case n.ZodIssueCode.invalid_date:
                        r = "Invalid date";
                        break;
                    case n.ZodIssueCode.invalid_string:
                        "object" == typeof e.validation ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : i.util.assertNever(e.validation) : r = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
                        break;
                    case n.ZodIssueCode.too_small:
                        r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
                        break;
                    case n.ZodIssueCode.too_big:
                        r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
                        break;
                    case n.ZodIssueCode.custom:
                        r = "Invalid input";
                        break;
                    case n.ZodIssueCode.invalid_intersection_types:
                        r = "Intersection results could not be merged";
                        break;
                    case n.ZodIssueCode.not_multiple_of:
                        r = `Number must be a multiple of ${e.multipleOf}`;
                        break;
                    case n.ZodIssueCode.not_finite:
                        r = "Number must be finite";
                        break;
                    default:
                        r = t.defaultError, i.util.assertNever(e)
                }
                return {
                    message: r
                }
            }
        },
        27827: function(e) {
            ! function(t) {
                "use strict";
                let r = "(0?\\d+|0x[a-f0-9]+)",
                    i = {
                        fourOctet: RegExp(`^${r}\\.${r}\\.${r}\\.${r}$`, "i"),
                        threeOctet: RegExp(`^${r}\\.${r}\\.${r}$`, "i"),
                        twoOctet: RegExp(`^${r}\\.${r}$`, "i"),
                        longValue: RegExp(`^${r}$`, "i")
                    },
                    n = RegExp("^0[0-7]+$", "i"),
                    s = RegExp("^0x[a-f0-9]+$", "i"),
                    o = "%[0-9a-z]{1,}",
                    a = "(?:[0-9a-f]+::?)+",
                    l = {
                        zoneIndex: RegExp(o, "i"),
                        native: RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${o})?$`, "i"),
                        deprecatedTransitional: RegExp(`^(?:::)(${r}\\.${r}\\.${r}\\.${r}(${o})?)$`, "i"),
                        transitional: RegExp(`^((?:${a})|(?:::)(?:${a})?)${r}\\.${r}\\.${r}\\.${r}(${o})?$`, "i")
                    };

                function u(e, t) {
                    let r, i;
                    if (e.indexOf("::") !== e.lastIndexOf("::")) return null;
                    let n = 0,
                        s = -1,
                        o = (e.match(l.zoneIndex) || [])[0];
                    for (o && (o = o.substring(1), e = e.replace(/%.+$/, ""));
                        (s = e.indexOf(":", s + 1)) >= 0;) n++;
                    if ("::" === e.substr(0, 2) && n--, "::" === e.substr(-2, 2) && n--, n > t) return null;
                    for (i = t - n, r = ":"; i--;) r += "0:";
                    return ":" === (e = e.replace("::", r))[0] && (e = e.slice(1)), ":" === e[e.length - 1] && (e = e.slice(0, -1)), {
                        parts: t = function() {
                            let t = e.split(":"),
                                r = [];
                            for (let e = 0; e < t.length; e++) r.push(parseInt(t[e], 16));
                            return r
                        }(),
                        zoneId: o
                    }
                }

                function c(e, t, r, i) {
                    let n;
                    if (e.length !== t.length) throw Error("ipaddr: cannot match CIDR for objects with different lengths");
                    let s = 0;
                    for (; i > 0;) {
                        if ((n = r - i) < 0 && (n = 0), e[s] >> n != t[s] >> n) return !1;
                        i -= r, s += 1
                    }
                    return !0
                }

                function d(e) {
                    if (s.test(e)) return parseInt(e, 16);
                    if ("0" === e[0] && !isNaN(parseInt(e[1], 10))) {
                        if (n.test(e)) return parseInt(e, 8);
                        throw Error(`ipaddr: cannot parse ${e} as octal`)
                    }
                    return parseInt(e, 10)
                }
                let h = {};
                h.IPv4 = function() {
                    function e(e) {
                        let t, r;
                        if (4 !== e.length) throw Error("ipaddr: ipv4 octet count should be 4");
                        for (t = 0; t < e.length; t++)
                            if (!(0 <= (r = e[t]) && r <= 255)) throw Error("ipaddr: ipv4 octet should fit in 8 bits");
                        this.octets = e
                    }
                    return e.prototype.SpecialRanges = {
                        unspecified: [
                            [new e([0, 0, 0, 0]), 8]
                        ],
                        broadcast: [
                            [new e([255, 255, 255, 255]), 32]
                        ],
                        multicast: [
                            [new e([224, 0, 0, 0]), 4]
                        ],
                        linkLocal: [
                            [new e([169, 254, 0, 0]), 16]
                        ],
                        loopback: [
                            [new e([127, 0, 0, 0]), 8]
                        ],
                        carrierGradeNat: [
                            [new e([100, 64, 0, 0]), 10]
                        ],
                        private: [
                            [new e([10, 0, 0, 0]), 8],
                            [new e([172, 16, 0, 0]), 12],
                            [new e([192, 168, 0, 0]), 16]
                        ],
                        reserved: [
                            [new e([192, 0, 0, 0]), 24],
                            [new e([192, 0, 2, 0]), 24],
                            [new e([192, 88, 99, 0]), 24],
                            [new e([198, 18, 0, 0]), 15],
                            [new e([198, 51, 100, 0]), 24],
                            [new e([203, 0, 113, 0]), 24],
                            [new e([240, 0, 0, 0]), 4]
                        ]
                    }, e.prototype.kind = function() {
                        return "ipv4"
                    }, e.prototype.match = function(e, t) {
                        let r;
                        if (void 0 === t && (e = (r = e)[0], t = r[1]), "ipv4" !== e.kind()) throw Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
                        return c(this.octets, e.octets, 8, t)
                    }, e.prototype.prefixLengthFromSubnetMask = function() {
                        let e, t, r, i = 0,
                            n = !1,
                            s = {
                                0: 8,
                                128: 7,
                                192: 6,
                                224: 5,
                                240: 4,
                                248: 3,
                                252: 2,
                                254: 1,
                                255: 0
                            };
                        for (e = 3; e >= 0; e -= 1) {
                            if (!((t = this.octets[e]) in s) || (r = s[t], n && 0 !== r)) return null;
                            8 !== r && (n = !0), i += r
                        }
                        return 32 - i
                    }, e.prototype.range = function() {
                        return h.subnetMatch(this, this.SpecialRanges)
                    }, e.prototype.toByteArray = function() {
                        return this.octets.slice(0)
                    }, e.prototype.toIPv4MappedAddress = function() {
                        return h.IPv6.parse(`::ffff:${this.toString()}`)
                    }, e.prototype.toNormalizedString = function() {
                        return this.toString()
                    }, e.prototype.toString = function() {
                        return this.octets.join(".")
                    }, e
                }(), h.IPv4.broadcastAddressFromCIDR = function(e) {
                    try {
                        let t = this.parseCIDR(e),
                            r = t[0].toByteArray(),
                            i = this.subnetMaskFromPrefixLength(t[1]).toByteArray(),
                            n = [],
                            s = 0;
                        for (; s < 4;) n.push(parseInt(r[s], 10) | 255 ^ parseInt(i[s], 10)), s++;
                        return new this(n)
                    } catch (e) {
                        throw Error("ipaddr: the address does not have IPv4 CIDR format")
                    }
                }, h.IPv4.isIPv4 = function(e) {
                    return null !== this.parser(e)
                }, h.IPv4.isValid = function(e) {
                    try {
                        return new this(this.parser(e)), !0
                    } catch (e) {
                        return !1
                    }
                }, h.IPv4.isValidFourPartDecimal = function(e) {
                    return !!(h.IPv4.isValid(e) && e.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))
                }, h.IPv4.networkAddressFromCIDR = function(e) {
                    let t, r, i, n, s;
                    try {
                        for (i = (t = this.parseCIDR(e))[0].toByteArray(), s = this.subnetMaskFromPrefixLength(t[1]).toByteArray(), n = [], r = 0; r < 4;) n.push(parseInt(i[r], 10) & parseInt(s[r], 10)), r++;
                        return new this(n)
                    } catch (e) {
                        throw Error("ipaddr: the address does not have IPv4 CIDR format")
                    }
                }, h.IPv4.parse = function(e) {
                    let t = this.parser(e);
                    if (null === t) throw Error("ipaddr: string is not formatted like an IPv4 Address");
                    return new this(t)
                }, h.IPv4.parseCIDR = function(e) {
                    let t;
                    if (t = e.match(/^(.+)\/(\d+)$/)) {
                        let e = parseInt(t[2]);
                        if (e >= 0 && e <= 32) {
                            let r = [this.parse(t[1]), e];
                            return Object.defineProperty(r, "toString", {
                                value: function() {
                                    return this.join("/")
                                }
                            }), r
                        }
                    }
                    throw Error("ipaddr: string is not formatted like an IPv4 CIDR range")
                }, h.IPv4.parser = function(e) {
                    let t, r;
                    if (t = e.match(i.fourOctet)) return function() {
                        let e = t.slice(1, 6),
                            r = [];
                        for (let t = 0; t < e.length; t++) r.push(d(e[t]));
                        return r
                    }();
                    if (t = e.match(i.longValue)) {
                        if ((r = d(t[1])) > 0xffffffff || r < 0) throw Error("ipaddr: address outside defined range");
                        return (function() {
                            let e;
                            let t = [];
                            for (e = 0; e <= 24; e += 8) t.push(r >> e & 255);
                            return t
                        })().reverse()
                    }
                    return (t = e.match(i.twoOctet)) ? function() {
                        let e = t.slice(1, 4),
                            i = [];
                        if ((r = d(e[1])) > 0xffffff || r < 0) throw Error("ipaddr: address outside defined range");
                        return i.push(d(e[0])), i.push(r >> 16 & 255), i.push(r >> 8 & 255), i.push(255 & r), i
                    }() : (t = e.match(i.threeOctet)) ? function() {
                        let e = t.slice(1, 5),
                            i = [];
                        if ((r = d(e[2])) > 65535 || r < 0) throw Error("ipaddr: address outside defined range");
                        return i.push(d(e[0])), i.push(d(e[1])), i.push(r >> 8 & 255), i.push(255 & r), i
                    }() : null
                }, h.IPv4.subnetMaskFromPrefixLength = function(e) {
                    if ((e = parseInt(e)) < 0 || e > 32) throw Error("ipaddr: invalid IPv4 prefix length");
                    let t = [0, 0, 0, 0],
                        r = 0,
                        i = Math.floor(e / 8);
                    for (; r < i;) t[r] = 255, r++;
                    return i < 4 && (t[i] = Math.pow(2, e % 8) - 1 << 8 - e % 8), new this(t)
                }, h.IPv6 = function() {
                    function e(e, t) {
                        let r, i;
                        if (16 === e.length)
                            for (r = 0, this.parts = []; r <= 14; r += 2) this.parts.push(e[r] << 8 | e[r + 1]);
                        else if (8 === e.length) this.parts = e;
                        else throw Error("ipaddr: ipv6 part count should be 8 or 16");
                        for (r = 0; r < this.parts.length; r++)
                            if (!(0 <= (i = this.parts[r]) && i <= 65535)) throw Error("ipaddr: ipv6 part should fit in 16 bits");
                        t && (this.zoneId = t)
                    }
                    return e.prototype.SpecialRanges = {
                        unspecified: [new e([0, 0, 0, 0, 0, 0, 0, 0]), 128],
                        linkLocal: [new e([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
                        multicast: [new e([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
                        loopback: [new e([0, 0, 0, 0, 0, 0, 0, 1]), 128],
                        uniqueLocal: [new e([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
                        ipv4Mapped: [new e([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
                        rfc6145: [new e([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
                        rfc6052: [new e([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
                        "6to4": [new e([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
                        teredo: [new e([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
                        reserved: [
                            [new e([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]
                        ],
                        benchmarking: [new e([8193, 2, 0, 0, 0, 0, 0, 0]), 48],
                        amt: [new e([8193, 3, 0, 0, 0, 0, 0, 0]), 32],
                        as112v6: [new e([8193, 4, 274, 0, 0, 0, 0, 0]), 48],
                        deprecated: [new e([8193, 16, 0, 0, 0, 0, 0, 0]), 28],
                        orchid2: [new e([8193, 32, 0, 0, 0, 0, 0, 0]), 28]
                    }, e.prototype.isIPv4MappedAddress = function() {
                        return "ipv4Mapped" === this.range()
                    }, e.prototype.kind = function() {
                        return "ipv6"
                    }, e.prototype.match = function(e, t) {
                        let r;
                        if (void 0 === t && (e = (r = e)[0], t = r[1]), "ipv6" !== e.kind()) throw Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
                        return c(this.parts, e.parts, 16, t)
                    }, e.prototype.prefixLengthFromSubnetMask = function() {
                        let e, t, r = 0,
                            i = !1,
                            n = {
                                0: 16,
                                32768: 15,
                                49152: 14,
                                57344: 13,
                                61440: 12,
                                63488: 11,
                                64512: 10,
                                65024: 9,
                                65280: 8,
                                65408: 7,
                                65472: 6,
                                65504: 5,
                                65520: 4,
                                65528: 3,
                                65532: 2,
                                65534: 1,
                                65535: 0
                            };
                        for (let s = 7; s >= 0; s -= 1) {
                            if (!((e = this.parts[s]) in n) || (t = n[e], i && 0 !== t)) return null;
                            16 !== t && (i = !0), r += t
                        }
                        return 128 - r
                    }, e.prototype.range = function() {
                        return h.subnetMatch(this, this.SpecialRanges)
                    }, e.prototype.toByteArray = function() {
                        let e;
                        let t = [],
                            r = this.parts;
                        for (let i = 0; i < r.length; i++) t.push((e = r[i]) >> 8), t.push(255 & e);
                        return t
                    }, e.prototype.toFixedLengthString = function() {
                        let e = (function() {
                                let e = [];
                                for (let t = 0; t < this.parts.length; t++) e.push(function(e, t) {
                                    for (; e.length < 4;) e = `0${e}`;
                                    return e
                                }(this.parts[t].toString(16), 0));
                                return e
                            }).call(this).join(":"),
                            t = "";
                        return this.zoneId && (t = `%${this.zoneId}`), e + t
                    }, e.prototype.toIPv4Address = function() {
                        if (!this.isIPv4MappedAddress()) throw Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
                        let e = this.parts.slice(-2),
                            t = e[0],
                            r = e[1];
                        return new h.IPv4([t >> 8, 255 & t, r >> 8, 255 & r])
                    }, e.prototype.toNormalizedString = function() {
                        let e = (function() {
                                let e = [];
                                for (let t = 0; t < this.parts.length; t++) e.push(this.parts[t].toString(16));
                                return e
                            }).call(this).join(":"),
                            t = "";
                        return this.zoneId && (t = `%${this.zoneId}`), e + t
                    }, e.prototype.toRFC5952String = function() {
                        let e;
                        let t = /((^|:)(0(:|$)){2,})/g,
                            r = this.toNormalizedString(),
                            i = 0,
                            n = -1;
                        for (; e = t.exec(r);) e[0].length > n && (i = e.index, n = e[0].length);
                        return n < 0 ? r : `${r.substring(0,i)}::${r.substring(i+n)}`
                    }, e.prototype.toString = function() {
                        return this.toRFC5952String()
                    }, e
                }(), h.IPv6.broadcastAddressFromCIDR = function(e) {
                    try {
                        let t = this.parseCIDR(e),
                            r = t[0].toByteArray(),
                            i = this.subnetMaskFromPrefixLength(t[1]).toByteArray(),
                            n = [],
                            s = 0;
                        for (; s < 16;) n.push(parseInt(r[s], 10) | 255 ^ parseInt(i[s], 10)), s++;
                        return new this(n)
                    } catch (e) {
                        throw Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`)
                    }
                }, h.IPv6.isIPv6 = function(e) {
                    return null !== this.parser(e)
                }, h.IPv6.isValid = function(e) {
                    if ("string" == typeof e && -1 === e.indexOf(":")) return !1;
                    try {
                        let t = this.parser(e);
                        return new this(t.parts, t.zoneId), !0
                    } catch (e) {
                        return !1
                    }
                }, h.IPv6.networkAddressFromCIDR = function(e) {
                    let t, r, i, n, s;
                    try {
                        for (i = (t = this.parseCIDR(e))[0].toByteArray(), s = this.subnetMaskFromPrefixLength(t[1]).toByteArray(), n = [], r = 0; r < 16;) n.push(parseInt(i[r], 10) & parseInt(s[r], 10)), r++;
                        return new this(n)
                    } catch (e) {
                        throw Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`)
                    }
                }, h.IPv6.parse = function(e) {
                    let t = this.parser(e);
                    if (null === t.parts) throw Error("ipaddr: string is not formatted like an IPv6 Address");
                    return new this(t.parts, t.zoneId)
                }, h.IPv6.parseCIDR = function(e) {
                    let t, r, i;
                    if ((r = e.match(/^(.+)\/(\d+)$/)) && (t = parseInt(r[2])) >= 0 && t <= 128) return Object.defineProperty(i = [this.parse(r[1]), t], "toString", {
                        value: function() {
                            return this.join("/")
                        }
                    }), i;
                    throw Error("ipaddr: string is not formatted like an IPv6 CIDR range")
                }, h.IPv6.parser = function(e) {
                    let t, r, i, n, s, o;
                    if (i = e.match(l.deprecatedTransitional)) return this.parser(`::ffff:${i[1]}`);
                    if (l.native.test(e)) return u(e, 8);
                    if ((i = e.match(l.transitional)) && (o = i[6] || "", (t = u(i[1].slice(0, -1) + o, 6)).parts)) {
                        for (r = 0, s = [parseInt(i[2]), parseInt(i[3]), parseInt(i[4]), parseInt(i[5])]; r < s.length; r++)
                            if (!(0 <= (n = s[r]) && n <= 255)) return null;
                        return t.parts.push(s[0] << 8 | s[1]), t.parts.push(s[2] << 8 | s[3]), {
                            parts: t.parts,
                            zoneId: t.zoneId
                        }
                    }
                    return null
                }, h.IPv6.subnetMaskFromPrefixLength = function(e) {
                    if ((e = parseInt(e)) < 0 || e > 128) throw Error("ipaddr: invalid IPv6 prefix length");
                    let t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        r = 0,
                        i = Math.floor(e / 8);
                    for (; r < i;) t[r] = 255, r++;
                    return i < 16 && (t[i] = Math.pow(2, e % 8) - 1 << 8 - e % 8), new this(t)
                }, h.fromByteArray = function(e) {
                    let t = e.length;
                    if (4 === t) return new h.IPv4(e);
                    if (16 === t) return new h.IPv6(e);
                    throw Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")
                }, h.isValid = function(e) {
                    return h.IPv6.isValid(e) || h.IPv4.isValid(e)
                }, h.parse = function(e) {
                    if (h.IPv6.isValid(e)) return h.IPv6.parse(e);
                    if (h.IPv4.isValid(e)) return h.IPv4.parse(e);
                    throw Error("ipaddr: the address has neither IPv6 nor IPv4 format")
                }, h.parseCIDR = function(e) {
                    try {
                        return h.IPv6.parseCIDR(e)
                    } catch (t) {
                        try {
                            return h.IPv4.parseCIDR(e)
                        } catch (e) {
                            throw Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")
                        }
                    }
                }, h.process = function(e) {
                    let t = this.parse(e);
                    return "ipv6" === t.kind() && t.isIPv4MappedAddress() ? t.toIPv4Address() : t
                }, h.subnetMatch = function(e, t, r) {
                    let i, n, s, o;
                    for (n in null == r && (r = "unicast"), t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            for (!(s = t[n])[0] || s[0] instanceof Array || (s = [s]), i = 0; i < s.length; i++)
                                if (o = s[i], e.kind() === o[0].kind() && e.match.apply(e, o)) return n
                        }
                    return r
                }, e.exports ? e.exports = h : t.ipaddr = h
            }(this)
        },
        29067: (e, t) => {
            "use strict";
            var r, i;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0,
                function(e) {
                    e.assertEqual = e => e, e.assertIs = function(e) {}, e.assertNever = function(e) {
                        throw Error()
                    }, e.arrayToEnum = e => {
                        let t = {};
                        for (let r of e) t[r] = r;
                        return t
                    }, e.getValidEnumValues = t => {
                        let r = e.objectKeys(t).filter(e => "number" != typeof t[t[e]]),
                            i = {};
                        for (let e of r) i[e] = t[e];
                        return e.objectValues(i)
                    }, e.objectValues = t => e.objectKeys(t).map(function(e) {
                        return t[e]
                    }), e.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
                        let t = [];
                        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                        return t
                    }, e.find = (e, t) => {
                        for (let r of e)
                            if (t(r)) return r
                    }, e.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, e.joinValues = function(e, t = " | ") {
                        return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t)
                    }, e.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t
                }(r || (t.util = r = {})), (i || (t.objectUtil = i = {})).mergeShapes = (e, t) => ({ ...e,
                    ...t
                }), t.ZodParsedType = r.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), t.getParsedType = e => {
                    switch (typeof e) {
                        case "undefined":
                            return t.ZodParsedType.undefined;
                        case "string":
                            return t.ZodParsedType.string;
                        case "number":
                            return isNaN(e) ? t.ZodParsedType.nan : t.ZodParsedType.number;
                        case "boolean":
                            return t.ZodParsedType.boolean;
                        case "function":
                            return t.ZodParsedType.function;
                        case "bigint":
                            return t.ZodParsedType.bigint;
                        case "symbol":
                            return t.ZodParsedType.symbol;
                        case "object":
                            if (Array.isArray(e)) return t.ZodParsedType.array;
                            if (null === e) return t.ZodParsedType.null;
                            if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return t.ZodParsedType.promise;
                            if ("undefined" != typeof Map && e instanceof Map) return t.ZodParsedType.map;
                            if ("undefined" != typeof Set && e instanceof Set) return t.ZodParsedType.set;
                            if ("undefined" != typeof Date && e instanceof Date) return t.ZodParsedType.date;
                            return t.ZodParsedType.object;
                        default:
                            return t.ZodParsedType.unknown
                    }
                }
        },
        31168: (e, t, r) => {
            "use strict";
            r.d(t, {
                bI: () => g,
                ko: () => T
            });
            var i = r(5003),
                n = r(23084),
                s = r(66551),
                o = r(57551),
                a = r(52516);
            let l = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                u = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                c = BigInt(1),
                d = BigInt(2),
                h = (e, t) => (e + t / d) / t;

            function p(e) {
                let t = BigInt(3),
                    r = BigInt(6),
                    i = BigInt(11),
                    n = BigInt(22),
                    s = BigInt(23),
                    a = BigInt(44),
                    u = BigInt(88),
                    c = e * e * e % l,
                    h = c * c * e % l,
                    p = (0, o.zH)(h, t, l) * h % l,
                    g = (0, o.zH)(p, t, l) * h % l,
                    y = (0, o.zH)(g, d, l) * c % l,
                    m = (0, o.zH)(y, i, l) * y % l,
                    v = (0, o.zH)(m, n, l) * m % l,
                    b = (0, o.zH)(v, a, l) * v % l,
                    w = (0, o.zH)(b, u, l) * b % l,
                    x = (0, o.zH)(w, a, l) * v % l,
                    k = (0, o.zH)(x, t, l) * h % l,
                    A = (0, o.zH)(k, s, l) * m % l,
                    S = (0, o.zH)(A, r, l) * c % l,
                    C = (0, o.zH)(S, d, l);
                if (!f.eql(f.sqr(C), e)) throw Error("Cannot find square root");
                return C
            }
            let f = (0, o.D0)(l, void 0, void 0, {
                    sqrt: p
                }),
                g = (0, s.s)({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: f,
                    n: u,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: e => {
                            let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -c * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                n = BigInt("0x100000000000000000000000000000000"),
                                s = h(t * e, u),
                                a = h(-r * e, u),
                                l = (0, o.zi)(e - s * t - a * i, u),
                                d = (0, o.zi)(-s * r - a * t, u),
                                p = l > n,
                                f = d > n;
                            if (p && (l = u - l), f && (d = u - d), l > n || d > n) throw Error("splitScalar: Endomorphism failed, k=" + e);
                            return {
                                k1neg: p,
                                k1: l,
                                k2neg: f,
                                k2: d
                            }
                        }
                    }
                }, i.sc),
                y = BigInt(0),
                m = {};

            function v(e, ...t) {
                let r = m[e];
                if (void 0 === r) {
                    let t = (0, i.sc)(Uint8Array.from(e, e => e.charCodeAt(0)));
                    r = (0, a.Id)(t, t), m[e] = r
                }
                return (0, i.sc)((0, a.Id)(r, ...t))
            }
            let b = e => e.toRawBytes(!0).slice(1),
                w = e => (0, a.lq)(e, 32),
                x = e => (0, o.zi)(e, l),
                k = e => (0, o.zi)(e, u),
                A = g.ProjectivePoint,
                S = (e, t, r) => A.BASE.multiplyAndAddUnsafe(e, t, r);

            function C(e) {
                let t = g.utils.normPrivateKeyToScalar(e),
                    r = A.fromPrivateKey(t);
                return {
                    scalar: r.hasEvenY() ? t : k(-t),
                    bytes: b(r)
                }
            }

            function I(e) {
                (0, a.aK)("x", e, c, l);
                let t = x(e * e),
                    r = p(x(t * e + BigInt(7)));
                r % d !== y && (r = x(-r));
                let i = new A(e, r, c);
                return i.assertValidity(), i
            }
            let B = a.Ph;

            function E(...e) {
                return k(B(v("BIP0340/challenge", ...e)))
            }

            function _(e, t, r) {
                let i = (0, a.qj)("signature", e, 64),
                    n = (0, a.qj)("message", t),
                    s = (0, a.qj)("publicKey", r, 32);
                try {
                    let e = I(B(s)),
                        t = B(i.subarray(0, 32));
                    if (!(0, a.r4)(t, c, l)) return !1;
                    let r = B(i.subarray(32, 64));
                    if (!(0, a.r4)(r, c, u)) return !1;
                    let o = E(w(t), b(e), n),
                        d = S(e, r, k(-o));
                    if (!d || !d.hasEvenY() || d.toAffine().x !== t) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }
            let T = {
                getPublicKey: function(e) {
                    return C(e).bytes
                },
                sign: function(e, t, r = (0, n.po)(32)) {
                    let i = (0, a.qj)("message", e),
                        {
                            bytes: s,
                            scalar: o
                        } = C(t),
                        l = w(o ^ B(v("BIP0340/aux", (0, a.qj)("auxRand", r, 32)))),
                        u = k(B(v("BIP0340/nonce", l, s, i)));
                    if (u === y) throw Error("sign failed: k is zero");
                    let {
                        bytes: c,
                        scalar: d
                    } = C(u), h = E(c, s, i), p = new Uint8Array(64);
                    if (p.set(c, 0), p.set(w(k(d + h * o)), 32), !_(p, i, s)) throw Error("sign: Invalid signature produced");
                    return p
                },
                verify: _,
                utils: {
                    randomPrivateKey: g.utils.randomPrivateKey,
                    lift_x: I,
                    pointToBytes: b,
                    numberToBytesBE: a.lq,
                    bytesToNumberBE: a.Ph,
                    taggedHash: v,
                    mod: o.zi
                }
            }
        },
        31527: (e, t) => {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.errorUtil = void 0,
                function(e) {
                    e.errToObj = e => "string" == typeof e ? {
                        message: e
                    } : e || {}, e.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message
                }(r || (t.errorUtil = r = {}))
        },
        32607: (e, t, r) => {
            "use strict";
            r.d(t, {
                ev: () => w
            });
            var i = r(6802),
                n = r(23084),
                s = r(64546),
                o = r(57551),
                a = r(52516);
            let l = BigInt(0),
                u = BigInt(1),
                c = BigInt(2),
                d = BigInt(8),
                h = {
                    zip215: !0
                },
                p = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                f = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
            BigInt(0);
            let g = BigInt(1),
                y = BigInt(2);
            BigInt(3);
            let m = BigInt(5),
                v = BigInt(8),
                b = (0, o.D0)(p, void 0, !0),
                w = function(e) {
                    let t = function(e) {
                            let t = (0, s.hp)(e);
                            return a.Q5(e, {
                                hash: "function",
                                a: "bigint",
                                d: "bigint",
                                randomBytes: "function"
                            }, {
                                adjustScalarBytes: "function",
                                domain: "function",
                                uvRatio: "function",
                                mapToCurve: "function"
                            }), Object.freeze({ ...t
                            })
                        }(e),
                        {
                            Fp: r,
                            n: i,
                            prehash: n,
                            hash: p,
                            randomBytes: f,
                            nByteLength: g,
                            h: y
                        } = t,
                        m = c << BigInt(8 * g) - u,
                        v = r.create,
                        b = (0, o.D0)(t.n, t.nBitLength),
                        w = t.uvRatio || ((e, t) => {
                            try {
                                return {
                                    isValid: !0,
                                    value: r.sqrt(e * r.inv(t))
                                }
                            } catch (e) {
                                return {
                                    isValid: !1,
                                    value: l
                                }
                            }
                        }),
                        x = t.adjustScalarBytes || (e => e),
                        k = t.domain || ((e, t, r) => {
                            if ((0, a.e8)("phflag", r), t.length || r) throw Error("Contexts/pre-hash are not supported");
                            return e
                        });

                    function A(e, t) {
                        a.aK("coordinate " + e, t, l, m)
                    }

                    function S(e) {
                        if (!(e instanceof B)) throw Error("ExtendedPoint expected")
                    }
                    let C = (0, a.x)((e, t) => {
                            let {
                                ex: i,
                                ey: n,
                                ez: s
                            } = e, o = e.is0();
                            null == t && (t = o ? d : r.inv(s));
                            let a = v(i * t),
                                c = v(n * t),
                                h = v(s * t);
                            if (o) return {
                                x: l,
                                y: u
                            };
                            if (h !== u) throw Error("invZ was invalid");
                            return {
                                x: a,
                                y: c
                            }
                        }),
                        I = (0, a.x)(e => {
                            let {
                                a: r,
                                d: i
                            } = t;
                            if (e.is0()) throw Error("bad point: ZERO");
                            let {
                                ex: n,
                                ey: s,
                                ez: o,
                                et: a
                            } = e, l = v(n * n), u = v(s * s), c = v(o * o), d = v(c * c), h = v(l * r);
                            if (v(c * v(h + u)) !== v(d + v(i * v(l * u)))) throw Error("bad point: equation left != right (1)");
                            if (v(n * s) !== v(o * a)) throw Error("bad point: equation left != right (2)");
                            return !0
                        });
                    class B {
                        constructor(e, t, r, i) {
                            this.ex = e, this.ey = t, this.ez = r, this.et = i, A("x", e), A("y", t), A("z", r), A("t", i), Object.freeze(this)
                        }
                        get x() {
                            return this.toAffine().x
                        }
                        get y() {
                            return this.toAffine().y
                        }
                        static fromAffine(e) {
                            if (e instanceof B) throw Error("extended point not allowed");
                            let {
                                x: t,
                                y: r
                            } = e || {};
                            return A("x", t), A("y", r), new B(t, r, u, v(t * r))
                        }
                        static normalizeZ(e) {
                            let t = r.invertBatch(e.map(e => e.ez));
                            return e.map((e, r) => e.toAffine(t[r])).map(B.fromAffine)
                        }
                        static msm(e, t) {
                            return (0, s.Xf)(B, b, e, t)
                        }
                        _setWindowSize(e) {
                            T.setWindowSize(this, e)
                        }
                        assertValidity() {
                            I(this)
                        }
                        equals(e) {
                            S(e);
                            let {
                                ex: t,
                                ey: r,
                                ez: i
                            } = this, {
                                ex: n,
                                ey: s,
                                ez: o
                            } = e, a = v(t * o), l = v(n * i), u = v(r * o), c = v(s * i);
                            return a === l && u === c
                        }
                        is0() {
                            return this.equals(B.ZERO)
                        }
                        negate() {
                            return new B(v(-this.ex), this.ey, this.ez, v(-this.et))
                        }
                        double() {
                            let {
                                a: e
                            } = t, {
                                ex: r,
                                ey: i,
                                ez: n
                            } = this, s = v(r * r), o = v(i * i), a = v(c * v(n * n)), l = v(e * s), u = r + i, d = v(v(u * u) - s - o), h = l + o, p = h - a, f = l - o, g = v(d * p), y = v(h * f), m = v(d * f);
                            return new B(g, y, v(p * h), m)
                        }
                        add(e) {
                            S(e);
                            let {
                                a: r,
                                d: i
                            } = t, {
                                ex: n,
                                ey: s,
                                ez: o,
                                et: a
                            } = this, {
                                ex: u,
                                ey: d,
                                ez: h,
                                et: p
                            } = e;
                            if (r === BigInt(-1)) {
                                let e = v((s - n) * (d + u)),
                                    t = v((s + n) * (d - u)),
                                    r = v(t - e);
                                if (r === l) return this.double();
                                let i = v(o * c * p),
                                    f = v(a * c * h),
                                    g = f + i,
                                    y = t + e,
                                    m = f - i,
                                    b = v(g * r),
                                    w = v(y * m),
                                    x = v(g * m);
                                return new B(b, w, v(r * y), x)
                            }
                            let f = v(n * u),
                                g = v(s * d),
                                y = v(a * i * p),
                                m = v(o * h),
                                b = v((n + s) * (u + d) - f - g),
                                w = m - y,
                                x = m + y,
                                k = v(g - r * f),
                                A = v(b * w),
                                C = v(x * k),
                                I = v(b * k);
                            return new B(A, C, v(w * x), I)
                        }
                        subtract(e) {
                            return this.add(e.negate())
                        }
                        wNAF(e) {
                            return T.wNAFCached(this, e, B.normalizeZ)
                        }
                        multiply(e) {
                            a.aK("scalar", e, u, i);
                            let {
                                p: t,
                                f: r
                            } = this.wNAF(e);
                            return B.normalizeZ([t, r])[0]
                        }
                        multiplyUnsafe(e, t = B.ZERO) {
                            return (a.aK("scalar", e, l, i), e === l) ? _ : this.is0() || e === u ? this : T.wNAFCachedUnsafe(this, e, B.normalizeZ, t)
                        }
                        isSmallOrder() {
                            return this.multiplyUnsafe(y).is0()
                        }
                        isTorsionFree() {
                            return T.unsafeLadder(this, i).is0()
                        }
                        toAffine(e) {
                            return C(this, e)
                        }
                        clearCofactor() {
                            let {
                                h: e
                            } = t;
                            return e === u ? this : this.multiplyUnsafe(e)
                        }
                        static fromHex(e, i = !1) {
                            let {
                                d: n,
                                a: s
                            } = t, o = r.BYTES;
                            e = (0, a.qj)("pointHex", e, o), (0, a.e8)("zip215", i);
                            let c = e.slice(),
                                d = e[o - 1];
                            c[o - 1] = -129 & d;
                            let h = a.lX(c),
                                p = i ? m : r.ORDER;
                            a.aK("pointHex.y", h, l, p);
                            let f = v(h * h),
                                {
                                    isValid: g,
                                    value: y
                                } = w(v(f - u), v(n * f - s));
                            if (!g) throw Error("Point.fromHex: invalid y coordinate");
                            let b = (y & u) === u,
                                x = (128 & d) != 0;
                            if (!i && y === l && x) throw Error("Point.fromHex: x=0 and x_0=1");
                            return x !== b && (y = v(-y)), B.fromAffine({
                                x: y,
                                y: h
                            })
                        }
                        static fromPrivateKey(e) {
                            return O(e).point
                        }
                        toRawBytes() {
                            let {
                                x: e,
                                y: t
                            } = this.toAffine(), i = a.z(t, r.BYTES);
                            return i[i.length - 1] |= e & u ? 128 : 0, i
                        }
                        toHex() {
                            return a.My(this.toRawBytes())
                        }
                    }
                    B.BASE = new B(t.Gx, t.Gy, u, v(t.Gx * t.Gy)), B.ZERO = new B(l, u, u, l);
                    let {
                        BASE: E,
                        ZERO: _
                    } = B, T = (0, s.hT)(B, 8 * g);

                    function N(e) {
                        var t;
                        return t = a.lX(e), (0, o.zi)(t, i)
                    }

                    function O(e) {
                        let t = r.BYTES;
                        e = (0, a.qj)("private key", e, t);
                        let i = (0, a.qj)("hashed private key", p(e), 2 * t),
                            n = x(i.slice(0, t)),
                            s = i.slice(t, 2 * t),
                            o = N(n),
                            l = E.multiply(o),
                            u = l.toRawBytes();
                        return {
                            head: n,
                            prefix: s,
                            scalar: o,
                            point: l,
                            pointBytes: u
                        }
                    }

                    function U(e = new Uint8Array, ...t) {
                        return N(p(k(a.Id(...t), (0, a.qj)("context", e), !!n)))
                    }
                    return E._setWindowSize(8), {
                        CURVE: t,
                        getPublicKey: function(e) {
                            return O(e).pointBytes
                        },
                        sign: function(e, t, s = {}) {
                            var u;
                            e = (0, a.qj)("message", e), n && (e = n(e));
                            let {
                                prefix: c,
                                scalar: d,
                                pointBytes: h
                            } = O(t), p = U(s.context, c, e), f = E.multiply(p).toRawBytes(), g = (u = p + U(s.context, f, h, e) * d, (0, o.zi)(u, i));
                            a.aK("signature.s", g, l, i);
                            let y = a.Id(f, a.z(g, r.BYTES));
                            return (0, a.qj)("result", y, 2 * r.BYTES)
                        },
                        verify: function(e, t, i, s = h) {
                            let o, l, u;
                            let {
                                context: c,
                                zip215: d
                            } = s, p = r.BYTES;
                            e = (0, a.qj)("signature", e, 2 * p), t = (0, a.qj)("message", t), i = (0, a.qj)("publicKey", i, p), void 0 !== d && (0, a.e8)("zip215", d), n && (t = n(t));
                            let f = a.lX(e.slice(p, 2 * p));
                            try {
                                o = B.fromHex(i, d), l = B.fromHex(e.slice(0, p), d), u = E.multiplyUnsafe(f)
                            } catch (e) {
                                return !1
                            }
                            if (!d && o.isSmallOrder()) return !1;
                            let g = U(c, l.toRawBytes(), o.toRawBytes(), t);
                            return l.add(o.multiplyUnsafe(g)).subtract(u).clearCofactor().equals(B.ZERO)
                        },
                        ExtendedPoint: B,
                        utils: {
                            getExtendedPublicKey: O,
                            randomPrivateKey: () => f(r.BYTES),
                            precompute: (e = 8, t = B.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                        }
                    }
                }({
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    Fp: b,
                    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                    h: v,
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
                    hash: i.Zf,
                    randomBytes: n.po,
                    adjustScalarBytes: function(e) {
                        return e[0] &= 248, e[31] &= 127, e[31] |= 64, e
                    },
                    uvRatio: function(e, t) {
                        let r = (0, o.zi)(t * t * t, p),
                            i = function(e) {
                                let t = BigInt(10),
                                    r = BigInt(20),
                                    i = BigInt(40),
                                    n = BigInt(80),
                                    s = e * e % p * e % p,
                                    a = (0, o.zH)(s, y, p) * s % p,
                                    l = (0, o.zH)(a, g, p) * e % p,
                                    u = (0, o.zH)(l, m, p) * l % p,
                                    c = (0, o.zH)(u, t, p) * u % p,
                                    d = (0, o.zH)(c, r, p) * c % p,
                                    h = (0, o.zH)(d, i, p) * d % p,
                                    f = (0, o.zH)(h, n, p) * h % p,
                                    v = (0, o.zH)(f, n, p) * h % p,
                                    b = (0, o.zH)(v, t, p) * u % p;
                                return {
                                    pow_p_5_8: (0, o.zH)(b, y, p) * e % p,
                                    b2: s
                                }
                            }(e * (0, o.zi)(r * r * t, p)).pow_p_5_8,
                            n = (0, o.zi)(e * r * i, p),
                            s = (0, o.zi)(t * n * n, p),
                            a = n,
                            l = (0, o.zi)(n * f, p),
                            u = s === e,
                            c = s === (0, o.zi)(-e, p),
                            d = s === (0, o.zi)(-e * f, p);
                        return u && (n = a), (c || d) && (n = l), (0, o.dQ)(n, p) && (n = (0, o.zi)(-n, p)), {
                            isValid: u || c,
                            value: n
                        }
                    }
                })
        },
        48554: (e, t, r) => {
            var i = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r.g && r.g,
                n = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = i.DOMException
                    }
                    return e.prototype = i, new e
                }();
            ! function(e) {
                ! function(t) {
                    var r = void 0 !== e && e || "undefined" != typeof self && self || void 0 !== r && r,
                        i = {
                            searchParams: "URLSearchParams" in r,
                            iterable: "Symbol" in r && "iterator" in Symbol,
                            blob: "FileReader" in r && "Blob" in r && function() {
                                try {
                                    return new Blob, !0
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            formData: "FormData" in r,
                            arrayBuffer: "ArrayBuffer" in r
                        };
                    if (i.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        s = ArrayBuffer.isView || function(e) {
                            return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function o(e) {
                        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw TypeError('Invalid character in header field name: "' + e + '"');
                        return e.toLowerCase()
                    }

                    function a(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }

                    function l(e) {
                        var t = {
                            next: function() {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return i.iterable && (t[Symbol.iterator] = function() {
                            return t
                        }), t
                    }

                    function u(e) {
                        this.map = {}, e instanceof u ? e.forEach(function(e, t) {
                            this.append(t, e)
                        }, this) : Array.isArray(e) ? e.forEach(function(e) {
                            this.append(e[0], e[1])
                        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                            this.append(t, e[t])
                        }, this)
                    }

                    function c(e) {
                        if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function d(e) {
                        return new Promise(function(t, r) {
                            e.onload = function() {
                                t(e.result)
                            }, e.onerror = function() {
                                r(e.error)
                            }
                        })
                    }

                    function h(e) {
                        var t = new FileReader,
                            r = d(t);
                        return t.readAsArrayBuffer(e), r
                    }

                    function p(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function f() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            if (this.bodyUsed = this.bodyUsed, this._bodyInit = e, e) {
                                if ("string" == typeof e) this._bodyText = e;
                                else if (i.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                                else if (i.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                                else if (i.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                                else {
                                    var t;
                                    i.arrayBuffer && i.blob && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = p(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e)
                                }
                            } else this._bodyText = "";
                            !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, i.blob && (this.blob = function() {
                            var e = c(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                            throw Error("could not read FormData body as blob")
                        }, this.arrayBuffer = function() {
                            if (!this._bodyArrayBuffer) return this.blob().then(h);
                            var e = c(this);
                            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        }), this.text = function() {
                            var e, t, r, i = c(this);
                            if (i) return i;
                            if (this._bodyBlob) return e = this._bodyBlob, r = d(t = new FileReader), t.readAsText(e), r;
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                            throw Error("could not read FormData body as text")
                        }, i.formData && (this.formData = function() {
                            return this.text().then(m)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    u.prototype.append = function(e, t) {
                        e = o(e), t = a(t);
                        var r = this.map[e];
                        this.map[e] = r ? r + ", " + t : t
                    }, u.prototype.delete = function(e) {
                        delete this.map[o(e)]
                    }, u.prototype.get = function(e) {
                        return e = o(e), this.has(e) ? this.map[e] : null
                    }, u.prototype.has = function(e) {
                        return this.map.hasOwnProperty(o(e))
                    }, u.prototype.set = function(e, t) {
                        this.map[o(e)] = a(t)
                    }, u.prototype.forEach = function(e, t) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                    }, u.prototype.keys = function() {
                        var e = [];
                        return this.forEach(function(t, r) {
                            e.push(r)
                        }), l(e)
                    }, u.prototype.values = function() {
                        var e = [];
                        return this.forEach(function(t) {
                            e.push(t)
                        }), l(e)
                    }, u.prototype.entries = function() {
                        var e = [];
                        return this.forEach(function(t, r) {
                            e.push([r, t])
                        }), l(e)
                    }, i.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                    var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function y(e, t) {
                        if (!(this instanceof y)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        var r, i, n = (t = t || {}).body;
                        if (e instanceof y) {
                            if (e.bodyUsed) throw TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new u(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), g.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                        if (this._initBody(n), ("GET" === this.method || "HEAD" === this.method) && ("no-store" === t.cache || "no-cache" === t.cache)) {
                            var s = /([?&])_=[^&]*/;
                            s.test(this.url) ? this.url = this.url.replace(s, "$1_=" + new Date().getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }

                    function m(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach(function(e) {
                            if (e) {
                                var r = e.split("="),
                                    i = r.shift().replace(/\+/g, " "),
                                    n = r.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(i), decodeURIComponent(n))
                            }
                        }), t
                    }

                    function v(e, t) {
                        if (!(this instanceof v)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    y.prototype.clone = function() {
                        return new y(this, {
                            body: this._bodyInit
                        })
                    }, f.call(y.prototype), f.call(v.prototype), v.prototype.clone = function() {
                        return new v(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new u(this.headers),
                            url: this.url
                        })
                    }, v.error = function() {
                        var e = new v(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var b = [301, 302, 303, 307, 308];
                    v.redirect = function(e, t) {
                        if (-1 === b.indexOf(t)) throw RangeError("Invalid status code");
                        return new v(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = r.DOMException;
                    try {
                        new t.DOMException
                    } catch (e) {
                        t.DOMException = function(e, t) {
                            this.message = e, this.name = t;
                            var r = Error(e);
                            this.stack = r.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function w(e, n) {
                        return new Promise(function(s, o) {
                            var l = new y(e, n);
                            if (l.signal && l.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                            var c = new XMLHttpRequest;

                            function d() {
                                c.abort()
                            }
                            c.onload = function() {
                                var e, t, r = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: (e = c.getAllResponseHeaders() || "", t = new u, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                                    }).forEach(function(e) {
                                        var r = e.split(":"),
                                            i = r.shift().trim();
                                        if (i) {
                                            var n = r.join(":").trim();
                                            t.append(i, n)
                                        }
                                    }), t)
                                };
                                r.url = "responseURL" in c ? c.responseURL : r.headers.get("X-Request-URL");
                                var i = "response" in c ? c.response : c.responseText;
                                setTimeout(function() {
                                    s(new v(i, r))
                                }, 0)
                            }, c.onerror = function() {
                                setTimeout(function() {
                                    o(TypeError("Network request failed"))
                                }, 0)
                            }, c.ontimeout = function() {
                                setTimeout(function() {
                                    o(TypeError("Network request failed"))
                                }, 0)
                            }, c.onabort = function() {
                                setTimeout(function() {
                                    o(new t.DOMException("Aborted", "AbortError"))
                                }, 0)
                            }, c.open(l.method, function(e) {
                                try {
                                    return "" === e && r.location.href ? r.location.href : e
                                } catch (t) {
                                    return e
                                }
                            }(l.url), !0), "include" === l.credentials ? c.withCredentials = !0 : "omit" === l.credentials && (c.withCredentials = !1), "responseType" in c && (i.blob ? c.responseType = "blob" : i.arrayBuffer && l.headers.get("Content-Type") && -1 !== l.headers.get("Content-Type").indexOf("application/octet-stream") && (c.responseType = "arraybuffer")), !n || "object" != typeof n.headers || n.headers instanceof u ? l.headers.forEach(function(e, t) {
                                c.setRequestHeader(t, e)
                            }) : Object.getOwnPropertyNames(n.headers).forEach(function(e) {
                                c.setRequestHeader(e, a(n.headers[e]))
                            }), l.signal && (l.signal.addEventListener("abort", d), c.onreadystatechange = function() {
                                4 === c.readyState && l.signal.removeEventListener("abort", d)
                            }), c.send(void 0 === l._bodyInit ? null : l._bodyInit)
                        })
                    }
                    w.polyfill = !0, r.fetch || (r.fetch = w, r.Headers = u, r.Request = y, r.Response = v), t.Headers = u, t.Request = y, t.Response = v, t.fetch = w
                }({})
            }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
            var s = i.fetch ? i : n;
            (t = s.fetch).default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
        },
        49381: (e, t, r) => {
            "use strict";
            var i = r(51642).Buffer;
            class n {
                static isArrayBuffer(e) {
                    return "[object ArrayBuffer]" === Object.prototype.toString.call(e)
                }
                static toArrayBuffer(e) {
                    return this.isArrayBuffer(e) ? e : e.byteLength === e.buffer.byteLength || 0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? e.buffer : this.toUint8Array(e.buffer).slice(e.byteOffset, e.byteOffset + e.byteLength).buffer
                }
                static toUint8Array(e) {
                    return this.toView(e, Uint8Array)
                }
                static toView(e, t) {
                    if (e.constructor === t) return e;
                    if (this.isArrayBuffer(e)) return new t(e);
                    if (this.isArrayBufferView(e)) return new t(e.buffer, e.byteOffset, e.byteLength);
                    throw TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'")
                }
                static isBufferSource(e) {
                    return this.isArrayBufferView(e) || this.isArrayBuffer(e)
                }
                static isArrayBufferView(e) {
                    return ArrayBuffer.isView(e) || e && this.isArrayBuffer(e.buffer)
                }
                static isEqual(e, t) {
                    let r = n.toUint8Array(e),
                        i = n.toUint8Array(t);
                    if (r.length !== i.byteLength) return !1;
                    for (let e = 0; e < r.length; e++)
                        if (r[e] !== i[e]) return !1;
                    return !0
                }
                static concat(...e) {
                    let t;
                    t = !Array.isArray(e[0]) || e[1] instanceof Function ? Array.isArray(e[0]) && e[1] instanceof Function ? e[0] : e[e.length - 1] instanceof Function ? e.slice(0, e.length - 1) : e : e[0];
                    let r = 0;
                    for (let e of t) r += e.byteLength;
                    let i = new Uint8Array(r),
                        n = 0;
                    for (let e of t) {
                        let t = this.toUint8Array(e);
                        i.set(t, n), n += t.length
                    }
                    return e[e.length - 1] instanceof Function ? this.toView(i, e[e.length - 1]) : i.buffer
                }
            }
            let s = "string",
                o = /^[0-9a-f]+$/i,
                a = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
                l = /^[a-zA-Z0-9-_]+$/;
            class u {
                static fromString(e) {
                    let t = unescape(encodeURIComponent(e)),
                        r = new Uint8Array(t.length);
                    for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                    return r.buffer
                }
                static toString(e) {
                    let t = n.toUint8Array(e),
                        r = "";
                    for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
                    return decodeURIComponent(escape(r))
                }
            }
            class c {
                static toString(e, t = !1) {
                    let r = n.toArrayBuffer(e),
                        i = new DataView(r),
                        s = "";
                    for (let e = 0; e < r.byteLength; e += 2) s += String.fromCharCode(i.getUint16(e, t));
                    return s
                }
                static fromString(e, t = !1) {
                    let r = new ArrayBuffer(2 * e.length),
                        i = new DataView(r);
                    for (let r = 0; r < e.length; r++) i.setUint16(2 * r, e.charCodeAt(r), t);
                    return r
                }
            }
            class d {
                static isHex(e) {
                    return typeof e === s && o.test(e)
                }
                static isBase64(e) {
                    return typeof e === s && a.test(e)
                }
                static isBase64Url(e) {
                    return typeof e === s && l.test(e)
                }
                static ToString(e, t = "utf8") {
                    let r = n.toUint8Array(e);
                    switch (t.toLowerCase()) {
                        case "utf8":
                            return this.ToUtf8String(r);
                        case "binary":
                            return this.ToBinary(r);
                        case "hex":
                            return this.ToHex(r);
                        case "base64":
                            return this.ToBase64(r);
                        case "base64url":
                            return this.ToBase64Url(r);
                        case "utf16le":
                            return c.toString(r, !0);
                        case "utf16":
                        case "utf16be":
                            return c.toString(r);
                        default:
                            throw Error(`Unknown type of encoding '${t}'`)
                    }
                }
                static FromString(e, t = "utf8") {
                    if (!e) return new ArrayBuffer(0);
                    switch (t.toLowerCase()) {
                        case "utf8":
                            return this.FromUtf8String(e);
                        case "binary":
                            return this.FromBinary(e);
                        case "hex":
                            return this.FromHex(e);
                        case "base64":
                            return this.FromBase64(e);
                        case "base64url":
                            return this.FromBase64Url(e);
                        case "utf16le":
                            return c.fromString(e, !0);
                        case "utf16":
                        case "utf16be":
                            return c.fromString(e);
                        default:
                            throw Error(`Unknown type of encoding '${t}'`)
                    }
                }
                static ToBase64(e) {
                    let t = n.toUint8Array(e);
                    return "undefined" != typeof btoa ? btoa(this.ToString(t, "binary")) : i.from(t).toString("base64")
                }
                static FromBase64(e) {
                    let t = this.formatString(e);
                    if (!t) return new ArrayBuffer(0);
                    if (!d.isBase64(t)) throw TypeError("Argument 'base64Text' is not Base64 encoded");
                    return "undefined" != typeof atob ? this.FromBinary(atob(t)) : new Uint8Array(i.from(t, "base64")).buffer
                }
                static FromBase64Url(e) {
                    let t = this.formatString(e);
                    if (!t) return new ArrayBuffer(0);
                    if (!d.isBase64Url(t)) throw TypeError("Argument 'base64url' is not Base64Url encoded");
                    return this.FromBase64(this.Base64Padding(t.replace(/\-/g, "+").replace(/\_/g, "/")))
                }
                static ToBase64Url(e) {
                    return this.ToBase64(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "")
                }
                static FromUtf8String(e, t = d.DEFAULT_UTF8_ENCODING) {
                    switch (t) {
                        case "ascii":
                            return this.FromBinary(e);
                        case "utf8":
                            return u.fromString(e);
                        case "utf16":
                        case "utf16be":
                            return c.fromString(e);
                        case "utf16le":
                        case "usc2":
                            return c.fromString(e, !0);
                        default:
                            throw Error(`Unknown type of encoding '${t}'`)
                    }
                }
                static ToUtf8String(e, t = d.DEFAULT_UTF8_ENCODING) {
                    switch (t) {
                        case "ascii":
                            return this.ToBinary(e);
                        case "utf8":
                            return u.toString(e);
                        case "utf16":
                        case "utf16be":
                            return c.toString(e);
                        case "utf16le":
                        case "usc2":
                            return c.toString(e, !0);
                        default:
                            throw Error(`Unknown type of encoding '${t}'`)
                    }
                }
                static FromBinary(e) {
                    let t = e.length,
                        r = new Uint8Array(t);
                    for (let i = 0; i < t; i++) r[i] = e.charCodeAt(i);
                    return r.buffer
                }
                static ToBinary(e) {
                    let t = n.toUint8Array(e),
                        r = "";
                    for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
                    return r
                }
                static ToHex(e) {
                    let t = n.toUint8Array(e),
                        r = "",
                        i = t.length;
                    for (let e = 0; e < i; e++) {
                        let i = t[e];
                        i < 16 && (r += "0"), r += i.toString(16)
                    }
                    return r
                }
                static FromHex(e) {
                    let t = this.formatString(e);
                    if (!t) return new ArrayBuffer(0);
                    if (!d.isHex(t)) throw TypeError("Argument 'hexString' is not HEX encoded");
                    t.length % 2 && (t = `0${t}`);
                    let r = new Uint8Array(t.length / 2);
                    for (let e = 0; e < t.length; e += 2) {
                        let i = t.slice(e, e + 2);
                        r[e / 2] = parseInt(i, 16)
                    }
                    return r.buffer
                }
                static ToUtf16String(e, t = !1) {
                    return c.toString(e, t)
                }
                static FromUtf16String(e, t = !1) {
                    return c.fromString(e, t)
                }
                static Base64Padding(e) {
                    let t = 4 - e.length % 4;
                    if (t < 4)
                        for (let r = 0; r < t; r++) e += "=";
                    return e
                }
                static formatString(e) {
                    return (null == e ? void 0 : e.replace(/[\n\r\t ]/g, "")) || ""
                }
            }
            d.DEFAULT_UTF8_ENCODING = "utf8", t._H = n, t.U$ = d, t.n4 = function(e, t) {
                if (!(e && t) || e.byteLength !== t.byteLength) return !1;
                let r = new Uint8Array(e),
                    i = new Uint8Array(t);
                for (let t = 0; t < e.byteLength; t++)
                    if (r[t] !== i[t]) return !1;
                return !0
            }
        },
        57238: function(e, t, r) {
            "use strict";
            let i;
            var n, s, o, a, l = this && this.__classPrivateFieldGet || function(e, t, r, i) {
                    if ("a" === r && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e)
                },
                u = this && this.__classPrivateFieldSet || function(e, t, r, i, n) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !n) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.custom = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.datetimeRegex = t.ZodType = void 0, t.NEVER = t.void = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t.null = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t.instanceof = t.function = t.enum = t.effect = t.discriminatedUnion = t.date = void 0;
            let c = r(63430),
                d = r(31527),
                h = r(86858),
                p = r(29067),
                f = r(260);
            class g {
                constructor(e, t, r, i) {
                    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = i
                }
                get path() {
                    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                }
            }
            let y = (e, t) => {
                if ((0, h.isValid)(t)) return {
                    success: !0,
                    data: t.value
                };
                if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
                return {
                    success: !1,
                    get error() {
                        if (this._error) return this._error;
                        let t = new f.ZodError(e.common.issues);
                        return this._error = t, this._error
                    }
                }
            };

            function m(e) {
                if (!e) return {};
                let {
                    errorMap: t,
                    invalid_type_error: r,
                    required_error: i,
                    description: n
                } = e;
                if (t && (r || i)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                return t ? {
                    errorMap: t,
                    description: n
                } : {
                    errorMap: (t, n) => {
                        var s, o;
                        let {
                            message: a
                        } = e;
                        return "invalid_enum_value" === t.code ? {
                            message: null != a ? a : n.defaultError
                        } : void 0 === n.data ? {
                            message: null !== (s = null != a ? a : i) && void 0 !== s ? s : n.defaultError
                        } : "invalid_type" !== t.code ? {
                            message: n.defaultError
                        } : {
                            message: null !== (o = null != a ? a : r) && void 0 !== o ? o : n.defaultError
                        }
                    },
                    description: n
                }
            }
            class v {
                get description() {
                    return this._def.description
                }
                _getType(e) {
                    return (0, p.getParsedType)(e.data)
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: (0, p.getParsedType)(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
                _processInputParams(e) {
                    return {
                        status: new h.ParseStatus,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: (0, p.getParsedType)(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    }
                }
                _parseSync(e) {
                    let t = this._parse(e);
                    if ((0, h.isAsync)(t)) throw Error("Synchronous parse encountered promise.");
                    return t
                }
                _parseAsync(e) {
                    return Promise.resolve(this._parse(e))
                }
                parse(e, t) {
                    let r = this.safeParse(e, t);
                    if (r.success) return r.data;
                    throw r.error
                }
                safeParse(e, t) {
                    var r;
                    let i = {
                            common: {
                                issues: [],
                                async: null !== (r = null == t ? void 0 : t.async) && void 0 !== r && r,
                                contextualErrorMap: null == t ? void 0 : t.errorMap
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: (0, p.getParsedType)(e)
                        },
                        n = this._parseSync({
                            data: e,
                            path: i.path,
                            parent: i
                        });
                    return y(i, n)
                }
                "~validate" (e) {
                    var t, r;
                    let i = {
                        common: {
                            issues: [],
                            async: !!this["~standard"].async
                        },
                        path: [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, p.getParsedType)(e)
                    };
                    if (!this["~standard"].async) try {
                        let t = this._parseSync({
                            data: e,
                            path: [],
                            parent: i
                        });
                        return (0, h.isValid)(t) ? {
                            value: t.value
                        } : {
                            issues: i.common.issues
                        }
                    } catch (e) {
                        (null === (r = null === (t = null == e ? void 0 : e.message) || void 0 === t ? void 0 : t.toLowerCase()) || void 0 === r ? void 0 : r.includes("encountered")) && (this["~standard"].async = !0), i.common = {
                            issues: [],
                            async: !0
                        }
                    }
                    return this._parseAsync({
                        data: e,
                        path: [],
                        parent: i
                    }).then(e => (0, h.isValid)(e) ? {
                        value: e.value
                    } : {
                        issues: i.common.issues
                    })
                }
                async parseAsync(e, t) {
                    let r = await this.safeParseAsync(e, t);
                    if (r.success) return r.data;
                    throw r.error
                }
                async safeParseAsync(e, t) {
                    let r = {
                            common: {
                                issues: [],
                                contextualErrorMap: null == t ? void 0 : t.errorMap,
                                async: !0
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: (0, p.getParsedType)(e)
                        },
                        i = this._parse({
                            data: e,
                            path: r.path,
                            parent: r
                        });
                    return y(r, await ((0, h.isAsync)(i) ? i : Promise.resolve(i)))
                }
                refine(e, t) {
                    let r = e => "string" == typeof t || void 0 === t ? {
                        message: t
                    } : "function" == typeof t ? t(e) : t;
                    return this._refinement((t, i) => {
                        let n = e(t),
                            s = () => i.addIssue({
                                code: f.ZodIssueCode.custom,
                                ...r(t)
                            });
                        return "undefined" != typeof Promise && n instanceof Promise ? n.then(e => !!e || (s(), !1)) : !!n || (s(), !1)
                    })
                }
                refinement(e, t) {
                    return this._refinement((r, i) => !!e(r) || (i.addIssue("function" == typeof t ? t(r, i) : t), !1))
                }
                _refinement(e) {
                    return new eh({
                        schema: this,
                        typeName: a.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    })
                }
                superRefine(e) {
                    return this._refinement(e)
                }
                constructor(e) {
                    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
                        version: 1,
                        vendor: "zod",
                        validate: e => this["~validate"](e)
                    }
                }
                optional() {
                    return ep.create(this, this._def)
                }
                nullable() {
                    return ef.create(this, this._def)
                }
                nullish() {
                    return this.nullable().optional()
                }
                array() {
                    return G.create(this)
                }
                promise() {
                    return ed.create(this, this._def)
                }
                or(e) {
                    return J.create([this, e], this._def)
                }
                and(e) {
                    return ee.create(this, e, this._def)
                }
                transform(e) {
                    return new eh({ ...m(this._def),
                        schema: this,
                        typeName: a.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    })
                }
                default (e) {
                    return new eg({ ...m(this._def),
                        innerType: this,
                        defaultValue: "function" == typeof e ? e : () => e,
                        typeName: a.ZodDefault
                    })
                }
                brand() {
                    return new ev({
                        typeName: a.ZodBranded,
                        type: this,
                        ...m(this._def)
                    })
                } catch (e) {
                    return new ey({ ...m(this._def),
                        innerType: this,
                        catchValue: "function" == typeof e ? e : () => e,
                        typeName: a.ZodCatch
                    })
                }
                describe(e) {
                    return new this.constructor({ ...this._def,
                        description: e
                    })
                }
                pipe(e) {
                    return eb.create(this, e)
                }
                readonly() {
                    return ew.create(this)
                }
                isOptional() {
                    return this.safeParse(void 0).success
                }
                isNullable() {
                    return this.safeParse(null).success
                }
            }
            t.ZodType = v, t.Schema = v, t.ZodSchema = v;
            let b = /^c[^\s-]{8,}$/i,
                w = /^[0-9a-z]+$/,
                x = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
                k = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                A = /^[a-z0-9_-]{21}$/i,
                S = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
                C = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
                I = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                B = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
                E = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
                _ = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                T = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                N = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
                O = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
                U = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
                P = RegExp(`^${U}$`);

            function Z(e) {
                let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
                return e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`), t
            }

            function L(e) {
                let t = `${U}T${Z(e)}`,
                    r = [];
                return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, RegExp(`^${t}$`)
            }
            t.datetimeRegex = L;
            class V extends v {
                _parse(e) {
                    var t, r, n, s;
                    let o;
                    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== p.ZodParsedType.string) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.string,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    let a = new h.ParseStatus;
                    for (let l of this._def.checks)
                        if ("min" === l.kind) e.data.length < l.value && (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                            code: f.ZodIssueCode.too_small,
                            minimum: l.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: l.message
                        }), a.dirty());
                        else if ("max" === l.kind) e.data.length > l.value && (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.too_big,
                        maximum: l.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: l.message
                    }), a.dirty());
                    else if ("length" === l.kind) {
                        let t = e.data.length > l.value,
                            r = e.data.length < l.value;
                        (t || r) && (o = this._getOrReturnCtx(e, o), t ? (0, h.addIssueToContext)(o, {
                            code: f.ZodIssueCode.too_big,
                            maximum: l.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: l.message
                        }) : r && (0, h.addIssueToContext)(o, {
                            code: f.ZodIssueCode.too_small,
                            minimum: l.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: l.message
                        }), a.dirty())
                    } else if ("email" === l.kind) I.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "email",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("emoji" === l.kind) i || (i = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), i.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "emoji",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("uuid" === l.kind) k.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "uuid",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("nanoid" === l.kind) A.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "nanoid",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("cuid" === l.kind) b.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "cuid",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("cuid2" === l.kind) w.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "cuid2",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("ulid" === l.kind) x.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "ulid",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty());
                    else if ("url" === l.kind) try {
                        new URL(e.data)
                    } catch (t) {
                        o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                            validation: "url",
                            code: f.ZodIssueCode.invalid_string,
                            message: l.message
                        }), a.dirty()
                    } else "regex" === l.kind ? (l.regex.lastIndex = 0, l.regex.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "regex",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty())) : "trim" === l.kind ? e.data = e.data.trim() : "includes" === l.kind ? e.data.includes(l.value, l.position) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: {
                            includes: l.value,
                            position: l.position
                        },
                        message: l.message
                    }), a.dirty()) : "toLowerCase" === l.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === l.kind ? e.data = e.data.toUpperCase() : "startsWith" === l.kind ? e.data.startsWith(l.value) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: {
                            startsWith: l.value
                        },
                        message: l.message
                    }), a.dirty()) : "endsWith" === l.kind ? e.data.endsWith(l.value) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: {
                            endsWith: l.value
                        },
                        message: l.message
                    }), a.dirty()) : "datetime" === l.kind ? L(l).test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: l.message
                    }), a.dirty()) : "date" === l.kind ? P.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: "date",
                        message: l.message
                    }), a.dirty()) : "time" === l.kind ? RegExp(`^${Z(l)}$`).test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        code: f.ZodIssueCode.invalid_string,
                        validation: "time",
                        message: l.message
                    }), a.dirty()) : "duration" === l.kind ? C.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "duration",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty()) : "ip" === l.kind ? (t = e.data, !(("v4" === (r = l.version) || !r) && B.test(t) || ("v6" === r || !r) && _.test(t)) && (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "ip",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty())) : "jwt" === l.kind ? ! function(e, t) {
                        if (!S.test(e)) return !1;
                        try {
                            let [r] = e.split("."), i = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), n = JSON.parse(atob(i));
                            if ("object" != typeof n || null === n || !n.typ || !n.alg || t && n.alg !== t) return !1;
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }(e.data, l.alg) && (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "jwt",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty()) : "cidr" === l.kind ? (n = e.data, !(("v4" === (s = l.version) || !s) && E.test(n) || ("v6" === s || !s) && T.test(n)) && (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "cidr",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty())) : "base64" === l.kind ? N.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "base64",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty()) : "base64url" === l.kind ? O.test(e.data) || (o = this._getOrReturnCtx(e, o), (0, h.addIssueToContext)(o, {
                        validation: "base64url",
                        code: f.ZodIssueCode.invalid_string,
                        message: l.message
                    }), a.dirty()) : p.util.assertNever(l);
                    return {
                        status: a.value,
                        value: e.data
                    }
                }
                _regex(e, t, r) {
                    return this.refinement(t => e.test(t), {
                        validation: t,
                        code: f.ZodIssueCode.invalid_string,
                        ...d.errorUtil.errToObj(r)
                    })
                }
                _addCheck(e) {
                    return new V({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                base64url(e) {
                    return this._addCheck({
                        kind: "base64url",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                jwt(e) {
                    return this._addCheck({
                        kind: "jwt",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                cidr(e) {
                    return this._addCheck({
                        kind: "cidr",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                datetime(e) {
                    var t, r;
                    return "string" == typeof e ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        local: !1,
                        message: e
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                        local: null !== (r = null == e ? void 0 : e.local) && void 0 !== r && r,
                        ...d.errorUtil.errToObj(null == e ? void 0 : e.message)
                    })
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    })
                }
                time(e) {
                    return "string" == typeof e ? this._addCheck({
                        kind: "time",
                        precision: null,
                        message: e
                    }) : this._addCheck({
                        kind: "time",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        ...d.errorUtil.errToObj(null == e ? void 0 : e.message)
                    })
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...d.errorUtil.errToObj(e)
                    })
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: null == t ? void 0 : t.position,
                        ...d.errorUtil.errToObj(null == t ? void 0 : t.message)
                    })
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...d.errorUtil.errToObj(t)
                    })
                }
                nonempty(e) {
                    return this.min(1, d.errorUtil.errToObj(e))
                }
                trim() {
                    return new V({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    })
                }
                toLowerCase() {
                    return new V({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toLowerCase"
                        }]
                    })
                }
                toUpperCase() {
                    return new V({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toUpperCase"
                        }]
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(e => "datetime" === e.kind)
                }
                get isDate() {
                    return !!this._def.checks.find(e => "date" === e.kind)
                }
                get isTime() {
                    return !!this._def.checks.find(e => "time" === e.kind)
                }
                get isDuration() {
                    return !!this._def.checks.find(e => "duration" === e.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(e => "email" === e.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(e => "url" === e.kind)
                }
                get isEmoji() {
                    return !!this._def.checks.find(e => "emoji" === e.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(e => "uuid" === e.kind)
                }
                get isNANOID() {
                    return !!this._def.checks.find(e => "nanoid" === e.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(e => "cuid" === e.kind)
                }
                get isCUID2() {
                    return !!this._def.checks.find(e => "cuid2" === e.kind)
                }
                get isULID() {
                    return !!this._def.checks.find(e => "ulid" === e.kind)
                }
                get isIP() {
                    return !!this._def.checks.find(e => "ip" === e.kind)
                }
                get isCIDR() {
                    return !!this._def.checks.find(e => "cidr" === e.kind)
                }
                get isBase64() {
                    return !!this._def.checks.find(e => "base64" === e.kind)
                }
                get isBase64url() {
                    return !!this._def.checks.find(e => "base64url" === e.kind)
                }
                get minLength() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxLength() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            t.ZodString = V, V.create = e => {
                var t;
                return new V({
                    checks: [],
                    typeName: a.ZodString,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...m(e)
                })
            };
            class j extends v {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== p.ZodParsedType.number) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.number,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    let r = new h.ParseStatus;
                    for (let i of this._def.checks) "int" === i.kind ? p.util.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: i.message
                    }), r.dirty()) : "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_small,
                        minimum: i.value,
                        type: "number",
                        inclusive: i.inclusive,
                        exact: !1,
                        message: i.message
                    }), r.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_big,
                        maximum: i.value,
                        type: "number",
                        inclusive: i.inclusive,
                        exact: !1,
                        message: i.message
                    }), r.dirty()) : "multipleOf" === i.kind ? 0 !== function(e, t) {
                        let r = (e.toString().split(".")[1] || "").length,
                            i = (t.toString().split(".")[1] || "").length,
                            n = r > i ? r : i;
                        return parseInt(e.toFixed(n).replace(".", "")) % parseInt(t.toFixed(n).replace(".", "")) / Math.pow(10, n)
                    }(e.data, i.value) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.not_multiple_of,
                        multipleOf: i.value,
                        message: i.message
                    }), r.dirty()) : "finite" === i.kind ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.not_finite,
                        message: i.message
                    }), r.dirty()) : p.util.assertNever(i);
                    return {
                        status: r.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, d.errorUtil.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, d.errorUtil.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, d.errorUtil.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, d.errorUtil.toString(t))
                }
                setLimit(e, t, r, i) {
                    return new j({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: r,
                            message: d.errorUtil.toString(i)
                        }]
                    })
                }
                _addCheck(e) {
                    return new j({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: d.errorUtil.toString(e)
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: d.errorUtil.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: d.errorUtil.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: d.errorUtil.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: d.errorUtil.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: d.errorUtil.toString(t)
                    })
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: d.errorUtil.toString(e)
                    })
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: !0,
                        value: Number.MIN_SAFE_INTEGER,
                        message: d.errorUtil.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: !0,
                        value: Number.MAX_SAFE_INTEGER,
                        message: d.errorUtil.toString(e)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
                get isInt() {
                    return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && p.util.isInteger(e.value))
                }
                get isFinite() {
                    let e = null,
                        t = null;
                    for (let r of this._def.checks) {
                        if ("finite" === r.kind || "int" === r.kind || "multipleOf" === r.kind) return !0;
                        "min" === r.kind ? (null === t || r.value > t) && (t = r.value) : "max" === r.kind && (null === e || r.value < e) && (e = r.value)
                    }
                    return Number.isFinite(t) && Number.isFinite(e)
                }
            }
            t.ZodNumber = j, j.create = e => new j({
                checks: [],
                typeName: a.ZodNumber,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...m(e)
            });
            class R extends v {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce) try {
                        e.data = BigInt(e.data)
                    } catch (t) {
                        return this._getInvalidInput(e)
                    }
                    if (this._getType(e) !== p.ZodParsedType.bigint) return this._getInvalidInput(e);
                    let r = new h.ParseStatus;
                    for (let i of this._def.checks) "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: i.value,
                        inclusive: i.inclusive,
                        message: i.message
                    }), r.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: i.value,
                        inclusive: i.inclusive,
                        message: i.message
                    }), r.dirty()) : "multipleOf" === i.kind ? e.data % i.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.not_multiple_of,
                        multipleOf: i.value,
                        message: i.message
                    }), r.dirty()) : p.util.assertNever(i);
                    return {
                        status: r.value,
                        value: e.data
                    }
                }
                _getInvalidInput(e) {
                    let t = this._getOrReturnCtx(e);
                    return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.bigint,
                        received: t.parsedType
                    }), h.INVALID
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, d.errorUtil.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, d.errorUtil.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, d.errorUtil.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, d.errorUtil.toString(t))
                }
                setLimit(e, t, r, i) {
                    return new R({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: r,
                            message: d.errorUtil.toString(i)
                        }]
                    })
                }
                _addCheck(e) {
                    return new R({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !1,
                        message: d.errorUtil.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !1,
                        message: d.errorUtil.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !0,
                        message: d.errorUtil.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !0,
                        message: d.errorUtil.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: d.errorUtil.toString(t)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            t.ZodBigInt = R, R.create = e => {
                var t;
                return new R({
                    checks: [],
                    typeName: a.ZodBigInt,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...m(e)
                })
            };
            class D extends v {
                _parse(e) {
                    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== p.ZodParsedType.boolean) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.boolean,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodBoolean = D, D.create = e => new D({
                typeName: a.ZodBoolean,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...m(e)
            });
            class $ extends v {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== p.ZodParsedType.date) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.date,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    if (isNaN(e.data.getTime())) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_date
                        }), h.INVALID
                    }
                    let r = new h.ParseStatus;
                    for (let i of this._def.checks) "min" === i.kind ? e.data.getTime() < i.value && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_small,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: i.value,
                        type: "date"
                    }), r.dirty()) : "max" === i.kind ? e.data.getTime() > i.value && (t = this._getOrReturnCtx(e, t), (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.too_big,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: i.value,
                        type: "date"
                    }), r.dirty()) : p.util.assertNever(i);
                    return {
                        status: r.value,
                        value: new Date(e.data.getTime())
                    }
                }
                _addCheck(e) {
                    return new $({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: d.errorUtil.toString(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: d.errorUtil.toString(t)
                    })
                }
                get minDate() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
                get maxDate() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
            }
            t.ZodDate = $, $.create = e => new $({
                checks: [],
                coerce: (null == e ? void 0 : e.coerce) || !1,
                typeName: a.ZodDate,
                ...m(e)
            });
            class H extends v {
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.symbol) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.symbol,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodSymbol = H, H.create = e => new H({
                typeName: a.ZodSymbol,
                ...m(e)
            });
            class M extends v {
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.undefined,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodUndefined = M, M.create = e => new M({
                typeName: a.ZodUndefined,
                ...m(e)
            });
            class F extends v {
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.null) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.null,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodNull = F, F.create = e => new F({
                typeName: a.ZodNull,
                ...m(e)
            });
            class z extends v {
                constructor() {
                    super(...arguments), this._any = !0
                }
                _parse(e) {
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodAny = z, z.create = e => new z({
                typeName: a.ZodAny,
                ...m(e)
            });
            class W extends v {
                constructor() {
                    super(...arguments), this._unknown = !0
                }
                _parse(e) {
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodUnknown = W, W.create = e => new W({
                typeName: a.ZodUnknown,
                ...m(e)
            });
            class q extends v {
                _parse(e) {
                    let t = this._getOrReturnCtx(e);
                    return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.never,
                        received: t.parsedType
                    }), h.INVALID
                }
            }
            t.ZodNever = q, q.create = e => new q({
                typeName: a.ZodNever,
                ...m(e)
            });
            class K extends v {
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.void,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
            }
            t.ZodVoid = K, K.create = e => new K({
                typeName: a.ZodVoid,
                ...m(e)
            });
            class G extends v {
                _parse(e) {
                    let {
                        ctx: t,
                        status: r
                    } = this._processInputParams(e), i = this._def;
                    if (t.parsedType !== p.ZodParsedType.array) return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.array,
                        received: t.parsedType
                    }), h.INVALID;
                    if (null !== i.exactLength) {
                        let e = t.data.length > i.exactLength.value,
                            n = t.data.length < i.exactLength.value;
                        (e || n) && ((0, h.addIssueToContext)(t, {
                            code: e ? f.ZodIssueCode.too_big : f.ZodIssueCode.too_small,
                            minimum: n ? i.exactLength.value : void 0,
                            maximum: e ? i.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: i.exactLength.message
                        }), r.dirty())
                    }
                    if (null !== i.minLength && t.data.length < i.minLength.value && ((0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.too_small,
                            minimum: i.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: i.minLength.message
                        }), r.dirty()), null !== i.maxLength && t.data.length > i.maxLength.value && ((0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.too_big,
                            maximum: i.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: i.maxLength.message
                        }), r.dirty()), t.common.async) return Promise.all([...t.data].map((e, r) => i.type._parseAsync(new g(t, e, t.path, r)))).then(e => h.ParseStatus.mergeArray(r, e));
                    let n = [...t.data].map((e, r) => i.type._parseSync(new g(t, e, t.path, r)));
                    return h.ParseStatus.mergeArray(r, n)
                }
                get element() {
                    return this._def.type
                }
                min(e, t) {
                    return new G({ ...this._def,
                        minLength: {
                            value: e,
                            message: d.errorUtil.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new G({ ...this._def,
                        maxLength: {
                            value: e,
                            message: d.errorUtil.toString(t)
                        }
                    })
                }
                length(e, t) {
                    return new G({ ...this._def,
                        exactLength: {
                            value: e,
                            message: d.errorUtil.toString(t)
                        }
                    })
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            t.ZodArray = G, G.create = (e, t) => new G({
                type: e,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: a.ZodArray,
                ...m(t)
            });
            class Y extends v {
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                }
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let e = this._def.shape(),
                        t = p.util.objectKeys(e);
                    return this._cached = {
                        shape: e,
                        keys: t
                    }
                }
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.object) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.object,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), {
                        shape: i,
                        keys: n
                    } = this._getCached(), s = [];
                    if (!(this._def.catchall instanceof q && "strip" === this._def.unknownKeys))
                        for (let e in r.data) n.includes(e) || s.push(e);
                    let o = [];
                    for (let e of n) {
                        let t = i[e],
                            n = r.data[e];
                        o.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new g(r, n, r.path, e)),
                            alwaysSet: e in r.data
                        })
                    }
                    if (this._def.catchall instanceof q) {
                        let e = this._def.unknownKeys;
                        if ("passthrough" === e)
                            for (let e of s) o.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: r.data[e]
                                }
                            });
                        else if ("strict" === e) s.length > 0 && ((0, h.addIssueToContext)(r, {
                            code: f.ZodIssueCode.unrecognized_keys,
                            keys: s
                        }), t.dirty());
                        else if ("strip" === e);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let e = this._def.catchall;
                        for (let t of s) {
                            let i = r.data[t];
                            o.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new g(r, i, r.path, t)),
                                alwaysSet: t in r.data
                            })
                        }
                    }
                    return r.common.async ? Promise.resolve().then(async () => {
                        let e = [];
                        for (let t of o) {
                            let r = await t.key,
                                i = await t.value;
                            e.push({
                                key: r,
                                value: i,
                                alwaysSet: t.alwaysSet
                            })
                        }
                        return e
                    }).then(e => h.ParseStatus.mergeObjectSync(t, e)) : h.ParseStatus.mergeObjectSync(t, o)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(e) {
                    return d.errorUtil.errToObj, new Y({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== e ? {
                            errorMap: (t, r) => {
                                var i, n, s, o;
                                let a = null !== (s = null === (n = (i = this._def).errorMap) || void 0 === n ? void 0 : n.call(i, t, r).message) && void 0 !== s ? s : r.defaultError;
                                return "unrecognized_keys" === t.code ? {
                                    message: null !== (o = d.errorUtil.errToObj(e).message) && void 0 !== o ? o : a
                                } : {
                                    message: a
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new Y({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new Y({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                extend(e) {
                    return new Y({ ...this._def,
                        shape: () => ({ ...this._def.shape(),
                            ...e
                        })
                    })
                }
                merge(e) {
                    return new Y({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: () => ({ ...this._def.shape(),
                            ...e._def.shape()
                        }),
                        typeName: a.ZodObject
                    })
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    })
                }
                catchall(e) {
                    return new Y({ ...this._def,
                        catchall: e
                    })
                }
                pick(e) {
                    let t = {};
                    return p.util.objectKeys(e).forEach(r => {
                        e[r] && this.shape[r] && (t[r] = this.shape[r])
                    }), new Y({ ...this._def,
                        shape: () => t
                    })
                }
                omit(e) {
                    let t = {};
                    return p.util.objectKeys(this.shape).forEach(r => {
                        e[r] || (t[r] = this.shape[r])
                    }), new Y({ ...this._def,
                        shape: () => t
                    })
                }
                deepPartial() {
                    return function e(t) {
                        if (t instanceof Y) {
                            let r = {};
                            for (let i in t.shape) {
                                let n = t.shape[i];
                                r[i] = ep.create(e(n))
                            }
                            return new Y({ ...t._def,
                                shape: () => r
                            })
                        }
                        if (t instanceof G) return new G({ ...t._def,
                            type: e(t.element)
                        });
                        if (t instanceof ep) return ep.create(e(t.unwrap()));
                        if (t instanceof ef) return ef.create(e(t.unwrap()));
                        if (t instanceof et) return et.create(t.items.map(t => e(t)));
                        else return t
                    }(this)
                }
                partial(e) {
                    let t = {};
                    return p.util.objectKeys(this.shape).forEach(r => {
                        let i = this.shape[r];
                        e && !e[r] ? t[r] = i : t[r] = i.optional()
                    }), new Y({ ...this._def,
                        shape: () => t
                    })
                }
                required(e) {
                    let t = {};
                    return p.util.objectKeys(this.shape).forEach(r => {
                        if (e && !e[r]) t[r] = this.shape[r];
                        else {
                            let e = this.shape[r];
                            for (; e instanceof ep;) e = e._def.innerType;
                            t[r] = e
                        }
                    }), new Y({ ...this._def,
                        shape: () => t
                    })
                }
                keyof() {
                    return el(p.util.objectKeys(this.shape))
                }
            }
            t.ZodObject = Y, Y.create = (e, t) => new Y({
                shape: () => e,
                unknownKeys: "strip",
                catchall: q.create(),
                typeName: a.ZodObject,
                ...m(t)
            }), Y.strictCreate = (e, t) => new Y({
                shape: () => e,
                unknownKeys: "strict",
                catchall: q.create(),
                typeName: a.ZodObject,
                ...m(t)
            }), Y.lazycreate = (e, t) => new Y({
                shape: e,
                unknownKeys: "strip",
                catchall: q.create(),
                typeName: a.ZodObject,
                ...m(t)
            });
            class J extends v {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = this._def.options;
                    if (t.common.async) return Promise.all(r.map(async e => {
                        let r = { ...t,
                            common: { ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: r
                            }),
                            ctx: r
                        }
                    })).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status) return t.result;
                        for (let r of e)
                            if ("dirty" === r.result.status) return t.common.issues.push(...r.ctx.common.issues), r.result;
                        let r = e.map(e => new f.ZodError(e.ctx.common.issues));
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_union,
                            unionErrors: r
                        }), h.INVALID
                    }); {
                        let e;
                        let i = [];
                        for (let n of r) {
                            let r = { ...t,
                                    common: { ...t.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                s = n._parseSync({
                                    data: t.data,
                                    path: t.path,
                                    parent: r
                                });
                            if ("valid" === s.status) return s;
                            "dirty" !== s.status || e || (e = {
                                result: s,
                                ctx: r
                            }), r.common.issues.length && i.push(r.common.issues)
                        }
                        if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                        let n = i.map(e => new f.ZodError(e));
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_union,
                            unionErrors: n
                        }), h.INVALID
                    }
                }
                get options() {
                    return this._def.options
                }
            }
            t.ZodUnion = J, J.create = (e, t) => new J({
                options: e,
                typeName: a.ZodUnion,
                ...m(t)
            });
            let Q = e => {
                if (e instanceof eo) return Q(e.schema);
                if (e instanceof eh) return Q(e.innerType());
                if (e instanceof ea) return [e.value];
                if (e instanceof eu) return e.options;
                if (e instanceof ec) return p.util.objectValues(e.enum);
                else if (e instanceof eg) return Q(e._def.innerType);
                else if (e instanceof M) return [void 0];
                else if (e instanceof F) return [null];
                else if (e instanceof ep) return [void 0, ...Q(e.unwrap())];
                else if (e instanceof ef) return [null, ...Q(e.unwrap())];
                else if (e instanceof ev) return Q(e.unwrap());
                else if (e instanceof ew) return Q(e.unwrap());
                else if (e instanceof ey) return Q(e._def.innerType);
                else return []
            };
            class X extends v {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== p.ZodParsedType.object) return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.object,
                        received: t.parsedType
                    }), h.INVALID;
                    let r = this.discriminator,
                        i = t.data[r],
                        n = this.optionsMap.get(i);
                    return n ? t.common.async ? n._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : n._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : ((0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_union_discriminator,
                        options: Array.from(this.optionsMap.keys()),
                        path: [r]
                    }), h.INVALID)
                }
                get discriminator() {
                    return this._def.discriminator
                }
                get options() {
                    return this._def.options
                }
                get optionsMap() {
                    return this._def.optionsMap
                }
                static create(e, t, r) {
                    let i = new Map;
                    for (let r of t) {
                        let t = Q(r.shape[e]);
                        if (!t.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        for (let n of t) {
                            if (i.has(n)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);
                            i.set(n, r)
                        }
                    }
                    return new X({
                        typeName: a.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: i,
                        ...m(r)
                    })
                }
            }
            t.ZodDiscriminatedUnion = X;
            class ee extends v {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), i = (e, i) => {
                        if ((0, h.isAborted)(e) || (0, h.isAborted)(i)) return h.INVALID;
                        let n = function e(t, r) {
                            let i = (0, p.getParsedType)(t),
                                n = (0, p.getParsedType)(r);
                            if (t === r) return {
                                valid: !0,
                                data: t
                            };
                            if (i === p.ZodParsedType.object && n === p.ZodParsedType.object) {
                                let i = p.util.objectKeys(r),
                                    n = p.util.objectKeys(t).filter(e => -1 !== i.indexOf(e)),
                                    s = { ...t,
                                        ...r
                                    };
                                for (let i of n) {
                                    let n = e(t[i], r[i]);
                                    if (!n.valid) return {
                                        valid: !1
                                    };
                                    s[i] = n.data
                                }
                                return {
                                    valid: !0,
                                    data: s
                                }
                            }
                            if (i === p.ZodParsedType.array && n === p.ZodParsedType.array) {
                                if (t.length !== r.length) return {
                                    valid: !1
                                };
                                let i = [];
                                for (let n = 0; n < t.length; n++) {
                                    let s = e(t[n], r[n]);
                                    if (!s.valid) return {
                                        valid: !1
                                    };
                                    i.push(s.data)
                                }
                                return {
                                    valid: !0,
                                    data: i
                                }
                            }
                            if (i === p.ZodParsedType.date && n === p.ZodParsedType.date && +t == +r) return {
                                valid: !0,
                                data: t
                            };
                            return {
                                valid: !1
                            }
                        }(e.value, i.value);
                        return n.valid ? (((0, h.isDirty)(e) || (0, h.isDirty)(i)) && t.dirty(), {
                            status: t.value,
                            value: n.data
                        }) : ((0, h.addIssueToContext)(r, {
                            code: f.ZodIssueCode.invalid_intersection_types
                        }), h.INVALID)
                    };
                    return r.common.async ? Promise.all([this._def.left._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }), this._def.right._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    })]).then(([e, t]) => i(e, t)) : i(this._def.left._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }), this._def.right._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }))
                }
            }
            t.ZodIntersection = ee, ee.create = (e, t, r) => new ee({
                left: e,
                right: t,
                typeName: a.ZodIntersection,
                ...m(r)
            });
            class et extends v {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== p.ZodParsedType.array) return (0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.array,
                        received: r.parsedType
                    }), h.INVALID;
                    if (r.data.length < this._def.items.length) return (0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), h.INVALID;
                    !this._def.rest && r.data.length > this._def.items.length && ((0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), t.dirty());
                    let i = [...r.data].map((e, t) => {
                        let i = this._def.items[t] || this._def.rest;
                        return i ? i._parse(new g(r, e, r.path, t)) : null
                    }).filter(e => !!e);
                    return r.common.async ? Promise.all(i).then(e => h.ParseStatus.mergeArray(t, e)) : h.ParseStatus.mergeArray(t, i)
                }
                get items() {
                    return this._def.items
                }
                rest(e) {
                    return new et({ ...this._def,
                        rest: e
                    })
                }
            }
            t.ZodTuple = et, et.create = (e, t) => {
                if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new et({
                    items: e,
                    typeName: a.ZodTuple,
                    rest: null,
                    ...m(t)
                })
            };
            class er extends v {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== p.ZodParsedType.object) return (0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.object,
                        received: r.parsedType
                    }), h.INVALID;
                    let i = [],
                        n = this._def.keyType,
                        s = this._def.valueType;
                    for (let e in r.data) i.push({
                        key: n._parse(new g(r, e, r.path, e)),
                        value: s._parse(new g(r, r.data[e], r.path, e)),
                        alwaysSet: e in r.data
                    });
                    return r.common.async ? h.ParseStatus.mergeObjectAsync(t, i) : h.ParseStatus.mergeObjectSync(t, i)
                }
                get element() {
                    return this._def.valueType
                }
                static create(e, t, r) {
                    return new er(t instanceof v ? {
                        keyType: e,
                        valueType: t,
                        typeName: a.ZodRecord,
                        ...m(r)
                    } : {
                        keyType: V.create(),
                        valueType: e,
                        typeName: a.ZodRecord,
                        ...m(t)
                    })
                }
            }
            t.ZodRecord = er;
            class ei extends v {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== p.ZodParsedType.map) return (0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.map,
                        received: r.parsedType
                    }), h.INVALID;
                    let i = this._def.keyType,
                        n = this._def.valueType,
                        s = [...r.data.entries()].map(([e, t], s) => ({
                            key: i._parse(new g(r, e, r.path, [s, "key"])),
                            value: n._parse(new g(r, t, r.path, [s, "value"]))
                        }));
                    if (r.common.async) {
                        let e = new Map;
                        return Promise.resolve().then(async () => {
                            for (let r of s) {
                                let i = await r.key,
                                    n = await r.value;
                                if ("aborted" === i.status || "aborted" === n.status) return h.INVALID;
                                ("dirty" === i.status || "dirty" === n.status) && t.dirty(), e.set(i.value, n.value)
                            }
                            return {
                                status: t.value,
                                value: e
                            }
                        })
                    } {
                        let e = new Map;
                        for (let r of s) {
                            let i = r.key,
                                n = r.value;
                            if ("aborted" === i.status || "aborted" === n.status) return h.INVALID;
                            ("dirty" === i.status || "dirty" === n.status) && t.dirty(), e.set(i.value, n.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                }
            }
            t.ZodMap = ei, ei.create = (e, t, r) => new ei({
                valueType: t,
                keyType: e,
                typeName: a.ZodMap,
                ...m(r)
            });
            class en extends v {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== p.ZodParsedType.set) return (0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.set,
                        received: r.parsedType
                    }), h.INVALID;
                    let i = this._def;
                    null !== i.minSize && r.data.size < i.minSize.value && ((0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.too_small,
                        minimum: i.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: i.minSize.message
                    }), t.dirty()), null !== i.maxSize && r.data.size > i.maxSize.value && ((0, h.addIssueToContext)(r, {
                        code: f.ZodIssueCode.too_big,
                        maximum: i.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: i.maxSize.message
                    }), t.dirty());
                    let n = this._def.valueType;

                    function s(e) {
                        let r = new Set;
                        for (let i of e) {
                            if ("aborted" === i.status) return h.INVALID;
                            "dirty" === i.status && t.dirty(), r.add(i.value)
                        }
                        return {
                            status: t.value,
                            value: r
                        }
                    }
                    let o = [...r.data.values()].map((e, t) => n._parse(new g(r, e, r.path, t)));
                    return r.common.async ? Promise.all(o).then(e => s(e)) : s(o)
                }
                min(e, t) {
                    return new en({ ...this._def,
                        minSize: {
                            value: e,
                            message: d.errorUtil.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new en({ ...this._def,
                        maxSize: {
                            value: e,
                            message: d.errorUtil.toString(t)
                        }
                    })
                }
                size(e, t) {
                    return this.min(e, t).max(e, t)
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            t.ZodSet = en, en.create = (e, t) => new en({
                valueType: e,
                minSize: null,
                maxSize: null,
                typeName: a.ZodSet,
                ...m(t)
            });
            class es extends v {
                constructor() {
                    super(...arguments), this.validate = this.implement
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== p.ZodParsedType.function) return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.function,
                        received: t.parsedType
                    }), h.INVALID;

                    function r(e, r) {
                        return (0, h.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, (0, c.getErrorMap)(), c.defaultErrorMap].filter(e => !!e),
                            issueData: {
                                code: f.ZodIssueCode.invalid_arguments,
                                argumentsError: r
                            }
                        })
                    }

                    function i(e, r) {
                        return (0, h.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, (0, c.getErrorMap)(), c.defaultErrorMap].filter(e => !!e),
                            issueData: {
                                code: f.ZodIssueCode.invalid_return_type,
                                returnTypeError: r
                            }
                        })
                    }
                    let n = {
                            errorMap: t.common.contextualErrorMap
                        },
                        s = t.data;
                    if (this._def.returns instanceof ed) {
                        let e = this;
                        return (0, h.OK)(async function(...t) {
                            let o = new f.ZodError([]),
                                a = await e._def.args.parseAsync(t, n).catch(e => {
                                    throw o.addIssue(r(t, e)), o
                                }),
                                l = await Reflect.apply(s, this, a);
                            return await e._def.returns._def.type.parseAsync(l, n).catch(e => {
                                throw o.addIssue(i(l, e)), o
                            })
                        })
                    } {
                        let e = this;
                        return (0, h.OK)(function(...t) {
                            let o = e._def.args.safeParse(t, n);
                            if (!o.success) throw new f.ZodError([r(t, o.error)]);
                            let a = Reflect.apply(s, this, o.data),
                                l = e._def.returns.safeParse(a, n);
                            if (!l.success) throw new f.ZodError([i(a, l.error)]);
                            return l.data
                        })
                    }
                }
                parameters() {
                    return this._def.args
                }
                returnType() {
                    return this._def.returns
                }
                args(...e) {
                    return new es({ ...this._def,
                        args: et.create(e).rest(W.create())
                    })
                }
                returns(e) {
                    return new es({ ...this._def,
                        returns: e
                    })
                }
                implement(e) {
                    return this.parse(e)
                }
                strictImplement(e) {
                    return this.parse(e)
                }
                static create(e, t, r) {
                    return new es({
                        args: e || et.create([]).rest(W.create()),
                        returns: t || W.create(),
                        typeName: a.ZodFunction,
                        ...m(r)
                    })
                }
            }
            t.ZodFunction = es;
            class eo extends v {
                get schema() {
                    return this._def.getter()
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return this._def.getter()._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    })
                }
            }
            t.ZodLazy = eo, eo.create = (e, t) => new eo({
                getter: e,
                typeName: a.ZodLazy,
                ...m(t)
            });
            class ea extends v {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            received: t.data,
                            code: f.ZodIssueCode.invalid_literal,
                            expected: this._def.value
                        }), h.INVALID
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
                get value() {
                    return this._def.value
                }
            }

            function el(e, t) {
                return new eu({
                    values: e,
                    typeName: a.ZodEnum,
                    ...m(t)
                })
            }
            t.ZodLiteral = ea, ea.create = (e, t) => new ea({
                value: e,
                typeName: a.ZodLiteral,
                ...m(t)
            });
            class eu extends v {
                constructor() {
                    super(...arguments), s.set(this, void 0)
                }
                _parse(e) {
                    if ("string" != typeof e.data) {
                        let t = this._getOrReturnCtx(e),
                            r = this._def.values;
                        return (0, h.addIssueToContext)(t, {
                            expected: p.util.joinValues(r),
                            received: t.parsedType,
                            code: f.ZodIssueCode.invalid_type
                        }), h.INVALID
                    }
                    if (l(this, s, "f") || u(this, s, new Set(this._def.values), "f"), !l(this, s, "f").has(e.data)) {
                        let t = this._getOrReturnCtx(e),
                            r = this._def.values;
                        return (0, h.addIssueToContext)(t, {
                            received: t.data,
                            code: f.ZodIssueCode.invalid_enum_value,
                            options: r
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Values() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                extract(e, t = this._def) {
                    return eu.create(e, { ...this._def,
                        ...t
                    })
                }
                exclude(e, t = this._def) {
                    return eu.create(this.options.filter(t => !e.includes(t)), { ...this._def,
                        ...t
                    })
                }
            }
            t.ZodEnum = eu, s = new WeakMap, eu.create = el;
            class ec extends v {
                constructor() {
                    super(...arguments), o.set(this, void 0)
                }
                _parse(e) {
                    let t = p.util.getValidEnumValues(this._def.values),
                        r = this._getOrReturnCtx(e);
                    if (r.parsedType !== p.ZodParsedType.string && r.parsedType !== p.ZodParsedType.number) {
                        let e = p.util.objectValues(t);
                        return (0, h.addIssueToContext)(r, {
                            expected: p.util.joinValues(e),
                            received: r.parsedType,
                            code: f.ZodIssueCode.invalid_type
                        }), h.INVALID
                    }
                    if (l(this, o, "f") || u(this, o, new Set(p.util.getValidEnumValues(this._def.values)), "f"), !l(this, o, "f").has(e.data)) {
                        let e = p.util.objectValues(t);
                        return (0, h.addIssueToContext)(r, {
                            received: r.data,
                            code: f.ZodIssueCode.invalid_enum_value,
                            options: e
                        }), h.INVALID
                    }
                    return (0, h.OK)(e.data)
                }
                get enum() {
                    return this._def.values
                }
            }
            t.ZodNativeEnum = ec, o = new WeakMap, ec.create = (e, t) => new ec({
                values: e,
                typeName: a.ZodNativeEnum,
                ...m(t)
            });
            class ed extends v {
                unwrap() {
                    return this._def.type
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== p.ZodParsedType.promise && !1 === t.common.async) return (0, h.addIssueToContext)(t, {
                        code: f.ZodIssueCode.invalid_type,
                        expected: p.ZodParsedType.promise,
                        received: t.parsedType
                    }), h.INVALID;
                    let r = t.parsedType === p.ZodParsedType.promise ? t.data : Promise.resolve(t.data);
                    return (0, h.OK)(r.then(e => this._def.type.parseAsync(e, {
                        path: t.path,
                        errorMap: t.common.contextualErrorMap
                    })))
                }
            }
            t.ZodPromise = ed, ed.create = (e, t) => new ed({
                type: e,
                typeName: a.ZodPromise,
                ...m(t)
            });
            class eh extends v {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === a.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), i = this._def.effect || null, n = {
                        addIssue: e => {
                            (0, h.addIssueToContext)(r, e), e.fatal ? t.abort() : t.dirty()
                        },
                        get path() {
                            return r.path
                        }
                    };
                    if (n.addIssue = n.addIssue.bind(n), "preprocess" === i.type) {
                        let e = i.transform(r.data, n);
                        if (r.common.async) return Promise.resolve(e).then(async e => {
                            if ("aborted" === t.value) return h.INVALID;
                            let i = await this._def.schema._parseAsync({
                                data: e,
                                path: r.path,
                                parent: r
                            });
                            return "aborted" === i.status ? h.INVALID : "dirty" === i.status || "dirty" === t.value ? (0, h.DIRTY)(i.value) : i
                        }); {
                            if ("aborted" === t.value) return h.INVALID;
                            let i = this._def.schema._parseSync({
                                data: e,
                                path: r.path,
                                parent: r
                            });
                            return "aborted" === i.status ? h.INVALID : "dirty" === i.status || "dirty" === t.value ? (0, h.DIRTY)(i.value) : i
                        }
                    }
                    if ("refinement" === i.type) {
                        let e = e => {
                            let t = i.refinement(e, n);
                            if (r.common.async) return Promise.resolve(t);
                            if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return e
                        };
                        if (!1 !== r.common.async) return this._def.schema._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }).then(r => "aborted" === r.status ? h.INVALID : ("dirty" === r.status && t.dirty(), e(r.value).then(() => ({
                            status: t.value,
                            value: r.value
                        })))); {
                            let i = this._def.schema._parseSync({
                                data: r.data,
                                path: r.path,
                                parent: r
                            });
                            return "aborted" === i.status ? h.INVALID : ("dirty" === i.status && t.dirty(), e(i.value), {
                                status: t.value,
                                value: i.value
                            })
                        }
                    }
                    if ("transform" === i.type) {
                        if (!1 !== r.common.async) return this._def.schema._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }).then(e => (0, h.isValid)(e) ? Promise.resolve(i.transform(e.value, n)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e); {
                            let e = this._def.schema._parseSync({
                                data: r.data,
                                path: r.path,
                                parent: r
                            });
                            if (!(0, h.isValid)(e)) return e;
                            let s = i.transform(e.value, n);
                            if (s instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: t.value,
                                value: s
                            }
                        }
                    }
                    p.util.assertNever(i)
                }
            }
            t.ZodEffects = eh, t.ZodTransformer = eh, eh.create = (e, t, r) => new eh({
                schema: e,
                typeName: a.ZodEffects,
                effect: t,
                ...m(r)
            }), eh.createWithPreprocess = (e, t, r) => new eh({
                schema: t,
                effect: {
                    type: "preprocess",
                    transform: e
                },
                typeName: a.ZodEffects,
                ...m(r)
            });
            class ep extends v {
                _parse(e) {
                    return this._getType(e) === p.ZodParsedType.undefined ? (0, h.OK)(void 0) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            t.ZodOptional = ep, ep.create = (e, t) => new ep({
                innerType: e,
                typeName: a.ZodOptional,
                ...m(t)
            });
            class ef extends v {
                _parse(e) {
                    return this._getType(e) === p.ZodParsedType.null ? (0, h.OK)(null) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            t.ZodNullable = ef, ef.create = (e, t) => new ef({
                innerType: e,
                typeName: a.ZodNullable,
                ...m(t)
            });
            class eg extends v {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = t.data;
                    return t.parsedType === p.ZodParsedType.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
                        data: r,
                        path: t.path,
                        parent: t
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            t.ZodDefault = eg, eg.create = (e, t) => new eg({
                innerType: e,
                typeName: a.ZodDefault,
                defaultValue: "function" == typeof t.default ? t.default : () => t.default,
                ...m(t)
            });
            class ey extends v {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = { ...t,
                        common: { ...t.common,
                            issues: []
                        }
                    }, i = this._def.innerType._parse({
                        data: r.data,
                        path: r.path,
                        parent: { ...r
                        }
                    });
                    return (0, h.isAsync)(i) ? i.then(e => ({
                        status: "valid",
                        value: "valid" === e.status ? e.value : this._def.catchValue({
                            get error() {
                                return new f.ZodError(r.common.issues)
                            },
                            input: r.data
                        })
                    })) : {
                        status: "valid",
                        value: "valid" === i.status ? i.value : this._def.catchValue({
                            get error() {
                                return new f.ZodError(r.common.issues)
                            },
                            input: r.data
                        })
                    }
                }
                removeCatch() {
                    return this._def.innerType
                }
            }
            t.ZodCatch = ey, ey.create = (e, t) => new ey({
                innerType: e,
                typeName: a.ZodCatch,
                catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
                ...m(t)
            });
            class em extends v {
                _parse(e) {
                    if (this._getType(e) !== p.ZodParsedType.nan) {
                        let t = this._getOrReturnCtx(e);
                        return (0, h.addIssueToContext)(t, {
                            code: f.ZodIssueCode.invalid_type,
                            expected: p.ZodParsedType.nan,
                            received: t.parsedType
                        }), h.INVALID
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
            }
            t.ZodNaN = em, em.create = e => new em({
                typeName: a.ZodNaN,
                ...m(e)
            }), t.BRAND = Symbol("zod_brand");
            class ev extends v {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = t.data;
                    return this._def.type._parse({
                        data: r,
                        path: t.path,
                        parent: t
                    })
                }
                unwrap() {
                    return this._def.type
                }
            }
            t.ZodBranded = ev;
            class eb extends v {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.common.async) return (async () => {
                        let e = await this._def.in._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        });
                        return "aborted" === e.status ? h.INVALID : "dirty" === e.status ? (t.dirty(), (0, h.DIRTY)(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: r.path,
                            parent: r
                        })
                    })(); {
                        let e = this._def.in._parseSync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        });
                        return "aborted" === e.status ? h.INVALID : "dirty" === e.status ? (t.dirty(), {
                            status: "dirty",
                            value: e.value
                        }) : this._def.out._parseSync({
                            data: e.value,
                            path: r.path,
                            parent: r
                        })
                    }
                }
                static create(e, t) {
                    return new eb({ in: e,
                        out: t,
                        typeName: a.ZodPipeline
                    })
                }
            }
            t.ZodPipeline = eb;
            class ew extends v {
                _parse(e) {
                    let t = this._def.innerType._parse(e),
                        r = e => ((0, h.isValid)(e) && (e.value = Object.freeze(e.value)), e);
                    return (0, h.isAsync)(t) ? t.then(e => r(e)) : r(t)
                }
                unwrap() {
                    return this._def.innerType
                }
            }

            function ex(e, t) {
                let r = "function" == typeof e ? e(t) : "string" == typeof e ? {
                    message: e
                } : e;
                return "string" == typeof r ? {
                    message: r
                } : r
            }

            function ek(e, t = {}, r) {
                return e ? z.create().superRefine((i, n) => {
                    var s, o;
                    let a = e(i);
                    if (a instanceof Promise) return a.then(e => {
                        var s, o;
                        if (!e) {
                            let e = ex(t, i),
                                a = null === (o = null !== (s = e.fatal) && void 0 !== s ? s : r) || void 0 === o || o;
                            n.addIssue({
                                code: "custom",
                                ...e,
                                fatal: a
                            })
                        }
                    });
                    if (!a) {
                        let e = ex(t, i),
                            a = null === (o = null !== (s = e.fatal) && void 0 !== s ? s : r) || void 0 === o || o;
                        n.addIssue({
                            code: "custom",
                            ...e,
                            fatal: a
                        })
                    }
                }) : z.create()
            }
            t.ZodReadonly = ew, ew.create = (e, t) => new ew({
                innerType: e,
                typeName: a.ZodReadonly,
                ...m(t)
            }), t.custom = ek, t.late = {
                object: Y.lazycreate
            }, (n = a || (t.ZodFirstPartyTypeKind = a = {})).ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly", t.instanceof = (e, t = {
                message: `Input not instance of ${e.name}`
            }) => ek(t => t instanceof e, t);
            let eA = V.create;
            t.string = eA;
            let eS = j.create;
            t.number = eS, t.nan = em.create, t.bigint = R.create;
            let eC = D.create;
            t.boolean = eC, t.date = $.create, t.symbol = H.create, t.undefined = M.create, t.null = F.create, t.any = z.create, t.unknown = W.create, t.never = q.create, t.void = K.create, t.array = G.create, t.object = Y.create, t.strictObject = Y.strictCreate, t.union = J.create, t.discriminatedUnion = X.create, t.intersection = ee.create, t.tuple = et.create, t.record = er.create, t.map = ei.create, t.set = en.create, t.function = es.create, t.lazy = eo.create, t.literal = ea.create, t.enum = eu.create, t.nativeEnum = ec.create, t.promise = ed.create;
            let eI = eh.create;
            t.effect = eI, t.transformer = eI, t.optional = ep.create, t.nullable = ef.create, t.preprocess = eh.createWithPreprocess, t.pipeline = eb.create, t.ostring = () => eA().optional(), t.onumber = () => eS().optional(), t.oboolean = () => eC().optional(), t.coerce = {
                string: e => V.create({ ...e,
                    coerce: !0
                }),
                number: e => j.create({ ...e,
                    coerce: !0
                }),
                boolean: e => D.create({ ...e,
                    coerce: !0
                }),
                bigint: e => R.create({ ...e,
                    coerce: !0
                }),
                date: e => $.create({ ...e,
                    coerce: !0
                })
            }, t.NEVER = h.INVALID
        },
        58574: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(63430), t), n(r(86858), t), n(r(64281), t), n(r(29067), t), n(r(57238), t), n(r(260), t)
        },
        63430: function(e, t, r) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getErrorMap = t.setErrorMap = t.defaultErrorMap = void 0;
            let n = i(r(23734));
            t.defaultErrorMap = n.default;
            let s = n.default;
            t.setErrorMap = function(e) {
                s = e
            }, t.getErrorMap = function() {
                return s
            }
        },
        64281: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        75958: (e, t) => {
            "use strict";

            function r(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function i(...e) {
                let t = e => e,
                    r = (e, t) => r => e(t(r));
                return {
                    encode: e.map(e => e.encode).reduceRight(r, t),
                    decode: e.map(e => e.decode).reduce(r, t)
                }
            }

            function n(e) {
                return {
                    encode: t => {
                        if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw Error("alphabet.encode input should be an array of numbers");
                        return t.map(t => {
                            if (t < 0 || t >= e.length) throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                            return e[t]
                        })
                    },
                    decode: t => {
                        if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw Error("alphabet.decode input should be array of strings");
                        return t.map(t => {
                            if ("string" != typeof t) throw Error(`alphabet.decode: not string element=${t}`);
                            let r = e.indexOf(t);
                            if (-1 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
                            return r
                        })
                    }
                }
            }

            function s(e = "") {
                if ("string" != typeof e) throw Error("join separator should be string");
                return {
                    encode: t => {
                        if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw Error("join.encode input should be array of strings");
                        for (let e of t)
                            if ("string" != typeof e) throw Error(`join.encode: non-string input=${e}`);
                        return t.join(e)
                    },
                    decode: t => {
                        if ("string" != typeof t) throw Error("join.decode input should be string");
                        return t.split(e)
                    }
                }
            }

            function o(e, t = "=") {
                if ("string" != typeof t) throw Error("padding chr should be string");
                return {
                    encode(r) {
                        if (!Array.isArray(r) || r.length && "string" != typeof r[0]) throw Error("padding.encode input should be array of strings");
                        for (let e of r)
                            if ("string" != typeof e) throw Error(`padding.encode: non-string input=${e}`);
                        for (; r.length * e % 8;) r.push(t);
                        return r
                    },
                    decode(r) {
                        if (!Array.isArray(r) || r.length && "string" != typeof r[0]) throw Error("padding.encode input should be array of strings");
                        for (let e of r)
                            if ("string" != typeof e) throw Error(`padding.decode: non-string input=${e}`);
                        let i = r.length;
                        if (i * e % 8) throw Error("Invalid padding: string should have whole number of bytes");
                        for (; i > 0 && r[i - 1] === t; i--)
                            if (!((i - 1) * e % 8)) throw Error("Invalid padding: string has too much padding");
                        return r.slice(0, i)
                    }
                }
            }

            function a(e) {
                if ("function" != typeof e) throw Error("normalize fn should be function");
                return {
                    encode: e => e,
                    decode: t => e(t)
                }
            }

            function l(e, t, r) {
                if (t < 2) throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
                if (r < 2) throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
                if (!Array.isArray(e)) throw Error("convertRadix: data should be array");
                if (!e.length) return [];
                let i = 0,
                    n = [],
                    s = Array.from(e);
                for (s.forEach(e => {
                        if (e < 0 || e >= t) throw Error(`Wrong integer: ${e}`)
                    });;) {
                    let e = 0,
                        o = !0;
                    for (let n = i; n < s.length; n++) {
                        let a = s[n],
                            l = t * e + a;
                        if (!Number.isSafeInteger(l) || t * e / t !== e || l - a != t * e) throw Error("convertRadix: carry overflow");
                        e = l % r;
                        let u = Math.floor(l / r);
                        if (s[n] = u, !Number.isSafeInteger(u) || u * r + e !== l) throw Error("convertRadix: carry overflow");
                        o && (u ? o = !1 : i = n)
                    }
                    if (n.push(e), o) break
                }
                for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) n.push(0);
                return n.reverse()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bytes = t.stringToBytes = t.str = t.bytesToString = t.hex = t.utf8 = t.bech32m = t.bech32 = t.base58check = t.createBase58check = t.base58xmr = t.base58xrp = t.base58flickr = t.base58 = t.base64urlnopad = t.base64url = t.base64nopad = t.base64 = t.base32crockford = t.base32hexnopad = t.base32hex = t.base32nopad = t.base32 = t.base16 = t.utils = void 0, t.assertNumber = function(e) {
                if (!Number.isSafeInteger(e)) throw Error(`Wrong integer: ${e}`)
            };
            let u = (e, t) => t ? u(t, e % t) : e,
                c = (e, t) => e + (t - u(e, t));

            function d(e, t, r, i) {
                if (!Array.isArray(e)) throw Error("convertRadix2: data should be array");
                if (t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
                if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
                if (c(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${c(t,r)}`);
                let n = 0,
                    s = 0,
                    o = 2 ** r - 1,
                    a = [];
                for (let i of e) {
                    if (i >= 2 ** t) throw Error(`convertRadix2: invalid data word=${i} from=${t}`);
                    if (n = n << t | i, s + t > 32) throw Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
                    for (s += t; s >= r; s -= r) a.push((n >> s - r & o) >>> 0);
                    n &= 2 ** s - 1
                }
                if (n = n << r - s & o, !i && s >= t) throw Error("Excess padding");
                if (!i && n) throw Error(`Non-zero padding: ${n}`);
                return i && s > 0 && a.push(n >>> 0), a
            }

            function h(e) {
                return {
                    encode: t => {
                        if (!r(t)) throw Error("radix.encode input should be Uint8Array");
                        return l(Array.from(t), 256, e)
                    },
                    decode: t => {
                        if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw Error("radix.decode input should be array of numbers");
                        return Uint8Array.from(l(t, e, 256))
                    }
                }
            }

            function p(e, t = !1) {
                if (e <= 0 || e > 32) throw Error("radix2: bits should be in (0..32]");
                if (c(8, e) > 32 || c(e, 8) > 32) throw Error("radix2: carry overflow");
                return {
                    encode: i => {
                        if (!r(i)) throw Error("radix2.encode input should be Uint8Array");
                        return d(Array.from(i), 8, e, !t)
                    },
                    decode: r => {
                        if (!Array.isArray(r) || r.length && "number" != typeof r[0]) throw Error("radix2.decode input should be array of numbers");
                        return Uint8Array.from(d(r, e, 8, t))
                    }
                }
            }

            function f(e) {
                if ("function" != typeof e) throw Error("unsafeWrapper fn should be function");
                return function(...t) {
                    try {
                        return e.apply(null, t)
                    } catch (e) {}
                }
            }

            function g(e, t) {
                if ("function" != typeof t) throw Error("checksum fn should be function");
                return {
                    encode(i) {
                        if (!r(i)) throw Error("checksum.encode: input should be Uint8Array");
                        let n = t(i).slice(0, e),
                            s = new Uint8Array(i.length + e);
                        return s.set(i), s.set(n, i.length), s
                    },
                    decode(i) {
                        if (!r(i)) throw Error("checksum.decode: input should be Uint8Array");
                        let n = i.slice(0, -e),
                            s = t(n).slice(0, e),
                            o = i.slice(-e);
                        for (let t = 0; t < e; t++)
                            if (s[t] !== o[t]) throw Error("Invalid checksum");
                        return n
                    }
                }
            }
            t.utils = {
                alphabet: n,
                chain: i,
                checksum: g,
                convertRadix: l,
                convertRadix2: d,
                radix: h,
                radix2: p,
                join: s,
                padding: o
            }, t.base16 = i(p(4), n("0123456789ABCDEF"), s("")), t.base32 = i(p(5), n("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), o(5), s("")), t.base32nopad = i(p(5), n("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), s("")), t.base32hex = i(p(5), n("0123456789ABCDEFGHIJKLMNOPQRSTUV"), o(5), s("")), t.base32hexnopad = i(p(5), n("0123456789ABCDEFGHIJKLMNOPQRSTUV"), s("")), t.base32crockford = i(p(5), n("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), s(""), a(e => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), t.base64 = i(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), o(6), s("")), t.base64nopad = i(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), s("")), t.base64url = i(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), o(6), s("")), t.base64urlnopad = i(p(6), n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), s(""));
            let y = e => i(h(58), n(e), s(""));
            t.base58 = y("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), t.base58flickr = y("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), t.base58xrp = y("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
            let m = [0, 2, 3, 5, 6, 7, 9, 10, 11];
            t.base58xmr = {
                encode(e) {
                    let r = "";
                    for (let i = 0; i < e.length; i += 8) {
                        let n = e.subarray(i, i + 8);
                        r += t.base58.encode(n).padStart(m[n.length], "1")
                    }
                    return r
                },
                decode(e) {
                    let r = [];
                    for (let i = 0; i < e.length; i += 11) {
                        let n = e.slice(i, i + 11),
                            s = m.indexOf(n.length),
                            o = t.base58.decode(n);
                        for (let e = 0; e < o.length - s; e++)
                            if (0 !== o[e]) throw Error("base58xmr: wrong padding");
                        r = r.concat(Array.from(o.slice(o.length - s)))
                    }
                    return Uint8Array.from(r)
                }
            }, t.createBase58check = e => i(g(4, t => e(e(t))), t.base58), t.base58check = t.createBase58check;
            let v = i(n("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), s("")),
                b = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

            function w(e) {
                let t = e >> 25,
                    r = (0x1ffffff & e) << 5;
                for (let e = 0; e < b.length; e++)(t >> e & 1) == 1 && (r ^= b[e]);
                return r
            }

            function x(e, t, r = 1) {
                let i = e.length,
                    n = 1;
                for (let t = 0; t < i; t++) {
                    let r = e.charCodeAt(t);
                    if (r < 33 || r > 126) throw Error(`Invalid prefix (${e})`);
                    n = w(n) ^ r >> 5
                }
                n = w(n);
                for (let t = 0; t < i; t++) n = w(n) ^ 31 & e.charCodeAt(t);
                for (let e of t) n = w(n) ^ e;
                for (let e = 0; e < 6; e++) n = w(n);
                return n ^= r, v.encode(d([n % 0x40000000], 30, 5, !1))
            }

            function k(e) {
                let t = "bech32" === e ? 1 : 0x2bc830a3,
                    r = p(5),
                    i = r.decode,
                    n = r.encode,
                    s = f(i);

                function o(e, r, i = 90) {
                    if ("string" != typeof e) throw Error(`bech32.encode prefix should be string, not ${typeof e}`);
                    if (r instanceof Uint8Array && (r = Array.from(r)), !Array.isArray(r) || r.length && "number" != typeof r[0]) throw Error(`bech32.encode words should be array of numbers, not ${typeof r}`);
                    if (0 === e.length) throw TypeError(`Invalid prefix length ${e.length}`);
                    let n = e.length + 7 + r.length;
                    if (!1 !== i && n > i) throw TypeError(`Length ${n} exceeds limit ${i}`);
                    let s = e.toLowerCase(),
                        a = x(s, r, t);
                    return `${s}1${v.encode(r)}${a}`
                }

                function a(e, r = 90) {
                    if ("string" != typeof e) throw Error(`bech32.decode input should be string, not ${typeof e}`);
                    if (e.length < 8 || !1 !== r && e.length > r) throw TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
                    let i = e.toLowerCase();
                    if (e !== i && e !== e.toUpperCase()) throw Error("String must be lowercase or uppercase");
                    let n = i.lastIndexOf("1");
                    if (0 === n || -1 === n) throw Error('Letter "1" must be present between prefix and data only');
                    let s = i.slice(0, n),
                        o = i.slice(n + 1);
                    if (o.length < 6) throw Error("Data must be at least 6 characters long");
                    let l = v.decode(o).slice(0, -6),
                        u = x(s, l, t);
                    if (!o.endsWith(u)) throw Error(`Invalid checksum in ${e}: expected "${u}"`);
                    return {
                        prefix: s,
                        words: l
                    }
                }
                let l = f(a);
                return {
                    encode: o,
                    decode: a,
                    encodeFromBytes: function(e, t) {
                        return o(e, n(t))
                    },
                    decodeToBytes: function(e) {
                        let {
                            prefix: t,
                            words: r
                        } = a(e, !1);
                        return {
                            prefix: t,
                            words: r,
                            bytes: i(r)
                        }
                    },
                    decodeUnsafe: l,
                    fromWords: i,
                    fromWordsUnsafe: s,
                    toWords: n
                }
            }
            t.bech32 = k("bech32"), t.bech32m = k("bech32m"), t.utf8 = {
                encode: e => new TextDecoder().decode(e),
                decode: e => new TextEncoder().encode(e)
            }, t.hex = i(p(4), n("0123456789abcdef"), s(""), a(e => {
                if ("string" != typeof e || e.length % 2) throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
                return e.toLowerCase()
            }));
            let A = {
                    utf8: t.utf8,
                    hex: t.hex,
                    base16: t.base16,
                    base32: t.base32,
                    base64: t.base64,
                    base64url: t.base64url,
                    base58: t.base58,
                    base58xmr: t.base58xmr
                },
                S = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
            t.bytesToString = (e, t) => {
                if ("string" != typeof e || !A.hasOwnProperty(e)) throw TypeError(S);
                if (!r(t)) throw TypeError("bytesToString() expects Uint8Array");
                return A[e].encode(t)
            }, t.str = t.bytesToString, t.stringToBytes = (e, t) => {
                if (!A.hasOwnProperty(e)) throw TypeError(S);
                if ("string" != typeof t) throw TypeError("stringToBytes() expects string");
                return A[e].decode(t)
            }, t.bytes = t.stringToBytes
        },
        82177: (e, t, r) => {
            "use strict";
            r.d(t, {
                _d: () => j
            });
            var i, n, s, o, a, l, u, c, d, h, p, f, g, y, m, v, b, w, x, k, A, S, C, I, B, E, _, T, N, O, U, P, Z, L, V = {};
            r.r(V), r.d(V, {
                Any: () => tg,
                BaseBlock: () => eC,
                BaseStringBlock: () => eI,
                BitString: () => e$,
                BmpString: () => e5,
                Boolean: () => eV,
                CharacterString: () => ta,
                Choice: () => ty,
                Constructed: () => eO,
                DATE: () => tc,
                DateTime: () => th,
                Duration: () => tp,
                EndOfContent: () => eP,
                Enumerated: () => ez,
                GeneralString: () => to,
                GeneralizedTime: () => tu,
                GraphicString: () => tn,
                HexBlock: () => eb,
                IA5String: () => ti,
                Integer: () => eF,
                Null: () => eZ,
                NumericString: () => e7,
                ObjectIdentifier: () => eK,
                OctetString: () => eR,
                Primitive: () => eE,
                PrintableString: () => te,
                RawData: () => tv,
                RelativeObjectIdentifier: () => eJ,
                Repeated: () => tm,
                Sequence: () => eQ,
                Set: () => eX,
                TIME: () => tf,
                TeletexString: () => tt,
                TimeOfDay: () => td,
                UTCTime: () => tl,
                UniversalString: () => e9,
                Utf8String: () => e8,
                ValueBlock: () => ex,
                VideotexString: () => tr,
                ViewWriter: () => eu,
                VisibleString: () => ts,
                compareSchema: () => tb,
                fromBER: () => eT,
                verifySchema: () => tw
            });
            var j = {};
            r.r(j), r.d(j, {
                fromBuffer: () => iU,
                fromString: () => iZ,
                isBase64: () => iV,
                isBase64url: () => ij,
                toBase64: () => iP,
                toBuffer: () => iO,
                toString: () => iL
            });
            class R {
                constructor(e, t) {
                    Object.defineProperty(this, "tagId", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "tagValue", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.tagId = e, this.tagValue = t
                }
                get tag() {
                    return this.tagId
                }
                get value() {
                    return this.tagValue
                }
            }

            function D(e, t, r) {
                return decodeLength(e, t, r)
            }

            function $(e, t, r) {
                let [i, n] = decodeLength(e, t, r), s = r + n;
                return [new Uint8Array(e.buffer.slice(s, s + i)), n + i]
            }
            let H = new TextDecoder,
                M = "Map is not supported or well formed",
                F = new TextEncoder,
                z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                q = e => {
                    let t = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                        r = z.length;
                    for (let i = 0; i < r; i++) t[e.charCodeAt(i)] = i;
                    return t
                },
                K = q(z),
                G = q(W),
                Y = /^[-A-Za-z0-9\-_]*$/,
                J = /^[-A-Za-z0-9+/]*={0,3}$/,
                Q = {};
            Q.toArrayBuffer = (e, t) => {
                let r = e.length,
                    i = .75 * e.length,
                    n, s = 0,
                    o, a, l, u;
                "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
                let c = new ArrayBuffer(i),
                    d = new Uint8Array(c),
                    h = t ? G : K;
                for (n = 0; n < r; n += 4) o = h[e.charCodeAt(n)], a = h[e.charCodeAt(n + 1)], l = h[e.charCodeAt(n + 2)], u = h[e.charCodeAt(n + 3)], d[s++] = o << 2 | a >> 4, d[s++] = (15 & a) << 4 | l >> 2, d[s++] = (3 & l) << 6 | 63 & u;
                return c
            }, Q.fromArrayBuffer = (e, t) => {
                let r = new Uint8Array(e),
                    i, n = "",
                    s = r.length,
                    o = t ? W : z;
                for (i = 0; i < s; i += 3) n += o[r[i] >> 2], n += o[(3 & r[i]) << 4 | r[i + 1] >> 4], n += o[(15 & r[i + 1]) << 2 | r[i + 2] >> 6], n += o[63 & r[i + 2]];
                let a = s % 3;
                return 2 === a ? n = n.substring(0, n.length - 1) + (t ? "" : "=") : 1 === a && (n = n.substring(0, n.length - 2) + (t ? "" : "==")), n
            }, Q.toString = (e, t) => new TextDecoder().decode(Q.toArrayBuffer(e, t)), Q.fromString = (e, t) => Q.fromArrayBuffer(new TextEncoder().encode(e), t), Q.validate = (e, t) => {
                if (!("string" == typeof e || e instanceof String)) return !1;
                try {
                    return t ? Y.test(e) : J.test(e)
                } catch (e) {
                    return !1
                }
            }, Q.base64 = Q;
            var X = r(48554),
                ee = r(49381);

            function et(e, t) {
                let r = 0;
                if (1 === e.length) return e[0];
                for (let i = e.length - 1; i >= 0; i--) r += e[e.length - 1 - i] * Math.pow(2, t * i);
                return r
            }

            function er(e, t, r = -1) {
                let i = e,
                    n = 0,
                    s = Math.pow(2, t);
                for (let o = 1; o < 8; o++) {
                    if (e < s) {
                        let e;
                        if (r < 0) e = new ArrayBuffer(o), n = o;
                        else {
                            if (r < o) return new ArrayBuffer(0);
                            e = new ArrayBuffer(r), n = r
                        }
                        let s = new Uint8Array(e);
                        for (let e = o - 1; e >= 0; e--) {
                            let r = Math.pow(2, e * t);
                            s[n - e - 1] = Math.floor(i / r), i -= s[n - e - 1] * r
                        }
                        return e
                    }
                    s *= Math.pow(2, t)
                }
                return new ArrayBuffer(0)
            }

            function ei(...e) {
                let t = 0,
                    r = 0;
                for (let r of e) t += r.length;
                let i = new Uint8Array(new ArrayBuffer(t));
                for (let t of e) i.set(t, r), r += t.length;
                return i
            }

            function en() {
                let e = new Uint8Array(this.valueHex);
                if (this.valueHex.byteLength >= 2) {
                    let t = 255 === e[0] && 128 & e[1],
                        r = 0 === e[0] && (128 & e[1]) == 0;
                    (t || r) && this.warnings.push("Needlessly long format")
                }
                let t = new Uint8Array(new ArrayBuffer(this.valueHex.byteLength));
                for (let e = 0; e < this.valueHex.byteLength; e++) t[e] = 0;
                t[0] = 128 & e[0];
                let r = et(t, 8),
                    i = new Uint8Array(new ArrayBuffer(this.valueHex.byteLength));
                for (let t = 0; t < this.valueHex.byteLength; t++) i[t] = e[t];
                return i[0] &= 127, et(i, 8) - r
            }

            function es(e, t) {
                let r = e.toString(10);
                if (t < r.length) return "";
                let i = t - r.length,
                    n = Array(i);
                for (let e = 0; e < i; e++) n[e] = "0";
                return n.join("").concat(r)
            }

            function eo() {
                if ("undefined" == typeof BigInt) throw Error("BigInt is not defined. Your environment doesn't implement BigInt.")
            }

            function ea(e) {
                let t = 0,
                    r = 0;
                for (let r = 0; r < e.length; r++) t += e[r].byteLength;
                let i = new Uint8Array(t);
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    i.set(new Uint8Array(n), r), r += n.byteLength
                }
                return i.buffer
            }

            function el(e, t, r, i) {
                return t instanceof Uint8Array ? t.byteLength ? r < 0 ? (e.error = "Wrong parameter: inputOffset less than zero", !1) : i < 0 ? (e.error = "Wrong parameter: inputLength less than zero", !1) : !(t.byteLength - r - i < 0) || (e.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", !1) : (e.error = "Wrong parameter: inputBuffer has zero length", !1) : (e.error = "Wrong parameter: inputBuffer must be 'Uint8Array'", !1)
            }
            class eu {
                constructor() {
                    this.items = []
                }
                write(e) {
                    this.items.push(e)
                }
                final() {
                    return ea(this.items)
                }
            }
            let ec = [new Uint8Array([1])],
                ed = "0123456789",
                eh = "name",
                ep = "valueHexView",
                ef = new ArrayBuffer(0),
                eg = new Uint8Array(0),
                ey = "EndOfContent",
                em = "OCTET STRING",
                ev = "BIT STRING";

            function eb(e) {
                var t;
                return (t = class extends e {
                    constructor(...e) {
                        var t;
                        super(...e);
                        let r = e[0] || {};
                        this.isHexOnly = null !== (t = r.isHexOnly) && void 0 !== t && t, this.valueHexView = r.valueHex ? ee._H.toUint8Array(r.valueHex) : eg
                    }
                    get valueHex() {
                        return this.valueHexView.slice().buffer
                    }
                    set valueHex(e) {
                        this.valueHexView = new Uint8Array(e)
                    }
                    fromBER(e, t, r) {
                        let i = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
                        if (!el(this, i, t, r)) return -1;
                        let n = t + r;
                        return (this.valueHexView = i.subarray(t, n), this.valueHexView.length) ? (this.blockLength = r, n) : (this.warnings.push("Zero buffer length"), t)
                    }
                    toBER(e = !1) {
                        return this.isHexOnly ? e ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.byteLength === this.valueHexView.buffer.byteLength ? this.valueHexView.buffer : this.valueHexView.slice().buffer : (this.error = "Flag 'isHexOnly' is not set, abort", ef)
                    }
                    toJSON() {
                        return { ...super.toJSON(),
                            isHexOnly: this.isHexOnly,
                            valueHex: ee.U$.ToHex(this.valueHexView)
                        }
                    }
                }).NAME = "hexBlock", t
            }
            class ew {
                constructor({
                    blockLength: e = 0,
                    error: t = "",
                    warnings: r = [],
                    valueBeforeDecode: i = eg
                } = {}) {
                    this.blockLength = e, this.error = t, this.warnings = r, this.valueBeforeDecodeView = ee._H.toUint8Array(i)
                }
                static blockName() {
                    return this.NAME
                }
                get valueBeforeDecode() {
                    return this.valueBeforeDecodeView.slice().buffer
                }
                set valueBeforeDecode(e) {
                    this.valueBeforeDecodeView = new Uint8Array(e)
                }
                toJSON() {
                    return {
                        blockName: this.constructor.NAME,
                        blockLength: this.blockLength,
                        error: this.error,
                        warnings: this.warnings,
                        valueBeforeDecode: ee.U$.ToHex(this.valueBeforeDecodeView)
                    }
                }
            }
            ew.NAME = "baseBlock";
            class ex extends ew {
                fromBER(e, t, r) {
                    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'")
                }
                toBER(e, t) {
                    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'")
                }
            }
            ex.NAME = "valueBlock";
            class ek extends eb(ew) {
                constructor({
                    idBlock: e = {}
                } = {}) {
                    var t, r, i, n;
                    super(), e ? (this.isHexOnly = null !== (t = e.isHexOnly) && void 0 !== t && t, this.valueHexView = e.valueHex ? ee._H.toUint8Array(e.valueHex) : eg, this.tagClass = null !== (r = e.tagClass) && void 0 !== r ? r : -1, this.tagNumber = null !== (i = e.tagNumber) && void 0 !== i ? i : -1, this.isConstructed = null !== (n = e.isConstructed) && void 0 !== n && n) : (this.tagClass = -1, this.tagNumber = -1, this.isConstructed = !1)
                }
                toBER(e = !1) {
                    let t = 0;
                    switch (this.tagClass) {
                        case 1:
                            t |= 0;
                            break;
                        case 2:
                            t |= 64;
                            break;
                        case 3:
                            t |= 128;
                            break;
                        case 4:
                            t |= 192;
                            break;
                        default:
                            return this.error = "Unknown tag class", ef
                    }
                    if (this.isConstructed && (t |= 32), this.tagNumber < 31 && !this.isHexOnly) {
                        let r = new Uint8Array(1);
                        if (!e) {
                            let e = this.tagNumber;
                            e &= 31, t |= e, r[0] = t
                        }
                        return r.buffer
                    }
                    if (!this.isHexOnly) {
                        let r = er(this.tagNumber, 7),
                            i = new Uint8Array(r),
                            n = r.byteLength,
                            s = new Uint8Array(n + 1);
                        if (s[0] = 31 | t, !e) {
                            for (let e = 0; e < n - 1; e++) s[e + 1] = 128 | i[e];
                            s[n] = i[n - 1]
                        }
                        return s.buffer
                    }
                    let r = new Uint8Array(this.valueHexView.byteLength + 1);
                    if (r[0] = 31 | t, !e) {
                        let e = this.valueHexView;
                        for (let t = 0; t < e.length - 1; t++) r[t + 1] = 128 | e[t];
                        r[this.valueHexView.byteLength] = e[e.length - 1]
                    }
                    return r.buffer
                }
                fromBER(e, t, r) {
                    let i = ee._H.toUint8Array(e);
                    if (!el(this, i, t, r)) return -1;
                    let n = i.subarray(t, t + r);
                    if (0 === n.length) return this.error = "Zero buffer length", -1;
                    switch (192 & n[0]) {
                        case 0:
                            this.tagClass = 1;
                            break;
                        case 64:
                            this.tagClass = 2;
                            break;
                        case 128:
                            this.tagClass = 3;
                            break;
                        case 192:
                            this.tagClass = 4;
                            break;
                        default:
                            return this.error = "Unknown tag class", -1
                    }
                    this.isConstructed = (32 & n[0]) == 32, this.isHexOnly = !1;
                    let s = 31 & n[0];
                    if (31 !== s) this.tagNumber = s, this.blockLength = 1;
                    else {
                        let e = 1,
                            t = this.valueHexView = new Uint8Array(255),
                            r = 255;
                        for (; 128 & n[e];) {
                            if (t[e - 1] = 127 & n[e], ++e >= n.length) return this.error = "End of input reached before message was fully decoded", -1;
                            if (e === r) {
                                let e = new Uint8Array(r += 255);
                                for (let r = 0; r < t.length; r++) e[r] = t[r];
                                t = this.valueHexView = new Uint8Array(r)
                            }
                        }
                        this.blockLength = e + 1, t[e - 1] = 127 & n[e];
                        let i = new Uint8Array(e);
                        for (let r = 0; r < e; r++) i[r] = t[r];
                        (t = this.valueHexView = new Uint8Array(e)).set(i), this.blockLength <= 9 ? this.tagNumber = et(t, 7) : (this.isHexOnly = !0, this.warnings.push("Tag too long, represented as hex-coded"))
                    }
                    if (1 === this.tagClass && this.isConstructed) switch (this.tagNumber) {
                        case 1:
                        case 2:
                        case 5:
                        case 6:
                        case 9:
                        case 13:
                        case 14:
                        case 23:
                        case 24:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                            return this.error = "Constructed encoding used for primitive type", -1
                    }
                    return t + this.blockLength
                }
                toJSON() {
                    return { ...super.toJSON(),
                        tagClass: this.tagClass,
                        tagNumber: this.tagNumber,
                        isConstructed: this.isConstructed
                    }
                }
            }
            ek.NAME = "identificationBlock";
            class eA extends ew {
                constructor({
                    lenBlock: e = {}
                } = {}) {
                    var t, r, i;
                    super(), this.isIndefiniteForm = null !== (t = e.isIndefiniteForm) && void 0 !== t && t, this.longFormUsed = null !== (r = e.longFormUsed) && void 0 !== r && r, this.length = null !== (i = e.length) && void 0 !== i ? i : 0
                }
                fromBER(e, t, r) {
                    let i = ee._H.toUint8Array(e);
                    if (!el(this, i, t, r)) return -1;
                    let n = i.subarray(t, t + r);
                    if (0 === n.length) return this.error = "Zero buffer length", -1;
                    if (255 === n[0]) return this.error = "Length block 0xFF is reserved by standard", -1;
                    if (this.isIndefiniteForm = 128 === n[0], this.isIndefiniteForm) return this.blockLength = 1, t + this.blockLength;
                    if (this.longFormUsed = !!(128 & n[0]), !1 === this.longFormUsed) return this.length = n[0], this.blockLength = 1, t + this.blockLength;
                    let s = 127 & n[0];
                    if (s > 8) return this.error = "Too big integer", -1;
                    if (s + 1 > n.length) return this.error = "End of input reached before message was fully decoded", -1;
                    let o = t + 1,
                        a = i.subarray(o, o + s);
                    return 0 === a[s - 1] && this.warnings.push("Needlessly long encoded length"), this.length = et(a, 8), this.longFormUsed && this.length <= 127 && this.warnings.push("Unnecessary usage of long length form"), this.blockLength = s + 1, t + this.blockLength
                }
                toBER(e = !1) {
                    let t, r;
                    if (this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm) return t = new ArrayBuffer(1), !1 === e && ((r = new Uint8Array(t))[0] = 128), t;
                    if (this.longFormUsed) {
                        let i = er(this.length, 8);
                        if (i.byteLength > 127) return this.error = "Too big length", ef;
                        if (t = new ArrayBuffer(i.byteLength + 1), e) return t;
                        let n = new Uint8Array(i);
                        (r = new Uint8Array(t))[0] = 128 | i.byteLength;
                        for (let e = 0; e < i.byteLength; e++) r[e + 1] = n[e];
                        return t
                    }
                    return t = new ArrayBuffer(1), !1 === e && ((r = new Uint8Array(t))[0] = this.length), t
                }
                toJSON() {
                    return { ...super.toJSON(),
                        isIndefiniteForm: this.isIndefiniteForm,
                        longFormUsed: this.longFormUsed,
                        length: this.length
                    }
                }
            }
            eA.NAME = "lengthBlock";
            let eS = {};
            class eC extends ew {
                constructor({
                    name: e = "",
                    optional: t = !1,
                    primitiveSchema: r,
                    ...i
                } = {}, n) {
                    super(i), this.name = e, this.optional = t, r && (this.primitiveSchema = r), this.idBlock = new ek(i), this.lenBlock = new eA(i), this.valueBlock = n ? new n(i) : new ex(i)
                }
                fromBER(e, t, r) {
                    let i = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === i ? this.error = this.valueBlock.error : (this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength), this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength), this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength)), i
                }
                toBER(e, t) {
                    let r = t || new eu;
                    t || function e(t) {
                        if (t instanceof eS.Constructed)
                            for (let r of t.valueBlock.value) e(r) && (t.lenBlock.isIndefiniteForm = !0);
                        return !!t.lenBlock.isIndefiniteForm
                    }(this);
                    let i = this.idBlock.toBER(e);
                    if (r.write(i), this.lenBlock.isIndefiniteForm) r.write(new Uint8Array([128]).buffer), this.valueBlock.toBER(e, r), r.write(new ArrayBuffer(2));
                    else {
                        let t = this.valueBlock.toBER(e);
                        this.lenBlock.length = t.byteLength;
                        let i = this.lenBlock.toBER(e);
                        r.write(i), r.write(t)
                    }
                    return t ? ef : r.final()
                }
                toJSON() {
                    let e = { ...super.toJSON(),
                        idBlock: this.idBlock.toJSON(),
                        lenBlock: this.lenBlock.toJSON(),
                        valueBlock: this.valueBlock.toJSON(),
                        name: this.name,
                        optional: this.optional
                    };
                    return this.primitiveSchema && (e.primitiveSchema = this.primitiveSchema.toJSON()), e
                }
                toString(e = "ascii") {
                    return "ascii" === e ? this.onAsciiEncoding() : ee.U$.ToHex(this.toBER())
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${ee.U$.ToHex(this.valueBlock.valueBeforeDecodeView)}`
                }
                isEqual(e) {
                    return this === e || e instanceof this.constructor && function(e, t) {
                        if (e.byteLength !== t.byteLength) return !1;
                        let r = new Uint8Array(e),
                            i = new Uint8Array(t);
                        for (let e = 0; e < r.length; e++)
                            if (r[e] !== i[e]) return !1;
                        return !0
                    }(this.toBER(), e.toBER())
                }
            }
            eC.NAME = "BaseBlock";
            class eI extends eC {
                constructor({
                    value: e = "",
                    ...t
                } = {}, r) {
                    super(t, r), e && this.fromString(e)
                }
                getValue() {
                    return this.valueBlock.value
                }
                setValue(e) {
                    this.valueBlock.value = e
                }
                fromBER(e, t, r) {
                    let i = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === i ? this.error = this.valueBlock.error : (this.fromBuffer(this.valueBlock.valueHexView), this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength), this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength), this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength)), i
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : '${this.valueBlock.value}'`
                }
            }
            eI.NAME = "BaseStringBlock";
            class eB extends eb(ex) {
                constructor({
                    isHexOnly: e = !0,
                    ...t
                } = {}) {
                    super(t), this.isHexOnly = e
                }
            }
            eB.NAME = "PrimitiveValueBlock";
            class eE extends eC {
                constructor(e = {}) {
                    super(e, eB), this.idBlock.isConstructed = !1
                }
            }

            function e_(e, t = 0, r = e.length) {
                let i = t,
                    n = new eC({}, ex),
                    s = new ew;
                if (!el(s, e, t, r)) return n.error = s.error, {
                    offset: -1,
                    result: n
                };
                if (!e.subarray(t, t + r).length) return n.error = "Zero buffer length", {
                    offset: -1,
                    result: n
                };
                let o = n.idBlock.fromBER(e, t, r);
                if (n.idBlock.warnings.length && n.warnings.concat(n.idBlock.warnings), -1 === o) return n.error = n.idBlock.error, {
                    offset: -1,
                    result: n
                };
                if (t = o, r -= n.idBlock.blockLength, o = n.lenBlock.fromBER(e, t, r), n.lenBlock.warnings.length && n.warnings.concat(n.lenBlock.warnings), -1 === o) return n.error = n.lenBlock.error, {
                    offset: -1,
                    result: n
                };
                if (t = o, r -= n.lenBlock.blockLength, !n.idBlock.isConstructed && n.lenBlock.isIndefiniteForm) return n.error = "Indefinite length form used for primitive encoding form", {
                    offset: -1,
                    result: n
                };
                let a = eC;
                if (1 === n.idBlock.tagClass) {
                    if (n.idBlock.tagNumber >= 37 && !1 === n.idBlock.isHexOnly) return n.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard", {
                        offset: -1,
                        result: n
                    };
                    switch (n.idBlock.tagNumber) {
                        case 0:
                            if (n.idBlock.isConstructed && n.lenBlock.length > 0) return n.error = "Type [UNIVERSAL 0] is reserved", {
                                offset: -1,
                                result: n
                            };
                            a = eS.EndOfContent;
                            break;
                        case 1:
                            a = eS.Boolean;
                            break;
                        case 2:
                            a = eS.Integer;
                            break;
                        case 3:
                            a = eS.BitString;
                            break;
                        case 4:
                            a = eS.OctetString;
                            break;
                        case 5:
                            a = eS.Null;
                            break;
                        case 6:
                            a = eS.ObjectIdentifier;
                            break;
                        case 10:
                            a = eS.Enumerated;
                            break;
                        case 12:
                            a = eS.Utf8String;
                            break;
                        case 13:
                            a = eS.RelativeObjectIdentifier;
                            break;
                        case 14:
                            a = eS.TIME;
                            break;
                        case 15:
                            return n.error = "[UNIVERSAL 15] is reserved by ASN.1 standard", {
                                offset: -1,
                                result: n
                            };
                        case 16:
                            a = eS.Sequence;
                            break;
                        case 17:
                            a = eS.Set;
                            break;
                        case 18:
                            a = eS.NumericString;
                            break;
                        case 19:
                            a = eS.PrintableString;
                            break;
                        case 20:
                            a = eS.TeletexString;
                            break;
                        case 21:
                            a = eS.VideotexString;
                            break;
                        case 22:
                            a = eS.IA5String;
                            break;
                        case 23:
                            a = eS.UTCTime;
                            break;
                        case 24:
                            a = eS.GeneralizedTime;
                            break;
                        case 25:
                            a = eS.GraphicString;
                            break;
                        case 26:
                            a = eS.VisibleString;
                            break;
                        case 27:
                            a = eS.GeneralString;
                            break;
                        case 28:
                            a = eS.UniversalString;
                            break;
                        case 29:
                            a = eS.CharacterString;
                            break;
                        case 30:
                            a = eS.BmpString;
                            break;
                        case 31:
                            a = eS.DATE;
                            break;
                        case 32:
                            a = eS.TimeOfDay;
                            break;
                        case 33:
                            a = eS.DateTime;
                            break;
                        case 34:
                            a = eS.Duration;
                            break;
                        default:
                            {
                                let e = n.idBlock.isConstructed ? new eS.Constructed : new eS.Primitive;e.idBlock = n.idBlock,
                                e.lenBlock = n.lenBlock,
                                e.warnings = n.warnings,
                                n = e
                            }
                    }
                } else a = n.idBlock.isConstructed ? eS.Constructed : eS.Primitive;
                return o = (n = function(e, t) {
                    if (e instanceof t) return e;
                    let r = new t;
                    return r.idBlock = e.idBlock, r.lenBlock = e.lenBlock, r.warnings = e.warnings, r.valueBeforeDecodeView = e.valueBeforeDecodeView, r
                }(n, a)).fromBER(e, t, n.lenBlock.isIndefiniteForm ? r : n.lenBlock.length), n.valueBeforeDecodeView = e.subarray(i, i + n.blockLength), {
                    offset: o,
                    result: n
                }
            }

            function eT(e) {
                if (!e.byteLength) {
                    let e = new eC({}, ex);
                    return e.error = "Input buffer has zero length", {
                        offset: -1,
                        result: e
                    }
                }
                return e_(ee._H.toUint8Array(e).slice(), 0, e.byteLength)
            }
            eS.Primitive = eE, eE.NAME = "PRIMITIVE";
            class eN extends ex {
                constructor({
                    value: e = [],
                    isIndefiniteForm: t = !1,
                    ...r
                } = {}) {
                    super(r), this.value = e, this.isIndefiniteForm = t
                }
                fromBER(e, t, r) {
                    var i, n;
                    let s = ee._H.toUint8Array(e);
                    if (!el(this, s, t, r)) return -1;
                    if (this.valueBeforeDecodeView = s.subarray(t, t + r), 0 === this.valueBeforeDecodeView.length) return this.warnings.push("Zero buffer length"), t;
                    let o = t;
                    for (; i = this.isIndefiniteForm, n = r, (i ? 1 : n) > 0;) {
                        let e = e_(s, o, r);
                        if (-1 === e.offset) return this.error = e.result.error, this.warnings.concat(e.result.warnings), -1;
                        if (o = e.offset, this.blockLength += e.result.blockLength, r -= e.result.blockLength, this.value.push(e.result), this.isIndefiniteForm && e.result.constructor.NAME === ey) break
                    }
                    return this.isIndefiniteForm && (this.value[this.value.length - 1].constructor.NAME === ey ? this.value.pop() : this.warnings.push("No EndOfContent block encoded")), o
                }
                toBER(e, t) {
                    let r = t || new eu;
                    for (let t = 0; t < this.value.length; t++) this.value[t].toBER(e, r);
                    return t ? ef : r.final()
                }
                toJSON() {
                    let e = { ...super.toJSON(),
                        isIndefiniteForm: this.isIndefiniteForm,
                        value: []
                    };
                    for (let t of this.value) e.value.push(t.toJSON());
                    return e
                }
            }
            eN.NAME = "ConstructedValueBlock";
            class eO extends eC {
                constructor(e = {}) {
                    super(e, eN), this.idBlock.isConstructed = !0
                }
                fromBER(e, t, r) {
                    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
                    let i = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === i ? this.error = this.valueBlock.error : (this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength), this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength), this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength)), i
                }
                onAsciiEncoding() {
                    let e = [];
                    for (let t of this.valueBlock.value) e.push(t.toString("ascii").split("\n").map(e => `  ${e}`).join("\n"));
                    let t = 3 === this.idBlock.tagClass ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
                    return e.length ? `${t} :
${e.join("\n")}` : `${t} :`
                }
            }
            eS.Constructed = eO, eO.NAME = "CONSTRUCTED";
            class eU extends ex {
                fromBER(e, t, r) {
                    return t
                }
                toBER(e) {
                    return ef
                }
            }
            eU.override = "EndOfContentValueBlock";
            class eP extends eC {
                constructor(e = {}) {
                    super(e, eU), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 0
                }
            }
            eS.EndOfContent = eP, eP.NAME = ey;
            class eZ extends eC {
                constructor(e = {}) {
                    super(e, ex), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 5
                }
                fromBER(e, t, r) {
                    return (this.lenBlock.length > 0 && this.warnings.push("Non-zero length of value block for Null type"), this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength), this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength), this.blockLength += r, t + r > e.byteLength) ? (this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", -1) : t + r
                }
                toBER(e, t) {
                    let r = new ArrayBuffer(2);
                    if (!e) {
                        let e = new Uint8Array(r);
                        e[0] = 5, e[1] = 0
                    }
                    return t && t.write(r), r
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME}`
                }
            }
            eS.Null = eZ, eZ.NAME = "NULL";
            class eL extends eb(ex) {
                constructor({
                    value: e,
                    ...t
                } = {}) {
                    super(t), t.valueHex ? this.valueHexView = ee._H.toUint8Array(t.valueHex) : this.valueHexView = new Uint8Array(1), e && (this.value = e)
                }
                get value() {
                    for (let e of this.valueHexView)
                        if (e > 0) return !0;
                    return !1
                }
                set value(e) {
                    this.valueHexView[0] = 255 * !!e
                }
                fromBER(e, t, r) {
                    let i = ee._H.toUint8Array(e);
                    return el(this, i, t, r) ? (this.valueHexView = i.subarray(t, t + r), r > 1 && this.warnings.push("Boolean value encoded in more then 1 octet"), this.isHexOnly = !0, en.call(this), this.blockLength = r, t + r) : -1
                }
                toBER() {
                    return this.valueHexView.slice()
                }
                toJSON() {
                    return { ...super.toJSON(),
                        value: this.value
                    }
                }
            }
            eL.NAME = "BooleanValueBlock";
            class eV extends eC {
                constructor(e = {}) {
                    super(e, eL), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 1
                }
                getValue() {
                    return this.valueBlock.value
                }
                setValue(e) {
                    this.valueBlock.value = e
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${this.getValue}`
                }
            }
            eS.Boolean = eV, eV.NAME = "BOOLEAN";
            class ej extends eb(eN) {
                constructor({
                    isConstructed: e = !1,
                    ...t
                } = {}) {
                    super(t), this.isConstructed = e
                }
                fromBER(e, t, r) {
                    let i = 0;
                    if (this.isConstructed) {
                        if (this.isHexOnly = !1, -1 === (i = eN.prototype.fromBER.call(this, e, t, r))) return i;
                        for (let e = 0; e < this.value.length; e++) {
                            let t = this.value[e].constructor.NAME;
                            if (t === ey) {
                                if (!this.isIndefiniteForm) return this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only", -1;
                                break
                            }
                            if (t !== em) return this.error = "OCTET STRING may consists of OCTET STRINGs only", -1
                        }
                    } else this.isHexOnly = !0, i = super.fromBER(e, t, r), this.blockLength = r;
                    return i
                }
                toBER(e, t) {
                    return this.isConstructed ? eN.prototype.toBER.call(this, e, t) : e ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.slice().buffer
                }
                toJSON() {
                    return { ...super.toJSON(),
                        isConstructed: this.isConstructed
                    }
                }
            }
            ej.NAME = "OctetStringValueBlock";
            class eR extends eC {
                constructor({
                    idBlock: e = {},
                    lenBlock: t = {},
                    ...r
                } = {}) {
                    var i, n;
                    null !== (i = r.isConstructed) && void 0 !== i || (r.isConstructed = !!(null === (n = r.value) || void 0 === n ? void 0 : n.length)), super({
                        idBlock: {
                            isConstructed: r.isConstructed,
                            ...e
                        },
                        lenBlock: { ...t,
                            isIndefiniteForm: !!r.isIndefiniteForm
                        },
                        ...r
                    }, ej), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 4
                }
                fromBER(e, t, r) {
                    if (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, 0 === r) return 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), t;
                    if (!this.valueBlock.isConstructed) {
                        let i = (e instanceof ArrayBuffer ? new Uint8Array(e) : e).subarray(t, t + r);
                        try {
                            if (i.byteLength) {
                                let e = e_(i, 0, i.byteLength); - 1 !== e.offset && e.offset === r && (this.valueBlock.value = [e.result])
                            }
                        } catch (e) {}
                    }
                    return super.fromBER(e, t, r)
                }
                onAsciiEncoding() {
                    return this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length ? eO.prototype.onAsciiEncoding.call(this) : `${this.constructor.NAME} : ${ee.U$.ToHex(this.valueBlock.valueHexView)}`
                }
                getValue() {
                    if (!this.idBlock.isConstructed) return this.valueBlock.valueHexView.slice().buffer;
                    let e = [];
                    for (let t of this.valueBlock.value) t instanceof eR && e.push(t.valueBlock.valueHexView);
                    return ee._H.concat(e)
                }
            }
            eS.OctetString = eR, eR.NAME = em;
            class eD extends eb(eN) {
                constructor({
                    unusedBits: e = 0,
                    isConstructed: t = !1,
                    ...r
                } = {}) {
                    super(r), this.unusedBits = e, this.isConstructed = t, this.blockLength = this.valueHexView.byteLength
                }
                fromBER(e, t, r) {
                    if (!r) return t;
                    let i = -1;
                    if (this.isConstructed) {
                        if (-1 === (i = eN.prototype.fromBER.call(this, e, t, r))) return i;
                        for (let e of this.value) {
                            let t = e.constructor.NAME;
                            if (t === ey) {
                                if (!this.isIndefiniteForm) return this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only", -1;
                                break
                            }
                            if (t !== ev) return this.error = "BIT STRING may consists of BIT STRINGs only", -1;
                            let r = e.valueBlock;
                            if (this.unusedBits > 0 && r.unusedBits > 0) return this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only', -1;
                            this.unusedBits = r.unusedBits
                        }
                        return i
                    }
                    let n = ee._H.toUint8Array(e);
                    if (!el(this, n, t, r)) return -1;
                    let s = n.subarray(t, t + r);
                    if (this.unusedBits = s[0], this.unusedBits > 7) return this.error = "Unused bits for BitString must be in range 0-7", -1;
                    if (!this.unusedBits) {
                        let e = s.subarray(1);
                        try {
                            if (e.byteLength) {
                                let t = e_(e, 0, e.byteLength); - 1 !== t.offset && t.offset === r - 1 && (this.value = [t.result])
                            }
                        } catch (e) {}
                    }
                    return this.valueHexView = s.subarray(1), this.blockLength = s.length, t + r
                }
                toBER(e, t) {
                    if (this.isConstructed) return eN.prototype.toBER.call(this, e, t);
                    if (e) return new ArrayBuffer(this.valueHexView.byteLength + 1);
                    if (!this.valueHexView.byteLength) return ef;
                    let r = new Uint8Array(this.valueHexView.length + 1);
                    return r[0] = this.unusedBits, r.set(this.valueHexView, 1), r.buffer
                }
                toJSON() {
                    return { ...super.toJSON(),
                        unusedBits: this.unusedBits,
                        isConstructed: this.isConstructed
                    }
                }
            }
            eD.NAME = "BitStringValueBlock";
            class e$ extends eC {
                constructor({
                    idBlock: e = {},
                    lenBlock: t = {},
                    ...r
                } = {}) {
                    var i, n;
                    null !== (i = r.isConstructed) && void 0 !== i || (r.isConstructed = !!(null === (n = r.value) || void 0 === n ? void 0 : n.length)), super({
                        idBlock: {
                            isConstructed: r.isConstructed,
                            ...e
                        },
                        lenBlock: { ...t,
                            isIndefiniteForm: !!r.isIndefiniteForm
                        },
                        ...r
                    }, eD), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 3
                }
                fromBER(e, t, r) {
                    return this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, super.fromBER(e, t, r)
                }
                onAsciiEncoding() {
                    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) return eO.prototype.onAsciiEncoding.call(this); {
                        let e = [];
                        for (let t of this.valueBlock.valueHexView) e.push(t.toString(2).padStart(8, "0"));
                        let t = e.join("");
                        return `${this.constructor.NAME} : ${t.substring(0,t.length-this.valueBlock.unusedBits)}`
                    }
                }
            }

            function eH(e) {
                if (e >= ec.length)
                    for (let t = ec.length; t <= e; t++) {
                        let e = new Uint8Array([0]),
                            r = ec[t - 1].slice(0);
                        for (let t = r.length - 1; t >= 0; t--) {
                            let i = new Uint8Array([(r[t] << 1) + e[0]]);
                            e[0] = i[0] / 10, r[t] = i[0] % 10
                        }
                        e[0] > 0 && (r = ei(e, r)), ec.push(r)
                    }
                return ec[e]
            }
            eS.BitString = e$, e$.NAME = ev;
            class eM extends eb(ex) {
                constructor({
                    value: e,
                    ...t
                } = {}) {
                    super(t), this._valueDec = 0, t.valueHex && this.setValueHex(), void 0 !== e && (this.valueDec = e)
                }
                setValueHex() {
                    this.valueHexView.length >= 4 ? (this.warnings.push("Too big Integer for decoding, hex only"), this.isHexOnly = !0, this._valueDec = 0) : (this.isHexOnly = !1, this.valueHexView.length > 0 && (this._valueDec = en.call(this)))
                }
                set valueDec(e) {
                    this._valueDec = e, this.isHexOnly = !1, this.valueHexView = new Uint8Array(function(e) {
                        let t = e < 0 ? -1 * e : e,
                            r = 128;
                        for (let i = 1; i < 8; i++) {
                            if (t <= r) {
                                if (e < 0) {
                                    let e = er(r - t, 8, i),
                                        n = new Uint8Array(e);
                                    return n[0] |= 128, e
                                }
                                let n = er(t, 8, i),
                                    s = new Uint8Array(n);
                                if (128 & s[0]) {
                                    let e = n.slice(0),
                                        t = new Uint8Array(e);
                                    s = new Uint8Array(n = new ArrayBuffer(n.byteLength + 1));
                                    for (let r = 0; r < e.byteLength; r++) s[r + 1] = t[r];
                                    s[0] = 0
                                }
                                return n
                            }
                            r *= 256
                        }
                        return new ArrayBuffer(0)
                    }(e))
                }
                get valueDec() {
                    return this._valueDec
                }
                fromDER(e, t, r, i = 0) {
                    let n = this.fromBER(e, t, r);
                    if (-1 === n) return n;
                    let s = this.valueHexView;
                    return 0 === s[0] && (128 & s[1]) != 0 ? this.valueHexView = s.subarray(1) : 0 !== i && s.length < i && (i - s.length > 1 && (i = s.length + 1), this.valueHexView = s.subarray(i - s.length)), n
                }
                toDER(e = !1) {
                    let t = this.valueHexView;
                    switch (!0) {
                        case (128 & t[0]) != 0:
                            {
                                let e = new Uint8Array(this.valueHexView.length + 1);e[0] = 0,
                                e.set(t, 1),
                                this.valueHexView = e
                            }
                            break;
                        case 0 === t[0] && (128 & t[1]) == 0:
                            this.valueHexView = this.valueHexView.subarray(1)
                    }
                    return this.toBER(e)
                }
                fromBER(e, t, r) {
                    let i = super.fromBER(e, t, r);
                    return -1 === i || this.setValueHex(), i
                }
                toBER(e) {
                    return e ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer
                }
                toJSON() {
                    return { ...super.toJSON(),
                        valueDec: this.valueDec
                    }
                }
                toString() {
                    let e;
                    let t = 8 * this.valueHexView.length - 1,
                        r = new Uint8Array(8 * this.valueHexView.length / 3),
                        i = 0,
                        n = this.valueHexView,
                        s = "",
                        o = !1;
                    for (let o = n.byteLength - 1; o >= 0; o--) {
                        e = n[o];
                        for (let n = 0; n < 8; n++)(1 & e) == 1 && (i === t ? (r = function(e, t) {
                            let r, i = 0,
                                n = new Uint8Array(e),
                                s = new Uint8Array(t),
                                o = n.slice(0),
                                a = o.length - 1,
                                l = s.slice(0),
                                u = l.length - 1,
                                c = 0;
                            for (let e = u; e >= 0; e--, c++) !0 == (r = o[a - c] - l[u - c] - i) < 0 ? (i = 1, o[a - c] = r + 10) : (i = 0, o[a - c] = r);
                            if (i > 0)
                                for (let e = a - u + 1; e >= 0; e--, c++)
                                    if ((r = o[a - c] - i) < 0) i = 1, o[a - c] = r + 10;
                                    else {
                                        i = 0, o[a - c] = r;
                                        break
                                    }
                            return o.slice()
                        }(eH(i), r), s = "-") : r = function(e, t) {
                            let r = new Uint8Array([0]),
                                i = new Uint8Array(e),
                                n = new Uint8Array(t),
                                s = i.slice(0),
                                o = s.length - 1,
                                a = n.slice(0),
                                l = a.length - 1,
                                u = 0,
                                c = l < o ? o : l,
                                d = 0;
                            for (let e = c; e >= 0; e--, d++) u = !0 == d < a.length ? s[o - d] + a[l - d] + r[0] : s[o - d] + r[0], (r[0] = u / 10, !0 == d >= s.length) ? s = ei(new Uint8Array([u % 10]), s) : s[o - d] = u % 10;
                            return r[0] > 0 && (s = ei(r, s)), s
                        }(r, eH(i))), i++, e >>= 1
                    }
                    for (let e = 0; e < r.length; e++) r[e] && (o = !0), o && (s += ed.charAt(r[e]));
                    return !1 === o && (s += ed.charAt(0)), s
                }
            }
            eM.NAME = "IntegerValueBlock", Object.defineProperty(eM.prototype, "valueHex", {
                set: function(e) {
                    this.valueHexView = new Uint8Array(e), this.setValueHex()
                },
                get: function() {
                    return this.valueHexView.slice().buffer
                }
            });
            class eF extends eC {
                constructor(e = {}) {
                    super(e, eM), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 2
                }
                toBigInt() {
                    return eo(), BigInt(this.valueBlock.toString())
                }
                static fromBigInt(e) {
                    eo();
                    let t = BigInt(e),
                        r = new eu,
                        i = t.toString(16).replace(/^-/, ""),
                        n = new Uint8Array(ee.U$.FromHex(i));
                    if (t < 0) {
                        let e = new Uint8Array(n.length + (128 & n[0] ? 1 : 0));
                        e[0] |= 128;
                        let i = BigInt(`0x${ee.U$.ToHex(e)}`) + t,
                            s = ee._H.toUint8Array(ee.U$.FromHex(i.toString(16)));
                        s[0] |= 128, r.write(s)
                    } else 128 & n[0] && r.write(new Uint8Array([0])), r.write(n);
                    return new eF({
                        valueHex: r.final()
                    })
                }
                convertToDER() {
                    let e = new eF({
                        valueHex: this.valueBlock.valueHexView
                    });
                    return e.valueBlock.toDER(), e
                }
                convertFromDER() {
                    return new eF({
                        valueHex: 0 === this.valueBlock.valueHexView[0] ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
                    })
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${this.valueBlock.toString()}`
                }
            }
            eS.Integer = eF, eF.NAME = "INTEGER";
            class ez extends eF {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 10
                }
            }
            eS.Enumerated = ez, ez.NAME = "ENUMERATED";
            class eW extends eb(ex) {
                constructor({
                    valueDec: e = -1,
                    isFirstSid: t = !1,
                    ...r
                } = {}) {
                    super(r), this.valueDec = e, this.isFirstSid = t
                }
                fromBER(e, t, r) {
                    if (!r) return t;
                    let i = ee._H.toUint8Array(e);
                    if (!el(this, i, t, r)) return -1;
                    let n = i.subarray(t, t + r);
                    this.valueHexView = new Uint8Array(r);
                    for (let e = 0; e < r && (this.valueHexView[e] = 127 & n[e], this.blockLength++, (128 & n[e]) != 0); e++);
                    let s = new Uint8Array(this.blockLength);
                    for (let e = 0; e < this.blockLength; e++) s[e] = this.valueHexView[e];
                    return (this.valueHexView = s, (128 & n[this.blockLength - 1]) != 0) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === this.valueHexView[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = et(this.valueHexView, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength)
                }
                set valueBigInt(e) {
                    eo();
                    let t = BigInt(e).toString(2);
                    for (; t.length % 7;) t = "0" + t;
                    let r = new Uint8Array(t.length / 7);
                    for (let e = 0; e < r.length; e++) r[e] = parseInt(t.slice(7 * e, 7 * e + 7), 2) + 128 * (e + 1 < r.length);
                    this.fromBER(r.buffer, 0, r.length)
                }
                toBER(e) {
                    if (this.isHexOnly) {
                        if (e) return new ArrayBuffer(this.valueHexView.byteLength);
                        let t = this.valueHexView,
                            r = new Uint8Array(this.blockLength);
                        for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | t[e];
                        return r[this.blockLength - 1] = t[this.blockLength - 1], r.buffer
                    }
                    let t = er(this.valueDec, 7);
                    if (0 === t.byteLength) return this.error = "Error during encoding SID value", ef;
                    let r = new Uint8Array(t.byteLength);
                    if (!e) {
                        let e = new Uint8Array(t),
                            i = t.byteLength - 1;
                        for (let t = 0; t < i; t++) r[t] = 128 | e[t];
                        r[i] = e[i]
                    }
                    return r
                }
                toString() {
                    let e = "";
                    if (this.isHexOnly) e = ee.U$.ToHex(this.valueHexView);
                    else if (this.isFirstSid) {
                        let t = this.valueDec;
                        this.valueDec <= 39 ? e = "0." : this.valueDec <= 79 ? (e = "1.", t -= 40) : (e = "2.", t -= 80), e += t.toString()
                    } else e = this.valueDec.toString();
                    return e
                }
                toJSON() {
                    return { ...super.toJSON(),
                        valueDec: this.valueDec,
                        isFirstSid: this.isFirstSid
                    }
                }
            }
            eW.NAME = "sidBlock";
            class eq extends ex {
                constructor({
                    value: e = "",
                    ...t
                } = {}) {
                    super(t), this.value = [], e && this.fromString(e)
                }
                fromBER(e, t, r) {
                    let i = t;
                    for (; r > 0;) {
                        let t = new eW;
                        if (-1 === (i = t.fromBER(e, i, r))) {
                            this.blockLength = 0, this.error = t.error;
                            break
                        }
                        0 === this.value.length && (t.isFirstSid = !0), this.blockLength += t.blockLength, r -= t.blockLength, this.value.push(t)
                    }
                    return i
                }
                toBER(e) {
                    let t = [];
                    for (let r = 0; r < this.value.length; r++) {
                        let i = this.value[r].toBER(e);
                        if (0 === i.byteLength) return this.error = this.value[r].error, ef;
                        t.push(i)
                    }
                    return ea(t)
                }
                fromString(e) {
                    this.value = [];
                    let t = 0,
                        r = 0,
                        i = "",
                        n = !1;
                    do
                        if (i = -1 === (r = e.indexOf(".", t)) ? e.substring(t) : e.substring(t, r), t = r + 1, n) {
                            let e = this.value[0],
                                t = 0;
                            switch (e.valueDec) {
                                case 0:
                                    break;
                                case 1:
                                    t = 40;
                                    break;
                                case 2:
                                    t = 80;
                                    break;
                                default:
                                    this.value = [];
                                    return
                            }
                            let r = parseInt(i, 10);
                            if (isNaN(r)) return;
                            e.valueDec = r + t, n = !1
                        } else {
                            let e = new eW;
                            if (i > Number.MAX_SAFE_INTEGER) eo(), e.valueBigInt = BigInt(i);
                            else if (e.valueDec = parseInt(i, 10), isNaN(e.valueDec)) return;
                            this.value.length || (e.isFirstSid = !0, n = !0), this.value.push(e)
                        }
                    while (-1 !== r)
                }
                toString() {
                    let e = "",
                        t = !1;
                    for (let r = 0; r < this.value.length; r++) {
                        t = this.value[r].isHexOnly;
                        let i = this.value[r].toString();
                        0 !== r && (e = `${e}.`), t ? (i = `{${i}}`, this.value[r].isFirstSid ? e = `2.{${i} - 80}` : e += i) : e += i
                    }
                    return e
                }
                toJSON() {
                    let e = { ...super.toJSON(),
                        value: this.toString(),
                        sidArray: []
                    };
                    for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
                    return e
                }
            }
            eq.NAME = "ObjectIdentifierValueBlock";
            class eK extends eC {
                constructor(e = {}) {
                    super(e, eq), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 6
                }
                getValue() {
                    return this.valueBlock.toString()
                }
                setValue(e) {
                    this.valueBlock.fromString(e)
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${this.valueBlock.toString()||"empty"}`
                }
                toJSON() {
                    return { ...super.toJSON(),
                        value: this.getValue()
                    }
                }
            }
            eS.ObjectIdentifier = eK, eK.NAME = "OBJECT IDENTIFIER";
            class eG extends eb(ew) {
                constructor({
                    valueDec: e = 0,
                    ...t
                } = {}) {
                    super(t), this.valueDec = e
                }
                fromBER(e, t, r) {
                    if (0 === r) return t;
                    let i = ee._H.toUint8Array(e);
                    if (!el(this, i, t, r)) return -1;
                    let n = i.subarray(t, t + r);
                    this.valueHexView = new Uint8Array(r);
                    for (let e = 0; e < r && (this.valueHexView[e] = 127 & n[e], this.blockLength++, (128 & n[e]) != 0); e++);
                    let s = new Uint8Array(this.blockLength);
                    for (let e = 0; e < this.blockLength; e++) s[e] = this.valueHexView[e];
                    return (this.valueHexView = s, (128 & n[this.blockLength - 1]) != 0) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === this.valueHexView[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = et(this.valueHexView, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength)
                }
                toBER(e) {
                    if (this.isHexOnly) {
                        if (e) return new ArrayBuffer(this.valueHexView.byteLength);
                        let t = this.valueHexView,
                            r = new Uint8Array(this.blockLength);
                        for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | t[e];
                        return r[this.blockLength - 1] = t[this.blockLength - 1], r.buffer
                    }
                    let t = er(this.valueDec, 7);
                    if (0 === t.byteLength) return this.error = "Error during encoding SID value", ef;
                    let r = new Uint8Array(t.byteLength);
                    if (!e) {
                        let e = new Uint8Array(t),
                            i = t.byteLength - 1;
                        for (let t = 0; t < i; t++) r[t] = 128 | e[t];
                        r[i] = e[i]
                    }
                    return r.buffer
                }
                toString() {
                    let e = "";
                    return this.isHexOnly ? ee.U$.ToHex(this.valueHexView) : this.valueDec.toString()
                }
                toJSON() {
                    return { ...super.toJSON(),
                        valueDec: this.valueDec
                    }
                }
            }
            eG.NAME = "relativeSidBlock";
            class eY extends ex {
                constructor({
                    value: e = "",
                    ...t
                } = {}) {
                    super(t), this.value = [], e && this.fromString(e)
                }
                fromBER(e, t, r) {
                    let i = t;
                    for (; r > 0;) {
                        let t = new eG;
                        if (-1 === (i = t.fromBER(e, i, r))) {
                            this.blockLength = 0, this.error = t.error;
                            break
                        }
                        this.blockLength += t.blockLength, r -= t.blockLength, this.value.push(t)
                    }
                    return i
                }
                toBER(e, t) {
                    let r = [];
                    for (let t = 0; t < this.value.length; t++) {
                        let i = this.value[t].toBER(e);
                        if (0 === i.byteLength) return this.error = this.value[t].error, ef;
                        r.push(i)
                    }
                    return ea(r)
                }
                fromString(e) {
                    this.value = [];
                    let t = 0,
                        r = 0,
                        i = "";
                    do {
                        i = -1 === (r = e.indexOf(".", t)) ? e.substring(t) : e.substring(t, r), t = r + 1;
                        let n = new eG;
                        if (n.valueDec = parseInt(i, 10), isNaN(n.valueDec)) break;
                        this.value.push(n)
                    } while (-1 !== r);
                    return !0
                }
                toString() {
                    let e = "",
                        t = !1;
                    for (let r = 0; r < this.value.length; r++) {
                        t = this.value[r].isHexOnly;
                        let i = this.value[r].toString();
                        0 !== r && (e = `${e}.`), t ? e += i = `{${i}}` : e += i
                    }
                    return e
                }
                toJSON() {
                    let e = { ...super.toJSON(),
                        value: this.toString(),
                        sidArray: []
                    };
                    for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
                    return e
                }
            }
            eY.NAME = "RelativeObjectIdentifierValueBlock";
            class eJ extends eC {
                constructor(e = {}) {
                    super(e, eY), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 13
                }
                getValue() {
                    return this.valueBlock.toString()
                }
                setValue(e) {
                    this.valueBlock.fromString(e)
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${this.valueBlock.toString()||"empty"}`
                }
                toJSON() {
                    return { ...super.toJSON(),
                        value: this.getValue()
                    }
                }
            }
            eS.RelativeObjectIdentifier = eJ, eJ.NAME = "RelativeObjectIdentifier";
            class eQ extends eO {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 16
                }
            }
            eS.Sequence = eQ, eQ.NAME = "SEQUENCE";
            class eX extends eO {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 17
                }
            }
            eS.Set = eX, eX.NAME = "SET";
            class e0 extends eb(ex) {
                constructor({ ...e
                } = {}) {
                    super(e), this.isHexOnly = !0, this.value = ""
                }
                toJSON() {
                    return { ...super.toJSON(),
                        value: this.value
                    }
                }
            }
            e0.NAME = "StringValueBlock";
            class e1 extends e0 {}
            e1.NAME = "SimpleStringValueBlock";
            class e2 extends eI {
                constructor({ ...e
                } = {}) {
                    super(e, e1)
                }
                fromBuffer(e) {
                    this.valueBlock.value = String.fromCharCode.apply(null, ee._H.toUint8Array(e))
                }
                fromString(e) {
                    let t = e.length,
                        r = this.valueBlock.valueHexView = new Uint8Array(t);
                    for (let i = 0; i < t; i++) r[i] = e.charCodeAt(i);
                    this.valueBlock.value = e
                }
            }
            e2.NAME = "SIMPLE STRING";
            class e6 extends e2 {
                fromBuffer(e) {
                    this.valueBlock.valueHexView = ee._H.toUint8Array(e);
                    try {
                        this.valueBlock.value = ee.U$.ToUtf8String(e)
                    } catch (t) {
                        this.warnings.push(`Error during "decodeURIComponent": ${t}, using raw string`), this.valueBlock.value = ee.U$.ToBinary(e)
                    }
                }
                fromString(e) {
                    this.valueBlock.valueHexView = new Uint8Array(ee.U$.FromUtf8String(e)), this.valueBlock.value = e
                }
            }
            e6.NAME = "Utf8StringValueBlock";
            class e8 extends e6 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 12
                }
            }
            eS.Utf8String = e8, e8.NAME = "UTF8String";
            class e4 extends e2 {
                fromBuffer(e) {
                    this.valueBlock.value = ee.U$.ToUtf16String(e), this.valueBlock.valueHexView = ee._H.toUint8Array(e)
                }
                fromString(e) {
                    this.valueBlock.value = e, this.valueBlock.valueHexView = new Uint8Array(ee.U$.FromUtf16String(e))
                }
            }
            e4.NAME = "BmpStringValueBlock";
            class e5 extends e4 {
                constructor({ ...e
                } = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 30
                }
            }
            eS.BmpString = e5, e5.NAME = "BMPString";
            class e3 extends e2 {
                fromBuffer(e) {
                    let t = ArrayBuffer.isView(e) ? e.slice().buffer : e.slice(0),
                        r = new Uint8Array(t);
                    for (let e = 0; e < r.length; e += 4) r[e] = r[e + 3], r[e + 1] = r[e + 2], r[e + 2] = 0, r[e + 3] = 0;
                    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(t))
                }
                fromString(e) {
                    let t = e.length,
                        r = this.valueBlock.valueHexView = new Uint8Array(4 * t);
                    for (let i = 0; i < t; i++) {
                        let t = new Uint8Array(er(e.charCodeAt(i), 8));
                        if (t.length > 4) continue;
                        let n = 4 - t.length;
                        for (let e = t.length - 1; e >= 0; e--) r[4 * i + e + n] = t[e]
                    }
                    this.valueBlock.value = e
                }
            }
            e3.NAME = "UniversalStringValueBlock";
            class e9 extends e3 {
                constructor({ ...e
                } = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 28
                }
            }
            eS.UniversalString = e9, e9.NAME = "UniversalString";
            class e7 extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 18
                }
            }
            eS.NumericString = e7, e7.NAME = "NumericString";
            class te extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 19
                }
            }
            eS.PrintableString = te, te.NAME = "PrintableString";
            class tt extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 20
                }
            }
            eS.TeletexString = tt, tt.NAME = "TeletexString";
            class tr extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 21
                }
            }
            eS.VideotexString = tr, tr.NAME = "VideotexString";
            class ti extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 22
                }
            }
            eS.IA5String = ti, ti.NAME = "IA5String";
            class tn extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 25
                }
            }
            eS.GraphicString = tn, tn.NAME = "GraphicString";
            class ts extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 26
                }
            }
            eS.VisibleString = ts, ts.NAME = "VisibleString";
            class to extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 27
                }
            }
            eS.GeneralString = to, to.NAME = "GeneralString";
            class ta extends e2 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 29
                }
            }
            eS.CharacterString = ta, ta.NAME = "CharacterString";
            class tl extends ts {
                constructor({
                    value: e,
                    valueDate: t,
                    ...r
                } = {}) {
                    if (super(r), this.year = 0, this.month = 0, this.day = 0, this.hour = 0, this.minute = 0, this.second = 0, e) {
                        this.fromString(e), this.valueBlock.valueHexView = new Uint8Array(e.length);
                        for (let t = 0; t < e.length; t++) this.valueBlock.valueHexView[t] = e.charCodeAt(t)
                    }
                    t && (this.fromDate(t), this.valueBlock.valueHexView = new Uint8Array(this.toBuffer())), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 23
                }
                fromBuffer(e) {
                    this.fromString(String.fromCharCode.apply(null, ee._H.toUint8Array(e)))
                }
                toBuffer() {
                    let e = this.toString(),
                        t = new ArrayBuffer(e.length),
                        r = new Uint8Array(t);
                    for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
                    return t
                }
                fromDate(e) {
                    this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds()
                }
                toDate() {
                    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second))
                }
                fromString(e) {
                    let t = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig.exec(e);
                    if (null === t) {
                        this.error = "Wrong input string for conversion";
                        return
                    }
                    let r = parseInt(t[1], 10);
                    r >= 50 ? this.year = 1900 + r : this.year = 2e3 + r, this.month = parseInt(t[2], 10), this.day = parseInt(t[3], 10), this.hour = parseInt(t[4], 10), this.minute = parseInt(t[5], 10), this.second = parseInt(t[6], 10)
                }
                toString(e = "iso") {
                    if ("iso" === e) {
                        let e = Array(7);
                        return e[0] = es(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2), e[1] = es(this.month, 2), e[2] = es(this.day, 2), e[3] = es(this.hour, 2), e[4] = es(this.minute, 2), e[5] = es(this.second, 2), e[6] = "Z", e.join("")
                    }
                    return super.toString(e)
                }
                onAsciiEncoding() {
                    return `${this.constructor.NAME} : ${this.toDate().toISOString()}`
                }
                toJSON() {
                    return { ...super.toJSON(),
                        year: this.year,
                        month: this.month,
                        day: this.day,
                        hour: this.hour,
                        minute: this.minute,
                        second: this.second
                    }
                }
            }
            eS.UTCTime = tl, tl.NAME = "UTCTime";
            class tu extends tl {
                constructor(e = {}) {
                    var t;
                    super(e), null !== (t = this.millisecond) && void 0 !== t || (this.millisecond = 0), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 24
                }
                fromDate(e) {
                    super.fromDate(e), this.millisecond = e.getUTCMilliseconds()
                }
                toDate() {
                    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond))
                }
                fromString(e) {
                    let t, r = !1,
                        i = "",
                        n = "",
                        s = 0,
                        o = 0,
                        a = 0;
                    if ("Z" === e[e.length - 1]) i = e.substring(0, e.length - 1), r = !0;
                    else {
                        if (isNaN(new Number(e[e.length - 1]).valueOf())) throw Error("Wrong input string for conversion");
                        i = e
                    }
                    if (r) {
                        if (-1 !== i.indexOf("+") || -1 !== i.indexOf("-")) throw Error("Wrong input string for conversion")
                    } else {
                        let e = 1,
                            t = i.indexOf("+"),
                            r = "";
                        if (-1 === t && (t = i.indexOf("-"), e = -1), -1 !== t) {
                            if (r = i.substring(t + 1), i = i.substring(0, t), 2 !== r.length && 4 !== r.length) throw Error("Wrong input string for conversion");
                            let n = parseInt(r.substring(0, 2), 10);
                            if (isNaN(n.valueOf())) throw Error("Wrong input string for conversion");
                            if (o = e * n, 4 === r.length) {
                                if (isNaN((n = parseInt(r.substring(2, 4), 10)).valueOf())) throw Error("Wrong input string for conversion");
                                a = e * n
                            }
                        }
                    }
                    let l = i.indexOf(".");
                    if (-1 === l && (l = i.indexOf(",")), -1 !== l) {
                        let e = new Number(`0${i.substring(l)}`);
                        if (isNaN(e.valueOf())) throw Error("Wrong input string for conversion");
                        s = e.valueOf(), n = i.substring(0, l)
                    } else n = i;
                    switch (!0) {
                        case 8 === n.length:
                            if (t = /(\d{4})(\d{2})(\d{2})/ig, -1 !== l) throw Error("Wrong input string for conversion");
                            break;
                        case 10 === n.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})/ig, -1 !== l) {
                                let e = 60 * s;
                                this.minute = Math.floor(e), e = 60 * (e - this.minute), this.second = Math.floor(e), e = 1e3 * (e - this.second), this.millisecond = Math.floor(e)
                            }
                            break;
                        case 12 === n.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig, -1 !== l) {
                                let e = 60 * s;
                                this.second = Math.floor(e), e = 1e3 * (e - this.second), this.millisecond = Math.floor(e)
                            }
                            break;
                        case 14 === n.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig, -1 !== l) {
                                let e = 1e3 * s;
                                this.millisecond = Math.floor(e)
                            }
                            break;
                        default:
                            throw Error("Wrong input string for conversion")
                    }
                    let u = t.exec(n);
                    if (null === u) throw Error("Wrong input string for conversion");
                    for (let e = 1; e < u.length; e++) switch (e) {
                        case 1:
                            this.year = parseInt(u[e], 10);
                            break;
                        case 2:
                            this.month = parseInt(u[e], 10);
                            break;
                        case 3:
                            this.day = parseInt(u[e], 10);
                            break;
                        case 4:
                            this.hour = parseInt(u[e], 10) + o;
                            break;
                        case 5:
                            this.minute = parseInt(u[e], 10) + a;
                            break;
                        case 6:
                            this.second = parseInt(u[e], 10);
                            break;
                        default:
                            throw Error("Wrong input string for conversion")
                    }
                    if (!1 === r) {
                        let e = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
                        this.year = e.getUTCFullYear(), this.month = e.getUTCMonth(), this.day = e.getUTCDay(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds(), this.millisecond = e.getUTCMilliseconds()
                    }
                }
                toString(e = "iso") {
                    if ("iso" === e) {
                        let e = [];
                        return e.push(es(this.year, 4)), e.push(es(this.month, 2)), e.push(es(this.day, 2)), e.push(es(this.hour, 2)), e.push(es(this.minute, 2)), e.push(es(this.second, 2)), 0 !== this.millisecond && (e.push("."), e.push(es(this.millisecond, 3))), e.push("Z"), e.join("")
                    }
                    return super.toString(e)
                }
                toJSON() {
                    return { ...super.toJSON(),
                        millisecond: this.millisecond
                    }
                }
            }
            eS.GeneralizedTime = tu, tu.NAME = "GeneralizedTime";
            class tc extends e8 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 31
                }
            }
            eS.DATE = tc, tc.NAME = "DATE";
            class td extends e8 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 32
                }
            }
            eS.TimeOfDay = td, td.NAME = "TimeOfDay";
            class th extends e8 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 33
                }
            }
            eS.DateTime = th, th.NAME = "DateTime";
            class tp extends e8 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 34
                }
            }
            eS.Duration = tp, tp.NAME = "Duration";
            class tf extends e8 {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 14
                }
            }
            eS.TIME = tf, tf.NAME = "TIME";
            class tg {
                constructor({
                    name: e = "",
                    optional: t = !1
                } = {}) {
                    this.name = e, this.optional = t
                }
            }
            class ty extends tg {
                constructor({
                    value: e = [],
                    ...t
                } = {}) {
                    super(t), this.value = e
                }
            }
            class tm extends tg {
                constructor({
                    value: e = new tg,
                    local: t = !1,
                    ...r
                } = {}) {
                    super(r), this.value = e, this.local = t
                }
            }
            class tv {
                constructor({
                    data: e = eg
                } = {}) {
                    this.dataView = ee._H.toUint8Array(e)
                }
                get data() {
                    return this.dataView.slice().buffer
                }
                set data(e) {
                    this.dataView = ee._H.toUint8Array(e)
                }
                fromBER(e, t, r) {
                    let i = t + r;
                    return this.dataView = ee._H.toUint8Array(e).subarray(t, i), i
                }
                toBER(e) {
                    return this.dataView.slice().buffer
                }
            }

            function tb(e, t, r) {
                if (r instanceof ty) {
                    for (let i = 0; i < r.value.length; i++)
                        if (tb(e, t, r.value[i]).verified) return {
                            verified: !0,
                            result: e
                        }; {
                        let e = {
                            verified: !1,
                            result: {
                                error: "Wrong values for Choice type"
                            }
                        };
                        return r.hasOwnProperty(eh) && (e.name = r.name), e
                    }
                }
                if (r instanceof tg) return r.hasOwnProperty(eh) && (e[r.name] = t), {
                    verified: !0,
                    result: e
                };
                if (e instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong root object"
                    }
                };
                if (t instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 data"
                    }
                };
                if (r instanceof Object == !1 || "idBlock" in r == !1 || "fromBER" in r.idBlock == !1 || "toBER" in r.idBlock == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                let i = r.idBlock.toBER(!1);
                if (0 === i.byteLength) return {
                    verified: !1,
                    result: {
                        error: "Error encoding idBlock for ASN.1 schema"
                    }
                };
                if (-1 === r.idBlock.fromBER(i, 0, i.byteLength)) return {
                    verified: !1,
                    result: {
                        error: "Error decoding idBlock for ASN.1 schema"
                    }
                };
                if (!1 === r.idBlock.hasOwnProperty("tagClass")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.tagClass !== t.idBlock.tagClass) return {
                    verified: !1,
                    result: e
                };
                if (!1 === r.idBlock.hasOwnProperty("tagNumber")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.tagNumber !== t.idBlock.tagNumber) return {
                    verified: !1,
                    result: e
                };
                if (!1 === r.idBlock.hasOwnProperty("isConstructed")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.isConstructed !== t.idBlock.isConstructed) return {
                    verified: !1,
                    result: e
                };
                if (!("isHexOnly" in r.idBlock)) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.isHexOnly !== t.idBlock.isHexOnly) return {
                    verified: !1,
                    result: e
                };
                if (r.idBlock.isHexOnly) {
                    if (ep in r.idBlock == !1) return {
                        verified: !1,
                        result: {
                            error: "Wrong ASN.1 schema"
                        }
                    };
                    let i = r.idBlock.valueHexView,
                        n = t.idBlock.valueHexView;
                    if (i.length !== n.length) return {
                        verified: !1,
                        result: e
                    };
                    for (let t = 0; t < i.length; t++)
                        if (i[t] !== n[1]) return {
                            verified: !1,
                            result: e
                        }
                }
                if (r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && (e[r.name] = t)), r instanceof eS.Constructed) {
                    let i = 0,
                        n = {
                            verified: !1,
                            result: {
                                error: "Unknown error"
                            }
                        },
                        s = r.valueBlock.value.length;
                    if (s > 0 && r.valueBlock.value[0] instanceof tm && (s = t.valueBlock.value.length), 0 === s) return {
                        verified: !0,
                        result: e
                    };
                    if (0 === t.valueBlock.value.length && 0 !== r.valueBlock.value.length) {
                        let t = !0;
                        for (let e = 0; e < r.valueBlock.value.length; e++) t = t && (r.valueBlock.value[e].optional || !1);
                        return t ? {
                            verified: !0,
                            result: e
                        } : (r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && delete e[r.name]), e.error = "Inconsistent object length", {
                            verified: !1,
                            result: e
                        })
                    }
                    for (let o = 0; o < s; o++)
                        if (o - i >= t.valueBlock.value.length) {
                            if (!1 === r.valueBlock.value[o].optional) {
                                let t = {
                                    verified: !1,
                                    result: e
                                };
                                return e.error = "Inconsistent length between ASN.1 data and schema", r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && (delete e[r.name], t.name = r.name)), t
                            }
                        } else if (r.valueBlock.value[0] instanceof tm) {
                        if (!1 === (n = tb(e, t.valueBlock.value[o], r.valueBlock.value[0].value)).verified) {
                            if (!r.valueBlock.value[0].optional) return r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && delete e[r.name]), n;
                            i++
                        }
                        if (eh in r.valueBlock.value[0] && r.valueBlock.value[0].name.length > 0) {
                            let i = {};
                            void 0 === (i = "local" in r.valueBlock.value[0] && r.valueBlock.value[0].local ? t : e)[r.valueBlock.value[0].name] && (i[r.valueBlock.value[0].name] = []), i[r.valueBlock.value[0].name].push(t.valueBlock.value[o])
                        }
                    } else if (!1 === (n = tb(e, t.valueBlock.value[o - i], r.valueBlock.value[o])).verified) {
                        if (!r.valueBlock.value[o].optional) return r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && delete e[r.name]), n;
                        i++
                    }
                    if (!1 === n.verified) {
                        let t = {
                            verified: !1,
                            result: e
                        };
                        return r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && (delete e[r.name], t.name = r.name)), t
                    }
                    return {
                        verified: !0,
                        result: e
                    }
                }
                if (r.primitiveSchema && ep in t.valueBlock) {
                    let i = e_(t.valueBlock.valueHexView);
                    if (-1 === i.offset) {
                        let t = {
                            verified: !1,
                            result: i.result
                        };
                        return r.name && (r.name = r.name.replace(/^\s+|\s+$/g, ""), r.name && (delete e[r.name], t.name = r.name)), t
                    }
                    return tb(e, i.result, r.primitiveSchema)
                }
                return {
                    verified: !0,
                    result: e
                }
            }

            function tw(e, t) {
                if (t instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema type"
                    }
                };
                let r = e_(ee._H.toUint8Array(e));
                return -1 === r.offset ? {
                    verified: !1,
                    result: r.result
                } : tb(r.result, r.result, t)
            }! function(e) {
                e[e.Sequence = 0] = "Sequence", e[e.Set = 1] = "Set", e[e.Choice = 2] = "Choice"
            }(i || (i = {})),
            function(e) {
                e[e.Any = 1] = "Any", e[e.Boolean = 2] = "Boolean", e[e.OctetString = 3] = "OctetString", e[e.BitString = 4] = "BitString", e[e.Integer = 5] = "Integer", e[e.Enumerated = 6] = "Enumerated", e[e.ObjectIdentifier = 7] = "ObjectIdentifier", e[e.Utf8String = 8] = "Utf8String", e[e.BmpString = 9] = "BmpString", e[e.UniversalString = 10] = "UniversalString", e[e.NumericString = 11] = "NumericString", e[e.PrintableString = 12] = "PrintableString", e[e.TeletexString = 13] = "TeletexString", e[e.VideotexString = 14] = "VideotexString", e[e.IA5String = 15] = "IA5String", e[e.GraphicString = 16] = "GraphicString", e[e.VisibleString = 17] = "VisibleString", e[e.GeneralString = 18] = "GeneralString", e[e.CharacterString = 19] = "CharacterString", e[e.UTCTime = 20] = "UTCTime", e[e.GeneralizedTime = 21] = "GeneralizedTime", e[e.DATE = 22] = "DATE", e[e.TimeOfDay = 23] = "TimeOfDay", e[e.DateTime = 24] = "DateTime", e[e.Duration = 25] = "Duration", e[e.TIME = 26] = "TIME", e[e.Null = 27] = "Null"
            }(n || (n = {}));
            class tx {
                constructor(e, t = 0) {
                    if (this.unusedBits = 0, this.value = new ArrayBuffer(0), e) {
                        if ("number" == typeof e) this.fromNumber(e);
                        else if (ee._H.isBufferSource(e)) this.unusedBits = t, this.value = ee._H.toArrayBuffer(e);
                        else throw TypeError("Unsupported type of 'params' argument for BitString")
                    }
                }
                fromASN(e) {
                    if (!(e instanceof e$)) throw TypeError("Argument 'asn' is not instance of ASN.1 BitString");
                    return this.unusedBits = e.valueBlock.unusedBits, this.value = e.valueBlock.valueHex, this
                }
                toASN() {
                    return new e$({
                        unusedBits: this.unusedBits,
                        valueHex: this.value
                    })
                }
                toSchema(e) {
                    return new e$({
                        name: e
                    })
                }
                toNumber() {
                    let e = "";
                    for (let t of new Uint8Array(this.value)) e += t.toString(2).padStart(8, "0");
                    return e = e.split("").reverse().join(""), this.unusedBits && (e = e.slice(this.unusedBits).padStart(this.unusedBits, "0")), parseInt(e, 2)
                }
                fromNumber(e) {
                    let t = e.toString(2),
                        r = t.length + 7 >> 3;
                    this.unusedBits = (r << 3) - t.length;
                    let i = new Uint8Array(r);
                    t = t.padStart(r << 3, "0").split("").reverse().join("");
                    let n = 0;
                    for (; n < r;) i[n] = parseInt(t.slice(n << 3, (n << 3) + 8), 2), n++;
                    this.value = i.buffer
                }
            }
            class tk {
                get byteLength() {
                    return this.buffer.byteLength
                }
                get byteOffset() {
                    return 0
                }
                constructor(e) {
                    "number" == typeof e ? this.buffer = new ArrayBuffer(e) : ee._H.isBufferSource(e) ? this.buffer = ee._H.toArrayBuffer(e) : Array.isArray(e) ? this.buffer = new Uint8Array(e) : this.buffer = new ArrayBuffer(0)
                }
                fromASN(e) {
                    if (!(e instanceof eR)) throw TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
                    return this.buffer = e.valueBlock.valueHex, this
                }
                toASN() {
                    return new eR({
                        valueHex: this.buffer
                    })
                }
                toSchema(e) {
                    return new eR({
                        name: e
                    })
                }
            }
            let tA = {
                    fromASN: e => e instanceof eZ ? null : e.valueBeforeDecodeView,
                    toASN: e => {
                        if (null === e) return new eZ;
                        let t = eT(e);
                        if (t.result.error) throw Error(t.result.error);
                        return t.result
                    }
                },
                tS = {
                    fromASN: e => e.valueBlock.valueHexView.byteLength >= 4 ? e.valueBlock.toString() : e.valueBlock.valueDec,
                    toASN: e => new eF({
                        value: +e
                    })
                },
                tC = {
                    fromASN: e => e.valueBlock.valueDec,
                    toASN: e => new ez({
                        value: e
                    })
                },
                tI = {
                    fromASN: e => e.valueBlock.valueHexView,
                    toASN: e => new eF({
                        valueHex: e
                    })
                },
                tB = {
                    fromASN: e => e.valueBlock.valueHexView,
                    toASN: e => new e$({
                        valueHex: e
                    })
                },
                tE = {
                    fromASN: e => e.valueBlock.toString(),
                    toASN: e => new eK({
                        value: e
                    })
                },
                t_ = {
                    fromASN: e => e.valueBlock.value,
                    toASN: e => new eV({
                        value: e
                    })
                },
                tT = {
                    fromASN: e => e.valueBlock.valueHexView,
                    toASN: e => new eR({
                        valueHex: e
                    })
                };

            function tN(e) {
                return {
                    fromASN: e => e.valueBlock.value,
                    toASN: t => new e({
                        value: t
                    })
                }
            }
            let tO = tN(e8),
                tU = tN(e5),
                tP = tN(e9),
                tZ = tN(e7),
                tL = tN(te),
                tV = tN(tt),
                tj = tN(tr),
                tR = tN(ti),
                tD = tN(tn),
                t$ = tN(ts),
                tH = tN(to),
                tM = tN(ta),
                tF = {
                    fromASN: e => e.toDate(),
                    toASN: e => new tl({
                        valueDate: e
                    })
                },
                tz = {
                    fromASN: e => e.toDate(),
                    toASN: e => new tu({
                        valueDate: e
                    })
                },
                tW = {
                    fromASN: () => null,
                    toASN: () => new eZ
                };

            function tq(e) {
                switch (e) {
                    case n.Any:
                        return tA;
                    case n.BitString:
                        return tB;
                    case n.BmpString:
                        return tU;
                    case n.Boolean:
                        return t_;
                    case n.CharacterString:
                        return tM;
                    case n.Enumerated:
                        return tC;
                    case n.GeneralString:
                        return tH;
                    case n.GeneralizedTime:
                        return tz;
                    case n.GraphicString:
                        return tD;
                    case n.IA5String:
                        return tR;
                    case n.Integer:
                        return tS;
                    case n.Null:
                        return tW;
                    case n.NumericString:
                        return tZ;
                    case n.ObjectIdentifier:
                        return tE;
                    case n.OctetString:
                        return tT;
                    case n.PrintableString:
                        return tL;
                    case n.TeletexString:
                        return tV;
                    case n.UTCTime:
                        return tF;
                    case n.UniversalString:
                        return tP;
                    case n.Utf8String:
                        return tO;
                    case n.VideotexString:
                        return tj;
                    case n.VisibleString:
                        return t$;
                    default:
                        return null
                }
            }

            function tK(e) {
                return "function" == typeof e && e.prototype ? !!e.prototype.toASN && !!e.prototype.fromASN || tK(e.prototype) : !!(e && "object" == typeof e && "toASN" in e && "fromASN" in e)
            }
            class tG {
                constructor() {
                    this.items = new WeakMap
                }
                has(e) {
                    return this.items.has(e)
                }
                get(e, t = !1) {
                    let r = this.items.get(e);
                    if (!r) throw Error(`Cannot get schema for '${e.prototype.constructor.name}' target`);
                    if (t && !r.schema) throw Error(`Schema '${e.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
                    return r
                }
                cache(e) {
                    let t = this.get(e);
                    t.schema || (t.schema = this.create(e, !0))
                }
                createDefault(e) {
                    let t = {
                            type: i.Sequence,
                            items: {}
                        },
                        r = this.findParentSchema(e);
                    return r && (Object.assign(t, r), t.items = Object.assign({}, t.items, r.items)), t
                }
                create(e, t) {
                    let r = this.items.get(e) || this.createDefault(e),
                        s = [];
                    for (let e in r.items) {
                        let o;
                        let a = r.items[e],
                            l = t ? e : "";
                        if ("number" == typeof a.type) {
                            let e = n[a.type],
                                t = V[e];
                            if (!t) throw Error(`Cannot get ASN1 class by name '${e}'`);
                            o = new t({
                                name: l
                            })
                        } else tK(a.type) ? o = new a.type().toSchema(l) : a.optional ? this.get(a.type).type === i.Choice ? o = new tg({
                            name: l
                        }) : (o = this.create(a.type, !1)).name = l : o = new tg({
                            name: l
                        });
                        let u = !!a.optional || void 0 !== a.defaultValue;
                        if (a.repeated && (o.name = "", o = new("set" === a.repeated ? eX : eQ)({
                                name: "",
                                value: [new tm({
                                    name: l,
                                    value: o
                                })]
                            })), null !== a.context && void 0 !== a.context) {
                            if (a.implicit) {
                                if ("number" == typeof a.type || tK(a.type)) {
                                    let e = a.repeated ? eO : eE;
                                    s.push(new e({
                                        name: l,
                                        optional: u,
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: a.context
                                        }
                                    }))
                                } else {
                                    this.cache(a.type);
                                    let e = !!a.repeated,
                                        t = e ? o : this.get(a.type, !0).schema;
                                    t = "valueBlock" in t ? t.valueBlock.value : t.value, s.push(new eO({
                                        name: e ? "" : l,
                                        optional: u,
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: a.context
                                        },
                                        value: t
                                    }))
                                }
                            } else s.push(new eO({
                                optional: u,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: a.context
                                },
                                value: [o]
                            }))
                        } else o.optional = u, s.push(o)
                    }
                    switch (r.type) {
                        case i.Sequence:
                            return new eQ({
                                value: s,
                                name: ""
                            });
                        case i.Set:
                            return new eX({
                                value: s,
                                name: ""
                            });
                        case i.Choice:
                            return new ty({
                                value: s,
                                name: ""
                            });
                        default:
                            throw Error("Unsupported ASN1 type in use")
                    }
                }
                set(e, t) {
                    return this.items.set(e, t), this
                }
                findParentSchema(e) {
                    let t = Object.getPrototypeOf(e);
                    return t ? this.items.get(t) || this.findParentSchema(t) : null
                }
            }
            let tY = new tG,
                tJ = e => t => {
                    let r;
                    tY.has(t) ? r = tY.get(t) : (r = tY.createDefault(t), tY.set(t, r)), Object.assign(r, e)
                },
                tQ = e => (t, r) => {
                    let i;
                    tY.has(t.constructor) ? i = tY.get(t.constructor) : (i = tY.createDefault(t.constructor), tY.set(t.constructor, i));
                    let n = Object.assign({}, e);
                    if ("number" == typeof n.type && !n.converter) {
                        let i = tq(e.type);
                        if (!i) throw Error(`Cannot get default converter for property '${r}' of ${t.constructor.name}`);
                        n.converter = i
                    }
                    i.items[r] = n
                };
            class tX extends Error {
                constructor() {
                    super(...arguments), this.schemas = []
                }
            }
            class t0 {
                static parse(e, t) {
                    let r = eT(e);
                    if (r.result.error) throw Error(r.result.error);
                    return this.fromASN(r.result, t)
                }
                static fromASN(e, t) {
                    var r;
                    try {
                        if (tK(t)) return new t().fromASN(e);
                        let s = tY.get(t);
                        tY.cache(t);
                        let o = s.schema;
                        if (e.constructor === eO && s.type !== i.Choice)
                            for (let t in o = new eO({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: e.idBlock.tagNumber
                                    },
                                    value: s.schema.valueBlock.value
                                }), s.items) delete e[t];
                        let a = tb({}, e, o);
                        if (!a.verified) throw new tX(`Data does not match to ${t.name} ASN1 schema. ${a.result.error}`);
                        let l = new t;
                        if (function e(t) {
                                var r;
                                if (t) {
                                    let i = Object.getPrototypeOf(t);
                                    return (null === (r = null == i ? void 0 : i.prototype) || void 0 === r ? void 0 : r.constructor) === Array || e(i)
                                }
                                return !1
                            }(t)) {
                            if (!("value" in e.valueBlock && Array.isArray(e.valueBlock.value))) throw Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
                            let r = s.itemType;
                            if ("number" != typeof r) return t.from(e.valueBlock.value, e => this.fromASN(e, r)); {
                                let i = tq(r);
                                if (!i) throw Error(`Cannot get default converter for array item of ${t.name} ASN1 schema`);
                                return t.from(e.valueBlock.value, e => i.fromASN(e))
                            }
                        }
                        for (let e in s.items) {
                            let t = a.result[e];
                            if (!t) continue;
                            let i = s.items[e],
                                o = i.type;
                            if ("number" == typeof o || tK(o)) {
                                let s = null !== (r = i.converter) && void 0 !== r ? r : tK(o) ? new o : null;
                                if (!s) throw Error("Converter is empty");
                                if (i.repeated) {
                                    if (i.implicit) {
                                        let r = new("sequence" === i.repeated ? eQ : eX);
                                        r.valueBlock = t.valueBlock;
                                        let n = eT(r.toBER(!1));
                                        if (-1 === n.offset) throw Error(`Cannot parse the child item. ${n.result.error}`);
                                        if (!("value" in n.result.valueBlock && Array.isArray(n.result.valueBlock.value))) throw Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
                                        let o = n.result.valueBlock.value;
                                        l[e] = Array.from(o, e => s.fromASN(e))
                                    } else l[e] = Array.from(t, e => s.fromASN(e))
                                } else {
                                    let r = t;
                                    if (i.implicit) {
                                        let e;
                                        if (tK(o)) e = new o().toSchema("");
                                        else {
                                            let t = n[o],
                                                r = V[t];
                                            if (!r) throw Error(`Cannot get '${t}' class from asn1js module`);
                                            e = new r
                                        }
                                        e.valueBlock = r.valueBlock, r = eT(e.toBER(!1)).result
                                    }
                                    l[e] = s.fromASN(r)
                                }
                            } else if (i.repeated) {
                                if (!Array.isArray(t)) throw Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
                                l[e] = Array.from(t, e => this.fromASN(e, o))
                            } else l[e] = this.fromASN(t, o)
                        }
                        return l
                    } catch (e) {
                        throw e instanceof tX && e.schemas.push(t.name), e
                    }
                }
            }
            class t1 {
                static serialize(e) {
                    return e instanceof eC ? e.toBER(!1) : this.toASN(e).toBER(!1)
                }
                static toASN(e) {
                    let t;
                    if (e && "object" == typeof e && tK(e)) return e.toASN();
                    if (!(e && "object" == typeof e)) throw TypeError("Parameter 1 should be type of Object.");
                    let r = e.constructor,
                        n = tY.get(r);
                    tY.cache(r);
                    let s = [];
                    if (n.itemType) {
                        if (!Array.isArray(e)) throw TypeError("Parameter 1 should be type of Array.");
                        if ("number" == typeof n.itemType) {
                            let t = tq(n.itemType);
                            if (!t) throw Error(`Cannot get default converter for array item of ${r.name} ASN1 schema`);
                            s = e.map(e => t.toASN(e))
                        } else s = e.map(e => this.toAsnItem({
                            type: n.itemType
                        }, "[]", r, e))
                    } else
                        for (let t in n.items) {
                            let i = n.items[t],
                                o = e[t];
                            if (void 0 === o || i.defaultValue === o || "object" == typeof i.defaultValue && "object" == typeof o && function(e, t) {
                                    if (!(e && t) || e.byteLength !== t.byteLength) return !1;
                                    let r = new Uint8Array(e),
                                        i = new Uint8Array(t);
                                    for (let t = 0; t < e.byteLength; t++)
                                        if (r[t] !== i[t]) return !1;
                                    return !0
                                }(this.serialize(i.defaultValue), this.serialize(o))) continue;
                            let a = t1.toAsnItem(i, t, r, o);
                            if ("number" == typeof i.context) {
                                if (i.implicit) {
                                    if (!i.repeated && ("number" == typeof i.type || tK(i.type))) {
                                        let e = {};
                                        e.valueHex = a instanceof eZ ? a.valueBeforeDecodeView : a.valueBlock.toBER(), s.push(new eE({
                                            optional: i.optional,
                                            idBlock: {
                                                tagClass: 3,
                                                tagNumber: i.context
                                            },
                                            ...e
                                        }))
                                    } else s.push(new eO({
                                        optional: i.optional,
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: i.context
                                        },
                                        value: a.valueBlock.value
                                    }))
                                } else s.push(new eO({
                                    optional: i.optional,
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: i.context
                                    },
                                    value: [a]
                                }))
                            } else i.repeated ? s = s.concat(a) : s.push(a)
                        }
                    switch (n.type) {
                        case i.Sequence:
                            t = new eQ({
                                value: s
                            });
                            break;
                        case i.Set:
                            t = new eX({
                                value: s
                            });
                            break;
                        case i.Choice:
                            if (!s[0]) throw Error(`Schema '${r.name}' has wrong data. Choice cannot be empty.`);
                            t = s[0]
                    }
                    return t
                }
                static toAsnItem(e, t, r, i) {
                    let s;
                    if ("number" == typeof e.type) {
                        let o = e.converter;
                        if (!o) throw Error(`Property '${t}' doesn't have converter for type ${n[e.type]} in schema '${r.name}'`);
                        if (e.repeated) {
                            if (!Array.isArray(i)) throw TypeError("Parameter 'objProp' should be type of Array.");
                            let t = Array.from(i, e => o.toASN(e));
                            s = new("sequence" === e.repeated ? eQ : eX)({
                                value: t
                            })
                        } else s = o.toASN(i)
                    } else if (e.repeated) {
                        if (!Array.isArray(i)) throw TypeError("Parameter 'objProp' should be type of Array.");
                        let t = Array.from(i, e => this.toASN(e));
                        s = new("sequence" === e.repeated ? eQ : eX)({
                            value: t
                        })
                    } else s = this.toASN(i);
                    return s
                }
            }
            class t2 extends Array {
                constructor(e = []) {
                    if ("number" == typeof e) super(e);
                    else
                        for (let t of (super(), e)) this.push(t)
                }
            }
            class t6 {
                static serialize(e) {
                    return t1.serialize(e)
                }
                static parse(e, t) {
                    return t0.parse(e, t)
                }
                static toString(e) {
                    let t = eT(ee._H.isBufferSource(e) ? ee._H.toArrayBuffer(e) : t6.serialize(e));
                    if (-1 === t.offset) throw Error(`Cannot decode ASN.1 data. ${t.result.error}`);
                    return t.result.toString()
                }
            }
            var t8 = r(13829),
                t4 = r(27827);
            class t5 {
                static decodeIP(e) {
                    if (64 === e.length && 0 === parseInt(e, 16)) return "::/0";
                    if (16 !== e.length) return e;
                    let t = parseInt(e.slice(8), 16).toString(2).split("").reduce((e, t) => e + +t, 0),
                        r = e.slice(0, 8).replace(/(.{2})/g, e => `${parseInt(e,16)}.`);
                    return r = r.slice(0, -1), `${r}/${t}`
                }
                static toString(e) {
                    if (4 === e.byteLength || 16 === e.byteLength) {
                        let t = new Uint8Array(e);
                        return t4.fromByteArray(Array.from(t)).toString()
                    }
                    return this.decodeIP(ee.U$.ToHex(e))
                }
                static fromString(e) {
                    return new Uint8Array(t4.parse(e).toByteArray()).buffer
                }
            }
            let t3 = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
                toString() {
                    return this.bmpString || this.printableString || this.teletexString || this.universalString || this.utf8String || ""
                }
            };
            (0, t8.Cg)([tQ({
                type: n.TeletexString
            })], t3.prototype, "teletexString", void 0), (0, t8.Cg)([tQ({
                type: n.PrintableString
            })], t3.prototype, "printableString", void 0), (0, t8.Cg)([tQ({
                type: n.UniversalString
            })], t3.prototype, "universalString", void 0), (0, t8.Cg)([tQ({
                type: n.Utf8String
            })], t3.prototype, "utf8String", void 0), (0, t8.Cg)([tQ({
                type: n.BmpString
            })], t3.prototype, "bmpString", void 0), t3 = (0, t8.Cg)([tJ({
                type: i.Choice
            })], t3);
            let t9 = class extends t3 {
                constructor(e = {}) {
                    super(e), Object.assign(this, e)
                }
                toString() {
                    return this.ia5String || (this.anyValue ? ee.U$.ToHex(this.anyValue) : super.toString())
                }
            };
            (0, t8.Cg)([tQ({
                type: n.IA5String
            })], t9.prototype, "ia5String", void 0), (0, t8.Cg)([tQ({
                type: n.Any
            })], t9.prototype, "anyValue", void 0), t9 = (0, t8.Cg)([tJ({
                type: i.Choice
            })], t9);
            class t7 {
                constructor(e = {}) {
                    this.type = "", this.value = new t9, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], t7.prototype, "type", void 0), (0, t8.Cg)([tQ({
                type: t9
            })], t7.prototype, "value", void 0);
            let re = s = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, s.prototype)
                }
            };
            re = s = (0, t8.Cg)([tJ({
                type: i.Set,
                itemType: t7
            })], re);
            let rt = o = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, o.prototype)
                }
            };
            rt = o = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: re
            })], rt);
            let rr = a = class extends rt {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, a.prototype)
                }
            };
            rr = a = (0, t8.Cg)([tJ({
                type: i.Sequence
            })], rr);
            class ri {
                constructor(e = {}) {
                    this.typeId = "", this.value = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], ri.prototype, "typeId", void 0), (0, t8.Cg)([tQ({
                type: n.Any,
                context: 0
            })], ri.prototype, "value", void 0);
            class rn {
                constructor(e = {}) {
                    this.partyName = new t3, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: t3,
                optional: !0,
                context: 0,
                implicit: !0
            })], rn.prototype, "nameAssigner", void 0), (0, t8.Cg)([tQ({
                type: t3,
                context: 1,
                implicit: !0
            })], rn.prototype, "partyName", void 0);
            let rs = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            };
            (0, t8.Cg)([tQ({
                type: ri,
                context: 0,
                implicit: !0
            })], rs.prototype, "otherName", void 0), (0, t8.Cg)([tQ({
                type: n.IA5String,
                context: 1,
                implicit: !0
            })], rs.prototype, "rfc822Name", void 0), (0, t8.Cg)([tQ({
                type: n.IA5String,
                context: 2,
                implicit: !0
            })], rs.prototype, "dNSName", void 0), (0, t8.Cg)([tQ({
                type: n.Any,
                context: 3,
                implicit: !0
            })], rs.prototype, "x400Address", void 0), (0, t8.Cg)([tQ({
                type: rr,
                context: 4,
                implicit: !1
            })], rs.prototype, "directoryName", void 0), (0, t8.Cg)([tQ({
                type: rn,
                context: 5
            })], rs.prototype, "ediPartyName", void 0), (0, t8.Cg)([tQ({
                type: n.IA5String,
                context: 6,
                implicit: !0
            })], rs.prototype, "uniformResourceIdentifier", void 0), (0, t8.Cg)([tQ({
                type: n.OctetString,
                context: 7,
                implicit: !0,
                converter: {
                    fromASN: e => t5.toString(tT.fromASN(e)),
                    toASN: e => tT.toASN(t5.fromString(e))
                }
            })], rs.prototype, "iPAddress", void 0), (0, t8.Cg)([tQ({
                type: n.ObjectIdentifier,
                context: 8,
                implicit: !0
            })], rs.prototype, "registeredID", void 0), rs = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rs);
            class ro {
                constructor(e = {}) {
                    this.accessMethod = "", this.accessLocation = new rs, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], ro.prototype, "accessMethod", void 0), (0, t8.Cg)([tQ({
                type: rs
            })], ro.prototype, "accessLocation", void 0);
            let ra = l = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, l.prototype)
                }
            };
            ra = l = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: ro
            })], ra);
            class rl extends tk {}
            class ru {
                constructor(e = {}) {
                    e && Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rl,
                context: 0,
                optional: !0,
                implicit: !0
            })], ru.prototype, "keyIdentifier", void 0), (0, t8.Cg)([tQ({
                type: rs,
                context: 1,
                optional: !0,
                implicit: !0,
                repeated: "sequence"
            })], ru.prototype, "authorityCertIssuer", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 2,
                optional: !0,
                implicit: !0,
                converter: tI
            })], ru.prototype, "authorityCertSerialNumber", void 0);
            class rc {
                constructor(e = {}) {
                    this.cA = !1, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Boolean,
                defaultValue: !1
            })], rc.prototype, "cA", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                optional: !0
            })], rc.prototype, "pathLenConstraint", void 0);
            let rd = u = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, u.prototype)
                }
            };
            rd = u = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rs
            })], rd);
            let rh = c = class extends rd {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, c.prototype)
                }
            };
            rh = c = (0, t8.Cg)([tJ({
                type: i.Sequence
            })], rh);
            let rp = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
                toString() {
                    return this.ia5String || this.visibleString || this.bmpString || this.utf8String || ""
                }
            };
            (0, t8.Cg)([tQ({
                type: n.IA5String
            })], rp.prototype, "ia5String", void 0), (0, t8.Cg)([tQ({
                type: n.VisibleString
            })], rp.prototype, "visibleString", void 0), (0, t8.Cg)([tQ({
                type: n.BmpString
            })], rp.prototype, "bmpString", void 0), (0, t8.Cg)([tQ({
                type: n.Utf8String
            })], rp.prototype, "utf8String", void 0), rp = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rp);
            class rf {
                constructor(e = {}) {
                    this.organization = new rp, this.noticeNumbers = [], Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rp
            })], rf.prototype, "organization", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                repeated: "sequence"
            })], rf.prototype, "noticeNumbers", void 0);
            class rg {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rf,
                optional: !0
            })], rg.prototype, "noticeRef", void 0), (0, t8.Cg)([tQ({
                type: rp,
                optional: !0
            })], rg.prototype, "explicitText", void 0);
            let ry = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            };
            (0, t8.Cg)([tQ({
                type: n.IA5String
            })], ry.prototype, "cPSuri", void 0), (0, t8.Cg)([tQ({
                type: rg
            })], ry.prototype, "userNotice", void 0), ry = (0, t8.Cg)([tJ({
                type: i.Choice
            })], ry);
            class rm {
                constructor(e = {}) {
                    this.policyQualifierId = "", this.qualifier = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rm.prototype, "policyQualifierId", void 0), (0, t8.Cg)([tQ({
                type: n.Any
            })], rm.prototype, "qualifier", void 0);
            class rv {
                constructor(e = {}) {
                    this.policyIdentifier = "", Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rv.prototype, "policyIdentifier", void 0), (0, t8.Cg)([tQ({
                type: rm,
                repeated: "sequence",
                optional: !0
            })], rv.prototype, "policyQualifiers", void 0);
            let rb = d = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, d.prototype)
                }
            };
            rb = d = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rv
            })], rb);
            let rw = class {
                constructor(e = 0) {
                    this.value = e
                }
            };
            (0, t8.Cg)([tQ({
                type: n.Integer
            })], rw.prototype, "value", void 0), rw = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rw);
            let rx = class extends rw {};
            rx = (0, t8.Cg)([tJ({
                    type: i.Choice
                })], rx),
                function(e) {
                    e[e.unused = 1] = "unused", e[e.keyCompromise = 2] = "keyCompromise", e[e.cACompromise = 4] = "cACompromise", e[e.affiliationChanged = 8] = "affiliationChanged", e[e.superseded = 16] = "superseded", e[e.cessationOfOperation = 32] = "cessationOfOperation", e[e.certificateHold = 64] = "certificateHold", e[e.privilegeWithdrawn = 128] = "privilegeWithdrawn", e[e.aACompromise = 256] = "aACompromise"
                }(p || (p = {}));
            class rk extends tx {
                toJSON() {
                    let e = [],
                        t = this.toNumber();
                    return t & p.aACompromise && e.push("aACompromise"), t & p.affiliationChanged && e.push("affiliationChanged"), t & p.cACompromise && e.push("cACompromise"), t & p.certificateHold && e.push("certificateHold"), t & p.cessationOfOperation && e.push("cessationOfOperation"), t & p.keyCompromise && e.push("keyCompromise"), t & p.privilegeWithdrawn && e.push("privilegeWithdrawn"), t & p.superseded && e.push("superseded"), t & p.unused && e.push("unused"), e
                }
                toString() {
                    return `[${this.toJSON().join(", ")}]`
                }
            }
            let rA = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            };
            (0, t8.Cg)([tQ({
                type: rs,
                context: 0,
                repeated: "sequence",
                implicit: !0
            })], rA.prototype, "fullName", void 0), (0, t8.Cg)([tQ({
                type: re,
                context: 1,
                implicit: !0
            })], rA.prototype, "nameRelativeToCRLIssuer", void 0), rA = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rA);
            class rS {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rA,
                context: 0,
                optional: !0
            })], rS.prototype, "distributionPoint", void 0), (0, t8.Cg)([tQ({
                type: rk,
                context: 1,
                optional: !0,
                implicit: !0
            })], rS.prototype, "reasons", void 0), (0, t8.Cg)([tQ({
                type: rs,
                context: 2,
                optional: !0,
                repeated: "sequence",
                implicit: !0
            })], rS.prototype, "cRLIssuer", void 0);
            let rC = h = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, h.prototype)
                }
            };
            rC = h = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rS
            })], rC);
            let rI = f = class extends rC {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, f.prototype)
                }
            };
            rI = f = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rS
            })], rI);
            class rB {
                constructor(e = {}) {
                    this.onlyContainsUserCerts = rB.ONLY, this.onlyContainsCACerts = rB.ONLY, this.indirectCRL = rB.ONLY, this.onlyContainsAttributeCerts = rB.ONLY, Object.assign(this, e)
                }
            }
            rB.ONLY = !1, (0, t8.Cg)([tQ({
                    type: rA,
                    context: 0,
                    optional: !0
                })], rB.prototype, "distributionPoint", void 0), (0, t8.Cg)([tQ({
                    type: n.Boolean,
                    context: 1,
                    defaultValue: rB.ONLY,
                    implicit: !0
                })], rB.prototype, "onlyContainsUserCerts", void 0), (0, t8.Cg)([tQ({
                    type: n.Boolean,
                    context: 2,
                    defaultValue: rB.ONLY,
                    implicit: !0
                })], rB.prototype, "onlyContainsCACerts", void 0), (0, t8.Cg)([tQ({
                    type: rk,
                    context: 3,
                    optional: !0,
                    implicit: !0
                })], rB.prototype, "onlySomeReasons", void 0), (0, t8.Cg)([tQ({
                    type: n.Boolean,
                    context: 4,
                    defaultValue: rB.ONLY,
                    implicit: !0
                })], rB.prototype, "indirectCRL", void 0), (0, t8.Cg)([tQ({
                    type: n.Boolean,
                    context: 5,
                    defaultValue: rB.ONLY,
                    implicit: !0
                })], rB.prototype, "onlyContainsAttributeCerts", void 0),
                function(e) {
                    e[e.unspecified = 0] = "unspecified", e[e.keyCompromise = 1] = "keyCompromise", e[e.cACompromise = 2] = "cACompromise", e[e.affiliationChanged = 3] = "affiliationChanged", e[e.superseded = 4] = "superseded", e[e.cessationOfOperation = 5] = "cessationOfOperation", e[e.certificateHold = 6] = "certificateHold", e[e.removeFromCRL = 8] = "removeFromCRL", e[e.privilegeWithdrawn = 9] = "privilegeWithdrawn", e[e.aACompromise = 10] = "aACompromise"
                }(g || (g = {}));
            let rE = class {
                constructor(e = g.unspecified) {
                    this.reason = g.unspecified, this.reason = e
                }
                toJSON() {
                    return g[this.reason]
                }
                toString() {
                    return this.toJSON()
                }
            };
            (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], rE.prototype, "reason", void 0), rE = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rE);
            let r_ = y = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, y.prototype)
                }
            };
            r_ = y = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: n.ObjectIdentifier
            })], r_);
            let rT = class {
                constructor(e = new ArrayBuffer(0)) {
                    this.value = e
                }
            };
            (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], rT.prototype, "value", void 0), rT = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rT);
            let rN = class {
                constructor(e) {
                    this.value = new Date, e && (this.value = e)
                }
            };
            (0, t8.Cg)([tQ({
                type: n.GeneralizedTime
            })], rN.prototype, "value", void 0), rN = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rN);
            let rO = m = class extends rd {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, m.prototype)
                }
            };
            rO = m = (0, t8.Cg)([tJ({
                    type: i.Sequence
                })], rO),
                function(e) {
                    e[e.digitalSignature = 1] = "digitalSignature", e[e.nonRepudiation = 2] = "nonRepudiation", e[e.keyEncipherment = 4] = "keyEncipherment", e[e.dataEncipherment = 8] = "dataEncipherment", e[e.keyAgreement = 16] = "keyAgreement", e[e.keyCertSign = 32] = "keyCertSign", e[e.cRLSign = 64] = "cRLSign", e[e.encipherOnly = 128] = "encipherOnly", e[e.decipherOnly = 256] = "decipherOnly"
                }(v || (v = {}));
            class rU {
                constructor(e = {}) {
                    this.base = new rs, this.minimum = 0, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rs
            })], rU.prototype, "base", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 0,
                defaultValue: 0,
                implicit: !0
            })], rU.prototype, "minimum", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 1,
                optional: !0,
                implicit: !0
            })], rU.prototype, "maximum", void 0);
            let rP = b = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, b.prototype)
                }
            };
            rP = b = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rU
            })], rP);
            class rZ {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rP,
                context: 0,
                optional: !0,
                implicit: !0
            })], rZ.prototype, "permittedSubtrees", void 0), (0, t8.Cg)([tQ({
                type: rP,
                context: 1,
                optional: !0,
                implicit: !0
            })], rZ.prototype, "excludedSubtrees", void 0);
            class rL {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                context: 0,
                implicit: !0,
                optional: !0,
                converter: tI
            })], rL.prototype, "requireExplicitPolicy", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 1,
                implicit: !0,
                optional: !0,
                converter: tI
            })], rL.prototype, "inhibitPolicyMapping", void 0);
            class rV {
                constructor(e = {}) {
                    this.issuerDomainPolicy = "", this.subjectDomainPolicy = "", Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rV.prototype, "issuerDomainPolicy", void 0), (0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rV.prototype, "subjectDomainPolicy", void 0);
            let rj = w = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, w.prototype)
                }
            };
            rj = w = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rV
            })], rj);
            let rR = x = class extends rd {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, x.prototype)
                }
            };
            rR = x = (0, t8.Cg)([tJ({
                type: i.Sequence
            })], rR);
            class rD {
                constructor(e = {}) {
                    this.type = "", this.values = [], Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rD.prototype, "type", void 0), (0, t8.Cg)([tQ({
                type: n.Any,
                repeated: "set"
            })], rD.prototype, "values", void 0);
            let r$ = k = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, k.prototype)
                }
            };
            r$ = k = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: rD
            })], r$);
            class rH {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.GeneralizedTime,
                context: 0,
                implicit: !0,
                optional: !0
            })], rH.prototype, "notBefore", void 0), (0, t8.Cg)([tQ({
                type: n.GeneralizedTime,
                context: 1,
                implicit: !0,
                optional: !0
            })], rH.prototype, "notAfter", void 0),
            function(e) {
                e[e.keyUpdateAllowed = 1] = "keyUpdateAllowed", e[e.newExtensions = 2] = "newExtensions", e[e.pKIXCertificate = 4] = "pKIXCertificate"
            }(A || (A = {}));
            class rM extends tx {
                toJSON() {
                    let e = [],
                        t = this.toNumber();
                    return t & A.pKIXCertificate && e.push("pKIXCertificate"), t & A.newExtensions && e.push("newExtensions"), t & A.keyUpdateAllowed && e.push("keyUpdateAllowed"), e
                }
                toString() {
                    return `[${this.toJSON().join(", ")}]`
                }
            }
            class rF {
                constructor(e = {}) {
                    this.entrustVers = "", this.entrustInfoFlags = new rM, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.GeneralString
            })], rF.prototype, "entrustVers", void 0), (0, t8.Cg)([tQ({
                type: rM
            })], rF.prototype, "entrustInfoFlags", void 0);
            let rz = S = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, S.prototype)
                }
            };
            rz = S = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: ro
            })], rz);
            class rW {
                constructor(e = {}) {
                    this.algorithm = "", Object.assign(this, e)
                }
                isEqual(e) {
                    return e instanceof rW && e.algorithm == this.algorithm && (e.parameters && this.parameters && ee.n4(e.parameters, this.parameters) || e.parameters === this.parameters)
                }
            }(0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rW.prototype, "algorithm", void 0), (0, t8.Cg)([tQ({
                type: n.Any,
                optional: !0
            })], rW.prototype, "parameters", void 0);
            class rq {
                constructor(e = {}) {
                    this.algorithm = new rW, this.subjectPublicKey = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rW
            })], rq.prototype, "algorithm", void 0), (0, t8.Cg)([tQ({
                type: n.BitString
            })], rq.prototype, "subjectPublicKey", void 0);
            let rK = class {
                constructor(e) {
                    if (e) {
                        if ("string" == typeof e || "number" == typeof e || e instanceof Date) {
                            let t = new Date(e);
                            t.getUTCFullYear() > 2049 ? this.generalTime = t : this.utcTime = t
                        } else Object.assign(this, e)
                    }
                }
                getTime() {
                    let e = this.utcTime || this.generalTime;
                    if (!e) throw Error("Cannot get time from CHOICE object");
                    return e
                }
            };
            (0, t8.Cg)([tQ({
                type: n.UTCTime
            })], rK.prototype, "utcTime", void 0), (0, t8.Cg)([tQ({
                type: n.GeneralizedTime
            })], rK.prototype, "generalTime", void 0), rK = (0, t8.Cg)([tJ({
                type: i.Choice
            })], rK);
            class rG {
                constructor(e) {
                    this.notBefore = new rK(new Date), this.notAfter = new rK(new Date), e && (this.notBefore = new rK(e.notBefore), this.notAfter = new rK(e.notAfter))
                }
            }(0, t8.Cg)([tQ({
                type: rK
            })], rG.prototype, "notBefore", void 0), (0, t8.Cg)([tQ({
                type: rK
            })], rG.prototype, "notAfter", void 0);
            class rY {
                constructor(e = {}) {
                    this.extnID = "", this.critical = rY.CRITICAL, this.extnValue = new tk, Object.assign(this, e)
                }
            }
            rY.CRITICAL = !1, (0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], rY.prototype, "extnID", void 0), (0, t8.Cg)([tQ({
                type: n.Boolean,
                defaultValue: rY.CRITICAL
            })], rY.prototype, "critical", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], rY.prototype, "extnValue", void 0);
            let rJ = C = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, C.prototype)
                }
            };
            rJ = C = (0, t8.Cg)([tJ({
                    type: i.Sequence,
                    itemType: rY
                })], rJ),
                function(e) {
                    e[e.v1 = 0] = "v1", e[e.v2 = 1] = "v2", e[e.v3 = 2] = "v3"
                }(I || (I = {}));
            class rQ {
                constructor(e = {}) {
                    this.version = I.v1, this.serialNumber = new ArrayBuffer(0), this.signature = new rW, this.issuer = new rr, this.validity = new rG, this.subject = new rr, this.subjectPublicKeyInfo = new rq, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                context: 0,
                defaultValue: I.v1
            })], rQ.prototype, "version", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], rQ.prototype, "serialNumber", void 0), (0, t8.Cg)([tQ({
                type: rW
            })], rQ.prototype, "signature", void 0), (0, t8.Cg)([tQ({
                type: rr
            })], rQ.prototype, "issuer", void 0), (0, t8.Cg)([tQ({
                type: rG
            })], rQ.prototype, "validity", void 0), (0, t8.Cg)([tQ({
                type: rr
            })], rQ.prototype, "subject", void 0), (0, t8.Cg)([tQ({
                type: rq
            })], rQ.prototype, "subjectPublicKeyInfo", void 0), (0, t8.Cg)([tQ({
                type: n.BitString,
                context: 1,
                implicit: !0,
                optional: !0
            })], rQ.prototype, "issuerUniqueID", void 0), (0, t8.Cg)([tQ({
                type: n.BitString,
                context: 2,
                implicit: !0,
                optional: !0
            })], rQ.prototype, "subjectUniqueID", void 0), (0, t8.Cg)([tQ({
                type: rJ,
                context: 3,
                optional: !0
            })], rQ.prototype, "extensions", void 0);
            class rX {
                constructor(e = {}) {
                    this.tbsCertificate = new rQ, this.signatureAlgorithm = new rW, this.signatureValue = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rQ
            })], rX.prototype, "tbsCertificate", void 0), (0, t8.Cg)([tQ({
                type: rW
            })], rX.prototype, "signatureAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: n.BitString
            })], rX.prototype, "signatureValue", void 0);
            class r0 {
                constructor(e = {}) {
                    this.userCertificate = new ArrayBuffer(0), this.revocationDate = new rK, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], r0.prototype, "userCertificate", void 0), (0, t8.Cg)([tQ({
                type: rK
            })], r0.prototype, "revocationDate", void 0), (0, t8.Cg)([tQ({
                type: rY,
                optional: !0,
                repeated: "sequence"
            })], r0.prototype, "crlEntryExtensions", void 0);
            class r1 {
                constructor(e = {}) {
                    this.signature = new rW, this.issuer = new rr, this.thisUpdate = new rK, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                optional: !0
            })], r1.prototype, "version", void 0), (0, t8.Cg)([tQ({
                type: rW
            })], r1.prototype, "signature", void 0), (0, t8.Cg)([tQ({
                type: rr
            })], r1.prototype, "issuer", void 0), (0, t8.Cg)([tQ({
                type: rK
            })], r1.prototype, "thisUpdate", void 0), (0, t8.Cg)([tQ({
                type: rK,
                optional: !0
            })], r1.prototype, "nextUpdate", void 0), (0, t8.Cg)([tQ({
                type: r0,
                repeated: "sequence",
                optional: !0
            })], r1.prototype, "revokedCertificates", void 0), (0, t8.Cg)([tQ({
                type: rY,
                optional: !0,
                context: 0,
                repeated: "sequence"
            })], r1.prototype, "crlExtensions", void 0);
            class r2 {
                constructor(e = {}) {
                    this.tbsCertList = new r1, this.signatureAlgorithm = new rW, this.signature = new ArrayBuffer(0), Object.assign(this, e)
                }
            }

            function r6(e) {
                return new rW({
                    algorithm: e
                })
            }(0, t8.Cg)([tQ({
                type: r1
            })], r2.prototype, "tbsCertList", void 0), (0, t8.Cg)([tQ({
                type: rW
            })], r2.prototype, "signatureAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: n.BitString
            })], r2.prototype, "signature", void 0), r6("1.2.840.10045.4.1"), r6("1.2.840.10045.4.3.1"), r6("1.2.840.10045.4.3.2"), r6("1.2.840.10045.4.3.3"), r6("1.2.840.10045.4.3.4");
            let r8 = class {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            };
            (0, t8.Cg)([tQ({
                type: n.ObjectIdentifier
            })], r8.prototype, "namedCurve", void 0), r8 = (0, t8.Cg)([tJ({
                type: i.Choice
            })], r8);
            class r4 {
                constructor(e = {}) {
                    this.version = 1, this.privateKey = new tk, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer
            })], r4.prototype, "version", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], r4.prototype, "privateKey", void 0), (0, t8.Cg)([tQ({
                type: r8,
                context: 0,
                optional: !0
            })], r4.prototype, "parameters", void 0), (0, t8.Cg)([tQ({
                type: n.BitString,
                context: 1,
                optional: !0
            })], r4.prototype, "publicKey", void 0);
            class r5 {
                constructor(e = {}) {
                    this.r = new ArrayBuffer(0), this.s = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], r5.prototype, "r", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], r5.prototype, "s", void 0);
            let r3 = "1.2.840.113549.1.1",
                r9 = `${r3}.1`,
                r7 = `${r3}.7`,
                ie = `${r3}.9`,
                it = `${r3}.10`,
                ir = `${r3}.2`,
                ii = `${r3}.4`,
                is = `${r3}.5`,
                io = `${r3}.12`,
                ia = `${r3}.13`,
                il = `${r3}.15`,
                iu = `${r3}.16`,
                ic = `${r3}.8`;

            function id(e) {
                return new rW({
                    algorithm: e,
                    parameters: null
                })
            }
            id("1.2.840.113549.2.2"), id("1.2.840.113549.2.5");
            let ih = id("1.3.14.3.2.26");
            id("2.16.840.1.101.3.4.2.4"), id("2.16.840.1.101.3.4.2.1"), id("2.16.840.1.101.3.4.2.2"), id("2.16.840.1.101.3.4.2.3"), id("2.16.840.1.101.3.4.2.5"), id("2.16.840.1.101.3.4.2.6");
            let ip = new rW({
                    algorithm: ic,
                    parameters: t6.serialize(ih)
                }),
                ig = new rW({
                    algorithm: ie,
                    parameters: t6.serialize(tT.toASN(new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]).buffer))
                });
            id(r9), id(ir), id(ii), id(is), id(il), id(iu), id(io), id(ia), id(il), id(iu);
            class iy {
                constructor(e = {}) {
                    this.hashAlgorithm = new rW(ih), this.maskGenAlgorithm = new rW({
                        algorithm: ic,
                        parameters: t6.serialize(ih)
                    }), this.pSourceAlgorithm = new rW(ig), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rW,
                context: 0,
                defaultValue: ih
            })], iy.prototype, "hashAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: rW,
                context: 1,
                defaultValue: ip
            })], iy.prototype, "maskGenAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: rW,
                context: 2,
                defaultValue: ig
            })], iy.prototype, "pSourceAlgorithm", void 0), new rW({
                algorithm: r7,
                parameters: t6.serialize(new iy)
            });
            class im {
                constructor(e = {}) {
                    this.hashAlgorithm = new rW(ih), this.maskGenAlgorithm = new rW({
                        algorithm: ic,
                        parameters: t6.serialize(ih)
                    }), this.saltLength = 20, this.trailerField = 1, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rW,
                context: 0,
                defaultValue: ih
            })], im.prototype, "hashAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: rW,
                context: 1,
                defaultValue: ip
            })], im.prototype, "maskGenAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 2,
                defaultValue: 20
            })], im.prototype, "saltLength", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                context: 3,
                defaultValue: 1
            })], im.prototype, "trailerField", void 0), new rW({
                algorithm: it,
                parameters: t6.serialize(new im)
            });
            class iv {
                constructor(e = {}) {
                    this.digestAlgorithm = new rW, this.digest = new tk, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: rW
            })], iv.prototype, "digestAlgorithm", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], iv.prototype, "digest", void 0);
            class ib {
                constructor(e = {}) {
                    this.prime = new ArrayBuffer(0), this.exponent = new ArrayBuffer(0), this.coefficient = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ib.prototype, "prime", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ib.prototype, "exponent", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ib.prototype, "coefficient", void 0);
            let iw = B = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, B.prototype)
                }
            };
            iw = B = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: ib
            })], iw);
            class ix {
                constructor(e = {}) {
                    this.version = 0, this.modulus = new ArrayBuffer(0), this.publicExponent = new ArrayBuffer(0), this.privateExponent = new ArrayBuffer(0), this.prime1 = new ArrayBuffer(0), this.prime2 = new ArrayBuffer(0), this.exponent1 = new ArrayBuffer(0), this.exponent2 = new ArrayBuffer(0), this.coefficient = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer
            })], ix.prototype, "version", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "modulus", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "publicExponent", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "privateExponent", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "prime1", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "prime2", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "exponent1", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "exponent2", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ix.prototype, "coefficient", void 0), (0, t8.Cg)([tQ({
                type: iw,
                optional: !0
            })], ix.prototype, "otherPrimeInfos", void 0);
            class ik {
                constructor(e = {}) {
                    this.modulus = new ArrayBuffer(0), this.publicExponent = new ArrayBuffer(0), Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ik.prototype, "modulus", void 0), (0, t8.Cg)([tQ({
                type: n.Integer,
                converter: tI
            })], ik.prototype, "publicExponent", void 0),
            function(e) {
                e[e.verified = 0] = "verified", e[e.selfSigned = 1] = "selfSigned", e[e.unverified = 2] = "unverified", e[e.failed = 3] = "failed"
            }(_ || (_ = {}));
            class iA {
                constructor(e = {}) {
                    this.verifiedBootKey = new tk, this.deviceLocked = !1, this.verifiedBootState = _.verified, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: tk
            })], iA.prototype, "verifiedBootKey", void 0), (0, t8.Cg)([tQ({
                type: n.Boolean
            })], iA.prototype, "deviceLocked", void 0), (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], iA.prototype, "verifiedBootState", void 0), (0, t8.Cg)([tQ({
                type: tk,
                optional: !0
            })], iA.prototype, "verifiedBootHash", void 0);
            let iS = E = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, E.prototype)
                }
            };
            iS = E = (0, t8.Cg)([tJ({
                type: i.Set,
                itemType: n.Integer
            })], iS);
            class iC {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                context: 1,
                type: iS,
                optional: !0
            })], iC.prototype, "purpose", void 0), (0, t8.Cg)([tQ({
                context: 2,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "algorithm", void 0), (0, t8.Cg)([tQ({
                context: 3,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "keySize", void 0), (0, t8.Cg)([tQ({
                context: 5,
                type: iS,
                optional: !0
            })], iC.prototype, "digest", void 0), (0, t8.Cg)([tQ({
                context: 6,
                type: iS,
                optional: !0
            })], iC.prototype, "padding", void 0), (0, t8.Cg)([tQ({
                context: 10,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "ecCurve", void 0), (0, t8.Cg)([tQ({
                context: 200,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "rsaPublicExponent", void 0), (0, t8.Cg)([tQ({
                context: 203,
                type: iS,
                optional: !0
            })], iC.prototype, "mgfDigest", void 0), (0, t8.Cg)([tQ({
                context: 303,
                type: n.Null,
                optional: !0
            })], iC.prototype, "rollbackResistance", void 0), (0, t8.Cg)([tQ({
                context: 305,
                type: n.Null,
                optional: !0
            })], iC.prototype, "earlyBootOnly", void 0), (0, t8.Cg)([tQ({
                context: 400,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "activeDateTime", void 0), (0, t8.Cg)([tQ({
                context: 401,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "originationExpireDateTime", void 0), (0, t8.Cg)([tQ({
                context: 402,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "usageExpireDateTime", void 0), (0, t8.Cg)([tQ({
                context: 405,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "usageCountLimit", void 0), (0, t8.Cg)([tQ({
                context: 503,
                type: n.Null,
                optional: !0
            })], iC.prototype, "noAuthRequired", void 0), (0, t8.Cg)([tQ({
                context: 504,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "userAuthType", void 0), (0, t8.Cg)([tQ({
                context: 505,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "authTimeout", void 0), (0, t8.Cg)([tQ({
                context: 506,
                type: n.Null,
                optional: !0
            })], iC.prototype, "allowWhileOnBody", void 0), (0, t8.Cg)([tQ({
                context: 507,
                type: n.Null,
                optional: !0
            })], iC.prototype, "trustedUserPresenceRequired", void 0), (0, t8.Cg)([tQ({
                context: 508,
                type: n.Null,
                optional: !0
            })], iC.prototype, "trustedConfirmationRequired", void 0), (0, t8.Cg)([tQ({
                context: 509,
                type: n.Null,
                optional: !0
            })], iC.prototype, "unlockedDeviceRequired", void 0), (0, t8.Cg)([tQ({
                context: 600,
                type: n.Null,
                optional: !0
            })], iC.prototype, "allApplications", void 0), (0, t8.Cg)([tQ({
                context: 601,
                type: tk,
                optional: !0
            })], iC.prototype, "applicationId", void 0), (0, t8.Cg)([tQ({
                context: 701,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "creationDateTime", void 0), (0, t8.Cg)([tQ({
                context: 702,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "origin", void 0), (0, t8.Cg)([tQ({
                context: 703,
                type: n.Null,
                optional: !0
            })], iC.prototype, "rollbackResistant", void 0), (0, t8.Cg)([tQ({
                context: 704,
                type: iA,
                optional: !0
            })], iC.prototype, "rootOfTrust", void 0), (0, t8.Cg)([tQ({
                context: 705,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "osVersion", void 0), (0, t8.Cg)([tQ({
                context: 706,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "osPatchLevel", void 0), (0, t8.Cg)([tQ({
                context: 709,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationApplicationId", void 0), (0, t8.Cg)([tQ({
                context: 710,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdBrand", void 0), (0, t8.Cg)([tQ({
                context: 711,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdDevice", void 0), (0, t8.Cg)([tQ({
                context: 712,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdProduct", void 0), (0, t8.Cg)([tQ({
                context: 713,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdSerial", void 0), (0, t8.Cg)([tQ({
                context: 714,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdImei", void 0), (0, t8.Cg)([tQ({
                context: 715,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdMeid", void 0), (0, t8.Cg)([tQ({
                context: 716,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdManufacturer", void 0), (0, t8.Cg)([tQ({
                context: 717,
                type: tk,
                optional: !0
            })], iC.prototype, "attestationIdModel", void 0), (0, t8.Cg)([tQ({
                context: 718,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "vendorPatchLevel", void 0), (0, t8.Cg)([tQ({
                context: 719,
                type: n.Integer,
                optional: !0
            })], iC.prototype, "bootPatchLevel", void 0), (0, t8.Cg)([tQ({
                context: 720,
                type: n.Null,
                optional: !0
            })], iC.prototype, "deviceUniqueAttestation", void 0),
            function(e) {
                e[e.software = 0] = "software", e[e.trustedEnvironment = 1] = "trustedEnvironment", e[e.strongBox = 2] = "strongBox"
            }(T || (T = {})),
            function(e) {
                e[e.KM2 = 1] = "KM2", e[e.KM3 = 2] = "KM3", e[e.KM4 = 3] = "KM4", e[e.KM4_1 = 4] = "KM4_1", e[e.keyMint1 = 100] = "keyMint1", e[e.keyMint2 = 200] = "keyMint2"
            }(N || (N = {}));
            class iI {
                constructor(e = {}) {
                    this.attestationVersion = N.KM4, this.attestationSecurityLevel = T.software, this.keymasterVersion = 0, this.keymasterSecurityLevel = T.software, this.attestationChallenge = new tk, this.uniqueId = new tk, this.softwareEnforced = new iC, this.teeEnforced = new iC, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer
            })], iI.prototype, "attestationVersion", void 0), (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], iI.prototype, "attestationSecurityLevel", void 0), (0, t8.Cg)([tQ({
                type: n.Integer
            })], iI.prototype, "keymasterVersion", void 0), (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], iI.prototype, "keymasterSecurityLevel", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], iI.prototype, "attestationChallenge", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], iI.prototype, "uniqueId", void 0), (0, t8.Cg)([tQ({
                type: iC
            })], iI.prototype, "softwareEnforced", void 0), (0, t8.Cg)([tQ({
                type: iC
            })], iI.prototype, "teeEnforced", void 0);
            let iB = class extends iC {};
            iB = (0, t8.Cg)([tJ({
                type: i.Choice
            })], iB);
            let iE = O = class extends t2 {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, O.prototype)
                }
                findProperty(e) {
                    let t = this.find(t => e in t);
                    if (t) return t[e]
                }
            };
            iE = O = (0, t8.Cg)([tJ({
                type: i.Sequence,
                itemType: iB
            })], iE);
            class i_ {
                constructor(e = {}) {
                    this.attestationVersion = N.KM4, this.attestationSecurityLevel = T.software, this.keymasterVersion = 0, this.keymasterSecurityLevel = T.software, this.attestationChallenge = new tk, this.uniqueId = new tk, this.softwareEnforced = new iE, this.teeEnforced = new iE, Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.Integer
            })], i_.prototype, "attestationVersion", void 0), (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], i_.prototype, "attestationSecurityLevel", void 0), (0, t8.Cg)([tQ({
                type: n.Integer
            })], i_.prototype, "keymasterVersion", void 0), (0, t8.Cg)([tQ({
                type: n.Enumerated
            })], i_.prototype, "keymasterSecurityLevel", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], i_.prototype, "attestationChallenge", void 0), (0, t8.Cg)([tQ({
                type: tk
            })], i_.prototype, "uniqueId", void 0), (0, t8.Cg)([tQ({
                type: iE
            })], i_.prototype, "softwareEnforced", void 0), (0, t8.Cg)([tQ({
                type: iE
            })], i_.prototype, "teeEnforced", void 0);
            class iT {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }(0, t8.Cg)([tQ({
                type: n.OctetString
            })], iT.prototype, "packageName", void 0), (0, t8.Cg)([tQ({
                type: n.Integer
            })], iT.prototype, "version", void 0);
            class iN {
                constructor(e = {}) {
                    Object.assign(this, e)
                }
            }

            function iO(e, t = "base64url") {
                return new Uint8Array(Q.toArrayBuffer(e, "base64url" === t))
            }

            function iU(e, t = "base64url") {
                return Q.fromArrayBuffer(e, "base64url" === t)
            }

            function iP(e) {
                let t = Q.toArrayBuffer(e, !0);
                return Q.fromArrayBuffer(t)
            }

            function iZ(e) {
                return Q.fromString(e, !0)
            }

            function iL(e) {
                return Q.toString(e, !0)
            }

            function iV(e) {
                return Q.validate(e, !1)
            }

            function ij(e) {
                return e = e.replace(/=/g, ""), Q.validate(e, !0)
            }(0, t8.Cg)([tQ({
                type: iT,
                repeated: "set"
            })], iN.prototype, "packageInfos", void 0), (0, t8.Cg)([tQ({
                type: n.OctetString,
                repeated: "set"
            })], iN.prototype, "signatureDigests", void 0);
            ! function(e) {
                e[e.kty = 1] = "kty", e[e.alg = 3] = "alg", e[e.crv = -1] = "crv", e[e.x = -2] = "x", e[e.y = -3] = "y", e[e.n = -1] = "n", e[e.e = -2] = "e"
            }(U || (U = {})),
            function(e) {
                e[e.OKP = 1] = "OKP", e[e.EC2 = 2] = "EC2", e[e.RSA = 3] = "RSA"
            }(P || (P = {})),
            function(e) {
                e[e.P256 = 1] = "P256", e[e.P384 = 2] = "P384", e[e.P521 = 3] = "P521", e[e.ED25519 = 6] = "ED25519", e[e.SECP256K1 = 8] = "SECP256K1"
            }(Z || (Z = {})), ! function(e) {
                e[e.ES256 = -7] = "ES256", e[e.EdDSA = -8] = "EdDSA", e[e.ES384 = -35] = "ES384", e[e.ES512 = -36] = "ES512", e[e.PS256 = -37] = "PS256", e[e.PS384 = -38] = "PS384", e[e.PS512 = -39] = "PS512", e[e.ES256K = -47] = "ES256K", e[e.RS256 = -257] = "RS256", e[e.RS384 = -258] = "RS384", e[e.RS512 = -259] = "RS512", e[e.RS1 = -65535] = "RS1"
            }(L || (L = {}));
            class iR extends Error {
                constructor() {
                    super("Subject issuer did not match issuer subject"), this.name = "InvalidSubjectAndIssuer"
                }
            }
            class iD extends Error {
                constructor(e) {
                    super(e), this.name = "CertificateNotYetValidOrExpired"
                }
            }
        },
        86858: function(e, t, r) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.addIssueToContext = t.EMPTY_PATH = t.makeIssue = void 0;
            let n = r(63430),
                s = i(r(23734));
            t.makeIssue = e => {
                let {
                    data: t,
                    path: r,
                    errorMaps: i,
                    issueData: n
                } = e, s = [...r, ...n.path || []], o = { ...n,
                    path: s
                };
                if (void 0 !== n.message) return { ...n,
                    path: s,
                    message: n.message
                };
                let a = "";
                for (let e of i.filter(e => !!e).slice().reverse()) a = e(o, {
                    data: t,
                    defaultError: a
                }).message;
                return { ...n,
                    path: s,
                    message: a
                }
            }, t.EMPTY_PATH = [], t.addIssueToContext = function(e, r) {
                let i = (0, n.getErrorMap)(),
                    o = (0, t.makeIssue)({
                        issueData: r,
                        data: e.data,
                        path: e.path,
                        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, i, i === s.default ? void 0 : s.default].filter(e => !!e)
                    });
                e.common.issues.push(o)
            };
            class o {
                constructor() {
                    this.value = "valid"
                }
                dirty() {
                    "valid" === this.value && (this.value = "dirty")
                }
                abort() {
                    "aborted" !== this.value && (this.value = "aborted")
                }
                static mergeArray(e, r) {
                    let i = [];
                    for (let n of r) {
                        if ("aborted" === n.status) return t.INVALID;
                        "dirty" === n.status && e.dirty(), i.push(n.value)
                    }
                    return {
                        status: e.value,
                        value: i
                    }
                }
                static async mergeObjectAsync(e, t) {
                    let r = [];
                    for (let e of t) {
                        let t = await e.key,
                            i = await e.value;
                        r.push({
                            key: t,
                            value: i
                        })
                    }
                    return o.mergeObjectSync(e, r)
                }
                static mergeObjectSync(e, r) {
                    let i = {};
                    for (let n of r) {
                        let {
                            key: r,
                            value: s
                        } = n;
                        if ("aborted" === r.status || "aborted" === s.status) return t.INVALID;
                        "dirty" === r.status && e.dirty(), "dirty" === s.status && e.dirty(), "__proto__" !== r.value && (void 0 !== s.value || n.alwaysSet) && (i[r.value] = s.value)
                    }
                    return {
                        status: e.value,
                        value: i
                    }
                }
            }
            t.ParseStatus = o, t.INVALID = Object.freeze({
                status: "aborted"
            }), t.DIRTY = e => ({
                status: "dirty",
                value: e
            }), t.OK = e => ({
                status: "valid",
                value: e
            }), t.isAborted = e => "aborted" === e.status, t.isDirty = e => "dirty" === e.status, t.isValid = e => "valid" === e.status, t.isAsync = e => "undefined" != typeof Promise && e instanceof Promise
        },
        93647: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
                    return n(t, e), t
                },
                o = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.z = void 0;
            let a = s(r(58574));
            t.z = a, o(r(58574), t), t.default = a
        }
    }
]);