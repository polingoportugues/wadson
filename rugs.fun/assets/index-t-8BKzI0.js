const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/embedded-wallet-gu_H4G6Z.js", "assets/lit-element-bcC7X8ka.js", "assets/class-map-DBQZYyHE.js", "assets/index-7vjA79iQ.js", "assets/pixi-vendor-CD9TR_py.js", "assets/solana-vendor-E3c5Mf0a.js", "assets/react-vendor-1qCqAHqt.js", "assets/index-UwIO1k6e.js", "assets/index-DYyxKws7.js", "assets/ref-y32lZ1Y1.js", "assets/index-lw_xODXj.js", "assets/index-rD7KG1LB.js", "assets/index-l_BnA-R9.js", "assets/index-yQV2z5aS.js", "assets/index-Dkwx4SEc.js", "assets/index-CW6MkTNG.js", "assets/index-DccHHNeF.js", "assets/auth-vendor-XDJ1EvAC.js", "assets/mui-vendor-DDV5n_UM.js", "assets/utils-vendor-Dn72NG2i.js", "assets/state-vendor-Cp_ttFKi.js", "assets/email-BqEFyuWG.js", "assets/index-C2Qo7K_I.js", "assets/socials-CcP_4O21.js", "assets/index-Ct2-Rn5b.js", "assets/ConstantsUtil-Dmg8YACJ.js", "assets/index-CeNZcFLh.js", "assets/index-C21QnkB5.js", "assets/index-YEfNiaW6.js", "assets/index-D_sE5vDe.js", "assets/index-C7pMXzEw.js", "assets/swaps-C6pYBS_v.js", "assets/index-DxCyziN7.js", "assets/index-DWyRxbbD.js", "assets/index-DV3LaK-2.js", "assets/send-DZGN9r_W.js", "assets/index-B2v-wYfj.js", "assets/index-tm6HjSPx.js", "assets/receive-BbCLkshZ.js", "assets/index-NQ0YAgGj.js", "assets/onramp-JSxt_hc1.js", "assets/index-By-shQha.js", "assets/index-CqlIdWZD.js", "assets/transactions-fITJxoch.js", "assets/index-LxNGLmUN.js", "assets/index-BnQZsxt7.js", "assets/index-2QrkSMIo.js", "assets/ui-NdWYuhVO.js", "assets/index-KwFKffKp.js", "assets/index-CJj8SuGR.js", "assets/w3m-modal-bnTNk9DQ.js"]))) => i.map(i => d[i]);
import {
    _ as Oe
} from "./pixi-vendor-CD9TR_py.js";
import {
    p as It
} from "./react-vendor-1qCqAHqt.js";
import {
    f as Mr,
    k as mr,
    A as gr,
    a as Yn,
    h as nn,
    E as Fr,
    b as Wr,
    t as Zn,
    G as Br
} from "./auth-vendor-XDJ1EvAC.js";
import {
    B as Rt,
    r as Pe,
    i as At
} from "./lit-element-bcC7X8ka.js";
import "./solana-vendor-E3c5Mf0a.js";
const jr = Symbol(),
    Xn = Object.getPrototypeOf,
    Dn = new WeakMap,
    Hr = t => t && (Dn.has(t) ? Dn.get(t) : Xn(t) === Object.prototype || Xn(t) === Array.prototype),
    $r = t => Hr(t) && t[jr] || null,
    Jn = (t, e = !0) => {
        Dn.set(t, e)
    },
    pn = {},
    Kn = t => typeof t == "object" && t !== null,
    Gr = t => Kn(t) && !Jt.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise),
    Cr = (t, e) => {
        const n = Mn.get(t);
        if ((n == null ? void 0 : n[0]) === e) return n[1];
        const r = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
        return Jn(r, !0), Mn.set(t, [e, r]), Reflect.ownKeys(t).forEach(s => {
            if (Object.getOwnPropertyDescriptor(r, s)) return;
            const a = Reflect.get(t, s),
                {
                    enumerable: o
                } = Reflect.getOwnPropertyDescriptor(t, s),
                i = {
                    value: a,
                    enumerable: o,
                    configurable: !0
                };
            if (Jt.has(a)) Jn(a, !1);
            else if (rt.has(a)) {
                const [l, d] = rt.get(a);
                i.value = Cr(l, d())
            }
            Object.defineProperty(r, s, i)
        }), Object.preventExtensions(r)
    },
    Vr = (t, e, n, r) => ({
        deleteProperty(s, a) {
            const o = Reflect.get(s, a);
            n(a);
            const i = Reflect.deleteProperty(s, a);
            return i && r(["delete", [a], o]), i
        },
        set(s, a, o, i) {
            const l = !t() && Reflect.has(s, a),
                d = Reflect.get(s, a, i);
            if (l && (Qn(d, o) || Mt.has(o) && Qn(d, Mt.get(o)))) return !0;
            n(a), Kn(o) && (o = $r(o) || o);
            const p = !rt.has(o) && Kr(o) ? ae(o) : o;
            return e(a, p), Reflect.set(s, a, p, i), r(["set", [a], o, d]), !0
        }
    }),
    rt = new WeakMap,
    Jt = new WeakSet,
    Mn = new WeakMap,
    Pt = [1, 1],
    Mt = new WeakMap;
let Qn = Object.is,
    qr = (t, e) => new Proxy(t, e),
    Kr = Gr,
    zr = Cr,
    Yr = Vr;

function ae(t = {}) {
    if (!Kn(t)) throw new Error("object required");
    const e = Mt.get(t);
    if (e) return e;
    let n = Pt[0];
    const r = new Set,
        s = (w, H = ++Pt[0]) => {
            n !== H && (n = H, r.forEach(P => P(w, H)))
        };
    let a = Pt[1];
    const o = (w = ++Pt[1]) => (a !== w && !r.size && (a = w, l.forEach(([H]) => {
            const P = H[1](w);
            P > n && (n = P)
        })), n),
        i = w => (H, P) => {
            const Z = [...H];
            Z[1] = [w, ...Z[1]], s(Z, P)
        },
        l = new Map,
        d = (w, H) => {
            const P = !Jt.has(H) && rt.get(H);
            if (P) {
                if ((pn ? "production" : void 0) !== "production" && l.has(w)) throw new Error("prop listener already exists");
                if (r.size) {
                    const Z = P[2](i(w));
                    l.set(w, [P, Z])
                } else l.set(w, [P])
            }
        },
        p = w => {
            var H;
            const P = l.get(w);
            P && (l.delete(w), (H = P[1]) == null || H.call(P))
        },
        h = w => (r.add(w), r.size === 1 && l.forEach(([P, Z], le) => {
            if ((pn ? "production" : void 0) !== "production" && Z) throw new Error("remove already exists");
            const Sn = P[2](i(le));
            l.set(le, [P, Sn])
        }), () => {
            r.delete(w), r.size === 0 && l.forEach(([P, Z], le) => {
                Z && (Z(), l.set(le, [P]))
            })
        });
    let y = !0;
    const b = Yr(() => y, d, p, s),
        j = qr(t, b);
    Mt.set(t, j);
    const F = [t, o, h];
    return rt.set(j, F), Reflect.ownKeys(t).forEach(w => {
        const H = Object.getOwnPropertyDescriptor(t, w);
        "value" in H && H.writable && (j[w] = t[w])
    }), y = !1, j
}

function fe(t, e, n) {
    const r = rt.get(t);
    (pn ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
    let s;
    const a = [],
        o = r[2];
    let i = !1;
    const d = o(p => {
        a.push(p), s || (s = Promise.resolve().then(() => {
            s = void 0, i && e(a.splice(0))
        }))
    });
    return i = !0, () => {
        i = !1, d()
    }
}

function Ft(t) {
    const e = rt.get(t);
    (pn ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [n, r] = e;
    return zr(n, r())
}

function ut(t) {
    return Jt.add(t), t
}

function Zr() {
    return {
        proxyStateMap: rt,
        refSet: Jt,
        snapCache: Mn,
        versionHolder: Pt,
        proxyCache: Mt
    }
}

function Ce(t, e, n, r) {
    let s = t[e];
    return fe(t, () => {
        const a = t[e];
        Object.is(s, a) || n(s = a)
    })
}
const {
    proxyStateMap: Xr,
    snapCache: Jr
} = Zr(), rn = t => Xr.has(t);

function Qr(t) {
    const e = [];
    let n = 0;
    const r = new Map,
        s = new WeakMap,
        a = () => {
            const d = Jr.get(i),
                p = d == null ? void 0 : d[1];
            if (p && !s.has(p)) {
                const h = new Map(r);
                s.set(p, h)
            }
        },
        o = d => s.get(d) || r,
        i = {
            data: e,
            index: n,
            epoch: 0,
            get size() {
                return rn(this) || a(), o(this).size
            },
            get(d) {
                const h = o(this).get(d);
                if (h === void 0) {
                    this.epoch;
                    return
                }
                return this.data[h]
            },
            has(d) {
                const p = o(this);
                return this.epoch, p.has(d)
            },
            set(d, p) {
                if (!rn(this)) throw new Error("Cannot perform mutations on a snapshot");
                const h = r.get(d);
                return h === void 0 ? (r.set(d, this.index), this.data[this.index++] = p) : this.data[h] = p, this.epoch++, this
            },
            delete(d) {
                if (!rn(this)) throw new Error("Cannot perform mutations on a snapshot");
                const p = r.get(d);
                return p === void 0 ? !1 : (delete this.data[p], r.delete(d), this.epoch++, !0)
            },
            clear() {
                if (!rn(this)) throw new Error("Cannot perform mutations on a snapshot");
                this.data.length = 0, this.index = 0, this.epoch++, r.clear()
            },
            forEach(d) {
                this.epoch, o(this).forEach((h, y) => {
                    d(this.data[h], y, this)
                })
            },
            * entries() {
                this.epoch;
                const d = o(this);
                for (const [p, h] of d) yield [p, this.data[h]]
            },
            * keys() {
                this.epoch;
                const d = o(this);
                for (const p of d.keys()) yield p
            },
            * values() {
                this.epoch;
                const d = o(this);
                for (const p of d.values()) yield this.data[p]
            },
            [Symbol.iterator]() {
                return this.entries()
            },
            get [Symbol.toStringTag]() {
                return "Map"
            },
            toJSON() {
                return new Map(this.entries())
            }
        },
        l = ae(i);
    return Object.defineProperties(l, {
        size: {
            enumerable: !1
        },
        index: {
            enumerable: !1
        },
        epoch: {
            enumerable: !1
        },
        data: {
            enumerable: !1
        },
        toJSON: {
            enumerable: !1
        }
    }), Object.seal(l), l
}
var er = {};
const f = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
            WALLET_CONNECT: "walletConnect",
            INJECTED: "injected",
            WALLET_STANDARD: "announced",
            COINBASE: "coinbaseWallet",
            COINBASE_SDK: "coinbaseWalletSDK",
            SAFE: "safe",
            LEDGER: "ledger",
            OKX: "okx",
            EIP6963: "eip6963",
            AUTH: "ID_AUTH"
        },
        CONNECTOR_NAMES: {
            AUTH: "Auth"
        },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: {
            PENDING_TRANSACTIONS: 99
        },
        CHAIN: {
            EVM: "eip155",
            SOLANA: "solana",
            POLKADOT: "polkadot",
            BITCOIN: "bip122"
        },
        CHAIN_NAME_MAP: {
            eip155: "EVM Networks",
            solana: "Solana",
            polkadot: "Polkadot",
            bip122: "Bitcoin",
            cosmos: "Cosmos",
            sui: "Sui",
            stacks: "Stacks"
        },
        ADAPTER_TYPES: {
            BITCOIN: "bitcoin",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5"
        },
        USDT_CONTRACT_ADDRESSES: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", "0x919C1c267BC06a7039e03fcc2eF738525769109c", "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e", "0x55d398326f99059fF775485246999027B3197955", "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],
        HTTP_STATUS_CODES: {
            SERVER_ERROR: 500,
            TOO_MANY_REQUESTS: 429,
            SERVICE_UNAVAILABLE: 503,
            FORBIDDEN: 403
        },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
        SECURE_SITE_SDK_ORIGIN: (typeof It < "u" && typeof er < "u" ? er.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
        REMOTE_FEATURES_ALERTS: {
            MULTI_WALLET_NOT_ENABLED: {
                DEFAULT: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
                },
                CONNECTIONS_HOOK: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
                },
                CONNECTION_HOOK: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
                }
            }
        }
    },
    Er = {
        caipNetworkIdToNumber(t) {
            return t ? Number(t.split(":")[1]) : void 0
        },
        parseEvmChainId(t) {
            return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t
        },
        getNetworksByNamespace(t, e) {
            return (t == null ? void 0 : t.filter(n => n.chainNamespace === e)) || []
        },
        getFirstNetworkByNamespace(t, e) {
            return this.getNetworksByNamespace(t, e)[0]
        },
        getNetworkNameByCaipNetworkId(t, e) {
            var s;
            if (!e) return;
            const n = t.find(a => a.caipNetworkId === e);
            if (n) return n.name;
            const [r] = e.split(":");
            return ((s = f.CHAIN_NAME_MAP) == null ? void 0 : s[r]) || void 0
        }
    },
    wr = ["eip155", "solana", "polkadot", "bip122", "cosmos", "sui", "stacks"],
    es = {
        bigNumber(t) {
            return t ? new Rt(t) : new Rt(0)
        },
        multiply(t, e) {
            if (t === void 0 || e === void 0) return new Rt(0);
            const n = new Rt(t),
                r = new Rt(e);
            return n.times(r)
        },
        formatNumberToLocalString(t, e = 2) {
            return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
                maximumFractionDigits: e,
                minimumFractionDigits: e
            }) : parseFloat(t).toLocaleString("en-US", {
                maximumFractionDigits: e,
                minimumFractionDigits: e
            })
        },
        parseLocalStringToNumber(t) {
            return t === void 0 ? 0 : parseFloat(t.replace(/,/gu, ""))
        }
    },
    ts = [{
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [{
            name: "_to",
            type: "address"
        }, {
            name: "_value",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bool"
        }]
    }, {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [{
            name: "_from",
            type: "address"
        }, {
            name: "_to",
            type: "address"
        }, {
            name: "_value",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bool"
        }]
    }],
    ns = [{
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [{
            name: "spender",
            type: "address"
        }, {
            name: "amount",
            type: "uint256"
        }],
        outputs: [{
            type: "bool"
        }]
    }],
    rs = [{
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [{
            name: "recipient",
            type: "address"
        }, {
            name: "amount",
            type: "uint256"
        }],
        outputs: []
    }, {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [{
            name: "sender",
            type: "address"
        }, {
            name: "recipient",
            type: "address"
        }, {
            name: "amount",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bool"
        }]
    }],
    ss = {
        getERC20Abi: t => f.USDT_CONTRACT_ADDRESSES.includes(t) ? rs : ts,
        getSwapAbi: () => ns
    },
    Te = {
        validateCaipAddress(t) {
            var e;
            if (((e = t.split(":")) == null ? void 0 : e.length) !== 3) throw new Error("Invalid CAIP Address");
            return t
        },
        parseCaipAddress(t) {
            const e = t.split(":");
            if (e.length !== 3) throw new Error(`Invalid CAIP-10 address: ${t}`);
            const [n, r, s] = e;
            if (!n || !r || !s) throw new Error(`Invalid CAIP-10 address: ${t}`);
            return {
                chainNamespace: n,
                chainId: r,
                address: s
            }
        },
        parseCaipNetworkId(t) {
            const e = t.split(":");
            if (e.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${t}`);
            const [n, r] = e;
            if (!n || !r) throw new Error(`Invalid CAIP-2 network id: ${t}`);
            return {
                chainNamespace: n,
                chainId: r
            }
        }
    },
    L = {
        WALLET_ID: "@appkit/wallet_id",
        WALLET_NAME: "@appkit/wallet_name",
        SOLANA_WALLET: "@appkit/solana_wallet",
        SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
        ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
        CONNECTED_SOCIAL: "@appkit/connected_social",
        CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
        RECENT_WALLETS: "@appkit/recent_wallets",
        DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        ACTIVE_NAMESPACE: "@appkit/active_namespace",
        CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
        CONNECTION_STATUS: "@appkit/connection_status",
        SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
        SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
        TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
        NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
        PORTFOLIO_CACHE: "@appkit/portfolio_cache",
        ENS_CACHE: "@appkit/ens_cache",
        IDENTITY_CACHE: "@appkit/identity_cache",
        PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
        CONNECTIONS: "@appkit/connections",
        DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
        HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
        TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
        RECENT_EMAILS: "@appkit/recent_emails"
    };

function bn(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`
}
const U = {
    setItem(t, e) {
        wt() && e !== void 0 && localStorage.setItem(t, e)
    },
    getItem(t) {
        if (wt()) return localStorage.getItem(t) || void 0
    },
    removeItem(t) {
        wt() && localStorage.removeItem(t)
    },
    clear() {
        wt() && localStorage.clear()
    }
};

function wt() {
    return typeof window < "u" && typeof localStorage < "u"
}

function Ye(t, e) {
    return e === "light" ? {
        "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
        "--w3m-background": "#fff"
    } : {
        "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
        "--w3m-background": "#121313"
    }
}
var tr = {};
const In = (typeof It < "u" && typeof tr < "u" ? tr.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
    _r = [{
        label: "Meld.io",
        name: "meld",
        feeRange: "1-2%",
        url: "https://meldcrypto.com",
        supportedChains: ["eip155", "solana"]
    }],
    as = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
    ee = {
        FOUR_MINUTES_MS: 24e4,
        TEN_SEC_MS: 1e4,
        FIVE_SEC_MS: 5e3,
        THREE_SEC_MS: 3e3,
        ONE_SEC_MS: 1e3,
        SECURE_SITE: In,
        SECURE_SITE_DASHBOARD: `${In}/dashboard`,
        SECURE_SITE_FAVICON: `${In}/images/favicon.png`,
        RESTRICTED_TIMEZONES: ["ASIA/SHANGHAI", "ASIA/URUMQI", "ASIA/CHONGQING", "ASIA/HARBIN", "ASIA/KASHGAR", "ASIA/MACAU", "ASIA/HONG_KONG", "ASIA/MACAO", "ASIA/BEIJING", "ASIA/HARBIN"],
        SWAP_SUGGESTED_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP"],
        SWAP_POPULAR_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP", "METAL", "DAI", "CHAMP", "WOLF", "SALE", "BAL", "BUSD", "MUST", "BTCpx", "ROUTE", "HEX", "WELT", "amDAI", "VSQ", "VISION", "AURUM", "pSP", "SNX", "VC", "LINK", "CHP", "amUSDT", "SPHERE", "FOX", "GIDDY", "GFC", "OMEN", "OX_OLD", "DE", "WNT"],
        BALANCE_SUPPORTED_CHAINS: [f.CHAIN.EVM, f.CHAIN.SOLANA],
        SWAP_SUPPORTED_NETWORKS: ["eip155:1", "eip155:42161", "eip155:10", "eip155:324", "eip155:8453", "eip155:56", "eip155:137", "eip155:100", "eip155:43114", "eip155:250", "eip155:8217", "eip155:1313161554"],
        NAMES_SUPPORTED_CHAIN_NAMESPACES: [f.CHAIN.EVM],
        ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [f.CHAIN.EVM, f.CHAIN.SOLANA],
        ACTIVITY_ENABLED_CHAIN_NAMESPACES: [f.CHAIN.EVM],
        NATIVE_TOKEN_ADDRESS: {
            eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            solana: "So11111111111111111111111111111111111111111",
            polkadot: "0x",
            bip122: "0x",
            cosmos: "0x",
            sui: "0x",
            stacks: "0x"
        },
        CONVERT_SLIPPAGE_TOLERANCE: 1,
        CONNECT_LABELS: {
            MOBILE: "Open and continue in the wallet app",
            WEB: "Open and continue in the wallet app"
        },
        SEND_SUPPORTED_NAMESPACES: [f.CHAIN.EVM, f.CHAIN.SOLANA],
        DEFAULT_REMOTE_FEATURES: {
            swaps: ["1inch"],
            onramp: ["meld"],
            email: !0,
            socials: ["google", "x", "discord", "farcaster", "github", "apple", "facebook"],
            activity: !0,
            reownBranding: !0,
            multiWallet: !1,
            emailCapture: !1
        },
        DEFAULT_REMOTE_FEATURES_DISABLED: {
            email: !1,
            socials: !1,
            swaps: !1,
            onramp: !1,
            activity: !1,
            reownBranding: !1,
            emailCapture: !1
        },
        DEFAULT_FEATURES: {
            receive: !0,
            send: !0,
            emailShowWallets: !0,
            connectorTypeOrder: ["walletConnect", "recent", "injected", "featured", "custom", "external", "recommended"],
            analytics: !0,
            allWallets: !0,
            legalCheckbox: !1,
            smartSessions: !1,
            collapseWallets: !1,
            walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
            connectMethodsOrder: void 0,
            pay: !1
        },
        DEFAULT_SOCIALS: ["google", "x", "farcaster", "discord", "apple", "github", "facebook"],
        DEFAULT_ACCOUNT_TYPES: {
            bip122: "payment",
            eip155: "smartAccount",
            polkadot: "eoa",
            solana: "eoa"
        },
        ADAPTER_TYPES: {
            UNIVERSAL: "universal",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5",
            BITCOIN: "bitcoin"
        },
        SIWX_DEFAULTS: {
            signOutOnDisconnect: !0
        }
    },
    g = {
        cacheExpiry: {
            portfolio: 3e4,
            nativeBalance: 3e4,
            ens: 3e5,
            identity: 3e5,
            transactionsHistory: 15e3,
            tokenPrice: 15e3
        },
        isCacheExpired(t, e) {
            return Date.now() - t > e
        },
        getActiveNetworkProps() {
            const t = g.getActiveNamespace(),
                e = g.getActiveCaipNetworkId(),
                n = e ? e.split(":")[1] : void 0,
                r = n ? isNaN(Number(n)) ? n : Number(n) : void 0;
            return {
                namespace: t,
                caipNetworkId: e,
                chainId: r
            }
        },
        setWalletConnectDeepLink({
            name: t,
            href: e
        }) {
            try {
                U.setItem(L.DEEPLINK_CHOICE, JSON.stringify({
                    href: e,
                    name: t
                }))
            } catch {
                console.info("Unable to set WalletConnect deep link")
            }
        },
        getWalletConnectDeepLink() {
            try {
                const t = U.getItem(L.DEEPLINK_CHOICE);
                if (t) return JSON.parse(t)
            } catch {
                console.info("Unable to get WalletConnect deep link")
            }
        },
        deleteWalletConnectDeepLink() {
            try {
                U.removeItem(L.DEEPLINK_CHOICE)
            } catch {
                console.info("Unable to delete WalletConnect deep link")
            }
        },
        setActiveNamespace(t) {
            try {
                U.setItem(L.ACTIVE_NAMESPACE, t)
            } catch {
                console.info("Unable to set active namespace")
            }
        },
        setActiveCaipNetworkId(t) {
            try {
                U.setItem(L.ACTIVE_CAIP_NETWORK_ID, t), g.setActiveNamespace(t.split(":")[0])
            } catch {
                console.info("Unable to set active caip network id")
            }
        },
        getActiveCaipNetworkId() {
            try {
                return U.getItem(L.ACTIVE_CAIP_NETWORK_ID)
            } catch {
                console.info("Unable to get active caip network id");
                return
            }
        },
        deleteActiveCaipNetworkId() {
            try {
                U.removeItem(L.ACTIVE_CAIP_NETWORK_ID)
            } catch {
                console.info("Unable to delete active caip network id")
            }
        },
        deleteConnectedConnectorId(t) {
            try {
                const e = bn(t);
                U.removeItem(e)
            } catch {
                console.info("Unable to delete connected connector id")
            }
        },
        setAppKitRecent(t) {
            try {
                const e = g.getRecentWallets();
                e.find(r => r.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), U.setItem(L.RECENT_WALLETS, JSON.stringify(e)))
            } catch {
                console.info("Unable to set AppKit recent")
            }
        },
        getRecentWallets() {
            try {
                const t = U.getItem(L.RECENT_WALLETS);
                return t ? JSON.parse(t) : []
            } catch {
                console.info("Unable to get AppKit recent")
            }
            return []
        },
        setConnectedConnectorId(t, e) {
            try {
                const n = bn(t);
                U.setItem(n, e)
            } catch {
                console.info("Unable to set Connected Connector Id")
            }
        },
        getActiveNamespace() {
            try {
                return U.getItem(L.ACTIVE_NAMESPACE)
            } catch {
                console.info("Unable to get active namespace")
            }
        },
        getConnectedConnectorId(t) {
            if (t) try {
                const e = bn(t);
                return U.getItem(e)
            } catch {
                console.info("Unable to get connected connector id in namespace", t)
            }
        },
        setConnectedSocialProvider(t) {
            try {
                U.setItem(L.CONNECTED_SOCIAL, t)
            } catch {
                console.info("Unable to set connected social provider")
            }
        },
        getConnectedSocialProvider() {
            try {
                return U.getItem(L.CONNECTED_SOCIAL)
            } catch {
                console.info("Unable to get connected social provider")
            }
        },
        deleteConnectedSocialProvider() {
            try {
                U.removeItem(L.CONNECTED_SOCIAL)
            } catch {
                console.info("Unable to delete connected social provider")
            }
        },
        getConnectedSocialUsername() {
            try {
                return U.getItem(L.CONNECTED_SOCIAL_USERNAME)
            } catch {
                console.info("Unable to get connected social username")
            }
        },
        getStoredActiveCaipNetworkId() {
            var n;
            const t = U.getItem(L.ACTIVE_CAIP_NETWORK_ID);
            return (n = t == null ? void 0 : t.split(":")) == null ? void 0 : n[1]
        },
        setConnectionStatus(t) {
            try {
                U.setItem(L.CONNECTION_STATUS, t)
            } catch {
                console.info("Unable to set connection status")
            }
        },
        getConnectionStatus() {
            try {
                return U.getItem(L.CONNECTION_STATUS)
            } catch {
                return
            }
        },
        getConnectedNamespaces() {
            try {
                const t = U.getItem(L.CONNECTED_NAMESPACES);
                return t != null && t.length ? t.split(",") : []
            } catch {
                return []
            }
        },
        setConnectedNamespaces(t) {
            try {
                const e = Array.from(new Set(t));
                U.setItem(L.CONNECTED_NAMESPACES, e.join(","))
            } catch {
                console.info("Unable to set namespaces in storage")
            }
        },
        addConnectedNamespace(t) {
            try {
                const e = g.getConnectedNamespaces();
                e.includes(t) || (e.push(t), g.setConnectedNamespaces(e))
            } catch {
                console.info("Unable to add connected namespace")
            }
        },
        removeConnectedNamespace(t) {
            try {
                const e = g.getConnectedNamespaces(),
                    n = e.indexOf(t);
                n > -1 && (e.splice(n, 1), g.setConnectedNamespaces(e))
            } catch {
                console.info("Unable to remove connected namespace")
            }
        },
        getTelegramSocialProvider() {
            try {
                return U.getItem(L.TELEGRAM_SOCIAL_PROVIDER)
            } catch {
                return console.info("Unable to get telegram social provider"), null
            }
        },
        setTelegramSocialProvider(t) {
            try {
                U.setItem(L.TELEGRAM_SOCIAL_PROVIDER, t)
            } catch {
                console.info("Unable to set telegram social provider")
            }
        },
        removeTelegramSocialProvider() {
            try {
                U.removeItem(L.TELEGRAM_SOCIAL_PROVIDER)
            } catch {
                console.info("Unable to remove telegram social provider")
            }
        },
        getBalanceCache() {
            let t = {};
            try {
                const e = U.getItem(L.PORTFOLIO_CACHE);
                t = e ? JSON.parse(e) : {}
            } catch {
                console.info("Unable to get balance cache")
            }
            return t
        },
        removeAddressFromBalanceCache(t) {
            try {
                const e = g.getBalanceCache();
                U.setItem(L.PORTFOLIO_CACHE, JSON.stringify({ ...e,
                    [t]: void 0
                }))
            } catch {
                console.info("Unable to remove address from balance cache", t)
            }
        },
        getBalanceCacheForCaipAddress(t) {
            try {
                const n = g.getBalanceCache()[t];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.portfolio)) return n.balance;
                g.removeAddressFromBalanceCache(t)
            } catch {
                console.info("Unable to get balance cache for address", t)
            }
        },
        updateBalanceCache(t) {
            try {
                const e = g.getBalanceCache();
                e[t.caipAddress] = t, U.setItem(L.PORTFOLIO_CACHE, JSON.stringify(e))
            } catch {
                console.info("Unable to update balance cache", t)
            }
        },
        getNativeBalanceCache() {
            let t = {};
            try {
                const e = U.getItem(L.NATIVE_BALANCE_CACHE);
                t = e ? JSON.parse(e) : {}
            } catch {
                console.info("Unable to get balance cache")
            }
            return t
        },
        removeAddressFromNativeBalanceCache(t) {
            try {
                const e = g.getBalanceCache();
                U.setItem(L.NATIVE_BALANCE_CACHE, JSON.stringify({ ...e,
                    [t]: void 0
                }))
            } catch {
                console.info("Unable to remove address from balance cache", t)
            }
        },
        getNativeBalanceCacheForCaipAddress(t) {
            try {
                const n = g.getNativeBalanceCache()[t];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.nativeBalance)) return n;
                console.info("Discarding cache for address", t), g.removeAddressFromBalanceCache(t)
            } catch {
                console.info("Unable to get balance cache for address", t)
            }
        },
        updateNativeBalanceCache(t) {
            try {
                const e = g.getNativeBalanceCache();
                e[t.caipAddress] = t, U.setItem(L.NATIVE_BALANCE_CACHE, JSON.stringify(e))
            } catch {
                console.info("Unable to update balance cache", t)
            }
        },
        getEnsCache() {
            let t = {};
            try {
                const e = U.getItem(L.ENS_CACHE);
                t = e ? JSON.parse(e) : {}
            } catch {
                console.info("Unable to get ens name cache")
            }
            return t
        },
        getEnsFromCacheForAddress(t) {
            try {
                const n = g.getEnsCache()[t];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.ens)) return n.ens;
                g.removeEnsFromCache(t)
            } catch {
                console.info("Unable to get ens name from cache", t)
            }
        },
        updateEnsCache(t) {
            try {
                const e = g.getEnsCache();
                e[t.address] = t, U.setItem(L.ENS_CACHE, JSON.stringify(e))
            } catch {
                console.info("Unable to update ens name cache", t)
            }
        },
        removeEnsFromCache(t) {
            try {
                const e = g.getEnsCache();
                U.setItem(L.ENS_CACHE, JSON.stringify({ ...e,
                    [t]: void 0
                }))
            } catch {
                console.info("Unable to remove ens name from cache", t)
            }
        },
        getIdentityCache() {
            let t = {};
            try {
                const e = U.getItem(L.IDENTITY_CACHE);
                t = e ? JSON.parse(e) : {}
            } catch {
                console.info("Unable to get identity cache")
            }
            return t
        },
        getIdentityFromCacheForAddress(t) {
            try {
                const n = g.getIdentityCache()[t];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.identity)) return n.identity;
                g.removeIdentityFromCache(t)
            } catch {
                console.info("Unable to get identity from cache", t)
            }
        },
        updateIdentityCache(t) {
            try {
                const e = g.getIdentityCache();
                e[t.address] = {
                    identity: t.identity,
                    timestamp: t.timestamp
                }, U.setItem(L.IDENTITY_CACHE, JSON.stringify(e))
            } catch {
                console.info("Unable to update identity cache", t)
            }
        },
        removeIdentityFromCache(t) {
            try {
                const e = g.getIdentityCache();
                U.setItem(L.IDENTITY_CACHE, JSON.stringify({ ...e,
                    [t]: void 0
                }))
            } catch {
                console.info("Unable to remove identity from cache", t)
            }
        },
        clearAddressCache() {
            try {
                U.removeItem(L.PORTFOLIO_CACHE), U.removeItem(L.NATIVE_BALANCE_CACHE), U.removeItem(L.ENS_CACHE), U.removeItem(L.IDENTITY_CACHE), U.removeItem(L.HISTORY_TRANSACTIONS_CACHE)
            } catch {
                console.info("Unable to clear address cache")
            }
        },
        setPreferredAccountTypes(t) {
            try {
                U.setItem(L.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t))
            } catch {
                console.info("Unable to set preferred account types", t)
            }
        },
        getPreferredAccountTypes() {
            try {
                const t = U.getItem(L.PREFERRED_ACCOUNT_TYPES);
                return t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get preferred account types")
            }
            return {}
        },
        setConnections(t, e) {
            try {
                const n = g.getConnections(),
                    r = n[e] ? ? [],
                    s = new Map;
                for (const o of r) s.set(o.connectorId, { ...o
                });
                for (const o of t) {
                    const i = s.get(o.connectorId),
                        l = o.connectorId === f.CONNECTOR_ID.AUTH;
                    if (i && !l) {
                        const d = new Set(i.accounts.map(h => h.address.toLowerCase())),
                            p = o.accounts.filter(h => !d.has(h.address.toLowerCase()));
                        i.accounts.push(...p)
                    } else s.set(o.connectorId, { ...o
                    })
                }
                const a = { ...n,
                    [e]: Array.from(s.values())
                };
                U.setItem(L.CONNECTIONS, JSON.stringify(a))
            } catch (n) {
                console.error("Unable to sync connections to storage", n)
            }
        },
        getConnections() {
            try {
                const t = U.getItem(L.CONNECTIONS);
                return t ? JSON.parse(t) : {}
            } catch (t) {
                return console.error("Unable to get connections from storage", t), {}
            }
        },
        deleteAddressFromConnection({
            connectorId: t,
            address: e,
            namespace: n
        }) {
            try {
                const r = g.getConnections(),
                    s = r[n] ? ? [],
                    a = new Map(s.map(i => [i.connectorId, i])),
                    o = a.get(t);
                o && (o.accounts.filter(l => l.address.toLowerCase() !== e.toLowerCase()).length === 0 ? a.delete(t) : a.set(t, { ...o,
                    accounts: o.accounts.filter(l => l.address.toLowerCase() !== e.toLowerCase())
                })), U.setItem(L.CONNECTIONS, JSON.stringify({ ...r,
                    [n]: Array.from(a.values())
                }))
            } catch {
                console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${n}"`)
            }
        },
        getDisconnectedConnectorIds() {
            try {
                const t = U.getItem(L.DISCONNECTED_CONNECTOR_IDS);
                return t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get disconnected connector ids")
            }
            return {}
        },
        addDisconnectedConnectorId(t, e) {
            try {
                const n = g.getDisconnectedConnectorIds(),
                    r = n[e] ? ? [];
                r.push(t), U.setItem(L.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({ ...n,
                    [e]: Array.from(new Set(r))
                }))
            } catch {
                console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`)
            }
        },
        removeDisconnectedConnectorId(t, e) {
            try {
                const n = g.getDisconnectedConnectorIds();
                let r = n[e] ? ? [];
                r = r.filter(s => s.toLowerCase() !== t.toLowerCase()), U.setItem(L.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({ ...n,
                    [e]: Array.from(new Set(r))
                }))
            } catch {
                console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`)
            }
        },
        isConnectorDisconnected(t, e) {
            try {
                return (g.getDisconnectedConnectorIds()[e] ? ? []).some(s => s.toLowerCase() === t.toLowerCase())
            } catch {
                console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`)
            }
            return !1
        },
        getTransactionsCache() {
            try {
                const t = U.getItem(L.HISTORY_TRANSACTIONS_CACHE);
                return t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get transactions cache")
            }
            return {}
        },
        getTransactionsCacheForAddress({
            address: t,
            chainId: e = ""
        }) {
            var n;
            try {
                const s = (n = g.getTransactionsCache()[t]) == null ? void 0 : n[e];
                if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.transactionsHistory)) return s.transactions;
                g.removeTransactionsCache({
                    address: t,
                    chainId: e
                })
            } catch {
                console.info("Unable to get transactions cache")
            }
        },
        updateTransactionsCache({
            address: t,
            chainId: e = "",
            timestamp: n,
            transactions: r
        }) {
            try {
                const s = g.getTransactionsCache();
                s[t] = { ...s[t],
                    [e]: {
                        timestamp: n,
                        transactions: r
                    }
                }, U.setItem(L.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(s))
            } catch {
                console.info("Unable to update transactions cache", {
                    address: t,
                    chainId: e,
                    timestamp: n,
                    transactions: r
                })
            }
        },
        removeTransactionsCache({
            address: t,
            chainId: e
        }) {
            try {
                const n = g.getTransactionsCache(),
                    r = (n == null ? void 0 : n[t]) || {},
                    {
                        [e]: s,
                        ...a
                    } = r;
                U.setItem(L.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({ ...n,
                    [t]: a
                }))
            } catch {
                console.info("Unable to remove transactions cache", {
                    address: t,
                    chainId: e
                })
            }
        },
        getTokenPriceCache() {
            try {
                const t = U.getItem(L.TOKEN_PRICE_CACHE);
                return t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get token price cache")
            }
            return {}
        },
        getTokenPriceCacheForAddresses(t) {
            try {
                const n = g.getTokenPriceCache()[t.join(",")];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.tokenPrice)) return n.tokenPrice;
                g.removeTokenPriceCache(t)
            } catch {
                console.info("Unable to get token price cache for addresses", t)
            }
        },
        updateTokenPriceCache(t) {
            try {
                const e = g.getTokenPriceCache();
                e[t.addresses.join(",")] = {
                    timestamp: t.timestamp,
                    tokenPrice: t.tokenPrice
                }, U.setItem(L.TOKEN_PRICE_CACHE, JSON.stringify(e))
            } catch {
                console.info("Unable to update token price cache", t)
            }
        },
        removeTokenPriceCache(t) {
            try {
                const e = g.getTokenPriceCache();
                U.setItem(L.TOKEN_PRICE_CACHE, JSON.stringify({ ...e,
                    [t.join(",")]: void 0
                }))
            } catch {
                console.info("Unable to remove token price cache", t)
            }
        }
    },
    O = {
        isMobile() {
            var t;
            return this.isClient() ? !!(window != null && window.matchMedia && typeof window.matchMedia == "function" && ((t = window.matchMedia("(pointer:coarse)")) != null && t.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1
        },
        checkCaipNetwork(t, e = "") {
            return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())
        },
        isAndroid() {
            if (!this.isMobile()) return !1;
            const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
            return O.isMobile() && t.includes("android")
        },
        isIos() {
            if (!this.isMobile()) return !1;
            const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
            return t.includes("iphone") || t.includes("ipad")
        },
        isSafari() {
            return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : !1
        },
        isClient() {
            return typeof window < "u"
        },
        isPairingExpired(t) {
            return t ? t - Date.now() <= ee.TEN_SEC_MS : !0
        },
        isAllowedRetry(t, e = ee.ONE_SEC_MS) {
            return Date.now() - t >= e
        },
        copyToClopboard(t) {
            navigator.clipboard.writeText(t)
        },
        isIframe() {
            try {
                return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top)
            } catch {
                return !1
            }
        },
        isSafeApp() {
            var t, e;
            if (O.isClient() && window.self !== window.top) try {
                const n = (e = (t = window == null ? void 0 : window.location) == null ? void 0 : t.ancestorOrigins) == null ? void 0 : e[0],
                    r = "https://app.safe.global";
                if (n) {
                    const s = new URL(n),
                        a = new URL(r);
                    return s.hostname === a.hostname
                }
            } catch {
                return !1
            }
            return !1
        },
        getPairingExpiry() {
            return Date.now() + ee.FOUR_MINUTES_MS
        },
        getNetworkId(t) {
            return t == null ? void 0 : t.split(":")[1]
        },
        getPlainAddress(t) {
            return t == null ? void 0 : t.split(":")[2]
        },
        async wait(t) {
            return new Promise(e => {
                setTimeout(e, t)
            })
        },
        debounce(t, e = 500) {
            let n;
            return (...r) => {
                function s() {
                    t(...r)
                }
                n && clearTimeout(n), n = setTimeout(s, e)
            }
        },
        isHttpUrl(t) {
            return t.startsWith("http://") || t.startsWith("https://")
        },
        formatNativeUrl(t, e, n = null) {
            if (O.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
            let r = t,
                s = n;
            r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), s && !(s != null && s.endsWith("/")) && (s = `${s}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
            const a = encodeURIComponent(e);
            return {
                redirect: `${r}wc?uri=${a}`,
                redirectUniversalLink: s ? `${s}wc?uri=${a}` : void 0,
                href: r
            }
        },
        formatUniversalUrl(t, e) {
            if (!O.isHttpUrl(t)) return this.formatNativeUrl(t, e);
            let n = t;
            n.endsWith("/") || (n = `${n}/`);
            const r = encodeURIComponent(e);
            return {
                redirect: `${n}wc?uri=${r}`,
                href: n
            }
        },
        getOpenTargetForPlatform(t) {
            return t === "popupWindow" ? t : this.isTelegram() ? g.getTelegramSocialProvider() ? "_top" : "_blank" : t
        },
        openHref(t, e, n) {
            window == null || window.open(t, this.getOpenTargetForPlatform(e), n || "noreferrer noopener")
        },
        returnOpenHref(t, e, n) {
            return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), n || "noreferrer noopener")
        },
        isTelegram() {
            return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
        },
        isPWA() {
            var n, r;
            if (typeof window > "u") return !1;
            const t = window != null && window.matchMedia && typeof window.matchMedia == "function" ? (n = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : n.matches : !1,
                e = (r = window == null ? void 0 : window.navigator) == null ? void 0 : r.standalone;
            return !!(t || e)
        },
        async preloadImage(t) {
            const e = new Promise((n, r) => {
                const s = new Image;
                s.onload = n, s.onerror = r, s.crossOrigin = "anonymous", s.src = t
            });
            return Promise.race([e, O.wait(2e3)])
        },
        formatBalance(t, e) {
            let n = "0.000";
            if (typeof t == "string") {
                const r = Number(t);
                if (r) {
                    const s = Math.floor(r * 1e3) / 1e3;
                    s && (n = s.toString())
                }
            }
            return `${n}${e?` ${e}`:""}`
        },
        formatBalance2(t, e) {
            var r;
            let n;
            if (t === "0") n = "0";
            else if (typeof t == "string") {
                const s = Number(t);
                s && (n = (r = s.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : r[0])
            }
            return {
                value: n ? ? "0",
                rest: n === "0" ? "000" : "",
                symbol: e
            }
        },
        getApiUrl() {
            return f.W3M_API_URL
        },
        getBlockchainApiUrl() {
            return f.BLOCKCHAIN_API_RPC_URL
        },
        getAnalyticsUrl() {
            return f.PULSE_API_URL
        },
        getUUID() {
            return crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
                const e = Math.random() * 16 | 0;
                return (t === "x" ? e : e & 3 | 8).toString(16)
            })
        },
        parseError(t) {
            var e, n;
            return typeof t == "string" ? t : typeof((n = (e = t == null ? void 0 : t.issues) == null ? void 0 : e[0]) == null ? void 0 : n.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error"
        },
        sortRequestedNetworks(t, e = []) {
            const n = {};
            return e && t && (t.forEach((r, s) => {
                n[r] = s
            }), e.sort((r, s) => {
                const a = n[r.id],
                    o = n[s.id];
                return a !== void 0 && o !== void 0 ? a - o : a !== void 0 ? -1 : o !== void 0 ? 1 : 0
            })), e
        },
        calculateBalance(t) {
            let e = 0;
            for (const n of t) e += n.value ? ? 0;
            return e
        },
        formatTokenBalance(t) {
            const e = t.toFixed(2),
                [n, r] = e.split(".");
            return {
                dollars: n,
                pennies: r
            }
        },
        isAddress(t, e = "eip155") {
            switch (e) {
                case "eip155":
                    if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
                        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t)) return !0
                    } else return !1;
                    return !1;
                case "solana":
                    return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
                default:
                    return !1
            }
        },
        uniqueBy(t, e) {
            const n = new Set;
            return t.filter(r => {
                const s = r[e];
                return n.has(s) ? !1 : (n.add(s), !0)
            })
        },
        generateSdkVersion(t, e, n) {
            const s = t.length === 0 ? ee.ADAPTER_TYPES.UNIVERSAL : t.map(a => a.adapterType).join(",");
            return `${e}-${s}-${n}`
        },
        createAccount(t, e, n, r, s) {
            return {
                namespace: t,
                address: e,
                type: n,
                publicKey: r,
                path: s
            }
        },
        isCaipAddress(t) {
            if (typeof t != "string") return !1;
            const e = t.split(":"),
                n = e[0];
            return e.filter(Boolean).length === 3 && n in f.CHAIN_NAME_MAP
        },
        getAccount(t) {
            return t ? typeof t == "string" ? {
                address: t,
                chainId: void 0
            } : {
                address: t.address,
                chainId: t.chainId
            } : {
                address: void 0,
                chainId: void 0
            }
        },
        isMac() {
            const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
            return t.includes("macintosh") && !t.includes("safari")
        },
        formatTelegramSocialLoginUrl(t) {
            const e = `--${encodeURIComponent(window==null?void 0:window.location.href)}`,
                n = "state=";
            if (new URL(t).host === "auth.magic.link") {
                const s = "provider_authorization_url=",
                    a = t.substring(t.indexOf(s) + s.length),
                    o = this.injectIntoUrl(decodeURIComponent(a), n, e);
                return t.replace(a, encodeURIComponent(o))
            }
            return this.injectIntoUrl(t, n, e)
        },
        injectIntoUrl(t, e, n) {
            const r = t.indexOf(e);
            if (r === -1) throw new Error(`${e} parameter not found in the URL: ${t}`);
            const s = t.indexOf("&", r),
                a = e.length,
                o = s !== -1 ? s : t.length,
                i = t.substring(0, r + a),
                l = t.substring(r + a, o),
                d = t.substring(s),
                p = l + n;
            return i + p + d
        }
    };
async function Ot(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
        cause: e
    });
    return e
}
class Qt {
    constructor({
        baseUrl: e,
        clientId: n
    }) {
        this.baseUrl = e, this.clientId = n
    }
    async get({
        headers: e,
        signal: n,
        cache: r,
        ...s
    }) {
        const a = this.createUrl(s);
        return (await Ot(a, {
            method: "GET",
            headers: e,
            signal: n,
            cache: r
        })).json()
    }
    async getBlob({
        headers: e,
        signal: n,
        ...r
    }) {
        const s = this.createUrl(r);
        return (await Ot(s, {
            method: "GET",
            headers: e,
            signal: n
        })).blob()
    }
    async post({
        body: e,
        headers: n,
        signal: r,
        ...s
    }) {
        const a = this.createUrl(s);
        return (await Ot(a, {
            method: "POST",
            headers: n,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    async put({
        body: e,
        headers: n,
        signal: r,
        ...s
    }) {
        const a = this.createUrl(s);
        return (await Ot(a, {
            method: "PUT",
            headers: n,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    async delete({
        body: e,
        headers: n,
        signal: r,
        ...s
    }) {
        const a = this.createUrl(s);
        return (await Ot(a, {
            method: "DELETE",
            headers: n,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    createUrl({
        path: e,
        params: n
    }) {
        const r = new URL(e, this.baseUrl);
        return n && Object.entries(n).forEach(([s, a]) => {
            a && r.searchParams.append(s, a)
        }), this.clientId && r.searchParams.append("clientId", this.clientId), r
    }
}
const os = {
        getFeatureValue(t, e) {
            const n = e == null ? void 0 : e[t];
            return n === void 0 ? ee.DEFAULT_FEATURES[t] : n
        },
        filterSocialsByPlatform(t) {
            if (!t || !t.length) return t;
            if (O.isTelegram()) {
                if (O.isIos()) return t.filter(e => e !== "google");
                if (O.isMac()) return t.filter(e => e !== "x");
                if (O.isAndroid()) return t.filter(e => !["facebook", "x"].includes(e))
            }
            return t
        }
    },
    k = ae({
        features: ee.DEFAULT_FEATURES,
        projectId: "",
        sdkType: "appkit",
        sdkVersion: "html-wagmi-undefined",
        defaultAccountTypes: ee.DEFAULT_ACCOUNT_TYPES,
        enableNetworkSwitch: !0,
        experimental_preferUniversalLinks: !1,
        remoteFeatures: {}
    }),
    m = {
        state: k,
        subscribeKey(t, e) {
            return Ce(k, t, e)
        },
        setOptions(t) {
            Object.assign(k, t)
        },
        setRemoteFeatures(t) {
            var n, r;
            if (!t) return;
            const e = { ...k.remoteFeatures,
                ...t
            };
            k.remoteFeatures = e, (n = k.remoteFeatures) != null && n.socials && (k.remoteFeatures.socials = os.filterSocialsByPlatform(k.remoteFeatures.socials)), (r = k.features) != null && r.pay && (k.remoteFeatures.email = !1, k.remoteFeatures.socials = !1)
        },
        setFeatures(t) {
            var n;
            if (!t) return;
            k.features || (k.features = ee.DEFAULT_FEATURES);
            const e = { ...k.features,
                ...t
            };
            k.features = e, (n = k.features) != null && n.pay && k.remoteFeatures && (k.remoteFeatures.email = !1, k.remoteFeatures.socials = !1)
        },
        setProjectId(t) {
            k.projectId = t
        },
        setCustomRpcUrls(t) {
            k.customRpcUrls = t
        },
        setAllWallets(t) {
            k.allWallets = t
        },
        setIncludeWalletIds(t) {
            k.includeWalletIds = t
        },
        setExcludeWalletIds(t) {
            k.excludeWalletIds = t
        },
        setFeaturedWalletIds(t) {
            k.featuredWalletIds = t
        },
        setTokens(t) {
            k.tokens = t
        },
        setTermsConditionsUrl(t) {
            k.termsConditionsUrl = t
        },
        setPrivacyPolicyUrl(t) {
            k.privacyPolicyUrl = t
        },
        setCustomWallets(t) {
            k.customWallets = t
        },
        setIsSiweEnabled(t) {
            k.isSiweEnabled = t
        },
        setIsUniversalProvider(t) {
            k.isUniversalProvider = t
        },
        setSdkVersion(t) {
            k.sdkVersion = t
        },
        setMetadata(t) {
            k.metadata = t
        },
        setDisableAppend(t) {
            k.disableAppend = t
        },
        setEIP6963Enabled(t) {
            k.enableEIP6963 = t
        },
        setDebug(t) {
            k.debug = t
        },
        setEnableWalletConnect(t) {
            k.enableWalletConnect = t
        },
        setEnableWalletGuide(t) {
            k.enableWalletGuide = t
        },
        setEnableAuthLogger(t) {
            k.enableAuthLogger = t
        },
        setEnableWallets(t) {
            k.enableWallets = t
        },
        setPreferUniversalLinks(t) {
            k.experimental_preferUniversalLinks = t
        },
        setSIWX(t) {
            if (t)
                for (const [e, n] of Object.entries(ee.SIWX_DEFAULTS)) t[e] ? ? (t[e] = n);
            k.siwx = t
        },
        setConnectMethodsOrder(t) {
            k.features = { ...k.features,
                connectMethodsOrder: t
            }
        },
        setWalletFeaturesOrder(t) {
            k.features = { ...k.features,
                walletFeaturesOrder: t
            }
        },
        setSocialsOrder(t) {
            k.remoteFeatures = { ...k.remoteFeatures,
                socials: t
            }
        },
        setCollapseWallets(t) {
            k.features = { ...k.features,
                collapseWallets: t
            }
        },
        setEnableEmbedded(t) {
            k.enableEmbedded = t
        },
        setAllowUnsupportedChain(t) {
            k.allowUnsupportedChain = t
        },
        setManualWCControl(t) {
            k.manualWCControl = t
        },
        setEnableNetworkSwitch(t) {
            k.enableNetworkSwitch = t
        },
        setEnableReconnect(t) {
            k.enableReconnect = t
        },
        setDefaultAccountTypes(t = {}) {
            Object.entries(t).forEach(([e, n]) => {
                n && (k.defaultAccountTypes[e] = n)
            })
        },
        setUniversalProviderConfigOverride(t) {
            k.universalProviderConfigOverride = t
        },
        getUniversalProviderConfigOverride() {
            return k.universalProviderConfigOverride
        },
        getSnapshot() {
            return Ft(k)
        }
    },
    is = Object.freeze({
        enabled: !0,
        events: []
    }),
    cs = new Qt({
        baseUrl: O.getAnalyticsUrl(),
        clientId: null
    }),
    ls = 5,
    ds = 60 * 1e3,
    Je = ae({ ...is
    }),
    us = {
        state: Je,
        subscribeKey(t, e) {
            return Ce(Je, t, e)
        },
        async sendError(t, e) {
            if (!Je.enabled) return;
            const n = Date.now();
            if (Je.events.filter(a => {
                    const o = new Date(a.properties.timestamp || "").getTime();
                    return n - o < ds
                }).length >= ls) return;
            const s = {
                type: "error",
                event: e,
                properties: {
                    errorType: t.name,
                    errorMessage: t.message,
                    stackTrace: t.stack,
                    timestamp: new Date().toISOString()
                }
            };
            Je.events.push(s);
            try {
                if (typeof window > "u") return;
                const {
                    projectId: a,
                    sdkType: o,
                    sdkVersion: i
                } = m.state;
                await cs.post({
                    path: "/e",
                    params: {
                        projectId: a,
                        st: o,
                        sv: i || "html-wagmi-4.2.2"
                    },
                    body: {
                        eventId: O.getUUID(),
                        url: window.location.href,
                        domain: window.location.hostname,
                        timestamp: new Date().toISOString(),
                        props: {
                            type: "error",
                            event: e,
                            errorType: t.name,
                            errorMessage: t.message,
                            stackTrace: t.stack
                        }
                    }
                })
            } catch {}
        },
        enable() {
            Je.enabled = !0
        },
        disable() {
            Je.enabled = !1
        },
        clearEvents() {
            Je.events = []
        }
    };
class vt extends Error {
    constructor(e, n, r) {
        super(e), this.name = "AppKitError", this.category = n, this.originalError = r, Object.setPrototypeOf(this, vt.prototype);
        let s = !1;
        if (r instanceof Error && typeof r.stack == "string" && r.stack) {
            const a = r.stack,
                o = a.indexOf(`
`);
            if (o > -1) {
                const i = a.substring(o + 1);
                this.stack = `${this.name}: ${this.message}
${i}`, s = !0
            }
        }
        s || (Error.captureStackTrace ? Error.captureStackTrace(this, vt) : this.stack || (this.stack = `${this.name}: ${this.message}`))
    }
}

function nr(t, e) {
    const n = t instanceof vt ? t : new vt(t instanceof Error ? t.message : String(t), e, t);
    throw us.sendError(n, n.category), n
}

function Re(t, e = "INTERNAL_SDK_ERROR") {
    const n = {};
    return Object.keys(t).forEach(r => {
        const s = t[r];
        if (typeof s == "function") {
            let a = s;
            s.constructor.name === "AsyncFunction" ? a = async (...o) => {
                try {
                    return await s(...o)
                } catch (i) {
                    return nr(i, e)
                }
            } : a = (...o) => {
                try {
                    return s(...o)
                } catch (i) {
                    return nr(i, e)
                }
            }, n[r] = a
        } else n[r] = s
    }), n
}
var Tt = {};
const ps = "https://secure.walletconnect.org/sdk",
    hs = (typeof It < "u" && typeof Tt < "u" ? Tt.NEXT_PUBLIC_SECURE_SITE_SDK_URL : void 0) || ps,
    fs = (typeof It < "u" && typeof Tt < "u" ? Tt.NEXT_PUBLIC_DEFAULT_LOG_LEVEL : void 0) || "error",
    ms = (typeof It < "u" && typeof Tt < "u" ? Tt.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION : void 0) || "4",
    I = {
        APP_EVENT_KEY: "@w3m-app/",
        FRAME_EVENT_KEY: "@w3m-frame/",
        RPC_METHOD_KEY: "RPC_",
        STORAGE_KEY: "@appkit-wallet/",
        SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
        EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
        LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
        LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
        EMAIL: "EMAIL",
        PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
        SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
        SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
        SOCIAL_USERNAME: "SOCIAL_USERNAME",
        APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
        APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
        APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
        APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
        APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
        APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
        APP_GET_USER: "@w3m-app/GET_USER",
        APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
        APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
        APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
        APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
        APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
        APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
        APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
        APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
        APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
        APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
        APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
        APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
        APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
        APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
        APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
        APP_RELOAD: "@w3m-app/RELOAD",
        APP_RPC_ABORT: "@w3m-app/RPC_ABORT",
        FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
        FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
        FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
        FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
        FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
        FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
        FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
        FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
        FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
        FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
        FRAME_CONNECT_FARCASTER_SUCCESS: "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
        FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
        FRAME_GET_FARCASTER_URI_SUCCESS: "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
        FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
        FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
        FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
        FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
        FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
        FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
        FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
        FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
        FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
        FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
        FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
        FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
        FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
        FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
        FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
        FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
        FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
        FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
        FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
        FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
        FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
        FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
        FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
        FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
        FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
        FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
        FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
        FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
        FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
        FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
        FRAME_READY: "@w3m-frame/READY",
        FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
        FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
        FRAME_RPC_ABORT_SUCCESS: "@w3m-frame/RPC_ABORT_SUCCESS",
        FRAME_RPC_ABORT_ERROR: "@w3m-frame/RPC_ABORT_ERROR",
        RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
        RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
        RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT"
    },
    pe = {
        SAFE_RPC_METHODS: ["eth_accounts", "eth_blockNumber", "eth_call", "eth_chainId", "eth_estimateGas", "eth_feeHistory", "eth_gasPrice", "eth_getAccount", "eth_getBalance", "eth_getBlockByHash", "eth_getBlockByNumber", "eth_getBlockReceipts", "eth_getBlockTransactionCountByHash", "eth_getBlockTransactionCountByNumber", "eth_getCode", "eth_getFilterChanges", "eth_getFilterLogs", "eth_getLogs", "eth_getProof", "eth_getStorageAt", "eth_getTransactionByBlockHashAndIndex", "eth_getTransactionByBlockNumberAndIndex", "eth_getTransactionByHash", "eth_getTransactionCount", "eth_getTransactionReceipt", "eth_getUncleCountByBlockHash", "eth_getUncleCountByBlockNumber", "eth_maxPriorityFeePerGas", "eth_newBlockFilter", "eth_newFilter", "eth_newPendingTransactionFilter", "eth_sendRawTransaction", "eth_syncing", "eth_uninstallFilter", "wallet_getCapabilities", "wallet_getCallsStatus", "eth_getUserOperationReceipt", "eth_estimateUserOperationGas", "eth_getUserOperationByHash", "eth_supportedEntryPoints", "wallet_getAssets"],
        NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction", "solana_signMessage", "solana_signTransaction", "solana_signAllTransactions", "solana_signAndSendTransaction", "wallet_sendCalls", "wallet_grantPermissions", "wallet_revokePermissions", "eth_sendUserOperation"],
        GET_CHAIN_ID: "eth_chainId",
        RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
        RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
        ACCOUNT_TYPES: {
            EOA: "eoa",
            SMART_ACCOUNT: "smartAccount"
        }
    },
    He = {
        PHANTOM: {
            id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            url: "https://phantom.app"
        },
        SOLFLARE: {
            id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            url: "https://solflare.com"
        },
        COINBASE: {
            id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            url: "https://go.cb-w.com"
        }
    },
    gs = {
        handleMobileDeeplinkRedirect(t, e) {
            const n = window.location.href,
                r = encodeURIComponent(n);
            if (t === He.PHANTOM.id && !("phantom" in window)) {
                const s = n.startsWith("https") ? "https" : "http",
                    a = n.split("/")[2],
                    o = encodeURIComponent(`${s}://${a}`);
                window.location.href = `${He.PHANTOM.url}/ul/browse/${r}?ref=${o}`
            }
            t === He.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${He.SOLFLARE.url}/ul/v1/browse/${r}?ref=${r}`), e === f.CHAIN.SOLANA && t === He.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${He.COINBASE.url}/dapp?cb_url=${r}`)
        }
    },
    Se = ae({
        walletImages: {},
        networkImages: {},
        chainImages: {},
        connectorImages: {},
        tokenImages: {},
        currencyImages: {}
    }),
    Cs = {
        state: Se,
        subscribeNetworkImages(t) {
            return fe(Se.networkImages, () => t(Se.networkImages))
        },
        subscribeKey(t, e) {
            return Ce(Se, t, e)
        },
        subscribe(t) {
            return fe(Se, () => t(Se))
        },
        setWalletImage(t, e) {
            Se.walletImages[t] = e
        },
        setNetworkImage(t, e) {
            Se.networkImages[t] = e
        },
        setChainImage(t, e) {
            Se.chainImages[t] = e
        },
        setConnectorImage(t, e) {
            Se.connectorImages = { ...Se.connectorImages,
                [t]: e
            }
        },
        setTokenImage(t, e) {
            Se.tokenImages[t] = e
        },
        setCurrencyImage(t, e) {
            Se.currencyImages[t] = e
        }
    },
    Ue = Re(Cs),
    Es = {
        eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
        solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
        polkadot: "",
        bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
        cosmos: "",
        sui: "",
        stacks: ""
    },
    Rn = ae({
        networkImagePromises: {}
    }),
    Ar = {
        async fetchWalletImage(t) {
            if (t) return await x._fetchWalletImage(t), this.getWalletImageById(t)
        },
        async fetchNetworkImage(t) {
            if (!t) return;
            const e = this.getNetworkImageById(t);
            return e || (Rn.networkImagePromises[t] || (Rn.networkImagePromises[t] = x._fetchNetworkImage(t)), await Rn.networkImagePromises[t], this.getNetworkImageById(t))
        },
        getWalletImageById(t) {
            if (t) return Ue.state.walletImages[t]
        },
        getWalletImage(t) {
            if (t != null && t.image_url) return t == null ? void 0 : t.image_url;
            if (t != null && t.image_id) return Ue.state.walletImages[t.image_id]
        },
        getNetworkImage(t) {
            var e, n, r;
            if ((e = t == null ? void 0 : t.assets) != null && e.imageUrl) return (n = t == null ? void 0 : t.assets) == null ? void 0 : n.imageUrl;
            if ((r = t == null ? void 0 : t.assets) != null && r.imageId) return Ue.state.networkImages[t.assets.imageId]
        },
        getNetworkImageById(t) {
            if (t) return Ue.state.networkImages[t]
        },
        getConnectorImage(t) {
            var e;
            if (t != null && t.imageUrl) return t.imageUrl;
            if ((e = t == null ? void 0 : t.info) != null && e.icon) return t.info.icon;
            if (t != null && t.imageId) return Ue.state.connectorImages[t.imageId]
        },
        getChainImage(t) {
            return Ue.state.networkImages[Es[t]]
        }
    },
    Qe = ae({
        message: "",
        variant: "info",
        open: !1
    }),
    ws = {
        state: Qe,
        subscribeKey(t, e) {
            return Ce(Qe, t, e)
        },
        open(t, e) {
            const {
                debug: n
            } = m.state, {
                code: r,
                displayMessage: s,
                debugMessage: a
            } = t;
            s && n && (Qe.message = s, Qe.variant = e, Qe.open = !0), a && console.error(typeof a == "function" ? a() : a, r ? {
                code: r
            } : void 0)
        },
        close() {
            Qe.open = !1, Qe.message = "", Qe.variant = "info"
        }
    },
    ue = Re(ws),
    _s = O.getAnalyticsUrl(),
    As = new Qt({
        baseUrl: _s,
        clientId: null
    }),
    ys = ["MODAL_CREATED"],
    Ke = ae({
        timestamp: Date.now(),
        reportedErrors: {},
        data: {
            type: "track",
            event: "MODAL_CREATED"
        }
    }),
    ne = {
        state: Ke,
        subscribe(t) {
            return fe(Ke, () => t(Ke))
        },
        getSdkProperties() {
            const {
                projectId: t,
                sdkType: e,
                sdkVersion: n
            } = m.state;
            return {
                projectId: t,
                st: e,
                sv: n || "html-wagmi-4.2.2"
            }
        },
        async _sendAnalyticsEvent(t) {
            try {
                const e = R.state.address;
                if (ys.includes(t.data.event) || typeof window > "u") return;
                await As.post({
                    path: "/e",
                    params: ne.getSdkProperties(),
                    body: {
                        eventId: O.getUUID(),
                        url: window.location.href,
                        domain: window.location.hostname,
                        timestamp: t.timestamp,
                        props: { ...t.data,
                            address: e
                        }
                    }
                }), Ke.reportedErrors.FORBIDDEN = !1
            } catch (e) {
                e instanceof Error && e.cause instanceof Response && e.cause.status === f.HTTP_STATUS_CODES.FORBIDDEN && !Ke.reportedErrors.FORBIDDEN && (ue.open({
                    displayMessage: "Invalid App Configuration",
                    debugMessage: `Origin ${wt()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`
                }, "error"), Ke.reportedErrors.FORBIDDEN = !0)
            }
        },
        sendEvent(t) {
            var e;
            Ke.timestamp = Date.now(), Ke.data = t, ((e = m.state.features) != null && e.analytics || t.event === "INITIALIZE") && ne._sendAnalyticsEvent(Ke)
        }
    },
    Ns = O.getApiUrl(),
    _e = new Qt({
        baseUrl: Ns,
        clientId: null
    }),
    vs = 40,
    rr = 4,
    Ts = 20,
    G = ae({
        promises: {},
        page: 1,
        count: 0,
        featured: [],
        allFeatured: [],
        recommended: [],
        allRecommended: [],
        wallets: [],
        filteredWallets: [],
        search: [],
        isAnalyticsEnabled: !1,
        excludedWallets: [],
        isFetchingRecommendedWallets: !1
    }),
    x = {
        state: G,
        subscribeKey(t, e) {
            return Ce(G, t, e)
        },
        _getSdkProperties() {
            const {
                projectId: t,
                sdkType: e,
                sdkVersion: n
            } = m.state;
            return {
                projectId: t,
                st: e || "appkit",
                sv: n || "html-wagmi-4.2.2"
            }
        },
        _filterOutExtensions(t) {
            return m.state.isUniversalProvider ? t.filter(e => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t
        },
        async _fetchWalletImage(t) {
            const e = `${_e.baseUrl}/getWalletImage/${t}`,
                n = await _e.getBlob({
                    path: e,
                    params: x._getSdkProperties()
                });
            Ue.setWalletImage(t, URL.createObjectURL(n))
        },
        async _fetchNetworkImage(t) {
            const e = `${_e.baseUrl}/public/getAssetImage/${t}`,
                n = await _e.getBlob({
                    path: e,
                    params: x._getSdkProperties()
                });
            Ue.setNetworkImage(t, URL.createObjectURL(n))
        },
        async _fetchConnectorImage(t) {
            const e = `${_e.baseUrl}/public/getAssetImage/${t}`,
                n = await _e.getBlob({
                    path: e,
                    params: x._getSdkProperties()
                });
            Ue.setConnectorImage(t, URL.createObjectURL(n))
        },
        async _fetchCurrencyImage(t) {
            const e = `${_e.baseUrl}/public/getCurrencyImage/${t}`,
                n = await _e.getBlob({
                    path: e,
                    params: x._getSdkProperties()
                });
            Ue.setCurrencyImage(t, URL.createObjectURL(n))
        },
        async _fetchTokenImage(t) {
            const e = `${_e.baseUrl}/public/getTokenImage/${t}`,
                n = await _e.getBlob({
                    path: e,
                    params: x._getSdkProperties()
                });
            Ue.setTokenImage(t, URL.createObjectURL(n))
        },
        _filterWalletsByPlatform(t) {
            return O.isMobile() ? t == null ? void 0 : t.filter(n => n.mobile_link || n.id === He.COINBASE.id ? !0 : u.state.activeChain === "solana" && (n.id === He.SOLFLARE.id || n.id === He.PHANTOM.id)) : t
        },
        async fetchProjectConfig() {
            return (await _e.get({
                path: "/appkit/v1/config",
                params: x._getSdkProperties()
            })).features
        },
        async fetchAllowedOrigins() {
            try {
                const {
                    allowedOrigins: t
                } = await _e.get({
                    path: "/projects/v1/origins",
                    params: x._getSdkProperties()
                });
                return t
            } catch (t) {
                if (t instanceof Error && t.cause instanceof Response) {
                    const e = t.cause.status;
                    if (e === f.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
                        cause: t
                    });
                    if (e >= f.HTTP_STATUS_CODES.SERVER_ERROR && e < 600) throw new Error("SERVER_ERROR", {
                        cause: t
                    });
                    return []
                }
                return []
            }
        },
        async fetchNetworkImages() {
            const t = u.getAllRequestedCaipNetworks(),
                e = t == null ? void 0 : t.map(({
                    assets: n
                }) => n == null ? void 0 : n.imageId).filter(Boolean).filter(n => !Ar.getNetworkImageById(n));
            e && await Promise.allSettled(e.map(n => x._fetchNetworkImage(n)))
        },
        async fetchConnectorImages() {
            const {
                connectors: t
            } = E.state, e = t.map(({
                imageId: n
            }) => n).filter(Boolean);
            await Promise.allSettled(e.map(n => x._fetchConnectorImage(n)))
        },
        async fetchCurrencyImages(t = []) {
            await Promise.allSettled(t.map(e => x._fetchCurrencyImage(e)))
        },
        async fetchTokenImages(t = []) {
            await Promise.allSettled(t.map(e => x._fetchTokenImage(e)))
        },
        async fetchWallets(t) {
            var a;
            const e = t.exclude ? ? [];
            x._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(He).map(o => o.id));
            const r = await _e.get({
                path: "/getWallets",
                params: { ...x._getSdkProperties(),
                    ...t,
                    page: String(t.page),
                    entries: String(t.entries),
                    include: (a = t.include) == null ? void 0 : a.join(","),
                    exclude: e.join(",")
                }
            });
            return {
                data: x._filterWalletsByPlatform(r == null ? void 0 : r.data) || [],
                count: r == null ? void 0 : r.count
            }
        },
        async fetchFeaturedWallets() {
            const {
                featuredWalletIds: t
            } = m.state;
            if (t != null && t.length) {
                const e = { ...x._getSdkProperties(),
                        page: 1,
                        entries: (t == null ? void 0 : t.length) ? ? rr,
                        include: t
                    },
                    {
                        data: n
                    } = await x.fetchWallets(e),
                    r = [...n].sort((a, o) => t.indexOf(a.id) - t.indexOf(o.id)),
                    s = r.map(a => a.image_id).filter(Boolean);
                await Promise.allSettled(s.map(a => x._fetchWalletImage(a))), G.featured = r, G.allFeatured = r
            }
        },
        async fetchRecommendedWallets() {
            try {
                G.isFetchingRecommendedWallets = !0;
                const {
                    includeWalletIds: t,
                    excludeWalletIds: e,
                    featuredWalletIds: n
                } = m.state, r = [...e ? ? [], ...n ? ? []].filter(Boolean), s = u.getRequestedCaipNetworkIds().join(","), a = {
                    page: 1,
                    entries: rr,
                    include: t,
                    exclude: r,
                    chains: s
                }, {
                    data: o,
                    count: i
                } = await x.fetchWallets(a), l = g.getRecentWallets(), d = o.map(h => h.image_id).filter(Boolean), p = l.map(h => h.image_id).filter(Boolean);
                await Promise.allSettled([...d, ...p].map(h => x._fetchWalletImage(h))), G.recommended = o, G.allRecommended = o, G.count = i ? ? 0
            } catch {} finally {
                G.isFetchingRecommendedWallets = !1
            }
        },
        async fetchWalletsByPage({
            page: t
        }) {
            const {
                includeWalletIds: e,
                excludeWalletIds: n,
                featuredWalletIds: r
            } = m.state, s = u.getRequestedCaipNetworkIds().join(","), a = [...G.recommended.map(({
                id: p
            }) => p), ...n ? ? [], ...r ? ? []].filter(Boolean), o = {
                page: t,
                entries: vs,
                include: e,
                exclude: a,
                chains: s
            }, {
                data: i,
                count: l
            } = await x.fetchWallets(o), d = i.slice(0, Ts).map(p => p.image_id).filter(Boolean);
            await Promise.allSettled(d.map(p => x._fetchWalletImage(p))), G.wallets = O.uniqueBy([...G.wallets, ...x._filterOutExtensions(i)], "id").filter(p => {
                var h;
                return (h = p.chains) == null ? void 0 : h.some(y => s.includes(y))
            }), G.count = l > G.count ? l : G.count, G.page = t
        },
        async initializeExcludedWallets({
            ids: t
        }) {
            const e = {
                    page: 1,
                    entries: t.length,
                    include: t
                },
                {
                    data: n
                } = await x.fetchWallets(e);
            n && n.forEach(r => {
                G.excludedWallets.push({
                    rdns: r.rdns,
                    name: r.name
                })
            })
        },
        async searchWallet({
            search: t,
            badge: e
        }) {
            const {
                includeWalletIds: n,
                excludeWalletIds: r
            } = m.state, s = u.getRequestedCaipNetworkIds().join(",");
            G.search = [];
            const a = {
                    page: 1,
                    entries: 100,
                    search: t == null ? void 0 : t.trim(),
                    badge_type: e,
                    include: n,
                    exclude: r,
                    chains: s
                },
                {
                    data: o
                } = await x.fetchWallets(a);
            ne.sendEvent({
                type: "track",
                event: "SEARCH_WALLET",
                properties: {
                    badge: e ? ? "",
                    search: t ? ? ""
                }
            });
            const i = o.map(l => l.image_id).filter(Boolean);
            await Promise.allSettled([...i.map(l => x._fetchWalletImage(l)), O.wait(300)]), G.search = x._filterOutExtensions(o)
        },
        initPromise(t, e) {
            const n = G.promises[t];
            return n || (G.promises[t] = e())
        },
        prefetch({
            fetchConnectorImages: t = !0,
            fetchFeaturedWallets: e = !0,
            fetchRecommendedWallets: n = !0,
            fetchNetworkImages: r = !0
        } = {}) {
            const s = [t && x.initPromise("connectorImages", x.fetchConnectorImages), e && x.initPromise("featuredWallets", x.fetchFeaturedWallets), n && x.initPromise("recommendedWallets", x.fetchRecommendedWallets), r && x.initPromise("networkImages", x.fetchNetworkImages)].filter(Boolean);
            return Promise.allSettled(s)
        },
        prefetchAnalyticsConfig() {
            var t;
            (t = m.state.features) != null && t.analytics && x.fetchAnalyticsConfig()
        },
        async fetchAnalyticsConfig() {
            try {
                const {
                    isAnalyticsEnabled: t
                } = await _e.get({
                    path: "/getAnalyticsConfig",
                    params: x._getSdkProperties()
                });
                m.setFeatures({
                    analytics: t
                })
            } catch {
                m.setFeatures({
                    analytics: !1
                })
            }
        },
        filterByNamespaces(t) {
            if (!(t != null && t.length)) {
                G.featured = G.allFeatured, G.recommended = G.allRecommended;
                return
            }
            const e = u.getRequestedCaipNetworkIds().join(",");
            G.featured = G.allFeatured.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            }), G.recommended = G.allRecommended.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            }), G.filteredWallets = G.wallets.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            })
        },
        clearFilterByNamespaces() {
            G.filteredWallets = []
        },
        setFilterByNamespace(t) {
            if (!t) {
                G.featured = G.allFeatured, G.recommended = G.allRecommended;
                return
            }
            const e = u.getRequestedCaipNetworkIds().join(",");
            G.featured = G.allFeatured.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            }), G.recommended = G.allRecommended.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            }), G.filteredWallets = G.wallets.filter(n => {
                var r;
                return (r = n.chains) == null ? void 0 : r.some(s => e.includes(s))
            })
        }
    },
    re = ae({
        view: "Connect",
        history: ["Connect"],
        transactionStack: []
    }),
    Ss = {
        state: re,
        subscribeKey(t, e) {
            return Ce(re, t, e)
        },
        pushTransactionStack(t) {
            re.transactionStack.push(t)
        },
        popTransactionStack(t) {
            const e = re.transactionStack.pop();
            if (!e) return;
            const {
                onSuccess: n,
                onError: r,
                onCancel: s
            } = e;
            switch (t) {
                case "success":
                    n == null || n();
                    break;
                case "error":
                    r == null || r(), B.goBack();
                    break;
                case "cancel":
                    s == null || s(), B.goBack();
                    break
            }
        },
        push(t, e) {
            t !== re.view && (re.view = t, re.history.push(t), re.data = e)
        },
        reset(t, e) {
            re.view = t, re.history = [t], re.data = e
        },
        replace(t, e) {
            re.history.at(-1) === t || (re.view = t, re.history[re.history.length - 1] = t, re.data = e)
        },
        goBack() {
            var r;
            const t = u.state.activeCaipAddress,
                e = B.state.view === "ConnectingFarcaster",
                n = !t && e;
            if (re.history.length > 1) {
                re.history.pop();
                const [s] = re.history.slice(-1);
                s && (t && s === "Connect" ? re.view = "Account" : re.view = s)
            } else z.close();
            (r = re.data) != null && r.wallet && (re.data.wallet = void 0), setTimeout(() => {
                var s, a, o;
                if (n) {
                    R.setFarcasterUrl(void 0, u.state.activeChain);
                    const i = E.getAuthConnector();
                    (s = i == null ? void 0 : i.provider) == null || s.reload();
                    const l = Ft(m.state);
                    (o = (a = i == null ? void 0 : i.provider) == null ? void 0 : a.syncDappData) == null || o.call(a, {
                        metadata: l.metadata,
                        sdkVersion: l.sdkVersion,
                        projectId: l.projectId,
                        sdkType: l.sdkType
                    })
                }
            }, 100)
        },
        goBackToIndex(t) {
            if (re.history.length > 1) {
                re.history = re.history.slice(0, t + 1);
                const [e] = re.history.slice(-1);
                e && (re.view = e)
            }
        },
        goBackOrCloseModal() {
            B.state.history.length > 1 ? B.goBack() : z.close()
        }
    },
    B = Re(Ss),
    ze = ae({
        themeMode: "dark",
        themeVariables: {},
        w3mThemeVariables: void 0
    }),
    Fn = {
        state: ze,
        subscribe(t) {
            return fe(ze, () => t(ze))
        },
        setThemeMode(t) {
            ze.themeMode = t;
            try {
                const e = E.getAuthConnector();
                if (e) {
                    const n = Fn.getSnapshot().themeVariables;
                    e.provider.syncTheme({
                        themeMode: t,
                        themeVariables: n,
                        w3mThemeVariables: Ye(n, t)
                    })
                }
            } catch {
                console.info("Unable to sync theme to auth connector")
            }
        },
        setThemeVariables(t) {
            ze.themeVariables = { ...ze.themeVariables,
                ...t
            };
            try {
                const e = E.getAuthConnector();
                if (e) {
                    const n = Fn.getSnapshot().themeVariables;
                    e.provider.syncTheme({
                        themeVariables: n,
                        w3mThemeVariables: Ye(ze.themeVariables, ze.themeMode)
                    })
                }
            } catch {
                console.info("Unable to sync theme to auth connector")
            }
        },
        getSnapshot() {
            return Ft(ze)
        }
    },
    ve = Re(Fn),
    yr = Object.fromEntries(wr.map(t => [t, void 0])),
    bs = Object.fromEntries(wr.map(t => [t, !0])),
    X = ae({
        allConnectors: [],
        connectors: [],
        activeConnector: void 0,
        filterByNamespace: void 0,
        activeConnectorIds: yr,
        filterByNamespaceMap: bs
    }),
    Is = {
        state: X,
        subscribe(t) {
            return fe(X, () => {
                t(X)
            })
        },
        subscribeKey(t, e) {
            return Ce(X, t, e)
        },
        initialize(t) {
            t.forEach(e => {
                const n = g.getConnectedConnectorId(e);
                n && E.setConnectorId(n, e)
            })
        },
        setActiveConnector(t) {
            t && (X.activeConnector = ut(t))
        },
        setConnectors(t) {
            t.filter(s => !X.allConnectors.some(a => a.id === s.id && E.getConnectorName(a.name) === E.getConnectorName(s.name) && a.chain === s.chain)).forEach(s => {
                s.type !== "MULTI_CHAIN" && X.allConnectors.push(ut(s))
            });
            const n = E.getEnabledNamespaces(),
                r = E.getEnabledConnectors(n);
            X.connectors = E.mergeMultiChainConnectors(r)
        },
        filterByNamespaces(t) {
            Object.keys(X.filterByNamespaceMap).forEach(e => {
                X.filterByNamespaceMap[e] = !1
            }), t.forEach(e => {
                X.filterByNamespaceMap[e] = !0
            }), E.updateConnectorsForEnabledNamespaces()
        },
        filterByNamespace(t, e) {
            X.filterByNamespaceMap[t] = e, E.updateConnectorsForEnabledNamespaces()
        },
        updateConnectorsForEnabledNamespaces() {
            const t = E.getEnabledNamespaces(),
                e = E.getEnabledConnectors(t),
                n = E.areAllNamespacesEnabled();
            X.connectors = E.mergeMultiChainConnectors(e), n ? x.clearFilterByNamespaces() : x.filterByNamespaces(t)
        },
        getEnabledNamespaces() {
            return Object.entries(X.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t)
        },
        getEnabledConnectors(t) {
            return X.allConnectors.filter(e => t.includes(e.chain))
        },
        areAllNamespacesEnabled() {
            return Object.values(X.filterByNamespaceMap).every(t => t)
        },
        mergeMultiChainConnectors(t) {
            const e = E.generateConnectorMapByName(t),
                n = [];
            return e.forEach(r => {
                const s = r[0],
                    a = (s == null ? void 0 : s.id) === f.CONNECTOR_ID.AUTH;
                r.length > 1 && s ? n.push({
                    name: s.name,
                    imageUrl: s.imageUrl,
                    imageId: s.imageId,
                    connectors: [...r],
                    type: a ? "AUTH" : "MULTI_CHAIN",
                    chain: "eip155",
                    id: (s == null ? void 0 : s.id) || ""
                }) : s && n.push(s)
            }), n
        },
        generateConnectorMapByName(t) {
            const e = new Map;
            return t.forEach(n => {
                const {
                    name: r
                } = n, s = E.getConnectorName(r);
                if (!s) return;
                const a = e.get(s) || [];
                a.find(i => i.chain === n.chain) || a.push(n), e.set(s, a)
            }), e
        },
        getConnectorName(t) {
            return t && ({
                "Trust Wallet": "Trust"
            }[t] || t)
        },
        getUniqueConnectorsByName(t) {
            const e = [];
            return t.forEach(n => {
                e.find(r => r.chain === n.chain) || e.push(n)
            }), e
        },
        addConnector(t) {
            var e, n, r;
            if (t.id === f.CONNECTOR_ID.AUTH) {
                const s = t,
                    a = Ft(m.state),
                    o = ve.getSnapshot().themeMode,
                    i = ve.getSnapshot().themeVariables;
                (n = (e = s == null ? void 0 : s.provider) == null ? void 0 : e.syncDappData) == null || n.call(e, {
                    metadata: a.metadata,
                    sdkVersion: a.sdkVersion,
                    projectId: a.projectId,
                    sdkType: a.sdkType
                }), (r = s == null ? void 0 : s.provider) == null || r.syncTheme({
                    themeMode: o,
                    themeVariables: i,
                    w3mThemeVariables: Ye(i, o)
                }), E.setConnectors([t])
            } else E.setConnectors([t])
        },
        getAuthConnector(t) {
            var r;
            const e = t || u.state.activeChain,
                n = X.connectors.find(s => s.id === f.CONNECTOR_ID.AUTH);
            if (n) return (r = n == null ? void 0 : n.connectors) != null && r.length ? n.connectors.find(a => a.chain === e) : n
        },
        getAnnouncedConnectorRdns() {
            return X.connectors.filter(t => t.type === "ANNOUNCED").map(t => {
                var e;
                return (e = t.info) == null ? void 0 : e.rdns
            })
        },
        getConnectorById(t) {
            return X.allConnectors.find(e => e.id === t)
        },
        getConnector({
            id: t,
            rdns: e,
            namespace: n
        }) {
            const r = n || u.state.activeChain;
            return X.allConnectors.filter(a => a.chain === r).find(a => {
                var o;
                return a.explorerId === t || ((o = a.info) == null ? void 0 : o.rdns) === e
            })
        },
        syncIfAuthConnector(t) {
            var a, o;
            if (t.id !== "ID_AUTH") return;
            const e = t,
                n = Ft(m.state),
                r = ve.getSnapshot().themeMode,
                s = ve.getSnapshot().themeVariables;
            (o = (a = e == null ? void 0 : e.provider) == null ? void 0 : a.syncDappData) == null || o.call(a, {
                metadata: n.metadata,
                sdkVersion: n.sdkVersion,
                sdkType: n.sdkType,
                projectId: n.projectId
            }), e.provider.syncTheme({
                themeMode: r,
                themeVariables: s,
                w3mThemeVariables: Ye(s, r)
            })
        },
        getConnectorsByNamespace(t) {
            const e = X.allConnectors.filter(n => n.chain === t);
            return E.mergeMultiChainConnectors(e)
        },
        canSwitchToSmartAccount(t) {
            return u.checkIfSmartAccountEnabled() && We(t) === pe.ACCOUNT_TYPES.EOA
        },
        selectWalletConnector(t) {
            const e = E.getConnector({
                id: t.id,
                rdns: t.rdns
            });
            gs.handleMobileDeeplinkRedirect((e == null ? void 0 : e.explorerId) || t.id, u.state.activeChain), e ? B.push("ConnectingExternal", {
                connector: e,
                wallet: t
            }) : B.push("ConnectingWalletConnect", {
                wallet: t
            })
        },
        getConnectors(t) {
            return t ? E.getConnectorsByNamespace(t) : E.mergeMultiChainConnectors(X.allConnectors)
        },
        setFilterByNamespace(t) {
            X.filterByNamespace = t, X.connectors = E.getConnectors(t), x.setFilterByNamespace(t)
        },
        setConnectorId(t, e) {
            t && (X.activeConnectorIds = { ...X.activeConnectorIds,
                [e]: t
            }, g.setConnectedConnectorId(e, t))
        },
        removeConnectorId(t) {
            X.activeConnectorIds = { ...X.activeConnectorIds,
                [t]: void 0
            }, g.deleteConnectedConnectorId(t)
        },
        getConnectorId(t) {
            if (t) return X.activeConnectorIds[t]
        },
        isConnected(t) {
            return t ? !!X.activeConnectorIds[t] : Object.values(X.activeConnectorIds).some(e => !!e)
        },
        resetConnectorIds() {
            X.activeConnectorIds = { ...yr
            }
        }
    },
    E = Re(Is),
    Rs = 1e3,
    kt = {
        checkNamespaceConnectorId(t, e) {
            return E.getConnectorId(t) === e
        },
        isSocialProvider(t) {
            return ee.DEFAULT_REMOTE_FEATURES.socials.includes(t)
        },
        connectWalletConnect({
            walletConnect: t,
            connector: e,
            closeModalOnConnect: n = !0,
            redirectViewOnModalClose: r = "Connect",
            onOpen: s,
            onConnect: a
        }) {
            return new Promise((o, i) => {
                if (t && E.setActiveConnector(e), s == null || s(O.isMobile() && t), r) {
                    const d = z.subscribeKey("open", p => {
                        p || (B.state.view !== r && B.replace(r), d(), i(new Error("Modal closed")))
                    })
                }
                const l = u.subscribeKey("activeCaipAddress", d => {
                    d && (a == null || a(), n && z.close(), l(), o(Te.parseCaipAddress(d)))
                })
            })
        },
        connectExternal(t) {
            return new Promise((e, n) => {
                const r = u.subscribeKey("activeCaipAddress", s => {
                    s && (z.close(), r(), e(Te.parseCaipAddress(s)))
                });
                _.connectExternal(t, t.chain).catch(() => {
                    r(), n(new Error("Connection rejected"))
                })
            })
        },
        connectSocial({
            social: t,
            namespace: e,
            closeModalOnConnect: n = !0,
            onOpenFarcaster: r,
            onConnect: s
        }) {
            let a = R.state.socialWindow,
                o = R.state.socialProvider,
                i = !1,
                l = null;
            const d = e || u.state.activeChain,
                p = u.subscribeKey("activeCaipAddress", h => {
                    h && (n && z.close(), p())
                });
            return new Promise((h, y) => {
                async function b(F) {
                    var w, H;
                    if ((w = F.data) != null && w.resultUri)
                        if (F.origin === f.SECURE_SITE_SDK_ORIGIN) {
                            window.removeEventListener("message", b, !1);
                            try {
                                const P = E.getAuthConnector(d);
                                if (P && !i) {
                                    a && (a.close(), R.setSocialWindow(void 0, d), a = R.state.socialWindow), i = !0;
                                    const Z = F.data.resultUri;
                                    if (o && ne.sendEvent({
                                            type: "track",
                                            event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                                            properties: {
                                                provider: o
                                            }
                                        }), o) {
                                        g.setConnectedSocialProvider(o), await _.connectExternal({
                                            id: P.id,
                                            type: P.type,
                                            socialUri: Z
                                        }, P.chain);
                                        const le = u.state.activeCaipAddress;
                                        if (!le) {
                                            y(new Error("Failed to connect"));
                                            return
                                        }
                                        h(Te.parseCaipAddress(le)), ne.sendEvent({
                                            type: "track",
                                            event: "SOCIAL_LOGIN_SUCCESS",
                                            properties: {
                                                provider: o,
                                                caipNetworkId: (H = u.getActiveCaipNetwork()) == null ? void 0 : H.caipNetworkId
                                            }
                                        })
                                    }
                                }
                            } catch {
                                o && ne.sendEvent({
                                    type: "track",
                                    event: "SOCIAL_LOGIN_ERROR",
                                    properties: {
                                        provider: o
                                    }
                                }), y(new Error("Failed to connect"))
                            }
                        } else o && ne.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_ERROR",
                            properties: {
                                provider: o
                            }
                        })
                }
                async function j() {
                    if (t && (R.setSocialProvider(t, d), o = R.state.socialProvider, ne.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_STARTED",
                            properties: {
                                provider: o
                            }
                        })), o === "farcaster") {
                        r == null || r();
                        const F = z.subscribeKey("open", H => {
                                !H && t === "farcaster" && (y(new Error("Popup closed")), s == null || s(), F())
                            }),
                            w = E.getAuthConnector();
                        if (w && !R.state.farcasterUrl) try {
                            const {
                                url: H
                            } = await w.provider.getFarcasterUri();
                            R.setFarcasterUrl(H, d)
                        } catch {
                            y(new Error("Failed to connect to farcaster"))
                        }
                    } else {
                        const F = E.getAuthConnector();
                        l = O.returnOpenHref(`${f.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
                        try {
                            if (F && o) {
                                const {
                                    uri: w
                                } = await F.provider.getSocialRedirectUri({
                                    provider: o
                                });
                                if (l && w) {
                                    R.setSocialWindow(l, d), a = R.state.socialWindow, l.location.href = w;
                                    const H = setInterval(() => {
                                        a != null && a.closed && !i && (y(new Error("Popup closed")), clearInterval(H))
                                    }, 1e3);
                                    window.addEventListener("message", b, !1)
                                } else l == null || l.close(), y(new Error("Failed to initiate social connection"))
                            }
                        } catch {
                            y(new Error("Failed to initiate social connection")), l == null || l.close()
                        }
                    }
                }
                j()
            })
        },
        connectEmail({
            closeModalOnConnect: t = !0,
            redirectViewOnModalClose: e = "Connect",
            onOpen: n,
            onConnect: r
        }) {
            return new Promise((s, a) => {
                if (n == null || n(), e) {
                    const i = z.subscribeKey("open", l => {
                        l || (B.state.view !== e && B.replace(e), i(), a(new Error("Modal closed")))
                    })
                }
                const o = u.subscribeKey("activeCaipAddress", i => {
                    i && (r == null || r(), t && z.close(), o(), s(Te.parseCaipAddress(i)))
                })
            })
        },
        async updateEmail() {
            const t = g.getConnectedConnectorId(u.state.activeChain),
                e = E.getAuthConnector();
            if (!e) throw new Error("No auth connector found");
            if (t !== f.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
            const n = e.provider.getEmail() ? ? "";
            return await z.open({
                view: "UpdateEmailWallet",
                data: {
                    email: n,
                    redirectView: void 0
                }
            }), new Promise((r, s) => {
                const a = setInterval(() => {
                        const i = e.provider.getEmail() ? ? "";
                        i !== n && (z.close(), clearInterval(a), o(), r({
                            email: i
                        }))
                    }, Rs),
                    o = z.subscribeKey("open", i => {
                        i || (B.state.view !== "Connect" && B.push("Connect"), clearInterval(a), o(), s(new Error("Modal closed")))
                    })
            })
        },
        canSwitchToSmartAccount(t) {
            return u.checkIfSmartAccountEnabled() && We(t) === pe.ACCOUNT_TYPES.EOA
        }
    };

function Nr() {
    var r, s;
    const t = ((r = u.state.activeCaipNetwork) == null ? void 0 : r.chainNamespace) || "eip155",
        e = ((s = u.state.activeCaipNetwork) == null ? void 0 : s.id) || 1,
        n = ee.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${n}`
}

function We(t) {
    var n;
    return (n = u.getAccountData(t)) == null ? void 0 : n.preferredAccountType
}

function Wn(t) {
    var e, n;
    return t ? (n = (e = u.state.chains.get(t)) == null ? void 0 : e.networkState) == null ? void 0 : n.caipNetwork : u.state.activeCaipNetwork
}
const hn = {
        getConnectionStatus(t, e) {
            const n = E.state.activeConnectorIds[e],
                r = _.getConnections(e);
            return !!n && t.connectorId === n ? "connected" : r.some(o => o.connectorId.toLowerCase() === t.connectorId.toLowerCase()) ? "active" : "disconnected"
        },
        excludeConnectorAddressFromConnections({
            connections: t,
            connectorId: e,
            addresses: n
        }) {
            return t.map(r => {
                if ((e ? r.connectorId.toLowerCase() === e.toLowerCase() : !1) && n) {
                    const a = r.accounts.filter(o => !n.some(l => l.toLowerCase() === o.address.toLowerCase()));
                    return { ...r,
                        accounts: a
                    }
                }
                return r
            })
        },
        excludeExistingConnections(t, e) {
            const n = new Set(t);
            return e.filter(r => !n.has(r.connectorId))
        },
        getConnectionsByConnectorId(t, e) {
            return t.filter(n => n.connectorId.toLowerCase() === e.toLowerCase())
        },
        getConnectionsData(t) {
            var i;
            const e = !!((i = m.state.remoteFeatures) != null && i.multiWallet),
                n = E.state.activeConnectorIds[t],
                r = _.getConnections(t),
                a = (_.state.recentConnections.get(t) ? ? []).filter(l => E.getConnectorById(l.connectorId)),
                o = hn.excludeExistingConnections([...r.map(l => l.connectorId), ...n ? [n] : []], a);
            return e ? {
                connections: r,
                recentConnections: o
            } : {
                connections: r.filter(l => l.connectorId.toLowerCase() === (n == null ? void 0 : n.toLowerCase())),
                recentConnections: []
            }
        }
    },
    lt = Object.freeze({
        message: "",
        variant: "success",
        svg: void 0,
        open: !1,
        autoClose: !0
    }),
    de = ae({ ...lt
    }),
    Os = {
        state: de,
        subscribeKey(t, e) {
            return Ce(de, t, e)
        },
        showLoading(t, e = {}) {
            this._showMessage({
                message: t,
                variant: "loading",
                ...e
            })
        },
        showSuccess(t) {
            this._showMessage({
                message: t,
                variant: "success"
            })
        },
        showSvg(t, e) {
            this._showMessage({
                message: t,
                svg: e
            })
        },
        showError(t) {
            const e = O.parseError(t);
            this._showMessage({
                message: e,
                variant: "error"
            })
        },
        hide() {
            de.message = lt.message, de.variant = lt.variant, de.svg = lt.svg, de.open = lt.open, de.autoClose = lt.autoClose
        },
        _showMessage({
            message: t,
            svg: e,
            variant: n = "success",
            autoClose: r = lt.autoClose
        }) {
            de.open ? (de.open = !1, setTimeout(() => {
                de.message = t, de.variant = n, de.svg = e, de.open = !0, de.autoClose = r
            }, 150)) : (de.message = t, de.variant = n, de.svg = e, de.open = !0, de.autoClose = r)
        }
    },
    $e = Os,
    oe = ae({
        transactions: [],
        transactionsByYear: {},
        lastNetworkInView: void 0,
        loading: !1,
        empty: !1,
        next: void 0
    }),
    ks = {
        state: oe,
        subscribe(t) {
            return fe(oe, () => t(oe))
        },
        setLastNetworkInView(t) {
            oe.lastNetworkInView = t
        },
        async fetchTransactions(t) {
            var e;
            if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
            oe.loading = !0;
            try {
                const n = await M.fetchTransactions({
                        account: t,
                        cursor: oe.next,
                        chainId: (e = u.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId
                    }),
                    r = cn.filterSpamTransactions(n.data),
                    s = cn.filterByConnectedChain(r),
                    a = [...oe.transactions, ...s];
                oe.loading = !1, oe.transactions = a, oe.transactionsByYear = cn.groupTransactionsByYearAndMonth(oe.transactionsByYear, s), oe.empty = a.length === 0, oe.next = n.next ? n.next : void 0
            } catch {
                const r = u.state.activeChain;
                ne.sendEvent({
                    type: "track",
                    event: "ERROR_FETCH_TRANSACTIONS",
                    properties: {
                        address: t,
                        projectId: m.state.projectId,
                        cursor: oe.next,
                        isSmartAccount: We(r) === pe.ACCOUNT_TYPES.SMART_ACCOUNT
                    }
                }), $e.showError("Failed to fetch transactions"), oe.loading = !1, oe.empty = !0, oe.next = void 0
            }
        },
        groupTransactionsByYearAndMonth(t = {}, e = []) {
            const n = t;
            return e.forEach(r => {
                const s = new Date(r.metadata.minedAt).getFullYear(),
                    a = new Date(r.metadata.minedAt).getMonth(),
                    o = n[s] ? ? {},
                    l = (o[a] ? ? []).filter(d => d.id !== r.id);
                n[s] = { ...o,
                    [a]: [...l, r].sort((d, p) => new Date(p.metadata.minedAt).getTime() - new Date(d.metadata.minedAt).getTime())
                }
            }), n
        },
        filterSpamTransactions(t) {
            return t.filter(e => !e.transfers.every(r => {
                var s;
                return ((s = r.nft_info) == null ? void 0 : s.flags.is_spam) === !0
            }))
        },
        filterByConnectedChain(t) {
            var r;
            const e = (r = u.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId;
            return t.filter(s => s.metadata.chain === e)
        },
        clearCursor() {
            oe.next = void 0
        },
        resetTransactions() {
            oe.transactions = [], oe.transactionsByYear = {}, oe.lastNetworkInView = void 0, oe.loading = !1, oe.empty = !1, oe.next = void 0
        }
    },
    cn = Re(ks, "API_ERROR"),
    K = ae({
        connections: new Map,
        recentConnections: new Map,
        isSwitchingConnection: !1,
        wcError: !1,
        buffering: !1,
        status: "disconnected"
    });
let it;
const Ps = {
        state: K,
        subscribe(t) {
            return fe(K, () => t(K))
        },
        subscribeKey(t, e) {
            return Ce(K, t, e)
        },
        _getClient() {
            return K._client
        },
        setClient(t) {
            K._client = ut(t)
        },
        initialize(t) {
            const e = t.filter(n => !!n.namespace).map(n => n.namespace);
            _.syncStorageConnections(e)
        },
        syncStorageConnections(t) {
            const e = g.getConnections(),
                n = t ? ? Array.from(u.state.chains.keys());
            for (const r of n) {
                const s = e[r] ? ? [],
                    a = new Map(K.recentConnections);
                a.set(r, s), K.recentConnections = a
            }
        },
        getConnections(t) {
            return t ? K.connections.get(t) ? ? [] : []
        },
        hasAnyConnection(t) {
            const e = _.state.connections;
            return Array.from(e.values()).flatMap(n => n).some(({
                connectorId: n
            }) => n === t)
        },
        async connectWalletConnect() {
            var t, e, n, r;
            if (O.isTelegram() || O.isSafari() && O.isIos()) {
                if (it) {
                    await it, it = void 0;
                    return
                }
                if (!O.isPairingExpired(K == null ? void 0 : K.wcPairingExpiry)) {
                    const s = K.wcUri;
                    K.wcUri = s;
                    return
                }
                it = (e = (t = _._getClient()) == null ? void 0 : t.connectWalletConnect) == null ? void 0 : e.call(t).catch(() => {}), _.state.status = "connecting", await it, it = void 0, K.wcPairingExpiry = void 0, _.state.status = "connected"
            } else await ((r = (n = _._getClient()) == null ? void 0 : n.connectWalletConnect) == null ? void 0 : r.call(n))
        },
        async connectExternal(t, e, n = !0) {
            var s, a;
            const r = await ((a = (s = _._getClient()) == null ? void 0 : s.connectExternal) == null ? void 0 : a.call(s, t));
            return n && u.setActiveNamespace(e), r
        },
        async reconnectExternal(t) {
            var n, r;
            await ((r = (n = _._getClient()) == null ? void 0 : n.reconnectExternal) == null ? void 0 : r.call(n, t));
            const e = t.chain || u.state.activeChain;
            e && E.setConnectorId(t.id, e)
        },
        async setPreferredAccountType(t, e) {
            var r;
            if (!e) return;
            z.setLoading(!0, u.state.activeChain);
            const n = E.getAuthConnector();
            n && (R.setPreferredAccountType(t, e), await n.provider.setPreferredAccount(t), g.setPreferredAccountTypes(Object.entries(u.state.chains).reduce((s, [a, o]) => {
                const i = a,
                    l = We(i);
                return l !== void 0 && (s[i] = l), s
            }, {})), await _.reconnectExternal(n), z.setLoading(!1, u.state.activeChain), ne.sendEvent({
                type: "track",
                event: "SET_PREFERRED_ACCOUNT_TYPE",
                properties: {
                    accountType: t,
                    network: ((r = u.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) || ""
                }
            }))
        },
        async signMessage(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.signMessage(t)
        },
        parseUnits(t, e) {
            var n;
            return (n = _._getClient()) == null ? void 0 : n.parseUnits(t, e)
        },
        formatUnits(t, e) {
            var n;
            return (n = _._getClient()) == null ? void 0 : n.formatUnits(t, e)
        },
        async sendTransaction(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.sendTransaction(t)
        },
        async getCapabilities(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.getCapabilities(t)
        },
        async grantPermissions(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.grantPermissions(t)
        },
        async walletGetAssets(t) {
            var e;
            return ((e = _._getClient()) == null ? void 0 : e.walletGetAssets(t)) ? ? {}
        },
        async estimateGas(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.estimateGas(t)
        },
        async writeContract(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.writeContract(t)
        },
        async getEnsAddress(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.getEnsAddress(t)
        },
        async getEnsAvatar(t) {
            var e;
            return (e = _._getClient()) == null ? void 0 : e.getEnsAvatar(t)
        },
        checkInstalled(t) {
            var e, n;
            return ((n = (e = _._getClient()) == null ? void 0 : e.checkInstalled) == null ? void 0 : n.call(e, t)) || !1
        },
        resetWcConnection() {
            K.wcUri = void 0, K.wcPairingExpiry = void 0, K.wcLinking = void 0, K.recentWallet = void 0, K.status = "disconnected", cn.resetTransactions(), g.deleteWalletConnectDeepLink()
        },
        resetUri() {
            K.wcUri = void 0, K.wcPairingExpiry = void 0, it = void 0
        },
        finalizeWcConnection() {
            var n, r, s;
            const {
                wcLinking: t,
                recentWallet: e
            } = _.state;
            t && g.setWalletConnectDeepLink(t), e && g.setAppKitRecent(e), ne.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                    method: t ? "mobile" : "qrcode",
                    name: ((r = (n = B.state.data) == null ? void 0 : n.wallet) == null ? void 0 : r.name) || "Unknown",
                    caipNetworkId: (s = u.getActiveCaipNetwork()) == null ? void 0 : s.caipNetworkId
                }
            })
        },
        setWcBasic(t) {
            K.wcBasic = t
        },
        setUri(t) {
            K.wcUri = t, K.wcPairingExpiry = O.getPairingExpiry()
        },
        setWcLinking(t) {
            K.wcLinking = t
        },
        setWcError(t) {
            K.wcError = t, K.buffering = !1
        },
        setRecentWallet(t) {
            K.recentWallet = t
        },
        setBuffering(t) {
            K.buffering = t
        },
        setStatus(t) {
            K.status = t
        },
        setIsSwitchingConnection(t) {
            K.isSwitchingConnection = t
        },
        async disconnect({
            id: t,
            namespace: e,
            initialDisconnect: n
        } = {}) {
            var r;
            try {
                await ((r = _._getClient()) == null ? void 0 : r.disconnect({
                    id: t,
                    chainNamespace: e,
                    initialDisconnect: n
                }))
            } catch (s) {
                throw new vt("Failed to disconnect", "INTERNAL_SDK_ERROR", s)
            }
        },
        setConnections(t, e) {
            const n = new Map(K.connections);
            n.set(e, t), K.connections = n
        },
        async handleAuthAccountSwitch({
            address: t,
            namespace: e
        }) {
            var s, a;
            const n = (a = (s = R.state.user) == null ? void 0 : s.accounts) == null ? void 0 : a.find(o => o.type === "smartAccount"),
                r = n && n.address.toLowerCase() === t.toLowerCase() && kt.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
            await _.setPreferredAccountType(r, e)
        },
        async handleActiveConnection({
            connection: t,
            namespace: e,
            address: n
        }) {
            const r = E.getConnectorById(t.connectorId),
                s = t.connectorId === f.CONNECTOR_ID.AUTH;
            if (!r) throw new Error(`No connector found for connection: ${t.connectorId}`);
            if (s) s && n && await _.handleAuthAccountSwitch({
                address: n,
                namespace: e
            });
            else {
                const a = await _.connectExternal({
                    id: r.id,
                    type: r.type,
                    provider: r.provider,
                    address: n,
                    chain: e
                }, e);
                return a == null ? void 0 : a.address
            }
            return n
        },
        async handleDisconnectedConnection({
            connection: t,
            namespace: e,
            address: n,
            closeModalOnConnect: r
        }) {
            var d, p;
            const s = E.getConnectorById(t.connectorId),
                a = (p = (d = t.auth) == null ? void 0 : d.name) == null ? void 0 : p.toLowerCase(),
                o = t.connectorId === f.CONNECTOR_ID.AUTH,
                i = t.connectorId === f.CONNECTOR_ID.WALLET_CONNECT;
            if (!s) throw new Error(`No connector found for connection: ${t.connectorId}`);
            let l;
            if (o)
                if (a && kt.isSocialProvider(a)) {
                    const {
                        address: h
                    } = await kt.connectSocial({
                        social: a,
                        closeModalOnConnect: r,
                        onOpenFarcaster() {
                            z.open({
                                view: "ConnectingFarcaster"
                            })
                        },
                        onConnect() {
                            B.replace("ProfileWallets")
                        }
                    });
                    l = h
                } else {
                    const {
                        address: h
                    } = await kt.connectEmail({
                        closeModalOnConnect: r,
                        onOpen() {
                            z.open({
                                view: "EmailLogin"
                            })
                        },
                        onConnect() {
                            B.replace("ProfileWallets")
                        }
                    });
                    l = h
                }
            else if (i) {
                const {
                    address: h
                } = await kt.connectWalletConnect({
                    walletConnect: !0,
                    connector: s,
                    closeModalOnConnect: r,
                    onOpen(y) {
                        z.open({
                            view: y ? "AllWallets" : "ConnectingWalletConnect"
                        })
                    },
                    onConnect() {
                        B.replace("ProfileWallets")
                    }
                });
                l = h
            } else {
                const h = await _.connectExternal({
                    id: s.id,
                    type: s.type,
                    provider: s.provider,
                    chain: e
                }, e);
                h && (l = h.address)
            }
            return o && n && await _.handleAuthAccountSwitch({
                address: n,
                namespace: e
            }), l
        },
        async switchConnection({
            connection: t,
            address: e,
            namespace: n,
            closeModalOnConnect: r,
            onChange: s
        }) {
            let a;
            const o = R.getCaipAddress(n);
            if (o) {
                const {
                    address: l
                } = Te.parseCaipAddress(o);
                a = l
            }
            const i = hn.getConnectionStatus(t, n);
            switch (i) {
                case "connected":
                case "active":
                    {
                        const l = await _.handleActiveConnection({
                            connection: t,
                            namespace: n,
                            address: e
                        });
                        if (a && l) {
                            const d = l.toLowerCase() !== a.toLowerCase();
                            s == null || s({
                                address: l,
                                namespace: n,
                                hasSwitchedAccount: d,
                                hasSwitchedWallet: i === "active"
                            })
                        }
                        break
                    }
                case "disconnected":
                    {
                        const l = await _.handleDisconnectedConnection({
                            connection: t,
                            namespace: n,
                            address: e,
                            closeModalOnConnect: r
                        });l && (s == null || s({
                            address: l,
                            namespace: n,
                            hasSwitchedAccount: !0,
                            hasSwitchedWallet: !0
                        }));
                        break
                    }
                default:
                    throw new Error(`Invalid connection status: ${i}`)
            }
        }
    },
    _ = Re(Ps),
    mt = ae({
        loading: !1,
        open: !1,
        selectedNetworkId: void 0,
        activeChain: void 0,
        initialized: !1
    }),
    Le = {
        state: mt,
        subscribe(t) {
            return fe(mt, () => t(mt))
        },
        subscribeOpen(t) {
            return Ce(mt, "open", t)
        },
        set(t) {
            Object.assign(mt, { ...mt,
                ...t
            })
        }
    },
    Us = {
        async getTokenList() {
            var r;
            const t = u.state.activeCaipNetwork,
                e = await M.fetchSwapTokens({
                    chainId: t == null ? void 0 : t.caipNetworkId
                });
            return ((r = e == null ? void 0 : e.tokens) == null ? void 0 : r.map(s => ({ ...s,
                eip2612: !1,
                quantity: {
                    decimals: "0",
                    numeric: "0"
                },
                price: 0,
                value: 0
            }))) || []
        },
        async fetchGasPrice() {
            var e;
            const t = u.state.activeCaipNetwork;
            if (!t) return null;
            try {
                switch (t.chainNamespace) {
                    case "solana":
                        const n = (e = await (_ == null ? void 0 : _.estimateGas({
                            chainNamespace: "solana"
                        }))) == null ? void 0 : e.toString();
                        return {
                            standard: n,
                            fast: n,
                            instant: n
                        };
                    case "eip155":
                    default:
                        return await M.fetchGasPrice({
                            chainId: t.caipNetworkId
                        })
                }
            } catch {
                return null
            }
        },
        async fetchSwapAllowance({
            tokenAddress: t,
            userAddress: e,
            sourceTokenAmount: n,
            sourceTokenDecimals: r
        }) {
            const s = await M.fetchSwapAllowance({
                tokenAddress: t,
                userAddress: e
            });
            if (s != null && s.allowance && n && r) {
                const a = _.parseUnits(n, r) || 0;
                return BigInt(s.allowance) >= a
            }
            return !1
        },
        async getMyTokensWithBalance(t) {
            const e = await zn.getMyTokensWithBalance(t);
            return R.setTokenBalance(e, u.state.activeChain), this.mapBalancesToSwapTokens(e)
        },
        mapBalancesToSwapTokens(t) {
            return (t == null ? void 0 : t.map(e => ({ ...e,
                address: e != null && e.address ? e.address : Nr(),
                decimals: parseInt(e.quantity.decimals, 10),
                logoUri: e.iconUrl,
                eip2612: !1
            }))) || []
        }
    },
    te = ae({
        tokenBalances: [],
        loading: !1
    }),
    xs = {
        state: te,
        subscribe(t) {
            return fe(te, () => t(te))
        },
        subscribeKey(t, e) {
            return Ce(te, t, e)
        },
        setToken(t) {
            t && (te.token = ut(t))
        },
        setTokenAmount(t) {
            te.sendTokenAmount = t
        },
        setReceiverAddress(t) {
            te.receiverAddress = t
        },
        setReceiverProfileImageUrl(t) {
            te.receiverProfileImageUrl = t
        },
        setReceiverProfileName(t) {
            te.receiverProfileName = t
        },
        setNetworkBalanceInUsd(t) {
            te.networkBalanceInUSD = t
        },
        setLoading(t) {
            te.loading = t
        },
        async sendToken() {
            var t;
            try {
                switch (Q.setLoading(!0), (t = u.state.activeCaipNetwork) == null ? void 0 : t.chainNamespace) {
                    case "eip155":
                        await Q.sendEvmToken();
                        return;
                    case "solana":
                        await Q.sendSolanaToken();
                        return;
                    default:
                        throw new Error("Unsupported chain")
                }
            } finally {
                Q.setLoading(!1)
            }
        },
        async sendEvmToken() {
            var n, r, s;
            const t = u.state.activeChain;
            if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
            const e = We(t);
            if (!Q.state.sendTokenAmount || !Q.state.receiverAddress) throw new Error("An amount and receiver address are required");
            if (!Q.state.token) throw new Error("A token is required");
            (n = Q.state.token) != null && n.address ? (ne.sendEvent({
                type: "track",
                event: "SEND_INITIATED",
                properties: {
                    isSmartAccount: e === pe.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: Q.state.token.address,
                    amount: Q.state.sendTokenAmount,
                    network: ((r = u.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) || ""
                }
            }), await Q.sendERC20Token({
                receiverAddress: Q.state.receiverAddress,
                tokenAddress: Q.state.token.address,
                sendTokenAmount: Q.state.sendTokenAmount,
                decimals: Q.state.token.quantity.decimals
            })) : (ne.sendEvent({
                type: "track",
                event: "SEND_INITIATED",
                properties: {
                    isSmartAccount: e === pe.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: Q.state.token.symbol || "",
                    amount: Q.state.sendTokenAmount,
                    network: ((s = u.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) || ""
                }
            }), await Q.sendNativeToken({
                receiverAddress: Q.state.receiverAddress,
                sendTokenAmount: Q.state.sendTokenAmount,
                decimals: Q.state.token.quantity.decimals
            }))
        },
        async fetchTokenBalance(t) {
            var a, o;
            te.loading = !0;
            const e = (a = u.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId,
                n = (o = u.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace,
                r = u.state.activeCaipAddress,
                s = r ? O.getPlainAddress(r) : void 0;
            if (te.lastRetry && !O.isAllowedRetry(te.lastRetry, 30 * ee.ONE_SEC_MS)) return te.loading = !1, [];
            try {
                if (s && e && n) {
                    const i = await zn.getMyTokensWithBalance();
                    return te.tokenBalances = i, te.lastRetry = void 0, i
                }
            } catch (i) {
                te.lastRetry = Date.now(), t == null || t(i), $e.showError("Token Balance Unavailable")
            } finally {
                te.loading = !1
            }
            return []
        },
        fetchNetworkBalance() {
            if (te.tokenBalances.length === 0) return;
            const t = Us.mapBalancesToSwapTokens(te.tokenBalances);
            if (!t) return;
            const e = t.find(n => n.address === Nr());
            e && (te.networkBalanceInUSD = e ? es.multiply(e.quantity.numeric, e.price).toString() : "0")
        },
        async sendNativeToken(t) {
            var a, o, i;
            B.pushTransactionStack({});
            const e = t.receiverAddress,
                n = R.state.address,
                r = _.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
            await _.sendTransaction({
                chainNamespace: f.CHAIN.EVM,
                to: e,
                address: n,
                data: "0x",
                value: r ? ? BigInt(0)
            }), ne.sendEvent({
                type: "track",
                event: "SEND_SUCCESS",
                properties: {
                    isSmartAccount: We("eip155") === pe.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: ((a = Q.state.token) == null ? void 0 : a.symbol) || "",
                    amount: t.sendTokenAmount,
                    network: ((o = u.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId) || ""
                }
            }), (i = _._getClient()) == null || i.updateBalance("eip155"), Q.resetSend()
        },
        async sendERC20Token(t) {
            B.pushTransactionStack({
                onSuccess() {
                    B.replace("Account")
                }
            });
            const e = _.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
            if (R.state.address && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
                const n = O.getPlainAddress(t.tokenAddress);
                if (!n) throw new Error("SendController:sendERC20Token - tokenAddress is required");
                await _.writeContract({
                    fromAddress: R.state.address,
                    tokenAddress: n,
                    args: [t.receiverAddress, e ? ? BigInt(0)],
                    method: "transfer",
                    abi: ss.getERC20Abi(n),
                    chainNamespace: f.CHAIN.EVM
                }), Q.resetSend()
            }
        },
        async sendSolanaToken() {
            var t;
            if (!Q.state.sendTokenAmount || !Q.state.receiverAddress) throw new Error("An amount and receiver address are required");
            B.pushTransactionStack({
                onSuccess() {
                    B.replace("Account")
                }
            }), await _.sendTransaction({
                chainNamespace: "solana",
                to: Q.state.receiverAddress,
                value: Q.state.sendTokenAmount
            }), (t = _._getClient()) == null || t.updateBalance("solana"), Q.resetSend()
        },
        resetSend() {
            te.token = void 0, te.sendTokenAmount = void 0, te.receiverAddress = void 0, te.receiverProfileImageUrl = void 0, te.receiverProfileName = void 0, te.loading = !1, te.tokenBalances = []
        }
    },
    Q = Re(xs),
    On = {
        currentTab: 0,
        tokenBalance: [],
        smartAccountDeployed: !1,
        addressLabels: new Map,
        user: void 0,
        preferredAccountType: void 0
    },
    sn = {
        caipNetwork: void 0,
        supportsAllNetworks: !0,
        smartAccountEnabledNetworks: []
    },
    A = ae({
        chains: Qr(),
        activeCaipAddress: void 0,
        activeChain: void 0,
        activeCaipNetwork: void 0,
        noAdapters: !1,
        universalAdapter: {
            networkControllerClient: void 0,
            connectionControllerClient: void 0
        },
        isSwitchingNamespace: !1
    }),
    Ls = {
        state: A,
        subscribe(t) {
            return fe(A, () => {
                t(A)
            })
        },
        subscribeKey(t, e) {
            return Ce(A, t, e)
        },
        subscribeChainProp(t, e, n) {
            let r;
            return fe(A.chains, () => {
                var a;
                const s = n || A.activeChain;
                if (s) {
                    const o = (a = A.chains.get(s)) == null ? void 0 : a[t];
                    r !== o && (r = o, e(o))
                }
            })
        },
        initialize(t, e, n) {
            const {
                chainId: r,
                namespace: s
            } = g.getActiveNetworkProps(), a = e == null ? void 0 : e.find(p => p.id.toString() === (r == null ? void 0 : r.toString())), i = t.find(p => (p == null ? void 0 : p.namespace) === s) || (t == null ? void 0 : t[0]), l = t.map(p => p.namespace).filter(p => p !== void 0), d = m.state.enableEmbedded ? new Set([...l]) : new Set([...(e == null ? void 0 : e.map(p => p.chainNamespace)) ? ? []]);
            ((t == null ? void 0 : t.length) === 0 || !i) && (A.noAdapters = !0), A.noAdapters || (A.activeChain = i == null ? void 0 : i.namespace, A.activeCaipNetwork = a, u.setChainNetworkData(i == null ? void 0 : i.namespace, {
                caipNetwork: a
            }), A.activeChain && Le.set({
                activeChain: i == null ? void 0 : i.namespace
            })), d.forEach(p => {
                const h = e == null ? void 0 : e.filter(j => j.chainNamespace === p),
                    y = g.getPreferredAccountTypes() || {},
                    b = { ...m.state.defaultAccountTypes,
                        ...y
                    };
                u.state.chains.set(p, {
                    namespace: p,
                    networkState: ae({ ...sn,
                        caipNetwork: h == null ? void 0 : h[0]
                    }),
                    accountState: ae({ ...On,
                        preferredAccountType: b[p]
                    }),
                    caipNetworks: h ? ? [],
                    ...n
                }), u.setRequestedCaipNetworks(h ? ? [], p)
            })
        },
        removeAdapter(t) {
            var e, n;
            if (A.activeChain === t) {
                const r = Array.from(A.chains.entries()).find(([s]) => s !== t);
                if (r) {
                    const s = (n = (e = r[1]) == null ? void 0 : e.caipNetworks) == null ? void 0 : n[0];
                    s && u.setActiveCaipNetwork(s)
                }
            }
            A.chains.delete(t)
        },
        addAdapter(t, {
            networkControllerClient: e,
            connectionControllerClient: n
        }, r) {
            if (!t.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
            A.chains.set(t.namespace, {
                namespace: t.namespace,
                networkState: { ...sn,
                    caipNetwork: r[0]
                },
                accountState: On,
                caipNetworks: r,
                connectionControllerClient: n,
                networkControllerClient: e
            }), u.setRequestedCaipNetworks((r == null ? void 0 : r.filter(s => s.chainNamespace === t.namespace)) ? ? [], t.namespace)
        },
        addNetwork(t) {
            var n;
            const e = A.chains.get(t.chainNamespace);
            if (e) {
                const r = [...e.caipNetworks || []];
                (n = e.caipNetworks) != null && n.find(s => s.id === t.id) || r.push(t), A.chains.set(t.chainNamespace, { ...e,
                    caipNetworks: r
                }), u.setRequestedCaipNetworks(r, t.chainNamespace), E.filterByNamespace(t.chainNamespace, !0)
            }
        },
        removeNetwork(t, e) {
            var r, s, a;
            const n = A.chains.get(t);
            if (n) {
                const o = ((r = A.activeCaipNetwork) == null ? void 0 : r.id) === e,
                    i = [...((s = n.caipNetworks) == null ? void 0 : s.filter(l => l.id !== e)) || []];
                o && ((a = n == null ? void 0 : n.caipNetworks) != null && a[0]) && u.setActiveCaipNetwork(n.caipNetworks[0]), A.chains.set(t, { ...n,
                    caipNetworks: i
                }), u.setRequestedCaipNetworks(i || [], t), i.length === 0 && E.filterByNamespace(t, !1)
            }
        },
        setAdapterNetworkState(t, e) {
            const n = A.chains.get(t);
            n && (n.networkState = { ...n.networkState || sn,
                ...e
            }, A.chains.set(t, n))
        },
        setChainAccountData(t, e, n = !0) {
            if (!t) throw new Error("Chain is required to update chain account data");
            const r = A.chains.get(t);
            if (r) {
                const s = { ...r.accountState || On,
                    ...e
                };
                A.chains.set(t, { ...r,
                    accountState: s
                }), (A.chains.size === 1 || A.activeChain === t) && (e.caipAddress && (A.activeCaipAddress = e.caipAddress), R.replaceState(s))
            }
        },
        setChainNetworkData(t, e) {
            if (!t) return;
            const n = A.chains.get(t);
            if (n) {
                const r = { ...n.networkState || sn,
                    ...e
                };
                A.chains.set(t, { ...n,
                    networkState: r
                })
            }
        },
        setAccountProp(t, e, n, r = !0) {
            u.setChainAccountData(n, {
                [t]: e
            }, r)
        },
        setActiveNamespace(t) {
            var r, s;
            A.activeChain = t;
            const e = t ? A.chains.get(t) : void 0,
                n = (r = e == null ? void 0 : e.networkState) == null ? void 0 : r.caipNetwork;
            n != null && n.id && t && (A.activeCaipAddress = (s = e == null ? void 0 : e.accountState) == null ? void 0 : s.caipAddress, A.activeCaipNetwork = n, u.setChainNetworkData(t, {
                caipNetwork: n
            }), g.setActiveCaipNetworkId(n == null ? void 0 : n.caipNetworkId), Le.set({
                activeChain: t,
                selectedNetworkId: n == null ? void 0 : n.caipNetworkId
            }))
        },
        setActiveCaipNetwork(t) {
            var r, s, a;
            if (!t) return;
            A.activeChain !== t.chainNamespace && u.setIsSwitchingNamespace(!0);
            const e = A.chains.get(t.chainNamespace);
            A.activeChain = t.chainNamespace, A.activeCaipNetwork = t, u.setChainNetworkData(t.chainNamespace, {
                caipNetwork: t
            }), (r = e == null ? void 0 : e.accountState) != null && r.address ? A.activeCaipAddress = `${t.chainNamespace}:${t.id}:${(s=e==null?void 0:e.accountState)==null?void 0:s.address}` : A.activeCaipAddress = void 0, u.setAccountProp("caipAddress", A.activeCaipAddress, t.chainNamespace), e && R.replaceState(e.accountState), Q.resetSend(), Le.set({
                activeChain: A.activeChain,
                selectedNetworkId: (a = A.activeCaipNetwork) == null ? void 0 : a.caipNetworkId
            }), g.setActiveCaipNetworkId(t.caipNetworkId), !u.checkIfSupportedNetwork(t.chainNamespace) && m.state.enableNetworkSwitch && !m.state.allowUnsupportedChain && !_.state.wcBasic && u.showUnsupportedChainUI()
        },
        addCaipNetwork(t) {
            var n;
            if (!t) return;
            const e = A.chains.get(t.chainNamespace);
            e && ((n = e == null ? void 0 : e.caipNetworks) == null || n.push(t))
        },
        async switchActiveNamespace(t) {
            var s;
            if (!t) return;
            const e = t !== u.state.activeChain,
                n = (s = u.getNetworkData(t)) == null ? void 0 : s.caipNetwork,
                r = u.getCaipNetworkByNamespace(t, n == null ? void 0 : n.id);
            e && r && await u.switchActiveNetwork(r)
        },
        async switchActiveNetwork(t) {
            var a;
            const e = u.state.activeChain;
            if (!e) throw new Error("ChainController:switchActiveNetwork - namespace is required");
            const n = u.state.chains.get(e),
                r = !((a = n == null ? void 0 : n.caipNetworks) != null && a.some(o => {
                    var i;
                    return o.id === ((i = A.activeCaipNetwork) == null ? void 0 : i.id)
                })),
                s = u.getNetworkControllerClient(t.chainNamespace);
            if (s) {
                try {
                    await s.switchCaipNetwork(t), r && z.close()
                } catch {
                    B.goBack()
                }
                ne.sendEvent({
                    type: "track",
                    event: "SWITCH_NETWORK",
                    properties: {
                        network: t.caipNetworkId
                    }
                })
            }
        },
        getNetworkControllerClient(t) {
            const e = t || A.activeChain;
            if (!e) throw new Error("ChainController:getNetworkControllerClient - chain is required");
            const n = A.chains.get(e);
            if (!n) throw new Error("Chain adapter not found");
            if (!n.networkControllerClient) throw new Error("NetworkController client not set");
            return n.networkControllerClient
        },
        getConnectionControllerClient(t) {
            const e = t || A.activeChain;
            if (!e) throw new Error("Chain is required to get connection controller client");
            const n = A.chains.get(e);
            if (!(n != null && n.connectionControllerClient)) throw new Error("ConnectionController client not set");
            return n.connectionControllerClient
        },
        getNetworkProp(t, e) {
            var r;
            const n = (r = A.chains.get(e)) == null ? void 0 : r.networkState;
            if (n) return n[t]
        },
        getRequestedCaipNetworks(t) {
            const e = A.chains.get(t),
                {
                    approvedCaipNetworkIds: n = [],
                    requestedCaipNetworks: r = []
                } = (e == null ? void 0 : e.networkState) || {};
            return O.sortRequestedNetworks(n, r).filter(o => o == null ? void 0 : o.id)
        },
        getAllRequestedCaipNetworks() {
            const t = [];
            return A.chains.forEach(e => {
                if (!e.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
                const n = u.getRequestedCaipNetworks(e.namespace);
                t.push(...n)
            }), t
        },
        setRequestedCaipNetworks(t, e) {
            u.setAdapterNetworkState(e, {
                requestedCaipNetworks: t
            });
            const r = u.getAllRequestedCaipNetworks().map(a => a.chainNamespace),
                s = Array.from(new Set(r));
            E.filterByNamespaces(s)
        },
        getAllApprovedCaipNetworkIds() {
            const t = [];
            return A.chains.forEach(e => {
                if (!e.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
                const n = u.getApprovedCaipNetworkIds(e.namespace);
                t.push(...n)
            }), t
        },
        getActiveCaipNetwork(t) {
            var e, n;
            return t ? (n = (e = A.chains.get(t)) == null ? void 0 : e.networkState) == null ? void 0 : n.caipNetwork : A.activeCaipNetwork
        },
        getActiveCaipAddress() {
            return A.activeCaipAddress
        },
        getApprovedCaipNetworkIds(t) {
            var r;
            const e = A.chains.get(t);
            return ((r = e == null ? void 0 : e.networkState) == null ? void 0 : r.approvedCaipNetworkIds) || []
        },
        async setApprovedCaipNetworksData(t) {
            const e = u.getNetworkControllerClient(),
                n = await (e == null ? void 0 : e.getApprovedCaipNetworksData());
            u.setAdapterNetworkState(t, {
                approvedCaipNetworkIds: n == null ? void 0 : n.approvedCaipNetworkIds,
                supportsAllNetworks: n == null ? void 0 : n.supportsAllNetworks
            })
        },
        checkIfSupportedNetwork(t, e) {
            var s;
            const n = e || ((s = A.activeCaipNetwork) == null ? void 0 : s.caipNetworkId),
                r = u.getRequestedCaipNetworks(t);
            return r.length ? r == null ? void 0 : r.some(a => a.caipNetworkId === n) : !0
        },
        checkIfSupportedChainId(t) {
            if (!A.activeChain) return !0;
            const e = u.getRequestedCaipNetworks(A.activeChain);
            return e == null ? void 0 : e.some(n => n.id === t)
        },
        setSmartAccountEnabledNetworks(t, e) {
            u.setAdapterNetworkState(e, {
                smartAccountEnabledNetworks: t
            })
        },
        checkIfSmartAccountEnabled() {
            var r;
            const t = Er.caipNetworkIdToNumber((r = A.activeCaipNetwork) == null ? void 0 : r.caipNetworkId),
                e = A.activeChain;
            if (!e || !t) return !1;
            const n = u.getNetworkProp("smartAccountEnabledNetworks", e);
            return !!(n != null && n.includes(Number(t)))
        },
        showUnsupportedChainUI() {
            z.open({
                view: "UnsupportedChain"
            })
        },
        checkIfNamesSupported() {
            const t = A.activeCaipNetwork;
            return !!(t != null && t.chainNamespace && ee.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))
        },
        resetNetwork(t) {
            u.setAdapterNetworkState(t, {
                approvedCaipNetworkIds: void 0,
                supportsAllNetworks: !0
            })
        },
        resetAccount(t) {
            var s, a;
            const e = t;
            if (!e) throw new Error("Chain is required to set account prop");
            const n = (a = (s = u.state.chains.get(e)) == null ? void 0 : s.accountState) == null ? void 0 : a.preferredAccountType,
                r = m.state.defaultAccountTypes[e];
            A.activeCaipAddress = void 0, u.setChainAccountData(e, {
                smartAccountDeployed: !1,
                currentTab: 0,
                caipAddress: void 0,
                address: void 0,
                balance: void 0,
                balanceSymbol: void 0,
                profileName: void 0,
                profileImage: void 0,
                addressExplorerUrl: void 0,
                tokenBalance: [],
                connectedWalletInfo: void 0,
                preferredAccountType: r || n,
                socialProvider: void 0,
                socialWindow: void 0,
                farcasterUrl: void 0,
                user: void 0,
                status: "disconnected"
            }), E.removeConnectorId(e)
        },
        setIsSwitchingNamespace(t) {
            A.isSwitchingNamespace = t
        },
        getFirstCaipNetworkSupportsAuthConnector() {
            var n, r;
            const t = [];
            let e;
            if (A.chains.forEach(s => {
                    f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(a => a === s.namespace) && s.namespace && t.push(s.namespace)
                }), t.length > 0) {
                const s = t[0];
                return e = s ? (r = (n = A.chains.get(s)) == null ? void 0 : n.caipNetworks) == null ? void 0 : r[0] : void 0, e
            }
        },
        getAccountData(t) {
            var n;
            const e = t || A.activeChain;
            if (e) return (n = u.state.chains.get(e)) == null ? void 0 : n.accountState
        },
        getNetworkData(t) {
            var n;
            const e = t || A.activeChain;
            if (e) return (n = u.state.chains.get(e)) == null ? void 0 : n.networkState
        },
        getCaipNetworkByNamespace(t, e) {
            var s, a, o;
            if (!t) return;
            const n = u.state.chains.get(t),
                r = (s = n == null ? void 0 : n.caipNetworks) == null ? void 0 : s.find(i => i.id === e);
            return r || ((a = n == null ? void 0 : n.networkState) == null ? void 0 : a.caipNetwork) || ((o = n == null ? void 0 : n.caipNetworks) == null ? void 0 : o[0])
        },
        getRequestedCaipNetworkIds() {
            const t = E.state.filterByNamespace;
            return (t ? [A.chains.get(t)] : Array.from(A.chains.values())).flatMap(n => (n == null ? void 0 : n.caipNetworks) || []).map(n => n.caipNetworkId)
        },
        getCaipNetworks(t) {
            return t ? u.getRequestedCaipNetworks(t) : u.getAllRequestedCaipNetworks()
        },
        setLastConnectedSIWECaipNetwork(t) {
            A.lastConnectedSIWECaipNetwork = t
        },
        getLastConnectedSIWECaipNetwork() {
            return A.lastConnectedSIWECaipNetwork
        }
    },
    u = Re(Ls),
    Ds = {
        purchaseCurrencies: [{
            id: "2b92315d-eab7-5bef-84fa-089a131333f5",
            name: "USD Coin",
            symbol: "USDC",
            networks: [{
                name: "ethereum-mainnet",
                display_name: "Ethereum",
                chain_id: "1",
                contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            }, {
                name: "polygon-mainnet",
                display_name: "Polygon",
                chain_id: "137",
                contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
            }]
        }, {
            id: "2b92315d-eab7-5bef-84fa-089a131333f5",
            name: "Ether",
            symbol: "ETH",
            networks: [{
                name: "ethereum-mainnet",
                display_name: "Ethereum",
                chain_id: "1",
                contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            }, {
                name: "polygon-mainnet",
                display_name: "Polygon",
                chain_id: "137",
                contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
            }]
        }],
        paymentCurrencies: [{
            id: "USD",
            payment_method_limits: [{
                id: "card",
                min: "10.00",
                max: "7500.00"
            }, {
                id: "ach_bank_account",
                min: "10.00",
                max: "25000.00"
            }]
        }, {
            id: "EUR",
            payment_method_limits: [{
                id: "card",
                min: "10.00",
                max: "7500.00"
            }, {
                id: "ach_bank_account",
                min: "10.00",
                max: "25000.00"
            }]
        }]
    },
    vr = O.getBlockchainApiUrl(),
    Ae = ae({
        clientId: null,
        api: new Qt({
            baseUrl: vr,
            clientId: null
        }),
        supportedChains: {
            http: [],
            ws: []
        }
    }),
    M = {
        state: Ae,
        async get(t) {
            const {
                st: e,
                sv: n
            } = M.getSdkProperties(), r = m.state.projectId, s = { ...t.params || {},
                st: e,
                sv: n,
                projectId: r
            };
            return Ae.api.get({ ...t,
                params: s
            })
        },
        getSdkProperties() {
            const {
                sdkType: t,
                sdkVersion: e
            } = m.state;
            return {
                st: t || "unknown",
                sv: e || "unknown"
            }
        },
        async isNetworkSupported(t) {
            if (!t) return !1;
            try {
                Ae.supportedChains.http.length || await M.getSupportedNetworks()
            } catch {
                return !1
            }
            return Ae.supportedChains.http.includes(t)
        },
        async getSupportedNetworks() {
            try {
                const t = await M.get({
                    path: "v1/supported-chains"
                });
                return Ae.supportedChains = t, t
            } catch {
                return Ae.supportedChains
            }
        },
        async fetchIdentity({
            address: t,
            caipNetworkId: e
        }) {
            if (!await M.isNetworkSupported(e)) return {
                avatar: "",
                name: ""
            };
            const r = g.getIdentityFromCacheForAddress(t);
            if (r) return r;
            const s = await M.get({
                path: `/v1/identity/${t}`,
                params: {
                    sender: u.state.activeCaipAddress ? O.getPlainAddress(u.state.activeCaipAddress) : void 0
                }
            });
            return g.updateIdentityCache({
                address: t,
                identity: s,
                timestamp: Date.now()
            }), s
        },
        async fetchTransactions({
            account: t,
            cursor: e,
            signal: n,
            cache: r,
            chainId: s
        }) {
            var l;
            if (!await M.isNetworkSupported((l = u.state.activeCaipNetwork) == null ? void 0 : l.caipNetworkId)) return {
                data: [],
                next: void 0
            };
            const o = g.getTransactionsCacheForAddress({
                address: t,
                chainId: s
            });
            if (o) return o;
            const i = await M.get({
                path: `/v1/account/${t}/history`,
                params: {
                    cursor: e,
                    chainId: s
                },
                signal: n,
                cache: r
            });
            return g.updateTransactionsCache({
                address: t,
                chainId: s,
                timestamp: Date.now(),
                transactions: i
            }), i
        },
        async fetchSwapQuote({
            amount: t,
            userAddress: e,
            from: n,
            to: r,
            gasPrice: s
        }) {
            var o;
            return await M.isNetworkSupported((o = u.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId) ? M.get({
                path: "/v1/convert/quotes",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    amount: t,
                    userAddress: e,
                    from: n,
                    to: r,
                    gasPrice: s
                }
            }) : {
                quotes: []
            }
        },
        async fetchSwapTokens({
            chainId: t
        }) {
            var n;
            return await M.isNetworkSupported((n = u.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? M.get({
                path: "/v1/convert/tokens",
                params: {
                    chainId: t
                }
            }) : {
                tokens: []
            }
        },
        async fetchTokenPrice({
            addresses: t
        }) {
            var s;
            if (!await M.isNetworkSupported((s = u.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId)) return {
                fungibles: []
            };
            const n = g.getTokenPriceCacheForAddresses(t);
            if (n) return n;
            const r = await Ae.api.post({
                path: "/v1/fungible/price",
                body: {
                    currency: "usd",
                    addresses: t,
                    projectId: m.state.projectId
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return g.updateTokenPriceCache({
                addresses: t,
                timestamp: Date.now(),
                tokenPrice: r
            }), r
        },
        async fetchSwapAllowance({
            tokenAddress: t,
            userAddress: e
        }) {
            var r;
            return await M.isNetworkSupported((r = u.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) ? M.get({
                path: "/v1/convert/allowance",
                params: {
                    tokenAddress: t,
                    userAddress: e
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                allowance: "0"
            }
        },
        async fetchGasPrice({
            chainId: t
        }) {
            var s;
            const {
                st: e,
                sv: n
            } = M.getSdkProperties();
            if (!await M.isNetworkSupported((s = u.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId)) throw new Error("Network not supported for Gas Price");
            return M.get({
                path: "/v1/convert/gas-price",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    chainId: t,
                    st: e,
                    sv: n
                }
            })
        },
        async generateSwapCalldata({
            amount: t,
            from: e,
            to: n,
            userAddress: r,
            disableEstimate: s
        }) {
            var o;
            if (!await M.isNetworkSupported((o = u.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId)) throw new Error("Network not supported for Swaps");
            return Ae.api.post({
                path: "/v1/convert/build-transaction",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    amount: t,
                    eip155: {
                        slippage: ee.CONVERT_SLIPPAGE_TOLERANCE
                    },
                    projectId: m.state.projectId,
                    from: e,
                    to: n,
                    userAddress: r,
                    disableEstimate: s
                }
            })
        },
        async generateApproveCalldata({
            from: t,
            to: e,
            userAddress: n
        }) {
            var o;
            const {
                st: r,
                sv: s
            } = M.getSdkProperties();
            if (!await M.isNetworkSupported((o = u.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId)) throw new Error("Network not supported for Swaps");
            return M.get({
                path: "/v1/convert/build-approve",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    userAddress: n,
                    from: t,
                    to: e,
                    st: r,
                    sv: s
                }
            })
        },
        async getBalance(t, e, n) {
            var d;
            const {
                st: r,
                sv: s
            } = M.getSdkProperties();
            if (!await M.isNetworkSupported((d = u.state.activeCaipNetwork) == null ? void 0 : d.caipNetworkId)) return $e.showError("Token Balance Unavailable"), {
                balances: []
            };
            const o = `${e}:${t}`,
                i = g.getBalanceCacheForCaipAddress(o);
            if (i) return i;
            const l = await M.get({
                path: `/v1/account/${t}/balance`,
                params: {
                    currency: "usd",
                    chainId: e,
                    forceUpdate: n,
                    st: r,
                    sv: s
                }
            });
            return g.updateBalanceCache({
                caipAddress: o,
                balance: l,
                timestamp: Date.now()
            }), l
        },
        async lookupEnsName(t) {
            var n;
            return await M.isNetworkSupported((n = u.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? M.get({
                path: `/v1/profile/account/${t}`,
                params: {
                    apiVersion: "2"
                }
            }) : {
                addresses: {},
                attributes: []
            }
        },
        async reverseLookupEnsName({
            address: t
        }) {
            var n;
            return await M.isNetworkSupported((n = u.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? M.get({
                path: `/v1/profile/reverse/${t}`,
                params: {
                    sender: R.state.address,
                    apiVersion: "2"
                }
            }) : []
        },
        async getEnsNameSuggestions(t) {
            var n;
            return await M.isNetworkSupported((n = u.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? M.get({
                path: `/v1/profile/suggestions/${t}`,
                params: {
                    zone: "reown.id"
                }
            }) : {
                suggestions: []
            }
        },
        async registerEnsName({
            coinType: t,
            address: e,
            message: n,
            signature: r
        }) {
            var a;
            return await M.isNetworkSupported((a = u.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId) ? Ae.api.post({
                path: "/v1/profile/account",
                body: {
                    coin_type: t,
                    address: e,
                    message: n,
                    signature: r
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                success: !1
            }
        },
        async generateOnRampURL({
            destinationWallets: t,
            partnerUserId: e,
            defaultNetwork: n,
            purchaseAmount: r,
            paymentAmount: s
        }) {
            var i;
            return await M.isNetworkSupported((i = u.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) ? (await Ae.api.post({
                path: "/v1/generators/onrampurl",
                params: {
                    projectId: m.state.projectId
                },
                body: {
                    destinationWallets: t,
                    defaultNetwork: n,
                    partnerUserId: e,
                    defaultExperience: "buy",
                    presetCryptoAmount: r,
                    presetFiatAmount: s
                }
            })).url : ""
        },
        async getOnrampOptions() {
            var e;
            if (!await M.isNetworkSupported((e = u.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId)) return {
                paymentCurrencies: [],
                purchaseCurrencies: []
            };
            try {
                return await M.get({
                    path: "/v1/onramp/options"
                })
            } catch {
                return Ds
            }
        },
        async getOnrampQuote({
            purchaseCurrency: t,
            paymentCurrency: e,
            amount: n,
            network: r
        }) {
            var s;
            try {
                return await M.isNetworkSupported((s = u.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? await Ae.api.post({
                    path: "/v1/onramp/quote",
                    params: {
                        projectId: m.state.projectId
                    },
                    body: {
                        purchaseCurrency: t,
                        paymentCurrency: e,
                        amount: n,
                        network: r
                    }
                }) : null
            } catch {
                return {
                    networkFee: {
                        amount: n,
                        currency: e.id
                    },
                    paymentSubtotal: {
                        amount: n,
                        currency: e.id
                    },
                    paymentTotal: {
                        amount: n,
                        currency: e.id
                    },
                    purchaseAmount: {
                        amount: n,
                        currency: e.id
                    },
                    quoteId: "mocked-quote-id"
                }
            }
        },
        async getSmartSessions(t) {
            var n;
            return await M.isNetworkSupported((n = u.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? M.get({
                path: `/v1/sessions/${t}`
            }) : []
        },
        async revokeSmartSession(t, e, n) {
            var s;
            return await M.isNetworkSupported((s = u.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? Ae.api.post({
                path: `/v1/sessions/${t}/revoke`,
                params: {
                    projectId: m.state.projectId
                },
                body: {
                    pci: e,
                    signature: n
                }
            }) : {
                success: !1
            }
        },
        setClientId(t) {
            Ae.clientId = t, Ae.api = new Qt({
                baseUrl: vr,
                clientId: t
            })
        }
    },
    kn = {
        createBalance(t, e) {
            const n = {
                name: t.metadata.name || "",
                symbol: t.metadata.symbol || "",
                decimals: t.metadata.decimals || 0,
                value: t.metadata.value || 0,
                price: t.metadata.price || 0,
                iconUrl: t.metadata.iconUrl || ""
            };
            return {
                name: n.name,
                symbol: n.symbol,
                chainId: e,
                address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
                value: n.value,
                price: n.price,
                quantity: {
                    decimals: n.decimals.toString(),
                    numeric: this.convertHexToBalance({
                        hex: t.balance,
                        decimals: n.decimals
                    })
                },
                iconUrl: n.iconUrl
            }
        },
        convertHexToBalance({
            hex: t,
            decimals: e
        }) {
            return Mr(BigInt(t), e)
        },
        convertAddressToCAIP10Address(t, e) {
            return `${e}:${t}`
        },
        createCAIP2ChainId(t, e) {
            return `${e}:${parseInt(t,16)}`
        },
        getChainIdHexFromCAIP2ChainId(t) {
            const e = t.split(":");
            if (e.length < 2 || !e[1]) return "0x0";
            const n = e[1],
                r = parseInt(n, 10);
            return isNaN(r) ? "0x0" : `0x${r.toString(16)}`
        },
        isWalletGetAssetsResponse(t) {
            return typeof t != "object" || t === null ? !1 : Object.values(t).every(e => Array.isArray(e) && e.every(n => this.isValidAsset(n)))
        },
        isValidAsset(t) {
            return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string"
        }
    },
    zn = {
        async getMyTokensWithBalance(t) {
            const e = R.state.address,
                n = u.state.activeCaipNetwork,
                r = E.getConnectorId("eip155") === f.CONNECTOR_ID.AUTH;
            if (!e || !n) return [];
            const s = `${n.caipNetworkId}:${e}`,
                a = g.getBalanceCacheForCaipAddress(s);
            if (a) return a.balances;
            if (n.chainNamespace === f.CHAIN.EVM && r) {
                const i = await this.getEIP155Balances(e, n);
                if (i) return this.filterLowQualityTokens(i)
            }
            const o = await M.getBalance(e, n.caipNetworkId, t);
            return this.filterLowQualityTokens(o.balances)
        },
        async getEIP155Balances(t, e) {
            var n, r;
            try {
                const s = kn.getChainIdHexFromCAIP2ChainId(e.caipNetworkId),
                    a = await _.getCapabilities(t);
                if (!((r = (n = a == null ? void 0 : a[s]) == null ? void 0 : n.assetDiscovery) != null && r.supported)) return null;
                const o = await _.walletGetAssets({
                    account: t,
                    chainFilter: [s]
                });
                if (!kn.isWalletGetAssetsResponse(o)) return null;
                const l = (o[s] || []).map(d => kn.createBalance(d, e.caipNetworkId));
                return g.updateBalanceCache({
                    caipAddress: `${e.caipNetworkId}:${t}`,
                    balance: {
                        balances: l
                    },
                    timestamp: Date.now()
                }), l
            } catch {
                return null
            }
        },
        filterLowQualityTokens(t) {
            return t.filter(e => e.quantity.decimals !== "0")
        }
    },
    je = ae({
        currentTab: 0,
        tokenBalance: [],
        smartAccountDeployed: !1,
        addressLabels: new Map
    }),
    Ms = {
        state: je,
        replaceState(t) {
            t && Object.assign(je, ut(t))
        },
        subscribe(t) {
            return u.subscribeChainProp("accountState", e => {
                if (e) return t(e)
            })
        },
        subscribeKey(t, e, n) {
            let r;
            return u.subscribeChainProp("accountState", s => {
                if (s) {
                    const a = s[t];
                    r !== a && (r = a, e(a))
                }
            }, n)
        },
        setStatus(t, e) {
            u.setAccountProp("status", t, e)
        },
        getCaipAddress(t) {
            var e, n;
            if (t) return (n = (e = u.state.chains.get(t)) == null ? void 0 : e.accountState) == null ? void 0 : n.caipAddress
        },
        setCaipAddress(t, e) {
            const n = t ? O.getPlainAddress(t) : void 0;
            e === u.state.activeChain && (u.state.activeCaipAddress = t), u.setAccountProp("caipAddress", t, e), u.setAccountProp("address", n, e)
        },
        setBalance(t, e, n) {
            u.setAccountProp("balance", t, n), u.setAccountProp("balanceSymbol", e, n)
        },
        setProfileName(t, e) {
            u.setAccountProp("profileName", t, e)
        },
        setProfileImage(t, e) {
            u.setAccountProp("profileImage", t, e)
        },
        setUser(t, e) {
            u.setAccountProp("user", t, e)
        },
        setAddressExplorerUrl(t, e) {
            u.setAccountProp("addressExplorerUrl", t, e)
        },
        setSmartAccountDeployed(t, e) {
            u.setAccountProp("smartAccountDeployed", t, e)
        },
        setCurrentTab(t) {
            u.setAccountProp("currentTab", t, u.state.activeChain)
        },
        setTokenBalance(t, e) {
            t && u.setAccountProp("tokenBalance", t, e)
        },
        setShouldUpdateToAddress(t, e) {
            u.setAccountProp("shouldUpdateToAddress", t, e)
        },
        addAddressLabel(t, e, n) {
            var s, a;
            if (!n) return;
            const r = ((a = (s = u.state.chains.get(n)) == null ? void 0 : s.accountState) == null ? void 0 : a.addressLabels) || new Map;
            r.set(t, e), u.setAccountProp("addressLabels", r, n)
        },
        removeAddressLabel(t, e) {
            var r, s;
            if (!e) return;
            const n = ((s = (r = u.state.chains.get(e)) == null ? void 0 : r.accountState) == null ? void 0 : s.addressLabels) || new Map;
            n.delete(t), u.setAccountProp("addressLabels", n, e)
        },
        setConnectedWalletInfo(t, e) {
            u.setAccountProp("connectedWalletInfo", t, e, !1)
        },
        setPreferredAccountType(t, e) {
            u.setAccountProp("preferredAccountType", t, e)
        },
        setSocialProvider(t, e) {
            t && u.setAccountProp("socialProvider", t, e)
        },
        setSocialWindow(t, e) {
            u.setAccountProp("socialWindow", t ? ut(t) : void 0, e)
        },
        setFarcasterUrl(t, e) {
            u.setAccountProp("farcasterUrl", t, e)
        },
        async fetchTokenBalance(t) {
            var a, o;
            je.balanceLoading = !0;
            const e = (a = u.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId,
                n = (o = u.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace,
                r = u.state.activeCaipAddress,
                s = r ? O.getPlainAddress(r) : void 0;
            if (je.lastRetry && !O.isAllowedRetry(je.lastRetry, 30 * ee.ONE_SEC_MS)) return je.balanceLoading = !1, [];
            try {
                if (s && e && n) {
                    const i = await zn.getMyTokensWithBalance();
                    return R.setTokenBalance(i, n), je.lastRetry = void 0, je.balanceLoading = !1, i
                }
            } catch (i) {
                je.lastRetry = Date.now(), t == null || t(i), $e.showError("Token Balance Unavailable")
            } finally {
                je.balanceLoading = !1
            }
            return []
        },
        resetAccount(t) {
            u.resetAccount(t)
        }
    },
    R = Re(Ms),
    Fs = {
        onSwitchNetwork({
            network: t,
            ignoreSwitchConfirmation: e = !1
        }) {
            const n = u.state.activeCaipNetwork,
                r = B.state.data;
            if (t.id === (n == null ? void 0 : n.id)) return;
            const a = R.getCaipAddress(u.state.activeChain),
                o = t.chainNamespace !== u.state.activeChain,
                i = R.getCaipAddress(t.chainNamespace),
                d = E.getConnectorId(u.state.activeChain) === f.CONNECTOR_ID.AUTH,
                p = f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(h => h === t.chainNamespace);
            e || d && p ? B.push("SwitchNetwork", { ...r,
                network: t
            }) : a && o && !i ? B.push("SwitchActiveChain", {
                switchToChain: t.chainNamespace,
                navigateTo: "Connect",
                navigateWithReplace: !0,
                network: t
            }) : B.push("SwitchNetwork", { ...r,
                network: t
            })
        }
    },
    ye = ae({
        loading: !1,
        loadingNamespaceMap: new Map,
        open: !1,
        shake: !1,
        namespace: void 0
    }),
    Ws = {
        state: ye,
        subscribe(t) {
            return fe(ye, () => t(ye))
        },
        subscribeKey(t, e) {
            return Ce(ye, t, e)
        },
        async open(t) {
            var a, o;
            const e = t == null ? void 0 : t.namespace,
                n = u.state.activeChain,
                r = e && e !== n,
                s = (a = u.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : a.caipAddress;
            if (_.state.wcBasic ? x.prefetch({
                    fetchNetworkImages: !1,
                    fetchConnectorImages: !1
                }) : await x.prefetch(), E.setFilterByNamespace(t == null ? void 0 : t.namespace), z.setLoading(!0, e), e && r) {
                const i = ((o = u.getNetworkData(e)) == null ? void 0 : o.caipNetwork) || u.getRequestedCaipNetworks(e)[0];
                i && Fs.onSwitchNetwork({
                    network: i,
                    ignoreSwitchConfirmation: !0
                })
            } else {
                const i = u.state.noAdapters;
                m.state.manualWCControl || i && !s ? O.isMobile() ? B.reset("AllWallets") : B.reset("ConnectingWalletConnectBasic") : t != null && t.view ? B.reset(t.view, t.data) : s ? B.reset("Account") : B.reset("Connect")
            }
            ye.open = !0, Le.set({
                open: !0
            }), ne.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: {
                    connected: !!s
                }
            })
        },
        close() {
            const t = m.state.enableEmbedded,
                e = !!u.state.activeCaipAddress;
            ye.open && ne.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: {
                    connected: e
                }
            }), ye.open = !1, B.reset("Connect"), z.clearLoading(), t ? e ? B.replace("Account") : B.push("Connect") : Le.set({
                open: !1
            }), _.resetUri()
        },
        setLoading(t, e) {
            e && ye.loadingNamespaceMap.set(e, t), ye.loading = t, Le.set({
                loading: t
            })
        },
        clearLoading() {
            ye.loadingNamespaceMap.clear(), ye.loading = !1, Le.set({
                loading: !1
            })
        },
        shake() {
            ye.shake || (ye.shake = !0, setTimeout(() => {
                ye.shake = !1
            }, 500))
        }
    },
    z = Re(Ws),
    Ut = {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [{
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        }, {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }]
    },
    Bn = {
        id: "USD",
        payment_method_limits: [{
            id: "card",
            min: "10.00",
            max: "7500.00"
        }, {
            id: "ach_bank_account",
            min: "10.00",
            max: "25000.00"
        }]
    },
    Bs = {
        providers: _r,
        selectedProvider: null,
        error: null,
        purchaseCurrency: Ut,
        paymentCurrency: Bn,
        purchaseCurrencies: [Ut],
        paymentCurrencies: [],
        quotesLoading: !1
    },
    Y = ae(Bs),
    js = {
        state: Y,
        subscribe(t) {
            return fe(Y, () => t(Y))
        },
        subscribeKey(t, e) {
            return Ce(Y, t, e)
        },
        setSelectedProvider(t) {
            var e, n;
            if (t && t.name === "meld") {
                const r = u.state.activeChain,
                    s = r === f.CHAIN.SOLANA ? "SOL" : "USDC",
                    a = r ? ((n = (e = u.state.chains.get(r)) == null ? void 0 : e.accountState) == null ? void 0 : n.address) ? ? "" : "",
                    o = new URL(t.url);
                o.searchParams.append("publicKey", as), o.searchParams.append("destinationCurrencyCode", s), o.searchParams.append("walletAddress", a), o.searchParams.append("externalCustomerId", m.state.projectId), Y.selectedProvider = { ...t,
                    url: o.toString()
                }
            } else Y.selectedProvider = t
        },
        setOnrampProviders(t) {
            if (Array.isArray(t) && t.every(e => typeof e == "string")) {
                const e = t,
                    n = _r.filter(r => e.includes(r.name));
                Y.providers = n
            } else Y.providers = []
        },
        setPurchaseCurrency(t) {
            Y.purchaseCurrency = t
        },
        setPaymentCurrency(t) {
            Y.paymentCurrency = t
        },
        setPurchaseAmount(t) {
            jn.state.purchaseAmount = t
        },
        setPaymentAmount(t) {
            jn.state.paymentAmount = t
        },
        async getAvailableCurrencies() {
            const t = await M.getOnrampOptions();
            Y.purchaseCurrencies = t.purchaseCurrencies, Y.paymentCurrencies = t.paymentCurrencies, Y.paymentCurrency = t.paymentCurrencies[0] || Bn, Y.purchaseCurrency = t.purchaseCurrencies[0] || Ut, await x.fetchCurrencyImages(t.paymentCurrencies.map(e => e.id)), await x.fetchTokenImages(t.purchaseCurrencies.map(e => e.symbol))
        },
        async getQuote() {
            var t, e;
            Y.quotesLoading = !0;
            try {
                const n = await M.getOnrampQuote({
                    purchaseCurrency: Y.purchaseCurrency,
                    paymentCurrency: Y.paymentCurrency,
                    amount: ((t = Y.paymentAmount) == null ? void 0 : t.toString()) || "0",
                    network: (e = Y.purchaseCurrency) == null ? void 0 : e.symbol
                });
                return Y.quotesLoading = !1, Y.purchaseAmount = Number(n == null ? void 0 : n.purchaseAmount.amount), n
            } catch (n) {
                return Y.error = n.message, Y.quotesLoading = !1, null
            } finally {
                Y.quotesLoading = !1
            }
        },
        resetState() {
            Y.selectedProvider = null, Y.error = null, Y.purchaseCurrency = Ut, Y.paymentCurrency = Bn, Y.purchaseCurrencies = [Ut], Y.paymentCurrencies = [], Y.paymentAmount = void 0, Y.purchaseAmount = void 0, Y.quotesLoading = !1
        }
    },
    jn = Re(js),
    sr = 2147483648,
    Hs = {
        convertEVMChainIdToCoinType(t) {
            if (t >= sr) throw new Error("Invalid chainId");
            return (sr | t) >>> 0
        }
    },
    ke = ae({
        suggestions: [],
        loading: !1
    }),
    $s = {
        state: ke,
        subscribe(t) {
            return fe(ke, () => t(ke))
        },
        subscribeKey(t, e) {
            return Ce(ke, t, e)
        },
        async resolveName(t) {
            var e, n;
            try {
                return await M.lookupEnsName(t)
            } catch (r) {
                const s = r;
                throw new Error(((n = (e = s == null ? void 0 : s.reasons) == null ? void 0 : e[0]) == null ? void 0 : n.description) || "Error resolving name")
            }
        },
        async isNameRegistered(t) {
            try {
                return await M.lookupEnsName(t), !0
            } catch {
                return !1
            }
        },
        async getSuggestions(t) {
            try {
                ke.loading = !0, ke.suggestions = [];
                const e = await M.getEnsNameSuggestions(t);
                return ke.suggestions = e.suggestions.map(n => ({ ...n,
                    name: n.name
                })) || [], ke.suggestions
            } catch (e) {
                const n = xt.parseEnsApiError(e, "Error fetching name suggestions");
                throw new Error(n)
            } finally {
                ke.loading = !1
            }
        },
        async getNamesForAddress(t) {
            try {
                if (!u.state.activeCaipNetwork) return [];
                const n = g.getEnsFromCacheForAddress(t);
                if (n) return n;
                const r = await M.reverseLookupEnsName({
                    address: t
                });
                return g.updateEnsCache({
                    address: t,
                    ens: r,
                    timestamp: Date.now()
                }), r
            } catch (e) {
                const n = xt.parseEnsApiError(e, "Error fetching names for address");
                throw new Error(n)
            }
        },
        async registerName(t) {
            const e = u.state.activeCaipNetwork,
                n = R.state.address,
                r = E.getAuthConnector();
            if (!e) throw new Error("Network not found");
            if (!n || !r) throw new Error("Address or auth connector not found");
            ke.loading = !0;
            try {
                const s = JSON.stringify({
                    name: t,
                    attributes: {},
                    timestamp: Math.floor(Date.now() / 1e3)
                });
                B.pushTransactionStack({
                    onCancel() {
                        B.replace("RegisterAccountName")
                    }
                });
                const a = await _.signMessage(s);
                ke.loading = !1;
                const o = e.id;
                if (!o) throw new Error("Network not found");
                const i = Hs.convertEVMChainIdToCoinType(Number(o));
                await M.registerEnsName({
                    coinType: i,
                    address: n,
                    signature: a,
                    message: s
                }), R.setProfileName(t, e.chainNamespace), B.replace("RegisterAccountNameSuccess")
            } catch (s) {
                const a = xt.parseEnsApiError(s, `Error registering name ${t}`);
                throw B.replace("RegisterAccountName"), new Error(a)
            } finally {
                ke.loading = !1
            }
        },
        validateName(t) {
            return /^[a-zA-Z0-9-]{4,}$/u.test(t)
        },
        parseEnsApiError(t, e) {
            var r, s;
            const n = t;
            return ((s = (r = n == null ? void 0 : n.reasons) == null ? void 0 : r[0]) == null ? void 0 : s.description) || e
        }
    },
    xt = Re($s);
let ct = null;
const xe = {
        getSIWX() {
            return m.state.siwx
        },
        async initializeIfEnabled(t = u.getActiveCaipAddress()) {
            var a, o, i;
            const e = m.state.siwx;
            if (!(e && t)) return;
            const [n, r, s] = t.split(":");
            if (u.checkIfSupportedNetwork(n, `${n}:${r}`)) try {
                if ((a = m.state.remoteFeatures) != null && a.emailCapture) {
                    const d = (o = u.getAccountData(n)) == null ? void 0 : o.user;
                    await z.open({
                        view: "DataCapture",
                        data: {
                            email: (d == null ? void 0 : d.email) ? ? void 0
                        }
                    });
                    return
                }
                if (ct && await ct, (await e.getSessions(`${n}:${r}`, s)).length) return;
                await z.open({
                    view: "SIWXSignMessage"
                })
            } catch (l) {
                console.error("SIWXUtil:initializeIfEnabled", l), ne.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: this.getSIWXEventProperties()
                }), await ((i = _._getClient()) == null ? void 0 : i.disconnect().catch(console.error)), B.reset("Connect"), $e.showError("A problem occurred while trying initialize authentication")
            }
        },
        async requestSignMessage() {
            const t = m.state.siwx,
                e = O.getPlainAddress(u.getActiveCaipAddress()),
                n = Wn(),
                r = _._getClient();
            if (!t) throw new Error("SIWX is not enabled");
            if (!e) throw new Error("No ActiveCaipAddress found");
            if (!n) throw new Error("No ActiveCaipNetwork or client found");
            if (!r) throw new Error("No ConnectionController client found");
            try {
                const s = await t.createMessage({
                        chainId: n.caipNetworkId,
                        accountAddress: e
                    }),
                    a = s.toString();
                E.getConnectorId(n.chainNamespace) === f.CONNECTOR_ID.AUTH && B.pushTransactionStack({});
                const i = await r.signMessage(a);
                await t.addSession({
                    data: s,
                    message: a,
                    signature: i
                }), u.setLastConnectedSIWECaipNetwork(n), z.close(), ne.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: this.getSIWXEventProperties()
                })
            } catch (s) {
                const a = this.getSIWXEventProperties();
                (!z.state.open || B.state.view === "ApproveTransaction") && await z.open({
                    view: "SIWXSignMessage"
                }), $e.showError("Error signing message"), ne.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: a
                }), console.error("SWIXUtil:requestSignMessage", s)
            }
        },
        async cancelSignMessage() {
            var t;
            try {
                const e = this.getSIWX();
                if ((t = e == null ? void 0 : e.getRequired) == null ? void 0 : t.call(e)) {
                    const r = u.getLastConnectedSIWECaipNetwork();
                    if (r) {
                        const s = await (e == null ? void 0 : e.getSessions(r == null ? void 0 : r.caipNetworkId, O.getPlainAddress(u.getActiveCaipAddress()) || ""));
                        s && s.length > 0 ? await u.switchActiveNetwork(r) : await _.disconnect()
                    } else await _.disconnect()
                } else z.close();
                z.close(), ne.sendEvent({
                    event: "CLICK_CANCEL_SIWX",
                    type: "track",
                    properties: this.getSIWXEventProperties()
                })
            } catch (e) {
                console.error("SIWXUtil:cancelSignMessage", e)
            }
        },
        async getAllSessions() {
            const t = this.getSIWX(),
                e = u.getAllRequestedCaipNetworks(),
                n = [];
            return await Promise.all(e.map(async r => {
                const s = await (t == null ? void 0 : t.getSessions(r.caipNetworkId, O.getPlainAddress(u.getActiveCaipAddress()) || ""));
                s && n.push(...s)
            })), n
        },
        async getSessions(t) {
            const e = m.state.siwx;
            let n = t == null ? void 0 : t.address;
            if (!n) {
                const s = u.getActiveCaipAddress();
                n = O.getPlainAddress(s)
            }
            let r = t == null ? void 0 : t.caipNetworkId;
            if (!r) {
                const s = u.getActiveCaipNetwork();
                r = s == null ? void 0 : s.caipNetworkId
            }
            return e && n && r ? e.getSessions(r, n) : []
        },
        async isSIWXCloseDisabled() {
            var e;
            const t = this.getSIWX();
            if (t) {
                const n = B.state.view === "ApproveTransaction",
                    r = B.state.view === "SIWXSignMessage";
                if (n || r) return ((e = t.getRequired) == null ? void 0 : e.call(t)) && (await this.getSessions()).length === 0
            }
            return !1
        },
        async authConnectorAuthenticate({
            authConnector: t,
            chainId: e,
            socialUri: n,
            preferredAccountType: r,
            chainNamespace: s
        }) {
            var p;
            const a = xe.getSIWX();
            if (!a || !s.includes(f.CHAIN.EVM) || (p = m.state.remoteFeatures) != null && p.emailCapture) {
                const h = await t.connect({
                    chainId: e,
                    socialUri: n,
                    preferredAccountType: r
                });
                return {
                    address: h.address,
                    chainId: h.chainId,
                    accounts: h.accounts
                }
            }
            const o = `${s}:${e}`,
                i = await a.createMessage({
                    chainId: o,
                    accountAddress: "<<AccountAddress>>"
                }),
                l = {
                    accountAddress: i.accountAddress,
                    chainId: i.chainId,
                    domain: i.domain,
                    uri: i.uri,
                    version: i.version,
                    nonce: i.nonce,
                    notBefore: i.notBefore,
                    statement: i.statement,
                    resources: i.resources,
                    requestId: i.requestId,
                    issuedAt: i.issuedAt,
                    expirationTime: i.expirationTime,
                    serializedMessage: i.toString()
                },
                d = await t.connect({
                    chainId: e,
                    socialUri: n,
                    siwxMessage: l,
                    preferredAccountType: r
                });
            return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await xe.addEmbeddedWalletSession(l, d.message, d.signature), {
                address: d.address,
                chainId: d.chainId,
                accounts: d.accounts
            }
        },
        async addEmbeddedWalletSession(t, e, n) {
            if (ct) return ct;
            const r = xe.getSIWX();
            return r ? (ct = r.addSession({
                data: t,
                message: e,
                signature: n
            }).finally(() => {
                ct = null
            }), ct) : Promise.resolve()
        },
        async universalProviderAuthenticate({
            universalProvider: t,
            chains: e,
            methods: n
        }) {
            var i, l, d;
            const r = xe.getSIWX(),
                s = new Set(e.map(p => p.split(":")[0]));
            if (!r || s.size !== 1 || !s.has("eip155")) return !1;
            const a = await r.createMessage({
                    chainId: ((i = Wn()) == null ? void 0 : i.caipNetworkId) || "",
                    accountAddress: ""
                }),
                o = await t.authenticate({
                    nonce: a.nonce,
                    domain: a.domain,
                    uri: a.uri,
                    exp: a.expirationTime,
                    iat: a.issuedAt,
                    nbf: a.notBefore,
                    requestId: a.requestId,
                    version: a.version,
                    resources: a.resources,
                    statement: a.statement,
                    chainId: a.chainId,
                    methods: n,
                    chains: [a.chainId, ...e.filter(p => p !== a.chainId)]
                });
            if ($e.showLoading("Authenticating...", {
                    autoClose: !1
                }), R.setConnectedWalletInfo({ ...o.session.peer.metadata,
                    name: o.session.peer.metadata.name,
                    icon: (l = o.session.peer.metadata.icons) == null ? void 0 : l[0],
                    type: "WALLET_CONNECT"
                }, Array.from(s)[0]), (d = o == null ? void 0 : o.auths) != null && d.length) {
                const p = o.auths.map(h => {
                    const y = t.client.formatAuthMessage({
                        request: h.p,
                        iss: h.p.iss
                    });
                    return {
                        data: { ...h.p,
                            accountAddress: h.p.iss.split(":").slice(-1).join(""),
                            chainId: h.p.iss.split(":").slice(2, 4).join(":"),
                            uri: h.p.aud,
                            version: h.p.version || a.version,
                            expirationTime: h.p.exp,
                            issuedAt: h.p.iat,
                            notBefore: h.p.nbf
                        },
                        message: y,
                        signature: h.s.s,
                        cacao: h
                    }
                });
                try {
                    await r.setSessions(p), ne.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_SUCCESS",
                        properties: xe.getSIWXEventProperties()
                    })
                } catch (h) {
                    throw console.error("SIWX:universalProviderAuth - failed to set sessions", h), ne.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_ERROR",
                        properties: xe.getSIWXEventProperties()
                    }), await t.disconnect().catch(console.error), h
                } finally {
                    $e.hide()
                }
            }
            return !0
        },
        getSIWXEventProperties() {
            var e;
            const t = u.state.activeChain;
            if (!t) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
            return {
                network: ((e = u.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId) || "",
                isSmartAccount: We(t) === pe.ACCOUNT_TYPES.SMART_ACCOUNT
            }
        },
        async clearSessions() {
            const t = this.getSIWX();
            t && await t.setSessions([])
        }
    },
    be = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: f.CHAIN.EVM,
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
            coinbaseWallet: "com.coinbase.wallet",
            coinbaseWalletSDK: "com.coinbase.wallet"
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH"
    },
    Wt = {
        NetworkImageIds: {
            1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
            295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
            11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
            84532: "a18a7ecd-e307-4360-4746-283182228e00",
            1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
            130: "2257980a-3463-48c6-cbac-a42d2a956e00",
            10143: "0a728e83-bacb-46db-7844-948f05434900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
            7777777: "845c60df-d429-4991-e687-91ae45791600",
            42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
            8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
            1313161554: "3ff73439-a619-4894-9262-4470c773a100",
            2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
            2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
            "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
            EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
            "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200"
        },
        ConnectorImageIds: {
            [f.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [f.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [f.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
            [f.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
            [f.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
            [f.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
        },
        ConnectorNamesMap: {
            [f.CONNECTOR_ID.INJECTED]: "Browser Wallet",
            [f.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
            [f.CONNECTOR_ID.COINBASE]: "Coinbase",
            [f.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
            [f.CONNECTOR_ID.LEDGER]: "Ledger",
            [f.CONNECTOR_ID.SAFE]: "Safe"
        }
    },
    Ee = {
        getCaipTokens(t) {
            if (!t) return;
            const e = {};
            return Object.entries(t).forEach(([n, r]) => {
                e[`${be.EIP155}:${n}`] = r
            }), e
        },
        isLowerCaseMatch(t, e) {
            return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase())
        },
        getActiveNamespaceConnectedToAuth() {
            const t = u.state.activeChain;
            return f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e => E.getConnectorId(e) === f.CONNECTOR_ID.AUTH && e === t)
        },
        withRetry({
            conditionFn: t,
            intervalMs: e,
            maxRetries: n
        }) {
            let r = 0;
            return new Promise(s => {
                async function a() {
                    return r += 1, await t() ? s(!0) : r >= n ? s(!1) : (setTimeout(a, e), null)
                }
                a()
            })
        }
    },
    Gs = new AbortController,
    me = {
        EmbeddedWalletAbortController: Gs,
        UniversalProviderErrors: {
            UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
                message: "Unauthorized: origin not allowed",
                alertErrorKey: "ORIGIN_NOT_ALLOWED"
            },
            JWT_VALIDATION_ERROR: {
                message: "JWT validation error: JWT Token is not yet valid",
                alertErrorKey: "JWT_TOKEN_NOT_VALID"
            },
            INVALID_KEY: {
                message: "Unauthorized: invalid key",
                alertErrorKey: "INVALID_PROJECT_ID"
            }
        },
        ALERT_ERRORS: {
            SWITCH_NETWORK_NOT_FOUND: {
                code: "APKT001",
                displayMessage: "Network Not Found",
                debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
            },
            ORIGIN_NOT_ALLOWED: {
                code: "APKT002",
                displayMessage: "Invalid App Configuration",
                debugMessage: () => `The origin ${wt()?window.origin:"unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com.`
            },
            IFRAME_LOAD_FAILED: {
                code: "APKT003",
                displayMessage: "Network Error: Wallet Load Failed",
                debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
            },
            IFRAME_REQUEST_TIMEOUT: {
                code: "APKT004",
                displayMessage: "Wallet Request Timeout",
                debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
            },
            UNVERIFIED_DOMAIN: {
                code: "APKT005",
                displayMessage: "Unverified Domain",
                debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
            },
            JWT_TOKEN_NOT_VALID: {
                code: "APKT006",
                displayMessage: "Session Expired",
                debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
            },
            INVALID_PROJECT_ID: {
                code: "APKT007",
                displayMessage: "Invalid Project ID",
                debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
            },
            PROJECT_ID_NOT_CONFIGURED: {
                code: "APKT008",
                displayMessage: "Project ID Missing",
                debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
            },
            SERVER_ERROR_APP_CONFIGURATION: {
                code: "APKT009",
                displayMessage: "Server Error",
                debugMessage: t => `Unable to fetch App Configuration. ${t}. Please check your network connection and try again shortly. Contact support if the issue persists.`
            },
            RATE_LIMITED_APP_CONFIGURATION: {
                code: "APKT010",
                displayMessage: "Rate Limited",
                debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
            }
        },
        ALERT_WARNINGS: {
            LOCAL_CONFIGURATION_IGNORED: {
                debugMessage: t => `[Reown Config Notice] ${t}`
            }
        }
    },
    Vs = {
        createLogger(t, e = "error") {
            const n = mr({
                    level: e
                }),
                {
                    logger: r
                } = gr({
                    opts: n
                });
            return r.error = (...s) => {
                for (const a of s)
                    if (a instanceof Error) {
                        t(a, ...s);
                        return
                    }
                t(void 0, ...s)
            }, r
        }
    },
    qs = "rpc.walletconnect.org";

function ar(t, e) {
    const n = new URL("https://rpc.walletconnect.org/v1/");
    return n.searchParams.set("chainId", t), n.searchParams.set("projectId", e), n.toString()
}
const Pn = ["near:mainnet", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "eip155:1101", "eip155:56", "eip155:42161", "eip155:7777777", "eip155:59144", "eip155:324", "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1", "eip155:5000", "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz", "eip155:80084", "eip155:5003", "eip155:100", "eip155:8453", "eip155:42220", "eip155:1313161555", "eip155:17000", "eip155:1", "eip155:300", "eip155:1313161554", "eip155:1329", "eip155:84532", "eip155:421614", "eip155:11155111", "eip155:8217", "eip155:43114", "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", "eip155:999999999", "eip155:11155420", "eip155:80002", "eip155:97", "eip155:43113", "eip155:137", "eip155:10", "eip155:1301", "bip122:000000000019d6689c085ae165831e93", "bip122:000000000933ea01ad0ee984209779ba"],
    Ct = {
        extendRpcUrlWithProjectId(t, e) {
            let n = !1;
            try {
                n = new URL(t).host === qs
            } catch {
                n = !1
            }
            if (n) {
                const r = new URL(t);
                return r.searchParams.has("projectId") || r.searchParams.set("projectId", e), r.toString()
            }
            return t
        },
        isCaipNetwork(t) {
            return "chainNamespace" in t && "caipNetworkId" in t
        },
        getChainNamespace(t) {
            return this.isCaipNetwork(t) ? t.chainNamespace : f.CHAIN.EVM
        },
        getCaipNetworkId(t) {
            return this.isCaipNetwork(t) ? t.caipNetworkId : `${f.CHAIN.EVM}:${t.id}`
        },
        getDefaultRpcUrl(t, e, n) {
            var s, a, o;
            const r = (o = (a = (s = t.rpcUrls) == null ? void 0 : s.default) == null ? void 0 : a.http) == null ? void 0 : o[0];
            return Pn.includes(e) ? ar(e, n) : r || ""
        },
        extendCaipNetwork(t, {
            customNetworkImageUrls: e,
            projectId: n,
            customRpcUrls: r
        }) {
            var y, b, j, F, w, H, P;
            const s = this.getChainNamespace(t),
                a = this.getCaipNetworkId(t),
                o = (j = (b = (y = t.rpcUrls) == null ? void 0 : y.default) == null ? void 0 : b.http) == null ? void 0 : j[0],
                i = this.getDefaultRpcUrl(t, a, n),
                l = ((H = (w = (F = t == null ? void 0 : t.rpcUrls) == null ? void 0 : F.chainDefault) == null ? void 0 : w.http) == null ? void 0 : H[0]) || o,
                d = ((P = r == null ? void 0 : r[a]) == null ? void 0 : P.map(Z => Z.url)) || [],
                p = [...d, ...i ? [i] : []],
                h = [...d];
            return l && !h.includes(l) && h.push(l), { ...t,
                chainNamespace: s,
                caipNetworkId: a,
                assets: {
                    imageId: Wt.NetworkImageIds[t.id],
                    imageUrl: e == null ? void 0 : e[t.id]
                },
                rpcUrls: { ...t.rpcUrls,
                    default: {
                        http: p
                    },
                    chainDefault: {
                        http: h
                    }
                }
            }
        },
        extendCaipNetworks(t, {
            customNetworkImageUrls: e,
            projectId: n,
            customRpcUrls: r
        }) {
            return t.map(s => Ct.extendCaipNetwork(s, {
                customNetworkImageUrls: e,
                customRpcUrls: r,
                projectId: n
            }))
        },
        getViemTransport(t, e, n) {
            var s, a, o;
            const r = [];
            return n == null || n.forEach(i => {
                r.push(nn(i.url, i.config))
            }), Pn.includes(t.caipNetworkId) && r.push(nn(ar(t.caipNetworkId, e), {
                fetchOptions: {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            })), (o = (a = (s = t == null ? void 0 : t.rpcUrls) == null ? void 0 : s.default) == null ? void 0 : a.http) == null || o.forEach(i => {
                r.push(nn(i))
            }), Yn(r)
        },
        extendWagmiTransports(t, e, n) {
            if (Pn.includes(t.caipNetworkId)) {
                const r = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
                return Yn([n, nn(r)])
            }
            return n
        },
        getUnsupportedNetwork(t) {
            return {
                id: t.split(":")[1],
                caipNetworkId: t,
                name: f.UNSUPPORTED_NETWORK_NAME,
                chainNamespace: t.split(":")[0],
                nativeCurrency: {
                    name: "",
                    decimals: 0,
                    symbol: ""
                },
                rpcUrls: {
                    default: {
                        http: []
                    }
                }
            }
        },
        getCaipNetworkFromStorage(t) {
            var l;
            const e = g.getActiveCaipNetworkId(),
                n = u.getAllRequestedCaipNetworks(),
                r = Array.from(((l = u.state.chains) == null ? void 0 : l.keys()) || []),
                s = e == null ? void 0 : e.split(":")[0],
                a = s ? r.includes(s) : !1,
                o = n == null ? void 0 : n.find(d => d.caipNetworkId === e);
            return a && !o && e ? this.getUnsupportedNetwork(e) : o || t || (n == null ? void 0 : n[0])
        }
    },
    fn = {
        eip155: void 0,
        solana: void 0,
        polkadot: void 0,
        bip122: void 0,
        cosmos: void 0,
        sui: void 0,
        stacks: void 0
    },
    Ne = ae({
        providers: { ...fn
        },
        providerIds: { ...fn
        }
    }),
    se = {
        state: Ne,
        subscribeKey(t, e) {
            return Ce(Ne, t, e)
        },
        subscribe(t) {
            return fe(Ne, () => {
                t(Ne)
            })
        },
        subscribeProviders(t) {
            return fe(Ne.providers, () => t(Ne.providers))
        },
        setProvider(t, e) {
            t && e && (Ne.providers[t] = ut(e))
        },
        getProvider(t) {
            if (t) return Ne.providers[t]
        },
        setProviderId(t, e) {
            e && (Ne.providerIds[t] = e)
        },
        getProviderId(t) {
            if (t) return Ne.providerIds[t]
        },
        reset() {
            Ne.providers = { ...fn
            }, Ne.providerIds = { ...fn
            }
        },
        resetChain(t) {
            Ne.providers[t] = void 0, Ne.providerIds[t] = void 0
        }
    },
    or = {
        transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
        signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u
    },
    he = {
        set(t, e) {
            Ie.isClient && localStorage.setItem(`${I.STORAGE_KEY}${t}`, e)
        },
        get(t) {
            return Ie.isClient ? localStorage.getItem(`${I.STORAGE_KEY}${t}`) : null
        },
        delete(t, e) {
            Ie.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${I.STORAGE_KEY}${t}`))
        }
    },
    an = 30 * 1e3,
    Ie = {
        checkIfAllowedToTriggerEmail() {
            const t = he.get(I.LAST_EMAIL_LOGIN_TIME);
            if (t) {
                const e = Date.now() - Number(t);
                if (e < an) {
                    const n = Math.ceil((an - e) / 1e3);
                    throw new Error(`Please try again after ${n} seconds`)
                }
            }
        },
        getTimeToNextEmailLogin() {
            const t = he.get(I.LAST_EMAIL_LOGIN_TIME);
            if (t) {
                const e = Date.now() - Number(t);
                if (e < an) return Math.ceil((an - e) / 1e3)
            }
            return 0
        },
        checkIfRequestExists(t) {
            return pe.NOT_SAFE_RPC_METHODS.includes(t.method) || pe.SAFE_RPC_METHODS.includes(t.method)
        },
        getResponseType(t) {
            return typeof t == "string" && ((t == null ? void 0 : t.match(or.transactionHash)) || (t == null ? void 0 : t.match(or.signedMessage))) ? I.RPC_RESPONSE_TYPE_TX : I.RPC_RESPONSE_TYPE_OBJECT
        },
        checkIfRequestIsSafe(t) {
            return pe.SAFE_RPC_METHODS.includes(t.method)
        },
        isClient: typeof window < "u"
    };
var J;
(function(t) {
    t.assertEqual = s => s;

    function e(s) {}
    t.assertIs = e;

    function n(s) {
        throw new Error
    }
    t.assertNever = n, t.arrayToEnum = s => {
        const a = {};
        for (const o of s) a[o] = o;
        return a
    }, t.getValidEnumValues = s => {
        const a = t.objectKeys(s).filter(i => typeof s[s[i]] != "number"),
            o = {};
        for (const i of a) o[i] = s[i];
        return t.objectValues(o)
    }, t.objectValues = s => t.objectKeys(s).map(function(a) {
        return s[a]
    }), t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
        const a = [];
        for (const o in s) Object.prototype.hasOwnProperty.call(s, o) && a.push(o);
        return a
    }, t.find = (s, a) => {
        for (const o of s)
            if (a(o)) return o
    }, t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && isFinite(s) && Math.floor(s) === s;

    function r(s, a = " | ") {
        return s.map(o => typeof o == "string" ? `'${o}'` : o).join(a)
    }
    t.joinValues = r, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a
})(J || (J = {}));
var Hn;
(function(t) {
    t.mergeShapes = (e, n) => ({ ...e,
        ...n
    })
})(Hn || (Hn = {}));
const N = J.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    et = t => {
        switch (typeof t) {
            case "undefined":
                return N.undefined;
            case "string":
                return N.string;
            case "number":
                return isNaN(t) ? N.nan : N.number;
            case "boolean":
                return N.boolean;
            case "function":
                return N.function;
            case "bigint":
                return N.bigint;
            case "symbol":
                return N.symbol;
            case "object":
                return Array.isArray(t) ? N.array : t === null ? N.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? N.promise : typeof Map < "u" && t instanceof Map ? N.map : typeof Set < "u" && t instanceof Set ? N.set : typeof Date < "u" && t instanceof Date ? N.date : N.object;
            default:
                return N.unknown
        }
    },
    C = J.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
    Ks = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Me extends Error {
    constructor(e) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const n = e || function(a) {
                return a.message
            },
            r = {
                _errors: []
            },
            s = a => {
                for (const o of a.issues)
                    if (o.code === "invalid_union") o.unionErrors.map(s);
                    else if (o.code === "invalid_return_type") s(o.returnTypeError);
                else if (o.code === "invalid_arguments") s(o.argumentsError);
                else if (o.path.length === 0) r._errors.push(n(o));
                else {
                    let i = r,
                        l = 0;
                    for (; l < o.path.length;) {
                        const d = o.path[l];
                        l === o.path.length - 1 ? (i[d] = i[d] || {
                            _errors: []
                        }, i[d]._errors.push(n(o))) : i[d] = i[d] || {
                            _errors: []
                        }, i = i[d], l++
                    }
                }
            };
        return s(this), r
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, J.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e = n => n.message) {
        const n = {},
            r = [];
        for (const s of this.issues) s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(e(s))) : r.push(e(s));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Me.create = t => new Me(t);
const Bt = (t, e) => {
    let n;
    switch (t.code) {
        case C.invalid_type:
            t.received === N.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
            break;
        case C.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(t.expected,J.jsonStringifyReplacer)}`;
            break;
        case C.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${J.joinValues(t.keys,", ")}`;
            break;
        case C.invalid_union:
            n = "Invalid input";
            break;
        case C.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${J.joinValues(t.options)}`;
            break;
        case C.invalid_enum_value:
            n = `Invalid enum value. Expected ${J.joinValues(t.options)}, received '${t.received}'`;
            break;
        case C.invalid_arguments:
            n = "Invalid function arguments";
            break;
        case C.invalid_return_type:
            n = "Invalid function return type";
            break;
        case C.invalid_date:
            n = "Invalid date";
            break;
        case C.invalid_string:
            typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : J.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
            break;
        case C.too_small:
            t.type === "array" ? n = `Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
            break;
        case C.too_big:
            t.type === "array" ? n = `Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
            break;
        case C.custom:
            n = "Invalid input";
            break;
        case C.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
        case C.not_multiple_of:
            n = `Number must be a multiple of ${t.multipleOf}`;
            break;
        case C.not_finite:
            n = "Number must be finite";
            break;
        default:
            n = e.defaultError, J.assertNever(t)
    }
    return {
        message: n
    }
};
let Tr = Bt;

function zs(t) {
    Tr = t
}

function mn() {
    return Tr
}
const gn = t => {
        const {
            data: e,
            path: n,
            errorMaps: r,
            issueData: s
        } = t, a = [...n, ...s.path || []], o = { ...s,
            path: a
        };
        let i = "";
        const l = r.filter(d => !!d).slice().reverse();
        for (const d of l) i = d(o, {
            data: e,
            defaultError: i
        }).message;
        return { ...s,
            path: a,
            message: s.message || i
        }
    },
    Ys = [];

function S(t, e) {
    const n = gn({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, mn(), Bt].filter(r => !!r)
    });
    t.common.issues.push(n)
}
class ge {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const r = [];
        for (const s of n) {
            if (s.status === "aborted") return $;
            s.status === "dirty" && e.dirty(), r.push(s.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, n) {
        const r = [];
        for (const s of n) r.push({
            key: await s.key,
            value: await s.value
        });
        return ge.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, n) {
        const r = {};
        for (const s of n) {
            const {
                key: a,
                value: o
            } = s;
            if (a.status === "aborted" || o.status === "aborted") return $;
            a.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[a.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const $ = Object.freeze({
        status: "aborted"
    }),
    Sr = t => ({
        status: "dirty",
        value: t
    }),
    we = t => ({
        status: "valid",
        value: t
    }),
    $n = t => t.status === "aborted",
    Gn = t => t.status === "dirty",
    jt = t => t.status === "valid",
    Cn = t => typeof Promise < "u" && t instanceof Promise;
var D;
(function(t) {
    t.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {}, t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(D || (D = {}));
class Ve {
    constructor(e, n, r, s) {
        this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const ir = (t, e) => {
    if (jt(e)) return {
        success: !0,
        data: e.value
    };
    if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const n = new Me(t.common.issues);
            return this._error = n, this._error
        }
    }
};

function V(t) {
    if (!t) return {};
    const {
        errorMap: e,
        invalid_type_error: n,
        required_error: r,
        description: s
    } = t;
    if (e && (n || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: s
    } : {
        errorMap: (o, i) => o.code !== "invalid_type" ? {
            message: i.defaultError
        } : typeof i.data > "u" ? {
            message: r ? ? i.defaultError
        } : {
            message: n ? ? i.defaultError
        },
        description: s
    }
}
class q {
    constructor(e) {
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return et(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: et(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new ge,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: et(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (Cn(n)) throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const r = this.safeParse(e, n);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(e, n) {
        var r;
        const s = {
                common: {
                    issues: [],
                    async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
                    contextualErrorMap: n == null ? void 0 : n.errorMap
                },
                path: (n == null ? void 0 : n.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: et(e)
            },
            a = this._parseSync({
                data: e,
                path: s.path,
                parent: s
            });
        return ir(s, a)
    }
    async parseAsync(e, n) {
        const r = await this.safeParseAsync(e, n);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(e, n) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: n == null ? void 0 : n.errorMap,
                    async: !0
                },
                path: (n == null ? void 0 : n.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: et(e)
            },
            s = this._parse({
                data: e,
                path: r.path,
                parent: r
            }),
            a = await (Cn(s) ? s : Promise.resolve(s));
        return ir(r, a)
    }
    refine(e, n) {
        const r = s => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(s) : n;
        return this._refinement((s, a) => {
            const o = e(s),
                i = () => a.addIssue({
                    code: C.custom,
                    ...r(s)
                });
            return typeof Promise < "u" && o instanceof Promise ? o.then(l => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1)
        })
    }
    refinement(e, n) {
        return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1))
    }
    _refinement(e) {
        return new Be({
            schema: this,
            typeName: W.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return Ze.create(this, this._def)
    }
    nullable() {
        return ft.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return Fe.create(this, this._def)
    }
    promise() {
        return bt.create(this, this._def)
    }
    or(e) {
        return Vt.create([this, e], this._def)
    }
    and(e) {
        return qt.create(this, e, this._def)
    }
    transform(e) {
        return new Be({ ...V(this._def),
            schema: this,
            typeName: W.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default (e) {
        const n = typeof e == "function" ? e : () => e;
        return new Xt({ ...V(this._def),
            innerType: this,
            defaultValue: n,
            typeName: W.ZodDefault
        })
    }
    brand() {
        return new Ir({
            typeName: W.ZodBranded,
            type: this,
            ...V(this._def)
        })
    } catch (e) {
        const n = typeof e == "function" ? e : () => e;
        return new An({ ...V(this._def),
            innerType: this,
            catchValue: n,
            typeName: W.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({ ...this._def,
            description: e
        })
    }
    pipe(e) {
        return en.create(this, e)
    }
    readonly() {
        return Nn.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Zs = /^c[^\s-]{8,}$/i,
    Xs = /^[a-z][a-z0-9]*$/,
    Js = /^[0-9A-HJKMNP-TV-Z]{26}$/,
    Qs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    ea = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    ta = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Un;
const na = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
    ra = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    sa = t => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");

function aa(t, e) {
    return !!((e === "v4" || !e) && na.test(t) || (e === "v6" || !e) && ra.test(t))
}
class De extends q {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== N.string) {
            const a = this._getOrReturnCtx(e);
            return S(a, {
                code: C.invalid_type,
                expected: N.string,
                received: a.parsedType
            }), $
        }
        const r = new ge;
        let s;
        for (const a of this._def.checks)
            if (a.kind === "min") e.data.length < a.value && (s = this._getOrReturnCtx(e, s), S(s, {
                code: C.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: a.message
            }), r.dirty());
            else if (a.kind === "max") e.data.length > a.value && (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), r.dirty());
        else if (a.kind === "length") {
            const o = e.data.length > a.value,
                i = e.data.length < a.value;
            (o || i) && (s = this._getOrReturnCtx(e, s), o ? S(s, {
                code: C.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }) : i && S(s, {
                code: C.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }), r.dirty())
        } else if (a.kind === "email") ea.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "email",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "emoji") Un || (Un = new RegExp(ta, "u")), Un.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "emoji",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "uuid") Qs.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "uuid",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "cuid") Zs.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "cuid",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "cuid2") Xs.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "cuid2",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "ulid") Js.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "ulid",
            code: C.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "url") try {
            new URL(e.data)
        } catch {
            s = this._getOrReturnCtx(e, s), S(s, {
                validation: "url",
                code: C.invalid_string,
                message: a.message
            }), r.dirty()
        } else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "regex",
            code: C.invalid_string,
            message: a.message
        }), r.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.invalid_string,
            validation: {
                includes: a.value,
                position: a.position
            },
            message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.invalid_string,
            validation: {
                startsWith: a.value
            },
            message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.invalid_string,
            validation: {
                endsWith: a.value
            },
            message: a.message
        }), r.dirty()) : a.kind === "datetime" ? sa(a).test(e.data) || (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.invalid_string,
            validation: "datetime",
            message: a.message
        }), r.dirty()) : a.kind === "ip" ? aa(e.data, a.version) || (s = this._getOrReturnCtx(e, s), S(s, {
            validation: "ip",
            code: C.invalid_string,
            message: a.message
        }), r.dirty()) : J.assertNever(a);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, n, r) {
        return this.refinement(s => e.test(s), {
            validation: n,
            code: C.invalid_string,
            ...D.errToObj(r)
        })
    }
    _addCheck(e) {
        return new De({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...D.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...D.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...D.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...D.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...D.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...D.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...D.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...D.errToObj(e)
        })
    }
    datetime(e) {
        var n;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
            ...D.errToObj(e == null ? void 0 : e.message)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...D.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n == null ? void 0 : n.position,
            ...D.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...D.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...D.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...D.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...D.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...D.errToObj(n)
        })
    }
    nonempty(e) {
        return this.min(1, D.errToObj(e))
    }
    trim() {
        return new De({ ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new De({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new De({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
De.create = t => {
    var e;
    return new De({
        checks: [],
        typeName: W.ZodString,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...V(t)
    })
};

function oa(t, e) {
    const n = (t.toString().split(".")[1] || "").length,
        r = (e.toString().split(".")[1] || "").length,
        s = n > r ? n : r,
        a = parseInt(t.toFixed(s).replace(".", "")),
        o = parseInt(e.toFixed(s).replace(".", ""));
    return a % o / Math.pow(10, s)
}
class st extends q {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== N.number) {
            const a = this._getOrReturnCtx(e);
            return S(a, {
                code: C.invalid_type,
                expected: N.number,
                received: a.parsedType
            }), $
        }
        let r;
        const s = new ge;
        for (const a of this._def.checks) a.kind === "int" ? J.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
        }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? oa(e.data, a.value) !== 0 && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.not_finite,
            message: a.message
        }), s.dirty()) : J.assertNever(a);
        return {
            status: s.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, D.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, D.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, D.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, D.toString(n))
    }
    setLimit(e, n, r, s) {
        return new st({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: D.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new st({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: D.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: D.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: D.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: D.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: D.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: D.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: D.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: D.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: D.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && J.isInteger(e.value))
    }
    get isFinite() {
        let e = null,
            n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
st.create = t => new st({
    checks: [],
    typeName: W.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...V(t)
});
class at extends q {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== N.bigint) {
            const a = this._getOrReturnCtx(e);
            return S(a, {
                code: C.invalid_type,
                expected: N.bigint,
                received: a.parsedType
            }), $
        }
        let r;
        const s = new ge;
        for (const a of this._def.checks) a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), S(r, {
            code: C.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : J.assertNever(a);
        return {
            status: s.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, D.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, D.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, D.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, D.toString(n))
    }
    setLimit(e, n, r, s) {
        return new at({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: D.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new at({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: D.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: D.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: D.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: D.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: D.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
at.create = t => {
    var e;
    return new at({
        checks: [],
        typeName: W.ZodBigInt,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...V(t)
    })
};
class Ht extends q {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== N.boolean) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.boolean,
                received: r.parsedType
            }), $
        }
        return we(e.data)
    }
}
Ht.create = t => new Ht({
    typeName: W.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...V(t)
});
class pt extends q {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== N.date) {
            const a = this._getOrReturnCtx(e);
            return S(a, {
                code: C.invalid_type,
                expected: N.date,
                received: a.parsedType
            }), $
        }
        if (isNaN(e.data.getTime())) {
            const a = this._getOrReturnCtx(e);
            return S(a, {
                code: C.invalid_date
            }), $
        }
        const r = new ge;
        let s;
        for (const a of this._def.checks) a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date"
        }), r.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), S(s, {
            code: C.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date"
        }), r.dirty()) : J.assertNever(a);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new pt({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: D.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: D.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
pt.create = t => new pt({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: W.ZodDate,
    ...V(t)
});
class En extends q {
    _parse(e) {
        if (this._getType(e) !== N.symbol) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.symbol,
                received: r.parsedType
            }), $
        }
        return we(e.data)
    }
}
En.create = t => new En({
    typeName: W.ZodSymbol,
    ...V(t)
});
class $t extends q {
    _parse(e) {
        if (this._getType(e) !== N.undefined) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.undefined,
                received: r.parsedType
            }), $
        }
        return we(e.data)
    }
}
$t.create = t => new $t({
    typeName: W.ZodUndefined,
    ...V(t)
});
class Gt extends q {
    _parse(e) {
        if (this._getType(e) !== N.null) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.null,
                received: r.parsedType
            }), $
        }
        return we(e.data)
    }
}
Gt.create = t => new Gt({
    typeName: W.ZodNull,
    ...V(t)
});
class St extends q {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(e) {
        return we(e.data)
    }
}
St.create = t => new St({
    typeName: W.ZodAny,
    ...V(t)
});
class dt extends q {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(e) {
        return we(e.data)
    }
}
dt.create = t => new dt({
    typeName: W.ZodUnknown,
    ...V(t)
});
class Xe extends q {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return S(n, {
            code: C.invalid_type,
            expected: N.never,
            received: n.parsedType
        }), $
    }
}
Xe.create = t => new Xe({
    typeName: W.ZodNever,
    ...V(t)
});
class wn extends q {
    _parse(e) {
        if (this._getType(e) !== N.undefined) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.void,
                received: r.parsedType
            }), $
        }
        return we(e.data)
    }
}
wn.create = t => new wn({
    typeName: W.ZodVoid,
    ...V(t)
});
class Fe extends q {
    _parse(e) {
        const {
            ctx: n,
            status: r
        } = this._processInputParams(e), s = this._def;
        if (n.parsedType !== N.array) return S(n, {
            code: C.invalid_type,
            expected: N.array,
            received: n.parsedType
        }), $;
        if (s.exactLength !== null) {
            const o = n.data.length > s.exactLength.value,
                i = n.data.length < s.exactLength.value;
            (o || i) && (S(n, {
                code: o ? C.too_big : C.too_small,
                minimum: i ? s.exactLength.value : void 0,
                maximum: o ? s.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: s.exactLength.message
            }), r.dirty())
        }
        if (s.minLength !== null && n.data.length < s.minLength.value && (S(n, {
                code: C.too_small,
                minimum: s.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: s.minLength.message
            }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (S(n, {
                code: C.too_big,
                maximum: s.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: s.maxLength.message
            }), r.dirty()), n.common.async) return Promise.all([...n.data].map((o, i) => s.type._parseAsync(new Ve(n, o, n.path, i)))).then(o => ge.mergeArray(r, o));
        const a = [...n.data].map((o, i) => s.type._parseSync(new Ve(n, o, n.path, i)));
        return ge.mergeArray(r, a)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new Fe({ ...this._def,
            minLength: {
                value: e,
                message: D.toString(n)
            }
        })
    }
    max(e, n) {
        return new Fe({ ...this._def,
            maxLength: {
                value: e,
                message: D.toString(n)
            }
        })
    }
    length(e, n) {
        return new Fe({ ...this._def,
            exactLength: {
                value: e,
                message: D.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Fe.create = (t, e) => new Fe({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: W.ZodArray,
    ...V(e)
});

function Et(t) {
    if (t instanceof ie) {
        const e = {};
        for (const n in t.shape) {
            const r = t.shape[n];
            e[n] = Ze.create(Et(r))
        }
        return new ie({ ...t._def,
            shape: () => e
        })
    } else return t instanceof Fe ? new Fe({ ...t._def,
        type: Et(t.element)
    }) : t instanceof Ze ? Ze.create(Et(t.unwrap())) : t instanceof ft ? ft.create(Et(t.unwrap())) : t instanceof qe ? qe.create(t.items.map(e => Et(e))) : t
}
class ie extends q {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(),
            n = J.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== N.object) {
            const d = this._getOrReturnCtx(e);
            return S(d, {
                code: C.invalid_type,
                expected: N.object,
                received: d.parsedType
            }), $
        }
        const {
            status: r,
            ctx: s
        } = this._processInputParams(e), {
            shape: a,
            keys: o
        } = this._getCached(), i = [];
        if (!(this._def.catchall instanceof Xe && this._def.unknownKeys === "strip"))
            for (const d in s.data) o.includes(d) || i.push(d);
        const l = [];
        for (const d of o) {
            const p = a[d],
                h = s.data[d];
            l.push({
                key: {
                    status: "valid",
                    value: d
                },
                value: p._parse(new Ve(s, h, s.path, d)),
                alwaysSet: d in s.data
            })
        }
        if (this._def.catchall instanceof Xe) {
            const d = this._def.unknownKeys;
            if (d === "passthrough")
                for (const p of i) l.push({
                    key: {
                        status: "valid",
                        value: p
                    },
                    value: {
                        status: "valid",
                        value: s.data[p]
                    }
                });
            else if (d === "strict") i.length > 0 && (S(s, {
                code: C.unrecognized_keys,
                keys: i
            }), r.dirty());
            else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const d = this._def.catchall;
            for (const p of i) {
                const h = s.data[p];
                l.push({
                    key: {
                        status: "valid",
                        value: p
                    },
                    value: d._parse(new Ve(s, h, s.path, p)),
                    alwaysSet: p in s.data
                })
            }
        }
        return s.common.async ? Promise.resolve().then(async () => {
            const d = [];
            for (const p of l) {
                const h = await p.key;
                d.push({
                    key: h,
                    value: await p.value,
                    alwaysSet: p.alwaysSet
                })
            }
            return d
        }).then(d => ge.mergeObjectSync(r, d)) : ge.mergeObjectSync(r, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return D.errToObj, new ie({ ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (n, r) => {
                    var s, a, o, i;
                    const l = (o = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (i = D.errToObj(e).message) !== null && i !== void 0 ? i : l
                    } : {
                        message: l
                    }
                }
            } : {}
        })
    }
    strip() {
        return new ie({ ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new ie({ ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new ie({ ...this._def,
            shape: () => ({ ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new ie({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: W.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new ie({ ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return J.objectKeys(e).forEach(r => {
            e[r] && this.shape[r] && (n[r] = this.shape[r])
        }), new ie({ ...this._def,
            shape: () => n
        })
    }
    omit(e) {
        const n = {};
        return J.objectKeys(this.shape).forEach(r => {
            e[r] || (n[r] = this.shape[r])
        }), new ie({ ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return Et(this)
    }
    partial(e) {
        const n = {};
        return J.objectKeys(this.shape).forEach(r => {
            const s = this.shape[r];
            e && !e[r] ? n[r] = s : n[r] = s.optional()
        }), new ie({ ...this._def,
            shape: () => n
        })
    }
    required(e) {
        const n = {};
        return J.objectKeys(this.shape).forEach(r => {
            if (e && !e[r]) n[r] = this.shape[r];
            else {
                let a = this.shape[r];
                for (; a instanceof Ze;) a = a._def.innerType;
                n[r] = a
            }
        }), new ie({ ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return br(J.objectKeys(this.shape))
    }
}
ie.create = (t, e) => new ie({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Xe.create(),
    typeName: W.ZodObject,
    ...V(e)
});
ie.strictCreate = (t, e) => new ie({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Xe.create(),
    typeName: W.ZodObject,
    ...V(e)
});
ie.lazycreate = (t, e) => new ie({
    shape: t,
    unknownKeys: "strip",
    catchall: Xe.create(),
    typeName: W.ZodObject,
    ...V(e)
});
class Vt extends q {
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e), r = this._def.options;

        function s(a) {
            for (const i of a)
                if (i.result.status === "valid") return i.result;
            for (const i of a)
                if (i.result.status === "dirty") return n.common.issues.push(...i.ctx.common.issues), i.result;
            const o = a.map(i => new Me(i.ctx.common.issues));
            return S(n, {
                code: C.invalid_union,
                unionErrors: o
            }), $
        }
        if (n.common.async) return Promise.all(r.map(async a => {
            const o = { ...n,
                common: { ...n.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await a._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: o
                }),
                ctx: o
            }
        })).then(s); {
            let a;
            const o = [];
            for (const l of r) {
                const d = { ...n,
                        common: { ...n.common,
                            issues: []
                        },
                        parent: null
                    },
                    p = l._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: d
                    });
                if (p.status === "valid") return p;
                p.status === "dirty" && !a && (a = {
                    result: p,
                    ctx: d
                }), d.common.issues.length && o.push(d.common.issues)
            }
            if (a) return n.common.issues.push(...a.ctx.common.issues), a.result;
            const i = o.map(l => new Me(l));
            return S(n, {
                code: C.invalid_union,
                unionErrors: i
            }), $
        }
    }
    get options() {
        return this._def.options
    }
}
Vt.create = (t, e) => new Vt({
    options: t,
    typeName: W.ZodUnion,
    ...V(e)
});
const ln = t => t instanceof zt ? ln(t.schema) : t instanceof Be ? ln(t.innerType()) : t instanceof Yt ? [t.value] : t instanceof ot ? t.options : t instanceof Zt ? Object.keys(t.enum) : t instanceof Xt ? ln(t._def.innerType) : t instanceof $t ? [void 0] : t instanceof Gt ? [null] : null;
class vn extends q {
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e);
        if (n.parsedType !== N.object) return S(n, {
            code: C.invalid_type,
            expected: N.object,
            received: n.parsedType
        }), $;
        const r = this.discriminator,
            s = n.data[r],
            a = this.optionsMap.get(s);
        return a ? n.common.async ? a._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : a._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (S(n, {
            code: C.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }), $)
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
    static create(e, n, r) {
        const s = new Map;
        for (const a of n) {
            const o = ln(a.shape[e]);
            if (!o) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const i of o) {
                if (s.has(i)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
                s.set(i, a)
            }
        }
        return new vn({
            typeName: W.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: s,
            ...V(r)
        })
    }
}

function Vn(t, e) {
    const n = et(t),
        r = et(e);
    if (t === e) return {
        valid: !0,
        data: t
    };
    if (n === N.object && r === N.object) {
        const s = J.objectKeys(e),
            a = J.objectKeys(t).filter(i => s.indexOf(i) !== -1),
            o = { ...t,
                ...e
            };
        for (const i of a) {
            const l = Vn(t[i], e[i]);
            if (!l.valid) return {
                valid: !1
            };
            o[i] = l.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (n === N.array && r === N.array) {
        if (t.length !== e.length) return {
            valid: !1
        };
        const s = [];
        for (let a = 0; a < t.length; a++) {
            const o = t[a],
                i = e[a],
                l = Vn(o, i);
            if (!l.valid) return {
                valid: !1
            };
            s.push(l.data)
        }
        return {
            valid: !0,
            data: s
        }
    } else return n === N.date && r === N.date && +t == +e ? {
        valid: !0,
        data: t
    } : {
        valid: !1
    }
}
class qt extends q {
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e), s = (a, o) => {
            if ($n(a) || $n(o)) return $;
            const i = Vn(a.value, o.value);
            return i.valid ? ((Gn(a) || Gn(o)) && n.dirty(), {
                status: n.value,
                value: i.data
            }) : (S(r, {
                code: C.invalid_intersection_types
            }), $)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([a, o]) => s(a, o)) : s(this._def.left._parseSync({
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
qt.create = (t, e, n) => new qt({
    left: t,
    right: e,
    typeName: W.ZodIntersection,
    ...V(n)
});
class qe extends q {
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== N.array) return S(r, {
            code: C.invalid_type,
            expected: N.array,
            received: r.parsedType
        }), $;
        if (r.data.length < this._def.items.length) return S(r, {
            code: C.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), $;
        !this._def.rest && r.data.length > this._def.items.length && (S(r, {
            code: C.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), n.dirty());
        const a = [...r.data].map((o, i) => {
            const l = this._def.items[i] || this._def.rest;
            return l ? l._parse(new Ve(r, o, r.path, i)) : null
        }).filter(o => !!o);
        return r.common.async ? Promise.all(a).then(o => ge.mergeArray(n, o)) : ge.mergeArray(n, a)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new qe({ ...this._def,
            rest: e
        })
    }
}
qe.create = (t, e) => {
    if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new qe({
        items: t,
        typeName: W.ZodTuple,
        rest: null,
        ...V(e)
    })
};
class Kt extends q {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== N.object) return S(r, {
            code: C.invalid_type,
            expected: N.object,
            received: r.parsedType
        }), $;
        const s = [],
            a = this._def.keyType,
            o = this._def.valueType;
        for (const i in r.data) s.push({
            key: a._parse(new Ve(r, i, r.path, i)),
            value: o._parse(new Ve(r, r.data[i], r.path, i))
        });
        return r.common.async ? ge.mergeObjectAsync(n, s) : ge.mergeObjectSync(n, s)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, r) {
        return n instanceof q ? new Kt({
            keyType: e,
            valueType: n,
            typeName: W.ZodRecord,
            ...V(r)
        }) : new Kt({
            keyType: De.create(),
            valueType: e,
            typeName: W.ZodRecord,
            ...V(n)
        })
    }
}
class _n extends q {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== N.map) return S(r, {
            code: C.invalid_type,
            expected: N.map,
            received: r.parsedType
        }), $;
        const s = this._def.keyType,
            a = this._def.valueType,
            o = [...r.data.entries()].map(([i, l], d) => ({
                key: s._parse(new Ve(r, i, r.path, [d, "key"])),
                value: a._parse(new Ve(r, l, r.path, [d, "value"]))
            }));
        if (r.common.async) {
            const i = new Map;
            return Promise.resolve().then(async () => {
                for (const l of o) {
                    const d = await l.key,
                        p = await l.value;
                    if (d.status === "aborted" || p.status === "aborted") return $;
                    (d.status === "dirty" || p.status === "dirty") && n.dirty(), i.set(d.value, p.value)
                }
                return {
                    status: n.value,
                    value: i
                }
            })
        } else {
            const i = new Map;
            for (const l of o) {
                const d = l.key,
                    p = l.value;
                if (d.status === "aborted" || p.status === "aborted") return $;
                (d.status === "dirty" || p.status === "dirty") && n.dirty(), i.set(d.value, p.value)
            }
            return {
                status: n.value,
                value: i
            }
        }
    }
}
_n.create = (t, e, n) => new _n({
    valueType: e,
    keyType: t,
    typeName: W.ZodMap,
    ...V(n)
});
class ht extends q {
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== N.set) return S(r, {
            code: C.invalid_type,
            expected: N.set,
            received: r.parsedType
        }), $;
        const s = this._def;
        s.minSize !== null && r.data.size < s.minSize.value && (S(r, {
            code: C.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message
        }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (S(r, {
            code: C.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message
        }), n.dirty());
        const a = this._def.valueType;

        function o(l) {
            const d = new Set;
            for (const p of l) {
                if (p.status === "aborted") return $;
                p.status === "dirty" && n.dirty(), d.add(p.value)
            }
            return {
                status: n.value,
                value: d
            }
        }
        const i = [...r.data.values()].map((l, d) => a._parse(new Ve(r, l, r.path, d)));
        return r.common.async ? Promise.all(i).then(l => o(l)) : o(i)
    }
    min(e, n) {
        return new ht({ ...this._def,
            minSize: {
                value: e,
                message: D.toString(n)
            }
        })
    }
    max(e, n) {
        return new ht({ ...this._def,
            maxSize: {
                value: e,
                message: D.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
ht.create = (t, e) => new ht({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: W.ZodSet,
    ...V(e)
});
class yt extends q {
    constructor() {
        super(...arguments), this.validate = this.implement
    }
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e);
        if (n.parsedType !== N.function) return S(n, {
            code: C.invalid_type,
            expected: N.function,
            received: n.parsedType
        }), $;

        function r(i, l) {
            return gn({
                data: i,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, mn(), Bt].filter(d => !!d),
                issueData: {
                    code: C.invalid_arguments,
                    argumentsError: l
                }
            })
        }

        function s(i, l) {
            return gn({
                data: i,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, mn(), Bt].filter(d => !!d),
                issueData: {
                    code: C.invalid_return_type,
                    returnTypeError: l
                }
            })
        }
        const a = {
                errorMap: n.common.contextualErrorMap
            },
            o = n.data;
        if (this._def.returns instanceof bt) {
            const i = this;
            return we(async function(...l) {
                const d = new Me([]),
                    p = await i._def.args.parseAsync(l, a).catch(b => {
                        throw d.addIssue(r(l, b)), d
                    }),
                    h = await Reflect.apply(o, this, p);
                return await i._def.returns._def.type.parseAsync(h, a).catch(b => {
                    throw d.addIssue(s(h, b)), d
                })
            })
        } else {
            const i = this;
            return we(function(...l) {
                const d = i._def.args.safeParse(l, a);
                if (!d.success) throw new Me([r(l, d.error)]);
                const p = Reflect.apply(o, this, d.data),
                    h = i._def.returns.safeParse(p, a);
                if (!h.success) throw new Me([s(p, h.error)]);
                return h.data
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
        return new yt({ ...this._def,
            args: qe.create(e).rest(dt.create())
        })
    }
    returns(e) {
        return new yt({ ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, r) {
        return new yt({
            args: e || qe.create([]).rest(dt.create()),
            returns: n || dt.create(),
            typeName: W.ZodFunction,
            ...V(r)
        })
    }
}
class zt extends q {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
zt.create = (t, e) => new zt({
    getter: t,
    typeName: W.ZodLazy,
    ...V(e)
});
class Yt extends q {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return S(n, {
                received: n.data,
                code: C.invalid_literal,
                expected: this._def.value
            }), $
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
Yt.create = (t, e) => new Yt({
    value: t,
    typeName: W.ZodLiteral,
    ...V(e)
});

function br(t, e) {
    return new ot({
        values: t,
        typeName: W.ZodEnum,
        ...V(e)
    })
}
class ot extends q {
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e),
                r = this._def.values;
            return S(n, {
                expected: J.joinValues(r),
                received: n.parsedType,
                code: C.invalid_type
            }), $
        }
        if (this._def.values.indexOf(e.data) === -1) {
            const n = this._getOrReturnCtx(e),
                r = this._def.values;
            return S(n, {
                received: n.data,
                code: C.invalid_enum_value,
                options: r
            }), $
        }
        return we(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e
    }
    extract(e) {
        return ot.create(e)
    }
    exclude(e) {
        return ot.create(this.options.filter(n => !e.includes(n)))
    }
}
ot.create = br;
class Zt extends q {
    _parse(e) {
        const n = J.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
        if (r.parsedType !== N.string && r.parsedType !== N.number) {
            const s = J.objectValues(n);
            return S(r, {
                expected: J.joinValues(s),
                received: r.parsedType,
                code: C.invalid_type
            }), $
        }
        if (n.indexOf(e.data) === -1) {
            const s = J.objectValues(n);
            return S(r, {
                received: r.data,
                code: C.invalid_enum_value,
                options: s
            }), $
        }
        return we(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Zt.create = (t, e) => new Zt({
    values: t,
    typeName: W.ZodNativeEnum,
    ...V(e)
});
class bt extends q {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e);
        if (n.parsedType !== N.promise && n.common.async === !1) return S(n, {
            code: C.invalid_type,
            expected: N.promise,
            received: n.parsedType
        }), $;
        const r = n.parsedType === N.promise ? n.data : Promise.resolve(n.data);
        return we(r.then(s => this._def.type.parseAsync(s, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
bt.create = (t, e) => new bt({
    type: t,
    typeName: W.ZodPromise,
    ...V(e)
});
class Be extends q {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === W.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e), s = this._def.effect || null, a = {
            addIssue: o => {
                S(r, o), o.fatal ? n.abort() : n.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
            const o = s.transform(r.data, a);
            return r.common.issues.length ? {
                status: "dirty",
                value: r.data
            } : r.common.async ? Promise.resolve(o).then(i => this._def.schema._parseAsync({
                data: i,
                path: r.path,
                parent: r
            })) : this._def.schema._parseSync({
                data: o,
                path: r.path,
                parent: r
            })
        }
        if (s.type === "refinement") {
            const o = i => {
                const l = s.refinement(i, a);
                if (r.common.async) return Promise.resolve(l);
                if (l instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return i
            };
            if (r.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return i.status === "aborted" ? $ : (i.status === "dirty" && n.dirty(), o(i.value), {
                    status: n.value,
                    value: i.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(i => i.status === "aborted" ? $ : (i.status === "dirty" && n.dirty(), o(i.value).then(() => ({
                status: n.value,
                value: i.value
            }))))
        }
        if (s.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!jt(o)) return o;
                const i = s.transform(o.value, a);
                if (i instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: i
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(o => jt(o) ? Promise.resolve(s.transform(o.value, a)).then(i => ({
                status: n.value,
                value: i
            })) : o);
        J.assertNever(s)
    }
}
Be.create = (t, e, n) => new Be({
    schema: t,
    typeName: W.ZodEffects,
    effect: e,
    ...V(n)
});
Be.createWithPreprocess = (t, e, n) => new Be({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: W.ZodEffects,
    ...V(n)
});
class Ze extends q {
    _parse(e) {
        return this._getType(e) === N.undefined ? we(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ze.create = (t, e) => new Ze({
    innerType: t,
    typeName: W.ZodOptional,
    ...V(e)
});
class ft extends q {
    _parse(e) {
        return this._getType(e) === N.null ? we(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
ft.create = (t, e) => new ft({
    innerType: t,
    typeName: W.ZodNullable,
    ...V(e)
});
class Xt extends q {
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e);
        let r = n.data;
        return n.parsedType === N.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Xt.create = (t, e) => new Xt({
    innerType: t,
    typeName: W.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...V(e)
});
class An extends q {
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e), r = { ...n,
            common: { ...n.common,
                issues: []
            }
        }, s = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: { ...r
            }
        });
        return Cn(s) ? s.then(a => ({
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new Me(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new Me(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
An.create = (t, e) => new An({
    innerType: t,
    typeName: W.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...V(e)
});
class yn extends q {
    _parse(e) {
        if (this._getType(e) !== N.nan) {
            const r = this._getOrReturnCtx(e);
            return S(r, {
                code: C.invalid_type,
                expected: N.nan,
                received: r.parsedType
            }), $
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
yn.create = t => new yn({
    typeName: W.ZodNaN,
    ...V(t)
});
const ia = Symbol("zod_brand");
class Ir extends q {
    _parse(e) {
        const {
            ctx: n
        } = this._processInputParams(e), r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class en extends q {
    _parse(e) {
        const {
            status: n,
            ctx: r
        } = this._processInputParams(e);
        if (r.common.async) return (async () => {
            const a = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return a.status === "aborted" ? $ : a.status === "dirty" ? (n.dirty(), Sr(a.value)) : this._def.out._parseAsync({
                data: a.value,
                path: r.path,
                parent: r
            })
        })(); {
            const s = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return s.status === "aborted" ? $ : s.status === "dirty" ? (n.dirty(), {
                status: "dirty",
                value: s.value
            }) : this._def.out._parseSync({
                data: s.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, n) {
        return new en({ in: e,
            out: n,
            typeName: W.ZodPipeline
        })
    }
}
class Nn extends q {
    _parse(e) {
        const n = this._def.innerType._parse(e);
        return jt(n) && (n.value = Object.freeze(n.value)), n
    }
}
Nn.create = (t, e) => new Nn({
    innerType: t,
    typeName: W.ZodReadonly,
    ...V(e)
});
const Rr = (t, e = {}, n) => t ? St.create().superRefine((r, s) => {
        var a, o;
        if (!t(r)) {
            const i = typeof e == "function" ? e(r) : typeof e == "string" ? {
                    message: e
                } : e,
                l = (o = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && o !== void 0 ? o : !0,
                d = typeof i == "string" ? {
                    message: i
                } : i;
            s.addIssue({
                code: "custom",
                ...d,
                fatal: l
            })
        }
    }) : St.create(),
    ca = {
        object: ie.lazycreate
    };
var W;
(function(t) {
    t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly"
})(W || (W = {}));
const la = (t, e = {
        message: `Input not instance of ${t.name}`
    }) => Rr(n => n instanceof t, e),
    Or = De.create,
    kr = st.create,
    da = yn.create,
    ua = at.create,
    Pr = Ht.create,
    pa = pt.create,
    ha = En.create,
    fa = $t.create,
    ma = Gt.create,
    ga = St.create,
    Ca = dt.create,
    Ea = Xe.create,
    wa = wn.create,
    _a = Fe.create,
    Aa = ie.create,
    ya = ie.strictCreate,
    Na = Vt.create,
    va = vn.create,
    Ta = qt.create,
    Sa = qe.create,
    ba = Kt.create,
    Ia = _n.create,
    Ra = ht.create,
    Oa = yt.create,
    ka = zt.create,
    Pa = Yt.create,
    Ua = ot.create,
    xa = Zt.create,
    La = bt.create,
    cr = Be.create,
    Da = Ze.create,
    Ma = ft.create,
    Fa = Be.createWithPreprocess,
    Wa = en.create,
    Ba = () => Or().optional(),
    ja = () => kr().optional(),
    Ha = () => Pr().optional(),
    $a = {
        string: t => De.create({ ...t,
            coerce: !0
        }),
        number: t => st.create({ ...t,
            coerce: !0
        }),
        boolean: t => Ht.create({ ...t,
            coerce: !0
        }),
        bigint: t => at.create({ ...t,
            coerce: !0
        }),
        date: t => pt.create({ ...t,
            coerce: !0
        })
    },
    Ga = $;
var c = Object.freeze({
    __proto__: null,
    defaultErrorMap: Bt,
    setErrorMap: zs,
    getErrorMap: mn,
    makeIssue: gn,
    EMPTY_PATH: Ys,
    addIssueToContext: S,
    ParseStatus: ge,
    INVALID: $,
    DIRTY: Sr,
    OK: we,
    isAborted: $n,
    isDirty: Gn,
    isValid: jt,
    isAsync: Cn,
    get util() {
        return J
    },
    get objectUtil() {
        return Hn
    },
    ZodParsedType: N,
    getParsedType: et,
    ZodType: q,
    ZodString: De,
    ZodNumber: st,
    ZodBigInt: at,
    ZodBoolean: Ht,
    ZodDate: pt,
    ZodSymbol: En,
    ZodUndefined: $t,
    ZodNull: Gt,
    ZodAny: St,
    ZodUnknown: dt,
    ZodNever: Xe,
    ZodVoid: wn,
    ZodArray: Fe,
    ZodObject: ie,
    ZodUnion: Vt,
    ZodDiscriminatedUnion: vn,
    ZodIntersection: qt,
    ZodTuple: qe,
    ZodRecord: Kt,
    ZodMap: _n,
    ZodSet: ht,
    ZodFunction: yt,
    ZodLazy: zt,
    ZodLiteral: Yt,
    ZodEnum: ot,
    ZodNativeEnum: Zt,
    ZodPromise: bt,
    ZodEffects: Be,
    ZodTransformer: Be,
    ZodOptional: Ze,
    ZodNullable: ft,
    ZodDefault: Xt,
    ZodCatch: An,
    ZodNaN: yn,
    BRAND: ia,
    ZodBranded: Ir,
    ZodPipeline: en,
    ZodReadonly: Nn,
    custom: Rr,
    Schema: q,
    ZodSchema: q,
    late: ca,
    get ZodFirstPartyTypeKind() {
        return W
    },
    coerce: $a,
    any: ga,
    array: _a,
    bigint: ua,
    boolean: Pr,
    date: pa,
    discriminatedUnion: va,
    effect: cr,
    enum: Ua,
    function: Oa,
    instanceof: la,
    intersection: Ta,
    lazy: ka,
    literal: Pa,
    map: Ia,
    nan: da,
    nativeEnum: xa,
    never: Ea,
    null: ma,
    nullable: Ma,
    number: kr,
    object: Aa,
    oboolean: Ha,
    onumber: ja,
    optional: Da,
    ostring: Ba,
    pipeline: Wa,
    preprocess: Fa,
    promise: La,
    record: ba,
    set: Ra,
    strictObject: ya,
    string: Or,
    symbol: ha,
    transformer: cr,
    tuple: Sa,
    undefined: fa,
    union: Na,
    unknown: Ca,
    void: wa,
    NEVER: Ga,
    ZodIssueCode: C,
    quotelessJson: Ks,
    ZodError: Me
});
const ce = c.object({
    message: c.string()
});

function v(t) {
    return c.literal(I[t])
}
const Tn = c.object({
    serializedMessage: c.string().optional(),
    accountAddress: c.string(),
    chainId: c.string(),
    notBefore: c.string().optional(),
    domain: c.string(),
    uri: c.string(),
    version: c.string(),
    nonce: c.string(),
    statement: c.string().optional(),
    resources: c.array(c.string()).optional(),
    requestId: c.string().optional(),
    issuedAt: c.string().optional(),
    expirationTime: c.string().optional()
});
c.object({
    accessList: c.array(c.string()),
    blockHash: c.string().nullable(),
    blockNumber: c.string().nullable(),
    chainId: c.string().or(c.number()),
    from: c.string(),
    gas: c.string(),
    hash: c.string(),
    input: c.string().nullable(),
    maxFeePerGas: c.string(),
    maxPriorityFeePerGas: c.string(),
    nonce: c.string(),
    r: c.string(),
    s: c.string(),
    to: c.string(),
    transactionIndex: c.string().nullable(),
    type: c.string(),
    v: c.string(),
    value: c.string()
});
const Va = c.object({
        chainId: c.string().or(c.number()),
        rpcUrl: c.optional(c.string())
    }),
    qa = c.object({
        email: c.string().email()
    }),
    Ka = c.object({
        otp: c.string()
    }),
    za = c.object({
        uri: c.string(),
        preferredAccountType: c.optional(c.string()),
        chainId: c.optional(c.string().or(c.number())),
        siwxMessage: c.optional(Tn),
        rpcUrl: c.optional(c.string())
    }),
    Ya = c.object({
        chainId: c.optional(c.string().or(c.number())),
        preferredAccountType: c.optional(c.string()),
        socialUri: c.optional(c.string()),
        siwxMessage: c.optional(Tn),
        rpcUrl: c.optional(c.string())
    }),
    Za = c.object({
        provider: c.enum(["google", "github", "apple", "facebook", "x", "discord"])
    }),
    Xa = c.object({
        email: c.string().email()
    }),
    Ja = c.object({
        otp: c.string()
    }),
    Qa = c.object({
        otp: c.string()
    }),
    eo = c.object({
        themeMode: c.optional(c.enum(["light", "dark"])),
        themeVariables: c.optional(c.record(c.string(), c.string().or(c.number()))),
        w3mThemeVariables: c.optional(c.record(c.string(), c.string()))
    }),
    to = c.object({
        metadata: c.object({
            name: c.string(),
            description: c.string(),
            url: c.string(),
            icons: c.array(c.string())
        }).optional(),
        sdkVersion: c.string().optional(),
        sdkType: c.string().optional(),
        projectId: c.string()
    }),
    no = c.object({
        type: c.string()
    }),
    ro = c.object({
        action: c.enum(["VERIFY_DEVICE", "VERIFY_OTP", "CONNECT"])
    }),
    so = c.object({
        url: c.string()
    }),
    ao = c.object({
        userName: c.string()
    }),
    oo = c.object({
        email: c.string().optional().nullable(),
        address: c.string(),
        chainId: c.string().or(c.number()),
        accounts: c.array(c.object({
            address: c.string(),
            type: c.enum([pe.ACCOUNT_TYPES.EOA, pe.ACCOUNT_TYPES.SMART_ACCOUNT])
        })).optional(),
        userName: c.string().optional().nullable(),
        preferredAccountType: c.optional(c.string()),
        signature: c.string().optional(),
        message: c.string().optional(),
        siwxMessage: c.optional(Tn)
    }),
    io = c.object({
        action: c.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"])
    }),
    co = c.object({
        email: c.string().email().optional().nullable(),
        address: c.string(),
        chainId: c.string().or(c.number()),
        smartAccountDeployed: c.optional(c.boolean()),
        accounts: c.array(c.object({
            address: c.string(),
            type: c.enum([pe.ACCOUNT_TYPES.EOA, pe.ACCOUNT_TYPES.SMART_ACCOUNT])
        })).optional(),
        preferredAccountType: c.optional(c.string()),
        signature: c.string().optional(),
        message: c.string().optional(),
        siwxMessage: c.optional(Tn)
    }),
    lo = c.object({
        uri: c.string()
    }),
    uo = c.object({
        isConnected: c.boolean()
    }),
    po = c.object({
        chainId: c.string().or(c.number())
    }),
    ho = c.object({
        chainId: c.string().or(c.number())
    }),
    fo = c.object({
        newEmail: c.string().email()
    }),
    mo = c.object({
        smartAccountEnabledNetworks: c.array(c.number())
    });
c.object({
    address: c.string(),
    isDeployed: c.boolean()
});
const go = c.object({
        version: c.string().optional()
    }),
    Co = c.object({
        type: c.string(),
        address: c.string()
    }),
    Eo = c.any(),
    wo = c.object({
        method: c.literal("eth_accounts")
    }),
    _o = c.object({
        method: c.literal("eth_blockNumber")
    }),
    Ao = c.object({
        method: c.literal("eth_call"),
        params: c.array(c.any())
    }),
    yo = c.object({
        method: c.literal("eth_chainId")
    }),
    No = c.object({
        method: c.literal("eth_estimateGas"),
        params: c.array(c.any())
    }),
    vo = c.object({
        method: c.literal("eth_feeHistory"),
        params: c.array(c.any())
    }),
    To = c.object({
        method: c.literal("eth_gasPrice")
    }),
    So = c.object({
        method: c.literal("eth_getAccount"),
        params: c.array(c.any())
    }),
    bo = c.object({
        method: c.literal("eth_getBalance"),
        params: c.array(c.any())
    }),
    Io = c.object({
        method: c.literal("eth_getBlockByHash"),
        params: c.array(c.any())
    }),
    Ro = c.object({
        method: c.literal("eth_getBlockByNumber"),
        params: c.array(c.any())
    }),
    Oo = c.object({
        method: c.literal("eth_getBlockReceipts"),
        params: c.array(c.any())
    }),
    ko = c.object({
        method: c.literal("eth_getBlockTransactionCountByHash"),
        params: c.array(c.any())
    }),
    Po = c.object({
        method: c.literal("eth_getBlockTransactionCountByNumber"),
        params: c.array(c.any())
    }),
    Uo = c.object({
        method: c.literal("eth_getCode"),
        params: c.array(c.any())
    }),
    xo = c.object({
        method: c.literal("eth_getFilterChanges"),
        params: c.array(c.any())
    }),
    Lo = c.object({
        method: c.literal("eth_getFilterLogs"),
        params: c.array(c.any())
    }),
    Do = c.object({
        method: c.literal("eth_getLogs"),
        params: c.array(c.any())
    }),
    Mo = c.object({
        method: c.literal("eth_getProof"),
        params: c.array(c.any())
    }),
    Fo = c.object({
        method: c.literal("eth_getStorageAt"),
        params: c.array(c.any())
    }),
    Wo = c.object({
        method: c.literal("eth_getTransactionByBlockHashAndIndex"),
        params: c.array(c.any())
    }),
    Bo = c.object({
        method: c.literal("eth_getTransactionByBlockNumberAndIndex"),
        params: c.array(c.any())
    }),
    jo = c.object({
        method: c.literal("eth_getTransactionByHash"),
        params: c.array(c.any())
    }),
    Ho = c.object({
        method: c.literal("eth_getTransactionCount"),
        params: c.array(c.any())
    }),
    $o = c.object({
        method: c.literal("eth_getTransactionReceipt"),
        params: c.array(c.any())
    }),
    Go = c.object({
        method: c.literal("eth_getUncleCountByBlockHash"),
        params: c.array(c.any())
    }),
    Vo = c.object({
        method: c.literal("eth_getUncleCountByBlockNumber"),
        params: c.array(c.any())
    }),
    qo = c.object({
        method: c.literal("eth_maxPriorityFeePerGas")
    }),
    Ko = c.object({
        method: c.literal("eth_newBlockFilter")
    }),
    zo = c.object({
        method: c.literal("eth_newFilter"),
        params: c.array(c.any())
    }),
    Yo = c.object({
        method: c.literal("eth_newPendingTransactionFilter")
    }),
    Zo = c.object({
        method: c.literal("eth_sendRawTransaction"),
        params: c.array(c.any())
    }),
    Xo = c.object({
        method: c.literal("eth_syncing"),
        params: c.array(c.any())
    }),
    Jo = c.object({
        method: c.literal("eth_uninstallFilter"),
        params: c.array(c.any())
    }),
    lr = c.object({
        method: c.literal("personal_sign"),
        params: c.array(c.any())
    }),
    Qo = c.object({
        method: c.literal("eth_signTypedData_v4"),
        params: c.array(c.any())
    }),
    ei = c.object({
        method: c.literal("eth_sendTransaction"),
        params: c.array(c.any())
    }),
    ti = c.object({
        method: c.literal("solana_signMessage"),
        params: c.object({
            message: c.string(),
            pubkey: c.string()
        })
    }),
    ni = c.object({
        method: c.literal("solana_signTransaction"),
        params: c.object({
            transaction: c.string()
        })
    }),
    ri = c.object({
        method: c.literal("solana_signAllTransactions"),
        params: c.object({
            transactions: c.array(c.string())
        })
    }),
    si = c.object({
        method: c.literal("solana_signAndSendTransaction"),
        params: c.object({
            transaction: c.string(),
            options: c.object({
                skipPreflight: c.boolean().optional(),
                preflightCommitment: c.enum(["processed", "confirmed", "finalized", "recent", "single", "singleGossip", "root", "max"]).optional(),
                maxRetries: c.number().optional(),
                minContextSlot: c.number().optional()
            }).optional()
        })
    }),
    ai = c.object({
        method: c.literal("wallet_sendCalls"),
        params: c.array(c.object({
            chainId: c.string().or(c.number()).optional(),
            from: c.string().optional(),
            version: c.string().optional(),
            capabilities: c.any().optional(),
            calls: c.array(c.object({
                to: c.string().startsWith("0x"),
                data: c.string().startsWith("0x").optional(),
                value: c.string().optional()
            }))
        }))
    }),
    oi = c.object({
        method: c.literal("wallet_getCallsStatus"),
        params: c.array(c.string())
    }),
    ii = c.object({
        method: c.literal("wallet_getCapabilities"),
        params: c.array(c.string().or(c.number()).optional()).optional()
    }),
    ci = c.object({
        method: c.literal("wallet_grantPermissions"),
        params: c.array(c.any())
    }),
    li = c.object({
        method: c.literal("wallet_revokePermissions"),
        params: c.any()
    }),
    di = c.object({
        method: c.literal("wallet_getAssets"),
        params: c.any()
    }),
    dr = c.object({
        token: c.string()
    }),
    T = c.object({
        id: c.string().optional()
    }),
    xn = {
        appEvent: T.extend({
            type: v("APP_SWITCH_NETWORK"),
            payload: Va
        }).or(T.extend({
            type: v("APP_CONNECT_EMAIL"),
            payload: qa
        })).or(T.extend({
            type: v("APP_CONNECT_DEVICE")
        })).or(T.extend({
            type: v("APP_CONNECT_OTP"),
            payload: Ka
        })).or(T.extend({
            type: v("APP_CONNECT_SOCIAL"),
            payload: za
        })).or(T.extend({
            type: v("APP_GET_FARCASTER_URI")
        })).or(T.extend({
            type: v("APP_CONNECT_FARCASTER")
        })).or(T.extend({
            type: v("APP_GET_USER"),
            payload: c.optional(Ya)
        })).or(T.extend({
            type: v("APP_GET_SOCIAL_REDIRECT_URI"),
            payload: Za
        })).or(T.extend({
            type: v("APP_SIGN_OUT")
        })).or(T.extend({
            type: v("APP_IS_CONNECTED"),
            payload: c.optional(dr)
        })).or(T.extend({
            type: v("APP_GET_CHAIN_ID")
        })).or(T.extend({
            type: v("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")
        })).or(T.extend({
            type: v("APP_INIT_SMART_ACCOUNT")
        })).or(T.extend({
            type: v("APP_SET_PREFERRED_ACCOUNT"),
            payload: no
        })).or(T.extend({
            type: v("APP_RPC_REQUEST"),
            payload: lr.or(di).or(wo).or(_o).or(Ao).or(yo).or(No).or(vo).or(To).or(So).or(bo).or(Io).or(Ro).or(Oo).or(ko).or(Po).or(Uo).or(xo).or(Lo).or(Do).or(Mo).or(Fo).or(Wo).or(Bo).or(jo).or(Ho).or($o).or(Go).or(Vo).or(qo).or(Ko).or(zo).or(Yo).or(Zo).or(Xo).or(Jo).or(lr).or(Qo).or(ei).or(ti).or(ni).or(ri).or(si).or(oi).or(ai).or(ii).or(ci).or(li).and(c.object({
                chainId: c.string().or(c.number()).optional(),
                chainNamespace: c.enum(["eip155", "solana", "polkadot", "bip122", "cosmos"]).optional(),
                rpcUrl: c.string().optional()
            }))
        })).or(T.extend({
            type: v("APP_UPDATE_EMAIL"),
            payload: Xa
        })).or(T.extend({
            type: v("APP_UPDATE_EMAIL_PRIMARY_OTP"),
            payload: Ja
        })).or(T.extend({
            type: v("APP_UPDATE_EMAIL_SECONDARY_OTP"),
            payload: Qa
        })).or(T.extend({
            type: v("APP_SYNC_THEME"),
            payload: eo
        })).or(T.extend({
            type: v("APP_SYNC_DAPP_DATA"),
            payload: to
        })).or(T.extend({
            type: v("APP_RELOAD")
        })).or(T.extend({
            type: v("APP_RPC_ABORT")
        })),
        frameEvent: T.extend({
            type: v("FRAME_SWITCH_NETWORK_ERROR"),
            payload: ce
        }).or(T.extend({
            type: v("FRAME_SWITCH_NETWORK_SUCCESS"),
            payload: ho
        })).or(T.extend({
            type: v("FRAME_CONNECT_EMAIL_SUCCESS"),
            payload: ro
        })).or(T.extend({
            type: v("FRAME_CONNECT_EMAIL_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_GET_FARCASTER_URI_SUCCESS"),
            payload: so
        })).or(T.extend({
            type: v("FRAME_GET_FARCASTER_URI_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_CONNECT_FARCASTER_SUCCESS"),
            payload: ao
        })).or(T.extend({
            type: v("FRAME_CONNECT_FARCASTER_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_CONNECT_OTP_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_CONNECT_OTP_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_CONNECT_DEVICE_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_CONNECT_DEVICE_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_CONNECT_SOCIAL_SUCCESS"),
            payload: oo
        })).or(T.extend({
            type: v("FRAME_CONNECT_SOCIAL_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_GET_USER_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_GET_USER_SUCCESS"),
            payload: co
        })).or(T.extend({
            type: v("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
            payload: lo
        })).or(T.extend({
            type: v("FRAME_SIGN_OUT_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_SIGN_OUT_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_IS_CONNECTED_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_IS_CONNECTED_SUCCESS"),
            payload: uo
        })).or(T.extend({
            type: v("FRAME_GET_CHAIN_ID_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_GET_CHAIN_ID_SUCCESS"),
            payload: po
        })).or(T.extend({
            type: v("FRAME_RPC_REQUEST_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_RPC_REQUEST_SUCCESS"),
            payload: Eo
        })).or(T.extend({
            type: v("FRAME_SESSION_UPDATE"),
            payload: dr
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_SUCCESS"),
            payload: io
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
            payload: fo
        })).or(T.extend({
            type: v("FRAME_SYNC_THEME_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_SYNC_THEME_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_SYNC_DAPP_DATA_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_SYNC_DAPP_DATA_SUCCESS")
        })).or(T.extend({
            type: v("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
            payload: mo
        })).or(T.extend({
            type: v("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_INIT_SMART_ACCOUNT_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
            payload: Co
        })).or(T.extend({
            type: v("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_READY"),
            payload: go
        })).or(T.extend({
            type: v("FRAME_RELOAD_ERROR"),
            payload: ce
        })).or(T.extend({
            type: v("FRAME_RELOAD_SUCCESS")
        }))
    };

function Ln(t, e = {}) {
    var n;
    return typeof(e == null ? void 0 : e.type) == "string" && ((n = e == null ? void 0 : e.type) == null ? void 0 : n.includes(t))
}

function ui({
    projectId: t,
    chainId: e,
    enableLogger: n,
    rpcUrl: r = f.BLOCKCHAIN_API_RPC_URL,
    enableCloudAuthAccount: s = !1
}) {
    const a = new URL(hs);
    return a.searchParams.set("projectId", t), a.searchParams.set("chainId", String(e)), a.searchParams.set("version", ms), a.searchParams.set("enableLogger", String(n)), a.searchParams.set("rpcUrl", r), s && a.searchParams.set("enableCloudAuthAccount", "true"), a.toString()
}
class pi {
    constructor({
        projectId: e,
        isAppClient: n = !1,
        chainId: r = "eip155:1",
        enableLogger: s = !0,
        enableCloudAuthAccount: a = !1,
        rpcUrl: o = f.BLOCKCHAIN_API_RPC_URL
    }) {
        if (this.iframe = null, this.iframeIsReady = !1, this.initFrame = () => {
                const i = document.getElementById("w3m-iframe");
                this.iframe && !i && document.body.appendChild(this.iframe)
            }, this.events = {
                registerFrameEventHandler: (i, l, d) => {
                    function p({
                        data: h
                    }) {
                        var b;
                        if (!Ln(I.FRAME_EVENT_KEY, h)) return;
                        const y = xn.frameEvent.safeParse(h);
                        if (!y.success) {
                            console.warn("W3mFrame: invalid frame event", y.error.message);
                            return
                        }((b = y.data) == null ? void 0 : b.id) === i && (l(y.data), window.removeEventListener("message", p))
                    }
                    Ie.isClient && (window.addEventListener("message", p), d.addEventListener("abort", () => {
                        window.removeEventListener("message", p)
                    }))
                },
                onFrameEvent: i => {
                    Ie.isClient && window.addEventListener("message", ({
                        data: l
                    }) => {
                        if (!Ln(I.FRAME_EVENT_KEY, l)) return;
                        const d = xn.frameEvent.safeParse(l);
                        d.success ? i(d.data) : console.warn("W3mFrame: invalid frame event", d.error.message)
                    })
                },
                onAppEvent: i => {
                    Ie.isClient && window.addEventListener("message", ({
                        data: l
                    }) => {
                        if (!Ln(I.APP_EVENT_KEY, l)) return;
                        const d = xn.appEvent.safeParse(l);
                        d.success || console.warn("W3mFrame: invalid app event", d.error.message), i(l)
                    })
                },
                postAppEvent: i => {
                    var l;
                    if (Ie.isClient) {
                        if (!((l = this.iframe) != null && l.contentWindow)) throw new Error("W3mFrame: iframe is not set");
                        this.iframe.contentWindow.postMessage(i, "*")
                    }
                },
                postFrameEvent: i => {
                    if (Ie.isClient) {
                        if (!parent) throw new Error("W3mFrame: parent is not set");
                        parent.postMessage(i, "*")
                    }
                }
            }, this.projectId = e, this.frameLoadPromise = new Promise((i, l) => {
                this.frameLoadPromiseResolver = {
                    resolve: i,
                    reject: l
                }
            }), this.rpcUrl = o, n && (this.frameLoadPromise = new Promise((i, l) => {
                this.frameLoadPromiseResolver = {
                    resolve: i,
                    reject: l
                }
            }), Ie.isClient)) {
            const i = document.createElement("iframe");
            i.id = "w3m-iframe", i.src = ui({
                projectId: e,
                chainId: r,
                enableLogger: s,
                rpcUrl: this.rpcUrl,
                enableCloudAuthAccount: a
            }), i.name = "w3m-secure-iframe", i.style.position = "fixed", i.style.zIndex = "999999", i.style.display = "none", i.style.border = "none", i.style.animationDelay = "0s, 50ms", i.style.borderBottomLeftRadius = "clamp(0px, var(--wui-border-radius-l), 44px)", i.style.borderBottomRightRadius = "clamp(0px, var(--wui-border-radius-l), 44px)", this.iframe = i, this.iframe.onerror = () => {
                var l;
                (l = this.frameLoadPromiseResolver) == null || l.reject("Unable to load email login dependency")
            }, this.events.onFrameEvent(l => {
                var d;
                l.type === "@w3m-frame/READY" && (this.iframeIsReady = !0, (d = this.frameLoadPromiseResolver) == null || d.resolve(void 0))
            })
        }
    }
    get networks() {
        const e = ["eip155:1", "eip155:5", "eip155:11155111", "eip155:10", "eip155:420", "eip155:42161", "eip155:421613", "eip155:137", "eip155:80001", "eip155:42220", "eip155:1313161554", "eip155:1313161555", "eip155:56", "eip155:97", "eip155:43114", "eip155:43113", "eip155:324", "eip155:280", "eip155:100", "eip155:8453", "eip155:84531", "eip155:84532", "eip155:7777777", "eip155:999", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(n => ({
            [n]: {
                rpcUrl: `${this.rpcUrl}/v1/?chainId=${n}&projectId=${this.projectId}`,
                chainId: n
            }
        }));
        return Object.assign({}, ...e)
    }
}
class hi {
    constructor(e) {
        var a;
        const n = mr({
                level: fs
            }),
            {
                logger: r,
                chunkLoggerController: s
            } = gr({
                opts: n
            });
        this.logger = Fr(r, this.constructor.name), this.chunkLoggerController = s, typeof window < "u" && ((a = this.chunkLoggerController) != null && a.downloadLogsBlobInBrowser) && (window.downloadAppKitLogsBlob || (window.downloadAppKitLogsBlob = {}), window.downloadAppKitLogsBlob.sdk = () => {
            var o;
            (o = this.chunkLoggerController) != null && o.downloadLogsBlobInBrowser && this.chunkLoggerController.downloadLogsBlobInBrowser({
                projectId: e
            })
        })
    }
}
class fi {
    constructor({
        projectId: e,
        chainId: n,
        enableLogger: r = !0,
        onTimeout: s,
        abortController: a,
        getActiveCaipNetwork: o,
        getCaipNetworks: i,
        enableCloudAuthAccount: l
    }) {
        this.openRpcRequests = [], this.isInitialized = !1, r && (this.w3mLogger = new hi(e)), this.abortController = a, this.getActiveCaipNetwork = o, this.getCaipNetworks = i;
        const d = this.getRpcUrl(n);
        this.w3mFrame = new pi({
            projectId: e,
            isAppClient: !0,
            chainId: n,
            enableLogger: r,
            rpcUrl: d,
            enableCloudAuthAccount: l
        }), this.onTimeout = s, this.getLoginEmailUsed() && this.createFrame()
    }
    async createFrame() {
        this.w3mFrame.initFrame(), this.initPromise = new Promise(e => {
            this.w3mFrame.events.onFrameEvent(n => {
                n.type === I.FRAME_READY && setTimeout(() => {
                    e()
                }, 500)
            })
        }), await this.initPromise, this.isInitialized = !0, this.initPromise = void 0
    }
    async init() {
        if (!this.isInitialized) {
            if (this.initPromise) {
                await this.initPromise;
                return
            }
            await this.createFrame()
        }
    }
    getLoginEmailUsed() {
        return !!he.get(I.EMAIL_LOGIN_USED_KEY)
    }
    getEmail() {
        return he.get(I.EMAIL)
    }
    getUsername() {
        return he.get(I.SOCIAL_USERNAME)
    }
    async reload() {
        var e;
        try {
            await this.appEvent({
                type: I.APP_RELOAD
            })
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error reloading iframe"), n
        }
    }
    async connectEmail(e) {
        var n;
        try {
            Ie.checkIfAllowedToTriggerEmail(), await this.init();
            const r = await this.appEvent({
                type: I.APP_CONNECT_EMAIL,
                payload: e
            });
            return this.setNewLastEmailLoginTime(), r
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error connecting email"), r
        }
    }
    async connectDevice() {
        var e;
        try {
            return this.appEvent({
                type: I.APP_CONNECT_DEVICE
            })
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error connecting device"), n
        }
    }
    async connectOtp(e) {
        var n;
        try {
            return this.appEvent({
                type: I.APP_CONNECT_OTP,
                payload: e
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error connecting otp"), r
        }
    }
    async isConnected() {
        var e;
        try {
            if (!this.getLoginEmailUsed()) return {
                isConnected: !1
            };
            const n = await this.appEvent({
                type: I.APP_IS_CONNECTED
            });
            return n != null && n.isConnected || this.deleteAuthLoginCache(), n
        } catch (n) {
            throw this.deleteAuthLoginCache(), (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error checking connection"), n
        }
    }
    async getChainId() {
        var e;
        try {
            const n = await this.appEvent({
                type: I.APP_GET_CHAIN_ID
            });
            return this.setLastUsedChainId(n.chainId), n
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error getting chain id"), n
        }
    }
    async getSocialRedirectUri(e) {
        var n;
        try {
            return await this.init(), this.appEvent({
                type: I.APP_GET_SOCIAL_REDIRECT_URI,
                payload: e
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error getting social redirect uri"), r
        }
    }
    async updateEmail(e) {
        var n;
        try {
            const r = await this.appEvent({
                type: I.APP_UPDATE_EMAIL,
                payload: e
            });
            return this.setNewLastEmailLoginTime(), r
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error updating email"), r
        }
    }
    async updateEmailPrimaryOtp(e) {
        var n;
        try {
            return this.appEvent({
                type: I.APP_UPDATE_EMAIL_PRIMARY_OTP,
                payload: e
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error updating email primary otp"), r
        }
    }
    async updateEmailSecondaryOtp(e) {
        var n;
        try {
            const r = await this.appEvent({
                type: I.APP_UPDATE_EMAIL_SECONDARY_OTP,
                payload: e
            });
            return this.setLoginSuccess(r.newEmail), r
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error updating email secondary otp"), r
        }
    }
    async syncTheme(e) {
        var n;
        try {
            return this.appEvent({
                type: I.APP_SYNC_THEME,
                payload: e
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error syncing theme"), r
        }
    }
    async syncDappData(e) {
        var n;
        try {
            return this.appEvent({
                type: I.APP_SYNC_DAPP_DATA,
                payload: e
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error syncing dapp data"), r
        }
    }
    async getSmartAccountEnabledNetworks() {
        var e;
        try {
            const n = await this.appEvent({
                type: I.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
            });
            return this.persistSmartAccountEnabledNetworks(n.smartAccountEnabledNetworks), n
        } catch (n) {
            throw this.persistSmartAccountEnabledNetworks([]), (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error getting smart account enabled networks"), n
        }
    }
    async setPreferredAccount(e) {
        var n;
        try {
            return this.appEvent({
                type: I.APP_SET_PREFERRED_ACCOUNT,
                payload: {
                    type: e
                }
            })
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error setting preferred account"), r
        }
    }
    async connect(e) {
        var n, r;
        if (e != null && e.socialUri) try {
            await this.init();
            const s = this.getRpcUrl(e.chainId),
                a = await this.appEvent({
                    type: I.APP_CONNECT_SOCIAL,
                    payload: {
                        uri: e.socialUri,
                        preferredAccountType: e.preferredAccountType,
                        chainId: e.chainId,
                        siwxMessage: e.siwxMessage,
                        rpcUrl: s
                    }
                });
            return a.userName && this.setSocialLoginSuccess(a.userName), this.setLoginSuccess(a.email), this.setLastUsedChainId(a.chainId), this.user = a, a
        } catch (s) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: s
            }, "Error connecting social"), s
        } else try {
            const s = (e == null ? void 0 : e.chainId) || this.getLastUsedChainId() || 1,
                a = await this.getUser({
                    chainId: s,
                    preferredAccountType: e == null ? void 0 : e.preferredAccountType,
                    siwxMessage: e == null ? void 0 : e.siwxMessage,
                    rpcUrl: this.getRpcUrl(s)
                });
            return this.setLoginSuccess(a.email), this.setLastUsedChainId(a.chainId), this.user = a, a
        } catch (s) {
            throw (r = this.w3mLogger) == null || r.logger.error({
                error: s
            }, "Error connecting"), s
        }
    }
    async getUser(e) {
        var n;
        try {
            await this.init();
            const r = (e == null ? void 0 : e.chainId) || this.getLastUsedChainId() || 1,
                s = await this.appEvent({
                    type: I.APP_GET_USER,
                    payload: { ...e,
                        chainId: r,
                        rpcUrl: this.getRpcUrl(r)
                    }
                });
            return this.user = s, s
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error connecting"), r
        }
    }
    async connectSocial({
        uri: e,
        chainId: n,
        preferredAccountType: r
    }) {
        var s;
        try {
            await this.init();
            const a = this.getRpcUrl(n),
                o = await this.appEvent({
                    type: I.APP_CONNECT_SOCIAL,
                    payload: {
                        uri: e,
                        chainId: n,
                        rpcUrl: a,
                        preferredAccountType: r
                    }
                });
            return o.userName && this.setSocialLoginSuccess(o.userName), o
        } catch (a) {
            throw (s = this.w3mLogger) == null || s.logger.error({
                error: a
            }, "Error connecting social"), a
        }
    }
    async getFarcasterUri() {
        var e;
        try {
            return await this.init(), await this.appEvent({
                type: I.APP_GET_FARCASTER_URI
            })
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error getting farcaster uri"), n
        }
    }
    async connectFarcaster() {
        var e;
        try {
            const n = await this.appEvent({
                type: I.APP_CONNECT_FARCASTER
            });
            return n.userName && this.setSocialLoginSuccess(n.userName), n
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error connecting farcaster"), n
        }
    }
    async switchNetwork({
        chainId: e
    }) {
        var n;
        try {
            const r = this.getRpcUrl(e),
                s = await this.appEvent({
                    type: I.APP_SWITCH_NETWORK,
                    payload: {
                        chainId: e,
                        rpcUrl: r
                    }
                });
            return this.setLastUsedChainId(s.chainId), s
        } catch (r) {
            throw (n = this.w3mLogger) == null || n.logger.error({
                error: r
            }, "Error switching network"), r
        }
    }
    async disconnect() {
        var e;
        try {
            return this.deleteAuthLoginCache(), await new Promise(async r => {
                const s = setTimeout(() => {
                    r()
                }, 3e3);
                await this.appEvent({
                    type: I.APP_SIGN_OUT
                }), clearTimeout(s), r()
            })
        } catch (n) {
            throw (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error disconnecting"), n
        }
    }
    async request(e) {
        var r, s, a, o, i;
        const n = e;
        try {
            if (pe.GET_CHAIN_ID === e.method) return this.getLastUsedChainId();
            const l = e.chainNamespace || "eip155",
                d = (r = this.getActiveCaipNetwork(l)) == null ? void 0 : r.id;
            n.chainNamespace = l, n.chainId = d, n.rpcUrl = this.getRpcUrl(d), (s = this.rpcRequestHandler) == null || s.call(this, e);
            const p = await this.appEvent({
                type: I.APP_RPC_REQUEST,
                payload: n
            });
            return (a = this.rpcSuccessHandler) == null || a.call(this, p, n), p
        } catch (l) {
            throw (o = this.rpcErrorHandler) == null || o.call(this, l, n), (i = this.w3mLogger) == null || i.logger.error({
                error: l
            }, "Error requesting"), l
        }
    }
    onRpcRequest(e) {
        this.rpcRequestHandler = e
    }
    onRpcSuccess(e) {
        this.rpcSuccessHandler = e
    }
    onRpcError(e) {
        this.rpcErrorHandler = e
    }
    onIsConnected(e) {
        this.w3mFrame.events.onFrameEvent(n => {
            n.type === I.FRAME_IS_CONNECTED_SUCCESS && n.payload.isConnected && e()
        })
    }
    onNotConnected(e) {
        this.w3mFrame.events.onFrameEvent(n => {
            n.type === I.FRAME_IS_CONNECTED_ERROR && e(), n.type === I.FRAME_IS_CONNECTED_SUCCESS && !n.payload.isConnected && e()
        })
    }
    onConnect(e) {
        this.w3mFrame.events.onFrameEvent(n => {
            n.type === I.FRAME_GET_USER_SUCCESS && e(n.payload)
        })
    }
    onSocialConnected(e) {
        this.w3mFrame.events.onFrameEvent(n => {
            n.type === I.FRAME_CONNECT_SOCIAL_SUCCESS && e(n.payload)
        })
    }
    async getCapabilities() {
        try {
            return await this.request({
                method: "wallet_getCapabilities"
            }) || {}
        } catch {
            return {}
        }
    }
    onSetPreferredAccount(e) {
        this.w3mFrame.events.onFrameEvent(n => {
            n.type === I.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS ? e(n.payload) : n.type === I.FRAME_SET_PREFERRED_ACCOUNT_ERROR && e({
                type: pe.ACCOUNT_TYPES.EOA
            })
        })
    }
    getAvailableChainIds() {
        return Object.keys(this.w3mFrame.networks)
    }
    async rejectRpcRequests() {
        var e;
        try {
            await Promise.all(this.openRpcRequests.map(async ({
                abortController: n,
                method: r
            }) => {
                pe.SAFE_RPC_METHODS.includes(r) || n.abort(), await this.appEvent({
                    type: I.APP_RPC_ABORT
                })
            })), this.openRpcRequests = []
        } catch (n) {
            (e = this.w3mLogger) == null || e.logger.error({
                error: n
            }, "Error aborting RPC request")
        }
    }
    async appEvent(e) {
        let n, r;

        function s(l) {
            return l.replace("@w3m-app/", "")
        }
        const a = [I.APP_SYNC_DAPP_DATA, I.APP_SYNC_THEME, I.APP_SET_PREFERRED_ACCOUNT],
            o = s(e.type);
        return !this.w3mFrame.iframeIsReady && !a.includes(e.type) && (r = setTimeout(() => {
            var l;
            (l = this.onTimeout) == null || l.call(this, "iframe_load_failed"), this.abortController.abort()
        }, 2e4)), await this.w3mFrame.frameLoadPromise, clearTimeout(r), [I.APP_CONNECT_EMAIL, I.APP_CONNECT_DEVICE, I.APP_CONNECT_OTP, I.APP_CONNECT_SOCIAL, I.APP_GET_SOCIAL_REDIRECT_URI].map(s).includes(o) && (n = setTimeout(() => {
            var l;
            (l = this.onTimeout) == null || l.call(this, "iframe_request_timeout"), this.abortController.abort()
        }, 12e4)), new Promise((l, d) => {
            var b, j, F;
            const p = Math.random().toString(36).substring(7);
            (F = (b = this.w3mLogger) == null ? void 0 : (j = b.logger).info) == null || F.call(j, {
                event: e,
                id: p
            }, "Sending app event"), this.w3mFrame.events.postAppEvent({ ...e,
                id: p
            });
            const h = new AbortController;
            if (o === "RPC_REQUEST") {
                const w = e;
                this.openRpcRequests = [...this.openRpcRequests, { ...w.payload,
                    abortController: h
                }]
            }
            h.signal.addEventListener("abort", () => {
                o === "RPC_REQUEST" ? d(new Error("Request was aborted")) : o !== "GET_FARCASTER_URI" && d(new Error("Something went wrong"))
            });

            function y(w, H) {
                var P, Z, le;
                w.id === p && ((Z = H == null ? void 0 : (P = H.logger).info) == null || Z.call(P, {
                    framEvent: w,
                    id: p
                }, "Received frame response"), w.type === `@w3m-frame/${o}_SUCCESS` ? (n && clearTimeout(n), r && clearTimeout(r), "payload" in w && l(w.payload), l(void 0)) : w.type === `@w3m-frame/${o}_ERROR` && (n && clearTimeout(n), r && clearTimeout(r), "payload" in w && d(new Error(((le = w.payload) == null ? void 0 : le.message) || "An error occurred")), d(new Error("An error occurred"))))
            }
            this.w3mFrame.events.registerFrameEventHandler(p, w => y(w, this.w3mLogger), this.abortController.signal)
        })
    }
    setNewLastEmailLoginTime() {
        he.set(I.LAST_EMAIL_LOGIN_TIME, Date.now().toString())
    }
    setSocialLoginSuccess(e) {
        he.set(I.SOCIAL_USERNAME, e)
    }
    setLoginSuccess(e) {
        e && he.set(I.EMAIL, e), he.set(I.EMAIL_LOGIN_USED_KEY, "true"), he.delete(I.LAST_EMAIL_LOGIN_TIME)
    }
    deleteAuthLoginCache() {
        he.delete(I.EMAIL_LOGIN_USED_KEY), he.delete(I.EMAIL), he.delete(I.LAST_USED_CHAIN_KEY), he.delete(I.SOCIAL_USERNAME)
    }
    setLastUsedChainId(e) {
        e && he.set(I.LAST_USED_CHAIN_KEY, String(e))
    }
    getLastUsedChainId() {
        const e = he.get(I.LAST_USED_CHAIN_KEY) ? ? void 0,
            n = Number(e);
        return isNaN(n) ? e : n
    }
    persistSmartAccountEnabledNetworks(e) {
        he.set(I.SMART_ACCOUNT_ENABLED_NETWORKS, e.join(","))
    }
    getRpcUrl(e) {
        var a, o;
        let n = e === void 0 ? void 0 : "eip155";
        typeof e == "string" && (e.includes(":") ? n = (a = Te.parseCaipNetworkId(e)) == null ? void 0 : a.chainNamespace : Number.isInteger(Number(e)) ? n = "eip155" : n = "solana");
        const r = this.getCaipNetworks(n),
            s = e ? r.find(i => String(i.id) === String(e) || i.caipNetworkId === e) : r[0];
        return (o = s == null ? void 0 : s.rpcUrls.default.http) == null ? void 0 : o[0]
    }
}
class Lt {
    constructor() {}
    static getInstance({
        projectId: e,
        chainId: n,
        enableLogger: r,
        onTimeout: s,
        abortController: a,
        getActiveCaipNetwork: o,
        getCaipNetworks: i
    }) {
        var l;
        return Lt.instance || (Lt.instance = new fi({
            projectId: e,
            chainId: n,
            enableLogger: r,
            onTimeout: s,
            abortController: a,
            getActiveCaipNetwork: o,
            getCaipNetworks: i,
            enableCloudAuthAccount: !!((l = m.state.remoteFeatures) != null && l.emailCapture)
        })), Lt.instance
    }
}
var ur = {};
const mi = {
        ACCOUNT_TABS: [{
            label: "Tokens"
        }, {
            label: "NFTs"
        }, {
            label: "Activity"
        }],
        SECURE_SITE_ORIGIN: (typeof It < "u" && typeof ur < "u" ? ur.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: {
            Next: "next",
            Prev: "prev"
        },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
            HeaderText: 120,
            ModalHeight: 150,
            ViewTransition: 150
        }
    },
    qn = {
        filterOutDuplicatesByRDNS(t) {
            const e = m.state.enableEIP6963 ? E.state.connectors : [],
                n = g.getRecentWallets(),
                r = e.map(i => {
                    var l;
                    return (l = i.info) == null ? void 0 : l.rdns
                }).filter(Boolean),
                s = n.map(i => i.rdns).filter(Boolean),
                a = r.concat(s);
            if (a.includes("io.metamask.mobile") && O.isMobile()) {
                const i = a.indexOf("io.metamask.mobile");
                a[i] = "io.metamask"
            }
            return t.filter(i => !(i != null && i.rdns && a.includes(String(i.rdns)) || !(i != null && i.rdns) && e.some(d => d.name === i.name)))
        },
        filterOutDuplicatesByIds(t) {
            const e = E.state.connectors.filter(i => i.type === "ANNOUNCED" || i.type === "INJECTED"),
                n = g.getRecentWallets(),
                r = e.map(i => i.explorerId),
                s = n.map(i => i.id),
                a = r.concat(s);
            return t.filter(i => !a.includes(i == null ? void 0 : i.id))
        },
        filterOutDuplicateWallets(t) {
            const e = this.filterOutDuplicatesByRDNS(t);
            return this.filterOutDuplicatesByIds(e)
        },
        markWalletsAsInstalled(t) {
            const {
                connectors: e
            } = E.state, {
                featuredWalletIds: n
            } = m.state, r = e.filter(o => o.type === "ANNOUNCED").reduce((o, i) => {
                var l;
                return (l = i.info) != null && l.rdns && (o[i.info.rdns] = !0), o
            }, {});
            return t.map(o => ({ ...o,
                installed: !!o.rdns && !!r[o.rdns ? ? ""]
            })).sort((o, i) => {
                const l = Number(i.installed) - Number(o.installed);
                if (l !== 0) return l;
                if (n != null && n.length) {
                    const d = n.indexOf(o.id),
                        p = n.indexOf(i.id);
                    if (d !== -1 && p !== -1) return d - p;
                    if (d !== -1) return -1;
                    if (p !== -1) return 1
                }
                return 0
            })
        },
        getConnectOrderMethod(t, e) {
            var l;
            const n = (t == null ? void 0 : t.connectMethodsOrder) || ((l = m.state.features) == null ? void 0 : l.connectMethodsOrder),
                r = e || E.state.connectors;
            if (n) return n;
            const {
                injected: s,
                announced: a
            } = dn.getConnectorsByType(r, x.state.recommended, x.state.featured), o = s.filter(dn.showConnector), i = a.filter(dn.showConnector);
            return o.length || i.length ? ["wallet", "email", "social"] : mi.DEFAULT_CONNECT_METHOD_ORDER
        },
        isExcluded(t) {
            const e = !!t.rdns && x.state.excludedWallets.some(r => r.rdns === t.rdns),
                n = !!t.name && x.state.excludedWallets.some(r => Ee.isLowerCaseMatch(r.name, t.name));
            return e || n
        },
        markWalletsWithDisplayIndex(t) {
            return t.map((e, n) => ({ ...e,
                display_index: n
            }))
        }
    },
    dn = {
        getConnectorsByType(t, e, n) {
            const {
                customWallets: r
            } = m.state, s = g.getRecentWallets(), a = qn.filterOutDuplicateWallets(e), o = qn.filterOutDuplicateWallets(n), i = t.filter(h => h.type === "MULTI_CHAIN"), l = t.filter(h => h.type === "ANNOUNCED"), d = t.filter(h => h.type === "INJECTED"), p = t.filter(h => h.type === "EXTERNAL");
            return {
                custom: r,
                recent: s,
                external: p,
                multiChain: i,
                announced: l,
                injected: d,
                recommended: a,
                featured: o
            }
        },
        showConnector(t) {
            var s;
            const e = (s = t.info) == null ? void 0 : s.rdns,
                n = !!e && x.state.excludedWallets.some(a => !!a.rdns && a.rdns === e),
                r = !!t.name && x.state.excludedWallets.some(a => Ee.isLowerCaseMatch(a.name, t.name));
            return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!O.isMobile() || O.isMobile() && !e && !_.checkInstalled()) || n || r) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (n || r))
        },
        getIsConnectedWithWC() {
            return Array.from(u.state.chains.values()).some(n => E.getConnectorId(n.namespace) === f.CONNECTOR_ID.WALLET_CONNECT)
        },
        getConnectorTypeOrder({
            recommended: t,
            featured: e,
            custom: n,
            recent: r,
            announced: s,
            injected: a,
            multiChain: o,
            external: i,
            overriddenConnectors: l = (d => (d = m.state.features) == null ? void 0 : d.connectorTypeOrder)() ? ? []
        }) {
            const y = [{
                    type: "walletConnect",
                    isEnabled: m.state.enableWalletConnect
                }, {
                    type: "recent",
                    isEnabled: r.length > 0
                }, {
                    type: "injected",
                    isEnabled: [...a, ...s, ...o].length > 0
                }, {
                    type: "featured",
                    isEnabled: e.length > 0
                }, {
                    type: "custom",
                    isEnabled: n && n.length > 0
                }, {
                    type: "external",
                    isEnabled: i.length > 0
                }, {
                    type: "recommended",
                    isEnabled: t.length > 0
                }].filter(w => w.isEnabled),
                b = new Set(y.map(w => w.type)),
                j = l.filter(w => b.has(w)).map(w => ({
                    type: w,
                    isEnabled: !0
                })),
                F = y.filter(({
                    type: w
                }) => !j.some(({
                    type: P
                }) => P === w));
            return Array.from(new Set([...j, ...F].map(({
                type: w
            }) => w)))
        },
        getAuthName({
            email: t,
            socialUsername: e,
            socialProvider: n
        }) {
            return e ? n && n === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0,-3)}...` : t
        },
        async fetchProviderData(t) {
            var e, n;
            try {
                if (t.name === "Browser Wallet" && !O.isMobile()) return {
                    accounts: [],
                    chainId: void 0
                };
                if (t.id === f.CONNECTOR_ID.AUTH) return {
                    accounts: [],
                    chainId: void 0
                };
                const [r, s] = await Promise.all([(e = t.provider) == null ? void 0 : e.request({
                    method: "eth_accounts"
                }), (n = t.provider) == null ? void 0 : n.request({
                    method: "eth_chainId"
                }).then(a => Number(a))]);
                return {
                    accounts: r,
                    chainId: s
                }
            } catch (r) {
                return console.warn(`Failed to fetch provider data for ${t.name}`, r), {
                    accounts: [],
                    chainId: void 0
                }
            }
        }
    };
let Dt, tt, nt;

function Pi(t, e) {
    Dt = document.createElement("style"), tt = document.createElement("style"), nt = document.createElement("style"), Dt.textContent = Nt(t).core.cssText, tt.textContent = Nt(t).dark.cssText, nt.textContent = Nt(t).light.cssText, document.head.appendChild(Dt), document.head.appendChild(tt), document.head.appendChild(nt), Ur(e)
}

function Ur(t) {
    tt && nt && (t === "light" ? (tt.removeAttribute("media"), nt.media = "enabled") : (nt.removeAttribute("media"), tt.media = "enabled"))
}

function gi(t) {
    Dt && tt && nt && (Dt.textContent = Nt(t).core.cssText, tt.textContent = Nt(t).dark.cssText, nt.textContent = Nt(t).light.cssText)
}

function Nt(t) {
    return {
        core: At `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Pe(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Pe((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Pe((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Pe((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Pe((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
        light: At `
      :root {
        --w3m-color-mix: ${Pe((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Pe(Ye(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Pe(Ye(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
        dark: At `
      :root {
        --w3m-color-mix: ${Pe((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Pe(Ye(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Pe(Ye(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
    }
}
const Ui = At `
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
    xi = At `
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
    Li = At `
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,
    un = {
        hexStringToNumber(t) {
            const e = t.startsWith("0x") ? t.slice(2) : t;
            return parseInt(e, 16)
        },
        numberToHexString(t) {
            return `0x${t.toString(16)}`
        },
        async getUserInfo(t) {
            const [e, n] = await Promise.all([un.getAddresses(t), un.getChainId(t)]);
            return {
                chainId: n,
                addresses: e
            }
        },
        async getChainId(t) {
            const e = await t.request({
                method: "eth_chainId"
            });
            return Number(e)
        },
        async getAddress(t) {
            const [e] = await t.request({
                method: "eth_accounts"
            });
            return e
        },
        async getAddresses(t) {
            return await t.request({
                method: "eth_accounts"
            })
        },
        async addEthereumChain(t, e) {
            var r, s;
            const n = ((r = e.rpcUrls.chainDefault) == null ? void 0 : r.http) || [];
            await t.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: un.numberToHexString(e.id),
                    rpcUrls: [...n],
                    chainName: e.name,
                    nativeCurrency: {
                        name: e.nativeCurrency.name,
                        decimals: e.nativeCurrency.decimals,
                        symbol: e.nativeCurrency.symbol
                    },
                    blockExplorerUrls: [(s = e.blockExplorers) == null ? void 0 : s.default.url],
                    iconUrls: [Wt.NetworkImageIds[e.id]]
                }]
            })
        }
    },
    gt = {
        ACCOUNT_INDEXES: {
            PAYMENT: 0,
            ORDINAL: 1
        }
    };

function tn(t) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...t
    }
}
const pr = tn({
        id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        name: "Solana",
        network: "solana-mainnet",
        nativeCurrency: {
            name: "Solana",
            symbol: "SOL",
            decimals: 9
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.walletconnect.org/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Solscan",
                url: "https://solscan.io"
            }
        },
        testnet: !1,
        chainNamespace: "solana",
        caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
    }),
    hr = tn({
        id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        name: "Solana Devnet",
        network: "solana-devnet",
        nativeCurrency: {
            name: "Solana",
            symbol: "SOL",
            decimals: 9
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.walletconnect.org/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Solscan",
                url: "https://solscan.io"
            }
        },
        testnet: !0,
        chainNamespace: "solana",
        caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
    });
tn({
    id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    name: "Solana Testnet",
    network: "solana-testnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !0,
    chainNamespace: "solana",
    caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
});
tn({
    id: "000000000019d6689c085ae165831e93",
    caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
    chainNamespace: "bip122",
    name: "Bitcoin",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    }
});
tn({
    id: "000000000933ea01ad0ee984209779ba",
    caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
    chainNamespace: "bip122",
    name: "Bitcoin Testnet",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    testnet: !0
});
const xr = {
        solana: ["solana_signMessage", "solana_signTransaction", "solana_requestAccounts", "solana_getAccounts", "solana_signAllTransactions", "solana_signAndSendTransaction"],
        eip155: ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_showCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"],
        bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
    },
    Ge = {
        getMethodsByChainNamespace(t) {
            return xr[t] || []
        },
        createDefaultNamespace(t) {
            return {
                methods: this.getMethodsByChainNamespace(t),
                events: ["accountsChanged", "chainChanged"],
                chains: [],
                rpcMap: {}
            }
        },
        applyNamespaceOverrides(t, e) {
            if (!e) return { ...t
            };
            const n = { ...t
                },
                r = new Set;
            if (e.methods && Object.keys(e.methods).forEach(s => r.add(s)), e.chains && Object.keys(e.chains).forEach(s => r.add(s)), e.events && Object.keys(e.events).forEach(s => r.add(s)), e.rpcMap && Object.keys(e.rpcMap).forEach(s => {
                    const [a] = s.split(":");
                    a && r.add(a)
                }), r.forEach(s => {
                    n[s] || (n[s] = this.createDefaultNamespace(s))
                }), e.methods && Object.entries(e.methods).forEach(([s, a]) => {
                    n[s] && (n[s].methods = a)
                }), e.chains && Object.entries(e.chains).forEach(([s, a]) => {
                    n[s] && (n[s].chains = a)
                }), e.events && Object.entries(e.events).forEach(([s, a]) => {
                    n[s] && (n[s].events = a)
                }), e.rpcMap) {
                const s = new Set;
                Object.entries(e.rpcMap).forEach(([a, o]) => {
                    const [i, l] = a.split(":");
                    !i || !l || !n[i] || (n[i].rpcMap || (n[i].rpcMap = {}), s.has(i) || (n[i].rpcMap = {}, s.add(i)), n[i].rpcMap[l] = o)
                })
            }
            return n
        },
        createNamespaces(t, e) {
            const n = t.reduce((r, s) => {
                const {
                    id: a,
                    chainNamespace: o,
                    rpcUrls: i
                } = s, l = i.default.http[0];
                r[o] || (r[o] = this.createDefaultNamespace(o));
                const d = `${o}:${a}`,
                    p = r[o];
                switch (p.chains.push(d), d) {
                    case pr.caipNetworkId:
                        p.chains.push(pr.deprecatedCaipNetworkId);
                        break;
                    case hr.caipNetworkId:
                        p.chains.push(hr.deprecatedCaipNetworkId);
                        break
                }
                return p != null && p.rpcMap && l && (p.rpcMap[a] = l), r
            }, {});
            return this.applyNamespaceOverrides(n, e)
        },
        resolveReownName: async t => {
            var r;
            const e = await xt.resolveName(t);
            return ((r = (Object.values(e == null ? void 0 : e.addresses) || [])[0]) == null ? void 0 : r.address) || !1
        },
        getChainsFromNamespaces(t = {}) {
            return Object.values(t).flatMap(e => {
                const n = e.chains || [],
                    r = e.accounts.map(s => {
                        const [a, o] = s.split(":");
                        return `${a}:${o}`
                    });
                return Array.from(new Set([...n, ...r]))
            })
        },
        isSessionEventData(t) {
            return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null
        },
        isOriginAllowed(t, e, n) {
            for (const r of [...e, ...n])
                if (r.includes("*")) {
                    const a = `^${r.replace(/[.*+?^${}()|[\]\\]/gu,"\\$&").replace(/\\\*/gu,".*")}$`;
                    if (new RegExp(a, "u").test(t)) return !0
                } else try {
                    if (new URL(r).origin === t) return !0
                } catch {
                    if (r === t) return !0
                }
            return !1
        },
        listenWcProvider({
            universalProvider: t,
            namespace: e,
            onConnect: n,
            onDisconnect: r,
            onAccountsChanged: s,
            onChainChanged: a,
            onDisplayUri: o
        }) {
            n && t.on("connect", () => {
                const i = Ge.getWalletConnectAccounts(t, e);
                n(i)
            }), r && t.on("disconnect", () => {
                r()
            }), s && t.on("session_event", i => {
                if (Ge.isSessionEventData(i)) {
                    const {
                        name: l,
                        data: d
                    } = i.params.event;
                    if (l === "accountsChanged" && Array.isArray(d)) {
                        const p = d.filter(h => O.isCaipAddress(h)).map(h => Te.parseCaipAddress(h)).filter(h => h.chainNamespace === e);
                        s(p)
                    }
                }
            }), a && t.on("chainChanged", i => {
                a(i)
            }), o && t.on("display_uri", i => {
                o(i)
            })
        },
        getWalletConnectAccounts(t, e) {
            var s, a, o, i;
            const n = new Set,
                r = (i = (o = (a = (s = t == null ? void 0 : t.session) == null ? void 0 : s.namespaces) == null ? void 0 : a[e]) == null ? void 0 : o.accounts) == null ? void 0 : i.map(l => Te.parseCaipAddress(l)).filter(({
                    address: l
                }) => n.has(l.toLowerCase()) ? !1 : (n.add(l.toLowerCase()), !0));
            return r && r.length > 0 ? r : []
        }
    };
class Ci {
    constructor(e) {
        this.namespace = e.namespace
    }
    async syncConnections(e) {
        switch (this.namespace) {
            case f.CHAIN.EVM:
                await this.syncEVMConnections(e);
                break;
            case f.CHAIN.SOLANA:
                await this.syncSolanaConnections(e);
                break;
            case f.CHAIN.BITCOIN:
                await this.syncBitcoinConnections(e);
                break;
            default:
                throw new Error(`Unsupported chain namespace: ${this.namespace}`)
        }
    }
    async syncEVMConnections({
        connectors: e,
        caipNetworks: n,
        universalProvider: r,
        getConnectionStatusInfo: s,
        onConnection: a,
        onListenProvider: o
    }) {
        await Promise.all(e.filter(i => {
            const {
                hasDisconnected: l,
                hasConnected: d
            } = s(i.id);
            return !l && d
        }).map(async i => {
            if (i.id === f.CONNECTOR_ID.WALLET_CONNECT) {
                const l = Ge.getWalletConnectAccounts(r, this.namespace),
                    d = n.find(p => {
                        var h, y;
                        return p.chainNamespace === this.namespace && p.id.toString() === ((y = (h = l[0]) == null ? void 0 : h.chainId) == null ? void 0 : y.toString())
                    });
                l.length > 0 && a({
                    connectorId: i.id,
                    accounts: l.map(p => ({
                        address: p.address
                    })),
                    caipNetwork: d
                })
            } else {
                const {
                    accounts: l,
                    chainId: d
                } = await dn.fetchProviderData(i);
                if (l.length > 0 && d) {
                    const p = n.find(h => h.chainNamespace === this.namespace && h.id.toString() === d.toString());
                    a({
                        connectorId: i.id,
                        accounts: l.map(h => ({
                            address: h
                        })),
                        caipNetwork: p
                    }), i.provider && i.id !== f.CONNECTOR_ID.AUTH && i.id !== f.CONNECTOR_ID.WALLET_CONNECT && o(i.id, i.provider)
                }
            }
        }))
    }
    async syncSolanaConnections({
        connectors: e,
        caipNetwork: n,
        universalProvider: r,
        getConnectionStatusInfo: s,
        onConnection: a,
        onListenProvider: o
    }) {
        await Promise.all(e.filter(i => {
            const {
                hasDisconnected: l,
                hasConnected: d
            } = s(i.id);
            return !l && d
        }).map(async i => {
            if (i.id === f.CONNECTOR_ID.WALLET_CONNECT) {
                const l = Ge.getWalletConnectAccounts(r, this.namespace);
                l.length > 0 && a({
                    connectorId: i.id,
                    accounts: l.map(d => ({
                        address: d.address
                    })),
                    caipNetwork: n
                })
            } else {
                const l = await i.connect({
                    chainId: n == null ? void 0 : n.id
                });
                l && (a({
                    connectorId: i.id,
                    accounts: [{
                        address: l
                    }],
                    caipNetwork: n
                }), o(i.id, i.provider))
            }
        }))
    }
    async syncBitcoinConnections({
        connectors: e,
        caipNetwork: n,
        universalProvider: r,
        getConnectionStatusInfo: s,
        onConnection: a,
        onListenProvider: o
    }) {
        await Promise.all(e.filter(i => {
            const {
                hasDisconnected: l,
                hasConnected: d
            } = s(i.id);
            return !l && d
        }).map(async i => {
            var y, b, j, F, w, H;
            if (i.id === f.CONNECTOR_ID.WALLET_CONNECT) {
                const P = Ge.getWalletConnectAccounts(r, this.namespace);
                P.length > 0 && a({
                    connectorId: i.id,
                    accounts: P.map(Z => ({
                        address: Z.address
                    })),
                    caipNetwork: n
                });
                return
            }
            const l = await i.connect(),
                d = await i.getAccountAddresses();
            let p = d == null ? void 0 : d.map(P => O.createAccount(f.CHAIN.BITCOIN, P.address, P.purpose || "payment", P.publicKey, P.path));
            if (p && p.length > 1 && (p = [{
                    namespace: f.CHAIN.BITCOIN,
                    publicKey: ((y = p[gt.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : y.publicKey) ? ? "",
                    path: ((b = p[gt.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : b.path) ? ? "",
                    address: ((j = p[gt.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : j.address) ? ? "",
                    type: "payment"
                }, {
                    namespace: f.CHAIN.BITCOIN,
                    publicKey: ((F = p[gt.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : F.publicKey) ? ? "",
                    path: ((w = p[gt.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : w.path) ? ? "",
                    address: ((H = p[gt.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : H.address) ? ? "",
                    type: "ordinal"
                }]), !(i.chains.find(P => P.id === (n == null ? void 0 : n.id)) || i.chains[0])) throw new Error("The connector does not support any of the requested chains");
            l && (o(i.id, i.provider), a({
                connectorId: i.id,
                accounts: p.map(P => ({
                    address: P.address,
                    type: P.type
                })),
                caipNetwork: n
            }))
        }))
    }
    getConnection({
        address: e,
        connectorId: n,
        connections: r,
        connectors: s
    }) {
        if (n) {
            const o = r.find(d => Ee.isLowerCaseMatch(d.connectorId, n));
            if (!o) return null;
            const i = s.find(d => Ee.isLowerCaseMatch(d.id, o.connectorId)),
                l = e ? o.accounts.find(d => Ee.isLowerCaseMatch(d.address, e)) : o.accounts[0];
            return { ...o,
                account: l,
                connector: i
            }
        }
        const a = r.find(o => o.accounts.length > 0 && s.some(i => Ee.isLowerCaseMatch(i.id, o.connectorId)));
        if (a) {
            const [o] = a.accounts, i = s.find(l => Ee.isLowerCaseMatch(l.id, a.connectorId));
            return { ...a,
                account: o,
                connector: i
            }
        }
        return null
    }
}
const _t = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: ["http://localhost:*", "https://localhost:*", "http://127.0.0.1:*", "https://127.0.0.1:*", "https://*.pages.dev", "https://*.vercel.app", "https://*.ngrok-free.app", "https://secure-mobile.walletconnect.com", "https://secure-mobile.walletconnect.org"]
};
class Lr {
    constructor({
        provider: e,
        namespace: n
    }) {
        this.id = f.CONNECTOR_ID.WALLET_CONNECT, this.name = Wt.ConnectorNamesMap[f.CONNECTOR_ID.WALLET_CONNECT], this.type = "WALLET_CONNECT", this.imageId = Wt.ConnectorImageIds[f.CONNECTOR_ID.WALLET_CONNECT], this.getCaipNetworks = u.getCaipNetworks.bind(u), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = n
    }
    get chains() {
        return this.getCaipNetworks()
    }
    async connectWalletConnect() {
        if (!await this.authenticate()) {
            const n = this.getCaipNetworks(),
                r = m.state.universalProviderConfigOverride,
                s = Ge.createNamespaces(n, r);
            await this.provider.connect({
                optionalNamespaces: s
            })
        }
        return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session
        }
    }
    async disconnect() {
        await this.provider.disconnect()
    }
    async authenticate() {
        const e = this.chains.map(n => n.caipNetworkId);
        return xe.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains: e,
            methods: Ei
        })
    }
}
const Ei = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"],
    wi = [f.CONNECTOR_ID.AUTH, f.CONNECTOR_ID.WALLET_CONNECT];
class _i {
    constructor(e) {
        this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = new Map, this.getCaipNetworks = n => u.getCaipNetworks(n), this.getConnectorId = n => E.getConnectorId(n), e && this.construct(e), e != null && e.namespace && (this.connectionManager = new Ci({
            namespace: e.namespace
        }))
    }
    construct(e) {
        this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType
    }
    get connectors() {
        return this.availableConnectors
    }
    get connections() {
        return this.availableConnections
    }
    get networks() {
        return this.getCaipNetworks(this.namespace)
    }
    onAuthConnected({
        accounts: e,
        chainId: n
    }) {
        const r = this.getCaipNetworks().filter(s => s.chainNamespace === this.namespace).find(s => s.id.toString() === (n == null ? void 0 : n.toString()));
        e && r && this.addConnection({
            connectorId: f.CONNECTOR_ID.AUTH,
            accounts: e,
            caipNetwork: r
        })
    }
    setAuthProvider(e) {
        e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
            id: f.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: f.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: Wt.ConnectorImageIds[f.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: []
        })
    }
    addConnector(...e) {
        const n = new Set;
        this.availableConnectors = [...e, ...this.availableConnectors].filter(r => n.has(r.id) ? !1 : (n.add(r.id), !0)), this.emit("connectors", this.availableConnectors)
    }
    addConnection(...e) {
        const n = new Set;
        this.availableConnections = [...e, ...this.availableConnections].filter(r => n.has(r.connectorId.toLowerCase()) ? !1 : (n.add(r.connectorId.toLowerCase()), !0)), this.emit("connections", this.availableConnections)
    }
    deleteConnection(e) {
        this.availableConnections = this.availableConnections.filter(n => !Ee.isLowerCaseMatch(n.connectorId, e)), this.emit("connections", this.availableConnections)
    }
    clearConnections(e = !1) {
        this.availableConnections = [], e && this.emit("connections", this.availableConnections)
    }
    setStatus(e, n) {
        R.setStatus(e, n)
    }
    on(e, n) {
        var r;
        this.eventListeners.has(e) || this.eventListeners.set(e, new Set), (r = this.eventListeners.get(e)) == null || r.add(n)
    }
    off(e, n) {
        const r = this.eventListeners.get(e);
        r && r.delete(n)
    }
    removeAllEventListeners() {
        this.eventListeners.forEach(e => {
            e.clear()
        })
    }
    emit(e, n) {
        const r = this.eventListeners.get(e);
        r && r.forEach(s => s(n))
    }
    async connectWalletConnect(e) {
        return {
            clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        }
    }
    async switchNetwork(e) {
        const {
            caipNetwork: n,
            providerType: r
        } = e;
        if (!e.provider) return;
        const s = "provider" in e.provider ? e.provider.provider : e.provider;
        if (r === "WALLET_CONNECT") {
            s.setDefaultChain(n.caipNetworkId);
            return
        }
        if (s && r === "AUTH") {
            const a = s,
                o = We(n.chainNamespace);
            await a.switchNetwork({
                chainId: n.caipNetworkId
            });
            const i = await a.getUser({
                chainId: n.caipNetworkId,
                preferredAccountType: o
            });
            this.emit("switchNetwork", i)
        }
    }
    getWalletConnectConnector() {
        const e = this.connectors.find(n => n instanceof Lr);
        if (!e) throw new Error("WalletConnectConnector not found");
        return e
    }
    onConnect(e, n) {
        if (e.length > 0) {
            const {
                address: r,
                chainId: s
            } = O.getAccount(e[0]), a = this.getCaipNetworks().filter(i => i.chainNamespace === this.namespace).find(i => i.id.toString() === (s == null ? void 0 : s.toString())), o = this.connectors.find(i => i.id === n);
            r && (this.emit("accountChanged", {
                address: r,
                chainId: s,
                connector: o
            }), this.addConnection({
                connectorId: n,
                accounts: e.map(i => {
                    const {
                        address: l
                    } = O.getAccount(i);
                    return {
                        address: l
                    }
                }),
                caipNetwork: a
            }))
        }
    }
    onAccountsChanged(e, n, r = !0) {
        var s, a;
        if (e.length > 0) {
            const {
                address: o
            } = O.getAccount(e[0]), i = (s = this.connectionManager) == null ? void 0 : s.getConnection({
                connectorId: n,
                connections: this.connections,
                connectors: this.connectors
            });
            o && Ee.isLowerCaseMatch(this.getConnectorId(f.CHAIN.EVM), n) && this.emit("accountChanged", {
                address: o,
                chainId: (a = i == null ? void 0 : i.caipNetwork) == null ? void 0 : a.id,
                connector: i == null ? void 0 : i.connector
            }), this.addConnection({
                connectorId: n,
                accounts: e.map(l => {
                    const {
                        address: d
                    } = O.getAccount(l);
                    return {
                        address: d
                    }
                }),
                caipNetwork: i == null ? void 0 : i.caipNetwork
            })
        } else r && this.onDisconnect(n)
    }
    onDisconnect(e) {
        this.removeProviderListeners(e), this.deleteConnection(e), Ee.isLowerCaseMatch(this.getConnectorId(f.CHAIN.EVM), e) && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect")
    }
    onChainChanged(e, n) {
        var o;
        const r = typeof e == "string" && e.startsWith("0x") ? un.hexStringToNumber(e).toString() : e.toString(),
            s = (o = this.connectionManager) == null ? void 0 : o.getConnection({
                connectorId: n,
                connections: this.connections,
                connectors: this.connectors
            }),
            a = this.getCaipNetworks().filter(i => i.chainNamespace === this.namespace).find(i => i.id.toString() === r);
        s && this.addConnection({
            connectorId: n,
            accounts: s.accounts,
            caipNetwork: a
        }), Ee.isLowerCaseMatch(this.getConnectorId(f.CHAIN.EVM), n) && this.emit("switchNetwork", {
            chainId: r
        })
    }
    listenProviderEvents(e, n) {
        if (wi.includes(e)) return;
        const r = o => this.onAccountsChanged(o, e),
            s = o => this.onChainChanged(o, e),
            a = () => this.onDisconnect(e);
        this.providerHandlers[e] || (n.on("disconnect", a), n.on("accountsChanged", r), n.on("chainChanged", s), this.providerHandlers[e] = {
            provider: n,
            disconnect: a,
            accountsChanged: r,
            chainChanged: s
        })
    }
    removeProviderListeners(e) {
        if (this.providerHandlers[e]) {
            const {
                provider: n,
                disconnect: r,
                accountsChanged: s,
                chainChanged: a
            } = this.providerHandlers[e];
            n.removeListener("disconnect", r), n.removeListener("accountsChanged", s), n.removeListener("chainChanged", a), this.providerHandlers[e] = null
        }
    }
    emitFirstAvailableConnection() {
        var n, r;
        const e = (n = this.connectionManager) == null ? void 0 : n.getConnection({
            connections: this.connections,
            connectors: this.connectors
        });
        if (e) {
            const [s] = e.accounts;
            this.emit("accountChanged", {
                address: s == null ? void 0 : s.address,
                chainId: (r = e.caipNetwork) == null ? void 0 : r.id,
                connector: e.connector
            })
        }
    }
}
class Ai extends _i {
    async setUniversalProvider(e) {
        if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
        return this.addConnector(new Lr({
            provider: e,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace
        })), Promise.resolve()
    }
    async connect(e) {
        return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: Number(e.chainId),
            provider: this.provider,
            address: ""
        })
    }
    async disconnect() {
        try {
            await this.getWalletConnectConnector().disconnect(), this.emit("disconnect")
        } catch (e) {
            console.warn("UniversalAdapter:disconnect - error", e)
        }
        return {
            connections: []
        }
    }
    syncConnections() {
        return Promise.resolve()
    }
    async getAccounts({
        namespace: e
    }) {
        var s, a, o, i;
        const n = this.provider,
            r = ((i = (o = (a = (s = n == null ? void 0 : n.session) == null ? void 0 : s.namespaces) == null ? void 0 : a[e]) == null ? void 0 : o.accounts) == null ? void 0 : i.map(l => {
                const [, , d] = l.split(":");
                return d
            }).filter((l, d, p) => p.indexOf(l) === d)) || [];
        return Promise.resolve({
            accounts: r.map(l => O.createAccount(e, l, e === "bip122" ? "payment" : "eoa"))
        })
    }
    async syncConnectors() {
        return Promise.resolve()
    }
    async getBalance(e) {
        var a, o, i, l, d;
        if (!(e.caipNetwork && ee.BALANCE_SUPPORTED_CHAINS.includes((a = e.caipNetwork) == null ? void 0 : a.chainNamespace)) || (o = e.caipNetwork) != null && o.testnet) return {
            balance: "0.00",
            symbol: ((i = e.caipNetwork) == null ? void 0 : i.nativeCurrency.symbol) || ""
        };
        if (R.state.balanceLoading && e.chainId === ((l = u.state.activeCaipNetwork) == null ? void 0 : l.id)) return {
            balance: R.state.balance || "0.00",
            symbol: R.state.balanceSymbol || ""
        };
        const s = (await R.fetchTokenBalance()).find(p => {
            var h, y;
            return p.chainId === `${(h=e.caipNetwork)==null?void 0:h.chainNamespace}:${e.chainId}` && p.symbol === ((y = e.caipNetwork) == null ? void 0 : y.nativeCurrency.symbol)
        });
        return {
            balance: (s == null ? void 0 : s.quantity.numeric) || "0.00",
            symbol: (s == null ? void 0 : s.symbol) || ((d = e.caipNetwork) == null ? void 0 : d.nativeCurrency.symbol) || ""
        }
    }
    async signMessage(e) {
        var o, i, l;
        const {
            provider: n,
            message: r,
            address: s
        } = e;
        if (!n) throw new Error("UniversalAdapter:signMessage - provider is undefined");
        let a = "";
        return ((o = u.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace) === f.CHAIN.SOLANA ? a = (await n.request({
            method: "solana_signMessage",
            params: {
                message: Wr.encode(new TextEncoder().encode(r)),
                pubkey: s
            }
        }, (i = u.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId)).signature : a = await n.request({
            method: "personal_sign",
            params: [r, s]
        }, (l = u.state.activeCaipNetwork) == null ? void 0 : l.caipNetworkId), {
            signature: a
        }
    }
    async estimateGas() {
        return Promise.resolve({
            gas: BigInt(0)
        })
    }
    async sendTransaction() {
        return Promise.resolve({
            hash: ""
        })
    }
    walletGetAssets(e) {
        return Promise.resolve({})
    }
    async writeContract() {
        return Promise.resolve({
            hash: ""
        })
    }
    emitFirstAvailableConnection() {}
    parseUnits() {
        return 0 n
    }
    formatUnits() {
        return "0"
    }
    async getCapabilities() {
        return Promise.resolve({})
    }
    async grantPermissions() {
        return Promise.resolve({})
    }
    async revokePermissions() {
        return Promise.resolve("0x")
    }
    async syncConnection() {
        return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: 1,
            provider: this.provider,
            address: ""
        })
    }
    async switchNetwork(e) {
        var s, a, o, i, l, d;
        const {
            caipNetwork: n
        } = e, r = this.getWalletConnectConnector();
        if (n.chainNamespace === f.CHAIN.EVM) try {
            await ((s = r.provider) == null ? void 0 : s.request({
                method: "wallet_switchEthereumChain",
                params: [{
                    chainId: Zn(n.id)
                }]
            }))
        } catch (p) {
            if (p.code === _t.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || p.code === _t.ERROR_INVALID_CHAIN_ID || p.code === _t.ERROR_CODE_DEFAULT || ((o = (a = p == null ? void 0 : p.data) == null ? void 0 : a.originalError) == null ? void 0 : o.code) === _t.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
                await ((d = r.provider) == null ? void 0 : d.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: Zn(n.id),
                        rpcUrls: [(i = n == null ? void 0 : n.rpcUrls.chainDefault) == null ? void 0 : i.http],
                        chainName: n.name,
                        nativeCurrency: n.nativeCurrency,
                        blockExplorerUrls: [(l = n.blockExplorers) == null ? void 0 : l.default.url]
                    }]
                }))
            } catch {
                throw new Error("Chain is not supported")
            }
        }
        r.provider.setDefaultChain(n.caipNetworkId)
    }
    getWalletConnectProvider() {
        const e = this.connectors.find(r => r.type === "WALLET_CONNECT");
        return e == null ? void 0 : e.provider
    }
}
const yi = ["email", "socials", "swaps", "onramp", "activity", "reownBranding", "multiWallet", "emailCapture"],
    on = {
        email: {
            apiFeatureName: "social_login",
            localFeatureName: "email",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => {
                if (!(t != null && t.config)) return !1;
                const e = t.config;
                return !!t.isEnabled && e.includes("email")
            },
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.email : !!t
        },
        socials: {
            apiFeatureName: "social_login",
            localFeatureName: "socials",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => {
                if (!(t != null && t.config)) return !1;
                const e = t.config;
                return t.isEnabled && e.length > 0 ? e.filter(n => n !== "email") : !1
            },
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? ee.DEFAULT_REMOTE_FEATURES.socials : !1 : t
        },
        swaps: {
            apiFeatureName: "swap",
            localFeatureName: "swaps",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => {
                if (!(t != null && t.config)) return !1;
                const e = t.config;
                return t.isEnabled && e.length > 0 ? e : !1
            },
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? ee.DEFAULT_REMOTE_FEATURES.swaps : !1 : t
        },
        onramp: {
            apiFeatureName: "onramp",
            localFeatureName: "onramp",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => {
                if (!(t != null && t.config)) return !1;
                const e = t.config;
                return t.isEnabled && e.length > 0 ? e : !1
            },
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? ee.DEFAULT_REMOTE_FEATURES.onramp : !1 : t
        },
        activity: {
            apiFeatureName: "activity",
            localFeatureName: "history",
            returnType: !1,
            isLegacy: !0,
            isAvailableOnBasic: !1,
            processApi: t => !!t.isEnabled,
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.activity : !!t
        },
        reownBranding: {
            apiFeatureName: "reown_branding",
            localFeatureName: "reownBranding",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => !!t.isEnabled,
            processFallback: t => t === void 0 ? ee.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
        },
        emailCapture: {
            apiFeatureName: "email_capture",
            localFeatureName: "emailCapture",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => t.isEnabled && (t.config ? ? []),
            processFallback: t => !1
        },
        multiWallet: {
            apiFeatureName: "multi_wallet",
            localFeatureName: "multiWallet",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: t => !!t.isEnabled,
            processFallback: () => ee.DEFAULT_REMOTE_FEATURES.multiWallet
        }
    },
    Ni = {
        localSettingsOverridden: new Set,
        getApiConfig(t, e) {
            return e == null ? void 0 : e.find(n => n.id === t)
        },
        addWarning(t, e) {
            if (t !== void 0) {
                const n = on[e],
                    r = n.isLegacy ? `"features.${n.localFeatureName}" (now "${e}")` : `"features.${e}"`;
                this.localSettingsOverridden.add(r)
            }
        },
        processFeature(t, e, n, r, s) {
            const a = on[t],
                o = e[a.localFeatureName];
            if (s && !a.isAvailableOnBasic) return !1;
            if (r) {
                const i = this.getApiConfig(a.apiFeatureName, n);
                return (i == null ? void 0 : i.config) === null ? this.processFallbackFeature(t, o) : i != null && i.config ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, i)) : !1
            }
            return this.processFallbackFeature(t, o)
        },
        processApiFeature(t, e) {
            return on[t].processApi(e)
        },
        processFallbackFeature(t, e) {
            return on[t].processFallback(e)
        },
        async fetchRemoteFeatures(t) {
            const e = t.basic ? ? !1,
                n = t.features || {};
            this.localSettingsOverridden.clear();
            let r = null,
                s = !1;
            try {
                r = await x.fetchProjectConfig(), s = r != null
            } catch (o) {
                console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o)
            }
            const a = s && !e ? ee.DEFAULT_REMOTE_FEATURES : ee.DEFAULT_REMOTE_FEATURES_DISABLED;
            try {
                for (const o of yi) {
                    const i = this.processFeature(o, n, r, s, e);
                    Object.assign(a, {
                        [o]: i
                    })
                }
            } catch (o) {
                return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), ee.DEFAULT_REMOTE_FEATURES
            }
            if (s && this.localSettingsOverridden.size > 0) {
                const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
                ue.open({
                    debugMessage: me.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
                }, "warning")
            }
            return a
        }
    };
class vi {
    constructor(e) {
        this.chainNamespaces = [], this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (n, r) => {
            var s, a, o;
            if (n) {
                const i = (s = u.getCaipNetworks(n)) == null ? void 0 : s.find(p => p.id === r);
                if (i) return i;
                const l = (a = u.getNetworkData(n)) == null ? void 0 : a.caipNetwork;
                return l || ((o = u.getRequestedCaipNetworks(n).filter(p => p.chainNamespace === n)) == null ? void 0 : o[0])
            }
            return u.state.activeCaipNetwork || this.defaultCaipNetwork
        }, this.getCaipNetworkId = () => {
            const n = this.getCaipNetwork();
            if (n) return n.id
        }, this.getCaipNetworks = n => u.getCaipNetworks(n), this.getActiveChainNamespace = () => u.state.activeChain, this.setRequestedCaipNetworks = (n, r) => {
            u.setRequestedCaipNetworks(n, r)
        }, this.getApprovedCaipNetworkIds = () => u.getAllApprovedCaipNetworkIds(), this.getCaipAddress = n => {
            var r, s;
            return u.state.activeChain === n || !n ? u.state.activeCaipAddress : (s = (r = u.state.chains.get(n)) == null ? void 0 : r.accountState) == null ? void 0 : s.caipAddress
        }, this.setClientId = n => {
            M.setClientId(n)
        }, this.getProvider = n => se.getProvider(n), this.getProviderType = n => se.getProviderId(n), this.getPreferredAccountType = n => We(n), this.setCaipAddress = (n, r) => {
            R.setCaipAddress(n, r)
        }, this.setBalance = (n, r, s) => {
            R.setBalance(n, r, s)
        }, this.setProfileName = (n, r) => {
            R.setProfileName(n, r)
        }, this.setProfileImage = (n, r) => {
            R.setProfileImage(n, r)
        }, this.setUser = (n, r) => {
            R.setUser(n, r)
        }, this.resetAccount = n => {
            R.resetAccount(n)
        }, this.setCaipNetwork = n => {
            u.setActiveCaipNetwork(n)
        }, this.setCaipNetworkOfNamespace = (n, r) => {
            u.setChainNetworkData(r, {
                caipNetwork: n
            })
        }, this.setStatus = (n, r) => {
            R.setStatus(n, r), E.isConnected() ? g.setConnectionStatus("connected") : g.setConnectionStatus("disconnected")
        }, this.getAddressByChainNamespace = n => {
            var r, s;
            return (s = (r = u.state.chains.get(n)) == null ? void 0 : r.accountState) == null ? void 0 : s.address
        }, this.setConnectors = n => {
            const r = [...E.state.allConnectors, ...n];
            E.setConnectors(r)
        }, this.setConnections = (n, r) => {
            g.setConnections(n, r), _.setConnections(n, r)
        }, this.fetchIdentity = n => M.fetchIdentity(n), this.getReownName = n => xt.getNamesForAddress(n), this.getConnectors = () => E.getConnectors(), this.getConnectorImage = n => Ar.getConnectorImage(n), this.getConnections = n => this.remoteFeatures.multiWallet ? hn.getConnectionsData(n).connections : (ue.open(f.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = n => this.remoteFeatures.multiWallet ? hn.getConnectionsData(n).recentConnections : (ue.open(f.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async n => {
            if (!this.remoteFeatures.multiWallet) {
                ue.open(f.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
                return
            }
            await _.switchConnection(n)
        }, this.deleteConnection = n => {
            if (!this.remoteFeatures.multiWallet) {
                ue.open(f.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
                return
            }
            g.deleteAddressFromConnection(n), _.syncStorageConnections()
        }, this.setConnectedWalletInfo = (n, r) => {
            const s = se.getProviderId(r),
                a = n ? { ...n,
                    type: s
                } : void 0;
            R.setConnectedWalletInfo(a, r)
        }, this.getIsConnectedState = () => !!u.state.activeCaipAddress, this.addAddressLabel = (n, r, s) => {
            R.addAddressLabel(n, r, s)
        }, this.removeAddressLabel = (n, r) => {
            R.removeAddressLabel(n, r)
        }, this.getAddress = n => {
            var r, s;
            return u.state.activeChain === n || !n ? R.state.address : (s = (r = u.state.chains.get(n)) == null ? void 0 : r.accountState) == null ? void 0 : s.address
        }, this.setApprovedCaipNetworksData = n => u.setApprovedCaipNetworksData(n), this.resetNetwork = n => {
            u.resetNetwork(n)
        }, this.addConnector = n => {
            E.addConnector(n)
        }, this.resetWcConnection = () => {
            _.resetWcConnection()
        }, this.setAddressExplorerUrl = (n, r) => {
            R.setAddressExplorerUrl(n, r)
        }, this.setSmartAccountDeployed = (n, r) => {
            R.setSmartAccountDeployed(n, r)
        }, this.setPreferredAccountType = (n, r) => {
            u.setAccountProp("preferredAccountType", n, r)
        }, this.setEIP6963Enabled = n => {
            m.setEIP6963Enabled(n)
        }, this.handleUnsafeRPCRequest = () => {
            if (this.isOpen()) {
                if (this.isTransactionStackEmpty()) return;
                this.redirect("ApproveTransaction")
            } else this.open({
                view: "ApproveTransaction"
            })
        }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e)
    }
    getChainNamespacesSet(e, n) {
        const r = e == null ? void 0 : e.map(a => a.namespace).filter(a => !!a);
        if (r != null && r.length) return [...new Set(r)];
        const s = n == null ? void 0 : n.map(a => a.chainNamespace);
        return [...new Set(s)]
    }
    async initialize(e) {
        var n, r, s;
        this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), m.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), this.remoteFeatures = await Ni.fetchRemoteFeatures(e), m.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && jn.setOnrampProviders(this.remoteFeatures.onramp), ((n = m.state.remoteFeatures) != null && n.email || Array.isArray((r = m.state.remoteFeatures) == null ? void 0 : r.socials) && ((s = m.state.remoteFeatures) == null ? void 0 : s.socials.length) > 0) && await this.checkAllowedOrigins()
    }
    async checkAllowedOrigins() {
        try {
            const e = await x.fetchAllowedOrigins();
            if (!e || !O.isClient()) {
                ue.open(me.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
                return
            }
            const n = window.location.origin;
            Ge.isOriginAllowed(n, e, _t.DEFAULT_ALLOWED_ANCESTORS) || ue.open(me.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error")
        } catch (e) {
            if (!(e instanceof Error)) {
                ue.open(me.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
                return
            }
            switch (e.message) {
                case "RATE_LIMITED":
                    ue.open(me.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
                    break;
                case "SERVER_ERROR":
                    {
                        const n = e.cause instanceof Error ? e.cause : e;ue.open({
                            displayMessage: me.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
                            debugMessage: me.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(n.message)
                        }, "error");
                        break
                    }
                default:
                    ue.open(me.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error")
            }
        }
    }
    sendInitializeEvent(e) {
        var r;
        const { ...n
        } = e;
        delete n.adapters, delete n.universalProvider, ne.sendEvent({
            type: "track",
            event: "INITIALIZE",
            properties: { ...n,
                networks: e.networks.map(s => s.id),
                siweConfig: {
                    options: ((r = e.siweConfig) == null ? void 0 : r.options) || {}
                }
            }
        })
    }
    initControllers(e) {
        this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController()
    }
    initializeThemeController(e) {
        e.themeMode && ve.setThemeMode(e.themeMode), e.themeVariables && ve.setThemeVariables(e.themeVariables)
    }
    initializeChainController(e) {
        if (!this.connectionControllerClient || !this.networkControllerClient) throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
        u.initialize(e.adapters ? ? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient
        });
        const n = this.getDefaultNetwork();
        n && u.setActiveCaipNetwork(n)
    }
    initializeConnectionController(e) {
        _.initialize(e.adapters ? ? []), _.setWcBasic(e.basic ? ? !1)
    }
    initializeConnectorController() {
        E.initialize(this.chainNamespaces)
    }
    initializeProjectSettings(e) {
        m.setProjectId(e.projectId), m.setSdkVersion(e.sdkVersion)
    }
    initializeOptionsController(e) {
        var s;
        m.setDebug(e.debug !== !1), m.setEnableWalletConnect(e.enableWalletConnect !== !1), m.setEnableWalletGuide(e.enableWalletGuide !== !1), m.setEnableWallets(e.enableWallets !== !1), m.setEIP6963Enabled(e.enableEIP6963 !== !1), m.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1), m.setEnableReconnect(e.enableReconnect !== !1), m.setEnableAuthLogger(e.enableAuthLogger !== !1), m.setCustomRpcUrls(e.customRpcUrls), m.setEnableEmbedded(e.enableEmbedded), m.setAllWallets(e.allWallets), m.setIncludeWalletIds(e.includeWalletIds), m.setExcludeWalletIds(e.excludeWalletIds), m.setFeaturedWalletIds(e.featuredWalletIds), m.setTokens(e.tokens), m.setTermsConditionsUrl(e.termsConditionsUrl), m.setPrivacyPolicyUrl(e.privacyPolicyUrl), m.setCustomWallets(e.customWallets), m.setFeatures(e.features), m.setAllowUnsupportedChain(e.allowUnsupportedChain), m.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), m.setPreferUniversalLinks(e.experimental_preferUniversalLinks), m.setDefaultAccountTypes(e.defaultAccountTypes);
        const n = this.getDefaultMetaData();
        if (!e.metadata && n && (e.metadata = n), m.setMetadata(e.metadata), m.setDisableAppend(e.disableAppend), m.setEnableEmbedded(e.enableEmbedded), m.setSIWX(e.siwx), !e.projectId) {
            ue.open(me.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
            return
        }
        if (((s = e.adapters) == null ? void 0 : s.find(a => a.namespace === f.CHAIN.EVM)) && e.siweConfig) {
            if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
            m.setSIWX(e.siweConfig.mapToSIWX())
        }
    }
    getDefaultMetaData() {
        var e, n, r, s;
        return O.isClient() ? {
            name: ((n = (e = document.getElementsByTagName("title")) == null ? void 0 : e[0]) == null ? void 0 : n.textContent) || "",
            description: ((r = document.querySelector('meta[property="og:description"]')) == null ? void 0 : r.content) || "",
            url: window.location.origin,
            icons: [((s = document.querySelector('link[rel~="icon"]')) == null ? void 0 : s.href) || ""]
        } : null
    }
    setUnsupportedNetwork(e) {
        const n = this.getActiveChainNamespace();
        if (n) {
            const r = Ct.getUnsupportedNetwork(`${n}:${e}`);
            u.setActiveCaipNetwork(r)
        }
    }
    getDefaultNetwork() {
        return Ct.getCaipNetworkFromStorage(this.defaultCaipNetwork)
    }
    extendCaipNetwork(e, n) {
        return Ct.extendCaipNetwork(e, {
            customNetworkImageUrls: n.chainImages,
            projectId: n.projectId
        })
    }
    extendCaipNetworks(e) {
        return Ct.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        })
    }
    extendDefaultCaipNetwork(e) {
        const n = e.networks.find(s => {
            var a;
            return s.id === ((a = e.defaultNetwork) == null ? void 0 : a.id)
        });
        return n ? Ct.extendCaipNetwork(n, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        }) : void 0
    }
    async disconnectNamespace(e, n) {
        var r, s;
        try {
            this.setLoading(!0, e);
            let a = {
                connections: []
            };
            const o = this.getAdapter(e);
            return (((s = (r = u.state.chains.get(e)) == null ? void 0 : r.accountState) == null ? void 0 : s.caipAddress) || !m.state.enableReconnect) && (o != null && o.disconnect) && (a = await o.disconnect({
                id: n
            })), this.setLoading(!1, e), a
        } catch (a) {
            throw this.setLoading(!1, e), new Error(`Failed to disconnect chains: ${a.message}`)
        }
    }
    createClients() {
        this.connectionControllerClient = {
            connectWalletConnect: async () => {
                var d;
                const e = u.state.activeChain,
                    n = this.getAdapter(e),
                    r = (d = this.getCaipNetwork(e)) == null ? void 0 : d.id,
                    s = _.getConnections(e),
                    a = this.remoteFeatures.multiWallet,
                    o = s.length > 0;
                if (!n) throw new Error("Adapter not found");
                const i = await n.connectWalletConnect(r);
                (!o || !a) && this.close(), this.setClientId((i == null ? void 0 : i.clientId) || null), g.setConnectedNamespaces([...u.state.chains.keys()]), await this.syncWalletConnectAccount(), await xe.initializeIfEnabled()
            },
            connectExternal: async ({
                id: e,
                address: n,
                info: r,
                type: s,
                provider: a,
                chain: o,
                caipNetwork: i,
                socialUri: l
            }) => {
                var j, F, w, H, P, Z;
                const d = u.state.activeChain,
                    p = o || d,
                    h = this.getAdapter(p);
                if (o && o !== d && !i) {
                    const le = this.getCaipNetworks().find(Sn => Sn.chainNamespace === o);
                    le && this.setCaipNetwork(le)
                }
                if (!p) throw new Error("connectExternal: namespace not found");
                if (!h) throw new Error("connectExternal: adapter not found");
                const y = this.getCaipNetwork(p),
                    b = await h.connect({
                        id: e,
                        address: n,
                        info: r,
                        type: s,
                        provider: a,
                        socialUri: l,
                        chainId: (i == null ? void 0 : i.id) || (y == null ? void 0 : y.id),
                        rpcUrl: ((w = (F = (j = i == null ? void 0 : i.rpcUrls) == null ? void 0 : j.default) == null ? void 0 : F.http) == null ? void 0 : w[0]) || ((Z = (P = (H = y == null ? void 0 : y.rpcUrls) == null ? void 0 : H.default) == null ? void 0 : P.http) == null ? void 0 : Z[0])
                    });
                if (b) return g.addConnectedNamespace(p), this.syncProvider({ ...b,
                    chainNamespace: p
                }), this.setStatus("connected", p), this.syncConnectedWalletInfo(p), g.removeDisconnectedConnectorId(e, p), {
                    address: b.address
                }
            },
            reconnectExternal: async ({
                id: e,
                info: n,
                type: r,
                provider: s
            }) => {
                var i;
                const a = u.state.activeChain,
                    o = this.getAdapter(a);
                if (!a) throw new Error("reconnectExternal: namespace not found");
                if (!o) throw new Error("reconnectExternal: adapter not found");
                o != null && o.reconnect && (await (o == null ? void 0 : o.reconnect({
                    id: e,
                    info: n,
                    type: r,
                    provider: s,
                    chainId: (i = this.getCaipNetwork()) == null ? void 0 : i.id
                })), g.addConnectedNamespace(a), this.syncConnectedWalletInfo(a))
            },
            disconnect: async e => {
                var d;
                const {
                    id: n,
                    chainNamespace: r,
                    initialDisconnect: s
                } = e || {}, a = r || u.state.activeChain, o = E.getConnectorId(a), i = n === f.CONNECTOR_ID.AUTH || o === f.CONNECTOR_ID.AUTH, l = n === f.CONNECTOR_ID.WALLET_CONNECT || o === f.CONNECTOR_ID.WALLET_CONNECT;
                try {
                    const p = Array.from(u.state.chains.keys());
                    let h = r ? [r] : p;
                    (l || i) && (h = p);
                    const y = h.map(async F => {
                            const w = E.getConnectorId(F),
                                H = await this.disconnectNamespace(F, n || w);
                            H && (i && g.deleteConnectedSocialProvider(), H.connections.forEach(P => {
                                g.addDisconnectedConnectorId(P.connectorId, F)
                            })), s && this.onDisconnectNamespace({
                                chainNamespace: F,
                                closeModal: !1
                            })
                        }),
                        b = await Promise.allSettled(y);
                    Q.resetSend(), _.resetWcConnection(), (d = xe.getSIWX()) != null && d.signOutOnDisconnect && await xe.clearSessions(), E.setFilterByNamespace(void 0), _.syncStorageConnections();
                    const j = b.filter(F => F.status === "rejected");
                    if (j.length > 0) throw new Error(j.map(F => F.reason.message).join(", "));
                    ne.sendEvent({
                        type: "track",
                        event: "DISCONNECT_SUCCESS",
                        properties: {
                            namespace: r || "all"
                        }
                    })
                } catch (p) {
                    throw new Error(`Failed to disconnect chains: ${p.message}`)
                }
            },
            checkInstalled: e => e ? e.some(n => {
                var r;
                return !!((r = window.ethereum) != null && r[String(n)])
            }) : !!window.ethereum,
            signMessage: async e => {
                const n = u.state.activeChain,
                    r = this.getAdapter(u.state.activeChain);
                if (!n) throw new Error("signMessage: namespace not found");
                if (!r) throw new Error("signMessage: adapter not found");
                const s = await (r == null ? void 0 : r.signMessage({
                    message: e,
                    address: R.state.address,
                    provider: se.getProvider(n)
                }));
                return (s == null ? void 0 : s.signature) || ""
            },
            sendTransaction: async e => {
                const n = e.chainNamespace;
                if (!n) throw new Error("sendTransaction: namespace not found");
                if (ee.SEND_SUPPORTED_NAMESPACES.includes(n)) {
                    const r = this.getAdapter(n);
                    if (!r) throw new Error("sendTransaction: adapter not found");
                    const s = se.getProvider(n),
                        a = await (r == null ? void 0 : r.sendTransaction({ ...e,
                            caipNetwork: this.getCaipNetwork(),
                            provider: s
                        }));
                    return (a == null ? void 0 : a.hash) || ""
                }
                return ""
            },
            estimateGas: async e => {
                const n = e.chainNamespace;
                if (n === f.CHAIN.EVM) {
                    const r = this.getAdapter(n);
                    if (!r) throw new Error("estimateGas: adapter is required but got undefined");
                    const s = se.getProvider(n),
                        a = this.getCaipNetwork();
                    if (!a) throw new Error("estimateGas: caipNetwork is required but got undefined");
                    const o = await (r == null ? void 0 : r.estimateGas({ ...e,
                        provider: s,
                        caipNetwork: a
                    }));
                    return (o == null ? void 0 : o.gas) || 0 n
                }
                return 0 n
            },
            getEnsAvatar: async () => {
                var n;
                const e = u.state.activeChain;
                if (!e) throw new Error("getEnsAvatar: namespace is required but got undefined");
                return await this.syncIdentity({
                    address: R.state.address,
                    chainId: Number((n = this.getCaipNetwork()) == null ? void 0 : n.id),
                    chainNamespace: e
                }), R.state.profileImage || !1
            },
            getEnsAddress: async e => await Ge.resolveReownName(e),
            writeContract: async e => {
                const n = u.state.activeChain,
                    r = this.getAdapter(n);
                if (!n) throw new Error("writeContract: namespace is required but got undefined");
                if (!r) throw new Error("writeContract: adapter is required but got undefined");
                const s = this.getCaipNetwork(),
                    a = this.getCaipAddress(),
                    o = se.getProvider(n);
                if (!s || !a) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
                const i = await (r == null ? void 0 : r.writeContract({ ...e,
                    caipNetwork: s,
                    provider: o,
                    caipAddress: a
                }));
                return i == null ? void 0 : i.hash
            },
            parseUnits: (e, n) => {
                const r = this.getAdapter(u.state.activeChain);
                if (!r) throw new Error("parseUnits: adapter is required but got undefined");
                return (r == null ? void 0 : r.parseUnits({
                    value: e,
                    decimals: n
                })) ? ? 0 n
            },
            formatUnits: (e, n) => {
                const r = this.getAdapter(u.state.activeChain);
                if (!r) throw new Error("formatUnits: adapter is required but got undefined");
                return (r == null ? void 0 : r.formatUnits({
                    value: e,
                    decimals: n
                })) ? ? "0"
            },
            getCapabilities: async e => {
                const n = this.getAdapter(u.state.activeChain);
                if (!n) throw new Error("getCapabilities: adapter is required but got undefined");
                return await (n == null ? void 0 : n.getCapabilities(e))
            },
            grantPermissions: async e => {
                const n = this.getAdapter(u.state.activeChain);
                if (!n) throw new Error("grantPermissions: adapter is required but got undefined");
                return await (n == null ? void 0 : n.grantPermissions(e))
            },
            revokePermissions: async e => {
                const n = this.getAdapter(u.state.activeChain);
                if (!n) throw new Error("revokePermissions: adapter is required but got undefined");
                return n != null && n.revokePermissions ? await n.revokePermissions(e) : "0x"
            },
            walletGetAssets: async e => {
                const n = this.getAdapter(u.state.activeChain);
                if (!n) throw new Error("walletGetAssets: adapter is required but got undefined");
                return await (n == null ? void 0 : n.walletGetAssets(e)) ? ? {}
            },
            updateBalance: e => {
                const n = this.getCaipNetwork(e);
                !n || !R.state.address || this.updateNativeBalance(R.state.address, n == null ? void 0 : n.id, e)
            }
        }, this.networkControllerClient = {
            switchCaipNetwork: async e => await this.switchCaipNetwork(e),
            getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
        }, _.setClient(this.connectionControllerClient)
    }
    getApprovedCaipNetworksData() {
        var n, r, s, a, o;
        if (se.getProviderId(u.state.activeChain) === be.CONNECTOR_TYPE_WALLET_CONNECT) {
            const i = (r = (n = this.universalProvider) == null ? void 0 : n.session) == null ? void 0 : r.namespaces;
            return {
                supportsAllNetworks: ((o = (a = (s = this.universalProvider) == null ? void 0 : s.session) == null ? void 0 : a.peer) == null ? void 0 : o.metadata.name) === "MetaMask Wallet",
                approvedCaipNetworkIds: this.getChainsFromNamespaces(i)
            }
        }
        return {
            supportsAllNetworks: !0,
            approvedCaipNetworkIds: []
        }
    }
    async switchCaipNetwork(e) {
        if (!e) return;
        const n = e.chainNamespace;
        if (this.getAddressByChainNamespace(e.chainNamespace)) {
            const s = se.getProvider(n),
                a = se.getProviderId(n);
            if (e.chainNamespace === u.state.activeChain) {
                const o = this.getAdapter(n);
                await (o == null ? void 0 : o.switchNetwork({
                    caipNetwork: e,
                    provider: s,
                    providerType: a
                }))
            } else if (this.setCaipNetwork(e), a === be.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
            else {
                const o = this.getAddressByChainNamespace(n);
                o && this.syncAccount({
                    address: o,
                    chainId: e.id,
                    chainNamespace: n
                })
            }
        } else this.setCaipNetwork(e)
    }
    getChainsFromNamespaces(e = {}) {
        return Object.values(e).flatMap(n => {
            const r = n.chains || [],
                s = n.accounts.map(a => {
                    const {
                        chainId: o,
                        chainNamespace: i
                    } = Te.parseCaipAddress(a);
                    return `${i}:${o}`
                });
            return Array.from(new Set([...r, ...s]))
        })
    }
    createAdapters(e) {
        return this.createClients(), this.chainNamespaces.reduce((n, r) => {
            var a;
            const s = e == null ? void 0 : e.find(o => o.namespace === r);
            return s ? (s.construct({
                namespace: r,
                projectId: (a = this.options) == null ? void 0 : a.projectId,
                networks: this.getCaipNetworks()
            }), n[r] = s) : n[r] = new Ai({
                namespace: r,
                networks: this.getCaipNetworks()
            }), n
        }, {})
    }
    async initChainAdapter(e) {
        var n;
        this.onConnectors(e), this.listenAdapter(e), await ((n = this.chainAdapters) == null ? void 0 : n[e].syncConnectors(this.options, this)), await this.createUniversalProviderForAdapter(e)
    }
    async initChainAdapters() {
        await Promise.all(this.chainNamespaces.map(async e => {
            await this.initChainAdapter(e)
        }))
    }
    onConnectors(e) {
        const n = this.getAdapter(e);
        n == null || n.on("connectors", this.setConnectors.bind(this))
    }
    listenAdapter(e) {
        const n = this.getAdapter(e);
        if (!n) return;
        const r = g.getConnectionStatus();
        m.state.enableReconnect === !1 ? this.setStatus("disconnected", e) : r === "connected" ? this.setStatus("connecting", e) : r === "disconnected" ? (g.clearAddressCache(), this.setStatus(r, e)) : this.setStatus(r, e), n.on("switchNetwork", ({
            address: s,
            chainId: a
        }) => {
            var d, p;
            const o = this.getCaipNetworks().find(h => h.id.toString() === a.toString() || h.caipNetworkId.toString() === a.toString()),
                i = u.state.activeChain === e,
                l = (p = (d = u.state.chains.get(e)) == null ? void 0 : d.accountState) == null ? void 0 : p.address;
            if (o) {
                const h = i && s ? s : l;
                h && this.syncAccount({
                    address: h,
                    chainId: o.id,
                    chainNamespace: e
                })
            } else this.setUnsupportedNetwork(a)
        }), n.on("disconnect", () => {
            const s = this.remoteFeatures.multiWallet,
                a = Array.from(_.state.connections.values()).flat();
            this.onDisconnectNamespace({
                chainNamespace: e,
                closeModal: !s || a.length === 0
            })
        }), n.on("connections", s => {
            this.setConnections(s, e)
        }), n.on("pendingTransactions", () => {
            const s = R.state.address,
                a = u.state.activeCaipNetwork;
            !s || !(a != null && a.id) || this.updateNativeBalance(s, a.id, a.chainNamespace)
        }), n.on("accountChanged", ({
            address: s,
            chainId: a,
            connector: o
        }) => {
            var l, d;
            const i = u.state.activeChain === e;
            o != null && o.provider && (this.syncProvider({
                id: o.id,
                type: o.type,
                provider: o.provider,
                chainNamespace: e
            }), this.syncConnectedWalletInfo(e)), i && a ? this.syncAccount({
                address: s,
                chainId: a,
                chainNamespace: e
            }) : i && ((l = u.state.activeCaipNetwork) != null && l.id) ? this.syncAccount({
                address: s,
                chainId: (d = u.state.activeCaipNetwork) == null ? void 0 : d.id,
                chainNamespace: e
            }) : this.syncAccountInfo(s, a, e), g.addConnectedNamespace(e)
        })
    }
    async createUniversalProviderForAdapter(e) {
        var n, r, s;
        await this.getUniversalProvider(), this.universalProvider && await ((s = (r = (n = this.chainAdapters) == null ? void 0 : n[e]) == null ? void 0 : r.setUniversalProvider) == null ? void 0 : s.call(r, this.universalProvider))
    }
    async syncExistingConnection() {
        await Promise.allSettled(this.chainNamespaces.map(e => this.syncNamespaceConnection(e)))
    }
    async unSyncExistingConnection() {
        try {
            await Promise.allSettled(this.chainNamespaces.map(e => _.disconnect({
                namespace: e,
                initialDisconnect: !0
            })))
        } catch (e) {
            console.error("Error disconnecting existing connections:", e)
        }
    }
    async syncNamespaceConnection(e) {
        try {
            e === f.CHAIN.EVM && O.isSafeApp() && E.setConnectorId(f.CONNECTOR_ID.SAFE, e);
            const n = E.getConnectorId(e);
            switch (this.setStatus("connecting", e), n) {
                case f.CONNECTOR_ID.WALLET_CONNECT:
                    await this.syncWalletConnectAccount();
                    break;
                case f.CONNECTOR_ID.AUTH:
                    break;
                default:
                    await this.syncAdapterConnection(e)
            }
        } catch (n) {
            console.warn("AppKit couldn't sync existing connection", n), this.setStatus("disconnected", e)
        }
    }
    onDisconnectNamespace(e) {
        const {
            chainNamespace: n,
            closeModal: r
        } = e || {};
        u.resetAccount(n), u.resetNetwork(n), g.removeConnectedNamespace(n);
        const s = Array.from(u.state.chains.keys());
        (n ? [n] : s).forEach(o => g.addDisconnectedConnectorId(E.getConnectorId(o) || "", o)), E.removeConnectorId(n), se.resetChain(n), this.setUser(void 0, n), this.setStatus("disconnected", n), this.setConnectedWalletInfo(void 0, n), r !== !1 && z.close()
    }
    async syncAdapterConnections() {
        await Promise.allSettled(this.chainNamespaces.map(e => {
            var s;
            const n = this.getCaipAddress(e),
                r = this.getCaipNetwork(e);
            return (s = this.chainAdapters) == null ? void 0 : s[e].syncConnections({
                connectToFirstConnector: !n,
                caipNetwork: r,
                getConnectorStorageInfo(a) {
                    const i = g.getConnections()[e] ? ? [];
                    return {
                        hasDisconnected: g.isConnectorDisconnected(a, e),
                        hasConnected: i.some(l => Ee.isLowerCaseMatch(l.connectorId, a))
                    }
                }
            })
        }))
    }
    async syncAdapterConnection(e) {
        var i, l, d;
        const n = this.getAdapter(e),
            r = E.getConnectorId(e),
            s = this.getCaipNetwork(e),
            o = E.getConnectors(e).find(p => p.id === r);
        try {
            if (!n || !o) throw new Error(`Adapter or connector not found for namespace ${e}`);
            if (!(s != null && s.id)) throw new Error("CaipNetwork not found");
            const p = await (n == null ? void 0 : n.syncConnection({
                namespace: e,
                id: o.id,
                chainId: s.id,
                rpcUrl: (d = (l = (i = s == null ? void 0 : s.rpcUrls) == null ? void 0 : i.default) == null ? void 0 : l.http) == null ? void 0 : d[0]
            }));
            p ? (this.syncProvider({ ...p,
                chainNamespace: e
            }), await this.syncAccount({ ...p,
                chainNamespace: e
            }), this.setStatus("connected", e)) : this.setStatus("disconnected", e)
        } catch {
            this.onDisconnectNamespace({
                chainNamespace: e,
                closeModal: !1
            })
        }
    }
    async syncWalletConnectAccount() {
        var r, s;
        const e = Object.keys(((s = (r = this.universalProvider) == null ? void 0 : r.session) == null ? void 0 : s.namespaces) || {}),
            n = this.chainNamespaces.map(async a => {
                var p, h, y, b, j;
                const o = this.getAdapter(a);
                if (!o) return;
                const i = ((b = (y = (h = (p = this.universalProvider) == null ? void 0 : p.session) == null ? void 0 : h.namespaces) == null ? void 0 : y[a]) == null ? void 0 : b.accounts) || [],
                    l = (j = u.state.activeCaipNetwork) == null ? void 0 : j.id,
                    d = i.find(F => {
                        const {
                            chainId: w
                        } = Te.parseCaipAddress(F);
                        return w === (l == null ? void 0 : l.toString())
                    }) || i[0];
                if (d) {
                    const F = Te.validateCaipAddress(d),
                        {
                            chainId: w,
                            address: H
                        } = Te.parseCaipAddress(F);
                    if (se.setProviderId(a, be.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && u.state.activeCaipNetwork && o.namespace !== f.CHAIN.EVM) {
                        const P = o.getWalletConnectProvider({
                            caipNetworks: this.getCaipNetworks(),
                            provider: this.universalProvider,
                            activeCaipNetwork: u.state.activeCaipNetwork
                        });
                        se.setProvider(a, P)
                    } else se.setProvider(a, this.universalProvider);
                    E.setConnectorId(f.CONNECTOR_ID.WALLET_CONNECT, a), g.addConnectedNamespace(a), await this.syncAccount({
                        address: H,
                        chainId: w,
                        chainNamespace: a
                    })
                } else e.includes(a) && this.setStatus("disconnected", a);
                this.syncConnectedWalletInfo(a), await u.setApprovedCaipNetworksData(a)
            });
        await Promise.all(n)
    }
    syncProvider({
        type: e,
        provider: n,
        id: r,
        chainNamespace: s
    }) {
        se.setProviderId(s, e), se.setProvider(s, n), E.setConnectorId(r, s)
    }
    async syncAccount(e) {
        var h, y;
        const n = e.chainNamespace === u.state.activeChain,
            r = u.getCaipNetworkByNamespace(e.chainNamespace, e.chainId),
            {
                address: s,
                chainId: a,
                chainNamespace: o
            } = e,
            {
                chainId: i
            } = g.getActiveNetworkProps(),
            l = a || i,
            d = ((h = u.state.activeCaipNetwork) == null ? void 0 : h.name) === f.UNSUPPORTED_NETWORK_NAME,
            p = u.getNetworkProp("supportsAllNetworks", o);
        if (this.setStatus("connected", o), !(d && !p) && l) {
            let b = this.getCaipNetworks().find(w => w.id.toString() === l.toString()),
                j = this.getCaipNetworks().find(w => w.chainNamespace === o);
            if (!p && !b && !j) {
                const w = this.getApprovedCaipNetworkIds() || [],
                    H = w.find(Z => {
                        var le;
                        return ((le = Te.parseCaipNetworkId(Z)) == null ? void 0 : le.chainId) === l.toString()
                    }),
                    P = w.find(Z => {
                        var le;
                        return ((le = Te.parseCaipNetworkId(Z)) == null ? void 0 : le.chainNamespace) === o
                    });
                b = this.getCaipNetworks().find(Z => Z.caipNetworkId === H), j = this.getCaipNetworks().find(Z => Z.caipNetworkId === P || "deprecatedCaipNetworkId" in Z && Z.deprecatedCaipNetworkId === P)
            }
            const F = b || j;
            (F == null ? void 0 : F.chainNamespace) === u.state.activeChain ? m.state.enableNetworkSwitch && !m.state.allowUnsupportedChain && ((y = u.state.activeCaipNetwork) == null ? void 0 : y.name) === f.UNSUPPORTED_NETWORK_NAME ? u.showUnsupportedChainUI() : this.setCaipNetwork(F) : n || r && this.setCaipNetworkOfNamespace(r, o), this.syncConnectedWalletInfo(o), Ee.isLowerCaseMatch(s, R.state.address) || this.syncAccountInfo(s, F == null ? void 0 : F.id, o), n ? await this.syncBalance({
                address: s,
                chainId: F == null ? void 0 : F.id,
                chainNamespace: o
            }) : await this.syncBalance({
                address: s,
                chainId: r == null ? void 0 : r.id,
                chainNamespace: o
            })
        }
    }
    async syncAccountInfo(e, n, r) {
        const s = this.getCaipAddress(r),
            a = n || (s == null ? void 0 : s.split(":")[1]);
        if (!a) return;
        const o = `${r}:${a}:${e}`;
        this.setCaipAddress(o, r), await this.syncIdentity({
            address: e,
            chainId: a,
            chainNamespace: r
        })
    }
    async syncReownName(e, n) {
        try {
            const r = await this.getReownName(e);
            if (r[0]) {
                const s = r[0];
                this.setProfileName(s.name, n)
            } else this.setProfileName(null, n)
        } catch {
            this.setProfileName(null, n)
        }
    }
    syncConnectedWalletInfo(e) {
        var s;
        const n = E.getConnectorId(e),
            r = se.getProviderId(e);
        if (r === be.CONNECTOR_TYPE_ANNOUNCED || r === be.CONNECTOR_TYPE_INJECTED) {
            if (n) {
                const o = this.getConnectors().find(i => {
                    var h, y;
                    const l = i.id === n,
                        d = ((h = i.info) == null ? void 0 : h.rdns) === n,
                        p = (y = i.connectors) == null ? void 0 : y.some(b => {
                            var j;
                            return b.id === n || ((j = b.info) == null ? void 0 : j.rdns) === n
                        });
                    return l || d || !!p
                });
                if (o) {
                    const {
                        info: i,
                        name: l,
                        imageUrl: d
                    } = o, p = d || this.getConnectorImage(o);
                    this.setConnectedWalletInfo({
                        name: l,
                        icon: p,
                        ...i
                    }, e)
                }
            }
        } else if (r === be.CONNECTOR_TYPE_WALLET_CONNECT) {
            const a = se.getProvider(e);
            a != null && a.session && this.setConnectedWalletInfo({ ...a.session.peer.metadata,
                name: a.session.peer.metadata.name,
                icon: (s = a.session.peer.metadata.icons) == null ? void 0 : s[0]
            }, e)
        } else if (n && (n === f.CONNECTOR_ID.COINBASE_SDK || n === f.CONNECTOR_ID.COINBASE)) {
            const a = this.getConnectors().find(d => d.id === n),
                o = (a == null ? void 0 : a.name) || "Coinbase Wallet",
                i = (a == null ? void 0 : a.imageUrl) || this.getConnectorImage(a),
                l = a == null ? void 0 : a.info;
            this.setConnectedWalletInfo({ ...l,
                name: o,
                icon: i
            }, e)
        }
    }
    async syncBalance(e) {
        !Er.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find(r => {
            var s;
            return r.id.toString() === ((s = e.chainId) == null ? void 0 : s.toString())
        }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace)
    }
    async ready() {
        await this.readyPromise
    }
    async updateNativeBalance(e, n, r) {
        const s = this.getAdapter(r),
            a = u.getCaipNetworkByNamespace(r, n);
        if (s) {
            const o = await s.getBalance({
                address: e,
                chainId: n,
                caipNetwork: a,
                tokens: this.options.tokens
            });
            return this.setBalance(o.balance, o.symbol, r), o
        }
    }
    async initializeUniversalAdapter() {
        var r, s, a, o, i, l, d, p, h, y;
        const e = Vs.createLogger((b, ...j) => {
                b && this.handleAlertError(b), console.error(...j)
            }),
            n = {
                projectId: (r = this.options) == null ? void 0 : r.projectId,
                metadata: {
                    name: (s = this.options) != null && s.metadata ? (a = this.options) == null ? void 0 : a.metadata.name : "",
                    description: (o = this.options) != null && o.metadata ? (i = this.options) == null ? void 0 : i.metadata.description : "",
                    url: (l = this.options) != null && l.metadata ? (d = this.options) == null ? void 0 : d.metadata.url : "",
                    icons: (p = this.options) != null && p.metadata ? (h = this.options) == null ? void 0 : h.metadata.icons : [""]
                },
                logger: e
            };
        m.setManualWCControl(!!((y = this.options) != null && y.manualWCControl)), this.universalProvider = this.options.universalProvider ? ? await Br.init(n), m.state.enableReconnect === !1 && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect()
    }
    listenWalletConnect() {
        this.universalProvider && this.chainNamespaces.forEach(e => {
            Ge.listenWcProvider({
                universalProvider: this.universalProvider,
                namespace: e,
                onDisplayUri: n => {
                    _.setUri(n)
                },
                onConnect: () => {
                    _.finalizeWcConnection()
                },
                onDisconnect: () => {
                    u.state.noAdapters && this.resetAccount(e), _.resetWcConnection()
                },
                onChainChanged: n => {
                    const r = u.state.activeChain,
                        s = r && E.state.activeConnectorIds[r] === f.CONNECTOR_ID.WALLET_CONNECT;
                    if (r === e && (u.state.noAdapters || s)) {
                        const a = this.getCaipNetworks().find(i => i.id.toString() === n.toString() || i.caipNetworkId.toString() === n.toString()),
                            o = this.getCaipNetwork();
                        if (!a) {
                            this.setUnsupportedNetwork(n);
                            return
                        }(o == null ? void 0 : o.id.toString()) !== (a == null ? void 0 : a.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (a == null ? void 0 : a.chainNamespace) && this.setCaipNetwork(a)
                    }
                },
                onAccountsChanged: n => {
                    const r = u.state.activeChain,
                        s = r && E.state.activeConnectorIds[r] === f.CONNECTOR_ID.WALLET_CONNECT;
                    if (r === e && (u.state.noAdapters || s) && n.length > 0) {
                        const a = n[0];
                        this.syncAccount({
                            address: a.address,
                            chainId: a.chainId,
                            chainNamespace: a.chainNamespace
                        })
                    }
                }
            })
        })
    }
    createUniversalProvider() {
        var e;
        return !this.universalProviderInitPromise && O.isClient() && ((e = this.options) != null && e.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise
    }
    async getUniversalProvider() {
        if (!this.universalProvider) try {
            await this.createUniversalProvider()
        } catch (e) {
            ne.sendEvent({
                type: "error",
                event: "INTERNAL_SDK_ERROR",
                properties: {
                    errorType: "UniversalProviderInitError",
                    errorMessage: e instanceof Error ? e.message : "Unknown",
                    uncaught: !1
                }
            }), console.error("AppKit:getUniversalProvider - Cannot create provider", e)
        }
        return this.universalProvider
    }
    handleAlertError(e) {
        const n = Object.entries(me.UniversalProviderErrors).find(([, {
                message: i
            }]) => e.message.includes(i)),
            [r, s] = n ? ? [],
            {
                message: a,
                alertErrorKey: o
            } = s ? ? {};
        if (r && a && !this.reportedAlertErrors[r]) {
            const i = me.ALERT_ERRORS[o];
            i && (ue.open(i, "error"), this.reportedAlertErrors[r] = !0)
        }
    }
    getAdapter(e) {
        var n;
        if (e) return (n = this.chainAdapters) == null ? void 0 : n[e]
    }
    createAdapter(e) {
        var s;
        if (!e) return;
        const n = e.namespace;
        if (!n) return;
        this.createClients();
        const r = e;
        r.namespace = n, r.construct({
            namespace: n,
            projectId: (s = this.options) == null ? void 0 : s.projectId,
            networks: this.getCaipNetworks()
        }), this.chainNamespaces.includes(n) || this.chainNamespaces.push(n), this.chainAdapters && (this.chainAdapters[n] = r)
    }
    async open(e) {
        if (await this.injectModalUi(), e != null && e.uri && _.setUri(e.uri), e != null && e.arguments) switch (e == null ? void 0 : e.view) {
            case "Swap":
                return z.open({ ...e,
                    data: {
                        swap: e.arguments
                    }
                })
        }
        return z.open(e)
    }
    async close() {
        await this.injectModalUi(), z.close()
    }
    setLoading(e, n) {
        z.setLoading(e, n)
    }
    async disconnect(e) {
        await _.disconnect({
            namespace: e
        })
    }
    getSIWX() {
        return m.state.siwx
    }
    getError() {
        return ""
    }
    getChainId() {
        var e;
        return (e = u.state.activeCaipNetwork) == null ? void 0 : e.id
    }
    async switchNetwork(e) {
        const n = this.getCaipNetworks().find(r => r.id === e.id);
        if (!n) {
            ue.open(me.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
            return
        }
        await u.switchActiveNetwork(n)
    }
    getWalletProvider() {
        return u.state.activeChain ? se.state.providers[u.state.activeChain] : null
    }
    getWalletProviderType() {
        return se.getProviderId(u.state.activeChain)
    }
    subscribeProviders(e) {
        return se.subscribeProviders(e)
    }
    getThemeMode() {
        return ve.state.themeMode
    }
    getThemeVariables() {
        return ve.state.themeVariables
    }
    setThemeMode(e) {
        ve.setThemeMode(e), Ur(ve.state.themeMode)
    }
    setTermsConditionsUrl(e) {
        m.setTermsConditionsUrl(e)
    }
    setPrivacyPolicyUrl(e) {
        m.setPrivacyPolicyUrl(e)
    }
    setThemeVariables(e) {
        ve.setThemeVariables(e), gi(ve.state.themeVariables)
    }
    subscribeTheme(e) {
        return ve.subscribe(e)
    }
    subscribeConnections(e) {
        return this.remoteFeatures.multiWallet ? _.subscribe(e) : (ue.open(f.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {})
    }
    getWalletInfo(e) {
        var n, r;
        return e ? (r = (n = u.state.chains.get(e)) == null ? void 0 : n.accountState) == null ? void 0 : r.connectedWalletInfo : R.state.connectedWalletInfo
    }
    getAccount(e) {
        const n = e || u.state.activeChain,
            r = E.getAuthConnector(n),
            s = u.getAccountData(n),
            a = g.getConnectedConnectorId(u.state.activeChain),
            o = _.getConnections(n);
        if (!n) throw new Error("AppKit:getAccount - namespace is required");
        const i = o.flatMap(l => l.accounts.map(({
            address: d,
            type: p
        }) => O.createAccount(n, d, p || "eoa")));
        if (s) return {
            allAccounts: i,
            caipAddress: s.caipAddress,
            address: O.getPlainAddress(s.caipAddress),
            isConnected: !!s.caipAddress,
            status: s.status,
            embeddedWalletInfo: r && a === f.CONNECTOR_ID.AUTH ? {
                user: s.user ? { ...s.user,
                    username: g.getConnectedSocialUsername()
                } : void 0,
                authProvider: s.socialProvider || "email",
                accountType: We(n),
                isSmartAccountDeployed: !!s.smartAccountDeployed
            } : void 0
        }
    }
    subscribeAccount(e, n) {
        const r = () => {
            const s = this.getAccount(n);
            s && e(s)
        };
        n ? u.subscribeChainProp("accountState", r, n) : u.subscribe(r), E.subscribe(r)
    }
    subscribeNetwork(e) {
        return u.subscribe(({
            activeCaipNetwork: n
        }) => {
            e({
                caipNetwork: n,
                chainId: n == null ? void 0 : n.id,
                caipNetworkId: n == null ? void 0 : n.caipNetworkId
            })
        })
    }
    subscribeWalletInfo(e, n) {
        return n ? R.subscribeKey("connectedWalletInfo", e, n) : R.subscribeKey("connectedWalletInfo", e)
    }
    subscribeShouldUpdateToAddress(e) {
        R.subscribeKey("shouldUpdateToAddress", e)
    }
    subscribeCaipNetworkChange(e) {
        u.subscribeKey("activeCaipNetwork", e)
    }
    getState() {
        return Le.state
    }
    getRemoteFeatures() {
        return m.state.remoteFeatures
    }
    subscribeState(e) {
        return Le.subscribe(e)
    }
    subscribeRemoteFeatures(e) {
        return m.subscribeKey("remoteFeatures", e)
    }
    showErrorMessage(e) {
        $e.showError(e)
    }
    showSuccessMessage(e) {
        $e.showSuccess(e)
    }
    getEvent() {
        return { ...ne.state
        }
    }
    subscribeEvents(e) {
        return ne.subscribe(e)
    }
    replace(e) {
        B.replace(e)
    }
    redirect(e) {
        B.push(e)
    }
    popTransactionStack(e) {
        B.popTransactionStack(e)
    }
    isOpen() {
        return z.state.open
    }
    isTransactionStackEmpty() {
        return B.state.transactionStack.length === 0
    }
    static getInstance() {
        return this.instance
    }
    updateFeatures(e) {
        m.setFeatures(e)
    }
    updateRemoteFeatures(e) {
        m.setRemoteFeatures(e)
    }
    updateOptions(e) {
        const r = { ...m.state || {},
            ...e
        };
        m.setOptions(r)
    }
    setConnectMethodsOrder(e) {
        m.setConnectMethodsOrder(e)
    }
    setWalletFeaturesOrder(e) {
        m.setWalletFeaturesOrder(e)
    }
    setCollapseWallets(e) {
        m.setCollapseWallets(e)
    }
    setSocialsOrder(e) {
        m.setSocialsOrder(e)
    }
    getConnectMethodsOrder() {
        return qn.getConnectOrderMethod(m.state.features, E.getConnectors())
    }
    addNetwork(e, n) {
        if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
        const r = this.extendCaipNetwork(n, this.options);
        this.getCaipNetworks().find(s => s.id === r.id) || u.addNetwork(r)
    }
    removeNetwork(e, n) {
        if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
        this.getCaipNetworks().find(s => s.id === n) && u.removeNetwork(e, n)
    }
}
let fr = !1;
class Dr extends vi {
    async onAuthProviderConnected(e) {
        e.message && e.signature && e.siwxMessage && await xe.addEmbeddedWalletSession({
            chainId: e.siwxMessage.chainId,
            accountAddress: e.address,
            notBefore: e.siwxMessage.notBefore,
            statement: e.siwxMessage.statement,
            resources: e.siwxMessage.resources,
            requestId: e.siwxMessage.requestId,
            issuedAt: e.siwxMessage.issuedAt,
            domain: e.siwxMessage.domain,
            uri: e.siwxMessage.uri,
            version: e.siwxMessage.version,
            nonce: e.siwxMessage.nonce
        }, e.message, e.signature);
        const n = u.state.activeChain;
        if (!n) throw new Error("AppKit:onAuthProviderConnected - namespace is required");
        const r = n === f.CHAIN.EVM ? `eip155:${e.chainId}:${e.address}` : `${e.chainId}:${e.address}`,
            s = m.state.defaultAccountTypes[n],
            a = We(n),
            o = e.preferredAccountType || a || s;
        Ee.isLowerCaseMatch(e.address, R.state.address) || this.syncIdentity({
            address: e.address,
            chainId: e.chainId,
            chainNamespace: n
        }), this.setCaipAddress(r, n);
        const {
            signature: i,
            siwxMessage: l,
            message: d,
            ...p
        } = e;
        this.setUser({ ...R.state.user || {},
            ...p
        }, n), this.setSmartAccountDeployed(!!e.smartAccountDeployed, n), this.setPreferredAccountType(o, n), this.setLoading(!1, n)
    }
    setupAuthConnectorListeners(e) {
        e.onRpcRequest(n => {
            Ie.checkIfRequestExists(n) ? Ie.checkIfRequestIsSafe(n) || this.handleUnsafeRPCRequest() : (this.open(), console.error(pe.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                method: n.method
            }), setTimeout(() => {
                this.showErrorMessage(pe.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)
            }, 300), e.rejectRpcRequests())
        }), e.onRpcError(() => {
            this.isOpen() && (this.isTransactionStackEmpty() ? this.close() : this.popTransactionStack("error"))
        }), e.onRpcSuccess((n, r) => {
            const s = Ie.checkIfRequestIsSafe(r),
                a = R.state.address,
                o = u.state.activeCaipNetwork;
            s || (a && (o != null && o.id) && this.updateNativeBalance(a, o.id, o.chainNamespace), this.isTransactionStackEmpty() ? this.close() : this.popTransactionStack("success"))
        }), e.onNotConnected(() => {
            const n = u.state.activeChain;
            if (!n) throw new Error("AppKit:onNotConnected - namespace is required");
            E.getConnectorId(n) === f.CONNECTOR_ID.AUTH && (this.setCaipAddress(void 0, n), this.setLoading(!1, n))
        }), e.onConnect(this.onAuthProviderConnected.bind(this)), e.onSocialConnected(this.onAuthProviderConnected.bind(this)), e.onSetPreferredAccount(({
            address: n,
            type: r
        }) => {
            const s = u.state.activeChain;
            if (!s) throw new Error("AppKit:onSetPreferredAccount - namespace is required");
            n && this.setPreferredAccountType(r, s)
        })
    }
    async syncAuthConnectorTheme(e) {
        if (!e) return;
        const n = ve.getSnapshot(),
            r = m.getSnapshot();
        await Promise.all([e.syncDappData({
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
        }), e.syncTheme({
            themeMode: n.themeMode,
            themeVariables: n.themeVariables,
            w3mThemeVariables: Ye(n.themeVariables, n.themeMode)
        })])
    }
    async syncAuthConnector(e, n) {
        var d, p, h, y;
        const r = f.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(n),
            s = n === u.state.activeChain;
        if (!r) return;
        this.setLoading(!0, n);
        const a = e.getLoginEmailUsed();
        this.setLoading(a, n), a && this.setStatus("connecting", n);
        const o = e.getEmail(),
            i = e.getUsername();
        this.setUser({ ...((d = R.state) == null ? void 0 : d.user) || {},
            username: i,
            email: o
        }, n), this.setupAuthConnectorListeners(e);
        const {
            isConnected: l
        } = await e.isConnected();
        if (await this.syncAuthConnectorTheme(e), n && r && s) {
            const b = await e.getSmartAccountEnabledNetworks();
            u.setSmartAccountEnabledNetworks((b == null ? void 0 : b.smartAccountEnabledNetworks) || [], n), l && ((p = this.connectionControllerClient) != null && p.connectExternal) ? (await ((y = this.connectionControllerClient) == null ? void 0 : y.connectExternal({
                id: f.CONNECTOR_ID.AUTH,
                info: {
                    name: f.CONNECTOR_ID.AUTH
                },
                type: be.CONNECTOR_TYPE_AUTH,
                provider: e,
                chainId: (h = u.state.activeCaipNetwork) == null ? void 0 : h.id,
                chain: n
            })), this.setStatus("connected", n)) : E.getConnectorId(n) === f.CONNECTOR_ID.AUTH && (this.setStatus("disconnected", n), g.removeConnectedNamespace(n))
        }
        this.setLoading(!1, n)
    }
    async checkExistingTelegramSocialConnection(e) {
        var n, r;
        try {
            if (!O.isTelegram()) return;
            const s = g.getTelegramSocialProvider();
            if (!s || !O.isClient()) return;
            const o = new URL(window.location.href).searchParams.get("result_uri");
            if (!o) return;
            R.setSocialProvider(s, e), await ((n = this.authProvider) == null ? void 0 : n.init());
            const i = E.getAuthConnector();
            s && i && (this.setLoading(!0, e), await _.connectExternal({
                id: i.id,
                type: i.type,
                socialUri: o
            }, i.chain), g.setConnectedSocialProvider(s), g.removeTelegramSocialProvider(), ne.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_SUCCESS",
                properties: {
                    provider: s,
                    caipNetworkId: (r = u.getActiveCaipNetwork()) == null ? void 0 : r.caipNetworkId
                }
            }))
        } catch (s) {
            this.setLoading(!1, e), console.error("checkExistingSTelegramocialConnection error", s)
        }
        try {
            const s = new URL(window.location.href);
            s.searchParams.delete("result_uri"), window.history.replaceState({}, document.title, s.toString())
        } catch (s) {
            console.error("tma social login failed", s)
        }
    }
    createAuthProvider(e) {
        var d, p, h, y;
        if (!f.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e)) return;
        const r = (d = this.remoteFeatures) == null ? void 0 : d.email,
            s = Array.isArray((p = this.remoteFeatures) == null ? void 0 : p.socials) && this.remoteFeatures.socials.length > 0,
            a = r || s,
            i = Ee.getActiveNamespaceConnectedToAuth() || e;
        !this.authProvider && ((h = this.options) != null && h.projectId) && a && (this.authProvider = Lt.getInstance({
            projectId: this.options.projectId,
            enableLogger: this.options.enableAuthLogger,
            chainId: (y = this.getCaipNetwork(i)) == null ? void 0 : y.caipNetworkId,
            abortController: me.EmbeddedWalletAbortController,
            onTimeout: b => {
                b === "iframe_load_failed" ? ue.open(me.ALERT_ERRORS.IFRAME_LOAD_FAILED, "error") : b === "iframe_request_timeout" ? ue.open(me.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, "error") : b === "unverified_domain" && ue.open(me.ALERT_ERRORS.UNVERIFIED_DOMAIN, "error")
            },
            getActiveCaipNetwork: b => Wn(b),
            getCaipNetworks: b => u.getCaipNetworks(b)
        }), Le.subscribeOpen(b => {
            var j;
            !b && this.isTransactionStackEmpty() && ((j = this.authProvider) == null || j.rejectRpcRequests())
        }));
        const l = e === u.state.activeChain && m.state.enableReconnect;
        m.state.enableReconnect === !1 ? this.syncAuthConnectorTheme(this.authProvider) : this.authProvider && l && (this.syncAuthConnector(this.authProvider, e), this.checkExistingTelegramSocialConnection(e))
    }
    createAuthProviderForAdapter(e) {
        var n, r, s;
        this.createAuthProvider(e), this.authProvider && ((s = (r = (n = this.chainAdapters) == null ? void 0 : n[e]) == null ? void 0 : r.setAuthProvider) == null || s.call(r, this.authProvider))
    }
    initControllers(e) {
        super.initControllers(e), this.options.excludeWalletIds && x.initializeExcludedWallets({
            ids: this.options.excludeWalletIds
        })
    }
    async switchCaipNetwork(e) {
        var o, i;
        if (!e) return;
        const n = u.state.activeChain,
            r = e.chainNamespace,
            s = this.getAddressByChainNamespace(r);
        if (r === n && s) {
            const l = this.getAdapter(r),
                d = se.getProvider(r),
                p = se.getProviderId(r);
            await (l == null ? void 0 : l.switchNetwork({
                caipNetwork: e,
                provider: d,
                providerType: p
            })), this.setCaipNetwork(e)
        } else {
            const d = se.getProviderId(n) === be.CONNECTOR_TYPE_AUTH,
                p = se.getProviderId(r),
                h = p === be.CONNECTOR_TYPE_AUTH,
                y = f.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(r);
            if (!r) throw new Error("AppKit:switchCaipNetwork - networkNamespace is required");
            if ((d && p === void 0 || h) && y) try {
                if (u.state.activeChain = e.chainNamespace, s) {
                    const b = this.getAdapter(r);
                    await (b == null ? void 0 : b.switchNetwork({
                        caipNetwork: e,
                        provider: this.authProvider,
                        providerType: p
                    }))
                } else await ((i = (o = this.connectionControllerClient) == null ? void 0 : o.connectExternal) == null ? void 0 : i.call(o, {
                    id: f.CONNECTOR_ID.AUTH,
                    provider: this.authProvider,
                    chain: r,
                    chainId: e.id,
                    type: be.CONNECTOR_TYPE_AUTH,
                    caipNetwork: e
                }));
                this.setCaipNetwork(e)
            } catch {
                const j = this.getAdapter(r);
                await (j == null ? void 0 : j.switchNetwork({
                    caipNetwork: e,
                    provider: this.authProvider,
                    providerType: p
                }))
            } else if (p === be.CONNECTOR_TYPE_WALLET_CONNECT) {
                if (!u.state.noAdapters) {
                    const b = this.getAdapter(r),
                        j = se.getProvider(r),
                        F = se.getProviderId(r);
                    await (b == null ? void 0 : b.switchNetwork({
                        caipNetwork: e,
                        provider: j,
                        providerType: F
                    }))
                }
                this.setCaipNetwork(e), this.syncWalletConnectAccount()
            } else this.setCaipNetwork(e), s && this.syncAccount({
                address: s,
                chainId: e.id,
                chainNamespace: r
            })
        }
    }
    async initialize(e) {
        var n;
        await super.initialize(e), (n = this.chainNamespaces) == null || n.forEach(r => {
            this.createAuthProviderForAdapter(r)
        }), await this.injectModalUi(), Le.set({
            initialized: !0
        })
    }
    async syncIdentity({
        address: e,
        chainId: n,
        chainNamespace: r
    }) {
        var o;
        const s = `${r}:${n}`,
            a = (o = this.caipNetworks) == null ? void 0 : o.find(i => i.caipNetworkId === s);
        if (r !== f.CHAIN.EVM || a != null && a.testnet) {
            this.setProfileName(null, r), this.setProfileImage(null, r);
            return
        }
        try {
            const {
                name: i,
                avatar: l
            } = await this.fetchIdentity({
                address: e,
                caipNetworkId: s
            });
            this.setProfileName(i, r), this.setProfileImage(l, r)
        } catch {
            await this.syncReownName(e, r), n !== 1 && this.setProfileImage(null, r)
        }
    }
    syncConnectedWalletInfo(e) {
        const n = se.getProviderId(e);
        if (n === be.CONNECTOR_TYPE_AUTH) {
            const r = this.authProvider;
            if (r) {
                const s = g.getConnectedSocialProvider() ? ? "email",
                    a = r.getEmail() ? ? r.getUsername();
                this.setConnectedWalletInfo({
                    name: n,
                    identifier: a,
                    social: s
                }, e)
            }
        } else super.syncConnectedWalletInfo(e)
    }
    async injectModalUi() {
        if (O.isClient() && !fr) try {
            const e = { ...ee.DEFAULT_FEATURES,
                    ...this.options.features
                },
                n = this.remoteFeatures;
            if (await this.loadModalComponents(e, n), O.isClient() && !document.querySelector("w3m-modal")) {
                const s = document.createElement("w3m-modal");
                !m.state.disableAppend && !m.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s)
            }
            fr = !0
        } catch (e) {
            console.error("Error injecting modal UI:", e)
        }
    }
    async loadModalComponents(e, n) {
        if (!O.isClient()) return;
        const r = [];
        (n.email || n.socials && n.socials.length > 0) && r.push(Oe(() =>
            import ("./embedded-wallet-gu_H4G6Z.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))), n.email && r.push(Oe(() =>
            import ("./email-BqEFyuWG.js"), __vite__mapDeps([21, 3, 4, 5, 6, 1, 2, 16, 10, 15, 9, 14, 22, 11, 17, 18, 19, 20]))), n.socials && r.push(Oe(() =>
            import ("./socials-CcP_4O21.js"), __vite__mapDeps([23, 1, 2, 3, 4, 5, 6, 24, 9, 25, 26, 15, 27, 14, 10, 16, 28, 8, 29, 17, 18, 19, 20, 30]))), n.swaps && n.swaps.length > 0 && r.push(Oe(() =>
            import ("./swaps-C6pYBS_v.js"), __vite__mapDeps([31, 1, 2, 3, 4, 5, 6, 14, 10, 32, 33, 34, 8, 15, 30, 11, 9, 17, 18, 19, 20]))), e.send && r.push(Oe(() =>
            import ("./send-DZGN9r_W.js"), __vite__mapDeps([35, 1, 2, 3, 4, 5, 6, 14, 10, 15, 9, 25, 16, 34, 8, 11, 36, 37, 17, 18, 19, 20]))), e.receive && r.push(Oe(() =>
            import ("./receive-BbCLkshZ.js"), __vite__mapDeps([38, 1, 2, 3, 4, 5, 6, 39, 8, 28, 29, 17, 18, 19, 20]))), n.onramp && n.onramp.length > 0 && r.push(Oe(() =>
            import ("./onramp-JSxt_hc1.js"), __vite__mapDeps([40, 1, 2, 3, 4, 5, 6, 41, 8, 10, 15, 24, 9, 25, 42, 16, 14, 27, 11, 17, 18, 19, 20]))), n.activity && r.push(Oe(() =>
            import ("./transactions-fITJxoch.js"), __vite__mapDeps([43, 1, 3, 4, 5, 6, 2, 44, 15, 16, 8, 30, 17, 18, 19, 20]))), e.pay && r.push(Oe(() =>
            import ("./index-BnQZsxt7.js"), __vite__mapDeps([45, 1, 2, 3, 4, 5, 6, 14, 10, 46, 8, 15, 12, 41, 37, 27, 17, 18, 19, 20]))), n.emailCapture && r.push(Oe(() =>
            import ("./ui-NdWYuhVO.js"), __vite__mapDeps([47, 1, 2, 3, 4, 5, 6, 21, 16, 10, 15, 9, 14, 22, 11, 17, 18, 19, 20]))), await Promise.all([...r, Oe(() =>
            import ("./index-KwFKffKp.js"), __vite__mapDeps([48, 1, 2, 3, 4, 5, 6, 8, 10, 36, 15, 49, 33, 12, 41, 14, 13, 46, 44, 16, 30, 32, 37, 9, 11, 22, 24, 25, 26, 7, 27, 39, 28, 29, 17, 18, 19, 20, 42])), Oe(() =>
            import ("./w3m-modal-bnTNk9DQ.js"), __vite__mapDeps([50, 1, 2, 3, 4, 5, 6, 12, 8, 15, 13, 10, 33, 49, 17, 18, 19, 20]))])
    }
}
const Ti = "1.7.17";

function Si(t) {
    return new Dr({ ...t,
        sdkVersion: O.generateSdkVersion(t.adapters ? ? [], "html", Ti)
    })
}
const Di = Object.freeze(Object.defineProperty({
    __proto__: null,
    AccountController: R,
    AppKit: Dr,
    CoreHelperUtil: O,
    DEFAULT_METHODS: xr,
    WcConstantsUtil: _t,
    WcHelpersUtil: Ge,
    createAppKit: Si
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    qn as $, R as A, M as B, mi as C, x as D, ne as E, be as F, Ye as G, xt as H, se as I, ss as J, jn as K, Ue as L, z as M, es as N, m as O, Te as P, xe as Q, B as R, $e as S, ve as T, Pi as U, Q as V, pe as W, cn as X, dn as Y, hn as Z, Ee as _, fe as a, Ct as a0, Fs as a1, Ie as a2, Di as a3, _ as b, Li as c, f as d, xi as e, u as f, We as g, O as h, Us as i, ue as j, zn as k, ee as l, Nr as m, E as n, Ar as o, ae as p, g as q, Ui as r, Ce as s, fi as t, me as u, Er as v, Re as w, L as x, Wn as y, U as z
};