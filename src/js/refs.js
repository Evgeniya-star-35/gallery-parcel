import galleryItems from "./main";
export const refs = {
  galleryEl: document.querySelector('.js-gallery'),
  backdrop: document.querySelector('.js-lightbox'),
  modal: document.querySelector('.lightbox__content'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('div.lightbox__overlay'),
  btnModalClose: document.querySelector('[data-action="close-lightbox"]'),
};