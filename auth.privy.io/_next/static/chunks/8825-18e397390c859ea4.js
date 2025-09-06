(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8825], {
        2288: (e, t, r) => {
            "use strict";
            r.d(t, {
                GR: () => i,
                Io: () => c,
                cf: () => o,
                oG: () => n
            });
            var a = r(96752);
            let i = "privy.io",
                n = "ES256",
                o = "aid",
                s = {
                    att: "pat"
                };

            function c(e) {
                return a.iU(e).att === s.att
            }
        },
        6053: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => s
            });
            var a = r(24610),
                i = r(12318),
                n = r(79822),
                o = r(27510);
            async function s(e) {
                let {
                    appId: t,
                    appClientId: r,
                    userId: s,
                    walletAddress: c,
                    accessToken: l,
                    clientType: d,
                    recoveryPassword: u,
                    recoveryMethod: p,
                    recoveryAccessToken: y,
                    recoveryPin: v,
                    recoveryKey: w,
                    recoverySecretOverride: f,
                    iCloudRecordNameOverride: h,
                    createWalletEvent: _
                } = e, m = u || v;
                if (void 0 !== m && !(0, o.jt)(m)) throw new a.Pi("invalid_request_arguments", "Failed to create wallet: invalid recovery pin");
                if ("icloud-native" === p && (!f || !h)) throw new a.Pi("invalid_request_arguments", "Failed to create wallet: recoverySecret and iCloudRecordName must be overridden for icloud-native recovery");
                if ("icloud-native" !== p && (f || h)) throw new a.Pi("invalid_request_arguments", "Failed to create wallet: recoverySecret and iCloudRecordName can only be overridden for icloud-native recovery");
                if ("recovery-encryption-key" === p && !w) throw new a.Pi("invalid_request_arguments", "Failed to create wallet: invalid recovery key");
                let g = p ? i.Z[p] : void 0;
                g || (g = void 0 !== m ? "user_passcode_derived_recovery_key" : "privy_generated_recovery_key");
                let b = (0, n.Zw)({
                        recoveryType: g,
                        appId: t,
                        appClientId: r,
                        userId: s,
                        entropyId: c,
                        clientType: d,
                        recoveryPassword: m,
                        recoveryKey: w,
                        recoveryAccessToken: y,
                        accessToken: l,
                        recoverySecretOverride: f,
                        iCloudRecordNameOverride: h,
                        createWalletEvent: _
                    }),
                    {
                        encryptionKey: k,
                        walletRecoveryOutput: I
                    } = await (0, n.cq)(b);
                return {
                    encryptionKey: k,
                    walletRecoveryOutput: I,
                    recoveryType: g
                }
            }
        },
        6159: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => n
            });
            var a = r(96752),
                i = r(2288);
            async function n(e, t, r) {
                if (!e) return console.error("No access token provided."), null;
                try {
                    var a;
                    let i = await o(e, r, t),
                        n = (a = i.payload.sub, "string" == typeof a && /^did:privy:.+/.test(a) ? a.replace(/^did:privy:/, "") : null);
                    if (!n) return console.error("Unable to decode user ID. Audience claim:", i.payload.aud), null;
                    if (!i.payload.aud) return console.error("Access token does not contain an audience claim."), null;
                    return console.debug("Successfully verified access token."), {
                        userId: n,
                        appId: r
                    }
                } catch (e) {
                    return console.error(e), null
                }
            }
            async function o(e, t, r) {
                let n = {
                        typ: "JWT",
                        algorithms: [i.oG],
                        issuer: i.GR
                    },
                    o = (0, i.Io)(e);
                o || (n.audience = t);
                let s = await Promise.allSettled(r.map(async r => {
                        let s = await a.jU(r, i.oG),
                            c = await a.Vv(e, s, n);
                        if (o && c.payload[i.cf] !== t) throw Error("Access token does not have correct appId");
                        return c
                    })),
                    c = s.find(e => "fulfilled" === e.status);
                if (!c) throw s[0].reason;
                return c.value
            }
        },
        6426: (e, t, r) => {
            "use strict";

            function a(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            r.d(t, {
                Zr: () => a,
                j8: () => n,
                lM: () => c,
                vz: () => i,
                yy: () => o
            });
            let i = e => {
                    if (!e) return "";
                    let t = e.slice(0, 5),
                        r = e.slice(e.length - 4, e.length);
                    return "".concat(t, "...").concat(r)
                },
                n = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = new URL(t, e.endsWith("/") ? e : "".concat(e, "/"));
                    for (let [e, t] of Object.entries(r)) a.searchParams.set(e, t);
                    return a.href
                },
                o = (e, t) => {
                    let r = t ? Math.floor(Math.random() * (2 * t + 1)) - t : 0;
                    return new Promise(t => setTimeout(t, e + r))
                },
                s = /\.g\.alchemy\.com/i;

            function c(e) {
                return s.test(e)
            }
        },
        7800: (e, t, r) => {
            "use strict";
            r.d(t, {
                NG: () => Y,
                vo: () => W,
                vh: () => H
            });
            var a = r(29358),
                i = r(6426),
                n = r(28338),
                o = r(30428),
                s = r(52659),
                c = r(45949),
                l = r(70201),
                d = r(28425),
                u = r(24047),
                p = r(3010),
                y = r(10250),
                v = r(19961),
                w = r(11600),
                f = r(98834),
                h = r(1811),
                _ = r(55416),
                m = r(67049),
                g = r(46616),
                b = r(12155),
                k = r(18189),
                I = r(15232),
                P = r(42913),
                E = r(71239),
                T = r(28255),
                A = r(36100),
                K = r(98186),
                S = r(39726),
                U = r(76022),
                x = r(57488),
                C = r(26903),
                F = r(98302),
                R = r(44073),
                M = r(15720),
                q = r(9678),
                N = r(71023),
                G = r(76373),
                O = r(12644);
            let V = (0, O.x)({
                    id: 69e3,
                    name: "Animechain",
                    nativeCurrency: {
                        decimals: 18,
                        name: "ANIME",
                        symbol: "ANIME"
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc-animechain-39xf6m45e3.t.conduit.xyz"],
                            webSocket: ["wss://rpc-animechain-39xf6m45e3.t.conduit.xyz"]
                        }
                    },
                    explorers: {
                        default: {
                            name: "Animechain Explorer"
                        }
                    }
                }),
                L = (0, O.x)({
                    id: 6900,
                    name: "Animechain Testnet",
                    nativeCurrency: {
                        decimals: 18,
                        name: "ANIME",
                        symbol: "ANIME"
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc-animechain-testnet-i8yja6a1a0.t.conduit.xyz"],
                            webSocket: ["wss://rpc-animechain-testnet-i8yja6a1a0.t.conduit.xyz"]
                        }
                    },
                    blockExplorers: {
                        default: {
                            name: "Explorer",
                            url: "https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz"
                        }
                    }
                });
            var D = r(45972),
                B = r(39435);
            let j = {
                    [n.D.id]: { ...n.D,
                        rpcUrls: { ...n.D.rpcUrls,
                            privy: {
                                http: ["https://arbitrum-mainnet.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://fragrant-nameless-voice.arbitrum-mainnet.quiknode.pro/d5ede1d872f61ca465685a9e08928a0256fa8b0d"]
                            }
                        }
                    },
                    [o.R.id]: o.R,
                    [s.Y.id]: { ...s.Y,
                        rpcUrls: { ...s.Y.rpcUrls,
                            privy: {
                                http: ["https://arbitrum-sepolia.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://soft-dark-surf.arbitrum-sepolia.quiknode.pro/689e47a7bda68d3964d650cd58fe163caeb0ab87"]
                            }
                        }
                    },
                    [c.m.id]: { ...c.m,
                        rpcUrls: { ...c.m.rpcUrls,
                            privyInternal: {
                                http: ["https://responsive-broken-owl.avalanche-mainnet.quiknode.pro/2233f2a49b147da704f53ae73553912d83ffb598/ext/bc/C/rpc"]
                            }
                        }
                    },
                    [l.C.id]: { ...l.C,
                        rpcUrls: { ...l.C.rpcUrls,
                            privyInternal: {
                                http: ["https://quick-attentive-uranium.avalanche-testnet.quiknode.pro/89d5550a095b80f1e08100f5e87d72e6a7b339bb/ext/bc/C/rpc"]
                            }
                        }
                    },
                    [d.E.id]: { ...d.E,
                        rpcUrls: { ...d.E.rpcUrls,
                            default: {
                                http: ["https://thrumming-thrumming-pool.base-mainnet.quiknode.pro/afc8a0038cd744f30fd210e6f8c6b59ed5817bd7"]
                            },
                            privy: {
                                http: ["https://base-mainnet.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://fittest-wild-frog.base-mainnet.quiknode.pro/3474cf7682996021cbed75bfb11ec811dfed6ac2"]
                            }
                        }
                    },
                    [u.C.id]: p.h,
                    [y.Z.id]: { ...y.Z,
                        rpcUrls: { ...y.Z.rpcUrls,
                            privy: {
                                http: ["https://base-sepolia.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://convincing-radial-fog.base-sepolia.quiknode.pro/88a4344ee41e533489e61d5ce0fc056427e6a300"]
                            }
                        }
                    },
                    [v._.id]: { ...v._,
                        rpcUrls: { ...v._.rpcUrls,
                            privyInternal: {
                                http: ["https://holy-special-frog.bera-mainnet.quiknode.pro/f7e9c0c78b563f8c523f26ddd7f059f8cfa87815"]
                            }
                        }
                    },
                    [w.J.id]: w.J,
                    [f.v.id]: { ...f.v,
                        rpcUrls: { ...f.v.rpcUrls,
                            privyInternal: {
                                http: ["https://solemn-quaint-wave.blast-mainnet.quiknode.pro/3c46fec2cb08af962d6cafaf27bcaf88c83a445e"]
                            }
                        }
                    },
                    [h._.id]: { ...h._,
                        rpcUrls: { ...h._.rpcUrls,
                            privyInternal: {
                                http: ["https://lively-soft-crater.blast-sepolia.quiknode.pro/1edf7cc37566abfcf8f8c711550cf3062c80418e"]
                            }
                        }
                    },
                    [_.N.id]: { ..._.N,
                        rpcUrls: { ..._.N.rpcUrls,
                            default: {
                                http: ["https://quiet-burned-dust.bsc.quiknode.pro/a0d86563bc5d99e49d7d72ca422da0e761b4e257"]
                            },
                            privyInternal: {
                                http: ["https://quiet-burned-dust.bsc.quiknode.pro/a0d86563bc5d99e49d7d72ca422da0e761b4e257"]
                            }
                        }
                    },
                    [m.A.id]: { ...m.A,
                        rpcUrls: { ...m.A.rpcUrls,
                            privyInternal: {
                                http: ["https://burned-boldest-spree.celo-mainnet.quiknode.pro/701b6130a1791c98636339709fb2bc0db17386c3"]
                            }
                        }
                    },
                    [g.p.id]: g.p,
                    [b.G.id]: b.G,
                    [k.O.id]: k.O,
                    [I.r.id]: { ...I.r,
                        rpcUrls: { ...I.r.rpcUrls,
                            default: {
                                http: ["https://crimson-wider-silence.quiknode.pro/50060fe02eaca407606719d97f4f204f28da43ed"]
                            },
                            privy: {
                                http: ["https://mainnet.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://convincing-chaotic-shard.quiknode.pro/2938f488262e10f0ace44735bc33c936e3f77e07"]
                            }
                        }
                    },
                    [p.h.id]: p.h,
                    [P.G.id]: { ...P.G,
                        rpcUrls: { ...P.G.rpcUrls,
                            default: {
                                http: ["https://quaint-morning-star.ethereum-sepolia.quiknode.pro/0063bd92e4f0adaa5b76cbd168121be661100ed9/"]
                            },
                            privy: {
                                http: ["https://sepolia.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://winter-withered-pool.ethereum-sepolia.quiknode.pro/1ff40c6d363faac7514f9633ee958e71c6f007c4"]
                            }
                        }
                    },
                    [E.y.id]: E.y,
                    [T._.id]: { ...T._,
                        rpcUrls: { ...T._.rpcUrls,
                            privyInternal: {
                                http: ["https://wiser-muddy-pallet.linea-mainnet.quiknode.pro/7838ef59fa41a994252afa35b0d982b6331a0f39"]
                            }
                        }
                    },
                    [A.Z.id]: A.Z,
                    [K.F.id]: { ...K.F,
                        rpcUrls: { ...K.F.rpcUrls,
                            privyInternal: {
                                http: ["https://bold-damp-pallet.monad-testnet.quiknode.pro/7c89c1d5c820434df06751edeb3766ff8191e066"]
                            }
                        }
                    },
                    [S.F.id]: S.F,
                    [U.R.id]: { ...U.R,
                        rpcUrls: { ...U.R.rpcUrls,
                            privy: {
                                http: ["https://optimism-mainnet.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://wiser-maximum-wind.optimism.quiknode.pro/2b589e60ecc57b5fa0f9072095d94688e5d12a3a"]
                            }
                        }
                    },
                    [x.t.id]: x.t,
                    [C.i.id]: { ...C.i,
                        rpcUrls: { ...C.i.rpcUrls,
                            privy: {
                                http: ["https://optimism-sepolia.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://still-alien-sailboat.optimism-sepolia.quiknode.pro/d0eeb804d0819460def751002c668f9e516e6d89"]
                            }
                        }
                    },
                    [F.n.id]: { ...F.n,
                        rpcUrls: { ...F.n.rpcUrls,
                            privy: {
                                http: ["https://polygon-mainnet.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://cosmological-greatest-dew.matic.quiknode.pro/270a55743ed292cdc3584bedb02d11ff04ee0254"]
                            }
                        }
                    },
                    [R.E.id]: R.E,
                    [M.n.id]: { ...M.n,
                        rpcUrls: { ...M.n.rpcUrls,
                            privy: {
                                http: ["https://polygon-amoy.rpc.privy.systems"]
                            },
                            privyInternal: {
                                http: ["https://blue-damp-putty.matic-amoy.quiknode.pro/0794ce42ea9006c75fb07eca4ad2c43765b26ed4"]
                            }
                        }
                    },
                    [q.L.id]: q.L,
                    [N.a.id]: N.a,
                    [G.u.id]: { ...G.u,
                        rpcUrls: { ...G.u.rpcUrls,
                            privyInternal: {
                                http: ["https://wild-proportionate-snow.worldchain-mainnet.quiknode.pro/823ce20c28dcb8793e04dc47d5841ebf3e449436"]
                            }
                        }
                    },
                    [V.id]: V,
                    [L.id]: L,
                    [D.J.id]: D.J,
                    [B.o.id]: B.o
                },
                z = {
                    8453: "https://base-mainnet.blastapi.io",
                    84531: "https://base-goerli.blastapi.io"
                },
                W = e => {
                    let t = j[e];
                    if (!t) throw Error("Unsupported chainId ".concat(e));
                    return t
                },
                H = e => {
                    var t, r;
                    let n;
                    let o = W(e);
                    if (null === (t = o.rpcUrls.infura) || void 0 === t ? void 0 : t.http[0]) {
                        if (!a.A.PRIVY_INFURA_ID) throw Error("Missing Infura ID for RPC URL");
                        n = (0, i.j8)(o.rpcUrls.infura.http[0], a.A.PRIVY_INFURA_ID)
                    } else if (z[e]) {
                        if (!a.A.PRIVY_BLAST_ID) throw Error("Missing Blast ID for RPC URL");
                        n = (0, i.j8)(z[e], a.A.PRIVY_BLAST_ID)
                    } else n = null === (r = o.rpcUrls.default) || void 0 === r ? void 0 : r.http[0];
                    if (!n) throw Error("No RPC url found for ".concat(e));
                    return n
                },
                Y = e => {
                    if (e.startsWith("eip155:")) return Number(e.split(":")[1]);
                    throw Error("Not an EVM CAIP2: ".concat(e))
                }
        },
        8195: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => n,
                r: () => i
            });
            var a = r(78933);
            class i {
                async getItem(e) {
                    let t = this.cacheStorage.getItem(e);
                    if (null !== t) return t;
                    try {
                        let {
                            value: t
                        } = await this.makeCallToApp({
                            event: "app:secure-storage:get",
                            data: {
                                key: e
                            }
                        });
                        return t && this.cacheStorage.setItem(e, t), t
                    } catch (e) {
                        return null
                    }
                }
                async setItem(e, t) {
                    try {
                        let {
                            success: r
                        } = await this.makeCallToApp({
                            event: "app:secure-storage:set",
                            data: {
                                key: e,
                                value: t
                            }
                        });
                        r && this.cacheStorage.setItem(e, t)
                    } catch (e) {
                        return
                    }
                }
                async removeItem(e) {
                    this.cacheStorage.removeItem(e);
                    try {
                        await this.makeCallToApp({
                            event: "app:secure-storage:remove",
                            data: {
                                key: e
                            }
                        })
                    } catch (e) {
                        return
                    }
                }
                async makeCallToApp(e) {
                    return await new Promise((t, r) => {
                        let a = Math.random().toString(36).slice(2);
                        this.appMessaging.sendMessage(JSON.stringify({ ...e,
                            id: a
                        }));
                        let i = r => {
                            let n = this.parseMessageEventToResponse(r);
                            n.event === e.event && n.id === a && (this.appMessaging.removeMessageListener(i), t(n.data))
                        };
                        this.appMessaging.addMessageListener(i), setTimeout(() => {
                            this.appMessaging.removeMessageListener(i), r(Error("Timed out waiting for the application to respond"))
                        }, 200)
                    })
                }
                parseMessageEventToResponse(e) {
                    return "string" == typeof e.data ? JSON.parse(e.data) : e.data
                }
                constructor(e, t) {
                    this.cacheStorage = e, this.appMessaging = t
                }
            }
            let n = () => {
                try {
                    var e, t;
                    if (!(0, a.l_)(window)) return !1;
                    let r = null === (t = window.ReactNativeWebView) || void 0 === t ? void 0 : null === (e = t.injectedObjectJson) || void 0 === e ? void 0 : e.call(t);
                    if (!r) return !1;
                    let i = JSON.parse(r);
                    if ("object" != typeof i || null === i) return !1;
                    return "shouldUseAppBackedStorage" in i && !0 === i.shouldUseAppBackedStorage
                } catch (e) {
                    return console.warn("Unable to determine if app-backed storage is supported", e), !1
                }
            }
        },
        8379: () => {},
        10526: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => a
            });
            class a {
                getItem(e) {
                    let t = this.data[e];
                    return void 0 !== t ? t : null
                }
                setItem(e, t) {
                    this.data[e] = String(t)
                }
                removeItem(e) {
                    delete this.data[e]
                }
                constructor() {
                    this.data = {}
                }
            }
        },
        12318: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            let a = {
                "recovery-encryption-key": "recovery_encryption_key",
                "user-passcode": "user_passcode_derived_recovery_key",
                privy: "privy_generated_recovery_key",
                "google-drive": "google_drive_recovery_secret",
                icloud: "icloud_recovery_secret",
                "icloud-native": "icloud_recovery_secret"
            }
        },
        15519: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var a = r(24610),
                i = r(46707);

            function n(e, t) {
                let {
                    request: r,
                    signingPublicKey: n,
                    publicKey: o,
                    hdWalletIndex: s
                } = t;
                if (void 0 !== s && 0 !== s && void 0 === n) throw new a.Pi("invalid_request_arguments", "signingPublicKey must be passed when signing with a wallet with an HD index that is not 0.");
                return i.p({
                    keypair: e,
                    request: r,
                    expectedPublicKey: null != n ? n : o
                })
            }
        },
        15775: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => s
            });
            var a = r(96355),
                i = r(40695),
                n = r(43543),
                o = r(73095);

            function s(e) {
                let {
                    entropy: t,
                    index: r,
                    pathType: s
                } = e, l = a.c.fromMasterSeed((0, i.kw)((0, i.VF)(t, n.p))).derive(c(r, s));
                if (!l.publicKey || !l.privateKey) throw Error("Error deriving HD node for entropy");
                let d = "taproot" === s ? (0, o.bv)("tr", l.privateKey) : (0, o.bv)("wpkh", l.privateKey);
                if (!d) throw Error("Error deriving address from private key");
                return {
                    _node: l,
                    address: d,
                    privateKey: l.privateKey,
                    publicKey: l.publicKey
                }
            }
            let c = (e, t) => "taproot" === t ? "m/86'/0'/0'/0/".concat(e) : "m/84'/0'/0'/0/".concat(e)
        },
        16150: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => c,
                k: () => o
            });
            var a = r(19600),
                i = r(98114);
            let n = {
                    0: "legacy",
                    1: "eip2930",
                    2: "eip1559",
                    3: "eip4844",
                    4: "eip7702"
                },
                o = {
                    legacy: 0,
                    eip2930: 1,
                    eip1559: 2,
                    eip4844: 3,
                    eip7702: 4
                },
                s = e => void 0 !== e ? BigInt(e) : void 0;

            function c(e) {
                let t, {
                    type: r = 2,
                    ...o
                } = "string" == typeof e ? JSON.parse(e) : e;
                o.accessList && Array.isArray(o.accessList) ? t = o.accessList.map(e => Array.isArray(e) ? {
                    address: e[0],
                    storageKeys: e[1]
                } : e) : o.accessList && (t = Object.entries(o.accessList).map(e => ({
                    address: e[0],
                    storageKeys: e[1]
                })));
                let c = Number(o.chainId ? ? 1),
                    l = (0, a.q)(o.data) ? o.data : o.data ? (0, i.nj)(Uint8Array.from(o.data)) : void 0,
                    d = o.nonce ? Number(o.nonce) : void 0,
                    u = {
                        chainId: c,
                        data: l,
                        nonce: d,
                        value: s(o.value),
                        gas: s(o.gas ? ? o.gasLimit)
                    },
                    p = Number(r);
                if (0 === p) return { ...o,
                    type: n[p],
                    ...u,
                    gasPrice: s(o.gasPrice),
                    accessList: void 0,
                    maxFeePerGas: void 0,
                    maxPriorityFeePerGas: void 0
                };
                if (1 === p) return { ...o,
                    type: n[p],
                    ...u,
                    gasPrice: s(o.gasPrice),
                    accessList: t,
                    maxFeePerGas: void 0,
                    maxPriorityFeePerGas: void 0
                };
                if (2 === p) return { ...o,
                    type: n[p],
                    ...u,
                    nonce: d,
                    accessList: t,
                    maxFeePerGas: s(o.maxFeePerGas),
                    maxPriorityFeePerGas: s(o.maxPriorityFeePerGas),
                    gasPrice: void 0,
                    maxFeePerBlobGas: void 0
                };
                throw Error(`Unsupported transaction type: ${r}`)
            }
        },
        18296: e => {
            "use strict";
            e.exports = {
                getGlobalPrivyAuthUrl: () => "https://auth.privy.io"
            }
        },
        20897: (e, t, r) => {
            "use strict";
            r.d(t, {
                WT: () => l,
                hf: () => s,
                yt: () => c
            });
            var a = r(63645),
                i = r(46871),
                n = r(24610);
            let o = "https://api.apple-cloudkit.com/database/1";
            async function s(e, t, r, a) {
                let n = await (0, i.AI)({
                    appId: e,
                    appClientId: t,
                    accessToken: r,
                    data: {
                        client_type: a
                    }
                });
                return {
                    cloudKitContainerIdentifier: n.container_identifier,
                    cloudKitEnvironment: n.environment,
                    cloudKitApiToken: n.api_token
                }
            }
            async function c(e) {
                var t, r, i;
                let {
                    ckWebAuthToken: s,
                    recoverySecretToStore: c,
                    entropyId: l,
                    appId: d,
                    userId: u,
                    cloudKitContainerIdentifier: p,
                    cloudKitEnvironment: y,
                    cloudKitApiToken: v
                } = e, w = encodeURIComponent(s), f = "".concat(o, "/").concat(p, "/").concat(y, "/private/records/modify?ckAPIToken=").concat(v, "&ckWebAuthToken=").concat(w), h = await a.OT.raw(f, {
                    method: "POST",
                    body: {
                        operations: [{
                            operationType: "create",
                            record: {
                                recordType: "PrivyWallets",
                                fields: {
                                    recovery_secret: {
                                        value: c
                                    },
                                    wallet_address: {
                                        value: l
                                    },
                                    app_id: {
                                        value: d
                                    },
                                    user_id: {
                                        value: u
                                    }
                                }
                            }
                        }]
                    },
                    headers: {
                        "Content-Type": "application/json"
                    },
                    ignoreResponseError: !0
                });
                if (!(null == h ? void 0 : null === (t = h._data) || void 0 === t ? void 0 : t.records) || (null == h ? void 0 : null === (r = h._data) || void 0 === r ? void 0 : r.records.length) === 0 || !(null === (i = h._data.records) || void 0 === i ? void 0 : i[0])) throw new n.RO("no_icloud_record_found", "Failed to store wallet: unknown issue storing recovery secret", {
                    eventName: "icloud_write_error",
                    payload: {
                        detail: "no_icloud_record_found"
                    }
                });
                if (h._data.records.length > 1) throw new n.RO("multiple_icloud_records_found", "Failed to store wallet: multiple iCloud records found for the user", {
                    eventName: "icloud_write_error",
                    payload: {
                        detail: "multiple_icloud_records_found"
                    }
                });
                let _ = h._data.records[0];
                if ("serverErrorCode" in _) throw console.warn("Unable to store with iCloud: ".concat(_.reason)), new n.RO("unknown_icloud_storage_error", "Failed to store wallet: iCloud errored with code ".concat(_.serverErrorCode), {
                    eventName: "icloud_write_error",
                    payload: {
                        detail: "icloud_server_issue",
                        icloud_error_code: _.serverErrorCode,
                        icloud_status: h.status,
                        icloud_error_uuid: _.uuid
                    }
                });
                if (h.status >= 400) throw new n.RO("unknown_icloud_storage_error", "Failed to store wallet: issue storing recovery secret", {
                    eventName: "icloud_write_error",
                    payload: {
                        detail: "unknown_icloud_server_issue",
                        icloud_status: h.status
                    }
                });
                if (c !== _.fields.recovery_secret.value) throw new n.RO("unknown_icloud_storage_error", "Failed to store wallet: iCloud stored wallet address does not match expected address.", {
                    eventName: "icloud_write_error",
                    payload: {
                        detail: "wallet_address_mismatch"
                    }
                });
                return _.recordName
            }
            async function l(e) {
                var t, r, i;
                let {
                    ckWebAuthToken: s,
                    recordName: c,
                    entropyId: l,
                    cloudKitContainerIdentifier: d,
                    cloudKitEnvironment: u,
                    cloudKitApiToken: p,
                    createWalletEvent: y
                } = e, v = encodeURIComponent(s), w = "".concat(o, "/").concat(d, "/").concat(u, "/private/records/lookup?ckAPIToken=").concat(p, "&ckWebAuthToken=").concat(v), f = await a.OT.raw(w, {
                    method: "POST",
                    body: {
                        records: {
                            recordName: c
                        }
                    },
                    headers: {
                        "Content-Type": "application/json"
                    },
                    ignoreResponseError: !0
                });
                if (!(null == f ? void 0 : null === (t = f._data) || void 0 === t ? void 0 : t.records) || (null == f ? void 0 : null === (r = f._data) || void 0 === r ? void 0 : r.records.length) === 0 || !(null === (i = f._data.records) || void 0 === i ? void 0 : i[0])) throw y("icloud_recovery_error", {
                    detail: "no_icloud_record_found"
                }), new n.Pi("no_icloud_record_found", "Failed to recover wallet: expected an iCloud recovery record, user possibly selected the wrong iCloud account");
                if (f._data.records.length > 1) throw y("icloud_recovery_error", {
                    detail: "multiple_icloud_records_found"
                }), new n.Pi("multiple_icloud_records_found", "Failed to recover wallet: multiple iCloud records found for the user");
                let h = f._data.records[0];
                if ("serverErrorCode" in h) throw y("icloud_recovery_error", {
                    detail: "icloud_server_issue",
                    icloud_error_code: h.serverErrorCode,
                    icloud_status: f.status,
                    icloud_error_uuid: h.uuid
                }), console.warn("Unable to recover with iCloud: ".concat(h.reason)), new n.Pi("unknown_icloud_recovery_error", "Failed to recover wallet: iCloud errored with code ".concat(h.serverErrorCode));
                if (f.status >= 400) throw y("icloud_recovery_error", {
                    detail: "unknown_icloud_server_issue",
                    icloud_status: f.status
                }), new n.Pi("unknown_icloud_recovery_error", "Failed to recover wallet: issue fetching recovery secret");
                if (l !== h.fields.wallet_address.value) throw y("icloud_recovery_error", {
                    detail: "wallet_address_mismatch"
                }), new n.Pi("unknown_icloud_recovery_error", "Failed to recover wallet: iCloud stored wallet address does not match expected address.");
                return h.fields.recovery_secret.value
            }
        },
        24610: (e, t, r) => {
            "use strict";
            r.d(t, {
                $J: () => l,
                Pi: () => n,
                RO: () => o,
                dS: () => c,
                xR: () => s,
                z6: () => i
            });
            let a = ["error", "invalid_request_arguments", "wallet_not_on_device", "hd_wallet_required", "invalid_recovery_pin", "insufficient_funds", "missing_or_invalid_mfa", "twilio_verification_failed", "no_icloud_record_found", "multiple_icloud_records_found", "unknown_icloud_recovery_error", "unknown_icloud_storage_error"],
                i = "error";
            class n extends Error {
                constructor(e, t) {
                    super(t), this.type = e
                }
            }
            class o extends n {
                convert() {
                    return new n(this.type, this.message)
                }
                constructor(e, t, r) {
                    super(e, t), this.type = e, this.eventInfo = r
                }
            }

            function s(e) {
                let t = e.type;
                return "string" == typeof t && a.includes(t)
            }

            function c(e) {
                return s(e) && !!e.convert
            }

            function l(e) {
                var t;
                let r = null === (t = e.data) || void 0 === t ? void 0 : t.code;
                return "missing_or_invalid_mfa" === r || "expired_or_invalid_mfa_token" === r
            }
        },
        27510: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => x,
                Bt: () => k,
                CD: () => f.C,
                CI: () => z,
                EN: () => Y,
                IV: () => E,
                IX: () => q,
                LH: () => S,
                M4: () => G,
                MC: () => h.MC,
                MR: () => b,
                Pp: () => M,
                UI: () => I,
                Ud: () => j,
                WQ: () => W,
                Wi: () => R,
                YZ: () => J,
                Zf: () => A,
                eB: () => C,
                fj: () => h.fj,
                hE: () => B,
                jt: () => g,
                kG: () => N,
                kS: () => H,
                nz: () => $,
                p$: () => U,
                py: () => K,
                qi: () => T,
                s5: () => D,
                sr: () => P,
                st: () => F,
                t5: () => V,
                uY: () => O,
                vb: () => Q,
                zT: () => L
            });
            var a = r(77473),
                i = r(40695),
                n = r(43543),
                o = r(2342),
                s = r(35101),
                c = r(94928),
                l = r(19600),
                d = r(81649),
                u = r(21331),
                p = r(98114),
                y = r(65501),
                v = r(85915),
                w = r(46707),
                f = r(56496),
                h = r(99798),
                _ = r(51642).Buffer;

            function m(e) {
                return crypto.getRandomValues(new Uint8Array(e))
            }

            function g(e) {
                return "string" == typeof e && /^[a-zA-Z0-9!@#$%^&*()\-_+.]{6,}$/.test(e)
            }
            async function b(e) {
                return {
                    deviceShares: await O(e),
                    recoveryShares: await O(e)
                }
            }
            async function k(e) {
                let t = new Uint8Array(_.from(e, "hex").buffer),
                    {
                        deviceShares: r,
                        recoveryShares: a
                    } = await b(t),
                    i = (0, y.R)((0, l.q)(e) ? e : "0x".concat(e));
                return {
                    chainType: "ethereum",
                    deviceShares: r,
                    recoveryShares: a,
                    wallet: i,
                    entropy: t,
                    signMessage: i.signMessage
                }
            }
            async function I(e) {
                let t = a.tw.decode(e),
                    {
                        deviceShares: r,
                        recoveryShares: i
                    } = await b(t),
                    n = o.Keypair.fromSecretKey(t),
                    s = n.publicKey.toBase58();
                return {
                    chainType: "solana",
                    deviceShares: r,
                    recoveryShares: i,
                    wallet: n,
                    address: s,
                    signMessage: e => {
                        let {
                            message: t
                        } = e;
                        return (0, w.x)(n, s, _.from(t).toString("base64"))
                    },
                    entropy: t
                }
            }
            async function P() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128;
                if (![128, 160, 192, 224, 256].includes(e)) throw Error("invalid entropy size");
                let t = m(e / 8),
                    {
                        deviceShares: r,
                        recoveryShares: a
                    } = await b(t),
                    i = x({
                        entropy: t,
                        walletIndex: 0
                    });
                return {
                    entropy: t,
                    deviceShares: r,
                    recoveryShares: a,
                    wallet: i
                }
            }
            async function E() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256;
                if (![256].includes(e)) throw Error("invalid entropy size");
                let t = m(e / 8),
                    {
                        deviceShares: r,
                        recoveryShares: a
                    } = await b(t);
                return {
                    deviceShares: r,
                    recoveryShares: a,
                    keypair: N({
                        entropy: t,
                        index: 0
                    }),
                    entropy: t
                }
            }

            function T(e) {
                return (0, d.P)(e)
            }

            function A(e) {
                try {
                    let t = new o.J3(e);
                    return o.J3.isOnCurve(t)
                } catch (e) {
                    return !1
                }
            }

            function K(e) {
                return (0, u.b)(e)
            }

            function S(e, t) {
                return K(e) === K(t)
            }
            async function U(e) {
                let {
                    shares: t,
                    primaryAddress: r,
                    walletIndex: a
                } = e, i = await (0, c.k)(t), n = x({
                    entropy: i,
                    walletIndex: a
                });
                if (!S(0 === a ? n.address : x({
                        entropy: i,
                        walletIndex: 0
                    }).address, r)) throw Error("Failed to reconstruct the expected wallet from Shamir shares");
                return {
                    chainType: "ethereum",
                    entropyType: "hd-entropy",
                    wallet: n,
                    entropy: i,
                    walletIndex: a
                }
            }

            function x(e) {
                let {
                    entropy: t,
                    walletIndex: r
                } = e;
                return C({
                    entropy: t,
                    opts: {
                        addressIndex: r
                    }
                })
            }

            function C(e) {
                let {
                    entropy: t,
                    opts: r
                } = e;
                return (0, v.f)((0, i.VF)(t, n.p), r)
            }

            function F(e) {
                let {
                    entropy: t
                } = e;
                return (0, y.R)((0, p.nj)(t))
            }

            function R(e) {
                let {
                    entropy: t
                } = e;
                return o.Keypair.fromSecretKey(t)
            }
            async function M(e) {
                let {
                    shares: t,
                    expectedAddress: r
                } = e, a = await (0, c.k)(t), i = F({
                    entropy: a
                });
                if (i.address !== r) throw Error("Failed to reconstruct the expected address from Shamir shares.");
                return {
                    reconstructedWallet: i,
                    reconstructedPrivateKey: a
                }
            }
            async function q(e) {
                let {
                    shares: t,
                    expectedAddress: r
                } = e, a = await (0, c.k)(t), i = o.Keypair.fromSecretKey(a);
                if (i.publicKey.toBase58() !== r) throw Error("Failed to reconstruct the expected address from Shamir shares.");
                return {
                    reconstructedKeypair: i,
                    reconstructedPrivateKey: a
                }
            }

            function N(e) {
                let {
                    entropy: t,
                    index: r
                } = e, a = s.Ay.fromMasterSeed(_.from(t).toString("hex"));
                return o.Keypair.fromSeed(a.derive("m/44'/501'/".concat(r, "'/0'")).privateKey)
            }
            async function G(e) {
                let {
                    shares: t,
                    expectedPublicKey: r,
                    index: a
                } = e, i = await (0, c.k)(t), n = N({
                    entropy: i,
                    index: a
                });
                if ((0 === a ? n : N({
                        entropy: i,
                        index: 0
                    })).publicKey.toBase58() !== r) throw Error("Failed to reconstruct the expected public key from Shamir shares.");
                return {
                    reconstructedKeypair: n,
                    reconstructedEntropy: i
                }
            }

            function O(e) {
                return (0, c.l)(e, 2, 2)
            }

            function V(e, t, r, a) {
                return "".concat(e, " wants you to sign in with your Ethereum account:\n").concat(r, "\n\nYou are proving you own ").concat(r, ".\n\nURI: ").concat(t, "\nVersion: 1\nChain ID: 1\nNonce: ").concat(a, "\nIssued At: ").concat(new Date().toISOString(), "\nResources:\n- https://privy.io")
            }

            function L(e, t, r, a) {
                return "".concat(e, " wants you to sign in with your Solana account:\n").concat(r, "\n\nYou are proving you own ").concat(r, ".\n\nURI: ").concat(t, "\nVersion: 1\nChain ID: mainnet\nNonce: ").concat(a, "\nIssued At: ").concat(new Date().toISOString(), "\nResources:\n- https://privy.io")
            }

            function D() {
                return m(32)
            }

            function B() {
                return a.tw.encode(m(16))
            }

            function j(e, t) {
                return X(er(e), t)
            }

            function z() {
                return crypto.subtle.generateKey({
                    name: "AES-GCM",
                    length: 256
                }, !0, ["encrypt", "decrypt"])
            }
            async function W(e) {
                return new Uint8Array(await crypto.subtle.exportKey("raw", e))
            }

            function H(e) {
                return crypto.subtle.importKey("raw", e, "AES-GCM", !0, ["encrypt", "decrypt"])
            }
            async function Y(e) {
                let t = await crypto.subtle.exportKey("raw", e);
                return await Z(t)
            }
            async function J(e) {
                let t = er(e);
                return await Z(t)
            }
            async function Z(e) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", e))
            }
            async function Q(e, t) {
                let r = m(12);
                return {
                    encryptedShare: await ee(e, r, t),
                    encryptedShareIV: r
                }
            }

            function $(e, t, r) {
                return et(e, t, r)
            }
            async function X(e, t) {
                if (32 !== t.byteLength) throw Error("pbkdf2 salt length should be 32 bytes");
                let r = await crypto.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveKey"]);
                return await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: t,
                    hash: "SHA-512",
                    iterations: 21e5
                }, r, {
                    name: "AES-GCM",
                    length: 256
                }, !0, ["encrypt", "decrypt"])
            }
            async function ee(e, t, r) {
                return new Uint8Array(await crypto.subtle.encrypt({
                    iv: t,
                    name: "AES-GCM"
                }, r, e))
            }
            async function et(e, t, r) {
                return new Uint8Array(await crypto.subtle.decrypt({
                    iv: t,
                    name: "AES-GCM"
                }, r, e))
            }

            function er(e) {
                return new TextEncoder().encode(e)
            }
        },
        27976: () => {},
        29358: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var a = r(18296),
                i = r(29143);
            let n = "cla04x0d00002nyb6oofp5dqh",
                o = i.env.MY_PRIVY_APP_ID,
                s = i.env.VERCEL_GIT_COMMIT_SHA,
                c = i.env.VERCEL_GIT_COMMIT_REF,
                l = "pk_live_51IVGUtF66LfGv8cgubvAHN9hcEUMJJOvprWKjAUEhuWCQsQZHGE5b1PDzChVsiIjyCOCbmqpgtH9cQAemzTIuG3600x1ub2mo9",
                d = "J64Bl2g14xIjQ0Vp6Xo0lPPu1oIdFx2G6yg6bVGgihA=";
            if ("string" != typeof n) throw Error("NEXT_PUBLIC_PRIVY_APP_ID needs to be defined");
            let u = (0, a.getGlobalPrivyAuthUrl)(),
                p = "https://dashboard.privy.io";
            if (!p || "string" != typeof p) throw Error("NEXT_PUBLIC_DASHBOARD_PRIVY_AUTH_URL must be defined");
            let y = "https://dashboard.privy.io";
            y || console.warn("No Privy dashboard URL found, some dashboard admin actions like reporting to Slack will not work.");
            let v = "4df5e2316331463a9130964bd6078dfa",
                w = "fe9c30fc-3bc5-4064-91e2-6ab5887f8f4d";
            if ("string" != typeof v) throw Error("NEXT_PUBLIC_PRIVY_INFURA_ID must be set");
            if ("string" != typeof w) throw Error("NEXT_PUBLIC_PRIVY_BLAST_ID must be set");
            if ("string" != typeof l) throw Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY must be set");
            if ("string" != typeof d) throw Error("NEXT_PUBLIC_DELEGATED_ACTIONS_TEE_PUBLIC_KEY must be set");
            let f = Object.freeze({
                isTest: !1,
                isProduction: !0,
                isStaging: !1,
                isDevelopment: !1,
                PRIVY_APP_ID: n,
                MY_PRIVY_APP_ID: o,
                PRIVY_ENV: "production",
                GLOBAL_PRIVY_AUTH_URL: u,
                DASHBOARD_PRIVY_AUTH_URL: p,
                DASHBOARD_URL: y,
                PRIVY_INFURA_ID: v,
                PRIVY_BLAST_ID: w,
                GIT_COMMIT_SHA: s,
                VERCEL_GIT_COMMIT_REF: c,
                SPECIAL_EVENT_SIGNUP_ENABLED: !0,
                DEV_APP_USER_LIMIT: 150,
                STRIPE_PUBLISHABLE_KEY: l,
                DELEGATED_ACTIONS_TEE_PUBLIC_KEY: d,
                GOOGLE_TAG_MANAGER_ID: "GTM-WV9MVTB3"
            })
        },
        36262: () => {},
        36902: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => y
            });
            var a = r(24610),
                i = r(77473),
                n = r(94928),
                o = r(27510),
                s = r(95246),
                c = r(46871),
                l = r(82927);
            let d = e => {
                var t;
                return (null === (t = e.data) || void 0 === t ? void 0 : t.code) === "device_revoked"
            };
            async function u(e) {
                let t, r, {
                        accessToken: a,
                        appId: u,
                        appClientId: p,
                        clientAnalyticsId: y,
                        userId: v,
                        mfaToken: w,
                        entropyId: f,
                        entropyIdVerifier: h
                    } = e,
                    _ = {
                        appId: u,
                        userId: v,
                        address: f
                    },
                    m = await l.A.get(_);
                if (!m) return null;
                let {
                    share: g,
                    deviceId: b
                } = m;
                try {
                    let e = await c.u({
                        appId: u,
                        appClientId: p,
                        accessToken: a,
                        clientAnalyticsId: y,
                        mfaToken: w,
                        deviceId: b,
                        entropyKey: f,
                        entropyKeyVerifier: h
                    });
                    t = e.share, r = e.imported
                } catch (e) {
                    if (d(e)) return await l.A.del(_), null;
                    throw e
                }
                try {
                    let e = await (0, n.k)([i.K3.decode(g), i.K3.decode(t)]);
                    if ("ethereum-address-verifier" === h && r) {
                        let t = (0, o.st)({
                            entropy: e
                        });
                        if (!(0, o.LH)(f, t.address)) throw Error("Failed to reconstruct the expected wallet from Shamir shares")
                    } else if ("ethereum-address-verifier" === h) {
                        let t = (0, o.Ay)({
                            entropy: e,
                            walletIndex: 0
                        });
                        if (!(0, o.LH)(f, t.address)) throw Error("Failed to reconstruct the expected wallet from Shamir shares")
                    } else if ("solana-address-verifier" === h && r) {
                        if ((0, o.Wi)({
                                entropy: e
                            }).publicKey.toBase58() !== f) throw Error("Failed to reconstruct the expected public key from Shamir shares.")
                    } else if ("solana-address-verifier" === h) {
                        if ((0, o.kG)({
                                entropy: e,
                                index: 0
                            }).publicKey.toBase58() !== f) throw Error("Failed to reconstruct the expected public key from Shamir shares.")
                    } else if ("p256" === h) {
                        if ((await (0, s.a)({
                                entropy: e
                            })).publicKey !== f) throw Error("Failed to reconstruct the expected public key from Shamir shares.");
                        return {
                            entropy: e,
                            entropyType: "private-key"
                        }
                    }
                    return {
                        entropy: e,
                        entropyType: r ? "private-key" : "hd-entropy"
                    }
                } catch (e) {
                    return await l.A.del(_), null
                }
            }
            var p = r(41033);
            async function y(e) {
                let {
                    accessToken: t,
                    appId: r,
                    appClientId: i,
                    clientAnalyticsId: n,
                    userId: o,
                    mfaCode: s,
                    mfaMethod: c,
                    relyingParty: l,
                    entropyId: d,
                    entropyIdVerifier: y,
                    cache: v,
                    verificationKeys: w,
                    hasSetMfaToken: f,
                    createWalletEvent: h
                } = e, _ = await (0, p.X)({
                    appId: r,
                    appClientId: i,
                    userId: o,
                    accessToken: t,
                    mfaMethod: c,
                    mfaCode: s,
                    relyingParty: l,
                    verificationKeys: w,
                    hasSetMfaToken: f,
                    createWalletEvent: h
                });
                if (v && v.entropyId === d) return {
                    entropy: v.entropy,
                    entropyType: v.entropyType
                };
                let m = await u({
                    appId: r,
                    clientAnalyticsId: n,
                    appClientId: i,
                    userId: o,
                    accessToken: t,
                    entropyId: d,
                    entropyIdVerifier: y,
                    mfaToken: _
                });
                if (!m) throw new a.Pi("wallet_not_on_device", "Failed to initialize: '".concat(d, "' not loaded on this device"));
                return m
            }
        },
        39435: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => a
            });
            let a = (0, r(12644).x)({
                id: 998,
                name: "HyperEVM Testnet",
                nativeCurrency: {
                    decimals: 18,
                    name: "HYPE",
                    symbol: "HYPE"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.hyperliquid-testnet.xyz/evm"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "HyperEVM Testnet Explorer",
                        url: ""
                    }
                }
            })
        },
        41033: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => l
            });
            var a = r(46871),
                i = r(24610),
                n = r(51014),
                o = r(96752),
                s = r(2288);
            async function c(e, t, r, a, i) {
                let n = await Promise.allSettled(t.map(async t => {
                    let i = await o.jU(t, s.oG);
                    await o.Vv(e, i, {
                        typ: "JWT",
                        algorithms: [s.oG],
                        issuer: s.GR,
                        audience: "mfa-".concat(r),
                        subject: a
                    })
                }));
                if (!n.find(e => "fulfilled" === e.status)) throw i("mfa_token_verification_failed", {
                    error: n.filter(e => "rejected" === e.status).map(e => e.reason instanceof Error ? e.reason.message : typeof e.reason).join("\n")
                }), n[0].reason
            }
            async function l(e) {
                var t;
                let {
                    appId: r,
                    appClientId: o,
                    userId: s,
                    accessToken: l,
                    mfaMethod: d,
                    mfaCode: u,
                    relyingParty: p,
                    hasSetMfaToken: y,
                    verificationKeys: v,
                    createWalletEvent: w
                } = e;
                if (u && d) try {
                    let e = await a.j2({
                        appId: r,
                        appClientId: o,
                        accessToken: l,
                        method: d,
                        code: u,
                        relyingParty: p
                    });
                    return await n.A.set({
                        appId: r,
                        userId: s
                    }, e), y.current = !0, w("mfa_verification_completed", {
                        verificationPath: "mfa_code"
                    }), e.token
                } catch (e) {
                    throw w("mfa_verification_failed", {
                        verificationPath: "mfa_code",
                        error: e instanceof Error ? e.message : typeof e
                    }), await n.A.del({
                        appId: r,
                        userId: s
                    }), new i.Pi("missing_or_invalid_mfa", "MFA verification failed")
                }
                let f = null === (t = await n.A.get({
                    appId: r,
                    userId: s
                })) || void 0 === t ? void 0 : t.token;
                if (f) try {
                    return await c(f, v, r, s, w), y.current = !0, w("mfa_verification_completed", {
                        verificationPath: "mfa_storage"
                    }), f
                } catch (e) {
                    throw console.error(e), w("mfa_verification_failed", {
                        verificationPath: "mfa_storage",
                        error: e instanceof Error ? e.message : typeof e
                    }), await n.A.del({
                        appId: r,
                        userId: s
                    }), new i.Pi("missing_or_invalid_mfa", "MFA verification failed")
                }
                if (y.current) throw w("mfa_verification_failed", {
                    verificationPath: "mfa_storage_no_code",
                    error: "MFA token was previously set but not provided"
                }), console.debug("MFA token was previously set but not provided"), new i.Pi("missing_or_invalid_mfa", "MFA verification failed");
                return null
            }
        },
        43167: () => {},
        45972: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => a
            });
            let a = (0, r(12644).x)({
                id: 999,
                name: "HyperEVM Mainnet",
                nativeCurrency: {
                    decimals: 18,
                    name: "HYPE",
                    symbol: "HYPE"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.hyperliquid.xyz/evm"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "HyperEVM Mainnet Explorer",
                        url: ""
                    }
                }
            })
        },
        46595: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => i
            });
            var a = r(78933);
            let i = () => ({
                addMessageListener(e) {
                    (0, a.k3)(window) ? document.addEventListener("message", e): window.addEventListener("message", e)
                },
                removeMessageListener(e) {
                    (0, a.k3)(window) ? document.removeEventListener("message", e): window.removeEventListener("message", e)
                },
                sendMessage(e) {
                    var t, r;
                    null === (r = window.ReactNativeWebView) || void 0 === r || null === (t = r.postMessage) || void 0 === t || t.call(r, e)
                }
            })
        },
        46707: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => s,
                x: () => o
            });
            var a = r(88934),
                i = r.n(a),
                n = r(51642).Buffer;
            async function o(e, t, r) {
                ! function(e, t) {
                    if (e.toString() !== t) throw Error("Signer ".concat(e.toBase58(), " cannot sign on behalf of ").concat(t))
                }(e.publicKey, t);
                let a = n.from(r, "base64");
                try {
                    let t = i().sign.detached(a, e.secretKey);
                    return n.from(t).toString("base64")
                } catch (e) {
                    throw console.error(e), e
                }
            }
            async function s(e) {
                let {
                    keypair: t,
                    request: r,
                    expectedPublicKey: a
                } = e, {
                    method: i,
                    params: n
                } = r;
                if ("signMessage" === i) return {
                    method: i,
                    data: {
                        signature: await o(t, a, n.message)
                    }
                };
                throw Error("Unsupported method: ".concat(i))
            }
        },
        46871: (e, t, r) => {
            "use strict";
            r.d(t, {
                $1: () => E,
                $W: () => V,
                AI: () => O,
                Dz: () => P,
                IV: () => u,
                IW: () => v,
                NB: () => S,
                O: () => T,
                QQ: () => l,
                St: () => A,
                Zn: () => y,
                _o: () => U,
                aV: () => N,
                bE: () => s,
                bz: () => m,
                gc: () => d,
                hH: () => C,
                j: () => g,
                j2: () => q,
                jE: () => x,
                jh: () => b,
                p5: () => w,
                q$: () => K,
                ry: () => p,
                u: () => h,
                v$: () => G
            });
            var a = r(7532),
                i = r(63645),
                n = r(51014);
            let o = e => {
                    var t;
                    let r = new a.F(null === (t = e.response._data) || void 0 === t ? void 0 : t.error);
                    for (let t of ["request", "options", "response"]) Object.defineProperty(r, t, {
                        get: () => e[t]
                    });
                    for (let [t, a] of [
                            ["data", "_data"],
                            ["status", "status"],
                            ["statusCode", "status"],
                            ["statusText", "statusText"],
                            ["statusMessage", "statusText"]
                        ]) Object.defineProperty(r, t, {
                        get: () => e.response && e.response[a]
                    });
                    throw r
                },
                s = async (e, t, r) => await (0, i.OT)(e, {
                    method: "POST",
                    body: t,
                    headers: r,
                    timeout: 9e3,
                    credentials: "include",
                    onResponseError: o
                }),
                c = async (e, t, r) => await (0, i.OT)(e, {
                    method: "PATCH",
                    body: t,
                    headers: r,
                    timeout: 9e3,
                    credentials: "include",
                    onResponseError: o
                });
            async function l(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    address: i,
                    chainType: n
                } = e;
                return (await s("/api/v1/embedded_wallets/init", {
                    address: i,
                    chain_type: n
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))).nonce
            }
            async function d(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: i
                } = e;
                return await s("/api/v1/embedded_wallets", i, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function u(e, t, r, a) {
                return await s("/api/v1/embedded_wallets/add_solana", a, V({
                    appId: e,
                    appClientId: t,
                    accessToken: r
                }))
            }
            async function p(e, t, r, a) {
                return await s("/api/v1/embedded_wallets/add_ethereum", a, V({
                    appId: e,
                    appClientId: t,
                    accessToken: r
                }))
            }
            async function y(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: i
                } = e;
                return await s("/api/v1/embedded_wallets/add_wallet", i, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function v(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: i
                } = e;
                return await s("/api/v1/wallets/delegate", i, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function w(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: i
                } = e;
                return await c("/api/v1/embedded_wallets", { ...i,
                    chain_type: D(i.entropy_key_verifier)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            let f = async e => {
                let {
                    appId: t,
                    appClientId: r,
                    clientAnalyticsId: i,
                    accessToken: n,
                    fn: o
                } = e;
                try {
                    return await o()
                } catch (e) {
                    if (!(e instanceof a.F) || e.response) throw e;
                    return E({
                        appId: t,
                        appClientId: r,
                        clientId: i,
                        accessToken: n,
                        eventName: "retry_fetch_share_no_response",
                        payload: {
                            error: e.message
                        }
                    }), await o()
                }
            };
            async function h(e) {
                let {
                    appId: t,
                    appClientId: r,
                    clientAnalyticsId: a,
                    accessToken: i,
                    entropyKey: n,
                    entropyKeyVerifier: o,
                    deviceId: s,
                    mfaToken: c
                } = e;
                return await f({
                    appId: t,
                    appClientId: r,
                    accessToken: i,
                    clientAnalyticsId: a,
                    fn: () => _({
                        appId: t,
                        appClientId: r,
                        accessToken: i,
                        entropyKey: n,
                        entropyKeyVerifier: o,
                        deviceId: s,
                        mfaToken: c
                    })
                })
            }
            async function _(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyKey: i,
                    entropyKeyVerifier: n,
                    deviceId: o,
                    mfaToken: c
                } = e;
                return await s("/api/v1/embedded_wallets/".concat(encodeURIComponent(i), "/share"), {
                    device_id: o,
                    chain_type: D(n)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: c
                }))
            }
            async function m(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyKey: i,
                    entropyKeyVerifier: n,
                    mfaToken: o
                } = e;
                return await s("/api/v1/embedded_wallets/".concat(encodeURIComponent(i), "/recovery/auth_share"), {
                    chain_type: D(n)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: o
                }))
            }
            async function g(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyKey: i,
                    entropyKeyVerifier: n
                } = e;
                return await s("/api/v1/embedded_wallets/".concat(encodeURIComponent(i), "/recovery/key_material"), {
                    chain_type: D(n)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function b(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyKey: i,
                    entropyKeyVerifier: n,
                    recoveryKeyHash: o
                } = e;
                return await s("/api/v1/embedded_wallets/".concat(encodeURIComponent(i), "/recovery/shares"), {
                    recovery_key_hash: o,
                    chain_type: D(n)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function k(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyKey: i,
                    entropyKeyVerifier: n,
                    deviceAuthShare: o,
                    deviceId: c
                } = e;
                return await s("/api/v1/embedded_wallets/".concat(encodeURIComponent(i), "/recovery/device"), {
                    device_id: c,
                    device_auth_share: o,
                    chain_type: D(n)
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            let I = e => e && e instanceof Error && (e.message.includes("abort") || e.message.includes("timeout"));
            async function P(e) {
                let {
                    userId: t,
                    appId: r,
                    appClientId: a,
                    accessToken: i,
                    entropyKey: o,
                    entropyKeyVerifier: s,
                    deviceAuthShare: c,
                    deviceId: l
                } = e;
                try {
                    return await k({
                        appId: r,
                        appClientId: a,
                        accessToken: i,
                        entropyKey: o,
                        entropyKeyVerifier: s,
                        deviceAuthShare: c,
                        deviceId: l
                    })
                } catch (e) {
                    if (I(e)) {
                        var d, u;
                        let {
                            share: e
                        } = await _({
                            mfaToken: null !== (u = null === (d = await n.A.get({
                                appId: r,
                                userId: t
                            })) || void 0 === d ? void 0 : d.token) && void 0 !== u ? u : null,
                            appId: r,
                            appClientId: a,
                            accessToken: i,
                            entropyKey: o,
                            entropyKeyVerifier: s,
                            deviceId: l
                        }).catch(() => ({
                            share: null
                        }));
                        if (e) return {
                            success: !0
                        };
                        return await k({
                            appId: r,
                            appClientId: a,
                            accessToken: i,
                            entropyKey: o,
                            entropyKeyVerifier: s,
                            deviceAuthShare: c,
                            deviceId: l
                        })
                    }
                    throw e
                }
            }

            function E(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    clientId: i,
                    eventName: n,
                    payload: o,
                    timestamp: c
                } = e;
                s("/api/v1/analytics_events", {
                    event_name: n,
                    client_id: i,
                    payload: { ...o || {},
                        clientTimestamp: c ? c.toISOString() : new Date().toISOString()
                    }
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                })).catch(() => console.log("Unable to submit event. This is not an issue."))
            }
            async function T(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                } = e;
                return await s("/api/v1/mfa/totp/init", {
                    action: "enroll"
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                }))
            }
            async function A(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i,
                    phoneNumber: n
                } = e;
                return await s("/api/v1/mfa/passwordless_sms/init", {
                    phoneNumber: n,
                    action: "enroll"
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                }))
            }
            async function K(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    code: i
                } = e;
                return await s("/api/v1/mfa/totp/enroll", {
                    code: i
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function S(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    credentialIds: i,
                    mfaToken: n,
                    removeForLogin: o
                } = e;
                return await s("/api/v1/mfa/passkeys/enrollment", {
                    credential_ids: i,
                    remove_for_login: o
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: n
                }))
            }
            async function U(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    code: i,
                    phoneNumber: n
                } = e;
                return await s("/api/v1/mfa/passwordless_sms/enroll", {
                    phoneNumber: n,
                    code: i
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function x(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                } = e;
                return await s("/api/v1/mfa/passwordless_sms/unenroll", {}, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                }))
            }
            async function C(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                } = e;
                return await s("/api/v1/mfa/totp/unenroll", {}, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                }))
            }
            async function F(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    code: i
                } = e;
                return await s("/api/v1/mfa/passwordless_sms/verify", {
                    code: i
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function R(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    code: i
                } = e;
                return await s("/api/v1/mfa/totp/verify", {
                    code: i
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function M(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    authenticatorResponse: i,
                    relyingParty: n
                } = e;
                return await s("/api/v1/mfa/passkeys/verify", {
                    authenticator_response: i,
                    relying_party: n
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }
            async function q(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    code: i,
                    method: n,
                    relyingParty: o
                } = e;
                switch (n) {
                    case "sms":
                        return await F({
                            appId: t,
                            appClientId: r,
                            accessToken: a,
                            code: i
                        });
                    case "totp":
                        return await R({
                            appId: t,
                            appClientId: r,
                            accessToken: a,
                            code: i
                        });
                    case "passkey":
                        return await M({
                            appId: t,
                            appClientId: r,
                            accessToken: a,
                            relyingParty: o,
                            authenticatorResponse: i
                        });
                    default:
                        throw Error("Unknown mfa method: ".concat(n))
                }
            }
            async function N(e) {
                let {
                    appId: t,
                    appClientId: r,
                    signerPublicKey: a,
                    auth: i
                } = e;
                return await s("/api/v1/farcaster/signer/init", {
                    ed25519_public_key: a
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: i.accessToken,
                    mfaToken: i.mfaToken
                }))
            }
            async function G(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i,
                    credentialId: n,
                    removeAsMfa: o
                } = e;
                return await s("/api/v1/passkeys/unlink", {
                    credential_id: n,
                    remove_as_mfa: o
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i
                }))
            }
            async function O(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: i
                } = e;
                return await s("/api/v1/recovery/configuration_icloud", {
                    client_type: i.client_type
                }, V({
                    appId: t,
                    appClientId: r,
                    accessToken: a
                }))
            }

            function V(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    mfaToken: i,
                    headers: n
                } = e, o = new Headers(n);
                return o.set("privy-app-id", t), o.set("authorization", "Bearer ".concat(a)), r && o.set("privy-client-id", r), i && o.set("privy-mfa-token", i), o
            }
            let L = {
                    "ethereum-address-verifier": "ethereum",
                    "solana-address-verifier": "solana",
                    p256: "p256"
                },
                D = e => L[e]
        },
        51014: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var a = r(95293);
            class i extends a.i {
                async set(e, t) {
                    let r = this.getMfaTokenStorageKey(e);
                    await this._set(r, t)
                }
                async get(e) {
                    let t = this.getMfaTokenStorageKey(e);
                    return await this._get(t)
                }
                async del(e) {
                    let t = this.getMfaTokenStorageKey(e);
                    await this._del(t)
                }
                getMfaTokenStorageKey(e) {
                    let {
                        appId: t,
                        userId: r
                    } = e;
                    return "privy:mfa:".concat(t, ":").concat(r)
                }
                constructor(e) {
                    super(e)
                }
            }
            var n = r(8195),
                o = r(46595),
                s = r(10526);
            let c = new i((() => {
                try {
                    if ((0, n.n)()) {
                        let e = new s._,
                            t = (0, o.P)();
                        return new n.r(e, t)
                    }
                    if ("undefined" != typeof globalThis && globalThis.localStorage) return globalThis.localStorage
                } catch (e) {
                    e instanceof DOMException && "SecurityError" === e.name ? console.debug("Security settings in your browser prevent access to local storage, used for persisting wallet state. Wallet information will be stored in-memory.") : console.debug("Unknown issue loading local storage, used for persisting wallet state. Wallet information will be stored in-memory.")
                }
                return new s._
            })())
        },
        53499: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => i
            });
            var a = r(51642).Buffer;
            let i = async e => {
                let t = await crypto.subtle.importKey("pkcs8", e, {
                        name: "ECDSA",
                        namedCurve: "P-256"
                    }, !0, ["sign"]),
                    r = await crypto.subtle.exportKey("jwk", t);
                delete r.d, r.key_ops = ["verify"];
                let i = await crypto.subtle.importKey("jwk", r, {
                    name: "ECDSA",
                    namedCurve: "P-256"
                }, !0, ["verify"]);
                return a.from(await crypto.subtle.exportKey("spki", i))
            }
        },
        56496: (e, t, r) => {
            "use strict";
            t.C = async function e() {
                return await crypto.subtle.generateKey({
                    name: "ECDSA",
                    namedCurve: "P-256"
                }, !0, ["sign", "verify"])
            }, "undefined" == typeof crypto && (globalThis.crypto = r(62701).webcrypto)
        },
        57761: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => s
            });
            var a = r(75901),
                i = r(5003),
                n = r(77473),
                o = r(51642).Buffer;
            let s = async e => {
                    let {
                        message: t,
                        privateKey: r
                    } = e, o = (0, i.sc)(n.K3.decode(t)), s = c(r), l = a.s9.sign(o, s);
                    return n.K3.encode(l.toDERRawBytes())
                },
                c = e => {
                    let t = o.from(e),
                        r = t.indexOf(o.from([4, 32]));
                    if (-1 === r) throw Error("Invalid wallet authorization private key");
                    let i = t.subarray(r + 2, r + 34);
                    return a.s9.utils.normPrivateKeyToScalar(i)
                }
        },
        64167: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => E
            });
            var a = r(27510),
                i = r(24610),
                n = r(40851),
                o = r(65628),
                s = r(94086),
                c = r(15232),
                l = r(16150);
            let d = ["eth_sign", "eth_populateTransactionRequest", "eth_signTransaction", "eth_sendTransaction", "personal_sign", "eth_signTypedData_v4", "csw_signUserOperation", "secp256k1_sign"];
            var u = r(97399),
                p = r(97622);
            async function y(e, t) {
                return await e.wallet.sign({
                    hash: t
                })
            }
            var v = r(7800),
                w = r(51642).Buffer;
            async function f(e, t, r) {
                return P(e.wallet.address, t), (0, n.personalSign)({
                    privateKey: function(e) {
                        if ("private-key" === e.entropyType) return w.from(e.entropy);
                        let t = e.wallet.getHdKey().privateKey;
                        if (!t) throw new i.Pi("wallet_not_on_device", "Unable to read private key from HD account");
                        return w.from(t)
                    }(e),
                    data: r
                })
            }
            async function h(e, t, r) {
                return P(e.wallet.address, t), await e.wallet.signTypedData(r)
            }
            async function _(e, t, r, a) {
                let i = function(e) {
                    var t, r;
                    let {
                        userOperation: a,
                        chainId: i,
                        entrypointAddress: n
                    } = e, o = (0, u.h)([{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "nonce",
                        type: "uint256"
                    }, {
                        name: "initCode",
                        type: "bytes32"
                    }, {
                        name: "callData",
                        type: "bytes32"
                    }, {
                        name: "callGasLimit",
                        type: "uint256"
                    }, {
                        name: "verificationGasLimit",
                        type: "uint256"
                    }, {
                        name: "preVerificationGas",
                        type: "uint256"
                    }, {
                        name: "maxFeePerGas",
                        type: "uint256"
                    }, {
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    }, {
                        name: "paymasterAndData",
                        type: "bytes32"
                    }], [a.sender, a.nonce, (0, p.S)(null !== (t = a.initCode) && void 0 !== t ? t : "0x"), (0, p.S)(a.callData), a.callGasLimit, a.verificationGasLimit, a.preVerificationGas, a.maxFeePerGas, a.maxPriorityFeePerGas, (0, p.S)(null !== (r = a.paymasterAndData) && void 0 !== r ? r : "0x")]), s = (0, p.S)(o), c = (0, u.h)([{
                        name: "userOpHash",
                        type: "bytes32"
                    }, {
                        name: "entryPoint",
                        type: "address"
                    }, {
                        name: "chainId",
                        type: "uint256"
                    }], [s, n, BigInt(i)]);
                    return (0, p.S)(c)
                }({
                    userOperation: t,
                    chainId: a,
                    entrypointAddress: r
                });
                return await y(e, i)
            }
            async function m(e, t) {
                return await e.wallet.sign({
                    hash: t
                })
            }
            async function g(e, t) {
                let {
                    method: r,
                    params: a
                } = t;
                if (!d.includes(r)) throw Error("Unsupported JSON RPC method: ".concat(r));
                switch (r) {
                    case "personal_sign":
                        return {
                            method: r,
                            data: await f(e, a[1], a[0])
                        };
                    case "eth_populateTransactionRequest":
                        return {
                            method: r,
                            data: await k(e, a[0])
                        };
                    case "eth_sign":
                        return P(e.wallet.address, a[0]), {
                            method: r,
                            data: await e.wallet.signMessage({
                                message: a[1]
                            })
                        };
                    case "eth_signTypedData_v4":
                        {
                            let t = function(e) {
                                if ("string" != typeof e) return e;
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    throw Error("Failed to deserialize message with error: ".concat(e))
                                }
                            }(a[1]);
                            return {
                                method: r,
                                data: await h(e, a[0], t)
                            }
                        }
                    case "eth_signTransaction":
                        {
                            let t = (0, l._)(a[0]);
                            return {
                                method: r,
                                data: await e.wallet.signTransaction(t)
                            }
                        }
                    case "eth_sendTransaction":
                        return {
                            method: r,
                            data: await b(e, a[0])
                        };
                    case "csw_signUserOperation":
                        {
                            let [t, i, n] = a;
                            return {
                                method: r,
                                data: await _(e, t, i, n)
                            }
                        }
                    case "secp256k1_sign":
                        {
                            let [t] = a;
                            return {
                                method: r,
                                data: await m(e, t)
                            }
                        }
                }
            }
            async function b(e, t) {
                try {
                    let {
                        chainId: r = c.r.id,
                        ...a
                    } = (0, l._)(t), i = (0, v.vo)(r), n = (0, v.vh)(r), d = (0, o.F)({
                        chain: i,
                        account: e.wallet,
                        transport: (0, s.L)(n)
                    });
                    return await d.sendTransaction(a)
                } catch (e) {
                    throw I(e)
                }
            }
            async function k(e, t) {
                try {
                    let {
                        chainId: r = c.r.id,
                        ...a
                    } = (0, l._)(t), i = (0, v.vo)(r), n = (0, v.vh)(r), d = (0, o.F)({
                        account: e.wallet.address,
                        chain: i,
                        transport: (0, s.L)(n)
                    }), {
                        type: u,
                        ...p
                    } = await d.prepareTransactionRequest(a);
                    return { ...p,
                        type: l.k[u]
                    }
                } catch (e) {
                    throw I(e)
                }
            }

            function I(e) {
                let t = e.code,
                    r = e.reason;
                return "INSUFFICIENT_FUNDS" === t ? new i.Pi("insufficient_funds", "Wallet has insufficient funds for this transaction") : r ? new i.Pi("error", r) : "string" == typeof e ? Error(e) : e
            }

            function P(e, t) {
                if (!(0, a.LH)(e, t)) throw Error("Signer ".concat(e, " can not sign on behalf of ").concat(t))
            }

            function E(e, t) {
                if (!(0, a.qi)(e.wallet.address)) throw new i.Pi("invalid_request_arguments", "Failed to service JSON RPC request: missing or invalid wallet address");
                return g(e, t)
            }
        },
        66322: (e, t, r) => {
            "use strict";
            r.d(t, {
                h6: () => w,
                kL: () => y,
                io: () => l,
                jt: () => T.A,
                Zv: () => A.A,
                uP: () => P,
                JG: () => m,
                _U: () => x
            });
            var a = r(77473),
                i = r(27510),
                n = r(46871),
                o = r(82927),
                s = r(6053),
                c = r(79822);
            async function l(e) {
                let t, {
                        appId: r,
                        appClientId: l,
                        userId: d,
                        accessToken: u,
                        clientType: p,
                        recoveryPassword: y,
                        recoveryMethod: v,
                        recoveryAccessToken: w,
                        recoveryPin: f,
                        recoveryKey: h,
                        recoverySecretOverride: _,
                        iCloudRecordNameOverride: m,
                        createWalletEvent: g,
                        existingEntropy: b
                    } = e,
                    k = [new Uint8Array([]), new Uint8Array([])],
                    I = [new Uint8Array([]), new Uint8Array([])];
                b ? ({
                    deviceShares: k
                } = await (0, i.MR)(b), t = (0, i.Ay)({
                    entropy: b,
                    walletIndex: 0
                })) : {
                    deviceShares: k,
                    recoveryShares: I,
                    wallet: t
                } = await (0, i.sr)();
                let [P, E] = k, T = await n.QQ({
                    appId: r,
                    appClientId: l,
                    accessToken: u,
                    address: t.address,
                    chainType: "ethereum"
                }), A = (0, i.t5)(window.location.host, window.location.origin, t.address, T), K = await t.signMessage({
                    message: A
                }), S = (0, i.hE)();
                if (b) await n.ry(r, l, u, {
                    message: A,
                    signature: K,
                    device_auth_share: a.K3.encode(E),
                    device_id: S
                });
                else {
                    let [e, o] = I, {
                        encryptionKey: b,
                        walletRecoveryOutput: k,
                        recoveryType: P
                    } = await (0, s.z)({
                        appId: r,
                        appClientId: l,
                        userId: d,
                        accessToken: u,
                        walletAddress: t.address,
                        clientType: p,
                        recoveryMethod: v,
                        recoveryPassword: y,
                        recoveryPin: f,
                        recoveryKey: h,
                        recoveryAccessToken: w,
                        recoverySecretOverride: _,
                        iCloudRecordNameOverride: m,
                        createWalletEvent: g
                    }), [T, U] = await Promise.all([(0, i.EN)(b), (0, i.vb)(e, b)]), x = await (0, c.qz)(k);
                    await n.gc({
                        appId: r,
                        appClientId: l,
                        accessToken: u,
                        data: {
                            entropy_key: t.address,
                            entropy_key_verifier: "ethereum-address-verifier",
                            chain_type: "ethereum",
                            message: A,
                            signature: K,
                            device_id: S,
                            device_auth_share: a.K3.encode(E),
                            recovery_auth_share: a.K3.encode(o),
                            encrypted_recovery_share: a.K3.encode(U.encryptedShare),
                            encrypted_recovery_share_iv: a.K3.encode(U.encryptedShareIV),
                            recovery_type: P,
                            recovery_key_hash: a.K3.encode(T),
                            imported: !1,
                            ...x
                        }
                    })
                }
                return await o.A.set({
                    appId: r,
                    userId: d,
                    address: t.address
                }, {
                    share: a.K3.encode(P),
                    deviceId: S
                }), {
                    wallet: t,
                    walletIndex: 0
                }
            }
            var d = r(88934),
                u = r.n(d),
                p = r(51642).Buffer;
            async function y(e) {
                let t, r, {
                        appId: s,
                        appClientId: l,
                        userId: d,
                        accessToken: y,
                        existingEntropy: v
                    } = e,
                    w = [new Uint8Array([]), new Uint8Array([])],
                    f = [new Uint8Array([]), new Uint8Array([])];
                v ? ({
                    deviceShares: w
                } = await (0, i.MR)(v), t = (0, i.kG)({
                    entropy: v,
                    index: 0
                }), r = v) : {
                    deviceShares: w,
                    recoveryShares: f,
                    keypair: t,
                    entropy: r
                } = await (0, i.IV)(256);
                let h = t.publicKey.toBase58(),
                    [_, m] = w,
                    g = await n.QQ({
                        appId: s,
                        appClientId: l,
                        accessToken: y,
                        address: h,
                        chainType: "solana"
                    }),
                    b = (0, i.zT)(window.location.host, window.location.origin, h, g),
                    k = u().sign.detached(p.from(b), t.secretKey),
                    I = a.K3.encode(p.from(k)),
                    P = (0, i.hE)();
                if (v) await n.IV(s, l, y, {
                    message: b,
                    signature: I,
                    device_id: P,
                    device_auth_share: a.K3.encode(m)
                });
                else {
                    let {
                        encryptionKey: e,
                        walletRecoveryOutput: t
                    } = await (0, c.cq)({
                        recoveryType: "privy_generated_recovery_key"
                    }), {
                        recovery_key: r
                    } = await (0, c.qz)(t), [o, d] = f, [u, p] = await Promise.all([(0, i.EN)(e), (0, i.vb)(o, e)]);
                    await n.gc({
                        appId: s,
                        appClientId: l,
                        accessToken: y,
                        data: {
                            entropy_key: h,
                            entropy_key_verifier: "solana-address-verifier",
                            chain_type: "solana",
                            message: b,
                            signature: I,
                            device_id: P,
                            device_auth_share: a.K3.encode(m),
                            recovery_auth_share: a.K3.encode(d),
                            encrypted_recovery_share: a.K3.encode(p.encryptedShare),
                            encrypted_recovery_share_iv: a.K3.encode(p.encryptedShareIV),
                            recovery_type: "privy_generated_recovery_key",
                            recovery_key_hash: a.K3.encode(u),
                            recovery_key: r,
                            imported: !1
                        }
                    })
                }
                return await o.A.set({
                    appId: s,
                    userId: d,
                    address: h
                }, {
                    share: a.K3.encode(_),
                    deviceId: P
                }), {
                    entropyType: "hd-entropy",
                    chainType: "solana",
                    wallet: {
                        keypair: t,
                        address: h
                    },
                    walletIndex: 0,
                    entropy: r
                }
            }
            var v = r(24610);
            async function w(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    hdWalletIndex: o,
                    entropy: s
                } = e;
                if (o <= 0) throw new v.Pi("invalid_request_arguments", "Failed to create additional wallet: invalid wallet index");
                let c = (0, i.Ay)({
                        entropy: s,
                        walletIndex: o
                    }),
                    l = await n.QQ({
                        appId: t,
                        appClientId: r,
                        accessToken: a,
                        address: c.address,
                        chainType: "ethereum"
                    }),
                    d = (0, i.t5)(window.location.host, window.location.origin, c.address, l),
                    u = await c.signMessage({
                        message: d
                    });
                return await n.Zn({
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    data: {
                        message: d,
                        signature: u,
                        hd_node_index: o,
                        chain_type: "ethereum"
                    }
                }), c
            }
            var f = r(15775),
                h = r(95246),
                _ = r(36902);
            async function m(e) {
                let {
                    cachedWalletData: t,
                    appId: r,
                    appClientId: a,
                    clientAnalyticsId: n,
                    userId: o,
                    hdWalletIndex: s,
                    chainType: c,
                    entropyId: l,
                    entropyIdVerifier: d,
                    accessToken: u,
                    mfaCode: p,
                    mfaMethod: y,
                    relyingParty: w,
                    verificationKeys: m,
                    hasSetMfaToken: g,
                    createWalletEvent: b
                } = e, {
                    entropy: k,
                    entropyType: I
                } = await (0, _.A)({
                    cache: t,
                    appId: r,
                    appClientId: a,
                    clientAnalyticsId: n,
                    userId: o,
                    entropyId: l,
                    entropyIdVerifier: d,
                    accessToken: u,
                    mfaCode: p,
                    mfaMethod: y,
                    relyingParty: w,
                    verificationKeys: m,
                    hasSetMfaToken: g,
                    createWalletEvent: b
                });
                if (t && k === t.entropy && t.entropyId === l && t.chainType === c && t.walletIndex === s) return t;
                if ("private-key" === I && "ethereum" === c) return {
                    entropy: k,
                    entropyType: I,
                    entropyId: l,
                    entropyIdVerifier: d,
                    chainType: "ethereum",
                    wallet: (0, i.st)({
                        entropy: k
                    })
                };
                if ("private-key" === I && "solana" === c) {
                    let e = (0, i.Wi)({
                        entropy: k
                    });
                    return {
                        entropy: k,
                        entropyType: I,
                        entropyId: l,
                        entropyIdVerifier: d,
                        chainType: c,
                        wallet: {
                            keypair: e,
                            address: e.publicKey.toBase58()
                        }
                    }
                }
                if ("hd-entropy" === I && "ethereum" === c) return {
                    entropy: k,
                    entropyType: I,
                    entropyId: l,
                    entropyIdVerifier: d,
                    chainType: c,
                    walletIndex: s,
                    wallet: (0, i.Ay)({
                        entropy: k,
                        walletIndex: s
                    })
                };
                if ("hd-entropy" === I && "solana" === c) {
                    let e = (0, i.kG)({
                        entropy: k,
                        index: s
                    });
                    return {
                        entropy: k,
                        entropyType: I,
                        entropyId: l,
                        entropyIdVerifier: d,
                        chainType: c,
                        walletIndex: s,
                        wallet: {
                            keypair: e,
                            address: e.publicKey.toBase58()
                        }
                    }
                }
                if ("hd-entropy" === I && "bitcoin-segwit" === c) return {
                    entropyType: I,
                    entropy: k,
                    entropyId: l,
                    entropyIdVerifier: d,
                    chainType: c,
                    walletIndex: s,
                    wallet: (0, f.E)({
                        entropy: k,
                        index: s,
                        pathType: "segwit"
                    })
                };
                if ("hd-entropy" === I && "bitcoin-taproot" === c) return {
                    entropyType: I,
                    entropy: k,
                    entropyId: l,
                    entropyIdVerifier: d,
                    chainType: c,
                    walletIndex: s,
                    wallet: (0, f.E)({
                        entropy: k,
                        index: s,
                        pathType: "taproot"
                    })
                };
                if ("private-key" === I && "p256" === c) return {
                    entropyType: I,
                    entropy: k,
                    entropyId: l,
                    entropyIdVerifier: d,
                    chainType: c,
                    wallet: await (0, h.a)({
                        entropy: k
                    })
                };
                throw new v.Pi("invalid_request_arguments", "Failed to initialize ".concat(c, " wallet at index ").concat(s))
            }
            var g = r(94928),
                b = r(76462),
                k = r(20897),
                I = r(41033);
            async function P(e) {
                let t, r, s, {
                    appId: c,
                    appClientId: l,
                    createWalletEvent: d,
                    userId: u,
                    accessToken: p,
                    verificationKeys: y,
                    hasSetMfaToken: w,
                    clientType: f,
                    entropyId: _,
                    entropyIdVerifier: m,
                    recoveryPassword: P,
                    recoveryKey: T,
                    mfaCode: A,
                    mfaMethod: K,
                    relyingParty: S,
                    recoveryAccessToken: U,
                    recoverySecretOverride: x
                } = e;
                if ("ethereum-address-verifier" !== m || (0, i.qi)(_)) {
                    if ("solana-address-verifier" === m && !(0, i.Zf)(_)) throw new v.Pi("invalid_request_arguments", "Failed to recover wallet: missing or invalid wallet address")
                } else throw new v.Pi("invalid_request_arguments", "Failed to recover wallet: missing or invalid wallet address");
                if (void 0 !== P && !(0, i.jt)(P)) throw new v.Pi("invalid_request_arguments", "Failed to recover wallet: invalid recovery pin");
                let C = await (0, I.X)({
                        appId: c,
                        appClientId: l,
                        userId: u,
                        accessToken: p,
                        mfaMethod: K,
                        mfaCode: A,
                        relyingParty: S,
                        verificationKeys: y,
                        hasSetMfaToken: w,
                        createWalletEvent: d
                    }),
                    {
                        recovery_type: F,
                        recovery_key_derivation_salt: R,
                        recovery_code: M,
                        recovery_key: q,
                        file_id: N,
                        icloud_record_name: G
                    } = await n.j({
                        appId: c,
                        appClientId: l,
                        accessToken: p,
                        entropyKey: _,
                        entropyKeyVerifier: m
                    });
                if ("icloud_recovery_secret" !== F && x) throw new v.Pi("invalid_request_arguments", "Failed to recover wallet: recovery secret override is only supported for iCloud recovery");
                if ("user_passcode_derived_recovery_key" === F) {
                    if (!P) throw new v.Pi("error", "Failed to recover wallet: user passcode required and none found");
                    if (!R) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve salt for user-supplied passcode derived wallet");
                    t = await (0, i.Ud)(P, a.K3.decode(R))
                } else if ("privy_passcode_derived_recovery_key" === F) {
                    if (!R) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve salt for Privy-supplied passcode derived wallet");
                    if (!M) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve Privy-supplied passcode");
                    t = await (0, i.Ud)(M, a.K3.decode(R))
                } else if ("privy_generated_recovery_key" === F) {
                    if (!q) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve Privy-generated recovery key");
                    t = await (0, i.kS)(a.K3.decode(q))
                } else if ("google_drive_recovery_secret" === F) {
                    let e;
                    if (!N) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve fileId for Google Drive recovery secret derived recovery key");
                    if (!U) throw new v.Pi("error", "Failed to recover wallet: missing recovery auth access token");
                    try {
                        e = await (0, b.lT)(U, {
                            fileId: N
                        })
                    } catch (e) {
                        throw new v.Pi("error", "Failed to recover wallet: failed to read recovery secret from Google Drive")
                    }
                    if (!e) throw new v.Pi("error", "Failed to recover wallet: missing recovery secret from Google Drive");
                    t = await (0, i.kS)(a.K3.decode(e))
                } else if ("icloud_recovery_secret" === F) {
                    let e;
                    if (x) e = x;
                    else {
                        if (!G) throw new v.Pi("error", "Failed to recover wallet: cannot retrieve iCloud record name for iCloud recovery secret derived recovery key");
                        if (!U) throw new v.Pi("error", "Failed to recover wallet: missing recovery auth access token");
                        try {
                            let {
                                cloudKitContainerIdentifier: t,
                                cloudKitEnvironment: r,
                                cloudKitApiToken: a
                            } = await (0, k.hf)(c, l, p, f);
                            e = await (0, k.WT)({
                                ckWebAuthToken: U,
                                recordName: G,
                                entropyId: _,
                                cloudKitContainerIdentifier: t,
                                cloudKitEnvironment: r,
                                cloudKitApiToken: a,
                                createWalletEvent: (e, t) => d(e, { ...t,
                                    entropyIdVerifier: m
                                })
                            })
                        } catch (e) {
                            if (e instanceof v.Pi) throw e;
                            throw new v.Pi("unknown_icloud_recovery_error", "Failed to recover wallet: unknown issue reading recovery secret from iCloud")
                        }
                        if (!e) throw new v.Pi("error", "Failed to recover wallet: missing recovery secret from iCloud")
                    }
                    t = await (0, i.kS)(a.K3.decode(e))
                } else if ("recovery_encryption_key" === F) {
                    if (!T) throw new v.Pi("error", "Failed to recover wallet: missing recovery key");
                    t = await (0, i.kS)(a.K3.decode(T))
                }
                if (!t) throw new v.Pi("error", "Failed to recover wallet recovery key");
                let O = await (0, i.EN)(t),
                    {
                        recoveryAuthShare: V,
                        encryptedRecoveryShare: L,
                        encryptedRecoveryShareIV: D,
                        imported: B
                    } = await E({
                        appId: c,
                        appClientId: l,
                        accessToken: p,
                        entropyId: _,
                        entropyIdVerifier: m,
                        recoveryKeyHash: a.K3.encode(O),
                        mfaToken: C
                    }),
                    j = await (0, i.nz)(a.K3.decode(L), a.K3.decode(D), t);
                if ("ethereum-address-verifier" === m && B) {
                    let {
                        reconstructedWallet: e,
                        reconstructedPrivateKey: t
                    } = await (0, i.Pp)({
                        shares: [j, a.K3.decode(V)],
                        expectedAddress: _
                    });
                    r = {
                        entropyId: _,
                        entropyIdVerifier: m,
                        chainType: "ethereum",
                        entropyType: "private-key",
                        wallet: e,
                        entropy: t
                    }, s = t
                } else if ("ethereum-address-verifier" === m) {
                    let {
                        entropy: e,
                        wallet: t
                    } = await (0, i.p$)({
                        shares: [j, a.K3.decode(V)],
                        primaryAddress: _,
                        walletIndex: 0
                    });
                    s = (r = {
                        entropyId: _,
                        entropyIdVerifier: m,
                        chainType: "ethereum",
                        entropyType: "hd-entropy",
                        wallet: t,
                        entropy: e,
                        walletIndex: 0
                    }).entropy
                } else if ("solana-address-verifier" === m && B) {
                    let {
                        reconstructedKeypair: e,
                        reconstructedPrivateKey: t
                    } = await (0, i.IX)({
                        shares: [j, a.K3.decode(V)],
                        expectedAddress: _
                    });
                    r = {
                        chainType: "solana",
                        entropyType: "private-key",
                        entropyId: _,
                        entropyIdVerifier: m,
                        wallet: {
                            keypair: e,
                            address: e.publicKey.toBase58()
                        },
                        entropy: t
                    }, s = t
                } else if ("solana-address-verifier" === m) {
                    let {
                        reconstructedKeypair: e,
                        reconstructedEntropy: t
                    } = await (0, i.M4)({
                        shares: [j, a.K3.decode(V)],
                        expectedPublicKey: _,
                        index: 0
                    });
                    r = {
                        chainType: "solana",
                        entropyType: "hd-entropy",
                        entropyId: _,
                        entropyIdVerifier: m,
                        wallet: {
                            keypair: e,
                            address: e.publicKey.toBase58()
                        },
                        walletIndex: 0,
                        entropy: t
                    }, s = t
                } else if ("p256" === m) {
                    let e = await (0, g.k)([j, a.K3.decode(V)]),
                        t = await (0, h.a)({
                            entropy: e
                        });
                    if (t.publicKey !== _) throw Error("Failed to reconstruct the expected public key from Shamir shares.");
                    r = {
                        chainType: "p256",
                        entropyType: "private-key",
                        entropyId: _,
                        entropyIdVerifier: m,
                        wallet: t,
                        entropy: e
                    }, s = e
                } else throw new v.Pi("error", "Failed to recover wallet: entropyIdVerifier ".concat(m, " not supported"));
                let z = (0, i.hE)(),
                    [W, H] = await (0, i.uY)(s),
                    Y = a.K3.encode(H);
                return await n.Dz({
                    userId: u,
                    appId: c,
                    appClientId: l,
                    accessToken: p,
                    entropyKey: _,
                    entropyKeyVerifier: m,
                    deviceId: z,
                    deviceAuthShare: Y
                }), await o.A.set({
                    appId: c,
                    userId: u,
                    address: _
                }, {
                    share: a.K3.encode(W),
                    deviceId: z
                }), r
            }
            async function E(e) {
                let {
                    appId: t,
                    appClientId: r,
                    accessToken: a,
                    entropyId: i,
                    entropyIdVerifier: o,
                    recoveryKeyHash: s,
                    mfaToken: c
                } = e;
                try {
                    let [e, l] = await Promise.all([n.bz({
                        appId: t,
                        appClientId: r,
                        accessToken: a,
                        entropyKey: i,
                        entropyKeyVerifier: o,
                        mfaToken: c
                    }), n.jh({
                        appId: t,
                        appClientId: r,
                        accessToken: a,
                        entropyKey: i,
                        entropyKeyVerifier: o,
                        recoveryKeyHash: s
                    })]);
                    return {
                        recoveryAuthShare: e.share,
                        encryptedRecoveryShare: l.encrypted_recovery_share,
                        encryptedRecoveryShareIV: l.encrypted_recovery_share_iv,
                        imported: l.imported
                    }
                } catch (e) {
                    var l;
                    if ((null === (l = e.response) || void 0 === l ? void 0 : l.status) === 400) throw new v.Pi("invalid_recovery_pin", "Failed to recover wallet: invalid recovery pin");
                    if ((0, v.$J)(e)) throw new v.Pi("missing_or_invalid_mfa", "MFA verification failed");
                    throw new v.Pi("error", "Failed to recover wallet: ".concat(e instanceof Error ? e.message : "unknown error"))
                }
            }
            var T = r(64167),
                A = r(15519);
            let K = e => {
                throw Error("Expected never got ".concat(e))
            };
            var S = r(12318),
                U = r(51642).Buffer;
            async function x(e) {
                let {
                    appId: t,
                    appClientId: r,
                    userId: s,
                    accessToken: l,
                    clientType: d,
                    entropy: u,
                    entropyId: p,
                    entropyIdVerifier: y,
                    recoveryOptions: w,
                    createWalletEvent: f
                } = e, h = S.Z[w.recoveryMethod];
                w.existingRecoveryMethod && function(e) {
                    let {
                        currentRecoveryMethod: t,
                        upgradeToRecoveryMethod: r
                    } = e;
                    switch (t) {
                        case "privy_generated_recovery_key":
                        case "user_passcode_derived_recovery_key":
                        case "privy_passcode_derived_recovery_key":
                        case "recovery_encryption_key":
                            return;
                        case "icloud_recovery_secret":
                        case "google_drive_recovery_secret":
                            if (t === r) throw Error("Cannot upgrade to the existing cloud platform");
                            return;
                        default:
                            K(t)
                    }
                }({
                    currentRecoveryMethod: S.Z[w.existingRecoveryMethod],
                    upgradeToRecoveryMethod: h
                });
                let _ = (0, c.Zw)({
                        recoveryType: h,
                        appId: t,
                        appClientId: r,
                        userId: s,
                        entropyId: p,
                        clientType: d,
                        accessToken: l,
                        createWalletEvent: f,
                        recoveryPassword: "user-passcode" === w.recoveryMethod ? w.recoveryPassword : void 0,
                        recoveryKey: "recovery-encryption-key" === w.recoveryMethod ? w.recoveryKey : void 0,
                        recoveryAccessToken: "google-drive" === w.recoveryMethod || "icloud" === w.recoveryMethod ? w.recoveryAccessToken : void 0,
                        recoverySecretOverride: "icloud-native" === w.recoveryMethod ? w.recoverySecretOverride : void 0,
                        iCloudRecordNameOverride: "icloud-native" === w.recoveryMethod ? w.iCloudRecordNameOverride : void 0
                    }),
                    m = await o.A.get({
                        appId: t,
                        userId: s,
                        address: p
                    });
                if (!m) throw new v.Pi("wallet_not_on_device", "Failed to initialize wallet: wallet with address '".concat(p, "' not loaded on this device"));
                let [g, b] = await Promise.all([(0, i.uY)(u), (0, i.uY)(u)]), [k, I] = g, [P, E] = b;
                await C({
                    shares: [P, E],
                    entropyId: p,
                    entropyIdVerifier: y
                });
                let [T, {
                    encryptionKey: A,
                    walletRecoveryOutput: U
                }] = await Promise.all([n.QQ({
                    appId: t,
                    appClientId: r,
                    accessToken: l,
                    address: p,
                    chainType: "ethereum-address-verifier" === y ? "ethereum" : "solana"
                }), (0, c.cq)(_)]), [x, R] = await Promise.all([(0, i.EN)(A), (0, i.vb)(P, A)]), [M, {
                    message: q,
                    signature: N
                }] = await Promise.all([(0, c.qz)(U), F({
                    nonce: T,
                    entropy: u,
                    entropyId: p,
                    entropyIdVerifier: y
                })]);
                return await n.p5({
                    appId: t,
                    appClientId: r,
                    accessToken: l,
                    data: {
                        entropy_key: p,
                        entropy_key_verifier: y,
                        message: q,
                        signature: N,
                        device_id: m.deviceId,
                        device_auth_share: a.K3.encode(I),
                        recovery_type: h,
                        recovery_auth_share: a.K3.encode(E),
                        encrypted_recovery_share: a.K3.encode(R.encryptedShare),
                        encrypted_recovery_share_iv: a.K3.encode(R.encryptedShareIV),
                        recovery_key_hash: a.K3.encode(x),
                        ...M
                    }
                }), await o.A.set({
                    appId: t,
                    userId: s,
                    address: p
                }, {
                    share: a.K3.encode(k),
                    deviceId: m.deviceId
                }), {
                    entropy: u,
                    entropyId: p,
                    entropyIdVerifier: y,
                    entropyType: "hd-entropy"
                }
            }
            async function C(e) {
                let {
                    entropyIdVerifier: t,
                    shares: r,
                    entropyId: a
                } = e;
                "solana-address-verifier" === t ? await (0, i.M4)({
                    shares: r,
                    expectedPublicKey: a,
                    index: 0
                }) : await (0, i.p$)({
                    shares: r,
                    primaryAddress: a,
                    walletIndex: 0
                })
            }
            async function F(e) {
                let {
                    nonce: t,
                    entropy: r,
                    entropyId: n,
                    entropyIdVerifier: o
                } = e;
                if ("solana-address-verifier" === o) {
                    let e = (0, i.zT)(window.location.host, window.location.origin, n, t),
                        o = (0, i.kG)({
                            entropy: r,
                            index: 0
                        }),
                        s = u().sign.detached(U.from(e), o.secretKey);
                    return {
                        message: e,
                        signature: a.K3.encode(s)
                    }
                } {
                    let e = (0, i.t5)(window.location.host, window.location.origin, n, t),
                        a = (0, i.Ay)({
                            entropy: r,
                            walletIndex: 0
                        }),
                        o = await a.signMessage({
                            message: e
                        });
                    return {
                        message: e,
                        signature: o
                    }
                }
            }
        },
        76462: (e, t, r) => {
            "use strict";
            r.d(t, {
                Vz: () => s,
                lT: () => c,
                w5: () => o
            });
            var a = r(77473),
                i = r(91040),
                n = r(27510);
            async function o(e) {
                let {
                    appId: t,
                    userId: r,
                    entropyId: i
                } = e, o = await (0, n.YZ)(i), s = a.K3.encode(o);
                return "privy-wallet-".concat(t, "-").concat(r, "-").concat(s, ".txt")
            }
            async function s(e, t) {
                let {
                    recoverySecret: r,
                    filename: a
                } = t, n = "recovery-secret-boundary", o = "\r\n--".concat(n, "\r\n"), s = o + "Content-Type: application/json; charset=UTF-8\r\n\r\n" + JSON.stringify({
                    name: a,
                    mimeType: "text/plain",
                    parents: ["appDataFolder"]
                }) + o + "Content-Type: text/plain\r\n\r\n" + r + "\r\n--".concat(n, "--");
                return (await i.A.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", s, {
                    headers: {
                        "Content-Type": 'multipart/related; boundary="'.concat(n, '"'),
                        Authorization: "Bearer ".concat(e)
                    }
                })).data.id
            }
            async function c(e, t) {
                let {
                    fileId: r
                } = t;
                return (await i.A.get("https://www.googleapis.com/drive/v3/files/".concat(r), {
                    headers: {
                        Authorization: "Bearer ".concat(e)
                    },
                    params: {
                        alt: "media"
                    },
                    responseType: "text"
                })).data
            }
        },
        76928: () => {},
        78933: (e, t, r) => {
            "use strict";

            function a(e) {
                return !!e.ReactNativeWebView && e.top === e
            }

            function i(e) {
                return a(e) && navigator.userAgent.includes("Android")
            }

            function n(e) {
                let {
                    PRIVY_NATIVE_IOS: t,
                    PRIVY_NATIVE_ANDROID: r,
                    PRIVY_UNITY: n
                } = e;
                return r ? "native-android" : t ? "native-ios" : n ? "unity" : i(e) ? "expo-android" : a(e) ? "expo-ios" : "web"
            }
            r.d(t, {
                k3: () => i,
                l_: () => a,
                yS: () => n
            })
        },
        79822: (e, t, r) => {
            "use strict";
            r.d(t, {
                Zw: () => c,
                cq: () => l,
                qz: () => d
            });
            var a = r(77473),
                i = r(27510),
                n = r(24610),
                o = r(76462),
                s = r(20897);

            function c(e) {
                let {
                    recoveryType: t,
                    appId: r,
                    appClientId: a,
                    userId: o,
                    entropyId: s,
                    accessToken: c,
                    clientType: l,
                    recoveryPassword: d,
                    recoveryKey: u,
                    recoveryAccessToken: p,
                    recoverySecretOverride: y,
                    iCloudRecordNameOverride: v,
                    createWalletEvent: w
                } = e;
                if ("user_passcode_derived_recovery_key" === t) {
                    if (!d || !(0, i.jt)(d)) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: missing or invalid recovery password");
                    if (p) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: recovery access token should not be provided for user recovery secret protected wallets.");
                    return {
                        recoveryType: t,
                        recoveryPassword: d
                    }
                }
                if ("privy_generated_recovery_key" === t) {
                    if (d) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: recovery password should not be provided for privy generated recovery key wallets.");
                    if (p) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: recovery access token should not be provided for privy generated recovery key wallets.");
                    return {
                        recoveryType: t
                    }
                }
                if ("google_drive_recovery_secret" === t) {
                    if (!p) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: missing recovery access token");
                    if (d) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: recovery password should not be provided for google drive recovery secret protected wallets.");
                    return {
                        recoveryType: t,
                        recoveryAccessToken: p,
                        appId: r,
                        userId: o,
                        entropyId: s
                    }
                }
                if ("icloud_recovery_secret" === t) {
                    if (!(p || y && v)) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: missing recovery access token or value overrides");
                    if (d) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: recovery password should not be provided for iCloud recovery secret protected wallets.");
                    if (!["web", "expo-ios"].includes(l)) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: client type ".concat(l, " is not supported for iCloud recovery"));
                    return {
                        recoveryType: t,
                        recoveryAccessToken: null != p ? p : null,
                        appId: r,
                        appClientId: a,
                        userId: o,
                        entropyId: s,
                        customerAccessToken: c,
                        clientType: l,
                        recoverySecretOverride: null != y ? y : null,
                        iCloudRecordNameOverride: null != v ? v : null,
                        createWalletEvent: w
                    }
                }
                if ("recovery_encryption_key" === t) {
                    if (!u) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: missing or invalid recovery key");
                    return {
                        recoveryType: t,
                        recoveryKey: u
                    }
                } else throw new n.Pi("invalid_request_arguments", "Failed to create wallet: unknown recovery type: ".concat(t))
            }
            async function l(e) {
                let {
                    recoveryType: t
                } = e;
                if ("user_passcode_derived_recovery_key" === t) {
                    let {
                        recoveryPassword: r
                    } = e, a = (0, i.s5)();
                    return {
                        encryptionKey: await (0, i.Ud)(r, a),
                        walletRecoveryOutput: {
                            recoveryType: t,
                            recoveryKeyDerivationSalt: a
                        }
                    }
                }
                if ("privy_generated_recovery_key" === t) {
                    let e = await (0, i.CI)();
                    return {
                        encryptionKey: e,
                        walletRecoveryOutput: {
                            recoveryType: t,
                            encryptionKey: e
                        }
                    }
                }
                if ("google_drive_recovery_secret" === t) {
                    let r;
                    let {
                        recoveryAccessToken: s
                    } = e, c = await (0, i.CI)(), l = a.K3.encode(await (0, i.WQ)(c)), d = await (0, o.w5)({
                        appId: e.appId,
                        userId: e.userId,
                        entropyId: e.entropyId
                    });
                    try {
                        r = await (0, o.Vz)(s, {
                            recoverySecret: l,
                            filename: d
                        })
                    } catch (t) {
                        let e = t instanceof Error ? t.message : "Provider error";
                        throw new n.Pi("error", "Failed to write recovery secret to Google Drive: ".concat(e))
                    }
                    return {
                        encryptionKey: c,
                        walletRecoveryOutput: {
                            recoveryType: t,
                            filename: d,
                            fileId: r
                        }
                    }
                }
                if ("icloud_recovery_secret" === t) {
                    let r;
                    let {
                        recoveryAccessToken: o,
                        entropyId: c,
                        appId: l,
                        appClientId: d,
                        userId: u,
                        customerAccessToken: p,
                        clientType: y,
                        recoverySecretOverride: v,
                        iCloudRecordNameOverride: w
                    } = e;
                    if (v && !w || !v && w) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: both recovery secret and iCloud record name must be provided if one is provided.");
                    if (v && w) return {
                        encryptionKey: await (0, i.kS)(a.K3.decode(v)),
                        walletRecoveryOutput: {
                            recoveryType: t,
                            recordName: w
                        }
                    };
                    if (!o) throw new n.Pi("invalid_request_arguments", "Failed to create wallet: missing recovery access token for iCloud recovery");
                    let f = await (0, i.CI)(),
                        h = a.K3.encode(await (0, i.WQ)(f));
                    try {
                        let {
                            cloudKitContainerIdentifier: e,
                            cloudKitEnvironment: t,
                            cloudKitApiToken: a
                        } = await (0, s.hf)(l, d, p, y);
                        r = await (0, s.yt)({
                            ckWebAuthToken: o,
                            recoverySecretToStore: h,
                            entropyId: c,
                            appId: l,
                            userId: u,
                            cloudKitContainerIdentifier: e,
                            cloudKitEnvironment: t,
                            cloudKitApiToken: a
                        })
                    } catch (r) {
                        if ((0, n.dS)(r)) throw e.createWalletEvent(r.eventInfo.eventName, r.eventInfo.payload), r.convert();
                        let t = r instanceof Error ? r.message : "Provider error";
                        throw new n.Pi("error", "Failed to write recovery secret to iCloud: ".concat(t))
                    }
                    return {
                        encryptionKey: f,
                        walletRecoveryOutput: {
                            recoveryType: t,
                            recordName: r
                        }
                    }
                }
                if ("recovery_encryption_key" === t) {
                    let {
                        recoveryKey: r
                    } = e;
                    try {
                        let e = await (0, i.kS)(a.K3.decode(r));
                        return {
                            encryptionKey: e,
                            walletRecoveryOutput: {
                                recoveryType: t,
                                encryptionKey: e
                            }
                        }
                    } catch (t) {
                        let e = t instanceof Error ? t.message : "invalid key";
                        throw new n.Pi("error", "Unable to decode and import recovery key: ".concat(e))
                    }
                } else throw Error("Unknown recovery type.")
            }
            async function d(e) {
                let {
                    recoveryType: t
                } = e;
                if ("user_passcode_derived_recovery_key" === t) {
                    let {
                        recoveryKeyDerivationSalt: t
                    } = e;
                    return {
                        recovery_key_derivation_salt: a.K3.encode(t)
                    }
                }
                if ("privy_generated_recovery_key" === t) {
                    let {
                        encryptionKey: t
                    } = e;
                    return {
                        recovery_key: a.K3.encode(await (0, i.WQ)(t))
                    }
                }
                if ("google_drive_recovery_secret" === t) {
                    let {
                        filename: t,
                        fileId: r
                    } = e;
                    return {
                        filename: t,
                        file_id: r
                    }
                }
                if ("icloud_recovery_secret" === t) {
                    let {
                        recordName: t
                    } = e;
                    return {
                        icloud_record_name: t
                    }
                }
                if ("recovery_encryption_key" === t) return {};
                else throw Error("Unknown recovery type: ".concat(t))
            }
        },
        82927: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var a = r(8195),
                i = r(46595),
                n = r(27510),
                o = r(95293);
            class s extends o.i {
                async set(e, t) {
                    let r = this.getWalletStorageKey(e),
                        a = {
                            share: t.share,
                            deviceId: t.deviceId
                        };
                    await this._set(r, a)
                }
                async get(e) {
                    let t = this.getWalletStorageKey(e);
                    return await this._get(t)
                }
                async del(e) {
                    let t = this.getWalletStorageKey(e);
                    await this._del(t)
                }
                getWalletStorageKey(e) {
                    let {
                        appId: t,
                        userId: r,
                        address: a
                    } = e;
                    return "privy_wallet:".concat(t, ":").concat(r, ":").concat((0, n.qi)(a) ? (0, n.py)(a) : a)
                }
                constructor(e) {
                    super(e)
                }
            }
            var c = r(10526);
            let l = new s((() => {
                try {
                    if ((0, a.n)()) {
                        let e = new c._,
                            t = (0, i.P)();
                        return new a.r(e, t)
                    }
                    if ("undefined" != typeof globalThis && globalThis.localStorage) {
                        globalThis.localStorage.setItem("privy-storage-check", "t");
                        let e = globalThis.localStorage.getItem("privy-storage-check");
                        if (globalThis.localStorage.removeItem("privy-storage-check"), "t" !== e) throw console.debug("Localstorage check failed"), Error("Unable to ping localStorage");
                        return globalThis.localStorage
                    }
                    return new c._
                } catch (e) {
                    return e instanceof DOMException && "SecurityError" === e.name ? console.debug("Security settings in your browser prevent access to local storage, used for persisting wallet state. Wallet information will be stored in-memory.") : console.debug("Unknown issue loading local storage, used for persisting wallet state. Wallet information will be stored in-memory."), new c._
                }
            })())
        },
        95246: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => n
            });
            var a = r(77473),
                i = r(53499);
            async function n(e) {
                let {
                    entropy: t
                } = e, r = await (0, i.m)(t), n = a.K3.encode(r);
                return {
                    publicKey: n,
                    privateKey: t,
                    address: n
                }
            }
        },
        95293: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => a
            });
            class a {
                async _set(e, t) {
                    await this.storage.setItem(e, JSON.stringify(t))
                }
                async _get(e) {
                    let t = await this.storage.getItem(e);
                    if ("string" != typeof t) return null;
                    try {
                        return JSON.parse(t)
                    } catch (t) {
                        return console.warn("Unable to parse value from storage for key ".concat(e, ". Error: ").concat(t)), await this.storage.removeItem(e), null
                    }
                }
                async _del(e) {
                    await this.storage.removeItem(e)
                }
                constructor(e) {
                    this.storage = e
                }
            }
        },
        99798: (e, t, r) => {
            "use strict";
            var a = r(51642).Buffer;
            t.MC = i, t.fj = n, "undefined" == typeof crypto && (globalThis.crypto = r(62701).webcrypto);
            async function i(e) {
                return o(await crypto.subtle.exportKey("spki", e), "PUBLIC KEY")
            }
            async function n(e) {
                return s(await crypto.subtle.exportKey("pkcs8", e))
            }

            function o(e, t) {
                let r = s(e),
                    a = r.match(/.{1,64}/g);
                return `-----BEGIN ${t}-----
` + (a ? a.join("\n") : r) + `
-----END ${t}-----`
            }

            function s(e) {
                return function(e) {
                    return btoa(String.fromCharCode(...e))
                }(new Uint8Array(e))
            }
        }
    }
]);