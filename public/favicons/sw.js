if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Ta6O4VLUSC1GHoxQ1rBBY/_buildManifest.js",revision:"33a3f1a7a0152e99f918836691d0620d"},{url:"/_next/static/Ta6O4VLUSC1GHoxQ1rBBY/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Ta6O4VLUSC1GHoxQ1rBBY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/125-9e8d668508f6024d.js",revision:"9e8d668508f6024d"},{url:"/_next/static/chunks/675-b1c0bfa226b363b1.js",revision:"b1c0bfa226b363b1"},{url:"/_next/static/chunks/766-f2c0980c03d237dd.js",revision:"f2c0980c03d237dd"},{url:"/_next/static/chunks/95b64a6e-5c1c80ce1af5e491.js",revision:"5c1c80ce1af5e491"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-a68afe38c70f74f6.js",revision:"a68afe38c70f74f6"},{url:"/_next/static/chunks/pages/404-ac0842b150c9087e.js",revision:"ac0842b150c9087e"},{url:"/_next/static/chunks/pages/500-3a6a9c9f5671bc19.js",revision:"3a6a9c9f5671bc19"},{url:"/_next/static/chunks/pages/_app-8b534dbb1f827bf1.js",revision:"8b534dbb1f827bf1"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/index-79b6be83273d07fb.js",revision:"79b6be83273d07fb"},{url:"/_next/static/chunks/pages/shop/%5Bfamily%5D-16ef0e360e96d980.js",revision:"16ef0e360e96d980"},{url:"/_next/static/chunks/pages/shop/%5Bfamily%5D/accessories-b703b8226d249f0a.js",revision:"b703b8226d249f0a"},{url:"/_next/static/chunks/pages/shop/%5Bfamily%5D/accessories/%5Bcategory%5D-3ab76c226414c2d8.js",revision:"3ab76c226414c2d8"},{url:"/_next/static/chunks/pages/sub/legal/sitemap-51ec9ae63f7d2e0e.js",revision:"51ec9ae63f7d2e0e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/3537d706846a1346.css",revision:"3537d706846a1346"},{url:"/favicons/apple-touch-icon.png",revision:"289adb9b3c249d076bb74f0cf578f936"},{url:"/favicons/browserconfig.xml",revision:"b0df1d8364886483f481bc261ea8db4b"},{url:"/favicons/favicon-16x16.png",revision:"6326ff7c69bb11105a52e2f58aa9f3d5"},{url:"/favicons/favicon-32x32.png",revision:"29cc138da98cc74aaa4881b4e4a5c729"},{url:"/favicons/favicon.ico",revision:"bd823b391726dd9f0f538750d28c95d2"},{url:"/favicons/icon-192x192.png",revision:"bf11184a23415e663b6ed457941caf7d"},{url:"/favicons/icon-256x256.png",revision:"44e26729ffd4ad1ae95eb518502c8eaf"},{url:"/favicons/icon-384x384.png",revision:"c5f2472833ad6fffaace76b263ad9a55"},{url:"/favicons/icon-512x512.png",revision:"10b86851dceb6240102e77e25eb45ee0"},{url:"/favicons/manifest.json",revision:"20cb8c5e28962846d622b2293a63e726"},{url:"/favicons/mstile-150x150.png",revision:"fc14d117529c8c54b738ccbc62cc0feb"},{url:"/favicons/og-default.jpeg",revision:"4c7c2b124d3c18d1553471bde135f63f"},{url:"/favicons/safari-pinned-tab.svg",revision:"557fcefe8441b35b4fc81008e22a1140"},{url:"/images/general/home/unicef_logo_dark__ejvlglygb3ee_large_2x.png",revision:"96e7d15f188d57b7932346a79961bed2"},{url:"/images/shop/accessories/page/gallery/airpods-header-accessories-202110_FMT_WHH.jpeg",revision:"064597bcbf0a7c862db1afd09c224cec"},{url:"/images/shop/accessories/page/gallery/apple-watch-bands-pride-202205_FMT_WHH.jpeg",revision:"b61ab7c7e76b28ee5fba5090d130f73e"},{url:"/images/shop/accessories/page/gallery/magsafe-202203_FMT_WHH.jpeg",revision:"918f683ede2ef3fe4f4ae134b775764b"},{url:"/images/shop/accessories/page/pinwheel/MMMR3.png",revision:"a7179591afe8efa73ada1b490fe9385c"},{url:"/images/shop/accessories/page/pinwheel/MN653_AV3.png",revision:"51822115b01d1acabdaa5ea29e1fa470"},{url:"/images/shop/accessories/page/pinwheel/MN6L3_FV402.png",revision:"e6d4455677024856b90829f71b551089"},{url:"/images/shop/accessories/page/pinwheel/MN6N3_FV532.png",revision:"69a9155e4bfa3ef86f7a895caeb30d0e"},{url:"/images/shop/accessories/page/pinwheel/MNA73_FV102.png",revision:"0dbef44ad7ff2debdf13ebe7138c009a"},{url:"/images/shop/overview/header/store-chat-specialist-icon_AV1.jpeg",revision:"9c8613c6f1c691dc6e0084f9db0c7d57"},{url:"/robots.txt",revision:"86496bbe90e118354fd47123ca3c2e43"},{url:"/sitemap-0.xml",revision:"817e6589945fe4864562151515595053"},{url:"/sitemap.xml",revision:"50b88aa979126896b3a7ebe84f77addb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
