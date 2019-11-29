import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    sections: []
  },
  mutations: {
    showCategories (state, categoriesActions) {
      state.categories = categoriesActions;
    },
    showSections (state, sectionsActions) {
      state.sections = sectionsActions;
    }
  },
  actions: {
    getCategories: async function ({ commit }) {
      const urlApi = 'https://api.tissini.app/api';
      // Get categories
      const dataCategories = await fetch(urlApi + '/v2/categories');
      const categories = await dataCategories.json();
      // Get sections
      const dataSections = await fetch(urlApi + '/v1/categories/sections');
      const sections = await dataSections.json();
      // Commit to mutations
      commit('showCategories', categories);
      commit('showSections', sections);
    }
  }
})
