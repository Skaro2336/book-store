import NewApiService from './API';

const newApiService = new NewApiService();
async function listForCategory() {
  try {
    const response = await newApiService.fetchCategoryBooks();

    const listName = response.map(info => ({
      titleName: info.list_name,
    }));

    markapCategoryList(listName);
  } catch (error) {
    console.warn(error);
  }
}

listForCategory();

function markapCategoryList(listName) {
  const listCategory = listName.map(e => {
    return `
  <li>${e.titleName}</li>
`;
  });
  const listCategoryBooks = document.querySelector('.list-category-books');
  listCategoryBooks.insertAdjacentHTML('beforeend', listCategory.join(''));
}
async function topBooks() {
  try {
    const response = await newApiService.fetchTopFiveBooks();
    console.log(response);

    function markupCategoryList(books) {
      const list = document.querySelector('.books-container');

      books.forEach(category => {
        const titleCategory = `
      <div class= "section-category-for-books ">
        <h2 class="title-category-name">${category.list_name}</h2>
        <div class= "section-books">
          ${category.books
            .map(book => {
              return `
                <li>
                <a href="#"  data-id="${book._id}">
                  <div class = "card-book">
                    <img class = "books-card-img" src="${book.book_image}" alt="${book.title}"    width = "180";
                    height = "256" loading="lazy">
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
       <button class= "books-btn" type ="button">see more</button>
      </div>
    `;

        list.insertAdjacentHTML('beforeend', titleCategory);
      });
    }

    markupCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}

topBooks();
