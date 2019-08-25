import Vue from 'vue';
import Vuex from 'vuex';
import images from './modules/images';
import breeds from './modules/breeds';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    images,
    breeds,
  },
});
