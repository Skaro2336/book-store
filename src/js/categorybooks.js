import NewApiService from './API';
const list = document.body;
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
    return `<ul>
  <li>${e.titleName}</li>
</ul>`;
  });

  list.insertAdjacentHTML('beforeend', listCategory.join(''));
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
    }));

    function markupCategoryList(books) {
      const listBooks = books.map(e => {
        return `<div>
          <h2 class: title-categonry-name>${e.listName}</h2>
          <ul class="books">
            <li>
              <img src="${e.bookImage}" alt="">
              <p class: title-books>${e.titleBooks}</p>
              <p class: name-author>${e.author}</p>
            </li>
          </ul>
          <button>See More</button>
        </div>`;
      });

      const list = document.body;
      list.insertAdjacentHTML('beforeend', listBooks.join(''));
    }

    markupCategoryList(bookss);

    console.log(bookss);
  } catch (error) {
    console.warn(error);
  }
}

topBooks();
