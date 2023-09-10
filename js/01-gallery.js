import { galleryItems } from "./gallery-items.js";

// Change code below this line

const list = document.querySelector(".gallery", createMarkUp);
list.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
list.addEventListener("click", onClick);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
   data-source="${original}" 
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function onClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentImg = evt.target.closest(".gallery__item");
  const fullImg = evt.target.dataset.source;

  function onKey(evt) {
    if (!evt.code === "Esc") {
      return;
    }
    instance.close();
  }

  const instance = basicLightbox.create(
    `
    <img
      class="gallery__image"
      src="${fullImg}"
    />
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onKey);
      },
    },
    {
      onClose: (instance) => {
        document.removeEventListener();
      },
    }
  );

  instance.show();
}
