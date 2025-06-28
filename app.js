const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryContainer = document.querySelector(".js-gallery");
const overlay = document.querySelector(".lightbox__overlay");

const galleryImages = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImages);

function createGalleryItems(data) {
  for (let img of galleryItems) {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    const linkEl = document.createElement("a");

    liEl.classList.add("gallery__item");
    linkEl.href = img.preview;
    linkEl.classList.add("gallery__link");
    imgEl.src = img.original;
    imgEl.alt = img.description;
    imgEl.setAttribute("data-source", img.original);
    imgEl.classList.add("gallery__image");

    galleryContainer.appendChild(liEl);
    liEl.appendChild(linkEl);
    linkEl.appendChild(imgEl);
  }

  galleryContainer.addEventListener("click", onImageClick);
}

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const galleryLightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox__image");
  const closeBtn = document.querySelector('.lightbox__button');

  galleryLightbox.classList.add("is-open");
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;

  galleryLightbox.addEventListener("click", () => {
    galleryLightbox.classList.remove("is-open");
  });

  closeBtn.addEventListener('clicl', () => {
    galleryLightbox.classList.remove("is-open");
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      galleryLightbox.classList.remove("is-open");
  }
})
}
