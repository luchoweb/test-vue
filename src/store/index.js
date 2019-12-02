import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlApi: 'https://api.tissini.app',
    categoriesApi: [],
    sectionsApi: [],
    productsApi: []
  },
  mutations: {
    showCategories (state, categoriesActions) {
      // Push data to state
      state.categoriesApi = categoriesActions;
    },
    showSections (state, sectionsActions) {
      // Push data to state
      state.sectionsApi = sectionsActions;
    },
    showProducts (state, productsActions) {
      // Push data to state
      state.productsApi = productsActions;
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
    },
    getProducts: async function ({ commit }, id) {
      // Get products by ID Category
      const dataProducts = await fetch(this.state.urlApi + '/api/v2/categories/'+ id +'/products');
      let productsApi = await dataProducts.json();

      // Commit to mutations
      commit('showProducts', productsApi);
    }
  }
})
