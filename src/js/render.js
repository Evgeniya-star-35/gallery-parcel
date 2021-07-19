import {galleryItems} from "./main";
import {refs} from './refs';

 function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item ><a class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}" data-index="${index}"
      />
    </a>
  </li>`;
    })
    .join('');
}

 const imgGallery = createGallery(galleryItems);

refs.galleryEl.insertAdjacentHTML('beforeend', imgGallery);