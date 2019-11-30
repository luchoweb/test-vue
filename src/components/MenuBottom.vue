<template>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <ul class="main-menu text-center">
      <li>
        <router-link :to="'/categories'">
          <i class="icon-1 material-icons">store</i>
          Categorías
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'category', params: { id: idCat, idP: idProduct }}">
          <i class="icon-1 material-icons">style</i>
          Catálogo
        </router-link>
      </li>
      <li>
        <router-link :to="'/cart'">
          <i class="icon-1 material-icons">local_grocery_store</i>
          Carrito
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'menuBottom',
    data() {
      return {
        idCat: this.$route.params.id === undefined ? 1 : this.$route.params.id,
        idProduct: this.$route.params.idP,
      }
    }
  }
</script>

<style scoped lang="scss">
  $pink: #f06292;

  .navbar {
    box-shadow: 1px 0px 3px #999;

    .main-menu {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      width: 310px;

      li {
        display: inline-block;
        line-height: normal;
        margin-right: 30px;
        vertical-align: middle;
        width: 75px;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #333;
          font-size: 12px;

          .material-icons {
            display: block;
            font-size: 25px;
          }

          &.router-link-exact-active {
            color: $pink;
            font-size: 14px;

            .material-icons {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
</style>