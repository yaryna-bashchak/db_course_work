/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "7fedb211c820abb72b7f6cd2f16c3967"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ceecf727.css",
    "revision": "72fd9a587951ebf415b8d5ee13055012"
  },
  {
    "url": "assets/img/1_tasks_on_start.f5baa5f7.png",
    "revision": "f5baa5f7e62845ed8ac9055800d2ff1c"
  },
  {
    "url": "assets/img/2_post_task.904d181c.png",
    "revision": "904d181c88feb6dbd13576c45a208abb"
  },
  {
    "url": "assets/img/3_see_new_task_in_tasks.0170763a.png",
    "revision": "0170763a6e319790ed2f4e8e1439cdcd"
  },
  {
    "url": "assets/img/4_put_changes.9870ab60.png",
    "revision": "9870ab600e740b2e7bd109f61a2a8690"
  },
  {
    "url": "assets/img/5_get_changed_task.5b1c5e34.png",
    "revision": "5b1c5e34e9cfd72af371947d0deb315e"
  },
  {
    "url": "assets/img/6_chosen_id_to_delete.15297d37.png",
    "revision": "15297d37b0f228c0ab3d5c40f0b4e6a3"
  },
  {
    "url": "assets/img/7_delete_by_id.99e81cc3.png",
    "revision": "99e81cc30031e8b209a12f2dcc99264c"
  },
  {
    "url": "assets/img/8_check_if_was_deleted.5d0bf6ec.png",
    "revision": "5d0bf6ecd44339edd0623203bad8ec30"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start_server.112c52a2.png",
    "revision": "112c52a2b7668b3c44ad9c639b6be325"
  },
  {
    "url": "assets/img/table_task.430fba43.jpg",
    "revision": "430fba43aae768bb17b32be2660e68ef"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.e2205bac.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.6566a0c0.js",
    "revision": "1a0fbbcdfe9ce3b4280caf929132eaa2"
  },
  {
    "url": "assets/js/14.4ff0d3a8.js",
    "revision": "eb673b58f6182fe6d1477ee941170234"
  },
  {
    "url": "assets/js/15.f65782b4.js",
    "revision": "67c861346f60c6bd386340bdcf373bce"
  },
  {
    "url": "assets/js/16.71c504aa.js",
    "revision": "515087435bf4906a51699ed2a2fb7735"
  },
  {
    "url": "assets/js/17.cf1ac208.js",
    "revision": "973f88dfdeebd2ccf4259bd2c8526984"
  },
  {
    "url": "assets/js/18.68afb836.js",
    "revision": "ea0e65f24f15ed30a892c3e9f9d81c1e"
  },
  {
    "url": "assets/js/19.b55b6f1a.js",
    "revision": "a5802eb33547b0a7ecee4cecb81340b9"
  },
  {
    "url": "assets/js/2.7a85be5a.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.68588e38.js",
    "revision": "10189e0d113cdd33f96838094ee17486"
  },
  {
    "url": "assets/js/21.331ce486.js",
    "revision": "0ad4507a3d2ce8bd5ffcb195e8fd4e77"
  },
  {
    "url": "assets/js/22.d25fd176.js",
    "revision": "ce351d8cd1fa1c75ddcc2a46ef413529"
  },
  {
    "url": "assets/js/23.5e2bf765.js",
    "revision": "90d7adced3d179c970cb1febcae4032b"
  },
  {
    "url": "assets/js/24.32e50f36.js",
    "revision": "03e92b5d65bb3702fd707cecd9d4a997"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.7081b4d2.js",
    "revision": "db5ea3159dc5e8743d253cc8601002bc"
  },
  {
    "url": "assets/js/4.7f054529.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.26c9c4ac.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.b5003f4b.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.6212f9ad.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.8b3bae44.js",
    "revision": "c0bb7ce4390d88414a1f20be9212799d"
  },
  {
    "url": "assets/js/app.e548a840.js",
    "revision": "2b7aa576670c82616202e59c91ab48e3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ffaa7a9ac943f4d179e7ce16bb8bade7"
  },
  {
    "url": "design/index.html",
    "revision": "46a817d16702a8bebe10010d6c093a8a"
  },
  {
    "url": "index.html",
    "revision": "3d4c417a583e17cabd72adb49e35847e"
  },
  {
    "url": "intro/index.html",
    "revision": "2698cf664eb5121776aecd10bc769e1a"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "76c924e7ac009485832ea0697e686ec6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9fa7c070b2f39f67a3540ea58a59cc27"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6907148abcb47ea4db24ee6e5c4d50d1"
  },
  {
    "url": "software/index.html",
    "revision": "09ebd7610552e22dec310c5e87b271ab"
  },
  {
    "url": "test/index.html",
    "revision": "bc18399db6a36386b35a9fc21bec08aa"
  },
  {
    "url": "use cases/index.html",
    "revision": "cd1d0e4a3e9dc5b5a447effe76ed6716"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
