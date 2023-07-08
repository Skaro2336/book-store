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

    const listbook = response.map(info => ({
      books: info.books,
    }));
    console.log(listbook);

    const arrayBooks = listbook.flatMap(e => e.books);
    console.log(arrayBooks);

    const bookss = arrayBooks.map(info => ({
      listName: info.list_name,
      bookImage: info.book_image,
      author: info.author,
      titleBooks: info.title,
      id: info.id,
    }));

    function markupCategoryList(books) {
      const list = document.querySelector('.books-container');
      let firstlist = '';

      books.forEach(e => {
        if (e.listName !== firstlist) {
          firstlist = e.listName;
          const titleCategory = `<h2 class="title-category-name">${e.listName}</h2>`;
          console.log(titleCategory);
          list.insertAdjacentHTML('beforeend', titleCategory);
        }

        const markupBook = `<li>
      <div>
        <a href="#">
          <img src="${e.bookImage}" alt="">
          <div class="info-books">
            <h3 class="title-books">${e.titleBooks}</h3>
            <p class="name-author">${e.author}</p>
          </div>
        </a>
      </div>
    </li>`;

        list.insertAdjacentHTML('beforeend', markupBook);
      });
    }

    markupCategoryList(bookss);

    console.log(bookss);
  } catch (error) {
    console.warn(error);
  }
}

topBooks();
