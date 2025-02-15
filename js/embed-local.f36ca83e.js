(function(e) {
    function t(t) {
        for (var o, r, s = t[0], a = t[1], l = t[2], u = 0, m = []; u < s.length; u++)
            r = s[u],
            Object.prototype.hasOwnProperty.call(i, r) && i[r] && m.push(i[r][0]),
            i[r] = 0;
        for (o in a)
            Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
        d && d(t);
        while (m.length)
            m.shift()();
        return c.push.apply(c, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], o = !0, s = 1; s < n.length; s++) {
                var a = n[s];
                0 !== i[a] && (o = !1)
            }
            o && (c.splice(t--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var o = {}
      , i = {
        "embed-local": 0
    }
      , c = [];
    function r(t) {
        if (o[t])
            return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = e,
    r.c = o,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                r.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , a = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var l = 0; l < s.length; l++)
        t(s[l]);
    var d = a;
    c.push([3, "chunk-vendors", "chunk-common"]),
    n()
}
)({
    "2ce7": function(e, t, n) {},
    3: function(e, t, n) {
        e.exports = n("7ded")
    },
    5123: function(e, t, n) {
        "use strict";
        n("2ce7")
    },
    6828: function(e, t, n) {},
    "7ded": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("ac1f"),
        n("3ca3"),
        n("841c"),
        n("ddb0"),
        n("2b3d"),
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var o = n("7a23")
          , i = {
            key: 0,
            style: {
                height: "30px"
            }
        }
          , c = Object(o["createVNode"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "text-yellow-500 h-3 w-3 inline -mt-0.5",
            viewBox: "0 0 20 20",
            fill: "currentColor"
        }, [Object(o["createVNode"])("path", {
            "fill-rule": "evenodd",
            d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
            "clip-rule": "evenodd"
        })], -1)
          , r = Object(o["createTextVNode"])(" by Kairo ")
          , s = {
            key: 1,
            style: {
                "margin-top": "30px"
            }
        };
        function a(e, t, n, a, l, d) {
            return Object(o["openBlock"])(),
            Object(o["createBlock"])(o["Fragment"], null, [e.local ? (Object(o["openBlock"])(),
            Object(o["createBlock"])("div", i, [Object(o["createVNode"])("a", {
                href: "https://getkairo.com?utm_source=kairo-embed&utm_medium=embed&utm_campaign=embed-" + l.embedId,
                class: ["text-xs leading-9 hover:underline", {
                    "text-gray-400": l.darkMode,
                    "text-gray-500": !l.darkMode
                }],
                target: "_blank"
            }, [c, r], 10, ["href"])])) : (Object(o["openBlock"])(),
            Object(o["createBlock"])("div", s)), d.block ? (Object(o["openBlock"])(),
            Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(d.block.type || "Block"), Object(o["mergeProps"])({
                key: 2
            }, d.block, {
                embed: !0,
                isLoading: d.isLoading,
                hasError: l.hasError,
                blockTick: l.blockTick,
                onElementStart: d.elementStart,
                onElementEnd: d.elementEnd,
                onElementIncrease: d.elementIncrease,
                onElementDecrease: d.elementDecrease,
                onCountdownStart: d.countdownStart,
                onCountdownEnd: d.countdownEnd,
                onBlockNotificationUpdate: d.blockNotificationUpdate,
                onBlockReset: d.blockReset
            }), null, 16, ["isLoading", "hasError", "blockTick", "onElementStart", "onElementEnd", "onElementIncrease", "onElementDecrease", "onCountdownStart", "onCountdownEnd", "onBlockNotificationUpdate", "onBlockReset"])) : Object(o["createCommentVNode"])("", !0)], 64)
        }
        n("4de4"),
        n("7db0"),
        n("c740"),
        n("4160"),
        n("a434"),
        n("1276"),
        n("159b");
        var l = n("3c49")
          , d = n("35bb")
          , u = n("40a3")
          , m = n("2efe")
          , b = n("ec26")
          , f = n("6689")
          , h = n("5a9e")
          , k = n("69ac")
          , p = {
            name: "Embed",
            components: {
                Block: m["a"],
                BlockCounter: l["a"],
                BlockProgress: d["a"],
                BlockCountdown: u["a"]
            },
            data: function() {
                return {
                    embedId: null,
                    darkMode: !1,
                    isLoaded: !1,
                    blocks: this.$store.state.embed.blocks,
                    jobQueue: [],
                    jobQueueInterval: "",
                    jobQueueRunning: !1,
                    audio: null,
                    sfx: k,
                    hasError: !1,
                    controller: new AbortController,
                    blockTick: (new Date).getTime() + 1e3,
                    worker: null
                }
            },
            computed: {
                block: function() {
                    var e = this
                      , t = this.blocks.find((function(t) {
                        return t.embedId === e.embedId
                    }
                    ));
                    return t || null
                },
                isLoading: function() {
                    return !!this.jobQueue.length
                }
            },
            methods: {
                blockIncrement: function(e) {
                    this.$store.commit("blockIncrement", e)
                },
                elementStart: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "track"
                      , n = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ))
                      , o = Object(b["a"])()
                      , i = {
                        id: o,
                        type: t,
                        start: (new Date).getTime(),
                        end: null,
                        size: null
                    }
                      , c = JSON.parse(JSON.stringify(this.blocks[n].elements));
                    this.$store.commit("elementStart", {
                        index: n,
                        element: i
                    });
                    var r = {
                        elements: c,
                        activeSince: i.start,
                        totalTime: this.blocks[n].totalTime,
                        id: this.blocks[n].id,
                        refId: this.blocks[n].refId
                    };
                    r.elements.push(i),
                    this.local || this.updateBlock(r)
                },
                elementEnd: function(e) {
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ))
                      , n = (new Date).getTime()
                      , o = this.blocks[t].elements.length - 1;
                    if (this.$store.commit("elementEnd", {
                        index: t,
                        last: o,
                        end: n
                    }),
                    !this.local) {
                        var i = JSON.parse(JSON.stringify(this.blocks[t].elements))
                          , c = {
                            elements: i,
                            activeSince: 0,
                            totalTime: 0,
                            id: this.blocks[t].id,
                            refId: this.blocks[t].refId
                        };
                        c.elements[o].end = n;
                        var r = this.calculateElementsTotal(c.elements);
                        c.totalTime = r,
                        this.updateBlock(c)
                    }
                },
                elementIncrease: function(e) {
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ))
                      , n = Object(b["a"])()
                      , o = {
                        id: n,
                        start: (new Date).getTime(),
                        value: this.blocks[t].increaseValue
                    };
                    this.$store.commit("elementUpdate", {
                        index: t,
                        element: o
                    }),
                    this.local || this.jobQueueAdd({
                        event: "blockUpdate_" + e,
                        expiration: 2e3
                    })
                },
                elementDecrease: function(e) {
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ));
                    this.$store.commit("elementRemove", {
                        index: t
                    }),
                    this.local || this.jobQueueAdd({
                        event: "blockUpdate_" + e,
                        expiration: 2e3
                    })
                },
                countdownIncrement: function(e) {
                    this.$store.commit("countdownIncrement", e)
                },
                countdownStart: function(e) {
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ));
                    this.$store.commit("countdownStart", {
                        index: t,
                        start: (new Date).getTime()
                    }),
                    this.local || this.jobQueueAdd({
                        event: "blockUpdate_" + e,
                        expiration: 2e3
                    })
                },
                countdownEnd: function(e) {
                    this.soundStop();
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ));
                    this.$store.commit("countdownEnd", {
                        index: t
                    }),
                    this.local || this.jobQueueAdd({
                        event: "blockUpdate_" + e,
                        expiration: 2e3
                    })
                },
                calculateElementsTotal: function(e) {
                    var t = 0;
                    return e.forEach((function(e) {
                        t += e.end - e.start
                    }
                    )),
                    t
                },
                blockNotificationUpdate: function(e, t) {
                    this.$store.commit("blockNotificationUpdate", {
                        id: e,
                        status: t
                    })
                },
                fetchBlock: function() {
                    var e = this;
                    null !== this.block && this.$store.commit("blockAdd", this.block),
                    this.isLoaded = !1;
                    var t = this.embedId;
                    fetch("/.netlify/functions/embed/".concat(t), {
                        method: "POST"
                    }).then((function(e) {
                        return e.json()
                    }
                    )).then((function(t) {
                        t.id ? (e.block = t,
                        e.$store.commit("blockAdd", t),
                        t.embedOptions && t.embedOptions.darkMode && (e.darkMode = t.embedOptions.darkMode,
                        document.body.classList.add("embed-dark-mode"))) : (e.$store.commit("blockDelete", e.embedId),
                        e.isLoaded = !0)
                    }
                    )).catch((function() {
                        e.$store.commit("blockDelete", e.embedId),
                        e.isLoaded = !0,
                        e.status = !1
                    }
                    ))
                },
                blockReset: function(e) {
                    var t = this.blocks.findIndex((function(t) {
                        return t.id === e
                    }
                    ));
                    "Block" === this.block.type ? (this.$store.commit("elementsReset", {
                        index: t
                    }),
                    this.block.blockTick = (new Date).getTime() + 1e3) : "BlockCounter" === this.block.type && this.$store.commit("elementsReset", {
                        index: t
                    })
                },
                updateBlock: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , n = this.block.embedId;
                    if (!t) {
                        var o = JSON.parse(JSON.stringify(this.block));
                        t = {
                            refId: o.refId,
                            id: o.id,
                            elements: o.elements
                        }
                    }
                    fetch("/.netlify/functions/embed-update/".concat(n), {
                        method: "POST",
                        body: JSON.stringify(t)
                    }).then((function(e) {
                        if (e.ok)
                            return e.json();
                        throw new Error("Something went wrong")
                    }
                    )).then((function() {}
                    )).catch((function() {
                        e.hasError = !0
                    }
                    ))
                },
                jobQueueAdd: function(e) {
                    var t = this.jobQueue.findIndex((function(t) {
                        return t.event === e.event
                    }
                    ));
                    if (t >= 0) {
                        var n = (new Date).getTime()
                          , o = n + e.expiration;
                        this.jobQueue[t].expiration = o
                    } else {
                        var i = (new Date).getTime()
                          , c = i + e.expiration;
                        this.jobQueue.push({
                            id: Object(b["a"])(),
                            event: e.event,
                            expiration: c
                        })
                    }
                },
                jobQueueProcess: function() {
                    var e = this;
                    if (!this.jobQueueRunning) {
                        this.jobQueueRunning = !0;
                        var t = JSON.parse(JSON.stringify(this.jobQueue));
                        t.forEach((function(t) {
                            var n = (new Date).getTime();
                            if (t.expiration < n) {
                                var o = t.event.split("_");
                                if ("blockUpdate" === o[0]) {
                                    var i = e.jobQueue.findIndex((function(e) {
                                        return e.id === t.id
                                    }
                                    ));
                                    e.jobQueue.splice(i, 1);
                                    var c = e.blocks.findIndex((function(e) {
                                        return e.id === o[1]
                                    }
                                    ));
                                    if (c >= 0) {
                                        var r = e.blocks[c];
                                        e.updateBlock(r)
                                    }
                                }
                            }
                        }
                        )),
                        this.jobQueueRunning = !1
                    }
                },
                soundPlay: function() {
                    this.audio = new Audio(k),
                    this.audio.loop = !0,
                    this.audio.play()
                },
                soundStop: function() {
                    null !== this.audio && (this.audio.pause(),
                    this.audio = null)
                }
            },
            created: function() {
                var e = this
                  , t = new URLSearchParams(window.location.search);
                this.embedId = t.get("id"),
                this.local = t.get("local"),
                this.local && (this.darkMode = !!t.get("darkMode"),
                this.darkMode ? document.body.classList.add("embed-dark-mode") : document.body.classList.add("embed-light-mode")),
                Object(f["a"])(1e3, this.controller.signal, (function() {
                    e.block && e.block.activeSince && e.blockIncrement(e.block.id);
                    var t = e.blocks.filter((function(e) {
                        return e.activeCountdownSince > 0
                    }
                    ));
                    t.length > 0 && t.forEach((function(t) {
                        e.countdownIncrement(t.id)
                    }
                    )),
                    e.blockTick = (new Date).getTime() + 1e3
                }
                ))
            },
            mounted: function() {
                var e = this;
                if (this.jobQueueInterval = setInterval((function() {
                    e.jobQueueProcess()
                }
                ), 1e3),
                this.local) {
                    var t = new URLSearchParams(window.location.search)
                      , n = {
                        id: this.embedId,
                        title: t.get("title"),
                        type: t.get("type"),
                        color: t.get("color"),
                        size: t.get("size") / 1,
                        increaseValue: t.get("increaseValue") / 1,
                        faceType: t.get("faceType"),
                        skin: t.get("skin"),
                        elapsedTime: 0,
                        totalTime: 0,
                        activeSince: 0,
                        activeCountdownSince: 0,
                        elements: [],
                        progressStart: t.get("progressStart") / 1,
                        progressEnd: t.get("progressEnd") / 1,
                        counters: JSON.parse(t.get("counters")),
                        embedId: this.embedId,
                        embedOptions: {
                            mode: "update",
                            darkMode: !!t.get("darkMode")
                        },
                        local: !0
                    }
                      , o = this.blocks.find((function(t) {
                        return t.embedId === e.embedId
                    }
                    ));
                    o && (n.elapsedTime = JSON.parse(JSON.stringify(o.elapsedTime)) / 1,
                    n.totalTime = JSON.parse(JSON.stringify(o.totalTime)) / 1,
                    n.activeSince = JSON.parse(JSON.stringify(o.activeSince)) / 1,
                    n.activeCountdownSince = JSON.parse(JSON.stringify(o.activeCountdownSince)) / 1,
                    n.elements = JSON.parse(JSON.stringify(o.elements))),
                    this.$store.commit("blockAdd", n)
                } else
                    this.fetchBlock();
                window.Worker && (this.worker = new h["a"],
                this.worker.postMessage(""),
                this.worker.onmessage = function() {
                    var t = e.blocks.filter((function(e) {
                        return e.activeCountdownSince > 0
                    }
                    ));
                    t.length > 0 && t.forEach((function(t) {
                        if (!t.notificationSent) {
                            var n = t.size
                              , o = (new Date).getTime()
                              , i = (o - t.activeCountdownSince) / 1e3;
                            n -= i,
                            n < 0 && (null === e.audio && e.soundPlay(),
                            e.blockNotificationUpdate(t.id, !0),
                            e.nativeNotification.show("Kairo: Time is up", {
                                body: t.title + " has finished.",
                                requireInteraction: !0
                            }, {}))
                        }
                    }
                    ))
                }
                )
            },
            beforeUnmount: function() {
                clearInterval(this.jobQueueInterval)
            },
            unmounted: function() {
                this.controller.abort(),
                this.worker.terminate()
            }
        };
        n("5123");
        p.render = a;
        var v = p
          , g = n("7f0a")
          , w = n("5502")
          , S = function() {
            return {
                blocks: []
            }
        }
          , x = {
            state: S(),
            mutations: {
                blockAdd: function(e, t) {
                    var n = e.blocks.findIndex((function(e) {
                        return e.embedId === t.embedId
                    }
                    ));
                    n >= 0 && e.blocks.splice(n, 1),
                    t.elapsedTime = t.totalTime,
                    e.blocks.push(t)
                },
                blockDelete: function(e, t) {
                    var n = e.blocks.findIndex((function(e) {
                        return e.embedId === t
                    }
                    ));
                    n >= 0 && e.blocks.splice(n, 1)
                },
                blockIncrement: function(e, t) {
                    var n = e.blocks.findIndex((function(e) {
                        return e.id === t
                    }
                    ))
                      , o = (new Date).getTime()
                      , i = e.blocks[n].activeSince;
                    0 === i && (i = o),
                    e.blocks[n].elapsedTime = e.blocks[n].totalTime + (o - i)
                },
                elementStart: function(e, t) {
                    e.blocks[t.index].elements.push(t.element),
                    e.blocks[t.index].activeSince = t.element.start
                },
                elementEnd: function(e, t) {
                    e.blocks[t.index].elements[t.last].end = t.end;
                    var n = e.blocks[t.index].elements[t.last].end - e.blocks[t.index].elements[t.last].start;
                    e.blocks[t.index].totalTime += n,
                    e.blocks[t.index].activeSince = 0
                },
                elementUpdate: function(e, t) {
                    e.blocks[t.index].elements.push(t.element)
                },
                elementRemove: function(e, t) {
                    e.blocks[t.index].elements.splice(e.blocks[t.index].elements.length - 1, 1)
                },
                elementsReset: function(e, t) {
                    e.blocks[t.index].elements.splice(0, e.blocks[t.index].elements.length),
                    e.blocks[t.index].elapsedTime = 0,
                    e.blocks[t.index].totalTime = 0
                },
                countdownIncrement: function(e, t) {
                    var n = e.blocks.findIndex((function(e) {
                        return e.id === t
                    }
                    ))
                      , o = (new Date).getTime()
                      , i = e.blocks[n].activeCountdownSince;
                    0 === i && (i = o),
                    e.blocks[n].elapsedTime = o - i
                },
                countdownStart: function(e, t) {
                    e.blocks[t.index].activeCountdownSince = t.start
                },
                countdownEnd: function(e, t) {
                    e.blocks[t.index].activeCountdownSince = 0,
                    e.blocks[t.index].elapsedTime = 0
                },
                blockNotificationUpdate: function(e, t) {
                    var n = e.blocks.findIndex((function(e) {
                        return e.id === t.id
                    }
                    ));
                    e.blocks[n].notificationSent = t.status
                }
            }
        }
          , O = n("0e44")
          , y = (n("6828"),
        new URLSearchParams(window.location.search))
          , I = y.get("id")
          , j = Object(w["a"])({
            modules: {
                embed: x
            },
            plugins: [Object(O["a"])({
                key: "kairoE-" + I
            })]
        })
          , T = Object(o["createApp"])(v);
        T.use(j),
        T.use(g["a"], {
            requestOnNotify: !0
        }),
        T.mount("#app")
    }
});
//# sourceMappingURL=embed-local.f36ca83e.js.map
