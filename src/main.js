import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const searchQuery = input.value.trim();
  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  fetchImages(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(data.hits);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}
