'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "26598209008d266cd9f77ffc36cb7484",
"assets/assets/fonts/proximanova-bold.otf": "f8127b6e91f1ab6d8fa59919ddfb11c7",
"assets/assets/fonts/proximanova-medium.otf": "4f1d4a561dd694e9b735dd47492dd5ac",
"assets/assets/fonts/proximanova-regular.otf": "435b9c734a7fcc5bc8dd2894ebe4c7d5",
"assets/assets/fonts/proximanova-semibold.otf": "ea0a33743e455ce29e634a8a1bc2e173",
"assets/assets/icons/apple_icon.png": "85643e51deb978dd78f2deeadbc02902",
"assets/assets/icons/bin.png": "6673b3b2c0e06e3b5cb46316b643f8fd",
"assets/assets/icons/businessman.png": "3a33c20be9eb816beb824240213b1aa1",
"assets/assets/icons/credit-card.png": "c8b2ea8bb22fabbb59b207c5283b5909",
"assets/assets/icons/document.png": "6e35973df6634e76a8d04ef47ecbafe1",
"assets/assets/icons/drink.png": "12be6f741a94158388b97fbb78f29bf7",
"assets/assets/icons/google_icon.png": "5d066c22a5449c7bcfe030f6e662ebb6",
"assets/assets/icons/hot-pot.png": "2468c2dfc265fc3d0860fa079866aa27",
"assets/assets/icons/ice-cream.png": "e85e603ef0039130cecc0e0f20131b10",
"assets/assets/icons/id-card.png": "837d7d62422efe2c2fad83282ee55c4f",
"assets/assets/icons/india-flag.png": "2deaf97e862e57c623e95d67edda607c",
"assets/assets/icons/khasdalogo.png": "59e267bb9a8b1381c5e4404ba020a178",
"assets/assets/icons/navigation.png": "4902a3f6d990d349fd6ea8034fa72076",
"assets/assets/icons/purse.png": "c9ba87979a32a98483eb48e43ab69aa0",
"assets/assets/icons/qr-code.png": "a4cb07ed264b6770acbacb4b57b029b5",
"assets/assets/icons/ramen.png": "f5d4b84c15def3d8a5c769b582fdf13a",
"assets/assets/icons/run.png": "d5362806c49357e27590f98f14d73b8e",
"assets/assets/icons/sbi-logo.png": "4dcf7f2e9de366c10c1c7face7ed3c34",
"assets/assets/icons/sport-1.png": "f5a4345f0c5359c8f606b4d01f8bc7a2",
"assets/assets/icons/sport-2.png": "b00f89e1a2a72442fd61603deccb5fe4",
"assets/assets/icons/sport-3.png": "3e7bec104ac701a97a0b63441fefb67d",
"assets/assets/icons/sport-4.png": "f836c6550beccb2c00f37ebf33b7e7c8",
"assets/assets/icons/sport-5.png": "e83b697f7b7c6ab158e98c4610292fe7",
"assets/assets/icons/team.png": "c6a2afd7994c016d1fedab7d8c1adac5",
"assets/assets/icons/united-kingdom-flag.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/icons/visa.png": "30b77ce3814bf5cfe1e3ccd1d0f2f2e1",
"assets/assets/images/11.jpg": "966a3d5bce1eb5367b56792d070f7a6e",
"assets/assets/images/3.jpg": "8392709dac01c3d290b43f286ddb1693",
"assets/assets/images/5.jpg": "3fa6c8d0e0a43988a15bad98310ccfd1",
"assets/assets/images/beer.png": "221ce161813eff746a002903bd39e650",
"assets/assets/images/billboard.png": "548b139242757103054855a9c9b6500a",
"assets/assets/images/buy-image.png": "bbe8700d1367f69be28e21fcb74dc55b",
"assets/assets/images/circle-avatar.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/cricket-stadium.jpg": "2b24c9e049f347cd8b36ff0bf1353952",
"assets/assets/images/family.jpg": "dda9cb362a99597e962de1fcb5d37300",
"assets/assets/images/female-avatar-1.png": "aa8cdd59b2adc818a6ce1628619f53ce",
"assets/assets/images/female-avatar-2.png": "43f29a5276e0f905278ff81db677c479",
"assets/assets/images/logo.png": "eb1bd712dda3ae5f339b306802c4713c",
"assets/assets/images/male-avatar-1.png": "7b19fa493e2aac9d7c4980180e22e380",
"assets/assets/images/male-avatar-2.png": "d02aa303a7db15a9cd75f0e788ffd24f",
"assets/assets/images/party.png": "1cc04924d2bbfda39d95bfe75cc2a0d1",
"assets/assets/images/pasta.jpeg": "37aa4f938de07fea07e834103a103a8e",
"assets/assets/images/sharing.jpg": "5b898bb246033b89e196b3e158d783e7",
"assets/assets/images/sports/Archery.png": "ca73d8c9ccbd140d0f791123334bab90",
"assets/assets/images/sports/Athletics.png": "86326af4a19559815cc6d072f0b0573c",
"assets/assets/images/sports/Badminton.png": "b7802c333267ba091fc03b4870743d1c",
"assets/assets/images/sports/Basketball.png": "a31f250492fe24567ade7ad041d481d1",
"assets/assets/images/sports/Bench-Press-Powerlifting.png": "804ec7006ab1873d675f9ba4151e0408",
"assets/assets/images/sports/Body-Building.jpg": "6d3cf3ed309f5b84785668c6e3059003",
"assets/assets/images/sports/Boxing.png": "72ea5e3583ff35cd2bea329fc5b67b15",
"assets/assets/images/sports/Carrom.png": "bfabafd85d4a0d1de74e4f992a4011db",
"assets/assets/images/sports/Chess.png": "32fd9f0531d33fb4e999b7bc89faaa4c",
"assets/assets/images/sports/Cycling.png": "4c00d1bd19280854194da79c384adca2",
"assets/assets/images/sports/Divyang.png": "fbf14304cdc20e5682b944656faa3a36",
"assets/assets/images/sports/Fencing.png": "c4578e8c0e608319ed9ea30f8d00c03c",
"assets/assets/images/sports/Football.png": "af24995f7d08bcaed3a98cf8a6e879e8",
"assets/assets/images/sports/Girls-Box-Cricket.png": "d0e3cc5cc6775aa9fda164c7a601d5e4",
"assets/assets/images/sports/Gymnastics.png": "89b9ac9e5056cd1beb2b3418f41d3249",
"assets/assets/images/sports/Handball.png": "0242a49a93bdfef13e118294b99c995e",
"assets/assets/images/sports/Hockey.png": "fef4b4c055d3c44f7031e54cd1bb0219",
"assets/assets/images/sports/Judo.png": "05f199b9bb830ef1be2a2d47d30b274d",
"assets/assets/images/sports/Kabaddi.png": "30c49e1908acbc0b0159eca0f7658f4a",
"assets/assets/images/sports/Kho-Kho.png": "643bd6cdd6a1fb4a3e04456cb3c8cb0c",
"assets/assets/images/sports/Lawn-Tennis.png": "98e98157b471bb49b37010c933f6412a",
"assets/assets/images/sports/Malkhamb.jpg": "7de0599265d2bf568749b841a644bcf1",
"assets/assets/images/sports/Marathon.png": "560858e83c20696e7e4784301be56a66",
"assets/assets/images/sports/Rifle-Shooting.jpg": "9b3d1f1d1413aaa011c0de4135dc8043",
"assets/assets/images/sports/Sewpak-Takraw.png": "95bf0b5c40c2ac209bcc7eb40ad3ac69",
"assets/assets/images/sports/Softball.jpg": "3571601f2935c7baa29d55195bacd91c",
"assets/assets/images/sports/Swimming.png": "66c965fd3ff858b5869510965d370636",
"assets/assets/images/sports/Table-Tennis.jpg": "27f57fc03ffd7dc42f6cd4c78d1da0ed",
"assets/assets/images/sports/Taekwondo.png": "f78089c28902a0efab32688514ebad1e",
"assets/assets/images/sports/Tug-of-war.png": "c394ea7220af4e5d879c71c4d744c82f",
"assets/assets/images/sports/Volleyball.png": "ee7820a803de44e1502bb37f4d1d49c8",
"assets/assets/images/sports/Wrestling.png": "598920445fd99fe67a4f11b6c8b1a999",
"assets/assets/images/sports/Yogasan.png": "260f0bdea81444e753966b939c893d41",
"assets/assets/images/stadium-seating.png": "475ecbc36e186f5cd48f2e22fde23608",
"assets/assets/md/about.md": "cb9471952bd2fd933dc272b6c55275c1",
"assets/FontManifest.json": "751366695e213e9af0cf5c134f9b1b11",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "c6d02cb7c9fe4597cb26dc09c187e7a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "100ca0e3769be1aa7f32d51295125f36",
"/": "100ca0e3769be1aa7f32d51295125f36",
"main.dart.js": "7902813fac175b465f130e0c8311d8a0",
"manifest.json": "ce163fdbcf8c0b92021846f7db75baa7",
"version.json": "e05dcee13241464a649ee19cf1140f47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
