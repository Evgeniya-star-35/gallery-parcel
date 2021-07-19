
import {refs} from './refs';
import { onClickGalleryItem, onCloseButtonClick, onCloseOverlayClick, onCloseModalClick } from "./functions";
// import * as funcM from "./functions";
refs.galleryEl.addEventListener('click', onClickGalleryItem);
refs.btnModalClose.addEventListener('click', onCloseButtonClick);
refs.lightboxOverlay.addEventListener('click', onCloseOverlayClick);
refs.modal.addEventListener('click', onCloseModalClick);