<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  a, a:hover {
    text-decoration: none;
  }
  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .content {
    margin: 0 auto;
    padding-bottom: 55px;
    width: 350px;

    @media (max-width: 370px) {
      width: 100%;
    }
  }
</style>