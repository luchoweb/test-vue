<template>
  <main class="category" v-show="loaded">
    <Navbar />
      <div class="container">
        <div class="content text-center">
          <h3 class="text-left">{{ productsApi.categories.name }}</h3>
          <div class="categories" v-if="productsApi.categories.categories.length > 0">
            <hooper style="height: auto">
              <slide v-for="(category, i) of productsApi.categories.categories" :key="i">
                <img :src="urlApi + category.image">
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>

          <ul class="list-products">
            <li v-for="(product, i) of productsApi.products" :key="i" class="product">
              <div class="name-product clearfix">
                <p class="name">{{ product.name }}</p>
                <p class="ref">Ref. {{ product.reference }}</p>
              </div>
              <hooper style="height: auto">
                <slide v-for="(img, i) of product.images" :key="i">
                  <img v-lazy="urlApi + img.url">
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
              </hooper>
              <div class="box-price clearfix">
                <button class="btn add-cart">
                  <i class="material-icons">local_grocery_store</i> Agregar
                </button>
                <p class="price">${{product.price}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <MenuBottom />
  </main>
</template>

<script>
  import Vuex from 'vuex';
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
  import 'hooper/dist/hooper.css';
  import Navbar from '@/components/Navbar.vue';
  import MenuBottom from '@/components/MenuBottom.vue';

  export default {
    name: 'category',
    components: {
      Navbar,
      MenuBottom,
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination
    },
    data() {
      return {
        idCat: this.$route.params.id === undefined ? 1 : this.$route.params.id,
        idProduct: this.$route.params.idP,
        urlApi: 'https://api.tissini.app',
        loaded: false
      }
    },
    created() {
      // Execute actions for get data from API
      this.$store.dispatch('getProducts', this.idCat);
      this.loaded = true;
    },
    computed: {
      // Get state from store
      ...Vuex.mapState(['productsApi']),
    },
    methods: {
      // Get actions from store
      ...Vuex.mapActions(['getProducts'])
    }
  }
</script>

<style scoped lang="scss">
  $pink: #f06292;
  $gray: #aaa;
  $black: #555;

  .content {
    .list-products {
      margin-top: 20px;

      .product {
        .name-product {
          p {
            margin-bottom: 5px;

            &.name {
              float: left;
              font-size: 18px;
            }
            &.ref {
              float: right;
              font-weight: 300;
            }
          }
        }

        .box-price {
          margin: 10px 0 30px 0;

          .add-cart {
            background-color: $pink;
            color: #fff;
            float: left;
            font-weight: 300;
            text-transform: uppercase;

            i {
              vertical-align: text-bottom;
            }
          }

          .price {
            color: $pink;
            font-size: 22px;
            float: right;
          }
        }
      }
    }

    .hooper-track {
      li {
        img {
          height: auto;
          width: 100%;
        }
      }
    }
  }
</style>