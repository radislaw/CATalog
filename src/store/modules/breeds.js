import api from '../../api';
import { SET_BREEDS } from '../mutations';

export default {
  namespaced: true,
  state: {
    breeds: [],
  },
  mutations: {
    [SET_BREEDS](state, breeds) {
      state.breeds = breeds;
    },
  },
  actions: {
    async getBreeds({ commit }) {
      try {
        const { data } = await api.getBreeds();
        commit('SET_BREEDS', data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
