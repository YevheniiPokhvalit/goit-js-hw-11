// В файлі main.js

// Імпорт функції initSimpleLightbox
import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const searchQuery = input.value.trim();
  if (searchQuery === '') {
    alert('Please enter a search query');
    return;
  }
  clearGallery();
  fetchImages(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(data.hits);
      }
    })
    .catch(error => console.error('Error fetching images:', error));
}
