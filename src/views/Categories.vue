<template>
  <main class="categories">
    <Navbar />
    <div class="container">
      <div class="content text-center">
        <div class="banner-top">
          <img :src="bannerTopUri" alt="Productos de entrega inmediata">
          <router-link v-bind:to="'/category/'" class="btn btn-sm btn-dark">Ver más</router-link>
        </div>

        <h3 class="text-left">Líneas</h3>

        <ul class="categories">
          <li v-for="(category, i) of categoriesApi" :key="i" v-show="category.active == 1" class="category">
            <router-link v-bind:to="'/category/' + category.id">
              <img :src="urlApi + category.image" :alt="category.name">
              <button class="btn btn-sm btn-dark">Ver más</button>
            </router-link>
          </li>
        </ul>

        <ul class="sections">
          <li v-for="(section, i) of sectionsApi" :key="i" class="section">
            <img :src="urlApi + section.image" :alt="section.name" class="banner">
            <ul class="products clearfix">
              <li v-for="(product, i) of section.products" :key="i" class="product">
                <router-link v-bind:to="'/category/' + product.categories.id +'/'+ product.id">
                  <img :src="urlApi + product.image.url" :alt="product.name" class="img">
                  <p class="category text-left text-uppercase">{{ product.categories.category }}</p>
                  <p class="name text-left">{{ product.name }}</p>
                  <p class="price text-left">${{ product.price }}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <MenuBottom />
  </main>
</template>

<script>
  import Vuex from 'vuex';
  import Navbar from '@/components/Navbar.vue';
  import MenuBottom from '@/components/MenuBottom.vue';

  export default {
    name: 'categories',
    components: {
      Navbar,
      MenuBottom
    },
    data() {
      return {
        bannerTopUri: 'https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png'
      }
    },
    created() {
      // Execute actions for get data from API
      this.$store.dispatch('getCategories', 'getSections');
    },
    computed: {
      // Get state from store
      ...Vuex.mapState(['categoriesApi', 'sectionsApi', 'urlApi']),
    },
    methods: {
      // Get actions from store
      ...Vuex.mapActions(['getCategories', 'getSections'])
    }
  }
</script>

<style scoped lang="scss">
  $pink: #f06292;
  $gray: #aaa;
  $black: #555;

  .content {
    .banner-top {
      margin-bottom: 15px;
      position: relative;

      img {
        max-width: 350px;
          width: 100%;
      }

      a {
        bottom: 5px;
        position: absolute;
        right: 5px;
      }
    }

    h3 {
      color: $gray;
      font-weight: 300;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      &.categories {

        .category {
          cursor: pointer;
          margin-bottom: 10px;
          position: relative;

          img {
            max-width: 350px;
            width: 100%;
          }

          button {
            bottom: 12px;
            position: absolute;
            right: 12px;
          }
        }
      }

      &.sections {
        .banner {
          max-width: 350px;
          width: 100%;
        }

        .section {
          margin-top: 30px;

          .products {
            margin-top: 20px;

            .product {
              border: 1px solid #e9e9e9;
              border-bottom: 4px solid #e9e9e9;
              border-radius: 5px 5px 0 0;
              float: left;
              margin-bottom: 20px;
              padding: 2%;
              width: 48%;

              &:hover {
                border: 1px solid $pink;
                border-bottom: 4px solid $pink;
              }

              &:nth-child(odd) {
                margin-right: 4%;
              }

              .img {
                border-radius: 5px 5px 0 0;
                margin-bottom: 10px;
                max-width: 100%;
                width: 100%;
              }

              p {
                line-height: normal;
                margin: 0px;

                &.category {
                  color: $gray;
                  font-size: 13px;
                }

                &.name {
                  color: $black;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                &.price {
                  color: $pink;
                  font-size: 15px;
                  margin-top: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>