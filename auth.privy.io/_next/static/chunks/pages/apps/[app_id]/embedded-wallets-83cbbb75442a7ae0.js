(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2874], {
        1547: function(e, t, a) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateKeyPair = d, t.encrypt = function(e, t) {
                let a = d(),
                    r = o();
                return {
                    cipherText: i.default.box(t, r, e, a.privateKey),
                    ephemeralPublicKey: a.publicKey,
                    nonce: r
                }
            }, t.decrypt = function(e, t) {
                let a = i.default.box.open(t.cipherText, t.nonce, t.ephemeralPublicKey, e);
                if (null === a) throw new n.DecryptionError("Decryption failed");
                return a
            }, t.generateNonce = o;
            let i = r(a(88934)),
                n = a(25474);

            function d() {
                let e = i.default.box.keyPair();
                return {
                    publicKey: e.publicKey,
                    privateKey: e.secretKey
                }
            }

            function o(e = i.default.box.nonceLength) {
                return i.default.randomBytes(e)
            }
        },
        3854: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/apps/[app_id]/embedded-wallets", function() {
                return a(78482)
            }])
        },
        25474: (e, t) => {
            "use strict";

            function a(e) {
                return class extends Error {
                    constructor(t) {
                        super(t), this.name = e
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddressMismatchError = t.InvalidInputError = t.EncryptionKeyError = t.EncryptionSizeError = t.DecryptionError = void 0, t.DecryptionError = a("DecryptionError"), t.EncryptionSizeError = a("EncryptionSizeError"), t.EncryptionKeyError = a("EncryptionKeyError"), t.InvalidInputError = a("InvalidInputError"), t.AddressMismatchError = a("AddressMismatchError")
        },
        41269: (e, t, a) => {
            "use strict";
            a.d(t, {
                D_: () => d,
                oC: () => n
            });
            var r = a(45028);
            class i extends Error {
                toString() {
                    return `${this.name}: ${this.message}${this.cause?` [cause: ${this.cause}]`:""}`
                }
                constructor(e, t, a, r) {
                    super(t), this.status = e, this.code = a, this.name = "HttpError", this.responseData = r
                }
            }
            class n extends i {
                constructor(e, t) {
                    super(400, e, t || r.s.INVALID_DATA), this.name = "InvalidInputError"
                }
            }
            class d extends i {
                constructor(e, t) {
                    super(401, e, t), this.name = "UnauthorizedError"
                }
            }
        },
        45028: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => i
            });
            var r, i = ((r = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended", r.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id", r.MISSING_OR_INVALID_PRIVY_CLIENT_ID = "missing_or_invalid_privy_client_id", r.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id", r.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token", r.MISSING_OR_INVALID_MFA = "missing_or_invalid_mfa", r.EXPIRED_OR_INVALID_MFA_TOKEN = "expired_or_invalid_mfa_token", r.INVALID_DATA = "invalid_data", r.INVALID_CREDENTIALS = "invalid_credentials", r.INVALID_CAPTCHA = "invalid_captcha", r.LINKED_TO_ANOTHER_USER = "linked_to_another_user", r.ALLOWLIST_REJECTED = "allowlist_rejected", r.CANNOT_UNLINK_EMBEDDED_WALLET = "cannot_unlink_embedded_wallet", r.CANNOT_UNLINK_SOLE_ACCOUNT = "cannot_unlink_sole_account", r.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type", r.LINKED_ACCOUNT_NOT_FOUND = "linked_account_not_found", r.TOO_MANY_REQUESTS = "too_many_requests", r.RESOURCE_CONFLICT = "resource_conflict", r.INVALID_ORIGIN = "invalid_origin", r.MISSING_ORIGIN = "missing_origin", r.INVALID_NATIVE_APP_ID = "invalid_native_app_id", r.TOKEN_ALREADY_USED = "token_already_used", r.ALREADY_LOGGED_OUT = "already_logged_out", r.NOT_SUPPORTED = "not_supported", r.USER_UNSUBSCRIBED = "user_unsubscribed", r.MAX_APPS_REACHED = "max_apps_reached", r.USER_LIMIT_REACHED = "max_accounts_reached", r.DEVICE_REVOKED = "device_revoked", r.WALLET_PASSWORD_EXISTS = "wallet_password_exists", r.OAUTH_STATE_MISMATCH = "oauth_state_mismatch", r.MAX_DENYLIST_ENTRIES_REACHED = "max_denylist_entries_reached", r.MAX_TEST_ACCOUNTS_REACHED = "max_test_accounts_reached", r.DISALLOWED_LOGIN_METHOD = "disallowed_login_method", r.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email", r.DISALLOWED_RECOVERY_METHOD = "disallowed_recovery_method", r.LEGACY_DASHBOARD_LOGIN_CONFIGURATION = "legacy_dashboard_login_configuration", r.CANNOT_SET_PASSWORD = "cannot_set_password", r.INVALID_PKCE_PARAMETERS = "invalid_pkce_parameters", r.INVALID_APP_URL_SCHEME_CONFIGURATION = "invalid_app_url_scheme_configuration", r.CROSS_APP_CONNECTION_NOT_ALLOWED = "cross_app_connection_not_allowed", r.USER_DOES_NOT_EXIST = "user_does_not_exist", r.ALREADY_EXISTS = "resource_already_exists", r.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required", r.USER_HAS_NOT_DELEGATED_WALLET = "user_has_not_delegated_wallet", r.FEATURE_NOT_ENABLED = "feature_not_enabled", r.INSUFFICIENT_FUNDS = "insufficient_funds", r.TRANSACTION_BROADCAST_FAILURE = "transaction_broadcast_failure", r.INVALID_POLICY_FORMAT = "invalid_policy_format", r.POLICY_VIOLATION = "policy_violation", r.AUTHORIZATION_KEY_HAS_ASSOCIATED_WALLETS = "authorization_key_has_associated_wallets", r.INVALID_REQUEST = "invalid_request", r)
        },
        45638: (e, t, a) => {
            "use strict";
            a.d(t, {
                I2: () => m,
                Lw: () => y,
                bV: () => o,
                y7: () => d
            });
            var r = a(12562),
                i = a(71395);
            let n = ["railway.app"];

            function d(e) {
                let t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Invalid cookie domain - must be or contain a proper hostname. Ex: https://privy.io or privy.io";
                try {
                    t = function(e) {
                        if (!e) throw Error("Invalid domain");
                        return new URL(e.includes("://") ? e : "http://".concat(e)).hostname
                    }(e)
                } catch (e) {
                    throw Error(a)
                }
                if (t.split(".").length < 2) throw Error("Domain must be a valid public hostname");
                if (!i.pt.test(t)) throw Error(a);
                let d = e ? r.Ay.parse(t) : null;
                if (null == d ? void 0 : d.error) throw Error("Unable to parse cookie domain '".concat(e, "'"));
                if ((null == d ? void 0 : d.sld) === null) throw Error("'".concat(null == d ? void 0 : d.tld, "' is not an allowed cookie domain"));
                for (let e of n)
                    if (t === e) throw Error("Cannot set cookie domain to '".concat(e, "'"));
                return t
            }

            function o(e) {
                return "".concat(e.protocol, "//").concat(e.hostname)
            }
            let s = "privy-wildcard-placeholder",
                c = e => e.replace(/[*]/g, s),
                l = e => e.replace(RegExp(s, "g"), "*");

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Invalid allowed origin domain - must be a proper origin. Ex: https://privy.io";
                if ("*" === e) return e;
                try {
                    var a;
                    let t = new URL(c(e.trim()));
                    if ("chrome-extension:" === t.protocol) return l(o(t));
                    if ((null === (a = t.hostname) || void 0 === a ? void 0 : a.split(".").length) < 2 && "localhost" !== t.hostname) throw Error("Invalid domain ".concat(e));
                    return l("capacitor:" === t.protocol || "ionic:" === t.protocol ? "".concat(t.protocol, "//").concat(t.hostname) : t.origin)
                } catch (e) {
                    throw Error(t)
                }
            }

            function y(e) {
                try {
                    return p(e)
                } catch (e) {
                    return
                }
            }
            let u = [
                    [{
                        test: e => !!(e.endsWith(".vercel.app") || e.endsWith(".netlify.app") || e.endsWith(".workers.dev")) && "*.vercel.app" !== e && "*.netlify.app" !== e && "*.workers.dev" !== e && !(e.split(".").length < 4)
                    }]
                ],
                _ = e => {
                    for (let t of u)
                        if (t.reduce((t, a) => t || a.test(e), !1)) return !0;
                    return !1
                },
                v = /^[a-zA-Z0-9\-\_]+$/,
                w = ["*.vercel.app", "*.netlify.app", "*.onrender.com", "*.workers.dev"],
                h = e => w.map(t => e.includes(t)).includes(!0),
                f = /^[a-p]{32}$/;

            function m(e) {
                if ("*" === e.trim()) return "";
                try {
                    let {
                        protocol: t,
                        port: a,
                        hostname: n
                    } = new URL(c(e)), d = l(n);
                    if ("chrome-extension:" === t) {
                        if (!d) return "Invalid Chrome extension ID length";
                        if (d.includes("*") || d.includes("%") || !f.test(d)) return "Invalid Chrome extension ID";
                        if (e.endsWith("/")) return "Trailing slashes are unsupported";
                        return ""
                    }
                    if ("http:" !== t && "https:" !== t && "chrome-extension:" !== t && "capacitor:" !== t && "ionic:" !== t) return "Invalid protocol. Use 'http', 'https', 'chrome-extension', or a supported app-specific scheme.";
                    if (d.includes("localhost") && "localhost" !== d) return "Invalid URL. Localhost URLs cannot include subdomains or wildcards";
                    if ("localhost" === d || (0, i.ei)(d)) return "";
                    if (!a && d.includes(":")) return "Invalid URL. IPv6 addresses are not supported";
                    let o = d.split("."),
                        s = o.slice(0, -2),
                        y = o.slice(-2).join(".");
                    if (y.includes("*")) return "Wildcards must be scoped to a subdomain";
                    let u = d.startsWith("*.");
                    if (u) {
                        if ([...d.matchAll(/[*]/g)].length > 1) return "Domain may contain at most one leading wildcard";
                        if (!_(d) && !r.Ay.isValid(y)) {
                            if (h(d)) return "Domain is too permissive. See the docs linked above for best practices around securing preview deployments.";
                            return "Domain either too permissive, or this domain is not supported"
                        }
                    }
                    if (!u) {
                        if (d.split(".").some(e => e.includes("*") && e.length > 1)) return "Partial wildcards (e.g. '*-subdomain.domain.com') are not allowed";
                        if (d.includes("*")) return "Domain may contain at most one leading wildcard";
                        let e = r.Ay.parse(y);
                        if (e.error) return e.error.message
                    }
                    if (!s.filter(e => "*" !== e).every(e => v.test(e))) return "Invalid subdomain in '".concat(d, "'");
                    if (p(e), e.endsWith("/")) return "Trailing slashes are unsupported";
                    return ""
                } catch (t) {
                    return "Invalid URL. '".concat(e, "' must be a valid URL")
                }
            }
        },
        48022: (e, t, a) => {
            "use strict";
            t.Lv = function(e, t) {
                let a = (0, n.encrypt)(e, d.encode(t)),
                    i = {
                        cipherText: o(a.cipherText),
                        ephemeralPublicKey: o(a.ephemeralPublicKey),
                        nonce: o(a.nonce),
                        version: 1
                    };
                return r.base64.encode(d.encode(JSON.stringify(i)))
            };
            let r = a(75958),
                i = a(93647),
                n = a(1547);
            a(1547), new TextDecoder;
            let d = new TextEncoder;

            function o(e) {
                return btoa(String.fromCharCode(...e))
            }
            i.z.object({
                cipherText: i.z.string(),
                ephemeralPublicKey: i.z.string(),
                nonce: i.z.string(),
                version: i.z.literal(1)
            }).required()
        },
        69583: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ar: () => i,
                lW: () => r
            });
            let r = async e => {
                    if ("string" == typeof e) try {
                        return await navigator.clipboard.writeText(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                i = e => e.startsWith("did:privy:") ? e : "did:privy:".concat(e)
        },
        71395: (e, t, a) => {
            "use strict";
            a.d(t, {
                pt: () => d,
                yT: () => o,
                sP: () => i,
                _t: () => n,
                ei: () => s
            });
            let r = a(31078).z.string().ip(),
                i = /(https?:\/\/)(www\.)?[\-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([\-a-zA-Z0-9@:%_+.~#\(\)\/=]*)\.(jpeg|jpg|gif|png)(\?[\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/,
                n = /(https?:\/\/)?(www\.)?[\-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,63}\b([\-a-zA-Z0-9@:%_\+.~#\(\)?&\/=]*)/,
                d = /^[a-zA-Z0-9-]{1,}(\.[a-zA-Z0-9]{2,})+$/,
                o = /^#(?:[0-9a-fA-F]{3}){1,2}$/,
                s = e => r.safeParse(e).success
        },
        78482: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: () => eA,
                default: () => eE
            });
            var r = a(6029),
                i = a(95669),
                n = a.n(i),
                d = a(82177),
                o = a(55729),
                s = a(45028),
                c = a(41269),
                l = a(66322),
                p = a(52516),
                y = a(77473),
                u = a(46871),
                _ = a(15775),
                v = a(31168);
            let w = (e, t) => {
                throw null != t ? t : Error("Expected never, got: ".concat(e))
            };
            var h = a(51642).Buffer;

            function f(e) {
                let {
                    message: t,
                    privateKey: a,
                    chainType: r
                } = e;
                return "bitcoin-segwit" === r ? v.bI.sign(h.from(t), a).toDERRawBytes() : "bitcoin-taproot" === r ? v.ko.sign(h.from(t), a) : w(r)
            }
            async function m(e) {
                let {
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    hdWalletIndex: i,
                    chainType: n,
                    entropy: d
                } = e, o = (0, _.E)({
                    entropy: d,
                    index: i,
                    pathType: "bitcoin-taproot" === n ? "taproot" : "segwit"
                }), s = await (0, u.QQ)({
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    address: o.address,
                    chainType: n
                }), c = function(e) {
                    let {
                        domain: t,
                        publicKeyHex: a,
                        address: r,
                        uri: i,
                        nonce: n,
                        issuedAt: d
                    } = e;
                    return "".concat(t, " wants you to sign in with your Bitcoin account:\n").concat(a, "\n\nYou are proving you own ").concat(r, ".\n\nURI: ").concat(i, "\nVersion: 1\nNonce: ").concat(n, "\nIssued At: ").concat(null != d ? d : new Date().toISOString(), "\nChain ID: ").concat("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f", "\nResources:\n- https://privy.io")
                }({
                    domain: window.location.host,
                    publicKeyHex: (0, p.My)(o.publicKey),
                    uri: window.location.origin,
                    address: o.address,
                    nonce: s
                }), l = f({
                    message: c,
                    privateKey: o.privateKey,
                    chainType: n
                });
                return await (0, u.Zn)({
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    data: {
                        message: c,
                        signature: y.K3.encode(l),
                        chain_type: n,
                        hd_node_index: i
                    }
                })
            }
            var I = a(88934),
                g = a.n(I),
                A = a(27510),
                E = a(24610),
                T = a(51642).Buffer;
            async function b(e) {
                let {
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    hdWalletIndex: i,
                    entropy: n
                } = e;
                if (i <= 0) throw new E.Pi("invalid_request_arguments", "Failed to create additional wallet: invalid wallet index");
                let d = (0, A.kG)({
                        entropy: n,
                        index: i
                    }),
                    o = d.publicKey.toBase58(),
                    s = await u.QQ({
                        appId: t,
                        appClientId: a,
                        accessToken: r,
                        address: o,
                        chainType: "solana"
                    }),
                    c = (0, A.zT)(window.location.host, window.location.origin, o, s),
                    l = g().sign.detached(T.from(c), d.secretKey);
                return await u.Zn({
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    data: {
                        message: c,
                        signature: y.K3.encode(l),
                        hd_node_index: i,
                        chain_type: "solana"
                    }
                }), {
                    keypair: d,
                    address: o
                }
            }
            var P = a(48022),
                D = a(29358);
            let K = y.K3.decode(D.A.DELEGATED_ACTIONS_TEE_PUBLIC_KEY || ""),
                S = async e => {
                    let {
                        entropy: t,
                        delegatedWallets: a,
                        appId: r,
                        appClientId: i,
                        accessToken: n
                    } = e, [d, o] = await (0, A.uY)(t);
                    if ("string" != typeof D.A.DELEGATED_ACTIONS_TEE_PUBLIC_KEY) throw new E.Pi("error", "Cannot delegate wallet actions - NEXT_PUBLIC_DELEGATED_ACTIONS_TEE_PUBLIC_KEY is not set.");
                    let s = (0, P.Lv)(K, y.K3.encode(o));
                    await (0, u.IW)({
                        appId: r,
                        appClientId: i,
                        accessToken: n,
                        data: {
                            app_share: y.K3.encode(d),
                            encrypted_tee_share: s,
                            delegated_addresses: a.map(e => {
                                let {
                                    address: t,
                                    chainType: a,
                                    walletIndex: r
                                } = e;
                                return {
                                    address: t,
                                    chain_type: a,
                                    wallet_index: r
                                }
                            })
                        }
                    })
                };
            var N = a(19408);
            async function C(e) {
                let t = (0, A.eB)({
                    entropy: e,
                    opts: {
                        path: "m/3457'/10'/1'/0/".concat(0)
                    }
                }).getHdKey().privateKey;
                return {
                    publicKey: await (0, N.Rn)(t),
                    privateKey: t
                }
            }
            async function O(e) {
                let {
                    appId: t,
                    appClientId: a,
                    entropy: r,
                    accessToken: i
                } = e, {
                    publicKey: n
                } = await C(r);
                return await u.aV({
                    appId: t,
                    appClientId: a,
                    signerPublicKey: "0x".concat(N.jn.bytesToHex(n)),
                    auth: {
                        accessToken: i,
                        mfaToken: null
                    }
                })
            }
            var x = a(32607),
                R = a(31078),
                M = a(51642).Buffer;
            let k = R.z.string().regex(/^[A-Za-z0-9+/]*={0,2}\.[A-Za-z0-9+/]*={0,2}$/, {
                message: "Must be two base64 strings separated by a single period"
            });
            var L = a(57761),
                U = a(14505);
            async function W(e, t) {
                let {
                    privateKey: a,
                    chainType: r
                } = e;
                switch (t.method) {
                    case "sign":
                        return {
                            method: t.method,
                            data: {
                                signature: y.K3.encode(f({
                                    privateKey: a,
                                    message: t.params.message,
                                    chainType: r
                                }))
                            }
                        };
                    case "signTransaction":
                        return {
                            method: t.method,
                            data: {
                                signedTransaction: function(e) {
                                    let {
                                        txAsPSBTHexString: t,
                                        privateKey: a
                                    } = e, r = U.ZX.fromPSBT((0, p.aT)(t), {
                                        allowLegacyWitnessUtxo: !0
                                    });
                                    return r.sign(a), r.finalize(), r.hex
                                }({
                                    txAsPSBTHexString: t.params.psbt,
                                    privateKey: a
                                })
                            }
                        }
                }
            }
            var V = a(64167),
                H = a(15519);
            async function q(e, t) {
                if ("ethereum" === t.chainType && "ethereum" === e.chainType) return await (0, V.A)(e, t.request);
                if ("solana" === t.chainType && "solana" === e.chainType) return await (0, H.A)(e.wallet.keypair, { ...t,
                    publicKey: t.entropyId,
                    signingPublicKey: e.wallet.address
                });
                if ("bitcoin-segwit" === t.chainType && "bitcoin-segwit" === e.chainType || "bitcoin-taproot" === t.chainType && "bitcoin-taproot" === e.chainType) return await W({
                    privateKey: e.wallet.privateKey,
                    chainType: t.chainType
                }, t.request);
                if ("p256" === t.chainType && "p256" === e.chainType && "sign" === t.request.method) return {
                    method: t.request.method,
                    data: {
                        signature: await (0, L.b)({
                            message: t.request.params.message,
                            privateKey: e.wallet.privateKey
                        })
                    }
                };
                throw new E.Pi("invalid_request_arguments", "Unknown chain type")
            }
            var G = a(82927);
            async function B(e) {
                let {
                    appId: t,
                    userId: a,
                    address: r
                } = e;
                if (!await G.A.get({
                        appId: t,
                        userId: a,
                        address: r
                    })) throw new E.Pi("wallet_not_on_device", "Failed to initialize wallet: wallet with address '".concat(r, "' not loaded on this device"))
            }
            async function z(e) {
                let {
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    address: i,
                    chainType: n
                } = e;
                return await (0, u.bE)("/api/v1/wallets/import/init", {
                    address: i,
                    chain_type: n,
                    entropy_type: "private-key",
                    encryption_type: "HPKE"
                }, (0, u.$W)({
                    appId: t,
                    appClientId: a,
                    accessToken: r
                }))
            }
            var F = a(69583);
            async function Y(e) {
                let {
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    data: i
                } = e;
                await (0, u.bE)("/api/v1/wallets/import/submit", {
                    wallet: {
                        address: i.address,
                        chain_type: i.chainType,
                        entropy_type: "private-key",
                        encryption_type: "HPKE",
                        encapsulated_key: i.encapsulatedKeyBase64,
                        ciphertext: i.ciphertextBase64
                    },
                    owner: {
                        user_id: (0, F.Ar)(i.ownerUserId)
                    }
                }, (0, u.$W)({
                    appId: t,
                    appClientId: a,
                    accessToken: r
                }))
            }
            var J = a(79822),
                $ = a(44988),
                j = a(24146);
            let X = e => {
                let t, a, r;
                if ("DHKEM_P256_HKDF_SHA256" === e.kem) t = new j.RG;
                else throw Error("Unsupported KEM: ".concat(e.kem));
                if ("HKDF_SHA256" === e.kdf) a = new j.v7;
                else throw Error("Unsupported KDF: ".concat(e.kdf));
                if ("CHACHA20_POLY1305" === e.aead) r = new $._;
                else if ("AES_GCM256" === e.aead) r = new j.ws;
                else throw Error("Unsupported AEAD: ".concat(e.aead));
                return new j.GR({
                    kem: t,
                    kdf: a,
                    aead: r
                })
            };
            async function Z(e) {
                let {
                    publicKey: t,
                    plaintext: a,
                    aad: r,
                    info: i,
                    config: n
                } = e, d = X(n), o = await d.kem.deserializePublicKey(t), s = await d.createSenderContext({
                    recipientPublicKey: o,
                    info: i
                }), c = await s.seal(a, r);
                return {
                    encapsulatedKey: new Uint8Array(s.enc),
                    ciphertext: new Uint8Array(c)
                }
            }
            var Q = a(51642).Buffer;
            let ee = {
                ethereum: {
                    createFromPrivateKey: A.Bt,
                    createSiwxMessage: A.t5
                },
                solana: {
                    createFromPrivateKey: A.UI,
                    createSiwxMessage: A.zT
                }
            };
            async function et(e) {
                let t, {
                    appId: r,
                    appClientId: i,
                    userId: n,
                    accessToken: d,
                    privateKey: o,
                    chainType: s
                } = e;
                if ("ethereum" === s) {
                    let {
                        privateKeyToAccount: e
                    } = await a.e(8859).then(a.bind(a, 28859));
                    t = e(o.startsWith("0x") ? o : "0x".concat(o)).address
                } else {
                    let {
                        Keypair: e
                    } = await Promise.resolve().then(a.bind(a, 2342)), r = y.tw.decode(o);
                    t = e.fromSecretKey(r).publicKey.toBase58()
                }
                let {
                    encryption_public_key: c
                } = await z({
                    appId: r,
                    appClientId: i,
                    accessToken: d,
                    address: t,
                    chainType: s
                }), l = new Uint8Array(Q.from(c, "base64")), p = ((e, t) => {
                    if ("ethereum" !== t) return new Uint8Array(y.tw.decode(e)); {
                        let t = e.startsWith("0x") ? e.slice(2) : e;
                        return new Uint8Array(Q.from(t, "hex"))
                    }
                })(o, s), {
                    encapsulatedKey: u,
                    ciphertext: _
                } = await Z({
                    publicKey: l,
                    plaintext: p,
                    config: {
                        kem: "DHKEM_P256_HKDF_SHA256",
                        kdf: "HKDF_SHA256",
                        aead: "CHACHA20_POLY1305",
                        mode: "BASE"
                    }
                });
                return await Y({
                    appId: r,
                    appClientId: i,
                    accessToken: d,
                    data: {
                        address: t,
                        chainType: s,
                        encapsulatedKeyBase64: y.K3.encode(Q.from(u)),
                        ciphertextBase64: y.K3.encode(Q.from(_)),
                        ownerUserId: n
                    }
                }), {
                    address: t
                }
            }
            async function ea(e) {
                let {
                    appId: t,
                    appClientId: a,
                    userId: r,
                    accessToken: i,
                    privateKey: n,
                    chainType: d
                } = e, {
                    createFromPrivateKey: o,
                    createSiwxMessage: s
                } = ee[d], c = await o(n), {
                    deviceShares: l,
                    recoveryShares: p,
                    signMessage: _
                } = c, v = "address" in c ? c.address : c.wallet.address, [w, h] = l, [f, m] = p, [I, {
                    encryptionKey: g,
                    walletRecoveryOutput: E
                }] = await Promise.all([u.QQ({
                    appId: t,
                    appClientId: a,
                    accessToken: i,
                    address: v,
                    chainType: d
                }), (0, J.cq)({
                    recoveryType: "privy_generated_recovery_key"
                })]), [T, b] = await Promise.all([(0, A.EN)(g), (0, A.vb)(f, g)]), P = s(window.location.host, window.location.origin, v, I), D = await _({
                    message: P
                }), K = (0, A.hE)(), {
                    recovery_key: S
                } = await (0, J.qz)(E);
                return await u.gc({
                    appId: t,
                    appClientId: a,
                    accessToken: i,
                    data: {
                        entropy_key: v,
                        entropy_key_verifier: "ethereum" === d ? "ethereum-address-verifier" : "solana-address-verifier",
                        chain_type: d,
                        message: P,
                        signature: D,
                        device_id: K,
                        device_auth_share: y.K3.encode(h),
                        recovery_auth_share: y.K3.encode(m),
                        encrypted_recovery_share: y.K3.encode(b.encryptedShare),
                        encrypted_recovery_share_iv: y.K3.encode(b.encryptedShareIV),
                        recovery_type: "privy_generated_recovery_key",
                        recovery_key_hash: y.K3.encode(T),
                        recovery_key: S,
                        imported: !0
                    }
                }), await G.A.set({
                    appId: t,
                    userId: r,
                    address: v
                }, {
                    share: y.K3.encode(w),
                    deviceId: K
                }), {
                    address: v
                }
            }
            async function er(e) {
                let {
                    appId: t,
                    appClientId: a,
                    userId: r,
                    accessToken: i,
                    privateKey: n,
                    chainType: d,
                    mode: o
                } = e;
                return "tee" === o ? await et({
                    appId: t,
                    appClientId: a,
                    userId: r,
                    accessToken: i,
                    privateKey: n,
                    chainType: d
                }) : await ea({
                    appId: t,
                    appClientId: a,
                    userId: r,
                    accessToken: i,
                    privateKey: n,
                    chainType: d
                })
            }
            var ei = a(41033);
            async function en(e) {
                let {
                    mfaCode: t,
                    mfaMethod: a,
                    hasSetMfaToken: r,
                    verificationKeys: i,
                    createWalletEvent: n,
                    ...d
                } = e, o = await (0, ei.X)({
                    appId: d.appId,
                    appClientId: d.appClientId,
                    accessToken: d.accessToken,
                    mfaCode: t,
                    mfaMethod: a,
                    userId: d.userId,
                    relyingParty: d.relyingParty,
                    hasSetMfaToken: r,
                    verificationKeys: i,
                    createWalletEvent: n
                });
                switch (d.method) {
                    case "sms":
                        return await u.St({
                            appId: d.appId,
                            appClientId: d.appClientId,
                            accessToken: d.accessToken,
                            phoneNumber: d.phoneNumber,
                            mfaToken: o
                        });
                    case "totp":
                        return await u.O({
                            appId: d.appId,
                            appClientId: d.appClientId,
                            accessToken: d.accessToken,
                            mfaToken: o
                        });
                    default:
                        throw Error("Unknown mfa method")
                }
            }
            var ed = a(51014),
                eo = a(36902);
            async function es(e) {
                switch (e.method) {
                    case "sms":
                        return await u._o({
                            appId: e.appId,
                            appClientId: e.appClientId,
                            accessToken: e.accessToken,
                            code: e.code,
                            phoneNumber: e.phoneNumber
                        });
                    case "totp":
                        return await u.q$({
                            appId: e.appId,
                            appClientId: e.appClientId,
                            accessToken: e.accessToken,
                            code: e.code
                        });
                    case "passkey":
                        let t = await (0, ei.X)({
                            appId: e.appId,
                            appClientId: e.appClientId,
                            accessToken: e.accessToken,
                            mfaCode: null,
                            mfaMethod: null,
                            relyingParty: "",
                            userId: e.userId,
                            hasSetMfaToken: e.hasSetMfaToken,
                            verificationKeys: e.verificationKeys,
                            createWalletEvent: e.createWalletEvent
                        });
                        await u.NB({
                            appId: e.appId,
                            appClientId: e.appClientId,
                            accessToken: e.accessToken,
                            credentialIds: e.credentialIds,
                            removeForLogin: e.removeForLogin,
                            mfaToken: t
                        }), 0 === e.credentialIds.length && await ed.A.del({
                            appId: e.appId,
                            userId: e.userId
                        });
                        return;
                    default:
                        throw Error("Unknown mfa method")
                }
            }

            function ec(e) {
                if ("hd-entropy" !== e.entropyType) throw new E.Pi("hd_wallet_required", "This action requires a hierarchical deterministic wallet. Imported wallets are not supported.")
            }
            async function el(e) {
                let {
                    appId: t,
                    appClientId: a,
                    userId: r,
                    accessToken: i,
                    method: n,
                    mfaCode: d,
                    mfaMethod: o,
                    relyingParty: s,
                    hasSetMfaToken: c,
                    verificationKeys: l,
                    createWalletEvent: p
                } = e, y = await (0, ei.X)({
                    appId: t,
                    appClientId: a,
                    accessToken: i,
                    mfaCode: d,
                    mfaMethod: o,
                    userId: r,
                    relyingParty: s,
                    hasSetMfaToken: c,
                    verificationKeys: l,
                    createWalletEvent: p
                }), u = await ep({
                    appId: t,
                    appClientId: a,
                    accessToken: i,
                    method: n,
                    mfaToken: y
                });
                return await ed.A.del({
                    appId: t,
                    userId: r
                }), u
            }
            async function ep(e) {
                let {
                    appId: t,
                    appClientId: a,
                    accessToken: r,
                    method: i,
                    mfaToken: n
                } = e;
                switch (i) {
                    case "sms":
                        return await u.jE({
                            appId: t,
                            appClientId: a,
                            accessToken: r,
                            mfaToken: n
                        });
                    case "totp":
                        return await u.hH({
                            appId: t,
                            appClientId: a,
                            accessToken: r,
                            mfaToken: n
                        });
                    default:
                        throw Error("Unknown mfa method")
                }
            }
            async function ey(e) {
                let {
                    mfaMethod: t,
                    mfaCode: a,
                    relyingParty: r,
                    hasSetMfaToken: i,
                    verificationKeys: n,
                    createWalletEvent: d,
                    ...o
                } = e, s = await (0, ei.X)({
                    appId: o.appId,
                    appClientId: o.appClientId,
                    accessToken: o.accessToken,
                    userId: o.userId,
                    mfaCode: a,
                    mfaMethod: t,
                    relyingParty: r,
                    hasSetMfaToken: i,
                    verificationKeys: n,
                    createWalletEvent: d
                });
                await u.v$({
                    appId: o.appId,
                    appClientId: o.appClientId,
                    accessToken: o.accessToken,
                    credentialId: o.credentialId,
                    removeAsMfa: o.removeAsMfa,
                    mfaToken: s
                }), await ed.A.del({
                    appId: o.appId,
                    userId: o.userId
                })
            }
            var eu = a(6159),
                e_ = a(78933),
                ev = a(45638);

            function ew(e) {
                var t;
                let {
                    allowedOrigins: a,
                    url: r
                } = e, i = "chrome-extension:" === (t = new URL(r)).protocol || "capacitor:" === t.protocol || "ionic:" === t.protocol ? (0, ev.bV)(t) : t.origin;
                if (0 === a.length || a.some(e => "*" === e.trim())) return !0;
                for (let e of a)
                    if (i === e || (function(e) {
                            let t = e.replace(/\./g, "\\.").replace(/\*/g, "[^.]*");
                            return new RegExp("^".concat(t, "$"))
                        })(e).test(i)) return !0;
                return !1
            }
            let eh = {
                "privy:signer:create": "embedded_wallet_iframe_create_signer",
                "privy:user-signer:sign": "embedded_wallet_iframe_user_signer_sign",
                "privy:wallet:create": "embedded_wallet_iframe_create",
                "privy:wallet:create-additional": "embedded_wallet_iframe_create_additional",
                "privy:wallet:import": "embedded_wallet_iframe_import",
                "privy:wallet:set-recovery-password": "embedded_wallet_iframe_set_recovery_password",
                "privy:wallet:set-recovery": "embedded_wallet_iframe_set_recovery",
                "privy:wallet:recover": "embedded_wallet_iframe_recover",
                "privy:wallet:rpc": "embedded_wallet_iframe_rpc",
                "privy:solana-wallet:create": "embedded_solana_wallet_iframe_create",
                "privy:solana-wallet:create-additional": "embedded_solana_wallet_iframe_create_additional",
                "privy:solana-wallet:recover": "embedded_wallet_iframe_solana_recover",
                "privy:solana-wallet:rpc": "embedded_solana_wallet_iframe_rpc",
                "privy:farcaster:init-signer": "embedded_wallet_iframe_farcaster_signer_init",
                "privy:farcaster:sign": "embedded_wallet_iframe_farcaster_sign",
                "privy:delegated-actions:consent": "embedded_wallet_iframe_delegated_actions_consent",
                "privy:wallets:add": "embedded_wallet_iframe_create_additional",
                "privy:wallets:import": "embedded_wallet_iframe_import",
                "privy:wallets:set-recovery": "embedded_wallet_iframe_set_recovery",
                "privy:wallets:connect": "embedded_wallet_iframe_connect",
                "privy:wallets:recover": "embedded_wallet_iframe_recover",
                "privy:wallets:rpc": "embedded_wallet_iframe_rpc"
            };

            function ef(e, t) {
                var a, r, i, n, d;
                if (window.PRIVY_NATIVE_IOS) try {
                    return null === (a = window.webkit) || void 0 === a ? void 0 : a.messageHandlers.iOSProxy.postMessage(JSON.stringify(e))
                } catch (e) {}
                if (window.PRIVY_NATIVE_ANDROID) try {
                    return null === (r = window.AndroidProxy) || void 0 === r ? void 0 : r.postMessage(JSON.stringify(e))
                } catch (e) {}
                if (window.PRIVY_UNITY) try {
                    return null === (i = window.UnityProxy) || void 0 === i ? void 0 : i.postMessage(JSON.stringify(e))
                } catch (e) {}
                if ((0, e_.l_)(window)) try {
                    return null === (d = window.ReactNativeWebView) || void 0 === d ? void 0 : null === (n = d.postMessage) || void 0 === n ? void 0 : n.call(d, JSON.stringify(e))
                } catch (e) {}
                setTimeout(() => {
                    window.parent && window.parent.postMessage(e, t)
                }, 0)
            }

            function em(e, t, a, r) {
                ef({
                    id: t,
                    event: a,
                    data: r
                }, e.origin)
            }

            function eI(e, t, a, r) {
                ef({
                    id: t,
                    event: a,
                    error: {
                        type: (0, E.xR)(r) ? r.type : E.z6,
                        message: r.message
                    }
                }, e.origin)
            }

            function eg(e) {
                let t = (0, o.useRef)(null),
                    r = (0, o.useRef)(null),
                    i = (0, o.useRef)(e.verificationKeys);
                (0, o.useEffect)(() => {
                    i.current = e.verificationKeys
                }, [e.verificationKeys]);
                let n = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    var e;
                    let t = window.location.href.startsWith("http://localhost"),
                        a = [...null !== (e = location.ancestorOrigins) && void 0 !== e ? e : []].some(e => e.startsWith("http://localhost"));
                    t || a || (console.log("%cWarning!", "color:#F16552; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;"), console.log("%cYou are reading this message because you opened the browser console, a developer tool. Do not enter or paste code you do not understand. Never share your tokens or any other info with anyone. If someone told you to do this, it is very likely a scam.", "font-size: 18px;"))
                }, []);
                let p = new Set(["clmv1d6am07asib0fs4ss7w2x", "clq5vcgub015rju0fd4j1thhp"]);
                async function y(e, a, r) {
                    await ed.A.get({
                        appId: e,
                        userId: a
                    }) && !p.has(e) ? t.current = null : t.current = r
                }
                return (0, o.useEffect)(() => {
                    let o = e.appClientId;
                    async function p(p) {
                        var _, v, h, f, I, g, A, T;
                        if (!p) return;
                        let P = "string" == typeof p.data ? JSON.parse(p.data) : p.data;
                        if (!("string" == typeof P.event && /^privy:.+/.test(P.event)) || (A = e.allowedDomains, !(window.PRIVY_NATIVE_IOS || window.PRIVY_NATIVE_ANDROID || window.PRIVY_UNITY || (0, e_.l_)(window) || ew({
                                allowedOrigins: A,
                                url: p.origin
                            })))) return;
                        if (!(0 === (T = e.allowedDomains || []).length ? !(void 0 !== location.ancestorOrigins && location.ancestorOrigins.length > 1) : void 0 === location.ancestorOrigins || !(location.ancestorOrigins.length > 0) || [...location.ancestorOrigins].every(e => ew({
                                allowedOrigins: T,
                                url: e
                            })))) return eI(p, P.id, P.event, new c.D_("Frame ancestor is not allowed"));
                        if ("privy:iframe:ready" === P.event) return em(p, P.id, P.event, {});
                        if ("privy:mfa:clear" === P.event) {
                            let t = P.data.userId.replace(/^did:privy:/, "");
                            return await ed.A.del({
                                appId: e.appId,
                                userId: t
                            }), em(p, P.id, P.event, {})
                        }
                        let D = P.data.accessToken;
                        if (!D) return eI(p, P.id, P.event, new c.D_("Missing auth token."));
                        let K = await (0, eu.d)(D, i.current, e.appId);
                        if (!K) return eI(p, P.id, P.event, new c.D_("Invalid auth token."));
                        let {
                            userId: N,
                            appId: R
                        } = K;
                        try {
                            let s = null !== (_ = eh[P.event]) && void 0 !== _ ? _ : "embedded_wallet_iframe_invalid_event",
                                c = (t, a) => (0, u.$1)({
                                    appId: R,
                                    appClientId: o,
                                    accessToken: D,
                                    clientId: e.clientAnalyticsId,
                                    eventName: t,
                                    payload: {
                                        iframeClientType: (0, e_.yS)(window),
                                        ...a
                                    }
                                });
                            switch (eh.hasOwnProperty(P.event) && c("".concat(s, "_started"), { ..."privy:wallet:create" === P.event && P.data.recoveryMethod && {
                                    recoveryMethod: P.data.recoveryMethod
                                },
                                ..."privy:wallet:set-recovery-password" === P.event && {
                                    existingRecoveryMethod: P.data.existingRecoveryMethod,
                                    targetRecoveryMethod: "user-passcode"
                                },
                                ..."privy:wallet:set-recovery" === P.event && {
                                    existingRecoveryMethod: P.data.existingRecoveryMethod,
                                    targetRecoveryMethod: P.data.recoveryMethod
                                },
                                ..."privy:wallet:rpc" === P.event && P.data.requesterAppId && {
                                    requesterAppId: P.data.requesterAppId
                                }
                            }), P.event) {
                                case "privy:signer:create":
                                    {
                                        let {
                                            handleCreateP256Signer: e
                                        } = await a.e(9657).then(a.bind(a, 39657)),
                                        {
                                            publicKey: t
                                        } = await e({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            clientType: (0, e_.yS)(window),
                                            createWalletEvent: c,
                                            recoveryPassword: P.data.recoveryPassword,
                                            recoveryMethod: P.data.recoveryMethod,
                                            recoveryAccessToken: P.data.recoveryAccessToken,
                                            recoveryKey: P.data.recoveryKey,
                                            recoverySecretOverride: P.data.recoverySecretOverride,
                                            iCloudRecordNameOverride: P.data.iCloudRecordNameOverride
                                        });
                                        return em(p, P.id, P.event, {
                                            publicKey: t
                                        })
                                    }
                                case "privy:user-signer:sign":
                                    {
                                        let {
                                            handleUserSignerRequest: e
                                        } = await a.e(4741).then(a.bind(a, 27122)),
                                        {
                                            signature: t
                                        } = await e({
                                            appId: R,
                                            userId: N,
                                            appClientId: o,
                                            ...P.data,
                                            verificationKeys: i.current,
                                            hasSetMfaToken: n,
                                            cachedUserAuthorizationKey: r,
                                            createWalletEvent: c
                                        });
                                        return em(p, P.id, P.event, {
                                            signature: t
                                        })
                                    }
                                case "privy:wallets:add":
                                    {
                                        let {
                                            entropy: a,
                                            entropyType: r
                                        } = await (0, eo.A)({ ...P.data,
                                            appId: R,
                                            appClientId: o,
                                            verificationKeys: i.current,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            hasSetMfaToken: n,
                                            cache: t.current,
                                            createWalletEvent: c
                                        });
                                        if ("private-key" === r) throw new E.Pi("hd_wallet_required", "This action requires a hierarchical deterministic wallet. Imported wallets are not supported.");
                                        if ("bitcoin-taproot" === P.data.chainType || "bitcoin-segwit" === P.data.chainType) {
                                            let {
                                                address: e
                                            } = await m({ ...P.data,
                                                appId: R,
                                                appClientId: o,
                                                entropy: a,
                                                chainType: P.data.chainType
                                            });
                                            return em(p, P.id, P.event, {
                                                address: e,
                                                hdWalletIndex: P.data.hdWalletIndex
                                            })
                                        }
                                        if ("ethereum" === P.data.chainType) {
                                            let {
                                                address: e
                                            } = await (0, l.h6)({ ...P.data,
                                                appId: R,
                                                appClientId: o,
                                                entropy: a
                                            });
                                            return em(p, P.id, P.event, {
                                                address: e,
                                                hdWalletIndex: P.data.hdWalletIndex
                                            })
                                        }
                                        if ("solana" === P.data.chainType) {
                                            let {
                                                address: e
                                            } = await b({ ...P.data,
                                                appId: R,
                                                appClientId: o,
                                                entropy: a
                                            });
                                            return em(p, P.id, P.event, {
                                                address: e,
                                                hdWalletIndex: P.data.hdWalletIndex
                                            })
                                        }
                                        if ("p256" === P.data.chainType) throw new E.Pi("invalid_request_arguments", "Invalid chain type");
                                        return w(P.data.chainType, new E.Pi("invalid_request_arguments", "Unknown chain type"))
                                    }
                                case "privy:wallets:connect":
                                    return await B({
                                        appId: R,
                                        userId: N,
                                        address: P.data.entropyId
                                    }), em(p, P.id, P.event, {
                                        entropyId: P.data.entropyId
                                    });
                                case "privy:wallets:set-recovery":
                                    {
                                        let {
                                            entropy: a,
                                            entropyType: r
                                        } = await (0, eo.A)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cache: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.entropyId,
                                            entropyIdVerifier: P.data.entropyIdVerifier,
                                            accessToken: D,
                                            mfaCode: P.data.mfaCode,
                                            mfaMethod: P.data.mfaMethod,
                                            relyingParty: P.data.relyingParty,
                                            createWalletEvent: c
                                        });
                                        if ("ethereum-address-verifier" !== P.data.entropyIdVerifier && "solana-address-verifier" !== P.data.entropyIdVerifier) throw new E.Pi("invalid_request_arguments", "Unexpected entropy ID type: ".concat(P.data.entropyIdVerifier));
                                        if ("private-key" === r) throw new E.Pi("hd_wallet_required", "This action requires a hierarchical deterministic wallet. Imported wallets are not supported.");
                                        let d = await (0, l._U)({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            entropy: a,
                                            entropyId: P.data.entropyId,
                                            entropyIdVerifier: P.data.entropyIdVerifier,
                                            clientType: (0, e_.yS)(window),
                                            recoveryOptions: P.data,
                                            createWalletEvent: c
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: d.entropyId,
                                            existingRecoveryMethod: P.data.existingRecoveryMethod,
                                            targetRecoveryMethod: P.data.recoveryMethod
                                        }),
                                        em(p, P.id, P.event, {
                                            entropyId: d.entropyId,
                                            entropyIdVerifier: P.data.entropyIdVerifier,
                                            recoveryMethod: P.data.recoveryMethod
                                        })
                                    }
                                case "privy:wallets:recover":
                                    {
                                        let e = await (0, l.uP)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            ...P.data,
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            createWalletEvent: c,
                                            clientType: (0, e_.yS)(window)
                                        });
                                        return await y(R, N, e),
                                        c("".concat(s, "_completed"), {
                                            entropyId: e.entropyId
                                        }),
                                        em(p, P.id, P.event, {
                                            entropyId: e.entropyId
                                        })
                                    }
                                case "privy:wallets:rpc":
                                    {
                                        let a = await (0, l.JG)({
                                                hasSetMfaToken: n,
                                                verificationKeys: i.current,
                                                ...P.data,
                                                appId: R,
                                                userId: N,
                                                appClientId: o,
                                                clientAnalyticsId: e.clientAnalyticsId,
                                                cachedWalletData: t.current,
                                                createWalletEvent: c
                                            }),
                                            r = await q(a, P.data);
                                        return await y(R, N, a),
                                        c("".concat(s, "_completed"), {
                                            address: a.wallet.address,
                                            method: r.method,
                                            ...P.data.requesterAppId && {
                                                requesterAppId: P.data.requesterAppId
                                            }
                                        }),
                                        em(p, P.id, P.event, {
                                            address: a.wallet.address,
                                            response: r
                                        })
                                    }
                                case "privy:wallet:create":
                                    {
                                        let a;P.data.solanaAddress && (a = (await (0, l.JG)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cachedWalletData: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.solanaAddress,
                                            entropyIdVerifier: "solana-address-verifier",
                                            chainType: "solana",
                                            hdWalletIndex: 0,
                                            accessToken: D,
                                            mfaCode: null,
                                            mfaMethod: null,
                                            relyingParty: "",
                                            createWalletEvent: c
                                        })).entropy);
                                        let {
                                            wallet: r
                                        } = await (0, l.io)({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            existingEntropy: a,
                                            clientType: (0, e_.yS)(window),
                                            createWalletEvent: c,
                                            recoveryPassword: P.data.recoveryPassword,
                                            recoveryMethod: P.data.recoveryMethod,
                                            recoveryAccessToken: P.data.recoveryAccessToken,
                                            recoveryPin: P.data.recoveryPin,
                                            recoveryKey: P.data.recoveryKey,
                                            recoverySecretOverride: P.data.recoverySecretOverride,
                                            iCloudRecordNameOverride: P.data.iCloudRecordNameOverride
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: r.address
                                        }),
                                        em(p, P.id, P.event, {
                                            address: r.address
                                        })
                                    }
                                case "privy:wallet:create-additional":
                                    let I = await (0, l.JG)({
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        cachedWalletData: t.current,
                                        appId: R,
                                        appClientId: o,
                                        clientAnalyticsId: e.clientAnalyticsId,
                                        userId: N,
                                        entropyId: P.data.primaryWalletAddress,
                                        entropyIdVerifier: "ethereum-address-verifier",
                                        chainType: "ethereum",
                                        hdWalletIndex: 0,
                                        accessToken: D,
                                        mfaCode: null,
                                        mfaMethod: null,
                                        relyingParty: "",
                                        createWalletEvent: c
                                    });
                                    ec(I);
                                    let {
                                        entropy: g
                                    } = I, A = await (0, l.h6)({ ...P.data,
                                        appId: R,
                                        appClientId: o,
                                        entropy: g
                                    });
                                    return c("".concat(s, "_completed"), {
                                        address: A.address
                                    }), em(p, P.id, P.event, {
                                        address: A.address
                                    });
                                case "privy:wallet:import":
                                case "privy:wallets:import":
                                    {
                                        let {
                                            address: e
                                        } = await er({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            privateKey: P.data.privateKey,
                                            chainType: "chainType" in P.data ? P.data.chainType : "ethereum",
                                            mode: P.data.mode
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: e
                                        }),
                                        em(p, P.id, P.event, {
                                            address: e
                                        })
                                    }
                                case "privy:wallet:set-recovery-password":
                                case "privy:wallet:set-recovery":
                                    {
                                        let a = await (0, l.JG)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cachedWalletData: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.address,
                                            entropyIdVerifier: "ethereum-address-verifier",
                                            chainType: "ethereum",
                                            hdWalletIndex: 0,
                                            accessToken: D,
                                            mfaCode: P.data.mfaCode,
                                            mfaMethod: P.data.mfaMethod,
                                            relyingParty: P.data.relyingParty,
                                            createWalletEvent: c
                                        });
                                        if ("ethereum" !== a.chainType) throw new E.Pi("error", "Expected Ethereum wallet data");
                                        let r = "privy:wallet:set-recovery" === P.event ? P.data : { ...P.data,
                                            recoveryMethod: "user-passcode"
                                        };ec(a);
                                        let d = await (0, l._U)({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            entropy: a.entropy,
                                            entropyId: P.data.address,
                                            entropyIdVerifier: "ethereum-address-verifier",
                                            clientType: (0, e_.yS)(window),
                                            recoveryOptions: r,
                                            createWalletEvent: c
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: d.entropyId,
                                            existingRecoveryMethod: r.existingRecoveryMethod,
                                            targetRecoveryMethod: r.recoveryMethod
                                        }),
                                        em(p, P.id, P.event, {
                                            address: d.entropyId
                                        })
                                    }
                                case "privy:wallet:connect":
                                    return await B({
                                        appId: R,
                                        userId: N,
                                        address: P.data.address
                                    }), em(p, P.id, P.event, {
                                        address: P.data.address
                                    });
                                case "privy:wallet:recover":
                                    let T = await (0, l.uP)({
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        appId: R,
                                        createWalletEvent: c,
                                        appClientId: o,
                                        userId: N,
                                        accessToken: D,
                                        clientType: (0, e_.yS)(window),
                                        entropyId: P.data.address,
                                        entropyIdVerifier: "ethereum-address-verifier",
                                        recoveryPassword: P.data.recoveryPassword || P.data.recoveryPin,
                                        mfaCode: P.data.mfaCode,
                                        mfaMethod: P.data.mfaMethod,
                                        relyingParty: P.data.relyingParty,
                                        recoveryAccessToken: P.data.recoveryAccessToken,
                                        recoverySecretOverride: P.data.recoverySecretOverride
                                    });
                                    return await y(R, N, T), c("".concat(s, "_completed"), {
                                        address: T.wallet.address
                                    }), em(p, P.id, P.event, {
                                        address: T.wallet.address
                                    });
                                case "privy:wallet:rpc":
                                    {
                                        let a = await (0, l.JG)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cachedWalletData: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.address,
                                            entropyIdVerifier: "ethereum-address-verifier",
                                            chainType: "ethereum",
                                            hdWalletIndex: null !== (v = P.data.hdWalletIndex) && void 0 !== v ? v : 0,
                                            accessToken: D,
                                            mfaCode: P.data.mfaCode,
                                            mfaMethod: P.data.mfaMethod,
                                            relyingParty: P.data.relyingParty,
                                            createWalletEvent: c
                                        });
                                        if (await y(R, N, a), "ethereum" !== a.chainType) throw new E.Pi("error", "Expected Ethereum wallet data");
                                        let r = await (0, l.jt)(a, P.data.request);
                                        return c("".concat(s, "_completed"), {
                                            address: a.wallet.address,
                                            method: r.method,
                                            ...P.data.requesterAppId && {
                                                requesterAppId: P.data.requesterAppId
                                            }
                                        }),
                                        em(p, P.id, P.event, {
                                            address: P.data.address,
                                            response: r
                                        })
                                    }
                                case "privy:solana-wallet:create":
                                    {
                                        let a;
                                        if (P.data.ethereumAddress) {
                                            let r = await (0, l.JG)({
                                                hasSetMfaToken: n,
                                                verificationKeys: i.current,
                                                cachedWalletData: t.current,
                                                appId: R,
                                                appClientId: o,
                                                clientAnalyticsId: e.clientAnalyticsId,
                                                userId: N,
                                                entropyId: P.data.ethereumAddress,
                                                entropyIdVerifier: "ethereum-address-verifier",
                                                chainType: "solana",
                                                hdWalletIndex: 0,
                                                accessToken: D,
                                                mfaCode: P.data.mfaCode,
                                                mfaMethod: P.data.mfaMethod,
                                                relyingParty: P.data.relyingParty,
                                                createWalletEvent: c
                                            });
                                            ec(r), a = r.entropy
                                        }
                                        let {
                                            wallet: r
                                        } = await (0, l.kL)({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            accessToken: D,
                                            existingEntropy: a
                                        });
                                        return c("".concat(s, "_completed"), {
                                            publicKey: r.address
                                        }),
                                        em(p, P.id, P.event, {
                                            publicKey: r.address
                                        })
                                    }
                                case "privy:solana-wallet:create-additional":
                                    {
                                        let a = await (0, l.JG)({
                                                hasSetMfaToken: n,
                                                verificationKeys: i.current,
                                                cachedWalletData: t.current,
                                                appId: R,
                                                appClientId: o,
                                                userId: N,
                                                entropyId: P.data.primaryPublicKey,
                                                entropyIdVerifier: "solana-address-verifier",
                                                chainType: "solana",
                                                clientAnalyticsId: e.clientAnalyticsId,
                                                hdWalletIndex: 0,
                                                accessToken: D,
                                                mfaCode: null,
                                                mfaMethod: null,
                                                relyingParty: "",
                                                createWalletEvent: c
                                            }),
                                            {
                                                address: r
                                            } = await b({
                                                appId: R,
                                                appClientId: o,
                                                accessToken: D,
                                                hdWalletIndex: P.data.hdWalletIndex,
                                                entropy: a.entropy
                                            });
                                        return c("".concat(s, "_completed"), {
                                            address: r
                                        }),
                                        em(p, P.id, P.event, {
                                            publicKey: r
                                        })
                                    }
                                case "privy:solana-wallet:connect":
                                    return await B({
                                        appId: R,
                                        userId: N,
                                        address: P.data.publicKey
                                    }), em(p, P.id, P.event, {
                                        publicKey: P.data.publicKey
                                    });
                                case "privy:solana-wallet:recover":
                                    let K = await (0, l.uP)({
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        appId: R,
                                        appClientId: o,
                                        userId: N,
                                        accessToken: D,
                                        entropyId: P.data.publicKey,
                                        entropyIdVerifier: "solana-address-verifier",
                                        mfaCode: P.data.mfaCode,
                                        mfaMethod: P.data.mfaMethod,
                                        relyingParty: P.data.relyingParty,
                                        createWalletEvent: c,
                                        clientType: (0, e_.yS)(window),
                                        recoveryAccessToken: P.data.recoveryAccessToken,
                                        recoverySecretOverride: P.data.recoverySecretOverride,
                                        recoveryPassword: P.data.recoveryPassword
                                    });
                                    return await y(R, N, K), c("".concat(s, "_completed"), {
                                        publicKey: P.data.publicKey
                                    }), em(p, P.id, P.event, {
                                        publicKey: P.data.publicKey
                                    });
                                case "privy:solana-wallet:rpc":
                                    let L = await (0, l.JG)({
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        cachedWalletData: t.current,
                                        appId: R,
                                        appClientId: o,
                                        clientAnalyticsId: e.clientAnalyticsId,
                                        userId: N,
                                        entropyId: P.data.publicKey,
                                        entropyIdVerifier: "solana-address-verifier",
                                        chainType: "solana",
                                        hdWalletIndex: null !== (h = P.data.hdWalletIndex) && void 0 !== h ? h : 0,
                                        accessToken: D,
                                        mfaCode: P.data.mfaCode,
                                        mfaMethod: P.data.mfaMethod,
                                        relyingParty: P.data.relyingParty,
                                        createWalletEvent: c
                                    });
                                    if (await y(R, N, L), "solana" !== L.chainType) throw new E.Pi("error", "Expected Ethereum wallet data");
                                    let U = await (0, l.Zv)(L.wallet.keypair, P.data);
                                    return c("".concat(s, "_completed"), {
                                        method: U.method,
                                        publicKey: P.data.publicKey
                                    }), em(p, P.id, P.event, {
                                        publicKey: P.data.publicKey,
                                        response: U
                                    });
                                case "privy:delegated-actions:consent":
                                    {
                                        let a;
                                        if ("ethereum" === P.data.rootWallet.chainType) {
                                            let r = await (0, l.JG)({
                                                hasSetMfaToken: n,
                                                verificationKeys: i.current,
                                                cachedWalletData: t.current,
                                                appId: R,
                                                appClientId: o,
                                                clientAnalyticsId: e.clientAnalyticsId,
                                                userId: N,
                                                entropyId: P.data.rootWallet.address,
                                                entropyIdVerifier: "ethereum-address-verifier",
                                                chainType: "ethereum",
                                                hdWalletIndex: 0,
                                                accessToken: D,
                                                mfaCode: P.data.mfaCode,
                                                mfaMethod: P.data.mfaMethod,
                                                relyingParty: P.data.relyingParty,
                                                createWalletEvent: c
                                            });
                                            ec(r), a = r.entropy
                                        } else if ("solana" === P.data.rootWallet.chainType) {
                                            let r = await (0, l.JG)({
                                                hasSetMfaToken: n,
                                                verificationKeys: i.current,
                                                cachedWalletData: t.current,
                                                appId: R,
                                                appClientId: o,
                                                clientAnalyticsId: e.clientAnalyticsId,
                                                userId: N,
                                                entropyId: P.data.rootWallet.address,
                                                entropyIdVerifier: "solana-address-verifier",
                                                chainType: "solana",
                                                hdWalletIndex: 0,
                                                accessToken: D,
                                                mfaCode: P.data.mfaCode,
                                                mfaMethod: P.data.mfaMethod,
                                                relyingParty: P.data.relyingParty,
                                                createWalletEvent: c
                                            });
                                            ec(r), a = r.entropy
                                        } else throw new E.Pi("invalid_request_arguments", "Unexpected chain type for root delegation wallet");
                                        return await S({
                                            entropy: a,
                                            delegatedWallets: P.data.delegatedWallets,
                                            appId: R,
                                            appClientId: o,
                                            accessToken: D
                                        }),
                                        em(p, P.id, P.event, {
                                            success: !0
                                        })
                                    }
                                case "privy:mfa:verify":
                                    return await (0, ei.X)({
                                        appId: R,
                                        appClientId: o,
                                        userId: N,
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        createWalletEvent: c,
                                        ...P.data
                                    }), em(p, P.id, P.event, {});
                                case "privy:mfa:init-enrollment":
                                    {
                                        let e = await en({
                                            appId: R,
                                            appClientId: o,
                                            userId: N,
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            createWalletEvent: c,
                                            ...P.data
                                        });
                                        return em(p, P.id, P.event, {
                                            method: P.data.method,
                                            secret: e.totpSecret,
                                            authUrl: e.totpAuthUrl
                                        })
                                    }
                                case "privy:mfa:submit-enrollment":
                                    return await es({
                                        appId: R,
                                        appClientId: o,
                                        userId: N,
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        createWalletEvent: c,
                                        ...P.data
                                    }), await y(R, N, null), n.current = !0, em(p, P.id, P.event, {});
                                case "privy:mfa:unenroll":
                                    return await el({
                                        appId: R,
                                        appClientId: o,
                                        userId: N,
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        createWalletEvent: c,
                                        ...P.data
                                    }), await y(R, N, null), n.current = !1, em(p, P.id, P.event, {});
                                case "privy:auth:unlink-passkey":
                                    return await ey({
                                        appId: R,
                                        appClientId: o,
                                        userId: N,
                                        hasSetMfaToken: n,
                                        verificationKeys: i.current,
                                        createWalletEvent: c,
                                        ...P.data
                                    }), await y(R, N, null), n.current = !1, em(p, P.id, P.event, {});
                                case "privy:farcaster:init-signer":
                                    {
                                        let a = await (0, l.JG)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cachedWalletData: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.address,
                                            entropyIdVerifier: "ethereum-address-verifier",
                                            chainType: "ethereum",
                                            hdWalletIndex: null !== (f = P.data.hdWalletIndex) && void 0 !== f ? f : 0,
                                            accessToken: D,
                                            mfaCode: P.data.mfaCode,
                                            mfaMethod: P.data.mfaMethod,
                                            relyingParty: P.data.relyingParty,
                                            createWalletEvent: c
                                        });await y(R, N, a),
                                        ec(a);
                                        let {
                                            entropy: r
                                        } = a,
                                        d = await O({
                                            appId: R,
                                            appClientId: o,
                                            entropy: r,
                                            accessToken: P.data.accessToken
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: a.wallet.address
                                        }),
                                        em(p, P.id, P.event, d)
                                    }
                                case "privy:farcaster:sign":
                                    {
                                        let a = await (0, l.JG)({
                                            hasSetMfaToken: n,
                                            verificationKeys: i.current,
                                            cachedWalletData: t.current,
                                            appId: R,
                                            appClientId: o,
                                            clientAnalyticsId: e.clientAnalyticsId,
                                            userId: N,
                                            entropyId: P.data.address,
                                            entropyIdVerifier: "ethereum-address-verifier",
                                            chainType: "ethereum",
                                            hdWalletIndex: 0,
                                            accessToken: D,
                                            mfaCode: P.data.mfaCode,
                                            mfaMethod: P.data.mfaMethod,
                                            relyingParty: P.data.relyingParty,
                                            createWalletEvent: c
                                        });await y(R, N, a);
                                        let r = d._d.toBuffer(P.data.payload.hash);ec(a);
                                        let {
                                            entropy: u
                                        } = a,
                                        {
                                            privateKey: _
                                        } = await C(u),
                                        v = function(e) {
                                            let {
                                                farcasterSignerPrivateKey: t,
                                                hash: a
                                            } = e;
                                            if (20 !== a.length) {
                                                let e = M.from(a).toString("utf-8");
                                                try {
                                                    k.parse(e)
                                                } catch (e) {
                                                    throw Error("Invalid blake3 hash length. Expected 20 bytes.")
                                                }
                                            }
                                            return x.ev.sign(a, t)
                                        }({
                                            farcasterSignerPrivateKey: _,
                                            hash: r
                                        });
                                        return c("".concat(s, "_completed"), {
                                            address: a.wallet.address
                                        }),
                                        em(p, P.id, P.event, {
                                            hash: P.data.payload.hash,
                                            signature: d._d.fromBuffer(v)
                                        })
                                    }
                            }
                        } catch (e) {
                            if ((0, E.$J)(e)) return N && await ed.A.del({
                                appId: R,
                                userId: N
                            }), eI(p, P.id, P.event, new E.Pi("missing_or_invalid_mfa", "MFA verification failed"));
                            if (function(e) {
                                    var t, a;
                                    let r = null === (t = e.data) || void 0 === t ? void 0 : t.code,
                                        i = [s.s.INVALID_DATA, s.s.NOT_SUPPORTED, s.s.INVALID_DATA, s.s.NOT_SUPPORTED, s.s.USER_UNSUBSCRIBED].includes(r);
                                    return (null === (a = e.response) || void 0 === a ? void 0 : a.status) === 422 && i
                                }(e)) return N && await ed.A.del({
                                appId: R,
                                userId: N
                            }), eI(p, P.id, P.event, new E.Pi("twilio_verification_failed", null !== (g = null === (I = e.data) || void 0 === I ? void 0 : I.error) && void 0 !== g ? g : "MFA enrollment failed"));
                            eI(p, P.id, P.event, e);
                            return
                        }
                    }
                    return (0, e_.k3)(window) ? document.addEventListener("message", p) : window.addEventListener("message", p), () => {
                        (0, e_.k3)(window) ? document.removeEventListener("message", p): window.removeEventListener("message", p)
                    }
                }, [e.allowedDomains, e.appId, e.appClientId]), null
            }
            var eA = !0;

            function eE(e) {
                let {
                    appId: t,
                    appClientId: a,
                    clientAnalyticsId: i,
                    allowedDomains: d,
                    apiUrl: o,
                    verificationKeys: s
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n(), {
                        children: (0, r.jsx)("title", {
                            children: "Wallet \xb7 Privy"
                        })
                    }), (0, r.jsx)(eg, {
                        verificationKeys: s,
                        appId: t,
                        appClientId: a,
                        clientAnalyticsId: i,
                        allowedDomains: d,
                        apiUrl: o
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8639, 2966, 6569, 741, 1040, 1078, 7353, 2181, 5327, 8194, 6871, 267, 8420, 8825, 636, 6593, 8792], () => t(3854)), _N_E = e.O()
    }
]);