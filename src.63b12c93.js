parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],o=p;exports.default=o;
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;var e=o(require("./main"));function o(e){return e&&e.__esModule?e:{default:e}}var t={galleryEl:document.querySelector(".js-gallery"),backdrop:document.querySelector(".js-lightbox"),modal:document.querySelector(".lightbox__content"),lightboxImg:document.querySelector(".lightbox__image"),lightboxOverlay:document.querySelector("div.lightbox__overlay"),btnModalClose:document.querySelector('[data-action="close-lightbox"]')};exports.refs=t;
},{"./main":"d6sW"}],"Barx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGallery=n,exports.imgGallery=void 0;var e=a(require("./main")),r=require("./refs");function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return e.map(function(e,r){var a=e.preview,n=e.original,t=e.description;return'<li class="gallery__item ><a class="gallery__link"\n      href="'.concat(n,'"\n    >\n      <img\n        class="gallery__image"\n        src="').concat(a,'"\n        data-source="').concat(n,'"\n        alt="').concat(t,'" data-index="').concat(r,'"\n      />\n    </a>\n  </li>')}).join("")}var t=n(e.default);exports.imgGallery=t,r.refs.galleryEl.insertAdjacentHTML("beforeend",t);
},{"./main":"d6sW","./refs":"VyiV"}],"OeGu":[function(require,module,exports) {
"use strict";function e(e){e.preventDefault(),window.addEventListener("keydown",n);var t=e.target;"IMG"===t.nodeName&&"IMG"===t.nodeName&&(refs.backdrop.classList.add("is-open"),refs.lightboxImg.src=t.dataset.source,refs.lightboxImg.alt=t.alt,refs.lightboxImg.dataset.index=e.target.dataset.index)}function t(){refs.backdrop.classList.remove("is-open")}function o(e){window.removeEventListener("keydown",n),e.preventDefault(),t(),refs.lightboxImg.src="",refs.lightboxImg.alt=""}function r(e){e.target===e.currentTarget&&t()}function n(e){"Escape"===e.code&&t()}function s(){var e=+refs.lightboxImg.dataset.index;a(e,0!==e?-1:galleryItems.length-1)}function i(){var e=+refs.lightboxImg.dataset.index;e!==galleryItems.length-1?a(e,1):a(0)}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;refs.lightboxImg.dataset.index="".concat(e+t),refs.lightboxImg.src=galleryItems[e+t].original}Object.defineProperty(exports,"__esModule",{value:!0}),exports.onClickGalleryItem=e,exports.onClickCloseModal=t,exports.onCloseButtonClick=o,exports.onCloseOverlayClick=r,exports.onClickEsc=n,exports.onArrowLeft=s,exports.onArrowRight=i,exports.newSrc=a,window.addEventListener("keydown",function(e){"ArrowLeft"===e.code&&s(),"ArrowRight"===e.code&&i()});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=i(require("./js/main")),r=require("./js/refs"),u=require("./js/render"),s=require("./js/functions");function i(e){return e&&e.__esModule?e:{default:e}}
},{"./js/main":"d6sW","./js/refs":"VyiV","./js/render":"Barx","./js/functions":"OeGu"}]},{},["Focm"], null)
//# sourceMappingURL=/gallery-parcel/src.63b12c93.js.map