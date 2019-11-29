<template>
  <main class="categories">
    <Navbar />
    <ul v-for="(category, i) of categories" :key="i">
      <li>
        {{category.name}}
      </li>
    </ul>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Vuex from 'vuex'

export default {
  name: 'categories',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('getCategories', 'getSections');
  },
  computed: {
    ...Vuex.mapState(['categories', 'sections'])
  },
  methods: {
    ...Vuex.mapActions(['getCategories', 'getSections'])
  }
}
</script>