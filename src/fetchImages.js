import axios from 'axios';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = 'key=28448133-ce3e4c130a7fcd3dd0a288d2a';

async function fetchImg(query, page, per_page) {
  if (query === '') {
    resetForm();
    return;
  }

  const response = await axios.get(
    `${BASE_URL}${API_KEY}&q=${query}&image_type=photo&$orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  return response;
}
