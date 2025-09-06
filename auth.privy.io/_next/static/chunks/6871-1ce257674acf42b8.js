"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6871], {
        1811: (e, a, t) => {
            t.d(a, {
                _: () => r
            });
            let r = (0, t(12644).x)({
                id: 0xa0c71fd,
                name: "Blast Sepolia",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia.blast.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Blastscan",
                        url: "https://sepolia.blastscan.io",
                        apiUrl: "https://api-sepolia.blastscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 756690
                    }
                },
                testnet: !0,
                sourceId: 0xaa36a7
            })
        },
        3010: (e, a, t) => {
            t.d(a, {
                h: () => r
            });
            let r = (0, t(12644).x)({
                id: 5,
                name: "Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://5.rpc.thirdweb.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io",
                        apiUrl: "https://api-goerli.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
                        blockCreated: 0x9dc386
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 6507670
                    }
                },
                testnet: !0
            })
        },
        9678: (e, a, t) => {
            t.d(a, {
                L: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 7777777,
                name: "Zora",
                nativeCurrency: {
                    decimals: 18,
                    name: "Ether",
                    symbol: "ETH"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.zora.energy"],
                        webSocket: ["wss://rpc.zora.energy"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Explorer",
                        url: "https://explorer.zora.energy",
                        apiUrl: "https://explorer.zora.energy/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    l2OutputOracle: {
                        1: {
                            address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
                        }
                    },
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 5882
                    },
                    portal: {
                        1: {
                            address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
                        }
                    }
                },
                sourceId: 1
            })
        },
        10250: (e, a, t) => {
            t.d(a, {
                Z: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 84532,
                network: "base-sepolia",
                name: "Base Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia.base.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Basescan",
                        url: "https://sepolia.basescan.org",
                        apiUrl: "https://api-sepolia.basescan.org/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    disputeGameFactory: {
                        0xaa36a7: {
                            address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
                        }
                    },
                    l2OutputOracle: {
                        0xaa36a7: {
                            address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
                        }
                    },
                    portal: {
                        0xaa36a7: {
                            address: "0x49f53e41452c74589e85ca1677426ba426459e85",
                            blockCreated: 4446677
                        }
                    },
                    l1StandardBridge: {
                        0xaa36a7: {
                            address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
                            blockCreated: 4446677
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 1059647
                    }
                },
                testnet: !0,
                sourceId: 0xaa36a7
            })
        },
        11600: (e, a, t) => {
            t.d(a, {
                J: () => r
            });
            let r = (0, t(12644).x)({
                id: 80085,
                name: "Berachain Artio",
                nativeCurrency: {
                    decimals: 18,
                    name: "BERA Token",
                    symbol: "BERA"
                },
                rpcUrls: {
                    default: {
                        http: ["https://artio.rpc.berachain.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Berachain",
                        url: "https://artio.beratrail.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 866924
                    }
                },
                testnet: !0
            })
        },
        12155: (e, a, t) => {
            t.d(a, {
                G: () => r
            });
            let r = (0, t(12644).x)({
                id: 314,
                name: "Filecoin Mainnet",
                nativeCurrency: {
                    decimals: 18,
                    name: "filecoin",
                    symbol: "FIL"
                },
                rpcUrls: {
                    default: {
                        http: ["https://api.node.glif.io/rpc/v1"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Filfox",
                        url: "https://filfox.info/en"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 3328594
                    }
                }
            })
        },
        12644: (e, a, t) => {
            t.d(a, {
                x: () => r
            });

            function r(e) {
                return {
                    formatters: void 0,
                    fees: void 0,
                    serializers: void 0,
                    ...e
                }
            }
        },
        15720: (e, a, t) => {
            t.d(a, {
                n: () => r
            });
            let r = (0, t(12644).x)({
                id: 80002,
                name: "Polygon Amoy",
                nativeCurrency: {
                    name: "POL",
                    symbol: "POL",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc-amoy.polygon.technology"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "PolygonScan",
                        url: "https://amoy.polygonscan.com",
                        apiUrl: "https://api-amoy.polygonscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 3127388
                    }
                },
                testnet: !0
            })
        },
        18189: (e, a, t) => {
            t.d(a, {
                O: () => r
            });
            let r = (0, t(12644).x)({
                id: 314159,
                name: "Filecoin Calibration",
                nativeCurrency: {
                    decimals: 18,
                    name: "testnet filecoin",
                    symbol: "tFIL"
                },
                rpcUrls: {
                    default: {
                        http: ["https://api.calibration.node.glif.io/rpc/v1"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Filscan",
                        url: "https://calibration.filscan.io"
                    }
                },
                testnet: !0
            })
        },
        19961: (e, a, t) => {
            t.d(a, {
                _: () => r
            });
            let r = (0, t(12644).x)({
                id: 80094,
                name: "Berachain",
                nativeCurrency: {
                    decimals: 18,
                    name: "BERA Token",
                    symbol: "BERA"
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 0
                    },
                    ensRegistry: {
                        address: "0x5b22280886a2f5e09a49bea7e320eab0e5320e28",
                        blockCreated: 877007
                    },
                    ensUniversalResolver: {
                        address: "0xddfb18888a9466688235887dec2a10c4f5effee9",
                        blockCreated: 877008
                    }
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.berachain.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Berascan",
                        url: "https://berascan.com"
                    }
                },
                ensTlds: [".bera"],
                testnet: !1
            })
        },
        20237: (e, a, t) => {
            t.d(a, {
                o: () => w
            });
            var r = t(16630);
            async function s(e, a) {
                return BigInt(await e.request({
                    method: "eth_gasPrice",
                    params: [a]
                }))
            }
            async function l(e, a) {
                return BigInt(await e.request({
                    method: "eth_maxPriorityFeePerGas",
                    params: [a]
                }))
            }
            var c = t(2753),
                o = t(41991),
                n = t(62822),
                i = t(92687),
                d = t(5359);

            function p(e) {
                return 0 === e || 0 n === e || null == e || "0" === e || "" === e || "string" == typeof e && ("0x" === (0, d.B)(e).toLowerCase() || "0x00" === (0, d.B)(e).toLowerCase())
            }

            function b(e) {
                return "cip64" === e.type || void 0 !== e.maxFeePerGas && void 0 !== e.maxPriorityFeePerGas && !p(e.feeCurrency)
            }
            let m = {
                block: (0, o.R)({
                    format: e => ({
                        transactions: e.transactions ? .map(e => "string" == typeof e ? e : { ...n.uP(e),
                            ...e.gatewayFee ? {
                                gatewayFee: c.uU(e.gatewayFee),
                                gatewayFeeRecipient: e.gatewayFeeRecipient
                            } : {},
                            feeCurrency: e.feeCurrency
                        })
                    })
                }),
                transaction: (0, n.gU)({
                    format(e) {
                        if ("0x7e" === e.type) return {
                            isSystemTx: e.isSystemTx,
                            mint: e.mint ? (0, c.uU)(e.mint) : void 0,
                            sourceHash: e.sourceHash,
                            type: "deposit"
                        };
                        let a = {
                            feeCurrency: e.feeCurrency
                        };
                        return "0x7b" === e.type ? a.type = "cip64" : ("0x7c" === e.type && (a.type = "cip42"), a.gatewayFee = e.gatewayFee ? (0, c.uU)(e.gatewayFee) : null, a.gatewayFeeRecipient = e.gatewayFeeRecipient), a
                    }
                }),
                transactionRequest: (0, i.bm)({
                    format(e) {
                        let a = {};
                        return e.feeCurrency && (a.feeCurrency = e.feeCurrency), b(e) && (a.type = "0x7b"), a
                    }
                })
            };
            var u = t(60027),
                x = t(83484),
                h = t(27095),
                f = t(35185),
                C = t(27184),
                y = t(76892),
                E = t(81649),
                k = t(58355),
                A = t(98114),
                g = t(97701),
                B = t(64189),
                F = t(56840);
            let v = u.Ao,
                w = {
                    blockTime: 1e3,
                    contracts: r.M,
                    formatters: m,
                    serializers: {
                        transaction: function(e, a) {
                            return b(e) ? function(e, a) {
                                ! function(e) {
                                    let {
                                        chainId: a,
                                        maxPriorityFeePerGas: t,
                                        gasPrice: r,
                                        maxFeePerGas: s,
                                        to: l,
                                        feeCurrency: c
                                    } = e;
                                    if (a <= 0) throw new f.qD({
                                        chainId: a
                                    });
                                    if (l && !(0, E.P)(l)) throw new x.M({
                                        address: l
                                    });
                                    if (r) throw new h.C("`gasPrice` is not a valid CIP-64 Transaction attribute.");
                                    if (!p(s) && s > v) throw new C.BG({
                                        maxFeePerGas: s
                                    });
                                    if (!p(t) && !p(s) && t > s) throw new C.lN({
                                        maxFeePerGas: s,
                                        maxPriorityFeePerGas: t
                                    });
                                    if (!p(c) && !(0, E.P)(c)) throw new h.C("`feeCurrency` MUST be a token address for CIP-64 transactions.");
                                    if (p(c)) throw new h.C("`feeCurrency` must be provided for CIP-64 transactions.")
                                }(e);
                                let {
                                    chainId: t,
                                    gas: r,
                                    nonce: s,
                                    to: l,
                                    value: c,
                                    maxFeePerGas: o,
                                    maxPriorityFeePerGas: n,
                                    accessList: i,
                                    feeCurrency: d,
                                    data: b
                                } = e, m = [(0, A.nj)(t), s ? (0, A.nj)(s) : "0x", n ? (0, A.nj)(n) : "0x", o ? (0, A.nj)(o) : "0x", r ? (0, A.nj)(r) : "0x", l ? ? "0x", c ? (0, A.nj)(c) : "0x", b ? ? "0x", (0, B.f)(i), d, ...(0, F.Z)(e, a)];
                                return (0, k.aP)(["0x7b", (0, g.EQ)(m)])
                            }(e, a) : (0, y.bQ)(e, a)
                        }
                    },
                    fees: {
                        estimateFeesPerGas: async e => {
                            if (!e.request ? .feeCurrency) return null;
                            let [a, t] = await Promise.all([s(e.client, e.request.feeCurrency), l(e.client, e.request.feeCurrency)]);
                            return {
                                maxFeePerGas: e.multiply(a - t) + t,
                                maxPriorityFeePerGas: t
                            }
                        }
                    }
                }
        },
        24047: (e, a, t) => {
            t.d(a, {
                C: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 84531,
                name: "Base Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://goerli.base.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Basescan",
                        url: "https://goerli.basescan.org",
                        apiUrl: "https://goerli.basescan.org/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    l2OutputOracle: {
                        5: {
                            address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 1376988
                    },
                    portal: {
                        5: {
                            address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA"
                        }
                    },
                    l1StandardBridge: {
                        5: {
                            address: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a"
                        }
                    }
                },
                testnet: !0,
                sourceId: 5
            })
        },
        26903: (e, a, t) => {
            t.d(a, {
                i: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 0xaa37dc,
                name: "OP Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia.optimism.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Blockscout",
                        url: "https://optimism-sepolia.blockscout.com",
                        apiUrl: "https://optimism-sepolia.blockscout.com/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    disputeGameFactory: {
                        0xaa36a7: {
                            address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1"
                        }
                    },
                    l2OutputOracle: {
                        0xaa36a7: {
                            address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 1620204
                    },
                    portal: {
                        0xaa36a7: {
                            address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
                        }
                    },
                    l1StandardBridge: {
                        0xaa36a7: {
                            address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
                        }
                    }
                },
                testnet: !0,
                sourceId: 0xaa36a7
            })
        },
        28255: (e, a, t) => {
            t.d(a, {
                _: () => b
            });
            var r = t(57833),
                s = t(57767),
                l = t(98114),
                c = t(72352),
                o = t(41287),
                n = t(92687),
                i = t(29618);
            async function d(e, a) {
                let {
                    account: t = e.account
                } = a;
                if (!t) throw new s.T;
                let d = (0, r.J)(t);
                try {
                    let {
                        accessList: t,
                        blockNumber: r,
                        blockTag: s,
                        data: c,
                        gas: p,
                        gasPrice: b,
                        maxFeePerGas: m,
                        maxPriorityFeePerGas: u,
                        nonce: x,
                        to: h,
                        value: f,
                        ...C
                    } = a, y = ("bigint" == typeof r ? (0, l.cK)(r) : void 0) || s;
                    (0, i.c)(a);
                    let E = e.chain ? .formatters ? .transactionRequest ? .format,
                        k = (E || n.Bv)({ ...(0, o.o)(C, {
                                format: E
                            }),
                            from: d ? .address,
                            accessList: t,
                            data: c,
                            gas: p,
                            gasPrice: b,
                            maxFeePerGas: m,
                            maxPriorityFeePerGas: u,
                            nonce: x,
                            to: h,
                            value: f
                        }),
                        {
                            baseFeePerGas: A,
                            gasLimit: g,
                            priorityFeePerGas: B
                        } = await e.request({
                            method: "linea_estimateGas",
                            params: y ? [k, y] : [k]
                        });
                    return {
                        baseFeePerGas: BigInt(A),
                        gasLimit: BigInt(g),
                        priorityFeePerGas: BigInt(B)
                    }
                } catch (t) {
                    throw (0, c.d)(t, { ...a,
                        account: d,
                        chain: e.chain
                    })
                }
            }
            async function p({
                client: e,
                multiply: a,
                request: t,
                type: r
            }) {
                try {
                    let s = await d(e, { ...t,
                            account: t ? .account
                        }),
                        {
                            priorityFeePerGas: l
                        } = s,
                        c = a(BigInt(s.baseFeePerGas)) + l;
                    if ("legacy" === r) return {
                        gasPrice: c
                    };
                    return {
                        maxFeePerGas: c,
                        maxPriorityFeePerGas: l
                    }
                } catch {
                    return null
                }
            }
            let b = (0, t(12644).x)({
                fees: {
                    estimateFeesPerGas: p,
                    async maxPriorityFeePerGas({
                        block: e,
                        client: a,
                        request: t
                    }) {
                        let r = await p({
                            block: e,
                            client: a,
                            multiply: e => e,
                            request: t,
                            type: "eip1559"
                        });
                        return r ? .maxPriorityFeePerGas ? r.maxPriorityFeePerGas : null
                    }
                },
                id: 59144,
                name: "Linea Mainnet",
                nativeCurrency: {
                    name: "Linea Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.linea.build"],
                        webSocket: ["wss://rpc.linea.build"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://lineascan.build",
                        apiUrl: "https://api.lineascan.build/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 42
                    },
                    ensRegistry: {
                        address: "0x50130b669B28C339991d8676FA73CF122a121267",
                        blockCreated: 6682888
                    },
                    ensUniversalResolver: {
                        address: "0x3aA974fb3f8C1E02796048BDCdeD79e9D53a6965",
                        blockCreated: 6683e3
                    }
                },
                ensTlds: [".linea.eth"],
                testnet: !1
            })
        },
        28338: (e, a, t) => {
            t.d(a, {
                D: () => r
            });
            let r = (0, t(12644).x)({
                id: 42161,
                name: "Arbitrum One",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://arb1.arbitrum.io/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Arbiscan",
                        url: "https://arbiscan.io",
                        apiUrl: "https://api.arbiscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 7654707
                    }
                }
            })
        },
        30428: (e, a, t) => {
            t.d(a, {
                R: () => r
            });
            let r = (0, t(12644).x)({
                id: 421613,
                name: "Arbitrum Goerli",
                nativeCurrency: {
                    name: "Arbitrum Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://goerli-rollup.arbitrum.io/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Arbiscan",
                        url: "https://goerli.arbiscan.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 88114
                    }
                },
                testnet: !0
            })
        },
        36100: (e, a, t) => {
            t.d(a, {
                Z: () => r
            });
            let r = (0, t(12644).x)({
                id: 59140,
                name: "Linea Goerli Testnet",
                nativeCurrency: {
                    name: "Linea Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.goerli.linea.build"],
                        webSocket: ["wss://rpc.goerli.linea.build"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://goerli.lineascan.build",
                        apiUrl: "https://goerli.lineascan.build/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 498623
                    }
                },
                testnet: !0
            })
        },
        39726: (e, a, t) => {
            t.d(a, {
                F: () => r
            });
            let r = (0, t(12644).x)({
                id: 42,
                network: "lukso",
                name: "LUKSO",
                nativeCurrency: {
                    name: "LUKSO",
                    symbol: "LYX",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.mainnet.lukso.network"],
                        webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "LUKSO Mainnet Explorer",
                        url: "https://explorer.execution.mainnet.lukso.network",
                        apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 468183
                    }
                }
            })
        },
        42913: (e, a, t) => {
            t.d(a, {
                G: () => r
            });
            let r = (0, t(12644).x)({
                id: 0xaa36a7,
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia.drpc.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io",
                        apiUrl: "https://api-sepolia.etherscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                        blockCreated: 5317080
                    }
                },
                testnet: !0
            })
        },
        44073: (e, a, t) => {
            t.d(a, {
                E: () => r
            });
            let r = (0, t(12644).x)({
                id: 80001,
                name: "Polygon Mumbai",
                nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://80001.rpc.thirdweb.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "PolygonScan",
                        url: "https://mumbai.polygonscan.com",
                        apiUrl: "https://api-testnet.polygonscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 0x18938b0
                    }
                },
                testnet: !0
            })
        },
        45949: (e, a, t) => {
            t.d(a, {
                m: () => r
            });
            let r = (0, t(12644).x)({
                id: 43114,
                name: "Avalanche",
                nativeCurrency: {
                    decimals: 18,
                    name: "Avalanche",
                    symbol: "AVAX"
                },
                rpcUrls: {
                    default: {
                        http: ["https://api.avax.network/ext/bc/C/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "SnowTrace",
                        url: "https://snowtrace.io",
                        apiUrl: "https://api.snowtrace.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 0xb5b35e
                    }
                }
            })
        },
        46616: (e, a, t) => {
            t.d(a, {
                p: () => s
            });
            var r = t(20237);
            let s = (0, t(12644).x)({ ...r.o,
                id: 44787,
                name: "Alfajores",
                nativeCurrency: {
                    decimals: 18,
                    name: "CELO",
                    symbol: "A-CELO"
                },
                rpcUrls: {
                    default: {
                        http: ["https://alfajores-forno.celo-testnet.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Celo Alfajores Explorer",
                        url: "https://celo-alfajores.blockscout.com",
                        apiUrl: "https://celo-alfajores.blockscout.com/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 0xde4e29
                    },
                    portal: {
                        17e3: {
                            address: "0x82527353927d8D069b3B452904c942dA149BA381",
                            blockCreated: 2411324
                        }
                    },
                    disputeGameFactory: {
                        17e3: {
                            address: "0xE28AAdcd9883746c0e5068F58f9ea06027b214cb",
                            blockCreated: 2411324
                        }
                    },
                    l2OutputOracle: {
                        17e3: {
                            address: "0x4a2635e9e4f6e45817b1D402ac4904c1d1752438",
                            blockCreated: 2411324
                        }
                    },
                    l1StandardBridge: {
                        17e3: {
                            address: "0xD1B0E0581973c9eB7f886967A606b9441A897037",
                            blockCreated: 2411324
                        }
                    }
                },
                testnet: !0
            })
        },
        52659: (e, a, t) => {
            t.d(a, {
                Y: () => r
            });
            let r = (0, t(12644).x)({
                id: 421614,
                name: "Arbitrum Sepolia",
                nativeCurrency: {
                    name: "Arbitrum Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia-rollup.arbitrum.io/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Arbiscan",
                        url: "https://sepolia.arbiscan.io",
                        apiUrl: "https://api-sepolia.arbiscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 81930
                    }
                },
                testnet: !0
            })
        },
        55416: (e, a, t) => {
            t.d(a, {
                N: () => r
            });
            let r = (0, t(12644).x)({
                id: 56,
                name: "BNB Smart Chain",
                nativeCurrency: {
                    decimals: 18,
                    name: "BNB",
                    symbol: "BNB"
                },
                rpcUrls: {
                    default: {
                        http: ["https://56.rpc.thirdweb.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "BscScan",
                        url: "https://bscscan.com",
                        apiUrl: "https://api.bscscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 0xf2f12c
                    }
                }
            })
        },
        57488: (e, a, t) => {
            t.d(a, {
                t: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 420,
                name: "Optimism Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://goerli.optimism.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://goerli-optimism.etherscan.io",
                        apiUrl: "https://goerli-optimism.etherscan.io/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    l2OutputOracle: {
                        5: {
                            address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 49461
                    },
                    portal: {
                        5: {
                            address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383"
                        }
                    },
                    l1StandardBridge: {
                        5: {
                            address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8"
                        }
                    }
                },
                testnet: !0,
                sourceId: 5
            })
        },
        67049: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var r = t(20237);
            let s = (0, t(12644).x)({ ...r.o,
                id: 42220,
                name: "Celo",
                nativeCurrency: {
                    decimals: 18,
                    name: "CELO",
                    symbol: "CELO"
                },
                rpcUrls: {
                    default: {
                        http: ["https://forno.celo.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Celo Explorer",
                        url: "https://celoscan.io",
                        apiUrl: "https://api.celoscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 0xc81517
                    }
                },
                testnet: !1
            })
        },
        70201: (e, a, t) => {
            t.d(a, {
                C: () => r
            });
            let r = (0, t(12644).x)({
                id: 43113,
                name: "Avalanche Fuji",
                nativeCurrency: {
                    decimals: 18,
                    name: "Avalanche Fuji",
                    symbol: "AVAX"
                },
                rpcUrls: {
                    default: {
                        http: ["https://api.avax-test.network/ext/bc/C/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "SnowTrace",
                        url: "https://testnet.snowtrace.io",
                        apiUrl: "https://api-testnet.snowtrace.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 7096959
                    }
                },
                testnet: !0
            })
        },
        71023: (e, a, t) => {
            t.d(a, {
                a: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 0x3b9ac9ff,
                name: "Zora Sepolia",
                network: "zora-sepolia",
                nativeCurrency: {
                    decimals: 18,
                    name: "Zora Sepolia",
                    symbol: "ETH"
                },
                rpcUrls: {
                    default: {
                        http: ["https://sepolia.rpc.zora.energy"],
                        webSocket: ["wss://sepolia.rpc.zora.energy"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Zora Sepolia Explorer",
                        url: "https://sepolia.explorer.zora.energy/",
                        apiUrl: "https://sepolia.explorer.zora.energy/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    l2OutputOracle: {
                        0xaa36a7: {
                            address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9"
                        }
                    },
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 83160
                    },
                    portal: {
                        0xaa36a7: {
                            address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f"
                        }
                    },
                    l1StandardBridge: {
                        0xaa36a7: {
                            address: "0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB"
                        }
                    }
                },
                sourceId: 0xaa36a7,
                testnet: !0
            })
        },
        71239: (e, a, t) => {
            t.d(a, {
                y: () => r
            });
            let r = (0, t(12644).x)({
                id: 17e3,
                name: "Holesky",
                nativeCurrency: {
                    name: "Holesky Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://ethereum-holesky-rpc.publicnode.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://holesky.etherscan.io",
                        apiUrl: "https://api-holesky.etherscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 77
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        blockCreated: 801613
                    },
                    ensUniversalResolver: {
                        address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
                        blockCreated: 973484
                    }
                },
                testnet: !0
            })
        },
        76022: (e, a, t) => {
            t.d(a, {
                R: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 10,
                name: "OP Mainnet",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://mainnet.optimism.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Optimism Explorer",
                        url: "https://optimistic.etherscan.io",
                        apiUrl: "https://api-optimistic.etherscan.io/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    disputeGameFactory: {
                        1: {
                            address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
                        }
                    },
                    l2OutputOracle: {
                        1: {
                            address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 4286263
                    },
                    portal: {
                        1: {
                            address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
                        }
                    }
                },
                sourceId: 1
            })
        },
        76373: (e, a, t) => {
            t.d(a, {
                u: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 480,
                name: "World Chain",
                network: "worldchain",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://worldchain-mainnet.g.alchemy.com/public"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Worldscan",
                        url: "https://worldscan.org",
                        apiUrl: "https://api.worldscan.org/api"
                    },
                    blockscout: {
                        name: "Blockscout",
                        url: "https://worldchain-mainnet.explorer.alchemy.com",
                        apiUrl: "https://worldchain-mainnet.explorer.alchemy.com/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 0
                    },
                    disputeGameFactory: {
                        1: {
                            address: "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
                        }
                    },
                    l2OutputOracle: {
                        1: {
                            address: "0x19A6d1E9034596196295CF148509796978343c5D"
                        }
                    },
                    portal: {
                        1: {
                            address: "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x470458C91978D2d929704489Ad730DC3E3001113"
                        }
                    }
                },
                testnet: !1,
                sourceId: 1
            })
        },
        98186: (e, a, t) => {
            t.d(a, {
                F: () => r
            });
            let r = (0, t(12644).x)({
                id: 10143,
                name: "Monad Testnet",
                nativeCurrency: {
                    name: "Testnet MON Token",
                    symbol: "MON",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://testnet-rpc.monad.xyz"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Monad Testnet explorer",
                        url: "https://testnet.monadexplorer.com"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 251449
                    }
                },
                testnet: !0
            })
        },
        98302: (e, a, t) => {
            t.d(a, {
                n: () => r
            });
            let r = (0, t(12644).x)({
                id: 137,
                name: "Polygon",
                nativeCurrency: {
                    name: "POL",
                    symbol: "POL",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://polygon-rpc.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "PolygonScan",
                        url: "https://polygonscan.com",
                        apiUrl: "https://api.polygonscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 0x18938b0
                    }
                }
            })
        },
        98834: (e, a, t) => {
            t.d(a, {
                v: () => s
            });
            var r = t(68028);
            let s = (0, t(12644).x)({ ...r.o,
                id: 81457,
                name: "Blast",
                nativeCurrency: {
                    decimals: 18,
                    name: "Ether",
                    symbol: "ETH"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.blast.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Blastscan",
                        url: "https://blastscan.io",
                        apiUrl: "https://api.blastscan.io/api"
                    }
                },
                contracts: { ...r.o.contracts,
                    multicall3: {
                        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        blockCreated: 212929
                    },
                    l2OutputOracle: {
                        1: {
                            address: "0x826D1B0D4111Ad9146Eb8941D7Ca2B6a44215c76",
                            blockCreated: 0x1268006
                        }
                    },
                    portal: {
                        1: {
                            address: "0x0Ec68c5B10F21EFFb74f2A5C61DFe6b08C0Db6Cb",
                            blockCreated: 0x1268005
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x697402166Fbf2F22E970df8a6486Ef171dbfc524",
                            blockCreated: 0x1268008
                        }
                    }
                },
                sourceId: 1
            })
        }
    }
]);