import api from '../../api';
import { SET_IMAGES, SET_RANDOM_IMAGES } from '../mutations';

export default {
  namespaced: true,
  state: {
    images: [],
    randomImages: [],
  },
  mutations: {
    [SET_IMAGES](state, images) {
      state.images = images;
    },
    [SET_RANDOM_IMAGES](state, images) {
      state.randomImages = images;
    },
  },
  actions: {
    async getImages({ commit }, query) {
      try {
        const response = await api.getImages(query);
        commit('SET_IMAGES', response.data);
      } catch (e) {
        console.log(e);
      }
    },
    async getRandomImages({ commit }) {
      try {
        const response = await api.getRandomImages();
        commit('SET_RANDOM_IMAGES', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
