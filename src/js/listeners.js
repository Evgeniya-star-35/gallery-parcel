
import {refs} from './refs';
import {onClickGalleryItem,onCloseButtonClick, onCloseOverlayClick} from "./functions"

refs.galleryEl.addEventListener('click', onClickGalleryItem);
refs.btnModalClose.addEventListener('click', onCloseButtonClick);
refs.lightboxOverlay.addEventListener('click', onCloseOverlayClick);