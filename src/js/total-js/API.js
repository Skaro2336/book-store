import axios from 'axios';
import Notiflix from 'notiflix';
export const fetchCategoryBooks = async () => {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

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
};

export const fetchTopFiveBooks = async () => {
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
};
