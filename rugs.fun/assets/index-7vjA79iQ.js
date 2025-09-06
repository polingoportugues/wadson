const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/add-B-Bbpv4A.js", "assets/lit-element-bcC7X8ka.js", "assets/all-wallets-qDX_8AvZ.js", "assets/arrow-bottom-circle-Bm5gnRrA.js", "assets/app-store-e5CCnIgl.js", "assets/apple-D0aQAcPE.js", "assets/arrow-bottom-B0wGnglH.js", "assets/arrow-left-nU-GE4qx.js", "assets/arrow-right-Bu6mjekH.js", "assets/arrow-top-BLSA9PYr.js", "assets/bank-hrQOwcE3.js", "assets/browser-CBGHRp0V.js", "assets/bin-Bz_15jLo.js", "assets/bitcoin-TfokcpGz.js", "assets/card-BEc3YKAc.js", "assets/checkmark-Dut4Q9Q7.js", "assets/checkmark-bold-Cb3z5fpM.js", "assets/chevron-bottom-BPhUCPsm.js", "assets/chevron-left-DtKVZEVz.js", "assets/chevron-right-DHvEMirq.js", "assets/chevron-top-CCPVUJoL.js", "assets/chrome-store-CGQfF3nq.js", "assets/clock-ByMZhKMw.js", "assets/close-CqaDBs-G.js", "assets/compass-DsAkC3GQ.js", "assets/coinPlaceholder-BTLcFOSl.js", "assets/copy-B52SKeSr.js", "assets/cursor-B244TsMZ.js", "assets/cursor-transparent-D1JLyAv6.js", "assets/circle-D4CShydy.js", "assets/desktop-DJLD3UFd.js", "assets/disconnect-uBccPeEj.js", "assets/discord-BFPZGlOn.js", "assets/ethereum-Deng6NfJ.js", "assets/etherscan-D9Vrj181.js", "assets/extension-Elsb5WP1.js", "assets/external-link-C2U4HhV5.js", "assets/facebook-BfTc2eM7.js", "assets/farcaster-CwnizQSl.js", "assets/filters-AuTxRvX3.js", "assets/github-DliOAsem.js", "assets/google-B4XmV3MR.js", "assets/help-circle-CX6gKEL0.js", "assets/image-U8Xhxz0e.js", "assets/id-8XXBlK5Y.js", "assets/info-circle-xaWeMTTw.js", "assets/lightbulb-C_M5KVML.js", "assets/mail-D7Yn7HKi.js", "assets/mobile-DSnwxlU3.js", "assets/more-2aWj5AQG.js", "assets/network-placeholder-CU7Kh2q-.js", "assets/nftPlaceholder-CO6yI2YS.js", "assets/off-CGOzAkKG.js", "assets/play-store-zBcVj-lA.js", "assets/plus-RDGcUskJ.js", "assets/qr-code-BT1L1mmx.js", "assets/recycle-horizontal-C7uW4q2b.js", "assets/refresh-DLjoGxqq.js", "assets/search-N0gzobPx.js", "assets/send-BMhNk9VH.js", "assets/swapHorizontal-7We8Pufd.js", "assets/swapHorizontalMedium-DydveS0F.js", "assets/swapHorizontalBold-PmWkgC6p.js", "assets/swapHorizontalRoundedBold-BSCpwtj6.js", "assets/swapVertical-DkwoWY20.js", "assets/solana-CiC58k-g.js", "assets/telegram-paLzM5jE.js", "assets/three-dots-BCnkS4ke.js", "assets/twitch-W4mprrFD.js", "assets/x-ClT8cHuE.js", "assets/twitterIcon-DhmbuqLR.js", "assets/user-jlVSpumx.js", "assets/verify-l5wRPogO.js", "assets/verify-filled-DcxavZ8z.js", "assets/wallet-D7tzkYcj.js", "assets/walletconnect-DWpcj3cE.js", "assets/wallet-placeholder-Bv0pW1sn.js", "assets/warning-circle-Zht4_byv.js", "assets/info-BlE4FgwV.js", "assets/exclamation-triangle-C-nXn5uK.js", "assets/reown-logo-CNwwQ6bw.js", "assets/x-mark-BE2L6rX0.js"]))) => i.map(i => d[i]);
import {
    _ as a
} from "./pixi-vendor-CD9TR_py.js";
import {
    i as E,
    a as R,
    x as y
} from "./lit-element-bcC7X8ka.js";
import {
    n as s,
    m as I,
    a as D
} from "./class-map-DBQZYyHE.js";
import {
    r as T,
    c as O
} from "./index-t-8BKzI0.js";
const w = {
    getSpacingStyles(t, i) {
        if (Array.isArray(t)) return t[i] ? `var(--wui-spacing-${t[i]})` : void 0;
        if (typeof t == "string") return `var(--wui-spacing-${t})`
    },
    getFormattedDate(t) {
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric"
        }).format(t)
    },
    getHostName(t) {
        try {
            return new URL(t).hostname
        } catch {
            return ""
        }
    },
    getTruncateString({
        string: t,
        charsStart: i,
        charsEnd: r,
        truncate: o
    }) {
        return t.length <= i + r ? t : o === "end" ? `${t.substring(0,i)}...` : o === "start" ? `...${t.substring(t.length-r)}` : `${t.substring(0,Math.floor(i))}...${t.substring(t.length-Math.floor(r))}`
    },
    generateAvatarColors(t) {
        const r = t.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "").substring(0, 6).padEnd(6, "0"),
            o = this.hexToRgb(r),
            n = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),
            c = 100 - 3 * Number(n == null ? void 0 : n.replace("px", "")),
            l = `${c}% ${c}% at 65% 40%`,
            p = [];
        for (let f = 0; f < 5; f += 1) {
            const h = this.tintColor(o, .15 * f);
            p.push(`rgb(${h[0]}, ${h[1]}, ${h[2]})`)
        }
        return `
    --local-color-1: ${p[0]};
    --local-color-2: ${p[1]};
    --local-color-3: ${p[2]};
    --local-color-4: ${p[3]};
    --local-color-5: ${p[4]};
    --local-radial-circle: ${l}
   `
    },
    hexToRgb(t) {
        const i = parseInt(t, 16),
            r = i >> 16 & 255,
            o = i >> 8 & 255,
            n = i & 255;
        return [r, o, n]
    },
    tintColor(t, i) {
        const [r, o, n] = t, e = Math.round(r + (255 - r) * i), c = Math.round(o + (255 - o) * i), l = Math.round(n + (255 - n) * i);
        return [e, c, l]
    },
    isNumber(t) {
        return {
            number: /^[0-9]+$/u
        }.number.test(t)
    },
    getColorTheme(t) {
        var i;
        return t || (typeof window < "u" && window.matchMedia && typeof window.matchMedia == "function" ? (i = window.matchMedia("(prefers-color-scheme: dark)")) != null && i.matches ? "dark" : "light" : "dark")
    },
    splitBalance(t) {
        const i = t.split(".");
        return i.length === 2 ? [i[0], i[1]] : ["0", "00"]
    },
    roundNumber(t, i, r) {
        return t.toString().length >= i ? Number(t).toFixed(r) : t
    },
    formatNumberToLocalString(t, i = 2) {
        return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
            maximumFractionDigits: i,
            minimumFractionDigits: i
        }) : parseFloat(t).toLocaleString("en-US", {
            maximumFractionDigits: i,
            minimumFractionDigits: i
        })
    }
};

function V(t, i) {
    const {
        kind: r,
        elements: o
    } = i;
    return {
        kind: r,
        elements: o,
        finisher(n) {
            customElements.get(t) || customElements.define(t, n)
        }
    }
}

function A(t, i) {
    return customElements.get(t) || customElements.define(t, i), i
}

function P(t) {
    return function(r) {
        return typeof r == "function" ? A(t, r) : V(t, r)
    }
}
class b {
    constructor() {
        this.cache = new Map
    }
    set(i, r) {
        this.cache.set(i, r)
    }
    get(i) {
        return this.cache.get(i)
    }
    has(i) {
        return this.cache.has(i)
    }
    delete(i) {
        this.cache.delete(i)
    }
    clear() {
        this.cache.clear()
    }
}
const S = new b,
    x = E `
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var d = function(t, i, r, o) {
    var n = arguments.length,
        e = n < 3 ? i : o,
        c;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") e = Reflect.decorate(t, i, r, o);
    else
        for (var l = t.length - 1; l >= 0; l--)(c = t[l]) && (e = (n < 3 ? c(e) : n > 3 ? c(i, r, e) : c(i, r)) || e);
    return n > 3 && e && Object.defineProperty(i, r, e), e
};
const L = {
    add: async () => (await a(async () => {
        const {
            addSvg: t
        } = await
        import ("./add-B-Bbpv4A.js");
        return {
            addSvg: t
        }
    }, __vite__mapDeps([0, 1]))).addSvg,
    allWallets: async () => (await a(async () => {
        const {
            allWalletsSvg: t
        } = await
        import ("./all-wallets-qDX_8AvZ.js");
        return {
            allWalletsSvg: t
        }
    }, __vite__mapDeps([2, 1]))).allWalletsSvg,
    arrowBottomCircle: async () => (await a(async () => {
        const {
            arrowBottomCircleSvg: t
        } = await
        import ("./arrow-bottom-circle-Bm5gnRrA.js");
        return {
            arrowBottomCircleSvg: t
        }
    }, __vite__mapDeps([3, 1]))).arrowBottomCircleSvg,
    appStore: async () => (await a(async () => {
        const {
            appStoreSvg: t
        } = await
        import ("./app-store-e5CCnIgl.js");
        return {
            appStoreSvg: t
        }
    }, __vite__mapDeps([4, 1]))).appStoreSvg,
    apple: async () => (await a(async () => {
        const {
            appleSvg: t
        } = await
        import ("./apple-D0aQAcPE.js");
        return {
            appleSvg: t
        }
    }, __vite__mapDeps([5, 1]))).appleSvg,
    arrowBottom: async () => (await a(async () => {
        const {
            arrowBottomSvg: t
        } = await
        import ("./arrow-bottom-B0wGnglH.js");
        return {
            arrowBottomSvg: t
        }
    }, __vite__mapDeps([6, 1]))).arrowBottomSvg,
    arrowLeft: async () => (await a(async () => {
        const {
            arrowLeftSvg: t
        } = await
        import ("./arrow-left-nU-GE4qx.js");
        return {
            arrowLeftSvg: t
        }
    }, __vite__mapDeps([7, 1]))).arrowLeftSvg,
    arrowRight: async () => (await a(async () => {
        const {
            arrowRightSvg: t
        } = await
        import ("./arrow-right-Bu6mjekH.js");
        return {
            arrowRightSvg: t
        }
    }, __vite__mapDeps([8, 1]))).arrowRightSvg,
    arrowTop: async () => (await a(async () => {
        const {
            arrowTopSvg: t
        } = await
        import ("./arrow-top-BLSA9PYr.js");
        return {
            arrowTopSvg: t
        }
    }, __vite__mapDeps([9, 1]))).arrowTopSvg,
    bank: async () => (await a(async () => {
        const {
            bankSvg: t
        } = await
        import ("./bank-hrQOwcE3.js");
        return {
            bankSvg: t
        }
    }, __vite__mapDeps([10, 1]))).bankSvg,
    browser: async () => (await a(async () => {
        const {
            browserSvg: t
        } = await
        import ("./browser-CBGHRp0V.js");
        return {
            browserSvg: t
        }
    }, __vite__mapDeps([11, 1]))).browserSvg,
    bin: async () => (await a(async () => {
        const {
            binSvg: t
        } = await
        import ("./bin-Bz_15jLo.js");
        return {
            binSvg: t
        }
    }, __vite__mapDeps([12, 1]))).binSvg,
    bitcoin: async () => (await a(async () => {
        const {
            bitcoinSvg: t
        } = await
        import ("./bitcoin-TfokcpGz.js");
        return {
            bitcoinSvg: t
        }
    }, __vite__mapDeps([13, 1]))).bitcoinSvg,
    card: async () => (await a(async () => {
        const {
            cardSvg: t
        } = await
        import ("./card-BEc3YKAc.js");
        return {
            cardSvg: t
        }
    }, __vite__mapDeps([14, 1]))).cardSvg,
    checkmark: async () => (await a(async () => {
        const {
            checkmarkSvg: t
        } = await
        import ("./checkmark-Dut4Q9Q7.js");
        return {
            checkmarkSvg: t
        }
    }, __vite__mapDeps([15, 1]))).checkmarkSvg,
    checkmarkBold: async () => (await a(async () => {
        const {
            checkmarkBoldSvg: t
        } = await
        import ("./checkmark-bold-Cb3z5fpM.js");
        return {
            checkmarkBoldSvg: t
        }
    }, __vite__mapDeps([16, 1]))).checkmarkBoldSvg,
    chevronBottom: async () => (await a(async () => {
        const {
            chevronBottomSvg: t
        } = await
        import ("./chevron-bottom-BPhUCPsm.js");
        return {
            chevronBottomSvg: t
        }
    }, __vite__mapDeps([17, 1]))).chevronBottomSvg,
    chevronLeft: async () => (await a(async () => {
        const {
            chevronLeftSvg: t
        } = await
        import ("./chevron-left-DtKVZEVz.js");
        return {
            chevronLeftSvg: t
        }
    }, __vite__mapDeps([18, 1]))).chevronLeftSvg,
    chevronRight: async () => (await a(async () => {
        const {
            chevronRightSvg: t
        } = await
        import ("./chevron-right-DHvEMirq.js");
        return {
            chevronRightSvg: t
        }
    }, __vite__mapDeps([19, 1]))).chevronRightSvg,
    chevronTop: async () => (await a(async () => {
        const {
            chevronTopSvg: t
        } = await
        import ("./chevron-top-CCPVUJoL.js");
        return {
            chevronTopSvg: t
        }
    }, __vite__mapDeps([20, 1]))).chevronTopSvg,
    chromeStore: async () => (await a(async () => {
        const {
            chromeStoreSvg: t
        } = await
        import ("./chrome-store-CGQfF3nq.js");
        return {
            chromeStoreSvg: t
        }
    }, __vite__mapDeps([21, 1]))).chromeStoreSvg,
    clock: async () => (await a(async () => {
        const {
            clockSvg: t
        } = await
        import ("./clock-ByMZhKMw.js");
        return {
            clockSvg: t
        }
    }, __vite__mapDeps([22, 1]))).clockSvg,
    close: async () => (await a(async () => {
        const {
            closeSvg: t
        } = await
        import ("./close-CqaDBs-G.js");
        return {
            closeSvg: t
        }
    }, __vite__mapDeps([23, 1]))).closeSvg,
    compass: async () => (await a(async () => {
        const {
            compassSvg: t
        } = await
        import ("./compass-DsAkC3GQ.js");
        return {
            compassSvg: t
        }
    }, __vite__mapDeps([24, 1]))).compassSvg,
    coinPlaceholder: async () => (await a(async () => {
        const {
            coinPlaceholderSvg: t
        } = await
        import ("./coinPlaceholder-BTLcFOSl.js");
        return {
            coinPlaceholderSvg: t
        }
    }, __vite__mapDeps([25, 1]))).coinPlaceholderSvg,
    copy: async () => (await a(async () => {
        const {
            copySvg: t
        } = await
        import ("./copy-B52SKeSr.js");
        return {
            copySvg: t
        }
    }, __vite__mapDeps([26, 1]))).copySvg,
    cursor: async () => (await a(async () => {
        const {
            cursorSvg: t
        } = await
        import ("./cursor-B244TsMZ.js");
        return {
            cursorSvg: t
        }
    }, __vite__mapDeps([27, 1]))).cursorSvg,
    cursorTransparent: async () => (await a(async () => {
        const {
            cursorTransparentSvg: t
        } = await
        import ("./cursor-transparent-D1JLyAv6.js");
        return {
            cursorTransparentSvg: t
        }
    }, __vite__mapDeps([28, 1]))).cursorTransparentSvg,
    circle: async () => (await a(async () => {
        const {
            circleSvg: t
        } = await
        import ("./circle-D4CShydy.js");
        return {
            circleSvg: t
        }
    }, __vite__mapDeps([29, 1]))).circleSvg,
    desktop: async () => (await a(async () => {
        const {
            desktopSvg: t
        } = await
        import ("./desktop-DJLD3UFd.js");
        return {
            desktopSvg: t
        }
    }, __vite__mapDeps([30, 1]))).desktopSvg,
    disconnect: async () => (await a(async () => {
        const {
            disconnectSvg: t
        } = await
        import ("./disconnect-uBccPeEj.js");
        return {
            disconnectSvg: t
        }
    }, __vite__mapDeps([31, 1]))).disconnectSvg,
    discord: async () => (await a(async () => {
        const {
            discordSvg: t
        } = await
        import ("./discord-BFPZGlOn.js");
        return {
            discordSvg: t
        }
    }, __vite__mapDeps([32, 1]))).discordSvg,
    ethereum: async () => (await a(async () => {
        const {
            ethereumSvg: t
        } = await
        import ("./ethereum-Deng6NfJ.js");
        return {
            ethereumSvg: t
        }
    }, __vite__mapDeps([33, 1]))).ethereumSvg,
    etherscan: async () => (await a(async () => {
        const {
            etherscanSvg: t
        } = await
        import ("./etherscan-D9Vrj181.js");
        return {
            etherscanSvg: t
        }
    }, __vite__mapDeps([34, 1]))).etherscanSvg,
    extension: async () => (await a(async () => {
        const {
            extensionSvg: t
        } = await
        import ("./extension-Elsb5WP1.js");
        return {
            extensionSvg: t
        }
    }, __vite__mapDeps([35, 1]))).extensionSvg,
    externalLink: async () => (await a(async () => {
        const {
            externalLinkSvg: t
        } = await
        import ("./external-link-C2U4HhV5.js");
        return {
            externalLinkSvg: t
        }
    }, __vite__mapDeps([36, 1]))).externalLinkSvg,
    facebook: async () => (await a(async () => {
        const {
            facebookSvg: t
        } = await
        import ("./facebook-BfTc2eM7.js");
        return {
            facebookSvg: t
        }
    }, __vite__mapDeps([37, 1]))).facebookSvg,
    farcaster: async () => (await a(async () => {
        const {
            farcasterSvg: t
        } = await
        import ("./farcaster-CwnizQSl.js");
        return {
            farcasterSvg: t
        }
    }, __vite__mapDeps([38, 1]))).farcasterSvg,
    filters: async () => (await a(async () => {
        const {
            filtersSvg: t
        } = await
        import ("./filters-AuTxRvX3.js");
        return {
            filtersSvg: t
        }
    }, __vite__mapDeps([39, 1]))).filtersSvg,
    github: async () => (await a(async () => {
        const {
            githubSvg: t
        } = await
        import ("./github-DliOAsem.js");
        return {
            githubSvg: t
        }
    }, __vite__mapDeps([40, 1]))).githubSvg,
    google: async () => (await a(async () => {
        const {
            googleSvg: t
        } = await
        import ("./google-B4XmV3MR.js");
        return {
            googleSvg: t
        }
    }, __vite__mapDeps([41, 1]))).googleSvg,
    helpCircle: async () => (await a(async () => {
        const {
            helpCircleSvg: t
        } = await
        import ("./help-circle-CX6gKEL0.js");
        return {
            helpCircleSvg: t
        }
    }, __vite__mapDeps([42, 1]))).helpCircleSvg,
    image: async () => (await a(async () => {
        const {
            imageSvg: t
        } = await
        import ("./image-U8Xhxz0e.js");
        return {
            imageSvg: t
        }
    }, __vite__mapDeps([43, 1]))).imageSvg,
    id: async () => (await a(async () => {
        const {
            idSvg: t
        } = await
        import ("./id-8XXBlK5Y.js");
        return {
            idSvg: t
        }
    }, __vite__mapDeps([44, 1]))).idSvg,
    infoCircle: async () => (await a(async () => {
        const {
            infoCircleSvg: t
        } = await
        import ("./info-circle-xaWeMTTw.js");
        return {
            infoCircleSvg: t
        }
    }, __vite__mapDeps([45, 1]))).infoCircleSvg,
    lightbulb: async () => (await a(async () => {
        const {
            lightbulbSvg: t
        } = await
        import ("./lightbulb-C_M5KVML.js");
        return {
            lightbulbSvg: t
        }
    }, __vite__mapDeps([46, 1]))).lightbulbSvg,
    mail: async () => (await a(async () => {
        const {
            mailSvg: t
        } = await
        import ("./mail-D7Yn7HKi.js");
        return {
            mailSvg: t
        }
    }, __vite__mapDeps([47, 1]))).mailSvg,
    mobile: async () => (await a(async () => {
        const {
            mobileSvg: t
        } = await
        import ("./mobile-DSnwxlU3.js");
        return {
            mobileSvg: t
        }
    }, __vite__mapDeps([48, 1]))).mobileSvg,
    more: async () => (await a(async () => {
        const {
            moreSvg: t
        } = await
        import ("./more-2aWj5AQG.js");
        return {
            moreSvg: t
        }
    }, __vite__mapDeps([49, 1]))).moreSvg,
    networkPlaceholder: async () => (await a(async () => {
        const {
            networkPlaceholderSvg: t
        } = await
        import ("./network-placeholder-CU7Kh2q-.js");
        return {
            networkPlaceholderSvg: t
        }
    }, __vite__mapDeps([50, 1]))).networkPlaceholderSvg,
    nftPlaceholder: async () => (await a(async () => {
        const {
            nftPlaceholderSvg: t
        } = await
        import ("./nftPlaceholder-CO6yI2YS.js");
        return {
            nftPlaceholderSvg: t
        }
    }, __vite__mapDeps([51, 1]))).nftPlaceholderSvg,
    off: async () => (await a(async () => {
        const {
            offSvg: t
        } = await
        import ("./off-CGOzAkKG.js");
        return {
            offSvg: t
        }
    }, __vite__mapDeps([52, 1]))).offSvg,
    playStore: async () => (await a(async () => {
        const {
            playStoreSvg: t
        } = await
        import ("./play-store-zBcVj-lA.js");
        return {
            playStoreSvg: t
        }
    }, __vite__mapDeps([53, 1]))).playStoreSvg,
    plus: async () => (await a(async () => {
        const {
            plusSvg: t
        } = await
        import ("./plus-RDGcUskJ.js");
        return {
            plusSvg: t
        }
    }, __vite__mapDeps([54, 1]))).plusSvg,
    qrCode: async () => (await a(async () => {
        const {
            qrCodeIcon: t
        } = await
        import ("./qr-code-BT1L1mmx.js");
        return {
            qrCodeIcon: t
        }
    }, __vite__mapDeps([55, 1]))).qrCodeIcon,
    recycleHorizontal: async () => (await a(async () => {
        const {
            recycleHorizontalSvg: t
        } = await
        import ("./recycle-horizontal-C7uW4q2b.js");
        return {
            recycleHorizontalSvg: t
        }
    }, __vite__mapDeps([56, 1]))).recycleHorizontalSvg,
    refresh: async () => (await a(async () => {
        const {
            refreshSvg: t
        } = await
        import ("./refresh-DLjoGxqq.js");
        return {
            refreshSvg: t
        }
    }, __vite__mapDeps([57, 1]))).refreshSvg,
    search: async () => (await a(async () => {
        const {
            searchSvg: t
        } = await
        import ("./search-N0gzobPx.js");
        return {
            searchSvg: t
        }
    }, __vite__mapDeps([58, 1]))).searchSvg,
    send: async () => (await a(async () => {
        const {
            sendSvg: t
        } = await
        import ("./send-BMhNk9VH.js");
        return {
            sendSvg: t
        }
    }, __vite__mapDeps([59, 1]))).sendSvg,
    swapHorizontal: async () => (await a(async () => {
        const {
            swapHorizontalSvg: t
        } = await
        import ("./swapHorizontal-7We8Pufd.js");
        return {
            swapHorizontalSvg: t
        }
    }, __vite__mapDeps([60, 1]))).swapHorizontalSvg,
    swapHorizontalMedium: async () => (await a(async () => {
        const {
            swapHorizontalMediumSvg: t
        } = await
        import ("./swapHorizontalMedium-DydveS0F.js");
        return {
            swapHorizontalMediumSvg: t
        }
    }, __vite__mapDeps([61, 1]))).swapHorizontalMediumSvg,
    swapHorizontalBold: async () => (await a(async () => {
        const {
            swapHorizontalBoldSvg: t
        } = await
        import ("./swapHorizontalBold-PmWkgC6p.js");
        return {
            swapHorizontalBoldSvg: t
        }
    }, __vite__mapDeps([62, 1]))).swapHorizontalBoldSvg,
    swapHorizontalRoundedBold: async () => (await a(async () => {
        const {
            swapHorizontalRoundedBoldSvg: t
        } = await
        import ("./swapHorizontalRoundedBold-BSCpwtj6.js");
        return {
            swapHorizontalRoundedBoldSvg: t
        }
    }, __vite__mapDeps([63, 1]))).swapHorizontalRoundedBoldSvg,
    swapVertical: async () => (await a(async () => {
        const {
            swapVerticalSvg: t
        } = await
        import ("./swapVertical-DkwoWY20.js");
        return {
            swapVerticalSvg: t
        }
    }, __vite__mapDeps([64, 1]))).swapVerticalSvg,
    solana: async () => (await a(async () => {
        const {
            solanaSvg: t
        } = await
        import ("./solana-CiC58k-g.js");
        return {
            solanaSvg: t
        }
    }, __vite__mapDeps([65, 1]))).solanaSvg,
    telegram: async () => (await a(async () => {
        const {
            telegramSvg: t
        } = await
        import ("./telegram-paLzM5jE.js");
        return {
            telegramSvg: t
        }
    }, __vite__mapDeps([66, 1]))).telegramSvg,
    threeDots: async () => (await a(async () => {
        const {
            threeDotsSvg: t
        } = await
        import ("./three-dots-BCnkS4ke.js");
        return {
            threeDotsSvg: t
        }
    }, __vite__mapDeps([67, 1]))).threeDotsSvg,
    twitch: async () => (await a(async () => {
        const {
            twitchSvg: t
        } = await
        import ("./twitch-W4mprrFD.js");
        return {
            twitchSvg: t
        }
    }, __vite__mapDeps([68, 1]))).twitchSvg,
    twitter: async () => (await a(async () => {
        const {
            xSvg: t
        } = await
        import ("./x-ClT8cHuE.js");
        return {
            xSvg: t
        }
    }, __vite__mapDeps([69, 1]))).xSvg,
    twitterIcon: async () => (await a(async () => {
        const {
            twitterIconSvg: t
        } = await
        import ("./twitterIcon-DhmbuqLR.js");
        return {
            twitterIconSvg: t
        }
    }, __vite__mapDeps([70, 1]))).twitterIconSvg,
    user: async () => (await a(async () => {
        const {
            userSvg: t
        } = await
        import ("./user-jlVSpumx.js");
        return {
            userSvg: t
        }
    }, __vite__mapDeps([71, 1]))).userSvg,
    verify: async () => (await a(async () => {
        const {
            verifySvg: t
        } = await
        import ("./verify-l5wRPogO.js");
        return {
            verifySvg: t
        }
    }, __vite__mapDeps([72, 1]))).verifySvg,
    verifyFilled: async () => (await a(async () => {
        const {
            verifyFilledSvg: t
        } = await
        import ("./verify-filled-DcxavZ8z.js");
        return {
            verifyFilledSvg: t
        }
    }, __vite__mapDeps([73, 1]))).verifyFilledSvg,
    wallet: async () => (await a(async () => {
        const {
            walletSvg: t
        } = await
        import ("./wallet-D7tzkYcj.js");
        return {
            walletSvg: t
        }
    }, __vite__mapDeps([74, 1]))).walletSvg,
    walletConnect: async () => (await a(async () => {
        const {
            walletConnectSvg: t
        } = await
        import ("./walletconnect-DWpcj3cE.js");
        return {
            walletConnectSvg: t
        }
    }, __vite__mapDeps([75, 1]))).walletConnectSvg,
    walletConnectLightBrown: async () => (await a(async () => {
        const {
            walletConnectLightBrownSvg: t
        } = await
        import ("./walletconnect-DWpcj3cE.js");
        return {
            walletConnectLightBrownSvg: t
        }
    }, __vite__mapDeps([75, 1]))).walletConnectLightBrownSvg,
    walletConnectBrown: async () => (await a(async () => {
        const {
            walletConnectBrownSvg: t
        } = await
        import ("./walletconnect-DWpcj3cE.js");
        return {
            walletConnectBrownSvg: t
        }
    }, __vite__mapDeps([75, 1]))).walletConnectBrownSvg,
    walletPlaceholder: async () => (await a(async () => {
        const {
            walletPlaceholderSvg: t
        } = await
        import ("./wallet-placeholder-Bv0pW1sn.js");
        return {
            walletPlaceholderSvg: t
        }
    }, __vite__mapDeps([76, 1]))).walletPlaceholderSvg,
    warningCircle: async () => (await a(async () => {
        const {
            warningCircleSvg: t
        } = await
        import ("./warning-circle-Zht4_byv.js");
        return {
            warningCircleSvg: t
        }
    }, __vite__mapDeps([77, 1]))).warningCircleSvg,
    x: async () => (await a(async () => {
        const {
            xSvg: t
        } = await
        import ("./x-ClT8cHuE.js");
        return {
            xSvg: t
        }
    }, __vite__mapDeps([69, 1]))).xSvg,
    info: async () => (await a(async () => {
        const {
            infoSvg: t
        } = await
        import ("./info-BlE4FgwV.js");
        return {
            infoSvg: t
        }
    }, __vite__mapDeps([78, 1]))).infoSvg,
    exclamationTriangle: async () => (await a(async () => {
        const {
            exclamationTriangleSvg: t
        } = await
        import ("./exclamation-triangle-C-nXn5uK.js");
        return {
            exclamationTriangleSvg: t
        }
    }, __vite__mapDeps([79, 1]))).exclamationTriangleSvg,
    reown: async () => (await a(async () => {
        const {
            reownSvg: t
        } = await
        import ("./reown-logo-CNwwQ6bw.js");
        return {
            reownSvg: t
        }
    }, __vite__mapDeps([80, 1]))).reownSvg,
    "x-mark": async () => (await a(async () => {
        const {
            xMarkSvg: t
        } = await
        import ("./x-mark-BE2L6rX0.js");
        return {
            xMarkSvg: t
        }
    }, __vite__mapDeps([81, 1]))).xMarkSvg
};
async function $(t) {
    if (S.has(t)) return S.get(t);
    const r = (L[t] ? ? L.copy)();
    return S.set(t, r), r
}
let g = class extends R {
    constructor() {
        super(...arguments), this.size = "md", this.name = "copy", this.color = "fg-300", this.aspectRatio = "1 / 1"
    }
    render() {
        return this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `, y `${I($(this.name),y`<div class="fallback"></div>`)}`
    }
};
g.styles = [T, O, x];
d([s()], g.prototype, "size", void 0);
d([s()], g.prototype, "name", void 0);
d([s()], g.prototype, "color", void 0);
d([s()], g.prototype, "aspectRatio", void 0);
g = d([P("wui-icon")], g);
const C = E `
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
var m = function(t, i, r, o) {
    var n = arguments.length,
        e = n < 3 ? i : o === null ? o = Object.getOwnPropertyDescriptor(i, r) : o,
        c;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") e = Reflect.decorate(t, i, r, o);
    else
        for (var l = t.length - 1; l >= 0; l--)(c = t[l]) && (e = (n < 3 ? c(e) : n > 3 ? c(i, r, e) : c(i, r)) || e);
    return n > 3 && e && Object.defineProperty(i, r, e), e
};
let v = class extends R {
    constructor() {
        super(...arguments), this.variant = "paragraph-500", this.color = "fg-300", this.align = "left", this.lineClamp = void 0
    }
    render() {
        const i = {
            [`wui-font-${this.variant}`]: !0,
            [`wui-color-${this.color}`]: !0,
            [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp
        };
        return this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `, y `<slot class=${D(i)}></slot>`
    }
};
v.styles = [T, C];
m([s()], v.prototype, "variant", void 0);
m([s()], v.prototype, "color", void 0);
m([s()], v.prototype, "align", void 0);
m([s()], v.prototype, "lineClamp", void 0);
v = m([P("wui-text")], v);
const z = E `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var u = function(t, i, r, o) {
    var n = arguments.length,
        e = n < 3 ? i : o === null ? o = Object.getOwnPropertyDescriptor(i, r) : o,
        c;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") e = Reflect.decorate(t, i, r, o);
    else
        for (var l = t.length - 1; l >= 0; l--)(c = t[l]) && (e = (n < 3 ? c(e) : n > 3 ? c(i, r, e) : c(i, r)) || e);
    return n > 3 && e && Object.defineProperty(i, r, e), e
};
let _ = class extends R {
    render() {
        return this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `, y `<slot></slot>`
    }
};
_.styles = [T, z];
u([s()], _.prototype, "flexDirection", void 0);
u([s()], _.prototype, "flexWrap", void 0);
u([s()], _.prototype, "flexBasis", void 0);
u([s()], _.prototype, "flexGrow", void 0);
u([s()], _.prototype, "flexShrink", void 0);
u([s()], _.prototype, "alignItems", void 0);
u([s()], _.prototype, "justifyContent", void 0);
u([s()], _.prototype, "columnGap", void 0);
u([s()], _.prototype, "rowGap", void 0);
u([s()], _.prototype, "gap", void 0);
u([s()], _.prototype, "padding", void 0);
u([s()], _.prototype, "margin", void 0);
_ = u([P("wui-flex")], _);
export {
    w as U, P as c
};