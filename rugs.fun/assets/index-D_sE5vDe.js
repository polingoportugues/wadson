var x, a;

function c() {
    return a || (a = 1, x = function(f) {
        for (var u = [], s = f.length, e = 0; e < s; e++) {
            var r = f.charCodeAt(e);
            if (r >= 55296 && r <= 56319 && s > e + 1) {
                var h = f.charCodeAt(e + 1);
                h >= 56320 && h <= 57343 && (r = (r - 55296) * 1024 + h - 56320 + 65536, e += 1)
            }
            if (r < 128) {
                u.push(r);
                continue
            }
            if (r < 2048) {
                u.push(r >> 6 | 192), u.push(r & 63 | 128);
                continue
            }
            if (r < 55296 || r >= 57344 && r < 65536) {
                u.push(r >> 12 | 224), u.push(r >> 6 & 63 | 128), u.push(r & 63 | 128);
                continue
            }
            if (r >= 65536 && r <= 1114111) {
                u.push(r >> 18 | 240), u.push(r >> 12 & 63 | 128), u.push(r >> 6 & 63 | 128), u.push(r & 63 | 128);
                continue
            }
            u.push(239, 191, 189)
        }
        return new Uint8Array(u).buffer
    }), x
}
export {
    c as r
};