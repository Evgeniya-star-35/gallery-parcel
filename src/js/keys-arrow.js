import {galleryItems} from "./main";
import { refs } from './refs';
window.addEventListener('keydown', e => {
  if (e.code === 'ArrowLeft') {
    onArrowLeft();
  }
  if (e.code === 'ArrowRight') {
    onArrowRight();
  }
});

export function onArrowLeft() {
  let index = +refs.lightboxImg.dataset.index;

  if (index === 0) {
    newSrc( galleryItems.length - 1);
    return;
  }
  newSrc(index, -1);
}
export function onArrowRight() {
  let index = +refs.lightboxImg.dataset.index;
  if (index === galleryItems.length - 1) {
    newSrc(0);
    return;
  }
  newSrc(index, 1);
}

export function newSrc(index, step = 0) {
  refs.lightboxImg.dataset.index = `${index + step}`;
  refs.lightboxImg.src = galleryItems[index + step].original;
}
