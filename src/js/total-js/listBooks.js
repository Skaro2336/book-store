// import { fetchCategoryBooks, fetchTopFiveBooks } from '../../js/total-js/API';
// function markapCategoryList(response) {
//   const listCategoryBooks = document.querySelector('.list-category-books');
//   response.forEach(e => {
//     const listCategory = `
//       <li>${e.list_name}</li>
//     `;
//     listCategoryBooks.insertAdjacentHTML('beforeend', listCategory);
//   });
// }
// function markupCategoryList(response) {
//   const list = document.querySelector('.books-container');
//   response.forEach(category => {
//     const titleCategory = `
//       <div class="section-category-for-books">
//         <h2 class="title-category-name">${category.list_name}</h2>
//         <div class="section-books">
//           ${category.books
//             .map(book => {
//               return `
//                 <li>
//                   <a href="#" data-id="${book._id}">
//                     <div class="card-book">
//                       <img class="books-card-img" src="${book.book_image}" alt="${book.title}" width="180" height="256" loading="lazy">
//                     </div>
//                     <div class="info-books">
//                       <h3 class="title-books">${book.title}</h3>
//                       <p class="name-author">${book.author}</p>
//                     </div>
//                   </a>
//                 </li>
//               `;
//             })
//             .join('')}
//         </div>
//         <button class="books-btn" type="button">see more</button>
//       </div>
//     `;
//     list.insertAdjacentHTML('beforeend', titleCategory);
//   });
// }
// async function listForCategory() {
//   try {
//     const response = await fetchCategoryBooks();
//     markapCategoryList(response);
//   } catch (error) {
//     console.warn(error);
//   }
// }
// async function topBooks() {
//   try {
//     const response = await fetchTopFiveBooks();
//     markupCategoryList(response);
//   } catch (error) {
//     console.warn(error);
//   }
// }
// listForCategory();
// topBooks();
import { getBestBooks } from '../../../src/js/total-js/API';

createMarkup();
const list = document.querySelector('.books-container');
async function createMarkup() {
  const data = await getBestBooks();
  createGalleryItem(data);
}
export function createGalleryItem(data) {
  const markup = `
    <h1 class="title-book">
      Best Sellers <span class="title-book-span">Books</span>
    </h1> <ul class="books-container"> ${data
      .map(elements => {
        return `
      <li class="books-list"> 
      <h3 class="books-list-title">${elements.list_name}</h3>
        <div class="books-card-container" data-list-id="${elements.list_name}">
          ${elements.books
            .map(book => {
              return `

            <a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
      
            <div class="books-card">
              <img
                src="${book.book_image}"
                alt="${book.title}"
                class="books-card-title-img"
                width="180"
                height="256"
                loading="lazy"
              />
              <div class="books-overlay">
                <p class="books-overlay-text">quick view</p>
              </div>
             </div> 
              <div class="books-descr">
                <h3 class="books-card-title">${book.title}</h3>
                <p class="books-card-author">${book.author}</p>
              </div>
           </a>
       `;
            })
            .join('')}
        </div>
        <button class="books-btn" type="button" data-id="${
          elements.list_name
        }">see more</button>
      </li>
      `;
      })
      .join('')}</ul>`;

  list.insertAdjacentHTML('beforeend', markup);

  // const homeBooksBtn = document.querySelectorAll('.books-btn');
  // const homeBookLink = document.querySelectorAll('.books-item-link');

  // homeBooksBtn.forEach(btn => {
  //   btn.addEventListener('click', onSeeMoreBtn);
  // });

  // homeBookLink.forEach(book => {
  //   book.addEventListener('click', onBookClick);
  // });
}
