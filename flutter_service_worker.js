'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a59ec646a069c6788b7cbe738d06db00",
"index.html": "7dd4054c91ea7cb8201154f66b7ee32a",
"/": "7dd4054c91ea7cb8201154f66b7ee32a",
"main.dart.js": "6fe0c881d8758fd658c99a316b3c31a5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4908c1bd868d2b0a6af33ca418a4ba08",
"assets/asset/images/flutter_logo.png": "1d407de8a3067a90f2f0d946e9c818e9",
"assets/asset/images/projects_img/trip_app/trip_4.jpg": "aa8de67d3bd1e859fc4f9452dc0611ee",
"assets/asset/images/projects_img/trip_app/trip_3.jpg": "732f6a94e2140634d4218e0556030346",
"assets/asset/images/projects_img/trip_app/trip_2.jpg": "94903177c33a80be9135e13802050cd3",
"assets/asset/images/projects_img/trip_app/trip_1.jpg": "954de1f1b9caadf22d2d0c3a17bd6d94",
"assets/asset/images/projects_img/to_do_app/to_do_app_cover.png": "7366961c9c8e380b8b3b8f00ae85b270",
"assets/asset/images/projects_img/to_do_app/to_do_app_1.png": "20d64b033bb4e08bfc04aaebfad69581",
"assets/asset/images/projects_img/lifestyle_app/life_style_1.png": "8885bfaf533b362426363b358da7fcef",
"assets/asset/images/projects_img/lifestyle_app/life_style_2.png": "88ed23fa35460d2479a3b7ac3f5b6252",
"assets/asset/images/projects_img/lifestyle_app/lifestyle_app_cover.png": "f30c43b44c7ea0a8d16f2079ff4e2363",
"assets/asset/images/projects_img/meal_app/meal_app_cover.jpg": "1899bbecfc162bb1331ffd94d9fb5a3e",
"assets/asset/images/projects_img/travel_app/travel_1.jpeg": "22e8fc36406878e74243cfc6c3341adc",
"assets/asset/images/projects_img/travel_app/travel_2.jpeg": "0d608d58510358041b9974bbf9927af7",
"assets/asset/images/projects_img/travel_app/travel_app_cover.jpeg": "0337ccbcfc09c831981aa3e336c4c1fb",
"assets/asset/images/projects_img/travel_app/travel_3.jpeg": "934e87f2c59056fa994a25c359861f0b",
"assets/asset/images/projects_img/bmi_app/bmi_app_cover.png": "f4e7d3e8319b57653a90a3da1057e307",
"assets/asset/images/projects_img/vertical_card_app/verical_center.png": "abb09b4aab57eee032a4db9a23e2e99d",
"assets/asset/images/projects_img/vertical_card_app/vertical_right.png": "dffe6ce114c6c54e22440ac06507d361",
"assets/asset/images/projects_img/vertical_card_app/vertical_left.png": "29f9b7e01015ccb1affc99761fbd3ccf",
"assets/asset/images/projects_img/notes_app/notes_app_4.png": "0086aa8d80ca548ae64c4b3ccc47469d",
"assets/asset/images/projects_img/notes_app/notes_app_1.png": "fcd7236c0f0d18e27b28dffdd14579e4",
"assets/asset/images/projects_img/notes_app/notes_app_3.png": "8514adc2f2ea42ce27d8509ac296ee1d",
"assets/asset/images/projects_img/notes_app/notes_app_2.png": "3896a6315c909ae4e9c73621b3cb7bef",
"assets/asset/images/projects_img/notes_app/notes_app_cover.png": "dc88460b374cd2f0ce10db0005693621",
"assets/asset/images/projects_img/weather_app/weather_2.jpeg": "e49ff0274c9b34df3c1101aa6d121a9d",
"assets/asset/images/projects_img/weather_app/weather_3.jpeg": "cbcda2558824daafb4858d07660037a8",
"assets/asset/images/projects_img/weather_app/weather_8.jpeg": "80cf76460fa035f116aa3714cf141eb1",
"assets/asset/images/projects_img/weather_app/weather_4.jpeg": "550690f42c19ba9a44e039a27ec923b1",
"assets/asset/images/projects_img/weather_app/weather_5.jpeg": "412a5ca3c7bc6aa61a270f615259f84b",
"assets/asset/images/projects_img/weather_app/weather_6.jpeg": "68f029cd266958835c6b4a19951b5aa8",
"assets/asset/images/projects_img/weather_app/weather_7.jpeg": "7fa63d54acc8e790afa79977216d4dc2",
"assets/asset/images/projects_img/weather_app/weather_app_cover.jpg": "788d2d84c1cf604fdfa36a19e9ebd6b2",
"assets/asset/images/projects_img/weather_app/weather_1.jpeg": "bc07525941a6eeb0aa02068ea3a8a63e",
"assets/asset/images/projects_img/donefy_app/donefy_1.webp": "e144cac06cfa7db7f089a37e6589a156",
"assets/asset/images/projects_img/donefy_app/donefy_project.png": "63571aab4aa014c7e32da0b1aa93e323",
"assets/asset/images/projects_img/donefy_app/donefy_6.webp": "a0ea936bf324fde47e5f93ca6eed2e91",
"assets/asset/images/projects_img/donefy_app/donefy_4.webp": "fa822ce600e6d1acd07cea724fb8d3ca",
"assets/asset/images/projects_img/donefy_app/donefy_5.webp": "bd3a34db63f7406778c2d56ecf27e070",
"assets/asset/images/projects_img/donefy_app/donefy_2.webp": "143f65ea6813246df3bcd020160fb743",
"assets/asset/images/projects_img/donefy_app/donefy_3.webp": "cb98a326a9cacc4e57bcd3d6c406249f",
"assets/asset/images/projects_img/taqtak_app/taqtak_3.webp": "03d79ce4c267794003cf8ed2d05bee9f",
"assets/asset/images/projects_img/taqtak_app/taqtak_2.webp": "46ac477d01223b40e3e09cfa2960e87d",
"assets/asset/images/projects_img/taqtak_app/taqtak_5.webp": "0d76007082c73eb3ac5cbe633971c238",
"assets/asset/images/projects_img/taqtak_app/taqtak_4.webp": "e2520ebfc7739689977e8314d9f6ba01",
"assets/asset/images/projects_img/taqtak_app/taqtak_7.webp": "8b26087d6453640c9abef8343377c702",
"assets/asset/images/projects_img/taqtak_app/taqtak_project_cover.png": "6384cf315f9c0547910d246f304096dd",
"assets/asset/images/projects_img/taqtak_app/taqtak_6.webp": "c5956fe4f1f00ffc05ac955a5571c79f",
"assets/asset/images/projects_img/taqtak_app/taqtak_1.webp": "88ed6102242668359c6d518ce6d070e4",
"assets/asset/images/projects_img/delivery_app/delivery_6.jpeg": "a7d08cfc3dc263330fc48b7a82831d92",
"assets/asset/images/projects_img/delivery_app/delivery_7.jpeg": "eed765f3ca0ad3e8032910657c978c52",
"assets/asset/images/projects_img/delivery_app/delivery_1.jpeg": "8c3f52b316dfe9f9808c33f75ef7d278",
"assets/asset/images/projects_img/delivery_app/delivery_2.jpeg": "f9a26a20128a6be58cefad6b5938ee67",
"assets/asset/images/projects_img/delivery_app/delivery_3.jpeg": "d9748c1933033b716c9a7f4fabc1bbf5",
"assets/asset/images/projects_img/delivery_app/delivery_4.jpeg": "db76a7108b97a7e60306e1fc16fff25b",
"assets/asset/images/projects_img/delivery_app/delivery_5.jpeg": "7f12c76bdf903abc9bfac966b66b8316",
"assets/asset/images/projects_img/delivery_app/delivery_food_project.png": "e6c67c956b18d66f56a7f9c2b6780582",
"assets/asset/images/email_logo.png": "80d4f670a11ec6eddeb2d2ce548aeac0",
"assets/asset/images/ios_logo.png": "8e0d03f846cb5c5642c7c671dae56105",
"assets/asset/images/github_logo.png": "1fc5ba73e0e63e36bc09e37a461a7cfc",
"assets/asset/images/whatsapp_logo.jpg": "7ae8c06b6e896c3e91f590c80cecfa91",
"assets/asset/images/figma_logo.png": "184eebd4ecc77eb898eba49e4b314053",
"assets/asset/images/my_photo.jpeg": "b051474a6121d3b9d67b267959f9f20d",
"assets/asset/images/website_logo.png": "65791d958f782e2e7c079e1f3798c5cb",
"assets/asset/images/jira_logo.png": "082b77292a46330383d5b04903017eab",
"assets/asset/images/photoshop_logo.png": "8c202533b81a323c7afec1d279566639",
"assets/asset/images/placeholder.png": "5192dc05d342ca6405da675ab3cf000a",
"assets/asset/images/dart_logo.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/asset/images/firebase_logo.png": "cbe75d84eb4053b27dd641814e356089",
"assets/asset/images/linkedin_logo.webp": "a645f5f07d8015ebff18f774b3de3f2d",
"assets/asset/images/postman_logo.png": "d69bf22e775b82bc58f8d88c5a053db6",
"assets/asset/images/android_logo.png": "19a2e93acbb01a7cd6969ac88905ea30",
"assets/asset/images/adobe_xd_logo.png": "5b1cedcf1839e8d0778c708c4a4bf3c8",
"assets/AssetManifest.json": "51082666986c0e3735aa7f8a076f82e9",
"assets/NOTICES": "927d8dabeb8e81be341cf3866b698af9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c5d290806719b52d4e7f5b9b9ad36174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a350f7d02610de7ceef3fe12110dc4ad",
"assets/fonts/MaterialIcons-Regular.otf": "20587f6f8362e9054b71c96fe2c8cae6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
