import SimpleLightbox from 'simplelightbox';

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function initSimpleLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });
  lightbox.refresh();
}

function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  clearGallery();
  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
  initSimpleLightbox();
}

function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');

  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.classList.add('simplelightbox');
  link.setAttribute('data-lightbox', 'gallery');

  const imageElement = document.createElement('img');
  imageElement.src = image.webformatURL;
  imageElement.alt = image.tags;
  imageElement.classList.add('card-img-top');

  link.appendChild(imageElement);
  card.appendChild(link);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const likes = document.createElement('p');
  likes.classList.add('card-text');
  likes.textContent = `Likes: ${image.likes}`;

  const views = document.createElement('p');
  views.classList.add('card-text');
  views.textContent = `Views: ${image.views}`;

  const comments = document.createElement('p');
  comments.classList.add('card-text');
  comments.textContent = `Comments: ${image.comments}`;

  const downloads = document.createElement('p');
  downloads.classList.add('card-text');
  downloads.textContent = `Downloads: ${image.downloads}`;

  cardBody.appendChild(likes);
  cardBody.appendChild(views);
  cardBody.appendChild(comments);
  cardBody.appendChild(downloads);

  card.appendChild(cardBody);

  return card;
}

export { clearGallery, renderImages };
