import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery", createMarkUp);
list.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
list.addEventListener("click", onClick);
// const url = galleryItems.original;

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target === evt.currentTarget) {
    return;
  }
  const currentImg = evt.target.closest(".gallery__item");
}
var lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: "250",
});
console.log(galleryItems);
