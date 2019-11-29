<template>
  <main class="categories">
    <Navbar />
    <ul class="categories">
      <li v-for="(category, i) of categories" :key="i">
        {{category.name}}
      </li>
    </ul>

    <ul class="sections">
      <li v-for="(section, i) of sections" :key="i">
        {{section.name}}
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

<style scoped lang="scss">
</style>