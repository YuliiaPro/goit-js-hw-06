const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageGallery = document.querySelector('.gallery');
imageGallery.style.display = 'flex';
imageGallery.style.flexDirection = 'column';
imageGallery.style.listStyle = 'none';
imageGallery.style.rowGap = '20px';

const galleryMarkup = images.map((image) => `<li><img src = '${image.url}' alt = '${image.alt}' width = "1260" </li>`).join("");
 
imageGallery.insertAdjacentHTML("afterbegin", galleryMarkup);



