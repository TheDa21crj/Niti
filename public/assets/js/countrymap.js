/*Copyright 2010-2021 Simplemaps.com
html5countrymapv4.17 - trial version
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function(t) {
    var e, f, p, a, d, g, x, y, m;
    t.eve =
        ((e = "0.4.2"),
            (f = "hasOwnProperty"),
            (p = /[\.\/]/),
            (a = function() {}),
            (d = function(t, e) {
                return t - e;
            }),
            ((m = function(t, e) {
                t = String(t);
                var r,
                    i = x,
                    n = Array.prototype.slice.call(arguments, 2),
                    s = m.listeners(t),
                    a = 0,
                    o = [],
                    l = {},
                    h = [],
                    u = g;
                g = t;
                for (var c = (x = 0), f = s.length; c < f; c++)
                    "zIndex" in s[c] &&
                    (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
                for (o.sort(d); o[a] < 0;)
                    if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
                for (c = 0; c < f; c++)
                    if ("zIndex" in (r = s[c]))
                        if (r.zIndex == o[a]) {
                            if ((h.push(r.apply(e, n)), x)) break;
                            do {
                                if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
                            } while (r);
                        } else l[r.zIndex] = r;
                else if ((h.push(r.apply(e, n)), x)) break;
                return (x = i), (g = u), h.length ? h : null;
            })._events = y = { n: {} }),
            (m.listeners = function(t) {
                for (
                    var e,
                        r,
                        i,
                        n,
                        s,
                        a,
                        o = t.split(p),
                        l = y,
                        h = [l],
                        u = [],
                        c = 0,
                        f = o.length; c < f; c++
                ) {
                    for (a = [], n = 0, s = h.length; n < s; n++)
                        for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--;)
                            (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
                    h = a;
                }
                return u;
            }),
            (m.on = function(t, e) {
                if (((t = String(t)), "function" != typeof e)) return function() {};
                for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
                    i =
                    ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
                for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
                    if (i.f[n] == e) return a;
                return (
                    i.f.push(e),
                    function(t) {
                        +t == +t && (e.zIndex = +t);
                    }
                );
            }),
            (m.f = function(t) {
                var e = [].slice.call(arguments, 1);
                return function() {
                    m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
                };
            }),
            (m.stop = function() {
                x = 1;
            }),
            (m.nt = function(t) {
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g;
            }),
            (m.nts = function() {
                return g.split(p);
            }),
            (m.off = m.unbind =
                function(t, e) {
                    if (t) {
                        for (
                            var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length; o < l; o++
                        )
                            for (u = 0; u < a.length; u += n.length - 2) {
                                if (((n = [u, 1]), (r = a[u].n), "*" != s[o]))
                                    r[s[o]] && n.push(r[s[o]]);
                                else
                                    for (i in r) r[f](i) && n.push(r[i]);
                                a.splice.apply(a, n);
                            }
                        for (o = 0, l = a.length; o < l; o++)
                            for (r = a[o]; r.n;) {
                                if (e) {
                                    if (r.f) {
                                        for (u = 0, c = r.f.length; u < c; u++)
                                            if (r.f[u] == e) {
                                                r.f.splice(u, 1);
                                                break;
                                            }
                                        r.f.length || delete r.f;
                                    }
                                    for (i in r.n)
                                        if (r.n[f](i) && r.n[i].f) {
                                            for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
                                                if (h[u] == e) {
                                                    h.splice(u, 1);
                                                    break;
                                                }
                                            h.length || delete r.n[i].f;
                                        }
                                } else
                                    for (i in (delete r.f, r.n))
                                        r.n[f](i) && r.n[i].f && delete r.n[i].f;
                                r = r.n;
                            }
                    } else m._events = y = { n: {} };
                }),
            (m.once = function(t, e) {
                var r = function() {
                    return m.unbind(t, r), e.apply(this, arguments);
                };
                return m.on(t, r);
            }),
            (m.version = e),
            (m.toString = function() {
                return "You are running Eve " + e;
            }),
            m);
})(this),
(function(t) {
    !(function(t, N) {
        function j(t) {
            if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
            if (j.is(t, v))
                return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
            var e = Array.prototype.slice.call(arguments, 0);
            if (j.is(e[e.length - 1], "function")) {
                var r = e.pop();
                return i ?
                    r.call(j._engine.create[x](j, e)) :
                    N.on("raphael.DOMload", function() {
                        r.call(j._engine.create[x](j, e));
                    });
            }
            return j._engine.create[x](j, arguments);
        }
        (j.version = "2.1.0"), (j.eve = N);

        function s(t, e) {
            return I(t) - I(e);
        }

        function e(t, e, r, i) {
            return (
                null == i && (i = r), [
                    ["M", t, e],
                    ["m", 0, -i],
                    ["a", r, i, 0, 1, 1, 0, 2 * i],
                    ["a", r, i, 0, 1, 1, 0, -2 * i],
                    ["z"],
                ]
            );
        }
        var i,
            E = /[, ]+/,
            a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
            n = /\{(\d+)\}/g,
            L = "hasOwnProperty",
            d = { doc: document, win: t },
            r = {
                was: Object.prototype[L].call(d.win, "Raphael"),
                is: d.win.Raphael,
            },
            o = function() {
                this.ca = this.customAttributes = {};
            },
            x = "apply",
            M = "concat",
            g =
            "ontouchstart" in d.win ||
            (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
            w = " ",
            P = String,
            z = "split",
            l =
            "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [
                z
            ](w),
            h = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend",
            },
            y = P.prototype.toLowerCase,
            B = Math,
            _ = B.max,
            k = B.min,
            S = B.abs,
            m = B.pow,
            T = B.PI,
            F = "number",
            u = "string",
            v = "array",
            c = Object.prototype.toString,
            f =
            ((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
                /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
            p = { NaN: 1, Infinity: 1, "-Infinity": 1 },
            R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            C = B.round,
            I = parseFloat,
            b = parseInt,
            A = P.prototype.toUpperCase,
            q = (j._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0,
            }),
            D = (j._availableAnimAttrs = {
                blur: F,
                "clip-rect": "csv",
                cx: F,
                cy: F,
                fill: "colour",
                "fill-opacity": F,
                "font-size": F,
                height: F,
                opacity: F,
                path: "path",
                r: F,
                rx: F,
                ry: F,
                stroke: "colour",
                "stroke-opacity": F,
                "stroke-width": F,
                transform: "transform",
                width: F,
                x: F,
                y: F,
            }),
            V =
            /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            O = { hs: 1, rg: 1 },
            Y = /,?([achlmqrstvxz]),?/gi,
            G =
            /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            W =
            /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            X =
            /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            H =
            ((j._radial_gradient =
                /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/), {}),
            U = function(t) {
                return t;
            },
            $ = (j._rectPath = function(t, e, r, i, n) {
                return n ?
                    [
                        ["M", t + n, e],
                        ["l", r - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, i - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - r, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - i],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"],
                    ] :
                    [
                        ["M", t, e],
                        ["l", r, 0],
                        ["l", 0, i],
                        ["l", -r, 0],
                        ["z"]
                    ];
            }),
            Z = (j._getPath = {
                path: function(t) {
                    return t.attr("path");
                },
                circle: function(t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.r);
                },
                ellipse: function(t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.rx, t.ry);
                },
                rect: function(t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height, t.r);
                },
                image: function(t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height);
                },
                text: function(t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height);
                },
                set: function(t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height);
                },
            }),
            Q = (j.mapPath = function(t, e) {
                if (!e) return t;
                for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
                    for (n = 1, s = (a = t[o]).length; n < s; n += 2)
                        (r = e.x(a[n], a[n + 1])),
                        (i = e.y(a[n], a[n + 1])),
                        (a[n] = r),
                        (a[n + 1] = i);
                return t;
            });
        if (
            ((j._g = d),
                (j.type =
                    d.win.SVGAngle ||
                    d.doc.implementation.hasFeature(
                        "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                        "1.1"
                    ) ?
                    "SVG" :
                    "VML"),
                "VML" == j.type)
        ) {
            var J,
                K = d.doc.createElement("div");
            if (
                ((K.innerHTML = '<v:shape adj="1"/>'),
                    ((J = K.firstChild).style.behavior = "url(#default#VML)"), !J || "object" != typeof J.adj)
            )
                return (j.type = "");
            K = null;
        }

        function tt(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e,
                r = new t.constructor();
            for (e in t) t[L](e) && (r[e] = tt(t[e]));
            return r;
        }
        (j.svg = !(j.vml = "VML" == j.type)),
        (j._Paper = o),
        (j.fn = K = o.prototype = j.prototype),
        (j._id = 0),
        (j._oid = 0),
        (j.is = function(t, e) {
            return "finite" == (e = y.call(e)) ?
                !p[L](+t) :
                "array" == e ?
                t instanceof Array :
                ("null" == e && null === t) ||
                (e == typeof t && null !== t) ||
                ("object" == e && t === Object(t)) ||
                ("array" == e && Array.isArray && Array.isArray(t)) ||
                c.call(t).slice(8, -1).toLowerCase() == e;
        }),
        (j.angle = function(t, e, r, i, n, s) {
            if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
            (r = t - r), (i = e - i);
            return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
        }),
        (j.rad = function(t) {
            return ((t % 360) * T) / 180;
        }),
        (j.deg = function(t) {
            return ((180 * t) / T) % 360;
        }),
        (j.snapTo = function(t, e, r) {
            if (((r = j.is(r, "finite") ? r : 10), j.is(t, v))) {
                for (var i = t.length; i--;)
                    if (S(t[i] - e) <= r) return t[i];
            } else {
                var n = e % (t = +t);
                if (n < r) return e - n;
                if (t - r < n) return e - n + t;
            }
            return e;
        });
        j.createUUID = (function(t, e) {
            return function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                    .replace(t, e)
                    .toUpperCase();
            };
        })(/[xy]/g, function(t) {
            var e = (16 * B.random()) | 0;
            return ("x" == t ? e : (3 & e) | 8).toString(16);
        });
        j.setWindow = function(t) {
            N("raphael.setWindow", j, d.win, t),
                (d.win = t),
                (d.doc = d.win.document),
                j._engine.initWin && j._engine.initWin(d.win);
        };

        function et() {
            return "hsb(" + [this.h, this.s, this.b] + ")";
        }

        function rt() {
            return "hsl(" + [this.h, this.s, this.l] + ")";
        }

        function it() {
            return this.hex;
        }

        function nt(t, e, r) {
            var i;
            return (
                null == e &&
                j.is(t, "object") &&
                "r" in t &&
                "g" in t &&
                "b" in t &&
                ((r = t.b), (e = t.g), (t = t.r)),
                null == e &&
                j.is(t, u) &&
                ((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
                (1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)), [t, e, r]
            );
        }

        function st(t, e, r, i) {
            return (
                (r = {
                    r: (t *= 255),
                    g: (e *= 255),
                    b: (r *= 255),
                    hex: j.rgb(t, e, r),
                    toString: it,
                }),
                j.is(i, "finite") && (r.opacity = i),
                r
            );
        }
        var at = function(t) {
            if (j.vml) {
                var r,
                    i = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), (r = e.body);
                } catch (t) {
                    r = createPopup().document.body;
                }
                var n = r.createTextRange();
                at = ot(function(t) {
                    try {
                        r.style.color = P(t).replace(i, "");
                        var e = n.queryCommandValue("ForeColor");
                        return (
                            "#" +
                            (
                                "000000" +
                                (e =
                                    ((255 & e) << 16) |
                                    (65280 & e) |
                                    ((16711680 & e) >>> 16)).toString(16)
                            ).slice(-6)
                        );
                    } catch (t) {
                        return "none";
                    }
                });
            } else {
                var s = d.doc.createElement("i");
                (s.title = "Raphaël Colour Picker"),
                (s.style.display = "none"),
                d.doc.body.appendChild(s),
                    (at = ot(function(t) {
                        return (
                            (s.style.color = t),
                            d.doc.defaultView
                            .getComputedStyle(s, "")
                            .getPropertyValue("color")
                        );
                    }));
            }
            return at(t);
        };

        function ot(n, s, a) {
            function o() {
                var t = Array.prototype.slice.call(arguments, 0),
                    e = t.join("␀"),
                    r = (o.cache = o.cache || {}),
                    i = (o.count = o.count || []);
                return (
                    r[L](e) ?
                    (function(t, e) {
                        for (var r = 0, i = t.length; r < i; r++)
                            if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                    })(i, e) :
                    (1e3 <= i.length && delete r[i.shift()],
                        i.push(e),
                        (r[e] = n[x](s, t))),
                    a ? a(r[e]) : r[e]
                );
            }
            return o;
        }
        (j.color = function(t) {
            var e;
            return (
                j.is(t, "object") && "h" in t && "s" in t && "b" in t ?
                ((e = j.hsb2rgb(t)),
                    (t.r = e.r),
                    (t.g = e.g),
                    (t.b = e.b),
                    (t.hex = e.hex)) :
                j.is(t, "object") && "h" in t && "s" in t && "l" in t ?
                ((e = j.hsl2rgb(t)),
                    (t.r = e.r),
                    (t.g = e.g),
                    (t.b = e.b),
                    (t.hex = e.hex)) :
                (j.is(t, "string") && (t = j.getRGB(t)),
                    j.is(t, "object") && "r" in t && "g" in t && "b" in t ?
                    ((e = j.rgb2hsl(t)),
                        (t.h = e.h),
                        (t.s = e.s),
                        (t.l = e.l),
                        (e = j.rgb2hsb(t)),
                        (t.v = e.b)) :
                    ((t = { hex: "none" }).r =
                        t.g =
                        t.b =
                        t.h =
                        t.s =
                        t.v =
                        t.l = -1)),
                (t.toString = it),
                t
            );
        }),
        (j.hsb2rgb = function(t, e, r, i) {
            var n, s, a;
            return (
                this.is(t, "object") &&
                "h" in t &&
                "s" in t &&
                "b" in t &&
                ((r = t.b), (e = t.s), (i = (t = t.h).o)),
                (s =
                    (a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                (r = e = n = r - a),
                st(
                    (r += [a, s, 0, 0, s, a][(t = ~~t)]),
                    (e += [s, a, a, s, 0, 0][t]),
                    (n += [0, 0, s, a, a, s][t]),
                    i
                )
            );
        }),
        (j.hsl2rgb = function(t, e, r, i) {
            var n, s, a;
            return (
                this.is(t, "object") &&
                "h" in t &&
                "s" in t &&
                "l" in t &&
                ((r = t.l), (e = t.s), (t = t.h)),
                (1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
                (s =
                    (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
                    (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                (r = e = n = r - a / 2),
                st(
                    (r += [a, s, 0, 0, s, a][(t = ~~t)]),
                    (e += [s, a, a, s, 0, 0][t]),
                    (n += [0, 0, s, a, a, s][t]),
                    i
                )
            );
        }),
        (j.rgb2hsb = function(t, e, r) {
            var i, n;
            return (
                (t = (r = nt(t, e, r))[0]),
                (e = r[1]),
                (r = r[2]), {
                    h:
                        ((((0 == (n = (i = _(t, e, r)) - k(t, e, r)) ?
                                        null :
                                        i == t ?
                                        (e - r) / n :
                                        i == e ?
                                        (r - t) / n + 2 :
                                        (t - e) / n + 4) +
                                    360) %
                                6) *
                            60) /
                        360,
                    s: 0 == n ? 0 : n / i,
                    b: i,
                    toString: et,
                }
            );
        }),
        (j.rgb2hsl = function(t, e, r) {
            var i, n, s;
            return (
                (t = (r = nt(t, e, r))[0]),
                (e = r[1]),
                (r = r[2]),
                (i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2), {
                    h:
                        ((((0 == (s = n - s) ?
                                        null :
                                        n == t ?
                                        (e - r) / s :
                                        n == e ?
                                        (r - t) / s + 2 :
                                        (t - e) / s + 4) +
                                    360) %
                                6) *
                            60) /
                        360,
                    s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
                    l: i,
                    toString: rt,
                }
            );
        }),
        (j._path2string = function() {
            return this.join(",").replace(Y, "$1");
        });
        j._preload = function(t, e) {
            var r = d.doc.createElement("img");
            (r.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
            (r.onload = function() {
                e.call(this), (this.onload = null), d.doc.body.removeChild(this);
            }),
            (r.onerror = function() {
                d.doc.body.removeChild(this);
            }),
            d.doc.body.appendChild(r),
                (r.src = t);
        };

        function lt() {
            return this.hex;
        }

        function ht(t, e) {
            for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
                var s = [
                    { x: +t[i - 2], y: +t[i - 1] },
                    { x: +t[i], y: +t[i + 1] },
                    { x: +t[i + 2], y: +t[i + 3] },
                    { x: +t[i + 4], y: +t[i + 5] },
                ];
                e
                    ?
                    i ?
                    n - 4 == i ?
                    (s[3] = { x: +t[0], y: +t[1] }) :
                    n - 2 == i &&
                    ((s[2] = { x: +t[0], y: +t[1] }),
                        (s[3] = { x: +t[2], y: +t[3] })) :
                    (s[0] = { x: +t[n - 2], y: +t[n - 1] }) :
                    n - 4 == i ?
                    (s[3] = s[2]) :
                    i || (s[0] = { x: +t[i], y: +t[i + 1] }),
                    r.push([
                        "C",
                        (-s[0].x + 6 * s[1].x + s[2].x) / 6,
                        (-s[0].y + 6 * s[1].y + s[2].y) / 6,
                        (s[1].x + 6 * s[2].x - s[3].x) / 6,
                        (s[1].y + 6 * s[2].y - s[3].y) / 6,
                        s[2].x,
                        s[2].y,
                    ]);
            }
            return r;
        }
        (j.getRGB = ot(function(t) {
            if (!t || (t = P(t)).indexOf("-") + 1)
                return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
            if ("none" == t)
                return { r: -1, g: -1, b: -1, hex: "none", toString: lt };
            O[L](t.toLowerCase().substring(0, 2)) ||
                "#" == t.charAt() ||
                (t = at(t));
            var e,
                r,
                i,
                n,
                s,
                a = t.match(f);
            return a ?
                (a[2] &&
                    ((i = b(a[2].substring(5), 16)),
                        (r = b(a[2].substring(3, 5), 16)),
                        (e = b(a[2].substring(1, 3), 16))),
                    a[3] &&
                    ((i = b((t = a[3].charAt(3)) + t, 16)),
                        (r = b((t = a[3].charAt(2)) + t, 16)),
                        (e = b((t = a[3].charAt(1)) + t, 16))),
                    a[4] &&
                    ((s = a[4][z](V)),
                        (e = I(s[0])),
                        "%" == s[0].slice(-1) && (e *= 2.55),
                        (r = I(s[1])),
                        "%" == s[1].slice(-1) && (r *= 2.55),
                        (i = I(s[2])),
                        "%" == s[2].slice(-1) && (i *= 2.55),
                        "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                        s[3] && "%" == s[3].slice(-1) && (n /= 100)),
                    a[5] ?
                    ((s = a[5][z](V)),
                        (e = I(s[0])),
                        "%" == s[0].slice(-1) && (e *= 2.55),
                        (r = I(s[1])),
                        "%" == s[1].slice(-1) && (r *= 2.55),
                        (i = I(s[2])),
                        "%" == s[2].slice(-1) && (i *= 2.55),
                        ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                        (e /= 360),
                        "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                        s[3] && "%" == s[3].slice(-1) && (n /= 100),
                        j.hsb2rgb(e, r, i, n)) :
                    a[6] ?
                    ((s = a[6][z](V)),
                        (e = I(s[0])),
                        "%" == s[0].slice(-1) && (e *= 2.55),
                        (r = I(s[1])),
                        "%" == s[1].slice(-1) && (r *= 2.55),
                        (i = I(s[2])),
                        "%" == s[2].slice(-1) && (i *= 2.55),
                        ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                        (e /= 360),
                        "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                        s[3] && "%" == s[3].slice(-1) && (n /= 100),
                        j.hsl2rgb(e, r, i, n)) :
                    (((a = { r: e, g: r, b: i, toString: lt }).hex =
                            "#" +
                            (16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
                        j.is(n, "finite") && (a.opacity = n),
                        a)) :
                { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
        }, j)),
        (j.hsb = ot(function(t, e, r) {
            return j.hsb2rgb(t, e, r).hex;
        })),
        (j.hsl = ot(function(t, e, r) {
            return j.hsl2rgb(t, e, r).hex;
        })),
        (j.rgb = ot(function(t, e, r) {
            return (
                "#" + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
            );
        })),
        (j.getColor = function(t) {
            var e = (this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || 0.75,
                }),
                t = this.hsb2rgb(e.h, e.s, e.b);
            return (
                (e.h += 0.075),
                1 < e.h &&
                ((e.h = 0),
                    (e.s -= 0.2),
                    e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
                t.hex
            );
        }),
        (j.getColor.reset = function() {
            delete this.start;
        }),
        (j.parsePathString = function(t) {
            if (!t) return null;
            var e = ut(t);
            if (e.arr) return bt(e.arr);
            var s = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0,
                },
                a = [];
            return (
                j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
                a.length ||
                P(t).replace(G, function(t, e, r) {
                    var i = [],
                        n = e.toLowerCase();
                    if (
                        (r.replace(X, function(t, e) {
                                e && i.push(+e);
                            }),
                            "m" == n &&
                            2 < i.length &&
                            (a.push([e][M](i.splice(0, 2))),
                                (n = "l"),
                                (e = "m" == e ? "l" : "L")),
                            "r" == n)
                    )
                        a.push([e][M](i));
                    else
                        for (; i.length >= s[n] &&
                            (a.push([e][M](i.splice(0, s[n]))), s[n]);

                        );
                }),
                (a.toString = j._path2string),
                (e.arr = bt(a)),
                a
            );
        }),
        (j.parseTransformString = ot(function(t) {
            if (!t) return null;
            var n = [];
            return (
                j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
                n.length ||
                P(t).replace(W, function(t, e, r) {
                    var i = [];
                    y.call(e);
                    r.replace(X, function(t, e) {
                            e && i.push(+e);
                        }),
                        n.push([e][M](i));
                }),
                (n.toString = j._path2string),
                n
            );
        }));
        var ut = function(e) {
            var r = (ut.ps = ut.ps || {});
            return (
                r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
                setTimeout(function() {
                    for (var t in r)
                        r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
                }),
                r[e]
            );
        };

        function ct(t, e, r, i, n) {
            return (
                t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
                3 * e +
                3 * r
            );
        }

        function ft(t, e, r, i, n, s, a, o, l) {
            null == l && (l = 1);
            for (
                var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
                    u = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                        0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                    ],
                    c = [
                        0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
                        0.1069, 0.1069, 0.0472, 0.0472,
                    ],
                    f = 0,
                    p = 0; p < 12; p++
            ) {
                var d = h * u[p] + h,
                    g = ct(d, t, r, n, a),
                    d = ct(d, e, i, s, o),
                    d = g * g + d * d;
                f += c[p] * B.sqrt(d);
            }
            return h * f;
        }

        function pt(t, e, r) {
            var i = j.bezierBBox(t),
                n = j.bezierBBox(e);
            if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
            for (
                var i = ft.apply(0, t),
                    n = ft.apply(0, e),
                    s = _(~~(i / 5), 1),
                    a = _(~~(n / 5), 1),
                    o = [],
                    l = [],
                    h = {},
                    u = r ? 0 : [],
                    c = 0; c < s + 1; c++
            ) {
                var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
                o.push({ x: f.x, y: f.y, t: c / s });
            }
            for (c = 0; c < a + 1; c++)
                (f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
                l.push({ x: f.x, y: f.y, t: c / a });
            for (c = 0; c < s; c++)
                for (var p = 0; p < a; p++) {
                    var d = o[c],
                        g = o[c + 1],
                        x = l[p],
                        y = l[p + 1],
                        m = S(g.x - d.x) < 0.001 ? "y" : "x",
                        v = S(y.x - x.x) < 0.001 ? "y" : "x",
                        b = (function(t, e, r, i, n, s, a, o) {
                            if (!(
                                    _(t, r) < k(n, a) ||
                                    k(t, r) > _(n, a) ||
                                    _(e, i) < k(s, o) ||
                                    k(e, i) > _(s, o)
                                )) {
                                var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                                    h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                                    u = (t - r) * (s - o) - (e - i) * (n - a);
                                if (u) {
                                    var c = l / u,
                                        l = h / u,
                                        h = +c.toFixed(2),
                                        u = +l.toFixed(2);
                                    if (!(
                                            h < +k(t, r).toFixed(2) ||
                                            h > +_(t, r).toFixed(2) ||
                                            h < +k(n, a).toFixed(2) ||
                                            h > +_(n, a).toFixed(2) ||
                                            u < +k(e, i).toFixed(2) ||
                                            u > +_(e, i).toFixed(2) ||
                                            u < +k(s, o).toFixed(2) ||
                                            u > +_(s, o).toFixed(2)
                                        ))
                                        return { x: c, y: l };
                                }
                            }
                        })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
                    b &&
                        h[b.x.toFixed(4)] != b.y.toFixed(4) &&
                        ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
                            (d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
                            (x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
                            0 <= d &&
                            d <= 1.001 &&
                            0 <= x &&
                            x <= 1.001 &&
                            (r ?
                                u++
                                :
                                u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
                }
            return u;
        }

        function dt(t, e, r) {
            (t = j._path2curve(t)), (e = j._path2curve(e));
            for (
                var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length; d < g; d++
            ) {
                var x = t[d];
                if ("M" == x[0])(i = o = x[1]), (n = l = x[2]);
                else {
                    n =
                        "C" == x[0] ?
                        ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7]) :
                        ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
                    for (var y = 0, m = e.length; y < m; y++) {
                        var v = e[y];
                        if ("M" == v[0])(s = h = v[1]), (a = u = v[2]);
                        else {
                            a =
                                "C" == v[0] ?
                                ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7]) :
                                ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                            var b = pt(c, f, r);
                            if (r) p += b;
                            else {
                                for (var _ = 0, w = b.length; _ < w; _++)
                                    (b[_].segment1 = d),
                                    (b[_].segment2 = y),
                                    (b[_].bez1 = c),
                                    (b[_].bez2 = f);
                                p = p.concat(b);
                            }
                        }
                    }
                }
            }
            return p;
        }
        (j.findDotsAtSegment = function(t, e, r, i, n, s, a, o, l) {
            var h = 1 - l,
                u = m(h, 3),
                c = m(h, 2),
                f = l * l,
                p = f * l,
                d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
                g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
                u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
                p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
                f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
                r = h * t + l * r,
                i = h * e + l * i,
                a = h * n + l * a,
                l = h * s + l * o,
                o = 90 - (180 * B.atan2(u - p, c - f)) / T;
            return (
                (p < u || c < f) && (o += 180), {
                    x: d,
                    y: g,
                    m: { x: u, y: c },
                    n: { x: p, y: f },
                    start: { x: r, y: i },
                    end: { x: a, y: l },
                    alpha: o,
                }
            );
        }),
        (j.bezierBBox = function(t, e, r, i, n, s, a, o) {
            j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
            t = kt.apply(null, t);
            return {
                x: t.min.x,
                y: t.min.y,
                x2: t.max.x,
                y2: t.max.y,
                width: t.max.x - t.min.x,
                height: t.max.y - t.min.y,
            };
        }),
        (j.isPointInsideBBox = function(t, e, r) {
            return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
        }),
        (j.isBBoxIntersect = function(t, e) {
            var r = j.isPointInsideBBox;
            return (
                r(e, t.x, t.y) ||
                r(e, t.x2, t.y) ||
                r(e, t.x, t.y2) ||
                r(e, t.x2, t.y2) ||
                r(t, e.x, e.y) ||
                r(t, e.x2, e.y) ||
                r(t, e.x, e.y2) ||
                r(t, e.x2, e.y2) ||
                (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                    ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
            );
        }),
        (j.pathIntersection = function(t, e) {
            return dt(t, e);
        }),
        (j.pathIntersectionNumber = function(t, e) {
            return dt(t, e, 1);
        }),
        (j.isPointInsidePath = function(t, e, r) {
            var i = j.pathBBox(t);
            return (
                j.isPointInsideBBox(i, e, r) &&
                dt(
                    t, [
                        ["M", e, r],
                        ["H", i.x2 + 10],
                    ],
                    1
                ) %
                2 ==
                1
            );
        }),
        (j._removedFactory = function(t) {
            return function() {
                N(
                    "raphael.log",
                    null,
                    "Raphaël: you are calling to method “" +
                    t +
                    "” of removed object",
                    t
                );
            };
        });

        function gt(t, e, r, i) {
            return [t, e, r, i, r, i];
        }

        function xt(t, e, r, i, n, s) {
            return [
                (1 / 3) * t + (2 / 3) * r,
                (1 / 3) * e + (2 / 3) * i,
                (1 / 3) * n + (2 / 3) * r,
                (1 / 3) * s + (2 / 3) * i,
                n,
                s,
            ];
        }

        function yt(t, e, r, i, n, s, a, o, l) {
            var h = 1 - l;
            return {
                x: m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
                y: m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
            };
        }

        function mt(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ?
                        [e, 1, 1, t[3], t[4]] :
                        3 == t.length ?
                        [e, 1, 1] :
                        [e, 1];
            }
        }
        var vt = (j.pathBBox = function(t) {
                var e = ut(t);
                if (e.bbox) return tt(e.bbox);
                if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
                for (
                    var r,
                        i,
                        n = 0,
                        s = 0,
                        a = [],
                        o = [],
                        l = 0,
                        h = (t = Ct(t)).length; l < h; l++
                )
                    "M" == (i = t[l])[0] ?
                    ((n = i[1]), (s = i[2]), a.push(n), o.push(s)) :
                    ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                        (a = a[M](r.min.x, r.max.x)),
                        (o = o[M](r.min.y, r.max.y)),
                        (n = i[5]),
                        (s = i[6]));
                var u = k[x](0, a),
                    c = k[x](0, o),
                    f = _[x](0, a),
                    p = _[x](0, o),
                    d = f - u,
                    g = p - c,
                    g = {
                        x: u,
                        y: c,
                        x2: f,
                        y2: p,
                        width: d,
                        height: g,
                        cx: u + d / 2,
                        cy: c + g / 2,
                    };
                return (e.bbox = tt(g)), g;
            }),
            bt = function(t) {
                t = tt(t);
                return (t.toString = j._path2string), t;
            },
            o = (j._pathToRelative = function(t) {
                var e = ut(t);
                if (e.rel) return bt(e.rel);
                (j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
                var r = [],
                    i = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    o = 0;
                "M" == t[0][0] &&
                    ((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(["M", i, n]));
                for (var l = o, h = t.length; l < h; l++) {
                    var u = (r[l] = []),
                        c = t[l];
                    if (c[0] != y.call(c[0]))
                        switch (((u[0] = y.call(c[0])), u[0])) {
                            case "a":
                                (u[1] = c[1]),
                                (u[2] = c[2]),
                                (u[3] = c[3]),
                                (u[4] = c[4]),
                                (u[5] = c[5]),
                                (u[6] = +(c[6] - i).toFixed(3)),
                                (u[7] = +(c[7] - n).toFixed(3));
                                break;
                            case "v":
                                u[1] = +(c[1] - n).toFixed(3);
                                break;
                            case "m":
                                (s = c[1]), (a = c[2]);
                            default:
                                for (var f = 1, p = c.length; f < p; f++)
                                    u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
                        }
                    else {
                        (u = r[l] = []), "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
                        for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
                    }
                    var x = r[l].length;
                    switch (r[l][0]) {
                        case "z":
                            (i = s), (n = a);
                            break;
                        case "h":
                            i += +r[l][x - 1];
                            break;
                        case "v":
                            n += +r[l][x - 1];
                            break;
                        default:
                            (i += +r[l][x - 2]), (n += +r[l][x - 1]);
                    }
                }
                return (r.toString = j._path2string), (e.rel = bt(r)), r;
            }),
            _t = (j._pathToAbsolute = function(t) {
                var e = ut(t);
                if (e.abs) return bt(e.abs);
                if (
                    ((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)), !t || !t.length)
                )
                    return [
                        ["M", 0, 0]
                    ];
                var r = [],
                    i = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    o = 0;
                "M" == t[0][0] &&
                    ((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ["M", i, n]));
                for (
                    var l,
                        h,
                        u =
                        3 == t.length &&
                        "M" == t[0][0] &&
                        "R" == t[1][0].toUpperCase() &&
                        "Z" == t[2][0].toUpperCase(),
                        c = o,
                        f = t.length; c < f; c++
                ) {
                    if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
                        switch (((l[0] = A.call(h[0])), l[0])) {
                            case "A":
                                (l[1] = h[1]),
                                (l[2] = h[2]),
                                (l[3] = h[3]),
                                (l[4] = h[4]),
                                (l[5] = h[5]),
                                (l[6] = +(h[6] + i)),
                                (l[7] = +(h[7] + n));
                                break;
                            case "V":
                                l[1] = +h[1] + n;
                                break;
                            case "H":
                                l[1] = +h[1] + i;
                                break;
                            case "R":
                                for (
                                    var p = [i, n][M](h.slice(1)), d = 2, g = p.length; d < g; d++
                                )
                                    (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                                r.pop(), (r = r[M](ht(p, u)));
                                break;
                            case "M":
                                (s = +h[1] + i), (a = +h[2] + n);
                            default:
                                for (d = 1, g = h.length; d < g; d++)
                                    l[d] = +h[d] + (d % 2 ? i : n);
                        }
                    else if ("R" == h[0])
                        (p = [i, n][M](h.slice(1))),
                        r.pop(),
                        (r = r[M](ht(p, u))),
                        (l = ["R"][M](h.slice(-2)));
                    else
                        for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
                    switch (l[0]) {
                        case "Z":
                            (i = s), (n = a);
                            break;
                        case "H":
                            i = l[1];
                            break;
                        case "V":
                            n = l[1];
                            break;
                        case "M":
                            (s = l[l.length - 2]), (a = l[l.length - 1]);
                        default:
                            (i = l[l.length - 2]), (n = l[l.length - 1]);
                    }
                }
                return (r.toString = j._path2string), (e.abs = bt(r)), r;
            }),
            wt = function(t, e, r, i, n, s, a, o, l, h) {
                var u = (120 * T) / 180,
                    c = (T / 180) * (+n || 0),
                    f = [],
                    p = ot(function(t, e, r) {
                        return {
                            x: t * B.cos(r) - e * B.sin(r),
                            y: t * B.sin(r) + e * B.cos(r),
                        };
                    });
                h
                    ?
                    ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3])) :
                    ((t = (g = p(t, e, -c)).x),
                        (e = g.y),
                        (o = (g = p(o, l, -c)).x),
                        (l = g.y),
                        B.cos((T / 180) * n),
                        B.sin((T / 180) * n),
                        1 <
                        (y =
                            ((x = (t - o) / 2) * x) / (r * r) +
                            ((d = (e - l) / 2) * d) / (i * i)) &&
                        ((r *= y = B.sqrt(y)), (i *= y)),
                        (g = r * r),
                        (y = i * i),
                        (m =
                            ((g =
                                    (s == a ? -1 : 1) *
                                    B.sqrt(
                                        S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x))
                                    )) *
                                r *
                                d) /
                            i +
                            (t + o) / 2),
                        (v = (g * -i * x) / r + (e + l) / 2),
                        (b = B.asin(((e - v) / i).toFixed(9))),
                        (_ = B.asin(((l - v) / i).toFixed(9))),
                        (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
                        (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
                        a && _ < b && (b -= 2 * T), !a && b < _ && (_ -= 2 * T));
                var d,
                    g,
                    x,
                    y = _ - b;
                S(y) > u &&
                    ((d = _),
                        (g = o),
                        (x = l),
                        (_ = b + u * (a && b < _ ? 1 : -1)),
                        (o = m + r * B.cos(_)),
                        (l = v + i * B.sin(_)),
                        (f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
                    (y = _ - b);
                var m = B.cos(b),
                    v = B.sin(b),
                    b = B.cos(_),
                    _ = B.sin(_),
                    y = B.tan(y / 4),
                    r = (4 / 3) * r * y,
                    i = (4 / 3) * i * y,
                    y = [t, e],
                    m = [t + r * v, e - i * m],
                    b = [o + r * _, l - i * b],
                    l = [o, l];
                if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
                    return [m, b, l][M](f);
                for (
                    var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length; k < C; k++
                )
                    w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
                return w;
            },
            kt = ot(function(t, e, r, i, n, s, a, o) {
                var l,
                    h = n - 2 * r + t - (a - 2 * n + r),
                    u = 2 * (r - t) - 2 * (n - r),
                    c = t - r,
                    f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
                    p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
                    d = [e, o],
                    g = [t, a];
                return (
                    "1e12" < S(f) && (f = 0.5),
                    "1e12" < S(p) && (p = 0.5),
                    0 < f &&
                    f < 1 &&
                    ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
                    0 < p &&
                    p < 1 &&
                    ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
                    (h = s - 2 * i + e - (o - 2 * s + i)),
                    (c = e - i),
                    (f =
                        (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
                        2 /
                        h),
                    (p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
                    "1e12" < S(f) && (f = 0.5),
                    "1e12" < S(p) && (p = 0.5),
                    0 < f &&
                    f < 1 &&
                    ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
                    0 < p &&
                    p < 1 &&
                    ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)), {
                        min: { x: k[x](0, g), y: k[x](0, d) },
                        max: { x: _[x](0, g), y: _[x](0, d) },
                    }
                );
            }),
            Ct = (j._path2curve = ot(
                function(t, e) {
                    var r = !e && ut(t);
                    if (!e && r.curve) return bt(r.curve);

                    function i(t, e, r) {
                        var i, n;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
                            case "M":
                                (e.X = t[1]), (e.Y = t[2]);
                                break;
                            case "A":
                                t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                                break;
                            case "S":
                                (n =
                                    "C" == r || "S" == r ?
                                    ((i = 2 * e.x - e.bx), 2 * e.y - e.by) :
                                    ((i = e.x), e.y)),
                                (t = ["C", i, n][M](t.slice(1)));
                                break;
                            case "T":
                                "Q" == r || "T" == r ?
                                    ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy)) :
                                    ((e.qx = e.x), (e.qy = e.y)),
                                    (t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                                break;
                            case "Q":
                                (e.qx = t[1]),
                                (e.qy = t[2]),
                                (t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
                                break;
                            case "L":
                                t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"][M](gt(e.x, e.y, e.X, e.Y));
                        }
                        return t;
                    }

                    function n(t, e) {
                        if (7 < t[e].length) {
                            t[e].shift();
                            for (var r = t[e]; r.length;)
                                t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                            t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
                        }
                    }

                    function s(t, e, r, i, n) {
                        t &&
                            e &&
                            "M" == t[n][0] &&
                            "M" != e[n][0] &&
                            (e.splice(n, 0, ["M", i.x, i.y]),
                                (r.bx = 0),
                                (r.by = 0),
                                (r.x = t[n][1]),
                                (r.y = t[n][2]),
                                (c = _(a.length, (o && o.length) || 0)));
                    }
                    for (
                        var a = _t(t),
                            o = e && _t(e),
                            l = {
                                x: 0,
                                y: 0,
                                bx: 0,
                                by: 0,
                                X: 0,
                                Y: 0,
                                qx: null,
                                qy: null,
                            },
                            h = {
                                x: 0,
                                y: 0,
                                bx: 0,
                                by: 0,
                                X: 0,
                                Y: 0,
                                qx: null,
                                qy: null,
                            },
                            u = 0,
                            c = _(a.length, (o && o.length) || 0); u < c; u++
                    ) {
                        (a[u] = i(a[u], l)),
                        n(a, u),
                            o && (o[u] = i(o[u], h)),
                            o && n(o, u),
                            s(a, o, l, h, u),
                            s(o, a, h, l, u);
                        var f = a[u],
                            p = o && o[u],
                            d = f.length,
                            g = o && p.length;
                        (l.x = f[d - 2]),
                        (l.y = f[d - 1]),
                        (l.bx = I(f[d - 4]) || l.x),
                        (l.by = I(f[d - 3]) || l.y),
                        (h.bx = o && (I(p[g - 4]) || h.x)),
                        (h.by = o && (I(p[g - 3]) || h.y)),
                        (h.x = o && p[g - 2]),
                        (h.y = o && p[g - 1]);
                    }
                    return o || (r.curve = bt(a)), o ? [a, o] : a;
                },
                null,
                bt
            )),
            Bt =
            ((j._parseDots = ot(function(t) {
                    for (var e = [], r = 0, i = t.length; r < i; r++) {
                        var n = {},
                            s = t[r].match(/^([^:]*):?([\d\.]*)/);
                        if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
                        (n.color = n.color.hex),
                        s[2] && (n.offset = s[2] + "%"),
                            e.push(n);
                    }
                    for (r = 1, i = e.length - 1; r < i; r++)
                        if (!e[r].offset) {
                            for (
                                var a = I(e[r - 1].offset || 0), o = 0, l = r + 1; l < i; l++
                            )
                                if (e[l].offset) {
                                    o = e[l].offset;
                                    break;
                                }
                            o || ((o = 100), (l = i));
                            for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                                (a += h), (e[r].offset = a + "%");
                        }
                    return e;
                })),
                (j._tear = function(t, e) {
                    t == e.top && (e.top = t.prev),
                        t == e.bottom && (e.bottom = t.next),
                        t.next && (t.next.prev = t.prev),
                        t.prev && (t.prev.next = t.next);
                })),
            St =
            ((j._tofront = function(t, e) {
                    e.top !== t &&
                        (Bt(t, e),
                            (t.next = null),
                            (t.prev = e.top),
                            (e.top.next = t),
                            (e.top = t));
                }),
                (j._toback = function(t, e) {
                    e.bottom !== t &&
                        (Bt(t, e),
                            (t.next = e.bottom),
                            (t.prev = null),
                            (e.bottom.prev = t),
                            (e.bottom = t));
                }),
                (j._insertafter = function(t, e, r) {
                    Bt(t, r),
                        e == r.top && (r.top = t),
                        e.next && (e.next.prev = t),
                        (t.next = e.next),
                        ((t.prev = e).next = t);
                }),
                (j._insertbefore = function(t, e, r) {
                    Bt(t, r),
                        e == r.bottom && (r.bottom = t),
                        e.prev && (e.prev.next = t),
                        (t.prev = e.prev),
                        ((e.prev = t).next = e);
                }),
                (j.toMatrix = function(t, e) {
                    var r = vt(t),
                        t = {
                            _: { transform: "" },
                            getBBox: function() {
                                return r;
                            },
                        };
                    return Tt(t, e), t.matrix;
                })),
            Tt =
            ((j.transformPath = function(t, e) {
                    return Q(t, St(t, e));
                }),
                (j._extractTransform = function(t, e) {
                    if (null == e) return t._.transform;
                    e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
                    var r,
                        i = j.parseTransformString(e),
                        n = 0,
                        e = 0,
                        s = 1,
                        a = 1,
                        o = t._,
                        l = new Nt();
                    if (((o.transform = i || []), i))
                        for (var h = 0, u = i.length; h < u; h++) {
                            var c,
                                f,
                                p,
                                d,
                                g,
                                x = i[h],
                                y = x.length,
                                m = P(x[0]).toLowerCase(),
                                v = x[0] != m,
                                b = v ? l.invert() : 0;
                            "t" == m && 3 == y ?
                                v ?
                                ((c = b.x(0, 0)),
                                    (f = b.y(0, 0)),
                                    (p = b.x(x[1], x[2])),
                                    (d = b.y(x[1], x[2])),
                                    l.translate(p - c, d - f)) :
                                l.translate(x[1], x[2]) :
                                "r" == m ?
                                2 == y ?
                                ((g = g || t.getBBox(1)),
                                    l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
                                    (n += x[1])) :
                                4 == y &&
                                (v ?
                                    ((p = b.x(x[2], x[3])),
                                        (d = b.y(x[2], x[3])),
                                        l.rotate(x[1], p, d)) :
                                    l.rotate(x[1], x[2], x[3]),
                                    (n += x[1])) :
                                "s" == m ?
                                2 == y || 3 == y ?
                                ((g = g || t.getBBox(1)),
                                    l.scale(
                                        x[1],
                                        x[y - 1],
                                        g.x + g.width / 2,
                                        g.y + g.height / 2
                                    ),
                                    (s *= x[1]),
                                    (a *= x[y - 1])) :
                                5 == y &&
                                (v ?
                                    ((p = b.x(x[3], x[4])),
                                        (d = b.y(x[3], x[4])),
                                        l.scale(x[1], x[2], p, d)) :
                                    l.scale(x[1], x[2], x[3], x[4]),
                                    (s *= x[1]),
                                    (a *= x[2])) :
                                "m" == m &&
                                7 == y &&
                                l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                                (o.dirtyT = 1),
                                (t.matrix = l);
                        }
                        (t.matrix = l),
                        (o.sx = s),
                        (o.sy = a),
                        (o.deg = n),
                        (o.dx = r = l.e),
                        (o.dy = e = l.f),
                        1 == s && 1 == a && !n && o.bbox ?
                        ((o.bbox.x += +r), (o.bbox.y += +e)) :
                        (o.dirtyT = 1);
                })),
            At = (j._equaliseTransform = function(t, e) {
                (e = P(e).replace(/\.{3}|\u2026/g, t)),
                (t = j.parseTransformString(t) || []),
                (e = j.parseTransformString(e) || []);
                for (
                    var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0; h < a; h++
                ) {
                    if (
                        ((n = t[h] || mt(e[h])),
                            (s = e[h] || mt(n)),
                            n[0] != s[0] ||
                            ("r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
                            ("s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
                    )
                        return;
                    for (
                        o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length); r < i; r++
                    )
                        r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
                }
                return { from: o, to: l };
            });

        function Nt(t, e, r, i, n, s) {
            null != t ?
                ((this.a = +t),
                    (this.b = +e),
                    (this.c = +r),
                    (this.d = +i),
                    (this.e = +n),
                    (this.f = +s)) :
                ((this.a = 1),
                    (this.b = 0),
                    (this.c = 0),
                    (this.d = 1),
                    (this.e = 0),
                    (this.f = 0));
        }
        (j._getContainer = function(t, e, r, i) {
            var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
            if (null != n)
                return n.tagName ?
                    null == e ?
                    {
                        container: n,
                        width: n.style.pixelWidth || n.offsetWidth,
                        height: n.style.pixelHeight || n.offsetHeight,
                    } :
                    { container: n, width: e, height: r } :
                    { container: 1, x: t, y: e, width: r, height: i };
        }),
        (j.pathToRelative = o),
        (j._engine = {}),
        (j.path2curve = Ct),
        (j.matrix = function(t, e, r, i, n, s) {
            return new Nt(t, e, r, i, n, s);
        }),
        (function(t) {
            function i(t) {
                return t[0] * t[0] + t[1] * t[1];
            }

            function n(t) {
                var e = B.sqrt(i(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e);
            }
            (t.add = function(t, e, r, i, n, s) {
                var a,
                    o,
                    l,
                    h,
                    u = [
                        [],
                        [],
                        []
                    ],
                    c = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1],
                    ],
                    f = [
                        [t, r, n],
                        [e, i, s],
                        [0, 0, 1],
                    ];
                for (
                    t &&
                    t instanceof Nt &&
                    (f = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1],
                    ]),
                    a = 0; a < 3; a++
                )
                    for (o = 0; o < 3; o++) {
                        for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                        u[a][o] = h;
                    }
                    (this.a = u[0][0]),
                    (this.b = u[1][0]),
                    (this.c = u[0][1]),
                    (this.d = u[1][1]),
                    (this.e = u[0][2]),
                    (this.f = u[1][2]);
            }),
            (t.invert = function() {
                var t = this,
                    e = t.a * t.d - t.b * t.c;
                return new Nt(
                    t.d / e, -t.b / e, -t.c / e,
                    t.a / e,
                    (t.c * t.f - t.d * t.e) / e,
                    (t.b * t.e - t.a * t.f) / e
                );
            }),
            (t.clone = function() {
                return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.translate = function(t, e) {
                this.add(1, 0, 0, 1, t, e);
            }),
            (t.scale = function(t, e, r, i) {
                null == e && (e = t),
                    (r || i) && this.add(1, 0, 0, 1, r, i),
                    this.add(t, 0, 0, e, 0, 0),
                    (r || i) && this.add(1, 0, 0, 1, -r, -i);
            }),
            (t.rotate = function(t, e, r) {
                (t = j.rad(t)), (e = e || 0), (r = r || 0);
                var i = +B.cos(t).toFixed(9),
                    t = +B.sin(t).toFixed(9);
                this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
            }),
            (t.x = function(t, e) {
                return t * this.a + e * this.c + this.e;
            }),
            (t.y = function(t, e) {
                return t * this.b + e * this.d + this.f;
            }),
            (t.get = function(t) {
                return +this[P.fromCharCode(97 + t)].toFixed(4);
            }),
            (t.toString = function() {
                return j.svg ?
                    "matrix(" + [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                    ].join() +
                    ")" :
                    [
                        this.get(0),
                        this.get(2),
                        this.get(1),
                        this.get(3),
                        0,
                        0,
                    ].join();
            }),
            (t.toFilter = function() {
                return (
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    this.get(0) +
                    ", M12=" +
                    this.get(2) +
                    ", M21=" +
                    this.get(1) +
                    ", M22=" +
                    this.get(3) +
                    ", Dx=" +
                    this.get(4) +
                    ", Dy=" +
                    this.get(5) +
                    ", sizingmethod='auto expand')"
                );
            }),
            (t.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (t.split = function() {
                var t = {};
                (t.dx = this.e), (t.dy = this.f);
                var e = [
                    [this.a, this.c],
                    [this.b, this.d],
                ];
                (t.scalex = B.sqrt(i(e[0]))),
                n(e[0]),
                    (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                    (e[1] = [
                        e[1][0] - e[0][0] * t.shear,
                        e[1][1] - e[0][1] * t.shear,
                    ]),
                    (t.scaley = B.sqrt(i(e[1]))),
                    n(e[1]),
                    (t.shear /= t.scaley);
                var r = -e[0][1],
                    e = e[1][1];
                return (
                    e < 0 ?
                    ((t.rotate = j.deg(B.acos(e))),
                        r < 0 && (t.rotate = 360 - t.rotate)) :
                    (t.rotate = j.deg(B.asin(r))),
                    (t.isSimple = !(+t.shear.toFixed(9) ||
                        (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                    )),
                    (t.isSuperSimple = !+t.shear.toFixed(9) &&
                        t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                        !t.rotate),
                    (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                    t
                );
            }),
            (t.toTransformString = function(t) {
                t = t || this[z]();
                return t.isSimple ?
                    ((t.scalex = +t.scalex.toFixed(4)),
                        (t.scaley = +t.scaley.toFixed(4)),
                        (t.rotate = +t.rotate.toFixed(4)),
                        (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") +
                        (1 != t.scalex || 1 != t.scaley ?
                            "s" + [t.scalex, t.scaley, 0, 0] :
                            "") +
                        (t.rotate ? "r" + [t.rotate, 0, 0] : "")) :
                    "m" + [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                    ];
            });
        })(Nt.prototype);
        o =
            navigator.userAgent.match(/Version\/(.*?)\s/) ||
            navigator.userAgent.match(/Chrome\/(\d+)/);
        ("Apple Computer, Inc." == navigator.vendor &&
            ((o && o[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
        ("Google Inc." == navigator.vendor && o && o[1] < 8) ?
        (K.safari = function() {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: "none" });
            setTimeout(function() {
                t.remove();
            });
        }) :
        (K.safari = function() {});

        function Et() {
            this.returnValue = !1;
        }

        function Lt() {
            return this.originalEvent.preventDefault();
        }

        function Mt() {
            this.cancelBubble = !0;
        }

        function Pt() {
            return this.originalEvent.stopPropagation();
        }

        function zt(t) {
            var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
            return { x: t.clientX + r, y: t.clientY + e };
        }

        function Ft(t) {
            for (
                var e,
                    r = t.clientX,
                    i = t.clientY,
                    n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    a = It.length; a--;

            ) {
                if (((e = It[a]), g && t.touches)) {
                    for (var o, l = t.touches.length; l--;)
                        if ((o = t.touches[l]).identifier == e.el._drag.id) {
                            (r = o.clientX),
                            (i = o.clientY),
                            (t.originalEvent || t).preventDefault();
                            break;
                        }
                } else t.preventDefault();
                var h,
                    u = e.el.node,
                    c = u.nextSibling,
                    f = u.parentNode,
                    p = u.style.display;
                d.win.opera && f.removeChild(u),
                    (u.style.display = "none"),
                    (h = e.el.paper.getElementByPoint(r, i)),
                    (u.style.display = p),
                    d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
                    h && N("raphael.drag.over." + e.el.id, e.el, h),
                    (r += s),
                    (i += n),
                    N(
                        "raphael.drag.move." + e.el.id,
                        e.move_scope || e.el,
                        r - e.el._drag.x,
                        i - e.el._drag.y,
                        r,
                        i,
                        t
                    );
            }
        }
        for (
            var Rt = d.doc.addEventListener ?

                function(s, t, a, o) {
                    function e(t) {
                        var e = zt(t);
                        return a.call(o, t, e.x, e.y);
                    }
                    return (
                        s.addEventListener(t, e, !1),
                        g &&
                        h[t] &&
                        s.addEventListener(
                            h[t],
                            function(t) {
                                for (
                                    var e = zt(t),
                                        r = t,
                                        i = 0,
                                        n = t.targetTouches && t.targetTouches.length; i < n; i++
                                )
                                    if (t.targetTouches[i].target == s) {
                                        ((t = t.targetTouches[i]).originalEvent = r),
                                        (t.preventDefault = Lt),
                                        (t.stopPropagation = Pt);
                                        break;
                                    }
                                return a.call(o, t, e.x, e.y);
                            }, !1
                        ),
                        function() {
                            return (
                                s.removeEventListener(t, e, !1),
                                g && h[t] && s.removeEventListener(h[t], e, !1), !0
                            );
                        }
                    );
                } :
                d.doc.attachEvent ?

                function(t, e, i, n) {
                    function r(t) {
                        t = t || d.win.event;
                        var e =
                            d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                            r =
                            d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                            r = t.clientX + r,
                            e = t.clientY + e;
                        return (
                            (t.preventDefault = t.preventDefault || Et),
                            (t.stopPropagation = t.stopPropagation || Mt),
                            i.call(n, t, r, e)
                        );
                    }
                    t.attachEvent("on" + e, r);
                    return function() {
                        return t.detachEvent("on" + e, r), !0;
                    };
                } :
                void 0,
                It = [],
                jt = function(t) {
                    j.unmousemove(Ft).unmouseup(jt);
                    for (var e, r = It.length; r--;)
                        ((e = It[r]).el._drag = {}),
                        N(
                            "raphael.drag.end." + e.el.id,
                            e.end_scope || e.start_scope || e.move_scope || e.el,
                            t
                        );
                    It = [];
                },
                qt = (j.el = {}),
                Dt = l.length; Dt--;

        )
            !(function(i) {
                (j[i] = qt[i] =
                    function(t, e) {
                        return (
                            j.is(t, "function") &&
                            ((this.events = this.events || []),
                                this.events.push({
                                    name: i,
                                    f: t,
                                    unbind: Rt(
                                        this.shape || this.node || d.doc,
                                        i,
                                        t,
                                        e || this
                                    ),
                                })),
                            this
                        );
                    }),
                (j["un" + i] = qt["un" + i] =
                    function(t) {
                        for (var e = this.events || [], r = e.length; r--;)
                            e[r].name != i ||
                            (!j.is(t, "undefined") && e[r].f != t) ||
                            (e[r].unbind(),
                                e.splice(r, 1),
                                e.length || delete this.events);
                        return this;
                    });
            })(l[Dt]);
        (qt.data = function(t, e) {
            var r = (H[this.id] = H[this.id] || {});
            if (0 == arguments.length) return r;
            if (1 != arguments.length)
                return (r[t] = e), N("raphael.data.set." + this.id, this, e, t), this;
            if (j.is(t, "object")) {
                for (var i in t) t[L](i) && this.data(i, t[i]);
                return this;
            }
            return N("raphael.data.get." + this.id, this, r[t], t), r[t];
        }),
        (qt.removeData = function(t) {
            return (
                null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
                this
            );
        }),
        (qt.getData = function() {
            return tt(H[this.id] || {});
        }),
        (qt.hover = function(t, e, r, i) {
            return this.mouseover(t, r).mouseout(e, i || r);
        }),
        (qt.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e);
        });
        var Vt = [];
        (qt.drag = function(o, l, h, u, c, f) {
            function t(t) {
                (t.originalEvent || t).preventDefault();
                var e = t.clientX,
                    r = t.clientY,
                    i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                if (((this._drag.id = t.identifier), g && t.touches))
                    for (var s, a = t.touches.length; a--;)
                        if (
                            ((s = t.touches[a]),
                                (this._drag.id = s.identifier),
                                s.identifier == this._drag.id)
                        ) {
                            (e = s.clientX), (r = s.clientY);
                            break;
                        }
                        (this._drag.x = e + n),
                        (this._drag.y = r + i),
                It.length || j.mousemove(Ft).mouseup(jt),
                    It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
                    l && N.on("raphael.drag.start." + this.id, l),
                    o && N.on("raphael.drag.move." + this.id, o),
                    h && N.on("raphael.drag.end." + this.id, h),
                    N(
                        "raphael.drag.start." + this.id,
                        c || u || this,
                        t.clientX + n,
                        t.clientY + i,
                        t
                    );
            }
            return (
                (this._drag = {}),
                Vt.push({ el: this, start: t }),
                this.mousedown(t),
                this
            );
        }),
        (qt.onDragOver = function(t) {
            t
                ?
                N.on("raphael.drag.over." + this.id, t) :
                N.unbind("raphael.drag.over." + this.id);
        }),
        (qt.undrag = function() {
            for (var t = Vt.length; t--;)
                Vt[t].el == this &&
                (this.unmousedown(Vt[t].start),
                    Vt.splice(t, 1),
                    N.unbind("raphael.drag.*." + this.id));
            Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
        }),
        (K.circle = function(t, e, r) {
            r = j._engine.circle(this, t || 0, e || 0, r || 0);
            return this.__set__ && this.__set__.push(r), r;
        }),
        (K.rect = function(t, e, r, i, n) {
            n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
            return this.__set__ && this.__set__.push(n), n;
        }),
        (K.ellipse = function(t, e, r, i) {
            i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
            return this.__set__ && this.__set__.push(i), i;
        }),
        (K.path = function(t) {
            !t || j.is(t, u) || j.is(t[0], v) || (t += "");
            var e = j._engine.path(j.format[x](j, arguments), this);
            return this.__set__ && this.__set__.push(e), e;
        }),
        (K.image = function(t, e, r, i, n) {
            n = j._engine.image(
                this,
                t || "about:blank",
                e || 0,
                r || 0,
                i || 0,
                n || 0
            );
            return this.__set__ && this.__set__.push(n), n;
        }),
        (K.text = function(t, e, r) {
            r = j._engine.text(this, t || 0, e || 0, P(r));
            return this.__set__ && this.__set__.push(r), r;
        }),
        (K.set = function(t) {
            j.is(t, "array") ||
                (t = Array.prototype.splice.call(arguments, 0, arguments.length));
            var e = new re(t);
            return (
                this.__set__ && this.__set__.push(e),
                (e.paper = this),
                (e.type = "set"),
                e
            );
        }),
        (K.setStart = function(t) {
            this.__set__ = t || this.set();
        }),
        (K.setFinish = function(t) {
            var e = this.__set__;
            return delete this.__set__, e;
        }),
        (K.setSize = function(t, e) {
            return j._engine.setSize.call(this, t, e);
        }),
        (K.setViewBox = function(t, e, r, i, n) {
            return j._engine.setViewBox.call(this, t, e, r, i, n);
        }),
        (K.top = K.bottom = null),
        (K.raphael = j);

        function Ot() {
            return this.x + w + this.y + w + this.width + " × " + this.height;
        }
        (K.getElementByPoint = function(t, e) {
            var r,
                i,
                n,
                s,
                a,
                o = this.canvas,
                l = d.doc.elementFromPoint(t, e);
            if (
                (d.win.opera &&
                    "svg" == l.tagName &&
                    ((i = (r = o).getBoundingClientRect()),
                        (n = r.ownerDocument),
                        (s = n.body),
                        (a = n.documentElement),
                        (r = a.clientTop || s.clientTop || 0),
                        (n = a.clientLeft || s.clientLeft || 0),
                        (s = {
                            y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
                            x: i.left +
                                (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                                n,
                        }),
                        ((n = o.createSVGRect()).x = t - s.x),
                        (n.y = e - s.y),
                        (n.width = n.height = 1),
                        (n = o.getIntersectionList(n, null)).length &&
                        (l = n[n.length - 1])), !l)
            )
                return null;
            for (; l.parentNode && l != o.parentNode && !l.raphael;)
                l = l.parentNode;
            return (
                l == this.canvas.parentNode && (l = o),
                (l = l && l.raphael ? this.getById(l.raphaelid) : null)
            );
        }),
        (K.getElementsByBBox = function(e) {
            var r = this.set();
            return (
                this.forEach(function(t) {
                    j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
                }),
                r
            );
        }),
        (K.getById = function(t) {
            for (var e = this.bottom; e;) {
                if (e.id == t) return e;
                e = e.next;
            }
            return null;
        }),
        (K.forEach = function(t, e) {
            for (var r = this.bottom; r;) {
                if (!1 === t.call(e, r)) return this;
                r = r.next;
            }
            return this;
        }),
        (K.getElementsByPoint = function(e, r) {
            var i = this.set();
            return (
                this.forEach(function(t) {
                    t.isPointInside(e, r) && i.push(t);
                }),
                i
            );
        }),
        (qt.isPointInside = function(t, e) {
            var r = (this.realPath = Z[this.type](this));
            return (
                this.attr("transform") &&
                this.attr("transform").length &&
                (r = j.transformPath(r, this.attr("transform"))),
                j.isPointInsidePath(r, t, e)
            );
        }),
        (qt.getBBox = function(t) {
            if (this.removed) return {};
            var e = this._;
            return t ?
                ((!e.dirty && e.bboxwt) ||
                    ((this.realPath = Z[this.type](this)),
                        (e.bboxwt = vt(this.realPath)),
                        (e.bboxwt.toString = Ot),
                        (e.dirty = 0)),
                    e.bboxwt) :
                ((!e.dirty && !e.dirtyT && e.bbox) ||
                    ((!e.dirty && this.realPath) ||
                        ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                        (e.bbox = vt(Q(this.realPath, this.matrix))),
                        (e.bbox.toString = Ot),
                        (e.dirty = e.dirtyT = 0)),
                    e.bbox);
        }),
        (qt.clone = function() {
            if (this.removed) return null;
            var t = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(t), t;
        }),
        (qt.glow = function(t) {
            if ("text" == this.type) return null;
            for (
                var e = {
                        width:
                            ((t = t || {}).width || 10) +
                            (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: t.opacity || 0.5,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000",
                    },
                    r = e.width / 2,
                    i = this.paper,
                    n = i.set(),
                    s = this.realPath || Z[this.type](this),
                    s = this.matrix ? Q(s, this.matrix) : s,
                    a = 1; a < 1 + r; a++
            )
                n.push(
                    i
                    .path(s)
                    .attr({
                        stroke: e.color,
                        fill: e.fill ? e.color : "none",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-width": +((e.width / r) * a).toFixed(3),
                        opacity: +(e.opacity / r).toFixed(3),
                    })
                );
            return n.insertBefore(this).translate(e.offsetx, e.offsety);
        });

        function Yt(t, e, r, i, n, s, a, o, l) {
            return null == l ?
                ft(t, e, r, i, n, s, a, o) :
                j.findDotsAtSegment(
                    t,
                    e,
                    r,
                    i,
                    n,
                    s,
                    a,
                    o,
                    (function(t, e, r, i, n, s, a, o, l) {
                        if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                            for (
                                var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u); 0.01 < S(c - l);

                            )
                                c = ft(
                                    t,
                                    e,
                                    r,
                                    i,
                                    n,
                                    s,
                                    a,
                                    o,
                                    (u += (c < l ? 1 : -1) * (h /= 2))
                                );
                            return u;
                        }
                    })(t, e, r, i, n, s, a, o, l)
                );
        }
        var o = function(p, d) {
                return function(t, e, r) {
                    for (
                        var i,
                            n,
                            s,
                            a,
                            o,
                            l = "",
                            h = {},
                            u = 0,
                            c = 0,
                            f = (t = Ct(t)).length; c < f; c++
                    ) {
                        if ("M" == (s = t[c])[0])(i = +s[1]), (n = +s[2]);
                        else {
                            if (
                                e <
                                u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                            ) {
                                if (d && !h.start) {
                                    if (
                                        ((l += [
                                                "C" +
                                                (o = Yt(
                                                    i,
                                                    n,
                                                    s[1],
                                                    s[2],
                                                    s[3],
                                                    s[4],
                                                    s[5],
                                                    s[6],
                                                    e - u
                                                )).start.x,
                                                o.start.y,
                                                o.m.x,
                                                o.m.y,
                                                o.x,
                                                o.y,
                                            ]),
                                            r)
                                    )
                                        return l;
                                    (h.start = l),
                                    (l = [
                                        "M" + o.x,
                                        o.y + "C" + o.n.x,
                                        o.n.y,
                                        o.end.x,
                                        o.end.y,
                                        s[5],
                                        s[6],
                                    ].join()),
                                    (u += a),
                                    (i = +s[5]),
                                    (n = +s[6]);
                                    continue;
                                }
                                if (!p && !d)
                                    return {
                                        x: (o = Yt(
                                            i,
                                            n,
                                            s[1],
                                            s[2],
                                            s[3],
                                            s[4],
                                            s[5],
                                            s[6],
                                            e - u
                                        )).x,
                                        y: o.y,
                                        alpha: o.alpha,
                                    };
                            }
                            (u += a), (i = +s[5]), (n = +s[6]);
                        }
                        l += s.shift() + s;
                    }
                    return (
                        (h.end = l),
                        (o = p ?
                            u :
                            d ?
                            h :
                            j.findDotsAtSegment(
                                i,
                                n,
                                s[0],
                                s[1],
                                s[2],
                                s[3],
                                s[4],
                                s[5],
                                1
                            )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
                        o
                    );
                };
            },
            Gt = o(1),
            Wt = o(),
            Xt = o(0, 1);
        (j.getTotalLength = Gt),
        (j.getPointAtLength = Wt),
        (j.getSubpath = function(t, e, r) {
            if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
            r = Xt(t, r, 1);
            return e ? Xt(r, e).end : r;
        }),
        (qt.getTotalLength = function() {
            var t = this.getPath();
            if (t)
                return this.node.getTotalLength ?
                    this.node.getTotalLength() :
                    Gt(t);
        }),
        (qt.getPointAtLength = function(t) {
            var e = this.getPath();
            if (e) return Wt(e, t);
        }),
        (qt.getPath = function() {
            var t,
                e = j._getPath[this.type];
            if ("text" != this.type && "set" != this.type)
                return e && (t = e(this)), t;
        }),
        (qt.getSubpath = function(t, e) {
            var r = this.getPath();
            if (r) return j.getSubpath(r, t, e);
        });
        o = j.easing_formulas = {
            linear: function(t) {
                return t;
            },
            "<": function(t) {
                return m(t, 1.7);
            },
            ">": function(t) {
                return m(t, 0.48);
            },
            "<>": function(t) {
                var e = 0.48 - t / 1.04,
                    r = B.sqrt(0.1734 + e * e),
                    t = r - e,
                    e = -r - e,
                    e =
                    m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
                    m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
                    0.5;
                return 3 * (1 - e) * e * e + e * e * e;
            },
            backIn: function(t) {
                return t * t * (2.70158 * t - 1.70158);
            },
            backOut: function(t) {
                return --t * t * (2.70158 * t + 1.70158) + 1;
            },
            elastic: function(t) {
                return t == !!t ?
                    t :
                    m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
            },
            bounce: function(t) {
                var e = 7.5625,
                    r = 2.75,
                    t =
                    t < 1 / r ?
                    e * t * t :
                    t < 2 / r ?
                    e * (t -= 1.5 / r) * t + 0.75 :
                    t < 2.5 / r ?
                    e * (t -= 2.25 / r) * t + 0.9375 :
                    e * (t -= 2.625 / r) * t + 0.984375;
                return t;
            },
        };
        (o.easeIn = o["ease-in"] = o["<"]),
        (o.easeOut = o["ease-out"] = o[">"]),
        (o.easeInOut = o["ease-in-out"] = o["<>"]),
        (o["back-in"] = o.backIn),
        (o["back-out"] = o.backOut);
        var Ht = [],
            Ut =
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            t.msRequestAnimationFrame ||
            function(t) {
                setTimeout(t, 16);
            },
            $t = function() {
                for (var t = +new Date(), e = 0; e < Ht.length; e++) {
                    var r = Ht[e];
                    if (!r.el.removed && !r.paused) {
                        var i,
                            n = t - r.start,
                            s = r.ms,
                            a = r.easing,
                            o = r.from,
                            l = r.diff,
                            h = r.to,
                            u = (r.t, r.el),
                            c = {},
                            f = {};
                        if (
                            (r.initstatus ?
                                ((n =
                                        ((r.initstatus * r.anim.top - r.prev) /
                                            (r.percent - r.prev)) *
                                        s),
                                    (r.status = r.initstatus),
                                    delete r.initstatus,
                                    r.stop && Ht.splice(e--, 1)) :
                                (r.status =
                                    (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top), !(n < 0))
                        )
                            if (n < s) {
                                var p,
                                    d = a(n / s);
                                for (p in o)
                                    if (o[L](p)) {
                                        switch (D[p]) {
                                            case F:
                                                b = +o[p] + d * s * l[p];
                                                break;
                                            case "colour":
                                                b =
                                                    "rgb(" + [
                                                        Zt(C(o[p].r + d * s * l[p].r)),
                                                        Zt(C(o[p].g + d * s * l[p].g)),
                                                        Zt(C(o[p].b + d * s * l[p].b)),
                                                    ].join(",") +
                                                    ")";
                                                break;
                                            case "path":
                                                b = [];
                                                for (var g = 0, x = o[p].length; g < x; g++) {
                                                    b[g] = [o[p][g][0]];
                                                    for (var y = 1, m = o[p][g].length; y < m; y++)
                                                        b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                                                    b[g] = b[g].join(w);
                                                }
                                                b = b.join(w);
                                                break;
                                            case "transform":
                                                if (l[p].real)
                                                    for (b = [], g = 0, x = o[p].length; g < x; g++)
                                                        for (
                                                            b[g] = [o[p][g][0]], y = 1, m = o[p][g].length; y < m; y++
                                                        )
                                                            b[g][y] = o[p][g][y] + d * s * l[p][g][y];
                                                else {
                                                    function v(t) {
                                                        return +o[p][t] + d * s * l[p][t];
                                                    }
                                                    var b = [
                                                        ["m", v(0), v(1), v(2), v(3), v(4), v(5)]
                                                    ];
                                                }
                                                break;
                                            case "csv":
                                                if ("clip-rect" == p)
                                                    for (b = [], g = 4; g--;)
                                                        b[g] = +o[p][g] + d * s * l[p][g];
                                                break;
                                            default:
                                                var _ = [][M](o[p]);
                                                for (
                                                    b = [], g = u.paper.customAttributes[p].length; g--;

                                                )
                                                    b[g] = +_[g] + d * s * l[p][g];
                                        }
                                        c[p] = b;
                                    }
                                u.attr(c),
                                    (function(t, e, r) {
                                        setTimeout(function() {
                                            N("raphael.anim.frame." + t, e, r);
                                        });
                                    })(u.id, u, r.anim);
                            } else {
                                if (
                                    (!(function(t, e, r) {
                                            setTimeout(function() {
                                                N("raphael.anim.frame." + e.id, e, r),
                                                    N("raphael.anim.finish." + e.id, e, r),
                                                    j.is(t, "function") && t.call(e);
                                            });
                                        })(r.callback, u, r.anim),
                                        u.attr(h),
                                        Ht.splice(e--, 1),
                                        1 < r.repeat && !r.next)
                                ) {
                                    for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                                    r.el.attr(f),
                                        Kt(
                                            r.anim,
                                            r.el,
                                            r.anim.percents[0],
                                            null,
                                            r.totalOrigin,
                                            r.repeat - 1
                                        );
                                }
                                r.next &&
                                    !r.stop &&
                                    Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                            }
                    }
                }
                j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
            },
            Zt = function(t) {
                return 255 < t ? 255 : t < 0 ? 0 : t;
            };

        function Qt(t, e, r, i, n, s) {
            var a,
                l = 3 * e,
                h = 3 * (i - e) - l,
                u = 1 - l - h,
                o = 3 * r,
                c = 3 * (n - r) - o,
                f = 1 - o - c;

            function p(t) {
                return ((u * t + h) * t + l) * t;
            }
            return (
                (a = (function(t, e) {
                    var r, i, n, s, a, o;
                    for (n = t, o = 0; o < 8; o++) {
                        if (((s = p(n) - t), S(s) < e)) return n;
                        if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
                        n -= s / a;
                    }
                    if (((i = 1), (n = t) < (r = 0))) return r;
                    if (i < n) return i;
                    for (; r < i;) {
                        if (((s = p(n)), S(s - t) < e)) return n;
                        s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
                    }
                    return n;
                })(t, (a = 1 / (200 * s)))),
                ((f * a + c) * a + o) * a
            );
        }

        function Jt(t, e) {
            var r = [],
                i = {};
            if (((this.ms = e), (this.times = 1), t)) {
                for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
                r.sort(s);
            }
            (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
        }

        function Kt(t, e, r, i, n, s) {
            r = I(r);
            var a,
                o,
                l,
                h,
                u,
                c = t.ms,
                f = {},
                p = {},
                d = {};
            if (i)
                for (x = 0, y = Ht.length; x < y; x++) {
                    var g = Ht[x];
                    if (g.el.id == e.id && g.anim == t) {
                        g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
                            e.attr(g.totalOrigin);
                        break;
                    }
                }
            else i = +p;
            for (var x = 0, y = t.percents.length; x < y; x++) {
                if (t.percents[x] == r || t.percents[x] > i * t.top) {
                    (r = t.percents[x]),
                    (u = t.percents[x - 1] || 0),
                    (c = (c / t.top) * (r - u)),
                    (h = t.percents[x + 1]),
                    (a = t.anim[r]);
                    break;
                }
                i && e.attr(t.anim[t.percents[x]]);
            }
            if (a) {
                if (o)(o.initstatus = i), (o.start = new Date() - o.ms * i);
                else {
                    for (var m in a)
                        if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
                            switch (
                                ((f[m] = e.attr(m)),
                                    null == f[m] && (f[m] = q[m]),
                                    (p[m] = a[m]),
                                    D[m])
                            ) {
                                case F:
                                    d[m] = (p[m] - f[m]) / c;
                                    break;
                                case "colour":
                                    f[m] = j.getRGB(f[m]);
                                    var v = j.getRGB(p[m]);
                                    d[m] = {
                                        r: (v.r - f[m].r) / c,
                                        g: (v.g - f[m].g) / c,
                                        b: (v.b - f[m].b) / c,
                                    };
                                    break;
                                case "path":
                                    var b = Ct(f[m], p[m]),
                                        _ = b[1];
                                    for (
                                        f[m] = b[0], d[m] = [], x = 0, y = f[m].length; x < y; x++
                                    ) {
                                        d[m][x] = [0];
                                        for (var w = 1, k = f[m][x].length; w < k; w++)
                                            d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
                                    }
                                    break;
                                case "transform":
                                    (v = e._), (b = At(v[m], p[m]));
                                    if (b)
                                        for (
                                            f[m] = b.from,
                                            p[m] = b.to,
                                            d[m] = [],
                                            d[m].real = !0,
                                            x = 0,
                                            y = f[m].length; x < y; x++
                                        )
                                            for (
                                                d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length; w < k; w++
                                            )
                                                d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
                                    else {
                                        (b = e.matrix || new Nt()),
                                        (v = {
                                            _: { transform: v.transform },
                                            getBBox: function() {
                                                return e.getBBox(1);
                                            },
                                        });
                                        (f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                                        Tt(v, p[m]),
                                            (p[m] = v._.transform),
                                            (d[m] = [
                                                (v.matrix.a - b.a) / c,
                                                (v.matrix.b - b.b) / c,
                                                (v.matrix.c - b.c) / c,
                                                (v.matrix.d - b.d) / c,
                                                (v.matrix.e - b.e) / c,
                                                (v.matrix.f - b.f) / c,
                                            ]);
                                    }
                                    break;
                                case "csv":
                                    var C = P(a[m])[z](E),
                                        B = P(f[m])[z](E);
                                    if ("clip-rect" == m)
                                        for (f[m] = B, d[m] = [], x = B.length; x--;)
                                            d[m][x] = (C[x] - f[m][x]) / c;
                                    p[m] = C;
                                    break;
                                default:
                                    for (
                                        C = [][M](a[m]),
                                        B = [][M](f[m]),
                                        d[m] = [],
                                        x = e.paper.customAttributes[m].length; x--;

                                    )
                                        d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
                            }
                    var S,
                        T = a.easing,
                        A = j.easing_formulas[T];
                    if (
                        ((A =
                                A ||
                                ((A = P(T).match(R)) && 5 == A.length ?
                                    ((S = A),
                                        function(t) {
                                            return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
                                        }) :
                                    U)),
                            (T = a.start || t.start || +new Date()),
                            (g = {
                                anim: t,
                                percent: r,
                                timestamp: T,
                                start: T + (t.del || 0),
                                status: 0,
                                initstatus: i || 0,
                                stop: !1,
                                ms: c,
                                easing: A,
                                from: f,
                                diff: d,
                                to: p,
                                el: e,
                                callback: a.callback,
                                prev: u,
                                next: h,
                                repeat: s || t.times,
                                origin: e.attr(),
                                totalOrigin: n,
                            }),
                            Ht.push(g),
                            i &&
                            !o &&
                            !l &&
                            ((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
                    )
                        return $t();
                    l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
                }
                N("raphael.anim.start." + e.id, e, t);
            }
        }

        function te(t) {
            for (var e = 0; e < Ht.length; e++)
                Ht[e].el.paper == t && Ht.splice(e--, 1);
        }
        (qt.animateWith = function(t, e, r, i, n, s) {
            var a = this;
            if (a.removed) return s && s.call(a), a;
            s = r instanceof Jt ? r : j.animation(r, i, n, s);
            Kt(s, a, s.percents[0], null, a.attr());
            for (var o = 0, l = Ht.length; o < l; o++)
                if (Ht[o].anim == e && Ht[o].el == t) {
                    Ht[l - 1].start = Ht[o].start;
                    break;
                }
            return a;
        }),
        (qt.onAnimation = function(t) {
            return (
                t ?
                N.on("raphael.anim.frame." + this.id, t) :
                N.unbind("raphael.anim.frame." + this.id),
                this
            );
        }),
        (Jt.prototype.delay = function(t) {
            var e = new Jt(this.anim, this.ms);
            return (e.times = this.times), (e.del = +t || 0), e;
        }),
        (Jt.prototype.repeat = function(t) {
            var e = new Jt(this.anim, this.ms);
            return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
        }),
        (j.animation = function(t, e, r, i) {
            if (t instanceof Jt) return t;
            (!j.is(r, "function") && r) || ((i = i || r || null), (r = null)),
            (e = +e || 0);
            var n,
                s,
                a = {};
            for (s in (t = Object(t)))
                t[L](s) &&
                I(s) != s &&
                I(s) + "%" != s &&
                ((n = !0), (a[s] = t[s]));
            return n ?
                (r && (a.easing = r),
                    i && (a.callback = i),
                    new Jt({ 100: a }, e)) :
                new Jt(t, e);
        }),
        (qt.animate = function(t, e, r, i) {
            var n = this;
            if (n.removed) return i && i.call(n), n;
            i = t instanceof Jt ? t : j.animation(t, e, r, i);
            return Kt(i, n, i.percents[0], null, n.attr()), n;
        }),
        (qt.setTime = function(t, e) {
            return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
        }),
        (qt.status = function(t, e) {
            var r,
                i,
                n = [],
                s = 0;
            if (null != e) return Kt(t, this, -1, k(e, 1)), this;
            for (r = Ht.length; s < r; s++)
                if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
                    if (t) return i.status;
                    n.push({ anim: i.anim, status: i.status });
                }
            return t ? 0 : n;
        }),
        (qt.pause = function(t) {
            for (var e = 0; e < Ht.length; e++)
                Ht[e].el.id != this.id ||
                (t && Ht[e].anim != t) ||
                (!1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) &&
                    (Ht[e].paused = !0));
            return this;
        }),
        (qt.resume = function(t) {
            for (var e, r = 0; r < Ht.length; r++)
                Ht[r].el.id != this.id ||
                (t && Ht[r].anim != t) ||
                ((e = Ht[r]), !1 !== N("raphael.anim.resume." + this.id, this, e.anim) &&
                    (delete e.paused, this.status(e.anim, e.status)));
            return this;
        }),
        (qt.stop = function(t) {
            for (var e = 0; e < Ht.length; e++)
                Ht[e].el.id != this.id ||
                (t && Ht[e].anim != t) ||
                (!1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) &&
                    Ht.splice(e--, 1));
            return this;
        }),
        N.on("raphael.remove", te),
            N.on("raphael.clear", te),
            (qt.toString = function() {
                return "Raphaël’s object";
            });
        var ee,
            re = function(t) {
                if (((this.items = []), (this.length = 0), (this.type = "set"), t))
                    for (var e = 0, r = t.length; e < r; e++)
                        !t[e] ||
                        (t[e].constructor != qt.constructor &&
                            t[e].constructor != re) ||
                        ((this[this.items.length] = this.items[this.items.length] =
                                t[e]),
                            this.length++);
            },
            ie = re.prototype;
        for (ee in ((ie.push = function() {
                    for (var t, e, r = 0, i = arguments.length; r < i; r++)
                        !(t = arguments[r]) ||
                        (t.constructor != qt.constructor && t.constructor != re) ||
                        ((this[(e = this.items.length)] = this.items[e] = t),
                            this.length++);
                    return this;
                }),
                (ie.pop = function() {
                    return this.length && delete this[this.length--], this.items.pop();
                }),
                (ie.forEach = function(t, e) {
                    for (var r = 0, i = this.items.length; r < i; r++)
                        if (!1 === t.call(e, this.items[r], r)) return this;
                    return this;
                }),
                qt))
            qt[L](ee) &&
            (ie[ee] = (function(r) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(t) {
                        t[r][x](t, e);
                    });
                };
            })(ee));
        (ie.attr = function(t, e) {
            if (t && j.is(t, v) && j.is(t[0], "object"))
                for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
            else
                for (var n = 0, s = this.items.length; n < s; n++)
                    this.items[n].attr(t, e);
            return this;
        }),
        (ie.clear = function() {
            for (; this.length;) this.pop();
        }),
        (ie.splice = function(t, e, r) {
            (t = t < 0 ? _(this.length + t, 0) : t),
            (e = _(0, k(this.length - t, e)));
            for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
                s.push(arguments[a]);
            for (a = 0; a < e; a++) n.push(this[t + a]);
            for (; a < this.length - t; a++) i.push(this[t + a]);
            var o = s.length;
            for (a = 0; a < o + i.length; a++)
                this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
            for (a = this.items.length = this.length -= e - o; this[a];)
                delete this[a++];
            return new re(n);
        }),
        (ie.exclude = function(t) {
            for (var e = 0, r = this.length; e < r; e++)
                if (this[e] == t) return this.splice(e, 1), !0;
        }),
        (ie.animate = function(t, e, r, i) {
            (!j.is(r, "function") && r) || (i = r || null);
            var n,
                s = this.items.length,
                a = s,
                o = this;
            if (!s) return this;
            i &&
                (n = function() {
                    --s || i.call(o);
                }),
                (r = j.is(r, u) ? r : n);
            for (
                var l = j.animation(t, e, r, n), h = this.items[--a].animate(l); a--;

            )
                this.items[a] &&
                !this.items[a].removed &&
                this.items[a].animateWith(h, l, l),
                (this.items[a] && !this.items[a].removed) || s--;
            return this;
        }),
        (ie.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this;
        }),
        (ie.getBBox = function() {
            for (
                var t, e = [], r = [], i = [], n = [], s = this.items.length; s--;

            )
                this.items[s].removed ||
                ((t = this.items[s].getBBox()),
                    e.push(t.x),
                    r.push(t.y),
                    i.push(t.x + t.width),
                    n.push(t.y + t.height));
            return {
                x: (e = k[x](0, e)),
                y: (r = k[x](0, r)),
                x2: (i = _[x](0, i)),
                y2: (n = _[x](0, n)),
                width: i - e,
                height: n - r,
            };
        }),
        (ie.clone = function(t) {
            t = this.paper.set();
            for (var e = 0, r = this.items.length; e < r; e++)
                t.push(this.items[e].clone());
            return t;
        }),
        (ie.toString = function() {
            return "Raphaël‘s set";
        }),
        (ie.glow = function(r) {
            var i = this.paper.set();
            return (
                this.forEach(function(t, e) {
                    t = t.glow(r);
                    null != t &&
                        t.forEach(function(t, e) {
                            i.push(t);
                        });
                }),
                i
            );
        }),
        (ie.isPointInside = function(e, r) {
            var i = !1;
            return (
                this.forEach(function(t) {
                    if (t.isPointInside(e, r))
                        return console.log("runned"), !(i = !0);
                }),
                i
            );
        }),
        (j.registerFont = function(t) {
            if (!t.face) return t;
            this.fonts = this.fonts || {};
            var e,
                r = { w: t.w, face: {}, glyphs: {} },
                i = t.face["font-family"];
            for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
            if (
                (this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]), !t.svg)
            )
                for (var n in ((r.face["units-per-em"] = b(
                            t.face["units-per-em"],
                            10
                        )),
                        t.glyphs))
                    if (t.glyphs[L](n)) {
                        var s = t.glyphs[n];
                        if (
                            ((r.glyphs[n] = {
                                    w: s.w,
                                    k: {},
                                    d: s.d &&
                                        "M" +
                                        s.d.replace(/[mlcxtrv]/g, function(t) {
                                            return ({ l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                                                t
                                            ] || "M");
                                        }) +
                                        "z",
                                }),
                                s.k)
                        )
                            for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
                    }
            return t;
        }),
        (K.getFont = function(t, e, r, i) {
            if (
                ((i = i || "normal"),
                    (r = r || "normal"),
                    (e = +e || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
                        400),
                    j.fonts)
            ) {
                var n,
                    s = j.fonts[t];
                if (!s) {
                    var a,
                        o = new RegExp(
                            "(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                            "i"
                        );
                    for (a in j.fonts)
                        if (j.fonts[L](a) && o.test(a)) {
                            s = j.fonts[a];
                            break;
                        }
                }
                if (s)
                    for (
                        var l = 0, h = s.length; l < h &&
                        ((n = s[l]).face["font-weight"] != e ||
                            (n.face["font-style"] != r && n.face["font-style"]) ||
                            n.face["font-stretch"] != i); l++
                    );
                return n;
            }
        }),
        (K.print = function(t, e, r, i, n, s, a, o) {
            (s = s || "middle"),
            (a = _(k(a || 0, 1), -1)),
            (o = _(k(o || 1, 3), 1));
            var l,
                h = P(r)[z](""),
                u = 0,
                c = 0,
                f = "";
            if ((j.is(i, "string") && (i = this.getFont(i)), i)) {
                l = (n || 16) / i.face["units-per-em"];
                for (
                    var p,
                        d,
                        n = i.face.bbox[z](E),
                        g = +n[0],
                        x = n[3] - n[1],
                        y = 0,
                        m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2),
                        v = 0,
                        b = h.length; v < b; v++
                )
                    "\n" == h[v] ?
                    ((c = d = u = 0), (y += x * o)) :
                    ((p = (c && i.glyphs[h[v - 1]]) || {}),
                        (d = i.glyphs[h[v]]),
                        (u += c ?
                            (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a :
                            0),
                        (c = 1)),
                    d &&
                    d.d &&
                    (f += j.transformPath(d.d, [
                        "t",
                        u * l,
                        y * l,
                        "s",
                        l,
                        l,
                        g,
                        m,
                        "t",
                        (t - g) / l,
                        (e - m) / l,
                    ]));
            }
            return this.path(f).attr({ fill: "#000", stroke: "none" });
        }),
        (K.add = function(t) {
            if (j.is(t, "array"))
                for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
                    (e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
            return r;
        }),
        (j.format = function(t, e) {
            var r = j.is(e, v) ? [0][M](e) : arguments;
            return (
                t &&
                j.is(t, u) &&
                r.length - 1 &&
                (t = t.replace(n, function(t, e) {
                    return null == r[++e] ? "" : r[e];
                })),
                t || ""
            );
        }),
        (j.fullfill = (function() {
            var e = /\{([^\}]+)\}/g,
                n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
            return function(t, i) {
                return String(t).replace(e, function(t, e) {
                    return (
                        (r = t),
                        (s = t = i),
                        e.replace(n, function(t, e, r, i, n) {
                            (e = e || i),
                            s &&
                                (e in s && (s = s[e]),
                                    "function" == typeof s && n && (s = s()));
                        }),
                        (s = (null == s || s == t ? r : s) + "")
                    );
                    var r, s;
                });
            };
        })()),
        (j.ninja = function() {
            return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
        }),
        (j.st = ie),
        (function(e, t, r) {
            null == e.readyState &&
                e.addEventListener &&
                (e.addEventListener(
                        t,
                        (r = function() {
                            e.removeEventListener(t, r, !1), (e.readyState = "complete");
                        }), !1
                    ),
                    (e.readyState = "loading")),
                (function t() {
                    /in/.test(e.readyState) ?
                        setTimeout(t, 9) :
                        j.eve("raphael.DOMload");
                })();
        })(document, "DOMContentLoaded"),
        N.on("raphael.DOMload", function() {
                i = !0;
            }),
            (function() {
                if (j.svg) {
                    var k = "hasOwnProperty",
                        C = String,
                        g = parseFloat,
                        x = parseInt,
                        y = Math,
                        m = y.max,
                        v = y.abs,
                        b = y.pow,
                        _ = /[, ]+/,
                        f = j.eve,
                        w = "http://www.w3.org/1999/xlink",
                        B = {
                            block: "M5,0 0,2.5 5,5z",
                            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                            open: "M6,1 1,3.5 6,6",
                            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
                        },
                        S = {};
                    j.toString = function() {
                        return (
                            "Your browser supports SVG.\nYou are running Raphaël " +
                            this.version
                        );
                    };

                    function T(t, e) {
                        var i = "linear",
                            r = t.id + e,
                            n = 0.5,
                            s = 0.5,
                            a = t.node,
                            o = t.paper,
                            l = a.style,
                            h = j._g.doc.getElementById(r);
                        if (!h) {
                            if (
                                ((e = (e = C(e).replace(
                                        j._radial_gradient,
                                        function(t, e, r) {
                                            return (
                                                (i = "radial"),
                                                e &&
                                                r &&
                                                ((n = g(e)),
                                                    (r = 2 * (0.5 < (s = g(r))) - 1),
                                                    0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
                                                    (s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
                                                    0.5 != s &&
                                                    (s = s.toFixed(5) - 1e-5 * r)),
                                                ""
                                            );
                                        }
                                    )).split(/\s*\-\s*/)),
                                    "linear" == i)
                            ) {
                                var u = e.shift(),
                                    u = -g(u);
                                if (isNaN(u)) return null;
                                var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
                                    u = 1 / (m(v(c[2]), v(c[3])) || 1);
                                (c[2] *= u),
                                (c[3] *= u),
                                c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                                    c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                            }
                            var f = j._parseDots(e);
                            if (!f) return null;
                            if (
                                ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                                    t.gradient &&
                                    r != t.gradient.id &&
                                    (o.defs.removeChild(t.gradient), delete t.gradient), !t.gradient)
                            ) {
                                (h = L(i + "Gradient", { id: r })),
                                (t.gradient = h),
                                L(
                                        h,
                                        "radial" == i ?
                                        { fx: n, fy: s } :
                                        {
                                            x1: c[0],
                                            y1: c[1],
                                            x2: c[2],
                                            y2: c[3],
                                            gradientTransform: t.matrix.invert(),
                                        }
                                    ),
                                    o.defs.appendChild(h);
                                for (var p = 0, d = f.length; p < d; p++)
                                    h.appendChild(
                                        L("stop", {
                                            offset: f[p].offset || (p ? "100%" : "0%"),
                                            "stop-color": f[p].color || "#fff",
                                        })
                                    );
                            }
                        }
                        return (
                            L(a, {
                                fill: "url(#" + r + ")",
                                opacity: 1,
                                "fill-opacity": 1,
                            }),
                            (l.fill = ""),
                            (l.opacity = 1),
                            (l.fillOpacity = 1)
                        );
                    }

                    function A(t) {
                        var e = t.getBBox(1);
                        L(t.pattern, {
                            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
                        });
                    }

                    function N(t, e, r) {
                        if ("path" == t.type) {
                            for (
                                var i,
                                    n,
                                    s,
                                    a,
                                    o,
                                    l,
                                    h,
                                    u,
                                    c,
                                    f = C(e).toLowerCase().split("-"),
                                    p = t.paper,
                                    d = r ? "end" : "start",
                                    g = t.node,
                                    x = t.attrs,
                                    y = x["stroke-width"],
                                    m = f.length,
                                    v = "classic",
                                    b = 3,
                                    _ = 3,
                                    w = 5; m--;

                            )
                                switch (f[m]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        v = f[m];
                                        break;
                                    case "wide":
                                        _ = 5;
                                        break;
                                    case "narrow":
                                        _ = 2;
                                        break;
                                    case "long":
                                        b = 5;
                                        break;
                                    case "short":
                                        b = 2;
                                }
                            for (u in ((u =
                                        "open" == v ?
                                        ((b += 2),
                                            (_ += 2),
                                            (w += 2),
                                            (l = 1),
                                            (n = r ? 4 : 1), { fill: "none", stroke: x.stroke }) :
                                        ((n = l = b / 2), { fill: x.stroke, stroke: "none" })),
                                    t._.arrows ?
                                    r ?
                                    (t._.arrows.endPath && S[t._.arrows.endPath]--,
                                        t._.arrows.endMarker && S[t._.arrows.endMarker]--) :
                                    (t._.arrows.startPath && S[t._.arrows.startPath]--,
                                        t._.arrows.startMarker && S[t._.arrows.startMarker]--) :
                                    (t._.arrows = {}),
                                    "none" != v ?
                                    ((s = "raphael-marker-" + v),
                                        (a = "raphael-marker-" + d + v + b + _),
                                        j._g.doc.getElementById(s) ?
                                        S[s]++
                                        :
                                        (p.defs.appendChild(
                                                L(L("path"), {
                                                    "stroke-linecap": "round",
                                                    d: B[v],
                                                    id: s,
                                                })
                                            ),
                                            (S[s] = 1)),
                                        (o = j._g.doc.getElementById(a)) ?
                                        (S[a]++, (h = o.getElementsByTagName("use")[0])) :
                                        ((o = L(L("marker"), {
                                                id: a,
                                                markerHeight: _,
                                                markerWidth: b,
                                                orient: "auto",
                                                refX: n,
                                                refY: _ / 2,
                                            })),
                                            (h = L(L("use"), {
                                                "xlink:href": "#" + s,
                                                transform:
                                                    (r ?
                                                        "rotate(180 " + b / 2 + " " + _ / 2 + ") " :
                                                        "") +
                                                    "scale(" +
                                                    b / w +
                                                    "," +
                                                    _ / w +
                                                    ")",
                                                "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(
                                                    4
                                                ),
                                            })),
                                            o.appendChild(h),
                                            p.defs.appendChild(o),
                                            (S[a] = 1)),
                                        L(h, u),
                                        (l = l * ("diamond" != v && "oval" != v)),
                                        (h = r ?
                                            ((i = t._.arrows.startdx * y || 0),
                                                j.getTotalLength(x.path) - l * y) :
                                            ((i = l * y),
                                                j.getTotalLength(x.path) -
                                                (t._.arrows.enddx * y || 0))),
                                        ((u = {})["marker-" + d] = "url(#" + a + ")"),
                                        (h || i) && (u.d = j.getSubpath(x.path, i, h)),
                                        L(g, u),
                                        (t._.arrows[d + "Path"] = s),
                                        (t._.arrows[d + "Marker"] = a),
                                        (t._.arrows[d + "dx"] = l),
                                        (t._.arrows[d + "Type"] = v),
                                        (t._.arrows[d + "String"] = e)) :
                                    ((h = r ?
                                            ((i = t._.arrows.startdx * y || 0),
                                                j.getTotalLength(x.path) - i) :
                                            ((i = 0),
                                                j.getTotalLength(x.path) -
                                                (t._.arrows.enddx * y || 0))),
                                        t._.arrows[d + "Path"] &&
                                        L(g, { d: j.getSubpath(x.path, i, h) }),
                                        delete t._.arrows[d + "Path"],
                                        delete t._.arrows[d + "Marker"],
                                        delete t._.arrows[d + "dx"],
                                        delete t._.arrows[d + "Type"],
                                        delete t._.arrows[d + "String"]),
                                    S))
                                !S[k](u) ||
                                S[u] ||
                                ((c = j._g.doc.getElementById(u)) &&
                                    c.parentNode.removeChild(c));
                        }
                    }

                    function E(t, e, r) {
                        if ((e = l[C(e).toLowerCase()])) {
                            for (
                                var i = t.attrs["stroke-width"] || "1",
                                    n = { round: i, square: i, butt: 0 }[
                                        t.attrs["stroke-linecap"] || r["stroke-linecap"]
                                    ] || 0,
                                    s = [],
                                    a = e.length; a--;

                            )
                                s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                            L(t.node, { "stroke-dasharray": s.join(",") });
                        }
                    }

                    function p(t, e) {
                        var r,
                            i = t.node,
                            n = t.attrs,
                            s = i.style.visibility;
                        for (r in ((i.style.visibility = "hidden"), e))
                            if (e[k](r) && j._availableAttrs[k](r)) {
                                var a = e[r];
                                switch (((n[r] = a), r)) {
                                    case "blur":
                                        t.blur(a);
                                        break;
                                    case "href":
                                    case "title":
                                        var o = L("title"),
                                            l = j._g.doc.createTextNode(a);
                                        o.appendChild(l), i.appendChild(o);
                                        break;
                                    case "target":
                                        var h = i.parentNode;
                                        "a" != h.tagName.toLowerCase() &&
                                            ((o = L("a")),
                                                h.insertBefore(o, i),
                                                o.appendChild(i),
                                                (h = o)),
                                            "target" == r ?
                                            h.setAttributeNS(
                                                w,
                                                "show",
                                                "blank" == a ? "new" : a
                                            ) :
                                            h.setAttributeNS(w, r, a);
                                        break;
                                    case "cursor":
                                        i.style.cursor = a;
                                        break;
                                    case "transform":
                                        t.transform(a);
                                        break;
                                    case "arrow-start":
                                        N(t, a);
                                        break;
                                    case "arrow-end":
                                        N(t, a, 1);
                                        break;
                                    case "clip-rect":
                                        var u,
                                            l = C(a).split(_);
                                        4 == l.length &&
                                            (t.clip &&
                                                t.clip.parentNode.parentNode.removeChild(
                                                    t.clip.parentNode
                                                ),
                                                (h = L("clipPath")),
                                                (u = L("rect")),
                                                (h.id = j.createUUID()),
                                                L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
                                                h.appendChild(u),
                                                t.paper.defs.appendChild(h),
                                                L(i, { "clip-path": "url(#" + h.id + ")" }),
                                                (t.clip = u)),
                                            a ||
                                            ((u = i.getAttribute("clip-path")) &&
                                                ((d = j._g.doc.getElementById(
                                                        u.replace(/(^url\(#|\)$)/g, "")
                                                    )) && d.parentNode.removeChild(d),
                                                    L(i, { "clip-path": "" }),
                                                    delete t.clip));
                                        break;
                                    case "path":
                                        "path" == t.type &&
                                            (L(i, {
                                                    d: a ? (n.path = j._pathToAbsolute(a)) : "M0,0",
                                                }),
                                                (t._.dirty = 1),
                                                t._.arrows &&
                                                ("startString" in t._.arrows &&
                                                    N(t, t._.arrows.startString),
                                                    "endString" in t._.arrows &&
                                                    N(t, t._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
                                        (r = "x"), (a = n.x);
                                    case "x":
                                        n.fx && (a = -n.x - (n.width || 0));
                                    case "rx":
                                        if ("rx" == r && "rect" == t.type) break;
                                    case "cx":
                                        i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                                        break;
                                    case "height":
                                        if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
                                        (r = "y"), (a = n.y);
                                    case "y":
                                        n.fy && (a = -n.y - (n.height || 0));
                                    case "ry":
                                        if ("ry" == r && "rect" == t.type) break;
                                    case "cy":
                                        i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                                        break;
                                    case "r":
                                        "rect" == t.type ?
                                            L(i, { rx: a, ry: a }) :
                                            i.setAttribute(r, a),
                                            (t._.dirty = 1);
                                        break;
                                    case "src":
                                        "image" == t.type && i.setAttributeNS(w, "href", a);
                                        break;
                                    case "stroke-width":
                                        (1 == t._.sx && 1 == t._.sy) ||
                                        (a /= m(v(t._.sx), v(t._.sy)) || 1),
                                        t.paper._vbSize && (a *= t.paper._vbSize),
                                            i.setAttribute(r, a),
                                            n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e),
                                            t._.arrows &&
                                            ("startString" in t._.arrows &&
                                                N(t, t._.arrows.startString),
                                                "endString" in t._.arrows &&
                                                N(t, t._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        E(t, a, e);
                                        break;
                                    case "fill":
                                        if (C(a).match(j._ISURL)) {
                                            L(i, { fill: a });
                                            break;
                                        }
                                        var c,
                                            f,
                                            p = j.getRGB(a);
                                        if (p.error) {
                                            if (
                                                ("circle" == t.type ||
                                                    "ellipse" == t.type ||
                                                    "r" != C(a).charAt()) &&
                                                T(t, a)
                                            ) {
                                                !("opacity" in n || "fill-opacity" in n) ||
                                                ((c = j._g.doc.getElementById(
                                                        i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                                                    )) &&
                                                    ((f = c.getElementsByTagName("stop")),
                                                        L(f[f.length - 1], {
                                                            "stop-opacity":
                                                                ("opacity" in n ? n.opacity : 1) *
                                                                ("fill-opacity" in n ? n["fill-opacity"] : 1),
                                                        }))),
                                                (n.gradient = a),
                                                (n.fill = "none");
                                                break;
                                            }
                                        } else
                                            delete e.gradient,
                                            delete n.gradient, !j.is(n.opacity, "undefined") &&
                                            j.is(e.opacity, "undefined") &&
                                            L(i, { opacity: n.opacity }), !j.is(n["fill-opacity"], "undefined") &&
                                            j.is(e["fill-opacity"], "undefined") &&
                                            L(i, { "fill-opacity": n["fill-opacity"] });
                                        p[k]("opacity") &&
                                            L(i, {
                                                "fill-opacity": 1 < p.opacity ? p.opacity / 100 : p.opacity,
                                            });
                                    case "stroke":
                                        (p = j.getRGB(a)),
                                        i.setAttribute(r, p.hex),
                                            "stroke" == r &&
                                            p[k]("opacity") &&
                                            L(i, {
                                                "stroke-opacity": 1 < p.opacity ? p.opacity / 100 : p.opacity,
                                            }),
                                            "stroke" == r &&
                                            t._.arrows &&
                                            ("startString" in t._.arrows &&
                                                N(t, t._.arrows.startString),
                                                "endString" in t._.arrows &&
                                                N(t, t._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" != t.type &&
                                            "ellipse" != t.type &&
                                            "r" == C(a).charAt()) ||
                                        T(t, a);
                                        break;
                                    case "opacity":
                                        n.gradient &&
                                            !n[k]("stroke-opacity") &&
                                            L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                                    case "fill-opacity":
                                        if (n.gradient) {
                                            (c = j._g.doc.getElementById(
                                                i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                                            )) &&
                                            ((f = c.getElementsByTagName("stop")),
                                                L(f[f.length - 1], { "stop-opacity": a }));
                                            break;
                                        }
                                    default:
                                        "font-size" == r && (a = x(a, 10) + "px");
                                        var d = r.replace(/(\-.)/g, function(t) {
                                            return t.substring(1).toUpperCase();
                                        });
                                        (i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
                                }
                            }
                        M(t, e), (i.style.visibility = s);
                    }

                    function o(t, e) {
                        ((this[0] = this.node = t).raphael = !0),
                        (this.id = j._oid++),
                        (t.raphaelid = this.id),
                        (this.matrix = j.matrix()),
                        (this.realPath = null),
                        (this.paper = e),
                        (this.attrs = this.attrs || {}),
                        (this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1,
                        }),
                        e.bottom || (e.bottom = this),
                            (this.prev = e.top),
                            e.top && (e.top.next = this),
                            ((e.top = this).next = null);
                    }
                    var L = function(t, e) {
                            if (e)
                                for (var r in ("string" == typeof t && (t = L(t)), e))
                                    e[k](r) &&
                                    ("xlink:" == r.substring(0, 6) ?
                                        t.setAttributeNS(w, r.substring(6), C(e[r])) :
                                        t.setAttribute(r, C(e[r])));
                            else
                                (t = j._g.doc.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    t
                                )).style &&
                                (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                            return t;
                        },
                        l = {
                            "": [0],
                            none: [0],
                            "-": [3, 1],
                            ".": [1, 1],
                            "-.": [3, 1, 1, 1],
                            "-..": [3, 1, 1, 1, 1, 1],
                            ". ": [1, 3],
                            "- ": [4, 3],
                            "--": [8, 3],
                            "- .": [4, 3, 1, 3],
                            "--.": [8, 3, 1, 3],
                            "--..": [8, 3, 1, 3, 1, 3],
                        },
                        M = function(t, e) {
                            if (
                                "text" == t.type &&
                                (e[k]("text") ||
                                    e[k]("font") ||
                                    e[k]("font-size") ||
                                    e[k]("x") ||
                                    e[k]("y"))
                            ) {
                                var r = t.attrs,
                                    i = t.node,
                                    n = i.firstChild ?
                                    x(
                                        j._g.doc.defaultView
                                        .getComputedStyle(i.firstChild, "")
                                        .getPropertyValue("font-size"),
                                        10
                                    ) :
                                    10;
                                if (e[k]("text")) {
                                    for (r.text = e.text; i.firstChild;)
                                        i.removeChild(i.firstChild);
                                    for (
                                        var s,
                                            a = C(e.text).split("\n"),
                                            o = [],
                                            l = 0,
                                            h = a.length; l < h; l++
                                    )
                                        (s = L("tspan")),
                                        l && L(s, { dy: 1.2 * n, x: r.x }),
                                        s.appendChild(j._g.doc.createTextNode(a[l])),
                                        i.appendChild(s),
                                        (o[l] = s);
                                } else
                                    for (
                                        l = 0, h = (o = i.getElementsByTagName("tspan")).length; l < h; l++
                                    )
                                        l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
                                L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                                (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                                t && j.is(t, "finite") && L(o[0], { dy: t });
                            }
                        },
                        t = j.el;
                    ((o.prototype = t).constructor = o),
                    (j._engine.path = function(t, e) {
                        var r = L("path");
                        e.canvas && e.canvas.appendChild(r);
                        e = new o(r, e);
                        return (
                            (e.type = "path"),
                            p(e, { fill: "none", stroke: "#000", path: t }),
                            e
                        );
                    }),
                    (t.rotate = function(t, e, r) {
                        return (
                            this.removed ||
                            ((t = C(t).split(_)).length - 1 &&
                                ((e = g(t[1])), (r = g(t[2]))),
                                (t = g(t[0])),
                                null == r && (e = r),
                                (null != e && null != r) ||
                                ((e = (i = this.getBBox(1)).x + i.width / 2),
                                    (r = i.y + i.height / 2)),
                                this.transform(this._.transform.concat([
                                    ["r", t, e, r]
                                ]))),
                            this
                        );
                        var i;
                    }),
                    (t.scale = function(t, e, r, i) {
                        return (
                            this.removed ||
                            ((t = C(t).split(_)).length - 1 &&
                                ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                                (t = g(t[0])),
                                null == e && (e = t),
                                null == i && (r = i),
                                (null != r && null != i) || (n = this.getBBox(1)),
                                (r = null == r ? n.x + n.width / 2 : r),
                                (i = null == i ? n.y + n.height / 2 : i),
                                this.transform(
                                    this._.transform.concat([
                                        ["s", t, e, r, i]
                                    ])
                                )),
                            this
                        );
                        var n;
                    }),
                    (t.translate = function(t, e) {
                        return (
                            this.removed ||
                            ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                                (t = g(t[0]) || 0),
                                (e = +e || 0),
                                this.transform(this._.transform.concat([
                                    ["t", t, e]
                                ]))),
                            this
                        );
                    }),
                    (t.transform = function(t) {
                        var e = this._;
                        return null == t ?
                            e.transform :
                            (j._extractTransform(this, t),
                                this.clip &&
                                L(this.clip, { transform: this.matrix.invert() }),
                                this.pattern && A(this),
                                this.node && L(this.node, { transform: this.matrix }),
                                (1 == e.sx && 1 == e.sy) ||
                                ((e = this.attrs[k]("stroke-width") ?
                                        this.attrs["stroke-width"] :
                                        1),
                                    this.attr({ "stroke-width": e })),
                                this);
                    }),
                    (t.hide = function() {
                        return (
                            this.removed ||
                            this.paper.safari((this.node.style.display = "none")),
                            this
                        );
                    }),
                    (t.show = function() {
                        return (
                            this.removed ||
                            this.paper.safari((this.node.style.display = "")),
                            this
                        );
                    }),
                    (t.remove = function() {
                        if (!this.removed && this.node.parentNode) {
                            var t,
                                e = this.paper;
                            for (t in (e.__set__ && e.__set__.exclude(this),
                                    f.unbind("raphael.*.*." + this.id),
                                    this.gradient && e.defs.removeChild(this.gradient),
                                    j._tear(this, e),
                                    "a" == this.node.parentNode.tagName.toLowerCase() ?
                                    this.node.parentNode.parentNode.removeChild(
                                        this.node.parentNode
                                    ) :
                                    this.node.parentNode.removeChild(this.node),
                                    this))
                                this[t] =
                                "function" == typeof this[t] ?
                                j._removedFactory(t) :
                                null;
                            this.removed = !0;
                        }
                    }),
                    (t._getBBox = function() {
                        var t;
                        "none" == this.node.style.display && (this.show(), (t = !0));
                        var e = {};
                        try {
                            e = this.node.getBBox();
                        } catch (t) {} finally {
                            e = e || {};
                        }
                        return t && this.hide(), e;
                    }),
                    (t.attr = function(t, e) {
                        if (this.removed) return this;
                        if (null == t) {
                            var r,
                                i = {};
                            for (r in this.attrs)
                                this.attrs[k](r) && (i[r] = this.attrs[r]);
                            return (
                                i.gradient &&
                                "none" == i.fill &&
                                (i.fill = i.gradient) &&
                                delete i.gradient,
                                (i.transform = this._.transform),
                                i
                            );
                        }
                        if (null == e && j.is(t, "string")) {
                            if (
                                "fill" == t &&
                                "none" == this.attrs.fill &&
                                this.attrs.gradient
                            )
                                return this.attrs.gradient;
                            if ("transform" == t) return this._.transform;
                            for (
                                var n = t.split(_), s = {}, a = 0, o = n.length; a < o; a++
                            )
                                (t = n[a]) in this.attrs ?
                                (s[t] = this.attrs[t]) :
                                j.is(this.paper.customAttributes[t], "function") ?
                                (s[t] = this.paper.customAttributes[t].def) :
                                (s[t] = j._availableAttrs[t]);
                            return o - 1 ? s : s[n[0]];
                        }
                        if (null == e && j.is(t, "array")) {
                            for (s = {}, a = 0, o = t.length; a < o; a++)
                                s[t[a]] = this.attr(t[a]);
                            return s;
                        }
                        var l, h;
                        for (h in (null != e ?
                                ((l = {})[t] = e) :
                                null != t && j.is(t, "object") && (l = t),
                                l))
                            f("raphael.attr." + h + "." + this.id, this, l[h]);
                        for (h in this.paper.customAttributes)
                            if (
                                this.paper.customAttributes[k](h) &&
                                l[k](h) &&
                                j.is(this.paper.customAttributes[h], "function")
                            ) {
                                var u,
                                    c = this.paper.customAttributes[h].apply(
                                        this, [].concat(l[h])
                                    );
                                for (u in ((this.attrs[h] = l[h]), c))
                                    c[k](u) && (l[u] = c[u]);
                            }
                        return p(this, l), this;
                    }),
                    (t.toFront = function() {
                        if (this.removed) return this;
                        "a" == this.node.parentNode.tagName.toLowerCase() ?
                            this.node.parentNode.parentNode.appendChild(
                                this.node.parentNode
                            ) :
                            this.node.parentNode.appendChild(this.node);
                        var t = this.paper;
                        return t.top != this && j._tofront(this, t), this;
                    }),
                    (t.toBack = function() {
                        if (this.removed) return this;
                        var t = this.node.parentNode;
                        "a" == t.tagName.toLowerCase() ?
                            t.parentNode.insertBefore(
                                this.node.parentNode,
                                this.node.parentNode.parentNode.firstChild
                            ) :
                            t.firstChild != this.node &&
                            t.insertBefore(this.node, this.node.parentNode.firstChild),
                            j._toback(this, this.paper);
                        this.paper;
                        return this;
                    }),
                    (t.insertAfter = function(t) {
                        if (this.removed) return this;
                        var e = t.node || t[t.length - 1].node;
                        return (
                            e.nextSibling ?
                            e.parentNode.insertBefore(this.node, e.nextSibling) :
                            e.parentNode.appendChild(this.node),
                            j._insertafter(this, t, this.paper),
                            this
                        );
                    }),
                    (t.insertBefore = function(t) {
                        if (this.removed) return this;
                        var e = t.node || t[0].node;
                        return (
                            e.parentNode.insertBefore(this.node, e),
                            j._insertbefore(this, t, this.paper),
                            this
                        );
                    }),
                    (t.blur = function(t) {
                        var e,
                            r,
                            i = this;
                        return (
                            0 != +t ?
                            ((e = L("filter")),
                                (r = L("feGaussianBlur")),
                                (i.attrs.blur = t),
                                (e.id = j.createUUID()),
                                L(r, { stdDeviation: +t || 1.5 }),
                                e.appendChild(r),
                                i.paper.defs.appendChild(e),
                                (i._blur = e),
                                L(i.node, { filter: "url(#" + e.id + ")" })) :
                            (i._blur &&
                                (i._blur.parentNode.removeChild(i._blur),
                                    delete i._blur,
                                    delete i.attrs.blur),
                                i.node.removeAttribute("filter")),
                            i
                        );
                    }),
                    (j._engine.circle = function(t, e, r, i) {
                        var n = L("circle");
                        t.canvas && t.canvas.appendChild(n);
                        t = new o(n, t);
                        return (
                            (t.attrs = {
                                cx: e,
                                cy: r,
                                r: i,
                                fill: "none",
                                stroke: "#000",
                            }),
                            (t.type = "circle"),
                            L(n, t.attrs),
                            t
                        );
                    }),
                    (j._engine.rect = function(t, e, r, i, n, s) {
                        var a = L("rect");
                        t.canvas && t.canvas.appendChild(a);
                        t = new o(a, t);
                        return (
                            (t.attrs = {
                                x: e,
                                y: r,
                                width: i,
                                height: n,
                                r: s || 0,
                                rx: s || 0,
                                ry: s || 0,
                                fill: "none",
                                stroke: "#000",
                            }),
                            (t.type = "rect"),
                            L(a, t.attrs),
                            t
                        );
                    }),
                    (j._engine.ellipse = function(t, e, r, i, n) {
                        var s = L("ellipse");
                        t.canvas && t.canvas.appendChild(s);
                        t = new o(s, t);
                        return (
                            (t.attrs = {
                                cx: e,
                                cy: r,
                                rx: i,
                                ry: n,
                                fill: "none",
                                stroke: "#000",
                            }),
                            (t.type = "ellipse"),
                            L(s, t.attrs),
                            t
                        );
                    }),
                    (j._engine.image = function(t, e, r, i, n, s) {
                        var a = L("image");
                        L(a, {
                                x: r,
                                y: i,
                                width: n,
                                height: s,
                                preserveAspectRatio: "none",
                            }),
                            a.setAttributeNS(w, "href", e),
                            t.canvas && t.canvas.appendChild(a);
                        t = new o(a, t);
                        return (
                            (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                            (t.type = "image"),
                            t
                        );
                    }),
                    (j._engine.text = function(t, e, r, i) {
                        var n = L("text");
                        t.canvas && t.canvas.appendChild(n);
                        t = new o(n, t);
                        return (
                            (t.attrs = {
                                x: e,
                                y: r,
                                "text-anchor": "middle",
                                text: i,
                                font: j._availableAttrs.font,
                                stroke: "none",
                                fill: "#000",
                            }),
                            (t.type = "text"),
                            p(t, t.attrs),
                            t
                        );
                    }),
                    (j._engine.setSize = function(t, e) {
                        return (
                            (this.width = t || this.width),
                            (this.height = e || this.height),
                            this.canvas.setAttribute("width", this.width),
                            this.canvas.setAttribute("height", this.height),
                            this._viewBox && this.setViewBox.apply(this, this._viewBox),
                            this
                        );
                    }),
                    (j._engine.create = function() {
                        var t = j._getContainer.apply(0, arguments),
                            e = t && t.container,
                            r = t.x,
                            i = t.y,
                            n = t.width,
                            s = t.height;
                        if (!e) throw new Error("SVG container not found.");
                        var a,
                            o = L("svg"),
                            t = "overflow:hidden;",
                            r = r || 0,
                            i = i || 0;
                        return (
                            L(o, {
                                height: (s = s || 342),
                                version: 1.1,
                                width: (n = n || 512),
                                xmlns: "http://www.w3.org/2000/svg",
                            }),
                            1 == e ?
                            ((o.style.cssText =
                                    t +
                                    "position:absolute;left:" +
                                    r +
                                    "px;top:" +
                                    i +
                                    "px"),
                                j._g.doc.body.appendChild(o),
                                (a = 1)) :
                            ((o.style.cssText = t + "position:relative"),
                                e.firstChild ?
                                e.insertBefore(o, e.firstChild) :
                                e.appendChild(o)),
                            ((e = new j._Paper()).width = n),
                            (e.height = s),
                            (e.canvas = o),
                            e.clear(),
                            (e._left = e._top = 0),
                            a && (e.renderfix = function() {}),
                            e.renderfix(),
                            e
                        );
                    }),
                    (j._engine.setViewBox = function(t, e, r, i, n) {
                        f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                        var s,
                            a = m(r / this.width, i / this.height),
                            o = this.top,
                            l = n ? "meet" : "xMinYMin",
                            h =
                            null == t ?
                            (this._vbSize && (a = 1),
                                delete this._vbSize,
                                "0 0 " + this.width + " " + this.height) :
                            ((this._vbSize = a), t + " " + e + " " + r + " " + i);
                        for (
                            L(this.canvas, { viewBox: h, preserveAspectRatio: l }); a && o;

                        )
                            (s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1),
                            o.attr({ "stroke-width": s }),
                            (o._.dirty = 1),
                            (o._.dirtyT = 1),
                            (o = o.prev);
                        return (this._viewBox = [t, e, r, i, !!n]), this;
                    }),
                    (j.prototype.renderfix = function() {
                        var e,
                            r = this.canvas,
                            t = r.style;
                        try {
                            e = r.getScreenCTM() || r.createSVGMatrix();
                        } catch (t) {
                            e = r.createSVGMatrix();
                        }
                        var i = -e.e % 1,
                            n = -e.f % 1;
                        (i || n) &&
                        (i &&
                            ((this._left = (this._left + i) % 1),
                                (t.left = this._left + "px")),
                            n &&
                            ((this._top = (this._top + n) % 1),
                                (t.top = this._top + "px")));
                    }),
                    (j.prototype.clear = function() {
                        j.eve("raphael.clear", this);
                        for (var t = this.canvas; t.firstChild;)
                            t.removeChild(t.firstChild);
                        (this.bottom = this.top = null),
                        (this.desc = L("desc")).appendChild(
                                j._g.doc.createTextNode("Created with Raphaël " + j.version)
                            ),
                            t.appendChild(this.desc),
                            t.appendChild((this.defs = L("defs")));
                    }),
                    (j.prototype.remove = function() {
                        for (var t in (f("raphael.remove", this),
                                this.canvas.parentNode &&
                                this.canvas.parentNode.removeChild(this.canvas),
                                this))
                            this[t] =
                            "function" == typeof this[t] ? j._removedFactory(t) : null;
                    });
                    var e,
                        r = j.st;
                    for (e in t)
                        t[k](e) &&
                        !r[k](e) &&
                        (r[e] = (function(r) {
                            return function() {
                                var e = arguments;
                                return this.forEach(function(t) {
                                    t[r].apply(t, e);
                                });
                            };
                        })(e));
                }
            })(),
            (function() {
                if (j.vml) {
                    function g(t, e, r) {
                        var i = j.matrix();
                        return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
                    }

                    function v(t, e, r, i, n, s) {
                        var a,
                            o = t._,
                            l = t.matrix,
                            h = o.fillpos,
                            u = t.node,
                            c = u.style,
                            f = 1,
                            p = "",
                            d = M / e,
                            t = M / r;
                        (c.visibility = "hidden"),
                        e &&
                            r &&
                            ((u.coordsize = x(d) + A + x(t)),
                                (c.rotation = s * (e * r < 0 ? -1 : 1)),
                                s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                                e < 0 && (p += "x"),
                                r < 0 && (p += " y") && (f = -1),
                                (c.flip = p),
                                (u.coordorigin = i * -d + A + n * -t),
                                (h || o.fillsize) &&
                                ((t = (t = u.getElementsByTagName(S)) && t[0]),
                                    u.removeChild(t),
                                    h &&
                                    ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                                        (t.position = a.dx * f + A + a.dy * f)),
                                    o.fillsize &&
                                    (t.size =
                                        o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
                                    u.appendChild(t)),
                                (c.visibility = "visible"));
                    }
                    var b = "hasOwnProperty",
                        _ = String,
                        w = parseFloat,
                        c = Math,
                        k = c.round,
                        C = c.max,
                        B = c.min,
                        x = c.abs,
                        S = "fill",
                        T = /[, ]+/,
                        f = j.eve,
                        A = " ",
                        N = {
                            M: "m",
                            L: "l",
                            C: "c",
                            Z: "x",
                            m: "t",
                            l: "r",
                            c: "v",
                            z: "x",
                        },
                        E = /([clmz]),?([^clmz]*)/gi,
                        i = / progid:\S+Blur\([^\)]+\)/g,
                        L = /-?[^,\s-]+/g,
                        h = "position:absolute;left:0;top:0;width:1px;height:1px",
                        M = 21600,
                        P = { path: 1, rect: 1, image: 1 },
                        z = { circle: 1, ellipse: 1 };
                    j.toString = function() {
                        return (
                            "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                            this.version
                        );
                    };

                    function F(t, e, r) {
                        for (
                            var i = _(e).toLowerCase().split("-"),
                                r = r ? "end" : "start",
                                n = i.length,
                                s = "classic",
                                a = "medium",
                                o = "medium"; n--;

                        )
                            switch (i[n]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    s = i[n];
                                    break;
                                case "wide":
                                case "narrow":
                                    o = i[n];
                                    break;
                                case "long":
                                case "short":
                                    a = i[n];
                            }
                        t = t.node.getElementsByTagName("stroke")[0];
                        (t[r + "arrow"] = s),
                        (t[r + "arrowlength"] = a),
                        (t[r + "arrowwidth"] = o);
                    }

                    function p(t, e) {
                        t.attrs = t.attrs || {};
                        var r,
                            i,
                            n,
                            s,
                            a,
                            o,
                            l,
                            h = t.node,
                            u = t.attrs,
                            c = h.style,
                            f =
                            P[t.type] &&
                            (e.x != u.x ||
                                e.y != u.y ||
                                e.width != u.width ||
                                e.height != u.height ||
                                e.cx != u.cx ||
                                e.cy != u.cy ||
                                e.rx != u.rx ||
                                e.ry != u.ry ||
                                e.r != u.r),
                            p =
                            z[t.type] &&
                            (u.cx != e.cx ||
                                u.cy != e.cy ||
                                u.r != e.r ||
                                u.rx != e.rx ||
                                u.ry != e.ry),
                            d = t;
                        for (r in e) e[b](r) && (u[r] = e[r]);
                        if (
                            (f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
                                e.href && (h.href = e.href),
                                e.title && (h.title = e.title),
                                e.target && (h.target = e.target),
                                e.cursor && (c.cursor = e.cursor),
                                "blur" in e && t.blur(e.blur),
                                ((e.path && "path" == t.type) || f) &&
                                ((h.path = (function(t) {
                                        var e = /[ahqstv]/gi,
                                            r = j._pathToAbsolute;
                                        if (
                                            (_(t).match(e) && (r = j._path2curve),
                                                (e = /[clmz]/g),
                                                r == j._pathToAbsolute && !_(t).match(e))
                                        ) {
                                            var i = _(t).replace(E, function(t, e, r) {
                                                var i = [],
                                                    n = "m" == e.toLowerCase(),
                                                    s = N[e];
                                                return (
                                                    r.replace(L, function(t) {
                                                        n &&
                                                            2 == i.length &&
                                                            ((s += i + N["m" == e ? "l" : "L"]), (i = [])),
                                                            i.push(k(t * M));
                                                    }),
                                                    s + i
                                                );
                                            });
                                            return i;
                                        }
                                        for (
                                            var n, s, a = r(t), i = [], o = 0, l = a.length; o < l; o++
                                        ) {
                                            (n = a[o]),
                                            "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                                            for (var h = 1, u = n.length; h < u; h++)
                                                s += k(n[h] * M) + (h != u - 1 ? "," : "");
                                            i.push(s);
                                        }
                                        return i.join(A);
                                    })(~_(u.path).toLowerCase().indexOf("r") ?
                                        j._pathToAbsolute(u.path) :
                                        u.path
                                    )),
                                    "image" == t.type &&
                                    ((t._.fillpos = [u.x, u.y]),
                                        (t._.fillsize = [u.width, u.height]),
                                        v(t, 1, 1, 0, 0, 0))),
                                "transform" in e && t.transform(e.transform),
                                p &&
                                ((s = +u.cx),
                                    (i = +u.cy),
                                    (p = +u.rx || +u.r || 0),
                                    (n = +u.ry || +u.r || 0),
                                    (h.path = j.format(
                                        "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                                        k((s - p) * M),
                                        k((i - n) * M),
                                        k((s + p) * M),
                                        k((i + n) * M),
                                        k(s * M)
                                    )),
                                    (t._.dirty = 1)),
                                "clip-rect" in e &&
                                (4 == (i = _(e["clip-rect"]).split(T)).length &&
                                    ((i[2] = +i[2] + +i[0]),
                                        (i[3] = +i[3] + +i[1]),
                                        ((s = (n = h.clipRect || j._g.doc.createElement("div"))
                                            .style).clip = j.format(
                                            "rect({1}px {2}px {3}px {0}px)",
                                            i
                                        )),
                                        h.clipRect ||
                                        ((s.position = "absolute"),
                                            (s.top = 0),
                                            (s.left = 0),
                                            (s.width = t.paper.width + "px"),
                                            (s.height = t.paper.height + "px"),
                                            h.parentNode.insertBefore(n, h),
                                            n.appendChild(h),
                                            (h.clipRect = n))),
                                    e["clip-rect"] ||
                                    (h.clipRect && (h.clipRect.style.clip = "auto"))),
                                t.textpath &&
                                ((o = t.textpath.style),
                                    e.font && (o.font = e.font),
                                    e["font-family"] &&
                                    (o.fontFamily =
                                        '"' +
                                        e["font-family"]
                                        .split(",")[0]
                                        .replace(/^['"]+|['"]+$/g, "") +
                                        '"'),
                                    e["font-size"] && (o.fontSize = e["font-size"]),
                                    e["font-weight"] && (o.fontWeight = e["font-weight"]),
                                    e["font-style"] && (o.fontStyle = e["font-style"])),
                                "arrow-start" in e && F(d, e["arrow-start"]),
                                "arrow-end" in e && F(d, e["arrow-end"], 1),
                                (null == e.opacity &&
                                    null == e["stroke-width"] &&
                                    null == e.fill &&
                                    null == e.src &&
                                    null == e.stroke &&
                                    null == e["stroke-width"] &&
                                    null == e["stroke-opacity"] &&
                                    null == e["fill-opacity"] &&
                                    null == e["stroke-dasharray"] &&
                                    null == e["stroke-miterlimit"] &&
                                    null == e["stroke-linejoin"] &&
                                    null == e["stroke-linecap"]) ||
                                ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
                                    "image" == t.type && e.src && (o.src = e.src),
                                    e.fill && (o.on = !0),
                                    (null != o.on && "none" != e.fill && null !== e.fill) ||
                                    (o.on = !1),
                                    o.on &&
                                    e.fill &&
                                    ((g = _(e.fill).match(j._ISURL)) ?
                                        (o.parentNode == h && h.removeChild(o),
                                            (o.rotate = !0),
                                            (o.src = g[1]),
                                            (o.type = "tile"),
                                            (a = t.getBBox(1)),
                                            (o.position = a.x + A + a.y),
                                            (t._.fillpos = [a.x, a.y]),
                                            j._preload(g[1], function() {
                                                t._.fillsize = [this.offsetWidth, this.offsetHeight];
                                            })) :
                                        ((o.color = j.getRGB(e.fill).hex),
                                            (o.src = ""),
                                            (o.type = "solid"),
                                            j.getRGB(e.fill).error &&
                                            (d.type in { circle: 1, ellipse: 1 } ||
                                                "r" != _(e.fill).charAt()) &&
                                            I(d, e.fill, o) &&
                                            ((u.fill = "none"),
                                                (u.gradient = e.fill),
                                                (o.rotate = !1)))),
                                    ("fill-opacity" in e || "opacity" in e) &&
                                    ((l =
                                            ((+u["fill-opacity"] + 1 || 2) - 1) *
                                            ((+u.opacity + 1 || 2) - 1) *
                                            ((+j.getRGB(e.fill).o + 1 || 2) - 1)),
                                        (l = B(C(l, 0), 1)),
                                        (o.opacity = l),
                                        o.src && (o.color = "none")),
                                    h.appendChild(o),
                                    (a = !1),
                                    (g =
                                        h.getElementsByTagName("stroke") &&
                                        h.getElementsByTagName("stroke")[0]) ||
                                    (a = g = R("stroke")),
                                    ((e.stroke && "none" != e.stroke) ||
                                        e["stroke-width"] ||
                                        null != e["stroke-opacity"] ||
                                        e["stroke-dasharray"] ||
                                        e["stroke-miterlimit"] ||
                                        e["stroke-linejoin"] ||
                                        e["stroke-linecap"]) &&
                                    (g.on = !0),
                                    ("none" != e.stroke &&
                                        null !== e.stroke &&
                                        null != g.on &&
                                        0 != e.stroke &&
                                        0 != e["stroke-width"]) ||
                                    (g.on = !1),
                                    (o = j.getRGB(e.stroke)),
                                    g.on && e.stroke && (g.color = o.hex),
                                    (l =
                                        ((+u["stroke-opacity"] + 1 || 2) - 1) *
                                        ((+u.opacity + 1 || 2) - 1) *
                                        ((+o.o + 1 || 2) - 1)),
                                    (o = 0.75 * (w(e["stroke-width"]) || 1)),
                                    (l = B(C(l, 0), 1)),
                                    null == e["stroke-width"] && (o = u["stroke-width"]),
                                    e["stroke-width"] && (g.weight = o),
                                    o && o < 1 && (l *= o) && (g.weight = 1),
                                    (g.opacity = l),
                                    e["stroke-linejoin"] &&
                                    (g.joinstyle = e["stroke-linejoin"] || "miter"),
                                    (g.miterlimit = e["stroke-miterlimit"] || 8),
                                    e["stroke-linecap"] &&
                                    (g.endcap =
                                        "butt" == e["stroke-linecap"] ?
                                        "flat" :
                                        "square" == e["stroke-linecap"] ?
                                        "square" :
                                        "round"),
                                    e["stroke-dasharray"] &&
                                    ((l = {
                                            "-": "shortdash",
                                            ".": "shortdot",
                                            "-.": "shortdashdot",
                                            "-..": "shortdashdotdot",
                                            ". ": "dot",
                                            "- ": "dash",
                                            "--": "longdash",
                                            "- .": "dashdot",
                                            "--.": "longdashdot",
                                            "--..": "longdashdotdot",
                                        }),
                                        (g.dashstyle = l[b](e["stroke-dasharray"]) ?
                                            l[e["stroke-dasharray"]] :
                                            "")),
                                    a && h.appendChild(g)),
                                "text" == d.type)
                        ) {
                            d.paper.canvas.style.display = "";
                            var h = d.paper.span,
                                g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                                c = h.style;
                            u.font && (c.font = u.font),
                                u["font-family"] && (c.fontFamily = u["font-family"]),
                                u["font-weight"] && (c.fontWeight = u["font-weight"]),
                                u["font-style"] && (c.fontStyle = u["font-style"]),
                                (g = w(u["font-size"] || (g && g[0])) || 10),
                                (c.fontSize = 100 * g + "px"),
                                d.textpath.string &&
                                (h.innerHTML = _(d.textpath.string)
                                    .replace(/</g, "&#60;")
                                    .replace(/&/g, "&#38;")
                                    .replace(/\n/g, "<br>"));
                            h = h.getBoundingClientRect();
                            (d.W = u.w = (h.right - h.left) / 100),
                            (d.H = u.h = (h.bottom - h.top) / 100),
                            (d.X = u.x),
                            (d.Y = u.y + d.H / 2),
                            ("x" in e || "y" in e) &&
                            (d.path.v = j.format(
                                "m{0},{1}l{2},{1}",
                                k(u.x * M),
                                k(u.y * M),
                                k(u.x * M) + 1
                            ));
                            for (
                                var x = [
                                        "x",
                                        "y",
                                        "text",
                                        "font",
                                        "font-family",
                                        "font-weight",
                                        "font-style",
                                        "font-size",
                                    ],
                                    y = 0,
                                    m = x.length; y < m; y++
                            )
                                if (x[y] in e) {
                                    d._.dirty = 1;
                                    break;
                                }
                            switch (u["text-anchor"]) {
                                case "start":
                                    (d.textpath.style["v-text-align"] = "left"),
                                    (d.bbx = d.W / 2);
                                    break;
                                case "end":
                                    (d.textpath.style["v-text-align"] = "right"),
                                    (d.bbx = -d.W / 2);
                                    break;
                                default:
                                    (d.textpath.style["v-text-align"] = "center"), (d.bbx = 0);
                            }
                            d.textpath.style["v-text-kern"] = !0;
                        }
                    }

                    function u(t, e) {
                        ((this[0] = this.node = t).raphael = !0),
                        (this.id = j._oid++),
                        (t.raphaelid = this.id),
                        (this.X = 0),
                        (this.Y = 0),
                        (this.attrs = {}),
                        (this.paper = e),
                        (this.matrix = j.matrix()),
                        (this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1,
                        }),
                        e.bottom || (e.bottom = this),
                            (this.prev = e.top),
                            e.top && (e.top.next = this),
                            ((e.top = this).next = null);
                    }
                    var R,
                        I = function(t, e, r) {
                            t.attrs = t.attrs || {};
                            t.attrs;
                            var i = Math.pow,
                                n = "linear",
                                s = ".5 .5";
                            if (
                                ((t.attrs.gradient = e),
                                    (e = (e = _(e).replace(
                                        j._radial_gradient,
                                        function(t, e, r) {
                                            return (
                                                (n = "radial"),
                                                e &&
                                                r &&
                                                ((e = w(e)),
                                                    (r = w(r)),
                                                    0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                                                    (r =
                                                        c.sqrt(0.25 - i(e - 0.5, 2)) *
                                                        (2 * (0.5 < r) - 1) +
                                                        0.5),
                                                    (s = e + A + r)),
                                                ""
                                            );
                                        }
                                    )).split(/\s*\-\s*/)),
                                    "linear" == n)
                            ) {
                                var a = e.shift(),
                                    a = -w(a);
                                if (isNaN(a)) return null;
                            }
                            var o = j._parseDots(e);
                            if (!o) return null;
                            if (((t = t.shape || t.node), o.length)) {
                                t.removeChild(r),
                                    (r.on = !0),
                                    (r.method = "none"),
                                    (r.color = o[0].color),
                                    (r.color2 = o[o.length - 1].color);
                                for (var l = [], h = 0, u = o.length; h < u; h++)
                                    o[h].offset && l.push(o[h].offset + A + o[h].color);
                                (r.colors = l.length ? l.join() : "0% " + r.color),
                                "radial" == n
                                    ?
                                    ((r.type = "gradientTitle"),
                                        (r.focus = "100%"),
                                        (r.focussize = "0 0"),
                                        (r.focusposition = s),
                                        (r.angle = 0)) :
                                    ((r.type = "gradient"), (r.angle = (270 - a) % 360)),
                                    t.appendChild(r);
                            }
                            return 1;
                        },
                        t = j.el;
                    ((u.prototype = t).constructor = u),
                    (t.transform = function(t) {
                        if (null == t) return this._.transform;
                        var e,
                            r = this.paper._viewBoxShift,
                            i = r ?
                            "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] :
                            "";
                        r &&
                            (e = t =
                                _(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                            j._extractTransform(this, i + t);
                        var n = this.matrix.clone(),
                            s = this.skew,
                            a = this.node,
                            o = ~_(this.attrs.fill).indexOf("-"),
                            r = !_(this.attrs.fill).indexOf("url(");
                        return (
                            n.translate(1, 1),
                            r || o || "image" == this.type ?
                            ((s.matrix = "1 0 0 1"),
                                (s.offset = "0 0"),
                                (i = n.split()),
                                (o && i.noRotation) || !i.isSimple ?
                                ((a.style.filter = n.toFilter()),
                                    (t = this.getBBox()),
                                    (r = this.getBBox(1)),
                                    (o = t.x - r.x),
                                    (r = t.y - r.y),
                                    (a.coordorigin = o * -M + A + r * -M),
                                    v(this, 1, 1, o, r, 0)) :
                                ((a.style.filter = ""),
                                    v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate))) :
                            ((a.style.filter = ""),
                                (s.matrix = _(n)),
                                (s.offset = n.offset())),
                            e && (this._.transform = e),
                            this
                        );
                    }),
                    (t.rotate = function(t, e, r) {
                        return this.removed ?
                            this :
                            null != t ?
                            ((t = _(t).split(T)).length - 1 &&
                                ((e = w(t[1])), (r = w(t[2]))),
                                (t = w(t[0])),
                                null == r && (e = r),
                                (null != e && null != r) ||
                                ((e = (i = this.getBBox(1)).x + i.width / 2),
                                    (r = i.y + i.height / 2)),
                                (this._.dirtyT = 1),
                                this.transform(this._.transform.concat([
                                    ["r", t, e, r]
                                ])),
                                this) :
                            void 0;
                        var i;
                    }),
                    (t.translate = function(t, e) {
                        return (
                            this.removed ||
                            ((t = _(t).split(T)).length - 1 && (e = w(t[1])),
                                (t = w(t[0]) || 0),
                                (e = +e || 0),
                                this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                                this.transform(this._.transform.concat([
                                    ["t", t, e]
                                ]))),
                            this
                        );
                    }),
                    (t.scale = function(t, e, r, i) {
                        return (
                            this.removed ||
                            ((t = _(t).split(T)).length - 1 &&
                                ((e = w(t[1])),
                                    (r = w(t[2])),
                                    (i = w(t[3])),
                                    isNaN(r) && (r = null),
                                    isNaN(i) && (i = null)),
                                (t = w(t[0])),
                                null == e && (e = t),
                                null == i && (r = i),
                                (null != r && null != i) || (n = this.getBBox(1)),
                                (r = null == r ? n.x + n.width / 2 : r),
                                (i = null == i ? n.y + n.height / 2 : i),
                                this.transform(
                                    this._.transform.concat([
                                        ["s", t, e, r, i]
                                    ])
                                ),
                                (this._.dirtyT = 1)),
                            this
                        );
                        var n;
                    }),
                    (t.hide = function() {
                        return this.removed || (this.node.style.display = "none"), this;
                    }),
                    (t.show = function() {
                        return this.removed || (this.node.style.display = ""), this;
                    }),
                    (t._getBBox = function() {
                        return this.removed ?
                            {} :
                            {
                                x: this.X + (this.bbx || 0) - this.W / 2,
                                y: this.Y - this.H,
                                width: this.W,
                                height: this.H,
                            };
                    }),
                    (t.remove = function() {
                        if (!this.removed && this.node.parentNode) {
                            for (var t in (this.paper.__set__ &&
                                    this.paper.__set__.exclude(this),
                                    j.eve.unbind("raphael.*.*." + this.id),
                                    j._tear(this, this.paper),
                                    this.node.parentNode.removeChild(this.node),
                                    this.shape && this.shape.parentNode.removeChild(this.shape),
                                    this))
                                this[t] =
                                "function" == typeof this[t] ?
                                j._removedFactory(t) :
                                null;
                            this.removed = !0;
                        }
                    }),
                    (t.attr = function(t, e) {
                        if (this.removed) return this;
                        if (null == t) {
                            var r,
                                i = {};
                            for (r in this.attrs)
                                this.attrs[b](r) && (i[r] = this.attrs[r]);
                            return (
                                i.gradient &&
                                "none" == i.fill &&
                                (i.fill = i.gradient) &&
                                delete i.gradient,
                                (i.transform = this._.transform),
                                i
                            );
                        }
                        if (null == e && j.is(t, "string")) {
                            if (
                                t == S &&
                                "none" == this.attrs.fill &&
                                this.attrs.gradient
                            )
                                return this.attrs.gradient;
                            for (
                                var n = t.split(T), s = {}, a = 0, o = n.length; a < o; a++
                            )
                                (t = n[a]) in this.attrs ?
                                (s[t] = this.attrs[t]) :
                                j.is(this.paper.customAttributes[t], "function") ?
                                (s[t] = this.paper.customAttributes[t].def) :
                                (s[t] = j._availableAttrs[t]);
                            return o - 1 ? s : s[n[0]];
                        }
                        if (this.attrs && null == e && j.is(t, "array")) {
                            for (s = {}, a = 0, o = t.length; a < o; a++)
                                s[t[a]] = this.attr(t[a]);
                            return s;
                        }
                        var l, h;
                        for (h in (null != e && ((l = {})[t] = e),
                                null == e && j.is(t, "object") && (l = t),
                                l))
                            f("raphael.attr." + h + "." + this.id, this, l[h]);
                        if (l) {
                            for (h in this.paper.customAttributes)
                                if (
                                    this.paper.customAttributes[b](h) &&
                                    l[b](h) &&
                                    j.is(this.paper.customAttributes[h], "function")
                                ) {
                                    var u,
                                        c = this.paper.customAttributes[h].apply(
                                            this, [].concat(l[h])
                                        );
                                    for (u in ((this.attrs[h] = l[h]), c))
                                        c[b](u) && (l[u] = c[u]);
                                }
                            l.text &&
                                "text" == this.type &&
                                (this.textpath.string = l.text),
                                p(this, l);
                        }
                        return this;
                    }),
                    (t.toFront = function() {
                        return (
                            this.removed || this.node.parentNode.appendChild(this.node),
                            this.paper &&
                            this.paper.top != this &&
                            j._tofront(this, this.paper),
                            this
                        );
                    }),
                    (t.toBack = function() {
                        return (
                            this.removed ||
                            (this.node.parentNode.firstChild != this.node &&
                                (this.node.parentNode.insertBefore(
                                        this.node,
                                        this.node.parentNode.firstChild
                                    ),
                                    j._toback(this, this.paper))),
                            this
                        );
                    }),
                    (t.insertAfter = function(t) {
                        return (
                            this.removed ||
                            (t.constructor == j.st.constructor && (t = t[t.length - 1]),
                                t.node.nextSibling ?
                                t.node.parentNode.insertBefore(
                                    this.node,
                                    t.node.nextSibling
                                ) :
                                t.node.parentNode.appendChild(this.node),
                                j._insertafter(this, t, this.paper)),
                            this
                        );
                    }),
                    (t.insertBefore = function(t) {
                        return (
                            this.removed ||
                            (t.constructor == j.st.constructor && (t = t[0]),
                                t.node.parentNode.insertBefore(this.node, t.node),
                                j._insertbefore(this, t, this.paper)),
                            this
                        );
                    }),
                    (t.blur = function(t) {
                        var e = this.node.runtimeStyle,
                            r = (r = e.filter).replace(i, "");
                        return (
                            0 != +t ?
                            ((this.attrs.blur = t),
                                (e.filter =
                                    r +
                                    A +
                                    " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                                    (+t || 1.5) +
                                    ")"),
                                (e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5)))) :
                            ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
                            this
                        );
                    }),
                    (j._engine.path = function(t, e) {
                        var r = R("shape");
                        (r.style.cssText = h),
                        (r.coordsize = M + A + M),
                        (r.coordorigin = e.coordorigin);
                        var i = new u(r, e),
                            n = { fill: "none", stroke: "#000" };
                        t && (n.path = t),
                            (i.type = "path"),
                            (i.path = []),
                            (i.Path = ""),
                            p(i, n),
                            e.canvas.appendChild(r);
                        e = R("skew");
                        return (
                            (e.on = !0),
                            r.appendChild(e),
                            (i.skew = e),
                            i.transform(""),
                            i
                        );
                    }),
                    (j._engine.rect = function(t, e, r, i, n, s) {
                        var a = j._rectPath(e, r, i, n, s),
                            o = t.path(a),
                            t = o.attrs;
                        return (
                            (o.X = t.x = e),
                            (o.Y = t.y = r),
                            (o.W = t.width = i),
                            (o.H = t.height = n),
                            (t.r = s),
                            (t.path = a),
                            (o.type = "rect"),
                            o
                        );
                    }),
                    (j._engine.ellipse = function(t, e, r, i, n) {
                        (t = t.path()), t.attrs;
                        return (
                            (t.X = e - i),
                            (t.Y = r - n),
                            (t.W = 2 * i),
                            (t.H = 2 * n),
                            (t.type = "ellipse"),
                            p(t, { cx: e, cy: r, rx: i, ry: n }),
                            t
                        );
                    }),
                    (j._engine.circle = function(t, e, r, i) {
                        (t = t.path()), t.attrs;
                        return (
                            (t.X = e - i),
                            (t.Y = r - i),
                            (t.W = t.H = 2 * i),
                            (t.type = "circle"),
                            p(t, { cx: e, cy: r, r: i }),
                            t
                        );
                    }),
                    (j._engine.image = function(t, e, r, i, n, s) {
                        var a = j._rectPath(r, i, n, s),
                            o = t.path(a).attr({ stroke: "none" }),
                            l = o.attrs,
                            h = o.node,
                            t = h.getElementsByTagName(S)[0];
                        return (
                            (l.src = e),
                            (o.X = l.x = r),
                            (o.Y = l.y = i),
                            (o.W = l.width = n),
                            (o.H = l.height = s),
                            (l.path = a),
                            (o.type = "image"),
                            t.parentNode == h && h.removeChild(t),
                            (t.rotate = !0),
                            (t.src = e),
                            (t.type = "tile"),
                            (o._.fillpos = [r, i]),
                            (o._.fillsize = [n, s]),
                            h.appendChild(t),
                            v(o, 1, 1, 0, 0, 0),
                            o
                        );
                    }),
                    (j._engine.text = function(t, e, r, i) {
                        var n = R("shape"),
                            s = R("path"),
                            a = R("textpath");
                        (e = e || 0),
                        (r = r || 0),
                        (i = i || ""),
                        (s.v = j.format(
                            "m{0},{1}l{2},{1}",
                            k(e * M),
                            k(r * M),
                            k(e * M) + 1
                        )),
                        (s.textpathok = !0),
                        (a.string = _(i)),
                        (a.on = !0),
                        (n.style.cssText = h),
                        (n.coordsize = M + A + M),
                        (n.coordorigin = "0 0");
                        var o = new u(n, t),
                            l = {
                                fill: "#000",
                                stroke: "none",
                                font: j._availableAttrs.font,
                                text: i,
                            };
                        (o.shape = n),
                        (o.path = s),
                        (o.textpath = a),
                        (o.type = "text"),
                        (o.attrs.text = _(i)),
                        (o.attrs.x = e),
                        (o.attrs.y = r),
                        (o.attrs.w = 1),
                        (o.attrs.h = 1),
                        p(o, l),
                            n.appendChild(a),
                            n.appendChild(s),
                            t.canvas.appendChild(n);
                        t = R("skew");
                        return (
                            (t.on = !0),
                            n.appendChild(t),
                            (o.skew = t),
                            o.transform(""),
                            o
                        );
                    }),
                    (j._engine.setSize = function(t, e) {
                        var r = this.canvas.style;
                        return (
                            (this.width = t) == +t && (t += "px"),
                            (this.height = e) == +e && (e += "px"),
                            (r.width = t),
                            (r.height = e),
                            (r.clip = "rect(0 " + t + " " + e + " 0)"),
                            this._viewBox &&
                            j._engine.setViewBox.apply(this, this._viewBox),
                            this
                        );
                    }),
                    (j._engine.setViewBox = function(t, e, r, i, n) {
                        j.eve("raphael.setViewBox", this, this._viewBox, [
                            t,
                            e,
                            r,
                            i,
                            n,
                        ]);
                        var s,
                            a = this.width,
                            o = this.height,
                            l = 1 / C(r / a, i / o);
                        return (
                            n &&
                            (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
                                i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
                            (this._viewBox = [t, e, r, i, !!n]),
                            (this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
                            this.forEach(function(t) {
                                t.transform("...");
                            }),
                            this
                        );
                    }),
                    (j._engine.initWin = function(t) {
                        var e = t.document;
                        e.createStyleSheet().addRule(
                            ".rvml",
                            "behavior:url(#default#VML)"
                        );
                        try {
                            e.namespaces.rvml ||
                                e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                                (R = function(t) {
                                    return e.createElement("<rvml:" + t + ' class="rvml">');
                                });
                        } catch (t) {
                            R = function(t) {
                                return e.createElement(
                                    "<" +
                                    t +
                                    ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                                );
                            };
                        }
                    }),
                    j._engine.initWin(j._g.win),
                        (j._engine.create = function() {
                            var t = j._getContainer.apply(0, arguments),
                                e = t.container,
                                r = t.height,
                                i = t.width,
                                n = t.x,
                                s = t.y;
                            if (!e) throw new Error("VML container not found.");
                            var a = new j._Paper(),
                                o = (a.canvas = j._g.doc.createElement("div")),
                                t = o.style,
                                n = n || 0,
                                s = s || 0,
                                i = i || 512,
                                r = r || 342;
                            return (
                                (a.width = i) == +i && (i += "px"),
                                (a.height = r) == +r && (r += "px"),
                                (a.coordsize = 216e5 + A + 216e5),
                                (a.coordorigin = "0 0"),
                                (a.span = j._g.doc.createElement("span")),
                                (a.span.style.cssText =
                                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                                o.appendChild(a.span),
                                (t.cssText = j.format(
                                    "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                                    i,
                                    r
                                )),
                                1 == e ?
                                (j._g.doc.body.appendChild(o),
                                    (t.left = n + "px"),
                                    (t.top = s + "px"),
                                    (t.position = "absolute")) :
                                e.firstChild ?
                                e.insertBefore(o, e.firstChild) :
                                e.appendChild(o),
                                (a.renderfix = function() {}),
                                a
                            );
                        }),
                        (j.prototype.clear = function() {
                            j.eve("raphael.clear", this),
                                (this.canvas.innerHTML = ""),
                                (this.span = j._g.doc.createElement("span")),
                                (this.span.style.cssText =
                                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                                this.canvas.appendChild(this.span),
                                (this.bottom = this.top = null);
                        }),
                        (j.prototype.remove = function() {
                            for (var t in (j.eve("raphael.remove", this),
                                    this.canvas.parentNode.removeChild(this.canvas),
                                    this))
                                this[t] =
                                "function" == typeof this[t] ? j._removedFactory(t) : null;
                            return !0;
                        });
                    var e,
                        r = j.st;
                    for (e in t)
                        t[b](e) &&
                        !r[b](e) &&
                        (r[e] = (function(r) {
                            return function() {
                                var e = arguments;
                                return this.forEach(function(t) {
                                    t[r].apply(t, e);
                                });
                            };
                        })(e));
                }
            })(),
            r.was ? (d.win.Raphael = j) : (t.Raphael = j);
    })(t, t.eve);
})(this);

/* Map path and default settings - you can edit this */
var simplemaps_countrymap_mapinfo = {
    map_name: "INDIA",
    state_bbox_array: {
        1: { y: 851, x: 821, x2: 892, y2: 1135 },
        2: { y: 699, x: 294, x2: 567, y2: 932 },
        3: { y: 312, x: 799, x2: 999, y2: 421 },
        4: { y: 370, x: 735, x2: 951, y2: 516 },
        5: { y: 388, x: 518, x2: 688, y2: 511 },
        6: { y: 260, x: 291, x2: 296, y2: 265 },
        7: { y: 518, x: 413, x2: 554, y2: 749 },
        8: { y: 656, x: 163, x2: 173, y2: 667 },
        9: { y: 633, x: 86, x2: 161, y2: 655 },
        10: { y: 335, x: 296, x2: 314, y2: 354 },
        11: { y: 820, x: 189, x2: 211, y2: 852 },
        12: { y: 495, x: 1, x2: 216, y2: 664 },
        13: { y: 255, x: 215, x2: 322, y2: 383 },
        14: { y: 161, x: 253, x2: 370, y2: 276 },
        16: { y: 471, x: 518, x2: 677, y2: 597 },
        17: { y: 725, x: 203, x2: 356, y2: 968 },
        18: { y: 926, x: 229, x2: 315, y2: 1082 },
        19: { y: 963, x: 135, x2: 189, y2: 1083 },
        20: { y: 413, x: 201, x2: 500, y2: 630 },
        21: { y: 594, x: 153, x2: 435, y2: 827 },
        22: { y: 458, x: 848, x2: 908, y2: 527 },
        23: { y: 442, x: 740, x2: 842, y2: 483 },
        24: { y: 502, x: 823, x2: 864, y2: 597 },
        25: { y: 406, x: 860, x2: 925, y2: 476 },
        26: { y: 575, x: 452, x2: 660, y2: 748 },
        27: { y: 786, x: 241, x2: 483, y2: 995 },
        28: { y: 188, x: 195, x2: 300, y2: 309 },
        29: { y: 284, x: 45, x2: 345, y2: 556 },
        30: { y: 364, x: 678, x2: 709, y2: 405 },
        31: { y: 899, x: 275, x2: 416, y2: 1089 },
        32: { y: 501, x: 785, x2: 826, y2: 561 },
        33: { y: 275, x: 305, x2: 562, y2: 526 },
        34: { y: 233, x: 321, x2: 439, y2: 342 },
        35: { y: 399, x: 603, x2: 742, y2: 613 },
        36: { y: 82, x: 179, x2: 295, y2: 200 },
        37: { y: 672, x: 311, x2: 466, y2: 819 },
        38: { y: 1, x: 149, x2: 416, y2: 198 },
    },
    paths: {
        1: "M877.3 1118.2l-0.2 0.4 0.3 0.5 0.7-0.1 0.4 1-0.1 0.4 0.3 0.9 0.1 1-0.1 1.2 0.4 0.3 0.6 1 0.1 1.3-0.2 0.4 0.5 0.5 0.2 0.7-0.6 0.7-0.3 0.7 0.2 0.4-0.6 0.3 0.1 0.7-0.2 0.5 0 0.7 0.5 0.3-0.4 1.2-0.4 0.3-0.6-0.7-0.5 0-0.3 0.5 0.1 0.7-0.7 0.9-0.7-0.3 0.2-1.5-0.4-0.2-0.5-0.8 0.3-0.4-0.7-0.6 0.2-0.6-0.6-0.9-0.4 0-0.3-0.6 0.3-0.4-0.2-0.8-0.5-0.3-0.3-0.8-0.5 0.1-0.3-0.7-0.4-0.3-0.6 0.2-0.1-1 0.1-1.3-0.3-0.2-0.2-1.4 0.7-0.5 0-1.2 0.4-0.5 0.9-0.1 0.7 0.2 0.7-0.8 1.8-0.1 0.1-0.5 0.6-0.3 0.7-0.1z m-4.6-7l0.3 0.8 0.1 0.8 1.1 0.8-0.1 0.5-0.4 0.4-0.6 1.3-0.6 0.2-0.9 0.7-0.4 0.8-0.7 0.6-0.7-0.9 0.2-0.7-0.3-0.6 0.4-0.5-0.2-1.4 1.1-0.7 1.5-0.4 0-1.5 0.2-0.2z m-11.4-20l1 0.6-0.2 1.1 0.6 0.5 0.3-0.3 1.1 1.1 0.4 1.4-0.4 0.8-0.7-0.9-0.8-0.3-0.7 0.2-0.7 0.7-0.7-0.3-0.4-0.4 0.1-0.8-1-0.6-0.2-0.7 0.4-0.5 0-0.5 0.4-0.7 0.7 0.1 0.8-0.5z m5.7-0.2l0.6 0.2 0.7 1.1-0.2 2-0.2 0.2-2.2-2 1.2-1 0.1-0.5z m1.1-3.3l0.4 0.5 0 1.5 0.4 0.8-0.3 0.2-0.7-1 0.3-0.5-0.4-0.3-0.3-1 0.6-0.2z m-1.8-3.7l0.6 0.2 0.1 1-0.7 0.9-0.5 0.2-0.2 0.7 0.7 0.9 0.2 0.7 0.6 0.4 0.1 0.7-0.4 1-1.1 0.1 0 1.2-0.6 0-0.1-1.3 1.3-0.6 0.1-0.7-0.4-0.3-1.1 1.1 0-0.9-0.9-1.6-0.1-1.7 0.7-0.4 0.5-0.4 0.1-0.9 1.1-0.3z m-9.9-1.1l0.6 1.2-0.5 0.3-0.6-0.8 0.5-0.7z m-3.7-3.2l0.5 0.4-0.4 1.2-0.1 1.1 0.9 1.2 1.4 0.7 0.4 0.4-0.4 0.7-1-0.3-1.4-0.7-0.8-0.9-0.5-0.9 0-1.2 0.3-1.1 1.1-0.6z m-2.9-4l0.5 0.4-0.2 0.8-0.6-0.5 0.3-0.7z m19.6-3.5l0.2 1.5 0.4 0.2 0.3 2-0.6 0 0-1.7-0.5-1 0.2-1z m-28.3-23.2l0.9 0.9 0.4 0.9 0.2 1-0.3 0.9-0.4 0.5-0.8 0.2-0.6-0.3-1.3 0.1-0.4-0.8 0-2.3 1.5 0 0.8-1.1z m-9.3-57.3l1.5 1.2 0.1 1.8 0.9 0.8-0.2 1.6 0.5 1.2 0 0.8-0.7 0.5 0.1 0.4-0.9 0.7-0.4 0.9 0.1 0.7 0.7 0.2 0.1 0.4-1.2 1.6-0.1 0.4-1.1 0.2-0.6-0.2-0.6-0.6-1-0.5-0.5 0.1-0.6 0.5-0.6-0.4 0.9-1.4 0.4-1.1-0.5-1.2-0.4-0.6-0.5 0 0.1-1.8-0.2-0.7-0.1-1.5 0.7 0.1 0.6-0.3 0.6-1.2 0.9-0.6 0.1-0.8 0.7-0.3 0.4-0.6 0.8-0.3z m4.3-21.3l0.9 0.7 0.6 1.9-0.7 1.4 0.9 0.2 0 0.7-1.8 0.8-1.3 0-0.7-0.7 0.4-0.5-0.1-0.7 1.2-0.2 0-1.2-0.4-0.6 0.1-1 0.6-1 0.3 0.2z m-1-2.8l0.2 0.8-0.6-0.1 0.4-0.7z m-13.4-0.1l0.7 0 1 0.3 0 1 0.2 0.7-0.5 0.6-0.4-0.3-1.1-0.1-0.3-0.6 0.4-1.6z m10.9-0.4l0.2 0.3 0.8 0.1-0.1 0.6-0.4 0.5-0.5 0-0.2-1.2 0.2-0.3z m16.5-8.4l0.4 0.3 1-0.3 0.3 0.3-0.7 0.8-1.2-0.6 0.2-0.5z m-14.5-4.6l0.3 1.1-0.3 0.2 0-1.3z m12.7-2l0.5-0.3 0.7 0.5 0.1 1 1 1.8 0.6 1.8-0.3 0.4-0.7-0.1-0.1-0.5-1.1-1.7-0.6 0.1-0.4-1.1-0.9-0.2-0.1-0.7 0.7-0.3 0.6-0.7z m0.8-2.6l0.4 0.1-0.2 2.1-0.3 0-1-0.9 0-1.3 1.1 0z m1.2-1.7l-0.1 0.6 0.4 0.5 0 1 0.6 0.7 0 0.6-0.4 0.5-0.6-0.9-0.6-0.2 0-1.1-1-0.2-0.5-0.3-0.3-0.7 0.3-0.3 1 0.4 1.2-0.6z m1.4-1.9l0.6 0.6 0.3 1.6-0.2 0.6 0.1 0.8-0.3 0.7-0.5 0-1.1-1.6 0.7-2 0.4-0.7z m-12.6-0.8l0.2 0.2 0.3 2.1 0.8-0.5 0.7 0.2-0.1 0.8-0.6 1.5-0.1 0.8 0.6 0.6 0.8 1.4-0.5 0.4-0.7-0.5 0.6 1.6-1.1 0.5-0.3 0.8 0.5 1.8 0.5-1.2 1-0.2 0.4 0.5-0.3 1.1 0.3 0.8-1.1 5.3-0.5 0.3-0.8 0.1-0.5 0.5-0.1 0.9-0.5 0.6-0.6-0.2 0 0.8 0.8 0 0.9-1.2 0.9-0.3 0.4 0.3-0.1 2-0.8 1.8-0.2 1.1 0.2 0.3-0.7 1-0.4-0.6-1.1 0-0.6-0.6 0.1-1-0.8-0.6-0.7-0.9 0.1-1.4-0.5-1 0.2-0.9-0.4-1-0.5 0.1-0.4 0.8-0.3-1 0.1-1.8-0.4-1.9-0.7 0.1-0.4-0.8 0.4-0.8 0.1-0.9 0.4-0.3 0.1-0.6 0.8-0.7 0.5 0.5 0.2 1.4 0.9 0.6-0.2-1.8 0.2-0.6 0-2.4 0.5-1.9-0.2-0.3 0.1-1.1 0.3-0.7 0.5-2 1.4-1.9 0.4 0z m1.1-0.3l0.2 0.3 0.8 0.2 0.2 0.9-0.1 0.7-1.4-0.2 0-1.4 0.3-0.5z m5.8-0.5l0.4 0.9-1.5-0.2 1.1-0.7z m6-0.2l0.3 0.9-0.1 0.5-0.6-0.2 0.2-1 0.2-0.2z m-12.5-1.2l0.4 0.1-0.4 1.7-0.3-0.8 0.3-1z m7.8 0.6l-0.6 0.7-0.7-0.7 0.4-0.4 0.4 0.4 0.5 0z m-5.6-1.1l0.6 0.2 0.5-0.2 0.7 0.4 1-0.2 0.4 0.2 0.6 1.4-1 0.5 0.5 0.7 0.1 1.1-0.8-0.3-0.1 1.4-0.4-0.2-1.3 2.1-0.2 0.9-1 0.7-0.9-0.8 0.1-0.5 0.8-2.7 0.2-0.9-0.1-0.9-0.5-0.1-0.4-0.5 0.4-1 0.4 0.4 0.6-0.8-0.2-0.9z m36.3-0.3l0.6 0.9 0.7 0.4-0.2 0.5 0.3 1.1-1.3 0-0.5-0.3-0.4-1.4 0.3-0.8 0.5-0.4z m-33.7-3.1l0.7 0.1 0.6 0.5-0.8 0.5-0.6-0.6 0.1-0.5z m3.5-0.2l-0.4 0.5 0 0.5-0.4 0.9-0.4-0.2 0.3-0.7 0.2-1.2 0.5-0.3 0.2 0.5z m-8.3-14.5l0.1 1.9-0.7-0.8 0.6-1.1z m6.4-3l0.4 0.2-0.1 0.9 0.7 0 0.5 2 0.4 0.6-0.7 1 0.2 0.4 0.7 0.5 0.1 0.9 0.5 0.4-0.5 0.7 0.1 0.6-0.3 1.3 0 1.2 0.1 1.1 0.5 1.2-0.5 2-0.5-0.4-0.4 0.6 0.5 0.6-0.2 0.5-0.7 0.4-0.2 0.9-0.7-0.6-0.6 0.4-1.7-0.4 0.3 1.1 1.2 1.5 0.5 1.1-0.3 0.3-0.7 0-0.9 0.4-0.8-0.4-0.4 0.3-0.8-0.4-0.9 0.6-0.9 0-0.7-1.3-0.1-2.9 0.3-1.1-0.2-0.7 0.3-0.7-0.5-0.8 0.2-0.9 0.3-0.6-0.1-1.2-0.4-0.5 0.5-0.4 0.2-0.7 0.7-0.1-0.1-0.5 0.4-0.6-0.5-0.9 0.4-0.1 0-0.8-0.3-0.7-0.4-1.6 0.1-1.4 0.5 0 1.1-1.2 0.8 0 0-0.9 1.1-0.2 0.1 0.3 0.2 0 0.2-0.2 0.1 0.2-0.1 0.3 0 0.1 0.1 0 1.1-0.3 0.6-0.4 0.2-0.7z m-6.9-2.7l0.8 0.4 0 3.2-0.2 0.9-0.8 1-0.1 0.6-0.6 0.8-0.6-1.5-0.1-0.8 0.5-0.7 0.1-1.3 0.4-0.8-0.3-0.4 0.5-1.3 0.4-0.1z m10.6-0.2l-0.5 0.4-0.7 1.1-0.4 0 0-1.2 0.6 0.3 1-0.6z m-2.8-0.9l0.4-0.1 0.2 1-0.8-0.1 0.2-0.8z m46-15.5l0.1 0.8-0.7 0.4-0.2-0.6 0.8-0.6z m-42.4-3.8l0.3 0.9 0.1 1.5-0.2 0.7-0.1 0.9 0.1 1.4 0.5 0.5 0.4 1.5 0.6 0.7-0.3 0.7-0.6-0.2-0.5 0.2 0-1-0.4 0.2-0.8-0.3-0.9 0.6-0.5-0.8-0.3 0.5 0.2 0.6 0.6 0.1 1.2 0.6 1.1 1.7 0.5-0.1-0.1 1-0.8 2 0.1 1.3-0.2 0.4 0.2 1.3-0.2 0.8-0.8 1.3-0.6 0.2-0.6-0.1-0.4 0.5-0.8-0.9-0.3-0.8-0.4 0.3-0.4 1.1 0.1 0.8 1.1 0.8-0.4 0.7-0.6-0.2-0.1-0.7-0.9 0-0.2 0.7 0.1 0.6-0.7 0.4 0 1.1 0.5 0 0 0.7-0.5 0.2-0.2 0-0.3 0-0.1 0 0.1-0.3 0-0.2-1.4-0.3-0.3-0.5 0.3-0.8-0.3-0.5 0-1 0.7-0.1 0.2-0.6-1-0.4 0.2-1.3 0-1.4 0.8-0.4-0.3-1 1.1-0.6-1.1-0.3 0.7-2.1-0.1-0.8 0.7-0.1 0.2-0.6-0.6-0.1-0.5-0.6 0.7-0.9-0.6-0.2 0-0.7 0.3-0.4 0.1-1 0.5-0.7-0.2-0.7 0.9-0.3 0.4-0.5-0.4-0.6 0.1-1 0.9-0.1 0.1-0.6 0.8-0.2-0.5-1 0.2-0.2 1.5-0.3 0.4 0.6 0.6-0.3-0.4-0.6 0.4-0.5 0.8 0.6 0.1-0.8 0.4 0z m-0.5-3.6l0.3 0.5-0.3 0.6-1 0-0.2-0.7 1.2-0.4z m12-16.9l0.4 1.2-0.2 1-0.2 0.9-0.4-0.2 0.3-0.8-0.4-1.9 0.5-0.2z m9.4-26.3l-0.3 1-0.7 0 0.4-0.9 0.6-0.1z",
        2: "M409.5 896.6l0.6 1-0.5 1.4-0.8-1 0.2-0.7 0.5-0.7z m72.1-108.7l0.9-0.3 1-0.2 0.6-0.7 0.3 0.7-0.1 0.7-0.7 1.2 0 1.2-0.7 0.2-0.5-1.1-0.9-0.4 0.3-0.6-0.2-0.7z m1.3-0.8l-0.6-0.3-2.1 0.1-0.8-0.6-0.6 0.7 0.5 0.3 0.8-0.1 1 0.7 0.4 0 0.1 0.9-0.2 0.4 0.8 0.6 0.7 1.6-0.3 0.7-0.4 0-0.6 0.8-1.3 0.5-5.1 2.6-1.5 0.9-2.9 1.5-1.8 0.3-1.7 0.6-2.3 1.3-1.9 0.8-1.1-0.7-1.3-0.1-3-0.4-0.6-0.5-1.2 0.2-1.3 0-2.6 0.4-2.5 1-1.3 0.8-1.3 1.5-0.9 1.4-0.4 1.2-0.1 1.1-0.5 1.5-1.6 3-0.1 0.8 0.2 0.8-0.5 0.4-1.4 1.1-1.4 1.7-0.9 1-0.8 0.9-0.1 1 0.4 0.7 0 0.9-0.3 0.2-2.1 1.2-0.7-0.1-2.7 0.4-0.5-0.1-0.7-1.1 0.3-0.6-0.6-1.7 0.6-0.3 0.1-0.5-0.9-1.1-2.6-0.7-0.9 0-1.4 0.1-2.6 0.6-2 0.7-2 0.9-2.3 1.4-1.5 1-0.9 1-1.4 1.7-1.2 2.5-0.4 1.7 0.1 0.4-0.4 0.9-0.5 1.8-2.5 3.2-0.6 1.1-0.5 1.1-0.4 1.8 0.1 1.6-0.1 0.8-0.6 1.4-0.6 2.4 0.1 2.1 0.6 3.6 0.5 1.3 0.1 2.4 0.5 1.9 0.3 0.9 1.1 1.5 0.8 2.8 0.2 0.4 0.9 0.6 0 0.5-0.6 1.7-0.3 3.7-0.1 2.3-0.8 2.1-0.3 1.1-0.3 2 0 1.6 0.2 2.3 0.5 2.6 0.3 1 0.5 0.5 0.8 2.1 0.8 1.7 0.6 1.6 0.3 0.4 0.2 1.3-0.5 2.5-0.1 1.5 0.3 2 1 1.9 1 3 0.5 1-0.8-0.1-0.4-1.8-0.3-0.6-0.3-1.6-1.3-1.7-0.4-0.6-0.9-0.7 0-0.8-1.1-1.2-0.4 0.3 0.1 1.2-0.2 1.7-0.5 0-0.7-1.5-0.5 0.1-0.6 0.6 0 1-0.7 0.8 0.7 0.9 0.5 0.2 0.7 1.2 1 0.2 0.8 0.8 0.6-0.2 2 0.4 0.9 0.4 0.4 1 0.7 0.6 0.6 0 0.1 2-1.4-0.6 0.1-0.7-0.3-0.2-0.3-1.2-0.5-0.6-1-0.6-0.8 0.2-1-0.1-0.2 0-0.2 0-0.2-0.2-0.4-0.3 0-0.1-0.5-0.2-0.7-0.1-0.1-0.2-0.3-0.5-0.3-0.2-0.1 0.1-0.2-0.4-0.8 0.6-1-0.1-0.3-0.3-0.6 0.2 1 0.9 0.6 0.1 0 0.5-1.1-0.1-0.3 1-1.2 0.3 0.1 1.1-1.1 0.5 0.1 0.7 0.6 0.4-0.9 1.3-0.8 0.1-1.8 1.1-1.7-0.1-0.7 0.8-0.9-0.7-0.2 0.8-0.9 0.5 1.1 0.8 1 0.5-1.3 1.2-0.4-0.7-0.6 0-0.5 0.4-0.2-0.7-0.8-0.5 0.4-0.7-0.5-0.9-1.2 0.3-0.4 0.5-0.7-0.3-0.5 0.7-0.7 0-0.8-1.1-0.2-1.1-1.3-0.1-1.5-0.4-1.3 0.1-1.4 0.7 1 0.6 0.6-0.1-0.1 0.8-0.4 1 0.1 0.9 0.9-0.7 0.3 0.5-0.8 0.3-0.1 0.8-1.2 0-0.5 0.3-0.3 0.7-0.5-0.2 0.1 1.3-1.7 0.4-0.9-0.2-0.1-0.6-1.5 0.1-0.4 1.3-0.7 0.3-0.8 1.2 0.2 0.6-0.2 0.8-0.6 0.2-1.2-0.5-0.5 0-0.7 0.4-0.5-0.1-0.5-0.8-1.8-0.7-0.7-0.7-1.2 0.5-1.1-0.2-1.1 1.7 0-1.7-1.7 0-1-0.2-0.8 0.7-1.3 0.3-1.3-0.4-0.3 1.8-1.4-0.4-0.4 0.5-0.7 0.7 0 0.3 0.9 1.9-0.7 0.2-0.7 1.4 0 0.6-0.5 0.7 0.2 0.9-0.3 0.2-0.3 1.4-0.7 0.5-0.4 0.8 0.2 1.1-1 0.6-0.3-0.8-0.7-1 0 2.2-0.7 0.3-0.5-0.1 0 1.6-3.1 0.2-2-1.3-0.7-0.1-0.8-1.4-1.3 0.1 0 0.5-0.9 0-0.2-0.7 0.8-0.3 0.3-0.6-0.2-1.1 0.3-0.4 0.4-1.7 0-1.3 0.7-0.3 0.4 0.3 1 0.1 0-0.7 0.4-0.9 0.4 0.1 0.6-1.4 1.1 1.2 0.4-0.4 0.5 0.5 0.5 0.1 0.6-0.4 0.1 0.7 0.6 0.5 0-0.9-1.2-1.1 0.1-1.6 1.2 0.2 0.1-0.6-0.4-1.2 0-0.6 0.6-0.3 1.3-0.4-0.3-0.6 0.6-0.6 0.1-0.5-0.3-0.7 0.9-0.4 0.1-0.7 1.1-0.2-0.6-1.1 0.2-1.6 0.6-1-0.3-0.3-1.3-0.2-0.3 0.7-0.7-0.7-1-0.6-0.1-0.6-1.1 0.4-0.2-0.6-0.5 0-0.8 0.5 0.2-1.1-1.4-0.8 0.5-1.2-0.3-2.2 0.2-1.5 0.6-1.3 0.4-1.2-0.6-0.5-1.2 0.1-1.1-0.2-2.1 0.4-0.8-0.5-0.7 0.2-0.6 0.9-0.3-0.8 0.4-0.6 0-0.7-1.1-0.3 0-0.7-0.5-0.2-1.3 0.1-0.9 0.4 0-0.5-0.5-0.5-0.1-0.9 0.7 0.3 0.7-0.1 0.2-0.9-0.9-0.8 0.9-1 0.3-0.6-0.4-0.9 0.3-0.6-0.4-1.2-1 0-0.2-0.6-1-0.5-0.1 1.2-1.8-0.4-0.6 1.5-0.6-0.2-0.3-1.6 0.3-0.5 1-0.3-0.2-1.1 0.2-0.8-0.6-0.1-0.4 0.8-1.3 1.1-0.7-0.5-0.1-0.7-0.9 0.2-1.6-0.2-0.3 0.5 0.2 0.8 0.3 0.2 0.2 1-0.8 0.7-1 0.3-0.2 0.8-1.4 0.3-0.5 0.4 0 1.8-0.6-0.8-0.9 0.3 0.1-0.9-0.8 0.1-1.1 0.5 0 1.1-0.7-0.5-0.5 0.5-1.1 0.3-0.3-0.8-0.7 0 0.3 1.3-0.2 0.7-0.5-0.1-0.2-0.5-0.7 0 0.1 0.6-0.3 0.3-0.9 0.1-0.1-0.7 0.4-0.6 0.2-1.1-0.4-1.5-0.4-0.6-0.4 0.5-0.7-0.4 0.6-0.9-1.8-0.2-0.7-0.4-1.1 0.6-0.4-1.1-0.8 0.4-1.2 0.2-0.3-1.9-0.5 0-1.1 1.3-0.6-0.1 0.2-1.4-0.2-0.6-0.7 0.6 0.3 1.2-0.9 0.2-0.4 0.6 0.7 0.3 0.5 0.7-0.3 0.5 0.6 1-0.1 0.6-1.5 0.1-1-0.3-0.5 0.3 0 0.5-0.7 0-0.8-1.1-0.5 0-0.3 1.3-0.7-0.4-0.4-1.5 0.1-0.6-0.5-0.2 1.3-1.4 0.4-1.6 0.8-0.1-0.2-1-0.9-0.8-0.7-0.3 0.2-0.9-0.7-0.5-0.9-0.4-0.6-0.5 0.3-0.9 1.1-0.2-0.1-0.9-0.6-0.2-0.3-1-0.7-0.6-0.3 0.3-1-0.3 0.3-1 0.8 0 0.7-0.3 0.2-0.8 0.6 0.5 2.1 0.1-0.3 1.6 0.1 0.7-0.2 0.5 0.5 0.3 0 1.1 1.5 0.2 0.8 0.3 1-0.1 0.5 1.5 0.6 0.3 0.6-0.6 0.8 0.2 0.8-0.2 0.9 0.1 0.9-0.8 0.3 0.7 0.8-0.7 0.4 0.1 0.7 1.3 0.7 0.2-0.4 1.1 0.7 0.3-0.7 1.1 0.2 0.5 1.4 0 0.2 0.6 0.8-0.5-0.4-1.5 0.7-0.2 0.1-0.9-0.4-0.3-1.1 0.1-0.5-0.3 0.4-0.9-0.8-0.3-1.2-0.2 0.4-1.1 0.4 0 0.8-0.6 0.2-0.7 0.6-0.5-0.2-0.5-1.3 0.5-0.1-0.7 0.9-0.2 0.5-1.2 2.5 0 1.3 0.5 0.3-0.8-0.7-1.9 0.3-1.2-0.7-0.8-0.8 0.4-0.4-0.2 0-1.1-0.6-0.4-1-0.3-0.6 0.4-0.1 0.8 0.5 1.2 0.4 0 0.4 2-1 0.4-0.3-0.8-0.7-0.5 0.1-1.4-2.7-0.2 0.1-2-0.8 0.2-0.5 0.4-1.6 0-1.5-0.8-0.7 0.2-0.2 1.1-0.5 0.5-0.2 0.9 0.3 0.1-0.2 1.3-0.5 0.4-0.7 0-0.8-1.1-0.6 0-1 0.3-0.7-0.2-1.1 0.1-0.4-0.2-0.5-1.1 0.7-0.3-0.1-0.9-1.5-0.5-0.7-1.1 0.2-1.4 0.4-0.1 0.6-0.7 1 0.5 0.1-1.6 0.5 0 0.5-1.2-2.3-0.2-0.9 0.5-0.6-0.1-0.7-1.3-1.5-0.6-0.4-0.9-0.3-0.9-0.6-0.6 0.4-2.8 0.9-2.1-0.6-1.6 1.8-0.2 0.2-1.6 0.3-0.3 0.1-0.8-0.2-1 0.5 0 0.2-1.7-0.1-0.9-0.7 0.1-0.5 0.3-0.4-0.4-0.7 0-1.1-0.2-0.2-0.5 0.9-1.2-0.4-1.3 0-0.4 0.8-0.9 0.9 0.6 0.5 0 0.8 0.6 0.6 1 1.2-0.1 1.3 0.2 0.5 0.4 1.2-0.5 1.6 0-0.2 0.8 1.3 0.2 0.1-0.8 0.9-0.2 0.6-1.4 0-0.9 0.7-0.5 0.2-0.8-0.6-0.2 0.1-0.5 0.7 0 0.2-0.6-0.2-0.9-0.6-0.9-0.7-0.1 0.7-1.1 0.8 0-0.6-0.7 0-0.5-1.1-0.1-0.2-1.4-1.4 0.3-0.2-0.6-0.8-0.8 0.2-0.9-0.5-0.6-0.1-1.2-0.7-0.5-0.4-0.6-0.8-0.9 0-0.5 0.8 0.2 1.1 0 0.1-0.9-0.2-1.8 0.2-0.8-0.1-1.1 1.4-0.4 0.5-0.4 1.1 1 0.3-1.2-0.8-0.7-0.8-0.5 0.3-0.6-0.3-0.4-1-0.2 0-0.9 0.5-1 0.1-1.5-1.3-0.1 0.2-1 1.5-2 0.9-0.5 0.9-0.3 0.5-0.3 1.2-0.4 1.9 0 0.5-0.2 1.1 0.3 2.5 0.2 0.7 0.3 1.1 0 0.6-0.3 1.4 0.5 1.5 0.3 2.7 0.5 0.6-0.2 1.1 1 1.5 0.4 1.1-0.5 2.9 0.8 1.2-0.4 0.7 0 0.4-0.6 0.7-0.1 1.4 0.7 1.5 0 1 0.6 0.5-1.3 0.8-0.1 0.3 1 0.5 0.9 1.3 0.6 0.9-0.3-0.1-0.5 1.3 0 0.6-1.3 0-0.5 0.8-0.6 0.8-0.2 0.5-0.5 0.2-1.1 0.4-0.9-0.3-1.1 0.6-0.4 0.8 0.3 0.8-0.1 0.8-0.8 1.1-0.3 1.2-0.7 1.5 0 1.5 0.3 2.2 0.6 1.5-1.5 1.2 0.2 1 1.3 0.7 0.5 0.9 0.5 0.9 0.2 1.2-0.1 1.1-0.8 1-1.4-0.2-2.3 0.9-0.3 0.3 0.6 0.2 1.2 1 0.4 0.7-0.9-0.6-1.5 0.1-0.9 1.8-0.9 1.1-0.4 1-0.6 0.7 0 0.9 0.2 1.9 0 1.8 0.8 1.1-0.5 0.6-0.7 0.1-1.8 0-1.3-0.6-0.9 0.3-2.7 0.5-0.7-0.4-1.2 0.2-1 1.1-1 0.2-0.5 1.8-0.5 0.9-0.1 2.7-0.2 0.6-0.3 0.3-0.6 1.6-0.8 1.3 0 1.3-0.4 0.9-0.7 1.6 0 0.3-0.4 0.9-0.6 1.4-0.1 0.9-1 0.8-0.3 0.3 0.2 0.9 1.2 1.8-0.3 0.4 0.4 0.6 1.4 0.4 0.4 0.7 0.2 0.7 0 1-1 0.6-1.2 0.9-0.7 1.1-1.1 0.1-1 0.6-1.5-1-0.4-0.2-1-0.7 0-0.8-0.4 0.6-1.5 1-1.1 0.3-1 1.3 0.1 0.1-0.9 0.6 0.2 1-0.1 0.3-0.6 0.8-0.8 0.5-0.7 0.5 0 0 0.9 0.8 0 0.8 0.6 0.7-0.3 1.3 1.9 0.4 1.6 0.2 1.5 0.6 0.5 0.8 0 0.5 1.6 0.9-0.7 0-0.7 0.6 0.3 0.2 0.4 1 0.5 0.1 1 1.1 0.5 2.5 0.4 1.2-0.8-0.4-0.7-1-0.7 0.2-0.4 0.1-1.2 0.8-0.1-0.2-1.1 0.1-0.8-0.5 0-1.3-0.9-0.4 0.5-1-0.4-0.5 1-1.2-0.9-1.5-0.4-1.3-0.5 0.4-0.9 0.6-0.6-0.7-1.6 0.9-0.7 0.2 0.8 0.7 1.1 0.9 0.2 0.2-0.7 0.6 0 0.5-0.7 0-0.9 0.4-0.7 1.8-0.8 0.3-0.5 1.2 0.7 1.2 0.3 0.9 1-0.6 0.4 0.4 0.6 1.2-0.5 1.4 0.1 0.7 0.4 2.6 0.6 0.3 0.4 0.9-0.9 0-0.6 0.2-1-0.3-0.5 0.4-0.5 0.1-0.8 0.7 0.2 0.8-0.2 0.1-0.8-0.4-1.1 0.9-0.2 0.9 0.6 1 0.3 1.4-0.2 0.6-0.7 0.6 0.1 0.8-0.4 2-0.6 0.6-0.1 0.6-0.7-0.3-0.5 0-1.4 0.7-0.7 0.9 0.2 1.7 0 0.7-0.6 1.2-1.9 0.7 0.2 0.2 0.6 1.2 0.5 1.1-0.3 0.1-0.3 0.7-0.4 1.8-2.4 0.3-3.2 0.8-1.2-0.8-0.6 0.3-0.8 0.8-0.7 0.7-1.3 0.6-0.8 0-1.1 0.3-0.4 1-0.5 0.4-0.6 1.8-0.2 0.8-0.6 0.2-0.6 0.9-0.7 0.8 0.1 0.4-0.4 0.6-0.1 0.4-0.5-0.4-0.9-0.8-0.8 0.9-0.7 0.5-0.9 1.1-0.5 0.5 0 1.8-0.6 0.5-0.4 0.7-0.2 2.3-1.4 0-0.8 0.8-0.4 0.7 0.4 0.5 0 0.4-0.7 0.7 0.5 1.2 0.1 0.1 0.5 1.1-0.2 0.5 1.1 0.6 0 0.8 0.6 0.6 0 0.2 0.5 0.8-0.3 0.2-0.8-0.5-0.9 0.3-0.5 0.7-0.4 0.6 0.7 0.6-0.4 0.5 0.2 0.2-1.3-0.3-0.4 0-1.8 0.8 0.7 0.3-0.6-0.6-0.8-1.3-0.4-0.1-0.8 0.9-0.7-0.1-0.6 0.2-1.2 1.1-0.2 0.5-0.5 0.3-0.8-0.3-0.4-1.3-0.1 0.5-0.8 0.6-0.3 0.2-0.7-0.7-1.4 0.5-0.4 0.7-1.1 1-0.9 0.3-0.7 1.3-1.5 0.3 0.8 0.5 0.4 0.9 0 0.1 1.3-0.4 0.5 0.5 0.4 0.8 0.2-0.6 1.1 0 0.6 0.7 0.1 1.5 0.8-0.3 1.7-0.2 1.4 0.1 0.8 0.7 0.3 0.8 0.7 0.5-0.5-0.1-0.5 0.7-1.2 1.2-0.2 0.1-0.4 1.1-0.2 0.6-0.5 0.5-0.1 0.6-0.9-0.2-0.6 0.3-0.7-0.4-1 0.8-0.7 0.7 0.2 1.7 0.9 0.5-0.2 0.2 0.8-0.2 0.4 0.6 0.9 0.9-0.2 0.2 0.3 0.9-0.2 0.6 0.1 0.5-0.7 0.7-0.1 0.9 0.2 0.6-0.2 0.3-0.5-0.8-1-0.2-0.6-0.7-0.4 1.2-1.1 0.8-1.4 0.5-0.6-0.6-0.4-0.7 0.3-0.6-0.5-0.3-0.5 0.4-0.5-1-0.4 0.5-0.6-0.3-1.2 1.3-0.6 0.9-1.8 0.4-0.3 1.5-2.1 0.6 0.5 0.6-0.1 0.6 0.6 1.3-0.2 0.5-0.4 1 0.1 0.4-1.2 0.9-0.3 0.6 0 1.3-0.3 0.4-0.5 0.9-0.4-0.1-0.6 0.5-0.4-0.8-0.4-1.4-1.8 0.6-0.3-0.1-0.9-1.2-0.1-0.4-0.4-0.2-0.8 0.7 0.1 0.2-0.7 0.7-0.1 0.2 0.5 0.9-0.2 0.7 0.2 0.2 0.6 1 1.1 0.7-0.4-0.5-0.8 0-0.6 0.9-0.1 0.1-0.9-0.4-0.4-0.2-1.2 0.6-0.2 0.5 0.8 0.4-0.4 0.3 1.4-0.7 0 0.1 0.5 1.2 0.2 0.1-0.8 0.6-0.8 0.9 0 0.1-0.9 0.8-0.6-0.3-1 0.8-0.8 0.9 1 0.4 1 0 0.4 0.9 1.2 0.6 1 0.2 1.1 0.7 0.3 0.6 2.1 0.9 0.6 0.2-0.6-0.5-1-0.4 0.1-0.3-1.5 1.6-0.8 0.9 2.1-0.1 0.5 0.8 0.9 0.2 0.8-0.2 0.5 0.3 0.8 0.7 0.5 0.2 0.7 1.3 0.1 0.8 0.3 1.7 0.3 0.9-0.2 1.4 0.8 0.6 1.1 0.8 0.2 1.5-0.7 0.9-0.3 0.7 0.2 1.2-0.7 1 0.5 0.5 0 0.8-0.6 0.6 0.3 1.1-0.4-0.1-0.6 0.5-0.1-0.4-1.8 1 0.4 0.8-1.1 0.8-0.3 0.7-0.8-0.5-0.9 0.9-1.1-0.2-0.3-0.3-0.3-0.1-0.2 0-0.2-0.3-0.6 0.2 0 0 0.1 0.6 0.4 1.1 0.6 0.2-0.4 0-0.5 0.4-0.5 0.3-0.2 0.4-0.4 1.3-0.3 0.4-0.5 0.3-0.2 0.1 0.2 0.3-0.1-0.2 1 0.5 0.8 0.4-0.7 0.3-0.5 0.1-0.2 0.4-0.2 0.1 0.1 0.1 0.2 0.2-0.3 0.4 0 0.3 0.2 0.3-0.5-0.7-0.7-0.3 0.3-0.4 0.1-0.2-0.6-0.4-0.1-0.3-0.8 1.1-0.2 0.6 0 0.5-0.1 0.2-0.4-0.1-0.8 0.6 0.2 0.5 0 0.2 0-0.2 0.9-0.1 0.1 0.2 0.5-0.1 0 0.8 0.5 0.4 0.2 1 0.7-2.5 3.5-0.8 0.3 0.2 0.5-1.9 1.8-0.9 1-0.4 1.3-0.7 0.7 0 0.8-0.8 0.9-1.4 1.1-1.7 2.2 0 0.6-2.7 2.7-0.2 1.1-2.4 2-2.3 2.2-2.3 2.3-0.9 1.8 0.1 0.5-2 1.3-2 1-2.1 1.2-2.2 0.7-0.8 0.7-2.6 1.1-2.5 1.3-1.5 0.9-0.9 0.8-2.5 1.7-0.3 0.6 0 0.5-1 1.3-1.5 0.8-1.2 0.9 0.1 0.5-0.4 0.5-0.8 0.6-0.3 1.7-0.7 0.6-0.2 0.5-1 0.8-0.5 1.2-0.9 0.5-0.5 0.5-0.1 0.7-1.3 1.1-0.6 0.4-0.2 0.8-0.7 0.6-1.3 0.7-0.5 0.5-2 0.6-0.8 0.4-1.6 0.7-0.9 0.5-0.7 1.1-1.1 0.3-1 0.6-1.4 0.6-0.5 0.4-1 0.3-2.8 1.3-1.9 1-2.7 1.6-3.1 2-1.4 1-1.8 1.5-3.7 3.6-0.9 1.1-0.9 1.7 0.2 0.6-0.5 0.7 0.1 0.6-0.7 0.2 0 1 0.6 1.1 0.4-0.1 1.1 0.8 0.8 0 0.8 0.3-0.3 0.9 0.2 0.4-0.5 2.1 0 0.6-0.8 0.1-0.7 0.7z",
        3: "M924.8 419.9l-0.1-1-0.7-0.8 0.1-0.8 0.8-1.1-0.9-0.5-0.6-1.6-0.5-1 1-0.8 0.6 0 0.1-1.3-0.5-0.5-0.4-1.1 0.3-0.3-0.7-0.8 0.2-0.6-0.2-1.4 0.6 0.3 0.9-0.3 0.3 0.5 1-0.8 0-0.2 1.1-1 2-1.2 1.3-0.2 0.5-0.5 1.3-0.2 0.3-0.7 0.1-1.4-0.4-0.7 1-1.4 1.6-1 1.4 0.8 0.5 0.8 1.6-0.3 1.6-0.7 1.4-0.1 0.2-0.3 1.8-0.5 0.9 0 1.7-0.6 0.4 1.1 0.9 0.1 0.3-1.1 1.9-0.9 0.3-0.8 0.8-0.6 0.7-0.9-0.5-1.1-0.9-1.2-1.4-0.4-0.7 0.2-0.4 1.1-0.6-1.2-0.6 0.6-0.5-0.1 0.3-1.2 0.6-0.4 0.1-1.1 0-2-0.6 0-1.4-1.1 0.1-0.8-0.9-0.2-0.4-1 0.5-0.6-0.7-0.5 0-0.7 0.4-0.5-0.7-0.3 0-0.8-0.5-0.4 1-0.4-0.2-0.6 0.7-0.7 0.8-1.3 0.9-1 0.9-0.3 1.6-1.7 1.1-1.5-0.1-0.6 0.8-1-5.2-0.4-7.4 0.8-0.7 0.6-0.5 0-0.3 0.7-0.7 0.4-0.9 1.2-4.5 1.5-2.3-1.1-2.8 0.9-6.3 2.2-0.4 0.5-1.8 0.3-1.9 0.5-1.6 0.6-0.8 0.1-0.4 1.1-1 0.6-0.8-0.1-1.8 1.3-0.8-0.2-0.8 0.1-1.7 1-0.3 0.4-1.6 0.3-0.6 0.6-1.6 0.4-0.9 0.7-1.6 0.3-1.1-1.2-0.6 0.6-0.6-0.1-0.7 0.5-1.8-0.5-0.9-0.1-1.1-0.9 0.3-0.8-1 0.1-0.7 1.1 0.3 0.1 0.1 1 1.1 0.7 0 1.4-2.1 0.9-1.3 0.8 0.1 0.4-2.6 2.4-0.8 1.6-2.1 1.1-1.5 1.5-0.6 0.8-1.3 1.3-1.1 1.6-1 1-0.4 0.1-0.7 0.8 0 0.6 0.6 0.6 0.1 0.7 0.3 0.8-0.9 0.4-1.4 1-1.7 0.9-1.5 1.8-1.7 0.3-1.4 0.4-2 0.2-1.2 0.4-0.8 0-0.7-0.6-3.4-0.4-2.7 0.3-1.6 0.3-1.3 0.4-2.5 0.4-0.6 0.5-0.8-0.4-1.7 0.3-0.7-0.5-2.8-1.3 0-0.8-1.5-0.9-1.2-0.2-2.3-0.7-1.9 0.2-1.9-0.4-0.5 1 0 0.9-2 1-1.1 0.1-1.7-0.3-2 0.2-0.7 0.7-0.4 0-0.4 0.7-1.6-0.4-1.8 0.4 0.1 0.6-1 0.3-0.7-0.4-2 0.8-2.6 0-0.4-0.1 0.3-1.5-0.1-1.6-0.4-0.3 0-1-0.8-0.5-0.1-0.7-0.4-0.5-0.7 0-0.5-1-0.2-1.4 0.4-0.9-0.4-0.6 0.1-0.7 1-0.6 0.5-1.3-0.2-0.9-0.8-0.6 1-0.6 1.1 0.3 0.6-0.3-0.1-0.6-1.3-0.7-0.7-0.6 0.1-0.7-0.4-0.5-0.1-0.8 0.3-0.8-0.5-0.5-0.1-0.9-0.5-0.2-0.2-0.7 0-0.8-2.7 0.7-0.5-0.4-0.9 0.1-1.7-0.5-0.7 0.5-0.6-0.1-1.2 0.3-0.6-0.3-1.5-0.1-0.1-0.6-0.7-0.5-1.2 0.8-0.4-0.6-0.8-0.6-0.3-1.1-0.5 0.1-1.2-1.7 0.6-0.6-0.7-1.3 0.3-0.7 0.8-0.8 0.1-0.4 1.1-0.9 0.2-1.6 0.3-0.4-0.3-0.5-0.1-1.2-1-0.7-1.1 0.2-0.7-1.2 0.8-0.6 0.8 0 0.5 0.3 2.1-0.1 0.9 1.3 0.5 0.3 1.2 0.4 0.9 0.1 1.1-0.3 0.8 0.1 0.2 1 0.4 0.2 0.5 1.5 0.7 0.6 1-0.2 0.3 0.4 0.9-0.5 0.4-0.8 1-0.8 1.8 0.5 0.6-0.1 1-0.8 1.2-1.1 1.2-1.1 1.5-0.7 1.9-0.2 0.4 0.3 0.6 1.8 0.8 1.1 2.5-0.6 0.1-0.8 1-0.3 1.1 0.8 0.3-0.1 1.3-1.3 0.8-0.1 1 0.9 0.5-0.2 0.9-1.3 0.7-0.8 2.2-0.9 1-1.3 1.4-2.2-1.6-2.2-1.1-0.6 0.6-2.1 0.9-0.8 1.1-0.5 1.5-1.3 0.6-0.7 0.7 0.2 0 0.9 2.6-1.2 0.6-1.2 1.7-1 0.8 0.4 0.5 0.8 1.1-1.3-0.4-1.4 1.7-0.3 0.8 0 1-0.7 1 0.3 1.4 0 1-0.9-0.2-0.8 0.5-1.5-1.4-1-0.3-0.5 0.8-0.5 0.8-1 1.6-1 0.4-1.5 0.6-0.9-0.2-1.3 0.9-0.4 0.2-0.9 2.7-0.8 1.2-0.9 0.9 0.9 0.2-0.9 0.6-0.3 0.8 0.4 0.2 0.5 2.8 0.2 1.1-0.2 1.6-0.7 1.5-0.4 1.5 0.8 2.4-1.5 0.7 0.1 1.3 1.1 1.1 0 0.7-1.1 0.3-0.7 0.1-1.1 1.1-1-0.5-0.9 0.5-0.8-0.2-0.8 1.2-0.5 0.5-0.8 1.2-1.2 2-1.4 0.6-0.6 0.1-0.7 0.5-0.7 0-0.6 0.4-1.3 1-1.7 1.5-1.3 1-1.2 2.2-0.1 0.4-0.3 0.3-1.3 1.4-0.8 0.6-0.6 2.2 0.4 1.3-0.1 0.8-0.4 0.5-0.8 0.1-1 1.3-1 0.2-0.5 0.3-1.4 0.5 0.1 1.2 0.8 1.2 0.9 1.9 2 0.8 1 0.2 0.7-0.1 1.1 0.1 0.6 1.7-0.7 0.9 0 1.6 0.8 1.6 0.1 1.5 1.1-0.2-1.5 1.2 0.7 2 0.4 0.8 1 1.9 0.3 2.5 0 0 1.6 0.5 0.4 1.3-0.2 1.4 0.7 2.3 0.4 0.3-0.2 1.2 0.1 1.1-2 0.1-1.4 0.4-0.7 1.5 0.5 0-2-0.3-1.1 0.3-0.3 1.4 0 0-1 0.4-0.8 1.1 0.5 1.4-0.8 1-1.2 0.9-0.1 0.5-0.5 0.1-0.5 1.1-1.1 0.5 0.8 1.2-0.7 0.4 0 1.4-1.4 2.6 0.3 1.3-1.1 0.7-0.4 1.4-1.5 0.8-0.2 0.5 0.3 0.7 1.1 1.2 1.2 1.2 2.1-0.1 1.4 0.7 0.6 0.3 0.7 0.8 1.3 0.6 0.4 1.4-0.1 0.7-1 1.1-0.3 0.6-0.7 0.4 0.1 0.6 1-0.2 0.9-0.5 0.7-0.5 1.4-0.4 0.4-1.3 0.1-1.6 0.3-0.4 0.4-1.1 0.5-0.6 1.2-1 0.8-1.6 0.2 0.9 1.1 0.5 1.3 0.7 1.2-0.1 0.8-0.9 0.5-0.3 0.7 0.6 0.6 0.1 0.6 2.1-0.9 0.7-0.5 0.2-0.6 1.3-1.6 1-0.5 0.8-0.8 3.1-0.2 0.8-0.3 0.6-0.6 1.6-0.7-1.6 3.3 0.3 1.1 1.2 0 0.1 0.7 0.5 1.1-0.1 1.4 1.6 2.4 0.9 1 0.2 1.2-1 1.7-0.9 0.4-0.9 0-1.5 0.9-0.6 0.2 0.8 1.6-0.8 0.8-0.9 0.6-0.8 0.8-0.5-0.3-0.2 1.2-1.6 0.1-1 1.2 1.2 0.8 0.4 0.5-0.2 0.6-1.1 0.7-2.3 1.8 0 0.2 1.3 0.3 0.5 0.7 1.8-0.3 0.3 1.1 0.6 0.8 0.8-0.3 0.3-1.5 0.9-1.1 0.8-0.2 1 0.2 1.4-0.9 0.3-0.4 1.3-0.5 2.3 0 0.6 0.5 1.2 0.8 0.6 0 0.8 0.6 0.5 1.6 1.8 0.3 0.9 0 0.3-0.4 1.3-0.3 0.7 0.9 0.2 0.7 0.9 0.2 0.8 0.6 0.7 0.3 0.9-0.4 1-1.2 1.4-0.5 1.1 0.5 1.2 1.2 0.3 0.9 0.8 0.3 1.1-0.2 0.6 1 1.4-0.1 0.8 0.5 0.2 0.5 0.7 0.1 1.4 0.9 0.9 1-0.3 0.3-0.7-0.3-1.4 1.4-0.2 0.6 0.5 1.1-1 1 0.1 0.9 0.7 0.2 1.1-0.1 0.4 1.1 0.8 0.2 0.4 0.7-0.7 0.2-0.4 1-0.1 1.6 0.4 0.5-0.3 0.5 0.3 0.8-0.8 0.5-0.7-0.4-0.8 0.2 0.1-0.9-0.5-0.7-1.8 0.8-0.7 0.8-1.1 1-1.5 1.6-0.8 0.3-0.4 0.6-0.8 0.2 0.1 0.7-0.3 1-0.9-0.4-1.1 0.3-0.7 0.5-0.4 1.1-0.7 0.8-0.2 0.7-0.7-0.1-1 0.7-0.3 1-0.8 0.4 0.1 1 0.5 0.2 0.1 1.2 0.7 1.1-0.8 1.6-0.1 1 0.8 0.4 0.2 0.9 0.9 0.5 0.3 0.7-0.2 0.4 0.5 0.9 0.5 0.3 0.2 1 1.2 0.8 0.1 0.7 1.3 1.4 0.5 0.2 0 1 0.7 0.5 0.4 0.9 0.8 0.3 0.6 0.9 0.1 0.7-0.5 0.4-0.4 0.9-0.5 0-0.7-0.7-1.1 0.4-0.5 0-1.1-1.2-1.1-0.5-0.5-0.5-1-0.2-1.2-0.1-1.8-0.9-0.1-0.8 0.9-0.7-0.2-1.1-0.6-0.1-0.4-0.4-0.2-1-0.4-0.2-0.7-0.7-0.5-1-1-0.4-1.1 0-1-0.6-0.6 0.6-0.8-0.3-0.8 0.2-0.9-0.2-0.8 0.6 0.1 0.5-1.3 0.7-1.1 1.1-1-0.4-1-0.2-1.3 0.1-1.4 0.6-1-0.2-0.5 0.5-1.3-0.6-0.7 0.3-0.4 0.6-1.5-0.2-0.6 0.6-0.7 0.2-0.5 0.4-0.6 0-1.7 0.8-0.5 0.1-0.5 0.5-1.7 0.8-0.6 1.6-1.3 1.7-0.8 1.6-2.7 1.8-0.7 0-0.6 0.2-0.8-0.2-1.2 1.2-0.7 1 0.1 0.7-0.4 0.6 0.1 0.9-0.8 0.7-0.9 0.1-1.1-0.9-0.7 1-0.5 0.2-0.2 1.1-0.7 1.1-1.2-0.2-0.4-0.4-0.6-0.1-1.1 1-0.4 1.2-0.6 1-0.7 0.2-1.4 2-0.6 0-1.4 0.8-0.6 0-1.5 0.8-1.1-0.3-0.4-0.9-0.7 0z",
        4: "M741.5 463.6l0.2 0.4-0.1 0.5 0.2 1-0.4 0.4-0.4 0.1 0.2-1.6 0.3-0.8z m181.8-57.3l-1.4 1.4-1.3 0.9-0.2 0.6-0.8 0.5-1.7 0.6-0.5 0.5-1.2 0.3-1-1-0.8 0.2-0.7-0.2-0.9 0.4-0.6 0.7-0.6 1.3-1.1 1-0.2 1.1-0.4 0.8-1 0.4-0.6 0.9-0.3-0.4-0.5 0.7-1.6 1.2-1.1 0.3-1.1 0.1-0.4-0.7-0.5 0.5-0.1 0.9-1.6-0.3-0.8 0.4-0.2 0.5-0.6 0.5-1 0.2-0.5 1.1-1.5 0.9-0.1 0.6 0.3 0.7-0.7 2-0.6 0.7-0.9 0.1 0 0.5-0.9 0.6-0.3 0.7-0.8-0.7-0.2-1.1-0.2-2.1-0.6 0.8-0.8 1.2-1 0.8-0.3 0.8-0.5 0.4-0.4 1.1 0.1 1.6-0.5 1.1 0 0.8-0.9-0.1-1 0.6-0.2 0.6-1.1 1.9-0.6 0.2-0.4 0.8-0.2 1.2-0.8 0.6-0.4 1.1 0.2 0.4-0.7 2.4 0.2 0.4-0.9 1.2-0.3 1.3 0 1.3 0.4 0.5 0.5 1.3-0.8 0.8-1.5 0.7-0.7 0.8-0.4 0.7-1.1-0.6-0.9 0.6-0.2 0.8-0.8 0.4-0.5-1.2 0.6-2.4-0.4-1.8-0.6 0.1-0.6 0.7-2.2 1 0.1 0.8 0.6 1.4-0.8 0.4-0.2 0.5-1 0.2-0.7 0.7-0.2 0.9-1.3 0.9-1.3 1.2-0.1 0.9-0.8 0.7-1.2 1.4-0.7 0.1-1.6 0.9-0.4 0.9-0.5 0.1-0.6 0.9-1 0.3-0.4 0.5 0.9 0.8 0.4 1 0.7 0.6 0 0.6 0.9 0.6 0.6 0 0.8 0.4 0.2 1.2 0.5 1.2-0.9 1.3 0.1 0.8 0.6 0.6-0.4 0.5-0.6 0.1-1.4 1.1-0.5 0.8 0 0.4-1.2 1.9-0.2 0.6 0.1 0.8-0.5 1.8-0.4 0.2-0.9 1.6-1 0-0.7 1.1 0 0.6 0.5 1.4-0.1 0.6-0.5 0.2 0.3 1-0.7 0.7 0 0.6-1.3 1.4-0.1 1.5-1.2 0.5-0.9-0.5-0.6 0.2-0.8 3.5 0.3 1.6-0.5 0.7 0.1 1.3-0.4 0.6 0.8 0.5-1.6 1.4 0.1 1-0.6 0.8 0.4 0.8-0.4 0.6-0.2 1.2 0.3 0.7-1.3 0.3-0.7-0.3-0.7 0.5-0.8 0-0.9-0.6-0.2 0.7-0.7-0.3-0.7 0.1-0.6 0.6-1.4-1.4-1.4-3.8-1.2 2.6-0.5 1.8-0.8 1.8-1.1 0.5-0.5 0.6-0.6-0.3-0.2 0.9 0 0.9-0.3 1.3-0.8 0.3-1.3 0-0.1 0.8-0.6 1.8-0.6 0.1-0.1 0.1 0.1 0.3-0.1 0-0.2-0.2 0 0.2-0.5 0-0.1 0.1-0.1 0.1 0 0.1-0.3 0.4-0.3 0.3-0.1 0-0.7-0.7-0.2 0.1 0-0.4-0.1-0.5-0.5-0.7 0.1-2.2-1.5 0.1-2.2-0.1-0.6 0-2.8 0.1 1.7-4.2 0.3-1-0.6-1.1 0.1-0.7-0.9-0.9 0-1.6 0.1-2.2 0.2-1.4 0.3-1.1 0.1-0.9 0.4-1.4 1.2-1.8-0.5-0.2 0.4-0.7-0.1-0.8-0.4-0.9-0.1-0.9-0.8-0.1-0.4-0.6 0-0.9 0.2-0.4-0.1-1 2.3 0.1 1.2 1.1 0.6-0.1 1 1 0.7-0.3 1.1 0 1.5-0.4 0.3-1.4-0.2-1-1.2-0.3 0.4-0.7-0.4-0.5-0.8 0.4-0.4-1.1 0.3-1.2-0.3-0.2 0.9-0.3 0.5-0.6 0.5-1.1 0.1-0.8 1.5 0-0.1-1.3 1 0.4 1 0 1.3 0.5 0.8-1.3 0.4-0.1 0.2-0.7 0.5-0.3 2.4-1 1.1 0.2 0.8-0.7-1-0.5-0.3-0.6 0.2-0.7 0.8-0.7-0.3-0.8 0-0.9-0.8-0.1-0.9-1.5-0.6 0-0.6-0.5-0.9-1.1-0.5 0.2-0.3-0.8-1.5 0.5 0-1.1-0.3-0.9-0.9 0.3-0.1-0.6 0.4-0.6 1.4-0.7 0.8-0.9 0.6-1.8-0.7-0.1-0.4 0.7-0.7 0.2-0.7 0.4-0.9-0.8-0.2-1.4-2-0.6-0.6-1.4-0.5-0.7-1.1-0.2-0.2-0.8 0.5-0.4-0.9-0.8-1.5-0.2-1.1 0.8-1.1 0.1-1.3 0.5-1.1 0.1-0.4-0.3-0.5 0.7-1.4 1.1-0.5-1.6 0.3-1.3-0.4-1.5 0-1.1 1-1.5 0-0.7 1.5-1.2-0.1-0.3-1.4 0.1-0.7-0.3-0.2-1.1 0.4-0.8 0.8-0.7 0.4-0.1 1.8-1.6 1.6-1.8-1 0.4-1.1 0.1-1-0.3-0.7 0.1-0.4-0.4-1 0.5-0.6 0.7-1.3-0.1-1.4 0.6-0.6-0.2-1.5-0.1-0.4 0.6-1.6 0.4-0.2 0.6-0.7-1-0.8-0.1-0.5-1.1 0.3-1.5-2-0.8-1 1.2-0.4-0.2-0.6 0.8-1 0.4-0.3 1.1-0.1 2.9-1.7 1.9-0.7-0.3-1.3-1 0.7-0.2 0.2-0.8-0.4-0.8 0.2-1.4-0.4-0.1-0.8 0.2-0.9-0.3-0.1 1-0.5 1-0.5 0.5-0.6 0.2 0 0.6-0.6 0.8 0 0.8-0.6 0.3-0.5 1.2-1 0.7-1-0.5-2.1 0.6-0.6 0.3-0.9 1.3-1 1.9-0.7 0-1.1 0.9-1.2-0.6 0-0.9-0.3-0.5 0.8-2.5-1.7-0.3-1.1 0.7-1.9 0.2 0-0.8-0.6-0.1-0.9 1-0.7-0.1 0.4-1.2 0.5-0.3-0.5-0.7-1-0.2-0.6 0.1-0.3-1.8-1.4-0.3 0.1 1.1-1.2-1.5-0.5 0.4-1.7-0.2-0.8 0.2-0.6 1.3-1.3-0.3 0-1-0.9-0.4-1 0.1-0.3 0.5-1.7 0.7 0.1-0.7-1.7-0.8-0.3 0.7-0.6 0.4-1 1.1-0.2-0.4 0.5-0.8 0.1-1-1-1.5-1-0.7-0.7 0.6-1 0.4-1.1-0.9-1 0.1-1.2 0.8-0.2 0.6-1.3 0.4-2.5 0.3-0.7-0.1-2.7 0-0.5 0.6-0.1 0.1-0.2 0.4-0.3 0.2-0.1 0.2-0.2 0-0.3 0.1-0.2 0.2-0.2 0.4-0.8 0.2-0.5 0.2 0 0.7 0.1 0 0.2 0.2-0.4 0.6-0.5 0.2 0.2 0.1-1.2 0.6-0.6 0-0.1 0.2-0.1 0.2 0.3 0.2 0 1 0.1 0.4-1.4 1.3-0.5-0.2-0.2 0.6 0.6 0.8 0.2 0.2 0.5 0.5 0.3 0.4 0.2 0.7 1.1 0.8 0.7 0.6 0.2 0 0.4 0.5-0.4 0.8-0.4 0.1-0.5-0.2-0.2 0.6-1.9 0.5-1.1 0.2-0.3 0.3-0.2 0.2 0.5-2.4 0-0.9-0.4-1-0.7-1 0-1-0.5-0.1-0.3-0.9 0.5-0.8-0.5-1.9-0.5-0.4 0.5-0.7 0-0.6 0.8-1.4 1-1.1 0.1-1-1.8 0.1 0.3-0.8 1.1-0.3-0.7-0.6-0.2-0.7-0.7-0.2-0.4-1.2-1-1.8 0.1-0.4-1-0.5 0.4-0.4-0.8-1.3-0.9 0.1-0.1-0.4 0.5-0.3 0-0.1-0.6 0-0.3 0.1-0.2-0.1-0.2-0.5 0.5 0 0.2-0.1-0.1-0.5 0.4 0 0-0.5-0.3 0.1-0.6 0 0-0.1 0.3 0 0.2-0.4 0.2-0.1 0.3-0.3-0.4-0.3 0-0.3-0.2-0.1-0.3-0.1 0.3-0.2 0.3 0.2 0.5 0 0-0.2-0.4-0.9-0.2-0.5 0.2-0.2 0 0.4 0.8 0.2 0.4 0.1 0.1-0.1-0.3-1.2 0.4 0.2 0.6-0.5 0.1-0.9 1.5-0.5 1-0.6-0.4-1 0.4-0.9 0.4-0.6 0.1-0.6-0.6-0.9 0-1.3 0.3-0.3 0.1-1.5 0.4-0.6 0-1.1-0.5 0-0.2-0.7 0.6-0.4-0.2-0.5 0.1-1.1-0.5-0.7 0.2-1.3 0.9 0.5 2.4 0 1.5-0.4 1.8 0.2 2.5-0.8 2-0.8-0.2-1.3 0.5-1.1 1-0.9 1.3 0.1 0.9 0.2 0.7-0.1 1.2-0.9 0.3-0.8 1.9-0.2 0.4 0.1 1.1 1 3.8 2.8 2.2 0.3 0.7 0.7 1-0.3 0.7 0.5 1.2 0 0.2-0.3 2.1 0.1 2.3-0.2 0.9 0 3.4-0.4 2 0.4 1.2-1.5 1.4 0.4 1.7-0.1 2.8 0.2 1.1 0.8 1.4 0.2 1.5-0.9 0.8-1.3 0.2 0 2.4 1.7 0.5 0.1 3.3-0.6 1.2-0.6 1.8 0.6 0.7-0.3 1 0 2.5-1.5 1.1-0.9 0.7-1.4 1.5-0.2 1.9 1.1 1.1 1.2 1.1 0.2 1.3 0.2 1.4-0.8 0.4-1 0.4 0.1 2.6 0 2-0.8 0.7 0.4 1-0.3-0.1-0.6 1.8-0.4 1.6 0.4 0.4-0.7 0.4 0 0.7-0.7 2-0.2 1.7 0.3 1.1-0.1 2-1 0-0.9 0.5-1 1.9 0.4 1.9-0.2 2.3 0.7 1.2 0.2 1.5 0.9 0 0.8 2.8 1.3 0.7 0.5 1.7-0.3 0.8 0.4 0.6-0.5 2.5-0.4 1.3-0.4 1.6-0.3 2.7-0.3 3.4 0.4 0.7 0.6 0.8 0 1.2-0.4 2-0.2 1.4-0.4 1.7-0.3 1.5-1.8 1.7-0.9 1.4-1 0.9-0.4-0.3-0.8-0.1-0.7-0.6-0.6 0-0.6 0.7-0.8 0.4-0.1 1-1 1.1-1.6 1.3-1.3 0.6-0.8 1.5-1.5 2.1-1.1 0.8-1.6 2.6-2.4-0.1-0.4 1.3-0.8 2.1-0.9 0-1.4-1.1-0.7-0.1-1-0.3-0.1 0.7-1.1 1-0.1-0.3 0.8 1.1 0.9 0.9 0.1 1.8 0.5 0.7-0.5 0.6 0.1 0.6-0.6 1.1 1.2 1.6-0.3 0.9-0.7 1.6-0.4 0.6-0.6 1.6-0.3 0.3-0.4 1.7-1 0.8-0.1 0.8 0.2 1.8-1.3 0.8 0.1 1-0.6 0.4-1.1 0.8-0.1 1.6-0.6 1.9-0.5 1.8-0.3 0.4-0.5 6.3-2.2 2.8-0.9 2.3 1.1 4.5-1.5 0.9-1.2 0.7-0.4 0.3-0.7 0.5 0 0.7-0.6 7.4-0.8 5.2 0.4-0.8 1 0.1 0.6-1.1 1.5-1.6 1.7-0.9 0.3-0.9 1-0.8 1.3-0.7 0.7 0.2 0.6-1 0.4 0.5 0.4 0 0.8 0.7 0.3-0.4 0.5 0 0.7 0.7 0.5-0.5 0.6 0.4 1 0.9 0.2-0.1 0.8 1.4 1.1 0.6 0 0 2-0.1 1.1-0.6 0.4-0.3 1.2 0.5 0.1 0.6-0.6 0.6 1.2 0.4-1.1 0.7-0.2 1.4 0.4 0.9 1.2 0.5 1.1-0.7 0.9-0.8 0.6-0.3 0.8-1.9 0.9-0.3 1.1-0.9-0.1-0.4-1.1-1.7 0.6-0.9 0-1.8 0.5-0.2 0.3-1.4 0.1-1.6 0.7-1.6 0.3-0.5-0.8-1.4-0.8-1.6 1-1 1.4 0.4 0.7-0.1 1.4-0.3 0.7-1.3 0.2-0.5 0.5-1.3 0.2-2 1.2-1.1 1 0 0.2-1 0.8-0.3-0.5-0.9 0.3-0.6-0.3z",
        5: "M681.2 425.7l0.9 0.9 1.2-0.4 0.1-0.6 0.6-0.2 0.7 0.3 0.8-0.6 0.1 0.7-1.4 0.9-0.5 0.6 0.5 0.8 1 0.2 0.2 0.8 0.5-0.1 0.3 0.6 0.1 0.7-0.8 0.8 0 0.3 0.5 0.4 0.3 0 0.5-0.1 0.4 0.7 0.3 0.1 0 0.2-0.4 0.2-0.2 0.6-0.1-0.1-0.1-0.1-1.2 1-0.1 0.5-0.2 0.3-0.3 0.3-0.3 0.1-0.7 0.1-0.3 0.5-0.4 0.2-0.2 0-0.7 0.5-0.4 0.7-0.2-0.1-0.1 0.2-0.4 0.3-0.1 0.1-0.3 0.2-0.1 0.2-0.1 0.3-0.5 0.3-0.1 0.4-0.4 0.1-0.7-0.2-0.1 0.3-0.8 0.6 0.1 0.5-0.3-0.1-0.3 0.1-0.5-0.7-0.6 0.4 0.1 0.4 0 0.3 0 0.2 0.1 0.6-0.5 0.3 0.5 0.4 0.1 0.3-0.2 0.1-0.3-0.1-0.7 0-0.2 0.6-0.4-0.3-0.1-0.5-0.8 0.4-0.1-0.1-0.1 0.4-0.4 0.2-0.9 0.8-0.3 0.5-0.3 1.1-0.2 0.4 0 0.3 0.1 0.8-0.1 0.4-0.1 0.2 0.1 0.2 0 0.4-0.7 0.1 0.3 0.6 0 1 0.3 0.6 1.6 0.4 0.5-0.2 0.9 0.5-0.8 0.7 0.8 0.7-0.5 0.6 0.1 0.7 1.3 0.9 0.2 0.5 1.2 1 2.4 1 0 0.4-0.2 1.1 0.2 0.3-0.1 0-0.1 0-0.3 0.3 0.3 0.1-0.2 0.7 0.1 0.2 0 0.2-0.4 0.2 0.2 0.1 0.1 0.1-0.2 0.2-0.2 0.7 0.3 0.4-0.2 0-0.1 0.2 0.4 0.8 0.3-0.1 0.3 0.2 0.3 0.9 0.1 0.1 0.1 0.1-0.1 0.4 0 0.4-1.2-0.2-0.6-0.6-0.3 0.3-0.6-0.4-0.3-0.5-0.8-0.8-1.1 0.1-0.7 0.6-0.1 0.5-1 0.1-0.4 1 0.1 0.5-1 0-0.2 0.7-0.6 0.4-0.8-0.5-0.8 2 0.1 0.7 0.8 0.2-0.3 1.3 1.7 1.3 0.7 0.2 0.2 0.7-0.2 1-0.9 0.7 0.3 0.8-0.1 0.3-1.4-0.6-0.2-1-2.6-0.3 0-0.6-0.5-0.4 0-0.8-0.3-0.3-1.1 0.1-0.9-0.3-0.6 0.2-1.4-0.9-0.6 0.1-0.4 1.4-0.4 0.5-0.4-0.4-1.1-0.1 0.5 1.1-0.8 0.9 0 1.8-0.6-0.1-2.2-1.2-0.5 0.2-0.3 0.6-1.5-0.6-0.5 2.8-0.4 0.5-0.2 1.8-0.7-0.2-0.4-0.4-0.6 0.2-0.3 0.5-0.7-0.2-0.8 0.9-0.4 0.1-1.1 2 0.3 0.8-0.2 2.7 0.4 1.2-0.4 0.9-1.4 0.6-1 1.4 0.6 0.4-0.4 0.7 0.1 0.8-0.4 0.5 0.3 0.8-0.4 1.1-0.6 0.9-0.3 1.8 0.2 0.6-1.4 0-1.5-0.9-1 0-1.3 1.7 0.3 1.6-1.1-0.9-0.7 0.6-0.6-0.6-1 0.1-0.1-1.1-0.4-0.8-1.3 0-0.3 1-0.5 0.5-0.4-0.1-1.8 0.7-0.7-0.3-1.6-1.2-0.5 0.5-0.1 0.5-0.9 0.5-0.3 0.9-0.8 0-0.6 0.7-0.5 1.2 0 1.7-0.1 0.5-0.8 0.2 0.1 1-0.2 0.7-0.5 0.3-1.1-0.4-0.6-0.8-0.8-0.6-0.7-1-1.2 0.1-0.6-0.7-0.3-0.7 0.7-1.2-0.4-0.9 0.1-1 0.5-0.6-0.9-0.4-1.5 0-1.1-1 0 0.8-1.7 0.3-0.5-0.6-0.9-0.5-0.3-1.1 0.6-1.3-0.3-1.1-0.7-1.1-1.4-0.6-0.6-1-1.4 0.4-0.2 0.6-0.8 0.1-0.2 0.6-0.7 0-1.3-0.8-1.2-1.8-1.7-0.3-0.6 0.6-1.1-0.2-0.4-0.5-1-0.4-0.5 1.3-0.4 0.3-0.2 0.9 0 1-0.8 1.3-1.1 0.3 0.4 0.5 0 0.9 0.4 1.1-0.2 1.5-0.7 0.1-1.3-0.3-0.3-0.4-0.7-0.2-0.6 0.7 0.3 0.7-1 0.5-0.2 0.7-1 0.1-0.4-0.8-2 0.6-1.1-0.4-0.7 0.5-2.2 0.3-0.7-0.1-0.6 0.3 0.1 0.8-0.9 0-1.1 1-0.7-0.1-1.7 0.4 0.5 1.3-0.7 0.4-1.1 0.3-0.8 1.1-0.9-0.2 0.3-0.8-0.2-1.1-0.5 0.8-0.7-0.4-1.5 0.5-0.7 1.4-0.7 0.1-0.8-0.2-0.7 0.2-0.2-0.8-0.7-1.1 0.1-1.5-0.6 0.2-1.2-0.5 0.1-1.5-0.4-0.5-1.2 0.3-0.2 0.4-1.2 0.4-0.6 0.8-0.7 0.1-0.9 0.6-0.4 0.9 0 0.7-0.3 0.7-1.3-0.3-0.7 0-0.9-0.4-0.5 0.6 0.2 0.5-0.6 0.4-0.9-0.1-0.1 1.6-0.8 1.7-1-0.8-0.4-1.1-1.2 0.3 0.1-1.1-0.9-0.3-0.4-0.8-0.7 0.1-0.9-0.4-0.4-0.5 0.2-0.8-0.5-0.6-0.8-0.1-0.2-0.6 0.3-0.6 0.9-0.3 0.2-0.5-0.3-0.7-0.9-1.6-0.8 0 0 0.9-0.4 0.1-1.2-0.5-1.7 0.4 0.3 0.6-0.1 0.5-0.8-0.2 0.3-0.6-0.6-0.3-0.3 0.4 0.1 0.9-1 0.9-0.7-0.8 0-1.1-0.4-0.5-0.2-0.9-0.4-0.3-0.5-1.3-0.8-0.6-1.1-0.4-0.6 1.6-0.5 0.8-1 1-2.1 0.6-0.3-0.2-2 0.3-1.8 0.7-1.1 0.2-1.1-0.4-2.8 0.1-2-0.5-1.5 0-0.2-0.6 0.8-0.2 0.3-1.4-0.3-0.6 0.6-0.5-0.6-1-0.6-0.4 0-0.6 0.5-0.4-0.8-1-0.3 0 0-1.2-1 0.2-0.6-0.9-0.8-0.7-0.8-0.4 0.3-1-0.2-0.8-0.8-1.1-0.5-1.5 0.2-0.4 0-1.6-0.5-0.3 0-1.8-0.8-0.2-0.1-0.8 0.2-0.4 0.6-2.4 0.4 0.1 0-1.5-0.3-0.4 0.2-1.5 0.4 0.1 0.9-0.4 0.7-1.6 1.2-0.4 0.6 0.3 0.7-1.1 0.9-0.2 1.3-1 0.9-0.2 1.3-0.5 0.3 0.1 1.3-1.3 1-0.2 0.8-1 1.3-0.3 1.2 0.2 0.5-0.4 0.2-0.9 1.2-0.2-0.2-1 0.6-0.4 0.7-1.1 0.1-0.6 0.7-0.2 0.9-1.4 0.8-0.2 2.4-1.8 2.1-0.9 0.1-0.5-0.3-1.7 0.4-0.6 0.9-0.4 1.4-0.1 0.6 0.2 0.9 0.6 0.2 1.2 0.6 0.3 2.5 0.1 1-0.4 0.2-2.4 1-0.3 1.4 0.6 0.2 1.1 0.8 0.2 0-0.7 0.8-0.1 0.6 1.1 0.8-0.2 0.9 0.5 0.6-0.6 0.7 0.4 0.2-0.7-0.1-1.3 1.4-0.1 0.5 0.3 0.5-0.4-0.9-0.7 0.7-1.2-1.1-1.1-1.4-0.8-0.7 0.3 0.1-1.7-0.8 0.2-0.7-0.6-1.9-0.1-0.7-1.5-0.8-0.3-1.2-0.8-1.3 0.5-0.7 0-1.8-1.4-1.3-0.6-0.3 0.4-0.7-0.4-0.2-1-1-0.8-0.7-1.1-0.9-0.8-1.4-0.1-0.2-1.2-0.9-0.5 0.4-0.7-0.9-0.6 0-0.4 1.1-1.6 1.3 0.2 0.7-0.5 0.6-0.1 0.1-0.8 1.5 0.1 0.4-0.5 0.1-1.2 0.3-0.5-0.5-0.8 0.2-1.3-1.9-0.5-1.9-0.2-0.2-0.4-0.6-0.2-0.7-0.9 0-0.4-0.9-0.2-0.3 0.4-1.2-0.1-1.5-0.4 0.1-2.2-0.1-0.4 0.9-0.3 1.2 0.5 0.3-0.8 0.9 0.3 1.6-0.7 0.1-0.7 1.2-1.9-0.1-1.1 0.8 0.1 1.6 0 0.5 0.5 1.2 0 2.4 1 0.9-0.7 0.9 0.1 3.1-0.5-0.4-0.6 0-1.1-1.3-0.3-0.5-0.1-0.5 0-0.4-0.2-0.2-1.1-0.4-0.8-0.3-0.6-0.7 0.1-0.4 0.3-0.4 0.3-0.4 0.1-0.6-1 0.5-0.7 0.3-0.6 0.1-0.6-0.1-0.5-0.2 0 0.3-0.7-0.2-0.8-0.3-0.2-0.5-0.2-0.4 0-1.2 0.7 0 0.2-0.2 0.5-0.6-0.2-0.7-0.6 0.3-0.7 0-0.4-0.3-0.1-1.1-0.1-0.2 0.4-0.2-0.2-0.4 0.2-0.6-0.5-0.3-0.3 0-0.1-0.1-0.1-0.1-0.2 0.2-0.2-0.1-0.6-0.6-0.4-0.1-0.1 0.2-0.2 0.1 0 0.1-0.3 0.3-0.2-0.2-0.2 0.1-0.5-0.2-0.2 0.4-0.2-0.2-0.5-0.3-0.6 0-1-0.4 0-1.1-0.9 0.9-0.6 0.1-0.3-0.2-0.3-0.3-0.2-0.9 0.5-1.1 0.2-0.2-0.1 0-0.5 0-0.7 0.3-0.2 0.1-0.2-0.1-0.4 0.6-0.9 0.6-0.5 0-0.1-0.3-0.9-0.4-0.6-0.1-0.3-0.5-0.4-1.3-0.4-0.2-0.1-0.2-1 0.7-0.6 0.2-0.9-0.5-0.5-0.7 0.1-1.1 0.6-0.9-0.6 0.7-0.3 0.3-0.6 1.1-0.3 0.5-0.7 0-0.5-1-0.1-0.2-1.4 2.1-0.8 0.5 0.3 1.6-0.1 1.2 0.2 0.9-0.2 0.5-1.4 0.9-0.4 0.5-1.2 0.7 0.4 0.7-0.2 0 1.2 0.7 0.4 1.2 0.2 0.1 1 0.8-0.5 0.8 0.2 0.6 0.9 0.1 1 0.5 0.7 3.5 0.6 1.7-0.1 0.9 0.6 0.6-0.1 2.7 0.4 1.9 0.4 0.7 1.2 1.6 3.2-0.4 2 0.2 1-0.2 1.6-0.4 0.6-0.6 0.4-0.2 1.1 2 0.8 1.9 0.9 0.6-0.5 0.7 0.8 0.8-0.9 1.3 0.4 0.1 0.8 1.8 0.8 0.6-0.1 1.1 0.4 0.6 0.7-0.3 0.9 1 0.2 0.2 0.7 1.3 0.1-0.5 1.2 0.5 0.4 1.6-0.4 0.7-0.5 0.8 0.2 1.9-0.1 0.2 1.1-0.6 1 0.6 1.2 0.1 0.6 0.5 0.4 0.7-0.2 0.9 0.3 2 0.2 0.5 0.3 0.8-0.7 0.6 0 1.2-1.2 0.8 0.1 0.7 0.3 1.5-0.6 0-0.6 0.8 0 0.8-1 0.8-0.1 1.4-0.6 0.5-0.6 0.7 0.8 1.3 0.3 1.4 0.9 0.4 1-0.4 3.6 0 1 0.8 1.3 0.8 0.4 1.1 0.2 0.6 0.8 0.4-0.3 0.7 0.1 0.3 1.5 1.1-1 1.2-0.6 1-0.7 0-0.7 0.7-0.4 0.8 0.2 1-0.5 1.4 0.4 0.1 0.2 1.5 0.8 0.7 0 0.6 0.8 0.6-0.3 0.7 0.1 0.1 0.8 1.2 0 0.7-0.9 1.4 0.1 0.5-0.2 1.2 0.1-0.1 0.4 1.8 0.4 0.1 0.4 2 0.7 1.5 1 1.5 0.1 0.8 1.4 2.1 0.8 0.2 0.5 2.2 0.7 0.1 0.5 0.9 0.4 0.7-0.1 0.2-0.7 0.6-0.5 2.2 0.8 0.9-0.7 0.4 0.1 0.8-0.5-0.1-0.8 1.2 0 0.1-1.1 1-0.2 0.5 0.1 1.4-0.5 0.9-1.3 0.1-0.8 0.9 0.1 0 1.7 0.3 0.7 0.4 2.8 1.6 1.3 0.8 0.4 0.8-0.4 2 0 0.7 0.4 0 1.2 1.6 0.2 1 0.8 0.6-0.5-0.1-1.1 0.4-0.7 0.7-0.4 1.4-0.2 1.3-0.7 1.7 0.4 1 0.5 0.2 0.5 1.2 0.5 0.8 0.1 1.4-0.2 0-0.4 0.9-0.4 0-0.8 1.1 0.3 0.8 0.8 0.7 0 0.6-0.5 0.2-1 0.5-0.8 1.9 1.2 0.5-0.5-0.1-0.6 1.4-0.5 0.3 0.8 0.5 0.4 0.3 1.1 1.1 0.8 0.9 0.2 0 0.8 0.6 0.4 0.7-0.2-0.1-0.6 1.8-1.5 0.5-0.7 0.3-1.1-0.3-1.9 0.3-0.7z",
        6: "M295.5 264.2l-0.2 0.2-0.3 0.5-0.9-0.4-0.8-0.5-0.3 0.1-0.1-0.3-0.3-0.3 0-0.2-0.3-0.2 0-0.1-0.2-0.8-0.6-0.8-0.1-0.1 1-0.4 0.3-0.3 0.2-0.3 0.1-0.2 0.1-0.1 0.2-0.1 0.2-0.1 0.5 0.1 0.3 0.4-0.1 0 0.3 0.4 0.5-0.5 0.2 0.2 0.1 0.2-0.4 0.4 1.2 0.1-0.1 1.3 0.4 0.7-0.5 0.7-0.4 0.4z",
        7: "M541.1 576.4l-0.9 0.1 0 0.6 1.3 0.7 0.3 0.4 0.6 0.3 0 1.2-0.9 1-0.4 1.3-1.2 0.5-1.8-0.1-0.6 0.7-1.2-0.1-0.6 0.6-0.7 0.4-0.1 0.7-0.8 0.3-0.6 0.5-0.3 0.7-0.9 0.6-1.8-0.2-1.2 0.8-0.4 0-0.9 1-0.4 1.4-1.7 2.2 1.5 1.2-0.6 0.4-1.5 0-0.2 1.2 0.5 0.6-0.5 1.1 0 0.5 0.8 0.7-0.1 0.5 1.1 0.2 0.5 0.5-1 1.5 0.4 0.7-0.3 0.8-0.6-0.2-0.9 0.1 0.2 1.4-0.5 0-1.1-0.5-0.5 1.3 0.3 1.2-1 1.7-0.8 0-0.4 0.7 0.7 0.7 1.5 0.6-0.5 0.5-0.2 0.8-0.8-0.5 0-1.1-0.9 0.4-1.1 0.9-0.5 0.6-0.2 0.9 0.2 0.8-0.4 0.5-0.5 1.9 0.3 1.5 0.7 0.3 0.4 1 0.4 0.3 0 1.4 0.3 0.5-0.9 0.3-2.3-0.9-1.3-0.4-0.1 1.1-0.4 0.5 0.1 1.1 0.5 0.2-0.2 1-0.9-0.3-0.6 0.4-0.3 0.6 0.1 1-0.3 0.8-0.6 2.3-1 0.2-1 1-0.4 0.2-1.7-0.3-1-0.4-1.1-1-1-0.4-0.5 0.1-0.3-0.8-0.5 0.5-0.7 0.2-0.7-0.2-0.8 0.5-1.3-0.5-0.9 0.2-1.1 0.6-0.8-0.6-1.3-0.1-0.7 0.2-0.5-0.1-0.8 0.2-0.9 0.1 0 0.5 0.3 1.2-0.6 0.9-0.6 0.5 0.5 1-0.6 1.1-0.8 0.7-1 1.7-2.4 1.5 0.1 1-0.3 1-0.6 0.4-0.2 0.5-0.6-0.3-0.7 0.1-0.3-0.4-0.2-0.9-0.6-0.3-0.5 0.2-0.7-0.7-0.5 1.6 0.2 1.8-0.1 1.2 0.3 1.1-0.1 1.1 0.3 0.7 0.5 0.6 0.1 1.2-0.4 0.9-0.6 0.4 0.1 0.7-0.6 0.8 0.6 0.5 0.2 0.6 1.1 0.5 0.3 2 1-0.1 0 0.7 0.4 0.4-0.2 0.6-0.5 0.3 0 0.9-0.4 0.8-0.1 0.7 0.9 1 0.2 1.1-0.7 0.5-0.1 0.9 0.3 1.4-0.2 0.8-0.8 0.7-0.1 0.6 0.4 0.9 0.1 1.1-0.1 1 0.1 0.4 1.6 0.5 1.2 0.2 0.9 0.6 1.4 0.1 1.1 0.5 0.2 0.3 1.1 0.1 0.3-0.4 0.9-0.1 1.7 0.3 0.4 0.3-0.1 1.4-0.3 1.4 0.4 2.1-0.4 0.8-1.8 0.1-0.9 1.4-1.4 0.4-0.3-1 0-0.9 0.9-1.2-1-0.4-0.8 0.1-0.5-0.5-1.1-0.1-0.7-0.6-0.6 0.2-0.6-0.3-0.9 0.3-0.9 0.5-0.7 1-1 0.9-0.4-0.3-0.3-0.8-0.7-0.9-0.1-0.5-0.9-1.7-0.2-1-1.1-0.9-0.9 0.6-0.7 0-0.6-0.5-1.2-0.6-0.5 0-2-1.4-0.3 0.5-1.2 0.6 0-0.8-0.7-0.2-0.7-1-1-1-0.3 0.1-1.6 2-0.5-0.1-0.5 0.9-0.4 1.9-0.3 0.7 0.4 0.4-0.1 0.9 0.4 0.6 1.3 0.7 2.2 0.9-0.1 0.7 0.7 1.4 0.7-0.1 1.8 0.3 0.3 0.3-0.1 1.1-0.5 0.5-0.2 1.3 0.3 1.2 0.2 1.6-0.6 1.5 0.3 0.7 0.1 1-0.8 1.3 1.3-0.1 0.3-0.4 0.8 0.2-0.1 0.6 0.4 0.7-0.2 0.5 0.8 1.3 1.7-0.2 0.5 0.6-0.3 1.3-0.3 0.4-0.9 0 0.1 0.7 1.3 0.5-0.4 1.5-0.6 0.9 0 1.6 0.3 0.5-0.2 0.4 0.6 0.5 0.2 0.9-0.3 0.9 0.7 0.6 0.6 1.4-0.5 0.7 1 1.4 0.6 4-0.9-0.1-1.5 0.8 0 0.5-0.4 0.9 0.2 0.8-0.3 1.1 0.2 0.3-0.5 0.6-1.9 0.6-0.4 1.6-1.5-0.2-0.6 0.2-0.9 0.5-0.5 0.1-0.7 0.6 0.2 0.4-0.5 0.5 0 0.9-1.1-0.2-0.7-0.7-0.2 1.2 0.4 0.1 1 0.8 0.9 0.3-0.3 1-1.6 0.1-0.1 1.1-0.5-0.1-0.7 0.5-0.4 1-1.8 1.7-1.2 1.1-0.6 2.3-3 0.3 0.1 0.8-1.5 0.5-0.8 0-0.8 1-0.7 0.4-0.7 0.1-0.1 0.9-0.7 1.8 0.6 1-0.4 1-0.1 1.3-0.9 1.6-0.2 0.7 0.1 0.9-0.1 1.1-0.7 1-0.4 0.8 0.2 0.7-0.4 1-1.4-0.4-0.2 1 0.3 0.5-0.5 0.7 0 0.7-2.4-0.2-2.1 0-2.1-1.3-1.1-0.2-2.1 1.3-0.8 1.1-0.6 0.1-0.8-0.2-0.7-1-0.3-0.7-0.3-2.8-0.4-0.3-0.4-2.5-0.3-1.4 0.1-0.4-0.6-1.7 0-1.2 0.8-0.7 0.1-0.9-0.7 0.1-0.3 0.3-1.5 0.8-1.3 0.1-0.3-0.4-0.2-2 0.6-0.3-0.2-0.7-1.2-0.2-0.3 0.3 0.1 1.2-0.7 0.9-1.2 0.1-1-0.3 0-1.7 1.7-0.9-0.6-1.2-0.8-0.9 0-0.5-0.7-1.6-0.3-1.6-0.8-0.5 0.2-0.6-0.5-0.7-1.1-0.6-0.4-0.8-0.2-0.9-0.6-0.3-0.5-0.6-2.3-1.5-0.7-1.1-0.8-0.4-1.3 0-1.6 0.7-0.7 0.5-0.5-0.4-0.9 0.7-0.8-1.3-0.8-2.3-0.9-1.2-1-1.1 0.5-0.6 0.6 0.1 0.9-1.1 0.7-0.1 0.9-0.5 0.1-0.5-0.4-1.2-1.5-1.8-0.7-0.6-0.3-0.6 0.2-1.7 0.9-1.5-0.2-0.6 0.9-0.7 0.1-0.8 0.4-0.5-0.3-0.9 0.1-0.6 0.7-0.7 1.2-0.7 0.2-0.5-0.3-0.8 0.4-1 1-0.2 0.9-0.7 0.9-2.1 0.3-0.4 1.2-0.3 0.6-1 0.9-0.8 0.5-0.1 0.4 0.8 0 0.9 0.6 1.5 0.5 0.2 1.6-0.8 0.7 0.5 0 1 0.5 0.1 1.7-0.1 0.6-0.8 2.5-1.7 0.1-0.4-1-0.6-0.2-0.5-0.7-1.1 1.6-0.6 1.1 0 0.9-0.8-0.1-1.2-0.4-0.7-0.9-0.2-0.4-0.4-0.2-0.8-0.5-0.3-1.2 0.2-0.6-0.3-0.1-0.6-1.5-0.9-2 0-0.2-0.6 0.4-2.4-1.1-1-1.8-0.7-0.4-0.6-1.1-0.7 0.2-1.3-0.9-0.7-1.4 0.1-0.6 0.6 0.5 0.3 0.3 0.8-1-0.5-1.2-0.1-0.6 0.1-0.1-0.8 1.2 0.2 0.9-0.6 0.5-1.1 0.8-0.4-0.3-0.9-0.9-0.4-0.6 0.4-1.4-0.6 0.1-0.8 0.6-0.2 0.7-0.6 0.7 0.3 0.2 0.4 1.1 0.3 0.6-0.2 0.4-1.3 0.4-0.5-0.4-0.8 0.5-2.3-0.4-0.7 0.2-0.9-0.6-0.5-2.5-0.8-0.2 0.6-0.6 0-1.1-0.5-0.3-0.5 0.3-0.9 0.6-0.2 0-0.5-0.5-0.4-0.5-1.1 1.2-0.3 1.3-0.7 1.3-0.2 0.6 0.2 1-1.3 2.6-0.7-0.5-1.9-0.6-0.6 0.2-0.7 0.4-0.8-0.3-0.4 0.3-0.6 0.3-2.6-0.1-0.8 0.4-0.4-0.3-0.9 0.4-0.5-1.5-0.3-0.7 0.1-0.2 0.4-1.1 0.5-0.7-0.1-0.6-1.1 0.2-0.8 1-0.8 2.1-0.6-0.1-0.7-0.5-0.5-0.2-1.3-0.4-0.7 0-0.9 0.4-1.1-0.2-0.9 0-1.6-0.5-1.5-2.6 0.1-0.7-1.6 0-0.8-0.5-0.6 0.7-0.8 0.1-0.7-0.4-1.8 0.7-2.7 0.6 0.1 1.2-0.5 0.4-0.7 0.5 0.2 0.9-0.3 0.3-0.4 1.1-0.4 1.2-1 0.6-1.2 0.6-0.4 0-0.4-0.6-0.8 1-1.5 0.5-1.5-0.1-0.5 0.7-0.7 0.5-0.9-0.3-0.9 0.3-1.6-0.6-0.6 0.2-0.6-0.3-0.5-0.1-0.7 0.5-0.5-0.1-0.9-0.4-1.1 0.5-0.8 0.1-1.3 0.5-1 0.7 0 0.7 0.6 1-0.3 0-0.6 0.7-1.5 0.2-0.9-0.2-0.6 0.3-0.4 0-0.7-0.5-0.4 0-0.8 0.4-0.7-0.1-0.7 0.6-1 0.6-1.4 0-0.8 0.3-1 0.5-0.2 0.2-1.3 0.6-0.7 1.2 0.3 0.5 1.1-0.1 0.9 0.5 0.4 0.7-0.5 0.2-1.2-0.5-0.6-0.6-0.2 0.5-0.6 1 0 0.1-1.2-0.2-0.7 0.4-0.5-0.3-0.6 0.1-0.6 1-0.5 1.3-0.1 0.4-1.2 0.6-0.6-0.2-1.3 0.2-0.5-0.5-1.5 0.2-1.8 0.1-0.3 1.3-0.6 0.8-1.2 0.7 0.3 0.1 0.7 1 0.4 1.1-0.8 0.2-0.8 0.6-0.2 0.8 0.7 0.5-0.3-0.1-1 0.3-0.3 1.9 0.7 0.3 2.2 0.9-0.1 0.1-0.9 1-0.8 1.2 0.1 0.4-1 0.8-0.7 1.4 0.2 0.2-0.7 1.6 0.6 0.4-0.3 0.1-0.8 0.5 0.1 0.3-0.5-0.3-0.4 0.1-0.8 1.2-1.5 0.7 0.1 0.6-0.3 0.3-0.8 0.4 0.3 0.4 0.8 0.6-1.1-0.6-1.9 1.3-1.5-0.4-0.7 0.1-0.5-0.5-1.3 0.2-0.6 0-0.8 0.9-0.3 1.3-0.1 1-0.4 0.4-0.7 1-0.7 0.4-0.6 0.9-0.3-0.1-2-0.7-1.1 0.7-1.4 1.1-0.1 0.3-0.2 0.8 0.3 0.9-0.1 1.1-1.3 1.9 0.4 0.4-0.3 0.2-0.7 0.6-0.4 0-0.7-0.5-0.1 0.2-2.4 0.9-1.5 0.7-0.6-0.1-1.4-0.9-0.3-0.8-1.2-0.8 0.3-0.3-0.3-0.2-1.3-1.4 0.2-0.3 0.5-0.9-0.2-0.3-0.3 0.3-0.6-0.8-0.1-1-0.5 0-0.8-0.7-0.7 0-1.2-0.5-0.3-0.6-1-0.5-0.1-0.8 0.6-1.8 0.3-0.6-0.4-0.4-1-1.4-0.1-0.3-0.5-0.6 0-0.8 1.2-0.5 0.3-1.3-0.3-0.2 1.1-0.6 0.4-0.5-0.1-0.4-0.6-0.1-1.6-0.8 0-0.3-1.3 1.1-0.4 0.4-2.3 1 0 0.2-0.8 0.9-0.4 0.4-1-0.5-0.7-0.1-0.7-0.8-0.4-0.2-0.4 0.1-0.9-0.6-1.2-0.5 0-0.4-0.7 0.6-0.7-0.5-0.4 0.2-0.7 0.8-0.2 1.1-0.7 0.6 0.7 0.1 0.7 0.5 0.1 0.2 0.9 0.6 0.1 0.2 0.7 1.6 1 1.3 0.2 0.7-0.5 0.7-0.1 0.3-0.4 1.1-0.3 0.8-1.1 1.1 0.7 1.7-0.3 1.2 0.7 0.4 0.9 1.1 0.1 1.3-0.2 0.6 0.1 1.2-0.2 0.1-0.5 1.1-0.6-0.2 0.8 1.1 0.9 0.8-0.5 1.5 0.5 1.7 0.2 0.7-0.3 0.7 0.4 2.1-0.4 0.4 0 0.8 0.9 1 0.1 1-0.4-0.2-0.6 0.3-0.6 1.3 0.2 0.7-0.5 0.8-0.1 0.4-0.7 0.7-0.5-0.5-0.7 0.3-0.6 0.9-0.3 0.7-0.4 1.6 0.1 0.2-0.6 0.7-0.1 0.7-0.8 0.4-0.1 0.4 0 1 0.6 0.5 0.8 0.6 0.6 1.5 0.7 0.5 0.6 0.5 0.1 1-0.2 1.8-0.2 0.9 0.3 0.8-0.1 1.4-0.4 0.6-0.8 1.5-0.4 0.8-1.5 0.1-1.1 2.1-1.2 0-0.9 0.6-1.1 1-0.9 0.8 0.1 1.3-0.1 0.5 0.7 0.9-0.1 0.3 1.1 0.5 0.5 1 0.1 1.1 0.5-0.1 0.9 0.2 1.3 0.9 1.2-0.1 0.7 0.4 0.9 0.7 0.1 0.4 1 0.7 0.3 1.9 0.4 0 0.6 0.5 0.3 0.8 0 0 0.4 0.5 0.7 0.1 0.7 0.6 0.6 0.1 1.9-0.6 0.8 1.2 1.3-0.1 0.8 0.6 0.2 0.3 0.8 1.1 0.6 0.5-0.1 3.9 0.9-0.2-1.2 0.3-1.1 1.3-0.3 0.9 0.4 0.6 0.8 0.2 1.3-0.1 0.8-0.5 1.6-0.4 0.3-0.9 1.7 0.3 0.7-0.4 1.3 0 0.7 0.5 0.5 0.8 0.3 0.5-0.9 0.8 0.1 0.2 0.8 0.7 0.8-0.3 0.8 0.1 0.6-0.5 1.9 0.2 1.7-0.4 0.4-0.5 1.2 0.2 0.6 1.1 1.1 0.7-0.1 0.9 0.9 0.4 0 0.2 0.8-0.2 1.3 0.6 1.5 0.2 0.9 0.6-0.2 0.1-0.9 0.3-1 0.7 0.2-0.1 0.4 0.7 1.1 0.7-0.2 0.5 0.4 0.6-0.3 0.3 0.6 1-0.2 0.8-0.4 1.4 0.1 0.2 0.9 0.4 0.5-0.4 1.5 0 0.9-0.7 0.5-0.9 0-0.3 0.4-0.1 1.2-0.3 0.6-0.7 0.5-0.1 0.9-0.9-0.1-1.2 1.1 0.2 1.7-0.6 0.9-0.6 0-0.5 0.6-1.1 0.5-2.3 0-1.1 1.5-1 0.3-0.5 0.6-0.2 1.1 0.1 0.7z",
        8: "M165.1 658.2l1 0 0-0.9 0.2 0.8 0.4 0.1 0.2 0 0.4-1.2 0.4 0 0.3-0.2 0.3 0.2 0.4-0.4 0.2-0.8 0.1-0.1 0.2 0.2 0.1 0.1 0.1 0.3 0.1 0.4-0.2 1.1 0.8-0.2 0.3-0.3 1 0.2 0.1 0-0.1 0.1 0.1 0.7-0.4 0.2-0.2-0.3-0.1 0-0.1 0.2-0.1 0.3-0.2-0.1-0.1 0.4-0.2 0.3-0.8 0.6-0.2 0.2-0.2 0.4-0.5-0.2-0.4 0.2-0.3 1.1 0.1 0 0.2 1.4 0.3 0.1 0.2-0.5 0.2-0.1 0.1 0 0.3 0.5 0.3 0 0.2 0.1 0.8-1 0-0.1-0.2-0.6 0.3-0.1 0.1 0.1 0 0.1 0.9-0.3 0.3 0.3 0.6 0.1 0.2 0 0.6 0.5-0.1 0.3-0.9 0.5-0.1 0.4 0 0.4 0.5 0.6 0.2 0.6-0.1 0.6-0.6 0.5 0.1 0.6-0.5 0.3-0.3-0.2-0.2-0.3-0.9-0.4-0.3-0.3-0.3 0.3-0.1 0-0.4-0.2 0-0.1-0.2-0.1-0.6-0.2-1-0.1 0 1-0.5-0.1-1.2-1.4 0.3-0.7 0-0.2-0.4 0.1 0 0.1-0.1 0.4-0.6 0.2-0.4-0.6 0.4-1 0-0.2 0-0.3 0-0.2-0.3-0.1-0.2-1.2 0.1-0.1-0.3-0.8-0.7-0.3-0.8-1.1 0.1-0.1 0.5-0.4 0.4-0.1 0.6 0.6 0.4 0.2 0.3-0.2 0.1-0.6z",
        9: "M160.8 651.8l-0.5 0.5-0.4 0.6 0 0.7 0.2 0.1 0.2 0.1 0.6 0.2 0 0.1 0.2 0.4 0 0.5-0.2-0.4-0.6-0.6-0.3 0.3-0.4 1.1-0.3-0.1 0.2-0.5 0-1.8 0.5-0.9 0.8-0.3z m-65-9.6l1.2 0.6-0.7 0.4-2-0.2-0.9 0 0.4-0.6 0.9-0.2 0.6-0.1 0.5 0.1z m-3.7-0.8l-0.5 0.8 1.1 0.4-0.1 0.5-1.4-0.1-0.4-0.2-0.8 0.1-1.2-0.4-0.5 0.1-1.8-1-0.5-0.8 0-0.1 0.3-0.5-0.1-0.6-0.2-0.6 0.1-0.9 0.5-1.5 0.8-1 0.1-0.9 0.4-0.9 0.3-0.6-0.2-0.4 0.3-0.1 0.4 0.6 0.5 0.4 0.1 0.1 0.2-0.2 0.5 0.2 0.5-0.1 0.6 0.1 0.7-0.4 0.2 0.3 0.4 0.1 0.6 0.2 0.3 0.7 0.4 1.2 0 0.6-0.6 0.5-1.5 0.6 0 0.7 0.4 0.2 1.3 0 0.3 0.6-0.1 0.8-1.1 0.4 0 0.7-0.3 0.4z",
        10: "M308.6 338.3l0.1 0.3 0.4 0.3 0.2 0 0.3 0-0.1 0.3 0.3 0.3 0.6 0.5 0.2 0.2 0.1 0.5 0.4 0 0.1 0.1 0.5 0.7 0.3 0.4 0.1-0.1 0.7-0.2 0.2 0.2 0.2 0.8-0.4 0.8-0.2 1 0.9 0.9-0.3 0.7-0.6 0.2-0.6 0.6 0 0.2 0.3 1.1 0.4 0.3 0.6 0.7 0.2 0.3-0.3 0.3-0.5 0.6-0.4 0.1-0.8-0.3-0.9 0.5-0.7 0.4-0.2 0.4 0.6 0.7-0.1 0.7-0.9 0.5-0.7 0.1-1 0.2-0.4-0.8-0.7-0.4-0.7-0.4-0.3-1.3 0.2-0.4-0.6-0.5-0.6-0.5-0.2-0.1-0.4 0.3-0.3 0-0.2-0.2-0.8-0.5-0.1 0-0.5-0.4 0.4 0.7-0.2 0.4-1-0.4-0.3-0.1-0.8 0.5-0.4-0.1-0.8 0.1-0.6-0.1-0.4 0.3 0-0.6-0.7-0.7-0.8-0.6-0.1-1 0-0.3 0.7 0 0.8-1.8 0.5 0.2 0.6-0.2 0.3-0.6 0.1-0.6 0.7-0.3 0.2 0 0.1-0.7-0.3-0.9 0.3-1.1-0.4-0.5 0.3-0.6-0.4-1.2 0-0.2 0.2-0.4 0.2 0.1 0.3-0.5 0.8-0.3 0.1 0 1.7 0 0.2-0.6 0.4-0.8 1.1 0 0.6 0.1 0.3 0.2 0.7 0 0.2 0.5 0.5 0.2 0.5-0.5 0.6-0.1 0.4-0.1 0.4 0.1 0.4 1.1-0.1 0.9-0.7 0.4z",
        11: "M203.8 824.9l0.6 0.1 1.1-0.2 0-0.6 0.7 0.2 1 0.5 0.2-0.6 0.8 0.4 0.2 1.1 0.3 0.3-0.1 0.9-0.4 0.9 0.6 0.4 0.5 1-0.1 0.5-0.9 0.8 0.9 1.6-0.3 0.7 0.5 1.5 0.6 0 0.7 0.5-0.1 1.3 0.6 1.3-0.3 0.4-1-0.1-0.9 0.4-0.5 1.2 1.3 0.4 0.7 1.6-0.4 0.8-0.7 0.6 0.1 0.9-0.4 0.6 0.2 1.2 0.6 1-0.5 0.3 0 0.3-0.2 0.3-0.4 0.6 0.1 0.8-0.3 0.3-0.1 0.3-0.4-0.1-0.2 0.1-0.1 0.4-0.8 0.5-0.5 0.2 0-0.4-0.2-0.2-0.4-0.3-0.6 0.2 0 0.2-0.1 0.1 0.3 0.8 0 0.2-1-0.3-0.4 0.1-1 0.4-0.2 0.3-1.9-0.8 0.2-1.4-0.5-1.5-0.5-0.4-0.9-0.2-0.3-1.2-0.6-0.5-1.2-0.5-0.3-1.1 0.6-0.3-0.1-0.5 0.4-0.5-0.7-2.7-0.7-2.4-0.7-2.1-0.5-0.7-1.1 0.4-0.2-0.4-0.9-0.2-0.2-0.7-0.4 0.1-0.3-0.7 1.2 0.3 0.9-0.2 1.3 0.4 0.5-0.6-0.3-0.5-0.9 0-0.4-0.8-0.5 0.1-1.2-0.4 0.2-1.2-1.3 0.1-0.4-1.9-0.8-1.6 0.8-0.9-0.8-0.1-0.3-0.4-0.4-1.4-0.8-1.8-0.3-0.1 0.4-0.1 0.5 0.2 0.4 0 0.8 0.1 0.2-0.5 1 0 0.3 0.3 1.2-0.6 0.4 0.1 0.2-0.8 0.9-1.3 0.8 0.9-0.3 0.7 1 0.3 1.3 0 0.4 1.1 0 0.5 0.5 0.4 0.1 0.9-0.2 0.6 0.2 0.5 0.9 0.7 0.9 0.2 0.4-0.6 1.4-0.2 1.5-0.8z",
        12: "M92.7 642.6l-1.1-0.4 0.5-0.8 0.6 1.2z m61.6-15.9l0.9 0.3-0.1 1.4-0.8 0.1-0.4-1.6 0.4-0.2z m1.6-18.8l0.8 0.3 0 0.4-0.8 0.2 0-0.9z m-105.7-29.2l0.5 0.3 0.4 0.7-0.6 1-1.4-0.7 0-0.8 1.1-0.5z m-11.1-0.5l0.9 0.4-0.3 0.4-0.9-0.3 0.3-0.5z m0.8-2l0.9 0 0.4 0.6-0.6 0.3-1-0.6 0.3-0.3z m20.3-1l0.4 0.3 0.3 1-0.8 0.3-0.7-0.1 0.1-1.2 0.7-0.3z m3-1.4l0.6 0.2 0.1 0.7-0.7 0.5-1.5 0.3-0.2-0.5 0.3-0.7 1.4-0.5z m15.1-17l-0.4 1.1-0.5 0.8-0.4-0.6 1.3-1.3z m-64.6-9.8l0.2 0.5 1.5 0.1 0.2 0.9-1.4 0.5-0.1 0.4-1-0.6 0-0.7 0.6-1.1z m-1.8-1l0.8 0.2 0.2 0.7-0.8 0-0.2-0.9z m2.9-1.2l0.9 1-0.8 0.3-0.8-1.3 0.7 0z m-2.9-3.1l0.5 0.8-0.5 0.2 0-1z m-1.1-0.9l0.7 0.9-0.3 2-0.6-0.1-0.3-1 0.1-0.8-0.9 0.5 0.3-0.9 1-0.6z m0.3-4.3l0.1 0.8-0.6 0.9-0.9 0.6-0.2-0.7 0.5-0.4 0.6-1 0.5-0.2z m-0.9-1l0.4 0.8-0.9 0-0.2-0.5 0.7-0.3z m-3.3-6.8l1.3 0.8 1-0.4-0.4 1.6 0.1 0.9-0.9 2.7-1.1 1.1-0.4 1.1-1.8 0.7-1-0.9-1.6 0.4-0.8-0.5-0.3-0.7 0.7-0.7 2.1-0.3 0.4-0.7 1.1-1.2 0.1-0.5 0.8-0.7-0.1-0.9 0.8-1.8z m-1.7-0.7l0.4 0.8-0.2 1.4 0.3 1.2-0.8 0.2-1.1 0.9-0.4-0.4 0.3-0.4 0.1-1-0.1-0.3 0.4-1.4 0.7-0.2-0.1-0.6 0.5-0.2z m6.4-0.2l0.4 0.2 0.5 0.8-0.4 0.5 0.2 0.4 0.2 0.2-0.2 0.7-1 0.7-0.8-0.3-0.9 0 0.6-1.1-0.3-1.2 0.4-0.4 1.3-0.5z m-3.4-1.8l0.7 0.3 0.7 1.3-0.5 0.9-0.8 0.8-0.7-0.2-0.3-0.5-0.6-0.1-0.4-0.9 1.1-0.9 0.1-0.5 0.7-0.2z m-5.1-0.1l0.1 0.7-0.6 0.7-0.6-0.2 0-0.7 1.1-0.5z m6.9-2.1l0.2 0.1-0.2 1.6 0.1 0.4-0.9 0.6-0.3-0.3-0.7-0.2-0.6 0.1-0.2 0.3 0 0.3-0.6 0-0.2-1.2 0.2-0.4 1-0.1 1.2-0.6 0.2-0.5 0.8-0.1z m2.9-0.3l0.3 0.4 0.5 0.1 0 0.1 0 0.2 0.1 0 0.9 0.1-1.6 2-0.7 0.4-1-0.4-0.1-0.9 0.9-0.4 0.6-0.5 0.1-1.1z m-1.8-1.8l0.7 0.8-0.2 0.5 0.7 0.6 0 0.7-1.1 0.9-0.4 1.4-1 0.5-0.4-0.2 0.7-1 0.1-1.8 0.2-0.2-0.5-0.2-0.6 0.1 0.6-1.6 0.6-0.5 0.6 0z m-1.8-0.1l0.3 0.3-0.2 1.1-0.5 0.9-0.5 0.5-1.8 0.5-0.3 0.7 0.2 1.1-0.4 0.8 0.1 0.7-0.8-0.2-0.3 0-0.4 0.2 0 0.6-0.7 0.2-0.4 1.4 0.1 0.6-0.3 1.2 0.4 0.6-0.4 0.6-0.6 0-1.1-1-0.5-0.9 0.5-0.9 0.7-0.3-0.6-1.8 0.2-0.9 0.7 0 0.6-0.9 0.2-0.8 0.5-0.7 0.3-0.8 1.5 0.3 0.5-0.4 0.2-1.5 0.9-0.8 0.5 0.8 0.4-0.1 1-1.1z m201.3 34.8l0.1 0.7 0.8 0.5 0.2 1 0.5 0.8-1 0.6 1.4 2 0.6 0.4 0.6-0.7 1.1-0.2 0.4 0.4 0.6 2-0.5 1.6-0.9 0.3 0 0.8-1.2 2.1-0.2 1.4-0.4 0.8-0.1 1-0.6 0.3-1.3-0.3-1.1 0.1-0.6-0.3-0.7 0.5 0 0.4-0.7 0.4-0.3 1.1-0.5 0.6-0.5-0.1-0.2 0.6-1.2 0.8-0.1 0.6-0.9-0.3-1.5-0.9-0.6-0.1-0.7 0.3-0.1 1 1.4 0.3-0.2 1.6 0.8-0.2 0.1 1.4 0.6 0.4 0.6-1.2 0.6 0.5 1-0.1-0.1-0.8 0.7-0.1 0 1.1 1.1-0.1 0.9 0.6 0.4 1.2-1.2 0.6-0.4 0.6-1 0.6-0.2 0.8-2-0.4-0.2-0.8-0.5-0.7-0.6 0.4-0.8 0.1 0.1 0.7-0.2 0.4-0.3 1.6 0.6 0.7-0.1 1.7 1.3 0.1 0.3 0.2 0.1 1.7 0.3 0.2-0.2 1.1 0.2 1.3 0.7-0.3 0.5 0.1-0.2 1.5-0.9 0.3-0.4 0.6-0.8 0.7 0 0.6 1.8 0.6-0.4 0.6 0.1 0.5-3.4 1.2-0.8 0.6-1.5 0.7-1.9 1.1-0.8 0.1-0.7 0.6-1.3 0-1 0.6 0.5 0.4 0.6 1.4-0.4 0.4 0.5 0.7 1.5 1.2 0.2 0.4 0.1 1.2-0.5 0.8-0.8 0.1-0.6 0.3-0.5-0.2-1 0.2-0.4 0.3 0.6 0.9 0.6 0.1 0.4 1.7 0.5 1.5 0.4 0.6 2.6-0.9 0.1 0.4 1.2-0.5 0.3-0.7 0.7 0 0.7-0.4 0.7 0.1 0.8-0.3 2.3 0.1 1.7-0.2 0.7 1.1 1.1-0.7 0.6 0.5 0.5 0 0.7-0.8 0.7-0.3 0.1 0.8 0.7 0.2-0.3 1.6-0.7 0.6-1.2 0.1-0.3 0.4-1.4 0.2-1.2-0.3-0.9 0.5-0.7-0.3-0.6 0.5-1.4-0.3-0.4-0.9-0.4 1-0.2 1-1.4 0.5-1 0.6-0.7 0.2-0.2 0.6 0.1 1.1-0.3 1.8-0.5 0.4-1.5 0.8-1.1-0.2-0.9 0.1 0.1 0.9-0.5 0.7 0.1 1.9-0.9-0.4-0.6 0.6-1.3-0.1 0.2 0.6-0.4 0.5-0.8-0.4-1.1-0.1-1.5 0.7 0-0.7-0.6-0.2-0.4-0.8-0.6 0.4 0 0.5 0.8 0 0.6 1.3 0.9-0.1 1.3 0.8 0.5-0.5 0.9 0.4 0.3 0.8-0.1 0.9 0.2 0.6 0.6 0 0.7 0.7 0.8-0.1 0.3 1 1 0.1 2 0.4-0.3 1.8 0.7 0.7 0.5 1 0 1.4 0.5 0.3-0.2 1.1 0 1.5 0.3 1-1 0.7-1.1-0.3-0.4 0.3-0.4 1-0.7-0.3-0.7 0.3 0.1 0.8 0.5-0.1 0.2 0.7 0 1.2-1.4 0.8-0.6 0-1.4 1.3-0.3-0.3-1.3-0.1-1.2 0.5-1-0.6-0.5-1.7-1-0.7-1-0.1-0.6-0.8-0.5-0.1-1.1 0.7-0.4-0.8 0.4-0.4-0.5-1.1-0.9 0.1 0 0.8-0.6 1-1.2 0.5-0.1 0.3 0.9 0.7 0.4 1 1.4 0.5 0.2 0.7-0.2 0.7 0.7 0.1-1 1 0.1 0.7-0.9 1-0.9 1.9-0.8 0.6-0.2 0.9 0.7-0.3 0.4 1.6 0 0.6 0.4 1.5-0.4 0.1-0.2 0.8 0.3 2-1.8 0.2-2.2-0.4-0.6 0.5 0 1.4-0.9 0.6-0.1 0.4-0.9-0.1-0.7 0.3-0.2-0.1-0.5-0.6 0-0.4 0.1-0.4 0.9-0.5 0.1-0.3-0.6-0.5-0.2 0-0.6-0.1-0.3-0.3-0.9 0.3 0-0.1-0.1-0.1-0.3 0.1 0.2 0.6 0 0.1-0.8 1-0.2-0.1-0.3 0-0.3-0.5-0.1 0-0.2 0.1-0.2 0.5-0.3-0.1-0.2-1.4-0.1 0 0.3-1.1 0.4-0.2 0.5 0.2 0.2-0.4 0.2-0.2 0.8-0.6 0.2-0.3 0.1-0.4 0.2 0.1 0.1-0.3 0.1-0.2 0.1 0 0.2 0.3 0.4-0.2-0.1-0.7 0.1-0.1-0.1 0-1-0.2-0.3 0.3-0.8 0.2 0.2-1.1-0.1-0.4-0.1-0.3-0.1-0.1-0.2-0.2-0.1 0.1-0.2 0.8-0.4 0.4-0.3-0.2-0.3 0.2-0.4 0-0.4 1.2-0.2 0-0.4-0.1-0.2-0.8 0 0.9-1 0-0.1 0.6-0.3 0.2-0.4-0.2-0.6-0.6-0.4 0.1-0.5 0.4-0.1 0.1 0.8 1.1 0.7 0.3 0.3 0.8-0.1 0.1-1.5-0.4-1.5-0.1-0.4 0.6-0.7 0.1-0.6 0.8-0.2 1-0.9 0.3-0.5 0.7-1.7-0.2 0.3-2.3-0.2-1.7 0.3-0.4 0.2-1.3 0.7-0.4 0-1.1 0.5-0.6 0.6-0.1 0.5-0.7 0.3 0.1 0.4-1.1 0.3-0.3 0.6 0.6 0.2 0.4 0-0.5-0.2-0.4 0-0.1-0.6-0.2-0.2-0.1-0.2-0.1 0-0.7 0.4-0.6 0.5-0.5-0.1-0.4 0.7-0.7 0.1-0.6 0-1.3 0.4-0.9-0.4-2.4-0.4-0.5-0.8-2.9 0.6-0.5-0.4-0.7-0.8-0.6 0.2-0.6-0.5-0.6-0.2-0.7-0.9-2.3-0.2-0.9-1.1-0.8-0.7-1.8-0.4-1.6 1-0.9-1.6-0.4-0.2-1 0.3-1 0.3-0.5-1.2-0.6-0.6 0.1-0.1 0.6-0.1 1.8-0.2 0.4-0.9-0.4-0.2-2 0-2.9-0.8-1-0.2-1 0.1-1.3 1-1.2 0-1.1 1.4-1.9-0.4-0.3 0-1 0.4-0.6 0.4-1.5-0.2-0.6-0.9 1.1-0.6 0.2-0.9-1.6 0.2-1.3 0.8-1.4 0.7 0 0.8-0.4 1.1-0.8 0.6 0.4 0.9-0.1 0.1-0.3 1.2 0.2 0.4-0.6-1.3-0.3-0.8-0.7-0.9 0.4-3.9-0.1-1.3 0.8-0.4 0-0.8-0.8-0.1-1.2 0.8-1.1 0-0.7 0.3-1.1 0.5-1.2-1.1-0.8-0.4-0.1-0.2-1.5-0.3-0.3-0.2-1.4 0.2-2.1 0.3-1.3 0.3-1.8 0.7-2.7 0.8-1.4 1.1-0.9 1.6-0.1 1.7 1.2 2 0.3 0.6-0.7 0.8-1.6 0.7-0.4 1.7 0.9 1-0.3 0.5-0.5-1.6 0.1-0.5-1.4-0.3-0.1-1.1 0.7-1.7 1.2-2.4-0.2-1.1-1.2-0.7-0.5-1 0.2-1.2 0.9-0.5-0.2-0.6 0.6-0.6-0.1-0.5 0.5-0.7 1.3-0.5-0.1 0.7-1.6-0.8 0-1.2-2.2-1.6-0.4 0.5-0.5 0-0.9-0.8 0.6-0.1 1.1 1.2 0.2 0.1 0.6-0.1 1.2 0.2 0.9-0.6 0.9-0.8-1.1-0.6 0.3 0.2 0.9 0.9 0.6-0.1 0.9-1-0.6-0.1 0.9-0.5 0.6-0.6-0.5-0.4 0.4 0.4 0.5-0.3 0.8-1.2 5-0.7 0.2 0.1-0.7-0.4-0.3 0.3-1.2-0.5-0.5-0.1-0.6 1.5-0.9 0.6-0.1-0.1-1.1-0.9 0.5 0.1 0.5-1.3 0.7-0.3 0.5-0.6 1.8 0.6-0.2-0.4 2.1 1.3 2.1 0.1 3.9 0.4 1-0.8 0.2 0.4 1 0.7 1.3 0.2 0.8 0.6 0.8 0.1 0.6-1.3 2.1-0.1 1.1-0.5 1.8-0.9 1.9-1.8 1.9-0.2 0.5-1.1 1.2-0.8 1.5 0 0.6-1 1.5 0.3 0.6 0.7 0.3 0.2 0.7-2 1-0.3 0.5-1.3 0.5 0.4-1.3-1.2 0.9 0.1 0.5-1.3 0.9-1.2 0.3-4.1 1.9-0.3 0.7-0.8 0.7-1.5 0-1.4 0.9-0.5-0.1-0.9 0.3-0.1 0.6-1.3 0.3-2.3 0.8-0.7 0-0.1 1-0.5 0-0.5 1-1 0.3-0.4 0.5-1.4 0.1-0.8 0.4-1.7 0.3-3 1.5-0.8 0.1-0.3 0.5-1.4 0.3-0.4 0.8-1.3-0.1-0.9 0.2-0.2 0.6-1 0.3-0.5-0.3-1.3-0.1-0.2-0.2-1 0.6-0.5-0.1-0.6 0.1-0.9 0.2-0.4 0.6-0.1 0-0.5 0 0-0.7-0.7-0.9 0.3-0.4 0-0.7 1.1-0.4 0.1-0.8-0.3-0.6-1.3 0-0.4-0.2 0-0.7 1.5-0.6 0.6-0.5 0-0.6-0.4-1.2-0.3-0.7-0.6-0.2-0.4-0.1-0.2-0.3-0.7 0.4-0.6-0.1-0.5 0.1-0.5-0.2-0.2 0.2-0.1-0.1-0.5-0.4-0.4-0.6-0.3 0.1 0.2 0.4-0.3 0.6-0.4 0.9-0.1 0.9-0.8 1-0.5 1.5-0.1 0.9 0.2 0.6 0.1 0.6-0.3 0.5 0 0.1-0.1 0.3-0.9-0.1-2.1-0.7-1.2-0.8-1.7-0.7-0.8-0.6-0.5 0-1.2-0.8-1.1-1.2-1-0.2-3.6-2.6-4-3.6-0.3-0.4-1.2-0.9-1.3-1.4-1.1-1.3-0.7-0.7-2.9-3.4-1.4-1.8-3.8-4.7-2-2.2 0.6-0.5-0.1-0.5 0.7-0.3 0.6-0.6 0-0.6-0.5-0.5-0.2-1-0.7 0.2-0.9-0.5-0.2 0.6 0.7 0.7-0.3 0.7 0.7 0.8-0.3 1.1-0.3 0-1.1-1-2.5-2.6-0.6 0-1.8-1.6-2-2.2-1.3-0.9-1.1-1.2-0.9-1-0.8-0.5-3.2-2.9-1.6-1.7-2.9-3.4-1.3-1.5-1-1.1-1.5-1.8-1.2-1.4-0.9-1.3 0.1-0.5-0.7-1.9 0.2-0.7 0.5-0.1 0-1.2 1-1.7 0.8-1 2.4-1.4-0.2 0.9-1 0.8 0.9 1.4 0.4 0.1 0.9-0.7 0.5 0.4 0.9-0.1 0.7-0.7 0.7 0 0.3 1.1-0.7 0.6-0.4 1.1-0.2 1.5 0.3 0.4 1.2 1.1 1.1 0.2 0.7-0.4 1.1-0.2 1.5-1.1 0.2-0.9 0.9 0.3 1.9 0.2 1.1-0.7 0.4 0.2 0.8-0.3 0-0.7 1.1-0.8-0.2-0.6 0.2-1.2 1 0.8 0.3 1.4 0.5 0 0.9 0.7 0.6 0 0-0.7 0.9 0.4 0.3-0.1 0.4-1.3 1.2 0-0.3-1 0.4-0.5-0.4-0.6 1-0.4 0.7 0.2 0.2 1 0.5-0.1 1.1 1.1 0.4-0.1 0.6-0.8 0.2-0.9 0.4-0.2 1.2 0.3 0.6-0.6 0.6-0.1 0.1-0.8 0.7-0.9 0.3 0.1 0.1-0.6 1.3-0.6 2.1-0.4 0.7 0.2 2.4 0 0.9-0.1 1-1.3 0.2-1.1 0.7-0.5 0.9-1.5-0.2-1 0.5-0.3 0-0.8 0.6-0.2 1-0.9 0-0.5 1.3-2.2 0.1-0.7 1.5-2.3 0.9-0.3 0.4-0.5 0.2-0.9 0.9-1.1 0.5-1 0.8-2.3-1.6 0.4-0.6 0.3-1.1 1.1-0.1 2.4-0.4 0.6-1.3 0.6-0.8-0.3-0.6-0.5-0.6 0.2-1.2-1-0.7-0.2-0.2 0.7-0.5 0.3-1.1 0-1.3 0.4-0.3 0.6-0.8 0.6-4 0.3-1.3 0.3-1.6 1-1.3-0.3-1.7 0.8-0.7 0-1.5 1.2-0.2 0.9-1.1 1.6-0.1 0.5-1.3-0.7-1.8-0.4-0.8 0.3-1-0.4-0.5-0.6-1-0.1-1.7 0.6-1-0.3-1.9-1.2-1.5-0.3-0.9-0.4-1.8 0.3-1.5-0.4-0.9-0.1-1.6-1-0.8-0.4-0.6-0.5-2.2-1.5-1.9-1-1.5-0.9-1.3-1-0.8-0.3-2.4-1.7-1.7-0.6-0.9-0.9-1.9-1.4-0.8-0.4-1.1-1.3-1.4-1.3 1-0.3 0.9-1.4-0.3-1.1 1 0-0.9-0.8 0.1-1-0.8-0.6-0.3-0.7-0.5 0.2-0.3-0.6-0.5 0.4-0.3-1.5-0.8-0.1-0.1-1-0.8-0.5-0.1-1-0.5-0.5 0.3-0.4-0.3-1 0.1-0.6-0.2-1.5 0.2-0.4-0.2-1 0.4-0.8 0.6-0.2 0.4-1 0.6-0.3 0.3-0.8 1.4-0.5 0.3-0.7 0.9-0.3 1-1.7 0.8-0.6 1.5-0.4 0-0.9-1.9-0.3-0.9 0.9-1.7-0.1-0.7 0.7-0.4 0.9-1 1.5-0.3 0 0-0.5-0.3-0.4 0-0.4 0.3-0.3-0.1-0.6 0.9-0.9 0.8-1.5 1.4-0.8 0.2-0.5-0.4-0.7-0.7-0.2 0 0.7-0.3-0.1-0.7 0 0.1-0.2-0.1-0.1-0.5-0.1-0.2-0.4 0.3-0.7 6.9 0.1 0.1-1.4 0.3-1.4 0-2.4 0.1-6.9 0.3-0.4 1.9-0.5 0.4 3 0.3 0.8 1 0.4 0.7-0.1 0.8-2.2 0.9-0.7 0.8 1.5 0.5 0.4 1-0.1 2.4-1.5 1.1 0.2 0.7 0.4 2.1 0.7 1-0.6 1.6-0.7 1.2-0.3 1.7 0.4 0.7 0 1.7-0.3 2.4 0.7 2.7-0.6 0.7-0.2 0.6 0.6 2.2 2.1 1.4 1.1 3.5 0.3 2.9 0.1 2.3 0 1.6-0.2 0.8-0.5 1-1.2 1.1-2.6 1.4-0.6 2.9-0.6 2.1-0.9 1-0.3 1.5-0.2 3-1.2 0.8-0.2 1.7-0.7 1.5-0.4 1.2 0.7-0.6 1.6-0.7 0.6 0.3 1-0.3 0.7 0.5 0.5-0.5 0.7 0 0.5 0.7 0.5 0.7 0 1.4 0.5 2.4 0.2 2.8-0.1 1-0.4 0.6-0.5 1.4-0.4-0.3-1.2 1.3-1 1.2-1.1 1.3-0.5 0.5 0.5 1.2 0 0.7-0.4 0.7-0.9 1.2-0.4 0.4-0.8-0.6-0.7-0.8-0.2-2.2 0.1-0.8-0.3 0-0.9 0.3-2.1-0.6-0.7 0.2-1-0.1-1.2 0.7-1.2 0.9-0.3 1.3-0.8 0.7-0.8 0.5 0.5 1.7 0.7 1.3 0.4 1.1 0.5 0.7 0.2 1.3 0.5 0.9-1.3 1.1-0.5 0.3 1 0.5 0.3 1.4-0.7 1-0.7 0.8-0.2 0.5-0.4 1.6-0.2 0.5 0.3 1.1-0.2 0.5 0.5 0.6-0.3 1 0.7 0.6 0.7 1.8-0.8 1.1 0 1.3-0.5 0.9 0.3 0.2 0.5-0.2 1 1.2 0.2 0.7-0.3-0.2-1 0.3-0.8 0.8 0.2 0.6-0.1 0.5 0.2-0.2 0.6 0.5 0.8 1.1-0.5 0.9-0.7 0-0.7 1.6-0.7 0.4-0.4 1.1 0.3 0.3 0.9-0.3 0.8 1.1 0.7 1.2 0 0.4 0.7 0.8 0.2 1-0.4 0.5-0.5 0.6 0.5 0.9-0.1 1.4 0.5 0.9-0.5 0.4 0.2-0.4 0.9-0.9 0.3-0.5-0.5-0.8 0-0.9 0.7 0.7 1.1 0.6-0.3 0.2 0.8 1.3-0.2 0-0.5 0.9 0.2 0.9 1.9 1.2-0.3 0.7 0.2 0.2 0.4-0.4 1.2 0.7 0.8 0.3 1.2 0.8 0.1 0.7-0.5-0.3-1.2 1.4-2.1 1.1 0.7 0.5 0.6 2.4 0.6 1.2-0.2 0 1.6 0.5 1 0.8 1.1 2.9 0.1 0.5-0.2 1.3 0 1.1 0.5 0.8 0.9 1.8-1.2 0.4-0.6-0.8-0.6 0.9-1.1-0.4-1.1 1.1-1.2 0.3 0.6 1 0 1.5-1.1 0.4 1.4 0 1.4-0.7 1 0.9 0.3 0.5 0.6 1.2 0.7 0.6 0 1.1-0.9 0.7 0.4-0.7 1.1-0.8 0-0.1 1-0.4 0.3-1-0.3-0.2 1.1-0.8 0.6-0.8 1.6-0.3 1.3 1.2 1.2 0.2 0.5 0.8 0.7 0.8 0.4 1 0.1 0.8 0.4-0.8 2 1.8 1.2 0.8-0.6 0.5 0 0.6-0.9 0.6-0.4 0.3-0.7 0-1.3 1.2 0.1 0 1 0.9 0.5 0.6 0.8-0.1 2 0.4 0.9-0.1 1.9-0.8 0.3-0.3 0.4-0.9 1.9 0.4 1.2-0.4 1.1 0.5 1 0.8-0.7 0.7 0.2 0.4 0.6 0.7 0.4 0.1 0.5 0.6 0.5 0.2 0.6 0.8 0.1 0.3 0.4-0.3 2.3 0.4 0.7 0.5 0.2 0.9-0.8 0.6-0.8 1.6 0.1 0.8 0.7 0.6 0.3-0.3 0.6 0 1.2-0.4 0.5-0.1 1.1 0.8 0.7-0.5 0.6-0.4 1.7 0.7 0.4 0.5-0.4 1.2-0.1 0.5 1.3 0.5-0.2 1.1-1.2 0.6 0.8 1.5-0.4 1.4 1.9 0.4 1 0.5 0.6 0 0.6 1.5-0.2 0.3-1.2 0.5-0.3 0.8 0.8 0.2 0.9 1.4 0.1 0 0.5 0.6 0.9 1.4-0.1 0.6 0.2 0.2 0.6 0.8 0.5 0.1 1.4-0.5 0.7 0.1 1.1 0.6 0.1 0.3 0.6 1 0.2 0.2-0.7 0.6-0.7 1.5 0.5 0.7 0.8 0.6 1.4-0.2 0.9 0.9 0.5 0.5 0.7z",
        13: "M321.6 276.1l0.6 0.6-0.8 1.3 0.1 1-1.4 1-0.4 1.1-0.8 1-0.8 1.8-0.9 0.8-0.8 0-0.4 0.9 0.1 1.4-0.7 0.6-0.7 0.1-1.4 1.1-1.2 0.2-0.9 0.4 0.1 0.6-0.8 1.8-1.6 2.3-0.5 0.3-0.3 0.8 0.1 1.1-0.5 1.1 0 0.7-0.4 0.5-0.1 0.9-1.2 0.7-0.2 1 1 1.3 0 0.6-0.5 0.2-0.2 0.6 0.3 0.9-0.7 0.4-0.8 1.8 0.6 1 0.2 0.9-0.8 0.8 0.4 0.8 0.6 0.4 0.3 0.7-0.2 1.1 0.7 0.6-0.5 0.8 0.5 1.5-0.7 0.2 0.1 1.1 0.9 0.2 0.2 1.1-0.8 1.7 0.5 1.4-0.6 0.4 0.5 1.8-0.5 1.1 0.4 0.7-0.5 1.3 1.1 0.9 0.2 1.2 1 1 0.8 0.6-0.8 1.8 0 0.6 0.5 0.4-0.3 0.6 0.7 0.8-1.2 0.4 0.2 0.9-0.2 0.1-0.6 0.1-0.5 0.5-0.5-0.2-0.2-0.5-0.7 0-0.3-0.2-0.6-0.1-1.1 0-0.4 0.8-0.2 0.6-0.9 0.1-0.8-0.1-0.1 0-0.8 0.3-0.3 0.5-0.4 0.5 0.2 0.4 0.2 0.8-0.3 0.6 0.4 0.5-0.3 1.1 0.3 0.9-0.1 0.7-0.2 0-0.7 0.3-0.1 0.6-0.3 0.6-0.6 0.2-0.5-0.2-0.8 1.8-0.7 0 0 0.3 0.1 1 0.8 0.6 0.7 0.7 0 0.6 0.4-0.3 0.6 0.1 0.8-0.1 0.4 0.1 1.1-0.4 1 0.4 0.2-0.4-0.4-0.7 0.5 0.4 0.1 0 0.8 0.5 0.2 0.2 0.3 0 0.6-0.2 0.6 0.5 0.6 0.5-0.2 0.4 0.3 1.3 0.7 0.4 0.7 0.4 0.4 0.8 1-0.2 0.7-0.1 0.9-0.5 0.1-0.7-0.6-0.7 0.2-0.4 0.7-0.4 0.9-0.5 0.8 0.3 0.4-0.1 0.5-0.6 0.3 0 0.8 0.4 0.5 0.9 0.8 0.2 0 0.5 0.9 0.1 0.4 0.9 1.3 0.7-0.2 0.8 0.6 0.5 0.3 0.9-1 0.6 1 1.3-0.1 1.1-0.7-0.1-0.2 0.5 1.6 0.6 0.9 0-0.1 0.5-0.7 0.4 0.2 0.9 0.5 0.6-0.2 0.8-1.1 0.3 0 1.6-0.9 0.7-0.1 0.7 0.5 1-0.2 0.4 1 1.1 0.2 0.4 0.8 0.7-0.9 0.8 0.9 0.3 0 0.6-0.6 0.7-1.7-0.1 0.2 0.8-0.2 0.7-0.9 0.6-0.7-0.6-0.7 0.5 0.4 0.9-1.4-0.2-1.1 0.2-0.9 1.1-1.3 0.9-1.4 0.8-0.4-0.4-1.2-0.1-0.5-0.7-0.8 0.2-0.1 1-1.6 0-1-0.9-1.1-0.4-0.5 1.3 0.9 1 0.7 0.1 0.2 0.8-0.8 0.3-0.7-0.7-1.3 0.2-0.5 1.4-0.3 1.9-1.3-0.7-0.8 0.7-0.6-0.9 0.8-0.8-0.9-0.7 0.2-2.6 0.4-0.8-0.2-0.6 0.2-0.5 0.7 0 0.1-0.8-0.1-1.5 0.4 0 0-0.9-0.7-0.3 0.2-2-0.2-0.8 0.4-1.7 0.6-1.1 0.5-2.8-0.7-0.2-2-1.7 0.6-0.5-1.2-0.3-0.1-0.5-1 0-1 1-0.5 0.2 0.2 0.9-0.1 0.5-1.3 0.5-0.5 0.6-1-0.1-1 1.4-1.1 0.2 0.1 1.8 0.3 1-0.8 0.3-1.3 0.1-1.8 1.4-0.5-0.3 0.2-1.4 0-0.9-0.9 0.2-0.7-0.5-1.2 0 0.1-0.6 0.8 0.2 0.5-0.3-0.9-0.8-0.8-0.3 0.3-0.6 1.4 0.1-0.2-1-0.6-0.7-1.2-0.1-0.4 0.3-1-0.1-0.7 0.4-0.6-0.2-0.2-0.9-0.6-0.4-0.9-0.3-1 0.2-0.1 0.4 1.5 0.8 1.2 0.8-0.8 0.8-0.9-0.2 1 1.5 0.6 0.3-0.6 1.4-0.7 0.3-0.9-0.3 0-0.8-0.6-0.6-0.7-0.2-0.6 0.6-1.9-0.2 0 0.4 0.9 0.8-1 0.3-0.7 1.1 0.9 0.8-0.4 2.4 1 0.4-0.3 0.7 0.1 0.7 0.5 0.6-1.2 1.6-1.5-1-0.2-0.8-1.2-0.6-0.2 0.7-0.7-0.2-0.4 0.3-1.4-0.6-1.1 0 0.1-1.8-0.8-0.4-0.9 0.2-0.2-0.7 0.7-0.2 0.7 0.1 0.1-1 0.7-0.9-1.1-0.1 0-0.5 0.6-0.7 0.1-0.7 1.2 0 0.2-0.7 0.6-0.5-0.7-0.5-0.4 0.8-0.9-0.9-0.6 0-0.8-0.4 0.3-0.5 1.1-0.8 0.5 0 0.1-0.9 1.2-0.9 1.3 0.2-0.1 0.9 0.7 0.1 0.3-0.5-0.6-0.6-0.3-1.1-0.7-0.1 0.2-0.8-1.4-0.7-0.1-0.5 0.4-1-1.1-0.6-1.1-1.7-1-0.2-0.1-1-1.7-0.8-1.3-0.3-0.2-0.4-0.9-0.2-0.5 0.4-0.6-0.2-0.2-0.5 0.7-0.7-0.2-0.7-1.5-0.6 0-0.6-1.6-0.4-0.8-0.9 0-0.4-1.2-0.5-0.4-1.7-0.3-0.7-0.8 0-0.3-0.4-0.7 0.1-0.3-1.1-0.3-0.2-0.3-3.3-0.5-1.5-0.6-0.6 0.5-1.9-0.9-0.9 0.1-1.6-0.8-1 0.1-0.5 1-0.1 0.2-0.8 0.4-0.6-0.2-1.3-1.3-0.4-1.3 0.1 0.2-0.9-0.3-1-1.7-0.2 0-1.5 0.5-0.7-1.2-0.6 0.3-1.1 0.6 0 0.5-0.7-0.5-1.6 0.4-0.4-0.1-0.9-0.6 0-1 0.6-0.1 0.8-1.1-0.3 0.3-0.7 0.1-1-0.2-0.6-1.5 0.8-0.1 0.7-1.3 0.1-0.4 0.7-1-0.4-0.5-0.9-0.5 0.1-0.6 0.8-1.1 0.1-0.2 0.6-1.1-0.2-0.9-1.2-0.4-1-0.5-0.1-1.1 0.8-0.5-0.4-0.8 0-0.5-0.9 0.4-0.6-0.5-0.7-0.3-1.1-1.3-0.8-0.6 0-0.8-0.7-1.3 0.2-1.2 1.5-1.5 0.2-0.7-0.6-0.8 0.2-1.3-0.3-0.3 1.6-1.5 0.1 0.1-1-0.9-1.2-0.1-0.8-0.6-0.7-0.7-0.1 0.1-1.5 1.5 0.2 0.5-1.3 0.6-1.1 0-0.4-1.3-1-0.1-1.2 0.2-1.6 0.3-0.3-0.2-0.8 0.8-2.6 0.1-1.2-0.4-0.6-0.8 0.6-1.1-0.1-0.4 0.5-1.9-0.1-0.2-1.7 0.2-0.6 0.7-0.9 1.4-0.5 0.7-1.1-0.6-1.4-1-0.2 0.5-1.4 1.8 0.7 0.4 0.4 1.9 0.4 0-0.7 1.4-1.1 0.5-0.8 1 0.3 0.4-0.2 1.3-0.3 0.9-0.7 0.7 0.8 0.9 0.6 0.8 0 1.8 0.6 0.6 1.6 1 0.5-0.1 0.3 0.7 1 0.9-0.3 0.8-0.7 0.9 0.1 0.4-1.3 0.9 0.6-0.1 1.1-0.5 0.4 0 0.6 0.6 0.2-0.3 0.8 0.3 0.6 0.7-0.1 0.3 0.8 0.6-0.3 0.2-1.1 0.9-0.7 0.6 0.3-0.1 1.4 0.5 0.3 0.7 1.4-0.4 0.8-0.8 0-0.3 0.8 0.3 0.6-0.3 0.6-1 0.5 0.5 0.7 0 0.8 0.9 0.3 0.7 0.6-0.3 1 0.9 1.2 1.8-0.4 0.5-1.1-0.8-0.5 0.2-0.7 0.7-0.5 0.3-1.5 1 0-0.4-0.7 0.9-1 0.6 0.1 0.2-0.9 0.4-1 1.6-1 0-0.9 2.2 1.3 1.7 0.4 0.2 0.8 2-0.4 0.1-0.7 1.4 0 0.4 0.6 0.7 0.1 0.3-2.1 1.4-0.2 0.8-0.5 0.9 0.7 0.8-0.3 0.8 1.6 0.7 0.9 0.5 0.2 0.6-0.3 0.6 0.6 0.7 0.3 1.3 0 1.1-0.8 0.7-0.1 0.5 0.2 0.6-0.9 0.6-0.3 0.1-1 0.6-0.2 0.7 0.6 0.8-0.8 0.9-0.1 1-1.1 1.1-0.3 0.5-0.6-0.6-0.6-0.9 0-0.5-0.4-0.1-1.1-0.5-0.2 0.4-0.7 0.9 0-0.5-2.3 0.3-1.2 1.1-1.8 0.8-1-0.8-0.1-0.9-0.8 0.2-1.1 1.4 1.4 1 0.3 0.4-0.2 1.2 0.3 0.7-0.7 1.4 0-0.1-0.7 0.5-0.5-0.7-1 0.6-0.6 0.8 0 0.3 0.7-0.1 1.3 0.6 1 0.3 0.9 1.3 0.1 0.3 0.8 1.1-0.2 0.8-0.7 1.2 0.8 1-0.6 0.3-1.6-0.2-1.4 0.6-0.6-0.1-0.8-1.1-0.4 0.2-0.4-0.7-1.1-0.5-0.1-1 0.9 0-1 1.2-0.4 1.1-0.2 1.3-1 0.6-0.8 1-0.2 1.3-1.4-1.3-1.3 0.9-0.5 0-0.6 0.8-0.2 1.1 0.4 0.9 0.2 0.9-0.9 0.5 0.7 0.6 0.3 0.5 1-0.1 0.8 0.7 0 1-1-0.6-0.6-0.3-1-0.4-0.3 0.2-0.8 0-1.3 0.6-0.2 0.2-1.2-1.2-0.6 0.6-0.4-0.1-0.7 0.5-1.3-0.5-0.8-0.9-0.8-0.5 0 0.2-1.2-1.5 0.4 0-1 0.1-0.4 0.5-0.7-0.4-0.7 0.1-1.3 0.6-1.1-0.4-0.5-0.2-1.1-0.9-0.4-1.1-1.4-0.2-0.6 0.2-0.6 1.4-0.9 0 0.9 0.4 0.8 1 0.7 1.7-1.1 0.9 1.7 0 0.7 0.5 0.3 0.4 0.7 0.5 0.1 1-0.2 0.1 1-0.4 0.5 0.5 0.4 0.3 1 1.2-0.3 1 0.2 0.9 0.5 0.7 1 1 0.7 0 1.4 0.3 0.6-0.1 1.5-0.6 0.7-1 0.6 0.4 0.8 0.5 0.3 1.6 0.5 0.5 0.8 0.1 1.1 0.8-0.4 0.9 0.2 0.4 0.7 1.6 0.5 0.4-0.3 0.8 0 0.4 0.8 0.8-0.2 0.5 1 1-0.8 0.7-1 0.3 1-0.5 0.7-0.2 0.8 0.9-0.1 1.1-0.5 0-0.6 0.6-0.6 0.5 1.3 0.6 0.7 1.1 0.5z",
        14: "M367.1 241.4l0.1 1 0.9 0.4 0.3 1.2 0.9 0.4 0.2 1.5 0.7 1.1-1.1 0.1-0.8 0.4-1.3-0.4-0.8 0.5-0.6-0.4-1.5-1.4-0.6-1.2-0.2-1.1-1.6 0.5-1.8-0.1-0.7-0.3-0.9 0.2-0.5-0.9-1.2-0.6-1.1 0.1-1 1.1-2.3 0.1-0.1-0.7-0.8-0.9-0.9-0.7-0.9-0.1-0.8-1-0.4-0.1-1.4 0.2-0.6-0.1-0.2 0.9-0.8-0.2-1.2 1.4-0.9-0.1-0.8 0.6-0.4-0.3-0.8 0-0.5 0.6-0.5 0.1-0.9 0.8-1.3 0-0.9 0.3-0.7 1.1-0.5-0.4-0.8 0.1-0.5-0.5-1.4 0.9-0.4-0.1-0.8 0.8 0 0.5-0.9 0.6-0.3 1.2-0.7 0.2-0.6 0.9 0.6 1.9-0.5 0.5-0.4 0.9-1.5-0.3-0.6 0.6-0.1 0.5 0.4 1.1 1.7-0.1 0.2 0.5-0.5 0.6-0.1 1-0.6 0.3-0.7-0.7-0.4 1.2 0.4 0.6-0.9 1.1-0.5 1.2-0.5 0.4 0.2 0.9 0.4 0 1.2 1.4-0.3 1 1.1 0.8 0.3 1-0.6 0.8 0 0.6-0.8-0.1 0.7 1.5 0.9 0.5 0.9-0.1 0.2 0.9-0.4 1-1.1 0.3-1.6 1.1-0.3 0-1.7 1.1-0.8-0.1-0.3 0.6-0.9 0-1.4 0.8 0 0.5 0.4 0.7-1.1-0.5-0.6-0.7-0.5-1.3-0.6 0.6 0 0.6-1.1 0.5-0.9 0.1 0.2-0.8 0.5-0.7-0.3-1-0.7 1-1 0.8-0.5-1-0.8 0.2-0.4-0.8-0.8 0-0.4 0.3-1.6-0.5-0.4-0.7-0.9-0.2-0.8 0.4-0.1-1.1-0.5-0.8-1.6-0.5-0.5-0.3-0.4-0.8 1-0.6 0.6-0.7 0.1-1.5-0.3-0.6 0-1.4-1-0.7-0.7-1-0.9-0.5-1-0.2-1.2 0.3-0.3-1-0.5-0.4 0.4-0.5-0.1-1-1 0.2-0.5-0.1-0.4-0.7-0.5-0.3 0-0.7-0.9-1.7-1.7 1.1-1-0.7-0.4-0.8 0-0.9-1.4 0.9-0.7-0.9-0.8-0.4-0.4-0.9-0.7-0.4-0.9 0.1-0.5-0.5-1.4-0.9 0.1-0.7-0.5-1.2 0.2-1 0.7-1.3-1.2-0.7 0.3-0.9-0.3-0.3 0-1 0.7-0.8 0.8-0.4-0.6-0.6-1 0.5-0.4-0.4 0.9-1-1.1-1.2-0.8 1-1.2-1.1-0.8 0.4-0.7-1.5-0.7 0.2-0.7-0.8-1.2-2.1 0-0.8-1-1.7-0.1 1-0.4 0.4-1.1 0.1 0.5 1 0 1.3-1.2 0.1 0.2 0.7-0.4 0.4-1 0.4-0.1-0.4-1.2 0.1-0.5 0.3-1.2 0-0.2-1.4-0.9-0.5-0.2-1.2 0.8-0.8-0.5-1.2-0.5-0.4-0.7-2.1-0.8-1.7-1.4-2.2 0-0.4-0.7-0.5-0.7-1.2 0.1-0.7-0.9-1.7-1.1-3-0.3-0.2-0.5-1.3 1-0.3-0.1-0.9-1.9-4.1-0.9-0.8-1.1-0.5-1.4-0.3-0.7-0.5-1.4-1.4-0.8 0-0.6-0.9-1.4-0.8-1.8 0.5-0.7-0.6 1.1-0.8 1.6-1.8 0-1.3-1.2-0.3 0-2 1.1-0.8 0.8-0.4 2-0.4 0.6-0.5 0.3-0.6 2.8-3.1 1-0.8 1.8-0.6 0.3-0.5-0.7-1-2-2-0.1-0.9 0.1-0.7 0.5-0.8 0.1-0.7 1.2-1.8 0.5-1 0-0.5-0.8-1 0-0.8 0.3-0.8 0.1-1.5-0.4-0.5-0.9-1.8-1.8-1.1-0.9-1.2-0.2-0.9 0.4-0.4 0.3-1.1 0.9-0.2 0.5 0.2 0.6 0 1.1 0.6 1.2 1.3 0.4-0.1 1.3-0.6 1.1-0.7 0.4-0.8 0.5-0.1 1.3-1.2 0.4-1.4 1.2-0.2 0.8-0.6 2.9-0.4 0.6-0.8 0.7-2.1 0.6-0.6 0.8-0.4 1.5-1.2 0.9-1 0.7-0.2 0.5 0.3 0.7 0 0.3-0.1 0.2 0 0.4 0.1 1-0.6 1.3-0.2 0.4-0.4 0.3 0.1 0.3 0.1 0.1-0.1 0.6 0.1 0.5 1.3 0.9 0.4 0.5 0 0.4-0.3 1.1-0.1 0.4-0.3 0.4 0 0.2 0.1 0.6 0 1-1.9 0.1-1.2 0.5-0.1 0.2 0.1 0.4 0.5 0.4 0.2 0.1-0.3 0.1-0.1 0.3-0.1 0.2 0.1 0 0.2-0.2 0.2-0.1 0.2-0.3 0.7 0.3 0.4-0.5 0.5-0.2 0.8 0.2 0.7 0.8 0.8 0.2 0.7 0.6 0.3 0.3-0.2 0.3-0.1 0.3 0.2 0 0.3 0.2 0.4 0.4 0.1-0.2 0.6 1 1.9 1.5 0.8 1.2 1 0.5-0.2 0.3 0.1 0.1-0.2 0.4-0.1 0.6 0.3 0.2 0.2 0.2 0.1 0.3 0.5 0.4-0.1 0.4-0.1 0.2-0.4 0.3 0.1 0.3 0.1 0.5 0.1 0 0.9 0.8 1.8 0.8-0.1 1.6 0.8-0.2 0.5 0.8 0.8 0.4-0.5 0.4 0.4 0.1 0.3 0.5 0.3 0.6-0.1 0.6 1.3 0.4 0.1 0.2 0 0.3-0.1 0.2-0.1 0.1-1.3 0.7-1 0.6-0.2 0.2 0.2 0.3 0.1 0.2 0 0.3-0.2 0.2 0.3 0 0.2 0.2 0.2 0.6 0.2 0.6-0.7 0.4-0.3 1.2-0.1 0.9-0.9 0.8-0.4 0.4-0.8 1.1 0 1.4-0.8 0.4-1.1 0.5 0.4 0.4-0.1 0.1 0.1 0.2 0.3 0.4-0.1 1.6 1.8 1.1 0.9-0.6 0.6-0.4 1.1 1.3 0.7 0.3 0.4 0.2 0 0.1-0.1 0.3 0 0.2 0.2 0.5 0.2 0.5 0.5 0.2 1.1 0.5 0.6 0.3 0 0.3 0 0.1 0.1 0.2 0 0.2 0.3 0.1 0.3-0.5 2.6 0.6 0.6 1.9 3.5 0.4 0.2 1 0 0.6-0.2 0-0.9 0.3-0.6 0.8 0.2 0.2-0.8 0.7-0.7 0.2 0.1 0.3 0.4 0.3 0.3 0.2 0 0.1-0.3 0.4-0.8 1.1-0.3 0.4 0.3 0.1 0.2 0.4-0.1 0.2 0.1 0.8-0.4 0.4-0.8 2-0.8-0.3-1 2-1 0.7 0 0.2 0.1 0.1 0-0.1 1.1 0.2 0.6-0.3 0.8-0.2 1.1 0.3 1.4 0.6 0.6-1.9 1.5-1.2 0.3 0 2-0.7 0.8 1.1 1.3 1.6-1.4 0.9-0.7 0.6 0.1 0 0.1 0 0.2 0.3 0.3 0.8 0.1 0.5 0.8-0.3 1.3 0.8 0.4 0.6 0.9 0.8 0 0.5 0.3-0.7 1.1-0.1 0.5-0.9 0.8-0.2 0.9 0.2 1.8-0.1 0.6-0.9 1.2 1.5 0.2 1.4-0.3 0.7 0 1.7 1.2 0 1.3-0.7 1.2 0.5 0.4 0.3 1 1.7 0.6 0.2 0.8 1.2 1.2 0.1 0.5 1.6 1.7 1.2 0.2-0.4 1.4-0.5 1.6-0.5 0.5-0.2 1.1-0.2 2-0.9 0.8-0.1 0.9 0.4 0.9 0.8 0.3-0.5 0.7 0.4 0.6 0.4 1.5 0.5 0.3 1-0.2 0.2 1.2 1.5 1.3-0.2 1.1-0.9 1-0.9 0.4-0.7 0.7-0.9 0.3-0.5 0.8 0.3 1.3 0.9-0.1 1.8 1.5-0.1 1.4-0.6 0.6 1.8 0.9 0.4 1.1-0.4 0.9 0.7 0.3 0.6 0.9 0.5 1.2 0.9 0.5z",
        16: "M670.4 475.6l-0.6 2.6 0 2 0.7 0.9 1.5 0.7 1 0.6 1.3 1.6 0.1 0.5 1.9 1.8 0.3 0.5 0.1 1-0.2 0.6-1.9 1-0.5 0.4-1.1 2.6-0.5 0.5-1.1-0.2 0.7 1.1 2.1 0.6-0.1 1.2-0.4 0.4 0.9 0.6-0.4 1.9 0.3 0.7-0.6 0.5-0.1 0.7-0.8 0-0.6 0.4-0.8-0.3-0.5-0.6-0.5 0.5 0.2 1.7-0.1 0.9 0.7 0.9-1 1.4 0 0.7 0.3 0.5 0 0.6-1.2 1.9-0.2 1.1-1 0.6-0.6-0.2-0.1 0.9-0.9 0.8-1.1 0-0.4 1.3 1.2 0.3 0.8 1.1-0.2 0.9-1.7-0.1-0.4-0.3-1.6 0 0.2 0.5 0.6 0.6-0.8 0.3-0.4 0.7 0 0.7-1 0-0.6-0.6-0.9-0.5-0.2 1.2 0.5 0.1-0.5 1.1 0.6 0.2-0.2 0.9-1 0.4-0.8-0.2-0.3 0.5 0.6 0.4-0.6 0.6-1.7-0.9-1.2-0.3-0.6 0.5-0.8-0.3 0.6-1-2 0-1-0.4-0.4 0.6 0.5 1.1 0.7 0.4-0.3 0.6 1.1 0.5-0.2 0.8 0.3 1.7-1 0.5-0.2-1-0.5 0.1 0.1 1.6 0.3 0.7-0.3 0.4-0.9 0 0.1-1.1-1 0.6-0.2-0.6-1.8-0.4-0.2 0.6 0.8 1 0.4 0.2-0.6 0.9-1.4-0.2-1.7-0.6-0.8-0.8-1.1-0.5-1.3-0.5-0.7 0.8-0.6-0.4 0-0.4-1-0.6-0.7 0.7 0.2 0.7-0.7 0-0.6 0.8-0.8 0.4-0.6-0.1-0.1 0.6 0.6 0.8 0 1.2-0.4 0.2-0.5 1.5 0.1 0.4-1.9 0.4-0.2-0.6-0.7-0.1-2.1 0.5-2 0.8-2.1 1.2-1.7-0.2-1.2 0.1-1.3 1.6-0.9 0.2 0.1 0.4-0.9 1.1 0.4 0.8-0.4 0.3-0.2 1.9-0.8 0.2-0.9 0.5 0.4 0.7-0.4 0.2-0.6-0.3-0.1-0.4-1.2 0.2-0.7-0.1-0.1-0.8-0.6-0.1-0.9-0.6-1.2 0 0.4-1-0.4-0.9 0.3-0.9-0.5-0.7-1.2-0.1-1 0.2 0-0.4-1.2-0.2-0.9 0.8 0 0.4 0.7 1.2 0.3 1.1-0.7 0.1-2.8 1.2-1.1-0.6-1.1-0.2-0.5 0.9 0.1 1.6 0.6 0 0.6 1.2-1.1 0.4 0.2 1.3-0.3 1-1 0.9-0.2 0.6 0.3 2.7 0.7-0.1 0.7 0.8 0 0.5 0.8 0.4 0.5 0.7 1 0 0.3-0.3 1-0.3 1.9 0.1 0.4 0.5-0.2 0.6 1.6 0.8 0.9-0.1 0.7 0.5-0.1 0.7 0.9 0.8 0.5 1 0.9-0.1 0.4 0.9 1.6-0.1 0.7-0.6 1.8 0.8 0.9-0.3 0.7 0.2 0.4 0.6 0.8-0.7 1.6 0.3 1.2-0.1 0.5 0.8 0.8-0.5 0.1 0.7-0.7 0.7-0.7-0.2-0.4 0.5-0.5-0.4-0.4 0.5-0.8 0.2-0.1 0.4 1 0.7-0.4 0.5-0.1 0.9-0.5 0 0 1.1-0.4 0.8-0.2 1.2 1.3 0.6 0.9 1.4 2.4 0.4 1 0.8 1.3 0.6 0.7 0.7-0.1 2.1 0.4 0.2 0.2 0.6 0.7 0.1 1.1-0.3 1.7 0.3 0.3 0.8 0.7 0.3 0.2 0.9 0 1.6-1.3-0.2-0.2 0.4 0.6 1.8 1.4 0.2 1.3 0.7-0.1 1-0.4 1.1 0 0.6 1.5 0.9 0.6 0.7-0.1 1.1-1.3-0.3-1-0.1-0.8 0.4 0.5 0.5-0.7 0.7-1.5 0.4-0.8-0.3-1.4-0.1-0.4-0.7-0.8 0.1 0-1-1.1-0.5-0.8-0.2-0.4-0.6-0.9 0.1-1-0.3 0-0.6-0.5-0.2-0.3-0.6-1.4 0.7-0.7-0.1-0.5 0.7-1.7-1.2-0.7-0.3-0.5-0.7-0.5-0.3-0.2-0.7-1.1-1.2-0.2-0.8-0.5 0.2-1.6-0.3-0.6-0.8-1.9-0.3-1.5-0.4-1.1-2-1.1-0.7-0.7 0.7 0.4 0.3-1.1 1-0.9 0.3-0.1 0.7-0.5 0.9 1.4 1.3 0.5-0.1 0.4 1.6-0.1 0.7-0.8 0.9 0.9 0.3-0.5 0.5 0.4 0.4-1.1 1.4-0.5 0.9 0.8 1 0.8 0.6 0.3 0.5-1.1 2 0.3 0.7-0.8 1.1-0.1 0.4-1.1 1.9-0.5 0-0.6 0.6-0.6 1-1.8 0-2-0.1-0.8-0.4-0.1-0.7 0.8-1-0.3-0.5 0.6-1 0.9 0.3 0.5-0.3-0.9-1.2-0.4 0.4-1.2 0.5-0.4 0.6-0.8 0.4-1.1 0.1-0.3 0.3-1.2-1.6-0.5 0.3-1.4 0.3-0.3-0.2-1.5-0.5-1.1-0.7-0.6-0.1-1-0.7-1.6-0.8-1.6 0.1-0.1 1.1-1.3-0.1-1.7 1.7-1.1 2.5-0.4 0.4-0.5-0.3-0.1-1.2-2.4-1.2-0.8 0.3-0.6-0.7-0.1-0.4-1-0.4-0.8-0.1-0.9 0.2-0.6 0.9-0.5 0.1-0.2-0.5 1.5-0.8 0.2-0.9-0.2-0.6 0.9-1-0.1-0.2 0.7-1.6 0.2-0.8-0.1-0.8 1.2-0.7 0.3-0.8-1-0.1 0.2-0.9-0.6-0.3 0.3-1.1-0.3-1.3-0.4-0.4-0.2-0.8 0.5-0.4 0.1-0.6-0.8-0.2-3.1 1.3-0.3-0.3-1.2 0.6-0.3 0.6-0.9 0.1-0.1-1-1.4 0.6-0.8-0.2-0.4-0.4-1.7 0-0.3 1.1-2.8 0-1-0.6-2 0.3-1 0.2-1.5 0-0.9 0.5 0 0.7-0.9 0.2-0.7 0.5 0 0.5-1.1 0.3-0.8-0.2-1.6 0.4-1.2 0-0.8-0.4-0.7-0.9-1.8 0-0.3-0.4-1.1-0.6-0.5-0.8-0.1-0.9 0.1-0.8-1.1-0.2-0.9-0.6-0.7-0.8-1.9-0.4-0.1-0.7 0.2-1.1 0.5-0.6 1-0.3 1.1-1.5 2.3 0 1.1-0.5 0.5-0.6 0.6 0 0.6-0.9-0.2-1.7 1.2-1.1 0.9 0.1 0.1-0.9 0.7-0.5 0.3-0.6 0.1-1.2 0.3-0.4 0.9 0 0.7-0.5 0-0.9 0.4-1.5-0.4-0.5-0.2-0.9-1.4-0.1-0.8 0.4-1 0.2-0.3-0.6-0.6 0.3-0.5-0.4-0.7 0.2-0.7-1.1 0.1-0.4-0.7-0.2-0.3 1-0.1 0.9-0.6 0.2-0.2-0.9-0.6-1.5 0.2-1.3-0.2-0.8-0.4 0-0.9-0.9-0.7 0.1-1.1-1.1-0.2-0.6 0.5-1.2 0.4-0.4-0.2-1.7 0.5-1.9-0.1-0.6 0.3-0.8-0.7-0.8-0.2-0.8-0.8-0.1-0.5 0.9-0.8-0.3-0.5-0.5 0-0.7 0.4-1.3-0.3-0.7 0.9-1.7 0.4-0.3 0.5-1.6 0.1-0.8-0.2-1.3-0.6-0.8-0.9-0.4-1.3 0.3-0.3 1.1 0.2 1.2-3.9-0.9-0.5 0.1-1.1-0.6-0.3-0.8-0.6-0.2 0.1-0.8-1.2-1.3 0.6-0.8-0.1-1.9-0.6-0.6-0.1-0.7-0.5-0.7 0-0.4-0.8 0-0.5-0.3 0-0.6-1.9-0.4-0.7-0.3-0.4-1-0.7-0.1-0.4-0.9 0.1-0.7-0.9-1.2-0.2-1.3 0.1-0.9-1.1-0.5-1-0.1-0.5-0.5-0.3-1.1-0.9 0.1-0.5-0.7-1.3 0.1-0.8-0.1 0.9-1 0.3-1.1 0.7-1.7-0.1-1.1 0.9-1.3-0.2-1-0.7-0.8 0.9-0.9 1.1-0.4 0.3-0.9-0.5-1.2-1-0.3 0-0.9-0.6-0.7 0.4-0.9 0-0.8 1.1-0.5 2.5-0.5 1.5 0 2 0.5 2.8-0.1 1.1 0.4 1.1-0.2 1.8-0.7 2-0.3 0.3 0.2 2.1-0.6 1-1 0.5-0.8 0.6-1.6 1.1 0.4 0.8 0.6 0.5 1.3 0.4 0.3 0.2 0.9 0.4 0.5 0 1.1 0.7 0.8 1-0.9-0.1-0.9 0.3-0.4 0.6 0.3-0.3 0.6 0.8 0.2 0.1-0.5-0.3-0.6 1.7-0.4 1.2 0.5 0.4-0.1 0-0.9 0.8 0 0.9 1.6 0.3 0.7-0.2 0.5-0.9 0.3-0.3 0.6 0.2 0.6 0.8 0.1 0.5 0.6-0.2 0.8 0.4 0.5 0.9 0.4 0.7-0.1 0.4 0.8 0.9 0.3-0.1 1.1 1.2-0.3 0.4 1.1 1 0.8 0.8-1.7 0.1-1.6 0.9 0.1 0.6-0.4-0.2-0.5 0.5-0.6 0.9 0.4 0.7 0 1.3 0.3 0.3-0.7 0-0.7 0.4-0.9 0.9-0.6 0.7-0.1 0.6-0.8 1.2-0.4 0.2-0.4 1.2-0.3 0.4 0.5-0.1 1.5 1.2 0.5 0.6-0.2-0.1 1.5 0.7 1.1 0.2 0.8 0.7-0.2 0.8 0.2 0.7-0.1 0.7-1.4 1.5-0.5 0.7 0.4 0.5-0.8 0.2 1.1-0.3 0.8 0.9 0.2 0.8-1.1 1.1-0.3 0.7-0.4-0.5-1.3 1.7-0.4 0.7 0.1 1.1-1 0.9 0-0.1-0.8 0.6-0.3 0.7 0.1 2.2-0.3 0.7-0.5 1.1 0.4 2-0.6 0.4 0.8 1-0.1 0.2-0.7 1-0.5-0.3-0.7 0.6-0.7 0.7 0.2 0.3 0.4 1.3 0.3 0.7-0.1 0.2-1.5-0.4-1.1 0-0.9-0.4-0.5 1.1-0.3 0.8-1.3 0-1 0.2-0.9 0.4-0.3 0.5-1.3 1 0.4 0.4 0.5 1.1 0.2 0.6-0.6 1.7 0.3 1.2 1.8 1.3 0.8 0.7 0 0.2-0.6 0.8-0.1 0.2-0.6 1.4-0.4 0.6 1 1.4 0.6 0.7 1.1 0.3 1.1-0.6 1.3 0.3 1.1 0.9 0.5 0.5 0.6 1.7-0.3 0-0.8 1.1 1 1.5 0 0.9 0.4-0.5 0.6-0.1 1 0.4 0.9-0.7 1.2 0.3 0.7 0.6 0.7 1.2-0.1 0.7 1 0.8 0.6 0.6 0.8 1.1 0.4 0.5-0.3 0.2-0.7-0.1-1 0.8-0.2 0.1-0.5 0-1.7 0.5-1.2 0.6-0.7 0.8 0 0.3-0.9 0.9-0.5 0.1-0.5 0.5-0.5 1.6 1.2 0.7 0.3 1.8-0.7 0.4 0.1 0.5-0.5 0.3-1 1.3 0 0.4 0.8 0.1 1.1 1-0.1 0.6 0.6 0.7-0.6 1.1 0.9-0.3-1.6 1.3-1.7 1 0 1.5 0.9 1.4 0-0.2-0.6 0.3-1.8 0.6-0.9 0.4-1.1-0.3-0.8 0.4-0.5-0.1-0.8 0.4-0.7-0.6-0.4 1-1.4 1.4-0.6 0.4-0.9-0.4-1.2 0.2-2.7-0.3-0.8 1.1-2 0.4-0.1 0.8-0.9 0.7 0.2 0.3-0.5 0.6-0.2 0.4 0.4 0.7 0.2 0.2-1.8 0.4-0.5 0.5-2.8 1.5 0.6 0.3-0.6 0.5-0.2 2.2 1.2 0.6 0.1 0-1.8 0.8-0.9-0.5-1.1 1.1 0.1 0.4 0.4 0.4-0.5 0.4-1.4 0.6-0.1 1.4 0.9 0.6-0.2 0.9 0.3 1.1-0.1 0.3 0.3 0 0.8 0.5 0.4 0 0.6 2.6 0.3 0.2 1z",
        17: "M320.8 730.6l0.7 0 1.1 0.5-1.1 1.3 0.5 0.9-0.6 1 0.4 0.9 0.6 0.4-0.2 0.9 0.3 1-0.1 0.5-1.1 0.3-0.7 0.8 0.3 0.7 1.8 0.6 0.7 0.9 0.6 0 0.3 0.9-0.3 0.8-0.9 0-0.1 1.5-1-0.2 0.2 1.1-0.8 0.5-0.2 0.8-0.3 0.4-1 0.2 0 0.5-0.5 0.4-0.2 0.7 0.6 0.1 1.1 0.6 0.3 0.5-0.8 0.8-0.4-0.1-1.1 0.4-0.2 0.4-1.1 0.3-0.4 1.4 0.2 0.9-0.4 1.1 0 0.8 0.7 0.1 0.5 0.4 0.5 0 0.4 0.9 0.9-1.1 0.7 0.8 1.3-0.3 0.2 0.9 1 0.4 1.2 0 1.1 0.8-0.2 1-1.2-0.3-0.5 0.3-0.8 0.1 0 0.9-0.5 0-0.8-0.4 0 0.9-1.3-0.4-0.8 0.5 0 0.5 0.8 0.5-0.4 0.4 0 0.9-1.3 0.3-0.3-0.5-0.8-0.1 0.2 0.9-0.3 1.1-0.5 1 0.7 0.4-2.5 2 0.4 0.3-0.1 0.7-0.7 0.1-0.3 1 0.5 0.8 1 0.6 2 0.6-0.1 0.4 0.6 0.6 0 0.6 0.5 1 0.2 0.9-0.7 0.6 0 0.8-0.5 0.5 0.1 1.3-0.4 0.3 0.2 2.3-0.1 0.7 0.5 1-0.2 0.7-1.1 0 0.1 0.5-0.5 1.7 1.6 0.3-0.1 1-1.7 0.6 0.6 0.9 0.9-0.4 0.4 0.2-0.6 1.3 0.1 0.9-0.7 0-0.5 0.6-1.1 0 0.4 0.6 0.5 0.1 0 1-1.2 0.2-0.4 0.3-0.1 0.7-1.4 0.1-1-0.4-0.2 0.6-1.3 0.2 0.4 1.4 0.7 0.9 1.6 0.6 0.7 0.4 0.7-0.1 1.3 0.6 0.9-0.4 1.5-0.2 1.3 0.3 0.6 0.6 1.6 0.9 0.3 0.6-0.4 0.9-0.5-0.4-0.8 0.4-0.6 0.6-0.8 0.1-0.5 0.6 0.3 1.3 0 0.9-0.4 1 0.1 1.6 0.4 0.6 0.2 0.9-0.5 1.5 0.4 0.9 0.3 0.1-0.2 1 0.4 0.4-0.2 1.5-1.5-0.3-1.4-0.5-0.6 0.3-1.1 0-0.7-0.3-2.5-0.2-1.1-0.3-0.5 0.2-1.9 0-1.2 0.4-0.5 0.3-0.9 0.3-0.9 0.5-1.5 2-0.2 1 1.3 0.1-0.1 1.5-0.5 1 0 0.9 1 0.2 0.3 0.4-0.3 0.6 0.8 0.5 0.8 0.7-0.3 1.2-1.1-1-0.5 0.4-1.4 0.4 0.1 1.1-0.2 0.8 0.2 1.8-0.1 0.9-1.1 0-0.8-0.2 0 0.5 0.8 0.9 0.4 0.6 0.7 0.5 0.1 1.2 0.5 0.6-0.2 0.9 0.8 0.8 0.2 0.6 1.4-0.3 0.2 1.4 1.1 0.1 0 0.5 0.6 0.7-0.8 0-0.7 1.1 0.7 0.1 0.6 0.9 0.2 0.9-0.2 0.6-0.7 0-0.1 0.5 0.6 0.2-0.2 0.8-0.7 0.5 0 0.9-0.6 1.4-0.9 0.2-0.1 0.8-1.3-0.2 0.2-0.8-1.6 0-1.2 0.5-0.5-0.4-1.3-0.2-1.2 0.1-0.6-1-0.8-0.6-0.5 0-0.9-0.6-0.8 0.9 0 0.4 0.4 1.3-0.9 1.2 0.2 0.5 1.1 0.2 0.7 0 0.4 0.4 0.5-0.3 0.7-0.1 0.1 0.9-0.2 1.7-0.5 0 0.2 1-0.1 0.8-0.3 0.3-0.2 1.6-1.8 0.2 0.6 1.6-0.9 2.1-0.4 2.8 0.6 0.6 0.3 0.9 0.4 0.9 1.5 0.6 0.7 1.3 0.6 0.1 0.9-0.5 2.3 0.2-0.5 1.2-0.5 0-0.1 1.6-1-0.5-0.6 0.7-0.4 0.1-0.2 1.4 0.7 1.1 1.5 0.5 0.1 0.9-0.7 0.3 0.5 1.1 0.4 0.2 1.1-0.1 0.7 0.2 1-0.3 0.6 0 0.8 1.1 0.7 0 0.5-0.4 0.2-1.3-0.3-0.1 0.2-0.9 0.5-0.5 0.2-1.1 0.7-0.2 1.5 0.8 1.6 0 0.5-0.4 0.8-0.2-0.1 2 2.7 0.2-0.1 1.4 0.7 0.5 0.3 0.8 1-0.4-0.4-2-0.4 0-0.5-1.2 0.1-0.8 0.6-0.4 1 0.3 0.6 0.4 0 1.1 0.4 0.2 0.8-0.4 0.7 0.8-0.3 1.2 0.7 1.9-0.3 0.8-1.3-0.5-2.5 0-0.5 1.2-0.9 0.2 0.1 0.7 1.3-0.5 0.2 0.5-0.6 0.5-0.2 0.7-0.8 0.6-0.4 0-0.4 1.1 1.2 0.2 0.8 0.3-0.4 0.9 0.5 0.3 1.1-0.1 0.4 0.3-0.1 0.9-0.7 0.2 0.4 1.5-0.8 0.5-0.2-0.6-1.4 0-0.2-0.5 0.7-1.1-0.7-0.3 0.4-1.1-0.7-0.2-0.7-1.3-0.4-0.1-0.8 0.7-0.3-0.7-0.9 0.8-0.9-0.1-0.8 0.2-0.8-0.2-0.6 0.6-0.6-0.3-0.5-1.5-1 0.1-0.8-0.3-1.5-0.2 0-1.1-0.5-0.3 0.2-0.5-0.1-0.7 0.3-1.6-2.1-0.1-0.6-0.5-0.2 0.8-0.7 0.3-0.8 0-0.3 1 1 0.3 0.3-0.3 0.7 0.6 0.3 1 0.6 0.2 0.1 0.9-1.1 0.2-0.3 0.9 0.6 0.5 0.9 0.4 0.7 0.5-0.2 0.9 0.7 0.3 0.9 0.8 0.2 1-0.8 0.1-0.4 1.6-1.3 1.4 0.5 0.2-0.1 0.6 0.4 1.5 0.7 0.4 0.3-1.3 0.5 0 0.8 1.1 0.7 0 0-0.5 0.5-0.3 1 0.3 1.5-0.1 0.1-0.6-0.6-1 0.3-0.5-0.5-0.7-0.7-0.3 0.4-0.6 0.9-0.2-0.3-1.2 0.7-0.6 0.2 0.6-0.2 1.4 0.6 0.1 1.1-1.3 0.5 0 0.3 1.9 1.2-0.2 0.8-0.4 0.4 1.1 1.1-0.6 0.7 0.4 1.8 0.2-0.6 0.9 0.7 0.4 0.4-0.5 0.4 0.6 0.4 1.5-0.2 1.1-0.4 0.6 0.1 0.7 0.9-0.1 0.3-0.3-0.1-0.6 0.7 0 0.2 0.5 0.5 0.1 0.2-0.7-0.3-1.3 0.7 0 0.3 0.8 1.1-0.3 0.5-0.5 0.7 0.5 0-1.1 1.1-0.5 0.8-0.1-0.1 0.9 0.9-0.3 0.6 0.8 0-1.8 0.5-0.4 1.4-0.3 0.2-0.8 1-0.3 0.8-0.7-0.2-1-0.3-0.2-0.2-0.8 0.3-0.5 1.6 0.2 0.9-0.2 0.1 0.7 0.7 0.5 1.3-1.1 0.4-0.8 0.6 0.1-0.2 0.8 0.2 1.1-1 0.3-0.3 0.5 0.3 1.6 0.6 0.2 0.6-1.5 1.8 0.4 0.1-1.2 1 0.5 0.2 0.6 1 0 0.4 1.2-0.3 0.6 0.4 0.9-0.3 0.6-0.9 1 0.9 0.8-0.2 0.9-0.7 0.1-0.7-0.3 0.1 0.9 0.5 0.5 0 0.5 0.9-0.4 1.3-0.1 0.5 0.2 0 0.7 1.1 0.3 0 0.7-0.4 0.6 0.3 0.8 0.6-0.9 0.7-0.2 0.8 0.5 2.1-0.4 1.1 0.2 1.2-0.1 0.6 0.5-0.4 1.2-0.6 1.3-0.2 1.5 0.3 2.2-0.5 1.2 1.4 0.8-0.2 1.1 0.8-0.5 0.5 0 0.2 0.6 1.1-0.4 0.1 0.6 1 0.6 0.7 0.7 0.3-0.7 1.3 0.2 0.3 0.3-0.6 1-0.2 1.6 0.6 1.1-1.1 0.2-0.1 0.7-0.9 0.4 0.3 0.7-0.1 0.5-0.6 0.6 0.3 0.6-1.3 0.4-0.6 0.3 0 0.6 0.4 1.2-0.1 0.6-1.2-0.2-0.1 1.6 1.2 1.1 0 0.9-0.6-0.5-0.1-0.7-0.6 0.4-0.5-0.1-0.5-0.5-0.4 0.4-1.1-1.2-0.6 1.4-0.4-0.1-0.4 0.9 0 0.7-1-0.1-0.4-0.3-0.7 0.3 0 1.3-0.4 1.7-0.3 0.4-1.9-0.5-0.3 0.2-1.3-0.3-0.2-0.6-0.9-0.6-0.8-0.9-1.4-0.4-1 0.9 0.3 0.7-0.7 0 0-0.6-0.8-0.9-0.6 0.3-0.3 0.6-0.8-0.4 0.2-0.7 0.5-0.3-0.5-0.8-0.9 0.3-0.2 0.3-1.9-0.1-0.2 0.4-1.3 0.7 0.6 0.3-0.4 1.4-0.6 0.7 0.5 0.5-0.3 0.4-0.6 0.2 0.1 0.5-0.4 1-0.8 0.1-0.3 0.7-0.5-0.4-0.3 0.8-0.9 0 0.1-0.7-0.6-0.1-2.2 0.6 0 0.5 0.3 0.8-0.5 0.5-0.1 0.8-0.4 0.9 0.3 1.8 0.9 0.1-0.1 0.4-0.9 0.8 0.8 0.1 0.7-0.7 0.2 0.3-0.3 2.5-0.4 1.8-1.2 1.1-0.4 0.9-0.5 0.5-0.6 0.1-0.2 0.4-0.9-0.1-0.8 0.3-0.2 0.9 0.4 0.4-0.3 0.8 0.6 0.4 0.9 0.3 1-0.4 0.6 0.2 1.6-0.2 0.9 0.3 0.9-0.1 2.4 0.7 0.4 0.7 0.1 0.7 0.9 0.7-0.7 1.4-0.9 0.5-1.1 1.5-0.9 2 0.1 0.5-1 0-2.1 0.5-0.9-0.2-0.8 0.3-1.2-0.3-0.5 1.4-0.7 0 0.1 1.8-0.9 2.3-0.6 0.4-1.1-0.5-0.9-0.1-0.3 0.5-0.7 0.2-1.4-1.4-0.2 0.3-1.3-0.4-0.5 0.6-1.2 0.1-0.9 0.3-0.9 0-0.8 0.4-0.6 1.3-0.7 0-0.9-1.2 0.4-0.5-0.7-0.2-0.6-0.6-0.7-0.2-1 0.4-0.5 0.9-0.5-0.6-1.5-0.1-0.5 0.6-0.2 1.5-0.9 0.9-0.8 1.7 0 0.7 0.7 1-0.5 0.6-0.7-0.5-2.2-0.3-4.3 0.1-0.6 0.1-1.9-0.4-0.4-2-1.3-1-1 0.7-0.8 0.8-0.9-0.1-0.5-0.2-0.2-0.7 0-0.8 0.5-0.5-0.5-1-1.1 0.5-0.5-0.1-0.7 0.3-0.9-0.5-0.3-1.1-0.6-0.3-0.3-0.6-1 0.2-0.9-0.1-0.5-0.7 0-1.1-0.7-0.5-1.5 0.3-0.5 0.4-0.6-0.2 0-4.2-0.6 0.3-0.6 0-1.5 1-0.8 0.1-0.2 0.2-0.8 0-0.9-0.3-0.6 0.1-1.9-0.4-0.9-0.5-0.2-0.5-0.7-0.5 0.1-0.6-0.9-1-0.2-1.5-1.1-0.2-1.5 0.6-0.1-0.2-0.3-0.5-0.2-0.2-0.3-0.5-0.6 0.4-0.4 0-0.7-1 0-0.4-0.2-0.3-0.2-0.1-0.1-0.1-0.7-0.1-0.4 0.1-0.1 0.1-0.3-0.3-0.7-0.5-0.4-0.7-0.2-0.2-0.2 0-0.2-0.3 0.2-0.2-0.5-0.5 0-0.3-0.2-0.2 0-0.1-0.2-0.4-0.1-0.2-0.2-0.3-0.4-0.1-0.3-0.7-0.6-0.3-0.8 0.2-0.4-0.1-0.4 0.2 0.4-0.5-0.3-0.3-0.4-1 0.1-0.2 0.3-0.7-0.1-0.2-0.5-0.1-0.1-0.1-0.3-0.2-0.5-0.2-0.4-0.7 0.1-1.4-0.1-0.2 0.9 0.2 0.4-0.1 0.3-0.2 0.4-0.4-0.4-1.1-0.3 0.3-0.3-0.3-0.3 0.2-0.2 0-0.1 0.2-0.2 0.3-0.6 0.7-0.5 0 0-0.3-0.2-0.7-0.5-0.2-0.5-0.2 0-0.7-0.8 0-0.4-1.3 0.7-0.7 0.9 0.2-0.5-1.1-0.9-0.4-1.3 1.7-0.8-0.4-0.2-0.8-0.3-0.3 0.1-0.7-0.7-0.1-0.4 0.4-0.5-0.1-0.2-0.8 0.4-0.7-0.6-0.3-1.1-0.1-0.3-0.6-0.6 0.1-0.1 0.8-0.4 0.3-0.8-0.1-0.1-1 0.4 0.1-0.2-1-0.4-0.1-1.2 0.1-0.4-0.8 0.6-0.8-0.1-0.9-1.2 0.5-0.6-0.3-2 0.8-0.3 0.3-0.7-0.2-0.7-1.5-0.6-1.7-0.2-0.2-0.5-2.4-0.3-1.9-0.7-2.8 0.1-0.3-0.4-1.1-0.4-2-0.8-3-0.4-1.5 0-0.8-0.3-1.1-0.5-0.7-0.2-3.5-0.1-0.3-0.3-3.1-0.7-3.7-0.3-0.4-0.3-0.9-0.5-3.3-0.7-2.7-0.5-0.9-0.1-0.6-0.8-1.5-0.6 0-1.2-1.3-0.4-1.3-0.1-1-0.4-1.3-0.5-2.9-0.2-0.9-0.5-0.2-1.4-4.1-0.2-1.9-0.5-1.7-1.1-2.9 0-0.6 0.8-0.6-0.5-0.8-0.6 0.5 0.1 0.8-1.3 0.1-0.1-1.2-1.3-2.6 0.3-0.2-0.2-0.9 0.2-0.7-1.1-2.2-2 0.2-0.4-0.6-0.7-0.1-0.6-0.8-1.1-0.3-0.6-0.6 1.1-0.5 0-0.7-0.9-1.6 0.2-0.8 1-0.4 0.4-0.1 1 0.3 0-0.2-0.3-0.8 0.1-0.1 0-0.2 0.6-0.2 0.4 0.3 0.2 0.2 0 0.4 0.5-0.2 0.8-0.5 0.1-0.4 0.2-0.1 0.4 0.1 0.1-0.3 0.3-0.3-0.1-0.8 0.4-0.6 0.2-0.3 0-0.3 0.5-0.3-0.6-1-0.2-1.2 0.4-0.6-0.1-0.9 0.7-0.6 0.4-0.8-0.7-1.6-1.3-0.4 0.5-1.2 0.9-0.4 1 0.1 0.3-0.4-0.6-1.3 0.1-1.3-0.7-0.5-0.6 0-0.5-1.5 0.3-0.7-0.9-1.6 0.9-0.8 0.1-0.5-0.5-1-0.6-0.4 0.4-0.9 0.1-0.9-0.3-0.3-0.2-1.1-0.8-0.4-0.2 0.6-1-0.5-0.7-0.2 0 0.6-1.1 0.2-0.6-0.1-0.9-0.6 1.2-0.4 0.3-0.8-0.3-0.8 0.9-0.4 0.3-0.5 1-0.1 0.4-0.3 0.3-0.7 0.7 0-0.1 0.7 0.3 0.5 1-0.3 0.6 0.5 1.1-0.6 0.2-0.5 0.7 0.3 0.5-0.4 0.4-0.8-0.3-0.6 0.7-1.2-1.2 0 0-0.4 0.6-0.6 1 0-0.3-0.9 1.5-1.8 0.5-1.1 0-0.6 0.5-0.8 0.1-0.9-0.9-0.4-1 0.3-0.8 0.5-0.6-0.8 1.1-1.2 1.1-0.7 1 0.3 0.8 0.6 0.3-0.9-0.2-1.1 0.2-1.4 0.5-0.2-0.3-0.8 0.2-0.5-0.8-0.8-2.1-0.4-0.1-0.8-1 0.2-0.4-0.7-0.6 0.3-0.9 0.7-0.2-0.5 0.6-0.4-0.5-1.7-0.3-0.5 0.4-1.2 0.3-0.1 0.2 0.8 0.6-0.8-0.1-0.5-0.8 0.1-0.1-1.8-0.6 0.1-0.9-0.9 0.2-1-0.4 0-0.7 0.9-0.2-0.8 0.8-0.3-0.3-0.4 0-0.9 1 0.5 0.9-0.8 1.8 0.9 0.3-0.3 0-0.8 0.3-0.7 0.9-0.2 0.4-0.5 1.1-0.2-0.3-1.1 0-0.7 0.4-0.2 0.7 1.1 1.9-0.2-0.1 1.5 0.5 0.1-0.2 1.1 0.5 0.2 1.5-0.5 0.8-0.5 0-0.8 0.8 0.1 1-0.5-1.1-0.8 0.4-0.9 0.8-0.4 0.1-1.5 1.3 0 1.4-1.2 2.5-0.4 0.1-0.4 2.4 0.1-0.3-0.6-0.1-2.5 1.2-0.9 0.6 0.1 0.1-1-0.5 0-0.9-0.7 0.4-0.5 0.5 0.4 0.4-0.2 0.7 0.2 0.6-0.6 1.5 0.2 1.6-0.3 0 1 0.4 0.4 1.1 0.6 0.1 0.7 1 0.3 0.8-0.2-0.4 1 1.6 0 0.4-0.8 0.9 0.1 0.5-0.5 0.3-0.9-0.2-0.3 0-1.6 2.1 0.1 0.9-0.6 0.8-0.3 1.2 0.5 0.4-0.6 0.9-0.2 0.7 0.7 0.1 0.7 0.8-0.2 0.5-0.5 1.4 0.1-0.1-1.6 1.4 0.1 0 1.2 0.9 0.2 0.3 0.5 1.1-0.5-0.3-0.6 0.1-1.9-0.6 0.2-0.2-0.6 1.1-0.9-0.2-1.5-0.7 0 0-0.7-0.8-1 0-0.9 1.1-1-0.2-2-0.8-0.1-0.3-0.7-0.6-0.4 0.3-0.9-0.1-0.5-1-0.3-0.2-1.1 1.3-0.4 0-1 0.3-1.3 0.4-0.7 0.9 0.6 0.6 0.2 0 0.7 0.4 0.8 0.6 0.2 0.9-0.5 1.2 0.5 0.4 1 1 0.3 0.3-1.7 0.6-0.1 0.6 0.5 0.1 0.7 1.2-0.7 0 1.9 0.6 0.3 0.7 0.8 1.4-0.5 0.9 0 0.6-0.5 1.6 0 0.5 0.8 0.8-1.2 0.7-0.1 0.5 0.5 0.9 0.4 0 1.4 0.5-0.5-0.2-1.2 0.4-0.3 1.5-0.2 1.5 0.2 0.1 0.9 1.5 0.1-0.2-0.5 1.1-0.3 0.3 1.5 1-0.1 0.3-0.9 0.6-0.4 0-0.7-1.6-0.2 0.4-2.2-1.4 0.1-0.1-1.3 0.7-0.1 0.7-0.5-0.2-0.4-0.7 0.2 0.1-0.7 0.6-0.2-0.1-0.7-0.8-0.2-0.2-1.9 2.8-0.4 0.5-1.4 0.8-0.4 1.2-0.2-0.1-0.3 0-1.6 1.3 0 0-1.6 1.2-0.1 0.3 0.8 0.1 1.3 0.6-0.2 0.4-0.7 0.2-1 0.7 0 0.2 1 0.8 0.4 0.3 1 0.9 0.3 0.1-0.9 0.8-1.5 0.1-1.3 0.7 0.2 0.8-0.3 0.4-0.4 0.4-1-0.7-0.9-1-0.2 0.1-1.5 0.9 0 0.3 0.8 0.9 0.3 0.2-0.6 1.6-0.5 0.9 0.2 0.7-0.8 0.5 0-0.1-0.8 0.2-1.7 0-1.7 1.1-0.2 0-1.6 0.6-0.5-0.5-0.5-1.1-0.2 0.8-1.4 0.3-1.1 1.3-0.1 0.2 0.8 0.9 0.1 0.3-0.8 0.6 0.4 0.2 0.8 1.8 0 0.2-0.6-0.7-1 0.9-0.4 0.6 0 0.6-1.6 0.7-1.1 1 0.2-0.4-1.3 0.5 0 0.6-1.1 0.2-1.5 0.3-0.8 2.5-1.1 0.4-0.6 0.6 0.9 0.4-0.7 0.3 0.7 0.2 1 1.1 0.2 0.2 0.6-0.5 0.5 0 0.9-0.9 0.7-0.1 0.5 1.5 0.3 1-0.3 0 0.9 1 0.8 0.9-0.2 0.7-0.6-0.2-0.7 0.4-0.2 1.1 0.6z",
        18: "M282.7 1038.4l-0.1 0.8-0.9 0 0-0.5 1-0.3z m0 0l1 0.3 0 0.4-1 0.1 0-0.8z m-0.7-0.4l0.3 0.5-1.4 0.5 0-0.3 1.1-0.7z m-2.2-10.8l0.5 0.7 0.2 0.7-0.8-0.1 0.1-1.3z m-3.1-3.3l0.5 0.1 0.5 1-0.8-0.1-0.2-1z m-0.6-1.5l0.4 0.3 0.2 0.8-0.5 0.2-0.1-1.3z m-26.5-79.4l0.6 0.3 0.3 0.7 0.4 0.1 0.2 0.3 0.1 0.2 0.2 0.4 0 0.1 0.2 0.2 0 0.3 0.5 0.5-0.2 0.2 0.2 0.3 0.2 0 0.2 0.2 0.4 0.7 0.7 0.5 0.3 0.3 0.1-0.1 0.4-0.1 0.7 0.1 0.1 0.1 0.2 0.1 0.2 0.3 0 0.4 0.7 1 0.4 0 0.6-0.4 0.3 0.5 0.2 0.2 0.3 0.5 0.1 0.2 1.5-0.6 1.1 0.2 0.2 1.5 0.9 1-0.1 0.6 0.7 0.5 0.2 0.5 0.9 0.5 1.9 0.4 0.6-0.1 0.9 0.3 0.8 0 0.2-0.2 0.8-0.1 1.5-1 0.6 0 0.6-0.3 0 4.2 0.6 0.2 0.5-0.4 1.5-0.3 0.7 0.5 0 1.1 0.5 0.7 0.9 0.1 1-0.2 0.3 0.6 0.6 0.3 0.3 1.1 0.9 0.5 0.7-0.3 0.5 0.1 1.1-0.5 0.5 1-0.5 0.5 0 0.8 0.2 0.7 0.5 0.2 0.4 0.9-0.5 0.3-1.4 0.1-0.3 1-1.2 0.5-0.3-0.4-1 0.9-0.2-0.6-0.7-0.4-1.6 1 0.6 1.4-0.3 0.2 0.4 0.8-0.2 1.2 0.6-0.4 0.7-0.1 1.5 1 0.4-0.4 1 0.3 1 0.7 0.6-0.2 0 0.7 1.3 1.2 2.1 0.7 0 0.5 1-0.2 0.1 1.1-0.9 2-2.3 1.1-0.1 1.1 0.3 0.7 0.4-0.7 1.4-0.1 0.5 0.4 2-0.2 0.8 0 0.7 0.4 2.5-1.6 1 0.8-0.1 0.8-0.5 0.2-0.7 0.7 0.3 0.9 1.5 0.8-0.2 0.6 0.4 0.3-0.4 0.7 0.1 0.6 0.5 0 0.2 0.8-1.6-0.3-0.7 0.5-0.4 0.6 0 0.7-0.6 0.7-0.3 1.4 1.1 0.6 0.5 0.1 1.1 0.7 1.4-0.1 0.4 0.4 1.1 0.3 1 1.3-0.3 0.3 0.8 0.6 1 0 0.3 1-0.2 0.7-0.6 1.5-0.7 1.2 0.5 0.3 0.1 1.2-2.3 0.1 0 0.4 0.4 0.9 0.5 0.2-0.2 1.6 0.2 0.3-0.4 1.3-0.1 1.8-0.3 0.9 0.5 0.7-0.2 0.2 0.8 1-0.4 0.7-0.3 1.5 0.4 0.4 1.1 0.1 0 0.5 0.7 0.4 0.3 0.8 0.6 0.3 0.6-0.2 1.1 0.4 0.7-0.1 1.3-0.7 0.7-0.2 0.2-1 1-0.7 1.4-0.5 1.6-1.3 2.1 0.3-0.3 1.2 1.2 1.8 0.1 1 0.6 0 0.4 0.6-0.6 0.9-0.2 0.9 0.1 0.9-0.3 0.6-0.8-0.3-1.4 0.8 0.2 0.8 0.4 0.2 1.5 1.8-0.3 0.5 0.3 1 0.4 0.3-0.4 0.8-0.3-0.1-0.6 0.7-0.6 1-0.2 1 0.8 0.8-0.1 1 0.5 0.9-0.9 0.3 0.1 0.8-0.1 1.2-0.6 0.2 0 1-0.4 0.9-0.5 0.5-0.3 1.1 0 0.5 0.6 0.1 0.4-0.3 1.3 1.2 1.3 0.2 0.9-0.7 0.6-0.2 0.5 0.9 1 0.9 0 0.5 0.7 0.6 0.9 0.4-0.4 0.6 0.1 0.4-0.5 0.8-0.7-0.2-0.6 0.7-0.4 0.8 0.2 0.5-0.3 0.6 0 0.8-1.1 1.5-0.7 0.6 0 1-0.3 1.3 0.3 0.6-0.6 0.6 0.1 1.6-0.7 0.9-0.7 0.4-0.5 0.6-0.1 0.8-0.5 0.7-0.9 0.3-0.7 0.9 0.1 0.4 0.8 0.7 0.1 0.6 0.6 0.5 0 1.1 0.5-0.2 0.4 1 0.6 0.3 0.6 0.5 0.2 1.3-1 1.2-0.1 0.7-1.3 1.4-0.7 0 0.4 1 0.4 0.3 0.7 2 1 1 0 0.5 0.8 0.9 0.4 1.2-0.6 1.2-0.8 0.5-0.6-0.6-0.5 0.6 0.6 1.7-0.7 0.1-0.3 0.9-0.9 1.1-0.6 0 0.7 1.1-0.2 0.8-1 0-0.6 0.7-0.4 0.1-2.6-2-0.5-0.5-0.8-0.4-0.5-1.2-2.5-3-0.8-1.1-2.7-3.3-0.6-0.8-2.2-2.7-0.9-1.4-2-2.6-0.9-0.9-0.9-0.1-0.5-0.6-0.4-0.7-0.4-1.8-0.4-1.7-0.2-0.4-0.9-2.2-0.9-1.7-1.6-3.8-2.1-4.4-0.7-2.4-0.7-2.6-0.3-2.2-0.6-5.7-0.8-4.4-0.8-3 0.8 0.1 0.3 1 0.8 0.4-0.2 0.6-0.9 0.2 0.3 1.1 0.4-0.2 0.3-0.7 1.4 0.7 0.3 0.5 0.1 0.8 1 0.6-0.4 0.7 0.3 0.7 0.1 1.2-0.2 0.5 0 1.1 0.3 0.4 0.6 0.2 0 0.7-0.8 1.6 0 1-0.3 0.3-0.2 1.2 0.1 0.5 4.9-0.1-2.8-1.1 0-0.4 0.4-1.4-0.4-0.8-0.5-0.4 0.1-0.9 0.3-0.8-1.1-0.3 0.3-1.3-0.2-0.6-0.4-0.5-0.2-0.7 0.6-0.6 0-1-0.7-1.8-0.4-0.6-0.7-0.1 0.3 0.9-0.8-0.1-0.1-0.8-0.5-0.9-0.3-0.1-0.7-1.7 0-0.9-0.6-0.9-0.1-0.4 0.4-0.6-0.1-0.5-1.3-1.4-0.6-0.3 1.2 3.6-0.1 0.8 0.2 0.8-0.6 0.3-0.2-1-0.6-1.7-0.7-2.7-0.7-2-0.8-2.4-0.8-2.9-1.2-3-2.7-5.6-0.1-0.4-2.2-4.8-0.7-1.9-1.2-5.2-0.8-2.9-0.2-1.3-0.5-1.4-0.8-2-0.2 0-1-2.8-0.9-2.7-0.5-0.5 0.2-0.5-1.2-2.4-0.8-1.1-1.2-0.7-0.4 0.2-0.5-0.5 0-0.4-1.1-3.1-1.1-2.6-0.8-1.8-0.8-1-1.2-1-0.6-0.3-0.4-0.9-1.2-1.4-1-0.8-0.4 0.3-1.4-1.9-0.9-1.2 0.1-0.8-0.4-0.8-0.9-0.8 0.5-0.5 0.7 0.2 0.4-1.1-0.2-0.2-0.2-0.1-0.1-0.2 0.6-0.9-0.2-0.5 0.4-0.1 0.3 0.1 0.3 0.1 0.5-0.3 0.6-0.5 0.3 0 0.1-0.2 0.4 0.1 0.3-0.3-0.1-0.2-0.4-0.2-0.3 0-0.2 0-0.2 0.4-0.7-0.2-0.7-0.2-0.2 0.1-0.3 0.2 0 0.2-0.9 0.6-0.2 0.4-0.4 0-0.4-0.2-0.3 0.2-0.2-0.2-0.1-0.1-0.5 0.2-0.1 0.2 0.1 0.5 0 0.3 0 0.1 0 0.3 0 0.4 0.1 0.3 0.2 0.7-0.9 0.7-0.6-1.1-0.5-1.6-0.1-1.1-0.5-1.1-0.2-0.8-0.4-0.6-0.3-0.9-0.4 0.2-1.6-4-0.9-2.1-1-1.3-0.8-1.7-0.6-1.1-0.4-1.2-1.8-4.3-0.9-1.9-0.6-1.6 0.7 0.2 0.3-0.3 2-0.8 0.6 0.3 1.2-0.5 0.1 0.9-0.6 0.8 0.4 0.8 1.2-0.1 0.4 0.1 0.2 1-0.4-0.1 0.1 1 0.8 0.1 0.4-0.3 0.1-0.8 0.6-0.1 0.3 0.6 1.1 0.1 0.6 0.3-0.4 0.7 0.2 0.8 0.5 0.1 0.4-0.4 0.7 0.1-0.1 0.7 0.3 0.3 0.2 0.8 0.8 0.4 1.3-1.7 0.9 0.4 0.5 1.1-0.9-0.2-0.7 0.7 0.4 1.3 0.8 0 0 0.7 0.5 0.2 0.5 0.2 0.2 0.7 0 0.3 0.5 0 0.6-0.7 0.2-0.3 0.1-0.2 0.2 0 0.3-0.2 0.3 0.3 0.3-0.3 0.4 1.1-0.4 0.4-0.3 0.2-0.4 0.1-0.9-0.2 0.1 0.2-0.1 1.4 0.4 0.7 0.5 0.2 0.3 0.2 0.1 0.1 0.5 0.1 0.1 0.2-0.3 0.7-0.1 0.2 0.4 1 0.3 0.3-0.4 0.5 0.4-0.2 0.4 0.1 0.8-0.2z",
        19: "M165.7 1082.3l0 0.1 0.1 0 0 0.1-0.1 0 0-0.1 0-0.1z m2.4-1.6l0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0-0.1 0-0.2 0-0.1 0-0.1 0-0.1 0-0.1 0 0-0.1-0.1 0-0.1 0-0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0 0.1 0.1 0 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0-0.1 0.2 0 0 0.1 0-0.1 0.1 0 0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1z m-27-59.6l0 0.1 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0-0.1 0 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1z m46.5-1.9l0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0-0.1 0 0-0.1-0.1 0 0-0.1 0.1 0-0.1 0 0-0.1 0-0.1-0.1 0 0-0.1 0-0.1 0 0.1 0.1 0 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.2z m-45.2-1.1l0 0.1 0.1 0 0 0.1 0 0.1 0.1 0 0 0.1-0.1 0-0.1 0 0-0.1 0-0.1 0-0.1 0-0.1z m45.6-0.7l0 0.1 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1-0.1 0 0-0.1 0-0.1 0-0.1 0.1 0z m-34.8-14.6l0.1 0 0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0-0.1 0 0 0.1-0.1 0-0.1 0 0 0.1-0.1 0-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0-0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0.1 0z m-16.2-8.2l0 0.1-0.1 0 0-0.1 0.1 0z m51.6-0.3l0 0.1-0.1 0 0 0.1 0.1 0 0-0.1 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0-0.1 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0 0.1-0.1 0-0.1 0 0 0.1-0.1 0-0.1 0 0 0.1-0.1 0-0.1 0-0.1 0 0 0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0 0-0.1-0.1 0 0-0.1-0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0.1 0 0 0.1 0-0.1 0 0.1 0.1 0 0-0.1 0 0.1 0-0.1 0.1 0 0-0.1 0.1 0z m-51.5 0.1l0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.2 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0.1 0 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0z m4.1-4.4l-0.1 0 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1-0.1 0-0.1 0-0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.2 0z m1.2-0.2l-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0-0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0-0.1 0.1 0 0.1 0z m13.8-6.4l0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0 0.1 0 0 0.1-0.1 0 0-0.1-0.1 0 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0-0.1 0.1 0z m-21.4-2.7l0.1 0 0 0.1-0.1 0 0 0.1 0-0.1 0-0.1z m23.4-1.6l0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0.1 0-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1-0.1 0 0-0.2 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1-0.1 0 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.1 0z m7.2-8.3l0.1 0 0 0.1 0.1 0 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1-0.1 0-0.1 0 0-0.1 0-0.1 0-0.1-0.1 0 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1-0.1 0-0.1 0 0-0.1 0-0.1 0.1 0z m-27.8-3.6l0.1 0 0 0.1 0 0.1-0.1 0 0-0.1-0.1 0 0-0.1 0.1 0z m18-3.7l0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1 0 0.1-0.1 0-0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1z",
        20: "M500.3 522.8l-0.4 0.1-0.7 0.8-0.7 0.1-0.2 0.6-1.6-0.1-0.7 0.4-0.9 0.3-0.3 0.6 0.5 0.7-0.7 0.5-0.4 0.7-0.8 0.1-0.7 0.5-1.3-0.2-0.3 0.6 0.2 0.6-1 0.4-1-0.1-0.8-0.9-0.4 0-2.1 0.4-0.7-0.4-0.7 0.3-1.7-0.2-1.5-0.5-0.8 0.5-1.1-0.9 0.2-0.8-1.1 0.6-0.1 0.5-1.2 0.2-0.6-0.1-1.3 0.2-1.1-0.1-0.4-0.9-1.2-0.7-1.7 0.3-1.1-0.7-0.8 1.1-1.1 0.3-0.3 0.4-0.7 0.1-0.7 0.5-1.3-0.2-1.6-1-0.2-0.7-0.6-0.1-0.2-0.9-0.5-0.1-0.1-0.7-0.6-0.7-1.1 0.7-0.8 0.2-0.2 0.7 0.5 0.4-0.6 0.7 0.4 0.7 0.5 0 0.6 1.2-0.1 0.9 0.2 0.4 0.8 0.4 0.1 0.7 0.5 0.7-0.4 1-0.9 0.4-0.2 0.8-1 0-0.4 2.3-1.1 0.4 0.3 1.3 0.8 0 0.1 1.6 0.4 0.6 0.5 0.1 0.6-0.4 0.2-1.1 1.3 0.3 0.5-0.3 0.8-1.2 0.6 0 0.3 0.5 1.4 0.1 0.4 1 0.6 0.4 1.8-0.3 0.8-0.6 0.5 0.1 0.6 1 0.5 0.3 0 1.2 0.7 0.7 0 0.8 1 0.5 0.8 0.1-0.3 0.6 0.3 0.3 0.9 0.2 0.3-0.5 1.4-0.2 0.2 1.3 0.3 0.3 0.8-0.3 0.8 1.2 0.9 0.3 0.1 1.4-0.7 0.6-0.9 1.5-0.2 2.4 0.5 0.1 0 0.7-0.6 0.4-0.2 0.7-0.4 0.3-1.9-0.4-1.1 1.3-0.9 0.1-0.8-0.3-0.3 0.2-1.1 0.1-0.7 1.4 0.7 1.1 0.1 2-0.9 0.3-0.4 0.6-1 0.7-0.4 0.7-1 0.4-1.3 0.1-0.9 0.3 0 0.8-0.2 0.6 0.5 1.3-0.1 0.5 0.4 0.7-1.3 1.5 0.6 1.9-0.6 1.1-0.4-0.8-0.4-0.3-0.3 0.8-0.6 0.3-0.7-0.1-1.2 1.5-0.1 0.8 0.3 0.4-0.3 0.5-0.5-0.1-0.1 0.8-0.4 0.3-1.6-0.6-0.2 0.7-1.4-0.2-0.8 0.7-0.4 1-1.2-0.1-1 0.8-0.1 0.9-0.9 0.1-0.3-2.2-1.9-0.7-0.3 0.3 0.1 1-0.5 0.3-0.8-0.7-0.6 0.2-0.2 0.8-1.1 0.8-1-0.4-0.1-0.7-0.7-0.3-0.8 1.2-1.3 0.6-0.1 0.3-0.2 1.8 0.5 1.5-0.2 0.5 0.2 1.3-0.6 0.6-0.4 1.2-1.3 0.1-1 0.5-0.1 0.6 0.3 0.6-0.4 0.5 0.2 0.7-0.1 1.2-1 0-0.5 0.6 0.6 0.2 0.5 0.6-0.2 1.2-0.7 0.5-0.5-0.4 0.1-0.9-0.5-1.1-1.2-0.3-0.6 0.7-0.2 1.3-0.5 0.2-0.3 1 0 0.8-0.6 1.4-0.6 1 0.1 0.7-0.4 0.7 0 0.8 0.5 0.4 0 0.7-0.3 0.4 0.2 0.6-0.2 0.9-0.7 1.5 0 0.6-1 0.3-0.7-0.6-0.7 0-0.5 1-0.1 1.3-0.5 0.8 0.4 1.1 0.1 0.9-0.5 0.5 0.1 0.7 0.3 0.5-0.2 0.6 0.6 0.6-0.3 1.6 0.3 0.9-0.5 0.9-0.7 0.7 0.1 0.5-0.5 1.5-1 1.5-1.3 0.5-0.8-0.2-0.4-0.7-0.7 0 0.1-0.5-0.9-0.5-0.6-0.7-1.5-0.2-1-0.3-0.2 1.1-0.3 0.1-1.1-0.4-0.4-1 0.8-1.1-0.4-1-0.9-0.9-0.1-1.1-1.1-0.7-0.6-1.3-0.9 0-1.2-1.7-1.3 0-0.6-0.5-0.6 0-1.5 1.1-0.8-0.2-0.3 0.6-0.6 0.3-1 1.1-1.3 0-1.1 0.8-0.7-0.8-1.6 0.1-0.4 1-0.8 0.1-1.2-0.3-1.1-0.6-0.2-0.4-0.9-0.9-2-0.7-0.7 0.4-0.6 0-0.3 0.4-1 0.1-0.2 0.7-1.4 0.1-1.2 0.4-0.5-0.1-0.8 0.1 0.1-0.8-1.2-0.9-0.2-0.8 0.5-0.5-0.8-1.8-1.1-0.4-0.6 0.1-1-0.3-0.5 0.6-3.8-0.7-0.9-0.9-0.8 0.1-0.5 0.6-0.1 0.7 0.4 0.3-0.4 0.8-2.4-0.4-0.2 0.8-0.5 0.4-0.9 0.4 0.1 0.3-2.5 0.2-0.7 0.1-0.5-0.6-0.7 0-1.2 0.9-0.9 0 0 1.1 0.4 1.5 0.4 0.1-0.2 1.2-1.2-0.5-0.3 0.6-1.2-0.4-0.2 0.2-2.1 0-0.4 0.8-0.4-0.8-0.5-0.1-0.2 0.7-0.5 0.3-1.4-0.6-0.9 0.1-0.7-0.2-0.6 0.3-0.5-0.4-0.7 0-0.9-1-0.7-0.4-1-0.1-1 0.8-1.4 0.1-0.6-2.2-0.3-0.5 0.4-0.9-0.7-0.3-1.1-0.2 0.2 0.7-0.5 0.7-0.9-0.5-0.6 0.6-1.6-0.7-0.1 0.8-1 0.2-0.8 0.5-1.2-0.2-0.3 0.2 0 0.9 0.2 0.5-0.3 0.6-3.6 2.2-0.7 0.1-0.8 0.6-0.7 0.1-0.6 0.5-1.4 0.1-0.1 0.5-1.3 0.3-1.2-0.4-1.6-0.7-0.6-0.1-0.2 0.7-1.6 0.3-0.3 0.6-1.1 0.3-0.1-0.7-1.1 0.2-0.3-0.6-0.6-0.2-1.5 0.2 0 0.9-1.3-0.3-0.5-0.3-2.1 0.1-0.2-1.4-0.4-0.8 0-0.7-1.1-0.6 0.1-0.6-0.7-1 0.1-0.9 0.7-0.1 0.5-0.4 1.6 0 0.8 0.5 1.3 0.4 0.8 0 0.6-0.4-0.6-0.7-0.6-0.1 0-0.9-0.5-3-0.5-1.1-1.6-1.8-0.7-0.3-0.1-0.5-0.8 0.3-1.6 0.2-2.2-0.2-0.6 0.2-1.5-0.1 0.4 0.9-0.7 0.2-0.3 0.5-1.2-0.1-0.1 0.7-0.4 0.2-0.8-0.4 0.1-0.6-1.4 0.3-0.9-0.4-0.9 0.2-0.9-0.1-0.3 0.4-2.1 1.1-3.6 2.9-1.4-0.5-0.6 0.8-1.3-0.1-0.5 1.2 0.2 1-0.8 0.5 1 1.2-0.3 0.9-1.4 0.8-0.4 1.3-2.1 1.4-1.4 1.1-0.1 0.4 1.2 1.7-0.1 1.3-0.5 0-0.4 0.7 0 0.8-0.3 0.5-2.2-0.5-1 0.6-1.3-0.3-0.3 0.4-0.3 1.3-0.5 0.5-0.2 0.9-0.7 0.3-0.7-0.1-0.1 0.5-1.1 0.6-0.5-0.1-2.8 0.2-0.4-0.6-2.9 0.1-0.5-0.6-1.1-0.8 0.1-0.5-0.9-0.9 0.5-0.5 1.3 0.3-0.1-1.9-0.6-0.4 0.5-0.9-0.5-1.1-0.6-0.3-0.7-2.3-0.3-0.5-1.6 0.7-0.6-0.4-1.7-0.5-0.5-0.6-1.8 0.2-1-0.4-0.9 0.5-1 0.1-1.1-0.2-1.4 0.1-0.5-0.2-1.3 0-1.1 0.4-1.5 0-0.4-0.5-0.9 0.1-0.4 0.4-1.1 0.3-0.8-0.5-1.9-0.3-2.9 0.3-0.8-0.6-0.2 0.3-1.8 0 0-0.7-1.6 0.3-0.8-0.4-0.4 0.2-1.1-0.6-2-0.8-0.8-0.7-0.5-1.7-1.1-1.8-1.4-0.3-0.2-0.3-1.1-0.6-1.8-0.5-0.8-0.7-1.3-0.1-1.4 0.8-0.8 0-2.6-0.5-1-0.4-1.4-0.7-2.3-0.4-0.1-0.7-0.8-0.2-0.4-1.1-0.9 0-0.4-0.4 0.2-1.4-0.3-0.3-0.2-1.1 0.3-0.6 0.2-2.4 0.3-0.8-0.4-0.9-0.7-0.8-0.7-0.4-0.7 0-0.3-0.6 0-1.2-0.3-0.6-1.6 0.4-0.4 0.7-1.1 1-1.5 0.3-0.3 1.1-3.1 0.4-1-0.7-0.9-0.4-0.1-0.5 0.4-0.6-1.8-0.6 0-0.6 0.8-0.7 0.4-0.6 0.9-0.3 0.2-1.5-0.5-0.1-0.7 0.3-0.2-1.3 0.2-1.1-0.3-0.2-0.1-1.7-0.3-0.2-1.3-0.1 0.1-1.7-0.6-0.7 0.3-1.6 0.2-0.4-0.1-0.7 0.8-0.1 0.6-0.4 0.5 0.7 0.2 0.8 2 0.4 0.2-0.8 1-0.6 0.4-0.6 1.2-0.6-0.4-1.2-0.9-0.6-1.1 0.1 0-1.1-0.7 0.1 0.1 0.8-1 0.1-0.6-0.5-0.6 1.2-0.6-0.4-0.1-1.4-0.8 0.2 0.2-1.6-1.4-0.3 0.1-1 0.7-0.3 0.6 0.1 1.5 0.9 0.9 0.3 0.1-0.6 1.2-0.8 0.2-0.6 0.5 0.1 0.5-0.6 0.3-1.1 0.7-0.4 0-0.4 0.7-0.5 0.6 0.3 1.1-0.1 1.3 0.3 0.6-0.3 0.1-1 0.4-0.8 0.2-1.4 1.2-2.1 0-0.8 0.9-0.3 0.5-1.6-0.6-2-0.4-0.4-1.1 0.2-0.6 0.7-0.6-0.4-1.4-2 1-0.6-0.5-0.8-0.2-1-0.8-0.5-0.1-0.7 0.8-0.3 0.5-0.8 1-0.8 1.4 0.3 0.4 0.4 0.8 0.3 1.5-0.1 0.8-0.5 0.4-0.6 0-0.5 2.1-0.5 0.6-0.7 1-0.7 0.5-0.7 1.6 0.3 1-0.7 0.2-0.7-1.1 0.4-0.8-0.3 0.9-0.5-0.7-1.1-1-0.1-0.7 0.5-0.7-0.1-0.6-0.8-0.9 0-0.7-0.5-0.6 0.4-0.5-1.3 0.3-0.6 0.1-0.9 0.5 0 0.4-0.7 0-1.4 0.9-0.4 0.5-1.2 1.5-0.2 0.4-0.6 1.4-0.8 0.8 0.2 0.3-0.7 0.7-0.2 0.4-0.7 0.7-0.1 0.2 0.4 1.7-0.8 0.6-0.7 0.6-1.2 0.7-0.6 1.1-0.2-0.5-1.5-0.5-0.3 0.5-0.7 0-0.9 0.5-0.5-0.2-0.9 0.2-0.3-0.4-1.2-0.6-0.1 0.2-1.7-0.4-0.8 0.4-1.7 0.9-1.8 0.7-0.5 0.3-1.1 0.6-0.4 0.1-0.6-0.4-0.4 0-1.1-0.5-0.4-0.2-1.1-0.7-0.4-0.4-1.3-0.9-0.7-0.7-1.5 0.9-0.7-0.4-1-0.7-0.6-0.7 0.3-1.3-0.3-1.5 0.2-0.6-0.3 0.1-0.6 0.9-0.8 0-1.9 0.6-0.7 0.4-0.9 1.5-1.6-1.5-1.5-0.7 0-0.5 0.4-0.7-0.3-1.4-1.2 0.4-0.5 0.7 0 0.3-1.1-0.3-1.2 1.4-0.5-0.2-1 0.4-0.7 0.7-0.6-0.1-0.6-1.3 0 0.5-1.5-0.3-0.6 0.8-0.4-0.2-1.6 0.4 0 0.3 1.2 1 2.1 0.6 0.7 0.3 0.8 0.9 0.5 1.5-0.3 0.7-1.4 1.2-0.3-0.3-1 0.1-0.7 0.9 0 0-0.7-0.3-0.8-0.5-0.2-0.9 0.3-2.3-0.2-0.7-0.2-0.2-0.4-0.7 0 0-1.5-1-1.8-0.1-1.5 0.3-1 0.7-0.3 0.3 0.3 0.1 1.1 1.2-0.1 0.4 0.4 0 1.1 1.2 0.2-0.1 0.6 2.3 0.2 1.1 0.5 1-1 0.6 0.3 0.9-0.4-0.1-2.9 0.8-0.8 0.9-0.2 0.2-0.6-0.5-0.8 0.1-0.6 0.5-0.3 0.9 0.7 3.8-0.4 1.3 0.2 0.1 0.6-1.1 0.7 0.1 0.9 0.5 0.7-0.4 1-0.3 1.1-0.9-1.7-0.2-0.9-0.6 0.6 0.7 1.3-0.7 0.5-0.2 0.9 1.7 0.7 0.5-0.6 1.6 0.3 1.2-0.5 0.6 0-0.3 1.1-2.5 1.1-0.4 0.1-0.6 0.6-0.5 0-0.5-1.3-1.5-0.4 0.3-1.3-1.6 0.4 0.9 1.4 0.8 0.4-0.2 0.5-1 0.1-0.9 1.2 0.2 1.1 0.7 1.4 0.4-0.5 0.7 0.2 0.6-0.1 1.3 0.4 1.6 0.2 0.4 0.3 3 0.6 1.1-0.2 1.8-0.8 0.5 0.2 1-0.3 1.1 1.3 1.6-0.5 0.7-1 2.1-1.3 1.5-0.1 0.7 0.3 1.1 1 0.1 0.5-0.4 1.8 0.5 0 0.1 1.4 0.2 0.6 0.7 0.3 0.4 1 0.9 0.1-0.1 1 0.6 0.5-0.7 1.2 0.2 0.5-0.1 1.4-0.2 0.3-1.4 0.9-1.1 0-0.6-0.5 0.1-1.1-0.8-0.3-0.2 0.6-1 1.1 0 0.7-0.7 0.2 0.1 0.6 0 1.5 0.9 1.4 1.1-0.1 0.5 0.5 0 1.5-0.2 1.2-1.1 0.3-1 3 1.2 0.2 0.3 0.9 0.8 0.3 0.6-0.2 0 1.4-1.7 0.3 0 1-0.6 1.4-0.8 0.1-0.1 0.6-1.2 0.4-0.6-1.1 0.1-0.7-0.6-0.6-0.9 0.6-0.2 0.7-2.3 0 0.1-0.7-1.4-0.5-0.6-0.7-0.7 1.7-1 0.9-0.2 2.2 1 0.4 0.6 0.7 1.1 0.6 0.9 0.7 0.2 0.8-0.1 0.7 0.6 0.6 1.1-0.2 1.2 0.2 1.3 1 0.3-0.5-0.3-1.2 0.8 0.1 0.3-0.4 0.2-1.4-1-0.5 0.2-1 0.8 0.1 1.1 0.8 0.1 0.9 0.6 0.1 0.8-0.6 1.7-0.9 0.9 0.4 1.4-0.8 0.4 0.1 0.6-0.7 0.9-0.4 0.2-1.6-0.7-0.9 0-1 1-0.2 1.2-0.7 0.6-0.9 1.9-0.6 0.2-0.2 1 0-0.2-0.9 0.3-0.5-0.2-1.4-0.4-0.3 0.1-1 1-1.2 0.1-0.3-0.4-1.4 0.2-0.4 0.7-0.1 0.1-0.8 0.5-0.6 0.7 0.8-0.4 1 0.3 0.6 0.1 1.3 0.6 0.4 0.8-0.2 1 0.5 0.4-0.8 1-0.5 1.2 0 2 1.5 0.4-0.6 1 0.3 0.4-0.4 1.1 0.6 0.4 0.5 0.1 0.8 0.4 0.6 1.1-0.2 0.8-0.5-0.5-0.8 0.2-0.4 1.5-1.1 0.1-0.8 0.8 0 1.3-0.3 0.5-0.5 0.3 1.3-0.5 0.7-0.4 1.4 0.9 0.8 0.6 0.4 0.3-0.3 0.9-0.1 0.5 0.3 0.7 1.5 0.4 0.2 0.9-0.2 1-0.5 0.5-0.1 1 0.4 0.5-2.2 0.6 0.1 0.4-0.5-0.9-0.8-0.1-0.4-1.4-1.5-0.5-1.5-0.5-0.6-0.3-1.2 0.4-0.3 0.1-0.8-0.3-0.7 0.3-1.1-0.3-0.2 0.3-1-0.2-0.7-0.4-0.4-0.7-1.4 1.1-0.6 0.7 0.1 0.3 0.8 0.5 0 0.4-0.8 0.6 0.5-0.1 1.8 0.9 0.8 0.6 0.2 1.1-0.5 1.1-1 0.3-1.1 0.6 0.1 0.5-1.4-0.2-1.1 0-1.8-0.8-1.5-0.1-0.8-0.5-0.4-0.9-0.1-0.7-0.6-0.3-1-0.6-0.2-0.8 0.6-0.6 0.1-0.6-0.3-0.9 0.2-0.5-0.1 0-0.7-1-1.3-0.5-0.8 1.2-0.6 2 0.1 1.1-0.4 0.7-0.9-1.2-0.6 0.4-0.8-1.8-1.7-0.2-0.6 0.1-1.5 0.4-0.9 0.7 0 1.8-0.5 0.5-0.3 0.5-0.8 3.2 0.7 1.3-0.4 0.5-0.7 1 0 0.4-1 0.9-0.1 0.8 0.3 1.4-0.4 0.8 0.6 0.6 0.8 1-0.5 0.6-0.1 1.3-0.9 0.1-2.5 0.9-0.2-0.3-1.2-0.9-0.7-0.6-0.2-0.5-0.8 0.6-0.5 0.3-0.8-0.4-1-0.7-0.2 0.4-1.2-0.4-0.7 0.6-1-1.9-0.8-0.8 0.4-0.7 1-1.4 0.9-0.1 1.6-0.7 0.1-0.2 0.7-1.3-0.1-1.3-0.8-1.3-0.2-0.5 0.6-0.8 0-0.5 0.9-1.1-0.1-1.1 0.2-0.2 0.7-0.9 0 0.1-0.7-1.3-0.9-1.7-0.3-2.4 0.5-0.2-0.8-0.9-0.4-0.9 0.2-1.1-0.1-1.5-1.3-0.4 0.2-0.8-0.6-0.5-1.6-0.8-0.4-0.2-1.1-0.7-1.4-0.6-0.8 0.1-0.8-0.5-1.1 0.2-1 0-1-0.5-0.6 0.4-0.9-1.2-0.8 0.2-0.9 0.7-0.4 0.8-0.1 0.1-0.5-0.2-0.8 0.2-1.2 0.7-1.1 0.6-0.5 0.6-1.1 0.4-0.3 1.2 0 0.3-1.1 1.2-0.3 1.3 0.5 0.7-0.1 1-0.7-0.1-0.8 1.2-0.1 0.8-1 0-0.5 0.7-1-0.3-0.7 1.4-1.1 0.5-1.4 1.8-0.4 1.9-1.2 0.3-0.9 0.7-0.6 1-0.4 1.1 0 0.4-0.3 0.6-1.4 0.5-0.3 1.2-0.2 1 0.3 1.5-1 1-0.5 1.4-1.5 0.3-1.2 1.7-0.9 0.7 0.3 0.5-0.2 1 0.1 0.3-0.5-0.4-1.1 1.6-0.3 1.6 0 1-1 1.6-0.5 1-1.1 1.5-1 0.8 0.3 1.1-0.5 0.4-1.1 1-0.4 1 0.1 0.5-0.1 0.4-0.7-0.1-1.1 0.7-0.5 1.3-0.2 0.3-0.5 0.1-0.8 0.4-0.5 1.3 0.1 1-0.5 0.8-1 1.9 0.5 0.9 0.4 0.4-0.3 0.1-1.9 0.7-0.5-0.5-0.8 0-0.7 0.8-0.5 0.9 0.4 1 0 0.1-0.4-0.6-0.9 1.7-0.4 0.4 0 1.2 0.6 0.3-0.2 0.1-0.9 0.5-0.6 2-0.3 0.7 0.1 0.8 1.6 1.4-0.1 0.6 1.1 0.5 0.3 1.9 0.4 1.7 1 1.3 0.1 0.6-0.8 1.3 0.3 0.7-0.9 1.3-0.3 0.1 0.7 0.7-0.4 0.7 1 1.7 0 1 1.5 0.9 0.8 1.3-0.3 1.5 0.6-0.4 1 0.4 0.3 1.2-0.8 0.6 0.4-0.5 1 0.6 0.8 0.1 0.6-0.8 0.7 0.5 0.7 0 0.9 1.2 0.6-0.1 0.4 1.1 0.8 0 0.7-0.5 0.9 0.7 0.6 0.8-0.4 1.2 0.5-0.3 1-1.3 0.5 0.3 1-0.4 0.6 1.4 0.3 0.3 1.5-1 0-0.7 1.1-0.7 0.1-0.3 1.1 0.5 0.3-0.7 0.7-0.8-0.1 0 0.7-0.5 0.6-1 0.2 1 0.7-0.1 0.7-1.4 0-0.5 0.7 0.7 0.4 0.2 0.7 1.1 1-0.7 0.3-1.3 1.4 0.2 0.4-0.3 1.3-0.9 1.6-0.7 0.9-0.6 0.4 0.3 0.6-0.1 0.9-0.9 0.2-0.5 1 0.8 0.4-0.1 1.2-0.7-0.1-0.1-0.6-0.8-0.4 0.1 1.2-0.7 0-0.8 1.4-1 0.5 0 0.4 0.5 0.7 1 0.4 0.7 1.3 0 1.1-0.2 0.8-0.3 0.3-2.2 0.5-0.7-0.1-1.2 0.5-0.9 1.1-1-0.3-0.5-0.6-0.8 0.9-1.2 0-0.7-0.3-1.5-0.3-1.1 1.1-0.8-0.4-0.6 1.1 0 0.9 0.4 1.1-0.9 0.3-0.3 0.7-0.8 0.3-0.5-0.3-0.4 0.9-0.1 1-1.3 1.4 1 0.4 0.2 0.7-0.8 1 1.3 0.5 0 0.6 0.6 0.6-0.2 0.6 0.6 0.9 0.7 0.2-0.3 1 0.6 0.2 0.5 0.6 0.9 0-0.1 0.6-0.6 0.4 0 0.8-1.2-0.1-0.7 0.9-1.2 0.4-0.3 0.4 0.2 1.4 0.3 0.7-0.4 1-0.7 0.4-0.6 0.8-0.9 0.6-0.2 0.4-1.5 1-0.5 0.7-1 0.4-0.2 0.6 0.1 0.8 0.7 0.2 0.8 1.2 0.5 1.3-0.2 0.7 0.3 0.9 0.8 1.1 0.6 1.4-0.4 0.7 0.4 1.3-0.5 2.4-1 0.4-0.2 0.7 0.7 0.4 0 0.8 0.8 0.3-0.1 0.8 0.2 0.5 1.8 1.4 0.6 0.2 0.9 1-1.2 1.5 0.5 1.1 0.7 0.5 0.8 0.8 0.7-0.1 0.2-0.4 0.8-0.4 0.2-1 0.9-0.5 0.3-1.1 0.8-1 0.5 0.1 0.4 0.6 0.9 0.6 0.9 0.1 0.9 1.5 0.6 0.3-0.2 0.5 1.3 0.8 0.5 1.1 1 0.4 0.7-0.2 0.2-0.5 0.7 0.5 0.3-0.3 0.7 1.3 0.3 1 0.7 0.1 0.2-0.9 0.6 0.2 0.4-0.5 0.6 0.1 0.8-0.6-0.1-1 1.1-0.7-0.1-1 0.9-0.7 1.2-1.4 0-0.6 0.4-1.7 0.3-0.4-0.2-0.7-1.3 0.2-0.5-0.7-0.6-0.1-0.4-0.9 0.4-0.5 0.4 0.6 0.6 0 0.8-0.5-0.7-0.4-0.2-1.3 0.2-0.4-1.1-1-0.3-0.9-0.4-0.3-0.4-1-0.6-0.1-0.6 0.5-0.5 0.7-1 0.1-0.8 0.5-0.9-0.3-0.1-1.3-0.3-0.9 0.6-0.6 0.5-1-0.3-2.4 0-1.1 0.6-0.7-0.6-1.8-2.3-1.2-1-0.3-0.5-1.6-0.9-0.6 0.2-0.9 0.2-1.5 0.2-0.4-0.1-1-0.7-1.1-0.8-0.3-0.1-2.2-0.8-1.7-0.3-1 0.2-1.1-0.5-0.5-0.6 0-0.5-0.6-0.5 0.2-0.6-0.4-1.2 0.8-0.8-0.4 0-0.6 1.3-0.2 0.7-0.7 0.6 0.7 0.7-0.1 0.2-1-0.1-1.3 0.9 0.7 0.7-0.2 0.1-0.9 0.8-1.5 1.1 0.3-0.1-0.9 0.9-0.4 1.1-0.1 0.3 0.7-1 0.9-0.4 0.6 1.8 0.4-0.2 0.7 1 0.3 1-0.3-0.2-1.7-0.4-0.5 1.7-0.4-0.2-0.6-0.8 0.5-0.6-0.7-0.8-0.6 0-1 1.1 0.6 1.1-0.3 2.2 1.2 0.1-0.6-0.4-0.9-0.6-0.5 0.2-0.5 1.4-0.3-0.2-0.7 0.6-0.7 1.3 0.1 0.6 0.3 0 0.8-0.9 0.5 0.7 0.9-0.2 0.9-0.9 0.9 0.9 0.7 0.4-0.5 0.6 0.1 0.4 0.7-0.1 0.9 0.2 0.9-0.9 0.1-0.3 0.6-1.4-0.5-0.1-0.5 1.2 0.1 0.4-1-0.9 0.1-0.5 0.4-0.9 0.1-1.3 1.3-0.1 0.8-0.7 0.8-0.7-0.2 0 0.9 0.7-0.1-0.3 0.9 1 1.4 0.4 0 0.6-1.9 0.3-0.3-0.5-0.9 1-1.2 1.5 0.6 0.9-0.6-0.1 1.4 0.6 0.7-0.9 0.5-0.2 0.6-1-0.4-0.5 0.9-0.8 0-0.2 0.7 0.5 0.6-0.5 1 0.4 1 0.8-0.7 0.8-1.1 1-0.4 0.5 0.2 0.5 0.6 0.6-0.6-0.2-0.6-0.8-0.4 0.5-1.2 0.9 0 0.1 1 0.4 0.5 1 0.3-1.1 1.5 0.4 0.5-0.5 1.1 0.6 0.3 0.7-0.6 0.2-0.8 0.7-0.7 0.2 0.6 0.9 0.5-0.3 0.7 0.5 0.6 0.3 0.6 1.6-0.2-0.4-1.1 0.6-0.2 0.4 0.9 1.4 0.4 0-1-0.4-0.5 0.8-0.2 0.4 0.8-0.2 0.4 0.7 0.4 0.2-0.5 0.7 0.1 0.4-0.8-0.4-0.9-0.6-0.5-0.2-0.8 0.5-1.1 0.6 0.7 1-0.4 0-1.6-0.9 0.5-0.9-0.8-0.6 0.6-0.5-0.5 0.2-1.2 1.1-1.1 1.8 0.3-0.4 0.6 0.5 1 0.1 0.9 0.5-0.1 0.2-0.9 1 0.5 0 0.6 1.7 0.3-0.6 0.5 0.3 0.8-0.4 0.7-0.7-0.2-0.2 0.7-0.7 0.7-0.1 0.8 0.3 1.1 0.6 0.2 0.4-0.7 0.5 0.3 0.1 0.7 1.1-0.9-0.3 1.3 1 0.5 0.4-0.6 0.5-0.1-0.1-0.9 0.5-0.5 0.8-1.2 0.6-0.2 0.2 0.6 0.8 0.5 0.7 0.1 0.5 0.4 1.1 0.2 0.4-0.3 1 0.1 1.1-0.4 1 0.7 2 1 1 0-0.5-0.7 0.7-1.5 0-0.7-0.3-1 0.3-0.6-0.6-0.7 1-0.6 0.7 0.2 0.9-0.1 1-0.6 1.6-0.2-0.1-0.7 0.7-0.5-0.1-0.8 0.3-0.7 1.7 0 0.5-0.5 1.5 0.6 0.3-0.6 0.8-0.4 0-0.4 0.9-0.3 0.1-0.8 0.8 0.1 0.6-0.3 0.5 0.2 0.4-0.9 0.6 0.2 1.2 1.2 0.1 0.8-0.3 0.5 0.3 0.9-0.1 0.9-0.2 0.5 0.3 0.6 1 0.1 0.5 1.1 0.7 0.5 0.7-0.2 0.1 0.8 0.8 1.8-0.3 0.3-1 0.1-1.3 0.8 0 0.4-0.9 0.9-0.6 1.2-0.8 0.4-0.5 1.3 0.8 0.3 0.8 0.7 0.5 0 1.4-0.8 0.4-1.2 0.5-0.6 1 0 0.6-0.4 0.6 0.5 0.4 0.9 1.1-0.6-0.5-1.1 0.7-0.4 0.3 0.7 0.9 0.6 1.2-0.8 0.9 0.5-0.6-1.3 0.2-1.7 1 1.2-0.5 0.9 1.1 0.2 0.4 0.6 0.9-0.2-0.2 1.1 1.9-0.7 0.2 0.4 1.4 0 0-0.9-1-0.5-0.9-0.2-0.1-0.9 1.2-0.5 1 0.2 0.6-0.4 0.7 0.6 0.4-0.4 0.4-1-0.2-0.9 1.1 0.1 1.2 0.9-0.6 0.9-0.7 0.7 0.2 0.8-0.3 0.5 0.3 0.6-1.1 0.8-0.4 0.8 0.8 1-1.1 1.1-0.7 0 0.1 1.1 0.7 0.3 1.2 0 1.1-0.4 0.3-0.3 1.3-0.6 0.6 1.2 1.6 0 0.9-0.6 1.7 0.1 0.4 1.1 1.3 1.1 0.5-0.8 0.5-0.6 0.2-1 1.5 0.7-0.2-1.2 0.4-0.2-0.3-0.7 0.6-0.4 0.9-1.3 0.5-1.1-0.1-0.7-0.4-0.7 0.4-0.4 0-0.9 0.6-0.5-0.3-0.4 2.1-0.3 0.7 0.2 0.6 0.9 0.8 0.7 1.3-0.3 0.3 0.7 0 0.7 1.6 0.8 0.4-0.3-0.1-1-0.5-0.4 0-0.7 0.5-0.4 0.9-0.1 0.3-0.6-0.6-0.2 0.1-0.6 0.7 0.1 1.1-0.4 0.7 0.5-0.2 0.6 0.8 0.1 0.5 0.4-0.9 0.7 0 0.5 0.8 0 0.5 0.7-1.2 1 0.9 0.8 0.9-0.7 1 0.4 0.2 0.8 0.8 0.2 0.3-0.6 2.6 1.6 1.3-0.3 0.6 0.5 0.9 0.1 1 0.8 0 1.5 0.3 0.8-0.4 0.6 0.1 0.8 0.9 0.4-0.1 0.5 1.2 1.1 0.1-0.4 1.4-0.4 2 1.1 0.6 0 0.6 0.5 0.4 0.6 0.7-0.4 1 0.4 0.4-0.3 1.2 0.1-0.4 1.3 1.1 0 0.4 0.4 0.1 1.9-0.5 0.5 0 0.6 1.4-0.3 0.8 0.6 0.2 1.4 0.4 0.6 0.7-0.4 0.5 0.2 0.5 0.6 1.7 0.2-0.2-1.5 0.3-0.8-0.4-1 0.7-0.8 0.4 0 0.5 0.6 0 0.4 1-0.2 0.3 0.3 1.1-0.1 0.4 1 1.5-0.4 0.5-0.4 1.7-0.5 0.9-0.5 1.1 0.9-0.2 1 0.4 0.3 0.9-0.2 1.3 0.2 0.1 1.7 0.9-0.1 0.2 1.7-1.9 0.5-1-0.6 0 1.6 0.7 0.5-0.5 0.9 0.1 1.9-0.4 0.4-0.2 1.1 0.4 0.6 1.4-0.1 0.1 0.9-0.1 1.1 0.1 1-0.5 0.9 0 1.2-0.8 0.5 0.4 2.1-0.5 0.4-0.1 0.7-1.1-0.2-0.6-0.6-0.4 0.9 0.2 0.4 1.3 1 0.2 0.6 0.6 0 1 0.3 0 1.1-0.5 0.5 0.2 0.7 1.9 0.4-0.1 0.9 0.3 0.5z",
        21: "M426.8 620.2l0.6 0.8 0 0.4-0.6 0.4-0.6 1.2-1.2 1-1.1 0.4-0.3 0.4-0.9 0.3-0.5-0.2-0.4 0.7-1.2 0.5-0.6-0.1-0.7 2.7 0.4 1.8-0.1 0.7-0.7 0.8 0.5 0.6 0 0.8 0.7 1.6 2.6-0.1 0.5 1.5 0 1.6 0.2 0.9-0.4 1.1 0 0.9 0.4 0.7 0.2 1.3 0.5 0.5 0.1 0.7-2.1 0.6-1 0.8-0.2 0.8 0.6 1.1 0.7 0.1 1.1-0.5 0.2-0.4 0.7-0.1 1.5 0.3-0.4 0.5 0.3 0.9-0.4 0.4 0.1 0.8-0.3 2.6-0.3 0.6 0.3 0.4-0.4 0.8-0.2 0.7 0.6 0.6 0.5 1.9-2.6 0.7-1 1.3-0.6-0.2-1.3 0.2-1.3 0.7-1.2 0.3 0.5 1.1 0.5 0.4 0 0.5-0.6 0.2-0.3 0.9 0.3 0.5 1.1 0.5 0.6 0 0.2-0.6 2.5 0.8 0.6 0.5-0.2 0.9 0.4 0.7-0.5 2.3 0.4 0.8-0.4 0.5-0.4 1.3-0.6 0.2-1.1-0.3-0.2-0.4-0.7-0.3-0.7 0.6-0.6 0.2-0.1 0.8 1.4 0.6 0.6-0.4 0.9 0.4 0.3 0.9-0.8 0.4-0.5 1.1-0.9 0.6-1.2-0.2 0.1 0.8 0.6-0.1 1.2 0.1 1 0.5-0.3-0.8-0.5-0.3 0.6-0.6 1.4-0.1 0.9 0.7-0.2 1.3 1.1 0.7 0.4 0.6 1.8 0.7 1.1 1-0.4 2.4 0.2 0.6 2 0 1.5 0.9 0.1 0.6 0.6 0.3 1.2-0.2 0.5 0.3 0.2 0.8 0.4 0.4 0.9 0.2 0.4 0.7 0.1 1.2-0.9 0.8-1.1 0-1.6 0.6 0.7 1.1 0.2 0.5 1 0.6-0.1 0.4-2.5 1.7-0.6 0.8-1.7 0.1-0.5-0.1 0-1-0.7-0.5-1.6 0.8-0.5-0.2-0.6-1.5 0-0.9-0.4-0.8-0.5 0.1-0.9 0.8-0.6 1-1.2 0.3-0.3 0.4-0.9 2.1-0.9 0.7-1 0.2-0.4 1 0.3 0.8-0.2 0.5-1.2 0.7-0.7 0.7-0.1 0.6 0.3 0.9-0.4 0.5-0.1 0.8-0.9 0.7 0.2 0.6-0.9 1.5-0.2 1.7 0.3 0.6 0.7 0.6 1.5 1.8 0.4 1.2-0.1 0.5-0.9 0.5-0.7 0.1-0.9 1.1-0.6-0.1-0.5 0.6 1 1.1-0.8 0.6-1.5 0.2-0.4 0.7-0.8-0.1-0.3-0.6-1.7 0.7-0.9-0.9-1.2-0.7-0.5-0.9-0.4-0.2-0.3-0.5-2.7-0.7-0.5-0.4-0.8-1.3 1.1-0.2 0.4-0.8 0.1-2.8-0.3-1.3 0.1-1.7-0.3-0.8-1.2-0.1-0.7 0.4-0.5-0.3 0.2-0.6-0.1-1.6 0.4-0.7 1.2-0.7 1.3-1.2-0.7-1-0.1-0.8 0.8-2.1 0.6-0.5-0.1-1.4 0.2-0.5 0.3-1.9-0.9-1.4-0.1-0.7-1.1-1.2-1.1-0.3-1.7-1.3-0.4-1.1-0.8-0.4-0.6-0.7-1.2-0.2-1 0.7-1.2 0.3-1.3 0-0.6 0.4-0.5 0.9-0.2 1.2-0.3 0.2-0.9-0.3-0.6-0.6-0.2-0.8-0.9 0.2-0.1 0.9-1.5 0.7-0.4-0.7-0.6-0.6-0.9 0-1.5-1 0-0.3-1-0.1-0.9 0.3-0.3-0.9-1.7-0.8-0.6 0.1 0.4 1.1-0.3 0.7-0.1 1.2-0.8 0.6-0.2 0.9 0.3 0.7-1 0.3-0.7-0.4-0.9-1.2-1.3-0.4 0-0.6-1.4-0.1-0.4-0.5-1.1 0.2-0.9-0.8-0.5 0.4-0.8 0 0-0.4 0.8-0.6 0-0.4-0.5-1 0.2-1.2-0.9-0.5-0.9-0.1-0.9 0.4-1 0 0.1-1.5-0.2-1.2-0.4-1-1.3 0-0.8-0.8-0.7 0.2-0.9-0.2-0.7 0.5-0.5-0.7-2.8-0.8-0.6-0.4-0.6 0.3-2-0.4-1.1 1-0.6-0.8-1.6-0.3-1.1-0.4-0.4-0.6-0.1-1-1.6-0.1-0.9-1.1-0.5 2.3 1.5 0.4 0 0.9 0.7 0.3 0.3 0.9-0.3 0.9-0.5 0.8 0 0.7-0.8 0.4-0.2 0.4-1 0.1-0.6 0.9 0.6 0.4 0.8 1.8 0 1.2-0.5 0.4 0.1 2 0.4 0.6 0.1 0.8-0.5 0.6-0.8-0.2-0.8 0.9-0.9-0.2-1.3 1.4-0.2 1.6 0.6 0.7-0.2 1.1-0.3 0.9 0 1.3-1.2 0.4-0.7-0.6-1 0.1-0.6-0.4-0.8 0.6-0.3-0.3-0.1-0.8-0.6-0.3-0.6-0.8-0.9-0.3-0.3-0.5-0.9-0.7-0.8 0.3-0.5 0.5-1.7 0.6 0 0.7 1.3 0.2 0 0.8-0.5-0.2-0.6 0.5-0.8 2.1 0.3 0.5-0.1 0.7-0.5 0.8 0.3 0.7-0.1 1-0.4 0.1-0.5-0.7-0.5 0.2-0.2 1 0.1 0.7-1.2-0.4-0.2 1.2 0.3 0.3 0.1 1.4 1.7 0-0.2 1.2 1.4-0.1-0.4 1.4 0.5 0.2 0.9-0.1 0.2 0.9 0.4 0.6 0.9 0.3 0.6 0.6 0 0.8-1.2-0.3-2.4 0.8-0.5 1.4-0.7 1.4 0 0.5-0.6 0.8-1.2 0.1-0.6 0.5-0.1 1.2 0.4 0.8 0.2 1.2-0.7 1.3-0.5-0.1-1.9 1-0.4-0.3-0.2-0.7-1.4 0.3-0.4 1.6 0.6 0.4-0.1 0.6-0.8-0.3-0.2 0.6 0.4 0.8-0.8 0.3-1.1-0.2-0.1 0.5 1 0.3-0.2 1.1-0.9 0.8 0.2 1 0.9 0.2 0.5 0.9-0.6 0.6-1.1-0.6-0.4 0.2 0.2 0.7-0.7 0.6-0.9 0.2-1-0.8 0-0.9-1 0.3-1.5-0.3 0.1-0.5 0.9-0.7 0-0.9 0.5-0.5-0.2-0.6-1.1-0.2-0.2-1-0.3-0.7-0.4 0.7-0.6-0.9-0.4 0.6-2.5 1.1-0.3 0.8-0.2 1.5-0.6 1.1-0.5 0 0.4 1.3-1-0.2-0.7 1.1-0.6 1.6-0.6 0-0.9 0.4 0.7 1-0.2 0.6-1.8 0-0.2-0.8-0.6-0.4-0.3 0.8-0.9-0.1-0.2-0.8-1.3 0.1-0.3 1.1-0.8 1.4 1.1 0.2 0.5 0.5-0.6 0.5 0 1.6-1.1 0.2 0 1.7-0.2 1.7 0.1 0.8-0.5 0-0.7 0.8-0.9-0.2-1.6 0.5-0.2 0.6-0.9-0.3-0.3-0.8-0.9 0-0.1 1.5 1 0.2 0.7 0.9-0.4 1-0.4 0.4-0.8 0.3-0.7-0.2-0.1 1.3-0.8 1.5-0.1 0.9-0.9-0.3-0.3-1-0.8-0.4-0.2-1-0.7 0-0.2 1-0.4 0.7-0.6 0.2-0.1-1.3-0.3-0.8-1.2 0.1 0 1.6-1.3 0 0 1.6 0.1 0.3-1.2 0.2-0.8 0.4-0.5 1.4-2.8 0.4 0.2 1.9 0.8 0.2 0.1 0.7-0.6 0.2-0.1 0.7 0.7-0.2 0.2 0.4-0.7 0.5-0.7 0.1 0.1 1.3 1.4-0.1-0.4 2.2 1.6 0.2 0 0.7-0.6 0.4-0.3 0.9-1 0.1-0.3-1.5-1.1 0.3 0.2 0.5-1.5-0.1-0.1-0.9-1.5-0.2-1.5 0.2-0.4 0.3 0.2 1.2-0.5 0.5 0-1.4-0.9-0.4-0.5-0.5-0.7 0.1-0.8 1.2-0.5-0.8-1.6 0-0.6 0.5-0.9 0-1.4 0.5-0.7-0.8-0.6-0.3 0-1.9-1.2 0.7-0.1-0.7-0.6-0.5-0.6 0.1-0.3 1.7-1-0.3-0.4-1-1.2-0.5-0.9 0.5-0.6-0.2-0.4-0.8 0-0.7-0.6-0.2-0.9-0.6-0.4 0.7-0.3 1.3 0 1-1.3 0.4 0.2 1.1 1 0.3 0.1 0.5-0.3 0.9 0.6 0.4 0.3 0.7 0.8 0.1 0.2 2-1.1 1 0 0.9 0.8 1 0 0.7 0.7 0 0.2 1.5-1.1 0.9 0.2 0.6 0.6-0.2-0.1 1.9 0.3 0.6-1.1 0.5-0.3-0.5-0.9-0.2 0-1.2-1.4-0.1 0.1 1.6-1.4-0.1-0.5 0.5-0.8 0.2-0.1-0.7-0.7-0.7-0.9 0.2-0.4 0.6-1.2-0.5-0.8 0.3-0.9 0.6-2.1-0.1 0 1.6 0.2 0.3-0.3 0.9-0.5 0.5-0.9-0.1-0.4 0.8-1.6 0 0.4-1-0.8 0.2-1-0.3-0.1-0.7-1.1-0.6-0.4-0.4 0-1-1.6 0.3-1.5-0.2-0.6 0.6-0.7-0.2-0.4 0.2-0.5-0.4-0.4 0.5 0.9 0.7 0.5 0-0.1 1-0.6-0.1-1.2 0.9 0.1 2.5 0.3 0.6-2.4-0.1-0.1 0.4-2.5 0.4-1.4 1.2-1.3 0-0.1 1.5-0.8 0.4-0.4 0.9 1.1 0.8-1 0.5-0.8-0.1 0 0.8-0.8 0.5-1.5 0.5-0.5-0.2 0.2-1.1-0.5-0.1 0.1-1.5-1.9 0.2-0.7-1.1-0.4 0.2 0 0.7 0.3 1.1-1.1 0.2-0.4 0.5-0.9 0.2-0.3 0.7 0 0.8-0.3 0.3-1.8-0.9-0.9 0.8-1-0.5 0 0.9 0.3 0.4-0.8 0.3 0.2 0.8 0.7-0.9 0.4 0-0.2 1 0.9 0.9 0.6-0.1 0.1 1.8 0.8-0.1 0.1 0.5-0.6 0.8-0.2-0.8-0.3 0.1-0.4 1.2 0.3 0.5 0.5 1.7-0.6 0.4 0.2 0.5 0.9-0.7 0.6-0.3 0.4 0.7 1-0.2 0.1 0.8 2.1 0.4 0.8 0.8-0.2 0.5 0.3 0.8-0.5 0.2-0.2 1.4 0.2 1.1-0.3 0.9-0.8-0.6-1-0.3-1.1 0.7-1.1 1.2 0.6 0.8 0.8-0.5 1-0.3 0.9 0.4-0.1 0.9-0.5 0.8 0 0.6-0.5 1.1-1.5 1.8 0.3 0.9-1 0-0.6 0.6 0 0.4 1.2 0-0.7 1.2 0.3 0.6-0.4 0.8-0.5 0.4-0.7-0.3-0.2 0.5-1.1 0.6-0.6-0.5-1 0.3-0.3-0.5 0.1-0.7-0.7 0-0.3 0.7-0.4 0.3-1 0.1-0.3 0.5-0.9 0.4 0.3 0.8-0.3 0.8-1.2 0.4 0.9 0.6-1.5 0.8-1.4 0.2-0.4 0.6-0.9-0.2-0.9-0.7-0.2-0.5 0.2-0.6-0.1-0.9-0.5-0.4 0-0.5-0.4-1.1-1.3 0-1-0.3 0.3-0.7-0.8-0.9-0.9 1.3-0.2 0.8-0.4-0.1-1.2 0.6-0.3-0.3-1 0-0.2 0.5-0.8-0.1-0.4 0-0.5-0.2-0.4 0.1-0.9-0.7 0.3-0.5-0.4-1.6-0.8-1.8-0.6-0.3-0.5-1.3-0.3-0.4-1.3-0.6-1.3-0.5-0.1-0.8-0.5-0.7-0.1-1-0.2-1-0.9-0.7 0.3-0.5-0.6-2.9-0.4-1.6-0.7-1.7-0.4-1.8-0.4-0.7 0.1-0.5-0.3-1.1-0.7-0.1 0.3-0.8-0.3-0.4-0.4-1.7-0.8-1.5-0.2-0.9-0.5-1 0.8-0.7 0.4 1.1 0.3 0-0.4-1.3-0.7-0.6-0.2-0.6 0.8-0.1 0.4-0.7-0.6-0.7-0.1-1.6-0.9-1.5 0-1.3 0.4-1.5-0.7-0.3-0.1-1.9 0.2-0.8-0.7-0.4 0.3-0.5-0.2-1.1 0.4-0.3 0-1-0.6-0.3 0.3-0.6-0.3-0.5-0.6 0.2 0-1.1 0.7 0.5 0.3-0.8-0.1-1.7-0.4-0.6-0.9-3.1-0.8-2-0.6-0.1-0.2-0.8 0.8-0.5 0.4 0.6 0.2-1.1-0.7-0.5 0-0.8-0.4-1.1-1.1-0.1-0.3-0.6 0.6-0.3 0-1.6 0.3-0.3-0.4-1.5-1.4-1.4 0-0.8 0.7 0 0-0.8-0.6-0.4-0.6-1.2 0.2-0.6-0.4-0.4-0.2-0.9 0.7-0.7-0.2-1-0.6-1.8-0.5-0.8-0.5-2-0.4-0.9-0.6-0.4 0-1.1-0.8-0.4 0-0.9 0.4-0.4-0.7-0.4-0.4-1.2 0.7-0.3-1.4-0.9 0.3-0.7-0.2-0.8-0.4-0.3-0.3-0.9 0.4-0.2 0.2-0.8-0.3-1.2-0.8-0.9-0.4-0.2-0.2-2.2 0.8 0.2 0.4 1.2 0.9-0.1 2 0.7 0.7-0.1-0.6-0.7 0.2-0.6-1.1 0.1-0.9-0.7-0.6 0.2-0.7-0.8-0.6-1.1-0.6-0.6-0.8-0.2 0.4-0.7 0-0.6-0.5-0.3-0.1-1.5-0.4-0.6 0.5-2.4 0.6-0.4-0.3-0.9-0.8-1.9-0.4-0.9-0.4-0.1-0.6-2 0.3-0.9 0.1-1.3-0.1-1.2 0.5-0.4 0.8-0.1 0.5 0.4 1-1.2 0.4 0.9 0.5 0.4 0.4-0.7-0.2-1.9-1.2 0.6-0.5-0.2-0.7-1.2 0-0.6 0.5-0.4 1.2 0.1 0.2-0.4-0.8-0.9 0.6-1 0.5 0.4 1-0.3 0.6-0.4-0.6-1 0.1-0.7-0.4-1.1-1 0-0.3 1.2-1.2 1-1.9-0.2-0.5 1.8-0.1 0.9-0.7-0.2-0.8-1.2 0.4-0.5-0.1-0.7 1-1.2-0.5-0.3 0.1-1.9-0.3-1-1-1-0.2-0.4 0.4-0.6-0.5-0.6-0.2-1 0.3-1.1 0-1.8 0.5-1-1.4-1.7 0.1-1.4-0.5-1.4 0.3-0.7 0.9-0.6-1.3-0.9-0.5-0.5-0.4-1.6 0-0.6 0.5-0.3-0.1-1-0.5-0.5-0.2-1.5 0.1-0.8-0.8-1.6 0-1.8-0.3-0.6-0.9-0.6 0-1 0.6 0.2 0.4-0.5 0-0.9-0.1-1.1-0.4-0.5 0.8-0.8 0.9-0.7 0.2-0.4-0.2-2-0.3-1 0.6-0.5 0.4-1.2 0-0.7 1.7 0.2 0.5-0.7 0.9-0.3 0.2-1 0.6-0.8 0.7-0.1 0.4-0.6 1.5 0.1 1.5 0.4 0.2 1.2 0.3 0.1 0 0.2 0 0.3 0 0.2-0.4 1 0.4 0.6 0.6-0.2 0.1-0.4 0-0.1 0.4-0.1 0 0.2-0.3 0.7 1.2 1.4 0.5 0.1 0-1 1 0.1 0.6 0.2 0.2 0.1 0 0.1 0.4 0.2 0.1 0 0.3-0.3 0.3 0.3 0.9 0.4 0.2 0.3 0.3 0.2 0.5-0.3-0.1-0.6 0.6-0.5 0.1-0.6 0-0.5 0.7-0.3 0.9 0.1 0.1-0.4 0.9-0.6 0-1.4 0.6-0.5 2.2 0.4 1.8-0.2-0.3-2 0.2-0.8 0.4-0.1-0.4-1.5 0-0.6-0.4-1.6-0.7 0.3 0.2-0.9 0.8-0.6 0.9-1.9 0.9-1-0.1-0.7 1-1-0.7-0.1 0.2-0.7-0.2-0.7-1.4-0.5-0.4-1-0.9-0.7 0.1-0.3 1.2-0.5 0.6-1 0-0.8 0.9-0.1 0.5 1.1-0.4 0.4 0.4 0.8 1.1-0.7 0.5 0.1 0.6 0.8 1 0.1 1 0.7 0.5 1.7 1 0.6 1.2-0.5 1.3 0.1 0.3 0.3 1.4-1.3 0.6 0 1.4-0.8 0-1.2-0.2-0.7-0.5 0.1-0.1-0.8 0.7-0.3 0.7 0.3 0.4-1 0.4-0.3 1.1 0.3 1-0.7-0.3-1 0-1.5 0.2-1.1-0.5-0.3 0-1.4-0.5-1-0.7-0.7 0.3-1.8-2-0.4-1-0.1-0.3-1-0.8 0.1-0.7-0.7-0.6 0-0.2-0.6 0.1-0.9-0.3-0.8-0.9-0.4-0.5 0.5-1.3-0.8-0.9 0.1-0.6-1.3-0.8 0 0-0.5 0.6-0.4 0.4 0.8 0.6 0.2 0 0.7 1.5-0.7 1.1 0.1 0.8 0.4 0.4-0.5-0.2-0.6 1.3 0.1 0.6-0.6 0.9 0.4-0.1-1.9 0.5-0.7-0.1-0.9 0.9-0.1 1.1 0.2 1.5-0.8 0.5-0.4 0.3-1.8-0.1-1.1 0.2-0.6 0.7-0.2 1-0.6 1.4-0.5 0.2-1 0.4-1 0.4 0.9 1.4 0.3 0.6-0.5 0.7 0.3 0.9-0.5 1.2 0.3 1.4-0.2 0.3-0.4 1.2-0.1 0.7-0.6 0.3-1.6-0.7-0.2-0.1-0.8-0.7 0.3-0.7 0.8-0.5 0-0.6-0.5-1.1 0.7-0.7-1.1-1.7 0.2-2.3-0.1-0.8 0.3-0.7-0.1-0.7 0.4-0.7 0-0.3 0.7-1.2 0.5-0.1-0.4-2.6 0.9-0.4-0.6-0.5-1.5-0.4-1.7-0.6-0.1-0.6-0.9 0.4-0.3 1-0.2 0.5 0.2 0.6-0.3 0.8-0.1 0.5-0.8-0.1-1.2-0.2-0.4-1.5-1.2-0.5-0.7 0.4-0.4-0.6-1.4-0.5-0.4 1-0.6 1.3 0 0.7-0.6 0.8-0.1 1.9-1.1 1.5-0.7 0.8-0.6 3.4-1.2 0.9 0.4 1 0.7 3.1-0.4 0.3-1.1 1.5-0.3 1.1-1 0.4-0.7 1.6-0.4 0.3 0.6 0 1.2 0.3 0.6 0.7 0 0.7 0.4 0.7 0.8 0.4 0.9-0.3 0.8-0.2 2.4-0.3 0.6 0.2 1.1 0.3 0.3-0.2 1.4 0.4 0.4 0.9 0 0.4 1.1 0.8 0.2 0.1 0.7 2.3 0.4 1.4 0.7 1 0.4 2.6 0.5 0.8 0 1.4-0.8 1.3 0.1 0.8 0.7 1.8 0.5 1.1 0.6 0.2 0.3 1.4 0.3 1.1 1.8 0.5 1.7 0.8 0.7 2 0.8 1.1 0.6 0.4-0.2 0.8 0.4 1.6-0.3 0 0.7 1.8 0 0.2-0.3 0.8 0.6 2.9-0.3 1.9 0.3 0.8 0.5 1.1-0.3 0.4-0.4 0.9-0.1 0.4 0.5 1.5 0 1.1-0.4 1.3 0 0.5 0.2 1.4-0.1 1.1 0.2 1-0.1 0.9-0.5 1 0.4 1.8-0.2 0.5 0.6 1.7 0.5 0.6 0.4 1.6-0.7 0.3 0.5 0.7 2.3 0.6 0.3 0.5 1.1-0.5 0.9 0.6 0.4 0.1 1.9-1.3-0.3-0.5 0.5 0.9 0.9-0.1 0.5 1.1 0.8 0.5 0.6 2.9-0.1 0.4 0.6 2.8-0.2 0.5 0.1 1.1-0.6 0.1-0.5 0.7 0.1 0.7-0.3 0.2-0.9 0.5-0.5 0.3-1.3 0.3-0.4 1.3 0.3 1-0.6 2.2 0.5 0.3-0.5 0-0.8 0.4-0.7 0.5 0 0.1-1.3-1.2-1.7 0.1-0.4 1.4-1.1 2.1-1.4 0.4-1.3 1.4-0.8 0.3-0.9-1-1.2 0.8-0.5-0.2-1 0.5-1.2 1.3 0.1 0.6-0.8 1.4 0.5 3.6-2.9 2.1-1.1 0.3-0.4 0.9 0.1 0.9-0.2 0.9 0.4 1.4-0.3-0.1 0.6 0.8 0.4 0.4-0.2 0.1-0.7 1.2 0.1 0.3-0.5 0.7-0.2-0.4-0.9 1.5 0.1 0.6-0.2 2.2 0.2 1.6-0.2 0.8-0.3 0.1 0.5 0.7 0.3 1.6 1.8 0.5 1.1 0.5 3 0 0.9 0.6 0.1 0.6 0.7-0.6 0.4-0.8 0-1.3-0.4-0.8-0.5-1.6 0-0.5 0.4-0.7 0.1-0.1 0.9 0.7 1-0.1 0.6 1.1 0.6 0 0.7 0.4 0.8 0.2 1.4 2.1-0.1 0.5 0.3 1.3 0.3 0-0.9 1.5-0.2 0.6 0.2 0.3 0.6 1.1-0.2 0.1 0.7 1.1-0.3 0.3-0.6 1.6-0.3 0.2-0.7 0.6 0.1 1.6 0.7 1.2 0.4 1.3-0.3 0.1-0.5 1.4-0.1 0.6-0.5 0.7-0.1 0.8-0.6 0.7-0.1 3.6-2.2 0.3-0.6-0.2-0.5 0-0.9 0.3-0.2 1.2 0.2 0.8-0.5 1-0.2 0.1-0.8 1.6 0.7 0.6-0.6 0.9 0.5 0.5-0.7-0.2-0.7 1.1 0.2 0.7 0.3-0.4 0.9 0.3 0.5 0.6 2.2 1.4-0.1 1-0.8 1 0.1 0.7 0.4 0.9 1 0.7 0 0.5 0.4 0.6-0.3 0.7 0.2 0.9-0.1 1.4 0.6 0.5-0.3 0.2-0.7 0.5 0.1 0.4 0.8 0.4-0.8 2.1 0 0.2-0.2 1.2 0.4 0.3-0.6 1.2 0.5 0.2-1.2-0.4-0.1-0.4-1.5 0-1.1 0.9 0 1.2-0.9 0.7 0 0.5 0.6 0.7-0.1 2.5-0.2-0.1-0.3 0.9-0.4 0.5-0.4 0.2-0.8 2.4 0.4 0.4-0.8-0.4-0.3 0.1-0.7 0.5-0.6 0.8-0.1 0.9 0.9 3.8 0.7 0.5-0.6 1 0.3 0.6-0.1 1.1 0.4 0.8 1.8-0.5 0.5 0.2 0.8 1.2 0.9-0.1 0.8 0.8-0.1 0.5 0.1 1.2-0.4 1.4-0.1 0.2-0.7 1-0.1 0.3-0.4 0.6 0 0.7-0.4 2 0.7 0.9 0.9 0.2 0.4 1.1 0.6 1.2 0.3 0.8-0.1 0.4-1 1.6-0.1 0.7 0.8 1.1-0.8 1.3 0 1-1.1 0.6-0.3 0.3-0.6 0.8 0.2 1.5-1.1 0.6 0 0.6 0.5 1.3 0 1.2 1.7 0.9 0 0.6 1.3 1.1 0.7 0.1 1.1 0.9 0.9 0.4 1-0.8 1.1 0.4 1 1.1 0.4 0.3-0.1 0.2-1.1 1 0.3 1.5 0.2 0.6 0.7 0.9 0.5-0.1 0.5 0.7 0 0.4 0.7 0.8 0.2 1.3-0.5z",
        22: "M905.8 466.6l-0.2 1.5-0.9 0.5-0.6 0.7-0.4 1.9-0.8 1.8 0.1 0.9-0.5 1.9 0.5 0.8 1 0.1 0.6 0.6 3.4 1.5 0 1.3 0.1 1.4-0.3 1.5-0.5 0.9-0.4 0.3-0.4 0.9 0.6 1-0.5 0.3-0.5 1.3-1.2 1-0.5 0.9-0.5 2.4 0.2 0.8-0.5 0.8-0.2 0.8-0.7 0.4-1.4-0.2 0 1.6-0.3 0.9-0.7 1.2-1.2 1.3-0.7 0.3-1.2 3.1-0.9 0.2 0.3 0.7-0.2 1.4-0.3 0.7-1.1 0.5 0.7 0.6-1.2 1.6-0.9 0.1 0.1 1.7-0.5 1.4-0.6 0.6-0.4 1.4 0 0.8-0.7 0.5-0.2 0.9 0.1 2-0.5 1 0 0.7-1.8 3 0.1 1-0.9 0.3-0.1 1.5-0.2 1.4-0.7-0.2-0.6 0.5-0.3-0.9-0.6-1-1.6-0.2-0.2-0.7-0.9-0.6-1.6 0-0.6-0.6-1.1-0.2-0.9 0-1 0.7-0.9 0.2-1.1 0-0.5-1.3-0.6-0.6-0.4-0.8-0.8 0.2-3-0.6-1.2 0.2 0.2 0.7-0.4 0.6-1 0.2-0.4-0.7-0.5 0.9-0.8 0.1-0.6 0.5-1.4-0.9-0.2-1-0.8-1.1-0.4-1.3-0.6-0.6-2.1-0.7-0.6 0.3 0.2 0.8-0.1 0.6-1.7 0-0.5 0.7-0.7 0 0.4-1.5-0.6-0.4-0.7-0.1-0.3 1.4-0.8-0.3-0.7 0.1-0.1-0.8-0.8-0.4-0.6 0.9-1 0.2 0-0.6-0.7-1.1-0.9 0.5-1.1-0.4-1.2-1.1 0.2-0.9 0.4-0.3 0.7-2.1-0.6-1.3 0-1 1-1.5 0.2-0.9-0.7-0.1 0.1-1.7-0.8-0.4 1.3-0.3-0.3-0.7 0.2-1.2 0.4-0.6-0.4-0.8 0.6-0.8-0.1-1 1.6-1.4-0.8-0.5 0.4-0.6-0.1-1.3 0.5-0.7-0.3-1.6 0.8-3.5 0.6-0.2 0.9 0.5 1.2-0.5 0.1-1.5 1.3-1.4 0-0.6 0.7-0.7-0.3-1 0.5-0.2 0.1-0.6-0.5-1.4 0-0.6 0.7-1.1 1 0 0.9-1.6 0.4-0.2 0.5-1.8-0.1-0.8 0.2-0.6 1.2-1.9 0-0.4 0.5-0.8 1.4-1.1 0.6-0.1 0.4-0.5 0.1 1.1 1.2 0.1-0.2 0.9 1.2 0.3 0.8-0.1 0.4 0.7 0.5 0.3 0.1 0.6 0.5 0.1 1.4-2.5 0.8-1.6 0-0.7 0.5-0.1 0.2-1.1 0.6 0.1 0.4-0.6 0.6-0.4 0.2-0.8 1.2-0.7 1-1.6 0.1-0.7-0.8-0.8-0.8 0.3-0.1-0.6 0.6-0.9 1.3-0.2 0.6-0.7 0.9 0.2 1-0.4 1.8 0.1 0.7 0.3 0.5-0.5 1.1-0.2 0-0.8 2 1.4 0.5 0 0.2 1 1.6 0.4 0.5-1 1.3-0.1 0 0.8 1.1 1.3 1.8-0.3 0.4-0.3 0.5 0.7 2.2-1.1 0.8-0.5 1.2-0.7-0.1-0.8 0.3-0.7 0.5-0.1 1-1 0.6 0.1 0.8-0.4 0.8-0.8 0.9-1.1 0.3-0.6 0.8 0.4-0.7 1.6 0.2 0.4-0.9 1.8 0.2 1.7-0.2 1.1 2.4 1.6 1.1 0.5 0.8-0.1z",
        23: "M828.7 482.7l-0.8-0.3-1.8-0.4 0.3-0.8-0.6-0.3-1 0.3-1.7-0.6-1.1-0.5-0.9-1-0.3 0.3-1.8-1-0.3-0.8-1-0.5-1.3-0.3-1.2 0.3-0.4-0.3-1 0.5-0.5-0.2-1.8-0.2-2.2 0.3-0.6-0.2-1 0.4-1.1 0.2-0.7-0.5-0.6 1.1-1.1-0.3-0.4 0.8-0.6 0-1.1 0.6-0.6-0.2-0.1-0.6-0.6 0-0.1-0.6 0.4-0.6-1.2 0.1-0.8 0.9-1.5 0.1-0.3 0.4-1.1 0.1-0.1-0.6-0.7 0-0.8-0.6-1.7-0.1-0.3-0.3-0.9 0.1-1.1-0.4-1.2-0.8-0.6 0.4-1.9-0.2-2.1 0.2-1.9-0.1-0.4 0.2-2.3 0.5-2.5 0.7-1.6-0.2-1 0.4-1.4-0.3-1-0.8-0.7 0.5-0.8 0.3-0.7-0.2-0.5 0.5-0.9-0.6-0.4-0.6-1 0.5-1.4-0.1-3 0.2-0.5 0.3-1.2 0.4-0.2 0.3-1.3-0.6-1.1-0.1-1.6-1.2-0.6 0.2-1.4-0.4-2.7-0.5-0.8-0.4-1.9-0.1-1.3-0.7-0.9-0.7-0.7-0.1-1-0.7-0.7 0.1-0.3-0.7-1 0.1-1.4-0.4-0.6 0.7-1 0.1-0.9-0.3 0.5-0.6-0.4-0.5-0.4-1-0.1-1.3 0.6-2 0.6-0.8 0-0.6 0.4-0.1 0.4-0.4-0.2-1 0.1-0.5-0.2-0.4 0.1-0.1-0.1-0.1 0.2-0.2 0.3-0.3 1.1-0.2 1.9-0.5 0.2-0.6 0.5 0.2 0.4-0.1 0.4-0.8-0.4-0.5-0.2 0-0.7-0.6-1.1-0.8-0.2-0.7-0.3-0.4-0.5-0.5-0.2-0.2-0.6-0.8 0.2-0.6 0.5 0.2 1.4-1.3-0.1-0.4 0-1-0.3-0.2 0.1-0.2 0.1-0.2 0.6 0 1.2-0.6-0.2-0.1 0.5-0.2 0.4-0.6-0.2-0.2-0.1 0 0-0.7 0.5-0.2 0.8-0.2 0.2-0.4 0.2-0.2 0.3-0.1 0.2 0 0.1-0.2 0.3-0.2 0.2-0.4 0.1-0.1 0.5-0.6 2.7 0 0.7 0.1 2.5-0.3 1.3-0.4 0.2-0.6 1.2-0.8 1-0.1 1.1 0.9 1-0.4 0.7-0.6 1 0.7 1 1.5-0.1 1-0.5 0.8 0.2 0.4 1-1.1 0.6-0.4 0.3-0.7 1.7 0.8-0.1 0.7 1.7-0.7 0.3-0.5 1-0.1 0.9 0.4 0 1 1.3 0.3 0.6-1.3 0.8-0.2 1.7 0.2 0.5-0.4 1.2 1.5-0.1-1.1 1.4 0.3 0.3 1.8 0.6-0.1 1 0.2 0.5 0.7-0.5 0.3-0.4 1.2 0.7 0.1 0.9-1 0.6 0.1 0 0.8 1.9-0.2 1.1-0.7 1.7 0.3-0.8 2.5 0.3 0.5 0 0.9 1.2 0.6 1.1-0.9 0.7 0 1-1.9 0.9-1.3 0.6-0.3 2.1-0.6 1 0.5 1-0.7 0.5-1.2 0.6-0.3 0-0.8 0.6-0.8 0-0.6 0.6-0.2 0.5-0.5 0.5-1 0.1-1 0.9 0.3 0.8-0.2 0.4 0.1-0.2 1.4 0.4 0.8-0.2 0.8-0.7 0.2 1.3 1 0.7 0.3 1.7-1.9 0.1-2.9 0.3-1.1 1-0.4 0.6-0.8 0.4 0.2 1-1.2 2 0.8-0.3 1.5 0.5 1.1 0.8 0.1 0.7 1 0.2-0.6 1.6-0.4 0.4-0.6 1.5 0.1 0.6 0.2 1.4-0.6 1.3 0.1 0.6-0.7 1-0.5 0.4 0.4 0.7-0.1 1 0.3 1.1-0.1 1-0.4-1.6 1.8-1.8 1.6-0.4 0.1-0.8 0.7-0.4 0.8 0.2 1.1 0.7 0.3 1.4-0.1 0.1 0.3-1.5 1.2 0 0.7-1 1.5 0 1.1 0.4 1.5-0.3 1.3 0.5 1.6 1.4-1.1 0.5-0.7 0.4 0.3 1.1-0.1 1.3-0.5 1.1-0.1 1.1-0.8 1.5 0.2 0.9 0.8-0.5 0.4 0.2 0.8 1.1 0.2 0.5 0.7 0.6 1.4 2 0.6 0.2 1.4 0.9 0.8 0.7-0.4 0.7-0.2 0.4-0.7 0.7 0.1-0.6 1.8-0.8 0.9-1.4 0.7-0.4 0.6 0.1 0.6 0.9-0.3 0.3 0.9 0 1.1 1.5-0.5 0.3 0.8 0.5-0.2 0.9 1.1 0.6 0.5 0.6 0 0.9 1.5 0.8 0.1 0 0.9 0.3 0.8-0.8 0.7-0.2 0.7 0.3 0.6 1 0.5-0.8 0.7-1.1-0.2-2.4 1-0.5 0.3-0.2 0.7-0.4 0.1-0.8 1.3-1.3-0.5-1 0-1-0.4 0.1 1.3-1.5 0-0.1 0.8-0.5 1.1-0.5 0.6-0.9 0.3z",
        24: "M848.4 506.4l0.8 0.4-0.1 1.7 0.7 0.1-0.2 0.9-1 1.5 0 1 0.6 1.3-0.7 2.1-0.4 0.3-0.2 0.9 1.2 1.1 1.1 0.4 0.9-0.5 0.7 1.1 0 0.6 1-0.2 0.6-0.9 0.8 0.4 0.1 0.8 0.7-0.1 0.8 0.3 0.3-1.4 0.7 0.1 0.6 0.4-0.4 1.5 0.7 0 0.5-0.7 1.7 0 0.1 0.8-0.1 1.8 0.5 0.2 0.4 1.2 1.2 0.6-0.1 1.6 0.1 2.3 0.3 0.4-0.1 1.5 0.4 1.5 0 0.8 0.9 1.1-0.5 1.1 0.1 2.6-0.3 0.5 0.2 1.3-0.7 1 0 1.2-0.4 1.6 0 0.8 0.6 0.9-1.7 1.2 0.5 0.8 0.1 1.6-0.1 1.3 0.5 1.2-0.7 2.7 0.7 0.4-1 0.9-0.2 1.4-0.5 0.5-0.4 1.1-1 1-1.7 0.1-0.7-0.6-0.4-0.9-0.5-0.4-0.8-0.1-0.5 0.4-0.9-0.5-0.3 0.5 0.1 1.3-0.2 0.5 0.6 0.7-0.2 0.6 0.7 1.9-0.8 0 0 0.7-0.6 1.2-0.2 1.7-0.6 0.2 0.5 2.5-0.7 1.3 0.4 0.5 0 0.8 0.5 0.8-0.1 0.5 0.7 0.6 0.3 1.3-0.5 0.5-0.5 0.7-0.1 0.8 0.6 0.2 0 0.6 0.3 0.6-0.2 0.7 0.4 0.6 1 0.3 0.6 0.9-0.1 0.5 0.3 1.2-0.2 0.4 0.3 1.2 0 2.1 0.3 0.7-0.6 0.4-1.5 0.2 0.4 1.3 0.3 0.4-0.2 0.6-1.1 0.2-0.4-0.9-0.6 0.1-0.8-0.4-1.1 0.6 0.3 1.1-0.2 0.9 0.4 0.5 0.2 0.9-1.7-0.1-0.1 0.7-0.4 1.1-0.1 0.6 0.4 1 0 1-0.8 0.1-0.7-1.6-0.8 0.3-0.5 0.8-0.4 1.1-0.4-0.5-0.4-1.2-0.6-0.7-0.2-1.1-0.7 0-0.8-0.7-0.3-0.6-1.5-0.5-0.3-0.6-0.9-0.5-0.2-0.4-1-0.1-0.2 2-0.4-0.2 0.2 2.3-0.4 1-0.7 0-0.7 1-0.9 0.3-0.2-1.9 0-1-1.2-2.7 0.9-0.2 0.6-0.4 0-0.9-0.3-0.4-0.3-1.8 0-0.9-0.4-1.2 0.1-1.2-0.8-2.6-0.3-2.6-0.5-3.4-0.3-3.8-0.5-1.9-0.5-1.2-0.6-0.9-0.3-1.2-0.6-1.1 0.2-1.1-0.2-0.6-1-0.6-0.4-0.9-0.5-0.1-0.3-0.6-0.7-0.3 0.2-0.6 0-2 0.4-1.8-0.2-0.9-0.7-1 0.3-0.7-0.3-0.3 0.2-0.8-0.4-1.4 0-1.5 1.7-0.2-0.7-1.6-0.1-0.9-0.4-0.4 0.3-1.2-0.8-1.1 0-1-0.2-0.8-0.5 0-0.5-2.9-0.4-1 0.2-0.7-0.5-1.4-0.4-0.2 0.3-1.1-0.7-0.7 0.5-1.1 0-0.7-0.9-1.3-0.1-0.4 0-0.9-0.1-1.6 0.2-0.4 0.4 0.1 0.2-0.1-0.1-0.3-0.1-0.2-0.1-0.2-0.1-0.3 0.4-0.9 0.2-0.1 0.1 0 0.2 0.1 0.2 0.1 0.4 0 0-0.1 0.1-0.1-0.1-0.3-0.1 0 0-0.1 0.1-0.1 0-0.2 0.1-0.1 0.1-0.5 0.2 0 0-0.6-0.3-0.2-0.3-0.3 0-0.9 0-0.1 0-0.3 0.2-0.2 0.3-0.6-0.4-1 0.1-0.1 0.1 0.1-0.2-0.4 0.1-0.1-0.1-0.2 0-0.5 0.1-0.1 0.1-0.2-0.2-0.3 0.4-0.4 0.1-0.9 0-0.2-0.1-0.2 0.1-0.1-0.1-0.4 0-0.4 0-0.2 0.1-0.1 0.2 0-0.1-0.3-0.1-0.5 0-0.4-0.1-0.4 0.1-0.2-0.5-0.8-0.2-0.1-0.3-0.3-0.1-0.1 0-0.2-0.1-0.1 0-0.2 0-0.1 0-0.2 0-0.2 0.6 0 2.2 0.1 1.5-0.1-0.1 2.2 0.5 0.7 0.1 0.5 0 0.4 0.2-0.1 0.7 0.7 0.1 0 0.3-0.3 0.3-0.4 0-0.1 0.1-0.1 0.1-0.1 0.5 0 0-0.2 0.2 0.2 0.1 0-0.1-0.3 0.1-0.1 0.6-0.1 0.6-1.8 0.1-0.8 1.3 0 0.8-0.3 0.3-1.3 0-0.9 0.2-0.9 0.6 0.3 0.5-0.6 1.1-0.5 0.8-1.8 0.5-1.8 1.2-2.6 1.4 3.8 1.4 1.4 0.6-0.6 0.7-0.1 0.7 0.3 0.2-0.7 0.9 0.6 0.8 0 0.7-0.5 0.7 0.3z",
        25: "M924.8 419.9l-1.1 1.5-0.8 0.2-1 0.9 0 1.5-0.5 0.7-0.8 0.5 0.2 0.7-0.6 0.7-1.2 1.7-0.1 0.6 0.7 0 0.8 1.1-0.2 0.8 1.1 0.5-0.3 1.3 0.1 2.4-0.3 0.6 0.3 0.7-0.3 0.7 0.7 0.9-0.5 0.5-0.4 1.5 0.4 1-0.2 0.6 0.2 0.8 0.8 0.2 0.5-0.2 0.7 0.6-0.7 1.2 0 0.7-0.8 1-0.8 0.8-0.4 0.7-1 0.7-0.7 0.1-1 1-0.3 0.8-0.1 1.1 0.6 0.9 0.1 1 0.4 0.4-0.1 1 0.2 0.8-0.6 0.8-0.8 0.1-0.9 1.3-1.4 1.1-0.3 0.4-0.5 1.9-1.1 1 0.6 0.8-1.8 0.2-0.5 0.4-0.9 2.1-0.9 0.2-0.4 0.4-0.6-0.5-0.3 0.5-2 0.6-0.2 0.2-0.8 0.1-1.1-0.5-2.4-1.6 0.2-1.1-0.2-1.7 0.9-1.8-0.2-0.4 0.7-1.6-0.8-0.4-0.3 0.6-0.9 1.1-0.8 0.8-0.8 0.4-0.6-0.1-1 1-0.5 0.1-0.3 0.7 0.1 0.8-1.2 0.7-0.8 0.5-2.2 1.1-0.5-0.7-0.4 0.3-1.8 0.3-1.1-1.3 0-0.8-1.3 0.1-0.5 1-1.6-0.4-0.2-1-0.5 0-2-1.4 0 0.8-1.1 0.2-0.5 0.5-0.7-0.3-1.8-0.1-1 0.4-0.9-0.2-0.6 0.7-1.3 0.2-0.6 0.9 0.1 0.6 0.8-0.3 0.8 0.8-0.1 0.7-1 1.6-1.2 0.7-0.2 0.8-0.6 0.4-0.4 0.6-0.6-0.1-0.2 1.1-0.5 0.1 0 0.7-0.8 1.6-1.4 2.5-0.5-0.1-0.1-0.6-0.5-0.3-0.4-0.7-0.8 0.1-1.2-0.3 0.2-0.9-1.2-0.1-0.1-1.1-0.6-0.6-0.1-0.8 0.9-1.3-0.5-1.2-0.2-1.2-0.8-0.4-0.6 0-0.9-0.6 0-0.6-0.7-0.6-0.4-1-0.9-0.8 0.4-0.5 1-0.3 0.6-0.9 0.5-0.1 0.4-0.9 1.6-0.9 0.7-0.1 1.2-1.4 0.8-0.7 0.1-0.9 1.3-1.2 1.3-0.9 0.2-0.9 0.7-0.7 1-0.2 0.2-0.5 0.8-0.4-0.6-1.4-0.1-0.8 2.2-1 0.6-0.7 0.6-0.1 0.4 1.8-0.6 2.4 0.5 1.2 0.8-0.4 0.2-0.8 0.9-0.6 1.1 0.6 0.4-0.7 0.7-0.8 1.5-0.7 0.8-0.8-0.5-1.3-0.4-0.5 0-1.3 0.3-1.3 0.9-1.2-0.2-0.4 0.7-2.4-0.2-0.4 0.4-1.1 0.8-0.6 0.2-1.2 0.4-0.8 0.6-0.2 1.1-1.9 0.2-0.6 1-0.6 0.9 0.1 0-0.8 0.5-1.1-0.1-1.6 0.4-1.1 0.5-0.4 0.3-0.8 1-0.8 0.8-1.2 0.6-0.8 0.2 2.1 0.2 1.1 0.8 0.7 0.3-0.7 0.9-0.6 0-0.5 0.9-0.1 0.6-0.7 0.7-2-0.3-0.7 0.1-0.6 1.5-0.9 0.5-1.1 1-0.2 0.6-0.5 0.2-0.5 0.8-0.4 1.6 0.3 0.1-0.9 0.5-0.5 0.4 0.7 1.1-0.1 1.1-0.3 1.6-1.2 0.5-0.7 0.3 0.4 0.6-0.9 1-0.4 0.4-0.8 0.2-1.1 1.1-1 0.6-1.3 0.6-0.7 0.9-0.4 0.7 0.2 0.8-0.2 1 1 1.2-0.3 0.5-0.5 1.7-0.6 0.8-0.5 0.2-0.6 1.3-0.9 1.4-1.4 0.2 1.4-0.2 0.6 0.7 0.8-0.3 0.3 0.4 1.1 0.5 0.5-0.1 1.3-0.6 0-1 0.8 0.5 1 0.6 1.6 0.9 0.5-0.8 1.1-0.1 0.8 0.7 0.8 0.1 1z",
        26: "M566 701.8l0.9 0.1 0-0.4 0.8-0.2-0.7 1.2-1-0.7z m52.5-35.1l0.8 0.5 0.2 0.6-0.6 0-1.2-0.4 0.8-0.7z m20.5-26l0.7 0.2 2.5 0 0.9-0.2 0.6 1-0.2 1-0.7 0.1-1.5-0.1-1.5 0.8-1.3 1.4-0.5 0.1-0.1-0.4-0.3-0.3-0.9-0.1 0.7 1.1-1.3 0.1-0.3-0.3 0.9-1.2 0.1-0.8 0.4-0.4 0.5-1.6 0.6-0.5 0.7 0.1z m0.4-0.6l2.1 0.3-2 0.3-0.1-0.6z m-5.4-52.4l-0.3 1.4 0 1.3 1.3-0.1 1.3-0.3 0.3 0.3 0.2 1.1 0.6 0.1 0.3 0.6 0.6-0.1 2 0.5 1.7 0.1 1.3 1.4 0.8 0.1 0.2 0.5-0.1 0.6 0.4 0.9-1 1.7-0.2 1.3 0.7 0.8 0.4 0.7 1.6 0.2 0.6 0 0-0.8 0-0.2-0.2-0.2 0-0.1 0.1-0.1 0.4-0.7 0.2 0 0.2-0.2 0.5 0.2 0.7-0.4 0.3-0.1 0-0.7 0.3-0.9 0.2 0.3 1 0.4 0.6 0.1 0.1-0.1 0.4 0-0.1 0.5 0.1 0.3 0.6 0.6-0.6 0.8 0.5 1.1-0.2 0.3 0.4 0.5 0.2 0.4 0.2 0.5-0.2 0.2 0.4 0.3 0 0.1 0.2 0.1 0.5-0.1 0.1 0.3 0.3 0 0.4 0.2 0.2 0.1 0.1 0 0.2 0 0.2 0.3 0.1-0.2 0.5 0.2 0.5 0.4 0.4-0.1 0.4 0.1 1.1 0.1 0.5 0 0.1 0.2 0 0.6 0.3 0.3-0.3 0.1 0.7 0.2 0.1 0.1-0.1 0.3 0.2 0.6-0.1 0.2 0 0.6-0.2 0.8 0 0.4 0.7 0.7 0 0.5 0 0.1-0.9 0.5-2.5 1.7-2.7-0.2-2.1 0.1-1.2 0.2-1.8 0.8-1.4 0.6-1.6 1.7-0.4 0-1 0.9-1 0.7-1.7 1.7-1.3 1.6-0.5 0.5-0.3 0.8-0.5 0.6-0.8 1.5 0 0.6-0.8 1 0.2 0.6-0.1 1.4 0.6 1.9 0.5 1.1 1.1 1.5 0.3 0.6 0.4 1.6 1.7 3.3 0.3 1.4-0.4 1.5-2.6-0.4-1.6 0.7-0.6 0.6 0 1.3-0.5 0.6-0.5 1.2-0.7 1.1 1.4 0.1 0.5-0.1 0.1-1 0.4 0.6 0.2 0.2 0.2 0 1.8-1.6 1.2-0.6 1.1 0.1 1.3 0.4 0.7 0.1-3.7 2.5-1.6 1-3 2.3-0.5 1.2-0.4-0.1-0.5 1.3-0.3 0.6 0 1.8 0.5 0 1.1 0.6 0.3 1-0.7 1.1-1.2 0.8-0.9 0.4 0.3 0.4-1.4 0.7 0 0.3-2 0.8-1.2 0.7-1.6 0.6-0.9 0.9-0.7 0.3 0.2 0.5 0.7-0.7 0.3 0.1-1.6 2.6-2.1 2.1-0.3 0.8 0.1 0.7-0.8 0.9-1.3-0.2-0.3-0.3-0.4-1.5-1.2-0.9-1-0.2-0.5 0.3-0.3 0.8 0.5 0.4 1.4-0.2 1.1 1.7 1.2 0.9-2.3 0.7-2.3 1.2-3.3 1.1-1.2 0.4-1.7 0.3-0.1 0.2-3.1 0.6-3.7 1-5.6 2-3.4 1.8-1.7 0.8-1.3 0.8-2.5 1.1-2.8 1.6-1.5 0.9-5.3 4-1.1 1-0.7 1.1-0.9 0.8-2.5 1.6-1.8 1.5-1.6 1.4-1.5 1.5-1.3 1.8-0.3 0.7-0.6 0.7-1.1-0.3 0-0.9-0.8 0.1-0.7 0.8 0.6 0.8-0.8-0.5 0.1 0-0.2-0.5 0.1-0.1 0.2-0.9-0.2 0-0.5 0-0.6-0.2 0.1 0.8-0.2 0.4-0.5 0.1-0.6 0-1.1 0.2 0.3 0.8 0.4 0.1 0.2 0.6 0.4-0.1 0.3-0.3 0.7 0.7-0.3 0.5-0.3-0.2-0.4 0-0.2 0.3-0.1-0.2-0.1-0.1-0.4 0.2-0.1 0.2-0.3 0.5-0.4 0.7-0.5-0.8 0.2-1-0.3 0.1-0.1-0.2-0.3 0.2-0.4 0.5-1.3 0.3-0.4 0.4-0.3 0.2-0.4 0.5 0 0.5-0.2 0.4-1.1-0.6-0.6-0.4 0-0.1-0.2 0 0.3 0.6 0 0.2 0.1 0.2 0.3 0.3 0.2 0.3-0.9 1.1 0.5 0.9-0.7 0.8-0.8 0.3-0.8 1.1-1-0.4 0.4 1.8-0.5 0.1 0.1 0.6-1.1 0.4-0.6-0.3-0.8 0.6-0.5 0-1-0.5-1.2 0.7-0.7-0.2-0.9 0.3-1.5 0.7-0.8-0.2-0.6-1.1-1.4-0.8-0.9 0.2-1.7-0.3-0.8-0.3-1.3-0.1-0.2-0.7-0.7-0.5-0.3-0.8 0.2-0.5-0.2-0.8-0.8-0.9 0.1-0.5-0.9-2.1-1.6 0.8 0.3 1.5 0.4-0.1 0.5 1-0.2 0.6-0.9-0.6-0.6-2.1-0.7-0.3-0.2-1.1-0.6-1-0.9-1.2 0-0.4-0.4-1-0.9-1-0.8 0.8 0.3 1-0.8 0.6-0.1 0.9-0.9 0-0.6 0.8-0.1 0.8-1.2-0.2-0.1-0.5 0.7 0-0.3-1.4-0.4 0.4-0.5-0.8-0.6 0.2 0.2 1.2 0.4 0.4-0.1 0.9-0.9 0.1 0 0.6 0.5 0.8-0.7 0.4-1-1.1-0.2-0.6-0.7-0.2-0.9 0.2-0.2-0.5-0.7 0.1-0.2 0.7-0.7-0.1 0.2 0.8 0.4 0.4 1.2 0.1 0.1 0.9-0.6 0.3 1.4 1.8 0.8 0.4-0.5 0.4 0.1 0.6-0.9 0.4-0.4 0.5-1.3 0.3-0.6 0-0.9 0.3-0.4 1.2-1-0.1-0.5 0.4-1.3 0.2-0.6-0.6-0.6 0.1-0.6-0.5-1.5 2.1-0.4 0.3-0.9 1.8-1.3 0.6 0.3 1.2-0.5 0.6 1 0.4-0.4 0.5 0.3 0.5 0.6 0.5 0.7-0.3 0.6 0.4-0.5 0.6-0.8 1.4-1.2 1.1 0.7 0.4 0.2 0.6 0.8 1-0.3 0.5-0.6 0.2-0.9-0.2-0.7 0.1-0.5 0.7-0.6-0.1-0.9 0.2-0.2-0.3-0.9 0.2-0.6-0.9 0.2-0.4-0.2-0.8-0.5 0.2-1.7-0.9-0.7-0.2-0.8 0.7 0.4 1-0.3 0.7 0.2 0.6-0.6 0.9-0.5 0.1-0.6 0.5-1.1 0.2-0.1 0.4-1.2 0.2-0.7 1.2 0.1 0.5-0.5 0.5-0.8-0.7-0.7-0.3-0.1-0.8 0.2-1.4 0.3-1.7-1.5-0.8-0.7-0.1 0-0.6 0.6-1.1-0.8-0.2-0.5-0.4 0.4-0.5-0.1-1.3-0.9 0-0.5-0.4-0.3-0.8-1.3 1.5-0.3 0.7-1 0.9-0.7 1.1-0.5 0.4 0.7 1.4-0.2 0.7-0.6 0.3-0.5 0.8 1.3 0.1 0.3 0.4-0.3 0.8-0.5 0.5-1.1 0.2-0.2 1.2 0.1 0.6-0.9 0.7 0.1 0.8 1.3 0.4 0.6 0.8-0.3 0.6-0.8-0.7 0 1.8 0.3 0.4-0.2 1.3-0.5-0.2-0.6 0.4-0.6-0.7-0.7 0.4-0.3 0.5 0.5 0.9-0.2 0.8-0.8 0.3-0.2-0.5-0.6 0-0.8-0.6-0.6 0-0.5-1.1-1.1 0.2-0.1-0.5-1.2-0.1-0.7-0.5-0.4 0.7-0.5 0-0.7-0.4-0.8 0.4 0 0.8-2.3 1.4-0.7 0.2-0.5 0.4-1.8 0.6-0.5 0-1.1 0.5-0.5 0.9-0.9 0.7-1.9 1.1-0.5-0.8-0.9 0.3-0.6 0.7-0.1 0.6-1.1 0.9-1.2-0.5-0.7 0.4-2.5 0.5-0.4-0.7-1.1 0.3-0.4-0.2-0.6 0.6-0.8-0.1 0-0.7 0.5-0.7-0.3-0.5 0.2-1 1.4 0.4 0.4-1-0.2-0.7 0.4-0.8 0.7-1 0.1-1.1-0.1-0.9 0.2-0.7 0.9-1.6 0.1-1.3 0.4-1-0.6-1 0.7-1.8 0.1-0.9 0.7-0.1 0.7-0.4 0.8-1 0.8 0 1.5-0.5-0.1-0.8 3-0.3 0.6-2.3 1.2-1.1 1.8-1.7 0.4-1 0.7-0.5 0.5 0.1 0.1-1.1 1.6-0.1 0.3-1-0.9-0.3-1-0.8-0.4-0.1 0.2-1.2 0.7 0.7 1.1 0.2 0-0.9 0.5-0.5-0.2-0.4 0.7-0.6 0.5-0.1 0.9-0.5 0.6-0.2 1.5 0.2 0.4-1.6 1.9-0.6 0.5-0.6-0.2-0.3 0.3-1.1-0.2-0.8 0.4-0.9 0-0.5 1.5-0.8 0.9 0.1-0.6-4-1-1.4 0.5-0.7-0.6-1.4-0.7-0.6 0.3-0.9-0.2-0.9-0.6-0.5 0.2-0.4-0.3-0.5 0-1.6 0.6-0.9 0.4-1.5-1.3-0.5-0.1-0.7 0.9 0 0.3-0.4 0.3-1.3-0.5-0.6-1.7 0.2-0.8-1.3 0.2-0.5-0.4-0.7 0.1-0.6-0.8-0.2-0.3 0.4-1.3 0.1 0.8-1.3-0.1-1-0.3-0.7 0.6-1.5-0.2-1.6-0.3-1.2 0.2-1.3 0.5-0.5 0.1-1.1-0.3-0.3-1.8-0.3-0.7 0.1-0.7-1.4 0.1-0.7-2.2-0.9-1.3-0.7-0.4-0.6 0.1-0.9-0.4-0.4 0.3-0.7 0.4-1.9 0.5-0.9 0.5 0.1 1.6-2 0.3-0.1 1 1 0.7 1 0.7 0.2 0 0.8 1.2-0.6 0.3-0.5 2 1.4 0.5 0 1.2 0.6 0.6 0.5 0.7 0 0.9-0.6 1.1 0.9 0.2 1 0.9 1.7 0.1 0.5 0.7 0.9 0.3 0.8 0.4 0.3 1-0.9 0.7-1 0.9-0.5 0.9-0.3 0.6 0.3 0.6-0.2 0.7 0.6 1.1 0.1 0.5 0.5 0.8-0.1 1 0.4-0.9 1.2 0 0.9 0.3 1 1.4-0.4 0.9-1.4 1.8-0.1 0.4-0.8-0.4-2.1 0.3-1.4 0.1-1.4-0.4-0.3-1.7-0.3-0.9 0.1-0.3 0.4-1.1-0.1-0.2-0.3-1.1-0.5-1.4-0.1-0.9-0.6-1.2-0.2-1.6-0.5-0.1-0.4 0.1-1-0.1-1.1-0.4-0.9 0.1-0.6 0.8-0.7 0.2-0.8-0.3-1.4 0.1-0.9 0.7-0.5-0.2-1.1-0.9-1 0.1-0.7 0.4-0.8 0-0.9 0.5-0.3 0.2-0.6-0.4-0.4 0-0.7-1 0.1-0.3-2-1.1-0.5-0.2-0.6-0.6-0.5 0.6-0.8-0.1-0.7 0.6-0.4 0.4-0.9-0.1-1.2-0.5-0.6-0.3-0.7 0.1-1.1-0.3-1.1 0.1-1.2-0.2-1.8 0.5-1.6 0.7 0.7 0.5-0.2 0.6 0.3 0.2 0.9 0.3 0.4 0.7-0.1 0.6 0.3 0.2-0.5 0.6-0.4 0.3-1-0.1-1 2.4-1.5 1-1.7 0.8-0.7 0.6-1.1-0.5-1 0.6-0.5 0.6-0.9-0.3-1.2 0-0.5 0.9-0.1 0.8-0.2 0.5 0.1 0.7-0.2 1.3 0.1 0.8 0.6 1.1-0.6 0.9-0.2 1.3 0.5 0.8-0.5 0.7 0.2 0.7-0.2 0.5-0.5 0.3 0.8 0.5-0.1 1 0.4 1.1 1 1 0.4 1.7 0.3 0.4-0.2 1-1 1-0.2 0.6-2.3 0.3-0.8-0.1-1 0.3-0.6 0.6-0.4 0.9 0.3 0.2-1-0.5-0.2-0.1-1.1 0.4-0.5 0.1-1.1 1.3 0.4 2.3 0.9 0.9-0.3-0.3-0.5 0-1.4-0.4-0.3-0.4-1-0.7-0.3-0.3-1.5 0.5-1.9 0.4-0.5-0.2-0.8 0.2-0.9 0.5-0.6 1.1-0.9 0.9-0.4 0 1.1 0.8 0.5 0.2-0.8 0.5-0.5-1.5-0.6-0.7-0.7 0.4-0.7 0.8 0 1-1.7-0.3-1.2 0.5-1.3 1.1 0.5 0.5 0-0.2-1.4 0.9-0.1 0.6 0.2 0.3-0.8-0.4-0.7 1-1.5-0.5-0.5-1.1-0.2 0.1-0.5-0.8-0.7 0-0.5 0.5-1.1-0.5-0.6 0.2-1.2 1.5 0 0.6-0.4-1.5-1.2 1.7-2.2 0.4-1.4 0.9-1 0.4 0 1.2-0.8 1.8 0.2 0.9-0.6 0.3-0.7 0.6-0.5 0.8-0.3 0.1-0.7 0.7-0.4 0.6-0.6 1.2 0.1 0.6-0.7 1.8 0.1 1.2-0.5 0.4-1.3 0.9-1 0-1.2-0.6-0.3-0.3-0.4-1.3-0.7 0-0.6 0.9-0.1 1.9 0.4 0.7 0.8 0.9 0.6 1.1 0.2-0.1 0.8 0.1 0.9 0.5 0.8 1.1 0.6 0.3 0.4 1.8 0 0.7 0.9 0.8 0.4 1.2 0 1.6-0.4 0.8 0.2 1.1-0.3 0-0.5 0.7-0.5 0.9-0.2 0-0.7 0.9-0.5 1.5 0 1-0.2 2-0.3 1 0.6 2.8 0 0.3-1.1 1.7 0 0.4 0.4 0.8 0.2 1.4-0.6 0.1 1 0.9-0.1 0.3-0.6 1.2-0.6 0.3 0.3 3.1-1.3 0.8 0.2-0.1 0.6-0.5 0.4 0.2 0.8 0.4 0.4 0.3 1.3-0.3 1.1 0.6 0.3-0.2 0.9 1 0.1-0.3 0.8-1.2 0.7 0.1 0.8-0.2 0.8-0.7 1.6 0.1 0.2-0.9 1 0.2 0.6-0.2 0.9-1.5 0.8 0.2 0.5 0.5-0.1 0.6-0.9 0.9-0.2 0.8 0.1 1 0.4 0.1 0.4 0.6 0.7 0.8-0.3 2.4 1.2 0.1 1.2 0.5 0.3 0.4-0.4 1.1-2.5 1.7-1.7 1.3 0.1 0.1-1.1 1.6-0.1 1.6 0.8 1 0.7 0.6 0.1 1.1 0.7 1.5 0.5 0.3 0.2 1.4-0.3 0.5-0.3 1.2 1.6 0.3-0.3 1.1-0.1 0.8-0.4 0.4-0.6 1.2-0.5 0.4-0.4 0.9 1.2-0.5 0.3-0.9-0.3-0.6 1 0.3 0.5-0.8 1 0.1 0.7 0.8 0.4 2 0.1 1.8 0 0.6-1 0.6-0.6 0.5 0 1.1-1.9 0.1-0.4 0.8-1.1-0.3-0.7 1.1-2-0.3-0.5-0.8-0.6-0.8-1 0.5-0.9 1.1-1.4-0.4-0.4 0.5-0.5-0.9-0.3 0.8-0.9 0.1-0.7-0.4-1.6-0.5 0.1-1.4-1.3 0.5-0.9 0.1-0.7 0.9-0.3 1.1-1-0.4-0.3 0.7-0.7 1.1 0.7 1.1 2 1.5 0.4 1.9 0.3 0.6 0.8 1.6 0.3 0.5-0.2 0.2 0.8 1.1 1.2 0.2 0.7 0.5 0.3 0.5 0.7 0.7 0.3 1.7 1.2 0.5-0.7 0.7 0.1 1.4-0.7 0.3 0.6 0.5 0.2 0 0.6 1 0.3 0.9-0.1 0.4 0.6 0.8 0.2 1.1 0.5 0 1 0.8-0.1 0.4 0.7 1.4 0.1z",
        27: "M399.3 989l0.1 0.2 0 4.8-0.1 0.6-0.5 0.1-0.8-0.1 0.1-0.2-0.1-0.3-0.1-0.1-0.2-0.1-0.3-0.2-0.1-0.3 0.5-0.1-0.6-0.4-0.1-0.4-0.3-0.1-0.2 0 0.2-0.2-0.1-0.2-0.5 0.2-0.2-0.1-0.2-0.3-0.2-0.2-0.5-0.1 0-0.1-0.1-0.1-0.2 0.1 0.1-0.2-0.4-0.1 0-0.2-0.2 0 0.1-0.1 0.5-0.4-0.2-0.1-0.4-0.3 0.4-0.2 0.4 0 0.4 0.3 0.2-0.2-0.2-0.2 0.1-0.3-0.1-0.1 0-0.1-0.2-0.2-0.1-0.4 0.4 0 0.6 0.2 0.5 0.1 0.5 0.2 0.3-0.4 0.2 0 0.2 0.1 0.5-0.1 0.4 0.2 0.5 0.1z m-4.6-34.6l0 0.4 0.6 0.3 0.3 1.4 0.2-0.3 0-0.4 0.6-0.2 0.1-0.3 0.2-0.2 0.1 0.1 0.5 0.1 0-0.5 0.2-0.2 0.2 0 0.2 0.5 0.6 0.3 0.4 0-0.5 2-0.4 1.1-0.4 1.5-0.5-1.1-0.6-0.1-0.4-0.6-0.9 0.4-0.8 0-0.4-0.2 0-0.7-1.2 0.3 0-0.4 0.7-0.1 1 0.2 0.5-0.6-0.7-0.8 0.1-0.5-0.8 0 0-0.7 0.6-0.2-0.2-0.8-1.8 0 0.2-0.6 0.1-0.2 0.3 0.1 0.3-0.4 0.8-0.3 0 0.7 0.5 0.7 0.4 0 0.2 0 0.2-0.3 0.8 0.3-0.3 0.2-0.6 0.3-0.3-0.2-0.1 0z m-150.4-2.8l-0.4 0.7-1.1 0.1-0.1 0.8 0.6 0.6 0.2 1-1.3-1.7-0.6-0.7-0.2-0.7-0.1-0.3 0-0.7 0-0.1-0.1-0.8 0.1-0.2 0.5-0.2 0.1 0.1 0.2 0.2 0.3-0.2 0.4 0.2 0.4 0 0.2-0.4 0.9-0.6 0-0.2 0.3-0.2 0.2-0.1 0.7 0.2 0.7 0.2 0.2-0.4 0.2 0 0.3 0 0.4 0.2 0.1 0.2-0.3 0.3-0.4-0.1-0.1 0.2-0.3 0-0.6 0.5-0.5 0.3-0.3-0.1-0.3-0.1-0.4 0.1 0.2 0.5-0.6 0.9 0.1 0.2 0.2 0.1 0.2 0.2z m238.2-164l-0.9 0.3 0.2-0.4 0.7 0.1z m0.4-0.5l-0.9 0.2-0.6-0.4-0.4 0.4 0.5 0.6-0.4 0-1-0.7-0.8 0.1-0.5-0.3 0.6-0.7 0.8 0.6 2.1-0.1 0.6 0.3z",
        28: "M294.1 255.4l-0.2 0.6 0.2 0.6 1.1 1.4 0.9 0.4 0.2 1.1 0.4 0.5-0.6 1.1-1.2-0.1 0.4-0.4-0.1-0.2-0.2-0.2-0.5 0.5-0.3-0.4 0.1 0-0.3-0.4-0.5-0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.1 0.2-0.2 0.3-0.3 0.3-1 0.4 0.1 0.1 0.6 0.8 0.2 0.8 0 0.1 0.3 0.2 0 0.2 0.3 0.3 0.1 0.3 0.3-0.1 1.7 0.9 0.3-0.5 0.2-0.2 0.3 0 0 1 1.5-0.4-0.2 1.2 0.5 0 0.9 0.8 0.5 0.8-0.5 1.3 0.1 0.7-0.6 0.4 1.2 0.6-0.2 1.2-0.6 0.2 0 1.3-0.2 0.8 0.4 0.3 0.3 1 0.6 0.6-1 1-0.7 0 0.1-0.8-0.5-1-0.6-0.3-0.5-0.7-0.9 0.9-0.9-0.2-1.1-0.4-0.8 0.2 0 0.6-0.9 0.5 1.3 1.3-1.3 1.4-1 0.2-0.6 0.8-1.3 1-1.1 0.2-1.2 0.4 0 1 1-0.9 0.5 0.1 0.7 1.1-0.2 0.4 1.1 0.4 0.1 0.8-0.6 0.6 0.2 1.4-0.3 1.6-1 0.6-1.2-0.8-0.8 0.7-1.1 0.2-0.3-0.8-1.3-0.1-0.3-0.9-0.6-1 0.1-1.3-0.3-0.7-0.8 0-0.6 0.6 0.7 1-0.5 0.5 0.1 0.7-1.4 0-0.7 0.7-1.2-0.3-0.4 0.2-1-0.3-1.4-1.4-0.2 1.1 0.9 0.8 0.8 0.1-0.8 1-1.1 1.8-0.3 1.2 0.5 2.3-0.9 0-0.4 0.7 0.5 0.2 0.1 1.1 0.5 0.4 0.9 0 0.6 0.6-0.5 0.6-1.1 0.3-1 1.1-0.9 0.1-0.8 0.8-0.7-0.6-0.6 0.2-0.1 1-0.6 0.3-0.6 0.9-0.5-0.2-0.7 0.1-1.1 0.8-1.3 0-0.7-0.3-0.6-0.6-0.6 0.3-0.5-0.2-0.7-0.9-0.8-1.6-0.8 0.3-0.9-0.7-0.8 0.5-1.4 0.2-0.3 2.1-0.7-0.1-0.4-0.6-1.4 0-0.1 0.7-2 0.4-0.2-0.8-1.7-0.4-2.2-1.3 0 0.9-1.6 1-0.4 1-0.2 0.9-0.6-0.1-0.9 1 0.4 0.7-1 0-0.3 1.5-0.7 0.5-0.2 0.7 0.8 0.5-0.5 1.1-1.8 0.4-0.9-1.2 0.3-1-0.7-0.6-0.9-0.3 0-0.8-0.5-0.7 1-0.5 0.3-0.6-0.3-0.6 0.3-0.8 0.8 0 0.4-0.8-0.7-1.4-0.5-0.3 0.1-1.4-0.6-0.3-0.9 0.7-0.2 1.1-0.6 0.3-0.3-0.8-0.7 0.1-0.3-0.6 0.3-0.8-0.6-0.2 0-0.6 0.5-0.4 0.1-1.1-0.9-0.6-0.4 1.3-0.9-0.1-0.8 0.7-0.9 0.3-0.7-1 0.1-0.3-1-0.5-0.6-1.6-1.8-0.6-0.8 0-0.9-0.6-0.7-0.8-0.9 0.7-1.3 0.3-0.4 0.2-1-0.3-0.5 0.8-1.4 1.1 0 0.7-1.9-0.4-0.4-0.4-1.8-0.7-1.8-0.1-1.4-0.2-0.8 0.1-3.9-0.3-1.3 0-6.2-0.5-6.1-0.1-0.3-1 0.6-2.3 0.6-0.5 1.5-2.4 0-0.6 0.2-2.1-0.3-2.6-0.8-1.6-1.3-1.8-0.7-0.5-0.1-0.9 1-1.3 0.9-0.2 0.3-0.9-0.2-0.6 1.1 0.1 0.3-1.3 0.5-0.6 1.8-1.3 0.5 0.6 0.8-0.3 0.2-0.6-0.6-0.4 0.8-0.7 0.1-1 1.1-1.2 0.9-0.2 1.6-1.5 1.2-1.9 0.7-0.2 0.7-0.8-0.3-1.2 0.9-0.2-0.2-0.7 0.7-1 0.3-1 0.5-0.2 1.1 0.2 0.3-0.2-0.3-0.8 0.1-0.5 1-0.8 0.8-0.3 0.1-0.5 1.7-1.6 0.9-0.1 0.3-0.4 1.1-0.8-0.2-0.5 0.2-0.9 0.4-0.4 0.1-0.8 0.7-0.2 0.9 1 1.9-0.5 1-0.7 0.3-0.9-0.5-1.3-1.8-0.3-1.1 0.3 0.2 0.7-0.4 0.7-0.7 0.3-0.7-0.1-0.1-1.2-1.3-0.7-0.2-1.8 0.5-1.1-0.1-0.6 0.4-1-0.4-1 0.6-1 0.8 0 1.4-3.9 1.1-1.1 0.6-1.5-1.6-1.6-0.6 0.2-0.2-0.9 0.9-0.4 0.2-0.5-0.1-1.1-0.8-2.2-1.7-3-0.4-1 0-0.9 1.2-0.5-0.3-0.8 0.6-1.5-0.2-0.6 1.4-1.4 0.1-0.8 0.8 0.1 1-1.1 0.8-0.5 0.9-0.1 0.2-1.4 1 0.9 2.2-1 0.6-0.6 0-0.7 0.9-0.6 0.8-0.9-0.2-0.6 1.3-0.2 0.2-0.5 0.6-0.1 1.2 0.4 1.3 1.1 0.9-0.4 0.9-0.1 0.6-0.7 0.6-0.2 1.2-0.8 1.1 0.1 0.2 0.5 0.9-0.6 0.3-1.3 0.6-0.1 0.9 1.2 1.2-1 0.4-1.2 0.8-0.5 0.5-1.9-0.2-0.6 1 0 0.6-0.9-0.2-0.8 0.3-0.4-0.9-0.8-0.1-1.4-0.5-0.6 0.1-0.1 0-0.1 0.2-0.1 0.4 0.2 0.1 0.1 1.1 0.4 1.3 0.2 0.5-0.1 0.1 0 1.3-0.5-0.1 0.8 0.7 0.3 0 0.9 0.5 0.4 0-0.1 0.4-0.7 0.3-1.7 0.7-0.8 1.6-0.8 1.9-0.3 1.3-0.5 0.9-0.7 1.2-2.4 1.1 0.1 0.8-0.5 0.8-0.9 0.4-1.2 1.2-1.5-0.1 0.7-0.5 0.8-0.1 0.7 0.1 0.9 2 2 0.7 1-0.3 0.5-1.8 0.6-1 0.8-2.8 3.1-0.3 0.6-0.6 0.5-2 0.4-0.8 0.4-1.1 0.8 0 2 1.2 0.3 0 1.3-1.6 1.8-1.1 0.8 0.7 0.6 1.8-0.5 1.4 0.8 0.6 0.9 0.8 0 1.4 1.4 0.7 0.5 1.4 0.3 1.1 0.5 0.9 0.8 1.9 4.1 0.1 0.9-1 0.3 0.5 1.3 0.3 0.2 1.1 3 0.9 1.7-0.1 0.7 0.7 1.2 0.7 0.5 0 0.4 1.4 2.2 0.8 1.7 0.7 2.1 0.5 0.4 0.5 1.2-0.8 0.8 0.2 1.2 0.9 0.5 0.2 1.4 1.2 0 0.5-0.3 1.2-0.1 0.1 0.4 1-0.4 0.4-0.4-0.2-0.7 1.2-0.1 0-1.3-0.5-1 1.1-0.1 0.4-0.4 0.1-1 1 1.7 0 0.8 1.2 2.1 0.7 0.8 0.7-0.2 0.7 1.5 0.8-0.4 1.2 1.1 0.8-1 1.1 1.2-0.9 1 0.4 0.4 1-0.5 0.6 0.6-0.8 0.4-0.7 0.8 0 1 0.3 0.3-0.3 0.9 1.2 0.7-0.7 1.3-0.2 1 0.5 1.2-0.1 0.7 1.4 0.9 0.5 0.5 0.9-0.1 0.7 0.4 0.4 0.9 0.8 0.4 0.7 0.9z",
        29: "M217.3 293.6l-0.5 1.4 1 0.2 0.6 1.4-0.7 1.1-1.4 0.5-0.7 0.9-0.2 0.6 0.2 1.7 1.9 0.1 0.4-0.5 1.1 0.1 0.8-0.6 0.4 0.6-0.1 1.2-0.8 2.6 0.2 0.8-0.3 0.3-0.2 1.6 0.1 1.2 1.3 1 0 0.4-0.6 1.1-0.5 1.3-1.5-0.2-0.1 1.5 0.7 0.1 0.6 0.7 0.1 0.8 0.9 1.2-0.1 1 1.5-0.1 0.3-1.6 1.3 0.3 0.8-0.2 0.7 0.6 1.5-0.2 1.2-1.5 1.3-0.2 0.8 0.7 0.6 0 1.3 0.8 0.3 1.1 0.5 0.7-0.4 0.6 0.5 0.9 0.8 0 0.5 0.4 1.1-0.8 0.5 0.1 0.4 1 0.9 1.2 1.1 0.2 0.2-0.6 1.1-0.1 0.6-0.8 0.5-0.1 0.5 0.9 1 0.4 0.4-0.7 1.3-0.1 0.1-0.7 1.5-0.8 0.2 0.6-0.1 1-0.3 0.7 1.1 0.3 0.1-0.8 1-0.6 0.6 0 0.1 0.9-0.4 0.4 0.5 1.6-0.5 0.7-0.6 0-0.3 1.1 1.2 0.6-0.5 0.7 0 1.5 1.7 0.2 0.3 1-0.2 0.9 1.3-0.1 1.3 0.4 0.2 1.3-0.4 0.6-0.2 0.8-1 0.1-0.1 0.5 0.8 1-0.1 1.6 0.9 0.9-0.5 1.9 0.6 0.6 0.5 1.5 0.3 3.3 0.3 0.2 0.3 1.1 0.7-0.1 0.3 0.4 0.8 0 0.3 0.7 0.4 1.7 1.2 0.5 0 0.4 0.8 0.9 1.6 0.4 0 0.6 1.5 0.6 0.2 0.7-0.7 0.7 0.2 0.5 0.6 0.2 0.5-0.4 0.9 0.2 0.2 0.4 1.3 0.3 1.7 0.8 0.1 1 1 0.2 1.1 1.7 1.1 0.6-0.4 1 0.1 0.5 1.4 0.7-0.2 0.8 0.7 0.1 0.3 1.1 0.6 0.6-0.3 0.5-0.7-0.1 0.1-0.9-1.3-0.2-1.2 0.9-0.1 0.9-0.5 0-1.1 0.8-0.3 0.5 0.8 0.4 0.6 0 0.9 0.9 0.4-0.8 0.7 0.5-0.6 0.5-0.2 0.7-1.2 0-0.1 0.7-0.6 0.7 0 0.5 1.1 0.1-0.7 0.9-0.1 1-0.7-0.1-0.7 0.2 0.2 0.7 0.9-0.2 0.8 0.4-0.1 1.8 1.1 0 1.4 0.6 0.4-0.3 0.7 0.2 0.2-0.7 1.2 0.6 0.2 0.8 1.5 1 1.2-1.6-0.5-0.6-0.1-0.7 0.3-0.7-1-0.4 0.4-2.4-0.9-0.8 0.7-1.1 1-0.3-0.9-0.8 0-0.4 1.9 0.2 0.6-0.6 0.7 0.2 0.6 0.6 0 0.8 0.9 0.3 0.7-0.3 0.6-1.4-0.6-0.3-1-1.5 0.9 0.2 0.8-0.8-1.2-0.8-1.5-0.8 0.1-0.4 1-0.2 0.9 0.3 0.6 0.4 0.2 0.9 0.6 0.2 0.7-0.4 1 0.1 0.4-0.3 1.2 0.1 0.6 0.7 0.2 1-1.4-0.1-0.3 0.6 0.8 0.3 0.9 0.8-0.5 0.3-0.8-0.2-0.1 0.6 1.2 0 0.7 0.5 0.9-0.2 0 0.9-0.2 1.4 0.5 0.3 1.8-1.4 1.3-0.1 0.8-0.3-0.3-1-0.1-1.8 1.1-0.2 1-1.4 1 0.1 0.5-0.6 1.3-0.5 0.1-0.5-0.2-0.9 0.5-0.2 1-1 1 0 0.1 0.5 1.2 0.3-0.6 0.5 2 1.7 0.7 0.2-0.5 2.8-0.6 1.1-0.4 1.7 0.2 0.8-0.2 2 0.7 0.3 0 0.9-0.4 0 0.1 1.5-0.1 0.8-0.7 0-0.2 0.5 0.2 0.6-0.4 0.8-0.2 2.6 0.9 0.7-0.8 0.8 0.6 0.9 0.8-0.7 1.3 0.7 0.3-1.9 0.5-1.4 1.3-0.2 0.7 0.7 0.8-0.3-0.2-0.8-0.7-0.1-0.9-1 0.5-1.3 1.1 0.4 1 0.9 1.6 0 0.1-1 0.8-0.2 0.5 0.7 1.2 0.1 0.4 0.4 1.4-0.8 1 0.7-0.1 1.2 0.3 0.8-0.5 0.3 0.2 0.6 1.1 0.2 0.3 2.1-1.1 1.6 0.5 0.6 0.8 0.1-0.6 0.9 0 1.2 0.3 0.6 1.2 0.2 0.6 0.6 0 0.8 1.2 0.8-0.4 1.4 0.5 1 1.2 0.6 1.1 0.1 1.5 1.5 1.1 0.6 0.6-0.4 0.8-0.1-0.1 1-0.7 0.5 0.6 0.5-0.1 0.6 0.6 0.3 0.7 1-0.1 0.9 1.1 0.5-0.7 1-0.8 0.2-0.5-0.2-0.3 0.8-0.5 0.6 0.2 0.4-1.8 0.5-0.9 1.1 0.3 0.8 0.6-0.6 0.7 0.1-0.2 1.2 1.3 0.7 2 0.3 0.5-1 1.1 1.8 0.6 0 0-1 0.5-0.3 0.3 0.8-0.3 1-0.7-0.1-0.8 0.4-1.7 0.5-2.1 1.4-3.3 1-1 0.6-0.1 0.5-1 0.3-0.2 1 0.8 0.9-0.4 1.2 0.8 0.2 0.4 0.5-0.5 0.8 1.1-0.2 0.4-0.5-0.4-0.8 0.6-2.3 0.5 0.1 0.3 0.8 1.5 0 0.2-0.3 1.3-0.1 0.5-0.5 1.1-0.4 0.5-0.6 1.5-0.3-0.2-0.9 0.5-0.7 0.8-0.2 0.6-0.4 0.8 0.6 0.6-0.2 2.2 0.9 0.7 0.6 0.6-1 0.7 0.1 0.4 0.5 0.8-0.5 0.4 0.6 0.5-0.6 0.8 0.1 0.7 1.3 0.3-0.3 0-1.2 0.6 0 0.9 0.5 0.5-0.3 0.4-0.7 0-1 0.9-0.1 1.7 0.4 1.5 0.5 0.9 0-0.4 1.2-0.7 0.7-0.8 0.2 0.2 1.6-1.7 0.4 0.6 0.9-0.1 0.4-1 0-0.9-0.4-0.8 0.5 0 0.7 0.5 0.8-0.7 0.5-0.1 1.9-0.4 0.3-0.9-0.4-1.9-0.5-0.8 1-1 0.5-1.3-0.1-0.4 0.5-0.1 0.8-0.3 0.5-1.3 0.2-0.7 0.5 0.1 1.1-0.4 0.7-0.5 0.1-1-0.1-1 0.4-0.4 1.1-1.1 0.5-0.8-0.3-1.5 1-1 1.1-1.6 0.5-1 1-1.6 0-1.6 0.3 0.4 1.1-0.3 0.5-1-0.1-0.5 0.2-0.7-0.3-1.7 0.9-0.3 1.2-1.4 1.5-1 0.5-1.5 1-1-0.3-1.2 0.2-0.5 0.3-0.6 1.4-0.4 0.3-1.1 0-1 0.4-0.7 0.6-0.3 0.9-1.9 1.2-1.8 0.4-0.5 1.4-1.4 1.1 0.3 0.7-0.7 1 0 0.5-0.8 1-1.2 0.1 0.1 0.8-1 0.7-0.7 0.1-1.3-0.5-1.2 0.3-0.3 1.1-1.2 0-0.4 0.3-0.6 1.1-0.6 0.5-0.7 1.1-0.2 1.2 0.2 0.8-0.1 0.5-0.8 0.1-0.7 0.4-0.2 0.9 1.2 0.8-0.4 0.9 0.5 0.6 0 1-0.2 1 0.5 1.1-0.1 0.8 0.6 0.8 0.7 1.4 0.2 1.1 0.8 0.4 0.5 1.6 0.8 0.6 0.4-0.2 1.5 1.3 1.1 0.1 0.9-0.2 0.9 0.4 0.2 0.8 2.4-0.5 1.7 0.3 1.3 0.9-0.1 0.7 0.9 0 0.2-0.7 1.1-0.2 1.1 0.1 0.5-0.9 0.8 0 0.5-0.6 1.3 0.2 1.3 0.8 1.3 0.1 0.2-0.7 0.7-0.1 0.1-1.6 1.4-0.9 0.7-1 0.8-0.4 1.9 0.8-0.6 1 0.4 0.7-0.4 1.2 0.7 0.2 0.4 1-0.3 0.8-0.6 0.5 0.5 0.8 0.6 0.2 0.9 0.7 0.3 1.2-0.9 0.2-0.1 2.5-1.3 0.9-0.6 0.1-1 0.5-0.6-0.8-0.8-0.6-1.4 0.4-0.8-0.3-0.9 0.1-0.4 1-1 0-0.5 0.7-1.3 0.4-3.2-0.7-0.5 0.8-0.5 0.3-1.8 0.5-0.7 0-0.4 0.9-0.1 1.5 0.2 0.6 1.8 1.7-0.4 0.8 1.2 0.6-0.7 0.9-1.1 0.4-2-0.1-1.2 0.6 0.5 0.8 1 1.3 0 0.7 0.5 0.1 0.9-0.2 0.6 0.3 0.6-0.1 0.8-0.6 0.6 0.2 0.3 1 0.7 0.6 0.9 0.1 0.5 0.4 0.1 0.8 0.8 1.5 0 1.8 0.2 1.1-0.5 1.4-0.6-0.1-0.3 1.1-1.1 1-1.1 0.5-0.6-0.2-0.9-0.8 0.1-1.8-0.6-0.5-0.4 0.8-0.5 0-0.3-0.8-0.7-0.1-1.1 0.6 0.7 1.4 0.4 0.4 0.2 0.7-0.3 1 0.3 0.2-0.3 1.1 0.3 0.7-0.1 0.8-0.4 0.3 0.3 1.2 0.5 0.6 0.5 1.5 1.4 1.5 0.1 0.4 0.9 0.8-0.4 0.5-0.6-0.1-0.5 2.2-1-0.4-0.5 0.1-1 0.5-0.9 0.2-0.4-0.2-0.7-1.5-0.5-0.3-0.9 0.1-0.3 0.3-0.6-0.4-0.9-0.8 0.4-1.4 0.5-0.7-0.3-1.3-0.5 0.5-1.3 0.3-0.8 0-0.1 0.8-1.5 1.1-0.2 0.4 0.5 0.8-0.8 0.5-1.1 0.2-0.4-0.6-0.1-0.8-0.4-0.5-1.1-0.6-0.4 0.4-1-0.3-0.4 0.6-2-1.5-1.2 0-1 0.5-0.4 0.8-1-0.5-0.8 0.2-0.6-0.4-0.1-1.3-0.3-0.6 0.4-1-0.7-0.8-0.5 0.6-0.1 0.8-0.7 0.1-0.2 0.4 0.4 1.4-0.1 0.3-1 1.2-0.1 1 0.4 0.3 0.2 1.4-0.3 0.5 0.2 0.9-1 0-0.2 0.2-1.9 0.6-0.6 0.9-1.2 0.7-1 0.2 0 1 0.7 0.9-0.2 1.6-0.9 0.4-0.6 0.7-0.4-0.1-1.4 0.8-0.9-0.4-1.7 0.9-0.8 0.6-0.6-0.1-0.1-0.9-1.1-0.8-0.8-0.1-0.2 1 1 0.5-0.2 1.4-0.3 0.4-0.8-0.1 0.3 1.2-0.3 0.5-1.3-1-1.2-0.2-1.1 0.2-0.6-0.6 0.1-0.7-0.2-0.8-0.9-0.7-1.1-0.6-0.6-0.7-1-0.4 0.2-2.2 1-0.9 0.7-1.7 0.6 0.7 1.4 0.5-0.1 0.7 2.3 0 0.2-0.7 0.9-0.6 0.6 0.6-0.1 0.7 0.6 1.1 1.2-0.4 0.1-0.6 0.8-0.1 0.6-1.4 0-1 1.7-0.3 0-1.4-0.6 0.2-0.8-0.3-0.3-0.9-1.2-0.2 1-3 1.1-0.3 0.2-1.2 0-1.5-0.5-0.5-1.1 0.1-0.9-1.4 0-1.5-0.1-0.6 0.7-0.2 0-0.7 1-1.1 0.2-0.6 0.8 0.3-0.1 1.1 0.6 0.5 1.1 0 1.4-0.9 0.2-0.3 0.1-1.4-0.2-0.5 0.7-1.2-0.6-0.5 0.1-1-0.9-0.1-0.4-1-0.7-0.3-0.2-0.6-0.1-1.4-0.5 0 0.4-1.8-0.1-0.5-1.1-1-0.7-0.3-1.5 0.1-2.1 1.3-0.7 1-1.6 0.5-1.1-1.3-1 0.3-0.5-0.2-1.8 0.8-1.1 0.2-3-0.6-0.4-0.3-1.6-0.2-1.3-0.4-0.6 0.1-0.7-0.2-0.4 0.5-0.7-1.4-0.2-1.1 0.9-1.2 1-0.1 0.2-0.5-0.8-0.4-0.9-1.4 1.6-0.4-0.3 1.3 1.5 0.4 0.5 1.3 0.5 0 0.6-0.6 0.4-0.1 2.5-1.1 0.3-1.1-0.6 0-1.2 0.5-1.6-0.3-0.5 0.6-1.7-0.7 0.2-0.9 0.7-0.5-0.7-1.3 0.6-0.6 0.2 0.9 0.9 1.7 0.3-1.1 0.4-1-0.5-0.7-0.1-0.9 1.1-0.7-0.1-0.6-1.3-0.2-3.8 0.4-0.9-0.7-0.5 0.3-0.1 0.6 0.5 0.8-0.2 0.6-0.9 0.2-0.8 0.8 0.1 2.9-0.9 0.4-0.6-0.3-1 1-1.1-0.5-2.3-0.2 0.1-0.6-1.2-0.2 0-1.1-0.4-0.4-1.2 0.1-0.1-1.1-0.3-0.3-0.7 0.3-0.3 1 0.1 1.5 1 1.8 0 1.5 0.7 0 0.2 0.4 0.7 0.2 2.3 0.2 0.9-0.3 0.5 0.2 0.3 0.8 0 0.7-0.9 0-0.1 0.7 0.3 1-1.2 0.3-0.7 1.4-1.5 0.3-0.9-0.5-0.3-0.8-0.6-0.7-1-2.1-0.3-1.2-0.4 0 0.2 1.6-0.8 0.4 0.3 0.6-0.5 1.5 1.3 0 0.1 0.6-0.7 0.6-0.4 0.7 0.2 1-1.4 0.5 0.3 1.2-0.3 1.1-0.7 0-0.4 0.5 1.4 1.2 0.7 0.3 0.5-0.4 0.7 0 1.5 1.5-1.5 1.6-0.4 0.9-0.6 0.7 0 1.9-0.9 0.8-0.1 0.6 0.6 0.3 1.5-0.2 1.3 0.3 0.7-0.3 0.7 0.6 0.4 1-0.9 0.7 0.7 1.5 0.9 0.7 0.4 1.3 0.7 0.4 0.2 1.1 0.5 0.4 0 1.1 0.4 0.4-0.1 0.6-0.6 0.4-0.3 1.1-0.7 0.5-0.9 1.8-0.4 1.7 0.4 0.8-0.2 1.7 0.6 0.1 0.4 1.2-0.2 0.3 0.2 0.9-0.5 0.5 0 0.9-0.5 0.7 0.5 0.3 0.5 1.5-1.1 0.2-0.7 0.6-0.6 1.2-0.6 0.7-1.7 0.8-0.2-0.4-0.7 0.1-0.4 0.7-0.7 0.2-0.3 0.7-0.8-0.2-1.4 0.8-0.4 0.6-1.5 0.2-0.5 1.2-0.9 0.4 0 1.4-0.4 0.7-0.5 0-0.1 0.9-0.3 0.6 0.5 1.3 0.6-0.4 0.7 0.5 0.9 0 0.6 0.8 0.7 0.1 0.7-0.5 1 0.1 0.7 1.1-0.9 0.5 0.8 0.3 1.1-0.4-0.2 0.7-1 0.7-1.6-0.3-0.5 0.7-1 0.7-0.6 0.7-2.1 0.5 0 0.5-0.4 0.6-0.8 0.5-1.5 0.1-0.8-0.3-0.4-0.4-1.4-0.3-1 0.8-0.5 0.8-0.8 0.3-0.5-0.7-0.9-0.5 0.2-0.9-0.6-1.4-0.7-0.8-1.5-0.5-0.6 0.7-0.2 0.7-1-0.2-0.3-0.6-0.6-0.1-0.1-1.1 0.5-0.7-0.1-1.4-0.8-0.5-0.2-0.6-0.6-0.2-1.4 0.1-0.6-0.9 0-0.5-1.4-0.1-0.2-0.9-0.8-0.8-0.5 0.3-0.3 1.2-1.5 0.2 0-0.6-0.5-0.6-0.4-1-1.4-1.9-1.5 0.4-0.6-0.8-1.1 1.2-0.5 0.2-0.5-1.3-1.2 0.1-0.5 0.4-0.7-0.4 0.4-1.7 0.5-0.6-0.8-0.7 0.1-1.1 0.4-0.5 0-1.2 0.3-0.6-0.6-0.3-0.8-0.7-1.6-0.1-0.6 0.8-0.9 0.8-0.5-0.2-0.4-0.7 0.3-2.3-0.3-0.4-0.8-0.1-0.2-0.6-0.6-0.5-0.1-0.5-0.7-0.4-0.4-0.6-0.7-0.2-0.8 0.7-0.5-1 0.4-1.1-0.4-1.2 0.9-1.9 0.3-0.4 0.8-0.3 0.1-1.9-0.4-0.9 0.1-2-0.6-0.8-0.9-0.5 0-1-1.2-0.1 0 1.3-0.3 0.7-0.6 0.4-0.6 0.9-0.5 0-0.8 0.6-1.8-1.2 0.8-2-0.8-0.4-1-0.1-0.8-0.4-0.8-0.7-0.2-0.5-1.2-1.2 0.3-1.3 0.8-1.6 0.8-0.6 0.2-1.1 1 0.3 0.4-0.3 0.1-1 0.8 0 0.7-1.1-0.7-0.4-1.1 0.9-0.6 0-1.2-0.7-0.5-0.6-0.9-0.3 0.7-1 0-1.4-0.4-1.4-1.5 1.1-1 0-0.3-0.6-1.1 1.2 0.4 1.1-0.9 1.1 0.8 0.6-0.4 0.6-1.8 1.2-0.8-0.9-1.1-0.5-1.3 0-0.5 0.2-2.9-0.1-0.8-1.1-0.5-1 0-1.6-1.2 0.2-2.4-0.6-0.5-0.6-1.1-0.7-1.4 2.1 0.3 1.2-0.7 0.5-0.8-0.1-0.3-1.2-0.7-0.8 0.4-1.2-0.2-0.4-0.7-0.2-1.2 0.3-0.9-1.9-0.9-0.2 0 0.5-1.3 0.2-0.2-0.8-0.6 0.3-0.7-1.1 0.9-0.7 0.8 0 0.5 0.5 0.9-0.3 0.4-0.9-0.4-0.2-0.9 0.5-1.4-0.5-0.9 0.1-0.6-0.5-0.5 0.5-1 0.4-0.8-0.2-0.4-0.7-1.2 0-1.1-0.7 0.3-0.8-0.3-0.9-1.1-0.3-0.4 0.4-1.6 0.7 0 0.7-0.9 0.7-1.1 0.5-0.5-0.8 0.2-0.6-0.5-0.2-0.6 0.1-0.8-0.2-0.3 0.8 0.2 1-0.7 0.3-1.2-0.2 0.2-1-0.2-0.5-0.9-0.3-1.3 0.5-1.1 0-1.8 0.8-0.6-0.7-1-0.7-0.6 0.3-0.5-0.5-1.1 0.2-0.5-0.3-1.6 0.2-0.5 0.4-0.8 0.2-1 0.7-1.4 0.7-0.5-0.3-0.3-1-1.1 0.5-0.9 1.3-1.3-0.5-0.7-0.2-1.1-0.5-1.3-0.4-1.7-0.7-0.5-0.5-1.1-1.1-1.3-3.3-1.1-2-0.8-1.4-0.8-1-0.4-0.7-0.7-2.3-0.4-1.9-0.6-3.7-1.3-1.4-1.6-1.6-1.7-1.9-0.5-1.8-0.8-0.9-1.6-1.7 0.1-1 0-1.2 0.3-2.6-0.4-0.3 0.1-2.4 0.1-2.7-0.5-1.4-0.7-0.4-1.5 0.2-1.2 0.6-1.2 0.4-1.4 0-2.2 0.2-0.9 0.2-0.9-0.1-3-1.2-0.5-0.4-0.4-1.2-0.5-0.9-1.4-1.5-0.9-0.6-0.4-0.9-2-3-0.5-1.6-0.1-1.2-0.3-2.3 0.5-1.5 1.7-2.6 0.5-1.1 0.4-1.9-0.2-1.3 0-1.1 0.4-1.6-0.1-3.2 0.3-2-0.5-2.5-0.6-0.7-1.5-0.8-1.4-0.3-1.4 0-3.7 0.6-2.1 0-1.4-0.4-1.5-0.8-1.7-1.5-6.8-3.2-0.5-0.4-0.8-2.2 0.6-3.6 0.1-1.7 0.3-2.8 0.8-2 1-2.7 0.7-1.5 2.7-2.8 5-4.2 1.7-1.6 1.6-2.2 1-1.7 2.7-2 0.3-0.6 2.8-7.6 1.7-2.6 1.7-1.9 2.5-1.8 0.8-0.6 1.1-1.4 1-1 2.3-0.5 1.6-0.5 1.7 0.1 1.1 0.5 3.4 3.4 0.4 0.6 0 1.8 0.2 1.2 2 3.7 0.7 1 2.1 0.5 2.2 0.2 0.8-0.1 4.3-2.2 6-2.6 2.2-0.7 4.7-0.9 4.1 0 1.9-0.2 2.5 0.1 1.3-0.5 2.3-1.1 3.2-1.2 1.3-0.6 0.5-2.7 0-0.8 0.7-2.9 1.2-1.7 1-1.6 0.8-0.7 3.6-3 1.1-1.3 0.9-0.8 0.9-1.7 3.1-10.3 0.9-1.3 2-2.5 0.6-0.6 1.5-0.6 2.5-1.3 2.3-1.5 2.2-1.5 3.1-1.7 6.3-2.8 0.6-0.4 1.9-4.6 2.7-3.3 2-3.8 1.8-3.9 1.1-2 1.6-3 0.9-3 0.5-2.1 1-3.3 0.6-2.6 0.3-0.7 0.6-2.8 0.2-0.5 0.8-0.5 6.8-2.8 1.4-0.4 1.9-0.6 1.5-0.4 1.4-0.5 1.5-1.5 2.9-2.4 1.5-1.1-0.2 2.1 0 0.6-1.5 2.4-0.6 0.5-0.6 2.3 0.3 1 6.1 0.1 6.2 0.5 1.3 0 3.9 0.3 0.8-0.1 1.4 0.2 1.8 0.1z",
        30: "M703.3 402.2l-0.7 0.5-0.5-0.3-0.2-0.8-0.9-0.6-0.9 0.7-0.7-0.2-0.7-0.8-0.9-0.2-1.7 0.4-0.7 0.3 0 1-0.9 0.9-1 0.5-0.4 0.9-0.7 0.3-0.8-0.3-1.3-0.4-0.7 0-0.2-0.3-0.7 0.1-0.1-0.4-0.6-0.5-0.2 0-0.7-0.1-1.6 0.4-0.6-0.5-1.2 0-0.7 0.7-0.7 0-1.8-1 0-0.9-0.6-1 0.3-0.3-0.6-0.6-1.4-0.2 0.5-1.1 0.1-1.4 0.7-1.5 0.5-0.4-0.3-0.8-0.6-0.6 0.3-1.6 1-0.7-0.8-1.4-0.4-0.4 0.1-0.9 0.5-0.4 0-1.1 0.5-1.2 0.6-1 0.7-0.5 0.2-1.4 0.8-0.7 0.4-1-0.2-0.5 0.3-1.4 0.7-0.3 0.1-1.1 0.5-0.6-0.4-0.7 0.6-1.1-0.2-0.6-0.6-0.1-1-0.8-0.8-0.2-0.5-1.2 0.5-1-0.2-0.5 0.6-0.5 1.1 0.8 0.8-0.1 0.3-0.8 1 0.1 0.3 0.6 1-0.4 0.3-0.3 0.8-0.1 1.1-0.7 0.9 0 0.9 0.4 0.4-0.2 0.9-1 1.2-0.4 0.7-1 0.6-0.2 1.1 0.5 0.7-1.1 0-0.7 0.7-0.1 1.5-0.7-0.3-0.9 0.4-0.1 0.6 1 1 1.2 0.6-0.2 2.3 0.2 1 0.9 0.6 0.7 1 0.6 0.4 1-0.1 2.3 0.7 0.2 0.8 1.2 0 2.2-0.9 0.8-0.1 1.5 0.4 1.5-0.6 1.5 0 1.2-0.8 1-0.4 0.1-0.2 1.5-0.7 1-0.6 0.4 0.3 1.1 0.4 0.3-0.1 1.3 0 1.5 0.3 0.4 0.5 1.6 1 1 0.7-0.3 0.7 0.8 0.4 1.1 1.1 0.4-0.4 0.8-0.4 1.2-0.9 0.6-1.3-0.2-1.1 0.6 0 1.1-0.6 1.5-0.9 0.3-0.2 0.9z",
        31: "M380.9 1046.1l0.8 0.6-0.6 0.9 0.4 0.9 1.7 1.5 0.6 0.9-2.5-1.6-1.6-0.6-1.9-0.5-0.5-0.4 0.5-0.4 1.6-0.1 0.8-0.9 0.7-0.3z m34.2-142.8l0.5-0.1 0.1 1.1 0.5 2.5 0 1.2-0.3 1.4-0.9 3.2-0.3 0.7 0.1 1.7-0.7 1.3-0.1 1.1-0.7 3.2-0.4 2.6-0.1 1.9 0.3 0.9-1.4 4.3-0.5 1.5-1.1 3.1-0.3 1.9-0.5 0.9-0.9 1.4-1.6 1.9-0.9-0.4-0.3 0.9 0.5 0.5-1.1 1.7-0.1 0.4-1 0.4-0.1 0.6 0.3 0.3-2 3.1-1.6 2.5-1.3 3-0.3 1.4-0.4 0-0.6-0.3-0.2-0.5-0.2 0-0.2 0.2 0 0.5-0.5-0.1-0.1-0.1-0.2 0.2-0.1 0.3-0.6 0.2 0 0.4-0.2 0.3-0.3-1.4-0.6-0.3 0-0.4 0.1 0 0.3 0.2 0.6-0.3 0.3-0.2-0.8-0.3-0.2 0.3-0.2 0-0.4 0-0.5-0.7 0-0.7-0.8 0.3-0.3 0.4-0.3-0.1-0.1 0.2-0.2 0.6 1.8 0 0.2 0.8-0.6 0.2 0 0.7 0.8 0-0.1 0.5 0.7 0.8-0.5 0.6-1-0.2-0.7 0.1 0 0.4 1.2-0.3 0 0.7 0.4 0.2 0.8 0 0.9-0.4 0.4 0.6 0.6 0.1 0.5 1.1-0.2 1.4-0.6 2-0.5 3.1-0.2 1.3 0.1 1.1 0.5 1.5 0.5 1.1 0.6 1.2 0.8 3.1 0.3 0.2-0.1 1.2 0.1 1.1 0.4 1.7 0.3 3.3-0.1 5.6-0.2 0.1-0.5-0.1-0.4-0.2-0.5 0.1-0.2-0.1-0.2 0-0.3 0.4-0.5-0.2-0.5-0.1-0.6-0.2-0.4 0 0.1 0.4 0.2 0.2 0 0.1 0.1 0.1-0.1 0.3 0.2 0.2-0.2 0.2-0.4-0.3-0.4 0-0.4 0.2 0.4 0.3 0.2 0.1-0.5 0.4-0.1 0.1 0.2 0 0 0.2 0.4 0.1-0.1 0.2 0.2-0.1 0.1 0.1 0 0.1 0.5 0.1 0.2 0.2 0.2 0.3 0.2 0.1 0.5-0.2 0.1 0.2-0.2 0.2 0.2 0 0.3 0.1 0.1 0.4 0.6 0.4-0.5 0.1 0.1 0.3 0.3 0.2 0.2 0.1 0.1 0.1 0.1 0.3-0.1 0.2 0.8 0.1 0.5-0.1 0 1.9 0.2 6 0.1 1.3 0.2 4.6 0.2 1.7 0.5 2.1-0.6 0.7-1.1 0.4-1.3 0.1-1.8-0.1 0.7-0.9-0.1-0.4-1.1 0.1-0.3-0.3-1.2-0.2-0.5 0.2-0.8 0-0.7-0.9-0.5 0.9-1 0.6 1.2 0.1 1.6 0.3 0.7 0 1.4 0.6-6.8-1.1 0.7-0.4 0.4-0.6 0.9 0.2 0.1-0.4-1.4-0.3-0.5 0.4 0.3 0.4-1.4 0.2 0.4 0.3-4-0.3-0.5 0.1-0.4 0.7-1.5 0.5-1.1 0.7-0.9 1.1 0.5 0.5-1.4 1.2 0 0.9-0.4 0.2 0.1 0.8-0.2 0.9 0.4 0.9 0.5 0.3 0.3 0.8-0.7 0.6-1.7 2-1.2 1.2-0.1 0.4-0.9 0.9-0.3 0.7 0.2 0.4-0.6 0.9-0.5 0.3-0.5 1-0.6 0.9-0.7 0.3-0.7 1.1-1.3 1.6-0.3 1.1-0.5 1-0.8 0.7-0.5 2.4-0.1 1.5-0.6 0.2 0.1 0.7 1.2 2 1.8 1.9 1.1 0.9 1.5 1 1.4 0.4 1.3-0.1 0.9 0.4-1.7 0.4-0.9 0.3-1 0-1.3-0.3-1.6-0.2-0.9 0.1-1 0.2-0.6 0.6-0.9-0.3-0.7 0.1-3.5 1.3-0.8 0.2-0.6 0.3 0.1 0.4-1.8-0.2-0.6 0.4-0.2 0.5 0.3 0.4-1.3 0.2-1.3 0.7-0.8-0.2-1.4 0.1-0.7 0.2-1.1 0.1-1.6 0.5-1 0.8-1.3 1.1-1.2 0.9-2.5 1.6-0.9 0.8-0.9 1.5-0.1 0.8-0.4 0.5-0.2 2-0.1 0.7 0.1 1 1.2 0.3 0 0.4-0.8 0.2-0.4 0.4-0.3 0.8-0.7 0.8-0.2 1.1-0.4-0.1-0.2 0.7-0.3 0.1 0 0.9 1 0.3 0.3 0.5-0.6 2.5 0.3 0.6-1.1 1.2-1.1 1.4-0.4 1.4 0.4 0.4-1.5 0.4-1.4 0.7-0.9 0.6-0.1 0.3-1.8 0.9-0.4 0.5-1.1 0.5-1.4 0.4-1.1 0.9 0 0.5-1.4 1.1-0.9 0.3-3.5 0.5-1.3 0.5-0.5 0.6 0 1-0.3 0.4-0.5 0-4.3-0.9-2.1-0.6-1.5-0.2-0.3-0.7-0.7-0.5-1-0.3-1.1-1.1-1-0.6-0.8-0.9-2.4-1.8 0.4-0.1 0.6-0.7 1 0 0.2-0.8-0.7-1.1 0.6 0 0.9-1.1 0.3-0.9 0.7-0.1-0.6-1.7 0.5-0.6 0.6 0.6 0.8-0.5 0.6-1.2-0.4-1.2-0.8-0.9 0-0.5-1-1-0.7-2-0.4-0.3-0.4-1 0.7 0 1.3-1.4 0.1-0.7 1-1.2-0.2-1.3-0.6-0.5-0.6-0.3-0.4-1-0.5 0.2 0-1.1-0.6-0.5-0.1-0.6-0.8-0.7-0.1-0.4 0.7-0.9 0.9-0.3 0.5-0.7 0.1-0.8 0.5-0.6 0.7-0.4 0.7-0.9-0.1-1.6 0.6-0.6-0.3-0.6 0.3-1.3 0-1 0.7-0.6 1.1-1.5 0-0.8 0.3-0.6-0.2-0.5 0.4-0.8 0.6-0.7 0.7 0.2 0.5-0.8-0.1-0.4 0.4-0.6-0.9-0.4-0.7-0.6 0-0.5-1-0.9-0.5-0.9-0.6 0.2-0.9 0.7-1.3-0.2-1.3-1.2-0.4 0.3-0.6-0.1 0-0.5 0.3-1.1 0.5-0.5 0.4-0.9 0-1 0.6-0.2 0.1-1.2-0.1-0.8 0.9-0.3-0.5-0.9 0.1-1-0.8-0.8 0.2-1 0.6-1 0.6-0.7 0.3 0.1 0.4-0.8-0.4-0.3-0.3-1 0.3-0.5-1.5-1.8-0.4-0.2-0.2-0.8 1.4-0.8 0.8 0.3 0.3-0.6-0.1-0.9 0.2-0.9 0.6-0.9-0.4-0.6-0.6 0-0.1-1-1.2-1.8 0.3-1.2-2.1-0.3-1.6 1.3-1.4 0.5-1 0.7-0.2 1-0.7 0.2-1.3 0.7-0.7 0.1-1.1-0.4-0.6 0.2-0.6-0.3-0.3-0.8-0.7-0.4 0-0.5-1.1-0.1-0.4-0.4 0.3-1.5 0.4-0.7-0.8-1 0.2-0.2-0.5-0.7 0.3-0.9 0.1-1.8 0.4-1.3-0.2-0.3 0.2-1.6-0.5-0.2-0.4-0.9 0-0.4 2.3-0.1-0.1-1.2-0.5-0.3 0.7-1.2 0.6-1.5 0.2-0.7-0.3-1-1 0-0.8-0.6 0.3-0.3-1-1.3-1.1-0.3-0.4-0.4-1.4 0.1-1.1-0.7-0.5-0.1-1.1-0.6 0.3-1.4 0.6-0.7 0-0.7 0.4-0.6 0.7-0.5 1.6 0.3-0.2-0.8-0.5 0-0.1-0.6 0.4-0.7-0.4-0.3 0.2-0.6-1.5-0.8-0.3-0.9 0.7-0.7 0.5-0.2 0.1-0.8-1-0.8-2.5 1.6-0.7-0.4-0.8 0-2 0.2-0.5-0.4-1.4 0.1-0.4 0.7-0.3-0.7 0.1-1.1 2.3-1.1 0.9-2-0.1-1.1-1 0.2 0-0.5-2.1-0.7-1.3-1.2 0-0.7-0.6 0.2-1-0.7-1-0.3-0.4 0.4-1.5-1-0.7 0.1-0.6 0.4 0.2-1.2-0.4-0.8 0.3-0.2-0.6-1.4 1.6-1 0.7 0.4 0.2 0.6 1-0.9 0.3 0.4 1.2-0.5 0.3-1 1.4-0.1 0.5-0.3-0.4-0.9 0.9 0.1 0.8-0.8 1-0.7 1.3 1 0.4 2 1.9 0.4 0.6-0.1 4.3-0.1 2.2 0.3 0.7 0.5 0.5-0.6-0.7-1 0-0.7 0.8-1.7 0.9-0.9 0.2-1.5 0.5-0.6 1.5 0.1 0.5 0.6 0.5-0.9 1-0.4 0.7 0.2 0.6 0.6 0.7 0.2-0.4 0.5 0.9 1.2 0.7 0 0.6-1.3 0.8-0.4 0.9 0 0.9-0.3 1.2-0.1 0.5-0.6 1.3 0.4 0.2-0.3 1.4 1.4 0.7-0.2 0.3-0.5 0.9 0.1 1.1 0.5 0.6-0.4 0.9-2.3-0.1-1.8 0.7 0 0.5-1.4 1.2 0.3 0.8-0.3 0.9 0.2 2.1-0.5 1 0-0.1-0.5 0.9-2 1.1-1.5 0.9-0.5 0.7-1.4-0.9-0.7-0.1-0.7-0.4-0.7-2.4-0.7-0.9 0.1-0.9-0.3-1.6 0.2-0.6-0.2-1 0.4-0.9-0.3-0.6-0.4 0.3-0.8-0.4-0.4 0.2-0.9 0.8-0.3 0.9 0.1 0.2-0.4 0.6-0.1 0.5-0.5 0.4-0.9 1.2-1.1 0.4-1.8 0.3-2.5-0.2-0.3-0.7 0.7-0.8-0.1 0.9-0.8 0.1-0.4-0.9-0.1-0.3-1.8 0.4-0.9 0.1-0.8 0.5-0.5-0.3-0.8 0-0.5 2.2-0.6 0.6 0.1-0.1 0.7 0.9 0 0.3-0.8 0.5 0.4 0.3-0.7 0.8-0.1 0.4-1-0.1-0.5 0.6-0.2 0.3-0.4-0.5-0.5 0.6-0.7 0.4-1.4-0.6-0.3 1.3-0.7 0.2-0.4 1.9 0.1 0.2-0.3 0.9-0.3 0.5 0.8-0.5 0.3-0.2 0.7 0.8 0.4 0.3-0.6 0.6-0.3 0.8 0.9 0 0.6 0.7 0-0.3-0.7 1-0.9 1.4 0.4 0.8 0.9 0.9 0.6 0.2 0.6 1.3 0.3 0.3-0.2 1.9 0.5 0.2 1.1-0.3 0.6-0.8 0.3 0.2 0.7 0.9 0 0-0.5 1.3-0.1 0.8 1.4 0.7 0.1 2 1.3 3.1-0.2 0-1.6 0.5 0.1 0.7-0.3 0-2.2 0.7 1 0.3 0.8 1-0.6-0.2-1.1 0.4-0.8 0.7-0.5 0.3-1.4 0.3-0.2-0.2-0.9 0.5-0.7 0-0.6 0.7-1.4 0.7-0.2-0.9-1.9 0-0.3 0.7-0.7 0.4-0.5 1.4 0.4 0.3-1.8 1.3 0.4 1.3-0.3 0.8-0.7 1 0.2 1.7 0 0 1.7 1.1-1.7 1.1 0.2 1.2-0.5 0.7 0.7 1.8 0.7 0.5 0.8 0.5 0.1 0.7-0.4 0.5 0 1.2 0.5 0.6-0.2 0.2-0.8-0.2-0.6 0.8-1.2 0.7-0.3 0.4-1.3 1.5-0.1 0.1 0.6 0.9 0.2 1.7-0.4-0.1-1.3 0.5 0.2 0.3-0.7 0.5-0.3 1.2 0 0.1-0.8 0.8-0.3-0.3-0.5-0.9 0.7-0.1-0.9 0.4-1 0.1-0.8-0.6 0.1-1-0.6 1.4-0.7 1.3-0.1 1.5 0.4 1.3 0.1 0.2 1.1 0.8 1.1 0.7 0 0.5-0.7 0.7 0.3 0.4-0.5 1.2-0.3 0.5 0.9-0.4 0.7 0.8 0.5 0.2 0.7 0.5-0.4 0.6 0 0.4 0.7 1.3-1.2-1-0.5-1.1-0.8 0.9-0.5 0.2-0.8 0.9 0.7 0.7-0.8 1.7 0.1 1.8-1.1 0.8-0.1 0.9-1.3-0.6-0.4-0.1-0.7 1.1-0.5-0.1-1.1 1.2-0.3 0.3-1 1.1 0.1 0-0.5-0.6-0.1-1-0.9 0.6-0.2 0.3 0.3 1 0.1 0.8-0.6 0.2 0.4 0.1-0.1 0.3 0.2 0.3 0.5 0.1 0.2 0.7 0.1 0.5 0.2 0 0.1 0.4 0.3 0.2 0.2 0.2 0 0.2 0 1 0.1 0.8-0.2 1 0.6 0.5 0.6 0.3 1.2 0.3 0.2-0.1 0.7 1.4 0.6-0.1-2z",
        32: "M822.1 502.6l0 1.6 0.9 0.9-0.1 0.7 0.6 1.1-0.3 1-1.7 4.2 2.8-0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.1 0 0.2 0.1 0.1 0.3 0.3 0.2 0.1 0.5 0.8-0.1 0.2 0.1 0.4 0 0.4 0.1 0.5 0.1 0.3-0.2 0-0.1 0.1 0 0.2 0 0.4 0.1 0.4-0.1 0.1 0.1 0.2 0 0.2-0.1 0.9-0.4 0.4 0.2 0.3-0.1 0.2-0.1 0.1 0 0.5 0.1 0.2-0.1 0.1 0.2 0.4-0.1-0.1-0.1 0.1 0.4 1-0.3 0.6-0.2 0.2 0 0.3 0 0.1 0 0.9 0.3 0.3 0.3 0.2 0 0.6-0.2 0-0.1 0.5-0.1 0.1 0 0.2-0.1 0.1 0 0.1 0.1 0 0.1 0.3-0.1 0.1 0 0.1-0.4 0-0.2-0.1-0.2-0.1-0.1 0-0.2 0.1-0.4 0.9 0.1 0.3 0.1 0.2 0.1 0.2 0.1 0.3-0.2 0.1-0.4-0.1-0.2 0.4 0.1 1.6 0 0.9 0.1 0.4-0.7 0.2-0.3 0.5 0.2 0.7-0.6 1.2-0.5-0.2 0.1-1.2-1.2-0.9 0-0.8-1.1 0.3-1.5 2.1-0.5 0-0.1 0.9-0.6 0.3-1.2-0.6-0.3 0.1-0.8-1.1-0.7-1.6-0.7 0.1-0.2 1.1-0.5 0.6 0.5 2.4 0 0.8 0.3 0.7 0 0.9-0.1 1.4 0.5 0.8-1.2 1.3 0 0.8-1.3-0.1-1.1 1-0.7 0.4-0.2 0.9-1.2 1.5-0.7 1.1-0.6 1.7 0.2 0.8 0.5 0.5-0.1 0.5 0.4 0.7 0.5 2.1-0.1 0.3 0.8 1.5-0.4 0.6-1.6 0.4 0.3 1-0.5 0-0.5 0.8-1 0.7-1-0.2-0.4 0.5-1 0.1-0.8 0.7-0.3 0.6-0.7-0.2-1.4-0.7 0-0.5-0.6-0.4 0.3-1.3-0.6 0 0.1-1-0.8-1.6 0.1-0.6-0.7-1.1 0.2-1.3-0.5-0.6-1-1.5-0.1-0.5-1.2-0.1-0.9 1.3-0.3 1.6 0.1 1 0.7 1.7-0.1 0.5 0.5 1.3-0.7 0.3-0.8-0.5-0.9-1.4-0.5-1.8-0.3-0.3 0.1-2.1-0.2-1.4-0.7-1.4 0.5-0.4-0.2-0.5-0.6-0.2 0.4-1.3-0.6-0.4-0.3-0.8 0-0.9-0.8-1.4-0.2-1.5-0.9-0.4 0-0.5-0.8-0.4 0.2-0.8-0.4-0.1-0.1-1-0.9-0.7-0.2-1.3 0.5-1 1 0.2 0.1-1.2-0.3-0.4-1.4 0.1-0.1-1.2 0.5-1.1 1.4 0 0.4 0.5 0.3-1.1-0.1-0.9 0.3-0.7 0.6-1.1-0.6-1.5-0.2-0.7 0.6-0.3-0.2-0.6 1.1-0.1-0.4-0.8 0.6-1.2 0.6 0.3 0.2-1 1.9 0.5 0.6 0.3-0.2-1.1 0.6-0.8 0.2-0.9-0.7-1.1 0-1 1.2-0.1 1.8 0.5 0.9 0 0.2 0.3 0.8 0.1 0.9 0.4 1.7-0.1 0.5-0.6 0.8-0.3 0.3-0.5-0.2-0.9 0.3-1.1 0.5-0.7-0.4-1 0.7 0.2 0.5 1.5 0.9 0.7 1 0.4 0.8-0.1-0.7-3.9 2.5 1.4 0.9-0.4 0 0.9 1 0.8 0.3 1 0.3 0.4 0.7-0.2 0.1-1.1 1-3.6-0.7-2.5 1.2-0.8 0.5 0.3 0.1 0.6 0.7 0.4 0.1-0.6-0.6-1.6 0.7-0.4 0.3 0.4 2.2 0.2 0.8 0 0.8-0.3 0.6-1 0.1-0.5 1.1-0.3-0.5-1.1-0.1-0.7 0.2-1.2-0.2-0.5 0.6-0.3 1.2 1 0.8 0.1z",
        33: "M396.3 334.9l0.4-0.1 0.6 0.6 0.1 0.3 0.4 0 0.1 0.2 0 0.2-0.3 0.2-0.2 0.4 0.2 0.3 0 0.2-0.1 0.4-0.1 0.2-0.2-0.2-0.2 0.6 0.7 0 0.1-0.2 0.2-0.1 0.1 0 0-0.3 0.3-1 1.1 0.3 0.7 0.3 0 0.3-0.8 0.1-0.2-0.1 0 0.7 0.7 0.3 0.4 0 0.5-0.2 0.2 0.1-0.4 0.5 0.1 0.2 0.3 0.3 0.4 0.4 0.2 0.4 0.2 0.8 1 0.6 1.2 0 0.9-0.8 0.9-1.8-0.5-0.6 1.1-1.4 0.5 0.2 0.1 0.2 1.5-0.1 1.8 1.8 1.6 1 1.1-0.1 0.5 0.6-0.3 0.5 0.8 0.8 0.5-0.1 0.8 0.5 0.3 1.3 1.2 0.8 0.4 0.6 1.4-0.4 0.8 0.2 0.8 0.6 0.4 1.1 1.2 0.9 0.5-0.3-0.6-3.5 1.2-1 1 0.1 0.7 0.4-0.3 0.7 0.9 0.3 0.2 0.5 1.3 0.2 0.6-0.3 0.4 0.9-0.1 0.6 0.4 0.7 0.9 0.7 0.8-0.2 1 0.3 0.1 0.6 0.7 0.3-0.2 0.5 1 0.3 1.4 1 0.7-0.5 1.1 0.4-0.2 0.5 0.1 0.8 1.3 0.4 1.2 0.8 0.7-0.8 0.5 0.7 0.7 0.4 0.4 0.6 1.2 1 4.4 1 0.8 1.4 0 1.3 1.6 2.1 1.4 1.5-0.1 2.5 0.5-0.3 1.3-0.1 0.1-1.3 1.3 0.1 1.2 0.5 0.1 0.8 1.2 0.9-0.2 1.3 2.3 1.3 3.3 2.2 2 0.3 3.5 3.2 1 0.2 1.4 1.1 0.9 0.6 0.9-0.2-0.1-0.6 1.5-2.1 0.8 0 2.7 0.2 0.7 1.1 1.1 1.2 1-0.1 1.9 0.9 0.8 0.9 0.7 0.4 1.7 1.4 2.2 1.2 1.2 1.5 1.6 0.9 0.8 0.1 1.5-0.5 0.9 0.2 2.1-0.8 0.5 0.1 1.6-0.5 1.4 0 0.4 1.1-0.1 1 0.8 0.8-0.2 0.9 0.8 1.1-0.6 1.6 0.4 1-0.5 0.7 2.3 0.3 1.1-0.2 1.2 0.1 2-0.1 0.9 1.3 2.7 0.7 4.5-0.3 0.8 0.1 0.7 1.1 2.1 1.6-0.2 0.7 1 1.2 1.3 0.1 0.7-0.3 1.2-1.4-0.1-0.5 0.7-0.6-0.8-1.4 0.7-0.6-0.5-0.9 7.7 0.4 7.4 3.8 0.9 0.8-0.3 0.6-0.7 0.3 0.9 0.6 1.1-0.6 0.7-0.1 0.5 0.5-0.2 0.9-0.7 0.6 0.2 1 0.2 0.1 1.3 0.4 0.5 0.4 0.1 0.3 0.4 0.6 0.3 0.9 0 0.1-0.6 0.5-0.6 0.9 0.1 0.4-0.1 0.2-0.3 0.2 0 0.7 0 0.5 0.2 0.1 1.1-0.2 0.9-0.5 0.3 0.2 0.2 0.3-0.1 0.3-0.9 0.6 1.1 0.9 0.4 0 0 1 0.3 0.6 0.2 0.5-0.4 0.2 0.2 0.2-0.1 0.5 0.2 0.2-0.3 0.2-0.1 0.3-0.1 0-0.2 0.2 0.1 0.1 0.6 0.4 0.1 0.6-0.2 0.2 0.1 0.2 0.1 0.1 0 0.1 0.3 0.3 0.6 0.5 0.4-0.2 0.2 0.2 0.2-0.4 1.1 0.1 0.3 0.1 0 0.4-0.3 0.7 0.7 0.6 0.6 0.2 0.2-0.5 0-0.2 1.2-0.7 0.4 0 0.5 0.2 0.3 0.2 0.2 0.8-0.3 0.7 0.2 0 0.1 0.5-0.1 0.6-0.3 0.6-0.5 0.7 0.6 1 0.4-0.1 0.4-0.3 0.4-0.3 0.7-0.1 0.3 0.6 0.4 0.8 0.2 1.1 0.4 0.2 0.5 0 0.5 0.1 1.3 0.3 0 1.1 0.4 0.6-3.1 0.5-0.9-0.1-0.9 0.7-2.4-1-1.2 0-0.5-0.5-1.6 0-0.8-0.1 0.1 1.1-1.2 1.9-0.1 0.7-1.6 0.7-0.9-0.3-0.3 0.8-1.2-0.5-0.9 0.3 0.1 0.4-0.1 2.2 1.5 0.4 1.2 0.1 0.3-0.4 0.9 0.2 0 0.4 0.7 0.9 0.6 0.2 0.2 0.4 1.9 0.2 1.9 0.5-0.2 1.3 0.5 0.8-0.3 0.5-0.1 1.2-0.4 0.5-1.5-0.1-0.1 0.8-0.6 0.1-0.7 0.5-1.3-0.2-1.1 1.6 0 0.4 0.9 0.6-0.4 0.7 0.9 0.5 0.2 1.2 1.4 0.1 0.9 0.8 0.7 1.1 1 0.8 0.2 1 0.7 0.4 0.3-0.4 1.3 0.6 1.8 1.4 0.7 0 1.3-0.5 1.2 0.8 0.8 0.3 0.7 1.5 1.9 0.1 0.7 0.6 0.8-0.2-0.1 1.7 0.7-0.3 1.4 0.8 1.1 1.1-0.7 1.2 0.9 0.7-0.5 0.4-0.5-0.3-1.4 0.1 0.1 1.3-0.2 0.7-0.7-0.4-0.6 0.6-0.9-0.5-0.8 0.2-0.6-1.1-0.8 0.1 0 0.7-0.8-0.2-0.2-1.1-1.4-0.6-1 0.3-0.2 2.4-1 0.4-2.5-0.1-0.6-0.3-0.2-1.2-0.9-0.6-0.6-0.2-1.4 0.1-0.9 0.4-0.4 0.6 0.3 1.7-0.1 0.5-2.1 0.9-2.4 1.8-0.8 0.2-0.9 1.4-0.7 0.2-0.1 0.6-0.7 1.1-0.6 0.4 0.2 1-1.2 0.2-0.2 0.9-0.5 0.4-1.2-0.2-1.3 0.3-0.8 1-1 0.2-1.3 1.3-0.3-0.1-1.3 0.5-0.9 0.2-1.3 1-0.9 0.2-0.7 1.1-0.6-0.3-1.2 0.4-0.7 1.6-0.9 0.4-0.4-0.1-0.2 1.5 0.3 0.4 0 1.5-0.4-0.1-0.6 2.4-0.2 0.4 0.1 0.8 0.8 0.2 0 1.8 0.5 0.3 0 1.6-0.2 0.4 0.5 1.5 0.8 1.1 0.2 0.8-0.3 1 0.8 0.4 0.8 0.7 0.6 0.9 1-0.2 0 1.2 0.3 0 0.8 1-0.5 0.4 0 0.6 0.6 0.4 0.6 1-0.6 0.5 0.3 0.6-0.3 1.4-0.8 0.2 0.2 0.6-2.5 0.5-1.1 0.5 0 0.8-0.4 0.9 0.6 0.7 0 0.9 1 0.3 0.5 1.2-0.3 0.9-1.1 0.4-0.9 0.9 0.7 0.8 0.2 1-0.9 1.3 0.1 1.1-0.7 1.7-0.3 1.1-0.9 1-1 0.9-0.6 1.1 0 0.9-2.1 1.2-0.1 1.1-0.8 1.5-1.5 0.4-0.6 0.8-1.4 0.4-0.8 0.1-0.9-0.3-1.8 0.2-1 0.2-0.5-0.1-0.5-0.6-1.5-0.7-0.6-0.6-0.5-0.8-1-0.6-0.4 0-0.3-0.5 0.1-0.9-1.9-0.4-0.2-0.7 0.5-0.5 0-1.1-1-0.3-0.6 0-0.2-0.6-1.3-1-0.2-0.4 0.4-0.9 0.6 0.6 1.1 0.2 0.1-0.7 0.5-0.4-0.4-2.1 0.8-0.5 0-1.2 0.5-0.9-0.1-1 0.1-1.1-0.1-0.9-1.4 0.1-0.4-0.6 0.2-1.1 0.4-0.4-0.1-1.9 0.5-0.9-0.7-0.5 0-1.6 1 0.6 1.9-0.5-0.2-1.7-0.9 0.1-0.1-1.7-1.3-0.2-0.9 0.2-0.4-0.3 0.2-1-1.1-0.9-0.9 0.5-1.7 0.5-0.5 0.4-1.5 0.4-0.4-1-1.1 0.1-0.3-0.3-1 0.2 0-0.4-0.5-0.6-0.4 0-0.7 0.8 0.4 1-0.3 0.8 0.2 1.5-1.7-0.2-0.5-0.6-0.5-0.2-0.7 0.4-0.4-0.6-0.2-1.4-0.8-0.6-1.4 0.3 0-0.6 0.5-0.5-0.1-1.9-0.4-0.4-1.1 0 0.4-1.3-1.2-0.1-0.4 0.3-1-0.4-0.7 0.4-0.4-0.6-0.6-0.5-0.6 0-2-1.1-1.4 0.4-0.1 0.4-1.2-1.1 0.1-0.5-0.9-0.4-0.1-0.8 0.4-0.6-0.3-0.8 0-1.5-1-0.8-0.9-0.1-0.6-0.5-1.3 0.3-2.6-1.6-0.3 0.6-0.8-0.2-0.2-0.8-1-0.4-0.9 0.7-0.9-0.8 1.2-1-0.5-0.7-0.8 0 0-0.5 0.9-0.7-0.5-0.4-0.8-0.1 0.2-0.6-0.7-0.5-1.1 0.4-0.7-0.1-0.1 0.6 0.6 0.2-0.3 0.6-0.9 0.1-0.5 0.4 0 0.7 0.5 0.4 0.1 1-0.4 0.3-1.6-0.8 0-0.7-0.3-0.7-1.3 0.3-0.8-0.7-0.6-0.9-0.7-0.2-2.1 0.3 0.3 0.4-0.6 0.5 0 0.9-0.4 0.4 0.4 0.7 0.1 0.7-0.5 1.1-0.9 1.3-0.6 0.4 0.3 0.7-0.4 0.2 0.2 1.2-1.5-0.7-0.2 1-0.5 0.6-0.5 0.8-1.3-1.1-0.4-1.1-1.7-0.1-0.9 0.6-1.6 0-0.6-1.2-1.3 0.6-0.3 0.3-1.1 0.4-1.2 0-0.7-0.3-0.1-1.1 0.7 0 1.1-1.1-0.8-1 0.4-0.8 1.1-0.8-0.3-0.6 0.3-0.5-0.2-0.8 0.7-0.7 0.6-0.9-1.2-0.9-1.1-0.1 0.2 0.9-0.4 1-0.4 0.4-0.7-0.6-0.6 0.4-1-0.2-1.2 0.5 0.1 0.9 0.9 0.2 1 0.5 0 0.9-1.4 0-0.2-0.4-1.9 0.7 0.2-1.1-0.9 0.2-0.4-0.6-1.1-0.2 0.5-0.9-1-1.2-0.2 1.7 0.6 1.3-0.9-0.5-1.2 0.8-0.9-0.6-0.3-0.7-0.7 0.4 0.5 1.1-1.1 0.6-0.4-0.9-0.6-0.5-0.6 0.4-1 0-0.5 0.6-0.4 1.2-1.4 0.8-0.5 0-0.8-0.7-0.8-0.3 0.5-1.3 0.8-0.4 0.6-1.2 0.9-0.9 0-0.4 1.3-0.8 1-0.1 0.3-0.3-0.8-1.8-0.1-0.8-0.7 0.2-0.7-0.5-0.5-1.1-1-0.1-0.3-0.6 0.2-0.5 0.1-0.9-0.3-0.9 0.3-0.5-0.1-0.8-1.2-1.2-0.6-0.2-0.4 0.9-0.5-0.2-0.6 0.3-0.8-0.1-0.1 0.8-0.9 0.3 0 0.4-0.8 0.4-0.3 0.6-1.5-0.6-0.5 0.5-1.7 0-0.3 0.7 0.1 0.8-0.7 0.5 0.1 0.7-1.6 0.2-1 0.6-0.9 0.1-0.7-0.2-1 0.6 0.6 0.7-0.3 0.6 0.3 1 0 0.7-0.7 1.5 0.5 0.7-1 0-2-1-1-0.7-1.1 0.4-1-0.1-0.4 0.3-1.1-0.2-0.5-0.4-0.7-0.1-0.8-0.5-0.2-0.6-0.6 0.2-0.8 1.2-0.5 0.5 0.1 0.9-0.5 0.1-0.4 0.6-1-0.5 0.3-1.3-1.1 0.9-0.1-0.7-0.5-0.3-0.4 0.7-0.6-0.2-0.3-1.1 0.1-0.8 0.7-0.7 0.2-0.7 0.7 0.2 0.4-0.7-0.3-0.8 0.6-0.5-1.7-0.3 0-0.6-1-0.5-0.2 0.9-0.5 0.1-0.1-0.9-0.5-1 0.4-0.6-1.8-0.3-1.1 1.1-0.2 1.2 0.5 0.5 0.6-0.6 0.9 0.8 0.9-0.5 0 1.6-1 0.4-0.6-0.7-0.5 1.1 0.2 0.8 0.6 0.5 0.4 0.9-0.4 0.8-0.7-0.1-0.2 0.5-0.7-0.4 0.2-0.4-0.4-0.8-0.8 0.2 0.4 0.5 0 1-1.4-0.4-0.4-0.9-0.6 0.2 0.4 1.1-1.6 0.2-0.3-0.6-0.5-0.6 0.3-0.7-0.9-0.5-0.2-0.6-0.7 0.7-0.2 0.8-0.7 0.6-0.6-0.3 0.5-1.1-0.4-0.5 1.1-1.5-1-0.3-0.4-0.5-0.1-1-0.9 0-0.5 1.2 0.8 0.4 0.2 0.6-0.6 0.6-0.5-0.6-0.5-0.2-1 0.4-0.8 1.1-0.8 0.7-0.4-1 0.5-1-0.5-0.6 0.2-0.7 0.8 0 0.5-0.9 1 0.4 0.2-0.6 0.9-0.5-0.6-0.7 0.1-1.4-0.9 0.6-1.5-0.6-1 1.2 0.5 0.9-0.3 0.3-0.6 1.9-0.4 0-1-1.4 0.3-0.9-0.7 0.1 0-0.9 0.7 0.2 0.7-0.8 0.1-0.8 1.3-1.3 0.9-0.1 0.5-0.4 0.9-0.1-0.4 1-1.2-0.1 0.1 0.5 1.4 0.5 0.3-0.6 0.9-0.1-0.2-0.9 0.1-0.9-0.4-0.7-0.6-0.1-0.4 0.5-0.9-0.7 0.9-0.9 0.2-0.9-0.7-0.9 0.9-0.5 0-0.8-0.6-0.3-1.3-0.1-0.6 0.7 0.2 0.7-1.4 0.3-0.2 0.5 0.6 0.5 0.4 0.9-0.1 0.6-2.2-1.2-1.1 0.3-1.1-0.6 0 1 0.8 0.6 0.6 0.7 0.8-0.5 0.2 0.6-1.7 0.4 0.4 0.5 0.2 1.7-1 0.3-1-0.3 0.2-0.7-1.8-0.4 0.4-0.6 1-0.9-0.3-0.7-1.1 0.1-0.9 0.4 0.1 0.9-1.1-0.3-0.8 1.5-0.1 0.9-0.7 0.2-0.9-0.7 0.1 1.3-0.2 1-0.7 0.1-0.6-0.7-0.7 0.7-1.3 0.2 0 0.6 0.8 0.4 1.2-0.8 0.6 0.4 0.5-0.2 0.5 0.6 0.6 0 0.5 0.5-0.2 1.1 0.3 1 0.8 1.7 0.1 2.2 0.8 0.3 0.7 1.1 0.1 1-0.2 0.4-0.2 1.5-0.2 0.9 0.9 0.6 0.5 1.6 1 0.3 2.3 1.2 0.6 1.8-0.6 0.7 0 1.1 0.3 2.4-0.5 1-0.6 0.6 0.3 0.9 0.1 1.3 0.9 0.3 0.8-0.5 1-0.1 0.5-0.7 0.6-0.5 0.6 0.1 0.4 1 0.4 0.3 0.3 0.9 1.1 1-0.2 0.4 0.2 1.3 0.7 0.4-0.8 0.5-0.6 0-0.4-0.6-0.4 0.5 0.4 0.9 0.6 0.1 0.5 0.7 1.3-0.2 0.2 0.7-0.3 0.4-0.4 1.7 0 0.6-1.2 1.4-0.9 0.7 0.1 1-1.1 0.7 0.1 1-0.8 0.6-0.6-0.1-0.4 0.5-0.6-0.2-0.2 0.9-0.7-0.1-0.3-1-0.7-1.3-0.3 0.3-0.7-0.5-0.2 0.5-0.7 0.2-1-0.4-0.5-1.1-1.3-0.8 0.2-0.5-0.6-0.3-0.9-1.5-0.9-0.1-0.9-0.6-0.4-0.6-0.5-0.1-0.8 1-0.3 1.1-0.9 0.5-0.2 1-0.8 0.4-0.2 0.4-0.7 0.1-0.8-0.8-0.7-0.5-0.5-1.1 1.2-1.5-0.9-1-0.6-0.2-1.8-1.4-0.2-0.5 0.1-0.8-0.8-0.3 0-0.8-0.7-0.4 0.2-0.7 1-0.4 0.5-2.4-0.4-1.3 0.4-0.7-0.6-1.4-0.8-1.1-0.3-0.9 0.2-0.7-0.5-1.3-0.8-1.2-0.7-0.2-0.1-0.8 0.2-0.6 1-0.4 0.5-0.7 1.5-1 0.2-0.4 0.9-0.6 0.6-0.8 0.7-0.4 0.4-1-0.3-0.7-0.2-1.4 0.3-0.4 1.2-0.4 0.7-0.9 1.2 0.1 0-0.8 0.6-0.4 0.1-0.6-0.9 0-0.5-0.6-0.6-0.2 0.3-1-0.7-0.2-0.6-0.9 0.2-0.6-0.6-0.6 0-0.6-1.3-0.5 0.8-1-0.2-0.7-1-0.4 1.3-1.4 0.1-1 0.4-0.9 0.5 0.3 0.8-0.3 0.3-0.7 0.9-0.3-0.4-1.1 0-0.9 0.6-1.1 0.8 0.4 1.1-1.1 1.5 0.3 0.7 0.3 1.2 0 0.8-0.9 0.5 0.6 1 0.3 0.9-1.1 1.2-0.5 0.7 0.1 2.2-0.5 0.3-0.3 0.2-0.8 0-1.1-0.7-1.3-1-0.4-0.5-0.7 0-0.4 1-0.5 0.8-1.4 0.7 0-0.1-1.2 0.8 0.4 0.1 0.6 0.7 0.1 0.1-1.2-0.8-0.4 0.5-1 0.9-0.2 0.1-0.9-0.3-0.6 0.6-0.4 0.7-0.9 0.9-1.6 0.3-1.3-0.2-0.4 1.3-1.4 0.7-0.3-1.1-1-0.2-0.7-0.7-0.4 0.5-0.7 1.4 0 0.1-0.7-1-0.7 1-0.2 0.5-0.6 0-0.7 0.8 0.1 0.7-0.7-0.5-0.3 0.3-1.1 0.7-0.1 0.7-1.1 1 0-0.3-1.5-1.4-0.3 0.4-0.6-0.3-1 1.3-0.5 0.3-1-1.2-0.5-0.8 0.4-0.7-0.6 0.5-0.9 0-0.7-1.1-0.8 0.1-0.4-1.2-0.6 0-0.9-0.5-0.7 0.8-0.7-0.1-0.6-0.6-0.8 0.5-1-0.6-0.4-1.2 0.8-0.4-0.3 0.4-1-1.5-0.6-1.3 0.3-0.9-0.8-1-1.5-1.7 0-0.7-1-0.7 0.4-0.1-0.7-1.3 0.3-0.7 0.9-1.3-0.3-0.6 0.8-1.3-0.1-1.7-1-1.9-0.4-0.5-0.3-0.6-1.1-1.4 0.1-0.8-1.6-0.7-0.1-2 0.3-0.5 0.6-0.1 0.9-0.3 0.2-1.2-0.6-0.4 0-0.2-1.6 0.8-0.2 0.7-0.7 0.4-1.2-0.9 0-1.5-0.5-1.7-0.4-0.9 0.1 0 1-0.4 0.7-0.5 0.3-0.9-0.5-0.6 0 0 1.2-0.3 0.3-0.7-1.3-0.8-0.1-0.5 0.6-0.4-0.6-0.8 0.5-0.4-0.5-0.7-0.1-0.6 1-0.7-0.6-2.2-0.9-0.6 0.2-0.8-0.6-0.6 0.4-0.8 0.2-0.5 0.7 0.2 0.9-1.5 0.3-0.5 0.6-1.1 0.4-0.5 0.5-1.3 0.1-0.2 0.3-1.5 0-0.3-0.8-0.5-0.1-0.6 2.3 0.4 0.8-0.4 0.5-1.1 0.2 0.5-0.8-0.4-0.5-0.8-0.2 0.4-1.2-0.8-0.9 0.2-1 1-0.3 0.1-0.5 1-0.6 3.3-1 2.1-1.4 1.7-0.5 0.8-0.4 0.7 0.1 0.3-1-0.3-0.8-0.5 0.3 0 1-0.6 0-1.1-1.8-0.5 1-2-0.3-1.3-0.7 0.2-1.2-0.7-0.1-0.6 0.6-0.3-0.8 0.9-1.1 1.8-0.5-0.2-0.4 0.5-0.6 0.3-0.8 0.5 0.2 0.8-0.2 0.7-1-1.1-0.5 0.1-0.9-0.7-1-0.6-0.3 0.1-0.6-0.6-0.5 0.7-0.5 0.1-1-0.8 0.1-0.6 0.4-1.1-0.6-1.5-1.5-1.1-0.1-1.2-0.6-0.5-1 0.4-1.4-1.2-0.8 0-0.8-0.6-0.6-1.2-0.2-0.3-0.6 0-1.2 0.6-0.9-0.8-0.1-0.5-0.6 1.1-1.6-0.3-2.1-1.1-0.2-0.2-0.6 0.5-0.3-0.3-0.8 0.1-1.2-1-0.7 1.3-0.9 0.9-1.1 1.1-0.2 1.4 0.2-0.4-0.9 0.7-0.5 0.7 0.6 0.9-0.6 0.2-0.7-0.2-0.8 1.7 0.1 0.6-0.7 0-0.6-0.9-0.3 0.9-0.8-0.8-0.7-0.2-0.4-1-1.1 0.2-0.4-0.5-1 0.1-0.7 0.9-0.7 0-1.6 1.1-0.3 0.2-0.8-0.5-0.6-0.2-0.9 0.7-0.4 0.1-0.5-0.9 0-1.6-0.6 0.2-0.5 0.7 0.1 0.1-1.1-1-1.3 1-0.6-0.3-0.9-0.6-0.5 0.2-0.8-1.3-0.7-0.4-0.9-0.9-0.1 0-0.5-0.8-0.2-0.5-0.9-0.8-0.4 0-0.3-0.2-0.3-0.6-0.7-0.4-0.3-0.3-1.1 0-0.2 0.6-0.6 0.6-0.2 0.3-0.7-0.9-0.9 0.2-1 0.4-0.8-0.2-0.8-0.2-0.2-0.7 0.2-0.1 0.1-0.3-0.4-0.5-0.7-0.1-0.1-0.4 0-0.1-0.5-0.2-0.2-0.6-0.5-0.3-0.3 0.1-0.3-0.3 0-0.2 0-0.4-0.3-0.1-0.3 0.7-0.4 0.1-0.9-0.4-1.1-0.4-0.1-0.2 0-0.2-0.9 1.2-0.4-0.7-0.8 0.3-0.6-0.5-0.4 0-0.6 0.8-1.8-0.8-0.6-1-1-0.2-1.2-1.1-0.9 0.5-1.3-0.4-0.7 0.5-1.1-0.5-1.8 0.6-0.4-0.5-1.4 0.8-1.7-0.2-1.1-0.9-0.2-0.1-1.1 0.7-0.2-0.5-1.5 0.5-0.8-0.7-0.6 0.2-1.1-0.3-0.7-0.6-0.4-0.4-0.8 0.8-0.8-0.2-0.9-0.6-1 0.8-1.8 0.7-0.4-0.3-0.9 0.2-0.6 0.5-0.2 0-0.6-1-1.3 0.2-1 1.2-0.7 0.1-0.9 0.4-0.5 0-0.7 0.5-1.1-0.1-1.1 0.3-0.8 0.5-0.3 1.6-2.3 0.8-1.8-0.1-0.6 0.9-0.4 1.2-0.2 1.4-1.1 0.7-0.1 0.7-0.6-0.1-1.4 0.4-0.9 0.8 0 0.9-0.8 0.8-1.8 0.8-1 0.4-1.1 1.4-1-0.1-1 0.8-1.3-0.6-0.6-0.4-0.7 2.5-0.3 0.9 1 0.4 0 0.8 1.4 0.4 0.5 1.4 0.5 2.1 1.4 1.8 0.8 0.2-0.2 1.6 0.7 0.4 0.7-0.8 0.9-0.3 1.2-0.8 0.9-0.6 1.2-1.2 1.5-1.2-0.2-0.9 2.1 0.5 0.6-0.7 0.6-0.4 0.9 0 1.4-0.8 0.9 0.5 0.9-0.4 0.4-0.6 1.4 0.9 0.5 0.4 1.7 0.8 1-0.1 1.6 0.2 0.4-0.3 0.7 1.3 0.7-0.2 0.7 1 0.5 0.5-0.1 1.3-1.2 0.9 0.1 0.6-0.5 0.8-0.1 0.2 1.1 0.6 0.6 0.4 1.1 0 1.1-0.8 0.5-0.1 0.5 1.2 0.2-0.2 1.2 1.8 0.1 0.4-0.8 0-0.8 0.5-0.4 0.7 0.1 0.4-1 0.6-0.3 0.9-1 0.2-0.7 0.9-0.1 0.9-1.2 1-0.3 0.3 0.5 2.5-2.1 1-1.5 1.8 0.8 0.9 0.1 0.4 0.4 2.2 0.8 0.7 2 0.1 1.6 0.6 1 1.6 1.7 1.5 1.1 0.7 0.2 1.8 1.6 1.1 0 1.4 0.9 3.4 1 1.2 0.1-0.2 1.3-0.3 0.6-1 0.9-1.5 0.6-1 1.1-0.9-0.3-1.1 0.8 0.1 0.6 1 1.1 1.4 1.1 0.5 0.2 0.6-0.3 1.1 0.4 1.2 1.9 0.2 1.5 1.4 0.5 0.7-0.6 1.2 1.9 0.6 0-0.2-1.3 1.1-0.2 1 0.1 0.9 0.8 0.6-0.1 0.8 0.6 0.1 0.8-0.3 0.7 0.3 0.8 0.7 0.4-0.4 0.9 0.5 0.5 1.2-0.6 1.2 0.9 1.4 1.6 2.4 0.5 0.4-0.7 0.6 1.4 0.8 0.1-0.2 1.8 0.5 1.2 0.8-0.2 0.9 0.1 0.5-0.3 1.1 0.1 0.9-1 0.7 0.4-0.1 1.3 0.9-0.2 0.5-0.6 0.9-0.1 1.2 0.8 0.4 0 0.7-0.7 0.8-0.5 1.8-0.4z",
        34: "M406.9 337.2l-0.5-0.2-1.1 1.4 0.5 0.6-0.9 1.8-0.9 0.8-1.2 0-1-0.6-0.2-0.8-0.2-0.4-0.4-0.4-0.3-0.3-0.1-0.2 0.4-0.5-0.2-0.1-0.5 0.2-0.4 0-0.7-0.3 0-0.7 0.2 0.1 0.8-0.1 0-0.3-0.7-0.3-1.1-0.3-0.3 1 0 0.3-0.1 0-0.2 0.1-0.1 0.2-0.7 0 0.2-0.6 0.2 0.2 0.1-0.2 0.1-0.4 0-0.2-0.2-0.3 0.2-0.4 0.3-0.2 0-0.2-0.1-0.2-0.4 0-0.1-0.3-0.6-0.6-0.4 0.1-1.8 0.4-0.8 0.5-0.7 0.7-0.4 0-1.2-0.8-0.9 0.1-0.5 0.6-0.9 0.2 0.1-1.3-0.7-0.4-0.9 1-1.1-0.1-0.5 0.3-0.9-0.1-0.8 0.2-0.5-1.2 0.2-1.8-0.8-0.1-0.6-1.4-0.4 0.7-2.4-0.5-1.4-1.6-1.2-0.9-1.2 0.6-0.5-0.5 0.4-0.9-0.7-0.4-0.3-0.8 0.3-0.7-0.1-0.8-0.8-0.6-0.6 0.1-0.9-0.8-1-0.1-1.1 0.2 0.2 1.3-0.6 0-1.2-1.9-0.7 0.6-1.4-0.5-0.2-1.5-1.2-1.9-1.1-0.4-0.6 0.3-0.5-0.2-1.4-1.1-1-1.1-0.1-0.6 1.1-0.8 0.9 0.3 1-1.1 1.5-0.6 1-0.9 0.3-0.6 0.2-1.3-1.2-0.1-3.4-1-1.4-0.9-1.1 0-1.8-1.6-0.7-0.2-1.5-1.1-1.6-1.7-0.6-1-0.1-1.6-0.7-2-2.2-0.8-0.4-0.4-0.9-0.1-1.8-0.8-1 1.5-2.5 2.1-0.3-0.5-1 0.3-0.9 1.2-0.9 0.1-0.2 0.7-0.9 1-0.6 0.3-0.4 1-0.7-0.1-0.5 0.4 0 0.8-0.4 0.8-1.8-0.1 0.2-1.2-1.2-0.2 0.1-0.5 0.8-0.5 0-1.1-0.4-1.1-0.6-0.6-0.2-1.1-0.8 0.1-0.6 0.5-0.9-0.1-1.3 1.2-0.5 0.1-1-0.5 0.2-0.7-1.3-0.7 0.3-0.7-0.2-0.4 0.1-1.6-0.8-1-0.4-1.7-0.9-0.5 0.6-1.4 0.4-0.4-0.5-0.9 0.8-0.9 0-1.4 0.4-0.9 0.7-0.6-0.5-0.6 0.9-2.1 1.2 0.2 1.2-1.5 0.6-1.2 0.8-0.9 0.3-1.2 0.8-0.9-0.4-0.7-1.6-0.7-0.2 0.2-1.8-0.8-2.1-1.4-1.4-0.5-0.4-0.5-0.8-1.4-0.4 0-0.9-1-2.5 0.3 0-0.5 1.4-0.8 0.9 0 0.3-0.6 0.8 0.1 1.7-1.1 0.3 0 1.6-1.1 1.1-0.3 0.4-1-0.2-0.9-0.9 0.1-0.9-0.5-0.7-1.5 0.8 0.1 0-0.6 0.6-0.8-0.3-1-1.1-0.8 0.3-1-1.2-1.4-0.4 0-0.2-0.9 0.5-0.4 0.5-1.2 0.9-1.1-0.4-0.6 0.4-1.2 0.7 0.7 0.6-0.3 0.1-1 0.5-0.6-0.2-0.5-1.7 0.1-0.4-1.1 0.1-0.5 0.6-0.6 1.5 0.3 0.4-0.9 0.5-0.5-0.6-1.9 0.6-0.9 0.7-0.2 0.3-1.2 0.9-0.6 0-0.5 0.8-0.8 0.4 0.1 1.4-0.9 0.5 0.5 0.8-0.1 0.5 0.4 0.7-1.1 0.9-0.3 1.3 0 0.9-0.8 0.5-0.1 0.5-0.6 0.8 0 0.4 0.3 0.8-0.6 0.9 0.1 1.2-1.4 0.8 0.2 0.2-0.9 0.6 0.1 1.4-0.2 0.4 0.1 0.8 1 0.9 0.1 0.9 0.7 0.8 0.9 0.1 0.7 2.3-0.1 1-1.1 1.1-0.1 1.2 0.6 0.5 0.9 0.9-0.2 0.7 0.3 1.8 0.1 1.6-0.5 0.2 1.1 0.6 1.2 1.5 1.4 0.6 0.4 0.8-0.5 1.3 0.4 0.8-0.4 1.1-0.1-0.7-1.1-0.2-1.5-0.9-0.4-0.3-1.2-0.9-0.4-0.1-1 0.3-0.3 0.5-2.9 1.7-0.7 0.4-0.5 0.5-1.3 0.9-1.1 0.1-1.2 0.7-0.6 0.7 0.6 1.8 0.8 1.2 1.6 0.4 1 1.5 1.4 0 0.7 0.9 1-0.4 1.1 0 0.6 0.9 0.3 0.9 2-0.2 0.6 0.6 1.3 0.9 0.7 1.9 0.5 0.3 1.4 0.5 0.2 0.3 1.6 2.8-0.1 0.3 0.7 1.1 1.3-0.2 0.6 1.8 1.2 1.4-0.8 0.8-0.2 0.2-0.6 1.5 0.1 0.9-0.3 0.7-0.6 0.5 0.5 1.7 0.6 0.7-0.3 0.9 0.2 0.8 2.2 0.6 0.1 0.6 1.2 0.9 0 1.8 1 1.1 0.9 0.6 0 0.9 1 0.1 0.8 1 0.8 1.2-0.7 0.1-0.6 0.7 0 0.8 1 0.2 0.9 0.6 0.3 0.5-0.4 0.5 1-0.6 1.7-1.2 0.7-0.1 0.4 1 1-0.4 0.7 0.4 0.5 0 1.3 1 0.7 1.3-0.4 1 0.3 0.3 0.5 1.8 1.1 1.1-0.2 0.8 1.1 1.1 0.4 1 0.2 0.6 0.7 0.9 0.4 0.9-0.2 0.4-0.9 0.9 0.3 1.9 1.4 0.4 0 1.3 1.1 1.1 0.6 1 1.1 0.4 1.1 1.3 1.1 1.2 0.5 1.3 0.3 1.1 0.5 2.7 0.7 0.5 0.3 0.3 1-1-0.4-0.4 0.3-1.6 0.1-0.6 0.5-1.7 2.2 0.6 1.4-1.2 0.7 0 0.5-0.8 0.1-0.5 0.4-0.9 1.3-0.6 0.3-0.1 0.9-0.7 1.1-0.6-0.1-1.5 1.7-1 0.1-0.4-0.3-1.1 0.2-1 1.4-0.1 1.1-0.5 0.9-0.1 0.7-1.1 1.1-0.5 0.1-0.5 1.1-1-0.3-1.9 0.4-0.7 1.7-0.8 0.4 0.7 2.5 0.2 0.4 0.9 0.6 0.2 0.8-0.6 0.7 0.1 0.7-1 1.3-1 0.2-0.3 0.6 0.6 0.3-0.6 0.9-1.5 0.9-0.3 0.6 0.5 0.7-1.9 0.3-0.2 1.4 1.2 0.7-0.2 1.1 0.9 1.6 0.7 0.3 0 0.6-0.4 0.6-0.4 3.5-0.6-0.4-1.2 0.1 0.6 0.7 0 0.8 0.5 0.8-0.6 0.3-0.8 0.7-0.8-0.1-0.8-0.6-1.4 1.4-0.5 1.6-0.1 2.1-0.3 1-0.7 0.2-1.3 2.3 0.2 3.1 0.2 0.3z",
        35: "M694.6 610.4l1.1 0.6 0 1.5-0.8 0-0.9-0.5 0.2-1.2 0.4-0.4z m11.5-0.3l1.4 0.6 0.6 0.4 0.2 1-1.5 0.1-0.6-0.4-0.3-0.6 0.2-1.1z m-3.6-1.1l0.2 1 0.8 0.4-0.4 0.4-0.2 0.6-0.9-0.2-0.2-0.5 0.1-1.2 0.6-0.5z m-6.5-0.1l0.6 0.3 0.9 0.8 0.1 0.8-0.3 0.5-0.9 0.4-0.5-0.9-0.9-0.5 0.5-0.9 0.5-0.5z m8-0.5l0 1.2 0.9 1.1-0.4 0.4-1.3 0 0-0.4 0.3-0.2 0-0.2-0.2-0.1-0.5-0.2-0.3-0.9 0.2-0.4 1.3-0.3z m6.6 0.4l0.8-0.1 0.2 0.7-0.3 0.5-1-0.2-0.6-1.1 0.5-1 0.4 1.2z m-13.3-1.8l0.3 1.2 0.5 0.7-0.3 0.8-1.2-0.6 0-0.5 0.5-0.7 0.2-0.9z m0.5-0.1l0.5 0.5-0.6 0.9-0.3-1 0.4-0.4z m13.4-0.4l0.2 0.1 0.1 1.2-0.2 0.2 0 0.4 0.3 0.2 0.9-0.2 0.1 0.8 0.4 0.3-0.3 0.7-0.9 0.1-0.3-1.5-0.1-0.1-0.8 0-0.1-0.6-0.4-1.4 0.7 0.1 0.4-0.3z m-6-0.1l0 1.6-0.4 0.3-0.6-0.3-0.7 0-0.3-0.3-0.6-0.4 1 0 0.1-0.3 1.5-0.6z m-17 0.1l0.6 0 0.8 1-0.2 0.6 0.3 0.4-0.6 1.1-1 0.4-0.1-0.7 0.4-1.3-0.2-1.5z m4.9-0.2l0.6 1.3-0.7 2-1-1.1-0.1-1.4 0.6-0.6 0.6-0.2z m8.3-0.1l0.2 1 1.3 1.2-0.5 0.6-1.3-1.7 0.3-1.1z m-16.8-0.3l0.4 0.8-0.6 0.2 0 0.6 0.6 0.3 0.3 0 0.2 1.1-0.9 1.1-0.3-0.8-0.5-2.1 0.2-0.7 0.6-0.5z m29.2 0l0.4 1.2 0.7 0.8 0 1.1-0.8 0.6-0.7 0-0.8-0.8 0.1-1.7-0.3-0.7 0.6-0.5 0.8 0z m-2.8-0.2l0.5 0.2 0.9 0.8 0.2 0.5-0.2 0.9-0.4 0.3-0.6 0 0.2-0.7-0.2-1.2-0.4-0.8z m-14.8-0.3l0.9 0.1 0.5 0.8 0 0.4-0.7 0.3 0.1 1-0.9 0.9-0.5-0.6 0.1-0.8-0.4-1.2 0.9-0.9z m11.6-0.4l1 0.7 0.2 0.5 0.8 0.9-0.7 2.1-1.2-1.1-0.5-1.2 0-1 0.4-0.9z m-16.1 0.5l0.5 1.1-0.5 0.4-0.1 1.2 0.8 1.1-0.7 0.3-0.4 0.9-0.5-0.6 0-1.2-0.2-1.3 0.6-0.7 0.5-1.2z m-6.5-1.1l1.7 0.3-0.4 0.8 0.4 0.2 1.4 2-0.7 1.3-0.1 1.5 0.6 0.6-0.5 0.6-0.8 0.2-0.7-0.2-0.3-0.4 0.2-0.6-1-1.1 0.6-0.5 0-1.3-0.3-0.2-0.6 0-0.3-0.3 0.1-0.3 0.7-0.4-0.4-0.6 0.1-1.2 0.3-0.4z m24.1 0l0.7 0.2 0.6 0.3 0.1 0.4 0.3 0.1-0.2 0.6 0 0.7-0.7-0.1-1-0.7 0.3-0.5-0.1-1z m-19.2-0.1l-0.2 0.7 0 0.4 0.2 0.5 1.1 0.3-0.4 0.5-1 0.5-0.7-0.9 0.4-0.6-0.2-1 0.3-0.4 0.5 0z m21.8 0l0.7 0.3 1.1 1-1.2 0.5-0.2-0.7-0.5-0.5 0.1-0.6z m-5.9 0l1 0.1-0.7 1.7 0 1 0.7 1.7-0.7 0.8-0.9-0.3-0.2-0.4 0.5-1.1-0.1-1.2-0.6-0.5-0.6 0.2-0.1-0.8 0.3-0.6 0.8-0.1 0.6-0.5z m-15.2 0l-0.2 1-0.7 0.1 0-0.4 0.4-0.6 0.5-0.1z m6.7-0.5l0 0.6 0.2 0.4 0.9 0.4 0 0.5-0.8 0.3-0.4-0.3 0.2-0.6-0.6-1 0.5-0.3z m-9.6 2l-0.2 0.6-0.6-0.7 0.2-1 0.5-0.5 0.2 1.3-0.1 0.3z m23.8-2.3l0 1.3 0.5 0.6-0.3 0.7-0.3-0.3-0.6-0.2 0.4-0.4-0.2-0.3-0.5 0.3-0.1-0.3-0.2-0.2 0.2-0.7 0.3-0.1 0.5-0.5 0.3 0.1z m-13.3-0.1l0.5 0.6 0.2 1.2-0.3 0-1.2-0.6 0.1-0.8 0.1-0.2 0.6-0.2z m-5.1 0l0.5-0.1-0.2 2-0.5 1-0.4 0-0.3 0.2-0.3-1.3 0-0.9 0.8-1.2 0.4 0.3z m8.8-0.7l0.3 1 0.1 0.1 0.1 0 0.1 0.1 0.4 0.2 0.4 0.4-0.2 1 0.8 0.3-0.6 0.7 0.1 0.4-0.1 0.4-0.4 0-0.5-0.2 0 0.3 0.8 0.5-0.3 0.3-1.2-1.1-0.6-2 0.6-1.6 0.2-0.8z m-5.9-0.1l0.9 0.6-0.3 1.3 0.4 0.9-1.1-0.1-0.6 0.7-0.7-1.2 0-0.8 0.9-1.1 0.5-0.3z m-4.2 0l0.2 0.1 0 0.2 0.2 0.2 0.3-0.1-0.1 0.4-0.6 0.7 0 1.9-0.7-0.9 0-0.4-0.6-0.9 0.4-0.4 0.2-0.2 0.4-0.3 0.1-0.2 0.2-0.1z m19.7 0l0.6 0-0.2 1-0.7-0.2 0.3-0.8z m-8.5 0.6l-0.1 0.8-0.4-0.1 0-0.1-0.2 0 0-0.5 0-0.1 0.3-0.1 0.3-0.5 0.1 0.6z m2.7-0.3l-0.2 0.8 0.3 0.5-0.7 0.6-0.7 0.1-0.2-0.7 1.2-2 0.3 0.7z m-1.4 2.1l-0.4 0.6-0.7-0.1 0.3-0.9-0.5-0.4 0.5-0.6 0.7-1.5 0.3 0.6-0.3 1.3 0.1 1z m4.4-2.9l0.1 0.1 0.5 0 0.1 0.2-0.3 0.5 0 0.1-0.4 0.3 0.2 0.2-0.6 1.3-0.3-0.1 0.2-0.8-0.6-1 0-0.3 0.4-0.1 0.2-0.2 0.5-0.2z m-14.7-0.4l0.5 0.9-0.5 0.5-0.9-0.1-0.1-0.7 1-0.6z m15.6-0.4l0.1 0.3 0.3 0.5 0.7 0.1-0.2 0.7-0.5-0.2-0.5 0.7 0.3 0.9-1-0.4 0.2-0.4-0.2-0.2 0.3-0.3 0.2-0.5 0.2-0.1-0.1-0.2-0.3 0-0.1-0.5 0.3 0 0-0.3 0.3-0.1z m-12-0.1l0.8 0.7-0.3 0.6 0.2 0.6-0.9-0.2-0.3-0.5 0.2-0.8 0.3-0.4z m-8.9-0.4l0.7 0.2 0 1.3 0.3 0.9 0.7 0.3-0.1 0.7-0.7 0-0.5 0.3-0.1 0.3 0.2 1.1-0.5 0.4-0.8-0.3 0.1-0.4-0.2-1.1-0.8-1.2-0.6-0.1-0.1-0.5 0.2-0.2 1.4-0.6 0.3-0.5-0.1-0.4 0.1-0.1 0.5-0.1z m17.9-0.2l0 0.3 0.2 0.1 0.6 0.1-0.1 0.2 0.2 0.7-0.1 0.7 0.6 1-0.2 0.7 0.1 0.4 0.2 0.2 0.8 0.1-0.3 0.6-1.2-0.8-0.1-0.7-0.5-0.4-0.9-0.1 0.2-1.2 0-1.3 0.5-0.6z m-24.5-0.3l0.7 1.6 0.4 0.5-0.2 0.6 0.2 1.2 0 0.8-0.5 2 0 1.4-0.7 0.9-1.5 0-1.7-0.7-0.1-0.9 0.2-1.7 0.6-0.6 0.4-1.6 1.7-3.2 0.5-0.3z m22.3-0.2l0.1 0.2-0.2 0.2 0.1 0.2 0.3-0.3 0.1 0.2 0.9 0.1-0.3 1.4-0.9 0.5-0.3-0.5-0.6-0.2 0.3-1.3 0.3-0.3 0.2-0.2z m6.4-0.5l1.2 0.6 0.6 0.5-0.1 1.3-0.3 0.4-0.9 0.2-0.3 0.9-0.4 0.4-0.4-0.3-0.6 0 0.3-0.6 0.5 0 0.3-0.1 0.2-0.6-0.3-0.3-0.5 0-0.2-0.5 1-1-0.1-0.9z m-12.2-0.2l0.2 0.2 0 0.2 0.3 0.4-0.1 0.2 0.5 0 0.2 0.1-0.1 1.3-0.4 1.8-0.5-0.3-0.4-0.9 0.3-0.3-0.5-0.8-0.4-0.3 0.3-0.8 0.6-0.8z m6.7-0.1l0.8 0.5-0.3 0.8-0.8-0.1 0.3-1.2z m-8.7 0.1l0.5 0.5-0.5 2-0.6 0.1-0.5-0.8 0.4-0.8 0.3-0.4-0.1-0.8 0.5 0.2z m-3.9-0.2l0.4 0.4 0.8 0.3 0.3 1.3-1.3 1-0.4 0.7-0.3 0.1-0.1 0-0.1-0.4-0.1 0-0.2 0-0.5 0.5-0.4-1.3 0.3-1.5 0.6-0.5 0-0.6 0.6 0.1 0.4-0.1z m9.2-0.1l0.3 0.3 0.7 0.1 0.4 0.6 0.6 0.5-0.4 1.2 0.1 0.3 0.3 0-0.4 1.4-0.5-0.5 0.1-0.5-0.1-0.1-0.3 0.4-0.1 0.2-0.4 0.2-0.2-0.4-0.4-0.2-0.4-1.1 0.1-0.7 0.6-1.7z m-7.3-0.2l0.2 0.1-0.6 0.7-0.5-0.3 0.4-0.5 0.5 0z m4.7-0.4l0.9 0.3-0.5 1.2-0.4 0.3-0.4-0.4 0-0.3-0.2-0.3 0.6-0.8z m-17.3-0.1l0.3 0.4-0.5 0.6-0.4-0.6 0.6-0.4z m24 0.3l0.7 0.2 1-0.1 0.9-0.5 2 1.1-0.3 1.3-0.5 0.8-0.1 0-0.2-0.5 0 0.2-0.2 0.1 0 0.3-0.4 0.1-0.3 0.3-0.3 0.2-0.5 0.4-0.3-0.3 0-0.4-0.1-0.6 0-0.2-0.1-0.1-0.5 0-0.4-1.5-0.4-0.8z m-3.9-0.5l0.3 0.4 0.8-0.2 0.7 0 0.6 0.3 0.2-0.1 0.5 0.6-0.6 1-0.1 0.3-0.2 0.1 0.2-0.3 0-0.2-0.2 0-0.4 0.4-0.1-0.4-0.5 0-0.3-0.6-0.3-0.2-0.4 0-0.4-0.6 0.2-0.5z m0.8-1.8l0.1 0.8 1.7 1.2-0.4 0.2-0.9-0.4-1 0.2-0.3-0.6 0.1-1.4 0.7 0z m-3-1.5l0.5 0 1.5 0.7-0.8 1.2-0.1 0.5-0.4 0.5-0.7-0.5-0.9 0.1-0.1-0.6 0.2-1 0.8-0.9z m-17.7-0.2l-0.6 1.4-1 1.4-0.2 0.6-1.1 0.8-0.3-0.1 0.3-1.7 0.5-1.1 0.8-0.8 1.6-0.5z m23 0.2l1.2 0.1 0.6-0.2 0.3 0.4 0.8 0 0.3 1.6 0 1.4-0.3 0.3-1.4 0.1-1.1-0.7-1.7-0.2-0.8-0.5-0.1-0.9 0.4-0.5 0-0.7 0.5 0 0.9-0.5 0.4 0.3z m-1.7-1.1l0.4 0 0.1 1.1-0.6 0-0.3-1.1 0.4 0z m4.7 0.2l0 1-0.8 0.1-0.8-1 1.6-0.1z m3.9-0.2l0.8 0 1 1.4 0.3 1-0.5 1.9-1.1 0.3-1.1-0.9 0.7-0.9-1.5-0.7 0.1-0.6-0.3-0.2 0.6-1.3 0.5-0.3 0.5 0.3z m-7-0.4l0.7 0.4 0 0.9-0.6 0-0.3-0.3-0.3 0.1-0.5-0.2 0.4-0.7 0.6-0.2z m2-0.7l0 0.6 0.4 0.7-0.7 0-0.4 0.1-1-0.7 0.3-0.3 0.3-0.1 0.6-0.3 0.5 0z m1.2-0.1l-0.5 0.8-0.6-0.1-0.1-0.9 1.2 0.2z m-3.5-0.1l0.1 0.7-0.8 0.7-1.2-0.4 0.4-0.8 0.7-0.8 0.6-0.3 0.2 0.9z m0.5-1.4l1 0.2 0.1 0.6 0.6 0.8-0.5 0-0.5 0.3-0.3-0.6-0.8 0.1-0.2-1 0.6-0.4z m1.7-1.6l0.7 0.1 0.7 1.3 0.5 0.7-0.2 0.7-1.5 0.1-0.6-0.5-0.3-0.7 0.7-1.7z m2.8-0.8l1.2 1.5 0 1.1-0.5 1.3-0.4 0.3-0.7 0.1-0.5 0.6 0.1 1.1 0.2 1 0.5 0-0.4-1 0.2-1.3 0.6 0 0.7 0.8-0.4 0.8 0.3 0.5-0.1 0.6 0.7 0.6 0.1 1.1 0.9 0.7-0.2 0.7-0.8-0.1-1.6-0.9-0.5-0.4-0.6-1.9 0.1-0.6-0.5-2 0.2-0.5 0.8-0.8-0.1-0.5-0.6-0.8-0.4-1.4 0.7 0.4 1-1z m1.8-0.4l0.4 0.1 0 1.2 0.3 0.6 0.9 0.6-0.6 1.4 0.3 1.4-0.7 0.2-0.6-0.4-1.3 0 0.6-0.7 0.5-1.9-0.1-0.6-0.5-0.8-0.2-0.9 1-0.2z m-10.5-0.3l1.3 0.5 1.1 0.1 0.2 0.4 0.7 0.4-0.8 0.9-1.1 0.5-0.4 0.7-1.2 0.8 0 1.2 1.4 0.7 0.4 0.7-0.7 0.5-0.6 0-1.3-0.6-0.1-1.1-0.3-1-0.6-1 0.6-2.1 0.9-0.7 0.5-0.9z m5.2 0.7l0.2-0.2 0-0.3 0.2-0.1 0.2 0.3 0.2 0.9-0.6 0-0.1 1.1-1.7 0.6-0.1 0.4-0.8 0.3-0.1 0.6-0.7 0.4-0.4 0.9-1.1-0.3-0.1-0.5 1.1-1 0.5-1.1 0.7-0.3 1.2-1.3 0.9 0.5 0.5-0.9z m2.9-1.3l0.8 0.1 0.2 1-0.5 0-0.5 0.6-0.7-0.6 0.2-0.4 0.1-0.9 0.4 0.2z m-4-2.2l0.4 0.7 0 0.9-0.8 0.4 0.1 0.8 0.7 0.4-0.4 0.6-0.9 0.1-0.7-0.6-0.7-0.2 0.2-1.1 0.7-0.8 0.4-0.2 0.2-0.1 0.1-0.1 0.1-0.5 0.6-0.3z m1.2-2.9l0.7 0.1 0.8 0.6 0.6 1.2 0.9 0.5-0.2 1.2 0.7 0.8 0.1 0.6-1-0.1-0.2-0.1-0.1 0.3-0.5 1.7-0.6 0.4-0.4-0.2-0.2-0.9-0.2-0.3-0.2-0.1-0.2 0.2-0.4-0.2-1 0-0.1-0.5 0.7-0.7 0.1-0.9-0.8-1.2 0.2-0.6-0.1-0.7 0.4-1 0.4 0 0.6-0.1z m4.6-0.8l0.2 0.7-0.2 1.4 0.6 0.1 0.7 0.9-0.7 0.1-0.2 0.5 1.3 1.1 0.2 1.2 0.9 0.7 0.1 0.5-0.3 0.8 0.5 0.8-0.4 0.6-0.4-0.7-0.9-0.6 0.1-0.9-0.3-0.7-1.1 0.1-0.6-0.4-0.3-1-0.4-0.5 0.2-0.7-0.1-0.8 0.1-2.4 0.3-0.2 0.2-0.8 0.5 0.2z m-4.2-0.6l0.8 1 0.5 0.3-0.2 0.7-1.1-0.9 0-1.1z m-2.7-3.7l0.3 0 0.3 0.5 0.4 0.2-0.3 0.7-0.7-1.4z m4-1.8l0.2 1 0 1-0.4 0.3 0.1 0.5-0.1 0.3 0.2 0.2 0.1 0.6 0.2 0.3-0.1 0.9 0.6 0.4-1.3 0.9-0.1-1-0.7-0.4-0.2-0.8 0.2-0.4 0-2 0.2-1.1 0.6-0.7 0.5 0z m0.7-0.6l1.3 0.5 0.3 0.6 0.4 2 0.6 0.5-0.2 1 0.3 0.4-1 0.6-0.2 1.5-0.5 0.7-0.2 1.6-0.3 0-0.9-0.9-0.4-1.7 0.7-0.4 0.3 0.2 0-0.7-0.6-0.4 0.4-0.5-0.5-0.6-0.1-0.3-0.2-0.4 0.1-0.4-0.1-0.3 0.3-0.3 0.3-0.8-0.3-0.5-0.3-1.2 0.8-0.2z m-5.7-172.6l1.1 0.5 0.5 0 0.9 0.7 1.5 0.4 0.3 2.7-0.3 1 0.1 2.1 0.6-0.2 0.1-0.6 0.6-0.7 1.2 0.7 0.3 0.9-0.4 0.6 0.7 0.5 0.7 0.2 1.5-0.7 0.6 0.7 0.1 0.7 1.3 0.2 0.1 0.8 0.5 0.6-0.1 0.9 1 1 1.5-0.4 0.5 0.5 1.6-0.5 0.6 0.2 1.2-0.7 1.1-0.7 0.3 0.5 1-0.9 0.9 0 0.2 0.8 2 0.3 0.3 1.1 1.3 0.1 0.5-0.6 0.6 0 1.3 0.6 1.5 0.5 0.6 0.5 0.4-0.3 0.5 0.5-0.4 0.9-1 0.8 1.5 0.3 0.4-0.8 1.2 0.1 0.8 0.6 0.9 0 0.8 0.8 1-0.6 1.7 0.5 0.5 0.7-0.1 1.1 0.2 0.5-0.6 0.4 0.2 0.7 0.5 0 0 1.1-0.4 0.6-0.1 1.5-0.3 0.3 0 1.3 0.6 0.9-0.1 0.6-0.4 0.6-0.4 0.9 0.4 1-1 0.6-1.5 0.5-0.1 0.9-0.6 0.5-0.4-0.2 0.3 1.2-0.1 0.1-0.4-0.1-0.8-0.2 0-0.4-0.2 0.2 0.2 0.5 0.4 0.9 0 0.2-0.5 0-0.3-0.2-0.3 0.2 0.3 0.1 0.2 0.1 0 0.3 0.4 0.3-0.3 0.3-0.2 0.1-0.2 0.4-0.3 0 0 0.1 0.6 0 0.3-0.1 0 0.5-0.4 0 0.1 0.5-0.2 0.1-0.5 0 0.2 0.5 0.2 0.1 0.3-0.1 0.6 0 0 0.1-0.5 0.3-0.2 0.4-0.8-0.1 0.2-0.7-1.2-1.6-0.8-0.4 0.2 1.2 0 0.7-0.6 0-0.9 1.5 0.2 0.5 0.9 0.4 0.7 1.8-1.6 0.9-0.7 0.5-0.1 2-0.8 0.5-0.5-0.2 0.1-0.9-0.8-0.5-0.5 0.3-1.4 0.1-1.2-0.7 0.1-1-0.7 0.1-0.6 0.7-1.1 0.5-0.5-0.2-0.7-0.9-1.4-0.8-0.9-0.2-0.3-1.5-0.8-0.8-1.1 0.1-0.8-0.3-0.5-0.5-0.6-1.5 0.1-0.7 0.1-1.4-0.7-0.7-0.6-1.3 1.1-0.4-1.3-1.3-0.1-2-1-0.5-0.9 0-0.6-0.7-0.9-0.1-0.4-0.4 0-0.7-0.9-0.5-0.3 0.4-0.1 0.9-0.9 0.9-0.3 1.1 0.4 0.5 0.9 0.1 1.8 1-0.5 0.5 0.4 0.7 1-0.2-0.2 0.6 0.8 0.2 0.5-0.3 0.1 1.3-0.4 0.6-1.9-0.2-1.3 0.2-1-1.7-1.8-0.1-0.4 0.5-0.1 0.8 0.6 0.8-1.1 0-1.1-0.9-0.1-0.8 0.2-0.7-0.6-0.5-1.5 0.5 0-1.3-0.4-0.8-0.7 0.3-1.1 0.1 0.1-0.5-0.5-1 0.1-1-0.6 0.1-0.7-0.8-0.9-0.4-0.1-1.2-0.9-0.1 0.1 0.9-1.4-0.3 0.2-0.6-0.4-0.4-0.8 0.1-0.1-1-1.1-0.4-0.2-0.9-0.8-0.2-0.4 0.4-0.6-0.6-0.3-1.2-0.2-1.8-0.6 0.1-0.8 1.3-0.1 1.1-0.4 0.5-0.4 1.5-0.6 0.7 0 0.6 1 0.9 0.4-1.3 1.3 0.6 2.4 0.5-0.1 0.3 0.6 0.7-0.1 0.6 1 1.7-0.5 0.5-1.1 0.1-0.6-0.2-0.5 0.2-0.2 0.8-0.8 0-0.4 0.7-1.3 0.7-0.5 0.7 0 1.1 0.3 0.3-0.3 0.9-1.1 0.7-1.1 0.2-0.4 0.4-0.8-0.1-0.6 0.7-1.8 1-0.2 1.4-0.5 0.6 0.9 1.1-0.5 0.7 0.5 0.8-1 0.2-0.9 1.2-0.7 2-0.6 0.2-0.2 0.6 0.7 1.3 0.2 1.2-0.3 0.9 1.8 1.8 1-0.9 0.5 0.4 0.6-0.3 0.5 0.1 0.7-0.6 0.5 0.1 0.1 1 0.6 0.3 1.7 1.5 1.3 0.8-0.1 0.7 1 0.4 0.1 0.5 1.7 0.4 0 1.3-0.3 0.5 0.8 1.2 0.9 0-0.1 0.8 0.9 0.9 0.7 0.2 0.3 0.5 0.9 0.4 0.7 0.1 0.4-0.4 0.5 0.7 0.7 0 0.1 0.6 0.6 0.4 1.2 0 0.4-1 1-0.2 0.9 0.4 1.1-1.2 0.4 0.2 0.1 1.1 0.6 0.1 0.4 1.2-0.5 0.5 0.3 0.6-0.4 1 0.7 0.2-0.1 1.2 1 0.5 0.5 0.9 0.6-0.4 0.5 1 1.3 0 1.1 0.5 0.6-0.1 0 0.6-0.8 0.1-0.9 0.7-0.2 0.7 0.3 0.8-0.9 0.1 0.1 0.7-0.5 1.2-0.8-0.6-0.8 0.1-0.9-1.1-1.5 1.4-0.9-0.3-0.2-0.3-0.9 0.1-1.3-0.9-0.8 0-0.5 0.4-1-0.3-0.9 0.1-1.3 1-0.6 0-0.2-0.7-2.6-0.6-0.4 0.6-0.7 0.1 0.6 1.6-0.1 0.6-0.6 0.4 0.4 1.7-0.6 1.3 0.6 0.2-0.5 1.2-0.5 0.1-0.9 1.4 0.1 0.9-0.7 0.2-0.7-0.4-0.6 0.4-0.6 0.9 0.6 1.3-0.5 0.4-0.4-0.4-1.7-0.5-0.1-0.9-1.1-1.5-1.7 0.2-0.8 0.7-0.6 0.1 0 0.5 0.6 0.7-0.1 0.6 0.4 0.8-1.9 1.9-0.2 1.2-0.5-0.1-0.8 1.2 0.2 0.4-0.4 0.9-1.7 1.7 0.1 0.3 1.1 1 0.8 1.2 1.3 2.2 1.4 1.5 0.9 0.6 1 1.2 2 0.5 2.2 2.2 0.7 0.4 1.5 0.1 1.6-0.3 2.3 1.4 0.8 0.1 0.9 1.7 0.4-1.2 0.7 0.5 1.3 0 0.1 0.3 1.5-0.3 1 0.1 0.7 0.5 0.5 1.1-0.2 2.7-0.4 0-0.7 1.1 0.4 1.8-0.5 0 0 0.8 1 0.1-0.1 1.1 0.5 0.4 0 1.5 0.7 0.2 0.4 0.8-1 0.1-0.2 1 0.2 0.9-0.3 0.8-0.9 0-0.1 0.5-1.2 0.6-0.1 0.4-1.1 0.4-0.3-0.4-1.6 0.5 0.9 1.6-0.8 1-0.7 0.3 0.7 0.6-0.2 1.1-0.3 0.8 0.3 1.7-0.4 0.9 1.1 0.7-0.2 1 1.9-0.3 0.6 2.2 0.8 0.4 0.4 0.8 0.7 0.3 0.9 1 1.2-0.6 0.6 0 0.1 0.6-0.4 0.6 0.1 0.9-0.9 0-0.4 2 0.4 0.7-0.9 0.7 0 0.8 0.3 0.4-1.7 0.9 0.9 0.9-0.1 0.6 0.9 0.6 0.8-0.1 0.5 0.8 1 0.1-0.2-1.3 0.8 0.2 0.7 0.8 2.1-0.2 0.6 0.6 0.7 0.4 1-0.8 0.3 0.2-0.2 1-0.8 0-0.8 0.8-0.2 1.1-0.8 0.7-0.3 0.6-1 0.3-0.1 1 0.4 1.5-0.2 0.4-0.1 1.8-0.3 0.6 1.2 0.2 0 0.8 0.6 0.3-0.3 0.5 0.2 1 0.8 0.4 0.4-0.4 0.7 1.3-0.3 1.8-0.6 0.3-0.7 0.8 0.1 1.2 0.6 0.9 0.7 0.6-0.4 1.2-0.6 0.7 0 0.7 0.9 0.4-0.7 0.6 0 0.9-1.4 0.3-0.6 0.7-0.3-0.1-0.4 1.3 0.1 0.5-0.3 2.4-0.6-0.2-0.7-0.7-0.1-0.9-0.5-0.6-0.4-0.2-0.4-0.4-0.7-0.1-0.4 0-0.2 0.2-0.3-0.3-0.3-0.1-0.3-0.3-0.3 0-0.3 0.3 0.7-0.2 0.2 0.3 0.5 0.3 0.5-0.1 0.3-0.1 0.5 0.2 0.3 0.3 0 0.4 0.4 0.4 0.4 1.4 0.6 0.5 1 0 0.2 0.8-0.2 1.6-0.5 0.2-0.4 0-0.2 0.1-0.5 1 0.3 0.4-0.3 0.9 0.1 0.4-0.4 0.3 0 0.2-0.1 0.4-0.2 0-0.4 0.3-1 0.8 0.2 0.3-0.5 0.9-1.2-0.5-0.9 0.2-0.3 0.8-0.9 1 0.1 0.5-0.5 0.5-0.2 0.9 0.2 1.7 0.3 0.6-0.7 0.8-0.6 1.9 0.6 1.2-0.4 1.1-0.8 0.6-0.3-0.5-0.3 0.2-0.6-0.3 0.1 0.9-0.7 1.1-1-0.8-0.1-0.4 0.5-0.8 0.4-0.2-0.6-0.1-0.7 0.2-0.3 0.5-0.6-0.1 0.2-0.7-0.7 0.2-0.3 0.3-0.3-0.1-0.3 0.2-0.6 0.6-0.1 1.2-0.3 0.5 0.2 1.3-0.4 0.4-0.6-0.2-0.2-0.8-0.1-1.3-1-0.3-0.3 0.1-0.2 0.2-0.1 0.9-1.3 0.5-0.3 0.3-0.1 0.3 0.7 1.1 0.2 0.6-2.3-0.4 0.1-0.4-0.6-1.6-0.8-1-0.5-1.2 0.4-1.5 0-0.5-0.7-1 1.4-1.6 0.6-1.1 0.4-2.1-0.5-1.5 0-0.7-0.8-1.3-0.8-0.5-1.6-0.4-1.5 0 0.3-0.8 0.2-1.1 0.6-1.6-0.6 0.1-0.3 0.7-0.1 1.1-0.9 1.2-0.8 0-1.4-0.9-0.9-1.3 0-2.5-0.3-1.9-0.7-0.1 0.5 1.4 0 1.5-0.4 0.4 0.2 1.7 1.1 1.1 0.7 1 1.1 0.4 0.4-0.4 1 0.8 1.4-0.1 1 0.2 0.4 0.7 1.6 2.1-0.9 1.3-2.8 2-0.8 0.3-1.2-1.3 0.1-0.8-0.6 0 0.2 1.1 1.2 1-0.6 1.1-1.1 2.9-0.8 1.7-1.4 1.4-0.4 0.7-1.1 0.6-2.2 1.8-0.7 1.1-0.7 0.4-1.2-0.1-0.5 0.7-2.1 0.9-4 0.8-2.7 0.8 0-0.1 0-0.5-0.7-0.7 0-0.4 0.2-0.8 0-0.6 0.1-0.2-0.2-0.6 0.1-0.3-0.1-0.1-0.7-0.2 0.3-0.1-0.3-0.3 0-0.6-0.1-0.2-0.5 0-1.1-0.1-0.4-0.1-0.4 0.1-0.5-0.4-0.5-0.2-0.1 0.2-0.2-0.3-0.2 0-0.1 0-0.2-0.1-0.4-0.2-0.3 0-0.1-0.3-0.5 0.1-0.2-0.1 0-0.1-0.4-0.3 0.2-0.2-0.2-0.5-0.2-0.4-0.4-0.5 0.2-0.3-0.5-1.1 0.6-0.8-0.6-0.6-0.1-0.3 0.1-0.5-0.4 0-0.1 0.1-0.6-0.1-1-0.4-0.2-0.3-0.3 0.9 0 0.7-0.3 0.1-0.7 0.4-0.5-0.2-0.2 0.2-0.2 0-0.4 0.7-0.1 0.1 0 0.1 0.2 0.2 0 0.2 0 0.8-0.6 0-1.6-0.2-0.4-0.7-0.7-0.8 0.2-1.3 1-1.7-0.4-0.9 0.1-0.6-0.2-0.5-0.8-0.1-1.3-1.4-1.7-0.1-2-0.5-0.6 0.1-0.3-0.6-0.6-0.1-0.2-1.1-0.3-0.3-1.3 0.3-1.3 0.1 0-1.3 0.3-1.4 0.8 0.3 1.5-0.4 0.7-0.7-0.5-0.5 0.8-0.4 1 0.1 1.3 0.3 0.1-1.1-0.6-0.7-1.5-0.9 0-0.6 0.4-1.1 0.1-1-1.3-0.7-1.4-0.2-0.6-1.8 0.2-0.4 1.3 0.2 0-1.6-0.2-0.9-0.7-0.3-0.3-0.8-1.7-0.3-1.1 0.3-0.7-0.1-0.2-0.6-0.4-0.2 0.1-2.1-0.7-0.7-1.3-0.6-1-0.8-2.4-0.4-0.9-1.4-1.3-0.6 0.2-1.2 0.4-0.8 0-1.1 0.5 0 0.1-0.9 0.4-0.5-1-0.7 0.1-0.4 0.8-0.2 0.4-0.5 0.5 0.4 0.4-0.5 0.7 0.2 0.7-0.7-0.1-0.7-0.8 0.5-0.5-0.8-1.2 0.1-1.6-0.3-0.8 0.7-0.4-0.6-0.7-0.2-0.9 0.3-1.8-0.8-0.7 0.6-1.6 0.1-0.4-0.9-0.9 0.1-0.5-1-0.9-0.8 0.1-0.7-0.7-0.5-0.9 0.1-1.6-0.8 0.2-0.6-0.4-0.5-1.9-0.1-1 0.3-0.3 0.3-1 0-0.5-0.7-0.8-0.4 0-0.5-0.7-0.8-0.7 0.1-0.3-2.7 0.2-0.6 1-0.9 0.3-1-0.2-1.3 1.1-0.4-0.6-1.2-0.6 0-0.1-1.6 0.5-0.9 1.1 0.2 1.1 0.6 2.8-1.2 0.7-0.1-0.3-1.1-0.7-1.2 0-0.4 0.9-0.8 1.2 0.2 0 0.4 1-0.2 1.2 0.1 0.5 0.7-0.3 0.9 0.4 0.9-0.4 1 1.2 0 0.9 0.6 0.6 0.1 0.1 0.8 0.7 0.1 1.2-0.2 0.1 0.4 0.6 0.3 0.4-0.2-0.4-0.7 0.9-0.5 0.8-0.2 0.2-1.9 0.4-0.3-0.4-0.8 0.9-1.1-0.1-0.4 0.9-0.2 1.3-1.6 1.2-0.1 1.7 0.2 2.1-1.2 2-0.8 2.1-0.5 0.7 0.1 0.2 0.6 1.9-0.4-0.1-0.4 0.5-1.5 0.4-0.2 0-1.2-0.6-0.8 0.1-0.6 0.6 0.1 0.8-0.4 0.6-0.8 0.7 0-0.2-0.7 0.7-0.7 1 0.6 0 0.4 0.6 0.4 0.7-0.8 1.3 0.5 1.1 0.5 0.8 0.8 1.7 0.6 1.4 0.2 0.6-0.9-0.4-0.2-0.8-1 0.2-0.6 1.8 0.4 0.2 0.6 1-0.6-0.1 1.1 0.9 0 0.3-0.4-0.3-0.7-0.1-1.6 0.5-0.1 0.2 1 1-0.5-0.3-1.7 0.2-0.8-1.1-0.5 0.3-0.6-0.7-0.4-0.5-1.1 0.4-0.6 1 0.4 2 0-0.6 1 0.8 0.3 0.6-0.5 1.2 0.3 1.7 0.9 0.6-0.6-0.6-0.4 0.3-0.5 0.8 0.2 1-0.4 0.2-0.9-0.6-0.2 0.5-1.1-0.5-0.1 0.2-1.2 0.9 0.5 0.6 0.6 1 0 0-0.7 0.4-0.7 0.8-0.3-0.6-0.6-0.2-0.5 1.6 0 0.4 0.3 1.7 0.1 0.2-0.9-0.8-1.1-1.2-0.3 0.4-1.3 1.1 0 0.9-0.8 0.1-0.9 0.6 0.2 1-0.6 0.2-1.1 1.2-1.9 0-0.6-0.3-0.5 0-0.7 1-1.4-0.7-0.9 0.1-0.9-0.2-1.7 0.5-0.5 0.5 0.6 0.8 0.3 0.6-0.4 0.8 0 0.1-0.7 0.6-0.5-0.3-0.7 0.4-1.9-0.9-0.6 0.4-0.4 0.1-1.2-2.1-0.6-0.7-1.1 1.1 0.2 0.5-0.5 1.1-2.6 0.5-0.4 1.9-1 0.2-0.6-0.1-1-0.3-0.5-1.9-1.8-0.1-0.5-1.3-1.6-1-0.6-1.5-0.7-0.7-0.9 0-2 0.6-2.6 1.4 0.6 0.1-0.3-0.3-0.8 0.9-0.7 0.2-1-0.2-0.7-0.7-0.2-1.7-1.3 0.3-1.3-0.8-0.2-0.1-0.7 0.8-2 0.8 0.5 0.6-0.4 0.2-0.7 1 0-0.1-0.5 0.4-1 1-0.1 0.1-0.5 0.7-0.6 1.1-0.1 0.8 0.8 0.3 0.5 0.6 0.4 0.3-0.3 0.6 0.6 1.2 0.2 0-0.4 0.1-0.4-0.1-0.1-0.1-0.1-0.3-0.9-0.3-0.2-0.3 0.1-0.4-0.8 0.1-0.2 0.2 0-0.3-0.4 0.2-0.7 0.2-0.2-0.1-0.1-0.2-0.1 0.4-0.2 0-0.2-0.1-0.2 0.2-0.7-0.3-0.1 0.3-0.3 0.1 0 0.1 0-0.2-0.3 0.2-1.1 0-0.4-2.4-1-1.2-1-0.2-0.5-1.3-0.9-0.1-0.7 0.5-0.6-0.8-0.7 0.8-0.7-0.9-0.5-0.5 0.2-1.6-0.4-0.3-0.6 0-1-0.3-0.6 0.7-0.1 0-0.4-0.1-0.2 0.1-0.2 0.1-0.4-0.1-0.8 0-0.3 0.2-0.4 0.3-1.1 0.3-0.5 0.9-0.8 0.4-0.2 0.1-0.4 0.1 0.1 0.8-0.4 0.1 0.5 0.4 0.3 0.2-0.6 0.7 0 0.3 0.1 0.2-0.1-0.1-0.3-0.5-0.4 0.5-0.3-0.1-0.6 0-0.2 0-0.3-0.1-0.4 0.6-0.4 0.5 0.7 0.3-0.1 0.3 0.1-0.1-0.5 0.8-0.6 0.1-0.3 0.7 0.2 0.4-0.1 0.1-0.4 0.5-0.3 0.1-0.3 0.1-0.2 0.3-0.2 0.1-0.1 0.4-0.3 0.1-0.2 0.2 0.1 0.4-0.7 0.7-0.5 0.2 0 0.4-0.2 0.3-0.5 0.7-0.1 0.3-0.1 0.3-0.3 0.2-0.3 0.1-0.5 1.2-1 0.1 0.1 0.1 0.1 0.2-0.6 0.4-0.2 0-0.2-0.3-0.1-0.4-0.7-0.5 0.1-0.3 0-0.5-0.4 0-0.3 0.8-0.8-0.1-0.7-0.3-0.6-0.5 0.1-0.2-0.8-1-0.2-0.5-0.8 0.5-0.6 1.4-0.9-0.1-0.7-0.8 0.6-0.7-0.3-0.6 0.2-0.1 0.6-1.2 0.4-0.9-0.9 0-0.2 0.1-0.8 0.5-0.2 0.7-1.5 0-0.7 0.8-0.8 0.1-2 0.5-0.8 0.2-2-0.7-2.5 0.2-1.2-1.2-1.2 0.3-0.8-0.9-1.2-0.1-1.4-1-0.8-0.2-0.8-1.5-0.3-0.8-1.5-0.1-0.8-0.7-0.3 0-1 0.5-0.4 0.3-2.2 0-0.8 1.4 0.2 0.6 0.6-0.3 0.3 0.6 1 0 0.9 1.8 1 0.7 0 0.7-0.7 1.2 0 0.6 0.5 1.6-0.4 0.7 0.1 0.2 0 0.6 0.5 0.1 0.4 0.7-0.1 0.2 0.3 0.7 0 1.3 0.4 0.8 0.3 0.7-0.3 0.4-0.9 1-0.5 0.9-0.9 0-1 0.7-0.3 1.7-0.4 0.9 0.2 0.7 0.8 0.7 0.2 0.9-0.7 0.9 0.6 0.2 0.8 0.5 0.3 0.7-0.5z",
        36: "M203.7 83.7l0.2-0.1 2.5-0.7 0.8-0.1 1.5 0.2 0.9-0.1 2 0.3 1.5 0.7 0.8 0 0.4 0.5 0.5 0.9 0.4 0.1 1 0.1 1.6-1.4 1.5-0.6 0.8-0.5 0.5-0.1 0.2-0.2 0.5-0.4 0.4 0.6 1.8 1.8 1.1 0.3 1.4 1.2 1.4 0.6-0.4 0.9-0.4 1-0.1 1.7 0.1 0.4-0.2 0.6 0.2 1 0.6-1.1 0.4 0.2 0.6 0 0.6 0.3 0.5 0.6 0.4 0.7 1 0.4 0.9 0.4 0.2 0 0.5 0 0.9 0.3 0.7 0.3 0.5 0.3 0.6 0.4 0.5 0.4 0.2 0.2-0.1 0.3 0.3-0.1 0.2-0.1 0-0.2-0.1-0.3 0.1-0.1-0.1-0.4 0.1-0.2-0.1-0.2 0-0.2 0.1 0 0-0.2 0.1-0.1 0.1-0.1 0.1-0.1 0-0.2 0.1-0.1-0.1-0.1-0.2 0-0.2-0.3 0.4-0.1 0.3-0.2 0.5 0.1 0.1 0.5 0.3 0.1 0.1 0.2 0 0.2 0.1 0 0.4 0.2 0.2 0.1 0.2 0.2-0.1 0.3 0.2 0.4-0.1 0.1 0 0.4 0.2 0.1 0.2-0.1 0.3 0.1 0.4-0.1 0 0.1 0.3 0.2 0.4 0.3 0 0.1 0.3 0 0.2 0.2 0.4 0.1 0 0.2 0.2 0.1 0.1 0.1 0.1 0 0.1 0.2 0.2 0.3 0.1 0.1 0 0.2-0.1 0.1 0.1 0.4 0.1 0.2 0 0.3 0 0.4 0.2 0.4 0.2 0.5 0 0.2 0 0.1-0.1 0.1-0.1 0.2 0.1 0.2-0.3 0.3 0.1 0.1 0 0.2 0.1 0.2 0 0.1-0.5 0.2-0.1 0.2-0.3 0.2 0 0.1-0.1 0.2 0 0.2-0.7 0.7 0.1 0.2 0-0.3 0.1 0 0.1 0.1 0.1 0 0.3 0.1 0.3 0 0.7 0.2 0.1-0.1 0.1 0 0.1 0 0.1 0.1 0 0.1 0.1 0.1 0 0.2-0.1 0.1 0 0.1 0 0.1-0.2 0.1-0.1 0-0.1-0.1-0.1 0.1 0 0.2-0.2 0.4 0.1 0.1 0.2 0.1 0.2-0.1 0.1-0.1 0.1 0.2 0.1 0 0.3 0.1 0.2 0 0.2 0.2 0.1 0.1 0.1 0 0.1 0.1 0.2 0.3 0.1 0 0.1 0.1 0.1 0.2 0.2 0.3 0.3-0.2 0.1 0.1 0.3 0.1 0.2 0.1 0.2 0.3 0.3 0.5 0.2 0.1 2.2 2.6-2 3.7 0.2 0.3-0.2 0.2 0.4 0.3-0.1 0.3 0.1 0.3-0.2 0.2 0.2 0.4 0.1 0.4 0.3 0.3 0 0.1-0.2 0.4 0 0.3 0.2 0.5 0.2 0.3 0.9 0 0.6 0.1 0.3-0.3 0.2 0.2 0.4 0.1 0.3 0.4 0.1 0.3 0.1 0.5 0.2 0.4 0.1 0.4 0.3-0.1 0.3 0.3 0.4 0 0.2 0.1 0.4 0.1 0.2 0.4 0.7 0.2 0.4-0.2 0.5 0.7 2-1.9 0.3 0.4 0.5 0.2 0.4-0.1 0.2 0.1 0.1 0.2 0 1.4-0.1 0.5-0.2 0.4 0.1 0.6 0.3 0.5 0.4 1.1 0.7 0.2 0.4 0.4 0.1 0.3 0.4 0.8 0.3 0.6 0.7 0.5 0.6 0.2 0.2-0.1 0.3-0.1 0.5 0.8 0.3 0.2 0.5 0 0.2 0.4-0.2 0.6-0.2 0.4 0 0.3 0.1 0.4 0.3-0.3 0.4 0 0.8-0.1 0.5-0.2 0.9 0 1.1 0.2 0.2 0 0-0.4-0.1-0.3 0.1-0.1 0.7 0 0.4 0 0.4 0.1 0.2 0.3 0.3 1.1-0.1 0.4 0.2 0.4 0.2 0.6 1.1 1.3 0.2 0.4 1.4 1.3 0.6 0.5 0.3 0.3 0 0.8 0.6 0.9 0.9 0.8 0.9 0.1 0.6 0.1 0.4 0.4 0.3 0.3 0.3 0.9 0 0.5-0.2 0.6 0.1 0.5 0.1 0.4-0.1 0.2 0.1 0.1 0.5 0.6-0.3 0.4 0 0.3-1.5 0.6-0.1 0.1 0.3 0.4 0.2 0.4-0.1 0.2-0.4 0-0.1 0.1 0.2 0.5-0.2 0.5-0.6 0.1 0.6 1 0.4 0 0.8-0.6 1.6-0.2-0.2-1.2 0.1-0.2 0.1-0.2 0.2-0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.2-0.1 0.1-0.1 0.1-0.1 0.1 0.1 0.1 0 0.2 0.1 0.2 0 0.2 0.1 0 0.1 0 0.2 0.2 0.3 0.3 0.3 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1 0.2 0.1 0.3 0.1 0.3 0.2 0 0.2 0.1 0.3 0.2 0.2 0.1 0.3 0.1 0.4 0.1 0.3-0.2 0.2-0.2 0-0.4 0.1-0.2 0.1-0.1 0.1 0 0.2 0.3 0.2 0.2 0.1 0.2-0.1 0.2-0.1 0.1 0 0.2 0.1 0.2 0.4 0.1 0.2 0 0.4 0.5 0.2 0 0.2 0 0.1 0.1 0 0.1 0.1 0.3 0 0.2 0.1 0.1 0.2 0 0.2 0.1 0.1 0.3 0.1 0.1 0.1 0.1 0.3 0.5 0.3 0.2 0.3 0 0.3 0 0.1 0 0.2 0.4 0 0.2 0.1 0.3 0 0.2 0 0.3 0 0.1 0.1 0.1 0.4 0 0.1-0.2 0.2-0.1 0.1 0 0.1-0.1 0.1-0.1 0.1-0.1 0.1 0 0.3 0.1 0.1 0.1 0 0.1 0 0.1 0 0.1 0.1 0.3 0.1 0.1 0.1 0.1 0 0.1-0.1 0.2 0 0.1 0.1 0.2 0.1 0.4 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0 0.3 0.1 0.1 0.1 0.1 0 0.1 0 0.2 0.1 0.2 0.2 0.1 0.2 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0.2 0.1 0.2 0.1 0.2 0.2 0.2 0 0.1 0.1 0.3-0.1 0.1 0 0.2 0 0.3 0.6 0 0.2 0.1 0.1 0 0.1 0.1 0.1 0 0.1 0 0.1-0.1 0.3-0.1 0.1 0 0.2 0.2 0.1 0 0.2 0.1 0.2 0.1 0.1 0.1 0.1-0.1 0.1 0 0.1 0.3 0.2 0.1 0.2 0.2 0.1 0.3 0 0.4 0 0.2 0.4-0.1 0.6-1 1.9-0.6 0.1-0.2-0.1-0.4-0.2-0.1 0.2 0 0.1-0.2 0.1-1.2 0.1-0.8 0.4-0.5-0.1-0.5-0.4-0.6-1.3-1.2-0.2-0.1 0.2-0.3 0.2-1.2 0.1-1 0.8-1 0-0.4-0.2-0.3 0-0.4-0.2-0.3 0.1-0.1 0-0.2 0-1.1 1.1-1.5 1.1-0.8 0.4-0.6 0.8-0.7 2.1-0.6 0.7-2.9 0.5-0.8 0.5-1.2 0.1-0.5 1.6-1.8 1.3-0.3 0.7-2.5 1.3-0.4 0-0.4-0.4-0.3-0.4-0.4-0.4-1.2-0.6-1.1-0.2-0.4 0.1-0.5 0.1-0.3 1.1-0.4 0.4 0.2 1 0.9 1.1 1.9 1.1 0.8 1.8 0.5 0.5-0.1 1.5-0.5 1.2 0.3 0.8 0.7 0.6-0.1 0.6-1.2 2.1-1.1 1.3-0.3 0.5-0.3 0.4-0.4 1.1-0.7 0.9-0.9 0.5-1.2 0.2-1.1 2.1-0.9 0.7-1.3 0.5-1.9 0.3-0.8 0.3-1.3 1-0.4 2-0.4 0.7-0.4 0.1-0.1-0.2 0-0.1 0-1-0.8-0.3 0.2-0.8-0.2 0-0.4 0.2-1.4 0.4-0.3-0.1-0.3 0-0.4 0-1.8-0.8-0.3 0.2-0.1 0-0.4 0-0.2 0.3-1-0.8-0.1-0.5-1 0.1 0-0.9-0.7 0.2-1.5-0.7 0.3-0.6-0.4-0.3-0.9 0.1-1.1 0.6-0.3-1.7-0.5-1.1-0.6 0.3-0.7-0.4-0.6 0-0.6-0.5-0.5 0.1-0.1 0.7-0.7 0.8-1.3 0-0.8-0.7-1.4 0.2-0.6-0.9-1 0-1.1-0.2-0.7 0.7-0.9-0.2-0.6 0.2-1.4-0.1-0.1-0.5-0.8 0.1-0.2-0.8 0.4-0.8-1-0.7-0.3-0.8-0.1-1.2-0.5-0.6 0.5-0.4 0.1-0.7 1.4-1-1.1-0.7-0.4-1 0.3-1.2 0.4-0.8 0.5-1.7 0.5-0.9 0.2-0.8-1.8 0.1-0.7 1.1 0.1 0.9-0.6 0.9-1 0.4-1.1-0.5-0.4 0.6-1.3-0.1-1.8-1.6-1.7 0.3-0.6 0.8-0.9-0.1-1-0.6-1-1.2 0.1-0.7-1.7-0.7-1.3-0.2-0.5-1-1-0.7-1.7-0.4-2.2-0.5-0.2-0.9-1.3 0-0.9-0.2 0.3-1-0.9-0.3-0.4-0.8-1.1 0.1-0.9-0.8-2.6-0.1-0.5 1.4-1-0.2 0.4-0.8-1.7-1.9-0.2-1-1.4-0.8-1.5 0.1-0.6-0.1-0.2-0.5 0-1.6 1-1.3 0.1-1.6-1.1-0.5 0-0.6-0.7-0.6-0.3-1.1 0.2-0.5-0.5-0.6 0-0.6-0.8-0.9-0.2-1 0.1-1 1-1.2-0.1-0.9 1.3-0.8-1-1.1 0.3-1.1 0.9-0.6-0.5-0.5 0.1-1.4-1.1-1.2-0.9-0.8 0.2-1-0.2-1.1 1-0.8 0.2-0.8-0.1-1.4-1.2-1.1 0-0.6 0.5-2.4 0.6-1.5-0.4-1-1-0.8-1.2-2.9-0.2-2.5-0.4-0.8-0.1-2.5-0.2-1.5 0-2.1-0.4-0.2-0.2-1.3-0.9-1.9-0.6-1.7-0.9-0.3-0.2-1 0.5-0.4 0.5-1.8-0.1-1.4 0.4-0.9-0.1-1.4 0.4-0.5 0-1.1 0.6-0.7 2.6 0.2 0.6-0.7 2.2 0.3 0.7 0.8 0.4 0 0.4-0.9-0.1-0.8 1.3-1.9-1.1-0.7 1-2 0.3 0 1-2.2 1.4-1.1 1.7 0.1 0.7-0.9 2-0.2 0.9 0.1 0.3-0.6 0.9-0.4 0.2-0.8 1.6-0.6 0.8-0.8-0.1-0.8 1.2-0.9-0.4-2.3 1.4-0.9-0.2-0.9-1-0.6 0.9-2 1.2-0.3 0.2-0.4-0.4-0.3z",
        37: "M319.4 815.3l0.2-1.5-0.4-0.4 0.2-1-0.3-0.1-0.4-0.9 0.5-1.5-0.2-0.9-0.4-0.6-0.1-1.6 0.4-1 0-0.9-0.3-1.3 0.5-0.6 0.8-0.1 0.6-0.6 0.8-0.4 0.5 0.4 0.4-0.9-0.3-0.6-1.6-0.9-0.6-0.6-1.3-0.3-1.5 0.2-0.9 0.4-1.3-0.6-0.7 0.1-0.7-0.4-1.6-0.6-0.7-0.9-0.4-1.4 1.3-0.2 0.2-0.6 1 0.4 1.4-0.1 0.1-0.7 0.4-0.3 1.2-0.2 0-1-0.5-0.1-0.4-0.6 1.1 0 0.5-0.6 0.7 0-0.1-0.9 0.6-1.3-0.4-0.2-0.9 0.4-0.6-0.9 1.7-0.6 0.1-1-1.6-0.3 0.5-1.7-0.1-0.5 1.1 0 0.2-0.7-0.5-1 0.1-0.7-0.2-2.3 0.4-0.3-0.1-1.3 0.5-0.5 0-0.8 0.7-0.6-0.2-0.9-0.5-1 0-0.6-0.6-0.6 0.1-0.4-2-0.6-1-0.6-0.5-0.8 0.3-1 0.7-0.1 0.1-0.7-0.4-0.3 2.5-2-0.7-0.4 0.5-1 0.3-1.1-0.2-0.9 0.8 0.1 0.3 0.5 1.3-0.3 0-0.9 0.4-0.4-0.8-0.5 0-0.5 0.8-0.5 1.3 0.4 0-0.9 0.8 0.4 0.5 0 0-0.9 0.8-0.1 0.5-0.3 1.2 0.3 0.2-1-1.1-0.8-1.2 0-1-0.4-0.2-0.9-1.3 0.3-0.7-0.8-0.9 1.1-0.4-0.9-0.5 0-0.5-0.4-0.7-0.1 0-0.8 0.4-1.1-0.2-0.9 0.4-1.4 1.1-0.3 0.2-0.4 1.1-0.4 0.4 0.1 0.8-0.8-0.3-0.5-1.1-0.6-0.6-0.1 0.2-0.7 0.5-0.4 0-0.5 1-0.2 0.3-0.4 0.2-0.8 0.8-0.5-0.2-1.1 1 0.2 0.1-1.5 0.9 0 0.3-0.8-0.3-0.9-0.6 0-0.7-0.9-1.8-0.6-0.3-0.7 0.7-0.8 1.1-0.3 0.1-0.5-0.3-1 0.2-0.9-0.6-0.4-0.4-0.9 0.6-1-0.5-0.9 1.1-1.3-1.1-0.5-0.7 0 0.6-0.6-0.5-0.9-0.9-0.2-0.2-1 0.9-0.8 0.2-1.1-1-0.3 0.1-0.5 1.1 0.2 0.8-0.3-0.4-0.8 0.2-0.6 0.8 0.3 0.1-0.6-0.6-0.4 0.4-1.6 1.4-0.3 0.2 0.7 0.4 0.3 1.9-1 0.5 0.1 0.7-1.3-0.2-1.2-0.4-0.8 0.1-1.2 0.6-0.5 1.2-0.1 0.6-0.8 0-0.5 0.7-1.4 0.5-1.4 2.4-0.8 1.2 0.3 0-0.8-0.6-0.6-0.9-0.3-0.4-0.6-0.2-0.9-0.9 0.1-0.5-0.2 0.4-1.4-1.4 0.1 0.2-1.2-1.7 0-0.1-1.4-0.3-0.3 0.2-1.2 1.2 0.4-0.1-0.7 0.2-1 0.5-0.2 0.5 0.7 0.4-0.1 0.1-1-0.3-0.7 0.5-0.8 0.1-0.7-0.3-0.5 0.8-2.1 0.6-0.5 0.5 0.2 0-0.8-1.3-0.2 0-0.7 1.7-0.6 0.5-0.5 0.8-0.3 0.9 0.7 0.3 0.5 0.9 0.3 0.6 0.8 0.6 0.3 0.1 0.8 0.3 0.3 0.8-0.6 0.6 0.4 1-0.1 0.7 0.6 1.2-0.4 0-1.3 0.3-0.9 0.2-1.1-0.6-0.7 0.2-1.6 1.3-1.4 0.9 0.2 0.8-0.9 0.8 0.2 0.5-0.6-0.1-0.8-0.4-0.6-0.1-2 0.5-0.4 0-1.2-0.8-1.8-0.6-0.4 0.6-0.9 1-0.1 0.2-0.4 0.8-0.4 0-0.7 0.5-0.8 0.3-0.9-0.3-0.9-0.7-0.3 0-0.9-1.5-0.4 0.5-2.3 0.9 1.1 1.6 0.1 0.1 1 0.4 0.6 1.1 0.4 1.6 0.3 0.6 0.8 1.1-1 2 0.4 0.6-0.3 0.6 0.4 2.8 0.8 0.5 0.7 0.7-0.5 0.9 0.2 0.7-0.2 0.8 0.8 1.3 0 0.4 1 0.2 1.2-0.1 1.5 1 0 0.9-0.4 0.9 0.1 0.9 0.5-0.2 1.2 0.5 1 0 0.4-0.8 0.6 0 0.4 0.8 0 0.5-0.4 0.9 0.8 1.1-0.2 0.4 0.5 1.4 0.1 0 0.6 1.3 0.4 0.9 1.2 0.7 0.4 1-0.3-0.3-0.7 0.2-0.9 0.8-0.6 0.1-1.2 0.3-0.7-0.4-1.1 0.6-0.1 1.7 0.8 0.3 0.9 0.9-0.3 1 0.1 0 0.3 1.5 1 0.9 0 0.6 0.6 0.4 0.7 1.5-0.7 0.1-0.9 0.9-0.2 0.2 0.8 0.6 0.6 0.9 0.3 0.3-0.2 0.2-1.2 0.5-0.9 0.6-0.4 1.3 0 1.2-0.3 1-0.7 1.2 0.2 0.6 0.7 0.8 0.4 0.4 1.1 1.7 1.3 1.1 0.3 1.1 1.2 0.1 0.7 0.9 1.4-0.3 1.9-0.2 0.5 0.1 1.4-0.6 0.5-0.8 2.1 0.1 0.8 0.7 1-1.3 1.2-1.2 0.7-0.4 0.7 0.1 1.6-0.2 0.6 0.5 0.3 0.7-0.4 1.2 0.1 0.3 0.8-0.1 1.7 0.3 1.3-0.1 2.8-0.4 0.8-1.1 0.2 0.8 1.3 0.5 0.4 2.7 0.7 0.3 0.5 0.4 0.2 0.5 0.9 1.2 0.7 0.9 0.9 1.7-0.7 0.3 0.6 0.8 0.1 0.4-0.7 1.5-0.2 0.8-0.6 0.9 1.2 0.8 2.3 0.8 1.3 0.9-0.7 0.5 0.4 0.7-0.5 1.6-0.7 1.3 0 0.8 0.4 0.7 1.1 2.3 1.5 0.5 0.6 0.6 0.3 0.2 0.9 0.4 0.8 1.1 0.6 0.5 0.7-0.2 0.6 0.8 0.5 0.3 1.6 0.7 1.6 0 0.5 0.8 0.9 0.6 1.2-1.7 0.9 0 1.7 1 0.3 1.2-0.1 0.7-0.9-0.1-1.2 0.3-0.3 1.2 0.2 0.2 0.7-0.6 0.3 0.2 2 0.3 0.4 1.3-0.1 1.5-0.8 0.3-0.3 0.7-0.1-0.1 0.9-0.8 0.7 0 1.2 0.6 1.7-0.1 0.4 0.3 1.4 0.4 2.5 0.4 0.3 0.3 2.8 0.3 0.7 0.7 1 0.8 0.2 0.6-0.1 0.8-1.1 2.1-1.3 1.1 0.2 2.1 1.3 2.1 0 2.4 0.2 0.8 0.1 0.6-0.6 0.4 0.2 1.1-0.3 0.4 0.7 2.5-0.5 0.7-0.4 1.2 0.5 1.1-0.9 0.1-0.6 0.6-0.7 0.9-0.3 0.5 0.8 1.9-1.1 0.8 0.8 0.4 0.9-0.4 0.5-0.6 0.1-0.4 0.4-0.8-0.1-0.9 0.7-0.2 0.6-0.8 0.6-1.8 0.2-0.4 0.6-1 0.5-0.3 0.4 0 1.1-0.6 0.8-0.7 1.3-0.8 0.7-0.3 0.8 0.8 0.6-0.8 1.2-0.3 3.2-1.8 2.4-0.7 0.4-0.1 0.3-1.1 0.3-1.2-0.5-0.2-0.6-0.7-0.2-1.2 1.9-0.7 0.6-1.7 0-0.9-0.2-0.7 0.7 0 1.4 0.3 0.5-0.6 0.7-0.6 0.1-2 0.6-0.8 0.4-0.6-0.1-0.6 0.7-1.4 0.2-1-0.3-0.9-0.6-0.9 0.2 0.4 1.1-0.1 0.8-0.8 0.2-0.7-0.2-0.1 0.8-0.4 0.5 0.3 0.5-0.2 1 0 0.6-0.9 0.9-0.3-0.4-2.6-0.6-0.7-0.4-1.4-0.1-1.2 0.5-0.4-0.6 0.6-0.4-0.9-1-1.2-0.3-1.2-0.7-0.3 0.5-1.8 0.8-0.4 0.7 0 0.9-0.5 0.7-0.6 0-0.2 0.7-0.9-0.2-0.7-1.1-0.2-0.8-0.9 0.7 0.7 1.6-0.6 0.6-0.4 0.9 1.3 0.5 1.5 0.4 1.2 0.9 0.5-1 1 0.4 0.4-0.5 1.3 0.9 0.5 0-0.1 0.8 0.2 1.1-0.8 0.1-0.1 1.2-0.2 0.4 1 0.7 0.4 0.7-1.2 0.8-2.5-0.4-1.1-0.5-0.1-1-1-0.5-0.2-0.4-0.6-0.3 0 0.7-0.9 0.7-0.5-1.6-0.8 0-0.6-0.5-0.2-1.5-0.4-1.6-1.3-1.9-0.7 0.3-0.8-0.6-0.8 0 0-0.9-0.5 0-0.5 0.7-0.8 0.8-0.3 0.6-1 0.1-0.6-0.2-0.1 0.9-1.3-0.1-0.3 1-1 1.1-0.6 1.5 0.8 0.4 0.7 0 0.2 1 1 0.4-0.6 1.5-0.1 1-1.1 1.1-0.9 0.7-0.6 1.2-1 1-0.7 0-0.7-0.2-0.4-0.4-0.6-1.4-0.4-0.4-1.8 0.3-0.9-1.2-0.3-0.2-0.8 0.3-0.9 1-1.4 0.1-0.9 0.6-0.3 0.4-1.6 0-0.9 0.7-1.3 0.4-1.3 0-1.6 0.8-0.3 0.6-0.6 0.3-2.7 0.2-0.9 0.1-1.8 0.5-0.2 0.5-1.1 1-0.2 1 0.4 1.2-0.5 0.7-0.3 2.7 0.6 0.9 0 1.3-0.1 1.8-0.6 0.7-1.1 0.5-1.8-0.8-1.9 0-0.9-0.2-0.7 0-1 0.6-1.1 0.4-1.8 0.9-0.1 0.9 0.6 1.5-0.7 0.9-1-0.4-0.2-1.2-0.3-0.6-0.9 0.3 0.2 2.3-1 1.4-1.1 0.8-1.2 0.1-0.9-0.2-0.9-0.5-0.7-0.5-1-1.3-1.2-0.2-1.5 1.5-2.2-0.6-1.5-0.3-1.5 0-1.2 0.7-1.1 0.3-0.8 0.8-0.8 0.1-0.8-0.3-0.6 0.4 0.3 1.1-0.4 0.9-0.2 1.1-0.5 0.5-0.8 0.2-0.8 0.6 0 0.5-0.6 1.3-1.3 0 0.1 0.5-0.9 0.3-1.3-0.6-0.5-0.9-0.3-1-0.8 0.1-0.5 1.3-1-0.6-1.5 0-1.4-0.7-0.7 0.1-0.4 0.6-0.7 0-1.2 0.4-2.9-0.8-1.1 0.5-1.5-0.4-1.1-1-0.6 0.2-2.7-0.5z",
        38: "M203.7 83.7l-1.5-1.4-1 0.4-0.7-0.2-0.7-0.6-0.3-0.8-1.4 0.4-1.3-1.6-1.8 0.1-0.6-0.8-1.3-0.6-1.1 0-1 0.9-0.7 0.2-0.5-0.5 0.4-2.3-0.9-1.6 0-1.5 0.3-1 0.9-1.7 1-1 1.1-0.5-0.3-1.7 0-1.1-1.1-0.1-1.2-1.1-1.6 0.2-1.1-0.9-2 0.6-0.8 0-0.8-0.6-1.1 0.2-0.6-0.5-2.8 0.5-1.2-1.6-2.2-0.5-2.1-1.4-0.8-0.9-1.1-0.7-1.1-1-0.7-0.4 0.1-2-0.1-1 0.6-1.9-0.9-0.7-1.2-1.3-0.6 0-0.6 0.9-1.1 0.4-0.7-0.4-0.8 0.2-0.7 0.5-1.6 0-0.3-0.3-0.1-1.1-1.7 0.1-0.6-0.4-0.4 0.5-0.8 0.3 0 0.5-1.1 0.5-0.8-0.6-0.7 0.2-1 0.9-1-0.6-0.6-0.8-1.6-0.3-1.1-1.5-0.5 0-0.8-0.6 0-1.3 0.7-0.6 0.2-1.2 0.6 0 0.3-1 0.5-0.3-0.4-1-1.2-0.3-0.7-0.7 0.1-1.4 0.5-1.1 0.9-0.7-0.8-1.3 0.3-1.3 0.9-0.8 0.3-1.4 1.4-0.6 1 0.6 0.6 0 0.4-0.6 0.8-0.1 1.2-1.1 0.9-0.2 1.5-1.8 0.8-0.8 0.7 0 0.7-0.8 0.1-1.4-0.4-0.6 1.7-1.1 0.9-0.1 1.4 0.3-0.1-1.6 0.3-0.7 0.7-0.6 1.2-0.4 0.6-1.1 1.3-1.9-0.7-1.2 0.1-1.3-0.3-0.6 1.6-0.3 0.9-0.8 1.4-0.5 0.3 0.7 0.9 0.1 0.6-0.4 1.8 0 1.3-0.4 0.6 0.1 0.3-0.7 1.3 0 1-0.6 1.2 0.7 0.8 0.1 0.7 0.5 0.6-0.2 1.8 0.2 0.7 0.7 1.2 0.4 0.4-0.3 1.9 0.4 0.6-1 2 0.4 0.9-0.7 1.9 0.8 1.2-0.3 0.2-1.1-0.4-0.9-0.9-1.3-1.2-0.2-0.8-1-1.1-0.1-0.5-0.5-1.3-0.3-0.1-0.7-0.7-1-0.7-0.5 0.4-1.3 0.8 0.1 1.1 0.7 0.4-0.4 1 0.5 0.7-0.1 0.7 0.5 0.4-0.7 1.7 0.6 0.4 0.5 0.9-0.1 0.5 0.3 0.8 1.3 1 0.7 0.9-0.1 1 0.9 1.1-1.3 1 0.1 0.9-0.3 0.6-2.6 0.4-0.2 2 0.4 1.1 0.4 0.6-0.7 1.3-0.6 1.7-1.8 1.3-0.4 0.8-0.9 1.6-0.2 0.6 0.3 1.3 0 0.9 1.5 0.6 0 0.6-4 1.6-0.5 0.6 0 1.2-0.9 0.9 0.6 0.3 1.6 0.8 0.7 0.7-0.8 0.9 0.2 1.4 0 0.1 1.2 2.3 3.4 2.6-1.7 0.8-0.3 0.3-0.5 1.4 0.5 1 0.9 0.9-0.2 1.3-0.8 1.6-2.2 0.3-0.8 0.8-0.1 0.9-0.5 1.1 0.1 0.6-0.3 1.3 0.2 0 2.2 0.2 0.8 0.8 0.9 0.9-0.4 0.9 0.5 0 0.9-0.5 0.5 0.1 1.6 1 0 0.3 0.7 0.2 1.7 0.7 1.1 1.3 0.6 0.7 0.1 2.8 1.6 1.8 2.3 2.5 4.7 0.9 0.7 1.7 0.9 0.5 0 2.9 2 1.9 0.6 1.6 0 1.8 0.5 3.2 3.6 1.5 0.7 1.3 1.1 1.1 0 1.3-0.6 0.7 0 1.3 1 0.6 0.8 1 0.4 0.2 0.9 0.5 0.9-0.1 0.9 1.2 1.5 2.3 0.9 0.5 0.8 1.1 0.2 1.6-0.7 0.8 1.1 1.4 1.3 0.3 1.7 2.2 1.2 0.6 0.7 0.4 0.9-0.9 0.1-0.6 0.5-0.8 1.4-0.7 0.8 1.2 1.5 0.8 0.8 0.6 1.8 1.1 0.9 0.9 0.1 1.3 1.4 1.4 0.7 1.1 0 1.2 0.3 1.7-0.2 0.8-0.7 1.4-0.1 0.9 1.3 0.8 0.1 0.1 1.4 1.8 0.1 0.1 0.7 2 0.1 1 0.5 0.4-0.9 1.1 0.2 0.8 1 0.6 1.3 0.8 0 0.5 0.8 0 0.8-0.4 0.5 1 0.8 0.3 0.5-0.2 1 0.2 0.5 0.8 0.5-1.8 0.7-0.8-0.4-0.7-0.9-1.1-0.1-1.3 0.7 0.8 0.9 0.1 0.8 0.7 0 0.3 0.6 1.3 0.1 1.2 0.6 0.9-0.7 1.4-0.5 0.8 0.4 1-0.3 1.5 0.8 1.2-0.9 0.6 0.8 0.6-0.3 1.3 0.1 0.2-2 1.5 1.2 0.6 0 0.8-0.8 0.5 0.1 1.3 1.3 0.5-0.3 0.9 0.8 0.4-0.9 1.8 0.6-0.2-1-1.1-0.7 1.2-2.3 0.1-1.3 0.7 0.9 1.9-0.3 1.1 1.6 0.5-0.3 0.8 0.3 0.5 0.5 0.9-0.7-0.2-0.7 0.5-1.8 0.7-0.4 0.4-1 0-0.9 1.5 0.9 0.5-0.1 0.5-0.8-0.1-2 0.4-0.4 0.8 0.2 1.2 0 1.4-0.5 0.6-0.5 0.7-1.5 0.8-0.1 0.6 0.3 1.9 0.2 0.7-0.2 1.5-1.2 1.6-0.7 1.2-1.5 1.1 0 0.9-0.5 2 0 0.3 0.4 1.6 0.1 3.8-1 0.4-0.5 2.2 1.9 1.4 0 1.9 0.5 0.9-0.3 1.7-1.9-0.2-2.5 0.8-1.3 0.7-0.4 2-0.1 2.5 0 0.8 0.5 0.6 2.7 0.6 0.7 1.1 0.3 1.8 0.1 1.9 1.2 0.9 0.1 1.9 0.8 0.4 0 1.6 0.7 0.7 0.7 1 0.2 1.5 0 1.5 0.5 1.2 0.2 1-1.3 1-0.7 1.3-0.5 1.3 0.4 1.2 1.9 0.6 1.8 0.9 0.8 0.2 1 0.6 1 3.8 1.3 1.6 1 0.7 0.6 0.7 2.3 0.3 2.3 0.3 1.3-1.1 0.3-0.5 0.8 0.1 2-0.6 2.5-1.1 2.4-0.2 2-0.3 0.8-1.3 1.8-0.2 0.9 0.3 3.5-0.5 3-0.7 1.8-1.5 3.3-0.8 0.7-0.5 1.7 0.1 3.8-0.3 0.3-1.4 0.5-0.9 0.2-1.8 0.6-0.9-0.4-2 0-1.2 1.2-0.2 0.7-0.5 0-1.1 0.9 0.5 0.6 0.1 0.9-0.6 0.1-0.4 0.8 1.9 1.7 0 0.9-0.6 0.6-1 0.3-3 0-1-0.4-1.5-0.1-0.9 0.1-1.5 0.5-1 0.1 0.7 1.2 0 1.1 1.1 0.4-0.2 0.9 0.3 1.2-0.1 1.1 1.1 2.1-0.2 1.6-0.3 0.6-1.1 0.9-0.9-0.3-0.4 0.3-0.6 1.9 0.2 1-1.2 1.5-0.9 0.2-0.5 0.6-0.2 1 0.8 0.9-0.1 0.5-0.8 0.3-0.4-0.5-0.8-0.3-2.4-0.4-1.2 0.2-0.8-0.5-1.7 0-0.7-0.9-1 0.4 0 0.7-0.5 0.9-1.3 0.2-1.7-0.6-0.8-0.7-2.9 1.2-1.1 2.1 0.6 0.7 1 2.1 0 0.6 1.8 3.7 0.5 0.9 0.8 0.4 0.6-0.1 0.3 0.6-0.9 0.2 0 0.5-0.8 1.3 0.6 0.8 0.9 0.4 0.7-0.5 0.3 0.5-0.1 0.8 0.6 1.8-1.4-0.6-1.6 0.1-0.7 0.5-0.7 0-1.9-0.8-0.2 0.5 0 1.7 0.4 0.7 0.5 2.2-0.4 1.2 0 1.9 0.7 1.2 0 0.9 0.7 0.5 0.7 1.6 1.1 0 1.2 0.8 1.7 0.8 3.4 0 1.4-0.3 0.8 0.5 1.3 0.5 0.7 0 1.5-0.3 2.7 1-0.1 1.3-0.4 1.4-0.8 1.2-1 1.9-0.4 1.2 0.6 1.2 0 0.8-1 0.6-0.5 0.6 0.6 0.6 0.6 0.2 0 0.8 1.2 0.1 1.5 1.8 0.6 1.2 1.2 1.5 1.8 2.7 1.1 0.4 0.5 0.6 0.4 1.1-1.8 2.4-0.3 0.2-1.7 2.6-1.7 1.4 0 0.4-0.7 1.3-1.1 0.2-0.5-0.3-0.1-1.5-1.8-0.8-0.8-0.1-0.5 1.2-1 1.2-0.9 0-0.3 1-1.6 1.1-1.6 0-0.6 0.5 0.6 1.4-0.2 0.7-0.6 0.1-0.1 0.9-0.8 0.2-1.3-0.1-1.6 0.5-0.8 1.6-0.4-0.1-0.6-1-1.9-1-1.7-2.1-0.9 0.1-0.2-1-0.5-0.7-0.5-2-0.5-1.1 0-0.6 0.6-0.6-0.1-1.2-1-1.5 0.2-1.3-1.8 1.2-1.6 0-0.5 0.6-0.5 1.4-0.5 0.4-1.2-0.7-0.6-0.1-1.3 0.4-1.2 1.1-0.9-0.2-1 0.6-0.5 0.9-0.1 0.7-0.7 0-0.2 0.2-0.2 0.2-0.7 0.5-1.6 1.5-0.1-0.1-0.2-0.3-0.8-0.8 0.8-1-0.1-1.9 0.7-0.1 2.4-1.8-0.6-0.5-0.2-1.5 0.1-1.1 0.4-0.8-0.3-0.6 0.1-1.1-0.3-0.1-0.4 0-0.3 0-1.9 1.1 0.3 0.7-0.4 0.5-1.7 0.5-0.4 0.8-0.8 0.5-0.6 0-0.1-0.3-0.3-0.2-0.5-0.2-0.1 0-0.1 0-0.5 0.4-0.3 0.9-0.4 0.2-0.3-0.2 0-0.1-0.3-0.4-0.3 0-0.1 0.1-0.3 0.3-0.2 0.2-0.2 0.9-1.2-0.2 0.3 1.1-0.4 0.5-1.6 0-0.2-0.1 0-0.2-0.5-0.8-0.3-1-0.5-0.3-0.6-1.3-0.6-0.6 0.5-2.3 0-0.5-0.6-0.5-0.3 0-0.1 0-0.2 0-0.1-0.1-0.1 0-0.3-0.5-0.1-0.9-1.4-1.1-0.2 0-0.1 0.1-0.2 0-0.2-0.2-0.1-0.1-0.4-0.3-0.9-0.5 0.1-0.7 0.7-0.4 0.2-0.6-1.1-0.9-1.6-1.8-0.6-0.3-0.5 0-0.5-0.3 0 0.3-0.1 0.2-0.1 0.2-0.3 0.5-0.9 0.5-1.1 0.1-0.8 0.9-0.7 0.2-1 1.1-0.9 0.3-0.3-0.3-1 1-0.2 0-0.3-0.1-0.2 0-0.3-0.7-0.3 0.2-0.1 0-0.2 0-0.2-0.1 0-0.1-0.1 0-0.1-0.2-0.1 0-0.2 0.2-0.3 0.1-0.7 0.9-0.1 1.3-0.7 0.4-0.3-0.1-0.1-0.1-0.1-0.1-0.5-1.2-1.1-0.2-0.5-0.8-0.2 0.4-0.2 0.1-0.3 0-0.1-0.2 0-0.1-0.3-0.2 0-0.1 0.1-0.3-0.8-0.7-0.8-0.4-0.2-0.7-0.8 0.5-0.2-1.5-0.3-1-1.2-0.2-0.1 0.1-0.1 0.2-0.7 0.2-0.1-0.1 0-0.1-0.2-0.3-0.3 0-0.8-0.5-0.3 0.1-0.2 0.1-0.7 0.2-0.3-0.2-0.1 0 0-0.1-0.2-0.2-0.5-0.3-0.2-0.2-1.6-1-0.8-1.8-0.2-0.7-0.6-0.9-0.3 0.2-0.2 0.2-0.3-0.1-0.2-0.1-0.2-0.2-1-1.4-0.2-0.8 0.2-0.8 0.5-0.4-0.2-0.8 0.6-0.8-0.3-0.3-0.1 0-0.1 0.1-0.2 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0-0.2-0.1-0.2-0.2-0.2-0.3-0.3-0.1-0.5 0-0.2 0.2-0.4 0-0.3 0-0.2-0.1-0.1-0.2-0.3-0.2 0-0.1 0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.2 0-0.2-0.2-0.1 0-0.2 0.1-0.1 0.1-0.3 0-0.1 0-0.1-0.1-0.1 0-0.1-0.1-0.1 0-0.2-0.3-0.6-0.2 0-0.1 0-0.3 0.1-0.1-0.1-0.2 0-0.2-0.2-0.2-0.1-0.2-0.1 0-0.1 0-0.1 0-0.1 0-0.1-0.2-0.1-0.2-0.1-0.1-0.2 0-0.2 0-0.1-0.1-0.1-0.1-0.1 0-0.3-0.1-0.2-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.4-0.1-0.2 0-0.1 0.1-0.2 0-0.1-0.1-0.1-0.1-0.1-0.1-0.3 0-0.1 0-0.1 0-0.1-0.1-0.1-0.3-0.1-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0-0.2 0.1-0.1 0.2-0.4 0-0.1-0.1 0-0.1 0-0.3 0-0.2-0.1-0.3 0-0.2-0.2-0.4-0.1 0-0.3 0-0.3 0-0.3-0.2-0.3-0.5-0.1-0.1-0.1-0.1-0.1-0.3-0.2-0.1-0.2 0-0.1-0.1 0-0.2-0.1-0.3 0-0.1-0.1-0.1-0.2 0-0.2 0-0.4-0.5-0.2 0-0.4-0.1-0.1-0.2 0-0.2 0.1-0.1 0.1-0.2-0.1-0.2-0.2-0.2-0.2-0.3-0.1 0-0.1 0.1-0.1 0.2 0 0.4-0.2 0.2-0.3 0.2-0.4-0.1-0.3-0.1-0.2-0.1-0.3-0.2-0.2-0.1-0.2 0-0.1-0.3-0.1-0.3 0.1-0.2 0.1-0.1 0-0.1-0.1-0.1-0.1-0.1-0.3-0.3-0.2-0.3 0-0.2 0-0.1-0.2-0.1-0.2 0-0.2-0.1-0.1 0-0.1-0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0-0.1-0.1-0.1-0.1-0.1-0.1-0.2 0.1-0.1 0.2-0.1 0.2 0.2 1.2-1.6 0.2-0.8 0.6-0.4 0-0.6-1 0.6-0.1 0.2-0.5-0.2-0.5 0.1-0.1 0.4 0 0.1-0.2-0.2-0.4-0.3-0.4 0.1-0.1 1.5-0.6 0-0.3 0.3-0.4-0.5-0.6-0.1-0.1 0.1-0.2-0.1-0.4-0.1-0.5 0.2-0.6 0-0.5-0.3-0.9-0.3-0.3-0.4-0.4-0.6-0.1-0.9-0.1-0.9-0.8-0.6-0.9 0-0.8-0.3-0.3-0.6-0.5-1.4-1.3-0.2-0.4-1.1-1.3-0.2-0.6-0.2-0.4 0.1-0.4-0.3-1.1-0.2-0.3-0.4-0.1-0.4 0-0.7 0-0.1 0.1 0.1 0.3 0 0.4-0.2 0-1.1-0.2-0.9 0-0.5 0.2-0.8 0.1-0.4 0-0.3 0.3-0.1-0.4 0-0.3 0.2-0.4 0.2-0.6-0.2-0.4-0.5 0-0.3-0.2-0.5-0.8-0.3 0.1-0.2 0.1-0.6-0.2-0.7-0.5-0.3-0.6-0.4-0.8-0.1-0.3-0.4-0.4-0.7-0.2-0.4-1.1-0.3-0.5-0.1-0.6 0.2-0.4 0.1-0.5 0-1.4-0.1-0.2-0.2-0.1-0.4 0.1-0.5-0.2-0.3-0.4-2 1.9-0.5-0.7-0.4 0.2-0.7-0.2-0.2-0.4-0.4-0.1-0.2-0.1-0.4 0-0.3-0.3-0.3 0.1-0.1-0.4-0.2-0.4-0.1-0.5-0.1-0.3-0.3-0.4-0.4-0.1-0.2-0.2-0.3 0.3-0.6-0.1-0.9 0-0.2-0.3-0.2-0.5 0-0.3 0.2-0.4 0-0.1-0.3-0.3-0.1-0.4-0.2-0.4 0.2-0.2-0.1-0.3 0.1-0.3-0.4-0.3 0.2-0.2-0.2-0.3 2-3.7-2.2-2.6-0.2-0.1-0.3-0.5-0.2-0.3-0.2-0.1-0.3-0.1-0.1-0.1-0.3 0.2-0.2-0.3-0.1-0.2-0.1-0.1-0.1 0-0.2-0.3-0.1-0.1-0.1 0-0.1-0.1-0.2-0.2-0.2 0-0.3-0.1-0.1 0-0.1-0.2-0.1 0.1-0.2 0.1-0.2-0.1-0.1-0.1 0.2-0.4 0-0.2 0.1-0.1 0.1 0.1 0.1 0 0.2-0.1 0-0.1 0-0.1 0.1-0.1 0-0.2-0.1-0.1 0-0.1-0.1-0.1-0.1 0-0.1 0-0.1 0.1-0.7-0.2-0.3 0-0.3-0.1-0.1 0-0.1-0.1-0.1 0 0 0.3-0.1-0.2 0.7-0.7 0-0.2 0.1-0.2 0-0.1 0.3-0.2 0.1-0.2 0.5-0.2 0-0.1-0.1-0.2 0-0.2-0.1-0.1 0.3-0.3-0.1-0.2 0.1-0.2 0.1-0.1 0-0.1 0-0.2-0.2-0.5-0.2-0.4 0-0.4 0-0.3-0.1-0.2-0.1-0.4 0.1-0.1 0-0.2-0.1-0.1-0.2-0.3-0.1-0.2-0.1 0-0.1-0.1-0.2-0.1 0-0.2-0.4-0.1-0.2-0.2-0.3 0 0-0.1-0.4-0.3-0.3-0.2 0-0.1-0.4 0.1-0.3-0.1-0.2 0.1-0.2-0.1 0-0.4 0.1-0.1-0.2-0.4 0.1-0.3-0.2-0.2-0.2-0.1-0.4-0.2-0.1 0 0-0.2-0.1-0.2-0.3-0.1-0.1-0.5-0.5-0.1-0.3 0.2-0.4 0.1 0.2 0.3 0.2 0 0.1 0.1-0.1 0.1 0 0.2-0.1 0.1-0.1 0.1-0.1 0.1 0 0.2-0.1 0 0 0.2 0.1 0.2-0.1 0.2 0.1 0.4-0.1 0.1 0.1 0.3 0 0.2-0.2 0.1-0.3 0.1 0.1-0.3-0.2-0.2-0.5-0.4-0.6-0.4-0.5-0.3-0.7-0.3-0.9-0.3-0.5 0-0.2 0-0.9-0.4-1-0.4-0.4-0.7-0.5-0.6-0.6-0.3-0.6 0-0.4-0.2-0.6 1.1-0.2-1 0.2-0.6-0.1-0.4 0.1-1.7 0.4-1 0.4-0.9-1.4-0.6-1.4-1.2-1.1-0.3-1.8-1.8-0.4-0.6-0.5 0.4-0.2 0.2-0.5 0.1-0.8 0.5-1.5 0.6-1.6 1.4-1-0.1-0.4-0.1-0.5-0.9-0.4-0.5-0.8 0-1.5-0.7-2-0.3-0.9 0.1-1.5-0.2-0.8 0.1-2.5 0.7-0.2 0.1z",
    },
    names: {
        1: "Andaman And Nicobar",
        2: "Andhra Pradesh",
        3: "Arunachal Pradesh",
        4: "Assam",
        5: "Bihar",
        6: "Chandigarh",
        7: "Chhattisgarh",
        8: "Dadra And Nagar Haveli",
        9: "Daman And Diu",
        10: "Delhi",
        11: "Goa",
        12: "Gujarat",
        13: "Haryana",
        14: "Himachal Pradesh",
        16: "Jharkhand",
        17: "Karnataka",
        18: "Kerala",
        19: "Lakshadweep",
        20: "Madhya Pradesh",
        21: "Maharashtra",
        22: "Manipur",
        23: "Meghalaya",
        24: "Mizoram",
        25: "Nagaland",
        26: "Orissa",
        27: "Puducherry",
        28: "Punjab",
        29: "Rajasthan",
        30: "Sikkim",
        31: "Tamil Nadu",
        32: "Tripura",
        33: "Uttar Pradesh",
        34: "Uttaranchal",
        35: "West Bengal",
        36: "Jammu And Kashmir",
        37: "Telangana",
        38: "Ladakh",
    },
    default_regions: {},
    proj: "mercator",
    default_labels: {},
    proj_coordinates: [
        { x: 50.9, y: 1082.7, lat: 8.27, lng: 69.648 },
        { x: 549.9, y: 654.3, lat: 20.4, lng: 84.26 },
        { x: 949.1, y: 65.3, lat: 35.562, lng: 95.95 },
    ],
    initial_view: { x: -10, y: 1, x2: 1020, y2: 1146 },
};

/* Map logic - do not edit */
!(function(e) {
    var t = {};
    (function() {
            var e,
                t,
                o,
                i,
                n,
                a,
                r,
                s,
                l,
                c,
                m,
                u = this || Function("return this")(),
                p = (function() {
                    "use strict";
                    var e,
                        t,
                        o,
                        i,
                        n,
                        a = "linear",
                        r =
                        Date.now ||
                        function() {
                            return +new Date();
                        },
                        s = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : r;

                    function l() {}

                    function c(e, t) {
                        for (var o in e) Object.hasOwnProperty.call(e, o) && t(o);
                    }

                    function m(e, t) {
                        return (
                            c(t, function(o) {
                                e[o] = t[o];
                            }),
                            e
                        );
                    }

                    function p(e, t) {
                        c(t, function(o) {
                            void 0 === e[o] && (e[o] = t[o]);
                        });
                    }

                    function d(t, o, i, n, a, r, s) {
                        var l,
                            c,
                            m = t < r ? 0 : (t - r) / a;
                        for (l in o)
                            o.hasOwnProperty(l) &&
                            ((c = "function" == typeof(c = s[l]) ? c : e[c]),
                                (o[l] = _(i[l], n[l], c, m)));
                        return o;
                    }

                    function _(e, t, o, i) {
                        return e + (t - e) * o(i);
                    }

                    function h(e, t) {
                        var o = y.prototype.filter,
                            i = e._filterArgs;
                        c(o, function(n) {
                            void 0 !== o[n][t] && o[n][t].apply(e, i);
                        });
                    }

                    function f(e, t, a, r, l, c, m, u, p, _, f) {
                        (n = t + a + r),
                        (o = Math.min(f || s(), n)),
                        (i = n <= o),
                        (n = r - (n - o)),
                        e.isPlaying() &&
                            (i ?
                                (p(m, e._attachment, n), e.stop(!0)) :
                                ((e._scheduleId = _(e._timeoutHandler, 1e3 / 60)),
                                    h(e, "beforeTween"),
                                    o < t + a ?
                                    d(1, l, c, m, 1, 1, u) :
                                    d(o, l, c, m, r, t + a, u),
                                    h(e, "afterTween"),
                                    p(l, e._attachment, n)));
                    }

                    function v(e, t) {
                        var o = {},
                            i = typeof t;
                        return (
                            c(
                                e,
                                "string" == i || "function" == i ?

                                function(e) {
                                    o[e] = t;
                                } :
                                function(e) {
                                    o[e] || (o[e] = t[e] || a);
                                }
                            ),
                            o
                        );
                    }

                    function y(e, o) {
                        (this._currentState = e || {}),
                        (this._configured = !1),
                        (this._scheduleFunction = t),
                        void 0 !== o && this.setConfig(o);
                    }
                    return (
                        (t =
                            ("undefined" != typeof window &&
                                (window.requestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    (window.mozCancelRequestAnimationFrame &&
                                        window.mozRequestAnimationFrame))) ||
                            setTimeout),
                        (y.prototype.tween = function(e) {
                            return this._isTweening ?
                                this :
                                ((void 0 === e && this._configured) || this.setConfig(e),
                                    (this._timestamp = s()),
                                    this._start(this.get(), this._attachment),
                                    this.resume());
                        }),
                        (y.prototype.setConfig = function(e) {
                            (e = e || {}),
                            (this._configured = !0),
                            (this._attachment = e.attachment),
                            (this._pausedAtTime = null),
                            (this._scheduleId = null),
                            (this._delay = e.delay || 0),
                            (this._start = e.start || l),
                            (this._step = e.step || l),
                            (this._finish = e.finish || l),
                            (this._duration = e.duration || 500),
                            (this._currentState = m({}, e.from || this.get())),
                            (this._originalState = this.get()),
                            (this._targetState = m({}, e.to || this.get()));
                            var t = this;
                            this._timeoutHandler = function() {
                                f(
                                    t,
                                    t._timestamp,
                                    t._delay,
                                    t._duration,
                                    t._currentState,
                                    t._originalState,
                                    t._targetState,
                                    t._easing,
                                    t._step,
                                    t._scheduleFunction
                                );
                            };
                            var o = this._currentState,
                                i = this._targetState;
                            return (
                                p(i, o),
                                (this._easing = v(o, e.easing || a)),
                                (this._filterArgs = [o, this._originalState, i, this._easing]),
                                h(this, "tweenCreated"),
                                this
                            );
                        }),
                        (y.prototype.get = function() {
                            return m({}, this._currentState);
                        }),
                        (y.prototype.set = function(e) {
                            this._currentState = e;
                        }),
                        (y.prototype.pause = function() {
                            return (this._pausedAtTime = s()), (this._isPaused = !0), this;
                        }),
                        (y.prototype.resume = function() {
                            return (
                                this._isPaused && (this._timestamp += s() - this._pausedAtTime),
                                (this._isPaused = !1),
                                (this._isTweening = !0),
                                this._timeoutHandler(),
                                this
                            );
                        }),
                        (y.prototype.seek = function(e) {
                            e = Math.max(e, 0);
                            var t = s();
                            return (
                                this._timestamp + e === 0 ||
                                ((this._timestamp = t - e),
                                    this.isPlaying() ||
                                    ((this._isTweening = !0),
                                        (this._isPaused = !1),
                                        f(
                                            this,
                                            this._timestamp,
                                            this._delay,
                                            this._duration,
                                            this._currentState,
                                            this._originalState,
                                            this._targetState,
                                            this._easing,
                                            this._step,
                                            this._scheduleFunction,
                                            t
                                        ),
                                        this.pause())),
                                this
                            );
                        }),
                        (y.prototype.stop = function(e) {
                            return (
                                (this._isTweening = !1),
                                (this._isPaused = !1),
                                (this._timeoutHandler = l),
                                (
                                    u.cancelAnimationFrame ||
                                    u.webkitCancelAnimationFrame ||
                                    u.oCancelAnimationFrame ||
                                    u.msCancelAnimationFrame ||
                                    u.mozCancelRequestAnimationFrame ||
                                    u.clearTimeout
                                )(this._scheduleId),
                                e &&
                                (h(this, "beforeTween"),
                                    d(
                                        1,
                                        this._currentState,
                                        this._originalState,
                                        this._targetState,
                                        1,
                                        0,
                                        this._easing
                                    ),
                                    h(this, "afterTween"),
                                    h(this, "afterTweenEnd"),
                                    this._finish.call(this, this._currentState, this._attachment)),
                                this
                            );
                        }),
                        (y.prototype.isPlaying = function() {
                            return this._isTweening && !this._isPaused;
                        }),
                        (y.prototype.setScheduleFunction = function(e) {
                            this._scheduleFunction = e;
                        }),
                        (y.prototype.dispose = function() {
                            for (var e in this) this.hasOwnProperty(e) && delete this[e];
                        }),
                        (y.prototype.filter = {}),
                        (e = y.prototype.formula = {
                            linear: function(e) {
                                return e;
                            },
                        }),
                        m(y, {
                            now: s,
                            each: c,
                            tweenProps: d,
                            tweenProp: _,
                            applyFilter: h,
                            shallowCopy: m,
                            defaults: p,
                            composeEasingObject: v,
                        }),
                        "function" == typeof SHIFTY_DEBUG_NOW && (u.timeoutHandler = f),
                        (u.Tweenable = y)
                    );
                })();

            function d(e) {
                t.each(e, function(t) {
                    var o = e[t];
                    "string" == typeof o && o.match(s) && (e[t] = f(s, o, _));
                });
            }

            function _(e) {
                return (
                    "rgb(" +
                    (e = (function(e) {
                        return (
                            3 === (e = e.replace(/#/, "")).length &&
                            (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                            (c[0] = h(e.substr(0, 2))),
                            (c[1] = h(e.substr(2, 2))),
                            (c[2] = h(e.substr(4, 2))),
                            c
                        );
                    })(e))[0] +
                    "," +
                    e[1] +
                    "," +
                    e[2] +
                    ")"
                );
            }

            function h(e) {
                return parseInt(e, 16);
            }

            function f(e, t, o) {
                var i = t.match(e),
                    n = t.replace(e, l);
                if (i)
                    for (var a, r = i.length, s = 0; s < r; s++)
                        (a = i.shift()), (n = n.replace(l, o(a)));
                return n;
            }

            function v(e) {
                for (
                    var t = e.match(n), o = t.length, i = e.match(r)[0], a = 0; a < o; a++
                )
                    i += parseInt(t[a], 10) + ",";
                return i.slice(0, -1) + ")";
            }

            function y(e, o) {
                t.each(o, function(t) {
                    for (var i = b(e[t]), n = i.length, a = 0; a < n; a++)
                        e[o[t].chunkNames[a]] = +i[a];
                    delete e[t];
                });
            }

            function g(e, o) {
                t.each(o, function(t) {
                    var i = e[t],
                        n = (function(e, t) {
                            m.length = 0;
                            for (var o = t.length, i = 0; i < o; i++) m.push(e[t[i]]);
                            return m;
                        })(
                            (function(e, t) {
                                for (var o, i = {}, n = t.length, a = 0; a < n; a++)
                                    (i[(o = t[a])] = e[o]), delete e[o];
                                return i;
                            })(e, o[t].chunkNames),
                            o[t].chunkNames
                        );
                    i = (function(e, t) {
                        for (var o = e, i = t.length, n = 0; n < i; n++)
                            o = o.replace(l, +t[n].toFixed(4));
                        return o;
                    })(o[t].formatString, n);
                    e[t] = f(a, i, v);
                });
            }

            function b(e) {
                return e.match(n);
            }
            p.shallowCopy(p.prototype.formula, {
                    easeInQuad: function(e) {
                        return Math.pow(e, 2);
                    },
                    easeOutQuad: function(e) {
                        return -(Math.pow(e - 1, 2) - 1);
                    },
                    easeInOutQuad: function(e) {
                        return (e /= 0.5) < 1 ?
                            0.5 * Math.pow(e, 2) :
                            -0.5 * ((e -= 2) * e - 2);
                    },
                    easeInCubic: function(e) {
                        return Math.pow(e, 3);
                    },
                    easeOutCubic: function(e) {
                        return Math.pow(e - 1, 3) + 1;
                    },
                    easeInOutCubic: function(e) {
                        return (e /= 0.5) < 1 ?
                            0.5 * Math.pow(e, 3) :
                            0.5 * (Math.pow(e - 2, 3) + 2);
                    },
                    easeInQuart: function(e) {
                        return Math.pow(e, 4);
                    },
                    easeOutQuart: function(e) {
                        return -(Math.pow(e - 1, 4) - 1);
                    },
                    easeInOutQuart: function(e) {
                        return (e /= 0.5) < 1 ?
                            0.5 * Math.pow(e, 4) :
                            -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                    },
                    easeInQuint: function(e) {
                        return Math.pow(e, 5);
                    },
                    easeOutQuint: function(e) {
                        return Math.pow(e - 1, 5) + 1;
                    },
                    easeInOutQuint: function(e) {
                        return (e /= 0.5) < 1 ?
                            0.5 * Math.pow(e, 5) :
                            0.5 * (Math.pow(e - 2, 5) + 2);
                    },
                    easeInSine: function(e) {
                        return 1 - Math.cos(e * (Math.PI / 2));
                    },
                    easeOutSine: function(e) {
                        return Math.sin(e * (Math.PI / 2));
                    },
                    easeInOutSine: function(e) {
                        return -0.5 * (Math.cos(Math.PI * e) - 1);
                    },
                    easeInExpo: function(e) {
                        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
                    },
                    easeOutExpo: function(e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                    },
                    easeInOutExpo: function(e) {
                        return 0 === e ?
                            0 :
                            1 === e ?
                            1 :
                            (e /= 0.5) < 1 ?
                            0.5 * Math.pow(2, 10 * (e - 1)) :
                            0.5 * (2 - Math.pow(2, -10 * --e));
                    },
                    easeInCirc: function(e) {
                        return -(Math.sqrt(1 - e * e) - 1);
                    },
                    easeOutCirc: function(e) {
                        return Math.sqrt(1 - Math.pow(e - 1, 2));
                    },
                    easeInOutCirc: function(e) {
                        return (e /= 0.5) < 1 ?
                            -0.5 * (Math.sqrt(1 - e * e) - 1) :
                            0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                    },
                    easeOutBounce: function(e) {
                        return e < 1 / 2.75 ?
                            7.5625 * e * e :
                            e < 2 / 2.75 ?
                            7.5625 * (e -= 1.5 / 2.75) * e + 0.75 :
                            e < 2.5 / 2.75 ?
                            7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 :
                            7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                    },
                    easeInBack: function(e) {
                        return e * e * (2.70158 * e - 1.70158);
                    },
                    easeOutBack: function(e) {
                        return --e * e * (2.70158 * e + 1.70158) + 1;
                    },
                    easeInOutBack: function(e) {
                        var t = 1.70158;
                        return (e /= 0.5) < 1 ?
                            e * e * ((1 + (t *= 1.525)) * e - t) * 0.5 :
                            0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                    },
                    elastic: function(e) {
                        return (-1 *
                            Math.pow(4, -8 * e) *
                            Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
                            1
                        );
                    },
                    swingFromTo: function(e) {
                        var t = 1.70158;
                        return (e /= 0.5) < 1 ?
                            e * e * ((1 + (t *= 1.525)) * e - t) * 0.5 :
                            0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                    },
                    swingFrom: function(e) {
                        return e * e * (2.70158 * e - 1.70158);
                    },
                    swingTo: function(e) {
                        return --e * e * (2.70158 * e + 1.70158) + 1;
                    },
                    bounce: function(e) {
                        return e < 1 / 2.75 ?
                            7.5625 * e * e :
                            e < 2 / 2.75 ?
                            7.5625 * (e -= 1.5 / 2.75) * e + 0.75 :
                            e < 2.5 / 2.75 ?
                            7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 :
                            7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                    },
                    bouncePast: function(e) {
                        return e < 1 / 2.75 ?
                            7.5625 * e * e :
                            e < 2 / 2.75 ?
                            2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) :
                            e < 2.5 / 2.75 ?
                            2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) :
                            2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                    },
                    easeFromTo: function(e) {
                        return (e /= 0.5) < 1 ?
                            0.5 * Math.pow(e, 4) :
                            -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                    },
                    easeFrom: function(e) {
                        return Math.pow(e, 4);
                    },
                    easeTo: function(e) {
                        return Math.pow(e, 0.25);
                    },
                }),
                (p.setBezierFunction = function(e, t, o, i, n) {
                    var a,
                        r,
                        s,
                        l,
                        c =
                        ((a = t),
                            (r = o),
                            (s = i),
                            (l = n),
                            function(e) {
                                return (function(e, t, o, i, n, a) {
                                    var r,
                                        s,
                                        l,
                                        c,
                                        m = 0,
                                        u = 0,
                                        p = 0;

                                    function d(e) {
                                        return ((m * e + u) * e + p) * e;
                                    }

                                    function _(e) {
                                        return 0 <= e ? e : 0 - e;
                                    }
                                    return (
                                        (m = 1 - (p = 3 * t) - (u = 3 * (i - t) - p)),
                                        (s = 1 - (c = 3 * o) - (l = 3 * (n - o) - c)),
                                        (r = (function(e, t) {
                                            var o, i, n, a, r, s;
                                            for (n = e, s = 0; s < 8; s++) {
                                                if (_((a = d(n) - e)) < t) return n;
                                                if (_((r = (3 * m * n + 2 * u) * n + p)) < 1e-6) break;
                                                n -= a / r;
                                            }
                                            if ((n = e) < (o = 0)) return o;
                                            if ((i = 1) < n) return i;
                                            for (; o < i;) {
                                                if (_((a = d(n)) - e) < t) return n;
                                                a < e ? (o = n) : (i = n), (n = 0.5 * (i - o) + o);
                                            }
                                            return n;
                                        })(e, (r = 1 / (200 * a)))),
                                        ((s * r + l) * r + c) * r
                                    );
                                })(e, a, r, s, l, 1);
                            });
                    return (
                        (c.displayName = e),
                        (c.x1 = t),
                        (c.y1 = o),
                        (c.x2 = i),
                        (c.y2 = n),
                        (p.prototype.formula[e] = c)
                    );
                }),
                (p.unsetBezierFunction = function(e) {
                    delete p.prototype.formula[e];
                }),
                ((e = new p())._filterArgs = []),
                (p.interpolate = function(t, o, i, n, a) {
                    var r = p.shallowCopy({}, t),
                        s = a || 0;
                    a = p.composeEasingObject(t, n || "linear");
                    return (
                        e.set({}),
                        ((n = e._filterArgs).length = 0),
                        (n[0] = r),
                        (n[1] = t),
                        (n[2] = o),
                        (n[3] = a),
                        p.applyFilter(e, "tweenCreated"),
                        p.applyFilter(e, "beforeTween"),
                        (t = t),
                        (r = r),
                        (o = o),
                        (i = i),
                        (a = a),
                        (s = s),
                        (a = p.tweenProps(i, r, t, o, 1, s, a)),
                        p.applyFilter(e, "afterTween"),
                        a
                    );
                }),
                (t = p),
                (o = /(\d|\-|\.)/),
                (i = /([^\-0-9\.]+)/g),
                (n = /[0-9.\-]+/g),
                (a = new RegExp(
                    "rgb\\(" +
                    n.source +
                    /,\s*/.source +
                    n.source +
                    /,\s*/.source +
                    n.source +
                    "\\)",
                    "g"
                )),
                (r = /^.*\(/),
                (s = /#([0-9]|[a-f]){3,6}/gi),
                (l = "VAL"),
                (c = []),
                (m = []),
                (t.prototype.filter.token = {
                    tweenCreated: function(e, n, a, r) {
                        d(e),
                            d(n),
                            d(a),
                            (this._tokenData = (function(e) {
                                var n = {};
                                return (
                                    t.each(e, function(t) {
                                        var a,
                                            r,
                                            s = e[t];
                                        "string" == typeof s &&
                                            ((a = b(s)),
                                                (n[t] = {
                                                    formatString:
                                                        ((s = (r = s).match(i)) ?
                                                            (1 !== s.length && !r.charAt(0).match(o)) ||
                                                            s.unshift("") :
                                                            (s = ["", ""]),
                                                            s.join(l)),
                                                    chunkNames: (function(e, t) {
                                                        for (var o = [], i = e.length, n = 0; n < i; n++)
                                                            o.push("_" + t + "_" + n);
                                                        return o;
                                                    })(a, t),
                                                }));
                                    }),
                                    n
                                );
                            })(e));
                    },
                    beforeTween: function(e, o, i, n) {
                        var a, r;
                        (a = n),
                        (r = this._tokenData),
                        t.each(r, function(e) {
                                var t = r[e].chunkNames,
                                    o = t.length,
                                    i = a[e];
                                if ("string" == typeof i)
                                    for (
                                        var n = i.split(" "), s = n[n.length - 1], l = 0; l < o; l++
                                    )
                                        a[t[l]] = n[l] || s;
                                else
                                    for (l = 0; l < o; l++) a[t[l]] = i;
                                delete a[e];
                            }),
                            y(e, this._tokenData),
                            y(o, this._tokenData),
                            y(i, this._tokenData);
                    },
                    afterTween: function(e, o, i, n) {
                        var a, r;
                        g(e, this._tokenData),
                            g(o, this._tokenData),
                            g(i, this._tokenData),
                            (a = n),
                            (r = this._tokenData),
                            t.each(r, function(e) {
                                var t = r[e].chunkNames,
                                    o = t.length,
                                    i = a[t[0]];
                                if ("string" == typeof i) {
                                    for (var n = "", s = 0; s < o; s++)
                                        (n += " " + a[t[s]]), delete a[t[s]];
                                    a[e] = n.substr(1);
                                } else a[e] = i;
                            });
                    },
                });
        }.call(null),
        (function(e, t) {
            (e = e || "docReady"), (t = t || window);
            var o = [],
                i = !1,
                n = !1;

            function a() {
                if (!i) {
                    i = !0;
                    for (var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
                    o = [];
                }
            }

            function r() {
                "complete" === document.readyState && a();
            }
            t[e] = function(e, t) {
                i
                    ?
                    setTimeout(function() {
                        e(t);
                    }, 1) :
                    (o.push({ fn: e, ctx: t }),
                        "complete" === document.readyState ||
                        (!document.attachEvent && "interactive" === document.readyState) ?
                        setTimeout(a, 1) :
                        n ||
                        (document.addEventListener ?
                            (document.addEventListener("DOMContentLoaded", a, !1),
                                window.addEventListener("load", a, !1)) :
                            (document.attachEvent("onreadystatechange", r),
                                window.attachEvent("onload", a)),
                            (n = !0)));
            };
        })("docReady", t),
        (function(e, t, o) {
            (void 0 !== e && void 0 !== e.log) || ((e = {}).log = function() {}),
            "function" != typeof t.create &&
                (t.create = function(e) {
                    function t() {}
                    return (t.prototype = e), new t();
                }),
                o.prototype.forEach ||
                (o.prototype.forEach = function(e, t) {
                    for (var o = 0, i = this.length; o < i; ++o)
                        e.call(t, this[o], o, this);
                });
        })(window.console, window.Object, window.Array),
        (Object.size = function(e) {
            var t,
                o = 0;
            for (t in e) e.hasOwnProperty(t) && o++;
            return o;
        }));
    var o = (function() {
            var e = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera\sMini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (
                        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
                    );
                },
            };

            function t(e, t) {
                var o = e[0],
                    i = e[1],
                    n = Raphael.transformPath("M" + o + "," + i, t).toString(),
                    a = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(n);
                return [a[1], a[2]];
            }

            function i(e) {
                return Math.min.apply(Math, e);
            }

            function n(e) {
                return Math.max.apply(Math, e);
            }
            return {
                min: i,
                max: n,
                addEvent: function(e, t, o) {
                    e.attachEvent ?
                        ((e["e" + t + o] = o),
                            (e[t + o] = function() {
                                e["e" + t + o](window.event);
                            }),
                            e.attachEvent("on" + t, e[t + o])) :
                        e.addEventListener(t, o, !1);
                },
                isMobile: e,
                linePath: function(e, t, o, i) {
                    return "M" + e + " " + t + " L" + o + " " + i;
                },
                clone: function e(t) {
                    if ("object" != typeof t || null === t) return t;
                    var o = t.constructor();
                    for (var i in t) o[i] = e(t[i]);
                    return o;
                },
                isFunction: function(e) {
                    return e && "[object Function]" === {}.toString.call(e);
                },
                findPos: function(e) {
                    function t(e, t) {
                        if (e.currentStyle) var o = e.currentStyle[t];
                        else
                            window.getComputedStyle &&
                            (o = window.getComputedStyle(e, null)[t]);
                        return o;
                    }
                    var o = t(document.body, "position");
                    "relative" == o && (document.body.style.position = "static"),
                        t(document.body, "position");
                    for (
                        var i, n, a = (i = 0), r = e, s = !1;
                        (r = r.parentNode) && r != document.body;

                    )
                        (a -= r.scrollLeft || 0),
                        (i -= r.scrollTop || 0),
                        "fixed" == t(r, "position") && (s = !0);
                    if (s && !window.opera) {
                        var l =
                            (n = document.getElementsByTagName("html")[0]).scrollTop &&
                            document.documentElement.scrollTop ?
                            [n.scrollLeft, n.scrollTop] :
                            n.scrollTop || document.documentElement.scrollTop ?
                            [
                                n.scrollLeft + document.documentElement.scrollLeft,
                                n.scrollTop + document.documentElement.scrollTop,
                            ] :
                            document.body.scrollTop ?
                            [document.body.scrollLeft, document.body.scrollTop] :
                            [0, 0];
                        (a += l[0]), (i += l[1]);
                    }
                    do {
                        (a += e.offsetLeft), (i += e.offsetTop);
                    } while ((e = e.offsetParent));
                    return (document.body.style.position = o), [a, i];
                },
                replaceAll: function(e, t, o) {
                    return e.replace(new RegExp(t, "g"), o);
                },
                rotate_bbox: function(e, o) {
                    var a = [e.x, e.y],
                        r = [e.x2, e.y],
                        s = [e.x, e.y2],
                        l = [e.x2, e.y2],
                        c = t(a, o),
                        m = t(r, o),
                        u = t(s, o),
                        p = t(l, o),
                        d = [c[0], m[0], u[0], p[0]],
                        _ = [c[1], m[1], u[1], p[1]],
                        h = i(d),
                        f = n(d),
                        v = i(_),
                        y = n(_);
                    return { x: h, y: v, x2: f, y2: y, width: f - h, height: y - v };
                },
                rotate: t,
                bbox_union: function(e) {
                    for (var t = [], i = [], n = [], a = [], r = 0; r < e.length; r++) {
                        var s = e[r];
                        t.push(s.x), i.push(s.x2), a.push(s.y), n.push(s.y2);
                    }
                    var l = o.min(t),
                        c = o.max(i),
                        m = o.min(a),
                        u = o.max(n);
                    return { x: l, x2: c, y: m, y2: u, width: c - l, height: u - m };
                },
                distance: function(e, t) {
                    var o = e.x,
                        i = e.y,
                        n = t.x - o,
                        a = t.y - i;
                    return Math.sqrt(a * a + n * n);
                },
                x_in_array: function(e, t) {
                    for (var o = t.length; o--;)
                        if (t[o] === e) return !0;
                    return !1;
                },
                clear_sets: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t];
                        o.forEach(function(e) {
                                e.remove();
                            }),
                            o.splice(0, o.length);
                    }
                },
                delete_element: function(e) {
                    e.parentNode && e.parentNode.removeChild(e);
                },
                to_float: function(e) {
                    var t = parseFloat(e);
                    return !isNaN(t) && t;
                },
                callback_closure: function(e, t) {
                    return function() {
                        return t(e);
                    };
                },
                new_style: function(e) {
                    var t = document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    return (
                        (o.type = "text/css"),
                        (o.media = "screen"),
                        o.styleSheet ?
                        (o.styleSheet.cssText = e) :
                        o.appendChild(document.createTextNode(e)),
                        t.appendChild(o),
                        o
                    );
                },
            };
        })(),
        i = !!window[e + "_mapdata"] && window[e + "_mapdata"],
        n = !!window[e + "_mapinfo"] && window[e + "_mapinfo"],
        a = e.substring(0, e.length - 3).replace("simplemaps_", ""),
        r = !0,
        s = !1,
        l = !1,
        c = [],
        m = {
            rounded_box: "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
            plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
            minus: "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
            arrow: "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z",
        },
        u = {
            mapdata: i,
            mapinfo: n,
            load: p,
            hooks: o.clone({
                over_state: !1,
                over_region: !1,
                over_location: !1,
                out_state: !1,
                out_region: !1,
                out_location: !1,
                click_state: !1,
                click_region: !1,
                click_location: !1,
                close_popup: !1,
                zoomable_click_state: !1,
                zoomable_click_region: !1,
                complete: !1,
                refresh_complete: !1,
                zooming_complete: !1,
                back: !1,
                ready: !1,
                click_xy: !1,
            }),
            plugin_hooks: o.clone({
                over_state: [],
                over_region: [],
                over_location: [],
                out_state: [],
                out_region: [],
                out_location: [],
                click_state: [],
                click_region: [],
                click_location: [],
                preclick_state: [],
                preclick_region: [],
                preclick_location: [],
                close_popup: [],
                zoomable_click_state: [],
                zoomable_click_region: [],
                complete: [],
                refresh_complete: [],
                zooming_complete: [],
                back: [],
                ready: [],
                click_xy: [],
            }),
            copy: function() {
                var e = {
                    mapdata: o.clone(this.mapdata),
                    mapinfo: o.clone(this.mapinfo),
                    hooks: o.clone(this.hooks),
                    plugin_hooks: o.clone(this.plugin_hooks),
                    copy: this.copy,
                    load: p,
                };
                return c.push(e), e;
            },
            create: function() {
                var t = {
                    mapdata: !!window[e + "_mapdata"] && o.clone(window[e + "_mapdata"]),
                    mapinfo: !!window[e + "_mapinfo"] && o.clone(window[e + "_mapinfo"]),
                    hooks: o.clone(this.hooks),
                    plugin_hooks: o.clone(this.plugin_hooks),
                    copy: this.copy,
                    load: p,
                };
                return c.push(t), t;
            },
            mobile_device: !!o.isMobile.any(),
            loaded: !1,
        };

    function p() {
        var e = this,
            i = e.mapdata,
            n = e.mapinfo;
        if (i && n) {
            var c,
                u,
                p,
                d,
                _,
                h,
                f,
                v,
                y,
                g,
                b,
                x,
                w,
                k,
                z,
                M,
                E,
                A,
                C,
                T,
                S,
                O,
                B,
                F,
                I,
                P,
                R,
                j,
                N,
                L,
                D,
                H,
                q,
                W,
                Y,
                V,
                Q,
                X,
                U,
                Z,
                G,
                J,
                K,
                $,
                ee,
                te,
                oe,
                ie,
                ne,
                ae,
                re,
                se = e.hooks,
                le = e.plugin_hooks,
                ce = void 0 === i.main_settings.div ? "map" : i.main_settings.div;
            if (!document.getElementById(ce))
                return (
                    console.log(
                        "Can't find target for map #" +
                        ce +
                        ".  Check mapdata.main_settings.div"
                    ), !1
                );
            var me,
                ue,
                pe,
                de,
                _e,
                he,
                fe,
                ve,
                ye,
                ge,
                be,
                xe,
                we,
                ke,
                ze,
                Me,
                Ee,
                Ae,
                Ce,
                Te,
                Se,
                Oe,
                Be,
                Fe,
                Ie,
                Pe,
                Re,
                je,
                Ne,
                Le,
                De,
                He,
                qe,
                We,
                Ye,
                Ve,
                Qe,
                Xe,
                Ue,
                Ze,
                Ge,
                Je,
                Ke,
                $e,
                et,
                tt,
                ot,
                it,
                nt,
                at,
                rt,
                st,
                lt,
                ct,
                mt,
                ut,
                pt,
                dt,
                _t,
                ht,
                ft,
                vt,
                yt,
                gt,
                bt,
                xt,
                wt,
                kt,
                zt,
                Mt,
                Et,
                At,
                Ct,
                Tt,
                St,
                Ot,
                Bt,
                Ft,
                It,
                Pt,
                Rt,
                jt,
                Nt = !1,
                Lt = !1,
                Dt = !1,
                Ht = !1,
                qt = !1,
                Wt = !1,
                Yt = !1,
                Vt = !1,
                Qt = !1,
                Xt = {
                    triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
                    diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
                    marker: "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
                    heart: "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
                    star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377",
                },
                Ut = function(e, t, o, i) {
                    null == o && (o = !1),
                        null == i && (i = !1),
                        i ||
                        (i =
                            "over" == t ?
                            e.sm.over_attributes :
                            "adjacent" == t ?
                            e.sm.adjacent_attributes :
                            e.sm.attributes), !o || e.sm.image ? e.attr(i) : e.animate(i, D);
                },
                Zt = function(e, t, i) {
                    if ((null == i && (i = !1), "state" == i)) var n = e.sm.parent;
                    else if ("region" == i) n = vt[e.sm.parent.sm.region];
                    else n = Vo(e.sm.parent);
                    var a;
                    if (
                        ((a =
                                "over" == t ?
                                o.clone(n.sm.over_attributes) :
                                "adjacent" == t ?
                                o.clone(n.sm.adjacent_attributes) :
                                o.clone(n.sm.attributes)),
                            n.sm.image && "state" == n.sm.type)
                    ) {
                        var r = ot[n.sm.id];
                        a.fill = "over" == t ? r.hover_color : r.color;
                    }
                    Ut(e, t, !1, a);
                },
                Gt = !1,
                Jt = function(e, t) {
                    if (e) {
                        var i = !!(e.sm.image || (me && g));
                        if ((jt.hide(), Qo(e)))
                            e.sm.ignore_hover || e.animate(e.sm.attributes, D, n),
                            e.animate(e.sm.adjacent_attributes, D, n),
                            Xo(e, "out", !0);
                        else {
                            if (ie && "location" == e.sm.type && "image" == e.sm.shape_type)
                                return;
                            if (!e || !e.sm) return;
                            e.sm.ignore_hover ||
                                (i ?
                                    (e.attr(e.sm.attributes), n()) :
                                    e.animate(e.sm.attributes, D, n)),
                                Xo(e, "out");
                        }
                    } else t();

                    function n() {
                        o.isFunction(t) && t();
                    }
                },
                Kt = !1,
                $t = !1,
                eo = function() {
                    Oo();
                },
                to = !1,
                oo = function(e, t) {
                    if (!to || e || t) {
                        to = !0;
                        var i = function(t) {
                            var i = ne ?
                                event.clientX + document.documentElement.scrollLeft :
                                t.pageX,
                                n = ne ?
                                event.clientY + document.documentElement.scrollTop :
                                t.pageY,
                                a = o.findPos(_e),
                                r = a[0],
                                s = a[1],
                                l = yt.sm.zooming_dimensions,
                                c = (l.r * xe) / ke,
                                m = (l.r * we) / ke,
                                u = l.x / ke + (c * (i - r)) / xe,
                                p = l.y / ke + (m * (n - s)) / we,
                                d =
                                "You clicked on\nx: " +
                                (u = Math.round(1e5 * u) / 1e5) +
                                ",\ny: " +
                                (p = Math.round(1e5 * p) / 1e5) +
                                ",";
                            e && console.log(d), po("click_xy", [{ x: u, y: p }]);
                        };
                        t || qe.click(i), Xe.click(i);
                    }
                },
                io = function() {
                    oo(!0);
                },
                no = function(e) {
                    (se.click_xy || le.click_xy.length > 0) && oo(!1, e);
                },
                ao = function(e) {
                    var t = e.sm.type;
                    "state" == t && po("over_state", [e.sm.id]),
                        "location" == t && po("over_location", [e.sm.id]),
                        "region" == t && po("over_region", [e.sm.id]);
                },
                ro = function(e) {
                    var t = e.sm.type;
                    "state" == t && po("out_state", [e.sm.id]),
                        "location" == t && po("out_location", [e.sm.id]),
                        "region" == t && po("out_region", [e.sm.id]);
                },
                so = function(e, t) {
                    var o = e.sm.type;
                    "state" == o && po("click_state", [e.sm.id, t]),
                        "region" == o && po("click_region", [e.sm.id, t]),
                        "location" == o && po("click_location", [e.sm.id, t]);
                },
                lo = function(e, t) {
                    var o = e.sm.type;
                    "state" == o && po("preclick_state", [e.sm.id, t]),
                        "region" == o && po("preclick_region", [e.sm.id, t]),
                        "location" == o && po("preclick_location", [e.sm.id, t]);
                },
                co = function(e, t) {
                    var o = e.sm.type;
                    "state" == o && po("zoomable_click_state", [e.sm.id, t]),
                        "region" == o && po("zoomable_click_region", [e.sm.id, t]);
                },
                mo = !1,
                uo = ((mo = !1), !1);
            uo = !1;
            yi(), oi();
        } else
            console.log("The mapdata or mapinfo object is missing or corrupted.");

        function po(t, o) {
            (a = se[t]) && a.apply(null, o);
            for (var i = e.plugin_hooks[t], n = 0; n < i.length; n++) {
                var a;
                (a = i[n]) && a.apply(null, o);
            }
        }

        function _o() {
            (C = !(!_.background_image_url || "no" == _.background_image_url) &&
                _.background_image_url),
            (T = !!_.background_image_bbox && _.background_image_bbox),
            (Y = "yes" == _.background_transparent ? 0 : 1),
            (Q = _.label_size ? _.label_size : 22),
            _.label_color ? _.label_color : "#ffffff",
                (X = "yes" == _.url_new_tab),
                (U = _.location_opacity ? _.location_opacity : 1),
                "yes" == _.js_hooks,
                (Z = _.border_size ? _.border_size : 1.5),
                (G = _.popup_color ? _.popup_color : "#ffffff"),
                (P = _.popup_orientation ? _.popup_orientation : "auto"),
                (I = _.popup_centered ? _.popup_centered : "auto"),
                (K = _.popup_opacity ? _.popup_opacity : 0.9),
                ($ = _.popup_shadow > -1 ? _.popup_shadow : 1),
                (ee = _.popup_corners ? _.popup_corners : 5),
                (te = "yes" == _.popup_nocss),
                (J = !!_.popup_maxwidth && _.popup_maxwidth),
                (oe = _.popup_font ?
                    _.popup_font :
                    "12px/1.5 Verdana, Arial, Helvetica, sans-serif"),
                (V = "no" != _.zoom_out_incrementally),
                (W = _.adjacent_opacity ? _.adjacent_opacity : 0.3),
                (S = _.zoom_time ? _.zoom_time : 0.5),
                (B = _.zoom_increment ? _.zoom_increment : 2),
                (O = "no" != _.zoom_mobile),
                (D = _.fade_time ? 1e3 * _.fade_time : 200),
                (q = i.labels),
                (F = _.custom_shapes ? _.custom_shapes : {}),
                (j = !(!_.initial_back || "no" == _.initial_back) && _.initial_back),
                (H = "yes" == _.hide_eastern_labels),
                (N = _.link_text ? _.link_text : "View Website"), !!_.order_number && _.order_number,
                (R = _.zoom_percentage ? _.zoom_percentage : 0.99);
        }

        function ho(e) {
            return "on_click" == e || !("detect" != e || !me);
        }

        function fo(e) {
            return "off" == e;
        }

        function vo(e) {
            if (
                ((he.style.width = ""),
                    (fe.style.width = ""),
                    b ?
                    ((xe = he.offsetWidth) < 1 && (xe = he.parentNode.offsetWidth),
                        (fe.style.width = xe + "px")) :
                    ((xe = void 0 === _.width ? 800 : _.width),
                        (he.style.width = xe + "px")),
                    (xe *= 1),
                    n.calibrate ?
                    (((Ee = {}).x = -1 * n.calibrate.x_adjust),
                        (Ee.y = -1 * n.calibrate.y_adjust),
                        (Ee.x2 = Ee.x + n.calibrate.width),
                        (Ee.y2 = (Ee.x2 - Ee.x) / n.calibrate.ratio)) :
                    (Ee = n.initial_view),
                    (ze = Ee.x2 - Ee.x),
                    (Me = Ee.y2 - Ee.y),
                    (we = xe / (Te = ze / Me)),
                    (Ae = ze / 1e3),
                    (_e.style.height = we + "px"), !e)
            ) {
                if (((ke = xe / ze), (Ce = 1), y)) {
                    var t = [];
                    for (var i in n.state_bbox_array) {
                        var a = n.state_bbox_array[i];
                        t.push(a);
                    }
                    var r = o.bbox_union(t),
                        s = 0.5 * (r.x2 + r.x) * ke,
                        l = 0.5 * (r.y2 + r.y) * ke;
                    be = "r" + y + "," + s + "," + l;
                    var c = o.rotate_bbox(Ee, be);
                    (ze = c.width), (Me = c.height);
                }
                (je = "s" + ke + "," + ke + ",0,0"), (Re = y ? je + be : je);
            }
        }

        function yo() {
            if (r)
                if (location.hostname.match("simplemaps.com")) r = !1;

        }

        function go() {
            var t,
                o,
                i = _.navigation_color ? _.navigation_color : "#f7f7f7",
                n = _.navigation_border_color ? _.navigation_border_color : "#636363",
                a = _.navigation_opacity ? _.navigation_opacity : 0.8,
                r = _.arrow_color ? _.arrow_color : i,
                s = _.arrow_color_border ? _.arrow_color_border : n,
                l = _.arrow_border_color ? _.arrow_border_color : s,
                u = void 0 === _.navigation_size ? 40 : _.navigation_size,
                p =
                void 0 === _.navigation_size_mobile ?
                pe * u :
                _.navigation_size_mobile,
                d = me ? p : u,
                h = "yes" == _.arrow_box ? 1 : 0,
                f = (d *= 1),
                v = 0.1 * d,
                y = d / 10;
            !(function() {
                Ze = Se.set();
                var s = d,
                    u = d;
                if (c) {
                    var p = new Image();
                    (p.onload = function() {
                        (t = p.width), (o = p.height), _();
                    }),
                    (p.src = c);
                } else _();

                function _() {
                    if (c) {
                        var p = (Ue = Raphael(de, t, o)).image(c, 0, 0, t, o);
                        (f = o), p.attr({ cursor: "pointer" }), Ze.push(p), Ze.click(Pt);
                    } else {
                        Ue = Raphael(de, s, u);
                        var _ = Ue.path(m.rounded_box).attr({
                                fill: r,
                                "stroke-width": 1,
                                stroke: l,
                                "stroke-opacity": h,
                                "fill-opacity": 0,
                                cursor: "pointer",
                            }),
                            b = {
                                stroke: l,
                                "stroke-width": 1.5,
                                "stroke-opacity": 1,
                                fill: r,
                                "fill-opacity": 1,
                                cursor: "pointer",
                            },
                            k = Ue.path(m.arrow).attr(b);
                        (Ze = Se.set()).push(_, k);
                        var M = "S" + y + "," + y + ",0,0 T0,0";
                        Ze.transform(M);
                    }
                    j || Ze.hide(),
                        (de.style.left = v + "px"),
                        (de.style.top = v + "px"),
                        g &&
                        (function() {
                            Ke = Raphael(ve, d, 2 * d + v);
                            var t = m.plus,
                                o = m.minus,
                                r = m.rounded_box,
                                s = Ke.path(r).attr({
                                    fill: i,
                                    "stroke-width": 1,
                                    stroke: n,
                                    "stroke-opacity": 1,
                                    "fill-opacity": a,
                                    cursor: "pointer",
                                }),
                                l = Ke.path(t).attr({
                                    "stroke-width": 0,
                                    "stroke-opacity": 0,
                                    fill: n,
                                    "fill-opacity": 1,
                                    opacity: 1,
                                    cursor: "pointer",
                                });
                            (Ge = Se.set()).push(s, l);
                            var c = "S" + y + "," + y + ",0,0 T0,0";
                            Ge.transform(c);
                            var u = Ke.path(r).attr({
                                    fill: i,
                                    "stroke-width": 1,
                                    stroke: n,
                                    "stroke-opacity": 1,
                                    "fill-opacity": a,
                                    cursor: "pointer",
                                }),
                                p = Ke.path(o).attr({
                                    "stroke-width": 0,
                                    "stroke-opacity": 0,
                                    fill: n,
                                    "fill-opacity": 1,
                                    opacity: 1,
                                    cursor: "pointer",
                                });
                            (Je = Se.set()).push(u, p);
                            var c = "S" + y + "," + y + ",0,0 T0," + (d + v);

                            function _(e, t) {
                                if ((void 0 === t && (t = "z"), z && "region" != z.sm.type))
                                    Ot.call(z, !0, function() {
                                        (z = !1), _(e);
                                    });
                                else {
                                    if (
                                        "z" == t &&
                                        !(function(e) {
                                            var t = yt.sm.zooming_dimensions.w / e,
                                                o = e < 1;
                                            if (-1 != x && ("manual" == yt.sm.type || w)) {
                                                var i = vt[x].sm.zooming_dimensions.w,
                                                    n = t > i - 1;
                                                if (o && n) {
                                                    var a = Po(yt, vt[x]);
                                                    if (a || w) return Bo(vt[x]), !1;
                                                }
                                            }
                                            if (o && t > vt[-1].sm.zooming_dimensions.w - 1)
                                                return w || Bo(vt[-1]), !1;
                                            return !0;
                                        })(e)
                                    )
                                        return;
                                    var o = { sm: { type: "manual", zp: 1 } };
                                    dt &&
                                        (((yt = {
                                                sm: { type: "manual", zp: 1 },
                                            }).sm.zooming_dimensions = _t),
                                            (yt.sm.bbox = {
                                                x: _t.x / ke,
                                                y: _t.y / ke,
                                                width: _t.w / ke,
                                                height: _t.h / ke,
                                            }));
                                    var i = (function(e, t) {
                                        var o = yt.sm.zooming_dimensions.w,
                                            i = yt.sm.zooming_dimensions.h,
                                            n = yt.sm.zooming_dimensions.x,
                                            a = yt.sm.zooming_dimensions.y;
                                        if ("x" == t)
                                            var n =
                                                yt.sm.zooming_dimensions.x +
                                                yt.sm.zooming_dimensions.w * e;
                                        else if ("y" == t)
                                            var a =
                                                yt.sm.zooming_dimensions.y +
                                                yt.sm.zooming_dimensions.h * e;
                                        else
                                            var o = yt.sm.zooming_dimensions.w / e,
                                                i = yt.sm.zooming_dimensions.h / e,
                                                n =
                                                yt.sm.zooming_dimensions.x +
                                                (yt.sm.zooming_dimensions.w - o) / 2,
                                                a =
                                                yt.sm.zooming_dimensions.y +
                                                (yt.sm.zooming_dimensions.h - i) / 2;
                                        return { x: n, y: a, w: o, h: i, r: o / (ze * ke) };
                                    })(e, t);
                                    if (!i) return;
                                    (o.sm.zooming_dimensions = i), Bo(o);
                                }
                            }
                            Je.transform(c),
                                (ve.style.top = f + 2 * v + "px"),
                                (ve.style.left = v + "px"),
                                (Je = Se.set()).push(u, p),
                                ($e = function() {
                                    _(B);
                                }),
                                (tt = function(e, t) {
                                    _(e, t);
                                }),
                                (et = function() {
                                    _(1 / B);
                                }),
                                (e.zoom_in = $e),
                                (e.zoom_out = et),
                                Ge.click($e),
                                Je.click(et),
                                Ge.touchend($e),
                                Je.touchend(et);
                        })();
                }
            })();
        }

        function bo() {
            (lt = i.locations),
            (ot = []),
            (it = []),
            (rt = []),
            (st = []),
            (nt = []),
            (ut = []);
            !(function() {
                var e = { color: !1, hover_color: !1 };
                if (
                    ((e.opacity = _.region_opacity ? _.region_opacity : 1),
                        (e.hover_opacity = _.region_hover_opacity ?
                            _.region_hover_opacity :
                            0.6),
                        (e.url = !1),
                        (e.description = !1),
                        (e.description_mobile = !1),
                        (e.inactive = !1),
                        (e.zoomable = !0),
                        (e.hide_name = "yes" == _.region_hide_name),
                        (e.popup = _.region_popups ? _.region_popups : ue),
                        (e.cascade = "yes" == _.region_cascade_all),
                        (e.zoom_percentage = R),
                        (e.x = !1),
                        (e.y = !1),
                        (e.x2 = !1),
                        (e.y2 = !1),
                        E)
                )
                    for (var t in E)
                        for (var o = 0; o < E[t].states.length; o++) {
                            var i = E[t].states[o];
                            rt[i] = t;
                        }
                for (var n in E)
                    for (var a in ((nt[n] = Object.create(e)),
                            E[n].url && (nt[n].zoomable = !1),
                            E[n]))
                        "default" != E[n][a] && (nt[n][a] = E[n][a]),
                        "yes" == E[n][a] && (nt[n][a] = !0),
                        "no" == E[n][a] && (nt[n][a] = !1);
            })(),
            (function() {
                for (var e in ((ct = function(e) {
                            var t = {};
                            (t.color = _.state_color),
                            (t.image_url = !!_.state_image_url && _.state_image_url),
                            (t.image_size = _.state_image_size ? _.state_image_size : "auto"),
                            (t.image_position = _.state_image_position ?
                                _.state_image_position :
                                "center"),
                            (t.image_x = _.state_image_x ? _.state_image_x : "0"),
                            (t.image_y = _.state_image_y ? _.state_image_y : "0"),
                            (t.image_color = !!_.state_image_color && _.state_image_color),
                            (t.image_background_opacity = _.image_background_opacity ?
                                _.image_background_opacity :
                                "1"),
                            (t.image_hover_url = !!_.state_image_hover_url && _.state_image_hover_url),
                            (t.image_hover_size = _.state_image_hover_size ?
                                _.state_image_hover_size :
                                "auto"),
                            (t.image_hover_position = _.state_image_hover_position ?
                                _.state_image_hover_position :
                                "center"),
                            (t.image_hover_x = _.state_image_hover_x ?
                                _.state_image_hover_x :
                                "0"),
                            (t.image_hover_y = _.state_image_hover_y ?
                                _.state_image_hover_y :
                                "0"),
                            (t.image_hover_color = !!_.state_image_hover_color && _.state_image_hover_color),
                            (t.pulse_size = _.state_pulse_size ? _.state_pulse_size : 1.1),
                            (t.pulse_speed = _.state_pulse_speed ? _.state_pulse_speed : 1);
                            var o = _.state_pulse_color;
                            (t.pulse_color = !(!o || "auto" == o) && o),
                            (t.hover_color = _.state_hover_color),
                            (t.image_source = !1),
                            (t.description = _.state_description),
                            (t.url = _.state_url),
                            (t.inactive = "yes" == _.all_states_inactive),
                            (t.hide = "yes" == _.all_states_hidden),
                            (t.hide_label = !1),
                            (t.hide_name = "yes" == _.state_hide_name),
                            (t.border_color = _.border_color ? _.border_color : "#ffffff"),
                            (t.border_hover_color = !!_.border_hover_color && _.border_hover_color),
                            (t.border_hover_size = !!_.border_hover_size && _.border_hover_size),
                            (t.emphasize = "yes"),
                            (t.zoom_percentage = R),
                            (t.zoomable = "yes" == _.all_states_zoomable),
                            (t.popup = _.state_popups ? _.state_popups : ue),
                            (t.opacity = _.state_opacity ? _.state_opacity : 1),
                            (t.hover_opacity = _.state_hover_opacity ?
                                _.state_hover_opacity :
                                1),
                            (t.description_mobile = !!_.state_description_mobile && state_description_mobile),
                            t.pu,
                                (t.path = !1);
                            var i = !!rt[e] && rt[e];
                            for (var n in (i && nt[i].hide && (t.hide = !0),
                                    i &&
                                    nt[i].cascade &&
                                    (nt[i].color && (t.color = nt[i].color),
                                        nt[i].hover_color && (t.hover_color = nt[i].hover_color),
                                        nt[i].description && (t.description = nt[i].description),
                                        nt[i].url && (t.url = nt[i].url),
                                        nt[i].inactive && (t.inactive = nt[i].inactive),
                                        nt[i].hide && (t.hide = nt[i].hide)),
                                    (ot[e] = Object.create(t)),
                                    "us" != a ||
                                    ("GU" != e && "PR" != e && "VI" != e && "MP" != e && "AS" != e) ||
                                    (ot[e].hide = "yes"),
                                    "us" != a ||
                                    !H ||
                                    ("VT" != e &&
                                        "NJ" != e &&
                                        "DE" != e &&
                                        "DC" != e &&
                                        "NH" != e &&
                                        "MA" != e &&
                                        "CT" != e &&
                                        "RI" != e &&
                                        "MD" != e) ||
                                    (ot[e].hide_label = "yes"),
                                    d[e]))
                                "default" != d[e][n] && (ot[e][n] = d[e][n]),
                                "yes" == d[e][n] && (ot[e][n] = !0),
                                "no" == d[e][n] && (ot[e][n] = !1);
                            "off" == _.state_hover_color && (ot[e].hover_color = ot[e].color);
                        }),
                        (at = {}),
                        n.paths))
                    at[e] = !0;
                for (var e in i.state_specific)
                    i.state_specific[e] && i.state_specific[e].path && (at[e] = !0);
                for (var e in at) ct(e);
            })(),
            (function() {
                var e = {};
                (e.font_family = _.label_font ? _.label_font : "arial,sans-serif"),
                (e.color = _.label_color ? _.label_color : "white"),
                (e.hover_color = _.label_hover_color ?
                    _.label_hover_color :
                    e.color),
                (e.opacity =
                    _.label_opacity || "0" == _.label_opacity ? _.label_opacity : 1),
                (e.hover_opacity = _.label_hover_opacity ?
                    _.label_hover_opacity :
                    e.opacity),
                (e.size = Q),
                (e.hide = "yes" == _.hide_labels),
                (e.line = !1),
                (e.scale = !!_.label_scale && _.label_scale),
                (e.scale_limit = _.scale_limit ? _.scale_limit : 0.0625),
                (e.rotate = _.label_rotate ? _.label_rotate : 0),
                (e.line_color = _.label_line_color ?
                    _.label_line_color :
                    "#000000"),
                (e.line_size = _.label_line_size ? _.label_line_size : "1"),
                (e.line_x = !1),
                (e.line_y = !1),
                (e.parent_type = "state"),
                (e.parent_id = !1),
                (e.anchor = _.label_anchor ? _.label_anchor : "middle"),
                (e.pill = !1),
                (e.width = !!_.pill_width && _.pill_width),
                (e.x = !1),
                (e.y = !1),
                (e.name = "Not Named"),
                (e.display = !!_.label_display && _.label_display),
                (e.display_ids = !1),
                (e.id = !1);
                var t = "no" == _.import_labels ? {} : n.default_labels,
                    o = function(o) {
                        for (var i in ((st[o] = Object.create(e)), t[o]))
                            "default" != t[o][i] && (st[o][i] = t[o][i]),
                            "yes" == t[o][i] && (st[o][i] = !0),
                            "no" == t[o][i] && (st[o][i] = !1);
                    },
                    i = function(t) {
                        for (var o in (st[t] || (st[t] = Object.create(e)), q[t]))
                            "default" != q[t][o] && (st[t][o] = q[t][o]),
                            "yes" == q[t][o] && (st[t][o] = !0),
                            "no" == q[t][o] && (st[t][o] = !1);
                    };
                for (var a in t) o(a);
                for (var a in q) i(a);
                mt = function(e) {
                    o(e), i(e);
                };
            })(),
            (function() {
                var e = {},
                    t = me ?
                    _.scale_limit_mobile ?
                    _.scale_limit_mobile :
                    0.4 :
                    0.0625;
                (e.scale_limit = _.scale_limit ? _.scale_limit : t),
                (e.color = _.location_color ? _.location_color : "#FF0067"),
                (e.hover_color = !!_.location_hover_color && _.location_hover_color),
                (e.border = _.location_border ? _.location_border : 1.5),
                (e.border_color = _.location_border_color ?
                    _.location_border_color :
                    "#FFFFFF"),
                (e.hover_border = _.location_hover_border ?
                    _.location_hover_border :
                    2),
                (e.size = _.location_size),
                (e.description = _.location_description),
                (e.description_mobile = !!_.location_description_mobile && location_description_mobile),
                (e.url = _.location_url),
                (e.inactive = "yes" == _.all_locations_inactive),
                (e.type = _.location_type),
                (e.position = "top"),
                (e.pulse = "yes" == _.location_pulse),
                (e.pulse_size = _.location_pulse_size ? _.location_pulse_size : 4),
                (e.pulse_speed = _.location_pulse_speed ?
                    _.location_pulse_speed :
                    0.5);
                var o = _.location_pulse_color;
                for (var i in ((e.pulse_color = !(!o || "auto" == o) && o),
                        (e.image_source = _.location_image_source ?
                            _.location_image_source :
                            ""),
                        (e.hide = _.all_locations_hide ? _.all_locations_hide : "no"),
                        (e.opacity = U),
                        (e.scale = !_.location_scale || _.location_scale),
                        (e.hover_opacity = !!_.location_hover_opacity && _.location_hover_opacity),
                        (e.image_source = _.location_image_source ?
                            _.location_image_source :
                            ""),
                        (e.image_url = !!_.location_image_url && _.location_image_url),
                        (e.image_position = _.location_image_position ?
                            _.location_image_position :
                            "center"),
                        (e.image_hover_source = _.location_image_hover_source ?
                            _.location_image_hover_source :
                            ""),
                        (e.image_hover_url = !!_.location_image_hover_url && _.location_image_hover_url),
                        (e.image_hover_position = _.location_image_hover_position ?
                            _.location_image_hover_position :
                            "center"),
                        (e.popup = _.location_popups ? _.location_popups : ue),
                        (e.x = !1),
                        (e.y = !1),
                        (e.display = _.location_display ? _.location_display : "all"),
                        (e.display_ids = !1),
                        (e.hide = "yes" == _.all_locations_hidden),
                        (e.hide_name = "yes" == _.location_hide_name),
                        null == e.type && (e.type = "square"),
                        lt)) {
                    for (var n in ((it[i] = Object.create(e)), lt[i]))
                        "overwrite_image_location" != n ?
                        ("region" == n && (it[i].display = "region"),
                            "default" != lt[i][n] && (it[i][n] = lt[i][n]),
                            "yes" == lt[i][n] && (it[i][n] = !0),
                            "no" == lt[i][n] && (it[i][n] = !1)) :
                        (it[i].image_url = lt[i][n]);
                    it[i].hover_opacity || (it[i].hover_opacity = it[i].opacity),
                        it[i].hover_color || (it[i].hover_color = it[i].color);
                }
            })(),
            (function() {
                var e = {};
                (e.color = _.line_color ? _.line_color : "#000000"),
                (e.size = _.line_size ? _.line_size : 1.5),
                (e.dash = _.line_dash ? _.line_dash : ""),
                (e.origin_location = !1),
                (e.destination_location = !1),
                (e.angle = !1);
                var t = i.lines ? i.lines : i.borders;
                for (var o in t)
                    for (var n in ((ut[o] = Object.create(e)), t[o]))
                        "default" != t[o][n] && (ut[o][n] = t[o][n]),
                        "yes" == t[o][n] && (ut[o][n] = !0),
                        "no" == t[o][n] && (ut[o][n] = !1);
            })();
        }

        function xo(e, t) {
            if ("lambert" == n.proj)
                var i = function(e) {
                    var t = 0.017453293,
                        o = Math.PI,
                        i = e.lat * t,
                        n = e.lng * t,
                        a = 33 * t,
                        r =
                        Math.log(Math.cos(a) * (1 / Math.cos(0.785398185))) /
                        Math.log(
                            Math.tan(0.25 * o + 0.3926990925) *
                            (1 / Math.tan(0.25 * o + 0.5 * a))
                        ),
                        s = (Math.cos(a) * Math.pow(Math.tan(0.25 * o + 0.5 * a), r)) / r,
                        l = s * Math.pow(1 / Math.tan(0.25 * o + 0.5 * i), r),
                        c = s * Math.pow(1 / Math.tan(0.25 * o + 0.3926990925), r);
                    return {
                        x: l * Math.sin(r * (n - 1.57079637)),
                        y: c - l * Math.cos(r * (n - 1.57079637)),
                    };
                };
            else if ("xy" == n.proj)
                i = function(e) {
                    return { x: e.lng, y: e.lat };
                };
            else if ("robinson_pacific" == n.proj)
                i = function(e) {
                    var t = e.lng - 150;
                    t < -180 && (t += 360);
                    return r({ lat: e.lat, lng: t });
                };
            else if ("mercator" == n.proj)
                i = function(e) {
                    var t =
                        Math.log(Math.tan((e.lat / 90 + 1) * (Math.PI / 4))) *
                        (180 / Math.PI);
                    return { x: e.lng, y: t };
                };
            else i = r;
            var a = { lat: e, lng: t };

            function r(e) {
                var t,
                    o,
                    i = function(e) {
                        return e < 0 ? -1 : 1;
                    },
                    n = i(e.lng),
                    a = i(e.lat),
                    r = Math.abs(e.lng),
                    s = Math.abs(e.lat),
                    l = ((t = 5), (o = s - 1e-10), Math.floor(o / t) * t),
                    c = (l = 0 == s ? 0 : l) / 5,
                    m = (l + 5) / 5,
                    u = (s - l) / 5,
                    p = [
                        0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
                        0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
                        0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
                        0.48562614, 0.45167814,
                    ],
                    d = [
                        0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
                        0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
                        0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
                        1.31998003, 1.3523,
                    ];
                return {
                    x: ((p[m] - p[c]) * u + p[c]) * r * 0.017453293 * n * 1,
                    y: ((d[m] - d[c]) * u + d[c]) * a * 1,
                };
            }
            var s = n.proj_coordinates;

            function l(e, t, n, a) {
                var r,
                    s,
                    l,
                    c,
                    m,
                    u,
                    p,
                    d,
                    _,
                    h,
                    f,
                    v,
                    y,
                    g,
                    b,
                    x = i(e),
                    w = i(t),
                    k = i(n),
                    z = i(a),
                    M = o.distance(x, w),
                    E = o.distance(x, k),
                    A = o.distance(w, k) / o.distance(t, n),
                    C = M / A,
                    T = E / A,
                    S =
                    ((r = t.x),
                        (s = t.y),
                        (l = C),
                        (c = n.x),
                        (m = n.y),
                        (g = c - r),
                        (b =
                            s +
                            ((p = m - s) *
                                (_ =
                                    (l * l - (u = T) * u + (d = Math.sqrt(p * p + g * g)) * d) /
                                    (2 * d))) /
                            d), {
                            opt1: {
                                x:
                                    (h = r + (g * _) / d) +
                                    (v = ((f = Math.sqrt(l * l - _ * _)) / d) * -p),
                                y: b + (y = g * (f / d)),
                            },
                            opt2: { x: h - v, y: b - y },
                        }),
                    O = o.distance(x, z) / A;
                return Math.abs(o.distance(S.opt1, a) - O) <
                    Math.abs(o.distance(S.opt2, a) - O) ?
                    { x: S.opt1.x, y: S.opt1.y } :
                    { x: S.opt2.x, y: S.opt2.y };
            }

            function c(e, t, i) {
                var n = /lat[ ]?<[-]?(\d+[\.]?\d+)/g.exec(d);
                if (n && e > o.to_float(n[1])) return !1;
                var a = /lat[ ]?>[-]?(\d+[\.]?\d+)/g.exec(d);
                if (a && e < o.to_float(a[1])) return !1;
                var r = /lng[ ]?<[-]?(\d+[\.]?\d+)/g.exec(d);
                if (r && t > o.to_float(r[1])) return !1;
                var s = /lng[ ]?>[-]?(\d+[\.]?\d+)/g.exec(d);
                return !(s && e < o.to_float(s[1]));
            }
            var m = n.proj_rules;
            if (m)
                for (var u = 0; u < m.length; u++) {
                    var p = m[u],
                        d = p.condition;
                    if (c(e, t, p.condition)) {
                        var _ = p.points;
                        return l(a, s[_[0]], s[_[1]], s[_[2]]);
                    }
                }
            return l(a, s[0], s[1], s[2]);
        }

        function wo(e) {
            if (e.sm.zooming_dimensions) return e.sm.zooming_dimensions;
            var t,
                i = o.rotate_bbox(e.sm.bbox, Re),
                n = i.x,
                a = i.y,
                r = i.width,
                s = i.height,
                l = e.sm.zp,
                c = ze * ke,
                m = Me * ke;
            return (
                (n -= 0.5 * (r / l - r)),
                (a -= 0.5 * (s / l - s)),
                (r /= l) / (s /= l) > Te ?
                ((a -= (m * (t = r / c) - s) / 2), (s = r / Te)) :
                ((n -= (c * (t = s / m) - r) / 2), (r = s * Te)), { x: n, y: a, w: r, h: s, r: t }
            );
        }

        function ko(e) {
            if (e) {
                qe.stop();
                for (var t = 0; t < e.sm.states.length; ++t) {
                    var o = ft[e.sm.states[t]];
                    o.attr(o.sm.attributes), Xo(o, "reset", !1, "state");
                }
            }
        }

        function zo(e) {
            if (e) {
                e.stop(), e.attr(e.sm.attributes);
                for (var t = 0; t < e.sm.states.length; ++t) {
                    Xo(ft[e.sm.states[t]], "reset", !1, "region");
                }
            }
        }

        function Mo() {
            We.forEach(function(e) {
                -1 != e.sm.id && zo(e);
            });
        }

        function Eo(e, t) {
            var i = e.sm.display,
                a = t.sm.type;
            if ("all" == i) return !0;
            if ("out" == i && "out" == a) return !0;
            if ("region" == i && "region" == a)
                return (function(e, t) {
                    var o = e.sm.point0;
                    if (e.sm.display_ids) {
                        var i = e.sm.display_ids.indexOf(t.sm.id) > -1;
                        return i;
                    }
                    if (Raphael.isPointInsideBBox(t.sm.bbox, o.x, o.y)) return !0;
                    return !1;
                })(e, t);
            if ("state" == i && "state" == a)
                return (function(e, t) {
                    var o = e.sm.point0;
                    if (e.sm.display_ids) {
                        var i = e.sm.display_ids.indexOf(t.sm.id) > -1;
                        return i;
                    }
                    if (Raphael.isPointInsideBBox(t.sm.bbox, o.x, o.y)) {
                        var a = n.paths[t.sm.id];
                        if (Raphael.isPointInsidePath(a, o.x, o.y)) return !0;
                    }
                    return !1;
                })(e, t);
            var r = o.to_float(i);
            return !!(r && Ce < r);
        }

        function Ao(e, t, o) {
            var i = { transform: t };
            ie || me || o ? e.attr(i) : e.animate(i, 1e3 * S);
        }

        function Co(e, t) {
            var i = e.sm.type;
            Ze.hide(),
                (function(e, t) {
                    Ye.hide(),
                        Ye.forEach(function(o) {
                            o.sm.hide ||
                                (Eo(o, e) && o.show(),
                                    o.sm.scale &&
                                    Ao(
                                        o,
                                        Wo(o, (Ce > o.sm.scale_limit ? Ce : o.sm.scale_limit) * ke),
                                        t
                                    ));
                        });
                })(e, t),
                (function(e, t) {
                    for (var o in (Xe.hide(), bt)) {
                        var i = bt[o];
                        if (!i.sm.hide) {
                            if ((Eo(i, e) && xt[i.sm.id].show(), i.sm.line)) {
                                var n = qo(i);
                                i.sm.line.attr({ path: n, transform: Re });
                            }
                            if (i.sm.scale) {
                                var a = Wo(
                                    i,
                                    (Ce > i.sm.scale_limit ? Ce : i.sm.scale_limit) * ke
                                );
                                Ao(i, a, t), i.sm.pill && Ao(kt[i.sm.id], a, t);
                            }
                        }
                    }
                })(e, t),
                o.x_in_array(i, ["state", "region", "out"]) && Mo(),
                "region" == i ?
                ko(e) :
                "state" == i ?
                ko(vt[e.sm.region]) :
                "manual" == i &&
                We.forEach(function(e) {
                    -1 != e.sm.id &&
                        (e.sm.zooming_dimensions.r > Ce && e.sm.zoomable ?
                            ko(e) :
                            zo(e));
                }),
                "out" != i && "manual" != i ?
                (qe.stop(),
                    He.stop(),
                    qe.attr({ "fill-opacity": W }),
                    He.attr({ "fill-opacity": W }),
                    e.stop(),
                    e.attr({ "fill-opacity": 1 }),
                    e.sm.labels.forEach(function(e) {
                        e.sm &&
                            e.sm.pill &&
                            (e.sm.pill.stop(), e.sm.pill.attr({ "fill-opacity": 1 }));
                    }),
                    e.animate({
                            "stroke-width": e.sm.border_hover_size * (xe / ze) * Ae * 1.25,
                        },
                        1e3 * S
                    )) :
                (qe.attr({ "fill-opacity": 1 }), He.attr({ "fill-opacity": 1 })),
                qe.animate({ "stroke-width": Z * (xe / ze) * Ae * 1.25 }, 1e3 * S);
        }

        function To(e) {
            if (w && "-1" != x && "region" == e.sm.type) {
                if (!j) return;
                Ze.show();
            } else
                "state" == e.sm.type || "region" == e.sm.type || j ?
                Ze.show() :
                g && "out" != e.sm.type && Ze.show();
        }

        function So(e) {
            return { x: e.x, y: e.y, w: e.w, h: e.h };
        }

        function Oo() {
            z.sm && M && (jt.hide(), (M = !1), z.sm && Ot.call(z), (re = !1));
        }

        function Bo(i, n, a) {
            if (!Ht) {
                Oo(),
                    $t && ($t.stop(), ($t = !1)),
                    Kt && i != Kt && Ot.call(Kt),
                    (z = !1),
                    i,
                    jt.hide(),
                    (M = !1),
                    (Ht = !0),
                    (i.sm.zooming_dimensions = wo(i));
                var r = So(i.sm.zooming_dimensions),
                    s = So(yt.sm.zooming_dimensions);
                if (((Ce = i.sm.zooming_dimensions.r), Co(i, n), ie || (me && !O) || n))
                    (_t = r), Se.setViewBox(r.x, r.y, r.w, r.h, !1), c();
                else {
                    var l = t.Tweenable ? new t.Tweenable() : new Tweenable();
                    dt = l.tween({
                        from: s,
                        to: r,
                        duration: 1e3 * S,
                        easing: "easeOutQuad",
                        step: function(e) {
                            !(function(e) {
                                (_t = e), Se.setViewBox(e.x, e.y, e.w, e.h, !1);
                            })(e);
                        },
                        finish: function() {
                            c();
                        },
                    });
                }
            }

            function c() {
                To(i),
                    (yt = i),
                    (Ht = !1),
                    (re = !1),
                    (e.zoom_level = yt.sm.type),
                    (e.zoom_level_id = !!yt.sm.id && yt.sm.id),
                    po("zooming_complete", []),
                    o.isFunction(a) && a();
            }
        }

        function Fo(e) {
            var t = "",
                o = {};
            for (var i in n.paths) {
                var a = n.paths[i];
                a = Raphael._pathToAbsolute(a);
                var r,
                    s = Raphael.pathBBox(a);
                r = s.x2 - s.x < 10 ? 10 : 1;
                var l = Math.round(s.x * r) / r,
                    c = Math.round(s.y * r) / r,
                    m = Math.round(s.y2 * r) / r;
                (t +=
                    "'" +
                    i +
                    "':{x: " +
                    l +
                    ",y:" +
                    c +
                    ",x2:" +
                    Math.round(s.x2 * r) / r +
                    ",y2:" +
                    m +
                    "},"),
                (o[i] = s);
            }
            return (
                (t = t.substring(0, t.length - 1)),
                (t += "}"),
                e || console.log("The new state_bbox_array is: \n\n{" + t),
                o
            );
        }

        function Io(e) {
            var t = e.sm.description,
                i = ie ?
                '<a style="line-height: 1.5" id="xpic_sm_' + ce + '">X</a>' :
                '<a id="xpic_sm_' +
                ce +
                '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>';
            i = '<div class="xmark_sm">' + i + "</div>";
            var n = e.sm.url ? e.sm.url : "",
                a = n,
                r = "javascript:" == a.substring(0, 11),
                s =
                'return (function(e){window.open("' +
                n +
                '","_blank"); return false})()',
                l = r ?
                'return (function(){window.location.href="' +
                n +
                '"; return false;})()' :
                'return (function(){window.top.location.href="' +
                n +
                '"; return false;})()',
                c = o.replaceAll(a, "'", '"'),
                m = X ? s : l;
            r && (m = "(function(){" + c + "})()");
            var u = e.sm.description_mobile ?
                e.sm.description_mobile :
                '<div class="tt_mobile_sm"><a tabindex="0" class="btn_simplemaps" href="' +
                n +
                "\" onClick='" +
                m +
                "'>" +
                N +
                "</a></div>";
            e.sm.on_click || ((i = ""), (u = "")),
                "" != e.sm.url || e.sm.description_mobile || (u = "");
            var p =
                "" == t ? (p = "") : '<div class="tt_custom_sm"; />' + t + "</div>";
            return (
                '<div class="tt_sm"><div>' +
                (!!e.sm.hide_name ?
                    "" :
                    '<div class="tt_name_sm">' + e.sm.name + "</div>") +
                i +
                '<div style="clear: both;"></div></div>' +
                p +
                u +
                "</div></div>"
            );
        }
        // function Po(e, t) {
        //   var o = e.sm.zooming_dimensions;
        //   if (o.w > t.sm.zooming_dimensions.w) return !1;
        //   var i = t.sm.bbox,
        //     n = i.x * ke,
        //     a = i.y * ke,
        //     r = i.x2 * ke,
        //     s = i.y2 * ke,
        //     l = o.x + o.w / 2,
        //     c = o.y + o.h / 2;
        //   return l > n && c > a && l < r && c < s;
        // }
        function Ro(e, t) {
            var i = t.hover ? "_hover" : "",
                a = ce + "_pattern_" + e.sm.id + i,
                r = document.getElementById(a);
            r && o.delete_element(r);
            var s = _e.firstChild,
                l = s.namespaceURI,
                c = s.querySelector("defs"),
                m = document.createElementNS(l, "pattern"),
                u = e.sm.id;
            (m.id = a), m.setAttribute("patternUnits", "objectBoundingBox");
            var p = document.createElementNS(l, "image"),
                d = document.createElementNS(l, "rect"),
                _ = t.image_color ? t.image_color : t.color;
            d.setAttribute("fill", "#ffffff"),
                d.setAttribute("opacity", t.bg_opacity),
                p.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    t.image_url
                ),
                m.appendChild(d),
                m.appendChild(p),
                c.appendChild(m),
                s.appendChild(c);
            var h = t.image_position,
                f = "auto" == t.image_size,
                v = "repeat" == h,
                g = "manual" == h,
                b = "center" == h,
                x = Raphael.pathBBox(n.paths[u]),
                w = x.x2 - x.x,
                k = x.y2 - x.y,
                z = w / k;
            return (
                Raphael._preload(t.image_url, function() {
                    var e = this.offsetWidth,
                        o = this.offsetHeight,
                        i = e / o;
                    var n,
                        a,
                        r = (function() {
                            var n = t.image_size;
                            return (
                                f ?
                                v || g ?
                                (n =
                                    i > 1 ? (e > w ? 1 : e / w) : o > k ? 1 / z : o / k / z) :
                                b && ((n = i / z), (n = i > z ? n : 1 / n)) :
                                n > 1 && (n = (t.image_size * Ae) / w),
                                n
                            );
                        })(),
                        s = w * r,
                        l = s / i,
                        c = 0,
                        u = 0;
                    if (
                        (v ?
                            ((n = r), (a = (r * z) / i)) :
                            g ?
                            ((n = 1), (a = 1), (c = t.image_x * w), (u = t.image_y * k)) :
                            b &&
                            ((n = 1), (a = 1), (c = 0.5 * (w - s)), (u = 0.5 * (k - l))),
                            d.setAttribute("x", 0),
                            d.setAttribute("y", 0),
                            d.setAttribute("width", w),
                            d.setAttribute("height", k),
                            d.setAttribute("fill", _),
                            d.setAttribute("opacity", "1"),
                            m.setAttribute("y", 0),
                            m.setAttribute("x", 0),
                            m.setAttribute("y", 0),
                            m.setAttribute("width", n),
                            m.setAttribute("height", a),
                            p.setAttribute("x", c),
                            p.setAttribute("y", u),
                            p.setAttribute("width", s),
                            y)
                    ) {
                        var h = c + 0.5 * s,
                            x = u + 0.5 * l;
                        p.setAttribute(
                            "transform",
                            "rotate(-" + y + "," + h + "," + x + ")"
                        );
                    }
                    p.setAttribute("height", l);
                }),
                'url("#' + m.id + '")'
            );
        }

        function jo(e) {
            e || ({}, (ft = {})), (Vt = n.state_bbox_array);
            var t = Z * ke * Ae * 1.25;
            for (var o in ((ht = function(e) {
                        var o = !ft[e],
                            i = ot[e],
                            a = i.path ? i.path : n.paths[e],
                            r = o ? Se.path(a) : ft[e];
                        o && (r.sm = { id: e }),
                            ie || r.node.setAttribute("class", "sm_state_" + e);
                        var s = {
                                fill: i.color,
                                opacity: i.opacity,
                                stroke: i.border_color,
                                cursor: "pointer",
                                "stroke-opacity": 1,
                                "stroke-width": t,
                                "stroke-linejoin": "round",
                            },
                            l = i.border_hover_color ? i.border_hover_color : _.border_color,
                            c = i.border_hover_size ? i.border_hover_size : Z,
                            m = c * ke * Ae * 1.25,
                            u = {
                                opacity: i.hover_opacity,
                                fill: i.hover_color,
                                stroke: l,
                                "stroke-width": m,
                            };
                        if (((r.sm.image = !1), i.image_url && !ie)) {
                            var d = Ro(r, {
                                hover: !1,
                                image_url: i.image_url,
                                image_size: i.image_size,
                                image_position: i.image_position,
                                image_x: i.image_x,
                                image_y: i.image_y,
                                image_color: i.image_color,
                                bg_opacity: i.image_background_opacity,
                            });
                            if (((r.sm.image = !0), (s.fill = d), i.image_hover_url)) {
                                d = Ro(r, {
                                    hover: !0,
                                    image_url: i.image_hover_url,
                                    image_size: i.image_hover_size,
                                    image_position: i.image_hover_position,
                                    image_x: i.image_hover_x,
                                    image_y: i.image_hover_y,
                                    image_color: i.image_hover_color,
                                    bg_opacity: i.image_background_opacity,
                                });
                                u.fill = d;
                            } else u.fill = d;
                        }
                        i.inactive && (s.cursor = "default"),
                            i.image_source &&
                            ((r.sm.ignore_hover = !0),
                                (s.fill = "url(" + p + i.image_source + ")")),
                            (i.border_hover_color || i.border_hover_size) && i.emphasize ?
                            (r.sm.emphasizable = !0) :
                            (r.sm.emphasizable = !1),
                            (r.sm.border_hover_size = c),
                            r.attr(s),
                            r.transform(Re),
                            (r.sm.attributes = s),
                            (r.sm.over_attributes = u),
                            (r.sm.description = i.description),
                            (r.sm.adjacent_attributes = { "fill-opacity": W }),
                            (r.sm.hide = i.hide),
                            (r.sm.hide_label = i.hide_label),
                            (r.sm.hide_name = i.hide_name),
                            o && (r.sm.region = !1),
                            (r.sm.name = i.name ? i.name : n.names[e]),
                            r.sm.name || (r.sm.name = e),
                            (r.sm.url = i.url),
                            (r.sm.inactive = i.inactive),
                            (r.sm.on_click = ho(i.popup)),
                            (r.sm.popup_off = fo(i.popup)),
                            (r.sm.labels = []),
                            (r.sm.zp = i.zoom_percentage),
                            (r.sm.zoomable = i.zoomable),
                            (r.sm.description_mobile = i.description_mobile),
                            (r.sm.type = "state"),
                            (r.sm.hide_labels = i.hide_label),
                            (r.sm.content = Io(r));
                        var h = Vt[e];
                        h || (h = Raphael.pathBBox(n.paths[e]));
                        var f = { x: h.x, x2: h.x2, y: h.y, y2: h.y2 };
                        (r.sm.bbox = f),
                        (r.sm.bbox.width = f.x2 - f.x),
                        (r.sm.bbox.height = f.y2 - f.y),
                        (r.sm.pulse_speed = i.pulse_speed),
                        (r.sm.pulse_size = i.pulse_size),
                        (r.sm.pulse_color = i.pulse_color ? i.pulse_color : i.border_color),
                        r.sm.hide ? r.hide() : o && Be.push(r),
                            o && ((ft[e] = r), qe.push(r));
                    }),
                    at))
                ht(o);
            ht[-1], qe.hide();
        }

        function No() {
            Le.attr({ fill: _.background_color, "fill-opacity": Y, stroke: "none" });
        }

        function Lo(e) {
            if ((e || (vt = {}), E))
                for (var t in E) {
                    var i = nt[t],
                        n = E[t],
                        a = e ? vt[t] : Se.set();
                    if (!e) {
                        if (((a.sm = {}), (a.sm.states = []), vt[t])) {
                            console.log("Duplicate Regions");
                            continue;
                        }
                        for (var r = [], s = 0; s < n.states.length; s++) {
                            var l = n.states[s],
                                c = ft[l];
                            c
                                ?
                                c.sm.region ?
                                console.log(c.sm.name + " already assigned to a region") :
                                ((c.sm.region = t),
                                    a.sm.states.push(l),
                                    (ie && c.sm.ignore_hover && (i.color || i.hover_color)) ||
                                    a.push(c),
                                    r.push(c.sm.bbox)) :
                                console.log(l + " does not exist");
                        }
                        i.x &&
                            i.y &&
                            i.x2 &&
                            i.y2 &&
                            (r = [{ x: i.x, y: i.y, x2: i.x2, y2: i.y2 }]),
                            (a.sm.bbox = o.bbox_union(r));
                    }
                    var m = { "fill-opacity": i.opacity, cursor: "pointer" },
                        u = { "fill-opacity": i.hover_opacity };
                    i.color && (m.fill = i.color),
                        i.hover_color && (u.fill = i.hover_color),
                        i.inactive && (m.cursor = "default"),
                        (a.sm.attributes = m),
                        (a.sm.name = n.name),
                        (a.sm.description = i.description),
                        (a.sm.description_mobile = i.description_mobile),
                        (a.sm.url = i.url),
                        (a.sm.labels = Se.set()),
                        (a.sm.on_click = ho(i.popup)),
                        (a.sm.over_attributes = u),
                        (a.sm.hide_name = i.hide_name),
                        (a.sm.adjacent_attributes = { "fill-opacity": W }),
                        (a.sm.zoomable = i.zoomable),
                        (a.sm.popup_off = fo(i.popup)),
                        (a.sm.zp = i.zoom_percentage),
                        (a.sm.inactive = i.inactive),
                        (a.sm.type = "region"),
                        (a.sm.id = t),
                        (a.sm.content = Io(a)),
                        e || (We.push(a), (vt[t] = a)),
                        (a.sm.zooming_dimensions = wo(a));
                }
            if (!e) {
                vt[-1] = {};
                var p = vt[-1];
                (p.sm = {}), (p.sm.type = "out"), (p.sm.zp = 1);
                var d = o.clone(Ee);
                if (
                    ((d.width = d.x2 - d.x),
                        (d.height = d.y2 - d.y),
                        (p.sm.bbox = d),
                        (p.sm.zooming_dimensions = wo(p)),
                        (yt = p),
                        "object" == typeof x ?
                        (((gt = {}).sm = { type: "manual", zp: 1, bbox: x }),
                            (gt.sm.zooming_dimensions = wo(gt)),
                            (x = -1),
                            (w = !1)) :
                        -1 == x ||
                        x in vt ||
                        (x in ft ?
                            ((Qt = ft[x]), (w = !1)) :
                            console.log(
                                "The initial_zoom is not the id of a region or state"
                            ),
                            (x = -1)),
                        v)
                ) {
                    vt[-2] = {};
                    var _ = vt[-2];
                    _.sm = { type: "manual", zp: 1 };
                    var h = wo(vt[x]),
                        f = h.w,
                        y = h.h,
                        g = h.w * (v - 1) * 0.5,
                        b = h.h * (v - 1) * 0.5;
                    _.sm.zooming_dimensions = {
                        x: h.x - g,
                        y: h.y - b,
                        w: f * v,
                        h: y * v,
                        r: v,
                    };
                }
            }
        }

        function Do(e) {
            var t = e.getBBox(!0);
            if (ie) {
                var o = e._getBBox(!0);
                t.height = o.height;
            }
            var i = 0.5 * t.width,
                n = 0.5 * t.height,
                a = e.sm.point0;
            return {
                x: a.x - i,
                y: a.y - n,
                x2: a.x + i,
                y2: a.y + n,
                width: t.width,
                height: t.height,
            };
        }

        function Ho() {
            for (var e in (o.clear_sets([Xe, Oe, He]),
                    (bt = {}),
                    (kt = {}),
                    (xt = {}),
                    (st = st.reverse()),
                    (wt = function(e) {
                        var t = st[e],
                            i = !1,
                            a = !1;
                        if (st.hasOwnProperty(e)) {
                            var r = !bt[e],
                                s = Se.set(),
                                l = { x: 1 * t.x, y: 1 * t.y },
                                c = {},
                                m = !1,
                                u = !1;
                            if (
                                ("state" == t.parent_type ?
                                    (m = ft[t.parent_id]) :
                                    "region" == t.parent_type ?
                                    (m = vt[t.parent_id]) :
                                    "location" == t.parent_type && (m = zt[t.parent_id]), !t.x && !t.y && m)
                            )
                                if ("location" == m.sm.type)
                                    (a = !0),
                                    (c.x = m.sm.x),
                                    (c.y = m.sm.y),
                                    (l = m.sm.point0),
                                    (i = !0),
                                    m.sm.auto_size && (u = !0);
                                else if ("state" == m.sm.type) {
                                var p = m.sm.bbox;
                                if (p.cx && p.cy)
                                    var d = T,
                                        h = S;
                                else(d = (p.x + p.x2) / 2), (h = (p.y + p.y2) / 2);
                                (t.x = d), (t.y = h), (c.x = d), (c.y = h), (l = { x: d, y: h });
                            }
                            if ((t.parent_type, m)) {
                                if (("Not Named" == t.name && m && (t.name = m.sm.id), r)) {
                                    if (!a) {
                                        var f = o.rotate([t.x, t.y], Re);
                                        c = { x: f[0], y: f[1] };
                                    }
                                    var v = Se.text(c.x, c.y, t.name);
                                    bt[e] = v;
                                } else v = bt[e];
                                (v.sm = {}),
                                (v.sm.hide = t.hide),
                                m && (m.sm.hide_label || m.sm.hide) && (v.sm.hide = !0),
                                    (v.sm.parent = m),
                                    m.sm.labels.push(v),
                                    m.sm.region && vt[m.sm.region].sm.labels.push(v);
                                var y = {
                                        "stroke-width": 0,
                                        fill: t.color,
                                        "font-size": t.size,
                                        "font-weight": "bold",
                                        cursor: "pointer",
                                        "font-family": t.font_family,
                                        "text-anchor": t.anchor,
                                        opacity: t.opacity,
                                    },
                                    g = { fill: t.hover_color, opacity: t.hover_opacity },
                                    b = { fill: t.color, opacity: t.opacity };
                                if (
                                    (m.sm.inactive && (y.cursor = "default"),
                                        v.attr(y),
                                        (v.sm.attributes = y),
                                        (v.sm.over_attributes = g),
                                        (v.sm.out_attributes = b),
                                        (v.sm.type = "label"),
                                        (v.sm.id = e),
                                        (v.sm.scale = i || t.scale),
                                        (v.sm.scale_limit = t.scale_limit),
                                        (v.sm.x = c.x),
                                        (v.sm.y = c.y),
                                        (v.sm.point0 = l),
                                        (v.sm.line_x = t.line_x),
                                        (v.sm.line_y = t.line_y),
                                        (v.sm.line = !1),
                                        (v.sm.rotate = t.rotate),
                                        v.transform(Wo(v, ke)),
                                        t.display ?
                                        (v.sm.display = t.display) :
                                        "region" == t.parent_type ?
                                        (v.sm.display = "out") :
                                        "location" == t.parent_type ?
                                        (v.sm.display = m.sm.display) :
                                        (v.sm.display = _.labels_display ? _.labels_display : "all"),
                                        (v.sm.display_ids = !!t.display_ids && t.display_ids),
                                        (t.line || t.pill || u) && (v.sm.bbox = Do(v)),
                                        "auto" == t.display && "state" == t.parent_type)
                                ) {
                                    (v.sm.display = 1e-4), v.sm.bbox || (v.sm.bbox = Do(v));
                                    var x = [1.01, 0.501, 0.251, 0.1251, 0.06251, 0.031251],
                                        w = n.paths[m.sm.id],
                                        k = m.sm.bbox;
                                    for (var z in x) {
                                        var M = x[z],
                                            E = Do(v),
                                            A = E.width * M * 0.5,
                                            C = E.height * M * 0.5,
                                            T = 0.5 * (E.x2 + E.x),
                                            S = 0.5 * (E.y2 + E.y),
                                            O = T + A,
                                            B = ((h = S - C), S + C),
                                            F = (d = T - A) > k.x && O < k.x2,
                                            I = h > k.y && B < k.y2;
                                        if (F && I) {
                                            var P = Raphael.isPointInsidePath(w, d, h),
                                                R = Raphael.isPointInsidePath(w, O, h),
                                                j = Raphael.isPointInsidePath(w, d, B),
                                                N = Raphael.isPointInsidePath(w, O, B),
                                                L = P && R && j && N,
                                                D = E.width / M < ze;
                                            if (L && D) {
                                                v.sm.display = M;
                                                break;
                                            }
                                        }
                                        if (!v.sm.scale) break;
                                    }
                                }
                                if (t.line) {
                                    var H = qo(v),
                                        q = Se.path(H),
                                        W = t.line_size * Ae * ke * 1.25,
                                        Y = {
                                            stroke: t.line_color,
                                            cursor: "pointer",
                                            "stroke-width": W,
                                        };
                                    q.attr(Y),
                                        (q.sm = {}),
                                        (q.sm.type = "label"),
                                        (v.sm.pill = !1),
                                        (q.sm.size = t.line_size),
                                        (q.sm.id = e),
                                        (v.sm.line = q),
                                        Oe.push(q),
                                        s.push(q);
                                }
                                if ("state" == m.sm.type && t.pill) {
                                    var V = v.sm.bbox,
                                        Q = 1.45 * V.width,
                                        X = t.width ? t.width : Q,
                                        U = 1.15 * V.height,
                                        Z = ((d = v.sm.x - 0.5 * X), (h = v.sm.y - 0.5 * U), U / 5);
                                    if (kt[e]) var G = kt[e];
                                    else {
                                        G = Se.rect(d, h, X, U, Z);
                                        kt[e] = G;
                                    }
                                    if (
                                        (G.transform(Wo(v, ke)),
                                            (G.sm = {}),
                                            (G.sm.parent = m),
                                            (G.sm.attributes = o.clone(m.sm.attributes)),
                                            m.sm.image && (G.sm.attributes.fill = ot[m.sm.id].color),
                                            (G.sm.over_attributes = o.clone(m.sm.over_attributes)),
                                            m.sm.image &&
                                            (G.sm.over_attributes.fill = ot[m.sm.id].hover_color),
                                            (G.sm.adjacent_attributes = o.clone(m.sm.adjacent_attributes)),
                                            G.attr(G.sm.attributes),
                                            o.x_in_array(v.sm.display, ["state", "all"]) &&
                                            (m.sm.bbox = o.bbox_union([m.sm.bbox, v.sm.bbox])),
                                            o.x_in_array(v.sm.display, ["region", "all"]) && m.sm.region)
                                    ) {
                                        var J = vt[m.sm.region];
                                        (J.sm.bbox = o.bbox_union([J.sm.bbox, v.sm.bbox])),
                                        (J.sm.zooming_dimensions = !1),
                                        (J.sm.zooming_dimensions = wo(J));
                                    }
                                    (v.sm.pill = G), He.push(G), s.push(G), s.push(v);
                                } else s.push(v);
                                if (
                                    (("out" != v.sm.display && "all" != v.sm.display) || v.sm.hide ?
                                        s.hide() :
                                        Pe.push(s),
                                        "location" != v.sm.parent.sm.type || v.sm.line || Fe.push(s),
                                        Xe.push(s),
                                        (xt[e] = s),
                                        ie || v.node.setAttribute("class", "sm_label_" + e),
                                        u)
                                ) {
                                    var K =
                                        ((_.location_auto_padding ?
                                                1 + 2 * _.location_auto_padding :
                                                1.3) *
                                            v.sm.bbox.width) /
                                        Ae,
                                        $ = (oe = v.sm.parent).sm.labels,
                                        ee = oe.sm.shape_type;
                                    "triangle" == ee ? (K *= 1.3) : "star" == ee && (K *= 2);
                                    var te = oe.sm.id;
                                    (it[te].size = K), Mt(te);
                                    var oe = zt[te];
                                    (v.sm.parent = oe),
                                    (oe.sm.labels = $),
                                    oe.sm.labels.push(v),
                                        (oe.sm.auto_size = !0);
                                }
                            } else console.log("The following object does not exist: " + e);
                        }
                    }),
                    st))
                wt(e);
            Xe.hide();
        }

        function qo(e) {
            var t = e.sm.bbox,
                i = t.x2 - t.x,
                n = t.y2 - t.y,
                a = e.sm.scale ? Ce : 1,
                r = 0.5 * (1 - a) * i,
                s = 0.5 * (1 - a) * n,
                l = e.sm.line_x,
                c = e.sm.line_y,
                m = !l || !c,
                u = e.sm.parent.sm.type;
            if ("location" == u && m)
                (l = e.sm.parent.sm.point0.x), (c = e.sm.parent.sm.point0.y);
            else if ("state" == u && m) {
                var p = e.sm.parent.sm.bbox;
                (l = 0.5 * (p.x2 + p.x)), (c = 0.5 * (p.y2 + p.y));
            }
            var d = { x: l, y: c },
                _ = [];
            _.push({ x: t.x2 - r, y: 0.5 * (t.y + t.y2) }),
                _.push({ x: t.x + r, y: 0.5 * (t.y + t.y2) }),
                _.push({ x: 0.5 * (t.x + t.x2), y: t.y + s }),
                _.push({ x: 0.5 * (t.x + t.x2), y: t.y2 - s });
            var h = {};
            for (var f in _) {
                var v = _[f],
                    y = o.distance(v, d);
                (0 == f || y < h.distance) &&
                ((h.label = v), (h.location = d), (h.distance = y));
            }
            return o.linePath(h.label.x, h.label.y, h.location.x, h.location.y);
        }

        function Wo(e, t, o, i, n, a) {
            var r = void 0 === i ? e.sm.x : i,
                s = void 0 === n ? e.sm.y : n;
            return (
                void 0 === o && (o = "0,0"),
                void 0 === a && (a = e.sm.rotate),
                "t " + o + " s" + t + "," + t + "," + r + "," + s + "r" + a
            );
        }

        function Yo(e) {
            for (var t in F) Xt[t] = F[t];
            var i = [];
            for (var t in Xt) i.push(t);
            for (var t in (o.clear_sets([Ye]),
                    (zt = {}),
                    (Mt = function(e) {
                        var t = "center",
                            n = it[e];
                        if ("image" != n.type)
                            var a = {
                                    "stroke-width": n.border * ke * Ae,
                                    stroke: n.border_color,
                                    fill: n.color,
                                    opacity: n.opacity,
                                    cursor: "pointer",
                                },
                                r = {
                                    "stroke-width": n.hover_border * ke * Ae,
                                    stroke: n.border_color,
                                    fill: n.hover_color,
                                    opacity: n.hover_opacity,
                                    cursor: "pointer",
                                };
                        else {
                            t = n.image_position;
                            (a = { cursor: "pointer" }), (r = { cursor: "pointer" });
                        }
                        n.inactive && (a.cursor = "default");
                        var s = it[e].type,
                            l = n.size * Ae;
                        if (n.x && n.y)((c = {}).x = n.x), (c.y = n.y);
                        else var c = xo(n.lat, n.lng);
                        var m = o.rotate([c.x, c.y], Re),
                            u = { x: m[0], y: m[1] };
                        if ("auto" == n.size) {
                            var d = { sm: {} };
                            return (
                                (d.sm.display = n.display),
                                (d.sm.auto_size = !0),
                                (d.sm.type = "location"),
                                (d.sm.hide_label = !1),
                                (d.sm.labels = []),
                                (d.sm.point0 = c),
                                (d.sm.x = u.x),
                                (d.sm.y = u.y),
                                (d.sm.shape_type = s),
                                (d.sm.id = e),
                                void(zt[e] = d)
                            );
                        }
                        if ("circle" == s)
                            var _ = Se.circle(u.x, u.y, 0.5 * l),
                                h = {
                                    x: u.x - 0.5 * l * Ce,
                                    y: u.y - 0.5 * l * Ce,
                                    x2: u.x + 0.5 * l * Ce,
                                    y2: u.y + 0.5 * l * Ce,
                                };
                        else if (o.x_in_array(s, i)) {
                            var f = "S" + l + "," + l + ",0,0 T" + u.x + "," + u.y,
                                v = Raphael.transformPath(Xt[s], f).toString() + "Z";
                            "marker" == s && (t = "bottom-center");
                            (h = Raphael.pathBBox(v)), (_ = Se.path(v));
                        } else if ("image" == s) {
                            var y = n.image_url ? n.image_url : p + n.image_source;
                            _ = Se.image(y, 0, 0);
                            (a.src = y), (_.sm = {});
                            h = !1;
                            if (
                                (Raphael._preload(y, function() {
                                        var e = this.width / this.height,
                                            o = l,
                                            i = o * e,
                                            n = u.x - i / 2,
                                            a = "bottom-center" == t ? u.y - o : u.y - o / 2;
                                        _.attr({ height: o, width: i, x: n, y: a }),
                                            (_.sm.bbox = { x: n, y: a, x2: n + i, y2: a + o });
                                    }),
                                    n.image_hover_url || n.image_hover_source)
                            ) {
                                var g = n.image_hover_url ?
                                    n.image_hover_url :
                                    p + n.image_hover_source;
                                r.src = g;
                            }
                        } else {
                            var b = l,
                                x = b,
                                w = u.x - x / 2,
                                k = u.y - b / 2;
                            (_ = Se.rect(w, k, x, b)),
                            (h = { x: w, y: k, x2: w + x, y2: k + we });
                        }
                        (_.sm = {}),
                        (_.sm.image = "image" == s),
                        (_.sm.attributes = a),
                        _.attr(a),
                            (_.sm.original_transform = Re),
                            (_.sm.over_attributes = r),
                            (_.sm.id = e),
                            (_.sm.name = n.name),
                            (_.sm.scale = n.scale),
                            (_.sm.scale_limit = n.scale_limit),
                            (_.sm.position = t),
                            (_.sm.url = n.url),
                            (_.sm.type = "location"),
                            (_.sm.shape_type = s),
                            (_.sm.description = n.description),
                            (_.sm.description_mobile = n.description_mobile),
                            (_.sm.inactive = n.inactive),
                            (_.sm.on_click = ho(n.popup)),
                            (_.sm.popup_off = fo(n.popup)),
                            (_.sm.pulse = n.pulse);
                        var z = "bottom" == n.position;
                        (_.sm.underlay = z),
                        (_.sm.pulse_speed = n.pulse_speed),
                        (_.sm.pulse_size = n.pulse_size),
                        (_.sm.pulse_color = n.pulse_color ? n.pulse_color : n.color),
                        (_.sm.x = u.x),
                        (_.sm.y = u.y),
                        (_.sm.point0 = c),
                        (_.sm.bbox = h),
                        (_.sm.labels = []),
                        (_.sm.size = l),
                        (_.sm.hide = n.hide),
                        (_.sm.hide_name = n.hide_name),
                        (_.sm.display = n.display),
                        (_.sm.display_ids = !!n.display_ids && n.display_ids),
                        _.transform(Wo(_, Ce * ke)),
                            ("region" == _.sm.display || "state" == _.sm.display || n.hide) &&
                            _.hide(),
                            (_.sm.content = Io(_)),
                            z ? Qe.push(_) : Ve.push(_),
                            Ye.push(_),
                            (zt[e] = _),
                            ie || _.node.setAttribute("class", "sm_location_" + e);
                    }),
                    lt))
                Mt(t);
        }

        function Vo(t) {
            var o = e.zoom_level,
                i = e.zoom_level_id,
                n = !!t.sm.region && vt[t.sm.region];
            return n ?
                "out" == o ?
                n :
                "region" == o ?
                i == n.sm.id ?
                t :
                n :
                "state" == o ?
                ft[i].sm.region === n.sm.id ?
                t :
                n :
                "manual" == o ?
                Ce > n.sm.zooming_dimensions.r || !n.sm.zoomable ?
                n :
                t :
                void 0 :
                t;
        }

        function Qo(t) {
            var o = e.zoom_level,
                i = e.zoom_level_id;
            if ("state" == o) return i != t.sm.id;
            if ("region" != o) return !1;
            var n = !!t.sm.region && vt[t.sm.region];
            return !n || (i != n.sm.id && void 0);
        }

        function Xo(e, t, o, i) {
            e.sm.labels &&
                e.sm.labels.forEach(function(e) {
                    if (e.sm) {
                        var n = e.sm.pill;
                        "over" == t
                            ?
                            (e.stop(), Ut(e, "over"), n && Zt(n, "over")) :
                            ("reset" != t && "out" != t) ||
                            (Ut(e, "out"),
                                n && (Zt(n, "out", i), o && Zt(n, "adjacent", i)));
                    }
                });
        }

        function Uo() {
            (Bt = function() {
                this.sm.parent && St.call(this.sm.parent);
            }),
            (Ft = function() {
                this.sm.parent && Ot.call(this.sm.parent);
            }),
            (Ct = function(e) {
                this.sm.parent && Tt.call(this.sm.parent, e);
            }),
            (Et = function(e, t) {
                if (e.sm.pulse || t) {
                    var o = e.sm.shape_type;
                    if (!("location" != e.sm.type || "image" == o || Ce < 0.05)) {
                        var i = e.clone();
                        Ve.toFront(), Fe.toFront();
                        var n = 1 * e.sm.pulse_size,
                            a = {
                                "stroke-width": 4 * e.attrs["stroke-width"],
                                "stroke-opacity": 0,
                            };
                        i.attr({ "fill-opacity": 0, stroke: e.sm.pulse_color });
                        var r = e.sm.scale ? Ce : 1,
                            s = 0.5 * (n - 1) * e.sm.size * r * ke,
                            l =
                            "bottom-center" == e.sm.position ?
                            Wo(e, r * ke * n, "0," + s) :
                            Wo(e, r * ke * n);
                        (a.transform = l),
                        i.animate(a, 1e3 * e.sm.pulse_speed, "ease-out", function() {
                            i.remove();
                        });
                    }
                }
            }),
            (At = function(e) {
                if (!ie || !ne)
                    for (var t = Array.isArray(e) ? e : [e], o = 0; o < t.length; o++) {
                        var i = ft[t[o]];
                        if (!i || !i.sm || Ce < 0.05) return;
                        i.sm.shape_type;
                        var n = i.clone(),
                            a = 1 * i.sm.pulse_size,
                            r = {
                                "stroke-width": 4 * (i.attrs["stroke-width"] ? i.attrs["stroke-width"] : 1),
                                "stroke-opacity": 0,
                                "fill-opacity": 0,
                            };
                        n.attr({ "fill-opacity": 0, stroke: i.sm.pulse_color });
                        var s = i.sm.bbox;
                        (i.sm.x = (s.x2 + s.x) / 2),
                        (i.sm.y = (s.y2 + s.y) / 2),
                        (i.sm.rotate = 0);
                        var l = Wo(i, a, "0,0");
                        r.transform = Re + l;
                        i.sm.bbox;
                        n.animate(r, 1e3 * i.sm.pulse_speed, "ease-out", function() {
                            n.remove();
                        });
                    }
            }),
            (St = function() {
                if (
                    (yo(), no(), si(), (this.id || "set" != !this.type) && !Gt && !mo)
                ) {
                    var e = Vo(this);
                    if (e.sm.on_click) var t = !0;
                    if (((Nt = e.sm.popup_off), !(qt || Wt || Ht || (M && re)))) {
                        if (Kt && !k) return !1;
                        if (
                            ((Kt = this),
                                e &&
                                ((function(e) {
                                    e.sm.labels &&
                                        e.sm.labels.forEach(function(t) {
                                            e.sm.inactive ?
                                                t.attr({ cursor: "default" }) :
                                                t.attr({ cursor: "pointer" });
                                        });
                                })(e), !e.sm.inactive))
                        )
                            if (
                                ((function(e) {
                                        "state" == e.sm.type &&
                                            e.sm.emphasizable &&
                                            ((Gt = !0),
                                                e.insertBefore(Be),
                                                setTimeout(function() {
                                                    Gt = !1;
                                                }, 1));
                                    })(e),
                                    ao(e),
                                    t)
                            ) {
                                if (!M) {
                                    if (
                                        (e.stop(),
                                            ie &&
                                            "location" == e.sm.type &&
                                            "image" == e.sm.shape_type)
                                    )
                                        return;
                                    e.sm.ignore_hover || (Ut(e, "over"), Et(e)), Xo(e, "over");
                                }
                            } else {
                                if (
                                    (jt.show(e),
                                        e.stop(),
                                        ie && "location" == e.sm.type && "image" == e.sm.shape_type)
                                )
                                    return;
                                e.sm.ignore_hover ||
                                    (Ut(e, "over"), Xo(e, "over"), Et(e), At(e));
                            }
                    }
                }
            }),
            (Ot = function(e, t) {
                if (
                    ((t && "function" == typeof t) || (t = !1), !Ht && !mo && ((Kt = !1), this.id || "set" != !this.type))
                ) {
                    var o = Vo(this);
                    if (o && !o.sm.inactive)
                        if ((ro(o), re))(M && !0 !== e) || (Jt(o, t), ($t = o));
                        else {
                            if ((jt.hide(), Qo(o))) {
                                if (Ht) return !1;
                                o.sm.ignore_hover || Ut(o, "out", !0),
                                    Ut(o, "adjacent", !0),
                                    Xo(o, "out", !0);
                            } else {
                                if (
                                    ie &&
                                    "location" == o.sm.type &&
                                    "image" == o.sm.shape_type
                                )
                                    return;
                                o.sm.ignore_hover || Ut(o, "out", !0), Xo(o, "out");
                            }
                            Jt(o, t);
                        }
                }
            });
            var t = !1;
            (Tt = function(o) {
                if (!(Ht || qt || Wt)) {
                    yo(),
                        me &&
                        ((t = !0),
                            setTimeout(function() {
                                t = !1;
                            }, 500)),
                        t || Oo();
                    var i = Vo(this);
                    if (!i.sm.inactive && (lo(i, o), !e.ignore_clicks)) {
                        if (((re = i.sm.on_click), o)) {
                            if (M && "touchend" == o.type) return;
                            if (!M && "touchstart" == o.type) return;
                        }
                        if (
                            (re && jt.update_pos(),
                                (Nt = i.sm.popup_off), !i.sm.zoomable ||
                                ("region" != i.sm.type && yt == i && "out" != i.sm.type))
                        )
                            if (re) {
                                if (
                                    (z == i ||
                                        !z ||
                                        ((c = z),
                                            "state" == (l = i).sm.type &&
                                            "region" == c.sm.type &&
                                            c.sm.id == l.sm.region) ||
                                        ("region" != i.sm.type && "region" == e.zoom_level) ||
                                        Jt(z),
                                        so(i, o),
                                        o)
                                ) {
                                    var n = Zo(o);
                                    jt.pos(o, { l: n.x, u: n.y });
                                }
                                jt.show(i),
                                    (M = !0),
                                    Xo(i, "over"),
                                    Et(i),
                                    (ie &&
                                        "location" == i.sm.type &&
                                        "image" == i.sm.shape_type) ||
                                    i.sm.ignore_hover ||
                                    i.attr(i.sm.over_attributes),
                                    (z = i);
                                var a = document.getElementById("xpic_sm_" + ce);
                                a &&
                                    (a.onclick = function() {
                                        return (
                                            jt.hide(),
                                            (M = !1),
                                            z.sm && Ot.call(z),
                                            (re = !1),
                                            po("close_popup", []), !1
                                        );
                                    });
                            } else {
                                so(i, o);
                                var r = i.sm.url;
                                if ("" != r && !uo) {
                                    var s = "javascript" == r.substring(0, 10);
                                    return !X || s ?
                                        void(s ?
                                            (window.location.href = r) :
                                            (window.top.location.href = r)) :
                                        (window.open(r, "_blank"), void jt.hide());
                                }
                            }
                        else
                            co(i, o),
                            si(),
                            z && z.sm ?
                            Ot.call(z, !0, function() {
                                Bo(i), (z = i);
                            }) :
                            (Bo(i), (z = i));
                        var l, c;
                    }
                }
            }),
            (It = function(e) {
                if (
                    (void 0 === e && (e = !1),
                        po("back", []),
                        ("out" == yt.sm.type || ("region" == yt.sm.type && w)) && j)
                )
                    window.location.href = "javascript:" + j;
                else if (V && "state" == yt.sm.type && yt.sm.region)
                    z ?
                    Ot.call(z, !0, function() {
                        Bo(vt[yt.sm.region]);
                    }) :
                    Bo(vt[yt.sm.region], !1, e);
                else {
                    var t = Po(yt, vt[x]),
                        o = "manual" == yt.sm.type && t ? vt[x] : vt[-1];
                    z && z.sm && "region" != z.sm.type ?
                        Ot.call(z, !0, function() {
                            Bo(o);
                        }) :
                        Bo(o, !1, e);
                }
            }),
            (Pt = function() {
                It();
            });
        }

        function Zo(e) {
            if (e.touches) {
                var t = e.changedTouches ? e.changedTouches[0] : e.touches[0];
                return { x: t.clientX, y: t.clientY };
            }
            var o = ne ? e.clientY + document.documentElement.scrollTop : e.pageY;
            return {
                x: ne ? e.clientX + document.documentElement.scrollLeft : e.pageX,
                y: o,
            };
        }

        function Go() {
            var e = !1;

            function t(t) {
                if (!Ht && t.touches && t.touches.length > 1) {
                    Wt = !0;
                    var i = (function(e) {
                        var t = { x: e.touches[0].pageX, y: e.touches[0].pageY },
                            i = { x: e.touches[1].pageX, y: e.touches[1].pageY };
                        return o.distance(t, i);
                    })(t);
                    if (e) {
                        var n = i - e;
                        Math.abs(n) > 10 && (n > 0 ? $e() : et(), (e = i));
                    } else e = i;
                }
            }
            o.addEvent(fe, "touchstart", t),
                o.addEvent(fe, "touchmove", t),
                o.addEvent(fe, "touchend", function(t) {
                    (e = !1),
                    setTimeout(function() {
                        Wt = !1;
                    }, 100);
                });
        }

        function Jo() {
            qe.toBack(),
                Qe.toBack(),
                Ne.toBack(),
                Ie && Ie.toFront(),
                Xe.toFront(),
                Ve.toFront(),
                Fe.toFront();
        }

        function Ko(e) {
            if (!e) {
                ae
                    ?
                    (qe.mouseup(Tt), Ne.mouseup(eo), Ze.mouseup(Pt), Ne.mouseup(si)) :
                    (qe.hover(St, Ot),
                        qe.click(Tt),
                        Ne.click(eo),
                        Ze.click(Pt),
                        Ne.hover(si, si)),
                    b &&
                    (function() {
                        function e() {
                            $o();
                        }
                        var t;
                        (Rt = function() {
                            clearTimeout(t), (t = setTimeout(e, 300));
                        }),
                        window.addEventListener ?
                            (window.addEventListener("resize", Rt, !1),
                                window.addEventListener("orientationchange", Rt, !1)) :
                            (window.attachEvent("resize", Rt, !1),
                                window.attachEvent("orientationchange", Rt, !1));
                        ie &&
                            (document.body.onresize = function() {
                                e();
                            });
                    })(),
                    g &&
                    (qe.touchstart(Tt),
                        qe.touchend(Tt),
                        Ze.touchend(It),
                        (function() {
                            function e(e) {
                                var o = Zo(e),
                                    a = o.x,
                                    r = o.y,
                                    s = (i - a) * t.r,
                                    l = (n - r) * t.r,
                                    c = 5 * t.r;
                                return (
                                    (Math.abs(s) > c || Math.abs(l) > c) && (qt = !0), { x: t.x + s, y: t.y + l, w: t.w, h: t.h, r: t.r }
                                );
                            }
                            var t,
                                i,
                                n,
                                a = !1;

                            function r(e) {
                                if (M) return !1;
                                e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                                    (t = {
                                        x: _t.x,
                                        y: _t.y,
                                        w: _t.w,
                                        h: _t.h,
                                        r: _t.w / ze / ke,
                                    }),
                                    (a = !0);
                                var o = Zo(e);
                                (i = o.x), (n = o.y), jt.hide(), jt.pos(e, { l: i, u: n });
                            }

                            function s(t) {
                                if (a && !(t.touches && t.touches.length > 1)) {
                                    var o = e(t);
                                    Se.setViewBox(o.x, o.y, o.w, o.h);
                                }
                            }

                            function l(t) {
                                if (!a || !qt) return (qt = !1), void(a = !1);
                                var o = e(t);
                                Se.setViewBox(o.x, o.y, o.w, o.h),
                                    (_t = o),
                                    ((yt = { sm: {} }).sm.zooming_dimensions = _t),
                                    (yt.sm.type = "manual"),
                                    (a = !1),
                                    setTimeout(function() {
                                        qt = !1;
                                    }, 1),
                                    Ze.show();
                            }
                            o.addEvent(_e, "mousedown", r),
                                o.addEvent(_e, "mousemove", s),
                                o.addEvent(_e, "mouseup", l),
                                o.addEvent(_e, "mouseleave", l),
                                o.addEvent(_e, "touchstart", r),
                                o.addEvent(_e, "touchmove", s),
                                o.addEvent(_e, "touchend", l);
                        })(),
                        Go()),
                    (he.mouseIsOver = !1),
                    (he.onmouseover = function() {
                        this.mouseIsOver = !0;
                    }),
                    (he.onmouseout = function() {
                        this.mouseIsOver = !1;
                    }),
                    (he.onwheel = function(e) {
                        he.mouseIsOver &&
                            g &&
                            A &&
                            (e.preventDefault(), e.deltaY < 0 ? $e() : et());
                    }),
                    o.addEvent(document, "keyup", function(e) {
                        if ("auto" == f) {
                            var t = fe.contains(document.activeElement);
                            ye.style.display = t ? "block" : "none";
                        }
                    });
            }
            Ye.hover(St, Ot),
                Ye.click(Tt),
                Xe.hover(Bt, Ft),
                Xe.click(Ct),
                g && (Ye.touchend(Tt), Ye.touchstart(Tt), Xe.touchend(Ct));
        }

        function $o() {
            if (!(he.offsetWidth < 1)) {
                vo(!0), Se.setSize(xe, we);
                var e = Z * (xe / ze) * Ae * 1.25;
                qe &&
                    Ye &&
                    (qe.forEach(function(t) {
                            t.attr({ "stroke-width": e }),
                                (t.sm.attributes["stroke-width"] = e),
                                (t.sm.over_attributes["stroke-width"] =
                                    t.sm.border_hover_size * (xe / ze) * Ae * 1.25);
                        }),
                        Ye.forEach(function(e) {
                            "image" != it[e.sm.id].type &&
                                ((e.sm.attributes["stroke-width"] =
                                        it[e.sm.id].border * (xe / ze) * Ae * 1.25),
                                    (e.sm.over_attributes["stroke-width"] =
                                        it[e.sm.id].hover_border * (xe / ze) * Ae * 1.25),
                                    e.attr({ "stroke-width": e.sm.attributes["stroke-width"] }));
                        }),
                        Oe.forEach(function(e) {
                            var t = e.sm.size * (xe / ze) * Ae * 1.25;
                            e.attr({ "stroke-width": t });
                        }),
                        Ie.forEach(function(e) {
                            var t = e.sm.size * (xe / ze) * Ae * 1.25;
                            e.attr({ "stroke-width": t });
                        })),
                    yo(),
                    (pt = J || (xe / 2 > 250 ? xe / 2 : 250));
            }
        }

        function ei(e) {
            var t = v ? vt[-2] : vt[x],
                o = vt[x];
            if ((j || Ze.hide(), !e)) {
                if (Qt) var i = Qt;
                else if (gt) i = gt;
                else i = t;
                Bo(i, (!Qt && !gt) || !v);
            }
            if (w && -1 != x) {
                Ne.show(), j || Ze.hide();
                for (var n = 0; n < o.sm.states.length; n++) {
                    var a = o.sm.states[n],
                        r = ft[a];
                    r.sm.hide || r.show();
                }
                for (var n in bt) {
                    var s = bt[n],
                        l = xt[n];
                    s.sm.parent &&
                        "state" == s.sm.parent.sm.type &&
                        ((s.sm.parent.sm.region == o.sm.id && s.sm.parent.sm.region) ||
                            ((s.sm.hide = !0), l.hide()));
                }
                return (
                    Ie.forEach(function(e) {
                        Raphael.isPointInsideBBox(o.sm.bbox, e.sm.bbox.x, e.sm.bbox.y) &&
                            e.show();
                    }),
                    void(!e && v && Bo(vt[x]))
                );
            }
            Ne.show(),
                Be.show(),
                Pe.show(),
                Ie.show(),
                e || !v || Qt || gt || Bo(vt[x]);
        }

        function ti(e) {
            _o(),
                bo(),
                jo(!0),
                Lo(!0),
                Yo(),
                Ho(),
                No(),
                Co(yt, !0),
                Jo(),
                Ko(!0),
                $o(),
                ei(!0),
                To(yt),
                gi(),
                no(!0),
                po("refresh_complete", []),
                o.isFunction(e) && e();
        }

        function oi(t) {
            var r, m, S, O, B, F, R, j, N, D;
            ((i = e.mapdata),
                (n = e.mapinfo),
                _e && delete window.paper,
                yi(),
                (function() {
                    (d = i.state_specific), (_ = i.main_settings);
                    var e = document.getElementsByTagName("script"),
                        t = e[e.length - 1].src,
                        o = "no" != _.back_image && _.back_image;
                    (c = "no" != _.back_image_url && _.back_image_url),
                    (u = "default" != _.images_directory && _.images_directory),
                    (p =
                        u ||
                        t.substring(0, t.lastIndexOf("/namap.js") + 1) + "map_images/"), !c && o && (c = p + o);
                })(),
                (ie = "VML" == Raphael.type),
                (ne = !!window.document.documentMode),
                (ae = !!o.isMobile.iOS()),
                (me = !!o.isMobile.any()),
                (ue = _.pop_ups ? _.pop_ups : _.popups),
                (pe =
                    void 0 === _.mobile_scaling && "no" != _.mobile_scaling ?
                    1 :
                    _.mobile_scaling),
                (re = !1),
                (Nt = fo(ue)),
                (ce = void 0 === _.div ? "map" : _.div),
                (x = void 0 === _.initial_zoom ? -1 : _.initial_zoom),
                (w = "yes" == _.initial_zoom_solo && -1 != x),
                (v = void 0 !== _.fly_in_from && "no" != _.fly_in_from && _.fly_in_from),
                (b = "responsive" == _.width),
                "0" == (y = !!_.rotate && _.rotate) && (y = !1),
                (L = "no" != _.zoom),
                (g = "yes" == _.manual_zoom),
                (f = void 0 === _.keyboard_navigation ? "auto" : _.keyboard_navigation),
                (A = "no" != _.allow_scrolling),
                (E = !(!n.default_regions || !L) && n.default_regions),
                i.regions && (E = i.regions),
                i.labels && (q = i.labels),
                (k = !1),
                (z = !1),
                (M = !1),
                (h = !1),
                (function() {
                    if ("continent" != a) return !1;
                    var e = 0;
                    for (var t in n.paths) e++;
                    return e > 8;
                })()) ?
            alert("The continent map can't be used with other data."): (_o(),
                (function() {
                    if (
                        ((he = document.getElementById(ce)),
                            (fe = !!document.getElementById(ce + "_holder") &&
                                document.getElementById(ce + "_holder")))
                    ) {
                        he.removeChild(fe);
                        var e = document.getElementById("tt_sm_" + ce);
                        e && e.parentNode.removeChild(e);
                    }
                    (fe = document.createElement("div")),
                    (de = document.createElement("div")),
                    (ye = document.createElement("div")),
                    (ve = document.createElement("div")),
                    (_e = document.createElement("div")),
                    (ge = document.createElement("div")),
                    (de.id = ce + "_outer"),
                    (ve.id = ce + "_zoom"),
                    (ye.id = ce + "_access"),
                    (ge.id = ce + "_legend"),
                    (_e.id = ce + "_inner"),
                    (fe.id = ce + "_holder"),
                    (fe.style.position = "relative"),
                    fe.setAttribute("tabIndex", 0),
                        (fe.style.outline = "none"),
                        (_e.style.position = "relative"),
                        (de.style.position = "absolute"),
                        (ve.style.position = "absolute"),
                        (ye.style.position = "absolute"),
                        (ye.style.maxWidth = "75%"),
                        (ge.style.position = "absolute"),
                        (ve.style.zIndex = "1"),
                        (de.style.zIndex = "1"),
                        (ye.style.zIndex = "1"),
                        (ye.style.display = "yes" == f ? "block" : "none"),
                        (ge.style.zIndex = "1"),
                        he.appendChild(fe),
                        fe.appendChild(ve),
                        fe.appendChild(de),
                        fe.appendChild(ye),
                        fe.appendChild(ge),
                        fe.appendChild(_e);
                })(),
                vo(),
                (function() {
                    if (
                        ((Se = Raphael(_e, xe, we)),
                            (Ne = Se.set()),
                            (Le = Se.rect(Ee.x - 2 * ze, Ee.y - 2 * Me, 5 * ze, 5 * Me)),
                            C)
                    ) {
                        C.indexOf("/osm/noattr/") > -1 && (l = !0);
                        var e = T || Ee;
                        (De = Se.image(C, e.x, e.y, e.x2 - e.x, e.y2 - e.y)), Ne.push(De);
                    }
                    Ne.push(Le),
                        Ne.transform(je),
                        Ne.hide(),
                        (qe = Se.set()),
                        (Be = Se.set()),
                        (We = Se.set()),
                        (Ye = Se.set()),
                        (Ve = Se.set()),
                        (Qe = Se.set()),
                        (Xe = Se.set()),
                        (Fe = Se.set()),
                        (Pe = Se.set()),
                        (Ie = Se.set()),
                        (He = Se.set()),
                        (Oe = Se.set()),
                        Se.set().push(qe, Ye, Ne, Xe, Ie);
                })(),
                yo(),
                (function() {
                    ((Dt = document.createElement("div")).style.cssText =
                        "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom: 5px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
                    _e.appendChild(Dt);
                    var e =
                        "font: 12px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; float: right !important; color: #000000 !important; text-decoration: none !important;";
                    if (l) {
                        var t = document.createElement("a");
                        (t.href = "https://www.openstreetmap.org/copyright"),
                        (t.title = "Background © OpenStreetMap contributors"),
                        (t.innerHTML = s ? "| OSM" : "&copy; OSM"),
                        (t.style.cssText = e),
                        (t.style.marginLeft = ".5em"),
                        Dt.appendChild(t);
                    }
                    if (s) {
                        var o = document.createElement("a");
                        (o.style.cssText = e),
                        (o.href = "https://simplemaps.com"),
                        (o.title = "Built with with SimpleMaps"),
                        (o.innerHTML = "&copy; Simplemaps.com"),
                        Dt.appendChild(o);
                    }
                })(),
                te ||
                (function() {
                    if (!Yt) {
                        var e = s([
                                "borderRadius",
                                "MozBorderRadius",
                                "WebkitBorderRadius",
                            ]),
                            t = e ? e + ": " + (me ? 2 * ee : ee) + "px;" : "";
                        pt = J || (xe / 2 > 250 ? xe / 2 : 250);
                        var i = s(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                            n = i ?
                            i +
                            ": " +
                            3 * $ +
                            "px " +
                            3 * $ +
                            "px " +
                            4 * $ +
                            "px rgba(0,0,0,.5);" :
                            "";
                        if (($ < 0.01 && (n = ""), me)) {
                            var a = /(\d+)(px|em)(.*)/g.exec(oe);
                            oe = parseFloat(a[1]) * pe + a[2] + a[3];
                        }
                        var r =
                            ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" +
                            t +
                            n +
                            "z-index: 1000000; background-color: " +
                            G +
                            "; padding: .6em; opacity:" +
                            K +
                            "; font: " +
                            oe +
                            "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
                        (r +=
                            ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}"),
                        (r +=
                            ".xmark_sm{float: " +
                            (ie ? "left" : "right") +
                            "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}"),
                        o.new_style(r),
                            (Yt = !0);
                    }

                    function s(e) {
                        for (var t = document.documentElement, o = 0; o < e.length; o++)
                            if (e[o] in t.style) {
                                var i = e[o];
                                return (i = (i = (i = (i = (i = (i = i.replace(
                                    "borderRadius",
                                    "border-radius"
                                )).replace(
                                    "MozBorderRadius",
                                    "-moz-border-radius"
                                )).replace(
                                    "WebkitBorderRadius",
                                    "-webkit-border-radius"
                                )).replace("boxShadow", "box-shadow")).replace(
                                    "MozBoxShadow",
                                    "-moz-box-shadow"
                                )).replace("WebkitBoxShadow", "-webkit-box-shadow"));
                            }
                    }
                })(),
                (F = o.findPos(_e)),
                (R = F[0]),
                (j = F[1]),
                (N = 0),
                (D = 0),
                (jt = {
                    create: function() {
                        (B = document.createElement("div")).setAttribute(
                                "id",
                                "tt_sm_" + ce
                            ),
                            (B.style.position = "absolute"),
                            (B.style.display = "none"),
                            _e.appendChild(B),
                            (_e.onmousemove = this.pos),
                            (B.onmousemove = this.pos);
                    },
                    show: function(e) {
                        Nt ||
                            ((h = !1),
                                null == B && jt.create(),
                                (B.style.display = "block"),
                                (B.style.zIndex = 2),
                                (B.style.maxWidth = pt + "px"),
                                (B.innerHTML = e.sm.content),
                                jt.update_pos(e));
                    },
                    reset_pos: function(e, t, o) {
                        null == B && jt.create(), jt.set_pos(0 + t, 0 + e, o);
                    },
                    update_pos: function(e) {
                        jt.set_pos(r, m, e);
                    },
                    pos: function(e, t) {
                        t
                            ?
                            ((r = t.u), (m = t.l)) :
                            ((r = ne ?
                                    event.clientY + document.documentElement.scrollTop :
                                    e.pageY),
                                (m = ne ?
                                    event.clientX + document.documentElement.scrollLeft :
                                    e.pageX)),
                            (r -= j),
                            (m -= R),
                            Nt || k || h || (M && re) || jt.set_pos(r, m);
                    },
                    set_pos: function(e, t, o) {
                        if (B) {
                            var i = !e || !t;
                            if (
                                (o &&
                                    o.sm.on_click &&
                                    ("yes" == I || ("auto" == I && xe < 401))) ||
                                i
                            ) {
                                (B.style.top = "-100px"),
                                (B.style.left = "-100px"),
                                (B.style.bottom = "auto"),
                                (B.style.right = "auto"),
                                (N = parseInt(B.offsetHeight, 10)),
                                (D = parseInt(B.offsetWidth, 10));
                                var n = xe - D > 0 ? 0.5 * (xe - D) : 0,
                                    a = we - N > 0 ? 0.5 * (we - N) : 0;
                                (B.style.top = a + "px"),
                                (B.style.left = n + "px"),
                                (B.style.right = "auto"),
                                (B.style.bottom = "auto");
                            } else {
                                if (((O = 0 + 0.5 * we), t > (S = 0 + 0.5 * xe) && e > O))
                                    r = 4;
                                else if (t < S && e > O) r = 3;
                                else if (t > S && e < O) r = 2;
                                else var r = 1;
                                "below" == P
                                    ?
                                    (3 == r && (r = 1), 4 == r && (r = 2)) :
                                    "above" == P && (1 == r && (r = 3), 2 == r && (r = 4)),
                                    1 == r ?
                                    ((B.style.bottom = "auto"),
                                        (B.style.top = e + 5 + "px"),
                                        (B.style.left = t + 5 + 5 + "px"),
                                        (B.style.right = "auto")) :
                                    2 == r ?
                                    ((B.style.bottom = "auto"),
                                        (B.style.top = e + 5 + "px"),
                                        (B.style.right = xe - t + 5 + "px"),
                                        (B.style.left = "auto")) :
                                    3 == r ?
                                    ((B.style.bottom = we - e + 5 + "px"),
                                        (B.style.top = "auto"),
                                        (B.style.left = t + 5 + 3 + "px"),
                                        (B.style.right = "auto")) :
                                    ((B.style.bottom = we - e + 5 + "px"),
                                        (B.style.top = "auto"),
                                        (B.style.right = xe - t + 5 + "px"),
                                        (B.style.left = "auto"));
                            }
                        }
                    },
                    hide: function() {
                        null != B && (B.style.display = "none"),
                            (F = o.findPos(_e)) && ((R = F[0]), (j = F[1]));
                    },
                }),
                go(),
                bo(),
                No(),
                jo(),
                Lo(),
                setTimeout(function() {
                    Yo(),
                        Ho(),
                        (function() {
                            var e = i.lines ? i.lines : i.borders;
                            if (e) {
                                for (var t in e) {
                                    var o = e[t],
                                        n = ut[t],
                                        a = n.size * (xe / ze) * Ae * 1.25,
                                        r = !1;
                                    if (n.origin_location && n.destination_location) {
                                        var s = zt[n.origin_location].sm.point0,
                                            l = zt[n.destination_location].sm.point0;
                                        if (
                                            ((r =
                                                    "M " +
                                                    s.x +
                                                    "," +
                                                    s.y +
                                                    " " +
                                                    l.x +
                                                    "," +
                                                    l.y +
                                                    " Z"),
                                                n.angle)
                                        ) {
                                            var c = parseFloat(n.angle);
                                            if (c > -61 && c < 61) {
                                                s.x <= l.x && (c *= -1);
                                                var m = Raphael.transformPath(
                                                        r,
                                                        "R" + c + "," + s.x + "," + s.y + "S2"
                                                    ).toString(),
                                                    u = Raphael.transformPath(r, "R-90S2").toString(),
                                                    p = Raphael.pathIntersection(m, u)[0];
                                                r =
                                                    "M " +
                                                    s.x +
                                                    "," +
                                                    s.y +
                                                    " C" +
                                                    s.x +
                                                    "," +
                                                    s.y +
                                                    "," +
                                                    p.x +
                                                    "," +
                                                    p.y +
                                                    "," +
                                                    l.x +
                                                    "," +
                                                    l.y;
                                            }
                                        }
                                    }
                                    var d = r || o.path,
                                        _ = Se.path(d);
                                    _.transform(Re),
                                        _.attr({
                                            stroke: n.color,
                                            fill: "none",
                                            cursor: "pointer",
                                            "stroke-dasharray": [n.dash],
                                            "stroke-width": a,
                                            "stroke-linejoin": "round",
                                            "stroke-miterlimit": 4,
                                        }),
                                        (_.sm = {}),
                                        (_.sm.size = n.size),
                                        (_.sm.bbox = _.getBBox(!0)),
                                        ie || _.node.setAttribute("class", "sm_line_" + t),
                                        Ie.push(_);
                                }
                                Ie.hide();
                            }
                        })(),
                        (function() {
                            (ye.style.right = "0em"), (ye.style.top = "0em");
                            var e =
                                void 0 === _.navigate_title ? "Navigate" : _.navigate_title,
                                t = void 0 === _.keyboard_omit ? "" : _.keyboard_omit;
                            if (!(t.indexOf("navigat") > -1)) {
                                var i = document.createElement("select");
                                i.options.add(new Option(e, "-1")),
                                    i.options.add(new Option("Back", "back")),
                                    g &&
                                    (i.options.add(new Option("Zoom in", "in")),
                                        i.options.add(new Option("Zoom out", "out")),
                                        i.options.add(new Option("Left", "left")),
                                        i.options.add(new Option("Right", "right")),
                                        i.options.add(new Option("Up", "up")),
                                        i.options.add(new Option("Down", "down"))),
                                    (i.style.marginRight = ".5em"),
                                    (i.style.marginTop = ".5em"),
                                    (i.style.float = "left"),
                                    ye.appendChild(i),
                                    (i.onchange = function(e) {
                                        if ("-1" == this.value) return !1;
                                        "back" == this.value && It(),
                                            "out" == this.value && et(),
                                            "in" == this.value && $e(),
                                            "left" == this.value && tt("-.25", "x"),
                                            "right" == this.value && tt(".25", "x"),
                                            "up" == this.value && tt("-.25", "y"),
                                            "down" == this.value && tt(".25", "y"),
                                            setTimeout(function() {
                                                i.value = "-1";
                                            }, 1e3);
                                    });
                            }
                            var n = void 0 === _.states_title ? "States" : _.states_title,
                                a = void 0 === _.regions_title ? "Regions" : _.regions_title,
                                r =
                                void 0 === _.locations_title ?
                                "Locations" :
                                _.locations_title,
                                s = {
                                    state: { title: n, array: ft },
                                    location: { title: r, array: zt },
                                    region: { title: a, array: vt },
                                };
                            for (var l in s) {
                                var c = s[l],
                                    m = t.indexOf(l) > -1,
                                    u = Object.size(c.array);
                                if (!(u < 1 || (u < 2 && "region" == l) || m)) {
                                    var p = document.createElement("select");
                                    p.options.add(new Option(c.title, "-1")),
                                        (p.style.marginRight = ".5em"),
                                        (p.style.marginTop = ".5em"),
                                        (p.style.float = "left");
                                    var d = [];
                                    for (var h in c.array) d.push(c.array[h]);
                                    var f = d.sort(function(e, t) {
                                        e.sm.name, t.sm.name;
                                    });
                                    for (h = 0; h < f.length; h++) {
                                        var v = f[h];
                                        "out" == v.sm.type ||
                                            v.sm.inactive ||
                                            v.sm.hide ||
                                            p.options.add(new Option(v.sm.name, v.sm.id));
                                    }
                                    (p.onchange = o.callback_closure({ entry: c, dropdown: p },
                                        function(e) {
                                            var t = e.dropdown,
                                                o = e.entry;
                                            if ("-1" == t.value) return !1;
                                            var i = o.array[t.value],
                                                n = i.sm.type,
                                                a = function() {
                                                    var e = i.sm.on_click;
                                                    (i.sm.on_click = !0),
                                                    (i.sm.content = Io(i)),
                                                    li(i.sm.type, i.sm.id, function() {
                                                        (i.sm.on_click = e), (i.sm.content = Io(i));
                                                    });
                                                };
                                            if ("state" == n) {
                                                function r() {
                                                    i.sm.zoomable || i.sm.region ? ni(i.sm.id, a) : a();
                                                }
                                                Jt(z, r);
                                            } else if ("location" == n) {
                                                function r() {
                                                    ri(i.sm.id, 4, a);
                                                }
                                                Jt(z, r);
                                            } else if ("region" == n) {
                                                function r() {
                                                    ai(i.sm.bbox, 1, a);
                                                }
                                                Jt(z, r);
                                            }
                                        }
                                    )),
                                    ye.appendChild(p);
                                }
                            }
                        })(),
                        (function() {
                            if (!(!i.legend ||
                                    !i.legend.entries ||
                                    i.legend.entries.length < 1 ||
                                    (ne && ie)
                                )) {
                                var e = {};
                                (ge.style.left = "0em"),
                                (ge.style.bottom = "0em"),
                                (ge.style.padding = ".8em"),
                                (ge.style["background-color"] = ne ?
                                    "#ffffff" :
                                    "rgba(186, 186, 186, 0.2)");
                                var t = document.createElement("ul");
                                (t.style.display = "inline"),
                                (t.style["list-style-type"] = "none"),
                                (t.style.margin = "0"),
                                (t.style.padding = "0"),
                                ge.appendChild(t);
                                var n =
                                    "#" +
                                    ce +
                                    "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em} #" +
                                    ce +
                                    "_holder{font: " +
                                    oe +
                                    ";}";
                                o.new_style(n);
                                for (var a = i.legend.entries, r = 0; r < a.length; r++)
                                    m(r, a[r]);
                                var s = i.legend.html;
                                s && "no" != s ?
                                    (ge.innerHTML = s) :
                                    (function() {
                                        for (var e in a) {
                                            var o = a[e];
                                            (o.shape = o.shape ? o.shape : "circle"),
                                            (o.color = o.color ? o.color : "#cecece"),
                                            (o.type = o.type ? o.type : "location");
                                            var i = document.createElement("li");
                                            i.setAttribute("class", "sm_legend_item"),
                                                i.setAttribute("data-id", e);
                                            var n = document.createElementNS(
                                                "http://www.w3.org/2000/svg",
                                                "svg"
                                            );
                                            if (
                                                (n.setAttributeNS(
                                                        "http://www.w3.org/2000/xmlns/",
                                                        "xmlns:xlink",
                                                        "http://www.w3.org/1999/xlink"
                                                    ),
                                                    (n.style.display = "inline-block"),
                                                    (n.style["margin-right"] = ".2em"),
                                                    (n.style.width = "1em"),
                                                    (n.style.height = "1em"),
                                                    (n.style.stoke = "#ffffff"),
                                                    (n.style["stoke-width"] = "3"),
                                                    (n.style.fill = "#ff0067"),
                                                    (n.style["vertical-align"] = "-0.15em"),
                                                    "circle" == o.shape)
                                            )
                                                (r = document.createElementNS(
                                                    "http://www.w3.org/2000/svg",
                                                    "circle"
                                                )).setAttribute("cx", "50"),
                                                r.setAttribute("cy", "50"),
                                                r.setAttribute("r", "40");
                                            else if ("square" == o.shape)
                                                (r = document.createElementNS(
                                                    "http://www.w3.org/2000/svg",
                                                    "rect"
                                                )).setAttribute("x", "10"),
                                                r.setAttribute("y", "10"),
                                                r.setAttribute("width", "80"),
                                                r.setAttribute("height", "80");
                                            else {
                                                var r,
                                                    s = Xt[o.shape];
                                                (r = document.createElementNS(
                                                    "http://www.w3.org/2000/svg",
                                                    "path"
                                                )).setAttribute("d", s),
                                                    n.setAttribute("width", "1.5"),
                                                    n.setAttribute("height", "1.5"),
                                                    r.setAttribute("stroke-width", ".1");
                                            }
                                            ["square", "circle"].indexOf(o.shape) > -1 ?
                                                (r.setAttribute("stroke-width", "10"),
                                                    n.setAttribute("viewBox", "0 0 100 100"),
                                                    n.setAttribute("width", "100"),
                                                    n.setAttribute("height", "100")) :
                                                ["diamond", "star"].indexOf(o.shape) > -1 ?
                                                (n.setAttribute("viewBox", "-.5 -.6 1 1.2"),
                                                    n.setAttribute("height", "1.8")) :
                                                ["triangle"].indexOf(o.shape) > -1 ?
                                                (n.setAttribute("viewBox", "-.6 -.7 1.2 1.1"),
                                                    n.setAttribute("width", "1.8"),
                                                    n.setAttribute("height", "1.8")) :
                                                ["heart"].indexOf(o.shape) > -1 ?
                                                (n.setAttribute("viewBox", "-.7 -.5 1.3 1"),
                                                    n.setAttribute("width", "2")) :
                                                ["marker"].indexOf(o.shape) > -1 &&
                                                (n.setAttribute("viewBox", "-.6 -.9 1.1 .8"),
                                                    n.setAttribute("width", "1.7"),
                                                    n.setAttribute("height", "1.7")),
                                                r.setAttribute("fill", o.color),
                                                r.setAttribute("stroke", "white"),
                                                n.appendChild(r),
                                                i.appendChild(n);
                                            var l = document.createTextNode(o.name);
                                            i.appendChild(l), t.appendChild(i);
                                        }
                                    })();
                                var l = fe.getElementsByClassName("sm_legend_item");
                                for (r = 0; r < l.length; r++)
                                    o.addEvent(l[r], "mouseover", c),
                                    o.addEvent(l[r], "mousedown", c);
                            }

                            function c() {
                                var t = this.dataset.id,
                                    o = e[t];
                                for (var i in o) {
                                    var n = o[i].sm;
                                    ("state" == n.type ? At : ci)(n.id);
                                }
                            }

                            function m(t, o) {
                                e[t] = [];
                                var i = "state" == o.type ? ft : zt;
                                for (var n in i) {
                                    var a = i[n];
                                    o.ids ?
                                        o.ids.split(",").indexOf(a.sm.id) > -1 && e[t].push(a) :
                                        a.sm.attributes.fill != o.color ||
                                        a.sm.hide ||
                                        e[t].push(a);
                                }
                            }
                        })(),
                        Mo(),
                        Jo(),
                        jt.create(),
                        Uo(),
                        Ko(),
                        ei(),
                        gi(),
                        po("complete", []),
                        o.isFunction(t) && t(),
                        no();
                }, 1));
        }

        function ii(e, t) {
            Bo(vt[e], !1, t);
        }

        function ni(e, t) {
            Bo(ft[e], !1, t);
        }

        function ai(e, t, o) {
            void 0 === t && (t = 4),
                void 0 === o && (o = function() {}),
                Bo({ sm: { type: "manual", zp: t, bbox: e } }, !1, function() {
                    o(), Ze.show();
                });
        }

        function ri(e, t, o) {
            void 0 === t && (t = 4), void 0 === o && (o = function() {});
            var i = { sm: { type: "manual", zp: t } },
                n = zt[e],
                a = n.sm.size * ke * t,
                r = (a * Me) / ze,
                s = n.sm.x - 0.5 * a,
                l = n.sm.y - 0.5 * r,
                c = a / (ze * ke);
            (i.sm.zooming_dimensions = { x: s, y: l, w: a, h: r, r: c }),
            Bo(i, !1, function() {
                o(), Ze.show();
            });
        }

        function si() {
            Kt && Ot.call(Kt), k && ((k = !1), re || (jt.hide(), (M = !1)));
        }

        function li(t, o, i) {
            if ((void 0 === i && (i = function() {}), "state" == t)) var n = ft[o];
            else if ("region" == t) n = vt[o];
            else n = zt[o];
            var a = n.sm.on_click,
                r = yt.sm.zooming_dimensions;
            if ("location" != t) {
                var s = n.sm.bbox,
                    l = 0.5 * (s.x + s.x2),
                    c = 0.5 * (s.y + s.y2);
                (l *= ke), (c *= ke);
            } else(l = n.sm.x), (c = n.sm.y);
            var m = (l - r.x) / Ce,
                u = (c - r.y) / Ce,
                p = m > 1.1 * xe || u > 1.1 * we,
                d = !n.sm.region && "region" == e.zoom_level;
            return p || d ?
                ii("-1", function() {
                    li(t, o, i);
                }) :
                n.sm.region && "out" == e.zoom_level ?
                ii(n.sm.region, function() {
                    li(t, o, i);
                }) :
                ((k = !0),
                    a ? Tt.call(n) : St.call(n),
                    jt.reset_pos(m, u, n),
                    (h = !0),
                    (k = !1),
                    i(), !0);
        }

        function ci(e) {
            var t = zt[e];
            t && Et(t, !0);
        }

        function mi() {
            jt.hide(), (M = !1), re ? Ot.call(z) : Kt && Ot.call(Kt);
        }

        function ui(e, t) {
            ct(e);
            var i = ft[e].sm.labels;
            ht(e);
            for (var n = 0; n < i.length; n++) {
                var a = i[n].sm.id;
                mt(a), wt(a);
            }
            o.isFunction(t) && t();
        }

        function pi() {
            (mo = !0), jt.hide();
        }

        function di() {
            mo = !1;
        }

        function _i() {
            uo = !0;
        }

        function hi() {
            uo = !1;
        }

        function fi(e) {
            It(e);
        }

        function vi(e) {
            At(e);
        }

        function yi() {
            (e.calibrate = Fo),
            (e.get_xy = io),
            (e.proj = xo),
            (e.load = oi),
            (e.region_zoom = ii),
            (e.state_zoom = ni),
            (e.zoom_in = !1),
            (e.zoom_out = !1),
            (e.location_zoom = ri),
            (e.back = fi),
            (e.popup = li),
            (e.pulse = ci),
            (e.pulse_state = vi),
            (e.popup_hide = mi),
            (e.zoom_level = "out"),
            (e.ignore_clicks = !1),
            (e.zoom_level_id = !1),
            (e.disable_urls = _i),
            (e.enable_urls = hi),
            (e.disable_popups = pi),
            (e.enable_popups = di),
            (e.refresh = ti),
            (e.refresh_state = ui),
            (e.loaded = !0),
            (e.trial = r);
        }

        function gi() {
            (e.states = ft),
            (e.regions = vt),
            (e.locations = zt),
            (e.labels = bt),
            (e.tooltip = jt);
        }
    }
    (window[e] = u),
    t.docReady(function() {
            if (
                ((function(e, t) {
                    (n = u.hooks[e]) && n.apply(null, t);
                    for (var o = u.plugin_hooks[e], i = 0; i < o.length; i++) {
                        var n;
                        (n = o[i]) && n.apply(null, t);
                    }
                })("ready"), !window[e].loaded)
            )
                for (var t = 0; t < c.length; t++) {
                    var o = c[t];
                    !(!o || !o.mapdata || "no" == o.mapdata.main_settings.auto_load) &&
                    (function(e) {
                        setTimeout(function() {
                            e.load();
                        }, 1);
                    })(o);
                }
        }),
        c.push(u);
})("simplemaps_countrymap");