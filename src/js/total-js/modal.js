import amazon from '../../img/amazon.svg' 
import bookApple from '../../img/book-apple.svg'
import bookShop from '../../img/book-shop.svg'

var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("book-modal");
var closeModalBtn = document.querySelector(".close-modal");
var amazonIcon = document.getElementById("amazon-icon");


openModalBtn.addEventListener("click", function() {
  modal.classList.remove("is-hidden");
});

closeModalBtn.addEventListener("click", function() {
  modal.classList.add("is-hidden");
});

amazonIcon.addEventListener("click", function() {
  window.open("https://www.amazon.com", "_blank");
});

