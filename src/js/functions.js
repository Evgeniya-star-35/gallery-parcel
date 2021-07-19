import {refs} from './refs';
export function onClickGalleryItem(e) {
  e.preventDefault();
  
  const target = e.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
   if  (target.nodeName === 'IMG') {
      
    // refs.lightboxImg.src = target.getAttribute('data-source');
    refs.backdrop.classList.add('is-open');
    refs.lightboxImg.src = target.dataset.source;
    refs.lightboxImg.alt = target.alt;
    refs.lightboxImg.dataset.index = target.dataset.index;
    }
    window.addEventListener('keydown', onClickEsc);
}
// export function onClickCloseModal() {
//    refs.backdrop.classList.remove('is-open'); 
// }

export function onCloseButtonClick(e) {
  
    refs.backdrop.classList.remove('is-open'); 
    refs.lightboxImg.src = '';
    refs.lightboxImg.alt = '';
    window.removeEventListener('keydown', onClickEsc);
}
export function onCloseOverlayClick(e) {
  
    onCloseButtonClick();
  
}
export function onCloseModalClick() {
    if (e.target === e.currentTarget) {
        onCloseButtonClick();
    }
}
export function onClickEsc(e) {
  const ESC_KEY_CODE = 'Escape';
  if (e.code === ESC_KEY_CODE) {
      onCloseButtonClick();
  }
}
