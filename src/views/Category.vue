<template>
  <main class="category">
    <Navbar />
    Category {{ idCat }}
    Product {{ idProduct }}
    <MenuBottom />
  </main>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import MenuBottom from '@/components/MenuBottom.vue';

  export default {
    name: 'category',
    components: {
      Navbar,
      MenuBottom
    },
    data() {
      return {
        idCat: this.$route.params.id === undefined ? 1 : this.$route.params.id,
        idProduct: this.$route.params.idP
      }
    }
  }
</script>

<style scoped lang="scss">
</style>