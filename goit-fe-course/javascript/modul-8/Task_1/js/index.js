'use strict';
import gallery_items from './gallery_items.js';


const galleryList = document.querySelector('.js-gallery');
galleryList.insertAdjacentHTML("afterbegin", createLiGallery(gallery_items));

function createLiGallery(gallery_items){
    return gallery_items
      .map(iteam => createImages(iteam.preview, iteam.original, iteam.description))
      .join('');

}

function createImages(preview, original, description) {

        const gallery = `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" width="400">
        </a>
        </li>`

        return gallery;
}
//--------------------------------------------------------------------------

const openImageBtn = document.querySelector('.js-lightbox');
galleryList.addEventListener('click', openImage);
const closeImageBtn = document.querySelector('.lightbox__button');
closeImageBtn.addEventListener('click', closeImage);





function openImage(e){
        e.preventDefault();

        openImageBtn.classList.add('is-open');
        const lightboxImag = document.querySelector('.lightbox__imag');
        lightboxImag.src = e.target.getAttribute("data-src");
        lightboxImag.alt = e.target.alt;
        
}

function closeImage(e){
        e.preventDefault();
        openImageBtn.classList.remove('is-open')
        const lightboxImag = document.querySelector('.lightbox__imag');
        lightboxImag.src = 'unknown';
        lightboxImag.alt = '';
}

