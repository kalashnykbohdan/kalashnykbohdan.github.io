'use strict';

const images = [
    {
      url:
        // 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://m.nkj.ru/upload/iblock/586/5869ae125599f498bfdc2808f206fcb2.jpg',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const Gallery = document.querySelector('#ingredients');

const picturesGallery = createGallery(images);
Gallery.insertAdjacentHTML("afterbegin", picturesGallery);

function createGallery(images){
    return images
      .map(iteam => createImages(iteam.url, iteam.alt))
      .join('');

}

function createImages(url, alt) {

        const gallery = `
        <li class="list-item">
        <img src="${url}" alt="${alt}" width="400">
        </li>`

        return gallery;
}
