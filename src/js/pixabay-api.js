const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42800800-86f7251243bc7e4391903d90a';
const loader = document.querySelector('.loader');

function fetchImages(searchQuery, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}
  `;
  loader.style.display = 'block';
  return fetch(url)
    .then(response => {
      loader.style.display = 'none';
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching data');
    })
    .catch(error => console.error('Error:', error));
}

export { fetchImages };
