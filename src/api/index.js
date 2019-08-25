import axios from 'axios';

const ROOT_URL = 'https://api.thecatapi.com/v1/';

export default {
  getBreeds() {
    return axios.get(`${ROOT_URL}breeds/`);
  },
  getImages(id) {
    return axios.get(`${ROOT_URL}images/search`, {
      params: {
        breed_ids: id,
        limit: 10,
      },
    });
  },
  getRandomImages() {
    return axios.get(`${ROOT_URL}images/search`, {
      params: {
        limit: 20,
      },
    });
  },
};
