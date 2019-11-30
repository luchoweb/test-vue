<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <a class="navbar-brand" href="#">Nombre Usuario</a>
    <div class="icons">
      <i class="icon-1 material-icons">phone</i>
      <i class="icon-2 material-icons">exit_to_app</i>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style scoped lang="scss">
  .navbar {
    box-shadow: 0px 0px 7px #aaa;
    margin-bottom: 1rem;

    .navbar-brand, .material-icons {
      color:#f06292;
    }

    .navbar-brand {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 85%;

      @media (max-width: 590px) {
        width: 70%;
      }
    }
    
  }

  .icons {
    margin-top: 5px;

    .icon-1 {
      margin-right: 20px;
    }
  }
</style>
