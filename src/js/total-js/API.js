import axios from 'axios';
export default class NewApiService {
  constructor() {}

  async fetchCategoryBooks() {
    const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

    try {
      const response = await axios.get(BASE_URL);

      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
  async fetchTopFiveBooks() {
    const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
    try {
      const response = await axios.get(BASE_URL);

      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}
