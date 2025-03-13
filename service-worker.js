"use strict";
var precacheConfig = [["/index.html", "99cc69d5be162b2dd0b3df666e64e880"], ["/static/css/main.453ff4da.css", "f968040f05b29976ee1e942855f26ab6"], ["/static/js/18.cc5e497a.chunk.js", "16897ebc5c35856dfeb535dcfb7353c6"], ["/static/js/19.c38aff90.chunk.js", "0f28620578a3725353fca22907a1f955"], ["/static/js/highlight.js.721bb7ec.chunk.js", "77825dfe54e1af84bf143c958d5c465d"], ["/static/js/modal-screen-0.f80d22ca.chunk.js", "6ca1e80fa5e7a6053da562603cd55ec1"], ["/static/js/modal-screen-10.755bb2b8.chunk.js", "4719f71b9a8b074b0ccbb3d071e44933"], ["/static/js/modal-screen-11.9d969d0f.chunk.js", "a56fa7289f20c6783db25dab5ec0ebc9"], ["/static/js/modal-screen-13.e2de30f3.chunk.js", "505946f1bcafba4526e851cae0aefdf3"], ["/static/js/modal-screen-17.b60c4cc2.chunk.js", "e5fa117d0017ad43a2c039b9d98443ce"], ["/static/js/modal-screen-19.7d79acbc.chunk.js", "3bcc08b517812b4d238399df0ec51393"], ["/static/js/modal-screen-23.cf6a99cf.chunk.js", "045791265e3461e4a260659f97d3d774"], ["/static/js/modal-screen-25.662b3b6e.chunk.js", "046e4cb924a4312e7a0d4cc46cde2f8a"], ["/static/js/modal-screen-29.c3581713.chunk.js", "cf1241e6c09168490fbf2de090b04951"], ["/static/js/modal-screen-31.e7f158c5.chunk.js", "71454338d186287589fd76e094a01320"], ["/static/js/modal-screen-35.dc30aad5.chunk.js", "d913023343979ce613525447f20e971d"], ["/static/js/modal-screen-37.2e8f1620.chunk.js", "60d28489db0fb33197cfcf83b3c6a883"], ["/static/js/modal-screen-41.b540c968.chunk.js", "3c0f5fbee9983a6e85981cbb7e89a7cd"], ["/static/js/modal-screen-43.4579211c.chunk.js", "774a39d4903919e8b6cc8944b3e26351"], ["/static/js/modal-screen-47.be034804.chunk.js", "90cfc53a00f520a2482842b7b09d412d"], ["/static/js/modal-screen-49.2ce1f940.chunk.js", "822a21856f8550bb07c03ff3bf8e8fd3"], ["/static/js/modal-screen-53.897acd0a.chunk.js", "9b85855133949f1dd130a379dd07c69c"], ["/static/js/modal-screen-55.65c315b8.chunk.js", "089f397af2587f1495ab2c13e849afa0"], ["/static/media/15e026451fd814e2d1a13e49c8076978.15e02645.png", "15e026451fd814e2d1a13e49c8076978"], ["/static/media/1688a01d0e6f27bead9ae6ca9e51dd32.1688a01d.svg", "1688a01d0e6f27bead9ae6ca9e51dd32"], ["/static/media/1939fe07993a754364bf3fee5223428d.1939fe07.svg", "1939fe07993a754364bf3fee5223428d"], ["/static/media/300.148d0f25.woff", "148d0f25ba9c02a9190be23e882c7f87"], ["/static/media/300.26ec1352.woff", "26ec135289ee1c4e5439e30fa7d771b0"], ["/static/media/300.6c6374ba.woff", "6c6374bad0b0b6d204d8d6dc4a18d820"], ["/static/media/318ce2f97a8bd1d7a693938d9aff5f08.318ce2f9.svg", "318ce2f97a8bd1d7a693938d9aff5f08"], ["/static/media/3c2ce4428c2c44824b07162f648524f5.3c2ce442.svg", "3c2ce4428c2c44824b07162f648524f5"], ["/static/media/3fef4f31f944477f5f3e9643cbcaab7a.3df8ea1b.svg", "3df8ea1b82e3ba9c6c5239f7a199a3da"], ["/static/media/400.32c4f766.woff", "32c4f766e4892c054dfd367dbe0fc6dc"], ["/static/media/400.7a504226.woff", "7a504226cbb79a1a6990a72266007030"], ["/static/media/400.e8acd7d9.woff", "e8acd7d9bf6207f99350ca9f9e23b168"], ["/static/media/4f27cbf7f975daa32fe7c8dec19ce2de.4f27cbf7.svg", "4f27cbf7f975daa32fe7c8dec19ce2de"], ["/static/media/500.32c4f766.woff", "32c4f766e4892c054dfd367dbe0fc6dc"], ["/static/media/500.3bdef125.woff", "3bdef1251a424500c1b3a78dea9b7e57"], ["/static/media/500.7a504226.woff", "7a504226cbb79a1a6990a72266007030"], ["/static/media/557b6b6b982a8c2b2c97048b86e2e6c3.557b6b6b.svg", "557b6b6b982a8c2b2c97048b86e2e6c3"], ["/static/media/5da4cdab01d4d89c593c48c62ae0d937.5da4cdab.svg", "5da4cdab01d4d89c593c48c62ae0d937"], ["/static/media/600.4ea3faef.woff", "4ea3faef5f6c0c74eb4d5e1a4a5de0b4"], ["/static/media/600.88055567.woff", "88055567e3d928bcb1e67e967081572e"], ["/static/media/600.be0060da.woff", "be0060dafb7a0e31d2a1ca17c0708636"], ["/static/media/66084381f55f4238d69e5cbe3b8dc42e.66084381.svg", "66084381f55f4238d69e5cbe3b8dc42e"], ["/static/media/700.09788e4f.woff", "09788e4fa057f2e0067e13209e56c8a7"], ["/static/media/700.746a4f24.woff", "746a4f241e03deffc59b08c5650cf458"], ["/static/media/700.8e12fb4f.woff", "8e12fb4f14d9c4592eb8ec9f22337b04"], ["/static/media/7674eb0d869afebca7b1f3a5202506c6.7674eb0d.svg", "7674eb0d869afebca7b1f3a5202506c6"], ["/static/media/86b5987e685f72352730d56690393fc8.86b5987e.svg", "86b5987e685f72352730d56690393fc8"], ["/static/media/a4c2ef2964ee9977baf61a2f6017b93d.1ab1b201.svg", "1ab1b201f7e660fe529b3c43b43970ac"], ["/static/media/aee87e981ef9acae845ef397c7a034c5.aee87e98.svg", "aee87e981ef9acae845ef397c7a034c5"], ["/static/media/attachment-icon.67d5792f.svg", "67d5792fbd286d73bbac1891d73d1a59"], ["/static/media/boost.c4205514.svg", "c4205514e5135be9dc995ccf8ae9581e"], ["/static/media/c7078943fc392e7dede27a20e6cfdcfb.c7078943.svg", "c7078943fc392e7dede27a20e6cfdcfb"], ["/static/media/command-icon.8a01173f.svg", "8a01173f22b3bf41bdde2c2b022c8ee8"], ["/static/media/d6bb78c1d64640ad06cc8cdd1c61b67d.d6bb78c1.svg", "d6bb78c1d64640ad06cc8cdd1c61b67d"], ["/static/media/danger.2d36692a.svg", "2d36692a70adefe544b77cf2e995889b"], ["/static/media/delete.34cba236.svg", "34cba2363f8dcb848af0dd5cb5686c7c"], ["/static/media/discord-image-failure.9fe0377f.svg", "9fe0377f3fe4a38be084eb9f6d9d09b4"], ["/static/media/download-icon.cc2a4fc1.svg", "cc2a4fc1337a3d3bab05b2011a389617"], ["/static/media/e06a573355c490f7ce6e3125ac01db81.e06a5733.svg", "e06a573355c490f7ce6e3125ac01db81"], ["/static/media/ef3a1ed683cfcf029971b12a26462072.ef3a1ed6.svg", "ef3a1ed683cfcf029971b12a26462072"], ["/static/media/f1141359084b3b61f3a41adbe541fdbb.f1141359.svg", "f1141359084b3b61f3a41adbe541fdbb"], ["/static/media/f772d3d7eddcf3c84f710c10999479f0.f772d3d7.svg", "f772d3d7eddcf3c84f710c10999479f0"], ["/static/media/f8e80ba7587764ddfa27aa1e02c6ed54.f8e80ba7.svg", "f8e80ba7587764ddfa27aa1e02c6ed54"], ["/static/media/fullscreen.f86e44c5.svg", "f86e44c53509f1f82a0d731b93df8f9b"], ["/static/media/icon.81acaf7c.svg", "81acaf7c4a4faff017eaecf927ba33ff"], ["/static/media/pause.481fd195.svg", "481fd19539e9cfab6f502fab6e60020f"], ["/static/media/play.9d7b7d58.svg", "9d7b7d582f2c010d35badde2408ab8d0"], ["/static/media/screenshot.f519b6c2.png", "f519b6c28eebaa058cddd5afe9d5d1e4"], ["/static/media/speak.ffccefe4.svg", "ffccefe4626b351c2684eb1c987ef88b"], ["/static/media/stars.741b66ad.svg", "741b66adfb4678d11c17d27e24d01969"], ["/static/media/sticker-icon.af9f7f56.svg", "af9f7f567673d0c506c4ec0a0286d64e"], ["/static/media/thread-created.91333ff6.svg", "91333ff6816083a3d350915fa41f58f3"], ["/static/media/unknown-reply.4e8f7374.svg", "4e8f73742edcc4301961427ce7d003e7"], ["/static/media/warning.4cc21b94.svg", "4cc21b94624898e1993dab7fa599f08f"]]
  , cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : "")
  , ignoreUrlParametersMatching = [/^utm_/]
  , addDirectoryIndex = function(e, a) {
    var c = new URL(e);
    return "/" === c.pathname.slice(-1) && (c.pathname += a),
    c.toString()
}
  , cleanResponse = function(a) {
    return a.redirected ? ("body"in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
        return new Response(e,{
            headers: a.headers,
            status: a.status,
            statusText: a.statusText
        })
    }) : Promise.resolve(a)
}
  , createCacheKey = function(e, a, c, t) {
    var f = new URL(e);
    return t && f.pathname.match(t) || (f.search += (f.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(c)),
    f.toString()
}
  , isPathWhitelisted = function(e, a) {
    if (0 === e.length)
        return !0;
    var c = new URL(a).pathname;
    return e.some(function(e) {
        return c.match(e)
    })
}
  , stripIgnoredUrlParameters = function(e, c) {
    var a = new URL(e);
    return a.hash = "",
    a.search = a.search.slice(1).split("&").map(function(e) {
        return e.split("=")
    }).filter(function(a) {
        return c.every(function(e) {
            return !e.test(a[0])
        })
    }).map(function(e) {
        return e.join("=")
    }).join("&"),
    a.toString()
}
  , hashParamName = "_sw-precache"
  , urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
    var a = e[0]
      , c = e[1]
      , t = new URL(a,self.location)
      , f = createCacheKey(t, hashParamName, c, /\.\w{8}\./);
    return [t.toString(), f]
}));
function setOfCachedUrls(e) {
    return e.keys().then(function(e) {
        return e.map(function(e) {
            return e.url
        })
    }).then(function(e) {
        return new Set(e)
    })
}
self.addEventListener("install", function(e) {
    e.waitUntil(caches.open(cacheName).then(function(t) {
        return setOfCachedUrls(t).then(function(c) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a) {
                if (!c.has(a)) {
                    var e = new Request(a,{
                        credentials: "same-origin"
                    });
                    return fetch(e).then(function(e) {
                        if (!e.ok)
                            throw new Error("Request for " + a + " returned a response with status " + e.status);
                        return cleanResponse(e).then(function(e) {
                            return t.put(a, e)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting()
    }))
}),
self.addEventListener("activate", function(e) {
    var c = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function(a) {
        return a.keys().then(function(e) {
            return Promise.all(e.map(function(e) {
                if (!c.has(e.url))
                    return a.delete(e)
            }))
        })
    }).then(function() {
        return self.clients.claim()
    }))
}),
self.addEventListener("fetch", function(a) {
    if ("GET" === a.request.method) {
        var e, c = stripIgnoredUrlParameters(a.request.url, ignoreUrlParametersMatching), t = "index.html";
        (e = urlsToCacheKeys.has(c)) || (c = addDirectoryIndex(c, t),
        e = urlsToCacheKeys.has(c));
        var f = "/index.html";
        !e && "navigate" === a.request.mode && isPathWhitelisted(["^(?!\\/__).*"], a.request.url) && (c = new URL(f,self.location).toString(),
        e = urlsToCacheKeys.has(c)),
        e && a.respondWith(caches.open(cacheName).then(function(e) {
            return e.match(urlsToCacheKeys.get(c)).then(function(e) {
                if (e)
                    return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', a.request.url, e),
            fetch(a.request)
        }))
    }
});

