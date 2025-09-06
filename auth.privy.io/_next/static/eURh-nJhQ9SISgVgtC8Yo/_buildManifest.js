self.__BUILD_MANIFEST = function(s, a, i, t, e, p, c, d, n, u, o, r, h, l, f, b, k, _, m, j, g, v, w, y, z, I, q, B, F, x, A, N, D, S, E, L, M, T, U, C, H, R, P, G, J, K, O, Q, V, W, X, Y, Z, $, ss, sa, si, st, se) {
    return {
        __rewrites: {
            afterFiles: [{
                has: k,
                source: "/v1/users",
                destination: "/api/v1/users"
            }, {
                has: k,
                source: "/v1/users/:id",
                destination: "/api/v1/users/:id"
            }, {
                has: k,
                source: "/v1/users/:id/custom_metadata",
                destination: "/api/v1/users/:id/custom_metadata"
            }, {
                has: k,
                source: "/v1/users/:id/accounts",
                destination: "/api/v1/users/:id/accounts"
            }, {
                has: k,
                source: "/v1/users/:id/accounts/unlink",
                destination: "/api/v1/users/:id/accounts/unlink"
            }, {
                has: k,
                source: J,
                destination: K
            }, {
                has: k,
                source: "/v1/wallets",
                destination: "/api/v1/wallets"
            }, {
                has: k,
                source: "/v1/wallets/:id",
                destination: "/api/v1/wallets/:id"
            }, {
                has: k,
                source: "/v1/wallets/:id/rpc",
                destination: "/api/v1/wallets/:id/rpc"
            }, {
                has: k,
                source: "/v1/wallets/:id/export",
                destination: "/api/v1/wallets/:id/export"
            }, {
                has: k,
                source: "/v1/wallets/:id/raw_sign",
                destination: "/api/v1/wallets/:id/raw_sign"
            }, {
                has: k,
                source: "/v1/wallets/:id/balance",
                destination: "/api/v1/wallets/:id/balance"
            }, {
                has: k,
                source: "/v1/wallets/:id/transactions",
                destination: "/api/v1/wallets/:id/transactions"
            }, {
                has: k,
                source: "/v1/wallets/authenticate",
                destination: "/api/v1/wallets/authenticate"
            }, {
                has: k,
                source: "/v1/wallets/import/init",
                destination: "/api/v1/wallets/import/init"
            }, {
                has: k,
                source: "/v1/wallets/import/submit",
                destination: "/api/v1/wallets/import/submit"
            }, {
                has: k,
                source: "/v1/policies",
                destination: "/api/v1/policies"
            }, {
                has: k,
                source: "/v1/policies/:id",
                destination: "/api/v1/policies/:id"
            }, {
                has: k,
                source: "/v1/policies/:id/rules",
                destination: "/api/v1/policies/:id/rules"
            }, {
                has: k,
                source: "/v1/policies/:id/rules/:rule_id",
                destination: "/api/v1/policies/:id/rules/:rule_id"
            }, {
                has: k,
                source: "/v1/transactions/:id",
                destination: "/api/v1/transactions/:id"
            }, {
                has: k,
                source: "/v1/openapi.json",
                destination: "/api/v1/openapi.json"
            }, {
                has: k,
                source: "/v1/key_quorums",
                destination: "/api/v1/key_quorums"
            }, {
                has: k,
                source: "/v1/key_quorums/:id",
                destination: "/api/v1/key_quorums/:id"
            }, {
                has: k,
                source: "/v1/wallets_with_recovery",
                destination: "/api/v1/wallets_with_recovery"
            }, {
                has: k,
                source: "/v1/user_signers/authenticate",
                destination: "/api/v1/user_signers/authenticate"
            }, {
                has: k,
                source: J,
                destination: K
            }, {
                has: k,
                source: "/v1/users/:id/fiat/offramp",
                destination: "/api/v1/users/:id/fiat/offramp"
            }, {
                has: k,
                source: "/v1/users/:id/fiat/accounts",
                destination: "/api/v1/users/:id/fiat/accounts"
            }, {
                has: k,
                source: "/v1/users/:id/fiat/tos",
                destination: "/api/v1/users/:id/fiat/tos"
            }, {
                has: k,
                source: "/v1/users/:id/fiat/kyc",
                destination: "/api/v1/users/:id/fiat/kyc"
            }, {
                has: k,
                source: "/v1/users/:id/fiat/status",
                destination: "/api/v1/users/:id/fiat/status"
            }, {
                has: k,
                source: "/v1/users/custom_auth/id",
                destination: "/api/v1/users/custom_auth/id"
            }, {
                has: k,
                source: "/v1/users/email/address",
                destination: "/api/v1/users/email/address"
            }, {
                has: k,
                source: "/v1/users/wallet/address",
                destination: "/api/v1/users/wallet/address"
            }, {
                has: k,
                source: "/v1/apps/:id/fiat",
                destination: "/api/v1/apps/:id/fiat"
            }, {
                has: k,
                source: "/v1/users/:id/fiat/kyc_link",
                destination: "/api/v1/users/:id/fiat/kyc_link"
            }, {
                has: k,
                source: "/v1/apps/:id/users/wallet",
                destination: "/api/v1/apps/:id/users/wallet"
            }, {
                has: k,
                source: "/v1/users/:id/wallets",
                destination: "/api/v1/users/:id/wallets"
            }, {
                has: k,
                source: "/v1/apps/:id/users/import",
                destination: "/api/v1/apps/:id/users/import"
            }, {
                has: k,
                source: "/v1/users/import",
                destination: "/api/v1/users/import"
            }],
            beforeFiles: [],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: Q,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: E,
            errorRate: 1e-4,
            numBits: E,
            numHashes: Q,
            bitArray: []
        },
        "/": [i, s, a, t, e, p, d, n, u, o, r, v, y, c, h, "static/chunks/pages/index-de90a1a6e90ee56e.js"],
        "/404": [i, s, a, t, e, p, d, n, u, o, l, f, b, _, c, h, m, "static/chunks/pages/404-5e0611753276517e.js"],
        "/_error": ["static/chunks/pages/_error-3830db964f086a10.js"],
        "/account": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, z, F, L, V, "static/chunks/5166-fd9a6ffc2c5b7a25.js", c, h, m, g, W, "static/chunks/pages/account-083ea861d54a1614.js"],
        "/admin/app-feature-flags": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/app-feature-flags-7194bd5f61a64bc9.js"],
        "/admin/billing": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, "static/chunks/2448-58b24fc7bf5401f2.js", c, h, m, g, "static/chunks/pages/admin/billing-bb51de1a4169443e.js"],
        "/admin/captcha": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, y, c, h, m, g, "static/chunks/pages/admin/captcha-20094a99b874f5be.js"],
        "/admin/create-privy-oauth-provider-configuration": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/create-privy-oauth-provider-configuration-a6cad034db630465.js"],
        "/admin/cross-app": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, w, c, h, m, g, "static/chunks/pages/admin/cross-app-92c42bdde8597beb.js"],
        "/admin/delete-mfa": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/delete-mfa-2f9a240dbc8b1d7a.js"],
        "/admin/feature-requests": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, w, c, h, m, g, "static/chunks/pages/admin/feature-requests-64c791ab825370c7.js"],
        "/admin/ofac": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/ofac-a931405f613823fd.js"],
        "/admin/passkeys": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, y, c, h, m, g, "static/chunks/pages/admin/passkeys-d71079b06324b312.js"],
        "/admin/privy-home-status": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/privy-home-status-00aa2c6d95423c95.js"],
        "/admin/sms": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, c, h, m, "static/chunks/pages/admin/sms-47546c6ba7b4ff8a.js"],
        "/admin/sms-allowlist": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/sms-allowlist-47a0767af1c5e743.js"],
        "/admin/telegram": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/admin/telegram-9ca713b4ed01b5d8.js"],
        "/admin/twilio-config": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, c, h, m, g, "static/chunks/pages/admin/twilio-config-f3fc6118863e5d6e.js"],
        "/admin/unified-wallets": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, y, c, h, m, g, "static/chunks/pages/admin/unified-wallets-c7372cb3a657d7ed.js"],
        "/admin/unity-editor-oauth": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, y, c, h, m, g, "static/chunks/pages/admin/unity-editor-oauth-d3921cec6b89e5f6.js"],
        "/admin/vercel": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, "static/chunks/pages/admin/vercel-8c0a2a3bc57cba62.js"],
        "/apps": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, "static/chunks/pages/apps-91c0d7038cf91b36.js"],
        "/apps/[app_id]": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, c, h, m, g, "static/chunks/pages/apps/[app_id]-c0ae3fc6b33398f2.js"],
        "/apps/[app_id]/access-control": ["static/chunks/pages/apps/[app_id]/access-control-fcb2f06c3265b407.js"],
        "/apps/[app_id]/api-keys": ["static/chunks/pages/apps/[app_id]/api-keys-068e89bd09a5a17e.js"],
        "/apps/[app_id]/app-client/[app_client_id]": [i, M, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, x, c, h, m, g, X, "static/chunks/pages/apps/[app_id]/app-client/[app_client_id]-5f987dcbb2dfd894.js"],
        "/apps/[app_id]/authorization-keys": [i, q, T, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, z, B, A, U, c, h, m, g, P, "static/chunks/pages/apps/[app_id]/authorization-keys-979a4ec4d8bd88d5.js"],
        "/apps/[app_id]/branding": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, I, c, h, m, g, Y, "static/chunks/pages/apps/[app_id]/branding-189adde679b67989.js"],
        "/apps/[app_id]/configuration": ["static/chunks/pages/apps/[app_id]/configuration-5819b78e530e5848.js"],
        "/apps/[app_id]/domains": ["static/chunks/pages/apps/[app_id]/domains-371a582010b07337.js"],
        "/apps/[app_id]/ecosystem": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, I, c, h, m, g, "static/chunks/pages/apps/[app_id]/ecosystem-a93fb7f40e3f7be3.js"],
        "/apps/[app_id]/embedded": ["static/chunks/pages/apps/[app_id]/embedded-3973cea8b639e230.js"],
        "/apps/[app_id]/embedded-wallets": [q, T, M, s, e, w, B, A, U, C, G, Z, "static/chunks/8420-3e6d79e91430877e.js", $, "static/chunks/pages/apps/[app_id]/embedded-wallets-83cbbb75442a7ae0.js"],
        "/apps/[app_id]/embedded-wallets/export": [q, T, s, e, w, B, A, U, C, G, Z, $, "static/chunks/pages/apps/[app_id]/embedded-wallets/export-e18e502ba238d6d2.js"],
        "/apps/[app_id]/funding": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, z, I, x, c, h, m, g, "static/chunks/pages/apps/[app_id]/funding-44961cc3d481c626.js"],
        "/apps/[app_id]/gas_sponsorship": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, z, F, c, h, m, g, "static/chunks/pages/apps/[app_id]/gas_sponsorship-8854e8720e0e5374.js"],
        "/apps/[app_id]/global-wallets": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, y, c, h, m, g, Y, "static/chunks/pages/apps/[app_id]/global-wallets-8fd8d78fc816c541.js"],
        "/apps/[app_id]/integrations": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, I, F, c, h, m, g, "static/chunks/pages/apps/[app_id]/integrations-7f64fb7e5dbf8602.js"],
        "/apps/[app_id]/login-methods": [i, q, T, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, I, B, x, U, c, h, m, g, ss, "static/chunks/pages/apps/[app_id]/login-methods-e12baf859cd60316.js"],
        "/apps/[app_id]/logins": ["static/chunks/pages/apps/[app_id]/logins-f8ca5130a7da6360.js"],
        "/apps/[app_id]/plugins": ["static/chunks/pages/apps/[app_id]/plugins-adecb1f8b305df97.js"],
        "/apps/[app_id]/policies": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, z, c, h, m, g, P, "static/chunks/pages/apps/[app_id]/policies-e19f3572cb710ac1.js"],
        "/apps/[app_id]/policies/[policy_id]": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, I, c, h, m, g, "static/chunks/pages/apps/[app_id]/policies/[policy_id]-38fc00f8115d98b7.js"],
        "/apps/[app_id]/policies/[policy_id]/rules/[rule_id]": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, "static/chunks/5854-99f368c6035b1669.js", c, h, m, g, "static/chunks/pages/apps/[app_id]/policies/[policy_id]/rules/[rule_id]-5e01d15d1a2d57db.js"],
        "/apps/[app_id]/settings": [i, M, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, I, x, c, h, m, g, X, "static/chunks/pages/apps/[app_id]/settings-22d33aa1fbc88c02.js"],
        "/apps/[app_id]/smart-wallets": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, x, G, "static/chunks/7256-bd52f9278c4df1ee.js", c, h, m, g, "static/chunks/pages/apps/[app_id]/smart-wallets-8af97eaf37fbaf5f.js"],
        "/apps/[app_id]/third-party-auth": ["static/chunks/pages/apps/[app_id]/third-party-auth-ff28fb4930d70c92.js"],
        "/apps/[app_id]/upgrade-to-prod": [i, M, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, F, "static/chunks/2509-211915881f186048.js", c, h, m, g, "static/chunks/pages/apps/[app_id]/upgrade-to-prod-462e68c8b64e7f8d.js"],
        "/apps/[app_id]/users": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, I, L, "static/chunks/6870-1071e60bf3efebd7.js", c, h, m, g, ss, "static/chunks/pages/apps/[app_id]/users-9b0aedf1db68c2ce.js"],
        "/apps/[app_id]/wallets": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, z, I, L, c, h, m, g, P, "static/chunks/pages/apps/[app_id]/wallets-4edee04f57e574a8.js"],
        "/apps/[app_id]/webhooks": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, F, c, h, m, g, "static/chunks/pages/apps/[app_id]/webhooks-5b3f4bf992b3a4fd.js"],
        "/billing": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, I, F, V, c, h, m, g, "static/chunks/pages/billing-c716dd725c724797.js"],
        "/cross-app/connect": [i, q, s, a, t, e, p, d, B, N, D, A, H, C, sa, c, S, R, si, "static/chunks/pages/cross-app/connect-77985f3fe1898d3a.js"],
        "/cross-app/transact": [i, q, s, a, t, e, p, B, N, D, H, st, c, S, R, se, "static/chunks/pages/cross-app/transact-782099c17875df09.js"],
        "/design": [a, p, d, n, u, f, v, w, y, z, x, "static/chunks/933-f22fa4de0230c6f7.js", "static/chunks/pages/design-7d55e5d495579ee2.js"],
        "/logout": [i, s, a, t, c, "static/chunks/pages/logout-c46174cff736dcd5.js"],
        "/oauth/authorize": [i, q, s, a, t, e, p, d, B, N, D, A, H, C, sa, c, S, R, si, "static/chunks/pages/oauth/authorize-af055a15441034b8.js"],
        "/oauth/transact": [i, q, s, a, t, e, p, B, N, D, H, st, c, S, R, se, "static/chunks/pages/oauth/transact-6109800e367b7a57.js"],
        "/oauth/v2/authorize": [i, s, a, t, e, p, N, D, c, S, "static/chunks/pages/oauth/v2/authorize-c683ba693cfb4b18.js"],
        "/recovery": [i, s, a, t, p, d, u, l, r, b, c, "static/chunks/pages/recovery-25b1b3b4c4b9a620.js"],
        "/team": [i, s, a, t, e, p, d, n, u, o, l, r, f, b, _, j, v, w, y, z, F, L, c, h, m, g, W, "static/chunks/pages/team-a33d5010d2cf5342.js"],
        "/welcome": [i, s, a, t, e, p, d, n, o, r, v, w, "static/chunks/1105-dc198b889184be5f.js", c, h, "static/chunks/pages/welcome-14bf6243a4816d05.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/account", "/admin/app-feature-flags", "/admin/billing", "/admin/captcha", "/admin/create-privy-oauth-provider-configuration", "/admin/cross-app", "/admin/delete-mfa", "/admin/feature-requests", "/admin/ofac", "/admin/passkeys", "/admin/privy-home-status", "/admin/sms", "/admin/sms-allowlist", "/admin/telegram", "/admin/twilio-config", "/admin/unified-wallets", "/admin/unity-editor-oauth", "/admin/vercel", "/apps", "/apps/[app_id]", "/apps/[app_id]/access-control", "/apps/[app_id]/api-keys", "/apps/[app_id]/app-client/[app_client_id]", "/apps/[app_id]/authorization-keys", "/apps/[app_id]/branding", "/apps/[app_id]/configuration", "/apps/[app_id]/domains", "/apps/[app_id]/ecosystem", "/apps/[app_id]/embedded", "/apps/[app_id]/embedded-wallets", "/apps/[app_id]/embedded-wallets/export", "/apps/[app_id]/funding", "/apps/[app_id]/gas_sponsorship", "/apps/[app_id]/global-wallets", "/apps/[app_id]/integrations", "/apps/[app_id]/login-methods", "/apps/[app_id]/logins", "/apps/[app_id]/plugins", "/apps/[app_id]/policies", "/apps/[app_id]/policies/[policy_id]", "/apps/[app_id]/policies/[policy_id]/rules/[rule_id]", "/apps/[app_id]/settings", "/apps/[app_id]/smart-wallets", "/apps/[app_id]/third-party-auth", "/apps/[app_id]/upgrade-to-prod", "/apps/[app_id]/users", "/apps/[app_id]/wallets", "/apps/[app_id]/webhooks", "/billing", "/cross-app/connect", "/cross-app/transact", "/design", "/logout", "/oauth/authorize", "/oauth/transact", "/oauth/v2/authorize", "/recovery", "/team", "/welcome"]
    }
}("static/chunks/741-468ba25199e7d6c5.js", "static/chunks/1957-edeb9a884d7a60f2.js", "static/chunks/06873998-9e4b171cf25dccaa.js", "static/chunks/6985-c355b1656d9dbc07.js", "static/chunks/1040-b58e14cea464eaff.js", "static/chunks/6264-d54b1c6a88c685b6.js", "static/chunks/6707-8c1c9bc554cafef8.js", "static/chunks/711-d6932388d664ec0d.js", "static/chunks/8838-925d5bdba65f3f9b.js", "static/chunks/362-4bbc2f8236731455.js", "static/chunks/7586-37056a0b7b4a0e89.js", "static/chunks/8588-255b16a4bc1b65d4.js", "static/chunks/4292-f277895d0451a7eb.js", "static/chunks/2723-458a3180adf26097.js", "static/chunks/2203-f9e1244c60ed45c9.js", "static/chunks/1978-bc6ad9de12385147.js", void 0, "static/chunks/9949-c9c4caf2c23c5a02.js", "static/chunks/791-49e183d5131d6510.js", "static/chunks/7035-ddfaf3a6b0a0d859.js", "static/chunks/3137-a0e6001fd0017d12.js", "static/chunks/5370-e5ef32e60e24d0be.js", "static/chunks/1078-9e8c424305c55261.js", "static/chunks/2200-f58a267cba22c977.js", "static/chunks/5899-ae3ad0897f7e75b6.js", "static/chunks/3296-c56f7ee1c2776807.js", "static/chunks/0a2f9709-b338b2ddfc4dabad.js", "static/chunks/7353-c346e0b5d85e5368.js", "static/chunks/4382-70ead16c4e215152.js", "static/chunks/392-af561c05759188e1.js", "static/chunks/2181-df982a350789d663.js", "static/chunks/5145-b04a540771958612.js", "static/chunks/8312-ef3f4116b23ae198.js", "static/chunks/3301-98ce96d3fa7fe9fd.js", 0, "static/chunks/8846-e03a492d902e5ee7.js", "static/chunks/8fb34dd5-6b5c92d3fb904a6a.js", "static/chunks/69ea16bc-a23ac76d2985fcca.js", "static/chunks/5327-b41286b9e57a7cc9.js", "static/chunks/8194-33aa3768b64a5812.js", "static/chunks/2673-d59f7a6772e69291.js", "static/chunks/9666-0e44b8c2eb823879.js", "static/chunks/8337-99d9e872397b7200.js", "static/chunks/6871-1ce257674acf42b8.js", "/v1/users/:id/fiat/onramp", "/api/v1/users/:id/fiat/onramp", 1e-4, NaN, "static/chunks/7451-37219100b1333e66.js", "static/chunks/825-e13a33aefbfc3a53.js", "static/chunks/4090-b0127cc77d3feecd.js", "static/chunks/5500-e25f3360225c03c5.js", "static/chunks/267-ffdc74f43ebc4748.js", "static/chunks/8825-18e397390c859ea4.js", "static/chunks/4943-943373d222119277.js", "static/chunks/5686-675acfde7f1b38a1.js", "static/chunks/1422-5b9322210055d33d.js", "static/chunks/8897-a9da37c2a66d38f4.js", "static/chunks/3415-63a0f08177f067c9.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();