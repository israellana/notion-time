(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"], {
    "2efe": function(e, t, l) {
        "use strict";
        l("b0c0");
        var c = l("7a23")
          , o = {
            key: 0,
            class: "absolute w-full h-full bg-red-200 opacity-90 z-50 text-red-900 font-medium pt-5"
        }
          , r = Object(c["createTextVNode"])(" Oh no, something went wrong!")
          , i = Object(c["createVNode"])("br", null, null, -1)
          , a = Object(c["createTextVNode"])("Please ")
          , s = Object(c["createTextVNode"])(". ")
          , n = {
            class: "absolute z-10 w-full h-full"
        }
          , d = Object(c["createVNode"])("svg", {
            class: "w-4 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        }), Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
            "clip-rule": "evenodd"
        })], -1)
          , u = Object(c["createVNode"])("svg", {
            class: "w-6 h-6",
            stroke: "currentColor",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, [Object(c["createVNode"])("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "15",
            r: "1"
        })], -1)
          , b = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Reset", -1)
          , h = Object(c["createVNode"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
            "clip-rule": "evenodd"
        })], -1)
          , p = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Close", -1)
          , f = Object(c["createVNode"])("svg", {
            class: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
        })], -1)
          , k = {
            class: "flex-1 flex flex-col pb-4 block relative"
        }
          , y = {
            class: "flex-1 flex flex-col px-8 z-20"
        }
          , O = {
            class: "flex-grow flex flex-col justify-between"
        }
          , j = Object(c["createVNode"])("dt", {
            class: "sr-only"
        }, "Title", -1)
          , v = {
            class: "text-gray-500 text-regular text-gray-900"
        }
          , g = Object(c["createVNode"])("dt", null, null, -1)
          , x = Object(c["createVNode"])("dt", {
            class: "sr-only"
        }, null, -1)
          , m = {
            class: "mt-1"
        };
        function V(e, t, l, V, N, w) {
            var F = Object(c["resolveComponent"])("BlockFace");
            return Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                class: ["col-span-1 flex flex-col text-center bg-white rounded-xl shadow-xl overflow-hidden relative border-4", ["block-component bg-" + l.color + "-100", "border-" + l.color + "-900", {
                    "opacity-0": l.isNew
                }]],
                style: w.styleObject,
                id: "block-" + l.id
            }, [l.hasError ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", o, [r, i, a, Object(c["createVNode"])("a", {
                onClick: t[1] || (t[1] = function(e) {
                    return w.reload()
                }
                ),
                class: "underline cursor-pointer"
            }, "reload"), s])) : Object(c["createCommentVNode"])("", !0), (Object(c["openBlock"])(),
            Object(c["createBlock"])("canvas", {
                key: N.particlesKey,
                class: "absolute w-full h-full z-10",
                id: "canvas-" + l.id,
                "elapsed-time": l.elapsedTime,
                size: l.size
            }, null, 8, ["id", "elapsed-time", "size"])), Object(c["createVNode"])("div", n, [Object(c["createVNode"])("div", {
                class: "rounded-md h-full opacity-20 border-3",
                style: [{
                    "border-radius": "8px"
                }, "box-shadow: inset 0 0 100px 0 #" + w.colorDeep + "; border-color: #" + w.colorLight]
            }, null, 4)]), Object(c["createVNode"])("div", {
                class: ["z-20 border-b-2 p-4 pb-0 relative shadow-none bg-transparent", ["border-" + l.color + "-300", {
                    "pb-4": !l.projectRef
                }]]
            }, [(Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                onClick: t[2] || (t[2] = function() {
                    return w.blockEdit && w.blockEdit.apply(w, arguments)
                }
                ),
                class: "h-1 cursor-pointer z-10 text-gray-900 text-2xl font-bold inline-block",
                style: {
                    "font-family": "'Roboto Mono', monospace",
                    width: "100%",
                    height: "32px"
                }
            }, [Object(c["createVNode"])("text", {
                style: "stroke: #" + w.colorOutline + ";",
                "text-anchor": "middle",
                x: "50%",
                y: "28",
                fill: "white",
                "stroke-width": "5",
                "letter-spacing": "3",
                "paint-order": "stroke"
            }, Object(c["toDisplayString"])(w.formattedElapsedTime), 5)])), Object(c["createVNode"])("span", {
                onClick: t[3] || (t[3] = function() {
                    return w.blockEdit && w.blockEdit.apply(w, arguments)
                }
                ),
                style: {},
                class: ["cursor-pointer z-10 text-md font-bold inline-block", "text-" + l.color + "-900"]
            }, Object(c["toDisplayString"])(l.title), 3), l.projectRef ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                key: 0,
                onClick: t[4] || (t[4] = function() {
                    return w.blockEdit && w.blockEdit.apply(w, arguments)
                }
                ),
                class: "cursor-pointer text-xs"
            }, [Object(c["createVNode"])("div", {
                class: ["w-2 h-2 inline-block rounded-full", "bg-" + w.projectObj.color + "-400"]
            }, null, 2), Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(w.projectObj.name), 1)])) : Object(c["createCommentVNode"])("", !0), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 1,
                onClick: t[5] || (t[5] = function() {
                    return w.blockEdit && w.blockEdit.apply(w, arguments)
                }
                ),
                class: ["z-20 top-1 left-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [d], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 2,
                class: ["cursor-move block-drag-handle z-20 top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [u], 2)), l.embed && l.local && !w.isActive ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 3,
                onClick: t[6] || (t[6] = function() {
                    return w.reset && w.reset.apply(w, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [b, h], 2)) : Object(c["createCommentVNode"])("", !0), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 4,
                onClick: t[7] || (t[7] = function() {
                    return w.deleteBlock && w.deleteBlock.apply(w, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [p, f], 2))], 2), Object(c["createVNode"])("div", k, [Object(c["createVNode"])("div", y, [Object(c["createVNode"])("dl", O, [j, Object(c["createVNode"])("dd", v, [Object(c["createVNode"])("a", {
                onClick: t[8] || (t[8] = function() {
                    return w.toggle && w.toggle.apply(w, arguments)
                }
                ),
                class: ["inline-flex items-center mt-4 mb-1", w.playBallColor]
            }, [Object(c["createVNode"])(F, {
                isActive: w.isActive,
                type: l.faceType,
                color: l.color,
                skin: l.skin,
                isLoading: l.isLoading,
                hasError: l.hasError,
                id: l.id
            }, null, 8, ["isActive", "type", "color", "skin", "isLoading", "hasError", "id"])], 2)]), g, x, Object(c["createVNode"])("dd", m, [Object(c["createVNode"])("span", {
                class: ["px-2 py-1 text-sm font-medium rounded-md", w.remainingTimeStyleObject],
                style: {
                    "font-family": "'Roboto Mono', monospace"
                }
            }, Object(c["toDisplayString"])(w.formattedRemainingTime.value), 3)])])]), this.size < 2 ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                key: 0,
                style: w.startStyleObject,
                class: ["absolute border-t-2 border-dashed opacity-80 w-full z-10", "border-" + this.color + "-500"]
            }, null, 6)) : Object(c["createCommentVNode"])("", !0), (Object(c["openBlock"])(!0),
            Object(c["createBlock"])(c["Fragment"], null, Object(c["renderList"])(w.elementsProcessed, (function(e) {
                return Object(c["openBlock"])(),
                Object(c["createBlock"])("div", {
                    class: "absolute w-full z-10",
                    style: e.styleObject,
                    key: e.id,
                    "data-time": ""
                }, [Object(c["createVNode"])("div", {
                    class: ["absolute block top-0 opacity-80", "bg-" + l.color + "-500"],
                    style: {
                        width: "4px",
                        height: "1px",
                        left: "0px"
                    }
                }, null, 2)], 4)
            }
            )), 128))])], 14, ["id"])
        }
        l("7db0"),
        l("c740"),
        l("4160"),
        l("c975"),
        l("a9e3"),
        l("07ac"),
        l("159b");
        var N = l("abdd")
          , w = {
            fpsLimit: 60,
            particles: {
                color: {
                    value: {}
                },
                move: {
                    attract: {
                        enable: !0,
                        distance: 200
                    },
                    direction: "top",
                    enable: !0,
                    outModes: {
                        default: "out"
                    },
                    random: !1,
                    speed: 2,
                    size: !0,
                    straight: !1
                },
                number: {
                    density: {
                        enable: !0,
                        area: 800
                    },
                    value: 200
                },
                opacity: {
                    value: .5
                },
                shape: {
                    type: ["circle"]
                },
                size: {
                    random: {
                        enable: !0,
                        minimumValue: 2
                    },
                    animation: {
                        enable: !0,
                        speed: 3,
                        minimumValue: 3
                    },
                    value: 5
                }
            },
            detectRetina: !0
        }
          , F = l("4ba1")
          , C = l("6c42")
          , B = l("d4ec")
          , z = l("bee2")
          , M = (l("cb29"),
        function() {
            function e(t, l, c) {
                Object(B["a"])(this, e),
                this.x = l,
                this.y = c,
                this.fixedY = c,
                this.speed = .06,
                this.cur = t,
                this.max = 32
            }
            return Object(z["a"])(e, [{
                key: "update",
                value: function(e, t) {
                    this.cur += this.speed,
                    this.y = e + this.fixedY + Math.sin(this.cur) * t
                }
            }]),
            e
        }())
          , E = function() {
            function e(t, l, c, o) {
                Object(B["a"])(this, e),
                this.index = t,
                this.totalPoints = l,
                this.color = c,
                this.points = [],
                this.centerY = o,
                this.pointMax = 0
            }
            return Object(z["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    this.stageWidth = e,
                    this.stageHeight = t,
                    this.centerX = e / 2,
                    this.pointGap = this.stageWidth / (this.totalPoints - 1),
                    this.init()
                }
            }, {
                key: "init",
                value: function() {
                    this.points = [];
                    for (var e = 0; e < this.totalPoints; e++) {
                        var t = new M(this.index + e,this.pointGap * e,this.centerY);
                        this.points[e] = t
                    }
                }
            }, {
                key: "draw",
                value: function(e, t, l) {
                    e.beginPath(),
                    e.fillStyle = this.color,
                    this.points[this.totalPoints - 1].y = t + 90;
                    var c = this.points[0].x
                      , o = this.points[0].y + t;
                    e.moveTo(c, o);
                    var r = 32;
                    "start" === l && (this.pointMax >= 32 ? r = 32 : (this.pointMax = this.pointMax + .5,
                    r = this.pointMax)),
                    "stop" === l && (this.pointMax <= 0 ? r = 0 : (this.pointMax = this.pointMax - .5,
                    r = this.pointMax));
                    for (var i = 1; i < this.totalPoints; i++) {
                        i < this.totalPoints - 1 && this.points[i].update(t, r);
                        var a = (c + this.points[i].x) / 2
                          , s = (o + this.points[i].y) / 2;
                        e.quadraticCurveTo(c, o, a, s),
                        c = this.points[i].x,
                        o = this.points[i].y
                    }
                    e.lineTo(c, o),
                    e.lineTo(this.stageWidth, this.stageHeight),
                    e.lineTo(this.points[0].x, this.stageHeight),
                    e.fill(),
                    e.closePath()
                }
            }]),
            e
        }()
          , D = function() {
            function e(t) {
                Object(B["a"])(this, e),
                this.totalWaves = 3,
                this.totalPoints = 6;
                var l = N["a"].findIndex((function(e) {
                    return e.value === t
                }
                ));
                this.color = ["#" + N["a"][l].colors[200], "#" + N["a"][l].colors[400], "#" + N["a"][l].colors[500]],
                this.waves = [];
                for (var c = 0; c < this.totalWaves; c++) {
                    var o = new E(c,this.totalPoints,this.color[c],90);
                    this.waves[c] = o
                }
            }
            return Object(z["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    this.stageWidth = e,
                    this.stageHeight = t;
                    for (var l = 0; l < this.totalWaves; l++) {
                        var c = this.waves[l];
                        c.resize(e, t)
                    }
                }
            }, {
                key: "draw",
                value: function(e, t, l, c) {
                    if (l || c)
                        for (var o = 0; o < this.totalWaves; o++) {
                            var r = this.waves[o];
                            r.draw(e, t, c)
                        }
                    else
                        e.beginPath(),
                        e.fillStyle = this.color[2],
                        e.rect(0, t, this.stageWidth, this.stageHeight),
                        e.fill()
                }
            }]),
            e
        }()
          , A = function() {
            function e(t, l) {
                Object(B["a"])(this, e),
                this.index = t,
                this.color = l,
                this.wind = 1 * Math.random() + 1 - 1,
                this.speed = 5 * Math.random() + 1 + 1 - 1.5,
                this.size = Math.floor(6 * Math.random() + 2),
                this.location = {
                    x: 260 * Math.random(),
                    y: 600
                },
                this.sizeAlt = 0
            }
            return Object(z["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    this.stageWidth = e,
                    this.stageHeight = t,
                    this.init(e, t)
                }
            }, {
                key: "init",
                value: function() {
                    this.wind = 1 * Math.random() + 1 - 1.5,
                    this.speed = 5 * Math.random() + 1 + 1 - 1,
                    this.size = Math.floor(6 * Math.random() + 2),
                    this.location = {
                        x: Math.random() * this.stageWidth,
                        y: this.stageHeight
                    }
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    "start" === t && (this.sizeAlt >= this.size ? this.sizeAlt = this.size : this.sizeAlt = this.sizeAlt + .3),
                    "stop" === t && (this.sizeAlt = this.sizeAlt - .3,
                    this.sizeAlt <= 0 && (this.sizeAlt = 0,
                    this.location = {
                        x: Math.random() * this.stageWidth,
                        y: this.stageHeight
                    })),
                    (this.location.y < -10 || this.location.x < -10 || this.location.x > this.stageWidth + 10) && this.init(),
                    this.location.y > this.stageHeight - 100 && (this.sizeAlt = .09 * (this.stageHeight - this.location.y),
                    this.sizeAlt > this.size && (this.sizeAlt = this.size)),
                    this.location.x += this.wind,
                    this.location.y -= this.speed,
                    e.beginPath(),
                    e.fillStyle = this.color,
                    e.arc(this.location.x, this.location.y, this.sizeAlt, 0, 2 * Math.PI),
                    e.fill()
                }
            }]),
            e
        }()
          , S = function() {
            function e(t) {
                Object(B["a"])(this, e),
                this.totalParticles = 15;
                var l = N["a"].findIndex((function(e) {
                    return e.value === t
                }
                ));
                this.color = ["#" + N["a"][l].colors[100], "#" + N["a"][l].colors[500], "#" + N["a"][l].colors[600], "#" + N["a"][l].colors[700], "#" + N["a"][l].colors[800], "#" + N["a"][l].colors[900]],
                this.particles = [];
                for (var c = 0; c < this.totalParticles; c++) {
                    var o = new A(c,this.color[Math.floor(Math.random() * (this.color.length - 1))]);
                    this.particles[c] = o
                }
            }
            return Object(z["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    for (var l = 0; l < this.totalParticles; l++) {
                        var c = this.particles[l];
                        c.resize(e, t)
                    }
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    for (var l = 0; l < this.totalParticles; l++) {
                        var c = this.particles[l];
                        c.draw(e, t)
                    }
                }
            }]),
            e
        }()
          , P = function() {
            function e(t, l) {
                Object(B["a"])(this, e),
                this.color = l,
                this.id = t,
                this.active = !1,
                this.canvasEl = document.getElementById("canvas-" + t),
                this.ctx = this.canvasEl.getContext("2d"),
                this.elapsedTime = this.canvasEl.getAttribute("elapsed-time"),
                this.size = this.canvasEl.getAttribute("size"),
                this.bootstrap = null,
                this.inState = 0,
                this.stageWidth = this.canvasEl.clientWidth,
                this.stageHeight = this.canvasEl.clientHeight,
                this.canvasEl.width = 2 * this.stageWidth,
                this.canvasEl.height = 2 * this.stageHeight,
                this.ctx.scale(2, 2),
                this.waveGroup = new D(this.color),
                this.particles = new S(this.color),
                this.resize(this.stageWidth, this.stageHeight),
                requestAnimationFrame(this.animate.bind(this))
            }
            return Object(z["a"])(e, [{
                key: "update",
                value: function(e) {
                    this.color = e,
                    this.size = this.canvasEl.getAttribute("size"),
                    this.stageWidth = this.canvasEl.clientWidth,
                    this.stageHeight = this.canvasEl.clientHeight,
                    this.canvasEl.width = this.stageWidth,
                    this.canvasEl.height = this.stageHeight,
                    this.waveGroup = new D(this.color),
                    this.particles = new S(this.color),
                    this.resize(this.stageWidth, this.stageHeight)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.waveGroup.resize(e, t),
                    this.particles.resize(e, t)
                }
            }, {
                key: "draw",
                value: function(e) {
                    if (this.bootstrap && (this.inState = this.inState + 1,
                    this.inState >= 80 && (this.bootstrap = null,
                    this.inState = 0)),
                    this.active || this.bootstrap) {
                        var t = this.posY() - 90;
                        this.waveGroup.draw(e, t, this.active, this.bootstrap),
                        this.particles.draw(e, this.bootstrap)
                    } else {
                        var l = this.posY();
                        this.waveGroup.draw(e, l, this.active, this.bootstrap)
                    }
                }
            }, {
                key: "animate",
                value: function() {
                    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight),
                    this.draw(this.ctx),
                    requestAnimationFrame(this.animate.bind(this))
                }
            }, {
                key: "posY",
                value: function() {
                    this.elapsedTime = this.canvasEl.getAttribute("elapsed-time");
                    var e = this.size / 1
                      , t = 0;
                    if (this.size < 2) {
                        var l = 2 - this.size;
                        t = 60 * l * 60 * 1e3,
                        e = 2
                    }
                    var c = 60 * e * 60 * 1e3 / 100
                      , o = (this.elapsedTime / 1 + t) / c
                      , r = this.stageHeight - 90
                      , i = o * (r / 100) + 90;
                    return i
                }
            }, {
                key: "start",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        e.bootstrap = "start",
                        e.inState = 0,
                        e.active = !0
                    }
                    ), 250)
                }
            }, {
                key: "stop",
                value: function() {
                    this.bootstrap = "stop",
                    this.inState = 0,
                    this.active = !1
                }
            }]),
            e
        }()
          , L = l("1209")
          , T = {
            name: "Block",
            components: {
                BlockFace: F["a"]
            },
            props: {
                id: String,
                title: String,
                color: String,
                projectRef: {
                    default: null,
                    type: String
                },
                skin: {
                    default: "neutral",
                    type: String
                },
                size: Number,
                src: String,
                faceType: {
                    default: "default",
                    type: String
                },
                elapsedTime: Number,
                preview: {
                    default: !1,
                    type: Boolean
                },
                embed: {
                    default: !1,
                    type: Boolean
                },
                embedPreview: {
                    default: !1,
                    type: Boolean
                },
                local: {
                    default: !1,
                    type: Boolean
                },
                isLoading: {
                    default: !1,
                    type: Boolean
                },
                hasError: {
                    default: !1,
                    type: Boolean
                },
                isNew: {
                    default: !1,
                    type: Boolean
                },
                embedOptions: Object,
                totalTime: Number,
                activeSince: Number,
                elements: Array,
                allowTemplateAdd: Boolean,
                boardMode: {
                    default: "default",
                    type: String
                },
                collectors: Array,
                projects: Array,
                refID: String
            },
            setup: function() {
                var e = Object(C["c"])();
                return {
                    toast: e
                }
            },
            data: function() {
                return {
                    canvas: null,
                    stageWidth: 0,
                    stageHeight: 0,
                    particlesKey: 0,
                    sizeOptionsHours: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "01",
                        value: 1
                    }, {
                        text: "02",
                        value: 2
                    }, {
                        text: "03",
                        value: 3
                    }, {
                        text: "04",
                        value: 4
                    }, {
                        text: "05",
                        value: 5
                    }, {
                        text: "06",
                        value: 6
                    }, {
                        text: "07",
                        value: 7
                    }, {
                        text: "08",
                        value: 8
                    }],
                    sizeOptionsMinutes: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "15",
                        value: .25
                    }, {
                        text: "30",
                        value: .5
                    }, {
                        text: "45",
                        value: .75
                    }],
                    colors: N["a"],
                    particles: w
                }
            },
            computed: {
                isActive: function() {
                    return !!this.activeSince
                },
                colorLight: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[100]
                },
                colorDark: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[400]
                },
                colorGrad: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[500]
                },
                colorDeep: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorOutline: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[900]
                },
                playBallColor: function() {
                    var e = "";
                    return this.isActive ? "hover:bg-transparent" : "text-" + this.color + "-900 rounded-full" + e
                },
                particlesConfig: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ))
                      , l = Object.values(this.colors[t].colors)
                      , c = JSON.parse(JSON.stringify(this.particles));
                    return c.particles.color.value = l,
                    c
                },
                formattedElapsedTime: function() {
                    var e = new Date(null);
                    e.setSeconds(this.elapsedTime / 1e3);
                    var t = e.toUTCString();
                    return t.substr(t.indexOf(":") - 2, 8)
                },
                formattedRemainingTime: function() {
                    var e = new Date(null)
                      , t = !1
                      , l = 60 * this.size * 60;
                    this.elapsedTime > 0 && (l -= this.elapsedTime / 1e3,
                    l < 0 && (l = Math.abs(l),
                    t = !0)),
                    e.setSeconds(l);
                    var c = e.toUTCString();
                    return {
                        status: t,
                        value: c.substr(c.indexOf(":") - 2, 8)
                    }
                },
                styleObject: function() {
                    var e = 90
                      , t = this.size / 1;
                    return t < 2 && (t = 2),
                    "compact" === this.boardMode && (t = 2),
                    {
                        height: 100 * t + e + "px"
                    }
                },
                startStyleObject: function() {
                    var e = .02
                      , t = 2 - this.size
                      , l = t / e;
                    return {
                        top: l + "%"
                    }
                },
                remainingTimeStyleObject: function() {
                    return this.formattedRemainingTime.status ? "text-white bg-gray-900" : "text-" + this.color + "-800 bg-" + this.color + "-100"
                },
                elementsProcessed: function() {
                    var e = this.size / 1
                      , t = 0;
                    if (this.size < 2) {
                        var l = 2 - this.size;
                        t = 60 * l * 60 * 1e3,
                        e = 2
                    }
                    var c = 60 * e * 60 * 1e3 / 100
                      , o = []
                      , r = t;
                    return this.elements.length > 0 && this.elements.forEach((function(e) {
                        if (e.end) {
                            r += e.end - e.start;
                            var t = r / c;
                            o.push({
                                id: e.id,
                                border: r,
                                styleObject: {
                                    top: t + "%"
                                }
                            })
                        }
                    }
                    )),
                    o
                },
                showControls: function() {
                    return !0 !== this.embed || "view" !== this.embedOptions.mode
                },
                projectObj: function() {
                    var e = this;
                    if (this.projectRef && "null" !== this.projectRef && this.projects.length) {
                        var t = this.projects.find((function(t) {
                            return t.id === e.projectRef
                        }
                        ));
                        return t
                    }
                    return {}
                }
            },
            methods: {
                start: function() {
                    this.canvas.start(),
                    this.$emit("elementStart", this.id)
                },
                stop: function() {
                    this.canvas.stop(),
                    this.$emit("elementEnd", this.id)
                },
                reset: function() {
                    this.$emit("blockReset", this.id)
                },
                toggle: function() {
                    if (this.preview)
                        this.toast.warning("Please save your changes first to be able to edit the block.");
                    else {
                        if (!0 === this.embed && "view" === this.embedOptions.mode)
                            return;
                        if (!0 === this.embed && !0 === this.embedPreview)
                            return;
                        this.isActive ? this.stop() : this.start()
                    }
                },
                blockEdit: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockEditStart", this.id)
                },
                deleteBlock: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockDelete", this.id, this.refID)
                },
                blockContinue: function() {
                    this.$emit("handleTrackingChange", !0)
                },
                forceRerenderParticles: function() {
                    var e = this;
                    Object(c["nextTick"])((function() {
                        e.canvas.update(e.color)
                    }
                    ))
                },
                reload: function() {
                    window.location.reload()
                }
            },
            watch: {
                boardMode: function() {
                    this.forceRerenderParticles()
                },
                size: function() {
                    this.forceRerenderParticles()
                },
                color: function() {
                    this.forceRerenderParticles()
                },
                activeSince: function(e) {
                    e ? this.canvas.start() : this.canvas.stop()
                }
            },
            mounted: function() {
                var e = this;
                if (this.isNew) {
                    this.$emit("blockAdded", this.id);
                    var t = document.querySelector("#block-" + this.id);
                    t.style.zIndex = 1e7,
                    Object(L["a"])({
                        targets: "#block-" + this.id,
                        easing: "linear",
                        duration: 380,
                        opacity: [1, 1],
                        rotate: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        delay: 600,
                        matrix3d: ["0.1, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.318, 0, 0, 0, 0, 0.318, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.448, 0, 0, 0, 0, 0.448, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.688, 0, 0, 0, 0, 0.688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.983, 0, 0, 0, 0, 0.983, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.011, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.131, 0, 0, 0, 0, 1.131, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.147, 0, 0, 0, 0, 1.147, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.056, 0, 0, 0, 0, 1.056, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.129, 0, 0, 0, 0, 1.129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.097, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.023, 0, 0, 0, 0, 1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.985, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.965, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.967, 0, 0, 0, 0, 0.967, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.988, 0, 0, 0, 0, 0.988, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"],
                        complete: function() {
                            L["a"].remove("#block-" + e.id),
                            t.style.zIndex = "auto"
                        }
                    })
                }
                this.canvas = new P(this.id,this.color),
                this.activeSince && (this.canvas.start(),
                this.blockContinue())
            }
        };
        T.render = V;
        t["a"] = T
    },
    "35bb": function(e, t, l) {
        "use strict";
        var c = l("7a23")
          , o = {
            class: "absolute z-10 w-full h-full"
        }
          , r = Object(c["createVNode"])("svg", {
            class: "w-4 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        }), Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
            "clip-rule": "evenodd"
        })], -1)
          , i = Object(c["createVNode"])("svg", {
            class: "w-6 h-6",
            stroke: "currentColor",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, [Object(c["createVNode"])("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "15",
            r: "1"
        })], -1)
          , a = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Close", -1)
          , s = Object(c["createVNode"])("svg", {
            class: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
        })], -1)
          , n = {
            class: ""
        }
          , d = {
            class: ""
        }
          , u = {
            style: {
                "font-family": "'Roboto Mono', monospace"
            }
        }
          , b = {
            class: "flex-shrink-0"
        }
          , h = {
            class: "flex-grow text-left pl-4"
        }
          , p = {
            class: "text-lg",
            style: {
                "font-family": "'Roboto Mono', monospace"
            }
        }
          , f = Object(c["createVNode"])("br", null, null, -1)
          , k = {
            class: "text-sm"
        };
        function y(e, t, l, y, O, j) {
            var v = Object(c["resolveComponent"])("BlockIcon");
            return Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                class: ["col-span-1 shadow-xl hover:opacity-100 flex flex-col text-center bg-white rounded-xl overflow-hidden relative border-4", ["block-component bg-" + l.color + "-100", "border-" + l.color + "-900", {
                    "opacity-0": l.isNew
                }]],
                id: "block-" + l.id
            }, [Object(c["createVNode"])("div", o, [Object(c["createVNode"])("div", {
                class: "rounded-md h-full opacity-20 border-3",
                style: [{
                    "border-radius": "8px"
                }, "box-shadow: inset 0 0 100px 0 #" + j.colorDeep + "; border-color: #" + j.colorLight]
            }, null, 4)]), Object(c["createVNode"])("div", {
                class: ["z-20 p-4 relative shadow-none", "bg-transparent border-" + l.color + "-300"]
            }, [(Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                onClick: t[1] || (t[1] = function() {
                    return j.blockEdit && j.blockEdit.apply(j, arguments)
                }
                ),
                class: "h-1 cursor-pointer z-10 text-gray-900 text-lg font-bold inline-block",
                style: {
                    "font-family": "'Roboto Mono', monospace",
                    width: "100%",
                    height: "32px"
                }
            }, [Object(c["createVNode"])("text", {
                style: "stroke: #" + j.colorOutline + ";",
                "text-anchor": "middle",
                x: "50%",
                y: "26",
                fill: "white",
                "stroke-width": "4",
                "letter-spacing": "2",
                "paint-order": "stroke"
            }, Object(c["toDisplayString"])(j.formattedElapsedTime), 5)])), Object(c["createVNode"])("span", {
                onClick: t[2] || (t[2] = function() {
                    return j.blockEdit && j.blockEdit.apply(j, arguments)
                }
                ),
                style: {},
                class: ["cursor-pointer z-10 text-md font-bold inline-block", "text-" + l.color + "-900"]
            }, Object(c["toDisplayString"])(l.title), 3), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 0,
                onClick: t[3] || (t[3] = function() {
                    return j.blockEdit && j.blockEdit.apply(j, arguments)
                }
                ),
                class: ["z-20 top-1 left-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [r], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 1,
                class: ["cursor-move block-drag-handle z-20 top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [i], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 2,
                onClick: t[4] || (t[4] = function() {
                    return j.deleteBlock && j.deleteBlock.apply(j, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [a, s], 2))], 2), l.progressEnd ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                key: 0,
                class: ["w-full border-t p-4", "border-" + l.color + "-500"]
            }, [Object(c["createVNode"])("div", n, [Object(c["createVNode"])("span", {
                class: ["leading-4 inline-flex p-2 block text-3xl", "text-" + l.color + "-700"],
                style: {
                    "font-family": "'Roboto Mono', monospace"
                }
            }, Object(c["toDisplayString"])(j.formattedProgressEnd.percentage) + "% ", 3)]), Object(c["createVNode"])("div", d, [Object(c["createVNode"])("span", u, Object(c["toDisplayString"])(j.formattedProgressEnd.progress), 1)])], 2)) : Object(c["createCommentVNode"])("", !0), (Object(c["openBlock"])(!0),
            Object(c["createBlock"])(c["Fragment"], null, Object(c["renderList"])(j.countersProcessed, (function(e) {
                return Object(c["openBlock"])(),
                Object(c["createBlock"])("div", {
                    class: ["w-full border-t-2 p-4 flex leading-4", "border-" + l.color + "-300"],
                    key: e
                }, [Object(c["createVNode"])("div", b, [Object(c["createVNode"])("span", {
                    class: ["rounded-lg inline-flex p-2", "bg-" + l.color + "-50 border-" + l.color + "-300 border-2"]
                }, [Object(c["createVNode"])(v, {
                    type: e.icon,
                    color: l.color
                }, null, 8, ["type", "color"])], 2)]), Object(c["createVNode"])("div", h, [Object(c["createVNode"])("span", p, Object(c["toDisplayString"])(e.value), 1), f, Object(c["createVNode"])("span", k, Object(c["toDisplayString"])(e.title), 1)])], 2)
            }
            )), 128))], 10, ["id"])
        }
        l("c740"),
        l("4160"),
        l("a15b"),
        l("a9e3"),
        l("35b3"),
        l("159b");
        var O = l("abdd")
          , j = l("6c42")
          , v = l("5a0c")
          , g = l.n(v)
          , x = l("4208")
          , m = l.n(x)
          , V = l("a933")
          , N = l("1209");
        g.a.extend(m.a);
        var w = {
            name: "Block",
            components: {
                BlockIcon: V["a"]
            },
            props: {
                id: String,
                title: String,
                color: String,
                size: Number,
                src: String,
                progressStart: Number,
                progressEnd: Number,
                counters: Array,
                faceType: {
                    default: "default",
                    type: String
                },
                elapsedTime: Number,
                preview: {
                    default: !1,
                    type: Boolean
                },
                embed: {
                    default: !1,
                    type: Boolean
                },
                isLoading: {
                    default: !1,
                    type: Boolean
                },
                hasError: {
                    default: !1,
                    type: Boolean
                },
                isNew: {
                    default: !1,
                    type: Boolean
                },
                embedOptions: Object,
                totalTime: Number,
                activeSince: Number,
                elements: Array,
                allowTemplateAdd: Boolean,
                refID: String,
                blockTick: Number
            },
            setup: function() {
                var e = Object(j["c"])();
                return {
                    toast: e
                }
            },
            data: function() {
                return {
                    colors: O["a"]
                }
            },
            computed: {
                colorLight: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[100]
                },
                colorDark: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[400]
                },
                colorDeep: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorOutline: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[900]
                },
                formattedElapsedTime: function() {
                    var e = this.progressStart
                      , t = g()(e)
                      , l = g()(this.blockTick)
                      , c = []
                      , o = l.diff(t, "years");
                    o && c.push(o + "y");
                    var r = g()(e).add(o, "years")
                      , i = l.diff(r, "days");
                    (o || i) && c.push(i + "d");
                    var a = g()(e).add(o, "years").add(i, "days")
                      , s = l.diff(a, "hours");
                    (o || i || s) && c.push(s + "h");
                    var n = g()(e).add(o, "years").add(i, "days").add(s, "hours")
                      , d = l.diff(n, "minutes");
                    return c.push(d + "m"),
                    c.join(" ")
                },
                formattedProgressEnd: function() {
                    var e = this.progressStart
                      , t = this.blockTick;
                    t = this.progressEnd;
                    var l = g()(e)
                      , c = g()(t)
                      , o = this.blockTick
                      , r = c.valueOf() - l.valueOf()
                      , i = o - l.valueOf()
                      , a = ~~(i / r * 100)
                      , s = []
                      , n = c.diff(l, "years");
                    n && s.push(n + "y");
                    var d = g()(e).add(n, "years")
                      , u = c.diff(d, "days");
                    (n || u) && s.push(u + "d");
                    var b = g()(e).add(n, "years").add(u, "days")
                      , h = c.diff(b, "hours");
                    (n || u || h) && s.push(h + "h");
                    var p = g()(e).add(n, "years").add(u, "days").add(h, "hours")
                      , f = c.diff(p, "minutes");
                    return s.push(f + "m"),
                    {
                        progress: s.join(" "),
                        percentage: a
                    }
                },
                countersProcessed: function() {
                    var e = []
                      , t = this.progressStart
                      , l = g()(t)
                      , c = g()(this.blockTick)
                      , o = c.diff(l, "day", !0);
                    return this.counters.length > 0 && this.counters.forEach((function(t) {
                        var l = 0;
                        if ("number" === t.type)
                            l = t.day * o,
                            l = Math.round(100 * (l + Number.EPSILON)) / 100;
                        else if ("date" === t.type) {
                            var c = t.day * o
                              , r = []
                              , i = ~~(c / 86400);
                            i && r.push(i + "d");
                            var a = ~~((c - 86400 * i) / 3600);
                            a && r.push(a + "h");
                            var s = ~~((c - 86400 * i - 3600 * a) / 60);
                            s && r.push(s + "m");
                            var n = ~~(c - 86400 * i - 3600 * a - 60 * s);
                            r.push(n + "s"),
                            l = r.join(" ")
                        }
                        e.push({
                            value: l,
                            title: t.title,
                            icon: t.icon
                        })
                    }
                    )),
                    e
                }
            },
            methods: {
                reset: function() {
                    this.$emit("blockReset", this.id)
                },
                blockEdit: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockEditStart", this.id)
                },
                deleteBlock: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockDelete", this.id, this.refID)
                }
            },
            mounted: function() {
                var e = this;
                if (this.isNew) {
                    this.$emit("blockAdded", this.id);
                    var t = document.querySelector("#block-" + this.id);
                    t.style.zIndex = 1e7,
                    Object(N["a"])({
                        targets: "#block-" + this.id,
                        easing: "linear",
                        duration: 380,
                        opacity: [1, 1],
                        rotate: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        delay: 600,
                        matrix3d: ["0.1, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.318, 0, 0, 0, 0, 0.318, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.448, 0, 0, 0, 0, 0.448, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.688, 0, 0, 0, 0, 0.688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.983, 0, 0, 0, 0, 0.983, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.011, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.131, 0, 0, 0, 0, 1.131, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.147, 0, 0, 0, 0, 1.147, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.056, 0, 0, 0, 0, 1.056, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.129, 0, 0, 0, 0, 1.129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.097, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.023, 0, 0, 0, 0, 1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.985, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.965, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.967, 0, 0, 0, 0, 0.967, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.988, 0, 0, 0, 0, 0.988, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"],
                        complete: function() {
                            N["a"].remove("#block-" + e.id),
                            t.style.zIndex = "auto"
                        }
                    })
                }
            }
        };
        w.render = y;
        t["a"] = w
    },
    "35e2": function(e, t, l) {},
    "3c49": function(e, t, l) {
        "use strict";
        var c = l("7a23")
          , o = {
            key: 0,
            class: "absolute w-full h-full bg-red-200 opacity-90 z-50 text-red-900 font-medium pt-5"
        }
          , r = Object(c["createTextVNode"])(" Oh no, something went wrong!")
          , i = Object(c["createVNode"])("br", null, null, -1)
          , a = Object(c["createTextVNode"])("Please ")
          , s = Object(c["createTextVNode"])(". ")
          , n = {
            class: "absolute z-10 w-full h-full"
        }
          , d = {
            class: "flex-shrink-0"
        }
          , u = {
            class: "flex-1"
        }
          , b = {
            key: 0,
            class: "flex-shrink-2 w-12"
        }
          , h = {
            key: 1,
            class: "flex-shrink-1"
        }
          , p = Object(c["createVNode"])("svg", {
            class: "w-4 h-4",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
            "clip-rule": "evenodd"
        })], -1)
          , f = {
            key: 2,
            class: "flex-shrink-1 items-center relative"
        }
          , k = Object(c["createVNode"])("svg", {
            class: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
            "clip-rule": "evenodd"
        })], -1)
          , y = Object(c["createVNode"])("svg", {
            class: "w-4 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        }), Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
            "clip-rule": "evenodd"
        })], -1)
          , O = Object(c["createVNode"])("svg", {
            class: "w-6 h-6",
            stroke: "currentColor",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, [Object(c["createVNode"])("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "15",
            r: "1"
        })], -1)
          , j = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Reset", -1)
          , v = Object(c["createVNode"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
            "clip-rule": "evenodd"
        })], -1)
          , g = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Close", -1)
          , x = Object(c["createVNode"])("svg", {
            class: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
        })], -1)
          , m = {
            class: "z-20 pb-2"
        }
          , V = {
            key: 1,
            class: "flex z-20 items-center justify-center flex-wrap"
        }
          , N = {
            class: "w-6 h-6"
        };
        function w(e, t, l, w, F, C) {
            var B = Object(c["resolveComponent"])("BlockIcon");
            return Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                id: "block-" + l.id,
                ref: "block-" + l.id,
                class: ["col-span-1 shadow-xl flex flex-col text-center bg-white rounded-xl shadow relative border-4 h-auto", ["bg-" + l.color + "-100 border-" + l.color + "-900", {
                    "opacity-0": l.isNew
                }]]
            }, [l.hasError ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", o, [r, i, a, Object(c["createVNode"])("a", {
                onClick: t[1] || (t[1] = function(e) {
                    return C.reload()
                }
                ),
                class: "underline cursor-pointer"
            }, "reload"), s])) : Object(c["createCommentVNode"])("", !0), Object(c["createVNode"])("div", n, [Object(c["createVNode"])("div", {
                class: "rounded-md h-full opacity-20 border-3",
                style: [{
                    "border-radius": "8px"
                }, "box-shadow: inset 0 0 100px 0 #" + C.colorDeep + "; border-color: #" + C.colorLight]
            }, null, 4)]), Object(c["createVNode"])("div", {
                class: ["bg-" + l.color + "-200 border-" + l.color + "-300", "absolute w-full bottom-0 left-0"],
                style: [C.progressStyle, {
                    transition: "height 0.4s ease-in-out"
                }]
            }, null, 6), Object(c["createVNode"])("div", {
                class: ["z-20 px-4 pt-4 relative shadow-none flex items-center", "bg-transparent border-" + l.color + "-300"]
            }, [Object(c["createVNode"])("div", d, [Object(c["createVNode"])("span", {
                class: ["rounded-lg inline-flex p-2", "bg-" + l.color + "-50 border-" + l.color + "-300 border-2"]
            }, [Object(c["createVNode"])(B, {
                onClick: C.blockEdit,
                type: l.faceType,
                color: l.color,
                isLoading: l.isLoading,
                hasError: l.hasError
            }, null, 8, ["onClick", "type", "color", "isLoading", "hasError"])], 2)]), Object(c["createVNode"])("div", u, [(Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                onClick: t[2] || (t[2] = function() {
                    return C.blockEdit && C.blockEdit.apply(C, arguments)
                }
                ),
                class: "h-1 cursor-pointer z-10 text-gray-900 text-lg font-bold inline-block",
                style: {
                    "font-family": "'Roboto Mono', monospace",
                    width: "100%",
                    height: "28px"
                }
            }, [Object(c["createVNode"])("text", {
                style: "stroke: #" + C.colorOutline + ";",
                "text-anchor": "middle",
                x: "50%",
                y: "24",
                fill: "white",
                "stroke-width": "4",
                "letter-spacing": "2",
                "paint-order": "stroke"
            }, Object(c["toDisplayString"])(C.formattedTotal), 5)])), Object(c["createVNode"])("span", {
                onClick: t[3] || (t[3] = function() {
                    return C.blockEdit && C.blockEdit.apply(C, arguments)
                }
                ),
                class: ["cursor-pointer font-bold", "text-" + l.color + "-900"]
            }, Object(c["toDisplayString"])(l.title), 3)]), C.showControls ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", b)), C.showControls ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", h, [(Object(c["openBlock"])(!0),
            Object(c["createBlock"])(c["Fragment"], null, Object(c["renderList"])(F.decreaseEl, (function(e) {
                return Object(c["openBlock"])(),
                Object(c["createBlock"])("div", {
                    key: e.id,
                    id: e.id,
                    class: ["text-" + l.color + "-800", "absolute top-1 font-bold text-lg"],
                    style: {
                        "font-family": "'Roboto Mono', monospace"
                    }
                }, Object(c["toDisplayString"])(e.value), 11, ["id"])
            }
            )), 128)), Object(c["createVNode"])("button", {
                onClick: t[4] || (t[4] = function() {
                    return C.decrease && C.decrease.apply(C, arguments)
                }
                ),
                class: [["text-white border-2", C.textClass], "block-decrease focus:outline-none focus:ring-none rounded-md border-b-4"],
                disabled: !this.totalElements,
                style: {
                    padding: "1px",
                    "margin-bottom": "3px",
                    "margin-right": "5px"
                }
            }, [p], 10, ["disabled"])])) : Object(c["createCommentVNode"])("", !0), C.showControls ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", f, [(Object(c["openBlock"])(!0),
            Object(c["createBlock"])(c["Fragment"], null, Object(c["renderList"])(F.increaseEl, (function(e) {
                return Object(c["openBlock"])(),
                Object(c["createBlock"])("div", {
                    key: e.id,
                    id: e.id,
                    class: ["text-" + l.color + "-900", "absolute -top-5 font-bold text-xl"],
                    style: {
                        "font-family": "'Roboto Mono', monospace"
                    }
                }, Object(c["toDisplayString"])(e.value), 11, ["id"])
            }
            )), 128)), Object(c["createVNode"])("button", {
                onClick: t[5] || (t[5] = function(e) {
                    return C.increase("_default", "_default", l.faceType, l.increaseValue)
                }
                ),
                class: ["text-" + l.color + "-800 hover:bg-" + l.color + "-700 hover:text-" + l.color + "-200 border-2 border-b-4 border-" + l.color + "-800 bg-" + l.color + "-300", "block-increase focus:outline-none focus:ring-none rounded-md"]
            }, [k], 2)])) : Object(c["createCommentVNode"])("", !0), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 3,
                onClick: t[6] || (t[6] = function() {
                    return C.blockEdit && C.blockEdit.apply(C, arguments)
                }
                ),
                class: ["z-20 top-1 left-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [y], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 4,
                class: ["cursor-move block-drag-handle z-20 top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [O], 2)), l.embed && l.local ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 5,
                onClick: t[7] || (t[7] = function() {
                    return C.reset && C.reset.apply(C, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-700 hover:text-" + l.color + "-900"]
            }, [j, v], 2)) : Object(c["createCommentVNode"])("", !0), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 6,
                onClick: t[8] || (t[8] = function() {
                    return C.deleteBlock && C.deleteBlock.apply(C, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [g, x], 2))], 2), Object(c["createVNode"])("div", m, [Object(c["createVNode"])("span", {
                class: ["text-xs block leading-none", "text-" + l.color + "-500"]
            }, Object(c["toDisplayString"])(C.lastElement), 3)]), l.counters && l.counters.length ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", V, [(Object(c["openBlock"])(!0),
            Object(c["createBlock"])(c["Fragment"], null, Object(c["renderList"])(C.countersProcessed, (function(e) {
                return Object(c["openBlock"])(),
                Object(c["createBlock"])("div", {
                    class: ["px-1 pb-2 flex cursor-pointer", "border-" + l.color + "-300"],
                    key: e,
                    onClick: function(t) {
                        return C.increase(e.id, e.title, e.icon, e.increaseValue)
                    },
                    id: "counter-" + e.id
                }, [Object(c["createVNode"])("div", {
                    class: ["px-2 pb-2 relative flex border-2 border-b-3 items-center p-2 pb-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 origin-bottom", "border-" + l.color + "-600 bg-" + l.color + "-200 hover:bg-" + l.color + "-100 focus:ring-" + l.color + "-50 "],
                    style: "box-shadow: inset 0px -6px 0px #" + C.colorDark + ", inset 0 -7px 0 0 #" + C.colorLight + ", inset 0px 1px 0px 1px #" + C.colorLight + ";"
                }, [Object(c["createVNode"])("div", N, [Object(c["createVNode"])(B, {
                    type: e.icon,
                    color: l.color,
                    "is-preview": !0
                }, null, 8, ["type", "color"])]), Object(c["createVNode"])("span", {
                    class: ["inline-flex items-center px-1 py-0.5 rounded-full text-xs absolute right-0 top-0 opacity-80", "bg-" + l.color + "-100 text-" + l.color + "-800"],
                    style: {
                        "font-size": "9px"
                    }
                }, Object(c["toDisplayString"])(e.total), 3)], 6)], 10, ["onClick", "id"])
            }
            )), 128))])) : Object(c["createCommentVNode"])("", !0)], 10, ["id"])
        }
        l("c740"),
        l("4160"),
        l("a434"),
        l("a9e3"),
        l("35b3"),
        l("159b");
        var F = l("abdd")
          , C = l("a933")
          , B = l("6c42")
          , z = l("ec26")
          , M = l("5a0c")
          , E = l.n(M)
          , D = l("4208")
          , A = l.n(D)
          , S = l("1209");
        E.a.extend(A.a);
        var P = {
            name: "BlockCounter",
            components: {
                BlockIcon: C["a"]
            },
            props: {
                id: String,
                title: String,
                color: String,
                size: Number,
                src: String,
                faceType: {
                    default: "default",
                    type: String
                },
                counters: Array,
                elapsedTime: Number,
                preview: {
                    default: !1,
                    type: Boolean
                },
                embed: {
                    default: !1,
                    type: Boolean
                },
                embedPreview: {
                    default: !1,
                    type: Boolean
                },
                local: {
                    default: !1,
                    type: Boolean
                },
                isLoading: {
                    default: !1,
                    type: Boolean
                },
                hasError: {
                    default: !1,
                    type: Boolean
                },
                isNew: {
                    default: !1,
                    type: Boolean
                },
                embedOptions: Object,
                totalTime: Number,
                activeSince: Number,
                elements: Array,
                allowTemplateAdd: Boolean,
                refID: String,
                increaseValue: Number,
                blockTick: Number
            },
            setup: function() {
                var e = Object(B["c"])();
                return {
                    toast: e
                }
            },
            data: function() {
                return {
                    elHeight: 0,
                    elWidth: 0,
                    increaseEl: [],
                    decreaseEl: [],
                    sizeOptionsHours: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "01",
                        value: 1
                    }, {
                        text: "02",
                        value: 2
                    }, {
                        text: "03",
                        value: 3
                    }, {
                        text: "04",
                        value: 4
                    }, {
                        text: "05",
                        value: 5
                    }, {
                        text: "06",
                        value: 6
                    }, {
                        text: "07",
                        value: 7
                    }, {
                        text: "08",
                        value: 8
                    }],
                    sizeOptionsMinutes: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "15",
                        value: .25
                    }, {
                        text: "30",
                        value: .5
                    }, {
                        text: "45",
                        value: .75
                    }],
                    colors: F["a"]
                }
            },
            computed: {
                isActive: function() {
                    return !!this.activeSince
                },
                colorLight: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[100]
                },
                colorDark: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[500]
                },
                colorDeep: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorGrad: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorOutline: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[900]
                },
                totalElements: function() {
                    var e = 0;
                    return this.elements.forEach((function(t) {
                        e += t.value
                    }
                    )),
                    e = Math.round(100 * (e + Number.EPSILON)) / 100,
                    e
                },
                formattedTotal: function() {
                    return this.totalElements + "/" + this.size
                },
                progressStyle: function() {
                    var e = this.elHeight - 8
                      , t = this.elWidth
                      , l = this.size
                      , c = this.totalElements
                      , o = c / l
                      , r = o * e;
                    r >= e && (r = e);
                    var i = "0";
                    return r && (i = "2px"),
                    {
                        height: r + "px",
                        width: t - 8 + "px",
                        left: "4px",
                        bottom: "4px",
                        borderTopWidth: i
                    }
                },
                textClass: function() {
                    return this.totalElements ? "text-" + this.color + "-800 bg-" + this.color + "-300 hover:text-" + this.color + "-200 hover:bg-" + this.color + "-700 border-" + this.color + "-800" : "text-" + this.color + "-500 bg-" + this.color + "-200 border-" + this.color + "-300 cursor-not-allowed"
                },
                lastElement: function() {
                    if (this.elements.length) {
                        var e = this.elements[this.elements.length - 1];
                        return this.lastElementTitle + E()(e.start).from(this.blockTick)
                    }
                    return "- -"
                },
                showControls: function() {
                    return !0 !== this.embed || "view" !== this.embedOptions.mode
                },
                lastElementTitle: function() {
                    var e = this.elements[this.elements.length - 1];
                    return "undefined" !== typeof e.title && "_default" !== e.title && "" !== e.title ? e.title + " " : ""
                },
                countersProcessed: function() {
                    var e = []
                      , t = [];
                    return this.counters.length > 0 && (this.elements.forEach((function(e) {
                        if (e.icon && e.value) {
                            var l = e.icon + "_" + e.value;
                            t[l] ? t[l] = t[l] + 1 : t[l] = 1
                        }
                    }
                    )),
                    this.counters.forEach((function(l) {
                        var c = l.icon + "_" + l.increaseValue;
                        e.push({
                            id: l.id,
                            increaseValue: l.increaseValue,
                            title: l.title,
                            icon: l.icon,
                            total: t[c] ? t[c] : 0
                        })
                    }
                    ))),
                    e
                }
            },
            methods: {
                increase: function(e, t, l, o) {
                    var r = this;
                    if (o /= 1,
                    this.preview)
                        this.toast.warning("Please save your changes first to be able to edit the block.");
                    else {
                        if (!0 === this.embed && !0 === this.embedPreview)
                            return;
                        var i = Object(z["a"])();
                        this.increaseEl.push({
                            value: "+" + o,
                            id: "in-el-" + i
                        }),
                        Object(c["nextTick"])((function() {
                            Object(S["a"])({
                                targets: "#block-" + r.id + " .block-increase",
                                scale: [{
                                    value: .6
                                }, {
                                    value: 1
                                }],
                                easing: "easeOutSine",
                                duration: 100,
                                complete: function() {
                                    S["a"].remove("#block-" + r.id + " .block-increase")
                                }
                            }),
                            Object(S["a"])({
                                targets: "#in-el-" + i,
                                translateY: [{
                                    value: -8
                                }, {
                                    value: 10
                                }],
                                translateX: [{
                                    value: -150
                                }],
                                opacity: [{
                                    value: 0
                                }],
                                scale: [{
                                    value: 3
                                }],
                                easing: "easeInOutSine",
                                duration: 600,
                                complete: function() {
                                    var e = r.increaseEl.findIndex((function(e) {
                                        return e.id === "in-el-" + i
                                    }
                                    ));
                                    r.increaseEl.splice(e, 1),
                                    S["a"].remove("#in-el-" + i)
                                }
                            })
                        }
                        )),
                        this.$emit("elementIncrease", this.id, t, l, o)
                    }
                },
                decrease: function() {
                    var e = this;
                    if (this.preview)
                        this.toast.warning("Please save your changes first to be able to edit the block.");
                    else {
                        if (!0 === this.embed && !0 === this.embedPreview)
                            return;
                        var t = Object(z["a"])();
                        this.decreaseEl.push({
                            value: "-" + this.increaseValue,
                            id: "in-el-" + t
                        }),
                        Object(c["nextTick"])((function() {
                            Object(S["a"])({
                                targets: "#block-" + e.id + " .block-decrease",
                                scale: [{
                                    value: .4
                                }, {
                                    value: 1
                                }],
                                easing: "easeOutSine",
                                duration: 100,
                                complete: function() {
                                    S["a"].remove("#block-" + e.id + " .block-increase")
                                }
                            }),
                            Object(S["a"])({
                                targets: "#in-el-" + t,
                                translateY: [{
                                    value: -12
                                }, {
                                    value: 10
                                }],
                                translateX: [-130, 0],
                                opacity: [{
                                    value: 0
                                }],
                                scale: [{
                                    value: .8
                                }],
                                easing: "easeInOutSine",
                                duration: 600,
                                complete: function() {
                                    var l = e.decreaseEl.findIndex((function(e) {
                                        return e.id === "in-el-" + t
                                    }
                                    ));
                                    e.decreaseEl.splice(l, 1),
                                    S["a"].remove("#in-el-" + t)
                                }
                            })
                        }
                        )),
                        this.$emit("elementDecrease", this.id)
                    }
                },
                reset: function() {
                    this.$emit("blockReset", this.id)
                },
                blockEdit: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockEditStart", this.id)
                },
                deleteBlock: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockDelete", this.id, this.refID)
                },
                reload: function() {
                    window.location.reload()
                },
                animateButton: function(e) {
                    Object(c["nextTick"])((function() {
                        Object(S["a"])({
                            targets: "#counter-" + e,
                            easing: "easeOutQuad",
                            duration: 175,
                            scale: [{
                                value: .9
                            }, {
                                value: 1
                            }],
                            backgroundColor: ["#6EE7B7", "#bbf7d0"],
                            borderBottom: [1, 3],
                            boxShadow: ["inset 0px 0px 0px #34D399, inset 0 0px 0 0 #ECFDF5, inset 0px 1px 0px 1px #ECFDF5", "inset 0px -6px 0px #34D399, inset 0 -7px 0 0 #ECFDF5, inset 0px 1px 0px 1px #ECFDF5"],
                            complete: function() {
                                S["a"].remove("#counter-" + e)
                            }
                        }),
                        Object(S["a"])({
                            targets: "#counter-" + e + " svg",
                            easing: "easeOutQuad",
                            duration: 175,
                            paddingBottom: [0, 0],
                            paddingTop: [4, 0],
                            complete: function() {
                                S["a"].remove("#counter-" + e + " svg")
                            }
                        })
                    }
                    ))
                }
            },
            mounted: function() {
                var e = this;
                if (this.isNew) {
                    this.$emit("blockAdded", this.id);
                    var t = document.querySelector("#block-" + this.id);
                    t.style.zIndex = 1e7,
                    Object(S["a"])({
                        targets: "#block-" + this.id,
                        easing: "linear",
                        duration: 380,
                        opacity: [1, 1],
                        rotate: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        delay: 600,
                        matrix3d: ["0.1, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.318, 0, 0, 0, 0, 0.318, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.448, 0, 0, 0, 0, 0.448, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.688, 0, 0, 0, 0, 0.688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.983, 0, 0, 0, 0, 0.983, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.011, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.131, 0, 0, 0, 0, 1.131, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.147, 0, 0, 0, 0, 1.147, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.056, 0, 0, 0, 0, 1.056, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.129, 0, 0, 0, 0, 1.129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.097, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.023, 0, 0, 0, 0, 1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.985, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.965, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.967, 0, 0, 0, 0, 0.967, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.988, 0, 0, 0, 0, 0.988, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"],
                        complete: function() {
                            S["a"].remove("#block-" + e.id),
                            t.style.zIndex = "auto"
                        }
                    })
                }
                Object(c["nextTick"])((function() {
                    null !== e.$refs["block-" + e.id] && (e.elHeight = e.$refs["block-" + e.id].clientHeight,
                    e.elWidth = e.$refs["block-" + e.id].clientWidth)
                }
                ))
            }
        };
        P.render = w;
        t["a"] = P
    },
    "40a3": function(e, t, l) {
        "use strict";
        var c = l("7a23")
          , o = {
            class: "absolute z-10 w-full h-full"
        }
          , r = {
            class: "flex-shrink-0"
        }
          , i = {
            class: "flex-1"
        }
          , a = {
            key: 0,
            class: "flex-shrink-1 items-center"
        }
          , s = {
            key: 0,
            class: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }
          , n = Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
            "clip-rule": "evenodd"
        }, null, -1)
          , d = {
            key: 1,
            class: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }
          , u = Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            "clip-rule": "evenodd"
        }, null, -1)
          , b = Object(c["createVNode"])("svg", {
            class: "w-4 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(c["createVNode"])("path", {
            d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        }), Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
            "clip-rule": "evenodd"
        })], -1)
          , h = Object(c["createVNode"])("svg", {
            class: "w-6 h-6",
            stroke: "currentColor",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, [Object(c["createVNode"])("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "5",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "12",
            cy: "15",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "9",
            r: "1"
        }), Object(c["createVNode"])("circle", {
            cx: "19",
            cy: "15",
            r: "1"
        })], -1)
          , p = Object(c["createVNode"])("span", {
            class: "sr-only"
        }, "Close", -1)
          , f = Object(c["createVNode"])("svg", {
            class: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, [Object(c["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
        })], -1);
        function k(e, t, l, k, y, O) {
            var j = Object(c["resolveComponent"])("BlockIcon");
            return Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                id: "block-" + l.id,
                ref: "block-" + l.id,
                class: ["col-span-1 shadow-xl flex flex-col text-center bg-white rounded-xl shadow overflow-hidden relative border-4 h-auto", ["bg-" + l.color + "-" + y.bg + " border-" + l.color + "-900", {
                    "opacity-0": l.isNew
                }]]
            }, [Object(c["createVNode"])("div", o, [Object(c["createVNode"])("div", {
                class: "rounded-md h-full opacity-20 border-3",
                style: [{
                    "border-radius": "8px"
                }, "box-shadow: inset 0 0 100px 0 #" + O.colorDeep + "; border-color: #" + O.colorLight]
            }, null, 4)]), Object(c["createVNode"])("div", {
                class: ["z-20 p-4 relative shadow-none flex items-center", "bg-transparent border-" + l.color + "-300"]
            }, [Object(c["createVNode"])("div", r, [Object(c["createVNode"])("span", {
                class: ["rounded-lg inline-flex p-2", "bg-" + l.color + "-50 border-" + l.color + "-300 border-2"]
            }, [Object(c["createVNode"])(j, {
                onClick: O.blockEdit,
                type: l.faceType,
                color: l.color
            }, null, 8, ["onClick", "type", "color"])], 2)]), Object(c["createVNode"])("div", i, [(Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                onClick: t[1] || (t[1] = function() {
                    return O.blockEdit && O.blockEdit.apply(O, arguments)
                }
                ),
                class: "h-1 cursor-pointer z-10 text-gray-900 text-lg font-bold inline-block",
                style: {
                    "font-family": "'Roboto Mono', monospace",
                    width: "100%",
                    height: "28px"
                }
            }, [Object(c["createVNode"])("text", {
                style: "stroke: #" + O.colorOutline + ";",
                "text-anchor": "middle",
                x: "50%",
                y: "24",
                fill: "white",
                "stroke-width": "4",
                "letter-spacing": "2",
                "paint-order": "stroke"
            }, Object(c["toDisplayString"])(O.formattedRemainingTime.value), 5)])), Object(c["createVNode"])("span", {
                onClick: t[2] || (t[2] = function() {
                    return O.blockEdit && O.blockEdit.apply(O, arguments)
                }
                ),
                class: ["cursor-pointer font-bold", "text-" + l.color + "-900"]
            }, Object(c["toDisplayString"])(l.title), 3)]), O.showControls ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", a, [Object(c["createVNode"])("button", {
                onClick: t[3] || (t[3] = function() {
                    return O.toggle && O.toggle.apply(O, arguments)
                }
                ),
                class: "text-" + l.color + "-600 hover:text-" + l.color + "-900"
            }, [O.isActive ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", d, [u])) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", s, [n]))], 2)])) : Object(c["createCommentVNode"])("", !0), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 1,
                onClick: t[4] || (t[4] = function() {
                    return O.blockEdit && O.blockEdit.apply(O, arguments)
                }
                ),
                class: ["z-20 top-1 left-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [b], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 2,
                class: ["cursor-move block-drag-handle z-20 top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [h], 2)), l.embed ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("button", {
                key: 3,
                onClick: t[5] || (t[5] = function() {
                    return O.deleteBlock && O.deleteBlock.apply(O, arguments)
                }
                ),
                class: ["z-20 top-1 right-1 absolute opacity-50 hover:opacity-100 rounded-md inline-flex text-gray-900 hover:text-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", "text-" + l.color + "-900"]
            }, [p, f], 2))], 2)], 10, ["id"])
        }
        l("c740"),
        l("c975"),
        l("a9e3");
        var y = l("abdd")
          , O = l("a933")
          , j = l("6c42")
          , v = l("7f0a")
          , g = l("1209")
          , x = {
            name: "BlockCounter",
            components: {
                BlockIcon: O["a"]
            },
            props: {
                id: String,
                title: String,
                color: String,
                size: Number,
                src: String,
                faceType: {
                    default: "default",
                    type: String
                },
                elapsedTime: Number,
                preview: {
                    default: !1,
                    type: Boolean
                },
                embed: {
                    default: !1,
                    type: Boolean
                },
                embedPreview: {
                    default: !1,
                    type: Boolean
                },
                isLoading: {
                    default: !1,
                    type: Boolean
                },
                hasError: {
                    default: !1,
                    type: Boolean
                },
                isNew: {
                    default: !1,
                    type: Boolean
                },
                embedOptions: Object,
                totalTime: Number,
                activeSince: Number,
                activeCountdownSince: Number,
                elements: Array,
                allowTemplateAdd: Boolean,
                refID: String,
                notificationSent: {
                    default: !1,
                    type: Boolean
                }
            },
            setup: function() {
                var e = Object(j["c"])()
                  , t = Object(v["b"])();
                return {
                    toast: e,
                    nativeNotification: t
                }
            },
            data: function() {
                return {
                    bg: "100",
                    sizeOptionsHours: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "01",
                        value: 1
                    }, {
                        text: "02",
                        value: 2
                    }, {
                        text: "03",
                        value: 3
                    }, {
                        text: "04",
                        value: 4
                    }, {
                        text: "05",
                        value: 5
                    }, {
                        text: "06",
                        value: 6
                    }, {
                        text: "07",
                        value: 7
                    }, {
                        text: "08",
                        value: 8
                    }],
                    sizeOptionsMinutes: [{
                        text: "00",
                        value: 0
                    }, {
                        text: "15",
                        value: .25
                    }, {
                        text: "30",
                        value: .5
                    }, {
                        text: "45",
                        value: .75
                    }],
                    colors: y["a"]
                }
            },
            computed: {
                isActive: function() {
                    return !!this.activeCountdownSince
                },
                colorLight: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[100]
                },
                colorDark: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[500]
                },
                colorDeep: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorGrad: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[600]
                },
                colorOutline: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors[900]
                },
                formattedRemainingTime: function() {
                    var e = new Date(null)
                      , t = !1
                      , l = this.size;
                    if (this.elapsedTime > 0 && (l -= this.elapsedTime / 1e3,
                    l < 0))
                        return this.changeBG(),
                        l = Math.abs(l),
                        t = !0,
                        {
                            status: !0,
                            value: "00:00"
                        };
                    e.setSeconds(l);
                    var c = e.toUTCString();
                    return {
                        status: t,
                        value: c.substr(c.indexOf(":") + 1, 5)
                    }
                },
                showControls: function() {
                    return !0 !== this.embed || "view" !== this.embedOptions.mode
                }
            },
            methods: {
                start: function() {
                    this.nativeNotification.requestPermission(),
                    this.$emit("countdownStart", this.id)
                },
                stop: function() {
                    this.bg = "100",
                    this.$emit("countdownEnd", this.id),
                    this.$emit("blockNotificationUpdate", this.id, !1)
                },
                reset: function() {
                    this.$emit("blockNotificationUpdate", this.id, !1),
                    this.$emit("blockReset", this.id)
                },
                toggle: function() {
                    if (this.preview)
                        this.toast.warning("Please save your changes first to be able to edit the block.");
                    else {
                        if (!0 === this.embed && !0 === this.embedPreview)
                            return;
                        this.isActive ? this.stop() : this.start()
                    }
                },
                blockEdit: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockEditStart", this.id)
                },
                deleteBlock: function() {
                    this.preview ? this.toast.warning("Please save your changes first to be able to edit the block.") : this.$emit("blockDelete", this.id, this.refID)
                },
                changeBG: function() {
                    "100" === this.bg ? this.bg = "300" : this.bg = "100"
                }
            },
            mounted: function() {
                var e = this;
                if (this.isNew) {
                    this.$emit("blockAdded", this.id);
                    var t = document.querySelector("#block-" + this.id);
                    t.style.zIndex = 1e7,
                    Object(g["a"])({
                        targets: "#block-" + this.id,
                        easing: "linear",
                        duration: 380,
                        opacity: [1, 1],
                        rotate: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        delay: 600,
                        matrix3d: ["0.1, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.318, 0, 0, 0, 0, 0.318, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.448, 0, 0, 0, 0, 0.448, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.688, 0, 0, 0, 0, 0.688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.983, 0, 0, 0, 0, 0.983, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.011, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.131, 0, 0, 0, 0, 1.131, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.147, 0, 0, 0, 0, 1.147, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.056, 0, 0, 0, 0, 1.056, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.129, 0, 0, 0, 0, 1.129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.097, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.023, 0, 0, 0, 0, 1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.985, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.965, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.967, 0, 0, 0, 0, 0.967, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.988, 0, 0, 0, 0, 0.988, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1", "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"],
                        complete: function() {
                            g["a"].remove("#block-" + e.id),
                            t.style.zIndex = "auto"
                        }
                    })
                }
            }
        };
        x.render = k;
        t["a"] = x
    },
    "4ba1": function(e, t, l) {
        "use strict";
        var c = l("7a23")
          , o = Object(c["createVNode"])("g", {
            name: "reflection",
            class: "faceLightRotate"
        }, [Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        })], -1)
          , r = {
            class: "blockActive"
        }
          , i = {
            class: ""
        }
          , a = Object(c["createVNode"])("g", {
            class: "faceEyesSmirk"
        }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#DC2626"
            },
            d: "M64.5,155.8c-0.6,0-1.2-0.1-1.7-0.4c-0.3-0.2-8.5-4-16.6-11.2C34.9,134.5,29,123.4,29,112c0-11,9-20,20-20\n                    c6.5,0,12.3,3.2,16,8c3.7-4.9,9.5-8,16-8c11,0,20,9,20,20c0,11.4-6.1,22.6-17.7,32.3c-8.5,7.1-16.8,11-17.2,11.1\n                    C65.6,155.7,65,155.8,64.5,155.8z"
        }), Object(c["createVNode"])("path", {
            style: {
                fill: "#F87171"
            },
            d: "M81,96c8.8,0,16,7.2,16,16c0,24.9-32.5,39.8-32.5,39.8S33,136.9,33,112c0-8.8,7.2-16,16-16s16,7.2,16,16\n                    C65,103.2,72.2,96,81,96 M81,88c-6.1,0-11.8,2.3-16,6.1c-4.2-3.8-9.9-6.1-16-6.1c-13.2,0-24,10.8-24,24c0,29.7,34.6,46.3,36,47\n                    c1.1,0.5,2.3,0.8,3.4,0.8c1.1,0,2.3-0.2,3.3-0.7c1.5-0.7,37.2-17.4,37.2-47.1C105,98.8,94.2,88,81,88L81,88z"
        })]), Object(c["createVNode"])("path", {
            style: {
                fill: "none",
                stroke: "#EF4444",
                "stroke-width": "8",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M69,139.9c0,0,7.9-5,15.2-13.2"
        }), Object(c["createVNode"])("ellipse", {
            transform: "matrix(0.9232 -0.3844 0.3844 0.9232 -37.5178 26.389)",
            style: {
                fill: "#FFFFFF"
            },
            cx: "47.3",
            cy: "107",
            rx: "10.1",
            ry: "6.3"
        })]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#DC2626"
            },
            d: "M184.5,155.8c-0.6,0-1.2-0.1-1.7-0.4c-0.3-0.2-8.5-4-16.6-11.2c-11.2-9.7-17.1-20.9-17.1-32.3\n                    c0-11,9-20,20-20c6.5,0,12.3,3.2,16,8c3.7-4.9,9.5-8,16-8c11,0,20,9,20,20c0,11.4-6.1,22.6-17.7,32.3c-8.5,7.1-16.8,11-17.2,11.1\n                    C185.6,155.7,185,155.8,184.5,155.8z"
        }), Object(c["createVNode"])("path", {
            style: {
                fill: "#F87171"
            },
            d: "M201,96c8.8,0,16,7.2,16,16c0,24.9-32.5,39.8-32.5,39.8S153,136.9,153,112c0-8.8,7.2-16,16-16s16,7.2,16,16\n                    C185,103.2,192.2,96,201,96 M201,88c-6.1,0-11.8,2.3-16,6.1c-4.2-3.8-9.9-6.1-16-6.1c-13.2,0-24,10.8-24,24\n                    c0,29.7,34.6,46.3,36,47c1.1,0.5,2.3,0.8,3.4,0.8c1.1,0,2.3-0.2,3.3-0.7c1.5-0.7,37.2-17.4,37.2-47.1C225,98.8,214.2,88,201,88\n                    L201,88z"
        })]), Object(c["createVNode"])("path", {
            style: {
                fill: "none",
                stroke: "#EF4444",
                "stroke-width": "8",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M189,139.9c0,0,7.9-5,15.2-13.2"
        }), Object(c["createVNode"])("ellipse", {
            transform: "matrix(0.9232 -0.3844 0.3844 0.9232 -28.2971 72.5188)",
            style: {
                fill: "#FFFFFF"
            },
            cx: "167.3",
            cy: "107",
            rx: "10.1",
            ry: "6.3"
        })])], -1)
          , s = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , n = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , d = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , u = Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M67.3,113.1c-2.9-1.8-5.7-3.7-8.2-5.7c-0.8,0.3-1.6,0.9-2.1,1.6c-2.4,3.2-0.3,9,4.8,12.8\n            c5.1,3.9,11.2,4.4,13.7,1.2c1.1-1.4,1.2-3.3,0.7-5.2C73.2,116.4,70.2,114.9,67.3,113.1z"
        }, null, -1)
          , b = Object(c["createVNode"])("g", {
            style: {
                opacity: "0.68"
            }
        }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M207.9,185.7l-53.6-25.9l25.9,53.6c-6.2,6.2-6.2,16.1,0,22.1c6.2,6.2,16.1,6.2,22.1,0\n              c7.6,7.6,20.1,7.6,27.7,0c7.6-7.6,7.6-20.1,0-27.7c6.2-6.2,6.2-16.1,0-22.1C223.9,179.7,213.9,179.7,207.9,185.7z"
        })]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M42.1,185.7l53.6-25.9l-25.9,53.6c6.2,6.2,6.2,16.1,0,22.1c-6.2,6.2-16.1,6.2-22.1,0\n              c-7.6,7.6-20.1,7.6-27.7,0c-7.6-7.6-7.6-20.1,0-27.7c-6.2-6.2-6.2-16.1,0-22.1C26.1,179.7,36.1,179.7,42.1,185.7z"
        })])], -1)
          , h = Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M182.7,113.1c2.9-1.8,5.7-3.7,8.2-5.7c0.8,0.3,1.6,0.9,2.1,1.6c2.4,3.2,0.3,9-4.8,12.8\n            c-5.1,3.9-11.2,4.4-13.7,1.2c-1.1-1.4-1.2-3.3-0.7-5.2C176.8,116.4,179.8,114.9,182.7,113.1z"
        }, null, -1)
          , p = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , f = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , k = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , y = Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#B45309"
            },
            cx: "65",
            cy: "128.6",
            rx: "26",
            ry: "30.1"
        }), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FCD34D"
            },
            cx: "65",
            cy: "125.6",
            rx: "26",
            ry: "30.1"
        }), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("defs", null, [Object(c["createVNode"])("ellipse", {
            id: "SVGID_1_",
            cx: "65",
            cy: "125.6",
            rx: "26",
            ry: "30.1"
        })]), Object(c["createVNode"])("clipPath", {
            id: "SVGID_2_"
        }, [Object(c["createVNode"])("use", {
            "xlink:href": "#SVGID_1_",
            style: {
                overflow: "visible"
            }
        })]), Object(c["createVNode"])("g", {
            style: {
                "clip-path": "url(#SVGID_2_)"
            }
        }, [Object(c["createVNode"])("rect", {
            x: "30.2",
            y: "108.2",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -31.1345 23.1283)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "5.7"
        }), Object(c["createVNode"])("rect", {
            x: "31.5",
            y: "114.3",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -32.3238 23.7261)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "41.7",
            y: "146",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -41.5214 28.3492)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "41",
            y: "143.8",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -40.8871 28.0303)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "40.3",
            y: "141.9",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -40.2924 27.7314)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.4"
        }), Object(c["createVNode"])("rect", {
            x: "28.7",
            y: "105.5",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -29.7865 22.4508)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        })])]), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#854D0E"
            },
            cx: "65",
            cy: "125.6",
            rx: "20.6",
            ry: "23.9"
        }), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FCD34D"
            },
            cx: "66",
            cy: "127.6",
            rx: "20.6",
            ry: "23.9"
        }), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#D97706"
            },
            d: "M56.8,132.9c3,1.9,5.6,3,8.7,3c2.3,0,3.5-0.8,3.5-2.2c0-4-14-3.3-14-12.1c0-4.9,4.1-8,10.6-8\n                c4.4,0,7.3,1.7,9.7,4.1l-3.5,4c-2.3-1.6-4-2.4-6.7-2.4c-2.1,0-3.3,0.8-3.3,2.2c0,3.4,14,3,14,11.7c0,4.7-4,8.4-11.4,8.4\n                c-3.4,0-7.9-1.5-10.7-3.9L56.8,132.9z M62.8,107.5h4.7v8.3h-4.7V107.5z M67.5,138.7v9.8h-4.7v-9.8H67.5z"
        })])])], -1)
          , O = Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#B45309"
            },
            cx: "185",
            cy: "128.6",
            rx: "26",
            ry: "30.1"
        }), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FCD34D"
            },
            cx: "185",
            cy: "125.6",
            rx: "26",
            ry: "30.1"
        }), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("defs", null, [Object(c["createVNode"])("ellipse", {
            id: "SVGID_3_",
            cx: "185",
            cy: "125.6",
            rx: "26",
            ry: "30.1"
        })]), Object(c["createVNode"])("clipPath", {
            id: "SVGID_4_"
        }, [Object(c["createVNode"])("use", {
            "xlink:href": "#SVGID_3_",
            style: {
                overflow: "visible"
            }
        })]), Object(c["createVNode"])("g", {
            style: {
                "clip-path": "url(#SVGID_4_)"
            }
        }, [Object(c["createVNode"])("rect", {
            x: "150.2",
            y: "108.2",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -25.3961 59.7927)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "5.7"
        }), Object(c["createVNode"])("rect", {
            x: "151.5",
            y: "114.3",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -26.5855 60.3905)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "161.7",
            y: "146",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -35.7831 65.0135)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "161",
            y: "143.8",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -35.1487 64.6947)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        }), Object(c["createVNode"])("rect", {
            x: "160.3",
            y: "141.9",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -34.5541 64.3958)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.4"
        }), Object(c["createVNode"])("rect", {
            x: "148.7",
            y: "105.5",
            transform: "matrix(0.9522 -0.3055 0.3055 0.9522 -24.0482 59.1152)",
            style: {
                fill: "#FEF3C7"
            },
            width: "56.2",
            height: "1.7"
        })])]), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#854D0E"
            },
            cx: "185",
            cy: "125.6",
            rx: "20.6",
            ry: "23.9"
        }), Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FCD34D"
            },
            cx: "186",
            cy: "127.6",
            rx: "20.6",
            ry: "23.9"
        }), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#D97706"
            },
            d: "M176.8,132.9c3,1.9,5.6,3,8.7,3c2.3,0,3.5-0.8,3.5-2.2c0-4-14-3.3-14-12.1c0-4.9,4.1-8,10.6-8\n                c4.4,0,7.3,1.7,9.7,4.1l-3.5,4c-2.3-1.6-4-2.4-6.7-2.4c-2.1,0-3.3,0.8-3.3,2.2c0,3.4,14,3,14,11.7c0,4.7-4,8.4-11.4,8.4\n                c-3.4,0-7.9-1.5-10.7-3.9L176.8,132.9z M182.8,107.5h4.7v8.3h-4.7V107.5z M187.5,138.7v9.8h-4.7v-9.8H187.5z"
        })])])], -1)
          , j = Object(c["createVNode"])("path", {
            style: {
                fill: "#15803D"
            },
            d: "M145,165v23c0,11-9,20-20,20h0c-11,0-20-9-20-20v-23"
        }, null, -1)
          , v = Object(c["createVNode"])("path", {
            style: {
                fill: "#16A34A"
            },
            d: "M145,163v23c0,11-9,20-20,20h0c-11,0-20-9-20-20v-23"
        }, null, -1)
          , g = Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#365314"
            },
            d: "M119.8,185.5c1.9,1.2,3.6,1.9,5.5,1.9c1.5,0,2.3-0.5,2.3-1.4c0-2.6-8.9-2.1-8.9-7.7c0-3.1,2.6-5.1,6.7-5.1\n              c2.8,0,4.7,1.1,6.2,2.6l-2.2,2.6c-1.4-1-2.6-1.5-4.2-1.5c-1.4,0-2.1,0.5-2.1,1.4c0,2.2,8.9,1.9,8.9,7.5c0,3-2.6,5.3-7.2,5.3\n              c-2.2,0-5-0.9-6.8-2.5L119.8,185.5z M123.6,169.3h3v5.3h-3V169.3z M126.6,189.2v6.2h-3v-6.2H126.6z"
        })])], -1)
          , x = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "#FFFFFF"
            },
            d: "M9.9,108.9c0-36.2,17.2-54.8,47.5-50.5C83,62,115,72,120.9,132.9c3.5,36-24.8,41.5-55.5,41.5\n          c-16.3,0-40.2-3.7-50.4-17C6.1,145.8,9.9,125.8,9.9,108.9z"
        }, null, -1)
          , m = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "#FFFFFF"
            },
            d: "M240.2,108.9c0-36.2-17.2-54.8-47.5-50.5c-25.6,3.6-57.6,13.6-63.5,74.5c-3.5,36,24.8,41.5,55.5,41.5\n          c16.3,0,40.2-3.7,50.4-17C244,145.8,240.2,125.8,240.2,108.9z"
        }, null, -1)
          , V = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , N = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , w = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , F = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "108.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , C = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "109.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , B = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , z = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M212.1,206.2c2.4-2.6,4.6-5.4,6.8-8.3"
        }, null, -1)
          , M = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M157.6,229.9c3.3-0.3,6.7-0.8,10-1.5c3.3-0.7,6.6-1.5,9.8-2.5s6.4-2.1,9.6-3.4s6.3-2.8,9.3-4.4"
        }, null, -1)
          , E = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "108.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , D = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "109.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , A = Object(c["createVNode"])("ellipse", {
            style: {
                opacity: "0.5",
                fill: "#FFFFFF",
                "enable-background": "new"
            },
            cx: "125",
            cy: "154",
            rx: "30.2",
            ry: "31.5"
        }, null, -1)
          , S = {
            id: "Layer_1"
        }
          , P = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , L = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , T = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , H = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "108.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , I = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "109.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , Z = Object(c["createVNode"])("ellipse", {
            style: {
                opacity: "0.5",
                fill: "#FFFFFF",
                "enable-background": "new"
            },
            cx: "125",
            cy: "154",
            rx: "29.6",
            ry: "30.9"
        }, null, -1)
          , _ = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M33,73.5C48,54,68,40,96,39.8"
        }, null, -1)
          , R = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M220.6,197.6c2.1-2.9,4.1-5.9,5.9-9"
        }, null, -1)
          , Y = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M171.1,229.6c3.2-1,6.4-2.1,9.5-3.4c3.1-1.3,6.2-2.7,9.2-4.3c3-1.6,5.9-3.3,8.7-5.2c2.8-1.9,5.6-3.9,8.3-6.1"
        }, null, -1)
          , G = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "118.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , W = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "119.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , X = Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#10B981",
                stroke: "#047857",
                "stroke-width": "6.1237",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M142,41.5c-8.4,4.6-16.7,4.6-25.1,0C107.1,30,127.8,3,127.8,3H142C135.9,17,135.6,30.9,142,41.5z"
        })], -1)
          , $ = Object(c["createVNode"])("path", {
            style: {
                fill: "#FFB290"
            },
            d: "M150,206.5c0,6.9-11.9,19.5-26.5,19.5S97,213.4,97,206.5s11.9,2.5,26.5,2.5S150,199.6,150,206.5z"
        }, null, -1)
          , q = Object(c["createVNode"])("path", {
            style: {
                fill: "#FFD5C0"
            },
            d: "M147,211.5c0,6.9-8.9,14.5-23.5,14.5s-22.5-7.6-22.5-14.5s7.9,4.5,22.5,4.5S147,204.6,147,211.5z"
        }, null, -1)
          , U = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,57.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , J = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M215.4,195.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , K = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M166.2,228.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , Q = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "118.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , ee = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "119.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , te = {
            id: "SVGID_1_",
            gradientUnits: "userSpaceOnUse",
            x1: "104.009",
            y1: "28.8024",
            x2: "145.991",
            y2: "28.8024"
        }
          , le = {
            id: "SVGID_2_",
            gradientUnits: "userSpaceOnUse",
            x1: "110.5045",
            y1: "88.0558",
            x2: "139.4955",
            y2: "88.0558"
        }
          , ce = Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M97.4,131.1l11.7-20.3c0.7-1.3-0.2-2.8-1.6-2.8H84.1c-1.4,0-2.4,1.6-1.6,2.8l11.7,20.3\n                C94.9,132.4,96.7,132.4,97.4,131.1z"
        }), Object(c["createVNode"])("path", {
            style: {
                fill: "#FFFFFF"
            },
            d: "M155.8,131.1l11.7-20.3c0.7-1.3-0.2-2.8-1.6-2.8h-23.4c-1.4,0-2.4,1.6-1.6,2.8l11.7,20.3\n                C153.3,132.4,155.1,132.4,155.8,131.1z"
        })], -1)
          , oe = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.75",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        }, null, -1)
          , re = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }, null, -1)
          , ie = Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }, null, -1)
          , ae = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "73.9",
            cy: "146",
            rx: "7.8",
            ry: "4.9"
        }, null, -1)
          , se = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "175.1",
            cy: "146.1",
            rx: "7.8",
            ry: "4.9"
        }, null, -1)
          , ne = Object(c["createVNode"])("g", {
            name: "reflection",
            class: "faceLightRotate"
        }, [Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M209.4,192.4c2.2-2.8,4.3-5.7,6.3-8.7"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.2,226.7c3.2-1,6.4-2.2,9.5-3.5c3.1-1.3,6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49,48.5c19-19,45.3-30.8,74.2-30.8"
        })], -1)
          , de = {
            class: "blockActive"
        }
          , ue = {
            class: ""
        }
          , be = {
            class: "faceEyesSmirk"
        }
          , he = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "64.2",
            cy: "108.9",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , pe = Object(c["createVNode"])("ellipse", {
            style: {
                fill: "#FFFFFF"
            },
            cx: "184.2",
            cy: "109.1",
            rx: "11.6",
            ry: "7.3"
        }, null, -1)
          , fe = {
            key: 1,
            class: " cursor-pointer w-32 h-32 ballZZZ",
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 250 250",
            style: {
                "enable-background": "new 0 0 250 250"
            },
            "xml:space": "preserve"
        }
          , ke = Object(c["createVNode"])("g", {
            name: "reflection",
            class: "faceLightRotateZZZ"
        }, [Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M210.1,192.5c2.2-2.8,4.3-5.7,6.3-8.7"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.25",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M159.9,226.7c3.2-1,6.4-2.2,9.5-3.5s6.1-2.8,9.1-4.4c3-1.6,5.9-3.4,8.7-5.3c2.8-1.9,5.6-4,8.2-6.2"
        }), Object(c["createVNode"])("path", {
            style: {
                opacity: "0.5",
                fill: "none",
                stroke: "#FFFFFF",
                "stroke-width": "14",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10"
            },
            d: "M49.8,48.6c19-19,45.3-30.8,74.2-30.8"
        })], -1)
          , ye = {
            class: "faceZZZ"
        }
          , Oe = {
            class: "ballFloat"
        }
          , je = {
            class: "ballFloatEyes"
        }
          , ve = Object(c["createVNode"])("g", {
            class: "ballFloatMouth"
        }, [Object(c["createVNode"])("circle", {
            style: {
                fill: "#741446"
            },
            cx: "113.2",
            cy: "113.6",
            r: "21"
        }), Object(c["createVNode"])("path", {
            style: {
                fill: "#F15E39"
            },
            d: "M92.9,118.7c2.3,9.1,10.5,15.9,20.3,15.9c4.8,0,9.2-1.6,12.7-4.3c-1.6-9.5-9.8-16.7-19.7-16.7\n          C101.1,113.6,96.4,115.5,92.9,118.7z"
        })], -1);
        function ge(e, t, l, ge, xe, me) {
            return Object(c["openBlock"])(),
            Object(c["createBlock"])("div", {
                id: "block-face-" + l.id
            }, [xe.isActiveFace ? (Object(c["openBlock"])(),
            Object(c["createBlock"])(c["Fragment"], {
                key: 0
            }, ["hearts" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 0,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                class: "ballStroke",
                d: "M125,10c30.7,0,59.6,12,81.3,33.7S240,94.3,240,125s-12,59.6-33.7,81.3S155.7,240,125,240s-59.6-12-81.3-33.7\n\t\tS10,155.7,10,125s12-59.6,33.7-81.3S94.3,10,125,10 M125,0C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z"
            }, null, 4)]), o, Object(c["createVNode"])("g", r, [Object(c["createVNode"])("g", i, [Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    "stroke-width": "9.8995",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[900]],
                d: "M100.5,162.3c0,0,24.5,26,49,0"
            }, null, 4), a])])], 2)) : "argh" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 1,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,10c30.7,0,59.6,12,81.3,33.7S240,94.3,240,125s-12,59.6-33.7,81.3S155.7,240,125,240s-59.6-12-81.3-33.7\n            S10,155.7,10,125s12-59.6,33.7-81.3S94.3,10,125,10 M125,0C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z"
            }, null, 4)]), s, n, d, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "9.8995",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M100.5,173.8c0,0,24.5-26,49,0"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M74,108c-6.4-3.2-12-7.1-16.4-11.2C46.8,100.5,39,112,39,125.6c0,16.6,11.6,30.1,26,30.1s26-13.5,26-30.1\n            c0-4.3-0.8-8.4-2.2-12.1C84,112.3,79,110.5,74,108z"
            }, null, 4), u, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,141.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), b, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M176,108c6.4-3.2,12-7.1,16.4-11.2c10.7,3.7,18.6,15.2,18.6,28.9c0,16.6-11.6,30.1-26,30.1s-26-13.5-26-30.1\n            c0-4.3,0.8-8.4,2.2-12.1C166,112.3,171,110.5,176,108z"
            }, null, 4), h, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M194,141.8c0,0-7.9,8.3-17,0"
            }, null, 4)])], 2)) : "money" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 2,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,10c30.7,0,59.6,12,81.3,33.7S240,94.3,240,125s-12,59.6-33.7,81.3S155.7,240,125,240s-59.6-12-81.3-33.7\n            S10,155.7,10,125s12-59.6,33.7-81.3S94.3,10,125,10 M125,0C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z"
            }, null, 4)]), p, f, k, y, O, Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M157.5,154.5c0,17.9-14.6,32.5-32.5,32.5s-32.5-14.6-32.5-32.5"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M138.7,181.2"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M111.3,181.2"
            }, null, 4), j, v, g], 2)) : "owl" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 3,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("polygon", {
                style: "fill:#" + me.ballColor[300],
                points: "26,37 19,44 29,69 63,29 20,18 \t"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("polygon", {
                style: "fill:#" + me.ballColor[300],
                points: "224,37 231,44 221,69 187,29 230,18 \t"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), x, m, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,10c24.1,0,47.1,7.3,66.6,21.2l3.6,2.6l4.3-0.9c9.8-2.1,18.2-4.6,25.5-7.6c-0.6,1.1-1.2,2.1-1.9,3.2\n            l-10.1,16.7l11.5-0.9l-3.9,5.6l-3.9,5.6l3.8,5.7C233.3,80,240,102.1,240,125c0,30.7-12,59.6-33.7,81.3C184.6,228,155.7,240,125,240\n            s-59.6-12-81.3-33.7C22,184.6,10,155.7,10,125c0-22.9,6.7-45,19.4-63.9l3.8-5.7l-3.9-5.6l-3.9-5.6l11.5,0.9L26.8,28.4\n            c-0.6-1-1.2-2.1-1.9-3.2c7.3,3,15.8,5.5,25.5,7.6l4.3,0.9l3.6-2.6C77.9,17.4,100.9,10,125,10 M125,0C98,0,73,8.6,52.6,23.1\n            c-16.5-3.6-31.1-8.8-41.9-17.4C10.4,5.6,10,5.6,9.7,5.6c-1.9,0-3.4,1.8-3,3.8c3,8.3,6.7,16.4,11.5,24.2c-4.5-0.4-9.1-1-13.7-1.9\n            l16.5,23.8C7.8,75.4,0,99.3,0,125c0,69,56,125,125,125s125-56,125-125c0-25.7-7.8-49.6-21.1-69.5l16.5-23.8\n            c-4.6,0.9-9.2,1.5-13.7,1.9c4.7-7.8,8.5-15.9,11.5-24.2c0.4-2-1.1-3.8-3-3.8c-0.3,0-0.6,0-0.9,0.1c-10.8,8.6-25.5,13.8-41.9,17.4\n            C177,8.6,152,0,125,0L125,0z"
            }, null, 4)]), V, N, w, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "125.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), F, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,141.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "125.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), C, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M176,142c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("path", {
                style: ["fill:#" + me.ballColor[900] + ";stroke:#" + me.ballColor[900], {
                    "stroke-width": "4.0416",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M135,147.6c0,7.2-3.9,17.4-10,17.4c-6.1,0-10-10.3-10-17.4c0-7.2,3.9-8.6,10-8.6C131.1,139,135,140.4,135,147.6\n          z"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "125",
                y1: "209",
                x2: "125",
                y2: "219"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "155",
                y1: "209",
                x2: "155",
                y2: "219"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "95",
                y1: "209",
                x2: "95",
                y2: "219"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "110",
                y1: "229",
                x2: "110",
                y2: "239"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "140",
                y1: "229",
                x2: "140",
                y2: "239"
            }, null, 4)])], 2)) : "bear" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 4,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M244.5,125.8c0,66-5.5,119.2-119.5,119.5C11,245.5,5.5,191.8,5.5,125.8S59,6.3,125,6.3S244.5,59.8,244.5,125.8\n            z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[300],
                cx: "35",
                cy: "35.5",
                r: "30.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[300],
                cx: "215",
                cy: "35.5",
                r: "30.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "36",
                cy: "37",
                r: "16"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "214",
                cy: "37",
                r: "16"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M215,10c14.1,0,25.5,11.4,25.5,25.5c0,8.5-4.2,16.5-11.4,21.2l-7.6,5.1l4.4,8c9.2,16.8,14.1,35.9,14.1,55.2\n            c0,35.3-3,62.8-17.7,82.4c-7.8,10.4-18.6,18.1-33.1,23.4c-16.5,6.1-38,9.2-64.2,9.2c-26.1,0-47.7-3.1-64.1-9.2\n            c-14.5-5.4-25.3-13-33.1-23.4C13,187.8,10,160.3,10,125c0-19.3,4.9-38.4,14.1-55.2l4.4-8l-7.6-5.1C13.7,52,9.5,44,9.5,35.5\n            C9.5,21.4,20.9,10,35,10c8.5,0,16.4,4.2,21.1,11.2l5.1,7.6l8-4.4C86.2,15,105.5,10,125,10s38.8,5,55.7,14.4l8,4.4l5.1-7.6\n            C198.6,14.2,206.5,10,215,10 M215,0c-12.2,0-23.1,6.2-29.4,15.6C167.6,5.7,147,0,125,0S82.4,5.7,64.4,15.6C58,6.2,47.2,0,35,0\n            C15.4,0-0.5,15.9-0.5,35.5c0,12.3,6.3,23.2,15.8,29.5C5.6,82.8,0,103.3,0,125c0,69,11,125,125,125c0,0,0,0,0,0\n            c114,0,125-56,125-125c0-21.7-5.6-42.2-15.3-60c9.5-6.4,15.8-17.2,15.8-29.5C250.5,15.9,234.6,0,215,0L215,0z"
            }, null, 4)]), B, z, M, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "125.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), E, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,141.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "125.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), D, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M176,142c0,0,7.9,8.3,17,0"
            }, null, 4)]), A, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M101.9,163.8c0,0,11.6,16.8,23.1,0"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M124.9,163.8c0,0,11.6,16.8,23.1,0"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["fill:#" + me.ballColor[900] + ";stroke:#" + me.ballColor[900], {
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M135.9,138.8c0,4.7-4.7,8.5-10.5,8.5s-10.5-3.8-10.5-8.5s4.7,0.5,10.5,0.5S135.9,134.1,135.9,138.8z"
            }, null, 4), Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "125.2",
                y1: "142.3",
                x2: "125.2",
                y2: "164.3"
            }, null, 4)])], 2)) : "cat" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 5,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", S, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M7.4,14.9l13,61.6c1.1,5.1,7.3,7.2,11.2,3.7L78.5,38c3.9-3.5,2.5-9.9-2.4-11.6L16.2,7\n              C11.2,5.4,6.3,9.7,7.4,14.9z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M242.6,14.9l-13,61.6c-1.1,5.1-7.3,7.2-11.2,3.7L171.5,38c-3.9-3.5-2.5-9.9,2.4-11.6L233.8,7\n              C238.8,5.4,243.7,9.7,242.6,14.9z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M227.1,28l-6.4,30.4c-0.5,2.5-3.6,3.5-5.5,1.8L192,39.4c-1.9-1.7-1.3-4.9,1.2-5.7l29.5-9.6\n              C225.2,23.3,227.6,25.4,227.1,28z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M22.9,28l6.4,30.4c0.5,2.5,3.6,3.5,5.5,1.8L58,39.4c1.9-1.7,1.3-4.9-1.2-5.7l-29.5-9.6\n              C24.8,23.3,22.4,25.4,22.9,28z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M198.7,181.7l13.8,17.5c3,3.8,8.8,3.6,11.5-0.4l7.5-11c2.7-4,0.8-9.5-3.8-10.9l-21.3-6.5\n            C199.7,168.4,194.4,176.2,198.7,181.7z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M51.3,181.7l-13.8,17.5c-3,3.8-8.8,3.6-11.5-0.4l-7.5-11c-2.7-4-0.8-9.5,3.8-10.9l21.3-6.5\n            C50.3,168.4,55.6,176.2,51.3,181.7z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M25.1,139.7L9.6,146c-3.4,1.3-7-0.9-7.3-4.5l-0.8-9.9c-0.3-3.6,3-6.4,6.5-5.6l16.3,3.7\n            C29.4,130.7,30,137.8,25.1,139.7z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M224.9,139.7l15.5,6.2c3.4,1.3,7-0.9,7.3-4.5l0.8-9.9c0.3-3.6-3-6.4-6.5-5.6l-16.3,3.7\n            C220.6,130.7,220,137.8,224.9,139.7z"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,10c21.2,0,42,5.8,59.9,16.8l3.9,2.4l4.4-1.4l43.3-14.2l-10.7,51.1l-0.7,3.5l1.7,3.2\n              c8.6,16.4,13.2,34.9,13.2,53.5c0,30.7-12,59.6-33.7,81.3C184.6,228,155.7,240,125,240s-59.6-12-81.3-33.7\n              C22,184.6,10,155.7,10,125c0-18.6,4.6-37.2,13.2-53.5l1.7-3.2l-0.7-3.5L13.4,13.6l43.3,14.2l4.4,1.4l3.9-2.4\n              C83,15.8,103.8,10,125,10 M125,0c-23.9,0-46.2,6.7-65.2,18.3L13.5,3.1c-0.9-0.3-1.7-0.4-2.6-0.4c-5,0-9.1,4.6-8,9.9l11.4,54.2\n              C5.2,84.2,0,104,0,125c0,69,56,125,125,125s125-56,125-125c0-21-5.2-40.8-14.3-58.2l11.4-54.2c1.1-5.3-3-9.9-8-9.9\n              c-0.8,0-1.7,0.1-2.6,0.4l-46.3,15.2C171.2,6.7,148.9,0,125,0L125,0z"
            }, null, 4)]), P, L, T, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "125.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), H, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,141.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "125.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), I, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M176,142c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Z, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "5.8869",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M102,163.8c0,0,11.4,16.5,22.7,0"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "5.8869",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M124.6,163.8c0,0,11.4,16.5,22.7,0"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["fill:#" + me.ballColor[900] + ";stroke:#" + me.ballColor[900], {
                    "stroke-width": "6.5618",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M131.8,142c0,3.1-3.1,5.6-6.9,5.6s-6.9-2.5-6.9-5.6c0-3.1,3.1,0.3,6.9,0.3S131.8,139,131.8,142z"
            }, null, 4), Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "5.8869",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "124.9",
                y1: "142.7",
                x2: "124.9",
                y2: "164.3"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "125",
                y1: "8",
                x2: "125",
                y2: "33"
            }, null, 4), Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "145",
                y1: "8",
                x2: "143",
                y2: "33"
            }, null, 4), Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "105",
                y1: "8",
                x2: "107",
                y2: "33"
            }, null, 4)])])], 2)) : "pumpkin" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 6,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M244.5,145.8c0,66-53.5,99.5-119.5,99.5S5.5,211.8,5.5,145.8S19,26,125,26.3C231,26.7,244.5,79.8,244.5,145.8\n              z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M239,118.3c0,56.3-51,102-114,102s-114-45.7-114-102s51-95,114-95S239,61.9,239,118.3z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,30c48.4,0,80.2,11.9,97,36.3c15.8,22.9,18,55.2,18,86.7c0,29.1-10.9,51.4-32.3,66.2\n              C188,232.8,159.4,240,125,240s-63-7.2-82.7-20.8C20.9,204.4,10,182.1,10,153c0-31.5,2.2-63.8,18-86.7C44.8,41.9,76.6,30,125,30\n              L125,30 M125,20C11,20,0,84,0,153c0,69,56,97,125,97s125-28,125-97S239,20,125,20C125,20,125,20,125,20L125,20z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6.1173",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M199,152c0,55.5-23,92-74,91.5c-52-0.5-74-36-74-91.5S84.1,41.5,125,41.5S199,96.5,199,152z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6.1173",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M130.9,42c127-32,140,187,0,204"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6.1173",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M119.1,42c-127-32-140,187,0,204"
            }, null, 4)]), _, R, Y, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "135.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), G, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,151.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "135.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), W, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M176,152c0,0,7.9,8.3,17,0"
            }, null, 4)])]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: ["fill:#" + me.ballColor[900] + ";stroke:#" + me.ballColor[900], {
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M125,218.6c-20.8,0-52.7-42.3-52.7-42.3c36.7,17.2,72,19,105.3,0C177.7,176.4,145.8,218.6,125,218.6z"
            }, null, 4), Object(c["createVNode"])("polyline", {
                style: "fill:#" + me.ballColor[300],
                points: "139.6,183.6 161,178 155,200 \t"
            }, null, 4), Object(c["createVNode"])("polyline", {
                style: "fill:#" + me.ballColor[300],
                points: "108.3,182.4 87,176.7 93,198.7 \t"
            }, null, 4)]), X], 2)) : "dragon" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 7,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M244.5,125.8c0,66-26.5,119.2-119.5,119.5C39,245.5,5.5,191.8,5.5,125.8S59,17.3,125,17.3\n            S244.5,59.8,244.5,125.8z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M239,99.8c0,50.9,0,126.2-114,126.2S11,150.7,11,99.8s51-79.5,114-79.5S239,48.9,239,99.8z"
            }, null, 4)]), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M201.1,9.3c25.1,17.1,36.3,36.2,27.3,58.1L198,57.2L201.1,9.3z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[300],
                d: "M48.4,9.3C23.3,26.5,12.1,45.5,21.1,67.4l30.3-10.2L48.4,9.3z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M146.4,94.7c0,9.2-9.6,19.7-21.4,19.7s-21.4-10.5-21.4-19.7S113.2,78,125,78S146.4,85.5,146.4,94.7z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[400],
                d: "M158,32.5c0,15.8-14.8,28.6-33,28.6S92,48.3,92,32.5s14.8-18.6,33-18.6S158,16.7,158,32.5z"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "158",
                cy: "70",
                r: "8"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "93",
                cy: "69",
                r: "9"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "81",
                cy: "46",
                r: "4"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "170",
                cy: "45",
                r: "7"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M204.5,17.2C220,29.2,231.4,46,226.4,65.1l-1,3.7l1.8,3.4c8.5,16.4,12.8,34.2,12.8,52.8\n            c0,77.4-37.6,115-115,115S10,202.4,10,125c0-18.6,4.3-36.4,12.8-52.8l1.8-3.4l-1-3.7C18.6,46,30,29.2,45.5,17.2l-0.1,12.9l-0.2,19\n            l15.7-10.6C79.9,25.7,102,19,125,19s45.1,6.7,64.1,19.5l15.7,10.6l-0.2-19L204.5,17.2 M194.4-1l0.2,31.2C174.7,16.8,150.8,9,125,9\n            s-49.7,7.8-69.6,21.2L55.6-1C27,13.8,6.5,39.3,13.9,67.6C5,84.8,0,104.3,0,125c0,95.7,56,125,125,125s125-29.3,125-125\n            c0-20.7-5-40.2-13.9-57.4C243.5,39.3,223,13.8,194.4-1L194.4-1z"
            }, null, 4)]), $, q, U, J, K, Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[400],
                cx: "185",
                cy: "137.5",
                rx: "29",
                ry: "32.5"
            }, null, 4), Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[400],
                cx: "65",
                cy: "137.5",
                rx: "29",
                ry: "32.5"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "135.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), Q, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M56,151.8c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "135.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), ee, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M176,152c0,0,7.9,8.3,17,0"
            }, null, 4)]), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[900],
                cx: "135",
                cy: "175",
                r: "4"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[900],
                cx: "115",
                cy: "175",
                r: "4"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "7",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M105.5,159.5c0,0,10-3,20-3c11,0,20,3,20,3"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "7",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M61.4,187.8c9.9,5,20,14.8,30.2,17.3c10.3,2.5,11.8,19.9,31.3,19.9c22.5,0,21.4-17.2,32.3-19.7\n          c10.9-2.5,22-12.3,33.3-17.4"
            }, null, 4), Object(c["createVNode"])("linearGradient", te, [Object(c["createVNode"])("stop", {
                offset: "0",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0.4",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0.7",
                style: "stop-color:#" + me.ballColor[400]
            }, null, 4)]), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "url(#SVGID_1_)",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M125,4.7c-11.7,12.1-18.7,24.2-21,36.4c0,15.9,42,15.9,42,0C143.7,28.9,136.7,16.8,125,4.7z"
            }, null, 4), Object(c["createVNode"])("linearGradient", le, [Object(c["createVNode"])("stop", {
                offset: "0",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0.4",
                style: "stop-color:#" + me.ballColor[300]
            }, null, 4), Object(c["createVNode"])("stop", {
                offset: "0.7",
                style: "stop-color:#" + me.ballColor[400]
            }, null, 4)]), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "url(#SVGID_2_)",
                    "stroke-width": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M125,69.7c-8.1,8.4-12.9,16.7-14.5,25.1c9.7,15.5,19.3,15.5,29,0C137.9,86.4,133.1,78,125,69.7z"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "178.5",
                cy: "63.5",
                r: "4.5"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "73",
                cy: "61",
                r: "4"
            }, null, 4), Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "7",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M61.4,187.8c9.9,5,20,8.8,30.2,11.3c10.3,2.5,20.7,8.8,31.3,8.9c10.6,0,21.4-6.2,32.3-8.7\n          c10.9-2.5,22-6.3,33.3-11.4"
            }, null, 4)], 2)) : "humanbear" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 8,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[300],
                cx: "45.5",
                cy: "41.5",
                r: "34.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[300],
                cx: "205",
                cy: "41.5",
                r: "34.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "207.5",
                cy: "40",
                r: "16"
            }, null, 4)])]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "43",
                cy: "40",
                r: "16"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.skinColor[50],
                d: "M223.5,193.4v-61.7c0-15.8-12.9-28.6-28.6-28.6c-46.6,7-93.1,7-139.7,0c-15.8,0-28.6,12.9-28.6,28.6v61.7\n              c32.8,37.9,65.7,51.9,98.5,51.9S190.7,231.3,223.5,193.4z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.skinColor[900],
                d: "M194.9,103c-46.6,7-93.1,7-139.7,0c-15.8,0-28.6,12.9-28.6,28.6v9c0-15.8,12.9-28.6,28.6-28.6\n              c46.6,7,93.1,7,139.7,0c15.8,0,28.6,12.9,28.6,28.6v-9C223.5,115.9,210.6,103,194.9,103z"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.skinColor[900],
                d: "M97.4,134.1l11.7-20.3c0.7-1.3-0.2-2.8-1.6-2.8H84.1c-1.4,0-2.4,1.6-1.6,2.8l11.7,20.3\n                C94.9,135.4,96.7,135.4,97.4,134.1z"
            }, null, 4), Object(c["createVNode"])("path", {
                style: "fill:#" + me.skinColor[900],
                d: "M155.8,134.1l11.7-20.3c0.7-1.3-0.2-2.8-1.6-2.8h-23.4c-1.4,0-2.4,1.6-1.6,2.8l11.7,20.3\n                C153.3,135.4,155.1,135.4,155.8,134.1z"
            }, null, 4)]), ce, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "6",
                    "stroke-miterlimit": "10"
                }],
                d: "M223.5,193.4v-61.7c0-15.8-12.9-28.6-28.6-28.6c-46.6,7-93.1,7-139.7,0c-15.8,0-28.6,12.9-28.6,28.6v61.7\n              c32.8,37.9,65.7,51.9,98.5,51.9S190.7,231.3,223.5,193.4z"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                d: "M125,10c16.6,0,32.6,3.5,47.6,10.3l5.9,2.7l4.9-4.3c6-5.3,13.6-8.2,21.6-8.2c17.9,0,32.5,14.6,32.5,32.5\n              c0,7.7-2.7,15.1-7.7,21l-4.2,5l2.8,5.8c7.6,15.7,11.5,32.6,11.5,50.2c0,30.7-12,59.6-33.7,81.3C184.6,228,155.7,240,125,240\n              s-59.6-12-81.3-33.7C22,184.6,10,155.7,10,125c0-17.6,3.9-34.5,11.5-50.2l2.8-5.8l-4.2-5c-4.9-5.9-7.7-13.3-7.7-21\n              c0-17.9,14.6-32.5,32.5-32.5c8,0,15.6,2.9,21.6,8.2l4.9,4.3l5.9-2.7C92.4,13.5,108.4,10,125,10 M125,0c-18.5,0-36,4-51.8,11.2\n              C65.7,4.6,55.8,0.5,45,0.5C21.5,0.5,2.5,19.5,2.5,43c0,10.4,3.8,20,10,27.4C4.5,86.9,0,105.4,0,125c0,69,56,125,125,125\n              s125-56,125-125c0-19.6-4.5-38.1-12.5-54.6c6.2-7.4,10-17,10-27.4c0-23.5-19-42.5-42.5-42.5c-10.8,0-20.7,4.1-28.2,10.7\n              C161,4,143.5,0,125,0L125,0z"
            }, null, 4)]), oe, re, ie, Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900] + ";fill:#" + me.ballColor[900], {
                    "stroke-width": "7.148",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M132.8,88.8c0,3.4-3.4,6.1-7.5,6.1c-4.1,0-7.5-2.7-7.5-6.1s3.4,0.4,7.5,0.4C129.4,89.2,132.8,85.4,132.8,88.8\n              z"
            }, null, 4), Object(c["createVNode"])("line", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "4.2888",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                x1: "125.2",
                y1: "91.3",
                x2: "125.2",
                y2: "107"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "none",
                    "stroke-width": "8.3455",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M104.3,188.1c0,0,20.7,21.9,41.3,0"
            }, null, 4), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "74.4",
                cy: "157.2",
                rx: "17.5",
                ry: "20.3"
            }, null, 4), ae, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "5.3846",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M68.4,168.1c0,0,5.3,5.6,11.4,0"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "175.6",
                cy: "157.3",
                rx: "17.5",
                ry: "20.3"
            }, null, 4), se, Object(c["createVNode"])("path", {
                style: ["stroke:#" + me.ballColor[700], {
                    fill: "none",
                    "stroke-width": "5.3846",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                d: "M169.5,168.2c0,0,5.3,5.6,11.4,0"
            }, null, 4)])])]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "#FFFFFF",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                cx: "75",
                cy: "71",
                r: "22.5"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[900],
                cx: "75",
                cy: "82.5",
                r: "11"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: ["stroke:#" + me.ballColor[900], {
                    fill: "#FFFFFF",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }],
                cx: "175",
                cy: "71",
                r: "22.5"
            }, null, 4), Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[900],
                cx: "175",
                cy: "82.5",
                r: "11"
            }, null, 4)])])], 2)) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 9,
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 250 250",
                style: {
                    "enable-background": "new 0 0 250 250"
                },
                "xml:space": "preserve",
                class: {
                    "ballBounce cursor-pointer block lg:block w-32 h-32": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                }
            }, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "125",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "125",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[900],
                class: "ballStroke",
                d: "M125,10c30.7,0,59.6,12,81.3,33.7S240,94.3,240,125s-12,59.6-33.7,81.3S155.7,240,125,240s-59.6-12-81.3-33.7\n\t\tS10,155.7,10,125s12-59.6,33.7-81.3S94.3,10,125,10 M125,0C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z"
            }, null, 4)]), ne, Object(c["createVNode"])("g", de, [Object(c["createVNode"])("g", ue, [Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    "stroke-width": "9.8995",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[900]],
                d: "M100.5,162.3c0,0,24.5,26,49,0"
            }, null, 4), Object(c["createVNode"])("g", be, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "65",
                cy: "125.6",
                rx: "26",
                ry: "30.1"
            }, null, 4), he, Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[700]],
                d: "M56,141.8c0,0,7.9,8.3,17,0"
            }, null, 4), Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[900],
                cx: "185",
                cy: "125.8",
                rx: "26",
                ry: "30.1"
            }, null, 4), pe, Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    "stroke-width": "8",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[700]],
                d: "M176,142c0,0,7.9,8.3,17,0"
            }, null, 4)])])])], 2))], 64)) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", fe, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("circle", {
                style: "fill:#" + me.ballColor[400],
                cx: "126",
                cy: "125.8",
                r: "119.5"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("ellipse", {
                style: "fill:#" + me.ballColor[300],
                cx: "126.5",
                cy: "108.3",
                rx: "114",
                ry: "102"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: "fill:#" + me.ballColor[500],
                class: "ballStroke",
                d: "M125.4,10.1c30.7,0,59.6,12,81.3,33.7s33.7,50.6,33.7,81.3s-12,59.6-33.7,81.3c-21.7,21.7-50.6,33.7-81.3,33.7\n            s-59.6-12-81.3-33.7c-21.7-21.7-33.7-50.6-33.7-81.3s12-59.6,33.7-81.3C65.8,22,94.7,10.1,125.4,10.1 M125.4,0.1\n            c-69,0-125,56-125,125s56,125,125,125c69,0,125-56,125-125S194.5,0.1,125.4,0.1L125.4,0.1z"
            }, null, 4)]), ke, Object(c["createVNode"])("g", ye, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                d: "M183.6,41.3h-11.2c-0.6,0-1.2-0.4-1.4-1s-0.1-1.2,0.3-1.7l8.6-8.6h-6.8c-0.9,0-1.6-0.7-1.6-1.6\n              c0-0.9,0.7-1.6,1.6-1.6h10.6c0.6,0,1.2,0.4,1.4,1c0.2,0.6,0.1,1.2-0.3,1.7l-8.6,8.6h7.5c0.9,0,1.6,0.7,1.6,1.6\n              C185.2,40.7,184.5,41.3,183.6,41.3z",
                style: "fill:#" + me.ballColor[400]
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                d: "M161.8,56.8h-8.5c-0.6,0-1.2-0.4-1.4-1c-0.2-0.6-0.1-1.2,0.3-1.7l5.9-5.9h-4.3c-0.9,0-1.6-0.7-1.6-1.6\n              c0-0.9,0.7-1.6,1.6-1.6h8c0.6,0,1.2,0.4,1.4,1c0.2,0.6,0.1,1.2-0.3,1.7l-5.9,5.9h4.8c0.9,0,1.6,0.7,1.6,1.6S162.6,56.8,161.8,56.8\n              z",
                style: "fill:#" + me.ballColor[400]
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                d: "M166.6,27.3h-6.2c-0.6,0-1.2-0.4-1.4-1c-0.2-0.6-0.1-1.2,0.3-1.7l3.6-3.6h-2.1c-0.9,0-1.6-0.7-1.6-1.6\n              c0-0.9,0.7-1.6,1.6-1.6h5.9c0.6,0,1.2,0.4,1.4,1c0.2,0.6,0.1,1.2-0.3,1.7l-3.6,3.6h2.5c0.9,0,1.6,0.7,1.6,1.6\n              C168.1,26.6,167.4,27.3,166.6,27.3z",
                style: "fill:#" + me.ballColor[400]
            }, null, 4)])]), Object(c["createVNode"])("g", Oe, [Object(c["createVNode"])("g", je, [Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    "stroke-width": "8.2184",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[900] + ";"],
                d: "M98.2,59.6c-4,13.1-16.5,20.8-27.7,17.3S53.4,60,57.4,47"
            }, null, 4)]), Object(c["createVNode"])("g", null, [Object(c["createVNode"])("path", {
                style: [{
                    fill: "none",
                    stroke: "#253D89",
                    "stroke-width": "10",
                    "stroke-miterlimit": "10"
                }, "stroke:#" + me.ballColor[900] + ";"],
                d: "M214.8,95.8c-4.9,15.9-20,25.3-33.7,21.1c-13.7-4.2-20.8-20.6-15.9-36.5"
            }, null, 4)])]), ve])]))], 8, ["id"])
        }
        l("c740");
        var xe = l("abdd")
          , me = l("6c30")
          , Ve = l("1209")
          , Ne = {
            name: "BlockFace",
            props: {
                isActive: Boolean,
                type: String,
                isPreview: Boolean,
                color: String,
                skin: String,
                id: String
            },
            data: function() {
                return {
                    colors: xe["a"],
                    skins: me["a"],
                    isActiveFace: !1
                }
            },
            computed: {
                ballColor: function() {
                    var e = this;
                    if (this.color) {
                        var t = this.colors.findIndex((function(t) {
                            return t.value === e.color
                        }
                        ));
                        return this.colors[t].colors
                    }
                    var l = Math.floor(Math.random() * this.colors.length);
                    return this.colors[l].colors
                },
                skinColor: function() {
                    var e = this;
                    if (this.skin) {
                        var t = this.skins.findIndex((function(t) {
                            return t.value === e.skin
                        }
                        ));
                        return this.skins[t].colors
                    }
                    var l = Math.floor(Math.random() * this.skins.length);
                    return this.skins[l].colors
                }
            },
            methods: {
                animateZZZ: function() {
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .faceZZZ",
                        keyframes: [{
                            scale: .9,
                            rotate: 0,
                            duration: 0
                        }, {
                            scale: 1.2,
                            rotate: 10
                        }, {
                            scale: .9,
                            rotate: 0
                        }],
                        loop: !0,
                        duration: 9e3,
                        direction: "alternate",
                        easing: "easeInOutSine"
                    }),
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .faceLightRotateZZZ",
                        keyframes: [{
                            rotate: 5,
                            easing: "easeOutSine"
                        }, {
                            rotate: 0,
                            easing: "easeInSine"
                        }, {
                            rotate: -5,
                            easing: "easeOutSine"
                        }, {
                            rotate: 0,
                            easing: "easeInSine"
                        }],
                        loop: !0,
                        duration: 9e3,
                        easing: "easeInOutSine"
                    }),
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .ballFloat",
                        keyframes: [{
                            translateY: 0,
                            rotate: -2,
                            duration: 0
                        }, {
                            translateY: -20,
                            rotate: -8
                        }, {
                            translateY: 0,
                            rotate: -2
                        }],
                        loop: !0,
                        duration: 9e3,
                        easing: "easeInOutSine"
                    }),
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .ballFloatMouth",
                        keyframes: [{
                            scale: .4,
                            rotate: 0,
                            duration: 0
                        }, {
                            scale: 1.3,
                            rotate: 10
                        }, {
                            scale: .4,
                            rotate: 0
                        }],
                        loop: !0,
                        duration: 9e3,
                        easing: "easeInOutSine"
                    }),
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .ballFloatEyes",
                        keyframes: [{
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0,
                            duration: 0
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            skewX: -10
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0
                        }],
                        loop: !0,
                        duration: 9e3,
                        easing: "easeInOutSine"
                    })
                },
                animateDeactivate: function() {
                    var e = this;
                    Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .ballStroke",
                        fill: "#" + this.ballColor[500],
                        easing: "easeInOutSine",
                        duration: 400,
                        direction: "linear",
                        loop: !1
                    });
                    var t = Object(Ve["a"])({
                        targets: "#block-face-" + this.id + " .ballBounce",
                        keyframes: [{
                            translateX: 0,
                            translateY: 0,
                            translateZ: 0,
                            scaleX: 1.1,
                            scaleY: .95,
                            scaleZ: 1,
                            easing: "cubicBezier(.8,0,1,1)",
                            duration: 0
                        }, {
                            translateX: 0,
                            translateY: -30,
                            translateZ: 0,
                            scaleX: .95,
                            scaleY: 1.05,
                            scaleZ: 1,
                            rotate: -360,
                            easing: "cubicBezier(0,0,.2,1)",
                            duration: 200
                        }, {
                            translateX: 0,
                            translateY: 0,
                            translateZ: 0,
                            scaleX: .95,
                            scaleY: .95,
                            scaleZ: 1,
                            easing: "cubicBezier(.8,0,1,1)",
                            duration: 200
                        }],
                        loop: !1
                    });
                    t.finished.then((function() {
                        e.isActiveFace = !1,
                        Ve["a"].remove("#block-face-" + e.id + " .ballBounce"),
                        Object(c["nextTick"])((function() {
                            e.animateZZZ()
                        }
                        ))
                    }
                    ))
                },
                animateActive: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , l = null;
                    if (t)
                        l = Object(Ve["a"])({
                            targets: "#block-" + this.id,
                            duration: 0
                        });
                    else {
                        var o = 8;
                        Object(Ve["a"])({
                            targets: "#block-" + this.id,
                            backgroundColor: [{
                                value: "#" + this.ballColor[50]
                            }, {
                                value: "#ffffff"
                            }, {
                                value: "#" + this.ballColor[100]
                            }, {
                                value: "#ffffff"
                            }, {
                                value: "#" + this.ballColor[100]
                            }],
                            borderColor: [{
                                value: "#" + this.ballColor[500]
                            }, {
                                value: "#" + this.ballColor[600]
                            }, {
                                value: "#" + this.ballColor[700]
                            }, {
                                value: "#" + this.ballColor[800]
                            }, {
                                value: "#" + this.ballColor[900]
                            }],
                            translateY: [{
                                value: -1 * o
                            }, {
                                value: o
                            }, {
                                value: o / -2
                            }, {
                                value: o / 2
                            }, {
                                value: 0
                            }],
                            easing: "easeInOutSine",
                            delay: 300,
                            duration: 400,
                            complete: function(e) {
                                e.animatables.length && (e.animatables[0].target.style.removeProperty("border-color"),
                                e.animatables[0].target.style.removeProperty("background-color"))
                            }
                        }),
                        Object(Ve["a"])({
                            targets: "#block-face-" + this.id + " .ballFloat",
                            rotate: -15,
                            translateX: 32,
                            translateY: 40,
                            duration: 200
                        }),
                        Object(Ve["a"])({
                            targets: "#block-face-" + this.id + " .ballStroke",
                            fill: "#" + this.ballColor[900],
                            easing: "easeInOutSine",
                            duration: 400,
                            direction: "linear",
                            loop: !1
                        }),
                        Object(Ve["a"])({
                            targets: ["#block-face-" + this.id + " .ballFloatEyes", "#block-face-" + this.id + " .ballFloatMouth"],
                            keyframes: [{
                                translateY: 70
                            }],
                            loop: !1,
                            delay: 200,
                            duration: 200,
                            easing: "easeInOutSine"
                        }),
                        l = Object(Ve["a"])({
                            targets: "#block-face-" + this.id + " .ballZZZ",
                            keyframes: [{
                                translateX: 0,
                                translateY: 0,
                                translateZ: 0,
                                scaleX: .1,
                                scaleY: .1,
                                scaleZ: .1,
                                easing: "cubicBezier(.8,0,1,1)",
                                duration: 0
                            }, {
                                translateX: 0,
                                translateY: -30,
                                translateZ: 0,
                                scaleX: .95,
                                scaleY: 1.05,
                                scaleZ: 1,
                                rotate: 360,
                                easing: "cubicBezier(0,0,.2,1)",
                                duration: 200
                            }, {
                                translateX: 0,
                                translateY: 0,
                                translateZ: 0,
                                scaleX: 1.1,
                                scaleY: .95,
                                scaleZ: 1,
                                easing: "cubicBezier(.8,0,1,1)",
                                duration: 200
                            }]
                        })
                    }
                    l.finished.then((function() {
                        e.isActiveFace = !0,
                        Object(c["nextTick"])((function() {
                            Object(Ve["a"])({
                                targets: "#block-face-" + e.id + " .ballBounce",
                                keyframes: [{
                                    translateX: 0,
                                    translateY: 0,
                                    translateZ: 0,
                                    scaleX: 1.1,
                                    scaleY: .95,
                                    scaleZ: 1,
                                    easing: "cubicBezier(.8,0,1,1)",
                                    duration: 0
                                }, {
                                    translateX: 0,
                                    translateY: -30,
                                    translateZ: 0,
                                    scaleX: .95,
                                    scaleY: 1.05,
                                    scaleZ: 1,
                                    easing: "cubicBezier(0,0,.2,1)",
                                    duration: 500
                                }, {
                                    translateX: 0,
                                    translateY: 0,
                                    translateZ: 0,
                                    scaleX: 1.1,
                                    scaleY: .95,
                                    scaleZ: 1,
                                    easing: "cubicBezier(.8,0,1,1)",
                                    duration: 500
                                }],
                                loop: !0,
                                duration: 1e3
                            })
                        }
                        ))
                    }
                    ))
                }
            },
            watch: {
                isActive: function(e) {
                    var t = this;
                    !1 === e ? this.animateDeactivate() : Object(c["nextTick"])((function() {
                        t.animateActive()
                    }
                    ))
                },
                type: function() {
                    var e = this;
                    this.isActive && Object(c["nextTick"])((function() {
                        e.animateActive(!0)
                    }
                    ))
                }
            },
            mounted: function() {
                !0 === this.isActive ? (this.isActiveFace = !0,
                this.animateActive()) : this.animateZZZ()
            }
        };
        l("f5f0");
        Ne.render = ge;
        t["a"] = Ne
    },
    "5a9e": function(e, t, l) {
        "use strict";
        function c() {
            return new Worker(l.p + "js/countdown.87779f0b.worker.js")
        }
        l.d(t, "a", (function() {
            return c
        }
        ))
    },
    6689: function(e, t, l) {
        "use strict";
        function c(e, t, l) {
            var c = document.timeline ? document.timeline.currentTime : performance.now();
            function o(e) {
                t.aborted || (l(e),
                r(e))
            }
            function r(t) {
                var l = t - c
                  , r = Math.round(l / e) * e
                  , i = c + r + e
                  , a = i - performance.now();
                setTimeout((function() {
                    return requestAnimationFrame(o)
                }
                ), a)
            }
            r(c)
        }
        l.d(t, "a", (function() {
            return c
        }
        ))
    },
    "69ac": function(e, t, l) {
        e.exports = l.p + "media/alarm.81a82366.mp3"
    },
    "6c30": function(e, t, l) {
        "use strict";
        l.d(t, "a", (function() {
            return c
        }
        ));
        var c = [{
            text: "Neutral",
            value: "neutral",
            colors: {
                50: "FACC15",
                900: "D97706"
            }
        }, {
            text: "Light",
            value: "light",
            colors: {
                50: "FBE0C4",
                900: "EBC2A0"
            }
        }, {
            text: "Medium Light",
            value: "mediumlight",
            colors: {
                50: "E4C39F",
                900: "D5A27B"
            }
        }, {
            text: "Medium",
            value: "medium",
            colors: {
                50: "C69A73",
                900: "B07A61"
            }
        }, {
            text: "Medium Dark",
            value: "mediumdark",
            colors: {
                50: "A56F46",
                900: "835031"
            }
        }, {
            text: "Dark",
            value: "dark",
            colors: {
                50: "644E41",
                900: "44312A"
            }
        }]
    },
    a933: function(e, t, l) {
        "use strict";
        var c = l("7a23")
          , o = {
            key: 0
        }
          , r = Object(c["createVNode"])("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
        }, null, -1)
          , i = Object(c["createVNode"])("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }, null, -1)
          , a = {
            key: 1
        }
          , s = Object(c["createVNode"])("path", {
            fill: "#EF9645",
            d: "M15.977 9.36h3.789c.114-.191.147-.439.058-.673l-3.846-4.705V9.36z"
        }, null, -1)
          , n = Object(c["createVNode"])("path", {
            fill: "#FFDC5D",
            d: "M12.804 22.277c-.057-.349-.124-.679-.206-.973-.62-2.223-1.14-3.164-.918-5.494.29-1.584.273-4.763 4.483-4.268 1.112.131 2.843.927 3.834.91.567-.01.98-1.157 1.017-1.539.051-.526-.865-1.42-1.248-1.554-.383-.134-2.012-.631-2.681-.824-1.039-.301-.985-1.705-1.051-2.205-.031-.235.084-.467.294-.591.21-.124.375-.008.579.125l.885.648c.497.426-.874 1.24-.503 1.376 0 0 1.755.659 2.507.796.412.075 1.834-1.529 1.917-2.47.065-.74-3.398-4.083-5.867-5.381-.868-.456-1.377-.721-1.949-.694-.683.032-.898.302-1.748 1.03C8.302 4.46 4.568 11.577 4.02 13.152c-2.246 6.461-2.597 9.865-2.677 11.788-.049.59-.076 1.177-.076 1.758.065 0-1 5 0 6s5.326 1 5.326 1c10 3.989 28.57 2.948 28.57-7.233 0-12.172-18.813-10.557-22.359-4.188z"
        }, null, -1)
          , d = Object(c["createVNode"])("path", {
            fill: "#EF9645",
            d: "M20.63 32.078c-3.16-.332-5.628-1.881-5.767-1.97-.465-.297-.601-.913-.305-1.379s.913-.603 1.38-.308c.04.025 4.003 2.492 7.846 1.467 2.125-.566 3.867-2.115 5.177-4.601.258-.49.866-.676 1.351-.419.488.257.676.862.419 1.351-1.585 3.006-3.754 4.893-6.447 5.606-1.257.332-2.502.374-3.654.253z"
        }, null, -1)
          , u = Object(c["createTextVNode"])("> ")
          , b = Object(c["createVNode"])("path", {
            fill: "#FDD888",
            d: "M31.898 23.938C31.3 17.32 28 14 28 14l-6-8h-8l-6 8s-1.419 1.433-2.567 4.275C3.444 18.935 2 20.789 2 23c0 1.448.625 2.742 1.609 3.655C3.233 27.357 3 28.147 3 29c0 1.958 1.136 3.636 2.775 4.456C7.058 35.378 8.772 36 10 36h16c1.379 0 3.373-.779 4.678-3.31C32.609 31.999 34 30.17 34 28c0-1.678-.834-3.154-2.102-4.062zM18 6c.55 0 1.058-.158 1.5-.416.443.258.951.416 1.5.416 1.657 0 4-2.344 4-4 0 0 0-2-2-2-.788 0-1 1-2 1s-1-1-3-1-2 1-3 1-1.211-1-2-1c-2 0-2 2-2 2 0 1.656 2.344 4 4 4 .549 0 1.057-.158 1.5-.416.443.258.951.416 1.5.416z"
        }, null, -1)
          , h = Object(c["createVNode"])("path", {
            fill: "#BF6952",
            d: "M24 6c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1s.448-1 1-1h10c.553 0 1 .448 1 1z"
        }, null, -1)
          , p = Object(c["createVNode"])("path", {
            fill: "#67757F",
            d: "M23.901 24.542c0-4.477-8.581-4.185-8.581-6.886 0-1.308 1.301-1.947 2.811-1.947 2.538 0 2.99 1.569 4.139 1.569.813 0 1.205-.493 1.205-1.046 0-1.284-2.024-2.256-3.965-2.592V12.4c0-.773-.65-1.4-1.454-1.4-.805 0-1.456.627-1.456 1.4v1.283c-2.116.463-3.937 1.875-3.937 4.176 0 4.299 8.579 4.125 8.579 7.145 0 1.047-1.178 2.093-3.111 2.093-2.901 0-3.867-1.889-5.045-1.889-.574 0-1.087.464-1.087 1.164 0 1.113 1.938 2.451 4.603 2.824l-.001.01v1.398c0 .772.652 1.4 1.456 1.4.804 0 1.455-.628 1.455-1.4v-1.398c0-.017-.008-.03-.009-.045 2.398-.43 4.398-1.932 4.398-4.619z"
        }, null, -1)
          , f = Object(c["createTextVNode"])("> ")
          , k = Object(c["createVNode"])("ellipse", {
            fill: "#99AAB5",
            cx: "18",
            cy: "26",
            rx: "18",
            ry: "10"
        }, null, -1)
          , y = Object(c["createVNode"])("ellipse", {
            fill: "#CCD6DD",
            cx: "18",
            cy: "24",
            rx: "18",
            ry: "10"
        }, null, -1)
          , O = Object(c["createVNode"])("path", {
            fill: "#F5F8FA",
            d: "M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"
        }, null, -1)
          , j = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M34.385 9.644c2.442-10.123-9.781-7.706-12.204-5.799-1.34-.148-2.736-.234-4.181-.234-9.389 0-17 3.229-17 8.444C1 17.271 8.611 21.5 18 21.5s17-4.229 17-9.444c0-.863-.226-1.664-.615-2.412zm-2.503-2.692c-1.357-.938-3.102-1.694-5.121-2.25 1.875-.576 4.551-.309 5.121 2.25z"
        }, null, -1)
          , v = Object(c["createVNode"])("ellipse", {
            fill: "#8A4B38",
            cx: "18",
            cy: "13",
            rx: "15",
            ry: "7"
        }, null, -1)
          , g = Object(c["createVNode"])("path", {
            fill: "#D99E82",
            d: "M20 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z"
        }, null, -1)
          , x = Object(c["createTextVNode"])("> ")
          , m = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M27.865 16.751c0-6.242-4.411-9.988-9.927-9.988s-9.835 3.746-9.835 9.988c0 3.48-.103 6.485 3.897 7.89v2.722c0 1.034.966 1.872 2 1.872 1.035 0 2-.838 2-1.872v-1.97 1.97c0 1.034.965 1.872 2 1.872 1.036 0 2-.838 2-1.872v-1.97 1.97c0 1.034.966 1.872 2 1.872s2-.838 2-1.872v-2.722c4-1.405 3.865-4.41 3.865-7.89z"
        }, null, -1)
          , V = Object(c["createVNode"])("circle", {
            fill: "#292F33",
            cx: "13.629",
            cy: "15.503",
            r: "3.121"
        }, null, -1)
          , N = Object(c["createVNode"])("path", {
            fill: "#292F33",
            d: "M25.488 15.503c0 1.724 0 3.121-3.121 3.121-3.12 0-3.12-1.397-3.12-3.121s1.396-3.121 3.12-3.121c1.725 0 3.121 1.397 3.121 3.121zm-6.301 5.656c-.157-.382-.626-.662-1.189-.662-.561 0-1.031.28-1.188.662-.394.11-.685.469-.685.898 0 .517.419.936.937.936.409 0 .753-.263.88-.628.019 0 .037.004.056.004.019 0 .037-.004.057-.004.128.365.472.628.88.628.517 0 .936-.419.936-.936 0-.429-.291-.786-.684-.898z"
        }, null, -1)
          , w = Object(c["createVNode"])("path", {
            d: "M11 27c0-.367.075-.713.195-1.038-.984-.447-1.831-1.082-2.503-1.97-1.107.969-2.163 1.876-3.127 2.695C4.985 26.26 4.275 26 3.5 26 1.567 26 0 27.566 0 29.5c0 1.778 1.33 3.229 3.046 3.454C3.271 34.671 4.722 36 6.5 36c1.933 0 3.5-1.566 3.5-3.5 0-.775-.26-1.485-.686-2.065.6-.706 1.246-1.46 1.931-2.25C11.088 27.821 11 27.421 11 27zm16.872-15.482c.884-.769 1.729-1.495 2.515-2.163.569.403 1.262.645 2.013.645 1.934 0 3.5-1.567 3.5-3.5 0-1.743-1.277-3.177-2.945-3.444C32.735 1.335 31.281 0 29.5 0 27.566 0 26 1.567 26 3.5c0 .775.26 1.485.687 2.065-.594.7-1.233 1.445-1.911 2.227 1.3.871 2.361 2.095 3.096 3.726zM3.5 10c.775 0 1.485-.26 2.065-.687.799.679 1.661 1.419 2.564 2.204.735-1.631 1.795-2.855 3.096-3.726-.679-.781-1.317-1.527-1.912-2.226.427-.58.687-1.29.687-2.065C10 1.567 8.433 0 6.5 0 4.722 0 3.271 1.33 3.046 3.046 1.33 3.271 0 4.722 0 6.5 0 8.433 1.567 10 3.5 10zm28.9 16c-.752 0-1.444.242-2.014.645-.952-.809-1.99-1.701-3.079-2.653-.672.889-1.519 1.523-2.503 1.971.121.324.196.67.196 1.037 0 .421-.088.821-.245 1.185.685.79 1.331 1.544 1.931 2.25-.426.58-.686 1.29-.686 2.065 0 1.934 1.566 3.5 3.5 3.5 1.781 0 3.235-1.334 3.455-3.056 1.668-.267 2.945-1.701 2.945-3.444 0-1.934-1.566-3.5-3.5-3.5z",
            fill: "#AAB8C2"
        }, null, -1)
          , F = Object(c["createTextVNode"])("> ")
          , C = Object(c["createVNode"])("circle", {
            fill: "#FFCC4D",
            cx: "18",
            cy: "18",
            r: "18"
        }, null, -1)
          , B = Object(c["createVNode"])("path", {
            fill: "#664500",
            d: "M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
        }, null, -1)
          , z = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"
        }, null, -1)
          , M = Object(c["createVNode"])("ellipse", {
            fill: "#664500",
            cx: "12",
            cy: "13.5",
            rx: "2.5",
            ry: "3.5"
        }, null, -1)
          , E = Object(c["createVNode"])("ellipse", {
            fill: "#664500",
            cx: "24",
            cy: "13.5",
            rx: "2.5",
            ry: "3.5"
        }, null, -1)
          , D = Object(c["createTextVNode"])("> ")
          , A = Object(c["createVNode"])("path", {
            fill: "#FFCB4C",
            d: "M35 18.619c0-3.794-3.075-6.869-6.869-6.869-.979 0-2.752.578-2.752.578l-13.126 1.384s-2.717-1.581-4.383-1.581C4.075 12.131 1 15.206 1 19c0 .237.012.471.035.702C1.406 28.763 8.849 36 18 36c9.389 0 17-7.611 17-17 0-.052-.009-.101-.012-.153.003-.076.012-.151.012-.228z"
        }, null, -1)
          , S = Object(c["createVNode"])("path", {
            fill: "#F19020",
            d: "M30.126 13.751c-.941-.244-1.009.386-2.202.246-1.168-.137.429-.739-.195-1.092-.21-.119-.511-.144-.882-.098-1.052.129-16.954.544-17.547.83-.527.254-.839.548-1.318.101-.603-.562-1.466-.238-1.716-.051-.322.242-.389.722.234 1.277.621.42 1.673.859 3.465 1.159.197.033.365.046.522.052 1.227.041 1.397-1.67 3.13-1.716 1.136-.03 11.153 1.07 11.978.958.101-.014.207-.024.329-.024 1.563 0 1.926 1.45 3.589.316.705-.573 1.811-1.648.613-1.958z"
        }, null, -1)
          , P = Object(c["createVNode"])("path", {
            fill: "#F36C24",
            d: "M5.938 9.115c1.523 1.527 2.604 3.145 3.362 4.523.566 1.029.956 1.929 1.187 2.538 1.227.041 1.397-.67 3.13-.716 1.136-.03 1.783.769 2.623 1.229 1.502.822 2.569-.73 3.719-.73.85 0 2.219 1.207 3.176.764 1.387-.643 1.635-1.191 2.46-1.304.322-.791.741-1.696 1.252-2.609.74-1.324 1.678-2.665 2.841-3.693H5.938z"
        }, null, -1)
          , L = Object(c["createVNode"])("path", {
            fill: "#CE5C1F",
            d: "M29.306 9.435c1.281-1.263-23.039.016-22.341.788.988 1.094 2.2 3.153 2.2 3.153s4.757 2.405 8.351-.626c2.5 1.5 6 .969 7.562-1.609 0 0 1.217.453 2.451.531 0 0 .953-1.425 1.777-2.237z"
        }, null, -1)
          , T = Object(c["createVNode"])("ellipse", {
            fill: "#65471B",
            cx: "18",
            cy: "28.638",
            rx: "4.332",
            ry: "4.95"
        }, null, -1)
          , H = Object(c["createVNode"])("path", {
            fill: "#65471B",
            d: "M14 20.606c0 1.473-.896 2.667-2 2.667-1.105 0-2-1.194-2-2.667 0-1.473.895-2.667 2-2.667 1.104 0 2 1.194 2 2.667zm12-.001c0 1.473-.895 2.667-2 2.667s-2-1.194-2-2.667c0-1.472.896-2.667 2-2.667 1.105.001 2 1.195 2 2.667z"
        }, null, -1)
          , I = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M31.125 3.725c-.24 0-.467.045-.686.109-.688-.845-1.723-1.396-2.898-1.396-.087 0-.169.02-.255.026-.734-.827-1.794-1.359-2.987-1.359-1.505 0-2.8.839-3.486 2.066-.346-.798-1.139-1.357-2.064-1.357-.718 0-1.349.342-1.761.865C16.48 1.209 15.1.147 13.458.147c-1.323 0-2.48.689-3.148 1.723-.184-.029-.368-.058-.56-.058-1.432 0-2.661.812-3.293 1.992-.203-.038-.41-.063-.624-.063-1.864 0-3.375 1.511-3.375 3.375s1.511 3.375 3.375 3.375c.588 0 1.135-.159 1.614-.425.376.282.838.456 1.345.456.145 0 .285-.016.422-.043.855 1.379 2.367 2.303 4.109 2.303 1.709 0 3.206-.885 4.073-2.217.72.882 1.802 1.457 3.029 1.457 1.815 0 3.327-1.238 3.776-2.911.034.001.065.01.099.01.283 0 .559-.031.826-.087.654.556 1.491.904 2.417.904 1.174 0 2.21-.551 2.897-1.396.219.064.446.109.686.109 1.36 0 2.463-1.103 2.463-2.463s-1.104-2.463-2.464-2.463z"
        }, null, -1)
          , Z = Object(c["createVNode"])("circle", {
            fill: "#E1E8ED",
            cx: "27.795",
            cy: "5.767",
            r: "2.121"
        }, null, -1)
          , _ = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M19.876 5.903c0-1.193-.967-2.161-2.16-2.161-.368 0-.71.101-1.013.263-.251-.601-.844-1.024-1.537-1.024-.567 0-1.067.285-1.368.718-.67-.623-1.561-1.013-2.548-1.013-1.755 0-3.216 1.21-3.625 2.838-.365-.367-.87-.595-1.429-.595-1.111 0-2.012.901-2.012 2.012s.901 2.012 2.012 2.012c.703 0 1.319-.361 1.679-.907.517 1.081 1.529 1.873 2.749 2.079.39.67 1.107 1.125 1.938 1.125 1.074 0 1.969-.754 2.193-1.76.324.18.691.292 1.087.292 1.07 0 1.962-.749 2.19-1.75 1.042-.155 1.844-1.044 1.844-2.129z"
        }, null, -1)
          , R = Object(c["createTextVNode"])("> ")
          , Y = Object(c["createVNode"])("path", {
            fill: "#FFCC4D",
            d: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        }, null, -1)
          , G = Object(c["createVNode"])("ellipse", {
            fill: "#664500",
            cx: "11.5",
            cy: "14.5",
            rx: "2.5",
            ry: "3.5"
        }, null, -1)
          , W = Object(c["createVNode"])("ellipse", {
            fill: "#664500",
            cx: "24.5",
            cy: "14.5",
            rx: "2.5",
            ry: "3.5"
        }, null, -1)
          , X = Object(c["createVNode"])("path", {
            fill: "#664500",
            d: "M8.665 27.871c.178.161.444.171.635.029.039-.029 3.922-2.9 8.7-2.9 4.766 0 8.662 2.871 8.7 2.9.191.142.457.13.635-.029.177-.16.217-.424.094-.628C27.3 27.029 24.212 22 18 22s-9.301 5.028-9.429 5.243c-.123.205-.084.468.094.628z"
        }, null, -1)
          , $ = Object(c["createTextVNode"])("> ")
          , q = Object(c["createVNode"])("path", {
            fill: "#FFAC33",
            d: "M31 5.718h-6v4h4s2 0 2 2v12c0 2-2 2-2 2h-4v4h6c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4z"
        }, null, -1)
          , U = Object(c["createVNode"])("path", {
            fill: "#FFCC4D",
            d: "M27 6H3v26c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V6z"
        }, null, -1)
          , J = Object(c["createVNode"])("path", {
            fill: "#F4900C",
            d: "M8.5 32c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.553 0-1-.447-1-1V15c0-.552.447-1 1-1s1 .448 1 1v16c0 .553-.447 1-1 1z"
        }, null, -1)
          , K = Object(c["createVNode"])("path", {
            fill: "#FFAC33",
            d: "M3 5v7.445c.59.344 1.268.555 2 .555 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 11.258 13.583 12 15 12c1.301 0 2.445-.631 3.176-1.593C18.54 11.338 19.44 12 20.5 12c.949 0 1.765-.535 2.188-1.314l.147-.361c.497.271 1.059.439 1.665.439.981 0 1.865-.406 2.5-1.056V5H3z"
        }, null, -1)
          , Q = Object(c["createVNode"])("path", {
            fill: "#EEE",
            d: "M24 0H4C2.343 0 1 1.343 1 3v4c0 2.209 1.791 4 4 4 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 9.258 13.583 10 15 10c1.301 0 2.445-.631 3.176-1.593C18.54 9.338 19.44 10 20.5 10c.949 0 1.765-.535 2.188-1.314.398.195.839.314 1.312.314 1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3z"
        }, null, -1)
          , ee = Object(c["createTextVNode"])("> ")
          , te = Object(c["createVNode"])("path", {
            fill: "#99AAB5",
            d: "M4 8s-4 2-4 11c0 0 6-1 7-3 0 0 2-12.25-3-8zm27.995.043s4 2 4 11c0 0-6-.999-7-2.999 0 0-2-12.251 3-8.001z"
        }, null, -1)
          , le = Object(c["createVNode"])("path", {
            fill: "#FFE8B6",
            d: "M1 1c-1.01.99 1 8 5 9s4-5 3-5C5 5 3.042-1 1 1zm34.297 0c1.011.99-1 8-5 9s-4-5-3-5c4 0 5.959-6 8-4z"
        }, null, -1)
          , ce = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M21.976 31h-7.951C8.488 31 4 26.512 4 20.976v-8.951C4 6.488 8.488 2 14.025 2h7.951C27.512 2 32 6.488 32 12.025v8.951C32 26.512 27.512 31 21.976 31z"
        }, null, -1)
          , oe = Object(c["createVNode"])("path", {
            fill: "#E6AAAA",
            d: "M35 28c0 5.522-4.478 8-10 8H11c-5.523 0-10-2.478-10-8s4.477-10 10-10h14c5.522 0 10 4.478 10 10z"
        }, null, -1)
          , re = Object(c["createVNode"])("ellipse", {
            fill: "#C1694F",
            cx: "9.5",
            cy: "26",
            rx: "1.5",
            ry: "3"
        }, null, -1)
          , ie = Object(c["createVNode"])("ellipse", {
            fill: "#C1694F",
            cx: "26.5",
            cy: "26",
            rx: "1.5",
            ry: "3"
        }, null, -1)
          , ae = Object(c["createVNode"])("path", {
            fill: "#272B2B",
            d: "M11 12s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm10 0s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z"
        }, null, -1)
          , se = Object(c["createTextVNode"])("> ")
          , ne = Object(c["createVNode"])("path", {
            fill: "#FFAC33",
            d: "M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359l-4.456 4.72z"
        }, null, -1)
          , de = Object(c["createVNode"])("path", {
            fill: "#FFD983",
            d: "M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447-.728.531-3.607-1.91-4.63-3.323-1.022-1.413-.935-2.668-.131-3.254.804-.587 2.02-.282 3.044 1.13zm19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254zM16.625 33.291c-.001-1.746.898-5.421 1.801-5.421.897 0 1.798 3.675 1.797 5.42 0 1.747-.804 2.712-1.8 2.71-.994.002-1.798-.962-1.798-2.709zm16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395.277-.858 4.037-.581 5.69-.041 1.655.54 2.321 1.605 2.013 2.556-.308.95-1.469 1.42-3.124.88zM2.083 20.594c1.655-.54 5.414-.817 5.694.044.276.857-2.928 2.854-4.581 3.392-1.654.54-2.818.07-3.123-.88-.308-.95.354-2.015 2.01-2.556z"
        }, null, -1)
          , ue = Object(c["createTextVNode"])("> ")
          , be = Object(c["createVNode"])("circle", {
            fill: "#F4900C",
            cx: "18",
            cy: "18",
            r: "17"
        }, null, -1)
          , he = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M15.272 21.598l-3.85 6.427c.278.183.561.36.854.519C13.978 29.472 15.929 30 18 30c2.078 0 4.033-.532 5.739-1.464.293-.16.576-.336.854-.519l-3.855-6.427c-.763.583-1.704.942-2.738.942-1.029 0-1.967-.356-2.728-.934zm.847-7.71l-3.854-6.425c-.293.16-.577.336-.854.52-3.124 2.062-5.22 5.543-5.385 9.518-.008.166-.026.33-.026.499s.018.333.025.5h7.493c-.018-.166-.05-.329-.05-.5 0-1.829 1.09-3.396 2.651-4.112zM22.532 18c0 .171-.032.334-.05.5h7.493c.007-.167.025-.331.025-.5s-.018-.333-.025-.5c-.165-3.974-2.26-7.454-5.382-9.516-.278-.183-.561-.359-.854-.52l-3.85 6.427c1.556.718 2.643 2.282 2.643 4.109z"
        }, null, -1)
          , pe = Object(c["createVNode"])("circle", {
            fill: "#FFF",
            cx: "18",
            cy: "18",
            r: "2"
        }, null, -1)
          , fe = Object(c["createTextVNode"])("> ")
          , ke = Object(c["createVNode"])("path", {
            fill: "#FFE8B6",
            d: "M28 2c2.684-1.342 5 4 3 13-1.106 4.977-5 9-9 12s-11-1-7-5 8-7 10-13c1.304-3.912 1-6 3-7z"
        }, null, -1)
          , ye = Object(c["createVNode"])("path", {
            fill: "#FFD983",
            d: "M31 8c0 3-1 9-4 13s-7 5-4 1 5-7 6-11 2-7 2-3z"
        }, null, -1)
          , Oe = Object(c["createVNode"])("path", {
            fill: "#FFCC4D",
            d: "M22 20c-.296.592 1.167-3.833-3-6-1.984-1.032-10 1-4 1 3 0 4 2 2 4-.291.292-.489.603-.622.912-.417.346-.873.709-1.378 1.088-2.263 1.697-5.84 4.227-10 7-3 2-4 3-4 4 0 3 9 3 14 1s10-7 10-7l4-4c-3-4-7-2-7-2z"
        }, null, -1)
          , je = Object(c["createVNode"])("path", {
            fill: "#FFE8B6",
            d: "M22 20s1.792-4.729-3-7c-4.042-1.916-8-1-11 1s-2 4-3 5 1 2 3 0 8.316-4.895 11-4c3 1 2 2.999 3 5z"
        }, null, -1)
          , ve = Object(c["createVNode"])("path", {
            fill: "#A6D388",
            d: "M26 35h-4c-2 0-3 1-4 1s-2-2 0-2 4 0 5-1 5 2 3 2z"
        }, null, -1)
          , ge = Object(c["createVNode"])("circle", {
            fill: "#3E721D",
            cx: "18",
            cy: "35",
            r: "1"
        }, null, -1)
          , xe = Object(c["createVNode"])("path", {
            fill: "#FFCC4D",
            d: "M32.208 28S28 35 26 35h-4c-2 0 0-1 1-2s5 0 5-6c0-3 4.208 1 4.208 1z"
        }, null, -1)
          , me = Object(c["createVNode"])("path", {
            fill: "#FFE8B6",
            d: "M26 19c3 0 8 3 7 9s-5 7-7 7h-2c-2 0-1-1 0-2s4 0 4-6c0-3-4-7-6-7 0 0 2-1 4-1z"
        }, null, -1)
          , Ve = Object(c["createVNode"])("path", {
            fill: "#FFD983",
            d: "M17 21c3 0 5 1 3 3-1.581 1.581-6 5-10 6s-8 1-5-1 9.764-8 12-8z"
        }, null, -1)
          , Ne = Object(c["createVNode"])("path", {
            fill: "#C1694F",
            d: "M2 31c1 0 1 0 1 .667C3 32.333 3 33 2 33s-1-1.333-1-1.333S1 31 2 31z"
        }, null, -1)
          , we = Object(c["createTextVNode"])("> ")
          , Fe = Object(c["createVNode"])("path", {
            fill: "#8767AC",
            d: "M36 1C16.118 1 1 16.118 1 36h17.042c0-9.917 8.042-17.958 17.958-17.958V1z"
        }, null, -1)
          , Ce = Object(c["createVNode"])("path", {
            fill: "#EB2027",
            d: "M0 35.999h3.042c0-18.189 14.734-32.935 32.917-32.957V0C16.095.023 0 16.131 0 35.999z"
        }, null, -1)
          , Be = Object(c["createVNode"])("path", {
            fill: "#F19020",
            d: "M3.083 36h3C6.083 19.468 19.473 6.065 36 6.043v-3C17.817 3.065 3.083 17.811 3.083 36z"
        }, null, -1)
          , ze = Object(c["createVNode"])("path", {
            fill: "#FFCB4C",
            d: "M6.083 36h3C9.083 21.125 21.13 9.065 36 9.043v-3C19.473 6.065 6.083 19.468 6.083 36z"
        }, null, -1)
          , Me = Object(c["createVNode"])("path", {
            fill: "#5C903F",
            d: "M9.083 36h3c0-13.217 10.705-23.935 23.917-23.957v-3C21.13 9.065 9.083 21.125 9.083 36z"
        }, null, -1)
          , Ee = Object(c["createVNode"])("path", {
            fill: "#226798",
            d: "M12.083 36h3c0-11.56 9.362-20.934 20.917-20.956v-3.001C22.788 12.065 12.083 22.783 12.083 36z"
        }, null, -1)
          , De = Object(c["createTextVNode"])("> ")
          , Ae = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M7 0h17v24H7z"
        }, null, -1)
          , Se = Object(c["createVNode"])("path", {
            fill: "#99AAB5",
            d: "M7 12h17v12H7z"
        }, null, -1)
          , Pe = Object(c["createVNode"])("ellipse", {
            fill: "#CCD6DD",
            cx: "7",
            cy: "12",
            rx: "7",
            ry: "12"
        }, null, -1)
          , Le = Object(c["createVNode"])("ellipse", {
            fill: "#E1E8ED",
            cx: "24",
            cy: "12",
            rx: "8",
            ry: "12"
        }, null, -1)
          , Te = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M32 12v12c0 9 4 12 4 12H18s-4-3-4-12V11l18 1z"
        }, null, -1)
          , He = Object(c["createVNode"])("path", {
            fill: "#F5F8FA",
            d: "M32 12c0-4.924-1.979-9.15-4.807-11H11.322C13.549 3.284 15 7.316 15 12v14c.429 5.683 2.683 8.3 3.383 9H35.05C33.867 33.496 32 30.151 32 24V12z"
        }, null, -1)
          , Ie = Object(c["createVNode"])("ellipse", {
            fill: "#99AAB5",
            cx: "6",
            cy: "12",
            rx: "3",
            ry: "5"
        }, null, -1)
          , Ze = Object(c["createVNode"])("path", {
            fill: "#66757F",
            d: "M3.25 10.01C3.712 8.24 4.768 7 6 7c1.657 0 3 2.239 3 5 0 .616-.076 1.2-.198 1.745-.649-2.088-2.871-3.642-5.552-3.735z"
        }, null, -1)
          , _e = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M16.5 13H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1zM16.5 25H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1z"
        }, null, -1)
          , Re = Object(c["createTextVNode"])("> ")
          , Ye = Object(c["createVNode"])("path", {
            fill: "#BE1931",
            d: "M36 11.5C36 8.462 33 4 18 4S0 8.462 0 11.5c0 .045.019.076.022.119-.012.196-.022.402-.022.631C0 14.873 2.239 16 5 16s5-1.127 5-3.75c0-.218-.021-.412-.051-.597C12.374 11.302 15.102 11 18 11s5.626.302 8.051.653c-.03.185-.051.379-.051.597 0 2.623 2.238 3.75 5 3.75s5-1.127 5-3.75c0-.225-.009-.429-.024-.621.004-.046.024-.08.024-.129z"
        }, null, -1)
          , Ge = Object(c["createVNode"])("path", {
            fill: "#DD2E44",
            d: "M34.934 23c-.482-1.031-2.31-4.19-3.968-7.007C29.408 13.346 27 11 25 11V9c0-1.104-.896-2-2-2s-2 .896-2 2v2h-6V9c0-1.104-.896-2-2-2s-2 .896-2 2v2c-2 0-4.41 2.351-5.97 5-1.657 2.815-3.483 5.97-3.964 7C.488 24.239 0 25 0 27s1.791 5 4 5h28c2.209 0 4-3 4-5s-.448-2.676-1.066-4z"
        }, null, -1)
          , We = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M20.046 14.818c0 .452-.916.818-2.046.818s-2.045-.366-2.045-.818c0-.452.915-.818 2.045-.818s2.046.366 2.046.818zm-4.91 0c0 .452-.915.818-2.045.818s-2.045-.366-2.045-.818c0-.452.916-.818 2.045-.818s2.045.366 2.045.818zm9.818 0c0 .452-.915.818-2.045.818s-2.046-.366-2.046-.818c0-.452.916-.818 2.046-.818s2.045.366 2.045.818zm-4.5 2.864c0 .679-1.099 1.228-2.454 1.228s-2.455-.549-2.455-1.228c0-.677 1.099-1.227 2.455-1.227s2.454.549 2.454 1.227zm5.728 0c0 .679-1.1 1.228-2.454 1.228-1.355 0-2.455-.549-2.455-1.228 0-.677 1.1-1.227 2.455-1.227 1.354 0 2.454.549 2.454 1.227zm-11.455 0c0 .679-1.099 1.228-2.454 1.228-1.355 0-2.455-.549-2.455-1.228 0-.677 1.099-1.227 2.455-1.227 1.355 0 2.454.549 2.454 1.227zm6.545 3.681C21.272 22.269 19.807 23 18 23c-1.807 0-3.273-.731-3.273-1.637 0-.903 1.466-1.636 3.273-1.636 1.807.001 3.272.733 3.272 1.636zm7.365 0c0 .905-1.467 1.637-3.273 1.637-1.807 0-3.273-.731-3.273-1.637 0-.903 1.466-1.636 3.273-1.636 1.806.001 3.273.733 3.273 1.636zm-14.728 0c0 .905-1.466 1.637-3.273 1.637-1.807 0-3.272-.731-3.272-1.637 0-.903 1.465-1.636 3.272-1.636 1.807.001 3.273.733 3.273 1.636z"
        }, null, -1)
          , Xe = Object(c["createTextVNode"])("> ")
          , $e = Object(c["createVNode"])("path", {
            fill: "#8899A6",
            d: "M19 20.255S30.458 9.214 31.583 8.25 30.875 6 28.626 6H6.129c-1.125 0-4.483.729-2.796 2.417C4.537 9.62 16 20.255 16 20.255v10.123s-4.584 2.34-5.498 2.883c-.984.562-.33 1.462.063 1.617.656.258 2.253 1.102 6.78 1.102 4.641 0 6.202-.914 6.765-1.102.217-.072 1.347-.932.011-1.723C21.743 31.747 19 30.378 19 30.378V20.255z"
        }, null, -1)
          , qe = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M32 7.442c0-1.622-6.547-2.935-14.623-2.935S2.754 5.82 2.754 7.442c0 .756 1.436 1.443 3.775 1.963 2.746 2.341 7.298 6.098 9.627 8.013.9.741 2.135.623 2.801.123.503-.377 6.606-5.643 9.57-8.203C30.69 8.827 32 8.166 32 7.442z"
        }, null, -1)
          , Ue = Object(c["createVNode"])("path", {
            fill: "#662113",
            d: "M16.868 16.532c-.237-.125-.05-.8.248-1.328L24.564.686c.3-.529.97-.715 1.498-.416.529.299.714.969.416 1.498l-8.667 13.885c-.15.264-.674 1.02-.943.879z"
        }, null, -1)
          , Je = Object(c["createVNode"])("path", {
            fill: "#5C913B",
            d: "M21.745 7.855c1.133.639 1.996 2.636 1.2 4.046-.797 1.411-2.954 1.699-4.087 1.059-1.132-.64-2.065-2.515-1.199-4.046.865-1.531 2.953-1.699 4.086-1.059z"
        }, null, -1)
          , Ke = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M16.797 10.761c-3.775 0-7.361-.49-10.737-1.471l-.129-.037c-.531-.153-.836-.708-.683-1.238.152-.531.705-.837 1.238-.684l.132.039c6.533 1.898 13.942 1.855 22.018-.132.543-.13 1.079.196 1.21.732.132.536-.195 1.078-.731 1.21-4.289 1.054-8.404 1.581-12.318 1.581z"
        }, null, -1)
          , Qe = Object(c["createTextVNode"])("> ")
          , et = Object(c["createVNode"])("path", {
            fill: "#FFAC33",
            d: "M35.337 23.549C34.291 29.819 27.615 34 18.092 34S1.894 29.819.849 23.549c-.247-1.479.156-8.12 1.054-9.406 2.559-3.664 3.474 10.365 16.189 10.365 13.847 0 13.64-14.028 16.199-10.365.898 1.286 1.292 7.927 1.046 9.406z"
        }, null, -1)
          , tt = Object(c["createVNode"])("path", {
            fill: "#8A4B38",
            d: "M18.092 5.995c-9.331 0-16.895 4.584-16.895 10.239 0 5.655 7.564 10.24 16.895 10.24 9.33 0 16.895-4.585 16.895-10.24S27.422 5.995 18.092 5.995zm0 13.374c-3.174 0-5.748-.702-5.748-1.568 0-.866 2.574-1.567 5.748-1.567 3.173 0 5.747.701 5.747 1.567.001.866-2.573 1.568-5.747 1.568z"
        }, null, -1)
          , lt = Object(c["createVNode"])("path", {
            fill: "#8A4B38",
            d: "M1.72 14.623c-.653 1.045-.92 5.494.479 7.577 2.134 3.18 3.179 1.567 4.747 2.047 2.335.715 2.508 2.56 4.354 3.483 2.09 1.045 3.306.741 6.27 0 4.181-1.045 6.837 1.088 9.405 0 2.107-.893 3.312-4.137 4.486-4.528 3.728-1.242 4.515-7.124 1.741-9.537-.87 1.829-5.138 8.404-7.881 8.71-2.744.305-10.974 1-14.457-.784-3.484-1.785-7.01-4.006-7.446-4.616-.436-.611-1.698-2.352-1.698-2.352z"
        }, null, -1)
          , ct = Object(c["createVNode"])("path", {
            fill: "#F4900C",
            d: "M18.092 13.882c-3.752 0-6.793 1.228-6.793 2.743 0 .589.463 1.133 1.245 1.58-.126-.129-.2-.264-.2-.404 0-.866 2.574-1.567 5.748-1.567 3.173 0 5.747.701 5.747 1.567 0 .14-.073.274-.2.404.782-.447 1.246-.991 1.246-1.58.001-1.515-3.041-2.743-6.793-2.743z"
        }, null, -1)
          , ot = Object(c["createVNode"])("path", {
            fill: "#F4ABBA",
            d: "M4.42 18.15c-.375 0-.737-.203-.925-.557-.27-.51-.075-1.143.436-1.412l2.308-1.22c.509-.272 1.142-.075 1.412.436.27.51.075 1.143-.436 1.412l-2.308 1.22c-.156.082-.323.121-.487.121zm11.887 7.794c-.41 0-.799-.242-.966-.646l-.74-1.786c-.221-.533.032-1.144.565-1.365.534-.22 1.144.032 1.365.566l.74 1.786c.221.533-.032 1.145-.566 1.365-.129.055-.265.08-.398.08z"
        }, null, -1)
          , rt = Object(c["createVNode"])("path", {
            fill: "#55ACEE",
            d: "M28.151 21.764c-.181 0-.364-.047-.53-.146-.497-.293-.662-.935-.368-1.431l1.132-1.916c.293-.496.938-.661 1.431-.368.497.294.662.935.368 1.432l-1.132 1.915c-.195.33-.543.514-.901.514z"
        }, null, -1)
          , it = Object(c["createVNode"])("path", {
            fill: "#F4ABBA",
            d: "M29.893 14c-.56 0-1.023-.481-1.043-1.046-.021-.576.431-1.079 1.007-1.1l1.218-.052c.587-.007 1.062.426 1.081 1.003.021.577-.431 1.096-1.007 1.116L29.931 14h-.038zM19.792 9.876c-.444 0-.855-.285-.997-.73-.174-.55.131-1.137.681-1.312l.826-.261c.556-.174 1.138.131 1.312.682.175.55-.131 1.137-.681 1.312l-.826.261c-.105.033-.211.048-.315.048z"
        }, null, -1)
          , at = Object(c["createVNode"])("path", {
            fill: "#88C9F9",
            d: "M13.998 11.574c-.157 0-.316-.036-.466-.11l-.784-.392c-.516-.258-.726-.886-.468-1.402.258-.516.886-.726 1.402-.468l.784.392c.516.258.726.886.468 1.402-.184.366-.553.578-.936.578zm9.102 13.28c-.156 0-.315-.035-.465-.109l-.784-.391c-.517-.258-.727-.885-.47-1.401.257-.517.884-.727 1.401-.47l.784.391c.517.258.727.885.47 1.401-.182.367-.553.579-.936.579z"
        }, null, -1)
          , st = Object(c["createVNode"])("path", {
            fill: "#55ACEE",
            d: "M9.426 22.548c-.138 0-.277-.026-.412-.085-.53-.228-.776-.842-.548-1.372l.392-.914c.228-.529.843-.779 1.373-.548.53.227.776.842.548 1.372l-.392.914c-.17.395-.555.633-.961.633zm15.592-9.885c-.403 0-.787-.234-.958-.627-.232-.529.01-1.145.538-1.376l.696-.305c.53-.232 1.146.01 1.376.538.231.529-.01 1.145-.538 1.377l-.696.305c-.137.06-.279.088-.418.088zM8.035 12.62c-.078 0-.157-.009-.235-.027l-.566-.13c-.562-.13-.914-.691-.784-1.253.129-.563.691-.913 1.253-.784l.566.13c.562.13.914.691.784 1.253-.112.483-.543.811-1.018.811z"
        }, null, -1)
          , nt = Object(c["createTextVNode"])("> ")
          , dt = Object(c["createVNode"])("path", {
            fill: "#8899A6",
            d: "M19 20.255S29.042 18.042 29.042 4.25c0-1.481-1.167-2.25-3.416-2.25H9.129C8.004 2 5.8 1.738 5.8 4.125c0 13.708 10.2 16.13 10.2 16.13v10.123s-4.584 2.34-5.498 2.883c-.984.562-.33 1.462.063 1.617.656.258 2.253 1.102 6.78 1.102 4.641 0 6.202-.914 6.765-1.102.217-.072 1.347-.932.011-1.723C21.743 31.747 19 30.378 19 30.378V20.255z"
        }, null, -1)
          , ut = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M29 3.442c0 1.621-3.547 2.935-11.623 2.935-8.076 0-11.623-1.314-11.623-2.935C5.754 1.82 9.301.507 17.377.507 25.453.507 29 1.821 29 3.442z"
        }, null, -1)
          , bt = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M7.458 3.583c2.042 9.5 5.458 12.792 8.699 13.835 1.11.358 2.026.428 2.801.123 3.5-1.375 7.542-5.667 8.167-13.583.161-2.037-19.667-.375-19.667-.375z"
        }, null, -1)
          , ht = Object(c["createVNode"])("path", {
            fill: "#A0041E",
            d: "M9 9.5C9 13 12.333 18 17.333 18S26 12.542 26 9.542c-6 0-17-.042-17-.042z"
        }, null, -1)
          , pt = Object(c["createVNode"])("ellipse", {
            fill: "#DD2E44",
            cx: "17.5",
            cy: "9.5",
            rx: "8.5",
            ry: "1.5"
        }, null, -1)
          , ft = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M17.168 6.659c-5.03 0-8.783-1.11-9.801-1.587-.5-.234-.715-.83-.481-1.33.234-.501.831-.716 1.33-.481 1.239.582 9.455 2.894 18.596-.127.523-.174 1.088.112 1.262.636.174.524-.111 1.09-.636 1.264-3.676 1.214-7.209 1.625-10.27 1.625z"
        }, null, -1)
          , kt = Object(c["createTextVNode"])("> ")
          , yt = Object(c["createVNode"])("path", {
            fill: "#269",
            d: "M32 7H4c-2.209 0-4 1.791-4 4v15c0 2.209 1.791 4 4 4h11.416c.52.596 1.477 1 2.584 1s2.065-.404 2.584-1H32c2.209 0 4-1.791 4-4V11c0-2.209-1.791-4-4-4z"
        }, null, -1)
          , Ot = Object(c["createVNode"])("path", {
            fill: "#292F33",
            d: "M20 27c0 1.104-.896 2-2 2s-2-.896-2-2V9c0-1.104.896-2 2-2s2 .896 2 2v18z"
        }, null, -1)
          , jt = Object(c["createVNode"])("path", {
            fill: "#99AAB5",
            d: "M18 26c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z"
        }, null, -1)
          , vt = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M18 26c-.999-1.998-3.657-2-4-2-2 0-5 2-8 2-1 0-2-.896-2-2V8c0-1.104 1-2 2-2 3.255 0 6-2 8-2 3 0 4 1.896 4 3v19z"
        }, null, -1)
          , gt = Object(c["createVNode"])("path", {
            fill: "#99AAB5",
            d: "M34 26c0 1.104-.896 2-2 2H20c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z"
        }, null, -1)
          , xt = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M18 26c.999-1.998 3.657-2 4-2 2 0 5 2 8 2 1 0 2-.896 2-2V8c0-1.104-1-2-2-2-3.256 0-6-2-8-2-3 0-4 1.896-4 3v19z"
        }, null, -1)
          , mt = Object(c["createTextVNode"])("> ")
          , Vt = Object(c["createVNode"])("ellipse", {
            fill: "#292F33",
            cx: "18",
            cy: "26",
            rx: "18",
            ry: "10"
        }, null, -1)
          , Nt = Object(c["createVNode"])("ellipse", {
            fill: "#66757F",
            cx: "18",
            cy: "24",
            rx: "18",
            ry: "10"
        }, null, -1)
          , wt = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"
        }, null, -1)
          , Ft = Object(c["createVNode"])("path", {
            fill: "#77B255",
            d: "M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"
        }, null, -1)
          , Ct = Object(c["createVNode"])("ellipse", {
            fill: "#A6D388",
            cx: "18",
            cy: "13",
            rx: "15",
            ry: "7"
        }, null, -1)
          , Bt = Object(c["createVNode"])("path", {
            d: "M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z",
            fill: "#5C913B"
        }, null, -1)
          , zt = Object(c["createTextVNode"])("> ")
          , Mt = Object(c["createVNode"])("path", {
            fill: "#8899A6",
            d: "M26.864 8H18v28c6 0 10-1 11.393-7.015.774-3.342 1.663-12.335 1.663-17.841C31.056 9.279 29.623 8 26.864 8zM8.892 8H18v28c-6 0-10-1-11.515-7.015-.838-3.327-1.724-12.335-1.724-17.841C4.761 9.279 6.132 8 8.892 8z"
        }, null, -1)
          , Et = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M31.052 10.5c0 2.071-3.13 3.75-13.057 3.75-9.926 0-13.057-1.679-13.057-3.75 0-2.072 3.131-3.75 13.057-3.75 9.927 0 13.057 1.678 13.057 3.75z"
        }, null, -1)
          , Dt = Object(c["createVNode"])("path", {
            fill: "#CCD6DD",
            d: "M18.025 12.997L6.516 12c0 7 1.104 14.382 1.681 16.572C8.859 31.081 11 30.981 18 30.998V31v-.002c7-.018 9.166.083 9.827-2.426C28.405 26.382 29.52 19 29.52 12l-11.495.997z"
        }, null, -1)
          , At = Object(c["createVNode"])("path", {
            fill: "#55ACEE",
            d: "M18 21v13c7 0 9-1 9.857-5.428.241-1.243.807-4.075 1.174-7.572H18zM7.019 21c.366 3.497.915 6.327 1.149 7.572C9 33 11 34 18 34V21H7.019z"
        }, null, -1)
          , St = Object(c["createVNode"])("path", {
            fill: "#3B88C3",
            d: "M18 30.16c-4.556 0-8.249.895-8.249 2 0 .009.005.018.006.028C11.154 33.598 13.578 34 18 34c4.413 0 6.836-.4 8.241-1.803.001-.012.008-.024.008-.037 0-1.105-3.693-2-8.249-2z"
        }, null, -1)
          , Pt = Object(c["createVNode"])("ellipse", {
            fill: "#88C9F9",
            cx: "17.995",
            cy: "21",
            rx: "11.016",
            ry: "2"
        }, null, -1)
          , Lt = Object(c["createVNode"])("path", {
            fill: "#E1E8ED",
            d: "M33.958.936l-6.824 1.697c-.751.187-1.565.577-2.44 1.239-1.643 1.243-1.978 2.93-2.246 3.861L18.34 22h3.122L25.33 8.564c.264-.916.526-1.702 1.129-2.249.534-.484 1.417-.769 2.244-.983l5.977-1.483c.801-.199 1.293-1.016 1.095-1.817-.199-.802-1.016-1.295-1.817-1.096z"
        }, null, -1)
          , Tt = Object(c["createVNode"])("path", {
            fill: "#88C9F9",
            d: "M18.34 22l-2.671 9.277c-.228.793.234 1.628 1.026 1.857.793.228 1.628-.234 1.856-1.026L21.462 22H18.34z"
        }, null, -1)
          , Ht = Object(c["createVNode"])("path", {
            fill: "#744EAA",
            d: "M18.641 22.677l-.588.322-.273.947 2.066 3.669.776-2.696-1.261-2.241z"
        }, null, -1)
          , It = Object(c["createVNode"])("path", {
            fill: "#DD2E44",
            d: "M27.906 2.441l-1.128 3.647c.531-.347 1.242-.58 1.927-.757l.434-.108 1.035-3.346-2.268.564z"
        }, null, -1)
          , Zt = Object(c["createVNode"])("path", {
            fill: "#744EAA",
            d: "M17.045 26.499l-.777 2.697 1.962 3.485c.144-.162.258-.353.322-.574l.558-1.939-2.065-3.669z"
        }, null, -1)
          , _t = Object(c["createVNode"])("path", {
            fill: "#DD2E44",
            d: "M20.048 16.068l-.777 2.698 1.381 2.452.472.105.626-.323.364-1.262zM34.495.907c-.175-.021-.356-.016-.537.029l-1.696.422-1.036 3.347 2.267-.563L34.495.907zM20.791 13.488l2.066 3.668.776-2.696-2.065-3.669zm3.862-9.579c-.798.617-1.285 1.338-1.601 2.022l1.32 5.968.96-3.335c.066-.23.133-.452.204-.664l-.883-3.991z"
        }, null, -1)
          , Rt = Object(c["createVNode"])("path", {
            fill: "#55ACEE",
            d: "M18.663 20.881L18.053 23c1.094-.001 2.15-.031 3.147-.086l.585-2.032c-.938.483-2.894.181-3.122-.001z"
        }, null, -1)
          , Yt = Object(c["createVNode"])("path", {
            fill: "#FFF",
            d: "M29.615 11.309c-.242-.649-.954-.975-1.584-.724-3.606 1.416-7.044 1.909-10.036 1.937v2.492c3.333-.034 7.089-.577 10.913-2.08.633-.248.95-.976.707-1.625zm-23.24 0c.242-.649.954-.975 1.584-.724 3.606 1.416 7.044 1.909 10.036 1.937v2.492c-3.333-.034-7.089-.577-10.913-2.08-.632-.248-.95-.976-.707-1.625z"
        }, null, -1);
        function Gt(e, t, l, Gt, Wt, Xt) {
            return l.isLoading ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", o, [(Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                class: ["animate-spin h-8 w-8 text-gray-600", "text-" + l.color + "-600"],
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
            }, [r, i], 2))])) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("div", a, ["flex" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 0,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [s, n, d], 2)) : "money" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 1,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [u, b, h, p], 2)) : "coffee" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 2,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [f, k, y, O, j, v, g], 2)) : "death" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 3,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [x, m, V, N, w], 2)) : "happy" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 4,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [F, C, B, z, M, E], 2)) : "headboom" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 5,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [D, A, S, P, L, T, H, I, Z, _], 2)) : "sad" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 6,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [R, Y, G, W, X], 2)) : "beer" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 7,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [$, q, U, J, K, Q], 2)) : "cow" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 8,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [ee, te, le, ce, oe, re, ie, ae], 2)) : "star" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 9,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [se, ne, de], 2)) : "radioactive" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 10,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [ue, be, he, pe], 2)) : "banana" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 11,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [fe, ke, ye, Oe, je, ve, ge, xe, me, Ve, Ne], 2)) : "rainbow" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 12,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [we, Fe, Ce, Be, ze, Me, Ee], 2)) : "toiletpaper" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 13,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [De, Ae, Se, Pe, Le, Te, He, Ie, Ze, _e], 2)) : "phone" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 14,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [Re, Ye, Ge, We], 2)) : "cocktail" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 15,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [Xe, $e, qe, Ue, Je, Ke], 2)) : "donut" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 16,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [Qe, et, tt, lt, ct, ot, rt, it, at, st], 2)) : "wine" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 17,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [nt, dt, ut, bt, ht, pt, ft], 2)) : "book" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 18,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [kt, yt, Ot, jt, vt, gt, xt], 2)) : "tea" === l.type ? (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 19,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [mt, Vt, Nt, wt, Ft, Ct, Bt], 2)) : (Object(c["openBlock"])(),
            Object(c["createBlock"])("svg", {
                key: 20,
                class: {
                    "cursor-pointer block lg:block w-8 h-8": !l.isPreview,
                    "cursor-pointer block lg:block": l.isPreview
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36"
            }, [zt, Mt, Et, Dt, At, St, Pt, Lt, Tt, Ht, It, Zt, _t, Rt, Yt], 2))]))
        }
        l("c740");
        var Wt = l("abdd")
          , Xt = {
            name: "BlockIcon",
            props: {
                type: String,
                isPreview: Boolean,
                color: String,
                isLoading: Boolean
            },
            data: function() {
                return {
                    colors: Wt["a"]
                }
            },
            computed: {
                ballColor: function() {
                    var e = this
                      , t = this.colors.findIndex((function(t) {
                        return t.value === e.color
                    }
                    ));
                    return this.colors[t].colors
                }
            }
        };
        Xt.render = Gt;
        t["a"] = Xt
    },
    abdd: function(e, t, l) {
        "use strict";
        l.d(t, "a", (function() {
            return c
        }
        ));
        var c = [{
            text: "Blue Gray",
            value: "bluegray",
            colors: {
                50: "F8FAFC",
                100: "F1F5F9",
                200: "E2E8F0",
                300: "CBD5E1",
                400: "94A3B8",
                500: "64748B",
                600: "475569",
                700: "334155",
                800: "1E293B",
                900: "0F172A"
            }
        }, {
            text: "Gray",
            value: "gray",
            colors: {
                50: "FAFAFA",
                100: "F4F4F5",
                200: "E4E4E7",
                300: "D4D4D8",
                400: "A1A1AA",
                500: "71717A",
                600: "52525B",
                700: "3F3F46",
                800: "27272A",
                900: "18181B"
            }
        }, {
            text: "True Gray",
            value: "truegray",
            colors: {
                50: "FAFAFA",
                100: "F5F5F5",
                200: "E5E5E5",
                300: "D4D4D4",
                400: "A3A3A3",
                500: "737373",
                600: "525252",
                700: "404040",
                800: "262626",
                900: "171717"
            }
        }, {
            text: "Warm Gray",
            value: "warmgray",
            colors: {
                50: "FAFAF9",
                100: "F5F5F4",
                200: "E7E5E4",
                300: "D6D3D1",
                400: "A8A29E",
                500: "78716C",
                600: "57534E",
                700: "44403C",
                800: "292524",
                900: "1C1917"
            }
        }, {
            text: "Red",
            value: "red",
            colors: {
                50: "FEF2F2",
                100: "FEE2E2",
                200: "FECACA",
                300: "FCA5A5",
                400: "F87171",
                500: "EF4444",
                600: "DC2626",
                700: "B91C1C",
                800: "991B1B",
                900: "7F1D1D"
            }
        }, {
            text: "Orange",
            value: "orange",
            colors: {
                50: "FFF7ED",
                100: "FFEDD5",
                200: "FED7AA",
                300: "FDBA74",
                400: "FB923C",
                500: "F97316",
                600: "EA580C",
                700: "C2410C",
                800: "9A3412",
                900: "7C2D12"
            }
        }, {
            text: "Amber",
            value: "amber",
            colors: {
                50: "FFFBEB",
                100: "FEF3C7",
                200: "FDE68A",
                300: "FCD34D",
                400: "FBBF24",
                500: "F59E0B",
                600: "D97706",
                700: "B45309",
                800: "92400E",
                900: "78350F"
            }
        }, {
            text: "Yellow",
            value: "yellow",
            colors: {
                50: "FEFCE8",
                100: "FEF9C3",
                200: "FEF08A",
                300: "FDE047",
                400: "FACC15",
                500: "EAB308",
                600: "CA8A04",
                700: "A16207",
                800: "854D0E",
                900: "713F12"
            }
        }, {
            text: "Lime",
            value: "lime",
            colors: {
                50: "F7FEE7",
                100: "ECFCCB",
                200: "D9F99D",
                300: "BEF264",
                400: "A3E635",
                500: "84CC16",
                600: "65A30D",
                700: "4D7C0F",
                800: "3F6212",
                900: "365314"
            }
        }, {
            text: "Green",
            value: "green",
            colors: {
                50: "ECFDF5",
                100: "D1FAE5",
                200: "A7F3D0",
                300: "6EE7B7",
                400: "34D399",
                500: "10B981",
                600: "059669",
                700: "047857",
                800: "065F46",
                900: "064E3B"
            }
        }, {
            text: "Emerald",
            value: "emerald",
            colors: {
                50: "ECFDF5",
                100: "D1FAE5",
                200: "A7F3D0",
                300: "6EE7B7",
                400: "34D399",
                500: "10B981",
                600: "059669",
                700: "047857",
                800: "065F46",
                900: "064E3B"
            }
        }, {
            text: "Teal",
            value: "teal",
            colors: {
                50: "F0FDFA",
                100: "CCFBF1",
                200: "99F6E4",
                300: "5EEAD4",
                400: "2DD4BF",
                500: "14B8A6",
                600: "0D9488",
                700: "0F766E",
                800: "115E59",
                900: "134E4A"
            }
        }, {
            text: "Cyan",
            value: "cyan",
            colors: {
                50: "ECFEFF",
                100: "CFFAFE",
                200: "A5F3FC",
                300: "67E8F9",
                400: "22D3EE",
                500: "06B6D4",
                600: "0891B2",
                700: "0E7490",
                800: "155E75",
                900: "164E63"
            }
        }, {
            text: "Light Blue",
            value: "lightblue",
            colors: {
                50: "F0F9FF",
                100: "E0F2FE",
                200: "BAE6FD",
                300: "7DD3FC",
                400: "38BDF8",
                500: "0EA5E9",
                600: "0284C7",
                700: "0369A1",
                800: "075985",
                900: "0C4A6E"
            }
        }, {
            text: "Blue",
            value: "blue",
            colors: {
                50: "EFF6FF",
                100: "DBEAFE",
                200: "BFDBFE",
                300: "93C5FD",
                400: "60A5FA",
                500: "3B82F6",
                600: "2563EB",
                700: "1D4ED8",
                800: "1E40AF",
                900: "1E3A8A"
            }
        }, {
            text: "Indigo",
            value: "indigo",
            colors: {
                50: "EEF2FF",
                100: "E0E7FF",
                200: "C7D2FE",
                300: "A5B4FC",
                400: "818CF8",
                500: "6366F1",
                600: "4F46E5",
                700: "4338CA",
                800: "3730A3",
                900: "312E81"
            }
        }, {
            text: "Violet",
            value: "violet",
            colors: {
                50: "F5F3FF",
                100: "EDE9FE",
                200: "DDD6FE",
                300: "C4B5FD",
                400: "A78BFA",
                500: "8B5CF6",
                600: "7C3AED",
                700: "6D28D9",
                800: "5B21B6",
                900: "4C1D95"
            }
        }, {
            text: "Purple",
            value: "purple",
            colors: {
                50: "F5F3FF",
                100: "EDE9FE",
                200: "DDD6FE",
                300: "C4B5FD",
                400: "A78BFA",
                500: "8B5CF6",
                600: "7C3AED",
                700: "6D28D9",
                800: "5B21B6",
                900: "4C1D95"
            }
        }, {
            text: "Fuchsia",
            value: "fuchsia",
            colors: {
                50: "FDF4FF",
                100: "FAE8FF",
                200: "F5D0FE",
                300: "F0ABFC",
                400: "E879F9",
                500: "D946EF",
                600: "C026D3",
                700: "A21CAF",
                800: "86198F",
                900: "701A75"
            }
        }, {
            text: "Pink",
            value: "pink",
            colors: {
                50: "FDF2F8",
                100: "FCE7F3",
                200: "FBCFE8",
                300: "F9A8D4",
                400: "F472B6",
                500: "EC4899",
                600: "DB2777",
                700: "BE185D",
                800: "9D174D",
                900: "831843"
            }
        }, {
            text: "Rose",
            value: "rose",
            colors: {
                50: "FFF1F2",
                100: "FFE4E6",
                200: "FECDD3",
                300: "FDA4AF",
                400: "FB7185",
                500: "F43F5E",
                600: "E11D48",
                700: "BE123C",
                800: "9F1239",
                900: "881337"
            }
        }]
    },
    f5f0: function(e, t, l) {
        "use strict";
        l("35e2")
    }
}]);
//# sourceMappingURL=chunk-common.754a3374.js.map
