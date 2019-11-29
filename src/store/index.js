import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlApi: 'https://api.tissini.app',
    categories: [],
    sections: []
  },
  mutations: {
    showCategories (state, categoriesActions) {
      // Push data to state
      state.categories = categoriesActions;
    },
    showSections (state, sectionsActions) {
      // Push data to state
      state.sections = sectionsActions;
    }
  },
  actions: {
    getCategories: async function ({ commit }) {
      // Get categories
      const dataCategories = await fetch(this.state.urlApi + '/api/v2/categories');
      const categories = await dataCategories.json();
      // Sort by pos attribute
      categories.sort((a, b) => (a.pos > b.pos) ? 1 : -1);

      // Get sections
      const dataSections = await fetch(this.state.urlApi + '/api/v1/categories/sections');
      const sections = await dataSections.json();

      // Commit to mutations
      commit('showCategories', categories);
      commit('showSections', sections);
    }
  }
})
