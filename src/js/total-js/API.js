import axios from 'axios';
import Notiflix from 'notiflix';
export async function fetchCategoryBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';
  try {
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data.map(item => ({
      list_name: item.list_name,
    }));
  } catch (error) {
    Notiflix.Notify.warning(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}
export async function fetchTopFiveBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  try {
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    Notiflix.Notify.warning(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}
