import {refs} from './refs';
export function onClickGalleryItem(e) {
  e.preventDefault();
  window.addEventListener('keydown', onClickEsc);
  const target = e.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  if (target.nodeName === 'IMG') {
    refs.backdrop.classList.add('is-open');
    // refs.lightboxImg.src = target.getAttribute('data-source');
    refs.lightboxImg.src = target.dataset.source;
    refs.lightboxImg.alt = target.alt;
    refs.lightboxImg.dataset.index = e.target.dataset.index;
  }
}
export function onClickCloseModal() {
  refs.backdrop.classList.remove('is-open');
}

export function onCloseButtonClick(e) {
  window.removeEventListener('keydown', onClickEsc);

  e.preventDefault();
  onClickCloseModal();
  refs.lightboxImg.src = '';
  refs.lightboxImg.alt = '';
}
export function onCloseOverlayClick(e) {
  if (e.target === e.currentTarget) {
    onClickCloseModal();
  }
}

export function onClickEsc(e) {
  const ESC_KEY_CODE = 'Escape';
  if (e.code === ESC_KEY_CODE) {
    onClickCloseModal();
  }
}
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
    newSrc(index, galleryItems.length - 1);
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
