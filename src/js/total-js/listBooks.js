import { fetchCategoryBooks, fetchTopFiveBooks } from './API';

function markapCategoryList(listName) {
  const listCategoryBooks = document.querySelector('.list-category-books');
  listName.forEach(e => {
    const listCategory = `
      <li>${e.list_name}</li>
    `;
    listCategoryBooks.insertAdjacentHTML('beforeend', listCategory);
  });
}

function markupCategoryList(books) {
  const list = document.querySelector('.books-container');
  books.forEach(category => {
    const titleCategory = `
      <div class="section-category-for-books">
        <h2 class="title-category-name">${category.list_name}</h2>
        <div class="section-books">
          ${category.books
            .map(book => {
              return `
                <li>
                  <a href="#" data-id="${book._id}">
                    <div class="card-book">
                      <img class="books-card-img" src="${book.book_image}" alt="${book.title}" width="180" height="256" loading="lazy">
                    </div>
                    <div class="info-books">
                      <h3 class="title-books">${book.title}</h3>
                      <p class="name-author">${book.author}</p>
                    </div>
                  </a>
                </li>
              `;
            })
            .join('')}
        </div>
        <button class="books-btn" type="button">see more</button>
      </div>
    `;

    list.insertAdjacentHTML('beforeend', titleCategory);
  });
}

async function listForCategory() {
  try {
    const response = await fetchCategoryBooks();
    markapCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}

async function topBooks() {
  try {
    const response = await fetchTopFiveBooks();
    markupCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}

listForCategory();
topBooks();
